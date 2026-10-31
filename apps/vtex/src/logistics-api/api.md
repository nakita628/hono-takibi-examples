<h1 id="logistics-api">Logistics API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.



>Check the [Fulfillment onboarding guide](https://developers.vtex.com/docs/guides/fulfillment). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about fulfillment and is organized by focusing on the developer's journey.

Logistics or fulfillment is the module responsible for shipping calculation and inventory management. 

The variable `{{environment}}` can be filled with `vtexcommercestable` or `vtexcommercebeta`, depending on the environment you want to test.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server URL.

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="logistics-api-scheduled-delivery">Scheduled Delivery</h1>

## Search capacity reservations in time range

> Code samples

```bash
curl 'https://example.com/api/logistics-capacity/resources/carrier@%7B%7BcapacityType%7D%7D@%7B%7BshippingPolicyId%7D%7D/time-frames?rangeStart=yyyy-mm-dd&rangeEnd=yyyy-mm-dd' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics-capacity/resources/carrier@{capacityType}@{shippingPolicyId}/time-frames`

Get information on all capacity reservations made to scheduled delivery windows in a given time range.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

> Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.

<h3 id="search-capacity-reservations-in-time-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|capacityType|path|string|true|How the delivery capacity is measured as defined in the shipping policy. Capacity can be measured by maximum number of orders (`"orders_quantity"`) or SKUs (`"skus_quantity"`).|
|shippingPolicyId|path|string|true|ID of shipping policy to search.|
|rangeStart|query|string|true|Starting date of time range|
|rangeEnd|query|string|true|End date of time range.|

> Example responses

> 200 Response

```json
{
  "endDate": "2021-05-03T17:00:59+00:00",
  "id": "2021-05-03F1300T1700",
  "log": [
    {
      "what": "Unblocked",
      "when": "2021-04-29T15:56:09.1732357+00:00",
      "who": "",
      "why": "Reservation `reservation-01` with 2.0 units."
    },
    {
      "what": "Unblocked",
      "when": "2021-04-29T17:29:11.9250354+00:00",
      "who": "",
      "why": "Reservation `reserva-02` with 4.0 units."
    }
  ],
  "ownMaxCapacity": 10,
  "reservations": [
    {
      "id": "reservation-01",
      "value": 4
    },
    {
      "id": "reserva-02",
      "value": 2
    }
  ],
  "reservedValue": 6,
  "resourceId": "carrier@skus_quantity@143e313",
  "resourceMaxCapacity": 10,
  "startDate": "2021-05-03T13:00:00+00:00"
}
```

<h3 id="search-capacity-reservations-in-time-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get capacity reservation usage by window

> Code samples

```bash
curl https://example.com/api/logistics-capacity/resources/carrier@%7B%7BcapacityType%7D%7D@%7B%7BshippingPolicyId%7D%7D/time-frames/yyyy-mm-ddFhhmmThhmm \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics-capacity/resources/carrier@{capacityType}@{shippingPolicyId}/time-frames/{windowDay}F{windowStartTime}T{windowEndTime}`

Retrieves capacity usage of a specific scheduled delivery reservation window.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

> Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.

<h3 id="get-capacity-reservation-usage-by-window-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|capacityType|path|string|true|How the delivery capacity is measured as defined in the shipping policy. Capacity can be measured by maximum number of orders (`"orders_quantity"`) or SKUs (`"skus_quantity"`).|
|shippingPolicyId|path|string|true|ID of shipping policy to search.|
|windowDay|path|string|true|Day of the specific scheduled delivery window to be consulted for reservations.|
|windowStartTime|path|string|true|Start time of specific scheduled delivery window to be consulted for reservations.|
|windowEndTime|path|string|true|End time of specific scheduled delivery window to be consulted for reservations.|

> Example responses

> 200 Response

```json
{
  "endDate": "2021-05-03T17:00:59+00:00",
  "id": "2021-05-03F1300T1700",
  "log": [
    {
      "what": "Unblocked",
      "when": "2021-04-29T15:56:09.1732357+00:00",
      "who": "",
      "why": "Reservation `reservation-01` with 4 units."
    }
  ],
  "ownMaxCapacity": 10,
  "reservations": [
    {
      "id": "reservation-01",
      "value": 4
    }
  ],
  "reservedValue": 4,
  "resourceId": "carrier@skus_quantity@143e313",
  "resourceMaxCapacity": 10,
  "startDate": "2021-05-03T13:00:00+00:00"
}
```

<h3 id="get-capacity-reservation-usage-by-window-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Add blocked delivery windows

<a id="opIdAddBlockedDeliveryWindows"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/carriers/string/adddayofweekblocked \
  -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '"\"2016-08-09T08:00:00\""'
```

`POST /api/logistics/pvt/configuration/carriers/{carrierId}/adddayofweekblocked`

Adds blocked delivery windows for your store's shipping policies.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

> Body parameter

```json
"\"2016-08-09T08:00:00\""
```

<h3 id="add-blocked-delivery-windows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|carrierId|path|string|true|none|
|body|body|string|true|none|

<h3 id="add-blocked-delivery-windows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve blocked delivery windows

<a id="opIdRetrieveBlockedDeliveryWindows"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/carriers/string/getdayofweekblocked \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/carriers/{carrierId}/getdayofweekblocked`

Lists all blocked delivery windows of your store's shipping policies, searching by carrier ID.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

<h3 id="retrieve-blocked-delivery-windows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|carrierId|path|string|true|none|

<h3 id="retrieve-blocked-delivery-windows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Remove blocked delivery windows

<a id="opIdRemoveBlockedDeliveryWindows"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/carriers/string/removedayofweekblocked \
  -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '"\"2016-08-09T08:00:00\""'
```

`POST /api/logistics/pvt/configuration/carriers/{carrierId}/removedayofweekblocked`

Removes the blocked delivery windows set to your store's shipping policies.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

> Body parameter

```json
"\"2016-08-09T08:00:00\""
```

<h3 id="remove-blocked-delivery-windows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|carrierId|path|string|true|none|
|body|body|string|true|none|

<h3 id="remove-blocked-delivery-windows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="logistics-api-shipping-policies">Shipping Policies</h1>

## List shipping policies

> Code samples

```bash
curl 'https://example.com/api/logistics/pvt/shipping-policies?page=page&perPage=perPage' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/shipping-policies`

This endpoint lists existing shipping policies from carriers in your store.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

<h3 id="list-shipping-policies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|
|page|query|string|true|Desired number of pages to retrieve information from your Shipping Policies.|
|perPage|query|string|true|Desired number of items per page, to retrieve information from your Shipping Policies.|

<h3 id="list-shipping-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create shipping policy

> Code samples

```bash
curl https://example.com/api/logistics/pvt/shipping-policies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "businessHourSettings": {
      "carrierBusinessHours": [
        {
          "closingTime": "18:59:59",
          "dayOfWeek": 0,
          "openingTime": "09:00:00"
        }
      ],
      "isOpenOutsideBusinessHours": true
    },
    "carrierSchedule": [
      {
        "dayOfWeek": 0,
        "timeLimit": "time_limit"
      }
    ],
    "cubicWeightSettings": {
      "minimunAcceptableVolumetricWeight": 5,
      "volumetricFactor": 3
    },
    "deliveryScheduleSettings": {
      "dayOfWeekForDelivery": [
        {
          "dayOfWeek": 2,
          "deliveryRanges": [
            {
              "endTime": "12:00:00",
              "listPrice": 5,
              "startTime": "08:00:00"
            },
            {
              "endTime": "18:00:00",
              "listPrice": 10,
              "startTime": "12:01:00"
            }
          ]
        }
      ],
      "maxRangeDelivery": 5,
      "useDeliverySchedule": true
    },
    "id": "123",
    "isActive": false,
    "maxDimension": {
      "largestMeasure": 15,
      "maxMeasureSum": 25
    },
    "maximumValueAceptable": 0,
    "minimumValueAceptable": 0,
    "modalSettings": {
      "modals": [
        "Modal1"
      ],
      "useOnlyItemsWithDefinedModal": false
    },
    "name": "Normal",
    "numberOfItemsPerShipment": 5,
    "pickupPointsSettings": {
      "pickupPointIds": [
        "null"
      ],
      "pickupPointTags": [
        "null"
      ],
      "sellers": [
        "cosmetics2"
      ]
    },
    "shippingMethod": "Normal",
    "weekendAndHolidays": {
      "holiday": false,
      "saturday": false,
      "sunday": false
    }
  }'
```

`POST /api/logistics/pvt/shipping-policies`

This endpoint creates new shipping policies from carriers in your store.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

> Body parameter

```json
{
  "businessHourSettings": {
    "carrierBusinessHours": [
      {
        "closingTime": "18:59:59",
        "dayOfWeek": 0,
        "openingTime": "09:00:00"
      }
    ],
    "isOpenOutsideBusinessHours": true
  },
  "carrierSchedule": [
    {
      "dayOfWeek": 0,
      "timeLimit": "time_limit"
    }
  ],
  "cubicWeightSettings": {
    "minimunAcceptableVolumetricWeight": 5,
    "volumetricFactor": 3
  },
  "deliveryScheduleSettings": {
    "dayOfWeekForDelivery": [
      {
        "dayOfWeek": 2,
        "deliveryRanges": [
          {
            "endTime": "12:00:00",
            "listPrice": 5,
            "startTime": "08:00:00"
          },
          {
            "endTime": "18:00:00",
            "listPrice": 10,
            "startTime": "12:01:00"
          }
        ]
      }
    ],
    "maxRangeDelivery": 5,
    "useDeliverySchedule": true
  },
  "id": "123",
  "isActive": false,
  "maxDimension": {
    "largestMeasure": 15,
    "maxMeasureSum": 25
  },
  "maximumValueAceptable": 0,
  "minimumValueAceptable": 0,
  "modalSettings": {
    "modals": [
      "Modal1"
    ],
    "useOnlyItemsWithDefinedModal": false
  },
  "name": "Normal",
  "numberOfItemsPerShipment": 5,
  "pickupPointsSettings": {
    "pickupPointIds": [
      "null"
    ],
    "pickupPointTags": [
      "null"
    ],
    "sellers": [
      "cosmetics2"
    ]
  },
  "shippingMethod": "Normal",
  "weekendAndHolidays": {
    "holiday": false,
    "saturday": false,
    "sunday": false
  }
}
```

<h3 id="create-shipping-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|
|body|body|object|false|none|
|» businessHourSettings|body|object|true|Business hour configuration.|
|» » carrierBusinessHours|body|[object]|true|Array containing objects with business hour configurations.|
|» » » closingTime|body|string|true|Closing time.|
|» » » dayOfWeek|body|integer|true|Day of the week, from `0` (sunday) to `6` (saturday).|
|» » » openingTime|body|string|true|Opening time.|
|» » isOpenOutsideBusinessHours|body|boolean|true|Select whether the shipping policy allows deliveries outside business hours.|
|» carrierSchedule|body|[object]|false|Schedule sent by the carrier, to configure Shipping policy|
|» » dayOfWeek|body|integer|false|Day of the week, from `0` (sunday) to `6` (saturday).|
|» » timeLimit|body|string|false|Time limit.|
|» cubicWeightSettings|body|object|true|Measure that accounts package's volume, and not only weight.|
|» » minimunAcceptableVolumetricWeight|body|number|true|none|
|» » volumetricFactor|body|number|true|Factor that will be used on the cubic weight calculation.|
|» deliveryScheduleSettings|body|object|true|Settings for the Scheduled Delivery feature.|
|» » dayOfWeekForDelivery|body|[object]|true|Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.|
|» » » dayOfWeek|body|integer|true|Day of the week, from `0` (sunday) to `6` (saturday).|
|» » » deliveryRanges|body|[object]|true|Reservation windows for scheduled delivery.|
|» » » » deliveryCapacity|body|[object]|false|Sets maximum delivery capacity for a given reservation window for scheduled delivery.|
|» » » » » capacityType|body|string|true|Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).|
|» » » » » maxValue|body|number|true|Maximum number of orders or SKUs that the store is capable of fulfilling.|
|» » » » endTime|body|string|true|End time for day of the week.|
|» » » » listPrice|body|number|true|List price for day of the week.|
|» » » » startTime|body|string|true|Start time for day of the week.|
|» » maxRangeDelivery|body|number|true|Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.|
|» » useDeliverySchedule|body|boolean|true|Select the Scheduled Delivery configuration.|
|» id|body|string|true|ID of the shipping policy.|
|» isActive|body|boolean|true|Indicates whether shipping policy is active or not.|
|» maxDimension|body|object|true|Object containing attributes of maximum dimension permitted by the shipping policy (carrier).|
|» » largestMeasure|body|number|true|Largest measure of the package.|
|» » maxMeasureSum|body|number|true|Sum of all maximum measures of the package.|
|» maximumValueAceptable|body|number|true|Maximum value accepted by the carrier, to realize the shipping.|
|» minimumValueAceptable|body|number|true|Minimum value accepted by the carrier, to realize the shipping.|
|» modalSettings|body|object|true|Configurations for the [modal](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125), which is the attachement of a specific product to a carrier specialized in delivering that type of product.|
|» » modals|body|[object]|true|Type of special freight.|
|» » useOnlyItemsWithDefinedModal|body|boolean|true|When set as `true`, the modal's configurations will apply only for items with a defined modal.|
|» name|body|string|true|Name of the shipping policy.|
|» numberOfItemsPerShipment|body|integer|true|Capacity of your store's logistics of shipment, determines number of items permitted per shipment.|
|» pickupPointsSettings|body|object|true|Configuration for Pickup Points.|
|» » pickupPointIds|body|[object]|true|Insert the IDs for pickup points previously configured in your store.|
|» » pickupPointTags|body|[object]|true|Insert the tags for pickup points previously configured in your store.|
|» » sellers|body|[object]|true|Sellers that will be associated with the [pickup points](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) of the shipping policy being created.|
|» shippingMethod|body|string|true|Type of shipping available for this shipping policy (carrier). Options shown on freight simulation|
|» weekendAndHolidays|body|object|true|If the shipping policy includes deliveries on weekends and holidays.|
|» » holiday|body|boolean|true|Does the shipping policy allow deliveries onholidays?|
|» » saturday|body|boolean|true|Does the shipping policy allow deliveries on saturdays?|
|» » sunday|body|boolean|true|Does the shipping policy allow deliveries on sundays?|

<h3 id="create-shipping-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve shipping policy by ID

> Code samples

```bash
curl https://example.com/api/logistics/pvt/shipping-policies/id \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/shipping-policies/{id}`

This endpoint lists existing [shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) from carriers in your store, searching by their IDs.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

<h3 id="retrieve-shipping-policy-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|
|id|path|string|true|ID of the shipping policy.|

<h3 id="retrieve-shipping-policy-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update shipping policy

> Code samples

```bash
curl https://example.com/api/logistics/pvt/shipping-policies/shippingpolicyid1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "deliveryOnWeekends": false,
    "deliveryScheduleSettings": {
      "dayOfWeekForDelivery": [
        {
          "dayOfWeek": 2,
          "deliveryRanges": [
            {
              "deliveryCapacity": [
                {
                  "capacityType": "ORDERS_QUANTITY",
                  "maxValue": 55
                }
              ],
              "endTime": "12:30:00",
              "listPrice": 0,
              "startTime": "11:00:00"
            }
          ]
        }
      ],
      "maxRangeDelivery": 0,
      "useDeliverySchedule": true
    },
    "isActive": true,
    "maxDimension": {
      "largestMeasure": 10,
      "maxMeasureSum": 30
    },
    "name": "Correios PAC",
    "shippingMethod": "Normal"
  }'
```

`PUT /api/logistics/pvt/shipping-policies/{id}`

This endpoint updates information on existing Shipping Policies from carriers.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

> Body parameter

```json
{
  "deliveryOnWeekends": false,
  "deliveryScheduleSettings": {
    "dayOfWeekForDelivery": [
      {
        "dayOfWeek": 2,
        "deliveryRanges": [
          {
            "deliveryCapacity": [
              {
                "capacityType": "ORDERS_QUANTITY",
                "maxValue": 55
              }
            ],
            "endTime": "12:30:00",
            "listPrice": 0,
            "startTime": "11:00:00"
          }
        ]
      }
    ],
    "maxRangeDelivery": 0,
    "useDeliverySchedule": true
  },
  "isActive": true,
  "maxDimension": {
    "largestMeasure": 10,
    "maxMeasureSum": 30
  },
  "name": "Correios PAC",
  "shippingMethod": "Normal"
}
```

<h3 id="update-shipping-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|
|id|path|string|true|Shipping policy's ID|
|body|body|object|false|none|
|» deliveryOnWeekends|body|boolean|true|If the shipping policy (carrier) delivers on weekends|
|» deliveryScheduleSettings|body|object|false|Settings for the Scheduled Delivery feature.|
|» » dayOfWeekForDelivery|body|[object]|true|Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.|
|» » » dayOfWeek|body|integer|true|Day of the week, from `0` (sunday) to `6` (saturday).|
|» » » deliveryRanges|body|[object]|true|Reservation windows for scheduled delivery.|
|» » » » deliveryCapacity|body|[object]|false|Sets maximum delivery capacity for a given reservation window for scheduled delivery.|
|» » » » » capacityType|body|string|true|Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).|
|» » » » » maxValue|body|number|true|Maximum number of orders or SKUs that the store is capable of fulfilling.|
|» » » » endTime|body|string|true|End time for day of the week.|
|» » » » listPrice|body|number|true|List price for day of the week.|
|» » » » startTime|body|string|true|Start time for day of the week.|
|» » maxRangeDelivery|body|number|true|Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.|
|» » useDeliverySchedule|body|boolean|true|Select the Scheduled Delivery configuration.|
|» isActive|body|boolean|true|If the shipping policy is active or not.|
|» maxDimension|body|object|true|Object containing attributes of maximum dimension permitted by the shipping policy (carrier).|
|» » largestMeasure|body|number|true|Largest measure of the package.|
|» » maxMeasureSum|body|number|true|Sum of all maximum measures of the package.|
|» name|body|string|true|Name of the shipping policy|
|» shippingMethod|body|string|true|Type of shipping available for this shipping policy (carrier). Options shown on freight simulation.|

<h3 id="update-shipping-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete shipping policies by ID

> Code samples

```bash
curl https://example.com/api/logistics/pvt/shipping-policies/id \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/logistics/pvt/shipping-policies/{id}`

This endpoint deletes existing shipping policies from carriers in your store, searching by their IDs.

<h3 id="delete-shipping-policies-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|
|id|path|string|true|ID of the shipping policy.|

<h3 id="delete-shipping-policies-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="logistics-api-docks">Docks</h1>

## List all docks

