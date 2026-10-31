<h1 id="groundwater-wells-aquifers-and-registry-api">Groundwater Wells, Aquifers and Registry API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The groundwater wells, aquifers and registry API contains information related to groundwater wells and aquifers as well as a register of qualified well drillers and well pump installers registered to operate in B.C.

Base URLs:

* <a href="https://apps.nrs.gov.bc.ca/gwells/api/v1/">https://apps.nrs.gov.bc.ca/gwells/api/v1/</a>

<a href="http://www2.gov.bc.ca/gov/content?id=D1EE0A405E584363B205CD4353E02C88">Terms of service</a>
Email: <a href="mailto:groundwater@gov.bc.ca">groundwater@gov.bc.ca</a> 
License: <a href="https://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61">Open Government License - British Columbia</a>

# Authentication

* API Key (Bearer)
    - Parameter Name: **JWT**, in: header.

<h1 id="groundwater-wells-aquifers-and-registry-api-aquifer-codes">aquifer-codes</h1>

## aquifer-codes_demand_list

<a id="opIdaquifer-codes_demand_list"></a>

> Code samples

```bash
curl https://example.com/aquifer-codes/demand/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifer-codes/demand/`

return a list of aquifer demand codes

<h3 id="aquifer-codesdemandlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "code": "s",
      "description": "string"
    }
  ]
}
```

<h3 id="aquifer-codesdemandlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="aquifer-codesdemandlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri)|false|none|none|
|previous|string(uri)|false|none|none|
|results|[[AquiferDemand](#schemaaquiferdemand)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## aquifer-codes_materials_list

<a id="opIdaquifer-codes_materials_list"></a>

> Code samples

```bash
curl https://example.com/aquifer-codes/materials/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifer-codes/materials/`

return a list of aquifer material codes

<h3 id="aquifer-codesmaterialslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "code": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="aquifer-codesmaterialslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="aquifer-codesmaterialslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri)|false|none|none|
|previous|string(uri)|false|none|none|
|results|[[AquiferMaterial](#schemaaquifermaterial)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## aquifer-codes_productivity_list

<a id="opIdaquifer-codes_productivity_list"></a>

> Code samples

```bash
curl https://example.com/aquifer-codes/productivity/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifer-codes/productivity/`

return a list of aquifer productivity codes

<h3 id="aquifer-codesproductivitylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "code": "s",
      "description": "string"
    }
  ]
}
```

<h3 id="aquifer-codesproductivitylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="aquifer-codesproductivitylist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri)|false|none|none|
|previous|string(uri)|false|none|none|
|results|[[AquiferProductivity](#schemaaquiferproductivity)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## aquifer-codes_quality-concerns_list

<a id="opIdaquifer-codes_quality-concerns_list"></a>

> Code samples

```bash
curl https://example.com/aquifer-codes/quality-concerns/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifer-codes/quality-concerns/`

return a list of quality concern codes

<h3 id="aquifer-codesquality-concernslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "code": "st",
      "description": "string"
    }
  ]
}
```

<h3 id="aquifer-codesquality-concernslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="aquifer-codesquality-concernslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri)|false|none|none|
|previous|string(uri)|false|none|none|
|results|[[QualityConcern](#schemaqualityconcern)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## aquifer-codes_subtypes_list

<a id="opIdaquifer-codes_subtypes_list"></a>

> Code samples

```bash
curl https://example.com/aquifer-codes/subtypes/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifer-codes/subtypes/`

return a list of aquifer subtype codes

<h3 id="aquifer-codessubtypeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "code": "str",
      "description": "string"
    }
  ]
}
```

<h3 id="aquifer-codessubtypeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="aquifer-codessubtypeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri)|false|none|none|
|previous|string(uri)|false|none|none|
|results|[[AquiferSubtype](#schemaaquifersubtype)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## aquifer-codes_vulnerability_list

<a id="opIdaquifer-codes_vulnerability_list"></a>

> Code samples

```bash
curl https://example.com/aquifer-codes/vulnerability/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifer-codes/vulnerability/`

return a list of aquifer vulnerability codes

<h3 id="aquifer-codesvulnerabilitylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "code": "s",
      "description": "string"
    }
  ]
}
```

<h3 id="aquifer-codesvulnerabilitylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="aquifer-codesvulnerabilitylist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri)|false|none|none|
|previous|string(uri)|false|none|none|
|results|[[AquiferVulnerability](#schemaaquifervulnerability)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## aquifer-codes_water-use_list

<a id="opIdaquifer-codes_water-use_list"></a>

> Code samples

```bash
curl https://example.com/aquifer-codes/water-use/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifer-codes/water-use/`

return a list of water use codes

<h3 id="aquifer-codeswater-uselist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "code": "st",
      "description": "string"
    }
  ]
}
```

<h3 id="aquifer-codeswater-uselist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="aquifer-codeswater-uselist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri)|false|none|none|
|previous|string(uri)|false|none|none|
|results|[[WaterUse](#schemawateruse)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="groundwater-wells-aquifers-and-registry-api-aquifers">aquifers</h1>

## aquifers_list

<a id="opIdaquifers_list"></a>

> Code samples

```bash
curl https://example.com/aquifers/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifers/`

return a list of aquifers

<h3 id="aquiferslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aquifer_id|query|number|false|none|
|ordering|query|string|false|Which field to use when ordering the results.|
|search|query|string|false|A search term.|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "aquifer_id": 0,
      "aquifer_name": "string",
      "area": "string",
      "demand": "string",
      "demand_description": "string",
      "known_water_use": "string",
      "known_water_use_description": "string",
      "litho_stratographic_unit": "string",
      "location_description": "string",
      "mapping_year": 1990,
      "material": "string",
      "material_description": "string",
      "notes": "string",
      "productivity": "string",
      "productivity_description": "string",
      "quality_concern": "string",
      "quality_concern_description": "string",
      "subtype": "string",
      "subtype_description": "string",
      "vulnerability": "string",
      "vulnerability_description": "string"
    }
  ]
}
```

<h3 id="aquiferslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="aquiferslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri)|false|none|none|
|previous|string(uri)|false|none|none|
|results|[[Aquifer](#schemaaquifer)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## aquifers_names_list

<a id="opIdaquifers_names_list"></a>

> Code samples

```bash
curl https://example.com/aquifers/names/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifers/names/`

List all aquifers in a simplified format

<h3 id="aquifersnameslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|A search term.|

> Example responses

> 200 Response

```json
[
  {
    "aquifer_id": 0,
    "description": "string"
  }
]
```

<h3 id="aquifersnameslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="aquifersnameslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AquiferSerializerBasic](#schemaaquiferserializerbasic)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## aquifers_read

<a id="opIdaquifers_read"></a>

> Code samples

```bash
curl https://example.com/aquifers/0/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifers/{aquifer_id}/`

return details of aquifers

<h3 id="aquifersread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aquifer_id|path|integer|true|A unique integer value identifying this aquifer.|

> Example responses

> 200 Response

```json
{
  "aquifer_id": 0,
  "aquifer_name": "string",
  "area": "string",
  "demand": "string",
  "demand_description": "string",
  "known_water_use": "string",
  "known_water_use_description": "string",
  "litho_stratographic_unit": "string",
  "location_description": "string",
  "mapping_year": 1990,
  "material": "string",
  "material_description": "string",
  "notes": "string",
  "productivity": "string",
  "productivity_description": "string",
  "quality_concern": "string",
  "quality_concern_description": "string",
  "subtype": "string",
  "subtype_description": "string",
  "vulnerability": "string",
  "vulnerability_description": "string"
}
```

<h3 id="aquifersread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Aquifer](#schemaaquifer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## aquifers_files_list

<a id="opIdaquifers_files_list"></a>

> Code samples

```bash
curl https://example.com/aquifers/string/files \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /aquifers/{aquifer_id}/files`

list files found for the aquifer identified in the uri

<h3 id="aquifersfileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aquifer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "private": [
    {
      "name": "string",
      "url": "string"
    }
  ],
  "public": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="aquifersfileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="aquifersfileslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|private|[object]|false|none|none|
