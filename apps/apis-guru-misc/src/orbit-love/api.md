<h1 id="orbit-api">Orbit API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Please see the complete Orbit API documentation at [https://api.orbit.love/](https://api.orbit.love/).

Base URLs:

* <a href="https://app.orbit.love/api/v1">https://app.orbit.love/api/v1</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **api_key**, in: query. Provide the API key in a query param called api_key. This is the least secure method, please use only for testing.

- HTTP Authentication, scheme: bearer Provide a Authorization header with format 'Bearer <api_key>'. This is the recommended approach. Make sure to include the 'Bearer' part in the text box here.

<h1 id="orbit-api-activity-types">Activity Types</h1>

## List all activity types for a workspace

> Code samples

```bash
curl https://example.com/string/activity_types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/activity_types`

<h3 id="list-all-activity-types-for-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "channel": "content",
        "key": "post:created",
        "name": "Created content",
        "short_name": "Content created",
        "source": "content",
        "weight": "1.0"
      },
      "id": "5Gds1O",
      "type": "activity_type"
    },
    {
      "attributes": {
        "channel": "product",
        "key": "activated_account",
        "name": "Activated their account on product",
        "short_name": "Activated account",
        "source": "product",
        "weight": "6.0"
      },
      "id": "DOnsmL",
      "type": "activity_type"
    }
  ],
  "links": {
    "first": "/mrsdaronpowlowski/activity_types?page=1",
    "last": "/mrsdaronpowlowski/activity_types?page=1",
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-activity-types-for-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="orbit-api-activities">Activities</h1>

## List activities for a workspace

> Code samples

```bash
curl https://example.com/string/activities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/activities`

<h3 id="list-activities-for-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|affiliation|query|string|false|none|
|member_tags|query|string|false|The list of tags to filter against. Separate tags with `,` to do an intersection (AND), or with `\|` to do a union (OR)|
|orbit|query|string|false|The list of orbit levels to filter against. Accepted values are 1, 2, 3, 4, n. In the request, a format like `23` would include levels 2 and 3. `n` is for members with no orbit level.|
|activity_type|query|string|false|Comma separated list of activity types|
|identity|query|string|false|none|
|company[]|query|string|false|Comma separated list of companies. The union (OR) of companies is applied.|
|title[]|query|string|false|Comma separated list of job titles. The union (OR) of job titles is applied.|
|regions[]|query|string|false|Comma separated list of regions. The union (OR) of regions is applied.|
|countries[]|query|string|false|Comma separated list of countries. The union (OR) of countries is applied.|
|cities[]|query|string|false|Comma separated list of cities. The union (OR) of cities is applied.|
|start_date|query|string|false|Filter activities after this date. Format: YYYY-MM-DD.|
|end_date|query|string|false|Filter activities before this date. Format: YYYY-MM-DD.|
|relative|query|string|false|Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.|
|page|query|string|false|none|
|direction|query|string|false|none|
|items|query|string|false|none|
|sort|query|string|false|none|
|type|query|string|false|**Deprecated.** Deprecated in favor of the activity_type parameter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|affiliation|member|
|affiliation|teammate|
|activity_type|discourse:topic:created|
|activity_type|discourse:post:liked|
|activity_type|discourse:user:created|
|activity_type|discourse:post:created|
|activity_type|slack:message:sent|
|activity_type|slack:thread:replied|
|activity_type|slack:channel:joined|
|activity_type|note:created|
|activity_type|post:created|
|activity_type|issues:opened|
|activity_type|discord:message:sent|
|activity_type|issue_comment:created|
|activity_type|discord:thread:replied|
|activity_type|custom:happened|
|activity_type|dev:comment|
|activity_type|discord:message:replied|
|activity_type|discord:server:joined|
|activity_type|insided:conversation:started|
|activity_type|fork:created|
|activity_type|insided:idea:replied|
|activity_type|insided:article:created|
|activity_type|discussions:discussion_created|
|activity_type|insided:question:replied|
|activity_type|discussions:comment|
|activity_type|discussions:reply|
|activity_type|insided:article:replied|
|activity_type|insided:question:asked|
|activity_type|insided:conversation:replied|
|activity_type|insided:idea:submitted|
|activity_type|reddit:comment|
|activity_type|reddit:post|
|activity_type|stackoverflow:answer|
|activity_type|linkedin:comment|
|activity_type|pull_requests:opened|
|activity_type|pull_requests:merged|
|activity_type|star:created|
|activity_type|stackoverflow:question|
|activity_type|tweet:sent|
|activity_type|twitter:followed|
|activity_type|youtube:comment|
|identity|github|
|identity|twitter|
|identity|email|
|identity|discourse|
|identity|linkedin|
|identity|devto|
|identity|slack|
|identity|discord|
|direction|ASC|
|direction|DESC|
|items|10|
|items|50|
|items|100|
|sort|occurred_at|
|sort|member|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "action": "opened",
        "activity_link": "https://github.com/",
        "created_at": "2023-02-28T19:20:38.155Z",
        "g_created_at": "2023-02-28T20:20:38.152+01:00",
        "g_html_url": "https://github.com/",
        "g_number": 9,
        "g_title": "Cool issue title!",
        "is_pull_request": null,
        "key": "makeda/eugenio#9",
        "occurred_at": "2023-02-28T19:20:38.152Z",
        "orbit_url": "http://localhost:3000/stacierau/activities/63rsLp",
        "properties": {
          "github_issue": "makeda/eugenio/#9",
          "github_organization": "makeda",
          "github_repository": "makeda/eugenio"
        },
        "tags": [
          "channel:github",
          "github_organization:makeda",
          "github_repository:makeda/eugenio",
          "github_issue:makeda/eugenio/#9"
        ],
        "type": "IssueActivity",
        "updated_at": "2023-02-28T19:20:38.155Z",
        "weight": "1.0"
      },
      "id": "63rsLp",
      "relationships": {
        "activity_type": {
          "data": {
            "id": "la4sVD",
            "type": "activity_type"
          }
        },
        "member": {
          "data": {
            "id": "By3S5j",
            "type": "member"
          }
        },
        "repository": {
          "data": {
            "id": "jP8TMj",
            "type": "repository"
          }
        }
      },
      "type": "issue_activity"
    },
    {
      "attributes": {
        "action": "opened",
        "activity_link": "https://github.com/",
        "created_at": "2023-02-28T19:20:38.097Z",
        "g_created_at": "2023-02-28T20:20:38.088+01:00",
        "g_html_url": "https://github.com/",
        "g_merged": true,
        "g_merged_at": null,
        "g_merged_by": null,
        "g_number": 92,
        "g_title": "Cool PR title!",
        "is_pull_request": null,
        "key": "carlos/julianfisher#92",
        "occurred_at": "2023-02-28T19:20:38.088Z",
        "orbit_url": "http://localhost:3000/stacierau/activities/V5YsvV",
        "properties": {
          "github_organization": "carlos",
          "github_pull_request": "carlos/julianfisher/#92",
          "github_repository": "carlos/julianfisher"
        },
        "tags": [
          "channel:github",
          "github_organization:carlos",
          "github_repository:carlos/julianfisher",
          "github_pull_request:carlos/julianfisher/#92"
        ],
        "type": "PullRequestActivity",
        "updated_at": "2023-02-28T19:20:38.097Z",
        "weight": "1.0"
      },
      "id": "V5YsvV",
      "relationships": {
        "activity_type": {
          "data": {
            "id": "lnrs0l",
            "type": "activity_type"
          }
        },
        "member": {
          "data": {
            "id": "By3S5j",
            "type": "member"
          }
        },
        "repository": {
          "data": {
            "id": "6l3Tz9",
            "type": "repository"
          }
        }
      },
      "type": "pull_request_activity"
    },
    {
      "attributes": {
        "action": "spec_action",
        "created_at": "2023-02-28T19:20:38.013Z",
        "key": "clé",
        "occurred_at": "2023-02-28T19:20:38.011Z",
        "orbit_url": "http://localhost:3000/stacierau/activities/6a4sBp",
        "properties": {
          "prop_1": "value_1",
          "prop_2": "value_2"
        },
        "tags": [
          "spec-tag-1",
          "spec-tag-2"
        ],
        "type": "SpecActivity",
        "updated_at": "2023-02-28T19:20:38.013Z",
        "weight": "1.0"
      },
      "id": "6a4sBp",
      "relationships": {
        "activity_type": {
          "data": {
            "id": "D2Esq5",
            "type": "activity_type"
          }
        },
        "member": {
          "data": {
            "id": "By3S5j",
            "type": "member"
          }
        },
        "repository": {
          "data": {
            "id": "jBlTg9",
            "type": "repository"
          }
        }
      },
      "type": "spec_activity"
    }
  ],
  "included": [
    {
      "attributes": {
        "channel": "github",
        "key": "issues:opened",
        "name": "Opened an issue",
        "short_name": "Issue opened",
        "source": "github",
        "weight": "6.0"
      },
      "id": "la4sVD",
      "type": "activity_type"
    },
    {
      "attributes": {
        "activities_count": 0,
        "activities_score": 0,
        "avatar_url": "http://github.com/avatar.png",
        "bio": null,
        "birthday": null,
        "company": null,
        "created": false,
        "created_at": "2023-02-28T19:20:37.968Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": null,
        "github": null,
        "github_followers": null,
        "id": "By3S5j",
        "languages": null,
        "last_activity_occurred_at": null,
        "linkedin": null,
        "location": null,
        "love": null,
        "merged_at": null,
        "name": "WaylonOsinski",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/stacierau/members/waylonosinski",
        "pronouns": null,
        "reach": 0,
        "shipping_address": null,
        "slug": "waylonosinski",
        "source": "installation",
        "tag_list": [
          "ruby"
        ],
        "tags": [
          "ruby"
        ],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:20:37.968Z",
        "url": null
      },
      "id": "By3S5j",
      "relationships": {
        "identities": {
          "data": []
        },
        "organizations": {
          "data": []
        }
      },
      "type": "member"
    },
    {
      "attributes": {
        "created_at": "2023-02-28T19:20:38.151Z",
        "full_name": "karitremblay/alia",
        "name": "alia",
        "owner": "karitremblay",
        "updated_at": "2023-02-28T19:20:38.151Z"
      },
      "id": "jP8TMj",
      "type": "repository"
    },
    {
      "attributes": {
        "channel": "mysource",
        "key": "spec:happened:1",
        "name": "praise Mysource 3",
        "short_name": "Spec Channel",
        "source": "mysource",
        "weight": "1.0"
      },
      "id": "lnrs0l",
      "type": "activity_type"
    },
    {
      "attributes": {
        "created_at": "2023-02-28T19:20:38.078Z",
        "full_name": "cedric/heike",
        "name": "heike",
        "owner": "cedric",
        "updated_at": "2023-02-28T19:20:38.078Z"
      },
      "id": "6l3Tz9",
      "type": "repository"
    },
    {
      "attributes": {
        "channel": "mysource",
        "key": "spec_activity_type_key",
        "name": "win Mysource 2",
        "short_name": "Spec Channel",
        "source": "mysource",
        "weight": "1.0"
      },
      "id": "D2Esq5",
      "type": "activity_type"
    },
    {
      "attributes": {
        "created_at": "2023-02-28T19:20:37.992Z",
        "full_name": "orbit-love/orbit-model",
        "name": "natalya",
        "owner": "jacintoraynor",
        "updated_at": "2023-02-28T19:20:37.992Z"
      },
      "id": "jBlTg9",
      "type": "repository"
    }
  ],
  "links": {
    "first": "http://localhost:3000/api/v1/stacierau/activities?activity_type=&affiliation=&cities%5B%5D=&company%5B%5D=&countries%5B%5D=&direction=DESC&end_date=&filters=true&identity=&items=10&member_tags=&orbit=&page=1&regions%5B%5D=&relative=&sort=occurred_at&start_date=&title%5B%5D=&workspace=stacierau",
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-activities-for-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a Custom or a Content activity for a new or existing member

> Code samples

```bash
curl https://example.com/string/activities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activity": {
      "activity_type": "string",
      "activity_type_key": "string",
      "description": "string",
      "key": "string",
      "link": "string",
      "link_text": "string",
      "occurred_at": "string",
      "properties": {},
      "title": "string",
      "weight": "string",
      "member": {
        "bio": "string",
        "birthday": "string",
        "company": "string",
        "devto": "string",
        "email": "string",
        "github": "string",
        "linkedin": "string",
        "location": "string",
        "name": "string",
        "pronouns": "string",
        "shipping_address": "string",
        "slug": "string",
        "tag_list": "string",
        "tags": "string",
        "tags_to_add": "string",
        "teammate": true,
        "title": "string",
        "tshirt": "string",
        "twitter": "string",
        "url": "string"
      }
    },
    "identity": {
      "email": "string",
      "name": "string",
      "source": "string",
      "source_host": "string",
      "uid": "string",
      "url": "string",
      "username": "string"
    }
  }'
```

`POST /{workspace_slug}/activities`

Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.

> Body parameter

```json
{
  "activity": {
    "activity_type": "string",
    "activity_type_key": "string",
    "description": "string",
    "key": "string",
    "link": "string",
    "link_text": "string",
    "occurred_at": "string",
    "properties": {},
    "title": "string",
    "weight": "string",
    "member": {
      "bio": "string",
      "birthday": "string",
      "company": "string",
      "devto": "string",
      "email": "string",
      "github": "string",
      "linkedin": "string",
      "location": "string",
      "name": "string",
      "pronouns": "string",
      "shipping_address": "string",
      "slug": "string",
      "tag_list": "string",
      "tags": "string",
      "tags_to_add": "string",
      "teammate": true,
      "title": "string",
      "tshirt": "string",
      "twitter": "string",
      "url": "string"
    }
  },
  "identity": {
    "email": "string",
    "name": "string",
    "source": "string",
    "source_host": "string",
    "uid": "string",
    "url": "string",
    "username": "string"
  }
}
```

<h3 id="create-a-custom-or-a-content-activity-for-a-new-or-existing-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|body|body|[activity_and_identity](#schemaactivity_and_identity)|false|none|
|» activity|body|[activity_with_member](#schemaactivity_with_member) \| [post_activity_with_member](#schemapost_activity_with_member)|false|none|
|» » *oneOf*|body|[activity_with_member](#schemaactivity_with_member)|false|none|
|» » *oneOf*|body|[post_activity_with_member](#schemapost_activity_with_member)|false|none|
|» identity|body|[identity](#schemaidentity)|false|Represents an email address, a profile on networks like github and twitter, or a record in another system.|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "action": "happened",
      "created_at": "2023-02-28T19:20:41.694Z",
      "custom_context": null,
      "custom_description": "More info about the thing",
      "custom_link": "http://link.com/",
      "custom_link_text": "See the thing",
      "custom_title": "Did a thing",
      "custom_type": "custom-type",
      "key": "thing-123",
      "occurred_at": "2023-02-28T19:20:41.689Z",
      "orbit_url": "http://localhost:3000/chassidymertz/activities/6zoslV",
      "properties": {},
      "tags": [
        "product",
        "enterprise",
        "channel:custom",
        "custom_type:custom-type",
        "custom_title:did-a-thing"
      ],
      "type": "CustomActivity",
      "updated_at": "2023-02-28T19:20:41.694Z",
      "weight": "0.2"
    },
    "id": "6zoslV",
    "relationships": {
      "activity_type": {
        "data": {
          "id": "574seD",
          "type": "activity_type"
        }
      },
      "member": {
        "data": {
          "id": "r9nS0B",
          "type": "member"
        }
      },
      "user": {
        "data": {
          "id": "DXKFEz",
          "type": "user"
        }
      }
    },
    "type": "custom_activity"
  },
  "included": [
    {
      "attributes": {
        "channel": "custom",
        "key": "custom:happened",
        "name": "Something happened",
        "short_name": "Custom",
        "source": "custom",
        "weight": "1.0"
      },
      "id": "574seD",
      "type": "activity_type"
    },
    {
      "attributes": {
        "email": null,
        "name": "Josh Dzielak",
        "source": "twitter",
        "source_host": "twitter.com",
        "uid": "45297280",
        "username": "dzello"
      },
      "id": "3YETv3",
      "type": "twitter_identity"
    },
    {
      "attributes": {
        "activities_count": 0,
        "activities_score": 0,
        "avatar_url": "https://pbs.twimg.com/profile_images/1110162582143406080/vu7_kN8f.png",
        "bio": "<a href='https://dzello.com/blog/2020/05/30/black-lives-matter/' target='_blank'>dzello.com/blog/2020/05/3…</a> Co-founder & CTO @OrbitModel · advocate for dev advocates 🥑 · formerly @algolia and @keen_io · Ruby · Rails · JAMstack · he/him",
        "birthday": null,
        "company": null,
        "created": true,
        "created_at": "2023-02-28T19:20:41.604Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": null,
        "github": null,
        "github_followers": null,
        "id": "r9nS0B",
        "languages": null,
        "last_activity_occurred_at": null,
        "linkedin": null,
        "location": "Paris, France",
        "love": null,
        "merged_at": null,
        "name": "Josh Dzielak",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/chassidymertz/members/dzello",
        "pronouns": null,
        "reach": 8,
        "shipping_address": null,
        "slug": "dzello",
        "source": "api",
        "tag_list": [
          "one",
          "two"
        ],
        "tags": [
          "one",
          "two"
        ],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": "dzello",
        "twitter_followers": 4598,
        "updated_at": "2023-02-28T19:20:41.627Z",
        "url": "https://dzello.com/blog/2020/05/30/black-lives-matter/"
      },
      "id": "r9nS0B",
      "relationships": {
        "identities": {
          "data": [
            {
              "id": "3YETv3",
              "type": "twitter_identity"
            }
          ]
        },
        "organizations": {
          "data": []
        }
      },
      "type": "member"
    },
    {
      "attributes": {
        "created_at": "2023-02-28T19:20:41.523Z",
        "name": "LoreleiSchmelerIV",
        "updated_at": "2023-02-28T19:20:41.528Z"
      },
      "id": "DXKFEz",
      "type": "user"
    }
  ]
}
```

> 422 Response

```json
{
  "errors": {
    "base": [
      "Either identity or member name, email, GitHub, Twitter or Discourse is required"
    ]
  }
}
```

<h3 id="create-a-custom-or-a-content-activity-for-a-new-or-existing-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|success|None|
|403|Forbidden|forbidden|None|
|422|Unprocessable Entity|unprocessable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get an activity in the workspace

> Code samples

```bash
curl https://example.com/string/activities/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/activities/{id}`

<h3 id="get-an-activity-in-the-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "action": "spec_action",
      "created_at": "2023-02-28T19:20:40.750Z",
      "key": "clé",
      "occurred_at": "2023-02-28T19:20:40.744Z",
      "orbit_url": "http://localhost:3000/jamatremblaymd/activities/ZPosjV",
      "properties": {
        "prop_1": "value_1",
        "prop_2": "value_2"
      },
      "tags": [
        "spec-tag-1",
        "spec-tag-2"
      ],
      "type": "SpecActivity",
      "updated_at": "2023-02-28T19:20:40.750Z",
      "weight": "1.0"
    },
    "id": "ZPosjV",
    "relationships": {
      "activity_type": {
        "data": {
          "id": "D3jsky",
          "type": "activity_type"
        }
      },
      "member": {
        "data": {
          "id": "rmMSRr",
          "type": "member"
        }
      },
      "repository": {
        "data": {
          "id": "9ABTo6",
          "type": "repository"
        }
      },
      "user": {
        "data": {
          "id": "OA3F51",
          "type": "user"
        }
      }
    },
    "type": "spec_activity"
  },
  "included": [
    {
      "attributes": {
        "channel": "mysource",
        "key": "spec:happened:9",
        "name": "savvy Mysource 29",
        "short_name": "Spec Channel",
        "source": "mysource",
        "weight": "1.0"
      },
      "id": "D3jsky",
      "type": "activity_type"
    },
    {
      "attributes": {
        "activities_count": 0,
        "activities_score": 0,
        "avatar_url": "http://github.com/avatar.png",
        "bio": null,
        "birthday": null,
        "company": null,
        "created": false,
        "created_at": "2023-02-28T19:20:40.748Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": null,
        "github": null,
        "github_followers": null,
        "id": "rmMSRr",
        "languages": null,
        "last_activity_occurred_at": null,
        "linkedin": null,
        "location": null,
        "love": null,
        "merged_at": null,
        "name": "KelleeMcLaughlin",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/jamatremblaymd/members/kelleemclaughlin",
        "pronouns": null,
        "reach": 0,
        "shipping_address": null,
        "slug": "kelleemclaughlin",
        "source": "installation",
        "tag_list": [],
        "tags": [],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:20:40.748Z",
        "url": null
      },
      "id": "rmMSRr",
      "relationships": {
        "identities": {
          "data": []
        },
        "organizations": {
          "data": []
        }
      },
      "type": "member"
    },
    {
      "attributes": {
        "created_at": "2023-02-28T19:20:40.713Z",
        "full_name": "corneliusokon/morristremblay",
        "name": "morristremblay",
        "owner": "corneliusokon",
        "updated_at": "2023-02-28T19:20:40.713Z"
      },
      "id": "9ABTo6",
      "type": "repository"
    },
    {
      "attributes": {
        "created_at": "2023-02-28T19:20:40.691Z",
        "name": "ErvinReilly",
        "updated_at": "2023-02-28T19:20:40.695Z"
      },
      "id": "OA3F51",
      "type": "user"
    }
  ]
}
```

<h3 id="get-an-activity-in-the-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List activities for a member

> Code samples

```bash
curl https://example.com/string/members/string/activities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/members/{member_slug}/activities`

