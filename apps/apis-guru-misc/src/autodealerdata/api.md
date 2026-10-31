<h1 id="cis-automotive-api">CIS Automotive API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<div style="">This API provides access to our Automotive Data. Use of this API is subject to our <a href="https://autodealerdata.com/tos">Terms of Service</a></div>
&nbsp;
<h3 style="">For a quick start guide <a href="/APIQuickStart">click here</a></h3>
&nbsp;
<div> If you signed up through RapidAPI make your test calls <a href="https://rapidapi.com/competitive-intelligence-solutions-llc-competitive-intelligence-solutions-llc-default/api/cis-automotive">here</a></div>
&nbsp;
<div>The general workflow is to: <br/>&nbsp;<div><strong>1.</strong> Authenticate with your CIS Automotive API Keys to get a Json Web Token (JWT). Do not use RapidAPI keys.</div>
<div><div><strong>2.</strong> Then use that token as an argument when calling other endpoints.</div>
&nbsp;
<div>Equivalent HTTP GET and POST methods are available for some endpoints. </div>
&nbsp;
<div>Endpoints may appear more than once on this page if they are associated with multiple tags. eg "Sales Data", "Premium", "Pro Plan or Greater" To see which endpoints are included in different
plans look under the "X Plan or Greater" tags for the respective plan name.</div>
&nbsp;
<h3>If you signed up for our API through RapidAPI you can make your test calls <a href="https://rapidapi.com/competitive-intelligence-solutions-llc-competitive-intelligence-solutions-llc-default/api/cis-automotive">on their platform</a>. 
Your RapidAPI credentials will not work on this page.</h3><h3> Do not use your RapidAPI keys on this page.</h3>
<h3>If you signed up with us and have an account, you must first authenticate with your API Keys 
and retrieve a Json Web Token (JWT) from the /getToken endpoint to access the other endpoints.</h3> 

<h3>Your JWT is a required argument to all endpoints.</h3></div>

<h1 id="cis-automotive-api-supply-data">Supply Data</h1>

## Days worth of supply left on dealer lots

<a id="opIddaysSupply_daysSupply_get"></a>

> Code samples

```bash
curl 'https://example.com/daysSupply?jwt=string&brandName=string' \
  -H 'Accept: application/json'
```

`GET /daysSupply`

Average, median, standard deviation, population variance, and whole region average of the 
days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
The average field may differ from the whole region average, especially when dealers are out of 
a given model. 

The available brand and region names can be retrieved from their respective endpoints.

<h3 id="days-worth-of-supply-left-on-dealer-lots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|brandName|query|string|true|none|
|regionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": null,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="days-worth-of-supply-left-on-dealer-lots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Days a vehicle takes to sell

<a id="opIddaysToSell_daysToSell_get"></a>

> Code samples

```bash
curl 'https://example.com/daysToSell?jwt=string&brandName=string' \
  -H 'Accept: application/json'
```

`GET /daysToSell`

Average, median, standard deviation, population variance, and whole region average of the 
number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
The average field may differ from the whole region average.

The available brand and region names can be retrieved from their respective endpoints.

<h3 id="days-a-vehicle-takes-to-sell-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|brandName|query|string|true|none|
|regionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": null,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="days-a-vehicle-takes-to-sell-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="cis-automotive-api-static-data">Static Data</h1>

## Get a list of brand names

<a id="opIdgetBrandNames_getBrands_get"></a>

> Code samples

```bash
curl 'https://example.com/getBrands?jwt=string' \
  -H 'Accept: application/json'
```

`GET /getBrands`

Get vehicle brand names. 

These names are used as arguments for other endpoints. The names are generally not case sensitive
when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.

<h3 id="get-a-list-of-brand-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    "string"
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-brand-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BrandResp](#schemabrandresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of model names including discontinued models

<a id="opIdgetModelNamesAll_getInactiveModels_get"></a>

> Code samples

```bash
curl 'https://example.com/getInactiveModels?jwt=string&brandName=string' \
  -H 'Accept: application/json'
```

`GET /getInactiveModels`

Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time. 

These names are used as arguments for other endpoints. The names are generally not case sensitive
when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.

<h3 id="get-a-list-of-model-names-including-discontinued-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|brandName|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "modelName": "string"
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-model-names-including-discontinued-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ModelResp](#schemamodelresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of model names

<a id="opIdgetModelNames_getModels_get"></a>

> Code samples

```bash
curl 'https://example.com/getModels?jwt=string&brandName=string' \
  -H 'Accept: application/json'
```

`GET /getModels`

Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have 
sold less than 10 vehicles in the last month and a half.

These names are used as arguments for other endpoints. The names are generally not case sensitive
when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.

<h3 id="get-a-list-of-model-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|brandName|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "modelName": "string"
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-model-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ModelResp](#schemamodelresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of region names

<a id="opIdgetRegions_getRegions_get"></a>

> Code samples

```bash
curl 'https://example.com/getRegions?jwt=string' \
  -H 'Accept: application/json'
```

`GET /getRegions`

Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.

<h3 id="get-a-list-of-region-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    "string"
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-region-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[RegionResp](#schemaregionresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="cis-automotive-api-dealership-data">Dealership Data</h1>

## Premium. Dealers in a zip code.

<a id="opIdgetDealers_getDealers_get"></a>

> Code samples

```bash
curl 'https://example.com/getDealers?jwt=string&zipCode=0' \
  -H 'Accept: application/json'
```

`GET /getDealers`

Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.
For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]

<h3 id="premium-dealers-in-a-zip-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|zipCode|query|integer|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "address": "string",
      "dealerName": "string",
      "ids": [
        0
      ],
      "state": "string",
      "zipCode": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="premium-dealers-in-a-zip-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DealershipDataResp](#schemadealershipdataresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Premium. Dealers by ID

<a id="opIdgetDealers_getDealersByID_get"></a>

> Code samples

```bash
curl 'https://example.com/getDealersByID?jwt=string&dealerID=0' \
  -H 'Accept: application/json'
```

`GET /getDealersByID`

Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.
Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.

<h3 id="premium-dealers-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|dealerID|query|integer|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "address": "string",
      "dealerName": "string",
      "ids": [
        0
      ],
      "state": "string",
      "zipCode": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="premium-dealers-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DealershipDataResp](#schemadealershipdataresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Premium. Dealers in a region.

<a id="opIdgetDealers_getDealersByRegion_get"></a>

> Code samples

```bash
curl 'https://example.com/getDealersByRegion?jwt=string' \
  -H 'Accept: application/json'
```

`GET /getDealersByRegion`

Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.

<h3 id="premium-dealers-in-a-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|regionName|query|string|false|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "dealers": [
      {
        "address": "string",
        "dealerName": "string",
        "ids": [
          0
        ],
        "state": "string",
        "zipCode": 0
      }
    ],
    "maxPages": 0,
    "page": 0
  },
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="premium-dealers-in-a-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DealershipDataPaginatedResp](#schemadealershipdatapaginatedresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="cis-automotive-api-sales-data">Sales Data</h1>