<a id="opIdAllDocks"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/docks \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/docks`

Informs a list of all docks.

<h3 id="list-all-docks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

> Example responses

> 200 Response

```json
[
  {
    "dockTimeFake": "1.00:00:00",
    "freightTableIds": [
      "11cc4b6",
      "teste1",
      "186a2a6",
      "1962962",
      "173a63f"
    ],
    "id": "1a8bce3",
    "name": "Centro de Distribuição Principal",
    "pickupStoreInfo": {
      "additionalInfo": null,
      "address": null,
      "dockId": null,
      "friendlyName": null,
      "isPickupStore": false,
      "storeId": null
    },
    "priority": 0,
    "salesChannel": null,
    "salesChannels": [
      "1",
      "2"
    ],
    "timeFakeOverhead": "00:00:00",
    "wmsEndPoint": ""
  },
  {
    "dockTimeFake": "00:00:00",
    "freightTableIds": [
      "1962962",
      "teste1",
      "11cc4b6"
    ],
    "id": "1_1_1",
    "name": "Doca A",
    "pickupStoreInfo": {
      "additionalInfo": null,
      "address": null,
      "dockId": null,
      "friendlyName": null,
      "isPickupStore": false,
      "storeId": null
    },
    "priority": 1,
    "salesChannel": null,
    "salesChannels": [
      "1",
      "11",
      "4",
      "2",
      "12",
      "13",
      "14",
      "7",
      "16"
    ],
    "timeFakeOverhead": "00:00:00",
    "wmsEndPoint": ""
  },
  {
    "dockTimeFake": "1.00:00:00",
    "freightTableIds": [],
    "id": "139270d",
    "name": "Doca B",
    "pickupStoreInfo": {
      "additionalInfo": null,
      "address": null,
      "dockId": null,
      "friendlyName": null,
      "isPickupStore": false,
      "storeId": null
    },
    "priority": 0,
    "salesChannel": null,
    "salesChannels": [
      "1"
    ],
    "timeFakeOverhead": "1.00:00:00",
    "wmsEndPoint": ""
  },
  {
    "dockTimeFake": "00:00:00",
    "freightTableIds": [],
    "id": "18dd839",
    "name": "Doca C",
    "pickupStoreInfo": {
      "additionalInfo": null,
      "address": null,
      "dockId": null,
      "friendlyName": null,
      "isPickupStore": false,
      "storeId": null
    },
    "priority": 0,
    "salesChannel": null,
    "salesChannels": [
      "1"
    ],
    "timeFakeOverhead": "00:00:00",
    "wmsEndPoint": "http://recurrent-env-beta.elasticbeanstalk.com/recorrenciawms"
  },
  {
    "dockTimeFake": "1.00:00:00",
    "freightTableIds": [],
    "id": "avl",
    "name": "Doca InStore",
    "pickupStoreInfo": {
      "additionalInfo": null,
      "address": null,
      "dockId": null,
      "friendlyName": null,
      "isPickupStore": false,
      "storeId": null
    },
    "priority": 0,
    "salesChannel": null,
    "salesChannels": [
      "18"
    ],
    "timeFakeOverhead": "1.00:00:00",
    "wmsEndPoint": ""
  },
  {
    "dockTimeFake": "1.00:00:00",
    "freightTableIds": [],
    "id": "pickup_1",
    "name": "Pickup Point 1",
    "pickupStoreInfo": {
      "additionalInfo": null,
      "address": null,
      "dockId": null,
      "friendlyName": null,
      "isPickupStore": false,
      "storeId": null
    },
    "priority": 0,
    "salesChannel": null,
    "salesChannels": [
      "1"
    ],
    "timeFakeOverhead": "00:00:00",
    "wmsEndPoint": ""
  },
  {
    "dockTimeFake": "1.00:00:00",
    "freightTableIds": [],
    "id": "pickup_2",
    "name": "Pickup Point 2",
    "pickupStoreInfo": {
      "additionalInfo": null,
      "address": null,
      "dockId": null,
      "friendlyName": null,
      "isPickupStore": false,
      "storeId": null
    },
    "priority": 0,
    "salesChannel": null,
    "salesChannels": [
      "1"
    ],
    "timeFakeOverhead": "00:00:00",
    "wmsEndPoint": ""
  },
  {
    "dockTimeFake": "1.00:00:00",
    "freightTableIds": [],
    "id": "pickup_3",
    "name": "Pickup Point 3",
    "pickupStoreInfo": {
      "additionalInfo": null,
      "address": null,
      "dockId": null,
      "friendlyName": null,
      "isPickupStore": false,
      "storeId": null
    },
    "priority": 0,
    "salesChannel": null,
    "salesChannels": [
      "1"
    ],
    "timeFakeOverhead": "00:00:00",
    "wmsEndPoint": ""
  }
]
```

<h3 id="list-all-docks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-docks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» dockTimeFake|string|true|none|none|
|» freightTableIds|[string]|true|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» pickupStoreInfo|object|true|none|none|
|» » additionalInfo|string \| null|true|none|none|
|» » address|string \| null|true|none|none|
|» » dockId|string \| null|true|none|none|
|» » friendlyName|string \| null|true|none|none|
|» » isPickupStore|boolean|true|none|none|
|» » storeId|string \| null|true|none|none|
|» priority|integer(int32)|true|none|none|
|» salesChannel|string \| null|true|none|none|
|» salesChannels|[string]|true|none|none|
|» timeFakeOverhead|string|true|none|none|
|» wmsEndPoint|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|X-CDNIgnore|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Powered-by-VTEX-Janus-Router|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create/update dock

<a id="opIdCreate/UpdateDock"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/docks \
  -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "address": {
      "city": "Rio de Janeiro",
      "complement": "",
      "coordinates": [
        [
          -43.18228090000002,
          -22.9460398
        ]
      ],
      "country": {
        "acronym": "BRA",
        "name": "Brazil"
      },
      "neighborhood": "Catete",
      "number": "100",
      "postalCode": "22220070",
      "state": "RJ",
      "street": "Artur Bernardes Street"
    },
    "dockTimeFake": "00:00:00",
    "freightTableIds": [],
    "id": "catete",
    "name": "Loja Catete",
    "priority": 0,
    "salesChannel": null,
    "salesChannels": [
      "1"
    ],
    "timeFakeOverhead": "00:00:00",
    "wmsEndPoint": ""
  }'
```

`POST /api/logistics/pvt/configuration/docks`

Creates or updates docks to be used in your logistic operation.

> Body parameter

```json
{
  "address": {
    "city": "Rio de Janeiro",
    "complement": "",
    "coordinates": [
      [
        -43.18228090000002,
        -22.9460398
      ]
    ],
    "country": {
      "acronym": "BRA",
      "name": "Brazil"
    },
    "neighborhood": "Catete",
    "number": "100",
    "postalCode": "22220070",
    "state": "RJ",
    "street": "Artur Bernardes Street"
  },
  "dockTimeFake": "00:00:00",
  "freightTableIds": [],
  "id": "catete",
  "name": "Loja Catete",
  "priority": 0,
  "salesChannel": null,
  "salesChannels": [
    "1"
  ],
  "timeFakeOverhead": "00:00:00",
  "wmsEndPoint": ""
}
```

<h3 id="createupdate-dock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|body|body|object|true|none|
|» address|body|object|true|none|
|» » city|body|string|true|none|
|» » complement|body|string|true|none|
|» » coordinates|body|[[number]]|true|none|
|» » country|body|object|true|none|
|» » » acronym|body|string|true|none|
|» » » name|body|string|true|none|
|» » neighborhood|body|string|true|none|
|» » number|body|string|true|none|
|» » postalCode|body|string|true|none|
|» » state|body|string|true|none|
|» » street|body|string|true|none|
|» dockTimeFake|body|string|true|none|
|» freightTableIds|body|[string]|true|none|
|» id|body|string|true|none|
|» name|body|string|true|none|
|» priority|body|integer(int32)|true|none|
|» salesChannel|body|string \| null|true|none|
|» salesChannels|body|[string]|true|none|
|» timeFakeOverhead|body|string|true|none|
|» wmsEndPoint|body|string|true|none|

<h3 id="createupdate-dock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List dock by ID

<a id="opIdDockById"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/docks/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/docks/{dockId}`

Informs a given dock's information, searching by dock ID.

<h3 id="list-dock-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|dockId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "dockTimeFake": "1.00:00:00",
  "freightTableIds": [
    "11cc4b6",
    "teste1",
    "186a2a6",
    "1962962",
    "173a63f"
  ],
  "id": "1a8bce3",
  "name": "Centro de Distribui├º├úo Principal",
  "pickupStoreInfo": {
    "additionalInfo": null,
    "address": null,
    "dockId": null,
    "friendlyName": null,
    "isPickupStore": false,
    "storeId": null
  },
  "priority": 0,
  "salesChannel": null,
  "salesChannels": [
    "1",
    "2"
  ],
  "timeFakeOverhead": "00:00:00",
  "wmsEndPoint": ""
}
```

<h3 id="list-dock-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-dock-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockTimeFake|string|true|none|none|
|freightTableIds|[string]|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|pickupStoreInfo|object|true|none|none|
|» additionalInfo|string \| null|true|none|none|
|» address|string \| null|true|none|none|
|» dockId|string \| null|true|none|none|
|» friendlyName|string \| null|true|none|none|
|» isPickupStore|boolean|true|none|none|
|» storeId|string \| null|true|none|none|
|priority|integer(int32)|true|none|none|
|salesChannel|string \| null|true|none|none|
|salesChannels|[string]|true|none|none|
|timeFakeOverhead|string|true|none|none|
|wmsEndPoint|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Powered-by-VTEX-Janus-Router|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete dock

<a id="opIdDock"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/docks/string \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/logistics/pvt/configuration/docks/{dockId}`

Deletes dock by dock ID.

<h3 id="delete-dock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|dockId|path|string|true|none|

<h3 id="delete-dock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Activate dock

<a id="opIdActivateDock"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/docks/string/activation \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/logistics/pvt/configuration/docks/{dockId}/activation`

Activates dock through dock ID.

<h3 id="activate-dock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|dockId|path|string|true|none|

<h3 id="activate-dock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Deactivate dock

<a id="opIdDeactivateDock"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/docks/string/deactivation \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/logistics/pvt/configuration/docks/{dockId}/deactivation`

Deactivate dock by dock ID

<h3 id="deactivate-dock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|dockId|path|string|true|none|

<h3 id="deactivate-dock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="logistics-api-warehouses">Warehouses</h1>

## List all warehouses

<a id="opIdAllWarehouses"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/warehouses \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/warehouses`

Lists information about all warehouses set up in your store.

<h3 id="list-all-warehouses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

> Example responses

> 200 Response

```json
[
  {
    "id": "1937054",
    "isActive": true,
    "name": "Estoque A",
    "pickupPointIds": [
      1,
      2,
      3
    ],
    "priority": 0,
    "warehouseDocks": [
      {
        "cost": 0,
        "dockId": "1_1_1",
        "time": "1.00:00:00"
      }
    ]
  },
  {
    "id": "140ac66",
    "isActive": true,
    "name": "Estoque B",
    "pickupPointIds": [
      1,
      2,
      3
    ],
    "priority": 0,
    "warehouseDocks": [
      {
        "cost": 0,
        "dockId": "139270d",
        "time": "00:00:00"
      }
    ]
  }
]
```

<h3 id="list-all-warehouses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-warehouses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string|true|none|Code that identifies a warehouse.|
|» isActive|boolean|true|none|Shows if the warehouse is active (`true`) or inactive (`false`).|
|» name|string|true|none|Name of the warehouse.|
|» pickupPointIds|[object]|true|none|This field returns a list of the [pickup points' IDs](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) associated with the given warehouse.|
|» priority|integer|true|none|If the warehouse was configured as a priority. When no priority was set, the value returns`0`.|
|» warehouseDocks|[object]|true|none|Information related to the docks available for the warehouses.|
|» » cost|number|true|none|Extra charges added to the shipping rate when **Additional shipping costs** are configured.|
|» » dockId|string|true|none|Code that identifies a dock.|
|» » time|string|true|none|This field returns the dock's processing time in days and hours. If none is configured, the request returns `00:00:00`.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Powered-by-VTEX-Janus-Router|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create/update warehouse

<a id="opIdCreate/UpdateWarehouse"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/warehouses \
  -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "id": "15bfc76",
    "name": "Estoque Principal",
    "warehouseDocks": [
      {
        "cost": "5.00",
        "costToDisplay": "5,00",
        "dockId": "1a8bce3",
        "name": "Centro de Distribui├º├úo Principal",
        "time": "3.00:00:00",
        "translateDays": "dias"
      }
    ]
  }'
```

`POST /api/logistics/pvt/configuration/warehouses`

Creates or updates your store's warehouses

> Body parameter

```json
{
  "id": "15bfc76",
  "name": "Estoque Principal",
  "warehouseDocks": [
    {
      "cost": "5.00",
      "costToDisplay": "5,00",
      "dockId": "1a8bce3",
      "name": "Centro de Distribui├º├úo Principal",
      "time": "3.00:00:00",
      "translateDays": "dias"
    }
  ]
}
```

<h3 id="createupdate-warehouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|
|body|body|object|true|none|
|» id|body|string|true|none|
|» name|body|string|true|none|
|» warehouseDocks|body|[object]|true|none|
|» » cost|body|string|true|none|
|» » costToDisplay|body|string|true|none|
|» » dockId|body|string|true|none|
|» » name|body|string|true|none|
|» » time|body|string|true|none|
|» » translateDays|body|string|true|none|

<h3 id="createupdate-warehouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List warehouse by ID

<a id="opIdWarehouseById"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/warehouses/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/warehouses/{warehouseId}`

Lists the information of a given warehouse, searching by warehouse ID.

<h3 id="list-warehouse-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|warehouseId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "15bfc76",
  "isActive": true,
  "name": "Estoque Principal",
  "pickupPointIds": [
    1,
    2,
    3
  ],
  "priority": 0,
  "warehouseDocks": [
    {
      "cost": 5,
      "dockId": "1a8bce3",
      "time": "3.00:00:00"
    }
  ]
}
```

<h3 id="list-warehouse-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-warehouse-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|isActive|boolean|false|none|Shows if the warehouse is active (`true`) or inactive (`false`).|
|name|string|false|none|none|
|pickupPointIds|[object]|false|none|This field returns a list of the [pickup points' IDs](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) associated with the given warehouse.|
|priority|integer|false|none|If the warehouse was configured as a priority. When no priority was set, the value returns`0`.|
|warehouseDocks|[object]|false|none|none|
|» cost|number|true|none|none|
|» dockId|string|true|none|none|
|» time|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Janus-Processado|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|X-VTEX-Janus-SO|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Remove warehouse

<a id="opIdRemoveWarehouse"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/warehouses/string \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/logistics/pvt/configuration/warehouses/{warehouseId}`

Deletes given warehouse by warehouse ID.

<h3 id="remove-warehouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|warehouseId|path|string|true|none|

<h3 id="remove-warehouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Activate warehouse

<a id="opIdActivateWarehouse"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/warehouses/string/activation \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/logistics/pvt/configuration/warehouses/{warehouseId}/activation`

Activates a given warehouse, by warehouse ID.

<h3 id="activate-warehouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|warehouseId|path|string|true|none|

<h3 id="activate-warehouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Deactivate warehouse

<a id="opIdDeactivateWarehouse"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/warehouses/string/deactivation \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/logistics/pvt/configuration/warehouses/{warehouseId}/deactivation`

Deactivates a given warehouse by warehouse ID.

<h3 id="deactivate-warehouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|warehouseId|path|string|true|none|

<h3 id="deactivate-warehouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="logistics-api-inventory">Inventory</h1>

## List inventory with dispatched reservations

<a id="opIdGetinventorywithdispatchedreservations"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/items/string/warehouses/string/dispatched \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/inventory/items/{itemId}/warehouses/{warehouseId}/dispatched`

Lists inventory with dispatched reservations. When the number of active reservations is more than 2000 the return is an error with status code 400 (BadRequest) and the message: Too many active reservations.

<h3 id="list-inventory-with-dispatched-reservations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|itemId|path|string|true|none|
|warehouseId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "availableQuantity": 2147483647,
    "dispatchedReservationsQuantity": 0,
    "isUnlimitedQuantity": true,
    "quantity": 2147483647,
    "skuId": "1",
    "totalReservedQuantity": 0,
    "warehouseId": "1"
  }
]
```

<h3 id="list-inventory-with-dispatched-reservations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-inventory-with-dispatched-reservations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» availableQuantity|integer|false|none|Available quantity.|
|» dispatchedReservationsQuantity|integer|false|none|Dispatched reservations quantity.|
|» isUnlimitedQuantity|boolean|false|none|Indicates whether the SKU's availability is unlimited ("infinite inventory").|
|» quantity|integer|false|none|SKU quantity.|
|» skuId|string|false|none|SKU ID.|
|» totalReservedQuantity|integer|false|none|Total reserved quantity of the SKU.|
|» warehouseId|string|false|none|Warehouse ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List inventory per dock

<a id="opIdInventoryperdock"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/items/string/docks/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/inventory/items/{skuId}/docks/{dockId}`

Lists inventory information per dock set up in your store.

<h3 id="list-inventory-per-dock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|skuId|path|string|true|none|
|dockId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "availableQuantity": 1000000,
    "dateOfSupplyUtc": "2020-04-05T00:00:00+00:00",
    "deliveryChannels": [
      "delivery"
    ],
    "dockId": "1",
    "isUnlimited": true,
    "keepSellingAfterExpiration": false,
    "reservedQuantity": 0,
    "salesChannel": [
      "1"
    ],
    "skuId": "1",
    "supplyLotId": null,
    "timeToRefill": "01:50:00",
    "totalQuantity": 1000000,
    "transfer": "transfer1",
    "warehouseId": "1"
  },
  {
    "availableQuantity": 1000000,
    "dateOfSupplyUtc": "2020-04-05T00:00:00+00:00",
    "deliveryChannels": [
      "delivery"
    ],
    "dockId": "1",
    "isUnlimited": true,
    "keepSellingAfterExpiration": false,
    "reservedQuantity": 117,
    "salesChannel": [
      "1"
    ],
    "skuId": "1",
    "supplyLotId": null,
    "timeToRefill": "01:50:00",
    "totalQuantity": 1000117,
    "transfer": "transfer2",
    "warehouseId": "1_1"
  }
]
```