<h3 id="list-activities-for-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|
|page|query|string|false|none|
|direction|query|string|false|none|
|items|query|string|false|none|
|sort|query|string|false|none|
|activity_type|query|string|false|none|
|type|query|string|false|**Deprecated.** Deprecated in favor of the activity_type parameter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|ASC|
|direction|DESC|
|items|10|
|items|50|
|items|100|
|sort|occurred_at|
|sort|member|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "action": "spec_action",
        "created_at": "2023-02-28T19:20:45.066Z",
        "key": "clé",
        "occurred_at": "2023-02-28T19:20:45.064Z",
        "orbit_url": "http://localhost:3000/deangelokovacek/activities/VlEsOe",
        "properties": {
          "prop_1": "value_1",
          "prop_2": "value_2"
        },
        "tags": [
          "spec-tag-1",
          "spec-tag-2"
        ],
        "type": "SpecActivity",
        "updated_at": "2023-02-28T19:20:45.066Z",
        "weight": "1.0"
      },
      "id": "VlEsOe",
      "relationships": {
        "activity_type": {
          "data": {
            "id": "oQQsBb",
            "type": "activity_type"
          }
        },
        "member": {
          "data": {
            "id": "BloSvr",
            "type": "member"
          }
        }
      },
      "type": "spec_activity"
    }
  ],
  "included": [
    {
      "attributes": {
        "channel": "mysource",
        "key": "spec:activity",
        "name": "calculate Mysource 34",
        "short_name": "Spec Channel",
        "source": "mysource",
        "weight": "1.0"
      },
      "id": "oQQsBb",
      "type": "activity_type"
    },
    {
      "attributes": {
        "activities_count": 0,
        "activities_score": 0,
        "avatar_url": "http://github.com/avatar.png",
        "bio": null,
        "birthday": null,
        "company": null,
        "created": false,
        "created_at": "2023-02-28T19:20:45.004Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": null,
        "github": null,
        "github_followers": null,
        "id": "BloSvr",
        "languages": null,
        "last_activity_occurred_at": null,
        "linkedin": null,
        "location": null,
        "love": null,
        "merged_at": null,
        "name": "LoiseRoberts",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/deangelokovacek/members/loiseroberts",
        "pronouns": null,
        "reach": 0,
        "shipping_address": null,
        "slug": "loiseroberts",
        "source": "installation",
        "tag_list": [],
        "tags": [],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:20:45.004Z",
        "url": null
      },
      "id": "BloSvr",
      "relationships": {
        "identities": {
          "data": []
        },
        "organizations": {
          "data": []
        }
      },
      "type": "member"
    }
  ],
  "links": {
    "first": "/deangelokovacek/members/loiseroberts/activities?page=1&direction=DESC&items=10&sort=occurred_at&activity_type=spec%3Aactivity&type=",
    "last": "/deangelokovacek/members/loiseroberts/activities?page=1&direction=DESC&items=10&sort=occurred_at&activity_type=spec%3Aactivity&type=",
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-activities-for-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a Custom or a Content activity for a member

> Code samples

```bash
curl https://example.com/string/members/string/activities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activity_type": "string",
    "activity_type_key": "string",
    "description": "string",
    "key": "string",
    "link": "string",
    "link_text": "string",
    "occurred_at": "string",
    "properties": {},
    "title": "string",
    "weight": "string"
  }'
```

`POST /{workspace_slug}/members/{member_slug}/activities`

> Body parameter

```json
{
  "activity_type": "string",
  "activity_type_key": "string",
  "description": "string",
  "key": "string",
  "link": "string",
  "link_text": "string",
  "occurred_at": "string",
  "properties": {},
  "title": "string",
  "weight": "string"
}
```

<h3 id="create-a-custom-or-a-content-activity-for-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|
|body|body|[custom_or_post_activity](#schemacustom_or_post_activity)|false|none|
|» *oneOf*|body|[activity](#schemaactivity)|false|none|
|» *oneOf*|body|[post_activity](#schemapost_activity)|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "action": "happened",
      "created_at": "2023-02-28T19:20:46.295Z",
      "custom_context": null,
      "custom_description": "More info about the thing",
      "custom_link": "http://link.com/",
      "custom_link_text": "See the thing",
      "custom_title": "Did a thing",
      "custom_type": "custom-type",
      "key": "thing-123",
      "occurred_at": "2023-02-28T19:20:46.292Z",
      "orbit_url": "http://localhost:3000/candycassin/activities/ZngsdG",
      "properties": {},
      "tags": [
        "product",
        "enterprise",
        "channel:custom",
        "custom_type:custom-type",
        "custom_title:did-a-thing"
      ],
      "type": "CustomActivity",
      "updated_at": "2023-02-28T19:20:46.295Z",
      "weight": "8.0"
    },
    "id": "ZngsdG",
    "relationships": {
      "activity_type": {
        "data": {
          "id": "574seD",
          "type": "activity_type"
        }
      },
      "member": {
        "data": {
          "id": "45PSyv",
          "type": "member"
        }
      },
      "user": {
        "data": {
          "id": "l6pF69",
          "type": "user"
        }
      }
    },
    "type": "custom_activity"
  },
  "included": [
    {
      "attributes": {
        "channel": "custom",
        "key": "custom:happened",
        "name": "Something happened",
        "short_name": "Custom",
        "source": "custom",
        "weight": "1.0"
      },
      "id": "574seD",
      "type": "activity_type"
    },
    {
      "attributes": {
        "activities_count": 0,
        "activities_score": 0,
        "avatar_url": "http://github.com/avatar.png",
        "bio": null,
        "birthday": null,
        "company": null,
        "created": false,
        "created_at": "2023-02-28T19:20:46.260Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": null,
        "github": null,
        "github_followers": null,
        "id": "45PSyv",
        "languages": null,
        "last_activity_occurred_at": null,
        "linkedin": null,
        "location": null,
        "love": null,
        "merged_at": null,
        "name": "BurmaDibbert",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/candycassin/members/burmadibbert",
        "pronouns": null,
        "reach": 0,
        "shipping_address": null,
        "slug": "burmadibbert",
        "source": "installation",
        "tag_list": [],
        "tags": [],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:20:46.260Z",
        "url": null
      },
      "id": "45PSyv",
      "relationships": {
        "identities": {
          "data": []
        },
        "organizations": {
          "data": []
        }
      },
      "type": "member"
    },
    {
      "attributes": {
        "created_at": "2023-02-28T19:20:46.270Z",
        "name": "KennyMacGyver",
        "updated_at": "2023-02-28T19:20:46.275Z"
      },
      "id": "l6pF69",
      "type": "user"
    }
  ]
}
```

> 422 Response

```json
{
  "errors": {
    "custom_title": [
      "can't be blank"
    ]
  }
}
```

<h3 id="create-a-custom-or-a-content-activity-for-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|success|None|
|403|Forbidden|forbidden|None|
|422|Unprocessable Entity|unprocessable entity|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update a custom activity for a member

> Code samples

```bash
curl https://example.com/string/members/string/activities/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activity_type": "string",
    "activity_type_key": "string",
    "description": "string",
    "key": "string",
    "link": "string",
    "link_text": "string",
    "occurred_at": "string",
    "properties": {},
    "title": "string",
    "weight": "string"
  }'