## Market share of a brand in region

<a id="opIdgetRegionBrandMarketShare_getRegionBrandMarketShare_get"></a>

> Code samples

```bash
curl 'https://example.com/getRegionBrandMarketShare?jwt=string&brandName=string' \
  -H 'Accept: application/json'
```

`GET /getRegionBrandMarketShare`

Market share of a given brand in a given region by number of vehicles sold over the last 45 days.

<h3 id="market-share-of-a-brand-in-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|brandName|query|string|true|none|
|regionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": null,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="market-share-of-a-brand-in-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Market share of all brands in region

<a id="opIdgetRegionMarketShare_getRegionMarketShare_get"></a>

> Code samples

```bash
curl 'https://example.com/getRegionMarketShare?jwt=string' \
  -H 'Accept: application/json'
```

`GET /getRegionMarketShare`

Market share of a all brands in a given region by number of vehicles sold over the last 45 days.

<h3 id="market-share-of-all-brands-in-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|regionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": null,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="market-share-of-all-brands-in-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Used market share of model year by model

<a id="opIdgetModelUsedDist_modelYearDist_get"></a>

> Code samples

```bash
curl 'https://example.com/modelYearDist?jwt=string&modelName=string&brandName=string' \
  -H 'Accept: application/json'
```

`GET /modelYearDist`

Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.
For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market 
in the given region over the last 45 days were from the 2017 model year.

<h3 id="used-market-share-of-model-year-by-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|modelName|query|string|true|none|
|brandName|query|string|true|none|
|regionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "brandName": "string",
      "modelName": "string",
      "percentOfMarket": 0,
      "year": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="used-market-share-of-model-year-by-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ModelYearDistResp](#schemamodelyeardistresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Brand sales by region and Day

<a id="opIdgetDealerSales_regionDailySales_get"></a>

> Code samples

```bash
curl 'https://example.com/regionDailySales?jwt=string&brandName=string&regionName=string&day=1970-01-01' \
  -H 'Accept: application/json'
```

`GET /regionDailySales`

Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.
    
The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'

Data availability depends on region and goes back up to 2016.

<h3 id="brand-sales-by-region-and-day-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|brandName|query|string|true|none|
|regionName|query|string|true|none|
|day|query|string(date)|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": null,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="brand-sales-by-region-and-day-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Premium. Brand sales by region and month

<a id="opIdgetDealerSales_regionSales_get"></a>

> Code samples

```bash
curl 'https://example.com/regionSales?jwt=string&brandName=string&regionName=string&month=1970-01-01' \
  -H 'Accept: application/json'
```

`GET /regionSales`

Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.
    
The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'

Data availability depends on region and goes back up to 2016.

<h3 id="premium-brand-sales-by-region-and-month-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|brandName|query|string|true|none|
|regionName|query|string|true|none|
|month|query|string(date)|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": null,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="premium-brand-sales-by-region-and-month-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Top models in a given region

<a id="opIdgetTopModels_topModels_get"></a>

> Code samples

```bash
curl 'https://example.com/topModels?jwt=string' \
  -H 'Accept: application/json'
```

`GET /topModels`

Sales ranking of different models by region over the last 45 days. 
The <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents. 

For example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.

The other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region
over the report's time interval.

<h3 id="top-models-in-a-given-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|regionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "brandMarketShare": 0,
      "brandName": "string",
      "modelName": "string",
      "percentOfBrandSales": 0,
      "percentOfTopSales": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="top-models-in-a-given-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TopModelResp](#schematopmodelresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="cis-automotive-api-authentication">Authentication</h1>

## Get all Sub User Keys associated with your account.

<a id="opIdgetSubUserKeys_getSubUserKeys_get"></a>

> Code samples

```bash
curl 'https://example.com/getSubUserKeys?apiID=string&apiKey=string' \
  -H 'Accept: application/json'
```

`GET /getSubUserKeys`

Get a list of your issued SubUser API Keys. Includes active and revoked keys.

<h3 id="get-all-sub-user-keys-associated-with-your-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|query|string|true|none|
|apiKey|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": null,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-all-sub-user-keys-associated-with-your-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a JWT from your API credentials

<a id="opIdmakeToken_getToken_get"></a>

> Code samples

```bash
curl 'https://example.com/getToken?apiID=string&apiKey=string' \
  -H 'Accept: application/json'
```

`GET /getToken`

This is the first function you should call. 

If you are accessing our API through a third party provider they will handle authenticating to our API for you 
and you will not need call this function or retrieve a JSON Web Token. 

All other functions require the JSON Web Token (JWT) from this function to 
be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
to get a new token.