<h3 id="list-inventory-per-dock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-inventory-per-dock-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» availableQuantity|integer|false|none|Amount of items available for sale. Difference between total quantity and reserved quantity.|
|» dateOfSupplyUtc|string|false|none|Date of supply lot in UTC.|
|» deliveryChannel|[string]|false|none|List of delivery channels available.|
|» dockId|string|false|none|Dock ID.|
|» isUnlimited|boolean|false|none|Indicates whether the SKU's availability is unlimited ("infinite inventory").|
|» keepSellingAfterExpiration|boolean|false|none|Indicates whether SKU can continue to be sold after the available quantity gets to 0.|
|» reservedQuantity|integer|false|none|Reserved quantity of the SKU.|
|» salesChannel|[string]|false|none|List of sales channels associated.|
|» skuId|string|false|none|SKU ID.|
|» timeToRefill|string|false|none|Time to refill (deprecated).|
|» totalQuantity|integer|false|none|Total quantity of SKU.|
|» transfer|string|false|none|Transfer.|
|» warehouseId|string|false|none|Warehouse ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List inventory per dock and warehouse

<a id="opIdInventoryperdockandwarehouse"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/items/string/docks/string/warehouses/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/inventory/items/{skuId}/docks/{dockId}/warehouses/{warehouseId}`

Lists information of inventory per dock and warehouse.

<h3 id="list-inventory-per-dock-and-warehouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|skuId|path|string|true|none|
|dockId|path|string|true|none|
|warehouseId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "availableQuantity": 1000000,
    "dateOfSupplyUtc": "2020-04-05T00:00:00+00:00",
    "deliveryChannels": [
      "delivery"
    ],
    "dockId": "1",
    "isUnlimited": true,
    "keepSellingAfterExpiration": false,
    "reservedQuantity": 0,
    "salesChannel": [
      "1"
    ],
    "skuId": "1",
    "supplyLotId": null,
    "timeToRefill": "12:50:00",
    "totalQuantity": 1000000,
    "transfer": "Tranfer1",
    "warehouseId": "1"
  }
]
```

<h3 id="list-inventory-per-dock-and-warehouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-inventory-per-dock-and-warehouse-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» availableQuantity|integer|false|none|Amount of items available for sale. Difference between total quantity and reserved quantity.|
|» dateOfSupplyUtc|string|false|none|Date of supply lot in UTC.|
|» deliveryChannel|[string]|false|none|List of delivery channels available.|
|» dockId|string|false|none|Dock ID.|
|» isUnlimited|boolean|false|none|Indicates whether the SKU's availability is unlimited ("infinite inventory").|
|» keepSellingAfterExpiration|boolean|false|none|Indicates whether SKU can continue to be sold after the available quantity gets to 0.|
|» reservedQuantity|integer|false|none|Reserved quantity of the SKU.|
|» salesChannel|[string]|false|none|List of sales channels associated.|
|» skuId|string|false|none|SKU ID.|
|» timeToRefill|string|false|none|Time to refill (deprecated).|
|» totalQuantity|integer|false|none|Total quantity of SKU.|
|» transfer|string|false|none|Transfer.|
|» warehouseId|string|false|none|Warehouse ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List inventory per warehouse

<a id="opIdInventoryperwarehouse"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/items/string/warehouses/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}`

Lists inventory information per warehouse on your store.

<h3 id="list-inventory-per-warehouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|skuId|path|string|true|none|
|warehouseId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "availableQuantity": 1000000,
    "dateOfSupplyUtc": "12020-04-05T00:00:00+00:00",
    "deliveryChannels": [
      "delivery"
    ],
    "dockId": "1",
    "isUnlimited": true,
    "keepSellingAfterExpiration": false,
    "reservedQuantity": 0,
    "salesChannel": [
      "1"
    ],
    "skuId": "1",
    "supplyLotId": "05-05-22",
    "timeToRefill": "1",
    "totalQuantity": 1000000,
    "transfer": "Transfer 1",
    "warehouseId": "1"
  }
]
```

<h3 id="list-inventory-per-warehouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-inventory-per-warehouse-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» availableQuantity|integer|false|none|Amount of items available for sale. Difference between total quantity and reserved quantity.|
|» dateOfSupplyUtc|string|false|none|Date of supply lot in UTC.|
|» deliveryChannel|[string]|false|none|List of delivery channels available.|
|» dockId|string|false|none|Dock ID.|
|» isUnlimited|boolean|false|none|Indicates whether the SKU's availability is unlimited ("infinite inventory").|
|» keepSellingAfterExpiration|boolean|false|none|Indicates whether SKU can continue to be sold after the available quantity gets to 0.|
|» reservedQuantity|integer|false|none|Reserved quantity of the SKU.|
|» salesChannel|[string]|false|none|List of sales channels associated.|
|» skuId|string|false|none|SKU ID.|
|» timeToRefill|string|false|none|Time to refill (deprecated).|
|» totalQuantity|integer|false|none|Total quantity of SKU.|
|» transfer|string|false|none|Transfer.|
|» warehouseId|string|false|none|Warehouse ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List supply lots

<a id="opIdGetSupplyLots"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/items/string/warehouses/string/supplyLots \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots`

Returns a list of the supply lots of an SKU in a specific warehouse.

<h3 id="list-supply-lots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|skuId|path|string|true|ID of the SKU.|
|warehouseId|path|string|true|ID of the warehouse where the SKU is located.|

<h3 id="list-supply-lots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Save supply lot

<a id="opIdSaveSupplyLot"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/items/string/warehouses/string/supplyLots/string \
  -X PUT \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "dateOfSupplyUtc": "2020-04-05T00:00:00+00:00",
    "keepSellingAfterExpiration": true,
    "quantity": 1000
  }'
```

`PUT /api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots/{supplyLotId}`

Creates a new Supply Lot. A Supply Lot lets the store sell products that are not currently available in stock but whose arrival is already scheduled.

Check out our [documentation](https://help.vtex.com/en/tutorial/setting-up-future-inventory--UMSGjooqRfkRbeoh94kS4) about this feature.

> Body parameter

```json
{
  "dateOfSupplyUtc": "2020-04-05T00:00:00+00:00",
  "keepSellingAfterExpiration": true,
  "quantity": 1000
}
```

<h3 id="save-supply-lot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|
|skuId|path|string|true|ID of the SKU whose availability is being scheduled.|
|warehouseId|path|string|true|ID of the warehouse where the SKU will arrive.|
|supplyLotId|path|string|true|ID of the Supply Lot in which the SKU's scheduling should be considered.|
|body|body|object|true|none|
|» dateOfSupplyUtc|body|string|true|none|
|» keepSellingAfterExpiration|body|boolean|true|none|
|» quantity|body|number|true|none|

<h3 id="save-supply-lot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Transfer supply lot

<a id="opIdTransferSupplyLot"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/items/string/warehouses/string/supplyLots/string/transfer \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots/{supplyLotId}/transfer`

Transfers an SKU from a Supply Lot to the currently available inventory.

Check out how this transfer works in further detail by reading our [documentation](https://help.vtex.com/pt/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4) about this feature.

<h3 id="transfer-supply-lot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|
|skuId|path|string|true|ID of the SKU.|
|warehouseId|path|string|true|ID of the warehouse where the SKU is located.|
|supplyLotId|path|string|true|ID of the Supply Lot in which the SKU is currently located and from where it will be transfered.|

<h3 id="transfer-supply-lot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List inventory by SKU

<a id="opIdInventoryBySku"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/skus/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/inventory/skus/{skuId}`

Lists your store's inventory by SKU ID

<h3 id="list-inventory-by-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|skuId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "balance": [
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 9,
      "totalQuantity": 101,
      "warehouseId": "1937054",
      "warehouseName": "Estoque A"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 100,
      "warehouseId": "avl",
      "warehouseName": "Estoque InStore"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 100,
      "warehouseId": "1448dc2",
      "warehouseName": "Estoque C"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 100,
      "warehouseId": "140ac66",
      "warehouseName": "Estoque B"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 100,
      "warehouseId": "pickuppoint",
      "warehouseName": "PickupPoint"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 200,
      "warehouseId": "pickuppoint_2",
      "warehouseName": "PickupPoint 2"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 1011,
      "warehouseId": "15bfc76",
      "warehouseName": "Estoque Principal"
    }
  ],
  "skuId": "2390059"
}
```

<h3 id="list-inventory-by-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="list-inventory-by-sku-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|[object]|true|none|none|
|» hasUnlimitedQuantity|boolean|true|none|none|
|» reservedQuantity|integer(int32)|true|none|none|
|» totalQuantity|integer(int32)|true|none|none|
|» warehouseId|string|true|none|none|
|» warehouseName|string|true|none|none|
|skuId|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-AspNet-Version|string||none|
|200|X-Powered-By|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update inventory by SKU and warehouse

<a id="opIdUpdateInventoryBySkuandWarehouse"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/skus/string/warehouses/string \
  -X PUT \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "dateUtcOnBalanceSystem": "null",
    "quantity": 101,
    "timeToRefill (deprecated)": "00:00:00",
    "unlimitedQuantity": false
  }'
```

`PUT /api/logistics/pvt/inventory/skus/{skuId}/warehouses/{warehouseId}`

Updates inventory for a given SKU and warehouse.

> Body parameter

```json
{
  "dateUtcOnBalanceSystem": "null",
  "quantity": 101,
  "timeToRefill (deprecated)": "00:00:00",
  "unlimitedQuantity": false
}
```

<h3 id="update-inventory-by-sku-and-warehouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|skuId|path|string|true|none|
|warehouseId|path|string|true|none|
|body|body|object|true|none|
|» dateUtcOnBalanceSystem|body|string|false|Defines the corresponding moment to the informed warehouse. It is useful due to the liberation of handling order reservations. <br><br>When requested as `null`, this value will be the date/time of the request. Its format is `DateTimeOffset`, as in `yyyy-mm-dd-Thh:mm:ss`. For example: `2022-03-15T00:52:16`.|
|» quantity|body|integer(int32)|true|none|
|» timeToRefill (deprecated)|body|string|true|none|
|» unlimitedQuantity|body|boolean|true|none|

<h3 id="update-inventory-by-sku-and-warehouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="logistics-api-holidays">Holidays</h1>

## List all holidays

<a id="opIdAllHolidays"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/holidays \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/holidays`

Lists information of all holidays.

<h3 id="list-all-holidays-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

<h3 id="list-all-holidays-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List holiday by ID

<a id="opIdHolidayById"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/holidays/string \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/holidays/{holidayId}`

Lists holiday's information by holiday ID.

<h3 id="list-holiday-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|holidayId|path|string|true|none|

<h3 id="list-holiday-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create/update holiday

<a id="opIdCreate/UpdateHoliday"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/holidays/string \
  -X PUT \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "name": "Natal",
    "startDate": "2016-12-25"
  }'
```

`PUT /api/logistics/pvt/configuration/holidays/{holidayId}`

Creates or updates holidays through holiday ID.

> Body parameter

```json
{
  "name": "Natal",
  "startDate": "2016-12-25"
}
```

<h3 id="createupdate-holiday-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|
|holidayId|path|string|true|none|
|body|body|object|true|none|
|» name|body|string|true|none|
|» startDate|body|string|true|none|

<h3 id="createupdate-holiday-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete holiday

<a id="opIdHoliday"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/holidays/string \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/logistics/pvt/configuration/holidays/{holidayId}`

Deletes given holidays set up in your store.

<h3 id="delete-holiday-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|holidayId|path|string|true|none|

<h3 id="delete-holiday-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="logistics-api-reservations">Reservations</h1>

## Create reservation

<a id="opIdCreateReservation"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/reservations \
  -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "autorizationExpirationTTL": "00:10:00",
    "deliveryItemOptions": [
      {
        "aditionalTimeBlockedDays": "00:00:00",
        "deliveryWindows": [],
        "dockId": "1a8bce3",
        "dockTime": "00:00:00",
        "item": {
          "additionalHandlingTime": "00:00:00",
          "dimension": {
            "height": 1,
            "length": 1,
            "weight": 150,
            "width": 1
          },
          "groupItemId": null,
          "id": "2390059",
          "kitItem": [],
          "price": 0,
          "quantity": 1
        },
        "listPrice": 10.5,
        "location": {
          "country": "BRA",
          "inStore": {
            "IsCheckedIn": false,
            "StoreId": null
          },
          "zipCode": "22220070"
        },
        "promotionalPrice": 10.5,
        "slaType": "Expressa",
        "slaTypeName": "Expressa",
        "timeToDockPlusDockTime": "1.00:00:00",
        "totalTime": "3.00:00:00",
        "transitTime": "2.00:00:00",
        "wareHouseId": null
      }
    ],
    "lockId": null,
    "salesChannel": "1"
  }'
```

`POST /api/logistics/pvt/inventory/reservations`

Creates [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92).

> Body parameter

```json
{
  "autorizationExpirationTTL": "00:10:00",
  "deliveryItemOptions": [
    {
      "aditionalTimeBlockedDays": "00:00:00",
      "deliveryWindows": [],
      "dockId": "1a8bce3",
      "dockTime": "00:00:00",
      "item": {
        "additionalHandlingTime": "00:00:00",
        "dimension": {
          "height": 1,
          "length": 1,
          "weight": 150,
          "width": 1
        },
        "groupItemId": null,
        "id": "2390059",
        "kitItem": [],
        "price": 0,
        "quantity": 1
      },
      "listPrice": 10.5,
      "location": {
        "country": "BRA",
        "inStore": {
          "IsCheckedIn": false,
          "StoreId": null
        },
        "zipCode": "22220070"
      },
      "promotionalPrice": 10.5,
      "slaType": "Expressa",
      "slaTypeName": "Expressa",
      "timeToDockPlusDockTime": "1.00:00:00",
      "totalTime": "3.00:00:00",
      "transitTime": "2.00:00:00",
      "wareHouseId": null
    }
  ],
  "lockId": null,
  "salesChannel": "1"
}
```

<h3 id="create-reservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|body|body|object|true|none|
|» autorizationExpirationTTL|body|string|true|none|
|» deliveryItemOptions|body|[object]|true|none|
|» » aditionalTimeBlockedDays|body|string|true|none|
|» » deliveryWindows|body|[string]|true|none|
|» » dockId|body|string|true|none|
|» » dockTime|body|string|true|none|
|» » item|body|object|true|none|
|» » » additionalHandlingTime|body|string|true|none|
|» » » dimension|body|object|true|none|
|» » » » height|body|integer(int32)|true|none|
|» » » » length|body|integer(int32)|true|none|
|» » » » weight|body|integer(int32)|true|none|
|» » » » width|body|integer(int32)|true|none|
|» » » groupItemId|body|string \| null|true|none|
|» » » id|body|string|true|none|
|» » » kitItem|body|[string]|true|none|
|» » » price|body|integer(int32)|true|none|
|» » » quantity|body|integer(int32)|true|none|
|» » listPrice|body|number|true|none|
|» » location|body|object|true|none|
|» » » country|body|string|true|none|
|» » » inStore|body|object|true|none|
|» » » » IsCheckedIn|body|boolean|true|none|
|» » » » StoreId|body|string \| null|true|none|
|» » » zipCode|body|string|true|none|
|» » promotionalPrice|body|number|true|none|
|» » slaType|body|string|true|none|
|» » slaTypeName|body|string|true|none|
|» » timeToDockPlusDockTime|body|string|true|none|
|» » totalTime|body|string|true|none|
|» » transitTime|body|string|true|none|
|» » wareHouseId|body|string \| null|true|none|
|» lockId|body|string \| null|true|none|
|» salesChannel|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "AuthorizedDateUtc": "2016-04-15T19:59:20.0397988+00:00",
  "CanceledDateUtc": "0001-01-01T00:00:00+00:00",
  "ConfirmedDateUtc": "0001-01-01T00:00:00+00:00",
  "Errors": [],
  "IsSucess": true,
  "LastUpdateDateUtc": "2016-04-15T19:59:20.0397988+00:00",
  "LockId": "3bfe679d-c0a8-475a-b315-706f84a9deb4",
  "MaximumConfirmationDateUtc": "2016-04-15T20:09:20.0397988+00:00",
  "PickupPointItemOptions": null,
  "ReservationDateUtc": "2016-04-15T19:59:20.0397988+00:00",
  "SalesChannel": "2",
  "SlaRequest": [
    {
      "deliveryWindows": null,
      "dockId": "1_1_1",
      "dockTime": "00:00:00",
      "freightTableId": "11cc4b6",
      "freightTableName": "Correios PAC",
      "item": {
        "additionalHandlingTime": "00:00:00",
        "dimension": {
          "height": 10,
          "length": 35,
          "maxSumDimension": 0,
          "weight": 800,
          "width": 12
        },
        "groupItemId": null,
        "id": "2390059",
        "kitItem": [],
        "modal": null,
        "price": 0,
        "quantity": 1,
        "unlimitedQuantity": false
      },
      "listPrice": 10.5,
      "location": {
        "country": "BRA",
        "deliveryPointId": null,
        "inStore": {
          "IsCheckedIn": false,
          "StoreId": "180082"
        },
        "point": null,
        "zipCode": "22220070"
      },
      "pickupStoreInfo": null,
      "promotionalPrice": 10.5,
      "slaType": "Normal",
      "slaTypeName": "Normal",
      "timeToDockPlusDockTime": "1.00:00:00",
      "totalTime": "3.00:00:00",
      "transitTime": "2.00:00:00",
      "wareHouseId": "1937054",
      "wmsEndPoint": ""
    }
  ],
  "Status": 1
}
```

<h3 id="create-reservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-reservation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizedDateUtc|string|true|none|none|
|CanceledDateUtc|string|true|none|none|
|ConfirmedDateUtc|string|true|none|none|
|Errors|[string]|true|none|none|
|IsSucess|boolean|true|none|none|
|LastUpdateDateUtc|string|true|none|none|
|LockId|string|true|none|none|
|MaximumConfirmationDateUtc|string|true|none|none|
|PickupPointItemOptions|string \| null|true|none|none|
|ReservationDateUtc|string|true|none|none|
|SalesChannel|string|true|none|none|
|SlaRequest|[object]|true|none|none|
|» deliveryWindows|string \| null|true|none|none|
|» dockId|string|true|none|none|
|» dockTime|string|true|none|none|
|» freightTableId|string|true|none|none|
|» freightTableName|string|true|none|none|
|» item|object|true|none|none|
|» » additionalHandlingTime|string|true|none|none|
|» » dimension|object|true|none|none|
|» » » height|number|true|none|none|
|» » » length|number|true|none|none|
|» » » maxSumDimension|number|true|none|none|
|» » » weight|number|true|none|none|
|» » » width|number|true|none|none|
|» » groupItemId|string \| null|true|none|none|
|» » id|string|true|none|none|
|» » kitItem|[string]|true|none|none|
|» » modal|string \| null|true|none|none|
|» » price|number|true|none|none|
|» » quantity|integer(int32)|true|none|none|
|» » unlimitedQuantity|boolean|true|none|none|
|» listPrice|number|true|none|none|
|» location|object|true|none|none|
|» » country|string|true|none|none|
|» » deliveryPointId|string \| null|true|none|none|
|» » inStore|object|true|none|none|
|» » » IsCheckedIn|boolean|true|none|none|
|» » » StoreId|string|true|none|none|
|» » point|string \| null|true|none|none|
|» » zipCode|string|true|none|none|
|» pickupStoreInfo|string \| null|true|none|none|
|» promotionalPrice|number|true|none|none|
|» slaType|string|true|none|none|
|» slaTypeName|string|true|none|none|
|» timeToDockPlusDockTime|string|true|none|none|
|» totalTime|string|true|none|none|
|» transitTime|string|true|none|none|
|» wareHouseId|string|true|none|none|
|» wmsEndPoint|string|true|none|none|
|Status|integer(int32)|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|X-CDNIgnore|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Powered-by-VTEX-Janus-Router|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List reservation by ID

