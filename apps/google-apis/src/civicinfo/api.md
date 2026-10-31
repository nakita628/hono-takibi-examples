<h1 id="google-civic-information-api">Google Civic Information API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.

Base URLs:

* <a href="https://civicinfo.googleapis.com/">https://civicinfo.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/civic-information/">External documentation</a>

<h1 id="google-civic-information-api-divisions">divisions</h1>

## civicinfo.divisions.search

<a id="opIdcivicinfo.divisions.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/civicinfo/v2/divisions \
  -H 'Accept: application/json'
```

`GET /civicinfo/v2/divisions`

Searches for political divisions by their natural name or OCD ID.

<h3 id="civicinfodivisionssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "civicinfo#divisionSearchResponse",
  "results": [
    {
      "aliases": [
        "string"
      ],
      "name": "string",
      "ocdId": "string"
    }
  ]
}
```

<h3 id="civicinfodivisionssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DivisionSearchResponse](#schemadivisionsearchresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="google-civic-information-api-elections">elections</h1>

## civicinfo.elections.electionQuery

<a id="opIdcivicinfo.elections.electionQuery"></a>

> Code samples

```bash
curl https://www.googleapis.com/civicinfo/v2/elections \
  -H 'Accept: application/json'
```

`GET /civicinfo/v2/elections`

List of available elections to query.

<h3 id="civicinfoelectionselectionquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "elections": [
    {
      "electionDay": "string",
      "id": "string",
      "name": "string",
      "ocdDivisionId": "string",
      "shapeLookupBehavior": "shapeLookupDefault"
    }
  ],
  "kind": "civicinfo#electionsQueryResponse"
}
```

<h3 id="civicinfoelectionselectionquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ElectionsQueryResponse](#schemaelectionsqueryresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## civicinfo.elections.voterInfoQuery

<a id="opIdcivicinfo.elections.voterInfoQuery"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/civicinfo/v2/voterinfo?address=string' \
  -H 'Accept: application/json'
```

`GET /civicinfo/v2/voterinfo`

Looks up information relevant to a voter based on the voter's registered address.

<h3 id="civicinfoelectionsvoterinfoquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|query|string|true|The registered address of the voter to look up.|
|electionId|query|string|false|The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/elections. If no election ID is specified in the query and there is more than one election with data for the given voter, the additional elections are provided in the otherElections response field.|
|officialOnly|query|boolean|false|If set to true, only data from official state sources will be returned.|
|returnAllAvailableData|query|boolean|false|If set to true, the query will return the success code and include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "contests": [
    {
      "ballotPlacement": "string",
      "ballotTitle": "string",
      "candidates": [
        {
          "candidateUrl": "string",
          "channels": [
            {
              "id": "string",
              "type": "string"
            }
          ],
          "email": "string",
          "name": "string",
          "orderOnBallot": "string",
          "party": "string",
          "phone": "string",
          "photoUrl": "string"
        }
      ],
      "district": {
        "id": "string",
        "name": "string",
        "scope": "statewide"
      },
      "electorateSpecifications": "string",
      "level": [
        "international"
      ],
      "numberElected": "string",
      "numberVotingFor": "string",
      "office": "string",
      "primaryParties": [
        "string"
      ],
      "referendumBallotResponses": [
        "string"
      ],
      "referendumBrief": "string",
      "referendumConStatement": "string",
      "referendumEffectOfAbstain": "string",
      "referendumPassageThreshold": "string",
      "referendumProStatement": "string",
      "referendumSubtitle": "string",
      "referendumText": "string",
      "referendumTitle": "string",
      "referendumUrl": "string",
      "roles": [
        "headOfState"
      ],
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ],
      "special": "string",
      "type": "string"
    }
  ],
  "dropOffLocations": [
    {
      "address": {
        "city": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "locationName": "string",
        "state": "string",
        "zip": "string"
      },
      "endDate": "string",
      "latitude": 0,
      "longitude": 0,
      "name": "string",
      "notes": "string",
      "pollingHours": "string",
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ],
      "startDate": "string",
      "voterServices": "string"
    }
  ],
  "earlyVoteSites": [
    {
      "address": {
        "city": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "locationName": "string",
        "state": "string",
        "zip": "string"
      },
      "endDate": "string",
      "latitude": 0,
      "longitude": 0,
      "name": "string",
      "notes": "string",
      "pollingHours": "string",
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ],
      "startDate": "string",
      "voterServices": "string"
    }
  ],
  "election": {
    "electionDay": "string",
    "id": "string",
    "name": "string",
    "ocdDivisionId": "string",
    "shapeLookupBehavior": "shapeLookupDefault"
  },
  "kind": "civicinfo#voterInfoResponse",
  "mailOnly": true,
  "normalizedInput": {
    "city": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "locationName": "string",
    "state": "string",
    "zip": "string"
  },
  "otherElections": [
    {
      "electionDay": "string",
      "id": "string",
      "name": "string",
      "ocdDivisionId": "string",
      "shapeLookupBehavior": "shapeLookupDefault"
    }
  ],
  "pollingLocations": [
    {
      "address": {
        "city": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "locationName": "string",
        "state": "string",
        "zip": "string"
      },
      "endDate": "string",
      "latitude": 0,
      "longitude": 0,
      "name": "string",
      "notes": "string",
      "pollingHours": "string",
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ],
      "startDate": "string",
      "voterServices": "string"
    }
  ],
  "precinctId": "string",
  "precincts": [
    {
      "administrationRegionId": "string",
      "contestId": [
        "string"
      ],
      "datasetId": "string",
      "earlyVoteSiteId": [
        "string"
      ],
      "electoralDistrictId": [
        "string"
      ],
      "id": "string",
      "mailOnly": true,
      "name": "string",
      "number": "string",
      "ocdId": [
        "string"
      ],
      "pollingLocationId": [
        "string"
      ],
      "spatialBoundaryId": [
        "string"
      ],
      "splitName": "string",
      "ward": "string"
    }
  ],
  "state": [
    {
      "electionAdministrationBody": {
        "absenteeVotingInfoUrl": "string",
        "ballotInfoUrl": "string",
        "correspondenceAddress": {
          "city": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "locationName": "string",
          "state": "string",
          "zip": "string"
        },
        "electionInfoUrl": "string",
        "electionNoticeText": "string",
        "electionNoticeUrl": "string",
        "electionOfficials": [
          {
            "emailAddress": "string",
            "faxNumber": "string",
            "name": "string",
            "officePhoneNumber": "string",
            "title": "string"
          }
        ],
        "electionRegistrationConfirmationUrl": "string",
        "electionRegistrationUrl": "string",
        "electionRulesUrl": "string",
        "hoursOfOperation": "string",
        "name": "string",
        "physicalAddress": {
          "city": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "locationName": "string",
          "state": "string",
          "zip": "string"
        },
        "voter_services": [
          "string"
        ],
        "votingLocationFinderUrl": "string"
      },
      "local_jurisdiction": {},
      "name": "string",
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ]
    }
  ]
}
```

<h3 id="civicinfoelectionsvoterinfoquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VoterInfoResponse](#schemavoterinforesponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="google-civic-information-api-representatives">representatives</h1>

## civicinfo.representatives.representativeInfoByAddress

<a id="opIdcivicinfo.representatives.representativeInfoByAddress"></a>

> Code samples

```bash
curl https://www.googleapis.com/civicinfo/v2/representatives \
  -H 'Accept: application/json'
