<h1 id="daniweb-connect-api">DaniWeb Connect API v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

User Recommendation Engine and Chat Network

Base URLs:

* <a href="https://www.daniweb.com/connect/api/v4">https://www.daniweb.com/connect/api/v4</a>

<a href="https://www.daniweb.com/connect/welcome/privacy">Terms of service</a>
Email: <a href="mailto:dani@daniwebmail.com">Dani Wolkowicki</a> 
Web: <a href="https://www.daniweb.com/members/1/dani">Dani Wolkowicki</a> 

<a href="https://www.daniweb.com/connect/developers">DaniWeb Connect API Documentation</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://www.daniweb.com/connect/oauth/auth](https://www.daniweb.com/connect/oauth/auth)
    - Token URL = [https://www.daniweb.com/connect/oauth/access_token](https://www.daniweb.com/connect/oauth/access_token)

|Scope|Scope Description|
|---|---|
|basic|*Originally missing*|
|conversations_read|Access your DaniWeb conversations|
|conversations_write|Manage your DaniWeb conversations|
|groups_read|Access your DaniWeb groups|
|groups_write|Manage your DaniWeb groups|
|profile_read|Access your DaniWeb user profile|
|profile_write|Manage your DaniWeb user profile|

- oAuth2 authentication.

    - Flow: implicit
    - Authorization URL = [https://www.daniweb.com/connect/oauth/auth](https://www.daniweb.com/connect/oauth/auth)

|Scope|Scope Description|
|---|---|
|basic|*Originally missing*|
|conversations_read|Access your DaniWeb conversations|
|conversations_write|Manage your DaniWeb conversations|
|groups_read|Access your DaniWeb groups|
|groups_write|Manage your DaniWeb groups|
|profile_read|Access your DaniWeb user profile|
|profile_write|Manage your DaniWeb user profile|

<h1 id="daniweb-connect-api-apps">apps</h1>

Operations involving Apps

## get/apps

> Code samples

```bash
curl https://example.com/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps`

Fetch all Daniapps that are currently in production mode.

<h3 id="getapps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "about": {
        "description": "string",
        "name": "string",
        "website": {
          "thumbshot": "string",
          "url": "http://example.com"
        }
      },
      "id": 0,
      "legal": {
        "privacy_url": "http://example.com",
        "tos_url": "http://example.com"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getapps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-apps](#schemaendpoint-get-apps)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/apps/{ID}

> Code samples

```bash
curl https://example.com/apps/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/{ID}`

Fetch an array of Daniapps that are currently in production mode.

<h3 id="getappsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "about": {
        "description": "string",
        "name": "string",
        "website": {
          "thumbshot": "string",
          "url": "http://example.com"
        }
      },
      "id": 0,
      "legal": {
        "privacy_url": "http://example.com",
        "tos_url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="getappsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-apps-ID](#schemaendpoint-get-apps-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

<h1 id="daniweb-connect-api-audiences">audiences</h1>

Operations involving Audiences

## get/audiences

> Code samples

```bash
curl https://example.com/audiences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audiences`

Fetch all Daniapp audience segments that comprise the current access token's bubble.

<h3 id="getaudiences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "about": {
        "name": "string"
      },
      "id": 0
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getaudiences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-audiences](#schemaendpoint-get-audiences)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/audiences/{ID}

> Code samples

```bash
curl https://example.com/audiences/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audiences/{ID}`

Fetch an array of Daniapp audience segments that comprise the current access token's bubble.

<h3 id="getaudiencesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "about": {
        "name": "string"
      },
      "id": 0
    }
  ]
}
```

<h3 id="getaudiencesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-audiences-ID](#schemaendpoint-get-audiences-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## post/audiences/{ID}/memberships

> Code samples

```bash
curl https://example.com/audiences/1/memberships \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /audiences/{ID}/memberships`

Create a membership record for the OAuth'ed end-user based on the current audience segment/bubble combination.

<h3 id="postaudiencesidmemberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "audience": {
      "id": 0
    },
    "member": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "success": true
}
```

<h3 id="postaudiencesidmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-audiences-ID-memberships](#schemaendpoint-post-audiences-id-memberships)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

<h1 id="daniweb-connect-api-autocompletes">autocompletes</h1>

Operations involving Autocompletes

## get/autocompletes

> Code samples

```bash
curl https://example.com/autocompletes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /autocompletes`

Retrieve an array of names and locations, filtered by category, that begin with the query string passed in. Ideally used for search autocomplete dropdowns, as the search functionality filters against name and location. The four potential categories are: `conversations` for names of users you are in existing conversations with; `matches` for names of users you have previously skipped over; `people` for names of all other users; `locations` for locations of users. Only users and their locations who exist with the current access token's bubble are considered.

<h3 id="getautocompletes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "conversations": [
      "string"
    ],
    "locations": [
      "string"
    ],
    "matches": [
      "string"
    ],
    "people": [
      "string"
    ]
  }
}
```

<h3 id="getautocompletes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-autocompletes](#schemaendpoint-get-autocompletes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read ), implicit_flow ( Scopes: profile_read )
</aside>

<h1 id="daniweb-connect-api-conversations">conversations</h1>

Operations involving Conversations

## post/conversations/schedules

> Code samples

```bash
curl https://example.com/conversations/schedules \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'date=string' \
  -F 'limit=50' \
  -F 'offset=0' \
  -F 'roll_up=false' \
  -F 'sort=desc'
```

`POST /conversations/schedules`

Paginated report of information about messages contributed by conversation and date. Only conversations that exist within the current access token's bubble are considered in the calculations. Optionally roll up all conversations to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages.

> Body parameter

```yaml
date: string
limit: 50
offset: 0
roll_up: false
sort: desc
```

<h3 id="postconversationsschedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» date|body|string|false|none|
|» limit|body|integer(int32)|false|none|
|» offset|body|integer(int32)|false|none|
|» roll_up|body|boolean|false|none|
|» sort|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sort|asc|
|» sort|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_count": 0,
      "conversation_count": 0,
      "conversation_id": 0,
      "date": "1970-01-01",
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "last_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "message_count": 0,
      "my_message_count": 0,
      "navigation": {
        "earliest_date": "1970-01-01",
        "next_date": "1970-01-01",
        "previous_date": "1970-01-01"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="postconversationsschedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-conversations-schedules](#schemaendpoint-post-conversations-schedules)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## post/conversations/searches

> Code samples

```bash
curl https://example.com/conversations/searches \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'date=string' \
  -F 'gt_message_id=0' \
  -F 'limit=50' \
  -F 'offset=0' \
  -F 'query=string'
```

`POST /conversations/searches`

Fetch messages authored from within the current bubble that match a query string passed in as a search parameter along with their relevancy score.

> Body parameter

```yaml
date: string
gt_message_id: 0
limit: 50
offset: 0
query: string
```

<h3 id="postconversationssearches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» date|body|string|false|none|
|» gt_message_id|body|integer(int32)|false|none|
|» limit|body|integer(int32)|false|none|
|» offset|body|integer(int32)|false|none|
|» query|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "relevance": {
        "score": 0
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="postconversationssearches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-conversations-searches](#schemaendpoint-post-conversations-searches)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## get/conversations/statuses

> Code samples

```bash
curl https://example.com/conversations/statuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/statuses`

Retrieve conversations that you are participating in with users who exists within the same bubble, along with your current relationship with the conversations. The user_a / user_b properties of the conversation are populated with as much data as is available if the user is not you. If the user is you, only the id field is populated. There is a separate status endpoint to retrieve relationship information for individual conversations. Optionally filter: 'new' to only show conversations with messages you haven't yet seen; 'introductions' to only show conversations where users have introduced themselves to you but nothing more; 'unreplied' to only show conversations where you have introduced yourself to other users but nothing more; 'notifications' to show all conversations where the other user was the last person to message. Optionally only show conversations engaging within the existing access token's bubble. This report is limited to your ~500-1000 most recently active conversations you've engaged in within current the access token's bubble.

<h3 id="getconversationsstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|none|
|include_archived|query|boolean|false|none|
|bubbled|query|boolean|false|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|new|
|filter|introductions|
|filter|unreplied|
|filter|notifications|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_status": true,
      "bubbled": {
        "latest_message": {
          "author": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          },
          "conversation": {},
          "id": 0,
          "last_seen": {
            "timestamp": "1970-01-01T00:00:00Z",
            "user": {
              "business_card": {
                "company_name": "string",
                "company_size": "string",
                "headline": "string",
                "industry": "string",
                "interest_tags": [
                  "string"
                ],
                "job_position": "string",
                "summary": "string",
                "website": {
                  "thumbshot_uri": "http://example.com",
                  "url": "http://example.com"
                }
              },
              "community_persona": {
                "id": 0,
                "identity": {
                  "avatar_uri": "http://example.com",
                  "badge": "string",
                  "profile_url": "http://example.com",
                  "username": "string"
                },
                "location": {
                  "free_form": "string"
                },
                "personal": {
                  "about_me": "string",
                  "birthday": "string",
                  "interests": "string",
                  "pc_specs": "string"
                },
                "signature": {
                  "parsed": "string",
                  "raw": "string"
                },
                "stats": {
                  "answered_count": 0,
                  "endorsements_count": 0,
                  "posts_count": 0,
                  "reputation_count": 0
                }
              },
              "id": 0,
              "profile": {
                "first_name": "string",
                "last_name": "string"
              },
              "usage": {
                "available_status": true,
                "joined_timestamp": "1970-01-01T00:00:00Z",
                "last_activity_timestamp": "1970-01-01T00:00:00Z",
                "online_status": true
              }
            }
          },
          "text": {
            "parsed": "string"
          },
          "timestamp": "1970-01-01T00:00:00Z"
        }
      },
      "conversation": {
        "first_message": {
          "author": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          },
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "user_a": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "user_b": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "earliest_unseen_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "new_message_count": 0
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getconversationsstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-conversations-statuses](#schemaendpoint-get-conversations-statuses)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## get/conversations/{ID}

> Code samples

```bash
curl https://example.com/conversations/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{ID}`

Fetch an array of conversations. You can only retrieve conversations with users who exist within the current access token's bubble.

<h3 id="getconversationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "user_a": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "user_b": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ]
}
```

<h3 id="getconversationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-conversations-ID](#schemaendpoint-get-conversations-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## get/conversations/{ID}/messages

> Code samples

```bash
curl https://example.com/conversations/1/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{ID}/messages`

Retrieve the last {limit} messages in the conversation, provided the conversations exist within the current access token's bubble. If a timeout is 0 or greater, the batch is sorted oldest first. Otherwise, if timeout is a negative number, the transcript is paginated and sorted newest first. Specify a timeout for long polling (which delays the server sending back results for up to n seconds or until results are available, whichever comes first), or default to 0 for immediate results. Optionally record your status as online along with sharing the latest message you've seen with the other conversation participant. Optionally specify a gt_message_id to retrieve only messages with an ID greater than that specified (such as greater than the latest message ID received in the last poll). Optionally only poll for messages authored by the other person in the conversation, and echo messages authored by you when sending, for a perceived increase in performance. Optionally only retrieve messages that were posted from within the current access token's bubble. Optionally specify a date formatted as YYYY-MM-DD to retrieve a transcript of messages from a single day. When record_seen is set to true, the new message count for the conversation is reset to zero.

<h3 id="getconversationsidmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|gt_message_id|query|integer(int32)|false|none|
|exclude_self|query|boolean|false|none|
|date|query|string|false|none|
|bubbled|query|boolean|false|none|
|record_seen|query|boolean|false|none|
|timeout|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "conversation": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getconversationsidmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-conversations-ID-messages](#schemaendpoint-get-conversations-id-messages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## post/conversations/{ID}/messages

> Code samples

```bash
curl https://example.com/conversations/1/messages \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'bubbled=false' \
  -F 'metadata_0_key=string' \
  -F 'metadata_0_privacy=Public' \
  -F 'metadata_0_values[]=["string"]' \
  -F 'metadata_1_key=string' \
  -F 'metadata_1_privacy=Public' \
  -F 'metadata_1_values[]=["string"]' \
  -F 'metadata_2_key=string' \
  -F 'metadata_2_privacy=Public' \
  -F 'metadata_2_values[]=["string"]' \
  -F 'text_emoticons=false' \
  -F 'text_raw=string'
```

`POST /conversations/{ID}/messages`

Post a message to a conversation that is with a user who exists within the current access token's bubble. Optionally specify whether emoticons should be parsed into smiley images. Optionally specify whether the message should be bubbled within the app. Additionally, optionally attach a single metadata key/value pair to the message upon submission.

> Body parameter

```yaml
bubbled: false
metadata_0_key: string
metadata_0_privacy: Public
"metadata_0_values[]":
  - string
metadata_1_key: string
metadata_1_privacy: Public
"metadata_1_values[]":
  - string
metadata_2_key: string
metadata_2_privacy: Public
"metadata_2_values[]":
  - string
text_emoticons: false
text_raw: string
```

<h3 id="postconversationsidmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|true|none|
|» bubbled|body|boolean|false|none|
|» metadata_0_key|body|string|false|none|
|» metadata_0_privacy|body|string|false|none|
|» metadata_0_values[]|body|[string]|false|none|
|» metadata_1_key|body|string|false|none|
|» metadata_1_privacy|body|string|false|none|
|» metadata_1_values[]|body|[string]|false|none|
|» metadata_2_key|body|string|false|none|
|» metadata_2_privacy|body|string|false|none|
|» metadata_2_values[]|body|[string]|false|none|
|» text_emoticons|body|boolean|false|none|
|» text_raw|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» metadata_0_privacy|Public|
|» metadata_0_privacy|Private|
|» metadata_0_privacy|Bubbled|
|» metadata_0_privacy|User|
|» metadata_1_privacy|Public|
|» metadata_1_privacy|Private|
|» metadata_1_privacy|Bubbled|
|» metadata_1_privacy|User|
|» metadata_2_privacy|Public|
|» metadata_2_privacy|Private|
|» metadata_2_privacy|Bubbled|
|» metadata_2_privacy|User|

> Example responses

> 200 Response

```json
{
  "data": {
    "author": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "conversation": {},
    "id": 0,
    "last_seen": {
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    },
    "text": {
      "parsed": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "success": true
}
```

<h3 id="postconversationsidmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-conversations-ID-messages](#schemaendpoint-post-conversations-id-messages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read conversations_write ), implicit_flow ( Scopes: conversations_read conversations_write )
</aside>

## post/conversations/{ID}/schedules

> Code samples

```bash
curl https://example.com/conversations/1/schedules \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'date=string' \
  -F 'limit=50' \
  -F 'offset=0' \
  -F 'roll_up=false' \
  -F 'sort=desc'
```

`POST /conversations/{ID}/schedules`

Paginated report of information about messages contributed by conversation and date. Only conversations that exist within the current access token's bubble are considered in the calculations. Optionally roll up all conversations to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages within the conversation(s).

> Body parameter

```yaml
date: string
limit: 50
offset: 0
roll_up: false
sort: desc
```

<h3 id="postconversationsidschedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|
|body|body|object|false|none|
|» date|body|string|false|none|
|» limit|body|integer(int32)|false|none|
|» offset|body|integer(int32)|false|none|
|» roll_up|body|boolean|false|none|
|» sort|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sort|asc|
|» sort|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_count": 0,
      "conversation_count": 0,
      "conversation_id": 0,
      "date": "1970-01-01",
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "last_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "message_count": 0,
      "my_message_count": 0,
      "navigation": {
        "earliest_date": "1970-01-01",
        "next_date": "1970-01-01",
        "previous_date": "1970-01-01"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="postconversationsidschedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-conversations-ID-schedules](#schemaendpoint-post-conversations-id-schedules)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## post/conversations/{ID}/searches

> Code samples

```bash
curl https://example.com/conversations/1/searches \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'date=string' \
  -F 'gt_message_id=0' \
  -F 'limit=50' \
  -F 'offset=0' \
  -F 'query=string'
```

`POST /conversations/{ID}/searches`

Fetch messages authored from within specified conversations that match a query string passed in as a search parameter along with their relevancy score.

> Body parameter

```yaml
date: string
gt_message_id: 0
limit: 50
offset: 0
query: string
```

<h3 id="postconversationsidsearches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|
|body|body|object|true|none|
|» date|body|string|false|none|
|» gt_message_id|body|integer(int32)|false|none|
|» limit|body|integer(int32)|false|none|
|» offset|body|integer(int32)|false|none|
|» query|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "relevance": {
        "score": 0
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="postconversationsidsearches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-conversations-ID-searches](#schemaendpoint-post-conversations-id-searches)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## get/conversations/{ID}/statuses

> Code samples

```bash
curl https://example.com/conversations/1/statuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{ID}/statuses`

Status information about your current relationship with one or more conversations you participating in, provided the conversations exist within the current access token's bubble.

<h3 id="getconversationsidstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived_status": true,
      "bubbled": {
        "latest_message": {
          "author": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          },
          "conversation": {},
          "id": 0,
          "last_seen": {
            "timestamp": "1970-01-01T00:00:00Z",
            "user": {
              "business_card": {
                "company_name": "string",
                "company_size": "string",
                "headline": "string",
                "industry": "string",
                "interest_tags": [
                  "string"
                ],
                "job_position": "string",
                "summary": "string",
                "website": {
                  "thumbshot_uri": "http://example.com",
                  "url": "http://example.com"
                }
              },
              "community_persona": {
                "id": 0,
                "identity": {
                  "avatar_uri": "http://example.com",
                  "badge": "string",
                  "profile_url": "http://example.com",
                  "username": "string"
                },
                "location": {
                  "free_form": "string"
                },
                "personal": {
                  "about_me": "string",
                  "birthday": "string",
                  "interests": "string",
                  "pc_specs": "string"
                },
                "signature": {
                  "parsed": "string",
                  "raw": "string"
                },
                "stats": {
                  "answered_count": 0,
                  "endorsements_count": 0,
                  "posts_count": 0,
                  "reputation_count": 0
                }
              },
              "id": 0,
              "profile": {
                "first_name": "string",
                "last_name": "string"
              },
              "usage": {
                "available_status": true,
                "joined_timestamp": "1970-01-01T00:00:00Z",
                "last_activity_timestamp": "1970-01-01T00:00:00Z",
                "online_status": true
              }
            }
          },
          "text": {
            "parsed": "string"
          },
          "timestamp": "1970-01-01T00:00:00Z"
        }
      },
      "conversation": {
        "first_message": {
          "author": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          },
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "user_a": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "user_b": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "earliest_unseen_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "new_message_count": 0
    }
  ]
}
```

<h3 id="getconversationsidstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-conversations-ID-statuses](#schemaendpoint-get-conversations-id-statuses)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## patch/conversations/{ID}/statuses

> Code samples

```bash
curl https://example.com/conversations/1/statuses \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'archived_status=true'
```

`PATCH /conversations/{ID}/statuses`

Archive or unarchive a conversation that is with a user who exists within the same bubble.

> Body parameter

```yaml
archived_status: true
```

<h3 id="patchconversationsidstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|true|none|
|» archived_status|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "archived_status": true,
    "conversation": {
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "user_a": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "user_b": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  },
  "success": true
}
```