<a id="opIdReservationById"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/reservations/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/inventory/reservations/{reservationId}`

Lists reservation's information by ID.

<h3 id="list-reservation-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|reservationId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "AuthorizedDateUtc": "2016-04-15T19:59:40.9832533+00:00",
  "CanceledDateUtc": "0001-01-01T00:00:00+00:00",
  "ConfirmedDateUtc": "0001-01-01T00:00:00+00:00",
  "Errors": [],
  "IsSucess": true,
  "LastUpdateDateUtc": "2016-04-15T19:59:40.9832533+00:00",
  "LockId": "621a9121-06c9-4731-96d1-edf8c5c23877",
  "MaximumConfirmationDateUtc": "2016-04-15T20:09:40.9832533+00:00",
  "PickupPointItemOptions": "PUP 1",
  "ReservationDateUtc": "2016-04-15T19:59:40.9832533+00:00",
  "SalesChannel": "2",
  "SlaRequest": [
    {
      "deliveryWindows": null,
      "dockId": "1_1_1",
      "dockTime": "00:00:00",
      "freightTableId": "11cc4b6",
      "freightTableName": "Correios PAC",
      "item": {
        "additionalHandlingTime": "00:00:00",
        "dimension": {
          "height": 10,
          "length": 35,
          "maxSumDimension": 0,
          "weight": 800,
          "width": 12
        },
        "groupItemId": null,
        "id": "2390059",
        "kitItem": [],
        "modal": null,
        "price": 0,
        "quantity": 1,
        "unlimitedQuantity": false
      },
      "listPrice": 10.5,
      "location": {
        "country": "BRA",
        "deliveryPointId": null,
        "inStore": {
          "IsCheckedIn": false,
          "StoreId": "180082"
        },
        "point": null,
        "zipCode": "22220070"
      },
      "pickupStoreInfo": null,
      "promotionalPrice": 10.5,
      "slaType": "Normal",
      "slaTypeName": "Normal",
      "timeToDockPlusDockTime": "1.00:00:00",
      "totalTime": "3.00:00:00",
      "transitTime": "2.00:00:00",
      "wareHouseId": "1937054",
      "wmsEndPoint": ""
    }
  ],
  "Status": 1
}
```

<h3 id="list-reservation-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-reservation-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizedDateUtc|string|false|none|Authorized date in UTC.|
|CanceledDateUtc|string|false|none|Canceled date in UTC.|
|ConfirmedDateUtc|string|false|none|Confirmed date in UTC.|
|Errors|[string]|false|none|Information on errors, if there are any.|
|IsSucess|boolean|false|none|none|
|LastUpdateDateUtc|string|false|none|Date of the last update in UTC.|
|LockId|string|false|none|Lock ID.|
|MaximumConfirmationDateUtc|string|false|none|Maximum confirmation date in UTC.|
|PickupPointItemOptions|string|false|none|Pickup point item options.|
|ReservationDateUtc|string|false|none|Reservation date in UTC.|
|SalesChannel|string|false|none|Sales channel.|
|SlaRequest|[object]|false|none|Information on SLA request.|
|» deliveryWindows|string \| null|false|none|none|
|» dockId|string|false|none|none|
|» dockTime|string|false|none|none|
|» freightTableId|string|false|none|none|
|» freightTableName|string|false|none|none|
|» item|object|false|none|none|
|» » additionalHandlingTime|string|true|none|none|
|» » dimension|object|true|none|none|
|» » » height|number|true|none|none|
|» » » length|number|true|none|none|
|» » » maxSumDimension|number|true|none|none|
|» » » weight|number|true|none|none|
|» » » width|number|true|none|none|
|» » groupItemId|string \| null|true|none|none|
|» » id|string|true|none|none|
|» » kitItem|[string]|true|none|none|
|» » modal|string \| null|true|none|none|
|» » price|number|true|none|none|
|» » quantity|integer(int32)|true|none|none|
|» » unlimitedQuantity|boolean|true|none|none|
|» listPrice|number|false|none|none|
|» location|object|false|none|none|
|» » country|string|true|none|none|
|» » deliveryPointId|string \| null|true|none|none|
|» » inStore|object|true|none|none|
|» » » IsCheckedIn|boolean|true|none|none|
|» » » StoreId|string|true|none|none|
|» » point|string \| null|true|none|none|
|» » zipCode|string|true|none|none|
|» pickupStoreInfo|string \| null|false|none|none|
|» promotionalPrice|number|false|none|none|
|» slaType|string|false|none|none|
|» slaTypeName|string|false|none|none|
|» timeToDockPlusDockTime|string|false|none|none|
|» totalTime|string|false|none|none|
|» transitTime|string|false|none|none|
|» wareHouseId|string|false|none|none|
|» wmsEndPoint|string|false|none|none|
|Status|integer(int32)|false|none|Reservation status, being:<br>`0`: `NotCommitted`<br>`1`: `Authorized`<br>`2`: `Confirmed`<br>`3`: `Canceled_AbortedCommitted`<br>`4`: `Canceled_AuthorizationExpired`<br>`5`: `Canceled_Manually`|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|X-CDNIgnore|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Powered-by-VTEX-Janus-Router|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Acknowledgment reservation

<a id="opIdAcknowledgmentReservation"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/reservations/string/acknowledge \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/logistics/pvt/inventory/reservations/{reservationId}/acknowledge`

Acknowledges reservations made by reservation ID.

<h3 id="acknowledgment-reservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|reservationId|path|string|true|none|

<h3 id="acknowledgment-reservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Cancel reservation

<a id="opIdCancelReservation"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/reservations/string/cancel \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/logistics/pvt/inventory/reservations/{reservationId}/cancel`

Cancels reservation by reservation ID.

<h3 id="cancel-reservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|reservationId|path|string|true|none|

<h3 id="cancel-reservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Confirm reservation

<a id="opIdConfirmReservation"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/reservations/string/confirm \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/logistics/pvt/inventory/reservations/{reservationId}/confirm`

Confirms reservation by reservation ID.

<h3 id="confirm-reservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|reservationId|path|string|true|none|

<h3 id="confirm-reservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List reservation by warehouse and SKU

<a id="opIdReservationbyWarehouseandSku"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/inventory/reservations/string/string \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/inventory/reservations/{warehouseId}/{skuId}`

Lists reservations in your store, by searching through warehouse and SKU.

<h3 id="list-reservation-by-warehouse-and-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|warehouseId|path|string|true|none|
|skuId|path|string|true|none|

<h3 id="list-reservation-by-warehouse-and-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="logistics-api-sla">SLA</h1>

## Calculate SLA

<a id="opIdCalculateSLA"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/shipping/calculate \
  -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "items": [
        {
          "additionalHandlingTime": "00:00:00",
          "dimension": {
            "height": 5,
            "length": 17,
            "weight": 150,
            "width": 17
          },
          "groupItemId": null,
          "id": "1",
          "kitItem": [
            {
              "additionalHandlingTime": "00:00:00",
              "dimension": {
                "height": 5,
                "length": 17,
                "weight": 150,
                "width": 17
              },
              "groupItemId": null,
              "id": "2000042",
              "kitItem": [],
              "price": 0,
              "quantity": 1
            },
            {
              "additionalHandlingTime": "00:00:00",
              "dimension": {
                "height": 5,
                "length": 17,
                "weight": 150,
                "width": 17
              },
              "groupItemId": null,
              "id": "2390059",
              "kitItem": [],
              "price": 0,
              "quantity": 1
            }
          ],
          "price": 0,
          "quantity": 1
        }
      ],
      "location": {
        "country": "BRA",
        "point": [
          -43.32475950000003,
          -22.9999575
        ],
        "zipCode": "22780084"
      },
      "salesChannel": "1"
    }
  ]'
```

`POST /api/logistics/pvt/shipping/calculate`

Endpoint used by the checkout to calculate the Service Level Agreement (SLA), a contract between the store and shoppers on the order's fulfillment conditions, such as the shipping estimated date. 

The calculation of the estimated date considers the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) and [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) related to the order.

> Body parameter

```json
[
  {
    "items": [
      {
        "additionalHandlingTime": "00:00:00",
        "dimension": {
          "height": 5,
          "length": 17,
          "weight": 150,
          "width": 17
        },
        "groupItemId": null,
        "id": "1",
        "kitItem": [
          {
            "additionalHandlingTime": "00:00:00",
            "dimension": {
              "height": 5,
              "length": 17,
              "weight": 150,
              "width": 17
            },
            "groupItemId": null,
            "id": "2000042",
            "kitItem": [],
            "price": 0,
            "quantity": 1
          },
          {
            "additionalHandlingTime": "00:00:00",
            "dimension": {
              "height": 5,
              "length": 17,
              "weight": 150,
              "width": 17
            },
            "groupItemId": null,
            "id": "2390059",
            "kitItem": [],
            "price": 0,
            "quantity": 1
          }
        ],
        "price": 0,
        "quantity": 1
      }
    ],
    "location": {
      "country": "BRA",
      "point": [
        -43.32475950000003,
        -22.9999575
      ],
      "zipCode": "22780084"
    },
    "salesChannel": "1"
  }
]
```

<h3 id="calculate-sla-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[object]|true|none|
|» items|body|[object]|true|none|
|» » additionalHandlingTime|body|string|true|none|
|» » dimension|body|object|true|none|
|» » » height|body|integer(int32)|true|none|
|» » » length|body|integer(int32)|true|none|
|» » » weight|body|integer(int32)|true|none|
|» » » width|body|integer(int32)|true|none|
|» » groupItemId|body|string \| null|true|none|
|» » id|body|string|true|none|
|» » kitItem|body|[object]|true|none|
|» » » additionalHandlingTime|body|string|true|none|
|» » » dimension|body|object|true|none|
|» » » » height|body|integer(int32)|true|none|
|» » » » length|body|integer(int32)|true|none|
|» » » » weight|body|integer(int32)|true|none|
|» » » » width|body|integer(int32)|true|none|
|» » » groupItemId|body|string \| null|true|none|
|» » » id|body|string|true|none|
|» » » kitItem|body|[string]|true|none|
|» » » price|body|integer(int32)|true|none|
|» » » quantity|body|integer(int32)|true|none|
|» » price|body|integer(int32)|true|none|
|» » quantity|body|integer(int32)|true|none|
|» location|body|object|true|none|
|» » country|body|string|true|none|
|» » point|body|[number]|true|none|
|» » zipCode|body|string|true|none|
|» salesChannel|body|string|true|none|

> Example responses

> 200 Response

```json
[
  [
    {
      "aditionalTimeBlockedDays": "00:00:00",
      "availabilityQuantity": 500,
      "carrierSchedule": [],
      "coordinates": null,
      "deliveryOnWeekends": false,
      "deliveryWindows": [
        {
          "endDateUtc": "2016-04-20T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-20T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-20T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-20T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-21T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-21T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-21T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-21T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-22T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-22T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-22T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-22T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-23T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-23T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-23T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-23T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-24T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-24T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-24T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-24T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-25T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-25T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-25T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-25T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-26T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-26T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-26T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-26T12:01:00+00:00"
        }
      ],
      "dockId": "1_1_1",
      "dockTime": "00:00:00",
      "freightTableId": "teste1",
      "freightTableName": "Entrega Agendada",
      "itemId": "2389945",
      "listPrice": 5.25,
      "location": {
        "country": "BRA",
        "deliveryPointId": null,
        "inStore": {
          "IsCheckedIn": false,
          "StoreId": "180082"
        },
        "point": null,
        "zipCode": "22220070"
      },
      "pickupStoreInfo": null,
      "quantity": 1,
      "restrictedFreight": null,
      "salesChannel": "1",
      "slaType": "Entrega Agendada",
      "slaTypeName": "Entrega Agendada",
      "timeToDockPlusDockTime": "1.00:00:00",
      "totalTime": "3.00:00:00",
      "transitTime": "2.00:00:00",
      "wareHouseId": "1937054"
    },
    {
      "aditionalTimeBlockedDays": "00:00:00",
      "availabilityQuantity": 500,
      "carrierSchedule": [],
      "coordinates": null,
      "deliveryOnWeekends": false,
      "deliveryWindows": [
        {
          "endDateUtc": "2016-04-20T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-20T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-20T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-20T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-21T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-21T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-21T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-21T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-22T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-22T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-22T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-22T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-23T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-23T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-23T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-23T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-24T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-24T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-24T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-24T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-25T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-25T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-25T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-25T12:01:00+00:00"
        },
        {
          "endDateUtc": "2016-04-26T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-26T08:00:00+00:00"
        },
        {
          "endDateUtc": "2016-04-26T18:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-26T12:01:00+00:00"
        }
      ],
      "dockId": "1_1_1",
      "dockTime": "00:00:00",
      "freightTableId": "teste1",
      "freightTableName": "Entrega Agendada",
      "itemId": "2390059",
      "listPrice": 5.25,
      "location": {
        "country": "BRA",
        "deliveryPointId": null,
        "inStore": {
          "IsCheckedIn": false,
          "StoreId": "180082"
        },
        "point": null,
        "zipCode": "22220070"
      },
      "pickupStoreInfo": null,
      "quantity": 1,
      "restrictedFreight": null,
      "salesChannel": "1",
      "slaType": "Entrega Agendada",
      "slaTypeName": "Entrega Agendada",
      "timeToDockPlusDockTime": "1.00:00:00",
      "totalTime": "3.00:00:00",
      "transitTime": "2.00:00:00",
      "wareHouseId": "1937054"
    },
    {
      "aditionalTimeBlockedDays": "00:00:00",
      "availabilityQuantity": 500,
      "carrierSchedule": [],
      "coordinates": null,
      "deliveryOnWeekends": true,
      "deliveryWindows": [],
      "dockId": "1_1_1",
      "dockTime": "00:00:00",
      "freightTableId": "11cc4b6",
      "freightTableName": "Correios PAC",
      "itemId": "2389945",
      "listPrice": 7.88,
      "location": {
        "country": "BRA",
        "deliveryPointId": null,
        "inStore": {
          "IsCheckedIn": false,
          "StoreId": "180082"
        },
        "point": null,
        "zipCode": "22220070"
      },
      "pickupStoreInfo": null,
      "quantity": 1,
      "restrictedFreight": null,
      "salesChannel": "1",
      "slaType": "Normal",
      "slaTypeName": "Normal",
      "timeToDockPlusDockTime": "1.00:00:00",
      "totalTime": "3.00:00:00",
      "transitTime": "2.00:00:00",
      "wareHouseId": "1937054"
    },
    {
      "aditionalTimeBlockedDays": "00:00:00",
      "availabilityQuantity": 500,
      "carrierSchedule": [],
      "coordinates": null,
      "deliveryOnWeekends": true,
      "deliveryWindows": [],
      "dockId": "1_1_1",
      "dockTime": "00:00:00",
      "freightTableId": "11cc4b6",
      "freightTableName": "Correios PAC",
      "itemId": "2390059",
      "listPrice": 7.88,
      "location": {
        "country": "BRA",
        "deliveryPointId": null,
        "inStore": {
          "IsCheckedIn": false,
          "StoreId": "180082"
        },
        "point": null,
        "zipCode": "22220070"
      },
      "pickupStoreInfo": null,
      "quantity": 1,
      "restrictedFreight": null,
      "salesChannel": "1",
      "slaType": "Normal",
      "slaTypeName": "Normal",
      "timeToDockPlusDockTime": "1.00:00:00",
      "totalTime": "3.00:00:00",
      "transitTime": "2.00:00:00",
      "wareHouseId": "1937054"
    }
  ]
]
```

<h3 id="calculate-sla-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="calculate-sla-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[object]]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|X-CDNIgnore|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Powered-by-VTEX-Janus-Router|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="logistics-api-polygons">Polygons</h1>

## List paged polygons

<a id="opIdPagedPolygons"></a>

> Code samples

```bash
curl 'https://example.com/api/logistics/pvt/configuration/geoshape?page=%7B%7Bpage%7D%7D&perPage=%7B%7BperPage%7D%7D' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/geoshape`

Lists stored polygons.

<h3 id="list-paged-polygons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|true|none|
|perPage|query|string|true|none|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

<h3 id="list-paged-polygons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create/update polygon

<a id="opIdCreateUpdatePolygon"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/geoshape \
  -X PUT \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "geoShape": {
      "coordinates": [
        [
          0
        ]
      ]
    },
    "name": "string"
  }'
```

`PUT /api/logistics/pvt/configuration/geoshape`

Creates or updates your store's polygons by geoshape coordinates and polygon name.

> Body parameter

```json
{
  "geoShape": {
    "coordinates": [
      [
        0
      ]
    ]
  },
  "name": "string"
}
```

<h3 id="createupdate-polygon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|body|body|object|true|none|
|» geoShape|body|object|true|none|
|» » coordinates|body|[[number]]|true|none|
|» name|body|string|true|none|

<h3 id="createupdate-polygon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List polygon by ID

<a id="opIdPolygonbyId"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/geoshape/string \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/geoshape/{polygonName}`

Lists your store's polygons by searching through polygon name

<h3 id="list-polygon-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|polygonName|path|string|true|none|

<h3 id="list-polygon-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete polygon

<a id="opIdDeletePolygon"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/geoshape/string \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/logistics/pvt/configuration/geoshape/{polygonName}`

Deletes polygon set up in your store, by polygon name.

<h3 id="delete-polygon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|polygonName|path|string|true|none|

<h3 id="delete-polygon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="logistics-api-freight-values">Freight Values</h1>

## Create/update freight values

<a id="opIdCreate/UpdateFreightValues"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/freights/carrier123/values/update \
  -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "absoluteMoneyCost": "1.00",
      "country": "BRA",
      "maxVolume": 1000000000,
      "operationType": 1,
      "polygon": "polygon2",
      "pricePercent": 10,
      "pricePercentByWeight": 0,
      "timeCost": "2.00:00:00",
      "weightEnd": 1000,
      "weightStart": 1,
      "zipCodeEnd": "1234500",
      "zipCodeStart": "1000000"
    }
  ]'
