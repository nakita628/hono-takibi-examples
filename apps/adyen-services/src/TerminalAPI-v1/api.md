<h1 id="adyen-terminal-api">Adyen Terminal API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Adyen [Terminal API](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/) lets you make payments, issue refunds, collect shopper information, and perform other shopper-device interactions using a payment terminal supplied by Adyen. The Terminal API is also used for transactions in [Adyen Mobile solutions](https://docs.adyen.com/point-of-sale/ipp-mobile/).

## API structure
The architecture of Terminal API is determined by the [nexo Sale to POI Protocol Specifications](https://www.nexo-standards.org/standards/nexo-retailer-protocol).

A Terminal API request is a JSON message consisting of a `SaleToPOIRequest` object with:
- [`MessageHeader`](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/#request-message-header): identifies the type of transaction, the terminal or Mobile SDK instance being used, and unique transaction identifiers.
- **Request body**: content depending on the type of transaction or operation, for example, a `PaymentRequest`.

A Terminal API response is a JSON message consisting of a `SaletoPOIResponse`with:
* [`MessageHeader`](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/#response-message-header): echoes the values provided in the request, except for `MessageType`, which is always **Response**.
* Response body: content depending on the type of transaction or operation, for example, a `PaymentResponse`.

## Sending and receiving
In an integration with Ayden payment terminals, you can send and receive Terminal API messages in the following ways:
- [Local communications](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/local/): using your local network, your POS system sends the request directly to the IP address of the terminal, and receives the result synchronously.
- [Cloud communications](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/cloud/): using the internet to access the cloud, your POS system sends the request to an Adyen endpoint, and Adyen forwards the request to the terminal. Your POS system either keeps the connection open and receives the response synchronously, or closes the connection and receives the response asynchronously in an event notification.

## Using local communications
To learn how to set up and protect local communications, refer to [Building a local integration](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/local/).

## Endpoints for cloud communications
If your POS system is cloud-based, you POST your Terminal API requests to a **Cloud device API** endpoint, using path and query parameters to identify the device that you want to send the request to.
- If your POS system is designed to keep the connection open to wait for the response, use the endpoints ending in `/sync`.
- If your POS system is designed to close the connection so that it can initiate a new request, use the endpoints ending in `/async`.

### Test endpoints
- `https://device-api-test.adyen.com/v1/merchants/{merchantAccount}/devices/{deviceId}/sync`
- `https://device-api-test.adyen.com/v1/merchants/{merchantAccount}/devices/{deviceId}/async`

### Live endpoints
The live endpoints differ per region. In addition to using a regional endpoint, you must select the geographically closest data center in your live Customer Area.

**Australia**
- `https://device-api-live-au.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/sync`
- `https://device-api-live-au.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/async`

**East Asia**
- `https://device-api-live-apse.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/sync`
- `https://device-api-live-apse.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/async`

**Europe**
- `https://device-api-live.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/sync`
- `https://device-api-live.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/async`

**United States**
- `https://device-api-live-us.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/sync`
- `https://device-api-live-us.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/async`

 ### Old endpoints
If you currently use endpoints with a base URL that includes `terminal-api`, we strongly recommend migrating to Cloud device API endpoints, for the following reasons:
- When using Cloud device API, the API logs in the Customer Area include the Terminal API requests and responses.
- Cloud device API endpoints offer technical advantages such as versioning and better routing.
- Future enhancements and features will be based on Cloud device API.

There will be no future development on the old endpoints, but we continue to support them.

**Old test endpoints**:
- `https://terminal-api-test.adyen.com/sync` and `https://terminal-api-test.adyen.com/async`

**Old live endpoints Australia**:
- `https://terminal-api-live-au.adyen.com/sync` and `https://terminal-api-live-au.adyen.com/async`

**Old live endpoints East Asia**:
- `https://terminal-api-live-apse.adyen.com/sync` and `https://terminal-api-live-apse.adyen.com/async`

**Old live endpoints Europe**:
- `https://terminal-api-live.adyen.com/sync` and `https://terminal-api-live.adyen.com/async`

**Old live endpoints United States**:
- `https://terminal-api-live-us.adyen.com/sync` and `https://terminal-api-live-us.adyen.com/async`

## Authentication for cloud communications
Each request to a **Cloud device API** endpoint must be signed with an API key that has the **Cloud Device API role**. [Generate your API Key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the Customer Area and set this key to the `X-API-Key` header value of the Cloud device API request.

When going live, generate a new API key in the live Customer Area.

## Available Terminal API requests

Base URLs:

* <a href="https://device-api-test.adyen.com/v1/merchants/{merchantAccount}/devices/{deviceId}/sync">https://device-api-test.adyen.com/v1/merchants/{merchantAccount}/devices/{deviceId}/sync</a> - with cloud integration

* <a href="https://device-api-test.adyen.com/v1/merchants/{merchantAccount}/devices/{deviceId}/async">https://device-api-test.adyen.com/v1/merchants/{merchantAccount}/devices/{deviceId}/async</a> - with cloud integration

* <a href="&lt;local-terminal-IP-address&gt;">&lt;local-terminal-IP-address&gt;</a> - with local-hosting

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="adyen-terminal-api-default">Default</h1>

## Login Request

> Code samples

```bash
curl '<local-terminal-IP-address>/login' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "DateTime": "1970-01-01T00:00:00Z",
    "SaleSoftware": {
      "ManufacturerID": "string",
      "ApplicationName": "string",
      "SoftwareVersion": "string",
      "CertificationCode": "string"
    },
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TrainingModeFlag": false,
    "OperatorLanguage": "string",
    "OperatorID": "string",
    "ShiftNumber": "string",
    "TokenRequestedType": "Transaction",
    "CustomerOrderReq": [
      "Open"
    ],
    "POISerialNumber": "string"
  }'
```

`POST /login`

It conveys information related to the session (period between a Login and the following Logout) to process.
Content of the `LoginRequest` message.

> Body parameter

```json
{
  "DateTime": "1970-01-01T00:00:00Z",
  "SaleSoftware": {
    "ManufacturerID": "string",
    "ApplicationName": "string",
    "SoftwareVersion": "string",
    "CertificationCode": "string"
  },
  "SaleTerminalData": {
    "TotalsGroupID": "string"
  },
  "TrainingModeFlag": false,
  "OperatorLanguage": "string",
  "OperatorID": "string",
  "ShiftNumber": "string",
  "TokenRequestedType": "Transaction",
  "CustomerOrderReq": [
    "Open"
  ],
  "POISerialNumber": "string"
}
```

<h3 id="login-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoginRequest](#schemaloginrequest)|false|none|
|» DateTime|body|string(date-time)|true|Date and Time. In the Login request message, the Sale System gives its date and time to the POI System. In the Login response, the POI System gives its date and time to the Sale System.|
|» SaleSoftware|body|[SaleSoftware](#schemasalesoftware)|true|Information related to the software of the Sale System which manages the Sale to POI protocol.|
|» SaleTerminalData|body|[SaleTerminalData](#schemasaleterminaldata)|false|Information related to the software and hardware feature of the Sale Terminal.<br>Present if the login involve a Sale Terminal.|
|» TrainingModeFlag|body|boolean|false|Training mode.<br>This flag indicates to the POI that the entire session will be not used to make real transaction, but is used for test of system or operator training.|
|» OperatorLanguage|body|string|true|Language of the Cashier or Operator.<br>Default value for Device type displays.|
|» OperatorID|body|string|false|Identification of the Cashier or Operator.<br>Four conditions to send it:<br>* The Sale System wants the POI to log it in the transaction log.<br>* Because of reconciliation with total on OperatorID.<br>* Because the POI needs it.<br>* Acquirer or issuer need it.|
|» ShiftNumber|body|string|false|Shift number.<br>Same as OperatorID.|
|» TokenRequestedType|body|[TokenRequestedType](#schematokenrequestedtype)|false|Type of token replacing the PAN of a payment card to identify the payment<br> mean of the customer. It allows, for a merchant, to use a token for a transaction<br> only or for a longer period.<br>Possible values:<br>* **Customer**<br>* **Transaction**|
|» CustomerOrderReq|body|[CustomerOrderReq](#schemacustomerorderreq)|false|List of customer order open, closed or both to be sent in the response messages.<br>Possible values:<br>* **Both**<br>* **Closed**<br>* **Open**|
|» POISerialNumber|body|string|false|Serial number of a POI Terminal.<br>If the login involve a POI Terminal and not the first Login to the POI System.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» TokenRequestedType|Transaction|
|» TokenRequestedType|Customer|
|» CustomerOrderReq|Open|
|» CustomerOrderReq|Closed|
|» CustomerOrderReq|Both|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "POISystemData": {
    "DateTime": "1970-01-01T00:00:00Z",
    "POISoftware": {
      "ManufacturerID": "string",
      "ApplicationName": "string",
      "SoftwareVersion": "string",
      "CertificationCode": "string"
    },
    "POIStatus": {
      "GlobalStatus": "OK",
      "SecurityOKFlag": true,
      "PEDOKFlag": true,
      "CardReaderOKFlag": true,
      "PrinterStatus": "OK",
      "CommunicationOKFlag": true,
      "FraudPreventionFlag": true
    }
  },
  "TokenRequestStatus": true
}
```

<h3 id="login-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys Information related to the Login to process.<br>Content of the Login Response message.|[LoginResponse](#schemaloginresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Logout Request

> Code samples

```bash
curl '<local-terminal-IP-address>/logout' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "MaintenanceAllowed": false
  }'
```

`POST /logout`

Empty.
Content of the Logout Request message.

> Body parameter

```json
{
  "MaintenanceAllowed": false
}
```

<h3 id="logout-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LogoutRequest](#schemalogoutrequest)|false|none|
|» MaintenanceAllowed|body|boolean|false|Indicates that the POI terminal is able to or has to go to maintenance. Sent in the Logout Request to express that after closing the session, the POI may go to maintenance.|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  }
}
```

<h3 id="logout-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys the result of the Logout.<br>Content of the Logout Response message.|[LogoutResponse](#schemalogoutresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## EnableService Request

> Code samples

```bash
curl '<local-terminal-IP-address>/enableservice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "TransactionAction": "StartTransaction",
    "ServicesEnabled": [
      "CardAcquisition"
    ],
    "DisplayOutput": {
      "ResponseRequiredFlag": true,
      "MinimumDisplayTime": 0,
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      },
      "MenuEntry": [
        {
          "MenuEntryTag": "Selectable",
          "DefaultSelectedFlag": false,
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string"
        }
      ],
      "OutputSignature": "string"
    }
  }'
```

`POST /enableservice`

It conveys the services that will be enabled for the POI Terminal without the request of the Sale System, and a possible invitation for the Customer to start the services.
Content of the Enable Service Request message.

> Body parameter

```json
{
  "TransactionAction": "StartTransaction",
  "ServicesEnabled": [
    "CardAcquisition"
  ],
  "DisplayOutput": {
    "ResponseRequiredFlag": true,
    "MinimumDisplayTime": 0,
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "OutputContent": {
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string",
      "OutputBarcode": {
        "BarcodeValue": "string"
      }
    },
    "MenuEntry": [
      {
        "MenuEntryTag": "Selectable",
        "DefaultSelectedFlag": false,
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string"
      }
    ],
    "OutputSignature": "string"
  }
}
```

<h3 id="enableservice-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EnableServiceRequest](#schemaenableservicerequest)|false|none|
|» TransactionAction|body|[TransactionAction](#schematransactionaction)|true|Action to realise on a transaction. In an `EnableService` request message:<br>  - Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.<br>  - Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a service request from the Sale System to complete the transaction.<br>Possible values:<br>* **AbortTransaction**<br>* **StartTransaction**|
|» ServicesEnabled|body|[ServicesEnabled](#schemaservicesenabled)|false|Services which are enabled before the start-up of a transaction.<br>Mandatory if `TransactionAction` is `StartTransaction`, absent if not.<br>Possible values:<br>* **CardAcquisition**<br>* **Loyalty**<br>* **Payment**|
|» DisplayOutput|body|[DisplayOutput](#schemadisplayoutput)|false|Information to display and the way to process the display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» TransactionAction|StartTransaction|
|» TransactionAction|AbortTransaction|
|» ServicesEnabled|CardAcquisition|
|» ServicesEnabled|Payment|
|» ServicesEnabled|Loyalty|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  }
}
```

<h3 id="enableservice-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys the result of the Enable Service processing.<br>Content of the Enable Service Response message.|[EnableServiceResponse](#schemaenableserviceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Admin Request

> Code samples

```bash
curl '<local-terminal-IP-address>/admin' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "ServiceIdentification": "string"
  }'
```

`POST /admin`

Empty.
Content of the Custom Admin Request message.

> Body parameter

```json
{
  "ServiceIdentification": "string"
}
```

<h3 id="admin-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminRequest](#schemaadminrequest)|false|none|
|» ServiceIdentification|body|string|false|Identification of the administrative service to process.|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  }
}
```

<h3 id="admin-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys the result of the Custom Admin.<br>Content of the Custom Admin Response message.|[AdminResponse](#schemaadminresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Payment Request

> Code samples

```bash
curl '<local-terminal-IP-address>/payment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "PaymentTransaction": {
      "AmountsReq": {
        "Currency": "string",
        "RequestedAmount": 0,
        "CashBackAmount": 0,
        "TipAmount": 0,
        "PaidAmount": 0,
        "MinimumAmountToDeliver": 0,
        "MaximumCashBackAmount": 0,
        "MinimumSplitAmount": 0
      },
      "OriginalPOITransaction": {
        "SaleID": "string",
        "POIID": "string",
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "ReuseCardDataFlag": true,
        "ApprovalCode": "string",
        "AcquirerID": 0,
        "AmountValue": 0,
        "HostTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        }
      },
      "TransactionConditions": {
        "AllowedPaymentBrand": [
          "string"
        ],
        "AcquirerID": [
          0
        ],
        "DebitPreferredFlag": true,
        "AllowedLoyaltyBrand": [
          "string"
        ],
        "LoyaltyHandling": "Forbidden",
        "CustomerLanguage": "string",
        "ForceOnlineFlag": false,
        "ForceEntryMode": [
          "RFID"
        ],
        "MerchantCategoryCode": "string"
      }
    },
    "PaymentData": {
      "PaymentType": "Normal",
      "SplitPaymentFlag": false,
      "RequestedValidityDate": "1970-01-01",
      "CardAcquisitionReference": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "Instalment": {
        "InstalmentType": "DeferredInstalments",
        "SequenceNumber": 0,
        "PlanID": "string",
        "Period": 0,
        "PeriodUnit": "Daily",
        "FirstPaymentDate": "1970-01-01",
        "TotalNbOfPayments": 0,
        "CumulativeAmount": 0,
        "FirstAmount": 0,
        "Charges": 0
      },
      "PaymentInstrumentData": {
        "PaymentInstrumentType": "Card",
        "ProtectedCardData": "string",
        "CardData": {
          "PaymentBrand": "string",
          "MaskedPan": "string",
          "PaymentAccountRef": "string",
          "EntryMode": [
            "RFID"
          ],
          "CardCountryCode": 3,
          "ProtectedCardData": "string",
          "SensitiveCardData": {
            "PAN": 8,
            "CardSeqNumb": 2,
            "ExpiryDate": 4,
            "TrackData": [
              {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              }
            ]
          },
          "PaymentToken": {
            "TokenRequestedType": "Transaction",
            "TokenValue": "string",
            "ExpiryDateTime": "1970-01-01T00:00:00Z"
          }
        },
        "CheckData": {
          "BankID": "string",
          "AccountNumber": "string",
          "CheckNumber": "string",
          "TrackData": {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          },
          "CheckCardNumber": "string",
          "TypeCode": "Personal",
          "Country": "string"
        },
        "MobileData": {
          "MobileCountryCode": 3,
          "MobileNetworkCode": 2,
          "MaskedMSISDN": 0,
          "Geolocation": {
            "GeographicCoordinates": {
              "Latitude": "string",
              "Longitude": "string"
            },
            "UTMCoordinates": {
              "UTMZone": "string",
              "UTMEastward": "string",
              "UTMNorthward": "string"
            }
          },
          "ProtectedMobileData": "string",
          "SensitiveMobileData": {
            "MSISDN": 0,
            "IMSI": 0,
            "IMEI": 0
          }
        },
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        }
      }
    },
    "LoyaltyData": [
      {
        "CardAcquisitionReference": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "LoyaltyAccountID": {
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "IdentificationSupport": "NoCard",
          "LoyaltyID": "string"
        }
      }
    ]
  }'
```

`POST /payment`

Request sent to terminal to initiate payment.
It conveys Information related to the Payment transaction to process.
Content of the `PaymentRequest` message.

> Body parameter

```json
{
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "PaymentTransaction": {
    "AmountsReq": {
      "Currency": "string",
      "RequestedAmount": 0,
      "CashBackAmount": 0,
      "TipAmount": 0,
      "PaidAmount": 0,
      "MinimumAmountToDeliver": 0,
      "MaximumCashBackAmount": 0,
      "MinimumSplitAmount": 0
    },
    "OriginalPOITransaction": {
      "SaleID": "string",
      "POIID": "string",
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ReuseCardDataFlag": true,
      "ApprovalCode": "string",
      "AcquirerID": 0,
      "AmountValue": 0,
      "HostTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      }
    },
    "TransactionConditions": {
      "AllowedPaymentBrand": [
        "string"
      ],
      "AcquirerID": [
        0
      ],
      "DebitPreferredFlag": true,
      "AllowedLoyaltyBrand": [
        "string"
      ],
      "LoyaltyHandling": "Forbidden",
      "CustomerLanguage": "string",
      "ForceOnlineFlag": false,
      "ForceEntryMode": [
        "RFID"
      ],
      "MerchantCategoryCode": "string"
    }
  },
  "PaymentData": {
    "PaymentType": "Normal",
    "SplitPaymentFlag": false,
    "RequestedValidityDate": "1970-01-01",
    "CardAcquisitionReference": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "Instalment": {
      "InstalmentType": "DeferredInstalments",
      "SequenceNumber": 0,
      "PlanID": "string",
      "Period": 0,
      "PeriodUnit": "Daily",
      "FirstPaymentDate": "1970-01-01",
      "TotalNbOfPayments": 0,
      "CumulativeAmount": 0,
      "FirstAmount": 0,
      "Charges": 0
    },
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    }
  },
  "LoyaltyData": [
    {
      "CardAcquisitionReference": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "LoyaltyAccountID": {
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "IdentificationSupport": "NoCard",
        "LoyaltyID": "string"
      }
    }
  ]
}
```

<h3 id="payment-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentRequest](#schemapaymentrequest)|false|none|
|» SaleData|body|[SaleData](#schemasaledata)|true|Data related to the Sale System.|
|» PaymentTransaction|body|[PaymentTransaction](#schemapaymenttransaction)|true|Data related to the payment and loyalty transaction.|
|» PaymentData|body|[PaymentData](#schemapaymentdata)|false|Data related to the payment transaction.<br>If one data element is present.|
|» LoyaltyData|body|[[LoyaltyData](#schemaloyaltydata)]|false|Data related to a Loyalty program or account.<br>Loyalty cards used with the payment transaction and read by the Sale System.|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "POIData": {
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "POIReconciliationID": 0
  },
  "PaymentResult": {
    "PaymentType": "Normal",
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    },
    "AmountsResp": {
      "Currency": "string",
      "AuthorizedAmount": 0,
      "TotalRebatesAmount": 0,
      "TotalFeesAmount": 0,
      "CashBackAmount": 0,
      "TipAmount": 0
    },
    "Instalment": {
      "InstalmentType": "DeferredInstalments",
      "SequenceNumber": 0,
      "PlanID": "string",
      "Period": 0,
      "PeriodUnit": "Daily",
      "FirstPaymentDate": "1970-01-01",
      "TotalNbOfPayments": 0,
      "CumulativeAmount": 0,
      "FirstAmount": 0,
      "Charges": 0
    },
    "CurrencyConversion": [
      {
        "CustomerApprovedFlag": true,
        "ConvertedAmount": {
          "AmountValue": 0,
          "Currency": "string"
        },
        "Rate": 0,
        "Markup": 0,
        "Commission": 0,
        "Declaration": "string"
      }
    ],
    "MerchantOverrideFlag": false,
    "CapturedSignature": {
      "AreaSize": {
        "X": "string",
        "Y": "string"
      },
      "SignaturePoint": [
        {
          "X": "string",
          "Y": "string"
        }
      ]
    },
    "ProtectedSignature": "string",
    "CustomerLanguage": "string",
    "OnlineFlag": true,
    "AuthenticationMethod": [
      "Bypass"
    ],
    "ValidityDate": "1970-01-01",
    "PaymentAcquirerData": {
      "AcquirerID": 0,
      "MerchantID": "string",
      "AcquirerPOIID": "string",
      "AcquirerTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ApprovalCode": "string",
      "HostReconciliationID": "string"
    }
  },
  "LoyaltyResult": [
    {
      "LoyaltyAccount": {
        "LoyaltyAccountID": {
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "IdentificationSupport": "NoCard",
          "LoyaltyID": "string"
        },
        "LoyaltyBrand": "string"
      },
      "CurrentBalance": 0,
      "LoyaltyAcquirerData": {
        "LoyaltyAcquirerID": "string",
        "ApprovalCode": "string",
        "LoyaltyTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "HostReconciliationID": "string"
      }
    }
  ],
  "PaymentReceipt": [
    {
      "DocumentQualifier": "SaleReceipt",
      "IntegratedPrintFlag": true,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  ]
}
```

<h3 id="payment-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys Information related to the Payment transaction processed by the POI System.<br>Content of the Payment Response message.|[PaymentResponse](#schemapaymentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## CardAcquisition Request

> Code samples

```bash
curl '<local-terminal-IP-address>/cardacquisition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "CardAcquisitionTransaction": {
      "AllowedPaymentBrand": [
        "string"
      ],
      "AllowedLoyaltyBrand": [
        "string"
      ],
      "LoyaltyHandling": "Forbidden",
      "CustomerLanguage": "string",
      "ForceEntryMode": [
        "RFID"
      ],
      "ForceCustomerSelectionFlag": true,
      "TotalAmount": 0,
      "PaymentType": "Normal",
      "CashBackFlag": true
    }
  }'
```

`POST /cardacquisition`

It conveys Information related to the payment and loyalty cards to read and analyse. This message pair is usually followed by a message pair (e.g. payment or loyalty) which refers to this Card Acquisition message pair.
Content of the Card Acquisition Request message.

> Body parameter

```json
{
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "CardAcquisitionTransaction": {
    "AllowedPaymentBrand": [
      "string"
    ],
    "AllowedLoyaltyBrand": [
      "string"
    ],
    "LoyaltyHandling": "Forbidden",
    "CustomerLanguage": "string",
    "ForceEntryMode": [
      "RFID"
    ],
    "ForceCustomerSelectionFlag": true,
    "TotalAmount": 0,
    "PaymentType": "Normal",
    "CashBackFlag": true
  }
}
```

<h3 id="cardacquisition-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CardAcquisitionRequest](#schemacardacquisitionrequest)|false|none|
|» SaleData|body|[SaleData](#schemasaledata)|true|Data related to the Sale System.|
|» CardAcquisitionTransaction|body|[CardAcquisitionTransaction](#schemacardacquisitiontransaction)|true|Data related to the payment and loyalty card acquisition.|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "POIData": {
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "POIReconciliationID": 0
  },
  "PaymentBrand": [
    "string"
  ],
  "PaymentInstrumentData": {
    "PaymentInstrumentType": "Card",
    "ProtectedCardData": "string",
    "CardData": {
      "PaymentBrand": "string",
      "MaskedPan": "string",
      "PaymentAccountRef": "string",
      "EntryMode": [
        "RFID"
      ],
      "CardCountryCode": 3,
      "ProtectedCardData": "string",
      "SensitiveCardData": {
        "PAN": 8,
        "CardSeqNumb": 2,
        "ExpiryDate": 4,
        "TrackData": [
          {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          }
        ]
      },
      "PaymentToken": {
        "TokenRequestedType": "Transaction",
        "TokenValue": "string",
        "ExpiryDateTime": "1970-01-01T00:00:00Z"
      }
    },
    "CheckData": {
      "BankID": "string",
      "AccountNumber": "string",
      "CheckNumber": "string",
      "TrackData": {
        "TrackNumb": 2,
        "TrackFormat": "ISO",
        "TrackValue": "string"
      },
      "CheckCardNumber": "string",
      "TypeCode": "Personal",
      "Country": "string"
    },
    "MobileData": {
      "MobileCountryCode": 3,
      "MobileNetworkCode": 2,
      "MaskedMSISDN": 0,
      "Geolocation": {
        "GeographicCoordinates": {
          "Latitude": "string",
          "Longitude": "string"
        },
        "UTMCoordinates": {
          "UTMZone": "string",
          "UTMEastward": "string",
          "UTMNorthward": "string"
        }
      },
      "ProtectedMobileData": "string",
      "SensitiveMobileData": {
        "MSISDN": 0,
        "IMSI": 0,
        "IMEI": 0
      }
    },
    "StoredValueAccountID": {
      "StoredValueAccountType": "GiftCard",
      "StoredValueProvider": "string",
      "OwnerName": "string",
      "ExpiryDate": 4,
      "EntryMode": [
        "RFID"
      ],
      "IdentificationType": "PAN",
      "StoredValueID": "string"
    }
  },
  "LoyaltyAccount": [
    {
      "LoyaltyAccountID": {
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "IdentificationSupport": "NoCard",
        "LoyaltyID": "string"
      },
      "LoyaltyBrand": "string"
    }
  ]
}
```

<h3 id="cardacquisition-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys Information related to the payment and loyalty cards read and processed by the POI System and entered by the Customer.<br>Content of the Card Acquisition Response message.|[CardAcquisitionResponse](#schemacardacquisitionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## StoredValue Request

> Code samples

```bash
curl '<local-terminal-IP-address>/storedvalue' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "StoredValueData": [
      {
        "StoredValueProvider": "string",
        "StoredValueTransactionType": "Reserve",
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        },
        "OriginalPOITransaction": {
          "SaleID": "string",
          "POIID": "string",
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "ReuseCardDataFlag": true,
          "ApprovalCode": "string",
          "AcquirerID": 0,
          "AmountValue": 0,
          "HostTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          }
        },
        "ProductCode": 1,
        "EanUpc": 0,
        "ItemAmount": 0,
        "Currency": "string"
      }
    ]
  }'
```

`POST /storedvalue`

It conveys Information related to the Stored Value transaction to process.
Content of the Stored Value Request message.

> Body parameter

```json
{
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "StoredValueData": [
    {
      "StoredValueProvider": "string",
      "StoredValueTransactionType": "Reserve",
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      },
      "OriginalPOITransaction": {
        "SaleID": "string",
        "POIID": "string",
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "ReuseCardDataFlag": true,
        "ApprovalCode": "string",
        "AcquirerID": 0,
        "AmountValue": 0,
        "HostTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        }
      },
      "ProductCode": 1,
      "EanUpc": 0,
      "ItemAmount": 0,
      "Currency": "string"
    }
  ]
}
```

<h3 id="storedvalue-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StoredValueRequest](#schemastoredvaluerequest)|false|none|
|» SaleData|body|[SaleData](#schemasaledata)|true|Data related to the Sale System.|
|» StoredValueData|body|[[StoredValueData](#schemastoredvaluedata)]|true|Data related to the stored value card.|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "POIData": {
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "POIReconciliationID": 0
  },
  "StoredValueResult": [
    {
      "StoredValueTransactionType": "Reserve",
      "ProductCode": 1,
      "EanUpc": 0,
      "ItemAmount": 0,
      "Currency": "string",
      "StoredValueAccountStatus": {
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        },
        "CurrentBalance": 0
      },
      "HostTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "PaymentReceipt": [
    {
      "DocumentQualifier": "SaleReceipt",
      "IntegratedPrintFlag": true,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  ]
}
```

<h3 id="storedvalue-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys Information related to the Stored Value transaction processed by the POI System.<br>Content of the Stored Value Response message.|[StoredValueResponse](#schemastoredvalueresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Reversal Request

> Code samples

```bash
curl '<local-terminal-IP-address>/reversal' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "OriginalPOITransaction": {
      "SaleID": "string",
      "POIID": "string",
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ReuseCardDataFlag": true,
      "ApprovalCode": "string",
      "AcquirerID": 0,
      "AmountValue": 0,
      "HostTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      }
    },
    "ReversedAmount": 0,
    "ReversalReason": "CustCancel"
  }'
```

`POST /reversal`

It conveys Information related to the reversal of a previous payment or a loyalty transaction.
Content of the Reversal Request message.

> Body parameter

```json
{
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "OriginalPOITransaction": {
    "SaleID": "string",
    "POIID": "string",
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "ReuseCardDataFlag": true,
    "ApprovalCode": "string",
    "AcquirerID": 0,
    "AmountValue": 0,
    "HostTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    }
  },
  "ReversedAmount": 0,
  "ReversalReason": "CustCancel"
}
```

<h3 id="reversal-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReversalRequest](#schemareversalrequest)|false|none|
|» SaleData|body|[SaleData](#schemasaledata)|false|Data associated with the Sale System, with a particular value during the processing of the payment by the POI, including the cards acquisition.|
|» OriginalPOITransaction|body|[OriginalPOITransaction](#schemaoriginalpoitransaction)|true|Identification of a previous POI transaction.|
|» ReversedAmount|body|number|false|Amount of the payment or loyalty to reverse.<br>ReversedAmount is implicitly equal to the AuthorizedAmount if absent.|
|» ReversalReason|body|[ReversalReason](#schemareversalreason)|true|Reason of the payment or loyalty reversal.<br>Possible values:<br>* **CustCancel**<br>* **Malfunction**<br>* **MerchantCancel**<br>* **Unable2Compl**|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ReversalReason|CustCancel|
|» ReversalReason|MerchantCancel|
|» ReversalReason|Malfunction|
|» ReversalReason|Unable2Compl|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "POIData": {
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "POIReconciliationID": 0
  },
  "OriginalPOITransaction": {
    "SaleID": "string",
    "POIID": "string",
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "ReuseCardDataFlag": true,
    "ApprovalCode": "string",
    "AcquirerID": 0,
    "AmountValue": 0,
    "HostTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    }
  },
  "ReversedAmount": 0,
  "PaymentReceipt": [
    {
      "DocumentQualifier": "SaleReceipt",
      "IntegratedPrintFlag": true,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  ]
}
```

<h3 id="reversal-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys Information related to the reversal processed by the POI System.<br>Content of the Reversal Response message.|[ReversalResponse](#schemareversalresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Reconciliation Request

> Code samples

```bash
curl '<local-terminal-IP-address>/reconciliation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "ReconciliationType": "SaleReconciliation",
    "AcquirerID": [
      0
    ],
    "POIReconciliationID": 0
  }'
```

`POST /reconciliation`

Content of the Reconciliation Request message.
It conveys Information related to the Reconciliation requested by the Sale System.

> Body parameter

```json
{
  "ReconciliationType": "SaleReconciliation",
  "AcquirerID": [
    0
  ],
  "POIReconciliationID": 0
}
```

<h3 id="reconciliation-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReconciliationRequest](#schemareconciliationrequest)|false|none|
|» ReconciliationType|body|[ReconciliationType](#schemareconciliationtype)|true|Type of Reconciliation requested by the Sale to the POI.<br>Possible values:<br>* **AcquirerReconciliation**<br>* **AcquirerSynchronisation**<br>* **PreviousReconciliation**<br>* **SaleReconciliation**|
|» AcquirerID|body|[integer]|false|Identification of the Acquirer.<br>Could be present only if ReconciliationType is AcquirerReconciliation or AcquirerSynchronisation.|
|» POIReconciliationID|body|integer|false|Identification of the reconciliation period between Sale and POI.<br>Absent if ReconciliationType is not PreviousReconciliation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ReconciliationType|SaleReconciliation|
|» ReconciliationType|AcquirerSynchronisation|
|» ReconciliationType|AcquirerReconciliation|
|» ReconciliationType|PreviousReconciliation|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "ReconciliationType": "SaleReconciliation",
  "POIReconciliationID": 0,
  "TransactionTotals": [
    {
      "PaymentInstrumentType": "Card",
      "AcquirerID": 0,
      "HostReconciliationID": "string",
      "CardBrand": "string",
      "POIID": "string",
      "SaleID": "string",
      "OperatorID": "string",
      "ShiftNumber": "string",
      "TotalsGroupID": "string",
      "PaymentCurrency": "string",
      "PaymentTotals": [
        {
          "TransactionType": "Debit",
          "TransactionCount": 0,
          "TransactionAmount": 0
        }
      ]
    }
  ]
}
```

<h3 id="reconciliation-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys Information related to the Reconciliation transaction processed by the POI System.<br>Content of the Reconciliation Response message.|[ReconciliationResponse](#schemareconciliationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## GetTotals Request

> Code samples

```bash
curl '<local-terminal-IP-address>/gettotals' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "TotalDetails": [
      "POIID"
    ],
    "TotalFilter": {
      "POIID": "string",
      "SaleID": "string",
      "OperatorID": "string",
      "ShiftNumber": "string",
      "TotalsGroupID": "string"
    }
  }'
```

`POST /gettotals`

It conveys information from the Sale System related to the scope and the format of the totals to be computed by the POI System.
Content of the Get Totals Request message.

> Body parameter

```json
{
  "TotalDetails": [
    "POIID"
  ],
  "TotalFilter": {
    "POIID": "string",
    "SaleID": "string",
    "OperatorID": "string",
    "ShiftNumber": "string",
    "TotalsGroupID": "string"
  }
}
```

<h3 id="gettotals-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetTotalsRequest](#schemagettotalsrequest)|false|none|
|» TotalDetails|body|[TotalDetails](#schematotaldetails)|false|Indicates the hierarchical structure of the reconciliation result of the Sale to POI reconciliation.<br>Required to present totals per value of element included in this cluster (POI Terminal, Sale Terminal, Cashier, Shift, TotalsGroupID).<br>Possible values:<br>* **OperatorID**<br>* **POIID**<br>* **SaleID**<br>* **ShiftNumber**<br>* **TotalsGroupID**|
|» TotalFilter|body|[TotalFilter](#schematotalfilter)|false|Filter to compute the totals.<br>Used for the Get Totals, to request totals for a (or a combination of) particular value of the POI Terminal, Sale Terminal, Cashier, Shift, or TotalsGroupID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» TotalDetails|POIID|
|» TotalDetails|SaleID|
|» TotalDetails|OperatorID|
|» TotalDetails|ShiftNumber|
|» TotalDetails|TotalsGroupID|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "POIReconciliationID": 0,
  "TransactionTotals": [
    {
      "PaymentInstrumentType": "Card",
      "AcquirerID": 0,
      "HostReconciliationID": "string",
      "CardBrand": "string",
      "POIID": "string",
      "SaleID": "string",
      "OperatorID": "string",
      "ShiftNumber": "string",
      "TotalsGroupID": "string",
      "PaymentCurrency": "string",
      "PaymentTotals": [
        {
          "TransactionType": "Debit",
          "TransactionCount": 0,
          "TransactionAmount": 0
        }
      ]
    }
  ]
}
```

<h3 id="gettotals-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of the Reconciliation Response message.<br>It conveys Information related to the Reconciliation transaction processed by the POI System.|[GetTotalsResponse](#schemagettotalsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## BalanceInquiry Request

> Code samples

```bash
curl '<local-terminal-IP-address>/balanceinquiry' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "PaymentAccountReq": {
      "AccountType": "Default",
      "CardAcquisitionReference": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "PaymentInstrumentData": {
        "PaymentInstrumentType": "Card",
        "ProtectedCardData": "string",
        "CardData": {
          "PaymentBrand": "string",
          "MaskedPan": "string",
          "PaymentAccountRef": "string",
          "EntryMode": [
            "RFID"
          ],
          "CardCountryCode": 3,
          "ProtectedCardData": "string",
          "SensitiveCardData": {
            "PAN": 8,
            "CardSeqNumb": 2,
            "ExpiryDate": 4,
            "TrackData": [
              {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              }
            ]
          },
          "PaymentToken": {
            "TokenRequestedType": "Transaction",
            "TokenValue": "string",
            "ExpiryDateTime": "1970-01-01T00:00:00Z"
          }
        },
        "CheckData": {
          "BankID": "string",
          "AccountNumber": "string",
          "CheckNumber": "string",
          "TrackData": {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          },
          "CheckCardNumber": "string",
          "TypeCode": "Personal",
          "Country": "string"
        },
        "MobileData": {
          "MobileCountryCode": 3,
          "MobileNetworkCode": 2,
          "MaskedMSISDN": 0,
          "Geolocation": {
            "GeographicCoordinates": {
              "Latitude": "string",
              "Longitude": "string"
            },
            "UTMCoordinates": {
              "UTMZone": "string",
              "UTMEastward": "string",
              "UTMNorthward": "string"
            }
          },
          "ProtectedMobileData": "string",
          "SensitiveMobileData": {
            "MSISDN": 0,
            "IMSI": 0,
            "IMEI": 0
          }
        },
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        }
      }
    },
    "LoyaltyAccountReq": {
      "CardAcquisitionReference": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "LoyaltyAccountID": {
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "IdentificationSupport": "NoCard",
        "LoyaltyID": "string"
      }
    }
  }'
```

`POST /balanceinquiry`

It conveys Information related to the account for which a Balance Inquiry is requested.
Content of the Balance Inquiry Request message.

> Body parameter

```json
{
  "PaymentAccountReq": {
    "AccountType": "Default",
    "CardAcquisitionReference": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    }
  },
  "LoyaltyAccountReq": {
    "CardAcquisitionReference": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "LoyaltyAccountID": {
      "EntryMode": [
        "RFID"
      ],
      "IdentificationType": "PAN",
      "IdentificationSupport": "NoCard",
      "LoyaltyID": "string"
    }
  }
}
```

<h3 id="balanceinquiry-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BalanceInquiryRequest](#schemabalanceinquiryrequest)|false|none|
|» PaymentAccountReq|body|[PaymentAccountReq](#schemapaymentaccountreq)|false|Data related to the account pointed by the payment card.|
|» LoyaltyAccountReq|body|[LoyaltyAccountReq](#schemaloyaltyaccountreq)|false|Data related to a requested Loyalty program or account.|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "PaymentAccountStatus": {
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    },
    "CurrentBalance": 0,
    "Currency": "string",
    "PaymentAcquirerData": {
      "AcquirerID": 0,
      "MerchantID": "string",
      "AcquirerPOIID": "string",
      "AcquirerTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ApprovalCode": "string",
      "HostReconciliationID": "string"
    }
  },
  "PaymentReceipt": [
    {
      "DocumentQualifier": "SaleReceipt",
      "IntegratedPrintFlag": true,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  ]
}
```

<h3 id="balanceinquiry-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of the Balance Inquiry Response message.<br>It conveys the balance and the identification of the associated payment, loyalty or stored value account.|[BalanceInquiryResponse](#schemabalanceinquiryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## TransactionStatus Request

> Code samples

```bash
curl '<local-terminal-IP-address>/transactionstatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "MessageReference": {
      "MessageCategory": "Abort",
      "ServiceID": "string",
      "DeviceID": "string",
      "SaleID": "string",
      "POIID": "string"
    },
    "ReceiptReprintFlag": false,
    "DocumentQualifier": [
      "SaleReceipt"
    ]
  }'
```

`POST /transactionstatus`

Content of the TransactionStatus Request message.
It conveys Information requested for status of the last or current Payment, Loyalty or Reversal transaction.

> Body parameter

```json
{
  "MessageReference": {
    "MessageCategory": "Abort",
    "ServiceID": "string",
    "DeviceID": "string",
    "SaleID": "string",
    "POIID": "string"
  },
  "ReceiptReprintFlag": false,
  "DocumentQualifier": [
    "SaleReceipt"
  ]
}
```

<h3 id="transactionstatus-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransactionStatusRequest](#schematransactionstatusrequest)|false|none|
|» MessageReference|body|[MessageReference](#schemamessagereference)|false|Identification of a previous POI transaction.<br>Present if it contains any data.|
|» ReceiptReprintFlag|body|boolean|false|Request to reprint the POI receipt(s). Allows reprinting a receipt with a `TransactionStatus` message|
|» DocumentQualifier|body|[[DocumentQualifier](#schemadocumentqualifier)]|false|Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send the information to a particular physical printer or to use the paper type accordingly.<br>Possible values:<br>* **CashierReceipt**<br>* **CustomerReceipt**<br>* **Document**<br>* **Journal**<br>* **SaleReceipt**<br>* **Voucher**|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DocumentQualifier|SaleReceipt|
|» DocumentQualifier|CashierReceipt|
|» DocumentQualifier|CustomerReceipt|
|» DocumentQualifier|Document|
|» DocumentQualifier|Voucher|
|» DocumentQualifier|Journal|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "MessageReference": {
    "MessageCategory": "Abort",
    "ServiceID": "string",
    "DeviceID": "string",
    "SaleID": "string",
    "POIID": "string"
  },
  "RepeatedMessageResponse": {
    "MessageHeader": {
      "ProtocolVersion": "string",
      "MessageClass": "Service",
      "MessageCategory": "Abort",
      "MessageType": "Request",
      "ServiceID": "string",
      "DeviceID": "string",
      "SaleID": "string",
      "POIID": "string"
    },
    "RepeatedResponseMessageBody": {
      "LoyaltyResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "SaleData": {
          "OperatorID": "string",
          "OperatorLanguage": "string",
          "ShiftNumber": "string",
          "SaleTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "SaleReferenceID": "string",
          "SaleTerminalData": {
            "TotalsGroupID": "string"
          },
          "TokenRequestedType": "Transaction",
          "CustomerOrderID": "string",
          "CustomerOrderReq": [
            "Open"
          ],
          "SaleToPOIData": "string",
          "SaleToAcquirerData": "string",
          "SaleToIssuerData": {
            "StatementReference": "string"
          }
        },
        "POIData": {
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "POIReconciliationID": 0
        },
        "LoyaltyResult": [
          {
            "LoyaltyAccount": {
              "LoyaltyAccountID": {
                "EntryMode": [
                  "RFID"
                ],
                "IdentificationType": "PAN",
                "IdentificationSupport": "NoCard",
                "LoyaltyID": "string"
              },
              "LoyaltyBrand": "string"
            },
            "CurrentBalance": 0,
            "LoyaltyAcquirerData": {
              "LoyaltyAcquirerID": "string",
              "ApprovalCode": "string",
              "LoyaltyTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "HostReconciliationID": "string"
            }
          }
        ],
        "PaymentReceipt": [
          {
            "DocumentQualifier": "SaleReceipt",
            "IntegratedPrintFlag": true,
            "RequiredSignatureFlag": false,
            "OutputContent": {
              "OutputFormat": "MessageRef",
              "PredefinedContent": {
                "ReferenceID": "string",
                "Language": "string"
              },
              "OutputText": [
                {
                  "Text": "string",
                  "CharacterSet": 0,
                  "StartRow": 1,
                  "StartColumn": 1,
                  "CharacterWidth": "SingleWidth",
                  "CharacterHeight": "SingleHeight",
                  "CharacterStyle": "Normal",
                  "Alignment": "Left",
                  "EndOfLineFlag": true
                }
              ],
              "OutputXHTML": "string",
              "OutputBarcode": {
                "BarcodeValue": "string"
              }
            }
          }
        ]
      },
      "PaymentResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "SaleData": {
          "OperatorID": "string",
          "OperatorLanguage": "string",
          "ShiftNumber": "string",
          "SaleTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "SaleReferenceID": "string",
          "SaleTerminalData": {
            "TotalsGroupID": "string"
          },
          "TokenRequestedType": "Transaction",
          "CustomerOrderID": "string",
          "CustomerOrderReq": [
            "Open"
          ],
          "SaleToPOIData": "string",
          "SaleToAcquirerData": "string",
          "SaleToIssuerData": {
            "StatementReference": "string"
          }
        },
        "POIData": {
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "POIReconciliationID": 0
        },
        "PaymentResult": {
          "PaymentType": "Normal",
          "PaymentInstrumentData": {
            "PaymentInstrumentType": "Card",
            "ProtectedCardData": "string",
            "CardData": {
              "PaymentBrand": "string",
              "MaskedPan": "string",
              "PaymentAccountRef": "string",
              "EntryMode": [
                "RFID"
              ],
              "CardCountryCode": 3,
              "ProtectedCardData": "string",
              "SensitiveCardData": {
                "PAN": 8,
                "CardSeqNumb": 2,
                "ExpiryDate": 4,
                "TrackData": [
                  {
                    "TrackNumb": 2,
                    "TrackFormat": "ISO",
                    "TrackValue": "string"
                  }
                ]
              },
              "PaymentToken": {
                "TokenRequestedType": "Transaction",
                "TokenValue": "string",
                "ExpiryDateTime": "1970-01-01T00:00:00Z"
              }
            },
            "CheckData": {
              "BankID": "string",
              "AccountNumber": "string",
              "CheckNumber": "string",
              "TrackData": {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              },
              "CheckCardNumber": "string",
              "TypeCode": "Personal",
              "Country": "string"
            },
            "MobileData": {
              "MobileCountryCode": 3,
              "MobileNetworkCode": 2,
              "MaskedMSISDN": 0,
              "Geolocation": {
                "GeographicCoordinates": {
                  "Latitude": "string",
                  "Longitude": "string"
                },
                "UTMCoordinates": {
                  "UTMZone": "string",
                  "UTMEastward": "string",
                  "UTMNorthward": "string"
                }
              },
              "ProtectedMobileData": "string",
              "SensitiveMobileData": {
                "MSISDN": 0,
                "IMSI": 0,
                "IMEI": 0
              }
            },
            "StoredValueAccountID": {
              "StoredValueAccountType": "GiftCard",
              "StoredValueProvider": "string",
              "OwnerName": "string",
              "ExpiryDate": 4,
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "StoredValueID": "string"
            }
          },
          "AmountsResp": {
            "Currency": "string",
            "AuthorizedAmount": 0,
            "TotalRebatesAmount": 0,
            "TotalFeesAmount": 0,
            "CashBackAmount": 0,
            "TipAmount": 0
          },
          "Instalment": {
            "InstalmentType": "DeferredInstalments",
            "SequenceNumber": 0,
            "PlanID": "string",
            "Period": 0,
            "PeriodUnit": "Daily",
            "FirstPaymentDate": "1970-01-01",
            "TotalNbOfPayments": 0,
            "CumulativeAmount": 0,
            "FirstAmount": 0,
            "Charges": 0
          },
          "CurrencyConversion": [
            {
              "CustomerApprovedFlag": true,
              "ConvertedAmount": {
                "AmountValue": 0,
                "Currency": "string"
              },
              "Rate": 0,
              "Markup": 0,
              "Commission": 0,
              "Declaration": "string"
            }
          ],
          "MerchantOverrideFlag": false,
          "CapturedSignature": {
            "AreaSize": {
              "X": "string",
              "Y": "string"
            },
            "SignaturePoint": [
              {
                "X": "string",
                "Y": "string"
              }
            ]
          },
          "ProtectedSignature": "string",
          "CustomerLanguage": "string",
          "OnlineFlag": true,
          "AuthenticationMethod": [
            "Bypass"
          ],
          "ValidityDate": "1970-01-01",
          "PaymentAcquirerData": {
            "AcquirerID": 0,
            "MerchantID": "string",
            "AcquirerPOIID": "string",
            "AcquirerTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "ApprovalCode": "string",
            "HostReconciliationID": "string"
          }
        },
        "LoyaltyResult": [
          {
            "LoyaltyAccount": {
              "LoyaltyAccountID": {
                "EntryMode": [
                  "RFID"
                ],
                "IdentificationType": "PAN",
                "IdentificationSupport": "NoCard",
                "LoyaltyID": "string"
              },
              "LoyaltyBrand": "string"
            },
            "CurrentBalance": 0,
            "LoyaltyAcquirerData": {
              "LoyaltyAcquirerID": "string",
              "ApprovalCode": "string",
              "LoyaltyTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "HostReconciliationID": "string"
            }
          }
        ],
        "PaymentReceipt": [
          {
            "DocumentQualifier": "SaleReceipt",
            "IntegratedPrintFlag": true,
            "RequiredSignatureFlag": false,
            "OutputContent": {
              "OutputFormat": "MessageRef",
              "PredefinedContent": {
                "ReferenceID": "string",
                "Language": "string"
              },
              "OutputText": [
                {
                  "Text": "string",
                  "CharacterSet": 0,
                  "StartRow": 1,
                  "StartColumn": 1,
                  "CharacterWidth": "SingleWidth",
                  "CharacterHeight": "SingleHeight",
                  "CharacterStyle": "Normal",
                  "Alignment": "Left",
                  "EndOfLineFlag": true
                }
              ],
              "OutputXHTML": "string",
              "OutputBarcode": {
                "BarcodeValue": "string"
              }
            }
          }
        ]
      },
      "ReversalResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "POIData": {
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "POIReconciliationID": 0
        },
        "OriginalPOITransaction": {
          "SaleID": "string",
          "POIID": "string",
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "ReuseCardDataFlag": true,
          "ApprovalCode": "string",
          "AcquirerID": 0,
          "AmountValue": 0,
          "HostTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          }
        },
        "ReversedAmount": 0,
        "PaymentReceipt": [
          {
            "DocumentQualifier": "SaleReceipt",
            "IntegratedPrintFlag": true,
            "RequiredSignatureFlag": false,
            "OutputContent": {
              "OutputFormat": "MessageRef",
              "PredefinedContent": {
                "ReferenceID": "string",
                "Language": "string"
              },
              "OutputText": [
                {
                  "Text": "string",
                  "CharacterSet": 0,
                  "StartRow": 1,
                  "StartColumn": 1,
                  "CharacterWidth": "SingleWidth",
                  "CharacterHeight": "SingleHeight",
                  "CharacterStyle": "Normal",
                  "Alignment": "Left",
                  "EndOfLineFlag": true
                }
              ],
              "OutputXHTML": "string",
              "OutputBarcode": {
                "BarcodeValue": "string"
              }
            }
          }
        ]
      },
      "StoredValueResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "SaleData": {
          "OperatorID": "string",
          "OperatorLanguage": "string",
          "ShiftNumber": "string",
          "SaleTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "SaleReferenceID": "string",
          "SaleTerminalData": {
            "TotalsGroupID": "string"
          },
          "TokenRequestedType": "Transaction",
          "CustomerOrderID": "string",
          "CustomerOrderReq": [
            "Open"
          ],
          "SaleToPOIData": "string",
          "SaleToAcquirerData": "string",
          "SaleToIssuerData": {
            "StatementReference": "string"
          }
        },
        "POIData": {
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "POIReconciliationID": 0
        },
        "StoredValueResult": [
          {
            "StoredValueTransactionType": "Reserve",
            "ProductCode": 1,
            "EanUpc": 0,
            "ItemAmount": 0,
            "Currency": "string",
            "StoredValueAccountStatus": {
              "StoredValueAccountID": {
                "StoredValueAccountType": "GiftCard",
                "StoredValueProvider": "string",
                "OwnerName": "string",
                "ExpiryDate": 4,
                "EntryMode": [
                  "RFID"
                ],
                "IdentificationType": "PAN",
                "StoredValueID": "string"
              },
              "CurrentBalance": 0
            },
            "HostTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            }
          }
        ],
        "PaymentReceipt": [
          {
            "DocumentQualifier": "SaleReceipt",
            "IntegratedPrintFlag": true,
            "RequiredSignatureFlag": false,
            "OutputContent": {
              "OutputFormat": "MessageRef",
              "PredefinedContent": {
                "ReferenceID": "string",
                "Language": "string"
              },
              "OutputText": [
                {
                  "Text": "string",
                  "CharacterSet": 0,
                  "StartRow": 1,
                  "StartColumn": 1,
                  "CharacterWidth": "SingleWidth",
                  "CharacterHeight": "SingleHeight",
                  "CharacterStyle": "Normal",
                  "Alignment": "Left",
                  "EndOfLineFlag": true
                }
              ],
              "OutputXHTML": "string",
              "OutputBarcode": {
                "BarcodeValue": "string"
              }
            }
          }
        ]
      },
      "CardAcquisitionResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "SaleData": {
          "OperatorID": "string",
          "OperatorLanguage": "string",
          "ShiftNumber": "string",
          "SaleTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "SaleReferenceID": "string",
          "SaleTerminalData": {
            "TotalsGroupID": "string"
          },
          "TokenRequestedType": "Transaction",
          "CustomerOrderID": "string",
          "CustomerOrderReq": [
            "Open"
          ],
          "SaleToPOIData": "string",
          "SaleToAcquirerData": "string",
          "SaleToIssuerData": {
            "StatementReference": "string"
          }
        },
        "POIData": {
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "POIReconciliationID": 0
        },
        "PaymentBrand": [
          "string"
        ],
        "PaymentInstrumentData": {
          "PaymentInstrumentType": "Card",
          "ProtectedCardData": "string",
          "CardData": {
            "PaymentBrand": "string",
            "MaskedPan": "string",
            "PaymentAccountRef": "string",
            "EntryMode": [
              "RFID"
            ],
            "CardCountryCode": 3,
            "ProtectedCardData": "string",
            "SensitiveCardData": {
              "PAN": 8,
              "CardSeqNumb": 2,
              "ExpiryDate": 4,
              "TrackData": [
                {
                  "TrackNumb": 2,
                  "TrackFormat": "ISO",
                  "TrackValue": "string"
                }
              ]
            },
            "PaymentToken": {
              "TokenRequestedType": "Transaction",
              "TokenValue": "string",
              "ExpiryDateTime": "1970-01-01T00:00:00Z"
            }
          },
          "CheckData": {
            "BankID": "string",
            "AccountNumber": "string",
            "CheckNumber": "string",
            "TrackData": {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            },
            "CheckCardNumber": "string",
            "TypeCode": "Personal",
            "Country": "string"
          },
          "MobileData": {
            "MobileCountryCode": 3,
            "MobileNetworkCode": 2,
            "MaskedMSISDN": 0,
            "Geolocation": {
              "GeographicCoordinates": {
                "Latitude": "string",
                "Longitude": "string"
              },
              "UTMCoordinates": {
                "UTMZone": "string",
                "UTMEastward": "string",
                "UTMNorthward": "string"
              }
            },
            "ProtectedMobileData": "string",
            "SensitiveMobileData": {
              "MSISDN": 0,
              "IMSI": 0,
              "IMEI": 0
            }
          },
          "StoredValueAccountID": {
            "StoredValueAccountType": "GiftCard",
            "StoredValueProvider": "string",
            "OwnerName": "string",
            "ExpiryDate": 4,
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "StoredValueID": "string"
          }
        },
        "LoyaltyAccount": [
          {
            "LoyaltyAccountID": {
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "IdentificationSupport": "NoCard",
              "LoyaltyID": "string"
            },
            "LoyaltyBrand": "string"
          }
        ]
      },
      "CardReaderAPDUResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "APDUData": "string",
        "CardStatusWords": "string"
      }
    }
  }
}
```

<h3 id="transactionstatus-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of the TransactionStatus Response message.<br>It conveys Information related to the status of the last or current Payment, Loyalty or Reversal transaction.|[TransactionStatusResponse](#schematransactionstatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Abort Request

> Code samples

```bash
curl '<local-terminal-IP-address>/abort' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "MessageReference": {
      "MessageCategory": "Abort",
      "ServiceID": "string",
      "DeviceID": "string",
      "SaleID": "string",
      "POIID": "string"
    },
    "AbortReason": "string",
    "DisplayOutput": {
      "ResponseRequiredFlag": true,
      "MinimumDisplayTime": 0,
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      },
      "MenuEntry": [
        {
          "MenuEntryTag": "Selectable",
          "DefaultSelectedFlag": false,
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string"
        }
      ],
      "OutputSignature": "string"
    }
  }'
```

`POST /abort`

Body of the Abort Request message.
It conveys Information requested for identification of the message request carrying the transaction to abort. A message to display on the CustomerError Device could be sent by the Sale System (DisplayOutput).

> Body parameter

```json
{
  "MessageReference": {
    "MessageCategory": "Abort",
    "ServiceID": "string",
    "DeviceID": "string",
    "SaleID": "string",
    "POIID": "string"
  },
  "AbortReason": "string",
  "DisplayOutput": {
    "ResponseRequiredFlag": true,
    "MinimumDisplayTime": 0,
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "OutputContent": {
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string",
      "OutputBarcode": {
        "BarcodeValue": "string"
      }
    },
    "MenuEntry": [
      {
        "MenuEntryTag": "Selectable",
        "DefaultSelectedFlag": false,
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string"
      }
    ],
    "OutputSignature": "string"
  }
}
```

<h3 id="abort-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AbortRequest](#schemaabortrequest)|false|none|
|» MessageReference|body|[MessageReference](#schemamessagereference)|true|Identification of a previous POI transaction.|
|» AbortReason|body|string|true|Reason of aborting a transaction.|
|» DisplayOutput|body|[DisplayOutput](#schemadisplayoutput)|false|Information to display and the way to process the display.<br>To display an abort message to the Customer.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="abort-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful `AbortRequest` returns a response with a **200 OK** HTTP status code and no body.|[AbortResponse](#schemaabortresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Diagnosis Request

> Code samples

```bash
curl '<local-terminal-IP-address>/diagnosis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "POIID": "string",
    "HostDiagnosisFlag": false,
    "AcquirerID": [
      0
    ]
  }'
```

`POST /diagnosis`

It conveys Information related to the target POI for which the diagnosis is requested.
Content of the Diagnosis Request message.

> Body parameter

```json
{
  "POIID": "string",
  "HostDiagnosisFlag": false,
  "AcquirerID": [
    0
  ]
}
```

<h3 id="diagnosis-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DiagnosisRequest](#schemadiagnosisrequest)|false|none|
|» POIID|body|string|false|Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br>MessageHeader.POIID.|
|» HostDiagnosisFlag|body|boolean|false|Indicates if Host Diagnosis are required.|
|» AcquirerID|body|[integer]|false|Identification of the Acquirer.<br>Present if requesting the diagnosis of these hosts only.|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "POIStatus": {
    "GlobalStatus": "OK",
    "SecurityOKFlag": true,
    "PEDOKFlag": true,
    "CardReaderOKFlag": true,
    "PrinterStatus": "OK",
    "CommunicationOKFlag": true,
    "FraudPreventionFlag": true
  },
  "HostStatus": [
    {
      "AcquirerID": 0,
      "IsReachableFlag": true
    }
  ]
}
```

<h3 id="diagnosis-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys the result of the requested diagnosis and a possible message to display on a logical device.<br>Content of the Diagnosis Response message.|[DiagnosisResponse](#schemadiagnosisresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Display Request

> Code samples

```bash
curl '<local-terminal-IP-address>/display' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "DisplayOutput": [
      {
        "ResponseRequiredFlag": true,
        "MinimumDisplayTime": 0,
        "Device": "CashierDisplay",
        "InfoQualify": "Status",
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        },
        "MenuEntry": [
          {
            "MenuEntryTag": "Selectable",
            "DefaultSelectedFlag": false,
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string"
          }
        ],
        "OutputSignature": "string"
      }
    ]
  }'
```

`POST /display`

It conveys the data to display and the way to process the display. It contains the complete content to display. It might contain an operation (the DisplayOutput element) per Display Device type.
Content of the Display Request message.

> Body parameter

```json
{
  "DisplayOutput": [
    {
      "ResponseRequiredFlag": true,
      "MinimumDisplayTime": 0,
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      },
      "MenuEntry": [
        {
          "MenuEntryTag": "Selectable",
          "DefaultSelectedFlag": false,
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string"
        }
      ],
      "OutputSignature": "string"
    }
  ]
}
```

<h3 id="display-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DisplayRequest](#schemadisplayrequest)|false|none|
|» DisplayOutput|body|[[DisplayOutput](#schemadisplayoutput)]|true|Information to display and the way to process the display.<br>Complete display content for output devices. At most one DisplayOutput per Device/ InfoQualify pair.|

> Example responses

> 200 Response

```json
{
  "OutputResult": [
    {
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      }
    }
  ]
}
```

<h3 id="display-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys the result of the display, parallel to the message request, except if response not required and absent.<br>Content of the Display Response message.|[DisplayResponse](#schemadisplayresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Input Request

> Code samples

```bash
curl '<local-terminal-IP-address>/input' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "DisplayOutput": {
      "ResponseRequiredFlag": true,
      "MinimumDisplayTime": 0,
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      },
      "MenuEntry": [
        {
          "MenuEntryTag": "Selectable",
          "DefaultSelectedFlag": false,
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string"
        }
      ],
      "OutputSignature": "string"
    },
    "InputData": {
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "InputCommand": "GetAnyKey",
      "NotifyCardInputFlag": false,
      "MaxInputTime": 0,
      "ImmediateResponseFlag": false,
      "MinLength": 0,
      "MaxLength": 0,
      "MaxDecimalLength": 0,
      "WaitUserValidationFlag": true,
      "DefaultInputString": "string",
      "DefaultLayoutString": "string",
      "StringMask": "string",
      "FromRightToLeftFlag": false,
      "MaskCharactersFlag": false,
      "BeepKeyFlag": false,
      "GlobalCorrectionFlag": false,
      "DisableCancelFlag": false,
      "DisableCorrectFlag": false,
      "DisableValidFlag": false,
      "MenuBackFlag": false
    }
  }'
```

`POST /input`

Content of the `InputRequest` message. It conveys the data to display and how to process it. In addition to the display on the Input Device, it might contain an operation (the `DisplayOutput` element) per Display Device type.

> Body parameter

```json
{
  "DisplayOutput": {
    "ResponseRequiredFlag": true,
    "MinimumDisplayTime": 0,
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "OutputContent": {
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string",
      "OutputBarcode": {
        "BarcodeValue": "string"
      }
    },
    "MenuEntry": [
      {
        "MenuEntryTag": "Selectable",
        "DefaultSelectedFlag": false,
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string"
      }
    ],
    "OutputSignature": "string"
  },
  "InputData": {
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "InputCommand": "GetAnyKey",
    "NotifyCardInputFlag": false,
    "MaxInputTime": 0,
    "ImmediateResponseFlag": false,
    "MinLength": 0,
    "MaxLength": 0,
    "MaxDecimalLength": 0,
    "WaitUserValidationFlag": true,
    "DefaultInputString": "string",
    "DefaultLayoutString": "string",
    "StringMask": "string",
    "FromRightToLeftFlag": false,
    "MaskCharactersFlag": false,
    "BeepKeyFlag": false,
    "GlobalCorrectionFlag": false,
    "DisableCancelFlag": false,
    "DisableCorrectFlag": false,
    "DisableValidFlag": false,
    "MenuBackFlag": false
  }
}
```

<h3 id="input-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InputRequest](#schemainputrequest)|false|none|
|» DisplayOutput|body|[DisplayOutput](#schemadisplayoutput)|false|Information to display and the way to process the display.|
|» InputData|body|[InputData](#schemainputdata)|true|Information related to an Input request. It conveys the target input logical device, the type of input command, and possible minimum and maximum length of the input. In addition, if the requestor might require to receive an Event Notification if a card is inserted in a card reader, with the `NotifyCardInputFlag`.|

> Example responses

> 200 Response

```json
{
  "OutputResult": {
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    }
  },
  "InputResult": {
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "Input": {
      "InputCommand": "GetAnyKey",
      "ConfirmedFlag": true,
      "FunctionKey": 0,
      "TextInput": "string",
      "DigitInput": 0,
      "Password": "string",
      "MenuEntryNumber": [
        0
      ]
    }
  }
}
```

<h3 id="input-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys the result of the input or the result of the outputs, parallel to the message request, except if response not required and absent.<br>Content of the Input Response message.|[InputResponse](#schemainputresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Print Request

> Code samples

```bash
curl '<local-terminal-IP-address>/print' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "PrintOutput": {
      "DocumentQualifier": "SaleReceipt",
      "ResponseMode": "NotRequired",
      "IntegratedPrintFlag": false,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  }'
```

`POST /print`

Content of the Print Request message.
It conveys the complete data to print and how to process the print.

> Body parameter

```json
{
  "PrintOutput": {
    "DocumentQualifier": "SaleReceipt",
    "ResponseMode": "NotRequired",
    "IntegratedPrintFlag": false,
    "RequiredSignatureFlag": false,
    "OutputContent": {
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string",
      "OutputBarcode": {
        "BarcodeValue": "string"
      }
    }
  }
}
```

<h3 id="print-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrintRequest](#schemaprintrequest)|false|none|
|» PrintOutput|body|[PrintOutput](#schemaprintoutput)|true|Information to print and how to process it.|

> Example responses

> 200 Response

```json
{
  "DocumentQualifier": "SaleReceipt",
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  }
}
```

<h3 id="print-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|It conveys the result of the print, parallel to the message request, except if response not required and absent.<br>Content of the Print Response message.|[PrintResponse](#schemaprintresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## CardReaderAPDU Request

> Code samples

```bash
curl '<local-terminal-IP-address>/cardreaderapdu' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "APDUClass": "string",
    "APDUInstruction": "string",
    "APDUPar1": "string",
    "APDUPar2": "string",
    "APDUData": "string",
    "APDUExpectedLength": "string"
  }'
```

`POST /cardreaderapdu`

It contains the APDU request to send to the chip of the card, and a possible invitation message to display on the CashierInterface or the CustomerInterface.
Content of the Card Reader APDU Request message.

> Body parameter

```json
{
  "APDUClass": "string",
  "APDUInstruction": "string",
  "APDUPar1": "string",
  "APDUPar2": "string",
  "APDUData": "string",
  "APDUExpectedLength": "string"
}
```

<h3 id="cardreaderapdu-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CardReaderAPDURequest](#schemacardreaderapdurequest)|false|none|
|» APDUClass|body|string(byte)|true|Class field of the APDU command (CLA). APDU request for Card Reader device request. For specific card like synchronous card, a private value should be used in accordance to ISO 7816- 4 (private range D0-FE).|
|» APDUInstruction|body|string(byte)|true|Instruction field of the APDU command (INS).|
|» APDUPar1|body|string(byte)|true|Parameter 1 field of the APDU command (P1).|
|» APDUPar2|body|string(byte)|true|Parameter 2 field of the APDU command(P2).|
|» APDUData|body|string(byte)|false|Data field of the APDU command (Lc + Data).|
|» APDUExpectedLength|body|string(byte)|false|Expected length of the data field of the APDU response to the command (Le).|

> Example responses

> 200 Response

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "APDUData": "string",
  "CardStatusWords": "string"
}
```

<h3 id="cardreaderapdu-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of the Card Reader APDU Response message.<br>It contains the result of the requested service, APDU response sent by the chip of the card in response to the APDU request.|[CardReaderAPDUResponse](#schemacardreaderapduresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_SaleCapabilities">SaleCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemasalecapabilities"></a>
<a id="schema_SaleCapabilities"></a>
<a id="tocSsalecapabilities"></a>
<a id="tocssalecapabilities"></a>

```json
[
  "CashierStatus"
]
```

place holder!
Possible values:
* **CashierDisplay**
* **CashierError**
* **CashierInput**
* **CashierStatus**
* **CustomerAssistance**
* **CustomerDisplay**
* **CustomerError**
* **CustomerInput**
* **EMVContactless**
* **ICC**
* **MagStripe**
* **POIReplication**
* **PrinterDocument**
* **PrinterReceipt**
* **PrinterVoucher**

<h2 id="tocS_TokenRequestedType">TokenRequestedType</h2>
<!-- backwards compatibility -->
<a id="schematokenrequestedtype"></a>
<a id="schema_TokenRequestedType"></a>
<a id="tocStokenrequestedtype"></a>
<a id="tocstokenrequestedtype"></a>

```json
"Transaction"
```

Type of token replacing the PAN of a payment card to identify the payment mean of the customer. It allows, for a merchant, to use a token for a transaction only or for a longer period.
Possible values:
* **Transaction**
* **Customer**

<h2 id="tocS_CustomerOrderReq">CustomerOrderReq</h2>
<!-- backwards compatibility -->
<a id="schemacustomerorderreq"></a>
<a id="schema_CustomerOrderReq"></a>
<a id="tocScustomerorderreq"></a>
<a id="tocscustomerorderreq"></a>

```json
[
  "Open"
]
```

List of customer order open, closed or both to be sent in the response messages.
Possible values:
* **Both**
* **Closed**
* **Open**

<h2 id="tocS_TrackFormat">TrackFormat</h2>
<!-- backwards compatibility -->
<a id="schematrackformat"></a>
<a id="schema_TrackFormat"></a>
<a id="tocStrackformat"></a>
<a id="tocstrackformat"></a>

```json
"ISO"
```

Magnetic track or magnetic ink characters line.
Possible values:
* **ISO**
* **JIS-I**
* **JIS-II**
* **AAMVA**
* **CMC-7**
* **E-13B**

<h2 id="tocS_EntryMode">EntryMode</h2>
<!-- backwards compatibility -->
<a id="schemaentrymode"></a>
<a id="schema_EntryMode"></a>
<a id="tocSentrymode"></a>
<a id="tocsentrymode"></a>

```json
[
  "RFID"
]
```

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
"Success"
```


Possible values:
* **Success**
* **Failure**
* **Partial**

<h2 id="tocS_ErrorCondition">ErrorCondition</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcondition"></a>
<a id="schema_ErrorCondition"></a>
<a id="tocSerrorcondition"></a>
<a id="tocserrorcondition"></a>

```json
"Aborted"
```


Possible values:
* **Aborted**
* **Busy**
* **Cancel**
* **DeviceOut**
* **InsertedCard**
* **InProgress**
* **LoggedOut**
* **MessageFormat**
* **NotAllowed**
* **NotFound**
* **PaymentRestriction**
* **Refusal**
* **UnavailableDevice**
* **UnavailableService**
* **InvalidCard**
* **UnreachableHost**
* **WrongPIN**

<h2 id="tocS_GlobalStatus">GlobalStatus</h2>
<!-- backwards compatibility -->
<a id="schemaglobalstatus"></a>
<a id="schema_GlobalStatus"></a>
<a id="tocSglobalstatus"></a>
<a id="tocsglobalstatus"></a>

```json
"OK"
```


Possible values:
* **OK**
* **Busy**
* **Maintenance**
* **Unreachable**

<h2 id="tocS_PrinterStatus">PrinterStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprinterstatus"></a>
<a id="schema_PrinterStatus"></a>
<a id="tocSprinterstatus"></a>
<a id="tocsprinterstatus"></a>

```json
"OK"
```

Indicates if the printer is working and usable.
Possible values:
* **OK**
* **PaperLow**
* **NoPaper**
* **PaperJam**
* **OutOfOrder**

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
"CashierDisplay"
```


Possible values:
* **CashierDisplay**
* **CustomerDisplay**
* **CashierInput**
* **CustomerInput**

<h2 id="tocS_InfoQualify">InfoQualify</h2>
<!-- backwards compatibility -->
<a id="schemainfoqualify"></a>
<a id="schema_InfoQualify"></a>
<a id="tocSinfoqualify"></a>
<a id="tocsinfoqualify"></a>

```json
"Status"
```


Possible values:
* **Status**
* **Error**
* **Display**
* **Sound**
* **Input**
* **POIReplication**
* **CustomerAssistance**
* **Receipt**
* **Document**
* **Voucher**

<h2 id="tocS_OutputFormat">OutputFormat</h2>
<!-- backwards compatibility -->
<a id="schemaoutputformat"></a>
<a id="schema_OutputFormat"></a>
<a id="tocSoutputformat"></a>
<a id="tocsoutputformat"></a>

```json
"MessageRef"
```

Format of the content to display or print. Display or print device function.
Possible values:
* **MessageRef**
* **Text**
* **XHTML**
* **BarCode**

<h2 id="tocS_CharacterWidth">CharacterWidth</h2>
<!-- backwards compatibility -->
<a id="schemacharacterwidth"></a>
<a id="schema_CharacterWidth"></a>
<a id="tocScharacterwidth"></a>
<a id="tocscharacterwidth"></a>

```json
"SingleWidth"
```


Possible values:
* **SingleWidth**
* **DoubleWidth**

<h2 id="tocS_CharacterHeight">CharacterHeight</h2>
<!-- backwards compatibility -->
<a id="schemacharacterheight"></a>
<a id="schema_CharacterHeight"></a>
<a id="tocScharacterheight"></a>
<a id="tocscharacterheight"></a>

```json
"SingleHeight"
```


Possible values:
* **SingleHeight**
* **DoubleHeight**
* **HalfHeight**

<h2 id="tocS_CharacterStyle">CharacterStyle</h2>
<!-- backwards compatibility -->
<a id="schemacharacterstyle"></a>
<a id="schema_CharacterStyle"></a>
<a id="tocScharacterstyle"></a>
<a id="tocscharacterstyle"></a>

```json
"Normal"
```


Possible values:
* **Normal**
* **Bold**
* **Italic**
* **Underline**

<h2 id="tocS_Alignment">Alignment</h2>
<!-- backwards compatibility -->
<a id="schemaalignment"></a>
<a id="schema_Alignment"></a>
<a id="tocSalignment"></a>
<a id="tocsalignment"></a>

```json
"Left"
```


Possible values:
* **Left**
* **Right**
* **Centred**
* **Justified**

<h2 id="tocS_MenuEntryTag">MenuEntryTag</h2>
<!-- backwards compatibility -->
<a id="schemamenuentrytag"></a>
<a id="schema_MenuEntryTag"></a>
<a id="tocSmenuentrytag"></a>
<a id="tocsmenuentrytag"></a>

```json
"Selectable"
```

Characteristics related to the selection of a menu entry.
Possible values:
* **Selectable**
* **NonSelectable**
* **SubMenu**
* **NonSelectableSubMenu**

<h2 id="tocS_TransactionAction">TransactionAction</h2>
<!-- backwards compatibility -->
<a id="schematransactionaction"></a>
<a id="schema_TransactionAction"></a>
<a id="tocStransactionaction"></a>
<a id="tocstransactionaction"></a>

```json
"StartTransaction"
```

Action to realise on a transaction. In an `EnableService` request message:
  - Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.
  - Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a service request from the Sale System to complete the transaction.
Possible values:
* **StartTransaction**
* **AbortTransaction**

<h2 id="tocS_ServicesEnabled">ServicesEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaservicesenabled"></a>
<a id="schema_ServicesEnabled"></a>
<a id="tocSservicesenabled"></a>
<a id="tocsservicesenabled"></a>

```json
[
  "CardAcquisition"
]
```

Services which are enabled before the start-up of a transaction.
Mandatory if `TransactionAction` is `StartTransaction`, absent if not.
Possible values:
* **CardAcquisition**
* **Loyalty**
* **Payment**

<h2 id="tocS_PaymentType">PaymentType</h2>
<!-- backwards compatibility -->
<a id="schemapaymenttype"></a>
<a id="schema_PaymentType"></a>
<a id="tocSpaymenttype"></a>
<a id="tocspaymenttype"></a>

```json
"Normal"
```


Possible values:
* **Normal**
* **Refund**
* **OneTimeReservation**
* **FirstReservation**
* **UpdateReservation**
* **Completion**
* **CashAdvance**
* **CashDeposit**
* **Recurring**
* **Instalment**
* **IssuerInstalment**
* **PaidOut**

<h2 id="tocS_PaymentInstrumentType">PaymentInstrumentType</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumenttype"></a>
<a id="schema_PaymentInstrumentType"></a>
<a id="tocSpaymentinstrumenttype"></a>
<a id="tocspaymentinstrumenttype"></a>

```json
"Card"
```


Possible values:
* **Card**
* **Check**
* **Mobile**
* **StoredValue**
* **Cash**

<h2 id="tocS_TypeCode">TypeCode</h2>
<!-- backwards compatibility -->
<a id="schematypecode"></a>
<a id="schema_TypeCode"></a>
<a id="tocStypecode"></a>
<a id="tocstypecode"></a>

```json
"Personal"
```


Possible values:
* **Personal**
* **Company**

<h2 id="tocS_StoredValueAccountType">StoredValueAccountType</h2>
<!-- backwards compatibility -->
<a id="schemastoredvalueaccounttype"></a>
<a id="schema_StoredValueAccountType"></a>
<a id="tocSstoredvalueaccounttype"></a>
<a id="tocsstoredvalueaccounttype"></a>

```json
"GiftCard"
```


Possible values:
* **GiftCard**
* **PhoneCard**
* **Other**

<h2 id="tocS_IdentificationType">IdentificationType</h2>
<!-- backwards compatibility -->
<a id="schemaidentificationtype"></a>
<a id="schema_IdentificationType"></a>
<a id="tocSidentificationtype"></a>
<a id="tocsidentificationtype"></a>

```json
"PAN"
```


Possible values:
* **PAN**
* **ISOTrack2**
* **BarCode**
* **AccountNumber**
* **PhoneNumber**

<h2 id="tocS_IdentificationSupport">IdentificationSupport</h2>
<!-- backwards compatibility -->
<a id="schemaidentificationsupport"></a>
<a id="schema_IdentificationSupport"></a>
<a id="tocSidentificationsupport"></a>
<a id="tocsidentificationsupport"></a>

```json
"NoCard"
```

Support of the loyalty account identification. Allows knowing where and how you have found the loyalty account identification.
Possible values:
* **NoCard**
* **LoyaltyCard**
* **HybridCard**
* **LinkedCard**

<h2 id="tocS_InstalmentType">InstalmentType</h2>
<!-- backwards compatibility -->
<a id="schemainstalmenttype"></a>
<a id="schema_InstalmentType"></a>
<a id="tocSinstalmenttype"></a>
<a id="tocsinstalmenttype"></a>

```json
"DeferredInstalments"
```

Type of instalment transaction. For requesting an instalment payment transaction.
Possible values:
* **DeferredInstalments**
* **EqualInstalments**
* **InequalInstalments**

<h2 id="tocS_PeriodUnit">PeriodUnit</h2>
<!-- backwards compatibility -->
<a id="schemaperiodunit"></a>
<a id="schema_PeriodUnit"></a>
<a id="tocSperiodunit"></a>
<a id="tocsperiodunit"></a>

```json
"Daily"
```

Type of instalment transaction.
Possible values:
* **Daily**
* **Weekly**
* **Monthly**
* **Annual**

<h2 id="tocS_LoyaltyHandling">LoyaltyHandling</h2>
<!-- backwards compatibility -->
<a id="schemaloyaltyhandling"></a>
<a id="schema_LoyaltyHandling"></a>
<a id="tocSloyaltyhandling"></a>
<a id="tocsloyaltyhandling"></a>

```json
"Forbidden"
```


Possible values:
* **Forbidden**
* **Processed**
* **Allowed**
* **Proposed**
* **Required**

<h2 id="tocS_ForceEntryMode">ForceEntryMode</h2>
<!-- backwards compatibility -->
<a id="schemaforceentrymode"></a>
<a id="schema_ForceEntryMode"></a>
<a id="tocSforceentrymode"></a>
<a id="tocsforceentrymode"></a>

```json
[
  "RFID"
]
```

<h2 id="tocS_DocumentQualifier">DocumentQualifier</h2>
<!-- backwards compatibility -->
<a id="schemadocumentqualifier"></a>
<a id="schema_DocumentQualifier"></a>
<a id="tocSdocumentqualifier"></a>
<a id="tocsdocumentqualifier"></a>

```json
"SaleReceipt"
```


Possible values:
* **SaleReceipt**
* **CashierReceipt**
* **CustomerReceipt**
* **Document**
* **Voucher**
* **Journal**

<h2 id="tocS_AuthenticationMethod">AuthenticationMethod</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationmethod"></a>
<a id="schema_AuthenticationMethod"></a>
<a id="tocSauthenticationmethod"></a>
<a id="tocsauthenticationmethod"></a>

```json
[
  "Bypass"
]
```

Method for customer authentication. Allows the Sale System informed about customer authentication for the payment transaction.
Possible values:
* **Bypass**
* **ManualVerification**
* **MerchantAuthentication**
* **OfflinePIN**
* **OnlinePIN**
* **PaperSignature**
* **SecureCertificate**
* **SecureNoCertificate**
* **SecuredChannel**
* **SignatureCapture**
* **UnknownMethod**

<h2 id="tocS_StoredValueTransactionType">StoredValueTransactionType</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluetransactiontype"></a>
<a id="schema_StoredValueTransactionType"></a>
<a id="tocSstoredvaluetransactiontype"></a>
<a id="tocsstoredvaluetransactiontype"></a>

```json
"Reserve"
```


Possible values:
* **Reserve**
* **Activate**
* **Load**
* **Unload**
* **Reverse**
* **Duplicate**

<h2 id="tocS_ReversalReason">ReversalReason</h2>
<!-- backwards compatibility -->
<a id="schemareversalreason"></a>
<a id="schema_ReversalReason"></a>
<a id="tocSreversalreason"></a>
<a id="tocsreversalreason"></a>

```json
"CustCancel"
```

Reason of the payment or loyalty reversal.
Possible values:
* **CustCancel**
* **MerchantCancel**
* **Malfunction**
* **Unable2Compl**

<h2 id="tocS_ReconciliationType">ReconciliationType</h2>
<!-- backwards compatibility -->
<a id="schemareconciliationtype"></a>
<a id="schema_ReconciliationType"></a>
<a id="tocSreconciliationtype"></a>
<a id="tocsreconciliationtype"></a>

```json
"SaleReconciliation"
```


Possible values:
* **SaleReconciliation**
* **AcquirerSynchronisation**
* **AcquirerReconciliation**
* **PreviousReconciliation**

<h2 id="tocS_TransactionType">TransactionType</h2>
<!-- backwards compatibility -->
<a id="schematransactiontype"></a>
<a id="schema_TransactionType"></a>
<a id="tocStransactiontype"></a>
<a id="tocstransactiontype"></a>

```json
"Debit"
```


Possible values:
* **Debit**
* **Credit**
* **ReverseDebit**
* **ReverseCredit**
* **OneTimeReservation**
* **CompletedDeffered**
* **FirstReservation**
* **UpdateReservation**
* **CompletedReservation**
* **CashAdvance**
* **IssuerInstalment**
* **Declined**
* **Failed**
* **Award**
* **ReverseAward**
* **Redemption**
* **ReverseRedemption**
* **Rebate**
* **ReverseRebate**

<h2 id="tocS_TotalDetails">TotalDetails</h2>
<!-- backwards compatibility -->
<a id="schematotaldetails"></a>
<a id="schema_TotalDetails"></a>
<a id="tocStotaldetails"></a>
<a id="tocstotaldetails"></a>

```json
[
  "POIID"
]
```

Indicates the hierarchical structure of the reconciliation result of the Sale to POI reconciliation.
Required to present totals per value of element included in this cluster (POI Terminal, Sale Terminal, Cashier, Shift, TotalsGroupID).
Possible values:
* **OperatorID**
* **POIID**
* **SaleID**
* **ShiftNumber**
* **TotalsGroupID**

<h2 id="tocS_AccountType">AccountType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttype"></a>
<a id="schema_AccountType"></a>
<a id="tocSaccounttype"></a>
<a id="tocsaccounttype"></a>

```json
"Default"
```

Type of cardholder account used for the transaction. Allows a cardholder to select the type of account used for the transaction.
Possible values:
* **Default**
* **Savings**
* **Checking**
* **CreditCard**
* **Universal**
* **Investment**
* **CardTotals**
* **EpurseCard**

<h2 id="tocS_MessageCategory">MessageCategory</h2>
<!-- backwards compatibility -->
<a id="schemamessagecategory"></a>
<a id="schema_MessageCategory"></a>
<a id="tocSmessagecategory"></a>
<a id="tocsmessagecategory"></a>

```json
"Abort"
```


Possible values:
* **Abort**
* **Admin**
* **BalanceInquiry**
* **CardAcquisition**
* **Diagnosis**
* **Display**
* **EnableService**
* **Event**
* **GetTotals**
* **Input**
* **InputUpdate**
* **Login**
* **Logout**
* **Loyalty**
* **Payment**
* **Print**
* **Reconciliation**
* **Reversal**
* **StoredValue**
* **TransactionStatus**
* **None**

<h2 id="tocS_MessageType">MessageType</h2>
<!-- backwards compatibility -->
<a id="schemamessagetype"></a>
<a id="schema_MessageType"></a>
<a id="tocSmessagetype"></a>
<a id="tocsmessagetype"></a>

```json
"Request"
```


Possible values:
* **Request**
* **Response**
* **Notification**

<h2 id="tocS_MessageClass">MessageClass</h2>
<!-- backwards compatibility -->
<a id="schemamessageclass"></a>
<a id="schema_MessageClass"></a>
<a id="tocSmessageclass"></a>
<a id="tocsmessageclass"></a>

```json
"Service"
```


Possible values:
* **Service**
* **Device**
* **Event**

<h2 id="tocS_EventToNotify">EventToNotify</h2>
<!-- backwards compatibility -->
<a id="schemaeventtonotify"></a>
<a id="schema_EventToNotify"></a>
<a id="tocSeventtonotify"></a>
<a id="tocseventtonotify"></a>

```json
"BeginMaintenance"
```

Event the POI notifies to the Sale System.
Possible values:
* **BeginMaintenance**
* **EndMaintenance**
* **Shutdown**
* **Initialised**
* **OutOfOrder**
* **Completed**
* **Abort**
* **SaleWakeUp**
* **SaleAdmin**
* **CustomerLanguage**
* **KeyPressed**
* **SecurityAlarm**
* **StopAssistance**
* **CardInserted**
* **CardRemoved**
* **Reject**
* **UseAnotherCardForPreauth**
* **ScanBarcodeResult**

<h2 id="tocS_InputCommand">InputCommand</h2>
<!-- backwards compatibility -->
<a id="schemainputcommand"></a>
<a id="schema_InputCommand"></a>
<a id="tocSinputcommand"></a>
<a id="tocsinputcommand"></a>

```json
"GetAnyKey"
```


Possible values:
* **GetAnyKey**
* **GetConfirmation**
* **SiteManager**
* **TextString**
* **DigitString**
* **DecimalString**
* **GetFunctionKey**
* **GetMenuEntry**
* **Password**

<h2 id="tocS_ResponseMode">ResponseMode</h2>
<!-- backwards compatibility -->
<a id="schemaresponsemode"></a>
<a id="schema_ResponseMode"></a>
<a id="tocSresponsemode"></a>
<a id="tocsresponsemode"></a>

```json
"NotRequired"
```


Possible values:
* **NotRequired**
* **Immediate**
* **PrintEnd**
* **SoundEnd**

<h2 id="tocS_SoundFormat">SoundFormat</h2>
<!-- backwards compatibility -->
<a id="schemasoundformat"></a>
<a id="schema_SoundFormat"></a>
<a id="tocSsoundformat"></a>
<a id="tocssoundformat"></a>

```json
"SoundRef"
```


Possible values:
* **SoundRef**
* **MessageRef**
* **Text**

<h2 id="tocS_SoundAction">SoundAction</h2>
<!-- backwards compatibility -->
<a id="schemasoundaction"></a>
<a id="schema_SoundAction"></a>
<a id="tocSsoundaction"></a>
<a id="tocssoundaction"></a>

```json
"StartSound"
```


Possible values:
* **StartSound**
* **StopSound**
* **SetDefaultVolume**

<h2 id="tocS_PINFormat">PINFormat</h2>
<!-- backwards compatibility -->
<a id="schemapinformat"></a>
<a id="schema_PINFormat"></a>
<a id="tocSpinformat"></a>
<a id="tocspinformat"></a>

```json
"ISO0"
```

<h2 id="tocS_PINRequestType">PINRequestType</h2>
<!-- backwards compatibility -->
<a id="schemapinrequesttype"></a>
<a id="schema_PINRequestType"></a>
<a id="tocSpinrequesttype"></a>
<a id="tocspinrequesttype"></a>

```json
"PINVerify"
```

Type of PIN Service.
Possible values:
* **PINVerify**
* **PINVerifyOnly**
* **PINEnter**

<h2 id="tocS_SaleToIssuerData">SaleToIssuerData</h2>
<!-- backwards compatibility -->
<a id="schemasaletoissuerdata"></a>
<a id="schema_SaleToIssuerData"></a>
<a id="tocSsaletoissuerdata"></a>
<a id="tocssaletoissuerdata"></a>

```json
{
  "StatementReference": "string"
}
```

Sale information intended for the Issuer.
The POI System receives this information and sends it to the Acquirer for the Issuer without any change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementReference|string|false|none|Label to print on the bank statement.|

<h2 id="tocS_TrackData">TrackData</h2>
<!-- backwards compatibility -->
<a id="schematrackdata"></a>
<a id="schema_TrackData"></a>
<a id="tocStrackdata"></a>
<a id="tocstrackdata"></a>

```json
{
  "TrackNumb": 2,
  "TrackFormat": "ISO",
  "TrackValue": "string"
}
```

Magnetic track or magnetic ink characters line.
ISO 7813 - ISO 4909.
Generic data structure for a card track, used when the magstripe card reader is located on the Sale Terminal, or for magstripe Card Reader device request. The data structure is also used to store the line at the bottom of a bank check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrackNumb|integer|false|none|Card track number.|
|TrackFormat|[TrackFormat](#schematrackformat)|false|none|Card track format.<br>Possible values:<br>* **AAMVA**<br>* **ISO**|
|TrackValue|string|true|none|Card track content.|

#### Enumerated Values

|Property|Value|
|---|---|
|TrackFormat|ISO|
|TrackFormat|JIS-I|
|TrackFormat|JIS-II|
|TrackFormat|AAMVA|
|TrackFormat|CMC-7|
|TrackFormat|E-13B|

<h2 id="tocS_SensitiveCardData">SensitiveCardData</h2>
<!-- backwards compatibility -->
<a id="schemasensitivecarddata"></a>
<a id="schema_SensitiveCardData"></a>
<a id="tocSsensitivecarddata"></a>
<a id="tocssensitivecarddata"></a>

```json
{
  "PAN": 8,
  "CardSeqNumb": 2,
  "ExpiryDate": 4,
  "TrackData": [
    {
      "TrackNumb": 2,
      "TrackFormat": "ISO",
      "TrackValue": "string"
    }
  ]
}
```

This data structure could be CMS protected (EnvelopedData). In this case the data structure SensitiveCardData is replaced by the data structure ProtectedCardData of type ContentInformationType.
When this data is protected, the exact content is unknown by the Sale System, and might include
all the information which are required by an external backup POI Server to make a batch payment
transaction in case of problem with the POI System.
Sensitive information related to the payment card, entered or read
by the Sale System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PAN|integer|false|none|Primary Account Number.|
|CardSeqNumb|integer|false|none|Card Sequence Number.<br>If EntryMode is File, Keyed, or Manual.|
|ExpiryDate|integer|false|none|Date after which the card cannot be used.<br>If EntryMode is File.|
|TrackData|[[TrackData](#schematrackdata)]|false|none|Magnetic track or magnetic ink characters line.<br>If EntryMode is MagStripe or RFID .|

<h2 id="tocS_PaymentToken">PaymentToken</h2>
<!-- backwards compatibility -->
<a id="schemapaymenttoken"></a>
<a id="schema_PaymentToken"></a>
<a id="tocSpaymenttoken"></a>
<a id="tocspaymenttoken"></a>

```json
{
  "TokenRequestedType": "Transaction",
  "TokenValue": "string",
  "ExpiryDateTime": "1970-01-01T00:00:00Z"
}
```

Surrogate of the PAN (Primary Account Number) of the payment card to
 identify the payment mean of the customer. It allows, for a merchant, to identify
 the customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TokenRequestedType|[TokenRequestedType](#schematokenrequestedtype)|true|none|Type of token replacing the PAN of a payment card to identify the payment<br> mean of the customer. It allows, for a merchant, to use a token for a transaction<br> only or for a longer period.<br>Possible values:<br>* **Customer**<br>* **Transaction**|
|TokenValue|string|true|none|Payment token replacing the PAN of the payment card to identify the payment<br> mean of the customer.|
|ExpiryDateTime|string(date-time)|false|none|Expiry date and time. Limits the validity of a payment token.|

#### Enumerated Values

|Property|Value|
|---|---|
|TokenRequestedType|Transaction|
|TokenRequestedType|Customer|

<h2 id="tocS_CardData">CardData</h2>
<!-- backwards compatibility -->
<a id="schemacarddata"></a>
<a id="schema_CardData"></a>
<a id="tocScarddata"></a>
<a id="tocscarddata"></a>

```json
{
  "PaymentBrand": "string",
  "MaskedPan": "string",
  "PaymentAccountRef": "string",
  "EntryMode": [
    "RFID"
  ],
  "CardCountryCode": 3,
  "ProtectedCardData": "string",
  "SensitiveCardData": {
    "PAN": 8,
    "CardSeqNumb": 2,
    "ExpiryDate": 4,
    "TrackData": [
      {
        "TrackNumb": 2,
        "TrackFormat": "ISO",
        "TrackValue": "string"
      }
    ]
  },
  "PaymentToken": {
    "TokenRequestedType": "Transaction",
    "TokenValue": "string",
    "ExpiryDateTime": "1970-01-01T00:00:00Z"
  }
}
```

Information related to the payment card used for the transaction.
Allows acquisition of the card data by the Sale System before the Payment, CardAcquisition, or BalanceInquiry request to the POI. It can also be sent in the CardAcquisition response, to be processed by the Sale System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaymentBrand|string|false|none|Type of payment card.<br>If card PAN is readable.<br>Indicates the card used to pay in the PaymentResponse. Sent in the CardAcquisitionResponse, to leave the Cashier to choose between several applications in a smartcard, or several brand in a co-branded card. In this case, the CardAcquisitionRequest.ForceCustomerSelectionFlag must contain the value False. Brands are part of the POI and Sale Systems configurations.|
|MaskedPan|string|false|none|Masked Primary Account Number<br>Part of the PAN is replaced by a string of * characters, to identify a customer account or relationship. Presence of this data element, which replace the PAN when SensitiveCardData is protected and replaced by ProtectedCardData. Alternatively the MaskedPAN can be used as a token to identify a customer.|
|PaymentAccountRef|string|false|none|Reference of the PAN, which identifies the PAN or the card uniquely, named also PAR (Payment Account Reference). This reference may be defined by the card issuer or by a token service provider under the control of the card issuer, and cannot be used for a payment transaction.|
|EntryMode|[EntryMode](#schemaentrymode)|false|none|Entry mode of the payment instrument information. In the Payment, Loyalty or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. In the Payment, Loyalty or StoredValue Response messages, it informs the Sale System the entry mode of the payment instrument.<br>Possible values:<br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **Mobile**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped**|
|CardCountryCode|integer|false|none|Country Code attached to the card (3 numerics).<br>If available in the card.|
|ProtectedCardData|string|false|none|Sensitive information related to the payment card, protected by CMS.<br>SensitiveCardData protected by CMS EnvelopedData.|
|SensitiveCardData|[SensitiveCardData](#schemasensitivecarddata)|false|none|Sensitive information related to the payment card, entered or read by the Sale System.<br>If structure non empty and unprotected.|
|PaymentToken|[PaymentToken](#schemapaymenttoken)|false|none|Surrogate of the PAN (Primary Account Number) of the payment card to identify the payment mean of the customer. It allows, for a merchant, to identify the customer.<br>Restriction of product payable by a card.|

#### Enumerated Values

|Property|Value|
|---|---|
|EntryMode|RFID|
|EntryMode|Keyed|
|EntryMode|Manual|
|EntryMode|File|
|EntryMode|Scanned|
|EntryMode|MagStripe|
|EntryMode|ICC|
|EntryMode|SynchronousICC|
|EntryMode|Tapped|
|EntryMode|Contactless|
|EntryMode|Mobile|

<h2 id="tocS_TransactionIDType">TransactionIDType</h2>
<!-- backwards compatibility -->
<a id="schematransactionidtype"></a>
<a id="schema_TransactionIDType"></a>
<a id="tocStransactionidtype"></a>
<a id="tocstransactionidtype"></a>

```json
{
  "TransactionID": "string",
  "TimeStamp": "1970-01-01T00:00:00Z"
}
```

Identification of a transaction for the Sale System or the POI System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionID|string|true|none|Unique identification of a transaction to identify the transaction on<br>the Sale System (e.g. ticket number), or the POI System.|
|TimeStamp|string(date-time)|true|none|Date and time of a transaction for the Sale System, the POI System or the Acquirer.<br> Ensures the uniqueness of a transaction and indicates the time when the event<br> occurs in the EventNotification message.|

<h2 id="tocS_SaleTerminalData">SaleTerminalData</h2>
<!-- backwards compatibility -->
<a id="schemasaleterminaldata"></a>
<a id="schema_SaleTerminalData"></a>
<a id="tocSsaleterminaldata"></a>
<a id="tocssaleterminaldata"></a>

```json
{
  "TotalsGroupID": "string"
}
```

Information related to the software and hardware features of the Sale Terminal.
Sent in the Login Request if a Sale Terminal is involved in the login. In other messages, sent when a logical device is out of order (SaleCapabilities) or when other data have changed or were missing in the Login.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalsGroupID|string|false|none|Identification of a group of transactions on a POI Terminal, having the same Sale features.<br>Could be used to group POI for reconciliation or other purpose defined by the Sale System. The default value is assigned by the Login Request.|

<h2 id="tocS_SaleData">SaleData</h2>
<!-- backwards compatibility -->
<a id="schemasaledata"></a>
<a id="schema_SaleData"></a>
<a id="tocSsaledata"></a>
<a id="tocssaledata"></a>

```json
{
  "OperatorID": "string",
  "OperatorLanguage": "string",
  "ShiftNumber": "string",
  "SaleTransactionID": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  },
  "SaleReferenceID": "string",
  "SaleTerminalData": {
    "TotalsGroupID": "string"
  },
  "TokenRequestedType": "Transaction",
  "CustomerOrderID": "string",
  "CustomerOrderReq": [
    "Open"
  ],
  "SaleToPOIData": "string",
  "SaleToAcquirerData": "string",
  "SaleToIssuerData": {
    "StatementReference": "string"
  }
}
```

Data associated with the Sale System, with a particular value during the processing of the payment by the POI, including the cards acquisition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperatorID|string|false|none|Identification of the Cashier or Operator.|
|OperatorLanguage|string|false|none|Language of the Cashier or Operator.<br>If different from the Login.|
|ShiftNumber|string|false|none|Shift number.<br>If different from the Login, see Login SaleData.|
|SaleTransactionID|[TransactionIDType](#schematransactionidtype)|true|none|Identification of a Sale transaction.|
|SaleReferenceID|string|false|none|Identification of a Sale global transaction for a sequence of related POI transactions.<br>If payment reservation.|
|SaleTerminalData|[SaleTerminalData](#schemasaleterminaldata)|false|none|Information related to the software and hardware features of the Sale Terminal.<br>If content is not empty.|
|TokenRequestedType|[TokenRequestedType](#schematokenrequestedtype)|false|none|Type of token replacing the PAN of a payment card to identify the payment<br> mean of the customer. It allows, for a merchant, to use a token for a transaction<br> only or for a longer period.<br>Possible values:<br>* **Customer**<br>* **Transaction**|
|CustomerOrderID|string|false|none|Additional and optional identification of a customer order.|
|CustomerOrderReq|[CustomerOrderReq](#schemacustomerorderreq)|false|none|List of customer order open, closed or both to be sent in the response messages.<br>Possible values:<br>* **Both**<br>* **Closed**<br>* **Open**|
|SaleToPOIData|string|false|none|Sale information intended for the POI.<br>Stored with the transaction.|
|SaleToAcquirerData|string|false|none|Sale information intended for the Acquirer.<br>Send to the Acquirer if present.|
|SaleToIssuerData|[SaleToIssuerData](#schemasaletoissuerdata)|false|none|Sale information intended for the Issuer.<br>Send to the Acquirer if present.|

#### Enumerated Values

|Property|Value|
|---|---|
|TokenRequestedType|Transaction|
|TokenRequestedType|Customer|
|CustomerOrderReq|Open|
|CustomerOrderReq|Closed|
|CustomerOrderReq|Both|

<h2 id="tocS_POIData">POIData</h2>
<!-- backwards compatibility -->
<a id="schemapoidata"></a>
<a id="schema_POIData"></a>
<a id="tocSpoidata"></a>
<a id="tocspoidata"></a>

```json
{
  "POITransactionID": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  },
  "POIReconciliationID": 0
}
```

Data related to the POI System.
In the Message Response, identification of the POI transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|POITransactionID|[TransactionIDType](#schematransactionidtype)|true|none|Unique identification of a POI transaction for a POI.|
|POIReconciliationID|integer|false|none|Identification of the reconciliation period between Sale and POI.<br>If Result is Success.|

<h2 id="tocS_SaleSoftware">SaleSoftware</h2>
<!-- backwards compatibility -->
<a id="schemasalesoftware"></a>
<a id="schema_SaleSoftware"></a>
<a id="tocSsalesoftware"></a>
<a id="tocssalesoftware"></a>

```json
{
  "ManufacturerID": "string",
  "ApplicationName": "string",
  "SoftwareVersion": "string",
  "CertificationCode": "string"
}
```

Information related to the software of the Sale System which manages the NEXO Sale to POI protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManufacturerID|string|true|none|Identification of the Manufacturer.|
|ApplicationName|string|true|none|Name of the software product.|
|SoftwareVersion|string|true|none|Version of the software product.|
|CertificationCode|string|true|none|Certification code of the software which manages the Sale to POI protocol.|

<h2 id="tocS_POIStatus">POIStatus</h2>
<!-- backwards compatibility -->
<a id="schemapoistatus"></a>
<a id="schema_POIStatus"></a>
<a id="tocSpoistatus"></a>
<a id="tocspoistatus"></a>

```json
{
  "GlobalStatus": "OK",
  "SecurityOKFlag": true,
  "PEDOKFlag": true,
  "CardReaderOKFlag": true,
  "PrinterStatus": "OK",
  "CommunicationOKFlag": true,
  "FraudPreventionFlag": true
}
```

Indicate the availability of the POI Terminal components. The data element is absent if the component is not part of the POI Terminal.
State of a POI Terminal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalStatus|[GlobalStatus](#schemaglobalstatus)|true|none|Global status of a POI Server or POI Terminal.<br>Possible values:<br>* **Busy**<br>* **Maintenance**<br>* **OK**<br>* **Unreachable**|
|SecurityOKFlag|boolean|false|none|Indicates if the security module of the POI is working and usable.<br>If security module present.|
|PEDOKFlag|boolean|false|none|Indicates if the PED is working and usable.<br>If PED present.|
|CardReaderOKFlag|boolean|false|none|Indicates if the card readers are working and usable.<br>If card reader device present.|
|PrinterStatus|[PrinterStatus](#schemaprinterstatus)|false|none|Possible values:<br>* **NoPaper**<br>* **OK**<br>* **OutOfOrder**<br>* **PaperJam**<br>* **PaperLow**|
|CommunicationOKFlag|boolean|false|none|Indicates if the communication infrastructure is working and usable.<br>If communication infrastructure present.|
|FraudPreventionFlag|boolean|false|none|Indicates a suspicion of fraud by the POI System.<br>Could be set to True by the POI system to notify to the Sale system and the Cashier that a suspicion of fraud had been detected on the POI as an unexpected reboot of the POI.|

#### Enumerated Values

|Property|Value|
|---|---|
|GlobalStatus|OK|
|GlobalStatus|Busy|
|GlobalStatus|Maintenance|
|GlobalStatus|Unreachable|
|PrinterStatus|OK|
|PrinterStatus|PaperLow|
|PrinterStatus|NoPaper|
|PrinterStatus|PaperJam|
|PrinterStatus|OutOfOrder|

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "Result": "Success",
  "ErrorCondition": "Aborted",
  "AdditionalResponse": "string"
}
```

Result of a message request processing.
If Result is Success, `ErrorCondition` is absent or not used in the processing of the message. In the other cases, the `ErrorCondition` has to be present and can refine the processing of the message response. `AdditionalResponse` gives more information about the success or the failure of the message request processing, for logging without real time involvements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Result|[Result](#schemaresult)|true|none|Result of the processing of the message.<br>Possible values:<br>* **Failure**<br>* **Partial**<br>* **Success**|
|ErrorCondition|[ErrorCondition](#schemaerrorcondition)|false|none|Condition that has produced an error on the processing of a message request.<br>Returned if Result is not Success.<br>Possible values:<br>* **Aborted**<br>* **Busy**<br>* **Cancel**<br>* **DeviceOut**<br>* **InProgress**<br>* **InsertedCard**<br>* **InvalidCard**<br>* **LoggedOut**<br>* **MessageFormat**<br>* **NotAllowed**<br>* **NotFound**<br>* **PaymentRestriction**<br>* **Refusal**<br>* **UnavailableDevice**<br>* **UnavailableService**<br>* **UnreachableHost**<br>* **WrongPIN**|
|AdditionalResponse|string|false|none|Additional information related to processing status of a message request.<br>If present, the POI logs it for further examination.|

#### Enumerated Values

|Property|Value|
|---|---|
|Result|Success|
|Result|Failure|
|Result|Partial|
|ErrorCondition|Aborted|
|ErrorCondition|Busy|
|ErrorCondition|Cancel|
|ErrorCondition|DeviceOut|
|ErrorCondition|InsertedCard|
|ErrorCondition|InProgress|
|ErrorCondition|LoggedOut|
|ErrorCondition|MessageFormat|
|ErrorCondition|NotAllowed|
|ErrorCondition|NotFound|
|ErrorCondition|PaymentRestriction|
|ErrorCondition|Refusal|
|ErrorCondition|UnavailableDevice|
|ErrorCondition|UnavailableService|
|ErrorCondition|InvalidCard|
|ErrorCondition|UnreachableHost|
|ErrorCondition|WrongPIN|

<h2 id="tocS_POISoftware">POISoftware</h2>
<!-- backwards compatibility -->
<a id="schemapoisoftware"></a>
<a id="schema_POISoftware"></a>
<a id="tocSpoisoftware"></a>
<a id="tocspoisoftware"></a>

```json
{
  "ManufacturerID": "string",
  "ApplicationName": "string",
  "SoftwareVersion": "string",
  "CertificationCode": "string"
}
```

Information related to the software of the POI System which manages the Sale to POI protocol. In a session allows identifying the product features of a POI System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManufacturerID|string|true|none|Identification of the Manufacturer. Sent in the Login Request (Response) to identify the Sale System (POI System) manufacturer during the session.|
|ApplicationName|string|true|none|Name of the software product. Sent in the Login Request (Response) to identify the Sale System (POI System) product name during the session.|
|SoftwareVersion|string|true|none|Version of the software product. Sent in the Login Request (Response) to identify the version of the Sale System (POI System) product software during the session.|
|CertificationCode|string|true|none|Certification code of the software which manages the Sale to POI protocol. Sent in the Login Request (Response) to get the certification code of the Sale System (POI System) product software. This code can be a software checksum or any number associated with the software.|

<h2 id="tocS_POISystemData">POISystemData</h2>
<!-- backwards compatibility -->
<a id="schemapoisystemdata"></a>
<a id="schema_POISystemData"></a>
<a id="tocSpoisystemdata"></a>
<a id="tocspoisystemdata"></a>

```json
{
  "DateTime": "1970-01-01T00:00:00Z",
  "POISoftware": {
    "ManufacturerID": "string",
    "ApplicationName": "string",
    "SoftwareVersion": "string",
    "CertificationCode": "string"
  },
  "POIStatus": {
    "GlobalStatus": "OK",
    "SecurityOKFlag": true,
    "PEDOKFlag": true,
    "CardReaderOKFlag": true,
    "PrinterStatus": "OK",
    "CommunicationOKFlag": true,
    "FraudPreventionFlag": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DateTime|string(date-time)|true|none|Date and Time. In the response, the POI System gives its date and time to the Sale System.|
|POISoftware|[POISoftware](#schemapoisoftware)|true|none|Information related to the software of the POI System which manages the Sale to POI protocol. In a session allows identifying the product features of a POI System.|
|POIStatus|[POIStatus](#schemapoistatus)|false|none|Indicate the availability of the POI Terminal components. The data element is absent if the component is not part of the POI Terminal.<br>State of a POI Terminal.|

<h2 id="tocS_OutputText">OutputText</h2>
<!-- backwards compatibility -->
<a id="schemaoutputtext"></a>
<a id="schema_OutputText"></a>
<a id="tocSoutputtext"></a>
<a id="tocsoutputtext"></a>

```json
{
  "Text": "string",
  "CharacterSet": 0,
  "StartRow": 1,
  "StartColumn": 1,
  "CharacterWidth": "SingleWidth",
  "CharacterHeight": "SingleHeight",
  "CharacterStyle": "Normal",
  "Alignment": "Left",
  "EndOfLineFlag": true
}
```

Content of text message to display or print.
It conveys information related to the content of the text message and its format. All the data elements related to the format of the text to display or print are parameters valid for the whole text content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|string|true|none|Content of text message to display, print or play.|
|CharacterSet|integer|false|none|Character height of the text string to display or print. Absence of this data element means the characters have normal height.|
|StartRow|integer|false|none|Row where the text string has to be displayed or printed.|
|StartColumn|integer|false|none|Column where the text string has to be displayed or printed.|
|CharacterWidth|[CharacterWidth](#schemacharacterwidth)|false|none|Character width of the text string to display or print. Absence of this data element means the characters have normal width.<br>Possible values:<br>* **DoubleWidth**<br>* **SingleWidth**|
|CharacterHeight|[CharacterHeight](#schemacharacterheight)|false|none|Character height of the text string to display or print. Absence of this data element means the characters have normal height.<br>Possible values:<br>* **DoubleHeight**<br>* **HalfHeight**<br>* **SingleHeight**|
|CharacterStyle|[CharacterStyle](#schemacharacterstyle)|false|none|Typographic style of the sequence of characters to display or print. Absence of this data element means the characters have normal style.<br>Possible values:<br>* **Bold**<br>* **Italic**<br>* **Normal**<br>* **Underline**|
|Alignment|[Alignment](#schemaalignment)|false|none|Alignment of the text string on the display line or print line. Absence of this data element means the characters have normal alignment.<br>Possible values:<br>* **Centred**<br>* **Justified**<br>* **Left**<br>* **Right**|
|EndOfLineFlag|boolean|false|none|Indicates if the text is at the end of a line. Allows the display or the print of a new line and a carry-over return characters after the formatted text.|

#### Enumerated Values

|Property|Value|
|---|---|
|CharacterWidth|SingleWidth|
|CharacterWidth|DoubleWidth|
|CharacterHeight|SingleHeight|
|CharacterHeight|DoubleHeight|
|CharacterHeight|HalfHeight|
|CharacterStyle|Normal|
|CharacterStyle|Bold|
|CharacterStyle|Italic|
|CharacterStyle|Underline|
|Alignment|Left|
|Alignment|Right|
|Alignment|Centred|
|Alignment|Justified|

<h2 id="tocS_PredefinedContent">PredefinedContent</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedcontent"></a>
<a id="schema_PredefinedContent"></a>
<a id="tocSpredefinedcontent"></a>
<a id="tocspredefinedcontent"></a>

```json
{
  "ReferenceID": "string",
  "Language": "string"
}
```

Reference of a predefined message to display or print.
It conveys information related to the predefined message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceID|string|true|none|Identification of a predefined message to display or print.|
|Language|string|false|none|Identification of a language.|

<h2 id="tocS_OutputBarcode">OutputBarcode</h2>
<!-- backwards compatibility -->
<a id="schemaoutputbarcode"></a>
<a id="schema_OutputBarcode"></a>
<a id="tocSoutputbarcode"></a>
<a id="tocsoutputbarcode"></a>

```json
{
  "BarcodeValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BarcodeValue|string|true|none|Value with a Barcode coding. The barcode value to display or print.|

<h2 id="tocS_OutputContent">OutputContent</h2>
<!-- backwards compatibility -->
<a id="schemaoutputcontent"></a>
<a id="schema_OutputContent"></a>
<a id="tocSoutputcontent"></a>
<a id="tocsoutputcontent"></a>

```json
{
  "OutputFormat": "MessageRef",
  "PredefinedContent": {
    "ReferenceID": "string",
    "Language": "string"
  },
  "OutputText": [
    {
      "Text": "string",
      "CharacterSet": 0,
      "StartRow": 1,
      "StartColumn": 1,
      "CharacterWidth": "SingleWidth",
      "CharacterHeight": "SingleHeight",
      "CharacterStyle": "Normal",
      "Alignment": "Left",
      "EndOfLineFlag": true
    }
  ],
  "OutputXHTML": "string",
  "OutputBarcode": {
    "BarcodeValue": "string"
  }
}
```

Content to display or print.
This is a sequence of elements if they have different formats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputFormat|[OutputFormat](#schemaoutputformat)|true|none|Format of the content to display or print.<br>Possible values:<br>* **BarCode**<br>* **MessageRef**<br>* **Text**<br>* **XHTML**|
|PredefinedContent|[PredefinedContent](#schemapredefinedcontent)|false|none|Reference of a predefined message to display or print.<br>Mandatory, if `OutputFormat` is MessageRef, not allowed otherwise.|
|OutputText|[[OutputText](#schemaoutputtext)]|false|none|Content of text message to display or print.<br>Mandatory, if `OutputFormat` is Text, not allowed otherwise. One instance of `OutputText` per shared format.|
|OutputXHTML|string(byte)|false|none|XHTML document body containing the message to display or print.<br>Mandatory if `OutputFormat` is XHTML, not allowed otherwise.|
|OutputBarcode|[OutputBarcode](#schemaoutputbarcode)|false|none|Barcode content to display or print.<br>Mandatory if `OutputFormat` is Barcode, not allowed otherwise.|

#### Enumerated Values

|Property|Value|
|---|---|
|OutputFormat|MessageRef|
|OutputFormat|Text|
|OutputFormat|XHTML|
|OutputFormat|BarCode|

<h2 id="tocS_MenuEntry">MenuEntry</h2>
<!-- backwards compatibility -->
<a id="schemamenuentry"></a>
<a id="schema_MenuEntry"></a>
<a id="tocSmenuentry"></a>
<a id="tocsmenuentry"></a>

```json
{
  "MenuEntryTag": "Selectable",
  "DefaultSelectedFlag": false,
  "OutputFormat": "MessageRef",
  "PredefinedContent": {
    "ReferenceID": "string",
    "Language": "string"
  },
  "OutputText": [
    {
      "Text": "string",
      "CharacterSet": 0,
      "StartRow": 1,
      "StartColumn": 1,
      "CharacterWidth": "SingleWidth",
      "CharacterHeight": "SingleHeight",
      "CharacterStyle": "Normal",
      "Alignment": "Left",
      "EndOfLineFlag": true
    }
  ],
  "OutputXHTML": "string"
}
```

An entry of the menu to present to the Cashier.
It conveys message text and parameters of the menu entry. This output data could be only provided for an input command, in order to choose an entry of the menu.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MenuEntryTag|[MenuEntryTag](#schemamenuentrytag)|false|none|Characteristics related to the selection of a menu entry.<br>Possible values:<br>* **NonSelectable**<br>* **NonSelectableSubMenu**<br>* **Selectable**<br>* **SubMenu**|
|DefaultSelectedFlag|boolean|false|none|Selection of a menu entry to be displayed. In Input request message, it allows selection of one or several menu entries before any user action.|
|OutputFormat|[OutputFormat](#schemaoutputformat)|true|none|Possible values:<br>* **BarCode**<br>* **MessageRef**<br>* **Text**<br>* **XHTML**|
|PredefinedContent|[PredefinedContent](#schemapredefinedcontent)|false|none|Reference of a predefined message to display or print.<br>It conveys information related to the predefined message.|
|OutputText|[[OutputText](#schemaoutputtext)]|false|none|Content of text message to display or print. It conveys Information related to the content of the text message and its format. All the data elements related to the format of the text to display or print are parameters valid for the whole Text content.|
|OutputXHTML|string(byte)|false|none|XHTML document body containing the message to display or print.|

#### Enumerated Values

|Property|Value|
|---|---|
|MenuEntryTag|Selectable|
|MenuEntryTag|NonSelectable|
|MenuEntryTag|SubMenu|
|MenuEntryTag|NonSelectableSubMenu|
|OutputFormat|MessageRef|
|OutputFormat|Text|
|OutputFormat|XHTML|
|OutputFormat|BarCode|

<h2 id="tocS_DisplayOutput">DisplayOutput</h2>
<!-- backwards compatibility -->
<a id="schemadisplayoutput"></a>
<a id="schema_DisplayOutput"></a>
<a id="tocSdisplayoutput"></a>
<a id="tocsdisplayoutput"></a>

```json
{
  "ResponseRequiredFlag": true,
  "MinimumDisplayTime": 0,
  "Device": "CashierDisplay",
  "InfoQualify": "Status",
  "OutputContent": {
    "OutputFormat": "MessageRef",
    "PredefinedContent": {
      "ReferenceID": "string",
      "Language": "string"
    },
    "OutputText": [
      {
        "Text": "string",
        "CharacterSet": 0,
        "StartRow": 1,
        "StartColumn": 1,
        "CharacterWidth": "SingleWidth",
        "CharacterHeight": "SingleHeight",
        "CharacterStyle": "Normal",
        "Alignment": "Left",
        "EndOfLineFlag": true
      }
    ],
    "OutputXHTML": "string",
    "OutputBarcode": {
      "BarcodeValue": "string"
    }
  },
  "MenuEntry": [
    {
      "MenuEntryTag": "Selectable",
      "DefaultSelectedFlag": false,
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string"
    }
  ],
  "OutputSignature": "string"
}
```

Information to display and how to process it.
Contains a complete display operation for a Display or an Input Device type. For the Input Devices, Diagnosis and `EnableService`, `ResponseRequiredFlag`, and `MinimumDisplayTime` shall be absent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseRequiredFlag|boolean|false|none|Indicates if the message response is required.|
|MinimumDisplayTime|integer|false|none|Number of seconds the message has to be displayed.|
|Device|[Device](#schemadevice)|true|none|Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information to output (display, print, or store), or input (keyboard) for the Cashier or the Customer.<br>Possible values:<br>* **CashierDisplay**<br>* **CashierInput**<br>* **CustomerDisplay**<br>* **CustomerInput**|
|InfoQualify|[InfoQualify](#schemainfoqualify)|true|none|Qualification of the information to sent to an output logical device, to display or print to the Cashier or the Customer. Allows the manager of the device, Sale or POI Terminal, to send the information to a particular physical device or to present the information accordingly.<br>Possible values:<br>* **CustomerAssistance**<br>* **Display**<br>* **Document**<br>* **Error**<br>* **Input**<br>* **POIReplication**<br>* **Receipt**<br>* **Sound**<br>* **Status**<br>* **Voucher**|
|OutputContent|[OutputContent](#schemaoutputcontent)|true|none|Content to display or print.|
|MenuEntry|[[MenuEntry](#schemamenuentry)]|false|none|An entry of the menu to present to the Cashier. It conveys the message text and parameters of the menu entry. This output data could be only provided for an input command, in order to choose an entryof the menu.|
|OutputSignature|string(byte)|false|none|Vendor-specific signature of the text message to display or print.<br>If protection has to be provided to the vendor on the text to display or print.|

#### Enumerated Values

|Property|Value|
|---|---|
|Device|CashierDisplay|
|Device|CustomerDisplay|
|Device|CashierInput|
|Device|CustomerInput|
|InfoQualify|Status|
|InfoQualify|Error|
|InfoQualify|Display|
|InfoQualify|Sound|
|InfoQualify|Input|
|InfoQualify|POIReplication|
|InfoQualify|CustomerAssistance|
|InfoQualify|Receipt|
|InfoQualify|Document|
|InfoQualify|Voucher|

<h2 id="tocS_LoyaltyAccountID">LoyaltyAccountID</h2>
<!-- backwards compatibility -->
<a id="schemaloyaltyaccountid"></a>
<a id="schema_LoyaltyAccountID"></a>
<a id="tocSloyaltyaccountid"></a>
<a id="tocsloyaltyaccountid"></a>

```json
{
  "EntryMode": [
    "RFID"
  ],
  "IdentificationType": "PAN",
  "IdentificationSupport": "NoCard",
  "LoyaltyID": "string"
}
```

Identification of a Loyalty account.
In the Payment Request message, it allows to identify the loyalty account by the Sale Terminal instead of the POI Terminal (e.g. because the account identification is a bar-code read by the Cashier on a scanner device).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntryMode|[EntryMode](#schemaentrymode)|true|none|Entry mode of the payment instrument information. In the Payment, Loyalty or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. In the Payment, Loyalty or StoredValue Response messages, it informs the Sale System the entry mode of the payment instrument.<br>Possible values:<br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **Mobile**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped**|
|IdentificationType|[IdentificationType](#schemaidentificationtype)|true|none|Type of account identification. In a request message, it informs the POI System the type of the account or card identification, when provided by the Sale Terminal. (e.g. because the card information is a barcode read by the Cashier on a scanner device). In a response message, it informs the Sale System the type of the account or card identification.<br>Possible values:<br>* **AccountNumber**<br>* **BarCode**<br>* **ISOTrack2**<br>* **PAN**<br>* **PhoneNumber**|
|IdentificationSupport|[IdentificationSupport](#schemaidentificationsupport)|false|none|Support of the loyalty account identification. Allows knowing where and how you have found the loyalty account identification.<br>Possible values:<br>* **HybridCard**<br>* **LinkedCard**<br>* **LoyaltyCard**<br>* **NoCard**|
|LoyaltyID|string|true|none|Loyalty account identification conforming to the IdentificationType.|

#### Enumerated Values

|Property|Value|
|---|---|
|EntryMode|RFID|
|EntryMode|Keyed|
|EntryMode|Manual|
|EntryMode|File|
|EntryMode|Scanned|
|EntryMode|MagStripe|
|EntryMode|ICC|
|EntryMode|SynchronousICC|
|EntryMode|Tapped|
|EntryMode|Contactless|
|EntryMode|Mobile|
|IdentificationType|PAN|
|IdentificationType|ISOTrack2|
|IdentificationType|BarCode|
|IdentificationType|AccountNumber|
|IdentificationType|PhoneNumber|
|IdentificationSupport|NoCard|
|IdentificationSupport|LoyaltyCard|
|IdentificationSupport|HybridCard|
|IdentificationSupport|LinkedCard|

<h2 id="tocS_LoyaltyData">LoyaltyData</h2>
<!-- backwards compatibility -->
<a id="schemaloyaltydata"></a>
<a id="schema_LoyaltyData"></a>
<a id="tocSloyaltydata"></a>
<a id="tocsloyaltydata"></a>

```json
{
  "CardAcquisitionReference": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  },
  "LoyaltyAccountID": {
    "EntryMode": [
      "RFID"
    ],
    "IdentificationType": "PAN",
    "IdentificationSupport": "NoCard",
    "LoyaltyID": "string"
  }
}
```

In the Payment, Loyalty or Balance Inquiry Request message, it allows the Sale Terminal to send the identification of the loyalty account or an awarded amount or an amount to redeem to the loyalty account.
Data related to a Loyalty program or account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CardAcquisitionReference|[TransactionIDType](#schematransactionidtype)|false|none|Reference to the last CardAcquisition, to use the same card.<br>If the loyalty account ID comes from a previous CardAcquisition.|
|LoyaltyAccountID|[LoyaltyAccountID](#schemaloyaltyaccountid)|false|none|Identification of a Loyalty account.<br>If loyalty identification of the loyalty account is realised by the Sale System.|

<h2 id="tocS_CheckData">CheckData</h2>
<!-- backwards compatibility -->
<a id="schemacheckdata"></a>
<a id="schema_CheckData"></a>
<a id="tocScheckdata"></a>
<a id="tocscheckdata"></a>

```json
{
  "BankID": "string",
  "AccountNumber": "string",
  "CheckNumber": "string",
  "TrackData": {
    "TrackNumb": 2,
    "TrackFormat": "ISO",
    "TrackValue": "string"
  },
  "CheckCardNumber": "string",
  "TypeCode": "Personal",
  "Country": "string"
}
```

Information related to the paper check used for the transaction.
Allows the check information to be provided by the Sale System before requesting the payment, or stored by the Sale System after processing of the payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BankID|string|false|none|Identification of the bank.<br>Mandatory if TrackData absent.|
|AccountNumber|string|false|none|Identification of the customer account.<br>Mandatory if TrackData absent.|
|CheckNumber|string|false|none|Identification of the bank check.<br>Mandatory if TrackData absent.|
|TrackData|[TrackData](#schematrackdata)|false|none|Magnetic track or magnetic ink characters line.<br>Mandatory if CheckNumber absent.|
|CheckCardNumber|string|false|none|Check guarantee card number.<br>If provided by the customer.|
|TypeCode|[TypeCode](#schematypecode)|false|none|Type of bank check.<br>Possible values:<br>* **Company**<br>* **Personal**|
|Country|string|false|none|Country of the bank check.<br>Absent if country of the Sale system.|

#### Enumerated Values

|Property|Value|
|---|---|
|TypeCode|Personal|
|TypeCode|Company|

<h2 id="tocS_SensitiveMobileData">SensitiveMobileData</h2>
<!-- backwards compatibility -->
<a id="schemasensitivemobiledata"></a>
<a id="schema_SensitiveMobileData"></a>
<a id="tocSsensitivemobiledata"></a>
<a id="tocssensitivemobiledata"></a>

```json
{
  "MSISDN": 0,
  "IMSI": 0,
  "IMEI": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MSISDN|integer|true|none|Mobile Subscriber Integrated Service Digital Network (i.e. mobile phone number of the SIM card). Country, National Destination Code, and Subscriber Number.|
|IMSI|integer|false|none|International Mobile Subscriber Identity. Unique number associated with the mobile phone user, containing the Mobile Country Code (MCC), the Mobile Network Code (MNC), and the Mobile Identification Number (MSIN)|
|IMEI|integer|false|none|International Mobile Equipment Identity. Unique number associated with the mobile phone device.|

<h2 id="tocS_UTMCoordinates">UTMCoordinates</h2>
<!-- backwards compatibility -->
<a id="schemautmcoordinates"></a>
<a id="schema_UTMCoordinates"></a>
<a id="tocSutmcoordinates"></a>
<a id="tocsutmcoordinates"></a>

```json
{
  "UTMZone": "string",
  "UTMEastward": "string",
  "UTMNorthward": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UTMZone|string|true|none|UTM grid zone combination of the longitude zone (1 to 60) and the latitude band (C to X, excluding I and O).|
|UTMEastward|string|true|none|X-coordinate of the Universal Transverse Mercator coordinate system.|
|UTMNorthward|string|true|none|Y-coordinate of the Universal Transverse Mercator coordinate system.|

<h2 id="tocS_GeographicCoordinates">GeographicCoordinates</h2>
<!-- backwards compatibility -->
<a id="schemageographiccoordinates"></a>
<a id="schema_GeographicCoordinates"></a>
<a id="tocSgeographiccoordinates"></a>
<a id="tocsgeographiccoordinates"></a>

```json
{
  "Latitude": "string",
  "Longitude": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Latitude|string|true|none|Angular distance of a location on the earth south or north of the equator.|
|Longitude|string|true|none|Angular measurement of the distance of a location on the earth east or west of the Greenwich observatory.|

<h2 id="tocS_Geolocation">Geolocation</h2>
<!-- backwards compatibility -->
<a id="schemageolocation"></a>
<a id="schema_Geolocation"></a>
<a id="tocSgeolocation"></a>
<a id="tocsgeolocation"></a>

```json
{
  "GeographicCoordinates": {
    "Latitude": "string",
    "Longitude": "string"
  },
  "UTMCoordinates": {
    "UTMZone": "string",
    "UTMEastward": "string",
    "UTMNorthward": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeographicCoordinates|[GeographicCoordinates](#schemageographiccoordinates)|false|none|none|
|UTMCoordinates|[UTMCoordinates](#schemautmcoordinates)|false|none|none|

<h2 id="tocS_MobileData">MobileData</h2>
<!-- backwards compatibility -->
<a id="schemamobiledata"></a>
<a id="schema_MobileData"></a>
<a id="tocSmobiledata"></a>
<a id="tocsmobiledata"></a>

```json
{
  "MobileCountryCode": 3,
  "MobileNetworkCode": 2,
  "MaskedMSISDN": 0,
  "Geolocation": {
    "GeographicCoordinates": {
      "Latitude": "string",
      "Longitude": "string"
    },
    "UTMCoordinates": {
      "UTMZone": "string",
      "UTMEastward": "string",
      "UTMNorthward": "string"
    }
  },
  "ProtectedMobileData": "string",
  "SensitiveMobileData": {
    "MSISDN": 0,
    "IMSI": 0,
    "IMEI": 0
  }
}
```

Mobile phone is used as a payment instrument for the transaction.
Information related to the mobile for the payment transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MobileCountryCode|integer|false|none|Identifies the country of a mobile phone operator.<br>If data available.|
|MobileNetworkCode|integer|false|none|Identifies the mobile phone operator inside a country.<br>If data available.|
|MaskedMSISDN|integer|false|none|Masked Mobile Subscriber Integrated Service Digital Network.<br>If data available.|
|Geolocation|[Geolocation](#schemageolocation)|false|none|Geographic location specified by geographic or UTM coordinates.<br>If data available.|
|ProtectedMobileData|string|false|none|Sensitive information related to the mobile phone, protected by CMS.<br>SensitiveMobileData.|
|SensitiveMobileData|[SensitiveMobileData](#schemasensitivemobiledata)|false|none|Sensitive information related to the mobile phone.<br>If unprotected mobile data.|

<h2 id="tocS_Instalment">Instalment</h2>
<!-- backwards compatibility -->
<a id="schemainstalment"></a>
<a id="schema_Instalment"></a>
<a id="tocSinstalment"></a>
<a id="tocsinstalment"></a>

```json
{
  "InstalmentType": "DeferredInstalments",
  "SequenceNumber": 0,
  "PlanID": "string",
  "Period": 0,
  "PeriodUnit": "Daily",
  "FirstPaymentDate": "1970-01-01",
  "TotalNbOfPayments": 0,
  "CumulativeAmount": 0,
  "FirstAmount": 0,
  "Charges": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstalmentType|[InstalmentType](#schemainstalmenttype)|false|none|Type of instalment transaction. For requesting an instalment payment transaction.<br>Possible values:<br>* **DeferredInstalments**<br>* **EqualInstalments**<br>* **InequalInstalments**|
|SequenceNumber|integer|false|none|Sequence number of the instalment. For an instalment payment transaction, number of the payment, from 1 to TotalNbOfPayments.|
|PlanID|string|false|none|Identification of an instalment plan.|
|Period|integer|false|none|Period of time with defined unit of time. A period between 2 payment instalments.|
|PeriodUnit|[PeriodUnit](#schemaperiodunit)|false|none|Type of instalment transaction.<br>Possible values:<br>* **Annual**<br>* **Daily**<br>* **Monthly**<br>* **Weekly**|
|FirstPaymentDate|string(date)|false|none|First date of a payment. For instalment, the date of the first payments, if not immediate.|
|TotalNbOfPayments|integer|false|none|Total number of payments. For instalment, the number of payments, including the first one.|
|CumulativeAmount|number|false|none|Sum of a collection of amounts. Total amount of the payment instalments.|
|FirstAmount|number|false|none|First amount of the payment instalments.|
|Charges|number|false|none|Charges related to a transaction. Charge related to the payment instalments.|

#### Enumerated Values

|Property|Value|
|---|---|
|InstalmentType|DeferredInstalments|
|InstalmentType|EqualInstalments|
|InstalmentType|InequalInstalments|
|PeriodUnit|Daily|
|PeriodUnit|Weekly|
|PeriodUnit|Monthly|
|PeriodUnit|Annual|

<h2 id="tocS_StoredValueAccountID">StoredValueAccountID</h2>
<!-- backwards compatibility -->
<a id="schemastoredvalueaccountid"></a>
<a id="schema_StoredValueAccountID"></a>
<a id="tocSstoredvalueaccountid"></a>
<a id="tocsstoredvalueaccountid"></a>

```json
{
  "StoredValueAccountType": "GiftCard",
  "StoredValueProvider": "string",
  "OwnerName": "string",
  "ExpiryDate": 4,
  "EntryMode": [
    "RFID"
  ],
  "IdentificationType": "PAN",
  "StoredValueID": "string"
}
```

Identification of the stored value account or the stored value card and the associated product sold by the Sale System for stored value requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StoredValueAccountType|[StoredValueAccountType](#schemastoredvalueaccounttype)|true|none|Type of stored value account. Allows the distinction of the stored value instrument to access the stored value account.<br>Possible values:<br>* **GiftCard**<br>* **Other**<br>* **PhoneCard**|
|StoredValueProvider|string|false|none|Identification of the provider of the stored value account load/reload. When the ProductCode is not sufficient to identify the provider host which delivers the load or reload of the stored value account (for example if it contains the identification of the application.)|
|OwnerName|string|false|none|Name of the owner of a stored value account.|
|ExpiryDate|integer|false|none|Date after which the card cannot be used. If EMV expiry date is present, it overrides Track2 information. Format is MMYY.|
|EntryMode|[EntryMode](#schemaentrymode)|true|none|Entry mode of the payment instrument information. In the Payment, Loyalty, or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. (e.g. because the payment instrument information are a barcode read by the Cashier on a scanner device).<br>Possible values:<br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **Mobile**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped**|
|IdentificationType|[IdentificationType](#schemaidentificationtype)|true|none|Type of account identification. In a request message, it informs the POI System the type of the account or card identification, when provided by the Sale Terminal. (e.g. because the card information is a barcode read by the Cashier on a scanner device). In a response message, it informs the Sale System the type of the account or card identification.<br>Possible values:<br>* **AccountNumber**<br>* **BarCode**<br>* **ISOTrack2**<br>* **PAN**<br>* **PhoneNumber**|
|StoredValueID|string|true|none|Stored value account identification. The identification of the stored value account conforming to the IdentificationType.|

#### Enumerated Values

|Property|Value|
|---|---|
|StoredValueAccountType|GiftCard|
|StoredValueAccountType|PhoneCard|
|StoredValueAccountType|Other|
|EntryMode|RFID|
|EntryMode|Keyed|
|EntryMode|Manual|
|EntryMode|File|
|EntryMode|Scanned|
|EntryMode|MagStripe|
|EntryMode|ICC|
|EntryMode|SynchronousICC|
|EntryMode|Tapped|
|EntryMode|Contactless|
|EntryMode|Mobile|
|IdentificationType|PAN|
|IdentificationType|ISOTrack2|
|IdentificationType|BarCode|
|IdentificationType|AccountNumber|
|IdentificationType|PhoneNumber|

<h2 id="tocS_PaymentInstrumentData">PaymentInstrumentData</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentdata"></a>
<a id="schema_PaymentInstrumentData"></a>
<a id="tocSpaymentinstrumentdata"></a>
<a id="tocspaymentinstrumentdata"></a>

```json
{
  "PaymentInstrumentType": "Card",
  "ProtectedCardData": "string",
  "CardData": {
    "PaymentBrand": "string",
    "MaskedPan": "string",
    "PaymentAccountRef": "string",
    "EntryMode": [
      "RFID"
    ],
    "CardCountryCode": 3,
    "ProtectedCardData": "string",
    "SensitiveCardData": {
      "PAN": 8,
      "CardSeqNumb": 2,
      "ExpiryDate": 4,
      "TrackData": [
        {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        }
      ]
    },
    "PaymentToken": {
      "TokenRequestedType": "Transaction",
      "TokenValue": "string",
      "ExpiryDateTime": "1970-01-01T00:00:00Z"
    }
  },
  "CheckData": {
    "BankID": "string",
    "AccountNumber": "string",
    "CheckNumber": "string",
    "TrackData": {
      "TrackNumb": 2,
      "TrackFormat": "ISO",
      "TrackValue": "string"
    },
    "CheckCardNumber": "string",
    "TypeCode": "Personal",
    "Country": "string"
  },
  "MobileData": {
    "MobileCountryCode": 3,
    "MobileNetworkCode": 2,
    "MaskedMSISDN": 0,
    "Geolocation": {
      "GeographicCoordinates": {
        "Latitude": "string",
        "Longitude": "string"
      },
      "UTMCoordinates": {
        "UTMZone": "string",
        "UTMEastward": "string",
        "UTMNorthward": "string"
      }
    },
    "ProtectedMobileData": "string",
    "SensitiveMobileData": {
      "MSISDN": 0,
      "IMSI": 0,
      "IMEI": 0
    }
  },
  "StoredValueAccountID": {
    "StoredValueAccountType": "GiftCard",
    "StoredValueProvider": "string",
    "OwnerName": "string",
    "ExpiryDate": 4,
    "EntryMode": [
      "RFID"
    ],
    "IdentificationType": "PAN",
    "StoredValueID": "string"
  }
}
```

Data related to the instrument of payment for the transaction.
Sent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaymentInstrumentType|[PaymentInstrumentType](#schemapaymentinstrumenttype)|true|none|Type of payment instrument.<br>Possible values:<br>* **Card**<br>* **Cash**<br>* **Check**<br>* **Mobile**<br>* **StoredValue**|
|ProtectedCardData|string|false|none|Sensitive information related to the payment card, protected by CMS.<br>SensitiveCardData protected by CMS EnvelopedData.|
|CardData|[CardData](#schemacarddata)|false|none|Information related to the payment card used for the transaction.<br>If PaymentInstrumentType is Card.|
|CheckData|[CheckData](#schemacheckdata)|false|none|Information related to the paper check used for the transaction.<br>If PaymentInstrumentType is Check.|
|MobileData|[MobileData](#schemamobiledata)|false|none|Information related to the mobile for the payment transaction.<br>If PaymentInstrumentType is Mobile.|
|StoredValueAccountID|[StoredValueAccountID](#schemastoredvalueaccountid)|false|none|Identification of the stored value account or the stored value card and the associated product sold by the Sale System for stored value requests.|

#### Enumerated Values

|Property|Value|
|---|---|
|PaymentInstrumentType|Card|
|PaymentInstrumentType|Check|
|PaymentInstrumentType|Mobile|
|PaymentInstrumentType|StoredValue|
|PaymentInstrumentType|Cash|

<h2 id="tocS_OriginalPOITransaction">OriginalPOITransaction</h2>
<!-- backwards compatibility -->
<a id="schemaoriginalpoitransaction"></a>
<a id="schema_OriginalPOITransaction"></a>
<a id="tocSoriginalpoitransaction"></a>
<a id="tocsoriginalpoitransaction"></a>

```json
{
  "SaleID": "string",
  "POIID": "string",
  "POITransactionID": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  },
  "ReuseCardDataFlag": true,
  "ApprovalCode": "string",
  "AcquirerID": 0,
  "AmountValue": 0,
  "HostTransactionID": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  }
}
```

Identification of a previous POI transaction.
In the Payment Request message, it allows using the card of a previous CardAcquisition or Payment request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SaleID|string|false|none|Identification of a Sale System for the NEXO SaletoPOI protocol.|
|POIID|string|false|none|Identification of a payment terminal for the NEXO SaletoPOI protocol.<br>If original transaction is coming from another POI.|
|POITransactionID|[TransactionIDType](#schematransactionidtype)|false|none|Unique identification of a POI transaction for a POI.<br>Absent if SaleReferenceID is sufficient to identify the transaction.|
|ReuseCardDataFlag|boolean|false|none|Indicates if the card data has to be retrieved from a previous transaction.|
|ApprovalCode|string|false|none|Code assigned to a transaction approval by the Acquirer.<br>If referral.|
|AcquirerID|integer|false|none|Identification of the Acquirer.<br>Restrict to the Acquirer if present.|
|AmountValue|number|false|none|Value of an amount.|
|HostTransactionID|[TransactionIDType](#schematransactionidtype)|false|none|Identification of the transaction by the host in charge of the stored value transaction.<br>If POITransactionID not present.|

<h2 id="tocS_TransactionConditions">TransactionConditions</h2>
<!-- backwards compatibility -->
<a id="schematransactionconditions"></a>
<a id="schema_TransactionConditions"></a>
<a id="tocStransactionconditions"></a>
<a id="tocstransactionconditions"></a>

```json
{
  "AllowedPaymentBrand": [
    "string"
  ],
  "AcquirerID": [
    0
  ],
  "DebitPreferredFlag": true,
  "AllowedLoyaltyBrand": [
    "string"
  ],
  "LoyaltyHandling": "Forbidden",
  "CustomerLanguage": "string",
  "ForceOnlineFlag": false,
  "ForceEntryMode": [
    "RFID"
  ],
  "MerchantCategoryCode": "string"
}
```

Conditions on which the transaction must be processed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowedPaymentBrand|[string]|false|none|Payment brands accepted for this transaction.<br>Card payment brands allowed by the Sale System for the payment transaction.<br>Restrict brand if data sent.|
|AcquirerID|[integer]|false|none|Identification of the Acquirer.<br>Restrict to these Acquirer if present.|
|DebitPreferredFlag|boolean|false|none|The preferred type of payment is a debit transaction rather than a credit transaction.|
|AllowedLoyaltyBrand|[string]|false|none|Loyalty brands or programs allowed by the Sale System for the loyalty transaction.<br>Restrict brand if data sent.|
|LoyaltyHandling|[LoyaltyHandling](#schemaloyaltyhandling)|false|none|Type of Loyalty processing requested by the Sale System.<br>Possible values:<br>* **Allowed**<br>* **Forbidden**<br>* **Processed**<br>* **Proposed**<br>* **Required**|
|CustomerLanguage|string|false|none|The language used on the terminal screen or in text printed by the terminal.<br>Typical use case is setting the language on unattended terminals. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.|
|ForceOnlineFlag|boolean|false|none|Indicates if the Cashier requires POI forces online access to the Acquirer.<br>Go online if data sent.|
|ForceEntryMode|[ForceEntryMode](#schemaforceentrymode)|false|none|Payment instrument entry mode requested by the Sale System.<br>Restrict entry mode if sent.<br>Possible values:<br>* **CheckReader**<br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped**|
|MerchantCategoryCode|string|false|none|The code which identifies the category of the transaction (MCC).<br>The payment implies a specific MCC.|

#### Enumerated Values

|Property|Value|
|---|---|
|LoyaltyHandling|Forbidden|
|LoyaltyHandling|Processed|
|LoyaltyHandling|Allowed|
|LoyaltyHandling|Proposed|
|LoyaltyHandling|Required|
|ForceEntryMode|RFID|
|ForceEntryMode|Keyed|
|ForceEntryMode|Manual|
|ForceEntryMode|File|
|ForceEntryMode|Scanned|
|ForceEntryMode|MagStripe|
|ForceEntryMode|ICC|
|ForceEntryMode|SynchronousICC|
|ForceEntryMode|Tapped|
|ForceEntryMode|Contactless|
|ForceEntryMode|CheckReader|

<h2 id="tocS_PaymentData">PaymentData</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdata"></a>
<a id="schema_PaymentData"></a>
<a id="tocSpaymentdata"></a>
<a id="tocspaymentdata"></a>

```json
{
  "PaymentType": "Normal",
  "SplitPaymentFlag": false,
  "RequestedValidityDate": "1970-01-01",
  "CardAcquisitionReference": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  },
  "Instalment": {
    "InstalmentType": "DeferredInstalments",
    "SequenceNumber": 0,
    "PlanID": "string",
    "Period": 0,
    "PeriodUnit": "Daily",
    "FirstPaymentDate": "1970-01-01",
    "TotalNbOfPayments": 0,
    "CumulativeAmount": 0,
    "FirstAmount": 0,
    "Charges": 0
  },
  "PaymentInstrumentData": {
    "PaymentInstrumentType": "Card",
    "ProtectedCardData": "string",
    "CardData": {
      "PaymentBrand": "string",
      "MaskedPan": "string",
      "PaymentAccountRef": "string",
      "EntryMode": [
        "RFID"
      ],
      "CardCountryCode": 3,
      "ProtectedCardData": "string",
      "SensitiveCardData": {
        "PAN": 8,
        "CardSeqNumb": 2,
        "ExpiryDate": 4,
        "TrackData": [
          {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          }
        ]
      },
      "PaymentToken": {
        "TokenRequestedType": "Transaction",
        "TokenValue": "string",
        "ExpiryDateTime": "1970-01-01T00:00:00Z"
      }
    },
    "CheckData": {
      "BankID": "string",
      "AccountNumber": "string",
      "CheckNumber": "string",
      "TrackData": {
        "TrackNumb": 2,
        "TrackFormat": "ISO",
        "TrackValue": "string"
      },
      "CheckCardNumber": "string",
      "TypeCode": "Personal",
      "Country": "string"
    },
    "MobileData": {
      "MobileCountryCode": 3,
      "MobileNetworkCode": 2,
      "MaskedMSISDN": 0,
      "Geolocation": {
        "GeographicCoordinates": {
          "Latitude": "string",
          "Longitude": "string"
        },
        "UTMCoordinates": {
          "UTMZone": "string",
          "UTMEastward": "string",
          "UTMNorthward": "string"
        }
      },
      "ProtectedMobileData": "string",
      "SensitiveMobileData": {
        "MSISDN": 0,
        "IMSI": 0,
        "IMEI": 0
      }
    },
    "StoredValueAccountID": {
      "StoredValueAccountType": "GiftCard",
      "StoredValueProvider": "string",
      "OwnerName": "string",
      "ExpiryDate": 4,
      "EntryMode": [
        "RFID"
      ],
      "IdentificationType": "PAN",
      "StoredValueID": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaymentType|[PaymentType](#schemapaymenttype)|false|none|Type of payment transaction. Elements requested by the Sale System that are related to the payment only.<br>Possible values:<br>* **CashAdvance**<br>* **CashDeposit**<br>* **Completion**<br>* **FirstReservation**<br>* **Instalment**<br>* **IssuerInstalment**<br>* **Normal**<br>* **OneTimeReservation**<br>* **PaidOut**<br>* **Recurring**<br>* **Refund**<br>* **UpdateReservation**|
|SplitPaymentFlag|boolean|false|none|Indicates if the payment of the Sale transaction is split. Allows the POI to decline payment means that cannot accept split payment.|
|RequestedValidityDate|string(date)|false|none|Requested validity date for the reservation. Allows a specific period for the reservation according to the need of the Merchant for the first reservation and the reservation updates as well.|
|CardAcquisitionReference|[TransactionIDType](#schematransactionidtype)|false|none|Identification of a transaction for the Sale System or the POI System.|
|Instalment|[Instalment](#schemainstalment)|false|none|Information related an instalment transaction. To request an instalment to the issuer, or to make individual instalments of a payment transaction.|
|PaymentInstrumentData|[PaymentInstrumentData](#schemapaymentinstrumentdata)|false|none|Data related to the instrument of payment for the transaction.<br>Sent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System.|

#### Enumerated Values

|Property|Value|
|---|---|
|PaymentType|Normal|
|PaymentType|Refund|
|PaymentType|OneTimeReservation|
|PaymentType|FirstReservation|
|PaymentType|UpdateReservation|
|PaymentType|Completion|
|PaymentType|CashAdvance|
|PaymentType|CashDeposit|
|PaymentType|Recurring|
|PaymentType|Instalment|
|PaymentType|IssuerInstalment|
|PaymentType|PaidOut|

<h2 id="tocS_AmountsReq">AmountsReq</h2>
<!-- backwards compatibility -->
<a id="schemaamountsreq"></a>
<a id="schema_AmountsReq"></a>
<a id="tocSamountsreq"></a>
<a id="tocsamountsreq"></a>

```json
{
  "Currency": "string",
  "RequestedAmount": 0,
  "CashBackAmount": 0,
  "TipAmount": 0,
  "PaidAmount": 0,
  "MinimumAmountToDeliver": 0,
  "MaximumCashBackAmount": 0,
  "MinimumSplitAmount": 0
}
```

Various amounts related to the payment request from the Sale System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Currency|string|true|none|Currency of a monetary amount.|
|RequestedAmount|number|true|none|Amount requested by the Sale for the payment.|
|CashBackAmount|number|false|none|The cash-back part of the amount requested by the Sale for the payment.|
|TipAmount|number|false|none|Amount paid for a tip. Allow the printing of the tip on the receipt, and to qualify the tip part of the amount.|
|PaidAmount|number|false|none|Amount already paid in case of split payment. Depending on the context, a split payment is either a split amount, or a split basket (required by some payment means as fleet cards). The PaidAmount is present when the split payment is a split<br>     of the amount. Split of the basket involves two Sale Transactions, and does not have to be recognised by<br>     the POI.|
|MinimumAmountToDeliver|number|false|none|Minimum amount the Sale System is allowed to deliver for this payment. For the OneTimeReservation, when the maximum amount is unknown, the Sale System indicates the minimum amount it allows.|
|MaximumCashBackAmount|number|false|none|Maximum amount which could be requested for cash-back to the Sale System. Allows the Cashier<br>   to limit the amount value of cash-back to deliver to the Customer.|
|MinimumSplitAmount|number|false|none|Minimum amount of a split, which could be requested by a Customer.Allows the Merchant to limit the number of split requested by the Customer.|

<h2 id="tocS_PaymentTransaction">PaymentTransaction</h2>
<!-- backwards compatibility -->
<a id="schemapaymenttransaction"></a>
<a id="schema_PaymentTransaction"></a>
<a id="tocSpaymenttransaction"></a>
<a id="tocspaymenttransaction"></a>

```json
{
  "AmountsReq": {
    "Currency": "string",
    "RequestedAmount": 0,
    "CashBackAmount": 0,
    "TipAmount": 0,
    "PaidAmount": 0,
    "MinimumAmountToDeliver": 0,
    "MaximumCashBackAmount": 0,
    "MinimumSplitAmount": 0
  },
  "OriginalPOITransaction": {
    "SaleID": "string",
    "POIID": "string",
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "ReuseCardDataFlag": true,
    "ApprovalCode": "string",
    "AcquirerID": 0,
    "AmountValue": 0,
    "HostTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    }
  },
  "TransactionConditions": {
    "AllowedPaymentBrand": [
      "string"
    ],
    "AcquirerID": [
      0
    ],
    "DebitPreferredFlag": true,
    "AllowedLoyaltyBrand": [
      "string"
    ],
    "LoyaltyHandling": "Forbidden",
    "CustomerLanguage": "string",
    "ForceOnlineFlag": false,
    "ForceEntryMode": [
      "RFID"
    ],
    "MerchantCategoryCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmountsReq|[AmountsReq](#schemaamountsreq)|true|none|Various amounts related to the payment request from the Sale System.|
|OriginalPOITransaction|[OriginalPOITransaction](#schemaoriginalpoitransaction)|false|none|Identification of a previous POI transaction.<br>In the Payment Request message, it allows using the card of a previous CardAcquisition or Payment request.|
|TransactionConditions|[TransactionConditions](#schematransactionconditions)|false|none|Conditions on which the transaction must be processed.|

<h2 id="tocS_ConvertedAmount">ConvertedAmount</h2>
<!-- backwards compatibility -->
<a id="schemaconvertedamount"></a>
<a id="schema_ConvertedAmount"></a>
<a id="tocSconvertedamount"></a>
<a id="tocsconvertedamount"></a>

```json
{
  "AmountValue": 0,
  "Currency": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmountValue|number|true|none|Value of an amount.|
|Currency|string|true|none|Currency of a monetary amount.|

<h2 id="tocS_CurrencyConversion">CurrencyConversion</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyconversion"></a>
<a id="schema_CurrencyConversion"></a>
<a id="tocScurrencyconversion"></a>
<a id="tocscurrencyconversion"></a>

```json
{
  "CustomerApprovedFlag": true,
  "ConvertedAmount": {
    "AmountValue": 0,
    "Currency": "string"
  },
  "Rate": 0,
  "Markup": 0,
  "Commission": 0,
  "Declaration": "string"
}
```

Information related to a currency conversion.
A currency conversion occurred in the payment, and the merchant needs to know information related to this conversion (e.g. to print on the sale receipt).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerApprovedFlag|boolean|false|none|Notify if the customer has approved something. Indicates if the customer has accepted a currency conversion.|
|ConvertedAmount|[ConvertedAmount](#schemaconvertedamount)|true|none|Amount after a currency conversion.|
|Rate|number|false|none|Rate of currency conversion.|
|Markup|number|false|none|Markup of a currency conversion amount as a percentage.|
|Commission|number|false|none|Commission for a currency conversion.|
|Declaration|string|false|none|Declaration to present to the customer or the cashier for validation.<br>If a declaration has to be presented to the customer.|

<h2 id="tocS_Point">Point</h2>
<!-- backwards compatibility -->
<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "X": "string",
  "Y": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|X|string|true|none|The hexadecimal value of the coordinates of a point on the abscissa.|
|Y|string|true|none|The hexadecimal value of the coordinates of a point on the ordinate.|

<h2 id="tocS_LoyaltyAccount">LoyaltyAccount</h2>
<!-- backwards compatibility -->
<a id="schemaloyaltyaccount"></a>
<a id="schema_LoyaltyAccount"></a>
<a id="tocSloyaltyaccount"></a>
<a id="tocsloyaltyaccount"></a>

```json
{
  "LoyaltyAccountID": {
    "EntryMode": [
      "RFID"
    ],
    "IdentificationType": "PAN",
    "IdentificationSupport": "NoCard",
    "LoyaltyID": "string"
  },
  "LoyaltyBrand": "string"
}
```

This data structure conveys the identification of the account and the associated loyalty brand.
Data related to a loyalty account processed in the transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoyaltyAccountID|[LoyaltyAccountID](#schemaloyaltyaccountid)|true|none|Identification of a Loyalty account.|
|LoyaltyBrand|string|false|none|Identification of a Loyalty brand.<br>If a card is analysed.|

<h2 id="tocS_LoyaltyAcquirerData">LoyaltyAcquirerData</h2>
<!-- backwards compatibility -->
<a id="schemaloyaltyacquirerdata"></a>
<a id="schema_LoyaltyAcquirerData"></a>
<a id="tocSloyaltyacquirerdata"></a>
<a id="tocsloyaltyacquirerdata"></a>

```json
{
  "LoyaltyAcquirerID": "string",
  "ApprovalCode": "string",
  "LoyaltyTransactionID": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  },
  "HostReconciliationID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoyaltyAcquirerID|string|false|none|Identification of the loyalty Acquirer.|
|ApprovalCode|string|false|none|Code assigned to a transaction approval by the Acquirer. Could be an identifier of the approved transaction for the Acquirer. This data element is conditional for the Loyalty Acquirers. Used in the PaymentRequest request for a referral.|
|LoyaltyTransactionID|[TransactionIDType](#schematransactionidtype)|false|none|Identification of a transaction for the Sale System or the POI System.|
|HostReconciliationID|string|false|none|Identifier of a reconciliation period with a payment or loyalty host. Allows the assignment of a transaction to the Acquirer reconciliation (or batch).|

<h2 id="tocS_LoyaltyResult">LoyaltyResult</h2>
<!-- backwards compatibility -->
<a id="schemaloyaltyresult"></a>
<a id="schema_LoyaltyResult"></a>
<a id="tocSloyaltyresult"></a>
<a id="tocsloyaltyresult"></a>

```json
{
  "LoyaltyAccount": {
    "LoyaltyAccountID": {
      "EntryMode": [
        "RFID"
      ],
      "IdentificationType": "PAN",
      "IdentificationSupport": "NoCard",
      "LoyaltyID": "string"
    },
    "LoyaltyBrand": "string"
  },
  "CurrentBalance": 0,
  "LoyaltyAcquirerData": {
    "LoyaltyAcquirerID": "string",
    "ApprovalCode": "string",
    "LoyaltyTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "HostReconciliationID": "string"
  }
}
```

Data related to the result of a processed loyalty transaction.
In the Message Response, the result of each loyalty brand transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoyaltyAccount|[LoyaltyAccount](#schemaloyaltyaccount)|true|none|Data related to a loyalty account processed in the transaction.|
|CurrentBalance|number|false|none|Balance of an account.<br>If known (provided by the card or an external host).|
|LoyaltyAcquirerData|[LoyaltyAcquirerData](#schemaloyaltyacquirerdata)|false|none|Data related to the loyalty Acquirer during a loyalty transaction.<br>If content not empty.|

<h2 id="tocS_PaymentReceipt">PaymentReceipt</h2>
<!-- backwards compatibility -->
<a id="schemapaymentreceipt"></a>
<a id="schema_PaymentReceipt"></a>
<a id="tocSpaymentreceipt"></a>
<a id="tocspaymentreceipt"></a>

```json
{
  "DocumentQualifier": "SaleReceipt",
  "IntegratedPrintFlag": true,
  "RequiredSignatureFlag": false,
  "OutputContent": {
    "OutputFormat": "MessageRef",
    "PredefinedContent": {
      "ReferenceID": "string",
      "Language": "string"
    },
    "OutputText": [
      {
        "Text": "string",
        "CharacterSet": 0,
        "StartRow": 1,
        "StartColumn": 1,
        "CharacterWidth": "SingleWidth",
        "CharacterHeight": "SingleHeight",
        "CharacterStyle": "Normal",
        "Alignment": "Left",
        "EndOfLineFlag": true
      }
    ],
    "OutputXHTML": "string",
    "OutputBarcode": {
      "BarcodeValue": "string"
    }
  }
}
```

Customer or Merchant payment receipt.
If the payment receipts are printed by the Sale system and the POI or the Sale does not implement the Print exchange (Basic profile).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentQualifier|[DocumentQualifier](#schemadocumentqualifier)|true|none|Qualification of the document to print to the Cashier or the Customer.<br>SaleReceipt or CashierReceipt.<br>Possible values:<br>* **CashierReceipt**<br>* **CustomerReceipt**<br>* **Document**<br>* **Journal**<br>* **SaleReceipt**<br>* **Voucher**|
|IntegratedPrintFlag|boolean|false|none|Type of the print integrated to other prints.|
|RequiredSignatureFlag|boolean|false|none|Indicate that the cardholder payment receipt requires a physical signature by the Customer.|
|OutputContent|[OutputContent](#schemaoutputcontent)|true|none|Content to display or print.|

#### Enumerated Values

|Property|Value|
|---|---|
|DocumentQualifier|SaleReceipt|
|DocumentQualifier|CashierReceipt|
|DocumentQualifier|CustomerReceipt|
|DocumentQualifier|Document|
|DocumentQualifier|Voucher|
|DocumentQualifier|Journal|

<h2 id="tocS_PaymentAcquirerData">PaymentAcquirerData</h2>
<!-- backwards compatibility -->
<a id="schemapaymentacquirerdata"></a>
<a id="schema_PaymentAcquirerData"></a>
<a id="tocSpaymentacquirerdata"></a>
<a id="tocspaymentacquirerdata"></a>

```json
{
  "AcquirerID": 0,
  "MerchantID": "string",
  "AcquirerPOIID": "string",
  "AcquirerTransactionID": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  },
  "ApprovalCode": "string",
  "HostReconciliationID": "string"
}
```

Data related to the response from the payment Acquirer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcquirerID|integer|false|none|Identification of the Acquirer.<br>Identification of the Acquirer when the POI System is multi-acquirer.|
|MerchantID|string|true|none|Identification of the Merchant for the Acquirer.|
|AcquirerPOIID|string|true|none|Identification of the POI for the payment Acquirer.|
|AcquirerTransactionID|[TransactionIDType](#schematransactionidtype)|false|none|Identification of the Transaction for the Acquirer.<br>If provided by the Acquirer.|
|ApprovalCode|string|false|none|Code assigned to a transaction approval by the Acquirer.<br>If available.|
|HostReconciliationID|string|false|none|Identifier of a reconciliation period with a payment or loyalty host. Allows the assignment of a transaction to the Acquirer reconciliation (or batch).|

<h2 id="tocS_AreaSize">AreaSize</h2>
<!-- backwards compatibility -->
<a id="schemaareasize"></a>
<a id="schema_AreaSize"></a>
<a id="tocSareasize"></a>
<a id="tocsareasize"></a>

```json
{
  "X": "string",
  "Y": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|X|string|true|none|Abscissa of a point coordinates. The hexadecimal value in text of the abscissa of the coordinates of a point. Leading zero can be removed (e.g. 3BC, 0, and 1287).|
|Y|string|true|none|Ordinate of a point coordinates. The hexadecimal value in text of the ordinate of the coordinates of a point. Leading zero can be removed (e.g. 3BC, 0, and 1287).|

<h2 id="tocS_CapturedSignature">CapturedSignature</h2>
<!-- backwards compatibility -->
<a id="schemacapturedsignature"></a>
<a id="schema_CapturedSignature"></a>
<a id="tocScapturedsignature"></a>
<a id="tocscapturedsignature"></a>

```json
{
  "AreaSize": {
    "X": "string",
    "Y": "string"
  },
  "SignaturePoint": [
    {
      "X": "string",
      "Y": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AreaSize|[AreaSize](#schemaareasize)|false|none|Size of an area. Contain the size of the pad area where the signature is written, given with the maximum abscissa and ordinate values (X and Y). The maximum value is FFFF.|
|SignaturePoint|[[Point](#schemapoint)]|false|none|Coordinates of a point where the pen changes direction or lift. Contain the Coordinates of a point of the written signature where the pen changes direction or lift where (X and Y). When the signer lifts the pen, both X and Y have the value FFFF.|

<h2 id="tocS_AmountsResp">AmountsResp</h2>
<!-- backwards compatibility -->
<a id="schemaamountsresp"></a>
<a id="schema_AmountsResp"></a>
<a id="tocSamountsresp"></a>
<a id="tocsamountsresp"></a>

```json
{
  "Currency": "string",
  "AuthorizedAmount": 0,
  "TotalRebatesAmount": 0,
  "TotalFeesAmount": 0,
  "CashBackAmount": 0,
  "TipAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Currency|string|false|none|Currency of a monetary amount.|
|AuthorizedAmount|number|true|none|Amount requested by the Sale for the payment.|
|TotalRebatesAmount|number|false|none|Sum of rebates in amount (total amount or line item amount) for all the loyalty programs.|
|TotalFeesAmount|number|false|none|Total amount of financial fees.|
|CashBackAmount|number|false|none|The cash-back part of the amount requested by the Sale for the payment.|
|TipAmount|number|false|none|Amount paid for a tip. Allow the printing of the tip on the receipt, and to qualify the tip part of the amount.|

<h2 id="tocS_PaymentResult">PaymentResult</h2>
<!-- backwards compatibility -->
<a id="schemapaymentresult"></a>
<a id="schema_PaymentResult"></a>
<a id="tocSpaymentresult"></a>
<a id="tocspaymentresult"></a>

```json
{
  "PaymentType": "Normal",
  "PaymentInstrumentData": {
    "PaymentInstrumentType": "Card",
    "ProtectedCardData": "string",
    "CardData": {
      "PaymentBrand": "string",
      "MaskedPan": "string",
      "PaymentAccountRef": "string",
      "EntryMode": [
        "RFID"
      ],
      "CardCountryCode": 3,
      "ProtectedCardData": "string",
      "SensitiveCardData": {
        "PAN": 8,
        "CardSeqNumb": 2,
        "ExpiryDate": 4,
        "TrackData": [
          {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          }
        ]
      },
      "PaymentToken": {
        "TokenRequestedType": "Transaction",
        "TokenValue": "string",
        "ExpiryDateTime": "1970-01-01T00:00:00Z"
      }
    },
    "CheckData": {
      "BankID": "string",
      "AccountNumber": "string",
      "CheckNumber": "string",
      "TrackData": {
        "TrackNumb": 2,
        "TrackFormat": "ISO",
        "TrackValue": "string"
      },
      "CheckCardNumber": "string",
      "TypeCode": "Personal",
      "Country": "string"
    },
    "MobileData": {
      "MobileCountryCode": 3,
      "MobileNetworkCode": 2,
      "MaskedMSISDN": 0,
      "Geolocation": {
        "GeographicCoordinates": {
          "Latitude": "string",
          "Longitude": "string"
        },
        "UTMCoordinates": {
          "UTMZone": "string",
          "UTMEastward": "string",
          "UTMNorthward": "string"
        }
      },
      "ProtectedMobileData": "string",
      "SensitiveMobileData": {
        "MSISDN": 0,
        "IMSI": 0,
        "IMEI": 0
      }
    },
    "StoredValueAccountID": {
      "StoredValueAccountType": "GiftCard",
      "StoredValueProvider": "string",
      "OwnerName": "string",
      "ExpiryDate": 4,
      "EntryMode": [
        "RFID"
      ],
      "IdentificationType": "PAN",
      "StoredValueID": "string"
    }
  },
  "AmountsResp": {
    "Currency": "string",
    "AuthorizedAmount": 0,
    "TotalRebatesAmount": 0,
    "TotalFeesAmount": 0,
    "CashBackAmount": 0,
    "TipAmount": 0
  },
  "Instalment": {
    "InstalmentType": "DeferredInstalments",
    "SequenceNumber": 0,
    "PlanID": "string",
    "Period": 0,
    "PeriodUnit": "Daily",
    "FirstPaymentDate": "1970-01-01",
    "TotalNbOfPayments": 0,
    "CumulativeAmount": 0,
    "FirstAmount": 0,
    "Charges": 0
  },
  "CurrencyConversion": [
    {
      "CustomerApprovedFlag": true,
      "ConvertedAmount": {
        "AmountValue": 0,
        "Currency": "string"
      },
      "Rate": 0,
      "Markup": 0,
      "Commission": 0,
      "Declaration": "string"
    }
  ],
  "MerchantOverrideFlag": false,
  "CapturedSignature": {
    "AreaSize": {
      "X": "string",
      "Y": "string"
    },
    "SignaturePoint": [
      {
        "X": "string",
        "Y": "string"
      }
    ]
  },
  "ProtectedSignature": "string",
  "CustomerLanguage": "string",
  "OnlineFlag": true,
  "AuthenticationMethod": [
    "Bypass"
  ],
  "ValidityDate": "1970-01-01",
  "PaymentAcquirerData": {
    "AcquirerID": 0,
    "MerchantID": "string",
    "AcquirerPOIID": "string",
    "AcquirerTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "ApprovalCode": "string",
    "HostReconciliationID": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaymentType|[PaymentType](#schemapaymenttype)|false|none|Type of payment transaction. Elements requested by the Sale System that are related to the payment only.<br>Possible values:<br>* **CashAdvance**<br>* **CashDeposit**<br>* **Completion**<br>* **FirstReservation**<br>* **Instalment**<br>* **IssuerInstalment**<br>* **Normal**<br>* **OneTimeReservation**<br>* **PaidOut**<br>* **Recurring**<br>* **Refund**<br>* **UpdateReservation**|
|PaymentInstrumentData|[PaymentInstrumentData](#schemapaymentinstrumentdata)|false|none|Data related to the instrument of payment for the transaction.<br>Sent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System.|
|AmountsResp|[AmountsResp](#schemaamountsresp)|false|none|Various amounts related to the payment response from the POI System. Amounts approved by the POI and the Acquirer for the payment and loyalty transaction, containing:<br>  * The authorised amount to be paid.<br>  * The amount of the rebates.<br>  * The amount of financial fees.<br>  * The cash back part of the requested amount for a payment with cash back.<br>  * The tip part of the requested amount for a payment with tip.|
|Instalment|[Instalment](#schemainstalment)|false|none|Information related an instalment transaction. To request an instalment to the issuer, or to make individual instalments of a payment transaction.|
|CurrencyConversion|[[CurrencyConversion](#schemacurrencyconversion)]|false|none|Information related to a currency conversion. A currency conversion occurred in the payment, and the merchant needs to know information related to this conversion (e.g. to print on the sale receipt).|
|MerchantOverrideFlag|boolean|false|none|Indicates that the Merchant forced the result of the payment to successful. Allows the Sale System to be sure that the payment has been forced.|
|CapturedSignature|[CapturedSignature](#schemacapturedsignature)|false|none|Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g. the signature of a cardholder on the merchant payment receipt. Only one format of the signature is allowed:<br>  * The size of the pad area where the signature is written, given with the maximum abscissa and ordinate values.<br>  * The sequence of coordinates where the pen changes direction or lift.|
|ProtectedSignature|string|false|none|Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g. the signature of a cardholder on the merchant payment receipt. The format before encryption is the encoded data structure CapturedSignature. The data structure before encryption includes the start and end tags for an XML encoding, the identifier and length bytes for an ASN.1 encoding, and the complete member ProtectedSignature for a JSON encoding.|
|CustomerLanguage|string|false|none|The language of the customer that was used on the terminal screen or in text printed by the terminal. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.|
|OnlineFlag|boolean|false|none|Indicate that the payment transaction processing has required the approval of a host. Allows the Sale System to know if the payment was online or offline.|
|AuthenticationMethod|[AuthenticationMethod](#schemaauthenticationmethod)|false|none|Method for customer authentication. Allows the Sale System informed about customer authentication for the payment transaction.<br>Possible values:<br>* **Bypass**<br>* **ManualVerification**<br>* **MerchantAuthentication**<br>* **OfflinePIN**<br>* **OnlinePIN**<br>* **PaperSignature**<br>* **SecureCertificate**<br>* **SecureNoCertificate**<br>* **SecuredChannel**<br>* **SignatureCapture**<br>* **UnknownMethod**|
|ValidityDate|string(date)|false|none|End of the validity period for the reservation, for the first reservation, and the reservation updates as well.|
|PaymentAcquirerData|[PaymentAcquirerData](#schemapaymentacquirerdata)|false|none|Data related to the response from the payment Acquirer.|

#### Enumerated Values

|Property|Value|
|---|---|
|PaymentType|Normal|
|PaymentType|Refund|
|PaymentType|OneTimeReservation|
|PaymentType|FirstReservation|
|PaymentType|UpdateReservation|
|PaymentType|Completion|
|PaymentType|CashAdvance|
|PaymentType|CashDeposit|
|PaymentType|Recurring|
|PaymentType|Instalment|
|PaymentType|IssuerInstalment|
|PaymentType|PaidOut|
|AuthenticationMethod|Bypass|
|AuthenticationMethod|ManualVerification|
|AuthenticationMethod|MerchantAuthentication|
|AuthenticationMethod|OfflinePIN|
|AuthenticationMethod|OnlinePIN|
|AuthenticationMethod|PaperSignature|
|AuthenticationMethod|SecuredChannel|
|AuthenticationMethod|SecureCertificate|
|AuthenticationMethod|SecureNoCertificate|
|AuthenticationMethod|SignatureCapture|
|AuthenticationMethod|UnknownMethod|

<h2 id="tocS_CardAcquisitionTransaction">CardAcquisitionTransaction</h2>
<!-- backwards compatibility -->
<a id="schemacardacquisitiontransaction"></a>
<a id="schema_CardAcquisitionTransaction"></a>
<a id="tocScardacquisitiontransaction"></a>
<a id="tocscardacquisitiontransaction"></a>

```json
{
  "AllowedPaymentBrand": [
    "string"
  ],
  "AllowedLoyaltyBrand": [
    "string"
  ],
  "LoyaltyHandling": "Forbidden",
  "CustomerLanguage": "string",
  "ForceEntryMode": [
    "RFID"
  ],
  "ForceCustomerSelectionFlag": true,
  "TotalAmount": 0,
  "PaymentType": "Normal",
  "CashBackFlag": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowedPaymentBrand|[string]|false|none|Card payment brands allowed by the Sale System for the payment transaction.|
|AllowedLoyaltyBrand|[string]|false|none|Loyalty brands or programs allowed by the Sale System for the loyalty transaction.|
|LoyaltyHandling|[LoyaltyHandling](#schemaloyaltyhandling)|false|none|Type of Loyalty processing requested by the Sale System. An way to specify what the POI has to handle concerning the loyalty.<br>Possible values:<br>* **Allowed**<br>* **Forbidden**<br>* **Processed**<br>* **Proposed**<br>* **Required**|
|CustomerLanguage|string|false|none|The language used on the terminal screen or in text printed by the terminal.<br>  Typical use case is setting the language on unattended terminals. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.|
|ForceEntryMode|[ForceEntryMode](#schemaforceentrymode)|false|none|Payment instrument entry mode requested by the Sale System. Avoid retry on an out of order card reading device, when the sale system knows that some card entry modes on the POI do not work.<br>Possible values:<br>* **CheckReader**<br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped**|
|ForceCustomerSelectionFlag|boolean|false|none|Indicates if the Customer realises the selection of the card application.|
|TotalAmount|number|false|none|Amount of a transaction. In the Card Acquisition Request message, it allows the processing of a contactless card.|
|PaymentType|[PaymentType](#schemapaymenttype)|false|none|Type of payment transaction. Elements requested by the Sale System that are related to the payment only.<br>Possible values:<br>* **CashAdvance**<br>* **CashDeposit**<br>* **Completion**<br>* **FirstReservation**<br>* **Instalment**<br>* **IssuerInstalment**<br>* **Normal**<br>* **OneTimeReservation**<br>* **PaidOut**<br>* **Recurring**<br>* **Refund**<br>* **UpdateReservation**|
|CashBackFlag|boolean|false|none|Cash back has been requested with the payment transaction. Allows choice of the Customer language when the POI displays messages or print text to Merchant interface.|

#### Enumerated Values

|Property|Value|
|---|---|
|LoyaltyHandling|Forbidden|
|LoyaltyHandling|Processed|
|LoyaltyHandling|Allowed|
|LoyaltyHandling|Proposed|
|LoyaltyHandling|Required|
|ForceEntryMode|RFID|
|ForceEntryMode|Keyed|
|ForceEntryMode|Manual|
|ForceEntryMode|File|
|ForceEntryMode|Scanned|
|ForceEntryMode|MagStripe|
|ForceEntryMode|ICC|
|ForceEntryMode|SynchronousICC|
|ForceEntryMode|Tapped|
|ForceEntryMode|Contactless|
|ForceEntryMode|CheckReader|
|PaymentType|Normal|
|PaymentType|Refund|
|PaymentType|OneTimeReservation|
|PaymentType|FirstReservation|
|PaymentType|UpdateReservation|
|PaymentType|Completion|
|PaymentType|CashAdvance|
|PaymentType|CashDeposit|
|PaymentType|Recurring|
|PaymentType|Instalment|
|PaymentType|IssuerInstalment|
|PaymentType|PaidOut|

<h2 id="tocS_StoredValueData">StoredValueData</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluedata"></a>
<a id="schema_StoredValueData"></a>
<a id="tocSstoredvaluedata"></a>
<a id="tocsstoredvaluedata"></a>

```json
{
  "StoredValueProvider": "string",
  "StoredValueTransactionType": "Reserve",
  "StoredValueAccountID": {
    "StoredValueAccountType": "GiftCard",
    "StoredValueProvider": "string",
    "OwnerName": "string",
    "ExpiryDate": 4,
    "EntryMode": [
      "RFID"
    ],
    "IdentificationType": "PAN",
    "StoredValueID": "string"
  },
  "OriginalPOITransaction": {
    "SaleID": "string",
    "POIID": "string",
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "ReuseCardDataFlag": true,
    "ApprovalCode": "string",
    "AcquirerID": 0,
    "AmountValue": 0,
    "HostTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    }
  },
  "ProductCode": 1,
  "EanUpc": 0,
  "ItemAmount": 0,
  "Currency": "string"
}
```

It contains: - the identification of the stored value accounts or the stored value cards, if provided by the Sale System, and - the associated products sold by the Sale System.
Data related to the stored value card.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StoredValueProvider|string|false|none|Identification of the provider of the stored value account load/reload.<br>If more than one provider to manage on the POI, and StoredValueAccountID absent.|
|StoredValueTransactionType|[StoredValueTransactionType](#schemastoredvaluetransactiontype)|true|none|Identification of operation to proceed on the stored value account or the stored value card.<br>Possible values:<br>* **Activate**<br>* **Duplicate**<br>* **Load**<br>* **Reserve**<br>* **Reverse**<br>* **Unload**|
|StoredValueAccountID|[StoredValueAccountID](#schemastoredvalueaccountid)|false|none|Identification of the stored value account or the stored value card.<br>If the identification of the Stored Value account or card has been made by the Sale System before the request.|
|OriginalPOITransaction|[OriginalPOITransaction](#schemaoriginalpoitransaction)|false|none|Identification of a previous POI transaction.<br>If StoredValueTransactionType is Reverse or Duplicate.|
|ProductCode|integer|false|none|Product code of item purchased with the transaction.|
|EanUpc|integer|false|none|Standard product code of item purchased with the transaction.|
|ItemAmount|number|false|none|Total amount of the item line.|
|Currency|string|false|none|Currency of a monetary amount.|

#### Enumerated Values

|Property|Value|
|---|---|
|StoredValueTransactionType|Reserve|
|StoredValueTransactionType|Activate|
|StoredValueTransactionType|Load|
|StoredValueTransactionType|Unload|
|StoredValueTransactionType|Reverse|
|StoredValueTransactionType|Duplicate|

<h2 id="tocS_StoredValueAccountStatus">StoredValueAccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemastoredvalueaccountstatus"></a>
<a id="schema_StoredValueAccountStatus"></a>
<a id="tocSstoredvalueaccountstatus"></a>
<a id="tocsstoredvalueaccountstatus"></a>

```json
{
  "StoredValueAccountID": {
    "StoredValueAccountType": "GiftCard",
    "StoredValueProvider": "string",
    "OwnerName": "string",
    "ExpiryDate": 4,
    "EntryMode": [
      "RFID"
    ],
    "IdentificationType": "PAN",
    "StoredValueID": "string"
  },
  "CurrentBalance": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StoredValueAccountID|[StoredValueAccountID](#schemastoredvalueaccountid)|true|none|Identification of the stored value account or the stored value card and the associated product sold by the Sale System for stored value requests.|
|CurrentBalance|number|false|none|If relevant and known.|

<h2 id="tocS_StoredValueResult">StoredValueResult</h2>
<!-- backwards compatibility -->
<a id="schemastoredvalueresult"></a>
<a id="schema_StoredValueResult"></a>
<a id="tocSstoredvalueresult"></a>
<a id="tocsstoredvalueresult"></a>

```json
{
  "StoredValueTransactionType": "Reserve",
  "ProductCode": 1,
  "EanUpc": 0,
  "ItemAmount": 0,
  "Currency": "string",
  "StoredValueAccountStatus": {
    "StoredValueAccountID": {
      "StoredValueAccountType": "GiftCard",
      "StoredValueProvider": "string",
      "OwnerName": "string",
      "ExpiryDate": 4,
      "EntryMode": [
        "RFID"
      ],
      "IdentificationType": "PAN",
      "StoredValueID": "string"
    },
    "CurrentBalance": 0
  },
  "HostTransactionID": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  }
}
```

For each stored value card loaded or reloaded, in the StoredValue response message.
Result of loading/reloading a stored value card.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StoredValueTransactionType|[StoredValueTransactionType](#schemastoredvaluetransactiontype)|true|none|Identification of operation to proceed on the stored value account or the stored value card.<br>Copy.<br>Possible values:<br>* **Activate**<br>* **Duplicate**<br>* **Load**<br>* **Reserve**<br>* **Reverse**<br>* **Unload**|
|ProductCode|integer|false|none|Product code of item purchased with the transaction.<br>Copy.|
|EanUpc|integer|false|none|Standard product code of item purchased with the transaction.<br>Copy.|
|ItemAmount|number|false|none|Total amount of the item line.|
|Currency|string|false|none|Currency of a monetary amount.<br>Copy.|
|StoredValueAccountStatus|[StoredValueAccountStatus](#schemastoredvalueaccountstatus)|false|none|Data related to the result of the stored value card transaction.|
|HostTransactionID|[TransactionIDType](#schematransactionidtype)|false|none|Identification of the transaction by the host in charge of the stored value transaction.<br>If provided by the Host.|

#### Enumerated Values

|Property|Value|
|---|---|
|StoredValueTransactionType|Reserve|
|StoredValueTransactionType|Activate|
|StoredValueTransactionType|Load|
|StoredValueTransactionType|Unload|
|StoredValueTransactionType|Reverse|
|StoredValueTransactionType|Duplicate|

<h2 id="tocS_TerminalAPIRequest">TerminalAPIRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminalapirequest"></a>
<a id="schema_TerminalAPIRequest"></a>
<a id="tocSterminalapirequest"></a>
<a id="tocsterminalapirequest"></a>

```json
{
  "SaleToPOIRequest": {
    "MessageHeader": {
      "ProtocolVersion": "string",
      "MessageClass": "Service",
      "MessageCategory": "Abort",
      "MessageType": "Request",
      "ServiceID": "string",
      "DeviceID": "string",
      "SaleID": "string",
      "POIID": "string"
    },
    "AbortRequest": {
      "MessageReference": {
        "MessageCategory": "Abort",
        "ServiceID": "string",
        "DeviceID": "string",
        "SaleID": "string",
        "POIID": "string"
      },
      "AbortReason": "string",
      "DisplayOutput": {
        "ResponseRequiredFlag": true,
        "MinimumDisplayTime": 0,
        "Device": "CashierDisplay",
        "InfoQualify": "Status",
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        },
        "MenuEntry": [
          {
            "MenuEntryTag": "Selectable",
            "DefaultSelectedFlag": false,
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string"
          }
        ],
        "OutputSignature": "string"
      }
    },
    "BalanceInquiryRequest": {
      "PaymentAccountReq": {
        "AccountType": "Default",
        "CardAcquisitionReference": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "PaymentInstrumentData": {
          "PaymentInstrumentType": "Card",
          "ProtectedCardData": "string",
          "CardData": {
            "PaymentBrand": "string",
            "MaskedPan": "string",
            "PaymentAccountRef": "string",
            "EntryMode": [
              "RFID"
            ],
            "CardCountryCode": 3,
            "ProtectedCardData": "string",
            "SensitiveCardData": {
              "PAN": 8,
              "CardSeqNumb": 2,
              "ExpiryDate": 4,
              "TrackData": [
                {
                  "TrackNumb": 2,
                  "TrackFormat": "ISO",
                  "TrackValue": "string"
                }
              ]
            },
            "PaymentToken": {
              "TokenRequestedType": "Transaction",
              "TokenValue": "string",
              "ExpiryDateTime": "1970-01-01T00:00:00Z"
            }
          },
          "CheckData": {
            "BankID": "string",
            "AccountNumber": "string",
            "CheckNumber": "string",
            "TrackData": {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            },
            "CheckCardNumber": "string",
            "TypeCode": "Personal",
            "Country": "string"
          },
          "MobileData": {
            "MobileCountryCode": 3,
            "MobileNetworkCode": 2,
            "MaskedMSISDN": 0,
            "Geolocation": {
              "GeographicCoordinates": {
                "Latitude": "string",
                "Longitude": "string"
              },
              "UTMCoordinates": {
                "UTMZone": "string",
                "UTMEastward": "string",
                "UTMNorthward": "string"
              }
            },
            "ProtectedMobileData": "string",
            "SensitiveMobileData": {
              "MSISDN": 0,
              "IMSI": 0,
              "IMEI": 0
            }
          },
          "StoredValueAccountID": {
            "StoredValueAccountType": "GiftCard",
            "StoredValueProvider": "string",
            "OwnerName": "string",
            "ExpiryDate": 4,
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "StoredValueID": "string"
          }
        }
      },
      "LoyaltyAccountReq": {
        "CardAcquisitionReference": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "LoyaltyAccountID": {
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "IdentificationSupport": "NoCard",
          "LoyaltyID": "string"
        }
      }
    },
    "CardAcquisitionRequest": {
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "CardAcquisitionTransaction": {
        "AllowedPaymentBrand": [
          "string"
        ],
        "AllowedLoyaltyBrand": [
          "string"
        ],
        "LoyaltyHandling": "Forbidden",
        "CustomerLanguage": "string",
        "ForceEntryMode": [
          "RFID"
        ],
        "ForceCustomerSelectionFlag": true,
        "TotalAmount": 0,
        "PaymentType": "Normal",
        "CashBackFlag": true
      }
    },
    "AdminRequest": {
      "ServiceIdentification": "string"
    },
    "DiagnosisRequest": {
      "POIID": "string",
      "HostDiagnosisFlag": false,
      "AcquirerID": [
        0
      ]
    },
    "DisplayRequest": {
      "DisplayOutput": [
        {
          "ResponseRequiredFlag": true,
          "MinimumDisplayTime": 0,
          "Device": "CashierDisplay",
          "InfoQualify": "Status",
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          },
          "MenuEntry": [
            {
              "MenuEntryTag": "Selectable",
              "DefaultSelectedFlag": false,
              "OutputFormat": "MessageRef",
              "PredefinedContent": {
                "ReferenceID": "string",
                "Language": "string"
              },
              "OutputText": [
                {
                  "Text": "string",
                  "CharacterSet": 0,
                  "StartRow": 1,
                  "StartColumn": 1,
                  "CharacterWidth": "SingleWidth",
                  "CharacterHeight": "SingleHeight",
                  "CharacterStyle": "Normal",
                  "Alignment": "Left",
                  "EndOfLineFlag": true
                }
              ],
              "OutputXHTML": "string"
            }
          ],
          "OutputSignature": "string"
        }
      ]
    },
    "EnableServiceRequest": {
      "TransactionAction": "StartTransaction",
      "ServicesEnabled": [
        "CardAcquisition"
      ],
      "DisplayOutput": {
        "ResponseRequiredFlag": true,
        "MinimumDisplayTime": 0,
        "Device": "CashierDisplay",
        "InfoQualify": "Status",
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        },
        "MenuEntry": [
          {
            "MenuEntryTag": "Selectable",
            "DefaultSelectedFlag": false,
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string"
          }
        ],
        "OutputSignature": "string"
      }
    },
    "EventNotification": {
      "TimeStamp": "1970-01-01T00:00:00Z",
      "EventToNotify": "BeginMaintenance",
      "EventDetails": "string",
      "RejectedMessage": "string",
      "MaintenanceRequiredFlag": false,
      "DisplayOutput": [
        {
          "ResponseRequiredFlag": true,
          "MinimumDisplayTime": 0,
          "Device": "CashierDisplay",
          "InfoQualify": "Status",
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          },
          "MenuEntry": [
            {
              "MenuEntryTag": "Selectable",
              "DefaultSelectedFlag": false,
              "OutputFormat": "MessageRef",
              "PredefinedContent": {
                "ReferenceID": "string",
                "Language": "string"
              },
              "OutputText": [
                {
                  "Text": "string",
                  "CharacterSet": 0,
                  "StartRow": 1,
                  "StartColumn": 1,
                  "CharacterWidth": "SingleWidth",
                  "CharacterHeight": "SingleHeight",
                  "CharacterStyle": "Normal",
                  "Alignment": "Left",
                  "EndOfLineFlag": true
                }
              ],
              "OutputXHTML": "string"
            }
          ],
          "OutputSignature": "string"
        }
      ]
    },
    "GetTotalsRequest": {
      "TotalDetails": [
        "POIID"
      ],
      "TotalFilter": {
        "POIID": "string",
        "SaleID": "string",
        "OperatorID": "string",
        "ShiftNumber": "string",
        "TotalsGroupID": "string"
      }
    },
    "InputRequest": {
      "DisplayOutput": {
        "ResponseRequiredFlag": true,
        "MinimumDisplayTime": 0,
        "Device": "CashierDisplay",
        "InfoQualify": "Status",
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        },
        "MenuEntry": [
          {
            "MenuEntryTag": "Selectable",
            "DefaultSelectedFlag": false,
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string"
          }
        ],
        "OutputSignature": "string"
      },
      "InputData": {
        "Device": "CashierDisplay",
        "InfoQualify": "Status",
        "InputCommand": "GetAnyKey",
        "NotifyCardInputFlag": false,
        "MaxInputTime": 0,
        "ImmediateResponseFlag": false,
        "MinLength": 0,
        "MaxLength": 0,
        "MaxDecimalLength": 0,
        "WaitUserValidationFlag": true,
        "DefaultInputString": "string",
        "DefaultLayoutString": "string",
        "StringMask": "string",
        "FromRightToLeftFlag": false,
        "MaskCharactersFlag": false,
        "BeepKeyFlag": false,
        "GlobalCorrectionFlag": false,
        "DisableCancelFlag": false,
        "DisableCorrectFlag": false,
        "DisableValidFlag": false,
        "MenuBackFlag": false
      }
    },
    "InputUpdate": {
      "MessageReference": {
        "MessageCategory": "Abort",
        "ServiceID": "string",
        "DeviceID": "string",
        "SaleID": "string",
        "POIID": "string"
      },
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      },
      "MenuEntry": [
        {
          "MenuEntryTag": "Selectable",
          "DefaultSelectedFlag": false,
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string"
        }
      ],
      "OutputSignature": "string",
      "MinLength": 0,
      "MaxLength": 0,
      "MaxDecimalLength": 0
    },
    "LoginRequest": {
      "DateTime": "1970-01-01T00:00:00Z",
      "SaleSoftware": {
        "ManufacturerID": "string",
        "ApplicationName": "string",
        "SoftwareVersion": "string",
        "CertificationCode": "string"
      },
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TrainingModeFlag": false,
      "OperatorLanguage": "string",
      "OperatorID": "string",
      "ShiftNumber": "string",
      "TokenRequestedType": "Transaction",
      "CustomerOrderReq": [
        "Open"
      ],
      "POISerialNumber": "string"
    },
    "LogoutRequest": {
      "MaintenanceAllowed": false
    },
    "PaymentRequest": {
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "PaymentTransaction": {
        "AmountsReq": {
          "Currency": "string",
          "RequestedAmount": 0,
          "CashBackAmount": 0,
          "TipAmount": 0,
          "PaidAmount": 0,
          "MinimumAmountToDeliver": 0,
          "MaximumCashBackAmount": 0,
          "MinimumSplitAmount": 0
        },
        "OriginalPOITransaction": {
          "SaleID": "string",
          "POIID": "string",
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "ReuseCardDataFlag": true,
          "ApprovalCode": "string",
          "AcquirerID": 0,
          "AmountValue": 0,
          "HostTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          }
        },
        "TransactionConditions": {
          "AllowedPaymentBrand": [
            "string"
          ],
          "AcquirerID": [
            0
          ],
          "DebitPreferredFlag": true,
          "AllowedLoyaltyBrand": [
            "string"
          ],
          "LoyaltyHandling": "Forbidden",
          "CustomerLanguage": "string",
          "ForceOnlineFlag": false,
          "ForceEntryMode": [
            "RFID"
          ],
          "MerchantCategoryCode": "string"
        }
      },
      "PaymentData": {
        "PaymentType": "Normal",
        "SplitPaymentFlag": false,
        "RequestedValidityDate": "1970-01-01",
        "CardAcquisitionReference": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "Instalment": {
          "InstalmentType": "DeferredInstalments",
          "SequenceNumber": 0,
          "PlanID": "string",
          "Period": 0,
          "PeriodUnit": "Daily",
          "FirstPaymentDate": "1970-01-01",
          "TotalNbOfPayments": 0,
          "CumulativeAmount": 0,
          "FirstAmount": 0,
          "Charges": 0
        },
        "PaymentInstrumentData": {
          "PaymentInstrumentType": "Card",
          "ProtectedCardData": "string",
          "CardData": {
            "PaymentBrand": "string",
            "MaskedPan": "string",
            "PaymentAccountRef": "string",
            "EntryMode": [
              "RFID"
            ],
            "CardCountryCode": 3,
            "ProtectedCardData": "string",
            "SensitiveCardData": {
              "PAN": 8,
              "CardSeqNumb": 2,
              "ExpiryDate": 4,
              "TrackData": [
                {
                  "TrackNumb": 2,
                  "TrackFormat": "ISO",
                  "TrackValue": "string"
                }
              ]
            },
            "PaymentToken": {
              "TokenRequestedType": "Transaction",
              "TokenValue": "string",
              "ExpiryDateTime": "1970-01-01T00:00:00Z"
            }
          },
          "CheckData": {
            "BankID": "string",
            "AccountNumber": "string",
            "CheckNumber": "string",
            "TrackData": {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            },
            "CheckCardNumber": "string",
            "TypeCode": "Personal",
            "Country": "string"
          },
          "MobileData": {
            "MobileCountryCode": 3,
            "MobileNetworkCode": 2,
            "MaskedMSISDN": 0,
            "Geolocation": {
              "GeographicCoordinates": {
                "Latitude": "string",
                "Longitude": "string"
              },
              "UTMCoordinates": {
                "UTMZone": "string",
                "UTMEastward": "string",
                "UTMNorthward": "string"
              }
            },
            "ProtectedMobileData": "string",
            "SensitiveMobileData": {
              "MSISDN": 0,
              "IMSI": 0,
              "IMEI": 0
            }
          },
          "StoredValueAccountID": {
            "StoredValueAccountType": "GiftCard",
            "StoredValueProvider": "string",
            "OwnerName": "string",
            "ExpiryDate": 4,
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "StoredValueID": "string"
          }
        }
      },
      "LoyaltyData": [
        {
          "CardAcquisitionReference": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "LoyaltyAccountID": {
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "IdentificationSupport": "NoCard",
            "LoyaltyID": "string"
          }
        }
      ]
    },
    "PrintRequest": {
      "PrintOutput": {
        "DocumentQualifier": "SaleReceipt",
        "ResponseMode": "NotRequired",
        "IntegratedPrintFlag": false,
        "RequiredSignatureFlag": false,
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        }
      }
    },
    "CardReaderAPDURequest": {
      "APDUClass": "string",
      "APDUInstruction": "string",
      "APDUPar1": "string",
      "APDUPar2": "string",
      "APDUData": "string",
      "APDUExpectedLength": "string"
    },
    "ReconciliationRequest": {
      "ReconciliationType": "SaleReconciliation",
      "AcquirerID": [
        0
      ],
      "POIReconciliationID": 0
    },
    "ReversalRequest": {
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "OriginalPOITransaction": {
        "SaleID": "string",
        "POIID": "string",
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "ReuseCardDataFlag": true,
        "ApprovalCode": "string",
        "AcquirerID": 0,
        "AmountValue": 0,
        "HostTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        }
      },
      "ReversedAmount": 0,
      "ReversalReason": "CustCancel"
    },
    "StoredValueRequest": {
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "StoredValueData": [
        {
          "StoredValueProvider": "string",
          "StoredValueTransactionType": "Reserve",
          "StoredValueAccountID": {
            "StoredValueAccountType": "GiftCard",
            "StoredValueProvider": "string",
            "OwnerName": "string",
            "ExpiryDate": 4,
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "StoredValueID": "string"
          },
          "OriginalPOITransaction": {
            "SaleID": "string",
            "POIID": "string",
            "POITransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "ReuseCardDataFlag": true,
            "ApprovalCode": "string",
            "AcquirerID": 0,
            "AmountValue": 0,
            "HostTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            }
          },
          "ProductCode": 1,
          "EanUpc": 0,
          "ItemAmount": 0,
          "Currency": "string"
        }
      ]
    },
    "TransactionStatusRequest": {
      "MessageReference": {
        "MessageCategory": "Abort",
        "ServiceID": "string",
        "DeviceID": "string",
        "SaleID": "string",
        "POIID": "string"
      },
      "ReceiptReprintFlag": false,
      "DocumentQualifier": [
        "SaleReceipt"
      ]
    }
  }
}
```

The request payload of the Adyen Terminal API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SaleToPOIRequest|[SaleToPOIRequest](#schemasaletopoirequest)|true|none|The SaleToPOIRequest message pair is a container for the request message content. It contains a MessageHeader and a message body.|

<h2 id="tocS_TerminalAPIResponse">TerminalAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schematerminalapiresponse"></a>
<a id="schema_TerminalAPIResponse"></a>
<a id="tocSterminalapiresponse"></a>
<a id="tocsterminalapiresponse"></a>

```json
{
  "SaleToPOIResponse": {
    "MessageHeader": {
      "ProtocolVersion": "string",
      "MessageClass": "Service",
      "MessageCategory": "Abort",
      "MessageType": "Request",
      "ServiceID": "string",
      "DeviceID": "string",
      "SaleID": "string",
      "POIID": "string"
    },
    "BalanceInquiryResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "PaymentAccountStatus": {
        "PaymentInstrumentData": {
          "PaymentInstrumentType": "Card",
          "ProtectedCardData": "string",
          "CardData": {
            "PaymentBrand": "string",
            "MaskedPan": "string",
            "PaymentAccountRef": "string",
            "EntryMode": [
              "RFID"
            ],
            "CardCountryCode": 3,
            "ProtectedCardData": "string",
            "SensitiveCardData": {
              "PAN": 8,
              "CardSeqNumb": 2,
              "ExpiryDate": 4,
              "TrackData": [
                {
                  "TrackNumb": 2,
                  "TrackFormat": "ISO",
                  "TrackValue": "string"
                }
              ]
            },
            "PaymentToken": {
              "TokenRequestedType": "Transaction",
              "TokenValue": "string",
              "ExpiryDateTime": "1970-01-01T00:00:00Z"
            }
          },
          "CheckData": {
            "BankID": "string",
            "AccountNumber": "string",
            "CheckNumber": "string",
            "TrackData": {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            },
            "CheckCardNumber": "string",
            "TypeCode": "Personal",
            "Country": "string"
          },
          "MobileData": {
            "MobileCountryCode": 3,
            "MobileNetworkCode": 2,
            "MaskedMSISDN": 0,
            "Geolocation": {
              "GeographicCoordinates": {
                "Latitude": "string",
                "Longitude": "string"
              },
              "UTMCoordinates": {
                "UTMZone": "string",
                "UTMEastward": "string",
                "UTMNorthward": "string"
              }
            },
            "ProtectedMobileData": "string",
            "SensitiveMobileData": {
              "MSISDN": 0,
              "IMSI": 0,
              "IMEI": 0
            }
          },
          "StoredValueAccountID": {
            "StoredValueAccountType": "GiftCard",
            "StoredValueProvider": "string",
            "OwnerName": "string",
            "ExpiryDate": 4,
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "StoredValueID": "string"
          }
        },
        "CurrentBalance": 0,
        "Currency": "string",
        "PaymentAcquirerData": {
          "AcquirerID": 0,
          "MerchantID": "string",
          "AcquirerPOIID": "string",
          "AcquirerTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "ApprovalCode": "string",
          "HostReconciliationID": "string"
        }
      },
      "PaymentReceipt": [
        {
          "DocumentQualifier": "SaleReceipt",
          "IntegratedPrintFlag": true,
          "RequiredSignatureFlag": false,
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          }
        }
      ]
    },
    "CardAcquisitionResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "POIData": {
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "POIReconciliationID": 0
      },
      "PaymentBrand": [
        "string"
      ],
      "PaymentInstrumentData": {
        "PaymentInstrumentType": "Card",
        "ProtectedCardData": "string",
        "CardData": {
          "PaymentBrand": "string",
          "MaskedPan": "string",
          "PaymentAccountRef": "string",
          "EntryMode": [
            "RFID"
          ],
          "CardCountryCode": 3,
          "ProtectedCardData": "string",
          "SensitiveCardData": {
            "PAN": 8,
            "CardSeqNumb": 2,
            "ExpiryDate": 4,
            "TrackData": [
              {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              }
            ]
          },
          "PaymentToken": {
            "TokenRequestedType": "Transaction",
            "TokenValue": "string",
            "ExpiryDateTime": "1970-01-01T00:00:00Z"
          }
        },
        "CheckData": {
          "BankID": "string",
          "AccountNumber": "string",
          "CheckNumber": "string",
          "TrackData": {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          },
          "CheckCardNumber": "string",
          "TypeCode": "Personal",
          "Country": "string"
        },
        "MobileData": {
          "MobileCountryCode": 3,
          "MobileNetworkCode": 2,
          "MaskedMSISDN": 0,
          "Geolocation": {
            "GeographicCoordinates": {
              "Latitude": "string",
              "Longitude": "string"
            },
            "UTMCoordinates": {
              "UTMZone": "string",
              "UTMEastward": "string",
              "UTMNorthward": "string"
            }
          },
          "ProtectedMobileData": "string",
          "SensitiveMobileData": {
            "MSISDN": 0,
            "IMSI": 0,
            "IMEI": 0
          }
        },
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        }
      },
      "LoyaltyAccount": [
        {
          "LoyaltyAccountID": {
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "IdentificationSupport": "NoCard",
            "LoyaltyID": "string"
          },
          "LoyaltyBrand": "string"
        }
      ]
    },
    "AdminResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      }
    },
    "DiagnosisResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "POIStatus": {
        "GlobalStatus": "OK",
        "SecurityOKFlag": true,
        "PEDOKFlag": true,
        "CardReaderOKFlag": true,
        "PrinterStatus": "OK",
        "CommunicationOKFlag": true,
        "FraudPreventionFlag": true
      },
      "HostStatus": [
        {
          "AcquirerID": 0,
          "IsReachableFlag": true
        }
      ]
    },
    "DisplayResponse": {
      "OutputResult": [
        {
          "Device": "CashierDisplay",
          "InfoQualify": "Status",
          "Response": {
            "Result": "Success",
            "ErrorCondition": "Aborted",
            "AdditionalResponse": "string"
          }
        }
      ]
    },
    "EnableServiceResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      }
    },
    "GetTotalsResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "POIReconciliationID": 0,
      "TransactionTotals": [
        {
          "PaymentInstrumentType": "Card",
          "AcquirerID": 0,
          "HostReconciliationID": "string",
          "CardBrand": "string",
          "POIID": "string",
          "SaleID": "string",
          "OperatorID": "string",
          "ShiftNumber": "string",
          "TotalsGroupID": "string",
          "PaymentCurrency": "string",
          "PaymentTotals": [
            {
              "TransactionType": "Debit",
              "TransactionCount": 0,
              "TransactionAmount": 0
            }
          ]
        }
      ]
    },
    "InputResponse": {
      "OutputResult": {
        "Device": "CashierDisplay",
        "InfoQualify": "Status",
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        }
      },
      "InputResult": {
        "Device": "CashierDisplay",
        "InfoQualify": "Status",
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "Input": {
          "InputCommand": "GetAnyKey",
          "ConfirmedFlag": true,
          "FunctionKey": 0,
          "TextInput": "string",
          "DigitInput": 0,
          "Password": "string",
          "MenuEntryNumber": [
            0
          ]
        }
      }
    },
    "LoginResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "POISystemData": {
        "DateTime": "1970-01-01T00:00:00Z",
        "POISoftware": {
          "ManufacturerID": "string",
          "ApplicationName": "string",
          "SoftwareVersion": "string",
          "CertificationCode": "string"
        },
        "POIStatus": {
          "GlobalStatus": "OK",
          "SecurityOKFlag": true,
          "PEDOKFlag": true,
          "CardReaderOKFlag": true,
          "PrinterStatus": "OK",
          "CommunicationOKFlag": true,
          "FraudPreventionFlag": true
        }
      },
      "TokenRequestStatus": true
    },
    "LogoutResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      }
    },
    "LoyaltyResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "POIData": {
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "POIReconciliationID": 0
      },
      "LoyaltyResult": [
        {
          "LoyaltyAccount": {
            "LoyaltyAccountID": {
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "IdentificationSupport": "NoCard",
              "LoyaltyID": "string"
            },
            "LoyaltyBrand": "string"
          },
          "CurrentBalance": 0,
          "LoyaltyAcquirerData": {
            "LoyaltyAcquirerID": "string",
            "ApprovalCode": "string",
            "LoyaltyTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "HostReconciliationID": "string"
          }
        }
      ],
      "PaymentReceipt": [
        {
          "DocumentQualifier": "SaleReceipt",
          "IntegratedPrintFlag": true,
          "RequiredSignatureFlag": false,
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          }
        }
      ]
    },
    "PaymentResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "POIData": {
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "POIReconciliationID": 0
      },
      "PaymentResult": {
        "PaymentType": "Normal",
        "PaymentInstrumentData": {
          "PaymentInstrumentType": "Card",
          "ProtectedCardData": "string",
          "CardData": {
            "PaymentBrand": "string",
            "MaskedPan": "string",
            "PaymentAccountRef": "string",
            "EntryMode": [
              "RFID"
            ],
            "CardCountryCode": 3,
            "ProtectedCardData": "string",
            "SensitiveCardData": {
              "PAN": 8,
              "CardSeqNumb": 2,
              "ExpiryDate": 4,
              "TrackData": [
                {
                  "TrackNumb": 2,
                  "TrackFormat": "ISO",
                  "TrackValue": "string"
                }
              ]
            },
            "PaymentToken": {
              "TokenRequestedType": "Transaction",
              "TokenValue": "string",
              "ExpiryDateTime": "1970-01-01T00:00:00Z"
            }
          },
          "CheckData": {
            "BankID": "string",
            "AccountNumber": "string",
            "CheckNumber": "string",
            "TrackData": {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            },
            "CheckCardNumber": "string",
            "TypeCode": "Personal",
            "Country": "string"
          },
          "MobileData": {
            "MobileCountryCode": 3,
            "MobileNetworkCode": 2,
            "MaskedMSISDN": 0,
            "Geolocation": {
              "GeographicCoordinates": {
                "Latitude": "string",
                "Longitude": "string"
              },
              "UTMCoordinates": {
                "UTMZone": "string",
                "UTMEastward": "string",
                "UTMNorthward": "string"
              }
            },
            "ProtectedMobileData": "string",
            "SensitiveMobileData": {
              "MSISDN": 0,
              "IMSI": 0,
              "IMEI": 0
            }
          },
          "StoredValueAccountID": {
            "StoredValueAccountType": "GiftCard",
            "StoredValueProvider": "string",
            "OwnerName": "string",
            "ExpiryDate": 4,
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "StoredValueID": "string"
          }
        },
        "AmountsResp": {
          "Currency": "string",
          "AuthorizedAmount": 0,
          "TotalRebatesAmount": 0,
          "TotalFeesAmount": 0,
          "CashBackAmount": 0,
          "TipAmount": 0
        },
        "Instalment": {
          "InstalmentType": "DeferredInstalments",
          "SequenceNumber": 0,
          "PlanID": "string",
          "Period": 0,
          "PeriodUnit": "Daily",
          "FirstPaymentDate": "1970-01-01",
          "TotalNbOfPayments": 0,
          "CumulativeAmount": 0,
          "FirstAmount": 0,
          "Charges": 0
        },
        "CurrencyConversion": [
          {
            "CustomerApprovedFlag": true,
            "ConvertedAmount": {
              "AmountValue": 0,
              "Currency": "string"
            },
            "Rate": 0,
            "Markup": 0,
            "Commission": 0,
            "Declaration": "string"
          }
        ],
        "MerchantOverrideFlag": false,
        "CapturedSignature": {
          "AreaSize": {
            "X": "string",
            "Y": "string"
          },
          "SignaturePoint": [
            {
              "X": "string",
              "Y": "string"
            }
          ]
        },
        "ProtectedSignature": "string",
        "CustomerLanguage": "string",
        "OnlineFlag": true,
        "AuthenticationMethod": [
          "Bypass"
        ],
        "ValidityDate": "1970-01-01",
        "PaymentAcquirerData": {
          "AcquirerID": 0,
          "MerchantID": "string",
          "AcquirerPOIID": "string",
          "AcquirerTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "ApprovalCode": "string",
          "HostReconciliationID": "string"
        }
      },
      "LoyaltyResult": [
        {
          "LoyaltyAccount": {
            "LoyaltyAccountID": {
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "IdentificationSupport": "NoCard",
              "LoyaltyID": "string"
            },
            "LoyaltyBrand": "string"
          },
          "CurrentBalance": 0,
          "LoyaltyAcquirerData": {
            "LoyaltyAcquirerID": "string",
            "ApprovalCode": "string",
            "LoyaltyTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "HostReconciliationID": "string"
          }
        }
      ],
      "PaymentReceipt": [
        {
          "DocumentQualifier": "SaleReceipt",
          "IntegratedPrintFlag": true,
          "RequiredSignatureFlag": false,
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          }
        }
      ]
    },
    "PrintResponse": {
      "DocumentQualifier": "SaleReceipt",
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      }
    },
    "CardReaderAPDUResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "APDUData": "string",
      "CardStatusWords": "string"
    },
    "ReconciliationResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "ReconciliationType": "SaleReconciliation",
      "POIReconciliationID": 0,
      "TransactionTotals": [
        {
          "PaymentInstrumentType": "Card",
          "AcquirerID": 0,
          "HostReconciliationID": "string",
          "CardBrand": "string",
          "POIID": "string",
          "SaleID": "string",
          "OperatorID": "string",
          "ShiftNumber": "string",
          "TotalsGroupID": "string",
          "PaymentCurrency": "string",
          "PaymentTotals": [
            {
              "TransactionType": "Debit",
              "TransactionCount": 0,
              "TransactionAmount": 0
            }
          ]
        }
      ]
    },
    "ReversalResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "POIData": {
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "POIReconciliationID": 0
      },
      "OriginalPOITransaction": {
        "SaleID": "string",
        "POIID": "string",
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "ReuseCardDataFlag": true,
        "ApprovalCode": "string",
        "AcquirerID": 0,
        "AmountValue": 0,
        "HostTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        }
      },
      "ReversedAmount": 0,
      "PaymentReceipt": [
        {
          "DocumentQualifier": "SaleReceipt",
          "IntegratedPrintFlag": true,
          "RequiredSignatureFlag": false,
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          }
        }
      ]
    },
    "StoredValueResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "POIData": {
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "POIReconciliationID": 0
      },
      "StoredValueResult": [
        {
          "StoredValueTransactionType": "Reserve",
          "ProductCode": 1,
          "EanUpc": 0,
          "ItemAmount": 0,
          "Currency": "string",
          "StoredValueAccountStatus": {
            "StoredValueAccountID": {
              "StoredValueAccountType": "GiftCard",
              "StoredValueProvider": "string",
              "OwnerName": "string",
              "ExpiryDate": 4,
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "StoredValueID": "string"
            },
            "CurrentBalance": 0
          },
          "HostTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          }
        }
      ],
      "PaymentReceipt": [
        {
          "DocumentQualifier": "SaleReceipt",
          "IntegratedPrintFlag": true,
          "RequiredSignatureFlag": false,
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          }
        }
      ]
    },
    "TransactionStatusResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "MessageReference": {
        "MessageCategory": "Abort",
        "ServiceID": "string",
        "DeviceID": "string",
        "SaleID": "string",
        "POIID": "string"
      },
      "RepeatedMessageResponse": {
        "MessageHeader": {
          "ProtocolVersion": "string",
          "MessageClass": "Service",
          "MessageCategory": "Abort",
          "MessageType": "Request",
          "ServiceID": "string",
          "DeviceID": "string",
          "SaleID": "string",
          "POIID": "string"
        },
        "RepeatedResponseMessageBody": {
          "LoyaltyResponse": {
            "Response": {
              "Result": "Success",
              "ErrorCondition": "Aborted",
              "AdditionalResponse": "string"
            },
            "SaleData": {
              "OperatorID": "string",
              "OperatorLanguage": "string",
              "ShiftNumber": "string",
              "SaleTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "SaleReferenceID": "string",
              "SaleTerminalData": {
                "TotalsGroupID": "string"
              },
              "TokenRequestedType": "Transaction",
              "CustomerOrderID": "string",
              "CustomerOrderReq": [
                "Open"
              ],
              "SaleToPOIData": "string",
              "SaleToAcquirerData": "string",
              "SaleToIssuerData": {
                "StatementReference": "string"
              }
            },
            "POIData": {
              "POITransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "POIReconciliationID": 0
            },
            "LoyaltyResult": [
              {
                "LoyaltyAccount": {
                  "LoyaltyAccountID": {
                    "EntryMode": [
                      "RFID"
                    ],
                    "IdentificationType": "PAN",
                    "IdentificationSupport": "NoCard",
                    "LoyaltyID": "string"
                  },
                  "LoyaltyBrand": "string"
                },
                "CurrentBalance": 0,
                "LoyaltyAcquirerData": {
                  "LoyaltyAcquirerID": "string",
                  "ApprovalCode": "string",
                  "LoyaltyTransactionID": {
                    "TransactionID": "string",
                    "TimeStamp": "1970-01-01T00:00:00Z"
                  },
                  "HostReconciliationID": "string"
                }
              }
            ],
            "PaymentReceipt": [
              {
                "DocumentQualifier": "SaleReceipt",
                "IntegratedPrintFlag": true,
                "RequiredSignatureFlag": false,
                "OutputContent": {
                  "OutputFormat": "MessageRef",
                  "PredefinedContent": {
                    "ReferenceID": "string",
                    "Language": "string"
                  },
                  "OutputText": [
                    {
                      "Text": "string",
                      "CharacterSet": 0,
                      "StartRow": 1,
                      "StartColumn": 1,
                      "CharacterWidth": "SingleWidth",
                      "CharacterHeight": "SingleHeight",
                      "CharacterStyle": "Normal",
                      "Alignment": "Left",
                      "EndOfLineFlag": true
                    }
                  ],
                  "OutputXHTML": "string",
                  "OutputBarcode": {
                    "BarcodeValue": "string"
                  }
                }
              }
            ]
          },
          "PaymentResponse": {
            "Response": {
              "Result": "Success",
              "ErrorCondition": "Aborted",
              "AdditionalResponse": "string"
            },
            "SaleData": {
              "OperatorID": "string",
              "OperatorLanguage": "string",
              "ShiftNumber": "string",
              "SaleTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "SaleReferenceID": "string",
              "SaleTerminalData": {
                "TotalsGroupID": "string"
              },
              "TokenRequestedType": "Transaction",
              "CustomerOrderID": "string",
              "CustomerOrderReq": [
                "Open"
              ],
              "SaleToPOIData": "string",
              "SaleToAcquirerData": "string",
              "SaleToIssuerData": {
                "StatementReference": "string"
              }
            },
            "POIData": {
              "POITransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "POIReconciliationID": 0
            },
            "PaymentResult": {
              "PaymentType": "Normal",
              "PaymentInstrumentData": {
                "PaymentInstrumentType": "Card",
                "ProtectedCardData": "string",
                "CardData": {
                  "PaymentBrand": "string",
                  "MaskedPan": "string",
                  "PaymentAccountRef": "string",
                  "EntryMode": [
                    "RFID"
                  ],
                  "CardCountryCode": 3,
                  "ProtectedCardData": "string",
                  "SensitiveCardData": {
                    "PAN": 8,
                    "CardSeqNumb": 2,
                    "ExpiryDate": 4,
                    "TrackData": [
                      {
                        "TrackNumb": 2,
                        "TrackFormat": "ISO",
                        "TrackValue": "string"
                      }
                    ]
                  },
                  "PaymentToken": {
                    "TokenRequestedType": "Transaction",
                    "TokenValue": "string",
                    "ExpiryDateTime": "1970-01-01T00:00:00Z"
                  }
                },
                "CheckData": {
                  "BankID": "string",
                  "AccountNumber": "string",
                  "CheckNumber": "string",
                  "TrackData": {
                    "TrackNumb": 2,
                    "TrackFormat": "ISO",
                    "TrackValue": "string"
                  },
                  "CheckCardNumber": "string",
                  "TypeCode": "Personal",
                  "Country": "string"
                },
                "MobileData": {
                  "MobileCountryCode": 3,
                  "MobileNetworkCode": 2,
                  "MaskedMSISDN": 0,
                  "Geolocation": {
                    "GeographicCoordinates": {
                      "Latitude": "string",
                      "Longitude": "string"
                    },
                    "UTMCoordinates": {
                      "UTMZone": "string",
                      "UTMEastward": "string",
                      "UTMNorthward": "string"
                    }
                  },
                  "ProtectedMobileData": "string",
                  "SensitiveMobileData": {
                    "MSISDN": 0,
                    "IMSI": 0,
                    "IMEI": 0
                  }
                },
                "StoredValueAccountID": {
                  "StoredValueAccountType": "GiftCard",
                  "StoredValueProvider": "string",
                  "OwnerName": "string",
                  "ExpiryDate": 4,
                  "EntryMode": [
                    "RFID"
                  ],
                  "IdentificationType": "PAN",
                  "StoredValueID": "string"
                }
              },
              "AmountsResp": {
                "Currency": "string",
                "AuthorizedAmount": 0,
                "TotalRebatesAmount": 0,
                "TotalFeesAmount": 0,
                "CashBackAmount": 0,
                "TipAmount": 0
              },
              "Instalment": {
                "InstalmentType": "DeferredInstalments",
                "SequenceNumber": 0,
                "PlanID": "string",
                "Period": 0,
                "PeriodUnit": "Daily",
                "FirstPaymentDate": "1970-01-01",
                "TotalNbOfPayments": 0,
                "CumulativeAmount": 0,
                "FirstAmount": 0,
                "Charges": 0
              },
              "CurrencyConversion": [
                {
                  "CustomerApprovedFlag": true,
                  "ConvertedAmount": {
                    "AmountValue": 0,
                    "Currency": "string"
                  },
                  "Rate": 0,
                  "Markup": 0,
                  "Commission": 0,
                  "Declaration": "string"
                }
              ],
              "MerchantOverrideFlag": false,
              "CapturedSignature": {
                "AreaSize": {
                  "X": "string",
                  "Y": "string"
                },
                "SignaturePoint": [
                  {
                    "X": "string",
                    "Y": "string"
                  }
                ]
              },
              "ProtectedSignature": "string",
              "CustomerLanguage": "string",
              "OnlineFlag": true,
              "AuthenticationMethod": [
                "Bypass"
              ],
              "ValidityDate": "1970-01-01",
              "PaymentAcquirerData": {
                "AcquirerID": 0,
                "MerchantID": "string",
                "AcquirerPOIID": "string",
                "AcquirerTransactionID": {
                  "TransactionID": "string",
                  "TimeStamp": "1970-01-01T00:00:00Z"
                },
                "ApprovalCode": "string",
                "HostReconciliationID": "string"
              }
            },
            "LoyaltyResult": [
              {
                "LoyaltyAccount": {
                  "LoyaltyAccountID": {
                    "EntryMode": [
                      "RFID"
                    ],
                    "IdentificationType": "PAN",
                    "IdentificationSupport": "NoCard",
                    "LoyaltyID": "string"
                  },
                  "LoyaltyBrand": "string"
                },
                "CurrentBalance": 0,
                "LoyaltyAcquirerData": {
                  "LoyaltyAcquirerID": "string",
                  "ApprovalCode": "string",
                  "LoyaltyTransactionID": {
                    "TransactionID": "string",
                    "TimeStamp": "1970-01-01T00:00:00Z"
                  },
                  "HostReconciliationID": "string"
                }
              }
            ],
            "PaymentReceipt": [
              {
                "DocumentQualifier": "SaleReceipt",
                "IntegratedPrintFlag": true,
                "RequiredSignatureFlag": false,
                "OutputContent": {
                  "OutputFormat": "MessageRef",
                  "PredefinedContent": {
                    "ReferenceID": "string",
                    "Language": "string"
                  },
                  "OutputText": [
                    {
                      "Text": "string",
                      "CharacterSet": 0,
                      "StartRow": 1,
                      "StartColumn": 1,
                      "CharacterWidth": "SingleWidth",
                      "CharacterHeight": "SingleHeight",
                      "CharacterStyle": "Normal",
                      "Alignment": "Left",
                      "EndOfLineFlag": true
                    }
                  ],
                  "OutputXHTML": "string",
                  "OutputBarcode": {
                    "BarcodeValue": "string"
                  }
                }
              }
            ]
          },
          "ReversalResponse": {
            "Response": {
              "Result": "Success",
              "ErrorCondition": "Aborted",
              "AdditionalResponse": "string"
            },
            "POIData": {
              "POITransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "POIReconciliationID": 0
            },
            "OriginalPOITransaction": {
              "SaleID": "string",
              "POIID": "string",
              "POITransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "ReuseCardDataFlag": true,
              "ApprovalCode": "string",
              "AcquirerID": 0,
              "AmountValue": 0,
              "HostTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              }
            },
            "ReversedAmount": 0,
            "PaymentReceipt": [
              {
                "DocumentQualifier": "SaleReceipt",
                "IntegratedPrintFlag": true,
                "RequiredSignatureFlag": false,
                "OutputContent": {
                  "OutputFormat": "MessageRef",
                  "PredefinedContent": {
                    "ReferenceID": "string",
                    "Language": "string"
                  },
                  "OutputText": [
                    {
                      "Text": "string",
                      "CharacterSet": 0,
                      "StartRow": 1,
                      "StartColumn": 1,
                      "CharacterWidth": "SingleWidth",
                      "CharacterHeight": "SingleHeight",
                      "CharacterStyle": "Normal",
                      "Alignment": "Left",
                      "EndOfLineFlag": true
                    }
                  ],
                  "OutputXHTML": "string",
                  "OutputBarcode": {
                    "BarcodeValue": "string"
                  }
                }
              }
            ]
          },
          "StoredValueResponse": {
            "Response": {
              "Result": "Success",
              "ErrorCondition": "Aborted",
              "AdditionalResponse": "string"
            },
            "SaleData": {
              "OperatorID": "string",
              "OperatorLanguage": "string",
              "ShiftNumber": "string",
              "SaleTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "SaleReferenceID": "string",
              "SaleTerminalData": {
                "TotalsGroupID": "string"
              },
              "TokenRequestedType": "Transaction",
              "CustomerOrderID": "string",
              "CustomerOrderReq": [
                "Open"
              ],
              "SaleToPOIData": "string",
              "SaleToAcquirerData": "string",
              "SaleToIssuerData": {
                "StatementReference": "string"
              }
            },
            "POIData": {
              "POITransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "POIReconciliationID": 0
            },
            "StoredValueResult": [
              {
                "StoredValueTransactionType": "Reserve",
                "ProductCode": 1,
                "EanUpc": 0,
                "ItemAmount": 0,
                "Currency": "string",
                "StoredValueAccountStatus": {
                  "StoredValueAccountID": {
                    "StoredValueAccountType": "GiftCard",
                    "StoredValueProvider": "string",
                    "OwnerName": "string",
                    "ExpiryDate": 4,
                    "EntryMode": [
                      "RFID"
                    ],
                    "IdentificationType": "PAN",
                    "StoredValueID": "string"
                  },
                  "CurrentBalance": 0
                },
                "HostTransactionID": {
                  "TransactionID": "string",
                  "TimeStamp": "1970-01-01T00:00:00Z"
                }
              }
            ],
            "PaymentReceipt": [
              {
                "DocumentQualifier": "SaleReceipt",
                "IntegratedPrintFlag": true,
                "RequiredSignatureFlag": false,
                "OutputContent": {
                  "OutputFormat": "MessageRef",
                  "PredefinedContent": {
                    "ReferenceID": "string",
                    "Language": "string"
                  },
                  "OutputText": [
                    {
                      "Text": "string",
                      "CharacterSet": 0,
                      "StartRow": 1,
                      "StartColumn": 1,
                      "CharacterWidth": "SingleWidth",
                      "CharacterHeight": "SingleHeight",
                      "CharacterStyle": "Normal",
                      "Alignment": "Left",
                      "EndOfLineFlag": true
                    }
                  ],
                  "OutputXHTML": "string",
                  "OutputBarcode": {
                    "BarcodeValue": "string"
                  }
                }
              }
            ]
          },
          "CardAcquisitionResponse": {
            "Response": {
              "Result": "Success",
              "ErrorCondition": "Aborted",
              "AdditionalResponse": "string"
            },
            "SaleData": {
              "OperatorID": "string",
              "OperatorLanguage": "string",
              "ShiftNumber": "string",
              "SaleTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "SaleReferenceID": "string",
              "SaleTerminalData": {
                "TotalsGroupID": "string"
              },
              "TokenRequestedType": "Transaction",
              "CustomerOrderID": "string",
              "CustomerOrderReq": [
                "Open"
              ],
              "SaleToPOIData": "string",
              "SaleToAcquirerData": "string",
              "SaleToIssuerData": {
                "StatementReference": "string"
              }
            },
            "POIData": {
              "POITransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "POIReconciliationID": 0
            },
            "PaymentBrand": [
              "string"
            ],
            "PaymentInstrumentData": {
              "PaymentInstrumentType": "Card",
              "ProtectedCardData": "string",
              "CardData": {
                "PaymentBrand": "string",
                "MaskedPan": "string",
                "PaymentAccountRef": "string",
                "EntryMode": [
                  "RFID"
                ],
                "CardCountryCode": 3,
                "ProtectedCardData": "string",
                "SensitiveCardData": {
                  "PAN": 8,
                  "CardSeqNumb": 2,
                  "ExpiryDate": 4,
                  "TrackData": [
                    {
                      "TrackNumb": 2,
                      "TrackFormat": "ISO",
                      "TrackValue": "string"
                    }
                  ]
                },
                "PaymentToken": {
                  "TokenRequestedType": "Transaction",
                  "TokenValue": "string",
                  "ExpiryDateTime": "1970-01-01T00:00:00Z"
                }
              },
              "CheckData": {
                "BankID": "string",
                "AccountNumber": "string",
                "CheckNumber": "string",
                "TrackData": {
                  "TrackNumb": 2,
                  "TrackFormat": "ISO",
                  "TrackValue": "string"
                },
                "CheckCardNumber": "string",
                "TypeCode": "Personal",
                "Country": "string"
              },
              "MobileData": {
                "MobileCountryCode": 3,
                "MobileNetworkCode": 2,
                "MaskedMSISDN": 0,
                "Geolocation": {
                  "GeographicCoordinates": {
                    "Latitude": "string",
                    "Longitude": "string"
                  },
                  "UTMCoordinates": {
                    "UTMZone": "string",
                    "UTMEastward": "string",
                    "UTMNorthward": "string"
                  }
                },
                "ProtectedMobileData": "string",
                "SensitiveMobileData": {
                  "MSISDN": 0,
                  "IMSI": 0,
                  "IMEI": 0
                }
              },
              "StoredValueAccountID": {
                "StoredValueAccountType": "GiftCard",
                "StoredValueProvider": "string",
                "OwnerName": "string",
                "ExpiryDate": 4,
                "EntryMode": [
                  "RFID"
                ],
                "IdentificationType": "PAN",
                "StoredValueID": "string"
              }
            },
            "LoyaltyAccount": [
              {
                "LoyaltyAccountID": {
                  "EntryMode": [
                    "RFID"
                  ],
                  "IdentificationType": "PAN",
                  "IdentificationSupport": "NoCard",
                  "LoyaltyID": "string"
                },
                "LoyaltyBrand": "string"
              }
            ]
          },
          "CardReaderAPDUResponse": {
            "Response": {
              "Result": "Success",
              "ErrorCondition": "Aborted",
              "AdditionalResponse": "string"
            },
            "APDUData": "string",
            "CardStatusWords": "string"
          }
        }
      }
    }
  }
}
```

The response payload of the Adyen Terminal API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SaleToPOIResponse|[SaleToPOIResponse](#schemasaletopoiresponse)|true|none|The SaleToPOIResponse message pair is a container for the response message content. It contains a MessageHeader and a message body.|

<h2 id="tocS_SaleToPOIRequest">SaleToPOIRequest</h2>
<!-- backwards compatibility -->
<a id="schemasaletopoirequest"></a>
<a id="schema_SaleToPOIRequest"></a>
<a id="tocSsaletopoirequest"></a>
<a id="tocssaletopoirequest"></a>

```json
{
  "MessageHeader": {
    "ProtocolVersion": "string",
    "MessageClass": "Service",
    "MessageCategory": "Abort",
    "MessageType": "Request",
    "ServiceID": "string",
    "DeviceID": "string",
    "SaleID": "string",
    "POIID": "string"
  },
  "AbortRequest": {
    "MessageReference": {
      "MessageCategory": "Abort",
      "ServiceID": "string",
      "DeviceID": "string",
      "SaleID": "string",
      "POIID": "string"
    },
    "AbortReason": "string",
    "DisplayOutput": {
      "ResponseRequiredFlag": true,
      "MinimumDisplayTime": 0,
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      },
      "MenuEntry": [
        {
          "MenuEntryTag": "Selectable",
          "DefaultSelectedFlag": false,
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string"
        }
      ],
      "OutputSignature": "string"
    }
  },
  "BalanceInquiryRequest": {
    "PaymentAccountReq": {
      "AccountType": "Default",
      "CardAcquisitionReference": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "PaymentInstrumentData": {
        "PaymentInstrumentType": "Card",
        "ProtectedCardData": "string",
        "CardData": {
          "PaymentBrand": "string",
          "MaskedPan": "string",
          "PaymentAccountRef": "string",
          "EntryMode": [
            "RFID"
          ],
          "CardCountryCode": 3,
          "ProtectedCardData": "string",
          "SensitiveCardData": {
            "PAN": 8,
            "CardSeqNumb": 2,
            "ExpiryDate": 4,
            "TrackData": [
              {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              }
            ]
          },
          "PaymentToken": {
            "TokenRequestedType": "Transaction",
            "TokenValue": "string",
            "ExpiryDateTime": "1970-01-01T00:00:00Z"
          }
        },
        "CheckData": {
          "BankID": "string",
          "AccountNumber": "string",
          "CheckNumber": "string",
          "TrackData": {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          },
          "CheckCardNumber": "string",
          "TypeCode": "Personal",
          "Country": "string"
        },
        "MobileData": {
          "MobileCountryCode": 3,
          "MobileNetworkCode": 2,
          "MaskedMSISDN": 0,
          "Geolocation": {
            "GeographicCoordinates": {
              "Latitude": "string",
              "Longitude": "string"
            },
            "UTMCoordinates": {
              "UTMZone": "string",
              "UTMEastward": "string",
              "UTMNorthward": "string"
            }
          },
          "ProtectedMobileData": "string",
          "SensitiveMobileData": {
            "MSISDN": 0,
            "IMSI": 0,
            "IMEI": 0
          }
        },
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        }
      }
    },
    "LoyaltyAccountReq": {
      "CardAcquisitionReference": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "LoyaltyAccountID": {
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "IdentificationSupport": "NoCard",
        "LoyaltyID": "string"
      }
    }
  },
  "CardAcquisitionRequest": {
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "CardAcquisitionTransaction": {
      "AllowedPaymentBrand": [
        "string"
      ],
      "AllowedLoyaltyBrand": [
        "string"
      ],
      "LoyaltyHandling": "Forbidden",
      "CustomerLanguage": "string",
      "ForceEntryMode": [
        "RFID"
      ],
      "ForceCustomerSelectionFlag": true,
      "TotalAmount": 0,
      "PaymentType": "Normal",
      "CashBackFlag": true
    }
  },
  "AdminRequest": {
    "ServiceIdentification": "string"
  },
  "DiagnosisRequest": {
    "POIID": "string",
    "HostDiagnosisFlag": false,
    "AcquirerID": [
      0
    ]
  },
  "DisplayRequest": {
    "DisplayOutput": [
      {
        "ResponseRequiredFlag": true,
        "MinimumDisplayTime": 0,
        "Device": "CashierDisplay",
        "InfoQualify": "Status",
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        },
        "MenuEntry": [
          {
            "MenuEntryTag": "Selectable",
            "DefaultSelectedFlag": false,
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string"
          }
        ],
        "OutputSignature": "string"
      }
    ]
  },
  "EnableServiceRequest": {
    "TransactionAction": "StartTransaction",
    "ServicesEnabled": [
      "CardAcquisition"
    ],
    "DisplayOutput": {
      "ResponseRequiredFlag": true,
      "MinimumDisplayTime": 0,
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      },
      "MenuEntry": [
        {
          "MenuEntryTag": "Selectable",
          "DefaultSelectedFlag": false,
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string"
        }
      ],
      "OutputSignature": "string"
    }
  },
  "EventNotification": {
    "TimeStamp": "1970-01-01T00:00:00Z",
    "EventToNotify": "BeginMaintenance",
    "EventDetails": "string",
    "RejectedMessage": "string",
    "MaintenanceRequiredFlag": false,
    "DisplayOutput": [
      {
        "ResponseRequiredFlag": true,
        "MinimumDisplayTime": 0,
        "Device": "CashierDisplay",
        "InfoQualify": "Status",
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        },
        "MenuEntry": [
          {
            "MenuEntryTag": "Selectable",
            "DefaultSelectedFlag": false,
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string"
          }
        ],
        "OutputSignature": "string"
      }
    ]
  },
  "GetTotalsRequest": {
    "TotalDetails": [
      "POIID"
    ],
    "TotalFilter": {
      "POIID": "string",
      "SaleID": "string",
      "OperatorID": "string",
      "ShiftNumber": "string",
      "TotalsGroupID": "string"
    }
  },
  "InputRequest": {
    "DisplayOutput": {
      "ResponseRequiredFlag": true,
      "MinimumDisplayTime": 0,
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      },
      "MenuEntry": [
        {
          "MenuEntryTag": "Selectable",
          "DefaultSelectedFlag": false,
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string"
        }
      ],
      "OutputSignature": "string"
    },
    "InputData": {
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "InputCommand": "GetAnyKey",
      "NotifyCardInputFlag": false,
      "MaxInputTime": 0,
      "ImmediateResponseFlag": false,
      "MinLength": 0,
      "MaxLength": 0,
      "MaxDecimalLength": 0,
      "WaitUserValidationFlag": true,
      "DefaultInputString": "string",
      "DefaultLayoutString": "string",
      "StringMask": "string",
      "FromRightToLeftFlag": false,
      "MaskCharactersFlag": false,
      "BeepKeyFlag": false,
      "GlobalCorrectionFlag": false,
      "DisableCancelFlag": false,
      "DisableCorrectFlag": false,
      "DisableValidFlag": false,
      "MenuBackFlag": false
    }
  },
  "InputUpdate": {
    "MessageReference": {
      "MessageCategory": "Abort",
      "ServiceID": "string",
      "DeviceID": "string",
      "SaleID": "string",
      "POIID": "string"
    },
    "OutputContent": {
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string",
      "OutputBarcode": {
        "BarcodeValue": "string"
      }
    },
    "MenuEntry": [
      {
        "MenuEntryTag": "Selectable",
        "DefaultSelectedFlag": false,
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string"
      }
    ],
    "OutputSignature": "string",
    "MinLength": 0,
    "MaxLength": 0,
    "MaxDecimalLength": 0
  },
  "LoginRequest": {
    "DateTime": "1970-01-01T00:00:00Z",
    "SaleSoftware": {
      "ManufacturerID": "string",
      "ApplicationName": "string",
      "SoftwareVersion": "string",
      "CertificationCode": "string"
    },
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TrainingModeFlag": false,
    "OperatorLanguage": "string",
    "OperatorID": "string",
    "ShiftNumber": "string",
    "TokenRequestedType": "Transaction",
    "CustomerOrderReq": [
      "Open"
    ],
    "POISerialNumber": "string"
  },
  "LogoutRequest": {
    "MaintenanceAllowed": false
  },
  "PaymentRequest": {
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "PaymentTransaction": {
      "AmountsReq": {
        "Currency": "string",
        "RequestedAmount": 0,
        "CashBackAmount": 0,
        "TipAmount": 0,
        "PaidAmount": 0,
        "MinimumAmountToDeliver": 0,
        "MaximumCashBackAmount": 0,
        "MinimumSplitAmount": 0
      },
      "OriginalPOITransaction": {
        "SaleID": "string",
        "POIID": "string",
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "ReuseCardDataFlag": true,
        "ApprovalCode": "string",
        "AcquirerID": 0,
        "AmountValue": 0,
        "HostTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        }
      },
      "TransactionConditions": {
        "AllowedPaymentBrand": [
          "string"
        ],
        "AcquirerID": [
          0
        ],
        "DebitPreferredFlag": true,
        "AllowedLoyaltyBrand": [
          "string"
        ],
        "LoyaltyHandling": "Forbidden",
        "CustomerLanguage": "string",
        "ForceOnlineFlag": false,
        "ForceEntryMode": [
          "RFID"
        ],
        "MerchantCategoryCode": "string"
      }
    },
    "PaymentData": {
      "PaymentType": "Normal",
      "SplitPaymentFlag": false,
      "RequestedValidityDate": "1970-01-01",
      "CardAcquisitionReference": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "Instalment": {
        "InstalmentType": "DeferredInstalments",
        "SequenceNumber": 0,
        "PlanID": "string",
        "Period": 0,
        "PeriodUnit": "Daily",
        "FirstPaymentDate": "1970-01-01",
        "TotalNbOfPayments": 0,
        "CumulativeAmount": 0,
        "FirstAmount": 0,
        "Charges": 0
      },
      "PaymentInstrumentData": {
        "PaymentInstrumentType": "Card",
        "ProtectedCardData": "string",
        "CardData": {
          "PaymentBrand": "string",
          "MaskedPan": "string",
          "PaymentAccountRef": "string",
          "EntryMode": [
            "RFID"
          ],
          "CardCountryCode": 3,
          "ProtectedCardData": "string",
          "SensitiveCardData": {
            "PAN": 8,
            "CardSeqNumb": 2,
            "ExpiryDate": 4,
            "TrackData": [
              {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              }
            ]
          },
          "PaymentToken": {
            "TokenRequestedType": "Transaction",
            "TokenValue": "string",
            "ExpiryDateTime": "1970-01-01T00:00:00Z"
          }
        },
        "CheckData": {
          "BankID": "string",
          "AccountNumber": "string",
          "CheckNumber": "string",
          "TrackData": {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          },
          "CheckCardNumber": "string",
          "TypeCode": "Personal",
          "Country": "string"
        },
        "MobileData": {
          "MobileCountryCode": 3,
          "MobileNetworkCode": 2,
          "MaskedMSISDN": 0,
          "Geolocation": {
            "GeographicCoordinates": {
              "Latitude": "string",
              "Longitude": "string"
            },
            "UTMCoordinates": {
              "UTMZone": "string",
              "UTMEastward": "string",
              "UTMNorthward": "string"
            }
          },
          "ProtectedMobileData": "string",
          "SensitiveMobileData": {
            "MSISDN": 0,
            "IMSI": 0,
            "IMEI": 0
          }
        },
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        }
      }
    },
    "LoyaltyData": [
      {
        "CardAcquisitionReference": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "LoyaltyAccountID": {
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "IdentificationSupport": "NoCard",
          "LoyaltyID": "string"
        }
      }
    ]
  },
  "PrintRequest": {
    "PrintOutput": {
      "DocumentQualifier": "SaleReceipt",
      "ResponseMode": "NotRequired",
      "IntegratedPrintFlag": false,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  },
  "CardReaderAPDURequest": {
    "APDUClass": "string",
    "APDUInstruction": "string",
    "APDUPar1": "string",
    "APDUPar2": "string",
    "APDUData": "string",
    "APDUExpectedLength": "string"
  },
  "ReconciliationRequest": {
    "ReconciliationType": "SaleReconciliation",
    "AcquirerID": [
      0
    ],
    "POIReconciliationID": 0
  },
  "ReversalRequest": {
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "OriginalPOITransaction": {
      "SaleID": "string",
      "POIID": "string",
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ReuseCardDataFlag": true,
      "ApprovalCode": "string",
      "AcquirerID": 0,
      "AmountValue": 0,
      "HostTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      }
    },
    "ReversedAmount": 0,
    "ReversalReason": "CustCancel"
  },
  "StoredValueRequest": {
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "StoredValueData": [
      {
        "StoredValueProvider": "string",
        "StoredValueTransactionType": "Reserve",
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        },
        "OriginalPOITransaction": {
          "SaleID": "string",
          "POIID": "string",
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "ReuseCardDataFlag": true,
          "ApprovalCode": "string",
          "AcquirerID": 0,
          "AmountValue": 0,
          "HostTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          }
        },
        "ProductCode": 1,
        "EanUpc": 0,
        "ItemAmount": 0,
        "Currency": "string"
      }
    ]
  },
  "TransactionStatusRequest": {
    "MessageReference": {
      "MessageCategory": "Abort",
      "ServiceID": "string",
      "DeviceID": "string",
      "SaleID": "string",
      "POIID": "string"
    },
    "ReceiptReprintFlag": false,
    "DocumentQualifier": [
      "SaleReceipt"
    ]
  }
}
```

The SaleToPOIRequest message pair is a container for the request message content. It contains a MessageHeader and a message body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageHeader|[MessageHeader](#schemamessageheader)|true|none|Message header of the Sale to POI protocol message.<br>It conveys Information related to the Sale to POI protocol management.|
|AbortRequest|[AbortRequest](#schemaabortrequest)|false|none|Content of the Abort Request message.|
|BalanceInquiryRequest|[BalanceInquiryRequest](#schemabalanceinquiryrequest)|false|none|Content of the Balance Inquiry Request message.|
|CardAcquisitionRequest|[CardAcquisitionRequest](#schemacardacquisitionrequest)|false|none|Content of the Card Acquisition Request message.|
|AdminRequest|[AdminRequest](#schemaadminrequest)|false|none|Content of the Admin Request message.|
|DiagnosisRequest|[DiagnosisRequest](#schemadiagnosisrequest)|false|none|Content of the Diagnosis Request message.|
|DisplayRequest|[DisplayRequest](#schemadisplayrequest)|false|none|Content of the Display Request message.|
|EnableServiceRequest|[EnableServiceRequest](#schemaenableservicerequest)|false|none|Content of the Enable Service Request message.|
|EventNotification|[EventNotification](#schemaeventnotification)|false|none|Content of the EventNotification message.|
|GetTotalsRequest|[GetTotalsRequest](#schemagettotalsrequest)|false|none|Content of the Get Totals Request message.|
|InputRequest|[InputRequest](#schemainputrequest)|false|none|Content of the Input Request message.|
|InputUpdate|[InputUpdate](#schemainputupdate)|false|none|Content of the Input Update message.|
|LoginRequest|[LoginRequest](#schemaloginrequest)|false|none|Content of the Login Request message.|
|LogoutRequest|[LogoutRequest](#schemalogoutrequest)|false|none|Content of the Logout Request message.|
|PaymentRequest|[PaymentRequest](#schemapaymentrequest)|false|none|Content of the Payment Request message.|
|PrintRequest|[PrintRequest](#schemaprintrequest)|false|none|Content of the Print Request message.|
|CardReaderAPDURequest|[CardReaderAPDURequest](#schemacardreaderapdurequest)|false|none|Content of the Card Reader APDU Request message.|
|ReconciliationRequest|[ReconciliationRequest](#schemareconciliationrequest)|false|none|Content of the Reconciliation Request message.|
|ReversalRequest|[ReversalRequest](#schemareversalrequest)|false|none|Content of the Reversal Request message.|
|StoredValueRequest|[StoredValueRequest](#schemastoredvaluerequest)|false|none|Content of the Stored Value Request message.|
|TransactionStatusRequest|[TransactionStatusRequest](#schematransactionstatusrequest)|false|none|Content of the TransactionStatus Request message.|

<h2 id="tocS_SaleToPOIResponse">SaleToPOIResponse</h2>
<!-- backwards compatibility -->
<a id="schemasaletopoiresponse"></a>
<a id="schema_SaleToPOIResponse"></a>
<a id="tocSsaletopoiresponse"></a>
<a id="tocssaletopoiresponse"></a>

```json
{
  "MessageHeader": {
    "ProtocolVersion": "string",
    "MessageClass": "Service",
    "MessageCategory": "Abort",
    "MessageType": "Request",
    "ServiceID": "string",
    "DeviceID": "string",
    "SaleID": "string",
    "POIID": "string"
  },
  "BalanceInquiryResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "PaymentAccountStatus": {
      "PaymentInstrumentData": {
        "PaymentInstrumentType": "Card",
        "ProtectedCardData": "string",
        "CardData": {
          "PaymentBrand": "string",
          "MaskedPan": "string",
          "PaymentAccountRef": "string",
          "EntryMode": [
            "RFID"
          ],
          "CardCountryCode": 3,
          "ProtectedCardData": "string",
          "SensitiveCardData": {
            "PAN": 8,
            "CardSeqNumb": 2,
            "ExpiryDate": 4,
            "TrackData": [
              {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              }
            ]
          },
          "PaymentToken": {
            "TokenRequestedType": "Transaction",
            "TokenValue": "string",
            "ExpiryDateTime": "1970-01-01T00:00:00Z"
          }
        },
        "CheckData": {
          "BankID": "string",
          "AccountNumber": "string",
          "CheckNumber": "string",
          "TrackData": {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          },
          "CheckCardNumber": "string",
          "TypeCode": "Personal",
          "Country": "string"
        },
        "MobileData": {
          "MobileCountryCode": 3,
          "MobileNetworkCode": 2,
          "MaskedMSISDN": 0,
          "Geolocation": {
            "GeographicCoordinates": {
              "Latitude": "string",
              "Longitude": "string"
            },
            "UTMCoordinates": {
              "UTMZone": "string",
              "UTMEastward": "string",
              "UTMNorthward": "string"
            }
          },
          "ProtectedMobileData": "string",
          "SensitiveMobileData": {
            "MSISDN": 0,
            "IMSI": 0,
            "IMEI": 0
          }
        },
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        }
      },
      "CurrentBalance": 0,
      "Currency": "string",
      "PaymentAcquirerData": {
        "AcquirerID": 0,
        "MerchantID": "string",
        "AcquirerPOIID": "string",
        "AcquirerTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "ApprovalCode": "string",
        "HostReconciliationID": "string"
      }
    },
    "PaymentReceipt": [
      {
        "DocumentQualifier": "SaleReceipt",
        "IntegratedPrintFlag": true,
        "RequiredSignatureFlag": false,
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        }
      }
    ]
  },
  "CardAcquisitionResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "POIData": {
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "POIReconciliationID": 0
    },
    "PaymentBrand": [
      "string"
    ],
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    },
    "LoyaltyAccount": [
      {
        "LoyaltyAccountID": {
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "IdentificationSupport": "NoCard",
          "LoyaltyID": "string"
        },
        "LoyaltyBrand": "string"
      }
    ]
  },
  "AdminResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    }
  },
  "DiagnosisResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "POIStatus": {
      "GlobalStatus": "OK",
      "SecurityOKFlag": true,
      "PEDOKFlag": true,
      "CardReaderOKFlag": true,
      "PrinterStatus": "OK",
      "CommunicationOKFlag": true,
      "FraudPreventionFlag": true
    },
    "HostStatus": [
      {
        "AcquirerID": 0,
        "IsReachableFlag": true
      }
    ]
  },
  "DisplayResponse": {
    "OutputResult": [
      {
        "Device": "CashierDisplay",
        "InfoQualify": "Status",
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        }
      }
    ]
  },
  "EnableServiceResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    }
  },
  "GetTotalsResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "POIReconciliationID": 0,
    "TransactionTotals": [
      {
        "PaymentInstrumentType": "Card",
        "AcquirerID": 0,
        "HostReconciliationID": "string",
        "CardBrand": "string",
        "POIID": "string",
        "SaleID": "string",
        "OperatorID": "string",
        "ShiftNumber": "string",
        "TotalsGroupID": "string",
        "PaymentCurrency": "string",
        "PaymentTotals": [
          {
            "TransactionType": "Debit",
            "TransactionCount": 0,
            "TransactionAmount": 0
          }
        ]
      }
    ]
  },
  "InputResponse": {
    "OutputResult": {
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      }
    },
    "InputResult": {
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "Input": {
        "InputCommand": "GetAnyKey",
        "ConfirmedFlag": true,
        "FunctionKey": 0,
        "TextInput": "string",
        "DigitInput": 0,
        "Password": "string",
        "MenuEntryNumber": [
          0
        ]
      }
    }
  },
  "LoginResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "POISystemData": {
      "DateTime": "1970-01-01T00:00:00Z",
      "POISoftware": {
        "ManufacturerID": "string",
        "ApplicationName": "string",
        "SoftwareVersion": "string",
        "CertificationCode": "string"
      },
      "POIStatus": {
        "GlobalStatus": "OK",
        "SecurityOKFlag": true,
        "PEDOKFlag": true,
        "CardReaderOKFlag": true,
        "PrinterStatus": "OK",
        "CommunicationOKFlag": true,
        "FraudPreventionFlag": true
      }
    },
    "TokenRequestStatus": true
  },
  "LogoutResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    }
  },
  "LoyaltyResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "POIData": {
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "POIReconciliationID": 0
    },
    "LoyaltyResult": [
      {
        "LoyaltyAccount": {
          "LoyaltyAccountID": {
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "IdentificationSupport": "NoCard",
            "LoyaltyID": "string"
          },
          "LoyaltyBrand": "string"
        },
        "CurrentBalance": 0,
        "LoyaltyAcquirerData": {
          "LoyaltyAcquirerID": "string",
          "ApprovalCode": "string",
          "LoyaltyTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "HostReconciliationID": "string"
        }
      }
    ],
    "PaymentReceipt": [
      {
        "DocumentQualifier": "SaleReceipt",
        "IntegratedPrintFlag": true,
        "RequiredSignatureFlag": false,
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        }
      }
    ]
  },
  "PaymentResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "POIData": {
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "POIReconciliationID": 0
    },
    "PaymentResult": {
      "PaymentType": "Normal",
      "PaymentInstrumentData": {
        "PaymentInstrumentType": "Card",
        "ProtectedCardData": "string",
        "CardData": {
          "PaymentBrand": "string",
          "MaskedPan": "string",
          "PaymentAccountRef": "string",
          "EntryMode": [
            "RFID"
          ],
          "CardCountryCode": 3,
          "ProtectedCardData": "string",
          "SensitiveCardData": {
            "PAN": 8,
            "CardSeqNumb": 2,
            "ExpiryDate": 4,
            "TrackData": [
              {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              }
            ]
          },
          "PaymentToken": {
            "TokenRequestedType": "Transaction",
            "TokenValue": "string",
            "ExpiryDateTime": "1970-01-01T00:00:00Z"
          }
        },
        "CheckData": {
          "BankID": "string",
          "AccountNumber": "string",
          "CheckNumber": "string",
          "TrackData": {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          },
          "CheckCardNumber": "string",
          "TypeCode": "Personal",
          "Country": "string"
        },
        "MobileData": {
          "MobileCountryCode": 3,
          "MobileNetworkCode": 2,
          "MaskedMSISDN": 0,
          "Geolocation": {
            "GeographicCoordinates": {
              "Latitude": "string",
              "Longitude": "string"
            },
            "UTMCoordinates": {
              "UTMZone": "string",
              "UTMEastward": "string",
              "UTMNorthward": "string"
            }
          },
          "ProtectedMobileData": "string",
          "SensitiveMobileData": {
            "MSISDN": 0,
            "IMSI": 0,
            "IMEI": 0
          }
        },
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        }
      },
      "AmountsResp": {
        "Currency": "string",
        "AuthorizedAmount": 0,
        "TotalRebatesAmount": 0,
        "TotalFeesAmount": 0,
        "CashBackAmount": 0,
        "TipAmount": 0
      },
      "Instalment": {
        "InstalmentType": "DeferredInstalments",
        "SequenceNumber": 0,
        "PlanID": "string",
        "Period": 0,
        "PeriodUnit": "Daily",
        "FirstPaymentDate": "1970-01-01",
        "TotalNbOfPayments": 0,
        "CumulativeAmount": 0,
        "FirstAmount": 0,
        "Charges": 0
      },
      "CurrencyConversion": [
        {
          "CustomerApprovedFlag": true,
          "ConvertedAmount": {
            "AmountValue": 0,
            "Currency": "string"
          },
          "Rate": 0,
          "Markup": 0,
          "Commission": 0,
          "Declaration": "string"
        }
      ],
      "MerchantOverrideFlag": false,
      "CapturedSignature": {
        "AreaSize": {
          "X": "string",
          "Y": "string"
        },
        "SignaturePoint": [
          {
            "X": "string",
            "Y": "string"
          }
        ]
      },
      "ProtectedSignature": "string",
      "CustomerLanguage": "string",
      "OnlineFlag": true,
      "AuthenticationMethod": [
        "Bypass"
      ],
      "ValidityDate": "1970-01-01",
      "PaymentAcquirerData": {
        "AcquirerID": 0,
        "MerchantID": "string",
        "AcquirerPOIID": "string",
        "AcquirerTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "ApprovalCode": "string",
        "HostReconciliationID": "string"
      }
    },
    "LoyaltyResult": [
      {
        "LoyaltyAccount": {
          "LoyaltyAccountID": {
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "IdentificationSupport": "NoCard",
            "LoyaltyID": "string"
          },
          "LoyaltyBrand": "string"
        },
        "CurrentBalance": 0,
        "LoyaltyAcquirerData": {
          "LoyaltyAcquirerID": "string",
          "ApprovalCode": "string",
          "LoyaltyTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "HostReconciliationID": "string"
        }
      }
    ],
    "PaymentReceipt": [
      {
        "DocumentQualifier": "SaleReceipt",
        "IntegratedPrintFlag": true,
        "RequiredSignatureFlag": false,
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        }
      }
    ]
  },
  "PrintResponse": {
    "DocumentQualifier": "SaleReceipt",
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    }
  },
  "CardReaderAPDUResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "APDUData": "string",
    "CardStatusWords": "string"
  },
  "ReconciliationResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "ReconciliationType": "SaleReconciliation",
    "POIReconciliationID": 0,
    "TransactionTotals": [
      {
        "PaymentInstrumentType": "Card",
        "AcquirerID": 0,
        "HostReconciliationID": "string",
        "CardBrand": "string",
        "POIID": "string",
        "SaleID": "string",
        "OperatorID": "string",
        "ShiftNumber": "string",
        "TotalsGroupID": "string",
        "PaymentCurrency": "string",
        "PaymentTotals": [
          {
            "TransactionType": "Debit",
            "TransactionCount": 0,
            "TransactionAmount": 0
          }
        ]
      }
    ]
  },
  "ReversalResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "POIData": {
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "POIReconciliationID": 0
    },
    "OriginalPOITransaction": {
      "SaleID": "string",
      "POIID": "string",
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ReuseCardDataFlag": true,
      "ApprovalCode": "string",
      "AcquirerID": 0,
      "AmountValue": 0,
      "HostTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      }
    },
    "ReversedAmount": 0,
    "PaymentReceipt": [
      {
        "DocumentQualifier": "SaleReceipt",
        "IntegratedPrintFlag": true,
        "RequiredSignatureFlag": false,
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        }
      }
    ]
  },
  "StoredValueResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "POIData": {
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "POIReconciliationID": 0
    },
    "StoredValueResult": [
      {
        "StoredValueTransactionType": "Reserve",
        "ProductCode": 1,
        "EanUpc": 0,
        "ItemAmount": 0,
        "Currency": "string",
        "StoredValueAccountStatus": {
          "StoredValueAccountID": {
            "StoredValueAccountType": "GiftCard",
            "StoredValueProvider": "string",
            "OwnerName": "string",
            "ExpiryDate": 4,
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "StoredValueID": "string"
          },
          "CurrentBalance": 0
        },
        "HostTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        }
      }
    ],
    "PaymentReceipt": [
      {
        "DocumentQualifier": "SaleReceipt",
        "IntegratedPrintFlag": true,
        "RequiredSignatureFlag": false,
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        }
      }
    ]
  },
  "TransactionStatusResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "MessageReference": {
      "MessageCategory": "Abort",
      "ServiceID": "string",
      "DeviceID": "string",
      "SaleID": "string",
      "POIID": "string"
    },
    "RepeatedMessageResponse": {
      "MessageHeader": {
        "ProtocolVersion": "string",
        "MessageClass": "Service",
        "MessageCategory": "Abort",
        "MessageType": "Request",
        "ServiceID": "string",
        "DeviceID": "string",
        "SaleID": "string",
        "POIID": "string"
      },
      "RepeatedResponseMessageBody": {
        "LoyaltyResponse": {
          "Response": {
            "Result": "Success",
            "ErrorCondition": "Aborted",
            "AdditionalResponse": "string"
          },
          "SaleData": {
            "OperatorID": "string",
            "OperatorLanguage": "string",
            "ShiftNumber": "string",
            "SaleTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "SaleReferenceID": "string",
            "SaleTerminalData": {
              "TotalsGroupID": "string"
            },
            "TokenRequestedType": "Transaction",
            "CustomerOrderID": "string",
            "CustomerOrderReq": [
              "Open"
            ],
            "SaleToPOIData": "string",
            "SaleToAcquirerData": "string",
            "SaleToIssuerData": {
              "StatementReference": "string"
            }
          },
          "POIData": {
            "POITransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "POIReconciliationID": 0
          },
          "LoyaltyResult": [
            {
              "LoyaltyAccount": {
                "LoyaltyAccountID": {
                  "EntryMode": [
                    "RFID"
                  ],
                  "IdentificationType": "PAN",
                  "IdentificationSupport": "NoCard",
                  "LoyaltyID": "string"
                },
                "LoyaltyBrand": "string"
              },
              "CurrentBalance": 0,
              "LoyaltyAcquirerData": {
                "LoyaltyAcquirerID": "string",
                "ApprovalCode": "string",
                "LoyaltyTransactionID": {
                  "TransactionID": "string",
                  "TimeStamp": "1970-01-01T00:00:00Z"
                },
                "HostReconciliationID": "string"
              }
            }
          ],
          "PaymentReceipt": [
            {
              "DocumentQualifier": "SaleReceipt",
              "IntegratedPrintFlag": true,
              "RequiredSignatureFlag": false,
              "OutputContent": {
                "OutputFormat": "MessageRef",
                "PredefinedContent": {
                  "ReferenceID": "string",
                  "Language": "string"
                },
                "OutputText": [
                  {
                    "Text": "string",
                    "CharacterSet": 0,
                    "StartRow": 1,
                    "StartColumn": 1,
                    "CharacterWidth": "SingleWidth",
                    "CharacterHeight": "SingleHeight",
                    "CharacterStyle": "Normal",
                    "Alignment": "Left",
                    "EndOfLineFlag": true
                  }
                ],
                "OutputXHTML": "string",
                "OutputBarcode": {
                  "BarcodeValue": "string"
                }
              }
            }
          ]
        },
        "PaymentResponse": {
          "Response": {
            "Result": "Success",
            "ErrorCondition": "Aborted",
            "AdditionalResponse": "string"
          },
          "SaleData": {
            "OperatorID": "string",
            "OperatorLanguage": "string",
            "ShiftNumber": "string",
            "SaleTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "SaleReferenceID": "string",
            "SaleTerminalData": {
              "TotalsGroupID": "string"
            },
            "TokenRequestedType": "Transaction",
            "CustomerOrderID": "string",
            "CustomerOrderReq": [
              "Open"
            ],
            "SaleToPOIData": "string",
            "SaleToAcquirerData": "string",
            "SaleToIssuerData": {
              "StatementReference": "string"
            }
          },
          "POIData": {
            "POITransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "POIReconciliationID": 0
          },
          "PaymentResult": {
            "PaymentType": "Normal",
            "PaymentInstrumentData": {
              "PaymentInstrumentType": "Card",
              "ProtectedCardData": "string",
              "CardData": {
                "PaymentBrand": "string",
                "MaskedPan": "string",
                "PaymentAccountRef": "string",
                "EntryMode": [
                  "RFID"
                ],
                "CardCountryCode": 3,
                "ProtectedCardData": "string",
                "SensitiveCardData": {
                  "PAN": 8,
                  "CardSeqNumb": 2,
                  "ExpiryDate": 4,
                  "TrackData": [
                    {
                      "TrackNumb": 2,
                      "TrackFormat": "ISO",
                      "TrackValue": "string"
                    }
                  ]
                },
                "PaymentToken": {
                  "TokenRequestedType": "Transaction",
                  "TokenValue": "string",
                  "ExpiryDateTime": "1970-01-01T00:00:00Z"
                }
              },
              "CheckData": {
                "BankID": "string",
                "AccountNumber": "string",
                "CheckNumber": "string",
                "TrackData": {
                  "TrackNumb": 2,
                  "TrackFormat": "ISO",
                  "TrackValue": "string"
                },
                "CheckCardNumber": "string",
                "TypeCode": "Personal",
                "Country": "string"
              },
              "MobileData": {
                "MobileCountryCode": 3,
                "MobileNetworkCode": 2,
                "MaskedMSISDN": 0,
                "Geolocation": {
                  "GeographicCoordinates": {
                    "Latitude": "string",
                    "Longitude": "string"
                  },
                  "UTMCoordinates": {
                    "UTMZone": "string",
                    "UTMEastward": "string",
                    "UTMNorthward": "string"
                  }
                },
                "ProtectedMobileData": "string",
                "SensitiveMobileData": {
                  "MSISDN": 0,
                  "IMSI": 0,
                  "IMEI": 0
                }
              },
              "StoredValueAccountID": {
                "StoredValueAccountType": "GiftCard",
                "StoredValueProvider": "string",
                "OwnerName": "string",
                "ExpiryDate": 4,
                "EntryMode": [
                  "RFID"
                ],
                "IdentificationType": "PAN",
                "StoredValueID": "string"
              }
            },
            "AmountsResp": {
              "Currency": "string",
              "AuthorizedAmount": 0,
              "TotalRebatesAmount": 0,
              "TotalFeesAmount": 0,
              "CashBackAmount": 0,
              "TipAmount": 0
            },
            "Instalment": {
              "InstalmentType": "DeferredInstalments",
              "SequenceNumber": 0,
              "PlanID": "string",
              "Period": 0,
              "PeriodUnit": "Daily",
              "FirstPaymentDate": "1970-01-01",
              "TotalNbOfPayments": 0,
              "CumulativeAmount": 0,
              "FirstAmount": 0,
              "Charges": 0
            },
            "CurrencyConversion": [
              {
                "CustomerApprovedFlag": true,
                "ConvertedAmount": {
                  "AmountValue": 0,
                  "Currency": "string"
                },
                "Rate": 0,
                "Markup": 0,
                "Commission": 0,
                "Declaration": "string"
              }
            ],
            "MerchantOverrideFlag": false,
            "CapturedSignature": {
              "AreaSize": {
                "X": "string",
                "Y": "string"
              },
              "SignaturePoint": [
                {
                  "X": "string",
                  "Y": "string"
                }
              ]
            },
            "ProtectedSignature": "string",
            "CustomerLanguage": "string",
            "OnlineFlag": true,
            "AuthenticationMethod": [
              "Bypass"
            ],
            "ValidityDate": "1970-01-01",
            "PaymentAcquirerData": {
              "AcquirerID": 0,
              "MerchantID": "string",
              "AcquirerPOIID": "string",
              "AcquirerTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "ApprovalCode": "string",
              "HostReconciliationID": "string"
            }
          },
          "LoyaltyResult": [
            {
              "LoyaltyAccount": {
                "LoyaltyAccountID": {
                  "EntryMode": [
                    "RFID"
                  ],
                  "IdentificationType": "PAN",
                  "IdentificationSupport": "NoCard",
                  "LoyaltyID": "string"
                },
                "LoyaltyBrand": "string"
              },
              "CurrentBalance": 0,
              "LoyaltyAcquirerData": {
                "LoyaltyAcquirerID": "string",
                "ApprovalCode": "string",
                "LoyaltyTransactionID": {
                  "TransactionID": "string",
                  "TimeStamp": "1970-01-01T00:00:00Z"
                },
                "HostReconciliationID": "string"
              }
            }
          ],
          "PaymentReceipt": [
            {
              "DocumentQualifier": "SaleReceipt",
              "IntegratedPrintFlag": true,
              "RequiredSignatureFlag": false,
              "OutputContent": {
                "OutputFormat": "MessageRef",
                "PredefinedContent": {
                  "ReferenceID": "string",
                  "Language": "string"
                },
                "OutputText": [
                  {
                    "Text": "string",
                    "CharacterSet": 0,
                    "StartRow": 1,
                    "StartColumn": 1,
                    "CharacterWidth": "SingleWidth",
                    "CharacterHeight": "SingleHeight",
                    "CharacterStyle": "Normal",
                    "Alignment": "Left",
                    "EndOfLineFlag": true
                  }
                ],
                "OutputXHTML": "string",
                "OutputBarcode": {
                  "BarcodeValue": "string"
                }
              }
            }
          ]
        },
        "ReversalResponse": {
          "Response": {
            "Result": "Success",
            "ErrorCondition": "Aborted",
            "AdditionalResponse": "string"
          },
          "POIData": {
            "POITransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "POIReconciliationID": 0
          },
          "OriginalPOITransaction": {
            "SaleID": "string",
            "POIID": "string",
            "POITransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "ReuseCardDataFlag": true,
            "ApprovalCode": "string",
            "AcquirerID": 0,
            "AmountValue": 0,
            "HostTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            }
          },
          "ReversedAmount": 0,
          "PaymentReceipt": [
            {
              "DocumentQualifier": "SaleReceipt",
              "IntegratedPrintFlag": true,
              "RequiredSignatureFlag": false,
              "OutputContent": {
                "OutputFormat": "MessageRef",
                "PredefinedContent": {
                  "ReferenceID": "string",
                  "Language": "string"
                },
                "OutputText": [
                  {
                    "Text": "string",
                    "CharacterSet": 0,
                    "StartRow": 1,
                    "StartColumn": 1,
                    "CharacterWidth": "SingleWidth",
                    "CharacterHeight": "SingleHeight",
                    "CharacterStyle": "Normal",
                    "Alignment": "Left",
                    "EndOfLineFlag": true
                  }
                ],
                "OutputXHTML": "string",
                "OutputBarcode": {
                  "BarcodeValue": "string"
                }
              }
            }
          ]
        },
        "StoredValueResponse": {
          "Response": {
            "Result": "Success",
            "ErrorCondition": "Aborted",
            "AdditionalResponse": "string"
          },
          "SaleData": {
            "OperatorID": "string",
            "OperatorLanguage": "string",
            "ShiftNumber": "string",
            "SaleTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "SaleReferenceID": "string",
            "SaleTerminalData": {
              "TotalsGroupID": "string"
            },
            "TokenRequestedType": "Transaction",
            "CustomerOrderID": "string",
            "CustomerOrderReq": [
              "Open"
            ],
            "SaleToPOIData": "string",
            "SaleToAcquirerData": "string",
            "SaleToIssuerData": {
              "StatementReference": "string"
            }
          },
          "POIData": {
            "POITransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "POIReconciliationID": 0
          },
          "StoredValueResult": [
            {
              "StoredValueTransactionType": "Reserve",
              "ProductCode": 1,
              "EanUpc": 0,
              "ItemAmount": 0,
              "Currency": "string",
              "StoredValueAccountStatus": {
                "StoredValueAccountID": {
                  "StoredValueAccountType": "GiftCard",
                  "StoredValueProvider": "string",
                  "OwnerName": "string",
                  "ExpiryDate": 4,
                  "EntryMode": [
                    "RFID"
                  ],
                  "IdentificationType": "PAN",
                  "StoredValueID": "string"
                },
                "CurrentBalance": 0
              },
              "HostTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              }
            }
          ],
          "PaymentReceipt": [
            {
              "DocumentQualifier": "SaleReceipt",
              "IntegratedPrintFlag": true,
              "RequiredSignatureFlag": false,
              "OutputContent": {
                "OutputFormat": "MessageRef",
                "PredefinedContent": {
                  "ReferenceID": "string",
                  "Language": "string"
                },
                "OutputText": [
                  {
                    "Text": "string",
                    "CharacterSet": 0,
                    "StartRow": 1,
                    "StartColumn": 1,
                    "CharacterWidth": "SingleWidth",
                    "CharacterHeight": "SingleHeight",
                    "CharacterStyle": "Normal",
                    "Alignment": "Left",
                    "EndOfLineFlag": true
                  }
                ],
                "OutputXHTML": "string",
                "OutputBarcode": {
                  "BarcodeValue": "string"
                }
              }
            }
          ]
        },
        "CardAcquisitionResponse": {
          "Response": {
            "Result": "Success",
            "ErrorCondition": "Aborted",
            "AdditionalResponse": "string"
          },
          "SaleData": {
            "OperatorID": "string",
            "OperatorLanguage": "string",
            "ShiftNumber": "string",
            "SaleTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "SaleReferenceID": "string",
            "SaleTerminalData": {
              "TotalsGroupID": "string"
            },
            "TokenRequestedType": "Transaction",
            "CustomerOrderID": "string",
            "CustomerOrderReq": [
              "Open"
            ],
            "SaleToPOIData": "string",
            "SaleToAcquirerData": "string",
            "SaleToIssuerData": {
              "StatementReference": "string"
            }
          },
          "POIData": {
            "POITransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "POIReconciliationID": 0
          },
          "PaymentBrand": [
            "string"
          ],
          "PaymentInstrumentData": {
            "PaymentInstrumentType": "Card",
            "ProtectedCardData": "string",
            "CardData": {
              "PaymentBrand": "string",
              "MaskedPan": "string",
              "PaymentAccountRef": "string",
              "EntryMode": [
                "RFID"
              ],
              "CardCountryCode": 3,
              "ProtectedCardData": "string",
              "SensitiveCardData": {
                "PAN": 8,
                "CardSeqNumb": 2,
                "ExpiryDate": 4,
                "TrackData": [
                  {
                    "TrackNumb": 2,
                    "TrackFormat": "ISO",
                    "TrackValue": "string"
                  }
                ]
              },
              "PaymentToken": {
                "TokenRequestedType": "Transaction",
                "TokenValue": "string",
                "ExpiryDateTime": "1970-01-01T00:00:00Z"
              }
            },
            "CheckData": {
              "BankID": "string",
              "AccountNumber": "string",
              "CheckNumber": "string",
              "TrackData": {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              },
              "CheckCardNumber": "string",
              "TypeCode": "Personal",
              "Country": "string"
            },
            "MobileData": {
              "MobileCountryCode": 3,
              "MobileNetworkCode": 2,
              "MaskedMSISDN": 0,
              "Geolocation": {
                "GeographicCoordinates": {
                  "Latitude": "string",
                  "Longitude": "string"
                },
                "UTMCoordinates": {
                  "UTMZone": "string",
                  "UTMEastward": "string",
                  "UTMNorthward": "string"
                }
              },
              "ProtectedMobileData": "string",
              "SensitiveMobileData": {
                "MSISDN": 0,
                "IMSI": 0,
                "IMEI": 0
              }
            },
            "StoredValueAccountID": {
              "StoredValueAccountType": "GiftCard",
              "StoredValueProvider": "string",
              "OwnerName": "string",
              "ExpiryDate": 4,
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "StoredValueID": "string"
            }
          },
          "LoyaltyAccount": [
            {
              "LoyaltyAccountID": {
                "EntryMode": [
                  "RFID"
                ],
                "IdentificationType": "PAN",
                "IdentificationSupport": "NoCard",
                "LoyaltyID": "string"
              },
              "LoyaltyBrand": "string"
            }
          ]
        },
        "CardReaderAPDUResponse": {
          "Response": {
            "Result": "Success",
            "ErrorCondition": "Aborted",
            "AdditionalResponse": "string"
          },
          "APDUData": "string",
          "CardStatusWords": "string"
        }
      }
    }
  }
}
```

The SaleToPOIResponse message pair is a container for the response message content. It contains a MessageHeader and a message body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageHeader|[MessageHeader](#schemamessageheader)|true|none|Message header of the Sale to POI protocol message.<br>It conveys Information related to the Sale to POI protocol management.|
|BalanceInquiryResponse|[BalanceInquiryResponse](#schemabalanceinquiryresponse)|false|none|Content of the Balance Inquiry Response message.|
|CardAcquisitionResponse|[CardAcquisitionResponse](#schemacardacquisitionresponse)|false|none|Content of the Card Acquisition Response message.|
|AdminResponse|[AdminResponse](#schemaadminresponse)|false|none|Content of the Admin Response message.|
|DiagnosisResponse|[DiagnosisResponse](#schemadiagnosisresponse)|false|none|Content of the Diagnosis Response message.|
|DisplayResponse|[DisplayResponse](#schemadisplayresponse)|false|none|Content of the Display Response message.|
|EnableServiceResponse|[EnableServiceResponse](#schemaenableserviceresponse)|false|none|Content of the Enable Service Response message.|
|GetTotalsResponse|[GetTotalsResponse](#schemagettotalsresponse)|false|none|Content of the Get Totals Response message.|
|InputResponse|[InputResponse](#schemainputresponse)|false|none|Content of the Input Response message.|
|LoginResponse|[LoginResponse](#schemaloginresponse)|false|none|Content of the Login Response message.|
|LogoutResponse|[LogoutResponse](#schemalogoutresponse)|false|none|Content of the Logout Response message.|
|LoyaltyResponse|[LoyaltyResponse](#schemaloyaltyresponse)|false|none|Content of the Loyalty Response message.|
|PaymentResponse|[PaymentResponse](#schemapaymentresponse)|false|none|Content of the Payment Response message.|
|PrintResponse|[PrintResponse](#schemaprintresponse)|false|none|Content of the Print Response message.|
|CardReaderAPDUResponse|[CardReaderAPDUResponse](#schemacardreaderapduresponse)|false|none|Content of the Card Reader APDU Response message.|
|ReconciliationResponse|[ReconciliationResponse](#schemareconciliationresponse)|false|none|Content of the Reconciliation Response message.|
|ReversalResponse|[ReversalResponse](#schemareversalresponse)|false|none|Content of the Reversal Response message.|
|StoredValueResponse|[StoredValueResponse](#schemastoredvalueresponse)|false|none|Content of the Stored Value Response message.|
|TransactionStatusResponse|[TransactionStatusResponse](#schematransactionstatusresponse)|false|none|Content of the TransactionStatus Response message.|

<h2 id="tocS_PerformedTransaction">PerformedTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaperformedtransaction"></a>
<a id="schema_PerformedTransaction"></a>
<a id="tocSperformedtransaction"></a>
<a id="tocsperformedtransaction"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "POIData": {
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "POIReconciliationID": 0
  },
  "PaymentResult": {
    "PaymentType": "Normal",
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    },
    "AmountsResp": {
      "Currency": "string",
      "AuthorizedAmount": 0,
      "TotalRebatesAmount": 0,
      "TotalFeesAmount": 0,
      "CashBackAmount": 0,
      "TipAmount": 0
    },
    "Instalment": {
      "InstalmentType": "DeferredInstalments",
      "SequenceNumber": 0,
      "PlanID": "string",
      "Period": 0,
      "PeriodUnit": "Daily",
      "FirstPaymentDate": "1970-01-01",
      "TotalNbOfPayments": 0,
      "CumulativeAmount": 0,
      "FirstAmount": 0,
      "Charges": 0
    },
    "CurrencyConversion": [
      {
        "CustomerApprovedFlag": true,
        "ConvertedAmount": {
          "AmountValue": 0,
          "Currency": "string"
        },
        "Rate": 0,
        "Markup": 0,
        "Commission": 0,
        "Declaration": "string"
      }
    ],
    "MerchantOverrideFlag": false,
    "CapturedSignature": {
      "AreaSize": {
        "X": "string",
        "Y": "string"
      },
      "SignaturePoint": [
        {
          "X": "string",
          "Y": "string"
        }
      ]
    },
    "ProtectedSignature": "string",
    "CustomerLanguage": "string",
    "OnlineFlag": true,
    "AuthenticationMethod": [
      "Bypass"
    ],
    "ValidityDate": "1970-01-01",
    "PaymentAcquirerData": {
      "AcquirerID": 0,
      "MerchantID": "string",
      "AcquirerPOIID": "string",
      "AcquirerTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ApprovalCode": "string",
      "HostReconciliationID": "string"
    }
  },
  "LoyaltyResult": [
    {
      "LoyaltyAccount": {
        "LoyaltyAccountID": {
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "IdentificationSupport": "NoCard",
          "LoyaltyID": "string"
        },
        "LoyaltyBrand": "string"
      },
      "CurrentBalance": 0,
      "LoyaltyAcquirerData": {
        "LoyaltyAcquirerID": "string",
        "ApprovalCode": "string",
        "LoyaltyTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "HostReconciliationID": "string"
      }
    }
  ],
  "ReversedAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.<br>If Result is Success, `ErrorCondition` is absent or not used in the processing of the message. In the other cases, the `ErrorCondition` has to be present and can refine the processing of the message response. `AdditionalResponse` gives more information about the success or the failure of the message request processing, for logging without real time involvements.|
|SaleData|[SaleData](#schemasaledata)|false|none|Data associated with the Sale System, with a particular value during the processing of the payment by the POI, including the cards acquisition.|
|POIData|[POIData](#schemapoidata)|false|none|Data related to the POI System.<br>In the Message Response, identification of the POI transaction.|
|PaymentResult|[PaymentResult](#schemapaymentresult)|false|none|none|
|LoyaltyResult|[[LoyaltyResult](#schemaloyaltyresult)]|false|none|none|
|ReversedAmount|number|false|none|none|

<h2 id="tocS_PaymentTotals">PaymentTotals</h2>
<!-- backwards compatibility -->
<a id="schemapaymenttotals"></a>
<a id="schema_PaymentTotals"></a>
<a id="tocSpaymenttotals"></a>
<a id="tocspaymenttotals"></a>

```json
{
  "TransactionType": "Debit",
  "TransactionCount": 0,
  "TransactionAmount": 0
}
```

Totals of the payment transaction during the reconciliation period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionType|[TransactionType](#schematransactiontype)|true|none|Type of transaction for which totals are grouped.<br>Debit, Credit, ReverseDebit, ReverseCredit, OneTimeReservation, CompletedDeffered, FirstReservation, UpdateReservation, CompletedReservation, CashAdvance.<br>Possible values:<br>* **Award**<br>* **CashAdvance**<br>* **CompletedDeffered**<br>* **CompletedReservation**<br>* **Credit**<br>* **Debit**<br>* **Declined**<br>* **Failed**<br>* **FirstReservation**<br>* **IssuerInstalment**<br>* **OneTimeReservation**<br>* **Rebate**<br>* **Redemption**<br>* **ReverseAward**<br>* **ReverseCredit**<br>* **ReverseDebit**<br>* **ReverseRebate**<br>* **ReverseRedemption**<br>* **UpdateReservation**|
|TransactionCount|integer|true|none|Number of processed transaction during the period.|
|TransactionAmount|number|true|none|Sum of amount of processed transaction during the period.|

#### Enumerated Values

|Property|Value|
|---|---|
|TransactionType|Debit|
|TransactionType|Credit|
|TransactionType|ReverseDebit|
|TransactionType|ReverseCredit|
|TransactionType|OneTimeReservation|
|TransactionType|CompletedDeffered|
|TransactionType|FirstReservation|
|TransactionType|UpdateReservation|
|TransactionType|CompletedReservation|
|TransactionType|CashAdvance|
|TransactionType|IssuerInstalment|
|TransactionType|Declined|
|TransactionType|Failed|
|TransactionType|Award|
|TransactionType|ReverseAward|
|TransactionType|Redemption|
|TransactionType|ReverseRedemption|
|TransactionType|Rebate|
|TransactionType|ReverseRebate|

<h2 id="tocS_TransactionTotals">TransactionTotals</h2>
<!-- backwards compatibility -->
<a id="schematransactiontotals"></a>
<a id="schema_TransactionTotals"></a>
<a id="tocStransactiontotals"></a>
<a id="tocstransactiontotals"></a>

```json
{
  "PaymentInstrumentType": "Card",
  "AcquirerID": 0,
  "HostReconciliationID": "string",
  "CardBrand": "string",
  "POIID": "string",
  "SaleID": "string",
  "OperatorID": "string",
  "ShiftNumber": "string",
  "TotalsGroupID": "string",
  "PaymentCurrency": "string",
  "PaymentTotals": [
    {
      "TransactionType": "Debit",
      "TransactionCount": 0,
      "TransactionAmount": 0
    }
  ]
}
```

If Result is Success, contains all the totals, classified as required by the Sale in the message request. At least, transaction totals are provided per Acquirer, Acquirer Settlement, and Card Brand.
Result of the Sale to POI Reconciliation processing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaymentInstrumentType|[PaymentInstrumentType](#schemapaymentinstrumenttype)|true|none|Type of payment instrument.<br>Possible values:<br>* **Card**<br>* **Cash**<br>* **Check**<br>* **Mobile**<br>* **StoredValue**|
|AcquirerID|integer|false|none|Identification of the Acquirer.|
|HostReconciliationID|string|false|none|Identifier of a reconciliation period with a payment or loyalty host.|
|CardBrand|string|false|none|Type of payment or loyalty card.<br>If configured to present totals per card brand, and Response.Result is Success.|
|POIID|string|false|none|Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br>Sent if requested in the message request.|
|SaleID|string|false|none|Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.<br>Sent if requested in the message request.|
|OperatorID|string|false|none|Identification of the Cashier or Operator.<br>Sent if requested in the message request.|
|ShiftNumber|string|false|none|Shift number.<br>Sent if requested in the message request.|
|TotalsGroupID|string|false|none|Identification of a group of transaction on a POI Terminal, having the same Sale features.<br>Sent if requested in the message request.|
|PaymentCurrency|string|false|none|Currency of a monetary amount.|
|PaymentTotals|[[PaymentTotals](#schemapaymenttotals)]|false|none|Totals of the payment transaction during the reconciliation period.<br>If both `TransactionCount` and `TransactionAmount` are not equal to zero.|

#### Enumerated Values

|Property|Value|
|---|---|
|PaymentInstrumentType|Card|
|PaymentInstrumentType|Check|
|PaymentInstrumentType|Mobile|
|PaymentInstrumentType|StoredValue|
|PaymentInstrumentType|Cash|

<h2 id="tocS_TotalFilter">TotalFilter</h2>
<!-- backwards compatibility -->
<a id="schematotalfilter"></a>
<a id="schema_TotalFilter"></a>
<a id="tocStotalfilter"></a>
<a id="tocstotalfilter"></a>

```json
{
  "POIID": "string",
  "SaleID": "string",
  "OperatorID": "string",
  "ShiftNumber": "string",
  "TotalsGroupID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|POIID|string|false|none|Identification of a POI System or a POI Terminal for the Sale to POI protocol.|
|SaleID|string|false|none|Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.|
|OperatorID|string|false|none|Identification of the Cashier or Operator.|
|ShiftNumber|string|false|none|Shift number.|
|TotalsGroupID|string|false|none|Sent if totals in the response have to be computed only for this particular value of TotalsGroupID.|

<h2 id="tocS_PaymentAccountReq">PaymentAccountReq</h2>
<!-- backwards compatibility -->
<a id="schemapaymentaccountreq"></a>
<a id="schema_PaymentAccountReq"></a>
<a id="tocSpaymentaccountreq"></a>
<a id="tocspaymentaccountreq"></a>

```json
{
  "AccountType": "Default",
  "CardAcquisitionReference": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  },
  "PaymentInstrumentData": {
    "PaymentInstrumentType": "Card",
    "ProtectedCardData": "string",
    "CardData": {
      "PaymentBrand": "string",
      "MaskedPan": "string",
      "PaymentAccountRef": "string",
      "EntryMode": [
        "RFID"
      ],
      "CardCountryCode": 3,
      "ProtectedCardData": "string",
      "SensitiveCardData": {
        "PAN": 8,
        "CardSeqNumb": 2,
        "ExpiryDate": 4,
        "TrackData": [
          {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          }
        ]
      },
      "PaymentToken": {
        "TokenRequestedType": "Transaction",
        "TokenValue": "string",
        "ExpiryDateTime": "1970-01-01T00:00:00Z"
      }
    },
    "CheckData": {
      "BankID": "string",
      "AccountNumber": "string",
      "CheckNumber": "string",
      "TrackData": {
        "TrackNumb": 2,
        "TrackFormat": "ISO",
        "TrackValue": "string"
      },
      "CheckCardNumber": "string",
      "TypeCode": "Personal",
      "Country": "string"
    },
    "MobileData": {
      "MobileCountryCode": 3,
      "MobileNetworkCode": 2,
      "MaskedMSISDN": 0,
      "Geolocation": {
        "GeographicCoordinates": {
          "Latitude": "string",
          "Longitude": "string"
        },
        "UTMCoordinates": {
          "UTMZone": "string",
          "UTMEastward": "string",
          "UTMNorthward": "string"
        }
      },
      "ProtectedMobileData": "string",
      "SensitiveMobileData": {
        "MSISDN": 0,
        "IMSI": 0,
        "IMEI": 0
      }
    },
    "StoredValueAccountID": {
      "StoredValueAccountType": "GiftCard",
      "StoredValueProvider": "string",
      "OwnerName": "string",
      "ExpiryDate": 4,
      "EntryMode": [
        "RFID"
      ],
      "IdentificationType": "PAN",
      "StoredValueID": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountType|[AccountType](#schemaaccounttype)|false|none|Type of cardholder account used for the transaction. Allows a cardholder to select the type of account used for the transaction.<br>Possible values:<br>* **CardTotals**<br>* **Checking**<br>* **CreditCard**<br>* **Default**<br>* **EpurseCard**<br>* **Investment**<br>* **Savings**<br>* **Universal**|
|CardAcquisitionReference|[TransactionIDType](#schematransactionidtype)|false|none|Identification of a transaction for the Sale System or the POI System.|
|PaymentInstrumentData|[PaymentInstrumentData](#schemapaymentinstrumentdata)|false|none|Data related to the instrument of payment for the transaction.<br>Sent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System.|

#### Enumerated Values

|Property|Value|
|---|---|
|AccountType|Default|
|AccountType|Savings|
|AccountType|Checking|
|AccountType|CreditCard|
|AccountType|Universal|
|AccountType|Investment|
|AccountType|CardTotals|
|AccountType|EpurseCard|

<h2 id="tocS_LoyaltyAccountReq">LoyaltyAccountReq</h2>
<!-- backwards compatibility -->
<a id="schemaloyaltyaccountreq"></a>
<a id="schema_LoyaltyAccountReq"></a>
<a id="tocSloyaltyaccountreq"></a>
<a id="tocsloyaltyaccountreq"></a>

```json
{
  "CardAcquisitionReference": {
    "TransactionID": "string",
    "TimeStamp": "1970-01-01T00:00:00Z"
  },
  "LoyaltyAccountID": {
    "EntryMode": [
      "RFID"
    ],
    "IdentificationType": "PAN",
    "IdentificationSupport": "NoCard",
    "LoyaltyID": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CardAcquisitionReference|[TransactionIDType](#schematransactionidtype)|false|none|Identification of a transaction for the Sale System or the POI System.|
|LoyaltyAccountID|[LoyaltyAccountID](#schemaloyaltyaccountid)|false|none|Identification of a Loyalty account.<br>In the Payment Request message, it allows to identify the loyalty account by the Sale Terminal instead of the POI Terminal (e.g. because the account identification is a bar-code read by the Cashier on a scanner device).|

<h2 id="tocS_PaymentAccountStatus">PaymentAccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemapaymentaccountstatus"></a>
<a id="schema_PaymentAccountStatus"></a>
<a id="tocSpaymentaccountstatus"></a>
<a id="tocspaymentaccountstatus"></a>

```json
{
  "PaymentInstrumentData": {
    "PaymentInstrumentType": "Card",
    "ProtectedCardData": "string",
    "CardData": {
      "PaymentBrand": "string",
      "MaskedPan": "string",
      "PaymentAccountRef": "string",
      "EntryMode": [
        "RFID"
      ],
      "CardCountryCode": 3,
      "ProtectedCardData": "string",
      "SensitiveCardData": {
        "PAN": 8,
        "CardSeqNumb": 2,
        "ExpiryDate": 4,
        "TrackData": [
          {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          }
        ]
      },
      "PaymentToken": {
        "TokenRequestedType": "Transaction",
        "TokenValue": "string",
        "ExpiryDateTime": "1970-01-01T00:00:00Z"
      }
    },
    "CheckData": {
      "BankID": "string",
      "AccountNumber": "string",
      "CheckNumber": "string",
      "TrackData": {
        "TrackNumb": 2,
        "TrackFormat": "ISO",
        "TrackValue": "string"
      },
      "CheckCardNumber": "string",
      "TypeCode": "Personal",
      "Country": "string"
    },
    "MobileData": {
      "MobileCountryCode": 3,
      "MobileNetworkCode": 2,
      "MaskedMSISDN": 0,
      "Geolocation": {
        "GeographicCoordinates": {
          "Latitude": "string",
          "Longitude": "string"
        },
        "UTMCoordinates": {
          "UTMZone": "string",
          "UTMEastward": "string",
          "UTMNorthward": "string"
        }
      },
      "ProtectedMobileData": "string",
      "SensitiveMobileData": {
        "MSISDN": 0,
        "IMSI": 0,
        "IMEI": 0
      }
    },
    "StoredValueAccountID": {
      "StoredValueAccountType": "GiftCard",
      "StoredValueProvider": "string",
      "OwnerName": "string",
      "ExpiryDate": 4,
      "EntryMode": [
        "RFID"
      ],
      "IdentificationType": "PAN",
      "StoredValueID": "string"
    }
  },
  "CurrentBalance": 0,
  "Currency": "string",
  "PaymentAcquirerData": {
    "AcquirerID": 0,
    "MerchantID": "string",
    "AcquirerPOIID": "string",
    "AcquirerTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "ApprovalCode": "string",
    "HostReconciliationID": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaymentInstrumentData|[PaymentInstrumentData](#schemapaymentinstrumentdata)|false|none|Data related to the instrument of payment for the transaction.<br>Sent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System.|
|CurrentBalance|number|false|none|Balance of an account after processing of the transaction.|
|Currency|string|false|none|Currency of a monetary amount.|
|PaymentAcquirerData|[PaymentAcquirerData](#schemapaymentacquirerdata)|false|none|Data related to the response from the payment Acquirer.|

<h2 id="tocS_MessageReference">MessageReference</h2>
<!-- backwards compatibility -->
<a id="schemamessagereference"></a>
<a id="schema_MessageReference"></a>
<a id="tocSmessagereference"></a>
<a id="tocsmessagereference"></a>

```json
{
  "MessageCategory": "Abort",
  "ServiceID": "string",
  "DeviceID": "string",
  "SaleID": "string",
  "POIID": "string"
}
```

Identification of a previous POI transaction.
To abort a transaction in progress or to request the status of a transaction from which no response has been received. It identifies the message header of the message request to abort or request the status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageCategory|[MessageCategory](#schemamessagecategory)|false|none|Category of message.<br>CardAcquisition, Display, Input, Loyalty, Payment, Print, CardReaderInit, CardReaderPowerOff.<br>Possible values:<br>* **Abort**<br>* **Admin**<br>* **BalanceInquiry**<br>* **Batch**<br>* **CardAcquisition**<br>* **CardReaderInit**<br>* **CardReaderPowerOff**<br>* **Diagnosis**<br>* **Display**<br>* **EnableService**<br>* **Event**<br>* **GetTotals**<br>* **Input**<br>* **InputUpdate**<br>* **Login**<br>* **Logout**<br>* **Loyalty**<br>* **None**<br>* **PIN**<br>* **Payment**<br>* **Print**<br>* **Reconciliation**<br>* **Reversal**<br>* **Sound**<br>* **StoredValue**<br>* **TransactionStatus**<br>* **Transmit**|
|ServiceID|string|false|none|Identification of a message pair, which processes a transaction.|
|DeviceID|string|false|none|Identification of a device message pair.|
|SaleID|string|false|none|Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.<br>default MessageHeader.SaleID.|
|POIID|string|false|none|Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br>Default `MessageHeader.POIID`.|

#### Enumerated Values

|Property|Value|
|---|---|
|MessageCategory|Abort|
|MessageCategory|Admin|
|MessageCategory|BalanceInquiry|
|MessageCategory|CardAcquisition|
|MessageCategory|Diagnosis|
|MessageCategory|Display|
|MessageCategory|EnableService|
|MessageCategory|Event|
|MessageCategory|GetTotals|
|MessageCategory|Input|
|MessageCategory|InputUpdate|
|MessageCategory|Login|
|MessageCategory|Logout|
|MessageCategory|Loyalty|
|MessageCategory|Payment|
|MessageCategory|Print|
|MessageCategory|Reconciliation|
|MessageCategory|Reversal|
|MessageCategory|StoredValue|
|MessageCategory|TransactionStatus|
|MessageCategory|None|

<h2 id="tocS_MessageHeader">MessageHeader</h2>
<!-- backwards compatibility -->
<a id="schemamessageheader"></a>
<a id="schema_MessageHeader"></a>
<a id="tocSmessageheader"></a>
<a id="tocsmessageheader"></a>

```json
{
  "ProtocolVersion": "string",
  "MessageClass": "Service",
  "MessageCategory": "Abort",
  "MessageType": "Request",
  "ServiceID": "string",
  "DeviceID": "string",
  "SaleID": "string",
  "POIID": "string"
}
```

Message header of the Sale to POI protocol message.
It conveys Information related to the Sale to POI protocol management.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtocolVersion|string|false|none|If MessageCategory is Login or Diagnosis.|
|MessageClass|[MessageClass](#schemamessageclass)|true|none|Class of the message.<br>Possible values:<br>* **Device**<br>* **Event**<br>* **Service**|
|MessageCategory|[MessageCategory](#schemamessagecategory)|true|none|Category of message.<br>Possible values:<br>* **Abort**<br>* **Admin**<br>* **BalanceInquiry**<br>* **Batch**<br>* **CardAcquisition**<br>* **CardReaderInit**<br>* **CardReaderPowerOff**<br>* **Diagnosis**<br>* **Display**<br>* **EnableService**<br>* **Event**<br>* **GetTotals**<br>* **Input**<br>* **InputUpdate**<br>* **Login**<br>* **Logout**<br>* **Loyalty**<br>* **None**<br>* **PIN**<br>* **Payment**<br>* **Print**<br>* **Reconciliation**<br>* **Reversal**<br>* **Sound**<br>* **StoredValue**<br>* **TransactionStatus**<br>* **Transmit**|
|MessageType|[MessageType](#schemamessagetype)|true|none|Type of message of the Sale to POI protocol.<br>Possible values:<br>* **Notification**<br>* **Request**<br>* **Response**|
|ServiceID|string|false|none|Identification of a message pair, which processes a transaction.<br>Required if Service or Event MessageClass message or if Device MessageClass and request from POI or response from Sale.|
|DeviceID|string|false|none|Identification of a device message pair.<br>If Device MessageClass.|
|SaleID|string|true|none|Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.|
|POIID|string|true|none|Identification of a POI System or a POI Terminal for the Sale to POI protocol.|

#### Enumerated Values

|Property|Value|
|---|---|
|MessageClass|Service|
|MessageClass|Device|
|MessageClass|Event|
|MessageCategory|Abort|
|MessageCategory|Admin|
|MessageCategory|BalanceInquiry|
|MessageCategory|CardAcquisition|
|MessageCategory|Diagnosis|
|MessageCategory|Display|
|MessageCategory|EnableService|
|MessageCategory|Event|
|MessageCategory|GetTotals|
|MessageCategory|Input|
|MessageCategory|InputUpdate|
|MessageCategory|Login|
|MessageCategory|Logout|
|MessageCategory|Loyalty|
|MessageCategory|Payment|
|MessageCategory|Print|
|MessageCategory|Reconciliation|
|MessageCategory|Reversal|
|MessageCategory|StoredValue|
|MessageCategory|TransactionStatus|
|MessageCategory|None|
|MessageType|Request|
|MessageType|Response|
|MessageType|Notification|

<h2 id="tocS_RepeatedResponseMessageBody">RepeatedResponseMessageBody</h2>
<!-- backwards compatibility -->
<a id="schemarepeatedresponsemessagebody"></a>
<a id="schema_RepeatedResponseMessageBody"></a>
<a id="tocSrepeatedresponsemessagebody"></a>
<a id="tocsrepeatedresponsemessagebody"></a>

```json
{
  "LoyaltyResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "POIData": {
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "POIReconciliationID": 0
    },
    "LoyaltyResult": [
      {
        "LoyaltyAccount": {
          "LoyaltyAccountID": {
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "IdentificationSupport": "NoCard",
            "LoyaltyID": "string"
          },
          "LoyaltyBrand": "string"
        },
        "CurrentBalance": 0,
        "LoyaltyAcquirerData": {
          "LoyaltyAcquirerID": "string",
          "ApprovalCode": "string",
          "LoyaltyTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "HostReconciliationID": "string"
        }
      }
    ],
    "PaymentReceipt": [
      {
        "DocumentQualifier": "SaleReceipt",
        "IntegratedPrintFlag": true,
        "RequiredSignatureFlag": false,
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        }
      }
    ]
  },
  "PaymentResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "POIData": {
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "POIReconciliationID": 0
    },
    "PaymentResult": {
      "PaymentType": "Normal",
      "PaymentInstrumentData": {
        "PaymentInstrumentType": "Card",
        "ProtectedCardData": "string",
        "CardData": {
          "PaymentBrand": "string",
          "MaskedPan": "string",
          "PaymentAccountRef": "string",
          "EntryMode": [
            "RFID"
          ],
          "CardCountryCode": 3,
          "ProtectedCardData": "string",
          "SensitiveCardData": {
            "PAN": 8,
            "CardSeqNumb": 2,
            "ExpiryDate": 4,
            "TrackData": [
              {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              }
            ]
          },
          "PaymentToken": {
            "TokenRequestedType": "Transaction",
            "TokenValue": "string",
            "ExpiryDateTime": "1970-01-01T00:00:00Z"
          }
        },
        "CheckData": {
          "BankID": "string",
          "AccountNumber": "string",
          "CheckNumber": "string",
          "TrackData": {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          },
          "CheckCardNumber": "string",
          "TypeCode": "Personal",
          "Country": "string"
        },
        "MobileData": {
          "MobileCountryCode": 3,
          "MobileNetworkCode": 2,
          "MaskedMSISDN": 0,
          "Geolocation": {
            "GeographicCoordinates": {
              "Latitude": "string",
              "Longitude": "string"
            },
            "UTMCoordinates": {
              "UTMZone": "string",
              "UTMEastward": "string",
              "UTMNorthward": "string"
            }
          },
          "ProtectedMobileData": "string",
          "SensitiveMobileData": {
            "MSISDN": 0,
            "IMSI": 0,
            "IMEI": 0
          }
        },
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        }
      },
      "AmountsResp": {
        "Currency": "string",
        "AuthorizedAmount": 0,
        "TotalRebatesAmount": 0,
        "TotalFeesAmount": 0,
        "CashBackAmount": 0,
        "TipAmount": 0
      },
      "Instalment": {
        "InstalmentType": "DeferredInstalments",
        "SequenceNumber": 0,
        "PlanID": "string",
        "Period": 0,
        "PeriodUnit": "Daily",
        "FirstPaymentDate": "1970-01-01",
        "TotalNbOfPayments": 0,
        "CumulativeAmount": 0,
        "FirstAmount": 0,
        "Charges": 0
      },
      "CurrencyConversion": [
        {
          "CustomerApprovedFlag": true,
          "ConvertedAmount": {
            "AmountValue": 0,
            "Currency": "string"
          },
          "Rate": 0,
          "Markup": 0,
          "Commission": 0,
          "Declaration": "string"
        }
      ],
      "MerchantOverrideFlag": false,
      "CapturedSignature": {
        "AreaSize": {
          "X": "string",
          "Y": "string"
        },
        "SignaturePoint": [
          {
            "X": "string",
            "Y": "string"
          }
        ]
      },
      "ProtectedSignature": "string",
      "CustomerLanguage": "string",
      "OnlineFlag": true,
      "AuthenticationMethod": [
        "Bypass"
      ],
      "ValidityDate": "1970-01-01",
      "PaymentAcquirerData": {
        "AcquirerID": 0,
        "MerchantID": "string",
        "AcquirerPOIID": "string",
        "AcquirerTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "ApprovalCode": "string",
        "HostReconciliationID": "string"
      }
    },
    "LoyaltyResult": [
      {
        "LoyaltyAccount": {
          "LoyaltyAccountID": {
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "IdentificationSupport": "NoCard",
            "LoyaltyID": "string"
          },
          "LoyaltyBrand": "string"
        },
        "CurrentBalance": 0,
        "LoyaltyAcquirerData": {
          "LoyaltyAcquirerID": "string",
          "ApprovalCode": "string",
          "LoyaltyTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "HostReconciliationID": "string"
        }
      }
    ],
    "PaymentReceipt": [
      {
        "DocumentQualifier": "SaleReceipt",
        "IntegratedPrintFlag": true,
        "RequiredSignatureFlag": false,
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        }
      }
    ]
  },
  "ReversalResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "POIData": {
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "POIReconciliationID": 0
    },
    "OriginalPOITransaction": {
      "SaleID": "string",
      "POIID": "string",
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ReuseCardDataFlag": true,
      "ApprovalCode": "string",
      "AcquirerID": 0,
      "AmountValue": 0,
      "HostTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      }
    },
    "ReversedAmount": 0,
    "PaymentReceipt": [
      {
        "DocumentQualifier": "SaleReceipt",
        "IntegratedPrintFlag": true,
        "RequiredSignatureFlag": false,
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        }
      }
    ]
  },
  "StoredValueResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "POIData": {
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "POIReconciliationID": 0
    },
    "StoredValueResult": [
      {
        "StoredValueTransactionType": "Reserve",
        "ProductCode": 1,
        "EanUpc": 0,
        "ItemAmount": 0,
        "Currency": "string",
        "StoredValueAccountStatus": {
          "StoredValueAccountID": {
            "StoredValueAccountType": "GiftCard",
            "StoredValueProvider": "string",
            "OwnerName": "string",
            "ExpiryDate": 4,
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "StoredValueID": "string"
          },
          "CurrentBalance": 0
        },
        "HostTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        }
      }
    ],
    "PaymentReceipt": [
      {
        "DocumentQualifier": "SaleReceipt",
        "IntegratedPrintFlag": true,
        "RequiredSignatureFlag": false,
        "OutputContent": {
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string",
          "OutputBarcode": {
            "BarcodeValue": "string"
          }
        }
      }
    ]
  },
  "CardAcquisitionResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "SaleData": {
      "OperatorID": "string",
      "OperatorLanguage": "string",
      "ShiftNumber": "string",
      "SaleTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "SaleReferenceID": "string",
      "SaleTerminalData": {
        "TotalsGroupID": "string"
      },
      "TokenRequestedType": "Transaction",
      "CustomerOrderID": "string",
      "CustomerOrderReq": [
        "Open"
      ],
      "SaleToPOIData": "string",
      "SaleToAcquirerData": "string",
      "SaleToIssuerData": {
        "StatementReference": "string"
      }
    },
    "POIData": {
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "POIReconciliationID": 0
    },
    "PaymentBrand": [
      "string"
    ],
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    },
    "LoyaltyAccount": [
      {
        "LoyaltyAccountID": {
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "IdentificationSupport": "NoCard",
          "LoyaltyID": "string"
        },
        "LoyaltyBrand": "string"
      }
    ]
  },
  "CardReaderAPDUResponse": {
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "APDUData": "string",
    "CardStatusWords": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoyaltyResponse|[LoyaltyResponse](#schemaloyaltyresponse)|false|none|It conveys Information related to the Loyalty transaction processed by the POI System.<br>Content of the Loyalty Response message.|
|PaymentResponse|[PaymentResponse](#schemapaymentresponse)|false|none|It conveys Information related to the Payment transaction processed by the POI System.<br>Content of the Payment Response message.|
|ReversalResponse|[ReversalResponse](#schemareversalresponse)|false|none|It conveys Information related to the reversal processed by the POI System.<br>Content of the Reversal Response message.|
|StoredValueResponse|[StoredValueResponse](#schemastoredvalueresponse)|false|none|It conveys Information related to the Stored Value transaction processed by the POI System.<br>Content of the Stored Value Response message.|
|CardAcquisitionResponse|[CardAcquisitionResponse](#schemacardacquisitionresponse)|false|none|It conveys Information related to the payment and loyalty cards read and processed by the POI System and entered by the Customer.<br>Content of the Card Acquisition Response message.|
|CardReaderAPDUResponse|[CardReaderAPDUResponse](#schemacardreaderapduresponse)|false|none|Content of the Card Reader APDU Response message.<br>It contains the result of the requested service, APDU response sent by the chip of the card in response to the APDU request.|

<h2 id="tocS_RepeatedMessageResponse">RepeatedMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemarepeatedmessageresponse"></a>
<a id="schema_RepeatedMessageResponse"></a>
<a id="tocSrepeatedmessageresponse"></a>
<a id="tocsrepeatedmessageresponse"></a>

```json
{
  "MessageHeader": {
    "ProtocolVersion": "string",
    "MessageClass": "Service",
    "MessageCategory": "Abort",
    "MessageType": "Request",
    "ServiceID": "string",
    "DeviceID": "string",
    "SaleID": "string",
    "POIID": "string"
  },
  "RepeatedResponseMessageBody": {
    "LoyaltyResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "POIData": {
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "POIReconciliationID": 0
      },
      "LoyaltyResult": [
        {
          "LoyaltyAccount": {
            "LoyaltyAccountID": {
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "IdentificationSupport": "NoCard",
              "LoyaltyID": "string"
            },
            "LoyaltyBrand": "string"
          },
          "CurrentBalance": 0,
          "LoyaltyAcquirerData": {
            "LoyaltyAcquirerID": "string",
            "ApprovalCode": "string",
            "LoyaltyTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "HostReconciliationID": "string"
          }
        }
      ],
      "PaymentReceipt": [
        {
          "DocumentQualifier": "SaleReceipt",
          "IntegratedPrintFlag": true,
          "RequiredSignatureFlag": false,
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          }
        }
      ]
    },
    "PaymentResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "POIData": {
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "POIReconciliationID": 0
      },
      "PaymentResult": {
        "PaymentType": "Normal",
        "PaymentInstrumentData": {
          "PaymentInstrumentType": "Card",
          "ProtectedCardData": "string",
          "CardData": {
            "PaymentBrand": "string",
            "MaskedPan": "string",
            "PaymentAccountRef": "string",
            "EntryMode": [
              "RFID"
            ],
            "CardCountryCode": 3,
            "ProtectedCardData": "string",
            "SensitiveCardData": {
              "PAN": 8,
              "CardSeqNumb": 2,
              "ExpiryDate": 4,
              "TrackData": [
                {
                  "TrackNumb": 2,
                  "TrackFormat": "ISO",
                  "TrackValue": "string"
                }
              ]
            },
            "PaymentToken": {
              "TokenRequestedType": "Transaction",
              "TokenValue": "string",
              "ExpiryDateTime": "1970-01-01T00:00:00Z"
            }
          },
          "CheckData": {
            "BankID": "string",
            "AccountNumber": "string",
            "CheckNumber": "string",
            "TrackData": {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            },
            "CheckCardNumber": "string",
            "TypeCode": "Personal",
            "Country": "string"
          },
          "MobileData": {
            "MobileCountryCode": 3,
            "MobileNetworkCode": 2,
            "MaskedMSISDN": 0,
            "Geolocation": {
              "GeographicCoordinates": {
                "Latitude": "string",
                "Longitude": "string"
              },
              "UTMCoordinates": {
                "UTMZone": "string",
                "UTMEastward": "string",
                "UTMNorthward": "string"
              }
            },
            "ProtectedMobileData": "string",
            "SensitiveMobileData": {
              "MSISDN": 0,
              "IMSI": 0,
              "IMEI": 0
            }
          },
          "StoredValueAccountID": {
            "StoredValueAccountType": "GiftCard",
            "StoredValueProvider": "string",
            "OwnerName": "string",
            "ExpiryDate": 4,
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "StoredValueID": "string"
          }
        },
        "AmountsResp": {
          "Currency": "string",
          "AuthorizedAmount": 0,
          "TotalRebatesAmount": 0,
          "TotalFeesAmount": 0,
          "CashBackAmount": 0,
          "TipAmount": 0
        },
        "Instalment": {
          "InstalmentType": "DeferredInstalments",
          "SequenceNumber": 0,
          "PlanID": "string",
          "Period": 0,
          "PeriodUnit": "Daily",
          "FirstPaymentDate": "1970-01-01",
          "TotalNbOfPayments": 0,
          "CumulativeAmount": 0,
          "FirstAmount": 0,
          "Charges": 0
        },
        "CurrencyConversion": [
          {
            "CustomerApprovedFlag": true,
            "ConvertedAmount": {
              "AmountValue": 0,
              "Currency": "string"
            },
            "Rate": 0,
            "Markup": 0,
            "Commission": 0,
            "Declaration": "string"
          }
        ],
        "MerchantOverrideFlag": false,
        "CapturedSignature": {
          "AreaSize": {
            "X": "string",
            "Y": "string"
          },
          "SignaturePoint": [
            {
              "X": "string",
              "Y": "string"
            }
          ]
        },
        "ProtectedSignature": "string",
        "CustomerLanguage": "string",
        "OnlineFlag": true,
        "AuthenticationMethod": [
          "Bypass"
        ],
        "ValidityDate": "1970-01-01",
        "PaymentAcquirerData": {
          "AcquirerID": 0,
          "MerchantID": "string",
          "AcquirerPOIID": "string",
          "AcquirerTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "ApprovalCode": "string",
          "HostReconciliationID": "string"
        }
      },
      "LoyaltyResult": [
        {
          "LoyaltyAccount": {
            "LoyaltyAccountID": {
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "IdentificationSupport": "NoCard",
              "LoyaltyID": "string"
            },
            "LoyaltyBrand": "string"
          },
          "CurrentBalance": 0,
          "LoyaltyAcquirerData": {
            "LoyaltyAcquirerID": "string",
            "ApprovalCode": "string",
            "LoyaltyTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "HostReconciliationID": "string"
          }
        }
      ],
      "PaymentReceipt": [
        {
          "DocumentQualifier": "SaleReceipt",
          "IntegratedPrintFlag": true,
          "RequiredSignatureFlag": false,
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          }
        }
      ]
    },
    "ReversalResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "POIData": {
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "POIReconciliationID": 0
      },
      "OriginalPOITransaction": {
        "SaleID": "string",
        "POIID": "string",
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "ReuseCardDataFlag": true,
        "ApprovalCode": "string",
        "AcquirerID": 0,
        "AmountValue": 0,
        "HostTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        }
      },
      "ReversedAmount": 0,
      "PaymentReceipt": [
        {
          "DocumentQualifier": "SaleReceipt",
          "IntegratedPrintFlag": true,
          "RequiredSignatureFlag": false,
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          }
        }
      ]
    },
    "StoredValueResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "POIData": {
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "POIReconciliationID": 0
      },
      "StoredValueResult": [
        {
          "StoredValueTransactionType": "Reserve",
          "ProductCode": 1,
          "EanUpc": 0,
          "ItemAmount": 0,
          "Currency": "string",
          "StoredValueAccountStatus": {
            "StoredValueAccountID": {
              "StoredValueAccountType": "GiftCard",
              "StoredValueProvider": "string",
              "OwnerName": "string",
              "ExpiryDate": 4,
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "StoredValueID": "string"
            },
            "CurrentBalance": 0
          },
          "HostTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          }
        }
      ],
      "PaymentReceipt": [
        {
          "DocumentQualifier": "SaleReceipt",
          "IntegratedPrintFlag": true,
          "RequiredSignatureFlag": false,
          "OutputContent": {
            "OutputFormat": "MessageRef",
            "PredefinedContent": {
              "ReferenceID": "string",
              "Language": "string"
            },
            "OutputText": [
              {
                "Text": "string",
                "CharacterSet": 0,
                "StartRow": 1,
                "StartColumn": 1,
                "CharacterWidth": "SingleWidth",
                "CharacterHeight": "SingleHeight",
                "CharacterStyle": "Normal",
                "Alignment": "Left",
                "EndOfLineFlag": true
              }
            ],
            "OutputXHTML": "string",
            "OutputBarcode": {
              "BarcodeValue": "string"
            }
          }
        }
      ]
    },
    "CardAcquisitionResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "SaleData": {
        "OperatorID": "string",
        "OperatorLanguage": "string",
        "ShiftNumber": "string",
        "SaleTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "SaleReferenceID": "string",
        "SaleTerminalData": {
          "TotalsGroupID": "string"
        },
        "TokenRequestedType": "Transaction",
        "CustomerOrderID": "string",
        "CustomerOrderReq": [
          "Open"
        ],
        "SaleToPOIData": "string",
        "SaleToAcquirerData": "string",
        "SaleToIssuerData": {
          "StatementReference": "string"
        }
      },
      "POIData": {
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "POIReconciliationID": 0
      },
      "PaymentBrand": [
        "string"
      ],
      "PaymentInstrumentData": {
        "PaymentInstrumentType": "Card",
        "ProtectedCardData": "string",
        "CardData": {
          "PaymentBrand": "string",
          "MaskedPan": "string",
          "PaymentAccountRef": "string",
          "EntryMode": [
            "RFID"
          ],
          "CardCountryCode": 3,
          "ProtectedCardData": "string",
          "SensitiveCardData": {
            "PAN": 8,
            "CardSeqNumb": 2,
            "ExpiryDate": 4,
            "TrackData": [
              {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              }
            ]
          },
          "PaymentToken": {
            "TokenRequestedType": "Transaction",
            "TokenValue": "string",
            "ExpiryDateTime": "1970-01-01T00:00:00Z"
          }
        },
        "CheckData": {
          "BankID": "string",
          "AccountNumber": "string",
          "CheckNumber": "string",
          "TrackData": {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          },
          "CheckCardNumber": "string",
          "TypeCode": "Personal",
          "Country": "string"
        },
        "MobileData": {
          "MobileCountryCode": 3,
          "MobileNetworkCode": 2,
          "MaskedMSISDN": 0,
          "Geolocation": {
            "GeographicCoordinates": {
              "Latitude": "string",
              "Longitude": "string"
            },
            "UTMCoordinates": {
              "UTMZone": "string",
              "UTMEastward": "string",
              "UTMNorthward": "string"
            }
          },
          "ProtectedMobileData": "string",
          "SensitiveMobileData": {
            "MSISDN": 0,
            "IMSI": 0,
            "IMEI": 0
          }
        },
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        }
      },
      "LoyaltyAccount": [
        {
          "LoyaltyAccountID": {
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "IdentificationSupport": "NoCard",
            "LoyaltyID": "string"
          },
          "LoyaltyBrand": "string"
        }
      ]
    },
    "CardReaderAPDUResponse": {
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      },
      "APDUData": "string",
      "CardStatusWords": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageHeader|[MessageHeader](#schemamessageheader)|true|none|Message header of the Sale to POI protocol message.<br>It conveys Information related to the Sale to POI protocol management.|
|RepeatedResponseMessageBody|[RepeatedResponseMessageBody](#schemarepeatedresponsemessagebody)|true|none|none|

<h2 id="tocS_HostStatus">HostStatus</h2>
<!-- backwards compatibility -->
<a id="schemahoststatus"></a>
<a id="schema_HostStatus"></a>
<a id="tocShoststatus"></a>
<a id="tocshoststatus"></a>

```json
{
  "AcquirerID": 0,
  "IsReachableFlag": true
}
```

Indicate the reachability of the host by the POI Terminal.
State of a Host.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcquirerID|integer|true|none|Identification of the Acquirer.|
|IsReachableFlag|boolean|false|none|Indicate if a Host is reachable.|

<h2 id="tocS_OutputResult">OutputResult</h2>
<!-- backwards compatibility -->
<a id="schemaoutputresult"></a>
<a id="schema_OutputResult"></a>
<a id="tocSoutputresult"></a>
<a id="tocsoutputresult"></a>

```json
{
  "Device": "CashierDisplay",
  "InfoQualify": "Status",
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  }
}
```

In the message response, it contains the result of the output, if required in the message request.
Information related to the result the output (display, print, input).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|[Device](#schemadevice)|true|none|Logical device located on a Sale Terminal or a POI Terminal, in term of class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.<br>Copy.<br>Possible values:<br>* **CashierDisplay**<br>* **CashierInput**<br>* **CustomerDisplay**<br>* **CustomerInput**|
|InfoQualify|[InfoQualify](#schemainfoqualify)|true|none|Qualification of the information to sent to an output logical device, to display or print to the Cashier or the Customer.<br>Copy.<br>Possible values:<br>* **CustomerAssistance**<br>* **Display**<br>* **Document**<br>* **Error**<br>* **Input**<br>* **POIReplication**<br>* **Receipt**<br>* **Sound**<br>* **Status**<br>* **Voucher**|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|

#### Enumerated Values

|Property|Value|
|---|---|
|Device|CashierDisplay|
|Device|CustomerDisplay|
|Device|CashierInput|
|Device|CustomerInput|
|InfoQualify|Status|
|InfoQualify|Error|
|InfoQualify|Display|
|InfoQualify|Sound|
|InfoQualify|Input|
|InfoQualify|POIReplication|
|InfoQualify|CustomerAssistance|
|InfoQualify|Receipt|
|InfoQualify|Document|
|InfoQualify|Voucher|

<h2 id="tocS_InputData">InputData</h2>
<!-- backwards compatibility -->
<a id="schemainputdata"></a>
<a id="schema_InputData"></a>
<a id="tocSinputdata"></a>
<a id="tocsinputdata"></a>

```json
{
  "Device": "CashierDisplay",
  "InfoQualify": "Status",
  "InputCommand": "GetAnyKey",
  "NotifyCardInputFlag": false,
  "MaxInputTime": 0,
  "ImmediateResponseFlag": false,
  "MinLength": 0,
  "MaxLength": 0,
  "MaxDecimalLength": 0,
  "WaitUserValidationFlag": true,
  "DefaultInputString": "string",
  "DefaultLayoutString": "string",
  "StringMask": "string",
  "FromRightToLeftFlag": false,
  "MaskCharactersFlag": false,
  "BeepKeyFlag": false,
  "GlobalCorrectionFlag": false,
  "DisableCancelFlag": false,
  "DisableCorrectFlag": false,
  "DisableValidFlag": false,
  "MenuBackFlag": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|[Device](#schemadevice)|true|none|Logical device located on a Sale Terminal or a POI Terminal, regarding the class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.<br>Possible values:<br>* **CashierDisplay**<br>* **CashierInput**<br>* **CustomerDisplay**<br>* **CustomerInput**|
|InfoQualify|[InfoQualify](#schemainfoqualify)|true|none|Qualification of the information to send to an output logical device, to display or print to the Cashier or the Customer.<br>Possible values:<br>* **CustomerAssistance**<br>* **Display**<br>* **Document**<br>* **Error**<br>* **Input**<br>* **POIReplication**<br>* **Receipt**<br>* **Sound**<br>* **Status**<br>* **Voucher**|
|InputCommand|[InputCommand](#schemainputcommand)|true|none|Type of requested input. Can be: **GetConfirmation**, **TextString**, **DigitString**, **DecimalString** or **GetMenuEntry**.<br>Possible values:<br>* **DecimalString**<br>* **DigitString**<br>* **GetAnyKey**<br>* **GetConfirmation**<br>* **GetFunctionKey**<br>* **GetMenuEntry**<br>* **Password**<br>* **SiteManager**<br>* **TextString**|
|NotifyCardInputFlag|boolean|false|none|Request Notification of the card entered in the POI card reader.|
|MaxInputTime|integer|false|none|Maximum input time in seconds. Limits the time to answer to an Input request message.|
|ImmediateResponseFlag|boolean|false|none|Indicates whether to request an Immediate response to the message without waiting for the completion of the command.|
|MinLength|integer|false|none|Minimum length of an entered string, or minimum number of entries that can be selected in a menu.|
|MaxLength|integer|false|none|Maximum length of an entered string, or maximum number of entries that can be selected in a menu.|
|MaxDecimalLength|integer|false|none|Maximum input length of the decimal part (without decimal point).|
|WaitUserValidationFlag|boolean|false|none|Indicates that the user must confirm the entered characters, when the maximum allowed length is reached. During the processing of an Input command `TextString`, `DigitString` or `DecimalString` with `MaxLength` or `MaxDecimalLength` present in the request.|
|DefaultInputString|string|false|none|Default string value for an input command. On the `TextString`, `DigitString` and `DecimalString` input commands: default string displayed on the input field before entering the string. In `GetConfirmation` input command: **Y** for yes, **N** for no.|
|DefaultLayoutString|string|false|none|none|
|StringMask|string|false|none|String mask to get information requiring a specific format. For the processing of an Input command `TextString`, `DigitString` or `DecimalString`. Some information as date or plate number required to be entered with a certain format.|
|FromRightToLeftFlag|boolean|false|none|Indicates if the entered character has to be displayed from the right to the left of the display field.|
|MaskCharactersFlag|boolean|false|none|Indicates to mask the characters entered by the user (i.e. replacing in the display of the input, the entered character by a standard character as *).|
|BeepKeyFlag|boolean|false|none|Indicates, when the user press a key, if a beep has to be generated (value True).|
|GlobalCorrectionFlag|boolean|false|none|Indicates, when the user presses the Correct function key in an input entry, if all the entered characters are removed (value True) or only the last entered character if any (value False).|
|DisableCancelFlag|boolean|false|none|Indicates if the Cancel function key has to be deactivated (value True).|
|DisableCorrectFlag|boolean|false|none|Indicates if the Correct function key has to be deactivated (value True). During the processing of an Input command `GetConfirmation`, `SiteManager`, or `GetMenuEntry`.|
|DisableValidFlag|boolean|false|none|Indicates if the Valid function key has to be deactivated (value True). During the processing of an Input command `GetConfirmation`, `SiteManager`, or `GetMenuEntry`.|
|MenuBackFlag|boolean|false|none|If it has the value True, it indicates that the Back function key (respectively Home function key) may be used to go back to the immediate upper level of the menu. If it has the value False, it indicates that the current menu level has no parent menu.|

#### Enumerated Values

|Property|Value|
|---|---|
|Device|CashierDisplay|
|Device|CustomerDisplay|
|Device|CashierInput|
|Device|CustomerInput|
|InfoQualify|Status|
|InfoQualify|Error|
|InfoQualify|Display|
|InfoQualify|Sound|
|InfoQualify|Input|
|InfoQualify|POIReplication|
|InfoQualify|CustomerAssistance|
|InfoQualify|Receipt|
|InfoQualify|Document|
|InfoQualify|Voucher|
|InputCommand|GetAnyKey|
|InputCommand|GetConfirmation|
|InputCommand|SiteManager|
|InputCommand|TextString|
|InputCommand|DigitString|
|InputCommand|DecimalString|
|InputCommand|GetFunctionKey|
|InputCommand|GetMenuEntry|
|InputCommand|Password|

<h2 id="tocS_Input">Input</h2>
<!-- backwards compatibility -->
<a id="schemainput"></a>
<a id="schema_Input"></a>
<a id="tocSinput"></a>
<a id="tocsinput"></a>

```json
{
  "InputCommand": "GetAnyKey",
  "ConfirmedFlag": true,
  "FunctionKey": 0,
  "TextInput": "string",
  "DigitInput": 0,
  "Password": "string",
  "MenuEntryNumber": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputCommand|[InputCommand](#schemainputcommand)|true|none|Type of requested input. Can be: **GetConfirmation**, **TextString**, **DigitString**, **DecimalString** or **GetMenuEntry**.<br>Possible values:<br>* **DecimalString**<br>* **DigitString**<br>* **GetAnyKey**<br>* **GetConfirmation**<br>* **GetFunctionKey**<br>* **GetMenuEntry**<br>* **Password**<br>* **SiteManager**<br>* **TextString**|
|ConfirmedFlag|boolean|false|none|Indicates te response of the user from the `GetConfirmation` input command.|
|FunctionKey|integer|false|none|The number of the function key which is typed by the Customer on the POI or the Cashier on the Sale Terminal.|
|TextInput|string|false|none|The text typed by the Customer on the POI or by the Cashier on the Sale Terminal.|
|DigitInput|integer|false|none|The digits typed by the Customer on the POI or by the Cashier on the Sale Terminal.|
|Password|string|false|none|The text password typed by the Customer on the POI or by the Cashier on the Sale Terminal.|
|MenuEntryNumber|[integer]|false|none|The index of the menu item (from 1 to n) which is selected by the Cashier on the Sale Terminal. The value -1 indicates that the immediate upper level of the menu is requested. The value 0 indicates that the root of the menu is requested.|

#### Enumerated Values

|Property|Value|
|---|---|
|InputCommand|GetAnyKey|
|InputCommand|GetConfirmation|
|InputCommand|SiteManager|
|InputCommand|TextString|
|InputCommand|DigitString|
|InputCommand|DecimalString|
|InputCommand|GetFunctionKey|
|InputCommand|GetMenuEntry|
|InputCommand|Password|

<h2 id="tocS_InputResult">InputResult</h2>
<!-- backwards compatibility -->
<a id="schemainputresult"></a>
<a id="schema_InputResult"></a>
<a id="tocSinputresult"></a>
<a id="tocsinputresult"></a>

```json
{
  "Device": "CashierDisplay",
  "InfoQualify": "Status",
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "Input": {
    "InputCommand": "GetAnyKey",
    "ConfirmedFlag": true,
    "FunctionKey": 0,
    "TextInput": "string",
    "DigitInput": 0,
    "Password": "string",
    "MenuEntryNumber": [
      0
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|[Device](#schemadevice)|true|none|Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.<br>Possible values:<br>* **CashierDisplay**<br>* **CashierInput**<br>* **CustomerDisplay**<br>* **CustomerInput**|
|InfoQualify|[InfoQualify](#schemainfoqualify)|true|none|Qualification of the information to send to an output logical device, to display or print to the Cashier or the Customer.<br>Possible values:<br>* **CustomerAssistance**<br>* **Display**<br>* **Document**<br>* **Error**<br>* **Input**<br>* **POIReplication**<br>* **Receipt**<br>* **Sound**<br>* **Status**<br>* **Voucher**|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.<br>If Result is Success, `ErrorCondition` is absent or not used in the processing of the message. In the other cases, the `ErrorCondition` has to be present and can refine the processing of the message response. `AdditionalResponse` gives more information about the success or the failure of the message request processing, for logging without real time involvements.|
|Input|[Input](#schemainput)|false|none|Data entered by the user, related to the input command.|

#### Enumerated Values

|Property|Value|
|---|---|
|Device|CashierDisplay|
|Device|CustomerDisplay|
|Device|CashierInput|
|Device|CustomerInput|
|InfoQualify|Status|
|InfoQualify|Error|
|InfoQualify|Display|
|InfoQualify|Sound|
|InfoQualify|Input|
|InfoQualify|POIReplication|
|InfoQualify|CustomerAssistance|
|InfoQualify|Receipt|
|InfoQualify|Document|
|InfoQualify|Voucher|

<h2 id="tocS_PrintOutput">PrintOutput</h2>
<!-- backwards compatibility -->
<a id="schemaprintoutput"></a>
<a id="schema_PrintOutput"></a>
<a id="tocSprintoutput"></a>
<a id="tocsprintoutput"></a>

```json
{
  "DocumentQualifier": "SaleReceipt",
  "ResponseMode": "NotRequired",
  "IntegratedPrintFlag": false,
  "RequiredSignatureFlag": false,
  "OutputContent": {
    "OutputFormat": "MessageRef",
    "PredefinedContent": {
      "ReferenceID": "string",
      "Language": "string"
    },
    "OutputText": [
      {
        "Text": "string",
        "CharacterSet": 0,
        "StartRow": 1,
        "StartColumn": 1,
        "CharacterWidth": "SingleWidth",
        "CharacterHeight": "SingleHeight",
        "CharacterStyle": "Normal",
        "Alignment": "Left",
        "EndOfLineFlag": true
      }
    ],
    "OutputXHTML": "string",
    "OutputBarcode": {
      "BarcodeValue": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentQualifier|[DocumentQualifier](#schemadocumentqualifier)|true|none|Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send information to a physical printer or to use the paper type accordingly.<br>Possible values:<br>* **CashierReceipt**<br>* **CustomerReceipt**<br>* **Document**<br>* **Journal**<br>* **SaleReceipt**<br>* **Voucher**|
|ResponseMode|[ResponseMode](#schemaresponsemode)|true|none|Message response awaited by the initiator of the Request. Allows various types and synchronisation of requests for Print or Sound.<br>Possible values:<br>* **Immediate**<br>* **NotRequired**<br>* **PrintEnd**<br>* **SoundEnd**|
|IntegratedPrintFlag|boolean|false|none|Type of the print integrated in other prints. Allows a separated printing (paper cut if available), or integration with the sale receipt or other print. If the printing is integrated, the response is always immediate, even if the `ResponseMode` is set to `PrintEnd`.|
|RequiredSignatureFlag|boolean|false|none|Indicates that the cardholder payment receipt requires a physical signature by the Customer.|
|OutputContent|[OutputContent](#schemaoutputcontent)|true|none|Content to display or print. This is a sequence of elements if they have different formats.|

#### Enumerated Values

|Property|Value|
|---|---|
|DocumentQualifier|SaleReceipt|
|DocumentQualifier|CashierReceipt|
|DocumentQualifier|CustomerReceipt|
|DocumentQualifier|Document|
|DocumentQualifier|Voucher|
|DocumentQualifier|Journal|
|ResponseMode|NotRequired|
|ResponseMode|Immediate|
|ResponseMode|PrintEnd|
|ResponseMode|SoundEnd|

<h2 id="tocS_SoundContent">SoundContent</h2>
<!-- backwards compatibility -->
<a id="schemasoundcontent"></a>
<a id="schema_SoundContent"></a>
<a id="tocSsoundcontent"></a>
<a id="tocssoundcontent"></a>

```json
{
  "SoundFormat": "SoundRef",
  "Language": "string",
  "ReferenceID": "string",
  "Text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SoundFormat|[SoundFormat](#schemasoundformat)|true|none|Possible values:<br>* **MessageRef**<br>* **SoundRef**<br>* **Text**|
|Language|string|false|none|none|
|ReferenceID|string|false|none|none|
|Text|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|SoundFormat|SoundRef|
|SoundFormat|MessageRef|
|SoundFormat|Text|

<h2 id="tocS_CardHolderPIN">CardHolderPIN</h2>
<!-- backwards compatibility -->
<a id="schemacardholderpin"></a>
<a id="schema_CardHolderPIN"></a>
<a id="tocScardholderpin"></a>
<a id="tocscardholderpin"></a>

```json
{
  "EncrPINBlock": "string",
  "PINFormat": "ISO0",
  "AdditionalInput": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncrPINBlock|string|true|none|none|
|PINFormat|[PINFormat](#schemapinformat)|true|none|Possible values:<br>* **ISO0**<br>* **ISO1**<br>* **ISO2**<br>* **ISO3**|
|AdditionalInput|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|PINFormat|ISO0|
|PINFormat|ISO1|
|PINFormat|ISO2|
|PINFormat|ISO3|

<h2 id="tocS_ICCResetData">ICCResetData</h2>
<!-- backwards compatibility -->
<a id="schemaiccresetdata"></a>
<a id="schema_ICCResetData"></a>
<a id="tocSiccresetdata"></a>
<a id="tocsiccresetdata"></a>

```json
{
  "ATRValue": "string",
  "CardStatusWords": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ATRValue|string(byte)|false|none|none|
|CardStatusWords|string(byte)|false|none|none|

<h2 id="tocS_SecurityTrailer">SecurityTrailer</h2>
<!-- backwards compatibility -->
<a id="schemasecuritytrailer"></a>
<a id="schema_SecurityTrailer"></a>
<a id="tocSsecuritytrailer"></a>
<a id="tocssecuritytrailer"></a>

```json
{
  "AdyenCryptoVersion": 0,
  "KeyIdentifier": "string",
  "KeyVersion": 0,
  "Nonce": "string",
  "Hmac": "string"
}
```

It contains information related to the security of the message.
SecurityTrailer as used by Adyen.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdyenCryptoVersion|integer|true|none|none|
|KeyIdentifier|string|true|none|none|
|KeyVersion|integer|true|none|none|
|Nonce|string(byte)|true|none|none|
|Hmac|string(byte)|true|none|none|

<h2 id="tocS_LoginRequest">LoginRequest</h2>
<!-- backwards compatibility -->
<a id="schemaloginrequest"></a>
<a id="schema_LoginRequest"></a>
<a id="tocSloginrequest"></a>
<a id="tocsloginrequest"></a>

```json
{
  "DateTime": "1970-01-01T00:00:00Z",
  "SaleSoftware": {
    "ManufacturerID": "string",
    "ApplicationName": "string",
    "SoftwareVersion": "string",
    "CertificationCode": "string"
  },
  "SaleTerminalData": {
    "TotalsGroupID": "string"
  },
  "TrainingModeFlag": false,
  "OperatorLanguage": "string",
  "OperatorID": "string",
  "ShiftNumber": "string",
  "TokenRequestedType": "Transaction",
  "CustomerOrderReq": [
    "Open"
  ],
  "POISerialNumber": "string"
}
```

It conveys information related to the session (period between a Login and the following Logout) to process.
Content of the `LoginRequest` message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DateTime|string(date-time)|true|none|Date and Time. In the Login request message, the Sale System gives its date and time to the POI System. In the Login response, the POI System gives its date and time to the Sale System.|
|SaleSoftware|[SaleSoftware](#schemasalesoftware)|true|none|Information related to the software of the Sale System which manages the Sale to POI protocol.|
|SaleTerminalData|[SaleTerminalData](#schemasaleterminaldata)|false|none|Information related to the software and hardware feature of the Sale Terminal.<br>Present if the login involve a Sale Terminal.|
|TrainingModeFlag|boolean|false|none|Training mode.<br>This flag indicates to the POI that the entire session will be not used to make real transaction, but is used for test of system or operator training.|
|OperatorLanguage|string|true|none|Language of the Cashier or Operator.<br>Default value for Device type displays.|
|OperatorID|string|false|none|Identification of the Cashier or Operator.<br>Four conditions to send it:<br>* The Sale System wants the POI to log it in the transaction log.<br>* Because of reconciliation with total on OperatorID.<br>* Because the POI needs it.<br>* Acquirer or issuer need it.|
|ShiftNumber|string|false|none|Shift number.<br>Same as OperatorID.|
|TokenRequestedType|[TokenRequestedType](#schematokenrequestedtype)|false|none|Type of token replacing the PAN of a payment card to identify the payment<br> mean of the customer. It allows, for a merchant, to use a token for a transaction<br> only or for a longer period.<br>Possible values:<br>* **Customer**<br>* **Transaction**|
|CustomerOrderReq|[CustomerOrderReq](#schemacustomerorderreq)|false|none|List of customer order open, closed or both to be sent in the response messages.<br>Possible values:<br>* **Both**<br>* **Closed**<br>* **Open**|
|POISerialNumber|string|false|none|Serial number of a POI Terminal.<br>If the login involve a POI Terminal and not the first Login to the POI System.|

#### Enumerated Values

|Property|Value|
|---|---|
|TokenRequestedType|Transaction|
|TokenRequestedType|Customer|
|CustomerOrderReq|Open|
|CustomerOrderReq|Closed|
|CustomerOrderReq|Both|

<h2 id="tocS_LogoutRequest">LogoutRequest</h2>
<!-- backwards compatibility -->
<a id="schemalogoutrequest"></a>
<a id="schema_LogoutRequest"></a>
<a id="tocSlogoutrequest"></a>
<a id="tocslogoutrequest"></a>

```json
{
  "MaintenanceAllowed": false
}
```

Empty.
Content of the Logout Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaintenanceAllowed|boolean|false|none|Indicates that the POI terminal is able to or has to go to maintenance. Sent in the Logout Request to express that after closing the session, the POI may go to maintenance.|

<h2 id="tocS_EnableServiceRequest">EnableServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableservicerequest"></a>
<a id="schema_EnableServiceRequest"></a>
<a id="tocSenableservicerequest"></a>
<a id="tocsenableservicerequest"></a>

```json
{
  "TransactionAction": "StartTransaction",
  "ServicesEnabled": [
    "CardAcquisition"
  ],
  "DisplayOutput": {
    "ResponseRequiredFlag": true,
    "MinimumDisplayTime": 0,
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "OutputContent": {
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string",
      "OutputBarcode": {
        "BarcodeValue": "string"
      }
    },
    "MenuEntry": [
      {
        "MenuEntryTag": "Selectable",
        "DefaultSelectedFlag": false,
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string"
      }
    ],
    "OutputSignature": "string"
  }
}
```

It conveys the services that will be enabled for the POI Terminal without the request of the Sale System, and a possible invitation for the Customer to start the services.
Content of the Enable Service Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionAction|[TransactionAction](#schematransactionaction)|true|none|Action to realise on a transaction. In an `EnableService` request message:<br>  - Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.<br>  - Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a service request from the Sale System to complete the transaction.<br>Possible values:<br>* **AbortTransaction**<br>* **StartTransaction**|
|ServicesEnabled|[ServicesEnabled](#schemaservicesenabled)|false|none|Services which are enabled before the start-up of a transaction.<br>Mandatory if `TransactionAction` is `StartTransaction`, absent if not.<br>Possible values:<br>* **CardAcquisition**<br>* **Loyalty**<br>* **Payment**|
|DisplayOutput|[DisplayOutput](#schemadisplayoutput)|false|none|Information to display and the way to process the display.|

#### Enumerated Values

|Property|Value|
|---|---|
|TransactionAction|StartTransaction|
|TransactionAction|AbortTransaction|
|ServicesEnabled|CardAcquisition|
|ServicesEnabled|Payment|
|ServicesEnabled|Loyalty|

<h2 id="tocS_AdminRequest">AdminRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminrequest"></a>
<a id="schema_AdminRequest"></a>
<a id="tocSadminrequest"></a>
<a id="tocsadminrequest"></a>

```json
{
  "ServiceIdentification": "string"
}
```

Empty.
Content of the Custom Admin Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceIdentification|string|false|none|Identification of the administrative service to process.|

<h2 id="tocS_PaymentRequest">PaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequest"></a>
<a id="schema_PaymentRequest"></a>
<a id="tocSpaymentrequest"></a>
<a id="tocspaymentrequest"></a>

```json
{
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "PaymentTransaction": {
    "AmountsReq": {
      "Currency": "string",
      "RequestedAmount": 0,
      "CashBackAmount": 0,
      "TipAmount": 0,
      "PaidAmount": 0,
      "MinimumAmountToDeliver": 0,
      "MaximumCashBackAmount": 0,
      "MinimumSplitAmount": 0
    },
    "OriginalPOITransaction": {
      "SaleID": "string",
      "POIID": "string",
      "POITransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ReuseCardDataFlag": true,
      "ApprovalCode": "string",
      "AcquirerID": 0,
      "AmountValue": 0,
      "HostTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      }
    },
    "TransactionConditions": {
      "AllowedPaymentBrand": [
        "string"
      ],
      "AcquirerID": [
        0
      ],
      "DebitPreferredFlag": true,
      "AllowedLoyaltyBrand": [
        "string"
      ],
      "LoyaltyHandling": "Forbidden",
      "CustomerLanguage": "string",
      "ForceOnlineFlag": false,
      "ForceEntryMode": [
        "RFID"
      ],
      "MerchantCategoryCode": "string"
    }
  },
  "PaymentData": {
    "PaymentType": "Normal",
    "SplitPaymentFlag": false,
    "RequestedValidityDate": "1970-01-01",
    "CardAcquisitionReference": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "Instalment": {
      "InstalmentType": "DeferredInstalments",
      "SequenceNumber": 0,
      "PlanID": "string",
      "Period": 0,
      "PeriodUnit": "Daily",
      "FirstPaymentDate": "1970-01-01",
      "TotalNbOfPayments": 0,
      "CumulativeAmount": 0,
      "FirstAmount": 0,
      "Charges": 0
    },
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    }
  },
  "LoyaltyData": [
    {
      "CardAcquisitionReference": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "LoyaltyAccountID": {
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "IdentificationSupport": "NoCard",
        "LoyaltyID": "string"
      }
    }
  ]
}
```

Request sent to terminal to initiate payment.
It conveys Information related to the Payment transaction to process.
Content of the `PaymentRequest` message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SaleData|[SaleData](#schemasaledata)|true|none|Data related to the Sale System.|
|PaymentTransaction|[PaymentTransaction](#schemapaymenttransaction)|true|none|Data related to the payment and loyalty transaction.|
|PaymentData|[PaymentData](#schemapaymentdata)|false|none|Data related to the payment transaction.<br>If one data element is present.|
|LoyaltyData|[[LoyaltyData](#schemaloyaltydata)]|false|none|Data related to a Loyalty program or account.<br>Loyalty cards used with the payment transaction and read by the Sale System.|

<h2 id="tocS_CardAcquisitionRequest">CardAcquisitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacardacquisitionrequest"></a>
<a id="schema_CardAcquisitionRequest"></a>
<a id="tocScardacquisitionrequest"></a>
<a id="tocscardacquisitionrequest"></a>

```json
{
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "CardAcquisitionTransaction": {
    "AllowedPaymentBrand": [
      "string"
    ],
    "AllowedLoyaltyBrand": [
      "string"
    ],
    "LoyaltyHandling": "Forbidden",
    "CustomerLanguage": "string",
    "ForceEntryMode": [
      "RFID"
    ],
    "ForceCustomerSelectionFlag": true,
    "TotalAmount": 0,
    "PaymentType": "Normal",
    "CashBackFlag": true
  }
}
```

It conveys Information related to the payment and loyalty cards to read and analyse. This message pair is usually followed by a message pair (e.g. payment or loyalty) which refers to this Card Acquisition message pair.
Content of the Card Acquisition Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SaleData|[SaleData](#schemasaledata)|true|none|Data related to the Sale System.|
|CardAcquisitionTransaction|[CardAcquisitionTransaction](#schemacardacquisitiontransaction)|true|none|Data related to the payment and loyalty card acquisition.|

<h2 id="tocS_StoredValueRequest">StoredValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoredvaluerequest"></a>
<a id="schema_StoredValueRequest"></a>
<a id="tocSstoredvaluerequest"></a>
<a id="tocsstoredvaluerequest"></a>

```json
{
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "StoredValueData": [
    {
      "StoredValueProvider": "string",
      "StoredValueTransactionType": "Reserve",
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      },
      "OriginalPOITransaction": {
        "SaleID": "string",
        "POIID": "string",
        "POITransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "ReuseCardDataFlag": true,
        "ApprovalCode": "string",
        "AcquirerID": 0,
        "AmountValue": 0,
        "HostTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        }
      },
      "ProductCode": 1,
      "EanUpc": 0,
      "ItemAmount": 0,
      "Currency": "string"
    }
  ]
}
```

It conveys Information related to the Stored Value transaction to process.
Content of the Stored Value Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SaleData|[SaleData](#schemasaledata)|true|none|Data related to the Sale System.|
|StoredValueData|[[StoredValueData](#schemastoredvaluedata)]|true|none|Data related to the stored value card.|

<h2 id="tocS_ReversalRequest">ReversalRequest</h2>
<!-- backwards compatibility -->
<a id="schemareversalrequest"></a>
<a id="schema_ReversalRequest"></a>
<a id="tocSreversalrequest"></a>
<a id="tocsreversalrequest"></a>

```json
{
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "OriginalPOITransaction": {
    "SaleID": "string",
    "POIID": "string",
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "ReuseCardDataFlag": true,
    "ApprovalCode": "string",
    "AcquirerID": 0,
    "AmountValue": 0,
    "HostTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    }
  },
  "ReversedAmount": 0,
  "ReversalReason": "CustCancel"
}
```

It conveys Information related to the reversal of a previous payment or a loyalty transaction.
Content of the Reversal Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SaleData|[SaleData](#schemasaledata)|false|none|Data associated with the Sale System, with a particular value during the processing of the payment by the POI, including the cards acquisition.|
|OriginalPOITransaction|[OriginalPOITransaction](#schemaoriginalpoitransaction)|true|none|Identification of a previous POI transaction.|
|ReversedAmount|number|false|none|Amount of the payment or loyalty to reverse.<br>ReversedAmount is implicitly equal to the AuthorizedAmount if absent.|
|ReversalReason|[ReversalReason](#schemareversalreason)|true|none|Reason of the payment or loyalty reversal.<br>Possible values:<br>* **CustCancel**<br>* **Malfunction**<br>* **MerchantCancel**<br>* **Unable2Compl**|

#### Enumerated Values

|Property|Value|
|---|---|
|ReversalReason|CustCancel|
|ReversalReason|MerchantCancel|
|ReversalReason|Malfunction|
|ReversalReason|Unable2Compl|

<h2 id="tocS_ReconciliationRequest">ReconciliationRequest</h2>
<!-- backwards compatibility -->
<a id="schemareconciliationrequest"></a>
<a id="schema_ReconciliationRequest"></a>
<a id="tocSreconciliationrequest"></a>
<a id="tocsreconciliationrequest"></a>

```json
{
  "ReconciliationType": "SaleReconciliation",
  "AcquirerID": [
    0
  ],
  "POIReconciliationID": 0
}
```

Content of the Reconciliation Request message.
It conveys Information related to the Reconciliation requested by the Sale System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReconciliationType|[ReconciliationType](#schemareconciliationtype)|true|none|Type of Reconciliation requested by the Sale to the POI.<br>Possible values:<br>* **AcquirerReconciliation**<br>* **AcquirerSynchronisation**<br>* **PreviousReconciliation**<br>* **SaleReconciliation**|
|AcquirerID|[integer]|false|none|Identification of the Acquirer.<br>Could be present only if ReconciliationType is AcquirerReconciliation or AcquirerSynchronisation.|
|POIReconciliationID|integer|false|none|Identification of the reconciliation period between Sale and POI.<br>Absent if ReconciliationType is not PreviousReconciliation.|

#### Enumerated Values

|Property|Value|
|---|---|
|ReconciliationType|SaleReconciliation|
|ReconciliationType|AcquirerSynchronisation|
|ReconciliationType|AcquirerReconciliation|
|ReconciliationType|PreviousReconciliation|

<h2 id="tocS_GetTotalsRequest">GetTotalsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettotalsrequest"></a>
<a id="schema_GetTotalsRequest"></a>
<a id="tocSgettotalsrequest"></a>
<a id="tocsgettotalsrequest"></a>

```json
{
  "TotalDetails": [
    "POIID"
  ],
  "TotalFilter": {
    "POIID": "string",
    "SaleID": "string",
    "OperatorID": "string",
    "ShiftNumber": "string",
    "TotalsGroupID": "string"
  }
}
```

It conveys information from the Sale System related to the scope and the format of the totals to be computed by the POI System.
Content of the Get Totals Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalDetails|[TotalDetails](#schematotaldetails)|false|none|Indicates the hierarchical structure of the reconciliation result of the Sale to POI reconciliation.<br>Required to present totals per value of element included in this cluster (POI Terminal, Sale Terminal, Cashier, Shift, TotalsGroupID).<br>Possible values:<br>* **OperatorID**<br>* **POIID**<br>* **SaleID**<br>* **ShiftNumber**<br>* **TotalsGroupID**|
|TotalFilter|[TotalFilter](#schematotalfilter)|false|none|Filter to compute the totals.<br>Used for the Get Totals, to request totals for a (or a combination of) particular value of the POI Terminal, Sale Terminal, Cashier, Shift, or TotalsGroupID.|

#### Enumerated Values

|Property|Value|
|---|---|
|TotalDetails|POIID|
|TotalDetails|SaleID|
|TotalDetails|OperatorID|
|TotalDetails|ShiftNumber|
|TotalDetails|TotalsGroupID|

<h2 id="tocS_BalanceInquiryRequest">BalanceInquiryRequest</h2>
<!-- backwards compatibility -->
<a id="schemabalanceinquiryrequest"></a>
<a id="schema_BalanceInquiryRequest"></a>
<a id="tocSbalanceinquiryrequest"></a>
<a id="tocsbalanceinquiryrequest"></a>

```json
{
  "PaymentAccountReq": {
    "AccountType": "Default",
    "CardAcquisitionReference": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    }
  },
  "LoyaltyAccountReq": {
    "CardAcquisitionReference": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "LoyaltyAccountID": {
      "EntryMode": [
        "RFID"
      ],
      "IdentificationType": "PAN",
      "IdentificationSupport": "NoCard",
      "LoyaltyID": "string"
    }
  }
}
```

It conveys Information related to the account for which a Balance Inquiry is requested.
Content of the Balance Inquiry Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaymentAccountReq|[PaymentAccountReq](#schemapaymentaccountreq)|false|none|Data related to the account pointed by the payment card.|
|LoyaltyAccountReq|[LoyaltyAccountReq](#schemaloyaltyaccountreq)|false|none|Data related to a requested Loyalty program or account.|

<h2 id="tocS_TransactionStatusRequest">TransactionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schematransactionstatusrequest"></a>
<a id="schema_TransactionStatusRequest"></a>
<a id="tocStransactionstatusrequest"></a>
<a id="tocstransactionstatusrequest"></a>

```json
{
  "MessageReference": {
    "MessageCategory": "Abort",
    "ServiceID": "string",
    "DeviceID": "string",
    "SaleID": "string",
    "POIID": "string"
  },
  "ReceiptReprintFlag": false,
  "DocumentQualifier": [
    "SaleReceipt"
  ]
}
```

Content of the TransactionStatus Request message.
It conveys Information requested for status of the last or current Payment, Loyalty or Reversal transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageReference|[MessageReference](#schemamessagereference)|false|none|Identification of a previous POI transaction.<br>Present if it contains any data.|
|ReceiptReprintFlag|boolean|false|none|Request to reprint the POI receipt(s). Allows reprinting a receipt with a `TransactionStatus` message|
|DocumentQualifier|[[DocumentQualifier](#schemadocumentqualifier)]|false|none|Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send the information to a particular physical printer or to use the paper type accordingly.<br>Possible values:<br>* **CashierReceipt**<br>* **CustomerReceipt**<br>* **Document**<br>* **Journal**<br>* **SaleReceipt**<br>* **Voucher**|

#### Enumerated Values

|Property|Value|
|---|---|
|DocumentQualifier|SaleReceipt|
|DocumentQualifier|CashierReceipt|
|DocumentQualifier|CustomerReceipt|
|DocumentQualifier|Document|
|DocumentQualifier|Voucher|
|DocumentQualifier|Journal|

<h2 id="tocS_AbortRequest">AbortRequest</h2>
<!-- backwards compatibility -->
<a id="schemaabortrequest"></a>
<a id="schema_AbortRequest"></a>
<a id="tocSabortrequest"></a>
<a id="tocsabortrequest"></a>

```json
{
  "MessageReference": {
    "MessageCategory": "Abort",
    "ServiceID": "string",
    "DeviceID": "string",
    "SaleID": "string",
    "POIID": "string"
  },
  "AbortReason": "string",
  "DisplayOutput": {
    "ResponseRequiredFlag": true,
    "MinimumDisplayTime": 0,
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "OutputContent": {
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string",
      "OutputBarcode": {
        "BarcodeValue": "string"
      }
    },
    "MenuEntry": [
      {
        "MenuEntryTag": "Selectable",
        "DefaultSelectedFlag": false,
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string"
      }
    ],
    "OutputSignature": "string"
  }
}
```

Body of the Abort Request message.
It conveys Information requested for identification of the message request carrying the transaction to abort. A message to display on the CustomerError Device could be sent by the Sale System (DisplayOutput).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageReference|[MessageReference](#schemamessagereference)|true|none|Identification of a previous POI transaction.|
|AbortReason|string|true|none|Reason of aborting a transaction.|
|DisplayOutput|[DisplayOutput](#schemadisplayoutput)|false|none|Information to display and the way to process the display.<br>To display an abort message to the Customer.|

<h2 id="tocS_EventNotification">EventNotification</h2>
<!-- backwards compatibility -->
<a id="schemaeventnotification"></a>
<a id="schema_EventNotification"></a>
<a id="tocSeventnotification"></a>
<a id="tocseventnotification"></a>

```json
{
  "TimeStamp": "1970-01-01T00:00:00Z",
  "EventToNotify": "BeginMaintenance",
  "EventDetails": "string",
  "RejectedMessage": "string",
  "MaintenanceRequiredFlag": false,
  "DisplayOutput": [
    {
      "ResponseRequiredFlag": true,
      "MinimumDisplayTime": 0,
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      },
      "MenuEntry": [
        {
          "MenuEntryTag": "Selectable",
          "DefaultSelectedFlag": false,
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string"
        }
      ],
      "OutputSignature": "string"
    }
  ]
}
```

Content of the EventNotification message.
It conveys Information related to the event, and possible action (maintenance, message to display).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeStamp|string(date-time)|true|none|Date and time of a transaction for the Sale System, the POI System or the Acquirer.|
|EventToNotify|[EventToNotify](#schemaeventtonotify)|true|none|Event the POI notifies to the Sale System.<br>Possible values:<br>* **Abort**<br>* **BeginMaintenance**<br>* **CardInserted**<br>* **CardRemoved**<br>* **Completed**<br>* **CustomerLanguage**<br>* **EndMaintenance**<br>* **Initialised**<br>* **KeyPressed**<br>* **OutOfOrder**<br>* **Reject**<br>* **SaleAdmin**<br>* **SaleWakeUp**<br>* **ScanBarcodeResult**<br>* **SecurityAlarm**<br>* **Shutdown**<br>* **StopAssistance**<br>* **UseAnotherCardForPreauth**|
|EventDetails|string|false|none|Information about the event the POI notifies to the Sale System.<br>If present, the Sale logs it for further examination.|
|RejectedMessage|string(byte)|false|none|Message request rejected by the receiver.<br>Mandatory if EventToNotify is Reject, absent in other cases.|
|MaintenanceRequiredFlag|boolean|false|none|Indicates if the occurred event requires maintenance call or action.|
|DisplayOutput|[[DisplayOutput](#schemadisplayoutput)]|false|none|Information to display and the way to process the display.<br>To display an event message.|

#### Enumerated Values

|Property|Value|
|---|---|
|EventToNotify|BeginMaintenance|
|EventToNotify|EndMaintenance|
|EventToNotify|Shutdown|
|EventToNotify|Initialised|
|EventToNotify|OutOfOrder|
|EventToNotify|Completed|
|EventToNotify|Abort|
|EventToNotify|SaleWakeUp|
|EventToNotify|SaleAdmin|
|EventToNotify|CustomerLanguage|
|EventToNotify|KeyPressed|
|EventToNotify|SecurityAlarm|
|EventToNotify|StopAssistance|
|EventToNotify|CardInserted|
|EventToNotify|CardRemoved|
|EventToNotify|Reject|
|EventToNotify|UseAnotherCardForPreauth|
|EventToNotify|ScanBarcodeResult|

<h2 id="tocS_DiagnosisRequest">DiagnosisRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiagnosisrequest"></a>
<a id="schema_DiagnosisRequest"></a>
<a id="tocSdiagnosisrequest"></a>
<a id="tocsdiagnosisrequest"></a>

```json
{
  "POIID": "string",
  "HostDiagnosisFlag": false,
  "AcquirerID": [
    0
  ]
}
```

It conveys Information related to the target POI for which the diagnosis is requested.
Content of the Diagnosis Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|POIID|string|false|none|Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br>MessageHeader.POIID.|
|HostDiagnosisFlag|boolean|false|none|Indicates if Host Diagnosis are required.|
|AcquirerID|[integer]|false|none|Identification of the Acquirer.<br>Present if requesting the diagnosis of these hosts only.|

<h2 id="tocS_DisplayRequest">DisplayRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisplayrequest"></a>
<a id="schema_DisplayRequest"></a>
<a id="tocSdisplayrequest"></a>
<a id="tocsdisplayrequest"></a>

```json
{
  "DisplayOutput": [
    {
      "ResponseRequiredFlag": true,
      "MinimumDisplayTime": 0,
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      },
      "MenuEntry": [
        {
          "MenuEntryTag": "Selectable",
          "DefaultSelectedFlag": false,
          "OutputFormat": "MessageRef",
          "PredefinedContent": {
            "ReferenceID": "string",
            "Language": "string"
          },
          "OutputText": [
            {
              "Text": "string",
              "CharacterSet": 0,
              "StartRow": 1,
              "StartColumn": 1,
              "CharacterWidth": "SingleWidth",
              "CharacterHeight": "SingleHeight",
              "CharacterStyle": "Normal",
              "Alignment": "Left",
              "EndOfLineFlag": true
            }
          ],
          "OutputXHTML": "string"
        }
      ],
      "OutputSignature": "string"
    }
  ]
}
```

It conveys the data to display and the way to process the display. It contains the complete content to display. It might contain an operation (the DisplayOutput element) per Display Device type.
Content of the Display Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayOutput|[[DisplayOutput](#schemadisplayoutput)]|true|none|Information to display and the way to process the display.<br>Complete display content for output devices. At most one DisplayOutput per Device/ InfoQualify pair.|

<h2 id="tocS_InputRequest">InputRequest</h2>
<!-- backwards compatibility -->
<a id="schemainputrequest"></a>
<a id="schema_InputRequest"></a>
<a id="tocSinputrequest"></a>
<a id="tocsinputrequest"></a>

```json
{
  "DisplayOutput": {
    "ResponseRequiredFlag": true,
    "MinimumDisplayTime": 0,
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "OutputContent": {
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string",
      "OutputBarcode": {
        "BarcodeValue": "string"
      }
    },
    "MenuEntry": [
      {
        "MenuEntryTag": "Selectable",
        "DefaultSelectedFlag": false,
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string"
      }
    ],
    "OutputSignature": "string"
  },
  "InputData": {
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "InputCommand": "GetAnyKey",
    "NotifyCardInputFlag": false,
    "MaxInputTime": 0,
    "ImmediateResponseFlag": false,
    "MinLength": 0,
    "MaxLength": 0,
    "MaxDecimalLength": 0,
    "WaitUserValidationFlag": true,
    "DefaultInputString": "string",
    "DefaultLayoutString": "string",
    "StringMask": "string",
    "FromRightToLeftFlag": false,
    "MaskCharactersFlag": false,
    "BeepKeyFlag": false,
    "GlobalCorrectionFlag": false,
    "DisableCancelFlag": false,
    "DisableCorrectFlag": false,
    "DisableValidFlag": false,
    "MenuBackFlag": false
  }
}
```

Content of the `InputRequest` message. It conveys the data to display and how to process it. In addition to the display on the Input Device, it might contain an operation (the `DisplayOutput` element) per Display Device type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayOutput|[DisplayOutput](#schemadisplayoutput)|false|none|Information to display and the way to process the display.|
|InputData|[InputData](#schemainputdata)|true|none|Information related to an Input request. It conveys the target input logical device, the type of input command, and possible minimum and maximum length of the input. In addition, if the requestor might require to receive an Event Notification if a card is inserted in a card reader, with the `NotifyCardInputFlag`.|

<h2 id="tocS_InputUpdate">InputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainputupdate"></a>
<a id="schema_InputUpdate"></a>
<a id="tocSinputupdate"></a>
<a id="tocsinputupdate"></a>

```json
{
  "MessageReference": {
    "MessageCategory": "Abort",
    "ServiceID": "string",
    "DeviceID": "string",
    "SaleID": "string",
    "POIID": "string"
  },
  "OutputContent": {
    "OutputFormat": "MessageRef",
    "PredefinedContent": {
      "ReferenceID": "string",
      "Language": "string"
    },
    "OutputText": [
      {
        "Text": "string",
        "CharacterSet": 0,
        "StartRow": 1,
        "StartColumn": 1,
        "CharacterWidth": "SingleWidth",
        "CharacterHeight": "SingleHeight",
        "CharacterStyle": "Normal",
        "Alignment": "Left",
        "EndOfLineFlag": true
      }
    ],
    "OutputXHTML": "string",
    "OutputBarcode": {
      "BarcodeValue": "string"
    }
  },
  "MenuEntry": [
    {
      "MenuEntryTag": "Selectable",
      "DefaultSelectedFlag": false,
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string"
    }
  ],
  "OutputSignature": "string",
  "MinLength": 0,
  "MaxLength": 0,
  "MaxDecimalLength": 0
}
```

Definition: Content of the Input Update message. : It conveys
update of the display of an Input request in progress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageReference|[MessageReference](#schemamessagereference)|true|none|Identification of a previous POI transaction.<br>To abort a transaction in progress or to request the status of a transaction from which no response has been received. It identifies the message header of the message request to abort or request the status.|
|OutputContent|[OutputContent](#schemaoutputcontent)|true|none|Content to display or print.<br>This is a sequence of elements if they have different formats.|
|MenuEntry|[[MenuEntry](#schemamenuentry)]|false|none|none|
|OutputSignature|string(byte)|false|none|none|
|MinLength|integer|false|none|none|
|MaxLength|integer|false|none|none|
|MaxDecimalLength|integer|false|none|none|

<h2 id="tocS_PrintRequest">PrintRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprintrequest"></a>
<a id="schema_PrintRequest"></a>
<a id="tocSprintrequest"></a>
<a id="tocsprintrequest"></a>

```json
{
  "PrintOutput": {
    "DocumentQualifier": "SaleReceipt",
    "ResponseMode": "NotRequired",
    "IntegratedPrintFlag": false,
    "RequiredSignatureFlag": false,
    "OutputContent": {
      "OutputFormat": "MessageRef",
      "PredefinedContent": {
        "ReferenceID": "string",
        "Language": "string"
      },
      "OutputText": [
        {
          "Text": "string",
          "CharacterSet": 0,
          "StartRow": 1,
          "StartColumn": 1,
          "CharacterWidth": "SingleWidth",
          "CharacterHeight": "SingleHeight",
          "CharacterStyle": "Normal",
          "Alignment": "Left",
          "EndOfLineFlag": true
        }
      ],
      "OutputXHTML": "string",
      "OutputBarcode": {
        "BarcodeValue": "string"
      }
    }
  }
}
```

Content of the Print Request message.
It conveys the complete data to print and how to process the print.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrintOutput|[PrintOutput](#schemaprintoutput)|true|none|Information to print and how to process it.|

<h2 id="tocS_CardReaderAPDURequest">CardReaderAPDURequest</h2>
<!-- backwards compatibility -->
<a id="schemacardreaderapdurequest"></a>
<a id="schema_CardReaderAPDURequest"></a>
<a id="tocScardreaderapdurequest"></a>
<a id="tocscardreaderapdurequest"></a>

```json
{
  "APDUClass": "string",
  "APDUInstruction": "string",
  "APDUPar1": "string",
  "APDUPar2": "string",
  "APDUData": "string",
  "APDUExpectedLength": "string"
}
```

It contains the APDU request to send to the chip of the card, and a possible invitation message to display on the CashierInterface or the CustomerInterface.
Content of the Card Reader APDU Request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|APDUClass|string(byte)|true|none|Class field of the APDU command (CLA). APDU request for Card Reader device request. For specific card like synchronous card, a private value should be used in accordance to ISO 7816- 4 (private range D0-FE).|
|APDUInstruction|string(byte)|true|none|Instruction field of the APDU command (INS).|
|APDUPar1|string(byte)|true|none|Parameter 1 field of the APDU command (P1).|
|APDUPar2|string(byte)|true|none|Parameter 2 field of the APDU command(P2).|
|APDUData|string(byte)|false|none|Data field of the APDU command (Lc + Data).|
|APDUExpectedLength|string(byte)|false|none|Expected length of the data field of the APDU response to the command (Le).|

<h2 id="tocS_LoginResponse">LoginResponse</h2>
<!-- backwards compatibility -->
<a id="schemaloginresponse"></a>
<a id="schema_LoginResponse"></a>
<a id="tocSloginresponse"></a>
<a id="tocsloginresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "POISystemData": {
    "DateTime": "1970-01-01T00:00:00Z",
    "POISoftware": {
      "ManufacturerID": "string",
      "ApplicationName": "string",
      "SoftwareVersion": "string",
      "CertificationCode": "string"
    },
    "POIStatus": {
      "GlobalStatus": "OK",
      "SecurityOKFlag": true,
      "PEDOKFlag": true,
      "CardReaderOKFlag": true,
      "PrinterStatus": "OK",
      "CommunicationOKFlag": true,
      "FraudPreventionFlag": true
    }
  },
  "TokenRequestStatus": true
}
```

It conveys Information related to the Login to process.
Content of the Login Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|POISystemData|[POISystemData](#schemapoisystemdata)|false|none|Information related to the POI System.<br>Returned if the response result is Success.|
|TokenRequestStatus|boolean|false|none|If token is managed by the POI, the status of the token request.|

<h2 id="tocS_LogoutResponse">LogoutResponse</h2>
<!-- backwards compatibility -->
<a id="schemalogoutresponse"></a>
<a id="schema_LogoutResponse"></a>
<a id="tocSlogoutresponse"></a>
<a id="tocslogoutresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  }
}
```

It conveys the result of the Logout.
Content of the Logout Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|

<h2 id="tocS_EnableServiceResponse">EnableServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenableserviceresponse"></a>
<a id="schema_EnableServiceResponse"></a>
<a id="tocSenableserviceresponse"></a>
<a id="tocsenableserviceresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  }
}
```

It conveys the result of the Enable Service processing.
Content of the Enable Service Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|

<h2 id="tocS_AdminResponse">AdminResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminresponse"></a>
<a id="schema_AdminResponse"></a>
<a id="tocSadminresponse"></a>
<a id="tocsadminresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  }
}
```

It conveys the result of the Custom Admin.
Content of the Custom Admin Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|

<h2 id="tocS_PaymentResponse">PaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentresponse"></a>
<a id="schema_PaymentResponse"></a>
<a id="tocSpaymentresponse"></a>
<a id="tocspaymentresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "POIData": {
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "POIReconciliationID": 0
  },
  "PaymentResult": {
    "PaymentType": "Normal",
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    },
    "AmountsResp": {
      "Currency": "string",
      "AuthorizedAmount": 0,
      "TotalRebatesAmount": 0,
      "TotalFeesAmount": 0,
      "CashBackAmount": 0,
      "TipAmount": 0
    },
    "Instalment": {
      "InstalmentType": "DeferredInstalments",
      "SequenceNumber": 0,
      "PlanID": "string",
      "Period": 0,
      "PeriodUnit": "Daily",
      "FirstPaymentDate": "1970-01-01",
      "TotalNbOfPayments": 0,
      "CumulativeAmount": 0,
      "FirstAmount": 0,
      "Charges": 0
    },
    "CurrencyConversion": [
      {
        "CustomerApprovedFlag": true,
        "ConvertedAmount": {
          "AmountValue": 0,
          "Currency": "string"
        },
        "Rate": 0,
        "Markup": 0,
        "Commission": 0,
        "Declaration": "string"
      }
    ],
    "MerchantOverrideFlag": false,
    "CapturedSignature": {
      "AreaSize": {
        "X": "string",
        "Y": "string"
      },
      "SignaturePoint": [
        {
          "X": "string",
          "Y": "string"
        }
      ]
    },
    "ProtectedSignature": "string",
    "CustomerLanguage": "string",
    "OnlineFlag": true,
    "AuthenticationMethod": [
      "Bypass"
    ],
    "ValidityDate": "1970-01-01",
    "PaymentAcquirerData": {
      "AcquirerID": 0,
      "MerchantID": "string",
      "AcquirerPOIID": "string",
      "AcquirerTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ApprovalCode": "string",
      "HostReconciliationID": "string"
    }
  },
  "LoyaltyResult": [
    {
      "LoyaltyAccount": {
        "LoyaltyAccountID": {
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "IdentificationSupport": "NoCard",
          "LoyaltyID": "string"
        },
        "LoyaltyBrand": "string"
      },
      "CurrentBalance": 0,
      "LoyaltyAcquirerData": {
        "LoyaltyAcquirerID": "string",
        "ApprovalCode": "string",
        "LoyaltyTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "HostReconciliationID": "string"
      }
    }
  ],
  "PaymentReceipt": [
    {
      "DocumentQualifier": "SaleReceipt",
      "IntegratedPrintFlag": true,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  ]
}
```

It conveys Information related to the Payment transaction processed by the POI System.
Content of the Payment Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|SaleData|[SaleData](#schemasaledata)|true|none|Data related to the Sale System.<br>Copy.|
|POIData|[POIData](#schemapoidata)|true|none|Data related to the POI System.|
|PaymentResult|[PaymentResult](#schemapaymentresult)|false|none|Data related to the result of a processed payment transaction.<br>If one data element is present.|
|LoyaltyResult|[[LoyaltyResult](#schemaloyaltyresult)]|false|none|Data related to the result of a processed loyalty transaction.<br>Loyalty cards used with the payment transaction.|
|PaymentReceipt|[[PaymentReceipt](#schemapaymentreceipt)]|false|none|Customer or Merchant payment receipt. If the payment receipts are printed by the Sale system and the POI or the Sale does not implement the Print exchange (Basic profile).|

<h2 id="tocS_CardAcquisitionResponse">CardAcquisitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardacquisitionresponse"></a>
<a id="schema_CardAcquisitionResponse"></a>
<a id="tocScardacquisitionresponse"></a>
<a id="tocscardacquisitionresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "POIData": {
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "POIReconciliationID": 0
  },
  "PaymentBrand": [
    "string"
  ],
  "PaymentInstrumentData": {
    "PaymentInstrumentType": "Card",
    "ProtectedCardData": "string",
    "CardData": {
      "PaymentBrand": "string",
      "MaskedPan": "string",
      "PaymentAccountRef": "string",
      "EntryMode": [
        "RFID"
      ],
      "CardCountryCode": 3,
      "ProtectedCardData": "string",
      "SensitiveCardData": {
        "PAN": 8,
        "CardSeqNumb": 2,
        "ExpiryDate": 4,
        "TrackData": [
          {
            "TrackNumb": 2,
            "TrackFormat": "ISO",
            "TrackValue": "string"
          }
        ]
      },
      "PaymentToken": {
        "TokenRequestedType": "Transaction",
        "TokenValue": "string",
        "ExpiryDateTime": "1970-01-01T00:00:00Z"
      }
    },
    "CheckData": {
      "BankID": "string",
      "AccountNumber": "string",
      "CheckNumber": "string",
      "TrackData": {
        "TrackNumb": 2,
        "TrackFormat": "ISO",
        "TrackValue": "string"
      },
      "CheckCardNumber": "string",
      "TypeCode": "Personal",
      "Country": "string"
    },
    "MobileData": {
      "MobileCountryCode": 3,
      "MobileNetworkCode": 2,
      "MaskedMSISDN": 0,
      "Geolocation": {
        "GeographicCoordinates": {
          "Latitude": "string",
          "Longitude": "string"
        },
        "UTMCoordinates": {
          "UTMZone": "string",
          "UTMEastward": "string",
          "UTMNorthward": "string"
        }
      },
      "ProtectedMobileData": "string",
      "SensitiveMobileData": {
        "MSISDN": 0,
        "IMSI": 0,
        "IMEI": 0
      }
    },
    "StoredValueAccountID": {
      "StoredValueAccountType": "GiftCard",
      "StoredValueProvider": "string",
      "OwnerName": "string",
      "ExpiryDate": 4,
      "EntryMode": [
        "RFID"
      ],
      "IdentificationType": "PAN",
      "StoredValueID": "string"
    }
  },
  "LoyaltyAccount": [
    {
      "LoyaltyAccountID": {
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "IdentificationSupport": "NoCard",
        "LoyaltyID": "string"
      },
      "LoyaltyBrand": "string"
    }
  ]
}
```

It conveys Information related to the payment and loyalty cards read and processed by the POI System and entered by the Customer.
Content of the Card Acquisition Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|SaleData|[SaleData](#schemasaledata)|true|none|Data related to the Sale System.|
|POIData|[POIData](#schemapoidata)|true|none|Data related to the POI System.|
|PaymentBrand|[string]|false|none|Type of payment card.<br>Brands available for payment by the card and not chosen by the Customer.|
|PaymentInstrumentData|[PaymentInstrumentData](#schemapaymentinstrumentdata)|false|none|Data related to the instrument of payment for the transaction.<br>If this type of payment card is configured to send information if the CardAcquisition response.|
|LoyaltyAccount|[[LoyaltyAccount](#schemaloyaltyaccount)]|false|none|Data related to the loyalty System.|

<h2 id="tocS_LoyaltyResponse">LoyaltyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaloyaltyresponse"></a>
<a id="schema_LoyaltyResponse"></a>
<a id="tocSloyaltyresponse"></a>
<a id="tocsloyaltyresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "POIData": {
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "POIReconciliationID": 0
  },
  "LoyaltyResult": [
    {
      "LoyaltyAccount": {
        "LoyaltyAccountID": {
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "IdentificationSupport": "NoCard",
          "LoyaltyID": "string"
        },
        "LoyaltyBrand": "string"
      },
      "CurrentBalance": 0,
      "LoyaltyAcquirerData": {
        "LoyaltyAcquirerID": "string",
        "ApprovalCode": "string",
        "LoyaltyTransactionID": {
          "TransactionID": "string",
          "TimeStamp": "1970-01-01T00:00:00Z"
        },
        "HostReconciliationID": "string"
      }
    }
  ],
  "PaymentReceipt": [
    {
      "DocumentQualifier": "SaleReceipt",
      "IntegratedPrintFlag": true,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  ]
}
```

It conveys Information related to the Loyalty transaction processed by the POI System.
Content of the Loyalty Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|SaleData|[SaleData](#schemasaledata)|true|none|Data related to the Sale System.|
|POIData|[POIData](#schemapoidata)|true|none|Data related to the POI System.|
|LoyaltyResult|[[LoyaltyResult](#schemaloyaltyresult)]|false|none|Data related to the result of a processed loyalty transaction.<br>If loyalty account identified.|
|PaymentReceipt|[[PaymentReceipt](#schemapaymentreceipt)]|false|none|none|

<h2 id="tocS_StoredValueResponse">StoredValueResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoredvalueresponse"></a>
<a id="schema_StoredValueResponse"></a>
<a id="tocSstoredvalueresponse"></a>
<a id="tocsstoredvalueresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "SaleData": {
    "OperatorID": "string",
    "OperatorLanguage": "string",
    "ShiftNumber": "string",
    "SaleTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "SaleReferenceID": "string",
    "SaleTerminalData": {
      "TotalsGroupID": "string"
    },
    "TokenRequestedType": "Transaction",
    "CustomerOrderID": "string",
    "CustomerOrderReq": [
      "Open"
    ],
    "SaleToPOIData": "string",
    "SaleToAcquirerData": "string",
    "SaleToIssuerData": {
      "StatementReference": "string"
    }
  },
  "POIData": {
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "POIReconciliationID": 0
  },
  "StoredValueResult": [
    {
      "StoredValueTransactionType": "Reserve",
      "ProductCode": 1,
      "EanUpc": 0,
      "ItemAmount": 0,
      "Currency": "string",
      "StoredValueAccountStatus": {
        "StoredValueAccountID": {
          "StoredValueAccountType": "GiftCard",
          "StoredValueProvider": "string",
          "OwnerName": "string",
          "ExpiryDate": 4,
          "EntryMode": [
            "RFID"
          ],
          "IdentificationType": "PAN",
          "StoredValueID": "string"
        },
        "CurrentBalance": 0
      },
      "HostTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "PaymentReceipt": [
    {
      "DocumentQualifier": "SaleReceipt",
      "IntegratedPrintFlag": true,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  ]
}
```

It conveys Information related to the Stored Value transaction processed by the POI System.
Content of the Stored Value Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|SaleData|[SaleData](#schemasaledata)|true|none|Data related to the Sale System.|
|POIData|[POIData](#schemapoidata)|true|none|Data related to the POI System.|
|StoredValueResult|[[StoredValueResult](#schemastoredvalueresult)]|false|none|Result of loading/reloading a stored value card.<br>If StoredValueResponse.Result is Success or Partial, one entry per StoredValueRequest.StoredValueData loaded or activated.|
|PaymentReceipt|[[PaymentReceipt](#schemapaymentreceipt)]|false|none|none|

<h2 id="tocS_ReversalResponse">ReversalResponse</h2>
<!-- backwards compatibility -->
<a id="schemareversalresponse"></a>
<a id="schema_ReversalResponse"></a>
<a id="tocSreversalresponse"></a>
<a id="tocsreversalresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "POIData": {
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "POIReconciliationID": 0
  },
  "OriginalPOITransaction": {
    "SaleID": "string",
    "POIID": "string",
    "POITransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    },
    "ReuseCardDataFlag": true,
    "ApprovalCode": "string",
    "AcquirerID": 0,
    "AmountValue": 0,
    "HostTransactionID": {
      "TransactionID": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    }
  },
  "ReversedAmount": 0,
  "PaymentReceipt": [
    {
      "DocumentQualifier": "SaleReceipt",
      "IntegratedPrintFlag": true,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  ]
}
```

It conveys Information related to the reversal processed by the POI System.
Content of the Reversal Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|POIData|[POIData](#schemapoidata)|false|none|Data related to the POI System.<br>If Result is Success.|
|OriginalPOITransaction|[OriginalPOITransaction](#schemaoriginalpoitransaction)|false|none|Identification of a previous POI transaction.<br>In the Payment Request message, it allows using the card of a previous CardAcquisition or Payment request.|
|ReversedAmount|number|false|none|Amount of the payment or loyalty to reverse.<br>Copy.|
|PaymentReceipt|[[PaymentReceipt](#schemapaymentreceipt)]|false|none|none|

<h2 id="tocS_ReconciliationResponse">ReconciliationResponse</h2>
<!-- backwards compatibility -->
<a id="schemareconciliationresponse"></a>
<a id="schema_ReconciliationResponse"></a>
<a id="tocSreconciliationresponse"></a>
<a id="tocsreconciliationresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "ReconciliationType": "SaleReconciliation",
  "POIReconciliationID": 0,
  "TransactionTotals": [
    {
      "PaymentInstrumentType": "Card",
      "AcquirerID": 0,
      "HostReconciliationID": "string",
      "CardBrand": "string",
      "POIID": "string",
      "SaleID": "string",
      "OperatorID": "string",
      "ShiftNumber": "string",
      "TotalsGroupID": "string",
      "PaymentCurrency": "string",
      "PaymentTotals": [
        {
          "TransactionType": "Debit",
          "TransactionCount": 0,
          "TransactionAmount": 0
        }
      ]
    }
  ]
}
```

It conveys Information related to the Reconciliation transaction processed by the POI System.
Content of the Reconciliation Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|ReconciliationType|[ReconciliationType](#schemareconciliationtype)|true|none|Type of Reconciliation requested by the Sale to the POI.<br>Possible values:<br>* **AcquirerReconciliation**<br>* **AcquirerSynchronisation**<br>* **PreviousReconciliation**<br>* **SaleReconciliation**|
|POIReconciliationID|integer|false|none|Identification of the reconciliation period between Sale and POI.<br>Absent if ReconciliationType is `AcquirerReconciliation`.|
|TransactionTotals|[[TransactionTotals](#schematransactiontotals)]|false|none|Result of the Sale to POI Reconciliation processing.<br>If `Response.Result` is Success.|

#### Enumerated Values

|Property|Value|
|---|---|
|ReconciliationType|SaleReconciliation|
|ReconciliationType|AcquirerSynchronisation|
|ReconciliationType|AcquirerReconciliation|
|ReconciliationType|PreviousReconciliation|

<h2 id="tocS_GetTotalsResponse">GetTotalsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettotalsresponse"></a>
<a id="schema_GetTotalsResponse"></a>
<a id="tocSgettotalsresponse"></a>
<a id="tocsgettotalsresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "POIReconciliationID": 0,
  "TransactionTotals": [
    {
      "PaymentInstrumentType": "Card",
      "AcquirerID": 0,
      "HostReconciliationID": "string",
      "CardBrand": "string",
      "POIID": "string",
      "SaleID": "string",
      "OperatorID": "string",
      "ShiftNumber": "string",
      "TotalsGroupID": "string",
      "PaymentCurrency": "string",
      "PaymentTotals": [
        {
          "TransactionType": "Debit",
          "TransactionCount": 0,
          "TransactionAmount": 0
        }
      ]
    }
  ]
}
```

Content of the Reconciliation Response message.
It conveys Information related to the Reconciliation transaction processed by the POI System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|POIReconciliationID|integer|true|none|Identification of the reconciliation period between Sale and POI.|
|TransactionTotals|[[TransactionTotals](#schematransactiontotals)]|false|none|Result of the Sale to POI Reconciliation processing.<br>If `Response.Result` is Success.|

<h2 id="tocS_BalanceInquiryResponse">BalanceInquiryResponse</h2>
<!-- backwards compatibility -->
<a id="schemabalanceinquiryresponse"></a>
<a id="schema_BalanceInquiryResponse"></a>
<a id="tocSbalanceinquiryresponse"></a>
<a id="tocsbalanceinquiryresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "PaymentAccountStatus": {
    "PaymentInstrumentData": {
      "PaymentInstrumentType": "Card",
      "ProtectedCardData": "string",
      "CardData": {
        "PaymentBrand": "string",
        "MaskedPan": "string",
        "PaymentAccountRef": "string",
        "EntryMode": [
          "RFID"
        ],
        "CardCountryCode": 3,
        "ProtectedCardData": "string",
        "SensitiveCardData": {
          "PAN": 8,
          "CardSeqNumb": 2,
          "ExpiryDate": 4,
          "TrackData": [
            {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            }
          ]
        },
        "PaymentToken": {
          "TokenRequestedType": "Transaction",
          "TokenValue": "string",
          "ExpiryDateTime": "1970-01-01T00:00:00Z"
        }
      },
      "CheckData": {
        "BankID": "string",
        "AccountNumber": "string",
        "CheckNumber": "string",
        "TrackData": {
          "TrackNumb": 2,
          "TrackFormat": "ISO",
          "TrackValue": "string"
        },
        "CheckCardNumber": "string",
        "TypeCode": "Personal",
        "Country": "string"
      },
      "MobileData": {
        "MobileCountryCode": 3,
        "MobileNetworkCode": 2,
        "MaskedMSISDN": 0,
        "Geolocation": {
          "GeographicCoordinates": {
            "Latitude": "string",
            "Longitude": "string"
          },
          "UTMCoordinates": {
            "UTMZone": "string",
            "UTMEastward": "string",
            "UTMNorthward": "string"
          }
        },
        "ProtectedMobileData": "string",
        "SensitiveMobileData": {
          "MSISDN": 0,
          "IMSI": 0,
          "IMEI": 0
        }
      },
      "StoredValueAccountID": {
        "StoredValueAccountType": "GiftCard",
        "StoredValueProvider": "string",
        "OwnerName": "string",
        "ExpiryDate": 4,
        "EntryMode": [
          "RFID"
        ],
        "IdentificationType": "PAN",
        "StoredValueID": "string"
      }
    },
    "CurrentBalance": 0,
    "Currency": "string",
    "PaymentAcquirerData": {
      "AcquirerID": 0,
      "MerchantID": "string",
      "AcquirerPOIID": "string",
      "AcquirerTransactionID": {
        "TransactionID": "string",
        "TimeStamp": "1970-01-01T00:00:00Z"
      },
      "ApprovalCode": "string",
      "HostReconciliationID": "string"
    }
  },
  "PaymentReceipt": [
    {
      "DocumentQualifier": "SaleReceipt",
      "IntegratedPrintFlag": true,
      "RequiredSignatureFlag": false,
      "OutputContent": {
        "OutputFormat": "MessageRef",
        "PredefinedContent": {
          "ReferenceID": "string",
          "Language": "string"
        },
        "OutputText": [
          {
            "Text": "string",
            "CharacterSet": 0,
            "StartRow": 1,
            "StartColumn": 1,
            "CharacterWidth": "SingleWidth",
            "CharacterHeight": "SingleHeight",
            "CharacterStyle": "Normal",
            "Alignment": "Left",
            "EndOfLineFlag": true
          }
        ],
        "OutputXHTML": "string",
        "OutputBarcode": {
          "BarcodeValue": "string"
        }
      }
    }
  ]
}
```

Content of the Balance Inquiry Response message.
It conveys the balance and the identification of the associated payment, loyalty or stored value account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|PaymentAccountStatus|[PaymentAccountStatus](#schemapaymentaccountstatus)|false|none|Data related to the result of a Balance Inquiry request.<br>If BalanceInquiryRequest. PaymentAccount present.|
|PaymentReceipt|[[PaymentReceipt](#schemapaymentreceipt)]|false|none|none|

<h2 id="tocS_CardReaderAPDUResponse">CardReaderAPDUResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardreaderapduresponse"></a>
<a id="schema_CardReaderAPDUResponse"></a>
<a id="tocScardreaderapduresponse"></a>
<a id="tocscardreaderapduresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "APDUData": "string",
  "CardStatusWords": "string"
}
```

Content of the Card Reader APDU Response message.
It contains the result of the requested service, APDU response sent by the chip of the card in response to the APDU request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|APDUData|string(byte)|false|none|Data field of the APDU command (Lc + Data).|
|CardStatusWords|string(byte)|true|none|Status of a smartcard response to a command (SW1-SW2).|

<h2 id="tocS_TransactionStatusResponse">TransactionStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactionstatusresponse"></a>
<a id="schema_TransactionStatusResponse"></a>
<a id="tocStransactionstatusresponse"></a>
<a id="tocstransactionstatusresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "MessageReference": {
    "MessageCategory": "Abort",
    "ServiceID": "string",
    "DeviceID": "string",
    "SaleID": "string",
    "POIID": "string"
  },
  "RepeatedMessageResponse": {
    "MessageHeader": {
      "ProtocolVersion": "string",
      "MessageClass": "Service",
      "MessageCategory": "Abort",
      "MessageType": "Request",
      "ServiceID": "string",
      "DeviceID": "string",
      "SaleID": "string",
      "POIID": "string"
    },
    "RepeatedResponseMessageBody": {
      "LoyaltyResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "SaleData": {
          "OperatorID": "string",
          "OperatorLanguage": "string",
          "ShiftNumber": "string",
          "SaleTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "SaleReferenceID": "string",
          "SaleTerminalData": {
            "TotalsGroupID": "string"
          },
          "TokenRequestedType": "Transaction",
          "CustomerOrderID": "string",
          "CustomerOrderReq": [
            "Open"
          ],
          "SaleToPOIData": "string",
          "SaleToAcquirerData": "string",
          "SaleToIssuerData": {
            "StatementReference": "string"
          }
        },
        "POIData": {
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "POIReconciliationID": 0
        },
        "LoyaltyResult": [
          {
            "LoyaltyAccount": {
              "LoyaltyAccountID": {
                "EntryMode": [
                  "RFID"
                ],
                "IdentificationType": "PAN",
                "IdentificationSupport": "NoCard",
                "LoyaltyID": "string"
              },
              "LoyaltyBrand": "string"
            },
            "CurrentBalance": 0,
            "LoyaltyAcquirerData": {
              "LoyaltyAcquirerID": "string",
              "ApprovalCode": "string",
              "LoyaltyTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "HostReconciliationID": "string"
            }
          }
        ],
        "PaymentReceipt": [
          {
            "DocumentQualifier": "SaleReceipt",
            "IntegratedPrintFlag": true,
            "RequiredSignatureFlag": false,
            "OutputContent": {
              "OutputFormat": "MessageRef",
              "PredefinedContent": {
                "ReferenceID": "string",
                "Language": "string"
              },
              "OutputText": [
                {
                  "Text": "string",
                  "CharacterSet": 0,
                  "StartRow": 1,
                  "StartColumn": 1,
                  "CharacterWidth": "SingleWidth",
                  "CharacterHeight": "SingleHeight",
                  "CharacterStyle": "Normal",
                  "Alignment": "Left",
                  "EndOfLineFlag": true
                }
              ],
              "OutputXHTML": "string",
              "OutputBarcode": {
                "BarcodeValue": "string"
              }
            }
          }
        ]
      },
      "PaymentResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "SaleData": {
          "OperatorID": "string",
          "OperatorLanguage": "string",
          "ShiftNumber": "string",
          "SaleTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "SaleReferenceID": "string",
          "SaleTerminalData": {
            "TotalsGroupID": "string"
          },
          "TokenRequestedType": "Transaction",
          "CustomerOrderID": "string",
          "CustomerOrderReq": [
            "Open"
          ],
          "SaleToPOIData": "string",
          "SaleToAcquirerData": "string",
          "SaleToIssuerData": {
            "StatementReference": "string"
          }
        },
        "POIData": {
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "POIReconciliationID": 0
        },
        "PaymentResult": {
          "PaymentType": "Normal",
          "PaymentInstrumentData": {
            "PaymentInstrumentType": "Card",
            "ProtectedCardData": "string",
            "CardData": {
              "PaymentBrand": "string",
              "MaskedPan": "string",
              "PaymentAccountRef": "string",
              "EntryMode": [
                "RFID"
              ],
              "CardCountryCode": 3,
              "ProtectedCardData": "string",
              "SensitiveCardData": {
                "PAN": 8,
                "CardSeqNumb": 2,
                "ExpiryDate": 4,
                "TrackData": [
                  {
                    "TrackNumb": 2,
                    "TrackFormat": "ISO",
                    "TrackValue": "string"
                  }
                ]
              },
              "PaymentToken": {
                "TokenRequestedType": "Transaction",
                "TokenValue": "string",
                "ExpiryDateTime": "1970-01-01T00:00:00Z"
              }
            },
            "CheckData": {
              "BankID": "string",
              "AccountNumber": "string",
              "CheckNumber": "string",
              "TrackData": {
                "TrackNumb": 2,
                "TrackFormat": "ISO",
                "TrackValue": "string"
              },
              "CheckCardNumber": "string",
              "TypeCode": "Personal",
              "Country": "string"
            },
            "MobileData": {
              "MobileCountryCode": 3,
              "MobileNetworkCode": 2,
              "MaskedMSISDN": 0,
              "Geolocation": {
                "GeographicCoordinates": {
                  "Latitude": "string",
                  "Longitude": "string"
                },
                "UTMCoordinates": {
                  "UTMZone": "string",
                  "UTMEastward": "string",
                  "UTMNorthward": "string"
                }
              },
              "ProtectedMobileData": "string",
              "SensitiveMobileData": {
                "MSISDN": 0,
                "IMSI": 0,
                "IMEI": 0
              }
            },
            "StoredValueAccountID": {
              "StoredValueAccountType": "GiftCard",
              "StoredValueProvider": "string",
              "OwnerName": "string",
              "ExpiryDate": 4,
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "StoredValueID": "string"
            }
          },
          "AmountsResp": {
            "Currency": "string",
            "AuthorizedAmount": 0,
            "TotalRebatesAmount": 0,
            "TotalFeesAmount": 0,
            "CashBackAmount": 0,
            "TipAmount": 0
          },
          "Instalment": {
            "InstalmentType": "DeferredInstalments",
            "SequenceNumber": 0,
            "PlanID": "string",
            "Period": 0,
            "PeriodUnit": "Daily",
            "FirstPaymentDate": "1970-01-01",
            "TotalNbOfPayments": 0,
            "CumulativeAmount": 0,
            "FirstAmount": 0,
            "Charges": 0
          },
          "CurrencyConversion": [
            {
              "CustomerApprovedFlag": true,
              "ConvertedAmount": {
                "AmountValue": 0,
                "Currency": "string"
              },
              "Rate": 0,
              "Markup": 0,
              "Commission": 0,
              "Declaration": "string"
            }
          ],
          "MerchantOverrideFlag": false,
          "CapturedSignature": {
            "AreaSize": {
              "X": "string",
              "Y": "string"
            },
            "SignaturePoint": [
              {
                "X": "string",
                "Y": "string"
              }
            ]
          },
          "ProtectedSignature": "string",
          "CustomerLanguage": "string",
          "OnlineFlag": true,
          "AuthenticationMethod": [
            "Bypass"
          ],
          "ValidityDate": "1970-01-01",
          "PaymentAcquirerData": {
            "AcquirerID": 0,
            "MerchantID": "string",
            "AcquirerPOIID": "string",
            "AcquirerTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            },
            "ApprovalCode": "string",
            "HostReconciliationID": "string"
          }
        },
        "LoyaltyResult": [
          {
            "LoyaltyAccount": {
              "LoyaltyAccountID": {
                "EntryMode": [
                  "RFID"
                ],
                "IdentificationType": "PAN",
                "IdentificationSupport": "NoCard",
                "LoyaltyID": "string"
              },
              "LoyaltyBrand": "string"
            },
            "CurrentBalance": 0,
            "LoyaltyAcquirerData": {
              "LoyaltyAcquirerID": "string",
              "ApprovalCode": "string",
              "LoyaltyTransactionID": {
                "TransactionID": "string",
                "TimeStamp": "1970-01-01T00:00:00Z"
              },
              "HostReconciliationID": "string"
            }
          }
        ],
        "PaymentReceipt": [
          {
            "DocumentQualifier": "SaleReceipt",
            "IntegratedPrintFlag": true,
            "RequiredSignatureFlag": false,
            "OutputContent": {
              "OutputFormat": "MessageRef",
              "PredefinedContent": {
                "ReferenceID": "string",
                "Language": "string"
              },
              "OutputText": [
                {
                  "Text": "string",
                  "CharacterSet": 0,
                  "StartRow": 1,
                  "StartColumn": 1,
                  "CharacterWidth": "SingleWidth",
                  "CharacterHeight": "SingleHeight",
                  "CharacterStyle": "Normal",
                  "Alignment": "Left",
                  "EndOfLineFlag": true
                }
              ],
              "OutputXHTML": "string",
              "OutputBarcode": {
                "BarcodeValue": "string"
              }
            }
          }
        ]
      },
      "ReversalResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "POIData": {
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "POIReconciliationID": 0
        },
        "OriginalPOITransaction": {
          "SaleID": "string",
          "POIID": "string",
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "ReuseCardDataFlag": true,
          "ApprovalCode": "string",
          "AcquirerID": 0,
          "AmountValue": 0,
          "HostTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          }
        },
        "ReversedAmount": 0,
        "PaymentReceipt": [
          {
            "DocumentQualifier": "SaleReceipt",
            "IntegratedPrintFlag": true,
            "RequiredSignatureFlag": false,
            "OutputContent": {
              "OutputFormat": "MessageRef",
              "PredefinedContent": {
                "ReferenceID": "string",
                "Language": "string"
              },
              "OutputText": [
                {
                  "Text": "string",
                  "CharacterSet": 0,
                  "StartRow": 1,
                  "StartColumn": 1,
                  "CharacterWidth": "SingleWidth",
                  "CharacterHeight": "SingleHeight",
                  "CharacterStyle": "Normal",
                  "Alignment": "Left",
                  "EndOfLineFlag": true
                }
              ],
              "OutputXHTML": "string",
              "OutputBarcode": {
                "BarcodeValue": "string"
              }
            }
          }
        ]
      },
      "StoredValueResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "SaleData": {
          "OperatorID": "string",
          "OperatorLanguage": "string",
          "ShiftNumber": "string",
          "SaleTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "SaleReferenceID": "string",
          "SaleTerminalData": {
            "TotalsGroupID": "string"
          },
          "TokenRequestedType": "Transaction",
          "CustomerOrderID": "string",
          "CustomerOrderReq": [
            "Open"
          ],
          "SaleToPOIData": "string",
          "SaleToAcquirerData": "string",
          "SaleToIssuerData": {
            "StatementReference": "string"
          }
        },
        "POIData": {
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "POIReconciliationID": 0
        },
        "StoredValueResult": [
          {
            "StoredValueTransactionType": "Reserve",
            "ProductCode": 1,
            "EanUpc": 0,
            "ItemAmount": 0,
            "Currency": "string",
            "StoredValueAccountStatus": {
              "StoredValueAccountID": {
                "StoredValueAccountType": "GiftCard",
                "StoredValueProvider": "string",
                "OwnerName": "string",
                "ExpiryDate": 4,
                "EntryMode": [
                  "RFID"
                ],
                "IdentificationType": "PAN",
                "StoredValueID": "string"
              },
              "CurrentBalance": 0
            },
            "HostTransactionID": {
              "TransactionID": "string",
              "TimeStamp": "1970-01-01T00:00:00Z"
            }
          }
        ],
        "PaymentReceipt": [
          {
            "DocumentQualifier": "SaleReceipt",
            "IntegratedPrintFlag": true,
            "RequiredSignatureFlag": false,
            "OutputContent": {
              "OutputFormat": "MessageRef",
              "PredefinedContent": {
                "ReferenceID": "string",
                "Language": "string"
              },
              "OutputText": [
                {
                  "Text": "string",
                  "CharacterSet": 0,
                  "StartRow": 1,
                  "StartColumn": 1,
                  "CharacterWidth": "SingleWidth",
                  "CharacterHeight": "SingleHeight",
                  "CharacterStyle": "Normal",
                  "Alignment": "Left",
                  "EndOfLineFlag": true
                }
              ],
              "OutputXHTML": "string",
              "OutputBarcode": {
                "BarcodeValue": "string"
              }
            }
          }
        ]
      },
      "CardAcquisitionResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "SaleData": {
          "OperatorID": "string",
          "OperatorLanguage": "string",
          "ShiftNumber": "string",
          "SaleTransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "SaleReferenceID": "string",
          "SaleTerminalData": {
            "TotalsGroupID": "string"
          },
          "TokenRequestedType": "Transaction",
          "CustomerOrderID": "string",
          "CustomerOrderReq": [
            "Open"
          ],
          "SaleToPOIData": "string",
          "SaleToAcquirerData": "string",
          "SaleToIssuerData": {
            "StatementReference": "string"
          }
        },
        "POIData": {
          "POITransactionID": {
            "TransactionID": "string",
            "TimeStamp": "1970-01-01T00:00:00Z"
          },
          "POIReconciliationID": 0
        },
        "PaymentBrand": [
          "string"
        ],
        "PaymentInstrumentData": {
          "PaymentInstrumentType": "Card",
          "ProtectedCardData": "string",
          "CardData": {
            "PaymentBrand": "string",
            "MaskedPan": "string",
            "PaymentAccountRef": "string",
            "EntryMode": [
              "RFID"
            ],
            "CardCountryCode": 3,
            "ProtectedCardData": "string",
            "SensitiveCardData": {
              "PAN": 8,
              "CardSeqNumb": 2,
              "ExpiryDate": 4,
              "TrackData": [
                {
                  "TrackNumb": 2,
                  "TrackFormat": "ISO",
                  "TrackValue": "string"
                }
              ]
            },
            "PaymentToken": {
              "TokenRequestedType": "Transaction",
              "TokenValue": "string",
              "ExpiryDateTime": "1970-01-01T00:00:00Z"
            }
          },
          "CheckData": {
            "BankID": "string",
            "AccountNumber": "string",
            "CheckNumber": "string",
            "TrackData": {
              "TrackNumb": 2,
              "TrackFormat": "ISO",
              "TrackValue": "string"
            },
            "CheckCardNumber": "string",
            "TypeCode": "Personal",
            "Country": "string"
          },
          "MobileData": {
            "MobileCountryCode": 3,
            "MobileNetworkCode": 2,
            "MaskedMSISDN": 0,
            "Geolocation": {
              "GeographicCoordinates": {
                "Latitude": "string",
                "Longitude": "string"
              },
              "UTMCoordinates": {
                "UTMZone": "string",
                "UTMEastward": "string",
                "UTMNorthward": "string"
              }
            },
            "ProtectedMobileData": "string",
            "SensitiveMobileData": {
              "MSISDN": 0,
              "IMSI": 0,
              "IMEI": 0
            }
          },
          "StoredValueAccountID": {
            "StoredValueAccountType": "GiftCard",
            "StoredValueProvider": "string",
            "OwnerName": "string",
            "ExpiryDate": 4,
            "EntryMode": [
              "RFID"
            ],
            "IdentificationType": "PAN",
            "StoredValueID": "string"
          }
        },
        "LoyaltyAccount": [
          {
            "LoyaltyAccountID": {
              "EntryMode": [
                "RFID"
              ],
              "IdentificationType": "PAN",
              "IdentificationSupport": "NoCard",
              "LoyaltyID": "string"
            },
            "LoyaltyBrand": "string"
          }
        ]
      },
      "CardReaderAPDUResponse": {
        "Response": {
          "Result": "Success",
          "ErrorCondition": "Aborted",
          "AdditionalResponse": "string"
        },
        "APDUData": "string",
        "CardStatusWords": "string"
      }
    }
  }
}
```

Content of the TransactionStatus Response message.
It conveys Information related to the status of the last or current Payment, Loyalty or Reversal transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|MessageReference|[MessageReference](#schemamessagereference)|false|none|Identification of a previous POI transaction.<br>If `Response.Result` is Success.|
|RepeatedMessageResponse|[RepeatedMessageResponse](#schemarepeatedmessageresponse)|false|none|Content of the requested Message Response.<br>If Result is Success (process completed).|

<h2 id="tocS_AbortResponse">AbortResponse</h2>
<!-- backwards compatibility -->
<a id="schemaabortresponse"></a>
<a id="schema_AbortResponse"></a>
<a id="tocSabortresponse"></a>
<a id="tocsabortresponse"></a>

```json
{}
```

A successful `AbortRequest` returns a response with a **200 OK** HTTP status code and no body.

<h2 id="tocS_DiagnosisResponse">DiagnosisResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiagnosisresponse"></a>
<a id="schema_DiagnosisResponse"></a>
<a id="tocSdiagnosisresponse"></a>
<a id="tocsdiagnosisresponse"></a>

```json
{
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  },
  "POIStatus": {
    "GlobalStatus": "OK",
    "SecurityOKFlag": true,
    "PEDOKFlag": true,
    "CardReaderOKFlag": true,
    "PrinterStatus": "OK",
    "CommunicationOKFlag": true,
    "FraudPreventionFlag": true
  },
  "HostStatus": [
    {
      "AcquirerID": 0,
      "IsReachableFlag": true
    }
  ]
}
```

It conveys the result of the requested diagnosis and a possible message to display on a logical device.
Content of the Diagnosis Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|
|POIStatus|[POIStatus](#schemapoistatus)|false|none|State of a POI Terminal.<br>If `Response.Result` is Success.|
|HostStatus|[[HostStatus](#schemahoststatus)]|false|none|State of a Host.|

<h2 id="tocS_DisplayResponse">DisplayResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisplayresponse"></a>
<a id="schema_DisplayResponse"></a>
<a id="tocSdisplayresponse"></a>
<a id="tocsdisplayresponse"></a>

```json
{
  "OutputResult": [
    {
      "Device": "CashierDisplay",
      "InfoQualify": "Status",
      "Response": {
        "Result": "Success",
        "ErrorCondition": "Aborted",
        "AdditionalResponse": "string"
      }
    }
  ]
}
```

It conveys the result of the display, parallel to the message request, except if response not required and absent.
Content of the Display Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputResult|[[OutputResult](#schemaoutputresult)]|true|none|Information related to the result the output (display, print, input).<br>One per DisplayOutput item of the request, and in the same order.|

<h2 id="tocS_InputResponse">InputResponse</h2>
<!-- backwards compatibility -->
<a id="schemainputresponse"></a>
<a id="schema_InputResponse"></a>
<a id="tocSinputresponse"></a>
<a id="tocsinputresponse"></a>

```json
{
  "OutputResult": {
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    }
  },
  "InputResult": {
    "Device": "CashierDisplay",
    "InfoQualify": "Status",
    "Response": {
      "Result": "Success",
      "ErrorCondition": "Aborted",
      "AdditionalResponse": "string"
    },
    "Input": {
      "InputCommand": "GetAnyKey",
      "ConfirmedFlag": true,
      "FunctionKey": 0,
      "TextInput": "string",
      "DigitInput": 0,
      "Password": "string",
      "MenuEntryNumber": [
        0
      ]
    }
  }
}
```

It conveys the result of the input or the result of the outputs, parallel to the message request, except if response not required and absent.
Content of the Input Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputResult|[OutputResult](#schemaoutputresult)|false|none|Information related to the result the output (display, print, input).<br>If DisplayOutput present in the request.|
|InputResult|[InputResult](#schemainputresult)|true|none|Contains the result and the content of the input.|

<h2 id="tocS_PrintResponse">PrintResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprintresponse"></a>
<a id="schema_PrintResponse"></a>
<a id="tocSprintresponse"></a>
<a id="tocsprintresponse"></a>

```json
{
  "DocumentQualifier": "SaleReceipt",
  "Response": {
    "Result": "Success",
    "ErrorCondition": "Aborted",
    "AdditionalResponse": "string"
  }
}
```

It conveys the result of the print, parallel to the message request, except if response not required and absent.
Content of the Print Response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentQualifier|[DocumentQualifier](#schemadocumentqualifier)|true|none|Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send information to a physical printer or to use the paper type accordingly.<br>Possible values:<br>* **CashierReceipt**<br>* **CustomerReceipt**<br>* **Document**<br>* **Journal**<br>* **SaleReceipt**<br>* **Voucher**|
|Response|[Response](#schemaresponse)|true|none|Result of a message request processing.|

#### Enumerated Values

|Property|Value|
|---|---|
|DocumentQualifier|SaleReceipt|
|DocumentQualifier|CashierReceipt|
|DocumentQualifier|CustomerReceipt|
|DocumentQualifier|Document|
|DocumentQualifier|Voucher|
|DocumentQualifier|Journal|
