<h1 id="transportation-laws-and-incentives">Transportation Laws and Incentives v0.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Query our database of federal and state laws and incentives for alternative fuels and vehicles, air quality, fuel efficiency, and other transportation-related topics. This dataset powers the <a href="https://afdc.energy.gov/laws">Federal and State Laws and Incentives</a> on the Alternative Fuels Data Center.

Base URLs:

* <a href="https://api.apis.guru/api/transportation-incentives-laws">https://api.apis.guru/api/transportation-incentives-laws</a>

<h1 id="transportation-laws-and-incentives-default">Default</h1>

## Return a full list of laws and incentives that match your query.

<a id="opIdtransportation_incentives_laws_all"></a>

> Code samples

```bash
curl 'https://example.com/v1.json?api_key=DEMO_KEY'
```

`GET /v1.{output_format}`

<h3 id="return-a-full-list-of-laws-and-incentives-that-match-your-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|output_format|path|string|true|Response format|
|api_key|query|string|true|API Key|
|limit|query|integer|false|Limit the number of laws returned|
|jurisdiction|query|string|false|Return laws for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.|
|technology|query|string|false|Search by the technology type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'BIOD' for Biodiesel, 'ETH' for Ethanol / Flexible Fuel Vehicles, 'NG' for Natural Gas / Natural Gas Vehicles, 'LPG' for Liquefied Petroleum Gas (Propane) / Propane Vehicles, 'HY' for Hydrogen / Fuel Cell Electric Vehicles, 'ELEC' for All-Electric Vehicles (EVs), 'PHEV' for Plug-In Hybrid Electric Vehicles (PHEVs), 'HEV' for Hybrid Electric Vehicles (HEVs), 'NEVS' for Neighborhood Electric Vehicles (NEVs), 'RD' for Renewable Diesel, 'AFTMKTCONV' for Aftermarket Conversions, 'EFFEC' for Fuel Economy / Efficiency, 'IR' for Idle Reduction, 'AUTONOMOUS' for Connected and Autonomous Vehicles, and 'OTHER' for Other.|
|incentive_type|query|string|false|Search by the incentive type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'GNT' for Grants, 'TAX' for Tax Incentives, 'LOANS' for Loans and Leases, 'RBATE' for Rebates, 'EXEM' for Exemptions, 'TOU' for Time-of-Use Rate, and 'OTHER' for Other.|
|regulation_type|query|string|false|Search by the regulation type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'REQ' for Acquisition / Fuel Use, 'DREST' for Driving / Idling, 'REGIS' for Registration / Licensing, 'EVFEE' for EV Registration Fee, 'FUEL' for Fuel Taxes, 'STD' for Fuel Production / Quality, 'RFS' for Renewable Fuel Standard / Mandate, 'AIRQEMISSIONS' for Air Quality / Emissions, 'CCEINIT' for Climate Change / Energy Initiatives, 'UTILITY' for Utility Definition, 'BUILD' for Building Codes, 'RTC' for Right-to-Charge, and 'OTHER' for Other.|
|user_type|query|string|false|Search by the user type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'FLEET' for Commercial, 'GOV' for Government Entity, 'TRIBAL' for Tribal Government, 'IND' for Personal Vehicle Owner or Driver, 'STATION' for Alternative Fuel Infrastructure Operator, 'AFP' for Alternative Fuel Producer, 'PURCH' for Alternative Fuel Purchaser, 'MAN' for Alternative Fuel Vehicle (AFV) Manufacturer or Retrofitter, 'MUD' for Multi-Unit Dwelling, 'TRANS' for Transit, and 'OTHER' for Other.|
|poc|query|boolean|false|Include points of contacts in the return value.|
|recent|query|boolean|false|Return only recently added or updated laws and incentives|
|expired|query|boolean|false|The 'true' value returns only expired, repealed, or archived laws and incentives. The default 'false' value returns only current laws and incentives.|
|law_type|query|string|false|Search by the law type. A single type, or a comma-separate list of multiple types, may be given. Values are as follows: 'STATEINC' for State Incentives, 'UPINC ' for Utility/Private Incentives, 'LAWREG' for Laws and Regulations, 'INC' for Incentives, 'PROG' for Programs, 'LUP' for Last Updated, 'OVIEW' for Overview, and 'HILITE' for Highlights.|
|keyword|query|string|false|Search laws by keyword in title or text.|
|local|query|boolean|false|Show only local examples of laws and incentives.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|output_format|json|
|output_format|xml|
|output_format|csv|

<h3 id="return-a-full-list-of-laws-and-incentives-that-match-your-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[LawsResponse](#schemalawsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Return the law categories for a given category type.

<a id="opIdtransportation_incentives_laws_categories"></a>

> Code samples

```bash
curl 'https://example.com/v1/category-list.json?api_key=DEMO_KEY'
```

