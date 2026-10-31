<h1 id="members-api">Members API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API which retrieves Members data.

Email: <a href="mailto:softwareengineering@parliament.uk">UK Parliament</a> 
Web: <a href="https://www.parliament.uk/">UK Parliament</a> 

<h1 id="members-api-location">Location</h1>

## Returns a list of locations, both parent and child

> Code samples

```bash
curl https://example.com/api/Location/Browse/0/string \
  -H 'Accept: application/json'
```

`GET /api/Location/Browse/{locationType}/{locationName}`

<h3 id="returns-a-list-of-locations-both-parent-and-child-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationType|path|[LocationType](#schemalocationtype)|true|Location by type of location|
|locationName|path|string|true|Location by name specified|

#### Enumerated Values

|Parameter|Value|
|---|---|
|locationType|0|
|locationType|1|
|locationType|2|
|locationType|3|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "childContexts": [
      {
        "id": 0,
        "name": "string",
        "type": 0,
        "typeName": "string"
      }
    ],
    "context": {
      "id": 0,
      "name": "string",
      "type": 0,
      "typeName": "string"
    },
    "parentContext": {
      "id": 0,
      "name": "string",
      "type": 0,
      "typeName": "string"
    },
    "stateOfTheParties": [
      {
        "female": 0,
        "male": 0,
        "nonBinary": 0,
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "total": 0
      }
    ]
  }
}
```

<h3 id="returns-a-list-of-locations-both-parent-and-child-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationItem](#schemalocationitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of constituencies

> Code samples

```bash
curl https://example.com/api/Location/Constituency/Search \
  -H 'Accept: application/json'
```

`GET /api/Location/Constituency/Search`

<h3 id="returns-a-list-of-constituencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchText|query|string|false|Constituencies containing serach term in their name|
|skip|query|integer(int32)|false|The number of records to skip from the first, default is 0|
|take|query|integer(int32)|false|The number of records to return, default is 20. Maximum is 20|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "currentRepresentation": {
          "member": {
            "links": [
              {
                "href": "string",
                "method": "string",
                "rel": "string"
              }
            ],
            "value": {
              "gender": "string",
              "id": 0,
              "latestHouseMembership": {
                "house": 1,
                "membershipEndDate": "1970-01-01T00:00:00Z",
                "membershipEndReason": "string",
                "membershipEndReasonId": 0,
                "membershipEndReasonNotes": "string",
                "membershipFrom": "string",
                "membershipFromId": 0,
                "membershipStartDate": "1970-01-01T00:00:00Z",
                "membershipStatus": {
                  "status": 0,
                  "statusDescription": "string",
                  "statusId": 0,
                  "statusIsActive": true,
                  "statusNotes": "string",
                  "statusStartDate": "1970-01-01T00:00:00Z"
                }
              },
              "latestParty": {
                "abbreviation": "string",
                "backgroundColour": "string",
                "foregroundColour": "string",
                "governmentType": 0,
                "id": 0,
                "isIndependentParty": true,
                "isLordsMainParty": true,
                "isLordsSpiritualParty": true,
                "name": "string"
              },
              "nameAddressAs": "string",
              "nameDisplayAs": "string",
              "nameFullTitle": "string",
              "nameListAs": "string",
              "thumbnailUrl": "string"
            }
          },
          "representation": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          }
        },
        "endDate": "1970-01-01T00:00:00Z",
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-constituencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConstituencyMembersServiceSearchResult](#schemaconstituencymembersservicesearchresult)|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a constituency by ID

> Code samples

```bash
curl https://example.com/api/Location/Constituency/0 \
  -H 'Accept: application/json'
```

`GET /api/Location/Constituency/{id}`

<h3 id="returns-a-constituency-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Constituency by ID|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "currentRepresentation": {
      "member": {
        "links": [
          {
            "href": "string",
            "method": "string",
            "rel": "string"
          }
        ],
        "value": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        }
      },
      "representation": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      }
    },
    "endDate": "1970-01-01T00:00:00Z",
    "id": 0,
    "name": "string",
    "startDate": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="returns-a-constituency-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConstituencyItem](#schemaconstituencyitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns latest election result by constituency id

> Code samples

```bash
curl https://example.com/api/Location/Constituency/0/ElectionResult/Latest \
  -H 'Accept: application/json'
```

`GET /api/Location/Constituency/{id}/ElectionResult/Latest`

<h3 id="returns-latest-election-result-by-constituency-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Latest election result by constituency id|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "candidates": [
      {
        "memberId": 0,
        "name": "string",
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "rankOrder": 0,
        "resultChange": "string",
        "voteShare": 0,
        "votes": 0
      }
    ],
    "constituencyName": "string",
    "electionDate": "1970-01-01T00:00:00Z",
    "electionId": 0,
    "electionTitle": "string",
    "electorate": 0,
    "isGeneralElection": true,
    "isNotional": true,
    "majority": 0,
    "result": "string",
    "turnout": 0,
    "winningParty": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    }
  }
}
```

<h3 id="returns-latest-election-result-by-constituency-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ElectionResultItem](#schemaelectionresultitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns an election result by constituency and election id

> Code samples

```bash
curl https://example.com/api/Location/Constituency/0/ElectionResult/0 \
  -H 'Accept: application/json'
```

`GET /api/Location/Constituency/{id}/ElectionResult/{electionId}`

<h3 id="returns-an-election-result-by-constituency-and-election-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Election result by constituency id|
|electionId|path|integer(int32)|true|Election result by election id|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "candidates": [
      {
        "memberId": 0,
        "name": "string",
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "rankOrder": 0,
        "resultChange": "string",
        "voteShare": 0,
        "votes": 0
      }
    ],
    "constituencyName": "string",
    "electionDate": "1970-01-01T00:00:00Z",
    "electionId": 0,
    "electionTitle": "string",
    "electorate": 0,
    "isGeneralElection": true,
    "isNotional": true,
    "majority": 0,
    "result": "string",
    "turnout": 0,
    "winningParty": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    }
  }
}
```

<h3 id="returns-an-election-result-by-constituency-and-election-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ElectionResultItem](#schemaelectionresultitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of election results by constituency ID

> Code samples

```bash
curl https://example.com/api/Location/Constituency/0/ElectionResults \
  -H 'Accept: application/json'
```

`GET /api/Location/Constituency/{id}/ElectionResults`

<h3 id="returns-a-list-of-election-results-by-constituency-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Elections results by constituency ID|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "candidates": [
        {
          "memberId": 0,
          "name": "string",
          "party": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "rankOrder": 0,
          "resultChange": "string",
          "voteShare": 0,
          "votes": 0
        }
      ],
      "constituencyName": "string",
      "electionDate": "1970-01-01T00:00:00Z",
      "electionId": 0,
      "electionTitle": "string",
      "electorate": 0,
      "isGeneralElection": true,
      "isNotional": true,
      "majority": 0,
      "result": "string",
      "turnout": 0,
      "winningParty": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      }
    }
  ]
}
```

<h3 id="returns-a-list-of-election-results-by-constituency-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ElectionResultListItem](#schemaelectionresultlistitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns geometry by constituency ID

> Code samples

```bash
curl https://example.com/api/Location/Constituency/0/Geometry \
  -H 'Accept: application/json'
```

`GET /api/Location/Constituency/{id}/Geometry`

<h3 id="returns-geometry-by-constituency-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Geometry by constituency ID|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": "string"
}
```

<h3 id="returns-geometry-by-constituency-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StringItem](#schemastringitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of representations by constituency ID

> Code samples

```bash
curl https://example.com/api/Location/Constituency/0/Representations \
  -H 'Accept: application/json'
```

`GET /api/Location/Constituency/{id}/Representations`

<h3 id="returns-a-list-of-representations-by-constituency-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Representations by constituency ID|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "member": {
        "links": [
          {
            "href": "string",
            "method": "string",
            "rel": "string"
          }
        ],
        "value": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        }
      },
      "representation": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      }
    }
  ]
}
```

<h3 id="returns-a-list-of-representations-by-constituency-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConstituencyRepresentationListItem](#schemaconstituencyrepresentationlistitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a synopsis by constituency ID

> Code samples

```bash
curl https://example.com/api/Location/Constituency/0/Synopsis \
  -H 'Accept: application/json'
```

`GET /api/Location/Constituency/{id}/Synopsis`

<h3 id="returns-a-synopsis-by-constituency-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Synopsis by constituency ID|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": "string"
}
```

<h3 id="returns-a-synopsis-by-constituency-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StringItem](#schemastringitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="members-api-lordsinterests">LordsInterests</h1>

## Returns a list of registered interests

> Code samples

```bash
curl https://example.com/api/LordsInterests/Register \
  -H 'Accept: application/json'
```

`GET /api/LordsInterests/Register`

<h3 id="returns-a-list-of-registered-interests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchTerm|query|string|false|Registered interests containing search term|
|page|query|integer(int32)|false|Page of results to return, default 0. Results per page 20.|
|includeDeleted|query|boolean|false|Registered interests that have been deleted|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "interestCategories": [
          {
            "id": 0,
            "interests": [
              {
                "childInterests": [
                  {}
                ],
                "createdWhen": "1970-01-01T00:00:00Z",
                "deletedWhen": "1970-01-01T00:00:00Z",
                "id": 0,
                "interest": "string",
                "isCorrection": true,
                "lastAmendedWhen": "1970-01-01T00:00:00Z"
              }
            ],
            "name": "string",
            "sortOrder": 0
          }
        ],
        "member": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        }
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-registered-interests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MembersInterestsMembersServiceSearchResult](#schemamembersinterestsmembersservicesearchresult)|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of staff

> Code samples

```bash
curl https://example.com/api/LordsInterests/Staff \
  -H 'Accept: application/json'
```

`GET /api/LordsInterests/Staff`

<h3 id="returns-a-list-of-staff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchTerm|query|string|false|Staff containing search term|
|page|query|integer(int32)|false|Page of results to return, default 0. Results per page 20.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "member": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        },
        "staff": [
          {
            "details": "string",
            "forename": "string",
            "surname": "string",
            "title": "string"
          }
        ]
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-staff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MembersStaffMembersServiceSearchResult](#schemamembersstaffmembersservicesearchresult)|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="members-api-members">Members</h1>

## Return members by ID with list of their historical names, parties and memberships

> Code samples

```bash
curl https://example.com/api/Members/History \
  -H 'Accept: application/json'
```

`GET /api/Members/History`

<h3 id="return-members-by-id-with-list-of-their-historical-names-parties-and-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|[integer(int32)]|false|List of MemberIds to find|

> Example responses

> 200 Response

```json
[
  {
    "links": [
      {
        "href": "string",
        "method": "string",
        "rel": "string"
      }
    ],
    "value": {
      "houseMembershipHistory": [
        {
          "house": 1,
          "membershipEndDate": "1970-01-01T00:00:00Z",
          "membershipEndReason": "string",
          "membershipEndReasonId": 0,
          "membershipEndReasonNotes": "string",
          "membershipFrom": "string",
          "membershipFromId": 0,
          "membershipStartDate": "1970-01-01T00:00:00Z",
          "membershipStatus": {
            "status": 0,
            "statusDescription": "string",
            "statusId": 0,
            "statusIsActive": true,
            "statusNotes": "string",
            "statusStartDate": "1970-01-01T00:00:00Z"
          }
        }
      ],
      "id": 0,
      "nameHistory": [
        {
          "endDate": "1970-01-01T00:00:00Z",
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "startDate": "1970-01-01T00:00:00Z"
        }
      ],
      "partyHistory": [
        {
          "endDate": "1970-01-01T00:00:00Z",
          "party": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "startDate": "1970-01-01T00:00:00Z"
        }
      ],
      "thumbnailUrl": "string"
    }
  }
]
```

<h3 id="return-members-by-id-with-list-of-their-historical-names-parties-and-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<h3 id="return-members-by-id-with-list-of-their-historical-names-parties-and-memberships-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MemberHistoryItem](#schemamemberhistoryitem)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of current members of the Commons or Lords

> Code samples

```bash
curl https://example.com/api/Members/Search \
  -H 'Accept: application/json'
```

`GET /api/Members/Search`

<h3 id="returns-a-list-of-current-members-of-the-commons-or-lords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|false|Members where name contains term specified|
|Location|query|string|false|Members where postcode or geographical location matches the term specified|
|PostTitle|query|string|false|Members which have held the post specified|
|PartyId|query|integer(int32)|false|Members which are currently affiliated with party with party ID|
|House|query|[House](#schemahouse)|false|Members where their most recent house is the house specified|
|ConstituencyId|query|integer(int32)|false|Members which currently hold the constituency with constituency id|
|NameStartsWith|query|string|false|Members with surname begining with letter(s) specified|
|Gender|query|string|false|Members with the gender specified|
|MembershipStartedSince|query|string(date-time)|false|Members who started on or after the date given|
|MembershipEnded.MembershipEndedSince|query|string(date-time)|false|Members who left the House on or after the date given|
|MembershipEnded.MembershipEndReasonIds|query|[integer(int32)]|false|none|
|MembershipInDateRange.WasMemberOnOrAfter|query|string(date-time)|false|Members who were active on or after the date specified|
|MembershipInDateRange.WasMemberOnOrBefore|query|string(date-time)|false|Members who were active on or before the date specified|
|MembershipInDateRange.WasMemberOfHouse|query|[House](#schemahouse)|false|Members who were active in the house specifid|
|IsEligible|query|boolean|false|Members currently Eligible to sit in their House|
|IsCurrentMember|query|boolean|false|Members who are current or former members|
|PolicyInterestId|query|integer(int32)|false|Members with specified policy interest|
|Experience|query|string|false|Members with specified experience|
|skip|query|integer(int32)|false|The number of records to skip from the first, default is 0|
|take|query|integer(int32)|false|The number of records to return, default is 20. Maximum is 20|

#### Enumerated Values

|Parameter|Value|
|---|---|
|House|1|
|House|2|
|MembershipInDateRange.WasMemberOfHouse|1|
|MembershipInDateRange.WasMemberOfHouse|2|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "gender": "string",
        "id": 0,
        "latestHouseMembership": {
          "house": 1,
          "membershipEndDate": "1970-01-01T00:00:00Z",
          "membershipEndReason": "string",
          "membershipEndReasonId": 0,
          "membershipEndReasonNotes": "string",
          "membershipFrom": "string",
          "membershipFromId": 0,
          "membershipStartDate": "1970-01-01T00:00:00Z",
          "membershipStatus": {
            "status": 0,
            "statusDescription": "string",
            "statusId": 0,
            "statusIsActive": true,
            "statusNotes": "string",
            "statusStartDate": "1970-01-01T00:00:00Z"
          }
        },
        "latestParty": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "nameAddressAs": "string",
        "nameDisplayAs": "string",
        "nameFullTitle": "string",
        "nameListAs": "string",
        "thumbnailUrl": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-current-members-of-the-commons-or-lords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MemberMembersServiceSearchResult](#schemamembermembersservicesearchresult)|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of members of the Commons or Lords

> Code samples

```bash
curl https://example.com/api/Members/SearchHistorical \
  -H 'Accept: application/json'