<h3 id="patchconversationsidstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-patch-conversations-ID-statuses](#schemaendpoint-patch-conversations-id-statuses)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read conversations_write ), implicit_flow ( Scopes: conversations_read conversations_write )
</aside>

<h1 id="daniweb-connect-api-groups">groups</h1>

Operations involving Groups

## get/groups

> Code samples

```bash
curl https://example.com/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups`

Fetch an array of all groups that were created by users existing within the current access token's bubble. The groups must be either Public or you must be a member of them. Unlisted and Private groups that you are not a member of are not listed.

<h3 id="getgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "first_message": {
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "member_count": 0,
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "properties": {
        "description": "string",
        "name": "string",
        "privacy": "string",
        "slug": "string"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-groups](#schemaendpoint-get-groups)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## post/groups

> Code samples

```bash
curl https://example.com/groups \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'description=string' \
  -F 'name=string' \
  -F 'passphrase=string' \
  -F 'privacy=Public' \
  -F 'slug=string'
```

`POST /groups`

Create a new group for other members to join. Any user who is using an access token whose bubble you exist in can join your group provided it is not a private group. Private groups can only be joined by members who know its passphrase. Unlisted groups can be joined by anybody as long as they know the Group ID, but they are not referenced anywhere to non-members. Public groups can be joined by anybody, are discoverable, and anyone can see the public groups a user is a member of, provided the group owner exists in their access token's bubble. Groups each have their own discussions, transcripts, schedules, and ability to list and search their members.

> Body parameter

```yaml
description: string
name: string
passphrase: string
privacy: Public
slug: string
```

<h3 id="postgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» description|body|string|true|none|
|» name|body|string|true|none|
|» passphrase|body|string|false|none|
|» privacy|body|string|true|none|
|» slug|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|Public|
|» privacy|Unlisted|
|» privacy|Private|

> Example responses

> 200 Response

```json
{
  "data": {
    "first_message": {
      "timestamp": "1970-01-01T00:00:00Z"
    },
    "id": 0,
    "latest_message": {},
    "member_count": 0,
    "owner": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "properties": {
      "description": "string",
      "name": "string",
      "privacy": "string",
      "slug": "string"
    }
  },
  "success": true
}
```

<h3 id="postgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-groups](#schemaendpoint-post-groups)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read groups_write ), implicit_flow ( Scopes: groups_read groups_write )
</aside>

## post/groups/messages/metadata/filters

> Code samples

```bash
curl https://example.com/groups/messages/metadata/filters \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'limit=50' \
  -F 'metadata_0_key=string' \
  -F 'metadata_0_values[]=["string"]' \
  -F 'metadata_1_key=string' \
  -F 'metadata_1_values[]=["string"]' \
  -F 'metadata_2_key=string' \
  -F 'metadata_2_values[]=["string"]' \
  -F 'offset=0'
```

`POST /groups/messages/metadata/filters`

Paginated listing of messages filtered by arbitrary metadata criteria. Messages must match on all key/value pairs passed in. Messages may only match on one value of an array passed in. However, messages are sorted based on how many distinct values they match on (most matches first).

> Body parameter

```yaml
limit: 50
metadata_0_key: string
"metadata_0_values[]":
  - string
metadata_1_key: string
"metadata_1_values[]":
  - string
metadata_2_key: string
"metadata_2_values[]":
  - string
offset: 0
```

<h3 id="postgroupsmessagesmetadatafilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» limit|body|integer(int32)|false|none|
|» metadata_0_key|body|string|false|none|
|» metadata_0_values[]|body|[string]|false|none|
|» metadata_1_key|body|string|false|none|
|» metadata_1_values[]|body|[string]|false|none|
|» metadata_2_key|body|string|false|none|
|» metadata_2_values[]|body|[string]|false|none|
|» offset|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "matched_metadata": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="postgroupsmessagesmetadatafilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-groups-messages-metadata-filters](#schemaendpoint-post-groups-messages-metadata-filters)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/groups/messages/{ID}

> Code samples

```bash
curl https://example.com/groups/messages/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/messages/{ID}`

Fetch an array of group messages. You can only retrieve messages authored by you or by users existing within the current access token's bubble.

<h3 id="getgroupsmessagesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "group": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "moderated": {
        "deleted_status": true
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="getgroupsmessagesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-groups-messages-ID](#schemaendpoint-get-groups-messages-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## delete/groups/messages/{ID}

> Code samples

```bash
curl https://example.com/groups/messages/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /groups/messages/{ID}`

Delete an array of group messages. You must be the owner or moderator of the group.

<h3 id="deletegroupsmessagesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "group": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "moderated": {
        "deleted_status": true
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "status": true
}
```

<h3 id="deletegroupsmessagesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-delete-groups-messages-ID](#schemaendpoint-delete-groups-messages-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read groups_write ), implicit_flow ( Scopes: groups_read groups_write )
</aside>

## get/groups/messages/{ID}/metadata

> Code samples

```bash
curl https://example.com/groups/messages/1/metadata \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/messages/{ID}/metadata`

Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who created the group exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble.

<h3 id="getgroupsmessagesidmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "app": {
        "about": {
          "description": "string",
          "name": "string",
          "website": {
            "thumbshot": "string",
            "url": "http://example.com"
          }
        },
        "id": 0,
        "legal": {
          "privacy_url": "http://example.com",
          "tos_url": "http://example.com"
        }
      },
      "content": {
        "key": "string",
        "value": "string"
      },
      "id": 0,
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "settings": {
        "privacy": "string"
      },
      "status": {
        "last_updated_timestamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getgroupsmessagesidmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-groups-messages-ID-metadata](#schemaendpoint-get-groups-messages-id-metadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## post/groups/messages/{ID}/metadata

> Code samples

```bash
curl https://example.com/groups/messages/1/metadata \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'metadata_0_key=string' \
  -F 'metadata_0_privacy=Public' \
  -F 'metadata_0_values[]=["string"]' \
  -F 'metadata_1_key=string' \
  -F 'metadata_1_privacy=Public' \
  -F 'metadata_1_values[]=["string"]' \
  -F 'metadata_2_key=string' \
  -F 'metadata_2_privacy=Public' \
  -F 'metadata_2_values[]=["string"]'
```

`POST /groups/messages/{ID}/metadata`

Attach one-to-many key/value pairs of metadata to a group message, so long as the user who authored the message exists within the current access token's bubble and you are a member of their group. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by anyone using an access token which grants them access to the user who authored the message and who is also a member of the group the message belongs to; Bubbled metadata by anyone using an access token existing within the current bubble who is also a member of the group the message belongs to; User metadata by you, so long as you are using an access token which grants you access to the user who authored the message and you remain a member of the group; Private metadata by you, so long as you are using an access token existing within the current bubble and you remain a member of the group.

> Body parameter

```yaml
metadata_0_key: string
metadata_0_privacy: Public
"metadata_0_values[]":
  - string
metadata_1_key: string
metadata_1_privacy: Public
"metadata_1_values[]":
  - string
metadata_2_key: string
metadata_2_privacy: Public
"metadata_2_values[]":
  - string
```

<h3 id="postgroupsmessagesidmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|false|none|
|» metadata_0_key|body|string|false|none|
|» metadata_0_privacy|body|string|false|none|
|» metadata_0_values[]|body|[string]|false|none|
|» metadata_1_key|body|string|false|none|
|» metadata_1_privacy|body|string|false|none|
|» metadata_1_values[]|body|[string]|false|none|
|» metadata_2_key|body|string|false|none|
|» metadata_2_privacy|body|string|false|none|
|» metadata_2_values[]|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» metadata_0_privacy|Public|
|» metadata_0_privacy|Private|
|» metadata_0_privacy|Bubbled|
|» metadata_0_privacy|User|
|» metadata_1_privacy|Public|
|» metadata_1_privacy|Private|
|» metadata_1_privacy|Bubbled|
|» metadata_1_privacy|User|
|» metadata_2_privacy|Public|
|» metadata_2_privacy|Private|
|» metadata_2_privacy|Bubbled|
|» metadata_2_privacy|User|

> Example responses

> 200 Response

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "success": true
}
```

<h3 id="postgroupsmessagesidmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-groups-messages-ID-metadata](#schemaendpoint-post-groups-messages-id-metadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## get/groups/messages/{ID}/metadata/collections

> Code samples

```bash
curl https://example.com/groups/messages/1/metadata/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/messages/{ID}/metadata/collections`

Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who created the group exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. Metadata will be grouped by key.

<h3 id="getgroupsmessagesidmetadatacollections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="getgroupsmessagesidmetadatacollections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-groups-messages-ID-metadata-collections](#schemaendpoint-get-groups-messages-id-metadata-collections)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## post/groups/schedules

> Code samples

```bash
curl https://example.com/groups/schedules \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'date=string' \
  -F 'limit=50' \
  -F 'offset=0' \
  -F 'roll_up=false' \
  -F 'sort=desc'
```

`POST /groups/schedules`

Paginated report of information about messages contributed by group and date. Only groups you're a member of and group messages authored by users the current access token has access to are considered in the calculations. Optionally roll up all groups to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages.

> Body parameter

```yaml
date: string
limit: 50
offset: 0
roll_up: false
sort: desc
```

<h3 id="postgroupsschedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» date|body|string|false|none|
|» limit|body|integer(int32)|false|none|
|» offset|body|integer(int32)|false|none|
|» roll_up|body|boolean|false|none|
|» sort|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sort|asc|
|» sort|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_count": 0,
      "date": "1970-01-01",
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "group_count": 0,
      "group_id": 0,
      "last_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "message_count": 0,
      "my_message_count": 0,
      "navigation": {
        "earliest_date": "1970-01-01",
        "next_date": "1970-01-01",
        "previous_date": "1970-01-01"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="postgroupsschedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-groups-schedules](#schemaendpoint-post-groups-schedules)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## get/groups/statuses

> Code samples

```bash
curl https://example.com/groups/statuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/statuses`

Retrieve groups that were created by users within the current access token's bubble, along with your current relationship with the groups. The groups must be either Public or you must be a member of them. Unlisted and Private groups that you are not a member of are not listed. Optionally only retrieve groups that you are a member of.

<h3 id="getgroupsstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|existing_membership|query|boolean|false|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "earliest_unseen_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "group": {
        "first_message": {
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "member_count": 0,
        "owner": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "properties": {
          "description": "string",
          "name": "string",
          "privacy": "string",
          "slug": "string"
        }
      },
      "new_message_count": 0
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getgroupsstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-groups-statuses](#schemaendpoint-get-groups-statuses)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## get/groups/{ID}

> Code samples

```bash
curl https://example.com/groups/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{ID}`

Fetch an array of groups. You can only retrieve groups created by users existing within the current access token's bubble.

<h3 id="getgroupsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "first_message": {
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "member_count": 0,
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "properties": {
        "description": "string",
        "name": "string",
        "privacy": "string",
        "slug": "string"
      }
    }
  ]
}
```

<h3 id="getgroupsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-groups-ID](#schemaendpoint-get-groups-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## patch/groups/{ID}

> Code samples

```bash
curl https://example.com/groups/1 \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'description=string' \
  -F 'name=string' \
  -F 'passphrase=string' \
  -F 'privacy=Public' \
  -F 'slug=string'
```

`PATCH /groups/{ID}`

Modify a group you previously created.

> Body parameter

```yaml
description: string
name: string
passphrase: string
privacy: Public
slug: string
```

<h3 id="patchgroupsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|false|none|
|» description|body|string|false|none|
|» name|body|string|false|none|
|» passphrase|body|string|false|none|
|» privacy|body|string|false|none|
|» slug|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|Public|
|» privacy|Unlisted|
|» privacy|Private|

> Example responses

> 200 Response

```json
{
  "data": {
    "first_message": {
      "timestamp": "1970-01-01T00:00:00Z"
    },
    "id": 0,
    "latest_message": {},
    "member_count": 0,
    "owner": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "properties": {
      "description": "string",
      "name": "string",
      "privacy": "string",
      "slug": "string"
    }
  },
  "success": true
}
```

<h3 id="patchgroupsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-patch-groups-ID](#schemaendpoint-patch-groups-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read groups_write ), implicit_flow ( Scopes: groups_read groups_write )
</aside>

## get/groups/{ID}/memberships

> Code samples

```bash
curl https://example.com/groups/1/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{ID}/memberships`

Fetch an array of users who are members of specific groups that you are also a member of. You can only retrieve users existing within the current access token's bubble.

<h3 id="getgroupsidmemberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|
|moderators_only|query|boolean|false|none|
|offset|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "group": {
        "first_message": {
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "member_count": 0,
        "owner": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "properties": {
          "description": "string",
          "name": "string",
          "privacy": "string",
          "slug": "string"
        }
      },
      "member": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "privileges": {
        "moderator": true,
        "owner": true
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getgroupsidmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-groups-ID-memberships](#schemaendpoint-get-groups-id-memberships)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## post/groups/{ID}/memberships

> Code samples

```bash
curl https://example.com/groups/1/memberships \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'passphrase=string' \
  -F 'user_id=0'
```

`POST /groups/{ID}/memberships`

Join a group that was created by a user who exists within the current access token's bubble, or join other users into a group that you created. If you are the group owner, you can pass in a user_id to create membership records for a user you are in a conversation with. The user must exist within the current access token's bubble. If the group is private, you must successfully pass in its passphrase in order to join. You can obtain the passphrase from the group's owner.

> Body parameter

```yaml
passphrase: string
user_id: 0
```

<h3 id="postgroupsidmemberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|false|none|
|» passphrase|body|string|false|none|
|» user_id|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "group": {
      "first_message": {
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "member_count": 0,
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "properties": {
        "description": "string",
        "name": "string",
        "privacy": "string",
        "slug": "string"
      }
    },
    "member": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "success": true
}
```

<h3 id="postgroupsidmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-groups-ID-memberships](#schemaendpoint-post-groups-id-memberships)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read groups_write ), implicit_flow ( Scopes: groups_read groups_write )
</aside>

## delete/groups/{ID}/memberships

> Code samples

```bash
curl https://example.com/groups/1/memberships \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /groups/{ID}/memberships`

Leave a group that you are a member of and that was created by a user who exists within the current access token's bubble.

<h3 id="deletegroupsidmemberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deletegroupsidmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-delete-groups-ID-memberships](#schemaendpoint-delete-groups-id-memberships)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read groups_write ), implicit_flow ( Scopes: groups_read groups_write )
</aside>

## patch/groups/{ID}/memberships

> Code samples

```bash
curl https://example.com/groups/1/memberships \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'moderator=false' \
  -F 'user_id=0'
```

`PATCH /groups/{ID}/memberships`

Promote or demote a member's privileges within a group that you created. The user must exist within the current access token's bubble and be an existing member of the group.

> Body parameter

```yaml
moderator: false
user_id: 0
```

<h3 id="patchgroupsidmemberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|true|none|
|» moderator|body|boolean|false|none|
|» user_id|body|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "group": {
        "first_message": {
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "member_count": 0,
        "owner": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "properties": {
          "description": "string",
          "name": "string",
          "privacy": "string",
          "slug": "string"
        }
      },
      "member": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "privileges": {
        "moderator": true
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  },
  "success": true
}
```

<h3 id="patchgroupsidmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-patch-groups-ID-memberships](#schemaendpoint-patch-groups-id-memberships)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## get/groups/{ID}/messages

> Code samples

```bash
curl https://example.com/groups/1/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{ID}/messages`

Retrieve the last {limit} messages in the group, for messages authored by users within the current access token's bubble. If a timeout is 0 or greater, the batch is sorted oldest first. Otherwise, if timeout is a negative number, the transcript is paginated and sorted newest first. Specify a timeout for long polling (which delays the server sending back results for up to n seconds or until results are available, whichever comes first), or default to 0 for immediate results. Optionally record your status as online along with sharing the latest message you've seen with other group members. Optionally specify a gt_message_id to retrieve only messages with an ID greater than that specified (such as greater than the latest message ID received in the last poll). Optionally only poll for messages authored by other members of the group, and echo messages authored by you when sending, for a perceived increase in performance. Optionally only retrieve messages that were posted from within the current access token's bubble. Optionally specify a date formatted as YYYY-MM-DD to retrieve a transcript of messages from a single day. When record_seen is set to true, the new message count for the group is reset to zero.

<h3 id="getgroupsidmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|gt_message_id|query|integer(int32)|false|none|
|exclude_self|query|boolean|false|none|
|include_deleted|query|boolean|false|none|
|date|query|string|false|none|
|bubbled|query|boolean|false|none|
|record_seen|query|boolean|false|none|
|timeout|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "group": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "moderated": {
        "deleted_status": true
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getgroupsidmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-groups-ID-messages](#schemaendpoint-get-groups-id-messages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## post/groups/{ID}/messages

> Code samples

```bash
curl https://example.com/groups/1/messages \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'metadata_0_key=string' \
  -F 'metadata_0_privacy=Public' \
  -F 'metadata_0_values[]=["string"]' \
  -F 'metadata_1_key=string' \
  -F 'metadata_1_privacy=Public' \
  -F 'metadata_1_values[]=["string"]' \
  -F 'metadata_2_key=string' \
  -F 'metadata_2_privacy=Public' \
  -F 'metadata_2_values[]=["string"]' \
  -F 'text_emoticons=false' \
  -F 'text_raw=string'
```

`POST /groups/{ID}/messages`

Post a message to a group that you are a member of and that was created by a user who exists within the current access token's bubble. Optionally specify whether emoticons should be parsed into smiley images. Additionally, optionally attach a single metadata key/value pair to the group message upon submission.

> Body parameter

```yaml
metadata_0_key: string
metadata_0_privacy: Public
"metadata_0_values[]":
  - string
metadata_1_key: string
metadata_1_privacy: Public
"metadata_1_values[]":
  - string
metadata_2_key: string
metadata_2_privacy: Public
"metadata_2_values[]":
  - string
text_emoticons: false
text_raw: string
```

<h3 id="postgroupsidmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|true|none|
|» metadata_0_key|body|string|false|none|
|» metadata_0_privacy|body|string|false|none|
|» metadata_0_values[]|body|[string]|false|none|
|» metadata_1_key|body|string|false|none|
|» metadata_1_privacy|body|string|false|none|
|» metadata_1_values[]|body|[string]|false|none|
|» metadata_2_key|body|string|false|none|
|» metadata_2_privacy|body|string|false|none|
|» metadata_2_values[]|body|[string]|false|none|
|» text_emoticons|body|boolean|false|none|
|» text_raw|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» metadata_0_privacy|Public|
|» metadata_0_privacy|Private|
|» metadata_0_privacy|Bubbled|
|» metadata_0_privacy|User|
|» metadata_1_privacy|Public|
|» metadata_1_privacy|Private|
|» metadata_1_privacy|Bubbled|
|» metadata_1_privacy|User|
|» metadata_2_privacy|Public|
|» metadata_2_privacy|Private|
|» metadata_2_privacy|Bubbled|
|» metadata_2_privacy|User|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "group": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "moderated": {
        "deleted_status": true
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "success": true
}
```

<h3 id="postgroupsidmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-groups-ID-messages](#schemaendpoint-post-groups-id-messages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read groups_write ), implicit_flow ( Scopes: groups_read groups_write )
</aside>

## post/groups/{ID}/schedules

> Code samples

```bash
curl https://example.com/groups/1/schedules \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'date=string' \
  -F 'limit=50' \
  -F 'offset=0' \
  -F 'roll_up=false' \
  -F 'sort=desc'
```

`POST /groups/{ID}/schedules`

Paginated report of information about group messages contributed by conversation and date. Only groups you're a member of and group messages authored by users existing within the current access token's bubble are considered in the calculations. Optionally roll up all groups to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages within the group discussion(s).

> Body parameter

```yaml
date: string
limit: 50
offset: 0
roll_up: false
sort: desc
```

<h3 id="postgroupsidschedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|
|body|body|object|false|none|
|» date|body|string|false|none|
|» limit|body|integer(int32)|false|none|
|» offset|body|integer(int32)|false|none|
|» roll_up|body|boolean|false|none|
|» sort|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sort|asc|
|» sort|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_count": 0,
      "date": "1970-01-01",
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "group_count": 0,
      "group_id": 0,
      "last_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "message_count": 0,
      "my_message_count": 0,
      "navigation": {
        "earliest_date": "1970-01-01",
        "next_date": "1970-01-01",
        "previous_date": "1970-01-01"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="postgroupsidschedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-groups-ID-schedules](#schemaendpoint-post-groups-id-schedules)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## get/groups/{ID}/statuses

> Code samples

```bash
curl https://example.com/groups/1/statuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{ID}/statuses`

Status information about your current relationship with one or more groups you are a member of, provided the users who created the groups exist within the current access token's bubble.

<h3 id="getgroupsidstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "earliest_unseen_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "group": {
        "first_message": {
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "member_count": 0,
        "owner": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "properties": {
          "description": "string",
          "name": "string",
          "privacy": "string",
          "slug": "string"
        }
      },
      "membership_status": true,
      "new_message_count": 0
    }
  ]
}
```

<h3 id="getgroupsidstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-groups-ID-statuses](#schemaendpoint-get-groups-id-statuses)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

<h1 id="daniweb-connect-api-industries">industries</h1>

Operations involving Industries

## get/industries

> Code samples

```bash
curl https://example.com/industries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /industries`

> Example responses

> 200 Response

```json
{
  "data": [
    "string"
  ]
}
```

<h3 id="getindustries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-industries](#schemaendpoint-get-industries)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

<h1 id="daniweb-connect-api-markdown">markdown</h1>

Operations involving Markdown

## post/markdown

> Code samples

```bash
curl https://example.com/markdown \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'text_emoticons=false' \
  -F 'text_raw=string'
```

`POST /markdown`

> Body parameter

```yaml
text_emoticons: false
text_raw: string
```

<h3 id="postmarkdown-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» text_emoticons|body|boolean|false|none|
|» text_raw|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "parsed": "string",
    "raw": "string"
  }
}
```

<h3 id="postmarkdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-markdown](#schemaendpoint-post-markdown)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/markdown/emoticons

> Code samples

```bash
curl https://example.com/markdown/emoticons \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /markdown/emoticons`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "alt": "string",
      "emoticon": "string",
      "image": "string"
    }
  ]
}
```

<h3 id="getmarkdownemoticons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-markdown-emoticons](#schemaendpoint-get-markdown-emoticons)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

<h1 id="daniweb-connect-api-messages">messages</h1>

Operations involving Messages

## post/messages/metadata/filters

> Code samples

```bash
curl https://example.com/messages/metadata/filters \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'limit=50' \
  -F 'metadata_0_key=string' \
  -F 'metadata_0_values[]=["string"]' \
  -F 'metadata_1_key=string' \
  -F 'metadata_1_values[]=["string"]' \
  -F 'metadata_2_key=string' \
  -F 'metadata_2_values[]=["string"]' \
  -F 'offset=0'
