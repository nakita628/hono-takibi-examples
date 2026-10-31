<h1 id="patientview">PatientView v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The recommended REST API endpoints to be used when integrating with PatientView

Base URLs:

* <a href="https://www.patientview.org/">https://www.patientview.org/</a>

<a href="https://www.patientview.org/#/terms">Terms of service</a>

<h1 id="patientview-auth-controller">auth-controller</h1>

Auth Controller

## Log In

<a id="opIdlogIn"></a>

> Code samples

```bash
curl https://example.com/auth/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "apiKey": "string",
    "password": "string",
    "username": "string"
  }'
```

`POST /auth/login`

Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests

> Body parameter

```json
{
  "apiKey": "string",
  "password": "string",
  "username": "string"
}
```

<h3 id="log-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Credentials](#schemacredentials)|false|credentials|
|» apiKey|body|string|false|none|
|» password|body|string|false|none|
|» username|body|string|false|none|

<h3 id="log-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Description was not specified|[UserToken](#schemausertoken)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Log Out

<a id="opIdlogOut"></a>

> Code samples

```bash
curl https://example.com/auth/logout/string \
  -X DELETE
```

`DELETE /auth/logout/{token}`

Log Out

<h3 id="log-out-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|

<h3 id="log-out-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Description was not specified|None|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Basic User Information

<a id="opIdgetBasicUserInformation"></a>

> Code samples

```bash
curl https://example.com/auth/string/basicuserinformation
```

`GET /auth/{token}/basicuserinformation`

Once logged in and have a token, get basic user information including group role membership

<h3 id="get-basic-user-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|

<h3 id="get-basic-user-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="patientview-observation-controller">observation-controller</h1>

Observation Controller

## Get Observations of Multiple Types For a User

<a id="opIdgetObservationsByCodes"></a>

> Code samples

```bash
curl 'https://example.com/user/0/observations?code=string&limit=0&offset=0&orderDirection=string'
```

`GET /user/{userId}/observations`

Given a User ID and search parameters, retrieve a page of observations.

<h3 id="get-observations-of-multiple-types-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|userId|
|code|query|[string]|true|code|
|limit|query|integer(int64)|true|limit|
|offset|query|integer(int64)|true|offset|
|orderDirection|query|string|true|orderDirection|

<h3 id="get-observations-of-multiple-types-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FhirObservationPage](#schemafhirobservationpage)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Observations of a Certain Type For a User

<a id="opIdgetObservationsByCode"></a>

> Code samples

```bash
curl https://example.com/user/0/observations/string
```

`GET /user/{userId}/observations/{code}`

Given a User ID and observation code, retrieve all observations.

<h3 id="get-observations-of-a-certain-type-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|userId|
|code|path|string|true|code|

<h3 id="get-observations-of-a-certain-type-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-observations-of-a-certain-type-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FhirObservation](#schemafhirobservation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get patient entered Observations of a Certain Type For a User

<a id="opIdgetPatientEnteredObservationsByCode"></a>

> Code samples

```bash
curl https://example.com/user/0/observations/string/patiententered
```

`GET /user/{userId}/observations/{code}/patiententered`

Given a User ID and observation code, retrieve patient entered observations.

<h3 id="get-patient-entered-observations-of-a-certain-type-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|userId|
|code|path|string|true|code|

<h3 id="get-patient-entered-observations-of-a-certain-type-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-patient-entered-observations-of-a-certain-type-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FhirObservation](#schemafhirobservation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="patientview-observation-heading-controller">observation-heading-controller</h1>

Observation Heading Controller

## Get Available Observations Types For a User

<a id="opIdgetAvailableObservationHeadings"></a>

> Code samples

```bash
curl https://example.com/user/0/availableobservationheadings \
  -H 'Accept: application/json'
```

`GET /user/{userId}/availableobservationheadings`

Given a User ID retrieve a list of available observation types for that user (where they have observation data).

<h3 id="get-available-observations-types-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|userId|

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "created": "1970-01-01T00:00:00Z",
    "decimalPlaces": 0,
    "defaultPanel": 0,
    "defaultPanelOrder": 0,
    "heading": "string",
    "id": 0,
    "infoLink": "string",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "maxGraph": 0,
    "minGraph": 0,
    "name": "string",
    "normalRange": "string",
    "observationHeadingGroups": [
      {
        "created": "1970-01-01T00:00:00Z",
        "group": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "childGroups": [
            {}
          ],
          "code": "string",
          "contactPoints": [
            {
              "contactPointType": {
                "description": "string",
                "id": 0,
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "UNIT_WEB_ADDRESS"
              },
              "content": "string",
              "created": "1970-01-01T00:00:00Z",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "created": "1970-01-01T00:00:00Z",
          "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "groupFeatures": [
            {
              "created": "1970-01-01T00:00:00Z",
              "feature": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string"
              },
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "groupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "id": 0,
          "lastImportDate": "1970-01-01T00:00:00Z",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "links": [
            {
              "created": "1970-01-01T00:00:00Z",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "link": "string",
              "linkType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "name": "string"
            }
          ],
          "locations": [
            {
              "address": "string",
              "created": "1970-01-01T00:00:00Z",
              "email": "string",
              "id": 0,
              "label": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string",
              "phone": "string",
              "web": "string"
            }
          ],
          "name": "string",
          "parentGroups": [
            {}
          ],
          "postcode": "string",
          "sftpUser": "string",
          "shortName": "string",
          "visible": true,
          "visibleToJoin": true
        },
        "id": 0,
        "panel": 0,
        "panelOrder": 0
      }
    ],
    "units": "string"
  }
]
```

<h3 id="get-available-observations-types-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-available-observations-types-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ObservationHeading](#schemaobservationheading)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Available Patient Entered Observations Types For a User

<a id="opIdgetPatientEnteredObservationHeadings"></a>

> Code samples

```bash
curl https://example.com/user/0/patiententeredobservationheadings \
  -H 'Accept: application/json'
```

`GET /user/{userId}/patiententeredobservationheadings`

Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).

<h3 id="get-available-patient-entered-observations-types-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|userId|

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "created": "1970-01-01T00:00:00Z",
    "decimalPlaces": 0,
    "defaultPanel": 0,
    "defaultPanelOrder": 0,
    "heading": "string",
    "id": 0,
    "infoLink": "string",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "maxGraph": 0,
    "minGraph": 0,
    "name": "string",
    "normalRange": "string",
    "observationHeadingGroups": [
      {
        "created": "1970-01-01T00:00:00Z",
        "group": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "childGroups": [
            {}
          ],
          "code": "string",
          "contactPoints": [
            {
              "contactPointType": {
                "description": "string",
                "id": 0,
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "UNIT_WEB_ADDRESS"
              },
              "content": "string",
              "created": "1970-01-01T00:00:00Z",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "created": "1970-01-01T00:00:00Z",
          "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "groupFeatures": [
            {
              "created": "1970-01-01T00:00:00Z",
              "feature": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string"
              },
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "groupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "id": 0,
          "lastImportDate": "1970-01-01T00:00:00Z",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "links": [
            {
              "created": "1970-01-01T00:00:00Z",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "link": "string",
              "linkType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "name": "string"
            }
          ],
          "locations": [
            {
              "address": "string",
              "created": "1970-01-01T00:00:00Z",
              "email": "string",
              "id": 0,
              "label": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string",
              "phone": "string",
              "web": "string"
            }
          ],
          "name": "string",
          "parentGroups": [
            {}
          ],
          "postcode": "string",
          "sftpUser": "string",
          "shortName": "string",
          "visible": true,
          "visibleToJoin": true
        },
        "id": 0,
        "panel": 0,
        "panelOrder": 0
      }
    ],
    "units": "string"
  }
]
```

<h3 id="get-available-patient-entered-observations-types-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-available-patient-entered-observations-types-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ObservationHeading](#schemaobservationheading)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="patientview-patient-controller">patient-controller</h1>

Patient Controller

## Get Basic Patient Information

<a id="opIdgetBasicPatientDetails"></a>

> Code samples

```bash
curl https://example.com/patient/0/basic
```

`GET /patient/{userId}/basic`

Given a User ID, get basic patient information for a user from clinical data stored in FHIR

<h3 id="get-basic-patient-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|userId|

<h3 id="get-basic-patient-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-basic-patient-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Patient](#schemapatient)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="patientview-patient-management-controller">patient-management-controller</h1>

Patient Management Controller

## getPatientManagementDiagnoses

<a id="opIdgetPatientManagementDiagnoses"></a>

> Code samples

```bash
curl https://example.com/patientmanagement/diagnoses \
  -H 'Accept: application/json'
```

`GET /patientmanagement/diagnoses`

getPatientManagementDiagnoses

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "codeCategories": [
      {
        "category": {
          "friendlyDescription": "string",
          "hidden": true,
          "icd10Description": "string",
          "id": 0,
          "number": 0
        },
        "id": 0
      }
    ],
    "codeType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    },
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "displayOrder": 0,
    "externalStandards": [
      {
        "codeString": "string",
        "externalStandard": {
          "description": "string",
          "id": 0,
          "name": "string"
        },
        "id": 0
      }
    ],
    "fullDescription": "string",
    "hideFromPatients": true,
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "patientFriendlyName": "string",
    "removedExternally": true,
    "sourceType": "PATIENTVIEW",
    "standardType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    }
  }
]
```

<h3 id="getpatientmanagementdiagnoses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="getpatientmanagementdiagnoses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Code](#schemacode)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPatientManagementLookupTypes

<a id="opIdgetPatientManagementLookupTypes"></a>

> Code samples

```bash
curl https://example.com/patientmanagement/lookuptypes \
  -H 'Accept: application/json'
```

`GET /patientmanagement/lookuptypes`

getPatientManagementLookupTypes

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "type": "GROUP"
  }
]
```

<h3 id="getpatientmanagementlookuptypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="getpatientmanagementlookuptypes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LookupType](#schemalookuptype)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## validatePatientManagement

<a id="opIdvalidatePatientManagement"></a>

> Code samples

```bash
curl https://example.com/patientmanagement/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "condition": {
      "asserter": "string",
      "category": "string",
      "code": "string",
      "date": "1970-01-01T00:00:00Z",
      "description": "string",
      "fullDescription": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "notes": "string",
      "severity": "string",
      "status": "string"
    },
    "encounters": [
      {
        "date": "1970-01-01T00:00:00Z",
        "encounterType": "string",
        "group": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "childGroups": [
            {}
          ],
          "code": "string",
          "contactPoints": [
            {
              "contactPointType": {
                "description": "string",
                "id": 0,
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "UNIT_WEB_ADDRESS"
              },
              "content": "string",
              "created": "1970-01-01T00:00:00Z",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "created": "1970-01-01T00:00:00Z",
          "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "groupFeatures": [
            {
              "created": "1970-01-01T00:00:00Z",
              "feature": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string"
              },
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "groupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "id": 0,
          "lastImportDate": "1970-01-01T00:00:00Z",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "links": [
            {
              "created": "1970-01-01T00:00:00Z",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "link": "string",
              "linkType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "name": "string"
            }
          ],
          "locations": [
            {
              "address": "string",
              "created": "1970-01-01T00:00:00Z",
              "email": "string",
              "id": 0,
              "label": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string",
              "phone": "string",
              "web": "string"
            }
          ],
          "name": "string",
          "parentGroups": [
            {}
          ],
          "postcode": "string",
          "sftpUser": "string",
          "shortName": "string",
          "visible": true,
          "visibleToJoin": true
        },
        "id": 0,
        "identifier": "string",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "observations": [
          {
            "applies": "1970-01-01T00:00:00Z",
            "bodySite": "string",
            "comments": "string",
            "comparator": "string",
            "diagram": "string",
            "group": {
              "address1": "string",
              "address2": "string",
              "address3": "string",
              "childGroups": [
                {}
              ],
              "code": "string",
              "contactPoints": [
                {
                  "contactPointType": {
                    "description": "string",
                    "id": 0,
                    "lookupType": {
                      "created": "1970-01-01T00:00:00Z",
                      "description": "string",
                      "id": 0,
                      "lastUpdate": "1970-01-01T00:00:00Z",
                      "type": "GROUP"
                    },
                    "value": "UNIT_WEB_ADDRESS"
                  },
                  "content": "string",
                  "created": "1970-01-01T00:00:00Z",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z"
                }
              ],
              "created": "1970-01-01T00:00:00Z",
              "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "groupFeatures": [
                {
                  "created": "1970-01-01T00:00:00Z",
                  "feature": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "name": "string"
                  },
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z"
                }
              ],
              "groupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "id": 0,
              "lastImportDate": "1970-01-01T00:00:00Z",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "links": [
                {
                  "created": "1970-01-01T00:00:00Z",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "link": "string",
                  "linkType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "descriptionFriendly": "string",
                    "displayOrder": 0,
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "lookupType": {
                      "created": "1970-01-01T00:00:00Z",
                      "description": "string",
                      "id": 0,
                      "lastUpdate": "1970-01-01T00:00:00Z",
                      "type": "GROUP"
                    },
                    "value": "string"
                  },
                  "name": "string"
                }
              ],
              "locations": [
                {
                  "address": "string",
                  "created": "1970-01-01T00:00:00Z",
                  "email": "string",
                  "id": 0,
                  "label": "string",
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "name": "string",
                  "phone": "string",
                  "web": "string"
                }
              ],
              "name": "string",
              "parentGroups": [
                {}
              ],
              "postcode": "string",
              "sftpUser": "string",
              "shortName": "string",
              "visible": true,
              "visibleToJoin": true
            },
            "id": 0,
            "identifier": "string",
            "location": "string",
            "name": "string",
            "temporaryUuid": "string",
            "units": "string",
            "value": "string"
          }
        ],
        "procedures": [
          {
            "bodySite": "string",
            "id": 0,
            "type": "string"
          }
        ],
        "status": "string"
      }
    ],
    "groupCode": "string",
    "identifier": "string",
    "observations": [
      {
        "applies": "1970-01-01T00:00:00Z",
        "bodySite": "string",
        "comments": "string",
        "comparator": "string",
        "diagram": "string",
        "group": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "childGroups": [
            {}
          ],
          "code": "string",
          "contactPoints": [
            {
              "contactPointType": {
                "description": "string",
                "id": 0,
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "UNIT_WEB_ADDRESS"
              },
              "content": "string",
              "created": "1970-01-01T00:00:00Z",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "created": "1970-01-01T00:00:00Z",
          "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "groupFeatures": [
            {
              "created": "1970-01-01T00:00:00Z",
              "feature": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string"
              },
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "groupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "id": 0,
          "lastImportDate": "1970-01-01T00:00:00Z",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "links": [
            {
              "created": "1970-01-01T00:00:00Z",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "link": "string",
              "linkType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "name": "string"
            }
          ],
          "locations": [
            {
              "address": "string",
              "created": "1970-01-01T00:00:00Z",
              "email": "string",
              "id": 0,
              "label": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string",
              "phone": "string",
              "web": "string"
            }
          ],
          "name": "string",
          "parentGroups": [
            {}
          ],
          "postcode": "string",
          "sftpUser": "string",
          "shortName": "string",
          "visible": true,
          "visibleToJoin": true
        },
        "id": 0,
        "identifier": "string",
        "location": "string",
        "name": "string",
        "temporaryUuid": "string",
        "units": "string",
        "value": "string"
      }
    ],
    "patient": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "address4": "string",
      "contacts": [
        {
          "id": 0,
          "system": "string",
          "use": "string",
          "value": "string"
        }
      ],
      "dateOfBirth": "1970-01-01T00:00:00Z",
      "dateOfBirthNoTime": "string",
      "forename": "string",
      "gender": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "groupCode": "string",
      "identifier": "string",
      "identifiers": [
        {
          "id": 0,
          "label": "string",
          "value": "string"
        }
      ],
      "postcode": "string",
      "practitioners": [
        {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "address4": "string",
          "allowInviteGp": true,
          "contacts": [
            {
              "id": 0,
              "system": "string",
              "use": "string",
              "value": "string"
            }
          ],
          "gender": "string",
          "groupCode": "string",
          "identifier": "string",
          "inviteDate": "1970-01-01T00:00:00Z",
          "name": "string",
          "postcode": "string",
          "role": "string"
        }
      ],
      "surname": "string"
    },
    "practitioners": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "address4": "string",
        "allowInviteGp": true,
        "contacts": [
          {
            "id": 0,
            "system": "string",
            "use": "string",
            "value": "string"
          }
        ],
        "gender": "string",
        "groupCode": "string",
        "identifier": "string",
        "inviteDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "postcode": "string",
        "role": "string"
      }
    ]
  }'
```

`POST /patientmanagement/validate`

validatePatientManagement

> Body parameter

```json
{
  "condition": {
    "asserter": "string",
    "category": "string",
    "code": "string",
    "date": "1970-01-01T00:00:00Z",
    "description": "string",
    "fullDescription": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "id": 0,
    "identifier": "string",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "notes": "string",
    "severity": "string",
    "status": "string"
  },
  "encounters": [
    {
      "date": "1970-01-01T00:00:00Z",
      "encounterType": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "observations": [
        {
          "applies": "1970-01-01T00:00:00Z",
          "bodySite": "string",
          "comments": "string",
          "comparator": "string",
          "diagram": "string",
          "group": {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "childGroups": [
              {}
            ],
            "code": "string",
            "contactPoints": [
              {
                "contactPointType": {
                  "description": "string",
                  "id": 0,
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "UNIT_WEB_ADDRESS"
                },
                "content": "string",
                "created": "1970-01-01T00:00:00Z",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "created": "1970-01-01T00:00:00Z",
            "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "groupFeatures": [
              {
                "created": "1970-01-01T00:00:00Z",
                "feature": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "name": "string"
                },
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "groupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "id": 0,
            "lastImportDate": "1970-01-01T00:00:00Z",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "links": [
              {
                "created": "1970-01-01T00:00:00Z",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "link": "string",
                "linkType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "descriptionFriendly": "string",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "string"
                },
                "name": "string"
              }
            ],
            "locations": [
              {
                "address": "string",
                "created": "1970-01-01T00:00:00Z",
                "email": "string",
                "id": 0,
                "label": "string",
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string",
                "phone": "string",
                "web": "string"
              }
            ],
            "name": "string",
            "parentGroups": [
              {}
            ],
            "postcode": "string",
            "sftpUser": "string",
            "shortName": "string",
            "visible": true,
            "visibleToJoin": true
          },
          "id": 0,
          "identifier": "string",
          "location": "string",
          "name": "string",
          "temporaryUuid": "string",
          "units": "string",
          "value": "string"
        }
      ],
      "procedures": [
        {
          "bodySite": "string",
          "id": 0,
          "type": "string"
        }
      ],
      "status": "string"
    }
  ],
  "groupCode": "string",
  "identifier": "string",
  "observations": [
    {
      "applies": "1970-01-01T00:00:00Z",
      "bodySite": "string",
      "comments": "string",
      "comparator": "string",
      "diagram": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "location": "string",
      "name": "string",
      "temporaryUuid": "string",
      "units": "string",
      "value": "string"
    }
  ],
  "patient": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "address4": "string",
    "contacts": [
      {
        "id": 0,
        "system": "string",
        "use": "string",
        "value": "string"
      }
    ],
    "dateOfBirth": "1970-01-01T00:00:00Z",
    "dateOfBirthNoTime": "string",
    "forename": "string",
    "gender": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "groupCode": "string",
    "identifier": "string",
    "identifiers": [
      {
        "id": 0,
        "label": "string",
        "value": "string"
      }
    ],
    "postcode": "string",
    "practitioners": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "address4": "string",
        "allowInviteGp": true,
        "contacts": [
          {
            "id": 0,
            "system": "string",
            "use": "string",
            "value": "string"
          }
        ],
        "gender": "string",
        "groupCode": "string",
        "identifier": "string",
        "inviteDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "postcode": "string",
        "role": "string"
      }
    ],
    "surname": "string"
  },
  "practitioners": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "address4": "string",
      "allowInviteGp": true,
      "contacts": [
        {
          "id": 0,
          "system": "string",
          "use": "string",
          "value": "string"
        }
      ],
      "gender": "string",
      "groupCode": "string",
      "identifier": "string",
      "inviteDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "postcode": "string",
      "role": "string"
    }
  ]
}
```

<h3 id="validatepatientmanagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PatientManagement](#schemapatientmanagement)|false|patientManagement|
|» condition|body|[FhirCondition](#schemafhircondition)|false|none|
|» encounters|body|[[FhirEncounter](#schemafhirencounter)]|false|none|
|» groupCode|body|string|false|none|
|» identifier|body|string|false|none|
|» observations|body|[[FhirObservation](#schemafhirobservation)]|false|none|
|» patient|body|[FhirPatient](#schemafhirpatient)|false|none|
|» practitioners|body|[[FhirPractitioner](#schemafhirpractitioner)]|false|none|

<h3 id="validatepatientmanagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Description was not specified|None|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPatientManagement

<a id="opIdgetPatientManagement"></a>

> Code samples

```bash
curl https://example.com/patientmanagement/0/group/0/identifier/0 \
  -H 'Accept: application/json'
```

`GET /patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}`

getPatientManagement

<h3 id="getpatientmanagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|userId|
|groupId|path|integer(int64)|true|groupId|
|identifierId|path|integer(int64)|true|identifierId|

> Example responses

> 200 Response

```json
{
  "condition": {
    "asserter": "string",
    "category": "string",
    "code": "string",
    "date": "1970-01-01T00:00:00Z",
    "description": "string",
    "fullDescription": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "id": 0,
    "identifier": "string",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "notes": "string",
    "severity": "string",
    "status": "string"
  },
  "encounters": [
    {
      "date": "1970-01-01T00:00:00Z",
      "encounterType": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "observations": [
        {
          "applies": "1970-01-01T00:00:00Z",
          "bodySite": "string",
          "comments": "string",
          "comparator": "string",
          "diagram": "string",
          "group": {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "childGroups": [
              {}
            ],
            "code": "string",
            "contactPoints": [
              {
                "contactPointType": {
                  "description": "string",
                  "id": 0,
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "UNIT_WEB_ADDRESS"
                },
                "content": "string",
                "created": "1970-01-01T00:00:00Z",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "created": "1970-01-01T00:00:00Z",
            "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "groupFeatures": [
              {
                "created": "1970-01-01T00:00:00Z",
                "feature": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "name": "string"
                },
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "groupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "id": 0,
            "lastImportDate": "1970-01-01T00:00:00Z",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "links": [
              {
                "created": "1970-01-01T00:00:00Z",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "link": "string",
                "linkType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "descriptionFriendly": "string",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "string"
                },
                "name": "string"
              }
            ],
            "locations": [
              {
                "address": "string",
                "created": "1970-01-01T00:00:00Z",
                "email": "string",
                "id": 0,
                "label": "string",
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string",
                "phone": "string",
                "web": "string"
              }
            ],
            "name": "string",
            "parentGroups": [
              {}
            ],
            "postcode": "string",
            "sftpUser": "string",
            "shortName": "string",
            "visible": true,
            "visibleToJoin": true
          },
          "id": 0,
          "identifier": "string",
          "location": "string",
          "name": "string",
          "temporaryUuid": "string",
          "units": "string",
          "value": "string"
        }
      ],
      "procedures": [
        {
          "bodySite": "string",
          "id": 0,
          "type": "string"
        }
      ],
      "status": "string"
    }
  ],
  "groupCode": "string",
  "identifier": "string",
  "observations": [
    {
      "applies": "1970-01-01T00:00:00Z",
      "bodySite": "string",
      "comments": "string",
      "comparator": "string",
      "diagram": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "location": "string",
      "name": "string",
      "temporaryUuid": "string",
      "units": "string",
      "value": "string"
    }
  ],
  "patient": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "address4": "string",
    "contacts": [
      {
        "id": 0,
        "system": "string",
        "use": "string",
        "value": "string"
      }
    ],
    "dateOfBirth": "1970-01-01T00:00:00Z",
    "dateOfBirthNoTime": "string",
    "forename": "string",
    "gender": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "groupCode": "string",
    "identifier": "string",
    "identifiers": [
      {
        "id": 0,
        "label": "string",
        "value": "string"
      }
    ],
    "postcode": "string",
    "practitioners": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "address4": "string",
        "allowInviteGp": true,
        "contacts": [
          {
            "id": 0,
            "system": "string",
            "use": "string",
            "value": "string"
          }
        ],
        "gender": "string",
        "groupCode": "string",
        "identifier": "string",
        "inviteDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "postcode": "string",
        "role": "string"
      }
    ],
    "surname": "string"
  },
  "practitioners": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "address4": "string",
      "allowInviteGp": true,
      "contacts": [
        {
          "id": 0,
          "system": "string",
          "use": "string",
          "value": "string"
        }
      ],
      "gender": "string",
      "groupCode": "string",
      "identifier": "string",
      "inviteDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "postcode": "string",
      "role": "string"
    }
  ]
}
```

<h3 id="getpatientmanagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientManagement](#schemapatientmanagement)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## savePatientManagement

<a id="opIdsavePatientManagement"></a>

> Code samples

```bash
curl https://example.com/patientmanagement/0/group/0/identifier/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "condition": {
      "asserter": "string",
      "category": "string",
      "code": "string",
      "date": "1970-01-01T00:00:00Z",
      "description": "string",
      "fullDescription": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "notes": "string",
      "severity": "string",
      "status": "string"
    },
    "encounters": [
      {
        "date": "1970-01-01T00:00:00Z",
        "encounterType": "string",
        "group": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "childGroups": [
            {}
          ],
          "code": "string",
          "contactPoints": [
            {
              "contactPointType": {
                "description": "string",
                "id": 0,
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "UNIT_WEB_ADDRESS"
              },
              "content": "string",
              "created": "1970-01-01T00:00:00Z",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "created": "1970-01-01T00:00:00Z",
          "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "groupFeatures": [
            {
              "created": "1970-01-01T00:00:00Z",
              "feature": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string"
              },
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "groupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "id": 0,
          "lastImportDate": "1970-01-01T00:00:00Z",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "links": [
            {
              "created": "1970-01-01T00:00:00Z",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "link": "string",
              "linkType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "name": "string"
            }
          ],
          "locations": [
            {
              "address": "string",
              "created": "1970-01-01T00:00:00Z",
              "email": "string",
              "id": 0,
              "label": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string",
              "phone": "string",
              "web": "string"
            }
          ],
          "name": "string",
          "parentGroups": [
            {}
          ],
          "postcode": "string",
          "sftpUser": "string",
          "shortName": "string",
          "visible": true,
          "visibleToJoin": true
        },
        "id": 0,
        "identifier": "string",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "observations": [
          {
            "applies": "1970-01-01T00:00:00Z",
            "bodySite": "string",
            "comments": "string",
            "comparator": "string",
            "diagram": "string",
            "group": {
              "address1": "string",
              "address2": "string",
              "address3": "string",
              "childGroups": [
                {}
              ],
              "code": "string",
              "contactPoints": [
                {
                  "contactPointType": {
                    "description": "string",
                    "id": 0,
                    "lookupType": {
                      "created": "1970-01-01T00:00:00Z",
                      "description": "string",
                      "id": 0,
                      "lastUpdate": "1970-01-01T00:00:00Z",
                      "type": "GROUP"
                    },
                    "value": "UNIT_WEB_ADDRESS"
                  },
                  "content": "string",
                  "created": "1970-01-01T00:00:00Z",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z"
                }
              ],
              "created": "1970-01-01T00:00:00Z",
              "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "groupFeatures": [
                {
                  "created": "1970-01-01T00:00:00Z",
                  "feature": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "name": "string"
                  },
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z"
                }
              ],
              "groupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "id": 0,
              "lastImportDate": "1970-01-01T00:00:00Z",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "links": [
                {
                  "created": "1970-01-01T00:00:00Z",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "link": "string",
                  "linkType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "descriptionFriendly": "string",
                    "displayOrder": 0,
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "lookupType": {
                      "created": "1970-01-01T00:00:00Z",
                      "description": "string",
                      "id": 0,
                      "lastUpdate": "1970-01-01T00:00:00Z",
                      "type": "GROUP"
                    },
                    "value": "string"
                  },
                  "name": "string"
                }
              ],
              "locations": [
                {
                  "address": "string",
                  "created": "1970-01-01T00:00:00Z",
                  "email": "string",
                  "id": 0,
                  "label": "string",
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "name": "string",
                  "phone": "string",
                  "web": "string"
                }
              ],
              "name": "string",
              "parentGroups": [
                {}
              ],
              "postcode": "string",
              "sftpUser": "string",
              "shortName": "string",
              "visible": true,
              "visibleToJoin": true
            },
            "id": 0,
            "identifier": "string",
            "location": "string",
            "name": "string",
            "temporaryUuid": "string",
            "units": "string",
            "value": "string"
          }
        ],
        "procedures": [
          {
            "bodySite": "string",
            "id": 0,
            "type": "string"
          }
        ],
        "status": "string"
      }
    ],
    "groupCode": "string",
    "identifier": "string",
    "observations": [
      {
        "applies": "1970-01-01T00:00:00Z",
        "bodySite": "string",
        "comments": "string",
        "comparator": "string",
        "diagram": "string",
        "group": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "childGroups": [
            {}
          ],
          "code": "string",
          "contactPoints": [
            {
              "contactPointType": {
                "description": "string",
                "id": 0,
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "UNIT_WEB_ADDRESS"
              },
              "content": "string",
              "created": "1970-01-01T00:00:00Z",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "created": "1970-01-01T00:00:00Z",
          "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "groupFeatures": [
            {
              "created": "1970-01-01T00:00:00Z",
              "feature": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string"
              },
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "groupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "id": 0,
          "lastImportDate": "1970-01-01T00:00:00Z",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "links": [
            {
              "created": "1970-01-01T00:00:00Z",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "link": "string",
              "linkType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "name": "string"
            }
          ],
          "locations": [
            {
              "address": "string",
              "created": "1970-01-01T00:00:00Z",
              "email": "string",
              "id": 0,
              "label": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string",
              "phone": "string",
              "web": "string"
            }
          ],
          "name": "string",
          "parentGroups": [
            {}
          ],
          "postcode": "string",
          "sftpUser": "string",
          "shortName": "string",
          "visible": true,
          "visibleToJoin": true
        },
        "id": 0,
        "identifier": "string",
        "location": "string",
        "name": "string",
        "temporaryUuid": "string",
        "units": "string",
        "value": "string"
      }
    ],
    "patient": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "address4": "string",
      "contacts": [
        {
          "id": 0,
          "system": "string",
          "use": "string",
          "value": "string"
        }
      ],
      "dateOfBirth": "1970-01-01T00:00:00Z",
      "dateOfBirthNoTime": "string",
      "forename": "string",
      "gender": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "groupCode": "string",
      "identifier": "string",
      "identifiers": [
        {
          "id": 0,
          "label": "string",
          "value": "string"
        }
      ],
      "postcode": "string",
      "practitioners": [
        {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "address4": "string",
          "allowInviteGp": true,
          "contacts": [
            {
              "id": 0,
              "system": "string",
              "use": "string",
              "value": "string"
            }
          ],
          "gender": "string",
          "groupCode": "string",
          "identifier": "string",
          "inviteDate": "1970-01-01T00:00:00Z",
          "name": "string",
          "postcode": "string",
          "role": "string"
        }
      ],
      "surname": "string"
    },
    "practitioners": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "address4": "string",
        "allowInviteGp": true,
        "contacts": [
          {
            "id": 0,
            "system": "string",
            "use": "string",
            "value": "string"
          }
        ],
        "gender": "string",
        "groupCode": "string",
        "identifier": "string",
        "inviteDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "postcode": "string",
        "role": "string"
      }
    ]
  }'
```

`POST /patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}`

savePatientManagement

> Body parameter

```json
{
  "condition": {
    "asserter": "string",
    "category": "string",
    "code": "string",
    "date": "1970-01-01T00:00:00Z",
    "description": "string",
    "fullDescription": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "id": 0,
    "identifier": "string",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "notes": "string",
    "severity": "string",
    "status": "string"
  },
  "encounters": [
    {
      "date": "1970-01-01T00:00:00Z",
      "encounterType": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "observations": [
        {
          "applies": "1970-01-01T00:00:00Z",
          "bodySite": "string",
          "comments": "string",
          "comparator": "string",
          "diagram": "string",
          "group": {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "childGroups": [
              {}
            ],
            "code": "string",
            "contactPoints": [
              {
                "contactPointType": {
                  "description": "string",
                  "id": 0,
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "UNIT_WEB_ADDRESS"
                },
                "content": "string",
                "created": "1970-01-01T00:00:00Z",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "created": "1970-01-01T00:00:00Z",
            "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "groupFeatures": [
              {
                "created": "1970-01-01T00:00:00Z",
                "feature": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "name": "string"
                },
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "groupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "id": 0,
            "lastImportDate": "1970-01-01T00:00:00Z",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "links": [
              {
                "created": "1970-01-01T00:00:00Z",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "link": "string",
                "linkType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "descriptionFriendly": "string",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "string"
                },
                "name": "string"
              }
            ],
            "locations": [
              {
                "address": "string",
                "created": "1970-01-01T00:00:00Z",
                "email": "string",
                "id": 0,
                "label": "string",
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string",
                "phone": "string",
                "web": "string"
              }
            ],
            "name": "string",
            "parentGroups": [
              {}
            ],
            "postcode": "string",
            "sftpUser": "string",
            "shortName": "string",
            "visible": true,
            "visibleToJoin": true
          },
          "id": 0,
          "identifier": "string",
          "location": "string",
          "name": "string",
          "temporaryUuid": "string",
          "units": "string",
          "value": "string"
        }
      ],
      "procedures": [
        {
          "bodySite": "string",
          "id": 0,
          "type": "string"
        }
      ],
      "status": "string"
    }
  ],
  "groupCode": "string",
  "identifier": "string",
  "observations": [
    {
      "applies": "1970-01-01T00:00:00Z",
      "bodySite": "string",
      "comments": "string",
      "comparator": "string",
      "diagram": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "location": "string",
      "name": "string",
      "temporaryUuid": "string",
      "units": "string",
      "value": "string"
    }
  ],
  "patient": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "address4": "string",
    "contacts": [
      {
        "id": 0,
        "system": "string",
        "use": "string",
        "value": "string"
      }
    ],
    "dateOfBirth": "1970-01-01T00:00:00Z",
    "dateOfBirthNoTime": "string",
    "forename": "string",
    "gender": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "groupCode": "string",
    "identifier": "string",
    "identifiers": [
      {
        "id": 0,
        "label": "string",
        "value": "string"
      }
    ],
    "postcode": "string",
    "practitioners": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "address4": "string",
        "allowInviteGp": true,
        "contacts": [
          {
            "id": 0,
            "system": "string",
            "use": "string",
            "value": "string"
          }
        ],
        "gender": "string",
        "groupCode": "string",
        "identifier": "string",
        "inviteDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "postcode": "string",
        "role": "string"
      }
    ],
    "surname": "string"
  },
  "practitioners": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "address4": "string",
      "allowInviteGp": true,
      "contacts": [
        {
          "id": 0,
          "system": "string",
          "use": "string",
          "value": "string"
        }
      ],
      "gender": "string",
      "groupCode": "string",
      "identifier": "string",
      "inviteDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "postcode": "string",
      "role": "string"
    }
  ]
}
```

<h3 id="savepatientmanagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|userId|
|groupId|path|integer(int64)|true|groupId|
|identifierId|path|integer(int64)|true|identifierId|
|body|body|[PatientManagement](#schemapatientmanagement)|false|patientManagement|
|» condition|body|[FhirCondition](#schemafhircondition)|false|none|
|» encounters|body|[[FhirEncounter](#schemafhirencounter)]|false|none|
|» groupCode|body|string|false|none|
|» identifier|body|string|false|none|
|» observations|body|[[FhirObservation](#schemafhirobservation)]|false|none|
|» patient|body|[FhirPatient](#schemafhirpatient)|false|none|
|» practitioners|body|[[FhirPractitioner](#schemafhirpractitioner)]|false|none|

<h3 id="savepatientmanagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Description was not specified|None|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## savePatientManagementSurgeries

<a id="opIdsavePatientManagementSurgeries"></a>

> Code samples

```bash
curl https://example.com/patientmanagement/0/group/0/identifier/0/surgeries \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "condition": {
      "asserter": "string",
      "category": "string",
      "code": "string",
      "date": "1970-01-01T00:00:00Z",
      "description": "string",
      "fullDescription": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "notes": "string",
      "severity": "string",
      "status": "string"
    },
    "encounters": [
      {
        "date": "1970-01-01T00:00:00Z",
        "encounterType": "string",
        "group": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "childGroups": [
            {}
          ],
          "code": "string",
          "contactPoints": [
            {
              "contactPointType": {
                "description": "string",
                "id": 0,
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "UNIT_WEB_ADDRESS"
              },
              "content": "string",
              "created": "1970-01-01T00:00:00Z",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "created": "1970-01-01T00:00:00Z",
          "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "groupFeatures": [
            {
              "created": "1970-01-01T00:00:00Z",
              "feature": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string"
              },
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "groupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "id": 0,
          "lastImportDate": "1970-01-01T00:00:00Z",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "links": [
            {
              "created": "1970-01-01T00:00:00Z",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "link": "string",
              "linkType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "name": "string"
            }
          ],
          "locations": [
            {
              "address": "string",
              "created": "1970-01-01T00:00:00Z",
              "email": "string",
              "id": 0,
              "label": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string",
              "phone": "string",
              "web": "string"
            }
          ],
          "name": "string",
          "parentGroups": [
            {}
          ],
          "postcode": "string",
          "sftpUser": "string",
          "shortName": "string",
          "visible": true,
          "visibleToJoin": true
        },
        "id": 0,
        "identifier": "string",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "observations": [
          {
            "applies": "1970-01-01T00:00:00Z",
            "bodySite": "string",
            "comments": "string",
            "comparator": "string",
            "diagram": "string",
            "group": {
              "address1": "string",
              "address2": "string",
              "address3": "string",
              "childGroups": [
                {}
              ],
              "code": "string",
              "contactPoints": [
                {
                  "contactPointType": {
                    "description": "string",
                    "id": 0,
                    "lookupType": {
                      "created": "1970-01-01T00:00:00Z",
                      "description": "string",
                      "id": 0,
                      "lastUpdate": "1970-01-01T00:00:00Z",
                      "type": "GROUP"
                    },
                    "value": "UNIT_WEB_ADDRESS"
                  },
                  "content": "string",
                  "created": "1970-01-01T00:00:00Z",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z"
                }
              ],
              "created": "1970-01-01T00:00:00Z",
              "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "groupFeatures": [
                {
                  "created": "1970-01-01T00:00:00Z",
                  "feature": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "name": "string"
                  },
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z"
                }
              ],
              "groupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "id": 0,
              "lastImportDate": "1970-01-01T00:00:00Z",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "links": [
                {
                  "created": "1970-01-01T00:00:00Z",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "link": "string",
                  "linkType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "descriptionFriendly": "string",
                    "displayOrder": 0,
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "lookupType": {
                      "created": "1970-01-01T00:00:00Z",
                      "description": "string",
                      "id": 0,
                      "lastUpdate": "1970-01-01T00:00:00Z",
                      "type": "GROUP"
                    },
                    "value": "string"
                  },
                  "name": "string"
                }
              ],
              "locations": [
                {
                  "address": "string",
                  "created": "1970-01-01T00:00:00Z",
                  "email": "string",
                  "id": 0,
                  "label": "string",
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "name": "string",
                  "phone": "string",
                  "web": "string"
                }
              ],
              "name": "string",
              "parentGroups": [
                {}
              ],
              "postcode": "string",
              "sftpUser": "string",
              "shortName": "string",
              "visible": true,
              "visibleToJoin": true
            },
            "id": 0,
            "identifier": "string",
            "location": "string",
            "name": "string",
            "temporaryUuid": "string",
            "units": "string",
            "value": "string"
          }
        ],
        "procedures": [
          {
            "bodySite": "string",
            "id": 0,
            "type": "string"
          }
        ],
        "status": "string"
      }
    ],
    "groupCode": "string",
    "identifier": "string",
    "observations": [
      {
        "applies": "1970-01-01T00:00:00Z",
        "bodySite": "string",
        "comments": "string",
        "comparator": "string",
        "diagram": "string",
        "group": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "childGroups": [
            {}
          ],
          "code": "string",
          "contactPoints": [
            {
              "contactPointType": {
                "description": "string",
                "id": 0,
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "UNIT_WEB_ADDRESS"
              },
              "content": "string",
              "created": "1970-01-01T00:00:00Z",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "created": "1970-01-01T00:00:00Z",
          "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "groupFeatures": [
            {
              "created": "1970-01-01T00:00:00Z",
              "feature": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string"
              },
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "groupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "id": 0,
          "lastImportDate": "1970-01-01T00:00:00Z",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "links": [
            {
              "created": "1970-01-01T00:00:00Z",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "link": "string",
              "linkType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "name": "string"
            }
          ],
          "locations": [
            {
              "address": "string",
              "created": "1970-01-01T00:00:00Z",
              "email": "string",
              "id": 0,
              "label": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string",
              "phone": "string",
              "web": "string"
            }
          ],
          "name": "string",
          "parentGroups": [
            {}
          ],
          "postcode": "string",
          "sftpUser": "string",
          "shortName": "string",
          "visible": true,
          "visibleToJoin": true
        },
        "id": 0,
        "identifier": "string",
        "location": "string",
        "name": "string",
        "temporaryUuid": "string",
        "units": "string",
        "value": "string"
      }
    ],
    "patient": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "address4": "string",
      "contacts": [
        {
          "id": 0,
          "system": "string",
          "use": "string",
          "value": "string"
        }
      ],
      "dateOfBirth": "1970-01-01T00:00:00Z",
      "dateOfBirthNoTime": "string",
      "forename": "string",
      "gender": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "groupCode": "string",
      "identifier": "string",
      "identifiers": [
        {
          "id": 0,
          "label": "string",
          "value": "string"
        }
      ],
      "postcode": "string",
      "practitioners": [
        {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "address4": "string",
          "allowInviteGp": true,
          "contacts": [
            {
              "id": 0,
              "system": "string",
              "use": "string",
              "value": "string"
            }
          ],
          "gender": "string",
          "groupCode": "string",
          "identifier": "string",
          "inviteDate": "1970-01-01T00:00:00Z",
          "name": "string",
          "postcode": "string",
          "role": "string"
        }
      ],
      "surname": "string"
    },
    "practitioners": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "address4": "string",
        "allowInviteGp": true,
        "contacts": [
          {
            "id": 0,
            "system": "string",
            "use": "string",
            "value": "string"
          }
        ],
        "gender": "string",
        "groupCode": "string",
        "identifier": "string",
        "inviteDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "postcode": "string",
        "role": "string"
      }
    ]
  }'
```

`POST /patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}/surgeries`

savePatientManagementSurgeries

> Body parameter

```json
{
  "condition": {
    "asserter": "string",
    "category": "string",
    "code": "string",
    "date": "1970-01-01T00:00:00Z",
    "description": "string",
    "fullDescription": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "id": 0,
    "identifier": "string",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "notes": "string",
    "severity": "string",
    "status": "string"
  },
  "encounters": [
    {
      "date": "1970-01-01T00:00:00Z",
      "encounterType": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "observations": [
        {
          "applies": "1970-01-01T00:00:00Z",
          "bodySite": "string",
          "comments": "string",
          "comparator": "string",
          "diagram": "string",
          "group": {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "childGroups": [
              {}
            ],
            "code": "string",
            "contactPoints": [
              {
                "contactPointType": {
                  "description": "string",
                  "id": 0,
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "UNIT_WEB_ADDRESS"
                },
                "content": "string",
                "created": "1970-01-01T00:00:00Z",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "created": "1970-01-01T00:00:00Z",
            "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "groupFeatures": [
              {
                "created": "1970-01-01T00:00:00Z",
                "feature": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "name": "string"
                },
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "groupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "id": 0,
            "lastImportDate": "1970-01-01T00:00:00Z",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "links": [
              {
                "created": "1970-01-01T00:00:00Z",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "link": "string",
                "linkType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "descriptionFriendly": "string",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "string"
                },
                "name": "string"
              }
            ],
            "locations": [
              {
                "address": "string",
                "created": "1970-01-01T00:00:00Z",
                "email": "string",
                "id": 0,
                "label": "string",
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string",
                "phone": "string",
                "web": "string"
              }
            ],
            "name": "string",
            "parentGroups": [
              {}
            ],
            "postcode": "string",
            "sftpUser": "string",
            "shortName": "string",
            "visible": true,
            "visibleToJoin": true
          },
          "id": 0,
          "identifier": "string",
          "location": "string",
          "name": "string",
          "temporaryUuid": "string",
          "units": "string",
          "value": "string"
        }
      ],
      "procedures": [
        {
          "bodySite": "string",
          "id": 0,
          "type": "string"
        }
      ],
      "status": "string"
    }
  ],
  "groupCode": "string",
  "identifier": "string",
  "observations": [
    {
      "applies": "1970-01-01T00:00:00Z",
      "bodySite": "string",
      "comments": "string",
      "comparator": "string",
      "diagram": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "location": "string",
      "name": "string",
      "temporaryUuid": "string",
      "units": "string",
      "value": "string"
    }
  ],
  "patient": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "address4": "string",
    "contacts": [
      {
        "id": 0,
        "system": "string",
        "use": "string",
        "value": "string"
      }
    ],
    "dateOfBirth": "1970-01-01T00:00:00Z",
    "dateOfBirthNoTime": "string",
    "forename": "string",
    "gender": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "groupCode": "string",
    "identifier": "string",
    "identifiers": [
      {
        "id": 0,
        "label": "string",
        "value": "string"
      }
    ],
    "postcode": "string",
    "practitioners": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "address4": "string",
        "allowInviteGp": true,
        "contacts": [
          {
            "id": 0,
            "system": "string",
            "use": "string",
            "value": "string"
          }
        ],
        "gender": "string",
        "groupCode": "string",
        "identifier": "string",
        "inviteDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "postcode": "string",
        "role": "string"
      }
    ],
    "surname": "string"
  },
  "practitioners": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "address4": "string",
      "allowInviteGp": true,
      "contacts": [
        {
          "id": 0,
          "system": "string",
          "use": "string",
          "value": "string"
        }
      ],
      "gender": "string",
      "groupCode": "string",
      "identifier": "string",
      "inviteDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "postcode": "string",
      "role": "string"
    }
  ]
}
```

<h3 id="savepatientmanagementsurgeries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|userId|
|groupId|path|integer(int64)|true|groupId|
|identifierId|path|integer(int64)|true|identifierId|
|body|body|[PatientManagement](#schemapatientmanagement)|false|patientManagement|
|» condition|body|[FhirCondition](#schemafhircondition)|false|none|
|» encounters|body|[[FhirEncounter](#schemafhirencounter)]|false|none|
|» groupCode|body|string|false|none|
|» identifier|body|string|false|none|
|» observations|body|[[FhirObservation](#schemafhirobservation)]|false|none|
|» patient|body|[FhirPatient](#schemafhirpatient)|false|none|
|» practitioners|body|[[FhirPractitioner](#schemafhirpractitioner)]|false|none|

<h3 id="savepatientmanagementsurgeries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Description was not specified|None|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "expired": true,
  "expiryDate": "1970-01-01T00:00:00Z",
  "key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expired|boolean|false|none|none|
|expiryDate|string(date-time)|false|none|none|
|key|string|false|none|none|

<h2 id="tocS_BaseGroup">BaseGroup</h2>
<!-- backwards compatibility -->
<a id="schemabasegroup"></a>
<a id="schema_BaseGroup"></a>
<a id="tocSbasegroup"></a>
<a id="tocsbasegroup"></a>

```json
{
  "code": "string",
  "groupType": {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "descriptionFriendly": "string",
    "displayOrder": 0,
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "lookupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "type": "GROUP"
    },
    "value": "string"
  },
  "id": 0,
  "lastImportDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "parentCodes": [
    "string"
  ],
  "shortName": "string",
  "visible": true,
  "visibleToJoin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|groupType|[Lookup](#schemalookup)|false|none|none|
|id|integer(int64)|false|none|none|
|lastImportDate|string(date-time)|false|none|none|
|name|string|false|none|none|
|parentCodes|[string]|false|none|none|
|shortName|string|false|none|none|
|visible|boolean|false|none|none|
|visibleToJoin|boolean|false|none|none|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "friendlyDescription": "string",
  "hidden": true,
  "icd10Description": "string",
  "id": 0,
  "number": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|friendlyDescription|string|false|none|none|
|hidden|boolean|false|none|none|
|icd10Description|string|false|none|none|
|id|integer(int64)|false|none|none|
|number|integer(int32)|false|none|none|

<h2 id="tocS_Code">Code</h2>
<!-- backwards compatibility -->
<a id="schemacode"></a>
<a id="schema_Code"></a>
<a id="tocScode"></a>
<a id="tocscode"></a>

```json
{
  "code": "string",
  "codeCategories": [
    {
      "category": {
        "friendlyDescription": "string",
        "hidden": true,
        "icd10Description": "string",
        "id": 0,
        "number": 0
      },
      "id": 0
    }
  ],
  "codeType": {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "descriptionFriendly": "string",
    "displayOrder": 0,
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "lookupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "type": "GROUP"
    },
    "value": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayOrder": 0,
  "externalStandards": [
    {
      "codeString": "string",
      "externalStandard": {
        "description": "string",
        "id": 0,
        "name": "string"
      },
      "id": 0
    }
  ],
  "fullDescription": "string",
  "hideFromPatients": true,
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "links": [
    {
      "created": "1970-01-01T00:00:00Z",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "link": "string",
      "linkType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "name": "string"
    }
  ],
  "patientFriendlyName": "string",
  "removedExternally": true,
  "sourceType": "PATIENTVIEW",
  "standardType": {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "descriptionFriendly": "string",
    "displayOrder": 0,
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "lookupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "type": "GROUP"
    },
    "value": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|codeCategories|[[CodeCategory](#schemacodecategory)]|false|none|none|
|codeType|[Lookup](#schemalookup)|false|none|none|
|created|string(date-time)|false|none|none|
|description|string|false|none|none|
|displayOrder|integer(int32)|false|none|none|
|externalStandards|[[CodeExternalStandard](#schemacodeexternalstandard)]|false|none|none|
|fullDescription|string|false|none|none|
|hideFromPatients|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|patientFriendlyName|string|false|none|none|
|removedExternally|boolean|false|none|none|
|sourceType|string|false|none|none|
|standardType|[Lookup](#schemalookup)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|PATIENTVIEW|
|sourceType|NHS_CHOICES|

<h2 id="tocS_CodeCategory">CodeCategory</h2>
<!-- backwards compatibility -->
<a id="schemacodecategory"></a>
<a id="schema_CodeCategory"></a>
<a id="tocScodecategory"></a>
<a id="tocscodecategory"></a>

```json
{
  "category": {
    "friendlyDescription": "string",
    "hidden": true,
    "icd10Description": "string",
    "id": 0,
    "number": 0
  },
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[Category](#schemacategory)|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_CodeExternalStandard">CodeExternalStandard</h2>
<!-- backwards compatibility -->
<a id="schemacodeexternalstandard"></a>
<a id="schema_CodeExternalStandard"></a>
<a id="tocScodeexternalstandard"></a>
<a id="tocscodeexternalstandard"></a>

```json
{
  "codeString": "string",
  "externalStandard": {
    "description": "string",
    "id": 0,
    "name": "string"
  },
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeString|string|false|none|none|
|externalStandard|[ExternalStandard](#schemaexternalstandard)|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_ContactPoint">ContactPoint</h2>
<!-- backwards compatibility -->
<a id="schemacontactpoint"></a>
<a id="schema_ContactPoint"></a>
<a id="tocScontactpoint"></a>
<a id="tocscontactpoint"></a>

```json
{
  "contactPointType": {
    "description": "string",
    "id": 0,
    "lookupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "type": "GROUP"
    },
    "value": "UNIT_WEB_ADDRESS"
  },
  "content": "string",
  "created": "1970-01-01T00:00:00Z",
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactPointType|[ContactPointType](#schemacontactpointtype)|false|none|none|
|content|string|false|none|none|
|created|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|

<h2 id="tocS_ContactPointType">ContactPointType</h2>
<!-- backwards compatibility -->
<a id="schemacontactpointtype"></a>
<a id="schema_ContactPointType"></a>
<a id="tocScontactpointtype"></a>
<a id="tocscontactpointtype"></a>

```json
{
  "description": "string",
  "id": 0,
  "lookupType": {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "type": "GROUP"
  },
  "value": "UNIT_WEB_ADDRESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|lookupType|[LookupType](#schemalookuptype)|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|value|UNIT_WEB_ADDRESS|
|value|TRUST_WEB_ADDRESS|
|value|PV_ADMIN_NAME|
|value|PV_ADMIN_PHONE|
|value|PV_ADMIN_EMAIL|
|value|UNIT_ENQUIRIES_PHONE|
|value|UNIT_ENQUIRIES_EMAIL|
|value|APPOINTMENT_PHONE|
|value|APPOINTMENT_EMAIL|
|value|OUT_OF_HOURS_INFO|

<h2 id="tocS_Credentials">Credentials</h2>
<!-- backwards compatibility -->
<a id="schemacredentials"></a>
<a id="schema_Credentials"></a>
<a id="tocScredentials"></a>
<a id="tocscredentials"></a>

```json
{
  "apiKey": "string",
  "password": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|none|
|password|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_Entry_long_Map_string_List_FhirObservation_">Entry_long_Map_string_List_FhirObservation_</h2>
<!-- backwards compatibility -->
<a id="schemaentry_long_map_string_list_fhirobservation_"></a>
<a id="schema_Entry_long_Map_string_List_FhirObservation_"></a>
<a id="tocSentry_long_map_string_list_fhirobservation_"></a>
<a id="tocsentry_long_map_string_list_fhirobservation_"></a>

```json
{
  "key": [
    {
      "key": [
        {
          "applies": "1970-01-01T00:00:00Z",
          "bodySite": "string",
          "comments": "string",
          "comparator": "string",
          "diagram": "string",
          "group": {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "childGroups": [
              {}
            ],
            "code": "string",
            "contactPoints": [
              {
                "contactPointType": {
                  "description": "string",
                  "id": 0,
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "UNIT_WEB_ADDRESS"
                },
                "content": "string",
                "created": "1970-01-01T00:00:00Z",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "created": "1970-01-01T00:00:00Z",
            "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "groupFeatures": [
              {
                "created": "1970-01-01T00:00:00Z",
                "feature": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "name": "string"
                },
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "groupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "id": 0,
            "lastImportDate": "1970-01-01T00:00:00Z",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "links": [
              {
                "created": "1970-01-01T00:00:00Z",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "link": "string",
                "linkType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "descriptionFriendly": "string",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "string"
                },
                "name": "string"
              }
            ],
            "locations": [
              {
                "address": "string",
                "created": "1970-01-01T00:00:00Z",
                "email": "string",
                "id": 0,
                "label": "string",
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string",
                "phone": "string",
                "web": "string"
              }
            ],
            "name": "string",
            "parentGroups": [
              {}
            ],
            "postcode": "string",
            "sftpUser": "string",
            "shortName": "string",
            "visible": true,
            "visibleToJoin": true
          },
          "id": 0,
          "identifier": "string",
          "location": "string",
          "name": "string",
          "temporaryUuid": "string",
          "units": "string",
          "value": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[[Entry_string_List_FhirObservation_](#schemaentry_string_list_fhirobservation_)]|false|none|none|

<h2 id="tocS_Entry_string_List_FhirObservation_">Entry_string_List_FhirObservation_</h2>
<!-- backwards compatibility -->
<a id="schemaentry_string_list_fhirobservation_"></a>
<a id="schema_Entry_string_List_FhirObservation_"></a>
<a id="tocSentry_string_list_fhirobservation_"></a>
<a id="tocsentry_string_list_fhirobservation_"></a>

```json
{
  "key": [
    {
      "applies": "1970-01-01T00:00:00Z",
      "bodySite": "string",
      "comments": "string",
      "comparator": "string",
      "diagram": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "location": "string",
      "name": "string",
      "temporaryUuid": "string",
      "units": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[[FhirObservation](#schemafhirobservation)]|false|none|none|

<h2 id="tocS_ExternalStandard">ExternalStandard</h2>
<!-- backwards compatibility -->
<a id="schemaexternalstandard"></a>
<a id="schema_ExternalStandard"></a>
<a id="tocSexternalstandard"></a>
<a id="tocsexternalstandard"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_FhirAllergy">FhirAllergy</h2>
<!-- backwards compatibility -->
<a id="schemafhirallergy"></a>
<a id="schema_FhirAllergy"></a>
<a id="tocSfhirallergy"></a>
<a id="tocsfhirallergy"></a>

```json
{
  "confidenceLevel": "string",
  "group": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "childGroups": [
      {}
    ],
    "code": "string",
    "contactPoints": [
      {
        "contactPointType": {
          "description": "string",
          "id": 0,
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "UNIT_WEB_ADDRESS"
        },
        "content": "string",
        "created": "1970-01-01T00:00:00Z",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "created": "1970-01-01T00:00:00Z",
    "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupFeatures": [
      {
        "created": "1970-01-01T00:00:00Z",
        "feature": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string"
        },
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "groupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    },
    "id": 0,
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "locations": [
      {
        "address": "string",
        "created": "1970-01-01T00:00:00Z",
        "email": "string",
        "id": 0,
        "label": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "name": "string",
        "phone": "string",
        "web": "string"
      }
    ],
    "name": "string",
    "parentGroups": [
      {}
    ],
    "postcode": "string",
    "sftpUser": "string",
    "shortName": "string",
    "visible": true,
    "visibleToJoin": true
  },
  "id": 0,
  "identifier": "string",
  "infoSource": "string",
  "reaction": "string",
  "recordedDate": "1970-01-01T00:00:00Z",
  "status": "string",
  "substance": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceLevel|string|false|none|none|
|group|[Group](#schemagroup)|false|none|none|
|id|integer(int64)|false|none|none|
|identifier|string|false|none|none|
|infoSource|string|false|none|none|
|reaction|string|false|none|none|
|recordedDate|string(date-time)|false|none|none|
|status|string|false|none|none|
|substance|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_FhirCondition">FhirCondition</h2>
<!-- backwards compatibility -->
<a id="schemafhircondition"></a>
<a id="schema_FhirCondition"></a>
<a id="tocSfhircondition"></a>
<a id="tocsfhircondition"></a>

```json
{
  "asserter": "string",
  "category": "string",
  "code": "string",
  "date": "1970-01-01T00:00:00Z",
  "description": "string",
  "fullDescription": "string",
  "group": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "childGroups": [
      {}
    ],
    "code": "string",
    "contactPoints": [
      {
        "contactPointType": {
          "description": "string",
          "id": 0,
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "UNIT_WEB_ADDRESS"
        },
        "content": "string",
        "created": "1970-01-01T00:00:00Z",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "created": "1970-01-01T00:00:00Z",
    "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupFeatures": [
      {
        "created": "1970-01-01T00:00:00Z",
        "feature": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string"
        },
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "groupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    },
    "id": 0,
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "locations": [
      {
        "address": "string",
        "created": "1970-01-01T00:00:00Z",
        "email": "string",
        "id": 0,
        "label": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "name": "string",
        "phone": "string",
        "web": "string"
      }
    ],
    "name": "string",
    "parentGroups": [
      {}
    ],
    "postcode": "string",
    "sftpUser": "string",
    "shortName": "string",
    "visible": true,
    "visibleToJoin": true
  },
  "id": 0,
  "identifier": "string",
  "links": [
    {
      "created": "1970-01-01T00:00:00Z",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "link": "string",
      "linkType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "name": "string"
    }
  ],
  "notes": "string",
  "severity": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asserter|string|false|none|none|
|category|string|false|none|none|
|code|string|false|none|none|
|date|string(date-time)|false|none|none|
|description|string|false|none|none|
|fullDescription|string|false|none|none|
|group|[Group](#schemagroup)|false|none|none|
|id|integer(int64)|false|none|none|
|identifier|string|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|notes|string|false|none|none|
|severity|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_FhirContact">FhirContact</h2>
<!-- backwards compatibility -->
<a id="schemafhircontact"></a>
<a id="schema_FhirContact"></a>
<a id="tocSfhircontact"></a>
<a id="tocsfhircontact"></a>

```json
{
  "id": 0,
  "system": "string",
  "use": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|system|string|false|none|none|
|use|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_FhirEncounter">FhirEncounter</h2>
<!-- backwards compatibility -->
<a id="schemafhirencounter"></a>
<a id="schema_FhirEncounter"></a>
<a id="tocSfhirencounter"></a>
<a id="tocsfhirencounter"></a>

```json
{
  "date": "1970-01-01T00:00:00Z",
  "encounterType": "string",
  "group": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "childGroups": [
      {}
    ],
    "code": "string",
    "contactPoints": [
      {
        "contactPointType": {
          "description": "string",
          "id": 0,
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "UNIT_WEB_ADDRESS"
        },
        "content": "string",
        "created": "1970-01-01T00:00:00Z",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "created": "1970-01-01T00:00:00Z",
    "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupFeatures": [
      {
        "created": "1970-01-01T00:00:00Z",
        "feature": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string"
        },
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "groupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    },
    "id": 0,
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "locations": [
      {
        "address": "string",
        "created": "1970-01-01T00:00:00Z",
        "email": "string",
        "id": 0,
        "label": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "name": "string",
        "phone": "string",
        "web": "string"
      }
    ],
    "name": "string",
    "parentGroups": [
      {}
    ],
    "postcode": "string",
    "sftpUser": "string",
    "shortName": "string",
    "visible": true,
    "visibleToJoin": true
  },
  "id": 0,
  "identifier": "string",
  "links": [
    {
      "created": "1970-01-01T00:00:00Z",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "link": "string",
      "linkType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "name": "string"
    }
  ],
  "observations": [
    {
      "applies": "1970-01-01T00:00:00Z",
      "bodySite": "string",
      "comments": "string",
      "comparator": "string",
      "diagram": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "location": "string",
      "name": "string",
      "temporaryUuid": "string",
      "units": "string",
      "value": "string"
    }
  ],
  "procedures": [
    {
      "bodySite": "string",
      "id": 0,
      "type": "string"
    }
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date-time)|false|none|none|
|encounterType|string|false|none|none|
|group|[Group](#schemagroup)|false|none|none|
|id|integer(int64)|false|none|none|
|identifier|string|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|observations|[[FhirObservation](#schemafhirobservation)]|false|none|none|
|procedures|[[FhirProcedure](#schemafhirprocedure)]|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_FhirIdentifier">FhirIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemafhiridentifier"></a>
<a id="schema_FhirIdentifier"></a>
<a id="tocSfhiridentifier"></a>
<a id="tocsfhiridentifier"></a>

```json
{
  "id": 0,
  "label": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|label|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_FhirObservation">FhirObservation</h2>
<!-- backwards compatibility -->
<a id="schemafhirobservation"></a>
<a id="schema_FhirObservation"></a>
<a id="tocSfhirobservation"></a>
<a id="tocsfhirobservation"></a>

```json
{
  "applies": "1970-01-01T00:00:00Z",
  "bodySite": "string",
  "comments": "string",
  "comparator": "string",
  "diagram": "string",
  "group": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "childGroups": [
      {}
    ],
    "code": "string",
    "contactPoints": [
      {
        "contactPointType": {
          "description": "string",
          "id": 0,
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "UNIT_WEB_ADDRESS"
        },
        "content": "string",
        "created": "1970-01-01T00:00:00Z",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "created": "1970-01-01T00:00:00Z",
    "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupFeatures": [
      {
        "created": "1970-01-01T00:00:00Z",
        "feature": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string"
        },
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "groupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    },
    "id": 0,
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "locations": [
      {
        "address": "string",
        "created": "1970-01-01T00:00:00Z",
        "email": "string",
        "id": 0,
        "label": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "name": "string",
        "phone": "string",
        "web": "string"
      }
    ],
    "name": "string",
    "parentGroups": [
      {}
    ],
    "postcode": "string",
    "sftpUser": "string",
    "shortName": "string",
    "visible": true,
    "visibleToJoin": true
  },
  "id": 0,
  "identifier": "string",
  "location": "string",
  "name": "string",
  "temporaryUuid": "string",
  "units": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applies|string(date-time)|false|none|none|
|bodySite|string|false|none|none|
|comments|string|false|none|none|
|comparator|string|false|none|none|
|diagram|string|false|none|none|
|group|[Group](#schemagroup)|false|none|none|
|id|integer(int64)|false|none|none|
|identifier|string|false|none|none|
|location|string|false|none|none|
|name|string|false|none|none|
|temporaryUuid|string|false|none|none|
|units|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_FhirObservationPage">FhirObservationPage</h2>
<!-- backwards compatibility -->
<a id="schemafhirobservationpage"></a>
<a id="schema_FhirObservationPage"></a>
<a id="tocSfhirobservationpage"></a>
<a id="tocsfhirobservationpage"></a>

```json
{
  "data": [
    {
      "key": [
        {
          "key": [
            {
              "applies": "1970-01-01T00:00:00Z",
              "bodySite": "string",
              "comments": "string",
              "comparator": "string",
              "diagram": "string",
              "group": {
                "address1": "string",
                "address2": "string",
                "address3": "string",
                "childGroups": [
                  {}
                ],
                "code": "string",
                "contactPoints": [
                  {
                    "contactPointType": {
                      "description": "string",
                      "id": 0,
                      "lookupType": {
                        "created": "1970-01-01T00:00:00Z",
                        "description": "string",
                        "id": 0,
                        "lastUpdate": "1970-01-01T00:00:00Z",
                        "type": "GROUP"
                      },
                      "value": "UNIT_WEB_ADDRESS"
                    },
                    "content": "string",
                    "created": "1970-01-01T00:00:00Z",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z"
                  }
                ],
                "created": "1970-01-01T00:00:00Z",
                "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "groupFeatures": [
                  {
                    "created": "1970-01-01T00:00:00Z",
                    "feature": {
                      "created": "1970-01-01T00:00:00Z",
                      "description": "string",
                      "id": 0,
                      "lastUpdate": "1970-01-01T00:00:00Z",
                      "name": "string"
                    },
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z"
                  }
                ],
                "groupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "descriptionFriendly": "string",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "string"
                },
                "id": 0,
                "lastImportDate": "1970-01-01T00:00:00Z",
                "lastUpdate": "1970-01-01T00:00:00Z",
                "links": [
                  {
                    "created": "1970-01-01T00:00:00Z",
                    "displayOrder": 0,
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "link": "string",
                    "linkType": {
                      "created": "1970-01-01T00:00:00Z",
                      "description": "string",
                      "descriptionFriendly": "string",
                      "displayOrder": 0,
                      "id": 0,
                      "lastUpdate": "1970-01-01T00:00:00Z",
                      "lookupType": {
                        "created": "1970-01-01T00:00:00Z",
                        "description": "string",
                        "id": 0,
                        "lastUpdate": "1970-01-01T00:00:00Z",
                        "type": "GROUP"
                      },
                      "value": "string"
                    },
                    "name": "string"
                  }
                ],
                "locations": [
                  {
                    "address": "string",
                    "created": "1970-01-01T00:00:00Z",
                    "email": "string",
                    "id": 0,
                    "label": "string",
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "name": "string",
                    "phone": "string",
                    "web": "string"
                  }
                ],
                "name": "string",
                "parentGroups": [
                  {}
                ],
                "postcode": "string",
                "sftpUser": "string",
                "shortName": "string",
                "visible": true,
                "visibleToJoin": true
              },
              "id": 0,
              "identifier": "string",
              "location": "string",
              "name": "string",
              "temporaryUuid": "string",
              "units": "string",
              "value": "string"
            }
          ]
        }
      ]
    }
  ],
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Entry_long_Map_string_List_FhirObservation_](#schemaentry_long_map_string_list_fhirobservation_)]|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int64)|false|none|none|

<h2 id="tocS_FhirPatient">FhirPatient</h2>
<!-- backwards compatibility -->
<a id="schemafhirpatient"></a>
<a id="schema_FhirPatient"></a>
<a id="tocSfhirpatient"></a>
<a id="tocsfhirpatient"></a>

```json
{
  "address1": "string",
  "address2": "string",
  "address3": "string",
  "address4": "string",
  "contacts": [
    {
      "id": 0,
      "system": "string",
      "use": "string",
      "value": "string"
    }
  ],
  "dateOfBirth": "1970-01-01T00:00:00Z",
  "dateOfBirthNoTime": "string",
  "forename": "string",
  "gender": "string",
  "group": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "childGroups": [
      {}
    ],
    "code": "string",
    "contactPoints": [
      {
        "contactPointType": {
          "description": "string",
          "id": 0,
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "UNIT_WEB_ADDRESS"
        },
        "content": "string",
        "created": "1970-01-01T00:00:00Z",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "created": "1970-01-01T00:00:00Z",
    "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupFeatures": [
      {
        "created": "1970-01-01T00:00:00Z",
        "feature": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string"
        },
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "groupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    },
    "id": 0,
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "locations": [
      {
        "address": "string",
        "created": "1970-01-01T00:00:00Z",
        "email": "string",
        "id": 0,
        "label": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "name": "string",
        "phone": "string",
        "web": "string"
      }
    ],
    "name": "string",
    "parentGroups": [
      {}
    ],
    "postcode": "string",
    "sftpUser": "string",
    "shortName": "string",
    "visible": true,
    "visibleToJoin": true
  },
  "groupCode": "string",
  "identifier": "string",
  "identifiers": [
    {
      "id": 0,
      "label": "string",
      "value": "string"
    }
  ],
  "postcode": "string",
  "practitioners": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "address4": "string",
      "allowInviteGp": true,
      "contacts": [
        {
          "id": 0,
          "system": "string",
          "use": "string",
          "value": "string"
        }
      ],
      "gender": "string",
      "groupCode": "string",
      "identifier": "string",
      "inviteDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "postcode": "string",
      "role": "string"
    }
  ],
  "surname": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|address4|string|false|none|none|
|contacts|[[FhirContact](#schemafhircontact)]|false|none|none|
|dateOfBirth|string(date-time)|false|none|none|
|dateOfBirthNoTime|string|false|none|none|
|forename|string|false|none|none|
|gender|string|false|none|none|
|group|[Group](#schemagroup)|false|none|none|
|groupCode|string|false|none|none|
|identifier|string|false|none|none|
|identifiers|[[FhirIdentifier](#schemafhiridentifier)]|false|none|none|
|postcode|string|false|none|none|
|practitioners|[[FhirPractitioner](#schemafhirpractitioner)]|false|none|none|
|surname|string|false|none|none|

<h2 id="tocS_FhirPractitioner">FhirPractitioner</h2>
<!-- backwards compatibility -->
<a id="schemafhirpractitioner"></a>
<a id="schema_FhirPractitioner"></a>
<a id="tocSfhirpractitioner"></a>
<a id="tocsfhirpractitioner"></a>

```json
{
  "address1": "string",
  "address2": "string",
  "address3": "string",
  "address4": "string",
  "allowInviteGp": true,
  "contacts": [
    {
      "id": 0,
      "system": "string",
      "use": "string",
      "value": "string"
    }
  ],
  "gender": "string",
  "groupCode": "string",
  "identifier": "string",
  "inviteDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "postcode": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|address4|string|false|none|none|
|allowInviteGp|boolean|false|none|none|
|contacts|[[FhirContact](#schemafhircontact)]|false|none|none|
|gender|string|false|none|none|
|groupCode|string|false|none|none|
|identifier|string|false|none|none|
|inviteDate|string(date-time)|false|none|none|
|name|string|false|none|none|
|postcode|string|false|none|none|
|role|string|false|none|none|

<h2 id="tocS_FhirProcedure">FhirProcedure</h2>
<!-- backwards compatibility -->
<a id="schemafhirprocedure"></a>
<a id="schema_FhirProcedure"></a>
<a id="tocSfhirprocedure"></a>
<a id="tocsfhirprocedure"></a>

```json
{
  "bodySite": "string",
  "id": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodySite|string|false|none|none|
|id|integer(int64)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "address1": "string",
  "address2": "string",
  "address3": "string",
  "childGroups": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    }
  ],
  "code": "string",
  "contactPoints": [
    {
      "contactPointType": {
        "description": "string",
        "id": 0,
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "UNIT_WEB_ADDRESS"
      },
      "content": "string",
      "created": "1970-01-01T00:00:00Z",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z"
    }
  ],
  "created": "1970-01-01T00:00:00Z",
  "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "groupFeatures": [
    {
      "created": "1970-01-01T00:00:00Z",
      "feature": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "name": "string"
      },
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z"
    }
  ],
  "groupType": {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "descriptionFriendly": "string",
    "displayOrder": 0,
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "lookupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "type": "GROUP"
    },
    "value": "string"
  },
  "id": 0,
  "lastImportDate": "1970-01-01T00:00:00Z",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "links": [
    {
      "created": "1970-01-01T00:00:00Z",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "link": "string",
      "linkType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "name": "string"
    }
  ],
  "locations": [
    {
      "address": "string",
      "created": "1970-01-01T00:00:00Z",
      "email": "string",
      "id": 0,
      "label": "string",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "name": "string",
      "phone": "string",
      "web": "string"
    }
  ],
  "name": "string",
  "parentGroups": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    }
  ],
  "postcode": "string",
  "sftpUser": "string",
  "shortName": "string",
  "visible": true,
  "visibleToJoin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|childGroups|[[Group](#schemagroup)]|false|none|none|
|code|string|false|none|none|
|contactPoints|[[ContactPoint](#schemacontactpoint)]|false|none|none|
|created|string(date-time)|false|none|none|
|fhirResourceId|string(uuid)|false|none|none|
|groupFeatures|[[GroupFeature](#schemagroupfeature)]|false|none|none|
|groupType|[Lookup](#schemalookup)|false|none|none|
|id|integer(int64)|false|none|none|
|lastImportDate|string(date-time)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|locations|[[Location](#schemalocation)]|false|none|none|
|name|string|false|none|none|
|parentGroups|[[Group](#schemagroup)]|false|none|none|
|postcode|string|false|none|none|
|sftpUser|string|false|none|none|
|shortName|string|false|none|none|
|visible|boolean|false|none|none|
|visibleToJoin|boolean|false|none|none|

<h2 id="tocS_GroupFeature">GroupFeature</h2>
<!-- backwards compatibility -->
<a id="schemagroupfeature"></a>
<a id="schema_GroupFeature"></a>
<a id="tocSgroupfeature"></a>
<a id="tocsgroupfeature"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "feature": {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "name": "string"
  },
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|feature|[Feature](#schemafeature)|false|none|none|
|id|integer(int64)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|

<h2 id="tocS_GroupRole">GroupRole</h2>
<!-- backwards compatibility -->
<a id="schemagrouprole"></a>
<a id="schema_GroupRole"></a>
<a id="tocSgrouprole"></a>
<a id="tocsgrouprole"></a>

```json
{
  "group": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "childGroups": [
      {}
    ],
    "code": "string",
    "contactPoints": [
      {
        "contactPointType": {
          "description": "string",
          "id": 0,
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "UNIT_WEB_ADDRESS"
        },
        "content": "string",
        "created": "1970-01-01T00:00:00Z",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "created": "1970-01-01T00:00:00Z",
    "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupFeatures": [
      {
        "created": "1970-01-01T00:00:00Z",
        "feature": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string"
        },
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "groupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    },
    "id": 0,
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "locations": [
      {
        "address": "string",
        "created": "1970-01-01T00:00:00Z",
        "email": "string",
        "id": 0,
        "label": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "name": "string",
        "phone": "string",
        "web": "string"
      }
    ],
    "name": "string",
    "parentGroups": [
      {}
    ],
    "postcode": "string",
    "sftpUser": "string",
    "shortName": "string",
    "visible": true,
    "visibleToJoin": true
  },
  "id": 0,
  "role": {
    "description": "string",
    "id": 0,
    "name": "PATIENT",
    "visible": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|[Group](#schemagroup)|false|none|none|
|id|integer(int64)|false|none|none|
|role|[Role](#schemarole)|false|none|none|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "displayOrder": 0,
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "link": "string",
  "linkType": {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "descriptionFriendly": "string",
    "displayOrder": 0,
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "lookupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "type": "GROUP"
    },
    "value": "string"
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|displayOrder|integer(int32)|false|none|none|
|id|integer(int64)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|link|string|false|none|none|
|linkType|[Lookup](#schemalookup)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "address": "string",
  "created": "1970-01-01T00:00:00Z",
  "email": "string",
  "id": 0,
  "label": "string",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "name": "string",
  "phone": "string",
  "web": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|created|string(date-time)|false|none|none|
|email|string|false|none|none|
|id|integer(int64)|false|none|none|
|label|string|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|name|string|false|none|none|
|phone|string|false|none|none|
|web|string|false|none|none|

<h2 id="tocS_Lookup">Lookup</h2>
<!-- backwards compatibility -->
<a id="schemalookup"></a>
<a id="schema_Lookup"></a>
<a id="tocSlookup"></a>
<a id="tocslookup"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "descriptionFriendly": "string",
  "displayOrder": 0,
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "lookupType": {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "type": "GROUP"
  },
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|description|string|false|none|none|
|descriptionFriendly|string|false|none|none|
|displayOrder|integer(int64)|false|none|none|
|id|integer(int64)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|lookupType|[LookupType](#schemalookuptype)|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_LookupType">LookupType</h2>
<!-- backwards compatibility -->
<a id="schemalookuptype"></a>
<a id="schema_LookupType"></a>
<a id="tocSlookuptype"></a>
<a id="tocslookuptype"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "type": "GROUP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GROUP|
|type|MENU|
|type|ROLE|
|type|CODE_STANDARD|
|type|CODE_TYPE|
|type|FEATURE_TYPE|
|type|RELATIONSHIP_TYPE|
|type|IDENTIFIER|
|type|CONTACT_POINT_TYPE|
|type|STATISTIC_TYPE|
|type|NEWS_TYPE|
|type|GENDER|
|type|IBD_CROHNSLOCATION|
|type|IBD_CROHNSPROXIMALTERMINALILEUM|
|type|IBD_CROHNSPERIANAL|
|type|IBD_CROHNSBEHAVIOUR|
|type|IBD_UCEXTENT|
|type|IBD_EGIMCOMPLICATION|
|type|IBD_SURGERYMAINPROCEDURE|
|type|IBD_SMOKINGSTATUS|
|type|IBD_FAMILYHISTORY|
|type|LINK_TYPE|

<h2 id="tocS_ObservationHeading">ObservationHeading</h2>
<!-- backwards compatibility -->
<a id="schemaobservationheading"></a>
<a id="schema_ObservationHeading"></a>
<a id="tocSobservationheading"></a>
<a id="tocsobservationheading"></a>

```json
{
  "code": "string",
  "created": "1970-01-01T00:00:00Z",
  "decimalPlaces": 0,
  "defaultPanel": 0,
  "defaultPanelOrder": 0,
  "heading": "string",
  "id": 0,
  "infoLink": "string",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "maxGraph": 0,
  "minGraph": 0,
  "name": "string",
  "normalRange": "string",
  "observationHeadingGroups": [
    {
      "created": "1970-01-01T00:00:00Z",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "panel": 0,
      "panelOrder": 0
    }
  ],
  "units": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|created|string(date-time)|false|none|none|
|decimalPlaces|integer(int64)|false|none|none|
|defaultPanel|integer(int64)|false|none|none|
|defaultPanelOrder|integer(int64)|false|none|none|
|heading|string|false|none|none|
|id|integer(int64)|false|none|none|
|infoLink|string|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|maxGraph|number(double)|false|none|none|
|minGraph|number(double)|false|none|none|
|name|string|false|none|none|
|normalRange|string|false|none|none|
|observationHeadingGroups|[[ObservationHeadingGroup](#schemaobservationheadinggroup)]|false|none|none|
|units|string|false|none|none|

<h2 id="tocS_ObservationHeadingGroup">ObservationHeadingGroup</h2>
<!-- backwards compatibility -->
<a id="schemaobservationheadinggroup"></a>
<a id="schema_ObservationHeadingGroup"></a>
<a id="tocSobservationheadinggroup"></a>
<a id="tocsobservationheadinggroup"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "group": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "childGroups": [
      {}
    ],
    "code": "string",
    "contactPoints": [
      {
        "contactPointType": {
          "description": "string",
          "id": 0,
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "UNIT_WEB_ADDRESS"
        },
        "content": "string",
        "created": "1970-01-01T00:00:00Z",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "created": "1970-01-01T00:00:00Z",
    "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupFeatures": [
      {
        "created": "1970-01-01T00:00:00Z",
        "feature": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string"
        },
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "groupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    },
    "id": 0,
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "locations": [
      {
        "address": "string",
        "created": "1970-01-01T00:00:00Z",
        "email": "string",
        "id": 0,
        "label": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "name": "string",
        "phone": "string",
        "web": "string"
      }
    ],
    "name": "string",
    "parentGroups": [
      {}
    ],
    "postcode": "string",
    "sftpUser": "string",
    "shortName": "string",
    "visible": true,
    "visibleToJoin": true
  },
  "id": 0,
  "panel": 0,
  "panelOrder": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|group|[Group](#schemagroup)|false|none|none|
|id|integer(int64)|false|none|none|
|panel|integer(int64)|false|none|none|
|panelOrder|integer(int64)|false|none|none|

<h2 id="tocS_Patient">Patient</h2>
<!-- backwards compatibility -->
<a id="schemapatient"></a>
<a id="schema_Patient"></a>
<a id="tocSpatient"></a>
<a id="tocspatient"></a>

```json
{
  "diagnosisCodes": [
    {
      "code": "string",
      "codeCategories": [
        {
          "category": {
            "friendlyDescription": "string",
            "hidden": true,
            "icd10Description": "string",
            "id": 0,
            "number": 0
          },
          "id": 0
        }
      ],
      "codeType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayOrder": 0,
      "externalStandards": [
        {
          "codeString": "string",
          "externalStandard": {
            "description": "string",
            "id": 0,
            "name": "string"
          },
          "id": 0
        }
      ],
      "fullDescription": "string",
      "hideFromPatients": true,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "patientFriendlyName": "string",
      "removedExternally": true,
      "sourceType": "PATIENTVIEW",
      "standardType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      }
    }
  ],
  "fhirAllergies": [
    {
      "confidenceLevel": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "infoSource": "string",
      "reaction": "string",
      "recordedDate": "1970-01-01T00:00:00Z",
      "status": "string",
      "substance": "string",
      "type": "string"
    }
  ],
  "fhirConditions": [
    {
      "asserter": "string",
      "category": "string",
      "code": "string",
      "date": "1970-01-01T00:00:00Z",
      "description": "string",
      "fullDescription": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "notes": "string",
      "severity": "string",
      "status": "string"
    }
  ],
  "fhirEncounters": [
    {
      "date": "1970-01-01T00:00:00Z",
      "encounterType": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "observations": [
        {
          "applies": "1970-01-01T00:00:00Z",
          "bodySite": "string",
          "comments": "string",
          "comparator": "string",
          "diagram": "string",
          "group": {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "childGroups": [
              {}
            ],
            "code": "string",
            "contactPoints": [
              {
                "contactPointType": {
                  "description": "string",
                  "id": 0,
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "UNIT_WEB_ADDRESS"
                },
                "content": "string",
                "created": "1970-01-01T00:00:00Z",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "created": "1970-01-01T00:00:00Z",
            "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "groupFeatures": [
              {
                "created": "1970-01-01T00:00:00Z",
                "feature": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "name": "string"
                },
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "groupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "id": 0,
            "lastImportDate": "1970-01-01T00:00:00Z",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "links": [
              {
                "created": "1970-01-01T00:00:00Z",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "link": "string",
                "linkType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "descriptionFriendly": "string",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "string"
                },
                "name": "string"
              }
            ],
            "locations": [
              {
                "address": "string",
                "created": "1970-01-01T00:00:00Z",
                "email": "string",
                "id": 0,
                "label": "string",
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string",
                "phone": "string",
                "web": "string"
              }
            ],
            "name": "string",
            "parentGroups": [
              {}
            ],
            "postcode": "string",
            "sftpUser": "string",
            "shortName": "string",
            "visible": true,
            "visibleToJoin": true
          },
          "id": 0,
          "identifier": "string",
          "location": "string",
          "name": "string",
          "temporaryUuid": "string",
          "units": "string",
          "value": "string"
        }
      ],
      "procedures": [
        {
          "bodySite": "string",
          "id": 0,
          "type": "string"
        }
      ],
      "status": "string"
    }
  ],
  "fhirObservations": [
    {
      "applies": "1970-01-01T00:00:00Z",
      "bodySite": "string",
      "comments": "string",
      "comparator": "string",
      "diagram": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "location": "string",
      "name": "string",
      "temporaryUuid": "string",
      "units": "string",
      "value": "string"
    }
  ],
  "fhirPatient": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "address4": "string",
    "contacts": [
      {
        "id": 0,
        "system": "string",
        "use": "string",
        "value": "string"
      }
    ],
    "dateOfBirth": "1970-01-01T00:00:00Z",
    "dateOfBirthNoTime": "string",
    "forename": "string",
    "gender": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "groupCode": "string",
    "identifier": "string",
    "identifiers": [
      {
        "id": 0,
        "label": "string",
        "value": "string"
      }
    ],
    "postcode": "string",
    "practitioners": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "address4": "string",
        "allowInviteGp": true,
        "contacts": [
          {
            "id": 0,
            "system": "string",
            "use": "string",
            "value": "string"
          }
        ],
        "gender": "string",
        "groupCode": "string",
        "identifier": "string",
        "inviteDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "postcode": "string",
        "role": "string"
      }
    ],
    "surname": "string"
  },
  "fhirPractitioners": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "address4": "string",
      "allowInviteGp": true,
      "contacts": [
        {
          "id": 0,
          "system": "string",
          "use": "string",
          "value": "string"
        }
      ],
      "gender": "string",
      "groupCode": "string",
      "identifier": "string",
      "inviteDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "postcode": "string",
      "role": "string"
    }
  ],
  "group": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "childGroups": [
      {}
    ],
    "code": "string",
    "contactPoints": [
      {
        "contactPointType": {
          "description": "string",
          "id": 0,
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "UNIT_WEB_ADDRESS"
        },
        "content": "string",
        "created": "1970-01-01T00:00:00Z",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "created": "1970-01-01T00:00:00Z",
    "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupFeatures": [
      {
        "created": "1970-01-01T00:00:00Z",
        "feature": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string"
        },
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z"
      }
    ],
    "groupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    },
    "id": 0,
    "lastImportDate": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "locations": [
      {
        "address": "string",
        "created": "1970-01-01T00:00:00Z",
        "email": "string",
        "id": 0,
        "label": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "name": "string",
        "phone": "string",
        "web": "string"
      }
    ],
    "name": "string",
    "parentGroups": [
      {}
    ],
    "postcode": "string",
    "sftpUser": "string",
    "shortName": "string",
    "visible": true,
    "visibleToJoin": true
  },
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diagnosisCodes|[[Code](#schemacode)]|false|none|none|
|fhirAllergies|[[FhirAllergy](#schemafhirallergy)]|false|none|none|
|fhirConditions|[[FhirCondition](#schemafhircondition)]|false|none|none|
|fhirEncounters|[[FhirEncounter](#schemafhirencounter)]|false|none|none|
|fhirObservations|[[FhirObservation](#schemafhirobservation)]|false|none|none|
|fhirPatient|[FhirPatient](#schemafhirpatient)|false|none|none|
|fhirPractitioners|[[FhirPractitioner](#schemafhirpractitioner)]|false|none|none|
|group|[Group](#schemagroup)|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_PatientManagement">PatientManagement</h2>
<!-- backwards compatibility -->
<a id="schemapatientmanagement"></a>
<a id="schema_PatientManagement"></a>
<a id="tocSpatientmanagement"></a>
<a id="tocspatientmanagement"></a>

```json
{
  "condition": {
    "asserter": "string",
    "category": "string",
    "code": "string",
    "date": "1970-01-01T00:00:00Z",
    "description": "string",
    "fullDescription": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "id": 0,
    "identifier": "string",
    "links": [
      {
        "created": "1970-01-01T00:00:00Z",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "link": "string",
        "linkType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "name": "string"
      }
    ],
    "notes": "string",
    "severity": "string",
    "status": "string"
  },
  "encounters": [
    {
      "date": "1970-01-01T00:00:00Z",
      "encounterType": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "observations": [
        {
          "applies": "1970-01-01T00:00:00Z",
          "bodySite": "string",
          "comments": "string",
          "comparator": "string",
          "diagram": "string",
          "group": {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "childGroups": [
              {}
            ],
            "code": "string",
            "contactPoints": [
              {
                "contactPointType": {
                  "description": "string",
                  "id": 0,
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "UNIT_WEB_ADDRESS"
                },
                "content": "string",
                "created": "1970-01-01T00:00:00Z",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "created": "1970-01-01T00:00:00Z",
            "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "groupFeatures": [
              {
                "created": "1970-01-01T00:00:00Z",
                "feature": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "name": "string"
                },
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z"
              }
            ],
            "groupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "id": 0,
            "lastImportDate": "1970-01-01T00:00:00Z",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "links": [
              {
                "created": "1970-01-01T00:00:00Z",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "link": "string",
                "linkType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "descriptionFriendly": "string",
                  "displayOrder": 0,
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "lookupType": {
                    "created": "1970-01-01T00:00:00Z",
                    "description": "string",
                    "id": 0,
                    "lastUpdate": "1970-01-01T00:00:00Z",
                    "type": "GROUP"
                  },
                  "value": "string"
                },
                "name": "string"
              }
            ],
            "locations": [
              {
                "address": "string",
                "created": "1970-01-01T00:00:00Z",
                "email": "string",
                "id": 0,
                "label": "string",
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string",
                "phone": "string",
                "web": "string"
              }
            ],
            "name": "string",
            "parentGroups": [
              {}
            ],
            "postcode": "string",
            "sftpUser": "string",
            "shortName": "string",
            "visible": true,
            "visibleToJoin": true
          },
          "id": 0,
          "identifier": "string",
          "location": "string",
          "name": "string",
          "temporaryUuid": "string",
          "units": "string",
          "value": "string"
        }
      ],
      "procedures": [
        {
          "bodySite": "string",
          "id": 0,
          "type": "string"
        }
      ],
      "status": "string"
    }
  ],
  "groupCode": "string",
  "identifier": "string",
  "observations": [
    {
      "applies": "1970-01-01T00:00:00Z",
      "bodySite": "string",
      "comments": "string",
      "comparator": "string",
      "diagram": "string",
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "identifier": "string",
      "location": "string",
      "name": "string",
      "temporaryUuid": "string",
      "units": "string",
      "value": "string"
    }
  ],
  "patient": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "address4": "string",
    "contacts": [
      {
        "id": 0,
        "system": "string",
        "use": "string",
        "value": "string"
      }
    ],
    "dateOfBirth": "1970-01-01T00:00:00Z",
    "dateOfBirthNoTime": "string",
    "forename": "string",
    "gender": "string",
    "group": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "childGroups": [
        {}
      ],
      "code": "string",
      "contactPoints": [
        {
          "contactPointType": {
            "description": "string",
            "id": 0,
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "UNIT_WEB_ADDRESS"
          },
          "content": "string",
          "created": "1970-01-01T00:00:00Z",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "created": "1970-01-01T00:00:00Z",
      "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "groupFeatures": [
        {
          "created": "1970-01-01T00:00:00Z",
          "feature": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string"
          },
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z"
        }
      ],
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "links": [
        {
          "created": "1970-01-01T00:00:00Z",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "link": "string",
          "linkType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "name": "string"
        }
      ],
      "locations": [
        {
          "address": "string",
          "created": "1970-01-01T00:00:00Z",
          "email": "string",
          "id": 0,
          "label": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string",
          "phone": "string",
          "web": "string"
        }
      ],
      "name": "string",
      "parentGroups": [
        {}
      ],
      "postcode": "string",
      "sftpUser": "string",
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "groupCode": "string",
    "identifier": "string",
    "identifiers": [
      {
        "id": 0,
        "label": "string",
        "value": "string"
      }
    ],
    "postcode": "string",
    "practitioners": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "address4": "string",
        "allowInviteGp": true,
        "contacts": [
          {
            "id": 0,
            "system": "string",
            "use": "string",
            "value": "string"
          }
        ],
        "gender": "string",
        "groupCode": "string",
        "identifier": "string",
        "inviteDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "postcode": "string",
        "role": "string"
      }
    ],
    "surname": "string"
  },
  "practitioners": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "address4": "string",
      "allowInviteGp": true,
      "contacts": [
        {
          "id": 0,
          "system": "string",
          "use": "string",
          "value": "string"
        }
      ],
      "gender": "string",
      "groupCode": "string",
      "identifier": "string",
      "inviteDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "postcode": "string",
      "role": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[FhirCondition](#schemafhircondition)|false|none|none|
|encounters|[[FhirEncounter](#schemafhirencounter)]|false|none|none|
|groupCode|string|false|none|none|
|identifier|string|false|none|none|
|observations|[[FhirObservation](#schemafhirobservation)]|false|none|none|
|patient|[FhirPatient](#schemafhirpatient)|false|none|none|
|practitioners|[[FhirPractitioner](#schemafhirpractitioner)]|false|none|none|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "PATIENT",
  "visible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|visible|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|PATIENT|
|name|UNIT_ADMIN|
|name|STAFF_ADMIN|
|name|DISEASE_GROUP_ADMIN|
|name|SPECIALTY_ADMIN|
|name|GLOBAL_ADMIN|
|name|GP_ADMIN|
|name|MEMBER|
|name|PUBLIC|
|name|UNIT_ADMIN_API|
|name|IMPORTER|

<h2 id="tocS_Route">Route</h2>
<!-- backwards compatibility -->
<a id="schemaroute"></a>
<a id="schema_Route"></a>
<a id="tocSroute"></a>
<a id="tocsroute"></a>

```json
{
  "controller": "string",
  "created": "1970-01-01T00:00:00Z",
  "displayOrder": 0,
  "id": 0,
  "lookup": {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "descriptionFriendly": "string",
    "displayOrder": 0,
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "lookupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "type": "GROUP"
    },
    "value": "string"
  },
  "templateUrl": "string",
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controller|string|false|none|none|
|created|string(date-time)|false|none|none|
|displayOrder|integer(int32)|false|none|none|
|id|integer(int64)|false|none|none|
|lookup|[Lookup](#schemalookup)|false|none|none|
|templateUrl|string|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
null
```

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "apiKey": {
    "expired": true,
    "expiryDate": "1970-01-01T00:00:00Z",
    "key": "string"
  },
  "canSwitchUser": true,
  "changePassword": true,
  "contactNumber": "string",
  "created": "1970-01-01T00:00:00Z",
  "currentLogin": "1970-01-01T00:00:00Z",
  "currentLoginIpAddress": "string",
  "dateOfBirth": "1970-01-01T00:00:00Z",
  "deleted": true,
  "dummy": true,
  "email": "string",
  "emailVerified": true,
  "forename": "string",
  "groupRoles": [
    {
      "group": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "childGroups": [
          {}
        ],
        "code": "string",
        "contactPoints": [
          {
            "contactPointType": {
              "description": "string",
              "id": 0,
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "UNIT_WEB_ADDRESS"
            },
            "content": "string",
            "created": "1970-01-01T00:00:00Z",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "groupFeatures": [
          {
            "created": "1970-01-01T00:00:00Z",
            "feature": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string"
            },
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z"
          }
        ],
        "groupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "descriptionFriendly": "string",
          "displayOrder": 0,
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "lookupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "type": "GROUP"
          },
          "value": "string"
        },
        "id": 0,
        "lastImportDate": "1970-01-01T00:00:00Z",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "links": [
          {
            "created": "1970-01-01T00:00:00Z",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "link": "string",
            "linkType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "descriptionFriendly": "string",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "lookupType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "type": "GROUP"
              },
              "value": "string"
            },
            "name": "string"
          }
        ],
        "locations": [
          {
            "address": "string",
            "created": "1970-01-01T00:00:00Z",
            "email": "string",
            "id": 0,
            "label": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "name": "string",
            "phone": "string",
            "web": "string"
          }
        ],
        "name": "string",
        "parentGroups": [
          {}
        ],
        "postcode": "string",
        "sftpUser": "string",
        "shortName": "string",
        "visible": true,
        "visibleToJoin": true
      },
      "id": 0,
      "role": {
        "description": "string",
        "id": 0,
        "name": "PATIENT",
        "visible": true
      }
    }
  ],
  "hideSecretWordNotification": true,
  "id": 0,
  "identifiers": [
    {}
  ],
  "lastLogin": "1970-01-01T00:00:00Z",
  "lastLoginIpAddress": "string",
  "latestDataReceivedBy": {
    "code": "string",
    "groupType": {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "descriptionFriendly": "string",
      "displayOrder": 0,
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "lookupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "type": "GROUP"
      },
      "value": "string"
    },
    "id": 0,
    "lastImportDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "parentCodes": [
      "string"
    ],
    "shortName": "string",
    "visible": true,
    "visibleToJoin": true
  },
  "latestDataReceivedDate": "1970-01-01T00:00:00Z",
  "locked": true,
  "picture": "string",
  "roleDescription": "string",
  "secretWordIsSet": true,
  "surname": "string",
  "userFeatures": [
    {
      "created": "1970-01-01T00:00:00Z",
      "feature": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "name": "string"
      },
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "optInDate": "1970-01-01T00:00:00Z",
      "optInHidden": true,
      "optInStatus": true,
      "optOutHidden": true
    }
  ],
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|[ApiKey](#schemaapikey)|false|none|none|
|canSwitchUser|boolean|false|none|none|
|changePassword|boolean|false|none|none|
|contactNumber|string|false|none|none|
|created|string(date-time)|false|none|none|
|currentLogin|string(date-time)|false|none|none|
|currentLoginIpAddress|string|false|none|none|
|dateOfBirth|string(date-time)|false|none|none|
|deleted|boolean|false|none|none|
|dummy|boolean|false|none|none|
|email|string|false|none|none|
|emailVerified|boolean|false|none|none|
|forename|string|false|none|none|
|groupRoles|[[GroupRole](#schemagrouprole)]|false|none|none|
|hideSecretWordNotification|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|identifiers|[object]|false|none|none|
|lastLogin|string(date-time)|false|none|none|
|lastLoginIpAddress|string|false|none|none|
|latestDataReceivedBy|[BaseGroup](#schemabasegroup)|false|none|none|
|latestDataReceivedDate|string(date-time)|false|none|none|
|locked|boolean|false|none|none|
|picture|string|false|none|none|
|roleDescription|string|false|none|none|
|secretWordIsSet|boolean|false|none|none|
|surname|string|false|none|none|
|userFeatures|[[UserFeature](#schemauserfeature)]|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_UserFeature">UserFeature</h2>
<!-- backwards compatibility -->
<a id="schemauserfeature"></a>
<a id="schema_UserFeature"></a>
<a id="tocSuserfeature"></a>
<a id="tocsuserfeature"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "feature": {
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "name": "string"
  },
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "optInDate": "1970-01-01T00:00:00Z",
  "optInHidden": true,
  "optInStatus": true,
  "optOutHidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|feature|[Feature](#schemafeature)|false|none|none|
|id|integer(int64)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|optInDate|string(date-time)|false|none|none|
|optInHidden|boolean|false|none|none|
|optInStatus|boolean|false|none|none|
|optOutHidden|boolean|false|none|none|

<h2 id="tocS_UserToken">UserToken</h2>
<!-- backwards compatibility -->
<a id="schemausertoken"></a>
<a id="schema_UserToken"></a>
<a id="tocSusertoken"></a>
<a id="tocsusertoken"></a>

```json
{
  "auditActions": [
    "string"
  ],
  "checkSecretWord": true,
  "created": "1970-01-01T00:00:00Z",
  "expiration": "1970-01-01T00:00:00Z",
  "externalStandards": [
    {
      "description": "string",
      "id": 0,
      "name": "string"
    }
  ],
  "groupFeatures": [
    {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "name": "string"
    }
  ],
  "groupMessagingEnabled": true,
  "mustSetSecretWord": true,
  "patientFeatures": [
    {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "name": "string"
    }
  ],
  "patientMessagingFeatureTypes": [
    "string"
  ],
  "patientRoles": [
    {
      "description": "string",
      "id": 0,
      "name": "PATIENT",
      "visible": true
    }
  ],
  "routes": [
    {
      "controller": "string",
      "created": "1970-01-01T00:00:00Z",
      "displayOrder": 0,
      "id": 0,
      "lookup": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "templateUrl": "string",
      "title": "string",
      "url": "string"
    }
  ],
  "secretWord": "string",
  "secretWordChoices": {},
  "secretWordIndexes": [
    "string"
  ],
  "secretWordSalt": "string",
  "secretWordToken": "string",
  "securityRoles": [
    {
      "description": "string",
      "id": 0,
      "name": "PATIENT",
      "visible": true
    }
  ],
  "shouldEnterCondition": true,
  "staffFeatures": [
    {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "name": "string"
    }
  ],
  "staffRoles": [
    {
      "description": "string",
      "id": 0,
      "name": "PATIENT",
      "visible": true
    }
  ],
  "token": "string",
  "user": {
    "apiKey": {
      "expired": true,
      "expiryDate": "1970-01-01T00:00:00Z",
      "key": "string"
    },
    "canSwitchUser": true,
    "changePassword": true,
    "contactNumber": "string",
    "created": "1970-01-01T00:00:00Z",
    "currentLogin": "1970-01-01T00:00:00Z",
    "currentLoginIpAddress": "string",
    "dateOfBirth": "1970-01-01T00:00:00Z",
    "deleted": true,
    "dummy": true,
    "email": "string",
    "emailVerified": true,
    "forename": "string",
    "groupRoles": [
      {
        "group": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "childGroups": [
            {}
          ],
          "code": "string",
          "contactPoints": [
            {
              "contactPointType": {
                "description": "string",
                "id": 0,
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "UNIT_WEB_ADDRESS"
              },
              "content": "string",
              "created": "1970-01-01T00:00:00Z",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "created": "1970-01-01T00:00:00Z",
          "fhirResourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "groupFeatures": [
            {
              "created": "1970-01-01T00:00:00Z",
              "feature": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "name": "string"
              },
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z"
            }
          ],
          "groupType": {
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "descriptionFriendly": "string",
            "displayOrder": 0,
            "id": 0,
            "lastUpdate": "1970-01-01T00:00:00Z",
            "lookupType": {
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "type": "GROUP"
            },
            "value": "string"
          },
          "id": 0,
          "lastImportDate": "1970-01-01T00:00:00Z",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "links": [
            {
              "created": "1970-01-01T00:00:00Z",
              "displayOrder": 0,
              "id": 0,
              "lastUpdate": "1970-01-01T00:00:00Z",
              "link": "string",
              "linkType": {
                "created": "1970-01-01T00:00:00Z",
                "description": "string",
                "descriptionFriendly": "string",
                "displayOrder": 0,
                "id": 0,
                "lastUpdate": "1970-01-01T00:00:00Z",
                "lookupType": {
                  "created": "1970-01-01T00:00:00Z",
                  "description": "string",
                  "id": 0,
                  "lastUpdate": "1970-01-01T00:00:00Z",
                  "type": "GROUP"
                },
                "value": "string"
              },
              "name": "string"
            }
          ],
          "locations": [
            {
              "address": "string",
              "created": "1970-01-01T00:00:00Z",
              "email": "string",
              "id": 0,
              "label": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "name": "string",
              "phone": "string",
              "web": "string"
            }
          ],
          "name": "string",
          "parentGroups": [
            {}
          ],
          "postcode": "string",
          "sftpUser": "string",
          "shortName": "string",
          "visible": true,
          "visibleToJoin": true
        },
        "id": 0,
        "role": {
          "description": "string",
          "id": 0,
          "name": "PATIENT",
          "visible": true
        }
      }
    ],
    "hideSecretWordNotification": true,
    "id": 0,
    "identifiers": [
      {}
    ],
    "lastLogin": "1970-01-01T00:00:00Z",
    "lastLoginIpAddress": "string",
    "latestDataReceivedBy": {
      "code": "string",
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "parentCodes": [
        "string"
      ],
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    },
    "latestDataReceivedDate": "1970-01-01T00:00:00Z",
    "locked": true,
    "picture": "string",
    "roleDescription": "string",
    "secretWordIsSet": true,
    "surname": "string",
    "userFeatures": [
      {
        "created": "1970-01-01T00:00:00Z",
        "feature": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "name": "string"
        },
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "optInDate": "1970-01-01T00:00:00Z",
        "optInHidden": true,
        "optInStatus": true,
        "optOutHidden": true
      }
    ],
    "username": "string"
  },
  "userFeatures": [
    {
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": 0,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "name": "string"
    }
  ],
  "userGroups": [
    {
      "code": "string",
      "groupType": {
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "descriptionFriendly": "string",
        "displayOrder": 0,
        "id": 0,
        "lastUpdate": "1970-01-01T00:00:00Z",
        "lookupType": {
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": 0,
          "lastUpdate": "1970-01-01T00:00:00Z",
          "type": "GROUP"
        },
        "value": "string"
      },
      "id": 0,
      "lastImportDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "parentCodes": [
        "string"
      ],
      "shortName": "string",
      "visible": true,
      "visibleToJoin": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditActions|[string]|false|none|none|
|checkSecretWord|boolean|false|none|none|
|created|string(date-time)|false|none|none|
|expiration|string(date-time)|false|none|none|
|externalStandards|[[ExternalStandard](#schemaexternalstandard)]|false|none|none|
|groupFeatures|[[Feature](#schemafeature)]|false|none|none|
|groupMessagingEnabled|boolean|false|none|none|
|mustSetSecretWord|boolean|false|none|none|
|patientFeatures|[[Feature](#schemafeature)]|false|none|none|
|patientMessagingFeatureTypes|[string]|false|none|none|
|patientRoles|[[Role](#schemarole)]|false|none|none|
|routes|[[Route](#schemaroute)]|false|none|none|
|secretWord|string|false|none|none|
|secretWordChoices|object|false|none|none|
|secretWordIndexes|[string]|false|none|none|
|secretWordSalt|string|false|none|none|
|secretWordToken|string|false|none|none|
|securityRoles|[[Role](#schemarole)]|false|none|none|
|shouldEnterCondition|boolean|false|none|none|
|staffFeatures|[[Feature](#schemafeature)]|false|none|none|
|staffRoles|[[Role](#schemarole)]|false|none|none|
|token|string|false|none|none|
|user|[User](#schemauser)|false|none|none|
|userFeatures|[[Feature](#schemafeature)]|false|none|none|
|userGroups|[[BaseGroup](#schemabasegroup)]|false|none|none|