```

`GET /api/Members/SearchHistorical`

<h3 id="returns-a-list-of-members-of-the-commons-or-lords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Members with names containing the term specified|
|dateToSearchFor|query|string(date-time)|false|Members that were an active member of the Commons or Lords on the date specified|
|skip|query|integer(int32)|false|The number of records to skip from the first, default is 0|
|take|query|integer(int32)|false|The number of records to return, default is 20. Maximum is 20|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "gender": "string",
        "id": 0,
        "latestHouseMembership": {
          "house": 1,
          "membershipEndDate": "1970-01-01T00:00:00Z",
          "membershipEndReason": "string",
          "membershipEndReasonId": 0,
          "membershipEndReasonNotes": "string",
          "membershipFrom": "string",
          "membershipFromId": 0,
          "membershipStartDate": "1970-01-01T00:00:00Z",
          "membershipStatus": {
            "status": 0,
            "statusDescription": "string",
            "statusId": 0,
            "statusIsActive": true,
            "statusNotes": "string",
            "statusStartDate": "1970-01-01T00:00:00Z"
          }
        },
        "latestParty": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "nameAddressAs": "string",
        "nameDisplayAs": "string",
        "nameFullTitle": "string",
        "nameListAs": "string",
        "thumbnailUrl": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-members-of-the-commons-or-lords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MemberMembersServiceSearchResult](#schemamembermembersservicesearchresult)|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return member by ID

> Code samples

```bash
curl https://example.com/api/Members/0 \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}`

<h3 id="return-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Member by ID specified|
|detailsForDate|query|string(date-time)|false|Member object will be populated with details from the date specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "gender": "string",
    "id": 0,
    "latestHouseMembership": {
      "house": 1,
      "membershipEndDate": "1970-01-01T00:00:00Z",
      "membershipEndReason": "string",
      "membershipEndReasonId": 0,
      "membershipEndReasonNotes": "string",
      "membershipFrom": "string",
      "membershipFromId": 0,
      "membershipStartDate": "1970-01-01T00:00:00Z",
      "membershipStatus": {
        "status": 0,
        "statusDescription": "string",
        "statusId": 0,
        "statusIsActive": true,
        "statusNotes": "string",
        "statusStartDate": "1970-01-01T00:00:00Z"
      }
    },
    "latestParty": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    },
    "nameAddressAs": "string",
    "nameDisplayAs": "string",
    "nameFullTitle": "string",
    "nameListAs": "string",
    "thumbnailUrl": "string"
  }
}
```

<h3 id="return-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MemberItem](#schemamemberitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return biography of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/Biography \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/Biography`

<h3 id="return-biography-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Biography of Member by ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "committeeMemberships": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "electionsContested": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "governmentPosts": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "houseMemberships": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "oppositionPosts": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "otherPosts": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "partyAffiliations": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "representations": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ]
  }
}
```

<h3 id="return-biography-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MemberBiographyItem](#schemamemberbiographyitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return list of contact details of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/Contact \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/Contact`

<h3 id="return-list-of-contact-details-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Contact details of Member by ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "email": "string",
      "fax": "string",
      "isPreferred": true,
      "isWebAddress": true,
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "line4": "string",
      "line5": "string",
      "notes": "string",
      "phone": "string",
      "postcode": "string",
      "type": "string",
      "typeDescription": "string",
      "typeId": 0
    }
  ]
}
```

<h3 id="return-list-of-contact-details-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactInformationListItem](#schemacontactinformationlistitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return contribution summary of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/ContributionSummary \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/ContributionSummary`

<h3 id="return-contribution-summary-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Contribution summary of Member by ID specified|
|page|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "answerCount": 0,
        "debateId": 0,
        "debateTitle": "string",
        "debateWebsiteId": "string",
        "firstTimecode": "1970-01-01T00:00:00Z",
        "house": "string",
        "interventionCount": 0,
        "pointsOfOrderCount": 0,
        "questionCount": 0,
        "section": "string",
        "sittingDate": "1970-01-01T00:00:00Z",
        "speechCount": 0,
        "statementsCount": 0,
        "supplementaryQuestionCount": 0,
        "totalContributions": 0
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="return-contribution-summary-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DebateContributionMembersServiceSearchResult](#schemadebatecontributionmembersservicesearchresult)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return list of early day motions of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/Edms \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/Edms`

<h3 id="return-list-of-early-day-motions-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Early day motions of Member by ID specified|
|page|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "dateTabled": "1970-01-01T00:00:00Z",
        "id": 0,
        "isAmendment": true,
        "isPrayer": true,
        "number": "string",
        "sponsorsCount": 0,
        "title": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="return-list-of-early-day-motions-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EarlyDayMotionMembersServiceSearchResult](#schemaearlydaymotionmembersservicesearchresult)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return experience of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/Experience \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/Experience`

<h3 id="return-experience-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Experience of Member by ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "endMonth": 0,
      "endYear": 0,
      "id": 0,
      "organisation": "string",
      "startMonth": 0,
      "startYear": 0,
      "title": "string",
      "type": "string",
      "typeId": 0
    }
  ]
}
```

<h3 id="return-experience-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BiographyExperienceListItem](#schemabiographyexperiencelistitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return list of areas of focus of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/Focus \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/Focus`

<h3 id="return-list-of-areas-of-focus-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Areas of focus of Member by ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "category": "string",
      "focus": [
        "string"
      ]
    }
  ]
}
```

<h3 id="return-list-of-areas-of-focus-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MemberFocusListItem](#schemamemberfocuslistitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return latest election result of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/LatestElectionResult \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/LatestElectionResult`

<h3 id="return-latest-election-result-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Latest election result of Member by ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "candidates": [
      {
        "memberId": 0,
        "name": "string",
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "rankOrder": 0,
        "resultChange": "string",
        "voteShare": 0,
        "votes": 0
      }
    ],
    "constituencyName": "string",
    "electionDate": "1970-01-01T00:00:00Z",
    "electionId": 0,
    "electionTitle": "string",
    "electorate": 0,
    "isGeneralElection": true,
    "isNotional": true,
    "majority": 0,
    "result": "string",
    "turnout": 0,
    "winningParty": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    }
  }
}
```

<h3 id="return-latest-election-result-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ElectionResultItem](#schemaelectionresultitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return portrait of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/Portrait
```

`GET /api/Members/{id}/Portrait`

<h3 id="return-portrait-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Portrait of Member by ID specified|
|cropType|query|[PortraitCropEnum](#schemaportraitcropenum)|false|none|
|webVersion|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cropType|0|
|cropType|1|
|cropType|2|
|cropType|3|

<h3 id="return-portrait-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return portrait url of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/PortraitUrl \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/PortraitUrl`

<h3 id="return-portrait-url-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Portrait url of Member by ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": "string"
}
```

<h3 id="return-portrait-url-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StringItem](#schemastringitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return list of registered interests of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/RegisteredInterests \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/RegisteredInterests`

<h3 id="return-list-of-registered-interests-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Registered interests of Member by ID specified|
|house|query|[House](#schemahouse)|false|Registered interests of Member by House specified|

#### Enumerated Values

|Parameter|Value|
|---|---|
|house|1|
|house|2|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "id": 0,
      "interests": [
        {
          "childInterests": [
            {}
          ],
          "createdWhen": "1970-01-01T00:00:00Z",
          "deletedWhen": "1970-01-01T00:00:00Z",
          "id": 0,
          "interest": "string",
          "isCorrection": true,
          "lastAmendedWhen": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "sortOrder": 0
    }
  ]
}
```

<h3 id="return-list-of-registered-interests-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisteredInterestCategoryListItem](#schemaregisteredinterestcategorylistitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return list of staff of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/Staff \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/Staff`

<h3 id="return-list-of-staff-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Staff of Member by ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "details": "string",
      "forename": "string",
      "surname": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="return-list-of-staff-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StaffListItem](#schemastafflistitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return synopsis of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/Synopsis \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/Synopsis`

<h3 id="return-synopsis-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Synopsis of Member by ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": "string"
}
```

<h3 id="return-synopsis-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StringItem](#schemastringitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return thumbnail of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/Thumbnail
```

`GET /api/Members/{id}/Thumbnail`

<h3 id="return-thumbnail-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Thumbnail of Member by ID specified|

<h3 id="return-thumbnail-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return thumbnail url of member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/ThumbnailUrl \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/ThumbnailUrl`

<h3 id="return-thumbnail-url-of-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Thumbnail url of Member by ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": "string"
}
```

<h3 id="return-thumbnail-url-of-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StringItem](#schemastringitem)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return list of votes by member by ID

> Code samples

```bash
curl 'https://example.com/api/Members/0/Voting?house=1' \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/Voting`

<h3 id="return-list-of-votes-by-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Votes by Member by ID specified|
|house|query|[House](#schemahouse)|true|none|
|page|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|house|1|
|house|2|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "actedAsTeller": true,
        "date": "1970-01-01T00:00:00Z",
        "divisionNumber": 0,
        "house": 1,
        "id": 0,
        "inAffirmativeLobby": true,
        "numberAgainst": 0,
        "numberInFavour": 0,
        "title": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="return-list-of-votes-by-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VoteMembersServiceSearchResult](#schemavotemembersservicesearchresult)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return list of written questions by member by ID

> Code samples

```bash
curl https://example.com/api/Members/0/WrittenQuestions \
  -H 'Accept: application/json'
```

`GET /api/Members/{id}/WrittenQuestions`

<h3 id="return-list-of-written-questions-by-member-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Written questions by Member by ID specified|
|page|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "answerIsCorrection": true,
        "answerIsHolding": true,
        "answerText": "string",
        "answeringBody": {
          "department": {
            "id": 0,
            "imageUrl": "string",
            "name": "string",
            "url": "string"
          },
          "id": 0,
          "name": "string",
          "shortName": "string",
          "target": "string"
        },
        "answeringBodyId": 0,
        "answeringMember": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        },
        "answeringMemberId": 0,
        "askingMemberId": 0,
        "attachmentCount": 0,
        "correctingMember": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        },
        "correctingMemberId": 0,
        "dateAnswered": "1970-01-01T00:00:00Z",
        "dateForAnswer": "1970-01-01T00:00:00Z",
        "dateTabled": "1970-01-01T00:00:00Z",
        "groupedQuestions": [
          "string"
        ],
        "groupedQuestionsDates": [
          {
            "dateTabled": "1970-01-01T00:00:00Z",
            "questionUin": "string"
          }
        ],
        "heading": "string",
        "house": 1,
        "id": 0,
        "isNamedDay": true,
        "isWithdrawn": true,
        "memberHasInterest": true,
        "questionText": "string",
        "uin": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="return-list-of-written-questions-by-member-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WrittenQuestionMembersServiceSearchResult](#schemawrittenquestionmembersservicesearchresult)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="members-api-parties">Parties</h1>

## Returns a list of current parties with at least one active member.

> Code samples

```bash
curl https://example.com/api/Parties/GetActive/1 \
  -H 'Accept: application/json'
```

`GET /api/Parties/GetActive/{house}`

<h3 id="returns-a-list-of-current-parties-with-at-least-one-active-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|house|path|[House](#schemahouse)|true|Current parties by house|

#### Enumerated Values

|Parameter|Value|
|---|---|
|house|1|
|house|2|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-current-parties-with-at-least-one-active-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PartyMembersServiceSearchResult](#schemapartymembersservicesearchresult)|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the composition of the House of Lords by peerage type.

> Code samples

```bash
curl https://example.com/api/Parties/LordsByType/1970-01-01T00%3A00%3A00Z \
  -H 'Accept: application/json'
```

`GET /api/Parties/LordsByType/{forDate}`

<h3 id="returns-the-composition-of-the-house-of-lords-by-peerage-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forDate|path|string(date-time)|true|Composition of the Lords for date specified.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "bishop": 0,
        "hereditary": 0,
        "life": 0,
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "total": 0
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-the-composition-of-the-house-of-lords-by-peerage-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LordsByTypeMembersServiceSearchResult](#schemalordsbytypemembersservicesearchresult)|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns current state of parties

> Code samples

```bash
curl https://example.com/api/Parties/StateOfTheParties/1/1970-01-01T00%3A00%3A00Z \
  -H 'Accept: application/json'