```

`PUT /{workspace_slug}/members/{member_slug}/activities/{id}`

> Body parameter

```json
{
  "activity_type": "string",
  "activity_type_key": "string",
  "description": "string",
  "key": "string",
  "link": "string",
  "link_text": "string",
  "occurred_at": "string",
  "properties": {},
  "title": "string",
  "weight": "string"
}
```

<h3 id="update-a-custom-activity-for-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|
|id|path|string|true|none|
|body|body|[activity](#schemaactivity)|false|none|
|» activity_type|body|string|false|The type of activity - what action was done by the member. This is a legacy field, use activity_type_key instead.|
|» activity_type_key|body|string|false|The key for a custom activity type for the workspace. Will create a new activity type if it does not exist.|
|» description|body|string|false|A description of the activity; displayed in the timeline|
|» key|body|string|false|Supply a key that must be unique or leave blank to have one generated.|
|» link|body|string|false|A URL for the activity; displayed in the timeline|
|» link_text|body|string|false|The text for the timeline link|
|» occurred_at|body|string|false|The date and time the activity occurred; defaults to now|
|» properties|body|object|false|Key-value pairs to provide contextual metadata about an activity.|
|» title|body|string|true|A title for the activity; displayed in the timeline|
|» weight|body|string|false|A custom weight to be used in filters and reports; defaults to 1.|

> Example responses

> 422 Response

```json
{
  "errors": {
    "custom_title": [
      "can't be blank"
    ]
  }
}
```

<h3 id="update-a-custom-activity-for-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|activity updated|None|
|403|Forbidden|forbidden|None|
|422|Unprocessable Entity|unprocessable entity|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Delete a post activity

> Code samples

```bash
curl https://example.com/string/members/string/activities/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{workspace_slug}/members/{member_slug}/activities/{id}`

<h3 id="delete-a-post-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|
|id|path|string|true|none|

<h3 id="delete-a-post-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|activity deleted|None|
|403|Forbidden|forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List member activities in an organization

> Code samples

```bash
curl https://example.com/string/organizations/string/activities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/organizations/{organization_id}/activities`

