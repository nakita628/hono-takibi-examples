<h1 id="techport">TechPort v3.4.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

TechPort RESTful API

Base URLs:

* <a href="http://techport.nasa.gov/api">http://techport.nasa.gov/api</a>

* <a href="https://techport.nasa.gov/api">https://techport.nasa.gov/api</a>

Email: <a href="mailto:hq-techport@mail.nasa.gov">TechPort Team</a> 
Web: <a href="https://techport.nasa.gov">TechPort Team</a> 

<h1 id="techport-default">Default</h1>

## get/api

> Code samples

```bash
curl https://example.com/api
```

`GET /api`

Returns the swagger specification for the API.

<h3 id="getapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|
|default|Default|Object not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/projects/{id}{.format}

> Code samples

```bash
curl 'https://example.com/api/projects/0string?format=xml' \
  -H 'Accept: application/json'
```

`GET /api/projects/{id}{.format}`

Returns information about a specific technology project.

<h3 id="getapiprojectsidformat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of project to fetch|
|format|query|string|true|The response type desired.|
|.format|path|string|true|Automatically added|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
{
  "acronym": "string",
  "additionalTas": [
    {
      "code": "string",
      "id": 0,
      "name": "string"
    }
  ],
  "benefits": "string",
  "closeoutDocuments": [
    "string"
  ],
  "closeoutSummary": "string",
  "coFundingPartners": [
    {
      "acronym": "string",
      "city": "string",
      "name": "string",
      "state": "string"
    }
  ],
  "coInvestigators": [
    "string"
  ],
  "description": "string",
  "destinations": [
    "string"
  ],
  "endDate": "string",
  "id": 0,
  "lastUpdated": "1970-01-01",
  "leadOrganization": {
    "acronym": "string",
    "city": "string",
    "name": "string",
    "state": "string"
  },
  "libraryItems": [
    {
      "completionDate": "string",
      "description": "string",
      "externalUrl": "string",
      "files": [
        {
          "id": 0,
          "size": "string",
          "url": "string"
        }
      ],
      "id": 0,
      "publishedBy": "string",
      "publishedDate": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "primaryTas": [
    {
      "code": "string",
      "id": 0,
      "name": "string"
    }
  ],
  "principalInvestigators": [
    "string"
  ],
  "programDirectors": [
    "string"
  ],
  "programManagers": [
    "string"
  ],
  "projectManagers": [
    "string"
  ],
  "responsibleMissionDirectorateOrOffice": "string",
  "responsibleProgram": "string",
  "startDate": "string",
  "status": "string",
  "supportedMissionType": "string",
  "supportingOrganizations": [
    {
      "acronym": "string",
      "city": "string",
      "name": "string",
      "state": "string"
    }
  ],
  "technologyMaturityCurrent": "string",
  "technologyMaturityEnd": "string",
  "technologyMaturityStart": "string",
  "title": "string",
  "website": "string",
  "workLocations": [
    "string"
  ]
}
```

<h3 id="getapiprojectsidformat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[project](#schemaproject)|
|default|Default|Object not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/projects{.format}

> Code samples

```bash
curl 'https://example.com/api/projectsstring?updatedSince=1970-01-01&format=json' \
  -H 'Accept: application/json'
```

`GET /api/projects{.format}`

Returns a list of available technology project IDs.

<h3 id="getapiprojectsformat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|string(date)|true|ISO 8601 full-date in the format YYYY-MM-DD. Filters the list of available ID values by their lastUpdated parameter.|
|format|query|string|true|The response type desired.|
|.format|path|string|true|Automatically added|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "lastUpdated": "string"
}
```

<h3 id="getapiprojectsformat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|default|Default|Object not found.|None|

<h3 id="getapiprojectsformat-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|lastUpdated|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_closeoutDocument">closeoutDocument</h2>
<!-- backwards compatibility -->
<a id="schemacloseoutdocument"></a>
<a id="schema_closeoutDocument"></a>
<a id="tocScloseoutdocument"></a>
<a id="tocscloseoutdocument"></a>

```json
"string"
```

Represents a file hyperlink or external hyperlink to a project closeout final report artifact.

<h2 id="tocS_coInvestigator">coInvestigator</h2>
<!-- backwards compatibility -->
<a id="schemacoinvestigator"></a>
<a id="schema_coInvestigator"></a>
<a id="tocScoinvestigator"></a>
<a id="tocscoinvestigator"></a>

```json
"string"
```

The name of an investigator who is a scientist or engineer for an project.

<h2 id="tocS_destination">destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
"string"
```

Represents a destination towards which the technology on this project helps advance the Agency goals.

<h2 id="tocS_file">file</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_file"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "id": 0,
  "size": "string",
  "url": "string"
}
```

Represents a file associated with a library item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|Unique identifier for the file.|
|size|string|false|none|The size of the file in bytes.|
|url|string|false|none|The TechPort URL at which the file is accessible for download.|

<h2 id="tocS_libraryItem">libraryItem</h2>
<!-- backwards compatibility -->
<a id="schemalibraryitem"></a>
<a id="schema_libraryItem"></a>
<a id="tocSlibraryitem"></a>
<a id="tocslibraryitem"></a>

```json
{
  "completionDate": "string",
  "description": "string",
  "externalUrl": "string",
  "files": [
    {
      "id": 0,
      "size": "string",
      "url": "string"
    }
  ],
  "id": 0,
  "publishedBy": "string",
  "publishedDate": "string",
  "title": "string",
  "type": "string"
}
```

Represents a specific library item that is part of this project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completionDate|string|false|none|Date the library item was completed.|
|description|string|false|none|Description of the library item.|
|externalUrl|string|false|none|External URL for the library item.|
|files|[[file](#schemafile)]|false|none|List of files associated with the library item.|
|id|integer(int64)|false|none|Unique identifier for the library item.|
|publishedBy|string|false|none|Publisher of the library item.|
|publishedDate|string|false|none|Date the library item was published.|
|title|string|false|none|Title of the library item|
|type|string|false|none|Identifies the type of library item, e.g. Image|

<h2 id="tocS_organization">organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "acronym": "string",
  "city": "string",
  "name": "string",
  "state": "string"
}
```

A NASA center/facility associated with an project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acronym|string|false|none|The acronym of the organization.|
|city|string|false|none|The city in which the organization is located.|
|name|string|false|none|The name of the organization.|
|state|string|false|none|The state in which the organization is located.|

<h2 id="tocS_principalInvestigator">principalInvestigator</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalinvestigator"></a>
<a id="schema_principalInvestigator"></a>
<a id="tocSprincipalinvestigator"></a>
<a id="tocsprincipalinvestigator"></a>

```json
"string"
```

The name of the Principal Investigator who is a lead scientist or engineer for an project.

<h2 id="tocS_programDirector">programDirector</h2>
<!-- backwards compatibility -->
<a id="schemaprogramdirector"></a>
<a id="schema_programDirector"></a>
<a id="tocSprogramdirector"></a>
<a id="tocsprogramdirector"></a>

```json
"string"
```

The name of a Program Director responsible for management of an project.

<h2 id="tocS_programManager">programManager</h2>
<!-- backwards compatibility -->
<a id="schemaprogrammanager"></a>
<a id="schema_programManager"></a>
<a id="tocSprogrammanager"></a>
<a id="tocsprogrammanager"></a>

```json
"string"
```

The name of a Program Manager responsible for management of an project.

<h2 id="tocS_project">project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "acronym": "string",
  "additionalTas": [
    {
      "code": "string",
      "id": 0,
      "name": "string"
    }
  ],
  "benefits": "string",
  "closeoutDocuments": [
    "string"
  ],
  "closeoutSummary": "string",
  "coFundingPartners": [
    {
      "acronym": "string",
      "city": "string",
      "name": "string",
      "state": "string"
    }
  ],
  "coInvestigators": [
    "string"
  ],
  "description": "string",
  "destinations": [
    "string"
  ],
  "endDate": "string",
  "id": 0,
  "lastUpdated": "1970-01-01",
  "leadOrganization": {
    "acronym": "string",
    "city": "string",
    "name": "string",
    "state": "string"
  },
  "libraryItems": [
    {
      "completionDate": "string",
      "description": "string",
      "externalUrl": "string",
      "files": [
        {
          "id": 0,
          "size": "string",
          "url": "string"
        }
      ],
      "id": 0,
      "publishedBy": "string",
      "publishedDate": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "primaryTas": [
    {
      "code": "string",
      "id": 0,
      "name": "string"
    }
  ],
  "principalInvestigators": [
    "string"
  ],
  "programDirectors": [
    "string"
  ],
  "programManagers": [
    "string"
  ],
  "projectManagers": [
    "string"
  ],
  "responsibleMissionDirectorateOrOffice": "string",
  "responsibleProgram": "string",
  "startDate": "string",
  "status": "string",
  "supportedMissionType": "string",
  "supportingOrganizations": [
    {
      "acronym": "string",
      "city": "string",
      "name": "string",
      "state": "string"
    }
  ],
  "technologyMaturityCurrent": "string",
  "technologyMaturityEnd": "string",
  "technologyMaturityStart": "string",
  "title": "string",
  "website": "string",
  "workLocations": [
    "string"
  ]
}
```

Top-level TechPort object representing a NASA technology project and its associated data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acronym|string|false|none|Abbreviated name of the project.|
|additionalTas|[[technologyArea](#schematechnologyarea)]|false|none|List of additional and cross-cutting technology areas associated with the project.|
|benefits|string|false|none|Describes the benefits offered to NASA funded and planned missions, unfunded or planned missions, commercial space industry, and to the nation.|
|closeoutDocuments|[[closeoutDocument](#schemacloseoutdocument)]|false|none|List of document files or links to the project final report closeout documentation.|
|closeoutSummary|string|false|none|The project closeout summary excerpt.|
|coFundingPartners|[[organization](#schemaorganization)]|false|none|Other government agencies, NASA Mission Directoratres, universities, or commercial entities performing contributing resources to this project.|
|coInvestigators|[[coInvestigator](#schemacoinvestigator)]|false|none|Names of the additional investigators who are scientists or engineers for this project.|
|description|string|false|none|A detailed description of the project.|
|destinations|[[destination](#schemadestination)]|false|none|List of the NASA destinations the technology on this project helps achieve.|
|endDate|string|false|none|The month and year the project is expected to complete its work.|
|id|integer(int64)|false|none|Unique identifier for the project.|
|lastUpdated|string(date)|false|none|ISO 8601 full-date in the format YYYY-MM-DD describing the last time this project was updated.|
|leadOrganization|[organization](#schemaorganization)|false|none|A NASA center/facility associated with an project.|
|libraryItems|[[libraryItem](#schemalibraryitem)]|false|none|List of library items in the project library.|
|primaryTas|[[technologyArea](#schematechnologyarea)]|false|none|List of primary technolgy areas (from the NASA Technology Roadmap) associated with the project.|
|principalInvestigators|[[principalInvestigator](#schemaprincipalinvestigator)]|false|none|Names of the Principal Investigators who are the lead scientists or engineers for this project.|
|programDirectors|[[programDirector](#schemaprogramdirector)]|false|none|Names of the Program Directors responsible for the management of this project.|
|programManagers|[[programManager](#schemaprogrammanager)]|false|none|Names of the Program Managers responsible for the management of this project.|
|projectManagers|[[projectManager](#schemaprojectmanager)]|false|none|Names of the Project Managers responsible for the management of this project.|
|responsibleMissionDirectorateOrOffice|string|false|none|The NASA Mission Directorate or Office that is the primary funding source for this project.|
|responsibleProgram|string|false|none|The NASA program that is the primary funding source for this project.|
|startDate|string|false|none|The month and year the project was authorized to proceed.|
|status|string|false|none|Indicates whether the project is currently active, completed, or canceled.|
|supportedMissionType|string|false|none|The supported mission type (Projected Mission, Planned Mission, or Pull).|
|supportingOrganizations|[[organization](#schemaorganization)]|false|none|The supporting organizations for this project that are conducting work on the project.|
|technologyMaturityCurrent|string|false|none|The current technology maturity (technology readiness level) of the project.|
|technologyMaturityEnd|string|false|none|The estimated technology maturity (technology readiness level) of the project at its end.|
|technologyMaturityStart|string|false|none|The technology maturity (technology readiness level) of the project at its beginning.|
|title|string|false|none|Title of the project.|
|website|string|false|none|The URL for the associated website.|
|workLocations|[[workLocation](#schemaworklocation)]|false|none|States and territories with people performing work on this project.|

<h2 id="tocS_projectManager">projectManager</h2>
<!-- backwards compatibility -->
<a id="schemaprojectmanager"></a>
<a id="schema_projectManager"></a>
<a id="tocSprojectmanager"></a>
<a id="tocsprojectmanager"></a>

```json
"string"
```

The name of a Project Manager responsible for management of an project.

<h2 id="tocS_technologyArea">technologyArea</h2>
<!-- backwards compatibility -->
<a id="schematechnologyarea"></a>
<a id="schema_technologyArea"></a>
<a id="tocStechnologyarea"></a>
<a id="tocstechnologyarea"></a>

```json
{
  "code": "string",
  "id": 0,
  "name": "string"
}
```

The Technology Area for a given technology that corresponds to the NASA Technology Roadmap.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The code identifier for the Technology Area.|
|id|integer(int64)|false|none|Unique identifier for the Technology Area.|
|name|string|false|none|The name of the Technology Area.|

<h2 id="tocS_workLocation">workLocation</h2>
<!-- backwards compatibility -->
<a id="schemaworklocation"></a>
<a id="schema_workLocation"></a>
<a id="tocSworklocation"></a>
<a id="tocsworklocation"></a>

```json
"string"
```

A state/territory where work on this project is performed.
