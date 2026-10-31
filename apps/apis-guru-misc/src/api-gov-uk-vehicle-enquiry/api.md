<h1 id="vehicle-enquiry-api">Vehicle Enquiry API v1.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Interface specification for the DVLA Vehicle Enquiry API

Base URLs:

* <a href="https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry">https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry</a> - Production environment

* <a href="https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry">https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry</a> - Test environment

Email: <a href="mailto:DvlaAPIAccess@dvla.gov.uk">DVLA API Team</a> 

<h1 id="vehicle-enquiry-api-vehicle">vehicle</h1>

## Get vehicle details by registration number

<a id="opIdgetVehicleDetailsByRegistrationNumber"></a>

> Code samples

```bash
curl https://example.com/v1/vehicles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-api-key: string' \
  -d '{
    "registrationNumber": "string"
  }'
```

`POST /v1/vehicles`

Returns vehicle details based on registration number

> Body parameter

```json
{
  "registrationNumber": "string"
}
```

<h3 id="get-vehicle-details-by-registration-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-api-key|header|string|true|Client Specific API Key|
|X-Correlation-Id|header|string|false|Consumer Correlation ID|
|body|body|[VehicleRequest](#schemavehiclerequest)|true|Registration number of the vehicle to find details for|
|» registrationNumber|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "artEndDate": "2007-12-25",
  "co2Emissions": 0,
  "colour": "Blue",
  "dateOfLastV5CIssued": "2016-12-25",
  "engineCapacity": 1796,
  "euroStatus": "Euro 5",
  "fuelType": "PETROL",
  "make": "ROVER",
  "markedForExport": true,
  "monthOfFirstDvlaRegistration": "2011-11",
  "monthOfFirstRegistration": "2012-12",
  "motExpiryDate": "2008-12-25",
  "motStatus": "No details held by DVLA",
  "realDrivingEmissions": "1",
  "registrationNumber": "WN67DSO",
  "revenueWeight": 1640,
  "taxDueDate": "2017-12-25",
  "taxStatus": "Untaxed",
  "typeApproval": "N1",
  "wheelplan": "NON STANDARD",
  "yearOfManufacture": 2004
}
```

> 400 Response

```json
{
  "errors": [
    {
      "code": "105",
      "detail": "Invalid format for field - vehicle registration number",
      "status": "400",
      "title": "Invalid vrn number"
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "code": "105",
      "detail": "Invalid format for field - vehicle registration number",
      "status": "400",
      "title": "Invalid vrn number"
    }
  ]
}
```

> 500 Response

```json
{
  "errors": [
    {
      "code": "105",
      "detail": "Invalid format for field - vehicle registration number",
      "status": "400",
      "title": "Invalid vrn number"
    }
  ]
}
```

> 503 Response

```json
{
  "errors": [
    {
      "code": "105",
      "detail": "Invalid format for field - vehicle registration number",
      "status": "400",
      "title": "Invalid vrn number"
    }
  ]
}
```

<h3 id="get-vehicle-details-by-registration-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Vehicle](#schemavehicle)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Vehicle Not Found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|
|503|Service Unavailable|Service Unavailable|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "errors": [
    {
      "code": "105",
      "detail": "Invalid format for field - vehicle registration number",
      "status": "400",
      "title": "Invalid vrn number"
    }
  ]
}
```

Error Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Errors](#schemaerrors)]|false|none|none|

<h2 id="tocS_Errors">Errors</h2>
<!-- backwards compatibility -->
<a id="schemaerrors"></a>
<a id="schema_Errors"></a>
<a id="tocSerrors"></a>
<a id="tocserrors"></a>

```json
{
  "code": "105",
  "detail": "Invalid format for field - vehicle registration number",
  "status": "400",
  "title": "Invalid vrn number"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|DVLA reference code|
|detail|string|false|none|A meaningful description of the error which has occurred|
|status|string|false|none|none|
|title|string|true|none|Error title|

<h2 id="tocS_Vehicle">Vehicle</h2>
<!-- backwards compatibility -->
<a id="schemavehicle"></a>
<a id="schema_Vehicle"></a>
<a id="tocSvehicle"></a>
<a id="tocsvehicle"></a>

```json
{
  "artEndDate": "2007-12-25",
  "co2Emissions": 0,
  "colour": "Blue",
  "dateOfLastV5CIssued": "2016-12-25",
  "engineCapacity": 1796,
  "euroStatus": "Euro 5",
  "fuelType": "PETROL",
  "make": "ROVER",
  "markedForExport": true,
  "monthOfFirstDvlaRegistration": "2011-11",
  "monthOfFirstRegistration": "2012-12",
  "motExpiryDate": "2008-12-25",
  "motStatus": "No details held by DVLA",
  "realDrivingEmissions": "1",
  "registrationNumber": "WN67DSO",
  "revenueWeight": 1640,
  "taxDueDate": "2017-12-25",
  "taxStatus": "Untaxed",
  "typeApproval": "N1",
  "wheelplan": "NON STANDARD",
  "yearOfManufacture": 2004
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artEndDate|string(date)|false|none|Additional Rate of Tax End Date, format: YYYY-MM-DD|
|co2Emissions|integer(int32)|false|none|Carbon Dioxide emissions in grams per kilometre|
|colour|string|false|none|Vehicle colour|
|dateOfLastV5CIssued|string(date)|false|none|Date of last V5C issued|
|engineCapacity|integer(int32)|false|none|Engine capacity in cubic centimetres|
|euroStatus|string|false|none|Euro Status (Dealer / Customer Provided (new vehicles))|
|fuelType|string|false|none|Fuel type (Method of Propulsion)|
|make|string|false|none|Vehicle make|
|markedForExport|boolean|false|none|True only if vehicle has been export marked|
|monthOfFirstDvlaRegistration|string(date)|false|none|Month of First DVLA Registration|
|monthOfFirstRegistration|string(date)|false|none|Month of First Registration|
|motExpiryDate|string(date)|false|none|Mot Expiry Date|
|motStatus|string|false|none|MOT Status of the vehicle|
|realDrivingEmissions|string|false|none|Real Driving Emissions value|
|registrationNumber|string|true|none|Registration number of the vehicle|
|revenueWeight|integer(int32)|false|none|Revenue weight in kilograms|
|taxDueDate|string(date)|false|none|Date of tax liablity, Used in calculating licence information presented to user|
|taxStatus|string|false|none|Tax status of the vehicle|
|typeApproval|string|false|none|Vehicle Type Approval Category|
|wheelplan|string|false|none|Vehicle wheel plan|
|yearOfManufacture|integer(int32)|false|none|Year of Manufacture|

#### Enumerated Values

|Property|Value|
|---|---|
|motStatus|No details held by DVLA|
|motStatus|No results returned|
|motStatus|Not valid|
|motStatus|Valid|
|taxStatus|Not Taxed for on Road Use|
|taxStatus|SORN|
|taxStatus|Taxed|
|taxStatus|Untaxed|

<h2 id="tocS_VehicleRequest">VehicleRequest</h2>
<!-- backwards compatibility -->
<a id="schemavehiclerequest"></a>
<a id="schema_VehicleRequest"></a>
<a id="tocSvehiclerequest"></a>
<a id="tocsvehiclerequest"></a>

```json
{
  "registrationNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registrationNumber|string|false|none|none|