<h3 id="list-member-activities-in-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|organization_id|path|string|true|none|
|page|query|string|false|none|
|direction|query|string|false|none|
|items|query|string|false|none|
|sort|query|string|false|none|
|activity_type|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|ASC|
|direction|DESC|
|items|10|
|items|50|
|items|100|
|sort|occurred_at|
|sort|member|
|activity_type|content|
|activity_type|custom|
|activity_type|discord|
|activity_type|discourse|
|activity_type|github|
|activity_type|slack|
|activity_type|twitter|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "action": "sent",
        "activity_link": "https://discord.com/channels/823735870825037844/823735870825037847/9224118976",
        "created_at": "2023-02-28T19:21:08.732Z",
        "key": "9224118976",
        "occurred_at": "2023-02-27T19:21:08.701Z",
        "orbit_url": "http://localhost:3000/trinaspencerii/activities/pjLsLQ",
        "properties": {
          "discord_channel": "general",
          "discord_server": "Orbit-Sandbox"
        },
        "tags": [
          "channel:discord",
          "discord_server:Orbit Sandbox",
          "discord_channel:general"
        ],
        "type": "DiscordMessageSentActivity",
        "updated_at": "2023-02-28T19:21:08.732Z",
        "weight": "0.5"
      },
      "id": "pjLsLQ",
      "relationships": {
        "activity_type": {
          "data": {
            "id": "DzaseX",
            "type": "activity_type"
          }
        },
        "member": {
          "data": {
            "id": "BwNSO9",
            "type": "member"
          }
        }
      },
      "type": "discord_message_sent_activity"
    },
    {
      "attributes": {
        "action": "sent",
        "activity_link": "https://discord.com/channels/823735870825037844/823735870825037847/9839402447",
        "created_at": "2023-02-28T19:21:08.838Z",
        "key": "9839402447",
        "occurred_at": "2023-02-26T19:21:08.817Z",
        "orbit_url": "http://localhost:3000/trinaspencerii/activities/6ARs9g",
        "properties": {
          "discord_channel": "general",
          "discord_server": "Orbit-Sandbox"
        },
        "tags": [
          "channel:discord",
          "discord_server:Orbit Sandbox",
          "discord_channel:general"
        ],
        "type": "DiscordMessageSentActivity",
        "updated_at": "2023-02-28T19:21:08.838Z",
        "weight": "0.5"
      },
      "id": "6ARs9g",
      "relationships": {
        "activity_type": {
          "data": {
            "id": "DzaseX",
            "type": "activity_type"
          }
        },
        "member": {
          "data": {
            "id": "r9nSZ9",
            "type": "member"
          }
        }
      },
      "type": "discord_message_sent_activity"
    },
    {
      "attributes": {
        "action": "created",
        "activity_link": "https://github.com/buckhudson/nadinequigley",
        "created_at": "2023-02-28T19:21:08.797Z",
        "key": "github_activity_key:9",
        "occurred_at": "2023-02-25T19:21:08.747Z",
        "orbit_url": "http://localhost:3000/trinaspencerii/activities/VWesGO",
        "properties": {
          "github_organization": "buckhudson",
          "github_repository": "buckhudson/nadinequigley"
        },
        "tags": [
          "channel:github",
          "github_organization:buckhudson",
          "github_repository:buckhudson/nadinequigley"
        ],
        "type": "GithubActivity",
        "updated_at": "2023-02-28T19:21:08.797Z",
        "weight": "1.0"
      },
      "id": "VWesGO",
      "relationships": {
        "activity_type": {
          "data": {
            "id": "owxs43",
            "type": "activity_type"
          }
        },
        "member": {
          "data": {
            "id": "BwNSO9",
            "type": "member"
          }
        },
        "repository": {
          "data": {
            "id": "9mPTrn",
            "type": "repository"
          }
        }
      },
      "type": "github_activity"
    }
  ],
  "included": [
    {
      "attributes": {
        "channel": "discord",
        "key": "discord:message:sent",
        "name": "Sent a message in Discord",
        "short_name": "Discord message",
        "source": "discord",
        "weight": "1.0"
      },
      "id": "DzaseX",
      "type": "activity_type"
    },
    {
      "attributes": {
        "activities_count": 0,
        "activities_score": 0,
        "avatar_url": "http://github.com/avatar.png",
        "bio": null,
        "birthday": null,
        "company": null,
        "created": false,
        "created_at": "2023-02-28T19:21:08.692Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": null,
        "github": null,
        "github_followers": null,
        "id": "BwNSO9",
        "languages": null,
        "last_activity_occurred_at": null,
        "linkedin": null,
        "location": null,
        "love": null,
        "merged_at": null,
        "name": "John Doe",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/trinaspencerii/members/john-doe",
        "pronouns": null,
        "reach": 0,
        "shipping_address": null,
        "slug": "john-doe",
        "source": "installation",
        "tag_list": [],
        "tags": [],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:21:08.692Z",
        "url": null
      },
      "id": "BwNSO9",
      "relationships": {
        "identities": {
          "data": []
        },
        "organizations": {
          "data": [
            {
              "id": "nb0FmD",
              "type": "organization"
            }
          ]
        }
      },
      "type": "member"
    },
    {
      "attributes": {
        "activities_count": 0,
        "activities_score": 0,
        "avatar_url": "http://github.com/avatar.png",
        "bio": null,
        "birthday": null,
        "company": null,
        "created": false,
        "created_at": "2023-02-28T19:21:08.809Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": null,
        "github": null,
        "github_followers": null,
        "id": "r9nSZ9",
        "languages": null,
        "last_activity_occurred_at": null,
        "linkedin": null,
        "location": null,
        "love": null,
        "merged_at": null,
        "name": "Jane Smith",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/trinaspencerii/members/jane-smith",
        "pronouns": null,
        "reach": 0,
        "shipping_address": null,
        "slug": "jane-smith",
        "source": "installation",
        "tag_list": [],
        "tags": [],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:21:08.809Z",
        "url": null
      },
      "id": "r9nSZ9",
      "relationships": {
        "identities": {
          "data": []
        },
        "organizations": {
          "data": [
            {
              "id": "nb0FmD",
              "type": "organization"
            }
          ]
        }
      },
      "type": "member"
    },
    {
      "attributes": {
        "channel": "mysource",
        "key": "spec:happened:13",
        "name": "send Mysource 101",
        "short_name": "Spec Channel",
        "source": "mysource",
        "weight": "1.0"
      },
      "id": "owxs43",
      "type": "activity_type"
    }
  ],
  "links": {
    "first": "/trinaspencerii/organizations/nb0FmD/activities?page=1&direction=DESC&items=10&sort=occurred_at&activity_type=",
    "last": "/trinaspencerii/organizations/nb0FmD/activities?page=1&direction=DESC&items=10&sort=occurred_at&activity_type=",
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-member-activities-in-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="orbit-api-webhooks">Webhooks</h1>

## List webhooks in a workspace

> Code samples

```bash
curl https://example.com/string/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/webhooks`

<h3 id="list-webhooks-in-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "activity_keywords": [],
        "activity_tags": [],
        "activity_types": [],
        "created_at": "2023-02-28T19:21:14.379Z",
        "enabled": true,
        "event_type": "activity:created",
        "include_teammates": false,
        "member_tags": [],
        "name": "My Test Webhook",
        "updated_at": "2023-02-28T19:21:14.379Z",
        "url": "https://example.com/hook"
      },
      "id": "6qyFL6",
      "type": "webhook"
    }
  ],
  "links": {
    "first": "/fake-workspace/webhooks?page=1",
    "last": "/fake-workspace/webhooks?page=1",
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-webhooks-in-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a webhook

> Code samples

```bash
curl https://example.com/string/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activity_tags": [
      "string"
    ],
    "activity_types": [
      "string"
    ],
    "event_type": "string",
    "member_tags": [
      "string"
    ],
    "name": "string",
    "secret": "string",
    "url": "string"
  }'
```

`POST /{workspace_slug}/webhooks`

> Body parameter

```json
{
  "activity_tags": [
    "string"
  ],
  "activity_types": [
    "string"
  ],
  "event_type": "string",
  "member_tags": [
    "string"
  ],
  "name": "string",
  "secret": "string",
  "url": "string"
}
```

<h3 id="create-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|body|body|[webhook_subscription](#schemawebhook_subscription)|false|none|
|» activity_tags|body|[string]|false|none|
|» activity_types|body|[string]|false|none|
|» event_type|body|string|true|none|
|» member_tags|body|[string]|false|none|
|» name|body|string|true|none|
|» secret|body|string|false|none|
|» url|body|string|true|none|

<h3 id="create-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|webhook created|None|
|403|Forbidden|forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get a webhook

> Code samples

```bash
curl https://example.com/string/webhooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/webhooks/{id}`

<h3 id="get-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "activity_keywords": [],
      "activity_tags": [],
      "activity_types": [],
      "created_at": "2023-02-28T19:21:14.909Z",
      "enabled": true,
      "event_type": "activity:created",
      "include_teammates": false,
      "member_tags": [],
      "name": "My Test Webhook",
      "updated_at": "2023-02-28T19:21:14.909Z",
      "url": "https://example.com/hook"
    },
    "id": "6ZbFM6",
    "type": "webhook"
  }
}
```

<h3 id="get-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update a webhook

> Code samples

```bash
curl https://example.com/string/webhooks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activity_tags": [
      "string"
    ],
    "activity_types": [
      "string"
    ],
    "event_type": "string",
    "member_tags": [
      "string"
    ],
    "name": "string",
    "secret": "string",
    "url": "string"
  }'
```

`PUT /{workspace_slug}/webhooks/{id}`

> Body parameter

```json
{
  "activity_tags": [
    "string"
  ],
  "activity_types": [
    "string"
  ],
  "event_type": "string",
  "member_tags": [
    "string"
  ],
  "name": "string",
  "secret": "string",
  "url": "string"
}
```

<h3 id="update-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|id|path|string|true|none|
|body|body|[webhook_subscription](#schemawebhook_subscription)|false|none|
|» activity_tags|body|[string]|false|none|
|» activity_types|body|[string]|false|none|
|» event_type|body|string|true|none|
|» member_tags|body|[string]|false|none|
|» name|body|string|true|none|
|» secret|body|string|false|none|
|» url|body|string|true|none|

<h3 id="update-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|webhook updated|None|
|403|Forbidden|forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Delete a webhook

> Code samples

```bash
curl https://example.com/string/webhooks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{workspace_slug}/webhooks/{id}`

<h3 id="delete-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|id|path|string|true|none|

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|webhook deleted|None|
|403|Forbidden|forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="orbit-api-members">Members</h1>

## List members in a workspace

> Code samples

```bash
curl https://example.com/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/members`

