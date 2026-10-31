<h1 id="charity-api">Charity API v1.2.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Charity API allows third-party developers to search for and access details on supported charitable organizations.

Base URLs:

* <a href="https://api.ebay.com/commerce/charity/v1">https://api.ebay.com/commerce/charity/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: clientCredentials
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope|View public data from eBay|

<h1 id="charity-api-charityorg">charity_org</h1>

## getCharityOrgs

<a id="opIdgetCharityOrgs"></a>

> Code samples

```bash
curl https://api.ebay.com/charity_org \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /charity_org`

This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.

<h3 id="getcharityorgs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code>|
|offset|query|string|false|The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code>|
|q|query|string|false|A query string that matches the keywords in name, mission statement, or description.|
|registration_ids|query|string|false|A comma-separated list of charitable organization registration IDs.<br /><br /><span class="tablenote"><b>Note: </b>Do not specify this parameter for query-based searches. Specify either the <b>q</b> or <b>registration_ids</b> parameter, but not both.</span><br /><br /><b>Maximum Limit:</b> <code>20</code>|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|A header used to specify the eBay marketplace ID.<br /><br /><b>Valid Values:</b> <code>EBAY_GB</code> and <code>EBAY_US</code>|

> Example responses

> 200 Response

```json
{
  "charityOrgs": [
    {
      "charityOrgId": "string",
      "description": "string",
      "location": {
        "address": {
          "city": "string",
          "country": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "geoCoordinates": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "logoImage": {
        "height": "string",
        "imageUrl": "string",
        "width": "string"
      },
      "missionStatement": "string",
      "name": "string",
      "registrationId": "string",
      "website": "string"
    }
  ],
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

<h3 id="getcharityorgs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CharitySearchResponse](#schemacharitysearchresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

## getCharityOrg

<a id="opIdgetCharityOrg"></a>

> Code samples

```bash
curl https://api.ebay.com/charity_org/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /charity_org/{charity_org_id}`

This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.

<h3 id="getcharityorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|charity_org_id|path|string|true|The unique ID of the charitable organization.|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|A header used to specify the eBay marketplace ID.<br /><br /><b>Valid Values:</b> <code>EBAY_GB</code> and <code>EBAY_US</code>|

> Example responses

> 200 Response

```json
{
  "charityOrgId": "string",
  "description": "string",
  "location": {
    "address": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "geoCoordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  "logoImage": {
    "height": "string",
    "imageUrl": "string",
    "width": "string"
  },
  "missionStatement": "string",
  "name": "string",
  "registrationId": "string",
  "website": "string"
}
```