|» name|string|false|none|none|
|» url|string|false|none|none|
|public|[object]|false|none|none|
|» name|string|false|none|none|
|» url|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="groundwater-wells-aquifers-and-registry-api-cities">cities</h1>

## cities_drillers_list

<a id="opIdcities_drillers_list"></a>

> Code samples

```bash
curl https://example.com/cities/drillers/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /cities/drillers/`

returns a list of cities with a qualified, registered operator (driller or installer)

> Example responses

> 200 Response

```json
[
  {
    "organization": {
      "city": "string",
      "email": "user@example.com",
      "fax_tel": "string",
      "main_tel": "string",
      "name": "string",
      "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "org_verbose_name": "string",
      "postal_code": "string",
      "province_state": "string",
      "street_address": "string",
      "website_url": "http://example.com"
    }
  }
]
```

<h3 id="citiesdrillerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="citiesdrillerslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CityList](#schemacitylist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## cities_installers_list

<a id="opIdcities_installers_list"></a>

> Code samples

```bash
curl https://example.com/cities/installers/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /cities/installers/`

returns a list of cities with a qualified, registered operator (driller or installer)

> Example responses

> 200 Response

```json
[
  {
    "organization": {
      "city": "string",
      "email": "user@example.com",
      "fax_tel": "string",
      "main_tel": "string",
      "name": "string",
      "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "org_verbose_name": "string",
      "postal_code": "string",
      "province_state": "string",
      "street_address": "string",
      "website_url": "http://example.com"
    }
  }
]
```

<h3 id="citiesinstallerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="citiesinstallerslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CityList](#schemacitylist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="groundwater-wells-aquifers-and-registry-api-config">config</h1>

## config_list

<a id="opIdconfig_list"></a>

> Code samples

```bash
curl https://example.com/config \
  -H "JWT: ${API_KEY}"
```

`GET /config`

serves general configuration

<h3 id="configlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="groundwater-wells-aquifers-and-registry-api-drillers">drillers</h1>

## drillers_list

<a id="opIddrillers_list"></a>

> Code samples

```bash
curl https://example.com/drillers/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /drillers/`

Returns a list of all person records

<h3 id="drillerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|A search term.|
|ordering|query|string|false|Which field to use when ordering the results.|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
[
  {
    "contact_cell": "string",
    "contact_email": "user@example.com",
    "contact_tel": "string",
    "first_name": "string",
    "person_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "registrations": [
      {
        "activity": "string",
        "activity_description": "string",
        "applications": [
          {
            "cert_authority": "string",
            "certificate": "string",
            "current_status": {
              "code": "string",
              "description": "string"
            },
            "display_status": "string",
            "qualifications": [
              {
                "description": "string",
                "well_class": "string"
              }
            ],
            "removal_date": "1970-01-01",
            "subactivity": {
              "description": "string",
              "qualification_set": [
                {
                  "description": "string",
                  "well_class": "string"
                }
              ],
              "registries_subactivity_code": "string"
            }
          }
        ],
        "organization": {
          "city": "string",
          "email": "user@example.com",
          "fax_tel": "string",
          "main_tel": "string",
          "name": "string",
          "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "org_verbose_name": "string",
          "postal_code": "string",
          "province_state": "string",
          "street_address": "string",
          "website_url": "http://example.com"
        },
        "registration_no": "string"
      }
    ],
    "surname": "string"
  }
]
```

<h3 id="drillerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="drillerslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PersonList](#schemapersonlist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## drillers_names_list

<a id="opIddrillers_names_list"></a>

> Code samples

```bash
curl https://example.com/drillers/names/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /drillers/names/`

Search for a person in the Register

<h3 id="drillersnameslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|A search term.|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "person_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "registrations": [
      {
        "registration_no": "string",
        "registries_activity": "string"
      }
    ]
  }
]
```

<h3 id="drillersnameslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="drillersnameslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PersonName](#schemapersonname)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## drillers_files_list

<a id="opIddrillers_files_list"></a>

> Code samples

```bash
curl https://example.com/drillers/string/files/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /drillers/{person_guid}/files/`

list files found for the aquifer identified in the uri

<h3 id="drillersfileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person_guid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "private": [
    {
      "name": "string",
      "url": "string"
    }
  ],
  "public": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="drillersfileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="drillersfileslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|private|[object]|false|none|none|
|» name|string|false|none|none|
|» url|string|false|none|none|
|public|[object]|false|none|none|
|» name|string|false|none|none|
|» url|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="groundwater-wells-aquifers-and-registry-api-keycloak">keycloak</h1>

## keycloak_list

<a id="opIdkeycloak_list"></a>

> Code samples

```bash
curl https://example.com/keycloak \
  -H "JWT: ${API_KEY}"
```

`GET /keycloak`

serves keycloak config

<h3 id="keycloaklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="groundwater-wells-aquifers-and-registry-api-submissions">submissions</h1>

## submissions_options_list

<a id="opIdsubmissions_options_list"></a>

> Code samples

```bash
curl https://example.com/submissions/options/ \
  -H "JWT: ${API_KEY}"
```

`GET /submissions/options/`

Options required for submitting activity report forms

<h3 id="submissionsoptionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="groundwater-wells-aquifers-and-registry-api-surveys">surveys</h1>

## surveys_list

<a id="opIdsurveys_list"></a>

> Code samples

```bash
curl https://example.com/surveys/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /surveys/`

returns a list of active surveys

> Example responses

> 200 Response

```json
[
  {
    "survey_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "survey_introduction_text": "string",
    "survey_link": "string",
    "survey_page": "w"
  }
]
```

<h3 id="surveyslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="surveyslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Survey](#schemasurvey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="groundwater-wells-aquifers-and-registry-api-wells">wells</h1>

## wells_list

<a id="opIdwells_list"></a>

> Code samples

```bash
curl https://example.com/wells/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /wells/`

returns a list of wells

<h3 id="wellslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "alteration_end_date": "1970-01-01",
      "alternative_specs_submitted": false,
      "analytic_solution_type": "string",
      "aquifer": 0,
      "aquifer_vulnerability_index": "string",
      "artesian_flow": "string",
      "artesian_pressure": "string",
      "backfill_depth": "string",
      "backfill_material": "string",
      "backfill_type": "string",
      "bcgs_id": 0,
      "bedrock_depth": "string",
      "boundary_effect": "string",
      "city": "string",
      "comments": "string",
      "construction_end_date": "1970-01-01",
      "construction_start_date": "1970-01-01",
      "coordinate_acquisition_code": "string",
      "decommission_details": "string",
      "decommission_end_date": "1970-01-01",
      "decommission_method": "string",
      "decommission_reason": "string",
      "decommission_start_date": "1970-01-01",
      "development_hours": "string",
      "development_method": "string",
      "development_notes": "string",
      "diameter": "string",
      "drawdown": "string",
      "drilling_company": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "drilling_method": "string",
      "ems": "string",
      "filter_pack_from": "string",
      "filter_pack_material": "string",
      "filter_pack_material_size": "string",
      "filter_pack_thickness": "string",
      "filter_pack_to": "string",
      "final_casing_stick_up": "string",
      "finished_well_depth": "string",
      "ground_elevation": "string",
      "ground_elevation_method": "string",
      "hydraulic_conductivity": "string",
      "hydro_fracturing_performed": false,
      "hydro_fracturing_yield_increase": "string",
      "id_plate_attached_by": "string",
      "identification_plate_number": 0,
      "intended_water_use": "string",
      "land_district": "string",
      "latitude": "string",
      "legal_block": "string",
      "legal_district_lot": "string",
      "legal_lot": "string",
      "legal_pid": 0,
      "legal_plan": "string",
      "legal_range": "string",
      "legal_section": "string",
      "legal_township": "string",
      "licenced_status": "string",
      "liner_diameter": "string",
      "liner_from": "string",
      "liner_material": "string",
      "liner_thickness": "string",
      "liner_to": "string",
      "longitude": "string",
      "observation_well_number": "string",
      "observation_well_status": "string",
      "other_drilling_method": "string",
      "other_screen_bottom": "string",
      "other_screen_material": "string",
      "owner_full_name": "string",
      "recommended_pump_depth": "string",
      "recommended_pump_rate": "string",
      "screen_bottom": "string",
      "screen_information": "string",
      "screen_intake_method": "string",
      "screen_material": "string",
      "screen_opening": "string",
      "screen_type": "string",
      "sealant_material": "string",
      "specific_storage": "string",
      "specific_yield": "string",
      "static_level_before_test": "string",
      "static_water_level": "string",
      "storativity": "string",
      "street_address": "string",
      "surface_seal_depth": "string",
      "surface_seal_length": "string",
      "surface_seal_material": "string",
      "surface_seal_method": "string",
      "surface_seal_thickness": "string",
      "testing_duration": 0,
      "testing_method": "string",
      "total_depth_drilled": "string",
      "transmissivity": "string",
      "utm_easting": -2147483648,
      "utm_northing": -2147483648,
      "utm_zone_code": "string",
      "water_quality_characteristics": [
        "string"
      ],
      "water_quality_colour": "string",
      "water_quality_odour": "string",
      "water_supply_system_name": "string",
      "water_supply_system_well_name": "string",
      "well_cap_type": "string",
      "well_class": "string",
      "well_disinfected": false,
      "well_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "well_identification_plate_attached": "string",
      "well_location_description": "string",
      "well_orientation": true,
      "well_status": "string",
      "well_subclass": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "well_tag_number": 0,
      "well_yield": "string",
      "well_yield_unit": "string",
      "yield_estimation_duration": "string",
      "yield_estimation_method": "string",
      "yield_estimation_rate": "string"
    }
  ]
}
```

<h3 id="wellslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="wellslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri)|false|none|none|
|previous|string(uri)|false|none|none|
|results|[[WellList](#schemawelllist)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## wells_tags_list

<a id="opIdwells_tags_list"></a>

> Code samples

```bash
curl https://example.com/wells/tags/ \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /wells/tags/`

