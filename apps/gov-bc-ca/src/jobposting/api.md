<h1 id="workbc-job-posting-api">WorkBC Job Posting API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API allows you to receive a feed of jobs from WorkBC's Job Board. Please see our <a href="https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice" target="_blank">data collection notice</a>. Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.

Base URLs:

* <a href="https://workbcjobs.api.gov.bc.ca/v1">https://workbcjobs.api.gov.bc.ca/v1</a> - Production

<h1 id="workbc-job-posting-api-job-feed">Job Feed</h1>

## Industries

> Code samples

```bash
curl https://example.com/Industries \
  -H 'Accept: application/json'
```

`GET /Industries`

The Industries endpoint returns all the Industries and related sub industries 
defined in WorkBC's Job Board. The response includes the id and caption for 
each industry and each sub industry.


> Example responses

> 200 Response

```json
[
  {
    "Caption": "string",
    "ID": 0,
    "SubIndustries": [
      {
        "Caption": "string",
        "ID": 0
      }
    ]
  }
]
```

> default Response

```json
{
  "Message": "string"
}
```

<h3 id="industries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of industries and sub industries|Inline|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="industries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Industry](#schemaindustry)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Job Types

> Code samples

```bash
curl https://example.com/jobTypes \
  -H 'Accept: application/json'
```

`GET /jobTypes`

The Job Types endpoint returns details of all of the
job types defined in WorkBC's Job Board. The response includes the
id and caption.


> Example responses

> 200 Response

```json
[
  {
    "Caption": "string",
    "ID": "Undefined0"
  }
]
```

> default Response

```json
{
  "Message": "string"
}
```

<h3 id="job-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of job types|Inline|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="job-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JobType](#schemajobtype)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Job Feed

> Code samples

```bash
curl https://example.com/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "city": "Victoria",
    "jobTypes": [
      1
    ],
    "lastRequestDate": "2018-08-29",
    "majorProjects": true,
    "region": 1
  }'
```

`POST /jobs`

The job feed endpoint returns an array of job records that satisfy the supplied criteria.

> Body parameter

```json
{
  "city": "Victoria",
  "jobTypes": [
    1
  ],
  "lastRequestDate": "2018-08-29",
  "majorProjects": true,
  "region": 1
}
```

<h3 id="job-feed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» city|body|string|false|The name of a city within B.C. Only job postings located within the specified city will be included in the response. If not specified, the data is not filtered by city.|
|» jobTypes|body|integer|false|ID values for types of job to filter on. Only job postings matching all specified values will be included in the response. If not specified, the data is not filtered by job type.|
|» lastRequestDate|body|string|false|The date of the last request. Only job postings changed or deleted after this time will be included in the response. Default is _today_ - 10 days.|
|» majorProjects|body|boolean|false|When true, only include job postings that have a Major Project associated with them. When false, only include job postings that do not have a Major Project associated with them. If not specified, the data is not filtered by major project, unless the MajorProjectID parameter is used.|
|» region|body|integer|false|The unique id of a region within B.C. Only job postings located within the specified region will be included in the response. If not specified, the data is not filtered by region|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» city|Victoria|
|» city|Vancouver|
|» jobTypes|[1]|
|» jobTypes|[2]|
|» lastRequestDate|2018-08-29T00:00:00.000Z|
|» region|1|
|» region|2|

> Example responses

> 200 Response

```json
{
  "Jobs": [
    {
      "EmployerName": "string",
      "ExpiryDate": "1970-01-01T00:00:00Z",
      "JobDescription": "string",
      "JobID": 0,
      "JobTitle": "string",
      "JobTypes": [
        {
          "Caption": "string",
          "ID": "Undefined0"
        }
      ],
      "Locations": [
        {
          "City": "string",
          "Province": "string",
          "RegionID": {
            "Caption": "string",
            "ID": "Undefined"
          },
          "RegionName": "string"
        }
      ],
      "MajorProject": {
        "Caption": "string",
        "ID": 0
      },
      "PostedDate": "1970-01-01T00:00:00Z",
      "RecordType": "Undefined",
      "SalaryMax": 0,
      "SalaryMin": 0,
      "SalaryMultiplier": 0,
      "SalaryType": "string",
      "Url": "string"
    }
  ]
}
```

> default Response

```json
{
  "Message": "string"
}
```

<h3 id="job-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of job records.|[JobFeedResponse](#schemajobfeedresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Major Projects

> Code samples

```bash
curl https://example.com/majorProjects \
  -H 'Accept: application/json'
```

`GET /majorProjects`

The Major Projects endpoint returns details of all of the
major projects defined in WorkBC's Job Board. The response includes the
id and caption.


> Example responses

> 200 Response

```json
[
  {
    "Caption": "string",
    "ID": 0
  }
]
```

> default Response

```json
{
  "Message": "string"
}
```

<h3 id="major-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of major projects|Inline|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="major-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MajorProject](#schemamajorproject)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Regions

> Code samples

```bash
curl https://example.com/regions \
  -H 'Accept: application/json'
```

`GET /regions`

The Regions endpoint returns details of all of the
regions defined in WorkBC's Job Board. The response includes the
id and caption.


> Example responses

> 200 Response

```json
[
  {
    "Caption": "string",
    "ID": "Undefined"
  }
]
```

> default Response

```json
{
  "Message": "string"
}
```

<h3 id="regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of regions|Inline|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="regions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Region](#schemaregion)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "Message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|none|

<h2 id="tocS_Industry">Industry</h2>
<!-- backwards compatibility -->
<a id="schemaindustry"></a>
<a id="schema_Industry"></a>
<a id="tocSindustry"></a>
<a id="tocsindustry"></a>

```json
{
  "Caption": "string",
  "ID": 0,
  "SubIndustries": [
    {
      "Caption": "string",
      "ID": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Caption|string|false|none|The name of the Industries.|
|ID|integer|false|none|Industry ID.|
|SubIndustries|[[SubIndustry](#schemasubindustry)]|false|none|none|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "EmployerName": "string",
  "ExpiryDate": "1970-01-01T00:00:00Z",
  "JobDescription": "string",
  "JobID": 0,
  "JobTitle": "string",
  "JobTypes": [
    {
      "Caption": "string",
      "ID": "Undefined0"
    }
  ],
  "Locations": [
    {
      "City": "string",
      "Province": "string",
      "RegionID": {
        "Caption": "string",
        "ID": "Undefined"
      },
      "RegionName": "string"
    }
  ],
  "MajorProject": {
    "Caption": "string",
    "ID": 0
  },
  "PostedDate": "1970-01-01T00:00:00Z",
  "RecordType": "Undefined",
  "SalaryMax": 0,
  "SalaryMin": 0,
  "SalaryMultiplier": 0,
  "SalaryType": "string",
  "Url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmployerName|string|false|none|The name of the employer who is offering the job.|
|ExpiryDate|string(date-time)|false|none|The date that the job will expire. It is the caller's responsibility to remove job postings once they expire. After this date the supplied Url will show a 404 page.|
|JobDescription|string|false|none|Details of the job posting. This is limited to 250 characters, and HTML tags are stripped out. For a full description, use the Url property to view the job posting on the WorkBC website.|
|JobID|integer|false|none|The unique id of the job in the WorkBC Job Board database.|
|JobTitle|string|false|none|The name of the job posting.|
|JobTypes|[[JobType](#schemajobtype)]|false|none|The types of work associated with this job.|
|Locations|[[Location](#schemalocation)]|false|none|Details of all of the locations where the job is available.|
|MajorProject|[MajorProject](#schemamajorproject)|false|none|none|
|PostedDate|string(date-time)|false|none|The date that the job was posted.|
|RecordType|[RecordType](#schemarecordtype)|false|none|The type of change that has happened to this job.|
|SalaryMax|number(double)|false|none|none|
|SalaryMin|number(double)|false|none|none|
|SalaryMultiplier|integer|false|none|The amount to multiply SalaryMin and SalaryMax by in order to convert to annual values. This is needed if you want to compare salaries for jobs that have been posted using different salary types.|
|SalaryType|string|false|none|none|
|Url|string|false|none|The URL for the live job posting on the WorkBC website.|

#### Enumerated Values

|Property|Value|
|---|---|
|RecordType|Undefined|
|RecordType|Update|
|RecordType|Delete|

<h2 id="tocS_JobFeedResponse">JobFeedResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobfeedresponse"></a>
<a id="schema_JobFeedResponse"></a>
<a id="tocSjobfeedresponse"></a>
<a id="tocsjobfeedresponse"></a>

```json
{
  "Jobs": [
    {
      "EmployerName": "string",
      "ExpiryDate": "1970-01-01T00:00:00Z",
      "JobDescription": "string",
      "JobID": 0,
      "JobTitle": "string",
      "JobTypes": [
        {
          "Caption": "string",
          "ID": "Undefined0"
        }
      ],
      "Locations": [
        {
          "City": "string",
          "Province": "string",
          "RegionID": {
            "Caption": "string",
            "ID": "Undefined"
          },
          "RegionName": "string"
        }
      ],
      "MajorProject": {
        "Caption": "string",
        "ID": 0
      },
      "PostedDate": "1970-01-01T00:00:00Z",
      "RecordType": "Undefined",
      "SalaryMax": 0,
      "SalaryMin": 0,
      "SalaryMultiplier": 0,
      "SalaryType": "string",
      "Url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Jobs|[[Job](#schemajob)]|false|none|none|

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
{
  "Caption": "string",
  "ID": "Undefined0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Caption|string|false|none|The name of the Job Type.|
|ID|[JobTypeID](#schemajobtypeid)|false|none|The type of work.|

#### Enumerated Values

|Property|Value|
|---|---|
|ID|Undefined0|
|ID|Full-Time|
|ID|Part-Time|
|ID|Contract|
|ID|Undefined4|
|ID|Undefined5|
|ID|Student|
|ID|Undefined7|
|ID|Undefined8|
|ID|Casual|
|ID|Seasonal|
|ID|Temporary|
|ID|Permanent|
|ID|Co-op|
|ID|Apprenticeship|

<h2 id="tocS_JobTypeID">JobTypeID</h2>
<!-- backwards compatibility -->
<a id="schemajobtypeid"></a>
<a id="schema_JobTypeID"></a>
<a id="tocSjobtypeid"></a>
<a id="tocsjobtypeid"></a>

```json
"Undefined0"
```

The type of work.

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "City": "string",
  "Province": "string",
  "RegionID": {
    "Caption": "string",
    "ID": "Undefined"
  },
  "RegionName": "string"
}
```

Details of where a job is located. A job can have up to three associated locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|City|string|false|none|The name of the city where the job is located.|
|Province|string|false|none|The name of the province where the job is located.|
|RegionID|[Region](#schemaregion)|false|none|none|
|RegionName|string|false|none|The name of the region in B.C. where the job is located.|

<h2 id="tocS_MajorProject">MajorProject</h2>
<!-- backwards compatibility -->
<a id="schemamajorproject"></a>
<a id="schema_MajorProject"></a>
<a id="tocSmajorproject"></a>
<a id="tocsmajorproject"></a>

```json
{
  "Caption": "string",
  "ID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Caption|string|false|none|The name of the Major Project.|
|ID|integer|false|none|The unique ID of the Major Project in the WorkBC Job Board database. Use this when restricting the Job Feed to only one Major Project.|

<h2 id="tocS_RecordType">RecordType</h2>
<!-- backwards compatibility -->
<a id="schemarecordtype"></a>
<a id="schema_RecordType"></a>
<a id="tocSrecordtype"></a>
<a id="tocsrecordtype"></a>

```json
"Undefined"
```

The type of change that has happened to this job.

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
{
  "Caption": "string",
  "ID": "Undefined"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Caption|string|false|none|The name of the Region.|
|ID|[RegionID](#schemaregionid)|false|none|A region within B.C.|

#### Enumerated Values

|Property|Value|
|---|---|
|ID|Undefined|
|ID|Vancouver Island/Coast|
|ID|Mainland/Southwest|
|ID|Thompson-Okanagan|
|ID|Kootenay|
|ID|Cariboo|
|ID|North Coast|
|ID|Nechako|
|ID|Northeast|

<h2 id="tocS_RegionID">RegionID</h2>
<!-- backwards compatibility -->
<a id="schemaregionid"></a>
<a id="schema_RegionID"></a>
<a id="tocSregionid"></a>
<a id="tocsregionid"></a>

```json
"Undefined"
```

A region within B.C.

<h2 id="tocS_SubIndustry">SubIndustry</h2>
<!-- backwards compatibility -->
<a id="schemasubindustry"></a>
<a id="schema_SubIndustry"></a>
<a id="tocSsubindustry"></a>
<a id="tocssubindustry"></a>

```json
{
  "Caption": "string",
  "ID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Caption|string|false|none|The name of the SubIndustries.|
|ID|integer|false|none|Sub Industry ID.|