```

`GET /api/Parties/StateOfTheParties/{house}/{forDate}`

<h3 id="returns-current-state-of-parties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|house|path|[House](#schemahouse)|true|State of parties in Commons or Lords.|
|forDate|path|string(date-time)|true|State of parties for the date specified|

#### Enumerated Values

|Parameter|Value|
|---|---|
|house|1|
|house|2|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "female": 0,
        "male": 0,
        "nonBinary": 0,
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "total": 0
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-current-state-of-parties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PartySeatCountMembersServiceSearchResult](#schemapartyseatcountmembersservicesearchresult)|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="members-api-posts">Posts</h1>

## Returns a list of departments.

> Code samples

```bash
curl https://example.com/api/Posts/Departments/0 \
  -H 'Accept: application/json'
```

`GET /api/Posts/Departments/{type}`

<h3 id="returns-a-list-of-departments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|[PostType](#schemaposttype)|true|Departments by type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|0|
|type|1|
|type|2|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "imageUrl": "string",
    "name": "string",
    "url": "string"
  }
]
```

<h3 id="returns-a-list-of-departments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-of-departments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GovernmentDepartment](#schemagovernmentdepartment)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of government posts.

> Code samples

```bash
curl https://example.com/api/Posts/GovernmentPosts \
  -H 'Accept: application/json'
```

`GET /api/Posts/GovernmentPosts`

<h3 id="returns-a-list-of-government-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|departmentId|query|integer(int32)|false|Government posts by department ID|

> Example responses

> 200 Response

```json
[
  {
    "links": [
      {
        "href": "string",
        "method": "string",
        "rel": "string"
      }
    ],
    "value": {
      "createdWhen": "1970-01-01T00:00:00Z",
      "governmentDepartments": [
        {
          "id": 0,
          "imageUrl": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "hansardName": "string",
      "id": 0,
      "name": "string",
      "order": 0,
      "postHolders": [
        {
          "endDate": "1970-01-01T00:00:00Z",
          "isPaid": true,
          "layingMinisterName": "string",
          "member": {
            "links": [
              {
                "href": "string",
                "method": "string",
                "rel": "string"
              }
            ],
            "value": {
              "gender": "string",
              "id": 0,
              "latestHouseMembership": {
                "house": 1,
                "membershipEndDate": "1970-01-01T00:00:00Z",
                "membershipEndReason": "string",
                "membershipEndReasonId": 0,
                "membershipEndReasonNotes": "string",
                "membershipFrom": "string",
                "membershipFromId": 0,
                "membershipStartDate": "1970-01-01T00:00:00Z",
                "membershipStatus": {
                  "status": 0,
                  "statusDescription": "string",
                  "statusId": 0,
                  "statusIsActive": true,
                  "statusNotes": "string",
                  "statusStartDate": "1970-01-01T00:00:00Z"
                }
              },
              "latestParty": {
                "abbreviation": "string",
                "backgroundColour": "string",
                "foregroundColour": "string",
                "governmentType": 0,
                "id": 0,
                "isIndependentParty": true,
                "isLordsMainParty": true,
                "isLordsSpiritualParty": true,
                "name": "string"
              },
              "nameAddressAs": "string",
              "nameDisplayAs": "string",
              "nameFullTitle": "string",
              "nameListAs": "string",
              "thumbnailUrl": "string"
            }
          },
          "startDate": "1970-01-01T00:00:00Z"
        }
      ],
      "type": 0
    }
  }
]
```

<h3 id="returns-a-list-of-government-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-of-government-posts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GovernmentOppositionPostItem](#schemagovernmentoppositionpostitem)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of opposition posts.

> Code samples

```bash
curl https://example.com/api/Posts/OppositionPosts \
  -H 'Accept: application/json'
```

`GET /api/Posts/OppositionPosts`

<h3 id="returns-a-list-of-opposition-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|departmentId|query|integer(int32)|false|Opposition posts by department ID|

> Example responses

> 200 Response

```json
[
  {
    "links": [
      {
        "href": "string",
        "method": "string",
        "rel": "string"
      }
    ],
    "value": {
      "createdWhen": "1970-01-01T00:00:00Z",
      "governmentDepartments": [
        {
          "id": 0,
          "imageUrl": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "hansardName": "string",
      "id": 0,
      "name": "string",
      "order": 0,
      "postHolders": [
        {
          "endDate": "1970-01-01T00:00:00Z",
          "isPaid": true,
          "layingMinisterName": "string",
          "member": {
            "links": [
              {
                "href": "string",
                "method": "string",
                "rel": "string"
              }
            ],
            "value": {
              "gender": "string",
              "id": 0,
              "latestHouseMembership": {
                "house": 1,
                "membershipEndDate": "1970-01-01T00:00:00Z",
                "membershipEndReason": "string",
                "membershipEndReasonId": 0,
                "membershipEndReasonNotes": "string",
                "membershipFrom": "string",
                "membershipFromId": 0,
                "membershipStartDate": "1970-01-01T00:00:00Z",
                "membershipStatus": {
                  "status": 0,
                  "statusDescription": "string",
                  "statusId": 0,
                  "statusIsActive": true,
                  "statusNotes": "string",
                  "statusStartDate": "1970-01-01T00:00:00Z"
                }
              },
              "latestParty": {
                "abbreviation": "string",
                "backgroundColour": "string",
                "foregroundColour": "string",
                "governmentType": 0,
                "id": 0,
                "isIndependentParty": true,
                "isLordsMainParty": true,
                "isLordsSpiritualParty": true,
                "name": "string"
              },
              "nameAddressAs": "string",
              "nameDisplayAs": "string",
              "nameFullTitle": "string",
              "nameListAs": "string",
              "thumbnailUrl": "string"
            }
          },
          "startDate": "1970-01-01T00:00:00Z"
        }
      ],
      "type": 0
    }
  }
]
```

<h3 id="returns-a-list-of-opposition-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-of-opposition-posts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GovernmentOppositionPostItem](#schemagovernmentoppositionpostitem)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list containing the speaker and deputy speakers.

> Code samples

```bash
curl https://example.com/api/Posts/SpeakerAndDeputies/1970-01-01T00%3A00%3A00Z \
  -H 'Accept: application/json'
```

`GET /api/Posts/SpeakerAndDeputies/{forDate}`

<h3 id="returns-a-list-containing-the-speaker-and-deputy-speakers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forDate|path|string(date-time)|true|Speaker and deputy speakers for date specified|

> Example responses

> 200 Response

```json
[
  {
    "links": [
      {
        "href": "string",
        "method": "string",
        "rel": "string"
      }
    ],
    "value": {
      "gender": "string",
      "id": 0,
      "latestHouseMembership": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      },
      "latestParty": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      },
      "nameAddressAs": "string",
      "nameDisplayAs": "string",
      "nameFullTitle": "string",
      "nameListAs": "string",
      "thumbnailUrl": "string"
    }
  }
]
```

<h3 id="returns-a-list-containing-the-speaker-and-deputy-speakers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-containing-the-speaker-and-deputy-speakers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MemberItem](#schemamemberitem)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of spokespersons.

> Code samples

```bash
curl https://example.com/api/Posts/Spokespersons \
  -H 'Accept: application/json'
```

`GET /api/Posts/Spokespersons`

<h3 id="returns-a-list-of-spokespersons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partyId|query|integer(int32)|false|Spokespersons by party ID|

> Example responses

> 200 Response

```json
[
  {
    "links": [
      {
        "href": "string",
        "method": "string",
        "rel": "string"
      }
    ],
    "value": {
      "createdWhen": "1970-01-01T00:00:00Z",
      "governmentDepartments": [
        {
          "id": 0,
          "imageUrl": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "hansardName": "string",
      "id": 0,
      "name": "string",
      "order": 0,
      "postHolders": [
        {
          "endDate": "1970-01-01T00:00:00Z",
          "isPaid": true,
          "layingMinisterName": "string",
          "member": {
            "links": [
              {
                "href": "string",
                "method": "string",
                "rel": "string"
              }
            ],
            "value": {
              "gender": "string",
              "id": 0,
              "latestHouseMembership": {
                "house": 1,
                "membershipEndDate": "1970-01-01T00:00:00Z",
                "membershipEndReason": "string",
                "membershipEndReasonId": 0,
                "membershipEndReasonNotes": "string",
                "membershipFrom": "string",
                "membershipFromId": 0,
                "membershipStartDate": "1970-01-01T00:00:00Z",
                "membershipStatus": {
                  "status": 0,
                  "statusDescription": "string",
                  "statusId": 0,
                  "statusIsActive": true,
                  "statusNotes": "string",
                  "statusStartDate": "1970-01-01T00:00:00Z"
                }
              },
              "latestParty": {
                "abbreviation": "string",
                "backgroundColour": "string",
                "foregroundColour": "string",
                "governmentType": 0,
                "id": 0,
                "isIndependentParty": true,
                "isLordsMainParty": true,
                "isLordsSpiritualParty": true,
                "name": "string"
              },
              "nameAddressAs": "string",
              "nameDisplayAs": "string",
              "nameFullTitle": "string",
              "nameListAs": "string",
              "thumbnailUrl": "string"
            }
          },
          "startDate": "1970-01-01T00:00:00Z"
        }
      ],
      "type": 0
    }
  }
]
```

<h3 id="returns-a-list-of-spokespersons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-of-spokespersons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GovernmentOppositionPostItem](#schemagovernmentoppositionpostitem)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="members-api-reference">Reference</h1>

## Returns a list of answering bodies.

> Code samples

```bash
curl https://example.com/api/Reference/AnsweringBodies \
  -H 'Accept: application/json'
```

`GET /api/Reference/AnsweringBodies`

<h3 id="returns-a-list-of-answering-bodies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|false|none|
|nameContains|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "department": {
      "id": 0,
      "imageUrl": "string",
      "name": "string",
      "url": "string"
    },
    "id": 0,
    "name": "string",
    "shortName": "string",
    "target": "string"
  }
]
```

<h3 id="returns-a-list-of-answering-bodies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="returns-a-list-of-answering-bodies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AnsweringBody](#schemaansweringbody)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of departments.

> Code samples

```bash
curl https://example.com/api/Reference/Departments \
  -H 'Accept: application/json'
```

`GET /api/Reference/Departments`

<h3 id="returns-a-list-of-departments-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|false|none|
|nameContains|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "imageUrl": "string",
    "name": "string",
    "url": "string"
  }
]
```

