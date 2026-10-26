<h1 id="shipment-tracking">Shipment Tracking v1.9</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Merchants can use the PayPal Add Tracking API to manage tracking information. Merchants can add tracking numbers and associated information to PayPal. There are 2 ways in which tracking details can be shared to PayPal.
If you have a legacy integration that doesn't use the Orders v2 API, share tracking details through the <a href="/docs/tracking/tracking-api/">Add Shipping Tracking API</a>. If you are using the Orders v2 API, share tracking details through the <a href="/docs/tracking/orders-api/integrate/">Orders v2 API</a>.After adding these details to PayPal, merchants can:<ul><li>Update tracking details.</li><li>Show tracking details.</li><li>Cancel tracking numbers.</li></ul>For more information, see the <a href="/docs/tracking/tracking-api/">Add Tracking API Overview</a> and <a href="/docs/tracking/tracking-api/integrate/">Add Tracking API Integration Guide</a>.

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/api/tracking/v1/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/shipping/trackers/readwrite|Create or update tracking information|
|https://uri.paypal.com/services/shipping/trackers/read|Retrieve tracking information|

<h1 id="shipment-tracking-trackers">trackers</h1>

Use the `/trackers` resource to create and manage tracking information for PayPal transactions.

## List tracking information

<a id="opIdtrackers-batch.get"></a>

> Code samples

```bash
curl 'https://api-m.paypal.com/v1/shipping/trackers?transaction_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/shipping/trackers`

Lists tracking information that meet search criteria. The tracking ID is required but the tracking number is optional.

<h3 id="list-tracking-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|string|true|Filters the tracking information that appears in the response by a PayPal transaction ID.|
|tracking_number|query|string|false|Filters the tracking information that appears in the response by a tracking number.|
|account_id|query|string|false|Encrypted PayPal Account ID of the buyer or seller.|

> Example responses

> 200 Response

```json
{
  "transaction_id": "string",
  "tracking_number": "string",
  "tracking_number_type": "CARRIER_PROVIDED",
  "status": "CANCELLED",
  "shipment_date": "stringstri",
  "carrier": "2EBOX",
  "carrier_name_other": "string",
  "postage_payment_id": "string",
  "notify_buyer": false,
  "quantity": 1,
  "tracking_number_validated": true,
  "last_updated_time": "stringstringstringst",
  "shipment_direction": "FORWARD",
  "shipment_uploader": "MERCHANT",
  "account_id": "stringstrings",
  "tracking_url": "http://example.com",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="list-tracking-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP 200 OK status code and a JSON response body that lists tracking information that meets search criteria.|[tracker](#schematracker)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/shipping/trackers/read https://uri.paypal.com/services/shipping/trackers/readwrite )
</aside>

## Add tracking information for PayPal transaction

<a id="opIdtrackers.post"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/shipping/trackers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "trackers": [
      {
        "transaction_id": "string",
        "tracking_number": "string",
        "tracking_number_type": "CARRIER_PROVIDED",
        "status": "CANCELLED",
        "shipment_date": "stringstri",
        "carrier": "2EBOX",
        "carrier_name_other": "string",
        "notify_buyer": false,
        "last_updated_time": "stringstringstringst",
        "shipment_direction": "FORWARD",
        "tracking_url": "http://example.com"
      }
    ]
  }'
```

`POST /v1/shipping/trackers`

Adds tracking information for a PayPal transaction.

> Body parameter

```json
{
  "trackers": [
    {
      "transaction_id": "string",
      "tracking_number": "string",
      "tracking_number_type": "CARRIER_PROVIDED",
      "status": "CANCELLED",
      "shipment_date": "stringstri",
      "carrier": "2EBOX",
      "carrier_name_other": "string",
      "notify_buyer": false,
      "last_updated_time": "stringstringstringst",
      "shipment_direction": "FORWARD",
      "tracking_url": "http://example.com"
    }
  ]
}
```

