<h1 id="payment-initiation-api">Payment Initiation API v3.1.7</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Swagger for Payment Initiation API Specification

Base URLs:

* <a href="https://openbanking.org.uk">https://openbanking.org.uk</a>

* <a href="https://api.apis.guru/open-banking/v3.1/pisp">https://api.apis.guru/open-banking/v3.1/pisp</a>

<a href="https://www.openbanking.org.uk/terms">Terms of service</a>
Email: <a href="mailto:ServiceDesk@openbanking.org.uk">Service Desk</a> 
License: <a href="https://www.openbanking.org.uk/open-licence">open-licence</a>

# Authentication

- oAuth2 authentication. OAuth flow, it is required when the PSU needs to perform SCA with the ASPSP when a TPP wants to access an ASPSP resource owned by the PSU

    - Flow: authorizationCode
    - Authorization URL = [https://authserver.example/authorization](https://authserver.example/authorization)
    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|payments|Generic payment scope|

- oAuth2 authentication. TPP client credential authorisation flow with the ASPSP

    - Flow: clientCredentials
    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|payments|Generic payment scope|

<h1 id="payment-initiation-api-domestic-payments">Domestic Payments</h1>

## Create Domestic Payment Consents

<a id="opIdCreateDomesticPaymentConsents"></a>

> Code samples

```bash
curl https://example.com/domestic-payment-consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "Authorisation": {
        "AuthorisationType": "Any",
        "CompletionDateTime": "1970-01-01T00:00:00Z"
      },
      "Initiation": {
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorPostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "EndToEndIdentification": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "InstructionIdentification": "string",
        "LocalInstrument": "string",
        "RemittanceInformation": {
          "Reference": "string",
          "Unstructured": "string"
        },
        "SupplementaryData": {}
      },
      "ReadRefundAccount": "No",
      "SCASupportData": {
        "AppliedAuthenticationApproach": "CA",
        "ReferencePaymentOrderId": "string",
        "RequestedSCAExemptionType": "BillPayment"
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /domestic-payment-consents`

> Body parameter

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-domestic-payment-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteDomesticConsent4](#schemaobwritedomesticconsent4)|true|Default|
|» Data|body|object|true|none|
|» » Authorisation|body|object|false|The authorisation type request from the TPP.|
|» » » AuthorisationType|body|string|true|Type of authorisation flow requested.|
|» » » CompletionDateTime|body|string(date-time)|false|Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.|
|» » » CreditorAccount|body|object|true|Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » CreditorPostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » DebtorAccount|body|object|false|Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » EndToEndIdentification|body|string|true|Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.<br>Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.<br>OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.|
|» » » InstructedAmount|body|object|true|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » InstructionIdentification|body|string|true|Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.<br>Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.|
|» » » LocalInstrument|body|[OBExternalLocalInstrument1Code](#schemaobexternallocalinstrument1code)|false|User community specific instrument.<br>Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.|
|» » » RemittanceInformation|body|object|false|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.|
|» » » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.<br>OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.|
|» » » » Unstructured|body|string|false|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» » ReadRefundAccount|body|string|false|Specifies to share the refund account details with PISP|
|» » SCASupportData|body|[OBSCASupportData1](#schemaobscasupportdata1)|false|Supporting Data provided by TPP, when requesting SCA Exemption.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » AuthorisationType|Any|
|» » » AuthorisationType|Single|
|» » ReadRefundAccount|No|
|» » ReadRefundAccount|Yes|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-domestic-payment-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Domestic Payment Consents Created|[OBWriteDomesticConsentResponse5](#schemaobwritedomesticconsentresponse5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get Domestic Payment Consents

<a id="opIdGetDomesticPaymentConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/domestic-payment-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domestic-payment-consents/{ConsentId}`

<h3 id="get-domestic-payment-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-domestic-payment-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domestic Payment Consents Read|[OBWriteDomesticConsentResponse5](#schemaobwritedomesticconsentresponse5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get Domestic Payment Consents Funds Confirmation

<a id="opIdGetDomesticPaymentConsentsConsentIdFundsConfirmation"></a>

> Code samples

```bash
curl https://example.com/domestic-payment-consents/string/funds-confirmation \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domestic-payment-consents/{ConsentId}/funds-confirmation`

<h3 id="get-domestic-payment-consents-funds-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "FundsAvailableResult": {
      "FundsAvailable": true,
      "FundsAvailableDateTime": "1970-01-01T00:00:00Z"
    },
    "SupplementaryData": {}
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-domestic-payment-consents-funds-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domestic Payment Consents Read|[OBWriteFundsConfirmationResponse1](#schemaobwritefundsconfirmationresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: payments )
</aside>

## Create Domestic Payments

<a id="opIdCreateDomesticPayments"></a>

> Code samples

```bash
curl https://example.com/domestic-payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "ConsentId": "string",
      "Initiation": {
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorPostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "EndToEndIdentification": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "InstructionIdentification": "string",
        "LocalInstrument": "string",
        "RemittanceInformation": {
          "Reference": "string",
          "Unstructured": "string"
        },
        "SupplementaryData": {}
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /domestic-payments`

> Body parameter

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-domestic-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteDomestic2](#schemaobwritedomestic2)|true|Default|
|» Data|body|object|true|none|
|» » ConsentId|body|string|true|OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.|
|» » » CreditorAccount|body|object|true|Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » CreditorPostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » DebtorAccount|body|object|false|Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » EndToEndIdentification|body|string|true|Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.<br>Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.<br>OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.|
|» » » InstructedAmount|body|object|true|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » InstructionIdentification|body|string|true|Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.<br>Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.|
|» » » LocalInstrument|body|[OBExternalLocalInstrument1Code](#schemaobexternallocalinstrument1code)|false|User community specific instrument.<br>Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.|
|» » » RemittanceInformation|body|object|false|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.|
|» » » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.<br>OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.|
|» » » » Unstructured|body|string|false|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "DomesticPaymentId": "string",
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      }
    },
    "Status": "AcceptedCreditSettlementCompleted",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-domestic-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Domestic Payments Created|[OBWriteDomesticResponse5](#schemaobwritedomesticresponse5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: payments )
</aside>

## Get Domestic Payments

<a id="opIdGetDomesticPaymentsDomesticPaymentId"></a>

> Code samples

```bash
curl https://example.com/domestic-payments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domestic-payments/{DomesticPaymentId}`

<h3 id="get-domestic-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomesticPaymentId|path|string|true|DomesticPaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "DomesticPaymentId": "string",
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      }
    },
    "Status": "AcceptedCreditSettlementCompleted",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-domestic-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domestic Payments Read|[OBWriteDomesticResponse5](#schemaobwritedomesticresponse5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

<h1 id="payment-initiation-api-payment-details">Payment Details</h1>

## Get Payment Details

<a id="opIdGetDomesticPaymentsDomesticPaymentIdPaymentDetails"></a>

> Code samples

```bash
curl https://example.com/domestic-payments/string/payment-details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domestic-payments/{DomesticPaymentId}/payment-details`

<h3 id="get-payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomesticPaymentId|path|string|true|DomesticPaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "PaymentStatus": [
      {
        "PaymentTransactionId": "string",
        "Status": "Accepted",
        "StatusDetail": {
          "LocalInstrument": "string",
          "Status": "string",
          "StatusReason": "Cancelled",
          "StatusReasonDescription": "string"
        },
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment Details Read|[OBWritePaymentDetailsResponse1](#schemaobwritepaymentdetailsresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get Payment Details

<a id="opIdGetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails"></a>

> Code samples

```bash
curl https://example.com/domestic-scheduled-payments/string/payment-details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domestic-scheduled-payments/{DomesticScheduledPaymentId}/payment-details`

<h3 id="get-payment-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomesticScheduledPaymentId|path|string|true|DomesticScheduledPaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "PaymentStatus": [
      {
        "PaymentTransactionId": "string",
        "Status": "Accepted",
        "StatusDetail": {
          "LocalInstrument": "string",
          "Status": "string",
          "StatusReason": "Cancelled",
          "StatusReasonDescription": "string"
        },
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-payment-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment Details Read|[OBWritePaymentDetailsResponse1](#schemaobwritepaymentdetailsresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get Payment Details

<a id="opIdGetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails"></a>

> Code samples

```bash
curl https://example.com/domestic-standing-orders/string/payment-details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domestic-standing-orders/{DomesticStandingOrderId}/payment-details`

<h3 id="get-payment-details-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomesticStandingOrderId|path|string|true|DomesticStandingOrderId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "PaymentStatus": [
      {
        "PaymentTransactionId": "string",
        "Status": "Accepted",
        "StatusDetail": {
          "LocalInstrument": "string",
          "Status": "string",
          "StatusReason": "Cancelled",
          "StatusReasonDescription": "string"
        },
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-payment-details-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment Details Read|[OBWritePaymentDetailsResponse1](#schemaobwritepaymentdetailsresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get Payment Details

<a id="opIdGetFilePaymentsFilePaymentIdPaymentDetails"></a>

> Code samples

```bash
curl https://example.com/file-payments/string/payment-details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /file-payments/{FilePaymentId}/payment-details`

<h3 id="get-payment-details-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FilePaymentId|path|string|true|FilePaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "PaymentStatus": [
      {
        "PaymentTransactionId": "string",
        "Status": "Accepted",
        "StatusDetail": {
          "LocalInstrument": "string",
          "Status": "string",
          "StatusReason": "Cancelled",
          "StatusReasonDescription": "string"
        },
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-payment-details-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment Details Read|[OBWritePaymentDetailsResponse1](#schemaobwritepaymentdetailsresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get Payment Details

<a id="opIdGetInternationalPaymentsInternationalPaymentIdPaymentDetails"></a>

> Code samples

```bash
curl https://example.com/international-payments/string/payment-details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-payments/{InternationalPaymentId}/payment-details`

<h3 id="get-payment-details-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InternationalPaymentId|path|string|true|InternationalPaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "PaymentStatus": [
      {
        "PaymentTransactionId": "string",
        "Status": "Accepted",
        "StatusDetail": {
          "LocalInstrument": "string",
          "Status": "string",
          "StatusReason": "Cancelled",
          "StatusReasonDescription": "string"
        },
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-payment-details-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment Details Read|[OBWritePaymentDetailsResponse1](#schemaobwritepaymentdetailsresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get Payment Details

<a id="opIdGetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails"></a>

> Code samples

```bash
curl https://example.com/international-scheduled-payments/string/payment-details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details`

<h3 id="get-payment-details-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InternationalScheduledPaymentId|path|string|true|InternationalScheduledPaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "PaymentStatus": [
      {
        "PaymentTransactionId": "string",
        "Status": "Accepted",
        "StatusDetail": {
          "LocalInstrument": "string",
          "Status": "string",
          "StatusReason": "Cancelled",
          "StatusReasonDescription": "string"
        },
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-payment-details-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment Details Read|[OBWritePaymentDetailsResponse1](#schemaobwritepaymentdetailsresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get Payment Details

<a id="opIdGetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails"></a>

> Code samples

```bash
curl https://example.com/international-standing-orders/string/payment-details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-standing-orders/{InternationalStandingOrderPaymentId}/payment-details`

<h3 id="get-payment-details-6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InternationalStandingOrderPaymentId|path|string|true|InternationalStandingOrderPaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "PaymentStatus": [
      {
        "PaymentTransactionId": "string",
        "Status": "Accepted",
        "StatusDetail": {
          "LocalInstrument": "string",
          "Status": "string",
          "StatusReason": "Cancelled",
          "StatusReasonDescription": "string"
        },
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-payment-details-6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment Details Read|[OBWritePaymentDetailsResponse1](#schemaobwritepaymentdetailsresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

<h1 id="payment-initiation-api-domestic-scheduled-payments">Domestic Scheduled Payments</h1>

## Create Domestic Scheduled Payment Consents

<a id="opIdCreateDomesticScheduledPaymentConsents"></a>

> Code samples

```bash
curl https://example.com/domestic-scheduled-payment-consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "Authorisation": {
        "AuthorisationType": "Any",
        "CompletionDateTime": "1970-01-01T00:00:00Z"
      },
      "Initiation": {
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorPostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "EndToEndIdentification": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "InstructionIdentification": "string",
        "LocalInstrument": "string",
        "RemittanceInformation": {
          "Reference": "string",
          "Unstructured": "string"
        },
        "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
        "SupplementaryData": {}
      },
      "Permission": "Create",
      "ReadRefundAccount": "No",
      "SCASupportData": {
        "AppliedAuthenticationApproach": "CA",
        "ReferencePaymentOrderId": "string",
        "RequestedSCAExemptionType": "BillPayment"
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /domestic-scheduled-payment-consents`

> Body parameter

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-domestic-scheduled-payment-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteDomesticScheduledConsent4](#schemaobwritedomesticscheduledconsent4)|true|Default|
|» Data|body|object|true|none|
|» » Authorisation|body|object|false|The authorisation type request from the TPP.|
|» » » AuthorisationType|body|string|true|Type of authorisation flow requested.|
|» » » CompletionDateTime|body|string(date-time)|false|Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.|
|» » » CreditorAccount|body|object|true|Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » CreditorPostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » DebtorAccount|body|object|false|Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » EndToEndIdentification|body|string|false|Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.<br>Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.<br>OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.|
|» » » InstructedAmount|body|object|true|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » InstructionIdentification|body|string|true|Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.<br>Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.|
|» » » LocalInstrument|body|[OBExternalLocalInstrument1Code](#schemaobexternallocalinstrument1code)|false|User community specific instrument.<br>Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.|
|» » » RemittanceInformation|body|object|false|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.|
|» » » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.<br>OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.|
|» » » » Unstructured|body|string|false|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|
|» » » RequestedExecutionDateTime|body|string(date-time)|true|Date at which the initiating party requests the clearing agent to process the payment. <br>Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» » Permission|body|string|true|Specifies the Open Banking service request types.|
|» » ReadRefundAccount|body|string|false|Specifies to share the refund account details with PISP|
|» » SCASupportData|body|[OBSCASupportData1](#schemaobscasupportdata1)|false|Supporting Data provided by TPP, when requesting SCA Exemption.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » AuthorisationType|Any|
|» » » AuthorisationType|Single|
|» » Permission|Create|
|» » ReadRefundAccount|No|
|» » ReadRefundAccount|Yes|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-domestic-scheduled-payment-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Domestic Scheduled Payment Consents Created|[OBWriteDomesticScheduledConsentResponse5](#schemaobwritedomesticscheduledconsentresponse5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get Domestic Scheduled Payment Consents

<a id="opIdGetDomesticScheduledPaymentConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/domestic-scheduled-payment-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domestic-scheduled-payment-consents/{ConsentId}`

<h3 id="get-domestic-scheduled-payment-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-domestic-scheduled-payment-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domestic Scheduled Payment Consents Read|[OBWriteDomesticScheduledConsentResponse5](#schemaobwritedomesticscheduledconsentresponse5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Create Domestic Scheduled Payments

<a id="opIdCreateDomesticScheduledPayments"></a>

> Code samples

```bash
curl https://example.com/domestic-scheduled-payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "ConsentId": "string",
      "Initiation": {
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorPostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "EndToEndIdentification": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "InstructionIdentification": "string",
        "LocalInstrument": "string",
        "RemittanceInformation": {
          "Reference": "string",
          "Unstructured": "string"
        },
        "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
        "SupplementaryData": {}
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /domestic-scheduled-payments`

> Body parameter

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-domestic-scheduled-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteDomesticScheduled2](#schemaobwritedomesticscheduled2)|true|Default|
|» Data|body|object|true|none|
|» » ConsentId|body|string|true|OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.|
|» » » CreditorAccount|body|object|true|Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » CreditorPostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » DebtorAccount|body|object|false|Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » EndToEndIdentification|body|string|false|Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.<br>Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.<br>OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.|
|» » » InstructedAmount|body|object|true|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » InstructionIdentification|body|string|true|Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.<br>Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.|
|» » » LocalInstrument|body|[OBExternalLocalInstrument1Code](#schemaobexternallocalinstrument1code)|false|User community specific instrument.<br>Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.|
|» » » RemittanceInformation|body|object|false|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.|
|» » » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.<br>OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.|
|» » » » Unstructured|body|string|false|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|
|» » » RequestedExecutionDateTime|body|string(date-time)|true|Date at which the initiating party requests the clearing agent to process the payment. <br>Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "DomesticScheduledPaymentId": "string",
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-domestic-scheduled-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Domestic Scheduled Payments Created|[OBWriteDomesticScheduledResponse5](#schemaobwritedomesticscheduledresponse5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: payments )
</aside>

## Get Domestic Scheduled Payments

<a id="opIdGetDomesticScheduledPaymentsDomesticScheduledPaymentId"></a>

> Code samples

```bash
curl https://example.com/domestic-scheduled-payments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domestic-scheduled-payments/{DomesticScheduledPaymentId}`

<h3 id="get-domestic-scheduled-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomesticScheduledPaymentId|path|string|true|DomesticScheduledPaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "DomesticScheduledPaymentId": "string",
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-domestic-scheduled-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domestic Scheduled Payments Read|[OBWriteDomesticScheduledResponse5](#schemaobwritedomesticscheduledresponse5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

<h1 id="payment-initiation-api-domestic-standing-orders">Domestic Standing Orders</h1>

## Create Domestic Standing Order Consents

<a id="opIdCreateDomesticStandingOrderConsents"></a>

> Code samples

```bash
curl https://example.com/domestic-standing-order-consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "Authorisation": {
        "AuthorisationType": "Any",
        "CompletionDateTime": "1970-01-01T00:00:00Z"
      },
      "Initiation": {
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "FinalPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
        "FirstPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
        "Frequency": "string",
        "NumberOfPayments": "string",
        "RecurringPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
        "Reference": "string",
        "SupplementaryData": {}
      },
      "Permission": "Create",
      "ReadRefundAccount": "No",
      "SCASupportData": {
        "AppliedAuthenticationApproach": "CA",
        "ReferencePaymentOrderId": "string",
        "RequestedSCAExemptionType": "BillPayment"
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /domestic-standing-order-consents`

> Body parameter

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "NumberOfPayments": "string",
      "RecurringPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-domestic-standing-order-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteDomesticStandingOrderConsent5](#schemaobwritedomesticstandingorderconsent5)|true|Default|
|» Data|body|object|true|none|
|» » Authorisation|body|object|false|The authorisation type request from the TPP.|
|» » » AuthorisationType|body|string|true|Type of authorisation flow requested.|
|» » » CompletionDateTime|body|string(date-time)|false|Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.|
|» » » CreditorAccount|body|object|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » DebtorAccount|body|object|false|Provides the details to identify the debtor account.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » FinalPaymentAmount|body|object|false|The amount of the final Standing Order|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » FinalPaymentDateTime|body|string(date-time)|false|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » FirstPaymentAmount|body|object|true|The amount of the first Standing Order|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » FirstPaymentDateTime|body|string(date-time)|true|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » Frequency|body|string|true|Individual Definitions:<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). <br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. <br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. <br>Individual Patterns:<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>EvryDay<br>EvryWorkgDay<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01])<br>QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED)<br>Full Regular Expression:<br>^(EvryDay)$\|^(EvryWorkgDay)$\|^(IntrvlWkDay:0[1-9]:0[1-7])$\|^(WkInMnthDay:0[1-5]:0[1-7])$\|^(IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01]))$\|^(QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED))$|
|» » » NumberOfPayments|body|string|false|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|» » » RecurringPaymentAmount|body|object|false|The amount of the recurring Standing Order|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » RecurringPaymentDateTime|body|string(date-time)|false|The date on which the first recurring payment for a Standing Order schedule will be made. <br>Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» » Permission|body|string|true|Specifies the Open Banking service request types.|
|» » ReadRefundAccount|body|string|false|Specifies to share the refund account details with PISP|
|» » SCASupportData|body|[OBSCASupportData1](#schemaobscasupportdata1)|false|Supporting Data provided by TPP, when requesting SCA Exemption.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » AuthorisationType|Any|
|» » » AuthorisationType|Single|
|» » Permission|Create|
|» » ReadRefundAccount|No|
|» » ReadRefundAccount|Yes|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "NumberOfPayments": "string",
      "RecurringPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-domestic-standing-order-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Domestic Standing Order Consents Created|[OBWriteDomesticStandingOrderConsentResponse6](#schemaobwritedomesticstandingorderconsentresponse6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get Domestic Standing Order Consents

<a id="opIdGetDomesticStandingOrderConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/domestic-standing-order-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domestic-standing-order-consents/{ConsentId}`

<h3 id="get-domestic-standing-order-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "NumberOfPayments": "string",
      "RecurringPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-domestic-standing-order-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domestic Standing Order Consents Read|[OBWriteDomesticStandingOrderConsentResponse6](#schemaobwritedomesticstandingorderconsentresponse6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Create Domestic Standing Orders

<a id="opIdCreateDomesticStandingOrders"></a>

> Code samples

```bash
curl https://example.com/domestic-standing-orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "ConsentId": "string",
      "Initiation": {
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "FinalPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
        "FirstPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
        "Frequency": "string",
        "NumberOfPayments": "string",
        "RecurringPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
        "Reference": "string",
        "SupplementaryData": {}
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /domestic-standing-orders`

> Body parameter

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "NumberOfPayments": "string",
      "RecurringPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-domestic-standing-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteDomesticStandingOrder3](#schemaobwritedomesticstandingorder3)|true|Default|
|» Data|body|object|true|none|
|» » ConsentId|body|string|true|OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.|
|» » » CreditorAccount|body|object|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » DebtorAccount|body|object|false|Provides the details to identify the debtor account.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » FinalPaymentAmount|body|object|false|The amount of the final Standing Order|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » FinalPaymentDateTime|body|string(date-time)|false|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » FirstPaymentAmount|body|object|true|The amount of the first Standing Order|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » FirstPaymentDateTime|body|string(date-time)|true|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » Frequency|body|string|true|Individual Definitions:<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). <br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. <br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. <br>Individual Patterns:<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>EvryDay<br>EvryWorkgDay<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01])<br>QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED)<br>Full Regular Expression:<br>^(EvryDay)$\|^(EvryWorkgDay)$\|^(IntrvlWkDay:0[1-9]:0[1-7])$\|^(WkInMnthDay:0[1-5]:0[1-7])$\|^(IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01]))$\|^(QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED))$|
|» » » NumberOfPayments|body|string|false|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|» » » RecurringPaymentAmount|body|object|false|The amount of the recurring Standing Order|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » RecurringPaymentDateTime|body|string(date-time)|false|The date on which the first recurring payment for a Standing Order schedule will be made. <br>Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "DomesticStandingOrderId": "string",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "NumberOfPayments": "string",
      "RecurringPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-domestic-standing-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Domestic Standing Orders Created|[OBWriteDomesticStandingOrderResponse6](#schemaobwritedomesticstandingorderresponse6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: payments )
</aside>

## Get Domestic Standing Orders

<a id="opIdGetDomesticStandingOrdersDomesticStandingOrderId"></a>

> Code samples

```bash
curl https://example.com/domestic-standing-orders/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domestic-standing-orders/{DomesticStandingOrderId}`

<h3 id="get-domestic-standing-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomesticStandingOrderId|path|string|true|DomesticStandingOrderId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "DomesticStandingOrderId": "string",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "NumberOfPayments": "string",
      "RecurringPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-domestic-standing-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domestic Standing Orders Read|[OBWriteDomesticStandingOrderResponse6](#schemaobwritedomesticstandingorderresponse6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

<h1 id="payment-initiation-api-file-payments">File Payments</h1>

## Create File Payment Consents

<a id="opIdCreateFilePaymentConsents"></a>

> Code samples

```bash
curl https://example.com/file-payment-consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "Authorisation": {
        "AuthorisationType": "Any",
        "CompletionDateTime": "1970-01-01T00:00:00Z"
      },
      "Initiation": {
        "ControlSum": 0,
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "FileHash": "string",
        "FileReference": "string",
        "FileType": "string",
        "LocalInstrument": "string",
        "NumberOfTransactions": "string",
        "RemittanceInformation": {
          "Reference": "string",
          "Unstructured": "string"
        },
        "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
        "SupplementaryData": {}
      },
      "SCASupportData": {
        "AppliedAuthenticationApproach": "CA",
        "ReferencePaymentOrderId": "string",
        "RequestedSCAExemptionType": "BillPayment"
      }
    }
  }'
```

`POST /file-payment-consents`

> Body parameter

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "ControlSum": 0,
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FileHash": "string",
      "FileReference": "string",
      "FileType": "string",
      "LocalInstrument": "string",
      "NumberOfTransactions": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  }
}
```

<h3 id="create-file-payment-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteFileConsent3](#schemaobwritefileconsent3)|true|Default|
|» Data|body|object|true|none|
|» » Authorisation|body|object|false|The authorisation type request from the TPP.|
|» » » AuthorisationType|body|string|true|Type of authorisation flow requested.|
|» » » CompletionDateTime|body|string(date-time)|false|Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.|
|» » » ControlSum|body|number|false|Total of all individual amounts included in the group, irrespective of currencies.|
|» » » DebtorAccount|body|object|false|Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » FileHash|body|string|true|A base64 encoding of a SHA256 hash of the file to be uploaded.|
|» » » FileReference|body|string|false|Reference for the file.|
|» » » FileType|body|string|true|Specifies the payment file type.|
|» » » LocalInstrument|body|[OBExternalLocalInstrument1Code](#schemaobexternallocalinstrument1code)|false|User community specific instrument.<br>Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.|
|» » » NumberOfTransactions|body|string|false|Number of individual transactions contained in the payment information group.|
|» » » RemittanceInformation|body|object|false|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.|
|» » » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.<br>OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.|
|» » » » Unstructured|body|string|false|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|
|» » » RequestedExecutionDateTime|body|string(date-time)|false|Date at which the initiating party requests the clearing agent to process the payment. <br>Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» » SCASupportData|body|[OBSCASupportData1](#schemaobscasupportdata1)|false|Supporting Data provided by TPP, when requesting SCA Exemption.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » AuthorisationType|Any|
|» » » AuthorisationType|Single|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "ControlSum": 0,
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FileHash": "string",
      "FileReference": "string",
      "FileType": "string",
      "LocalInstrument": "string",
      "NumberOfTransactions": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-file-payment-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|File Payment Consents Created|[OBWriteFileConsentResponse4](#schemaobwritefileconsentresponse4)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get File Payment Consents

<a id="opIdGetFilePaymentConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/file-payment-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /file-payment-consents/{ConsentId}`

<h3 id="get-file-payment-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "ControlSum": 0,
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FileHash": "string",
      "FileReference": "string",
      "FileType": "string",
      "LocalInstrument": "string",
      "NumberOfTransactions": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-file-payment-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File Payment Consents Read|[OBWriteFileConsentResponse4](#schemaobwritefileconsentresponse4)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get File Payment Consents

<a id="opIdGetFilePaymentConsentsConsentIdFile"></a>

> Code samples

```bash
curl https://example.com/file-payment-consents/string/file \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /file-payment-consents/{ConsentId}/file`

<h3 id="get-file-payment-consents-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-file-payment-consents-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File Payment Consents Read|[File](#schemafile)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Create File Payment Consents

<a id="opIdCreateFilePaymentConsentsConsentIdFile"></a>

> Code samples

```bash
curl https://example.com/file-payment-consents/string/file \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{}'
```

`POST /file-payment-consents/{ConsentId}/file`

> Body parameter

```json
{}
```

<h3 id="create-file-payment-consents-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[File](#schemafile)|true|Default|

> Example responses

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-file-payment-consents-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File Payment Consents Created|None|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Create File Payments

<a id="opIdCreateFilePayments"></a>

> Code samples

```bash
curl https://example.com/file-payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "ConsentId": "string",
      "Initiation": {
        "ControlSum": 0,
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "FileHash": "string",
        "FileReference": "string",
        "FileType": "string",
        "LocalInstrument": "string",
        "NumberOfTransactions": "string",
        "RemittanceInformation": {
          "Reference": "string",
          "Unstructured": "string"
        },
        "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
        "SupplementaryData": {}
      }
    }
  }'
```

`POST /file-payments`

> Body parameter

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "ControlSum": 0,
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FileHash": "string",
      "FileReference": "string",
      "FileType": "string",
      "LocalInstrument": "string",
      "NumberOfTransactions": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    }
  }
}
```

<h3 id="create-file-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteFile2](#schemaobwritefile2)|true|Default|
|» Data|body|object|true|none|
|» » ConsentId|body|string|true|OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.|
|» » » ControlSum|body|number|false|Total of all individual amounts included in the group, irrespective of currencies.|
|» » » DebtorAccount|body|object|false|Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » FileHash|body|string|true|A base64 encoding of a SHA256 hash of the file to be uploaded.|
|» » » FileReference|body|string|false|Reference for the file.|
|» » » FileType|body|string|true|Specifies the payment file type.|
|» » » LocalInstrument|body|[OBExternalLocalInstrument1Code](#schemaobexternallocalinstrument1code)|false|User community specific instrument.<br>Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.|
|» » » NumberOfTransactions|body|string|false|Number of individual transactions contained in the payment information group.|
|» » » RemittanceInformation|body|object|false|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.|
|» » » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.<br>OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.|
|» » » » Unstructured|body|string|false|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|
|» » » RequestedExecutionDateTime|body|string(date-time)|false|Date at which the initiating party requests the clearing agent to process the payment. <br>Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "FilePaymentId": "string",
    "Initiation": {
      "ControlSum": 0,
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FileHash": "string",
      "FileReference": "string",
      "FileType": "string",
      "LocalInstrument": "string",
      "NumberOfTransactions": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Status": "InitiationCompleted",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-file-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|File Payments Created|[OBWriteFileResponse3](#schemaobwritefileresponse3)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: payments )
</aside>

## Get File Payments

<a id="opIdGetFilePaymentsFilePaymentId"></a>

> Code samples

```bash
curl https://example.com/file-payments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /file-payments/{FilePaymentId}`

<h3 id="get-file-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FilePaymentId|path|string|true|FilePaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "FilePaymentId": "string",
    "Initiation": {
      "ControlSum": 0,
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FileHash": "string",
      "FileReference": "string",
      "FileType": "string",
      "LocalInstrument": "string",
      "NumberOfTransactions": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Status": "InitiationCompleted",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-file-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File Payments Read|[OBWriteFileResponse3](#schemaobwritefileresponse3)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get File Payments

<a id="opIdGetFilePaymentsFilePaymentIdReportFile"></a>

> Code samples

```bash
curl https://example.com/file-payments/string/report-file \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /file-payments/{FilePaymentId}/report-file`

<h3 id="get-file-payments-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FilePaymentId|path|string|true|FilePaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-file-payments-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File Payments Read|[File](#schemafile)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

<h1 id="payment-initiation-api-international-payments">International Payments</h1>

## Create International Payment Consents

<a id="opIdCreateInternationalPaymentConsents"></a>

> Code samples

```bash
curl https://example.com/international-payment-consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "Authorisation": {
        "AuthorisationType": "Any",
        "CompletionDateTime": "1970-01-01T00:00:00Z"
      },
      "Initiation": {
        "ChargeBearer": "BorneByCreditor",
        "Creditor": {
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          }
        },
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "CurrencyOfTransfer": "string",
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DestinationCountryCode": "string",
        "EndToEndIdentification": "string",
        "ExchangeRateInformation": {
          "ContractIdentification": "string",
          "ExchangeRate": 0,
          "RateType": "Actual",
          "UnitCurrency": "string"
        },
        "ExtendedPurpose": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "InstructionIdentification": "string",
        "InstructionPriority": "Normal",
        "LocalInstrument": "string",
        "Purpose": "stri",
        "RemittanceInformation": {
          "Reference": "string",
          "Unstructured": "string"
        },
        "SupplementaryData": {}
      },
      "ReadRefundAccount": "No",
      "SCASupportData": {
        "AppliedAuthenticationApproach": "CA",
        "ReferencePaymentOrderId": "string",
        "RequestedSCAExemptionType": "BillPayment"
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /international-payment-consents`

> Body parameter

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-international-payment-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteInternationalConsent5](#schemaobwriteinternationalconsent5)|true|Default|
|» Data|body|object|true|none|
|» » Authorisation|body|object|false|The authorisation type request from the TPP.|
|» » » AuthorisationType|body|string|true|Type of authorisation flow requested.|
|» » » CompletionDateTime|body|string(date-time)|false|Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.|
|» » » ChargeBearer|body|[OBChargeBearerType1Code](#schemaobchargebearertype1code)|false|Specifies which party/parties will bear the charges associated with the processing of the payment transaction.|
|» » » Creditor|body|object|false|Party to which an amount of money is due.|
|» » » » Name|body|string|false|Name by which a party is known and which is usually used to identify that party.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » CreditorAccount|body|object|true|Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » CreditorAgent|body|object|false|Financial institution servicing an account for the creditor.|
|» » » » Identification|body|[Identification_1](#schemaidentification_1)|false|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|» » » » Name|body|[Name](#schemaname)|false|Name by which an agent is known and which is usually used to identify that agent.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » » SchemeName|body|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|Name of the identification scheme, in a coded form as published in an external list.|
|» » » CurrencyOfTransfer|body|string|true|Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.|
|» » » DebtorAccount|body|object|false|Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » DestinationCountryCode|body|string|false|Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).|
|» » » EndToEndIdentification|body|string|true|Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.<br>Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.<br>OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.|
|» » » ExchangeRateInformation|body|object|false|Provides details on the currency exchange rate and contract.|
|» » » » ContractIdentification|body|string|false|Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.|
|» » » » ExchangeRate|body|number|false|The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.|
|» » » » RateType|body|string|true|Specifies the type used to complete the currency exchange.|
|» » » » UnitCurrency|body|string|true|Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.|
|» » » ExtendedPurpose|body|string|false|Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.|
|» » » InstructedAmount|body|object|true|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » InstructionIdentification|body|string|true|Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.<br>Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.|
|» » » InstructionPriority|body|string|false|Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.|
|» » » LocalInstrument|body|[OBExternalLocalInstrument1Code](#schemaobexternallocalinstrument1code)|false|User community specific instrument.<br>Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.|
|» » » Purpose|body|string|false|Specifies the external purpose code in the format of character string with a maximum length of 4 characters.<br>The list of valid codes is an external code list published separately.<br>External code sets can be downloaded from www.iso20022.org.|
|» » » RemittanceInformation|body|object|false|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.|
|» » » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.<br>OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.|
|» » » » Unstructured|body|string|false|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» » ReadRefundAccount|body|string|false|Specifies to share the refund account details with PISP|
|» » SCASupportData|body|[OBSCASupportData1](#schemaobscasupportdata1)|false|Supporting Data provided by TPP, when requesting SCA Exemption.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » AuthorisationType|Any|
|» » » AuthorisationType|Single|
|» » » ChargeBearer|BorneByCreditor|
|» » » ChargeBearer|BorneByDebtor|
|» » » ChargeBearer|FollowingServiceLevel|
|» » » ChargeBearer|Shared|
|» » » » RateType|Actual|
|» » » » RateType|Agreed|
|» » » » RateType|Indicative|
|» » » InstructionPriority|Normal|
|» » » InstructionPriority|Urgent|
|» » ReadRefundAccount|No|
|» » ReadRefundAccount|Yes|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-international-payment-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|International Payment Consents Created|[OBWriteInternationalConsentResponse6](#schemaobwriteinternationalconsentresponse6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get International Payment Consents

<a id="opIdGetInternationalPaymentConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/international-payment-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-payment-consents/{ConsentId}`

<h3 id="get-international-payment-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-international-payment-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|International Payment Consents Read|[OBWriteInternationalConsentResponse6](#schemaobwriteinternationalconsentresponse6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get International Payment Consents Funds Confirmation

<a id="opIdGetInternationalPaymentConsentsConsentIdFundsConfirmation"></a>

> Code samples

```bash
curl https://example.com/international-payment-consents/string/funds-confirmation \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-payment-consents/{ConsentId}/funds-confirmation`

<h3 id="get-international-payment-consents-funds-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "FundsAvailableResult": {
      "FundsAvailable": true,
      "FundsAvailableDateTime": "1970-01-01T00:00:00Z"
    },
    "SupplementaryData": {}
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-international-payment-consents-funds-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|International Payment Consents Read|[OBWriteFundsConfirmationResponse1](#schemaobwritefundsconfirmationresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: payments )
</aside>

## Create International Payments

<a id="opIdCreateInternationalPayments"></a>

> Code samples

```bash
curl https://example.com/international-payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "ConsentId": "string",
      "Initiation": {
        "ChargeBearer": "BorneByCreditor",
        "Creditor": {
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          }
        },
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "CurrencyOfTransfer": "string",
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DestinationCountryCode": "string",
        "EndToEndIdentification": "string",
        "ExchangeRateInformation": {
          "ContractIdentification": "string",
          "ExchangeRate": 0,
          "RateType": "Actual",
          "UnitCurrency": "string"
        },
        "ExtendedPurpose": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "InstructionIdentification": "string",
        "InstructionPriority": "Normal",
        "LocalInstrument": "string",
        "Purpose": "stri",
        "RemittanceInformation": {
          "Reference": "string",
          "Unstructured": "string"
        },
        "SupplementaryData": {}
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /international-payments`

> Body parameter

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-international-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteInternational3](#schemaobwriteinternational3)|true|Default|
|» Data|body|object|true|none|
|» » ConsentId|body|string|true|OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.|
|» » » ChargeBearer|body|[OBChargeBearerType1Code](#schemaobchargebearertype1code)|false|Specifies which party/parties will bear the charges associated with the processing of the payment transaction.|
|» » » Creditor|body|object|false|Party to which an amount of money is due.|
|» » » » Name|body|string|false|Name by which a party is known and which is usually used to identify that party.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » CreditorAccount|body|object|true|Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » CreditorAgent|body|object|false|Financial institution servicing an account for the creditor.|
|» » » » Identification|body|[Identification_1](#schemaidentification_1)|false|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|» » » » Name|body|[Name](#schemaname)|false|Name by which an agent is known and which is usually used to identify that agent.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » » SchemeName|body|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|Name of the identification scheme, in a coded form as published in an external list.|
|» » » CurrencyOfTransfer|body|string|true|Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.|
|» » » DebtorAccount|body|object|false|Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » DestinationCountryCode|body|string|false|Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).|
|» » » EndToEndIdentification|body|string|true|Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.<br>Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.<br>OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.|
|» » » ExchangeRateInformation|body|object|false|Provides details on the currency exchange rate and contract.|
|» » » » ContractIdentification|body|string|false|Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.|
|» » » » ExchangeRate|body|number|false|The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.|
|» » » » RateType|body|string|true|Specifies the type used to complete the currency exchange.|
|» » » » UnitCurrency|body|string|true|Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.|
|» » » ExtendedPurpose|body|string|false|Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.|
|» » » InstructedAmount|body|object|true|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » InstructionIdentification|body|string|true|Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.<br>Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.|
|» » » InstructionPriority|body|string|false|Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.|
|» » » LocalInstrument|body|[OBExternalLocalInstrument1Code](#schemaobexternallocalinstrument1code)|false|User community specific instrument.<br>Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.|
|» » » Purpose|body|string|false|Specifies the external purpose code in the format of character string with a maximum length of 4 characters.<br>The list of valid codes is an external code list published separately.<br>External code sets can be downloaded from www.iso20022.org.|
|» » » RemittanceInformation|body|object|false|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.|
|» » » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.<br>OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.|
|» » » » Unstructured|body|string|false|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » ChargeBearer|BorneByCreditor|
|» » » ChargeBearer|BorneByDebtor|
|» » » ChargeBearer|FollowingServiceLevel|
|» » » ChargeBearer|Shared|
|» » » » RateType|Actual|
|» » » » RateType|Agreed|
|» » » » RateType|Indicative|
|» » » InstructionPriority|Normal|
|» » » InstructionPriority|Urgent|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "InternationalPaymentId": "string",
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "Agent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      }
    },
    "Status": "AcceptedCreditSettlementCompleted",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-international-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|International Payments Created|[OBWriteInternationalResponse5](#schemaobwriteinternationalresponse5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: payments )
</aside>

## Get International Payments

<a id="opIdGetInternationalPaymentsInternationalPaymentId"></a>

> Code samples

```bash
curl https://example.com/international-payments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-payments/{InternationalPaymentId}`

<h3 id="get-international-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InternationalPaymentId|path|string|true|InternationalPaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "InternationalPaymentId": "string",
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "Agent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      }
    },
    "Status": "AcceptedCreditSettlementCompleted",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-international-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|International Payments Read|[OBWriteInternationalResponse5](#schemaobwriteinternationalresponse5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

<h1 id="payment-initiation-api-international-scheduled-payments">International Scheduled Payments</h1>

## Create International Scheduled Payment Consents

<a id="opIdCreateInternationalScheduledPaymentConsents"></a>

> Code samples

```bash
curl https://example.com/international-scheduled-payment-consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "Authorisation": {
        "AuthorisationType": "Any",
        "CompletionDateTime": "1970-01-01T00:00:00Z"
      },
      "Initiation": {
        "ChargeBearer": "BorneByCreditor",
        "Creditor": {
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          }
        },
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "CurrencyOfTransfer": "string",
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DestinationCountryCode": "string",
        "EndToEndIdentification": "string",
        "ExchangeRateInformation": {
          "ContractIdentification": "string",
          "ExchangeRate": 0,
          "RateType": "Actual",
          "UnitCurrency": "string"
        },
        "ExtendedPurpose": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "InstructionIdentification": "string",
        "InstructionPriority": "Normal",
        "LocalInstrument": "string",
        "Purpose": "stri",
        "RemittanceInformation": {
          "Reference": "string",
          "Unstructured": "string"
        },
        "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
        "SupplementaryData": {}
      },
      "Permission": "Create",
      "ReadRefundAccount": "No",
      "SCASupportData": {
        "AppliedAuthenticationApproach": "CA",
        "ReferencePaymentOrderId": "string",
        "RequestedSCAExemptionType": "BillPayment"
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /international-scheduled-payment-consents`

> Body parameter

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-international-scheduled-payment-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteInternationalScheduledConsent5](#schemaobwriteinternationalscheduledconsent5)|true|Default|
|» Data|body|object|true|none|
|» » Authorisation|body|object|false|The authorisation type request from the TPP.|
|» » » AuthorisationType|body|string|true|Type of authorisation flow requested.|
|» » » CompletionDateTime|body|string(date-time)|false|Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.|
|» » » ChargeBearer|body|[OBChargeBearerType1Code](#schemaobchargebearertype1code)|false|Specifies which party/parties will bear the charges associated with the processing of the payment transaction.|
|» » » Creditor|body|object|false|Party to which an amount of money is due.|
|» » » » Name|body|string|false|Name by which a party is known and which is usually used to identify that party.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » CreditorAccount|body|object|true|Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » CreditorAgent|body|object|false|Financial institution servicing an account for the creditor.|
|» » » » Identification|body|[Identification_1](#schemaidentification_1)|false|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|» » » » Name|body|[Name](#schemaname)|false|Name by which an agent is known and which is usually used to identify that agent.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » » SchemeName|body|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|Name of the identification scheme, in a coded form as published in an external list.|
|» » » CurrencyOfTransfer|body|string|true|Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.|
|» » » DebtorAccount|body|object|false|Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » DestinationCountryCode|body|string|false|Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).|
|» » » EndToEndIdentification|body|string|false|Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.<br>Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.<br>OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.|
|» » » ExchangeRateInformation|body|object|false|Provides details on the currency exchange rate and contract.|
|» » » » ContractIdentification|body|string|false|Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.|
|» » » » ExchangeRate|body|number|false|The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.|
|» » » » RateType|body|string|true|Specifies the type used to complete the currency exchange.|
|» » » » UnitCurrency|body|string|true|Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.|
|» » » ExtendedPurpose|body|string|false|Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.|
|» » » InstructedAmount|body|object|true|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » InstructionIdentification|body|string|true|Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.<br>Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.|
|» » » InstructionPriority|body|string|false|Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.|
|» » » LocalInstrument|body|[OBExternalLocalInstrument1Code](#schemaobexternallocalinstrument1code)|false|User community specific instrument.<br>Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.|
|» » » Purpose|body|string|false|Specifies the external purpose code in the format of character string with a maximum length of 4 characters.<br>The list of valid codes is an external code list published separately.<br>External code sets can be downloaded from www.iso20022.org.|
|» » » RemittanceInformation|body|object|false|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.|
|» » » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.<br>OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.|
|» » » » Unstructured|body|string|false|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|
|» » » RequestedExecutionDateTime|body|string(date-time)|true|Date at which the initiating party requests the clearing agent to process the payment. <br>Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» » Permission|body|string|true|Specifies the Open Banking service request types.|
|» » ReadRefundAccount|body|string|false|Specifies to share the refund account details with PISP|
|» » SCASupportData|body|[OBSCASupportData1](#schemaobscasupportdata1)|false|Supporting Data provided by TPP, when requesting SCA Exemption.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » AuthorisationType|Any|
|» » » AuthorisationType|Single|
|» » » ChargeBearer|BorneByCreditor|
|» » » ChargeBearer|BorneByDebtor|
|» » » ChargeBearer|FollowingServiceLevel|
|» » » ChargeBearer|Shared|
|» » » » RateType|Actual|
|» » » » RateType|Agreed|
|» » » » RateType|Indicative|
|» » » InstructionPriority|Normal|
|» » » InstructionPriority|Urgent|
|» » Permission|Create|
|» » ReadRefundAccount|No|
|» » ReadRefundAccount|Yes|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-international-scheduled-payment-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|International Scheduled Payment Consents Created|[OBWriteInternationalScheduledConsentResponse6](#schemaobwriteinternationalscheduledconsentresponse6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get International Scheduled Payment Consents

<a id="opIdGetInternationalScheduledPaymentConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/international-scheduled-payment-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-scheduled-payment-consents/{ConsentId}`

<h3 id="get-international-scheduled-payment-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-international-scheduled-payment-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|International Scheduled Payment Consents Read|[OBWriteInternationalScheduledConsentResponse6](#schemaobwriteinternationalscheduledconsentresponse6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get International Scheduled Payment Consents Funds Confirmation

<a id="opIdGetInternationalScheduledPaymentConsentsConsentIdFundsConfirmation"></a>

> Code samples

```bash
curl https://example.com/international-scheduled-payment-consents/string/funds-confirmation \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-scheduled-payment-consents/{ConsentId}/funds-confirmation`

<h3 id="get-international-scheduled-payment-consents-funds-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "FundsAvailableResult": {
      "FundsAvailable": true,
      "FundsAvailableDateTime": "1970-01-01T00:00:00Z"
    },
    "SupplementaryData": {}
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-international-scheduled-payment-consents-funds-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|International Scheduled Payment Consents Read|[OBWriteFundsConfirmationResponse1](#schemaobwritefundsconfirmationresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: payments )
</aside>

## Create International Scheduled Payments

<a id="opIdCreateInternationalScheduledPayments"></a>

> Code samples

```bash
curl https://example.com/international-scheduled-payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "ConsentId": "string",
      "Initiation": {
        "ChargeBearer": "BorneByCreditor",
        "Creditor": {
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          }
        },
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "CurrencyOfTransfer": "string",
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DestinationCountryCode": "string",
        "EndToEndIdentification": "string",
        "ExchangeRateInformation": {
          "ContractIdentification": "string",
          "ExchangeRate": 0,
          "RateType": "Actual",
          "UnitCurrency": "string"
        },
        "ExtendedPurpose": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "InstructionIdentification": "string",
        "InstructionPriority": "Normal",
        "LocalInstrument": "string",
        "Purpose": "stri",
        "RemittanceInformation": {
          "Reference": "string",
          "Unstructured": "string"
        },
        "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
        "SupplementaryData": {}
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /international-scheduled-payments`

> Body parameter

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-international-scheduled-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteInternationalScheduled3](#schemaobwriteinternationalscheduled3)|true|Default|
|» Data|body|object|true|none|
|» » ConsentId|body|string|true|OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.|
|» » » ChargeBearer|body|[OBChargeBearerType1Code](#schemaobchargebearertype1code)|false|Specifies which party/parties will bear the charges associated with the processing of the payment transaction.|
|» » » Creditor|body|object|false|Party to which an amount of money is due.|
|» » » » Name|body|string|false|Name by which a party is known and which is usually used to identify that party.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » CreditorAccount|body|object|true|Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » CreditorAgent|body|object|false|Financial institution servicing an account for the creditor.|
|» » » » Identification|body|[Identification_1](#schemaidentification_1)|false|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|» » » » Name|body|[Name](#schemaname)|false|Name by which an agent is known and which is usually used to identify that agent.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » » SchemeName|body|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|Name of the identification scheme, in a coded form as published in an external list.|
|» » » CurrencyOfTransfer|body|string|true|Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.|
|» » » DebtorAccount|body|object|false|Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » DestinationCountryCode|body|string|false|Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).|
|» » » EndToEndIdentification|body|string|false|Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.<br>Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.<br>OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.|
|» » » ExchangeRateInformation|body|object|false|Provides details on the currency exchange rate and contract.|
|» » » » ContractIdentification|body|string|false|Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.|
|» » » » ExchangeRate|body|number|false|The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.|
|» » » » RateType|body|string|true|Specifies the type used to complete the currency exchange.|
|» » » » UnitCurrency|body|string|true|Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.|
|» » » ExtendedPurpose|body|string|false|Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.|
|» » » InstructedAmount|body|object|true|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » InstructionIdentification|body|string|true|Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.<br>Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.|
|» » » InstructionPriority|body|string|false|Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.|
|» » » LocalInstrument|body|[OBExternalLocalInstrument1Code](#schemaobexternallocalinstrument1code)|false|User community specific instrument.<br>Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.|
|» » » Purpose|body|string|false|Specifies the external purpose code in the format of character string with a maximum length of 4 characters.<br>The list of valid codes is an external code list published separately.<br>External code sets can be downloaded from www.iso20022.org.|
|» » » RemittanceInformation|body|object|false|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.|
|» » » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.<br>OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.|
|» » » » Unstructured|body|string|false|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|
|» » » RequestedExecutionDateTime|body|string(date-time)|true|Date at which the initiating party requests the clearing agent to process the payment. <br>Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » ChargeBearer|BorneByCreditor|
|» » » ChargeBearer|BorneByDebtor|
|» » » ChargeBearer|FollowingServiceLevel|
|» » » ChargeBearer|Shared|
|» » » » RateType|Actual|
|» » » » RateType|Agreed|
|» » » » RateType|Indicative|
|» » » InstructionPriority|Normal|
|» » » InstructionPriority|Urgent|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "InternationalScheduledPaymentId": "string",
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "Agent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-international-scheduled-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|International Scheduled Payments Created|[OBWriteInternationalScheduledResponse6](#schemaobwriteinternationalscheduledresponse6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: payments )
</aside>

## Get International Scheduled Payments

<a id="opIdGetInternationalScheduledPaymentsInternationalScheduledPaymentId"></a>

> Code samples

```bash
curl https://example.com/international-scheduled-payments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-scheduled-payments/{InternationalScheduledPaymentId}`

<h3 id="get-international-scheduled-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InternationalScheduledPaymentId|path|string|true|InternationalScheduledPaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "InternationalScheduledPaymentId": "string",
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "Agent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-international-scheduled-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|International Scheduled Payments Read|[OBWriteInternationalScheduledResponse6](#schemaobwriteinternationalscheduledresponse6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

<h1 id="payment-initiation-api-international-standing-orders">International Standing Orders</h1>

## Create International Standing Order Consents

<a id="opIdCreateInternationalStandingOrderConsents"></a>

> Code samples

```bash
curl https://example.com/international-standing-order-consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "Authorisation": {
        "AuthorisationType": "Any",
        "CompletionDateTime": "1970-01-01T00:00:00Z"
      },
      "Initiation": {
        "ChargeBearer": "BorneByCreditor",
        "Creditor": {
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          }
        },
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "CurrencyOfTransfer": "string",
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DestinationCountryCode": "string",
        "ExtendedPurpose": "string",
        "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
        "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
        "Frequency": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "NumberOfPayments": "string",
        "Purpose": "stri",
        "Reference": "string",
        "SupplementaryData": {}
      },
      "Permission": "Create",
      "ReadRefundAccount": "No",
      "SCASupportData": {
        "AppliedAuthenticationApproach": "CA",
        "ReferencePaymentOrderId": "string",
        "RequestedSCAExemptionType": "BillPayment"
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /international-standing-order-consents`

> Body parameter

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "ExtendedPurpose": "string",
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NumberOfPayments": "string",
      "Purpose": "stri",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-international-standing-order-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteInternationalStandingOrderConsent6](#schemaobwriteinternationalstandingorderconsent6)|true|Default|
|» Data|body|object|true|none|
|» » Authorisation|body|object|false|The authorisation type request from the TPP.|
|» » » AuthorisationType|body|string|true|Type of authorisation flow requested.|
|» » » CompletionDateTime|body|string(date-time)|false|Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.|
|» » » ChargeBearer|body|[OBChargeBearerType1Code](#schemaobchargebearertype1code)|false|Specifies which party/parties will bear the charges associated with the processing of the payment transaction.|
|» » » Creditor|body|object|false|Party to which an amount of money is due.|
|» » » » Name|body|string|false|Name by which a party is known and which is usually used to identify that party.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » CreditorAccount|body|object|true|Provides the details to identify the beneficiary account.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » CreditorAgent|body|object|false|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|» » » » Identification|body|string|false|Unique and unambiguous identification of the servicing institution.|
|» » » » Name|body|[Name](#schemaname)|false|Name by which an agent is known and which is usually used to identify that agent.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » » SchemeName|body|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|Name of the identification scheme, in a coded form as published in an external list.|
|» » » CurrencyOfTransfer|body|string|true|Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.|
|» » » DebtorAccount|body|object|false|Provides the details to identify the debtor account.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » DestinationCountryCode|body|string|false|Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).|
|» » » ExtendedPurpose|body|string|false|Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.|
|» » » FinalPaymentDateTime|body|string(date-time)|false|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » FirstPaymentDateTime|body|string(date-time)|true|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » Frequency|body|string|true|Individual Definitions:<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). <br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. <br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. <br>Individual Patterns:<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>EvryDay<br>EvryWorkgDay<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01])<br>QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED)<br>Full Regular Expression:<br>^(EvryDay)$\|^(EvryWorkgDay)$\|^(IntrvlWkDay:0[1-9]:0[1-7])$\|^(WkInMnthDay:0[1-5]:0[1-7])$\|^(IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01]))$\|^(QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED))$|
|» » » InstructedAmount|body|object|true|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » NumberOfPayments|body|string|false|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|» » » Purpose|body|string|false|Specifies the external purpose code in the format of character string with a maximum length of 4 characters.<br>The list of valid codes is an external code list published separately.<br>External code sets can be downloaded from www.iso20022.org.|
|» » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» » Permission|body|string|true|Specifies the Open Banking service request types.|
|» » ReadRefundAccount|body|string|false|Specifies to share the refund account details with PISP|
|» » SCASupportData|body|[OBSCASupportData1](#schemaobscasupportdata1)|false|Supporting Data provided by TPP, when requesting SCA Exemption.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » AuthorisationType|Any|
|» » » AuthorisationType|Single|
|» » » ChargeBearer|BorneByCreditor|
|» » » ChargeBearer|BorneByDebtor|
|» » » ChargeBearer|FollowingServiceLevel|
|» » » ChargeBearer|Shared|
|» » Permission|Create|
|» » ReadRefundAccount|No|
|» » ReadRefundAccount|Yes|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "ExtendedPurpose": "string",
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NumberOfPayments": "string",
      "Purpose": "stri",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-international-standing-order-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|International Standing Order Consents Created|[OBWriteInternationalStandingOrderConsentResponse7](#schemaobwriteinternationalstandingorderconsentresponse7)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Get International Standing Order Consents

<a id="opIdGetInternationalStandingOrderConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/international-standing-order-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-standing-order-consents/{ConsentId}`

<h3 id="get-international-standing-order-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "ExtendedPurpose": "string",
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NumberOfPayments": "string",
      "Purpose": "stri",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-international-standing-order-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|International Standing Order Consents Read|[OBWriteInternationalStandingOrderConsentResponse7](#schemaobwriteinternationalstandingorderconsentresponse7)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

## Create International Standing Orders

<a id="opIdCreateInternationalStandingOrders"></a>

> Code samples

```bash
curl https://example.com/international-standing-orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-idempotency-key: string' \
  -H 'x-jws-signature: string' \
  -d '{
    "Data": {
      "ConsentId": "string",
      "Initiation": {
        "ChargeBearer": "BorneByCreditor",
        "Creditor": {
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          }
        },
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "CurrencyOfTransfer": "string",
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DestinationCountryCode": "string",
        "ExtendedPurpose": "string",
        "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
        "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
        "Frequency": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "NumberOfPayments": "string",
        "Purpose": "stri",
        "Reference": "string",
        "SupplementaryData": {}
      }
    },
    "Risk": {
      "DeliveryAddress": {
        "AddressLine": [
          "string"
        ],
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "MerchantCategoryCode": "stri",
      "MerchantCustomerIdentification": "string",
      "PaymentContextCode": "BillPayment"
    }
  }'
```

`POST /international-standing-orders`

> Body parameter

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "ExtendedPurpose": "string",
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NumberOfPayments": "string",
      "Purpose": "stri",
      "Reference": "string",
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

<h3 id="create-international-standing-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-idempotency-key|header|string|true|Every request will be processed only once per x-idempotency-key.  The<br>Idempotency Key will be valid for 24 hours.<br>|
|x-jws-signature|header|string|true|A detached JWS signature of the body of the payload.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBWriteInternationalStandingOrder4](#schemaobwriteinternationalstandingorder4)|true|Default|
|» Data|body|object|true|none|
|» » ConsentId|body|string|true|OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.|
|» » Initiation|body|object|true|The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.|
|» » » ChargeBearer|body|[OBChargeBearerType1Code](#schemaobchargebearertype1code)|false|Specifies which party/parties will bear the charges associated with the processing of the payment transaction.|
|» » » Creditor|body|object|false|Party to which an amount of money is due.|
|» » » » Name|body|string|false|Name by which a party is known and which is usually used to identify that party.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » CreditorAccount|body|object|true|Provides the details to identify the beneficiary account.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|true|The account name is the name or names of the account owner(s) represented at an account level.<br>Note, the account name is not the product name or the nickname of the account.<br>OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » CreditorAgent|body|object|false|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|» » » » Identification|body|string|false|Unique and unambiguous identification of the servicing institution.|
|» » » » Name|body|[Name](#schemaname)|false|Name by which an agent is known and which is usually used to identify that agent.|
|» » » » PostalAddress|body|[OBPostalAddress6](#schemaobpostaladdress6)|false|Information that locates and identifies a specific address, as defined by postal services.|
|» » » » SchemeName|body|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|Name of the identification scheme, in a coded form as published in an external list.|
|» » » CurrencyOfTransfer|body|string|true|Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.|
|» » » DebtorAccount|body|object|false|Provides the details to identify the debtor account.|
|» » » » Identification|body|[Identification_0](#schemaidentification_0)|true|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|» » » » Name|body|string|false|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|» » » » SchemeName|body|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|Name of the identification scheme, in a coded form as published in an external list.|
|» » » » SecondaryIdentification|body|[SecondaryIdentification](#schemasecondaryidentification)|false|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|» » » DestinationCountryCode|body|string|false|Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).|
|» » » ExtendedPurpose|body|string|false|Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.|
|» » » FinalPaymentDateTime|body|string(date-time)|false|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » FirstPaymentDateTime|body|string(date-time)|true|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » » Frequency|body|string|true|Individual Definitions:<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). <br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. <br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. <br>Individual Patterns:<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>EvryDay<br>EvryWorkgDay<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01])<br>QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED)<br>Full Regular Expression:<br>^(EvryDay)$\|^(EvryWorkgDay)$\|^(IntrvlWkDay:0[1-9]:0[1-7])$\|^(WkInMnthDay:0[1-5]:0[1-7])$\|^(IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01]))$\|^(QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED))$|
|» » » InstructedAmount|body|object|true|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|» » » » Amount|body|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|» » » » Currency|body|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|» » » NumberOfPayments|body|string|false|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|» » » Purpose|body|string|false|Specifies the external purpose code in the format of character string with a maximum length of 4 characters.<br>The list of valid codes is an external code list published separately.<br>External code sets can be downloaded from www.iso20022.org.|
|» » » Reference|body|string|false|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|» » » SupplementaryData|body|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|Additional information that can not be captured in the structured fields and/or any other specific block.|
|» Risk|body|[OBRisk1](#schemaobrisk1)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » ChargeBearer|BorneByCreditor|
|» » » ChargeBearer|BorneByDebtor|
|» » » ChargeBearer|FollowingServiceLevel|
|» » » ChargeBearer|Shared|

> Example responses

> 201 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "ExtendedPurpose": "string",
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NumberOfPayments": "string",
      "Purpose": "stri",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "InternationalStandingOrderId": "string",
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "Agent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-international-standing-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|International Standing Orders Created|[OBWriteInternationalStandingOrderResponse7](#schemaobwriteinternationalstandingorderresponse7)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: payments )
</aside>

## Get International Standing Orders

<a id="opIdGetInternationalStandingOrdersInternationalStandingOrderPaymentId"></a>

> Code samples

```bash
curl https://example.com/international-standing-orders/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /international-standing-orders/{InternationalStandingOrderPaymentId}`

<h3 id="get-international-standing-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InternationalStandingOrderPaymentId|path|string|true|InternationalStandingOrderPaymentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "ExtendedPurpose": "string",
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NumberOfPayments": "string",
      "Purpose": "stri",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "InternationalStandingOrderId": "string",
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "Agent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-international-standing-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|International Standing Orders Read|[OBWriteInternationalStandingOrderResponse7](#schemaobwriteinternationalstandingorderresponse7)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|400|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-jws-signature|string||Header containing a detached JWS signature of the body of the payload.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: payments )
</aside>

# Schemas

<h2 id="tocS_ActiveOrHistoricCurrencyCode">ActiveOrHistoricCurrencyCode</h2>
<!-- backwards compatibility -->
<a id="schemaactiveorhistoriccurrencycode"></a>
<a id="schema_ActiveOrHistoricCurrencyCode"></a>
<a id="tocSactiveorhistoriccurrencycode"></a>
<a id="tocsactiveorhistoriccurrencycode"></a>

```json
"string"
```

A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".

<h2 id="tocS_BuildingNumber">BuildingNumber</h2>
<!-- backwards compatibility -->
<a id="schemabuildingnumber"></a>
<a id="schema_BuildingNumber"></a>
<a id="tocSbuildingnumber"></a>
<a id="tocsbuildingnumber"></a>

```json
"string"
```

Number that identifies the position of a building on a street.

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"string"
```

Nation with its own government.

<h2 id="tocS_CountrySubDivision">CountrySubDivision</h2>
<!-- backwards compatibility -->
<a id="schemacountrysubdivision"></a>
<a id="schema_CountrySubDivision"></a>
<a id="tocScountrysubdivision"></a>
<a id="tocscountrysubdivision"></a>

```json
"string"
```

Identifies a subdivision of a country such as state, region, county.

<h2 id="tocS_Department">Department</h2>
<!-- backwards compatibility -->
<a id="schemadepartment"></a>
<a id="schema_Department"></a>
<a id="tocSdepartment"></a>
<a id="tocsdepartment"></a>

```json
"string"
```

Identification of a division of a large organisation or building.

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{}
```

<h2 id="tocS_ISODateTime">ISODateTime</h2>
<!-- backwards compatibility -->
<a id="schemaisodatetime"></a>
<a id="schema_ISODateTime"></a>
<a id="tocSisodatetime"></a>
<a id="tocsisodatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_Identification_0">Identification_0</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_0"></a>
<a id="schema_Identification_0"></a>
<a id="tocSidentification_0"></a>
<a id="tocsidentification_0"></a>

```json
"string"
```

Identification assigned by an institution to identify an account. This identification is known by the account owner.

<h2 id="tocS_Identification_1">Identification_1</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_1"></a>
<a id="schema_Identification_1"></a>
<a id="tocSidentification_1"></a>
<a id="tocsidentification_1"></a>

```json
"string"
```

Unique and unambiguous identification of a financial institution or a branch of a financial institution.

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "First": "http://example.com",
  "Last": "http://example.com",
  "Next": "http://example.com",
  "Prev": "http://example.com",
  "Self": "http://example.com"
}
```

Links relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|First|string(uri)|false|none|none|
|Last|string(uri)|false|none|none|
|Next|string(uri)|false|none|none|
|Prev|string(uri)|false|none|none|
|Self|string(uri)|true|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
  "LastAvailableDateTime": "1970-01-01T00:00:00Z",
  "TotalPages": 0
}
```

Meta Data relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstAvailableDateTime|[ISODateTime](#schemaisodatetime)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastAvailableDateTime|[ISODateTime](#schemaisodatetime)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|TotalPages|integer(int32)|false|none|none|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

Name by which an agent is known and which is usually used to identify that agent.

<h2 id="tocS_OBActiveCurrencyAndAmount_SimpleType">OBActiveCurrencyAndAmount_SimpleType</h2>
<!-- backwards compatibility -->
<a id="schemaobactivecurrencyandamount_simpletype"></a>
<a id="schema_OBActiveCurrencyAndAmount_SimpleType"></a>
<a id="tocSobactivecurrencyandamount_simpletype"></a>
<a id="tocsobactivecurrencyandamount_simpletype"></a>

```json
"string"
```

A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount">OBActiveOrHistoricCurrencyAndAmount</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount"></a>
<a id="tocSobactiveorhistoriccurrencyandamount"></a>
<a id="tocsobactiveorhistoriccurrencyandamount"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}
```

Amount of money associated with the charge type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode](#schemaactiveorhistoriccurrencycode)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBAddressTypeCode">OBAddressTypeCode</h2>
<!-- backwards compatibility -->
<a id="schemaobaddresstypecode"></a>
<a id="schema_OBAddressTypeCode"></a>
<a id="tocSobaddresstypecode"></a>
<a id="tocsobaddresstypecode"></a>

```json
"Business"
```

Identifies the nature of the postal address.

<h2 id="tocS_OBCashAccountCreditor3">OBCashAccountCreditor3</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccountcreditor3"></a>
<a id="schema_OBCashAccountCreditor3"></a>
<a id="tocSobcashaccountcreditor3"></a>
<a id="tocsobcashaccountcreditor3"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "SchemeName": "string",
  "SecondaryIdentification": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|string|true|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|string|true|none|Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.|
|SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|SecondaryIdentification|string|false|none|Secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|

<h2 id="tocS_OBCashAccountDebtor4">OBCashAccountDebtor4</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccountdebtor4"></a>
<a id="schema_OBCashAccountDebtor4"></a>
<a id="tocSobcashaccountdebtor4"></a>
<a id="tocsobcashaccountdebtor4"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "SchemeName": "string",
  "SecondaryIdentification": "string"
}
```

^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|string|false|none|^ Identification assigned by an institution to identify an account. This identification is known by the account owner. \| Max256Text|
|Name|string|false|none|^ Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.|
|SchemeName|string|false|none|^ Name of the identification scheme, in a coded form as published in an external list. \| Namespaced Enumeration OBExternalAccountIdentification4Code|
|SecondaryIdentification|string|false|none|^ This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination) \| Max34Text|

<h2 id="tocS_OBChargeBearerType1Code">OBChargeBearerType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobchargebearertype1code"></a>
<a id="schema_OBChargeBearerType1Code"></a>
<a id="tocSobchargebearertype1code"></a>
<a id="tocsobchargebearertype1code"></a>

```json
"BorneByCreditor"
```

Specifies which party/parties will bear the charges associated with the processing of the payment transaction.

<h2 id="tocS_OBError1">OBError1</h2>
<!-- backwards compatibility -->
<a id="schemaoberror1"></a>
<a id="schema_OBError1"></a>
<a id="tocSoberror1"></a>
<a id="tocsoberror1"></a>

```json
{
  "ErrorCode": "string",
  "Message": "string",
  "Path": "string",
  "Url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|string|true|none|Low level textual error code, e.g., UK.OBIE.Field.Missing|
|Message|string|true|none|A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'<br>OBIE doesn't standardise this field|
|Path|string|false|none|Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency|
|Url|string|false|none|URL to help remediate the problem, or provide more information, or to API Reference, or help etc|

<h2 id="tocS_OBErrorResponse1">OBErrorResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaoberrorresponse1"></a>
<a id="schema_OBErrorResponse1"></a>
<a id="tocSoberrorresponse1"></a>
<a id="tocsoberrorresponse1"></a>

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

An array of detail error codes, and messages, and URLs to documentation to help remediation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|High level textual error code, to help categorize the errors.|
|Errors|[[OBError1](#schemaoberror1)]|true|none|none|
|Id|string|false|none|A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.|
|Message|string|true|none|Brief Error message, e.g., 'There is something wrong with the request parameters provided'|

<h2 id="tocS_OBExternalAccountIdentification4Code">OBExternalAccountIdentification4Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccountidentification4code"></a>
<a id="schema_OBExternalAccountIdentification4Code"></a>
<a id="tocSobexternalaccountidentification4code"></a>
<a id="tocsobexternalaccountidentification4code"></a>

```json
"string"
```

Name of the identification scheme, in a coded form as published in an external list.

<h2 id="tocS_OBExternalFinancialInstitutionIdentification4Code">OBExternalFinancialInstitutionIdentification4Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalfinancialinstitutionidentification4code"></a>
<a id="schema_OBExternalFinancialInstitutionIdentification4Code"></a>
<a id="tocSobexternalfinancialinstitutionidentification4code"></a>
<a id="tocsobexternalfinancialinstitutionidentification4code"></a>

```json
"string"
```

Name of the identification scheme, in a coded form as published in an external list.

<h2 id="tocS_OBExternalLocalInstrument1Code">OBExternalLocalInstrument1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternallocalinstrument1code"></a>
<a id="schema_OBExternalLocalInstrument1Code"></a>
<a id="tocSobexternallocalinstrument1code"></a>
<a id="tocsobexternallocalinstrument1code"></a>

```json
"string"
```

User community specific instrument.
Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.

<h2 id="tocS_OBExternalPaymentChargeType1Code">OBExternalPaymentChargeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalpaymentchargetype1code"></a>
<a id="schema_OBExternalPaymentChargeType1Code"></a>
<a id="tocSobexternalpaymentchargetype1code"></a>
<a id="tocsobexternalpaymentchargetype1code"></a>

```json
"string"
```

Charge type, in a coded form.

<h2 id="tocS_OBPostalAddress6">OBPostalAddress6</h2>
<!-- backwards compatibility -->
<a id="schemaobpostaladdress6"></a>
<a id="schema_OBPostalAddress6"></a>
<a id="tocSobpostaladdress6"></a>
<a id="tocsobpostaladdress6"></a>

```json
{
  "AddressLine": [
    "string"
  ],
  "AddressType": "Business",
  "BuildingNumber": "string",
  "Country": "string",
  "CountrySubDivision": "string",
  "Department": "string",
  "PostCode": "string",
  "StreetName": "string",
  "SubDepartment": "string",
  "TownName": "string"
}
```

Information that locates and identifies a specific address, as defined by postal services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressLine|[string]|false|none|none|
|AddressType|[OBAddressTypeCode](#schemaobaddresstypecode)|false|none|Identifies the nature of the postal address.|
|BuildingNumber|[BuildingNumber](#schemabuildingnumber)|false|none|Number that identifies the position of a building on a street.|
|Country|[CountryCode](#schemacountrycode)|false|none|Nation with its own government.|
|CountrySubDivision|[CountrySubDivision](#schemacountrysubdivision)|false|none|Identifies a subdivision of a country such as state, region, county.|
|Department|[Department](#schemadepartment)|false|none|Identification of a division of a large organisation or building.|
|PostCode|[PostCode](#schemapostcode)|false|none|Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.|
|StreetName|[StreetName](#schemastreetname)|false|none|Name of a street or thoroughfare.|
|SubDepartment|[SubDepartment](#schemasubdepartment)|false|none|Identification of a sub-division of a large organisation or building.|
|TownName|[TownName](#schematownname)|false|none|Name of a built-up area, with defined boundaries, and a local government.|

#### Enumerated Values

|Property|Value|
|---|---|
|AddressType|Business|
|AddressType|Correspondence|
|AddressType|DeliveryTo|
|AddressType|MailTo|
|AddressType|POBox|
|AddressType|Postal|
|AddressType|Residential|
|AddressType|Statement|

<h2 id="tocS_OBRisk1">OBRisk1</h2>
<!-- backwards compatibility -->
<a id="schemaobrisk1"></a>
<a id="schema_OBRisk1"></a>
<a id="tocSobrisk1"></a>
<a id="tocsobrisk1"></a>

```json
{
  "DeliveryAddress": {
    "AddressLine": [
      "string"
    ],
    "BuildingNumber": "string",
    "Country": "string",
    "CountrySubDivision": "string",
    "PostCode": "string",
    "StreetName": "string",
    "TownName": "string"
  },
  "MerchantCategoryCode": "stri",
  "MerchantCustomerIdentification": "string",
  "PaymentContextCode": "BillPayment"
}
```

The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryAddress|object|false|none|Information that locates and identifies a specific address, as defined by postal services or in free format text.|
|MerchantCategoryCode|string|false|none|Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.|
|MerchantCustomerIdentification|string|false|none|The unique customer identifier of the PSU with the merchant.|
|PaymentContextCode|string|false|none|Specifies the payment context|

#### Enumerated Values

|Property|Value|
|---|---|
|PaymentContextCode|BillPayment|
|PaymentContextCode|EcommerceGoods|
|PaymentContextCode|EcommerceServices|
|PaymentContextCode|Other|
|PaymentContextCode|PartyToParty|

<h2 id="tocS_OBSCASupportData1">OBSCASupportData1</h2>
<!-- backwards compatibility -->
<a id="schemaobscasupportdata1"></a>
<a id="schema_OBSCASupportData1"></a>
<a id="tocSobscasupportdata1"></a>
<a id="tocsobscasupportdata1"></a>

```json
{
  "AppliedAuthenticationApproach": "CA",
  "ReferencePaymentOrderId": "string",
  "RequestedSCAExemptionType": "BillPayment"
}
```

Supporting Data provided by TPP, when requesting SCA Exemption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppliedAuthenticationApproach|string|false|none|Specifies a character string with a maximum length of 40 characters.<br>Usage: This field indicates whether the PSU was subject to SCA performed by the TPP|
|ReferencePaymentOrderId|string|false|none|If the payment is recurring, then this field is populated with the transaction identifier of the previous payment occurrence so that the ASPSP can verify that the PISP, amount and the payee are the same as the previous occurrence. The value here refers to the payment id e.g. DomesticPaymentId  |
|RequestedSCAExemptionType|string|false|none|This field allows a PISP to request specific SCA Exemption for a Payment Initiation|

#### Enumerated Values

|Property|Value|
|---|---|
|AppliedAuthenticationApproach|CA|
|AppliedAuthenticationApproach|SCA|
|RequestedSCAExemptionType|BillPayment|
|RequestedSCAExemptionType|ContactlessTravel|
|RequestedSCAExemptionType|EcommerceGoods|
|RequestedSCAExemptionType|EcommerceServices|
|RequestedSCAExemptionType|Kiosk|
|RequestedSCAExemptionType|Parking|
|RequestedSCAExemptionType|PartyToParty|

<h2 id="tocS_OBSupplementaryData1">OBSupplementaryData1</h2>
<!-- backwards compatibility -->
<a id="schemaobsupplementarydata1"></a>
<a id="schema_OBSupplementaryData1"></a>
<a id="tocSobsupplementarydata1"></a>
<a id="tocsobsupplementarydata1"></a>

```json
{}
```

Additional information that can not be captured in the structured fields and/or any other specific block.

<h2 id="tocS_OBWriteDomestic2">OBWriteDomestic2</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomestic2"></a>
<a id="schema_OBWriteDomestic2"></a>
<a id="tocSobwritedomestic2"></a>
<a id="tocsobwritedomestic2"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteDomesticConsent4">OBWriteDomesticConsent4</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticconsent4"></a>
<a id="schema_OBWriteDomesticConsent4"></a>
<a id="tocSobwritedomesticconsent4"></a>
<a id="tocsobwritedomesticconsent4"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteDomesticConsentResponse5">OBWriteDomesticConsentResponse5</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticconsentresponse5"></a>
<a id="schema_OBWriteDomesticConsentResponse5"></a>
<a id="tocSobwritedomesticconsentresponse5"></a>
<a id="tocsobwritedomesticconsentresponse5"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteDomesticResponse5">OBWriteDomesticResponse5</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticresponse5"></a>
<a id="schema_OBWriteDomesticResponse5"></a>
<a id="tocSobwritedomesticresponse5"></a>
<a id="tocsobwritedomesticresponse5"></a>

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "DomesticPaymentId": "string",
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      }
    },
    "Status": "AcceptedCreditSettlementCompleted",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBWriteDomesticScheduled2">OBWriteDomesticScheduled2</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticscheduled2"></a>
<a id="schema_OBWriteDomesticScheduled2"></a>
<a id="tocSobwritedomesticscheduled2"></a>
<a id="tocsobwritedomesticscheduled2"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteDomesticScheduledConsent4">OBWriteDomesticScheduledConsent4</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticscheduledconsent4"></a>
<a id="schema_OBWriteDomesticScheduledConsent4"></a>
<a id="tocSobwritedomesticscheduledconsent4"></a>
<a id="tocsobwritedomesticscheduledconsent4"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteDomesticScheduledConsentResponse5">OBWriteDomesticScheduledConsentResponse5</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticscheduledconsentresponse5"></a>
<a id="schema_OBWriteDomesticScheduledConsentResponse5"></a>
<a id="tocSobwritedomesticscheduledconsentresponse5"></a>
<a id="tocsobwritedomesticscheduledconsentresponse5"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteDomesticScheduledResponse5">OBWriteDomesticScheduledResponse5</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticscheduledresponse5"></a>
<a id="schema_OBWriteDomesticScheduledResponse5"></a>
<a id="tocSobwritedomesticscheduledresponse5"></a>
<a id="tocsobwritedomesticscheduledresponse5"></a>

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "DomesticScheduledPaymentId": "string",
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorPostalAddress": {
        "AddressLine": [
          "string"
        ],
        "AddressType": "Business",
        "BuildingNumber": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "Department": "string",
        "PostCode": "string",
        "StreetName": "string",
        "SubDepartment": "string",
        "TownName": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "EndToEndIdentification": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "LocalInstrument": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBWriteDomesticStandingOrder3">OBWriteDomesticStandingOrder3</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticstandingorder3"></a>
<a id="schema_OBWriteDomesticStandingOrder3"></a>
<a id="tocSobwritedomesticstandingorder3"></a>
<a id="tocsobwritedomesticstandingorder3"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "NumberOfPayments": "string",
      "RecurringPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteDomesticStandingOrderConsent5">OBWriteDomesticStandingOrderConsent5</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticstandingorderconsent5"></a>
<a id="schema_OBWriteDomesticStandingOrderConsent5"></a>
<a id="tocSobwritedomesticstandingorderconsent5"></a>
<a id="tocsobwritedomesticstandingorderconsent5"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "NumberOfPayments": "string",
      "RecurringPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteDomesticStandingOrderConsentResponse6">OBWriteDomesticStandingOrderConsentResponse6</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticstandingorderconsentresponse6"></a>
<a id="schema_OBWriteDomesticStandingOrderConsentResponse6"></a>
<a id="tocSobwritedomesticstandingorderconsentresponse6"></a>
<a id="tocsobwritedomesticstandingorderconsentresponse6"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "NumberOfPayments": "string",
      "RecurringPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteDomesticStandingOrderResponse6">OBWriteDomesticStandingOrderResponse6</h2>
<!-- backwards compatibility -->
<a id="schemaobwritedomesticstandingorderresponse6"></a>
<a id="schema_OBWriteDomesticStandingOrderResponse6"></a>
<a id="tocSobwritedomesticstandingorderresponse6"></a>
<a id="tocsobwritedomesticstandingorderresponse6"></a>

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "DomesticStandingOrderId": "string",
    "Initiation": {
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "NumberOfPayments": "string",
      "RecurringPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "RecurringPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBWriteFile2">OBWriteFile2</h2>
<!-- backwards compatibility -->
<a id="schemaobwritefile2"></a>
<a id="schema_OBWriteFile2"></a>
<a id="tocSobwritefile2"></a>
<a id="tocsobwritefile2"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "ControlSum": 0,
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FileHash": "string",
      "FileReference": "string",
      "FileType": "string",
      "LocalInstrument": "string",
      "NumberOfTransactions": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|

<h2 id="tocS_OBWriteFileConsent3">OBWriteFileConsent3</h2>
<!-- backwards compatibility -->
<a id="schemaobwritefileconsent3"></a>
<a id="schema_OBWriteFileConsent3"></a>
<a id="tocSobwritefileconsent3"></a>
<a id="tocsobwritefileconsent3"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "ControlSum": 0,
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FileHash": "string",
      "FileReference": "string",
      "FileType": "string",
      "LocalInstrument": "string",
      "NumberOfTransactions": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|

<h2 id="tocS_OBWriteFileConsentResponse4">OBWriteFileConsentResponse4</h2>
<!-- backwards compatibility -->
<a id="schemaobwritefileconsentresponse4"></a>
<a id="schema_OBWriteFileConsentResponse4"></a>
<a id="tocSobwritefileconsentresponse4"></a>
<a id="tocsobwritefileconsentresponse4"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "ControlSum": 0,
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FileHash": "string",
      "FileReference": "string",
      "FileType": "string",
      "LocalInstrument": "string",
      "NumberOfTransactions": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBWriteFileResponse3">OBWriteFileResponse3</h2>
<!-- backwards compatibility -->
<a id="schemaobwritefileresponse3"></a>
<a id="schema_OBWriteFileResponse3"></a>
<a id="tocSobwritefileresponse3"></a>
<a id="tocsobwritefileresponse3"></a>

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "FilePaymentId": "string",
    "Initiation": {
      "ControlSum": 0,
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "FileHash": "string",
      "FileReference": "string",
      "FileType": "string",
      "LocalInstrument": "string",
      "NumberOfTransactions": "string",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Status": "InitiationCompleted",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBWriteFundsConfirmationResponse1">OBWriteFundsConfirmationResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaobwritefundsconfirmationresponse1"></a>
<a id="schema_OBWriteFundsConfirmationResponse1"></a>
<a id="tocSobwritefundsconfirmationresponse1"></a>
<a id="tocsobwritefundsconfirmationresponse1"></a>

```json
{
  "Data": {
    "FundsAvailableResult": {
      "FundsAvailable": true,
      "FundsAvailableDateTime": "1970-01-01T00:00:00Z"
    },
    "SupplementaryData": {}
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBWriteInternational3">OBWriteInternational3</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternational3"></a>
<a id="schema_OBWriteInternational3"></a>
<a id="tocSobwriteinternational3"></a>
<a id="tocsobwriteinternational3"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteInternationalConsent5">OBWriteInternationalConsent5</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalconsent5"></a>
<a id="schema_OBWriteInternationalConsent5"></a>
<a id="tocSobwriteinternationalconsent5"></a>
<a id="tocsobwriteinternationalconsent5"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteInternationalConsentResponse6">OBWriteInternationalConsentResponse6</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalconsentresponse6"></a>
<a id="schema_OBWriteInternationalConsentResponse6"></a>
<a id="tocSobwriteinternationalconsentresponse6"></a>
<a id="tocsobwriteinternationalconsentresponse6"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteInternationalResponse5">OBWriteInternationalResponse5</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalresponse5"></a>
<a id="schema_OBWriteInternationalResponse5"></a>
<a id="tocSobwriteinternationalresponse5"></a>
<a id="tocsobwriteinternationalresponse5"></a>

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "SupplementaryData": {}
    },
    "InternationalPaymentId": "string",
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "Agent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      }
    },
    "Status": "AcceptedCreditSettlementCompleted",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBWriteInternationalScheduled3">OBWriteInternationalScheduled3</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalscheduled3"></a>
<a id="schema_OBWriteInternationalScheduled3"></a>
<a id="tocSobwriteinternationalscheduled3"></a>
<a id="tocsobwriteinternationalscheduled3"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteInternationalScheduledConsent5">OBWriteInternationalScheduledConsent5</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalscheduledconsent5"></a>
<a id="schema_OBWriteInternationalScheduledConsent5"></a>
<a id="tocSobwriteinternationalscheduledconsent5"></a>
<a id="tocsobwriteinternationalscheduledconsent5"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteInternationalScheduledConsentResponse6">OBWriteInternationalScheduledConsentResponse6</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalscheduledconsentresponse6"></a>
<a id="schema_OBWriteInternationalScheduledConsentResponse6"></a>
<a id="tocSobwriteinternationalscheduledconsentresponse6"></a>
<a id="tocsobwriteinternationalscheduledconsentresponse6"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteInternationalScheduledResponse6">OBWriteInternationalScheduledResponse6</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalscheduledresponse6"></a>
<a id="schema_OBWriteInternationalScheduledResponse6"></a>
<a id="tocSobwriteinternationalscheduledresponse6"></a>
<a id="tocsobwriteinternationalscheduledresponse6"></a>

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "ExchangeRateInformation": {
      "ContractIdentification": "string",
      "ExchangeRate": 0,
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "RateType": "Actual",
      "UnitCurrency": "string"
    },
    "ExpectedExecutionDateTime": "1970-01-01T00:00:00Z",
    "ExpectedSettlementDateTime": "1970-01-01T00:00:00Z",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "EndToEndIdentification": "string",
      "ExchangeRateInformation": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "RateType": "Actual",
        "UnitCurrency": "string"
      },
      "ExtendedPurpose": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "InstructionIdentification": "string",
      "InstructionPriority": "Normal",
      "LocalInstrument": "string",
      "Purpose": "stri",
      "RemittanceInformation": {
        "Reference": "string",
        "Unstructured": "string"
      },
      "RequestedExecutionDateTime": "1970-01-01T00:00:00Z",
      "SupplementaryData": {}
    },
    "InternationalScheduledPaymentId": "string",
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "Agent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBWriteInternationalStandingOrder4">OBWriteInternationalStandingOrder4</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalstandingorder4"></a>
<a id="schema_OBWriteInternationalStandingOrder4"></a>
<a id="tocSobwriteinternationalstandingorder4"></a>
<a id="tocsobwriteinternationalstandingorder4"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "ExtendedPurpose": "string",
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NumberOfPayments": "string",
      "Purpose": "stri",
      "Reference": "string",
      "SupplementaryData": {}
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteInternationalStandingOrderConsent6">OBWriteInternationalStandingOrderConsent6</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalstandingorderconsent6"></a>
<a id="schema_OBWriteInternationalStandingOrderConsent6"></a>
<a id="tocSobwriteinternationalstandingorderconsent6"></a>
<a id="tocsobwriteinternationalstandingorderconsent6"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "ExtendedPurpose": "string",
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NumberOfPayments": "string",
      "Purpose": "stri",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    }
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteInternationalStandingOrderConsentResponse7">OBWriteInternationalStandingOrderConsentResponse7</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalstandingorderconsentresponse7"></a>
<a id="schema_OBWriteInternationalStandingOrderConsentResponse7"></a>
<a id="tocSobwriteinternationalstandingorderconsentresponse7"></a>
<a id="tocsobwriteinternationalstandingorderconsentresponse7"></a>

```json
{
  "Data": {
    "Authorisation": {
      "AuthorisationType": "Any",
      "CompletionDateTime": "1970-01-01T00:00:00Z"
    },
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "CutOffDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "ExtendedPurpose": "string",
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NumberOfPayments": "string",
      "Purpose": "stri",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "Permission": "Create",
    "ReadRefundAccount": "No",
    "SCASupportData": {
      "AppliedAuthenticationApproach": "CA",
      "ReferencePaymentOrderId": "string",
      "RequestedSCAExemptionType": "BillPayment"
    },
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {
    "DeliveryAddress": {
      "AddressLine": [
        "string"
      ],
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    },
    "MerchantCategoryCode": "stri",
    "MerchantCustomerIdentification": "string",
    "PaymentContextCode": "BillPayment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|
|Risk|[OBRisk1](#schemaobrisk1)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.|

<h2 id="tocS_OBWriteInternationalStandingOrderResponse7">OBWriteInternationalStandingOrderResponse7</h2>
<!-- backwards compatibility -->
<a id="schemaobwriteinternationalstandingorderresponse7"></a>
<a id="schema_OBWriteInternationalStandingOrderResponse7"></a>
<a id="tocSobwriteinternationalstandingorderresponse7"></a>
<a id="tocsobwriteinternationalstandingorderresponse7"></a>

```json
{
  "Data": {
    "Charges": [
      {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "ChargeBearer": "BorneByCreditor",
        "Type": "string"
      }
    ],
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "Debtor": {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    },
    "Initiation": {
      "ChargeBearer": "BorneByCreditor",
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      },
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyOfTransfer": "string",
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DestinationCountryCode": "string",
      "ExtendedPurpose": "string",
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NumberOfPayments": "string",
      "Purpose": "stri",
      "Reference": "string",
      "SupplementaryData": {}
    },
    "InternationalStandingOrderId": "string",
    "MultiAuthorisation": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "LastUpdateDateTime": "1970-01-01T00:00:00Z",
      "NumberReceived": 0,
      "NumberRequired": 0,
      "Status": "Authorised"
    },
    "Refund": {
      "Account": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "Agent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "Creditor": {
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        }
      }
    },
    "Status": "Cancelled",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBWritePaymentDetailsResponse1">OBWritePaymentDetailsResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaobwritepaymentdetailsresponse1"></a>
<a id="schema_OBWritePaymentDetailsResponse1"></a>
<a id="tocSobwritepaymentdetailsresponse1"></a>
<a id="tocsobwritepaymentdetailsresponse1"></a>

```json
{
  "Data": {
    "PaymentStatus": [
      {
        "PaymentTransactionId": "string",
        "Status": "Accepted",
        "StatusDetail": {
          "LocalInstrument": "string",
          "Status": "string",
          "StatusReason": "Cancelled",
          "StatusReasonDescription": "string"
        },
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_PostCode">PostCode</h2>
<!-- backwards compatibility -->
<a id="schemapostcode"></a>
<a id="schema_PostCode"></a>
<a id="tocSpostcode"></a>
<a id="tocspostcode"></a>

```json
"string"
```

Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.

<h2 id="tocS_SecondaryIdentification">SecondaryIdentification</h2>
<!-- backwards compatibility -->
<a id="schemasecondaryidentification"></a>
<a id="schema_SecondaryIdentification"></a>
<a id="tocSsecondaryidentification"></a>
<a id="tocssecondaryidentification"></a>

```json
"string"
```

This is secondary identification of the account, as assigned by the account servicing institution. 
This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).

<h2 id="tocS_StreetName">StreetName</h2>
<!-- backwards compatibility -->
<a id="schemastreetname"></a>
<a id="schema_StreetName"></a>
<a id="tocSstreetname"></a>
<a id="tocsstreetname"></a>

```json
"string"
```

Name of a street or thoroughfare.

<h2 id="tocS_SubDepartment">SubDepartment</h2>
<!-- backwards compatibility -->
<a id="schemasubdepartment"></a>
<a id="schema_SubDepartment"></a>
<a id="tocSsubdepartment"></a>
<a id="tocssubdepartment"></a>

```json
"string"
```

Identification of a sub-division of a large organisation or building.

<h2 id="tocS_TownName">TownName</h2>
<!-- backwards compatibility -->
<a id="schematownname"></a>
<a id="schema_TownName"></a>
<a id="tocStownname"></a>
<a id="tocstownname"></a>

```json
"string"
```

Name of a built-up area, with defined boundaries, and a local government.