```

`GET /civicinfo/v2/representatives`

Looks up political geography and representative information for a single address.

<h3 id="civicinforepresentativesrepresentativeinfobyaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|query|string|false|The address to look up. May only be specified if the field ocdId is not given in the URL|
|includeOffices|query|boolean|false|Whether to return information about offices and officials. If false, only the top-level district information will be returned.|
|levels|query|[string]|false|A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.|
|roles|query|[string]|false|A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|levels|international|
|levels|country|
|levels|administrativeArea1|
|levels|regional|
|levels|administrativeArea2|
|levels|locality|
|levels|subLocality1|
|levels|subLocality2|
|levels|special|
|roles|headOfState|
|roles|headOfGovernment|
|roles|deputyHeadOfGovernment|
|roles|governmentOfficer|
|roles|executiveCouncil|
|roles|legislatorUpperBody|
|roles|legislatorLowerBody|
|roles|highestCourtJudge|
|roles|judge|
|roles|schoolBoard|
|roles|specialPurposeOfficer|
|roles|otherRole|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "divisions": {
    "property1": {
      "alsoKnownAs": [
        "string"
      ],
      "name": "string",
      "officeIndices": [
        0
      ]
    },
    "property2": {
      "alsoKnownAs": [
        "string"
      ],
      "name": "string",
      "officeIndices": [
        0
      ]
    }
  },
  "kind": "civicinfo#representativeInfoResponse",
  "normalizedInput": {
    "city": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "locationName": "string",
    "state": "string",
    "zip": "string"
  },
  "offices": [
    {
      "divisionId": "string",
      "levels": [
        "international"
      ],
      "name": "string",
      "officialIndices": [
        0
      ],
      "roles": [
        "headOfState"
      ],
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ]
    }
  ],
  "officials": [
    {
      "address": [
        {
          "city": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "locationName": "string",
          "state": "string",
          "zip": "string"
        }
      ],
      "channels": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "emails": [
        "string"
      ],
      "geocodingSummaries": [
        {
          "addressUnderstood": true,
          "featureId": {
            "cellId": "string",
            "fprint": "string",
            "temporaryData": {}
          },
          "featureType": "typeAny",
          "positionPrecisionMeters": 0,
          "queryString": "string"
        }
      ],
      "name": "string",
      "party": "string",
      "phones": [
        "string"
      ],
      "photoUrl": "string",
      "urls": [
        "string"
      ]
    }
  ]
}
```

<h3 id="civicinforepresentativesrepresentativeinfobyaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RepresentativeInfoResponse](#schemarepresentativeinforesponse)|

<aside class="success">
This operation does not require authentication
</aside>

## civicinfo.representatives.representativeInfoByDivision

<a id="opIdcivicinfo.representatives.representativeInfoByDivision"></a>

> Code samples

```bash
curl https://www.googleapis.com/civicinfo/v2/representatives/string \
  -H 'Accept: application/json'
```

`GET /civicinfo/v2/representatives/{ocdId}`

Looks up representative information for a single geographic division.

<h3 id="civicinforepresentativesrepresentativeinfobydivision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ocdId|path|string|true|The Open Civic Data division identifier of the division to look up.|
|levels|query|[string]|false|A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.|
|recursive|query|boolean|false|If true, information about all divisions contained in the division requested will be included as well. For example, if querying ocd-division/country:us/district:dc, this would also return all DC's wards and ANCs.|
|roles|query|[string]|false|A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|levels|international|
|levels|country|
|levels|administrativeArea1|
|levels|regional|
|levels|administrativeArea2|
|levels|locality|
|levels|subLocality1|
|levels|subLocality2|
|levels|special|
|roles|headOfState|
|roles|headOfGovernment|
|roles|deputyHeadOfGovernment|
|roles|governmentOfficer|
|roles|executiveCouncil|
|roles|legislatorUpperBody|
|roles|legislatorLowerBody|
|roles|highestCourtJudge|
|roles|judge|
|roles|schoolBoard|
|roles|specialPurposeOfficer|
|roles|otherRole|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "divisions": {
    "property1": {
      "alsoKnownAs": [
        "string"
      ],
      "name": "string",
      "officeIndices": [
        0
      ]
    },
    "property2": {
      "alsoKnownAs": [
        "string"
      ],
      "name": "string",
      "officeIndices": [
        0
      ]
    }
  },
  "offices": [
    {
      "divisionId": "string",
      "levels": [
        "international"
      ],
      "name": "string",
      "officialIndices": [
        0
      ],
      "roles": [
        "headOfState"
      ],
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ]
    }
  ],
  "officials": [
    {
      "address": [
        {
          "city": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "locationName": "string",
          "state": "string",
          "zip": "string"
        }
      ],
      "channels": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "emails": [
        "string"
      ],
      "geocodingSummaries": [
        {
          "addressUnderstood": true,
          "featureId": {
            "cellId": "string",
            "fprint": "string",
            "temporaryData": {}
          },
          "featureType": "typeAny",
          "positionPrecisionMeters": 0,
          "queryString": "string"
        }
      ],
      "name": "string",
      "party": "string",
      "phones": [
        "string"
      ],
      "photoUrl": "string",
      "urls": [
        "string"
      ]
    }
  ]
}
```

<h3 id="civicinforepresentativesrepresentativeinfobydivision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RepresentativeInfoData](#schemarepresentativeinfodata)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AdministrationRegion">AdministrationRegion</h2>
<!-- backwards compatibility -->
<a id="schemaadministrationregion"></a>
<a id="schema_AdministrationRegion"></a>
<a id="tocSadministrationregion"></a>
<a id="tocsadministrationregion"></a>

```json
{
  "electionAdministrationBody": {
    "absenteeVotingInfoUrl": "string",
    "ballotInfoUrl": "string",
    "correspondenceAddress": {
      "city": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "locationName": "string",
      "state": "string",
      "zip": "string"
    },
    "electionInfoUrl": "string",
    "electionNoticeText": "string",
    "electionNoticeUrl": "string",
    "electionOfficials": [
      {
        "emailAddress": "string",
        "faxNumber": "string",
        "name": "string",
        "officePhoneNumber": "string",
        "title": "string"
      }
    ],
    "electionRegistrationConfirmationUrl": "string",
    "electionRegistrationUrl": "string",
    "electionRulesUrl": "string",
    "hoursOfOperation": "string",
    "name": "string",
    "physicalAddress": {
      "city": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "locationName": "string",
      "state": "string",
      "zip": "string"
    },
    "voter_services": [
      "string"
    ],
    "votingLocationFinderUrl": "string"
  },
  "local_jurisdiction": {
    "electionAdministrationBody": {
      "absenteeVotingInfoUrl": "string",
      "ballotInfoUrl": "string",
      "correspondenceAddress": {
        "city": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "locationName": "string",
        "state": "string",
        "zip": "string"
      },
      "electionInfoUrl": "string",
      "electionNoticeText": "string",
      "electionNoticeUrl": "string",
      "electionOfficials": [
        {
          "emailAddress": "string",
          "faxNumber": "string",
          "name": "string",
          "officePhoneNumber": "string",
          "title": "string"
        }
      ],
      "electionRegistrationConfirmationUrl": "string",
      "electionRegistrationUrl": "string",
      "electionRulesUrl": "string",
      "hoursOfOperation": "string",
      "name": "string",
      "physicalAddress": {
        "city": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "locationName": "string",
        "state": "string",
        "zip": "string"
      },
      "voter_services": [
        "string"
      ],
      "votingLocationFinderUrl": "string"
    },
    "local_jurisdiction": {},
    "name": "string",
    "sources": [
      {
        "name": "string",
        "official": true
      }
    ]
  },
  "name": "string",
  "sources": [
    {
      "name": "string",
      "official": true
    }
  ]
}
```

Describes information about a regional election administrative area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|electionAdministrationBody|[AdministrativeBody](#schemaadministrativebody)|false|none|The election administration body for this area.|
|local_jurisdiction|[AdministrationRegion](#schemaadministrationregion)|false|none|The city or county that provides election information for this voter. This object can have the same elements as state.|
|name|string|false|none|The name of the jurisdiction.|
|sources|[[Source](#schemasource)]|false|none|A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources.|

<h2 id="tocS_AdministrativeBody">AdministrativeBody</h2>
<!-- backwards compatibility -->
<a id="schemaadministrativebody"></a>
<a id="schema_AdministrativeBody"></a>
<a id="tocSadministrativebody"></a>
<a id="tocsadministrativebody"></a>

```json
{
  "absenteeVotingInfoUrl": "string",
  "ballotInfoUrl": "string",
  "correspondenceAddress": {
    "city": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "locationName": "string",
    "state": "string",
    "zip": "string"
  },
  "electionInfoUrl": "string",
  "electionNoticeText": "string",
  "electionNoticeUrl": "string",
  "electionOfficials": [
    {
      "emailAddress": "string",
      "faxNumber": "string",
      "name": "string",
      "officePhoneNumber": "string",
      "title": "string"
    }
  ],
  "electionRegistrationConfirmationUrl": "string",
  "electionRegistrationUrl": "string",
  "electionRulesUrl": "string",
  "hoursOfOperation": "string",
  "name": "string",
  "physicalAddress": {
    "city": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "locationName": "string",
    "state": "string",
    "zip": "string"
  },
  "voter_services": [
    "string"
  ],
  "votingLocationFinderUrl": "string"
}
```

Information about an election administrative body (e.g. County Board of Elections).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absenteeVotingInfoUrl|string|false|none|A URL provided by this administrative body for information on absentee voting.|
|ballotInfoUrl|string|false|none|A URL provided by this administrative body to give contest information to the voter.|
|correspondenceAddress|[SimpleAddressType](#schemasimpleaddresstype)|false|none|The mailing address of this administrative body.|
|electionInfoUrl|string|false|none|A URL provided by this administrative body for looking up general election information.|
|electionNoticeText|string|false|none|A last minute or emergency notification text provided by this administrative body.|
|electionNoticeUrl|string|false|none|A URL provided by this administrative body for additional information related to the last minute or emergency notification.|
|electionOfficials|[[ElectionOfficial](#schemaelectionofficial)]|false|none|The election officials for this election administrative body.|
|electionRegistrationConfirmationUrl|string|false|none|A URL provided by this administrative body for confirming that the voter is registered to vote.|
|electionRegistrationUrl|string|false|none|A URL provided by this administrative body for looking up how to register to vote.|
|electionRulesUrl|string|false|none|A URL provided by this administrative body describing election rules to the voter.|
|hoursOfOperation|string|false|none|A description of the hours of operation for this administrative body.|
|name|string|false|none|The name of this election administrative body.|
|physicalAddress|[SimpleAddressType](#schemasimpleaddresstype)|false|none|The physical address of this administrative body.|
|voter_services|[string]|false|none|A description of the services this administrative body may provide.|
|votingLocationFinderUrl|string|false|none|A URL provided by this administrative body for looking up where to vote.|

<h2 id="tocS_Candidate">Candidate</h2>
<!-- backwards compatibility -->
<a id="schemacandidate"></a>
<a id="schema_Candidate"></a>
<a id="tocScandidate"></a>
<a id="tocscandidate"></a>

```json
{
  "candidateUrl": "string",
  "channels": [
    {
      "id": "string",
      "type": "string"
    }
  ],
  "email": "string",
  "name": "string",
  "orderOnBallot": "string",
  "party": "string",
  "phone": "string",
  "photoUrl": "string"
}
```

Information about a candidate running for elected office.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|candidateUrl|string|false|none|The URL for the candidate's campaign web site.|
|channels|[[Channel](#schemachannel)]|false|none|A list of known (social) media channels for this candidate.|
|email|string|false|none|The email address for the candidate's campaign.|
|name|string|false|none|The candidate's name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. "Mitt Romney / Paul Ryan"|
|orderOnBallot|string(int64)|false|none|The order the candidate appears on the ballot for this contest.|
|party|string|false|none|The full name of the party the candidate is a member of.|
|phone|string|false|none|The voice phone number for the candidate's campaign office.|
|photoUrl|string|false|none|A URL for a photo of the candidate.|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "id": "string",
  "type": "string"
}
```