<h3 id="returns-a-list-of-departments-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="returns-a-list-of-departments-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GovernmentDepartment](#schemagovernmentdepartment)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns department logo.

> Code samples

```bash
curl https://example.com/api/Reference/Departments/0/Logo
```

`GET /api/Reference/Departments/{id}/Logo`

<h3 id="returns-department-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Logo by department ID|

<h3 id="returns-department-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of policy interest.

> Code samples

```bash
curl https://example.com/api/Reference/PolicyInterests \
  -H 'Accept: application/json'
```

`GET /api/Reference/PolicyInterests`

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": 0
  }
]
```

<h3 id="returns-a-list-of-policy-interest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-a-list-of-policy-interest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GenericReferenceData](#schemagenericreferencedata)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AnsweringBody">AnsweringBody</h2>
<!-- backwards compatibility -->
<a id="schemaansweringbody"></a>
<a id="schema_AnsweringBody"></a>
<a id="tocSansweringbody"></a>
<a id="tocsansweringbody"></a>

```json
{
  "department": {
    "id": 0,
    "imageUrl": "string",
    "name": "string",
    "url": "string"
  },
  "id": 0,
  "name": "string",
  "shortName": "string",
  "target": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|department|[GovernmentDepartment](#schemagovernmentdepartment)|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|shortName|string \| null|false|none|none|
|target|string \| null|false|none|none|

<h2 id="tocS_BiographyExperience">BiographyExperience</h2>
<!-- backwards compatibility -->
<a id="schemabiographyexperience"></a>
<a id="schema_BiographyExperience"></a>
<a id="tocSbiographyexperience"></a>
<a id="tocsbiographyexperience"></a>

```json
{
  "endMonth": 0,
  "endYear": 0,
  "id": 0,
  "organisation": "string",
  "startMonth": 0,
  "startYear": 0,
  "title": "string",
  "type": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endMonth|integer(int32) \| null|false|none|none|
|endYear|integer(int32) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|organisation|string \| null|false|none|none|
|startMonth|integer(int32) \| null|false|none|none|
|startYear|integer(int32) \| null|false|none|none|
|title|string \| null|false|none|none|
|type|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_BiographyExperienceListItem">BiographyExperienceListItem</h2>
<!-- backwards compatibility -->
<a id="schemabiographyexperiencelistitem"></a>
<a id="schema_BiographyExperienceListItem"></a>
<a id="tocSbiographyexperiencelistitem"></a>
<a id="tocsbiographyexperiencelistitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "endMonth": 0,
      "endYear": 0,
      "id": 0,
      "organisation": "string",
      "startMonth": 0,
      "startYear": 0,
      "title": "string",
      "type": "string",
      "typeId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[[BiographyExperience](#schemabiographyexperience)]|false|none|none|

<h2 id="tocS_BiographyItem">BiographyItem</h2>
<!-- backwards compatibility -->
<a id="schemabiographyitem"></a>
<a id="schema_BiographyItem"></a>
<a id="tocSbiographyitem"></a>
<a id="tocsbiographyitem"></a>

```json
{
  "additionalInfo": "string",
  "additionalInfoLink": "string",
  "endDate": "1970-01-01T00:00:00Z",
  "house": 1,
  "id": 0,
  "name": "string",
  "startDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string \| null|false|none|none|
|additionalInfoLink|string \| null|false|none|none|
|endDate|string(date-time) \| null|false|none|none|
|house|[House](#schemahouse)|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|startDate|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|1|
|house|2|

<h2 id="tocS_Constituency">Constituency</h2>
<!-- backwards compatibility -->
<a id="schemaconstituency"></a>
<a id="schema_Constituency"></a>
<a id="tocSconstituency"></a>
<a id="tocsconstituency"></a>

```json
{
  "currentRepresentation": {
    "member": {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "gender": "string",
        "id": 0,
        "latestHouseMembership": {
          "house": 1,
          "membershipEndDate": "1970-01-01T00:00:00Z",
          "membershipEndReason": "string",
          "membershipEndReasonId": 0,
          "membershipEndReasonNotes": "string",
          "membershipFrom": "string",
          "membershipFromId": 0,
          "membershipStartDate": "1970-01-01T00:00:00Z",
          "membershipStatus": {
            "status": 0,
            "statusDescription": "string",
            "statusId": 0,
            "statusIsActive": true,
            "statusNotes": "string",
            "statusStartDate": "1970-01-01T00:00:00Z"
          }
        },
        "latestParty": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "nameAddressAs": "string",
        "nameDisplayAs": "string",
        "nameFullTitle": "string",
        "nameListAs": "string",
        "thumbnailUrl": "string"
      }
    },
    "representation": {
      "house": 1,
      "membershipEndDate": "1970-01-01T00:00:00Z",
      "membershipEndReason": "string",
      "membershipEndReasonId": 0,
      "membershipEndReasonNotes": "string",
      "membershipFrom": "string",
      "membershipFromId": 0,
      "membershipStartDate": "1970-01-01T00:00:00Z",
      "membershipStatus": {
        "status": 0,
        "statusDescription": "string",
        "statusId": 0,
        "statusIsActive": true,
        "statusNotes": "string",
        "statusStartDate": "1970-01-01T00:00:00Z"
      }
    }
  },
  "endDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "name": "string",
  "startDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentRepresentation|[ConstituencyRepresentation](#schemaconstituencyrepresentation)|false|none|none|
|endDate|string(date-time) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|startDate|string(date-time)|false|none|none|

<h2 id="tocS_ConstituencyItem">ConstituencyItem</h2>
<!-- backwards compatibility -->
<a id="schemaconstituencyitem"></a>
<a id="schema_ConstituencyItem"></a>
<a id="tocSconstituencyitem"></a>
<a id="tocsconstituencyitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "currentRepresentation": {
      "member": {
        "links": [
          {
            "href": "string",
            "method": "string",
            "rel": "string"
          }
        ],
        "value": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        }
      },
      "representation": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      }
    },
    "endDate": "1970-01-01T00:00:00Z",
    "id": 0,
    "name": "string",
    "startDate": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[Constituency](#schemaconstituency)|false|none|none|

<h2 id="tocS_ConstituencyMembersServiceSearchResult">ConstituencyMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaconstituencymembersservicesearchresult"></a>
<a id="schema_ConstituencyMembersServiceSearchResult"></a>
<a id="tocSconstituencymembersservicesearchresult"></a>
<a id="tocsconstituencymembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "currentRepresentation": {
          "member": {
            "links": [
              {
                "href": "string",
                "method": "string",
                "rel": "string"
              }
            ],
            "value": {
              "gender": "string",
              "id": 0,
              "latestHouseMembership": {
                "house": 1,
                "membershipEndDate": "1970-01-01T00:00:00Z",
                "membershipEndReason": "string",
                "membershipEndReasonId": 0,
                "membershipEndReasonNotes": "string",
                "membershipFrom": "string",
                "membershipFromId": 0,
                "membershipStartDate": "1970-01-01T00:00:00Z",
                "membershipStatus": {
                  "status": 0,
                  "statusDescription": "string",
                  "statusId": 0,
                  "statusIsActive": true,
                  "statusNotes": "string",
                  "statusStartDate": "1970-01-01T00:00:00Z"
                }
              },
              "latestParty": {
                "abbreviation": "string",
                "backgroundColour": "string",
                "foregroundColour": "string",
                "governmentType": 0,
                "id": 0,
                "isIndependentParty": true,
                "isLordsMainParty": true,
                "isLordsSpiritualParty": true,
                "name": "string"
              },
              "nameAddressAs": "string",
              "nameDisplayAs": "string",
              "nameFullTitle": "string",
              "nameListAs": "string",
              "thumbnailUrl": "string"
            }
          },
          "representation": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          }
        },
        "endDate": "1970-01-01T00:00:00Z",
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[ConstituencyItem](#schemaconstituencyitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_ConstituencyRepresentation">ConstituencyRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaconstituencyrepresentation"></a>
<a id="schema_ConstituencyRepresentation"></a>
<a id="tocSconstituencyrepresentation"></a>
<a id="tocsconstituencyrepresentation"></a>

```json
{
  "member": {
    "links": [
      {
        "href": "string",
        "method": "string",
        "rel": "string"
      }
    ],
    "value": {
      "gender": "string",
      "id": 0,
      "latestHouseMembership": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      },
      "latestParty": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      },
      "nameAddressAs": "string",
      "nameDisplayAs": "string",
      "nameFullTitle": "string",
      "nameListAs": "string",
      "thumbnailUrl": "string"
    }
  },
  "representation": {
    "house": 1,
    "membershipEndDate": "1970-01-01T00:00:00Z",
    "membershipEndReason": "string",
    "membershipEndReasonId": 0,
    "membershipEndReasonNotes": "string",
    "membershipFrom": "string",
    "membershipFromId": 0,
    "membershipStartDate": "1970-01-01T00:00:00Z",
    "membershipStatus": {
      "status": 0,
      "statusDescription": "string",
      "statusId": 0,
      "statusIsActive": true,
      "statusNotes": "string",
      "statusStartDate": "1970-01-01T00:00:00Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|[MemberItem](#schemamemberitem)|false|none|none|
|representation|[HouseMembership](#schemahousemembership)|false|none|none|

<h2 id="tocS_ConstituencyRepresentationListItem">ConstituencyRepresentationListItem</h2>
<!-- backwards compatibility -->
<a id="schemaconstituencyrepresentationlistitem"></a>
<a id="schema_ConstituencyRepresentationListItem"></a>
<a id="tocSconstituencyrepresentationlistitem"></a>
<a id="tocsconstituencyrepresentationlistitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "member": {
        "links": [
          {
            "href": "string",
            "method": "string",
            "rel": "string"
          }
        ],
        "value": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        }
      },
      "representation": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[[ConstituencyRepresentation](#schemaconstituencyrepresentation)]|false|none|none|

<h2 id="tocS_ContactInformation">ContactInformation</h2>
<!-- backwards compatibility -->
<a id="schemacontactinformation"></a>
<a id="schema_ContactInformation"></a>
<a id="tocScontactinformation"></a>
<a id="tocscontactinformation"></a>

```json
{
  "email": "string",
  "fax": "string",
  "isPreferred": true,
  "isWebAddress": true,
  "line1": "string",
  "line2": "string",
  "line3": "string",
  "line4": "string",
  "line5": "string",
  "notes": "string",
  "phone": "string",
  "postcode": "string",
  "type": "string",
  "typeDescription": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|none|
|fax|string \| null|false|none|none|
|isPreferred|boolean|false|none|none|
|isWebAddress|boolean|false|none|none|
|line1|string \| null|false|none|none|
|line2|string \| null|false|none|none|
|line3|string \| null|false|none|none|
|line4|string \| null|false|none|none|
|line5|string \| null|false|none|none|
|notes|string \| null|false|none|none|
|phone|string \| null|false|none|none|
|postcode|string \| null|false|none|none|
|type|string \| null|false|none|none|
|typeDescription|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_ContactInformationListItem">ContactInformationListItem</h2>
<!-- backwards compatibility -->
<a id="schemacontactinformationlistitem"></a>
<a id="schema_ContactInformationListItem"></a>
<a id="tocScontactinformationlistitem"></a>
<a id="tocscontactinformationlistitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "email": "string",
      "fax": "string",
      "isPreferred": true,
      "isWebAddress": true,
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "line4": "string",
      "line5": "string",
      "notes": "string",
      "phone": "string",
      "postcode": "string",
      "type": "string",
      "typeDescription": "string",
      "typeId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[[ContactInformation](#schemacontactinformation)]|false|none|none|

<h2 id="tocS_DebateContribution">DebateContribution</h2>
<!-- backwards compatibility -->
<a id="schemadebatecontribution"></a>
<a id="schema_DebateContribution"></a>
<a id="tocSdebatecontribution"></a>
<a id="tocsdebatecontribution"></a>

```json
{
  "answerCount": 0,
  "debateId": 0,
  "debateTitle": "string",
  "debateWebsiteId": "string",
  "firstTimecode": "1970-01-01T00:00:00Z",
  "house": "string",
  "interventionCount": 0,
  "pointsOfOrderCount": 0,
  "questionCount": 0,
  "section": "string",
  "sittingDate": "1970-01-01T00:00:00Z",
  "speechCount": 0,
  "statementsCount": 0,
  "supplementaryQuestionCount": 0,
  "totalContributions": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answerCount|integer(int32)|false|none|none|
|debateId|integer(int32)|false|none|none|
|debateTitle|string \| null|false|none|none|
|debateWebsiteId|string \| null|false|none|none|
|firstTimecode|string(date-time) \| null|false|none|none|
|house|string \| null|false|none|none|
|interventionCount|integer(int32)|false|none|none|
|pointsOfOrderCount|integer(int32)|false|none|none|
|questionCount|integer(int32)|false|none|none|
|section|string \| null|false|none|none|
|sittingDate|string(date-time)|false|none|none|
|speechCount|integer(int32)|false|none|none|
|statementsCount|integer(int32)|false|none|none|
|supplementaryQuestionCount|integer(int32)|false|none|none|
|totalContributions|integer(int32)|false|none|none|

<h2 id="tocS_DebateContributionItem">DebateContributionItem</h2>
<!-- backwards compatibility -->
<a id="schemadebatecontributionitem"></a>
<a id="schema_DebateContributionItem"></a>
<a id="tocSdebatecontributionitem"></a>
<a id="tocsdebatecontributionitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "answerCount": 0,
    "debateId": 0,
    "debateTitle": "string",
    "debateWebsiteId": "string",
    "firstTimecode": "1970-01-01T00:00:00Z",
    "house": "string",
    "interventionCount": 0,
    "pointsOfOrderCount": 0,
    "questionCount": 0,
    "section": "string",
    "sittingDate": "1970-01-01T00:00:00Z",
    "speechCount": 0,
    "statementsCount": 0,
    "supplementaryQuestionCount": 0,
    "totalContributions": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[DebateContribution](#schemadebatecontribution)|false|none|none|

<h2 id="tocS_DebateContributionMembersServiceSearchResult">DebateContributionMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemadebatecontributionmembersservicesearchresult"></a>
<a id="schema_DebateContributionMembersServiceSearchResult"></a>
<a id="tocSdebatecontributionmembersservicesearchresult"></a>
<a id="tocsdebatecontributionmembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "answerCount": 0,
        "debateId": 0,
        "debateTitle": "string",
        "debateWebsiteId": "string",
        "firstTimecode": "1970-01-01T00:00:00Z",
        "house": "string",
        "interventionCount": 0,
        "pointsOfOrderCount": 0,
        "questionCount": 0,
        "section": "string",
        "sittingDate": "1970-01-01T00:00:00Z",
        "speechCount": 0,
        "statementsCount": 0,
        "supplementaryQuestionCount": 0,
        "totalContributions": 0
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[DebateContributionItem](#schemadebatecontributionitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_EarlyDayMotion">EarlyDayMotion</h2>
<!-- backwards compatibility -->
<a id="schemaearlydaymotion"></a>
<a id="schema_EarlyDayMotion"></a>
<a id="tocSearlydaymotion"></a>
<a id="tocsearlydaymotion"></a>

```json
{
  "dateTabled": "1970-01-01T00:00:00Z",
  "id": 0,
  "isAmendment": true,
  "isPrayer": true,
  "number": "string",
  "sponsorsCount": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTabled|string(date-time)|false|none|none|
|id|integer(int32)|false|none|none|
|isAmendment|boolean|false|none|none|
|isPrayer|boolean|false|none|none|
|number|string \| null|false|none|none|
|sponsorsCount|integer(int32)|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_EarlyDayMotionItem">EarlyDayMotionItem</h2>
<!-- backwards compatibility -->
<a id="schemaearlydaymotionitem"></a>
<a id="schema_EarlyDayMotionItem"></a>
<a id="tocSearlydaymotionitem"></a>
<a id="tocsearlydaymotionitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "dateTabled": "1970-01-01T00:00:00Z",
    "id": 0,
    "isAmendment": true,
    "isPrayer": true,
    "number": "string",
    "sponsorsCount": 0,
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[EarlyDayMotion](#schemaearlydaymotion)|false|none|none|

<h2 id="tocS_EarlyDayMotionMembersServiceSearchResult">EarlyDayMotionMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaearlydaymotionmembersservicesearchresult"></a>
<a id="schema_EarlyDayMotionMembersServiceSearchResult"></a>
<a id="tocSearlydaymotionmembersservicesearchresult"></a>
<a id="tocsearlydaymotionmembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "dateTabled": "1970-01-01T00:00:00Z",
        "id": 0,
        "isAmendment": true,
        "isPrayer": true,
        "number": "string",
        "sponsorsCount": 0,
        "title": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[EarlyDayMotionItem](#schemaearlydaymotionitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_ElectionCandidate">ElectionCandidate</h2>
<!-- backwards compatibility -->
<a id="schemaelectioncandidate"></a>
<a id="schema_ElectionCandidate"></a>
<a id="tocSelectioncandidate"></a>
<a id="tocselectioncandidate"></a>

```json
{
  "memberId": 0,
  "name": "string",
  "party": {
    "abbreviation": "string",
    "backgroundColour": "string",
    "foregroundColour": "string",
    "governmentType": 0,
    "id": 0,
    "isIndependentParty": true,
    "isLordsMainParty": true,
    "isLordsSpiritualParty": true,
    "name": "string"
  },
  "rankOrder": 0,
  "resultChange": "string",
  "voteShare": 0,
  "votes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberId|integer(int32) \| null|false|none|none|
|name|string \| null|false|none|none|
|party|[Party](#schemaparty)|false|none|none|
|rankOrder|integer(int32) \| null|false|none|none|
|resultChange|string \| null|false|none|none|
|voteShare|number(double) \| null|false|none|none|
|votes|integer(int32)|false|none|none|

<h2 id="tocS_ElectionResult">ElectionResult</h2>
<!-- backwards compatibility -->
<a id="schemaelectionresult"></a>
<a id="schema_ElectionResult"></a>
<a id="tocSelectionresult"></a>
<a id="tocselectionresult"></a>

```json
{
  "candidates": [
    {
      "memberId": 0,
      "name": "string",
      "party": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      },
      "rankOrder": 0,
      "resultChange": "string",
      "voteShare": 0,
      "votes": 0
    }
  ],
  "constituencyName": "string",
  "electionDate": "1970-01-01T00:00:00Z",
  "electionId": 0,
  "electionTitle": "string",
  "electorate": 0,
  "isGeneralElection": true,
  "isNotional": true,
  "majority": 0,
  "result": "string",
  "turnout": 0,
  "winningParty": {
    "abbreviation": "string",
    "backgroundColour": "string",
    "foregroundColour": "string",
    "governmentType": 0,
    "id": 0,
    "isIndependentParty": true,
    "isLordsMainParty": true,
    "isLordsSpiritualParty": true,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|candidates|[[ElectionCandidate](#schemaelectioncandidate)]|false|none|none|
|constituencyName|string \| null|false|none|none|
|electionDate|string(date-time)|false|none|none|
|electionId|integer(int32)|false|none|none|
|electionTitle|string \| null|false|none|none|
|electorate|integer(int32)|false|none|none|
|isGeneralElection|boolean|false|none|none|
|isNotional|boolean|false|none|none|
|majority|integer(int32)|false|none|none|
|result|string \| null|false|none|none|
|turnout|integer(int32)|false|none|none|
|winningParty|[Party](#schemaparty)|false|none|none|

<h2 id="tocS_ElectionResultItem">ElectionResultItem</h2>
<!-- backwards compatibility -->
<a id="schemaelectionresultitem"></a>
<a id="schema_ElectionResultItem"></a>
<a id="tocSelectionresultitem"></a>
<a id="tocselectionresultitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "candidates": [
      {
        "memberId": 0,
        "name": "string",
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "rankOrder": 0,
        "resultChange": "string",
        "voteShare": 0,
        "votes": 0
      }
    ],
    "constituencyName": "string",
    "electionDate": "1970-01-01T00:00:00Z",
    "electionId": 0,
    "electionTitle": "string",
    "electorate": 0,
    "isGeneralElection": true,
    "isNotional": true,
    "majority": 0,
    "result": "string",
    "turnout": 0,
    "winningParty": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[ElectionResult](#schemaelectionresult)|false|none|none|

<h2 id="tocS_ElectionResultListItem">ElectionResultListItem</h2>
<!-- backwards compatibility -->
<a id="schemaelectionresultlistitem"></a>
<a id="schema_ElectionResultListItem"></a>
<a id="tocSelectionresultlistitem"></a>
<a id="tocselectionresultlistitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "candidates": [
        {
          "memberId": 0,
          "name": "string",
          "party": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "rankOrder": 0,
          "resultChange": "string",
          "voteShare": 0,
          "votes": 0
        }
      ],
      "constituencyName": "string",
      "electionDate": "1970-01-01T00:00:00Z",
      "electionId": 0,
      "electionTitle": "string",
      "electorate": 0,
      "isGeneralElection": true,
      "isNotional": true,
      "majority": 0,
      "result": "string",
      "turnout": 0,
      "winningParty": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[[ElectionResult](#schemaelectionresult)]|false|none|none|

<h2 id="tocS_GenericReferenceData">GenericReferenceData</h2>
<!-- backwards compatibility -->
<a id="schemagenericreferencedata"></a>
<a id="schema_GenericReferenceData"></a>
<a id="tocSgenericreferencedata"></a>
<a id="tocsgenericreferencedata"></a>

```json
{
  "description": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_GovernmentDepartment">GovernmentDepartment</h2>
<!-- backwards compatibility -->
<a id="schemagovernmentdepartment"></a>
<a id="schema_GovernmentDepartment"></a>
<a id="tocSgovernmentdepartment"></a>
<a id="tocsgovernmentdepartment"></a>

```json
{
  "id": 0,
  "imageUrl": "string",
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|imageUrl|string \| null|false|none|none|
|name|string \| null|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_GovernmentOppositionPost">GovernmentOppositionPost</h2>
<!-- backwards compatibility -->
<a id="schemagovernmentoppositionpost"></a>
<a id="schema_GovernmentOppositionPost"></a>
<a id="tocSgovernmentoppositionpost"></a>
<a id="tocsgovernmentoppositionpost"></a>

```json
{
  "createdWhen": "1970-01-01T00:00:00Z",
  "governmentDepartments": [
    {
      "id": 0,
      "imageUrl": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "hansardName": "string",
  "id": 0,
  "name": "string",
  "order": 0,
  "postHolders": [
    {
      "endDate": "1970-01-01T00:00:00Z",
      "isPaid": true,
      "layingMinisterName": "string",
      "member": {
        "links": [
          {
            "href": "string",
            "method": "string",
            "rel": "string"
          }
        ],
        "value": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        }
      },
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdWhen|string(date-time)|false|none|none|
|governmentDepartments|[[GovernmentDepartment](#schemagovernmentdepartment)]|false|none|none|
|hansardName|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|postHolders|[[GovernmentOppositionPostHolder](#schemagovernmentoppositionpostholder)]|false|none|none|
|type|[PostType](#schemaposttype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|0|
|type|1|
|type|2|

<h2 id="tocS_GovernmentOppositionPostHolder">GovernmentOppositionPostHolder</h2>
<!-- backwards compatibility -->
<a id="schemagovernmentoppositionpostholder"></a>
<a id="schema_GovernmentOppositionPostHolder"></a>
<a id="tocSgovernmentoppositionpostholder"></a>
<a id="tocsgovernmentoppositionpostholder"></a>

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "isPaid": true,
  "layingMinisterName": "string",
  "member": {
    "links": [
      {
        "href": "string",
        "method": "string",
        "rel": "string"
      }
    ],
    "value": {
      "gender": "string",
      "id": 0,
      "latestHouseMembership": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      },
      "latestParty": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      },
      "nameAddressAs": "string",
      "nameDisplayAs": "string",
      "nameFullTitle": "string",
      "nameListAs": "string",
      "thumbnailUrl": "string"
    }
  },
  "startDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date-time) \| null|false|none|none|
|isPaid|boolean|false|none|none|
|layingMinisterName|string \| null|false|none|none|
|member|[MemberItem](#schemamemberitem)|false|none|none|
|startDate|string(date-time)|false|none|none|

<h2 id="tocS_GovernmentOppositionPostItem">GovernmentOppositionPostItem</h2>
<!-- backwards compatibility -->
<a id="schemagovernmentoppositionpostitem"></a>
<a id="schema_GovernmentOppositionPostItem"></a>
<a id="tocSgovernmentoppositionpostitem"></a>
<a id="tocsgovernmentoppositionpostitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "createdWhen": "1970-01-01T00:00:00Z",
    "governmentDepartments": [
      {
        "id": 0,
        "imageUrl": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "hansardName": "string",
    "id": 0,
    "name": "string",
    "order": 0,
    "postHolders": [
      {
        "endDate": "1970-01-01T00:00:00Z",
        "isPaid": true,
        "layingMinisterName": "string",
        "member": {
          "links": [
            {
              "href": "string",
              "method": "string",
              "rel": "string"
            }
          ],
          "value": {
            "gender": "string",
            "id": 0,
            "latestHouseMembership": {
              "house": 1,
              "membershipEndDate": "1970-01-01T00:00:00Z",
              "membershipEndReason": "string",
              "membershipEndReasonId": 0,
              "membershipEndReasonNotes": "string",
              "membershipFrom": "string",
              "membershipFromId": 0,
              "membershipStartDate": "1970-01-01T00:00:00Z",
              "membershipStatus": {
                "status": 0,
                "statusDescription": "string",
                "statusId": 0,
                "statusIsActive": true,
                "statusNotes": "string",
                "statusStartDate": "1970-01-01T00:00:00Z"
              }
            },
            "latestParty": {
              "abbreviation": "string",
              "backgroundColour": "string",
              "foregroundColour": "string",
              "governmentType": 0,
              "id": 0,
              "isIndependentParty": true,
              "isLordsMainParty": true,
              "isLordsSpiritualParty": true,
              "name": "string"
            },
            "nameAddressAs": "string",
            "nameDisplayAs": "string",
            "nameFullTitle": "string",
            "nameListAs": "string",
            "thumbnailUrl": "string"
          }
        },
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "type": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[GovernmentOppositionPost](#schemagovernmentoppositionpost)|false|none|none|

<h2 id="tocS_GovernmentType">GovernmentType</h2>
<!-- backwards compatibility -->
<a id="schemagovernmenttype"></a>
<a id="schema_GovernmentType"></a>
<a id="tocSgovernmenttype"></a>
<a id="tocsgovernmenttype"></a>

```json
0
```

<h2 id="tocS_GroupedQuestion">GroupedQuestion</h2>
<!-- backwards compatibility -->
<a id="schemagroupedquestion"></a>
<a id="schema_GroupedQuestion"></a>
<a id="tocSgroupedquestion"></a>
<a id="tocsgroupedquestion"></a>

```json
{
  "dateTabled": "1970-01-01T00:00:00Z",
  "questionUin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTabled|string(date-time)|false|none|none|
|questionUin|string \| null|false|none|none|

<h2 id="tocS_House">House</h2>
<!-- backwards compatibility -->
<a id="schemahouse"></a>
<a id="schema_House"></a>
<a id="tocShouse"></a>
<a id="tocshouse"></a>

```json
1
```

<h2 id="tocS_HouseMembership">HouseMembership</h2>
<!-- backwards compatibility -->
<a id="schemahousemembership"></a>
<a id="schema_HouseMembership"></a>
<a id="tocShousemembership"></a>
<a id="tocshousemembership"></a>

```json
{
  "house": 1,
  "membershipEndDate": "1970-01-01T00:00:00Z",
  "membershipEndReason": "string",
  "membershipEndReasonId": 0,
  "membershipEndReasonNotes": "string",
  "membershipFrom": "string",
  "membershipFromId": 0,
  "membershipStartDate": "1970-01-01T00:00:00Z",
  "membershipStatus": {
    "status": 0,
    "statusDescription": "string",
    "statusId": 0,
    "statusIsActive": true,
    "statusNotes": "string",
    "statusStartDate": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|house|[House](#schemahouse)|false|none|none|
|membershipEndDate|string(date-time) \| null|false|none|none|
|membershipEndReason|string \| null|false|none|none|
|membershipEndReasonId|integer(int32) \| null|false|none|none|
|membershipEndReasonNotes|string \| null|false|none|none|
|membershipFrom|string \| null|false|none|none|
|membershipFromId|integer(int32) \| null|false|none|none|
|membershipStartDate|string(date-time) \| null|false|none|none|
|membershipStatus|[HouseMembershipStatus](#schemahousemembershipstatus)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|1|
|house|2|

<h2 id="tocS_HouseMembershipStatus">HouseMembershipStatus</h2>
<!-- backwards compatibility -->
<a id="schemahousemembershipstatus"></a>
<a id="schema_HouseMembershipStatus"></a>
<a id="tocShousemembershipstatus"></a>
<a id="tocshousemembershipstatus"></a>

```json
{
  "status": 0,
  "statusDescription": "string",
  "statusId": 0,
  "statusIsActive": true,
  "statusNotes": "string",
  "statusStartDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[MemberStatus](#schemamemberstatus)|false|none|none|
|statusDescription|string \| null|false|none|none|
|statusId|integer(int32) \| null|false|none|none|
|statusIsActive|boolean|false|none|none|
|statusNotes|string \| null|false|none|none|
|statusStartDate|string(date-time) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "href": "string",
  "method": "string",
  "rel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string \| null|false|none|none|
|method|string \| null|false|none|none|
|rel|string \| null|false|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "childContexts": [
    {
      "id": 0,
      "name": "string",
      "type": 0,
      "typeName": "string"
    }
  ],
  "context": {
    "id": 0,
    "name": "string",
    "type": 0,
    "typeName": "string"
  },
  "parentContext": {
    "id": 0,
    "name": "string",
    "type": 0,
    "typeName": "string"
  },
  "stateOfTheParties": [
    {
      "female": 0,
      "male": 0,
      "nonBinary": 0,
      "party": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      },
      "total": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childContexts|[[LocationContext](#schemalocationcontext)]|false|none|none|
|context|[LocationContext](#schemalocationcontext)|false|none|none|
|parentContext|[LocationContext](#schemalocationcontext)|false|none|none|
|stateOfTheParties|[[PartySeatCount](#schemapartyseatcount)]|false|none|none|

<h2 id="tocS_LocationContext">LocationContext</h2>
<!-- backwards compatibility -->
<a id="schemalocationcontext"></a>
<a id="schema_LocationContext"></a>
<a id="tocSlocationcontext"></a>
<a id="tocslocationcontext"></a>

```json
{
  "id": 0,
  "name": "string",
  "type": 0,
  "typeName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|type|[LocationType](#schemalocationtype)|false|none|none|
|typeName|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|0|
|type|1|
|type|2|
|type|3|

<h2 id="tocS_LocationItem">LocationItem</h2>
<!-- backwards compatibility -->
<a id="schemalocationitem"></a>
<a id="schema_LocationItem"></a>
<a id="tocSlocationitem"></a>
<a id="tocslocationitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "childContexts": [
      {
        "id": 0,
        "name": "string",
        "type": 0,
        "typeName": "string"
      }
    ],
    "context": {
      "id": 0,
      "name": "string",
      "type": 0,
      "typeName": "string"
    },
    "parentContext": {
      "id": 0,
      "name": "string",
      "type": 0,
      "typeName": "string"
    },
    "stateOfTheParties": [
      {
        "female": 0,
        "male": 0,
        "nonBinary": 0,
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "total": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[Location](#schemalocation)|false|none|none|

<h2 id="tocS_LocationType">LocationType</h2>
<!-- backwards compatibility -->
<a id="schemalocationtype"></a>
<a id="schema_LocationType"></a>
<a id="tocSlocationtype"></a>
<a id="tocslocationtype"></a>

```json
0
```

<h2 id="tocS_LordsByType">LordsByType</h2>
<!-- backwards compatibility -->
<a id="schemalordsbytype"></a>
<a id="schema_LordsByType"></a>
<a id="tocSlordsbytype"></a>
<a id="tocslordsbytype"></a>

```json
{
  "bishop": 0,
  "hereditary": 0,
  "life": 0,
  "party": {
    "abbreviation": "string",
    "backgroundColour": "string",
    "foregroundColour": "string",
    "governmentType": 0,
    "id": 0,
    "isIndependentParty": true,
    "isLordsMainParty": true,
    "isLordsSpiritualParty": true,
    "name": "string"
  },
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bishop|integer(int32)|false|none|none|
|hereditary|integer(int32)|false|none|none|
|life|integer(int32)|false|none|none|
|party|[Party](#schemaparty)|false|none|none|
|total|integer(int32)|false|none|none|

<h2 id="tocS_LordsByTypeItem">LordsByTypeItem</h2>
<!-- backwards compatibility -->
<a id="schemalordsbytypeitem"></a>
<a id="schema_LordsByTypeItem"></a>
<a id="tocSlordsbytypeitem"></a>
<a id="tocslordsbytypeitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "bishop": 0,
    "hereditary": 0,
    "life": 0,
    "party": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    },
    "total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[LordsByType](#schemalordsbytype)|false|none|none|

<h2 id="tocS_LordsByTypeMembersServiceSearchResult">LordsByTypeMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemalordsbytypemembersservicesearchresult"></a>
<a id="schema_LordsByTypeMembersServiceSearchResult"></a>
<a id="tocSlordsbytypemembersservicesearchresult"></a>
<a id="tocslordsbytypemembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "bishop": 0,
        "hereditary": 0,
        "life": 0,
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "total": 0
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[LordsByTypeItem](#schemalordsbytypeitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "gender": "string",
  "id": 0,
  "latestHouseMembership": {
    "house": 1,
    "membershipEndDate": "1970-01-01T00:00:00Z",
    "membershipEndReason": "string",
    "membershipEndReasonId": 0,
    "membershipEndReasonNotes": "string",
    "membershipFrom": "string",
    "membershipFromId": 0,
    "membershipStartDate": "1970-01-01T00:00:00Z",
    "membershipStatus": {
      "status": 0,
      "statusDescription": "string",
      "statusId": 0,
      "statusIsActive": true,
      "statusNotes": "string",
      "statusStartDate": "1970-01-01T00:00:00Z"
    }
  },
  "latestParty": {
    "abbreviation": "string",
    "backgroundColour": "string",
    "foregroundColour": "string",
    "governmentType": 0,
    "id": 0,
    "isIndependentParty": true,
    "isLordsMainParty": true,
    "isLordsSpiritualParty": true,
    "name": "string"
  },
  "nameAddressAs": "string",
  "nameDisplayAs": "string",
  "nameFullTitle": "string",
  "nameListAs": "string",
  "thumbnailUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gender|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|latestHouseMembership|[HouseMembership](#schemahousemembership)|false|none|none|
|latestParty|[Party](#schemaparty)|false|none|none|
|nameAddressAs|string \| null|false|none|none|
|nameDisplayAs|string \| null|false|none|none|
|nameFullTitle|string \| null|false|none|none|
|nameListAs|string \| null|false|none|none|
|thumbnailUrl|string \| null|false|none|none|

<h2 id="tocS_MemberBiography">MemberBiography</h2>
<!-- backwards compatibility -->
<a id="schemamemberbiography"></a>
<a id="schema_MemberBiography"></a>
<a id="tocSmemberbiography"></a>
<a id="tocsmemberbiography"></a>

```json
{
  "committeeMemberships": [
    {
      "additionalInfo": "string",
      "additionalInfoLink": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "house": 1,
      "id": 0,
      "name": "string",
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "electionsContested": [
    {
      "additionalInfo": "string",
      "additionalInfoLink": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "house": 1,
      "id": 0,
      "name": "string",
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "governmentPosts": [
    {
      "additionalInfo": "string",
      "additionalInfoLink": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "house": 1,
      "id": 0,
      "name": "string",
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "houseMemberships": [
    {
      "additionalInfo": "string",
      "additionalInfoLink": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "house": 1,
      "id": 0,
      "name": "string",
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "oppositionPosts": [
    {
      "additionalInfo": "string",
      "additionalInfoLink": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "house": 1,
      "id": 0,
      "name": "string",
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "otherPosts": [
    {
      "additionalInfo": "string",
      "additionalInfoLink": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "house": 1,
      "id": 0,
      "name": "string",
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "partyAffiliations": [
    {
      "additionalInfo": "string",
      "additionalInfoLink": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "house": 1,
      "id": 0,
      "name": "string",
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "representations": [
    {
      "additionalInfo": "string",
      "additionalInfoLink": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "house": 1,
      "id": 0,
      "name": "string",
      "startDate": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|committeeMemberships|[[BiographyItem](#schemabiographyitem)]|false|none|none|
|electionsContested|[[BiographyItem](#schemabiographyitem)]|false|none|none|
|governmentPosts|[[BiographyItem](#schemabiographyitem)]|false|none|none|
|houseMemberships|[[BiographyItem](#schemabiographyitem)]|false|none|none|
|oppositionPosts|[[BiographyItem](#schemabiographyitem)]|false|none|none|
|otherPosts|[[BiographyItem](#schemabiographyitem)]|false|none|none|
|partyAffiliations|[[BiographyItem](#schemabiographyitem)]|false|none|none|
|representations|[[BiographyItem](#schemabiographyitem)]|false|none|none|

<h2 id="tocS_MemberBiographyItem">MemberBiographyItem</h2>
<!-- backwards compatibility -->
<a id="schemamemberbiographyitem"></a>
<a id="schema_MemberBiographyItem"></a>
<a id="tocSmemberbiographyitem"></a>
<a id="tocsmemberbiographyitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "committeeMemberships": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "electionsContested": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "governmentPosts": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "houseMemberships": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "oppositionPosts": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "otherPosts": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "partyAffiliations": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "representations": [
      {
        "additionalInfo": "string",
        "additionalInfoLink": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "house": 1,
        "id": 0,
        "name": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[MemberBiography](#schemamemberbiography)|false|none|none|

<h2 id="tocS_MemberFocus">MemberFocus</h2>
<!-- backwards compatibility -->
<a id="schemamemberfocus"></a>
<a id="schema_MemberFocus"></a>
<a id="tocSmemberfocus"></a>
<a id="tocsmemberfocus"></a>

```json
{
  "category": "string",
  "focus": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string \| null|false|none|none|
|focus|[string]|false|none|none|

<h2 id="tocS_MemberFocusListItem">MemberFocusListItem</h2>
<!-- backwards compatibility -->
<a id="schemamemberfocuslistitem"></a>
<a id="schema_MemberFocusListItem"></a>
<a id="tocSmemberfocuslistitem"></a>
<a id="tocsmemberfocuslistitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "category": "string",
      "focus": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[[MemberFocus](#schemamemberfocus)]|false|none|none|

<h2 id="tocS_MemberHistory">MemberHistory</h2>
<!-- backwards compatibility -->
<a id="schemamemberhistory"></a>
<a id="schema_MemberHistory"></a>
<a id="tocSmemberhistory"></a>
<a id="tocsmemberhistory"></a>

```json
{
  "houseMembershipHistory": [
    {
      "house": 1,
      "membershipEndDate": "1970-01-01T00:00:00Z",
      "membershipEndReason": "string",
      "membershipEndReasonId": 0,
      "membershipEndReasonNotes": "string",
      "membershipFrom": "string",
      "membershipFromId": 0,
      "membershipStartDate": "1970-01-01T00:00:00Z",
      "membershipStatus": {
        "status": 0,
        "statusDescription": "string",
        "statusId": 0,
        "statusIsActive": true,
        "statusNotes": "string",
        "statusStartDate": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "id": 0,
  "nameHistory": [
    {
      "endDate": "1970-01-01T00:00:00Z",
      "nameAddressAs": "string",
      "nameDisplayAs": "string",
      "nameFullTitle": "string",
      "nameListAs": "string",
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "partyHistory": [
    {
      "endDate": "1970-01-01T00:00:00Z",
      "party": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      },
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "thumbnailUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|houseMembershipHistory|[[HouseMembership](#schemahousemembership)]|false|none|none|
|id|integer(int32)|false|none|none|
|nameHistory|[[MemberName](#schemamembername)]|false|none|none|
|partyHistory|[[MemberParty](#schemamemberparty)]|false|none|none|
|thumbnailUrl|string \| null|false|none|none|

<h2 id="tocS_MemberHistoryItem">MemberHistoryItem</h2>
<!-- backwards compatibility -->
<a id="schemamemberhistoryitem"></a>
<a id="schema_MemberHistoryItem"></a>
<a id="tocSmemberhistoryitem"></a>
<a id="tocsmemberhistoryitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "houseMembershipHistory": [
      {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      }
    ],
    "id": 0,
    "nameHistory": [
      {
        "endDate": "1970-01-01T00:00:00Z",
        "nameAddressAs": "string",
        "nameDisplayAs": "string",
        "nameFullTitle": "string",
        "nameListAs": "string",
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "partyHistory": [
      {
        "endDate": "1970-01-01T00:00:00Z",
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "startDate": "1970-01-01T00:00:00Z"
      }
    ],
    "thumbnailUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[MemberHistory](#schemamemberhistory)|false|none|none|

<h2 id="tocS_MemberItem">MemberItem</h2>
<!-- backwards compatibility -->
<a id="schemamemberitem"></a>
<a id="schema_MemberItem"></a>
<a id="tocSmemberitem"></a>
<a id="tocsmemberitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "gender": "string",
    "id": 0,
    "latestHouseMembership": {
      "house": 1,
      "membershipEndDate": "1970-01-01T00:00:00Z",
      "membershipEndReason": "string",
      "membershipEndReasonId": 0,
      "membershipEndReasonNotes": "string",
      "membershipFrom": "string",
      "membershipFromId": 0,
      "membershipStartDate": "1970-01-01T00:00:00Z",
      "membershipStatus": {
        "status": 0,
        "statusDescription": "string",
        "statusId": 0,
        "statusIsActive": true,
        "statusNotes": "string",
        "statusStartDate": "1970-01-01T00:00:00Z"
      }
    },
    "latestParty": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    },
    "nameAddressAs": "string",
    "nameDisplayAs": "string",
    "nameFullTitle": "string",
    "nameListAs": "string",
    "thumbnailUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[Member](#schemamember)|false|none|none|

<h2 id="tocS_MemberMembersServiceSearchResult">MemberMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemamembermembersservicesearchresult"></a>
<a id="schema_MemberMembersServiceSearchResult"></a>
<a id="tocSmembermembersservicesearchresult"></a>
<a id="tocsmembermembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "gender": "string",
        "id": 0,
        "latestHouseMembership": {
          "house": 1,
          "membershipEndDate": "1970-01-01T00:00:00Z",
          "membershipEndReason": "string",
          "membershipEndReasonId": 0,
          "membershipEndReasonNotes": "string",
          "membershipFrom": "string",
          "membershipFromId": 0,
          "membershipStartDate": "1970-01-01T00:00:00Z",
          "membershipStatus": {
            "status": 0,
            "statusDescription": "string",
            "statusId": 0,
            "statusIsActive": true,
            "statusNotes": "string",
            "statusStartDate": "1970-01-01T00:00:00Z"
          }
        },
        "latestParty": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "nameAddressAs": "string",
        "nameDisplayAs": "string",
        "nameFullTitle": "string",
        "nameListAs": "string",
        "thumbnailUrl": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[MemberItem](#schemamemberitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_MemberName">MemberName</h2>
<!-- backwards compatibility -->
<a id="schemamembername"></a>
<a id="schema_MemberName"></a>
<a id="tocSmembername"></a>
<a id="tocsmembername"></a>

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "nameAddressAs": "string",
  "nameDisplayAs": "string",
  "nameFullTitle": "string",
  "nameListAs": "string",
  "startDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date-time) \| null|false|none|none|
|nameAddressAs|string \| null|false|none|none|
|nameDisplayAs|string \| null|false|none|none|
|nameFullTitle|string \| null|false|none|none|
|nameListAs|string \| null|false|none|none|
|startDate|string(date-time)|false|none|none|

<h2 id="tocS_MemberParty">MemberParty</h2>
<!-- backwards compatibility -->
<a id="schemamemberparty"></a>
<a id="schema_MemberParty"></a>
<a id="tocSmemberparty"></a>
<a id="tocsmemberparty"></a>

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "party": {
    "abbreviation": "string",
    "backgroundColour": "string",
    "foregroundColour": "string",
    "governmentType": 0,
    "id": 0,
    "isIndependentParty": true,
    "isLordsMainParty": true,
    "isLordsSpiritualParty": true,
    "name": "string"
  },
  "startDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date-time) \| null|false|none|none|
|party|[Party](#schemaparty)|false|none|none|
|startDate|string(date-time)|false|none|none|

<h2 id="tocS_MemberStatus">MemberStatus</h2>
<!-- backwards compatibility -->
<a id="schemamemberstatus"></a>
<a id="schema_MemberStatus"></a>
<a id="tocSmemberstatus"></a>
<a id="tocsmemberstatus"></a>

```json
0
```

<h2 id="tocS_MembersInterests">MembersInterests</h2>
<!-- backwards compatibility -->
<a id="schemamembersinterests"></a>
<a id="schema_MembersInterests"></a>
<a id="tocSmembersinterests"></a>
<a id="tocsmembersinterests"></a>

```json
{
  "interestCategories": [
    {
      "id": 0,
      "interests": [
        {
          "childInterests": [
            {}
          ],
          "createdWhen": "1970-01-01T00:00:00Z",
          "deletedWhen": "1970-01-01T00:00:00Z",
          "id": 0,
          "interest": "string",
          "isCorrection": true,
          "lastAmendedWhen": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "sortOrder": 0
    }
  ],
  "member": {
    "gender": "string",
    "id": 0,
    "latestHouseMembership": {
      "house": 1,
      "membershipEndDate": "1970-01-01T00:00:00Z",
      "membershipEndReason": "string",
      "membershipEndReasonId": 0,
      "membershipEndReasonNotes": "string",
      "membershipFrom": "string",
      "membershipFromId": 0,
      "membershipStartDate": "1970-01-01T00:00:00Z",
      "membershipStatus": {
        "status": 0,
        "statusDescription": "string",
        "statusId": 0,
        "statusIsActive": true,
        "statusNotes": "string",
        "statusStartDate": "1970-01-01T00:00:00Z"
      }
    },
    "latestParty": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    },
    "nameAddressAs": "string",
    "nameDisplayAs": "string",
    "nameFullTitle": "string",
    "nameListAs": "string",
    "thumbnailUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interestCategories|[[RegisteredInterestCategory](#schemaregisteredinterestcategory)]|false|none|none|
|member|[Member](#schemamember)|false|none|none|

<h2 id="tocS_MembersInterestsItem">MembersInterestsItem</h2>
<!-- backwards compatibility -->
<a id="schemamembersinterestsitem"></a>
<a id="schema_MembersInterestsItem"></a>
<a id="tocSmembersinterestsitem"></a>
<a id="tocsmembersinterestsitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "interestCategories": [
      {
        "id": 0,
        "interests": [
          {
            "childInterests": [
              {}
            ],
            "createdWhen": "1970-01-01T00:00:00Z",
            "deletedWhen": "1970-01-01T00:00:00Z",
            "id": 0,
            "interest": "string",
            "isCorrection": true,
            "lastAmendedWhen": "1970-01-01T00:00:00Z"
          }
        ],
        "name": "string",
        "sortOrder": 0
      }
    ],
    "member": {
      "gender": "string",
      "id": 0,
      "latestHouseMembership": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      },
      "latestParty": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      },
      "nameAddressAs": "string",
      "nameDisplayAs": "string",
      "nameFullTitle": "string",
      "nameListAs": "string",
      "thumbnailUrl": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[MembersInterests](#schemamembersinterests)|false|none|none|

<h2 id="tocS_MembersInterestsMembersServiceSearchResult">MembersInterestsMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemamembersinterestsmembersservicesearchresult"></a>
<a id="schema_MembersInterestsMembersServiceSearchResult"></a>
<a id="tocSmembersinterestsmembersservicesearchresult"></a>
<a id="tocsmembersinterestsmembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "interestCategories": [
          {
            "id": 0,
            "interests": [
              {
                "childInterests": [
                  {}
                ],
                "createdWhen": "1970-01-01T00:00:00Z",
                "deletedWhen": "1970-01-01T00:00:00Z",
                "id": 0,
                "interest": "string",
                "isCorrection": true,
                "lastAmendedWhen": "1970-01-01T00:00:00Z"
              }
            ],
            "name": "string",
            "sortOrder": 0
          }
        ],
        "member": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        }
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[MembersInterestsItem](#schemamembersinterestsitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_MembersStaff">MembersStaff</h2>
<!-- backwards compatibility -->
<a id="schemamembersstaff"></a>
<a id="schema_MembersStaff"></a>
<a id="tocSmembersstaff"></a>
<a id="tocsmembersstaff"></a>

```json
{
  "member": {
    "gender": "string",
    "id": 0,
    "latestHouseMembership": {
      "house": 1,
      "membershipEndDate": "1970-01-01T00:00:00Z",
      "membershipEndReason": "string",
      "membershipEndReasonId": 0,
      "membershipEndReasonNotes": "string",
      "membershipFrom": "string",
      "membershipFromId": 0,
      "membershipStartDate": "1970-01-01T00:00:00Z",
      "membershipStatus": {
        "status": 0,
        "statusDescription": "string",
        "statusId": 0,
        "statusIsActive": true,
        "statusNotes": "string",
        "statusStartDate": "1970-01-01T00:00:00Z"
      }
    },
    "latestParty": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    },
    "nameAddressAs": "string",
    "nameDisplayAs": "string",
    "nameFullTitle": "string",
    "nameListAs": "string",
    "thumbnailUrl": "string"
  },
  "staff": [
    {
      "details": "string",
      "forename": "string",
      "surname": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|[Member](#schemamember)|false|none|none|
|staff|[[Staff](#schemastaff)]|false|none|none|

<h2 id="tocS_MembersStaffItem">MembersStaffItem</h2>
<!-- backwards compatibility -->
<a id="schemamembersstaffitem"></a>
<a id="schema_MembersStaffItem"></a>
<a id="tocSmembersstaffitem"></a>
<a id="tocsmembersstaffitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "member": {
      "gender": "string",
      "id": 0,
      "latestHouseMembership": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      },
      "latestParty": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      },
      "nameAddressAs": "string",
      "nameDisplayAs": "string",
      "nameFullTitle": "string",
      "nameListAs": "string",
      "thumbnailUrl": "string"
    },
    "staff": [
      {
        "details": "string",
        "forename": "string",
        "surname": "string",
        "title": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[MembersStaff](#schemamembersstaff)|false|none|none|

<h2 id="tocS_MembersStaffMembersServiceSearchResult">MembersStaffMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemamembersstaffmembersservicesearchresult"></a>
<a id="schema_MembersStaffMembersServiceSearchResult"></a>
<a id="tocSmembersstaffmembersservicesearchresult"></a>
<a id="tocsmembersstaffmembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "member": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        },
        "staff": [
          {
            "details": "string",
            "forename": "string",
            "surname": "string",
            "title": "string"
          }
        ]
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[MembersStaffItem](#schemamembersstaffitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_Party">Party</h2>
<!-- backwards compatibility -->
<a id="schemaparty"></a>
<a id="schema_Party"></a>
<a id="tocSparty"></a>
<a id="tocsparty"></a>

```json
{
  "abbreviation": "string",
  "backgroundColour": "string",
  "foregroundColour": "string",
  "governmentType": 0,
  "id": 0,
  "isIndependentParty": true,
  "isLordsMainParty": true,
  "isLordsSpiritualParty": true,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string \| null|false|none|none|
|backgroundColour|string \| null|false|none|none|
|foregroundColour|string \| null|false|none|none|
|governmentType|[GovernmentType](#schemagovernmenttype)|false|none|none|
|id|integer(int32)|false|none|none|
|isIndependentParty|boolean|false|read-only|none|
|isLordsMainParty|boolean|false|none|none|
|isLordsSpiritualParty|boolean|false|none|none|
|name|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|governmentType|0|
|governmentType|1|
|governmentType|2|
|governmentType|3|

<h2 id="tocS_PartyItem">PartyItem</h2>
<!-- backwards compatibility -->
<a id="schemapartyitem"></a>
<a id="schema_PartyItem"></a>
<a id="tocSpartyitem"></a>
<a id="tocspartyitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "abbreviation": "string",
    "backgroundColour": "string",
    "foregroundColour": "string",
    "governmentType": 0,
    "id": 0,
    "isIndependentParty": true,
    "isLordsMainParty": true,
    "isLordsSpiritualParty": true,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[Party](#schemaparty)|false|none|none|

<h2 id="tocS_PartyMembersServiceSearchResult">PartyMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemapartymembersservicesearchresult"></a>
<a id="schema_PartyMembersServiceSearchResult"></a>
<a id="tocSpartymembersservicesearchresult"></a>
<a id="tocspartymembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[PartyItem](#schemapartyitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_PartySeatCount">PartySeatCount</h2>
<!-- backwards compatibility -->
<a id="schemapartyseatcount"></a>
<a id="schema_PartySeatCount"></a>
<a id="tocSpartyseatcount"></a>
<a id="tocspartyseatcount"></a>

```json
{
  "female": 0,
  "male": 0,
  "nonBinary": 0,
  "party": {
    "abbreviation": "string",
    "backgroundColour": "string",
    "foregroundColour": "string",
    "governmentType": 0,
    "id": 0,
    "isIndependentParty": true,
    "isLordsMainParty": true,
    "isLordsSpiritualParty": true,
    "name": "string"
  },
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|female|integer(int32) \| null|false|none|none|
|male|integer(int32) \| null|false|none|none|
|nonBinary|integer(int32) \| null|false|none|none|
|party|[Party](#schemaparty)|false|none|none|
|total|integer(int32)|false|none|none|

<h2 id="tocS_PartySeatCountItem">PartySeatCountItem</h2>
<!-- backwards compatibility -->
<a id="schemapartyseatcountitem"></a>
<a id="schema_PartySeatCountItem"></a>
<a id="tocSpartyseatcountitem"></a>
<a id="tocspartyseatcountitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "female": 0,
    "male": 0,
    "nonBinary": 0,
    "party": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    },
    "total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[PartySeatCount](#schemapartyseatcount)|false|none|none|

<h2 id="tocS_PartySeatCountMembersServiceSearchResult">PartySeatCountMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemapartyseatcountmembersservicesearchresult"></a>
<a id="schema_PartySeatCountMembersServiceSearchResult"></a>
<a id="tocSpartyseatcountmembersservicesearchresult"></a>
<a id="tocspartyseatcountmembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "female": 0,
        "male": 0,
        "nonBinary": 0,
        "party": {
          "abbreviation": "string",
          "backgroundColour": "string",
          "foregroundColour": "string",
          "governmentType": 0,
          "id": 0,
          "isIndependentParty": true,
          "isLordsMainParty": true,
          "isLordsSpiritualParty": true,
          "name": "string"
        },
        "total": 0
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[PartySeatCountItem](#schemapartyseatcountitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_PortraitCropEnum">PortraitCropEnum</h2>
<!-- backwards compatibility -->
<a id="schemaportraitcropenum"></a>
<a id="schema_PortraitCropEnum"></a>
<a id="tocSportraitcropenum"></a>
<a id="tocsportraitcropenum"></a>

```json
0
```

<h2 id="tocS_PostType">PostType</h2>
<!-- backwards compatibility -->
<a id="schemaposttype"></a>
<a id="schema_PostType"></a>
<a id="tocSposttype"></a>
<a id="tocsposttype"></a>

```json
0
```

<h2 id="tocS_RegisteredInterest">RegisteredInterest</h2>
<!-- backwards compatibility -->
<a id="schemaregisteredinterest"></a>
<a id="schema_RegisteredInterest"></a>
<a id="tocSregisteredinterest"></a>
<a id="tocsregisteredinterest"></a>

```json
{
  "childInterests": [
    {
      "childInterests": [
        {}
      ],
      "createdWhen": "1970-01-01T00:00:00Z",
      "deletedWhen": "1970-01-01T00:00:00Z",
      "id": 0,
      "interest": "string",
      "isCorrection": true,
      "lastAmendedWhen": "1970-01-01T00:00:00Z"
    }
  ],
  "createdWhen": "1970-01-01T00:00:00Z",
  "deletedWhen": "1970-01-01T00:00:00Z",
  "id": 0,
  "interest": "string",
  "isCorrection": true,
  "lastAmendedWhen": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childInterests|[[RegisteredInterest](#schemaregisteredinterest)]|false|none|none|
|createdWhen|string(date-time) \| null|false|none|none|
|deletedWhen|string(date-time) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|interest|string \| null|false|none|none|
|isCorrection|boolean|false|none|none|
|lastAmendedWhen|string(date-time) \| null|false|none|none|

<h2 id="tocS_RegisteredInterestCategory">RegisteredInterestCategory</h2>
<!-- backwards compatibility -->
<a id="schemaregisteredinterestcategory"></a>
<a id="schema_RegisteredInterestCategory"></a>
<a id="tocSregisteredinterestcategory"></a>
<a id="tocsregisteredinterestcategory"></a>

```json
{
  "id": 0,
  "interests": [
    {
      "childInterests": [
        {}
      ],
      "createdWhen": "1970-01-01T00:00:00Z",
      "deletedWhen": "1970-01-01T00:00:00Z",
      "id": 0,
      "interest": "string",
      "isCorrection": true,
      "lastAmendedWhen": "1970-01-01T00:00:00Z"
    }
  ],
  "name": "string",
  "sortOrder": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|interests|[[RegisteredInterest](#schemaregisteredinterest)]|false|none|none|
|name|string \| null|false|none|none|
|sortOrder|integer(int32)|false|none|none|

<h2 id="tocS_RegisteredInterestCategoryListItem">RegisteredInterestCategoryListItem</h2>
<!-- backwards compatibility -->
<a id="schemaregisteredinterestcategorylistitem"></a>
<a id="schema_RegisteredInterestCategoryListItem"></a>
<a id="tocSregisteredinterestcategorylistitem"></a>
<a id="tocsregisteredinterestcategorylistitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "id": 0,
      "interests": [
        {
          "childInterests": [
            {}
          ],
          "createdWhen": "1970-01-01T00:00:00Z",
          "deletedWhen": "1970-01-01T00:00:00Z",
          "id": 0,
          "interest": "string",
          "isCorrection": true,
          "lastAmendedWhen": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "sortOrder": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[[RegisteredInterestCategory](#schemaregisteredinterestcategory)]|false|none|none|

<h2 id="tocS_Staff">Staff</h2>
<!-- backwards compatibility -->
<a id="schemastaff"></a>
<a id="schema_Staff"></a>
<a id="tocSstaff"></a>
<a id="tocsstaff"></a>

```json
{
  "details": "string",
  "forename": "string",
  "surname": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string \| null|false|none|none|
|forename|string \| null|false|none|none|
|surname|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_StaffListItem">StaffListItem</h2>
<!-- backwards compatibility -->
<a id="schemastafflistitem"></a>
<a id="schema_StaffListItem"></a>
<a id="tocSstafflistitem"></a>
<a id="tocsstafflistitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": [
    {
      "details": "string",
      "forename": "string",
      "surname": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[[Staff](#schemastaff)]|false|none|none|

<h2 id="tocS_StringItem">StringItem</h2>
<!-- backwards compatibility -->
<a id="schemastringitem"></a>
<a id="schema_StringItem"></a>
<a id="tocSstringitem"></a>
<a id="tocsstringitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_Vote">Vote</h2>
<!-- backwards compatibility -->
<a id="schemavote"></a>
<a id="schema_Vote"></a>
<a id="tocSvote"></a>
<a id="tocsvote"></a>

```json
{
  "actedAsTeller": true,
  "date": "1970-01-01T00:00:00Z",
  "divisionNumber": 0,
  "house": 1,
  "id": 0,
  "inAffirmativeLobby": true,
  "numberAgainst": 0,
  "numberInFavour": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actedAsTeller|boolean|false|none|none|
|date|string(date-time)|false|none|none|
|divisionNumber|integer(int32)|false|none|none|
|house|[House](#schemahouse)|false|none|none|
|id|integer(int32)|false|none|none|
|inAffirmativeLobby|boolean|false|none|none|
|numberAgainst|integer(int32)|false|none|none|
|numberInFavour|integer(int32)|false|none|none|
|title|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|1|
|house|2|

<h2 id="tocS_VoteItem">VoteItem</h2>
<!-- backwards compatibility -->
<a id="schemavoteitem"></a>
<a id="schema_VoteItem"></a>
<a id="tocSvoteitem"></a>
<a id="tocsvoteitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "actedAsTeller": true,
    "date": "1970-01-01T00:00:00Z",
    "divisionNumber": 0,
    "house": 1,
    "id": 0,
    "inAffirmativeLobby": true,
    "numberAgainst": 0,
    "numberInFavour": 0,
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[Vote](#schemavote)|false|none|none|

<h2 id="tocS_VoteMembersServiceSearchResult">VoteMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemavotemembersservicesearchresult"></a>
<a id="schema_VoteMembersServiceSearchResult"></a>
<a id="tocSvotemembersservicesearchresult"></a>
<a id="tocsvotemembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "actedAsTeller": true,
        "date": "1970-01-01T00:00:00Z",
        "divisionNumber": 0,
        "house": 1,
        "id": 0,
        "inAffirmativeLobby": true,
        "numberAgainst": 0,
        "numberInFavour": 0,
        "title": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[VoteItem](#schemavoteitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_WrittenQuestion">WrittenQuestion</h2>
<!-- backwards compatibility -->
<a id="schemawrittenquestion"></a>
<a id="schema_WrittenQuestion"></a>
<a id="tocSwrittenquestion"></a>
<a id="tocswrittenquestion"></a>

```json
{
  "answerIsCorrection": true,
  "answerIsHolding": true,
  "answerText": "string",
  "answeringBody": {
    "department": {
      "id": 0,
      "imageUrl": "string",
      "name": "string",
      "url": "string"
    },
    "id": 0,
    "name": "string",
    "shortName": "string",
    "target": "string"
  },
  "answeringBodyId": 0,
  "answeringMember": {
    "gender": "string",
    "id": 0,
    "latestHouseMembership": {
      "house": 1,
      "membershipEndDate": "1970-01-01T00:00:00Z",
      "membershipEndReason": "string",
      "membershipEndReasonId": 0,
      "membershipEndReasonNotes": "string",
      "membershipFrom": "string",
      "membershipFromId": 0,
      "membershipStartDate": "1970-01-01T00:00:00Z",
      "membershipStatus": {
        "status": 0,
        "statusDescription": "string",
        "statusId": 0,
        "statusIsActive": true,
        "statusNotes": "string",
        "statusStartDate": "1970-01-01T00:00:00Z"
      }
    },
    "latestParty": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    },
    "nameAddressAs": "string",
    "nameDisplayAs": "string",
    "nameFullTitle": "string",
    "nameListAs": "string",
    "thumbnailUrl": "string"
  },
  "answeringMemberId": 0,
  "askingMemberId": 0,
  "attachmentCount": 0,
  "correctingMember": {
    "gender": "string",
    "id": 0,
    "latestHouseMembership": {
      "house": 1,
      "membershipEndDate": "1970-01-01T00:00:00Z",
      "membershipEndReason": "string",
      "membershipEndReasonId": 0,
      "membershipEndReasonNotes": "string",
      "membershipFrom": "string",
      "membershipFromId": 0,
      "membershipStartDate": "1970-01-01T00:00:00Z",
      "membershipStatus": {
        "status": 0,
        "statusDescription": "string",
        "statusId": 0,
        "statusIsActive": true,
        "statusNotes": "string",
        "statusStartDate": "1970-01-01T00:00:00Z"
      }
    },
    "latestParty": {
      "abbreviation": "string",
      "backgroundColour": "string",
      "foregroundColour": "string",
      "governmentType": 0,
      "id": 0,
      "isIndependentParty": true,
      "isLordsMainParty": true,
      "isLordsSpiritualParty": true,
      "name": "string"
    },
    "nameAddressAs": "string",
    "nameDisplayAs": "string",
    "nameFullTitle": "string",
    "nameListAs": "string",
    "thumbnailUrl": "string"
  },
  "correctingMemberId": 0,
  "dateAnswered": "1970-01-01T00:00:00Z",
  "dateForAnswer": "1970-01-01T00:00:00Z",
  "dateTabled": "1970-01-01T00:00:00Z",
  "groupedQuestions": [
    "string"
  ],
  "groupedQuestionsDates": [
    {
      "dateTabled": "1970-01-01T00:00:00Z",
      "questionUin": "string"
    }
  ],
  "heading": "string",
  "house": 1,
  "id": 0,
  "isNamedDay": true,
  "isWithdrawn": true,
  "memberHasInterest": true,
  "questionText": "string",
  "uin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answerIsCorrection|boolean \| null|false|none|none|
|answerIsHolding|boolean \| null|false|none|none|
|answerText|string \| null|false|none|none|
|answeringBody|[AnsweringBody](#schemaansweringbody)|false|none|none|
|answeringBodyId|integer(int32)|false|none|none|
|answeringMember|[Member](#schemamember)|false|none|none|
|answeringMemberId|integer(int32) \| null|false|none|none|
|askingMemberId|integer(int32)|false|none|none|
|attachmentCount|integer(int32)|false|none|none|
|correctingMember|[Member](#schemamember)|false|none|none|
|correctingMemberId|integer(int32) \| null|false|none|none|
|dateAnswered|string(date-time) \| null|false|none|none|
|dateForAnswer|string(date-time)|false|none|none|
|dateTabled|string(date-time)|false|none|none|
|groupedQuestions|[string]|false|none|none|
|groupedQuestionsDates|[[GroupedQuestion](#schemagroupedquestion)]|false|none|none|
|heading|string \| null|false|none|none|
|house|[House](#schemahouse)|false|none|none|
|id|integer(int32)|false|none|none|
|isNamedDay|boolean|false|none|none|
|isWithdrawn|boolean|false|none|none|
|memberHasInterest|boolean|false|none|none|
|questionText|string \| null|false|none|none|
|uin|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|1|
|house|2|

<h2 id="tocS_WrittenQuestionItem">WrittenQuestionItem</h2>
<!-- backwards compatibility -->
<a id="schemawrittenquestionitem"></a>
<a id="schema_WrittenQuestionItem"></a>
<a id="tocSwrittenquestionitem"></a>
<a id="tocswrittenquestionitem"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "answerIsCorrection": true,
    "answerIsHolding": true,
    "answerText": "string",
    "answeringBody": {
      "department": {
        "id": 0,
        "imageUrl": "string",
        "name": "string",
        "url": "string"
      },
      "id": 0,
      "name": "string",
      "shortName": "string",
      "target": "string"
    },
    "answeringBodyId": 0,
    "answeringMember": {
      "gender": "string",
      "id": 0,
      "latestHouseMembership": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      },
      "latestParty": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      },
      "nameAddressAs": "string",
      "nameDisplayAs": "string",
      "nameFullTitle": "string",
      "nameListAs": "string",
      "thumbnailUrl": "string"
    },
    "answeringMemberId": 0,
    "askingMemberId": 0,
    "attachmentCount": 0,
    "correctingMember": {
      "gender": "string",
      "id": 0,
      "latestHouseMembership": {
        "house": 1,
        "membershipEndDate": "1970-01-01T00:00:00Z",
        "membershipEndReason": "string",
        "membershipEndReasonId": 0,
        "membershipEndReasonNotes": "string",
        "membershipFrom": "string",
        "membershipFromId": 0,
        "membershipStartDate": "1970-01-01T00:00:00Z",
        "membershipStatus": {
          "status": 0,
          "statusDescription": "string",
          "statusId": 0,
          "statusIsActive": true,
          "statusNotes": "string",
          "statusStartDate": "1970-01-01T00:00:00Z"
        }
      },
      "latestParty": {
        "abbreviation": "string",
        "backgroundColour": "string",
        "foregroundColour": "string",
        "governmentType": 0,
        "id": 0,
        "isIndependentParty": true,
        "isLordsMainParty": true,
        "isLordsSpiritualParty": true,
        "name": "string"
      },
      "nameAddressAs": "string",
      "nameDisplayAs": "string",
      "nameFullTitle": "string",
      "nameListAs": "string",
      "thumbnailUrl": "string"
    },
    "correctingMemberId": 0,
    "dateAnswered": "1970-01-01T00:00:00Z",
    "dateForAnswer": "1970-01-01T00:00:00Z",
    "dateTabled": "1970-01-01T00:00:00Z",
    "groupedQuestions": [
      "string"
    ],
    "groupedQuestionsDates": [
      {
        "dateTabled": "1970-01-01T00:00:00Z",
        "questionUin": "string"
      }
    ],
    "heading": "string",
    "house": 1,
    "id": 0,
    "isNamedDay": true,
    "isWithdrawn": true,
    "memberHasInterest": true,
    "questionText": "string",
    "uin": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[WrittenQuestion](#schemawrittenquestion)|false|none|none|

<h2 id="tocS_WrittenQuestionMembersServiceSearchResult">WrittenQuestionMembersServiceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemawrittenquestionmembersservicesearchresult"></a>
<a id="schema_WrittenQuestionMembersServiceSearchResult"></a>
<a id="tocSwrittenquestionmembersservicesearchresult"></a>
<a id="tocswrittenquestionmembersservicesearchresult"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "answerIsCorrection": true,
        "answerIsHolding": true,
        "answerText": "string",
        "answeringBody": {
          "department": {
            "id": 0,
            "imageUrl": "string",
            "name": "string",
            "url": "string"
          },
          "id": 0,
          "name": "string",
          "shortName": "string",
          "target": "string"
        },
        "answeringBodyId": 0,
        "answeringMember": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        },
        "answeringMemberId": 0,
        "askingMemberId": 0,
        "attachmentCount": 0,
        "correctingMember": {
          "gender": "string",
          "id": 0,
          "latestHouseMembership": {
            "house": 1,
            "membershipEndDate": "1970-01-01T00:00:00Z",
            "membershipEndReason": "string",
            "membershipEndReasonId": 0,
            "membershipEndReasonNotes": "string",
            "membershipFrom": "string",
            "membershipFromId": 0,
            "membershipStartDate": "1970-01-01T00:00:00Z",
            "membershipStatus": {
              "status": 0,
              "statusDescription": "string",
              "statusId": 0,
              "statusIsActive": true,
              "statusNotes": "string",
              "statusStartDate": "1970-01-01T00:00:00Z"
            }
          },
          "latestParty": {
            "abbreviation": "string",
            "backgroundColour": "string",
            "foregroundColour": "string",
            "governmentType": 0,
            "id": 0,
            "isIndependentParty": true,
            "isLordsMainParty": true,
            "isLordsSpiritualParty": true,
            "name": "string"
          },
          "nameAddressAs": "string",
          "nameDisplayAs": "string",
          "nameFullTitle": "string",
          "nameListAs": "string",
          "thumbnailUrl": "string"
        },
        "correctingMemberId": 0,
        "dateAnswered": "1970-01-01T00:00:00Z",
        "dateForAnswer": "1970-01-01T00:00:00Z",
        "dateTabled": "1970-01-01T00:00:00Z",
        "groupedQuestions": [
          "string"
        ],
        "groupedQuestionsDates": [
          {
            "dateTabled": "1970-01-01T00:00:00Z",
            "questionUin": "string"
          }
        ],
        "heading": "string",
        "house": 1,
        "id": 0,
        "isNamedDay": true,
        "isWithdrawn": true,
        "memberHasInterest": true,
        "questionText": "string",
        "uin": "string"
      }
    }
  ],
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "resultContext": "string",
  "skip": 0,
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[WrittenQuestionItem](#schemawrittenquestionitem)]|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|resultContext|string \| null|false|none|none|
|skip|integer(int32)|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|