```

`POST /messages/metadata/filters`

Paginated listing of messages filtered by arbitrary metadata criteria. Messages must match on all key/value pairs passed in. Messages may only match on one value of an array passed in. However, messages are sorted based on how many distinct values they match on (most matches first).

> Body parameter

```yaml
limit: 50
metadata_0_key: string
"metadata_0_values[]":
  - string
metadata_1_key: string
"metadata_1_values[]":
  - string
metadata_2_key: string
"metadata_2_values[]":
  - string
offset: 0
```

<h3 id="postmessagesmetadatafilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» limit|body|integer(int32)|false|none|
|» metadata_0_key|body|string|false|none|
|» metadata_0_values[]|body|[string]|false|none|
|» metadata_1_key|body|string|false|none|
|» metadata_1_values[]|body|[string]|false|none|
|» metadata_2_key|body|string|false|none|
|» metadata_2_values[]|body|[string]|false|none|
|» offset|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "matched_metadata": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="postmessagesmetadatafilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-messages-metadata-filters](#schemaendpoint-post-messages-metadata-filters)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/messages/{ID}

> Code samples

```bash
curl https://example.com/messages/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /messages/{ID}`

Fetch an array of messages. You can only retrieve messages authored by you or by users who exist within the current access token's bubble.

<h3 id="getmessagesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "conversation": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="getmessagesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-messages-ID](#schemaendpoint-get-messages-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## get/messages/{ID}/metadata

> Code samples

```bash
curl https://example.com/messages/1/metadata \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /messages/{ID}/metadata`

Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who authored the message exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble.

<h3 id="getmessagesidmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "app": {
        "about": {
          "description": "string",
          "name": "string",
          "website": {
            "thumbshot": "string",
            "url": "http://example.com"
          }
        },
        "id": 0,
        "legal": {
          "privacy_url": "http://example.com",
          "tos_url": "http://example.com"
        }
      },
      "content": {
        "key": "string",
        "value": "string"
      },
      "id": 0,
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "settings": {
        "privacy": "string"
      },
      "status": {
        "last_updated_timestamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getmessagesidmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-messages-ID-metadata](#schemaendpoint-get-messages-id-metadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## post/messages/{ID}/metadata

> Code samples

```bash
curl https://example.com/messages/1/metadata \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'metadata_0_key=string' \
  -F 'metadata_0_privacy=Public' \
  -F 'metadata_0_values[]=["string"]' \
  -F 'metadata_1_key=string' \
  -F 'metadata_1_privacy=Public' \
  -F 'metadata_1_values[]=["string"]' \
  -F 'metadata_2_key=string' \
  -F 'metadata_2_privacy=Public' \
  -F 'metadata_2_values[]=["string"]'
```

`POST /messages/{ID}/metadata`

Attach one-to-many key/value pairs of metadata to a message, so long as the user who authored the message exists within the current access token's bubble. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by you or the other user in the message's conversation, using an access token which grants you access to the user who authored the message, if it wasn't you; Bubbled metadata by you or the other user in the message's conversation, using an access token existing within the current bubble; User metadata by you, so long as you are using an access token which grants you access to the user who authored the message, if it wasn't you; Private metadata by you, so long as you are using an access token existing within the current bubble.

> Body parameter

```yaml
metadata_0_key: string
metadata_0_privacy: Public
"metadata_0_values[]":
  - string
metadata_1_key: string
metadata_1_privacy: Public
"metadata_1_values[]":
  - string
metadata_2_key: string
metadata_2_privacy: Public
"metadata_2_values[]":
  - string
```

<h3 id="postmessagesidmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|false|none|
|» metadata_0_key|body|string|false|none|
|» metadata_0_privacy|body|string|false|none|
|» metadata_0_values[]|body|[string]|false|none|
|» metadata_1_key|body|string|false|none|
|» metadata_1_privacy|body|string|false|none|
|» metadata_1_values[]|body|[string]|false|none|
|» metadata_2_key|body|string|false|none|
|» metadata_2_privacy|body|string|false|none|
|» metadata_2_values[]|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» metadata_0_privacy|Public|
|» metadata_0_privacy|Private|
|» metadata_0_privacy|Bubbled|
|» metadata_0_privacy|User|
|» metadata_1_privacy|Public|
|» metadata_1_privacy|Private|
|» metadata_1_privacy|Bubbled|
|» metadata_1_privacy|User|
|» metadata_2_privacy|Public|
|» metadata_2_privacy|Private|
|» metadata_2_privacy|Bubbled|
|» metadata_2_privacy|User|

> Example responses

> 200 Response

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "success": true
}
```

<h3 id="postmessagesidmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-messages-ID-metadata](#schemaendpoint-post-messages-id-metadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

## get/messages/{ID}/metadata/collections

> Code samples

```bash
curl https://example.com/messages/1/metadata/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /messages/{ID}/metadata/collections`

Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who authored the message exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. Metadata will be grouped by key.

<h3 id="getmessagesidmetadatacollections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="getmessagesidmetadatacollections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-messages-ID-metadata-collections](#schemaendpoint-get-messages-id-metadata-collections)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: conversations_read ), implicit_flow ( Scopes: conversations_read )
</aside>

<h1 id="daniweb-connect-api-users">users</h1>

Operations involving Users

## get/users

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users`

Fetch an array of users that you've been matched with, connected with, skipped, or muted. You can only retrieve users existing within the current access token's bubble. This report may be limited to the last ~500-1000 users you've communicated with within the access token's bubble. Matches are always ordered by synergy, and the order_by parameter is ignored. You can only retrieve bubbled users when retrieving matches, and the bubbled parameter is ignored otherwise. Your 100 best algorithmic matches are based on: Complementary data submitted to Profiles, CVs, and Metadata; Complementary data acquired from third-parties; Location information; Many behavioral data points, such as how responsive users are to connections; Degrees of separation (mutual connections); etc. You may connect with 3 of these algorithmic matches per day for free. However, new members are allowed a grace period of additional daily matches. Each time you choose to meet or mute one of your algorithmic matches, a new match is introduced.

<h3 id="getusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|none|
|order_by|query|string|false|none|
|bubbled|query|boolean|false|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|connections|
|filter|matches|
|filter|skipped|
|filter|muted|
|order_by|id|
|order_by|last_activity|
|order_by|first_name|
|order_by|last_name|
|order_by|industry|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-users](#schemaendpoint-get-users)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read ), implicit_flow ( Scopes: profile_read )
</aside>

## post/users/invites

> Code samples

```bash
curl https://example.com/users/invites \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'csv=@/path/to/file' \
  -F 'emails[]=["string"]'
```

`POST /users/invites`

Invite users to into your current access token's bubble by having Dazah send out email invitations on your behalf. The invitation sends users to begin the OAuth flow for the current application (based on the settings specified in the application's profile), and therefore they will be redirected to the application upon signing up / logging in. Upon doing so, if they aren't already, they will automatically be connected with you as well. If your current access token does not escape the bubble, the invitation will specify you wish to connect within the application's name. If your current access token escapes the bubble, the invitation will specify you wish to connect within Dazah. Submit either a list of emails, or a LinkedIn or Outlook CSV file. You can retrieve your LinkedIn CSV file by exporting your LinkedIn Connections at https://www.linkedin.com/people/export-settings. You can retrieve your Outlook CSV file by using the Outlook Import and Export Wizard. This endpoint buckets the invitations into four categories: Existing invites are existing users who are already connected with you within the current bubble, and are therefore not emailed; Discovered invites are existing Dazah users who are available to be connected with within the current bubble, and are therefore not emailed. Now that they have been discovered, the users/{:ID}/meet API endpoint may be used to connect with them; Invalid invites are existing Dazah users who are unavailable to be connected with, because they have deactivated accounts, are muting you, etc., and are therefore not emailed; Emailed invites are queued to receive an invitation within approximately 1 hour. Note that if you are attempting to invite an existing Dazah user who does not currently exist within your current access token's bubble, they will fall within the Discovered bucket if your current access token escapes the bubble, but will be emailed an invitation to join the application if your current access token does not escape the bubble.

> Body parameter

```yaml
csv: string
"emails[]":
  - string
```

<h3 id="postusersinvites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» csv|body|string(binary)|false|none|
|» emails[]|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "discovered": {
      "users": [
        {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      ]
    },
    "emailed": {
      "emails": [
        "string"
      ]
    },
    "existing": {
      "conversations": [
        {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      ]
    },
    "invalid": {
      "emails": [
        "string"
      ]
    }
  },
  "success": true
}
```

<h3 id="postusersinvites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-users-invites](#schemaendpoint-post-users-invites)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read conversations_write ), implicit_flow ( Scopes: profile_read conversations_write )
</aside>

## post/users/metadata/filters

> Code samples

```bash
curl https://example.com/users/metadata/filters \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'limit=50' \
  -F 'metadata_0_key=string' \
  -F 'metadata_0_values[]=["string"]' \
  -F 'metadata_1_key=string' \
  -F 'metadata_1_values[]=["string"]' \
  -F 'metadata_2_key=string' \
  -F 'metadata_2_values[]=["string"]' \
  -F 'offset=0'
```

`POST /users/metadata/filters`

Paginated listing of users filtered by arbitrary metadata criteria. Users must match on all key/value pairs passed in. Users may only match on one value of an array passed in. However, users are sorted based on how many distinct values they match on (most matches first).

> Body parameter

```yaml
limit: 50
metadata_0_key: string
"metadata_0_values[]":
  - string
metadata_1_key: string
"metadata_1_values[]":
  - string
metadata_2_key: string
"metadata_2_values[]":
  - string
offset: 0
```

<h3 id="postusersmetadatafilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» limit|body|integer(int32)|false|none|
|» metadata_0_key|body|string|false|none|
|» metadata_0_values[]|body|[string]|false|none|
|» metadata_1_key|body|string|false|none|
|» metadata_1_values[]|body|[string]|false|none|
|» metadata_2_key|body|string|false|none|
|» metadata_2_values[]|body|[string]|false|none|
|» offset|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "matched_metadata": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="postusersmetadatafilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-users-metadata-filters](#schemaendpoint-post-users-metadata-filters)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/users/nearby

> Code samples

```bash
curl https://example.com/users/nearby \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/nearby`

Fetch an array of users that are geographically close to a set of coordinates. You can only retrieve users existing within the current access token's bubble.

<h3 id="getusersnearby-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|query|number(float)|false|none|
|longitude|query|number(float)|false|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "distance_away": {
        "miles": 0
      },
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getusersnearby-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-users-nearby](#schemaendpoint-get-users-nearby)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read ), implicit_flow ( Scopes: profile_read )
</aside>

## post/users/searches

> Code samples

```bash
curl https://example.com/users/searches \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'active_within_x_days=0' \
  -F 'audience_ids[]=[0]' \
  -F 'bubbled=false' \
  -F 'exclude_connections=false' \
  -F 'exclude_matches=false' \
  -F 'exclude_muted=false' \
  -F 'exclude_skipped=false' \
  -F 'geo_latitude=0' \
  -F 'geo_longitude=0' \
  -F 'geo_miles_away=0' \
  -F 'group_id=0' \
  -F 'limit=50' \
  -F 'location_city_query=string' \
  -F 'location_city_weight=0' \
  -F 'location_country_query=string' \
  -F 'location_country_weight=0' \
  -F 'location_region_query=string' \
  -F 'location_region_weight=0' \
  -F 'metadata_0_key=string' \
  -F 'metadata_0_query=string' \
  -F 'metadata_0_weight=0' \
  -F 'metadata_1_key=string' \
  -F 'metadata_1_query=string' \
  -F 'metadata_1_weight=0' \
  -F 'metadata_2_key=string' \
  -F 'metadata_2_query=string' \
  -F 'metadata_2_weight=0' \
  -F 'offset=0' \
  -F 'position_organization_query=string' \
  -F 'position_organization_weight=0' \
  -F 'position_role_query=string' \
  -F 'position_role_weight=0' \
  -F 'position_summary_query=string' \
  -F 'position_summary_weight=0' \
  -F 'profile_first_name_query=string' \
  -F 'profile_first_name_weight=0' \
  -F 'profile_goals_query=string' \
  -F 'profile_goals_weight=string' \
  -F 'profile_headline_query=string' \
  -F 'profile_headline_weight=0' \
  -F 'profile_industry_query=string' \
  -F 'profile_industry_weight=0' \
  -F 'profile_last_name_query=string' \
  -F 'profile_last_name_weight=0' \
  -F 'profile_pitch_query=string' \
  -F 'profile_pitch_weight=0'
```

`POST /users/searches`

Filter and perform a weighted search against user profile fields, CV fields, and metadata by specifying a string to search on for each individual field. By default, results are filtered such that all words in the string must exist, unless you seprate the words with OR. To perform a weighted search (as opposed to filtering), specify the weight (from 0-100) the search algorithm should assign to the field. You can optionally exclude users who you are already in or not in conversations with, exclude users who you previously skipped, or exclude users who you are muting. By doing so, you can effectively customize your own matching algorithm. You can specify geo coordinates to only find users a certain distance away from a specific location, or only find users within a certain distance from the OAuth'ed end-user's last known location. If your app utilizes multiple audience segments, you can specify which audiences you would like to search. You can also limit users to just those who have been recently active. You can also choose to only receive users originating from the current access token's bubble. Only users existing within the current access token's bubble will be matched, and you can only search within a group created by a bubbled user.

> Body parameter

```yaml
active_within_x_days: 0
"audience_ids[]":
  - 0
bubbled: false
exclude_connections: false
exclude_matches: false
exclude_muted: false
exclude_skipped: false
geo_latitude: 0
geo_longitude: 0
geo_miles_away: 0
group_id: 0
limit: 50
location_city_query: string
location_city_weight: 0
location_country_query: string
location_country_weight: 0
location_region_query: string
location_region_weight: 0
metadata_0_key: string
metadata_0_query: string
metadata_0_weight: 0
metadata_1_key: string
metadata_1_query: string
metadata_1_weight: 0
metadata_2_key: string
metadata_2_query: string
metadata_2_weight: 0
offset: 0
position_organization_query: string
position_organization_weight: 0
position_role_query: string
position_role_weight: 0
position_summary_query: string
position_summary_weight: 0
profile_first_name_query: string
profile_first_name_weight: 0
profile_goals_query: string
profile_goals_weight: string
profile_headline_query: string
profile_headline_weight: 0
profile_industry_query: string
profile_industry_weight: 0
profile_last_name_query: string
profile_last_name_weight: 0
profile_pitch_query: string
profile_pitch_weight: 0
```

<h3 id="postuserssearches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» active_within_x_days|body|integer(int32)|false|none|
|» audience_ids[]|body|[integer(int32)]|false|none|
|» bubbled|body|boolean|false|none|
|» exclude_connections|body|boolean|false|none|
|» exclude_matches|body|boolean|false|none|
|» exclude_muted|body|boolean|false|none|
|» exclude_skipped|body|boolean|false|none|
|» geo_latitude|body|number(float)|false|none|
|» geo_longitude|body|number(float)|false|none|
|» geo_miles_away|body|number(float)|false|none|
|» group_id|body|integer(int32)|false|none|
|» limit|body|integer(int32)|false|none|
|» location_city_query|body|string|false|none|
|» location_city_weight|body|integer(int32)|false|none|
|» location_country_query|body|string|false|none|
|» location_country_weight|body|integer(int32)|false|none|
|» location_region_query|body|string|false|none|
|» location_region_weight|body|integer(int32)|false|none|
|» metadata_0_key|body|string|false|none|
|» metadata_0_query|body|string|false|none|
|» metadata_0_weight|body|integer(int32)|false|none|
|» metadata_1_key|body|string|false|none|
|» metadata_1_query|body|string|false|none|
|» metadata_1_weight|body|integer(int32)|false|none|
|» metadata_2_key|body|string|false|none|
|» metadata_2_query|body|string|false|none|
|» metadata_2_weight|body|integer(int32)|false|none|
|» offset|body|integer(int32)|false|none|
|» position_organization_query|body|string|false|none|
|» position_organization_weight|body|integer(int32)|false|none|
|» position_role_query|body|string|false|none|
|» position_role_weight|body|integer(int32)|false|none|
|» position_summary_query|body|string|false|none|
|» position_summary_weight|body|integer(int32)|false|none|
|» profile_first_name_query|body|string|false|none|
|» profile_first_name_weight|body|integer(int32)|false|none|
|» profile_goals_query|body|string|false|none|
|» profile_goals_weight|body|string|false|none|
|» profile_headline_query|body|string|false|none|
|» profile_headline_weight|body|integer(int32)|false|none|
|» profile_industry_query|body|string|false|none|
|» profile_industry_weight|body|integer(int32)|false|none|
|» profile_last_name_query|body|string|false|none|
|» profile_last_name_weight|body|integer(int32)|false|none|
|» profile_pitch_query|body|string|false|none|
|» profile_pitch_weight|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "relevance": {
        "score": 0
      },
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="postuserssearches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-users-searches](#schemaendpoint-post-users-searches)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/users/{ID}

> Code samples

```bash
curl https://example.com/users/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{ID}`

Fetch an array of users. You can only retrieve users existing within the current access token's bubble.

<h3 id="getusersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  ]
}
```

<h3 id="getusersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-users-ID](#schemaendpoint-get-users-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/users/{ID}/groups

> Code samples

```bash
curl https://example.com/users/1/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{ID}/groups`