<h3 id="list-members-in-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|affiliation|query|string|false|none|
|member_tags|query|string|false|The list of tags to filter against. Separate tags with `,` to do an intersection (AND), or with `\|` to do a union (OR)|
|orbit|query|string|false|The list of orbit levels to filter against. Accepted values are 1, 2, 3, 4, n. In the request, a format like `23` would include levels 2 and 3. `n` is for members with no orbit level.|
|activity_type|query|string|false|Comma separated list of activity types|
|identity|query|string|false|none|
|company[]|query|string|false|Comma separated list of companies. The union (OR) of companies is applied.|
|title[]|query|string|false|Comma separated list of job titles. The union (OR) of job titles is applied.|
|regions[]|query|string|false|Comma separated list of regions. The union (OR) of regions is applied.|
|countries[]|query|string|false|Comma separated list of countries. The union (OR) of countries is applied.|
|cities[]|query|string|false|Comma separated list of cities. The union (OR) of cities is applied.|
|start_date|query|string|false|Filter activities after this date. Format: YYYY-MM-DD.|
|end_date|query|string|false|Filter activities before this date. Format: YYYY-MM-DD.|
|relative|query|string|false|Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.|
|query|query|string|false|none|
|page|query|string|false|none|
|direction|query|string|false|none|
|items|query|string|false|none|
|activities_count_min|query|string|false|none|
|activities_count_max|query|string|false|none|
|sort|query|string|false|none|
|type|query|string|false|**Deprecated.** Deprecated in favor of the activity_type parameter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|affiliation|member|
|affiliation|teammate|
|activity_type|discourse:topic:created|
|activity_type|discourse:post:liked|
|activity_type|discourse:user:created|
|activity_type|discourse:post:created|
|activity_type|slack:message:sent|
|activity_type|slack:thread:replied|
|activity_type|slack:channel:joined|
|activity_type|note:created|
|activity_type|post:created|
|activity_type|issues:opened|
|activity_type|discord:message:sent|
|activity_type|issue_comment:created|
|activity_type|discord:thread:replied|
|activity_type|custom:happened|
|activity_type|dev:comment|
|activity_type|discord:message:replied|
|activity_type|discord:server:joined|
|activity_type|insided:conversation:started|
|activity_type|fork:created|
|activity_type|insided:idea:replied|
|activity_type|insided:article:created|
|activity_type|discussions:discussion_created|
|activity_type|insided:question:replied|
|activity_type|discussions:comment|
|activity_type|discussions:reply|
|activity_type|insided:article:replied|
|activity_type|insided:question:asked|
|activity_type|insided:conversation:replied|
|activity_type|insided:idea:submitted|
|activity_type|reddit:comment|
|activity_type|reddit:post|
|activity_type|stackoverflow:answer|
|activity_type|linkedin:comment|
|activity_type|pull_requests:opened|
|activity_type|pull_requests:merged|
|activity_type|star:created|
|activity_type|stackoverflow:question|
|activity_type|tweet:sent|
|activity_type|twitter:followed|
|activity_type|youtube:comment|
|identity|github|
|identity|twitter|
|identity|email|
|identity|discourse|
|identity|linkedin|
|identity|devto|
|identity|slack|
|identity|discord|
|direction|ASC|
|direction|DESC|
|items|10|
|items|50|
|items|100|
|sort|activities_count|
|sort|company|
|sort|created_at|
|sort|first_activity|
|sort|github_followers|
|sort|id|
|sort|last_activity|
|sort|location|
|sort|love|
|sort|name|
|sort|orbit|
|sort|reach|
|sort|title|
|sort|twitter_followers|
|sort|updated_at|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "activities_count": 2,
        "activities_score": 2,
        "avatar_url": "http://github.com/avatar.png",
        "bio": null,
        "birthday": null,
        "company": null,
        "created": false,
        "created_at": "2023-02-28T19:20:49.655Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": "2023-02-26T19:20:49.764Z",
        "github": null,
        "github_followers": null,
        "id": "jaPSJy",
        "languages": null,
        "last_activity_occurred_at": "2023-02-28T18:20:49.806Z",
        "linkedin": null,
        "location": null,
        "love": null,
        "merged_at": null,
        "name": "Sally",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/vanstroman/members/sally",
        "pronouns": null,
        "reach": 0,
        "shipping_address": null,
        "slug": "sally",
        "source": "installation",
        "tag_list": [
          "ruby"
        ],
        "tags": [
          "ruby"
        ],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:20:49.663Z",
        "url": null
      },
      "id": "jaPSJy",
      "relationships": {
        "identities": {
          "data": [
            {
              "id": "5geTxn",
              "type": "spec_identity"
            }
          ]
        },
        "organizations": {
          "data": [
            {
              "id": "aWQFAB",
              "type": "organization"
            }
          ]
        }
      },
      "type": "member"
    },
    {
      "attributes": {
        "activities_count": 3,
        "activities_score": 3,
        "avatar_url": "http://github.com/avatar.png",
        "bio": null,
        "birthday": null,
        "company": null,
        "created": false,
        "created_at": "2023-02-28T19:20:49.635Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": "2023-02-20T19:20:49.737Z",
        "github": null,
        "github_followers": null,
        "id": "4EzSdZ",
        "languages": null,
        "last_activity_occurred_at": "2023-02-24T19:20:49.668Z",
        "linkedin": null,
        "location": null,
        "love": null,
        "merged_at": null,
        "name": "Josh",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/vanstroman/members/josh",
        "pronouns": null,
        "reach": 0,
        "shipping_address": null,
        "slug": "josh",
        "source": "installation",
        "tag_list": [
          "ruby"
        ],
        "tags": [
          "ruby"
        ],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:20:49.643Z",
        "url": null
      },
      "id": "4EzSdZ",
      "relationships": {
        "identities": {
          "data": [
            {
              "id": "nbWTe1",
              "type": "spec_identity"
            }
          ]
        },
        "organizations": {
          "data": []
        }
      },
      "type": "member"
    }
  ],
  "included": [
    {
      "id": "43",
      "type": "spec_identity"
    },
    {
      "attributes": {
        "active_since": null,
        "created_at": "2023-02-28T19:20:49.844Z",
        "crm_uid": null,
        "crm_url": null,
        "crunchbase": null,
        "deal_closed_date": null,
        "email_addresses": null,
        "employees_count": null,
        "estimated_annual_revenue": null,
        "facebook": null,
        "facebook_followers": null,
        "founded_in": null,
        "id": "aWQFAB",
        "industry": null,
        "last_active": null,
        "lifecycle_stage": null,
        "linkedin": null,
        "location": null,
        "members_count": 1,
        "name": "MitchelHeaney",
        "organization_type": null,
        "owner_email": null,
        "owner_name": null,
        "price_plan": null,
        "source": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:20:49.844Z",
        "website": "example-1.com"
      },
      "id": "aWQFAB",
      "type": "organization"
    },
    {
      "id": "42",
      "type": "spec_identity"
    }
  ],
  "links": {
    "first": "http://localhost:3000/api/v1/vanstroman/members?activities_count_max=99&activities_count_min=1&activity_type=type%3Anew%2Cspec%3Aactivity&affiliation=&cities%5B%5D=&company%5B%5D=&countries%5B%5D=&direction=DESC&end_date=&identity=&items=10&member_tags=ruby%7Crails%2C-go&orbit=&page=1&query=&regions%5B%5D=&relative=&sort=last_activity&start_date=&title%5B%5D=&workspace=vanstroman",
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-members-in-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create or update a member

> Code samples

```bash
curl https://example.com/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "identity": {
      "email": "string",
      "name": "string",
      "source": "string",
      "source_host": "string",
      "uid": "string",
      "url": "string",
      "username": "string"
    },
    "member": {
      "bio": "string",
      "birthday": "string",
      "company": "string",
      "devto": "string",
      "email": "string",
      "github": "string",
      "linkedin": "string",
      "location": "string",
      "name": "string",
      "pronouns": "string",
      "shipping_address": "string",
      "slug": "string",
      "tag_list": "string",
      "tags": "string",
      "tags_to_add": "string",
      "teammate": true,
      "title": "string",
      "tshirt": "string",
      "twitter": "string",
      "url": "string"
    }
  }'
```

`POST /{workspace_slug}/members`

This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.

> Body parameter

```json
{
  "identity": {
    "email": "string",
    "name": "string",
    "source": "string",
    "source_host": "string",
    "uid": "string",
    "url": "string",
    "username": "string"
  },
  "member": {
    "bio": "string",
    "birthday": "string",
    "company": "string",
    "devto": "string",
    "email": "string",
    "github": "string",
    "linkedin": "string",
    "location": "string",
    "name": "string",
    "pronouns": "string",
    "shipping_address": "string",
    "slug": "string",
    "tag_list": "string",
    "tags": "string",
    "tags_to_add": "string",
    "teammate": true,
    "title": "string",
    "tshirt": "string",
    "twitter": "string",
    "url": "string"
  }
}
```

<h3 id="create-or-update-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|body|body|[member_and_identity](#schemamember_and_identity)|false|none|
|» identity|body|[identity](#schemaidentity)|false|Represents an email address, a profile on networks like github and twitter, or a record in another system.|
|» member|body|[member](#schemamember)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "activities_count": 0,
      "activities_score": 0,
      "avatar_url": "http://github.com/avatar.png",
      "bio": null,
      "birthday": null,
      "company": null,
      "created": false,
      "created_at": "2023-02-28T19:20:58.483Z",
      "deleted_at": null,
      "devto": null,
      "discord": null,
      "discourse": null,
      "email": "dzello@orbit.love",
      "first_activity_occurred_at": null,
      "github": "dzello",
      "github_followers": null,
      "id": "4ndS8E",
      "languages": null,
      "last_activity_occurred_at": null,
      "linkedin": null,
      "location": null,
      "love": null,
      "merged_at": null,
      "name": "KaterineRuecker",
      "orbit_level": null,
      "orbit_url": "http://localhost:3000/missmarvisblanda/members/katerineruecker",
      "pronouns": null,
      "reach": 0,
      "shipping_address": null,
      "slug": "katerineruecker",
      "source": "installation",
      "tag_list": [
        "one",
        "two"
      ],
      "tags": [
        "one",
        "two"
      ],
      "teammate": false,
      "title": null,
      "topics": null,
      "tshirt": null,
      "twitter": "dzello",
      "twitter_followers": null,
      "updated_at": "2023-02-28T19:20:58.561Z",
      "url": null
    },
    "id": "4ndS8E",
    "relationships": {
      "identities": {
        "data": [
          {
            "id": "5ENTeK",
            "type": "github_identity"
          },
          {
            "id": "nZRTEp",
            "type": "twitter_identity"
          },
          {
            "id": "nqaT7d",
            "type": "email_identity"
          }
        ]
      },
      "organizations": {
        "data": []
      }
    },
    "type": "member"
  },
  "included": [
    {
      "attributes": {
        "email": null,
        "name": null,
        "source": "github",
        "source_host": "github.com",
        "uid": "uid-72",
        "username": "dzello"
      },
      "id": "5ENTeK",
      "type": "github_identity"
    },
    {
      "attributes": {
        "email": null,
        "name": null,
        "source": "twitter",
        "source_host": "twitter.com",
        "uid": null,
        "username": "dzello"
      },
      "id": "nZRTEp",
      "type": "twitter_identity"
    },
    {
      "attributes": {
        "email": "dzello@orbit.love",
        "name": "dzello",
        "source": "email",
        "source_host": "email.host",
        "uid": "dzello@orbit.love",
        "username": null
      },
      "id": "nqaT7d",
      "type": "email_identity"
    }
  ]
}
```

> 201 Response

```json
{
  "data": {
    "attributes": {
      "activities_count": 0,
      "activities_score": 0,
      "avatar_url": "https://avatars2.githubusercontent.com/u/174777?u=79e423dd07c19122115f52a1c97727ca193e6253&v=4",
      "bio": "Co-founder & CTO @orbit-love · Developer Advocate · formerly @algolia and @keen",
      "birthday": null,
      "company": "@orbit-love",
      "created": true,
      "created_at": "2023-02-28T19:20:58.117Z",
      "deleted_at": null,
      "devto": null,
      "discord": null,
      "discourse": null,
      "email": "josh@orbit.love",
      "first_activity_occurred_at": null,
      "github": "dzello",
      "github_followers": 171,
      "id": "40mSvV",
      "languages": null,
      "last_activity_occurred_at": null,
      "linkedin": null,
      "location": "Paris",
      "love": null,
      "merged_at": null,
      "name": "Josh Dzielak",
      "orbit_level": null,
      "orbit_url": "http://localhost:3000/waylonhickle/members/dzello",
      "pronouns": null,
      "reach": 8,
      "shipping_address": null,
      "slug": "dzello",
      "source": "api",
      "tag_list": [
        "one",
        "two"
      ],
      "tags": [
        "one",
        "two"
      ],
      "teammate": false,
      "title": null,
      "topics": null,
      "tshirt": null,
      "twitter": "dzello",
      "twitter_followers": null,
      "updated_at": "2023-02-28T19:20:58.183Z",
      "url": "https://dzello.com/"
    },
    "id": "40mSvV",
    "relationships": {
      "identities": {
        "data": [
          {
            "id": "1ADTwV",
            "type": "github_identity"
          },
          {
            "id": "3RgTbZ",
            "type": "twitter_identity"
          },
          {
            "id": "3YETyv",
            "type": "email_identity"
          }
        ]
      },
      "organizations": {
        "data": [
          {
            "id": "n9WF2V",
            "type": "organization"
          }
        ]
      }
    },
    "type": "member"
  },
  "included": [
    {
      "attributes": {
        "email": null,
        "name": "Josh Dzielak",
        "source": "github",
        "source_host": "github.com",
        "uid": "174777",
        "username": "dzello"
      },
      "id": "1ADTwV",
      "type": "github_identity"
    },
    {
      "attributes": {
        "email": null,
        "name": null,
        "source": "twitter",
        "source_host": "twitter.com",
        "uid": null,
        "username": "dzello"
      },
      "id": "3RgTbZ",
      "type": "twitter_identity"
    },
    {
      "attributes": {
        "email": "josh@orbit.love",
        "name": "josh",
        "source": "email",
        "source_host": "email.host",
        "uid": "josh@orbit.love",
        "username": null
      },
      "id": "3YETyv",
      "type": "email_identity"
    }
  ]
}
```

> 422 Response

```json
{
  "errors": {
    "email": [
      "is invalid"
    ],
    "name": [
      "can't be blank"
    ]
  }
}
```

<h3 id="create-or-update-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|
|201|Created|created|None|
|403|Forbidden|forbidden|None|
|422|Unprocessable Entity|unprocessable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Find a member by an identity

> Code samples

```bash
curl https://example.com/string/members/find \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/members/find`

Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.

<h3 id="find-a-member-by-an-identity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|source|query|string|false|none|
|source_host|query|string|false|none|
|uid|query|string|false|none|
|username|query|string|false|none|
|email|query|string|false|none|
|github|query|string|false|Deprecated, please use source=github and username=<username> instead|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "activities_count": 0,
      "activities_score": 0,
      "avatar_url": "http://github.com/avatar.png",
      "bio": null,
      "birthday": null,
      "company": null,
      "created": false,
      "created_at": "2023-02-28T19:21:07.970Z",
      "deleted_at": null,
      "devto": null,
      "discord": null,
      "discourse": null,
      "email": null,
      "first_activity_occurred_at": null,
      "github": "dzello",
      "github_followers": null,
      "id": "rRxS6X",
      "languages": null,
      "last_activity_occurred_at": null,
      "linkedin": null,
      "location": null,
      "love": null,
      "merged_at": null,
      "name": "MrsChiCummerata",
      "orbit_level": null,
      "orbit_url": "http://localhost:3000/glendaschmidt/members/mrschicummerata",
      "pronouns": null,
      "reach": 0,
      "shipping_address": null,
      "slug": "mrschicummerata",
      "source": "installation",
      "tag_list": [],
      "tags": [],
      "teammate": false,
      "title": null,
      "topics": null,
      "tshirt": null,
      "twitter": null,
      "twitter_followers": null,
      "updated_at": "2023-02-28T19:21:07.970Z",
      "url": null
    },
    "id": "rRxS6X",
    "relationships": {
      "identities": {
        "data": [
          {
            "id": "1JrTad",
            "type": "github_identity"
          }
        ]
      },
      "organizations": {
        "data": []
      }
    },
    "type": "member"
  },
  "included": [
    {
      "attributes": {
        "email": null,
        "name": null,
        "source": "github",
        "source_host": "github.com",
        "uid": "uid-82",
        "username": "dzello"
      },
      "id": "1JrTad",
      "type": "github_identity"
    }
  ]
}
```

> 404 Response

```json
{
  "errors": "No member matching this identity was found"
}
```

<h3 id="find-a-member-by-an-identity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|
|404|Not Found|Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get a member

> Code samples

```bash
curl https://example.com/string/members/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/members/{member_slug}`

