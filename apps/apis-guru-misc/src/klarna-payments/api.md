<h1 id="klarna-payments-api-v1">Klarna Payments API V1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The payments API is used to create a session to offer Klarna's payment methods as part of your checkout. As soon as the purchase is completed the order should be read and handled using the [`Order Management API`](https://docs.klarna.com/api/ordermanagement).

Read more on [Klarna payments](https://docs.klarna.com/klarna-payments/).

Base URLs:

* <a href="https://api.klarna.com">https://api.klarna.com</a>

<a href="https://docs.klarna.com/api">Find out more about the Klarna REST APIs</a>

<h1 id="klarna-payments-api-v1-orders">orders</h1>

## Cancel an existing authorization

<a id="opIdcancelAuthorization"></a>

> Code samples

```bash
curl https://example.com/payments/v1/authorizations/string \
  -X DELETE
```

`DELETE /payments/v1/authorizations/{authorizationToken}`

Use this API call to cancel/release an authorization. If the `authorization_token` received during a Klarna Payments won’t be used to place an order immediately you could release the authorization.
Read more on **[Cancel an existing authorization](https://docs.klarna.com/klarna-payments/other-actions/cancel-an-authorization/)**.

<h3 id="cancel-an-existing-authorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorizationToken|path|string|true|none|

<h3 id="cancel-an-existing-authorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The authorization was cancelled successfully.|None|
|403|Forbidden|You were not authorized to execute this operation.|None|
|404|Not Found|The authorization does not exist.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a consumer token

<a id="opIdpurchaseToken"></a>

> Code samples

```bash
curl https://example.com/payments/v1/authorizations/string/customer-token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "billing_address": {
      "attention": "Attn",
      "city": "London",
      "country": "GB",
      "email": "test.sam@test.com",
      "family_name": "Andersson",
      "given_name": "Adam",
      "organization_name": "string",
      "phone": "+44795465131",
      "postal_code": "W1G 0PW",
      "region": "OH",
      "street_address": "33 Cavendish Square",
      "street_address2": "Floor 22 / Flat 2",
      "title": "Mr."
    },
    "customer": {
      "date_of_birth": "1978-12-31",
      "gender": "male",
      "last_four_ssn": "string",
      "national_identification_number": "string",
      "organization_entity_type": "LIMITED_COMPANY",
      "organization_registration_id": "string",
      "title": "Mr.",
      "type": "organization",
      "vat_id": "string"
    },
    "description": "string",
    "intended_use": "SUBSCRIPTION",
    "locale": "en-GB",
    "purchase_country": "GB",
    "purchase_currency": "GBP"
  }'
```

`POST /payments/v1/authorizations/{authorizationToken}/customer-token`

Use this API call to create a Klarna Customer Token.<br/>After having obtained an `authorization_token` for a successful authorization, this can be used to create a purchase token instead of placing the order. Creating a Klarna Customer Token results in Klarna storing customer and payment method details.
Read more on **[Generate a consumer token](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-token/)**.

> Body parameter

```json
{
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male",
    "last_four_ssn": "string",
    "national_identification_number": "string",
    "organization_entity_type": "LIMITED_COMPANY",
    "organization_registration_id": "string",
    "title": "Mr.",
    "type": "organization",
    "vat_id": "string"
  },
  "description": "string",
  "intended_use": "SUBSCRIPTION",
  "locale": "en-GB",
  "purchase_country": "GB",
  "purchase_currency": "GBP"
}
```

<h3 id="generate-a-consumer-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorizationToken|path|string|true|none|
|body|body|[customer_token_creation_request](#schemacustomer_token_creation_request)|false|none|
|» billing_address|body|[address](#schemaaddress)|false|none|
|» customer|body|[customer](#schemacustomer)|false|none|
|» description|body|string|true|Description of the purpose of the token.|
|» intended_use|body|string|true|Intended use for the token.|
|» locale|body|string|true|RFC 1766 customer's locale.|
|» purchase_country|body|string|true|ISO 3166 alpha-2 purchase country.|
|» purchase_currency|body|string|true|ISO 4217 purchase currency.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» intended_use|SUBSCRIPTION|

> Example responses

> 200 Response

```json
{
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male"
  },
  "payment_method_reference": "0b1d9815-165e-42e2-8867-35bc03789e00",
  "redirect_url": "https://credit.klarna.com/v1/sessions/0b1d9815-165e-42e2-8867-35bc03789e00/redirect",
  "token_id": "0b1d9815-165e-42e2-8867-35bc03789e00"
}
```

> 400 Response

```json
{
  "authorized_payment_method": {
    "number_of_days": 0,
    "number_of_installments": 0,
    "type": "invoice"
  },
  "correlation_id": "string",
  "error_code": "string",
  "error_messages": [
    "string"
  ],
  "fraud_status": "string",
  "reason": "string"
}
```

<h3 id="generate-a-consumer-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token was successfully created.|[customer_token_creation_response](#schemacustomer_token_creation_response)|
|400|Bad Request|We were unable to create a customer token with the provided data. Some field constraint was violated.|[ErrorV2](#schemaerrorv2)|
|403|Forbidden|You were not authorized to execute this operation.|None|
|404|Not Found|The authorization does not exist.|None|
|409|Conflict|The data in the request does not match the session for the authorization.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new order

<a id="opIdcreateOrder"></a>

> Code samples

```bash
curl https://example.com/payments/v1/authorizations/string/order \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "auto_capture": false,
    "billing_address": {
      "attention": "Attn",
      "city": "London",
      "country": "GB",
      "email": "test.sam@test.com",
      "family_name": "Andersson",
      "given_name": "Adam",
      "organization_name": "string",
      "phone": "+44795465131",
      "postal_code": "W1G 0PW",
      "region": "OH",
      "street_address": "33 Cavendish Square",
      "street_address2": "Floor 22 / Flat 2",
      "title": "Mr."
    },
    "custom_payment_method_ids": [
      "string"
    ],
    "customer": {
      "date_of_birth": "1978-12-31",
      "gender": "male",
      "last_four_ssn": "string",
      "national_identification_number": "string",
      "organization_entity_type": "LIMITED_COMPANY",
      "organization_registration_id": "string",
      "title": "Mr.",
      "type": "organization",
      "vat_id": "string"
    },
    "locale": "en-GB",
    "merchant_data": "{\"order_specific\":[{\"substore\":\"Women'\''s Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
    "merchant_reference1": "ON4711",
    "merchant_reference2": "hdt53h-zdgg6-hdaff2",
    "merchant_urls": {
      "authorization": "https://www.example-url.com/authorization",
      "confirmation": "https://www.example-url.com/confirmation",
      "notification": "https://www.example-url.com/notification",
      "push": "https://www.example-url.com/push"
    },
    "order_amount": 2500,
    "order_lines": [
      {
        "image_url": "https://www.exampleobjects.com/logo.png",
        "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
        "name": "Running shoe",
        "product_identifiers": {
          "brand": "shoe-brand",
          "category_path": "Shoes > Running",
          "color": "white",
          "global_trade_item_number": "4912345678904",
          "manufacturer_part_number": "AD6654412-334.22",
          "size": "small"
        },
        "product_url": "https://.../AD6654412.html",
        "quantity": 1,
        "quantity_unit": "pcs",
        "reference": "AD6654412",
        "subscription": {
          "interval": "DAY",
          "interval_count": 1,
          "name": "string"
        },
        "tax_rate": 1900,
        "total_amount": 2500,
        "total_discount_amount": 500,
        "total_tax_amount": 475,
        "type": "physical",
        "unit_price": 2500
      }
    ],
    "order_tax_amount": 475,
    "purchase_country": "GB",
    "purchase_currency": "GBP",
    "shipping_address": {
      "attention": "Attn",
      "city": "London",
      "country": "GB",
      "email": "test.sam@test.com",
      "family_name": "Andersson",
      "given_name": "Adam",
      "organization_name": "string",
      "phone": "+44795465131",
      "postal_code": "W1G 0PW",
      "region": "OH",
      "street_address": "33 Cavendish Square",
      "street_address2": "Floor 22 / Flat 2",
      "title": "Mr."
    }
  }'
```

`POST /payments/v1/authorizations/{authorizationToken}/order`

Use this API call to create a new order. Placing an order towards Klarna means that the Klarna Payments session will be closed and that an order will be created in Klarna's system.<br/>When you have received the `authorization_token` for a successful authorization you can place the order. Among the other order details in this request, you include a URL to the confirmation page for the customer.<br/>When the Order has been successfully placed at Klarna, you need to handle it either through the Merchant Portal or using [Klarna’s Order Management API](#order-management-api).
Read more on **[Create a new order](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/)**.

> Body parameter

```json
{
  "auto_capture": false,
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "custom_payment_method_ids": [
    "string"
  ],
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male",
    "last_four_ssn": "string",
    "national_identification_number": "string",
    "organization_entity_type": "LIMITED_COMPANY",
    "organization_registration_id": "string",
    "title": "Mr.",
    "type": "organization",
    "vat_id": "string"
  },
  "locale": "en-GB",
  "merchant_data": "{\"order_specific\":[{\"substore\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
  "merchant_reference1": "ON4711",
  "merchant_reference2": "hdt53h-zdgg6-hdaff2",
  "merchant_urls": {
    "authorization": "https://www.example-url.com/authorization",
    "confirmation": "https://www.example-url.com/confirmation",
    "notification": "https://www.example-url.com/notification",
    "push": "https://www.example-url.com/push"
  },
  "order_amount": 2500,
  "order_lines": [
    {
      "image_url": "https://www.exampleobjects.com/logo.png",
      "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
      "name": "Running shoe",
      "product_identifiers": {
        "brand": "shoe-brand",
        "category_path": "Shoes > Running",
        "color": "white",
        "global_trade_item_number": "4912345678904",
        "manufacturer_part_number": "AD6654412-334.22",
        "size": "small"
      },
      "product_url": "https://.../AD6654412.html",
      "quantity": 1,
      "quantity_unit": "pcs",
      "reference": "AD6654412",
      "subscription": {
        "interval": "DAY",
        "interval_count": 1,
        "name": "string"
      },
      "tax_rate": 1900,
      "total_amount": 2500,
      "total_discount_amount": 500,
      "total_tax_amount": 475,
      "type": "physical",
      "unit_price": 2500
    }
  ],
  "order_tax_amount": 475,
  "purchase_country": "GB",
  "purchase_currency": "GBP",
  "shipping_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  }
}
```

<h3 id="create-a-new-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorizationToken|path|string|true|none|
|body|body|[create_order_request](#schemacreate_order_request)|false|none|
|» auto_capture|body|boolean|false|Allow merchant to trigger auto capturing.|
|» billing_address|body|[address](#schemaaddress)|false|none|
|» custom_payment_method_ids|body|[string]|false|Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. |
|» customer|body|[customer](#schemacustomer)|false|none|
|» locale|body|string|false|Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.<br>The following values are applicable:<br><br>AT: "de-AT", "de-DE", "en-DE"<br>BE: "be-BE", "nl-BE", "fr-BE", "en-BE"<br>CH: "it-CH", "de-CH", "fr-CH", "en-CH"<br>DE: "de-DE", "de-AT", "en-DE"<br>DK: "da-DK", "en-DK"<br>ES: "es-ES", "ca-ES", "en-ES"<br>FI: "fi-FI", "sv-FI", "en-FI"<br>GB: "en-GB"<br>IT: "it-IT", "en-IT"<br>NL: "nl-NL", "en-NL"<br>NO: "nb-NO", "en-NO"<br>PL: "pl-PL", "en-PL"<br>SE: "sv-SE", "en-SE"<br>US: "en-US".|
|» merchant_data|body|string|false|Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)|
|» merchant_reference1|body|string|false|Used for storing merchant's internal order number or other reference.|
|» merchant_reference2|body|string|false|Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).|
|» merchant_urls|body|[merchant_urls](#schemamerchant_urls)|false|none|
|» order_amount|body|integer(int64)|true|Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|» order_lines|body|[[order_line](#schemaorder_line)]|true|The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.|
|» order_tax_amount|body|integer(int64)|false|Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|» purchase_country|body|string|true|The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.|
|» purchase_currency|body|string|true|The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.|
|» shipping_address|body|[address](#schemaaddress)|false|none|

> Example responses

> 200 Response

```json
{
  "authorized_payment_method": {
    "number_of_days": 0,
    "number_of_installments": 0,
    "type": "invoice"
  },
  "fraud_status": "string",
  "order_id": "string",
  "redirect_url": "https://credit.klarna.com/v1/sessions/0b1d9815-165e-42e2-8867-35bc03789e00/redirect"
}
```

<h3 id="create-a-new-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order was successfully created.|[order](#schemaorder)|
|400|Bad Request|We were unable to create an order with the provided data. Some field constraint was violated.|None|
|403|Forbidden|You were not authorized to execute this operation.|None|
|404|Not Found|The authorization does not exist.|None|
|409|Conflict|The data in the request does not match the session for the authorization.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="klarna-payments-api-v1-sessions">sessions</h1>

## Create a new payment session

<a id="opIdcreateCreditSession"></a>

> Code samples

```bash
curl https://example.com/payments/v1/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acquiring_channel": "ECOMMERCE",
    "attachment": {
      "body": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
      "content_type": "application/vnd.klarna.internal.emd-v2+json"
    },
    "billing_address": {
      "attention": "Attn",
      "city": "London",
      "country": "GB",
      "email": "test.sam@test.com",
      "family_name": "Andersson",
      "given_name": "Adam",
      "organization_name": "string",
      "phone": "+44795465131",
      "postal_code": "W1G 0PW",
      "region": "OH",
      "street_address": "33 Cavendish Square",
      "street_address2": "Floor 22 / Flat 2",
      "title": "Mr."
    },
    "custom_payment_method_ids": [
      "string"
    ],
    "customer": {
      "date_of_birth": "1978-12-31",
      "gender": "male",
      "last_four_ssn": "string",
      "national_identification_number": "string",
      "organization_entity_type": "LIMITED_COMPANY",
      "organization_registration_id": "string",
      "title": "Mr.",
      "type": "organization",
      "vat_id": "string"
    },
    "design": "string",
    "intent": "buy",
    "locale": "en-US",
    "merchant_data": "{\"order_specific\":[{\"substore\":\"Women'\''s Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
    "merchant_reference1": "ON4711",
    "merchant_reference2": "hdt53h-zdgg6-hdaff2",
    "merchant_urls": {
      "authorization": "https://www.example-url.com/authorization",
      "confirmation": "https://www.example-url.com/confirmation",
      "notification": "https://www.example-url.com/notification",
      "push": "https://www.example-url.com/push"
    },
    "options": {
      "color_border": "#FF9900",
      "color_border_selected": "#FF9900",
      "color_details": "#FF9900",
      "color_text": "#FF9900",
      "radius_border": "5px"
    },
    "order_amount": 2500,
    "order_lines": [
      {
        "image_url": "https://www.exampleobjects.com/logo.png",
        "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
        "name": "Running shoe",
        "product_identifiers": {
          "brand": "shoe-brand",
          "category_path": "Shoes > Running",
          "color": "white",
          "global_trade_item_number": "4912345678904",
          "manufacturer_part_number": "AD6654412-334.22",
          "size": "small"
        },
        "product_url": "https://.../AD6654412.html",
        "quantity": 1,
        "quantity_unit": "pcs",
        "reference": "AD6654412",
        "subscription": {
          "interval": "DAY",
          "interval_count": 1,
          "name": "string"
        },
        "tax_rate": 1900,
        "total_amount": 2500,
        "total_discount_amount": 500,
        "total_tax_amount": 475,
        "type": "physical",
        "unit_price": 2500
      }
    ],
    "order_tax_amount": 475,
    "purchase_country": "GB",
    "purchase_currency": "GBP",
    "shipping_address": {
      "attention": "Attn",
      "city": "London",
      "country": "GB",
      "email": "test.sam@test.com",
      "family_name": "Andersson",
      "given_name": "Adam",
      "organization_name": "string",
      "phone": "+44795465131",
      "postal_code": "W1G 0PW",
      "region": "OH",
      "street_address": "33 Cavendish Square",
      "street_address2": "Floor 22 / Flat 2",
      "title": "Mr."
    }
  }'
```

`POST /payments/v1/sessions`

Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser.
Read more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.

> Body parameter

```json
{
  "acquiring_channel": "ECOMMERCE",
  "attachment": {
    "body": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
    "content_type": "application/vnd.klarna.internal.emd-v2+json"
  },
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "custom_payment_method_ids": [
    "string"
  ],
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male",
    "last_four_ssn": "string",
    "national_identification_number": "string",
    "organization_entity_type": "LIMITED_COMPANY",
    "organization_registration_id": "string",
    "title": "Mr.",
    "type": "organization",
    "vat_id": "string"
  },
  "design": "string",
  "intent": "buy",
  "locale": "en-US",
  "merchant_data": "{\"order_specific\":[{\"substore\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
  "merchant_reference1": "ON4711",
  "merchant_reference2": "hdt53h-zdgg6-hdaff2",
  "merchant_urls": {
    "authorization": "https://www.example-url.com/authorization",
    "confirmation": "https://www.example-url.com/confirmation",
    "notification": "https://www.example-url.com/notification",
    "push": "https://www.example-url.com/push"
  },
  "options": {
    "color_border": "#FF9900",
    "color_border_selected": "#FF9900",
    "color_details": "#FF9900",
    "color_text": "#FF9900",
    "radius_border": "5px"
  },
  "order_amount": 2500,
  "order_lines": [
    {
      "image_url": "https://www.exampleobjects.com/logo.png",
      "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
      "name": "Running shoe",
      "product_identifiers": {
        "brand": "shoe-brand",
        "category_path": "Shoes > Running",
        "color": "white",
        "global_trade_item_number": "4912345678904",
        "manufacturer_part_number": "AD6654412-334.22",
        "size": "small"
      },
      "product_url": "https://.../AD6654412.html",
      "quantity": 1,
      "quantity_unit": "pcs",
      "reference": "AD6654412",
      "subscription": {
        "interval": "DAY",
        "interval_count": 1,
        "name": "string"
      },
      "tax_rate": 1900,
      "total_amount": 2500,
      "total_discount_amount": 500,
      "total_tax_amount": 475,
      "type": "physical",
      "unit_price": 2500
    }
  ],
  "order_tax_amount": 475,
  "purchase_country": "GB",
  "purchase_currency": "GBP",
  "shipping_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  }
}
```

<h3 id="create-a-new-payment-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[session_create](#schemasession_create)|true|session_request|
|» acquiring_channel|body|string|false|The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.|
|» attachment|body|[attachment](#schemaattachment)|false|none|
|» billing_address|body|[address](#schemaaddress)|false|none|
|» custom_payment_method_ids|body|[string]|false|Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. |
|» customer|body|[customer](#schemacustomer)|false|none|
|» design|body|string|false|Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.|
|» intent|body|string|false|Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.|
|» locale|body|string|false|Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.<br>The following values are applicable:<br><br>AT: "de-AT", "de-DE", "en-DE"<br>BE: "be-BE", "nl-BE", "fr-BE", "en-BE"<br>CH: "it-CH", "de-CH", "fr-CH", "en-CH"<br>DE: "de-DE", "de-AT", "en-DE"<br>DK: "da-DK", "en-DK"<br>ES: "es-ES", "ca-ES", "en-ES"<br>FI: "fi-FI", "sv-FI", "en-FI"<br>GB: "en-GB"<br>IT: "it-IT", "en-IT"<br>NL: "nl-NL", "en-NL"<br>NO: "nb-NO", "en-NO"<br>PL: "pl-PL", "en-PL"<br>SE: "sv-SE", "en-SE"<br>US: "en-US". Default value is "en-US".|
|» merchant_data|body|string|false|Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)|
|» merchant_reference1|body|string|false|Used for storing merchant's internal order number or other reference.|
|» merchant_reference2|body|string|false|Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).|
|» merchant_urls|body|[merchant_urls](#schemamerchant_urls)|false|none|
|» options|body|[options](#schemaoptions)|false|none|
|» order_amount|body|integer(int64)|true|Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|» order_lines|body|[[order_line](#schemaorder_line)]|true|The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.|
|» order_tax_amount|body|integer(int64)|false|Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|» purchase_country|body|string|true|The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.|
|» purchase_currency|body|string|true|The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.|
|» shipping_address|body|[address](#schemaaddress)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» acquiring_channel|ECOMMERCE|
|» acquiring_channel|IN_STORE|
|» acquiring_channel|TELESALES|
|» intent|buy|
|» intent|tokenize|
|» intent|buy_and_tokenize|

> Example responses

> 200 Response

```json
{
  "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw",
  "payment_method_categories": [
    {
      "asset_urls": {
        "descriptive": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg",
        "standard": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
      },
      "identifier": "klarna",
      "name": "Pay with Klarna"
    }
  ],
  "session_id": "0b1d9815-165e-42e2-8867-35bc03789e00"
}
```

<h3 id="create-a-new-payment-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[merchant_session](#schemamerchant_session)|
|400|Bad Request|We were unable to create a session with the provided data. Some field constraint was violated.|None|
|403|Forbidden|You were not authorized to execute this operation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Read an existing payment session

<a id="opIdreadCreditSession"></a>

> Code samples

```bash
curl https://example.com/payments/v1/sessions/string \
  -H 'Accept: application/json'
```

`GET /payments/v1/sessions/{session_id}`

Use this API call to read a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session.
Read more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.

<h3 id="read-an-existing-payment-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string|true|session_id|

> Example responses

> 200 Response

```json
{
  "acquiring_channel": "ECOMMERCE",
  "attachment": {
    "body": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
    "content_type": "application/vnd.klarna.internal.emd-v2+json"
  },
  "authorization_token": "string",
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw",
  "custom_payment_method_ids": [
    "string"
  ],
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male",
    "organization_entity_type": "LIMITED_COMPANY",
    "organization_registration_id": "string",
    "title": "Mr.",
    "type": "organization",
    "vat_id": "string"
  },
  "design": "string",
  "expires_at": "2038-01-19T03:14:07.000Z",
  "intent": "buy",
  "locale": "en-GB",
  "merchant_data": "{\"order_specific\":[{\"substore\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
  "merchant_reference1": "ON4711",
  "merchant_reference2": "hdt53h-zdgg6-hdaff2",
  "merchant_urls": {
    "authorization": "https://www.example-url.com/authorization",
    "confirmation": "https://www.example-url.com/confirmation",
    "notification": "https://www.example-url.com/notification",
    "push": "https://www.example-url.com/push"
  },
  "options": {
    "color_border": "#FF9900",
    "color_border_selected": "#FF9900",
    "color_details": "#FF9900",
    "color_text": "#FF9900",
    "radius_border": "5px"
  },
  "order_amount": 2500,
  "order_lines": [
    {
      "image_url": "https://www.exampleobjects.com/logo.png",
      "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
      "name": "Running shoe",
      "product_identifiers": {
        "brand": "shoe-brand",
        "category_path": "Shoes > Running",
        "color": "white",
        "global_trade_item_number": "4912345678904",
        "manufacturer_part_number": "AD6654412-334.22",
        "size": "small"
      },
      "product_url": "https://.../AD6654412.html",
      "quantity": 1,
      "quantity_unit": "pcs",
      "reference": "AD6654412",
      "subscription": {
        "interval": "DAY",
        "interval_count": 1,
        "name": "string"
      },
      "tax_rate": 1900,
      "total_amount": 2500,
      "total_discount_amount": 500,
      "total_tax_amount": 475,
      "type": "physical",
      "unit_price": 2500
    }
  ],
  "order_tax_amount": 475,
  "payment_method_categories": [
    {
      "asset_urls": {
        "descriptive": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg",
        "standard": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
      },
      "identifier": "klarna",
      "name": "Pay with Klarna"
    }
  ],
  "purchase_country": "GB",
  "purchase_currency": "GBP",
  "shipping_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "status": "complete"
}
```

<h3 id="read-an-existing-payment-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[session_read](#schemasession_read)|
|403|Forbidden|You were not authorized to execute this operation.|None|
|404|Not Found|The session does not exist.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing payment session

<a id="opIdupdateCreditSession"></a>

> Code samples

```bash
curl https://example.com/payments/v1/sessions/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "acquiring_channel": "ECOMMERCE",
    "attachment": {
      "body": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
      "content_type": "application/vnd.klarna.internal.emd-v2+json"
    },
    "billing_address": {
      "attention": "Attn",
      "city": "London",
      "country": "GB",
      "email": "test.sam@test.com",
      "family_name": "Andersson",
      "given_name": "Adam",
      "organization_name": "string",
      "phone": "+44795465131",
      "postal_code": "W1G 0PW",
      "region": "OH",
      "street_address": "33 Cavendish Square",
      "street_address2": "Floor 22 / Flat 2",
      "title": "Mr."
    },
    "custom_payment_method_ids": [
      "string"
    ],
    "customer": {
      "date_of_birth": "1978-12-31",
      "gender": "male",
      "last_four_ssn": "string",
      "national_identification_number": "string",
      "organization_entity_type": "LIMITED_COMPANY",
      "organization_registration_id": "string",
      "title": "Mr.",
      "type": "organization",
      "vat_id": "string"
    },
    "design": "string",
    "intent": "buy",
    "locale": "en-GB",
    "merchant_data": "{\"order_specific\":[{\"substore\":\"Women'\''s Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
    "merchant_reference1": "ON4711",
    "merchant_reference2": "hdt53h-zdgg6-hdaff2",
    "merchant_urls": {
      "authorization": "https://www.example-url.com/authorization",
      "confirmation": "https://www.example-url.com/confirmation",
      "notification": "https://www.example-url.com/notification",
      "push": "https://www.example-url.com/push"
    },
    "options": {
      "color_border": "#FF9900",
      "color_border_selected": "#FF9900",
      "color_details": "#FF9900",
      "color_text": "#FF9900",
      "radius_border": "5px"
    },
    "order_amount": 2500,
    "order_lines": [
      {
        "image_url": "https://www.exampleobjects.com/logo.png",
        "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
        "name": "Running shoe",
        "product_identifiers": {
          "brand": "shoe-brand",
          "category_path": "Shoes > Running",
          "color": "white",
          "global_trade_item_number": "4912345678904",
          "manufacturer_part_number": "AD6654412-334.22",
          "size": "small"
        },
        "product_url": "https://.../AD6654412.html",
        "quantity": 1,
        "quantity_unit": "pcs",
        "reference": "AD6654412",
        "subscription": {
          "interval": "DAY",
          "interval_count": 1,
          "name": "string"
        },
        "tax_rate": 1900,
        "total_amount": 2500,
        "total_discount_amount": 500,
        "total_tax_amount": 475,
        "type": "physical",
        "unit_price": 2500
      }
    ],
    "order_tax_amount": 475,
    "purchase_country": "GB",
    "purchase_currency": "GBP",
    "shipping_address": {
      "attention": "Attn",
      "city": "London",
      "country": "GB",
      "email": "test.sam@test.com",
      "family_name": "Andersson",
      "given_name": "Adam",
      "organization_name": "string",
      "phone": "+44795465131",
      "postal_code": "W1G 0PW",
      "region": "OH",
      "street_address": "33 Cavendish Square",
      "street_address2": "Floor 22 / Flat 2",
      "title": "Mr."
    }
  }'
```

`POST /payments/v1/sessions/{session_id}`

Use this API call to update a Klarna Payments session with new details, in case something in the order has changed and the checkout has been reloaded. Including if the consumer adds a new item to the cart or if consumer details are updated.
Read more on **[Update an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/update-the-cart/)**.

> Body parameter

```json
{
  "acquiring_channel": "ECOMMERCE",
  "attachment": {
    "body": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
    "content_type": "application/vnd.klarna.internal.emd-v2+json"
  },
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "custom_payment_method_ids": [
    "string"
  ],
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male",
    "last_four_ssn": "string",
    "national_identification_number": "string",
    "organization_entity_type": "LIMITED_COMPANY",
    "organization_registration_id": "string",
    "title": "Mr.",
    "type": "organization",
    "vat_id": "string"
  },
  "design": "string",
  "intent": "buy",
  "locale": "en-GB",
  "merchant_data": "{\"order_specific\":[{\"substore\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
  "merchant_reference1": "ON4711",
  "merchant_reference2": "hdt53h-zdgg6-hdaff2",
  "merchant_urls": {
    "authorization": "https://www.example-url.com/authorization",
    "confirmation": "https://www.example-url.com/confirmation",
    "notification": "https://www.example-url.com/notification",
    "push": "https://www.example-url.com/push"
  },
  "options": {
    "color_border": "#FF9900",
    "color_border_selected": "#FF9900",
    "color_details": "#FF9900",
    "color_text": "#FF9900",
    "radius_border": "5px"
  },
  "order_amount": 2500,
  "order_lines": [
    {
      "image_url": "https://www.exampleobjects.com/logo.png",
      "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
      "name": "Running shoe",
      "product_identifiers": {
        "brand": "shoe-brand",
        "category_path": "Shoes > Running",
        "color": "white",
        "global_trade_item_number": "4912345678904",
        "manufacturer_part_number": "AD6654412-334.22",
        "size": "small"
      },
      "product_url": "https://.../AD6654412.html",
      "quantity": 1,
      "quantity_unit": "pcs",
      "reference": "AD6654412",
      "subscription": {
        "interval": "DAY",
        "interval_count": 1,
        "name": "string"
      },
      "tax_rate": 1900,
      "total_amount": 2500,
      "total_discount_amount": 500,
      "total_tax_amount": 475,
      "type": "physical",
      "unit_price": 2500
    }
  ],
  "order_tax_amount": 475,
  "purchase_country": "GB",
  "purchase_currency": "GBP",
  "shipping_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  }
}
```

<h3 id="update-an-existing-payment-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string|true|session_id|
|body|body|[session](#schemasession)|true|session_request|
|» acquiring_channel|body|string|false|The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.|
|» attachment|body|[attachment](#schemaattachment)|false|none|
|» billing_address|body|[address](#schemaaddress)|false|none|
|» custom_payment_method_ids|body|[string]|false|Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. |
|» customer|body|[customer](#schemacustomer)|false|none|
|» design|body|string|false|Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.|
|» intent|body|string|false|Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.|
|» locale|body|string|false|Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.<br>The following values are applicable:<br><br>AT: "de-AT", "de-DE", "en-DE"<br>BE: "be-BE", "nl-BE", "fr-BE", "en-BE"<br>CH: "it-CH", "de-CH", "fr-CH", "en-CH"<br>DE: "de-DE", "de-AT", "en-DE"<br>DK: "da-DK", "en-DK"<br>ES: "es-ES", "ca-ES", "en-ES"<br>FI: "fi-FI", "sv-FI", "en-FI"<br>GB: "en-GB"<br>IT: "it-IT", "en-IT"<br>NL: "nl-NL", "en-NL"<br>NO: "nb-NO", "en-NO"<br>PL: "pl-PL", "en-PL"<br>SE: "sv-SE", "en-SE"<br>US: "en-US".|
|» merchant_data|body|string|false|Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)|
|» merchant_reference1|body|string|false|Used for storing merchant's internal order number or other reference.|
|» merchant_reference2|body|string|false|Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).|
|» merchant_urls|body|[merchant_urls](#schemamerchant_urls)|false|none|
|» options|body|[options](#schemaoptions)|false|none|
|» order_amount|body|integer(int64)|false|Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|» order_lines|body|[[order_line](#schemaorder_line)]|false|The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.|
|» order_tax_amount|body|integer(int64)|false|Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|» purchase_country|body|string|false|The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.|
|» purchase_currency|body|string|false|The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.|
|» shipping_address|body|[address](#schemaaddress)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» acquiring_channel|ECOMMERCE|
|» acquiring_channel|IN_STORE|
|» acquiring_channel|TELESALES|
|» intent|buy|
|» intent|tokenize|
|» intent|buy_and_tokenize|

<h3 id="update-an-existing-payment-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The session was updated successfully.|None|
|400|Bad Request|We were unable to update the session with the provided data. Some field constraint was violated.|None|
|403|Forbidden|You were not authorized to execute this operation.|None|
|404|Not Found|The session does not exist.|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ErrorV2">ErrorV2</h2>
<!-- backwards compatibility -->
<a id="schemaerrorv2"></a>
<a id="schema_ErrorV2"></a>
<a id="tocSerrorv2"></a>
<a id="tocserrorv2"></a>

```json
{
  "authorized_payment_method": {
    "number_of_days": 0,
    "number_of_installments": 0,
    "type": "invoice"
  },
  "correlation_id": "string",
  "error_code": "string",
  "error_messages": [
    "string"
  ],
  "fraud_status": "string",
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorized_payment_method|[authorized_payment_method](#schemaauthorized_payment_method)|false|none|none|
|correlation_id|string|false|none|none|
|error_code|string|false|none|none|
|error_messages|[string]|false|none|none|
|fraud_status|string|false|none|none|
|reason|string|false|none|none|

<h2 id="tocS_address">address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "attention": "Attn",
  "city": "London",
  "country": "GB",
  "email": "test.sam@test.com",
  "family_name": "Andersson",
  "given_name": "Adam",
  "organization_name": "string",
  "phone": "+44795465131",
  "postal_code": "W1G 0PW",
  "region": "OH",
  "street_address": "33 Cavendish Square",
  "street_address2": "Floor 22 / Flat 2",
  "title": "Mr."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attention|string|false|none|‘Attn.’ (if applicable). Only applicable for B2B customers.|
|city|string|false|none|Customer’s city.|
|country|string|false|none|Customer’s country. This value overrides the purchase country if they are different. Should follow the standard of ISO 3166 alpha-2. E.g. GB, US, DE, SE.|
|email|string|false|none|Customer’s email address.|
|family_name|string|false|none|Customers family name in UTF-8 encoding.<br>Cannot be only numbers, must be more than 1 character.<br>Allowed special characters: -'’.<br>More information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)|
|given_name|string|false|none|Customers given name in UTF-8 encoding.<br>Cannot be only numbers, must be more than 1 character.<br>Allowed special characters: -'’.<br>More information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)|
|organization_name|string|false|none|Organization name (if applicable). Only applicable for B2B customers.|
|phone|string|false|none|Phone number. Preferably a mobile phone number.|
|postal_code|string|false|none|Customer’s postal code. Validation according to Universal Postal Union addressing systems.<br>E.g. 12345, W1G OPW.|
|region|string|false|none|Customer’s region or state - Mandatory for US and AU market. Validations according to ISO 3166-2 format, e.g. OH, NJ, etc.|
|street_address|string|false|none|Customer’s street address. Regional formatting is required, as follows:<br>UK/US/FR: 33 Cavendish Square<br>Rest of EU: De Ruijterkade 7|
|street_address2|string|false|none|Customer’s street address. Second Line. |
|title|string|false|none|Customer’s Title. Allowed values per country:<br>UK - "Mr", "Ms"<br>DE - "Herr", "Frau"<br>AT: "Herr, "Frau"<br>CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme" <br>BE: "Dhr.", "Mevr."<br>NL: "Dhr.", "Mevr."|

<h2 id="tocS_asset_urls">asset_urls</h2>
<!-- backwards compatibility -->
<a id="schemaasset_urls"></a>
<a id="schema_asset_urls"></a>
<a id="tocSasset_urls"></a>
<a id="tocsasset_urls"></a>

```json
{
  "descriptive": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg",
  "standard": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptive|string|false|none|URL of the descriptive asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated.|
|standard|string|false|none|URL of the standard asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated.|

<h2 id="tocS_attachment">attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "body": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
  "content_type": "application/vnd.klarna.internal.emd-v2+json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|The content of the extra merchant data should be presented as a string inside this property. The body should be an object containing any of the keys and sub-objects described below serialized to JSON. More information on that object can be found [here](https://developers.klarna.com/api/#attachment-schema).|
|content_type|string|true|none|The content type of the body. It is usually represented as "application/vnd.klarna.internal.emd-v2+json"|

<h2 id="tocS_authorized_payment_method">authorized_payment_method</h2>
<!-- backwards compatibility -->
<a id="schemaauthorized_payment_method"></a>
<a id="schema_authorized_payment_method"></a>
<a id="tocSauthorized_payment_method"></a>
<a id="tocsauthorized_payment_method"></a>

```json
{
  "number_of_days": 0,
  "number_of_installments": 0,
  "type": "invoice"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number_of_days|integer(int32)|false|none|none|
|number_of_installments|integer(int32)|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|invoice|
|type|fixed_amount|
|type|base_account|
|type|direct_debit|
|type|direct_bank_transfer|
|type|b2b_invoice|
|type|card|
|type|slice_it_by_card|
|type|pay_later_by_card|
|type|pay_by_card|
|type|fixed_sum_credit|

<h2 id="tocS_create_order_request">create_order_request</h2>
<!-- backwards compatibility -->
<a id="schemacreate_order_request"></a>
<a id="schema_create_order_request"></a>
<a id="tocScreate_order_request"></a>
<a id="tocscreate_order_request"></a>

```json
{
  "authorization_token": "string",
  "auto_capture": false,
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "custom_payment_method_ids": [
    "string"
  ],
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male",
    "last_four_ssn": "string",
    "national_identification_number": "string",
    "organization_entity_type": "LIMITED_COMPANY",
    "organization_registration_id": "string",
    "title": "Mr.",
    "type": "organization",
    "vat_id": "string"
  },
  "locale": "en-GB",
  "merchant_data": "{\"order_specific\":[{\"substore\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
  "merchant_reference1": "ON4711",
  "merchant_reference2": "hdt53h-zdgg6-hdaff2",
  "merchant_urls": {
    "authorization": "https://www.example-url.com/authorization",
    "confirmation": "https://www.example-url.com/confirmation",
    "notification": "https://www.example-url.com/notification",
    "push": "https://www.example-url.com/push"
  },
  "order_amount": 2500,
  "order_lines": [
    {
      "image_url": "https://www.exampleobjects.com/logo.png",
      "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
      "name": "Running shoe",
      "product_identifiers": {
        "brand": "shoe-brand",
        "category_path": "Shoes > Running",
        "color": "white",
        "global_trade_item_number": "4912345678904",
        "manufacturer_part_number": "AD6654412-334.22",
        "size": "small"
      },
      "product_url": "https://.../AD6654412.html",
      "quantity": 1,
      "quantity_unit": "pcs",
      "reference": "AD6654412",
      "subscription": {
        "interval": "DAY",
        "interval_count": 1,
        "name": "string"
      },
      "tax_rate": 1900,
      "total_amount": 2500,
      "total_discount_amount": 500,
      "total_tax_amount": 475,
      "type": "physical",
      "unit_price": 2500
    }
  ],
  "order_tax_amount": 475,
  "payment_method_categories": [
    {
      "asset_urls": {
        "descriptive": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg",
        "standard": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
      },
      "identifier": "klarna",
      "name": "Pay with Klarna"
    }
  ],
  "purchase_country": "GB",
  "purchase_currency": "GBP",
  "shipping_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "status": "complete"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorization_token|string|false|read-only|Authorization token.|
|auto_capture|boolean|false|none|Allow merchant to trigger auto capturing.|
|billing_address|[address](#schemaaddress)|false|none|none|
|custom_payment_method_ids|[string]|false|none|Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. |
|customer|[customer](#schemacustomer)|false|none|none|
|locale|string|false|none|Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.<br>The following values are applicable:<br><br>AT: "de-AT", "de-DE", "en-DE"<br>BE: "be-BE", "nl-BE", "fr-BE", "en-BE"<br>CH: "it-CH", "de-CH", "fr-CH", "en-CH"<br>DE: "de-DE", "de-AT", "en-DE"<br>DK: "da-DK", "en-DK"<br>ES: "es-ES", "ca-ES", "en-ES"<br>FI: "fi-FI", "sv-FI", "en-FI"<br>GB: "en-GB"<br>IT: "it-IT", "en-IT"<br>NL: "nl-NL", "en-NL"<br>NO: "nb-NO", "en-NO"<br>PL: "pl-PL", "en-PL"<br>SE: "sv-SE", "en-SE"<br>US: "en-US".|
|merchant_data|string|false|none|Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)|
|merchant_reference1|string|false|none|Used for storing merchant's internal order number or other reference.|
|merchant_reference2|string|false|none|Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).|
|merchant_urls|[merchant_urls](#schemamerchant_urls)|false|none|none|
|order_amount|integer(int64)|true|none|Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|order_lines|[[order_line](#schemaorder_line)]|true|none|The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.|
|order_tax_amount|integer(int64)|false|none|Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|payment_method_categories|[[payment_method_category](#schemapayment_method_category)]|false|read-only|Available payment method categories|
|purchase_country|string|true|none|The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.|
|purchase_currency|string|true|none|The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.|
|shipping_address|[address](#schemaaddress)|false|none|none|
|status|string|false|read-only|The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|complete|
|status|incomplete|

<h2 id="tocS_customer">customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "date_of_birth": "1978-12-31",
  "gender": "male",
  "last_four_ssn": "string",
  "national_identification_number": "string",
  "organization_entity_type": "LIMITED_COMPANY",
  "organization_registration_id": "string",
  "title": "Mr.",
  "type": "organization",
  "vat_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_of_birth|string|false|none|Customer’s date of birth. The format is ‘yyyy-mm-dd’|
|gender|string|false|none|Customer’s gender - ‘male’ or ‘female’|
|last_four_ssn|string|false|none|Last four digits of the customer's social security number. This value is available for US customers.|
|national_identification_number|string|false|none|The customer's national identification number. This value is available for EU customers utilizing national identification numbers.|
|organization_entity_type|string|false|none|Organization entity type. Only applicable for B2B customers.|
|organization_registration_id|string|false|none|Organization registration id. Only applicable for B2B customers.|
|title|string|false|none|Customer’s Title. Allowed values per country:<br>UK - "Mr", "Ms"<br>DE - "Herr", "Frau"<br>AT: "Herr, "Frau"<br>CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme" <br>BE: "Dhr.", "Mevr."<br>NL: "Dhr.", "Mevr."|
|type|string|false|none|Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session.|
|vat_id|string|false|none|VAT ID. Only applicable for B2B customers.|

#### Enumerated Values

|Property|Value|
|---|---|
|organization_entity_type|LIMITED_COMPANY|
|organization_entity_type|PUBLIC_LIMITED_COMPANY|
|organization_entity_type|ENTREPRENEURIAL_COMPANY|
|organization_entity_type|LIMITED_PARTNERSHIP_LIMITED_COMPANY|
|organization_entity_type|LIMITED_PARTNERSHIP|
|organization_entity_type|GENERAL_PARTNERSHIP|
|organization_entity_type|REGISTERED_SOLE_TRADER|
|organization_entity_type|SOLE_TRADER|
|organization_entity_type|CIVIL_LAW_PARTNERSHIP|
|organization_entity_type|PUBLIC_INSTITUTION|
|organization_entity_type|OTHER|

<h2 id="tocS_customer_read">customer_read</h2>
<!-- backwards compatibility -->
<a id="schemacustomer_read"></a>
<a id="schema_customer_read"></a>
<a id="tocScustomer_read"></a>
<a id="tocscustomer_read"></a>

```json
{
  "date_of_birth": "1978-12-31",
  "gender": "male",
  "organization_entity_type": "LIMITED_COMPANY",
  "organization_registration_id": "string",
  "title": "Mr.",
  "type": "organization",
  "vat_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_of_birth|string|false|none|Customer’s date of birth. The format is ‘yyyy-mm-dd’|
|gender|string|false|none|Customer’s gender - ‘male’ or ‘female’|
|organization_entity_type|string|false|none|Organization entity type. Only applicable for B2B customers.|
|organization_registration_id|string|false|none|Organization registration id. Only applicable for B2B customers.|
|title|string|false|none|Customer’s Title. Allowed values per country:<br>UK - "Mr", "Ms"<br>DE - "Herr", "Frau"<br>AT: "Herr, "Frau"<br>CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme" <br>BE: "Dhr.", "Mevr."<br>NL: "Dhr.", "Mevr."|
|type|string|false|none|Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session.|
|vat_id|string|false|none|VAT ID. Only applicable for B2B customers.|

#### Enumerated Values

|Property|Value|
|---|---|
|organization_entity_type|LIMITED_COMPANY|
|organization_entity_type|PUBLIC_LIMITED_COMPANY|
|organization_entity_type|ENTREPRENEURIAL_COMPANY|
|organization_entity_type|LIMITED_PARTNERSHIP_LIMITED_COMPANY|
|organization_entity_type|LIMITED_PARTNERSHIP|
|organization_entity_type|GENERAL_PARTNERSHIP|
|organization_entity_type|REGISTERED_SOLE_TRADER|
|organization_entity_type|SOLE_TRADER|
|organization_entity_type|CIVIL_LAW_PARTNERSHIP|
|organization_entity_type|PUBLIC_INSTITUTION|
|organization_entity_type|OTHER|

<h2 id="tocS_customer_read_create_token">customer_read_create_token</h2>
<!-- backwards compatibility -->
<a id="schemacustomer_read_create_token"></a>
<a id="schema_customer_read_create_token"></a>
<a id="tocScustomer_read_create_token"></a>
<a id="tocscustomer_read_create_token"></a>

```json
{
  "date_of_birth": "1978-12-31",
  "gender": "male"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_of_birth|string|false|none|Customer’s date of birth. The format is ‘yyyy-mm-dd’|
|gender|string|false|none|Customer’s gender - ‘male’ or ‘female’|

<h2 id="tocS_customer_token_creation_request">customer_token_creation_request</h2>
<!-- backwards compatibility -->
<a id="schemacustomer_token_creation_request"></a>
<a id="schema_customer_token_creation_request"></a>
<a id="tocScustomer_token_creation_request"></a>
<a id="tocscustomer_token_creation_request"></a>

```json
{
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male",
    "last_four_ssn": "string",
    "national_identification_number": "string",
    "organization_entity_type": "LIMITED_COMPANY",
    "organization_registration_id": "string",
    "title": "Mr.",
    "type": "organization",
    "vat_id": "string"
  },
  "description": "string",
  "intended_use": "SUBSCRIPTION",
  "locale": "en-GB",
  "purchase_country": "GB",
  "purchase_currency": "GBP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_address|[address](#schemaaddress)|false|none|none|
|customer|[customer](#schemacustomer)|false|none|none|
|description|string|true|none|Description of the purpose of the token.|
|intended_use|string|true|none|Intended use for the token.|
|locale|string|true|none|RFC 1766 customer's locale.|
|purchase_country|string|true|none|ISO 3166 alpha-2 purchase country.|
|purchase_currency|string|true|none|ISO 4217 purchase currency.|

#### Enumerated Values

|Property|Value|
|---|---|
|intended_use|SUBSCRIPTION|

<h2 id="tocS_customer_token_creation_response">customer_token_creation_response</h2>
<!-- backwards compatibility -->
<a id="schemacustomer_token_creation_response"></a>
<a id="schema_customer_token_creation_response"></a>
<a id="tocScustomer_token_creation_response"></a>
<a id="tocscustomer_token_creation_response"></a>

```json
{
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male"
  },
  "payment_method_reference": "0b1d9815-165e-42e2-8867-35bc03789e00",
  "redirect_url": "https://credit.klarna.com/v1/sessions/0b1d9815-165e-42e2-8867-35bc03789e00/redirect",
  "token_id": "0b1d9815-165e-42e2-8867-35bc03789e00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_address|[address](#schemaaddress)|false|none|none|
|customer|[customer_read_create_token](#schemacustomer_read_create_token)|false|none|none|
|payment_method_reference|string|false|none|Used to connect customers with payment method when it is present.|
|redirect_url|string|false|none|URL to redirect the customer to after placing the order. This is a Klarna URL where Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience.|
|token_id|string|true|none|Generated customer token. This token will be used to create a new order for the subscription using the Create a New order using token API.|

<h2 id="tocS_merchant_session">merchant_session</h2>
<!-- backwards compatibility -->
<a id="schemamerchant_session"></a>
<a id="schema_merchant_session"></a>
<a id="tocSmerchant_session"></a>
<a id="tocsmerchant_session"></a>

```json
{
  "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw",
  "payment_method_categories": [
    {
      "asset_urls": {
        "descriptive": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg",
        "standard": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
      },
      "identifier": "klarna",
      "name": "Pay with Klarna"
    }
  ],
  "session_id": "0b1d9815-165e-42e2-8867-35bc03789e00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_token|string|true|none|Client token to be passed to the JS client while initializing the JS SDK in the next step.|
|payment_method_categories|[[payment_method_category](#schemapayment_method_category)]|false|none|Available payment method categories for this particular session|
|session_id|string|true|none|ID of the created session. Please use this ID to share with Klarna for identifying any issues during integration.|

<h2 id="tocS_merchant_urls">merchant_urls</h2>
<!-- backwards compatibility -->
<a id="schemamerchant_urls"></a>
<a id="schema_merchant_urls"></a>
<a id="tocSmerchant_urls"></a>
<a id="tocsmerchant_urls"></a>

```json
{
  "authorization": "https://www.example-url.com/authorization",
  "confirmation": "https://www.example-url.com/confirmation",
  "notification": "https://www.example-url.com/notification",
  "push": "https://www.example-url.com/push"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorization|string|false|none|URL for receiving the authorization token when payment is completed. Used for Authorization Callback.|
|confirmation|string|false|none|URL of the merchant confirmation page. The consumer will be redirected back to the confirmation page if the consumer is sent to the redirect URL after placing the order. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL(max 2000 characters).|
|notification|string|false|none|URL for notifications on pending orders. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters).|
|push|string|false|none|URL that will be requested when an order is completed. Should be different than checkout and confirmation URLs. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters).|

<h2 id="tocS_options">options</h2>
<!-- backwards compatibility -->
<a id="schemaoptions"></a>
<a id="schema_options"></a>
<a id="tocSoptions"></a>
<a id="tocsoptions"></a>

```json
{
  "color_border": "#FF9900",
  "color_border_selected": "#FF9900",
  "color_details": "#FF9900",
  "color_text": "#FF9900",
  "radius_border": "5px"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color_border|string|false|none|Color for the border of elements within the iFrame. Value should be a CSS hex color, e.g. "#FF9900"|
|color_border_selected|string|false|none|Color for the border of elements within the iFrame when selected by the customer. Value should be a CSS hex color, e.g. "#FF9900"|
|color_details|string|false|none|Color for the bullet points within the iFrame. Value should be a CSS hex color, e.g. "#FF9900"|
|color_text|string|false|none|Color for the texts within the iFrame. Value should be a CSS hex color, e.g. "#FF9900"|
|radius_border|string|false|none|Radius for the border of elements within the iFrame.|

<h2 id="tocS_order">order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "authorized_payment_method": {
    "number_of_days": 0,
    "number_of_installments": 0,
    "type": "invoice"
  },
  "fraud_status": "string",
  "order_id": "string",
  "redirect_url": "https://credit.klarna.com/v1/sessions/0b1d9815-165e-42e2-8867-35bc03789e00/redirect"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorized_payment_method|[authorized_payment_method](#schemaauthorized_payment_method)|false|none|none|
|fraud_status|string|false|none|Fraud status for the order. Either ACCEPTED or PENDING. If ACCEPTED, the order could be captured. If PENDING, please wait till you receive the notification from Klarna in the notification URL that the order has been approved. You can find additional information here.|
|order_id|string|true|none|Unique order ID of the transaction. This ID will be used for all order management processes.|
|redirect_url|string|false|none|URL to redirect the customer to after placing the order. This is a Klarna URL to which the merchant should redirect the customer to. Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience. It is a spontaneous step and does not harm the customer’s experience.|

<h2 id="tocS_order_line">order_line</h2>
<!-- backwards compatibility -->
<a id="schemaorder_line"></a>
<a id="schema_order_line"></a>
<a id="tocSorder_line"></a>
<a id="tocsorder_line"></a>

```json
{
  "image_url": "https://www.exampleobjects.com/logo.png",
  "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
  "name": "Running shoe",
  "product_identifiers": {
    "brand": "shoe-brand",
    "category_path": "Shoes > Running",
    "color": "white",
    "global_trade_item_number": "4912345678904",
    "manufacturer_part_number": "AD6654412-334.22",
    "size": "small"
  },
  "product_url": "https://.../AD6654412.html",
  "quantity": 1,
  "quantity_unit": "pcs",
  "reference": "AD6654412",
  "subscription": {
    "interval": "DAY",
    "interval_count": 1,
    "name": "string"
  },
  "tax_rate": 1900,
  "total_amount": 2500,
  "total_discount_amount": 500,
  "total_tax_amount": 475,
  "type": "physical",
  "unit_price": 2500
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image_url|string|false|none|URL to an image that can be later embedded in communications between Klarna and the customer. (max 1024 characters).<br> A minimum of 250x250 px resolution is recommended for the image to look good in the Klarna app, and below 50x50 px won't even show. We recommend using a good sized image (650x650 px or more), however the file size must not exceed 12MB.|
|merchant_data|string|false|none|Used for storing merchant's internal order number or other reference. Pass through field. (max 1024 characters)|
|name|string|true|none|Descriptive name of the order line item.|
|product_identifiers|[product_identifiers](#schemaproduct_identifiers)|false|none|none|
|product_url|string|false|none|URL to the product in the merchant’s webshop that can be later used in communications between Klarna and the customer. (max 1024 characters)|
|quantity|integer(int64)|true|none|Quantity of the order line item. Must be a non-negative number.|
|quantity_unit|string|false|none|Unit used to describe the quantity, e.g. kg, pcs, etc. If defined the value has to be 1-8 characters.|
|reference|string|false|none|Client facing article number, SKU or similar. Max length is 256 characters.|
|subscription|[subscription](#schemasubscription)|false|none|none|
|tax_rate|integer(int64)|false|none|Tax rate of the order line. Non-negative value. The percentage value is represented with two implicit decimals. I.e 1900 = 19%.|
|total_amount|integer(int64)|true|none|Total amount of the order line. Must be defined as minor units. Includes tax and discount. Eg: 2500=25 euros<br>Value = (quantity x unit_price) - total_discount_amount. <br>(max value: 100000000)|
|total_discount_amount|integer(int64)|false|none|Non-negative minor units. Includes tax. Eg: 500=5 euros|
|total_tax_amount|integer(int64)|false|none|Total tax amount of the order line. Must be within ±1 of total_amount - total_amount 10000 / (10000 + tax_rate). Negative when type is discount.|
|type|string|false|none|Type of the order line item. The possible values are:<br><br>physical<br>discount<br>shipping_fee<br>sales_tax<br>digital<br>gift_card<br>store_credit<br>surcharge|
|unit_price|integer(int64)|true|none|Price for a single unit of the order line. Must be defined as minor units. Includes tax, excludes discount. (max value: 100000000)|

<h2 id="tocS_payment_method_category">payment_method_category</h2>
<!-- backwards compatibility -->
<a id="schemapayment_method_category"></a>
<a id="schema_payment_method_category"></a>
<a id="tocSpayment_method_category"></a>
<a id="tocspayment_method_category"></a>

```json
{
  "asset_urls": {
    "descriptive": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg",
    "standard": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
  },
  "identifier": "klarna",
  "name": "Pay with Klarna"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_urls|[asset_urls](#schemaasset_urls)|false|none|none|
|identifier|string|false|none|ID of the payment method category to be used while loading the widget later.<br>The possible values are:<ul><li>klarna</li><li>pay_later</li><li>pay_now</li><li>pay_over_time</li><li>direct_bank_transfer</li><li>direct_debit</li></ul>|
|name|string|false|none|Name of the payment method category. These names are dynamic depending on what payment method is in the category. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated, or any updates of included payment methods by you.|

<h2 id="tocS_product_identifiers">product_identifiers</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_identifiers"></a>
<a id="schema_product_identifiers"></a>
<a id="tocSproduct_identifiers"></a>
<a id="tocsproduct_identifiers"></a>

```json
{
  "brand": "shoe-brand",
  "category_path": "Shoes > Running",
  "color": "white",
  "global_trade_item_number": "4912345678904",
  "manufacturer_part_number": "AD6654412-334.22",
  "size": "small"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand|string|false|none|The product's brand name as generally recognized by consumers. If no brand is available for a product, do not supply any value.|
|category_path|string|false|none|The product's category path as used in the merchant's webshop. Include the full and most detailed category and separate the segments with ' > '|
|color|string|false|none|Color to be shown to the end customer (max 64 characters).|
|global_trade_item_number|string|false|none|The product's Global Trade Item Number (GTIN). Common types of GTIN are EAN, ISBN or UPC. Exclude dashes and spaces, where possible|
|manufacturer_part_number|string|false|none|The product's Manufacturer Part Number (MPN), which - together with the brand - uniquely identifies a product. Only submit MPNs assigned by a manufacturer and use the most specific MPN possible|
|size|string|false|none|Size to be shown to the end customer (max 64 characters).|

<h2 id="tocS_session">session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "acquiring_channel": "ECOMMERCE",
  "attachment": {
    "body": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
    "content_type": "application/vnd.klarna.internal.emd-v2+json"
  },
  "authorization_token": "string",
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw",
  "custom_payment_method_ids": [
    "string"
  ],
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male",
    "last_four_ssn": "string",
    "national_identification_number": "string",
    "organization_entity_type": "LIMITED_COMPANY",
    "organization_registration_id": "string",
    "title": "Mr.",
    "type": "organization",
    "vat_id": "string"
  },
  "design": "string",
  "expires_at": "2038-01-19T03:14:07.000Z",
  "intent": "buy",
  "locale": "en-GB",
  "merchant_data": "{\"order_specific\":[{\"substore\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
  "merchant_reference1": "ON4711",
  "merchant_reference2": "hdt53h-zdgg6-hdaff2",
  "merchant_urls": {
    "authorization": "https://www.example-url.com/authorization",
    "confirmation": "https://www.example-url.com/confirmation",
    "notification": "https://www.example-url.com/notification",
    "push": "https://www.example-url.com/push"
  },
  "options": {
    "color_border": "#FF9900",
    "color_border_selected": "#FF9900",
    "color_details": "#FF9900",
    "color_text": "#FF9900",
    "radius_border": "5px"
  },
  "order_amount": 2500,
  "order_lines": [
    {
      "image_url": "https://www.exampleobjects.com/logo.png",
      "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
      "name": "Running shoe",
      "product_identifiers": {
        "brand": "shoe-brand",
        "category_path": "Shoes > Running",
        "color": "white",
        "global_trade_item_number": "4912345678904",
        "manufacturer_part_number": "AD6654412-334.22",
        "size": "small"
      },
      "product_url": "https://.../AD6654412.html",
      "quantity": 1,
      "quantity_unit": "pcs",
      "reference": "AD6654412",
      "subscription": {
        "interval": "DAY",
        "interval_count": 1,
        "name": "string"
      },
      "tax_rate": 1900,
      "total_amount": 2500,
      "total_discount_amount": 500,
      "total_tax_amount": 475,
      "type": "physical",
      "unit_price": 2500
    }
  ],
  "order_tax_amount": 475,
  "payment_method_categories": [
    {
      "asset_urls": {
        "descriptive": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg",
        "standard": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
      },
      "identifier": "klarna",
      "name": "Pay with Klarna"
    }
  ],
  "purchase_country": "GB",
  "purchase_currency": "GBP",
  "shipping_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "status": "complete"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquiring_channel|string|false|none|The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.|
|attachment|[attachment](#schemaattachment)|false|none|none|
|authorization_token|string|false|read-only|Authorization token.|
|billing_address|[address](#schemaaddress)|false|none|none|
|client_token|string|false|read-only|Token to be passed to the JS client|
|custom_payment_method_ids|[string]|false|none|Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. |
|customer|[customer](#schemacustomer)|false|none|none|
|design|string|false|none|Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.|
|expires_at|string(date-time)|false|read-only|Session expiration date|
|intent|string|false|none|Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.|
|locale|string|false|none|Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.<br>The following values are applicable:<br><br>AT: "de-AT", "de-DE", "en-DE"<br>BE: "be-BE", "nl-BE", "fr-BE", "en-BE"<br>CH: "it-CH", "de-CH", "fr-CH", "en-CH"<br>DE: "de-DE", "de-AT", "en-DE"<br>DK: "da-DK", "en-DK"<br>ES: "es-ES", "ca-ES", "en-ES"<br>FI: "fi-FI", "sv-FI", "en-FI"<br>GB: "en-GB"<br>IT: "it-IT", "en-IT"<br>NL: "nl-NL", "en-NL"<br>NO: "nb-NO", "en-NO"<br>PL: "pl-PL", "en-PL"<br>SE: "sv-SE", "en-SE"<br>US: "en-US".|
|merchant_data|string|false|none|Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)|
|merchant_reference1|string|false|none|Used for storing merchant's internal order number or other reference.|
|merchant_reference2|string|false|none|Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).|
|merchant_urls|[merchant_urls](#schemamerchant_urls)|false|none|none|
|options|[options](#schemaoptions)|false|none|none|
|order_amount|integer(int64)|false|none|Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|order_lines|[[order_line](#schemaorder_line)]|false|none|The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.|
|order_tax_amount|integer(int64)|false|none|Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|payment_method_categories|[[payment_method_category](#schemapayment_method_category)]|false|read-only|Available payment method categories|
|purchase_country|string|false|none|The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.|
|purchase_currency|string|false|none|The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.|
|shipping_address|[address](#schemaaddress)|false|none|none|
|status|string|false|read-only|The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.|

#### Enumerated Values

|Property|Value|
|---|---|
|acquiring_channel|ECOMMERCE|
|acquiring_channel|IN_STORE|
|acquiring_channel|TELESALES|
|intent|buy|
|intent|tokenize|
|intent|buy_and_tokenize|
|status|complete|
|status|incomplete|

<h2 id="tocS_session_create">session_create</h2>
<!-- backwards compatibility -->
<a id="schemasession_create"></a>
<a id="schema_session_create"></a>
<a id="tocSsession_create"></a>
<a id="tocssession_create"></a>

```json
{
  "acquiring_channel": "ECOMMERCE",
  "attachment": {
    "body": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
    "content_type": "application/vnd.klarna.internal.emd-v2+json"
  },
  "authorization_token": "string",
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw",
  "custom_payment_method_ids": [
    "string"
  ],
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male",
    "last_four_ssn": "string",
    "national_identification_number": "string",
    "organization_entity_type": "LIMITED_COMPANY",
    "organization_registration_id": "string",
    "title": "Mr.",
    "type": "organization",
    "vat_id": "string"
  },
  "design": "string",
  "expires_at": "2038-01-19T03:14:07.000Z",
  "intent": "buy",
  "locale": "en-US",
  "merchant_data": "{\"order_specific\":[{\"substore\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
  "merchant_reference1": "ON4711",
  "merchant_reference2": "hdt53h-zdgg6-hdaff2",
  "merchant_urls": {
    "authorization": "https://www.example-url.com/authorization",
    "confirmation": "https://www.example-url.com/confirmation",
    "notification": "https://www.example-url.com/notification",
    "push": "https://www.example-url.com/push"
  },
  "options": {
    "color_border": "#FF9900",
    "color_border_selected": "#FF9900",
    "color_details": "#FF9900",
    "color_text": "#FF9900",
    "radius_border": "5px"
  },
  "order_amount": 2500,
  "order_lines": [
    {
      "image_url": "https://www.exampleobjects.com/logo.png",
      "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
      "name": "Running shoe",
      "product_identifiers": {
        "brand": "shoe-brand",
        "category_path": "Shoes > Running",
        "color": "white",
        "global_trade_item_number": "4912345678904",
        "manufacturer_part_number": "AD6654412-334.22",
        "size": "small"
      },
      "product_url": "https://.../AD6654412.html",
      "quantity": 1,
      "quantity_unit": "pcs",
      "reference": "AD6654412",
      "subscription": {
        "interval": "DAY",
        "interval_count": 1,
        "name": "string"
      },
      "tax_rate": 1900,
      "total_amount": 2500,
      "total_discount_amount": 500,
      "total_tax_amount": 475,
      "type": "physical",
      "unit_price": 2500
    }
  ],
  "order_tax_amount": 475,
  "payment_method_categories": [
    {
      "asset_urls": {
        "descriptive": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg",
        "standard": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
      },
      "identifier": "klarna",
      "name": "Pay with Klarna"
    }
  ],
  "purchase_country": "GB",
  "purchase_currency": "GBP",
  "shipping_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "status": "complete"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquiring_channel|string|false|none|The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.|
|attachment|[attachment](#schemaattachment)|false|none|none|
|authorization_token|string|false|read-only|Authorization token.|
|billing_address|[address](#schemaaddress)|false|none|none|
|client_token|string|false|read-only|Token to be passed to the JS client|
|custom_payment_method_ids|[string]|false|none|Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. |
|customer|[customer](#schemacustomer)|false|none|none|
|design|string|false|none|Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.|
|expires_at|string(date-time)|false|read-only|Session expiration date|
|intent|string|false|none|Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.|
|locale|string|false|none|Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.<br>The following values are applicable:<br><br>AT: "de-AT", "de-DE", "en-DE"<br>BE: "be-BE", "nl-BE", "fr-BE", "en-BE"<br>CH: "it-CH", "de-CH", "fr-CH", "en-CH"<br>DE: "de-DE", "de-AT", "en-DE"<br>DK: "da-DK", "en-DK"<br>ES: "es-ES", "ca-ES", "en-ES"<br>FI: "fi-FI", "sv-FI", "en-FI"<br>GB: "en-GB"<br>IT: "it-IT", "en-IT"<br>NL: "nl-NL", "en-NL"<br>NO: "nb-NO", "en-NO"<br>PL: "pl-PL", "en-PL"<br>SE: "sv-SE", "en-SE"<br>US: "en-US". Default value is "en-US".|
|merchant_data|string|false|none|Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)|
|merchant_reference1|string|false|none|Used for storing merchant's internal order number or other reference.|
|merchant_reference2|string|false|none|Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).|
|merchant_urls|[merchant_urls](#schemamerchant_urls)|false|none|none|
|options|[options](#schemaoptions)|false|none|none|
|order_amount|integer(int64)|true|none|Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|order_lines|[[order_line](#schemaorder_line)]|true|none|The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.|
|order_tax_amount|integer(int64)|false|none|Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|payment_method_categories|[[payment_method_category](#schemapayment_method_category)]|false|read-only|Available payment method categories|
|purchase_country|string|true|none|The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.|
|purchase_currency|string|true|none|The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.|
|shipping_address|[address](#schemaaddress)|false|none|none|
|status|string|false|read-only|The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.|

#### Enumerated Values

|Property|Value|
|---|---|
|acquiring_channel|ECOMMERCE|
|acquiring_channel|IN_STORE|
|acquiring_channel|TELESALES|
|intent|buy|
|intent|tokenize|
|intent|buy_and_tokenize|
|status|complete|
|status|incomplete|

<h2 id="tocS_session_read">session_read</h2>
<!-- backwards compatibility -->
<a id="schemasession_read"></a>
<a id="schema_session_read"></a>
<a id="tocSsession_read"></a>
<a id="tocssession_read"></a>

```json
{
  "acquiring_channel": "ECOMMERCE",
  "attachment": {
    "body": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
    "content_type": "application/vnd.klarna.internal.emd-v2+json"
  },
  "authorization_token": "string",
  "billing_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw",
  "custom_payment_method_ids": [
    "string"
  ],
  "customer": {
    "date_of_birth": "1978-12-31",
    "gender": "male",
    "organization_entity_type": "LIMITED_COMPANY",
    "organization_registration_id": "string",
    "title": "Mr.",
    "type": "organization",
    "vat_id": "string"
  },
  "design": "string",
  "expires_at": "2038-01-19T03:14:07.000Z",
  "intent": "buy",
  "locale": "en-GB",
  "merchant_data": "{\"order_specific\":[{\"substore\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
  "merchant_reference1": "ON4711",
  "merchant_reference2": "hdt53h-zdgg6-hdaff2",
  "merchant_urls": {
    "authorization": "https://www.example-url.com/authorization",
    "confirmation": "https://www.example-url.com/confirmation",
    "notification": "https://www.example-url.com/notification",
    "push": "https://www.example-url.com/push"
  },
  "options": {
    "color_border": "#FF9900",
    "color_border_selected": "#FF9900",
    "color_details": "#FF9900",
    "color_text": "#FF9900",
    "radius_border": "5px"
  },
  "order_amount": 2500,
  "order_lines": [
    {
      "image_url": "https://www.exampleobjects.com/logo.png",
      "merchant_data": "{\"customer_account_info\":[{\"unique_account_identifier\":\"test@gmail.com\",\"account_registration_date\":\"2017-02-13T10:49:20Z\",\"account_last_modified\":\"2019-03-13T11:45:27Z\"}]}",
      "name": "Running shoe",
      "product_identifiers": {
        "brand": "shoe-brand",
        "category_path": "Shoes > Running",
        "color": "white",
        "global_trade_item_number": "4912345678904",
        "manufacturer_part_number": "AD6654412-334.22",
        "size": "small"
      },
      "product_url": "https://.../AD6654412.html",
      "quantity": 1,
      "quantity_unit": "pcs",
      "reference": "AD6654412",
      "subscription": {
        "interval": "DAY",
        "interval_count": 1,
        "name": "string"
      },
      "tax_rate": 1900,
      "total_amount": 2500,
      "total_discount_amount": 500,
      "total_tax_amount": 475,
      "type": "physical",
      "unit_price": 2500
    }
  ],
  "order_tax_amount": 475,
  "payment_method_categories": [
    {
      "asset_urls": {
        "descriptive": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg",
        "standard": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
      },
      "identifier": "klarna",
      "name": "Pay with Klarna"
    }
  ],
  "purchase_country": "GB",
  "purchase_currency": "GBP",
  "shipping_address": {
    "attention": "Attn",
    "city": "London",
    "country": "GB",
    "email": "test.sam@test.com",
    "family_name": "Andersson",
    "given_name": "Adam",
    "organization_name": "string",
    "phone": "+44795465131",
    "postal_code": "W1G 0PW",
    "region": "OH",
    "street_address": "33 Cavendish Square",
    "street_address2": "Floor 22 / Flat 2",
    "title": "Mr."
  },
  "status": "complete"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquiring_channel|string|false|none|The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.|
|attachment|[attachment](#schemaattachment)|false|none|none|
|authorization_token|string|false|read-only|Authorization token.|
|billing_address|[address](#schemaaddress)|false|none|none|
|client_token|string|false|read-only|Token to be passed to the JS client|
|custom_payment_method_ids|[string]|false|none|Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. |
|customer|[customer_read](#schemacustomer_read)|false|none|none|
|design|string|false|none|Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.|
|expires_at|string(date-time)|false|read-only|Session expiration date|
|intent|string|false|none|Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.|
|locale|string|false|none|Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.<br>The following values are applicable:<br><br>AT: "de-AT", "de-DE", "en-DE"<br>BE: "be-BE", "nl-BE", "fr-BE", "en-BE"<br>CH: "it-CH", "de-CH", "fr-CH", "en-CH"<br>DE: "de-DE", "de-AT", "en-DE"<br>DK: "da-DK", "en-DK"<br>ES: "es-ES", "ca-ES", "en-ES"<br>FI: "fi-FI", "sv-FI", "en-FI"<br>GB: "en-GB"<br>IT: "it-IT", "en-IT"<br>NL: "nl-NL", "en-NL"<br>NO: "nb-NO", "en-NO"<br>PL: "pl-PL", "en-PL"<br>SE: "sv-SE", "en-SE"<br>US: "en-US".|
|merchant_data|string|false|none|Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)|
|merchant_reference1|string|false|none|Used for storing merchant's internal order number or other reference.|
|merchant_reference2|string|false|none|Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).|
|merchant_urls|[merchant_urls](#schemamerchant_urls)|false|none|none|
|options|[options](#schemaoptions)|false|none|none|
|order_amount|integer(int64)|false|none|Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|order_lines|[[order_line](#schemaorder_line)]|false|none|The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.|
|order_tax_amount|integer(int64)|false|none|Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.|
|payment_method_categories|[[payment_method_category](#schemapayment_method_category)]|false|read-only|Available payment method categories|
|purchase_country|string|false|none|The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.|
|purchase_currency|string|false|none|The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.|
|shipping_address|[address](#schemaaddress)|false|none|none|
|status|string|false|read-only|The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.|

#### Enumerated Values

|Property|Value|
|---|---|
|acquiring_channel|ECOMMERCE|
|acquiring_channel|IN_STORE|
|acquiring_channel|TELESALES|
|intent|buy|
|intent|tokenize|
|intent|buy_and_tokenize|
|status|complete|
|status|incomplete|

<h2 id="tocS_subscription">subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "interval": "DAY",
  "interval_count": 1,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval|string|true|none|The cadence unit for this.|
|interval_count|integer|true|none|The number of intervals|
|name|string|true|none|The name of the subscription product|

#### Enumerated Values

|Property|Value|
|---|---|
|interval|DAY|
|interval|WEEK|
|interval|MONTH|
|interval|YEAR|