<h3 id="get-a-jwt-from-your-api-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|query|string|true|none|
|apiKey|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdOn": 0,
  "expires": 0,
  "token": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-a-jwt-from-your-api-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[JSONWebToken](#schemajsonwebtoken)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a JWT from your API credentials

<a id="opIdmakeToken_getToken_post"></a>

> Code samples

```bash
curl 'https://example.com/getToken?apiID=string&apiKey=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getToken`

This is the first function you should call. 

If you are accessing our API through a third party provider they will handle authenticating to our API for you 
and you will not need call this function or retrieve a JSON Web Token. 

All other functions require the JSON Web Token (JWT) from this function to 
be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
to get a new token.

<h3 id="get-a-jwt-from-your-api-credentials-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|query|string|true|none|
|apiKey|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdOn": 0,
  "expires": 0,
  "token": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-a-jwt-from-your-api-credentials-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[JSONWebToken](#schemajsonwebtoken)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a Sub User Key that can be used by your users to make API calls in frontend applications.

<a id="opIdmakeSubUserKey_makeSubUserKey_post"></a>

> Code samples

```bash
curl 'https://example.com/makeSubUserKey?apiID=string&apiKey=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "endPoints": [
      "*"
    ]
  }'
```

`POST /makeSubUserKey`

This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the "localhost" domain.
This endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls. 
The "endpoints" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a "*" value in the array will allow
all endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.
All API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate 
higher than once per second. 

> Body parameter

```json
{
  "endPoints": [
    "*"
  ]
}
```

<h3 id="generate-a-sub-user-key-that-can-be-used-by-your-users-to-make-api-calls-in-frontend-applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|query|string|true|none|
|apiKey|query|string|true|none|
|siteName|query|string|false|none|
|body|body|[EndpointList](#schemaendpointlist)|true|none|
|» endPoints|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "createdOn": 0,
  "domain": "string",
  "endPoints": [
    "*"
  ],
  "expires": 0,
  "token": "string",
  "uuid": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="generate-a-sub-user-key-that-can-be-used-by-your-users-to-make-api-calls-in-frontend-applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SubUserJSONWebToken](#schemasubuserjsonwebtoken)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Revoke a Sub User Key associated with your account.

<a id="opIdrevokeSubUserKey_revokeSubUserKey_put"></a>

> Code samples

```bash
curl 'https://example.com/revokeSubUserKey?apiID=string&apiKey=string&subUserKeyUUID=string' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /revokeSubUserKey`

Revoke a SubUser API Key with the given UUID. This action can not be undone.

<h3 id="revoke-a-sub-user-key-associated-with-your-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|query|string|true|none|
|apiKey|query|string|true|none|
|subUserKeyUUID|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": null,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="revoke-a-sub-user-key-associated-with-your-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="cis-automotive-api-pricing-data">Pricing Data</h1>

## Stats on ask price of new vehicles

<a id="opIdgetAvgListPrice_listPrice_get"></a>

> Code samples

```bash
curl 'https://example.com/listPrice?jwt=string&brandName=string' \
  -H 'Accept: application/json'
```

`GET /listPrice`

Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.

The available brand and region names can be retrieved from their respective endpoints.

<h3 id="stats-on-ask-price-of-new-vehicles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|brandName|query|string|true|none|
|regionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "average": 0,
      "median": 0,
      "name": "string",
      "pVariance": 0,
      "stdDev": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="stats-on-ask-price-of-new-vehicles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BasicModelStatsResp](#schemabasicmodelstatsresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Stats on sale price of new vehicles

<a id="opIdgetAvgSalePrice_salePrice_get"></a>

> Code samples

```bash
curl 'https://example.com/salePrice?jwt=string&brandName=string' \
  -H 'Accept: application/json'
```

`GET /salePrice`

Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.

The available brand and region names can be retrieved from their respective endpoints.

<h3 id="stats-on-sale-price-of-new-vehicles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|brandName|query|string|true|none|
|regionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "average": 0,
      "median": 0,
      "name": "string",
      "pVariance": 0,
      "stdDev": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="stats-on-sale-price-of-new-vehicles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BasicModelStatsResp](#schemabasicmodelstatsresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Histogram of sales price of new vehicles by model

<a id="opIdgetModelSaleBuckets_salePriceHistogram_get"></a>

> Code samples

```bash
curl 'https://example.com/salePriceHistogram?jwt=string&modelName=string&brandName=string' \
  -H 'Accept: application/json'
```

`GET /salePriceHistogram`

Histogram of the sale price of vehicles over the last 45 days for a given model and region. 
Price buckets are grouped in units of $1000
The available brand, model, and region names can be retrieved from their respective endpoints.

<h3 id="histogram-of-sales-price-of-new-vehicles-by-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|modelName|query|string|true|none|
|brandName|query|string|true|none|
|regionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "bucket": 0,
      "modelName": "string",
      "percentOfMarket": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="histogram-of-sales-price-of-new-vehicles-by-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BucketResp](#schemabucketresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="cis-automotive-api-vehicle-data">Vehicle Data</h1>

## Listings by Dealer ID

<a id="opIdgetListingsByDealer_listings_get"></a>

> Code samples

```bash
curl 'https://example.com/listings?jwt=string&dealerID=0' \
  -H 'Accept: application/json'
```

`GET /listings`

See /listings2 endpoint for more flexible listing search.
Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint. 
Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

<h3 id="listings-by-dealer-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|dealerID|query|integer|true|none|
|page|query|integer|false|none|
|newCars|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "listings": [
      {
        "askPrice": 0,
        "brandName": "string",
        "color": "string",
        "dealerID": 0,
        "firstSeen": "1970-01-01",
        "interiorColor": "string",
        "isNew": true,
        "lastSeen": "1970-01-01",
        "mileage": 0,
        "modelName": "string",
        "msrp": 0,
        "vin": "string",
        "vinDecode": {},
        "year": 0
      }
    ],
    "maxPages": 0,
    "page": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="listings-by-dealer-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListingResp](#schemalistingresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Flexible Listing Search

<a id="opIdgetListings2_listings2_get"></a>

> Code samples

```bash
curl 'https://example.com/listings2?jwt=string' \
  -H 'Accept: application/json'
```

`GET /listings2`

Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.
The other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria and can be replicated by this endpoint.

Dealer selection uses the most restrictive criteria supplied. From most restrictive to least: dealerID, gps, zipCode, region. You must provide some dealer selection criteria.

It is important to note that the units in the longitude are in degrees east, not degrees west. For example the coordinates 45.53N, 100.41W correspond to Mobridge, SC 
but they will be interpreted as 45.53N, 100.41E which corresponds to a point in the Gobi Desert near Jinst, Mongolia. You can fix this by converting the longitiude yourself, 
or by supplying a negative value (-100.41). For this example both (X, -100.41) and (X, 259.59) would be the same point. Units on the radius are miles and a smaller radius will
result in a faster response time. Maximum search radius depends on your subscription plan. 

The radius value is used for GPS searches and (optionally) zipCode searches. It is ignored for searches using other location criteria. If you provide a radius value with a zipCode
search, the zipCode will be mapped to GPS coordinates behind the scenes. If no radius is provided or if the zipCode to GPS mapping fails,
the API will only search for vehicles at dealerships within the provided zipCode.

Listing selection logically ANDs all options given. 

Time interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it 
as an anchor and look forward or backwards by the daysBack value. If startDate is specified and endDate is not, then endDate will be set to startDate+daysBack. 
Conversely if endDate is specified, but startDate is not then startDate will be set at endDate-daysBack.
If neither is supplied endpoint will set endDate to today and startDate to today-daysBack.

Maximum time interval is 45 days.

Mileage selection uses the provided mileage values and returns vehicles with mileage in the range [mileageLow, mileageHigh].
If mileageLow == mileageHigh (for example both are 0 default) this endpoint will not filter based on mileage. Not all used vehicles have a mileage record available. 

ExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.
If true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.
Setting extendedSearch to true will result in a slower response time. 

For example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.

If a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return 
used 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned
because the request matched no listings.

Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

<h3 id="flexible-listing-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|dealerID|query|integer|false|none|
|zipCode|query|integer|false|none|
|latitude|query|number|false|none|
|longitude|query|number|false|none|
|radius|query|number|false|none|
|regionName|query|string|false|none|
|brandName|query|string|false|none|
|modelName|query|string|false|none|
|modelYear|query|integer|false|none|
|mileageLow|query|integer|false|none|
|mileageHigh|query|integer|false|none|
|startDate|query|string(date)|false|none|
|endDate|query|string(date)|false|none|
|daysBack|query|integer|false|none|
|page|query|integer|false|none|
|newCars|query|boolean|false|none|
|extendedSearch|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "listings": [
      {
        "askPrice": 0,
        "brandName": "string",
        "color": "string",
        "dealerID": 0,
        "firstSeen": "1970-01-01",
        "interiorColor": "string",
        "isNew": true,
        "lastSeen": "1970-01-01",
        "mileage": 0,
        "modelName": "string",
        "msrp": 0,
        "vin": "string",
        "vinDecode": {},
        "year": 0
      }
    ],
    "maxPages": 0,
    "page": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="flexible-listing-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListingResp](#schemalistingresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Listings by Dealer ID and Date

<a id="opIdgetListingsByDealer_listingsByDate_get"></a>

> Code samples

```bash
curl 'https://example.com/listingsByDate?jwt=string&dealerID=0&startDate=1970-01-01&endDate=1970-01-01' \
  -H 'Accept: application/json'
```

`GET /listingsByDate`

See /listings2 endpoint for more flexible listing search.
Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint. 
Maximum time interval between startDate and endDate is 45 days.
Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

<h3 id="listings-by-dealer-id-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|dealerID|query|integer|true|none|
|startDate|query|string(date)|true|none|
|endDate|query|string(date)|true|none|
|page|query|integer|false|none|
|newCars|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "listings": [
      {
        "askPrice": 0,
        "brandName": "string",
        "color": "string",
        "dealerID": 0,
        "firstSeen": "1970-01-01",
        "interiorColor": "string",
        "isNew": true,
        "lastSeen": "1970-01-01",
        "mileage": 0,
        "modelName": "string",
        "msrp": 0,
        "vin": "string",
        "vinDecode": {},
        "year": 0
      }
    ],
    "maxPages": 0,
    "page": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="listings-by-dealer-id-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListingResp](#schemalistingresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Listings by Region

<a id="opIdgetListingsByRegion_listingsByRegion_get"></a>

> Code samples

```bash
curl 'https://example.com/listingsByRegion?jwt=string&regionName=string&modelName=string' \
  -H 'Accept: application/json'
```

`GET /listingsByRegion`

See /listings2 endpoint for more flexible listing search.
Returns a dealer's listings over up to the last 45 days by region. 
Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

<h3 id="listings-by-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|regionName|query|string|true|none|
|modelName|query|string|true|none|
|daysBack|query|integer|false|none|
|page|query|integer|false|none|
|newCars|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "listings": [
      {
        "askPrice": 0,
        "brandName": "string",
        "color": "string",
        "dealerID": 0,
        "firstSeen": "1970-01-01",
        "interiorColor": "string",
        "isNew": true,
        "lastSeen": "1970-01-01",
        "mileage": 0,
        "modelName": "string",
        "msrp": 0,
        "vin": "string",
        "vinDecode": {},
        "year": 0
      }
    ],
    "maxPages": 0,
    "page": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="listings-by-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListingResp](#schemalistingresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Listings by Region and Date

<a id="opIdgetListingsByRegionAndDate_listingsByRegionAndDate_get"></a>

> Code samples

```bash
curl 'https://example.com/listingsByRegionAndDate?jwt=string&regionName=string&modelName=string&startDate=1970-01-01&endDate=1970-01-01' \
  -H 'Accept: application/json'
```

`GET /listingsByRegionAndDate`

See /listings2 endpoint for more flexible listing search.
Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days 
Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

<h3 id="listings-by-region-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|regionName|query|string|true|none|
|modelName|query|string|true|none|
|startDate|query|string(date)|true|none|
|endDate|query|string(date)|true|none|
|page|query|integer|false|none|
|newCars|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "listings": [
      {
        "askPrice": 0,
        "brandName": "string",
        "color": "string",
        "dealerID": 0,
        "firstSeen": "1970-01-01",
        "interiorColor": "string",
        "isNew": true,
        "lastSeen": "1970-01-01",
        "mileage": 0,
        "modelName": "string",
        "msrp": 0,
        "vin": "string",
        "vinDecode": {},
        "year": 0
      }
    ],
    "maxPages": 0,
    "page": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="listings-by-region-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListingResp](#schemalistingresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Listings by ZipCode

<a id="opIdlistingsByZipCode_listingsByZipCode_get"></a>

> Code samples

```bash
curl 'https://example.com/listingsByZipCode?jwt=string&zipCode=0' \
  -H 'Accept: application/json'
```

`GET /listingsByZipCode`

See /listings2 endpoint for more flexible listing search.
Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.
Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

<h3 id="listings-by-zipcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|zipCode|query|integer|true|none|
|page|query|integer|false|none|
|newCars|query|boolean|false|none|
|modelName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "listings": [
      {
        "askPrice": 0,
        "brandName": "string",
        "color": "string",
        "dealerID": 0,
        "firstSeen": "1970-01-01",
        "interiorColor": "string",
        "isNew": true,
        "lastSeen": "1970-01-01",
        "mileage": 0,
        "modelName": "string",
        "msrp": 0,
        "vin": "string",
        "vinDecode": {},
        "year": 0
      }
    ],
    "maxPages": 0,
    "page": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="listings-by-zipcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListingResp](#schemalistingresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Listings by ZipCode and Date

<a id="opIdlistingsByZipCodeAndDate_listingsByZipCodeAndDate_get"></a>

> Code samples

```bash
curl 'https://example.com/listingsByZipCodeAndDate?jwt=string&zipCode=0&startDate=1970-01-01&endDate=1970-01-01' \
  -H 'Accept: application/json'
```

`GET /listingsByZipCodeAndDate`

See /listings2 endpoint for more flexible listing search.
Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.
Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

<h3 id="listings-by-zipcode-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|zipCode|query|integer|true|none|
|startDate|query|string(date)|true|none|
|endDate|query|string(date)|true|none|
|page|query|integer|false|none|
|newCars|query|boolean|false|none|
|modelName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "listings": [
      {
        "askPrice": 0,
        "brandName": "string",
        "color": "string",
        "dealerID": 0,
        "firstSeen": "1970-01-01",
        "interiorColor": "string",
        "isNew": true,
        "lastSeen": "1970-01-01",
        "mileage": 0,
        "modelName": "string",
        "msrp": 0,
        "vin": "string",
        "vinDecode": {},
        "year": 0
      }
    ],
    "maxPages": 0,
    "page": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="listings-by-zipcode-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListingResp](#schemalistingresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Premium. Simple Vehicle Market Report

<a id="opIdgetMarket3_similarSalePrice_get"></a>

> Code samples

```bash
curl 'https://example.com/similarSalePrice?jwt=string&vin=string' \
  -H 'Accept: application/json'
```

`GET /similarSalePrice`

Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN. 
Optionally restricts report to vehicles of the same model year and goes back up to 120 days.

<h3 id="premium-simple-vehicle-market-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|vin|query|string|true|none|
|regionName|query|string|false|none|
|daysBack|query|integer|false|none|
|sameYear|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "daysBack": 0,
    "mileCount": 0,
    "milesAvg": 0,
    "milesStdDev": 0,
    "newCount": 0,
    "newSaleAvg": 0,
    "newSaleStdDev": 0,
    "usedCount": 0,
    "usedSaleAvg": 0,
    "usedSaleStdDev": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="premium-simple-vehicle-market-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SimilarSalePriceResp](#schemasimilarsalepriceresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Premium. Simple Vehicle Market Report Over Arbitrary Locations and Vehicles.

<a id="opIdgetMarket4_valuation_get"></a>

> Code samples

```bash
curl 'https://example.com/valuation?jwt=string&vin=string' \
  -H 'Accept: application/json'
```

`GET /valuation`

Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new or used vehicles based off the provided VIN 
and matching the provided other search criteria. This endpoint can be easily used to determine market values in arbitrary geographic locations (like a city)
for specific vehicles.
See /listings2 endpoint for documentation on location, vehicle, and time search parameters. 
Date selection is restricted by your subscription tier, same as with the /listings2 endpoint.
Optionally restricts report to vehicles of the same model year. 

<h3 id="premium-simple-vehicle-market-report-over-arbitrary-locations-and-vehicles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|vin|query|string|true|none|
|dealerID|query|integer|false|none|
|zipCode|query|integer|false|none|
|latitude|query|number|false|none|
|longitude|query|number|false|none|
|radius|query|number|false|none|
|regionName|query|string|false|none|
|mileageLow|query|integer|false|none|
|mileageHigh|query|integer|false|none|
|startDate|query|string(date)|false|none|
|endDate|query|string(date)|false|none|
|daysBack|query|integer|false|none|
|newCars|query|boolean|false|none|
|extendedSearch|query|boolean|false|none|
|sameYear|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "daysBack": 0,
    "mileCount": 0,
    "milesAvg": 0,
    "milesStdDev": 0,
    "newCount": 0,
    "newSaleAvg": 0,
    "newSaleStdDev": 0,
    "usedCount": 0,
    "usedSaleAvg": 0,
    "usedSaleStdDev": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="premium-simple-vehicle-market-report-over-arbitrary-locations-and-vehicles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SimilarSalePriceResp](#schemasimilarsalepriceresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Premium. Simple Vehicle History Report

<a id="opIdgetHistory2_vehicleHistory_get"></a>

> Code samples

```bash
curl 'https://example.com/vehicleHistory?jwt=string&vin=string' \
  -H 'Accept: application/json'
```

`GET /vehicleHistory`

Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016. 

If your use case involves checking if a vehicle has appeared on the open market on or after a given date see 
the /vehicleSeen endpoint.

<h3 id="premium-simple-vehicle-history-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|vin|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "data": [
      {
        "dealerName": "string",
        "firstSeen": "1970-01-01",
        "lastSeen": "1970-01-01",
        "miles": 0,
        "new": true,
        "price": 0,
        "state": "string",
        "zip": 0
      }
    ],
    "vin": "string"
  },
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="premium-simple-vehicle-history-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[HistoryResp](#schemahistoryresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Checks if a VIN appeared on the market on or after a given date.

<a id="opIdgetVehicleSeen_vehicleSeen_get"></a>

> Code samples

```bash
curl 'https://example.com/vehicleSeen?jwt=string&vin=string&afterDate=1970-01-01' \
  -H 'Accept: application/json'
```

`GET /vehicleSeen`

Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response. 
This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).