<h3 id="get-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "activities_count": 0,
      "activities_score": 0,
      "avatar_url": "http://github.com/avatar.png",
      "bio": null,
      "birthday": null,
      "company": null,
      "created": false,
      "created_at": "2023-02-28T19:20:56.012Z",
      "deleted_at": null,
      "devto": null,
      "discord": null,
      "discourse": null,
      "email": null,
      "first_activity_occurred_at": null,
      "github": null,
      "github_followers": null,
      "id": "jWXSAW",
      "languages": null,
      "last_activity_occurred_at": null,
      "linkedin": null,
      "location": null,
      "love": null,
      "merged_at": null,
      "name": "Josh",
      "orbit_level": null,
      "orbit_url": "http://localhost:3000/mrsroytoy/members/josh",
      "pronouns": null,
      "reach": 0,
      "shipping_address": null,
      "slug": "josh",
      "source": "installation",
      "tag_list": [],
      "tags": [],
      "teammate": false,
      "title": null,
      "topics": null,
      "tshirt": null,
      "twitter": null,
      "twitter_followers": null,
      "updated_at": "2023-02-28T19:20:56.012Z",
      "url": null
    },
    "id": "jWXSAW",
    "relationships": {
      "identities": {
        "data": [
          {
            "id": "nZRTEE",
            "type": "spec_identity"
          }
        ]
      },
      "organizations": {
        "data": [
          {
            "id": "BqkFva",
            "type": "organization"
          }
        ]
      }
    },
    "type": "member"
  },
  "included": [
    {
      "id": "90",
      "type": "spec_identity"
    },
    {
      "attributes": {
        "active_since": null,
        "created_at": "2023-02-28T19:20:56.022Z",
        "crm_uid": null,
        "crm_url": null,
        "crunchbase": null,
        "deal_closed_date": null,
        "email_addresses": null,
        "employees_count": null,
        "estimated_annual_revenue": null,
        "facebook": null,
        "facebook_followers": null,
        "founded_in": null,
        "id": "BqkFva",
        "industry": null,
        "last_active": null,
        "lifecycle_stage": null,
        "linkedin": null,
        "location": null,
        "members_count": 1,
        "name": "ReubenMcGlynn",
        "organization_type": null,
        "owner_email": null,
        "owner_name": null,
        "price_plan": null,
        "source": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:20:56.022Z",
        "website": "example-25.com"
      },
      "id": "BqkFva",
      "type": "organization"
    }
  ]
}
```

<h3 id="get-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update a member

> Code samples

```bash
curl https://example.com/string/members/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bio": "string",
    "birthday": "string",
    "company": "string",
    "devto": "string",
    "email": "string",
    "github": "string",
    "linkedin": "string",
    "location": "string",
    "name": "string",
    "pronouns": "string",
    "shipping_address": "string",
    "slug": "string",
    "tag_list": "string",
    "tags": "string",
    "tags_to_add": "string",
    "teammate": true,
    "title": "string",
    "tshirt": "string",
    "twitter": "string",
    "url": "string"
  }'
```

`PUT /{workspace_slug}/members/{member_slug}`

> Body parameter

```json
{
  "bio": "string",
  "birthday": "string",
  "company": "string",
  "devto": "string",
  "email": "string",
  "github": "string",
  "linkedin": "string",
  "location": "string",
  "name": "string",
  "pronouns": "string",
  "shipping_address": "string",
  "slug": "string",
  "tag_list": "string",
  "tags": "string",
  "tags_to_add": "string",
  "teammate": true,
  "title": "string",
  "tshirt": "string",
  "twitter": "string",
  "url": "string"
}
```

<h3 id="update-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|
|body|body|[member](#schemamember)|false|none|
|» bio|body|string|false|none|
|» birthday|body|string|false|none|
|» company|body|string|false|none|
|» devto|body|string|false|The member's DEV username|
|» email|body|string|false|The member's email|
|» github|body|string|false|The member's GitHub username|
|» linkedin|body|string|false|The member's LinkedIn username, without the in/ or pub/|
|» location|body|string|false|none|
|» name|body|string|false|none|
|» pronouns|body|string|false|none|
|» shipping_address|body|string|false|none|
|» slug|body|string|false|none|
|» tag_list|body|string|false|Deprecated: Please use the tags attribute instead|
|» tags|body|string|false|Replaces all tags for the member; comma-separated string or array|
|» tags_to_add|body|string|false|Adds tags to member; comma-separated string or array|
|» teammate|body|boolean|false|none|
|» title|body|string|false|none|
|» tshirt|body|string|false|none|
|» twitter|body|string|false|The member's Twitter username|
|» url|body|string|false|none|

<h3 id="update-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|member updated|None|
|403|Forbidden|forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Delete a member

> Code samples

```bash
curl https://example.com/string/members/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{workspace_slug}/members/{member_slug}`

<h3 id="delete-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|

<h3 id="delete-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|member deleted|None|
|403|Forbidden|forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Add identity to a member

> Code samples

```bash
curl https://example.com/string/members/string/identities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string",
    "name": "string",
    "source": "string",
    "source_host": "string",
    "uid": "string",
    "url": "string",
    "username": "string"
  }'
```

`POST /{workspace_slug}/members/{member_slug}/identities`

> Body parameter

```json
{
  "email": "string",
  "name": "string",
  "source": "string",
  "source_host": "string",
  "uid": "string",
  "url": "string",
  "username": "string"
}
```

<h3 id="add-identity-to-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|
|body|body|[identity](#schemaidentity)|false|none|
|» email|body|string|false|The email of the person in the source system|
|» name|body|string|false|The name of the person in the source system|
|» source|body|string|true|The type of source: known values include github, twitter, discourse, email, linkedin, devto. Custom values can also be used|
|» source_host|body|string|false|Specifies the location of the source, such as the host of a Discourse instance|
|» uid|body|string|false|The uid of the person in the source system|
|» url|body|string|false|For custom identities, an optional link to the profile on the source system|
|» username|body|string|false|The username of the person in the source system|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "email": "josh@orbit.love",
      "name": "Josh",
      "source": "twitch",
      "source_host": "twitch.tv",
      "uid": "12345",
      "username": "dzello1"
    },
    "id": "1adTJn",
    "type": "other_identity"
  }
}
```

> 422 Response

```json
{
  "errors": {
    "identity_id": [
      "has already been taken"
    ]
  }
}
```

<h3 id="add-identity-to-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|success|None|
|403|Forbidden|forbidden|None|
|422|Unprocessable Entity|identity is invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Remove identity from a member

> Code samples

```bash
curl https://example.com/string/members/string/identities \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string",
    "name": "string",
    "source": "string",
    "source_host": "string",
    "uid": "string",
    "url": "string",
    "username": "string"
  }'
```

`DELETE /{workspace_slug}/members/{member_slug}/identities`

> Body parameter

```json
{
  "email": "string",
  "name": "string",
  "source": "string",
  "source_host": "string",
  "uid": "string",
  "url": "string",
  "username": "string"
}
```

<h3 id="remove-identity-from-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|
|body|body|[identity](#schemaidentity)|false|none|
|» email|body|string|false|The email of the person in the source system|
|» name|body|string|false|The name of the person in the source system|
|» source|body|string|true|The type of source: known values include github, twitter, discourse, email, linkedin, devto. Custom values can also be used|
|» source_host|body|string|false|Specifies the location of the source, such as the host of a Discourse instance|
|» uid|body|string|false|The uid of the person in the source system|
|» url|body|string|false|For custom identities, an optional link to the profile on the source system|
|» username|body|string|false|The username of the person in the source system|

> Example responses

> 422 Response

```json
{
  "errors": {
    "identity": [
      "is not attached to this member"
    ]
  }
}
```

<h3 id="remove-identity-from-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|identity deleted|None|
|403|Forbidden|forbidden|None|
|422|Unprocessable Entity|identity is invalid or not attached to member|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List members in an organization

> Code samples

```bash
curl https://example.com/string/organizations/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/organizations/{organization_id}/members`

<h3 id="list-members-in-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|organization_id|path|string|true|none|
|page|query|string|false|none|
|items|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|items|10|
|items|50|
|items|100|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "activities_score": 0,
        "id": "jPESdn",
        "last_activity_occurred_at": null,
        "name": "Jane Smith",
        "slug": "jane-smith"
      },
      "id": "jPESdn",
      "relationships": {},
      "type": "member"
    },
    {
      "attributes": {
        "activities_score": 0,
        "id": "jYbS8E",
        "last_activity_occurred_at": null,
        "name": "John Doe",
        "slug": "john-doe"
      },
      "id": "jYbS8E",
      "relationships": {},
      "type": "member"
    }
  ],
  "links": {
    "first": "/staceybayer/organizations/ao4F7b/members?page=1&items=10",
    "last": "/staceybayer/organizations/ao4F7b/members?page=1&items=10",
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-members-in-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="orbit-api-notes">Notes</h1>

## Get the member's notes

> Code samples

```bash
curl https://example.com/string/members/string/notes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/members/{member_slug}/notes`

<h3 id="get-the-members-notes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|
|page|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "body": "heyo",
        "created_at": "2023-02-28T19:20:49.147Z",
        "id": "o5Nf2J",
        "updated_at": "2023-02-28T19:20:49.147Z"
      },
      "id": "o5Nf2J",
      "relationships": {
        "member": {
          "data": {
            "id": "jPESm8",
            "type": "member"
          }
        },
        "user": {
          "data": {
            "id": "lqAFn8",
            "type": "user"
          }
        }
      },
      "type": "note"
    }
  ],
  "included": [
    {
      "attributes": {
        "activities_count": 0,
        "activities_score": 0,
        "avatar_url": "http://github.com/avatar.png",
        "bio": null,
        "birthday": null,
        "company": null,
        "created": false,
        "created_at": "2023-02-28T19:20:49.130Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": null,
        "github": null,
        "github_followers": null,
        "id": "jPESm8",
        "languages": null,
        "last_activity_occurred_at": null,
        "linkedin": null,
        "location": null,
        "love": null,
        "merged_at": null,
        "name": "ClydeHirtheII",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/misstyreecorkery/members/clydehirtheii",
        "pronouns": null,
        "reach": 0,
        "shipping_address": null,
        "slug": "clydehirtheii",
        "source": "installation",
        "tag_list": [],
        "tags": [],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:20:49.130Z",
        "url": null
      },
      "id": "jPESm8",
      "relationships": {
        "identities": {
          "data": []
        },
        "organizations": {
          "data": []
        }
      },
      "type": "member"
    },
    {
      "attributes": {
        "created_at": "2023-02-28T19:20:49.139Z",
        "name": "MrsDominicaLabadie",
        "updated_at": "2023-02-28T19:20:49.145Z"
      },
      "id": "lqAFn8",
      "type": "user"
    }
  ],
  "links": {
    "first": "/misstyreecorkery/members/clydehirtheii/notes?page=1",
    "last": "/misstyreecorkery/members/clydehirtheii/notes?page=1",
    "next": null,
    "prev": null
  }
}
```

<h3 id="get-the-members-notes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a note

> Code samples

```bash
curl https://example.com/string/members/string/notes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string"
  }'
```

`POST /{workspace_slug}/members/{member_slug}/notes`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="create-a-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|
|body|body|[note](#schemanote)|false|none|
|» body|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "body": "heyo",
      "created_at": "2023-02-28T19:20:48.856Z",
      "id": "qR4fVo",
      "updated_at": "2023-02-28T19:20:48.856Z"
    },
    "id": "qR4fVo",
    "relationships": {
      "member": {
        "data": {
          "id": "jDdSYG",
          "type": "member"
        }
      },
      "user": {
        "data": {
          "id": "ZgeFNz",
          "type": "user"
        }
      }
    },
    "type": "note"
  }
}
```

<h3 id="create-a-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|note created|None|
|403|Forbidden|forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update a note

> Code samples

```bash
curl https://example.com/string/members/string/notes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string"
  }'
```