You can only retrieve groups that were created by users existing within the current access token's bubble.

<h3 id="getusersidgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "first_message": {
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "member_count": 0,
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "properties": {
        "description": "string",
        "name": "string",
        "privacy": "string",
        "slug": "string"
      }
    }
  ]
}
```

<h3 id="getusersidgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-users-ID-groups](#schemaendpoint-get-users-id-groups)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/users/{ID}/groups/messages

> Code samples

```bash
curl https://example.com/users/1/groups/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{ID}/groups/messages`

Paginated transcript of group messages authored by an individual user who exists within the current access token's bubble. Messages are sorted oldest to newest.

<h3 id="getusersidgroupsmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "group": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "moderated": {
        "deleted_status": true
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getusersidgroupsmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-users-ID-groups-messages](#schemaendpoint-get-users-id-groups-messages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: groups_read ), implicit_flow ( Scopes: groups_read )
</aside>

## post/users/{ID}/messages

> Code samples

```bash
curl https://example.com/users/1/messages \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'bubbled=false' \
  -F 'metadata_0_key=string' \
  -F 'metadata_0_privacy=Public' \
  -F 'metadata_0_values[]=["string"]' \
  -F 'metadata_1_key=string' \
  -F 'metadata_1_privacy=Public' \
  -F 'metadata_1_values[]=["string"]' \
  -F 'metadata_2_key=string' \
  -F 'metadata_2_privacy=Public' \
  -F 'metadata_2_values[]=["string"]' \
  -F 'text_emoticons=false' \
  -F 'text_raw=string'
```

`POST /users/{ID}/messages`

Initiate a conversation with a user who exists within the current access token's bubble by sending them an introductory message. If you aren't already in a conversation with them, this endpoint meets them first, and then sends the message. Note that if you aren't in an existing conversation, you still must meet the criteria to meet them, meaning the user must currently be free for you to meet. You will receive an error message unless it is currently free for you to meet the user. You can use the users/{:IDS}/synergies endpoint to first determine if the user isn't already in a conversation with you and is free for you to meet and, if they aren't, how to pay to meet them. If you don't specify a message, it defaults to your custom introductory message defined in your settings.

> Body parameter

```yaml
bubbled: false
metadata_0_key: string
metadata_0_privacy: Public
"metadata_0_values[]":
  - string
metadata_1_key: string
metadata_1_privacy: Public
"metadata_1_values[]":
  - string
metadata_2_key: string
metadata_2_privacy: Public
"metadata_2_values[]":
  - string
text_emoticons: false
text_raw: string
```

<h3 id="postusersidmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|false|none|
|» bubbled|body|boolean|false|none|
|» metadata_0_key|body|string|false|none|
|» metadata_0_privacy|body|string|false|none|
|» metadata_0_values[]|body|[string]|false|none|
|» metadata_1_key|body|string|false|none|
|» metadata_1_privacy|body|string|false|none|
|» metadata_1_values[]|body|[string]|false|none|
|» metadata_2_key|body|string|false|none|
|» metadata_2_privacy|body|string|false|none|
|» metadata_2_values[]|body|[string]|false|none|
|» text_emoticons|body|boolean|false|none|
|» text_raw|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» metadata_0_privacy|Public|
|» metadata_0_privacy|Private|
|» metadata_0_privacy|Bubbled|
|» metadata_0_privacy|User|
|» metadata_1_privacy|Public|
|» metadata_1_privacy|Private|
|» metadata_1_privacy|Bubbled|
|» metadata_1_privacy|User|
|» metadata_2_privacy|Public|
|» metadata_2_privacy|Private|
|» metadata_2_privacy|Bubbled|
|» metadata_2_privacy|User|

> Example responses

> 200 Response

```json
{
  "data": {
    "author": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "conversation": {},
    "id": 0,
    "last_seen": {
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    },
    "text": {
      "parsed": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "success": true
}
```

<h3 id="postusersidmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-users-ID-messages](#schemaendpoint-post-users-id-messages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read conversations_write ), implicit_flow ( Scopes: profile_read conversations_write )
</aside>

## get/users/{ID}/metadata

> Code samples

```bash
curl https://example.com/users/1/metadata \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{ID}/metadata`

Retrieve all key/value pairs attached to the current user that you have access to, so long as the user exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. However, you can always use the /users/metadata/filters endpoint to filter across all users, including those that are unmatched, existing within the current access token's bubble based on preknown metadata key/value pairs.

<h3 id="getusersidmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "app": {
        "about": {
          "description": "string",
          "name": "string",
          "website": {
            "thumbshot": "string",
            "url": "http://example.com"
          }
        },
        "id": 0,
        "legal": {
          "privacy_url": "http://example.com",
          "tos_url": "http://example.com"
        }
      },
      "content": {
        "key": "string",
        "value": "string"
      },
      "id": 0,
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "settings": {
        "privacy": "string"
      },
      "status": {
        "last_updated_timestamp": "1970-01-01T00:00:00Z"
      },
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

<h3 id="getusersidmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-users-ID-metadata](#schemaendpoint-get-users-id-metadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## post/users/{ID}/metadata

> Code samples

```bash
curl https://example.com/users/1/metadata \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'metadata_0_key=string' \
  -F 'metadata_0_privacy=Public' \
  -F 'metadata_0_values[]=["string"]' \
  -F 'metadata_1_key=string' \
  -F 'metadata_1_privacy=Public' \
  -F 'metadata_1_values[]=["string"]' \
  -F 'metadata_2_key=string' \
  -F 'metadata_2_privacy=Public' \
  -F 'metadata_2_values[]=["string"]'
```

`POST /users/{ID}/metadata`

Attach one-to-many key/value pairs of metadata to a user, so long as the user exists within the current access token's bubble. You can set one key at a time, with one or many values. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by anyone using an access token which grants them access to the user; Bubbled metadata by anyone using an access token existing within the current bubble; User metadata by you, so long as you are using an access token which grants you access to the user; Private metadata by you, so long as you are using an access token existing within the current bubble.

> Body parameter

```yaml
metadata_0_key: string
metadata_0_privacy: Public
"metadata_0_values[]":
  - string
metadata_1_key: string
metadata_1_privacy: Public
"metadata_1_values[]":
  - string
metadata_2_key: string
metadata_2_privacy: Public
"metadata_2_values[]":
  - string
```

<h3 id="postusersidmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|false|none|
|» metadata_0_key|body|string|false|none|
|» metadata_0_privacy|body|string|false|none|
|» metadata_0_values[]|body|[string]|false|none|
|» metadata_1_key|body|string|false|none|
|» metadata_1_privacy|body|string|false|none|
|» metadata_1_values[]|body|[string]|false|none|
|» metadata_2_key|body|string|false|none|
|» metadata_2_privacy|body|string|false|none|
|» metadata_2_values[]|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» metadata_0_privacy|Public|
|» metadata_0_privacy|Private|
|» metadata_0_privacy|Bubbled|
|» metadata_0_privacy|User|
|» metadata_1_privacy|Public|
|» metadata_1_privacy|Private|
|» metadata_1_privacy|Bubbled|
|» metadata_1_privacy|User|
|» metadata_2_privacy|Public|
|» metadata_2_privacy|Private|
|» metadata_2_privacy|Bubbled|
|» metadata_2_privacy|User|

> Example responses

> 200 Response

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "success": true
}
```

<h3 id="postusersidmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-users-ID-metadata](#schemaendpoint-post-users-id-metadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/users/{ID}/metadata/collections

> Code samples

```bash
curl https://example.com/users/1/metadata/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{ID}/metadata/collections`

Retrieve all key/value pairs attached to the current user that you have access to, so long as the user exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. However, you can always use the /users/metadata/filters endpoint to filter across all users, including those that are unmatched, existing within the current access token's bubble based on preknown metadata key/value pairs. Metadata will be grouped by key.

<h3 id="getusersidmetadatacollections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="getusersidmetadatacollections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-users-ID-metadata-collections](#schemaendpoint-get-users-id-metadata-collections)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/users/{ID}/positions

> Code samples

```bash
curl https://example.com/users/1/positions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{ID}/positions`

Retrieve the CV of a user who exists within the current access token's bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. You can only record CV data to your own account. However, any app that you have OAuth'ed against can do so. By default, you will receive CV data that all apps have recorded for the user. Optionally, you can choose to only receive data that the current access token's bubble has recorded.

<h3 id="getusersidpositions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|bubbled|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "app": {
        "about": {
          "description": "string",
          "name": "string",
          "website": {
            "thumbshot": "string",
            "url": "http://example.com"
          }
        },
        "id": 0,
        "legal": {
          "privacy_url": "http://example.com",
          "tos_url": "http://example.com"
        }
      },
      "category": "string",
      "id": 0,
      "organization": {
        "industry": "string",
        "name": "string",
        "size": "string",
        "ticker": "string",
        "type": "string",
        "url": "http://example.com"
      },
      "role": {
        "end_date": "1970-01-01",
        "start_date": "1970-01-01",
        "summary": "string",
        "title": "string"
      },
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ]
}
```

<h3 id="getusersidpositions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-users-ID-positions](#schemaendpoint-get-users-id-positions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read ), implicit_flow ( Scopes: profile_read )
</aside>

## get/users/{ID}/synergies

> Code samples

```bash
curl https://example.com/users/1/synergies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{ID}/synergies`

Determine your match relationship with one or more users who exist within the current access token's bubble. Under some conditions, the price to meet the user will be $0. However, if this is not the case, the PayPal URL payment method will be provided along with the price to meet the user. The PayPal API can be leveraged to send payments programatically, provided the parameters passed in remain the same to ensure that the payment is correctly recorded. Once the payment has been recorded via PayPal IPN, the price to meet the user changes to $0. You can then call the users/{:ID}/meet endpoint to meet the user.

<h3 id="getusersidsynergies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|[integer(int32)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "additional": {
        "metadata_count": 0,
        "positions_count": 0
      },
      "conversation": {
        "first_message": {
          "author": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          },
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "user_a": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "user_b": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "match": {
        "algorithmic_match": true,
        "complementary_goals": [
          "string"
        ],
        "distance_away": {
          "miles": 0
        },
        "industry": {
          "complementary": true,
          "mutual_match": true,
          "similar": true
        },
        "mutual_connections": {
          "count": 0
        },
        "recommendation_strength": 0
      },
      "meet": {
        "payment": {
          "paypal": {
            "url": "http://example.com"
          }
        },
        "price_usd": 0
      },
      "relationship": {
        "existing_bubbled_conversation": true,
        "existing_conversation": true,
        "muted": true,
        "skipped": true
      }
    }
  ]
}
```

<h3 id="getusersidsynergies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-users-ID-synergies](#schemaendpoint-get-users-id-synergies)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read ), implicit_flow ( Scopes: profile_read )
</aside>

## patch/users/{ID}/synergies

> Code samples

```bash
curl https://example.com/users/1/synergies \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'relationship_muted=true' \
  -F 'relationship_skipped=true'
```

`PATCH /users/{ID}/synergies`

Skip, mute or unmute a user you've been matched with. Skipped matches are only presented as algorithmic matches after all other candidates have been exhausted. You cannot be matched with or meet muted users. You can only skip, mute or unmute users existing within the same bubble.

> Body parameter

```yaml
relationship_muted: true
relationship_skipped: true
```

<h3 id="patchusersidsynergies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|false|none|
|» relationship_muted|body|boolean|false|none|
|» relationship_skipped|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "relationship": {
      "muted": true,
      "skipped": true
    }
  },
  "success": true
}
```

<h3 id="patchusersidsynergies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-patch-users-ID-synergies](#schemaendpoint-patch-users-id-synergies)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## get/users/~

> Code samples

```bash
curl https://example.com/users/~ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/~`

Retrieve the currently OAuth'ed end-user, based on the access token being used, including private information and settings such as their email address.

> Example responses

> 200 Response

```json
{
  "data": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "location": {
      "city": "string",
      "country": 0,
      "ip_address": "string",
      "latitude": "string",
      "longitude": "string",
      "region": "string"
    },
    "matching": {
      "goals": [
        "string"
      ],
      "interest_tags": [
        "string"
      ],
      "location_importance": "string",
      "targeted_industry": "string"
    },
    "profile": {
      "first_name": "string",
      "introduction": "string",
      "last_name": "string"
    },
    "settings": {
      "email": "string",
      "email_verified": true,
      "notifications": "string",
      "timezone": 0
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  }
}
```

<h3 id="getusers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-users--](#schemaendpoint-get-users--)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read ), implicit_flow ( Scopes: profile_read )
</aside>

## patch/users/~

> Code samples

```bash
curl https://example.com/users/~ \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'company=string' \
  -F 'company_size=Self-employed' \
  -F 'first_name=string' \
  -F 'goals[]=Find business partnerships' \
  -F 'headline=string' \
  -F 'industry=Accounting' \
  -F 'introduction=string' \
  -F 'job_position=Executive Management (C-level)' \
  -F 'last_name=string' \
  -F 'location_importance=Yes' \
  -F 'match_tags[]=["string"]' \
  -F 'pitch=string' \
  -F 'tags[]=["string"]' \
  -F 'targeted_industry=Accounting' \
  -F 'url=string'
```

`PATCH /users/~`

Update the OAuth'ed end user's account profile. At this time, for anti-spam reasons, restrictions preclude the ability to update email address and some other settings via the API.

> Body parameter

```yaml
company: string
company_size: Self-employed
first_name: string
"goals[]": Find business partnerships
headline: string
industry: Accounting
introduction: string
job_position: "Executive Management (C-level)"
last_name: string
location_importance: "Yes"
"match_tags[]":
  - string
pitch: string
"tags[]":
  - string
targeted_industry: Accounting
url: string
```