seach for wells by tag or owner

<h3 id="wellstagslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|A search term.|
|ordering|query|string|false|Which field to use when ordering the results.|

> Example responses

> 200 Response

```json
[
  {
    "owner_full_name": "string",
    "well_tag_number": 0
  }
]
```

<h3 id="wellstagslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="wellstagslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WellTagSearch](#schemawelltagsearch)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## wells_files_list

<a id="opIdwells_files_list"></a>

> Code samples

```bash
curl https://example.com/wells/string/files \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /wells/{tag}/files`

list files found for the well identified in the uri

<h3 id="wellsfileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "private": [
    {
      "name": "string",
      "url": "string"
    }
  ],
  "public": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="wellsfileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="wellsfileslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|private|[object]|false|none|none|
|» name|string|false|none|none|
|» url|string|false|none|none|
|public|[object]|false|none|none|
|» name|string|false|none|none|
|» url|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## wells_read

<a id="opIdwells_read"></a>

> Code samples

```bash
curl https://example.com/wells/0 \
  -H 'Accept: application/json' \
  -H "JWT: ${API_KEY}"
```

`GET /wells/{well_tag_number}`

Return well detail.
This view is open to all, and has no permissions.

<h3 id="wellsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|well_tag_number|path|integer|true|A unique integer value identifying this well.|

> Example responses

> 200 Response

```json
{
  "alteration_end_date": "1970-01-01",
  "alternative_specs_submitted": false,
  "analytic_solution_type": "string",
  "aquifer": 0,
  "aquifer_vulnerability_index": "string",
  "artesian_flow": "string",
  "artesian_pressure": "string",
  "backfill_depth": "string",
  "backfill_material": "string",
  "backfill_type": "string",
  "bcgs_id": 0,
  "bedrock_depth": "string",
  "boundary_effect": "string",
  "casing_set": [
    {
      "casing_code": "string",
      "casing_material": "string",
      "diameter": "string",
      "drive_shoe": false,
      "end": "string",
      "start": "string",
      "wall_thickness": "string"
    }
  ],
  "city": "string",
  "comments": "string",
  "company_of_person_responsible": {
    "name": "string",
    "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "org_verbose_name": "string"
  },
  "construction_end_date": "1970-01-01",
  "construction_start_date": "1970-01-01",
  "coordinate_acquisition_code": "string",
  "decommission_description_set": [
    {
      "end": "string",
      "material": "string",
      "observations": "string",
      "start": "string"
    }
  ],
  "decommission_details": "string",
  "decommission_end_date": "1970-01-01",
  "decommission_method": "string",
  "decommission_reason": "string",
  "decommission_start_date": "1970-01-01",
  "development_hours": "string",
  "development_method": "string",
  "development_notes": "string",
  "diameter": "string",
  "drawdown": "string",
  "drilling_company": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "drilling_method": "string",
  "ems": "string",
  "filter_pack_from": "string",
  "filter_pack_material": "string",
  "filter_pack_material_size": "string",
  "filter_pack_thickness": "string",
  "filter_pack_to": "string",
  "final_casing_stick_up": "string",
  "finished_well_depth": "string",
  "ground_elevation": "string",
  "ground_elevation_method": "string",
  "hydraulic_conductivity": "string",
  "hydro_fracturing_performed": false,
  "hydro_fracturing_yield_increase": "string",
  "id_plate_attached_by": "string",
  "identification_plate_number": 0,
  "intended_water_use": "string",
  "land_district": "string",
  "latitude": "string",
  "legal_block": "string",
  "legal_district_lot": "string",
  "legal_lot": "string",
  "legal_pid": 0,
  "legal_plan": "string",
  "legal_range": "string",
  "legal_section": "string",
  "legal_township": "string",
  "licenced_status": "string",
  "liner_diameter": "string",
  "liner_from": "string",
  "liner_material": "string",
  "liner_thickness": "string",
  "liner_to": "string",
  "linerperforation_set": [
    {
      "end": "string",
      "start": "string"
    }
  ],
  "lithologydescription_set": [
    {
      "lithology_colour": "string",
      "lithology_from": "string",
      "lithology_hardness": "string",
      "lithology_moisture": "string",
      "lithology_raw_data": "string",
      "lithology_to": "string",
      "water_bearing_estimated_flow": "string"
    }
  ],
  "longitude": "string",
  "observation_well_number": "string",
  "observation_well_status": "string",
  "other_drilling_method": "string",
  "other_screen_bottom": "string",
  "other_screen_material": "string",
  "owner_full_name": "string",
  "person_responsible": {
    "name": "string",
    "person_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "recommended_pump_depth": "string",
  "recommended_pump_rate": "string",
  "screen_bottom": "string",
  "screen_information": "string",
  "screen_intake_method": "string",
  "screen_material": "string",
  "screen_opening": "string",
  "screen_set": [
    {
      "assembly_type": "string",
      "end": "string",
      "internal_diameter": "string",
      "slot_size": "string",
      "start": "string"
    }
  ],
  "screen_type": "string",
  "sealant_material": "string",
  "specific_storage": "string",
  "specific_yield": "string",
  "static_level_before_test": "string",
  "static_water_level": "string",
  "storativity": "string",
  "street_address": "string",
  "surface_seal_depth": "string",
  "surface_seal_length": "string",
  "surface_seal_material": "string",
  "surface_seal_method": "string",
  "surface_seal_thickness": "string",
  "testing_duration": 0,
  "testing_method": "string",
  "total_depth_drilled": "string",
  "transmissivity": "string",
  "utm_easting": -2147483648,
  "utm_northing": -2147483648,
  "utm_zone_code": "string",
  "water_quality_characteristics": [
    "string"
  ],
  "water_quality_colour": "string",
  "water_quality_odour": "string",
  "water_supply_system_name": "string",
  "water_supply_system_well_name": "string",
  "well": 0,
  "well_cap_type": "string",
  "well_class": "string",
  "well_disinfected": false,
  "well_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "well_identification_plate_attached": "string",
  "well_location_description": "string",
  "well_orientation": true,
  "well_status": "string",
  "well_subclass": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "well_tag_number": 0,
  "well_yield": "string",
  "well_yield_unit": "string",
  "yield_estimation_duration": "string",
  "yield_estimation_method": "string",
  "yield_estimation_rate": "string"
}
```