`PUT /{workspace_slug}/members/{member_slug}/notes/{id}`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="update-a-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|member_slug|path|string|true|none|
|id|path|string|true|none|
|body|body|[note](#schemanote)|false|none|
|» body|body|string|true|none|

<h3 id="update-a-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|note updated|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="orbit-api-organizations">Organizations</h1>

## List organizations in a workspace

> Code samples

```bash
curl https://example.com/string/organizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/organizations`

<h3 id="list-organizations-in-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|query|query|string|false|none|
|page|query|string|false|none|
|direction|query|string|false|none|
|items|query|string|false|none|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|ASC|
|direction|DESC|
|items|10|
|items|50|
|items|100|
|sort|name|
|sort|website|
|sort|members_count|
|sort|employees_count|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "active_since": null,
        "created_at": "2023-02-28T19:21:11.655Z",
        "crm_uid": null,
        "crm_url": null,
        "crunchbase": null,
        "deal_closed_date": null,
        "email_addresses": null,
        "employees_count": null,
        "estimated_annual_revenue": null,
        "facebook": null,
        "facebook_followers": null,
        "founded_in": null,
        "id": "nAeF3p",
        "industry": null,
        "last_active": null,
        "lifecycle_stage": null,
        "linkedin": null,
        "location": null,
        "members_count": 1,
        "name": "Organization2",
        "organization_type": null,
        "owner_email": null,
        "owner_name": null,
        "price_plan": null,
        "source": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:21:11.655Z",
        "website": "org2.example.com"
      },
      "id": "nAeF3p",
      "type": "organization"
    },
    {
      "attributes": {
        "active_since": null,
        "created_at": "2023-02-28T19:21:11.652Z",
        "crm_uid": "abcde123451",
        "crm_url": "https://example.com/1",
        "crunchbase": null,
        "deal_closed_date": "2023-02-28T19:21:11.668Z",
        "email_addresses": null,
        "employees_count": null,
        "estimated_annual_revenue": null,
        "facebook": null,
        "facebook_followers": null,
        "founded_in": null,
        "id": "n27FjR",
        "industry": null,
        "last_active": null,
        "lifecycle_stage": "customer",
        "linkedin": null,
        "location": null,
        "members_count": 1,
        "name": "Organization1",
        "organization_type": null,
        "owner_email": "john.toto@example.com",
        "owner_name": "John Toto",
        "price_plan": "Enterprise",
        "source": "Fake CRM",
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:21:11.652Z",
        "website": "org1.example.com"
      },
      "id": "n27FjR",
      "type": "organization"
    }
  ],
  "links": {
    "first": "http://localhost:3000/api/v1/bartonbrakus/organizations?direction=DESC&items=10&page=1&query=&sort=name&workspace=bartonbrakus",
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-organizations-in-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get an organization

> Code samples

```bash
curl https://example.com/string/organizations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/organizations/{organization_id}`

<h3 id="get-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|organization_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "active_since": null,
      "created_at": "2023-02-28T19:21:12.080Z",
      "crm_uid": null,
      "crm_url": null,
      "crunchbase": null,
      "deal_closed_date": null,
      "email_addresses": null,
      "employees_count": null,
      "estimated_annual_revenue": null,
      "facebook": null,
      "facebook_followers": null,
      "founded_in": null,
      "id": "VlOFP7",
      "industry": null,
      "last_active": null,
      "lifecycle_stage": null,
      "linkedin": null,
      "location": null,
      "members_count": 1,
      "name": "Organization1",
      "organization_type": null,
      "owner_email": null,
      "owner_name": null,
      "price_plan": null,
      "source": null,
      "twitter": null,
      "twitter_followers": null,
      "updated_at": "2023-02-28T19:21:12.080Z",
      "website": "example-47.com"
    },
    "id": "VlOFP7",
    "type": "organization"
  }
}
```

<h3 id="get-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update an organization

> Code samples

```bash
curl https://example.com/string/organizations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "crm_uid": "string",
    "crm_url": "string",
    "deal_closed_date": "string",
    "lifecycle_stage": "string",
    "owner_email": "string",
    "owner_name": "string",
    "price_plan": "string",
    "source": "string"
  }'
```

`PUT /{workspace_slug}/organizations/{organization_id}`

> Body parameter

```json
{
  "crm_uid": "string",
  "crm_url": "string",
  "deal_closed_date": "string",
  "lifecycle_stage": "string",
  "owner_email": "string",
  "owner_name": "string",
  "price_plan": "string",
  "source": "string"
}
```

<h3 id="update-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|organization_id|path|string|true|none|
|body|body|[organization](#schemaorganization)|false|none|
|» crm_uid|body|string|false|The unique identifier of the organization in your CRM.|
|» crm_url|body|string|true|A link to the organization profile in your CRM.|
|» deal_closed_date|body|string|false|The date the organization became a customer.|
|» lifecycle_stage|body|string|true|The current stage of the organization in the marketing or sales process.|
|» owner_email|body|string|false|The email of the team member who is in charge of the organization.|
|» owner_name|body|string|false|The name of the team member who is in charge of the organization.|
|» price_plan|body|string|false|The pricing plan the organization is on.|
|» source|body|string|true|The name of the CRM you use for tracking the organization.|

<h3 id="update-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|organization updated|None|
|403|Forbidden|forbidden|None|
|422|Unprocessable Entity|deal_closed_date is invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="orbit-api-reports">Reports</h1>

## Get a workspace stats

> Code samples

```bash
curl https://example.com/string/reports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{workspace_slug}/reports`

<h3 id="get-a-workspace-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|start_date|query|string|false|Filter activities after this date. Format: YYYY-MM-DD.|
|end_date|query|string|false|Filter activities before this date. Format: YYYY-MM-DD.|
|relative|query|string|false|Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.|
|properties|query|string|false|none|
|activity_type|query|string|false|none|
|type|query|string|false|**Deprecated.** Deprecated in favor of the activity_type parameter.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "activities": {
        "foo:activity": {
          "count": 0,
          "delta": 0,
          "members": {
            "active_count": 0,
            "active_delta": 0,
            "new_count": 0,
            "new_delta": 0,
            "returning_count": 0,
            "returning_delta": 0
          },
          "source": "mysource"
        },
        "spec:activity": {
          "count": 1,
          "delta": 0,
          "members": {
            "active_count": 1,
            "active_delta": 0,
            "new_count": 1,
            "new_delta": 0,
            "returning_count": 0,
            "returning_delta": 0
          },
          "source": "mysource"
        },
        "total_count": 1,
        "total_delta": 0
      },
      "members": {
        "active_count": 1,
        "active_delta": 0,
        "new_count": 1,
        "new_delta": 0,
        "returning_count": 0,
        "returning_delta": 0
      },
      "overview": {
        "members_on_orbit_level_1_count": 0,
        "members_on_orbit_level_2_count": 0,
        "members_on_orbit_level_3_count": 0,
        "members_on_orbit_level_4_count": 0,
        "members_on_orbit_level_none_count": 1,
        "total_members_count": 1
      },
      "timeframe": {
        "end_date": "2023-02-28",
        "end_date_last": "2023-01-28",
        "start_date": "2023-01-29",
        "start_date_last": "2022-12-29"
      },
      "workspace_id": "1XOtmn"
    },
    "id": "1XOtmn",
    "type": "statistics"
  }
}
```

<h3 id="get-a-workspace-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="orbit-api-users">Users</h1>

## Get info about the current user

> Code samples

```bash
curl https://example.com/user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /user`

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created_at": "2023-02-28T19:20:37.508Z",
      "email": "pia.hettinger@zulauf.name",
      "name": "MrsHellenCorkery",
      "updated_at": "2023-02-28T19:20:37.508Z"
    },
    "id": "Ze1FV4",
    "type": "user"
  }
}
```

<h3 id="get-info-about-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|
|401|Unauthorized|unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="orbit-api-workspaces">Workspaces</h1>

## Get all workspaces for the current user

> Code samples

```bash
curl https://example.com/workspaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /workspaces`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "created_at": "2023-02-28T19:21:15.556Z",
        "name": "Fake Workspace",
        "slug": "fake-workspace",
        "updated_at": "2023-02-28T19:21:15.565Z"
      },
      "id": "15Vt67",
      "relationships": {
        "repositories": {
          "data": []
        }
      },
      "type": "workspace"
    }
  ],
  "included": []
}
```

<h3 id="get-all-workspaces-for-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Get a workspace

> Code samples

```bash
curl https://example.com/workspaces/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /workspaces/{workspace_slug}`

