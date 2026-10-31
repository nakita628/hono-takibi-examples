<h1 id="open-states-api-v3">Open States API v3 v2021.11.12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


* [More documentation](https://docs.openstates.org/en/latest/api/v3/index.html)
* [Register for an account](https://openstates.org/accounts/signup/)


**We are currently working to restore experimental support for committees & events.**

During this period please note that data is not yet available for all states
and the exact format of the new endpoints may change slightly depending on user feedback.

If you have any issues or questions use our
[GitHub Issues](https://github.com/openstates/issues/issues) to give feedback.

<h1 id="open-states-api-v3-bills">bills</h1>

## Bills Search

<a id="opIdbills_search_bills_get"></a>

> Code samples

```bash
curl https://example.com/bills \
  -H 'Accept: application/json'
```

`GET /bills`

Search for bills matching given criteria.

Must either specify a jurisdiction or a full text query (q).  Additional parameters will
futher restrict bills returned.

<h3 id="bills-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jurisdiction|query|string|false|Filter by jurisdiction name or ID.|
|session|query|string|false|Filter by session identifier.|
|chamber|query|string|false|Filter by chamber of origination.|
|identifier|query|[string]|false|Filter to only include bills with this identifier.|
|classification|query|string|false|Filter by classification, e.g. bill or resolution|
|subject|query|[string]|false|Filter by one or more subjects.|
|updated_since|query|string|false|Filter to only include bills with updates since a given date.|
|created_since|query|string|false|Filter to only include bills created since a given date.|
|action_since|query|string|false|Filter to only include bills with an action since a given date.|
|sort|query|object|false|Desired sort order for bill results.|
|sponsor|query|string|false|Filter to only include bills sponsored by a given name or person ID.|
|sponsor_classification|query|string|false|Filter matched sponsors to only include particular types of sponsorships.|
|q|query|string|false|Filter by full text search term.|
|include|query|[[BillInclude](#schemabillinclude)]|false|Additional information to include in response.|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|apikey|query|string|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|sponsorships|
|include|abstracts|
|include|other_titles|
|include|other_identifiers|
|include|actions|
|include|sources|
|include|documents|
|include|versions|
|include|votes|
|include|related_bills|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "abstracts": [
        {
          "abstract": "This bill designates a new state arachnid.",
          "note": "house abstract"
        }
      ],
      "actions": [
        {
          "classification": [
            "passed"
          ],
          "date": "2020-03-14",
          "description": "Passed 1st Reading",
          "order": 0,
          "organization": {
            "classification": "legislature",
            "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
            "name": "North Carolina General Assembly"
          }
        }
      ],
      "classification": [
        "resolution"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "documents": [
        {
          "date": "2020-10-01",
          "links": [
            {
              "media_type": "application/pdf",
              "url": "https://example.com/doc.pdf"
            }
          ],
          "note": "Latest Version"
        }
      ],
      "extras": {},
      "first_action_date": "2020-01-01",
      "from_organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "id": "ocd-bill/f0049138-1ad8-4506-a2a4-f4dd1251bbba",
      "identifier": "SB 113",
      "jurisdiction": {
        "classification": "state",
        "id": "ocd-jurisdiction/country:us/state:nc/government",
        "name": "North Carolina"
      },
      "latest_action_date": "2020-02-01",
      "latest_action_description": "Introduced in House",
      "latest_passage_date": "2020-03-01",
      "openstates_url": "https://openstates.org/nc/bills/2019/HB1105/",
      "other_identifiers": [
        {
          "identifier": "HB 74"
        }
      ],
      "other_titles": [
        {
          "note": "short title",
          "title": "Designating the scorpion as the state arachnid."
        }
      ],
      "related_bills": [
        {
          "identifier": "HB 123",
          "legislative_session": "2022S1",
          "relation_type": "companion"
        }
      ],
      "session": "2020",
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "sponsorships": [
        {
          "classification": "primary",
          "entity_type": "person",
          "name": "JONES",
          "organization": {
            "classification": "legislature",
            "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
            "name": "North Carolina General Assembly"
          },
          "person": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          },
          "primary": true
        }
      ],
      "subject": [
        "SCORPIONS",
        "SYMBOLS"
      ],
      "title": "Adopting a State Scorpion",
      "updated_at": "1970-01-01T00:00:00Z",
      "versions": [
        {
          "date": "2020-10-01",
          "links": [
            {
              "media_type": "application/pdf",
              "url": "https://example.com/doc.pdf"
            }
          ],
          "note": "Latest Version"
        }
      ],
      "votes": [
        {
          "counts": [
            {
              "option": "yes",
              "value": 48
            }
          ],
          "extras": {},
          "id": "string",
          "identifier": "HV #3312",
          "motion_classification": [
            "passage"
          ],
          "motion_text": "Shall the bill be passed?",
          "organization": {
            "classification": "legislature",
            "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
            "name": "North Carolina General Assembly"
          },
          "result": "pass",
          "sources": [
            {
              "note": "homepage",
              "url": "https://example.com/"
            }
          ],
          "start_date": "2020-09-18",
          "votes": [
            {
              "option": "no",
              "voter": {
                "current_role": {
                  "district": 3,
                  "division_id": "ocd-division/country:us/state:nc/sldu:3",
                  "org_classification": "upper",
                  "title": "Senator"
                },
                "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
                "name": "Angela Augusta",
                "party": "Democratic"
              },
              "voter_name": "Wu"
            }
          ]
        }
      ]
    }
  ]
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

<h3 id="bills-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BillList](#schemabilllist)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Bill Detail By Id

<a id="opIdbill_detail_by_id_bills_ocd_bill__openstates_bill_id__get"></a>

> Code samples

```bash
curl https://example.com/bills/ocd-bill/string \
  -H 'Accept: application/json'
```

`GET /bills/ocd-bill/{openstates_bill_id}`

Obtain bill information by internal ID in the format ocd-bill/*uuid*.

<h3 id="bill-detail-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|openstates_bill_id|path|string|true|none|
|include|query|[[BillInclude](#schemabillinclude)]|false|none|
|apikey|query|string|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|sponsorships|
|include|abstracts|
|include|other_titles|
|include|other_identifiers|
|include|actions|
|include|sources|
|include|documents|
|include|versions|
|include|votes|
|include|related_bills|

> Example responses

> 200 Response

```json
{
  "abstracts": [
    {
      "abstract": "This bill designates a new state arachnid.",
      "note": "house abstract"
    }
  ],
  "actions": [
    {
      "classification": [
        "passed"
      ],
      "date": "2020-03-14",
      "description": "Passed 1st Reading",
      "order": 0,
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      }
    }
  ],
  "classification": [
    "resolution"
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "documents": [
    {
      "date": "2020-10-01",
      "links": [
        {
          "media_type": "application/pdf",
          "url": "https://example.com/doc.pdf"
        }
      ],
      "note": "Latest Version"
    }
  ],
  "extras": {},
  "first_action_date": "2020-01-01",
  "from_organization": {
    "classification": "legislature",
    "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
    "name": "North Carolina General Assembly"
  },
  "id": "ocd-bill/f0049138-1ad8-4506-a2a4-f4dd1251bbba",
  "identifier": "SB 113",
  "jurisdiction": {
    "classification": "state",
    "id": "ocd-jurisdiction/country:us/state:nc/government",
    "name": "North Carolina"
  },
  "latest_action_date": "2020-02-01",
  "latest_action_description": "Introduced in House",
  "latest_passage_date": "2020-03-01",
  "openstates_url": "https://openstates.org/nc/bills/2019/HB1105/",
  "other_identifiers": [
    {
      "identifier": "HB 74"
    }
  ],
  "other_titles": [
    {
      "note": "short title",
      "title": "Designating the scorpion as the state arachnid."
    }
  ],
  "related_bills": [
    {
      "identifier": "HB 123",
      "legislative_session": "2022S1",
      "relation_type": "companion"
    }
  ],
  "session": "2020",
  "sources": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "sponsorships": [
    {
      "classification": "primary",
      "entity_type": "person",
      "name": "JONES",
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "person": {
        "current_role": {
          "district": 3,
          "division_id": "ocd-division/country:us/state:nc/sldu:3",
          "org_classification": "upper",
          "title": "Senator"
        },
        "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
        "name": "Angela Augusta",
        "party": "Democratic"
      },
      "primary": true
    }
  ],
  "subject": [
    "SCORPIONS",
    "SYMBOLS"
  ],
  "title": "Adopting a State Scorpion",
  "updated_at": "1970-01-01T00:00:00Z",
  "versions": [
    {
      "date": "2020-10-01",
      "links": [
        {
          "media_type": "application/pdf",
          "url": "https://example.com/doc.pdf"
        }
      ],
      "note": "Latest Version"
    }
  ],
  "votes": [
    {
      "counts": [
        {
          "option": "yes",
          "value": 48
        }
      ],
      "extras": {},
      "id": "string",
      "identifier": "HV #3312",
      "motion_classification": [
        "passage"
      ],
      "motion_text": "Shall the bill be passed?",
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "result": "pass",
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "start_date": "2020-09-18",
      "votes": [
        {
          "option": "no",
          "voter": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          },
          "voter_name": "Wu"
        }
      ]
    }
  ]
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

<h3 id="bill-detail-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Bill](#schemabill)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Bill Detail

<a id="opIdbill_detail_bills__jurisdiction___session___bill_id__get"></a>

> Code samples

```bash
curl https://example.com/bills/string/string/string \
  -H 'Accept: application/json'
```

`GET /bills/{jurisdiction}/{session}/{bill_id}`

Obtain bill information based on (state, session, bill_id).

<h3 id="bill-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jurisdiction|path|string|true|none|
|session|path|string|true|none|
|bill_id|path|string|true|none|
|include|query|[[BillInclude](#schemabillinclude)]|false|none|
|apikey|query|string|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|sponsorships|
|include|abstracts|
|include|other_titles|
|include|other_identifiers|
|include|actions|
|include|sources|
|include|documents|
|include|versions|
|include|votes|
|include|related_bills|

> Example responses

> 200 Response

```json
{
  "abstracts": [
    {
      "abstract": "This bill designates a new state arachnid.",
      "note": "house abstract"
    }
  ],
  "actions": [
    {
      "classification": [
        "passed"
      ],
      "date": "2020-03-14",
      "description": "Passed 1st Reading",
      "order": 0,
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      }
    }
  ],
  "classification": [
    "resolution"
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "documents": [
    {
      "date": "2020-10-01",
      "links": [
        {
          "media_type": "application/pdf",
          "url": "https://example.com/doc.pdf"
        }
      ],
      "note": "Latest Version"
    }
  ],
  "extras": {},
  "first_action_date": "2020-01-01",
  "from_organization": {
    "classification": "legislature",
    "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
    "name": "North Carolina General Assembly"
  },
  "id": "ocd-bill/f0049138-1ad8-4506-a2a4-f4dd1251bbba",
  "identifier": "SB 113",
  "jurisdiction": {
    "classification": "state",
    "id": "ocd-jurisdiction/country:us/state:nc/government",
    "name": "North Carolina"
  },
  "latest_action_date": "2020-02-01",
  "latest_action_description": "Introduced in House",
  "latest_passage_date": "2020-03-01",
  "openstates_url": "https://openstates.org/nc/bills/2019/HB1105/",
  "other_identifiers": [
    {
      "identifier": "HB 74"
    }
  ],
  "other_titles": [
    {
      "note": "short title",
      "title": "Designating the scorpion as the state arachnid."
    }
  ],
  "related_bills": [
    {
      "identifier": "HB 123",
      "legislative_session": "2022S1",
      "relation_type": "companion"
    }
  ],
  "session": "2020",
  "sources": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "sponsorships": [
    {
      "classification": "primary",
      "entity_type": "person",
      "name": "JONES",
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "person": {
        "current_role": {
          "district": 3,
          "division_id": "ocd-division/country:us/state:nc/sldu:3",
          "org_classification": "upper",
          "title": "Senator"
        },
        "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
        "name": "Angela Augusta",
        "party": "Democratic"
      },
      "primary": true
    }
  ],
  "subject": [
    "SCORPIONS",
    "SYMBOLS"
  ],
  "title": "Adopting a State Scorpion",
  "updated_at": "1970-01-01T00:00:00Z",
  "versions": [
    {
      "date": "2020-10-01",
      "links": [
        {
          "media_type": "application/pdf",
          "url": "https://example.com/doc.pdf"
        }
      ],
      "note": "Latest Version"
    }
  ],
  "votes": [
    {
      "counts": [
        {
          "option": "yes",
          "value": 48
        }
      ],
      "extras": {},
      "id": "string",
      "identifier": "HV #3312",
      "motion_classification": [
        "passage"
      ],
      "motion_text": "Shall the bill be passed?",
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "result": "pass",
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "start_date": "2020-09-18",
      "votes": [
        {
          "option": "no",
          "voter": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          },
          "voter_name": "Wu"
        }
      ]
    }
  ]
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

<h3 id="bill-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Bill](#schemabill)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-states-api-v3-committees">committees</h1>

## Committee List

<a id="opIdcommittee_list_committees_get"></a>

> Code samples

```bash
curl https://example.com/committees \
  -H 'Accept: application/json'
```

`GET /committees`

<h3 id="committee-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jurisdiction|query|string|false|Filter by jurisdiction name or ID.|
|classification|query|[CommitteeClassification](#schemacommitteeclassification)|false|none|
|parent|query|string|false|ocd-organization ID of parent committee.|
|chamber|query|object|false|Chamber of committee, generally upper or lower.|
|include|query|[[CommitteeInclude](#schemacommitteeinclude)]|false|Additional includes for the Committee response.|
|apikey|query|string|false|none|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|classification|committee|
|classification|subcommittee|
|include|memberships|
|include|links|
|include|sources|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "classification": "committee",
      "extras": {
        "room": "Room 4B"
      },
      "id": "ocd-organization/aabbbbcc-dddd-eeee-ffff-0123456789ab",
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "memberships": [
        {
          "person": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          },
          "person_name": "string",
          "role": "string"
        }
      ],
      "name": "Health & Public Services",
      "other_names": [
        {
          "name": "Auggie",
          "note": "nickname"
        }
      ],
      "parent_id": "ocd-organization/aabbbbcc-dddd-eeee-ffff-999988887777",
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ]
    }
  ]
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

<h3 id="committee-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CommitteeList](#schemacommitteelist)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Committee Detail

<a id="opIdcommittee_detail_committees__committee_id__get"></a>

> Code samples

```bash
curl https://example.com/committees/string \
  -H 'Accept: application/json'
```

`GET /committees/{committee_id}`

Get details on a single committee by ID.

<h3 id="committee-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|committee_id|path|string|true|none|
|include|query|[[CommitteeInclude](#schemacommitteeinclude)]|false|Additional includes for the Committee response.|
|apikey|query|string|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|memberships|
|include|links|
|include|sources|

> Example responses

> 200 Response

```json
{
  "classification": "committee",
  "extras": {
    "room": "Room 4B"
  },
  "id": "ocd-organization/aabbbbcc-dddd-eeee-ffff-0123456789ab",
  "links": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "memberships": [
    {
      "person": {
        "current_role": {
          "district": 3,
          "division_id": "ocd-division/country:us/state:nc/sldu:3",
          "org_classification": "upper",
          "title": "Senator"
        },
        "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
        "name": "Angela Augusta",
        "party": "Democratic"
      },
      "person_name": "string",
      "role": "string"
    }
  ],
  "name": "Health & Public Services",
  "other_names": [
    {
      "name": "Auggie",
      "note": "nickname"
    }
  ],
  "parent_id": "ocd-organization/aabbbbcc-dddd-eeee-ffff-999988887777",
  "sources": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ]
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

<h3 id="committee-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Committee](#schemacommittee)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-states-api-v3-events">events</h1>

## Event List

<a id="opIdevent_list_events_get"></a>

> Code samples

```bash
curl https://example.com/events \
  -H 'Accept: application/json'
```

`GET /events`

<h3 id="event-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jurisdiction|query|string|false|Filter by jurisdiction name or ID.|
|deleted|query|boolean|false|Return events marked as deleted?|
|before|query|string|false|Limit results to those starting before a given datetime.|
|after|query|string|false|Limit results to those starting before a given datetime.|
|require_bills|query|boolean|false|Limit results to events with associated bills.|
|include|query|[[EventInclude](#schemaeventinclude)]|false|Additional includes for the Event response.|
|apikey|query|string|false|none|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|links|
|include|sources|
|include|media|
|include|documents|
|include|participants|
|include|agenda|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "agenda": [
        {
          "classification": [
            "string"
          ],
          "description": "string",
          "extras": {},
          "media": [
            {
              "classification": "string",
              "date": "string",
              "links": [
                {
                  "note": "homepage",
                  "url": "https://example.com/"
                }
              ],
              "note": "string",
              "offset": 0
            }
          ],
          "notes": [
            "string"
          ],
          "order": 0,
          "related_entities": [
            {
              "bill": {
                "id": "ocd-bill/12345678-0000-1111-2222-333344445555",
                "identifier": "string",
                "session": "string",
                "title": "string"
              },
              "entity_type": "person",
              "name": "JONES",
              "note": "string",
              "organization": {
                "classification": "legislature",
                "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
                "name": "North Carolina General Assembly"
              },
              "person": {
                "current_role": {
                  "district": 3,
                  "division_id": "ocd-division/country:us/state:nc/sldu:3",
                  "org_classification": "upper",
                  "title": "Senator"
                },
                "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
                "name": "Angela Augusta",
                "party": "Democratic"
              },
              "vote": {
                "id": "ocd-vote/12345678-0000-1111-2222-333344445555",
                "motion_text": "Shall the bill be passed?"
              }
            }
          ],
          "subjects": [
            "string"
          ]
        }
      ],
      "all_day": true,
      "classification": "string",
      "deleted": true,
      "description": "string",
      "documents": [
        {
          "classification": "string",
          "date": "string",
          "links": [
            {
              "note": "homepage",
              "url": "https://example.com/"
            }
          ],
          "note": "string"
        }
      ],
      "end_date": "string",
      "id": "string",
      "jurisdiction": {
        "classification": "state",
        "id": "ocd-jurisdiction/country:us/state:nc/government",
        "name": "North Carolina"
      },
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "location": {
        "name": "string",
        "url": "string"
      },
      "media": [
        {
          "classification": "string",
          "date": "string",
          "links": [
            {
              "note": "homepage",
              "url": "https://example.com/"
            }
          ],
          "note": "string",
          "offset": 0
        }
      ],
      "name": "string",
      "participants": [
        {
          "entity_type": "person",
          "name": "JONES",
          "note": "string",
          "organization": {
            "classification": "legislature",
            "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
            "name": "North Carolina General Assembly"
          },
          "person": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          }
        }
      ],
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "start_date": "string",
      "status": "string",
      "upstream_id": "string"
    }
  ]
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

<h3 id="event-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EventList](#schemaeventlist)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Event Detail

<a id="opIdevent_detail_events__event_id__get"></a>

> Code samples

```bash
curl https://example.com/events/string \
  -H 'Accept: application/json'
```

`GET /events/{event_id}`

Get details on a single event by ID.

<h3 id="event-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|include|query|[[EventInclude](#schemaeventinclude)]|false|Additional includes for the Event response.|
|apikey|query|string|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|links|
|include|sources|
|include|media|
|include|documents|
|include|participants|
|include|agenda|

> Example responses

> 200 Response

```json
{
  "agenda": [
    {
      "classification": [
        "string"
      ],
      "description": "string",
      "extras": {},
      "media": [
        {
          "classification": "string",
          "date": "string",
          "links": [
            {
              "note": "homepage",
              "url": "https://example.com/"
            }
          ],
          "note": "string",
          "offset": 0
        }
      ],
      "notes": [
        "string"
      ],
      "order": 0,
      "related_entities": [
        {
          "bill": {
            "id": "ocd-bill/12345678-0000-1111-2222-333344445555",
            "identifier": "string",
            "session": "string",
            "title": "string"
          },
          "entity_type": "person",
          "name": "JONES",
          "note": "string",
          "organization": {
            "classification": "legislature",
            "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
            "name": "North Carolina General Assembly"
          },
          "person": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          },
          "vote": {
            "id": "ocd-vote/12345678-0000-1111-2222-333344445555",
            "motion_text": "Shall the bill be passed?"
          }
        }
      ],
      "subjects": [
        "string"
      ]
    }
  ],
  "all_day": true,
  "classification": "string",
  "deleted": true,
  "description": "string",
  "documents": [
    {
      "classification": "string",
      "date": "string",
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "note": "string"
    }
  ],
  "end_date": "string",
  "id": "string",
  "jurisdiction": {
    "classification": "state",
    "id": "ocd-jurisdiction/country:us/state:nc/government",
    "name": "North Carolina"
  },
  "links": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "location": {
    "name": "string",
    "url": "string"
  },
  "media": [
    {
      "classification": "string",
      "date": "string",
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "note": "string",
      "offset": 0
    }
  ],
  "name": "string",
  "participants": [
    {
      "entity_type": "person",
      "name": "JONES",
      "note": "string",
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "person": {
        "current_role": {
          "district": 3,
          "division_id": "ocd-division/country:us/state:nc/sldu:3",
          "org_classification": "upper",
          "title": "Senator"
        },
        "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
        "name": "Angela Augusta",
        "party": "Democratic"
      }
    }
  ],
  "sources": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "start_date": "string",
  "status": "string",
  "upstream_id": "string"
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

<h3 id="event-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Event](#schemaevent)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-states-api-v3-jurisdictions">jurisdictions</h1>

## Jurisdiction List

<a id="opIdjurisdiction_list_jurisdictions_get"></a>

> Code samples

```bash
curl https://example.com/jurisdictions \
  -H 'Accept: application/json'
```

`GET /jurisdictions`

Get list of supported Jurisdictions, a Jurisdiction is a state or municipality.

<h3 id="jurisdiction-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|classification|query|object|false|Filter returned jurisdictions by type.|
|include|query|[[JurisdictionInclude](#schemajurisdictioninclude)]|false|Additional information to include in response.|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|apikey|query|string|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|organizations|
|include|legislative_sessions|
|include|latest_runs|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "classification": "state",
      "division_id": "ocd-division/country:us/state:nc",
      "id": "ocd-jurisdiction/country:us/state:nc/government",
      "latest_bill_update": "1970-01-01T00:00:00Z",
      "latest_people_update": "1970-01-01T00:00:00Z",
      "latest_runs": [
        {
          "end_time": "1970-01-01T00:00:00Z",
          "start_time": "1970-01-01T00:00:00Z",
          "success": true
        }
      ],
      "legislative_sessions": [
        {
          "classification": "string",
          "downloads": [
            {
              "created_at": "1970-01-01T00:00:00Z",
              "data_type": "string",
              "updated_at": "1970-01-01T00:00:00Z",
              "url": "string"
            }
          ],
          "end_date": "string",
          "identifier": "string",
          "name": "string",
          "start_date": "string"
        }
      ],
      "name": "North Carolina",
      "organizations": [
        {
          "classification": "legislature",
          "districts": [
            {
              "division_id": "ocd-division/country:us/state:mn/sldu:4",
              "label": "2",
              "maximum_memberships": 1,
              "role": "Senator"
            }
          ],
          "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
          "name": "North Carolina General Assembly"
        }
      ],
      "url": "https://nc.gov"
    }
  ]
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

<h3 id="jurisdiction-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[JurisdictionList](#schemajurisdictionlist)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Jurisdiction Detail

<a id="opIdjurisdiction_detail_jurisdictions__jurisdiction_id__get"></a>

> Code samples

```bash
curl https://example.com/jurisdictions/string \
  -H 'Accept: application/json'
```

`GET /jurisdictions/{jurisdiction_id}`

Get details on a single Jurisdiction (e.g. state or municipality).

<h3 id="jurisdiction-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jurisdiction_id|path|string|true|none|
|include|query|[[JurisdictionInclude](#schemajurisdictioninclude)]|false|Additional includes for the Jurisdiction response.|
|apikey|query|string|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|organizations|
|include|legislative_sessions|
|include|latest_runs|

> Example responses

> 200 Response

```json
{
  "classification": "state",
  "division_id": "ocd-division/country:us/state:nc",
  "id": "ocd-jurisdiction/country:us/state:nc/government",
  "latest_bill_update": "1970-01-01T00:00:00Z",
  "latest_people_update": "1970-01-01T00:00:00Z",
  "latest_runs": [
    {
      "end_time": "1970-01-01T00:00:00Z",
      "start_time": "1970-01-01T00:00:00Z",
      "success": true
    }
  ],
  "legislative_sessions": [
    {
      "classification": "string",
      "downloads": [
        {
          "created_at": "1970-01-01T00:00:00Z",
          "data_type": "string",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        }
      ],
      "end_date": "string",
      "identifier": "string",
      "name": "string",
      "start_date": "string"
    }
  ],
  "name": "North Carolina",
  "organizations": [
    {
      "classification": "legislature",
      "districts": [
        {
          "division_id": "ocd-division/country:us/state:mn/sldu:4",
          "label": "2",
          "maximum_memberships": 1,
          "role": "Senator"
        }
      ],
      "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
      "name": "North Carolina General Assembly"
    }
  ],
  "url": "https://nc.gov"
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

<h3 id="jurisdiction-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Jurisdiction](#schemajurisdiction)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-states-api-v3-default">Default</h1>

## Metrics

<a id="opIdmetrics_metrics_get"></a>

> Code samples

```bash
curl https://example.com/metrics \
  -H 'Accept: application/json'
```

`GET /metrics`

Endpoint that serves Prometheus metrics.

> Example responses

> 200 Response

```json
null
```

<h3 id="metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-states-api-v3-people">people</h1>

## People Search

<a id="opIdpeople_search_people_get"></a>

> Code samples

```bash
curl https://example.com/people \
  -H 'Accept: application/json'
```

`GET /people`

Get list of people matching selected criteria.

Must provide either **jurisdiction**, **name**, or one or more **id** parameters.

<h3 id="people-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jurisdiction|query|string|false|Filter by jurisdiction name or id.|
|name|query|string|false|Filter by name, case-insensitive match.|
|id|query|[string]|false|Filter by id, can be specified multiple times for multiple people.|
|org_classification|query|object|false|Filter by current role.|
|district|query|string|false|Filter by district name.|
|include|query|[[PersonInclude](#schemapersoninclude)]|false|Additional information to include in response.|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|apikey|query|string|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|other_names|
|include|other_identifiers|
|include|links|
|include|sources|
|include|offices|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "birth_date": "1960-05-04",
      "created_at": "1970-01-01T00:00:00Z",
      "current_role": {
        "district": 3,
        "division_id": "ocd-division/country:us/state:nc/sldu:3",
        "org_classification": "upper",
        "title": "Senator"
      },
      "death_date": "2019-04-10",
      "email": "aperson@example.com",
      "extras": {
        "profession": "Doctor"
      },
      "family_name": "Augusta",
      "gender": "female",
      "given_name": "Angela",
      "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
      "image": "https://example.com/ncimg/3.png",
      "jurisdiction": {
        "classification": "state",
        "id": "ocd-jurisdiction/country:us/state:nc/government",
        "name": "North Carolina"
      },
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "name": "Angela Augusta",
      "offices": [
        {
          "address": "212 Maple Lane; Raleigh NC; 27526",
          "classification": "capitol",
          "fax": "919-555-1234",
          "name": "District Office",
          "voice": "919-555-0064"
        }
      ],
      "openstates_url": "https://openstates.org/person/amos-l-quick-iii-28NRPPfJA6FGVl9RrjpKjl/",
      "other_identifiers": [
        {
          "identifier": "NCL000123",
          "scheme": "legacy_openstates"
        }
      ],
      "other_names": [
        {
          "name": "Auggie",
          "note": "nickname"
        }
      ],
      "party": "Democratic",
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
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

<h3 id="people-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PersonList](#schemapersonlist)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## People Geo

<a id="opIdpeople_geo_people_geo_get"></a>

> Code samples

```bash
curl 'https://example.com/people.geo?lat=0&lng=0' \
  -H 'Accept: application/json'
```

`GET /people.geo`

Get list of people currently representing a given location.

**Note:** Currently limited to state legislators and US Congress.  Governors & mayors are not included.

<h3 id="people-geo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lat|query|number|true|Latitude of point.|
|lng|query|number|true|Longitude of point.|
|include|query|[[PersonInclude](#schemapersoninclude)]|false|Additional information to include in the response.|
|apikey|query|string|false|none|
|x-api-key|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|other_names|
|include|other_identifiers|
|include|links|
|include|sources|
|include|offices|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "birth_date": "1960-05-04",
      "created_at": "1970-01-01T00:00:00Z",
      "current_role": {
        "district": 3,
        "division_id": "ocd-division/country:us/state:nc/sldu:3",
        "org_classification": "upper",
        "title": "Senator"
      },
      "death_date": "2019-04-10",
      "email": "aperson@example.com",
      "extras": {
        "profession": "Doctor"
      },
      "family_name": "Augusta",
      "gender": "female",
      "given_name": "Angela",
      "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
      "image": "https://example.com/ncimg/3.png",
      "jurisdiction": {
        "classification": "state",
        "id": "ocd-jurisdiction/country:us/state:nc/government",
        "name": "North Carolina"
      },
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "name": "Angela Augusta",
      "offices": [
        {
          "address": "212 Maple Lane; Raleigh NC; 27526",
          "classification": "capitol",
          "fax": "919-555-1234",
          "name": "District Office",
          "voice": "919-555-0064"
        }
      ],
      "openstates_url": "https://openstates.org/person/amos-l-quick-iii-28NRPPfJA6FGVl9RrjpKjl/",
      "other_identifiers": [
        {
          "identifier": "NCL000123",
          "scheme": "legacy_openstates"
        }
      ],
      "other_names": [
        {
          "name": "Auggie",
          "note": "nickname"
        }
      ],
      "party": "Democratic",
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
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

<h3 id="people-geo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PersonList](#schemapersonlist)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AltIdentifier">AltIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaaltidentifier"></a>
<a id="schema_AltIdentifier"></a>
<a id="tocSaltidentifier"></a>
<a id="tocsaltidentifier"></a>

```json
{
  "identifier": "NCL000123",
  "scheme": "legacy_openstates"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|true|none|none|
|scheme|string|true|none|none|

<h2 id="tocS_AltName">AltName</h2>
<!-- backwards compatibility -->
<a id="schemaaltname"></a>
<a id="schema_AltName"></a>
<a id="tocSaltname"></a>
<a id="tocsaltname"></a>

```json
{
  "name": "Auggie",
  "note": "nickname"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|note|string|true|none|none|

<h2 id="tocS_Bill">Bill</h2>
<!-- backwards compatibility -->
<a id="schemabill"></a>
<a id="schema_Bill"></a>
<a id="tocSbill"></a>
<a id="tocsbill"></a>

```json
{
  "abstracts": [
    {
      "abstract": "This bill designates a new state arachnid.",
      "note": "house abstract"
    }
  ],
  "actions": [
    {
      "classification": [
        "passed"
      ],
      "date": "2020-03-14",
      "description": "Passed 1st Reading",
      "order": 0,
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      }
    }
  ],
  "classification": [
    "resolution"
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "documents": [
    {
      "date": "2020-10-01",
      "links": [
        {
          "media_type": "application/pdf",
          "url": "https://example.com/doc.pdf"
        }
      ],
      "note": "Latest Version"
    }
  ],
  "extras": {},
  "first_action_date": "2020-01-01",
  "from_organization": {
    "classification": "legislature",
    "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
    "name": "North Carolina General Assembly"
  },
  "id": "ocd-bill/f0049138-1ad8-4506-a2a4-f4dd1251bbba",
  "identifier": "SB 113",
  "jurisdiction": {
    "classification": "state",
    "id": "ocd-jurisdiction/country:us/state:nc/government",
    "name": "North Carolina"
  },
  "latest_action_date": "2020-02-01",
  "latest_action_description": "Introduced in House",
  "latest_passage_date": "2020-03-01",
  "openstates_url": "https://openstates.org/nc/bills/2019/HB1105/",
  "other_identifiers": [
    {
      "identifier": "HB 74"
    }
  ],
  "other_titles": [
    {
      "note": "short title",
      "title": "Designating the scorpion as the state arachnid."
    }
  ],
  "related_bills": [
    {
      "identifier": "HB 123",
      "legislative_session": "2022S1",
      "relation_type": "companion"
    }
  ],
  "session": "2020",
  "sources": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "sponsorships": [
    {
      "classification": "primary",
      "entity_type": "person",
      "name": "JONES",
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "person": {
        "current_role": {
          "district": 3,
          "division_id": "ocd-division/country:us/state:nc/sldu:3",
          "org_classification": "upper",
          "title": "Senator"
        },
        "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
        "name": "Angela Augusta",
        "party": "Democratic"
      },
      "primary": true
    }
  ],
  "subject": [
    "SCORPIONS",
    "SYMBOLS"
  ],
  "title": "Adopting a State Scorpion",
  "updated_at": "1970-01-01T00:00:00Z",
  "versions": [
    {
      "date": "2020-10-01",
      "links": [
        {
          "media_type": "application/pdf",
          "url": "https://example.com/doc.pdf"
        }
      ],
      "note": "Latest Version"
    }
  ],
  "votes": [
    {
      "counts": [
        {
          "option": "yes",
          "value": 48
        }
      ],
      "extras": {},
      "id": "string",
      "identifier": "HV #3312",
      "motion_classification": [
        "passage"
      ],
      "motion_text": "Shall the bill be passed?",
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "result": "pass",
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "start_date": "2020-09-18",
      "votes": [
        {
          "option": "no",
          "voter": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          },
          "voter_name": "Wu"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abstracts|[[BillAbstract](#schemabillabstract)]|false|none|none|
|actions|[[BillAction](#schemabillaction)]|false|none|none|
|classification|[string]|false|none|none|
|created_at|string(date-time)|true|none|none|
|documents|[[BillDocumentOrVersion](#schemabilldocumentorversion)]|false|none|none|
|extras|object|false|none|none|
|first_action_date|string|false|none|none|
|from_organization|[Organization](#schemaorganization)|true|none|none|
|id|string|true|none|none|
|identifier|string|true|none|none|
|jurisdiction|[CompactJurisdiction](#schemacompactjurisdiction)|true|none|none|
|latest_action_date|string|false|none|none|
|latest_action_description|string|false|none|none|
|latest_passage_date|string|false|none|none|
|openstates_url|string|true|none|none|
|other_identifiers|[[BillIdentifier](#schemabillidentifier)]|false|none|none|
|other_titles|[[BillTitle](#schemabilltitle)]|false|none|none|
|related_bills|[[RelatedBill](#schemarelatedbill)]|false|none|none|
|session|string|true|none|none|
|sources|[[Link](#schemalink)]|false|none|none|
|sponsorships|[[BillSponsorship](#schemabillsponsorship)]|false|none|none|
|subject|[string]|false|none|none|
|title|string|true|none|none|
|updated_at|string(date-time)|true|none|none|
|versions|[[BillDocumentOrVersion](#schemabilldocumentorversion)]|false|none|none|
|votes|[[VoteEvent](#schemavoteevent)]|false|none|none|

<h2 id="tocS_BillAbstract">BillAbstract</h2>
<!-- backwards compatibility -->
<a id="schemabillabstract"></a>
<a id="schema_BillAbstract"></a>
<a id="tocSbillabstract"></a>
<a id="tocsbillabstract"></a>

```json
{
  "abstract": "This bill designates a new state arachnid.",
  "note": "house abstract"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abstract|string|true|none|none|
|note|string|true|none|none|

<h2 id="tocS_BillAction">BillAction</h2>
<!-- backwards compatibility -->
<a id="schemabillaction"></a>
<a id="schema_BillAction"></a>
<a id="tocSbillaction"></a>
<a id="tocsbillaction"></a>

```json
{
  "classification": [
    "passed"
  ],
  "date": "2020-03-14",
  "description": "Passed 1st Reading",
  "order": 0,
  "organization": {
    "classification": "legislature",
    "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
    "name": "North Carolina General Assembly"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|[string]|true|none|none|
|date|string|true|none|none|
|description|string|true|none|none|
|order|integer|true|none|none|
|organization|[Organization](#schemaorganization)|true|none|none|

<h2 id="tocS_BillDocumentLink">BillDocumentLink</h2>
<!-- backwards compatibility -->
<a id="schemabilldocumentlink"></a>
<a id="schema_BillDocumentLink"></a>
<a id="tocSbilldocumentlink"></a>
<a id="tocsbilldocumentlink"></a>

```json
{
  "media_type": "application/pdf",
  "url": "https://example.com/doc.pdf"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|media_type|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_BillDocumentOrVersion">BillDocumentOrVersion</h2>
<!-- backwards compatibility -->
<a id="schemabilldocumentorversion"></a>
<a id="schema_BillDocumentOrVersion"></a>
<a id="tocSbilldocumentorversion"></a>
<a id="tocsbilldocumentorversion"></a>

```json
{
  "date": "2020-10-01",
  "links": [
    {
      "media_type": "application/pdf",
      "url": "https://example.com/doc.pdf"
    }
  ],
  "note": "Latest Version"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|links|[[BillDocumentLink](#schemabilldocumentlink)]|true|none|none|
|note|string|true|none|none|

<h2 id="tocS_BillIdentifier">BillIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemabillidentifier"></a>
<a id="schema_BillIdentifier"></a>
<a id="tocSbillidentifier"></a>
<a id="tocsbillidentifier"></a>

```json
{
  "identifier": "HB 74"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|true|none|none|

<h2 id="tocS_BillInclude">BillInclude</h2>
<!-- backwards compatibility -->
<a id="schemabillinclude"></a>
<a id="schema_BillInclude"></a>
<a id="tocSbillinclude"></a>
<a id="tocsbillinclude"></a>

```json
"sponsorships"
```

An enumeration.

<h2 id="tocS_BillList">BillList</h2>
<!-- backwards compatibility -->
<a id="schemabilllist"></a>
<a id="schema_BillList"></a>
<a id="tocSbilllist"></a>
<a id="tocsbilllist"></a>

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "abstracts": [
        {
          "abstract": "This bill designates a new state arachnid.",
          "note": "house abstract"
        }
      ],
      "actions": [
        {
          "classification": [
            "passed"
          ],
          "date": "2020-03-14",
          "description": "Passed 1st Reading",
          "order": 0,
          "organization": {
            "classification": "legislature",
            "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
            "name": "North Carolina General Assembly"
          }
        }
      ],
      "classification": [
        "resolution"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "documents": [
        {
          "date": "2020-10-01",
          "links": [
            {
              "media_type": "application/pdf",
              "url": "https://example.com/doc.pdf"
            }
          ],
          "note": "Latest Version"
        }
      ],
      "extras": {},
      "first_action_date": "2020-01-01",
      "from_organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "id": "ocd-bill/f0049138-1ad8-4506-a2a4-f4dd1251bbba",
      "identifier": "SB 113",
      "jurisdiction": {
        "classification": "state",
        "id": "ocd-jurisdiction/country:us/state:nc/government",
        "name": "North Carolina"
      },
      "latest_action_date": "2020-02-01",
      "latest_action_description": "Introduced in House",
      "latest_passage_date": "2020-03-01",
      "openstates_url": "https://openstates.org/nc/bills/2019/HB1105/",
      "other_identifiers": [
        {
          "identifier": "HB 74"
        }
      ],
      "other_titles": [
        {
          "note": "short title",
          "title": "Designating the scorpion as the state arachnid."
        }
      ],
      "related_bills": [
        {
          "identifier": "HB 123",
          "legislative_session": "2022S1",
          "relation_type": "companion"
        }
      ],
      "session": "2020",
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "sponsorships": [
        {
          "classification": "primary",
          "entity_type": "person",
          "name": "JONES",
          "organization": {
            "classification": "legislature",
            "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
            "name": "North Carolina General Assembly"
          },
          "person": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          },
          "primary": true
        }
      ],
      "subject": [
        "SCORPIONS",
        "SYMBOLS"
      ],
      "title": "Adopting a State Scorpion",
      "updated_at": "1970-01-01T00:00:00Z",
      "versions": [
        {
          "date": "2020-10-01",
          "links": [
            {
              "media_type": "application/pdf",
              "url": "https://example.com/doc.pdf"
            }
          ],
          "note": "Latest Version"
        }
      ],
      "votes": [
        {
          "counts": [
            {
              "option": "yes",
              "value": 48
            }
          ],
          "extras": {},
          "id": "string",
          "identifier": "HV #3312",
          "motion_classification": [
            "passage"
          ],
          "motion_text": "Shall the bill be passed?",
          "organization": {
            "classification": "legislature",
            "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
            "name": "North Carolina General Assembly"
          },
          "result": "pass",
          "sources": [
            {
              "note": "homepage",
              "url": "https://example.com/"
            }
          ],
          "start_date": "2020-09-18",
          "votes": [
            {
              "option": "no",
              "voter": {
                "current_role": {
                  "district": 3,
                  "division_id": "ocd-division/country:us/state:nc/sldu:3",
                  "org_classification": "upper",
                  "title": "Senator"
                },
                "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
                "name": "Angela Augusta",
                "party": "Democratic"
              },
              "voter_name": "Wu"
            }
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[PaginationMeta](#schemapaginationmeta)|true|none|none|
|results|[[Bill](#schemabill)]|true|none|none|

<h2 id="tocS_BillSortOption">BillSortOption</h2>
<!-- backwards compatibility -->
<a id="schemabillsortoption"></a>
<a id="schema_BillSortOption"></a>
<a id="tocSbillsortoption"></a>
<a id="tocsbillsortoption"></a>

```json
"updated_asc"
```

An enumeration.

<h2 id="tocS_BillSponsorship">BillSponsorship</h2>
<!-- backwards compatibility -->
<a id="schemabillsponsorship"></a>
<a id="schema_BillSponsorship"></a>
<a id="tocSbillsponsorship"></a>
<a id="tocsbillsponsorship"></a>

```json
{
  "classification": "primary",
  "entity_type": "person",
  "name": "JONES",
  "organization": {
    "classification": "legislature",
    "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
    "name": "North Carolina General Assembly"
  },
  "person": {
    "current_role": {
      "district": 3,
      "division_id": "ocd-division/country:us/state:nc/sldu:3",
      "org_classification": "upper",
      "title": "Senator"
    },
    "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
    "name": "Angela Augusta",
    "party": "Democratic"
  },
  "primary": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|string|true|none|none|
|entity_type|string|true|none|none|
|name|string|true|none|none|
|organization|object|false|none|none|
|person|[CompactPerson](#schemacompactperson)|false|none|none|
|primary|boolean|true|none|none|

<h2 id="tocS_BillTitle">BillTitle</h2>
<!-- backwards compatibility -->
<a id="schemabilltitle"></a>
<a id="schema_BillTitle"></a>
<a id="tocSbilltitle"></a>
<a id="tocsbilltitle"></a>

```json
{
  "note": "short title",
  "title": "Designating the scorpion as the state arachnid."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|true|none|none|
|title|string|true|none|none|

<h2 id="tocS_Chamber">Chamber</h2>
<!-- backwards compatibility -->
<a id="schemachamber"></a>
<a id="schema_Chamber"></a>
<a id="tocSchamber"></a>
<a id="tocschamber"></a>

```json
{
  "classification": "legislature",
  "districts": [
    {
      "division_id": "ocd-division/country:us/state:mn/sldu:4",
      "label": "2",
      "maximum_memberships": 1,
      "role": "Senator"
    }
  ],
  "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
  "name": "North Carolina General Assembly"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|string|true|none|none|
|districts|[[Post](#schemapost)]|false|none|none|
|id|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_Committee">Committee</h2>
<!-- backwards compatibility -->
<a id="schemacommittee"></a>
<a id="schema_Committee"></a>
<a id="tocScommittee"></a>
<a id="tocscommittee"></a>

```json
{
  "classification": "committee",
  "extras": {
    "room": "Room 4B"
  },
  "id": "ocd-organization/aabbbbcc-dddd-eeee-ffff-0123456789ab",
  "links": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "memberships": [
    {
      "person": {
        "current_role": {
          "district": 3,
          "division_id": "ocd-division/country:us/state:nc/sldu:3",
          "org_classification": "upper",
          "title": "Senator"
        },
        "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
        "name": "Angela Augusta",
        "party": "Democratic"
      },
      "person_name": "string",
      "role": "string"
    }
  ],
  "name": "Health & Public Services",
  "other_names": [
    {
      "name": "Auggie",
      "note": "nickname"
    }
  ],
  "parent_id": "ocd-organization/aabbbbcc-dddd-eeee-ffff-999988887777",
  "sources": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|[CommitteeClassification](#schemacommitteeclassification)|true|none|An enumeration.|
|extras|object|true|none|none|
|id|string|true|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|memberships|[[CommitteeMembership](#schemacommitteemembership)]|false|none|none|
|name|string|true|none|none|
|other_names|[[AltName](#schemaaltname)]|false|none|none|
|parent_id|string|true|none|none|
|sources|[[Link](#schemalink)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|classification|committee|
|classification|subcommittee|

<h2 id="tocS_CommitteeClassification">CommitteeClassification</h2>
<!-- backwards compatibility -->
<a id="schemacommitteeclassification"></a>
<a id="schema_CommitteeClassification"></a>
<a id="tocScommitteeclassification"></a>
<a id="tocscommitteeclassification"></a>

```json
"committee"
```

An enumeration.

<h2 id="tocS_CommitteeInclude">CommitteeInclude</h2>
<!-- backwards compatibility -->
<a id="schemacommitteeinclude"></a>
<a id="schema_CommitteeInclude"></a>
<a id="tocScommitteeinclude"></a>
<a id="tocscommitteeinclude"></a>

```json
"memberships"
```

An enumeration.

<h2 id="tocS_CommitteeList">CommitteeList</h2>
<!-- backwards compatibility -->
<a id="schemacommitteelist"></a>
<a id="schema_CommitteeList"></a>
<a id="tocScommitteelist"></a>
<a id="tocscommitteelist"></a>

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "classification": "committee",
      "extras": {
        "room": "Room 4B"
      },
      "id": "ocd-organization/aabbbbcc-dddd-eeee-ffff-0123456789ab",
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "memberships": [
        {
          "person": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          },
          "person_name": "string",
          "role": "string"
        }
      ],
      "name": "Health & Public Services",
      "other_names": [
        {
          "name": "Auggie",
          "note": "nickname"
        }
      ],
      "parent_id": "ocd-organization/aabbbbcc-dddd-eeee-ffff-999988887777",
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[PaginationMeta](#schemapaginationmeta)|true|none|none|
|results|[[Committee](#schemacommittee)]|true|none|none|

<h2 id="tocS_CommitteeMembership">CommitteeMembership</h2>
<!-- backwards compatibility -->
<a id="schemacommitteemembership"></a>
<a id="schema_CommitteeMembership"></a>
<a id="tocScommitteemembership"></a>
<a id="tocscommitteemembership"></a>

```json
{
  "person": {
    "current_role": {
      "district": 3,
      "division_id": "ocd-division/country:us/state:nc/sldu:3",
      "org_classification": "upper",
      "title": "Senator"
    },
    "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
    "name": "Angela Augusta",
    "party": "Democratic"
  },
  "person_name": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|person|[CompactPerson](#schemacompactperson)|false|none|none|
|person_name|string|true|none|none|
|role|string|true|none|none|

<h2 id="tocS_CompactBill">CompactBill</h2>
<!-- backwards compatibility -->
<a id="schemacompactbill"></a>
<a id="schema_CompactBill"></a>
<a id="tocScompactbill"></a>
<a id="tocscompactbill"></a>

```json
{
  "id": "ocd-bill/12345678-0000-1111-2222-333344445555",
  "identifier": "string",
  "session": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|identifier|string|true|none|none|
|session|string|true|none|none|
|title|string|true|none|none|

<h2 id="tocS_CompactJurisdiction">CompactJurisdiction</h2>
<!-- backwards compatibility -->
<a id="schemacompactjurisdiction"></a>
<a id="schema_CompactJurisdiction"></a>
<a id="tocScompactjurisdiction"></a>
<a id="tocscompactjurisdiction"></a>

```json
{
  "classification": "state",
  "id": "ocd-jurisdiction/country:us/state:nc/government",
  "name": "North Carolina"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|object|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_CompactPerson">CompactPerson</h2>
<!-- backwards compatibility -->
<a id="schemacompactperson"></a>
<a id="schema_CompactPerson"></a>
<a id="tocScompactperson"></a>
<a id="tocscompactperson"></a>

```json
{
  "current_role": {
    "district": 3,
    "division_id": "ocd-division/country:us/state:nc/sldu:3",
    "org_classification": "upper",
    "title": "Senator"
  },
  "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
  "name": "Angela Augusta",
  "party": "Democratic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_role|[CurrentRole](#schemacurrentrole)|false|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|party|string|true|none|none|

<h2 id="tocS_CompactVoteEvent">CompactVoteEvent</h2>
<!-- backwards compatibility -->
<a id="schemacompactvoteevent"></a>
<a id="schema_CompactVoteEvent"></a>
<a id="tocScompactvoteevent"></a>
<a id="tocscompactvoteevent"></a>

```json
{
  "id": "ocd-vote/12345678-0000-1111-2222-333344445555",
  "motion_text": "Shall the bill be passed?"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|motion_text|string|true|none|none|

<h2 id="tocS_CurrentRole">CurrentRole</h2>
<!-- backwards compatibility -->
<a id="schemacurrentrole"></a>
<a id="schema_CurrentRole"></a>
<a id="tocScurrentrole"></a>
<a id="tocscurrentrole"></a>

```json
{
  "district": 3,
  "division_id": "ocd-division/country:us/state:nc/sldu:3",
  "org_classification": "upper",
  "title": "Senator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|district|string \| integer|false|none|none|
|division_id|string|false|none|none|
|org_classification|object|true|none|none|
|title|string|true|none|none|

<h2 id="tocS_DataExport">DataExport</h2>
<!-- backwards compatibility -->
<a id="schemadataexport"></a>
<a id="schema_DataExport"></a>
<a id="tocSdataexport"></a>
<a id="tocsdataexport"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "data_type": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|none|
|data_type|string|true|none|none|
|updated_at|string(date-time)|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "agenda": [
    {
      "classification": [
        "string"
      ],
      "description": "string",
      "extras": {},
      "media": [
        {
          "classification": "string",
          "date": "string",
          "links": [
            {
              "note": "homepage",
              "url": "https://example.com/"
            }
          ],
          "note": "string",
          "offset": 0
        }
      ],
      "notes": [
        "string"
      ],
      "order": 0,
      "related_entities": [
        {
          "bill": {
            "id": "ocd-bill/12345678-0000-1111-2222-333344445555",
            "identifier": "string",
            "session": "string",
            "title": "string"
          },
          "entity_type": "person",
          "name": "JONES",
          "note": "string",
          "organization": {
            "classification": "legislature",
            "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
            "name": "North Carolina General Assembly"
          },
          "person": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          },
          "vote": {
            "id": "ocd-vote/12345678-0000-1111-2222-333344445555",
            "motion_text": "Shall the bill be passed?"
          }
        }
      ],
      "subjects": [
        "string"
      ]
    }
  ],
  "all_day": true,
  "classification": "string",
  "deleted": true,
  "description": "string",
  "documents": [
    {
      "classification": "string",
      "date": "string",
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "note": "string"
    }
  ],
  "end_date": "string",
  "id": "string",
  "jurisdiction": {
    "classification": "state",
    "id": "ocd-jurisdiction/country:us/state:nc/government",
    "name": "North Carolina"
  },
  "links": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "location": {
    "name": "string",
    "url": "string"
  },
  "media": [
    {
      "classification": "string",
      "date": "string",
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "note": "string",
      "offset": 0
    }
  ],
  "name": "string",
  "participants": [
    {
      "entity_type": "person",
      "name": "JONES",
      "note": "string",
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "person": {
        "current_role": {
          "district": 3,
          "division_id": "ocd-division/country:us/state:nc/sldu:3",
          "org_classification": "upper",
          "title": "Senator"
        },
        "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
        "name": "Angela Augusta",
        "party": "Democratic"
      }
    }
  ],
  "sources": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "start_date": "string",
  "status": "string",
  "upstream_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agenda|[[EventAgendaItem](#schemaeventagendaitem)]|false|none|none|
|all_day|boolean|true|none|none|
|classification|string|true|none|none|
|deleted|boolean|true|none|none|
|description|string|true|none|none|
|documents|[[EventDocument](#schemaeventdocument)]|false|none|none|
|end_date|string|true|none|none|
|id|string|true|none|none|
|jurisdiction|[CompactJurisdiction](#schemacompactjurisdiction)|true|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|location|[EventLocation](#schemaeventlocation)|false|none|none|
|media|[[EventMedia](#schemaeventmedia)]|false|none|none|
|name|string|true|none|none|
|participants|[[EventParticipant](#schemaeventparticipant)]|false|none|none|
|sources|[[Link](#schemalink)]|false|none|none|
|start_date|string|true|none|none|
|status|string|true|none|none|
|upstream_id|string|true|none|none|

<h2 id="tocS_EventAgendaItem">EventAgendaItem</h2>
<!-- backwards compatibility -->
<a id="schemaeventagendaitem"></a>
<a id="schema_EventAgendaItem"></a>
<a id="tocSeventagendaitem"></a>
<a id="tocseventagendaitem"></a>

```json
{
  "classification": [
    "string"
  ],
  "description": "string",
  "extras": {},
  "media": [
    {
      "classification": "string",
      "date": "string",
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "note": "string",
      "offset": 0
    }
  ],
  "notes": [
    "string"
  ],
  "order": 0,
  "related_entities": [
    {
      "bill": {
        "id": "ocd-bill/12345678-0000-1111-2222-333344445555",
        "identifier": "string",
        "session": "string",
        "title": "string"
      },
      "entity_type": "person",
      "name": "JONES",
      "note": "string",
      "organization": {
        "classification": "legislature",
        "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
        "name": "North Carolina General Assembly"
      },
      "person": {
        "current_role": {
          "district": 3,
          "division_id": "ocd-division/country:us/state:nc/sldu:3",
          "org_classification": "upper",
          "title": "Senator"
        },
        "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
        "name": "Angela Augusta",
        "party": "Democratic"
      },
      "vote": {
        "id": "ocd-vote/12345678-0000-1111-2222-333344445555",
        "motion_text": "Shall the bill be passed?"
      }
    }
  ],
  "subjects": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|[string]|true|none|none|
|description|string|true|none|none|
|extras|object|true|none|none|
|media|[[EventMedia](#schemaeventmedia)]|true|none|none|
|notes|[string]|true|none|none|
|order|integer|true|none|none|
|related_entities|[[EventRelatedEntity](#schemaeventrelatedentity)]|true|none|none|
|subjects|[string]|true|none|none|

<h2 id="tocS_EventDocument">EventDocument</h2>
<!-- backwards compatibility -->
<a id="schemaeventdocument"></a>
<a id="schema_EventDocument"></a>
<a id="tocSeventdocument"></a>
<a id="tocseventdocument"></a>

```json
{
  "classification": "string",
  "date": "string",
  "links": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "note": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|string|true|none|none|
|date|string|true|none|none|
|links|[[Link](#schemalink)]|true|none|none|
|note|string|true|none|none|

<h2 id="tocS_EventInclude">EventInclude</h2>
<!-- backwards compatibility -->
<a id="schemaeventinclude"></a>
<a id="schema_EventInclude"></a>
<a id="tocSeventinclude"></a>
<a id="tocseventinclude"></a>

```json
"links"
```

An enumeration.

<h2 id="tocS_EventList">EventList</h2>
<!-- backwards compatibility -->
<a id="schemaeventlist"></a>
<a id="schema_EventList"></a>
<a id="tocSeventlist"></a>
<a id="tocseventlist"></a>

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "agenda": [
        {
          "classification": [
            "string"
          ],
          "description": "string",
          "extras": {},
          "media": [
            {
              "classification": "string",
              "date": "string",
              "links": [
                {
                  "note": "homepage",
                  "url": "https://example.com/"
                }
              ],
              "note": "string",
              "offset": 0
            }
          ],
          "notes": [
            "string"
          ],
          "order": 0,
          "related_entities": [
            {
              "bill": {
                "id": "ocd-bill/12345678-0000-1111-2222-333344445555",
                "identifier": "string",
                "session": "string",
                "title": "string"
              },
              "entity_type": "person",
              "name": "JONES",
              "note": "string",
              "organization": {
                "classification": "legislature",
                "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
                "name": "North Carolina General Assembly"
              },
              "person": {
                "current_role": {
                  "district": 3,
                  "division_id": "ocd-division/country:us/state:nc/sldu:3",
                  "org_classification": "upper",
                  "title": "Senator"
                },
                "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
                "name": "Angela Augusta",
                "party": "Democratic"
              },
              "vote": {
                "id": "ocd-vote/12345678-0000-1111-2222-333344445555",
                "motion_text": "Shall the bill be passed?"
              }
            }
          ],
          "subjects": [
            "string"
          ]
        }
      ],
      "all_day": true,
      "classification": "string",
      "deleted": true,
      "description": "string",
      "documents": [
        {
          "classification": "string",
          "date": "string",
          "links": [
            {
              "note": "homepage",
              "url": "https://example.com/"
            }
          ],
          "note": "string"
        }
      ],
      "end_date": "string",
      "id": "string",
      "jurisdiction": {
        "classification": "state",
        "id": "ocd-jurisdiction/country:us/state:nc/government",
        "name": "North Carolina"
      },
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "location": {
        "name": "string",
        "url": "string"
      },
      "media": [
        {
          "classification": "string",
          "date": "string",
          "links": [
            {
              "note": "homepage",
              "url": "https://example.com/"
            }
          ],
          "note": "string",
          "offset": 0
        }
      ],
      "name": "string",
      "participants": [
        {
          "entity_type": "person",
          "name": "JONES",
          "note": "string",
          "organization": {
            "classification": "legislature",
            "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
            "name": "North Carolina General Assembly"
          },
          "person": {
            "current_role": {
              "district": 3,
              "division_id": "ocd-division/country:us/state:nc/sldu:3",
              "org_classification": "upper",
              "title": "Senator"
            },
            "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
            "name": "Angela Augusta",
            "party": "Democratic"
          }
        }
      ],
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "start_date": "string",
      "status": "string",
      "upstream_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[PaginationMeta](#schemapaginationmeta)|true|none|none|
|results|[[Event](#schemaevent)]|true|none|none|

<h2 id="tocS_EventLocation">EventLocation</h2>
<!-- backwards compatibility -->
<a id="schemaeventlocation"></a>
<a id="schema_EventLocation"></a>
<a id="tocSeventlocation"></a>
<a id="tocseventlocation"></a>

```json
{
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_EventMedia">EventMedia</h2>
<!-- backwards compatibility -->
<a id="schemaeventmedia"></a>
<a id="schema_EventMedia"></a>
<a id="tocSeventmedia"></a>
<a id="tocseventmedia"></a>

```json
{
  "classification": "string",
  "date": "string",
  "links": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "note": "string",
  "offset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|string|true|none|none|
|date|string|true|none|none|
|links|[[Link](#schemalink)]|true|none|none|
|note|string|true|none|none|
|offset|integer|true|none|none|

<h2 id="tocS_EventParticipant">EventParticipant</h2>
<!-- backwards compatibility -->
<a id="schemaeventparticipant"></a>
<a id="schema_EventParticipant"></a>
<a id="tocSeventparticipant"></a>
<a id="tocseventparticipant"></a>

```json
{
  "entity_type": "person",
  "name": "JONES",
  "note": "string",
  "organization": {
    "classification": "legislature",
    "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
    "name": "North Carolina General Assembly"
  },
  "person": {
    "current_role": {
      "district": 3,
      "division_id": "ocd-division/country:us/state:nc/sldu:3",
      "org_classification": "upper",
      "title": "Senator"
    },
    "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
    "name": "Angela Augusta",
    "party": "Democratic"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_type|string|true|none|none|
|name|string|true|none|none|
|note|string|true|none|none|
|organization|object|false|none|none|
|person|[CompactPerson](#schemacompactperson)|false|none|none|

<h2 id="tocS_EventRelatedEntity">EventRelatedEntity</h2>
<!-- backwards compatibility -->
<a id="schemaeventrelatedentity"></a>
<a id="schema_EventRelatedEntity"></a>
<a id="tocSeventrelatedentity"></a>
<a id="tocseventrelatedentity"></a>

```json
{
  "bill": {
    "id": "ocd-bill/12345678-0000-1111-2222-333344445555",
    "identifier": "string",
    "session": "string",
    "title": "string"
  },
  "entity_type": "person",
  "name": "JONES",
  "note": "string",
  "organization": {
    "classification": "legislature",
    "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
    "name": "North Carolina General Assembly"
  },
  "person": {
    "current_role": {
      "district": 3,
      "division_id": "ocd-division/country:us/state:nc/sldu:3",
      "org_classification": "upper",
      "title": "Senator"
    },
    "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
    "name": "Angela Augusta",
    "party": "Democratic"
  },
  "vote": {
    "id": "ocd-vote/12345678-0000-1111-2222-333344445555",
    "motion_text": "Shall the bill be passed?"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bill|[CompactBill](#schemacompactbill)|false|none|none|
|entity_type|string|true|none|none|
|name|string|true|none|none|
|note|string|true|none|none|
|organization|object|false|none|none|
|person|[CompactPerson](#schemacompactperson)|false|none|none|
|vote|[CompactVoteEvent](#schemacompactvoteevent)|false|none|none|

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

<h2 id="tocS_Jurisdiction">Jurisdiction</h2>
<!-- backwards compatibility -->
<a id="schemajurisdiction"></a>
<a id="schema_Jurisdiction"></a>
<a id="tocSjurisdiction"></a>
<a id="tocsjurisdiction"></a>

```json
{
  "classification": "state",
  "division_id": "ocd-division/country:us/state:nc",
  "id": "ocd-jurisdiction/country:us/state:nc/government",
  "latest_bill_update": "1970-01-01T00:00:00Z",
  "latest_people_update": "1970-01-01T00:00:00Z",
  "latest_runs": [
    {
      "end_time": "1970-01-01T00:00:00Z",
      "start_time": "1970-01-01T00:00:00Z",
      "success": true
    }
  ],
  "legislative_sessions": [
    {
      "classification": "string",
      "downloads": [
        {
          "created_at": "1970-01-01T00:00:00Z",
          "data_type": "string",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        }
      ],
      "end_date": "string",
      "identifier": "string",
      "name": "string",
      "start_date": "string"
    }
  ],
  "name": "North Carolina",
  "organizations": [
    {
      "classification": "legislature",
      "districts": [
        {
          "division_id": "ocd-division/country:us/state:mn/sldu:4",
          "label": "2",
          "maximum_memberships": 1,
          "role": "Senator"
        }
      ],
      "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
      "name": "North Carolina General Assembly"
    }
  ],
  "url": "https://nc.gov"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|object|true|none|none|
|division_id|string|false|none|none|
|id|string|true|none|none|
|latest_bill_update|string(date-time)|true|none|none|
|latest_people_update|string(date-time)|true|none|none|
|latest_runs|[[RunPlan](#schemarunplan)]|false|none|none|
|legislative_sessions|[[LegislativeSession](#schemalegislativesession)]|false|none|none|
|name|string|true|none|none|
|organizations|[[Chamber](#schemachamber)]|false|none|none|
|url|string|true|none|none|

<h2 id="tocS_JurisdictionClassification">JurisdictionClassification</h2>
<!-- backwards compatibility -->
<a id="schemajurisdictionclassification"></a>
<a id="schema_JurisdictionClassification"></a>
<a id="tocSjurisdictionclassification"></a>
<a id="tocsjurisdictionclassification"></a>

```json
"state"
```

An enumeration.

<h2 id="tocS_JurisdictionInclude">JurisdictionInclude</h2>
<!-- backwards compatibility -->
<a id="schemajurisdictioninclude"></a>
<a id="schema_JurisdictionInclude"></a>
<a id="tocSjurisdictioninclude"></a>
<a id="tocsjurisdictioninclude"></a>

```json
"organizations"
```

An enumeration.

<h2 id="tocS_JurisdictionList">JurisdictionList</h2>
<!-- backwards compatibility -->
<a id="schemajurisdictionlist"></a>
<a id="schema_JurisdictionList"></a>
<a id="tocSjurisdictionlist"></a>
<a id="tocsjurisdictionlist"></a>

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "classification": "state",
      "division_id": "ocd-division/country:us/state:nc",
      "id": "ocd-jurisdiction/country:us/state:nc/government",
      "latest_bill_update": "1970-01-01T00:00:00Z",
      "latest_people_update": "1970-01-01T00:00:00Z",
      "latest_runs": [
        {
          "end_time": "1970-01-01T00:00:00Z",
          "start_time": "1970-01-01T00:00:00Z",
          "success": true
        }
      ],
      "legislative_sessions": [
        {
          "classification": "string",
          "downloads": [
            {
              "created_at": "1970-01-01T00:00:00Z",
              "data_type": "string",
              "updated_at": "1970-01-01T00:00:00Z",
              "url": "string"
            }
          ],
          "end_date": "string",
          "identifier": "string",
          "name": "string",
          "start_date": "string"
        }
      ],
      "name": "North Carolina",
      "organizations": [
        {
          "classification": "legislature",
          "districts": [
            {
              "division_id": "ocd-division/country:us/state:mn/sldu:4",
              "label": "2",
              "maximum_memberships": 1,
              "role": "Senator"
            }
          ],
          "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
          "name": "North Carolina General Assembly"
        }
      ],
      "url": "https://nc.gov"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[PaginationMeta](#schemapaginationmeta)|true|none|none|
|results|[[Jurisdiction](#schemajurisdiction)]|true|none|none|

<h2 id="tocS_LegislativeSession">LegislativeSession</h2>
<!-- backwards compatibility -->
<a id="schemalegislativesession"></a>
<a id="schema_LegislativeSession"></a>
<a id="tocSlegislativesession"></a>
<a id="tocslegislativesession"></a>

```json
{
  "classification": "string",
  "downloads": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "data_type": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "end_date": "string",
  "identifier": "string",
  "name": "string",
  "start_date": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|string|true|none|none|
|downloads|[[DataExport](#schemadataexport)]|false|none|none|
|end_date|string|true|none|none|
|identifier|string|true|none|none|
|name|string|true|none|none|
|start_date|string|true|none|none|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "note": "homepage",
  "url": "https://example.com/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_Office">Office</h2>
<!-- backwards compatibility -->
<a id="schemaoffice"></a>
<a id="schema_Office"></a>
<a id="tocSoffice"></a>
<a id="tocsoffice"></a>

```json
{
  "address": "212 Maple Lane; Raleigh NC; 27526",
  "classification": "capitol",
  "fax": "919-555-1234",
  "name": "District Office",
  "voice": "919-555-0064"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|classification|string|false|none|none|
|fax|string|false|none|none|
|name|string|true|none|none|
|voice|string|false|none|none|

<h2 id="tocS_OrgClassification">OrgClassification</h2>
<!-- backwards compatibility -->
<a id="schemaorgclassification"></a>
<a id="schema_OrgClassification"></a>
<a id="tocSorgclassification"></a>
<a id="tocsorgclassification"></a>

```json
"legislature"
```

An enumeration.

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "classification": "legislature",
  "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
  "name": "North Carolina General Assembly"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|string|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_PaginationMeta">PaginationMeta</h2>
<!-- backwards compatibility -->
<a id="schemapaginationmeta"></a>
<a id="schema_PaginationMeta"></a>
<a id="tocSpaginationmeta"></a>
<a id="tocspaginationmeta"></a>

```json
{
  "max_page": 3,
  "page": 1,
  "per_page": 20,
  "total_items": 52
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_page|integer|true|none|none|
|page|integer|true|none|none|
|per_page|integer|true|none|none|
|total_items|integer|true|none|none|

<h2 id="tocS_Person">Person</h2>
<!-- backwards compatibility -->
<a id="schemaperson"></a>
<a id="schema_Person"></a>
<a id="tocSperson"></a>
<a id="tocsperson"></a>

```json
{
  "birth_date": "1960-05-04",
  "created_at": "1970-01-01T00:00:00Z",
  "current_role": {
    "district": 3,
    "division_id": "ocd-division/country:us/state:nc/sldu:3",
    "org_classification": "upper",
    "title": "Senator"
  },
  "death_date": "2019-04-10",
  "email": "aperson@example.com",
  "extras": {
    "profession": "Doctor"
  },
  "family_name": "Augusta",
  "gender": "female",
  "given_name": "Angela",
  "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
  "image": "https://example.com/ncimg/3.png",
  "jurisdiction": {
    "classification": "state",
    "id": "ocd-jurisdiction/country:us/state:nc/government",
    "name": "North Carolina"
  },
  "links": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "name": "Angela Augusta",
  "offices": [
    {
      "address": "212 Maple Lane; Raleigh NC; 27526",
      "classification": "capitol",
      "fax": "919-555-1234",
      "name": "District Office",
      "voice": "919-555-0064"
    }
  ],
  "openstates_url": "https://openstates.org/person/amos-l-quick-iii-28NRPPfJA6FGVl9RrjpKjl/",
  "other_identifiers": [
    {
      "identifier": "NCL000123",
      "scheme": "legacy_openstates"
    }
  ],
  "other_names": [
    {
      "name": "Auggie",
      "note": "nickname"
    }
  ],
  "party": "Democratic",
  "sources": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birth_date|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|current_role|[CurrentRole](#schemacurrentrole)|false|none|none|
|death_date|string|true|none|none|
|email|string|true|none|none|
|extras|object|true|none|none|
|family_name|string|true|none|none|
|gender|string|true|none|none|
|given_name|string|true|none|none|
|id|string|true|none|none|
|image|string|true|none|none|
|jurisdiction|[CompactJurisdiction](#schemacompactjurisdiction)|true|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|name|string|true|none|none|
|offices|[[Office](#schemaoffice)]|false|none|none|
|openstates_url|string|true|none|none|
|other_identifiers|[[AltIdentifier](#schemaaltidentifier)]|false|none|none|
|other_names|[[AltName](#schemaaltname)]|false|none|none|
|party|string|true|none|none|
|sources|[[Link](#schemalink)]|false|none|none|
|updated_at|string(date-time)|true|none|none|

<h2 id="tocS_PersonInclude">PersonInclude</h2>
<!-- backwards compatibility -->
<a id="schemapersoninclude"></a>
<a id="schema_PersonInclude"></a>
<a id="tocSpersoninclude"></a>
<a id="tocspersoninclude"></a>

```json
"other_names"
```

An enumeration.

<h2 id="tocS_PersonList">PersonList</h2>
<!-- backwards compatibility -->
<a id="schemapersonlist"></a>
<a id="schema_PersonList"></a>
<a id="tocSpersonlist"></a>
<a id="tocspersonlist"></a>

```json
{
  "pagination": {
    "max_page": 3,
    "page": 1,
    "per_page": 20,
    "total_items": 52
  },
  "results": [
    {
      "birth_date": "1960-05-04",
      "created_at": "1970-01-01T00:00:00Z",
      "current_role": {
        "district": 3,
        "division_id": "ocd-division/country:us/state:nc/sldu:3",
        "org_classification": "upper",
        "title": "Senator"
      },
      "death_date": "2019-04-10",
      "email": "aperson@example.com",
      "extras": {
        "profession": "Doctor"
      },
      "family_name": "Augusta",
      "gender": "female",
      "given_name": "Angela",
      "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
      "image": "https://example.com/ncimg/3.png",
      "jurisdiction": {
        "classification": "state",
        "id": "ocd-jurisdiction/country:us/state:nc/government",
        "name": "North Carolina"
      },
      "links": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "name": "Angela Augusta",
      "offices": [
        {
          "address": "212 Maple Lane; Raleigh NC; 27526",
          "classification": "capitol",
          "fax": "919-555-1234",
          "name": "District Office",
          "voice": "919-555-0064"
        }
      ],
      "openstates_url": "https://openstates.org/person/amos-l-quick-iii-28NRPPfJA6FGVl9RrjpKjl/",
      "other_identifiers": [
        {
          "identifier": "NCL000123",
          "scheme": "legacy_openstates"
        }
      ],
      "other_names": [
        {
          "name": "Auggie",
          "note": "nickname"
        }
      ],
      "party": "Democratic",
      "sources": [
        {
          "note": "homepage",
          "url": "https://example.com/"
        }
      ],
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[PaginationMeta](#schemapaginationmeta)|true|none|none|
|results|[[Person](#schemaperson)]|true|none|none|

<h2 id="tocS_PersonVote">PersonVote</h2>
<!-- backwards compatibility -->
<a id="schemapersonvote"></a>
<a id="schema_PersonVote"></a>
<a id="tocSpersonvote"></a>
<a id="tocspersonvote"></a>

```json
{
  "option": "no",
  "voter": {
    "current_role": {
      "district": 3,
      "division_id": "ocd-division/country:us/state:nc/sldu:3",
      "org_classification": "upper",
      "title": "Senator"
    },
    "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
    "name": "Angela Augusta",
    "party": "Democratic"
  },
  "voter_name": "Wu"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|option|string|true|none|none|
|voter|[CompactPerson](#schemacompactperson)|false|none|none|
|voter_name|string|true|none|none|

<h2 id="tocS_Post">Post</h2>
<!-- backwards compatibility -->
<a id="schemapost"></a>
<a id="schema_Post"></a>
<a id="tocSpost"></a>
<a id="tocspost"></a>

```json
{
  "division_id": "ocd-division/country:us/state:mn/sldu:4",
  "label": "2",
  "maximum_memberships": 1,
  "role": "Senator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|division_id|string|true|none|none|
|label|string|true|none|none|
|maximum_memberships|integer|true|none|none|
|role|string|true|none|none|

<h2 id="tocS_RelatedBill">RelatedBill</h2>
<!-- backwards compatibility -->
<a id="schemarelatedbill"></a>
<a id="schema_RelatedBill"></a>
<a id="tocSrelatedbill"></a>
<a id="tocsrelatedbill"></a>

```json
{
  "identifier": "HB 123",
  "legislative_session": "2022S1",
  "relation_type": "companion"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|true|none|none|
|legislative_session|string|true|none|none|
|relation_type|string|true|none|none|

<h2 id="tocS_RunPlan">RunPlan</h2>
<!-- backwards compatibility -->
<a id="schemarunplan"></a>
<a id="schema_RunPlan"></a>
<a id="tocSrunplan"></a>
<a id="tocsrunplan"></a>

```json
{
  "end_time": "1970-01-01T00:00:00Z",
  "start_time": "1970-01-01T00:00:00Z",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_time|string(date-time)|true|none|none|
|start_time|string(date-time)|true|none|none|
|success|boolean|true|none|none|

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
|loc|[string \| integer]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_VoteCount">VoteCount</h2>
<!-- backwards compatibility -->
<a id="schemavotecount"></a>
<a id="schema_VoteCount"></a>
<a id="tocSvotecount"></a>
<a id="tocsvotecount"></a>

```json
{
  "option": "yes",
  "value": 48
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|option|string|true|none|none|
|value|integer|true|none|none|

<h2 id="tocS_VoteEvent">VoteEvent</h2>
<!-- backwards compatibility -->
<a id="schemavoteevent"></a>
<a id="schema_VoteEvent"></a>
<a id="tocSvoteevent"></a>
<a id="tocsvoteevent"></a>

```json
{
  "counts": [
    {
      "option": "yes",
      "value": 48
    }
  ],
  "extras": {},
  "id": "string",
  "identifier": "HV #3312",
  "motion_classification": [
    "passage"
  ],
  "motion_text": "Shall the bill be passed?",
  "organization": {
    "classification": "legislature",
    "id": "ocd-organization/32aab083-d7a0-44e0-9b95-a7790c542605",
    "name": "North Carolina General Assembly"
  },
  "result": "pass",
  "sources": [
    {
      "note": "homepage",
      "url": "https://example.com/"
    }
  ],
  "start_date": "2020-09-18",
  "votes": [
    {
      "option": "no",
      "voter": {
        "current_role": {
          "district": 3,
          "division_id": "ocd-division/country:us/state:nc/sldu:3",
          "org_classification": "upper",
          "title": "Senator"
        },
        "id": "ocd-person/adb58f21-f2fd-4830-85b6-f490b0867d14",
        "name": "Angela Augusta",
        "party": "Democratic"
      },
      "voter_name": "Wu"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counts|[[VoteCount](#schemavotecount)]|true|none|none|
|extras|object|true|none|none|
|id|string|true|none|none|
|identifier|string|true|none|none|
|motion_classification|[string]|false|none|none|
|motion_text|string|true|none|none|
|organization|[Organization](#schemaorganization)|true|none|none|
|result|string|true|none|none|
|sources|[[Link](#schemalink)]|true|none|none|
|start_date|string|true|none|none|
|votes|[[PersonVote](#schemapersonvote)]|true|none|none|