<h3 id="patchusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» company|body|string|false|none|
|» company_size|body|string|false|none|
|» first_name|body|string|false|none|
|» goals[]|body|[string]|false|none|
|» headline|body|string|false|none|
|» industry|body|string|false|none|
|» introduction|body|string|false|none|
|» job_position|body|string|false|none|
|» last_name|body|string|false|none|
|» location_importance|body|string|false|none|
|» match_tags[]|body|[string]|false|none|
|» pitch|body|string|false|none|
|» tags[]|body|[string]|false|none|
|» targeted_industry|body|string|false|none|
|» url|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» company_size|Self-employed|
|» company_size|2 - 9 Employees|
|» company_size|10 - 49 Employees|
|» company_size|50 - 99 Employees|
|» company_size|100 - 499 Employees|
|» company_size|500 - 999 Employees|
|» company_size|1000 - 4999 Employees|
|» company_size|5000+ Employees|
|» company_size|Don't Know|
|» goals[]|Find business partnerships|
|» goals[]|Find prospective clients|
|» goals[]|Hire employees|
|» goals[]|Find a job|
|» goals[]|Find a co-founder|
|» goals[]|Receive mentorship from others|
|» goals[]|Mentor others|
|» industry|Accounting|
|» industry|Airlines/Aviation|
|» industry|Alternative Dispute Resolution|
|» industry|Alternative Medicine|
|» industry|Animation|
|» industry|Apparel & Fashion|
|» industry|Architecture & Planning|
|» industry|Arts and Crafts|
|» industry|Automotive|
|» industry|Aviation & Aerospace|
|» industry|Banking|
|» industry|Biotechnology|
|» industry|Broadcast Media|
|» industry|Building Materials|
|» industry|Business Supplies and Equipment|
|» industry|Capital Markets|
|» industry|Chemicals|
|» industry|Civic & Social Organization|
|» industry|Civil Engineering|
|» industry|Commercial Real Estate|
|» industry|Computer & Network Security|
|» industry|Computer Games|
|» industry|Computer Hardware|
|» industry|Computer Networking|
|» industry|Computer Software|
|» industry|Construction|
|» industry|Consumer Electronics|
|» industry|Consumer Goods|
|» industry|Consumer Services|
|» industry|Cosmetics|
|» industry|Dairy|
|» industry|Defense & Space|
|» industry|Design|
|» industry|E-Learning|
|» industry|Education Management|
|» industry|Electrical/Electronic Manufacturing|
|» industry|Entertainment|
|» industry|Environmental Services|
|» industry|Events Services|
|» industry|Executive Office|
|» industry|Facilities Services|
|» industry|Farming|
|» industry|Financial Services|
|» industry|Fine Art|
|» industry|Fishery|
|» industry|Food & Beverages|
|» industry|Food Production|
|» industry|Fund-Raising|
|» industry|Furniture|
|» industry|Gambling & Casinos|
|» industry|Glass, Ceramics & Concrete|
|» industry|Government Administration|
|» industry|Government Relations|
|» industry|Graphic Design|
|» industry|Health, Wellness and Fitness|
|» industry|Higher Education|
|» industry|Hospital & Health Care|
|» industry|Hospitality|
|» industry|Human Resources|
|» industry|Import and Export|
|» industry|Individual & Family Services|
|» industry|Industrial Automation|
|» industry|Information Services|
|» industry|Information Technology and Services|
|» industry|Insurance|
|» industry|International Affairs|
|» industry|International Trade and Development|
|» industry|Internet|
|» industry|Investment Banking|
|» industry|Investment Management|
|» industry|Judiciary|
|» industry|Law Enforcement|
|» industry|Law Practice|
|» industry|Legal Services|
|» industry|Legislative Office|
|» industry|Leisure, Travel & Tourism|
|» industry|Libraries|
|» industry|Logistics and Supply Chain|
|» industry|Luxury Goods & Jewelry|
|» industry|Machinery|
|» industry|Management Consulting|
|» industry|Maritime|
|» industry|Market Research|
|» industry|Marketing and Advertising|
|» industry|Mechanical or Industrial Engineering|
|» industry|Media Production|
|» industry|Medical Devices|
|» industry|Medical Practice|
|» industry|Mental Health Care|
|» industry|Military|
|» industry|Mining & Metals|
|» industry|Motion Pictures and Film|
|» industry|Museums and Institutions|
|» industry|Music|
|» industry|Nanotechnology|
|» industry|Newspapers|
|» industry|Non-Profit Organization Management|
|» industry|Oil & Energy|
|» industry|Online Media|
|» industry|Outsourcing/Offshoring|
|» industry|Package/Freight Delivery|
|» industry|Packaging and Containers|
|» industry|Paper & Forest Products|
|» industry|Performing Arts|
|» industry|Pharmaceuticals|
|» industry|Philanthropy|
|» industry|Photography|
|» industry|Plastics|
|» industry|Political Organization|
|» industry|Primary/Secondary Education|
|» industry|Printing|
|» industry|Professional Training & Coaching|
|» industry|Program Development|
|» industry|Public Policy|
|» industry|Public Relations and Communications|
|» industry|Public Safety|
|» industry|Publishing|
|» industry|Railroad Manufacture|
|» industry|Ranching|
|» industry|Real Estate|
|» industry|Recreational Facilities and Services|
|» industry|Religious Institutions|
|» industry|Renewables & Environment|
|» industry|Research|
|» industry|Restaurants|
|» industry|Retail|
|» industry|Security and Investigations|
|» industry|Semiconductors|
|» industry|Shipbuilding|
|» industry|Sporting Goods|
|» industry|Sports|
|» industry|Staffing and Recruiting|
|» industry|Supermarkets|
|» industry|Telecommunications|
|» industry|Textiles|
|» industry|Think Tanks|
|» industry|Tobacco|
|» industry|Translation and Localization|
|» industry|Transportation/Trucking/Railroad|
|» industry|Utilities|
|» industry|Venture Capital & Private Equity|
|» industry|Veterinary|
|» industry|Warehousing|
|» industry|Wholesale|
|» industry|Wine and Spirits|
|» industry|Wireless|
|» industry|Writing and Editing|
|» job_position|Executive Management (C-level)|
|» job_position|VP-level Executive|
|» job_position|Manager / Director / Supervisor|
|» job_position|Systems Development|
|» job_position|Software Development|
|» job_position|Web Developer|
|» job_position|IT Consultant|
|» job_position|Technical Support|
|» job_position|Sales|
|» job_position|Other technology related|
|» job_position|Other non-technology related|
|» job_position|Student|
|» job_position|Retired|
|» location_importance|Yes|
|» location_importance|Somewhat|
|» location_importance|No|
|» targeted_industry|Accounting|
|» targeted_industry|Airlines/Aviation|
|» targeted_industry|Alternative Dispute Resolution|
|» targeted_industry|Alternative Medicine|
|» targeted_industry|Animation|
|» targeted_industry|Apparel & Fashion|
|» targeted_industry|Architecture & Planning|
|» targeted_industry|Arts and Crafts|
|» targeted_industry|Automotive|
|» targeted_industry|Aviation & Aerospace|
|» targeted_industry|Banking|
|» targeted_industry|Biotechnology|
|» targeted_industry|Broadcast Media|
|» targeted_industry|Building Materials|
|» targeted_industry|Business Supplies and Equipment|
|» targeted_industry|Capital Markets|
|» targeted_industry|Chemicals|
|» targeted_industry|Civic & Social Organization|
|» targeted_industry|Civil Engineering|
|» targeted_industry|Commercial Real Estate|
|» targeted_industry|Computer & Network Security|
|» targeted_industry|Computer Games|
|» targeted_industry|Computer Hardware|
|» targeted_industry|Computer Networking|
|» targeted_industry|Computer Software|
|» targeted_industry|Construction|
|» targeted_industry|Consumer Electronics|
|» targeted_industry|Consumer Goods|
|» targeted_industry|Consumer Services|
|» targeted_industry|Cosmetics|
|» targeted_industry|Dairy|
|» targeted_industry|Defense & Space|
|» targeted_industry|Design|
|» targeted_industry|E-Learning|
|» targeted_industry|Education Management|
|» targeted_industry|Electrical/Electronic Manufacturing|
|» targeted_industry|Entertainment|
|» targeted_industry|Environmental Services|
|» targeted_industry|Events Services|
|» targeted_industry|Executive Office|
|» targeted_industry|Facilities Services|
|» targeted_industry|Farming|
|» targeted_industry|Financial Services|
|» targeted_industry|Fine Art|
|» targeted_industry|Fishery|
|» targeted_industry|Food & Beverages|
|» targeted_industry|Food Production|
|» targeted_industry|Fund-Raising|
|» targeted_industry|Furniture|
|» targeted_industry|Gambling & Casinos|
|» targeted_industry|Glass, Ceramics & Concrete|
|» targeted_industry|Government Administration|
|» targeted_industry|Government Relations|
|» targeted_industry|Graphic Design|
|» targeted_industry|Health, Wellness and Fitness|
|» targeted_industry|Higher Education|
|» targeted_industry|Hospital & Health Care|
|» targeted_industry|Hospitality|
|» targeted_industry|Human Resources|
|» targeted_industry|Import and Export|
|» targeted_industry|Individual & Family Services|
|» targeted_industry|Industrial Automation|
|» targeted_industry|Information Services|
|» targeted_industry|Information Technology and Services|
|» targeted_industry|Insurance|
|» targeted_industry|International Affairs|
|» targeted_industry|International Trade and Development|
|» targeted_industry|Internet|
|» targeted_industry|Investment Banking|
|» targeted_industry|Investment Management|
|» targeted_industry|Judiciary|
|» targeted_industry|Law Enforcement|
|» targeted_industry|Law Practice|
|» targeted_industry|Legal Services|
|» targeted_industry|Legislative Office|
|» targeted_industry|Leisure, Travel & Tourism|
|» targeted_industry|Libraries|
|» targeted_industry|Logistics and Supply Chain|
|» targeted_industry|Luxury Goods & Jewelry|
|» targeted_industry|Machinery|
|» targeted_industry|Management Consulting|
|» targeted_industry|Maritime|
|» targeted_industry|Market Research|
|» targeted_industry|Marketing and Advertising|
|» targeted_industry|Mechanical or Industrial Engineering|
|» targeted_industry|Media Production|
|» targeted_industry|Medical Devices|
|» targeted_industry|Medical Practice|
|» targeted_industry|Mental Health Care|
|» targeted_industry|Military|
|» targeted_industry|Mining & Metals|
|» targeted_industry|Motion Pictures and Film|
|» targeted_industry|Museums and Institutions|
|» targeted_industry|Music|
|» targeted_industry|Nanotechnology|
|» targeted_industry|Newspapers|
|» targeted_industry|Non-Profit Organization Management|
|» targeted_industry|Oil & Energy|
|» targeted_industry|Online Media|
|» targeted_industry|Outsourcing/Offshoring|
|» targeted_industry|Package/Freight Delivery|
|» targeted_industry|Packaging and Containers|
|» targeted_industry|Paper & Forest Products|
|» targeted_industry|Performing Arts|
|» targeted_industry|Pharmaceuticals|
|» targeted_industry|Philanthropy|
|» targeted_industry|Photography|
|» targeted_industry|Plastics|
|» targeted_industry|Political Organization|
|» targeted_industry|Primary/Secondary Education|
|» targeted_industry|Printing|
|» targeted_industry|Professional Training & Coaching|
|» targeted_industry|Program Development|
|» targeted_industry|Public Policy|
|» targeted_industry|Public Relations and Communications|
|» targeted_industry|Public Safety|
|» targeted_industry|Publishing|
|» targeted_industry|Railroad Manufacture|
|» targeted_industry|Ranching|
|» targeted_industry|Real Estate|
|» targeted_industry|Recreational Facilities and Services|
|» targeted_industry|Religious Institutions|
|» targeted_industry|Renewables & Environment|
|» targeted_industry|Research|
|» targeted_industry|Restaurants|
|» targeted_industry|Retail|
|» targeted_industry|Security and Investigations|
|» targeted_industry|Semiconductors|
|» targeted_industry|Shipbuilding|
|» targeted_industry|Sporting Goods|
|» targeted_industry|Sports|
|» targeted_industry|Staffing and Recruiting|
|» targeted_industry|Supermarkets|
|» targeted_industry|Telecommunications|
|» targeted_industry|Textiles|
|» targeted_industry|Think Tanks|
|» targeted_industry|Tobacco|
|» targeted_industry|Translation and Localization|
|» targeted_industry|Transportation/Trucking/Railroad|
|» targeted_industry|Utilities|
|» targeted_industry|Venture Capital & Private Equity|
|» targeted_industry|Veterinary|
|» targeted_industry|Warehousing|
|» targeted_industry|Wholesale|
|» targeted_industry|Wine and Spirits|
|» targeted_industry|Wireless|
|» targeted_industry|Writing and Editing|

> Example responses

> 200 Response

```json
{
  "data": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "location": {
      "city": "string",
      "country": 0,
      "ip_address": "string",
      "latitude": "string",
      "longitude": "string",
      "region": "string"
    },
    "matching": {
      "goals": [
        "string"
      ],
      "interest_tags": [
        "string"
      ],
      "location_importance": "string",
      "targeted_industry": "string"
    },
    "profile": {
      "first_name": "string",
      "introduction": "string",
      "last_name": "string"
    },
    "settings": {
      "email": "string",
      "email_verified": true,
      "notifications": "string",
      "timezone": 0
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  },
  "success": true
}
```

<h3 id="patchusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-patch-users--](#schemaendpoint-patch-users--)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read profile_write ), implicit_flow ( Scopes: profile_read profile_write )
</aside>

<h1 id="daniweb-connect-api-positions">positions</h1>

Operations involving Positions

## post/positions

> Code samples

```bash
curl https://example.com/positions \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'category=Experience' \
  -F 'end_date=string' \
  -F 'organization=string' \
  -F 'organization_size=Self-employed' \
  -F 'position=Executive Management (C-level)' \
  -F 'role=string' \
  -F 'start_date=string' \
  -F 'summary=string' \
  -F 'url=string'
```

`POST /positions`

Update the OAuth'ed end user's Curriculum Vitae by adding a position.

> Body parameter

```yaml
category: Experience
end_date: string
organization: string
organization_size: Self-employed
position: "Executive Management (C-level)"
role: string
start_date: string
summary: string
url: string
```

<h3 id="postpositions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» category|body|string|true|none|
|» end_date|body|string|false|none|
|» organization|body|string|true|none|
|» organization_size|body|string|false|none|
|» position|body|string|false|none|
|» role|body|string|true|none|
|» start_date|body|string|true|none|
|» summary|body|string|false|none|
|» url|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|Experience|
|» category|Education|
|» category|Awards|
|» category|Affiliations|
|» category|Portfolio|
|» organization_size|Self-employed|
|» organization_size|2 - 9 Employees|
|» organization_size|10 - 49 Employees|
|» organization_size|50 - 99 Employees|
|» organization_size|100 - 499 Employees|
|» organization_size|500 - 999 Employees|
|» organization_size|1000 - 4999 Employees|
|» organization_size|5000+ Employees|
|» organization_size|Don't Know|
|» position|Executive Management (C-level)|
|» position|VP-level Executive|
|» position|Manager / Director / Supervisor|
|» position|Systems Development|
|» position|Software Development|
|» position|Web Developer|
|» position|IT Consultant|
|» position|Technical Support|
|» position|Sales|
|» position|Other technology related|
|» position|Other non-technology related|
|» position|Student|
|» position|Retired|

> Example responses

> 200 Response

```json
{
  "data": {
    "app": {
      "about": {
        "description": "string",
        "name": "string",
        "website": {
          "thumbshot": "string",
          "url": "http://example.com"
        }
      },
      "id": 0,
      "legal": {
        "privacy_url": "http://example.com",
        "tos_url": "http://example.com"
      }
    },
    "category": "string",
    "id": 0,
    "organization": {
      "industry": "string",
      "name": "string",
      "size": "string",
      "ticker": "string",
      "type": "string",
      "url": "http://example.com"
    },
    "role": {
      "end_date": "1970-01-01",
      "start_date": "1970-01-01",
      "summary": "string",
      "title": "string"
    },
    "user": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "success": true
}
```

<h3 id="postpositions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-positions](#schemaendpoint-post-positions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read profile_write ), implicit_flow ( Scopes: profile_read profile_write )
</aside>

## delete/positions/{ID}

> Code samples

```bash
curl https://example.com/positions/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /positions/{ID}`

Remove an item from the OAuth'ed end user's Curriculum Vitae.

<h3 id="deletepositionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deletepositionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-delete-positions-ID](#schemaendpoint-delete-positions-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read profile_write ), implicit_flow ( Scopes: profile_read profile_write )
</aside>

## patch/positions/{ID}

> Code samples

```bash
curl https://example.com/positions/1 \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'category=Experience' \
  -F 'end_date=string' \
  -F 'organization=string' \
  -F 'organization_size=Self-employed' \
  -F 'position=Executive Management (C-level)' \
  -F 'role=string' \
  -F 'start_date=string' \
  -F 'summary=string' \
  -F 'url=string'
```

`PATCH /positions/{ID}`

Update the OAuth'ed end user's Curriculum Vitae by modifying an existing position.

> Body parameter

```yaml
category: Experience
end_date: string
organization: string
organization_size: Self-employed
position: "Executive Management (C-level)"
role: string
start_date: string
summary: string
url: string
```

<h3 id="patchpositionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|object|true|none|
|» category|body|string|true|none|
|» end_date|body|string|false|none|
|» organization|body|string|true|none|
|» organization_size|body|string|false|none|
|» position|body|string|false|none|
|» role|body|string|true|none|
|» start_date|body|string|true|none|
|» summary|body|string|false|none|
|» url|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|Experience|
|» category|Education|
|» category|Awards|
|» category|Affiliations|
|» category|Portfolio|
|» organization_size|Self-employed|
|» organization_size|2 - 9 Employees|
|» organization_size|10 - 49 Employees|
|» organization_size|50 - 99 Employees|
|» organization_size|100 - 499 Employees|
|» organization_size|500 - 999 Employees|
|» organization_size|1000 - 4999 Employees|
|» organization_size|5000+ Employees|
|» organization_size|Don't Know|
|» position|Executive Management (C-level)|
|» position|VP-level Executive|
|» position|Manager / Director / Supervisor|
|» position|Systems Development|
|» position|Software Development|
|» position|Web Developer|
|» position|IT Consultant|
|» position|Technical Support|
|» position|Sales|
|» position|Other technology related|
|» position|Other non-technology related|
|» position|Student|
|» position|Retired|

> Example responses

> 200 Response

```json
{
  "data": {
    "app": {
      "about": {
        "description": "string",
        "name": "string",
        "website": {
          "thumbshot": "string",
          "url": "http://example.com"
        }
      },
      "id": 0,
      "legal": {
        "privacy_url": "http://example.com",
        "tos_url": "http://example.com"
      }
    },
    "category": "string",
    "id": 0,
    "organization": {
      "industry": "string",
      "name": "string",
      "size": "string",
      "ticker": "string",
      "type": "string",
      "url": "http://example.com"
    },
    "role": {
      "end_date": "1970-01-01",
      "start_date": "1970-01-01",
      "summary": "string",
      "title": "string"
    },
    "user": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "success": true
}
```

<h3 id="patchpositionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-patch-positions-ID](#schemaendpoint-patch-positions-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: profile_read profile_write ), implicit_flow ( Scopes: profile_read profile_write )
</aside>

<h1 id="daniweb-connect-api-webhooks">webhooks</h1>

Operations involving Webhooks

## get/webhooks

> Code samples

```bash
curl https://example.com/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks`

Fetch a listing of all webhooks owned by the current user/bubble combination.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "app": {
        "about": {
          "description": "string",
          "name": "string",
          "website": {
            "thumbshot": "string",
            "url": "http://example.com"
          }
        },
        "id": 0,
        "legal": {
          "privacy_url": "http://example.com",
          "tos_url": "http://example.com"
        }
      },
      "event": {
        "action": "string"
      },
      "id": 0,
      "name": "string",
      "object": {
        "id": 0,
        "type": "string"
      },
      "uri": "http://example.com",
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ]
}
```

<h3 id="getwebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-get-webhooks](#schemaendpoint-get-webhooks)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## post/webhooks

> Code samples

```bash
curl https://example.com/webhooks \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'bubbled=false' \
  -F 'event=conversation_message' \
  -F 'name=string' \
  -F 'object_id=0' \
  -F 'uri=string'