<h3 id="getcharityorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CharityOrg](#schemacharityorg)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
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
  "city": "string",
  "country": "string",
  "postalCode": "string",
  "stateOrProvince": "string"
}
```

The physical location of the item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city of the charitable organization.|
|country|string|false|none|The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html ">ISO 3166</a> standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/charity/types/bas:CountryCodeEnum'>eBay API documentation</a>|
|postalCode|string|false|none|The postal code of the charitable organization.|
|stateOrProvince|string|false|none|The state or province of the charitable organization.|

<h2 id="tocS_CharityOrg">CharityOrg</h2>
<!-- backwards compatibility -->
<a id="schemacharityorg"></a>
<a id="schema_CharityOrg"></a>
<a id="tocScharityorg"></a>
<a id="tocscharityorg"></a>

```json
{
  "charityOrgId": "string",
  "description": "string",
  "location": {
    "address": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "geoCoordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  "logoImage": {
    "height": "string",
    "imageUrl": "string",
    "width": "string"
  },
  "missionStatement": "string",
  "name": "string",
  "registrationId": "string",
  "website": "string"
}
```

The full location, ID, logo and other details of the charity organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charityOrgId|string|false|none|The ID of the charitable organization.|
|description|string|false|none|The description of the charitable organization.|
|location|[Location](#schemalocation)|false|none|The location details of the charitable organization.|
|logoImage|[Image](#schemaimage)|false|none|The logo of the charitable organization.|
|missionStatement|string|false|none|The mission statement of the charitable organization.|
|name|string|false|none|The name of the charitable organization.|
|registrationId|string|false|none|The registration ID for the charitable organization.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> For the US marketplace, this is the EIN.</span>|
|website|string|false|none|The link to the website for the charitable organization.|

<h2 id="tocS_CharitySearchResponse">CharitySearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemacharitysearchresponse"></a>
<a id="schema_CharitySearchResponse"></a>
<a id="tocScharitysearchresponse"></a>
<a id="tocscharitysearchresponse"></a>

```json
{
  "charityOrgs": [
    {
      "charityOrgId": "string",
      "description": "string",
      "location": {
        "address": {
          "city": "string",
          "country": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "geoCoordinates": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "logoImage": {
        "height": "string",
        "imageUrl": "string",
        "width": "string"
      },
      "missionStatement": "string",
      "name": "string",
      "registrationId": "string",
      "website": "string"
    }
  ],
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

A single set of search results, with information for accessing other sets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charityOrgs|[[CharityOrg](#schemacharityorg)]|false|none|The list of charitable organizations that match the search criteria.|
|href|string|false|none|The relative path to the current set of results.|
|limit|integer(int32)|false|none|The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code>|
|next|string|false|none|The relative path to the next set of results.|
|offset|integer(int32)|false|none|The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code>|
|prev|string|false|none|The relative path to the previous set of results.|
|total|integer(int32)|false|none|The total number of matches for the search criteria.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "category": "string",
  "domain": "string",
  "errorId": 0,
  "inputRefIds": [
    "string"
  ],
  "longMessage": "string",
  "message": "string",
  "outputRefIds": [
    "string"
  ],
  "parameters": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "subdomain": "string"
}
```

This type defines the fields that can be returned in an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Identifies the type of erro.|
|domain|string|false|none|Name for the primary system where the error occurred. This is relevant for application errors.|
|errorId|integer(int32)|false|none|A unique number to identify the error.|
|inputRefIds|[string]|false|none|An array of request elements most closely associated to the error.|
|longMessage|string|false|none|A more detailed explanation of the error.|
|message|string|false|none|Information on how to correct the problem, in the end user's terms and language where applicable.|
|outputRefIds|[string]|false|none|An array of request elements most closely associated to the error.|
|parameters|[[ErrorParameter](#schemaerrorparameter)]|false|none|An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.|
|subdomain|string|false|none|Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.|

<h2 id="tocS_ErrorParameter">ErrorParameter</h2>
<!-- backwards compatibility -->
<a id="schemaerrorparameter"></a>
<a id="schema_ErrorParameter"></a>
<a id="tocSerrorparameter"></a>
<a id="tocserrorparameter"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The object of the error.|
|value|string|false|none|The value of the object.|

<h2 id="tocS_GeoCoordinates">GeoCoordinates</h2>
<!-- backwards compatibility -->
<a id="schemageocoordinates"></a>
<a id="schema_GeoCoordinates"></a>
<a id="tocSgeocoordinates"></a>
<a id="tocsgeocoordinates"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

Defines the format of a geographic coordinate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number|false|none|The latitude component of the geographic coordinate.|
|longitude|number|false|none|The longitude component of the geographic coordinate.|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "height": "string",
  "imageUrl": "string",
  "width": "string"
}
```

The logo of the charitable organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|string|false|none|The height of the logo image.|
|imageUrl|string|false|none|The URL to the logo image location.|
|width|string|false|none|The width of the logo image.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "geoCoordinates": {
    "latitude": 0,
    "longitude": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|The address of the charitable organization.|
|geoCoordinates|[GeoCoordinates](#schemageocoordinates)|false|none|The geo-coordinates of the charitable organization.|