```

`POST /api/logistics/pvt/configuration/freights/{carrierId}/values/update`

Creates or updates the freight values of your store's carriers. Learn more in [Shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127#).

> Body parameter

```json
[
  {
    "absoluteMoneyCost": "1.00",
    "country": "BRA",
    "maxVolume": 1000000000,
    "operationType": 1,
    "polygon": "polygon2",
    "pricePercent": 10,
    "pricePercentByWeight": 0,
    "timeCost": "2.00:00:00",
    "weightEnd": 1000,
    "weightStart": 1,
    "zipCodeEnd": "1234500",
    "zipCodeStart": "1000000"
  }
]
```

<h3 id="createupdate-freight-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|carrierId|path|string|true|none|
|body|body|[object]|true|none|
|» absoluteMoneyCost|body|string|true|Fixed shipping cost to be charged in a decimal number.|
|» country|body|string|true|Three letter ISO code for the country where the delivery will take place.|
|» maxVolume|body|integer(int32)|true|Maximum volume that can be transported by the carrier in cm³.|
|» operationType|body|integer(int32)|true|Indicates desired action for the object. Possible values are `1` (Insert), `2` (Update) or `3`(Delete).|
|» polygon|body|string|true|Polygon ID, according to the [geolocation](https://help.vtex.com/en/tutorial/registering-geolocation/) feature.|
|» pricePercent|body|integer(int32)|true|[Price-based additional shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV), calculated based on the total price of the order, in decimal number. You must fill in this field with a percentage value. For example, for an additional charge of 10%, fill in the table with 10.|
|» pricePercentByWeight|body|integer(int32)|true|[Weight-based additional shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV), calculated based on the total weight of the order.|
|» timeCost|body|string|true|Delivery time frame informed by the carrier, in the format DD.HH:MM:SS.|
|» weightEnd|body|integer(int32)|true|Maximum weight allowed.|
|» weightStart|body|integer(int32)|true|Minimum weight allowed|
|» zipCodeEnd|body|string|true|End of postal code interval.|
|» zipCodeStart|body|string|true|Start of postal code interval.|

<h3 id="createupdate-freight-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List freight values

<a id="opIdFreightValues"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/freights/carrier-123/12345000/values \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/freights/{carrierId}/{cep}/values`

Lists freight values apointed to your store's carriers, searching by carrier ID and postal code (`cep`).

<h3 id="list-freight-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|carrierId|path|string|true|Carrier ID|
|cep|path|string|true|Postal code.|

> Example responses

> 200 Response

```json
[
  {
    "absoluteMoneyCost": 1,
    "country": "BRA",
    "maxVolume": 1000000000,
    "minimumValueInsurance": 0,
    "operationType": 0,
    "polygon": "",
    "pricePercent": 0,
    "pricePercentByWeight": 0,
    "restrictedFreights": [],
    "timeCost": "2.00:00:00",
    "weightEnd": 1000,
    "weightStart": 1,
    "zipCodeEnd": "99999999",
    "zipCodeStart": "0"
  },
  {
    "absoluteMoneyCost": 15,
    "country": "BRA",
    "maxVolume": 1000000000,
    "minimumValueInsurance": 0,
    "operationType": 0,
    "polygon": "",
    "pricePercent": 0,
    "pricePercentByWeight": 0,
    "restrictedFreights": [],
    "timeCost": "2.00:00:00",
    "weightEnd": 10000,
    "weightStart": 1001.001,
    "zipCodeEnd": "99999999",
    "zipCodeStart": "0"
  },
  {
    "absoluteMoneyCost": 20,
    "country": "BRA",
    "maxVolume": 1000000000,
    "minimumValueInsurance": 0,
    "operationType": 0,
    "polygon": "",
    "pricePercent": 0,
    "pricePercentByWeight": 0,
    "restrictedFreights": [],
    "timeCost": "2.00:00:00",
    "weightEnd": 100000,
    "weightStart": 10001.001,
    "zipCodeEnd": "99999999",
    "zipCodeStart": "0"
  }
]
```

<h3 id="list-freight-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-freight-values-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» absoluteMoneyCost|number|true|none|none|
|» country|string|true|none|none|
|» maxVolume|number|true|none|none|
|» minimumValueInsurance|number|true|none|none|
|» operationType|integer(int32)|true|none|none|
|» polygon|string|true|none|none|
|» pricePercent|number|true|none|none|
|» pricePercentByWeight|number|true|none|none|
|» restrictedFreights|[string]|true|none|none|
|» timeCost|string|true|none|none|
|» weightEnd|number|true|none|none|
|» weightStart|number|true|none|none|
|» zipCodeEnd|string|true|none|none|
|» zipCodeStart|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Powered-by-VTEX-Janus-Router|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="logistics-api-pickup-points">Pickup points</h1>

## List all pickup points

<a id="opIdListAllPickupPpoints"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/pickuppoints \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/pickuppoints`

Lists all of your store's pickup points.

<h3 id="list-all-pickup-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

> Example responses

> 200 Response

```json
[
  {
    "address": {
      "city": "Rio de Janeiro",
      "complement": "",
      "country": {
        "acronym": "BRA",
        "name": "Brazil"
      },
      "location": {
        "latitude": -22.92860984802246,
        "longitude": -22.92860984802246
      },
      "neighborhood": "Catete",
      "number": "",
      "postalCode": "22220070",
      "state": "RJ",
      "street": "Rua Artur Bernardes"
    },
    "businessHours": [
      {
        "closingTime": "21:00:00",
        "dayOfWeek": 0,
        "openingTime": "11:00:00"
      }
    ],
    "description": "Loja Barra da Tijuca",
    "formatted_address": "undefined",
    "id": "12345",
    "instructions": "Loja Barra da Tijuca",
    "isActive": true,
    "name": "Loja Barra da Tijuca",
    "warehouseId": null
  }
]
```

<h3 id="list-all-pickup-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-pickup-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» accountGroupId|string|false|none|Account group ID.|
|» accountOwnerId|string|false|none|Account owner ID.|
|» accountOwnerName|string|false|none|Account owner name.|
|» address|object|false|none|none|
|» » city|string|false|none|City.|
|» » complement|string|false|none|Address complement.|
|» » country|object|false|none|none|
|» » » acronym|string|false|none|Three letter ISO code.|
|» » » name|string|false|none|Country name.|
|» » location|object|false|none|Geolocation properties.|
|» » » latitude|number|false|none|Latitude.|
|» » » longitude|number|false|none|Longitude.|
|» » neighborhood|string|false|none|Neighborhood.|
|» » number|string|false|none|Pickup point address number.|
|» » postalCode|string|false|none|Postal code.|
|» » state|string|false|none|State.|
|» » street|string|false|none|Street name.|
|» businessHours|[object]|false|none|Business hours information for each day of the week.|
|» » closingTime|string|false|none|Closing time in `hh:mm:ss`.|
|» » dayOfWeek|integer|false|none|Day of the week, from `0` (sunday) to `6` (saturday).|
|» » openingTime|string|false|none|Opening time in `hh:mm:ss`.|
|» description|string|false|none|Pickup point description.|
|» distance|number|false|none|Distance.|
|» formatted_address|string|false|none|Formated address.|
|» id|string|false|none|Pickup point ID.|
|» instructions|string|false|none|Instructions.|
|» isActive|boolean|false|none|Indicates whether pickup point is active.|
|» isThirdPartyPickup|boolean|false|none|Indicates whether pickup point is third party.|
|» name|string|false|none|Pickup point name.|
|» originalId|string|false|none|Original ID.|
|» parentAccountName|string|false|none|Parent account name.|
|» pickupHolidays|[string]|false|none|Holidays which apply for pickup point.|
|» seller|string|false|none|Seller corresponding to pickup point.|
|» tagsLabel|[string]|false|none|List of tags.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List paged Pickup Points

<a id="opIdGetpaged"></a>

> Code samples

```bash
curl 'https://example.com/api/logistics/pvt/configuration/pickuppoints/_search?page=%7B%7BpageNumber%7D%7D&pageSize=%7B%7BpageSize%7D%7D&keyword=' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/pickuppoints/_search`

Lists paged pickup points in your store.

<h3 id="list-paged-pickup-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|true|none|
|pageSize|query|string|true|none|
|keyword|query|string|true|none|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

<h3 id="list-paged-pickup-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List Pickup Point By ID

<a id="opIdGetById"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/pickuppoints/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/logistics/pvt/configuration/pickuppoints/{pickupPointId}`

Lists your store's pickup points while searching by ID.

<h3 id="list-pickup-point-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|pickupPointId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "address": {
    "city": "Rio de Janeiro",
    "complement": "",
    "country": {
      "acronym": "BRA",
      "name": "Brazil"
    },
    "location": {
      "latitude": -22.92860984802246,
      "longitude": -22.92860984802246
    },
    "neighborhood": "Catete",
    "number": "",
    "postalCode": "22220070",
    "state": "RJ",
    "street": "Rua Artur Bernardes"
  },
  "businessHours": [
    {
      "closingTime": "21:00:00",
      "dayOfWeek": 0,
      "openingTime": "11:00:00"
    }
  ],
  "description": "Loja Barra da Tijuca",
  "formatted_address": "undefined",
  "id": "12345",
  "instructions": "Loja Barra da Tijuca",
  "isActive": true,
  "name": "Loja Barra da Tijuca",
  "warehouseId": null
}
```

<h3 id="list-pickup-point-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="list-pickup-point-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|true|none|none|
|» city|string|true|none|none|
|» complement|string|true|none|none|
|» country|object|true|none|none|
|» » acronym|string|true|none|none|
|» » name|string|true|none|none|
|» location|object|true|none|none|
|» » latitude|number|true|none|none|
|» » longitude|number|true|none|none|
|» neighborhood|string|true|none|none|
|» number|string|true|none|none|
|» postalCode|string|true|none|none|
|» state|string|true|none|none|
|» street|string|true|none|none|
|businessHours|[object]|true|none|none|
|» closingTime|string|true|none|none|
|» dayOfWeek|integer(int32)|true|none|none|
|» openingTime|string|true|none|none|
|description|string|true|none|none|
|formatted_address|string|true|none|none|
|id|string|true|none|none|
|instructions|string|true|none|none|
|isActive|boolean|true|none|none|
|name|string|true|none|none|
|warehouseId|string \| null|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-CacheServer|string||none|
|200|X-Powered-by-VTEX-Janus-ApiCache|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Cache-Status-Janus-ApiCache|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create/Update Pickup Point

<a id="opIdCreateUpdatePickupPoint"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/pickuppoints/123456789 \
  -X PUT \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "address": {
      "city": "Rio de Janeiro",
      "complement": "",
      "country": {
        "acronym": "BRA",
        "name": "Brazil"
      },
      "location": {
        "latitude": -22.974477767944336,
        "longitude": -43.18672561645508
      },
      "neighborhood": "Copacabana",
      "number": "",
      "postalCode": "22070002",
      "reference": "Grey building",
      "state": "RJ",
      "street": "Avenida Atl├óntica"
    },
    "businessHours": [
      {
        "closingTime": "20:00:00",
        "dayOfWeek": 1,
        "openingTime": "08:00:00"
      },
      {
        "closingTime": "20:00:00",
        "dayOfWeek": 2,
        "openingTime": "08:00:00"
      },
      {
        "closingTime": "20:00:00",
        "dayOfWeek": 3,
        "openingTime": "08:00:00"
      },
      {
        "closingTime": "20:00:00",
        "dayOfWeek": 4,
        "openingTime": "08:00:00"
      },
      {
        "closingTime": "20:00:00",
        "dayOfWeek": 5,
        "openingTime": "08:00:00"
      }
    ],
    "description": "",
    "formatted_address": "undefined",
    "id": "1a227d3",
    "instructions": "Obrigat├│rio apresentar documento de identifica├º├úo",
    "isActive": true,
    "name": "Loja Copacabana",
    "tagsLabel": [
      "zonasul",
      "rio de janeiro"
    ]
  }'
```

`PUT /api/logistics/pvt/configuration/pickuppoints/{pickupPointId}`

Creates or updates [pickup points](https://help.vtex.com/en/subcategory/pickup-points--1c5Btie9ou2Gg2iUo0ggqM#) in your store by Pickup Point ID.

> Body parameter

```json
{
  "address": {
    "city": "Rio de Janeiro",
    "complement": "",
    "country": {
      "acronym": "BRA",
      "name": "Brazil"
    },
    "location": {
      "latitude": -22.974477767944336,
      "longitude": -43.18672561645508
    },
    "neighborhood": "Copacabana",
    "number": "",
    "postalCode": "22070002",
    "reference": "Grey building",
    "state": "RJ",
    "street": "Avenida Atl├óntica"
  },
  "businessHours": [
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 1,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 2,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 3,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 4,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 5,
      "openingTime": "08:00:00"
    }
  ],
  "description": "",
  "formatted_address": "undefined",
  "id": "1a227d3",
  "instructions": "Obrigat├│rio apresentar documento de identifica├º├úo",
  "isActive": true,
  "name": "Loja Copacabana",
  "tagsLabel": [
    "zonasul",
    "rio de janeiro"
  ]
}
```

<h3 id="createupdate-pickup-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|pickupPointId|path|string|true|Pickup Point ID. Cannot contain spaces.|
|body|body|object|true|none|
|» address|body|object|true|none|
|» » city|body|string|true|Address city.|
|» » complement|body|string|true|Address complement.|
|» » country|body|object|true|none|
|» » » acronym|body|string|true|Three letter ISO code of the address country.|
|» » » name|body|string|true|Address country name.|
|» » location|body|object|true|none|
|» » » latitude|body|number|true|latitude|
|» » » longitude|body|number|true|longitude|
|» » neighborhood|body|string|true|Address neighborhood.|
|» » number|body|string|true|Address street number.|
|» » postalCode|body|string|true|Postal code.|
|» » reference|body|string|true|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|body|string|true|Address state.|
|» » street|body|string|true|Address street name.|
|» businessHours|body|[object]|true|none|
|» » closingTime|body|string|true|none|
|» » dayOfWeek|body|integer(int32)|true|none|
|» » openingTime|body|string|true|none|
|» description|body|string|true|Pickup point description.|
|» formatted_address|body|string|true|Formated address.|
|» id|body|string|true|Pickup Point ID. Cannot contain spaces.|
|» instructions|body|string|true|Pickup point instructions.|
|» isActive|body|boolean|true|none|
|» isThirdPartyPickup|body|boolean|false|none|
|» name|body|string|true|Pickup point name.|
|» tagsLabel|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "address": {
    "city": "Rio de Janeiro",
    "complement": "",
    "country": {
      "acronym": "BRA",
      "name": "Brazil"
    },
    "location": {
      "latitude": -22.974477767944336,
      "longitude": -43.18672561645508
    },
    "neighborhood": "Copacabana",
    "number": "",
    "postalCode": "22070002",
    "reference": null,
    "state": "RJ",
    "street": "Avenida Atl├óntica"
  },
  "businessHours": [
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 1,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 2,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 3,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 4,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 5,
      "openingTime": "08:00:00"
    }
  ],
  "description": "",
  "formatted_address": "undefined",
  "id": "rteste",
  "instructions": "Obrigat├│rio apresentar documento de identifica├º├úo",
  "isActive": true,
  "name": "Loja Copacabana",
  "pickupHolidays": [],
  "tagsLabel": [
    "zonasul",
    "rio de janeiro"
  ]
}
```

<h3 id="createupdate-pickup-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="createupdate-pickup-point-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|true|none|none|
|» city|string|true|none|none|
|» complement|string|true|none|none|
|» country|object|true|none|none|
|» » acronym|string|true|none|none|
|» » name|string|true|none|none|
|» location|object|true|none|none|
|» » latitude|number|true|none|none|
|» » longitude|number|true|none|none|
|» neighborhood|string|true|none|none|
|» number|string|true|none|none|
|» postalCode|string|true|none|none|
|» reference|string \| null|true|none|none|
|» state|string|true|none|none|
|» street|string|true|none|none|
|businessHours|[object]|true|none|none|
|» closingTime|string|true|none|none|
|» dayOfWeek|integer(int32)|true|none|none|
|» openingTime|string|true|none|none|
|description|string|true|none|none|
|formatted_address|string|true|none|none|
|id|string|true|none|none|
|instructions|string|true|none|none|
|isActive|boolean|true|none|none|
|name|string|true|none|none|
|pickupHolidays|[string]|true|none|none|
|tagsLabel|[string]|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Pickup Point

<a id="opIdDelete"></a>

> Code samples

```bash
curl https://example.com/api/logistics/pvt/configuration/pickuppoints/string \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/logistics/pvt/configuration/pickuppoints/{pickupPointId}`

Deletes a given pickup point for your store, by pickup point ID.

<h3 id="delete-pickup-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|pickupPointId|path|string|true|none|

<h3 id="delete-pickup-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "Rio de Janeiro",
  "complement": "",
  "coordinates": null,
  "country": {
    "acronym": "BRA",
    "name": "Brazil"
  },
  "neighborhood": "Catete",
  "number": "100",
  "postalCode": "22220070",
  "state": "RJ",
  "street": "Artur Bernardes Street"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|complement|string|true|none|none|
|coordinates|string \| null|true|none|none|
|country|object|true|none|none|
|neighborhood|string|true|none|none|
|number|string|true|none|none|
|postalCode|string|true|none|none|
|state|string|true|none|none|
|street|string|true|none|none|

<h2 id="tocS_Address1">Address1</h2>
<!-- backwards compatibility -->
<a id="schemaaddress1"></a>
<a id="schema_Address1"></a>
<a id="tocSaddress1"></a>
<a id="tocsaddress1"></a>