`GET /v1/category-list.{output_format}`

<h3 id="return-the-law-categories-for-a-given-category-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|output_format|path|string|true|Response format|
|api_key|query|string|true|API Key|
|type|query|string|false|Search by the category type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|output_format|json|
|output_format|xml|
|type|tech|
|type|user|
|type|regulation|
|type|incentive|

<h3 id="return-the-law-categories-for-a-given-category-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[CategoryResults](#schemacategoryresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the points of contact for a given jurisdiction.

<a id="opIdtransportation_incentives_laws_pocs"></a>

> Code samples

```bash
curl 'https://example.com/v1/pocs.json?api_key=DEMO_KEY&jurisdiction=string'
```

`GET /v1/pocs.{output_format}`

<h3 id="get-the-points-of-contact-for-a-given-jurisdiction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|output_format|path|string|true|Response format|
|api_key|query|string|true|API Key|
|jurisdiction|query|string|true|Return the points of contact for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|output_format|json|
|output_format|xml|

<h3 id="get-the-points-of-contact-for-a-given-jurisdiction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[PocResults](#schemapocresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch the details of a specific law given the law's ID.

<a id="opIdtransportation_incentives_laws_id"></a>

> Code samples

```bash
curl 'https://example.com/v1/0.json?api_key=DEMO_KEY'
```

`GET /v1/{id}.{output_format}`

<h3 id="fetch-the-details-of-a-specific-law-given-the-laws-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|output_format|path|string|true|Response format|
|api_key|query|string|true|API Key|
|id|path|integer|true|The id of the law that you are searching|
|poc|query|boolean|false|Include points of contacts in the return value.|
|expired|query|boolean|false|The 'true' value returns a record no matter its status (current, expired, archived, or repealed). The default 'false' value returns only current laws and incentives.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|output_format|json|
|output_format|xml|