<h3 id="wellsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[WellDetail](#schemawelldetail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_ApplicationList">ApplicationList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationlist"></a>
<a id="schema_ApplicationList"></a>
<a id="tocSapplicationlist"></a>
<a id="tocsapplicationlist"></a>

```json
{
  "cert_authority": "string",
  "certificate": "string",
  "current_status": {
    "code": "string",
    "description": "string"
  },
  "display_status": "string",
  "qualifications": [
    {
      "description": "string",
      "well_class": "string"
    }
  ],
  "removal_date": "1970-01-01",
  "subactivity": {
    "description": "string",
    "qualification_set": [
      {
        "description": "string",
        "well_class": "string"
      }
    ],
    "registries_subactivity_code": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cert_authority|string|false|read-only|none|
|certificate|string|false|read-only|none|
|current_status|[ApplicationStatusCode](#schemaapplicationstatuscode)|false|none|none|
|display_status|string|false|read-only|none|
|qualifications|[[Qualification](#schemaqualification)]|false|read-only|none|
|removal_date|string(date)|false|none|none|
|subactivity|[Subactivity](#schemasubactivity)|true|none|none|

<h2 id="tocS_ApplicationStatusCode">ApplicationStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationstatuscode"></a>
<a id="schema_ApplicationStatusCode"></a>
<a id="tocSapplicationstatuscode"></a>
<a id="tocsapplicationstatuscode"></a>

```json
{
  "code": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|read-only|none|
|description|string|true|none|none|

<h2 id="tocS_Aquifer">Aquifer</h2>
<!-- backwards compatibility -->
<a id="schemaaquifer"></a>
<a id="schema_Aquifer"></a>
<a id="tocSaquifer"></a>
<a id="tocsaquifer"></a>

```json
{
  "aquifer_id": 0,
  "aquifer_name": "string",
  "area": "string",
  "demand": "string",
  "demand_description": "string",
  "known_water_use": "string",
  "known_water_use_description": "string",
  "litho_stratographic_unit": "string",
  "location_description": "string",
  "mapping_year": 1990,
  "material": "string",
  "material_description": "string",
  "notes": "string",
  "productivity": "string",
  "productivity_description": "string",
  "quality_concern": "string",
  "quality_concern_description": "string",
  "subtype": "string",
  "subtype_description": "string",
  "vulnerability": "string",
  "vulnerability_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aquifer_id|integer|false|read-only|none|
|aquifer_name|string|false|none|none|
|area|string(decimal)|false|none|none|
|demand|string|false|none|none|
|demand_description|string|false|read-only|none|
|known_water_use|string|false|none|none|
|known_water_use_description|string|false|read-only|none|
|litho_stratographic_unit|string|false|none|none|
|location_description|string|false|none|none|
|mapping_year|integer|false|none|Use the following format: |
|material|string|false|none|none|
|material_description|string|false|read-only|none|
|notes|string|false|none|none|
|productivity|string|false|none|none|
|productivity_description|string|false|read-only|none|
|quality_concern|string|false|none|none|
|quality_concern_description|string|false|read-only|none|
|subtype|string|false|none|none|
|subtype_description|string|false|read-only|none|
|vulnerability|string|false|none|none|
|vulnerability_description|string|false|read-only|none|

<h2 id="tocS_AquiferDemand">AquiferDemand</h2>
<!-- backwards compatibility -->
<a id="schemaaquiferdemand"></a>
<a id="schema_AquiferDemand"></a>
<a id="tocSaquiferdemand"></a>
<a id="tocsaquiferdemand"></a>

```json
{
  "code": "s",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_AquiferMaterial">AquiferMaterial</h2>
<!-- backwards compatibility -->
<a id="schemaaquifermaterial"></a>
<a id="schema_AquiferMaterial"></a>
<a id="tocSaquifermaterial"></a>
<a id="tocsaquifermaterial"></a>

```json
{
  "code": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_AquiferProductivity">AquiferProductivity</h2>
<!-- backwards compatibility -->
<a id="schemaaquiferproductivity"></a>
<a id="schema_AquiferProductivity"></a>
<a id="tocSaquiferproductivity"></a>
<a id="tocsaquiferproductivity"></a>

```json
{
  "code": "s",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_AquiferSerializerBasic">AquiferSerializerBasic</h2>
<!-- backwards compatibility -->
<a id="schemaaquiferserializerbasic"></a>
<a id="schema_AquiferSerializerBasic"></a>
<a id="tocSaquiferserializerbasic"></a>
<a id="tocsaquiferserializerbasic"></a>

```json
{
  "aquifer_id": 0,
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aquifer_id|integer|false|read-only|none|
|description|string|false|read-only|none|

<h2 id="tocS_AquiferSubtype">AquiferSubtype</h2>
<!-- backwards compatibility -->
<a id="schemaaquifersubtype"></a>
<a id="schema_AquiferSubtype"></a>
<a id="tocSaquifersubtype"></a>
<a id="tocsaquifersubtype"></a>

```json
{
  "code": "str",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_AquiferVulnerability">AquiferVulnerability</h2>
<!-- backwards compatibility -->
<a id="schemaaquifervulnerability"></a>
<a id="schema_AquiferVulnerability"></a>
<a id="tocSaquifervulnerability"></a>
<a id="tocsaquifervulnerability"></a>

```json
{
  "code": "s",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_Casing">Casing</h2>
<!-- backwards compatibility -->
<a id="schemacasing"></a>
<a id="schema_Casing"></a>
<a id="tocScasing"></a>
<a id="tocscasing"></a>

```json
{
  "casing_code": "string",
  "casing_material": "string",
  "diameter": "string",
  "drive_shoe": false,
  "end": "string",
  "start": "string",
  "wall_thickness": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|casing_code|string|false|none|none|
|casing_material|string|false|none|none|
|diameter|string(decimal)|true|none|none|
|drive_shoe|boolean|false|none|none|
|end|string(decimal)|true|none|none|
|start|string(decimal)|true|none|none|
|wall_thickness|string(decimal)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|drive_shoe|false|
|drive_shoe|true|

<h2 id="tocS_CityList">CityList</h2>
<!-- backwards compatibility -->
<a id="schemacitylist"></a>
<a id="schema_CityList"></a>
<a id="tocScitylist"></a>
<a id="tocscitylist"></a>

```json
{
  "organization": {
    "city": "string",
    "email": "user@example.com",
    "fax_tel": "string",
    "main_tel": "string",
    "name": "string",
    "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "org_verbose_name": "string",
    "postal_code": "string",
    "province_state": "string",
    "street_address": "string",
    "website_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organization|[Organization](#schemaorganization)|true|none|none|

<h2 id="tocS_DecommissionDescription">DecommissionDescription</h2>
<!-- backwards compatibility -->
<a id="schemadecommissiondescription"></a>
<a id="schema_DecommissionDescription"></a>
<a id="tocSdecommissiondescription"></a>
<a id="tocsdecommissiondescription"></a>

```json
{
  "end": "string",
  "material": "string",
  "observations": "string",
  "start": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string(decimal)|true|none|none|
|material|string|true|none|none|
|observations|string|false|none|none|
|start|string(decimal)|true|none|none|

<h2 id="tocS_LinerPerforation">LinerPerforation</h2>
<!-- backwards compatibility -->
<a id="schemalinerperforation"></a>
<a id="schema_LinerPerforation"></a>
<a id="tocSlinerperforation"></a>
<a id="tocslinerperforation"></a>

```json
{
  "end": "string",
  "start": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string(decimal)|true|none|none|
|start|string(decimal)|true|none|none|

<h2 id="tocS_LithologyDescription">LithologyDescription</h2>
<!-- backwards compatibility -->
<a id="schemalithologydescription"></a>
<a id="schema_LithologyDescription"></a>
<a id="tocSlithologydescription"></a>
<a id="tocslithologydescription"></a>

```json
{
  "lithology_colour": "string",
  "lithology_from": "string",
  "lithology_hardness": "string",
  "lithology_moisture": "string",
  "lithology_raw_data": "string",
  "lithology_to": "string",
  "water_bearing_estimated_flow": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lithology_colour|string|false|none|none|
|lithology_from|string(decimal)|false|none|none|
|lithology_hardness|string|false|none|none|
|lithology_moisture|string|false|none|none|
|lithology_raw_data|string|false|none|none|
|lithology_to|string(decimal)|false|none|none|
|water_bearing_estimated_flow|string(decimal)|false|none|none|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "city": "string",
  "email": "user@example.com",
  "fax_tel": "string",
  "main_tel": "string",
  "name": "string",
  "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "org_verbose_name": "string",
  "postal_code": "string",
  "province_state": "string",
  "street_address": "string",
  "website_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|email|string(email)|false|none|none|
|fax_tel|string|false|none|none|
|main_tel|string|false|none|none|
|name|string|true|none|none|
|org_guid|string(uuid)|false|read-only|none|
|org_verbose_name|string|false|read-only|none|
|postal_code|string|false|none|none|
|province_state|string|true|none|none|
|street_address|string|false|none|none|
|website_url|string(uri)|false|none|none|

<h2 id="tocS_OrganizationList">OrganizationList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationlist"></a>
<a id="schema_OrganizationList"></a>
<a id="tocSorganizationlist"></a>
<a id="tocsorganizationlist"></a>

```json
{
  "city": "string",
  "email": "user@example.com",
  "fax_tel": "string",
  "main_tel": "string",
  "name": "string",
  "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "org_verbose_name": "string",
  "postal_code": "string",
  "province_state": "string",
  "street_address": "string",
  "website_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|email|string(email)|false|none|none|
|fax_tel|string|false|none|none|
|main_tel|string|false|none|none|
|name|string|true|none|none|
|org_guid|string(uuid)|false|read-only|none|
|org_verbose_name|string|false|read-only|none|
|postal_code|string|false|none|none|
|province_state|string|true|none|none|
|street_address|string|false|none|none|
|website_url|string(uri)|false|none|none|

<h2 id="tocS_OrganizationNameList">OrganizationNameList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationnamelist"></a>
<a id="schema_OrganizationNameList"></a>
<a id="tocSorganizationnamelist"></a>
<a id="tocsorganizationnamelist"></a>

```json
{
  "name": "string",
  "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "org_verbose_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|org_guid|string(uuid)|false|read-only|none|
|org_verbose_name|string|false|read-only|none|

<h2 id="tocS_PersonBasic">PersonBasic</h2>
<!-- backwards compatibility -->
<a id="schemapersonbasic"></a>
<a id="schema_PersonBasic"></a>
<a id="tocSpersonbasic"></a>
<a id="tocspersonbasic"></a>

```json
{
  "name": "string",
  "person_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|none|
|person_guid|string(uuid)|false|read-only|none|

<h2 id="tocS_PersonList">PersonList</h2>
<!-- backwards compatibility -->
<a id="schemapersonlist"></a>
<a id="schema_PersonList"></a>
<a id="tocSpersonlist"></a>
<a id="tocspersonlist"></a>

```json
{
  "contact_cell": "string",
  "contact_email": "user@example.com",
  "contact_tel": "string",
  "first_name": "string",
  "person_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "registrations": [
    {
      "activity": "string",
      "activity_description": "string",
      "applications": [
        {
          "cert_authority": "string",
          "certificate": "string",
          "current_status": {
            "code": "string",
            "description": "string"
          },
          "display_status": "string",
          "qualifications": [
            {
              "description": "string",
              "well_class": "string"
            }
          ],
          "removal_date": "1970-01-01",
          "subactivity": {
            "description": "string",
            "qualification_set": [
              {
                "description": "string",
                "well_class": "string"
              }
            ],
            "registries_subactivity_code": "string"
          }
        }
      ],
      "organization": {
        "city": "string",
        "email": "user@example.com",
        "fax_tel": "string",
        "main_tel": "string",
        "name": "string",
        "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "org_verbose_name": "string",
        "postal_code": "string",
        "province_state": "string",
        "street_address": "string",
        "website_url": "http://example.com"
      },
      "registration_no": "string"
    }
  ],
  "surname": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact_cell|string|false|none|none|
|contact_email|string(email)|false|none|none|
|contact_tel|string|false|none|none|
|first_name|string|true|none|none|
|person_guid|string(uuid)|false|read-only|none|
|registrations|[[RegistrationsList](#schemaregistrationslist)]|false|read-only|none|
|surname|string|true|none|none|

<h2 id="tocS_PersonName">PersonName</h2>
<!-- backwards compatibility -->
<a id="schemapersonname"></a>
<a id="schema_PersonName"></a>
<a id="tocSpersonname"></a>
<a id="tocspersonname"></a>

```json
{
  "name": "string",
  "person_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "registrations": [
    {
      "registration_no": "string",
      "registries_activity": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|none|
|person_guid|string(uuid)|false|read-only|none|
|registrations|[[RegistrationsNumber](#schemaregistrationsnumber)]|false|read-only|none|

<h2 id="tocS_Qualification">Qualification</h2>
<!-- backwards compatibility -->
<a id="schemaqualification"></a>
<a id="schema_Qualification"></a>
<a id="tocSqualification"></a>
<a id="tocsqualification"></a>

```json
{
  "description": "string",
  "well_class": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|read-only|none|
|well_class|string|true|none|none|

<h2 id="tocS_QualityConcern">QualityConcern</h2>
<!-- backwards compatibility -->
<a id="schemaqualityconcern"></a>
<a id="schema_QualityConcern"></a>
<a id="tocSqualityconcern"></a>
<a id="tocsqualityconcern"></a>

```json
{
  "code": "st",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_RegistrationsList">RegistrationsList</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationslist"></a>
<a id="schema_RegistrationsList"></a>
<a id="tocSregistrationslist"></a>
<a id="tocsregistrationslist"></a>

```json
{
  "activity": "string",
  "activity_description": "string",
  "applications": [
    {
      "cert_authority": "string",
      "certificate": "string",
      "current_status": {
        "code": "string",
        "description": "string"
      },
      "display_status": "string",
      "qualifications": [
        {
          "description": "string",
          "well_class": "string"
        }
      ],
      "removal_date": "1970-01-01",
      "subactivity": {
        "description": "string",
        "qualification_set": [
          {
            "description": "string",
            "well_class": "string"
          }
        ],
        "registries_subactivity_code": "string"
      }
    }
  ],
  "organization": {
    "city": "string",
    "email": "user@example.com",
    "fax_tel": "string",
    "main_tel": "string",
    "name": "string",
    "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "org_verbose_name": "string",
    "postal_code": "string",
    "province_state": "string",
    "street_address": "string",
    "website_url": "http://example.com"
  },
  "registration_no": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|string|false|read-only|none|
|activity_description|string|false|read-only|none|
|applications|[[ApplicationList](#schemaapplicationlist)]|false|read-only|none|
|organization|[OrganizationList](#schemaorganizationlist)|true|none|none|
|registration_no|string|false|none|none|

<h2 id="tocS_RegistrationsNumber">RegistrationsNumber</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationsnumber"></a>
<a id="schema_RegistrationsNumber"></a>
<a id="tocSregistrationsnumber"></a>
<a id="tocsregistrationsnumber"></a>

```json
{
  "registration_no": "string",
  "registries_activity": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registration_no|string|false|none|none|
|registries_activity|string|true|none|none|

<h2 id="tocS_Screen">Screen</h2>
<!-- backwards compatibility -->
<a id="schemascreen"></a>
<a id="schema_Screen"></a>
<a id="tocSscreen"></a>
<a id="tocsscreen"></a>

```json
{
  "assembly_type": "string",
  "end": "string",
  "internal_diameter": "string",
  "slot_size": "string",
  "start": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assembly_type|string|true|none|none|
|end|string(decimal)|true|none|none|
|internal_diameter|string(decimal)|false|none|none|
|slot_size|string(decimal)|false|none|none|
|start|string(decimal)|true|none|none|

<h2 id="tocS_Subactivity">Subactivity</h2>
<!-- backwards compatibility -->
<a id="schemasubactivity"></a>
<a id="schema_Subactivity"></a>
<a id="tocSsubactivity"></a>
<a id="tocssubactivity"></a>

```json
{
  "description": "string",
  "qualification_set": [
    {
      "description": "string",
      "well_class": "string"
    }
  ],
  "registries_subactivity_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|qualification_set|[[Qualification](#schemaqualification)]|false|read-only|none|
|registries_subactivity_code|string|false|read-only|none|

<h2 id="tocS_Survey">Survey</h2>
<!-- backwards compatibility -->
<a id="schemasurvey"></a>
<a id="schema_Survey"></a>
<a id="tocSsurvey"></a>
<a id="tocssurvey"></a>

```json
{
  "survey_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "survey_introduction_text": "string",
  "survey_link": "string",
  "survey_page": "w"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|survey_guid|string(uuid)|false|read-only|none|
|survey_introduction_text|string|false|none|none|
|survey_link|string|false|none|none|
|survey_page|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|survey_page|w|
|survey_page|r|
|survey_page|s|
|survey_page|a|

<h2 id="tocS_WaterUse">WaterUse</h2>
<!-- backwards compatibility -->
<a id="schemawateruse"></a>
<a id="schema_WaterUse"></a>
<a id="tocSwateruse"></a>
<a id="tocswateruse"></a>

```json
{
  "code": "st",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_WellDetail">WellDetail</h2>
<!-- backwards compatibility -->
<a id="schemawelldetail"></a>
<a id="schema_WellDetail"></a>
<a id="tocSwelldetail"></a>
<a id="tocswelldetail"></a>

```json
{
  "alteration_end_date": "1970-01-01",
  "alternative_specs_submitted": false,
  "analytic_solution_type": "string",
  "aquifer": 0,
  "aquifer_vulnerability_index": "string",
  "artesian_flow": "string",
  "artesian_pressure": "string",
  "backfill_depth": "string",
  "backfill_material": "string",
  "backfill_type": "string",
  "bcgs_id": 0,
  "bedrock_depth": "string",
  "boundary_effect": "string",
  "casing_set": [
    {
      "casing_code": "string",
      "casing_material": "string",
      "diameter": "string",
      "drive_shoe": false,
      "end": "string",
      "start": "string",
      "wall_thickness": "string"
    }
  ],
  "city": "string",
  "comments": "string",
  "company_of_person_responsible": {
    "name": "string",
    "org_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "org_verbose_name": "string"
  },
  "construction_end_date": "1970-01-01",
  "construction_start_date": "1970-01-01",
  "coordinate_acquisition_code": "string",
  "decommission_description_set": [
    {
      "end": "string",
      "material": "string",
      "observations": "string",
      "start": "string"
    }
  ],
  "decommission_details": "string",
  "decommission_end_date": "1970-01-01",
  "decommission_method": "string",
  "decommission_reason": "string",
  "decommission_start_date": "1970-01-01",
  "development_hours": "string",
  "development_method": "string",
  "development_notes": "string",
  "diameter": "string",
  "drawdown": "string",
  "drilling_company": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "drilling_method": "string",
  "ems": "string",
  "filter_pack_from": "string",
  "filter_pack_material": "string",
  "filter_pack_material_size": "string",
  "filter_pack_thickness": "string",
  "filter_pack_to": "string",
  "final_casing_stick_up": "string",
  "finished_well_depth": "string",
  "ground_elevation": "string",
  "ground_elevation_method": "string",
  "hydraulic_conductivity": "string",
  "hydro_fracturing_performed": false,
  "hydro_fracturing_yield_increase": "string",
  "id_plate_attached_by": "string",
  "identification_plate_number": 0,
  "intended_water_use": "string",
  "land_district": "string",
  "latitude": "string",
  "legal_block": "string",
  "legal_district_lot": "string",
  "legal_lot": "string",
  "legal_pid": 0,
  "legal_plan": "string",
  "legal_range": "string",
  "legal_section": "string",
  "legal_township": "string",
  "licenced_status": "string",
  "liner_diameter": "string",
  "liner_from": "string",
  "liner_material": "string",
  "liner_thickness": "string",
  "liner_to": "string",
  "linerperforation_set": [
    {
      "end": "string",
      "start": "string"
    }
  ],
  "lithologydescription_set": [
    {
      "lithology_colour": "string",
      "lithology_from": "string",
      "lithology_hardness": "string",
      "lithology_moisture": "string",
      "lithology_raw_data": "string",
      "lithology_to": "string",
      "water_bearing_estimated_flow": "string"
    }
  ],
  "longitude": "string",
  "observation_well_number": "string",
  "observation_well_status": "string",
  "other_drilling_method": "string",
  "other_screen_bottom": "string",
  "other_screen_material": "string",
  "owner_full_name": "string",
  "person_responsible": {
    "name": "string",
    "person_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "recommended_pump_depth": "string",
  "recommended_pump_rate": "string",
  "screen_bottom": "string",
  "screen_information": "string",
  "screen_intake_method": "string",
  "screen_material": "string",
  "screen_opening": "string",
  "screen_set": [
    {
      "assembly_type": "string",
      "end": "string",
      "internal_diameter": "string",
      "slot_size": "string",
      "start": "string"
    }
  ],
  "screen_type": "string",
  "sealant_material": "string",
  "specific_storage": "string",
  "specific_yield": "string",
  "static_level_before_test": "string",
  "static_water_level": "string",
  "storativity": "string",
  "street_address": "string",
  "surface_seal_depth": "string",
  "surface_seal_length": "string",
  "surface_seal_material": "string",
  "surface_seal_method": "string",
  "surface_seal_thickness": "string",
  "testing_duration": 0,
  "testing_method": "string",
  "total_depth_drilled": "string",
  "transmissivity": "string",
  "utm_easting": -2147483648,
  "utm_northing": -2147483648,
  "utm_zone_code": "string",
  "water_quality_characteristics": [
    "string"
  ],
  "water_quality_colour": "string",
  "water_quality_odour": "string",
  "water_supply_system_name": "string",
  "water_supply_system_well_name": "string",
  "well": 0,
  "well_cap_type": "string",
  "well_class": "string",
  "well_disinfected": false,
  "well_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "well_identification_plate_attached": "string",
  "well_location_description": "string",
  "well_orientation": true,
  "well_status": "string",
  "well_subclass": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "well_tag_number": 0,
  "well_yield": "string",
  "well_yield_unit": "string",
  "yield_estimation_duration": "string",
  "yield_estimation_method": "string",
  "yield_estimation_rate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alteration_end_date|string(date)|false|none|none|
|alternative_specs_submitted|boolean|false|none|none|
|analytic_solution_type|string(decimal)|false|none|none|
|aquifer|integer|false|none|none|
|aquifer_vulnerability_index|string(decimal)|false|none|none|
|artesian_flow|string(decimal)|false|none|none|
|artesian_pressure|string(decimal)|false|none|none|
|backfill_depth|string(decimal)|false|none|none|
|backfill_material|string|false|none|none|
|backfill_type|string|false|none|none|
|bcgs_id|integer|false|none|none|
|bedrock_depth|string(decimal)|false|none|none|
|boundary_effect|string(decimal)|false|none|none|
|casing_set|[[Casing](#schemacasing)]|true|none|none|
|city|string|false|none|none|
|comments|string|false|none|none|
|company_of_person_responsible|[OrganizationNameList](#schemaorganizationnamelist)|true|none|none|
|construction_end_date|string(date)|false|none|none|
|construction_start_date|string(date)|false|none|none|
|coordinate_acquisition_code|string|false|none|none|
|decommission_description_set|[[DecommissionDescription](#schemadecommissiondescription)]|true|none|none|
|decommission_details|string|false|none|none|
|decommission_end_date|string(date)|false|none|none|
|decommission_method|string|false|none|none|
|decommission_reason|string|false|none|none|
|decommission_start_date|string(date)|false|none|none|
|development_hours|string(decimal)|false|none|none|
|development_method|string|false|none|none|
|development_notes|string|false|none|none|
|diameter|string|false|none|none|
|drawdown|string(decimal)|false|none|none|
|drilling_company|string(uuid)|false|none|none|
|drilling_method|string|false|none|none|
|ems|string|false|none|none|
|filter_pack_from|string(decimal)|false|none|none|
|filter_pack_material|string|false|none|none|
|filter_pack_material_size|string|false|none|none|
|filter_pack_thickness|string(decimal)|false|none|none|
|filter_pack_to|string(decimal)|false|none|none|
|final_casing_stick_up|string(decimal)|false|none|none|
|finished_well_depth|string(decimal)|false|none|none|
|ground_elevation|string(decimal)|false|none|none|
|ground_elevation_method|string|false|none|none|
|hydraulic_conductivity|string|false|none|none|
|hydro_fracturing_performed|boolean|false|none|none|
|hydro_fracturing_yield_increase|string(decimal)|false|none|none|
|id_plate_attached_by|string|false|none|none|
|identification_plate_number|integer|false|none|none|
|intended_water_use|string|false|none|none|
|land_district|string|false|none|none|
|latitude|string(decimal)|false|none|none|
|legal_block|string|false|none|none|
|legal_district_lot|string|false|none|none|
|legal_lot|string|false|none|none|
|legal_pid|integer|false|none|none|
|legal_plan|string|false|none|none|
|legal_range|string|false|none|none|
|legal_section|string|false|none|none|
|legal_township|string|false|none|none|
|licenced_status|string|false|none|none|
|liner_diameter|string(decimal)|false|none|none|
|liner_from|string(decimal)|false|none|none|
|liner_material|string|false|none|none|
|liner_thickness|string(decimal)|false|none|none|
|liner_to|string(decimal)|false|none|none|
|linerperforation_set|[[LinerPerforation](#schemalinerperforation)]|true|none|none|
|lithologydescription_set|[[LithologyDescription](#schemalithologydescription)]|true|none|none|
|longitude|string(decimal)|false|none|none|
|observation_well_number|string|false|none|none|
|observation_well_status|string|false|none|none|
|other_drilling_method|string|false|none|none|
|other_screen_bottom|string|false|none|none|
|other_screen_material|string|false|none|none|
|owner_full_name|string|true|none|none|
|person_responsible|[PersonBasic](#schemapersonbasic)|true|none|none|
|recommended_pump_depth|string(decimal)|false|none|none|
|recommended_pump_rate|string(decimal)|false|none|none|
|screen_bottom|string|false|none|none|
|screen_information|string|false|none|none|
|screen_intake_method|string|false|none|none|
|screen_material|string|false|none|none|
|screen_opening|string|false|none|none|
|screen_set|[[Screen](#schemascreen)]|true|none|none|
|screen_type|string|false|none|none|
|sealant_material|string|false|none|none|
|specific_storage|string|false|none|none|
|specific_yield|string(decimal)|false|none|none|
|static_level_before_test|string(decimal)|false|none|none|
|static_water_level|string(decimal)|false|none|none|
|storativity|string(decimal)|false|none|none|
|street_address|string|false|none|none|
|surface_seal_depth|string(decimal)|false|none|none|
|surface_seal_length|string(decimal)|false|none|none|
|surface_seal_material|string|false|none|none|
|surface_seal_method|string|false|none|none|
|surface_seal_thickness|string(decimal)|false|none|none|
|testing_duration|integer|false|none|none|
|testing_method|string|false|none|none|
|total_depth_drilled|string(decimal)|false|none|none|
|transmissivity|string(decimal)|false|none|none|
|utm_easting|integer|false|none|none|
|utm_northing|integer|false|none|none|
|utm_zone_code|string|false|none|none|
|water_quality_characteristics|[string]|false|none|none|
|water_quality_colour|string|false|none|none|
|water_quality_odour|string|false|none|none|
|water_supply_system_name|string|false|none|none|
|water_supply_system_well_name|string|false|none|none|
|well|integer|true|none|none|
|well_cap_type|string|false|none|none|
|well_class|string|false|none|none|
|well_disinfected|boolean|false|none|none|
|well_guid|string(uuid)|false|read-only|none|
|well_identification_plate_attached|string|false|none|none|
|well_location_description|string|false|none|none|
|well_orientation|boolean|false|none|none|
|well_status|string|false|none|none|
|well_subclass|string(uuid)|false|none|none|
|well_tag_number|integer|false|read-only|none|
|well_yield|string(decimal)|false|none|none|
|well_yield_unit|string|false|none|none|
|yield_estimation_duration|string(decimal)|false|none|none|
|yield_estimation_method|string|false|none|none|
|yield_estimation_rate|string(decimal)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|alternative_specs_submitted|false|
|alternative_specs_submitted|true|
|hydro_fracturing_performed|false|
|hydro_fracturing_performed|true|
|well_disinfected|false|
|well_disinfected|true|
|well_orientation|true|
|well_orientation|false|

<h2 id="tocS_WellList">WellList</h2>
<!-- backwards compatibility -->
<a id="schemawelllist"></a>
<a id="schema_WellList"></a>
<a id="tocSwelllist"></a>
<a id="tocswelllist"></a>

```json
{
  "alteration_end_date": "1970-01-01",
  "alternative_specs_submitted": false,
  "analytic_solution_type": "string",
  "aquifer": 0,
  "aquifer_vulnerability_index": "string",
  "artesian_flow": "string",
  "artesian_pressure": "string",
  "backfill_depth": "string",
  "backfill_material": "string",
  "backfill_type": "string",
  "bcgs_id": 0,
  "bedrock_depth": "string",
  "boundary_effect": "string",
  "city": "string",
  "comments": "string",
  "construction_end_date": "1970-01-01",
  "construction_start_date": "1970-01-01",
  "coordinate_acquisition_code": "string",
  "decommission_details": "string",
  "decommission_end_date": "1970-01-01",
  "decommission_method": "string",
  "decommission_reason": "string",
  "decommission_start_date": "1970-01-01",
  "development_hours": "string",
  "development_method": "string",
  "development_notes": "string",
  "diameter": "string",
  "drawdown": "string",
  "drilling_company": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "drilling_method": "string",
  "ems": "string",
  "filter_pack_from": "string",
  "filter_pack_material": "string",
  "filter_pack_material_size": "string",
  "filter_pack_thickness": "string",
  "filter_pack_to": "string",
  "final_casing_stick_up": "string",
  "finished_well_depth": "string",
  "ground_elevation": "string",
  "ground_elevation_method": "string",
  "hydraulic_conductivity": "string",
  "hydro_fracturing_performed": false,
  "hydro_fracturing_yield_increase": "string",
  "id_plate_attached_by": "string",
  "identification_plate_number": 0,
  "intended_water_use": "string",
  "land_district": "string",
  "latitude": "string",
  "legal_block": "string",
  "legal_district_lot": "string",
  "legal_lot": "string",
  "legal_pid": 0,
  "legal_plan": "string",
  "legal_range": "string",
  "legal_section": "string",
  "legal_township": "string",
  "licenced_status": "string",
  "liner_diameter": "string",
  "liner_from": "string",
  "liner_material": "string",
  "liner_thickness": "string",
  "liner_to": "string",
  "longitude": "string",
  "observation_well_number": "string",
  "observation_well_status": "string",
  "other_drilling_method": "string",
  "other_screen_bottom": "string",
  "other_screen_material": "string",
  "owner_full_name": "string",
  "recommended_pump_depth": "string",
  "recommended_pump_rate": "string",
  "screen_bottom": "string",
  "screen_information": "string",
  "screen_intake_method": "string",
  "screen_material": "string",
  "screen_opening": "string",
  "screen_type": "string",
  "sealant_material": "string",
  "specific_storage": "string",
  "specific_yield": "string",
  "static_level_before_test": "string",
  "static_water_level": "string",
  "storativity": "string",
  "street_address": "string",
  "surface_seal_depth": "string",
  "surface_seal_length": "string",
  "surface_seal_material": "string",
  "surface_seal_method": "string",
  "surface_seal_thickness": "string",
  "testing_duration": 0,
  "testing_method": "string",
  "total_depth_drilled": "string",
  "transmissivity": "string",
  "utm_easting": -2147483648,
  "utm_northing": -2147483648,
  "utm_zone_code": "string",
  "water_quality_characteristics": [
    "string"
  ],
  "water_quality_colour": "string",
  "water_quality_odour": "string",
  "water_supply_system_name": "string",
  "water_supply_system_well_name": "string",
  "well_cap_type": "string",
  "well_class": "string",
  "well_disinfected": false,
  "well_guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "well_identification_plate_attached": "string",
  "well_location_description": "string",
  "well_orientation": true,
  "well_status": "string",
  "well_subclass": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "well_tag_number": 0,
  "well_yield": "string",
  "well_yield_unit": "string",
  "yield_estimation_duration": "string",
  "yield_estimation_method": "string",
  "yield_estimation_rate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alteration_end_date|string(date)|false|none|none|
|alternative_specs_submitted|boolean|false|none|none|
|analytic_solution_type|string(decimal)|false|none|none|
|aquifer|integer|false|none|none|
|aquifer_vulnerability_index|string(decimal)|false|none|none|
|artesian_flow|string(decimal)|false|none|none|
|artesian_pressure|string(decimal)|false|none|none|
|backfill_depth|string(decimal)|false|none|none|
|backfill_material|string|false|none|none|
|backfill_type|string|false|none|none|
|bcgs_id|integer|false|none|none|
|bedrock_depth|string(decimal)|false|none|none|
|boundary_effect|string(decimal)|false|none|none|
|city|string|false|none|none|
|comments|string|false|none|none|
|construction_end_date|string(date)|false|none|none|
|construction_start_date|string(date)|false|none|none|
|coordinate_acquisition_code|string|false|none|none|
|decommission_details|string|false|none|none|
|decommission_end_date|string(date)|false|none|none|
|decommission_method|string|false|none|none|
|decommission_reason|string|false|none|none|
|decommission_start_date|string(date)|false|none|none|
|development_hours|string(decimal)|false|none|none|
|development_method|string|false|none|none|
|development_notes|string|false|none|none|
|diameter|string|false|none|none|
|drawdown|string(decimal)|false|none|none|
|drilling_company|string(uuid)|false|none|none|
|drilling_method|string|false|none|none|
|ems|string|false|none|none|
|filter_pack_from|string(decimal)|false|none|none|
|filter_pack_material|string|false|none|none|
|filter_pack_material_size|string|false|none|none|
|filter_pack_thickness|string(decimal)|false|none|none|
|filter_pack_to|string(decimal)|false|none|none|
|final_casing_stick_up|string(decimal)|false|none|none|
|finished_well_depth|string(decimal)|false|none|none|
|ground_elevation|string(decimal)|false|none|none|
|ground_elevation_method|string|false|none|none|
|hydraulic_conductivity|string|false|none|none|
|hydro_fracturing_performed|boolean|false|none|none|
|hydro_fracturing_yield_increase|string(decimal)|false|none|none|
|id_plate_attached_by|string|false|none|none|
|identification_plate_number|integer|false|none|none|
|intended_water_use|string|false|none|none|
|land_district|string|false|none|none|
|latitude|string(decimal)|false|none|none|
|legal_block|string|false|none|none|
|legal_district_lot|string|false|none|none|
|legal_lot|string|false|none|none|
|legal_pid|integer|false|none|none|
|legal_plan|string|false|none|none|
|legal_range|string|false|none|none|
|legal_section|string|false|none|none|
|legal_township|string|false|none|none|
|licenced_status|string|false|none|none|
|liner_diameter|string(decimal)|false|none|none|
|liner_from|string(decimal)|false|none|none|
|liner_material|string|false|none|none|
|liner_thickness|string(decimal)|false|none|none|
|liner_to|string(decimal)|false|none|none|
|longitude|string(decimal)|false|none|none|
|observation_well_number|string|false|none|none|
|observation_well_status|string|false|none|none|
|other_drilling_method|string|false|none|none|
|other_screen_bottom|string|false|none|none|
|other_screen_material|string|false|none|none|
|owner_full_name|string|true|none|none|
|recommended_pump_depth|string(decimal)|false|none|none|
|recommended_pump_rate|string(decimal)|false|none|none|
|screen_bottom|string|false|none|none|
|screen_information|string|false|none|none|
|screen_intake_method|string|false|none|none|
|screen_material|string|false|none|none|
|screen_opening|string|false|none|none|
|screen_type|string|false|none|none|
|sealant_material|string|false|none|none|
|specific_storage|string|false|none|none|
|specific_yield|string(decimal)|false|none|none|
|static_level_before_test|string(decimal)|false|none|none|
|static_water_level|string(decimal)|false|none|none|
|storativity|string(decimal)|false|none|none|
|street_address|string|false|none|none|
|surface_seal_depth|string(decimal)|false|none|none|
|surface_seal_length|string(decimal)|false|none|none|
|surface_seal_material|string|false|none|none|
|surface_seal_method|string|false|none|none|
|surface_seal_thickness|string(decimal)|false|none|none|
|testing_duration|integer|false|none|none|
|testing_method|string|false|none|none|
|total_depth_drilled|string(decimal)|false|none|none|
|transmissivity|string(decimal)|false|none|none|
|utm_easting|integer|false|none|none|
|utm_northing|integer|false|none|none|
|utm_zone_code|string|false|none|none|
|water_quality_characteristics|[string]|false|none|none|
|water_quality_colour|string|false|none|none|
|water_quality_odour|string|false|none|none|
|water_supply_system_name|string|false|none|none|
|water_supply_system_well_name|string|false|none|none|
|well_cap_type|string|false|none|none|
|well_class|string|false|none|none|
|well_disinfected|boolean|false|none|none|
|well_guid|string(uuid)|false|read-only|none|
|well_identification_plate_attached|string|false|none|none|
|well_location_description|string|false|none|none|
|well_orientation|boolean|false|none|none|
|well_status|string|false|none|none|
|well_subclass|string(uuid)|false|none|none|
|well_tag_number|integer|false|read-only|none|
|well_yield|string(decimal)|false|none|none|
|well_yield_unit|string|false|none|none|
|yield_estimation_duration|string(decimal)|false|none|none|
|yield_estimation_method|string|false|none|none|
|yield_estimation_rate|string(decimal)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|alternative_specs_submitted|false|
|alternative_specs_submitted|true|
|hydro_fracturing_performed|false|
|hydro_fracturing_performed|true|
|well_disinfected|false|
|well_disinfected|true|
|well_orientation|true|
|well_orientation|false|

<h2 id="tocS_WellTagSearch">WellTagSearch</h2>
<!-- backwards compatibility -->
<a id="schemawelltagsearch"></a>
<a id="schema_WellTagSearch"></a>
<a id="tocSwelltagsearch"></a>
<a id="tocswelltagsearch"></a>

```json
{
  "owner_full_name": "string",
  "well_tag_number": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner_full_name|string|true|none|none|
|well_tag_number|integer|false|read-only|none|