```

`POST /webhooks`

Register a new webhook for the current user/bubble combination. Specify an object_id to only be notified on an event related to that specific Conversation ID, Group ID, or User ID. Your access token must have access to the user being tracked, user you are in the conversation with, or user who created the group. You must be connected with a user in order to keep track of their online status. Alternatively, do not specify an object_id to be notified on all events that are related to conversations you're in, groups you're a member of, or users you are in conversations with. You may only have one webhook for each object_id/event. The webhook URI must reside on your own server. Webhooks do not expire when the access token used to create them expires. However, they will temporarily cease to function if the user who created them deauthorizes access to the application (effectively no longer existing within the bubble), unless/until the user reauthorizes the application using OAuth.

> Body parameter

```yaml
bubbled: false
event: conversation_message
name: string
object_id: 0
uri: string
```

<h3 id="postwebhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» bubbled|body|boolean|false|none|
|» event|body|string|true|none|
|» name|body|string|true|none|
|» object_id|body|integer(int32)|false|none|
|» uri|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event|conversation_message|
|» event|conversation_seen|
|» event|group_update|
|» event|group_message|
|» event|group_seen|
|» event|user_online|
|» event|user_update|

> Example responses

> 200 Response

```json
{
  "data": {
    "app": {
      "about": {
        "description": "string",
        "name": "string",
        "website": {
          "thumbshot": "string",
          "url": "http://example.com"
        }
      },
      "id": 0,
      "legal": {
        "privacy_url": "http://example.com",
        "tos_url": "http://example.com"
      }
    },
    "event": {
      "action": "string"
    },
    "id": 0,
    "name": "string",
    "object": {
      "id": 0,
      "type": "string"
    },
    "uri": "http://example.com",
    "user": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "success": true
}
```

<h3 id="postwebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-post-webhooks](#schemaendpoint-post-webhooks)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

## delete/webhooks/{ID}

> Code samples

```bash
curl https://example.com/webhooks/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/{ID}`

Delete a webhook that was previously registered by the current user/bubble combination.

<h3 id="deletewebhooksid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deletewebhooksid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Response|[Endpoint-delete-webhooks-ID](#schemaendpoint-delete-webhooks-id)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
explicit_flow ( Scopes: basic ), implicit_flow ( Scopes: basic )
</aside>

# Schemas

<h2 id="tocS_Api-pagination">Api-pagination</h2>
<!-- backwards compatibility -->
<a id="schemaapi-pagination"></a>
<a id="schema_Api-pagination"></a>
<a id="tocSapi-pagination"></a>
<a id="tocsapi-pagination"></a>

```json
{
  "limit": 0,
  "offset": 0,
  "total_records": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|number(int32)|false|none|none|
|offset|number(int32)|false|none|none|
|total_records|number(int32)|false|none|none|

<h2 id="tocS_App">App</h2>
<!-- backwards compatibility -->
<a id="schemaapp"></a>
<a id="schema_App"></a>
<a id="tocSapp"></a>
<a id="tocsapp"></a>

```json
{
  "about": {
    "description": "string",
    "name": "string",
    "website": {
      "thumbshot": "string",
      "url": "http://example.com"
    }
  },
  "id": 0,
  "legal": {
    "privacy_url": "http://example.com",
    "tos_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|about|object|false|none|none|
|id|number(int32)|true|none|none|
|legal|object|false|none|none|

<h2 id="tocS_Bubble">Bubble</h2>
<!-- backwards compatibility -->
<a id="schemabubble"></a>
<a id="schema_Bubble"></a>
<a id="tocSbubble"></a>
<a id="tocsbubble"></a>

```json
{
  "about": {
    "name": "string"
  },
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|about|object|false|none|none|
|id|number(int32)|true|none|none|

<h2 id="tocS_Conversation">Conversation</h2>
<!-- backwards compatibility -->
<a id="schemaconversation"></a>
<a id="schema_Conversation"></a>
<a id="tocSconversation"></a>
<a id="tocsconversation"></a>

```json
{
  "first_message": {
    "author": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "id": 0,
  "latest_message": {
    "author": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "conversation": {},
    "id": 0,
    "last_seen": {
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    },
    "text": {
      "parsed": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "user_a": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  },
  "user_b": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_message|object|false|none|none|
|id|number(int32)|true|none|none|
|latest_message|[Message](#schemamessage)|false|none|none|
|user_a|[User](#schemauser)|false|none|none|
|user_b|[User](#schemauser)|false|none|none|

<h2 id="tocS_Endpoint-delete-groups-ID-memberships">Endpoint-delete-groups-ID-memberships</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-delete-groups-id-memberships"></a>
<a id="schema_Endpoint-delete-groups-ID-memberships"></a>
<a id="tocSendpoint-delete-groups-id-memberships"></a>
<a id="tocsendpoint-delete-groups-id-memberships"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-delete-groups-messages-ID">Endpoint-delete-groups-messages-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-delete-groups-messages-id"></a>
<a id="schema_Endpoint-delete-groups-messages-ID"></a>
<a id="tocSendpoint-delete-groups-messages-id"></a>
<a id="tocsendpoint-delete-groups-messages-id"></a>

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "group": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "moderated": {
        "deleted_status": true
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "status": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Group_message](#schemagroup_message)]|false|none|none|
|status|boolean|false|none|none|

<h2 id="tocS_Endpoint-delete-positions-ID">Endpoint-delete-positions-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-delete-positions-id"></a>
<a id="schema_Endpoint-delete-positions-ID"></a>
<a id="tocSendpoint-delete-positions-id"></a>
<a id="tocsendpoint-delete-positions-id"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-delete-webhooks-ID">Endpoint-delete-webhooks-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-delete-webhooks-id"></a>
<a id="schema_Endpoint-delete-webhooks-ID"></a>
<a id="tocSendpoint-delete-webhooks-id"></a>
<a id="tocsendpoint-delete-webhooks-id"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-get-apps">Endpoint-get-apps</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-apps"></a>
<a id="schema_Endpoint-get-apps"></a>
<a id="tocSendpoint-get-apps"></a>
<a id="tocsendpoint-get-apps"></a>

```json
{
  "data": [
    {
      "about": {
        "description": "string",
        "name": "string",
        "website": {
          "thumbshot": "string",
          "url": "http://example.com"
        }
      },
      "id": 0,
      "legal": {
        "privacy_url": "http://example.com",
        "tos_url": "http://example.com"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[App](#schemaapp)]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-apps-ID">Endpoint-get-apps-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-apps-id"></a>
<a id="schema_Endpoint-get-apps-ID"></a>
<a id="tocSendpoint-get-apps-id"></a>
<a id="tocsendpoint-get-apps-id"></a>

```json
{
  "data": [
    {
      "about": {
        "description": "string",
        "name": "string",
        "website": {
          "thumbshot": "string",
          "url": "http://example.com"
        }
      },
      "id": 0,
      "legal": {
        "privacy_url": "http://example.com",
        "tos_url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[App](#schemaapp)]|false|none|none|

<h2 id="tocS_Endpoint-get-audiences">Endpoint-get-audiences</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-audiences"></a>
<a id="schema_Endpoint-get-audiences"></a>
<a id="tocSendpoint-get-audiences"></a>
<a id="tocsendpoint-get-audiences"></a>

```json
{
  "data": [
    {
      "about": {
        "name": "string"
      },
      "id": 0
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Bubble](#schemabubble)]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-audiences-ID">Endpoint-get-audiences-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-audiences-id"></a>
<a id="schema_Endpoint-get-audiences-ID"></a>
<a id="tocSendpoint-get-audiences-id"></a>
<a id="tocsendpoint-get-audiences-id"></a>

```json
{
  "data": [
    {
      "about": {
        "name": "string"
      },
      "id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Bubble](#schemabubble)]|false|none|none|

<h2 id="tocS_Endpoint-get-autocompletes">Endpoint-get-autocompletes</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-autocompletes"></a>
<a id="schema_Endpoint-get-autocompletes"></a>
<a id="tocSendpoint-get-autocompletes"></a>
<a id="tocsendpoint-get-autocompletes"></a>

```json
{
  "data": {
    "conversations": [
      "string"
    ],
    "locations": [
      "string"
    ],
    "matches": [
      "string"
    ],
    "people": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_Endpoint-get-conversations-ID">Endpoint-get-conversations-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-conversations-id"></a>
<a id="schema_Endpoint-get-conversations-ID"></a>
<a id="tocSendpoint-get-conversations-id"></a>
<a id="tocsendpoint-get-conversations-id"></a>

```json
{
  "data": [
    {
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "user_a": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "user_b": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Conversation](#schemaconversation)]|false|none|none|

<h2 id="tocS_Endpoint-get-conversations-ID-messages">Endpoint-get-conversations-ID-messages</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-conversations-id-messages"></a>
<a id="schema_Endpoint-get-conversations-ID-messages"></a>
<a id="tocSendpoint-get-conversations-id-messages"></a>
<a id="tocsendpoint-get-conversations-id-messages"></a>

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "conversation": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Message](#schemamessage)]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-conversations-ID-statuses">Endpoint-get-conversations-ID-statuses</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-conversations-id-statuses"></a>
<a id="schema_Endpoint-get-conversations-ID-statuses"></a>
<a id="tocSendpoint-get-conversations-id-statuses"></a>
<a id="tocsendpoint-get-conversations-id-statuses"></a>

```json
{
  "data": [
    {
      "archived_status": true,
      "bubbled": {
        "latest_message": {
          "author": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          },
          "conversation": {},
          "id": 0,
          "last_seen": {
            "timestamp": "1970-01-01T00:00:00Z",
            "user": {
              "business_card": {
                "company_name": "string",
                "company_size": "string",
                "headline": "string",
                "industry": "string",
                "interest_tags": [
                  "string"
                ],
                "job_position": "string",
                "summary": "string",
                "website": {
                  "thumbshot_uri": "http://example.com",
                  "url": "http://example.com"
                }
              },
              "community_persona": {
                "id": 0,
                "identity": {
                  "avatar_uri": "http://example.com",
                  "badge": "string",
                  "profile_url": "http://example.com",
                  "username": "string"
                },
                "location": {
                  "free_form": "string"
                },
                "personal": {
                  "about_me": "string",
                  "birthday": "string",
                  "interests": "string",
                  "pc_specs": "string"
                },
                "signature": {
                  "parsed": "string",
                  "raw": "string"
                },
                "stats": {
                  "answered_count": 0,
                  "endorsements_count": 0,
                  "posts_count": 0,
                  "reputation_count": 0
                }
              },
              "id": 0,
              "profile": {
                "first_name": "string",
                "last_name": "string"
              },
              "usage": {
                "available_status": true,
                "joined_timestamp": "1970-01-01T00:00:00Z",
                "last_activity_timestamp": "1970-01-01T00:00:00Z",
                "online_status": true
              }
            }
          },
          "text": {
            "parsed": "string"
          },
          "timestamp": "1970-01-01T00:00:00Z"
        }
      },
      "conversation": {
        "first_message": {
          "author": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          },
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "user_a": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "user_b": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "earliest_unseen_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "new_message_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_Endpoint-get-conversations-statuses">Endpoint-get-conversations-statuses</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-conversations-statuses"></a>
<a id="schema_Endpoint-get-conversations-statuses"></a>
<a id="tocSendpoint-get-conversations-statuses"></a>
<a id="tocsendpoint-get-conversations-statuses"></a>

```json
{
  "data": [
    {
      "archived_status": true,
      "bubbled": {
        "latest_message": {
          "author": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          },
          "conversation": {},
          "id": 0,
          "last_seen": {
            "timestamp": "1970-01-01T00:00:00Z",
            "user": {
              "business_card": {
                "company_name": "string",
                "company_size": "string",
                "headline": "string",
                "industry": "string",
                "interest_tags": [
                  "string"
                ],
                "job_position": "string",
                "summary": "string",
                "website": {
                  "thumbshot_uri": "http://example.com",
                  "url": "http://example.com"
                }
              },
              "community_persona": {
                "id": 0,
                "identity": {
                  "avatar_uri": "http://example.com",
                  "badge": "string",
                  "profile_url": "http://example.com",
                  "username": "string"
                },
                "location": {
                  "free_form": "string"
                },
                "personal": {
                  "about_me": "string",
                  "birthday": "string",
                  "interests": "string",
                  "pc_specs": "string"
                },
                "signature": {
                  "parsed": "string",
                  "raw": "string"
                },
                "stats": {
                  "answered_count": 0,
                  "endorsements_count": 0,
                  "posts_count": 0,
                  "reputation_count": 0
                }
              },
              "id": 0,
              "profile": {
                "first_name": "string",
                "last_name": "string"
              },
              "usage": {
                "available_status": true,
                "joined_timestamp": "1970-01-01T00:00:00Z",
                "last_activity_timestamp": "1970-01-01T00:00:00Z",
                "online_status": true
              }
            }
          },
          "text": {
            "parsed": "string"
          },
          "timestamp": "1970-01-01T00:00:00Z"
        }
      },
      "conversation": {
        "first_message": {
          "author": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          },
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "user_a": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "user_b": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "earliest_unseen_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "new_message_count": 0
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-groups">Endpoint-get-groups</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-groups"></a>
<a id="schema_Endpoint-get-groups"></a>
<a id="tocSendpoint-get-groups"></a>
<a id="tocsendpoint-get-groups"></a>

```json
{
  "data": [
    {
      "first_message": {
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "member_count": 0,
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "properties": {
        "description": "string",
        "name": "string",
        "privacy": "string",
        "slug": "string"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Group](#schemagroup)]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-groups-ID">Endpoint-get-groups-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-groups-id"></a>
<a id="schema_Endpoint-get-groups-ID"></a>
<a id="tocSendpoint-get-groups-id"></a>
<a id="tocsendpoint-get-groups-id"></a>

```json
{
  "data": [
    {
      "first_message": {
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "member_count": 0,
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "properties": {
        "description": "string",
        "name": "string",
        "privacy": "string",
        "slug": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Group](#schemagroup)]|false|none|none|

<h2 id="tocS_Endpoint-get-groups-ID-memberships">Endpoint-get-groups-ID-memberships</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-groups-id-memberships"></a>
<a id="schema_Endpoint-get-groups-ID-memberships"></a>
<a id="tocSendpoint-get-groups-id-memberships"></a>
<a id="tocsendpoint-get-groups-id-memberships"></a>

```json
{
  "data": [
    {
      "group": {
        "first_message": {
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "member_count": 0,
        "owner": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "properties": {
          "description": "string",
          "name": "string",
          "privacy": "string",
          "slug": "string"
        }
      },
      "member": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "privileges": {
        "moderator": true,
        "owner": true
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-groups-ID-messages">Endpoint-get-groups-ID-messages</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-groups-id-messages"></a>
<a id="schema_Endpoint-get-groups-ID-messages"></a>
<a id="tocSendpoint-get-groups-id-messages"></a>
<a id="tocsendpoint-get-groups-id-messages"></a>

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "group": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "moderated": {
        "deleted_status": true
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Group_message](#schemagroup_message)]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-groups-ID-statuses">Endpoint-get-groups-ID-statuses</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-groups-id-statuses"></a>
<a id="schema_Endpoint-get-groups-ID-statuses"></a>
<a id="tocSendpoint-get-groups-id-statuses"></a>
<a id="tocsendpoint-get-groups-id-statuses"></a>

```json
{
  "data": [
    {
      "earliest_unseen_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "group": {
        "first_message": {
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "member_count": 0,
        "owner": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "properties": {
          "description": "string",
          "name": "string",
          "privacy": "string",
          "slug": "string"
        }
      },
      "membership_status": true,
      "new_message_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_Endpoint-get-groups-messages-ID">Endpoint-get-groups-messages-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-groups-messages-id"></a>
<a id="schema_Endpoint-get-groups-messages-ID"></a>
<a id="tocSendpoint-get-groups-messages-id"></a>
<a id="tocsendpoint-get-groups-messages-id"></a>

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "group": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "moderated": {
        "deleted_status": true
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Group_message](#schemagroup_message)]|false|none|none|

<h2 id="tocS_Endpoint-get-groups-messages-ID-metadata">Endpoint-get-groups-messages-ID-metadata</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-groups-messages-id-metadata"></a>
<a id="schema_Endpoint-get-groups-messages-ID-metadata"></a>
<a id="tocSendpoint-get-groups-messages-id-metadata"></a>
<a id="tocsendpoint-get-groups-messages-id-metadata"></a>

```json
{
  "data": [
    {
      "app": {
        "about": {
          "description": "string",
          "name": "string",
          "website": {
            "thumbshot": "string",
            "url": "http://example.com"
          }
        },
        "id": 0,
        "legal": {
          "privacy_url": "http://example.com",
          "tos_url": "http://example.com"
        }
      },
      "content": {
        "key": "string",
        "value": "string"
      },
      "id": 0,
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "settings": {
        "privacy": "string"
      },
      "status": {
        "last_updated_timestamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Group_message_data](#schemagroup_message_data)]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-groups-messages-ID-metadata-collections">Endpoint-get-groups-messages-ID-metadata-collections</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-groups-messages-id-metadata-collections"></a>
<a id="schema_Endpoint-get-groups-messages-ID-metadata-collections"></a>
<a id="tocSendpoint-get-groups-messages-id-metadata-collections"></a>
<a id="tocsendpoint-get-groups-messages-id-metadata-collections"></a>

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_Endpoint-get-groups-statuses">Endpoint-get-groups-statuses</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-groups-statuses"></a>
<a id="schema_Endpoint-get-groups-statuses"></a>
<a id="tocSendpoint-get-groups-statuses"></a>
<a id="tocsendpoint-get-groups-statuses"></a>

```json
{
  "data": [
    {
      "earliest_unseen_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "group": {
        "first_message": {
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "member_count": 0,
        "owner": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "properties": {
          "description": "string",
          "name": "string",
          "privacy": "string",
          "slug": "string"
        }
      },
      "new_message_count": 0
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-industries">Endpoint-get-industries</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-industries"></a>
<a id="schema_Endpoint-get-industries"></a>
<a id="tocSendpoint-get-industries"></a>
<a id="tocsendpoint-get-industries"></a>

```json
{
  "data": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|none|

<h2 id="tocS_Endpoint-get-markdown-emoticons">Endpoint-get-markdown-emoticons</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-markdown-emoticons"></a>
<a id="schema_Endpoint-get-markdown-emoticons"></a>
<a id="tocSendpoint-get-markdown-emoticons"></a>
<a id="tocsendpoint-get-markdown-emoticons"></a>

```json
{
  "data": [
    {
      "alt": "string",
      "emoticon": "string",
      "image": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_Endpoint-get-messages-ID">Endpoint-get-messages-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-messages-id"></a>
<a id="schema_Endpoint-get-messages-ID"></a>
<a id="tocSendpoint-get-messages-id"></a>
<a id="tocsendpoint-get-messages-id"></a>

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "conversation": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Message](#schemamessage)]|false|none|none|

<h2 id="tocS_Endpoint-get-messages-ID-metadata">Endpoint-get-messages-ID-metadata</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-messages-id-metadata"></a>
<a id="schema_Endpoint-get-messages-ID-metadata"></a>
<a id="tocSendpoint-get-messages-id-metadata"></a>
<a id="tocsendpoint-get-messages-id-metadata"></a>

```json
{
  "data": [
    {
      "app": {
        "about": {
          "description": "string",
          "name": "string",
          "website": {
            "thumbshot": "string",
            "url": "http://example.com"
          }
        },
        "id": 0,
        "legal": {
          "privacy_url": "http://example.com",
          "tos_url": "http://example.com"
        }
      },
      "content": {
        "key": "string",
        "value": "string"
      },
      "id": 0,
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "settings": {
        "privacy": "string"
      },
      "status": {
        "last_updated_timestamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Message_data](#schemamessage_data)]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-messages-ID-metadata-collections">Endpoint-get-messages-ID-metadata-collections</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-messages-id-metadata-collections"></a>
<a id="schema_Endpoint-get-messages-ID-metadata-collections"></a>
<a id="tocSendpoint-get-messages-id-metadata-collections"></a>
<a id="tocsendpoint-get-messages-id-metadata-collections"></a>

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_Endpoint-get-users">Endpoint-get-users</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-users"></a>
<a id="schema_Endpoint-get-users"></a>
<a id="tocSendpoint-get-users"></a>
<a id="tocsendpoint-get-users"></a>

```json
{
  "data": [
    {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-users--">Endpoint-get-users--</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-users--"></a>
<a id="schema_Endpoint-get-users--"></a>
<a id="tocSendpoint-get-users--"></a>
<a id="tocsendpoint-get-users--"></a>

```json
{
  "data": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "location": {
      "city": "string",
      "country": 0,
      "ip_address": "string",
      "latitude": "string",
      "longitude": "string",
      "region": "string"
    },
    "matching": {
      "goals": [
        "string"
      ],
      "interest_tags": [
        "string"
      ],
      "location_importance": "string",
      "targeted_industry": "string"
    },
    "profile": {
      "first_name": "string",
      "introduction": "string",
      "last_name": "string"
    },
    "settings": {
      "email": "string",
      "email_verified": true,
      "notifications": "string",
      "timezone": 0
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Me](#schemame)|false|none|none|

<h2 id="tocS_Endpoint-get-users-ID">Endpoint-get-users-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-users-id"></a>
<a id="schema_Endpoint-get-users-ID"></a>
<a id="tocSendpoint-get-users-id"></a>
<a id="tocsendpoint-get-users-id"></a>

```json
{
  "data": [
    {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|

<h2 id="tocS_Endpoint-get-users-ID-groups">Endpoint-get-users-ID-groups</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-users-id-groups"></a>
<a id="schema_Endpoint-get-users-ID-groups"></a>
<a id="tocSendpoint-get-users-id-groups"></a>
<a id="tocsendpoint-get-users-id-groups"></a>

```json
{
  "data": [
    {
      "first_message": {
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "member_count": 0,
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "properties": {
        "description": "string",
        "name": "string",
        "privacy": "string",
        "slug": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Group](#schemagroup)]|false|none|none|

<h2 id="tocS_Endpoint-get-users-ID-groups-messages">Endpoint-get-users-ID-groups-messages</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-users-id-groups-messages"></a>
<a id="schema_Endpoint-get-users-ID-groups-messages"></a>
<a id="tocSendpoint-get-users-id-groups-messages"></a>
<a id="tocsendpoint-get-users-id-groups-messages"></a>

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "group": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "moderated": {
        "deleted_status": true
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Group_message](#schemagroup_message)]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-users-ID-metadata">Endpoint-get-users-ID-metadata</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-users-id-metadata"></a>
<a id="schema_Endpoint-get-users-ID-metadata"></a>
<a id="tocSendpoint-get-users-id-metadata"></a>
<a id="tocsendpoint-get-users-id-metadata"></a>

```json
{
  "data": [
    {
      "app": {
        "about": {
          "description": "string",
          "name": "string",
          "website": {
            "thumbshot": "string",
            "url": "http://example.com"
          }
        },
        "id": 0,
        "legal": {
          "privacy_url": "http://example.com",
          "tos_url": "http://example.com"
        }
      },
      "content": {
        "key": "string",
        "value": "string"
      },
      "id": 0,
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "settings": {
        "privacy": "string"
      },
      "status": {
        "last_updated_timestamp": "1970-01-01T00:00:00Z"
      },
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User_data](#schemauser_data)]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-users-ID-metadata-collections">Endpoint-get-users-ID-metadata-collections</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-users-id-metadata-collections"></a>
<a id="schema_Endpoint-get-users-ID-metadata-collections"></a>
<a id="tocSendpoint-get-users-id-metadata-collections"></a>
<a id="tocsendpoint-get-users-id-metadata-collections"></a>

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_Endpoint-get-users-ID-positions">Endpoint-get-users-ID-positions</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-users-id-positions"></a>
<a id="schema_Endpoint-get-users-ID-positions"></a>
<a id="tocSendpoint-get-users-id-positions"></a>
<a id="tocsendpoint-get-users-id-positions"></a>

```json
{
  "data": [
    {
      "app": {
        "about": {
          "description": "string",
          "name": "string",
          "website": {
            "thumbshot": "string",
            "url": "http://example.com"
          }
        },
        "id": 0,
        "legal": {
          "privacy_url": "http://example.com",
          "tos_url": "http://example.com"
        }
      },
      "category": "string",
      "id": 0,
      "organization": {
        "industry": "string",
        "name": "string",
        "size": "string",
        "ticker": "string",
        "type": "string",
        "url": "http://example.com"
      },
      "role": {
        "end_date": "1970-01-01",
        "start_date": "1970-01-01",
        "summary": "string",
        "title": "string"
      },
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Position](#schemaposition)]|false|none|none|

<h2 id="tocS_Endpoint-get-users-ID-synergies">Endpoint-get-users-ID-synergies</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-users-id-synergies"></a>
<a id="schema_Endpoint-get-users-ID-synergies"></a>
<a id="tocSendpoint-get-users-id-synergies"></a>
<a id="tocsendpoint-get-users-id-synergies"></a>

```json
{
  "data": [
    {
      "additional": {
        "metadata_count": 0,
        "positions_count": 0
      },
      "conversation": {
        "first_message": {
          "author": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          },
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "user_a": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "user_b": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "match": {
        "algorithmic_match": true,
        "complementary_goals": [
          "string"
        ],
        "distance_away": {
          "miles": 0
        },
        "industry": {
          "complementary": true,
          "mutual_match": true,
          "similar": true
        },
        "mutual_connections": {
          "count": 0
        },
        "recommendation_strength": 0
      },
      "meet": {
        "payment": {
          "paypal": {
            "url": "http://example.com"
          }
        },
        "price_usd": 0
      },
      "relationship": {
        "existing_bubbled_conversation": true,
        "existing_conversation": true,
        "muted": true,
        "skipped": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_Endpoint-get-users-nearby">Endpoint-get-users-nearby</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-users-nearby"></a>
<a id="schema_Endpoint-get-users-nearby"></a>
<a id="tocSendpoint-get-users-nearby"></a>
<a id="tocsendpoint-get-users-nearby"></a>

```json
{
  "data": [
    {
      "distance_away": {
        "miles": 0
      },
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-get-webhooks">Endpoint-get-webhooks</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-get-webhooks"></a>
<a id="schema_Endpoint-get-webhooks"></a>
<a id="tocSendpoint-get-webhooks"></a>
<a id="tocsendpoint-get-webhooks"></a>

```json
{
  "data": [
    {
      "app": {
        "about": {
          "description": "string",
          "name": "string",
          "website": {
            "thumbshot": "string",
            "url": "http://example.com"
          }
        },
        "id": 0,
        "legal": {
          "privacy_url": "http://example.com",
          "tos_url": "http://example.com"
        }
      },
      "event": {
        "action": "string"
      },
      "id": 0,
      "name": "string",
      "object": {
        "id": 0,
        "type": "string"
      },
      "uri": "http://example.com",
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Webhook](#schemawebhook)]|false|none|none|

<h2 id="tocS_Endpoint-patch-conversations-ID-statuses">Endpoint-patch-conversations-ID-statuses</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-patch-conversations-id-statuses"></a>
<a id="schema_Endpoint-patch-conversations-ID-statuses"></a>
<a id="tocSendpoint-patch-conversations-id-statuses"></a>
<a id="tocsendpoint-patch-conversations-id-statuses"></a>

```json
{
  "data": {
    "archived_status": true,
    "conversation": {
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "user_a": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "user_b": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-patch-groups-ID">Endpoint-patch-groups-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-patch-groups-id"></a>
<a id="schema_Endpoint-patch-groups-ID"></a>
<a id="tocSendpoint-patch-groups-id"></a>
<a id="tocsendpoint-patch-groups-id"></a>

```json
{
  "data": {
    "first_message": {
      "timestamp": "1970-01-01T00:00:00Z"
    },
    "id": 0,
    "latest_message": {},
    "member_count": 0,
    "owner": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "properties": {
      "description": "string",
      "name": "string",
      "privacy": "string",
      "slug": "string"
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Group](#schemagroup)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-patch-groups-ID-memberships">Endpoint-patch-groups-ID-memberships</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-patch-groups-id-memberships"></a>
<a id="schema_Endpoint-patch-groups-ID-memberships"></a>
<a id="tocSendpoint-patch-groups-id-memberships"></a>
<a id="tocsendpoint-patch-groups-id-memberships"></a>

```json
{
  "data": [
    {
      "group": {
        "first_message": {
          "timestamp": "1970-01-01T00:00:00Z"
        },
        "id": 0,
        "latest_message": {},
        "member_count": 0,
        "owner": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "properties": {
          "description": "string",
          "name": "string",
          "privacy": "string",
          "slug": "string"
        }
      },
      "member": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "privileges": {
        "moderator": true
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-patch-positions-ID">Endpoint-patch-positions-ID</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-patch-positions-id"></a>
<a id="schema_Endpoint-patch-positions-ID"></a>
<a id="tocSendpoint-patch-positions-id"></a>
<a id="tocsendpoint-patch-positions-id"></a>

```json
{
  "data": {
    "app": {
      "about": {
        "description": "string",
        "name": "string",
        "website": {
          "thumbshot": "string",
          "url": "http://example.com"
        }
      },
      "id": 0,
      "legal": {
        "privacy_url": "http://example.com",
        "tos_url": "http://example.com"
      }
    },
    "category": "string",
    "id": 0,
    "organization": {
      "industry": "string",
      "name": "string",
      "size": "string",
      "ticker": "string",
      "type": "string",
      "url": "http://example.com"
    },
    "role": {
      "end_date": "1970-01-01",
      "start_date": "1970-01-01",
      "summary": "string",
      "title": "string"
    },
    "user": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Position](#schemaposition)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-patch-users--">Endpoint-patch-users--</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-patch-users--"></a>
<a id="schema_Endpoint-patch-users--"></a>
<a id="tocSendpoint-patch-users--"></a>
<a id="tocsendpoint-patch-users--"></a>

```json
{
  "data": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "location": {
      "city": "string",
      "country": 0,
      "ip_address": "string",
      "latitude": "string",
      "longitude": "string",
      "region": "string"
    },
    "matching": {
      "goals": [
        "string"
      ],
      "interest_tags": [
        "string"
      ],
      "location_importance": "string",
      "targeted_industry": "string"
    },
    "profile": {
      "first_name": "string",
      "introduction": "string",
      "last_name": "string"
    },
    "settings": {
      "email": "string",
      "email_verified": true,
      "notifications": "string",
      "timezone": 0
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Me](#schemame)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-patch-users-ID-synergies">Endpoint-patch-users-ID-synergies</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-patch-users-id-synergies"></a>
<a id="schema_Endpoint-patch-users-ID-synergies"></a>
<a id="tocSendpoint-patch-users-id-synergies"></a>
<a id="tocsendpoint-patch-users-id-synergies"></a>

```json
{
  "data": {
    "relationship": {
      "muted": true,
      "skipped": true
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-audiences-ID-memberships">Endpoint-post-audiences-ID-memberships</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-audiences-id-memberships"></a>
<a id="schema_Endpoint-post-audiences-ID-memberships"></a>
<a id="tocSendpoint-post-audiences-id-memberships"></a>
<a id="tocsendpoint-post-audiences-id-memberships"></a>

```json
{
  "data": {
    "audience": {
      "id": 0
    },
    "member": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-conversations-ID-messages">Endpoint-post-conversations-ID-messages</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-conversations-id-messages"></a>
<a id="schema_Endpoint-post-conversations-ID-messages"></a>
<a id="tocSendpoint-post-conversations-id-messages"></a>
<a id="tocsendpoint-post-conversations-id-messages"></a>

```json
{
  "data": {
    "author": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "conversation": {},
    "id": 0,
    "last_seen": {
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    },
    "text": {
      "parsed": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Message](#schemamessage)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-conversations-ID-schedules">Endpoint-post-conversations-ID-schedules</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-conversations-id-schedules"></a>
<a id="schema_Endpoint-post-conversations-ID-schedules"></a>
<a id="tocSendpoint-post-conversations-id-schedules"></a>
<a id="tocsendpoint-post-conversations-id-schedules"></a>

```json
{
  "data": [
    {
      "author_count": 0,
      "conversation_count": 0,
      "conversation_id": 0,
      "date": "1970-01-01",
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "last_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "message_count": 0,
      "my_message_count": 0,
      "navigation": {
        "earliest_date": "1970-01-01",
        "next_date": "1970-01-01",
        "previous_date": "1970-01-01"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-post-conversations-ID-searches">Endpoint-post-conversations-ID-searches</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-conversations-id-searches"></a>
<a id="schema_Endpoint-post-conversations-ID-searches"></a>
<a id="tocSendpoint-post-conversations-id-searches"></a>
<a id="tocsendpoint-post-conversations-id-searches"></a>

```json
{
  "data": [
    {
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "relevance": {
        "score": 0
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-post-conversations-schedules">Endpoint-post-conversations-schedules</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-conversations-schedules"></a>
<a id="schema_Endpoint-post-conversations-schedules"></a>
<a id="tocSendpoint-post-conversations-schedules"></a>
<a id="tocsendpoint-post-conversations-schedules"></a>

```json
{
  "data": [
    {
      "author_count": 0,
      "conversation_count": 0,
      "conversation_id": 0,
      "date": "1970-01-01",
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "last_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "message_count": 0,
      "my_message_count": 0,
      "navigation": {
        "earliest_date": "1970-01-01",
        "next_date": "1970-01-01",
        "previous_date": "1970-01-01"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-post-conversations-searches">Endpoint-post-conversations-searches</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-conversations-searches"></a>
<a id="schema_Endpoint-post-conversations-searches"></a>
<a id="tocSendpoint-post-conversations-searches"></a>
<a id="tocsendpoint-post-conversations-searches"></a>

```json
{
  "data": [
    {
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "relevance": {
        "score": 0
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-post-groups">Endpoint-post-groups</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-groups"></a>
<a id="schema_Endpoint-post-groups"></a>
<a id="tocSendpoint-post-groups"></a>
<a id="tocsendpoint-post-groups"></a>

```json
{
  "data": {
    "first_message": {
      "timestamp": "1970-01-01T00:00:00Z"
    },
    "id": 0,
    "latest_message": {},
    "member_count": 0,
    "owner": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "properties": {
      "description": "string",
      "name": "string",
      "privacy": "string",
      "slug": "string"
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Group](#schemagroup)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-groups-ID-memberships">Endpoint-post-groups-ID-memberships</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-groups-id-memberships"></a>
<a id="schema_Endpoint-post-groups-ID-memberships"></a>
<a id="tocSendpoint-post-groups-id-memberships"></a>
<a id="tocsendpoint-post-groups-id-memberships"></a>

```json
{
  "data": {
    "group": {
      "first_message": {
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "id": 0,
      "latest_message": {},
      "member_count": 0,
      "owner": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "properties": {
        "description": "string",
        "name": "string",
        "privacy": "string",
        "slug": "string"
      }
    },
    "member": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-groups-ID-messages">Endpoint-post-groups-ID-messages</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-groups-id-messages"></a>
<a id="schema_Endpoint-post-groups-ID-messages"></a>
<a id="tocSendpoint-post-groups-id-messages"></a>
<a id="tocsendpoint-post-groups-id-messages"></a>

```json
{
  "data": [
    {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "group": {},
      "id": 0,
      "last_seen": {
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      },
      "moderated": {
        "deleted_status": true
      },
      "text": {
        "parsed": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Group_message](#schemagroup_message)]|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-groups-ID-schedules">Endpoint-post-groups-ID-schedules</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-groups-id-schedules"></a>
<a id="schema_Endpoint-post-groups-ID-schedules"></a>
<a id="tocSendpoint-post-groups-id-schedules"></a>
<a id="tocsendpoint-post-groups-id-schedules"></a>

```json
{
  "data": [
    {
      "author_count": 0,
      "date": "1970-01-01",
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "group_count": 0,
      "group_id": 0,
      "last_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "message_count": 0,
      "my_message_count": 0,
      "navigation": {
        "earliest_date": "1970-01-01",
        "next_date": "1970-01-01",
        "previous_date": "1970-01-01"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-post-groups-messages-ID-metadata">Endpoint-post-groups-messages-ID-metadata</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-groups-messages-id-metadata"></a>
<a id="schema_Endpoint-post-groups-messages-ID-metadata"></a>
<a id="tocSendpoint-post-groups-messages-id-metadata"></a>
<a id="tocsendpoint-post-groups-messages-id-metadata"></a>

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-groups-messages-metadata-filters">Endpoint-post-groups-messages-metadata-filters</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-groups-messages-metadata-filters"></a>
<a id="schema_Endpoint-post-groups-messages-metadata-filters"></a>
<a id="tocSendpoint-post-groups-messages-metadata-filters"></a>
<a id="tocsendpoint-post-groups-messages-metadata-filters"></a>

```json
{
  "data": [
    {
      "matched_metadata": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-post-groups-schedules">Endpoint-post-groups-schedules</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-groups-schedules"></a>
<a id="schema_Endpoint-post-groups-schedules"></a>
<a id="tocSendpoint-post-groups-schedules"></a>
<a id="tocsendpoint-post-groups-schedules"></a>

```json
{
  "data": [
    {
      "author_count": 0,
      "date": "1970-01-01",
      "first_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "group_count": 0,
      "group_id": 0,
      "last_message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "group": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "moderated": {
          "deleted_status": true
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "message_count": 0,
      "my_message_count": 0,
      "navigation": {
        "earliest_date": "1970-01-01",
        "next_date": "1970-01-01",
        "previous_date": "1970-01-01"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-post-markdown">Endpoint-post-markdown</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-markdown"></a>
<a id="schema_Endpoint-post-markdown"></a>
<a id="tocSendpoint-post-markdown"></a>
<a id="tocsendpoint-post-markdown"></a>

```json
{
  "data": {
    "parsed": "string",
    "raw": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_Endpoint-post-messages-ID-metadata">Endpoint-post-messages-ID-metadata</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-messages-id-metadata"></a>
<a id="schema_Endpoint-post-messages-ID-metadata"></a>
<a id="tocSendpoint-post-messages-id-metadata"></a>
<a id="tocsendpoint-post-messages-id-metadata"></a>

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-messages-metadata-filters">Endpoint-post-messages-metadata-filters</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-messages-metadata-filters"></a>
<a id="schema_Endpoint-post-messages-metadata-filters"></a>
<a id="tocSendpoint-post-messages-metadata-filters"></a>
<a id="tocsendpoint-post-messages-metadata-filters"></a>

```json
{
  "data": [
    {
      "matched_metadata": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "message": {
        "author": {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        },
        "conversation": {},
        "id": 0,
        "last_seen": {
          "timestamp": "1970-01-01T00:00:00Z",
          "user": {
            "business_card": {
              "company_name": "string",
              "company_size": "string",
              "headline": "string",
              "industry": "string",
              "interest_tags": [
                "string"
              ],
              "job_position": "string",
              "summary": "string",
              "website": {
                "thumbshot_uri": "http://example.com",
                "url": "http://example.com"
              }
            },
            "community_persona": {
              "id": 0,
              "identity": {
                "avatar_uri": "http://example.com",
                "badge": "string",
                "profile_url": "http://example.com",
                "username": "string"
              },
              "location": {
                "free_form": "string"
              },
              "personal": {
                "about_me": "string",
                "birthday": "string",
                "interests": "string",
                "pc_specs": "string"
              },
              "signature": {
                "parsed": "string",
                "raw": "string"
              },
              "stats": {
                "answered_count": 0,
                "endorsements_count": 0,
                "posts_count": 0,
                "reputation_count": 0
              }
            },
            "id": 0,
            "profile": {
              "first_name": "string",
              "last_name": "string"
            },
            "usage": {
              "available_status": true,
              "joined_timestamp": "1970-01-01T00:00:00Z",
              "last_activity_timestamp": "1970-01-01T00:00:00Z",
              "online_status": true
            }
          }
        },
        "text": {
          "parsed": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-post-positions">Endpoint-post-positions</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-positions"></a>
<a id="schema_Endpoint-post-positions"></a>
<a id="tocSendpoint-post-positions"></a>
<a id="tocsendpoint-post-positions"></a>

```json
{
  "data": {
    "app": {
      "about": {
        "description": "string",
        "name": "string",
        "website": {
          "thumbshot": "string",
          "url": "http://example.com"
        }
      },
      "id": 0,
      "legal": {
        "privacy_url": "http://example.com",
        "tos_url": "http://example.com"
      }
    },
    "category": "string",
    "id": 0,
    "organization": {
      "industry": "string",
      "name": "string",
      "size": "string",
      "ticker": "string",
      "type": "string",
      "url": "http://example.com"
    },
    "role": {
      "end_date": "1970-01-01",
      "start_date": "1970-01-01",
      "summary": "string",
      "title": "string"
    },
    "user": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Position](#schemaposition)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-users-ID-messages">Endpoint-post-users-ID-messages</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-users-id-messages"></a>
<a id="schema_Endpoint-post-users-ID-messages"></a>
<a id="tocSendpoint-post-users-id-messages"></a>
<a id="tocsendpoint-post-users-id-messages"></a>

```json
{
  "data": {
    "author": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "conversation": {},
    "id": 0,
    "last_seen": {
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    },
    "text": {
      "parsed": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Message](#schemamessage)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-users-ID-metadata">Endpoint-post-users-ID-metadata</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-users-id-metadata"></a>
<a id="schema_Endpoint-post-users-ID-metadata"></a>
<a id="tocSendpoint-post-users-id-metadata"></a>
<a id="tocsendpoint-post-users-id-metadata"></a>

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-users-invites">Endpoint-post-users-invites</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-users-invites"></a>
<a id="schema_Endpoint-post-users-invites"></a>
<a id="tocSendpoint-post-users-invites"></a>
<a id="tocsendpoint-post-users-invites"></a>

```json
{
  "data": {
    "discovered": {
      "users": [
        {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      ]
    },
    "emailed": {
      "emails": [
        "string"
      ]
    },
    "existing": {
      "conversations": [
        {
          "business_card": {
            "company_name": "string",
            "company_size": "string",
            "headline": "string",
            "industry": "string",
            "interest_tags": [
              "string"
            ],
            "job_position": "string",
            "summary": "string",
            "website": {
              "thumbshot_uri": "http://example.com",
              "url": "http://example.com"
            }
          },
          "community_persona": {
            "id": 0,
            "identity": {
              "avatar_uri": "http://example.com",
              "badge": "string",
              "profile_url": "http://example.com",
              "username": "string"
            },
            "location": {
              "free_form": "string"
            },
            "personal": {
              "about_me": "string",
              "birthday": "string",
              "interests": "string",
              "pc_specs": "string"
            },
            "signature": {
              "parsed": "string",
              "raw": "string"
            },
            "stats": {
              "answered_count": 0,
              "endorsements_count": 0,
              "posts_count": 0,
              "reputation_count": 0
            }
          },
          "id": 0,
          "profile": {
            "first_name": "string",
            "last_name": "string"
          },
          "usage": {
            "available_status": true,
            "joined_timestamp": "1970-01-01T00:00:00Z",
            "last_activity_timestamp": "1970-01-01T00:00:00Z",
            "online_status": true
          }
        }
      ]
    },
    "invalid": {
      "emails": [
        "string"
      ]
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Endpoint-post-users-metadata-filters">Endpoint-post-users-metadata-filters</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-users-metadata-filters"></a>
<a id="schema_Endpoint-post-users-metadata-filters"></a>
<a id="tocSendpoint-post-users-metadata-filters"></a>
<a id="tocsendpoint-post-users-metadata-filters"></a>

```json
{
  "data": [
    {
      "matched_metadata": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-post-users-searches">Endpoint-post-users-searches</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-users-searches"></a>
<a id="schema_Endpoint-post-users-searches"></a>
<a id="tocSendpoint-post-users-searches"></a>
<a id="tocsendpoint-post-users-searches"></a>

```json
{
  "data": [
    {
      "relevance": {
        "score": 0
      },
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    }
  ],
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total_records": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|[Api-pagination](#schemaapi-pagination)|false|none|none|

<h2 id="tocS_Endpoint-post-webhooks">Endpoint-post-webhooks</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-post-webhooks"></a>
<a id="schema_Endpoint-post-webhooks"></a>
<a id="tocSendpoint-post-webhooks"></a>
<a id="tocsendpoint-post-webhooks"></a>

```json
{
  "data": {
    "app": {
      "about": {
        "description": "string",
        "name": "string",
        "website": {
          "thumbshot": "string",
          "url": "http://example.com"
        }
      },
      "id": 0,
      "legal": {
        "privacy_url": "http://example.com",
        "tos_url": "http://example.com"
      }
    },
    "event": {
      "action": "string"
    },
    "id": 0,
    "name": "string",
    "object": {
      "id": 0,
      "type": "string"
    },
    "uri": "http://example.com",
    "user": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Webhook](#schemawebhook)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "first_message": {
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "id": 0,
  "latest_message": {
    "author": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "group": {},
    "id": 0,
    "last_seen": {
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    },
    "moderated": {
      "deleted_status": true
    },
    "text": {
      "parsed": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "member_count": 0,
  "owner": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  },
  "properties": {
    "description": "string",
    "name": "string",
    "privacy": "string",
    "slug": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_message|object|false|none|none|
|id|number(int32)|true|none|none|
|latest_message|[Group_message](#schemagroup_message)|false|none|none|
|member_count|number(int32)|false|none|none|
|owner|[User](#schemauser)|false|none|none|
|properties|object|false|none|none|

<h2 id="tocS_Group_message">Group_message</h2>
<!-- backwards compatibility -->
<a id="schemagroup_message"></a>
<a id="schema_Group_message"></a>
<a id="tocSgroup_message"></a>
<a id="tocsgroup_message"></a>

```json
{
  "author": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  },
  "group": {
    "first_message": {
      "timestamp": "1970-01-01T00:00:00Z"
    },
    "id": 0,
    "latest_message": {},
    "member_count": 0,
    "owner": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "properties": {
      "description": "string",
      "name": "string",
      "privacy": "string",
      "slug": "string"
    }
  },
  "id": 0,
  "last_seen": {
    "timestamp": "1970-01-01T00:00:00Z",
    "user": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "moderated": {
    "deleted_status": true
  },
  "text": {
    "parsed": "string"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[User](#schemauser)|false|none|none|
|group|[Group](#schemagroup)|false|none|none|
|id|number(int32)|true|none|none|
|last_seen|object|false|none|none|
|moderated|object|false|none|none|
|text|object|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_Group_message_data">Group_message_data</h2>
<!-- backwards compatibility -->
<a id="schemagroup_message_data"></a>
<a id="schema_Group_message_data"></a>
<a id="tocSgroup_message_data"></a>
<a id="tocsgroup_message_data"></a>

```json
{
  "app": {
    "about": {
      "description": "string",
      "name": "string",
      "website": {
        "thumbshot": "string",
        "url": "http://example.com"
      }
    },
    "id": 0,
    "legal": {
      "privacy_url": "http://example.com",
      "tos_url": "http://example.com"
    }
  },
  "content": {
    "key": "string",
    "value": "string"
  },
  "id": 0,
  "message": {
    "author": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "group": {},
    "id": 0,
    "last_seen": {
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    },
    "moderated": {
      "deleted_status": true
    },
    "text": {
      "parsed": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "owner": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  },
  "settings": {
    "privacy": "string"
  },
  "status": {
    "last_updated_timestamp": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|false|none|none|
|content|object|false|none|none|
|id|number(int32)|true|none|none|
|message|[Group_message](#schemagroup_message)|false|none|none|
|owner|[User](#schemauser)|false|none|none|
|settings|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_Me">Me</h2>
<!-- backwards compatibility -->
<a id="schemame"></a>
<a id="schema_Me"></a>
<a id="tocSme"></a>
<a id="tocsme"></a>

```json
{
  "business_card": {
    "company_name": "string",
    "company_size": "string",
    "headline": "string",
    "industry": "string",
    "interest_tags": [
      "string"
    ],
    "job_position": "string",
    "summary": "string",
    "website": {
      "thumbshot_uri": "http://example.com",
      "url": "http://example.com"
    }
  },
  "community_persona": {
    "id": 0,
    "identity": {
      "avatar_uri": "http://example.com",
      "badge": "string",
      "profile_url": "http://example.com",
      "username": "string"
    },
    "location": {
      "free_form": "string"
    },
    "personal": {
      "about_me": "string",
      "birthday": "string",
      "interests": "string",
      "pc_specs": "string"
    },
    "signature": {
      "parsed": "string",
      "raw": "string"
    },
    "stats": {
      "answered_count": 0,
      "endorsements_count": 0,
      "posts_count": 0,
      "reputation_count": 0
    }
  },
  "id": 0,
  "location": {
    "city": "string",
    "country": 0,
    "ip_address": "string",
    "latitude": "string",
    "longitude": "string",
    "region": "string"
  },
  "matching": {
    "goals": [
      "string"
    ],
    "interest_tags": [
      "string"
    ],
    "location_importance": "string",
    "targeted_industry": "string"
  },
  "profile": {
    "first_name": "string",
    "introduction": "string",
    "last_name": "string"
  },
  "settings": {
    "email": "string",
    "email_verified": true,
    "notifications": "string",
    "timezone": 0
  },
  "usage": {
    "available_status": true,
    "joined_timestamp": "1970-01-01T00:00:00Z",
    "last_activity_timestamp": "1970-01-01T00:00:00Z",
    "online_status": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_card|object|false|none|none|
|community_persona|[Member](#schemamember)|false|none|none|
|id|number(int32)|true|none|none|
|location|object|false|none|none|
|matching|object|false|none|none|
|profile|object|false|none|none|
|settings|object|false|none|none|
|usage|object|false|none|none|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "id": 0,
  "identity": {
    "avatar_uri": "http://example.com",
    "badge": "string",
    "profile_url": "http://example.com",
    "username": "string"
  },
  "location": {
    "free_form": "string"
  },
  "personal": {
    "about_me": "string",
    "birthday": "string",
    "interests": "string",
    "pc_specs": "string"
  },
  "signature": {
    "parsed": "string",
    "raw": "string"
  },
  "stats": {
    "answered_count": 0,
    "endorsements_count": 0,
    "posts_count": 0,
    "reputation_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number(int32)|true|none|none|
|identity|object|false|none|none|
|location|object|false|none|none|
|personal|object|false|none|none|
|signature|object|false|none|none|
|stats|object|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "author": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  },
  "conversation": {
    "first_message": {
      "author": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      },
      "timestamp": "1970-01-01T00:00:00Z"
    },
    "id": 0,
    "latest_message": {},
    "user_a": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "user_b": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "id": 0,
  "last_seen": {
    "timestamp": "1970-01-01T00:00:00Z",
    "user": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    }
  },
  "text": {
    "parsed": "string"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[User](#schemauser)|false|none|none|
|conversation|[Conversation](#schemaconversation)|false|none|none|
|id|number(int32)|true|none|none|
|last_seen|object|false|none|none|
|text|object|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_Message_data">Message_data</h2>
<!-- backwards compatibility -->
<a id="schemamessage_data"></a>
<a id="schema_Message_data"></a>
<a id="tocSmessage_data"></a>
<a id="tocsmessage_data"></a>

```json
{
  "app": {
    "about": {
      "description": "string",
      "name": "string",
      "website": {
        "thumbshot": "string",
        "url": "http://example.com"
      }
    },
    "id": 0,
    "legal": {
      "privacy_url": "http://example.com",
      "tos_url": "http://example.com"
    }
  },
  "content": {
    "key": "string",
    "value": "string"
  },
  "id": 0,
  "message": {
    "author": {
      "business_card": {
        "company_name": "string",
        "company_size": "string",
        "headline": "string",
        "industry": "string",
        "interest_tags": [
          "string"
        ],
        "job_position": "string",
        "summary": "string",
        "website": {
          "thumbshot_uri": "http://example.com",
          "url": "http://example.com"
        }
      },
      "community_persona": {
        "id": 0,
        "identity": {
          "avatar_uri": "http://example.com",
          "badge": "string",
          "profile_url": "http://example.com",
          "username": "string"
        },
        "location": {
          "free_form": "string"
        },
        "personal": {
          "about_me": "string",
          "birthday": "string",
          "interests": "string",
          "pc_specs": "string"
        },
        "signature": {
          "parsed": "string",
          "raw": "string"
        },
        "stats": {
          "answered_count": 0,
          "endorsements_count": 0,
          "posts_count": 0,
          "reputation_count": 0
        }
      },
      "id": 0,
      "profile": {
        "first_name": "string",
        "last_name": "string"
      },
      "usage": {
        "available_status": true,
        "joined_timestamp": "1970-01-01T00:00:00Z",
        "last_activity_timestamp": "1970-01-01T00:00:00Z",
        "online_status": true
      }
    },
    "conversation": {},
    "id": 0,
    "last_seen": {
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "business_card": {
          "company_name": "string",
          "company_size": "string",
          "headline": "string",
          "industry": "string",
          "interest_tags": [
            "string"
          ],
          "job_position": "string",
          "summary": "string",
          "website": {
            "thumbshot_uri": "http://example.com",
            "url": "http://example.com"
          }
        },
        "community_persona": {
          "id": 0,
          "identity": {
            "avatar_uri": "http://example.com",
            "badge": "string",
            "profile_url": "http://example.com",
            "username": "string"
          },
          "location": {
            "free_form": "string"
          },
          "personal": {
            "about_me": "string",
            "birthday": "string",
            "interests": "string",
            "pc_specs": "string"
          },
          "signature": {
            "parsed": "string",
            "raw": "string"
          },
          "stats": {
            "answered_count": 0,
            "endorsements_count": 0,
            "posts_count": 0,
            "reputation_count": 0
          }
        },
        "id": 0,
        "profile": {
          "first_name": "string",
          "last_name": "string"
        },
        "usage": {
          "available_status": true,
          "joined_timestamp": "1970-01-01T00:00:00Z",
          "last_activity_timestamp": "1970-01-01T00:00:00Z",
          "online_status": true
        }
      }
    },
    "text": {
      "parsed": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "owner": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  },
  "settings": {
    "privacy": "string"
  },
  "status": {
    "last_updated_timestamp": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|false|none|none|
|content|object|false|none|none|
|id|number(int32)|true|none|none|
|message|[Message](#schemamessage)|false|none|none|
|owner|[User](#schemauser)|false|none|none|
|settings|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
{
  "app": {
    "about": {
      "description": "string",
      "name": "string",
      "website": {
        "thumbshot": "string",
        "url": "http://example.com"
      }
    },
    "id": 0,
    "legal": {
      "privacy_url": "http://example.com",
      "tos_url": "http://example.com"
    }
  },
  "category": "string",
  "id": 0,
  "organization": {
    "industry": "string",
    "name": "string",
    "size": "string",
    "ticker": "string",
    "type": "string",
    "url": "http://example.com"
  },
  "role": {
    "end_date": "1970-01-01",
    "start_date": "1970-01-01",
    "summary": "string",
    "title": "string"
  },
  "user": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|false|none|none|
|category|string|false|none|none|
|id|number(int32)|true|none|none|
|organization|object|false|none|none|
|role|object|false|none|none|
|user|[User](#schemauser)|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "business_card": {
    "company_name": "string",
    "company_size": "string",
    "headline": "string",
    "industry": "string",
    "interest_tags": [
      "string"
    ],
    "job_position": "string",
    "summary": "string",
    "website": {
      "thumbshot_uri": "http://example.com",
      "url": "http://example.com"
    }
  },
  "community_persona": {
    "id": 0,
    "identity": {
      "avatar_uri": "http://example.com",
      "badge": "string",
      "profile_url": "http://example.com",
      "username": "string"
    },
    "location": {
      "free_form": "string"
    },
    "personal": {
      "about_me": "string",
      "birthday": "string",
      "interests": "string",
      "pc_specs": "string"
    },
    "signature": {
      "parsed": "string",
      "raw": "string"
    },
    "stats": {
      "answered_count": 0,
      "endorsements_count": 0,
      "posts_count": 0,
      "reputation_count": 0
    }
  },
  "id": 0,
  "profile": {
    "first_name": "string",
    "last_name": "string"
  },
  "usage": {
    "available_status": true,
    "joined_timestamp": "1970-01-01T00:00:00Z",
    "last_activity_timestamp": "1970-01-01T00:00:00Z",
    "online_status": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_card|object|false|none|none|
|community_persona|[Member](#schemamember)|false|none|none|
|id|number(int32)|true|none|none|
|profile|object|false|none|none|
|usage|object|false|none|none|

<h2 id="tocS_User_data">User_data</h2>
<!-- backwards compatibility -->
<a id="schemauser_data"></a>
<a id="schema_User_data"></a>
<a id="tocSuser_data"></a>
<a id="tocsuser_data"></a>

```json
{
  "app": {
    "about": {
      "description": "string",
      "name": "string",
      "website": {
        "thumbshot": "string",
        "url": "http://example.com"
      }
    },
    "id": 0,
    "legal": {
      "privacy_url": "http://example.com",
      "tos_url": "http://example.com"
    }
  },
  "content": {
    "key": "string",
    "value": "string"
  },
  "id": 0,
  "owner": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  },
  "settings": {
    "privacy": "string"
  },
  "status": {
    "last_updated_timestamp": "1970-01-01T00:00:00Z"
  },
  "user": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|false|none|none|
|content|object|false|none|none|
|id|number(int32)|true|none|none|
|owner|[User](#schemauser)|false|none|none|
|settings|object|false|none|none|
|status|object|false|none|none|
|user|[User](#schemauser)|false|none|none|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "app": {
    "about": {
      "description": "string",
      "name": "string",
      "website": {
        "thumbshot": "string",
        "url": "http://example.com"
      }
    },
    "id": 0,
    "legal": {
      "privacy_url": "http://example.com",
      "tos_url": "http://example.com"
    }
  },
  "event": {
    "action": "string"
  },
  "id": 0,
  "name": "string",
  "object": {
    "id": 0,
    "type": "string"
  },
  "uri": "http://example.com",
  "user": {
    "business_card": {
      "company_name": "string",
      "company_size": "string",
      "headline": "string",
      "industry": "string",
      "interest_tags": [
        "string"
      ],
      "job_position": "string",
      "summary": "string",
      "website": {
        "thumbshot_uri": "http://example.com",
        "url": "http://example.com"
      }
    },
    "community_persona": {
      "id": 0,
      "identity": {
        "avatar_uri": "http://example.com",
        "badge": "string",
        "profile_url": "http://example.com",
        "username": "string"
      },
      "location": {
        "free_form": "string"
      },
      "personal": {
        "about_me": "string",
        "birthday": "string",
        "interests": "string",
        "pc_specs": "string"
      },
      "signature": {
        "parsed": "string",
        "raw": "string"
      },
      "stats": {
        "answered_count": 0,
        "endorsements_count": 0,
        "posts_count": 0,
        "reputation_count": 0
      }
    },
    "id": 0,
    "profile": {
      "first_name": "string",
      "last_name": "string"
    },
    "usage": {
      "available_status": true,
      "joined_timestamp": "1970-01-01T00:00:00Z",
      "last_activity_timestamp": "1970-01-01T00:00:00Z",
      "online_status": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|false|none|none|
|event|object|false|none|none|
|id|number(int32)|true|none|none|
|name|string|false|none|none|
|object|object|false|none|none|
|uri|string(uri)|false|none|none|
|user|[User](#schemauser)|false|none|none|