<h3 id="get-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace_slug|path|string|true|none|
|include_orbit_level_counts|query|boolean|false|Include the number of members by Orbit Level in the attributes|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "activities_count": 1,
      "created_at": "2023-02-28T19:21:15.825Z",
      "members_count": 1,
      "name": "Fake Workspace",
      "orbit_level_counts": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 2
      },
      "slug": "fake-workspace",
      "tags": {},
      "updated_at": "2023-02-28T19:21:15.916Z"
    },
    "id": "PvetbL",
    "relationships": {
      "last_activity": {
        "data": {
          "id": "ZPosrL",
          "type": "pull_request_activity"
        }
      },
      "last_member": {
        "data": {
          "id": "rmMS98",
          "type": "member"
        }
      },
      "repositories": {
        "data": []
      }
    },
    "type": "workspace"
  },
  "included": [
    {
      "attributes": {
        "activities_count": 0,
        "activities_score": 0,
        "avatar_url": "http://github.com/avatar.png",
        "bio": null,
        "birthday": null,
        "company": null,
        "created": false,
        "created_at": "2023-02-28T19:21:15.894Z",
        "deleted_at": null,
        "devto": null,
        "discord": null,
        "discourse": null,
        "email": null,
        "first_activity_occurred_at": null,
        "github": null,
        "github_followers": null,
        "id": "rmMS98",
        "languages": null,
        "last_activity_occurred_at": null,
        "linkedin": null,
        "location": null,
        "love": null,
        "merged_at": null,
        "name": "RobertoRunolfsdottir",
        "orbit_level": null,
        "orbit_url": "http://localhost:3000/fake-workspace/members/robertorunolfsdottir",
        "pronouns": null,
        "reach": 0,
        "shipping_address": null,
        "slug": "robertorunolfsdottir",
        "source": "installation",
        "tag_list": [],
        "tags": [],
        "teammate": false,
        "title": null,
        "topics": null,
        "tshirt": null,
        "twitter": null,
        "twitter_followers": null,
        "updated_at": "2023-02-28T19:21:15.894Z",
        "url": null
      },
      "id": "rmMS98",
      "relationships": {
        "identities": {
          "data": []
        },
        "organizations": {
          "data": []
        }
      },
      "type": "member"
    },
    {
      "attributes": {
        "action": "opened",
        "activity_link": "https://github.com/",
        "created_at": "2023-02-28T19:21:15.896Z",
        "g_created_at": "2023-02-28T20:21:15.886+01:00",
        "g_html_url": "https://github.com/",
        "g_merged": false,
        "g_merged_at": null,
        "g_merged_by": null,
        "g_number": 53,
        "g_title": "Here is some new code",
        "is_pull_request": null,
        "key": "carol/donnette#53",
        "occurred_at": "2023-02-28T19:21:15.886Z",
        "orbit_url": "http://localhost:3000/fake-workspace/activities/ZPosrL",
        "properties": {
          "github_organization": "carol",
          "github_pull_request": "carol/donnette/#53",
          "github_repository": "carol/donnette"
        },
        "tags": [
          "channel:github",
          "github_organization:carol",
          "github_repository:carol/donnette",
          "github_pull_request:carol/donnette/#53"
        ],
        "type": "PullRequestActivity",
        "updated_at": "2023-02-28T19:21:15.896Z",
        "weight": "1.0"
      },
      "id": "ZPosrL",
      "relationships": {
        "activity_type": {
          "data": {
            "id": "oWVsm9",
            "type": "activity_type"
          }
        },
        "member": {
          "data": {
            "id": "rmMS98",
            "type": "member"
          }
        },
        "repository": {
          "data": {
            "id": "6eeTk6",
            "type": "repository"
          }
        }
      },
      "type": "pull_request_activity"
    }
  ]
}
```

<h3 id="get-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

# Schemas

<h2 id="tocS_activity">activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "activity_type": "string",
  "activity_type_key": "string",
  "description": "string",
  "key": "string",
  "link": "string",
  "link_text": "string",
  "occurred_at": "string",
  "properties": {},
  "title": "string",
  "weight": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_type|string|false|none|The type of activity - what action was done by the member. This is a legacy field, use activity_type_key instead.|
|activity_type_key|string|false|none|The key for a custom activity type for the workspace. Will create a new activity type if it does not exist.|
|description|string|false|none|A description of the activity; displayed in the timeline|
|key|string|false|none|Supply a key that must be unique or leave blank to have one generated.|
|link|string|false|none|A URL for the activity; displayed in the timeline|
|link_text|string|false|none|The text for the timeline link|
|occurred_at|string|false|none|The date and time the activity occurred; defaults to now|
|properties|object|false|none|Key-value pairs to provide contextual metadata about an activity.|
|title|string|true|none|A title for the activity; displayed in the timeline|
|weight|string|false|none|A custom weight to be used in filters and reports; defaults to 1.|

<h2 id="tocS_activity_and_identity">activity_and_identity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity_and_identity"></a>
<a id="schema_activity_and_identity"></a>
<a id="tocSactivity_and_identity"></a>
<a id="tocsactivity_and_identity"></a>

```json
{
  "activity": {
    "activity_type": "string",
    "activity_type_key": "string",
    "description": "string",
    "key": "string",
    "link": "string",
    "link_text": "string",
    "occurred_at": "string",
    "properties": {},
    "title": "string",
    "weight": "string",
    "member": {
      "bio": "string",
      "birthday": "string",
      "company": "string",
      "devto": "string",
      "email": "string",
      "github": "string",
      "linkedin": "string",
      "location": "string",
      "name": "string",
      "pronouns": "string",
      "shipping_address": "string",
      "slug": "string",
      "tag_list": "string",
      "tags": "string",
      "tags_to_add": "string",
      "teammate": true,
      "title": "string",
      "tshirt": "string",
      "twitter": "string",
      "url": "string"
    }
  },
  "identity": {
    "email": "string",
    "name": "string",
    "source": "string",
    "source_host": "string",
    "uid": "string",
    "url": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|[activity_with_member](#schemaactivity_with_member) \| [post_activity_with_member](#schemapost_activity_with_member)|false|none|none|
|identity|[identity](#schemaidentity)|false|none|Represents an email address, a profile on networks like github and twitter, or a record in another system.|

<h2 id="tocS_activity_with_member">activity_with_member</h2>
<!-- backwards compatibility -->
<a id="schemaactivity_with_member"></a>
<a id="schema_activity_with_member"></a>
<a id="tocSactivity_with_member"></a>
<a id="tocsactivity_with_member"></a>

```json
{
  "activity_type": "string",
  "activity_type_key": "string",
  "description": "string",
  "key": "string",
  "link": "string",
  "link_text": "string",
  "occurred_at": "string",
  "properties": {},
  "title": "string",
  "weight": "string",
  "member": {
    "bio": "string",
    "birthday": "string",
    "company": "string",
    "devto": "string",
    "email": "string",
    "github": "string",
    "linkedin": "string",
    "location": "string",
    "name": "string",
    "pronouns": "string",
    "shipping_address": "string",
    "slug": "string",
    "tag_list": "string",
    "tags": "string",
    "tags_to_add": "string",
    "teammate": true,
    "title": "string",
    "tshirt": "string",
    "twitter": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_type|string|false|none|The type of activity - what action was done by the member. This is a legacy field, use activity_type_key instead.|
|activity_type_key|string|false|none|The key for a custom activity type for the workspace. Will create a new activity type if it does not exist.|
|description|string|false|none|A description of the activity; displayed in the timeline|
|key|string|false|none|Supply a key that must be unique or leave blank to have one generated.|
|link|string|false|none|A URL for the activity; displayed in the timeline|
|link_text|string|false|none|The text for the timeline link|
|occurred_at|string|false|none|The date and time the activity occurred; defaults to now|
|properties|object|false|none|Key-value pairs to provide contextual metadata about an activity.|
|title|string|true|none|A title for the activity; displayed in the timeline|
|weight|string|false|none|A custom weight to be used in filters and reports; defaults to 1.|
|member|[member](#schemamember)|false|none|none|

<h2 id="tocS_alert">alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "activity_types": [
    "string"
  ],
  "event_type": "string",
  "member_tags": [
    "string"
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_types|[string]|false|none|none|
|event_type|string|false|none|none|
|member_tags|[string]|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_custom_or_post_activity">custom_or_post_activity</h2>
<!-- backwards compatibility -->
<a id="schemacustom_or_post_activity"></a>
<a id="schema_custom_or_post_activity"></a>
<a id="tocScustom_or_post_activity"></a>
<a id="tocscustom_or_post_activity"></a>

```json
{
  "activity_type": "string",
  "activity_type_key": "string",
  "description": "string",
  "key": "string",
  "link": "string",
  "link_text": "string",
  "occurred_at": "string",
  "properties": {},
  "title": "string",
  "weight": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[activity](#schemaactivity)|false|none|none|
|*oneOf*|[post_activity](#schemapost_activity)|false|none|none|

<h2 id="tocS_destination">destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "alerts": [
    {
      "activity_types": [
        "string"
      ],
      "event_type": "string",
      "member_tags": [
        "string"
      ],
      "name": "string"
    }
  ],
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|[[alert](#schemaalert)]|false|none|none|
|name|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_identity">identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "email": "string",
  "name": "string",
  "source": "string",
  "source_host": "string",
  "uid": "string",
  "url": "string",
  "username": "string"
}
```

Represents an email address, a profile on networks like github and twitter, or a record in another system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email of the person in the source system|
|name|string|false|none|The name of the person in the source system|
|source|string|true|none|The type of source: known values include github, twitter, discourse, email, linkedin, devto. Custom values can also be used|
|source_host|string|false|none|Specifies the location of the source, such as the host of a Discourse instance|
|uid|string|false|none|The uid of the person in the source system|
|url|string|false|none|For custom identities, an optional link to the profile on the source system|
|username|string|false|none|The username of the person in the source system|

<h2 id="tocS_member">member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "bio": "string",
  "birthday": "string",
  "company": "string",
  "devto": "string",
  "email": "string",
  "github": "string",
  "linkedin": "string",
  "location": "string",
  "name": "string",
  "pronouns": "string",
  "shipping_address": "string",
  "slug": "string",
  "tag_list": "string",
  "tags": "string",
  "tags_to_add": "string",
  "teammate": true,
  "title": "string",
  "tshirt": "string",
  "twitter": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bio|string|false|none|none|
|birthday|string|false|none|none|
|company|string|false|none|none|
|devto|string|false|none|The member's DEV username|
|email|string|false|none|The member's email|
|github|string|false|none|The member's GitHub username|
|linkedin|string|false|none|The member's LinkedIn username, without the in/ or pub/|
|location|string|false|none|none|
|name|string|false|none|none|
|pronouns|string|false|none|none|
|shipping_address|string|false|none|none|
|slug|string|false|none|none|
|tag_list|string|false|none|Deprecated: Please use the tags attribute instead|
|tags|string|false|none|Replaces all tags for the member; comma-separated string or array|
|tags_to_add|string|false|none|Adds tags to member; comma-separated string or array|
|teammate|boolean|false|none|none|
|title|string|false|none|none|
|tshirt|string|false|none|none|
|twitter|string|false|none|The member's Twitter username|
|url|string|false|none|none|

<h2 id="tocS_member_and_identity">member_and_identity</h2>
<!-- backwards compatibility -->
<a id="schemamember_and_identity"></a>
<a id="schema_member_and_identity"></a>
<a id="tocSmember_and_identity"></a>
<a id="tocsmember_and_identity"></a>

```json
{
  "identity": {
    "email": "string",
    "name": "string",
    "source": "string",
    "source_host": "string",
    "uid": "string",
    "url": "string",
    "username": "string"
  },
  "member": {
    "bio": "string",
    "birthday": "string",
    "company": "string",
    "devto": "string",
    "email": "string",
    "github": "string",
    "linkedin": "string",
    "location": "string",
    "name": "string",
    "pronouns": "string",
    "shipping_address": "string",
    "slug": "string",
    "tag_list": "string",
    "tags": "string",
    "tags_to_add": "string",
    "teammate": true,
    "title": "string",
    "tshirt": "string",
    "twitter": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|[identity](#schemaidentity)|false|none|Represents an email address, a profile on networks like github and twitter, or a record in another system.|
|member|[member](#schemamember)|false|none|none|

<h2 id="tocS_note">note</h2>
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|none|

<h2 id="tocS_organization">organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "crm_uid": "string",
  "crm_url": "string",
  "deal_closed_date": "string",
  "lifecycle_stage": "string",
  "owner_email": "string",
  "owner_name": "string",
  "price_plan": "string",
  "source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crm_uid|string|false|none|The unique identifier of the organization in your CRM.|
|crm_url|string|true|none|A link to the organization profile in your CRM.|
|deal_closed_date|string|false|none|The date the organization became a customer.|
|lifecycle_stage|string|true|none|The current stage of the organization in the marketing or sales process.|
|owner_email|string|false|none|The email of the team member who is in charge of the organization.|
|owner_name|string|false|none|The name of the team member who is in charge of the organization.|
|price_plan|string|false|none|The pricing plan the organization is on.|
|source|string|true|none|The name of the CRM you use for tracking the organization.|

<h2 id="tocS_post_activity">post_activity</h2>
<!-- backwards compatibility -->
<a id="schemapost_activity"></a>
<a id="schema_post_activity"></a>
<a id="tocSpost_activity"></a>
<a id="tocspost_activity"></a>

```json
{
  "activity_type": "content",
  "occurred_at": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_type|string|true|none|none|
|occurred_at|string|false|none|The date and time at which the content was published; defaults to now|
|url|string|true|none|The url representing the post|

#### Enumerated Values

|Property|Value|
|---|---|
|activity_type|content|

<h2 id="tocS_post_activity_with_member">post_activity_with_member</h2>
<!-- backwards compatibility -->
<a id="schemapost_activity_with_member"></a>
<a id="schema_post_activity_with_member"></a>
<a id="tocSpost_activity_with_member"></a>
<a id="tocspost_activity_with_member"></a>

```json
{
  "activity_type": "content",
  "occurred_at": "string",
  "url": "string",
  "member": {
    "bio": "string",
    "birthday": "string",
    "company": "string",
    "devto": "string",
    "email": "string",
    "github": "string",
    "linkedin": "string",
    "location": "string",
    "name": "string",
    "pronouns": "string",
    "shipping_address": "string",
    "slug": "string",
    "tag_list": "string",
    "tags": "string",
    "tags_to_add": "string",
    "teammate": true,
    "title": "string",
    "tshirt": "string",
    "twitter": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_type|string|true|none|none|
|occurred_at|string|false|none|The date and time at which the content was published; defaults to now|
|url|string|true|none|The url representing the post|
|member|[member](#schemamember)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|activity_type|content|

<h2 id="tocS_webhook_subscription">webhook_subscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhook_subscription"></a>
<a id="schema_webhook_subscription"></a>
<a id="tocSwebhook_subscription"></a>
<a id="tocswebhook_subscription"></a>

```json
{
  "activity_tags": [
    "string"
  ],
  "activity_types": [
    "string"
  ],
  "event_type": "string",
  "member_tags": [
    "string"
  ],
  "name": "string",
  "secret": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_tags|[string]|false|none|none|
|activity_types|[string]|false|none|none|
|event_type|string|true|none|none|
|member_tags|[string]|false|none|none|
|name|string|true|none|none|
|secret|string|false|none|none|
|url|string|true|none|none|