```json
{
  "city": "Rio de Janeiro",
  "complement": "",
  "coordinates": [
    [
      -43.18228090000002,
      -22.9460398
    ]
  ],
  "country": {
    "acronym": "BRA",
    "name": "Brazil"
  },
  "neighborhood": "Catete",
  "number": "100",
  "postalCode": "22220070",
  "state": "RJ",
  "street": "Artur Bernardes Street"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|complement|string|true|none|none|
|coordinates|[[number]]|true|none|none|
|country|object|true|none|none|
|neighborhood|string|true|none|none|
|number|string|true|none|none|
|postalCode|string|true|none|none|
|state|string|true|none|none|
|street|string|true|none|none|

<h2 id="tocS_Address2">Address2</h2>
<!-- backwards compatibility -->
<a id="schemaaddress2"></a>
<a id="schema_Address2"></a>
<a id="tocSaddress2"></a>
<a id="tocsaddress2"></a>

```json
{
  "city": "Rio de Janeiro",
  "complement": "",
  "country": {
    "acronym": "BRA",
    "name": "Brazil"
  },
  "location": {
    "latitude": -22.974477767944336,
    "longitude": -43.18672561645508
  },
  "neighborhood": "Copacabana",
  "number": "",
  "postalCode": "22070002",
  "reference": null,
  "state": "RJ",
  "street": "Avenida Atl├óntica"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|complement|string|true|none|none|
|country|object|true|none|none|
|location|object|true|none|none|
|neighborhood|string|true|none|none|
|number|string|true|none|none|
|postalCode|string|true|none|none|
|reference|string \| null|true|none|none|
|state|string|true|none|none|
|street|string|true|none|none|

<h2 id="tocS_Address4">Address4</h2>
<!-- backwards compatibility -->
<a id="schemaaddress4"></a>
<a id="schema_Address4"></a>
<a id="tocSaddress4"></a>
<a id="tocsaddress4"></a>

```json
{
  "city": "Rio de Janeiro",
  "complement": "",
  "country": {
    "acronym": "BRA",
    "name": "Brazil"
  },
  "location": {
    "latitude": -22.92860984802246,
    "longitude": -22.92860984802246
  },
  "neighborhood": "Catete",
  "number": "",
  "postalCode": "22220070",
  "state": "RJ",
  "street": "Rua Artur Bernardes"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|complement|string|true|none|none|
|country|object|true|none|none|
|location|object|true|none|none|
|neighborhood|string|true|none|none|
|number|string|true|none|none|
|postalCode|string|true|none|none|
|state|string|true|none|none|
|street|string|true|none|none|

<h2 id="tocS_Balance">Balance</h2>
<!-- backwards compatibility -->
<a id="schemabalance"></a>
<a id="schema_Balance"></a>
<a id="tocSbalance"></a>
<a id="tocsbalance"></a>

```json
{
  "hasUnlimitedQuantity": false,
  "reservedQuantity": 9,
  "totalQuantity": 101,
  "warehouseId": "1937054",
  "warehouseName": "Estoque A"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasUnlimitedQuantity|boolean|true|none|none|
|reservedQuantity|integer(int32)|true|none|none|
|totalQuantity|integer(int32)|true|none|none|
|warehouseId|string|true|none|none|
|warehouseName|string|true|none|none|

<h2 id="tocS_BusinessHour">BusinessHour</h2>
<!-- backwards compatibility -->
<a id="schemabusinesshour"></a>
<a id="schema_BusinessHour"></a>
<a id="tocSbusinesshour"></a>
<a id="tocsbusinesshour"></a>

```json
{
  "closingTime": "20:00:00",
  "dayOfWeek": 1,
  "openingTime": "08:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closingTime|string|true|none|none|
|dayOfWeek|integer(int32)|true|none|none|
|openingTime|string|true|none|none|

<h2 id="tocS_CalculateSLARequest">CalculateSLARequest</h2>
<!-- backwards compatibility -->
<a id="schemacalculateslarequest"></a>
<a id="schema_CalculateSLARequest"></a>
<a id="tocScalculateslarequest"></a>
<a id="tocscalculateslarequest"></a>

```json
{
  "items": [
    {
      "additionalHandlingTime": "00:00:00",
      "dimension": {
        "height": 5,
        "length": 17,
        "weight": 150,
        "width": 17
      },
      "groupItemId": null,
      "id": "1",
      "kitItem": [
        {
          "additionalHandlingTime": "00:00:00",
          "dimension": {
            "height": 5,
            "length": 17,
            "weight": 150,
            "width": 17
          },
          "groupItemId": null,
          "id": "2000042",
          "kitItem": [],
          "price": 0,
          "quantity": 1
        },
        {
          "additionalHandlingTime": "00:00:00",
          "dimension": {
            "height": 5,
            "length": 17,
            "weight": 150,
            "width": 17
          },
          "groupItemId": null,
          "id": "2390059",
          "kitItem": [],
          "price": 0,
          "quantity": 1
        }
      ],
      "price": 0,
      "quantity": 1
    }
  ],
  "location": {
    "country": "BRA",
    "point": [
      -43.32475950000003,
      -22.9999575
    ],
    "zipCode": "22780084"
  },
  "salesChannel": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|location|object|true|none|none|
|salesChannel|string|true|none|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "acronym": "BRA",
  "name": "Brazil"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acronym|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_CreateReservation">CreateReservation</h2>
<!-- backwards compatibility -->
<a id="schemacreatereservation"></a>
<a id="schema_CreateReservation"></a>
<a id="tocScreatereservation"></a>
<a id="tocscreatereservation"></a>

```json
{
  "AuthorizedDateUtc": "2016-04-15T19:59:20.0397988+00:00",
  "CanceledDateUtc": "0001-01-01T00:00:00+00:00",
  "ConfirmedDateUtc": "0001-01-01T00:00:00+00:00",
  "Errors": [],
  "IsSucess": true,
  "LastUpdateDateUtc": "2016-04-15T19:59:20.0397988+00:00",
  "LockId": "3bfe679d-c0a8-475a-b315-706f84a9deb4",
  "MaximumConfirmationDateUtc": "2016-04-15T20:09:20.0397988+00:00",
  "PickupPointItemOptions": null,
  "ReservationDateUtc": "2016-04-15T19:59:20.0397988+00:00",
  "SalesChannel": "2",
  "SlaRequest": [
    {
      "deliveryWindows": null,
      "dockId": "1_1_1",
      "dockTime": "00:00:00",
      "freightTableId": "11cc4b6",
      "freightTableName": "Correios PAC",
      "item": {
        "additionalHandlingTime": "00:00:00",
        "dimension": {
          "height": 10,
          "length": 35,
          "maxSumDimension": 0,
          "weight": 800,
          "width": 12
        },
        "groupItemId": null,
        "id": "2390059",
        "kitItem": [],
        "modal": null,
        "price": 0,
        "quantity": 1,
        "unlimitedQuantity": false
      },
      "listPrice": 10.5,
      "location": {
        "country": "BRA",
        "deliveryPointId": null,
        "inStore": {
          "IsCheckedIn": false,
          "StoreId": "180082"
        },
        "point": null,
        "zipCode": "22220070"
      },
      "pickupStoreInfo": null,
      "promotionalPrice": 10.5,
      "slaType": "Normal",
      "slaTypeName": "Normal",
      "timeToDockPlusDockTime": "1.00:00:00",
      "totalTime": "3.00:00:00",
      "transitTime": "2.00:00:00",
      "wareHouseId": "1937054",
      "wmsEndPoint": ""
    }
  ],
  "Status": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizedDateUtc|string|true|none|none|
|CanceledDateUtc|string|true|none|none|
|ConfirmedDateUtc|string|true|none|none|
|Errors|[string]|true|none|none|
|IsSucess|boolean|true|none|none|
|LastUpdateDateUtc|string|true|none|none|
|LockId|string|true|none|none|
|MaximumConfirmationDateUtc|string|true|none|none|
|PickupPointItemOptions|string \| null|true|none|none|
|ReservationDateUtc|string|true|none|none|
|SalesChannel|string|true|none|none|
|SlaRequest|[object]|true|none|none|
|Status|integer(int32)|true|none|none|

<h2 id="tocS_CreateReservationRequest">CreateReservationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatereservationrequest"></a>
<a id="schema_CreateReservationRequest"></a>
<a id="tocScreatereservationrequest"></a>
<a id="tocscreatereservationrequest"></a>

```json
{
  "autorizationExpirationTTL": "00:10:00",
  "deliveryItemOptions": [
    {
      "aditionalTimeBlockedDays": "00:00:00",
      "deliveryWindows": [],
      "dockId": "1a8bce3",
      "dockTime": "00:00:00",
      "item": {
        "additionalHandlingTime": "00:00:00",
        "dimension": {
          "height": 1,
          "length": 1,
          "weight": 150,
          "width": 1
        },
        "groupItemId": null,
        "id": "2390059",
        "kitItem": [],
        "price": 0,
        "quantity": 1
      },
      "listPrice": 10.5,
      "location": {
        "country": "BRA",
        "inStore": {
          "IsCheckedIn": false,
          "StoreId": null
        },
        "zipCode": "22220070"
      },
      "promotionalPrice": 10.5,
      "slaType": "Expressa",
      "slaTypeName": "Expressa",
      "timeToDockPlusDockTime": "1.00:00:00",
      "totalTime": "3.00:00:00",
      "transitTime": "2.00:00:00",
      "wareHouseId": null
    }
  ],
  "lockId": null,
  "salesChannel": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autorizationExpirationTTL|string|true|none|none|
|deliveryItemOptions|[object]|true|none|none|
|lockId|string \| null|true|none|none|
|salesChannel|string|true|none|none|

<h2 id="tocS_CreateUpdate">CreateUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdate"></a>
<a id="schema_CreateUpdate"></a>
<a id="tocScreateupdate"></a>
<a id="tocscreateupdate"></a>

```json
{
  "address": {
    "city": "Rio de Janeiro",
    "complement": "",
    "country": {
      "acronym": "BRA",
      "name": "Brazil"
    },
    "location": {
      "latitude": -22.974477767944336,
      "longitude": -43.18672561645508
    },
    "neighborhood": "Copacabana",
    "number": "",
    "postalCode": "22070002",
    "reference": null,
    "state": "RJ",
    "street": "Avenida Atl├óntica"
  },
  "businessHours": [
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 1,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 2,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 3,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 4,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 5,
      "openingTime": "08:00:00"
    }
  ],
  "description": "",
  "formatted_address": "undefined",
  "id": "rteste",
  "instructions": "Obrigat├│rio apresentar documento de identifica├º├úo",
  "isActive": true,
  "name": "Loja Copacabana",
  "pickupHolidays": [],
  "tagsLabel": [
    "zonasul",
    "rio de janeiro"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|true|none|none|
|businessHours|[object]|true|none|none|
|description|string|true|none|none|
|formatted_address|string|true|none|none|
|id|string|true|none|none|
|instructions|string|true|none|none|
|isActive|boolean|true|none|none|
|name|string|true|none|none|
|pickupHolidays|[string]|true|none|none|
|tagsLabel|[string]|true|none|none|

<h2 id="tocS_CreateUpdateCarrierDeliveryWindowsRequest">CreateUpdateCarrierDeliveryWindowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdatecarrierdeliverywindowsrequest"></a>
<a id="schema_CreateUpdateCarrierDeliveryWindowsRequest"></a>
<a id="tocScreateupdatecarrierdeliverywindowsrequest"></a>
<a id="tocscreateupdatecarrierdeliverywindowsrequest"></a>

```json
{
  "carrierSchedule": [],
  "dayOfWeekForDelivery": [
    {
      "dayOfWeek": 0,
      "deliveryRanges": [
        {
          "endTime": "12:00:00",
          "listPrice": 10,
          "startTime": "08:00:00"
        },
        {
          "endTime": "18:00:00",
          "listPrice": 10,
          "startTime": "12:01:00"
        }
      ]
    },
    {
      "dayOfWeek": 1,
      "deliveryRanges": [
        {
          "endTime": "12:00:00",
          "listPrice": 10,
          "startTime": "08:00:00"
        },
        {
          "endTime": "18:00:00",
          "listPrice": 10,
          "startTime": "12:01:00"
        }
      ]
    },
    {
      "dayOfWeek": 2,
      "deliveryRanges": [
        {
          "endTime": "12:00:00",
          "listPrice": 10,
          "startTime": "08:00:00"
        },
        {
          "endTime": "18:00:00",
          "listPrice": 10,
          "startTime": "12:01:00"
        }
      ]
    },
    {
      "dayOfWeek": 3,
      "deliveryRanges": [
        {
          "endTime": "12:00:00",
          "listPrice": 10,
          "startTime": "08:00:00"
        },
        {
          "endTime": "18:00:00",
          "listPrice": 10,
          "startTime": "12:01:00"
        }
      ]
    },
    {
      "dayOfWeek": 4,
      "deliveryRanges": [
        {
          "endTime": "12:00:00",
          "listPrice": 10,
          "startTime": "08:00:00"
        },
        {
          "endTime": "18:00:00",
          "listPrice": 10,
          "startTime": "12:01:00"
        }
      ]
    },
    {
      "dayOfWeek": 5,
      "deliveryRanges": [
        {
          "endTime": "12:00:00",
          "listPrice": 10,
          "startTime": "08:00:00"
        },
        {
          "endTime": "18:00:00",
          "listPrice": 10,
          "startTime": "12:01:00"
        }
      ]
    },
    {
      "dayOfWeek": 6,
      "deliveryRanges": [
        {
          "endTime": "12:00:00",
          "listPrice": 10,
          "startTime": "08:00:00"
        },
        {
          "endTime": "18:00:00",
          "listPrice": 10,
          "startTime": "12:01:00"
        }
      ]
    }
  ],
  "deliveryOnWeekends": false,
  "factorCubicWeight": null,
  "id": "11cc4b5",
  "maxDimension": {
    "height": null,
    "length": null,
    "maxSumDimension": null
  },
  "maxRangeDelivery": 7,
  "minimunCubicWeight": null,
  "modals": [],
  "name": "Entrega Agendada",
  "numberOfItemsPerShipment": null,
  "onlyItemsWithDefinedModal": false,
  "scheduledDelivery": true,
  "slaType": "Entrega Agendada"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrierSchedule|[string]|true|none|none|
|dayOfWeekForDelivery|[object]|true|none|Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.|
|deliveryOnWeekends|boolean|true|none|none|
|factorCubicWeight|string \| null|true|none|none|
|id|string|true|none|none|
|maxDimension|object|true|none|none|
|maxRangeDelivery|integer(int32)|true|none|none|
|minimunCubicWeight|string \| null|true|none|none|
|modals|[string]|true|none|none|
|name|string|true|none|none|
|numberOfItemsPerShipment|string \| null|true|none|none|
|onlyItemsWithDefinedModal|boolean|true|none|none|
|scheduledDelivery|boolean|true|none|none|
|slaType|string|true|none|none|

<h2 id="tocS_CreateUpdateCarrierRequest">CreateUpdateCarrierRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdatecarrierrequest"></a>
<a id="schema_CreateUpdateCarrierRequest"></a>
<a id="tocScreateupdatecarrierrequest"></a>
<a id="tocscreateupdatecarrierrequest"></a>

```json
{
  "carrierSchedule": [],
  "dayOfWeekBlockeds": [],
  "dayOfWeekForDelivery": null,
  "deliveryOnWeekends": false,
  "exclusiveToDeliveryPoints": false,
  "factorCubicWeight": null,
  "freightTableProcessStatus": 1,
  "freightTableValueError": null,
  "freightValue": [],
  "id": "13942e4",
  "isPolygon": false,
  "maxDimension": {
    "height": 0,
    "length": 0,
    "maxSumDimension": 0,
    "weight": 0,
    "width": 0
  },
  "maxRangeDelivery": 0,
  "minimunCubicWeight": 0,
  "modals": [],
  "name": "Transportadora Expressa",
  "numberOfItemsPerShipment": null,
  "onlyItemsWithDefinedModal": false,
  "scheduledDelivery": false,
  "slaType": "Expressa"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrierSchedule|[string]|true|none|none|
|dayOfWeekBlockeds|[string]|true|none|none|
|dayOfWeekForDelivery|[object]|true|none|Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.|
|deliveryOnWeekends|boolean|true|none|none|
|exclusiveToDeliveryPoints|boolean|true|none|none|
|factorCubicWeight|string \| null|true|none|none|
|freightTableProcessStatus|integer(int32)|true|none|none|
|freightTableValueError|string \| null|true|none|none|
|freightValue|[string]|true|none|none|
|id|string|true|none|none|
|isPolygon|boolean|true|none|none|
|maxDimension|object|true|none|none|
|maxRangeDelivery|integer(int32)|true|none|none|
|minimunCubicWeight|integer(int32)|true|none|none|
|modals|[string]|true|none|none|
|name|string|true|none|none|
|numberOfItemsPerShipment|string \| null|true|none|none|
|onlyItemsWithDefinedModal|boolean|true|none|none|
|scheduledDelivery|boolean|true|none|none|
|slaType|string|true|none|none|

<h2 id="tocS_CreateUpdateDockRequest">CreateUpdateDockRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdatedockrequest"></a>
<a id="schema_CreateUpdateDockRequest"></a>
<a id="tocScreateupdatedockrequest"></a>
<a id="tocscreateupdatedockrequest"></a>

```json
{
  "address": {
    "city": "Rio de Janeiro",
    "complement": "",
    "coordinates": [
      [
        -43.18228090000002,
        -22.9460398
      ]
    ],
    "country": {
      "acronym": "BRA",
      "name": "Brazil"
    },
    "neighborhood": "Catete",
    "number": "100",
    "postalCode": "22220070",
    "state": "RJ",
    "street": "Artur Bernardes Street"
  },
  "dockTimeFake": "00:00:00",
  "freightTableIds": [],
  "id": "catete",
  "name": "Loja Catete",
  "pickupStoreInfo": {
    "additionalInfo": null,
    "address": {
      "city": "Rio de Janeiro",
      "complement": "",
      "coordinates": null,
      "country": {
        "acronym": "BRA",
        "name": "Brazil"
      },
      "neighborhood": "Catete",
      "number": "100",
      "postalCode": "22220070",
      "state": "RJ",
      "street": "Artur Bernardes Street"
    },
    "dockId": null,
    "friendlyName": null,
    "isPickupStore": false,
    "storeId": null
  },
  "priority": 0,
  "salesChannel": null,
  "salesChannels": [
    "1"
  ],
  "timeFakeOverhead": "00:00:00",
  "wmsEndPoint": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|true|none|none|
|dockTimeFake|string|true|none|none|
|freightTableIds|[string]|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|pickupStoreInfo|object|true|none|none|
|priority|integer(int32)|true|none|none|
|salesChannel|string \| null|true|none|none|
|salesChannels|[string]|true|none|none|
|timeFakeOverhead|string|true|none|none|
|wmsEndPoint|string|true|none|none|

<h2 id="tocS_CreateUpdateFreightValuesRequest">CreateUpdateFreightValuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdatefreightvaluesrequest"></a>
<a id="schema_CreateUpdateFreightValuesRequest"></a>
<a id="tocScreateupdatefreightvaluesrequest"></a>
<a id="tocscreateupdatefreightvaluesrequest"></a>

```json
{
  "absoluteMoneyCost": "1.00",
  "country": "BRA",
  "maxVolume": 1000000000,
  "operationType": 1,
  "polygon": "",
  "pricePercent": 0,
  "pricePercentByWeight": 0,
  "timeCost": "2.00:00:00",
  "weightEnd": 1000,
  "weightStart": 1,
  "zipCodeEnd": "99999999",
  "zipCodeStart": "0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absoluteMoneyCost|string|true|none|none|
|country|string|true|none|none|
|maxVolume|integer(int32)|true|none|none|
|operationType|integer(int32)|true|none|none|
|polygon|string|true|none|none|
|pricePercent|integer(int32)|true|none|none|
|pricePercentByWeight|integer(int32)|true|none|none|
|timeCost|string|true|none|none|
|weightEnd|integer(int32)|true|none|none|
|weightStart|integer(int32)|true|none|none|
|zipCodeEnd|string|true|none|none|
|zipCodeStart|string|true|none|none|

<h2 id="tocS_CreateUpdateHolidayRequest">CreateUpdateHolidayRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdateholidayrequest"></a>
<a id="schema_CreateUpdateHolidayRequest"></a>
<a id="tocScreateupdateholidayrequest"></a>
<a id="tocscreateupdateholidayrequest"></a>

```json
{
  "name": "Natal",
  "startDate": "2016-12-25"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|startDate|string|true|none|none|

<h2 id="tocS_CreateUpdatePolygonRequest">CreateUpdatePolygonRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdatepolygonrequest"></a>
<a id="schema_CreateUpdatePolygonRequest"></a>
<a id="tocScreateupdatepolygonrequest"></a>
<a id="tocscreateupdatepolygonrequest"></a>

```json
{
  "geoShape": {
    "coordinates": [
      [
        0
      ]
    ]
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geoShape|object|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_CreateUpdateRequest">CreateUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdaterequest"></a>
<a id="schema_CreateUpdateRequest"></a>
<a id="tocScreateupdaterequest"></a>
<a id="tocscreateupdaterequest"></a>

```json
{
  "address": {
    "city": "Rio de Janeiro",
    "complement": "",
    "country": {
      "acronym": "BRA",
      "name": "Brazil"
    },
    "location": {
      "latitude": -22.974477767944336,
      "longitude": -43.18672561645508
    },
    "neighborhood": "Copacabana",
    "number": "",
    "postalCode": "22070002",
    "reference": null,
    "state": "RJ",
    "street": "Avenida Atl├óntica"
  },
  "businessHours": [
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 1,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 2,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 3,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 4,
      "openingTime": "08:00:00"
    },
    {
      "closingTime": "20:00:00",
      "dayOfWeek": 5,
      "openingTime": "08:00:00"
    }
  ],
  "description": "",
  "formatted_address": "undefined",
  "id": "1a227d3",
  "instructions": "Obrigat├│rio apresentar documento de identifica├º├úo",
  "isActive": true,
  "name": "Loja Copacabana",
  "tagsLabel": [
    "zonasul",
    "rio de janeiro"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|true|none|none|
|businessHours|[object]|true|none|none|
|description|string|true|none|none|
|formatted_address|string|true|none|none|
|id|string|true|none|none|
|instructions|string|true|none|none|
|isActive|boolean|true|none|none|
|name|string|true|none|none|
|tagsLabel|[string]|true|none|none|

<h2 id="tocS_CreateUpdateWarehouseRequest">CreateUpdateWarehouseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdatewarehouserequest"></a>
<a id="schema_CreateUpdateWarehouseRequest"></a>
<a id="tocScreateupdatewarehouserequest"></a>
<a id="tocscreateupdatewarehouserequest"></a>

```json
{
  "id": "15bfc76",
  "name": "Estoque Principal",
  "warehouseDocks": [
    {
      "cost": "5.00",
      "costToDisplay": "5,00",
      "dockId": "1a8bce3",
      "name": "Centro de Distribui├º├úo Principal",
      "time": "3.00:00:00",
      "translateDays": "dias"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|warehouseDocks|[object]|true|none|none|

<h2 id="tocS_DayOfWeekForDelivery">DayOfWeekForDelivery</h2>
<!-- backwards compatibility -->
<a id="schemadayofweekfordelivery"></a>
<a id="schema_DayOfWeekForDelivery"></a>
<a id="tocSdayofweekfordelivery"></a>
<a id="tocsdayofweekfordelivery"></a>

```json
{
  "dayOfWeek": 0,
  "deliveryRanges": [
    {
      "endTime": "12:00:00",
      "listPrice": 10,
      "startTime": "08:00:00"
    },
    {
      "endTime": "18:00:00",
      "listPrice": 10,
      "startTime": "12:01:00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|integer(int32)|true|none|none|
|deliveryRanges|[object]|true|none|none|

<h2 id="tocS_DayOfWeekForDelivery1">DayOfWeekForDelivery1</h2>
<!-- backwards compatibility -->
<a id="schemadayofweekfordelivery1"></a>
<a id="schema_DayOfWeekForDelivery1"></a>
<a id="tocSdayofweekfordelivery1"></a>
<a id="tocsdayofweekfordelivery1"></a>

```json
{
  "dayOfWeek": 0,
  "deliveryRanges": [
    {
      "endTime": "12:00:00",
      "listPrice": 10,
      "startTime": "08:00:00"
    },
    {
      "endTime": "18:00:00",
      "listPrice": 10,
      "startTime": "12:01:00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|integer(int32)|true|none|none|
|deliveryRanges|[object]|true|none|none|

<h2 id="tocS_DeliveryItemOption">DeliveryItemOption</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryitemoption"></a>
<a id="schema_DeliveryItemOption"></a>
<a id="tocSdeliveryitemoption"></a>
<a id="tocsdeliveryitemoption"></a>

```json
{
  "aditionalTimeBlockedDays": "00:00:00",
  "deliveryWindows": [],
  "dockId": "1a8bce3",
  "dockTime": "00:00:00",
  "item": {
    "additionalHandlingTime": "00:00:00",
    "dimension": {
      "height": 1,
      "length": 1,
      "weight": 150,
      "width": 1
    },
    "groupItemId": null,
    "id": "2390059",
    "kitItem": [],
    "price": 0,
    "quantity": 1
  },
  "listPrice": 10.5,
  "location": {
    "country": "BRA",
    "inStore": {
      "IsCheckedIn": false,
      "StoreId": null
    },
    "zipCode": "22220070"
  },
  "promotionalPrice": 10.5,
  "slaType": "Expressa",
  "slaTypeName": "Expressa",
  "timeToDockPlusDockTime": "1.00:00:00",
  "totalTime": "3.00:00:00",
  "transitTime": "2.00:00:00",
  "wareHouseId": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aditionalTimeBlockedDays|string|true|none|none|
|deliveryWindows|[string]|true|none|none|
|dockId|string|true|none|none|
|dockTime|string|true|none|none|
|item|object|true|none|none|
|listPrice|number|true|none|none|
|location|object|true|none|none|
|promotionalPrice|number|true|none|none|
|slaType|string|true|none|none|
|slaTypeName|string|true|none|none|
|timeToDockPlusDockTime|string|true|none|none|
|totalTime|string|true|none|none|
|transitTime|string|true|none|none|
|wareHouseId|string \| null|true|none|none|

<h2 id="tocS_DeliveryRange">DeliveryRange</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryrange"></a>
<a id="schema_DeliveryRange"></a>
<a id="tocSdeliveryrange"></a>
<a id="tocsdeliveryrange"></a>

```json
{
  "endTime": "12:00:00",
  "listPrice": 10,
  "startTime": "08:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string|true|none|none|
|listPrice|integer(int32)|true|none|none|
|startTime|string|true|none|none|

<h2 id="tocS_DeliveryRange1">DeliveryRange1</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryrange1"></a>
<a id="schema_DeliveryRange1"></a>
<a id="tocSdeliveryrange1"></a>
<a id="tocsdeliveryrange1"></a>

```json
{
  "endTime": "12:00:00",
  "listPrice": 10,
  "startTime": "08:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string|true|none|none|
|listPrice|number|true|none|none|
|startTime|string|true|none|none|

<h2 id="tocS_DeliveryWindow">DeliveryWindow</h2>
<!-- backwards compatibility -->
<a id="schemadeliverywindow"></a>
<a id="schema_DeliveryWindow"></a>
<a id="tocSdeliverywindow"></a>
<a id="tocsdeliverywindow"></a>

```json
{
  "endDateUtc": "2016-04-20T12:00:00+00:00",
  "listPrice": 10,
  "startDateUtc": "2016-04-20T08:00:00+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDateUtc|string|false|none|none|
|listPrice|number|false|none|none|
|startDateUtc|string|false|none|none|

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "height": 1,
  "length": 1,
  "weight": 150,
  "width": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|true|none|none|
|length|integer(int32)|true|none|none|
|weight|integer(int32)|true|none|none|
|width|integer(int32)|true|none|none|

<h2 id="tocS_Dimension1">Dimension1</h2>
<!-- backwards compatibility -->
<a id="schemadimension1"></a>
<a id="schema_Dimension1"></a>
<a id="tocSdimension1"></a>
<a id="tocsdimension1"></a>

```json
{
  "height": 10,
  "length": 35,
  "maxSumDimension": 0,
  "weight": 800,
  "width": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number|true|none|none|
|length|number|true|none|none|
|maxSumDimension|number|true|none|none|
|weight|number|true|none|none|
|width|number|true|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "429",
  "message": "Too many active reservation!"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_Errorbytoomanyactivereservations">Errorbytoomanyactivereservations</h2>
<!-- backwards compatibility -->
<a id="schemaerrorbytoomanyactivereservations"></a>
<a id="schema_Errorbytoomanyactivereservations"></a>
<a id="tocSerrorbytoomanyactivereservations"></a>
<a id="tocserrorbytoomanyactivereservations"></a>

```json
{
  "error": {
    "code": "429",
    "message": "Too many active reservation!"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_GeoShape">GeoShape</h2>
<!-- backwards compatibility -->
<a id="schemageoshape"></a>
<a id="schema_GeoShape"></a>
<a id="tocSgeoshape"></a>
<a id="tocsgeoshape"></a>

```json
{
  "coordinates": [
    [
      0
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[[number]]|true|none|none|

<h2 id="tocS_GetById">GetById</h2>
<!-- backwards compatibility -->
<a id="schemagetbyid"></a>
<a id="schema_GetById"></a>
<a id="tocSgetbyid"></a>
<a id="tocsgetbyid"></a>

```json
{
  "address": {
    "city": "Rio de Janeiro",
    "complement": "",
    "country": {
      "acronym": "BRA",
      "name": "Brazil"
    },
    "location": {
      "latitude": -22.92860984802246,
      "longitude": -22.92860984802246
    },
    "neighborhood": "Catete",
    "number": "",
    "postalCode": "22220070",
    "state": "RJ",
    "street": "Rua Artur Bernardes"
  },
  "businessHours": [
    {
      "closingTime": "21:00:00",
      "dayOfWeek": 0,
      "openingTime": "11:00:00"
    }
  ],
  "description": "Loja Barra da Tijuca",
  "formatted_address": "undefined",
  "id": "12345",
  "instructions": "Loja Barra da Tijuca",
  "isActive": true,
  "name": "Loja Barra da Tijuca",
  "warehouseId": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|true|none|none|
|businessHours|[object]|true|none|none|
|description|string|true|none|none|
|formatted_address|string|true|none|none|
|id|string|true|none|none|
|instructions|string|true|none|none|
|isActive|boolean|true|none|none|
|name|string|true|none|none|
|warehouseId|string \| null|true|none|none|

<h2 id="tocS_InStore">InStore</h2>
<!-- backwards compatibility -->
<a id="schemainstore"></a>
<a id="schema_InStore"></a>
<a id="tocSinstore"></a>
<a id="tocsinstore"></a>

```json
{
  "IsCheckedIn": false,
  "StoreId": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsCheckedIn|boolean|true|none|none|
|StoreId|string \| null|true|none|none|

<h2 id="tocS_InStore1">InStore1</h2>
<!-- backwards compatibility -->
<a id="schemainstore1"></a>
<a id="schema_InStore1"></a>
<a id="tocSinstore1"></a>
<a id="tocsinstore1"></a>

```json
{
  "IsCheckedIn": false,
  "StoreId": "180082"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsCheckedIn|boolean|true|none|none|
|StoreId|string|true|none|none|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "additionalHandlingTime": "00:00:00",
  "dimension": {
    "height": 1,
    "length": 1,
    "weight": 150,
    "width": 1
  },
  "groupItemId": null,
  "id": "2390059",
  "kitItem": [],
  "price": 0,
  "quantity": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalHandlingTime|string|true|none|none|
|dimension|object|true|none|none|
|groupItemId|string \| null|true|none|none|
|id|string|true|none|none|
|kitItem|[string]|true|none|none|
|price|integer(int32)|true|none|none|
|quantity|integer(int32)|true|none|none|

<h2 id="tocS_Item1">Item1</h2>
<!-- backwards compatibility -->
<a id="schemaitem1"></a>
<a id="schema_Item1"></a>
<a id="tocSitem1"></a>
<a id="tocsitem1"></a>

```json
{
  "additionalHandlingTime": "00:00:00",
  "dimension": {
    "height": 10,
    "length": 35,
    "maxSumDimension": 0,
    "weight": 800,
    "width": 12
  },
  "groupItemId": null,
  "id": "2390059",
  "kitItem": [],
  "modal": null,
  "price": 0,
  "quantity": 1,
  "unlimitedQuantity": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalHandlingTime|string|true|none|none|
|dimension|object|true|none|none|
|groupItemId|string \| null|true|none|none|
|id|string|true|none|none|
|kitItem|[string]|true|none|none|
|modal|string \| null|true|none|none|
|price|number|true|none|none|
|quantity|integer(int32)|true|none|none|
|unlimitedQuantity|boolean|true|none|none|

<h2 id="tocS_Item3">Item3</h2>
<!-- backwards compatibility -->
<a id="schemaitem3"></a>
<a id="schema_Item3"></a>
<a id="tocSitem3"></a>
<a id="tocsitem3"></a>

```json
{
  "additionalHandlingTime": "00:00:00",
  "dimension": {
    "height": 5,
    "length": 17,
    "weight": 150,
    "width": 17
  },
  "groupItemId": null,
  "id": "1",
  "kitItem": [
    {
      "additionalHandlingTime": "00:00:00",
      "dimension": {
        "height": 5,
        "length": 17,
        "weight": 150,
        "width": 17
      },
      "groupItemId": null,
      "id": "2000042",
      "kitItem": [],
      "price": 0,
      "quantity": 1
    },
    {
      "additionalHandlingTime": "00:00:00",
      "dimension": {
        "height": 5,
        "length": 17,
        "weight": 150,
        "width": 17
      },
      "groupItemId": null,
      "id": "2390059",
      "kitItem": [],
      "price": 0,
      "quantity": 1
    }
  ],
  "price": 0,
  "quantity": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalHandlingTime|string|true|none|none|
|dimension|object|true|none|none|
|groupItemId|string \| null|true|none|none|
|id|string|true|none|none|
|kitItem|[object]|true|none|none|
|price|integer(int32)|true|none|none|
|quantity|integer(int32)|true|none|none|

<h2 id="tocS_KitItem">KitItem</h2>
<!-- backwards compatibility -->
<a id="schemakititem"></a>
<a id="schema_KitItem"></a>
<a id="tocSkititem"></a>
<a id="tocskititem"></a>

```json
{
  "additionalHandlingTime": "00:00:00",
  "dimension": {
    "height": 5,
    "length": 17,
    "weight": 150,
    "width": 17
  },
  "groupItemId": null,
  "id": "2000042",
  "kitItem": [],
  "price": 0,
  "quantity": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalHandlingTime|string|true|none|none|
|dimension|object|true|none|none|
|groupItemId|string \| null|true|none|none|
|id|string|true|none|none|
|kitItem|[string]|true|none|none|
|price|integer(int32)|true|none|none|
|quantity|integer(int32)|true|none|none|

<h2 id="tocS_ListAllAarehouses">ListAllAarehouses</h2>
<!-- backwards compatibility -->
<a id="schemalistallaarehouses"></a>
<a id="schema_ListAllAarehouses"></a>
<a id="tocSlistallaarehouses"></a>
<a id="tocslistallaarehouses"></a>

```json
{
  "id": "1937054",
  "name": "Estoque A",
  "warehouseDocks": [
    {
      "cost": 0,
      "dockId": "1_1_1",
      "time": "1.00:00:00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|warehouseDocks|[object]|true|none|none|

<h2 id="tocS_ListAllDocks">ListAllDocks</h2>
<!-- backwards compatibility -->
<a id="schemalistalldocks"></a>
<a id="schema_ListAllDocks"></a>
<a id="tocSlistalldocks"></a>
<a id="tocslistalldocks"></a>

```json
{
  "dockTimeFake": "1.00:00:00",
  "freightTableIds": [
    "11cc4b6",
    "teste1",
    "186a2a6",
    "1962962",
    "173a63f"
  ],
  "id": "1a8bce3",
  "name": "Centro de Distribui├º├úo Principal",
  "pickupStoreInfo": {
    "additionalInfo": null,
    "address": null,
    "dockId": null,
    "friendlyName": null,
    "isPickupStore": false,
    "storeId": null
  },
  "priority": 0,
  "salesChannel": null,
  "salesChannels": [
    "1",
    "2"
  ],
  "timeFakeOverhead": "00:00:00",
  "wmsEndPoint": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockTimeFake|string|true|none|none|
|freightTableIds|[string]|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|pickupStoreInfo|object|true|none|none|
|priority|integer(int32)|true|none|none|
|salesChannel|string \| null|true|none|none|
|salesChannels|[string]|true|none|none|
|timeFakeOverhead|string|true|none|none|
|wmsEndPoint|string|true|none|none|

<h2 id="tocS_ListFreightValues">ListFreightValues</h2>
<!-- backwards compatibility -->
<a id="schemalistfreightvalues"></a>
<a id="schema_ListFreightValues"></a>
<a id="tocSlistfreightvalues"></a>
<a id="tocslistfreightvalues"></a>

```json
{
  "absoluteMoneyCost": 1,
  "country": "BRA",
  "maxVolume": 1000000000,
  "minimumValueInsurance": 0,
  "operationType": 0,
  "polygon": "",
  "pricePercent": 0,
  "pricePercentByWeight": 0,
  "restrictedFreights": [],
  "timeCost": "2.00:00:00",
  "weightEnd": 1000,
  "weightStart": 1,
  "zipCodeEnd": "99999999",
  "zipCodeStart": "0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absoluteMoneyCost|number|true|none|none|
|country|string|true|none|none|
|maxVolume|number|true|none|none|
|minimumValueInsurance|number|true|none|none|
|operationType|integer(int32)|true|none|none|
|polygon|string|true|none|none|
|pricePercent|number|true|none|none|
|pricePercentByWeight|number|true|none|none|
|restrictedFreights|[string]|true|none|none|
|timeCost|string|true|none|none|
|weightEnd|number|true|none|none|
|weightStart|number|true|none|none|
|zipCodeEnd|string|true|none|none|
|zipCodeStart|string|true|none|none|

<h2 id="tocS_ListInventoryBySKU">ListInventoryBySKU</h2>
<!-- backwards compatibility -->
<a id="schemalistinventorybysku"></a>
<a id="schema_ListInventoryBySKU"></a>
<a id="tocSlistinventorybysku"></a>
<a id="tocslistinventorybysku"></a>

```json
{
  "balance": [
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 9,
      "totalQuantity": 101,
      "warehouseId": "1937054",
      "warehouseName": "Estoque A"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 100,
      "warehouseId": "avl",
      "warehouseName": "Estoque InStore"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 100,
      "warehouseId": "1448dc2",
      "warehouseName": "Estoque C"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 100,
      "warehouseId": "140ac66",
      "warehouseName": "Estoque B"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 100,
      "warehouseId": "pickuppoint",
      "warehouseName": "PickupPoint"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 200,
      "warehouseId": "pickuppoint_2",
      "warehouseName": "PickupPoint 2"
    },
    {
      "hasUnlimitedQuantity": false,
      "reservedQuantity": 0,
      "totalQuantity": 1011,
      "warehouseId": "15bfc76",
      "warehouseName": "Estoque Principal"
    }
  ],
  "skuId": "2390059"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|[object]|true|none|none|
|skuId|string|true|none|none|

<h2 id="tocS_ListReservationByWarehouseAndSKU">ListReservationByWarehouseAndSKU</h2>
<!-- backwards compatibility -->
<a id="schemalistreservationbywarehouseandsku"></a>
<a id="schema_ListReservationByWarehouseAndSKU"></a>
<a id="tocSlistreservationbywarehouseandsku"></a>
<a id="tocslistreservationbywarehouseandsku"></a>

```json
{
  "aditionalTimeBlockedDays": "00:00:00",
  "availabilityQuantity": 500,
  "carrierSchedule": [],
  "coordinates": null,
  "deliveryOnWeekends": false,
  "deliveryWindows": [
    {
      "endDateUtc": "2016-04-20T12:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-20T08:00:00+00:00"
    },
    {
      "endDateUtc": "2016-04-20T18:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-20T12:01:00+00:00"
    },
    {
      "endDateUtc": "2016-04-21T12:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-21T08:00:00+00:00"
    },
    {
      "endDateUtc": "2016-04-21T18:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-21T12:01:00+00:00"
    },
    {
      "endDateUtc": "2016-04-22T12:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-22T08:00:00+00:00"
    },
    {
      "endDateUtc": "2016-04-22T18:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-22T12:01:00+00:00"
    },
    {
      "endDateUtc": "2016-04-23T12:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-23T08:00:00+00:00"
    },
    {
      "endDateUtc": "2016-04-23T18:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-23T12:01:00+00:00"
    },
    {
      "endDateUtc": "2016-04-24T12:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-24T08:00:00+00:00"
    },
    {
      "endDateUtc": "2016-04-24T18:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-24T12:01:00+00:00"
    },
    {
      "endDateUtc": "2016-04-25T12:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-25T08:00:00+00:00"
    },
    {
      "endDateUtc": "2016-04-25T18:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-25T12:01:00+00:00"
    },
    {
      "endDateUtc": "2016-04-26T12:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-26T08:00:00+00:00"
    },
    {
      "endDateUtc": "2016-04-26T18:00:00+00:00",
      "listPrice": 10,
      "startDateUtc": "2016-04-26T12:01:00+00:00"
    }
  ],
  "dockId": "1_1_1",
  "dockTime": "00:00:00",
  "freightTableId": "teste1",
  "freightTableName": "Entrega Agendada",
  "itemId": "2389945",
  "listPrice": 5.25,
  "location": {
    "country": "BRA",
    "deliveryPointId": null,
    "inStore": {
      "IsCheckedIn": false,
      "StoreId": "180082"
    },
    "point": null,
    "zipCode": "22220070"
  },
  "pickupStoreInfo": null,
  "quantity": 1,
  "restrictedFreight": null,
  "salesChannel": "1",
  "slaType": "Entrega Agendada",
  "slaTypeName": "Entrega Agendada",
  "timeToDockPlusDockTime": "1.00:00:00",
  "totalTime": "3.00:00:00",
  "transitTime": "2.00:00:00",
  "wareHouseId": "1937054"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aditionalTimeBlockedDays|string|true|none|none|
|availabilityQuantity|integer(int32)|true|none|none|
|carrierSchedule|[string]|true|none|none|
|coordinates|string \| null|true|none|none|
|deliveryOnWeekends|boolean|true|none|none|
|deliveryWindows|[object]|true|none|none|
|dockId|string|true|none|none|
|dockTime|string|true|none|none|
|freightTableId|string|true|none|none|
|freightTableName|string|true|none|none|
|itemId|string|true|none|none|
|listPrice|number|true|none|none|
|location|object|true|none|none|
|pickupStoreInfo|string \| null|true|none|none|
|quantity|integer(int32)|true|none|none|
|restrictedFreight|string \| null|true|none|none|
|salesChannel|string|true|none|none|
|slaType|string|true|none|none|
|slaTypeName|string|true|none|none|
|timeToDockPlusDockTime|string|true|none|none|
|totalTime|string|true|none|none|
|transitTime|string|true|none|none|
|wareHouseId|string|true|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "country": "BRA",
  "inStore": {
    "IsCheckedIn": false,
    "StoreId": null
  },
  "zipCode": "22220070"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|none|
|inStore|object|true|none|none|
|zipCode|string|true|none|none|

<h2 id="tocS_Location1">Location1</h2>
<!-- backwards compatibility -->
<a id="schemalocation1"></a>
<a id="schema_Location1"></a>
<a id="tocSlocation1"></a>
<a id="tocslocation1"></a>

```json
{
  "country": "BRA",
  "deliveryPointId": null,
  "inStore": {
    "IsCheckedIn": false,
    "StoreId": "180082"
  },
  "point": null,
  "zipCode": "22220070"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|none|
|deliveryPointId|string \| null|true|none|none|
|inStore|object|true|none|none|
|point|string \| null|true|none|none|
|zipCode|string|true|none|none|

<h2 id="tocS_Location3">Location3</h2>
<!-- backwards compatibility -->
<a id="schemalocation3"></a>
<a id="schema_Location3"></a>
<a id="tocSlocation3"></a>
<a id="tocslocation3"></a>

```json
{
  "country": "BRA",
  "point": [
    -43.32475950000003,
    -22.9999575
  ],
  "zipCode": "22780084"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|none|
|point|[number]|true|none|none|
|zipCode|string|true|none|none|

<h2 id="tocS_Location5">Location5</h2>
<!-- backwards compatibility -->
<a id="schemalocation5"></a>
<a id="schema_Location5"></a>
<a id="tocSlocation5"></a>
<a id="tocslocation5"></a>

```json
{
  "latitude": -22.974477767944336,
  "longitude": -43.18672561645508
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number|true|none|none|
|longitude|number|true|none|none|

<h2 id="tocS_MaxDimension">MaxDimension</h2>
<!-- backwards compatibility -->
<a id="schemamaxdimension"></a>
<a id="schema_MaxDimension"></a>
<a id="tocSmaxdimension"></a>
<a id="tocsmaxdimension"></a>

```json
{
  "height": 0,
  "length": 0,
  "maxSumDimension": 0,
  "weight": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|true|none|none|
|length|integer(int32)|true|none|none|
|maxSumDimension|integer(int32)|true|none|none|
|weight|integer(int32)|true|none|none|
|width|integer(int32)|true|none|none|

<h2 id="tocS_MaxDimension1">MaxDimension1</h2>
<!-- backwards compatibility -->
<a id="schemamaxdimension1"></a>
<a id="schema_MaxDimension1"></a>
<a id="tocSmaxdimension1"></a>
<a id="tocsmaxdimension1"></a>

```json
{
  "height": null,
  "length": null,
  "maxSumDimension": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|string \| null|true|none|none|
|length|string \| null|true|none|none|
|maxSumDimension|string \| null|true|none|none|

<h2 id="tocS_MaxDimension2">MaxDimension2</h2>
<!-- backwards compatibility -->
<a id="schemamaxdimension2"></a>
<a id="schema_MaxDimension2"></a>
<a id="tocSmaxdimension2"></a>
<a id="tocsmaxdimension2"></a>

```json
{
  "height": 110,
  "length": 110,
  "maxSumDimension": 200,
  "weight": 0,
  "width": 110
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number|true|none|none|
|length|number|true|none|none|
|maxSumDimension|number|true|none|none|
|weight|number|true|none|none|
|width|number|true|none|none|

<h2 id="tocS_PickupStoreInfo">PickupStoreInfo</h2>
<!-- backwards compatibility -->
<a id="schemapickupstoreinfo"></a>
<a id="schema_PickupStoreInfo"></a>
<a id="tocSpickupstoreinfo"></a>
<a id="tocspickupstoreinfo"></a>

```json
{
  "additionalInfo": null,
  "address": {
    "city": "Rio de Janeiro",
    "complement": "",
    "coordinates": null,
    "country": {
      "acronym": "BRA",
      "name": "Brazil"
    },
    "neighborhood": "Catete",
    "number": "100",
    "postalCode": "22220070",
    "state": "RJ",
    "street": "Artur Bernardes Street"
  },
  "dockId": null,
  "friendlyName": null,
  "isPickupStore": false,
  "storeId": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string \| null|true|none|none|
|address|object|true|none|none|
|dockId|string \| null|true|none|none|
|friendlyName|string \| null|true|none|none|
|isPickupStore|boolean|true|none|none|
|storeId|string \| null|true|none|none|

<h2 id="tocS_PickupStoreInfo1">PickupStoreInfo1</h2>
<!-- backwards compatibility -->
<a id="schemapickupstoreinfo1"></a>
<a id="schema_PickupStoreInfo1"></a>
<a id="tocSpickupstoreinfo1"></a>
<a id="tocspickupstoreinfo1"></a>

```json
{
  "additionalInfo": null,
  "address": null,
  "dockId": null,
  "friendlyName": null,
  "isPickupStore": false,
  "storeId": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string \| null|true|none|none|
|address|string \| null|true|none|none|
|dockId|string \| null|true|none|none|
|friendlyName|string \| null|true|none|none|
|isPickupStore|boolean|true|none|none|
|storeId|string \| null|true|none|none|

<h2 id="tocS_SlaRequest">SlaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaslarequest"></a>
<a id="schema_SlaRequest"></a>
<a id="tocSslarequest"></a>
<a id="tocsslarequest"></a>

```json
{
  "deliveryWindows": null,
  "dockId": "1_1_1",
  "dockTime": "00:00:00",
  "freightTableId": "11cc4b6",
  "freightTableName": "Correios PAC",
  "item": {
    "additionalHandlingTime": "00:00:00",
    "dimension": {
      "height": 10,
      "length": 35,
      "maxSumDimension": 0,
      "weight": 800,
      "width": 12
    },
    "groupItemId": null,
    "id": "2390059",
    "kitItem": [],
    "modal": null,
    "price": 0,
    "quantity": 1,
    "unlimitedQuantity": false
  },
  "listPrice": 10.5,
  "location": {
    "country": "BRA",
    "deliveryPointId": null,
    "inStore": {
      "IsCheckedIn": false,
      "StoreId": "180082"
    },
    "point": null,
    "zipCode": "22220070"
  },
  "pickupStoreInfo": null,
  "promotionalPrice": 10.5,
  "slaType": "Normal",
  "slaTypeName": "Normal",
  "timeToDockPlusDockTime": "1.00:00:00",
  "totalTime": "3.00:00:00",
  "transitTime": "2.00:00:00",
  "wareHouseId": "1937054",
  "wmsEndPoint": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryWindows|string \| null|true|none|none|
|dockId|string|true|none|none|
|dockTime|string|true|none|none|
|freightTableId|string|true|none|none|
|freightTableName|string|true|none|none|
|item|object|true|none|none|
|listPrice|number|true|none|none|
|location|object|true|none|none|
|pickupStoreInfo|string \| null|true|none|none|
|promotionalPrice|number|true|none|none|
|slaType|string|true|none|none|
|slaTypeName|string|true|none|none|
|timeToDockPlusDockTime|string|true|none|none|
|totalTime|string|true|none|none|
|transitTime|string|true|none|none|
|wareHouseId|string|true|none|none|
|wmsEndPoint|string|true|none|none|

<h2 id="tocS_Success">Success</h2>
<!-- backwards compatibility -->
<a id="schemasuccess"></a>
<a id="schema_Success"></a>
<a id="tocSsuccess"></a>
<a id="tocssuccess"></a>

```json
{
  "availableQuantity": 2147483634,
  "dispatchedReservationsQuantity": 0,
  "isUnlimitedQuantity": true,
  "quantity": 2147483647,
  "skuId": "19",
  "totalReservedQuantity": 13,
  "warehouseId": "1_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableQuantity|integer(int32)|true|none|none|
|dispatchedReservationsQuantity|integer(int32)|true|none|none|
|isUnlimitedQuantity|boolean|true|none|none|
|quantity|integer(int32)|true|none|none|
|skuId|string|true|none|none|
|totalReservedQuantity|integer(int32)|true|none|none|
|warehouseId|string|true|none|none|

<h2 id="tocS_UpdateInventoryBySkuandWarehouseRequest">UpdateInventoryBySkuandWarehouseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinventorybyskuandwarehouserequest"></a>
<a id="schema_UpdateInventoryBySkuandWarehouseRequest"></a>
<a id="tocSupdateinventorybyskuandwarehouserequest"></a>
<a id="tocsupdateinventorybyskuandwarehouserequest"></a>

```json
{
  "dateUtcOnBalanceSystem": null,
  "quantity": 101,
  "unlimitedQuantity": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateUtcOnBalanceSystem|string \| null|true|none|none|
|quantity|integer(int32)|true|none|none|
|unlimitedQuantity|boolean|true|none|none|

<h2 id="tocS_WarehouseDock">WarehouseDock</h2>
<!-- backwards compatibility -->
<a id="schemawarehousedock"></a>
<a id="schema_WarehouseDock"></a>
<a id="tocSwarehousedock"></a>
<a id="tocswarehousedock"></a>

```json
{
  "cost": "5.00",
  "costToDisplay": "5,00",
  "dockId": "1a8bce3",
  "name": "Centro de Distribui├º├úo Principal",
  "time": "3.00:00:00",
  "translateDays": "dias"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|string|true|none|none|
|costToDisplay|string|true|none|none|
|dockId|string|true|none|none|
|name|string|true|none|none|
|time|string|true|none|none|
|translateDays|string|true|none|none|

<h2 id="tocS_WarehouseDock1">WarehouseDock1</h2>
<!-- backwards compatibility -->
<a id="schemawarehousedock1"></a>
<a id="schema_WarehouseDock1"></a>
<a id="tocSwarehousedock1"></a>
<a id="tocswarehousedock1"></a>

```json
{
  "cost": 0,
  "dockId": "1_1_1",
  "time": "1.00:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|number|true|none|none|
|dockId|string|true|none|none|
|time|string|true|none|none|

<h2 id="tocS_allcarrier">allcarrier</h2>
<!-- backwards compatibility -->
<a id="schemaallcarrier"></a>
<a id="schema_allcarrier"></a>
<a id="tocSallcarrier"></a>
<a id="tocsallcarrier"></a>

```json
{
  "carrierSchedule": [],
  "dayOfWeekBlockeds": [],
  "dayOfWeekForDelivery": null,
  "deliveryOnWeekends": true,
  "exclusiveToDeliveryPoints": false,
  "factorCubicWeight": 0.0167,
  "freightTableProcessStatus": 1,
  "freightTableValueError": null,
  "freightValue": [],
  "id": "11cc4b6",
  "isPolygon": false,
  "maxDimension": {
    "height": 110,
    "length": 110,
    "maxSumDimension": 200,
    "weight": 0,
    "width": 110
  },
  "maxRangeDelivery": 0,
  "minimunCubicWeight": 10000,
  "modals": [],
  "name": "Correios PAC",
  "numberOfItemsPerShipment": null,
  "onlyItemsWithDefinedModal": false,
  "scheduledDelivery": false,
  "slaType": "Normal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrierSchedule|[string]|true|none|none|
|dayOfWeekBlockeds|[string]|true|none|none|
|dayOfWeekForDelivery|[object]|true|none|Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.|
|deliveryOnWeekends|boolean|true|none|none|
|exclusiveToDeliveryPoints|boolean|true|none|none|
|factorCubicWeight|number \| null|true|none|none|
|freightTableProcessStatus|integer(int32)|true|none|none|
|freightTableValueError|string \| null|true|none|none|
|freightValue|[string]|true|none|none|
|id|string|true|none|none|
|isPolygon|boolean|true|none|none|
|maxDimension|object|true|none|none|
|maxRangeDelivery|integer(int32)|true|none|none|
|minimunCubicWeight|number|true|none|none|
|modals|[string]|true|none|none|
|name|string|true|none|none|
|numberOfItemsPerShipment|string \| null|true|none|none|
|onlyItemsWithDefinedModal|boolean|true|none|none|
|scheduledDelivery|boolean|true|none|none|
|slaType|string|true|none|none|

<h2 id="tocS_carrierbyid">carrierbyid</h2>
<!-- backwards compatibility -->
<a id="schemacarrierbyid"></a>
<a id="schema_carrierbyid"></a>
<a id="tocScarrierbyid"></a>
<a id="tocscarrierbyid"></a>

```json
{
  "carrierSchedule": [],
  "dayOfWeekBlockeds": [],
  "dayOfWeekForDelivery": null,
  "deliveryOnWeekends": true,
  "exclusiveToDeliveryPoints": false,
  "factorCubicWeight": 0.0167,
  "freightTableProcessStatus": 1,
  "freightTableValueError": null,
  "freightValue": [],
  "id": "11cc4b6",
  "isPolygon": false,
  "maxDimension": {
    "height": 110,
    "length": 110,
    "maxSumDimension": 200,
    "weight": 0,
    "width": 110
  },
  "maxRangeDelivery": 0,
  "minimunCubicWeight": 10000,
  "modals": [],
  "name": "Correios PAC",
  "numberOfItemsPerShipment": null,
  "onlyItemsWithDefinedModal": false,
  "scheduledDelivery": false,
  "slaType": "Normal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrierSchedule|[string]|true|none|none|
|dayOfWeekBlockeds|[string]|true|none|none|
|dayOfWeekForDelivery|[object]|true|none|Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.|
|deliveryOnWeekends|boolean|true|none|none|
|exclusiveToDeliveryPoints|boolean|true|none|none|
|factorCubicWeight|number|true|none|none|
|freightTableProcessStatus|integer(int32)|true|none|none|
|freightTableValueError|string \| null|true|none|none|
|freightValue|[string]|true|none|none|
|id|string|true|none|none|
|isPolygon|boolean|true|none|none|
|maxDimension|object|true|none|none|
|maxRangeDelivery|integer(int32)|true|none|none|
|minimunCubicWeight|number|true|none|none|
|modals|[string]|true|none|none|
|name|string|true|none|none|
|numberOfItemsPerShipment|string \| null|true|none|none|
|onlyItemsWithDefinedModal|boolean|true|none|none|
|scheduledDelivery|boolean|true|none|none|
|slaType|string|true|none|none|