A social media or web channel for a candidate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique public identifier for the candidate's channel.|
|type|string|false|none|The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter|

<h2 id="tocS_Contest">Contest</h2>
<!-- backwards compatibility -->
<a id="schemacontest"></a>
<a id="schema_Contest"></a>
<a id="tocScontest"></a>
<a id="tocscontest"></a>

```json
{
  "ballotPlacement": "string",
  "ballotTitle": "string",
  "candidates": [
    {
      "candidateUrl": "string",
      "channels": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "email": "string",
      "name": "string",
      "orderOnBallot": "string",
      "party": "string",
      "phone": "string",
      "photoUrl": "string"
    }
  ],
  "district": {
    "id": "string",
    "name": "string",
    "scope": "statewide"
  },
  "electorateSpecifications": "string",
  "level": [
    "international"
  ],
  "numberElected": "string",
  "numberVotingFor": "string",
  "office": "string",
  "primaryParties": [
    "string"
  ],
  "referendumBallotResponses": [
    "string"
  ],
  "referendumBrief": "string",
  "referendumConStatement": "string",
  "referendumEffectOfAbstain": "string",
  "referendumPassageThreshold": "string",
  "referendumProStatement": "string",
  "referendumSubtitle": "string",
  "referendumText": "string",
  "referendumTitle": "string",
  "referendumUrl": "string",
  "roles": [
    "headOfState"
  ],
  "sources": [
    {
      "name": "string",
      "official": true
    }
  ],
  "special": "string",
  "type": "string"
}
```