<h3 id="checks-if-a-vin-appeared-on-the-market-on-or-after-a-given-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|vin|query|string|true|none|
|afterDate|query|string(date)|true|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": true,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="checks-if-a-vin-appeared-on-the-market-on-or-after-a-given-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BooleanResp](#schemabooleanresp)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Vin decoder and Recall Info

<a id="opIdvinDecode_vinDecode_get"></a>

> Code samples

```bash
curl 'https://example.com/vinDecode?jwt=string&vin=string' \
  -H 'Accept: application/json'
```

`GET /vinDecode`

Decodes the provided North American vin and provides recall information if available. 
We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
If passEmpty (default False) is True we will also include the empty fields in the response json. 
If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.

<h3 id="vin-decoder-and-recall-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jwt|query|string|true|none|
|vin|query|string|true|none|
|passEmpty|query|boolean|false|none|
|includeRecall|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": null,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="vin-decoder-and-recall-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_BasicModelStats">BasicModelStats</h2>
<!-- backwards compatibility -->
<a id="schemabasicmodelstats"></a>
<a id="schema_BasicModelStats"></a>
<a id="tocSbasicmodelstats"></a>
<a id="tocsbasicmodelstats"></a>

```json
{
  "average": 0,
  "median": 0,
  "name": "string",
  "pVariance": 0,
  "stdDev": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average|number|true|none|none|
|median|number|true|none|none|
|name|string|true|none|none|
|pVariance|number|true|none|none|
|stdDev|number|true|none|none|

<h2 id="tocS_BasicModelStatsResp">BasicModelStatsResp</h2>
<!-- backwards compatibility -->
<a id="schemabasicmodelstatsresp"></a>
<a id="schema_BasicModelStatsResp"></a>
<a id="tocSbasicmodelstatsresp"></a>
<a id="tocsbasicmodelstatsresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "average": 0,
      "median": 0,
      "name": "string",
      "pVariance": 0,
      "stdDev": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[[BasicModelStats](#schemabasicmodelstats)]|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_BooleanResp">BooleanResp</h2>
<!-- backwards compatibility -->
<a id="schemabooleanresp"></a>
<a id="schema_BooleanResp"></a>
<a id="tocSbooleanresp"></a>
<a id="tocsbooleanresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": true,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|boolean|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_BrandResp">BrandResp</h2>
<!-- backwards compatibility -->
<a id="schemabrandresp"></a>
<a id="schema_BrandResp"></a>
<a id="tocSbrandresp"></a>
<a id="tocsbrandresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    "string"
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[string]|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_BucketEntry">BucketEntry</h2>
<!-- backwards compatibility -->
<a id="schemabucketentry"></a>
<a id="schema_BucketEntry"></a>
<a id="tocSbucketentry"></a>
<a id="tocsbucketentry"></a>

```json
{
  "bucket": 0,
  "modelName": "string",
  "percentOfMarket": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|number|true|none|none|
|modelName|string|true|none|none|
|percentOfMarket|number|true|none|none|

<h2 id="tocS_BucketResp">BucketResp</h2>
<!-- backwards compatibility -->
<a id="schemabucketresp"></a>
<a id="schema_BucketResp"></a>
<a id="tocSbucketresp"></a>
<a id="tocsbucketresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "bucket": 0,
      "modelName": "string",
      "percentOfMarket": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[[BucketEntry](#schemabucketentry)]|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_DealershipData">DealershipData</h2>
<!-- backwards compatibility -->
<a id="schemadealershipdata"></a>
<a id="schema_DealershipData"></a>
<a id="tocSdealershipdata"></a>
<a id="tocsdealershipdata"></a>

```json
{
  "address": "string",
  "dealerName": "string",
  "ids": [
    0
  ],
  "state": "string",
  "zipCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|
|dealerName|string|true|none|none|
|ids|[integer]|true|none|none|
|state|string|true|none|none|
|zipCode|integer|true|none|none|

<h2 id="tocS_DealershipDataPaginated">DealershipDataPaginated</h2>
<!-- backwards compatibility -->
<a id="schemadealershipdatapaginated"></a>
<a id="schema_DealershipDataPaginated"></a>
<a id="tocSdealershipdatapaginated"></a>
<a id="tocsdealershipdatapaginated"></a>

```json
{
  "dealers": [
    {
      "address": "string",
      "dealerName": "string",
      "ids": [
        0
      ],
      "state": "string",
      "zipCode": 0
    }
  ],
  "maxPages": 0,
  "page": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealers|[[DealershipData](#schemadealershipdata)]|true|none|none|
|maxPages|integer|true|none|none|
|page|integer|true|none|none|

<h2 id="tocS_DealershipDataPaginatedResp">DealershipDataPaginatedResp</h2>
<!-- backwards compatibility -->
<a id="schemadealershipdatapaginatedresp"></a>
<a id="schema_DealershipDataPaginatedResp"></a>
<a id="tocSdealershipdatapaginatedresp"></a>
<a id="tocsdealershipdatapaginatedresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "dealers": [
      {
        "address": "string",
        "dealerName": "string",
        "ids": [
          0
        ],
        "state": "string",
        "zipCode": 0
      }
    ],
    "maxPages": 0,
    "page": 0
  },
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[DealershipDataPaginated](#schemadealershipdatapaginated)|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_DealershipDataResp">DealershipDataResp</h2>
<!-- backwards compatibility -->
<a id="schemadealershipdataresp"></a>
<a id="schema_DealershipDataResp"></a>
<a id="tocSdealershipdataresp"></a>
<a id="tocsdealershipdataresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "address": "string",
      "dealerName": "string",
      "ids": [
        0
      ],
      "state": "string",
      "zipCode": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[[DealershipData](#schemadealershipdata)]|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_EndpointList">EndpointList</h2>
<!-- backwards compatibility -->
<a id="schemaendpointlist"></a>
<a id="schema_EndpointList"></a>
<a id="tocSendpointlist"></a>
<a id="tocsendpointlist"></a>

```json
{
  "endPoints": [
    "*"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endPoints|[string]|false|none|none|

<h2 id="tocS_GenericResponse">GenericResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenericresponse"></a>
<a id="schema_GenericResponse"></a>
<a id="tocSgenericresponse"></a>
<a id="tocsgenericresponse"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": null,
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|object|false|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_HistoryResp">HistoryResp</h2>
<!-- backwards compatibility -->
<a id="schemahistoryresp"></a>
<a id="schema_HistoryResp"></a>
<a id="tocShistoryresp"></a>
<a id="tocshistoryresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "data": [
      {
        "dealerName": "string",
        "firstSeen": "1970-01-01",
        "lastSeen": "1970-01-01",
        "miles": 0,
        "new": true,
        "price": 0,
        "state": "string",
        "zip": 0
      }
    ],
    "vin": "string"
  },
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[VehHistoryData](#schemavehhistorydata)|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_JSONWebToken">JSONWebToken</h2>
<!-- backwards compatibility -->
<a id="schemajsonwebtoken"></a>
<a id="schema_JSONWebToken"></a>
<a id="tocSjsonwebtoken"></a>
<a id="tocsjsonwebtoken"></a>

```json
{
  "createdOn": 0,
  "expires": 0,
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdOn|integer|false|none|none|
|expires|integer|false|none|none|
|token|string|true|none|none|

<h2 id="tocS_Listing">Listing</h2>
<!-- backwards compatibility -->
<a id="schemalisting"></a>
<a id="schema_Listing"></a>
<a id="tocSlisting"></a>
<a id="tocslisting"></a>

```json
{
  "askPrice": 0,
  "brandName": "string",
  "color": "string",
  "dealerID": 0,
  "firstSeen": "1970-01-01",
  "interiorColor": "string",
  "isNew": true,
  "lastSeen": "1970-01-01",
  "mileage": 0,
  "modelName": "string",
  "msrp": 0,
  "vin": "string",
  "vinDecode": {},
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|askPrice|number|true|none|none|
|brandName|string|true|none|none|
|color|string|false|none|none|
|dealerID|integer|true|none|none|
|firstSeen|string(date)|true|none|none|
|interiorColor|string|false|none|none|
|isNew|boolean|true|none|none|
|lastSeen|string(date)|true|none|none|
|mileage|number|false|none|none|
|modelName|string|true|none|none|
|msrp|number|true|none|none|
|vin|string|true|none|none|
|vinDecode|object|false|none|none|
|year|number|true|none|none|

<h2 id="tocS_ListingResp">ListingResp</h2>
<!-- backwards compatibility -->
<a id="schemalistingresp"></a>
<a id="schema_ListingResp"></a>
<a id="tocSlistingresp"></a>
<a id="tocslistingresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "listings": [
      {
        "askPrice": 0,
        "brandName": "string",
        "color": "string",
        "dealerID": 0,
        "firstSeen": "1970-01-01",
        "interiorColor": "string",
        "isNew": true,
        "lastSeen": "1970-01-01",
        "mileage": 0,
        "modelName": "string",
        "msrp": 0,
        "vin": "string",
        "vinDecode": {},
        "year": 0
      }
    ],
    "maxPages": 0,
    "page": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[ListingRespPaginated](#schemalistingresppaginated)|true|none|none|
|endDate|string(date)|false|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|
|startDate|string(date)|false|none|none|

<h2 id="tocS_ListingRespPaginated">ListingRespPaginated</h2>
<!-- backwards compatibility -->
<a id="schemalistingresppaginated"></a>
<a id="schema_ListingRespPaginated"></a>
<a id="tocSlistingresppaginated"></a>
<a id="tocslistingresppaginated"></a>

```json
{
  "listings": [
    {
      "askPrice": 0,
      "brandName": "string",
      "color": "string",
      "dealerID": 0,
      "firstSeen": "1970-01-01",
      "interiorColor": "string",
      "isNew": true,
      "lastSeen": "1970-01-01",
      "mileage": 0,
      "modelName": "string",
      "msrp": 0,
      "vin": "string",
      "vinDecode": {},
      "year": 0
    }
  ],
  "maxPages": 0,
  "page": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listings|[[Listing](#schemalisting)]|true|none|none|
|maxPages|integer|true|none|none|
|page|integer|true|none|none|

<h2 id="tocS_ModelDict">ModelDict</h2>
<!-- backwards compatibility -->
<a id="schemamodeldict"></a>
<a id="schema_ModelDict"></a>
<a id="tocSmodeldict"></a>
<a id="tocsmodeldict"></a>

```json
{
  "modelName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelName|string|true|none|none|

<h2 id="tocS_ModelResp">ModelResp</h2>
<!-- backwards compatibility -->
<a id="schemamodelresp"></a>
<a id="schema_ModelResp"></a>
<a id="tocSmodelresp"></a>
<a id="tocsmodelresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "modelName": "string"
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[[ModelDict](#schemamodeldict)]|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_ModelYearDistEntry">ModelYearDistEntry</h2>
<!-- backwards compatibility -->
<a id="schemamodelyeardistentry"></a>
<a id="schema_ModelYearDistEntry"></a>
<a id="tocSmodelyeardistentry"></a>
<a id="tocsmodelyeardistentry"></a>

```json
{
  "brandName": "string",
  "modelName": "string",
  "percentOfMarket": 0,
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|true|none|none|
|modelName|string|true|none|none|
|percentOfMarket|number|true|none|none|
|year|integer|true|none|none|

<h2 id="tocS_ModelYearDistResp">ModelYearDistResp</h2>
<!-- backwards compatibility -->
<a id="schemamodelyeardistresp"></a>
<a id="schema_ModelYearDistResp"></a>
<a id="tocSmodelyeardistresp"></a>
<a id="tocsmodelyeardistresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "brandName": "string",
      "modelName": "string",
      "percentOfMarket": 0,
      "year": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[[ModelYearDistEntry](#schemamodelyeardistentry)]|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_RegionResp">RegionResp</h2>
<!-- backwards compatibility -->
<a id="schemaregionresp"></a>
<a id="schema_RegionResp"></a>
<a id="tocSregionresp"></a>
<a id="tocsregionresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    "string"
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[string]|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_SimilarSalePriceData">SimilarSalePriceData</h2>
<!-- backwards compatibility -->
<a id="schemasimilarsalepricedata"></a>
<a id="schema_SimilarSalePriceData"></a>
<a id="tocSsimilarsalepricedata"></a>
<a id="tocssimilarsalepricedata"></a>

```json
{
  "daysBack": 0,
  "mileCount": 0,
  "milesAvg": 0,
  "milesStdDev": 0,
  "newCount": 0,
  "newSaleAvg": 0,
  "newSaleStdDev": 0,
  "usedCount": 0,
  "usedSaleAvg": 0,
  "usedSaleStdDev": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|daysBack|integer|true|none|none|
|mileCount|integer|true|none|none|
|milesAvg|number|true|none|none|
|milesStdDev|number|true|none|none|
|newCount|integer|true|none|none|
|newSaleAvg|number|true|none|none|
|newSaleStdDev|number|true|none|none|
|usedCount|integer|true|none|none|
|usedSaleAvg|number|true|none|none|
|usedSaleStdDev|number|true|none|none|

<h2 id="tocS_SimilarSalePriceResp">SimilarSalePriceResp</h2>
<!-- backwards compatibility -->
<a id="schemasimilarsalepriceresp"></a>
<a id="schema_SimilarSalePriceResp"></a>
<a id="tocSsimilarsalepriceresp"></a>
<a id="tocssimilarsalepriceresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": {
    "daysBack": 0,
    "mileCount": 0,
    "milesAvg": 0,
    "milesStdDev": 0,
    "newCount": 0,
    "newSaleAvg": 0,
    "newSaleStdDev": 0,
    "usedCount": 0,
    "usedSaleAvg": 0,
    "usedSaleStdDev": 0
  },
  "endDate": "1970-01-01",
  "modelName": "string",
  "msg": "string",
  "regionName": "string",
  "startDate": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[SimilarSalePriceData](#schemasimilarsalepricedata)|true|none|none|
|endDate|string(date)|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|
|startDate|string(date)|true|none|none|

<h2 id="tocS_SubUserJSONWebToken">SubUserJSONWebToken</h2>
<!-- backwards compatibility -->
<a id="schemasubuserjsonwebtoken"></a>
<a id="schema_SubUserJSONWebToken"></a>
<a id="tocSsubuserjsonwebtoken"></a>
<a id="tocssubuserjsonwebtoken"></a>

```json
{
  "createdOn": 0,
  "domain": "string",
  "endPoints": [
    "*"
  ],
  "expires": 0,
  "token": "string",
  "uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdOn|integer|false|none|none|
|domain|string|true|none|none|
|endPoints|[string]|false|none|none|
|expires|integer|false|none|none|
|token|string|true|none|none|
|uuid|string|true|none|none|

<h2 id="tocS_TopModelEntry">TopModelEntry</h2>
<!-- backwards compatibility -->
<a id="schematopmodelentry"></a>
<a id="schema_TopModelEntry"></a>
<a id="tocStopmodelentry"></a>
<a id="tocstopmodelentry"></a>

```json
{
  "brandMarketShare": 0,
  "brandName": "string",
  "modelName": "string",
  "percentOfBrandSales": 0,
  "percentOfTopSales": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandMarketShare|number|true|none|none|
|brandName|string|true|none|none|
|modelName|string|true|none|none|
|percentOfBrandSales|number|true|none|none|
|percentOfTopSales|number|true|none|none|

<h2 id="tocS_TopModelResp">TopModelResp</h2>
<!-- backwards compatibility -->
<a id="schematopmodelresp"></a>
<a id="schema_TopModelResp"></a>
<a id="tocStopmodelresp"></a>
<a id="tocstopmodelresp"></a>

```json
{
  "brandName": "string",
  "cacheTimeLimit": 600,
  "condition": "string",
  "data": [
    {
      "brandMarketShare": 0,
      "brandName": "string",
      "modelName": "string",
      "percentOfBrandSales": 0,
      "percentOfTopSales": 0
    }
  ],
  "modelName": "string",
  "msg": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandName|string|false|none|none|
|cacheTimeLimit|integer|false|none|none|
|condition|string|false|none|none|
|data|[[TopModelEntry](#schematopmodelentry)]|true|none|none|
|modelName|string|false|none|none|
|msg|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_VehHistory">VehHistory</h2>
<!-- backwards compatibility -->
<a id="schemavehhistory"></a>
<a id="schema_VehHistory"></a>
<a id="tocSvehhistory"></a>
<a id="tocsvehhistory"></a>

```json
{
  "dealerName": "string",
  "firstSeen": "1970-01-01",
  "lastSeen": "1970-01-01",
  "miles": 0,
  "new": true,
  "price": 0,
  "state": "string",
  "zip": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealerName|string|true|none|none|
|firstSeen|string(date)|true|none|none|
|lastSeen|string(date)|true|none|none|
|miles|integer|true|none|none|
|new|boolean|true|none|none|
|price|number|true|none|none|
|state|string|true|none|none|
|zip|integer|true|none|none|

<h2 id="tocS_VehHistoryData">VehHistoryData</h2>
<!-- backwards compatibility -->
<a id="schemavehhistorydata"></a>
<a id="schema_VehHistoryData"></a>
<a id="tocSvehhistorydata"></a>
<a id="tocsvehhistorydata"></a>

```json
{
  "data": [
    {
      "dealerName": "string",
      "firstSeen": "1970-01-01",
      "lastSeen": "1970-01-01",
      "miles": 0,
      "new": true,
      "price": 0,
      "state": "string",
      "zip": 0
    }
  ],
  "vin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[VehHistory](#schemavehhistory)]|true|none|none|
|vin|string|true|none|none|