<h3 id="fetch-the-details-of-a-specific-law-given-the-laws-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[LawResult](#schemalawresult)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "category_type": "string",
  "code": "string",
  "title": "string"
}
```

A category that the law applies to

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category_type|string|true|none|The type of category. (E.g. tech, incentive, regulation, user)|
|code|string|true|none|The code used to identify the category|
|title|string|true|none|The full name of the category|

<h2 id="tocS_CategoryResults">CategoryResults</h2>
<!-- backwards compatibility -->
<a id="schemacategoryresults"></a>
<a id="schema_CategoryResults"></a>
<a id="tocScategoryresults"></a>
<a id="tocscategoryresults"></a>

```json
{
  "inputs": {},
  "metadata": {
    "count": 0,
    "version": "string"
  },
  "result": [
    {
      "category_type": "string",
      "code": "string",
      "help_text": "string",
      "sort_order": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[Inputs](#schemainputs)|true|none|The parameters that were passed to the API|
|metadata|[Metadata](#schemametadata)|true|none|The identifying metadata.|
|result|[[FullCategory](#schemafullcategory)]|true|none|The array of law categories returned|

<h2 id="tocS_FullCategory">FullCategory</h2>
<!-- backwards compatibility -->
<a id="schemafullcategory"></a>
<a id="schema_FullCategory"></a>
<a id="tocSfullcategory"></a>
<a id="tocsfullcategory"></a>

```json
{
  "category_type": "string",
  "code": "string",
  "help_text": "string",
  "sort_order": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category_type|string|true|none|The type of category. (E.g. tech, incentive, regulation, user)|
|code|string|true|none|The code used to identify the category|
|help_text|string|false|none|A short description of what the law category encompasses|
|sort_order|string|true|none|The sort order for the categories|
|title|string|true|none|The full name of the category|

<h2 id="tocS_Inputs">Inputs</h2>
<!-- backwards compatibility -->
<a id="schemainputs"></a>
<a id="schema_Inputs"></a>
<a id="tocSinputs"></a>
<a id="tocsinputs"></a>

```json
{}
```

The parameters that were passed to the API

<h2 id="tocS_Law">Law</h2>
<!-- backwards compatibility -->
<a id="schemalaw"></a>
<a id="schema_Law"></a>
<a id="tocSlaw"></a>
<a id="tocslaw"></a>

```json
{
  "agency": "string",
  "amended_date": "1970-01-01T00:00:00Z",
  "archived_date": "1970-01-01T00:00:00Z",
  "categories": [
    {
      "category_type": "string",
      "code": "string",
      "title": "string"
    }
  ],
  "contacts": [
    {
      "agency": "string",
      "email": "string",
      "fax": "string",
      "name": "string",
      "state": "string",
      "telephone": "string",
      "title": "string",
      "web_page": "string"
    }
  ],
  "enacted_date": "1970-01-01T00:00:00Z",
  "expired_date": "1970-01-01T00:00:00Z",
  "id": 0,
  "is_recent": true,
  "plaintext": "string",
  "recent_update_or_new": "string",
  "references": [
    {
      "description": "string",
      "url": "string"
    }
  ],
  "repealed_date": "1970-01-01T00:00:00Z",
  "seq_num": 0,
  "significant_update_date": "1970-01-01T00:00:00Z",
  "state": "string",
  "text": "string",
  "title": "string",
  "topics": [
    {
      "id": 0,
      "sort_order": 0,
      "title": "string"
    }
  ],
  "type": "string",
  "types": [
    {
      "code": "string",
      "id": 0,
      "title": "string"
    }
  ]
}
```

This is a Law

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agency|string|false|none|The agency with primary responsibility for federal incentives/regulations.|
|amended_date|string(date-time)|false|none|The date the incentive/law/regulation was updated through new legislation or rulemaking.|
|archived_date|string(date-time)|false|none|The date that an incentive/law/regulation is no longer relevant to the database. This may include longstanding Executive Orders or laws requiring legislative studies that have been completed.|
|categories|[[Category](#schemacategory)]|true|none|The various law categories that apply to this law|
|contacts|[[Poc](#schemapoc)]|false|none|The contacts for the given law, returned only if the parameter poc is true|
|enacted_date|string(date-time)|false|none|The date the enacting legislation (if applicable) was signed into law.|
|expired_date|string(date-time)|false|none|The date the incentive/law/regulation is set to end.|
|id|integer|true|none|A unique identifier for this specific incentive/law/regulation.|
|is_recent|boolean|false|none|The true or false value used to distinguish between recent federal executive actions (TRUE) and active incentives/laws/regulations (FALSE).|
|plaintext|string|true|none|Description of the incentive/law/regulation, including applicable legislative references, in <a href="https://guides.github.com/features/mastering-markdown/">markdown formatting</a>|
|recent_update_or_new|string|false|none|An indicator if the last significant update was an update or the laws creation.|
|references|[[LawReference](#schemalawreference)]|true|none|The URL associated with any bill or legislative reference included in the description.|
|repealed_date|string(date-time)|false|none|The date legislation is enacted or a rulemaking is finalized to repeal the incentive/law/regulation.|
|seq_num|integer|false|none|The numerical value assigned to a description to show the order in which it is displayed online within a jurisdiction (state).|
|significant_update_date|string(date-time)|false|none|When the last significant update to the law was made.|
|state|string|true|none|The state in which the incentive/law/regulation was enacted and is active.|
|text|string|true|none|Description of the incentive/law/regulation, including applicable legislative references, html formated.|
|title|string|true|none|The brief title assigned to the incentive/law/regulation description.|
|topics|[[LawTopics](#schemalawtopics)]|true|none|For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards|
|type|string|true|none|The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives|
|types|[[LawType](#schemalawtype)]|true|none|The types that apply to this law|

<h2 id="tocS_LawReference">LawReference</h2>
<!-- backwards compatibility -->
<a id="schemalawreference"></a>
<a id="schema_LawReference"></a>
<a id="tocSlawreference"></a>
<a id="tocslawreference"></a>

```json
{
  "description": "string",
  "url": "string"
}
```

The URL associated with any bill or legislative reference included in the description.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|The context of the reference|
|url|string|true|none|The url linking to the reference.|

<h2 id="tocS_LawResult">LawResult</h2>
<!-- backwards compatibility -->
<a id="schemalawresult"></a>
<a id="schema_LawResult"></a>
<a id="tocSlawresult"></a>
<a id="tocslawresult"></a>

```json
{
  "inputs": {},
  "metadata": {
    "count": 0,
    "version": "string"
  },
  "result": {
    "agency": "string",
    "amended_date": "1970-01-01T00:00:00Z",
    "archived_date": "1970-01-01T00:00:00Z",
    "categories": [
      {
        "category_type": "string",
        "code": "string",
        "title": "string"
      }
    ],
    "contacts": [
      {
        "agency": "string",
        "email": "string",
        "fax": "string",
        "name": "string",
        "state": "string",
        "telephone": "string",
        "title": "string",
        "web_page": "string"
      }
    ],
    "enacted_date": "1970-01-01T00:00:00Z",
    "expired_date": "1970-01-01T00:00:00Z",
    "id": 0,
    "is_recent": true,
    "plaintext": "string",
    "recent_update_or_new": "string",
    "references": [
      {
        "description": "string",
        "url": "string"
      }
    ],
    "repealed_date": "1970-01-01T00:00:00Z",
    "seq_num": 0,
    "significant_update_date": "1970-01-01T00:00:00Z",
    "state": "string",
    "text": "string",
    "title": "string",
    "topics": [
      {
        "id": 0,
        "sort_order": 0,
        "title": "string"
      }
    ],
    "type": "string",
    "types": [
      {
        "code": "string",
        "id": 0,
        "title": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[Inputs](#schemainputs)|true|none|The parameters that were passed to the API|
|metadata|[Metadata](#schemametadata)|true|none|The identifying metadata.|
|result|[Law](#schemalaw)|true|none|This is a Law|

<h2 id="tocS_LawTopics">LawTopics</h2>
<!-- backwards compatibility -->
<a id="schemalawtopics"></a>
<a id="schema_LawTopics"></a>
<a id="tocSlawtopics"></a>
<a id="tocslawtopics"></a>

```json
{
  "id": 0,
  "sort_order": 0,
  "title": "string"
}
```

For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|The database id of the law topic|
|sort_order|integer|true|none|The sort order of the law topic|
|title|string|true|none|The name of the law topic|

<h2 id="tocS_LawType">LawType</h2>
<!-- backwards compatibility -->
<a id="schemalawtype"></a>
<a id="schema_LawType"></a>
<a id="tocSlawtype"></a>
<a id="tocslawtype"></a>

```json
{
  "code": "string",
  "id": 0,
  "title": "string"
}
```

The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The code used to identify the law type|
|id|integer|true|none|The id of the law type|
|title|string|true|none|The name of the law type|

<h2 id="tocS_LawsResponse">LawsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalawsresponse"></a>
<a id="schema_LawsResponse"></a>
<a id="tocSlawsresponse"></a>
<a id="tocslawsresponse"></a>

```json
{
  "inputs": {},
  "metadata": {
    "count": 0,
    "version": "string"
  },
  "result": [
    {
      "agency": "string",
      "amended_date": "1970-01-01T00:00:00Z",
      "archived_date": "1970-01-01T00:00:00Z",
      "categories": [
        {
          "category_type": "string",
          "code": "string",
          "title": "string"
        }
      ],
      "contacts": [
        {
          "agency": "string",
          "email": "string",
          "fax": "string",
          "name": "string",
          "state": "string",
          "telephone": "string",
          "title": "string",
          "web_page": "string"
        }
      ],
      "enacted_date": "1970-01-01T00:00:00Z",
      "expired_date": "1970-01-01T00:00:00Z",
      "id": 0,
      "is_recent": true,
      "plaintext": "string",
      "recent_update_or_new": "string",
      "references": [
        {
          "description": "string",
          "url": "string"
        }
      ],
      "repealed_date": "1970-01-01T00:00:00Z",
      "seq_num": 0,
      "significant_update_date": "1970-01-01T00:00:00Z",
      "state": "string",
      "text": "string",
      "title": "string",
      "topics": [
        {
          "id": 0,
          "sort_order": 0,
          "title": "string"
        }
      ],
      "type": "string",
      "types": [
        {
          "code": "string",
          "id": 0,
          "title": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[Inputs](#schemainputs)|true|none|The parameters that were passed to the API|
|metadata|[Metadata](#schemametadata)|true|none|The identifying metadata.|
|result|[[Law](#schemalaw)]|true|none|The array of laws returned|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "count": 0,
  "version": "string"
}
```

The identifying metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|If the request returns an array of results, this is the number of results returned in the array|
|version|string|true|none|This is the version of the api|

<h2 id="tocS_Poc">Poc</h2>
<!-- backwards compatibility -->
<a id="schemapoc"></a>
<a id="schema_Poc"></a>
<a id="tocSpoc"></a>
<a id="tocspoc"></a>

```json
{
  "agency": "string",
  "email": "string",
  "fax": "string",
  "name": "string",
  "state": "string",
  "telephone": "string",
  "title": "string",
  "web_page": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agency|string|false|none|The agency that the contact represents|
|email|string|false|none|The contacts email address|
|fax|string|false|none|The contacts fax number|
|name|string|true|none|The name of the contact|
|state|string|true|none|The state in which the contact is based ('US' for Federal laws and 'DC' for the District of Columbia)|
|telephone|string|false|none|The contacts phone number|
|title|string|false|none|The job title of the contact|
|web_page|string|false|none|The contacts webpage|

<h2 id="tocS_PocResults">PocResults</h2>
<!-- backwards compatibility -->
<a id="schemapocresults"></a>
<a id="schema_PocResults"></a>
<a id="tocSpocresults"></a>
<a id="tocspocresults"></a>

```json
{
  "inputs": {},
  "metadata": {
    "count": 0,
    "version": "string"
  },
  "result": [
    {
      "agency": "string",
      "email": "string",
      "fax": "string",
      "name": "string",
      "state": "string",
      "telephone": "string",
      "title": "string",
      "web_page": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[Inputs](#schemainputs)|true|none|The parameters that were passed to the API|
|metadata|[Metadata](#schemametadata)|true|none|The identifying metadata.|
|result|[[Poc](#schemapoc)]|true|none|The array of Points of Contacts for the state requested|