Information about a contest that appears on a voter's ballot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ballotPlacement|string(int64)|false|none|A number specifying the position of this contest on the voter's ballot.|
|ballotTitle|string|false|none|The official title on the ballot for this contest, only where available.|
|candidates|[[Candidate](#schemacandidate)]|false|none|The candidate choices for this contest.|
|district|[ElectoralDistrict](#schemaelectoraldistrict)|false|none|Information about the electoral district that this contest is in.|
|electorateSpecifications|string|false|none|A description of any additional eligibility requirements for voting in this contest.|
|level|[string]|false|none|The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".|
|numberElected|string(int64)|false|none|The number of candidates that will be elected to office in this contest.|
|numberVotingFor|string(int64)|false|none|The number of candidates that a voter may vote for in this contest.|
|office|string|false|none|The name of the office for this contest.|
|primaryParties|[string]|false|none|If this is a partisan election, the name of the party/parties it is for.|
|referendumBallotResponses|[string]|false|none|The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include "yes" or "no" for referenda. This field is only populated for contests of type 'Referendum'.|
|referendumBrief|string|false|none|Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'.|
|referendumConStatement|string|false|none|A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.|
|referendumEffectOfAbstain|string|false|none|Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type 'Referendum'.|
|referendumPassageThreshold|string|false|none|The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type 'Referendum'.|
|referendumProStatement|string|false|none|A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.|
|referendumSubtitle|string|false|none|A brief description of the referendum. This field is only populated for contests of type 'Referendum'.|
|referendumText|string|false|none|The full text of the referendum. This field is only populated for contests of type 'Referendum'.|
|referendumTitle|string|false|none|The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'.|
|referendumUrl|string|false|none|A link to the referendum. This field is only populated for contests of type 'Referendum'.|
|roles|[string]|false|none|The roles which this office fulfills.|
|sources|[[Source](#schemasource)]|false|none|A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources.|
|special|string|false|none|"Yes" or "No" depending on whether this a contest being held outside the normal election cycle.|
|type|string|false|none|The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will typically be 'Retention'.|

#### Enumerated Values

|Property|Value|
|---|---|
|level|international|
|level|country|
|level|administrativeArea1|
|level|regional|
|level|administrativeArea2|
|level|locality|
|level|subLocality1|
|level|subLocality2|
|level|special|
|roles|headOfState|
|roles|headOfGovernment|
|roles|deputyHeadOfGovernment|
|roles|governmentOfficer|
|roles|executiveCouncil|
|roles|legislatorUpperBody|
|roles|legislatorLowerBody|
|roles|highestCourtJudge|
|roles|judge|
|roles|schoolBoard|
|roles|specialPurposeOfficer|
|roles|otherRole|

<h2 id="tocS_DivisionSearchResponse">DivisionSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemadivisionsearchresponse"></a>
<a id="schema_DivisionSearchResponse"></a>
<a id="tocSdivisionsearchresponse"></a>
<a id="tocsdivisionsearchresponse"></a>

```json
{
  "kind": "civicinfo#divisionSearchResponse",
  "results": [
    {
      "aliases": [
        "string"
      ],
      "name": "string",
      "ocdId": "string"
    }
  ]
}
```

The result of a division search query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse".|
|results|[[DivisionSearchResult](#schemadivisionsearchresult)]|false|none|none|

<h2 id="tocS_DivisionSearchResult">DivisionSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemadivisionsearchresult"></a>
<a id="schema_DivisionSearchResult"></a>
<a id="tocSdivisionsearchresult"></a>
<a id="tocsdivisionsearchresult"></a>

```json
{
  "aliases": [
    "string"
  ],
  "name": "string",
  "ocdId": "string"
}
```

Represents a political geographic division that matches the requested query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[string]|false|none|Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district.|
|name|string|false|none|The name of the division.|
|ocdId|string|false|none|The unique Open Civic Data identifier for this division|

<h2 id="tocS_Election">Election</h2>
<!-- backwards compatibility -->
<a id="schemaelection"></a>
<a id="schema_Election"></a>
<a id="tocSelection"></a>
<a id="tocselection"></a>

```json
{
  "electionDay": "string",
  "id": "string",
  "name": "string",
  "ocdDivisionId": "string",
  "shapeLookupBehavior": "shapeLookupDefault"
}
```

Information about the election that was queried.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|electionDay|string|false|none|Day of the election in YYYY-MM-DD format.|
|id|string(int64)|false|none|The unique ID of this election.|
|name|string|false|none|A displayable name for the election.|
|ocdDivisionId|string|false|none|The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us).|
|shapeLookupBehavior|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shapeLookupBehavior|shapeLookupDefault|
|shapeLookupBehavior|shapeLookupDisabled|
|shapeLookupBehavior|shapeLookupEnabled|

<h2 id="tocS_ElectionOfficial">ElectionOfficial</h2>
<!-- backwards compatibility -->
<a id="schemaelectionofficial"></a>
<a id="schema_ElectionOfficial"></a>
<a id="tocSelectionofficial"></a>
<a id="tocselectionofficial"></a>

```json
{
  "emailAddress": "string",
  "faxNumber": "string",
  "name": "string",
  "officePhoneNumber": "string",
  "title": "string"
}
```

Information about individual election officials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|The email address of the election official.|
|faxNumber|string|false|none|The fax number of the election official.|
|name|string|false|none|The full name of the election official.|
|officePhoneNumber|string|false|none|The office phone number of the election official.|
|title|string|false|none|The title of the election official.|

<h2 id="tocS_ElectionsQueryResponse">ElectionsQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaelectionsqueryresponse"></a>
<a id="schema_ElectionsQueryResponse"></a>
<a id="tocSelectionsqueryresponse"></a>
<a id="tocselectionsqueryresponse"></a>

```json
{
  "elections": [
    {
      "electionDay": "string",
      "id": "string",
      "name": "string",
      "ocdDivisionId": "string",
      "shapeLookupBehavior": "shapeLookupDefault"
    }
  ],
  "kind": "civicinfo#electionsQueryResponse"
}
```

The list of elections available for this version of the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elections|[[Election](#schemaelection)]|false|none|A list of available elections|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse".|

<h2 id="tocS_ElectoralDistrict">ElectoralDistrict</h2>
<!-- backwards compatibility -->
<a id="schemaelectoraldistrict"></a>
<a id="schema_ElectoralDistrict"></a>
<a id="tocSelectoraldistrict"></a>
<a id="tocselectoraldistrict"></a>

```json
{
  "id": "string",
  "name": "string",
  "scope": "statewide"
}
```

Describes the geographic scope of a contest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper.|
|name|string|false|none|The name of the district.|
|scope|string|false|none|The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|statewide|
|scope|congressional|
|scope|stateUpper|
|scope|stateLower|
|scope|countywide|
|scope|judicial|
|scope|schoolBoard|
|scope|citywide|
|scope|special|
|scope|countyCouncil|
|scope|township|
|scope|ward|
|scope|cityCouncil|
|scope|national|

<h2 id="tocS_FeatureIdProto">FeatureIdProto</h2>
<!-- backwards compatibility -->
<a id="schemafeatureidproto"></a>
<a id="schema_FeatureIdProto"></a>
<a id="tocSfeatureidproto"></a>
<a id="tocsfeatureidproto"></a>

```json
{
  "cellId": "string",
  "fprint": "string",
  "temporaryData": {}
}
```

A globally unique identifier associated with each feature. We use 128-bit identifiers so that we have lots of bits available to distinguish between features. The feature id currently consists of a 64-bit "cell id" that **sometimes** corresponds to the approximate centroid of the feature, plus a 64-bit fingerprint of other identifying information. See more on each respective field in its comments. Feature ids are first assigned when the data is created in MapFacts. After initial creation of the feature, they are immutable. This means that the only properties that you should rely on are that they are unique, and that cell_ids often - but not always - preserve spatial locality. The degree of locality varies as the feature undergoes geometry changes, and should not in general be considered a firm guarantee of the location of any particular feature. In fact, some locationless features have randomized cell IDs! Consumers of FeatureProtos from Mapfacts are guaranteed that fprints in the id field of features will be globally unique. Using the fprint allows consumers who don't need the spatial benefit of cell ids to uniquely identify features in a 64-bit address space. This property is not guaranteed for other sources of FeatureProtos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellId|string(uint64)|false|none|The S2CellId corresponding to the approximate location of this feature as of when it was first created. This can be of variable accuracy, ranging from the exact centroid of the feature at creation, a very large S2 Cell, or even being completely randomized for locationless features. Cell ids have the nice property that they follow a space-filling curve over the surface of the earth. (See s2cellid.h for details.) WARNING: Clients should only use cell IDs to perform spatial locality optimizations. There is no strict guarantee that the cell ID of a feature is related to the current geometry of the feature in any way.|
|fprint|string(uint64)|false|none|A 64-bit fingerprint used to identify features. Most clients should rely on MapFacts or OneRing to choose fingerprints. If creating new fprints, the strategy should be chosen so that the chance of collision is remote or non-existent, and the distribution should be reasonably uniform. For example, if the source data assigns unique ids to features, then a fingerprint of the provider name, version, and source id is sufficient.|
|temporaryData|[MessageSet](#schemamessageset)|false|none|A place for clients to attach arbitrary data to a feature ID. Never set in MapFacts.|

<h2 id="tocS_GeocodingSummary">GeocodingSummary</h2>
<!-- backwards compatibility -->
<a id="schemageocodingsummary"></a>
<a id="schema_GeocodingSummary"></a>
<a id="tocSgeocodingsummary"></a>
<a id="tocsgeocodingsummary"></a>

```json
{
  "addressUnderstood": true,
  "featureId": {
    "cellId": "string",
    "fprint": "string",
    "temporaryData": {}
  },
  "featureType": "typeAny",
  "positionPrecisionMeters": 0,
  "queryString": "string"
}
```

Detailed summary of the result from geocoding an address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressUnderstood|boolean|false|none|Represents the best estimate of whether or not the input address was fully understood and the address is correctly componentized. Mirrors the same-name field in geostore.staging.AddressLinkupScoringProto.|
|featureId|[FeatureIdProto](#schemafeatureidproto)|false|none|The ID of the FeatureProto returned by the geocoder|
|featureType|string|false|none|The feature type for the FeatureProto returned by the geocoder|
|positionPrecisionMeters|number(double)|false|none|Precision of the center point (lat/long) of the geocoded FeatureProto|
|queryString|string|false|none|The query sent to the geocoder|

#### Enumerated Values

|Property|Value|
|---|---|
|featureType|typeAny|
|featureType|typeTransportation|
|featureType|typeRoute|
|featureType|typeDeprecatedHighwayDoNotUse|
|featureType|typeHighway|
|featureType|typeHighway1|
|featureType|typeHighway2|
|featureType|typeHighway3|
|featureType|typeHighway4|
|featureType|typeHighway5|
|featureType|typeHighway6|
|featureType|typeHighway7|
|featureType|typeHighway8|
|featureType|typeHighway9|
|featureType|typeBicycleRoute|
|featureType|typeTrail|
|featureType|typeSegment|
|featureType|typeRoad|
|featureType|typeRailway|
|featureType|typeStandardTrack|
|featureType|typeJrTrack|
|featureType|typeNarrowTrack|
|featureType|typeMonorailTrack|
|featureType|typeSubwayTrack|
|featureType|typeLightRailTrack|
|featureType|typeBroadTrack|
|featureType|typeHighSpeedRail|
|featureType|typeTrolleyTrack|
|featureType|typeFerry|
|featureType|typeFerryBoat|
|featureType|typeFerryTrain|
|featureType|typeVirtualSegment|
|featureType|typeIntersection|
|featureType|typeTransit|
|featureType|typeTransitStation|
|featureType|typeBusStation|
|featureType|typeTramwayStation|
|featureType|typeTrainStation|
|featureType|typeSubwayStation|
|featureType|typeFerryTerminal|
|featureType|typeAirport|
|featureType|typeAirportCivil|
|featureType|typeAirportMilitary|
|featureType|typeAirportMixed|
|featureType|typeHeliport|
|featureType|typeSeaplaneBase|
|featureType|typeAirstrip|
|featureType|typeCableCarStation|
|featureType|typeGondolaLiftStation|
|featureType|typeFunicularStation|
|featureType|typeSpecialStation|
|featureType|typeHorseCarriageStation|
|featureType|typeMonorailStation|
|featureType|typeSeaport|
|featureType|typeTransitStop|
|featureType|typeTransitTrip|
|featureType|typeTransitDeparture|
|featureType|typeTransitLeg|
|featureType|typeTransitLine|
|featureType|typeTransitAgencyDeprecatedValue|
|featureType|typeTransitTransfer|
|featureType|typeSegmentPath|
|featureType|typeRoadSign|
|featureType|typeIntersectionGroup|
|featureType|typePathway|
|featureType|typeRestrictionGroup|
|featureType|typeTollCluster|
|featureType|typePolitical|
|featureType|typeCountry|
|featureType|typeAdministrativeArea|
|featureType|typeAdministrativeArea1|
|featureType|typeUsState|
|featureType|typeGbCountry|
|featureType|typeJpTodoufuken|
|featureType|typeAdministrativeArea2|
|featureType|typeGbFormerPostalCounty|
|featureType|typeGbTraditionalCounty|
|featureType|typeAdministrativeArea3|
|featureType|typeAdministrativeArea4|
|featureType|typeAdministrativeArea5|
|featureType|typeAdministrativeArea6|
|featureType|typeAdministrativeArea7|
|featureType|typeAdministrativeArea8|
|featureType|typeAdministrativeArea9|
|featureType|typeColloquialArea|
|featureType|typeReservation|
|featureType|typeLocality|
|featureType|typeGbPostTown|
|featureType|typeJpGun|
|featureType|typeJpShikuchouson|
|featureType|typeJpSubShikuchouson|
|featureType|typeColloquialCity|
|featureType|typeSublocality|
|featureType|typeUsBorough|
|featureType|typeGbDependentLocality|
|featureType|typeJpOoaza|
|featureType|typeJpKoaza|
|featureType|typeJpGaiku|
|featureType|typeGbDoubleDependentLocality|
|featureType|typeJpChiban|
|featureType|typeJpEdaban|
|featureType|typeSublocality1|
|featureType|typeSublocality2|
|featureType|typeSublocality3|
|featureType|typeSublocality4|
|featureType|typeSublocality5|
|featureType|typeNeighborhood|
|featureType|typeConstituency|
|featureType|typeDesignatedMarketArea|
|featureType|typeSchoolDistrict|
|featureType|typeLandParcel|
|featureType|typeDisputedArea|
|featureType|typePoliceJurisdiction|
|featureType|typeStatisticalArea|
|featureType|typeConstituencyFuture|
|featureType|typePark|
|featureType|typeGolfCourse|
|featureType|typeLocalPark|
|featureType|typeNationalPark|
|featureType|typeUsNationalPark|
|featureType|typeUsNationalMonument|
|featureType|typeNationalForest|
|featureType|typeProvincialPark|
|featureType|typeProvincialForest|
|featureType|typeCampgrounds|
|featureType|typeHikingArea|
|featureType|typeBusiness|
|featureType|typeGovernment|
|featureType|typeBorderCrossing|
|featureType|typeCityHall|
|featureType|typeCourthouse|
|featureType|typeEmbassy|
|featureType|typeLibrary|
|featureType|typeSchool|
|featureType|typeUniversity|
|featureType|typeEmergency|
|featureType|typeHospital|
|featureType|typePharmacy|
|featureType|typePolice|
|featureType|typeFire|
|featureType|typeDoctor|
|featureType|typeDentist|
|featureType|typeVeterinarian|
|featureType|typeTravelService|
|featureType|typeLodging|
|featureType|typeRestaurant|
|featureType|typeGasStation|
|featureType|typeParking|
|featureType|typePostOffice|
|featureType|typeRestArea|
|featureType|typeCashMachine|
|featureType|typeCarRental|
|featureType|typeCarRepair|
|featureType|typeShopping|
|featureType|typeGrocery|
|featureType|typeTouristDestination|
|featureType|typeEcoTouristDestination|
|featureType|typeBirdWatching|
|featureType|typeFishing|
|featureType|typeHunting|
|featureType|typeNatureReserve|
|featureType|typeTemple|
|featureType|typeChurch|
|featureType|typeGurudwara|
|featureType|typeHinduTemple|
|featureType|typeMosque|
|featureType|typeSynagogue|
|featureType|typeStadium|
|featureType|typeBar|
|featureType|typeMovieRental|
|featureType|typeCoffee|
|featureType|typeGolf|
|featureType|typeBank|
|featureType|typeDoodle|
|featureType|typeGrounds|
|featureType|typeAirportGrounds|
|featureType|typeBuildingGrounds|
|featureType|typeCemetery|
|featureType|typeHospitalGrounds|
|featureType|typeIndustrial|
|featureType|typeMilitary|
|featureType|typeShoppingCenter|
|featureType|typeSportsComplex|
|featureType|typeUniversityGrounds|
|featureType|typeDeprecatedTarmac|
|featureType|typeEnclosedTrafficArea|
|featureType|typeParkingLot|
|featureType|typeParkingGarage|
|featureType|typeOffRoadArea|
|featureType|typeBorder|
|featureType|typeBuilding|
|featureType|typeGeocodedAddress|
|featureType|typeNaturalFeature|
|featureType|typeTerrain|
|featureType|typeSand|
|featureType|typeBeach|
|featureType|typeDune|
|featureType|typeRocky|
|featureType|typeIce|
|featureType|typeGlacier|
|featureType|typeBuiltUpArea|
|featureType|typeVegetation|
|featureType|typeShrubbery|
|featureType|typeWoods|
|featureType|typeAgricultural|
|featureType|typeGrassland|
|featureType|typeTundra|
|featureType|typeDesert|
|featureType|typeSaltFlat|
|featureType|typeWater|
|featureType|typeOcean|
|featureType|typeBay|
|featureType|typeBight|
|featureType|typeLagoon|
|featureType|typeSea|
|featureType|typeStrait|
|featureType|typeInlet|
|featureType|typeFjord|
|featureType|typeLake|
|featureType|typeSeasonalLake|
|featureType|typeReservoir|
|featureType|typePond|
|featureType|typeRiver|
|featureType|typeRapids|
|featureType|typeDistributary|
|featureType|typeConfluence|
|featureType|typeWaterfall|
|featureType|typeSpring|
|featureType|typeGeyser|
|featureType|typeHotSpring|
|featureType|typeSeasonalRiver|
|featureType|typeWadi|
|featureType|typeEstuary|
|featureType|typeWetland|
|featureType|typeWaterNavigation|
|featureType|typeFord|
|featureType|typeCanal|
|featureType|typeHarbor|
|featureType|typeChannel|
|featureType|typeReef|
|featureType|typeReefFlat|
|featureType|typeReefGrowth|
|featureType|typeReefExtent|
|featureType|typeReefRockSubmerged|
|featureType|typeIrrigation|
|featureType|typeDam|
|featureType|typeDrinkingWater|
|featureType|typeCurrent|
|featureType|typeWateringHole|
|featureType|typeTectonic|
|featureType|typeWateringHoleDeprecated|
|featureType|typeVolcano|
|featureType|typeLavaField|
|featureType|typeFissure|
|featureType|typeFault|
|featureType|typeLandMass|
|featureType|typeContinent|
|featureType|typeIsland|
|featureType|typeAtoll|
|featureType|typeOceanRockExposed|
|featureType|typeCay|
|featureType|typePeninsula|
|featureType|typeIsthmus|
|featureType|typeElevated|
|featureType|typePeak|
|featureType|typeNunatak|
|featureType|typeSpur|
|featureType|typePass|
|featureType|typePlateau|
|featureType|typeRidge|
|featureType|typeRavine|
|featureType|typeCrater|
|featureType|typeKarst|
|featureType|typeCliff|
|featureType|typeVista|
|featureType|typeDigitalElevationModel|
|featureType|typeUpland|
|featureType|typeTerrace|
|featureType|typeSlope|
|featureType|typeContourLine|
|featureType|typePan|
|featureType|typeUnstableHillside|
|featureType|typeMountainRange|
|featureType|typeUndersea|
|featureType|typeSubmarineSeamount|
|featureType|typeSubmarineRidge|
|featureType|typeSubmarineGap|
|featureType|typeSubmarinePlateau|
|featureType|typeSubmarineDeep|
|featureType|typeSubmarineValley|
|featureType|typeSubmarineBasin|
|featureType|typeSubmarineSlope|
|featureType|typeSubmarineCliff|
|featureType|typeSubmarinePlain|
|featureType|typeSubmarineFractureZone|
|featureType|typeCave|
|featureType|typeRock|
|featureType|typeArchipelago|
|featureType|typePostal|
|featureType|typePostalCode|
|featureType|typePostalCodePrefix|
|featureType|typePremise|
|featureType|typeSubPremise|
|featureType|typeSuite|
|featureType|typePostTown|
|featureType|typePostalRound|
|featureType|typeMetaFeature|
|featureType|typeDataSource|
|featureType|typeLocale|
|featureType|typeTimezone|
|featureType|typeBusinessChain|
|featureType|typePhoneNumberPrefix|
|featureType|typePhoneNumberAreaCode|
|featureType|typeBusinessCorridor|
|featureType|typeAddressTemplate|
|featureType|typeTransitAgency|
|featureType|typeFutureGeometry|
|featureType|typeEvent|
|featureType|typeEarthquake|
|featureType|typeHurricane|
|featureType|typeWeatherCondition|
|featureType|typeTransient|
|featureType|typeEntrance|
|featureType|typeCartographic|
|featureType|typeHighTension|
|featureType|typeSkiTrail|
|featureType|typeSkiLift|
|featureType|typeSkiBoundary|
|featureType|typeWatershedBoundary|
|featureType|typeTarmac|
|featureType|typeWall|
|featureType|typePicnicArea|
|featureType|typePlayGround|
|featureType|typeTrailHead|
|featureType|typeGolfTeeingGround|
|featureType|typeGolfPuttingGreen|
|featureType|typeGolfRough|
|featureType|typeGolfSandBunker|
|featureType|typeGolfFairway|
|featureType|typeGolfHole|
|featureType|typeDeprecatedGolfShop|
|featureType|typeCampingSite|
|featureType|typeDesignatedBarbecuePit|
|featureType|typeDesignatedCookingArea|
|featureType|typeCampfirePit|
|featureType|typeWaterFountain|
|featureType|typeLitterReceptacle|
|featureType|typeLockerArea|
|featureType|typeAnimalEnclosure|
|featureType|typeCartographicLine|
|featureType|typeEstablishment|
|featureType|typeEstablishmentGrounds|
|featureType|typeEstablishmentBuilding|
|featureType|typeEstablishmentPoi|
|featureType|typeEstablishmentService|
|featureType|typeCelestial|
|featureType|typeRoadMonitor|
|featureType|typePublicSpacesAndMonuments|
|featureType|typeStatue|
|featureType|typeTownSquare|
|featureType|typeLevel|
|featureType|typeCompound|
|featureType|typeCompoundGrounds|
|featureType|typeCompoundBuilding|
|featureType|typeCompoundSection|
|featureType|typeTerminalPoint|
|featureType|typeRegulatedArea|
|featureType|typeLogicalBorder|
|featureType|typeDoNotUseReservedToCatchGeneratedFiles|
|featureType|typeUnknown|

<h2 id="tocS_GeographicDivision">GeographicDivision</h2>
<!-- backwards compatibility -->
<a id="schemageographicdivision"></a>
<a id="schema_GeographicDivision"></a>
<a id="tocSgeographicdivision"></a>
<a id="tocsgeographicdivision"></a>

```json
{
  "alsoKnownAs": [
    "string"
  ],
  "name": "string",
  "officeIndices": [
    0
  ]
}
```

Describes a political geography.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alsoKnownAs|[string]|false|none|Any other valid OCD IDs that refer to the same division.\n\nBecause OCD IDs are meant to be human-readable and at least somewhat predictable, there are occasionally several identifiers for a single division. These identifiers are defined to be equivalent to one another, and one is always indicated as the primary identifier. The primary identifier will be returned in ocd_id above, and any other equivalent valid identifiers will be returned in this list.\n\nFor example, if this division's OCD ID is ocd-division/country:us/district:dc, this will contain ocd-division/country:us/state:dc.|
|name|string|false|none|The name of the division.|
|officeIndices|[integer(uint32)]|false|none|List of indices in the offices array, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request.|

<h2 id="tocS_MessageSet">MessageSet</h2>
<!-- backwards compatibility -->
<a id="schemamessageset"></a>
<a id="schema_MessageSet"></a>
<a id="tocSmessageset"></a>
<a id="tocsmessageset"></a>

```json
{}
```

This is proto2's version of MessageSet.

<h2 id="tocS_Office">Office</h2>
<!-- backwards compatibility -->
<a id="schemaoffice"></a>
<a id="schema_Office"></a>
<a id="tocSoffice"></a>
<a id="tocsoffice"></a>

```json
{
  "divisionId": "string",
  "levels": [
    "international"
  ],
  "name": "string",
  "officialIndices": [
    0
  ],
  "roles": [
    "headOfState"
  ],
  "sources": [
    {
      "name": "string",
      "official": true
    }
  ]
}
```

Information about an Office held by one or more Officials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|divisionId|string|false|none|The OCD ID of the division with which this office is associated.|
|levels|[string]|false|none|The levels of government of which this office is part. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".|
|name|string|false|none|The human-readable name of the office.|
|officialIndices|[integer(uint32)]|false|none|List of indices in the officials array of people who presently hold this office.|
|roles|[string]|false|none|The roles which this office fulfills. Roles are not meant to be exhaustive, or to exactly specify the entire set of responsibilities of a given office, but are meant to be rough categories that are useful for general selection from or sorting of a list of offices.|
|sources|[[Source](#schemasource)]|false|none|A list of sources for this office. If multiple sources are listed, the data has been aggregated from those sources.|

#### Enumerated Values

|Property|Value|
|---|---|
|levels|international|
|levels|country|
|levels|administrativeArea1|
|levels|regional|
|levels|administrativeArea2|
|levels|locality|
|levels|subLocality1|
|levels|subLocality2|
|levels|special|
|roles|headOfState|
|roles|headOfGovernment|
|roles|deputyHeadOfGovernment|
|roles|governmentOfficer|
|roles|executiveCouncil|
|roles|legislatorUpperBody|
|roles|legislatorLowerBody|
|roles|highestCourtJudge|
|roles|judge|
|roles|schoolBoard|
|roles|specialPurposeOfficer|
|roles|otherRole|

<h2 id="tocS_Official">Official</h2>
<!-- backwards compatibility -->
<a id="schemaofficial"></a>
<a id="schema_Official"></a>
<a id="tocSofficial"></a>
<a id="tocsofficial"></a>

```json
{
  "address": [
    {
      "city": "string",
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "locationName": "string",
      "state": "string",
      "zip": "string"
    }
  ],
  "channels": [
    {
      "id": "string",
      "type": "string"
    }
  ],
  "emails": [
    "string"
  ],
  "geocodingSummaries": [
    {
      "addressUnderstood": true,
      "featureId": {
        "cellId": "string",
        "fprint": "string",
        "temporaryData": {}
      },
      "featureType": "typeAny",
      "positionPrecisionMeters": 0,
      "queryString": "string"
    }
  ],
  "name": "string",
  "party": "string",
  "phones": [
    "string"
  ],
  "photoUrl": "string",
  "urls": [
    "string"
  ]
}
```

Information about a person holding an elected office.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[[SimpleAddressType](#schemasimpleaddresstype)]|false|none|Addresses at which to contact the official.|
|channels|[[Channel](#schemachannel)]|false|none|A list of known (social) media channels for this official.|
|emails|[string]|false|none|The direct email addresses for the official.|
|geocodingSummaries|[[GeocodingSummary](#schemageocodingsummary)]|false|none|Detailed summary about the official's address's geocoding|
|name|string|false|none|The official's name.|
|party|string|false|none|The full name of the party the official belongs to.|
|phones|[string]|false|none|The official's public contact phone numbers.|
|photoUrl|string|false|none|A URL for a photo of the official.|
|urls|[string]|false|none|The official's public website URLs.|

<h2 id="tocS_PollingLocation">PollingLocation</h2>
<!-- backwards compatibility -->
<a id="schemapollinglocation"></a>
<a id="schema_PollingLocation"></a>
<a id="tocSpollinglocation"></a>
<a id="tocspollinglocation"></a>

```json
{
  "address": {
    "city": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "locationName": "string",
    "state": "string",
    "zip": "string"
  },
  "endDate": "string",
  "latitude": 0,
  "longitude": 0,
  "name": "string",
  "notes": "string",
  "pollingHours": "string",
  "sources": [
    {
      "name": "string",
      "official": true
    }
  ],
  "startDate": "string",
  "voterServices": "string"
}
```

A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[SimpleAddressType](#schemasimpleaddresstype)|false|none|The address of the location.|
|endDate|string|false|none|The last date that this early vote site or drop off location may be used. This field is not populated for polling locations.|
|latitude|number(double)|false|none|Latitude of the location, in degrees north of the equator. Note this field may not be available for some locations.|
|longitude|number(double)|false|none|Longitude of the location, in degrees east of the Prime Meridian. Note this field may not be available for some locations.|
|name|string|false|none|The name of the early vote site or drop off location. This field is not populated for polling locations.|
|notes|string|false|none|Notes about this location (e.g. accessibility ramp or entrance to use).|
|pollingHours|string|false|none|A description of when this location is open.|
|sources|[[Source](#schemasource)]|false|none|A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources.|
|startDate|string|false|none|The first date that this early vote site or drop off location may be used. This field is not populated for polling locations.|
|voterServices|string|false|none|The services provided by this early vote site or drop off location. This field is not populated for polling locations.|

<h2 id="tocS_Precinct">Precinct</h2>
<!-- backwards compatibility -->
<a id="schemaprecinct"></a>
<a id="schema_Precinct"></a>
<a id="tocSprecinct"></a>
<a id="tocsprecinct"></a>

```json
{
  "administrationRegionId": "string",
  "contestId": [
    "string"
  ],
  "datasetId": "string",
  "earlyVoteSiteId": [
    "string"
  ],
  "electoralDistrictId": [
    "string"
  ],
  "id": "string",
  "mailOnly": true,
  "name": "string",
  "number": "string",
  "ocdId": [
    "string"
  ],
  "pollingLocationId": [
    "string"
  ],
  "spatialBoundaryId": [
    "string"
  ],
  "splitName": "string",
  "ward": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrationRegionId|string|false|none|ID of the AdministrationRegion message for this precinct. Corresponds to LocalityId xml tag.|
|contestId|[string]|false|none|ID(s) of the Contest message(s) for this precinct.|
|datasetId|string(int64)|false|none|Required. Dataset ID. What datasets our Precincts come from.|
|earlyVoteSiteId|[string]|false|none|ID(s) of the PollingLocation message(s) for this precinct.|
|electoralDistrictId|[string]|false|none|ID(s) of the ElectoralDistrict message(s) for this precinct.|
|id|string|false|none|Required. A unique identifier for this precinct.|
|mailOnly|boolean|false|none|Specifies if the precinct runs mail-only elections.|
|name|string|false|none|Required. The name of the precinct.|
|number|string|false|none|The number of the precinct.|
|ocdId|[string]|false|none|Encouraged. The OCD ID of the precinct|
|pollingLocationId|[string]|false|none|ID(s) of the PollingLocation message(s) for this precinct.|
|spatialBoundaryId|[string]|false|none|ID(s) of the SpatialBoundary message(s) for this precinct. Used to specify a geometrical boundary of the precinct.|
|splitName|string|false|none|If present, this proto corresponds to one portion of split precinct. Other portions of this precinct are guaranteed to have the same `name`. If not present, this proto represents a full precicnt.|
|ward|string|false|none|Specifies the ward the precinct is contained within.|

<h2 id="tocS_RepresentativeInfoData">RepresentativeInfoData</h2>
<!-- backwards compatibility -->
<a id="schemarepresentativeinfodata"></a>
<a id="schema_RepresentativeInfoData"></a>
<a id="tocSrepresentativeinfodata"></a>
<a id="tocsrepresentativeinfodata"></a>

```json
{
  "divisions": {
    "property1": {
      "alsoKnownAs": [
        "string"
      ],
      "name": "string",
      "officeIndices": [
        0
      ]
    },
    "property2": {
      "alsoKnownAs": [
        "string"
      ],
      "name": "string",
      "officeIndices": [
        0
      ]
    }
  },
  "offices": [
    {
      "divisionId": "string",
      "levels": [
        "international"
      ],
      "name": "string",
      "officialIndices": [
        0
      ],
      "roles": [
        "headOfState"
      ],
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ]
    }
  ],
  "officials": [
    {
      "address": [
        {
          "city": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "locationName": "string",
          "state": "string",
          "zip": "string"
        }
      ],
      "channels": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "emails": [
        "string"
      ],
      "geocodingSummaries": [
        {
          "addressUnderstood": true,
          "featureId": {
            "cellId": "string",
            "fprint": "string",
            "temporaryData": {}
          },
          "featureType": "typeAny",
          "positionPrecisionMeters": 0,
          "queryString": "string"
        }
      ],
      "name": "string",
      "party": "string",
      "phones": [
        "string"
      ],
      "photoUrl": "string",
      "urls": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|divisions|object|false|none|A map of political geographic divisions that contain the requested address, keyed by the unique Open Civic Data identifier for this division.|
|offices|[[Office](#schemaoffice)]|false|none|Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request.|
|officials|[[Official](#schemaofficial)]|false|none|Officials holding the offices listed above. Will only be present if includeOffices was true in the request.|

<h2 id="tocS_RepresentativeInfoResponse">RepresentativeInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemarepresentativeinforesponse"></a>
<a id="schema_RepresentativeInfoResponse"></a>
<a id="tocSrepresentativeinforesponse"></a>
<a id="tocsrepresentativeinforesponse"></a>

```json
{
  "divisions": {
    "property1": {
      "alsoKnownAs": [
        "string"
      ],
      "name": "string",
      "officeIndices": [
        0
      ]
    },
    "property2": {
      "alsoKnownAs": [
        "string"
      ],
      "name": "string",
      "officeIndices": [
        0
      ]
    }
  },
  "kind": "civicinfo#representativeInfoResponse",
  "normalizedInput": {
    "city": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "locationName": "string",
    "state": "string",
    "zip": "string"
  },
  "offices": [
    {
      "divisionId": "string",
      "levels": [
        "international"
      ],
      "name": "string",
      "officialIndices": [
        0
      ],
      "roles": [
        "headOfState"
      ],
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ]
    }
  ],
  "officials": [
    {
      "address": [
        {
          "city": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "locationName": "string",
          "state": "string",
          "zip": "string"
        }
      ],
      "channels": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "emails": [
        "string"
      ],
      "geocodingSummaries": [
        {
          "addressUnderstood": true,
          "featureId": {
            "cellId": "string",
            "fprint": "string",
            "temporaryData": {}
          },
          "featureType": "typeAny",
          "positionPrecisionMeters": 0,
          "queryString": "string"
        }
      ],
      "name": "string",
      "party": "string",
      "phones": [
        "string"
      ],
      "photoUrl": "string",
      "urls": [
        "string"
      ]
    }
  ]
}
```

The result of a representative info lookup query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|divisions|object|false|none|A map of political geographic divisions that contain the requested address, keyed by the unique Open Civic Data identifier for this division.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "civicinfo#representativeInfoResponse".|
|normalizedInput|[SimpleAddressType](#schemasimpleaddresstype)|false|none|The normalized version of the requested address|
|offices|[[Office](#schemaoffice)]|false|none|Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request.|
|officials|[[Official](#schemaofficial)]|false|none|Officials holding the offices listed above. Will only be present if includeOffices was true in the request.|

<h2 id="tocS_SimpleAddressType">SimpleAddressType</h2>
<!-- backwards compatibility -->
<a id="schemasimpleaddresstype"></a>
<a id="schema_SimpleAddressType"></a>
<a id="tocSsimpleaddresstype"></a>
<a id="tocssimpleaddresstype"></a>

```json
{
  "city": "string",
  "line1": "string",
  "line2": "string",
  "line3": "string",
  "locationName": "string",
  "state": "string",
  "zip": "string"
}
```

A simple representation of an address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city or town for the address.|
|line1|string|false|none|The street name and number of this address.|
|line2|string|false|none|The second line the address, if needed.|
|line3|string|false|none|The third line of the address, if needed.|
|locationName|string|false|none|The name of the location.|
|state|string|false|none|The US two letter state abbreviation of the address.|
|zip|string|false|none|The US Postal Zip Code of the address.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "name": "string",
  "official": true
}
```

Contains information about the data source for the element containing it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the data source.|
|official|boolean|false|none|Whether this data comes from an official government source.|

<h2 id="tocS_VoterInfoResponse">VoterInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemavoterinforesponse"></a>
<a id="schema_VoterInfoResponse"></a>
<a id="tocSvoterinforesponse"></a>
<a id="tocsvoterinforesponse"></a>

```json
{
  "contests": [
    {
      "ballotPlacement": "string",
      "ballotTitle": "string",
      "candidates": [
        {
          "candidateUrl": "string",
          "channels": [
            {
              "id": "string",
              "type": "string"
            }
          ],
          "email": "string",
          "name": "string",
          "orderOnBallot": "string",
          "party": "string",
          "phone": "string",
          "photoUrl": "string"
        }
      ],
      "district": {
        "id": "string",
        "name": "string",
        "scope": "statewide"
      },
      "electorateSpecifications": "string",
      "level": [
        "international"
      ],
      "numberElected": "string",
      "numberVotingFor": "string",
      "office": "string",
      "primaryParties": [
        "string"
      ],
      "referendumBallotResponses": [
        "string"
      ],
      "referendumBrief": "string",
      "referendumConStatement": "string",
      "referendumEffectOfAbstain": "string",
      "referendumPassageThreshold": "string",
      "referendumProStatement": "string",
      "referendumSubtitle": "string",
      "referendumText": "string",
      "referendumTitle": "string",
      "referendumUrl": "string",
      "roles": [
        "headOfState"
      ],
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ],
      "special": "string",
      "type": "string"
    }
  ],
  "dropOffLocations": [
    {
      "address": {
        "city": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "locationName": "string",
        "state": "string",
        "zip": "string"
      },
      "endDate": "string",
      "latitude": 0,
      "longitude": 0,
      "name": "string",
      "notes": "string",
      "pollingHours": "string",
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ],
      "startDate": "string",
      "voterServices": "string"
    }
  ],
  "earlyVoteSites": [
    {
      "address": {
        "city": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "locationName": "string",
        "state": "string",
        "zip": "string"
      },
      "endDate": "string",
      "latitude": 0,
      "longitude": 0,
      "name": "string",
      "notes": "string",
      "pollingHours": "string",
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ],
      "startDate": "string",
      "voterServices": "string"
    }
  ],
  "election": {
    "electionDay": "string",
    "id": "string",
    "name": "string",
    "ocdDivisionId": "string",
    "shapeLookupBehavior": "shapeLookupDefault"
  },
  "kind": "civicinfo#voterInfoResponse",
  "mailOnly": true,
  "normalizedInput": {
    "city": "string",
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "locationName": "string",
    "state": "string",
    "zip": "string"
  },
  "otherElections": [
    {
      "electionDay": "string",
      "id": "string",
      "name": "string",
      "ocdDivisionId": "string",
      "shapeLookupBehavior": "shapeLookupDefault"
    }
  ],
  "pollingLocations": [
    {
      "address": {
        "city": "string",
        "line1": "string",
        "line2": "string",
        "line3": "string",
        "locationName": "string",
        "state": "string",
        "zip": "string"
      },
      "endDate": "string",
      "latitude": 0,
      "longitude": 0,
      "name": "string",
      "notes": "string",
      "pollingHours": "string",
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ],
      "startDate": "string",
      "voterServices": "string"
    }
  ],
  "precinctId": "string",
  "precincts": [
    {
      "administrationRegionId": "string",
      "contestId": [
        "string"
      ],
      "datasetId": "string",
      "earlyVoteSiteId": [
        "string"
      ],
      "electoralDistrictId": [
        "string"
      ],
      "id": "string",
      "mailOnly": true,
      "name": "string",
      "number": "string",
      "ocdId": [
        "string"
      ],
      "pollingLocationId": [
        "string"
      ],
      "spatialBoundaryId": [
        "string"
      ],
      "splitName": "string",
      "ward": "string"
    }
  ],
  "state": [
    {
      "electionAdministrationBody": {
        "absenteeVotingInfoUrl": "string",
        "ballotInfoUrl": "string",
        "correspondenceAddress": {
          "city": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "locationName": "string",
          "state": "string",
          "zip": "string"
        },
        "electionInfoUrl": "string",
        "electionNoticeText": "string",
        "electionNoticeUrl": "string",
        "electionOfficials": [
          {
            "emailAddress": "string",
            "faxNumber": "string",
            "name": "string",
            "officePhoneNumber": "string",
            "title": "string"
          }
        ],
        "electionRegistrationConfirmationUrl": "string",
        "electionRegistrationUrl": "string",
        "electionRulesUrl": "string",
        "hoursOfOperation": "string",
        "name": "string",
        "physicalAddress": {
          "city": "string",
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "locationName": "string",
          "state": "string",
          "zip": "string"
        },
        "voter_services": [
          "string"
        ],
        "votingLocationFinderUrl": "string"
      },
      "local_jurisdiction": {},
      "name": "string",
      "sources": [
        {
          "name": "string",
          "official": true
        }
      ]
    }
  ]
}
```

The result of a voter info lookup query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contests|[[Contest](#schemacontest)]|false|none|Contests that will appear on the voter's ballot.|
|dropOffLocations|[[PollingLocation](#schemapollinglocation)]|false|none|Locations where a voter is eligible to drop off a completed ballot. The voter must have received and completed a ballot prior to arriving at the location. The location may not have ballots available on the premises. These locations could be open on or before election day as indicated in the pollingHours field.|
|earlyVoteSites|[[PollingLocation](#schemapollinglocation)]|false|none|Locations where the voter is eligible to vote early, prior to election day.|
|election|[Election](#schemaelection)|false|none|The election that was queried.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse".|
|mailOnly|boolean|false|none|Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well).|
|normalizedInput|[SimpleAddressType](#schemasimpleaddresstype)|false|none|The normalized version of the requested address|
|otherElections|[[Election](#schemaelection)]|false|none|When there are multiple elections for a voter address, the otherElections field is populated in the API response and there are two possibilities: 1. If the earliest election is not the intended election, specify the election ID of the desired election in a second API request using the electionId field. 2. If these elections occur on the same day, the API doesn?t return any polling location, contest, or election official information to ensure that an additional query is made. For user-facing applications, we recommend displaying these elections to the user to disambiguate. A second API request using the electionId field should be made for the election that is relevant to the user.|
|pollingLocations|[[PollingLocation](#schemapollinglocation)]|false|none|Locations where the voter is eligible to vote on election day.|
|precinctId|string|false|none|none|
|precincts|[[Precinct](#schemaprecinct)]|false|none|The precincts that match this voter's address. Will only be returned for project IDs which have been whitelisted as "partner projects".|
|state|[[AdministrationRegion](#schemaadministrationregion)]|false|none|Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array.|