<h3 id="add-tracking-information-for-paypal-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[tracker_collection](#schematracker_collection)|false|none|
|» trackers|body|[tracker_list](#schematracker_list)|false|An array of tracking information for shipments.|

> Example responses

> 200 Response

```json
{
  "tracker_identifiers": [
    {
      "transaction_id": "string",
      "tracking_number": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="add-tracking-information-for-paypal-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP 200 OK status code and a JSON response body that shows tracking information.|[tracker_identifier_collection](#schematracker_identifier_collection)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/shipping/trackers/readwrite )
</aside>

## Show tracking information

<a id="opIdtrackers.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/shipping/trackers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/shipping/trackers/{id}`

Shows tracking information, by tracker ID, for a PayPal transaction.

<h3 id="show-tracking-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the tracker in the <code><var>transaction_id</var>-<var>tracking_number</var></code> format.|
|account_id|query|string|false|Encrypted PayPal Account ID of the buyer or seller.|

> Example responses

> 200 Response

```json
{
  "transaction_id": "string",
  "tracking_number": "string",
  "tracking_number_type": "CARRIER_PROVIDED",
  "status": "CANCELLED",
  "shipment_date": "stringstri",
  "carrier": "2EBOX",
  "carrier_name_other": "string",
  "postage_payment_id": "string",
  "notify_buyer": false,
  "quantity": 1,
  "tracking_number_validated": true,
  "last_updated_time": "stringstringstringst",
  "shipment_direction": "FORWARD",
  "shipment_uploader": "MERCHANT",
  "account_id": "stringstrings",
  "tracking_url": "http://example.com",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="show-tracking-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows tracking information.|[tracker](#schematracker)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/shipping/trackers/read https://uri.paypal.com/services/shipping/trackers/readwrite )
</aside>

## Update or cancel tracking information for PayPal transaction

<a id="opIdtrackers.put"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/shipping/trackers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "transaction_id": "string",
    "tracking_number": "string",
    "tracking_number_type": "CARRIER_PROVIDED",
    "status": "CANCELLED",
    "shipment_date": "stringstri",
    "carrier": "2EBOX",
    "carrier_name_other": "string",
    "notify_buyer": false,
    "last_updated_time": "stringstringstringst",
    "shipment_direction": "FORWARD",
    "tracking_url": "http://example.com"
  }'
```

`PUT /v1/shipping/trackers/{id}`

Updates or cancels the tracking information for a PayPal transaction, by ID. To cancel tracking information, call this method and set the status to CANCELLED. For more information, see <a href="/docs/tracking/tracking-api/integrate/#link-updateorcanceltrackinginformation">Update or cancel tracking information</a>.

> Body parameter

```json
{
  "transaction_id": "string",
  "tracking_number": "string",
  "tracking_number_type": "CARRIER_PROVIDED",
  "status": "CANCELLED",
  "shipment_date": "stringstri",
  "carrier": "2EBOX",
  "carrier_name_other": "string",
  "notify_buyer": false,
  "last_updated_time": "stringstringstringst",
  "shipment_direction": "FORWARD",
  "tracking_url": "http://example.com"
}
```

<h3 id="update-or-cancel-tracking-information-for-paypal-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the tracker in the <code><var>transaction_id</var>-<var>tracking_number</var></code> format.|
|body|body|[tracker](#schematracker)|false|none|
|» transaction_id|body|string|true|The PayPal transaction ID.|
|» tracking_number|body|string|false|The tracking number for the shipment. Carrier information, `carrier` is required if tracking_number is provided.|
|» tracking_number_type|body|[tracking_number_type](#schematracking_number_type)|false|The type of tracking number.|
|» status|body|[tracking_status](#schematracking_status)|true|The status of the item shipment. For allowed values, see <a href="/docs/tracking/reference/shipping-status/">Shipping Statuses</a>.|
|» shipment_date|body|[date_no_time](#schemadate_no_time)|false|The date when the shipment occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|» carrier|body|[carrier](#schemacarrier)|false|The carrier for the shipment. Carrier information is required when tracking_number is provided. Some carriers have a global version as well as local subsidiaries. The subsidiaries are repeated over many countries and might also have an entry in the global list. Choose the carrier for your country. If the carrier is not available for your country, choose the global version of the carrier. If your carrier name is not in the list, set `carrier` to `OTHER` and set carrier name in `carrier_name_other`. For allowed values, see <a href="/docs/tracking/reference/carriers/">Carriers</a>.|
|» carrier_name_other|body|string|false|The name of the carrier for the shipment. Provide this value only if the carrier parameter is OTHER.|
|» notify_buyer|body|boolean|false|If true , sends an email notification to the buyer of the PayPal transaction. The email contains the tracking information that was uploaded through the API.|
|» last_updated_time|body|[date_time](#schemadate_time)|false|The date and time when the tracking information was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|» shipment_direction|body|string|false|To denote whether the shipment is sent forward to the receiver or returned back.|
|» tracking_url|body|string(uri)|false|Tracking Link of the shipment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tracking_number_type|CARRIER_PROVIDED|
|» tracking_number_type|E2E_PARTNER_PROVIDED|
|» status|CANCELLED|
|» status|DELIVERED|
|» status|LOCAL_PICKUP|
|» status|ON_HOLD|
|» status|SHIPPED|
|» status|SHIPMENT_CREATED|
|» status|DROPPED_OFF|
|» status|IN_TRANSIT|
|» status|RETURNED|
|» status|LABEL_PRINTED|
|» status|ERROR|
|» status|UNCONFIRMED|
|» status|PICKUP_FAILED|
|» status|DELIVERY_DELAYED|
|» status|DELIVERY_SCHEDULED|
|» status|DELIVERY_FAILED|
|» status|INRETURN|
|» status|IN_PROCESS|
|» status|NEW|
|» status|VOID|
|» status|PROCESSED|
|» status|NOT_SHIPPED|
|» status|COMPLETED|
|» carrier|2EBOX|
|» carrier|360LION|
|» carrier|3JMSLOGISTICS|
|» carrier|4_72|
|» carrier|6LS|
|» carrier|A1POST|
|» carrier|AAA_COOPER|
|» carrier|ABCUSTOM|
|» carrier|ABXEXPRESS_MY|
|» carrier|ACOMMMERCE|
|» carrier|ACSWORLDWIDE|
|» carrier|ACS_GR|
|» carrier|ADERONLINE|
|» carrier|ADICIONAL|
|» carrier|ADSONE|
|» carrier|ADUIEPYLE|
|» carrier|AERONET|
|» carrier|AEX|
|» carrier|AFLLOG_FTP|
|» carrier|AGILITY|
|» carrier|AIRMEE_WEBHOOK|
|» carrier|AIR_CANADA_GLOBAL|
|» carrier|ALFATREX|
|» carrier|ALLIEDEXPRESS|
|» carrier|ALLJOY|
|» carrier|ALPHAFAST|
|» carrier|ALWAYS_EXPRESS|
|» carrier|AMAZON|
|» carrier|AMAZON_FBA_SWISHIP|
|» carrier|AMAZON_SHIP_MCF|
|» carrier|AMSTAN|
|» carrier|AMS_GRP|
|» carrier|ANDREANI|
|» carrier|ANICAM_BOX|
|» carrier|ANJUN|
|» carrier|ANSERX|
|» carrier|AN_POST|
|» carrier|AO_COURIER|
|» carrier|AO_DEUTSCHLAND|
|» carrier|APC_OVERNIGHT|
|» carrier|APC_OVERNIGHT_CONNUM|
|» carrier|APG|
|» carrier|APRISAEXPRESS|
|» carrier|AQUILINE|
|» carrier|ARAMEX|
|» carrier|ARAMEX_AU|
|» carrier|ARCO_SPEDIZIONI|
|» carrier|ARE_EMIRATES_POST|
|» carrier|ARG_OCA|
|» carrier|ARK_LOGISTICS|
|» carrier|ASE|
|» carrier|ASENDIA_HK|
|» carrier|ASENDIA_UK|
|» carrier|ASENDIA_USA|
|» carrier|ASIGNA|
|» carrier|AUPOST_CN|
|» carrier|AUSTRIAN_POST_EXPRESS|
|» carrier|AUS_STARTRACK|
|» carrier|AUS_TOLL|
|» carrier|AU_AUSTRIAN_POST|
|» carrier|AU_AU_POST|
|» carrier|AU_TNT|
|» carrier|AVERITT|
|» carrier|BEL_DHL|
|» carrier|BEL_RS|
|» carrier|BESTWAYPARCEL|
|» carrier|BE_BPOST|
|» carrier|BE_KIALA|
|» carrier|BG_BULGARIAN_POST|
|» carrier|BH_POSTA|
|» carrier|BH_WORLDWIDE|
|» carrier|BIRDSYSTEM|
|» carrier|BJSHOMEDELIVERY|
|» carrier|BLINKLASTMILE|
|» carrier|BLR_BELPOST|
|» carrier|BLUECARE|
|» carrier|BLUESTAR|
|» carrier|BLUEX|
|» carrier|BNEED|
|» carrier|BOMBINOEXP|
|» carrier|BOND|
|» carrier|BONDSCOURIERS|
|» carrier|BORDEREXPRESS|
|» carrier|BOX_BERRY|
|» carrier|BPOST_INT|
|» carrier|BRA_CORREIOS|
|» carrier|BRING|
|» carrier|BROUWER_TRANSPORT|
|» carrier|BRT_IT|
|» carrier|BRT_IT_PARCELID|
|» carrier|BRT_IT_SENDER_REF|
|» carrier|BUDBEE_WEBHOOK|
|» carrier|BUYLOGIC|
|» carrier|B_TWO_C_EUROPE|
|» carrier|CAE_DELIVERS|
|» carrier|CAINIAO|
|» carrier|CARIBOU|
|» carrier|CARRIERS|
|» carrier|CARRY_FLAP|
|» carrier|CA_CANADA_POST|
|» carrier|CA_CANPAR|
|» carrier|CA_GREYHOUND|
|» carrier|CA_PUROLATOR|
|» carrier|CBL_LOGISTICA|
|» carrier|CDEK|
|» carrier|CDEK_TR|
|» carrier|CELERITAS|
|» carrier|CELLO_SQUARE|
|» carrier|CESKA_CZ|
|» carrier|CEVA|
|» carrier|CFL_LOGISTICS|
|» carrier|CGS_EXPRESS|
|» carrier|CHAMPION_LOGISTICS|
|» carrier|CHITCHATS|
|» carrier|CHOIR_EXP|
|» carrier|CHROBINSON|
|» carrier|CHRONOPOST_FR|
|» carrier|CHUKOU1|
|» carrier|CH_SWISS_POST_PRIORITY|
|» carrier|CITYLINK_MY|
|» carrier|CJPACKET|
|» carrier|CJ_CENTURY|
|» carrier|CJ_GLS|
|» carrier|CJ_HK_INTERNATIONAL|
|» carrier|CJ_INT_MY|
|» carrier|CJ_KR|
|» carrier|CJ_LOGISTICS|
|» carrier|CJ_TH|
|» carrier|CLEVY_LINKS|
|» carrier|CLE_LOGISTICS|
|» carrier|CLOUDWISH_ASIA|
|» carrier|CNDEXPRESS|
|» carrier|CNEXPS|
|» carrier|CNWANGTONG|
|» carrier|CN_17POST|
|» carrier|CN_BESTEXPRESS|
|» carrier|CN_BOXC|
|» carrier|CN_CHINA_POST_EMS|
|» carrier|CN_DPEX|
|» carrier|CN_EMS|
|» carrier|CN_EQUICK|
|» carrier|CN_JCEX|
|» carrier|CN_PAYPAL_PACKAGE|
|» carrier|CN_POST56|
|» carrier|CN_SF_EXPRESS|
|» carrier|CN_STO|
|» carrier|CN_WEDO|
|» carrier|CN_WISHPOST|
|» carrier|CN_YUNDA|
|» carrier|COLIS_PRIVE|
|» carrier|COLLECTCO|
|» carrier|COLLIVERY|
|» carrier|COMET_TECH|
|» carrier|CONTINENTAL|
|» carrier|CON_WAY|
|» carrier|COORDINADORA|
|» carrier|COPA_COURIER|
|» carrier|COPE|
|» carrier|CORPORATECOURIERS_WEBHOOK|
|» carrier|CORREOS_DE_MEXICO|
|» carrier|CORREOS_ES|
|» carrier|CORREOS_EXPRESS|
|» carrier|CORREO_UY|
|» carrier|COSTMETICSNOW|
|» carrier|COURANT_PLUS|
|» carrier|COUREX|
|» carrier|COURIERS_PLEASE|
|» carrier|CPACKET|
|» carrier|CPEX|
|» carrier|CROSHOT|
|» carrier|CSE|
|» carrier|CTC_EXPRESS|
|» carrier|CUBYN|
|» carrier|CUCKOOEXPRESS|
|» carrier|CYPRUS_POST_CYP|
|» carrier|DAIGLOBALTRACK|
|» carrier|DAJIN|
|» carrier|DANSKE_FRAGT|
|» carrier|DAWN_WING|
|» carrier|DAYTON_FREIGHT|
|» carrier|DBSCHENKER_B2B|
|» carrier|DBSCHENKER_SE|
|» carrier|DBSCHENKER_SV|
|» carrier|DDEXPRESS|
|» carrier|DEALERSEND|
|» carrier|DELIVERYONTIME|
|» carrier|DELNEXT|
|» carrier|DELTEC_UK|
|» carrier|DEMANDSHIP|
|» carrier|DESCARTES|
|» carrier|DESIGNERTRANSPORT_WEBHOOK|
|» carrier|DESTINY|
|» carrier|DEX_I|
|» carrier|DE_ASENDIA|
|» carrier|DE_DEUTSCHE|
|» carrier|DE_DEUTSCHE_POST_DHL_WITHIN_EUROPE_TRACKNET|
|» carrier|DE_DHL_EXPRESS|
|» carrier|DE_DPD_DELISTRACK|
|» carrier|DE_GLS|
|» carrier|DHL|
|» carrier|DHL_ACTIVE_TRACING|
|» carrier|DHL_AU|
|» carrier|DHL_BENELUX|
|» carrier|DHL_ECOMERCE_ASA|
|» carrier|DHL_ES|
|» carrier|DHL_FR|
|» carrier|DHL_FREIGHT|
|» carrier|DHL_GLOBAL_MAIL_ASIA|
|» carrier|DHL_HK|
|» carrier|DHL_JP|
|» carrier|DHL_PARCEL_ES|
|» carrier|DHL_PARCEL_NL|
|» carrier|DHL_PARCEL_RU|
|» carrier|DHL_PL|
|» carrier|DHL_REFR|
|» carrier|DHL_SG|
|» carrier|DHL_SUPPLY_CHAIN|
|» carrier|DHL_UK|
|» carrier|DIAMOND_EUROGISTICS|
|» carrier|DICOM|
|» carrier|DIDADI|
|» carrier|DIMERCO|
|» carrier|DIRECTCOURIERS|
|» carrier|DIRECTLOG|
|» carrier|DIRECTPARCELS|
|» carrier|DMM_NETWORK|
|» carrier|DMS_MATRIX|
|» carrier|DOBROPOST|
|» carrier|DOORA|
|» carrier|DOORDASH_WEBHOOK|
|» carrier|DPD|
|» carrier|DPD_DELISTRACK|
|» carrier|DPD_FR|
|» carrier|DPD_HGRY|
|» carrier|DPD_HK|
|» carrier|DPD_IR|
|» carrier|DPD_LOCAL|
|» carrier|DPD_LOCAL_REF|
|» carrier|DPD_POLAND|
|» carrier|DPD_RO|
|» carrier|DPD_RU|
|» carrier|DPEX|
|» carrier|DPE_EXPRESS|
|» carrier|DPE_SOUTH_AFRC|
|» carrier|DSV|
|» carrier|DTDC_AU|
|» carrier|DTDC_EXPRESS|
|» carrier|DTDC_IN|
|» carrier|DTD_EXPR|
|» carrier|DX_SFTP|
|» carrier|DYLT|
|» carrier|DYNALOGIC|
|» carrier|EASY_MAIL|
|» carrier|ECEXPRESS|
|» carrier|ECHO|
|» carrier|ECMS|
|» carrier|ECOSCOOTING|
|» carrier|EFEX|
|» carrier|EFS|
|» carrier|EKART|
|» carrier|ELIAN_POST|
|» carrier|EMPS_CN|
|» carrier|ENDEAVOUR_DELIVERY|
|» carrier|ENVIALIA_REFERENCE|
|» carrier|EPARCEL_KR|
|» carrier|EPST_GLBL|
|» carrier|EP_BOX|
|» carrier|ESHIPPING|
|» carrier|ESP_ASM|
|» carrier|ESP_ENVIALIA|
|» carrier|ESP_MRW|
|» carrier|ESP_NACEX|
|» carrier|ESP_PACKLINK|
|» carrier|ESP_REDUR|
|» carrier|ETOMARS|
|» carrier|ETOTAL|
|» carrier|ETS_EXPRESS|
|» carrier|EU_FLEET_SOLUTIONS|
|» carrier|EU_IMX|
|» carrier|EXPRESSSALE|
|» carrier|FARGOOD|
|» carrier|FAR_INTERNATIONAL|
|» carrier|FASTRACK|
|» carrier|FASTRK_SERV|
|» carrier|FASTWAY_IR|
|» carrier|FASTWAY_NZ|
|» carrier|FDSEXPRESS|
|» carrier|FEDEX|
|» carrier|FEDEX_CROSSBORDER|
|» carrier|FEDEX_FR|
|» carrier|FEDEX_INTL_MLSERV|
|» carrier|FEDEX_POLAND|
|» carrier|FEDEX_UK|
|» carrier|FETCHR_WEBHOOK|
|» carrier|FIEGE|
|» carrier|FIEGE_NL|
|» carrier|FIRSTMILE|
|» carrier|FLASHEXPRESS|
|» carrier|FMX|
|» carrier|FONSEN|
|» carrier|FORRUN|
|» carrier|FREIGHTQUOTE|
|» carrier|FRETERAPIDO|
|» carrier|FR_BERT|
|» carrier|FR_COLIS|
|» carrier|FR_EXAPAQ|
|» carrier|FR_GEODIS|
|» carrier|FR_GLS|
|» carrier|FULFILLA|
|» carrier|FULFILLME|
|» carrier|FURDECO|
|» carrier|GAC|
|» carrier|GANGBAO|
|» carrier|GBA|
|» carrier|GBS_BROKER|
|» carrier|GB_APC|
|» carrier|GB_ARROW|
|» carrier|GB_NORSK|
|» carrier|GB_PANTHER|
|» carrier|GB_TUFFNELLS|
|» carrier|GEIS|
|» carrier|GEL_EXPRESS|
|» carrier|GEMWORLDWIDE|
|» carrier|GENERAL_OVERNIGHT|
|» carrier|GENIKI_GR|
|» carrier|GEODIS_ESPACE|
|» carrier|GESWL|
|» carrier|GIAO_HANG|
|» carrier|GIO_EXPRESS|
|» carrier|GLOBALTRANZ|
|» carrier|GLOBAL_ABF|
|» carrier|GLOBAL_ESTES|
|» carrier|GLOBAL_EXPRESS|
|» carrier|GLOBAL_IPARCEL|
|» carrier|GLOBAL_TNT|
|» carrier|GLOBAVEND|
|» carrier|GLS_CROTIA|
|» carrier|GLS_CZ|
|» carrier|GLS_IT|
|» carrier|GLS_ITALY|
|» carrier|GLS_SLOV|
|» carrier|GLS_SLOVEN|
|» carrier|GOGLOBALPOST|
|» carrier|GOJEK|
|» carrier|GRAB_WEBHOOK|
|» carrier|GRUPO|
|» carrier|GR_ELTA|
|» carrier|GSI_EXPRESS|
|» carrier|GSO|
|» carrier|HAPPY2POINT|
|» carrier|HCT_LOGISTICS|
|» carrier|HDB|
|» carrier|HDB_BOX|
|» carrier|HELLMANN|
|» carrier|HELTHJEM|
|» carrier|HEPPNER|
|» carrier|HEPPNER_FR|
|» carrier|HERMES|
|» carrier|HERMES_2MANN_HANDLING|
|» carrier|HERMES_DE|
|» carrier|HH_EXP|
|» carrier|HIPSHIPPER|
|» carrier|HKD|
|» carrier|HK_FLYT_EXPRESS|
|» carrier|HK_FOUR_PX_EXPRESS|
|» carrier|HK_POST|
|» carrier|HK_TGX|
|» carrier|HOLISOL|
|» carrier|HOME_DELIVERY_SOLUTIONS|
|» carrier|HOUNDEXPRESS|
|» carrier|HRPARCEL|
|» carrier|HRV_HRVATSKA|
|» carrier|HUAHAN_EXPRESS|
|» carrier|HUNTER_EXPRESS|
|» carrier|HUODULL|
|» carrier|HX_EXPRESS|
|» carrier|IBEONE|
|» carrier|ICUMULUS|
|» carrier|IDEXPRESS|
|» carrier|IDN_JNE|
|» carrier|IDN_LION_PARCEL|
|» carrier|IDN_PANDU|
|» carrier|IML|
|» carrier|INDOPAKET|
|» carrier|IND_BLUEDART|
|» carrier|IND_DELHIVERY|
|» carrier|IND_DELIVREE|
|» carrier|IND_DOTZOT|
|» carrier|IND_ECOM|
|» carrier|IND_FIRSTFLIGHT|
|» carrier|IND_GATI|
|» carrier|IND_GOJAVAS|
|» carrier|IND_PROFESSIONAL_COURIERS|
|» carrier|IND_SAFEEXPRESS|
|» carrier|IND_XPRESSBEES|
|» carrier|INPOST_PACZKOMATY|
|» carrier|INTEGRA2_FTP|
|» carrier|INTELIPOST|
|» carrier|INTEL_VALLEY|
|» carrier|INTERPARCEL_AU|
|» carrier|INTERPARCEL_NZ|
|» carrier|INTERPARCEL_UK|
|» carrier|INTEXPRESS|
|» carrier|ISRAEL_POST|
|» carrier|ISR_POST_DOMESTIC|
|» carrier|IT_DHL_ECOMMERCE|
|» carrier|IT_FERCAM|
|» carrier|IT_NEXIVE|
|» carrier|IT_POSTE_ITALIA|
|» carrier|IT_TNT|
|» carrier|IVOY_WEBHOOK|
|» carrier|I_DIKA|
|» carrier|JANCO|
|» carrier|JANIO|
|» carrier|JERSEY_POST|
|» carrier|JET_SHIP|
|» carrier|JINDOUYUN|
|» carrier|JINSUNG|
|» carrier|JOCOM|
|» carrier|JOOM_LOGIS|
|» carrier|JOYING_BOX|
|» carrier|JPN_JAPAN_POST|
|» carrier|JPN_SAGAWA|
|» carrier|JP_KURO_NEKO_YAMATO_UNYUU|
|» carrier|JS_EXPRESS|
|» carrier|JTEXPRESS|
|» carrier|JTEXPRESS_VN|
|» carrier|JX|
|» carrier|J_NET|
|» carrier|K1_EXPRESS|
|» carrier|KANGAROO_MY|
|» carrier|KEC|
|» carrier|KERRYTJ|
|» carrier|KERRYTTC_VN|
|» carrier|KERRY_ECOMMERCE|
|» carrier|KGMHUB|
|» carrier|KHM_CAMBODIA_POST|
|» carrier|KOR_ECARGO|
|» carrier|KPOST|
|» carrier|KR_KOREA_POST|
|» carrier|KUEHNE|
|» carrier|KURASI|
|» carrier|KWE_GLOBAL|
|» carrier|KWT|
|» carrier|KYUNGDONG_PARCEL|
|» carrier|KY_EXPRESS|
|» carrier|LALAMOVE|
|» carrier|LANDMARK_GLOBAL|
|» carrier|LANDMARK_GLOBAL_REFERENCE|
|» carrier|LATVIJAS_PASTS|
|» carrier|LA_POSTE_SUIVI|
|» carrier|LBCEXPRESS_FTP|
|» carrier|LEADER|
|» carrier|LEGION_EXPRESS|
|» carrier|LEXSHIP|
|» carrier|LHT_EXPRESS|
|» carrier|LICCARDI_EXPRESS|
|» carrier|LIEFERY|
|» carrier|LINE|
|» carrier|LINKBRIDGE|
|» carrier|LOCUS_WEBHOOK|
|» carrier|LOGISTERS|
|» carrier|LOGISTICSWORLDWIDE_HK|
|» carrier|LOGISTIKA|
|» carrier|LOGISTYX_TRANSGROUP|
|» carrier|LONESTAR|
|» carrier|LOOMIS_EXPRESS|
|» carrier|LOTTE|
|» carrier|LTIANEXP|
|» carrier|LTL|
|» carrier|LTU_LIETUVOS|
|» carrier|MAGYAR_HU|
|» carrier|MAILAMERICAS|
|» carrier|MAILPLUS_JPN|
|» carrier|MAIL_PLUS|
|» carrier|MAINFREIGHT|
|» carrier|MAINWAY|
|» carrier|MATDESPATCH|
|» carrier|MATKAHUOLTO|
|» carrier|MBW|
|» carrier|MEX_AEROFLASH|
|» carrier|MEX_ESTAFETA|
|» carrier|MEX_REDPACK|
|» carrier|MEX_SENDA|
|» carrier|MGLOBAL|
|» carrier|MIKROPAKKET|
|» carrier|MIKROPAKKET_BE|
|» carrier|MILKMAN|
|» carrier|MORE_LINK|
|» carrier|MORNING_EXPRESS|
|» carrier|MRW_FTP|
|» carrier|MXE|
|» carrier|MX_CARGO|
|» carrier|MYHERMES|
|» carrier|MYS_AIRPAK|
|» carrier|MYS_EMS|
|» carrier|MYS_GDEX|
|» carrier|MYS_MYPOST_ONLINE|
|» carrier|MYS_MYS_POST|
|» carrier|MYS_SKYNET|
|» carrier|M_XPRESS|
|» carrier|NACEX|
|» carrier|NACEX_ES|
|» carrier|NANJINGWOYUAN|
|» carrier|NATIONAL_SAMEDAY|
|» carrier|NATIONEX|
|» carrier|NATIONWIDE_MY|
|» carrier|NEWAY|
|» carrier|NEWEGGEXPRESS|
|» carrier|NEWGISTICS|
|» carrier|NEWZEALAND_COURIERS|
|» carrier|NG_COURIERPLUS|
|» carrier|NHANS_SOLUTIONS|
|» carrier|NIM_EXPRESS|
|» carrier|NINJAVAN_MY|
|» carrier|NINJAVAN_SG|
|» carrier|NINJAVAN_THAI|
|» carrier|NINJAVAN_WB|
|» carrier|NIPOST_NG|
|» carrier|NLD_DHL|
|» carrier|NLD_GLS|
|» carrier|NLD_POSTNL|
|» carrier|NLD_TRANSMISSION|
|» carrier|NOVA_POSHTA|
|» carrier|NOVA_POSHTA_INT|
|» carrier|NOX_NACHTEXPRESS|
|» carrier|NOX_NIGHT_TIME_EXPRESS|
|» carrier|NTLOGISTICS_VN|
|» carrier|NZ_COURIER_POST|
|» carrier|NZ_NZ_POST|
|» carrier|OCS|
|» carrier|OCS_WORLDWIDE|
|» carrier|OKAYPARCEL|
|» carrier|OMNIPARCEL|
|» carrier|OMNIVA|
|» carrier|ONECLICK|
|» carrier|ONEWORLDEXPRESS|
|» carrier|ORANGE_DS|
|» carrier|OSM_WORLDWIDE|
|» carrier|OVERSE_EXP|
|» carrier|P2P_TRC|
|» carrier|PAACK_WEBHOOK|
|» carrier|PADTF|
|» carrier|PAGO|
|» carrier|PALEXPRESS|
|» carrier|PALLETWAYS|
|» carrier|PALLET_NETWORK|
|» carrier|PANTHER_REFERENCE|
|» carrier|PAN_ASIA|
|» carrier|PAPERFLY|
|» carrier|PAPER_EXPRESS|
|» carrier|PAQUETEXPRESS|
|» carrier|PARCEL2GO|
|» carrier|PARCELINKLOGISTICS|
|» carrier|PARCELLED_IN|
|» carrier|PARCELONE|
|» carrier|PARCELPAL_WEBHOOK|
|» carrier|PARCELPOINT|
|» carrier|PARCELPOST_SG|
|» carrier|PARCEL_2_POST|
|» carrier|PARKNPARCEL|
|» carrier|PCFCORP|
|» carrier|PFCEXPRESS|
|» carrier|PFLOGISTICS|
|» carrier|PHL_AIR21|
|» carrier|PHL_AIRSPEED|
|» carrier|PHL_JAMEXPRESS|
|» carrier|PICKRR|
|» carrier|PICKUP|
|» carrier|PICKUPP_MYS|
|» carrier|PICKUPP_SGP|
|» carrier|PILOT_FREIGHT|
|» carrier|PIL_LOGISTICS|
|» carrier|PITNEY_BOWES|
|» carrier|PITTOHIO|
|» carrier|PIXSELL|
|» carrier|PLANZER|
|» carrier|PLUS_LOG_UK|
|» carrier|PL_POCZTA_POLSKA|
|» carrier|POL_SIODEMKA|
|» carrier|PONY_EXPRESS|
|» carrier|POSTA_PLUS|
|» carrier|POSTA_RO|
|» carrier|POSTA_UKR|
|» carrier|POSTEN_NORGE|
|» carrier|POSTI|
|» carrier|POSTNL_INTL_3S|
|» carrier|POSTNL_INT_3_S|
|» carrier|POSTNORD_LOGISTICS|
|» carrier|POSTNORD_LOGISTICS_DK|
|» carrier|POSTUR_IS|
|» carrier|POST_SERBIA|
|» carrier|POST_SLOVENIA|
|» carrier|PRESIDENT_TRANS|
|» carrier|PRESSIODE|
|» carrier|PRIMAMULTICIPTA|
|» carrier|PROMEDDELIVERY|
|» carrier|PRT_CHRONOPOST|
|» carrier|PRT_CTT|
|» carrier|PRT_INT_SEUR|
|» carrier|PRT_SEUR|
|» carrier|PTS|
|» carrier|PTT_POST|
|» carrier|QUANTIUM|
|» carrier|QWINTRY|
|» carrier|RABEN_GROUP|
|» carrier|RAF_PH|
|» carrier|RAIDEREX|
|» carrier|RAM|
|» carrier|RCL|
|» carrier|RINCOS|
|» carrier|RL_US|
|» carrier|ROADBULL|
|» carrier|ROADRUNNER_FREIGHT|
|» carrier|ROCKET_PARCEL|
|» carrier|ROUTIFIC_WEBHOOK|
|» carrier|ROYAL_MAIL|
|» carrier|RPD2MAN|
|» carrier|RPX|
|» carrier|RPXLOGISTICS|
|» carrier|RPX_ID|
|» carrier|RUSSIAN_POST|
|» carrier|RUSTON|
|» carrier|RZYEXPRESS|
|» carrier|SAIA_FREIGHT|
|» carrier|SAILPOST|
|» carrier|SAP_EXPRESS|
|» carrier|SAU_SAUDI_POST|
|» carrier|SCUDEX_EXPRESS|
|» carrier|SDA_IT|
|» carrier|SDH_SCM|
|» carrier|SEFL|
|» carrier|SEINO|
|» carrier|SEKOLOGISTICS|
|» carrier|SEKO_SFTP|
|» carrier|SENDING|
|» carrier|SENDIT|
|» carrier|SENDLE|
|» carrier|SEUR_ES|
|» carrier|SEUR_SP_API|
|» carrier|SFB2C|
|» carrier|SFCSERVICE|
|» carrier|SFC_LOGISTICS|
|» carrier|SFPLUS_WEBHOOK|
|» carrier|SF_EX|
|» carrier|SG_DETRACK|
|» carrier|SG_QXPRESS|
|» carrier|SG_SG_POST|
|» carrier|SG_SPEEDPOST|
|» carrier|SG_TAQBIN|
|» carrier|SHENZHEN|
|» carrier|SHIPENTEGRA|
|» carrier|SHIPPIT|
|» carrier|SHIPTER|
|» carrier|SHIPTOR|
|» carrier|SHIP_GATE|
|» carrier|SHIP_IT_ASIA|
|» carrier|SHOPFANS|
|» carrier|SHREENANDANCOURIER|
|» carrier|SHREETIRUPATI|
|» carrier|SHREE_ANJANI_COURIER|
|» carrier|SHREE_MARUTI|
|» carrier|SIMPLYPOST|
|» carrier|SINOTRANS|
|» carrier|SIN_GLBL|
|» carrier|SKYBOX|
|» carrier|SKYNET_UAE|
|» carrier|SKYNET_UK|
|» carrier|SKYNET_WORLDWIDE|
|» carrier|SKYNET_ZA|
|» carrier|SKY_POSTAL|
|» carrier|SK_POSTA|
|» carrier|SMG_EXPRESS|
|» carrier|SMOOTH|
|» carrier|SMSA_EXPRESS|
|» carrier|SONICTL|
|» carrier|SOUTH_AFRICAN_POST_OFFICE|
|» carrier|SPEEDCOURIERS_GR|
|» carrier|SPEEDEE|
|» carrier|SPEEDEXCOURIER|
|» carrier|SPOTON|
|» carrier|SPRING_GDS|
|» carrier|SRE_KOREA|
|» carrier|STALLIONEXPRESS|
|» carrier|STARKEN|
|» carrier|STAR_TRACK_EXPRESS|
|» carrier|STAR_TRACK_NEXT_FLIGHT|
|» carrier|STEPFORWARDFS|
|» carrier|STONE3PL|
|» carrier|STRECK_TRANSPORT|
|» carrier|SUTTON|
|» carrier|SWE_POSTNORD|
|» carrier|SWISHIP_DE|
|» carrier|SWISS_POST_FTP|
|» carrier|SYPOST|
|» carrier|SZENDEX|
|» carrier|TAQBIN_HK|
|» carrier|TAQBIN_MY|
|» carrier|TARRIVE|
|» carrier|TAZMANIAN_FREIGHT|
|» carrier|TCK_EXPRESS|
|» carrier|TCS|
|» carrier|TFM|
|» carrier|TFORCE_FINALMILE|
|» carrier|THABIT_LOGISTICS|
|» carrier|THA_DYNAMIC_LOGISTICS|
|» carrier|THA_KERRY|
|» carrier|THA_THAILAND_POST|
|» carrier|THECOURIERGUY|
|» carrier|THEDELIVERYGROUP|
|» carrier|THENILE_WEBHOOK|
|» carrier|TIGFREIGHT|
|» carrier|TIKI_ID|
|» carrier|TIPSA|
|» carrier|TNT|
|» carrier|TNT_CLICK_IT|
|» carrier|TNT_FR|
|» carrier|TNT_NL|
|» carrier|TNT_REFR|
|» carrier|TNT_UK|
|» carrier|TNT_UK_REFR|
|» carrier|TOLL|
|» carrier|TOLL_NZ|
|» carrier|TOLOS|
|» carrier|TOPHATTEREXPRESS|
|» carrier|TOPYOU|
|» carrier|TOTAL_EXPRESS|
|» carrier|TOURLINE|
|» carrier|TRACKON|
|» carrier|TRANS_KARGO|
|» carrier|TRUMPCARD|
|» carrier|TRUNKRS_WEBHOOK|
|» carrier|TUFFNELLS_REFERENCE|
|» carrier|TWO_GO|
|» carrier|TW_TAIWAN_POST|
|» carrier|UBI_LOGISTICS|
|» carrier|UC_EXPRE|
|» carrier|UDS|
|» carrier|UK_COLLECTPLUS|
|» carrier|UK_DPD|
|» carrier|UK_NIGHTLINE|
|» carrier|UK_PARCELFORCE|
|» carrier|UK_UK_MAIL|
|» carrier|UK_XDP|
|» carrier|UK_YODEL|
|» carrier|UPS|
|» carrier|UPS_FREIGHT|
|» carrier|UPS_MAIL_INNOVATIONS|
|» carrier|UPS_REFERENCE|
|» carrier|USF_REDDAWAY|
|» carrier|USHIP|
|» carrier|USPS|
|» carrier|US_GLOBEGISTICS|
|» carrier|US_LASERSHIP|
|» carrier|US_OLD_DOMINION|
|» carrier|US_ONTRAC|
|» carrier|US_YRC|
|» carrier|VAMOX|
|» carrier|VENIPAK|
|» carrier|VIAEUROPE|
|» carrier|VIA_EXPRESS|
|» carrier|VIRTRANSPORT|
|» carrier|VIWO|
|» carrier|VNM_VIETNAM_POST|
|» carrier|VNM_VIETTELPOST|
|» carrier|WAHANA_ID|
|» carrier|WANBEXPRESS|
|» carrier|WEASHIP|
|» carrier|WEPOST|
|» carrier|WESTBANK_COURIER|
|» carrier|WESTGATE_GL|
|» carrier|WHISTL|
|» carrier|WINIT|
|» carrier|WISELOADS|
|» carrier|WISE_EXPRESS|
|» carrier|WIZMO|
|» carrier|WMG|
|» carrier|WNDIRECT|
|» carrier|WYNGS|
|» carrier|XDE_WEBHOOK|
|» carrier|XDP_UK_REFERENCE|
|» carrier|XL_EXPRESS|
|» carrier|XPERT_DELIVERY|
|» carrier|XPOST|
|» carrier|XPO_LOGISTICS|
|» carrier|XPRESSEN_DK|
|» carrier|XQ_EXPRESS|
|» carrier|YAKIT|
|» carrier|YANWEN|
|» carrier|YDH_EXPRESS|
|» carrier|YINGNUO_LOGISTICS|
|» carrier|YODEL_DIR|
|» carrier|YODEL_INTNL|
|» carrier|YTO|
|» carrier|YUNEXPRESS|
|» carrier|YURTICI_KARGO|
|» carrier|YUSEN|
|» carrier|ZAJIL_EXPRESS|
|» carrier|ZA_COURIERIT|
|» carrier|ZA_FASTWAY|
|» carrier|ZA_SPECIALISED_FREIGHT|
|» carrier|ZEEK_2_DOOR|
|» carrier|ZELERIS|
|» carrier|ZEPTO_EXPRESS|
|» carrier|ZES_EXPRESS|
|» carrier|ZIINGFINALMILE|
|» carrier|ZINC|
|» carrier|ZJS_EXPRESS|
|» carrier|ZTO_EXPRESS|
|» carrier|ZYLLEM|
|» shipment_direction|FORWARD|
|» shipment_direction|RETURN|

> Example responses

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="update-or-cancel-tracking-information-for-paypal-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP 204 OK status code with no JSON response body.|None|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/shipping/trackers/readwrite )
</aside>

<h1 id="shipment-tracking-trackers-batch">trackers-batch</h1>

Use the `/trackers-batch` resource to add tracking information for multiple PayPal transactions.

## Add tracking information for multiple PayPal transactions

<a id="opIdtrackers-batch.post"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/shipping/trackers-batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "trackers": [
      {
        "transaction_id": "string",
        "tracking_number": "string",
        "tracking_number_type": "CARRIER_PROVIDED",
        "status": "CANCELLED",
        "shipment_date": "stringstri",
        "carrier": "2EBOX",
        "carrier_name_other": "string",
        "notify_buyer": false,
        "last_updated_time": "stringstringstringst",
        "shipment_direction": "FORWARD",
        "tracking_url": "http://example.com"
      }
    ]
  }'
```

`POST /v1/shipping/trackers-batch`

<blockquote><strong>Deprecation notice:</strong> Adding tracking details for an order through <code>/v1/shipping/trackers-batch</code> is deprecated as its a legacy way of integration. Use the new <a href="/docs/tracking/orders-api/integrate/">Orders v2 API</a> to share tracking details with PayPal.</blockquote>Adds tracking information, with or without tracking numbers, for multiple PayPal transactions. Accepts up to 20 tracking IDs. For more information, see <a href="/docs/tracking/tracking-api/integrate/#link-addtrackinginformationwithtrackingnumbers">Add tracking information with tracking numbers</a> and <a href="/docs/tracking/tracking-api/integrate/#link-addtrackinginformationwithouttrackingnumbers">Add tracking information without tracking numbers</a>.

> Body parameter

```json
{
  "trackers": [
    {
      "transaction_id": "string",
      "tracking_number": "string",
      "tracking_number_type": "CARRIER_PROVIDED",
      "status": "CANCELLED",
      "shipment_date": "stringstri",
      "carrier": "2EBOX",
      "carrier_name_other": "string",
      "notify_buyer": false,
      "last_updated_time": "stringstringstringst",
      "shipment_direction": "FORWARD",
      "tracking_url": "http://example.com"
    }
  ]
}
```

<h3 id="add-tracking-information-for-multiple-paypal-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[tracker_collection](#schematracker_collection)|false|none|
|» trackers|body|[tracker_list](#schematracker_list)|false|An array of tracking information for shipments.|

> Example responses

> 200 Response

```json
{
  "tracker_identifiers": [
    {
      "transaction_id": "string",
      "tracking_number": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "errors": [
    {
      "name": "string",
      "message": "string",
      "debug_id": "string",
      "information_link": "string",
      "details": [
        {
          "field": "string",
          "value": "string",
          "location": "body",
          "issue": "string",
          "description": "string",
          "links": [
            {
              "href": "string",
              "rel": "string",
              "method": "GET"
            }
          ]
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="add-tracking-information-for-multiple-paypal-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP 200 OK status code and a JSON response body that shows tracking information.|[batch_tracker_collection](#schemabatch_tracker_collection)|
|400|Bad Request|The request is not well-formed, syntactically incorrect, or violates schema.|None|
|403|Forbidden|The authorization failed due to insufficient permissions.|None|
|404|Not Found|The specified resource does not exist.|None|
|500|Internal Server Error|An internal server error has occurred.|None|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/shipping/trackers/readwrite )
</aside>

# Schemas

<h2 id="tocS_batch_tracker_collection">batch_tracker_collection</h2>
<!-- backwards compatibility -->
<a id="schemabatch_tracker_collection"></a>
<a id="schema_batch_tracker_collection"></a>
<a id="tocSbatch_tracker_collection"></a>
<a id="tocsbatch_tracker_collection"></a>

```json
{
  "tracker_identifiers": [
    {
      "transaction_id": "string",
      "tracking_number": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "errors": [
    {
      "name": "string",
      "message": "string",
      "debug_id": "string",
      "information_link": "string",
      "details": [
        {
          "field": "string",
          "value": "string",
          "location": "body",
          "issue": "string",
          "description": "string",
          "links": [
            {
              "href": "string",
              "rel": "string",
              "method": "GET"
            }
          ]
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The add tracking information for multiple PayPal transactions response details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracker_identifiers|[tracker_identifier_list](#schematracker_identifier_list)|false|none|The batch header.|
|errors|[error_list](#schemaerror_list)|false|none|An array of error responses.|
|links|[batch_tracker_collection_definitions-link_description_list](#schemabatch_tracker_collection_definitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_batch_tracker_collection_definitions-link_description_list">batch_tracker_collection_definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemabatch_tracker_collection_definitions-link_description_list"></a>
<a id="schema_batch_tracker_collection_definitions-link_description_list"></a>
<a id="tocSbatch_tracker_collection_definitions-link_description_list"></a>
<a id="tocsbatch_tracker_collection_definitions-link_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).

<h2 id="tocS_carrier">carrier</h2>
<!-- backwards compatibility -->
<a id="schemacarrier"></a>
<a id="schema_carrier"></a>
<a id="tocScarrier"></a>
<a id="tocscarrier"></a>

```json
"2EBOX"
```

The carrier for the shipment. Carrier information is required when tracking_number is provided. Some carriers have a global version as well as local subsidiaries. The subsidiaries are repeated over many countries and might also have an entry in the global list. Choose the carrier for your country. If the carrier is not available for your country, choose the global version of the carrier. If your carrier name is not in the list, set `carrier` to `OTHER` and set carrier name in `carrier_name_other`. For allowed values, see <a href="/docs/tracking/reference/carriers/">Carriers</a>.

<h2 id="tocS_date_no_time">date_no_time</h2>
<!-- backwards compatibility -->
<a id="schemadate_no_time"></a>
<a id="schema_date_no_time"></a>
<a id="tocSdate_no_time"></a>
<a id="tocsdate_no_time"></a>

```json
"stringstri"
```

The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.

<h2 id="tocS_date_time">date_time</h2>
<!-- backwards compatibility -->
<a id="schemadate_time"></a>
<a id="schema_date_time"></a>
<a id="tocSdate_time"></a>
<a id="tocsdate_time"></a>

```json
"stringstringstringst"
```

The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>

<h2 id="tocS_definitions-link_description_list">definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-link_description_list"></a>
<a id="schema_definitions-link_description_list"></a>
<a id="tocSdefinitions-link_description_list"></a>
<a id="tocsdefinitions-link_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links) that are either relevant to the issue by providing additional information or offering potential resolutions.

<h2 id="tocS_definitions-tracker_identifier_list">definitions-tracker_identifier_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-tracker_identifier_list"></a>
<a id="schema_definitions-tracker_identifier_list"></a>
<a id="tocSdefinitions-tracker_identifier_list"></a>
<a id="tocsdefinitions-tracker_identifier_list"></a>

```json
[
  {
    "transaction_id": "string",
    "tracking_number": "string",
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
]
```

An array of tracking IDs.

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The human-readable, unique name of the error.|
|message|string|true|none|The message that describes the error.|
|debug_id|string|true|none|The PayPal internal ID. Used for correlation purposes.|
|information_link|string|false|read-only|The information link, or URI, that shows detailed information about this error for the developer.|
|details|[error_details_list](#schemaerror_details_list)|false|none|An array of additional details about the error.|
|links|[error_definitions-link_description_list](#schemaerror_definitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).|

<h2 id="tocS_error_400">error_400</h2>
<!-- backwards compatibility -->
<a id="schemaerror_400"></a>
<a id="schema_error_400"></a>
<a id="tocSerror_400"></a>
<a id="tocserror_400"></a>

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Request is not well-formed, syntactically incorrect, or violates schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|

<h2 id="tocS_error_401">error_401</h2>
<!-- backwards compatibility -->
<a id="schemaerror_401"></a>
<a id="schema_error_401"></a>
<a id="tocSerror_401"></a>
<a id="tocserror_401"></a>

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Authentication failed due to missing Authorization header, or invalid authentication credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|

<h2 id="tocS_error_403">error_403</h2>
<!-- backwards compatibility -->
<a id="schemaerror_403"></a>
<a id="schema_error_403"></a>
<a id="tocSerror_403"></a>
<a id="tocserror_403"></a>

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The client is not authorized to access this resource, although it may have valid credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|

<h2 id="tocS_error_404">error_404</h2>
<!-- backwards compatibility -->
<a id="schemaerror_404"></a>
<a id="schema_error_404"></a>
<a id="tocSerror_404"></a>
<a id="tocserror_404"></a>

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "message": "The specified resource does not exist.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|

<h2 id="tocS_error_409">error_409</h2>
<!-- backwards compatibility -->
<a id="schemaerror_409"></a>
<a id="schema_error_409"></a>
<a id="tocSerror_409"></a>
<a id="tocserror_409"></a>

```json
{
  "name": "RESOURCE_CONFLICT",
  "message": "The server has detected a conflict while processing this request.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has detected a conflict while processing this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_CONFLICT|
|message|The server has detected a conflict while processing this request.|

<h2 id="tocS_error_415">error_415</h2>
<!-- backwards compatibility -->
<a id="schemaerror_415"></a>
<a id="schema_error_415"></a>
<a id="tocSerror_415"></a>
<a id="tocserror_415"></a>

```json
{
  "name": "UNSUPPORTED_MEDIA_TYPE",
  "message": "The server does not support the request payload's media type.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server does not support the request payload's media type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNSUPPORTED_MEDIA_TYPE|
|message|The server does not support the request payload's media type.|

<h2 id="tocS_error_422">error_422</h2>
<!-- backwards compatibility -->
<a id="schemaerror_422"></a>
<a id="schema_error_422"></a>
<a id="tocSerror_422"></a>
<a id="tocserror_422"></a>

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|

<h2 id="tocS_error_500">error_500</h2>
<!-- backwards compatibility -->
<a id="schemaerror_500"></a>
<a id="schema_error_500"></a>
<a id="tocSerror_500"></a>
<a id="tocserror_500"></a>

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INTERNAL_SERVER_ERROR|
|message|An internal server error occurred.|

<h2 id="tocS_error_503">error_503</h2>
<!-- backwards compatibility -->
<a id="schemaerror_503"></a>
<a id="schema_error_503"></a>
<a id="tocSerror_503"></a>
<a id="tocserror_503"></a>

```json
{
  "name": "SERVICE_UNAVAILABLE",
  "message": "Service Unavailable.",
  "debug_id": "90957fca61718",
  "information_link": "https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE"
}
```

The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|SERVICE_UNAVAILABLE|
|message|Service Unavailable.|

<h2 id="tocS_error_definitions-link_description_list">error_definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemaerror_definitions-link_description_list"></a>
<a id="schema_error_definitions-link_description_list"></a>
<a id="tocSerror_definitions-link_description_list"></a>
<a id="tocserror_definitions-link_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).

<h2 id="tocS_error_details">error_details</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details"></a>
<a id="schema_error_details"></a>
<a id="tocSerror_details"></a>
<a id="tocserror_details"></a>

```json
{
  "field": "string",
  "value": "string",
  "location": "body",
  "issue": "string",
  "description": "string"
}
```

The error details. Required for client-side `4XX` errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.|
|value|string|false|none|The value of the field that caused the error.|
|location|[error_location](#schemaerror_location)|false|none|The location of the field that caused the error. Value is `body`, `path`, or `query`.|
|issue|string|true|none|The unique, fine-grained application-level error code.|
|description|string|false|none|The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.|

#### Enumerated Values

|Property|Value|
|---|---|
|location|body|
|location|path|
|location|query|

<h2 id="tocS_error_details-2">error_details-2</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details-2"></a>
<a id="schema_error_details-2"></a>
<a id="tocSerror_details-2"></a>
<a id="tocserror_details-2"></a>

```json
{
  "field": "string",
  "value": "string",
  "location": "body",
  "issue": "string",
  "description": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The error details. Required for client-side `4XX` errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.|
|value|string|false|none|The value of the field that caused the error.|
|location|string|false|none|The location of the field that caused the error. Value is `body`, `path`, or `query`.|
|issue|string|true|none|The unique, fine-grained application-level error code.|
|description|string|false|none|The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links) that are either relevant to the issue by providing additional information or offering potential resolutions.|

<h2 id="tocS_error_details_list">error_details_list</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details_list"></a>
<a id="schema_error_details_list"></a>
<a id="tocSerror_details_list"></a>
<a id="tocserror_details_list"></a>

```json
[
  {
    "field": "string",
    "value": "string",
    "location": "body",
    "issue": "string",
    "description": "string",
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
]
```

An array of additional details about the error.

<h2 id="tocS_error_link_description">error_link_description</h2>
<!-- backwards compatibility -->
<a id="schemaerror_link_description"></a>
<a id="schema_error_link_description"></a>
<a id="tocSerror_link_description"></a>
<a id="tocserror_link_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|PATCH|

<h2 id="tocS_error_list">error_list</h2>
<!-- backwards compatibility -->
<a id="schemaerror_list"></a>
<a id="schema_error_list"></a>
<a id="tocSerror_list"></a>
<a id="tocserror_list"></a>

```json
[
  {
    "name": "string",
    "message": "string",
    "debug_id": "string",
    "information_link": "string",
    "details": [
      {
        "field": "string",
        "value": "string",
        "location": "body",
        "issue": "string",
        "description": "string",
        "links": [
          {
            "href": "string",
            "rel": "string",
            "method": "GET"
          }
        ]
      }
    ],
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
]
```

An array of error responses.

<h2 id="tocS_error_location">error_location</h2>
<!-- backwards compatibility -->
<a id="schemaerror_location"></a>
<a id="schema_error_location"></a>
<a id="tocSerror_location"></a>
<a id="tocserror_location"></a>

```json
"body"
```

The location of the field that caused the error. Value is `body`, `path`, or `query`.

<h2 id="tocS_link_description">link_description</h2>
<!-- backwards compatibility -->
<a id="schemalink_description"></a>
<a id="schema_link_description"></a>
<a id="tocSlink_description"></a>
<a id="tocslink_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

A request-related [HATEOAS link](/api/rest/responses/#hateoas-links).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this link, in [URI template format](https://tools.ietf.org/html/rfc6570). Include the `$`, `(`, and `)` characters for pre-processing. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|HEAD|
|method|CONNECT|
|method|OPTIONS|
|method|PATCH|

<h2 id="tocS_link_description-2">link_description-2</h2>
<!-- backwards compatibility -->
<a id="schemalink_description-2"></a>
<a id="schema_link_description-2"></a>
<a id="tocSlink_description-2"></a>
<a id="tocslink_description-2"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|HEAD|
|method|CONNECT|
|method|OPTIONS|
|method|PATCH|

<h2 id="tocS_link_description_list">link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemalink_description_list"></a>
<a id="schema_link_description_list"></a>
<a id="tocSlink_description_list"></a>
<a id="tocslink_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).

<h2 id="tocS_tracker">tracker</h2>
<!-- backwards compatibility -->
<a id="schematracker"></a>
<a id="schema_tracker"></a>
<a id="tocStracker"></a>
<a id="tocstracker"></a>

```json
{
  "transaction_id": "string",
  "tracking_number": "string",
  "tracking_number_type": "CARRIER_PROVIDED",
  "status": "CANCELLED",
  "shipment_date": "stringstri",
  "carrier": "2EBOX",
  "carrier_name_other": "string",
  "postage_payment_id": "string",
  "notify_buyer": false,
  "quantity": 1,
  "tracking_number_validated": true,
  "last_updated_time": "stringstringstringst",
  "shipment_direction": "FORWARD",
  "shipment_uploader": "MERCHANT",
  "account_id": "stringstrings",
  "tracking_url": "http://example.com",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The tracking information for a shipment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_id|string|true|none|The PayPal transaction ID.|
|tracking_number|string|false|none|The tracking number for the shipment. Carrier information, `carrier` is required if tracking_number is provided.|
|tracking_number_type|[tracking_number_type](#schematracking_number_type)|false|none|The type of tracking number.|
|status|[tracking_status](#schematracking_status)|true|none|The status of the item shipment. For allowed values, see <a href="/docs/tracking/reference/shipping-status/">Shipping Statuses</a>.|
|shipment_date|[date_no_time](#schemadate_no_time)|false|none|The date when the shipment occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|carrier|[carrier](#schemacarrier)|false|none|The carrier for the shipment. Carrier information is required when tracking_number is provided. Some carriers have a global version as well as local subsidiaries. The subsidiaries are repeated over many countries and might also have an entry in the global list. Choose the carrier for your country. If the carrier is not available for your country, choose the global version of the carrier. If your carrier name is not in the list, set `carrier` to `OTHER` and set carrier name in `carrier_name_other`. For allowed values, see <a href="/docs/tracking/reference/carriers/">Carriers</a>.|
|carrier_name_other|string|false|none|The name of the carrier for the shipment. Provide this value only if the carrier parameter is OTHER.|
|postage_payment_id|string|false|read-only|The postage payment ID.|
|notify_buyer|boolean|false|none|If true , sends an email notification to the buyer of the PayPal transaction. The email contains the tracking information that was uploaded through the API.|
|quantity|integer|false|read-only|The quantity of items shipped.|
|tracking_number_validated|boolean|false|read-only|Indicates whether the carrier validated the tracking number.|
|last_updated_time|[date_time](#schemadate_time)|false|none|The date and time when the tracking information was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|shipment_direction|string|false|none|To denote whether the shipment is sent forward to the receiver or returned back.|
|shipment_uploader|string|false|read-only|To denote which party uploaded the shipment tracking info.|
|account_id|string|false|read-only|Encrypted PayPal Account ID of the buyer or seller.|
|tracking_url|string(uri)|false|none|Tracking Link of the shipment.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

#### Enumerated Values

|Property|Value|
|---|---|
|tracking_number_type|CARRIER_PROVIDED|
|tracking_number_type|E2E_PARTNER_PROVIDED|
|status|CANCELLED|
|status|DELIVERED|
|status|LOCAL_PICKUP|
|status|ON_HOLD|
|status|SHIPPED|
|status|SHIPMENT_CREATED|
|status|DROPPED_OFF|
|status|IN_TRANSIT|
|status|RETURNED|
|status|LABEL_PRINTED|
|status|ERROR|
|status|UNCONFIRMED|
|status|PICKUP_FAILED|
|status|DELIVERY_DELAYED|
|status|DELIVERY_SCHEDULED|
|status|DELIVERY_FAILED|
|status|INRETURN|
|status|IN_PROCESS|
|status|NEW|
|status|VOID|
|status|PROCESSED|
|status|NOT_SHIPPED|
|status|COMPLETED|
|carrier|2EBOX|
|carrier|360LION|
|carrier|3JMSLOGISTICS|
|carrier|4_72|
|carrier|6LS|
|carrier|A1POST|
|carrier|AAA_COOPER|
|carrier|ABCUSTOM|
|carrier|ABXEXPRESS_MY|
|carrier|ACOMMMERCE|
|carrier|ACSWORLDWIDE|
|carrier|ACS_GR|
|carrier|ADERONLINE|
|carrier|ADICIONAL|
|carrier|ADSONE|
|carrier|ADUIEPYLE|
|carrier|AERONET|
|carrier|AEX|
|carrier|AFLLOG_FTP|
|carrier|AGILITY|
|carrier|AIRMEE_WEBHOOK|
|carrier|AIR_CANADA_GLOBAL|
|carrier|ALFATREX|
|carrier|ALLIEDEXPRESS|
|carrier|ALLJOY|
|carrier|ALPHAFAST|
|carrier|ALWAYS_EXPRESS|
|carrier|AMAZON|
|carrier|AMAZON_FBA_SWISHIP|
|carrier|AMAZON_SHIP_MCF|
|carrier|AMSTAN|
|carrier|AMS_GRP|
|carrier|ANDREANI|
|carrier|ANICAM_BOX|
|carrier|ANJUN|
|carrier|ANSERX|
|carrier|AN_POST|
|carrier|AO_COURIER|
|carrier|AO_DEUTSCHLAND|
|carrier|APC_OVERNIGHT|
|carrier|APC_OVERNIGHT_CONNUM|
|carrier|APG|
|carrier|APRISAEXPRESS|
|carrier|AQUILINE|
|carrier|ARAMEX|
|carrier|ARAMEX_AU|
|carrier|ARCO_SPEDIZIONI|
|carrier|ARE_EMIRATES_POST|
|carrier|ARG_OCA|
|carrier|ARK_LOGISTICS|
|carrier|ASE|
|carrier|ASENDIA_HK|
|carrier|ASENDIA_UK|
|carrier|ASENDIA_USA|
|carrier|ASIGNA|
|carrier|AUPOST_CN|
|carrier|AUSTRIAN_POST_EXPRESS|
|carrier|AUS_STARTRACK|
|carrier|AUS_TOLL|
|carrier|AU_AUSTRIAN_POST|
|carrier|AU_AU_POST|
|carrier|AU_TNT|
|carrier|AVERITT|
|carrier|BEL_DHL|
|carrier|BEL_RS|
|carrier|BESTWAYPARCEL|
|carrier|BE_BPOST|
|carrier|BE_KIALA|
|carrier|BG_BULGARIAN_POST|
|carrier|BH_POSTA|
|carrier|BH_WORLDWIDE|
|carrier|BIRDSYSTEM|
|carrier|BJSHOMEDELIVERY|
|carrier|BLINKLASTMILE|
|carrier|BLR_BELPOST|
|carrier|BLUECARE|
|carrier|BLUESTAR|
|carrier|BLUEX|
|carrier|BNEED|
|carrier|BOMBINOEXP|
|carrier|BOND|
|carrier|BONDSCOURIERS|
|carrier|BORDEREXPRESS|
|carrier|BOX_BERRY|
|carrier|BPOST_INT|
|carrier|BRA_CORREIOS|
|carrier|BRING|
|carrier|BROUWER_TRANSPORT|
|carrier|BRT_IT|
|carrier|BRT_IT_PARCELID|
|carrier|BRT_IT_SENDER_REF|
|carrier|BUDBEE_WEBHOOK|
|carrier|BUYLOGIC|
|carrier|B_TWO_C_EUROPE|
|carrier|CAE_DELIVERS|
|carrier|CAINIAO|
|carrier|CARIBOU|
|carrier|CARRIERS|
|carrier|CARRY_FLAP|
|carrier|CA_CANADA_POST|
|carrier|CA_CANPAR|
|carrier|CA_GREYHOUND|
|carrier|CA_PUROLATOR|
|carrier|CBL_LOGISTICA|
|carrier|CDEK|
|carrier|CDEK_TR|
|carrier|CELERITAS|
|carrier|CELLO_SQUARE|
|carrier|CESKA_CZ|
|carrier|CEVA|
|carrier|CFL_LOGISTICS|
|carrier|CGS_EXPRESS|
|carrier|CHAMPION_LOGISTICS|
|carrier|CHITCHATS|
|carrier|CHOIR_EXP|
|carrier|CHROBINSON|
|carrier|CHRONOPOST_FR|
|carrier|CHUKOU1|
|carrier|CH_SWISS_POST_PRIORITY|
|carrier|CITYLINK_MY|
|carrier|CJPACKET|
|carrier|CJ_CENTURY|
|carrier|CJ_GLS|
|carrier|CJ_HK_INTERNATIONAL|
|carrier|CJ_INT_MY|
|carrier|CJ_KR|
|carrier|CJ_LOGISTICS|
|carrier|CJ_TH|
|carrier|CLEVY_LINKS|
|carrier|CLE_LOGISTICS|
|carrier|CLOUDWISH_ASIA|
|carrier|CNDEXPRESS|
|carrier|CNEXPS|
|carrier|CNWANGTONG|
|carrier|CN_17POST|
|carrier|CN_BESTEXPRESS|
|carrier|CN_BOXC|
|carrier|CN_CHINA_POST_EMS|
|carrier|CN_DPEX|
|carrier|CN_EMS|
|carrier|CN_EQUICK|
|carrier|CN_JCEX|
|carrier|CN_PAYPAL_PACKAGE|
|carrier|CN_POST56|
|carrier|CN_SF_EXPRESS|
|carrier|CN_STO|
|carrier|CN_WEDO|
|carrier|CN_WISHPOST|
|carrier|CN_YUNDA|
|carrier|COLIS_PRIVE|
|carrier|COLLECTCO|
|carrier|COLLIVERY|
|carrier|COMET_TECH|
|carrier|CONTINENTAL|
|carrier|CON_WAY|
|carrier|COORDINADORA|
|carrier|COPA_COURIER|
|carrier|COPE|
|carrier|CORPORATECOURIERS_WEBHOOK|
|carrier|CORREOS_DE_MEXICO|
|carrier|CORREOS_ES|
|carrier|CORREOS_EXPRESS|
|carrier|CORREO_UY|
|carrier|COSTMETICSNOW|
|carrier|COURANT_PLUS|
|carrier|COUREX|
|carrier|COURIERS_PLEASE|
|carrier|CPACKET|
|carrier|CPEX|
|carrier|CROSHOT|
|carrier|CSE|
|carrier|CTC_EXPRESS|
|carrier|CUBYN|
|carrier|CUCKOOEXPRESS|
|carrier|CYPRUS_POST_CYP|
|carrier|DAIGLOBALTRACK|
|carrier|DAJIN|
|carrier|DANSKE_FRAGT|
|carrier|DAWN_WING|
|carrier|DAYTON_FREIGHT|
|carrier|DBSCHENKER_B2B|
|carrier|DBSCHENKER_SE|
|carrier|DBSCHENKER_SV|
|carrier|DDEXPRESS|
|carrier|DEALERSEND|
|carrier|DELIVERYONTIME|
|carrier|DELNEXT|
|carrier|DELTEC_UK|
|carrier|DEMANDSHIP|
|carrier|DESCARTES|
|carrier|DESIGNERTRANSPORT_WEBHOOK|
|carrier|DESTINY|
|carrier|DEX_I|
|carrier|DE_ASENDIA|
|carrier|DE_DEUTSCHE|
|carrier|DE_DEUTSCHE_POST_DHL_WITHIN_EUROPE_TRACKNET|
|carrier|DE_DHL_EXPRESS|
|carrier|DE_DPD_DELISTRACK|
|carrier|DE_GLS|
|carrier|DHL|
|carrier|DHL_ACTIVE_TRACING|
|carrier|DHL_AU|
|carrier|DHL_BENELUX|
|carrier|DHL_ECOMERCE_ASA|
|carrier|DHL_ES|
|carrier|DHL_FR|
|carrier|DHL_FREIGHT|
|carrier|DHL_GLOBAL_MAIL_ASIA|
|carrier|DHL_HK|
|carrier|DHL_JP|
|carrier|DHL_PARCEL_ES|
|carrier|DHL_PARCEL_NL|
|carrier|DHL_PARCEL_RU|
|carrier|DHL_PL|
|carrier|DHL_REFR|
|carrier|DHL_SG|
|carrier|DHL_SUPPLY_CHAIN|
|carrier|DHL_UK|
|carrier|DIAMOND_EUROGISTICS|
|carrier|DICOM|
|carrier|DIDADI|
|carrier|DIMERCO|
|carrier|DIRECTCOURIERS|
|carrier|DIRECTLOG|
|carrier|DIRECTPARCELS|
|carrier|DMM_NETWORK|
|carrier|DMS_MATRIX|
|carrier|DOBROPOST|
|carrier|DOORA|
|carrier|DOORDASH_WEBHOOK|
|carrier|DPD|
|carrier|DPD_DELISTRACK|
|carrier|DPD_FR|
|carrier|DPD_HGRY|
|carrier|DPD_HK|
|carrier|DPD_IR|
|carrier|DPD_LOCAL|
|carrier|DPD_LOCAL_REF|
|carrier|DPD_POLAND|
|carrier|DPD_RO|
|carrier|DPD_RU|
|carrier|DPEX|
|carrier|DPE_EXPRESS|
|carrier|DPE_SOUTH_AFRC|
|carrier|DSV|
|carrier|DTDC_AU|
|carrier|DTDC_EXPRESS|
|carrier|DTDC_IN|
|carrier|DTD_EXPR|
|carrier|DX_SFTP|
|carrier|DYLT|
|carrier|DYNALOGIC|
|carrier|EASY_MAIL|
|carrier|ECEXPRESS|
|carrier|ECHO|
|carrier|ECMS|
|carrier|ECOSCOOTING|
|carrier|EFEX|
|carrier|EFS|
|carrier|EKART|
|carrier|ELIAN_POST|
|carrier|EMPS_CN|
|carrier|ENDEAVOUR_DELIVERY|
|carrier|ENVIALIA_REFERENCE|
|carrier|EPARCEL_KR|
|carrier|EPST_GLBL|
|carrier|EP_BOX|
|carrier|ESHIPPING|
|carrier|ESP_ASM|
|carrier|ESP_ENVIALIA|
|carrier|ESP_MRW|
|carrier|ESP_NACEX|
|carrier|ESP_PACKLINK|
|carrier|ESP_REDUR|
|carrier|ETOMARS|
|carrier|ETOTAL|
|carrier|ETS_EXPRESS|
|carrier|EU_FLEET_SOLUTIONS|
|carrier|EU_IMX|
|carrier|EXPRESSSALE|
|carrier|FARGOOD|
|carrier|FAR_INTERNATIONAL|
|carrier|FASTRACK|
|carrier|FASTRK_SERV|
|carrier|FASTWAY_IR|
|carrier|FASTWAY_NZ|
|carrier|FDSEXPRESS|
|carrier|FEDEX|
|carrier|FEDEX_CROSSBORDER|
|carrier|FEDEX_FR|
|carrier|FEDEX_INTL_MLSERV|
|carrier|FEDEX_POLAND|
|carrier|FEDEX_UK|
|carrier|FETCHR_WEBHOOK|
|carrier|FIEGE|
|carrier|FIEGE_NL|
|carrier|FIRSTMILE|
|carrier|FLASHEXPRESS|
|carrier|FMX|
|carrier|FONSEN|
|carrier|FORRUN|
|carrier|FREIGHTQUOTE|
|carrier|FRETERAPIDO|
|carrier|FR_BERT|
|carrier|FR_COLIS|
|carrier|FR_EXAPAQ|
|carrier|FR_GEODIS|
|carrier|FR_GLS|
|carrier|FULFILLA|
|carrier|FULFILLME|
|carrier|FURDECO|
|carrier|GAC|
|carrier|GANGBAO|
|carrier|GBA|
|carrier|GBS_BROKER|
|carrier|GB_APC|
|carrier|GB_ARROW|
|carrier|GB_NORSK|
|carrier|GB_PANTHER|
|carrier|GB_TUFFNELLS|
|carrier|GEIS|
|carrier|GEL_EXPRESS|
|carrier|GEMWORLDWIDE|
|carrier|GENERAL_OVERNIGHT|
|carrier|GENIKI_GR|
|carrier|GEODIS_ESPACE|
|carrier|GESWL|
|carrier|GIAO_HANG|
|carrier|GIO_EXPRESS|
|carrier|GLOBALTRANZ|
|carrier|GLOBAL_ABF|
|carrier|GLOBAL_ESTES|
|carrier|GLOBAL_EXPRESS|
|carrier|GLOBAL_IPARCEL|
|carrier|GLOBAL_TNT|
|carrier|GLOBAVEND|
|carrier|GLS_CROTIA|
|carrier|GLS_CZ|
|carrier|GLS_IT|
|carrier|GLS_ITALY|
|carrier|GLS_SLOV|
|carrier|GLS_SLOVEN|
|carrier|GOGLOBALPOST|
|carrier|GOJEK|
|carrier|GRAB_WEBHOOK|
|carrier|GRUPO|
|carrier|GR_ELTA|
|carrier|GSI_EXPRESS|
|carrier|GSO|
|carrier|HAPPY2POINT|
|carrier|HCT_LOGISTICS|
|carrier|HDB|
|carrier|HDB_BOX|
|carrier|HELLMANN|
|carrier|HELTHJEM|
|carrier|HEPPNER|
|carrier|HEPPNER_FR|
|carrier|HERMES|
|carrier|HERMES_2MANN_HANDLING|
|carrier|HERMES_DE|
|carrier|HH_EXP|
|carrier|HIPSHIPPER|
|carrier|HKD|
|carrier|HK_FLYT_EXPRESS|
|carrier|HK_FOUR_PX_EXPRESS|
|carrier|HK_POST|
|carrier|HK_TGX|
|carrier|HOLISOL|
|carrier|HOME_DELIVERY_SOLUTIONS|
|carrier|HOUNDEXPRESS|
|carrier|HRPARCEL|
|carrier|HRV_HRVATSKA|
|carrier|HUAHAN_EXPRESS|
|carrier|HUNTER_EXPRESS|
|carrier|HUODULL|
|carrier|HX_EXPRESS|
|carrier|IBEONE|
|carrier|ICUMULUS|
|carrier|IDEXPRESS|
|carrier|IDN_JNE|
|carrier|IDN_LION_PARCEL|
|carrier|IDN_PANDU|
|carrier|IML|
|carrier|INDOPAKET|
|carrier|IND_BLUEDART|
|carrier|IND_DELHIVERY|
|carrier|IND_DELIVREE|
|carrier|IND_DOTZOT|
|carrier|IND_ECOM|
|carrier|IND_FIRSTFLIGHT|
|carrier|IND_GATI|
|carrier|IND_GOJAVAS|
|carrier|IND_PROFESSIONAL_COURIERS|
|carrier|IND_SAFEEXPRESS|
|carrier|IND_XPRESSBEES|
|carrier|INPOST_PACZKOMATY|
|carrier|INTEGRA2_FTP|
|carrier|INTELIPOST|
|carrier|INTEL_VALLEY|
|carrier|INTERPARCEL_AU|
|carrier|INTERPARCEL_NZ|
|carrier|INTERPARCEL_UK|
|carrier|INTEXPRESS|
|carrier|ISRAEL_POST|
|carrier|ISR_POST_DOMESTIC|
|carrier|IT_DHL_ECOMMERCE|
|carrier|IT_FERCAM|
|carrier|IT_NEXIVE|
|carrier|IT_POSTE_ITALIA|
|carrier|IT_TNT|
|carrier|IVOY_WEBHOOK|
|carrier|I_DIKA|
|carrier|JANCO|
|carrier|JANIO|
|carrier|JERSEY_POST|
|carrier|JET_SHIP|
|carrier|JINDOUYUN|
|carrier|JINSUNG|
|carrier|JOCOM|
|carrier|JOOM_LOGIS|
|carrier|JOYING_BOX|
|carrier|JPN_JAPAN_POST|
|carrier|JPN_SAGAWA|
|carrier|JP_KURO_NEKO_YAMATO_UNYUU|
|carrier|JS_EXPRESS|
|carrier|JTEXPRESS|
|carrier|JTEXPRESS_VN|
|carrier|JX|
|carrier|J_NET|
|carrier|K1_EXPRESS|
|carrier|KANGAROO_MY|
|carrier|KEC|
|carrier|KERRYTJ|
|carrier|KERRYTTC_VN|
|carrier|KERRY_ECOMMERCE|
|carrier|KGMHUB|
|carrier|KHM_CAMBODIA_POST|
|carrier|KOR_ECARGO|
|carrier|KPOST|
|carrier|KR_KOREA_POST|
|carrier|KUEHNE|
|carrier|KURASI|
|carrier|KWE_GLOBAL|
|carrier|KWT|
|carrier|KYUNGDONG_PARCEL|
|carrier|KY_EXPRESS|
|carrier|LALAMOVE|
|carrier|LANDMARK_GLOBAL|
|carrier|LANDMARK_GLOBAL_REFERENCE|
|carrier|LATVIJAS_PASTS|
|carrier|LA_POSTE_SUIVI|
|carrier|LBCEXPRESS_FTP|
|carrier|LEADER|
|carrier|LEGION_EXPRESS|
|carrier|LEXSHIP|
|carrier|LHT_EXPRESS|
|carrier|LICCARDI_EXPRESS|
|carrier|LIEFERY|
|carrier|LINE|
|carrier|LINKBRIDGE|
|carrier|LOCUS_WEBHOOK|
|carrier|LOGISTERS|
|carrier|LOGISTICSWORLDWIDE_HK|
|carrier|LOGISTIKA|
|carrier|LOGISTYX_TRANSGROUP|
|carrier|LONESTAR|
|carrier|LOOMIS_EXPRESS|
|carrier|LOTTE|
|carrier|LTIANEXP|
|carrier|LTL|
|carrier|LTU_LIETUVOS|
|carrier|MAGYAR_HU|
|carrier|MAILAMERICAS|
|carrier|MAILPLUS_JPN|
|carrier|MAIL_PLUS|
|carrier|MAINFREIGHT|
|carrier|MAINWAY|
|carrier|MATDESPATCH|
|carrier|MATKAHUOLTO|
|carrier|MBW|
|carrier|MEX_AEROFLASH|
|carrier|MEX_ESTAFETA|
|carrier|MEX_REDPACK|
|carrier|MEX_SENDA|
|carrier|MGLOBAL|
|carrier|MIKROPAKKET|
|carrier|MIKROPAKKET_BE|
|carrier|MILKMAN|
|carrier|MORE_LINK|
|carrier|MORNING_EXPRESS|
|carrier|MRW_FTP|
|carrier|MXE|
|carrier|MX_CARGO|
|carrier|MYHERMES|
|carrier|MYS_AIRPAK|
|carrier|MYS_EMS|
|carrier|MYS_GDEX|
|carrier|MYS_MYPOST_ONLINE|
|carrier|MYS_MYS_POST|
|carrier|MYS_SKYNET|
|carrier|M_XPRESS|
|carrier|NACEX|
|carrier|NACEX_ES|
|carrier|NANJINGWOYUAN|
|carrier|NATIONAL_SAMEDAY|
|carrier|NATIONEX|
|carrier|NATIONWIDE_MY|
|carrier|NEWAY|
|carrier|NEWEGGEXPRESS|
|carrier|NEWGISTICS|
|carrier|NEWZEALAND_COURIERS|
|carrier|NG_COURIERPLUS|
|carrier|NHANS_SOLUTIONS|
|carrier|NIM_EXPRESS|
|carrier|NINJAVAN_MY|
|carrier|NINJAVAN_SG|
|carrier|NINJAVAN_THAI|
|carrier|NINJAVAN_WB|
|carrier|NIPOST_NG|
|carrier|NLD_DHL|
|carrier|NLD_GLS|
|carrier|NLD_POSTNL|
|carrier|NLD_TRANSMISSION|
|carrier|NOVA_POSHTA|
|carrier|NOVA_POSHTA_INT|
|carrier|NOX_NACHTEXPRESS|
|carrier|NOX_NIGHT_TIME_EXPRESS|
|carrier|NTLOGISTICS_VN|
|carrier|NZ_COURIER_POST|
|carrier|NZ_NZ_POST|
|carrier|OCS|
|carrier|OCS_WORLDWIDE|
|carrier|OKAYPARCEL|
|carrier|OMNIPARCEL|
|carrier|OMNIVA|
|carrier|ONECLICK|
|carrier|ONEWORLDEXPRESS|
|carrier|ORANGE_DS|
|carrier|OSM_WORLDWIDE|
|carrier|OVERSE_EXP|
|carrier|P2P_TRC|
|carrier|PAACK_WEBHOOK|
|carrier|PADTF|
|carrier|PAGO|
|carrier|PALEXPRESS|
|carrier|PALLETWAYS|
|carrier|PALLET_NETWORK|
|carrier|PANTHER_REFERENCE|
|carrier|PAN_ASIA|
|carrier|PAPERFLY|
|carrier|PAPER_EXPRESS|
|carrier|PAQUETEXPRESS|
|carrier|PARCEL2GO|
|carrier|PARCELINKLOGISTICS|
|carrier|PARCELLED_IN|
|carrier|PARCELONE|
|carrier|PARCELPAL_WEBHOOK|
|carrier|PARCELPOINT|
|carrier|PARCELPOST_SG|
|carrier|PARCEL_2_POST|
|carrier|PARKNPARCEL|
|carrier|PCFCORP|
|carrier|PFCEXPRESS|
|carrier|PFLOGISTICS|
|carrier|PHL_AIR21|
|carrier|PHL_AIRSPEED|
|carrier|PHL_JAMEXPRESS|
|carrier|PICKRR|
|carrier|PICKUP|
|carrier|PICKUPP_MYS|
|carrier|PICKUPP_SGP|
|carrier|PILOT_FREIGHT|
|carrier|PIL_LOGISTICS|
|carrier|PITNEY_BOWES|
|carrier|PITTOHIO|
|carrier|PIXSELL|
|carrier|PLANZER|
|carrier|PLUS_LOG_UK|
|carrier|PL_POCZTA_POLSKA|
|carrier|POL_SIODEMKA|
|carrier|PONY_EXPRESS|
|carrier|POSTA_PLUS|
|carrier|POSTA_RO|
|carrier|POSTA_UKR|
|carrier|POSTEN_NORGE|
|carrier|POSTI|
|carrier|POSTNL_INTL_3S|
|carrier|POSTNL_INT_3_S|
|carrier|POSTNORD_LOGISTICS|
|carrier|POSTNORD_LOGISTICS_DK|
|carrier|POSTUR_IS|
|carrier|POST_SERBIA|
|carrier|POST_SLOVENIA|
|carrier|PRESIDENT_TRANS|
|carrier|PRESSIODE|
|carrier|PRIMAMULTICIPTA|
|carrier|PROMEDDELIVERY|
|carrier|PRT_CHRONOPOST|
|carrier|PRT_CTT|
|carrier|PRT_INT_SEUR|
|carrier|PRT_SEUR|
|carrier|PTS|
|carrier|PTT_POST|
|carrier|QUANTIUM|
|carrier|QWINTRY|
|carrier|RABEN_GROUP|
|carrier|RAF_PH|
|carrier|RAIDEREX|
|carrier|RAM|
|carrier|RCL|
|carrier|RINCOS|
|carrier|RL_US|
|carrier|ROADBULL|
|carrier|ROADRUNNER_FREIGHT|
|carrier|ROCKET_PARCEL|
|carrier|ROUTIFIC_WEBHOOK|
|carrier|ROYAL_MAIL|
|carrier|RPD2MAN|
|carrier|RPX|
|carrier|RPXLOGISTICS|
|carrier|RPX_ID|
|carrier|RUSSIAN_POST|
|carrier|RUSTON|
|carrier|RZYEXPRESS|
|carrier|SAIA_FREIGHT|
|carrier|SAILPOST|
|carrier|SAP_EXPRESS|
|carrier|SAU_SAUDI_POST|
|carrier|SCUDEX_EXPRESS|
|carrier|SDA_IT|
|carrier|SDH_SCM|
|carrier|SEFL|
|carrier|SEINO|
|carrier|SEKOLOGISTICS|
|carrier|SEKO_SFTP|
|carrier|SENDING|
|carrier|SENDIT|
|carrier|SENDLE|
|carrier|SEUR_ES|
|carrier|SEUR_SP_API|
|carrier|SFB2C|
|carrier|SFCSERVICE|
|carrier|SFC_LOGISTICS|
|carrier|SFPLUS_WEBHOOK|
|carrier|SF_EX|
|carrier|SG_DETRACK|
|carrier|SG_QXPRESS|
|carrier|SG_SG_POST|
|carrier|SG_SPEEDPOST|
|carrier|SG_TAQBIN|
|carrier|SHENZHEN|
|carrier|SHIPENTEGRA|
|carrier|SHIPPIT|
|carrier|SHIPTER|
|carrier|SHIPTOR|
|carrier|SHIP_GATE|
|carrier|SHIP_IT_ASIA|
|carrier|SHOPFANS|
|carrier|SHREENANDANCOURIER|
|carrier|SHREETIRUPATI|
|carrier|SHREE_ANJANI_COURIER|
|carrier|SHREE_MARUTI|
|carrier|SIMPLYPOST|
|carrier|SINOTRANS|
|carrier|SIN_GLBL|
|carrier|SKYBOX|
|carrier|SKYNET_UAE|
|carrier|SKYNET_UK|
|carrier|SKYNET_WORLDWIDE|
|carrier|SKYNET_ZA|
|carrier|SKY_POSTAL|
|carrier|SK_POSTA|
|carrier|SMG_EXPRESS|
|carrier|SMOOTH|
|carrier|SMSA_EXPRESS|
|carrier|SONICTL|
|carrier|SOUTH_AFRICAN_POST_OFFICE|
|carrier|SPEEDCOURIERS_GR|
|carrier|SPEEDEE|
|carrier|SPEEDEXCOURIER|
|carrier|SPOTON|
|carrier|SPRING_GDS|
|carrier|SRE_KOREA|
|carrier|STALLIONEXPRESS|
|carrier|STARKEN|
|carrier|STAR_TRACK_EXPRESS|
|carrier|STAR_TRACK_NEXT_FLIGHT|
|carrier|STEPFORWARDFS|
|carrier|STONE3PL|
|carrier|STRECK_TRANSPORT|
|carrier|SUTTON|
|carrier|SWE_POSTNORD|
|carrier|SWISHIP_DE|
|carrier|SWISS_POST_FTP|
|carrier|SYPOST|
|carrier|SZENDEX|
|carrier|TAQBIN_HK|
|carrier|TAQBIN_MY|
|carrier|TARRIVE|
|carrier|TAZMANIAN_FREIGHT|
|carrier|TCK_EXPRESS|
|carrier|TCS|
|carrier|TFM|
|carrier|TFORCE_FINALMILE|
|carrier|THABIT_LOGISTICS|
|carrier|THA_DYNAMIC_LOGISTICS|
|carrier|THA_KERRY|
|carrier|THA_THAILAND_POST|
|carrier|THECOURIERGUY|
|carrier|THEDELIVERYGROUP|
|carrier|THENILE_WEBHOOK|
|carrier|TIGFREIGHT|
|carrier|TIKI_ID|
|carrier|TIPSA|
|carrier|TNT|
|carrier|TNT_CLICK_IT|
|carrier|TNT_FR|
|carrier|TNT_NL|
|carrier|TNT_REFR|
|carrier|TNT_UK|
|carrier|TNT_UK_REFR|
|carrier|TOLL|
|carrier|TOLL_NZ|
|carrier|TOLOS|
|carrier|TOPHATTEREXPRESS|
|carrier|TOPYOU|
|carrier|TOTAL_EXPRESS|
|carrier|TOURLINE|
|carrier|TRACKON|
|carrier|TRANS_KARGO|
|carrier|TRUMPCARD|
|carrier|TRUNKRS_WEBHOOK|
|carrier|TUFFNELLS_REFERENCE|
|carrier|TWO_GO|
|carrier|TW_TAIWAN_POST|
|carrier|UBI_LOGISTICS|
|carrier|UC_EXPRE|
|carrier|UDS|
|carrier|UK_COLLECTPLUS|
|carrier|UK_DPD|
|carrier|UK_NIGHTLINE|
|carrier|UK_PARCELFORCE|
|carrier|UK_UK_MAIL|
|carrier|UK_XDP|
|carrier|UK_YODEL|
|carrier|UPS|
|carrier|UPS_FREIGHT|
|carrier|UPS_MAIL_INNOVATIONS|
|carrier|UPS_REFERENCE|
|carrier|USF_REDDAWAY|
|carrier|USHIP|
|carrier|USPS|
|carrier|US_GLOBEGISTICS|
|carrier|US_LASERSHIP|
|carrier|US_OLD_DOMINION|
|carrier|US_ONTRAC|
|carrier|US_YRC|
|carrier|VAMOX|
|carrier|VENIPAK|
|carrier|VIAEUROPE|
|carrier|VIA_EXPRESS|
|carrier|VIRTRANSPORT|
|carrier|VIWO|
|carrier|VNM_VIETNAM_POST|
|carrier|VNM_VIETTELPOST|
|carrier|WAHANA_ID|
|carrier|WANBEXPRESS|
|carrier|WEASHIP|
|carrier|WEPOST|
|carrier|WESTBANK_COURIER|
|carrier|WESTGATE_GL|
|carrier|WHISTL|
|carrier|WINIT|
|carrier|WISELOADS|
|carrier|WISE_EXPRESS|
|carrier|WIZMO|
|carrier|WMG|
|carrier|WNDIRECT|
|carrier|WYNGS|
|carrier|XDE_WEBHOOK|
|carrier|XDP_UK_REFERENCE|
|carrier|XL_EXPRESS|
|carrier|XPERT_DELIVERY|
|carrier|XPOST|
|carrier|XPO_LOGISTICS|
|carrier|XPRESSEN_DK|
|carrier|XQ_EXPRESS|
|carrier|YAKIT|
|carrier|YANWEN|
|carrier|YDH_EXPRESS|
|carrier|YINGNUO_LOGISTICS|
|carrier|YODEL_DIR|
|carrier|YODEL_INTNL|
|carrier|YTO|
|carrier|YUNEXPRESS|
|carrier|YURTICI_KARGO|
|carrier|YUSEN|
|carrier|ZAJIL_EXPRESS|
|carrier|ZA_COURIERIT|
|carrier|ZA_FASTWAY|
|carrier|ZA_SPECIALISED_FREIGHT|
|carrier|ZEEK_2_DOOR|
|carrier|ZELERIS|
|carrier|ZEPTO_EXPRESS|
|carrier|ZES_EXPRESS|
|carrier|ZIINGFINALMILE|
|carrier|ZINC|
|carrier|ZJS_EXPRESS|
|carrier|ZTO_EXPRESS|
|carrier|ZYLLEM|
|shipment_direction|FORWARD|
|shipment_direction|RETURN|
|shipment_uploader|MERCHANT|
|shipment_uploader|CONSUMER|
|shipment_uploader|PARTNER|

<h2 id="tocS_tracker_collection">tracker_collection</h2>
<!-- backwards compatibility -->
<a id="schematracker_collection"></a>
<a id="schema_tracker_collection"></a>
<a id="tocStracker_collection"></a>
<a id="tocstracker_collection"></a>

```json
{
  "trackers": [
    {
      "transaction_id": "string",
      "tracking_number": "string",
      "tracking_number_type": "CARRIER_PROVIDED",
      "status": "CANCELLED",
      "shipment_date": "stringstri",
      "carrier": "2EBOX",
      "carrier_name_other": "string",
      "postage_payment_id": "string",
      "notify_buyer": false,
      "quantity": 1,
      "tracking_number_validated": true,
      "last_updated_time": "stringstringstringst",
      "shipment_direction": "FORWARD",
      "shipment_uploader": "MERCHANT",
      "account_id": "stringstrings",
      "tracking_url": "http://example.com",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The add tracking information for one or more transactions response details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trackers|[tracker_list](#schematracker_list)|false|none|An array of tracking information for shipments.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_tracker_identifier">tracker_identifier</h2>
<!-- backwards compatibility -->
<a id="schematracker_identifier"></a>
<a id="schema_tracker_identifier"></a>
<a id="tocStracker_identifier"></a>
<a id="tocstracker_identifier"></a>

```json
{
  "transaction_id": "string",
  "tracking_number": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The tracking identifiers for a shipment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_id|string|true|none|The PayPal transaction ID.|
|tracking_number|string|false|none|The tracking number for the shipment.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_tracker_identifier_collection">tracker_identifier_collection</h2>
<!-- backwards compatibility -->
<a id="schematracker_identifier_collection"></a>
<a id="schema_tracker_identifier_collection"></a>
<a id="tocStracker_identifier_collection"></a>
<a id="tocstracker_identifier_collection"></a>

```json
{
  "tracker_identifiers": [
    {
      "transaction_id": "string",
      "tracking_number": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The add tracking information for a PayPal transaction response details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracker_identifiers|[definitions-tracker_identifier_list](#schemadefinitions-tracker_identifier_list)|false|none|An array of tracking IDs.|
|links|[tracker_identifier_collection_definitions-link_description_list](#schematracker_identifier_collection_definitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_tracker_identifier_collection_definitions-link_description_list">tracker_identifier_collection_definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schematracker_identifier_collection_definitions-link_description_list"></a>
<a id="schema_tracker_identifier_collection_definitions-link_description_list"></a>
<a id="tocStracker_identifier_collection_definitions-link_description_list"></a>
<a id="tocstracker_identifier_collection_definitions-link_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).

<h2 id="tocS_tracker_identifier_list">tracker_identifier_list</h2>
<!-- backwards compatibility -->
<a id="schematracker_identifier_list"></a>
<a id="schema_tracker_identifier_list"></a>
<a id="tocStracker_identifier_list"></a>
<a id="tocstracker_identifier_list"></a>

```json
[
  {
    "transaction_id": "string",
    "tracking_number": "string",
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
]
```

The batch header.

<h2 id="tocS_tracker_list">tracker_list</h2>
<!-- backwards compatibility -->
<a id="schematracker_list"></a>
<a id="schema_tracker_list"></a>
<a id="tocStracker_list"></a>
<a id="tocstracker_list"></a>

```json
[
  {
    "transaction_id": "string",
    "tracking_number": "string",
    "tracking_number_type": "CARRIER_PROVIDED",
    "status": "CANCELLED",
    "shipment_date": "stringstri",
    "carrier": "2EBOX",
    "carrier_name_other": "string",
    "postage_payment_id": "string",
    "notify_buyer": false,
    "quantity": 1,
    "tracking_number_validated": true,
    "last_updated_time": "stringstringstringst",
    "shipment_direction": "FORWARD",
    "shipment_uploader": "MERCHANT",
    "account_id": "stringstrings",
    "tracking_url": "http://example.com",
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
]
```

An array of tracking information for shipments.

<h2 id="tocS_tracking_number_type">tracking_number_type</h2>
<!-- backwards compatibility -->
<a id="schematracking_number_type"></a>
<a id="schema_tracking_number_type"></a>
<a id="tocStracking_number_type"></a>
<a id="tocstracking_number_type"></a>

```json
"CARRIER_PROVIDED"
```

The tracking number type.

<h2 id="tocS_tracking_status">tracking_status</h2>
<!-- backwards compatibility -->
<a id="schematracking_status"></a>
<a id="schema_tracking_status"></a>
<a id="tocStracking_status"></a>
<a id="tocstracking_status"></a>

```json
"CANCELLED"
```

The status of the item shipment. For allowed values, see <a href="/docs/tracking/reference/shipping-status/">Shipping Statuses</a>.
