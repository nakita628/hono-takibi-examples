<h1 id="motaword-api">MotaWord API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use MotaWord API to post and track your translation projects.

Base URLs:

* <a href="https://api.motaword.com">https://api.motaword.com</a>

* <a href="https://sandbox.motaword.com">https://sandbox.motaword.com</a>

* <a href="http://localhost">http://localhost</a>

<a href="https://www.motaword.com/developer">External documentation</a>

# Authentication

- HTTP Authentication, scheme: basic

- oAuth2 authentication. OAuth2 authentication, Client Credentials flow.

    - Flow: authorizationCode
    - Authorization URL = [/token](/token)
    - Token URL = [/token](/token)
    - Refresh URL = [/token](/token)

|Scope|Scope Description|
|---|---|
|default|default|
|privileged|privileged|

    - Flow: clientCredentials
    - Token URL = [/token](/token)

|Scope|Scope Description|
|---|---|
|default|default|
|privileged|privileged|

    - Flow: password
    - Token URL = [/token](/token)
    - Refresh URL = [/token](/token)

|Scope|Scope Description|
|---|---|
|default|default|
|privileged|privileged|

<h1 id="motaword-api-static">Static</h1>

## Available endpoints

<a id="opIdgetEndpoints"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json'
```

`GET /`

The root endpoint will provide you with an OpenAPI definition of MotaWord API.


> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="available-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|YAML representation of our OpenAPI definition.|Inline|
|default|Default|Authentication error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List of supported file formats

<a id="opIdgetFormats"></a>

> Code samples

```bash
curl https://example.com/formats \
  -H 'Accept: application/json'
```

`GET /formats`

Get a list of supported formats for documents, style guides and extensions.


> Example responses

> 200 Response

```json
{}
```

<h3 id="list-of-supported-file-formats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of supported formats|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List of supported languages

<a id="opIdgetLanguages"></a>

> Code samples

```bash
curl https://example.com/languages \
  -H 'Accept: application/json'
```

`GET /languages`

Get a list of supported languages

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "name": "string"
  }
]
```

<h3 id="list-of-supported-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of supported languages|Inline|

<h3 id="list-of-supported-languages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Language](#schemalanguage)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## OpenAPI YAML representation of our API

<a id="opIdgetSwaggerYaml"></a>

> Code samples

```bash
curl https://example.com/swagger \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /swagger`

Get Swagger YAML

<h3 id="openapi-yaml-representation-of-our-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Swagger YAML|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-async">Async</h1>

## Download result of an async operation

<a id="opIddownloadAsync"></a>

> Code samples

```bash
curl 'https://example.com/async/download?async_request_key=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /async/download`

Download the result of an async operation that you have requested in other endpoints.

<h3 id="download-result-of-an-async-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|async_request_key|query|string|true|Async operation key|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-result-of-an-async-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File|Inline|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-blog">Blog</h1>

## Get blog posts - ordered by created desc by default

<a id="opIdgetBlogPosts"></a>

> Code samples

```bash
curl https://example.com/blogs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /blogs`

<h3 id="get-blog-posts---ordered-by-created-desc-by-default-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|Article language, default `en`. When no blog article is available and `fallback=true` is specified, it falls back to `en`.|
|fallback|query|boolean|false|When `true`, and no article is found in the locale, it falls back to `locale=en`.|
|page|query|integer(int64)|false|none|
|per_page|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "articles": [
    {
      "announcement_type": "article",
      "author": "string",
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "excerpt": "string",
      "id": 0,
      "language": "string",
      "links": {
        "self": {
          "href": "string"
        },
        "android": {
          "href": "string"
        },
        "header_image": {
          "href": "string"
        },
        "ios": {
          "href": "string"
        },
        "web": {
          "href": "string"
        }
      },
      "slug": "string",
      "title": "string",
      "topic": "string"
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

<h3 id="get-blog-posts---ordered-by-created-desc-by-default-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of blog articles|[BlogArticleList](#schemablogarticlelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-default">Default</h1>

## Clear cache by key

<a id="opIddeleteCache"></a>

> Code samples

```bash
curl https://example.com/cache/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cache/{key}`

<h3 id="clear-cache-by-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|Cache key|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="clear-cache-by-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation status|[OperationStatus](#schemaoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-commission">Commission</h1>

## Returns a commission list of current client.

<a id="opIdgetCommissions"></a>

> Code samples

```bash
curl https://example.com/commissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /commissions`

> Example responses

> 200 Response

```json
{
  "commissions": [
    {
      "amount": {
        "amount": 0,
        "currency": "usd"
      },
      "date": "1970-01-01T00:00:00Z",
      "project": {
        "average_scores": {
          "property1": 0,
          "property2": 0
        },
        "budget_code": "string",
        "callback_url": "string",
        "can_pam_manage": true,
        "client": {
          "billing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string",
            "name": ""
          },
          "birthday": "1970-01-01",
          "can_work_manual_files": true,
          "city": "string",
          "client": {
            "corporate": {
              "email": "string",
              "id": 0,
              "logo": "string",
              "name": "string",
              "phone_number": "string"
            },
            "nps": 0,
            "subjects": {
              "property1": 0,
              "property2": 0
            }
          },
          "corporate_id": 0,
          "country": "string",
          "created_at": 0,
          "do_not_contact": true,
          "email": "string",
          "first_name": "string",
          "has_pwd": true,
          "id": 0,
          "is_client": true,
          "is_developer": true,
          "is_proofreader": true,
          "is_prospect": true,
          "is_sales_person": true,
          "is_vendor": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "last_name": "string",
          "last_seen_online_at": 0,
          "links": {
            "self": {
              "href": "string"
            },
            "login_as": {
              "href": "string"
            },
            "projects": {
              "href": "string"
            },
            "responsivity": {
              "href": "string"
            },
            "stats": {
              "href": "string"
            }
          },
          "locale": "string",
          "mailing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string"
          },
          "name": "string",
          "native_language": "string",
          "nps": 0,
          "phone_number": "string",
          "profile_picture_path": "string",
          "social_media": {
            "facebook_url": "string",
            "linkedIn_url": "string",
            "twitter_url": "string"
          },
          "state": "string",
          "status": "string",
          "street": "string",
          "timezone": "string",
          "tms_user_name": "string",
          "user_groups": [
            {
              "corporate_id": 0,
              "id": 0,
              "name": "string",
              "permissions": [
                "string"
              ]
            }
          ],
          "vendor": {
            "can_work_manual_files": true,
            "email_open_rate": 0,
            "is_frozen": true,
            "is_proofreader": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "native_language": "string",
            "pam_tqs": 0,
            "paypal_email": "string",
            "profile_survey": {
              "current_services": "string",
              "daily_proofreading_capacity": "string",
              "daily_translation_capacity": "string",
              "dtp_software": "string",
              "experience": "string",
              "is_certified_translator": "string",
              "is_sworn_translator": "string",
              "memoq": "string",
              "memsource": "string",
              "omegat": "string",
              "proofreader_experience": "string",
              "provides_creative_writing_service": "string",
              "provides_postedit_service": "string",
              "reference": "string",
              "sdl_trados": "string",
              "skype_id": "string",
              "smartcat": "string",
              "smartling": "string",
              "software": "string",
              "specialization": "string",
              "subtitle_edit": "string",
              "subtitle_workshop": "string",
              "translator_association": "string",
              "transsuite_2000": "string",
              "vendor_profile_lsp": "string",
              "wordbee": "string",
              "wordfast": "string",
              "work_type": "string",
              "work_with": "string",
              "working_as": "string",
              "working_timezone": "string",
              "xbench": "string",
              "xtm": "string"
            },
            "require_1099": true,
            "tags": [
              "string"
            ],
            "tms_user_name": "string",
            "vendor_type": "string"
          },
          "zip_code": "string"
        },
        "cm_id": 0,
        "completed_on": "1970-01-01T00:00:00Z",
        "continuous_project_type": "string",
        "created_at": 0,
        "custom": {},
        "delivery_at": 0,
        "errors": [
          {
            "code": "string",
            "help": "string",
            "http_code": 0,
            "message": "string"
          }
        ],
        "id": 0,
        "is_api_project": true,
        "is_certified": true,
        "is_continuous": true,
        "is_manual": true,
        "links": {
          "self": {
            "href": "string"
          },
          "documents": {
            "href": "string"
          },
          "glossaries": {
            "href": "string"
          },
          "payment": {
            "href": "string"
          },
          "quote-pdf": {
            "href": "string"
          },
          "styleguides": {
            "href": "string"
          }
        },
        "pairs": [
          {
            "currency": "usd",
            "is_proofreader": true,
            "proofreader": {
              "billing": {
                "city": "string",
                "country": "string",
                "phone": "string",
                "state": "string",
                "street": "string",
                "zip": "string",
                "name": ""
              },
              "birthday": "1970-01-01",
              "can_work_manual_files": true,
              "city": "string",
              "client": {
                "corporate": {
                  "email": "string",
                  "id": 0,
                  "logo": "string",
                  "name": "string",
                  "phone_number": "string"
                },
                "nps": 0,
                "subjects": {
                  "property1": 0,
                  "property2": 0
                }
              },
              "corporate_id": 0,
              "country": "string",
              "created_at": 0,
              "do_not_contact": true,
              "email": "string",
              "first_name": "string",
              "has_pwd": true,
              "id": 0,
              "is_client": true,
              "is_developer": true,
              "is_proofreader": true,
              "is_prospect": true,
              "is_sales_person": true,
              "is_vendor": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "last_name": "string",
              "last_seen_online_at": 0,
              "links": {
                "self": {
                  "href": "string"
                },
                "login_as": {
                  "href": "string"
                },
                "projects": {
                  "href": "string"
                },
                "responsivity": {
                  "href": "string"
                },
                "stats": {
                  "href": "string"
                }
              },
              "locale": "string",
              "mailing": {
                "city": "string",
                "country": "string",
                "phone": "string",
                "state": "string",
                "street": "string",
                "zip": "string"
              },
              "name": "string",
              "native_language": "string",
              "nps": 0,
              "phone_number": "string",
              "profile_picture_path": "string",
              "social_media": {
                "facebook_url": "string",
                "linkedIn_url": "string",
                "twitter_url": "string"
              },
              "state": "string",
              "status": "string",
              "street": "string",
              "timezone": "string",
              "tms_user_name": "string",
              "user_groups": [
                {
                  "corporate_id": 0,
                  "id": 0,
                  "name": "string",
                  "permissions": [
                    "string"
                  ]
                }
              ],
              "vendor": {
                "can_work_manual_files": true,
                "email_open_rate": 0,
                "is_frozen": true,
                "is_proofreader": true,
                "language_pairs": [
                  {
                    "source_language": "string",
                    "target_language": "string"
                  }
                ],
                "native_language": "string",
                "pam_tqs": 0,
                "paypal_email": "string",
                "profile_survey": {
                  "current_services": "string",
                  "daily_proofreading_capacity": "string",
                  "daily_translation_capacity": "string",
                  "dtp_software": "string",
                  "experience": "string",
                  "is_certified_translator": "string",
                  "is_sworn_translator": "string",
                  "memoq": "string",
                  "memsource": "string",
                  "omegat": "string",
                  "proofreader_experience": "string",
                  "provides_creative_writing_service": "string",
                  "provides_postedit_service": "string",
                  "reference": "string",
                  "sdl_trados": "string",
                  "skype_id": "string",
                  "smartcat": "string",
                  "smartling": "string",
                  "software": "string",
                  "specialization": "string",
                  "subtitle_edit": "string",
                  "subtitle_workshop": "string",
                  "translator_association": "string",
                  "transsuite_2000": "string",
                  "vendor_profile_lsp": "string",
                  "wordbee": "string",
                  "wordfast": "string",
                  "work_type": "string",
                  "work_with": "string",
                  "working_as": "string",
                  "working_timezone": "string",
                  "xbench": "string",
                  "xtm": "string"
                },
                "require_1099": true,
                "tags": [
                  "string"
                ],
                "tms_user_name": "string",
                "vendor_type": "string"
              },
              "zip_code": "string"
            },
            "proofreading_rate": 0,
            "source_language": "string",
            "target_language": "string",
            "translation_rate": 0
          }
        ],
        "pivoted_projects": [
          0
        ],
        "price": {
          "amount": 0,
          "base_amount": 0,
          "base_currency": "usd",
          "currency": "usd",
          "usd_amount": 0
        },
        "price_without_discount": {
          "amount": 0,
          "base_amount": 0,
          "base_currency": "usd",
          "currency": "usd",
          "usd_amount": 0
        },
        "role": "translator",
        "should_send_client_survey": true,
        "source": "api",
        "source_language": "string",
        "status": "pending",
        "subjects": [
          "string"
        ],
        "target_languages": [
          "string"
        ],
        "tms_name": "string",
        "valid_until": 0,
        "vendor_word_count": 0,
        "word_count": 0,
        "word_count_analysis": {
          "base": 0,
          "duplicate": 0,
          "exclusion": 0,
          "final": 0,
          "tm": 0
        }
      },
      "status": "completed"
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="returns-a-commission-list-of-current-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Commissions for client.|[CommissionList](#schemacommissionlist)|
|401|Unauthorized|UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Returns a commission list of current client.

<a id="opIdgetCommissionsByFilter"></a>

> Code samples

```bash
curl https://example.com/commissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "budget_code": "string",
    "date_from": "1970-01-01T00:00:00Z",
    "date_to": "1970-01-01T00:00:00Z",
    "source_languages": [
      "string"
    ],
    "target_languages": [
      "string"
    ],
    "users": [
      0
    ]
  }'
```

`POST /commissions`

> Body parameter

```json
{
  "budget_code": "string",
  "date_from": "1970-01-01T00:00:00Z",
  "date_to": "1970-01-01T00:00:00Z",
  "source_languages": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "users": [
    0
  ]
}
```

<h3 id="returns-a-commission-list-of-current-client-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportFilter](#schemareportfilter)|false|none|
|» budget_code|body|string|false|budget code filter. valid for corporate accounts only.|
|» date_from|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» date_to|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» source_languages|body|[string]|false|List of source language codes.|
|» target_languages|body|[string]|false|List of target language codes.|
|» users|body|[integer(int64)]|false|List of corporate user IDs. Valid for corporate accounts only.|

> Example responses

> 200 Response

```json
{
  "commissions": [
    {
      "amount": {
        "amount": 0,
        "currency": "usd"
      },
      "date": "1970-01-01T00:00:00Z",
      "project": {
        "average_scores": {
          "property1": 0,
          "property2": 0
        },
        "budget_code": "string",
        "callback_url": "string",
        "can_pam_manage": true,
        "client": {
          "billing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string",
            "name": ""
          },
          "birthday": "1970-01-01",
          "can_work_manual_files": true,
          "city": "string",
          "client": {
            "corporate": {
              "email": "string",
              "id": 0,
              "logo": "string",
              "name": "string",
              "phone_number": "string"
            },
            "nps": 0,
            "subjects": {
              "property1": 0,
              "property2": 0
            }
          },
          "corporate_id": 0,
          "country": "string",
          "created_at": 0,
          "do_not_contact": true,
          "email": "string",
          "first_name": "string",
          "has_pwd": true,
          "id": 0,
          "is_client": true,
          "is_developer": true,
          "is_proofreader": true,
          "is_prospect": true,
          "is_sales_person": true,
          "is_vendor": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "last_name": "string",
          "last_seen_online_at": 0,
          "links": {
            "self": {
              "href": "string"
            },
            "login_as": {
              "href": "string"
            },
            "projects": {
              "href": "string"
            },
            "responsivity": {
              "href": "string"
            },
            "stats": {
              "href": "string"
            }
          },
          "locale": "string",
          "mailing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string"
          },
          "name": "string",
          "native_language": "string",
          "nps": 0,
          "phone_number": "string",
          "profile_picture_path": "string",
          "social_media": {
            "facebook_url": "string",
            "linkedIn_url": "string",
            "twitter_url": "string"
          },
          "state": "string",
          "status": "string",
          "street": "string",
          "timezone": "string",
          "tms_user_name": "string",
          "user_groups": [
            {
              "corporate_id": 0,
              "id": 0,
              "name": "string",
              "permissions": [
                "string"
              ]
            }
          ],
          "vendor": {
            "can_work_manual_files": true,
            "email_open_rate": 0,
            "is_frozen": true,
            "is_proofreader": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "native_language": "string",
            "pam_tqs": 0,
            "paypal_email": "string",
            "profile_survey": {
              "current_services": "string",
              "daily_proofreading_capacity": "string",
              "daily_translation_capacity": "string",
              "dtp_software": "string",
              "experience": "string",
              "is_certified_translator": "string",
              "is_sworn_translator": "string",
              "memoq": "string",
              "memsource": "string",
              "omegat": "string",
              "proofreader_experience": "string",
              "provides_creative_writing_service": "string",
              "provides_postedit_service": "string",
              "reference": "string",
              "sdl_trados": "string",
              "skype_id": "string",
              "smartcat": "string",
              "smartling": "string",
              "software": "string",
              "specialization": "string",
              "subtitle_edit": "string",
              "subtitle_workshop": "string",
              "translator_association": "string",
              "transsuite_2000": "string",
              "vendor_profile_lsp": "string",
              "wordbee": "string",
              "wordfast": "string",
              "work_type": "string",
              "work_with": "string",
              "working_as": "string",
              "working_timezone": "string",
              "xbench": "string",
              "xtm": "string"
            },
            "require_1099": true,
            "tags": [
              "string"
            ],
            "tms_user_name": "string",
            "vendor_type": "string"
          },
          "zip_code": "string"
        },
        "cm_id": 0,
        "completed_on": "1970-01-01T00:00:00Z",
        "continuous_project_type": "string",
        "created_at": 0,
        "custom": {},
        "delivery_at": 0,
        "errors": [
          {
            "code": "string",
            "help": "string",
            "http_code": 0,
            "message": "string"
          }
        ],
        "id": 0,
        "is_api_project": true,
        "is_certified": true,
        "is_continuous": true,
        "is_manual": true,
        "links": {
          "self": {
            "href": "string"
          },
          "documents": {
            "href": "string"
          },
          "glossaries": {
            "href": "string"
          },
          "payment": {
            "href": "string"
          },
          "quote-pdf": {
            "href": "string"
          },
          "styleguides": {
            "href": "string"
          }
        },
        "pairs": [
          {
            "currency": "usd",
            "is_proofreader": true,
            "proofreader": {
              "billing": {
                "city": "string",
                "country": "string",
                "phone": "string",
                "state": "string",
                "street": "string",
                "zip": "string",
                "name": ""
              },
              "birthday": "1970-01-01",
              "can_work_manual_files": true,
              "city": "string",
              "client": {
                "corporate": {
                  "email": "string",
                  "id": 0,
                  "logo": "string",
                  "name": "string",
                  "phone_number": "string"
                },
                "nps": 0,
                "subjects": {
                  "property1": 0,
                  "property2": 0
                }
              },
              "corporate_id": 0,
              "country": "string",
              "created_at": 0,
              "do_not_contact": true,
              "email": "string",
              "first_name": "string",
              "has_pwd": true,
              "id": 0,
              "is_client": true,
              "is_developer": true,
              "is_proofreader": true,
              "is_prospect": true,
              "is_sales_person": true,
              "is_vendor": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "last_name": "string",
              "last_seen_online_at": 0,
              "links": {
                "self": {
                  "href": "string"
                },
                "login_as": {
                  "href": "string"
                },
                "projects": {
                  "href": "string"
                },
                "responsivity": {
                  "href": "string"
                },
                "stats": {
                  "href": "string"
                }
              },
              "locale": "string",
              "mailing": {
                "city": "string",
                "country": "string",
                "phone": "string",
                "state": "string",
                "street": "string",
                "zip": "string"
              },
              "name": "string",
              "native_language": "string",
              "nps": 0,
              "phone_number": "string",
              "profile_picture_path": "string",
              "social_media": {
                "facebook_url": "string",
                "linkedIn_url": "string",
                "twitter_url": "string"
              },
              "state": "string",
              "status": "string",
              "street": "string",
              "timezone": "string",
              "tms_user_name": "string",
              "user_groups": [
                {
                  "corporate_id": 0,
                  "id": 0,
                  "name": "string",
                  "permissions": [
                    "string"
                  ]
                }
              ],
              "vendor": {
                "can_work_manual_files": true,
                "email_open_rate": 0,
                "is_frozen": true,
                "is_proofreader": true,
                "language_pairs": [
                  {
                    "source_language": "string",
                    "target_language": "string"
                  }
                ],
                "native_language": "string",
                "pam_tqs": 0,
                "paypal_email": "string",
                "profile_survey": {
                  "current_services": "string",
                  "daily_proofreading_capacity": "string",
                  "daily_translation_capacity": "string",
                  "dtp_software": "string",
                  "experience": "string",
                  "is_certified_translator": "string",
                  "is_sworn_translator": "string",
                  "memoq": "string",
                  "memsource": "string",
                  "omegat": "string",
                  "proofreader_experience": "string",
                  "provides_creative_writing_service": "string",
                  "provides_postedit_service": "string",
                  "reference": "string",
                  "sdl_trados": "string",
                  "skype_id": "string",
                  "smartcat": "string",
                  "smartling": "string",
                  "software": "string",
                  "specialization": "string",
                  "subtitle_edit": "string",
                  "subtitle_workshop": "string",
                  "translator_association": "string",
                  "transsuite_2000": "string",
                  "vendor_profile_lsp": "string",
                  "wordbee": "string",
                  "wordfast": "string",
                  "work_type": "string",
                  "work_with": "string",
                  "working_as": "string",
                  "working_timezone": "string",
                  "xbench": "string",
                  "xtm": "string"
                },
                "require_1099": true,
                "tags": [
                  "string"
                ],
                "tms_user_name": "string",
                "vendor_type": "string"
              },
              "zip_code": "string"
            },
            "proofreading_rate": 0,
            "source_language": "string",
            "target_language": "string",
            "translation_rate": 0
          }
        ],
        "pivoted_projects": [
          0
        ],
        "price": {
          "amount": 0,
          "base_amount": 0,
          "base_currency": "usd",
          "currency": "usd",
          "usd_amount": 0
        },
        "price_without_discount": {
          "amount": 0,
          "base_amount": 0,
          "base_currency": "usd",
          "currency": "usd",
          "usd_amount": 0
        },
        "role": "translator",
        "should_send_client_survey": true,
        "source": "api",
        "source_language": "string",
        "status": "pending",
        "subjects": [
          "string"
        ],
        "target_languages": [
          "string"
        ],
        "tms_name": "string",
        "valid_until": 0,
        "vendor_word_count": 0,
        "word_count": 0,
        "word_count_analysis": {
          "base": 0,
          "duplicate": 0,
          "exclusion": 0,
          "final": 0,
          "tm": 0
        }
      },
      "status": "completed"
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="returns-a-commission-list-of-current-client-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Commissions for client.|[CommissionList](#schemacommissionlist)|
|401|Unauthorized|UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-continuousproject">ContinuousProject</h1>

## View continuous projects

<a id="opIdgetContinuousProjects"></a>

> Code samples

```bash
curl https://example.com/continuous_projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects`

View a list of continuous projects under your account. Continuous projects are those that are constantly updated, such as a CI/CD project, software project, website translation and such.

<h3 id="view-continuous-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string \| null|false|Type of continuous project.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|active|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "analytics_enabled": true,
      "auto_start_postedit": true,
      "created_at": "1970-01-01T00:00:00Z",
      "id": 0,
      "is_enabled": true,
      "last_activity_at": "1970-01-01T00:00:00Z",
      "links": {
        "self": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        }
      },
      "mt_enabled": true,
      "mt_engine": "string",
      "name": "string",
      "postedit_enabled": true,
      "source_language": "string",
      "status": "string",
      "subscription": {
        "downgrade": [
          "string"
        ],
        "payment_method": 0,
        "period_end": "1970-01-01T00:00:00Z",
        "plan_id": "string",
        "plan_name": "string",
        "price": "string",
        "products": [
          null
        ],
        "schedule_name": "string",
        "schedule_start": "1970-01-01T00:00:00Z",
        "subscription_id": "string",
        "upgrade": [
          "string"
        ],
        "withTrial": null
      },
      "target_languages": [
        "string"
      ],
      "type": "string",
      "word_count": 0
    }
  ]
}
```

<h3 id="view-continuous-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newly created continuous project|[ContinuousProjectsList](#schemacontinuousprojectslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Create a continuous project

<a id="opIdcreateContinuousProject"></a>

> Code samples

```bash
curl https://example.com/continuous_projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "analytics_enabled": true,
    "auto_start_postedit": true,
    "created_at": "1970-01-01T00:00:00Z",
    "id": 0,
    "is_enabled": true,
    "last_activity_at": "1970-01-01T00:00:00Z",
    "links": {
      "self": {
        "href": "string"
      },
      "editors": {
        "property1": {
          "href": "string"
        },
        "property2": {
          "href": "string"
        }
      }
    },
    "mt_enabled": true,
    "mt_engine": "string",
    "name": "string",
    "postedit_enabled": true,
    "source_language": "string",
    "status": "string",
    "subscription": {
      "downgrade": [
        "string"
      ],
      "payment_method": 0,
      "period_end": "1970-01-01T00:00:00Z",
      "plan_id": "string",
      "plan_name": "string",
      "price": "string",
      "products": [
        null
      ],
      "schedule_name": "string",
      "schedule_start": "1970-01-01T00:00:00Z",
      "subscription_id": "string",
      "upgrade": [
        "string"
      ],
      "withTrial": null
    },
    "target_languages": [
      "string"
    ],
    "type": "string",
    "word_count": 0
  }'
```

`POST /continuous_projects`

Create a new continuous project for your software, website, CI/CD translation needs.

> Body parameter

```json
{
  "analytics_enabled": true,
  "auto_start_postedit": true,
  "created_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "is_enabled": true,
  "last_activity_at": "1970-01-01T00:00:00Z",
  "links": {
    "self": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    }
  },
  "mt_enabled": true,
  "mt_engine": "string",
  "name": "string",
  "postedit_enabled": true,
  "source_language": "string",
  "status": "string",
  "subscription": {
    "downgrade": [
      "string"
    ],
    "payment_method": 0,
    "period_end": "1970-01-01T00:00:00Z",
    "plan_id": "string",
    "plan_name": "string",
    "price": "string",
    "products": [
      null
    ],
    "schedule_name": "string",
    "schedule_start": "1970-01-01T00:00:00Z",
    "subscription_id": "string",
    "upgrade": [
      "string"
    ],
    "withTrial": null
  },
  "target_languages": [
    "string"
  ],
  "type": "string",
  "word_count": 0
}
```

<h3 id="create-a-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContinuousProject](#schemacontinuousproject)|false|none|
|» analytics_enabled|body|boolean|false|Should we collect analytics data from Active for this continuous project?|
|» auto_start_postedit|body|boolean|false|Immediately start post-editing project for translation requests that are applied MT.|
|» created_at|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» id|body|integer(int64)|false|none|
|» is_enabled|body|boolean|false|none|
|» last_activity_at|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» links|body|[ContinuousProjectLinks](#schemacontinuousprojectlinks)|false|none|
|» mt_enabled|body|boolean|false|Immediately apply MT on translation requests if they are missing from TM.|
|» mt_engine|body|string|false|One of "MOTAWORD", "GOOGLE", "AMAZON", "MS". Default is "MOTAWORD".|
|» name|body|string|false|none|
|» postedit_enabled|body|boolean|false|Get an instant quote for translation requests that are applied MT.|
|» source_language|body|string|false|none|
|» status|body|string|false|One of "a => ACTIVE", "i => INACTIVE", "d => DELETED", "c => SCHEDULED CANCELLATION", "p => SCHEDULED CHANGE"|
|» subscription|body|[Subscription](#schemasubscription)|false|none|
|» target_languages|body|[string]|false|none|
|» type|body|string|false|Continuous project type. We currently have only 2 types, NULL and "active".|
|» word_count|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "analytics_enabled": true,
  "auto_start_postedit": true,
  "created_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "is_enabled": true,
  "last_activity_at": "1970-01-01T00:00:00Z",
  "links": {
    "self": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    }
  },
  "mt_enabled": true,
  "mt_engine": "string",
  "name": "string",
  "postedit_enabled": true,
  "source_language": "string",
  "status": "string",
  "subscription": {
    "downgrade": [
      "string"
    ],
    "payment_method": 0,
    "period_end": "1970-01-01T00:00:00Z",
    "plan_id": "string",
    "plan_name": "string",
    "price": "string",
    "products": [
      null
    ],
    "schedule_name": "string",
    "schedule_start": "1970-01-01T00:00:00Z",
    "subscription_id": "string",
    "upgrade": [
      "string"
    ],
    "withTrial": null
  },
  "target_languages": [
    "string"
  ],
  "type": "string",
  "word_count": 0
}
```

<h3 id="create-a-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newly created continuous project|[ContinuousProject](#schemacontinuousproject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View a continuous project

<a id="opIdgetContinuousProject"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{id}`

View the details of a continuous project.

<h3 id="view-a-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous Project ID|

> Example responses

> 200 Response

```json
{
  "analytics_enabled": true,
  "auto_start_postedit": true,
  "created_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "is_enabled": true,
  "last_activity_at": "1970-01-01T00:00:00Z",
  "links": {
    "self": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    }
  },
  "mt_enabled": true,
  "mt_engine": "string",
  "name": "string",
  "postedit_enabled": true,
  "source_language": "string",
  "status": "string",
  "subscription": {
    "downgrade": [
      "string"
    ],
    "payment_method": 0,
    "period_end": "1970-01-01T00:00:00Z",
    "plan_id": "string",
    "plan_name": "string",
    "price": "string",
    "products": [
      null
    ],
    "schedule_name": "string",
    "schedule_start": "1970-01-01T00:00:00Z",
    "subscription_id": "string",
    "upgrade": [
      "string"
    ],
    "withTrial": null
  },
  "target_languages": [
    "string"
  ],
  "type": "string",
  "word_count": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-a-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ContinuousProject model|[ContinuousProject](#schemacontinuousproject)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update a continuous project

<a id="opIdupdateContinuousProject"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "analytics_enabled": true,
    "auto_start_postedit": true,
    "is_enabled": true,
    "languages": [
      {
        "code": "string",
        "is_enabled": true
      }
    ],
    "mt_enabled": true,
    "name": "string",
    "postedit_enabled": true
  }'
```

`POST /continuous_projects/{id}`

Update the details and settings of continuous project.

> Body parameter

```json
{
  "analytics_enabled": true,
  "auto_start_postedit": true,
  "is_enabled": true,
  "languages": [
    {
      "code": "string",
      "is_enabled": true
    }
  ],
  "mt_enabled": true,
  "name": "string",
  "postedit_enabled": true
}
```

<h3 id="update-a-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|body|body|[ContinuousProjectUpdateContent](#schemacontinuousprojectupdatecontent)|false|none|
|» analytics_enabled|body|boolean|false|none|
|» auto_start_postedit|body|boolean|false|none|
|» is_enabled|body|boolean|false|none|
|» languages|body|[[ContinuousProjectLanguage](#schemacontinuousprojectlanguage)]|false|none|
|» mt_enabled|body|boolean|false|none|
|» name|body|string|false|none|
|» postedit_enabled|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "analytics_enabled": true,
  "auto_start_postedit": true,
  "created_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "is_enabled": true,
  "last_activity_at": "1970-01-01T00:00:00Z",
  "links": {
    "self": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    }
  },
  "mt_enabled": true,
  "mt_engine": "string",
  "name": "string",
  "postedit_enabled": true,
  "source_language": "string",
  "status": "string",
  "subscription": {
    "downgrade": [
      "string"
    ],
    "payment_method": 0,
    "period_end": "1970-01-01T00:00:00Z",
    "plan_id": "string",
    "plan_name": "string",
    "price": "string",
    "products": [
      null
    ],
    "schedule_name": "string",
    "schedule_start": "1970-01-01T00:00:00Z",
    "subscription_id": "string",
    "upgrade": [
      "string"
    ],
    "withTrial": null
  },
  "target_languages": [
    "string"
  ],
  "type": "string",
  "word_count": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-a-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update continuous project operation status|[ContinuousProject](#schemacontinuousproject)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Delete a continuous project

<a id="opIddeleteContinuousProject"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /continuous_projects/{id}`

Delete an existing continuous project. Your project will be cancelled, and you will still be charged for the amount of translations we have done for you so far.

<h3 id="delete-a-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-a-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Continuous project deleted successfully|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get JWT token to be used in analytics dashboards

<a id="opIdgetAnalyticsToken"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/analytics-token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{id}/analytics-token`

Get JWT token to be used in analytics dashboards

<h3 id="get-jwt-token-to-be-used-in-analytics-dashboards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|

> Example responses

> 200 Response

```json
{
  "jwt": "string"
}
```

<h3 id="get-jwt-token-to-be-used-in-analytics-dashboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JWT token result|[AnalyticsToken](#schemaanalyticstoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Save/collect analytics data from Active widget

<a id="opIdcollectAnalytics"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/collect-analytics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "anonymousId": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "sessionId": "string",
    "type": "string",
    "userId": "string"
  }'
```

`POST /continuous_projects/{id}/collect-analytics`

Save/collect analytics data from Active widget

> Body parameter

```json
{
  "anonymousId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "sessionId": "string",
  "type": "string",
  "userId": "string"
}
```

<h3 id="savecollect-analytics-data-from-active-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|body|body|[AnalyticsCollection](#schemaanalyticscollection)|false|none|
|» anonymousId|body|string|false|none|
|» properties|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» sessionId|body|string|false|none|
|» type|body|string|false|none|
|» userId|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="savecollect-analytics-data-from-active-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Analytics data collection result|[OperationStatus](#schemaoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Complete continuous project

<a id="opIdcomplete"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/complete \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /continuous_projects/{id}/complete`

Complete continuous project

<h3 id="complete-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="complete-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation status|[OperationStatus](#schemaoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get quote for documents

<a id="opIdgetQuoteForDocuments"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents/quote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "files": [
      0
    ]
  }'
```

`POST /continuous_projects/{id}/documents/quote`

Get a new quote for provided documents in continuous project

> Body parameter

```json
{
  "files": [
    0
  ]
}
```

<h3 id="get-quote-for-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|body|body|[GetQuotesForDocumentsBody](#schemagetquotesfordocumentsbody)|false|none|
|» files|body|[integer(int64)]|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "average_scores": {
        "property1": 0,
        "property2": 0
      },
      "budget_code": "string",
      "callback_url": "string",
      "can_pam_manage": true,
      "client": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "cm_id": 0,
      "completed_on": "1970-01-01T00:00:00Z",
      "continuous_project_type": "string",
      "created_at": 0,
      "custom": {},
      "delivery_at": 0,
      "errors": [
        {
          "code": "string",
          "help": "string",
          "http_code": 0,
          "message": "string"
        }
      ],
      "id": 0,
      "is_api_project": true,
      "is_certified": true,
      "is_continuous": true,
      "is_manual": true,
      "links": {
        "self": {
          "href": "string"
        },
        "documents": {
          "href": "string"
        },
        "glossaries": {
          "href": "string"
        },
        "payment": {
          "href": "string"
        },
        "quote-pdf": {
          "href": "string"
        },
        "styleguides": {
          "href": "string"
        }
      },
      "pairs": [
        {
          "currency": "usd",
          "is_proofreader": true,
          "proofreader": {
            "billing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string",
              "name": ""
            },
            "birthday": "1970-01-01",
            "can_work_manual_files": true,
            "city": "string",
            "client": {
              "corporate": {
                "email": "string",
                "id": 0,
                "logo": "string",
                "name": "string",
                "phone_number": "string"
              },
              "nps": 0,
              "subjects": {
                "property1": 0,
                "property2": 0
              }
            },
            "corporate_id": 0,
            "country": "string",
            "created_at": 0,
            "do_not_contact": true,
            "email": "string",
            "first_name": "string",
            "has_pwd": true,
            "id": 0,
            "is_client": true,
            "is_developer": true,
            "is_proofreader": true,
            "is_prospect": true,
            "is_sales_person": true,
            "is_vendor": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "last_name": "string",
            "last_seen_online_at": 0,
            "links": {
              "self": {
                "href": "string"
              },
              "login_as": {
                "href": "string"
              },
              "projects": {
                "href": "string"
              },
              "responsivity": {
                "href": "string"
              },
              "stats": {
                "href": "string"
              }
            },
            "locale": "string",
            "mailing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string"
            },
            "name": "string",
            "native_language": "string",
            "nps": 0,
            "phone_number": "string",
            "profile_picture_path": "string",
            "social_media": {
              "facebook_url": "string",
              "linkedIn_url": "string",
              "twitter_url": "string"
            },
            "state": "string",
            "status": "string",
            "street": "string",
            "timezone": "string",
            "tms_user_name": "string",
            "user_groups": [
              {
                "corporate_id": 0,
                "id": 0,
                "name": "string",
                "permissions": [
                  "string"
                ]
              }
            ],
            "vendor": {
              "can_work_manual_files": true,
              "email_open_rate": 0,
              "is_frozen": true,
              "is_proofreader": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "native_language": "string",
              "pam_tqs": 0,
              "paypal_email": "string",
              "profile_survey": {
                "current_services": "string",
                "daily_proofreading_capacity": "string",
                "daily_translation_capacity": "string",
                "dtp_software": "string",
                "experience": "string",
                "is_certified_translator": "string",
                "is_sworn_translator": "string",
                "memoq": "string",
                "memsource": "string",
                "omegat": "string",
                "proofreader_experience": "string",
                "provides_creative_writing_service": "string",
                "provides_postedit_service": "string",
                "reference": "string",
                "sdl_trados": "string",
                "skype_id": "string",
                "smartcat": "string",
                "smartling": "string",
                "software": "string",
                "specialization": "string",
                "subtitle_edit": "string",
                "subtitle_workshop": "string",
                "translator_association": "string",
                "transsuite_2000": "string",
                "vendor_profile_lsp": "string",
                "wordbee": "string",
                "wordfast": "string",
                "work_type": "string",
                "work_with": "string",
                "working_as": "string",
                "working_timezone": "string",
                "xbench": "string",
                "xtm": "string"
              },
              "require_1099": true,
              "tags": [
                "string"
              ],
              "tms_user_name": "string",
              "vendor_type": "string"
            },
            "zip_code": "string"
          },
          "proofreading_rate": 0,
          "source_language": "string",
          "target_language": "string",
          "translation_rate": 0
        }
      ],
      "pivoted_projects": [
        0
      ],
      "price": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "price_without_discount": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "role": "translator",
      "should_send_client_survey": true,
      "source": "api",
      "source_language": "string",
      "status": "pending",
      "subjects": [
        "string"
      ],
      "target_languages": [
        "string"
      ],
      "tms_name": "string",
      "valid_until": 0,
      "vendor_word_count": 0,
      "word_count": 0,
      "word_count_analysis": {
        "base": 0,
        "duplicate": 0,
        "exclusion": 0,
        "final": 0,
        "tm": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-quote-for-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newly created project|[ProjectList](#schemaprojectlist)|
|400|Bad Request|FileTooLarge FileTooSmall FileWasAlreadyUploaded|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedDocumentFormat UnsupportedStyleGuideFormat UnsupportedGlossaryFormat|[Error](#schemaerror)|
|406|Not Acceptable|UnsupportedLanguage TooManyGlossaries ProjectAlreadyHasGlossary|[Error](#schemaerror)|
|500|Internal Server Error|ProjectInsertFailed|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Complete a continuous project document

<a id="opIdcompleteContinuousDocument"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents/0/complete \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /continuous_projects/{id}/documents/{documentId}/complete`

Complete a continuous project document. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.

<h3 id="complete-a-continuous-project-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|documentId|path|integer(int64)|true|Document ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="complete-a-continuous-project-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation status|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|ProjectNotFound FileNotFound DocumentNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get a quote for a continuous project document

<a id="opIdgetQuoteForDocument"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents/0/quote \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /continuous_projects/{id}/documents/{documentId}/quote`

Get a new quote for provided document in continuous project. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.

<h3 id="get-a-quote-for-a-continuous-project-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|documentId|path|integer(int64)|true|Document ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "average_scores": {
        "property1": 0,
        "property2": 0
      },
      "budget_code": "string",
      "callback_url": "string",
      "can_pam_manage": true,
      "client": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "cm_id": 0,
      "completed_on": "1970-01-01T00:00:00Z",
      "continuous_project_type": "string",
      "created_at": 0,
      "custom": {},
      "delivery_at": 0,
      "errors": [
        {
          "code": "string",
          "help": "string",
          "http_code": 0,
          "message": "string"
        }
      ],
      "id": 0,
      "is_api_project": true,
      "is_certified": true,
      "is_continuous": true,
      "is_manual": true,
      "links": {
        "self": {
          "href": "string"
        },
        "documents": {
          "href": "string"
        },
        "glossaries": {
          "href": "string"
        },
        "payment": {
          "href": "string"
        },
        "quote-pdf": {
          "href": "string"
        },
        "styleguides": {
          "href": "string"
        }
      },
      "pairs": [
        {
          "currency": "usd",
          "is_proofreader": true,
          "proofreader": {
            "billing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string",
              "name": ""
            },
            "birthday": "1970-01-01",
            "can_work_manual_files": true,
            "city": "string",
            "client": {
              "corporate": {
                "email": "string",
                "id": 0,
                "logo": "string",
                "name": "string",
                "phone_number": "string"
              },
              "nps": 0,
              "subjects": {
                "property1": 0,
                "property2": 0
              }
            },
            "corporate_id": 0,
            "country": "string",
            "created_at": 0,
            "do_not_contact": true,
            "email": "string",
            "first_name": "string",
            "has_pwd": true,
            "id": 0,
            "is_client": true,
            "is_developer": true,
            "is_proofreader": true,
            "is_prospect": true,
            "is_sales_person": true,
            "is_vendor": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "last_name": "string",
            "last_seen_online_at": 0,
            "links": {
              "self": {
                "href": "string"
              },
              "login_as": {
                "href": "string"
              },
              "projects": {
                "href": "string"
              },
              "responsivity": {
                "href": "string"
              },
              "stats": {
                "href": "string"
              }
            },
            "locale": "string",
            "mailing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string"
            },
            "name": "string",
            "native_language": "string",
            "nps": 0,
            "phone_number": "string",
            "profile_picture_path": "string",
            "social_media": {
              "facebook_url": "string",
              "linkedIn_url": "string",
              "twitter_url": "string"
            },
            "state": "string",
            "status": "string",
            "street": "string",
            "timezone": "string",
            "tms_user_name": "string",
            "user_groups": [
              {
                "corporate_id": 0,
                "id": 0,
                "name": "string",
                "permissions": [
                  "string"
                ]
              }
            ],
            "vendor": {
              "can_work_manual_files": true,
              "email_open_rate": 0,
              "is_frozen": true,
              "is_proofreader": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "native_language": "string",
              "pam_tqs": 0,
              "paypal_email": "string",
              "profile_survey": {
                "current_services": "string",
                "daily_proofreading_capacity": "string",
                "daily_translation_capacity": "string",
                "dtp_software": "string",
                "experience": "string",
                "is_certified_translator": "string",
                "is_sworn_translator": "string",
                "memoq": "string",
                "memsource": "string",
                "omegat": "string",
                "proofreader_experience": "string",
                "provides_creative_writing_service": "string",
                "provides_postedit_service": "string",
                "reference": "string",
                "sdl_trados": "string",
                "skype_id": "string",
                "smartcat": "string",
                "smartling": "string",
                "software": "string",
                "specialization": "string",
                "subtitle_edit": "string",
                "subtitle_workshop": "string",
                "translator_association": "string",
                "transsuite_2000": "string",
                "vendor_profile_lsp": "string",
                "wordbee": "string",
                "wordfast": "string",
                "work_type": "string",
                "work_with": "string",
                "working_as": "string",
                "working_timezone": "string",
                "xbench": "string",
                "xtm": "string"
              },
              "require_1099": true,
              "tags": [
                "string"
              ],
              "tms_user_name": "string",
              "vendor_type": "string"
            },
            "zip_code": "string"
          },
          "proofreading_rate": 0,
          "source_language": "string",
          "target_language": "string",
          "translation_rate": 0
        }
      ],
      "pivoted_projects": [
        0
      ],
      "price": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "price_without_discount": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "role": "translator",
      "should_send_client_survey": true,
      "source": "api",
      "source_language": "string",
      "status": "pending",
      "subjects": [
        "string"
      ],
      "target_languages": [
        "string"
      ],
      "tms_name": "string",
      "valid_until": 0,
      "vendor_word_count": 0,
      "word_count": 0,
      "word_count_analysis": {
        "base": 0,
        "duplicate": 0,
        "exclusion": 0,
        "final": 0,
        "tm": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-a-quote-for-a-continuous-project-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newly created project|[ProjectList](#schemaprojectlist)|
|400|Bad Request|FileTooLarge FileTooSmall FileWasAlreadyUploaded|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedDocumentFormat UnsupportedStyleGuideFormat UnsupportedGlossaryFormat|[Error](#schemaerror)|
|406|Not Acceptable|UnsupportedLanguage TooManyGlossaries ProjectAlreadyHasGlossary|[Error](#schemaerror)|
|500|Internal Server Error|ProjectInsertFailed|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get quote for languages

<a id="opIdgetQuoteForLanguages"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/languages/quote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "languages": [
      "string"
    ]
  }'
```

`POST /continuous_projects/{id}/languages/quote`

Get a new quote for provided target languages in continuous project

> Body parameter

```json
{
  "languages": [
    "string"
  ]
}
```

<h3 id="get-quote-for-languages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|body|body|[GetQuotesForLanguagesBody](#schemagetquotesforlanguagesbody)|false|none|
|» languages|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "average_scores": {
        "property1": 0,
        "property2": 0
      },
      "budget_code": "string",
      "callback_url": "string",
      "can_pam_manage": true,
      "client": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "cm_id": 0,
      "completed_on": "1970-01-01T00:00:00Z",
      "continuous_project_type": "string",
      "created_at": 0,
      "custom": {},
      "delivery_at": 0,
      "errors": [
        {
          "code": "string",
          "help": "string",
          "http_code": 0,
          "message": "string"
        }
      ],
      "id": 0,
      "is_api_project": true,
      "is_certified": true,
      "is_continuous": true,
      "is_manual": true,
      "links": {
        "self": {
          "href": "string"
        },
        "documents": {
          "href": "string"
        },
        "glossaries": {
          "href": "string"
        },
        "payment": {
          "href": "string"
        },
        "quote-pdf": {
          "href": "string"
        },
        "styleguides": {
          "href": "string"
        }
      },
      "pairs": [
        {
          "currency": "usd",
          "is_proofreader": true,
          "proofreader": {
            "billing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string",
              "name": ""
            },
            "birthday": "1970-01-01",
            "can_work_manual_files": true,
            "city": "string",
            "client": {
              "corporate": {
                "email": "string",
                "id": 0,
                "logo": "string",
                "name": "string",
                "phone_number": "string"
              },
              "nps": 0,
              "subjects": {
                "property1": 0,
                "property2": 0
              }
            },
            "corporate_id": 0,
            "country": "string",
            "created_at": 0,
            "do_not_contact": true,
            "email": "string",
            "first_name": "string",
            "has_pwd": true,
            "id": 0,
            "is_client": true,
            "is_developer": true,
            "is_proofreader": true,
            "is_prospect": true,
            "is_sales_person": true,
            "is_vendor": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "last_name": "string",
            "last_seen_online_at": 0,
            "links": {
              "self": {
                "href": "string"
              },
              "login_as": {
                "href": "string"
              },
              "projects": {
                "href": "string"
              },
              "responsivity": {
                "href": "string"
              },
              "stats": {
                "href": "string"
              }
            },
            "locale": "string",
            "mailing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string"
            },
            "name": "string",
            "native_language": "string",
            "nps": 0,
            "phone_number": "string",
            "profile_picture_path": "string",
            "social_media": {
              "facebook_url": "string",
              "linkedIn_url": "string",
              "twitter_url": "string"
            },
            "state": "string",
            "status": "string",
            "street": "string",
            "timezone": "string",
            "tms_user_name": "string",
            "user_groups": [
              {
                "corporate_id": 0,
                "id": 0,
                "name": "string",
                "permissions": [
                  "string"
                ]
              }
            ],
            "vendor": {
              "can_work_manual_files": true,
              "email_open_rate": 0,
              "is_frozen": true,
              "is_proofreader": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "native_language": "string",
              "pam_tqs": 0,
              "paypal_email": "string",
              "profile_survey": {
                "current_services": "string",
                "daily_proofreading_capacity": "string",
                "daily_translation_capacity": "string",
                "dtp_software": "string",
                "experience": "string",
                "is_certified_translator": "string",
                "is_sworn_translator": "string",
                "memoq": "string",
                "memsource": "string",
                "omegat": "string",
                "proofreader_experience": "string",
                "provides_creative_writing_service": "string",
                "provides_postedit_service": "string",
                "reference": "string",
                "sdl_trados": "string",
                "skype_id": "string",
                "smartcat": "string",
                "smartling": "string",
                "software": "string",
                "specialization": "string",
                "subtitle_edit": "string",
                "subtitle_workshop": "string",
                "translator_association": "string",
                "transsuite_2000": "string",
                "vendor_profile_lsp": "string",
                "wordbee": "string",
                "wordfast": "string",
                "work_type": "string",
                "work_with": "string",
                "working_as": "string",
                "working_timezone": "string",
                "xbench": "string",
                "xtm": "string"
              },
              "require_1099": true,
              "tags": [
                "string"
              ],
              "tms_user_name": "string",
              "vendor_type": "string"
            },
            "zip_code": "string"
          },
          "proofreading_rate": 0,
          "source_language": "string",
          "target_language": "string",
          "translation_rate": 0
        }
      ],
      "pivoted_projects": [
        0
      ],
      "price": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "price_without_discount": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "role": "translator",
      "should_send_client_survey": true,
      "source": "api",
      "source_language": "string",
      "status": "pending",
      "subjects": [
        "string"
      ],
      "target_languages": [
        "string"
      ],
      "tms_name": "string",
      "valid_until": 0,
      "vendor_word_count": 0,
      "word_count": 0,
      "word_count_analysis": {
        "base": 0,
        "duplicate": 0,
        "exclusion": 0,
        "final": 0,
        "tm": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-quote-for-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newly created project|[ProjectList](#schemaprojectlist)|
|400|Bad Request|FileTooLarge FileTooSmall FileWasAlreadyUploaded|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedDocumentFormat UnsupportedStyleGuideFormat UnsupportedGlossaryFormat|[Error](#schemaerror)|
|406|Not Acceptable|UnsupportedLanguage TooManyGlossaries ProjectAlreadyHasGlossary|[Error](#schemaerror)|
|500|Internal Server Error|ProjectInsertFailed|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Complete continuous project language

<a id="opIdcompleteLanguage"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/languages/string/complete \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /continuous_projects/{id}/languages/{targetLanguage}/complete`

Complete continuous project language

<h3 id="complete-continuous-project-language-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|targetLanguage|path|string|true|Target language that you want to complete|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="complete-continuous-project-language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation status|[OperationStatus](#schemaoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get quote for language

<a id="opIdgetQuoteForLanguage"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/languages/string/quote \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /continuous_projects/{id}/languages/{targetLanguage}/quote`

Get a new quote for provided target language in continuous project

<h3 id="get-quote-for-language-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|targetLanguage|path|string|true|Target language that you want to complete|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "average_scores": {
        "property1": 0,
        "property2": 0
      },
      "budget_code": "string",
      "callback_url": "string",
      "can_pam_manage": true,
      "client": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "cm_id": 0,
      "completed_on": "1970-01-01T00:00:00Z",
      "continuous_project_type": "string",
      "created_at": 0,
      "custom": {},
      "delivery_at": 0,
      "errors": [
        {
          "code": "string",
          "help": "string",
          "http_code": 0,
          "message": "string"
        }
      ],
      "id": 0,
      "is_api_project": true,
      "is_certified": true,
      "is_continuous": true,
      "is_manual": true,
      "links": {
        "self": {
          "href": "string"
        },
        "documents": {
          "href": "string"
        },
        "glossaries": {
          "href": "string"
        },
        "payment": {
          "href": "string"
        },
        "quote-pdf": {
          "href": "string"
        },
        "styleguides": {
          "href": "string"
        }
      },
      "pairs": [
        {
          "currency": "usd",
          "is_proofreader": true,
          "proofreader": {
            "billing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string",
              "name": ""
            },
            "birthday": "1970-01-01",
            "can_work_manual_files": true,
            "city": "string",
            "client": {
              "corporate": {
                "email": "string",
                "id": 0,
                "logo": "string",
                "name": "string",
                "phone_number": "string"
              },
              "nps": 0,
              "subjects": {
                "property1": 0,
                "property2": 0
              }
            },
            "corporate_id": 0,
            "country": "string",
            "created_at": 0,
            "do_not_contact": true,
            "email": "string",
            "first_name": "string",
            "has_pwd": true,
            "id": 0,
            "is_client": true,
            "is_developer": true,
            "is_proofreader": true,
            "is_prospect": true,
            "is_sales_person": true,
            "is_vendor": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "last_name": "string",
            "last_seen_online_at": 0,
            "links": {
              "self": {
                "href": "string"
              },
              "login_as": {
                "href": "string"
              },
              "projects": {
                "href": "string"
              },
              "responsivity": {
                "href": "string"
              },
              "stats": {
                "href": "string"
              }
            },
            "locale": "string",
            "mailing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string"
            },
            "name": "string",
            "native_language": "string",
            "nps": 0,
            "phone_number": "string",
            "profile_picture_path": "string",
            "social_media": {
              "facebook_url": "string",
              "linkedIn_url": "string",
              "twitter_url": "string"
            },
            "state": "string",
            "status": "string",
            "street": "string",
            "timezone": "string",
            "tms_user_name": "string",
            "user_groups": [
              {
                "corporate_id": 0,
                "id": 0,
                "name": "string",
                "permissions": [
                  "string"
                ]
              }
            ],
            "vendor": {
              "can_work_manual_files": true,
              "email_open_rate": 0,
              "is_frozen": true,
              "is_proofreader": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "native_language": "string",
              "pam_tqs": 0,
              "paypal_email": "string",
              "profile_survey": {
                "current_services": "string",
                "daily_proofreading_capacity": "string",
                "daily_translation_capacity": "string",
                "dtp_software": "string",
                "experience": "string",
                "is_certified_translator": "string",
                "is_sworn_translator": "string",
                "memoq": "string",
                "memsource": "string",
                "omegat": "string",
                "proofreader_experience": "string",
                "provides_creative_writing_service": "string",
                "provides_postedit_service": "string",
                "reference": "string",
                "sdl_trados": "string",
                "skype_id": "string",
                "smartcat": "string",
                "smartling": "string",
                "software": "string",
                "specialization": "string",
                "subtitle_edit": "string",
                "subtitle_workshop": "string",
                "translator_association": "string",
                "transsuite_2000": "string",
                "vendor_profile_lsp": "string",
                "wordbee": "string",
                "wordfast": "string",
                "work_type": "string",
                "work_with": "string",
                "working_as": "string",
                "working_timezone": "string",
                "xbench": "string",
                "xtm": "string"
              },
              "require_1099": true,
              "tags": [
                "string"
              ],
              "tms_user_name": "string",
              "vendor_type": "string"
            },
            "zip_code": "string"
          },
          "proofreading_rate": 0,
          "source_language": "string",
          "target_language": "string",
          "translation_rate": 0
        }
      ],
      "pivoted_projects": [
        0
      ],
      "price": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "price_without_discount": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "role": "translator",
      "should_send_client_survey": true,
      "source": "api",
      "source_language": "string",
      "status": "pending",
      "subjects": [
        "string"
      ],
      "target_languages": [
        "string"
      ],
      "tms_name": "string",
      "valid_until": 0,
      "vendor_word_count": 0,
      "word_count": 0,
      "word_count_analysis": {
        "base": 0,
        "duplicate": 0,
        "exclusion": 0,
        "final": 0,
        "tm": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-quote-for-language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newly created project(s)|[ProjectList](#schemaprojectlist)|
|400|Bad Request|FileTooLarge FileTooSmall FileWasAlreadyUploaded|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedDocumentFormat UnsupportedStyleGuideFormat UnsupportedGlossaryFormat|[Error](#schemaerror)|
|406|Not Acceptable|UnsupportedLanguage TooManyGlossaries ProjectAlreadyHasGlossary|[Error](#schemaerror)|
|500|Internal Server Error|ProjectInsertFailed|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get subscription for continuous project

<a id="opIdgetSubscription"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/subscription \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{id}/subscription`

Get subscription for continuous project

<h3 id="get-subscription-for-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|

> Example responses

> 200 Response

```json
{
  "downgrade": [
    "string"
  ],
  "payment_method": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "plan_id": "string",
  "plan_name": "string",
  "price": "string",
  "products": [
    null
  ],
  "schedule_name": "string",
  "schedule_start": "1970-01-01T00:00:00Z",
  "subscription_id": "string",
  "upgrade": [
    "string"
  ],
  "withTrial": null
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-subscription-for-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get continuous project subscription|[Subscription](#schemasubscription)|
|400|Bad Request|MissingParameter|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update subscription for continuous project

<a id="opIdupdateSubscription"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/subscription \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "downgrade": [
      "string"
    ],
    "payment_method": 0,
    "period_end": "1970-01-01T00:00:00Z",
    "plan_id": "string",
    "plan_name": "string",
    "price": "string",
    "products": [
      null
    ],
    "schedule_name": "string",
    "schedule_start": "1970-01-01T00:00:00Z",
    "subscription_id": "string",
    "upgrade": [
      "string"
    ],
    "withTrial": null
  }'
```

`PUT /continuous_projects/{id}/subscription`

Update subscription for continuous project

> Body parameter

```json
{
  "downgrade": [
    "string"
  ],
  "payment_method": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "plan_id": "string",
  "plan_name": "string",
  "price": "string",
  "products": [
    null
  ],
  "schedule_name": "string",
  "schedule_start": "1970-01-01T00:00:00Z",
  "subscription_id": "string",
  "upgrade": [
    "string"
  ],
  "withTrial": null
}
```

<h3 id="update-subscription-for-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|body|body|[Subscription](#schemasubscription)|true|none|
|» downgrade|body|[string]|false|Stripe downgradable plan|
|» payment_method|body|integer|false|Stripe subscription plan payment card internal id|
|» period_end|body|string(date-time)|false|Stripe plan period end|
|» plan_id|body|string|false|Stripe subscription plan id|
|» plan_name|body|string|false|Stripe subscription plan name|
|» price|body|string|false|Stripe plan price|
|» products|body|[object]|false|none|
|» schedule_name|body|string|false|Stripe Scheduled plan period end|
|» schedule_start|body|string(date-time)|false|Stripe Scheduled start date|
|» subscription_id|body|string|false|Stripe subscription id for this project|
|» upgrade|body|[string]|false|Stripe upgradable plan|
|» withTrial|body|object(boolean)|false|Stripe plan trial|

> Example responses

> 200 Response

```json
{
  "downgrade": [
    "string"
  ],
  "payment_method": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "plan_id": "string",
  "plan_name": "string",
  "price": "string",
  "products": [
    null
  ],
  "schedule_name": "string",
  "schedule_start": "1970-01-01T00:00:00Z",
  "subscription_id": "string",
  "upgrade": [
    "string"
  ],
  "withTrial": null
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-subscription-for-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated continuous project subscription|[Subscription](#schemasubscription)|
|400|Bad Request|MissingParameter|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Create subscription for continuous project

<a id="opIdcreateSubscription"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/subscription \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "downgrade": [
      "string"
    ],
    "payment_method": 0,
    "period_end": "1970-01-01T00:00:00Z",
    "plan_id": "string",
    "plan_name": "string",
    "price": "string",
    "products": [
      null
    ],
    "schedule_name": "string",
    "schedule_start": "1970-01-01T00:00:00Z",
    "subscription_id": "string",
    "upgrade": [
      "string"
    ],
    "withTrial": null
  }'
```

`POST /continuous_projects/{id}/subscription`

Create subscription for continuous project

> Body parameter

```json
{
  "downgrade": [
    "string"
  ],
  "payment_method": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "plan_id": "string",
  "plan_name": "string",
  "price": "string",
  "products": [
    null
  ],
  "schedule_name": "string",
  "schedule_start": "1970-01-01T00:00:00Z",
  "subscription_id": "string",
  "upgrade": [
    "string"
  ],
  "withTrial": null
}
```

<h3 id="create-subscription-for-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|body|body|[Subscription](#schemasubscription)|true|none|
|» downgrade|body|[string]|false|Stripe downgradable plan|
|» payment_method|body|integer|false|Stripe subscription plan payment card internal id|
|» period_end|body|string(date-time)|false|Stripe plan period end|
|» plan_id|body|string|false|Stripe subscription plan id|
|» plan_name|body|string|false|Stripe subscription plan name|
|» price|body|string|false|Stripe plan price|
|» products|body|[object]|false|none|
|» schedule_name|body|string|false|Stripe Scheduled plan period end|
|» schedule_start|body|string(date-time)|false|Stripe Scheduled start date|
|» subscription_id|body|string|false|Stripe subscription id for this project|
|» upgrade|body|[string]|false|Stripe upgradable plan|
|» withTrial|body|object(boolean)|false|Stripe plan trial|

> Example responses

> 200 Response

```json
{
  "downgrade": [
    "string"
  ],
  "payment_method": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "plan_id": "string",
  "plan_name": "string",
  "price": "string",
  "products": [
    null
  ],
  "schedule_name": "string",
  "schedule_start": "1970-01-01T00:00:00Z",
  "subscription_id": "string",
  "upgrade": [
    "string"
  ],
  "withTrial": null
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="create-subscription-for-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newly created continuous project subscription|[Subscription](#schemasubscription)|
|400|Bad Request|MissingParameter|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Delete subscription for continuous project

<a id="opIddeleteSubscription"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/subscription \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /continuous_projects/{id}/subscription`

Delete subscription for continuous project

<h3 id="delete-subscription-for-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|

> Example responses

> 200 Response

```json
{
  "downgrade": [
    "string"
  ],
  "payment_method": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "plan_id": "string",
  "plan_name": "string",
  "price": "string",
  "products": [
    null
  ],
  "schedule_name": "string",
  "schedule_start": "1970-01-01T00:00:00Z",
  "subscription_id": "string",
  "upgrade": [
    "string"
  ],
  "withTrial": null
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-subscription-for-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete continuous project subscription|[Subscription](#schemasubscription)|
|400|Bad Request|MissingParameter|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update subscription payment method for continuous project

<a id="opIdupdateSubscriptionPaymentMethod"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/subscription/payment \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "downgrade": [
      "string"
    ],
    "payment_method": 0,
    "period_end": "1970-01-01T00:00:00Z",
    "plan_id": "string",
    "plan_name": "string",
    "price": "string",
    "products": [
      null
    ],
    "schedule_name": "string",
    "schedule_start": "1970-01-01T00:00:00Z",
    "subscription_id": "string",
    "upgrade": [
      "string"
    ],
    "withTrial": null
  }'
```

`PUT /continuous_projects/{id}/subscription/payment`

Update subscription payment method for continuous project

> Body parameter

```json
{
  "downgrade": [
    "string"
  ],
  "payment_method": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "plan_id": "string",
  "plan_name": "string",
  "price": "string",
  "products": [
    null
  ],
  "schedule_name": "string",
  "schedule_start": "1970-01-01T00:00:00Z",
  "subscription_id": "string",
  "upgrade": [
    "string"
  ],
  "withTrial": null
}
```

<h3 id="update-subscription-payment-method-for-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|body|body|[Subscription](#schemasubscription)|true|none|
|» downgrade|body|[string]|false|Stripe downgradable plan|
|» payment_method|body|integer|false|Stripe subscription plan payment card internal id|
|» period_end|body|string(date-time)|false|Stripe plan period end|
|» plan_id|body|string|false|Stripe subscription plan id|
|» plan_name|body|string|false|Stripe subscription plan name|
|» price|body|string|false|Stripe plan price|
|» products|body|[object]|false|none|
|» schedule_name|body|string|false|Stripe Scheduled plan period end|
|» schedule_start|body|string(date-time)|false|Stripe Scheduled start date|
|» subscription_id|body|string|false|Stripe subscription id for this project|
|» upgrade|body|[string]|false|Stripe upgradable plan|
|» withTrial|body|object(boolean)|false|Stripe plan trial|

> Example responses

> 200 Response

```json
{
  "downgrade": [
    "string"
  ],
  "payment_method": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "plan_id": "string",
  "plan_name": "string",
  "price": "string",
  "products": [
    null
  ],
  "schedule_name": "string",
  "schedule_start": "1970-01-01T00:00:00Z",
  "subscription_id": "string",
  "upgrade": [
    "string"
  ],
  "withTrial": null
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-subscription-payment-method-for-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated continuous project subscription|[Subscription](#schemasubscription)|
|400|Bad Request|MissingParameter|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Instantly translate your content

<a id="opIdtranslate"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/translate/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contents": [
      "string"
    ],
    "documents": [
      {
        "data": "string",
        "name": "string"
      }
    ],
    "filters": {
      "skipMt": [
        "string"
      ],
      "skipPostEdit": [
        "string"
      ]
    },
    "meta": {}
  }'
```

`POST /continuous_projects/{id}/translate/{targetLanguage}`

Instantly translate your content with your existing TM and MT resources. This is the primary endpoint to translate your files and content on the fly, especially in CI/CD environments. This is a complex endpoint that is configured in your Active or Continuous Project dashboards. For instance, you can configure whether to use your TM, or translate missing strings via MT and then post-edit those new translations. There are various scenarios you can establish via a set of configurations.

> Body parameter

```json
{
  "contents": [
    "string"
  ],
  "documents": [
    {
      "data": "string",
      "name": "string"
    }
  ],
  "filters": {
    "skipMt": [
      "string"
    ],
    "skipPostEdit": [
      "string"
    ]
  },
  "meta": {}
}
```

<h3 id="instantly-translate-your-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Continuous project ID|
|targetLanguage|path|string|true|Target language that you want to instantly translate your file into.|
|body|body|[InstantTranslationRequest](#schemainstanttranslationrequest)|false|none|
|» contents|body|[string]|false|Simple list of strings to be translated. You can also choose to upload files instead of strings.|
|» documents|body|[[FileAsData](#schemafileasdata)]|false|You can add as many files as you want in documents parameter.|
|» filters|body|[InstantTranslationFilter](#schemainstanttranslationfilter)|false|none|
|» meta|body|object|false|Free-form meta data to attach to your instant translation request. This can be used in statistics and analytical dashboards.|

> Example responses

> 200 Response

```json
{
  "results": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="instantly-translate-your-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Instant translation result. It may return a list of translated strings, or a list of translated files.|[InstantTranslationResult](#schemainstanttranslationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View continuous documents

<a id="opIdgetContinuousProjectDocuments"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{projectId}/documents`

View the documents under this continuous project

<h3 id="view-continuous-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous Project ID|
|filterByLanguage|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "documents": [
    {
      "billed_word_count": 0,
      "id": "string",
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "name": "string",
      "post_edit_enabled": true,
      "project_id": "string",
      "source_language": "string",
      "target_languages": [
        "string"
      ],
      "word_count": 0
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-continuous-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of continuous project document models|[ContinuousProjectDocumentList](#schemacontinuousprojectdocumentlist)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Add a new document to your continuous project

<a id="opIdaddDocument"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "document": {
      "data": "string",
      "name": "string"
    }
  }'
```

`POST /continuous_projects/{projectId}/documents`

Add a new document to your continuous project. If the name already exists, it will update the existing document. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.

> Body parameter

```json
{
  "document": {
    "data": "string",
    "name": "string"
  }
}
```

<h3 id="add-a-new-document-to-your-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous project ID|
|body|body|[AddOrUpdateDocumentRequest](#schemaaddorupdatedocumentrequest)|false|none|
|» document|body|[FileAsData](#schemafileasdata)|false|none|

> Example responses

> 200 Response

```json
{
  "billed_word_count": 0,
  "id": "string",
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "post_edit_enabled": true,
  "project_id": "string",
  "source_language": "string",
  "target_languages": [
    "string"
  ],
  "word_count": 0
}
```

<h3 id="add-a-new-document-to-your-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The newly added continuous project document object.|[ContinuousProjectDocument](#schemacontinuousprojectdocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get continuous project document progress for multiple IDs

<a id="opIdpostContinuousProjectDocumentProgress"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents/progress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documentName": "string",
    "filterByLanguage": "string"
  }'
```

`POST /continuous_projects/{projectId}/documents/progress`

Get continuous project document progress for multiple IDs

> Body parameter

```json
{
  "documentName": "string",
  "filterByLanguage": "string"
}
```

<h3 id="get-continuous-project-document-progress-for-multiple-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous project ID|
|body|body|[ContinuousProjectDocumentProgressBody](#schemacontinuousprojectdocumentprogressbody)|false|none|
|» documentName|body|string|false|none|
|» filterByLanguage|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "languages": {
    "property1": {
      "proofreading": 0,
      "total": 0,
      "translation": 0,
      "word_count": 0
    },
    "property2": {
      "proofreading": 0,
      "total": 0,
      "translation": 0,
      "word_count": 0
    }
  },
  "links": {
    "self": {
      "href": "string"
    },
    "project": {
      "href": "string"
    }
  },
  "project_status": "pending",
  "proofreading": 0,
  "total": 0,
  "translation": 0,
  "word_count": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-continuous-project-document-progress-for-multiple-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Progress information|[Progress](#schemaprogress)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View a continuous document

<a id="opIdgetContinuousProjectDocument"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{projectId}/documents/{documentId}`

View the details of a source document in continuous translation project.

<h3 id="view-a-continuous-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous project ID|
|documentId|path|integer(int64)|true|Document ID/Name|

> Example responses

> 200 Response

```json
{
  "billed_word_count": 0,
  "id": "string",
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "post_edit_enabled": true,
  "project_id": "string",
  "source_language": "string",
  "target_languages": [
    "string"
  ],
  "word_count": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-a-continuous-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Progress information|[ContinuousProjectDocument](#schemacontinuousprojectdocument)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update the document

<a id="opIdupdateDocument"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "document": {
      "data": "string",
      "name": "string"
    }
  }'
```

`POST /continuous_projects/{projectId}/documents/{documentId}`

Update source document in your continuous project. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.

> Body parameter

```json
{
  "document": {
    "data": "string",
    "name": "string"
  }
}
```

<h3 id="update-the-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous project ID|
|documentId|path|integer(int64)|true|Continuous project document ID|
|body|body|[AddOrUpdateDocumentRequest](#schemaaddorupdatedocumentrequest)|false|none|
|» document|body|[FileAsData](#schemafileasdata)|false|none|

> Example responses

> 200 Response

```json
{
  "billed_word_count": 0,
  "id": "string",
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "post_edit_enabled": true,
  "project_id": "string",
  "source_language": "string",
  "target_languages": [
    "string"
  ],
  "word_count": 0
}
```

<h3 id="update-the-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated continuous project document object.|[ContinuousProjectDocument](#schemacontinuousprojectdocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Monitor progress of a continuous document

<a id="opIdgetContinuousProjectDocumentProgress"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents/0/progress \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{projectId}/documents/{documentId}/progress`

Monitor the translation progress of a document in a continuous project in real-time.

<h3 id="monitor-progress-of-a-continuous-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous project ID|
|documentId|path|integer(int64)|true|Document ID/Name|
|filterByLanguage|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "languages": {
    "property1": {
      "proofreading": 0,
      "total": 0,
      "translation": 0,
      "word_count": 0
    },
    "property2": {
      "proofreading": 0,
      "total": 0,
      "translation": 0,
      "word_count": 0
    }
  },
  "links": {
    "self": {
      "href": "string"
    },
    "project": {
      "href": "string"
    }
  },
  "project_status": "pending",
  "proofreading": 0,
  "total": 0,
  "translation": 0,
  "word_count": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="monitor-progress-of-a-continuous-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Progress information|[Progress](#schemaprogress)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Invoices of a continuous project

<a id="opIdgetContinuousProjectInvoices"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/invoices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{projectId}/invoices`

Get real-time access to a continuous project's invoices.

<h3 id="invoices-of-a-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "invoices": [
    {
      "amount": 0,
      "base_amount": 0,
      "base_currency": "usd",
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "currency": "usd",
      "id": 0,
      "invoice_no": 0,
      "invoiced_at": "1970-01-01T00:00:00Z",
      "links": {
        "self": {
          "href": "string"
        },
        "corporate": {
          "href": "string"
        },
        "html": {
          "href": "string"
        },
        "json": {
          "href": "string"
        },
        "pdf": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "view": {
          "href": "string"
        }
      },
      "status": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="invoices-of-a-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invoices List|[ContinuousProjectInvoices](#schemacontinuousprojectinvoices)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Monitor progress and status of a continous project

<a id="opIdgetContinuousProjectProgress"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/progress \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{projectId}/progress`

Monitor the translation progress of an ongoing continuous project in real-time.

<h3 id="monitor-progress-and-status-of-a-continous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|filterByLanguage|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "costs": {
    "mt": {
      "amount": 0,
      "currency": "usd"
    },
    "post_edit": {
      "amount": 0,
      "currency": "usd"
    },
    "saved": {
      "amount": 0,
      "currency": "usd"
    },
    "total": {
      "amount": 0,
      "currency": "usd"
    }
  },
  "progress": {
    "languages": {
      "property1": {
        "proofreading": 0,
        "total": 0,
        "translation": 0,
        "word_count": 0
      },
      "property2": {
        "proofreading": 0,
        "total": 0,
        "translation": 0,
        "word_count": 0
      }
    },
    "links": {
      "self": {
        "href": "string"
      },
      "project": {
        "href": "string"
      }
    },
    "project_status": "pending",
    "proofreading": 0,
    "total": 0,
    "translation": 0,
    "word_count": 0
  },
  "word_counts": {
    "mt": 0,
    "post_edit": 0,
    "total": 0
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="monitor-progress-and-status-of-a-continous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Progress information|[ContinuousProjectProgress](#schemacontinuousprojectprogress)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View Active widgets

<a id="opIdgetActiveWidgets"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/widgets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{projectId}/widgets`

View a list of widgets in your Active project to be used in your website. Most website-specific configuration is provided via widgets.

<h3 id="view-active-widgets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous Project ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "widgets": [
    {
      "allow_hash_in_url": true,
      "allow_query_in_url": true,
      "auto_detect_source_language": true,
      "created_at": "1970-01-01T00:00:00Z",
      "elements": "string",
      "follow_user": true,
      "force_cache_refresh_interval": true,
      "id": 0,
      "language_mappings": "string",
      "live": true,
      "modify_links": true,
      "name": "string",
      "optimize_per_page": true,
      "pages": "string",
      "path_regex": "string",
      "position": "string",
      "query_name": "locale",
      "reboot_on_url_change": true,
      "restricted_domains": "string",
      "sections": "string",
      "test_mode": true,
      "theme": "string",
      "token": "string",
      "url_change_mode": "string",
      "url_mode": "string",
      "use_cache": true,
      "use_dummy_translations": true,
      "variables": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-active-widgets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of widgets|[ActiveWidgetList](#schemaactivewidgetlist)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Create a new Active widget

<a id="opIdcreateActiveWidget"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/widgets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allow_hash_in_url": true,
    "allow_query_in_url": true,
    "auto_detect_source_language": true,
    "created_at": "1970-01-01T00:00:00Z",
    "elements": "string",
    "follow_user": true,
    "force_cache_refresh_interval": true,
    "id": 0,
    "language_mappings": "string",
    "live": true,
    "modify_links": true,
    "name": "string",
    "optimize_per_page": true,
    "pages": "string",
    "path_regex": "string",
    "position": "string",
    "query_name": "locale",
    "reboot_on_url_change": true,
    "restricted_domains": "string",
    "sections": "string",
    "test_mode": true,
    "theme": "string",
    "token": "string",
    "url_change_mode": "string",
    "url_mode": "string",
    "use_cache": true,
    "use_dummy_translations": true,
    "variables": "string"
  }'
```

`POST /continuous_projects/{projectId}/widgets`

Create a new widget for your Active project to be used in your website. Most website-specific configuration is provided via widgets. This does not create a new Active project, just a separate widget.

> Body parameter

```json
{
  "allow_hash_in_url": true,
  "allow_query_in_url": true,
  "auto_detect_source_language": true,
  "created_at": "1970-01-01T00:00:00Z",
  "elements": "string",
  "follow_user": true,
  "force_cache_refresh_interval": true,
  "id": 0,
  "language_mappings": "string",
  "live": true,
  "modify_links": true,
  "name": "string",
  "optimize_per_page": true,
  "pages": "string",
  "path_regex": "string",
  "position": "string",
  "query_name": "locale",
  "reboot_on_url_change": true,
  "restricted_domains": "string",
  "sections": "string",
  "test_mode": true,
  "theme": "string",
  "token": "string",
  "url_change_mode": "string",
  "url_mode": "string",
  "use_cache": true,
  "use_dummy_translations": true,
  "variables": "string"
}
```

<h3 id="create-a-new-active-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous project ID|
|body|body|[ActiveWidget](#schemaactivewidget)|false|none|
|» allow_hash_in_url|body|boolean|false|When true, hash params are included in filenames. When false, params are ignored.|
|» allow_query_in_url|body|boolean|false|When true, query params are included in filenames. When false, params are ignored.|
|» auto_detect_source_language|body|boolean|false|When true, we will ignore the source language of your project and try to automatically detect the source language of the given content. This is especially useful in environments with unpredictable source contents, such as a chat environment.|
|» created_at|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» elements|body|string|false|Continuous project exclusive elements and rules|
|» follow_user|body|boolean|false|Specify whether we should follow the user around in your website and automatically translate pages.|
|» force_cache_refresh_interval|body|boolean|false|Determines whether to force-refresh local browser cache of your translations in certain period of times, no matter if there is a new activity in the project.|
|» id|body|integer(int64)|false|none|
|» language_mappings|body|string|false|Continuous project language mappings|
|» live|body|boolean|false|Whether ActiveJS should be considered live in an embedded site. Use `false` if you are still testing Active. Go to your Active dashboard and follow links to your website to actually test Active.|
|» modify_links|body|boolean|false|We can automatically localize the same-domain URLs in your page. The way we localize the URL depends on urlMode configuration. We can either add/update the locale query parameter, or add/update the path of the URL.|
|» name|body|string|false|none|
|» optimize_per_page|body|boolean|false|When true, Active ecosystem will optimize the script and data flows per page, rather than per project. This decreases the bandwidth usage per script, but makes translation publishing more complex and script serving per-page.|
|» pages|body|string|false|Continuous project page rules|
|» path_regex|body|string|false|Custom regex for path-type URL mode.|
|» position|body|string|false|Options are "bottom-left", "bottom-right", "in-place"|
|» query_name|body|string|false|Query parameter name to be used with query-type URL mode. Default is 'locale'.|
|» reboot_on_url_change|body|boolean|false|When true, Active ecosystem reboots itself when url changes.|
|» restricted_domains|body|string|false|JSON string for a list of domains that this widget's API interactions are limited to.|
|» sections|body|string|false|Continuous project section rules|
|» test_mode|body|boolean|false|Is the Active Widget in test mode? This changes a couple behaviors in the widget to make it easier for you to test and develop your Active integration.|
|» theme|body|string|false|\"light\", \"dark\" OR custom JSON.|
|» token|body|string|false|Token that you should use when you are using this widget on your website.|
|» url_change_mode|body|string|false|When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can do this by actually redirecting the user to the new page, or by simply changing the URL in the address bar via browser's History API. When NULL, we won't apply any URL changes.|
|» url_mode|body|string|false|When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can either change the path of the URL to prefix it with the locale code, or we can add a query parameter to the URL. We also use this mode to detect the locale for the current page when a user directly loads a page. When NULL, locale detection from URL will be disabled (even then, if the user has selected a locale manually, and followUser is enabled, we will still automatically translate the page in user's locale.|
|» use_cache|body|boolean|false|Should we make use of local browser cache for your visitors? We will refresh the cache when Active JS detects new activity in your project.|
|» use_dummy_translations|body|boolean|false|When enabled, we will translate your website with dummy content, rather than actually using MT/TM.|
|» variables|body|string|false|Continuous project variable definitions|

> Example responses

> 200 Response

```json
{
  "allow_hash_in_url": true,
  "allow_query_in_url": true,
  "auto_detect_source_language": true,
  "created_at": "1970-01-01T00:00:00Z",
  "elements": "string",
  "follow_user": true,
  "force_cache_refresh_interval": true,
  "id": 0,
  "language_mappings": "string",
  "live": true,
  "modify_links": true,
  "name": "string",
  "optimize_per_page": true,
  "pages": "string",
  "path_regex": "string",
  "position": "string",
  "query_name": "locale",
  "reboot_on_url_change": true,
  "restricted_domains": "string",
  "sections": "string",
  "test_mode": true,
  "theme": "string",
  "token": "string",
  "url_change_mode": "string",
  "url_mode": "string",
  "use_cache": true,
  "use_dummy_translations": true,
  "variables": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="create-a-new-active-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated widget details|[ActiveWidget](#schemaactivewidget)|
|404|Not Found|ProjectNotFound \| ActiveWidgetNotFound \| UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View an Active widget

<a id="opIdgetActiveWidget"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/widgets/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{projectId}/widgets/{widgetId}`

View the details of an Active widget to be used in your website. Most website-specific configuration is provided via widgets.

<h3 id="view-an-active-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous Project ID|
|widgetId|path|integer(int64)|true|Active widget ID belonging to this Continuous Project|

> Example responses

> 200 Response

```json
{
  "allow_hash_in_url": true,
  "allow_query_in_url": true,
  "auto_detect_source_language": true,
  "created_at": "1970-01-01T00:00:00Z",
  "elements": "string",
  "follow_user": true,
  "force_cache_refresh_interval": true,
  "id": 0,
  "language_mappings": "string",
  "live": true,
  "modify_links": true,
  "name": "string",
  "optimize_per_page": true,
  "pages": "string",
  "path_regex": "string",
  "position": "string",
  "query_name": "locale",
  "reboot_on_url_change": true,
  "restricted_domains": "string",
  "sections": "string",
  "test_mode": true,
  "theme": "string",
  "token": "string",
  "url_change_mode": "string",
  "url_mode": "string",
  "use_cache": true,
  "use_dummy_translations": true,
  "variables": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-an-active-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Active widget details|[ActiveWidget](#schemaactivewidget)|
|404|Not Found|ProjectNotFound \| ActiveWidgetNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update Active widget settings.

<a id="opIdupdateActiveWidget"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/widgets/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allow_hash_in_url": true,
    "allow_query_in_url": true,
    "auto_detect_source_language": true,
    "created_at": "1970-01-01T00:00:00Z",
    "elements": "string",
    "follow_user": true,
    "force_cache_refresh_interval": true,
    "id": 0,
    "language_mappings": "string",
    "live": true,
    "modify_links": true,
    "name": "string",
    "optimize_per_page": true,
    "pages": "string",
    "path_regex": "string",
    "position": "string",
    "query_name": "locale",
    "reboot_on_url_change": true,
    "restricted_domains": "string",
    "sections": "string",
    "test_mode": true,
    "theme": "string",
    "token": "string",
    "url_change_mode": "string",
    "url_mode": "string",
    "use_cache": true,
    "use_dummy_translations": true,
    "variables": "string"
  }'
```

`POST /continuous_projects/{projectId}/widgets/{widgetId}`

Update Active widget settings.

> Body parameter

```json
{
  "allow_hash_in_url": true,
  "allow_query_in_url": true,
  "auto_detect_source_language": true,
  "created_at": "1970-01-01T00:00:00Z",
  "elements": "string",
  "follow_user": true,
  "force_cache_refresh_interval": true,
  "id": 0,
  "language_mappings": "string",
  "live": true,
  "modify_links": true,
  "name": "string",
  "optimize_per_page": true,
  "pages": "string",
  "path_regex": "string",
  "position": "string",
  "query_name": "locale",
  "reboot_on_url_change": true,
  "restricted_domains": "string",
  "sections": "string",
  "test_mode": true,
  "theme": "string",
  "token": "string",
  "url_change_mode": "string",
  "url_mode": "string",
  "use_cache": true,
  "use_dummy_translations": true,
  "variables": "string"
}
```

<h3 id="update-active-widget-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous Project ID|
|widgetId|path|integer(int64)|true|Active widget ID belonging to this Continuous Project|
|body|body|[ActiveWidget](#schemaactivewidget)|false|none|
|» allow_hash_in_url|body|boolean|false|When true, hash params are included in filenames. When false, params are ignored.|
|» allow_query_in_url|body|boolean|false|When true, query params are included in filenames. When false, params are ignored.|
|» auto_detect_source_language|body|boolean|false|When true, we will ignore the source language of your project and try to automatically detect the source language of the given content. This is especially useful in environments with unpredictable source contents, such as a chat environment.|
|» created_at|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» elements|body|string|false|Continuous project exclusive elements and rules|
|» follow_user|body|boolean|false|Specify whether we should follow the user around in your website and automatically translate pages.|
|» force_cache_refresh_interval|body|boolean|false|Determines whether to force-refresh local browser cache of your translations in certain period of times, no matter if there is a new activity in the project.|
|» id|body|integer(int64)|false|none|
|» language_mappings|body|string|false|Continuous project language mappings|
|» live|body|boolean|false|Whether ActiveJS should be considered live in an embedded site. Use `false` if you are still testing Active. Go to your Active dashboard and follow links to your website to actually test Active.|
|» modify_links|body|boolean|false|We can automatically localize the same-domain URLs in your page. The way we localize the URL depends on urlMode configuration. We can either add/update the locale query parameter, or add/update the path of the URL.|
|» name|body|string|false|none|
|» optimize_per_page|body|boolean|false|When true, Active ecosystem will optimize the script and data flows per page, rather than per project. This decreases the bandwidth usage per script, but makes translation publishing more complex and script serving per-page.|
|» pages|body|string|false|Continuous project page rules|
|» path_regex|body|string|false|Custom regex for path-type URL mode.|
|» position|body|string|false|Options are "bottom-left", "bottom-right", "in-place"|
|» query_name|body|string|false|Query parameter name to be used with query-type URL mode. Default is 'locale'.|
|» reboot_on_url_change|body|boolean|false|When true, Active ecosystem reboots itself when url changes.|
|» restricted_domains|body|string|false|JSON string for a list of domains that this widget's API interactions are limited to.|
|» sections|body|string|false|Continuous project section rules|
|» test_mode|body|boolean|false|Is the Active Widget in test mode? This changes a couple behaviors in the widget to make it easier for you to test and develop your Active integration.|
|» theme|body|string|false|\"light\", \"dark\" OR custom JSON.|
|» token|body|string|false|Token that you should use when you are using this widget on your website.|
|» url_change_mode|body|string|false|When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can do this by actually redirecting the user to the new page, or by simply changing the URL in the address bar via browser's History API. When NULL, we won't apply any URL changes.|
|» url_mode|body|string|false|When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can either change the path of the URL to prefix it with the locale code, or we can add a query parameter to the URL. We also use this mode to detect the locale for the current page when a user directly loads a page. When NULL, locale detection from URL will be disabled (even then, if the user has selected a locale manually, and followUser is enabled, we will still automatically translate the page in user's locale.|
|» use_cache|body|boolean|false|Should we make use of local browser cache for your visitors? We will refresh the cache when Active JS detects new activity in your project.|
|» use_dummy_translations|body|boolean|false|When enabled, we will translate your website with dummy content, rather than actually using MT/TM.|
|» variables|body|string|false|Continuous project variable definitions|

> Example responses

> 200 Response

```json
{
  "allow_hash_in_url": true,
  "allow_query_in_url": true,
  "auto_detect_source_language": true,
  "created_at": "1970-01-01T00:00:00Z",
  "elements": "string",
  "follow_user": true,
  "force_cache_refresh_interval": true,
  "id": 0,
  "language_mappings": "string",
  "live": true,
  "modify_links": true,
  "name": "string",
  "optimize_per_page": true,
  "pages": "string",
  "path_regex": "string",
  "position": "string",
  "query_name": "locale",
  "reboot_on_url_change": true,
  "restricted_domains": "string",
  "sections": "string",
  "test_mode": true,
  "theme": "string",
  "token": "string",
  "url_change_mode": "string",
  "url_mode": "string",
  "use_cache": true,
  "use_dummy_translations": true,
  "variables": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-active-widget-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated widget details|[ActiveWidget](#schemaactivewidget)|
|404|Not Found|ProjectNotFound \| ActiveWidgetNotFound \| UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Delete a single widget for this Active project

<a id="opIddeleteActiveWidget"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/widgets/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /continuous_projects/{projectId}/widgets/{widgetId}`

Delete a single widget for this Active project

<h3 id="delete-a-single-widget-for-this-active-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous Project ID|
|widgetId|path|integer(int64)|true|Active widget ID belonging to this Continuous Project|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-a-single-widget-for-this-active-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete operation result|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|ProjectNotFound \| ActiveWidgetNotFound \| UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Reset Active widget token

<a id="opIdresetActiveWidgetToken"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/widgets/0/reset-token \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /continuous_projects/{projectId}/widgets/{widgetId}/reset-token`

Reset the public token used with your Active widget. This token is used when communicating from your environment to MotaWord systems for translation, analytics and meta.

<h3 id="reset-active-widget-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Continuous Project ID|
|widgetId|path|integer(int64)|true|Active widget ID belonging to this Continuous Project|

> Example responses

> 200 Response

```json
{
  "allow_hash_in_url": true,
  "allow_query_in_url": true,
  "auto_detect_source_language": true,
  "created_at": "1970-01-01T00:00:00Z",
  "elements": "string",
  "follow_user": true,
  "force_cache_refresh_interval": true,
  "id": 0,
  "language_mappings": "string",
  "live": true,
  "modify_links": true,
  "name": "string",
  "optimize_per_page": true,
  "pages": "string",
  "path_regex": "string",
  "position": "string",
  "query_name": "locale",
  "reboot_on_url_change": true,
  "restricted_domains": "string",
  "sections": "string",
  "test_mode": true,
  "theme": "string",
  "token": "string",
  "url_change_mode": "string",
  "url_mode": "string",
  "use_cache": true,
  "use_dummy_translations": true,
  "variables": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="reset-active-widget-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated widget details|[ActiveWidget](#schemaactivewidget)|
|404|Not Found|ProjectNotFound \| ActiveWidgetNotFound \| UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-strings">Strings</h1>

## Get a list of strings and its translations in the project.

<a id="opIdpostContinuousProjectFileStrings"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents/strings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documentName": "string"
  }'
```

`POST /continuous_projects/{projectId}/documents/strings`

> Body parameter

```json
{
  "documentName": "string"
}
```

<h3 id="get-a-list-of-strings-and-its-translations-in-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|body|body|[ContinuousProjectDocumentStringsBody](#schemacontinuousprojectdocumentstringsbody)|false|none|
|» documentName|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": [
    {
      "content": "string",
      "file_id": 0,
      "id": "string",
      "translations": {
        "property1": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        },
        "property2": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        }
      }
    }
  ]
}
```

<h3 id="get-a-list-of-strings-and-its-translations-in-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for strings and their translations|[StringList](#schemastringlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View strings their translations in a continuous document

<a id="opIdgetContinuousProjectFileStrings"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/documents/0/strings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{projectId}/documents/{documentId}/strings`

View the strings from a document and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.

<h3 id="view-strings-their-translations-in-a-continuous-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|documentId|path|integer(int64)|true|Document ID/Name|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": [
    {
      "content": "string",
      "file_id": 0,
      "id": "string",
      "translations": {
        "property1": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        },
        "property2": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        }
      }
    }
  ]
}
```

<h3 id="view-strings-their-translations-in-a-continuous-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for strings and their translations|[StringList](#schemastringlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View strings and translations in continuous project

<a id="opIdgetContinuousProjectStrings"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/strings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{projectId}/strings`

View the strings and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.

<h3 id="view-strings-and-translations-in-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": [
    {
      "content": "string",
      "file_id": 0,
      "id": "string",
      "translations": {
        "property1": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        },
        "property2": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        }
      }
    }
  ]
}
```

<h3 id="view-strings-and-translations-in-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for strings and their translations|[StringList](#schemastringlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View cached strings translations in continuous project

<a id="opIdgetTranslationCache"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/strings/cached \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /continuous_projects/{projectId}/strings/cached`

MotaWord caches your account intensively (and in a smart way) in real-time translation environments. This endpoint will return the currently cached strings and translations in your continuous translation project.

<h3 id="view-cached-strings-translations-in-continuous-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|flatten|query|boolean|false|Flatten cache results and ignore document keys|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": {
    "property1": {
      "mt": {
        "property1": "string",
        "property2": "string"
      },
      "nonparsed": {
        "property1": "string",
        "property2": "string"
      },
      "tm": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "mt": {
        "property1": "string",
        "property2": "string"
      },
      "nonparsed": {
        "property1": "string",
        "property2": "string"
      },
      "tm": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

<h3 id="view-cached-strings-translations-in-continuous-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for strings and their translations|[ContinuousProjectCache](#schemacontinuousprojectcache)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Clear translation cache

<a id="opIdclearTranslationCache"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/strings/cached \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /continuous_projects/{projectId}/strings/cached`

Clear/delete continuous project translation cache.

<h3 id="clear-translation-cache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|locale|query|string|false|Locale|
|file_id|query|integer(int64)|false|Continuous Project File ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="clear-translation-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation response|[OperationStatus](#schemaoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Recache translations

<a id="opIdrecacheTranslations"></a>

> Code samples

```bash
curl https://example.com/continuous_projects/0/strings/recache-tms \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /continuous_projects/{projectId}/strings/recache-tms`

Recache translations for the continuous project.

<h3 id="recache-translations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|locale|query|string|false|Locale|
|file_id|query|integer(int64)|false|Continuous Project File ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="recache-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation response|[OperationStatus](#schemaoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View strings and translations of a document

<a id="opIdgetDocumentTranslations"></a>

> Code samples

```bash
curl https://example.com/projects/0/documents/0/translations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/documents/{documentId}/translations`

View the strings and their translations in your translation project for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

<h3 id="view-strings-and-translations-of-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|documentId|path|integer(int64)|true|Document ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": [
    {
      "content": "string",
      "file_id": 0,
      "id": "string",
      "translations": {
        "property1": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        },
        "property2": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        }
      }
    }
  ]
}
```

<h3 id="view-strings-and-translations-of-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for strings and their translations|[StringList](#schemastringlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View strings and translations of a document for target language

<a id="opIdgetDocumentTranslationsForLanguage"></a>

> Code samples

```bash
curl https://example.com/projects/0/documents/0/translations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/documents/{documentId}/translations/{language}`

View the strings and their translations in the given target language for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

<h3 id="view-strings-and-translations-of-a-document-for-target-language-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|documentId|path|integer(int64)|true|Document ID|
|language|path|string|true|Target language code.|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": [
    {
      "content": "string",
      "file_id": 0,
      "id": "string",
      "translations": {
        "property1": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        },
        "property2": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        }
      }
    }
  ]
}
```

<h3 id="view-strings-and-translations-of-a-document-for-target-language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for strings and their translations|[StringList](#schemastringlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View project strings and translations

<a id="opIdgetProjectStrings"></a>

> Code samples

```bash
curl https://example.com/projects/0/strings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/strings`

View the strings and their translations in your translation project, for all target languages. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

<h3 id="view-project-strings-and-translations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": [
    {
      "content": "string",
      "file_id": 0,
      "id": "string",
      "translations": {
        "property1": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        },
        "property2": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        }
      }
    }
  ]
}
```

<h3 id="view-project-strings-and-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for strings and their translations|[StringList](#schemastringlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download project translation memory

<a id="opIdpackageProjectTranslationMemory"></a>

> Code samples

```bash
curl https://example.com/projects/0/strings/package \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{projectId}/strings/package`

Package and download project translation memory in TMX format

<h3 id="download-project-translation-memory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|async|query|integer(int64)|false|If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.|
|format|query|string|false|Translation Memory file format|

> Example responses

> 200 Response

```json
{
  "duration": 0,
  "key": "string",
  "message": {},
  "status": "sent"
}
```

<h3 id="download-project-translation-memory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response in TMX or async request|[AsyncOperationStatus](#schemaasyncoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Check translation memory packaging status

<a id="opIdpackageProjectTranslationMemoryStatus"></a>

> Code samples

```bash
curl 'https://example.com/projects/0/strings/package/status?async_request_key=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/strings/package/status`

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

<h3 id="check-translation-memory-packaging-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|async_request_key|query|string|true|Async operation key|

> Example responses

> 200 Response

```json
{
  "duration": 0,
  "key": "string",
  "message": {},
  "status": "sent"
}
```

<h3 id="check-translation-memory-packaging-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Async operation status. Use the key to query status of this operation.|[AsyncOperationStatus](#schemaasyncoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download language-specific project translation memory

<a id="opIdpackageProjectTranslationMemoryForLanguage"></a>

> Code samples

```bash
curl https://example.com/projects/0/strings/string/package \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{projectId}/strings/{languageCode}/package`

Package and download project translation memory in TMX format for a specific target language.

<h3 id="download-language-specific-project-translation-memory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|languageCode|path|string|true|Language Code|
|async|query|integer(int64)|false|If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.|
|format|query|string|false|Translation Memory file format|

> Example responses

> 200 Response

```json
{
  "duration": 0,
  "key": "string",
  "message": {},
  "status": "sent"
}
```

<h3 id="download-language-specific-project-translation-memory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response in TMX or async request|[AsyncOperationStatus](#schemaasyncoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Check language-specific translation memory packaging status

<a id="opIdpackageProjectTranslationMemoryForLanguageStatus"></a>

> Code samples

```bash
curl 'https://example.com/projects/0/strings/string/package/status?async_request_key=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/strings/{languageCode}/package/status`

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

<h3 id="check-language-specific-translation-memory-packaging-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|languageCode|path|string|true|Language Code|
|async_request_key|query|string|true|Async operation key|

> Example responses

> 200 Response

```json
{
  "duration": 0,
  "key": "string",
  "message": {},
  "status": "sent"
}
```

<h3 id="check-language-specific-translation-memory-packaging-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Async operation status. Use the key to query status of this operation.|[AsyncOperationStatus](#schemaasyncoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View strings and translations for target language

<a id="opIdgetProjectStringsForLanguage"></a>

> Code samples

```bash
curl https://example.com/projects/0/strings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/strings/{language}`

View the strings and their translations in your translation project for the specified target language. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

<h3 id="view-strings-and-translations-for-target-language-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|language|path|string|true|Target language code|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": [
    {
      "content": "string",
      "file_id": 0,
      "id": "string",
      "translations": {
        "property1": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        },
        "property2": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        }
      }
    }
  ]
}
```

<h3 id="view-strings-and-translations-for-target-language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for strings and their translations|[StringList](#schemastringlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Deprecated. Use /projects/{projectId}/strings instead.

<a id="opIdgetProjectTranslations"></a>

> Code samples

```bash
curl https://example.com/projects/0/translations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/translations`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="deprecated-use-projectsprojectidstrings-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": [
    {
      "content": "string",
      "file_id": 0,
      "id": "string",
      "translations": {
        "property1": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        },
        "property2": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        }
      }
    }
  ]
}
```

<h3 id="deprecated-use-projectsprojectidstrings-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for strings and their translations|[StringList](#schemastringlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Deprecated. use /projects/{projectId}/strings/{language} instead.

<a id="opIdgetProjectTranslationsForLanguage"></a>

> Code samples

```bash
curl https://example.com/projects/0/translations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/translations/{language}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="deprecated-use-projectsprojectidstringslanguage-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|language|path|string|true|Target language code|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": [
    {
      "content": "string",
      "file_id": 0,
      "id": "string",
      "translations": {
        "property1": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        },
        "property2": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        }
      }
    }
  ]
}
```

<h3 id="deprecated-use-projectsprojectidstringslanguage-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response for strings and their translations|[StringList](#schemastringlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View account strings (translation memory)

<a id="opIdgetStrings"></a>

> Code samples

```bash
curl https://example.com/strings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /strings`

Get a list of all strings and their translations under your account, from all projects. This is your MotaWord translation memory. If you have the related permission, this endpoint will also return strings from your company account.

<h3 id="view-account-strings-translation-memory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_language|query|string|false|Source Language Code|
|page|query|integer(int64)|false|Requested page|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "strings": [
    {
      "content": "string",
      "language": "string",
      "last_changed": "1970-01-01T00:00:00Z",
      "translations": [
        {
          "content": "string",
          "last_changed": "1970-01-01T00:00:00Z",
          "resource": "string",
          "resource_id": "string",
          "state": "Translated",
          "target_language": "string"
        }
      ]
    }
  ]
}
```

<h3 id="view-account-strings-translation-memory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of strings in JSON|[ClientStrings](#schemaclientstrings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update string translation

<a id="opIdupdateTranslationMemoryUnit"></a>

> Code samples

```bash
curl https://example.com/strings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sourceLanguage": "string",
    "sourceText": "string",
    "targetLanguage": "string",
    "targetText": "string"
  }'
```

`PUT /strings`

Update the translation of a string from your account strings/translation memory.

> Body parameter

```json
{
  "sourceLanguage": "string",
  "sourceText": "string",
  "targetLanguage": "string",
  "targetText": "string"
}
```

<h3 id="update-string-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TranslationMemoryUnit](#schematranslationmemoryunit)|false|none|
|» sourceLanguage|body|string|false|none|
|» sourceText|body|string|false|none|
|» targetLanguage|body|string|false|none|
|» targetText|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-string-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Translation updated by adding new translation memory unit|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|Corporate id, source language, target language, source string or target string is not provided|[Error](#schemaerror)|
|404|Not Found|Source language or target language is not found|[Error](#schemaerror)|
|500|Internal Server Error|Something went wrong and translation unit is not updated|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Translate Strings with MT

<a id="opIdpostStrings"></a>

> Code samples

```bash
curl https://example.com/strings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contents": [
      "string"
    ],
    "source_language": "string",
    "target_languages": [
      "string"
    ]
  }'
```

`POST /strings`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated, use instant translation mechanism for continuous projects.

> Body parameter

```json
{
  "contents": [
    "string"
  ],
  "source_language": "string",
  "target_languages": [
    "string"
  ]
}
```

<h3 id="translate-strings-with-mt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeprecatedStringTranslationContent](#schemadeprecatedstringtranslationcontent)|false|none|
|» contents|body|[string]|false|none|
|» source_language|body|string|false|none|
|» target_languages|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "cost": {
    "amount": 0,
    "currency": "usd"
  },
  "strings": [
    {
      "content": "string",
      "language": "string",
      "last_changed": "1970-01-01T00:00:00Z",
      "translations": [
        {
          "content": "string",
          "last_changed": "1970-01-01T00:00:00Z",
          "resource": "string",
          "resource_id": "string",
          "state": "Translated",
          "target_language": "string"
        }
      ]
    }
  ]
}
```

<h3 id="translate-strings-with-mt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Machine Translated Strings in JSON|[MachineTranslatedStrings](#schemamachinetranslatedstrings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download account translation memory

<a id="opIdpackageUserTranslationMemory"></a>

> Code samples

```bash
curl https://example.com/strings/string/package \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /strings/{languageCode}/package`

Package and download account translation memory in TMX format. If you have the related permission, this will also download your company translation memory.

<h3 id="download-account-translation-memory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|languageCode|path|string|true|Source Language Code|
|async|query|integer(int64)|false|If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.|
|email|query|integer(int64)|false|If you don't need us to email the TMX, set this to '0'. Default is 1.|

> Example responses

> 200 Response

```json
{
  "duration": 0,
  "key": "string",
  "message": {},
  "status": "sent"
}
```

<h3 id="download-account-translation-memory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response in TMX or async request|[AsyncOperationStatus](#schemaasyncoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Check account translation memory packaging status

<a id="opIdpackageUserTranslationMemoryForLanguageStatus"></a>

> Code samples

```bash
curl 'https://example.com/strings/string/package/status?async_request_key=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /strings/{languageCode}/package/status`

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

<h3 id="check-account-translation-memory-packaging-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|languageCode|path|string|true|Language Code|
|async_request_key|query|string|true|Async operation key|

> Example responses

> 200 Response

```json
{
  "duration": 0,
  "key": "string",
  "message": {},
  "status": "sent"
}
```

<h3 id="check-account-translation-memory-packaging-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Async operation status. Use the key to query status of this operation.|[AsyncOperationStatus](#schemaasyncoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-corporate">Corporate</h1>

## View your corporate account

<a id="opIdgetCorporate"></a>

> Code samples

```bash
curl https://example.com/corporate \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /corporate`

View the details of the corporate account that your user account belongs to.

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "domain": "string",
  "email": "string",
  "id": 0,
  "logo": "string",
  "name": "string",
  "web_site": "string"
}
```

<h3 id="view-your-corporate-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Corporate account details|[CorporateAccount](#schemacorporateaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View available permissions

<a id="opIdgetAvailableCorporatePermissions"></a>

> Code samples

```bash
curl https://example.com/corporate/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /corporate/permissions`

View a list of available permissions for your corporate account. They are used when assigning permissions to your corporate users.

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "permissions": [
    "string"
  ]
}
```

<h3 id="view-available-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of permission strings|[PermissionList](#schemapermissionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View user groups

<a id="opIdgetCorporateUserGroups"></a>

> Code samples

```bash
curl https://example.com/corporate/user-groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /corporate/user-groups`

View a list of user groups under my corporate account. User groups are a part of our RBAC implementation and can be used to configure complex permission scenarios.

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ]
}
```

<h3 id="view-user-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User group list|[UserGroupList](#schemausergrouplist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Create or update a corporate user group

<a id="opIdsaveCorporateUserGroup"></a>

> Code samples

```bash
curl https://example.com/corporate/user-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "corporate_id": 0,
    "id": 0,
    "name": "string",
    "permissions": [
      "string"
    ]
  }'
```

`POST /corporate/user-groups`

Create or update a corporate user group

> Body parameter

```json
{
  "corporate_id": 0,
  "id": 0,
  "name": "string",
  "permissions": [
    "string"
  ]
}
```

<h3 id="create-or-update-a-corporate-user-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserGroup](#schemausergroup)|true|none|
|» corporate_id|body|integer(int64)|false|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» permissions|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "corporate_id": 0,
  "id": 0,
  "name": "string",
  "permissions": [
    "string"
  ]
}
```

<h3 id="create-or-update-a-corporate-user-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User group list|[UserGroup](#schemausergroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View users

<a id="opIdgetCorporateUsers"></a>

> Code samples

```bash
curl https://example.com/corporate/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /corporate/users`

View a list of users under your corporate account. This endpoint will only return information if your user account is permitted to view corporate account users, configured by your administrator.

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "users": [
    {
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "birthday": "1970-01-01",
      "can_work_manual_files": true,
      "city": "string",
      "client": {
        "corporate": {
          "email": "string",
          "id": 0,
          "logo": "string",
          "name": "string",
          "phone_number": "string"
        },
        "nps": 0,
        "subjects": {
          "property1": 0,
          "property2": 0
        }
      },
      "corporate_id": 0,
      "country": "string",
      "created_at": 0,
      "do_not_contact": true,
      "email": "string",
      "first_name": "string",
      "has_pwd": true,
      "id": 0,
      "is_client": true,
      "is_developer": true,
      "is_proofreader": true,
      "is_prospect": true,
      "is_sales_person": true,
      "is_vendor": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "last_name": "string",
      "last_seen_online_at": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "login_as": {
          "href": "string"
        },
        "projects": {
          "href": "string"
        },
        "responsivity": {
          "href": "string"
        },
        "stats": {
          "href": "string"
        }
      },
      "locale": "string",
      "mailing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string"
      },
      "name": "string",
      "native_language": "string",
      "nps": 0,
      "phone_number": "string",
      "profile_picture_path": "string",
      "social_media": {
        "facebook_url": "string",
        "linkedIn_url": "string",
        "twitter_url": "string"
      },
      "state": "string",
      "status": "string",
      "street": "string",
      "timezone": "string",
      "tms_user_name": "string",
      "user_groups": [
        {
          "corporate_id": 0,
          "id": 0,
          "name": "string",
          "permissions": [
            "string"
          ]
        }
      ],
      "vendor": {
        "can_work_manual_files": true,
        "email_open_rate": 0,
        "is_frozen": true,
        "is_proofreader": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "native_language": "string",
        "pam_tqs": 0,
        "paypal_email": "string",
        "profile_survey": {
          "current_services": "string",
          "daily_proofreading_capacity": "string",
          "daily_translation_capacity": "string",
          "dtp_software": "string",
          "experience": "string",
          "is_certified_translator": "string",
          "is_sworn_translator": "string",
          "memoq": "string",
          "memsource": "string",
          "omegat": "string",
          "proofreader_experience": "string",
          "provides_creative_writing_service": "string",
          "provides_postedit_service": "string",
          "reference": "string",
          "sdl_trados": "string",
          "skype_id": "string",
          "smartcat": "string",
          "smartling": "string",
          "software": "string",
          "specialization": "string",
          "subtitle_edit": "string",
          "subtitle_workshop": "string",
          "translator_association": "string",
          "transsuite_2000": "string",
          "vendor_profile_lsp": "string",
          "wordbee": "string",
          "wordfast": "string",
          "work_type": "string",
          "work_with": "string",
          "working_as": "string",
          "working_timezone": "string",
          "xbench": "string",
          "xtm": "string"
        },
        "require_1099": true,
        "tags": [
          "string"
        ],
        "tms_user_name": "string",
        "vendor_type": "string"
      },
      "zip_code": "string"
    }
  ]
}
```

<h3 id="view-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User list|[UserList](#schemauserlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Create or update a user

<a id="opIdsaveCorporateUser"></a>

> Code samples

```bash
curl https://example.com/corporate/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "birthday": "1970-01-01",
    "email": "string",
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "notifications": {
      "phone_number": "string",
      "sms_enabled": true
    },
    "notify": true,
    "paypal_email": "string",
    "require_1099": true,
    "user_groups": [
      0
    ]
  }'
```

`POST /corporate/users`

Create or update a user under your corporate account. This endpoint requires permissions for corporate user management, configured by your administrator.

> Body parameter

```json
{
  "city": "string",
  "country": "string",
  "phone": "string",
  "state": "string",
  "street": "string",
  "zip": "string",
  "birthday": "1970-01-01",
  "email": "string",
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "notifications": {
    "phone_number": "string",
    "sms_enabled": true
  },
  "notify": true,
  "paypal_email": "string",
  "require_1099": true,
  "user_groups": [
    0
  ]
}
```

<h3 id="create-or-update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserUpdateContent](#schemauserupdatecontent)|true|none|
|» city|body|string|false|none|
|» country|body|string|false|none|
|» phone|body|string|false|none|
|» state|body|string|false|none|
|» street|body|string|false|none|
|» zip|body|string|false|none|
|» birthday|body|string(date)|false|none|
|» email|body|string|false|Optional. User e-mail.|
|» first_name|body|string|false|Optional. User first name.|
|» id|body|integer(int64)|false|Optional. ID of the user being updated.|
|» last_name|body|string|false|Optional. User last name.|
|» notifications|body|object|false|Notification settings|
|» » phone_number|body|string|false|User phone number|
|» » sms_enabled|body|boolean|false|User sms notification setting|
|» notify|body|boolean|false|Notify new user account creation with login information and MotaWord introduction.|
|» paypal_email|body|string|false|Optional. Vendor paypal e-mail|
|» require_1099|body|boolean|false|Optional. Whether this vendor requires 1099 form in US for their earnings.|
|» user_groups|body|[integer(int64)]|false|A list of user group IDs|

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "birthday": "1970-01-01",
  "can_work_manual_files": true,
  "city": "string",
  "client": {
    "corporate": {
      "email": "string",
      "id": 0,
      "logo": "string",
      "name": "string",
      "phone_number": "string"
    },
    "nps": 0,
    "subjects": {
      "property1": 0,
      "property2": 0
    }
  },
  "corporate_id": 0,
  "country": "string",
  "created_at": 0,
  "do_not_contact": true,
  "email": "string",
  "first_name": "string",
  "has_pwd": true,
  "id": 0,
  "is_client": true,
  "is_developer": true,
  "is_proofreader": true,
  "is_prospect": true,
  "is_sales_person": true,
  "is_vendor": true,
  "language_pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ],
  "last_name": "string",
  "last_seen_online_at": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "login_as": {
      "href": "string"
    },
    "projects": {
      "href": "string"
    },
    "responsivity": {
      "href": "string"
    },
    "stats": {
      "href": "string"
    }
  },
  "locale": "string",
  "mailing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string"
  },
  "name": "string",
  "native_language": "string",
  "nps": 0,
  "phone_number": "string",
  "profile_picture_path": "string",
  "social_media": {
    "facebook_url": "string",
    "linkedIn_url": "string",
    "twitter_url": "string"
  },
  "state": "string",
  "status": "string",
  "street": "string",
  "timezone": "string",
  "tms_user_name": "string",
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ],
  "vendor": {
    "can_work_manual_files": true,
    "email_open_rate": 0,
    "is_frozen": true,
    "is_proofreader": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "native_language": "string",
    "pam_tqs": 0,
    "paypal_email": "string",
    "profile_survey": {
      "current_services": "string",
      "daily_proofreading_capacity": "string",
      "daily_translation_capacity": "string",
      "dtp_software": "string",
      "experience": "string",
      "is_certified_translator": "string",
      "is_sworn_translator": "string",
      "memoq": "string",
      "memsource": "string",
      "omegat": "string",
      "proofreader_experience": "string",
      "provides_creative_writing_service": "string",
      "provides_postedit_service": "string",
      "reference": "string",
      "sdl_trados": "string",
      "skype_id": "string",
      "smartcat": "string",
      "smartling": "string",
      "software": "string",
      "specialization": "string",
      "subtitle_edit": "string",
      "subtitle_workshop": "string",
      "translator_association": "string",
      "transsuite_2000": "string",
      "vendor_profile_lsp": "string",
      "wordbee": "string",
      "wordfast": "string",
      "work_type": "string",
      "work_with": "string",
      "working_as": "string",
      "working_timezone": "string",
      "xbench": "string",
      "xtm": "string"
    },
    "require_1099": true,
    "tags": [
      "string"
    ],
    "tms_user_name": "string",
    "vendor_type": "string"
  },
  "zip_code": "string"
}
```

<h3 id="create-or-update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created or updated user|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get a list of corporate accounts

<a id="opIdgetCorporatesList"></a>

> Code samples

```bash
curl https://example.com/corporates/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /corporates/all`

Get a list of corporate accounts

> Example responses

> 200 Response

```json
[
  {
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "domain": "string",
    "email": "string",
    "id": 0,
    "logo": "string",
    "name": "string",
    "web_site": "string"
  }
]
```

<h3 id="get-a-list-of-corporate-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Corporate account list|Inline|

<h3 id="get-a-list-of-corporate-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CorporateAccount](#schemacorporateaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get details of this corporate account

<a id="opIdgetCorporateById"></a>

> Code samples

```bash
curl https://example.com/corporates/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /corporates/{corporateId}`

Get details of this corporate account

<h3 id="get-details-of-this-corporate-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|corporateId|path|integer(int64)|true|Corporate ID|

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "domain": "string",
  "email": "string",
  "id": 0,
  "logo": "string",
  "name": "string",
  "web_site": "string"
}
```

<h3 id="get-details-of-this-corporate-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Corporate account details|[CorporateAccount](#schemacorporateaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.

<a id="opIdgetAvailableCorporatePermissionsById"></a>

> Code samples

```bash
curl https://example.com/corporates/0/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /corporates/{corporateId}/permissions`

Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.

<h3 id="get-a-list-of-available-permissions-for-this-corporate-account-they-are-used-when-assigning-permissions-to-corporate-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|corporateId|path|integer(int64)|true|Corporate ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "permissions": [
    "string"
  ]
}
```

<h3 id="get-a-list-of-available-permissions-for-this-corporate-account-they-are-used-when-assigning-permissions-to-corporate-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of permission strings|[PermissionList](#schemapermissionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get a list of user groups for this corporate account

<a id="opIdgetCorporateUserGroupsById"></a>

> Code samples

```bash
curl https://example.com/corporates/0/user-groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /corporates/{corporateId}/user-groups`

Get a list of user groups for this corporate account

<h3 id="get-a-list-of-user-groups-for-this-corporate-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|corporateId|path|integer(int64)|true|Corporate ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ]
}
```

<h3 id="get-a-list-of-user-groups-for-this-corporate-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User group list|[UserGroupList](#schemausergrouplist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Create or update a corporate user group for this corporate account

<a id="opIdsaveCorporateUserGroupById"></a>

> Code samples

```bash
curl https://example.com/corporates/0/user-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "corporate_id": 0,
    "id": 0,
    "name": "string",
    "permissions": [
      "string"
    ]
  }'
```

`POST /corporates/{corporateId}/user-groups`

Create or update a corporate user group for this corporate account

> Body parameter

```json
{
  "corporate_id": 0,
  "id": 0,
  "name": "string",
  "permissions": [
    "string"
  ]
}
```

<h3 id="create-or-update-a-corporate-user-group-for-this-corporate-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|corporateId|path|integer(int64)|true|Corporate ID|
|body|body|[UserGroup](#schemausergroup)|true|none|
|» corporate_id|body|integer(int64)|false|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» permissions|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "corporate_id": 0,
  "id": 0,
  "name": "string",
  "permissions": [
    "string"
  ]
}
```

<h3 id="create-or-update-a-corporate-user-group-for-this-corporate-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User group list|[UserGroup](#schemausergroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get a list of users for this corporate account

<a id="opIdgetCorporateUsersById"></a>

> Code samples

```bash
curl https://example.com/corporates/0/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /corporates/{corporateId}/users`

Get a list of users for this corporate account

<h3 id="get-a-list-of-users-for-this-corporate-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|corporateId|path|integer(int64)|true|Corporate ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "users": [
    {
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "birthday": "1970-01-01",
      "can_work_manual_files": true,
      "city": "string",
      "client": {
        "corporate": {
          "email": "string",
          "id": 0,
          "logo": "string",
          "name": "string",
          "phone_number": "string"
        },
        "nps": 0,
        "subjects": {
          "property1": 0,
          "property2": 0
        }
      },
      "corporate_id": 0,
      "country": "string",
      "created_at": 0,
      "do_not_contact": true,
      "email": "string",
      "first_name": "string",
      "has_pwd": true,
      "id": 0,
      "is_client": true,
      "is_developer": true,
      "is_proofreader": true,
      "is_prospect": true,
      "is_sales_person": true,
      "is_vendor": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "last_name": "string",
      "last_seen_online_at": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "login_as": {
          "href": "string"
        },
        "projects": {
          "href": "string"
        },
        "responsivity": {
          "href": "string"
        },
        "stats": {
          "href": "string"
        }
      },
      "locale": "string",
      "mailing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string"
      },
      "name": "string",
      "native_language": "string",
      "nps": 0,
      "phone_number": "string",
      "profile_picture_path": "string",
      "social_media": {
        "facebook_url": "string",
        "linkedIn_url": "string",
        "twitter_url": "string"
      },
      "state": "string",
      "status": "string",
      "street": "string",
      "timezone": "string",
      "tms_user_name": "string",
      "user_groups": [
        {
          "corporate_id": 0,
          "id": 0,
          "name": "string",
          "permissions": [
            "string"
          ]
        }
      ],
      "vendor": {
        "can_work_manual_files": true,
        "email_open_rate": 0,
        "is_frozen": true,
        "is_proofreader": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "native_language": "string",
        "pam_tqs": 0,
        "paypal_email": "string",
        "profile_survey": {
          "current_services": "string",
          "daily_proofreading_capacity": "string",
          "daily_translation_capacity": "string",
          "dtp_software": "string",
          "experience": "string",
          "is_certified_translator": "string",
          "is_sworn_translator": "string",
          "memoq": "string",
          "memsource": "string",
          "omegat": "string",
          "proofreader_experience": "string",
          "provides_creative_writing_service": "string",
          "provides_postedit_service": "string",
          "reference": "string",
          "sdl_trados": "string",
          "skype_id": "string",
          "smartcat": "string",
          "smartling": "string",
          "software": "string",
          "specialization": "string",
          "subtitle_edit": "string",
          "subtitle_workshop": "string",
          "translator_association": "string",
          "transsuite_2000": "string",
          "vendor_profile_lsp": "string",
          "wordbee": "string",
          "wordfast": "string",
          "work_type": "string",
          "work_with": "string",
          "working_as": "string",
          "working_timezone": "string",
          "xbench": "string",
          "xtm": "string"
        },
        "require_1099": true,
        "tags": [
          "string"
        ],
        "tms_user_name": "string",
        "vendor_type": "string"
      },
      "zip_code": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-users-for-this-corporate-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User list|[UserList](#schemauserlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-user">User</h1>

## Delete your account

<a id="opIddeleteAccount"></a>

> Code samples

```bash
curl https://example.com/delete-account \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /delete-account`

Delete your MotaWord account. Be careful; once deleted, you will not have access to MotaWord via API or your dashboards.

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-your-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## downgradeProofreader

<a id="opIddowngradeProofreader"></a>

> Code samples

```bash
curl https://example.com/downgrade-proofreader \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /downgrade-proofreader`

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="downgradeproofreader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|304|Not Modified|Vendor is already a translator|None|
|400|Bad Request|VendorNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View your vendor earnings

<a id="opIdgetEarnings"></a>

> Code samples

```bash
curl https://example.com/earnings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /earnings`

View your vendor earnings from your translation activites. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects, as well as total earnings and string edits.

> Example responses

> 200 Response

```json
{
  "completed": [
    {
      "amount": 0,
      "currency": "usd",
      "due_date": "1970-01-01T00:00:00Z",
      "status": "paid",
      "words": 0,
      "words_approved": 0,
      "words_translated": 0,
      "is_above_average": true,
      "score": 0,
      "strings_edited": 0,
      "strings_translated": 0,
      "project_id": 0
    }
  ],
  "ongoing": [
    {
      "amount": 0,
      "currency": "usd",
      "due_date": "1970-01-01T00:00:00Z",
      "status": "paid",
      "words": 0,
      "words_approved": 0,
      "words_translated": 0,
      "is_above_average": true,
      "score": 0,
      "strings_edited": 0,
      "strings_translated": 0,
      "project_id": 0
    }
  ],
  "total": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-your-vendor-earnings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Earnings for vendors|[Earnings](#schemaearnings)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Freeze account

<a id="opIdfreezeAccount"></a>

> Code samples

```bash
curl https://example.com/freeze-account \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /freeze-account`

Freeze your account temporarily, especially to stop receiving project notifications.

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="freeze-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|304|Not Modified|Account is already frozen for notifications|None|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.

<a id="opIdlogLocation"></a>

> Code samples

```bash
curl https://example.com/location \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "lat": 0,
    "lon": 0,
    "timestamp": 0
  }'
```

`POST /location`

> Body parameter

```json
{
  "lat": 0,
  "lon": 0,
  "timestamp": 0
}
```

<h3 id="log-users-current-location-this-data-is-used-in-our-intelligent-project-manager-for-various-data-analysis-including-project-prioritization-for-vendors-and-account-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LocationUpdateContent](#schemalocationupdatecontent)|false|none|
|» lat|body|number(float)|true|Latitude of location|
|» lon|body|number(float)|true|Longitude of location|
|» timestamp|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="log-users-current-location-this-data-is-used-in-our-intelligent-project-manager-for-various-data-analysis-including-project-prioritization-for-vendors-and-account-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## makeProofreader

<a id="opIdmakeProofreader"></a>

> Code samples

```bash
curl https://example.com/make-proofreader \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /make-proofreader`

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="makeproofreader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|304|Not Modified|Vendor is already a proofreader|None|
|400|Bad Request|VendorNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View your account info

<a id="opIdgetMe"></a>

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me`

Get your user information, including client, corporate account and vendor account information.

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "birthday": "1970-01-01",
  "can_work_manual_files": true,
  "city": "string",
  "client": {
    "corporate": {
      "email": "string",
      "id": 0,
      "logo": "string",
      "name": "string",
      "phone_number": "string"
    },
    "nps": 0,
    "subjects": {
      "property1": 0,
      "property2": 0
    }
  },
  "corporate_id": 0,
  "country": "string",
  "created_at": 0,
  "do_not_contact": true,
  "email": "string",
  "first_name": "string",
  "has_pwd": true,
  "id": 0,
  "is_client": true,
  "is_developer": true,
  "is_proofreader": true,
  "is_prospect": true,
  "is_sales_person": true,
  "is_vendor": true,
  "language_pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ],
  "last_name": "string",
  "last_seen_online_at": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "login_as": {
      "href": "string"
    },
    "projects": {
      "href": "string"
    },
    "responsivity": {
      "href": "string"
    },
    "stats": {
      "href": "string"
    }
  },
  "locale": "string",
  "mailing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string"
  },
  "name": "string",
  "native_language": "string",
  "nps": 0,
  "phone_number": "string",
  "profile_picture_path": "string",
  "social_media": {
    "facebook_url": "string",
    "linkedIn_url": "string",
    "twitter_url": "string"
  },
  "state": "string",
  "status": "string",
  "street": "string",
  "timezone": "string",
  "tms_user_name": "string",
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ],
  "vendor": {
    "can_work_manual_files": true,
    "email_open_rate": 0,
    "is_frozen": true,
    "is_proofreader": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "native_language": "string",
    "pam_tqs": 0,
    "paypal_email": "string",
    "profile_survey": {
      "current_services": "string",
      "daily_proofreading_capacity": "string",
      "daily_translation_capacity": "string",
      "dtp_software": "string",
      "experience": "string",
      "is_certified_translator": "string",
      "is_sworn_translator": "string",
      "memoq": "string",
      "memsource": "string",
      "omegat": "string",
      "proofreader_experience": "string",
      "provides_creative_writing_service": "string",
      "provides_postedit_service": "string",
      "reference": "string",
      "sdl_trados": "string",
      "skype_id": "string",
      "smartcat": "string",
      "smartling": "string",
      "software": "string",
      "specialization": "string",
      "subtitle_edit": "string",
      "subtitle_workshop": "string",
      "translator_association": "string",
      "transsuite_2000": "string",
      "vendor_profile_lsp": "string",
      "wordbee": "string",
      "wordfast": "string",
      "work_type": "string",
      "work_with": "string",
      "working_as": "string",
      "working_timezone": "string",
      "xbench": "string",
      "xtm": "string"
    },
    "require_1099": true,
    "tags": [
      "string"
    ],
    "tms_user_name": "string",
    "vendor_type": "string"
  },
  "zip_code": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-your-account-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User summary|[User](#schemauser)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update your account info

<a id="opIdupdateMe"></a>

> Code samples

```bash
curl https://example.com/me \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "birthday": "1970-01-01",
    "email": "string",
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "notifications": {
      "phone_number": "string",
      "sms_enabled": true
    },
    "notify": true,
    "paypal_email": "string",
    "require_1099": true,
    "user_groups": [
      0
    ]
  }'
```

`POST /me`

> Body parameter

```json
{
  "city": "string",
  "country": "string",
  "phone": "string",
  "state": "string",
  "street": "string",
  "zip": "string",
  "birthday": "1970-01-01",
  "email": "string",
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "notifications": {
    "phone_number": "string",
    "sms_enabled": true
  },
  "notify": true,
  "paypal_email": "string",
  "require_1099": true,
  "user_groups": [
    0
  ]
}
```

<h3 id="update-your-account-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserUpdateContent](#schemauserupdatecontent)|false|none|
|» city|body|string|false|none|
|» country|body|string|false|none|
|» phone|body|string|false|none|
|» state|body|string|false|none|
|» street|body|string|false|none|
|» zip|body|string|false|none|
|» birthday|body|string(date)|false|none|
|» email|body|string|false|Optional. User e-mail.|
|» first_name|body|string|false|Optional. User first name.|
|» id|body|integer(int64)|false|Optional. ID of the user being updated.|
|» last_name|body|string|false|Optional. User last name.|
|» notifications|body|object|false|Notification settings|
|» » phone_number|body|string|false|User phone number|
|» » sms_enabled|body|boolean|false|User sms notification setting|
|» notify|body|boolean|false|Notify new user account creation with login information and MotaWord introduction.|
|» paypal_email|body|string|false|Optional. Vendor paypal e-mail|
|» require_1099|body|boolean|false|Optional. Whether this vendor requires 1099 form in US for their earnings.|
|» user_groups|body|[integer(int64)]|false|A list of user group IDs|

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "birthday": "1970-01-01",
  "can_work_manual_files": true,
  "city": "string",
  "client": {
    "corporate": {
      "email": "string",
      "id": 0,
      "logo": "string",
      "name": "string",
      "phone_number": "string"
    },
    "nps": 0,
    "subjects": {
      "property1": 0,
      "property2": 0
    }
  },
  "corporate_id": 0,
  "country": "string",
  "created_at": 0,
  "do_not_contact": true,
  "email": "string",
  "first_name": "string",
  "has_pwd": true,
  "id": 0,
  "is_client": true,
  "is_developer": true,
  "is_proofreader": true,
  "is_prospect": true,
  "is_sales_person": true,
  "is_vendor": true,
  "language_pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ],
  "last_name": "string",
  "last_seen_online_at": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "login_as": {
      "href": "string"
    },
    "projects": {
      "href": "string"
    },
    "responsivity": {
      "href": "string"
    },
    "stats": {
      "href": "string"
    }
  },
  "locale": "string",
  "mailing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string"
  },
  "name": "string",
  "native_language": "string",
  "nps": 0,
  "phone_number": "string",
  "profile_picture_path": "string",
  "social_media": {
    "facebook_url": "string",
    "linkedIn_url": "string",
    "twitter_url": "string"
  },
  "state": "string",
  "status": "string",
  "street": "string",
  "timezone": "string",
  "tms_user_name": "string",
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ],
  "vendor": {
    "can_work_manual_files": true,
    "email_open_rate": 0,
    "is_frozen": true,
    "is_proofreader": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "native_language": "string",
    "pam_tqs": 0,
    "paypal_email": "string",
    "profile_survey": {
      "current_services": "string",
      "daily_proofreading_capacity": "string",
      "daily_translation_capacity": "string",
      "dtp_software": "string",
      "experience": "string",
      "is_certified_translator": "string",
      "is_sworn_translator": "string",
      "memoq": "string",
      "memsource": "string",
      "omegat": "string",
      "proofreader_experience": "string",
      "provides_creative_writing_service": "string",
      "provides_postedit_service": "string",
      "reference": "string",
      "sdl_trados": "string",
      "skype_id": "string",
      "smartcat": "string",
      "smartling": "string",
      "software": "string",
      "specialization": "string",
      "subtitle_edit": "string",
      "subtitle_workshop": "string",
      "translator_association": "string",
      "transsuite_2000": "string",
      "vendor_profile_lsp": "string",
      "wordbee": "string",
      "wordfast": "string",
      "work_type": "string",
      "work_with": "string",
      "working_as": "string",
      "working_timezone": "string",
      "xbench": "string",
      "xtm": "string"
    },
    "require_1099": true,
    "tags": [
      "string"
    ],
    "tms_user_name": "string",
    "vendor_type": "string"
  },
  "zip_code": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-your-account-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User info|[User](#schemauser)|
|400|Bad Request|UserNotFound|[Error](#schemaerror)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Subscribe to push notifications

<a id="opIdsubscribeNotification"></a>

> Code samples

```bash
curl https://example.com/notifications/subscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "device": "iOS",
    "endpoint": "string",
    "type": "OneSignal"
  }'
```

`POST /notifications/subscribe`

Subscribe to push notifications to receive project and platform notifications.

> Body parameter

```json
{
  "device": "iOS",
  "endpoint": "string",
  "type": "OneSignal"
}
```

<h3 id="subscribe-to-push-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationSubscription](#schemanotificationsubscription)|false|none|
|» device|body|string|false|none|
|» endpoint|body|string|false|OneSignal calls this "player ID".|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» device|iOS|
|» device|Android|
|» device|Chrome|
|» device|Firefox|
|» device|Safari|
|» device|Edge|
|» device|Amazon|
|» device|WindowsPhone|
|» device|Windows|
|» device|MacOS|
|» type|OneSignal|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="subscribe-to-push-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Saved notification subscription information|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|MissingParameter \| Failed to save subscription|[Error](#schemaerror)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## unsubscribeNotification

<a id="opIdunsubscribeNotification"></a>

> Code samples

```bash
curl https://example.com/notifications/unsubscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "device": "iOS",
    "endpoint": "string",
    "type": "OneSignal"
  }'
```

`POST /notifications/unsubscribe`

> Body parameter

```json
{
  "device": "iOS",
  "endpoint": "string",
  "type": "OneSignal"
}
```

<h3 id="unsubscribenotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationSubscription](#schemanotificationsubscription)|false|none|
|» device|body|string|false|none|
|» endpoint|body|string|false|OneSignal calls this "player ID".|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» device|iOS|
|» device|Android|
|» device|Chrome|
|» device|Firefox|
|» device|Safari|
|» device|Edge|
|» device|Amazon|
|» device|WindowsPhone|
|» device|Windows|
|» device|MacOS|
|» type|OneSignal|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="unsubscribenotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted notification subscription information|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|MissingParameter \| Failed to delete subscription|[Error](#schemaerror)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update your account password

<a id="opIdupdatePassword"></a>

> Code samples

```bash
curl https://example.com/password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "string"
  }'
```

`POST /password`

Password should contain at least one uppercase, lowercase character and one number

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="update-your-account-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PasswordUpdateContent](#schemapasswordupdatecontent)|false|none|
|» password|body|string|false|New Password|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-your-account-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View your payment and billing info

<a id="opIdgetPaymentInfo"></a>

> Code samples

```bash
curl https://example.com/payment \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment`

Returns billing and saved credit card information for user, and their corporate account if present & allowed.

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "card": {
    "bin": "string",
    "id": 0,
    "is_default": true,
    "payment_code": "string"
  },
  "cards": [
    {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    }
  ],
  "corporate": {
    "allow_api_invoicing": true,
    "allow_payment_code": true,
    "auto_charge": true,
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "card": {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    },
    "contact_email_address": "string",
    "payment_code": "string"
  },
  "shared_card": {
    "bin": "string",
    "id": 0,
    "is_default": true,
    "payment_code": "string"
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-your-payment-and-billing-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns billing and saved card information for user, and their corporate if present.|[PaymentInfo](#schemapaymentinfo)|
|404|Not Found|UserNotFound UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update payment info

<a id="opIdupdatePaymentInfo"></a>

> Code samples

```bash
curl https://example.com/payment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "bin": "string",
    "save_as_corporate_primary": true,
    "share_with_corporate_users": true,
    "stripeToken": "string"
  }'
```

`POST /payment`

Update your billing and saved credit card information

> Body parameter

```json
{
  "city": "string",
  "country": "string",
  "phone": "string",
  "state": "string",
  "street": "string",
  "zip": "string",
  "bin": "string",
  "save_as_corporate_primary": true,
  "share_with_corporate_users": true,
  "stripeToken": "string"
}
```

<h3 id="update-payment-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdatePaymentInfo](#schemaupdatepaymentinfo)|false|none|
|» city|body|string|false|none|
|» country|body|string|false|none|
|» phone|body|string|false|none|
|» state|body|string|false|none|
|» street|body|string|false|none|
|» zip|body|string|false|none|
|» bin|body|string|false|none|
|» save_as_corporate_primary|body|boolean|false|none|
|» share_with_corporate_users|body|boolean|false|none|
|» stripeToken|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "card": {
    "bin": "string",
    "id": 0,
    "is_default": true,
    "payment_code": "string"
  },
  "cards": [
    {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    }
  ],
  "corporate": {
    "allow_api_invoicing": true,
    "allow_payment_code": true,
    "auto_charge": true,
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "card": {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    },
    "contact_email_address": "string",
    "payment_code": "string"
  },
  "shared_card": {
    "bin": "string",
    "id": 0,
    "is_default": true,
    "payment_code": "string"
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-payment-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[PaymentInfo](#schemapaymentinfo)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View your permissions

<a id="opIdgetPermissions"></a>

> Code samples

```bash
curl https://example.com/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /permissions`

View a list of permissions that your user account is authorized for, configured either by default, or by your account administator.

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "permissions": [
    "string"
  ]
}
```

<h3 id="view-your-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of permission strings|[PermissionList](#schemapermissionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Upload profile picture

<a id="opIduploadProfilePicture"></a>

> Code samples

```bash
curl https://example.com/profile-picture \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "profile_picture": "string"
  }'
```

`POST /profile-picture`

Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.

> Body parameter

```json
{
  "profile_picture": "string"
}
```

<h3 id="upload-profile-picture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProfilePictureUpload](#schemaprofilepictureupload)|false|none|
|» profile_picture|body|string(binary)|true|Profile picture file contents. Accepted extensions are png, jpg.|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="upload-profile-picture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|Email already exists|[Error](#schemaerror)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Sends email confirmation email for current user

<a id="opIdsendEmailConfirmation"></a>

> Code samples

```bash
curl https://example.com/resend-email-confirmation \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /resend-email-confirmation`

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="sends-email-confirmation-email-for-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When confirmation email is sent, status is `success`, or `already_confirmed` when user has already confirmed their email address.|Inline|

<h3 id="sends-email-confirmation-email-for-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[OperationStatusEnum](#schemaoperationstatusenum)|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|
|status|success|
|status|already_confirmed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View your vendor responsiveness

<a id="opIdgetResponsivity"></a>

> Code samples

```bash
curl https://example.com/responsivity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /responsivity`

View your statistical analysis of responsiveness to our translation projects, invitations, notifications and such.

<h3 id="view-your-vendor-responsiveness-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|string|false|Time period to calculate your responsiveness|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|monthly|
|period|weekly|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": {
      "href": "string"
    }
  },
  "responsivity": [
    {
      "invited": 0,
      "month": "string",
      "notEntered": 0,
      "onlyEntered": 0,
      "score": 0,
      "week": "string",
      "worked": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-your-vendor-responsiveness-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vendor responsivity stats|[ResponsivityList](#schemaresponsivitylist)|
|400|Bad Request|VendorNotFound - this is not a vendor user account|[Error](#schemaerror)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View your account statistics

<a id="opIdgetStats"></a>

> Code samples

```bash
curl https://example.com/stats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stats`

View your client and vendor statistics.

> Example responses

> 200 Response

```json
{
  "client": {
    "document_count": 0,
    "nps": 0,
    "started_project_count": 0,
    "total_discounted": {
      "amount": 0,
      "currency": "usd"
    },
    "total_project_count": 0,
    "total_spending": 0,
    "translator_count": 0
  },
  "vendor": {
    "earnings": {
      "total": 0
    },
    "projects": {
      "invited": 0,
      "total": 0,
      "worked": 0
    },
    "words": {
      "approved": 0,
      "translated": 0
    }
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-your-account-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client and vendor statistics for your account|[Stats](#schemastats)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Defreeze your account

<a id="opIdunfreezeAccount"></a>

> Code samples

```bash
curl https://example.com/unfreeze-account \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /unfreeze-account`

Reactive your account to start receiving notifications.

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="defreeze-your-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|304|Not Modified|Account is already unfrozen for notifications|None|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View your user groups

<a id="opIdgetUserGroups"></a>

> Code samples

```bash
curl https://example.com/user-groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /user-groups`

View the user groups that your user account belongs to. This is typically configured by your account administator's dashboard.

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ]
}
```

<h3 id="view-your-user-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of user groups|[UserGroupList](#schemausergrouplist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get a list of platform users

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users`

Get a list of platform users

<h3 id="get-a-list-of-platform-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|false|none|
|per_page|query|integer(int64)|false|none|
|user_type|query|string|false|none|
|search|query|string|false|none|
|email|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user_type|vendor|
|user_type|all|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "users": [
    {
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "birthday": "1970-01-01",
      "can_work_manual_files": true,
      "city": "string",
      "client": {
        "corporate": {
          "email": "string",
          "id": 0,
          "logo": "string",
          "name": "string",
          "phone_number": "string"
        },
        "nps": 0,
        "subjects": {
          "property1": 0,
          "property2": 0
        }
      },
      "corporate_id": 0,
      "country": "string",
      "created_at": 0,
      "do_not_contact": true,
      "email": "string",
      "first_name": "string",
      "has_pwd": true,
      "id": 0,
      "is_client": true,
      "is_developer": true,
      "is_proofreader": true,
      "is_prospect": true,
      "is_sales_person": true,
      "is_vendor": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "last_name": "string",
      "last_seen_online_at": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "login_as": {
          "href": "string"
        },
        "projects": {
          "href": "string"
        },
        "responsivity": {
          "href": "string"
        },
        "stats": {
          "href": "string"
        }
      },
      "locale": "string",
      "mailing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string"
      },
      "name": "string",
      "native_language": "string",
      "nps": 0,
      "phone_number": "string",
      "profile_picture_path": "string",
      "social_media": {
        "facebook_url": "string",
        "linkedIn_url": "string",
        "twitter_url": "string"
      },
      "state": "string",
      "status": "string",
      "street": "string",
      "timezone": "string",
      "tms_user_name": "string",
      "user_groups": [
        {
          "corporate_id": 0,
          "id": 0,
          "name": "string",
          "permissions": [
            "string"
          ]
        }
      ],
      "vendor": {
        "can_work_manual_files": true,
        "email_open_rate": 0,
        "is_frozen": true,
        "is_proofreader": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "native_language": "string",
        "pam_tqs": 0,
        "paypal_email": "string",
        "profile_survey": {
          "current_services": "string",
          "daily_proofreading_capacity": "string",
          "daily_translation_capacity": "string",
          "dtp_software": "string",
          "experience": "string",
          "is_certified_translator": "string",
          "is_sworn_translator": "string",
          "memoq": "string",
          "memsource": "string",
          "omegat": "string",
          "proofreader_experience": "string",
          "provides_creative_writing_service": "string",
          "provides_postedit_service": "string",
          "reference": "string",
          "sdl_trados": "string",
          "skype_id": "string",
          "smartcat": "string",
          "smartling": "string",
          "software": "string",
          "specialization": "string",
          "subtitle_edit": "string",
          "subtitle_workshop": "string",
          "translator_association": "string",
          "transsuite_2000": "string",
          "vendor_profile_lsp": "string",
          "wordbee": "string",
          "wordfast": "string",
          "work_type": "string",
          "work_with": "string",
          "working_as": "string",
          "working_timezone": "string",
          "xbench": "string",
          "xtm": "string"
        },
        "require_1099": true,
        "tags": [
          "string"
        ],
        "tms_user_name": "string",
        "vendor_type": "string"
      },
      "zip_code": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-platform-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User list|[UserList](#schemauserlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Create a new user

<a id="opIdcreateUser"></a>

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "birthday": "1970-01-01",
    "can_work_manual_files": true,
    "city": "string",
    "client": {
      "corporate": {
        "email": "string",
        "id": 0,
        "logo": "string",
        "name": "string",
        "phone_number": "string"
      },
      "nps": 0,
      "subjects": {
        "property1": 0,
        "property2": 0
      }
    },
    "corporate_id": 0,
    "country": "string",
    "created_at": 0,
    "do_not_contact": true,
    "email": "string",
    "first_name": "string",
    "has_pwd": true,
    "id": 0,
    "is_client": true,
    "is_developer": true,
    "is_proofreader": true,
    "is_prospect": true,
    "is_sales_person": true,
    "is_vendor": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "last_name": "string",
    "last_seen_online_at": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "login_as": {
        "href": "string"
      },
      "projects": {
        "href": "string"
      },
      "responsivity": {
        "href": "string"
      },
      "stats": {
        "href": "string"
      }
    },
    "locale": "string",
    "mailing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string"
    },
    "name": "string",
    "native_language": "string",
    "nps": 0,
    "phone_number": "string",
    "profile_picture_path": "string",
    "social_media": {
      "facebook_url": "string",
      "linkedIn_url": "string",
      "twitter_url": "string"
    },
    "state": "string",
    "status": "string",
    "street": "string",
    "timezone": "string",
    "tms_user_name": "string",
    "user_groups": [
      {
        "corporate_id": 0,
        "id": 0,
        "name": "string",
        "permissions": [
          "string"
        ]
      }
    ],
    "vendor": {
      "can_work_manual_files": true,
      "email_open_rate": 0,
      "is_frozen": true,
      "is_proofreader": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "native_language": "string",
      "pam_tqs": 0,
      "paypal_email": "string",
      "profile_survey": {
        "current_services": "string",
        "daily_proofreading_capacity": "string",
        "daily_translation_capacity": "string",
        "dtp_software": "string",
        "experience": "string",
        "is_certified_translator": "string",
        "is_sworn_translator": "string",
        "memoq": "string",
        "memsource": "string",
        "omegat": "string",
        "proofreader_experience": "string",
        "provides_creative_writing_service": "string",
        "provides_postedit_service": "string",
        "reference": "string",
        "sdl_trados": "string",
        "skype_id": "string",
        "smartcat": "string",
        "smartling": "string",
        "software": "string",
        "specialization": "string",
        "subtitle_edit": "string",
        "subtitle_workshop": "string",
        "translator_association": "string",
        "transsuite_2000": "string",
        "vendor_profile_lsp": "string",
        "wordbee": "string",
        "wordfast": "string",
        "work_type": "string",
        "work_with": "string",
        "working_as": "string",
        "working_timezone": "string",
        "xbench": "string",
        "xtm": "string"
      },
      "require_1099": true,
      "tags": [
        "string"
      ],
      "tms_user_name": "string",
      "vendor_type": "string"
    },
    "zip_code": "string"
  }'
```

`POST /users`

Create a new platform user

> Body parameter

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "birthday": "1970-01-01",
  "can_work_manual_files": true,
  "city": "string",
  "client": {
    "corporate": {
      "email": "string",
      "id": 0,
      "logo": "string",
      "name": "string",
      "phone_number": "string"
    },
    "nps": 0,
    "subjects": {
      "property1": 0,
      "property2": 0
    }
  },
  "corporate_id": 0,
  "country": "string",
  "created_at": 0,
  "do_not_contact": true,
  "email": "string",
  "first_name": "string",
  "has_pwd": true,
  "id": 0,
  "is_client": true,
  "is_developer": true,
  "is_proofreader": true,
  "is_prospect": true,
  "is_sales_person": true,
  "is_vendor": true,
  "language_pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ],
  "last_name": "string",
  "last_seen_online_at": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "login_as": {
      "href": "string"
    },
    "projects": {
      "href": "string"
    },
    "responsivity": {
      "href": "string"
    },
    "stats": {
      "href": "string"
    }
  },
  "locale": "string",
  "mailing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string"
  },
  "name": "string",
  "native_language": "string",
  "nps": 0,
  "phone_number": "string",
  "profile_picture_path": "string",
  "social_media": {
    "facebook_url": "string",
    "linkedIn_url": "string",
    "twitter_url": "string"
  },
  "state": "string",
  "status": "string",
  "street": "string",
  "timezone": "string",
  "tms_user_name": "string",
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ],
  "vendor": {
    "can_work_manual_files": true,
    "email_open_rate": 0,
    "is_frozen": true,
    "is_proofreader": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "native_language": "string",
    "pam_tqs": 0,
    "paypal_email": "string",
    "profile_survey": {
      "current_services": "string",
      "daily_proofreading_capacity": "string",
      "daily_translation_capacity": "string",
      "dtp_software": "string",
      "experience": "string",
      "is_certified_translator": "string",
      "is_sworn_translator": "string",
      "memoq": "string",
      "memsource": "string",
      "omegat": "string",
      "proofreader_experience": "string",
      "provides_creative_writing_service": "string",
      "provides_postedit_service": "string",
      "reference": "string",
      "sdl_trados": "string",
      "skype_id": "string",
      "smartcat": "string",
      "smartling": "string",
      "software": "string",
      "specialization": "string",
      "subtitle_edit": "string",
      "subtitle_workshop": "string",
      "translator_association": "string",
      "transsuite_2000": "string",
      "vendor_profile_lsp": "string",
      "wordbee": "string",
      "wordfast": "string",
      "work_type": "string",
      "work_with": "string",
      "working_as": "string",
      "working_timezone": "string",
      "xbench": "string",
      "xtm": "string"
    },
    "require_1099": true,
    "tags": [
      "string"
    ],
    "tms_user_name": "string",
    "vendor_type": "string"
  },
  "zip_code": "string"
}
```

<h3 id="create-a-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|notify|query|boolean|false|Send a welcome email to the user|
|body|body|[User](#schemauser)|false|none|
|» billing|body|[BillingAddress](#schemabillingaddress)|false|none|
|» birthday|body|string(date)|false|none|
|» can_work_manual_files|body|boolean|false|**Deprecated.** \@deprecated. use `vendor` key|
|» city|body|string|false|**Deprecated.** \@deprecated. use mailing or billing key.|
|» client|body|object|false|none|
|» » corporate|body|object|false|none|
|» » » email|body|string|false|none|
|» » » id|body|integer(int64)|false|none|
|» » » logo|body|string|false|none|
|» » » name|body|string|false|none|
|» » » phone_number|body|string|false|none|
|» » nps|body|number(float)|false|none|
|» » subjects|body|object|false|none|
|» » » **additionalProperties**|body|integer(int64)|false|none|
|» corporate_id|body|integer(int64)|false|none|
|» country|body|string|false|**Deprecated.** \@deprecated. use mailing or billing key.|
|» created_at|body|integer(int64)|false|Unix epoch time|
|» do_not_contact|body|boolean|false|none|
|» email|body|string|false|none|
|» first_name|body|string|false|none|
|» has_pwd|body|boolean|false|none|
|» id|body|integer(int64)|false|none|
|» is_client|body|boolean|false|none|
|» is_developer|body|boolean|false|none|
|» is_proofreader|body|boolean|false|**Deprecated.** \@deprecated. use `vendor` key|
|» is_prospect|body|boolean|false|none|
|» is_sales_person|body|boolean|false|none|
|» is_vendor|body|boolean|false|none|
|» language_pairs|body|[[LanguagePair](#schemalanguagepair)]|false|**Deprecated.** \@deprecated. use `vendor` key|
|» last_name|body|string|false|none|
|» last_seen_online_at|body|integer(int64)|false|Unix epoch time|
|» links|body|[UserLinks](#schemauserlinks)|false|none|
|» locale|body|string|false|User Locale|
|» mailing|body|[Address](#schemaaddress)|false|none|
|» name|body|string|false|none|
|» native_language|body|string|false|**Deprecated.** \@deprecated. Native language of user|
|» nps|body|number(float)|false|**Deprecated.** \@deprecated. use /stats endpoint for the current nps value.|
|» phone_number|body|string|false|none|
|» profile_picture_path|body|string|false|none|
|» social_media|body|[SocialMedia](#schemasocialmedia)|false|none|
|» state|body|string|false|**Deprecated.** \@deprecated. use mailing or billing key.|
|» status|body|string|false|none|
|» street|body|string|false|**Deprecated.** \@deprecated. use mailing or billing key.|
|» timezone|body|string|false|none|
|» tms_user_name|body|string|false|**Deprecated.** \@deprecated. use `vendor` key|
|» user_groups|body|[[UserGroup](#schemausergroup)]|false|none|
|» vendor|body|object|false|none|
|» » can_work_manual_files|body|boolean|false|none|
|» » email_open_rate|body|number(float)|false|none|
|» » is_frozen|body|boolean|false|none|
|» » is_proofreader|body|boolean|false|none|
|» » language_pairs|body|[[LanguagePair](#schemalanguagepair)]|false|none|
|» » native_language|body|string|false|Native language of user|
|» » pam_tqs|body|number(float)|false|none|
|» » paypal_email|body|string|false|none|
|» » profile_survey|body|[ProfileSurvey](#schemaprofilesurvey)|false|Vendor Profile Survey answers|
|» » require_1099|body|boolean|false|none|
|» » tags|body|[[Tag](#schematag)]|false|none|
|» » tms_user_name|body|string|false|none|
|» » vendor_type|body|string|false|none|
|» zip_code|body|string|false|**Deprecated.** \@deprecated. use mailing or billing key. new key name is "zip".|

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "birthday": "1970-01-01",
  "can_work_manual_files": true,
  "city": "string",
  "client": {
    "corporate": {
      "email": "string",
      "id": 0,
      "logo": "string",
      "name": "string",
      "phone_number": "string"
    },
    "nps": 0,
    "subjects": {
      "property1": 0,
      "property2": 0
    }
  },
  "corporate_id": 0,
  "country": "string",
  "created_at": 0,
  "do_not_contact": true,
  "email": "string",
  "first_name": "string",
  "has_pwd": true,
  "id": 0,
  "is_client": true,
  "is_developer": true,
  "is_proofreader": true,
  "is_prospect": true,
  "is_sales_person": true,
  "is_vendor": true,
  "language_pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ],
  "last_name": "string",
  "last_seen_online_at": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "login_as": {
      "href": "string"
    },
    "projects": {
      "href": "string"
    },
    "responsivity": {
      "href": "string"
    },
    "stats": {
      "href": "string"
    }
  },
  "locale": "string",
  "mailing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string"
  },
  "name": "string",
  "native_language": "string",
  "nps": 0,
  "phone_number": "string",
  "profile_picture_path": "string",
  "social_media": {
    "facebook_url": "string",
    "linkedIn_url": "string",
    "twitter_url": "string"
  },
  "state": "string",
  "status": "string",
  "street": "string",
  "timezone": "string",
  "tms_user_name": "string",
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ],
  "vendor": {
    "can_work_manual_files": true,
    "email_open_rate": 0,
    "is_frozen": true,
    "is_proofreader": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "native_language": "string",
    "pam_tqs": 0,
    "paypal_email": "string",
    "profile_survey": {
      "current_services": "string",
      "daily_proofreading_capacity": "string",
      "daily_translation_capacity": "string",
      "dtp_software": "string",
      "experience": "string",
      "is_certified_translator": "string",
      "is_sworn_translator": "string",
      "memoq": "string",
      "memsource": "string",
      "omegat": "string",
      "proofreader_experience": "string",
      "provides_creative_writing_service": "string",
      "provides_postedit_service": "string",
      "reference": "string",
      "sdl_trados": "string",
      "skype_id": "string",
      "smartcat": "string",
      "smartling": "string",
      "software": "string",
      "specialization": "string",
      "subtitle_edit": "string",
      "subtitle_workshop": "string",
      "translator_association": "string",
      "transsuite_2000": "string",
      "vendor_profile_lsp": "string",
      "wordbee": "string",
      "wordfast": "string",
      "work_type": "string",
      "work_with": "string",
      "working_as": "string",
      "working_timezone": "string",
      "xbench": "string",
      "xtm": "string"
    },
    "require_1099": true,
    "tags": [
      "string"
    ],
    "tms_user_name": "string",
    "vendor_type": "string"
  },
  "zip_code": "string"
}
```

<h3 id="create-a-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created user|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Filter vendors based on provided parameters

<a id="opIdgetFilteredVendors"></a>

> Code samples

```bash
curl https://example.com/users/filter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clients": [
      0
    ],
    "communication_channel": [
      "string"
    ],
    "corporate_ids_for_auth": [
      0
    ],
    "corporates": [
      0
    ],
    "country": [
      "string"
    ],
    "created_at": "string",
    "current_services": [
      "string"
    ],
    "daily_proofreading_capacity": 0,
    "daily_translation_capacity": 0,
    "destination_languages": [
      0
    ],
    "dtp_software": [
      "string"
    ],
    "email_address": "string",
    "experience": [
      "string"
    ],
    "first_name": "string",
    "id": [
      0
    ],
    "is_certified_translator": true,
    "is_sworn_translator": true,
    "language_pairs": [
      [
        0
      ]
    ],
    "last_name": "string",
    "last_online": "string",
    "last_worked": "string",
    "memoq": 0,
    "memsource": 0,
    "min_tqs": 0,
    "omegat": 0,
    "project_count": 0,
    "proofreader_experience": 0,
    "provides_creative_writing_service": true,
    "provides_postedit_service": true,
    "quote_file_subjects": [
      "string"
    ],
    "reference": "string",
    "sdl_trados": 0,
    "search": "string",
    "skype_id": "string",
    "smartcat": 0,
    "smartling": 0,
    "source_languages": [
      0
    ],
    "specialization": [
      "string"
    ],
    "status": [
      "string"
    ],
    "subtitle_edit": 0,
    "subtitle_workshop": 0,
    "translator_association": "string",
    "transsuite_2000": 0,
    "user_working_timezone": [
      "string"
    ],
    "vendor_profile_lsp": "string",
    "vendor_tags": [
      "string"
    ],
    "vendor_type": [
      "string"
    ],
    "vendor_working_timezone": [
      "string"
    ],
    "word_count": 0,
    "wordbee": 0,
    "wordfast": 0,
    "work_type": "string",
    "work_with": "string",
    "working_as": [
      "string"
    ],
    "xbench": 0,
    "xtm": 0
  }'
```

`POST /users/filter`

Get a list of vendors available for the criteria given

> Body parameter

```json
{
  "clients": [
    0
  ],
  "communication_channel": [
    "string"
  ],
  "corporate_ids_for_auth": [
    0
  ],
  "corporates": [
    0
  ],
  "country": [
    "string"
  ],
  "created_at": "string",
  "current_services": [
    "string"
  ],
  "daily_proofreading_capacity": 0,
  "daily_translation_capacity": 0,
  "destination_languages": [
    0
  ],
  "dtp_software": [
    "string"
  ],
  "email_address": "string",
  "experience": [
    "string"
  ],
  "first_name": "string",
  "id": [
    0
  ],
  "is_certified_translator": true,
  "is_sworn_translator": true,
  "language_pairs": [
    [
      0
    ]
  ],
  "last_name": "string",
  "last_online": "string",
  "last_worked": "string",
  "memoq": 0,
  "memsource": 0,
  "min_tqs": 0,
  "omegat": 0,
  "project_count": 0,
  "proofreader_experience": 0,
  "provides_creative_writing_service": true,
  "provides_postedit_service": true,
  "quote_file_subjects": [
    "string"
  ],
  "reference": "string",
  "sdl_trados": 0,
  "search": "string",
  "skype_id": "string",
  "smartcat": 0,
  "smartling": 0,
  "source_languages": [
    0
  ],
  "specialization": [
    "string"
  ],
  "status": [
    "string"
  ],
  "subtitle_edit": 0,
  "subtitle_workshop": 0,
  "translator_association": "string",
  "transsuite_2000": 0,
  "user_working_timezone": [
    "string"
  ],
  "vendor_profile_lsp": "string",
  "vendor_tags": [
    "string"
  ],
  "vendor_type": [
    "string"
  ],
  "vendor_working_timezone": [
    "string"
  ],
  "word_count": 0,
  "wordbee": 0,
  "wordfast": 0,
  "work_type": "string",
  "work_with": "string",
  "working_as": [
    "string"
  ],
  "xbench": 0,
  "xtm": 0
}
```

<h3 id="filter-vendors-based-on-provided-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|The page number|
|per_page|query|integer|false|The number of items per page|
|order_by|query|string|false|The field to order the results by|
|order|query|string|false|The order to sort the results by (ascending or descending)|
|body|body|[FilterVendorRequest](#schemafiltervendorrequest)|false|none|
|» clients|body|[integer]|false|none|
|» communication_channel|body|[string]|false|none|
|» corporate_ids_for_auth|body|[integer]|false|none|
|» corporates|body|[integer]|false|none|
|» country|body|[string]|false|none|
|» created_at|body|string|false|none|
|» current_services|body|[string]|false|none|
|» daily_proofreading_capacity|body|integer|false|none|
|» daily_translation_capacity|body|integer|false|none|
|» destination_languages|body|[integer]|false|none|
|» dtp_software|body|[string]|false|none|
|» email_address|body|string|false|none|
|» experience|body|[string]|false|none|
|» first_name|body|string|false|none|
|» id|body|[integer]|false|none|
|» is_certified_translator|body|boolean|false|none|
|» is_sworn_translator|body|boolean|false|none|
|» language_pairs|body|[[integer]]|false|none|
|» last_name|body|string|false|none|
|» last_online|body|string|false|none|
|» last_worked|body|string|false|none|
|» memoq|body|integer|false|none|
|» memsource|body|integer|false|none|
|» min_tqs|body|number|false|none|
|» omegat|body|integer|false|none|
|» project_count|body|integer|false|none|
|» proofreader_experience|body|integer|false|none|
|» provides_creative_writing_service|body|boolean|false|none|
|» provides_postedit_service|body|boolean|false|none|
|» quote_file_subjects|body|[string]|false|none|
|» reference|body|string|false|none|
|» sdl_trados|body|integer|false|none|
|» search|body|string|false|none|
|» skype_id|body|string|false|none|
|» smartcat|body|integer|false|none|
|» smartling|body|integer|false|none|
|» source_languages|body|[integer]|false|none|
|» specialization|body|[string]|false|none|
|» status|body|[string]|false|none|
|» subtitle_edit|body|integer|false|none|
|» subtitle_workshop|body|integer|false|none|
|» translator_association|body|string|false|none|
|» transsuite_2000|body|integer|false|none|
|» user_working_timezone|body|[string]|false|none|
|» vendor_profile_lsp|body|string|false|none|
|» vendor_tags|body|[string]|false|none|
|» vendor_type|body|[string]|false|none|
|» vendor_working_timezone|body|[string]|false|none|
|» word_count|body|integer|false|none|
|» wordbee|body|integer|false|none|
|» wordfast|body|integer|false|none|
|» work_type|body|string|false|none|
|» work_with|body|string|false|none|
|» working_as|body|[string]|false|none|
|» xbench|body|integer|false|none|
|» xtm|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "users": [
    {
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "birthday": "1970-01-01",
      "can_work_manual_files": true,
      "city": "string",
      "client": {
        "corporate": {
          "email": "string",
          "id": 0,
          "logo": "string",
          "name": "string",
          "phone_number": "string"
        },
        "nps": 0,
        "subjects": {
          "property1": 0,
          "property2": 0
        }
      },
      "corporate_id": 0,
      "country": "string",
      "created_at": 0,
      "do_not_contact": true,
      "email": "string",
      "first_name": "string",
      "has_pwd": true,
      "id": 0,
      "is_client": true,
      "is_developer": true,
      "is_proofreader": true,
      "is_prospect": true,
      "is_sales_person": true,
      "is_vendor": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "last_name": "string",
      "last_seen_online_at": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "login_as": {
          "href": "string"
        },
        "projects": {
          "href": "string"
        },
        "responsivity": {
          "href": "string"
        },
        "stats": {
          "href": "string"
        }
      },
      "locale": "string",
      "mailing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string"
      },
      "name": "string",
      "native_language": "string",
      "nps": 0,
      "phone_number": "string",
      "profile_picture_path": "string",
      "social_media": {
        "facebook_url": "string",
        "linkedIn_url": "string",
        "twitter_url": "string"
      },
      "state": "string",
      "status": "string",
      "street": "string",
      "timezone": "string",
      "tms_user_name": "string",
      "user_groups": [
        {
          "corporate_id": 0,
          "id": 0,
          "name": "string",
          "permissions": [
            "string"
          ]
        }
      ],
      "vendor": {
        "can_work_manual_files": true,
        "email_open_rate": 0,
        "is_frozen": true,
        "is_proofreader": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "native_language": "string",
        "pam_tqs": 0,
        "paypal_email": "string",
        "profile_survey": {
          "current_services": "string",
          "daily_proofreading_capacity": "string",
          "daily_translation_capacity": "string",
          "dtp_software": "string",
          "experience": "string",
          "is_certified_translator": "string",
          "is_sworn_translator": "string",
          "memoq": "string",
          "memsource": "string",
          "omegat": "string",
          "proofreader_experience": "string",
          "provides_creative_writing_service": "string",
          "provides_postedit_service": "string",
          "reference": "string",
          "sdl_trados": "string",
          "skype_id": "string",
          "smartcat": "string",
          "smartling": "string",
          "software": "string",
          "specialization": "string",
          "subtitle_edit": "string",
          "subtitle_workshop": "string",
          "translator_association": "string",
          "transsuite_2000": "string",
          "vendor_profile_lsp": "string",
          "wordbee": "string",
          "wordfast": "string",
          "work_type": "string",
          "work_with": "string",
          "working_as": "string",
          "working_timezone": "string",
          "xbench": "string",
          "xtm": "string"
        },
        "require_1099": true,
        "tags": [
          "string"
        ],
        "tms_user_name": "string",
        "vendor_type": "string"
      },
      "zip_code": "string"
    }
  ]
}
```

<h3 id="filter-vendors-based-on-provided-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response User List|[UserList](#schemauserlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Sends password reset email to the user's registered email address

<a id="opIdsendPasswordReminder"></a>

> Code samples

```bash
curl https://example.com/users/send-password-reminder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string"
  }'
```

`POST /users/send-password-reminder`

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="sends-password-reset-email-to-the-users-registered-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Email](#schemaemail)|false|none|
|» email|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="sends-password-reset-email-to-the-users-registered-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|Reminder already sent, wait for a while before new request!|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Returns all vendor tags for vendors filter

<a id="opIdgetAllVendorTags"></a>

> Code samples

```bash
curl https://example.com/users/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/tags`

Returns all vendor tags for vendors filter

> Example responses

> 200 Response

```json
[
  {
    "color": "string",
    "name": "string"
  }
]
```

<h3 id="returns-all-vendor-tags-for-vendors-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response tag list|Inline|

<h3 id="returns-all-vendor-tags-for-vendors-filter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VendorTag](#schemavendortag)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get user information, including client or vendor specific info.

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://example.com/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}`

<h3 id="get-user-information-including-client-or-vendor-specific-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "birthday": "1970-01-01",
  "can_work_manual_files": true,
  "city": "string",
  "client": {
    "corporate": {
      "email": "string",
      "id": 0,
      "logo": "string",
      "name": "string",
      "phone_number": "string"
    },
    "nps": 0,
    "subjects": {
      "property1": 0,
      "property2": 0
    }
  },
  "corporate_id": 0,
  "country": "string",
  "created_at": 0,
  "do_not_contact": true,
  "email": "string",
  "first_name": "string",
  "has_pwd": true,
  "id": 0,
  "is_client": true,
  "is_developer": true,
  "is_proofreader": true,
  "is_prospect": true,
  "is_sales_person": true,
  "is_vendor": true,
  "language_pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ],
  "last_name": "string",
  "last_seen_online_at": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "login_as": {
      "href": "string"
    },
    "projects": {
      "href": "string"
    },
    "responsivity": {
      "href": "string"
    },
    "stats": {
      "href": "string"
    }
  },
  "locale": "string",
  "mailing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string"
  },
  "name": "string",
  "native_language": "string",
  "nps": 0,
  "phone_number": "string",
  "profile_picture_path": "string",
  "social_media": {
    "facebook_url": "string",
    "linkedIn_url": "string",
    "twitter_url": "string"
  },
  "state": "string",
  "status": "string",
  "street": "string",
  "timezone": "string",
  "tms_user_name": "string",
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ],
  "vendor": {
    "can_work_manual_files": true,
    "email_open_rate": 0,
    "is_frozen": true,
    "is_proofreader": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "native_language": "string",
    "pam_tqs": 0,
    "paypal_email": "string",
    "profile_survey": {
      "current_services": "string",
      "daily_proofreading_capacity": "string",
      "daily_translation_capacity": "string",
      "dtp_software": "string",
      "experience": "string",
      "is_certified_translator": "string",
      "is_sworn_translator": "string",
      "memoq": "string",
      "memsource": "string",
      "omegat": "string",
      "proofreader_experience": "string",
      "provides_creative_writing_service": "string",
      "provides_postedit_service": "string",
      "reference": "string",
      "sdl_trados": "string",
      "skype_id": "string",
      "smartcat": "string",
      "smartling": "string",
      "software": "string",
      "specialization": "string",
      "subtitle_edit": "string",
      "subtitle_workshop": "string",
      "translator_association": "string",
      "transsuite_2000": "string",
      "vendor_profile_lsp": "string",
      "wordbee": "string",
      "wordfast": "string",
      "work_type": "string",
      "work_with": "string",
      "working_as": "string",
      "working_timezone": "string",
      "xbench": "string",
      "xtm": "string"
    },
    "require_1099": true,
    "tags": [
      "string"
    ],
    "tms_user_name": "string",
    "vendor_type": "string"
  },
  "zip_code": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-user-information-including-client-or-vendor-specific-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User summary|[User](#schemauser)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## updateUser

<a id="opIdupdateUser"></a>

> Code samples

```bash
curl https://example.com/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "birthday": "1970-01-01",
    "email": "string",
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "notifications": {
      "phone_number": "string",
      "sms_enabled": true
    },
    "notify": true,
    "paypal_email": "string",
    "require_1099": true,
    "user_groups": [
      0
    ]
  }'
```

`POST /{userId}`

> Body parameter

```json
{
  "city": "string",
  "country": "string",
  "phone": "string",
  "state": "string",
  "street": "string",
  "zip": "string",
  "birthday": "1970-01-01",
  "email": "string",
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "notifications": {
    "phone_number": "string",
    "sms_enabled": true
  },
  "notify": true,
  "paypal_email": "string",
  "require_1099": true,
  "user_groups": [
    0
  ]
}
```

<h3 id="updateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|
|body|body|[UserUpdateContent](#schemauserupdatecontent)|false|none|
|» city|body|string|false|none|
|» country|body|string|false|none|
|» phone|body|string|false|none|
|» state|body|string|false|none|
|» street|body|string|false|none|
|» zip|body|string|false|none|
|» birthday|body|string(date)|false|none|
|» email|body|string|false|Optional. User e-mail.|
|» first_name|body|string|false|Optional. User first name.|
|» id|body|integer(int64)|false|Optional. ID of the user being updated.|
|» last_name|body|string|false|Optional. User last name.|
|» notifications|body|object|false|Notification settings|
|» » phone_number|body|string|false|User phone number|
|» » sms_enabled|body|boolean|false|User sms notification setting|
|» notify|body|boolean|false|Notify new user account creation with login information and MotaWord introduction.|
|» paypal_email|body|string|false|Optional. Vendor paypal e-mail|
|» require_1099|body|boolean|false|Optional. Whether this vendor requires 1099 form in US for their earnings.|
|» user_groups|body|[integer(int64)]|false|A list of user group IDs|

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "birthday": "1970-01-01",
  "can_work_manual_files": true,
  "city": "string",
  "client": {
    "corporate": {
      "email": "string",
      "id": 0,
      "logo": "string",
      "name": "string",
      "phone_number": "string"
    },
    "nps": 0,
    "subjects": {
      "property1": 0,
      "property2": 0
    }
  },
  "corporate_id": 0,
  "country": "string",
  "created_at": 0,
  "do_not_contact": true,
  "email": "string",
  "first_name": "string",
  "has_pwd": true,
  "id": 0,
  "is_client": true,
  "is_developer": true,
  "is_proofreader": true,
  "is_prospect": true,
  "is_sales_person": true,
  "is_vendor": true,
  "language_pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ],
  "last_name": "string",
  "last_seen_online_at": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "login_as": {
      "href": "string"
    },
    "projects": {
      "href": "string"
    },
    "responsivity": {
      "href": "string"
    },
    "stats": {
      "href": "string"
    }
  },
  "locale": "string",
  "mailing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string"
  },
  "name": "string",
  "native_language": "string",
  "nps": 0,
  "phone_number": "string",
  "profile_picture_path": "string",
  "social_media": {
    "facebook_url": "string",
    "linkedIn_url": "string",
    "twitter_url": "string"
  },
  "state": "string",
  "status": "string",
  "street": "string",
  "timezone": "string",
  "tms_user_name": "string",
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ],
  "vendor": {
    "can_work_manual_files": true,
    "email_open_rate": 0,
    "is_frozen": true,
    "is_proofreader": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "native_language": "string",
    "pam_tqs": 0,
    "paypal_email": "string",
    "profile_survey": {
      "current_services": "string",
      "daily_proofreading_capacity": "string",
      "daily_translation_capacity": "string",
      "dtp_software": "string",
      "experience": "string",
      "is_certified_translator": "string",
      "is_sworn_translator": "string",
      "memoq": "string",
      "memsource": "string",
      "omegat": "string",
      "proofreader_experience": "string",
      "provides_creative_writing_service": "string",
      "provides_postedit_service": "string",
      "reference": "string",
      "sdl_trados": "string",
      "skype_id": "string",
      "smartcat": "string",
      "smartling": "string",
      "software": "string",
      "specialization": "string",
      "subtitle_edit": "string",
      "subtitle_workshop": "string",
      "translator_association": "string",
      "transsuite_2000": "string",
      "vendor_profile_lsp": "string",
      "wordbee": "string",
      "wordfast": "string",
      "work_type": "string",
      "work_with": "string",
      "working_as": "string",
      "working_timezone": "string",
      "xbench": "string",
      "xtm": "string"
    },
    "require_1099": true,
    "tags": [
      "string"
    ],
    "tms_user_name": "string",
    "vendor_type": "string"
  },
  "zip_code": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User info|[User](#schemauser)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## approveVendorApplication

<a id="opIdapproveVendorApplication"></a>

> Code samples

```bash
curl https://example.com/0/approve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{userId}/approve`

<h3 id="approvevendorapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="approvevendorapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vendor application of this user is approved. User is ready to work with us.|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## Delete requester account

<a id="opIddeleteUserAccount"></a>

> Code samples

```bash
curl https://example.com/0/delete-account \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{userId}/delete-account`

<h3 id="delete-requester-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-requester-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## downgradeUserProofreader

<a id="opIddowngradeUserProofreader"></a>

> Code samples

```bash
curl https://example.com/0/downgrade-proofreader \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{userId}/downgrade-proofreader`

<h3 id="downgradeuserproofreader-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="downgradeuserproofreader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|304|Not Modified|Vendor is already a translator|None|
|400|Bad Request|VendorNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.

<a id="opIdgetUserEarnings"></a>

> Code samples

```bash
curl https://example.com/0/earnings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/earnings`

<h3 id="returns-your-vendor-earnings-includes-real-time-earnings-from-ongoing-projects-and-fixed-earnings-from-completed-projects-also-includes-total-earnings-and-string-edits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "completed": [
    {
      "amount": 0,
      "currency": "usd",
      "due_date": "1970-01-01T00:00:00Z",
      "status": "paid",
      "words": 0,
      "words_approved": 0,
      "words_translated": 0,
      "is_above_average": true,
      "score": 0,
      "strings_edited": 0,
      "strings_translated": 0,
      "project_id": 0
    }
  ],
  "ongoing": [
    {
      "amount": 0,
      "currency": "usd",
      "due_date": "1970-01-01T00:00:00Z",
      "status": "paid",
      "words": 0,
      "words_approved": 0,
      "words_translated": 0,
      "is_above_average": true,
      "score": 0,
      "strings_edited": 0,
      "strings_translated": 0,
      "project_id": 0
    }
  ],
  "total": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="returns-your-vendor-earnings-includes-real-time-earnings-from-ongoing-projects-and-fixed-earnings-from-completed-projects-also-includes-total-earnings-and-string-edits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Earnings for vendors|[Earnings](#schemaearnings)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## Freeze requester account for project notifications

<a id="opIdfreezeUserAccount"></a>

> Code samples

```bash
curl https://example.com/0/freeze-account \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{userId}/freeze-account`

<h3 id="freeze-requester-account-for-project-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="freeze-requester-account-for-project-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|304|Not Modified|Account is already frozen for notifications|None|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## makeUserProofreader

<a id="opIdmakeUserProofreader"></a>

> Code samples

```bash
curl https://example.com/0/make-proofreader \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{userId}/make-proofreader`

<h3 id="makeuserproofreader-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="makeuserproofreader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|304|Not Modified|Vendor is already a proofreader|None|
|400|Bad Request|VendorNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## subscribeUserNotification

<a id="opIdsubscribeUserNotification"></a>

> Code samples

```bash
curl https://example.com/0/notifications/subscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "device": "iOS",
    "endpoint": "string",
    "type": "OneSignal"
  }'
```

`POST /{userId}/notifications/subscribe`

> Body parameter

```json
{
  "device": "iOS",
  "endpoint": "string",
  "type": "OneSignal"
}
```

<h3 id="subscribeusernotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|
|body|body|[NotificationSubscription](#schemanotificationsubscription)|false|none|
|» device|body|string|false|none|
|» endpoint|body|string|false|OneSignal calls this "player ID".|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» device|iOS|
|» device|Android|
|» device|Chrome|
|» device|Firefox|
|» device|Safari|
|» device|Edge|
|» device|Amazon|
|» device|WindowsPhone|
|» device|Windows|
|» device|MacOS|
|» type|OneSignal|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="subscribeusernotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Saved notification subscription information|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|MissingParameter \| Failed to save subscription|[Error](#schemaerror)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## unsubscribeUserNotification

<a id="opIdunsubscribeUserNotification"></a>

> Code samples

```bash
curl https://example.com/0/notifications/unsubscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "device": "iOS",
    "endpoint": "string",
    "type": "OneSignal"
  }'
```

`POST /{userId}/notifications/unsubscribe`

> Body parameter

```json
{
  "device": "iOS",
  "endpoint": "string",
  "type": "OneSignal"
}
```

<h3 id="unsubscribeusernotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|
|body|body|[NotificationSubscription](#schemanotificationsubscription)|false|none|
|» device|body|string|false|none|
|» endpoint|body|string|false|OneSignal calls this "player ID".|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» device|iOS|
|» device|Android|
|» device|Chrome|
|» device|Firefox|
|» device|Safari|
|» device|Edge|
|» device|Amazon|
|» device|WindowsPhone|
|» device|Windows|
|» device|MacOS|
|» type|OneSignal|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="unsubscribeusernotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted notification subscription information|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|MissingParameter \| Failed to delete subscription|[Error](#schemaerror)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## View user's payment and billing info

<a id="opIdgetUserPaymentInfo"></a>

> Code samples

```bash
curl https://example.com/0/payment \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/payment`

Returns billing and saved credit card information for user, and their corporate account if present & allowed.

<h3 id="view-users-payment-and-billing-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "card": {
    "bin": "string",
    "id": 0,
    "is_default": true,
    "payment_code": "string"
  },
  "cards": [
    {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    }
  ],
  "corporate": {
    "allow_api_invoicing": true,
    "allow_payment_code": true,
    "auto_charge": true,
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "card": {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    },
    "contact_email_address": "string",
    "payment_code": "string"
  },
  "shared_card": {
    "bin": "string",
    "id": 0,
    "is_default": true,
    "payment_code": "string"
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-users-payment-and-billing-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns billing and saved card information for user, and their corporate if present.|[PaymentInfo](#schemapaymentinfo)|
|404|Not Found|UserNotFound UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update user payment info

<a id="opIdupdateUserPaymentInfo"></a>

> Code samples

```bash
curl https://example.com/0/payment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "card": {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    },
    "cards": [
      {
        "bin": "string",
        "id": 0,
        "is_default": true,
        "payment_code": "string"
      }
    ],
    "corporate": {
      "allow_api_invoicing": true,
      "allow_payment_code": true,
      "auto_charge": true,
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "card": {
        "bin": "string",
        "id": 0,
        "is_default": true,
        "payment_code": "string"
      },
      "contact_email_address": "string",
      "payment_code": "string"
    },
    "shared_card": {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    }
  }'
```

`POST /{userId}/payment`

Update user's billing and saved credit card information

> Body parameter

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "card": {
    "bin": "string",
    "id": 0,
    "is_default": true,
    "payment_code": "string"
  },
  "cards": [
    {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    }
  ],
  "corporate": {
    "allow_api_invoicing": true,
    "allow_payment_code": true,
    "auto_charge": true,
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "card": {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    },
    "contact_email_address": "string",
    "payment_code": "string"
  },
  "shared_card": {
    "bin": "string",
    "id": 0,
    "is_default": true,
    "payment_code": "string"
  }
}
```

<h3 id="update-user-payment-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|
|body|body|[PaymentInfo](#schemapaymentinfo)|false|none|
|» billing|body|[BillingAddress](#schemabillingaddress)|false|none|
|» card|body|[CreditCard](#schemacreditcard)|false|none|
|» cards|body|[[CreditCard](#schemacreditcard)]|false|none|
|» corporate|body|object|false|none|
|» » allow_api_invoicing|body|boolean|false|none|
|» » allow_payment_code|body|boolean|false|none|
|» » auto_charge|body|boolean|false|none|
|» » billing|body|[BillingAddress](#schemabillingaddress)|false|none|
|» » card|body|[CreditCard](#schemacreditcard)|false|none|
|» » contact_email_address|body|string|false|none|
|» » payment_code|body|string|false|none|
|» shared_card|body|[CreditCard](#schemacreditcard)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-user-payment-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Returns a list of permissions that this user is authorized for.

<a id="opIdgetUserPermissions"></a>

> Code samples

```bash
curl https://example.com/0/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/permissions`

<h3 id="returns-a-list-of-permissions-that-this-user-is-authorized-for-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "permissions": [
    "string"
  ]
}
```

<h3 id="returns-a-list-of-permissions-that-this-user-is-authorized-for-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of permission strings|[PermissionList](#schemapermissionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## uploadUserProfilePicture

<a id="opIduploadUserProfilePicture"></a>

> Code samples

```bash
curl https://example.com/0/profile-picture \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "profile_picture": "string"
  }'
```

`POST /{userId}/profile-picture`

> Body parameter

```json
{
  "profile_picture": "string"
}
```

<h3 id="uploaduserprofilepicture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|
|body|body|[ProfilePictureUpload](#schemaprofilepictureupload)|false|none|
|» profile_picture|body|string(binary)|true|Profile picture file contents. Accepted extensions are png, jpg.|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="uploaduserprofilepicture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|NoFileUploaded|[Error](#schemaerror)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## rejectVendorApplication

<a id="opIdrejectVendorApplication"></a>

> Code samples

```bash
curl https://example.com/0/reject \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{userId}/reject`

<h3 id="rejectvendorapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="rejectvendorapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vendor application of this user is rejected.|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## Sends email confirmation email for a user

<a id="opIdsendUserEmailConfirmation"></a>

> Code samples

```bash
curl https://example.com/0/resend-email-confirmation \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{userId}/resend-email-confirmation`

<h3 id="sends-email-confirmation-email-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 202 Response

```json
{
  "status": "already_confirmed"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="sends-email-confirmation-email-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|confirmation email has been sent|Inline|
|202|Accepted|status is `already_confirmed` when user has already confirmed their email address.|Inline|
|400|Bad Request|VendorNotFound - this is not a vendor user account|[Error](#schemaerror)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<h3 id="sends-email-confirmation-email-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[OperationStatusEnum](#schemaoperationstatusenum)|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|
|status|success|

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[OperationStatusEnum](#schemaoperationstatusenum)|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|
|status|already_confirmed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## Returns a user's vendor responsivity stats

<a id="opIdgetUserResponsivity"></a>

> Code samples

```bash
curl https://example.com/0/responsivity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/responsivity`

<h3 id="returns-a-users-vendor-responsivity-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|
|period|query|string|false|Period for calcualtion.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|monthly|
|period|weekly|

> Example responses

> 200 Response

```json
{
  "links": {
    "self": {
      "href": "string"
    }
  },
  "responsivity": [
    {
      "invited": 0,
      "month": "string",
      "notEntered": 0,
      "onlyEntered": 0,
      "score": 0,
      "week": "string",
      "worked": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="returns-a-users-vendor-responsivity-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vendor responsivity stats|[ResponsivityList](#schemaresponsivitylist)|
|400|Bad Request|VendorNotFound - this is not a vendor user account|[Error](#schemaerror)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## Returns a user's client and vendor statistics. This used to be called &quot;summary&quot; (\@deprecated).

<a id="opIdgetUserStats"></a>

> Code samples

```bash
curl https://example.com/0/stats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/stats`

<h3 id="returns-a-users-client-and-vendor-statistics-this-used-to-be-called-summary-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "client": {
    "document_count": 0,
    "nps": 0,
    "started_project_count": 0,
    "total_discounted": {
      "amount": 0,
      "currency": "usd"
    },
    "total_project_count": 0,
    "total_spending": 0,
    "translator_count": 0
  },
  "vendor": {
    "earnings": {
      "total": 0
    },
    "projects": {
      "invited": 0,
      "total": 0,
      "worked": 0
    },
    "words": {
      "approved": 0,
      "translated": 0
    }
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="returns-a-users-client-and-vendor-statistics-this-used-to-be-called-summary-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User stats for client and vendors|[Stats](#schemastats)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## Returns the language pairs that the user has ordered most.

<a id="opIdgetUserPopularPairs"></a>

> Code samples

```bash
curl https://example.com/0/stats/popular-pairs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/stats/popular-pairs`

<h3 id="returns-the-language-pairs-that-the-user-has-ordered-most-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="returns-the-language-pairs-that-the-user-has-ordered-most-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's most ordered language pairs|[PopularLanguagePairs](#schemapopularlanguagepairs)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## Returns a user's project statistics.

<a id="opIdgetUserProjectStats"></a>

> Code samples

```bash
curl https://example.com/0/stats/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/stats/projects`

<h3 id="returns-a-users-project-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "stats": [
    {
      "languages": [
        "string"
      ],
      "month": "string",
      "number_of_projects": 0,
      "total_spending": 0,
      "week": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="returns-a-users-project-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User stats for client and vendors|[ClientProjectStats](#schemaclientprojectstats)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## suspendUser

<a id="opIdsuspendUser"></a>

> Code samples

```bash
curl https://example.com/0/suspend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "string"
  }'
```

`POST /{userId}/suspend`

> Body parameter

```json
{
  "reason": "string"
}
```

<h3 id="suspenduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|
|body|body|[SuspendUserRequest](#schemasuspenduserrequest)|false|none|
|» reason|body|string|false|Suspension reason for vendor|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="suspenduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Suspended user account.|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

## Unfreeze requester account for project notifications

<a id="opIdunfreezeUserAccount"></a>

> Code samples

```bash
curl https://example.com/0/unfreeze-account \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{userId}/unfreeze-account`

<h3 id="unfreeze-requester-account-for-project-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="unfreeze-requester-account-for-project-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|304|Not Modified|Account is already unfrozen for notifications|None|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Returns a list of user groups that this user belongs to.

<a id="opIdgetThisUserGroups"></a>

> Code samples

```bash
curl https://example.com/0/user-groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/user-groups`

<h3 id="returns-a-list-of-user-groups-that-this-user-belongs-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ]
}
```

<h3 id="returns-a-list-of-user-groups-that-this-user-belongs-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of user groups|[UserGroupList](#schemausergrouplist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## updateUserGroup

<a id="opIdupdateUserGroup"></a>

> Code samples

```bash
curl https://example.com/0/user-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allow_hash_in_url": true,
    "allow_query_in_url": true,
    "auto_detect_source_language": true,
    "created_at": "1970-01-01T00:00:00Z",
    "elements": "string",
    "follow_user": true,
    "force_cache_refresh_interval": true,
    "id": 0,
    "language_mappings": "string",
    "live": true,
    "modify_links": true,
    "name": "string",
    "optimize_per_page": true,
    "pages": "string",
    "path_regex": "string",
    "position": "string",
    "query_name": "locale",
    "reboot_on_url_change": true,
    "restricted_domains": "string",
    "sections": "string",
    "test_mode": true,
    "theme": "string",
    "token": "string",
    "url_change_mode": "string",
    "url_mode": "string",
    "use_cache": true,
    "use_dummy_translations": true,
    "variables": "string"
  }'
```

`POST /{userId}/user-groups`

> Body parameter

```json
{
  "allow_hash_in_url": true,
  "allow_query_in_url": true,
  "auto_detect_source_language": true,
  "created_at": "1970-01-01T00:00:00Z",
  "elements": "string",
  "follow_user": true,
  "force_cache_refresh_interval": true,
  "id": 0,
  "language_mappings": "string",
  "live": true,
  "modify_links": true,
  "name": "string",
  "optimize_per_page": true,
  "pages": "string",
  "path_regex": "string",
  "position": "string",
  "query_name": "locale",
  "reboot_on_url_change": true,
  "restricted_domains": "string",
  "sections": "string",
  "test_mode": true,
  "theme": "string",
  "token": "string",
  "url_change_mode": "string",
  "url_mode": "string",
  "use_cache": true,
  "use_dummy_translations": true,
  "variables": "string"
}
```

<h3 id="updateusergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|
|body|body|[ActiveWidget](#schemaactivewidget)|false|none|
|» allow_hash_in_url|body|boolean|false|When true, hash params are included in filenames. When false, params are ignored.|
|» allow_query_in_url|body|boolean|false|When true, query params are included in filenames. When false, params are ignored.|
|» auto_detect_source_language|body|boolean|false|When true, we will ignore the source language of your project and try to automatically detect the source language of the given content. This is especially useful in environments with unpredictable source contents, such as a chat environment.|
|» created_at|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» elements|body|string|false|Continuous project exclusive elements and rules|
|» follow_user|body|boolean|false|Specify whether we should follow the user around in your website and automatically translate pages.|
|» force_cache_refresh_interval|body|boolean|false|Determines whether to force-refresh local browser cache of your translations in certain period of times, no matter if there is a new activity in the project.|
|» id|body|integer(int64)|false|none|
|» language_mappings|body|string|false|Continuous project language mappings|
|» live|body|boolean|false|Whether ActiveJS should be considered live in an embedded site. Use `false` if you are still testing Active. Go to your Active dashboard and follow links to your website to actually test Active.|
|» modify_links|body|boolean|false|We can automatically localize the same-domain URLs in your page. The way we localize the URL depends on urlMode configuration. We can either add/update the locale query parameter, or add/update the path of the URL.|
|» name|body|string|false|none|
|» optimize_per_page|body|boolean|false|When true, Active ecosystem will optimize the script and data flows per page, rather than per project. This decreases the bandwidth usage per script, but makes translation publishing more complex and script serving per-page.|
|» pages|body|string|false|Continuous project page rules|
|» path_regex|body|string|false|Custom regex for path-type URL mode.|
|» position|body|string|false|Options are "bottom-left", "bottom-right", "in-place"|
|» query_name|body|string|false|Query parameter name to be used with query-type URL mode. Default is 'locale'.|
|» reboot_on_url_change|body|boolean|false|When true, Active ecosystem reboots itself when url changes.|
|» restricted_domains|body|string|false|JSON string for a list of domains that this widget's API interactions are limited to.|
|» sections|body|string|false|Continuous project section rules|
|» test_mode|body|boolean|false|Is the Active Widget in test mode? This changes a couple behaviors in the widget to make it easier for you to test and develop your Active integration.|
|» theme|body|string|false|\"light\", \"dark\" OR custom JSON.|
|» token|body|string|false|Token that you should use when you are using this widget on your website.|
|» url_change_mode|body|string|false|When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can do this by actually redirecting the user to the new page, or by simply changing the URL in the address bar via browser's History API. When NULL, we won't apply any URL changes.|
|» url_mode|body|string|false|When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can either change the path of the URL to prefix it with the locale code, or we can add a query parameter to the URL. We also use this mode to detect the locale for the current page when a user directly loads a page. When NULL, locale detection from URL will be disabled (even then, if the user has selected a locale manually, and followUser is enabled, we will still automatically translate the page in user's locale.|
|» use_cache|body|boolean|false|Should we make use of local browser cache for your visitors? We will refresh the cache when Active JS detects new activity in your project.|
|» use_dummy_translations|body|boolean|false|When enabled, we will translate your website with dummy content, rather than actually using MT/TM.|
|» variables|body|string|false|Continuous project variable definitions|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="updateusergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of user groups|[UserGroupList](#schemausergrouplist)|
|400|Bad Request|InvalidParameter|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: privileged )
</aside>

<h1 id="motaword-api-document">Document</h1>

## View your documents

<a id="opIdgetDocuments"></a>

> Code samples

```bash
curl https://example.com/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /documents`

View a list of files and documents that you have translations for. This endpoint lets you view your MotaWord account as a multilingual translated file repository, without needing to go through your projects to interact with files in them.

<h3 id="view-your-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recent|query|boolean|false|When true, this will return the most 4 recent active documents.|
|search|query|string|false|none|
|type_filter|query|string|false|none|
|language_code|query|string|false|searches in source language of documents, in source and target languages of document's quote|
|page|query|integer(int64)|false|none|
|per_page|query|integer(int64)|false|none|
|order_by|query|string|false|none|
|order_type|query|[ListOrderType](#schemalistordertype)|false|none|
|with[]|query|[string]|false|Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type_filter|ALL|
|type_filter|TEXT_DOCUMENTS|
|type_filter|PRESENTATIONS|
|type_filter|SPREADSHEETS|
|type_filter|PDFS|
|type_filter|IMAGES|
|type_filter|SUBTITLES|
|type_filter|DESIGNS|
|type_filter|LOCALIZATION|
|type_filter|WEB|
|type_filter|STYLE_GUIDES|
|type_filter|GLOSSARIES|
|order_by|id|
|order_by|updated_at|
|order_by|created_at|
|order_by|name|
|order_type|asc|
|order_type|desc|
|with[]|preview|
|with[]|editors|

> Example responses

> 200 Response

```json
{
  "documents": [
    {
      "file_type": "string",
      "has_custom_package": true,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "manual_files": [
        {
          "driveFileId": 0,
          "isProofread": true,
          "isTranslated": true,
          "language": "string",
          "proofreadingFileId": 0,
          "translationFileId": 0
        }
      ],
      "name": "string",
      "project_id": 0,
      "review_in_manual_editor": true,
      "scheme": {},
      "search_score": 0,
      "source_language": "string",
      "subject": "string",
      "target_languages": [
        "string"
      ],
      "uploaded_at": 0,
      "word_count": 0
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

<h3 id="view-your-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document list|[DocumentList](#schemadocumentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get a list of subjects of projects

<a id="opIdgetAllDocumentSubjects"></a>

> Code samples

```bash
curl https://example.com/documents/subjects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /documents/subjects`

Get a list of subjects of projects

> Example responses

> 200 Response

```json
[
  {
    "name": "string"
  }
]
```

<h3 id="get-a-list-of-subjects-of-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of subjects of all projects.|Inline|

<h3 id="get-a-list-of-subjects-of-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DocumentSubjects](#schemadocumentsubjects)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View a single document

<a id="opIdgetDocument"></a>

> Code samples

```bash
curl https://example.com/documents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /documents/{documentId}`

View a single document from your MotaWord account with its translation info.

<h3 id="view-a-single-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|Document ID or filename|

> Example responses

> 200 Response

```json
{
  "billed_word_count": 0,
  "id": "string",
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "post_edit_enabled": true,
  "project_id": "string",
  "source_language": "string",
  "target_languages": [
    "string"
  ],
  "word_count": 0
}
```

<h3 id="view-a-single-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document|[ContinuousProjectDocument](#schemacontinuousprojectdocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View a document translation progress

<a id="opIdgetDocumentProgress"></a>

> Code samples

```bash
curl https://example.com/documents/0/progress \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /documents/{documentId}/progress`

View the translation or proofreading progress of a document in your account. You can also track the progress of a document under the project that it was ordered with.

<h3 id="view-a-document-translation-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|number|true|Document ID|

> Example responses

> 200 Response

```json
{
  "languages": {
    "property1": {
      "proofreading": 0,
      "total": 0,
      "translation": 0,
      "word_count": 0
    },
    "property2": {
      "proofreading": 0,
      "total": 0,
      "translation": 0,
      "word_count": 0
    }
  },
  "links": {
    "self": {
      "href": "string"
    },
    "project": {
      "href": "string"
    }
  },
  "project_status": "pending",
  "proofreading": 0,
  "total": 0,
  "translation": 0,
  "word_count": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-a-document-translation-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Progress information|[Progress](#schemaprogress)|
|404|Not Found|DocumentNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Regenerate preview and return preview URL for given file

<a id="opIdregeneratePreview"></a>

> Code samples

```bash
curl https://example.com/documents/0/regenerate_preview \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /documents/{documentId}/regenerate_preview`

Regenerate preview and return preview URL for given file

<h3 id="regenerate-preview-and-return-preview-url-for-given-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|integer(int64)|true|Document ID|

> Example responses

> 200 Response

```json
{
  "link": {
    "href": "string"
  },
  "source": "string"
}
```

<h3 id="regenerate-preview-and-return-preview-url-for-given-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|RegeneratePreviewResponse|[RegeneratePreviewResponse](#schemaregeneratepreviewresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Find documents similar to this document.

<a id="opIdgetSimilarDocuments"></a>

> Code samples

```bash
curl https://example.com/documents/0/similars \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /documents/{documentId}/similars`

Find documents similar to this document. Optionally, include translation information.

<h3 id="find-documents-similar-to-this-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|integer(int64)|true|Document ID|
|per_page|query|integer(int64)|false|Determines the number of similar documents to return.|
|with[]|query|[string]|false|Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|with[]|preview|
|with[]|editors|

> Example responses

> 200 Response

```json
{
  "documents": [
    {
      "file_type": "string",
      "has_custom_package": true,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "manual_files": [
        {
          "driveFileId": 0,
          "isProofread": true,
          "isTranslated": true,
          "language": "string",
          "proofreadingFileId": 0,
          "translationFileId": 0
        }
      ],
      "name": "string",
      "project_id": 0,
      "review_in_manual_editor": true,
      "scheme": {},
      "search_score": 0,
      "source_language": "string",
      "subject": "string",
      "target_languages": [
        "string"
      ],
      "uploaded_at": 0,
      "word_count": 0
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

<h3 id="find-documents-similar-to-this-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document list|[DocumentList](#schemadocumentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Use the translation of given source manual document as manual draft source for the given target document.

<a id="opIduseAsDraft"></a>

> Code samples

```bash
curl https://example.com/documents/0/use_as_draft \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fromFileId": 0,
    "fromManualTranslationFileId": 0,
    "toManualTranslationFileId": 0
  }'
```

`POST /documents/{documentId}/use_as_draft`

Use the translation of given source manual document as manual draft source for the given target document.

> Body parameter

```json
{
  "fromFileId": 0,
  "fromManualTranslationFileId": 0,
  "toManualTranslationFileId": 0
}
```

<h3 id="use-the-translation-of-given-source-manual-document-as-manual-draft-source-for-the-given-target-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|integer(int64)|true|Document ID|
|body|body|[UseAsDraftPayload](#schemauseasdraftpayload)|false|none|
|» fromFileId|body|number|false|none|
|» fromManualTranslationFileId|body|number|false|none|
|» toManualTranslationFileId|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="use-the-translation-of-given-source-manual-document-as-manual-draft-source-for-the-given-target-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation status|[OperationStatus](#schemaoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Use the translation of the given manual document as a regular file.

<a id="opIduseAsRegular"></a>

> Code samples

```bash
curl https://example.com/documents/0/use_as_regular \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowOriginalFilePreview": true,
    "allowReviewInManualEditor": true,
    "disableInvitations": true,
    "fromManualTranslationFileId": 0,
    "hideNumbers": true,
    "recreate": true
  }'
```

`POST /documents/{documentId}/use_as_regular`

Use the translation of the given manual document as a regular file.

> Body parameter

```json
{
  "allowOriginalFilePreview": true,
  "allowReviewInManualEditor": true,
  "disableInvitations": true,
  "fromManualTranslationFileId": 0,
  "hideNumbers": true,
  "recreate": true
}
```

<h3 id="use-the-translation-of-the-given-manual-document-as-a-regular-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|integer(int64)|true|Document ID|
|body|body|[UseAsRegularPayload](#schemauseasregularpayload)|false|none|
|» allowOriginalFilePreview|body|boolean|false|none|
|» allowReviewInManualEditor|body|boolean|false|none|
|» disableInvitations|body|boolean|false|none|
|» fromManualTranslationFileId|body|number|false|none|
|» hideNumbers|body|boolean|false|none|
|» recreate|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="use-the-translation-of-the-given-manual-document-as-a-regular-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation status|[OperationStatus](#schemaoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get a list of your documents

<a id="opIdgetUserDocuments"></a>

> Code samples

```bash
curl https://example.com/0/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/documents`

Get a list of your documents

<h3 id="get-a-list-of-your-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|
|recent|query|boolean|false|When true, this will return the most 4 recent active documents.|
|search|query|string|false|none|
|type_filter|query|string|false|none|
|language_code|query|string|false|searches in source language of documents, in source and target languages of document's quote|
|page|query|integer(int64)|false|none|
|per_page|query|integer(int64)|false|none|
|order_by|query|string|false|none|
|order_type|query|[ListOrderType](#schemalistordertype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type_filter|ALL|
|type_filter|TEXT_DOCUMENTS|
|type_filter|PRESENTATIONS|
|type_filter|SPREADSHEETS|
|type_filter|PDFS|
|type_filter|IMAGES|
|type_filter|SUBTITLES|
|type_filter|DESIGNS|
|type_filter|LOCALIZATION|
|type_filter|WEB|
|type_filter|STYLE_GUIDES|
|type_filter|GLOSSARIES|
|order_by|id|
|order_by|updated_at|
|order_by|created_at|
|order_by|name|
|order_type|asc|
|order_type|desc|

> Example responses

> 200 Response

```json
{
  "documents": [
    {
      "file_type": "string",
      "has_custom_package": true,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "manual_files": [
        {
          "driveFileId": 0,
          "isProofread": true,
          "isTranslated": true,
          "language": "string",
          "proofreadingFileId": 0,
          "translationFileId": 0
        }
      ],
      "name": "string",
      "project_id": 0,
      "review_in_manual_editor": true,
      "scheme": {},
      "search_score": 0,
      "source_language": "string",
      "subject": "string",
      "target_languages": [
        "string"
      ],
      "uploaded_at": 0,
      "word_count": 0
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

<h3 id="get-a-list-of-your-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document list|[DocumentList](#schemadocumentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-glossary">Glossary</h1>

## Download account glossary.

<a id="opIddownloadGlobalGlossary"></a>

> Code samples

```bash
curl https://example.com/glossary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /glossary`

Download your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

> Example responses

> 200 Response

```json
"string"
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-account-glossary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Glossary file streamed.|Inline|
|404|Not Found|GlossaryNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Create or update the account glossary

<a id="opIdupdateGlobalGlossary"></a>

> Code samples

```bash
curl https://example.com/glossary \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "glossary": "string"
  }'
```

`POST /glossary`

Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

> Body parameter

```json
{
  "glossary": "string"
}
```

<h3 id="create-or-update-the-account-glossary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountGlossaryUploadRequest](#schemaaccountglossaryuploadrequest)|false|none|
|» glossary|body|string(binary)|true|Glossary file. Currently supported formats: .xlsx, .tbx|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="create-or-update-the-account-glossary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|FileTooLarge FileTooSmall NoFileUploaded|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedGlossaryFormat|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View glossaries

<a id="opIdgetGlossaries"></a>

> Code samples

```bash
curl https://example.com/projects/0/glossaries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/glossaries`

View a list of glossaries previously uploaded to the project.

<h3 id="view-glossaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "glossaries": [
    {
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "name": "string",
      "uploaded_at": 0
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-glossaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of glossary models|[GlossaryList](#schemaglossarylist)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Upload a glossary file

<a id="opIdcreateGlossary"></a>

> Code samples

```bash
curl https://example.com/projects/0/glossaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "glossaries": "string"
  }'
```

`POST /projects/{projectId}/glossaries`

Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.

> Body parameter

```json
{
  "glossaries": "string"
}
```

<h3 id="upload-a-glossary-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|body|body|[GlossaryUploadRequest](#schemaglossaryuploadrequest)|false|none|
|» glossaries|body|string(binary)|true|You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "uploaded_at": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="upload-a-glossary-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newly created glossary model.|[Glossary](#schemaglossary)|
|400|Bad Request|FileTooLarge|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedGlossaryFormat|[Error](#schemaerror)|
|406|Not Acceptable|ProjectAlreadyHasGlossary|[Error](#schemaerror)|
|409|Conflict|ProjectAlreadyStarted|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View a glossary

<a id="opIdgetGlossary"></a>

> Code samples

```bash
curl https://example.com/projects/0/glossaries/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/glossaries/{glossaryId}`

View the details of a glossary file uploaded to a project.

<h3 id="view-a-glossary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|glossaryId|path|integer(int64)|true|Glossary ID|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "uploaded_at": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-a-glossary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Glossary model|[Glossary](#schemaglossary)|
|404|Not Found|GlossaryNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update a glossary

<a id="opIdupdateGlossary"></a>

> Code samples

```bash
curl https://example.com/projects/0/glossaries/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "glossaries": "string"
  }'
```

`PUT /projects/{projectId}/glossaries/{glossaryId}`

Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.

> Body parameter

```json
{
  "glossaries": "string"
}
```

<h3 id="update-a-glossary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|glossaryId|path|integer(int64)|true|Glossary ID|
|body|body|[GlossaryUploadRequest](#schemaglossaryuploadrequest)|false|none|
|» glossaries|body|string(binary)|true|You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "uploaded_at": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-a-glossary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated glossary model|[Glossary](#schemaglossary)|
|400|Bad Request|FileTooLarge|[Error](#schemaerror)|
|404|Not Found|GlossaryNotFound|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedGlossaryFormat|[Error](#schemaerror)|
|409|Conflict|ProjectAlreadyStarted|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Delete a glossary

<a id="opIddeleteGlossary"></a>

> Code samples

```bash
curl https://example.com/projects/0/glossaries/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{projectId}/glossaries/{glossaryId}`

Delete the existing glossary from the project.

<h3 id="delete-a-glossary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|glossaryId|path|integer(int64)|true|Glossary ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-a-glossary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Glossary deleted successfully|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|GlossaryNotFound|[Error](#schemaerror)|
|409|Conflict|ProjectAlreadyStarted|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download a glossary

<a id="opIddownloadGlossary"></a>

> Code samples

```bash
curl https://example.com/projects/0/glossaries/0/download \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/glossaries/{glossaryId}/download`

Download a previously uploaded glossary file.

<h3 id="download-a-glossary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|glossaryId|path|integer(int64)|true|Glossary ID|

> Example responses

> 200 Response

```json
"string"
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-a-glossary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Glossary streamed|Inline|
|404|Not Found|GlossaryNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-integrations">Integrations</h1>

## Generate a new access token for MotaWord's integrations service

<a id="opIdgetIntegrationsToken"></a>

> Code samples

```bash
curl https://example.com/integrations/token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/token`

Generate a new access token for MotaWord's integrations service

> Example responses

> 200 Response

```json
{
  "token": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="generate-a-new-access-token-for-motawords-integrations-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token|[IntegrationsToken](#schemaintegrationstoken)|
|403|Forbidden|IntegrationsNotEnabled|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-invitation">Invitation</h1>

## Get vendor list for compiled invitation needs

<a id="opIdgetInvitationVendors"></a>

> Code samples

```bash
curl https://example.com/invitation/vendors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "fileId": 0,
      "guid": "string",
      "projectId": 0,
      "reason": "string",
      "targetLanguage": [
        "string"
      ],
      "taskType": [
        "string"
      ]
    }
  ]'
```

`POST /invitation/vendors`

Get vendor list for compiled invitation needs

> Body parameter

```json
[
  {
    "fileId": 0,
    "guid": "string",
    "projectId": 0,
    "reason": "string",
    "targetLanguage": [
      "string"
    ],
    "taskType": [
      "string"
    ]
  }
]
```

<h3 id="get-vendor-list-for-compiled-invitation-needs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[FileNeedsVendor](#schemafileneedsvendor)]|false|none|

> Example responses

> 200 Response

```json
{
  "vendors": [
    {
      "matchedNeeds": [
        {
          "fileId": 0,
          "guid": "string",
          "projectId": 0,
          "reason": "string",
          "targetLanguage": [
            "string"
          ],
          "taskType": [
            "string"
          ]
        }
      ],
      "userId": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-vendor-list-for-compiled-invitation-needs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invitation need grouped by vendor|[VendorInvitationList](#schemavendorinvitationlist)|
|400|Bad Request|FileTooLarge FileTooSmall NoFileUploaded|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedGlossaryFormat|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-machinelearning">MachineLearning</h1>

## Get a delivery prediction for a project

<a id="opIdgetDeliveryPrediction"></a>

> Code samples

```bash
curl https://example.com/ml/delivery-prediction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "projectId": 0
  }'
```

`POST /ml/delivery-prediction`

Get a delivery prediction for a project

> Body parameter

```json
{
  "projectId": 0
}
```

<h3 id="get-a-delivery-prediction-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeliveryPredictionPayload](#schemadeliverypredictionpayload)|false|none|
|» projectId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "language": "string",
      "late": true,
      "probability": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-a-delivery-prediction-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Prediction and its probability|[DeliveryPredictionResponse](#schemadeliverypredictionresponse)|
|400|Bad Request|MissingParameter|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-pam">Pam</h1>

## Sends a message to chat

<a id="opIdpostMessage"></a>

> Code samples

```bash
curl https://example.com/pam/chat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "string",
    "recipients": [
      "string"
    ],
    "slots": [
      "string"
    ],
    "thread_id": "string",
    "thread_key": "string"
  }'
```

`POST /pam/chat`

Sends a message to the channel.

> Body parameter

```json
{
  "message": "string",
  "recipients": [
    "string"
  ],
  "slots": [
    "string"
  ],
  "thread_id": "string",
  "thread_key": "string"
}
```

<h3 id="sends-a-message-to-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PamMessage](#schemapammessage)|false|none|
|» message|body|string|false|the message to be sent|
|» recipients|body|[string]|false|name of the recipients in the channel|
|» slots|body|[string]|false|contexts for next message|
|» thread_id|body|string|false|id of the thread|
|» thread_key|body|string|false|the key for thread_id default is project|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="sends-a-message-to-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|Missing Parameter|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get the Pam profile of a client for this client ID

<a id="opIdgetClientProfileForPam"></a>

> Code samples

```bash
curl https://example.com/pam/profiles/client/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /pam/profiles/client/{clientId}`

Get the Pam  profile of a client for this client ID

<h3 id="get-the-pam-profile-of-a-client-for-this-client-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientId|path|integer(int64)|true|Client ID|

> Example responses

> 200 Response

```json
{
  "account_creation_date": "1970-01-01T00:00:00Z",
  "client_project_count": 0,
  "corporate": "string",
  "corporate_id": 0,
  "corporate_user_count": 0,
  "frequent_file_extension": "string",
  "frequent_language_pairs": [
    "string"
  ],
  "full_name": "string",
  "growth": true,
  "is_complex": true,
  "last_12_months_spending": 0,
  "last_project": 0,
  "last_project_time": "1970-01-01T00:00:00Z",
  "last_proofreaders": [
    {
      "full_name": "string",
      "id": 0,
      "language": "string",
      "vendor_link": "string"
    }
  ],
  "notes": [
    "string"
  ],
  "nps": {
    "average": {
      "completed_surveys_count": 0,
      "score": 0
    },
    "last": {
      "completion_date": "1970-01-01T00:00:00Z",
      "score": 0
    }
  },
  "user_rank_in_project_count": 0,
  "user_rank_in_spending": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-the-pam-profile-of-a-client-for-this-client-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client profile|[ClientProfile](#schemaclientprofile)|
|404|Not Found|ClientProfileNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get completion report data of a project

<a id="opIdgetProjectCompletionReportForPam"></a>

> Code samples

```bash
curl https://example.com/pam/projects/0/completion-report \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /pam/projects/{projectId}/completion-report`

Get completion report data of a project

<h3 id="get-completion-report-data-of-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Quote ID|

> Example responses

> 200 Response

```json
{
  "admin_user_id": 0,
  "completion_report_data": [
    {
      "invited_vendors": [
        {
          "action": "string",
          "email_open_rate": 0,
          "is_entered": true,
          "is_get_paid": true,
          "is_worked": true,
          "is_worked_in_any_project": true,
          "last_project_date": "1970-01-01",
          "project_status_when_interacted": 0,
          "registration_date": "1970-01-01",
          "responsiveness": 0,
          "user_id": 0,
          "vendor_id": 0,
          "vendor_name": "string",
          "vendor_type": "string"
        }
      ],
      "target_language": "string"
    }
  ],
  "id": 0,
  "quote_id": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-completion-report-data-of-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project Completion Report|[ProjectCompletionReport](#schemaprojectcompletionreport)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-payment">Payment</h1>

## Reset payment code

<a id="opIdresetCorporatePaymentCode"></a>

> Code samples

```bash
curl https://example.com/payment/reset-corporate-payment-code \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /payment/reset-corporate-payment-code`

Reset your corporate account's payment code to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.

> Example responses

> 200 Response

```json
{
  "bin": "string",
  "id": 0,
  "is_default": true,
  "payment_code": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="reset-payment-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Credit card content|[CreditCard](#schemacreditcard)|
|404|Not Found|UserNotFound UnauthorizedUser MissingCorporateAccount|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Manage automatic charges on your credit card

<a id="opIdtoggleCorporateAutoCharge"></a>

> Code samples

```bash
curl https://example.com/payment/toggle-corporate-auto-charge \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /payment/toggle-corporate-auto-charge`

Toggle (enable/disable) automatic charges on the credit card on file.

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="manage-automatic-charges-on-your-credit-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|UserNotFound UnauthorizedUser MissingCorporateAccount|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View saved credit card

<a id="opIdgetCreditCard"></a>

> Code samples

```bash
curl https://example.com/payment/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment/{cardId}`

<h3 id="view-saved-credit-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cardId|path|integer(int64)|true|Credit Card ID|

> Example responses

> 200 Response

```json
{
  "bin": "string",
  "id": 0,
  "is_default": true,
  "payment_code": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-saved-credit-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Credit card content|[CreditCard](#schemacreditcard)|
|404|Not Found|MissingCreditCard|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Delete credit card

<a id="opIddeleteCreditCard"></a>

> Code samples

```bash
curl https://example.com/payment/0/delete \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /payment/{cardId}/delete`

<h3 id="delete-credit-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cardId|path|integer(int64)|true|Credit Card ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-credit-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|UserNotFound MissingCorporateAccount MissingParameter MissingCreditCard UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Reset credit card payment code

<a id="opIdresetCardPaymentCode"></a>

> Code samples

```bash
curl https://example.com/payment/0/reset-payment-code \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /payment/{cardId}/reset-payment-code`

Reset the payment code used to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.

<h3 id="reset-credit-card-payment-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cardId|path|integer(int64)|true|Credit Card ID|

> Example responses

> 200 Response

```json
{
  "bin": "string",
  "id": 0,
  "is_default": true,
  "payment_code": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="reset-credit-card-payment-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Credit card content|[CreditCard](#schemacreditcard)|
|404|Not Found|UserNotFound MissingCorporateAccount MissingParameter MissingCreditCard UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-project">Project</h1>

## View your translation projects

<a id="opIdgetProjects"></a>

> Code samples

```bash
curl https://example.com/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects`

View the translation projects ordered in your account. If you have the related permission (configured by your account administrator), you can view the projects of your colleagues under the same company account.

<h3 id="view-your-translation-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|false|none|
|per_page|query|integer(int64)|false|none|
|status[]|query|[[ProjectStatus](#schemaprojectstatus)]|false|Filter projects by status. Accepts multiple statuses. Possible values 'pending', 'started', 'completed'|
|with_pending|query|boolean|false|**Deprecated.** deprecated. use `status[]` param.|
|with_started|query|boolean|false|**Deprecated.** deprecated. use `status[]` param.|
|with_completed|query|boolean|false|**Deprecated.** deprecated. use `status[]` param.|
|order_by|query|string|false|none|
|order_type|query|[ListOrderType](#schemalistordertype)|false|none|
|with[]|query|[string]|false|Include detailed information. Possible values 'client', 'vendor'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status[]|pending|
|status[]|started|
|status[]|completed|
|status[]|translated|
|status[]|proofread|
|order_by|id|
|order_by|status|
|order_by|delivery|
|order_by|price|
|order_type|asc|
|order_type|desc|
|with[]|client|
|with[]|vendor|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "average_scores": {
        "property1": 0,
        "property2": 0
      },
      "budget_code": "string",
      "callback_url": "string",
      "can_pam_manage": true,
      "client": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "cm_id": 0,
      "completed_on": "1970-01-01T00:00:00Z",
      "continuous_project_type": "string",
      "created_at": 0,
      "custom": {},
      "delivery_at": 0,
      "errors": [
        {
          "code": "string",
          "help": "string",
          "http_code": 0,
          "message": "string"
        }
      ],
      "id": 0,
      "is_api_project": true,
      "is_certified": true,
      "is_continuous": true,
      "is_manual": true,
      "links": {
        "self": {
          "href": "string"
        },
        "documents": {
          "href": "string"
        },
        "glossaries": {
          "href": "string"
        },
        "payment": {
          "href": "string"
        },
        "quote-pdf": {
          "href": "string"
        },
        "styleguides": {
          "href": "string"
        }
      },
      "pairs": [
        {
          "currency": "usd",
          "is_proofreader": true,
          "proofreader": {
            "billing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string",
              "name": ""
            },
            "birthday": "1970-01-01",
            "can_work_manual_files": true,
            "city": "string",
            "client": {
              "corporate": {
                "email": "string",
                "id": 0,
                "logo": "string",
                "name": "string",
                "phone_number": "string"
              },
              "nps": 0,
              "subjects": {
                "property1": 0,
                "property2": 0
              }
            },
            "corporate_id": 0,
            "country": "string",
            "created_at": 0,
            "do_not_contact": true,
            "email": "string",
            "first_name": "string",
            "has_pwd": true,
            "id": 0,
            "is_client": true,
            "is_developer": true,
            "is_proofreader": true,
            "is_prospect": true,
            "is_sales_person": true,
            "is_vendor": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "last_name": "string",
            "last_seen_online_at": 0,
            "links": {
              "self": {
                "href": "string"
              },
              "login_as": {
                "href": "string"
              },
              "projects": {
                "href": "string"
              },
              "responsivity": {
                "href": "string"
              },
              "stats": {
                "href": "string"
              }
            },
            "locale": "string",
            "mailing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string"
            },
            "name": "string",
            "native_language": "string",
            "nps": 0,
            "phone_number": "string",
            "profile_picture_path": "string",
            "social_media": {
              "facebook_url": "string",
              "linkedIn_url": "string",
              "twitter_url": "string"
            },
            "state": "string",
            "status": "string",
            "street": "string",
            "timezone": "string",
            "tms_user_name": "string",
            "user_groups": [
              {
                "corporate_id": 0,
                "id": 0,
                "name": "string",
                "permissions": [
                  "string"
                ]
              }
            ],
            "vendor": {
              "can_work_manual_files": true,
              "email_open_rate": 0,
              "is_frozen": true,
              "is_proofreader": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "native_language": "string",
              "pam_tqs": 0,
              "paypal_email": "string",
              "profile_survey": {
                "current_services": "string",
                "daily_proofreading_capacity": "string",
                "daily_translation_capacity": "string",
                "dtp_software": "string",
                "experience": "string",
                "is_certified_translator": "string",
                "is_sworn_translator": "string",
                "memoq": "string",
                "memsource": "string",
                "omegat": "string",
                "proofreader_experience": "string",
                "provides_creative_writing_service": "string",
                "provides_postedit_service": "string",
                "reference": "string",
                "sdl_trados": "string",
                "skype_id": "string",
                "smartcat": "string",
                "smartling": "string",
                "software": "string",
                "specialization": "string",
                "subtitle_edit": "string",
                "subtitle_workshop": "string",
                "translator_association": "string",
                "transsuite_2000": "string",
                "vendor_profile_lsp": "string",
                "wordbee": "string",
                "wordfast": "string",
                "work_type": "string",
                "work_with": "string",
                "working_as": "string",
                "working_timezone": "string",
                "xbench": "string",
                "xtm": "string"
              },
              "require_1099": true,
              "tags": [
                "string"
              ],
              "tms_user_name": "string",
              "vendor_type": "string"
            },
            "zip_code": "string"
          },
          "proofreading_rate": 0,
          "source_language": "string",
          "target_language": "string",
          "translation_rate": 0
        }
      ],
      "pivoted_projects": [
        0
      ],
      "price": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "price_without_discount": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "role": "translator",
      "should_send_client_survey": true,
      "source": "api",
      "source_language": "string",
      "status": "pending",
      "subjects": [
        "string"
      ],
      "target_languages": [
        "string"
      ],
      "tms_name": "string",
      "valid_until": 0,
      "vendor_word_count": 0,
      "word_count": 0,
      "word_count_analysis": {
        "base": 0,
        "duplicate": 0,
        "exclusion": 0,
        "final": 0,
        "tm": 0
      }
    }
  ]
}
```

<h3 id="view-your-translation-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project list|[ProjectList](#schemaprojectlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Create a new project

<a id="opIdcreateProject"></a>

> Code samples

```bash
curl https://example.com/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "callback_url": "string",
    "coupon_code": "string",
    "custom": [
      "string"
    ],
    "documents[]": "string",
    "glossaries[]": "string",
    "source_language": "string",
    "styleguides[]": "string",
    "target_languages[]": [
      "string"
    ]
  }'
```

`POST /projects`

Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.

> Body parameter

```json
{
  "callback_url": "string",
  "coupon_code": "string",
  "custom": [
    "string"
  ],
  "documents[]": "string",
  "glossaries[]": "string",
  "source_language": "string",
  "styleguides[]": "string",
  "target_languages[]": [
    "string"
  ]
}
```

<h3 id="create-a-new-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewProject](#schemanewproject)|false|none|
|» callback_url|body|string|false|Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.|
|» coupon_code|body|string|false|Coupon code to redeem|
|» custom|body|[string]|false|Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value.|
|» documents[]|body|string(binary)|false|Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls.|
|» glossaries[]|body|string(binary)|false|Optional. Only one glossary is supported at the moment.|
|» source_language|body|string|false|none|
|» styleguides[]|body|string(binary)|false|Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls.|
|» target_languages[]|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "average_scores": {
    "property1": 0,
    "property2": 0
  },
  "budget_code": "string",
  "callback_url": "string",
  "can_pam_manage": true,
  "client": {
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "birthday": "1970-01-01",
    "can_work_manual_files": true,
    "city": "string",
    "client": {
      "corporate": {
        "email": "string",
        "id": 0,
        "logo": "string",
        "name": "string",
        "phone_number": "string"
      },
      "nps": 0,
      "subjects": {
        "property1": 0,
        "property2": 0
      }
    },
    "corporate_id": 0,
    "country": "string",
    "created_at": 0,
    "do_not_contact": true,
    "email": "string",
    "first_name": "string",
    "has_pwd": true,
    "id": 0,
    "is_client": true,
    "is_developer": true,
    "is_proofreader": true,
    "is_prospect": true,
    "is_sales_person": true,
    "is_vendor": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "last_name": "string",
    "last_seen_online_at": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "login_as": {
        "href": "string"
      },
      "projects": {
        "href": "string"
      },
      "responsivity": {
        "href": "string"
      },
      "stats": {
        "href": "string"
      }
    },
    "locale": "string",
    "mailing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string"
    },
    "name": "string",
    "native_language": "string",
    "nps": 0,
    "phone_number": "string",
    "profile_picture_path": "string",
    "social_media": {
      "facebook_url": "string",
      "linkedIn_url": "string",
      "twitter_url": "string"
    },
    "state": "string",
    "status": "string",
    "street": "string",
    "timezone": "string",
    "tms_user_name": "string",
    "user_groups": [
      {
        "corporate_id": 0,
        "id": 0,
        "name": "string",
        "permissions": [
          "string"
        ]
      }
    ],
    "vendor": {
      "can_work_manual_files": true,
      "email_open_rate": 0,
      "is_frozen": true,
      "is_proofreader": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "native_language": "string",
      "pam_tqs": 0,
      "paypal_email": "string",
      "profile_survey": {
        "current_services": "string",
        "daily_proofreading_capacity": "string",
        "daily_translation_capacity": "string",
        "dtp_software": "string",
        "experience": "string",
        "is_certified_translator": "string",
        "is_sworn_translator": "string",
        "memoq": "string",
        "memsource": "string",
        "omegat": "string",
        "proofreader_experience": "string",
        "provides_creative_writing_service": "string",
        "provides_postedit_service": "string",
        "reference": "string",
        "sdl_trados": "string",
        "skype_id": "string",
        "smartcat": "string",
        "smartling": "string",
        "software": "string",
        "specialization": "string",
        "subtitle_edit": "string",
        "subtitle_workshop": "string",
        "translator_association": "string",
        "transsuite_2000": "string",
        "vendor_profile_lsp": "string",
        "wordbee": "string",
        "wordfast": "string",
        "work_type": "string",
        "work_with": "string",
        "working_as": "string",
        "working_timezone": "string",
        "xbench": "string",
        "xtm": "string"
      },
      "require_1099": true,
      "tags": [
        "string"
      ],
      "tms_user_name": "string",
      "vendor_type": "string"
    },
    "zip_code": "string"
  },
  "cm_id": 0,
  "completed_on": "1970-01-01T00:00:00Z",
  "continuous_project_type": "string",
  "created_at": 0,
  "custom": {},
  "delivery_at": 0,
  "errors": [
    {
      "code": "string",
      "help": "string",
      "http_code": 0,
      "message": "string"
    }
  ],
  "id": 0,
  "is_api_project": true,
  "is_certified": true,
  "is_continuous": true,
  "is_manual": true,
  "links": {
    "self": {
      "href": "string"
    },
    "documents": {
      "href": "string"
    },
    "glossaries": {
      "href": "string"
    },
    "payment": {
      "href": "string"
    },
    "quote-pdf": {
      "href": "string"
    },
    "styleguides": {
      "href": "string"
    }
  },
  "pairs": [
    {
      "currency": "usd",
      "is_proofreader": true,
      "proofreader": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "proofreading_rate": 0,
      "source_language": "string",
      "target_language": "string",
      "translation_rate": 0
    }
  ],
  "pivoted_projects": [
    0
  ],
  "price": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "price_without_discount": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "role": "translator",
  "should_send_client_survey": true,
  "source": "api",
  "source_language": "string",
  "status": "pending",
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "tms_name": "string",
  "valid_until": 0,
  "vendor_word_count": 0,
  "word_count": 0,
  "word_count_analysis": {
    "base": 0,
    "duplicate": 0,
    "exclusion": 0,
    "final": 0,
    "tm": 0
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="create-a-new-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newly created project|[Project](#schemaproject)|
|400|Bad Request|FileTooLarge FileTooSmall FileWasAlreadyUploaded|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedDocumentFormat UnsupportedStyleGuideFormat UnsupportedGlossaryFormat|[Error](#schemaerror)|
|406|Not Acceptable|UnsupportedLanguage TooManyGlossaries ProjectAlreadyHasGlossary|[Error](#schemaerror)|
|500|Internal Server Error|ProjectInsertFailed|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get Quote Id

<a id="opIdgetQuoteIdFromInternalId"></a>

> Code samples

```bash
curl https://example.com/projects/from-internal-id/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/from-internal-id/{projectId}`

Get Quote Id

<h3 id="get-quote-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "internal-id": 0,
  "public-id": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-quote-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|QuoteId|[ProjectId](#schemaprojectid)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## List projects as a vendor

<a id="opIdgetVendorProjects"></a>

> Code samples

```bash
curl https://example.com/projects/vendor \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/vendor`

Get a list of projects that are available to you to work on as a vendor. This is not a list of projects that you ordered as a customer.

<h3 id="list-projects-as-a-vendor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|joined|query|boolean|false|Return only projects that this user has already joined|
|completed|query|boolean|false|Return only projects that have been completed. When `true`, this makes `joined` true as well.|
|page|query|integer(int64)|false|none|
|per_page|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "average_scores": {
        "property1": 0,
        "property2": 0
      },
      "budget_code": "string",
      "callback_url": "string",
      "can_pam_manage": true,
      "client": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "cm_id": 0,
      "completed_on": "1970-01-01T00:00:00Z",
      "continuous_project_type": "string",
      "created_at": 0,
      "custom": {},
      "delivery_at": 0,
      "errors": [
        {
          "code": "string",
          "help": "string",
          "http_code": 0,
          "message": "string"
        }
      ],
      "id": 0,
      "is_api_project": true,
      "is_certified": true,
      "is_continuous": true,
      "is_manual": true,
      "links": {
        "self": {
          "href": "string"
        },
        "documents": {
          "href": "string"
        },
        "glossaries": {
          "href": "string"
        },
        "payment": {
          "href": "string"
        },
        "quote-pdf": {
          "href": "string"
        },
        "styleguides": {
          "href": "string"
        }
      },
      "pairs": [
        {
          "currency": "usd",
          "is_proofreader": true,
          "proofreader": {
            "billing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string",
              "name": ""
            },
            "birthday": "1970-01-01",
            "can_work_manual_files": true,
            "city": "string",
            "client": {
              "corporate": {
                "email": "string",
                "id": 0,
                "logo": "string",
                "name": "string",
                "phone_number": "string"
              },
              "nps": 0,
              "subjects": {
                "property1": 0,
                "property2": 0
              }
            },
            "corporate_id": 0,
            "country": "string",
            "created_at": 0,
            "do_not_contact": true,
            "email": "string",
            "first_name": "string",
            "has_pwd": true,
            "id": 0,
            "is_client": true,
            "is_developer": true,
            "is_proofreader": true,
            "is_prospect": true,
            "is_sales_person": true,
            "is_vendor": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "last_name": "string",
            "last_seen_online_at": 0,
            "links": {
              "self": {
                "href": "string"
              },
              "login_as": {
                "href": "string"
              },
              "projects": {
                "href": "string"
              },
              "responsivity": {
                "href": "string"
              },
              "stats": {
                "href": "string"
              }
            },
            "locale": "string",
            "mailing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string"
            },
            "name": "string",
            "native_language": "string",
            "nps": 0,
            "phone_number": "string",
            "profile_picture_path": "string",
            "social_media": {
              "facebook_url": "string",
              "linkedIn_url": "string",
              "twitter_url": "string"
            },
            "state": "string",
            "status": "string",
            "street": "string",
            "timezone": "string",
            "tms_user_name": "string",
            "user_groups": [
              {
                "corporate_id": 0,
                "id": 0,
                "name": "string",
                "permissions": [
                  "string"
                ]
              }
            ],
            "vendor": {
              "can_work_manual_files": true,
              "email_open_rate": 0,
              "is_frozen": true,
              "is_proofreader": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "native_language": "string",
              "pam_tqs": 0,
              "paypal_email": "string",
              "profile_survey": {
                "current_services": "string",
                "daily_proofreading_capacity": "string",
                "daily_translation_capacity": "string",
                "dtp_software": "string",
                "experience": "string",
                "is_certified_translator": "string",
                "is_sworn_translator": "string",
                "memoq": "string",
                "memsource": "string",
                "omegat": "string",
                "proofreader_experience": "string",
                "provides_creative_writing_service": "string",
                "provides_postedit_service": "string",
                "reference": "string",
                "sdl_trados": "string",
                "skype_id": "string",
                "smartcat": "string",
                "smartling": "string",
                "software": "string",
                "specialization": "string",
                "subtitle_edit": "string",
                "subtitle_workshop": "string",
                "translator_association": "string",
                "transsuite_2000": "string",
                "vendor_profile_lsp": "string",
                "wordbee": "string",
                "wordfast": "string",
                "work_type": "string",
                "work_with": "string",
                "working_as": "string",
                "working_timezone": "string",
                "xbench": "string",
                "xtm": "string"
              },
              "require_1099": true,
              "tags": [
                "string"
              ],
              "tms_user_name": "string",
              "vendor_type": "string"
            },
            "zip_code": "string"
          },
          "proofreading_rate": 0,
          "source_language": "string",
          "target_language": "string",
          "translation_rate": 0
        }
      ],
      "pivoted_projects": [
        0
      ],
      "price": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "price_without_discount": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "role": "translator",
      "should_send_client_survey": true,
      "source": "api",
      "source_language": "string",
      "status": "pending",
      "subjects": [
        "string"
      ],
      "target_languages": [
        "string"
      ],
      "tms_name": "string",
      "valid_until": 0,
      "vendor_word_count": 0,
      "word_count": 0,
      "word_count_analysis": {
        "base": 0,
        "duplicate": 0,
        "exclusion": 0,
        "final": 0,
        "tm": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="list-projects-as-a-vendor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vendor project list|[ProjectList](#schemaprojectlist)|
|400|Bad Request|VendorNotFound - this is not a vendor user account|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View a translation project

<a id="opIdgetProject"></a>

> Code samples

```bash
curl https://example.com/projects/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}`

View the details of a translation project in your account.

<h3 id="view-a-translation-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|with[]|query|[string]|false|Include detailed information. Possible values 'client', 'vendor', 'score'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|with[]|client|
|with[]|vendor|
|with[]|score|

> Example responses

> 200 Response

```json
{
  "average_scores": {
    "property1": 0,
    "property2": 0
  },
  "budget_code": "string",
  "callback_url": "string",
  "can_pam_manage": true,
  "client": {
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "birthday": "1970-01-01",
    "can_work_manual_files": true,
    "city": "string",
    "client": {
      "corporate": {
        "email": "string",
        "id": 0,
        "logo": "string",
        "name": "string",
        "phone_number": "string"
      },
      "nps": 0,
      "subjects": {
        "property1": 0,
        "property2": 0
      }
    },
    "corporate_id": 0,
    "country": "string",
    "created_at": 0,
    "do_not_contact": true,
    "email": "string",
    "first_name": "string",
    "has_pwd": true,
    "id": 0,
    "is_client": true,
    "is_developer": true,
    "is_proofreader": true,
    "is_prospect": true,
    "is_sales_person": true,
    "is_vendor": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "last_name": "string",
    "last_seen_online_at": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "login_as": {
        "href": "string"
      },
      "projects": {
        "href": "string"
      },
      "responsivity": {
        "href": "string"
      },
      "stats": {
        "href": "string"
      }
    },
    "locale": "string",
    "mailing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string"
    },
    "name": "string",
    "native_language": "string",
    "nps": 0,
    "phone_number": "string",
    "profile_picture_path": "string",
    "social_media": {
      "facebook_url": "string",
      "linkedIn_url": "string",
      "twitter_url": "string"
    },
    "state": "string",
    "status": "string",
    "street": "string",
    "timezone": "string",
    "tms_user_name": "string",
    "user_groups": [
      {
        "corporate_id": 0,
        "id": 0,
        "name": "string",
        "permissions": [
          "string"
        ]
      }
    ],
    "vendor": {
      "can_work_manual_files": true,
      "email_open_rate": 0,
      "is_frozen": true,
      "is_proofreader": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "native_language": "string",
      "pam_tqs": 0,
      "paypal_email": "string",
      "profile_survey": {
        "current_services": "string",
        "daily_proofreading_capacity": "string",
        "daily_translation_capacity": "string",
        "dtp_software": "string",
        "experience": "string",
        "is_certified_translator": "string",
        "is_sworn_translator": "string",
        "memoq": "string",
        "memsource": "string",
        "omegat": "string",
        "proofreader_experience": "string",
        "provides_creative_writing_service": "string",
        "provides_postedit_service": "string",
        "reference": "string",
        "sdl_trados": "string",
        "skype_id": "string",
        "smartcat": "string",
        "smartling": "string",
        "software": "string",
        "specialization": "string",
        "subtitle_edit": "string",
        "subtitle_workshop": "string",
        "translator_association": "string",
        "transsuite_2000": "string",
        "vendor_profile_lsp": "string",
        "wordbee": "string",
        "wordfast": "string",
        "work_type": "string",
        "work_with": "string",
        "working_as": "string",
        "working_timezone": "string",
        "xbench": "string",
        "xtm": "string"
      },
      "require_1099": true,
      "tags": [
        "string"
      ],
      "tms_user_name": "string",
      "vendor_type": "string"
    },
    "zip_code": "string"
  },
  "cm_id": 0,
  "completed_on": "1970-01-01T00:00:00Z",
  "continuous_project_type": "string",
  "created_at": 0,
  "custom": {},
  "delivery_at": 0,
  "errors": [
    {
      "code": "string",
      "help": "string",
      "http_code": 0,
      "message": "string"
    }
  ],
  "id": 0,
  "is_api_project": true,
  "is_certified": true,
  "is_continuous": true,
  "is_manual": true,
  "links": {
    "self": {
      "href": "string"
    },
    "documents": {
      "href": "string"
    },
    "glossaries": {
      "href": "string"
    },
    "payment": {
      "href": "string"
    },
    "quote-pdf": {
      "href": "string"
    },
    "styleguides": {
      "href": "string"
    }
  },
  "pairs": [
    {
      "currency": "usd",
      "is_proofreader": true,
      "proofreader": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "proofreading_rate": 0,
      "source_language": "string",
      "target_language": "string",
      "translation_rate": 0
    }
  ],
  "pivoted_projects": [
    0
  ],
  "price": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "price_without_discount": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "role": "translator",
  "should_send_client_survey": true,
  "source": "api",
  "source_language": "string",
  "status": "pending",
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "tms_name": "string",
  "valid_until": 0,
  "vendor_word_count": 0,
  "word_count": 0,
  "word_count_analysis": {
    "base": 0,
    "duplicate": 0,
    "exclusion": 0,
    "final": 0,
    "tm": 0
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-a-translation-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project model|[Project](#schemaproject)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update project info and settings

<a id="opIdupdateProject"></a>

> Code samples

```bash
curl https://example.com/projects/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "callback_url": "string",
    "coupon_code": "string",
    "custom": [
      "string"
    ],
    "source_language": "string",
    "target_languages[]": [
      "string"
    ]
  }'
```

`PUT /projects/{id}`

> Body parameter

```json
{
  "callback_url": "string",
  "coupon_code": "string",
  "custom": [
    "string"
  ],
  "source_language": "string",
  "target_languages[]": [
    "string"
  ]
}
```

<h3 id="update-project-info-and-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|body|body|[ProjectUpdate](#schemaprojectupdate)|false|none|
|» callback_url|body|string|false|Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.|
|» coupon_code|body|string|false|Coupon code to redeem|
|» custom|body|[string]|false|Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced.|
|» source_language|body|string|false|none|
|» target_languages[]|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "average_scores": {
    "property1": 0,
    "property2": 0
  },
  "budget_code": "string",
  "callback_url": "string",
  "can_pam_manage": true,
  "client": {
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "birthday": "1970-01-01",
    "can_work_manual_files": true,
    "city": "string",
    "client": {
      "corporate": {
        "email": "string",
        "id": 0,
        "logo": "string",
        "name": "string",
        "phone_number": "string"
      },
      "nps": 0,
      "subjects": {
        "property1": 0,
        "property2": 0
      }
    },
    "corporate_id": 0,
    "country": "string",
    "created_at": 0,
    "do_not_contact": true,
    "email": "string",
    "first_name": "string",
    "has_pwd": true,
    "id": 0,
    "is_client": true,
    "is_developer": true,
    "is_proofreader": true,
    "is_prospect": true,
    "is_sales_person": true,
    "is_vendor": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "last_name": "string",
    "last_seen_online_at": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "login_as": {
        "href": "string"
      },
      "projects": {
        "href": "string"
      },
      "responsivity": {
        "href": "string"
      },
      "stats": {
        "href": "string"
      }
    },
    "locale": "string",
    "mailing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string"
    },
    "name": "string",
    "native_language": "string",
    "nps": 0,
    "phone_number": "string",
    "profile_picture_path": "string",
    "social_media": {
      "facebook_url": "string",
      "linkedIn_url": "string",
      "twitter_url": "string"
    },
    "state": "string",
    "status": "string",
    "street": "string",
    "timezone": "string",
    "tms_user_name": "string",
    "user_groups": [
      {
        "corporate_id": 0,
        "id": 0,
        "name": "string",
        "permissions": [
          "string"
        ]
      }
    ],
    "vendor": {
      "can_work_manual_files": true,
      "email_open_rate": 0,
      "is_frozen": true,
      "is_proofreader": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "native_language": "string",
      "pam_tqs": 0,
      "paypal_email": "string",
      "profile_survey": {
        "current_services": "string",
        "daily_proofreading_capacity": "string",
        "daily_translation_capacity": "string",
        "dtp_software": "string",
        "experience": "string",
        "is_certified_translator": "string",
        "is_sworn_translator": "string",
        "memoq": "string",
        "memsource": "string",
        "omegat": "string",
        "proofreader_experience": "string",
        "provides_creative_writing_service": "string",
        "provides_postedit_service": "string",
        "reference": "string",
        "sdl_trados": "string",
        "skype_id": "string",
        "smartcat": "string",
        "smartling": "string",
        "software": "string",
        "specialization": "string",
        "subtitle_edit": "string",
        "subtitle_workshop": "string",
        "translator_association": "string",
        "transsuite_2000": "string",
        "vendor_profile_lsp": "string",
        "wordbee": "string",
        "wordfast": "string",
        "work_type": "string",
        "work_with": "string",
        "working_as": "string",
        "working_timezone": "string",
        "xbench": "string",
        "xtm": "string"
      },
      "require_1099": true,
      "tags": [
        "string"
      ],
      "tms_user_name": "string",
      "vendor_type": "string"
    },
    "zip_code": "string"
  },
  "cm_id": 0,
  "completed_on": "1970-01-01T00:00:00Z",
  "continuous_project_type": "string",
  "created_at": 0,
  "custom": {},
  "delivery_at": 0,
  "errors": [
    {
      "code": "string",
      "help": "string",
      "http_code": 0,
      "message": "string"
    }
  ],
  "id": 0,
  "is_api_project": true,
  "is_certified": true,
  "is_continuous": true,
  "is_manual": true,
  "links": {
    "self": {
      "href": "string"
    },
    "documents": {
      "href": "string"
    },
    "glossaries": {
      "href": "string"
    },
    "payment": {
      "href": "string"
    },
    "quote-pdf": {
      "href": "string"
    },
    "styleguides": {
      "href": "string"
    }
  },
  "pairs": [
    {
      "currency": "usd",
      "is_proofreader": true,
      "proofreader": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "proofreading_rate": 0,
      "source_language": "string",
      "target_language": "string",
      "translation_rate": 0
    }
  ],
  "pivoted_projects": [
    0
  ],
  "price": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "price_without_discount": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "role": "translator",
  "should_send_client_survey": true,
  "source": "api",
  "source_language": "string",
  "status": "pending",
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "tms_name": "string",
  "valid_until": 0,
  "vendor_word_count": 0,
  "word_count": 0,
  "word_count_analysis": {
    "base": 0,
    "duplicate": 0,
    "exclusion": 0,
    "final": 0,
    "tm": 0
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-project-info-and-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated project|[Project](#schemaproject)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|
|406|Not Acceptable|UnsupportedLanguage|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Delete your translation project

<a id="opIddeleteProject"></a>

> Code samples

```bash
curl https://example.com/projects/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{id}`

If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.

<h3 id="delete-your-translation-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-your-translation-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project canceled successfully|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Assign a CM to the project

<a id="opIdassignCM"></a>

> Code samples

```bash
curl https://example.com/projects/0/assign-cm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_id": 0
  }'
```

`POST /projects/{id}/assign-cm`

> Body parameter

```json
{
  "user_id": 0
}
```

<h3 id="assign-a-cm-to-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|body|body|[CM](#schemacm)|false|none|
|» user_id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="assign-a-cm-to-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation started successfully|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Trigger a call to your callback URL related to this project.

<a id="opIdtriggerCallback"></a>

> Code samples

```bash
curl https://example.com/projects/0/callback/translated \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}/callback/{actionType}`

Trigger a call to your callback URL related to this project.

<h3 id="trigger-a-call-to-your-callback-url-related-to-this-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|actionType|path|string|true|Callback type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|actionType|translated|
|actionType|proofread|
|actionType|completed|

> Example responses

> 200 Response

```json
{
  "data": {
    "average_scores": {
      "property1": 0,
      "property2": 0
    },
    "budget_code": "string",
    "callback_url": "string",
    "can_pam_manage": true,
    "client": {
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "birthday": "1970-01-01",
      "can_work_manual_files": true,
      "city": "string",
      "client": {
        "corporate": {
          "email": "string",
          "id": 0,
          "logo": "string",
          "name": "string",
          "phone_number": "string"
        },
        "nps": 0,
        "subjects": {
          "property1": 0,
          "property2": 0
        }
      },
      "corporate_id": 0,
      "country": "string",
      "created_at": 0,
      "do_not_contact": true,
      "email": "string",
      "first_name": "string",
      "has_pwd": true,
      "id": 0,
      "is_client": true,
      "is_developer": true,
      "is_proofreader": true,
      "is_prospect": true,
      "is_sales_person": true,
      "is_vendor": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "last_name": "string",
      "last_seen_online_at": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "login_as": {
          "href": "string"
        },
        "projects": {
          "href": "string"
        },
        "responsivity": {
          "href": "string"
        },
        "stats": {
          "href": "string"
        }
      },
      "locale": "string",
      "mailing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string"
      },
      "name": "string",
      "native_language": "string",
      "nps": 0,
      "phone_number": "string",
      "profile_picture_path": "string",
      "social_media": {
        "facebook_url": "string",
        "linkedIn_url": "string",
        "twitter_url": "string"
      },
      "state": "string",
      "status": "string",
      "street": "string",
      "timezone": "string",
      "tms_user_name": "string",
      "user_groups": [
        {
          "corporate_id": 0,
          "id": 0,
          "name": "string",
          "permissions": [
            "string"
          ]
        }
      ],
      "vendor": {
        "can_work_manual_files": true,
        "email_open_rate": 0,
        "is_frozen": true,
        "is_proofreader": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "native_language": "string",
        "pam_tqs": 0,
        "paypal_email": "string",
        "profile_survey": {
          "current_services": "string",
          "daily_proofreading_capacity": "string",
          "daily_translation_capacity": "string",
          "dtp_software": "string",
          "experience": "string",
          "is_certified_translator": "string",
          "is_sworn_translator": "string",
          "memoq": "string",
          "memsource": "string",
          "omegat": "string",
          "proofreader_experience": "string",
          "provides_creative_writing_service": "string",
          "provides_postedit_service": "string",
          "reference": "string",
          "sdl_trados": "string",
          "skype_id": "string",
          "smartcat": "string",
          "smartling": "string",
          "software": "string",
          "specialization": "string",
          "subtitle_edit": "string",
          "subtitle_workshop": "string",
          "translator_association": "string",
          "transsuite_2000": "string",
          "vendor_profile_lsp": "string",
          "wordbee": "string",
          "wordfast": "string",
          "work_type": "string",
          "work_with": "string",
          "working_as": "string",
          "working_timezone": "string",
          "xbench": "string",
          "xtm": "string"
        },
        "require_1099": true,
        "tags": [
          "string"
        ],
        "tms_user_name": "string",
        "vendor_type": "string"
      },
      "zip_code": "string"
    },
    "cm_id": 0,
    "completed_on": "1970-01-01T00:00:00Z",
    "continuous_project_type": "string",
    "created_at": 0,
    "custom": {},
    "delivery_at": 0,
    "errors": [
      {
        "code": "string",
        "help": "string",
        "http_code": 0,
        "message": "string"
      }
    ],
    "id": 0,
    "is_api_project": true,
    "is_certified": true,
    "is_continuous": true,
    "is_manual": true,
    "links": {
      "self": {
        "href": "string"
      },
      "documents": {
        "href": "string"
      },
      "glossaries": {
        "href": "string"
      },
      "payment": {
        "href": "string"
      },
      "quote-pdf": {
        "href": "string"
      },
      "styleguides": {
        "href": "string"
      }
    },
    "pairs": [
      {
        "currency": "usd",
        "is_proofreader": true,
        "proofreader": {
          "billing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string",
            "name": ""
          },
          "birthday": "1970-01-01",
          "can_work_manual_files": true,
          "city": "string",
          "client": {
            "corporate": {
              "email": "string",
              "id": 0,
              "logo": "string",
              "name": "string",
              "phone_number": "string"
            },
            "nps": 0,
            "subjects": {
              "property1": 0,
              "property2": 0
            }
          },
          "corporate_id": 0,
          "country": "string",
          "created_at": 0,
          "do_not_contact": true,
          "email": "string",
          "first_name": "string",
          "has_pwd": true,
          "id": 0,
          "is_client": true,
          "is_developer": true,
          "is_proofreader": true,
          "is_prospect": true,
          "is_sales_person": true,
          "is_vendor": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "last_name": "string",
          "last_seen_online_at": 0,
          "links": {
            "self": {
              "href": "string"
            },
            "login_as": {
              "href": "string"
            },
            "projects": {
              "href": "string"
            },
            "responsivity": {
              "href": "string"
            },
            "stats": {
              "href": "string"
            }
          },
          "locale": "string",
          "mailing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string"
          },
          "name": "string",
          "native_language": "string",
          "nps": 0,
          "phone_number": "string",
          "profile_picture_path": "string",
          "social_media": {
            "facebook_url": "string",
            "linkedIn_url": "string",
            "twitter_url": "string"
          },
          "state": "string",
          "status": "string",
          "street": "string",
          "timezone": "string",
          "tms_user_name": "string",
          "user_groups": [
            {
              "corporate_id": 0,
              "id": 0,
              "name": "string",
              "permissions": [
                "string"
              ]
            }
          ],
          "vendor": {
            "can_work_manual_files": true,
            "email_open_rate": 0,
            "is_frozen": true,
            "is_proofreader": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "native_language": "string",
            "pam_tqs": 0,
            "paypal_email": "string",
            "profile_survey": {
              "current_services": "string",
              "daily_proofreading_capacity": "string",
              "daily_translation_capacity": "string",
              "dtp_software": "string",
              "experience": "string",
              "is_certified_translator": "string",
              "is_sworn_translator": "string",
              "memoq": "string",
              "memsource": "string",
              "omegat": "string",
              "proofreader_experience": "string",
              "provides_creative_writing_service": "string",
              "provides_postedit_service": "string",
              "reference": "string",
              "sdl_trados": "string",
              "skype_id": "string",
              "smartcat": "string",
              "smartling": "string",
              "software": "string",
              "specialization": "string",
              "subtitle_edit": "string",
              "subtitle_workshop": "string",
              "translator_association": "string",
              "transsuite_2000": "string",
              "vendor_profile_lsp": "string",
              "wordbee": "string",
              "wordfast": "string",
              "work_type": "string",
              "work_with": "string",
              "working_as": "string",
              "working_timezone": "string",
              "xbench": "string",
              "xtm": "string"
            },
            "require_1099": true,
            "tags": [
              "string"
            ],
            "tms_user_name": "string",
            "vendor_type": "string"
          },
          "zip_code": "string"
        },
        "proofreading_rate": 0,
        "source_language": "string",
        "target_language": "string",
        "translation_rate": 0
      }
    ],
    "pivoted_projects": [
      0
    ],
    "price": {
      "amount": 0,
      "base_amount": 0,
      "base_currency": "usd",
      "currency": "usd",
      "usd_amount": 0
    },
    "price_without_discount": {
      "amount": 0,
      "base_amount": 0,
      "base_currency": "usd",
      "currency": "usd",
      "usd_amount": 0
    },
    "role": "translator",
    "should_send_client_survey": true,
    "source": "api",
    "source_language": "string",
    "status": "pending",
    "subjects": [
      "string"
    ],
    "target_languages": [
      "string"
    ],
    "tms_name": "string",
    "valid_until": 0,
    "vendor_word_count": 0,
    "word_count": 0,
    "word_count_analysis": {
      "base": 0,
      "duplicate": 0,
      "exclusion": 0,
      "final": 0,
      "tm": 0
    }
  },
  "result": "string",
  "type": "pending",
  "url": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="trigger-a-call-to-your-callback-url-related-to-this-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Callback result|[CallbackResult](#schemacallbackresult)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Cancel your translation project

<a id="opIdcancelProject"></a>

> Code samples

```bash
curl https://example.com/projects/0/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "string"
  }'
```

`POST /projects/{id}/cancel`

If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.

> Body parameter

```json
{
  "reason": "string"
}
```

<h3 id="cancel-your-translation-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|body|body|[CancelProjectRequest](#schemacancelprojectrequest)|false|none|
|» reason|body|string|false|Cancellation reason|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="cancel-your-translation-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project canceled successfully|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Deliver project

<a id="opIddeliverProject"></a>

> Code samples

```bash
curl https://example.com/projects/0/deliver \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{id}/deliver`

Deliver project to the owner of the project. You can also download your translations in `/package` and `/download` endpoints.

<h3 id="deliver-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="deliver-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation started successfully|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download your translated project

<a id="opIddownload"></a>

> Code samples

```bash
curl https://example.com/projects/0/download \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}/download`

Download the latest translation package. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.

<h3 id="download-your-translated-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|

> Example responses

> 402 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-your-translated-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Translation package streamed. The streamed file is always a ZIP file, except when the API client is configured for Drupal and Wordpress.|Inline|
|402|Payment Required|ProjectNotLaunchedYet|[Error](#schemaerror)|
|404|Not Found|TranslationPackageNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download your translated project language

<a id="opIddownloadLanguage"></a>

> Code samples

```bash
curl https://example.com/projects/0/download/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}/download/{language}`

Download the latest translation package for your target language. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.

<h3 id="download-your-translated-project-language-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|language|path|string|true|Language code. You can download the translation of only a specific language.|

> Example responses

> 402 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-your-translated-project-language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Translation package streamed. The streamed file is always a ZIP file, except when the API client is configured for Drupal and Wordpress.|Inline|
|402|Payment Required|ProjectNotLaunchedYet|[Error](#schemaerror)|
|404|Not Found|TranslationPackageNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Send a quote email

<a id="opIdsendQuoteEmail"></a>

> Code samples

```bash
curl https://example.com/projects/0/email-quote \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{id}/email-quote`

Send a quote email

<h3 id="send-a-quote-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="send-a-quote-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Email sent successfully|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View project invoice

<a id="opIdgetInvoice"></a>

> Code samples

```bash
curl https://example.com/projects/0/invoice \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}/invoice`

View your invoice details for your translation project.

<h3 id="view-project-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "amount": 0,
  "base_amount": 0,
  "base_currency": "usd",
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "currency": "usd",
  "id": 0,
  "invoice_no": 0,
  "invoiced_at": "1970-01-01T00:00:00Z",
  "links": {
    "self": {
      "href": "string"
    },
    "corporate": {
      "href": "string"
    },
    "html": {
      "href": "string"
    },
    "json": {
      "href": "string"
    },
    "pdf": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "view": {
      "href": "string"
    }
  },
  "status": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-project-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invoice|[Invoice](#schemainvoice)|
|404|Not Found|ProjectNotFound or InvoiceNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download project invoice (HTML)

<a id="opIddownloadHtmlInvoice"></a>

> Code samples

```bash
curl https://example.com/projects/0/invoice.html \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}/invoice.html`

Download your project invoice as HTML. This is useful when you want to show your users the invoice in a webpage.

<h3 id="download-project-invoice-html-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-project-invoice-html-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invoice|Inline|
|404|Not Found|ProjectNotFound or InvoiceNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download project invoice (PDF)

<a id="opIddownloadPdfInvoice"></a>

> Code samples

```bash
curl https://example.com/projects/0/invoice.pdf \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}/invoice.pdf`

Download your project invoice as PDF. Your invoice may be in "unpaid" status, in which case youn can see the payment instructions in the PDF file.

<h3 id="download-project-invoice-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-project-invoice-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invoice|Inline|
|404|Not Found|ProjectNotFound or InvoiceNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Launch your translation project

<a id="opIdlaunchProject"></a>

> Code samples

```bash
curl https://example.com/projects/0/launch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bin": "string",
    "budget_code": "string",
    "card_id": 0,
    "payment_code": "string",
    "payment_method": "corporate",
    "stripe_token": "string"
  }'
```

`POST /projects/{id}/launch`

Launch your translation project so MotaWord can actually start working on your translation.

> Body parameter

```json
{
  "bin": "string",
  "budget_code": "string",
  "card_id": 0,
  "payment_code": "string",
  "payment_method": "corporate",
  "stripe_token": "string"
}
```

<h3 id="launch-your-translation-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|body|body|[ProjectPayment](#schemaprojectpayment)|false|none|
|» bin|body|string|false|Last 4 digits of the credit card you are using one-time. This parameter is only required when stripe_token is provided.|
|» budget_code|body|string|false|Optional with corporate accounts. Not available for others.|
|» card_id|body|integer(int64)|false|Optional. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin.|
|» payment_code|body|string|false|Optional. `corporate` payment method requires this.s|
|» payment_method|body|string|false|Optional. Determines which method to use for payment. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin. `corporate` method follows corporate account policy automatically, either follows invoicing flow or automatically charges corporate's primary card.|
|» stripe_token|body|string|false|This is required if you are using a one-time credit card. This is the token generted from frontend via Stripe SDK. If you are using a one-time card with `stripe_token`, you must also provide `bin`, last 4 digits of the card.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payment_method|corporate|
|» payment_method|client|
|» payment_method|app|
|» payment_method|credit|
|» payment_method|corporate_card|

> Example responses

> 200 Response

```json
{
  "status": "started"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="launch-your-translation-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project launched successfully|[ProjectLaunchResponse](#schemaprojectlaunchresponse)|
|400|Bad Request|MissingPaymentCode MissingCorporateAccount MissingPaymentMethod|[Error](#schemaerror)|
|401|Unauthorized|CorporateAccountNotAllowedForApiPayment ApiClientMissingPaymentInformation|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Package your translated project

<a id="opIdpackage"></a>

> Code samples

```bash
curl https://example.com/projects/0/package \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{id}/package`

Package the translations in your project, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project.

<h3 id="package-your-translated-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|async|query|integer(int64)|false|If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.|

> Example responses

> 402 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="package-your-translated-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Packaged translation streamed.|Inline|
|402|Payment Required|ProjectNotLaunchedYet|[Error](#schemaerror)|
|404|Not Found|TranslationPackageNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Track translation packaging status

<a id="opIdtrackPackage"></a>

> Code samples

```bash
curl https://example.com/projects/0/package/check \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}/package/check`

Track the packaging status of your translations, by using the `key` from packaging request. Once packaging is completed, you can download your translations via `/download` endpoints.

<h3 id="track-translation-packaging-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|key|query|string|false|This is the package tracking key provided in the response of a /package call.|

> Example responses

> 200 Response

```json
{
  "status": "started"
}
```

> 402 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="track-translation-packaging-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current status of packaging process.|[PackageStatus](#schemapackagestatus)|
|402|Payment Required|ProjectNotLaunchedYet|[Error](#schemaerror)|
|404|Not Found|PackagingStatusMissing|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Package your translated project language

<a id="opIdpackageLanguage"></a>

> Code samples

```bash
curl https://example.com/projects/0/package/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{id}/package/{language}`

Package the translations in your project for a specific target language, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project in this target language.

<h3 id="package-your-translated-project-language-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|language|path|string|true|Language code. You can package the translation of only a specific language.|
|async|query|integer(int64)|false|If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.|

> Example responses

> 200 Response

```json
{
  "status": "started",
  "key": "string"
}
```

> 402 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="package-your-translated-project-language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Packaging status and tracking code. With the package key, you can track the progress of translation packaging.Also packaged translation streamed.|[Package](#schemapackage)|
|402|Payment Required|ProjectNotLaunchedYet|[Error](#schemaerror)|
|404|Not Found|TranslationPackageNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View progress of a project

<a id="opIdgetProgress"></a>

> Code samples

```bash
curl https://example.com/projects/0/progress \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}/progress`

Monitor the translation progress of an already launched project in real-time.

<h3 id="view-progress-of-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|raw|query|boolean|false|This will return a more raw progress information for translation and proofreading. For instance, when completed, we will return 100% for both tasks by default, whereas their actual progress may be lower than 100%.|

> Example responses

> 200 Response

```json
{
  "languages": {
    "property1": {
      "proofreading": 0,
      "total": 0,
      "translation": 0,
      "word_count": 0
    },
    "property2": {
      "proofreading": 0,
      "total": 0,
      "translation": 0,
      "word_count": 0
    }
  },
  "links": {
    "self": {
      "href": "string"
    },
    "project": {
      "href": "string"
    }
  },
  "project_status": "pending",
  "proofreading": 0,
  "total": 0,
  "translation": 0,
  "word_count": 0
}
```

> 402 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-progress-of-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Progress information|[Progress](#schemaprogress)|
|402|Payment Required|ProjectNotLaunchedYet|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Recreate your translation project from scratch. This is a risky action, you will lose current translations.

<a id="opIdrecreateProject"></a>

> Code samples

```bash
curl https://example.com/projects/0/recreate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{id}/recreate`

<h3 id="recreate-your-translation-project-from-scratch-this-is-a-risky-action-you-will-lose-current-translations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 401 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="recreate-your-translation-project-from-scratch-this-is-a-risky-action-you-will-lose-current-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project recreation process started successfully|[OperationStatus](#schemaoperationstatus)|
|401|Unauthorized|UnauthorizedUser|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Submit feedback report for a project

<a id="opIdsubmitProjectReports"></a>

> Code samples

```bash
curl https://example.com/projects/0/reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activity_type": "string",
    "message": "string"
  }'
```

`POST /projects/{id}/reports`

> Body parameter

```json
{
  "activity_type": "string",
  "message": "string"
}
```

<h3 id="submit-feedback-report-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|body|body|[ReportContent](#schemareportcontent)|false|none|
|» activity_type|body|string|false|Activity Type|
|» message|body|string|false|Report Message|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="submit-feedback-report-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Report submitted successfully|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|MissingMessage|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get a list of vendors.

<a id="opIdgetProjectVendors"></a>

> Code samples

```bash
curl https://example.com/projects/0/vendors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/vendors`

Get a list of vendors.

<h3 id="get-a-list-of-vendors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "users": [
    {
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "birthday": "1970-01-01",
      "can_work_manual_files": true,
      "city": "string",
      "client": {
        "corporate": {
          "email": "string",
          "id": 0,
          "logo": "string",
          "name": "string",
          "phone_number": "string"
        },
        "nps": 0,
        "subjects": {
          "property1": 0,
          "property2": 0
        }
      },
      "corporate_id": 0,
      "country": "string",
      "created_at": 0,
      "do_not_contact": true,
      "email": "string",
      "first_name": "string",
      "has_pwd": true,
      "id": 0,
      "is_client": true,
      "is_developer": true,
      "is_proofreader": true,
      "is_prospect": true,
      "is_sales_person": true,
      "is_vendor": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "last_name": "string",
      "last_seen_online_at": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "login_as": {
          "href": "string"
        },
        "projects": {
          "href": "string"
        },
        "responsivity": {
          "href": "string"
        },
        "stats": {
          "href": "string"
        }
      },
      "locale": "string",
      "mailing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string"
      },
      "name": "string",
      "native_language": "string",
      "nps": 0,
      "phone_number": "string",
      "profile_picture_path": "string",
      "social_media": {
        "facebook_url": "string",
        "linkedIn_url": "string",
        "twitter_url": "string"
      },
      "state": "string",
      "status": "string",
      "street": "string",
      "timezone": "string",
      "tms_user_name": "string",
      "user_groups": [
        {
          "corporate_id": 0,
          "id": 0,
          "name": "string",
          "permissions": [
            "string"
          ]
        }
      ],
      "vendor": {
        "can_work_manual_files": true,
        "email_open_rate": 0,
        "is_frozen": true,
        "is_proofreader": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "native_language": "string",
        "pam_tqs": 0,
        "paypal_email": "string",
        "profile_survey": {
          "current_services": "string",
          "daily_proofreading_capacity": "string",
          "daily_translation_capacity": "string",
          "dtp_software": "string",
          "experience": "string",
          "is_certified_translator": "string",
          "is_sworn_translator": "string",
          "memoq": "string",
          "memsource": "string",
          "omegat": "string",
          "proofreader_experience": "string",
          "provides_creative_writing_service": "string",
          "provides_postedit_service": "string",
          "reference": "string",
          "sdl_trados": "string",
          "skype_id": "string",
          "smartcat": "string",
          "smartling": "string",
          "software": "string",
          "specialization": "string",
          "subtitle_edit": "string",
          "subtitle_workshop": "string",
          "translator_association": "string",
          "transsuite_2000": "string",
          "vendor_profile_lsp": "string",
          "wordbee": "string",
          "wordfast": "string",
          "work_type": "string",
          "work_with": "string",
          "working_as": "string",
          "working_timezone": "string",
          "xbench": "string",
          "xtm": "string"
        },
        "require_1099": true,
        "tags": [
          "string"
        ],
        "tms_user_name": "string",
        "vendor_type": "string"
      },
      "zip_code": "string"
    }
  ]
}
```

> 402 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-a-list-of-vendors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User list|[UserList](#schemauserlist)|
|402|Payment Required|ProjectNotLaunchedYet|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Get a list of user/vendor projects

<a id="opIdgetVendorProjectsByUserId"></a>

> Code samples

```bash
curl https://example.com/0/projects/vendor \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/projects/vendor`

Get a list of user/vendor projects

<h3 id="get-a-list-of-uservendor-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|User ID|
|joined|query|boolean|false|Return only projects that this user has already joined|
|completed|query|boolean|false|Return only projects that have been completed. When `true`, this makes `joined` true as well.|
|page|query|integer(int64)|false|none|
|per_page|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "average_scores": {
        "property1": 0,
        "property2": 0
      },
      "budget_code": "string",
      "callback_url": "string",
      "can_pam_manage": true,
      "client": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "cm_id": 0,
      "completed_on": "1970-01-01T00:00:00Z",
      "continuous_project_type": "string",
      "created_at": 0,
      "custom": {},
      "delivery_at": 0,
      "errors": [
        {
          "code": "string",
          "help": "string",
          "http_code": 0,
          "message": "string"
        }
      ],
      "id": 0,
      "is_api_project": true,
      "is_certified": true,
      "is_continuous": true,
      "is_manual": true,
      "links": {
        "self": {
          "href": "string"
        },
        "documents": {
          "href": "string"
        },
        "glossaries": {
          "href": "string"
        },
        "payment": {
          "href": "string"
        },
        "quote-pdf": {
          "href": "string"
        },
        "styleguides": {
          "href": "string"
        }
      },
      "pairs": [
        {
          "currency": "usd",
          "is_proofreader": true,
          "proofreader": {
            "billing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string",
              "name": ""
            },
            "birthday": "1970-01-01",
            "can_work_manual_files": true,
            "city": "string",
            "client": {
              "corporate": {
                "email": "string",
                "id": 0,
                "logo": "string",
                "name": "string",
                "phone_number": "string"
              },
              "nps": 0,
              "subjects": {
                "property1": 0,
                "property2": 0
              }
            },
            "corporate_id": 0,
            "country": "string",
            "created_at": 0,
            "do_not_contact": true,
            "email": "string",
            "first_name": "string",
            "has_pwd": true,
            "id": 0,
            "is_client": true,
            "is_developer": true,
            "is_proofreader": true,
            "is_prospect": true,
            "is_sales_person": true,
            "is_vendor": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "last_name": "string",
            "last_seen_online_at": 0,
            "links": {
              "self": {
                "href": "string"
              },
              "login_as": {
                "href": "string"
              },
              "projects": {
                "href": "string"
              },
              "responsivity": {
                "href": "string"
              },
              "stats": {
                "href": "string"
              }
            },
            "locale": "string",
            "mailing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string"
            },
            "name": "string",
            "native_language": "string",
            "nps": 0,
            "phone_number": "string",
            "profile_picture_path": "string",
            "social_media": {
              "facebook_url": "string",
              "linkedIn_url": "string",
              "twitter_url": "string"
            },
            "state": "string",
            "status": "string",
            "street": "string",
            "timezone": "string",
            "tms_user_name": "string",
            "user_groups": [
              {
                "corporate_id": 0,
                "id": 0,
                "name": "string",
                "permissions": [
                  "string"
                ]
              }
            ],
            "vendor": {
              "can_work_manual_files": true,
              "email_open_rate": 0,
              "is_frozen": true,
              "is_proofreader": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "native_language": "string",
              "pam_tqs": 0,
              "paypal_email": "string",
              "profile_survey": {
                "current_services": "string",
                "daily_proofreading_capacity": "string",
                "daily_translation_capacity": "string",
                "dtp_software": "string",
                "experience": "string",
                "is_certified_translator": "string",
                "is_sworn_translator": "string",
                "memoq": "string",
                "memsource": "string",
                "omegat": "string",
                "proofreader_experience": "string",
                "provides_creative_writing_service": "string",
                "provides_postedit_service": "string",
                "reference": "string",
                "sdl_trados": "string",
                "skype_id": "string",
                "smartcat": "string",
                "smartling": "string",
                "software": "string",
                "specialization": "string",
                "subtitle_edit": "string",
                "subtitle_workshop": "string",
                "translator_association": "string",
                "transsuite_2000": "string",
                "vendor_profile_lsp": "string",
                "wordbee": "string",
                "wordfast": "string",
                "work_type": "string",
                "work_with": "string",
                "working_as": "string",
                "working_timezone": "string",
                "xbench": "string",
                "xtm": "string"
              },
              "require_1099": true,
              "tags": [
                "string"
              ],
              "tms_user_name": "string",
              "vendor_type": "string"
            },
            "zip_code": "string"
          },
          "proofreading_rate": 0,
          "source_language": "string",
          "target_language": "string",
          "translation_rate": 0
        }
      ],
      "pivoted_projects": [
        0
      ],
      "price": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "price_without_discount": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "role": "translator",
      "should_send_client_survey": true,
      "source": "api",
      "source_language": "string",
      "status": "pending",
      "subjects": [
        "string"
      ],
      "target_languages": [
        "string"
      ],
      "tms_name": "string",
      "valid_until": 0,
      "vendor_word_count": 0,
      "word_count": 0,
      "word_count_analysis": {
        "base": 0,
        "duplicate": 0,
        "exclusion": 0,
        "final": 0,
        "tm": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-a-list-of-uservendor-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vendor project list|[ProjectList](#schemaprojectlist)|
|400|Bad Request|VendorNotFound - this is not a vendor user account|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-activity">Activity</h1>

## Get sales activities for a project

<a id="opIdgetSalesActivities"></a>

> Code samples

```bash
curl https://example.com/projects/0/sales/activities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}/sales/activities`

<h3 id="get-sales-activities-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|excludeOwner|query|string|false|none|
|type|query|[SalesActivityType](#schemasalesactivitytype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|EMAIL|
|type|NOTE|
|type|INCOMING_EMAIL|
|type|TASK|

> Example responses

> 200 Response

```json
{
  "activities": [
    {
      "body": "string",
      "created_at": 0,
      "created_by": "string",
      "type": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-sales-activities-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Activities fetched successfully|[SalesActivities](#schemasalesactivities)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Insert sales activity for a project

<a id="opIdinsertSalesActivity"></a>

> Code samples

```bash
curl https://example.com/projects/0/sales/activities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "subject": "string",
    "timestamp": 0,
    "type": "string"
  }'
```

`POST /projects/{id}/sales/activities`

> Body parameter

```json
{
  "subject": "string",
  "timestamp": 0,
  "type": "string"
}
```

<h3 id="insert-sales-activity-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|body|body|[NewSalesActivity](#schemanewsalesactivity)|false|none|
|» subject|body|string|false|none|
|» timestamp|body|integer(int64)|false|none|
|» type|body|string|false|Activity Type|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="insert-sales-activity-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Acvitity inserted successfully|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|BadRequest|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Monitor project activities

<a id="opIdgetActivities"></a>

> Code samples

```bash
curl https://example.com/projects/0/activities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/activities`

Get a list of real-time activities in the project, such as translation suggestion and translation approval.

<h3 id="monitor-project-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|page|query|integer(int64)|false|none|
|per_page|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "activities": [
    {
      "activity_at": 0,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "comments": {
          "href": "string"
        },
        "project": {
          "href": "string"
        }
      },
      "source_text": "string",
      "target_text": "string",
      "translator": 0,
      "type": "translated"
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="monitor-project-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of activity models|[ActivityList](#schemaactivitylist)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View an activity

<a id="opIdgetActivity"></a>

> Code samples

```bash
curl https://example.com/projects/0/activities/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/activities/{activityId}`

View the details of an activity in the project.

<h3 id="view-an-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|activityId|path|integer(int64)|true|Activity ID|

> Example responses

> 200 Response

```json
{
  "activity_at": 0,
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "comments": {
      "href": "string"
    },
    "project": {
      "href": "string"
    }
  },
  "source_text": "string",
  "target_text": "string",
  "translator": 0,
  "type": "translated"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-an-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Activity model|[Activity](#schemaactivity)|
|404|Not Found|ProjectActivityNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Submit comment to an activity

<a id="opIdsubmitComment"></a>

> Code samples

```bash
curl https://example.com/projects/0/activities/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "string",
    "commented_at": 0,
    "id": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "activity": {
        "href": "string"
      },
      "project": {
        "href": "string"
      }
    }
  }'
```

`POST /projects/{projectId}/activities/{activityId}`

Submit a comment to an activity in the project, such as translation or editing.

> Body parameter

```json
{
  "comment": "string",
  "commented_at": 0,
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "activity": {
      "href": "string"
    },
    "project": {
      "href": "string"
    }
  }
}
```

<h3 id="submit-comment-to-an-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|activityId|path|integer(int64)|true|Activity ID|
|body|body|[Comment](#schemacomment)|false|none|
|» comment|body|string|true|Comment text.|
|» commented_at|body|integer(int64)|false|Unix epoch time|
|» id|body|integer(int64)|false|none|
|» links|body|[CommentLinks](#schemacommentlinks)|false|none|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "commented_at": 0,
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "activity": {
      "href": "string"
    },
    "project": {
      "href": "string"
    }
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="submit-comment-to-an-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Comment model|[Comment](#schemacomment)|
|404|Not Found|ProjectActivityNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View activity comments

<a id="opIdgetActivityComments"></a>

> Code samples

```bash
curl https://example.com/projects/0/activities/0/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/activities/{activityId}/comments`

View a list of comments added to this activity.

<h3 id="view-activity-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|activityId|path|integer(int64)|true|Activity ID|

> Example responses

> 200 Response

```json
{
  "activities": [
    {
      "comment": "string",
      "commented_at": 0,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "activity": {
          "href": "string"
        },
        "project": {
          "href": "string"
        }
      }
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-activity-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Comment models|[CommentList](#schemacommentlist)|
|404|Not Found|ProjectActivityNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View all project comments

<a id="opIdgetComments"></a>

> Code samples

```bash
curl https://example.com/projects/0/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/comments`

View a list of activity comments in the project.

<h3 id="view-all-project-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|page|query|integer(int64)|false|none|
|per_page|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "activities": [
    {
      "comment": "string",
      "commented_at": 0,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "activity": {
          "href": "string"
        },
        "project": {
          "href": "string"
        }
      }
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-all-project-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Comment models|[CommentList](#schemacommentlist)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-project-webhooks">Project Webhooks</h1>

## View project webhooks

<a id="opIdgetProjectWebhooks"></a>

> Code samples

```bash
curl https://example.com/projects/0/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{id}/webhooks`

This endpoint returns Project entity which contains `callback_url` field for webhook URL. Currently projects can have only 1 webhook registered.

<h3 id="view-project-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "average_scores": {
    "property1": 0,
    "property2": 0
  },
  "budget_code": "string",
  "callback_url": "string",
  "can_pam_manage": true,
  "client": {
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "birthday": "1970-01-01",
    "can_work_manual_files": true,
    "city": "string",
    "client": {
      "corporate": {
        "email": "string",
        "id": 0,
        "logo": "string",
        "name": "string",
        "phone_number": "string"
      },
      "nps": 0,
      "subjects": {
        "property1": 0,
        "property2": 0
      }
    },
    "corporate_id": 0,
    "country": "string",
    "created_at": 0,
    "do_not_contact": true,
    "email": "string",
    "first_name": "string",
    "has_pwd": true,
    "id": 0,
    "is_client": true,
    "is_developer": true,
    "is_proofreader": true,
    "is_prospect": true,
    "is_sales_person": true,
    "is_vendor": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "last_name": "string",
    "last_seen_online_at": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "login_as": {
        "href": "string"
      },
      "projects": {
        "href": "string"
      },
      "responsivity": {
        "href": "string"
      },
      "stats": {
        "href": "string"
      }
    },
    "locale": "string",
    "mailing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string"
    },
    "name": "string",
    "native_language": "string",
    "nps": 0,
    "phone_number": "string",
    "profile_picture_path": "string",
    "social_media": {
      "facebook_url": "string",
      "linkedIn_url": "string",
      "twitter_url": "string"
    },
    "state": "string",
    "status": "string",
    "street": "string",
    "timezone": "string",
    "tms_user_name": "string",
    "user_groups": [
      {
        "corporate_id": 0,
        "id": 0,
        "name": "string",
        "permissions": [
          "string"
        ]
      }
    ],
    "vendor": {
      "can_work_manual_files": true,
      "email_open_rate": 0,
      "is_frozen": true,
      "is_proofreader": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "native_language": "string",
      "pam_tqs": 0,
      "paypal_email": "string",
      "profile_survey": {
        "current_services": "string",
        "daily_proofreading_capacity": "string",
        "daily_translation_capacity": "string",
        "dtp_software": "string",
        "experience": "string",
        "is_certified_translator": "string",
        "is_sworn_translator": "string",
        "memoq": "string",
        "memsource": "string",
        "omegat": "string",
        "proofreader_experience": "string",
        "provides_creative_writing_service": "string",
        "provides_postedit_service": "string",
        "reference": "string",
        "sdl_trados": "string",
        "skype_id": "string",
        "smartcat": "string",
        "smartling": "string",
        "software": "string",
        "specialization": "string",
        "subtitle_edit": "string",
        "subtitle_workshop": "string",
        "translator_association": "string",
        "transsuite_2000": "string",
        "vendor_profile_lsp": "string",
        "wordbee": "string",
        "wordfast": "string",
        "work_type": "string",
        "work_with": "string",
        "working_as": "string",
        "working_timezone": "string",
        "xbench": "string",
        "xtm": "string"
      },
      "require_1099": true,
      "tags": [
        "string"
      ],
      "tms_user_name": "string",
      "vendor_type": "string"
    },
    "zip_code": "string"
  },
  "cm_id": 0,
  "completed_on": "1970-01-01T00:00:00Z",
  "continuous_project_type": "string",
  "created_at": 0,
  "custom": {},
  "delivery_at": 0,
  "errors": [
    {
      "code": "string",
      "help": "string",
      "http_code": 0,
      "message": "string"
    }
  ],
  "id": 0,
  "is_api_project": true,
  "is_certified": true,
  "is_continuous": true,
  "is_manual": true,
  "links": {
    "self": {
      "href": "string"
    },
    "documents": {
      "href": "string"
    },
    "glossaries": {
      "href": "string"
    },
    "payment": {
      "href": "string"
    },
    "quote-pdf": {
      "href": "string"
    },
    "styleguides": {
      "href": "string"
    }
  },
  "pairs": [
    {
      "currency": "usd",
      "is_proofreader": true,
      "proofreader": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "proofreading_rate": 0,
      "source_language": "string",
      "target_language": "string",
      "translation_rate": 0
    }
  ],
  "pivoted_projects": [
    0
  ],
  "price": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "price_without_discount": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "role": "translator",
  "should_send_client_survey": true,
  "source": "api",
  "source_language": "string",
  "status": "pending",
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "tms_name": "string",
  "valid_until": 0,
  "vendor_word_count": 0,
  "word_count": 0,
  "word_count_analysis": {
    "base": 0,
    "duplicate": 0,
    "exclusion": 0,
    "final": 0,
    "tm": 0
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-project-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project model|[Project](#schemaproject)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update project webhook

<a id="opIdupdateProjectWebhook"></a>

> Code samples

```bash
curl https://example.com/projects/0/webhooks \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "callback_url": "string"
  }'
```

`PUT /projects/{id}/webhooks`

Update project webhook URL

> Body parameter

```json
{
  "callback_url": "string"
}
```

<h3 id="update-project-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|body|body|[Webhook](#schemawebhook)|false|none|
|» callback_url|body|string|false|Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.|

> Example responses

> 200 Response

```json
{
  "average_scores": {
    "property1": 0,
    "property2": 0
  },
  "budget_code": "string",
  "callback_url": "string",
  "can_pam_manage": true,
  "client": {
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "birthday": "1970-01-01",
    "can_work_manual_files": true,
    "city": "string",
    "client": {
      "corporate": {
        "email": "string",
        "id": 0,
        "logo": "string",
        "name": "string",
        "phone_number": "string"
      },
      "nps": 0,
      "subjects": {
        "property1": 0,
        "property2": 0
      }
    },
    "corporate_id": 0,
    "country": "string",
    "created_at": 0,
    "do_not_contact": true,
    "email": "string",
    "first_name": "string",
    "has_pwd": true,
    "id": 0,
    "is_client": true,
    "is_developer": true,
    "is_proofreader": true,
    "is_prospect": true,
    "is_sales_person": true,
    "is_vendor": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "last_name": "string",
    "last_seen_online_at": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "login_as": {
        "href": "string"
      },
      "projects": {
        "href": "string"
      },
      "responsivity": {
        "href": "string"
      },
      "stats": {
        "href": "string"
      }
    },
    "locale": "string",
    "mailing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string"
    },
    "name": "string",
    "native_language": "string",
    "nps": 0,
    "phone_number": "string",
    "profile_picture_path": "string",
    "social_media": {
      "facebook_url": "string",
      "linkedIn_url": "string",
      "twitter_url": "string"
    },
    "state": "string",
    "status": "string",
    "street": "string",
    "timezone": "string",
    "tms_user_name": "string",
    "user_groups": [
      {
        "corporate_id": 0,
        "id": 0,
        "name": "string",
        "permissions": [
          "string"
        ]
      }
    ],
    "vendor": {
      "can_work_manual_files": true,
      "email_open_rate": 0,
      "is_frozen": true,
      "is_proofreader": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "native_language": "string",
      "pam_tqs": 0,
      "paypal_email": "string",
      "profile_survey": {
        "current_services": "string",
        "daily_proofreading_capacity": "string",
        "daily_translation_capacity": "string",
        "dtp_software": "string",
        "experience": "string",
        "is_certified_translator": "string",
        "is_sworn_translator": "string",
        "memoq": "string",
        "memsource": "string",
        "omegat": "string",
        "proofreader_experience": "string",
        "provides_creative_writing_service": "string",
        "provides_postedit_service": "string",
        "reference": "string",
        "sdl_trados": "string",
        "skype_id": "string",
        "smartcat": "string",
        "smartling": "string",
        "software": "string",
        "specialization": "string",
        "subtitle_edit": "string",
        "subtitle_workshop": "string",
        "translator_association": "string",
        "transsuite_2000": "string",
        "vendor_profile_lsp": "string",
        "wordbee": "string",
        "wordfast": "string",
        "work_type": "string",
        "work_with": "string",
        "working_as": "string",
        "working_timezone": "string",
        "xbench": "string",
        "xtm": "string"
      },
      "require_1099": true,
      "tags": [
        "string"
      ],
      "tms_user_name": "string",
      "vendor_type": "string"
    },
    "zip_code": "string"
  },
  "cm_id": 0,
  "completed_on": "1970-01-01T00:00:00Z",
  "continuous_project_type": "string",
  "created_at": 0,
  "custom": {},
  "delivery_at": 0,
  "errors": [
    {
      "code": "string",
      "help": "string",
      "http_code": 0,
      "message": "string"
    }
  ],
  "id": 0,
  "is_api_project": true,
  "is_certified": true,
  "is_continuous": true,
  "is_manual": true,
  "links": {
    "self": {
      "href": "string"
    },
    "documents": {
      "href": "string"
    },
    "glossaries": {
      "href": "string"
    },
    "payment": {
      "href": "string"
    },
    "quote-pdf": {
      "href": "string"
    },
    "styleguides": {
      "href": "string"
    }
  },
  "pairs": [
    {
      "currency": "usd",
      "is_proofreader": true,
      "proofreader": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "proofreading_rate": 0,
      "source_language": "string",
      "target_language": "string",
      "translation_rate": 0
    }
  ],
  "pivoted_projects": [
    0
  ],
  "price": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "price_without_discount": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "role": "translator",
  "should_send_client_survey": true,
  "source": "api",
  "source_language": "string",
  "status": "pending",
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "tms_name": "string",
  "valid_until": 0,
  "vendor_word_count": 0,
  "word_count": 0,
  "word_count_analysis": {
    "base": 0,
    "duplicate": 0,
    "exclusion": 0,
    "final": 0,
    "tm": 0
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-project-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated project|[Project](#schemaproject)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update project webhook

<a id="opIdpostProjectWebhook"></a>

> Code samples

```bash
curl https://example.com/projects/0/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "callback_url": "string"
  }'
```

`POST /projects/{id}/webhooks`

Update project webhook URL

> Body parameter

```json
{
  "callback_url": "string"
}
```

<h3 id="update-project-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|
|body|body|[Webhook](#schemawebhook)|false|none|
|» callback_url|body|string|false|Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.|

> Example responses

> 200 Response

```json
{
  "average_scores": {
    "property1": 0,
    "property2": 0
  },
  "budget_code": "string",
  "callback_url": "string",
  "can_pam_manage": true,
  "client": {
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "birthday": "1970-01-01",
    "can_work_manual_files": true,
    "city": "string",
    "client": {
      "corporate": {
        "email": "string",
        "id": 0,
        "logo": "string",
        "name": "string",
        "phone_number": "string"
      },
      "nps": 0,
      "subjects": {
        "property1": 0,
        "property2": 0
      }
    },
    "corporate_id": 0,
    "country": "string",
    "created_at": 0,
    "do_not_contact": true,
    "email": "string",
    "first_name": "string",
    "has_pwd": true,
    "id": 0,
    "is_client": true,
    "is_developer": true,
    "is_proofreader": true,
    "is_prospect": true,
    "is_sales_person": true,
    "is_vendor": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "last_name": "string",
    "last_seen_online_at": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "login_as": {
        "href": "string"
      },
      "projects": {
        "href": "string"
      },
      "responsivity": {
        "href": "string"
      },
      "stats": {
        "href": "string"
      }
    },
    "locale": "string",
    "mailing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string"
    },
    "name": "string",
    "native_language": "string",
    "nps": 0,
    "phone_number": "string",
    "profile_picture_path": "string",
    "social_media": {
      "facebook_url": "string",
      "linkedIn_url": "string",
      "twitter_url": "string"
    },
    "state": "string",
    "status": "string",
    "street": "string",
    "timezone": "string",
    "tms_user_name": "string",
    "user_groups": [
      {
        "corporate_id": 0,
        "id": 0,
        "name": "string",
        "permissions": [
          "string"
        ]
      }
    ],
    "vendor": {
      "can_work_manual_files": true,
      "email_open_rate": 0,
      "is_frozen": true,
      "is_proofreader": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "native_language": "string",
      "pam_tqs": 0,
      "paypal_email": "string",
      "profile_survey": {
        "current_services": "string",
        "daily_proofreading_capacity": "string",
        "daily_translation_capacity": "string",
        "dtp_software": "string",
        "experience": "string",
        "is_certified_translator": "string",
        "is_sworn_translator": "string",
        "memoq": "string",
        "memsource": "string",
        "omegat": "string",
        "proofreader_experience": "string",
        "provides_creative_writing_service": "string",
        "provides_postedit_service": "string",
        "reference": "string",
        "sdl_trados": "string",
        "skype_id": "string",
        "smartcat": "string",
        "smartling": "string",
        "software": "string",
        "specialization": "string",
        "subtitle_edit": "string",
        "subtitle_workshop": "string",
        "translator_association": "string",
        "transsuite_2000": "string",
        "vendor_profile_lsp": "string",
        "wordbee": "string",
        "wordfast": "string",
        "work_type": "string",
        "work_with": "string",
        "working_as": "string",
        "working_timezone": "string",
        "xbench": "string",
        "xtm": "string"
      },
      "require_1099": true,
      "tags": [
        "string"
      ],
      "tms_user_name": "string",
      "vendor_type": "string"
    },
    "zip_code": "string"
  },
  "cm_id": 0,
  "completed_on": "1970-01-01T00:00:00Z",
  "continuous_project_type": "string",
  "created_at": 0,
  "custom": {},
  "delivery_at": 0,
  "errors": [
    {
      "code": "string",
      "help": "string",
      "http_code": 0,
      "message": "string"
    }
  ],
  "id": 0,
  "is_api_project": true,
  "is_certified": true,
  "is_continuous": true,
  "is_manual": true,
  "links": {
    "self": {
      "href": "string"
    },
    "documents": {
      "href": "string"
    },
    "glossaries": {
      "href": "string"
    },
    "payment": {
      "href": "string"
    },
    "quote-pdf": {
      "href": "string"
    },
    "styleguides": {
      "href": "string"
    }
  },
  "pairs": [
    {
      "currency": "usd",
      "is_proofreader": true,
      "proofreader": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "proofreading_rate": 0,
      "source_language": "string",
      "target_language": "string",
      "translation_rate": 0
    }
  ],
  "pivoted_projects": [
    0
  ],
  "price": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "price_without_discount": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "role": "translator",
  "should_send_client_survey": true,
  "source": "api",
  "source_language": "string",
  "status": "pending",
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "tms_name": "string",
  "valid_until": 0,
  "vendor_word_count": 0,
  "word_count": 0,
  "word_count_analysis": {
    "base": 0,
    "duplicate": 0,
    "exclusion": 0,
    "final": 0,
    "tm": 0
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-project-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated project|[Project](#schemaproject)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Delete project webhooks

<a id="opIddeleteProjectWebhook"></a>

> Code samples

```bash
curl https://example.com/projects/0/webhooks \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{id}/webhooks`

Delete project webhooks. Projects currently support registering only 1 webhook. This endpoint deletes the previously registered webhook.

<h3 id="delete-project-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Project ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-project-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project webhook deleted successfully|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-project-document">Project Document</h1>

## View project source documents

<a id="opIdgetProjectDocuments"></a>

> Code samples

```bash
curl https://example.com/projects/0/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/documents`

Get a list of source files you uploaded to be translated in your project.

<h3 id="view-project-source-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|with[]|query|[string]|false|Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|with[]|preview|
|with[]|editors|

> Example responses

> 200 Response

```json
{
  "documents": [
    {
      "file_type": "string",
      "has_custom_package": true,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "manual_files": [
        {
          "driveFileId": 0,
          "isProofread": true,
          "isTranslated": true,
          "language": "string",
          "proofreadingFileId": 0,
          "translationFileId": 0
        }
      ],
      "name": "string",
      "project_id": 0,
      "review_in_manual_editor": true,
      "scheme": {},
      "search_score": 0,
      "source_language": "string",
      "subject": "string",
      "target_languages": [
        "string"
      ],
      "uploaded_at": 0,
      "word_count": 0
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-project-source-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of document models|[DocumentList](#schemadocumentlist)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Upload a new document

<a id="opIdcreateProjectDocument"></a>

> Code samples

```bash
curl https://example.com/projects/0/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documents[]": [
      "string"
    ],
    "schemes[]": "string",
    "source-links[]": [
      {
        "name": "string",
        "size": 0,
        "source": "dropbox",
        "url": "http://example.com"
      }
    ]
  }'
```

`POST /projects/{projectId}/documents`

Upload a new document

> Body parameter

```json
{
  "documents[]": [
    "string"
  ],
  "schemes[]": "string",
  "source-links[]": [
    {
      "name": "string",
      "size": 0,
      "source": "dropbox",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="upload-a-new-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|body|body|[DocumentUpdates](#schemadocumentupdates)|false|none|
|» documents[]|body|[string(binary)]|false|You can add as many files as you want in documents[] parameter.|
|» schemes[]|body|string|false|JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.|
|» source-links[]|body|[[LinkedSourceDocument](#schemalinkedsourcedocument)]|false|When provided, we will download the files from these URLs, in addition to files provded in `documents` parameter and then save as source documents|

> Example responses

> 200 Response

```json
{
  "documents": [
    {
      "file_type": "string",
      "has_custom_package": true,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "manual_files": [
        {
          "driveFileId": 0,
          "isProofread": true,
          "isTranslated": true,
          "language": "string",
          "proofreadingFileId": 0,
          "translationFileId": 0
        }
      ],
      "name": "string",
      "project_id": 0,
      "review_in_manual_editor": true,
      "scheme": {},
      "search_score": 0,
      "source_language": "string",
      "subject": "string",
      "target_languages": [
        "string"
      ],
      "uploaded_at": 0,
      "word_count": 0
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="upload-a-new-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of successfully added new documents.|[DocumentList](#schemadocumentlist)|
|400|Bad Request|FileTooLarge FileTooSmall FileWasAlreadyUploaded|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedDocumentFormat|[Error](#schemaerror)|
|406|Not Acceptable|InvalidDocumentScheme|[Error](#schemaerror)|
|409|Conflict|ProjectAlreadyStarted|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View a project source document

<a id="opIdgetProjectDocument"></a>

> Code samples

```bash
curl https://example.com/projects/0/documents/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/documents/{documentId}`

View the details of a source file you uploaded to be translated in your project.

<h3 id="view-a-project-source-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|documentId|path|integer(int64)|true|Document ID|
|with[]|query|[string]|false|Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|with[]|preview|
|with[]|editors|

> Example responses

> 200 Response

```json
{
  "file_type": "string",
  "has_custom_package": true,
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "manual_files": [
    {
      "driveFileId": 0,
      "isProofread": true,
      "isTranslated": true,
      "language": "string",
      "proofreadingFileId": 0,
      "translationFileId": 0
    }
  ],
  "name": "string",
  "project_id": 0,
  "review_in_manual_editor": true,
  "scheme": {},
  "search_score": 0,
  "source_language": "string",
  "subject": "string",
  "target_languages": [
    "string"
  ],
  "uploaded_at": 0,
  "word_count": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-a-project-source-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document model|[Document](#schemadocument)|
|404|Not Found|DocumentNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update the document.

<a id="opIdupdateProjectDocument"></a>

> Code samples

```bash
curl https://example.com/projects/0/documents/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documents": "string",
    "schemes": "string",
    "source-link": {
      "name": "string",
      "size": 0,
      "source": "dropbox",
      "url": "http://example.com"
    }
  }'
```

`POST /projects/{projectId}/documents/{documentId}`

Update the document. File name and contents will replaced with the new one.

> Body parameter

```json
{
  "documents": "string",
  "schemes": "string",
  "source-link": {
    "name": "string",
    "size": 0,
    "source": "dropbox",
    "url": "http://example.com"
  }
}
```

<h3 id="update-the-document-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|documentId|path|integer(int64)|true|Document ID|
|body|body|[DocumentUploadRequest](#schemadocumentuploadrequest)|false|none|
|» documents|body|string(binary)|false|Single file data. The name is plural to provide a consistent naming convention.|
|» schemes|body|string|false|JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.|
|» source-link|body|[LinkedSourceDocument](#schemalinkedsourcedocument)|false|none|

> Example responses

> 200 Response

```json
{
  "file_type": "string",
  "has_custom_package": true,
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "manual_files": [
    {
      "driveFileId": 0,
      "isProofread": true,
      "isTranslated": true,
      "language": "string",
      "proofreadingFileId": 0,
      "translationFileId": 0
    }
  ],
  "name": "string",
  "project_id": 0,
  "review_in_manual_editor": true,
  "scheme": {},
  "search_score": 0,
  "source_language": "string",
  "subject": "string",
  "target_languages": [
    "string"
  ],
  "uploaded_at": 0,
  "word_count": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-the-document-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated document model|[Document](#schemadocument)|
|400|Bad Request|FileTooLarge FileTooSmall FileWasAlreadyUploaded|[Error](#schemaerror)|
|404|Not Found|DocumentNotFound|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedDocumentFormat|[Error](#schemaerror)|
|406|Not Acceptable|InvalidDocumentScheme|[Error](#schemaerror)|
|409|Conflict|ProjectAlreadyStarted|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Delete the document

<a id="opIddeleteProjectDocument"></a>

> Code samples

```bash
curl https://example.com/projects/0/documents/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{projectId}/documents/{documentId}`

Delete the document

<h3 id="delete-the-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|documentId|path|integer(int64)|true|Document ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-the-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document deleted successfully|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|DocumentNotFound|[Error](#schemaerror)|
|409|Conflict|ProjectAlreadyStarted|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download a project source document

<a id="opIddownloadProjectDocument"></a>

> Code samples

```bash
curl https://example.com/projects/0/documents/0/download \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/documents/{documentId}/download`

Download an actual source file you uploaded to be translated in your project.

<h3 id="download-a-project-source-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|documentId|path|integer(int64)|true|Document ID|

> Example responses

> 200 Response

```json
"string"
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-a-project-source-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document streamed|Inline|
|404|Not Found|DocumentNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download translated document

<a id="opIddownloadTranslatedDocumentForLanguage"></a>

> Code samples

```bash
curl https://example.com/projects/0/documents/0/translations/download/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/documents/{documentId}/translations/download/{language}`

Download translated document in the given target language.

<h3 id="download-translated-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|documentId|path|integer(int64)|true|Document ID|
|language|path|string|true|Target language code.|
|certified|query|boolean|false|Download certified translation|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-translated-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File|Inline|
|404|Not Found|DocumentNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-style-guide">Style Guide</h1>

## View style guides

<a id="opIdgetStyleGuides"></a>

> Code samples

```bash
curl https://example.com/projects/0/styleguides \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/styleguides`

View a list of style guides in your project.

<h3 id="view-style-guides-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|with[]|query|[string]|false|Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|with[]|preview|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "styleguides": [
    {
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "name": "string",
      "uploaded_at": 0
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-style-guides-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of style guide models|[StyleGuideList](#schemastyleguidelist)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Upload a new style guide

<a id="opIdcreateStyleGuide"></a>

> Code samples

```bash
curl https://example.com/projects/0/styleguides \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "styleguides": "string"
  }'
```

`POST /projects/{projectId}/styleguides`

Upload a new style guide

> Body parameter

```json
{
  "styleguides": "string"
}
```

<h3 id="upload-a-new-style-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|body|body|[StyleGuideUploadRequest](#schemastyleguideuploadrequest)|false|none|
|» styleguides|body|string(binary)|true|You can only add one style guide, even though the name suggests multiple style guides. This may be updated in the future to support multiple style guides.|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "styleguides": [
    {
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "name": "string",
      "uploaded_at": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="upload-a-new-style-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newly created style guide model or a list of new style guide models|[StyleGuideList](#schemastyleguidelist)|
|400|Bad Request|FileTooLarge|[Error](#schemaerror)|
|404|Not Found|ProjectNotFound|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedStyleGuideFormat|[Error](#schemaerror)|
|409|Conflict|ProjectAlreadyStarted|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View a style guide

<a id="opIdgetStyleGuide"></a>

> Code samples

```bash
curl https://example.com/projects/0/styleguides/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/styleguides/{styleGuideId}`

View the details of a style guide uploaded to a project

<h3 id="view-a-style-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|styleGuideId|path|integer(int64)|true|Style Guide ID|
|with[]|query|[string]|false|Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|with[]|preview|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "uploaded_at": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-a-style-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Style guide model|[StyleGuide](#schemastyleguide)|
|404|Not Found|StyleGuideNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Update a style guide

<a id="opIdupdateStyleGuide"></a>

> Code samples

```bash
curl https://example.com/projects/0/styleguides/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "styleguides": "string"
  }'
```

`PUT /projects/{projectId}/styleguides/{styleGuideId}`

Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.

> Body parameter

```json
{
  "styleguides": "string"
}
```

<h3 id="update-a-style-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|styleGuideId|path|integer(int64)|true|Style guide ID|
|body|body|[StyleGuideUploadRequest](#schemastyleguideuploadrequest)|false|none|
|» styleguides|body|string(binary)|true|You can only add one style guide, even though the name suggests multiple style guides. This may be updated in the future to support multiple style guides.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "uploaded_at": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="update-a-style-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated style guide model|[StyleGuide](#schemastyleguide)|
|400|Bad Request|FileTooLarge|[Error](#schemaerror)|
|404|Not Found|StyleGuideNotFound|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedStyleGuideFormat|[Error](#schemaerror)|
|409|Conflict|ProjectAlreadyStarted|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Delete a style guide

<a id="opIddeleteStyleGuide"></a>

> Code samples

```bash
curl https://example.com/projects/0/styleguides/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{projectId}/styleguides/{styleGuideId}`

Delete the existing style guide from the project.

<h3 id="delete-a-style-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|styleGuideId|path|integer(int64)|true|Style Guide ID|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="delete-a-style-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Style guide deleted successfully|[OperationStatus](#schemaoperationstatus)|
|404|Not Found|StyleGuideNotFound|[Error](#schemaerror)|
|409|Conflict|ProjectAlreadyStarted|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download a style guide

<a id="opIddownloadStyleGuide"></a>

> Code samples

```bash
curl https://example.com/projects/0/styleguides/0/download \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/styleguides/{styleGuideId}/download`

Download a previously uploaded style guide file.

<h3 id="download-a-style-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|integer(int64)|true|Project ID|
|styleGuideId|path|integer(int64)|true|Style Guide ID|

> Example responses

> 200 Response

```json
"string"
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-a-style-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Style guide streamed|Inline|
|404|Not Found|StyleGuideNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Download account style guide

<a id="opIddownloadGlobalStyleGuide"></a>

> Code samples

```bash
curl https://example.com/styleguide \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /styleguide`

Download your account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

> Example responses

> 200 Response

```json
"string"
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="download-account-style-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Style guide file streamed.|Inline|
|404|Not Found|StyleGuideNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Create or update the account style guide

<a id="opIdupdateGlobalStyleGuide"></a>

> Code samples

```bash
curl https://example.com/styleguide \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "styleguide": "string"
  }'
```

`POST /styleguide`

Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

> Body parameter

```json
{
  "styleguide": "string"
}
```

<h3 id="create-or-update-the-account-style-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountStyleGuideUploadRequest](#schemaaccountstyleguideuploadrequest)|false|none|
|» styleguide|body|string(binary)|true|Style guide file. Currently supported formats: .pdf, .docx, .txt|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="create-or-update-the-account-style-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[OperationStatus](#schemaoperationstatus)|
|400|Bad Request|FileTooLarge FileTooSmall NoFileUploaded MissingCorporateAccount|[Error](#schemaerror)|
|405|Method Not Allowed|UnsupportedStyleGuideFormat|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-report">Report</h1>

## Returns available options for selected timeframe.

<a id="opIdgetFilterContents"></a>

> Code samples

```bash
curl https://example.com/reports/filter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "date_from": "1970-01-01T00:00:00Z",
    "date_to": "1970-01-01T00:00:00Z"
  }'
```

`POST /reports/filter`

> Body parameter

```json
{
  "date_from": "1970-01-01T00:00:00Z",
  "date_to": "1970-01-01T00:00:00Z"
}
```

<h3 id="returns-available-options-for-selected-timeframe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FilterDates](#schemafilterdates)|false|none|
|» date_from|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» date_to|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|

> Example responses

> 200 Response

```json
{
  "budget_codes": [
    "string"
  ],
  "categories": [
    "string"
  ],
  "clients": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "documents": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "projects": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "severities": [
    "string"
  ],
  "source_languages": [
    "string"
  ],
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "vendors": [
    {
      "id": 0,
      "name": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="returns-available-options-for-selected-timeframe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Filter contents|[FilterContents](#schemafiltercontents)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Language pairs report

<a id="opIdgetLanguagePairsReport"></a>

> Code samples

```bash
curl https://example.com/reports/language-pairs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "budget_code": "string",
    "date_from": "1970-01-01T00:00:00Z",
    "date_to": "1970-01-01T00:00:00Z",
    "source_languages": [
      "string"
    ],
    "target_languages": [
      "string"
    ],
    "users": [
      0
    ]
  }'
```

`POST /reports/language-pairs`

View translation reports for each language pair with translations under your account. You can view company-wide language pairs if you have the user permission.

> Body parameter

```json
{
  "budget_code": "string",
  "date_from": "1970-01-01T00:00:00Z",
  "date_to": "1970-01-01T00:00:00Z",
  "source_languages": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "users": [
    0
  ]
}
```

<h3 id="language-pairs-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportFilter](#schemareportfilter)|false|none|
|» budget_code|body|string|false|budget code filter. valid for corporate accounts only.|
|» date_from|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» date_to|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» source_languages|body|[string]|false|List of source language codes.|
|» target_languages|body|[string]|false|List of target language codes.|
|» users|body|[integer(int64)]|false|List of corporate user IDs. Valid for corporate accounts only.|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "report": [
    {
      "language_pair": {
        "source_language": "string",
        "target_language": "string"
      },
      "spending": 0,
      "word_count": 0
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="language-pairs-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Language pairs stats for client and vendors|[LanguagePairsReport](#schemalanguagepairsreport)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Projects report

<a id="opIdgetProjectsReport"></a>

> Code samples

```bash
curl https://example.com/reports/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "budget_code": "string",
    "date_from": "1970-01-01T00:00:00Z",
    "date_to": "1970-01-01T00:00:00Z",
    "source_languages": [
      "string"
    ],
    "target_languages": [
      "string"
    ],
    "users": [
      0
    ]
  }'
```

`POST /reports/projects`

View projects under your account, with advanced filtering. You can view company-wide projects if you have the user permission.

> Body parameter

```json
{
  "budget_code": "string",
  "date_from": "1970-01-01T00:00:00Z",
  "date_to": "1970-01-01T00:00:00Z",
  "source_languages": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "users": [
    0
  ]
}
```

<h3 id="projects-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportFilter](#schemareportfilter)|false|none|
|» budget_code|body|string|false|budget code filter. valid for corporate accounts only.|
|» date_from|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» date_to|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» source_languages|body|[string]|false|List of source language codes.|
|» target_languages|body|[string]|false|List of target language codes.|
|» users|body|[integer(int64)]|false|List of corporate user IDs. Valid for corporate accounts only.|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "average_scores": {
        "property1": 0,
        "property2": 0
      },
      "budget_code": "string",
      "callback_url": "string",
      "can_pam_manage": true,
      "client": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "cm_id": 0,
      "completed_on": "1970-01-01T00:00:00Z",
      "continuous_project_type": "string",
      "created_at": 0,
      "custom": {},
      "delivery_at": 0,
      "errors": [
        {
          "code": "string",
          "help": "string",
          "http_code": 0,
          "message": "string"
        }
      ],
      "id": 0,
      "is_api_project": true,
      "is_certified": true,
      "is_continuous": true,
      "is_manual": true,
      "links": {
        "self": {
          "href": "string"
        },
        "documents": {
          "href": "string"
        },
        "glossaries": {
          "href": "string"
        },
        "payment": {
          "href": "string"
        },
        "quote-pdf": {
          "href": "string"
        },
        "styleguides": {
          "href": "string"
        }
      },
      "pairs": [
        {
          "currency": "usd",
          "is_proofreader": true,
          "proofreader": {
            "billing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string",
              "name": ""
            },
            "birthday": "1970-01-01",
            "can_work_manual_files": true,
            "city": "string",
            "client": {
              "corporate": {
                "email": "string",
                "id": 0,
                "logo": "string",
                "name": "string",
                "phone_number": "string"
              },
              "nps": 0,
              "subjects": {
                "property1": 0,
                "property2": 0
              }
            },
            "corporate_id": 0,
            "country": "string",
            "created_at": 0,
            "do_not_contact": true,
            "email": "string",
            "first_name": "string",
            "has_pwd": true,
            "id": 0,
            "is_client": true,
            "is_developer": true,
            "is_proofreader": true,
            "is_prospect": true,
            "is_sales_person": true,
            "is_vendor": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "last_name": "string",
            "last_seen_online_at": 0,
            "links": {
              "self": {
                "href": "string"
              },
              "login_as": {
                "href": "string"
              },
              "projects": {
                "href": "string"
              },
              "responsivity": {
                "href": "string"
              },
              "stats": {
                "href": "string"
              }
            },
            "locale": "string",
            "mailing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string"
            },
            "name": "string",
            "native_language": "string",
            "nps": 0,
            "phone_number": "string",
            "profile_picture_path": "string",
            "social_media": {
              "facebook_url": "string",
              "linkedIn_url": "string",
              "twitter_url": "string"
            },
            "state": "string",
            "status": "string",
            "street": "string",
            "timezone": "string",
            "tms_user_name": "string",
            "user_groups": [
              {
                "corporate_id": 0,
                "id": 0,
                "name": "string",
                "permissions": [
                  "string"
                ]
              }
            ],
            "vendor": {
              "can_work_manual_files": true,
              "email_open_rate": 0,
              "is_frozen": true,
              "is_proofreader": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "native_language": "string",
              "pam_tqs": 0,
              "paypal_email": "string",
              "profile_survey": {
                "current_services": "string",
                "daily_proofreading_capacity": "string",
                "daily_translation_capacity": "string",
                "dtp_software": "string",
                "experience": "string",
                "is_certified_translator": "string",
                "is_sworn_translator": "string",
                "memoq": "string",
                "memsource": "string",
                "omegat": "string",
                "proofreader_experience": "string",
                "provides_creative_writing_service": "string",
                "provides_postedit_service": "string",
                "reference": "string",
                "sdl_trados": "string",
                "skype_id": "string",
                "smartcat": "string",
                "smartling": "string",
                "software": "string",
                "specialization": "string",
                "subtitle_edit": "string",
                "subtitle_workshop": "string",
                "translator_association": "string",
                "transsuite_2000": "string",
                "vendor_profile_lsp": "string",
                "wordbee": "string",
                "wordfast": "string",
                "work_type": "string",
                "work_with": "string",
                "working_as": "string",
                "working_timezone": "string",
                "xbench": "string",
                "xtm": "string"
              },
              "require_1099": true,
              "tags": [
                "string"
              ],
              "tms_user_name": "string",
              "vendor_type": "string"
            },
            "zip_code": "string"
          },
          "proofreading_rate": 0,
          "source_language": "string",
          "target_language": "string",
          "translation_rate": 0
        }
      ],
      "pivoted_projects": [
        0
      ],
      "price": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "price_without_discount": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "role": "translator",
      "should_send_client_survey": true,
      "source": "api",
      "source_language": "string",
      "status": "pending",
      "subjects": [
        "string"
      ],
      "target_languages": [
        "string"
      ],
      "tms_name": "string",
      "valid_until": 0,
      "vendor_word_count": 0,
      "word_count": 0,
      "word_count_analysis": {
        "base": 0,
        "duplicate": 0,
        "exclusion": 0,
        "final": 0,
        "tm": 0
      }
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="projects-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User stats for client and vendors|[ProjectList](#schemaprojectlist)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Generate a QA report for given filter

<a id="opIdgenerateQAReport"></a>

> Code samples

```bash
curl https://example.com/reports/qa \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "budget_codes": [
      "string"
    ],
    "categories": [
      "string"
    ],
    "clients": [
      0
    ],
    "date_from": "1970-01-01T00:00:00Z",
    "date_to": "1970-01-01T00:00:00Z",
    "documents": [
      0
    ],
    "projects": [
      0
    ],
    "severities": [
      "string"
    ],
    "source_languages": [
      "string"
    ],
    "subjects": [
      "string"
    ],
    "target_languages": [
      "string"
    ],
    "vendors": [
      0
    ]
  }'
```

`POST /reports/qa`

Generate a QA report for given filter

> Body parameter

```json
{
  "budget_codes": [
    "string"
  ],
  "categories": [
    "string"
  ],
  "clients": [
    0
  ],
  "date_from": "1970-01-01T00:00:00Z",
  "date_to": "1970-01-01T00:00:00Z",
  "documents": [
    0
  ],
  "projects": [
    0
  ],
  "severities": [
    "string"
  ],
  "source_languages": [
    "string"
  ],
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "vendors": [
    0
  ]
}
```

<h3 id="generate-a-qa-report-for-given-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QaFilter](#schemaqafilter)|false|none|
|» budget_codes|body|[string]|false|none|
|» categories|body|[string]|false|none|
|» clients|body|[number(int64)]|false|none|
|» date_from|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» date_to|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» documents|body|[number(int64)]|false|none|
|» projects|body|[number(int64)]|false|none|
|» severities|body|[string]|false|none|
|» source_languages|body|[string]|false|none|
|» subjects|body|[string]|false|none|
|» target_languages|body|[string]|false|none|
|» vendors|body|[number(int64)]|false|none|

> Example responses

> 200 Response

```json
{
  "report": [
    {
      "category": "string",
      "comment": "string",
      "docId": "string",
      "editorLink": "string",
      "end": 0,
      "inSource": true,
      "isCurrent": true,
      "module": "string",
      "projectId": {
        "id": 0,
        "name": "string"
      },
      "severity": "string",
      "source": "string",
      "sourceLanguage": {
        "id": 0,
        "name": "string"
      },
      "start": 0,
      "state": "string",
      "targetLanguage": {
        "id": 0,
        "name": "string"
      },
      "translation": "string",
      "uniqueKey": "string",
      "vendor": {
        "id": 0,
        "name": "string"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="generate-a-qa-report-for-given-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of QA entries|[QaWarnings](#schemaqawarnings)|
|400|Bad Request|MissingParameter|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Company users report

<a id="opIdgetUsersReport"></a>

> Code samples

```bash
curl https://example.com/reports/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "budget_code": "string",
    "date_from": "1970-01-01T00:00:00Z",
    "date_to": "1970-01-01T00:00:00Z",
    "source_languages": [
      "string"
    ],
    "target_languages": [
      "string"
    ],
    "users": [
      0
    ]
  }'
```

`POST /reports/users`

View translation reports for each user under your company account. You need the permission to view users in your company.

> Body parameter

```json
{
  "budget_code": "string",
  "date_from": "1970-01-01T00:00:00Z",
  "date_to": "1970-01-01T00:00:00Z",
  "source_languages": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "users": [
    0
  ]
}
```

<h3 id="company-users-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportFilter](#schemareportfilter)|false|none|
|» budget_code|body|string|false|budget code filter. valid for corporate accounts only.|
|» date_from|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» date_to|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» source_languages|body|[string]|false|List of source language codes.|
|» target_languages|body|[string]|false|List of target language codes.|
|» users|body|[integer(int64)]|false|List of corporate user IDs. Valid for corporate accounts only.|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "report": [
    {
      "currency": "string",
      "spending": 0,
      "user": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "word_count": 0
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="company-users-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User stats for client and vendors|[UsersReport](#schemausersreport)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-search">Search</h1>

## Search everything in your account

<a id="opIdsearchEverywhere"></a>

> Code samples

```bash
curl 'https://example.com/search?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search`

Search through everything in your account, from projects to documents, from source strings to translations...

<h3 id="search-everything-in-your-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Search query term|
|include[]|query|[string]|false|Search in these entities. Current oprions are projects, documents, strings. Can be multiple. When not provided, we'll search through all entities.|
|page|query|integer(int64)|false|none|
|per_page|query|integer(int64)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include[]|projects|
|include[]|documents|
|include[]|strings|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "result": {
    "documents": [
      {
        "file_type": "string",
        "has_custom_package": true,
        "id": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "admins": {
            "property1": {
              "href": "string"
            },
            "property2": {
              "href": "string"
            }
          },
          "download": {
            "href": "string"
          },
          "editors": {
            "property1": {
              "href": "string"
            },
            "property2": {
              "href": "string"
            }
          },
          "preview-box": {
            "href": "string"
          },
          "preview-pdf": {
            "href": "string"
          },
          "preview-pdf-viewer": {
            "href": "string"
          },
          "progress": {
            "href": "string"
          },
          "project": {
            "href": "string"
          },
          "strings": {
            "href": "string"
          },
          "thumbnail": {
            "href": "string"
          }
        },
        "manual_files": [
          {
            "driveFileId": 0,
            "isProofread": true,
            "isTranslated": true,
            "language": "string",
            "proofreadingFileId": 0,
            "translationFileId": 0
          }
        ],
        "name": "string",
        "project_id": 0,
        "review_in_manual_editor": true,
        "scheme": {},
        "search_score": 0,
        "source_language": "string",
        "subject": "string",
        "target_languages": [
          "string"
        ],
        "uploaded_at": 0,
        "word_count": 0,
        "search_result_reason": "string"
      }
    ],
    "projects": [
      {
        "average_scores": {
          "property1": 0,
          "property2": 0
        },
        "budget_code": "string",
        "callback_url": "string",
        "can_pam_manage": true,
        "client": {
          "billing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string",
            "name": ""
          },
          "birthday": "1970-01-01",
          "can_work_manual_files": true,
          "city": "string",
          "client": {
            "corporate": {
              "email": "string",
              "id": 0,
              "logo": "string",
              "name": "string",
              "phone_number": "string"
            },
            "nps": 0,
            "subjects": {
              "property1": 0,
              "property2": 0
            }
          },
          "corporate_id": 0,
          "country": "string",
          "created_at": 0,
          "do_not_contact": true,
          "email": "string",
          "first_name": "string",
          "has_pwd": true,
          "id": 0,
          "is_client": true,
          "is_developer": true,
          "is_proofreader": true,
          "is_prospect": true,
          "is_sales_person": true,
          "is_vendor": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "last_name": "string",
          "last_seen_online_at": 0,
          "links": {
            "self": {
              "href": "string"
            },
            "login_as": {
              "href": "string"
            },
            "projects": {
              "href": "string"
            },
            "responsivity": {
              "href": "string"
            },
            "stats": {
              "href": "string"
            }
          },
          "locale": "string",
          "mailing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string"
          },
          "name": "string",
          "native_language": "string",
          "nps": 0,
          "phone_number": "string",
          "profile_picture_path": "string",
          "social_media": {
            "facebook_url": "string",
            "linkedIn_url": "string",
            "twitter_url": "string"
          },
          "state": "string",
          "status": "string",
          "street": "string",
          "timezone": "string",
          "tms_user_name": "string",
          "user_groups": [
            {
              "corporate_id": 0,
              "id": 0,
              "name": "string",
              "permissions": [
                "string"
              ]
            }
          ],
          "vendor": {
            "can_work_manual_files": true,
            "email_open_rate": 0,
            "is_frozen": true,
            "is_proofreader": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "native_language": "string",
            "pam_tqs": 0,
            "paypal_email": "string",
            "profile_survey": {
              "current_services": "string",
              "daily_proofreading_capacity": "string",
              "daily_translation_capacity": "string",
              "dtp_software": "string",
              "experience": "string",
              "is_certified_translator": "string",
              "is_sworn_translator": "string",
              "memoq": "string",
              "memsource": "string",
              "omegat": "string",
              "proofreader_experience": "string",
              "provides_creative_writing_service": "string",
              "provides_postedit_service": "string",
              "reference": "string",
              "sdl_trados": "string",
              "skype_id": "string",
              "smartcat": "string",
              "smartling": "string",
              "software": "string",
              "specialization": "string",
              "subtitle_edit": "string",
              "subtitle_workshop": "string",
              "translator_association": "string",
              "transsuite_2000": "string",
              "vendor_profile_lsp": "string",
              "wordbee": "string",
              "wordfast": "string",
              "work_type": "string",
              "work_with": "string",
              "working_as": "string",
              "working_timezone": "string",
              "xbench": "string",
              "xtm": "string"
            },
            "require_1099": true,
            "tags": [
              "string"
            ],
            "tms_user_name": "string",
            "vendor_type": "string"
          },
          "zip_code": "string"
        },
        "cm_id": 0,
        "completed_on": "1970-01-01T00:00:00Z",
        "continuous_project_type": "string",
        "created_at": 0,
        "custom": {},
        "delivery_at": 0,
        "errors": [
          {
            "code": "string",
            "help": "string",
            "http_code": 0,
            "message": "string"
          }
        ],
        "id": 0,
        "is_api_project": true,
        "is_certified": true,
        "is_continuous": true,
        "is_manual": true,
        "links": {
          "self": {
            "href": "string"
          },
          "documents": {
            "href": "string"
          },
          "glossaries": {
            "href": "string"
          },
          "payment": {
            "href": "string"
          },
          "quote-pdf": {
            "href": "string"
          },
          "styleguides": {
            "href": "string"
          }
        },
        "pairs": [
          {
            "currency": "usd",
            "is_proofreader": true,
            "proofreader": {
              "billing": {
                "city": "string",
                "country": "string",
                "phone": "string",
                "state": "string",
                "street": "string",
                "zip": "string",
                "name": ""
              },
              "birthday": "1970-01-01",
              "can_work_manual_files": true,
              "city": "string",
              "client": {
                "corporate": {
                  "email": "string",
                  "id": 0,
                  "logo": "string",
                  "name": "string",
                  "phone_number": "string"
                },
                "nps": 0,
                "subjects": {
                  "property1": 0,
                  "property2": 0
                }
              },
              "corporate_id": 0,
              "country": "string",
              "created_at": 0,
              "do_not_contact": true,
              "email": "string",
              "first_name": "string",
              "has_pwd": true,
              "id": 0,
              "is_client": true,
              "is_developer": true,
              "is_proofreader": true,
              "is_prospect": true,
              "is_sales_person": true,
              "is_vendor": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "last_name": "string",
              "last_seen_online_at": 0,
              "links": {
                "self": {
                  "href": "string"
                },
                "login_as": {
                  "href": "string"
                },
                "projects": {
                  "href": "string"
                },
                "responsivity": {
                  "href": "string"
                },
                "stats": {
                  "href": "string"
                }
              },
              "locale": "string",
              "mailing": {
                "city": "string",
                "country": "string",
                "phone": "string",
                "state": "string",
                "street": "string",
                "zip": "string"
              },
              "name": "string",
              "native_language": "string",
              "nps": 0,
              "phone_number": "string",
              "profile_picture_path": "string",
              "social_media": {
                "facebook_url": "string",
                "linkedIn_url": "string",
                "twitter_url": "string"
              },
              "state": "string",
              "status": "string",
              "street": "string",
              "timezone": "string",
              "tms_user_name": "string",
              "user_groups": [
                {
                  "corporate_id": 0,
                  "id": 0,
                  "name": "string",
                  "permissions": [
                    "string"
                  ]
                }
              ],
              "vendor": {
                "can_work_manual_files": true,
                "email_open_rate": 0,
                "is_frozen": true,
                "is_proofreader": true,
                "language_pairs": [
                  {
                    "source_language": "string",
                    "target_language": "string"
                  }
                ],
                "native_language": "string",
                "pam_tqs": 0,
                "paypal_email": "string",
                "profile_survey": {
                  "current_services": "string",
                  "daily_proofreading_capacity": "string",
                  "daily_translation_capacity": "string",
                  "dtp_software": "string",
                  "experience": "string",
                  "is_certified_translator": "string",
                  "is_sworn_translator": "string",
                  "memoq": "string",
                  "memsource": "string",
                  "omegat": "string",
                  "proofreader_experience": "string",
                  "provides_creative_writing_service": "string",
                  "provides_postedit_service": "string",
                  "reference": "string",
                  "sdl_trados": "string",
                  "skype_id": "string",
                  "smartcat": "string",
                  "smartling": "string",
                  "software": "string",
                  "specialization": "string",
                  "subtitle_edit": "string",
                  "subtitle_workshop": "string",
                  "translator_association": "string",
                  "transsuite_2000": "string",
                  "vendor_profile_lsp": "string",
                  "wordbee": "string",
                  "wordfast": "string",
                  "work_type": "string",
                  "work_with": "string",
                  "working_as": "string",
                  "working_timezone": "string",
                  "xbench": "string",
                  "xtm": "string"
                },
                "require_1099": true,
                "tags": [
                  "string"
                ],
                "tms_user_name": "string",
                "vendor_type": "string"
              },
              "zip_code": "string"
            },
            "proofreading_rate": 0,
            "source_language": "string",
            "target_language": "string",
            "translation_rate": 0
          }
        ],
        "pivoted_projects": [
          0
        ],
        "price": {
          "amount": 0,
          "base_amount": 0,
          "base_currency": "usd",
          "currency": "usd",
          "usd_amount": 0
        },
        "price_without_discount": {
          "amount": 0,
          "base_amount": 0,
          "base_currency": "usd",
          "currency": "usd",
          "usd_amount": 0
        },
        "role": "translator",
        "should_send_client_survey": true,
        "source": "api",
        "source_language": "string",
        "status": "pending",
        "subjects": [
          "string"
        ],
        "target_languages": [
          "string"
        ],
        "tms_name": "string",
        "valid_until": 0,
        "vendor_word_count": 0,
        "word_count": 0,
        "word_count_analysis": {
          "base": 0,
          "duplicate": 0,
          "exclusion": 0,
          "final": 0,
          "tm": 0
        },
        "search_result_reason": "string"
      }
    ],
    "strings": [
      {
        "file_id": 0,
        "internal_project_id": 0,
        "last_updated": "1970-01-01T00:00:00Z",
        "project_id": 0,
        "search_score": 0,
        "source": "string",
        "status": "Approved",
        "string_id": 0,
        "target": "string",
        "targets": [
          "string"
        ],
        "tm_name": "string",
        "type": "LOCAL_PROJECT"
      }
    ]
  }
}
```

<h3 id="search-everything-in-your-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search result for multiple entities and paging|[SearchEverywhereResult](#schemasearcheverywhereresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Reindex for search all of the client source and translation documents.

<a id="opIdreindexDocuments"></a>

> Code samples

```bash
curl https://example.com/search/documents/reindex \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /search/documents/reindex`

> Example responses

> 200 Response

```json
{
  "duration": 0,
  "key": "string",
  "message": {},
  "status": "sent"
}
```

<h3 id="reindex-for-search-all-of-the-client-source-and-translation-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Async operation status. Use the key to query status of this operation.|[AsyncOperationStatus](#schemaasyncoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Check reindex status of the client source and translation documents.

<a id="opIdcheckDocumentsReindex"></a>

> Code samples

```bash
curl 'https://example.com/search/documents/reindex/status?async_request_key=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search/documents/reindex/status`

<h3 id="check-reindex-status-of-the-client-source-and-translation-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|async_request_key|query|string|true|Async operation key|

> Example responses

> 200 Response

```json
{
  "duration": 0,
  "key": "string",
  "message": {},
  "status": "sent"
}
```

<h3 id="check-reindex-status-of-the-client-source-and-translation-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Async operation status. Use the key to query status of this operation.|[AsyncOperationStatus](#schemaasyncoperationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-stats">Stats</h1>

## Returns the total commissions stats.

<a id="opIdgetCommissionStats"></a>

> Code samples

```bash
curl https://example.com/stats/commissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stats/commissions`

> Example responses

> 200 Response

```json
{
  "balance": {
    "amount": 0,
    "currency": "usd"
  },
  "paid": {
    "amount": 0,
    "currency": "usd"
  },
  "quote_total": {
    "amount": 0,
    "currency": "usd"
  },
  "total": {
    "amount": 0,
    "currency": "usd"
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="returns-the-total-commissions-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's commission stats|[CommissionStats](#schemacommissionstats)|
|401|Unauthorized|UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Returns the total commissions stats by report filter.

<a id="opIdgetCommissionStatsByFilter"></a>

> Code samples

```bash
curl https://example.com/stats/commissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "budget_code": "string",
    "date_from": "1970-01-01T00:00:00Z",
    "date_to": "1970-01-01T00:00:00Z",
    "source_languages": [
      "string"
    ],
    "target_languages": [
      "string"
    ],
    "users": [
      0
    ]
  }'
```

`POST /stats/commissions`

> Body parameter

```json
{
  "budget_code": "string",
  "date_from": "1970-01-01T00:00:00Z",
  "date_to": "1970-01-01T00:00:00Z",
  "source_languages": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "users": [
    0
  ]
}
```

<h3 id="returns-the-total-commissions-stats-by-report-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportFilter](#schemareportfilter)|false|none|
|» budget_code|body|string|false|budget code filter. valid for corporate accounts only.|
|» date_from|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» date_to|body|string(date-time)|false|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|» source_languages|body|[string]|false|List of source language codes.|
|» target_languages|body|[string]|false|List of target language codes.|
|» users|body|[integer(int64)]|false|List of corporate user IDs. Valid for corporate accounts only.|

> Example responses

> 200 Response

```json
{
  "balance": {
    "amount": 0,
    "currency": "usd"
  },
  "paid": {
    "amount": 0,
    "currency": "usd"
  },
  "quote_total": {
    "amount": 0,
    "currency": "usd"
  },
  "total": {
    "amount": 0,
    "currency": "usd"
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="returns-the-total-commissions-stats-by-report-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's commission stats|[CommissionStats](#schemacommissionstats)|
|401|Unauthorized|UnauthorizedUser|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View your popular language pairs

<a id="opIdgetPopularPairs"></a>

> Code samples

```bash
curl https://example.com/stats/popular-pairs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stats/popular-pairs`

> Example responses

> 200 Response

```json
{
  "pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-your-popular-language-pairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Your most ordered language pairs|[PopularLanguagePairs](#schemapopularlanguagepairs)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View your project statistics

<a id="opIdgetProjectStats"></a>

> Code samples

```bash
curl https://example.com/stats/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stats/projects`

> Example responses

> 200 Response

```json
{
  "stats": [
    {
      "languages": [
        "string"
      ],
      "month": "string",
      "number_of_projects": 0,
      "total_spending": 0,
      "week": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-your-project-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project statistics for your account|[ClientProjectStats](#schemaclientprojectstats)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## View your translation statistics

<a id="opIdgetStringStats"></a>

> Code samples

```bash
curl https://example.com/stats/strings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stats/strings`

> Example responses

> 200 Response

```json
{
  "language_counts": [
    {
      "project_string_count": 0,
      "source_language": "string",
      "tm_string_count": 0
    }
  ],
  "total_project_strings_count": 0,
  "total_tm_strings_count": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="view-your-translation-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Translation statistics for your account|[ClientStringStats](#schemaclientstringstats)|
|404|Not Found|UserNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-surveys">Surveys</h1>

## Get survey questions in given scope and type

<a id="opIdgetQuestions"></a>

> Code samples

```bash
curl https://example.com/surveys/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /surveys/{scope}/{type}`

Get survey questions in given scope and type

<h3 id="get-survey-questions-in-given-scope-and-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|path|string|true|Scope|
|type|path|string|true|Type|
|attach_answers_for_project|query|integer(int64)|false|Project ID|

> Example responses

> 200 Response

```json
[
  {
    "answers": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "question": {
      "enabled": true,
      "format": "string",
      "id": 0,
      "question": "string",
      "text": "string"
    },
    "question_answers": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  }
]
```

> 404 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="get-survey-questions-in-given-scope-and-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Survey Questions|[SurveyQuestions](#schemasurveyquestions)|
|404|Not Found|SurveyQuestionsNotFound|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

## Post survey answers for scope and type

<a id="opIdsubmitAnswers"></a>

> Code samples

```bash
curl https://example.com/surveys/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "answers": [
      {
        "answer": "string",
        "project_id": 0,
        "question_answer_id": 0,
        "question_id": 0,
        "user_id": 0
      }
    ]
  }'
```

`POST /surveys/{scope}/{type}`

Post survey answers for scope and type

> Body parameter

```json
{
  "answers": [
    {
      "answer": "string",
      "project_id": 0,
      "question_answer_id": 0,
      "question_id": 0,
      "user_id": 0
    }
  ]
}
```

<h3 id="post-survey-answers-for-scope-and-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|path|string|true|Scope|
|type|path|string|true|Type|
|body|body|[SurveyAnswers](#schemasurveyanswers)|false|none|
|» answers|body|[[SurveyAnswer](#schemasurveyanswer)]|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 500 Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

<h3 id="post-survey-answers-for-scope-and-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Survey Answers|[OperationStatus](#schemaoperationstatus)|
|500|Internal Server Error|FailedToSubmitSurveyAnswers|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

<h1 id="motaword-api-auth">Auth</h1>

## Retrieve an access token

<a id="opIdgetAccessToken"></a>

> Code samples

```bash
curl https://example.com/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "grant_type": "string",
    "password": "string",
    "refresh_token": "string",
    "scope": "string",
    "user_id": 0,
    "username": "string"
  }'
```

`POST /token`

MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call.


> Body parameter

```json
{
  "grant_type": "string",
  "password": "string",
  "refresh_token": "string",
  "scope": "string",
  "user_id": 0,
  "username": "string"
}
```

<h3 id="retrieve-an-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TokenRequest](#schematokenrequest)|false|none|
|» grant_type|body|string|true|OAuth2 grant type. Supports 'client_credentials', 'password', 'refresh_token' or 'user_id'.|
|» password|body|string|false|MW Account password (to be used in password grant type)|
|» refresh_token|body|string|false|Refresh token value for refresh token flow.|
|» scope|body|string|true|Authorization scope. Use 'privileged' for private endpoints.|
|» user_id|body|integer(int64)|false|Value for user_id grant type flow.|
|» username|body|string|false|MW Account email (to be used in password grant type)|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "expires_in": 0,
  "refresh_token": "string",
  "scope": "string",
  "token_type": "string",
  "user_id": 0
}
```

> default Response

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string",
  "account_status": "registered"
}
```

<h3 id="retrieve-an-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authentication response|[Token](#schematoken)|
|default|Default|Authentication error - for vendor auth, it will also fail if their account is not approved yet. In that case, the error response will include "account_status" key.|[TokenError](#schematokenerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="motaword-api-vendor">Vendor</h1>

## Get a list of vendors available for the criteria given

<a id="opIdgetAvailableVendors"></a>

> Code samples

```bash
curl https://example.com/users/available-vendors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "corporateId": 0,
    "manualWorkPermission": 0,
    "sourceLanguage": "string",
    "targetLanguages": [
      "string"
    ],
    "types": [
      "translator"
    ]
  }'
```

`POST /users/available-vendors`

Get a list of vendors available for the criteria given

> Body parameter

```json
{
  "corporateId": 0,
  "manualWorkPermission": 0,
  "sourceLanguage": "string",
  "targetLanguages": [
    "string"
  ],
  "types": [
    "translator"
  ]
}
```

<h3 id="get-a-list-of-vendors-available-for-the-criteria-given-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|with[]|query|[string]|false|Include detailed information. Possible values 'user'. Requesting user info enrichment takes much longer.|
|body|body|[AvailableVendorsFilter](#schemaavailablevendorsfilter)|false|none|
|» corporateId|body|number|false|Corporate account ID to filter for vendor authorization|
|» manualWorkPermission|body|boolean|false|Filter vendors for manual work permission|
|» sourceLanguage|body|string|false|Source language code|
|» targetLanguages|body|[string]|false|List of target language codes.|
|» types|body|[string]|false|List of vendor types|

#### Enumerated Values

|Parameter|Value|
|---|---|
|with[]|user|
|» types|translator|
|» types|proofreader|
|» types|both|

> Example responses

> 200 Response

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "users": [
    {
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "birthday": "1970-01-01",
      "can_work_manual_files": true,
      "city": "string",
      "client": {
        "corporate": {
          "email": "string",
          "id": 0,
          "logo": "string",
          "name": "string",
          "phone_number": "string"
        },
        "nps": 0,
        "subjects": {
          "property1": 0,
          "property2": 0
        }
      },
      "corporate_id": 0,
      "country": "string",
      "created_at": 0,
      "do_not_contact": true,
      "email": "string",
      "first_name": "string",
      "has_pwd": true,
      "id": 0,
      "is_client": true,
      "is_developer": true,
      "is_proofreader": true,
      "is_prospect": true,
      "is_sales_person": true,
      "is_vendor": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "last_name": "string",
      "last_seen_online_at": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "login_as": {
          "href": "string"
        },
        "projects": {
          "href": "string"
        },
        "responsivity": {
          "href": "string"
        },
        "stats": {
          "href": "string"
        }
      },
      "locale": "string",
      "mailing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string"
      },
      "name": "string",
      "native_language": "string",
      "nps": 0,
      "phone_number": "string",
      "profile_picture_path": "string",
      "social_media": {
        "facebook_url": "string",
        "linkedIn_url": "string",
        "twitter_url": "string"
      },
      "state": "string",
      "status": "string",
      "street": "string",
      "timezone": "string",
      "tms_user_name": "string",
      "user_groups": [
        {
          "corporate_id": 0,
          "id": 0,
          "name": "string",
          "permissions": [
            "string"
          ]
        }
      ],
      "vendor": {
        "can_work_manual_files": true,
        "email_open_rate": 0,
        "is_frozen": true,
        "is_proofreader": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "native_language": "string",
        "pam_tqs": 0,
        "paypal_email": "string",
        "profile_survey": {
          "current_services": "string",
          "daily_proofreading_capacity": "string",
          "daily_translation_capacity": "string",
          "dtp_software": "string",
          "experience": "string",
          "is_certified_translator": "string",
          "is_sworn_translator": "string",
          "memoq": "string",
          "memsource": "string",
          "omegat": "string",
          "proofreader_experience": "string",
          "provides_creative_writing_service": "string",
          "provides_postedit_service": "string",
          "reference": "string",
          "sdl_trados": "string",
          "skype_id": "string",
          "smartcat": "string",
          "smartling": "string",
          "software": "string",
          "specialization": "string",
          "subtitle_edit": "string",
          "subtitle_workshop": "string",
          "translator_association": "string",
          "transsuite_2000": "string",
          "vendor_profile_lsp": "string",
          "wordbee": "string",
          "wordfast": "string",
          "work_type": "string",
          "work_with": "string",
          "working_as": "string",
          "working_timezone": "string",
          "xbench": "string",
          "xtm": "string"
        },
        "require_1099": true,
        "tags": [
          "string"
        ],
        "tms_user_name": "string",
        "vendor_type": "string"
      },
      "zip_code": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-vendors-available-for-the-criteria-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User list|[UserList](#schemauserlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
mwoAuth ( Scopes: default )
</aside>

# Schemas

<h2 id="tocS_AccountGlossaryUploadRequest">AccountGlossaryUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountglossaryuploadrequest"></a>
<a id="schema_AccountGlossaryUploadRequest"></a>
<a id="tocSaccountglossaryuploadrequest"></a>
<a id="tocsaccountglossaryuploadrequest"></a>

```json
{
  "glossary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossary|string(binary)|true|none|Glossary file. Currently supported formats: .xlsx, .tbx|

<h2 id="tocS_AccountStyleGuideUploadRequest">AccountStyleGuideUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstyleguideuploadrequest"></a>
<a id="schema_AccountStyleGuideUploadRequest"></a>
<a id="tocSaccountstyleguideuploadrequest"></a>
<a id="tocsaccountstyleguideuploadrequest"></a>

```json
{
  "styleguide": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|styleguide|string(binary)|true|none|Style guide file. Currently supported formats: .pdf, .docx, .txt|

<h2 id="tocS_ActiveWidget">ActiveWidget</h2>
<!-- backwards compatibility -->
<a id="schemaactivewidget"></a>
<a id="schema_ActiveWidget"></a>
<a id="tocSactivewidget"></a>
<a id="tocsactivewidget"></a>

```json
{
  "allow_hash_in_url": true,
  "allow_query_in_url": true,
  "auto_detect_source_language": true,
  "created_at": "1970-01-01T00:00:00Z",
  "elements": "string",
  "follow_user": true,
  "force_cache_refresh_interval": true,
  "id": 0,
  "language_mappings": "string",
  "live": true,
  "modify_links": true,
  "name": "string",
  "optimize_per_page": true,
  "pages": "string",
  "path_regex": "string",
  "position": "string",
  "query_name": "locale",
  "reboot_on_url_change": true,
  "restricted_domains": "string",
  "sections": "string",
  "test_mode": true,
  "theme": "string",
  "token": "string",
  "url_change_mode": "string",
  "url_mode": "string",
  "use_cache": true,
  "use_dummy_translations": true,
  "variables": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_hash_in_url|boolean|false|none|When true, hash params are included in filenames. When false, params are ignored.|
|allow_query_in_url|boolean|false|none|When true, query params are included in filenames. When false, params are ignored.|
|auto_detect_source_language|boolean|false|none|When true, we will ignore the source language of your project and try to automatically detect the source language of the given content. This is especially useful in environments with unpredictable source contents, such as a chat environment.|
|created_at|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|elements|string|false|none|Continuous project exclusive elements and rules|
|follow_user|boolean|false|none|Specify whether we should follow the user around in your website and automatically translate pages.|
|force_cache_refresh_interval|boolean|false|none|Determines whether to force-refresh local browser cache of your translations in certain period of times, no matter if there is a new activity in the project.|
|id|integer(int64)|false|none|none|
|language_mappings|string|false|none|Continuous project language mappings|
|live|boolean|false|none|Whether ActiveJS should be considered live in an embedded site. Use `false` if you are still testing Active. Go to your Active dashboard and follow links to your website to actually test Active.|
|modify_links|boolean|false|none|We can automatically localize the same-domain URLs in your page. The way we localize the URL depends on urlMode configuration. We can either add/update the locale query parameter, or add/update the path of the URL.|
|name|string|false|none|none|
|optimize_per_page|boolean|false|none|When true, Active ecosystem will optimize the script and data flows per page, rather than per project. This decreases the bandwidth usage per script, but makes translation publishing more complex and script serving per-page.|
|pages|string|false|none|Continuous project page rules|
|path_regex|string|false|none|Custom regex for path-type URL mode.|
|position|string|false|none|Options are "bottom-left", "bottom-right", "in-place"|
|query_name|string|false|none|Query parameter name to be used with query-type URL mode. Default is 'locale'.|
|reboot_on_url_change|boolean|false|none|When true, Active ecosystem reboots itself when url changes.|
|restricted_domains|string|false|none|JSON string for a list of domains that this widget's API interactions are limited to.|
|sections|string|false|none|Continuous project section rules|
|test_mode|boolean|false|none|Is the Active Widget in test mode? This changes a couple behaviors in the widget to make it easier for you to test and develop your Active integration.|
|theme|string|false|none|\"light\", \"dark\" OR custom JSON.|
|token|string|false|none|Token that you should use when you are using this widget on your website.|
|url_change_mode|string|false|none|When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can do this by actually redirecting the user to the new page, or by simply changing the URL in the address bar via browser's History API. When NULL, we won't apply any URL changes.|
|url_mode|string|false|none|When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can either change the path of the URL to prefix it with the locale code, or we can add a query parameter to the URL. We also use this mode to detect the locale for the current page when a user directly loads a page. When NULL, locale detection from URL will be disabled (even then, if the user has selected a locale manually, and followUser is enabled, we will still automatically translate the page in user's locale.|
|use_cache|boolean|false|none|Should we make use of local browser cache for your visitors? We will refresh the cache when Active JS detects new activity in your project.|
|use_dummy_translations|boolean|false|none|When enabled, we will translate your website with dummy content, rather than actually using MT/TM.|
|variables|string|false|none|Continuous project variable definitions|

<h2 id="tocS_ActiveWidgetList">ActiveWidgetList</h2>
<!-- backwards compatibility -->
<a id="schemaactivewidgetlist"></a>
<a id="schema_ActiveWidgetList"></a>
<a id="tocSactivewidgetlist"></a>
<a id="tocsactivewidgetlist"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "widgets": [
    {
      "allow_hash_in_url": true,
      "allow_query_in_url": true,
      "auto_detect_source_language": true,
      "created_at": "1970-01-01T00:00:00Z",
      "elements": "string",
      "follow_user": true,
      "force_cache_refresh_interval": true,
      "id": 0,
      "language_mappings": "string",
      "live": true,
      "modify_links": true,
      "name": "string",
      "optimize_per_page": true,
      "pages": "string",
      "path_regex": "string",
      "position": "string",
      "query_name": "locale",
      "reboot_on_url_change": true,
      "restricted_domains": "string",
      "sections": "string",
      "test_mode": true,
      "theme": "string",
      "token": "string",
      "url_change_mode": "string",
      "url_mode": "string",
      "use_cache": true,
      "use_dummy_translations": true,
      "variables": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|widgets|[[ActiveWidget](#schemaactivewidget)]|false|none|none|

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "activity_at": 0,
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "comments": {
      "href": "string"
    },
    "project": {
      "href": "string"
    }
  },
  "source_text": "string",
  "target_text": "string",
  "translator": 0,
  "type": "translated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_at|integer(int64)|false|none|Unix epoch time|
|id|integer(int64)|false|none|none|
|links|[ActivityLinks](#schemaactivitylinks)|false|none|none|
|source_text|string|false|none|Source text|
|target_text|string|false|none|Target text of the activity, which is actually the translation of the source text.|
|translator|integer(int64)|false|none|Unique identifier of the translator/proofreader of this activity.|
|type|string|false|none|Currently there are two available activity types; 'translated', 'proofread'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|translated|
|type|proofread|

<h2 id="tocS_ActivityLinks">ActivityLinks</h2>
<!-- backwards compatibility -->
<a id="schemaactivitylinks"></a>
<a id="schema_ActivityLinks"></a>
<a id="tocSactivitylinks"></a>
<a id="tocsactivitylinks"></a>

```json
{
  "self": {
    "href": "string"
  },
  "comments": {
    "href": "string"
  },
  "project": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|
|comments|[Href](#schemahref)|false|none|none|
|project|[Href](#schemahref)|false|none|none|

<h2 id="tocS_ActivityList">ActivityList</h2>
<!-- backwards compatibility -->
<a id="schemaactivitylist"></a>
<a id="schema_ActivityList"></a>
<a id="tocSactivitylist"></a>
<a id="tocsactivitylist"></a>

```json
{
  "activities": [
    {
      "activity_at": 0,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "comments": {
          "href": "string"
        },
        "project": {
          "href": "string"
        }
      },
      "source_text": "string",
      "target_text": "string",
      "translator": 0,
      "type": "translated"
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[Activity](#schemaactivity)]|false|none|none|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|

<h2 id="tocS_AddOrUpdateDocumentRequest">AddOrUpdateDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddorupdatedocumentrequest"></a>
<a id="schema_AddOrUpdateDocumentRequest"></a>
<a id="tocSaddorupdatedocumentrequest"></a>
<a id="tocsaddorupdatedocumentrequest"></a>

```json
{
  "document": {
    "data": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[FileAsData](#schemafileasdata)|false|none|none|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "phone": "string",
  "state": "string",
  "street": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|country|string|false|none|none|
|phone|string|false|none|none|
|state|string|false|none|none|
|street|string|false|none|none|
|zip|string|false|none|none|

<h2 id="tocS_AnalyticsCollection">AnalyticsCollection</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticscollection"></a>
<a id="schema_AnalyticsCollection"></a>
<a id="tocSanalyticscollection"></a>
<a id="tocsanalyticscollection"></a>

```json
{
  "anonymousId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "sessionId": "string",
  "type": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anonymousId|string|false|none|none|
|properties|object|false|none|none|
|sessionId|string|false|none|none|
|type|string|false|none|none|
|userId|string|false|none|none|

<h2 id="tocS_AnalyticsToken">AnalyticsToken</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticstoken"></a>
<a id="schema_AnalyticsToken"></a>
<a id="tocSanalyticstoken"></a>
<a id="tocsanalyticstoken"></a>

```json
{
  "jwt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwt|string|false|none|none|

<h2 id="tocS_AsyncOperationStatus">AsyncOperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaasyncoperationstatus"></a>
<a id="schema_AsyncOperationStatus"></a>
<a id="tocSasyncoperationstatus"></a>
<a id="tocsasyncoperationstatus"></a>

```json
{
  "duration": 0,
  "key": "string",
  "message": {},
  "status": "sent"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer(int64)|false|none|operation duration in milliseconds|
|key|string|false|none|none|
|message|object|false|none|none|
|status|[AsyncOperationStatusEnum](#schemaasyncoperationstatusenum)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|sent|
|status|started|
|status|completed|
|status|failed|

<h2 id="tocS_AsyncOperationStatusEnum">AsyncOperationStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemaasyncoperationstatusenum"></a>
<a id="schema_AsyncOperationStatusEnum"></a>
<a id="tocSasyncoperationstatusenum"></a>
<a id="tocsasyncoperationstatusenum"></a>

```json
"sent"
```

<h2 id="tocS_AvailableVendorsFilter">AvailableVendorsFilter</h2>
<!-- backwards compatibility -->
<a id="schemaavailablevendorsfilter"></a>
<a id="schema_AvailableVendorsFilter"></a>
<a id="tocSavailablevendorsfilter"></a>
<a id="tocsavailablevendorsfilter"></a>

```json
{
  "corporateId": 0,
  "manualWorkPermission": 0,
  "sourceLanguage": "string",
  "targetLanguages": [
    "string"
  ],
  "types": [
    "translator"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corporateId|number|false|none|Corporate account ID to filter for vendor authorization|
|manualWorkPermission|boolean|false|none|Filter vendors for manual work permission|
|sourceLanguage|string|false|none|Source language code|
|targetLanguages|[string]|false|none|List of target language codes.|
|types|[string]|false|none|List of vendor types|

#### Enumerated Values

|Property|Value|
|---|---|
|types|translator|
|types|proofreader|
|types|both|

<h2 id="tocS_BillingAddress">BillingAddress</h2>
<!-- backwards compatibility -->
<a id="schemabillingaddress"></a>
<a id="schema_BillingAddress"></a>
<a id="tocSbillingaddress"></a>
<a id="tocsbillingaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "phone": "string",
  "state": "string",
  "street": "string",
  "zip": "string",
  "name": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|country|string|false|none|none|
|phone|string|false|none|none|
|state|string|false|none|none|
|street|string|false|none|none|
|zip|string|false|none|none|
|name|string|false|none|addressing name, such as company name. used in billing address.|

<h2 id="tocS_BlogArticle">BlogArticle</h2>
<!-- backwards compatibility -->
<a id="schemablogarticle"></a>
<a id="schema_BlogArticle"></a>
<a id="tocSblogarticle"></a>
<a id="tocsblogarticle"></a>

```json
{
  "announcement_type": "article",
  "author": "string",
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "excerpt": "string",
  "id": 0,
  "language": "string",
  "links": {
    "self": {
      "href": "string"
    },
    "android": {
      "href": "string"
    },
    "header_image": {
      "href": "string"
    },
    "ios": {
      "href": "string"
    },
    "web": {
      "href": "string"
    }
  },
  "slug": "string",
  "title": "string",
  "topic": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|announcement_type|string|false|none|none|
|author|string|false|none|none|
|content|string|false|none|Article content|
|created_at|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|excerpt|string|false|none|Article excerpt|
|id|integer(int64)|false|none|none|
|language|string|false|none|language code|
|links|[BlogArticleLinks](#schemablogarticlelinks)|false|none|none|
|slug|string|false|none|none|
|title|string|false|none|none|
|topic|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|announcement_type|article|
|announcement_type|case|
|announcement_type|famous-translators|
|announcement_type|sales|

<h2 id="tocS_BlogArticleLinks">BlogArticleLinks</h2>
<!-- backwards compatibility -->
<a id="schemablogarticlelinks"></a>
<a id="schema_BlogArticleLinks"></a>
<a id="tocSblogarticlelinks"></a>
<a id="tocsblogarticlelinks"></a>

```json
{
  "self": {
    "href": "string"
  },
  "android": {
    "href": "string"
  },
  "header_image": {
    "href": "string"
  },
  "ios": {
    "href": "string"
  },
  "web": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|
|android|[Href](#schemahref)|false|none|none|
|header_image|[Href](#schemahref)|false|none|none|
|ios|[Href](#schemahref)|false|none|none|
|web|[Href](#schemahref)|false|none|none|

<h2 id="tocS_BlogArticleList">BlogArticleList</h2>
<!-- backwards compatibility -->
<a id="schemablogarticlelist"></a>
<a id="schema_BlogArticleList"></a>
<a id="tocSblogarticlelist"></a>
<a id="tocsblogarticlelist"></a>

```json
{
  "articles": [
    {
      "announcement_type": "article",
      "author": "string",
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "excerpt": "string",
      "id": 0,
      "language": "string",
      "links": {
        "self": {
          "href": "string"
        },
        "android": {
          "href": "string"
        },
        "header_image": {
          "href": "string"
        },
        "ios": {
          "href": "string"
        },
        "web": {
          "href": "string"
        }
      },
      "slug": "string",
      "title": "string",
      "topic": "string"
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articles|[[BlogArticle](#schemablogarticle)]|false|none|none|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|

<h2 id="tocS_CM">CM</h2>
<!-- backwards compatibility -->
<a id="schemacm"></a>
<a id="schema_CM"></a>
<a id="tocScm"></a>
<a id="tocscm"></a>

```json
{
  "user_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|integer(int64)|false|none|none|

<h2 id="tocS_CallbackResult">CallbackResult</h2>
<!-- backwards compatibility -->
<a id="schemacallbackresult"></a>
<a id="schema_CallbackResult"></a>
<a id="tocScallbackresult"></a>
<a id="tocscallbackresult"></a>

```json
{
  "data": {
    "average_scores": {
      "property1": 0,
      "property2": 0
    },
    "budget_code": "string",
    "callback_url": "string",
    "can_pam_manage": true,
    "client": {
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "birthday": "1970-01-01",
      "can_work_manual_files": true,
      "city": "string",
      "client": {
        "corporate": {
          "email": "string",
          "id": 0,
          "logo": "string",
          "name": "string",
          "phone_number": "string"
        },
        "nps": 0,
        "subjects": {
          "property1": 0,
          "property2": 0
        }
      },
      "corporate_id": 0,
      "country": "string",
      "created_at": 0,
      "do_not_contact": true,
      "email": "string",
      "first_name": "string",
      "has_pwd": true,
      "id": 0,
      "is_client": true,
      "is_developer": true,
      "is_proofreader": true,
      "is_prospect": true,
      "is_sales_person": true,
      "is_vendor": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "last_name": "string",
      "last_seen_online_at": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "login_as": {
          "href": "string"
        },
        "projects": {
          "href": "string"
        },
        "responsivity": {
          "href": "string"
        },
        "stats": {
          "href": "string"
        }
      },
      "locale": "string",
      "mailing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string"
      },
      "name": "string",
      "native_language": "string",
      "nps": 0,
      "phone_number": "string",
      "profile_picture_path": "string",
      "social_media": {
        "facebook_url": "string",
        "linkedIn_url": "string",
        "twitter_url": "string"
      },
      "state": "string",
      "status": "string",
      "street": "string",
      "timezone": "string",
      "tms_user_name": "string",
      "user_groups": [
        {
          "corporate_id": 0,
          "id": 0,
          "name": "string",
          "permissions": [
            "string"
          ]
        }
      ],
      "vendor": {
        "can_work_manual_files": true,
        "email_open_rate": 0,
        "is_frozen": true,
        "is_proofreader": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "native_language": "string",
        "pam_tqs": 0,
        "paypal_email": "string",
        "profile_survey": {
          "current_services": "string",
          "daily_proofreading_capacity": "string",
          "daily_translation_capacity": "string",
          "dtp_software": "string",
          "experience": "string",
          "is_certified_translator": "string",
          "is_sworn_translator": "string",
          "memoq": "string",
          "memsource": "string",
          "omegat": "string",
          "proofreader_experience": "string",
          "provides_creative_writing_service": "string",
          "provides_postedit_service": "string",
          "reference": "string",
          "sdl_trados": "string",
          "skype_id": "string",
          "smartcat": "string",
          "smartling": "string",
          "software": "string",
          "specialization": "string",
          "subtitle_edit": "string",
          "subtitle_workshop": "string",
          "translator_association": "string",
          "transsuite_2000": "string",
          "vendor_profile_lsp": "string",
          "wordbee": "string",
          "wordfast": "string",
          "work_type": "string",
          "work_with": "string",
          "working_as": "string",
          "working_timezone": "string",
          "xbench": "string",
          "xtm": "string"
        },
        "require_1099": true,
        "tags": [
          "string"
        ],
        "tms_user_name": "string",
        "vendor_type": "string"
      },
      "zip_code": "string"
    },
    "cm_id": 0,
    "completed_on": "1970-01-01T00:00:00Z",
    "continuous_project_type": "string",
    "created_at": 0,
    "custom": {},
    "delivery_at": 0,
    "errors": [
      {
        "code": "string",
        "help": "string",
        "http_code": 0,
        "message": "string"
      }
    ],
    "id": 0,
    "is_api_project": true,
    "is_certified": true,
    "is_continuous": true,
    "is_manual": true,
    "links": {
      "self": {
        "href": "string"
      },
      "documents": {
        "href": "string"
      },
      "glossaries": {
        "href": "string"
      },
      "payment": {
        "href": "string"
      },
      "quote-pdf": {
        "href": "string"
      },
      "styleguides": {
        "href": "string"
      }
    },
    "pairs": [
      {
        "currency": "usd",
        "is_proofreader": true,
        "proofreader": {
          "billing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string",
            "name": ""
          },
          "birthday": "1970-01-01",
          "can_work_manual_files": true,
          "city": "string",
          "client": {
            "corporate": {
              "email": "string",
              "id": 0,
              "logo": "string",
              "name": "string",
              "phone_number": "string"
            },
            "nps": 0,
            "subjects": {
              "property1": 0,
              "property2": 0
            }
          },
          "corporate_id": 0,
          "country": "string",
          "created_at": 0,
          "do_not_contact": true,
          "email": "string",
          "first_name": "string",
          "has_pwd": true,
          "id": 0,
          "is_client": true,
          "is_developer": true,
          "is_proofreader": true,
          "is_prospect": true,
          "is_sales_person": true,
          "is_vendor": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "last_name": "string",
          "last_seen_online_at": 0,
          "links": {
            "self": {
              "href": "string"
            },
            "login_as": {
              "href": "string"
            },
            "projects": {
              "href": "string"
            },
            "responsivity": {
              "href": "string"
            },
            "stats": {
              "href": "string"
            }
          },
          "locale": "string",
          "mailing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string"
          },
          "name": "string",
          "native_language": "string",
          "nps": 0,
          "phone_number": "string",
          "profile_picture_path": "string",
          "social_media": {
            "facebook_url": "string",
            "linkedIn_url": "string",
            "twitter_url": "string"
          },
          "state": "string",
          "status": "string",
          "street": "string",
          "timezone": "string",
          "tms_user_name": "string",
          "user_groups": [
            {
              "corporate_id": 0,
              "id": 0,
              "name": "string",
              "permissions": [
                "string"
              ]
            }
          ],
          "vendor": {
            "can_work_manual_files": true,
            "email_open_rate": 0,
            "is_frozen": true,
            "is_proofreader": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "native_language": "string",
            "pam_tqs": 0,
            "paypal_email": "string",
            "profile_survey": {
              "current_services": "string",
              "daily_proofreading_capacity": "string",
              "daily_translation_capacity": "string",
              "dtp_software": "string",
              "experience": "string",
              "is_certified_translator": "string",
              "is_sworn_translator": "string",
              "memoq": "string",
              "memsource": "string",
              "omegat": "string",
              "proofreader_experience": "string",
              "provides_creative_writing_service": "string",
              "provides_postedit_service": "string",
              "reference": "string",
              "sdl_trados": "string",
              "skype_id": "string",
              "smartcat": "string",
              "smartling": "string",
              "software": "string",
              "specialization": "string",
              "subtitle_edit": "string",
              "subtitle_workshop": "string",
              "translator_association": "string",
              "transsuite_2000": "string",
              "vendor_profile_lsp": "string",
              "wordbee": "string",
              "wordfast": "string",
              "work_type": "string",
              "work_with": "string",
              "working_as": "string",
              "working_timezone": "string",
              "xbench": "string",
              "xtm": "string"
            },
            "require_1099": true,
            "tags": [
              "string"
            ],
            "tms_user_name": "string",
            "vendor_type": "string"
          },
          "zip_code": "string"
        },
        "proofreading_rate": 0,
        "source_language": "string",
        "target_language": "string",
        "translation_rate": 0
      }
    ],
    "pivoted_projects": [
      0
    ],
    "price": {
      "amount": 0,
      "base_amount": 0,
      "base_currency": "usd",
      "currency": "usd",
      "usd_amount": 0
    },
    "price_without_discount": {
      "amount": 0,
      "base_amount": 0,
      "base_currency": "usd",
      "currency": "usd",
      "usd_amount": 0
    },
    "role": "translator",
    "should_send_client_survey": true,
    "source": "api",
    "source_language": "string",
    "status": "pending",
    "subjects": [
      "string"
    ],
    "target_languages": [
      "string"
    ],
    "tms_name": "string",
    "valid_until": 0,
    "vendor_word_count": 0,
    "word_count": 0,
    "word_count_analysis": {
      "base": 0,
      "duplicate": 0,
      "exclusion": 0,
      "final": 0,
      "tm": 0
    }
  },
  "result": "string",
  "type": "pending",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Project](#schemaproject)|false|none|none|
|result|string|false|none|Callback response returned from `url`.|
|type|[ProjectStatus](#schemaprojectstatus)|false|none|none|
|url|string|false|none|The URL that received the callback.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pending|
|type|started|
|type|completed|
|type|translated|
|type|proofread|

<h2 id="tocS_CancelProjectRequest">CancelProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelprojectrequest"></a>
<a id="schema_CancelProjectRequest"></a>
<a id="tocScancelprojectrequest"></a>
<a id="tocscancelprojectrequest"></a>

```json
{
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Cancellation reason|

<h2 id="tocS_ClientProfile">ClientProfile</h2>
<!-- backwards compatibility -->
<a id="schemaclientprofile"></a>
<a id="schema_ClientProfile"></a>
<a id="tocSclientprofile"></a>
<a id="tocsclientprofile"></a>

```json
{
  "account_creation_date": "1970-01-01T00:00:00Z",
  "client_project_count": 0,
  "corporate": "string",
  "corporate_id": 0,
  "corporate_user_count": 0,
  "frequent_file_extension": "string",
  "frequent_language_pairs": [
    "string"
  ],
  "full_name": "string",
  "growth": true,
  "is_complex": true,
  "last_12_months_spending": 0,
  "last_project": 0,
  "last_project_time": "1970-01-01T00:00:00Z",
  "last_proofreaders": [
    {
      "full_name": "string",
      "id": 0,
      "language": "string",
      "vendor_link": "string"
    }
  ],
  "notes": [
    "string"
  ],
  "nps": {
    "average": {
      "completed_surveys_count": 0,
      "score": 0
    },
    "last": {
      "completion_date": "1970-01-01T00:00:00Z",
      "score": 0
    }
  },
  "user_rank_in_project_count": 0,
  "user_rank_in_spending": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_creation_date|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|client_project_count|number|false|none|total project count that this client sent|
|corporate|string|false|none|corporate name|
|corporate_id|number|false|none|corporate id|
|corporate_user_count|number|false|none|total user count in a corporation|
|frequent_file_extension|string|false|none|the file extension for the files that usually this client sent|
|frequent_language_pairs|[string]|false|none|frequent language pairs|
|full_name|string|false|none|full name of the client|
|growth|boolean|false|none|The answer for the question "Is there any growth for this corporate's spending". The values can be true, false or null if the corporate is oour client for less than 6 months|
|is_complex|boolean|false|none|the answer for the question "Is this client usually sent complex projects?"|
|last_12_months_spending|number(float)|false|none|corporate's spending in twelve months|
|last_project|number|false|none|the quote number for the last project of this client|
|last_project_time|string(date-time)|false|none|the creation date of the last project that is sent by this client|
|last_proofreaders|[[ProofreaderWithLanguage](#schemaproofreaderwithlanguage)]|false|none|list of prooofreaders for the target languages of last project|
|notes|[string]|false|none|notes that is submited for this client and/or with her projects|
|nps|object|false|none|net promoter score info for this client|
|user_rank_in_project_count|number|false|none|rank of the user in all corporate users for project count. If the user is the most active user foor sending projects her rank is 1|
|user_rank_in_spending|number|false|none|rank of the user in all corporate users for total spending. If the user is the most active user for spending her rank is 1|

<h2 id="tocS_ClientProjectStat">ClientProjectStat</h2>
<!-- backwards compatibility -->
<a id="schemaclientprojectstat"></a>
<a id="schema_ClientProjectStat"></a>
<a id="tocSclientprojectstat"></a>
<a id="tocsclientprojectstat"></a>

```json
{
  "languages": [
    "string"
  ],
  "month": "string",
  "number_of_projects": 0,
  "total_spending": 0,
  "week": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languages|[string]|false|none|none|
|month|string|false|none|none|
|number_of_projects|integer(int64)|false|none|none|
|total_spending|number(float)|false|none|none|
|week|string|false|none|none|

<h2 id="tocS_ClientProjectStats">ClientProjectStats</h2>
<!-- backwards compatibility -->
<a id="schemaclientprojectstats"></a>
<a id="schema_ClientProjectStats"></a>
<a id="tocSclientprojectstats"></a>
<a id="tocsclientprojectstats"></a>

```json
{
  "stats": [
    {
      "languages": [
        "string"
      ],
      "month": "string",
      "number_of_projects": 0,
      "total_spending": 0,
      "week": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stats|[[ClientProjectStat](#schemaclientprojectstat)]|false|none|none|

<h2 id="tocS_ClientStats">ClientStats</h2>
<!-- backwards compatibility -->
<a id="schemaclientstats"></a>
<a id="schema_ClientStats"></a>
<a id="tocSclientstats"></a>
<a id="tocsclientstats"></a>

```json
{
  "document_count": 0,
  "nps": 0,
  "started_project_count": 0,
  "total_discounted": {
    "amount": 0,
    "currency": "usd"
  },
  "total_project_count": 0,
  "total_spending": 0,
  "translator_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_count|integer(int64)|false|none|none|
|nps|number(float)|false|none|none|
|started_project_count|integer(int64)|false|none|none|
|total_discounted|[Monetary](#schemamonetary)|false|none|none|
|total_project_count|integer(int64)|false|none|none|
|total_spending|number(float)|false|none|none|
|translator_count|integer(int64)|false|none|none|

<h2 id="tocS_ClientStringStats">ClientStringStats</h2>
<!-- backwards compatibility -->
<a id="schemaclientstringstats"></a>
<a id="schema_ClientStringStats"></a>
<a id="tocSclientstringstats"></a>
<a id="tocsclientstringstats"></a>

```json
{
  "language_counts": [
    {
      "project_string_count": 0,
      "source_language": "string",
      "tm_string_count": 0
    }
  ],
  "total_project_strings_count": 0,
  "total_tm_strings_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language_counts|[[LanguageStringStat](#schemalanguagestringstat)]|false|none|none|
|total_project_strings_count|integer(int64)|false|none|none|
|total_tm_strings_count|integer(int64)|false|none|none|

<h2 id="tocS_ClientStringTranslation">ClientStringTranslation</h2>
<!-- backwards compatibility -->
<a id="schemaclientstringtranslation"></a>
<a id="schema_ClientStringTranslation"></a>
<a id="tocSclientstringtranslation"></a>
<a id="tocsclientstringtranslation"></a>

```json
{
  "content": "string",
  "last_changed": "1970-01-01T00:00:00Z",
  "resource": "string",
  "resource_id": "string",
  "state": "Translated",
  "target_language": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|last_changed|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|resource|string|false|none|none|
|resource_id|string|false|none|none|
|state|string|false|none|none|
|target_language|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|Translated|
|state|Approved|

<h2 id="tocS_ClientStringWithTranslations">ClientStringWithTranslations</h2>
<!-- backwards compatibility -->
<a id="schemaclientstringwithtranslations"></a>
<a id="schema_ClientStringWithTranslations"></a>
<a id="tocSclientstringwithtranslations"></a>
<a id="tocsclientstringwithtranslations"></a>

```json
{
  "content": "string",
  "language": "string",
  "last_changed": "1970-01-01T00:00:00Z",
  "translations": [
    {
      "content": "string",
      "last_changed": "1970-01-01T00:00:00Z",
      "resource": "string",
      "resource_id": "string",
      "state": "Translated",
      "target_language": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|language|string|false|none|none|
|last_changed|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|translations|[[ClientStringTranslation](#schemaclientstringtranslation)]|false|none|none|

<h2 id="tocS_ClientStrings">ClientStrings</h2>
<!-- backwards compatibility -->
<a id="schemaclientstrings"></a>
<a id="schema_ClientStrings"></a>
<a id="tocSclientstrings"></a>
<a id="tocsclientstrings"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "strings": [
    {
      "content": "string",
      "language": "string",
      "last_changed": "1970-01-01T00:00:00Z",
      "translations": [
        {
          "content": "string",
          "last_changed": "1970-01-01T00:00:00Z",
          "resource": "string",
          "resource_id": "string",
          "state": "Translated",
          "target_language": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|strings|[[ClientStringWithTranslations](#schemaclientstringwithtranslations)]|false|none|none|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "comment": "string",
  "commented_at": 0,
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "activity": {
      "href": "string"
    },
    "project": {
      "href": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|true|none|Comment text.|
|commented_at|integer(int64)|false|none|Unix epoch time|
|id|integer(int64)|false|none|none|
|links|[CommentLinks](#schemacommentlinks)|false|none|none|

<h2 id="tocS_CommentLinks">CommentLinks</h2>
<!-- backwards compatibility -->
<a id="schemacommentlinks"></a>
<a id="schema_CommentLinks"></a>
<a id="tocScommentlinks"></a>
<a id="tocscommentlinks"></a>

```json
{
  "self": {
    "href": "string"
  },
  "activity": {
    "href": "string"
  },
  "project": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|
|activity|[Href](#schemahref)|false|none|Link to the activity to which this comment was submitted.|
|project|[Href](#schemahref)|false|none|none|

<h2 id="tocS_CommentList">CommentList</h2>
<!-- backwards compatibility -->
<a id="schemacommentlist"></a>
<a id="schema_CommentList"></a>
<a id="tocScommentlist"></a>
<a id="tocscommentlist"></a>

```json
{
  "activities": [
    {
      "comment": "string",
      "commented_at": 0,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "activity": {
          "href": "string"
        },
        "project": {
          "href": "string"
        }
      }
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[Comment](#schemacomment)]|false|none|none|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|

<h2 id="tocS_Commission">Commission</h2>
<!-- backwards compatibility -->
<a id="schemacommission"></a>
<a id="schema_Commission"></a>
<a id="tocScommission"></a>
<a id="tocscommission"></a>

```json
{
  "amount": {
    "amount": 0,
    "currency": "usd"
  },
  "date": "1970-01-01T00:00:00Z",
  "project": {
    "average_scores": {
      "property1": 0,
      "property2": 0
    },
    "budget_code": "string",
    "callback_url": "string",
    "can_pam_manage": true,
    "client": {
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "birthday": "1970-01-01",
      "can_work_manual_files": true,
      "city": "string",
      "client": {
        "corporate": {
          "email": "string",
          "id": 0,
          "logo": "string",
          "name": "string",
          "phone_number": "string"
        },
        "nps": 0,
        "subjects": {
          "property1": 0,
          "property2": 0
        }
      },
      "corporate_id": 0,
      "country": "string",
      "created_at": 0,
      "do_not_contact": true,
      "email": "string",
      "first_name": "string",
      "has_pwd": true,
      "id": 0,
      "is_client": true,
      "is_developer": true,
      "is_proofreader": true,
      "is_prospect": true,
      "is_sales_person": true,
      "is_vendor": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "last_name": "string",
      "last_seen_online_at": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "login_as": {
          "href": "string"
        },
        "projects": {
          "href": "string"
        },
        "responsivity": {
          "href": "string"
        },
        "stats": {
          "href": "string"
        }
      },
      "locale": "string",
      "mailing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string"
      },
      "name": "string",
      "native_language": "string",
      "nps": 0,
      "phone_number": "string",
      "profile_picture_path": "string",
      "social_media": {
        "facebook_url": "string",
        "linkedIn_url": "string",
        "twitter_url": "string"
      },
      "state": "string",
      "status": "string",
      "street": "string",
      "timezone": "string",
      "tms_user_name": "string",
      "user_groups": [
        {
          "corporate_id": 0,
          "id": 0,
          "name": "string",
          "permissions": [
            "string"
          ]
        }
      ],
      "vendor": {
        "can_work_manual_files": true,
        "email_open_rate": 0,
        "is_frozen": true,
        "is_proofreader": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "native_language": "string",
        "pam_tqs": 0,
        "paypal_email": "string",
        "profile_survey": {
          "current_services": "string",
          "daily_proofreading_capacity": "string",
          "daily_translation_capacity": "string",
          "dtp_software": "string",
          "experience": "string",
          "is_certified_translator": "string",
          "is_sworn_translator": "string",
          "memoq": "string",
          "memsource": "string",
          "omegat": "string",
          "proofreader_experience": "string",
          "provides_creative_writing_service": "string",
          "provides_postedit_service": "string",
          "reference": "string",
          "sdl_trados": "string",
          "skype_id": "string",
          "smartcat": "string",
          "smartling": "string",
          "software": "string",
          "specialization": "string",
          "subtitle_edit": "string",
          "subtitle_workshop": "string",
          "translator_association": "string",
          "transsuite_2000": "string",
          "vendor_profile_lsp": "string",
          "wordbee": "string",
          "wordfast": "string",
          "work_type": "string",
          "work_with": "string",
          "working_as": "string",
          "working_timezone": "string",
          "xbench": "string",
          "xtm": "string"
        },
        "require_1099": true,
        "tags": [
          "string"
        ],
        "tms_user_name": "string",
        "vendor_type": "string"
      },
      "zip_code": "string"
    },
    "cm_id": 0,
    "completed_on": "1970-01-01T00:00:00Z",
    "continuous_project_type": "string",
    "created_at": 0,
    "custom": {},
    "delivery_at": 0,
    "errors": [
      {
        "code": "string",
        "help": "string",
        "http_code": 0,
        "message": "string"
      }
    ],
    "id": 0,
    "is_api_project": true,
    "is_certified": true,
    "is_continuous": true,
    "is_manual": true,
    "links": {
      "self": {
        "href": "string"
      },
      "documents": {
        "href": "string"
      },
      "glossaries": {
        "href": "string"
      },
      "payment": {
        "href": "string"
      },
      "quote-pdf": {
        "href": "string"
      },
      "styleguides": {
        "href": "string"
      }
    },
    "pairs": [
      {
        "currency": "usd",
        "is_proofreader": true,
        "proofreader": {
          "billing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string",
            "name": ""
          },
          "birthday": "1970-01-01",
          "can_work_manual_files": true,
          "city": "string",
          "client": {
            "corporate": {
              "email": "string",
              "id": 0,
              "logo": "string",
              "name": "string",
              "phone_number": "string"
            },
            "nps": 0,
            "subjects": {
              "property1": 0,
              "property2": 0
            }
          },
          "corporate_id": 0,
          "country": "string",
          "created_at": 0,
          "do_not_contact": true,
          "email": "string",
          "first_name": "string",
          "has_pwd": true,
          "id": 0,
          "is_client": true,
          "is_developer": true,
          "is_proofreader": true,
          "is_prospect": true,
          "is_sales_person": true,
          "is_vendor": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "last_name": "string",
          "last_seen_online_at": 0,
          "links": {
            "self": {
              "href": "string"
            },
            "login_as": {
              "href": "string"
            },
            "projects": {
              "href": "string"
            },
            "responsivity": {
              "href": "string"
            },
            "stats": {
              "href": "string"
            }
          },
          "locale": "string",
          "mailing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string"
          },
          "name": "string",
          "native_language": "string",
          "nps": 0,
          "phone_number": "string",
          "profile_picture_path": "string",
          "social_media": {
            "facebook_url": "string",
            "linkedIn_url": "string",
            "twitter_url": "string"
          },
          "state": "string",
          "status": "string",
          "street": "string",
          "timezone": "string",
          "tms_user_name": "string",
          "user_groups": [
            {
              "corporate_id": 0,
              "id": 0,
              "name": "string",
              "permissions": [
                "string"
              ]
            }
          ],
          "vendor": {
            "can_work_manual_files": true,
            "email_open_rate": 0,
            "is_frozen": true,
            "is_proofreader": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "native_language": "string",
            "pam_tqs": 0,
            "paypal_email": "string",
            "profile_survey": {
              "current_services": "string",
              "daily_proofreading_capacity": "string",
              "daily_translation_capacity": "string",
              "dtp_software": "string",
              "experience": "string",
              "is_certified_translator": "string",
              "is_sworn_translator": "string",
              "memoq": "string",
              "memsource": "string",
              "omegat": "string",
              "proofreader_experience": "string",
              "provides_creative_writing_service": "string",
              "provides_postedit_service": "string",
              "reference": "string",
              "sdl_trados": "string",
              "skype_id": "string",
              "smartcat": "string",
              "smartling": "string",
              "software": "string",
              "specialization": "string",
              "subtitle_edit": "string",
              "subtitle_workshop": "string",
              "translator_association": "string",
              "transsuite_2000": "string",
              "vendor_profile_lsp": "string",
              "wordbee": "string",
              "wordfast": "string",
              "work_type": "string",
              "work_with": "string",
              "working_as": "string",
              "working_timezone": "string",
              "xbench": "string",
              "xtm": "string"
            },
            "require_1099": true,
            "tags": [
              "string"
            ],
            "tms_user_name": "string",
            "vendor_type": "string"
          },
          "zip_code": "string"
        },
        "proofreading_rate": 0,
        "source_language": "string",
        "target_language": "string",
        "translation_rate": 0
      }
    ],
    "pivoted_projects": [
      0
    ],
    "price": {
      "amount": 0,
      "base_amount": 0,
      "base_currency": "usd",
      "currency": "usd",
      "usd_amount": 0
    },
    "price_without_discount": {
      "amount": 0,
      "base_amount": 0,
      "base_currency": "usd",
      "currency": "usd",
      "usd_amount": 0
    },
    "role": "translator",
    "should_send_client_survey": true,
    "source": "api",
    "source_language": "string",
    "status": "pending",
    "subjects": [
      "string"
    ],
    "target_languages": [
      "string"
    ],
    "tms_name": "string",
    "valid_until": 0,
    "vendor_word_count": 0,
    "word_count": 0,
    "word_count_analysis": {
      "base": 0,
      "duplicate": 0,
      "exclusion": 0,
      "final": 0,
      "tm": 0
    }
  },
  "status": "completed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Monetary](#schemamonetary)|false|none|none|
|date|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|project|[Project](#schemaproject)|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|completed|
|status|unclaimed|
|status|failed|
|status|sent|
|status|waiting|
|status|waiting_invoice|

<h2 id="tocS_CommissionList">CommissionList</h2>
<!-- backwards compatibility -->
<a id="schemacommissionlist"></a>
<a id="schema_CommissionList"></a>
<a id="tocScommissionlist"></a>
<a id="tocscommissionlist"></a>

```json
{
  "commissions": [
    {
      "amount": {
        "amount": 0,
        "currency": "usd"
      },
      "date": "1970-01-01T00:00:00Z",
      "project": {
        "average_scores": {
          "property1": 0,
          "property2": 0
        },
        "budget_code": "string",
        "callback_url": "string",
        "can_pam_manage": true,
        "client": {
          "billing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string",
            "name": ""
          },
          "birthday": "1970-01-01",
          "can_work_manual_files": true,
          "city": "string",
          "client": {
            "corporate": {
              "email": "string",
              "id": 0,
              "logo": "string",
              "name": "string",
              "phone_number": "string"
            },
            "nps": 0,
            "subjects": {
              "property1": 0,
              "property2": 0
            }
          },
          "corporate_id": 0,
          "country": "string",
          "created_at": 0,
          "do_not_contact": true,
          "email": "string",
          "first_name": "string",
          "has_pwd": true,
          "id": 0,
          "is_client": true,
          "is_developer": true,
          "is_proofreader": true,
          "is_prospect": true,
          "is_sales_person": true,
          "is_vendor": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "last_name": "string",
          "last_seen_online_at": 0,
          "links": {
            "self": {
              "href": "string"
            },
            "login_as": {
              "href": "string"
            },
            "projects": {
              "href": "string"
            },
            "responsivity": {
              "href": "string"
            },
            "stats": {
              "href": "string"
            }
          },
          "locale": "string",
          "mailing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string"
          },
          "name": "string",
          "native_language": "string",
          "nps": 0,
          "phone_number": "string",
          "profile_picture_path": "string",
          "social_media": {
            "facebook_url": "string",
            "linkedIn_url": "string",
            "twitter_url": "string"
          },
          "state": "string",
          "status": "string",
          "street": "string",
          "timezone": "string",
          "tms_user_name": "string",
          "user_groups": [
            {
              "corporate_id": 0,
              "id": 0,
              "name": "string",
              "permissions": [
                "string"
              ]
            }
          ],
          "vendor": {
            "can_work_manual_files": true,
            "email_open_rate": 0,
            "is_frozen": true,
            "is_proofreader": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "native_language": "string",
            "pam_tqs": 0,
            "paypal_email": "string",
            "profile_survey": {
              "current_services": "string",
              "daily_proofreading_capacity": "string",
              "daily_translation_capacity": "string",
              "dtp_software": "string",
              "experience": "string",
              "is_certified_translator": "string",
              "is_sworn_translator": "string",
              "memoq": "string",
              "memsource": "string",
              "omegat": "string",
              "proofreader_experience": "string",
              "provides_creative_writing_service": "string",
              "provides_postedit_service": "string",
              "reference": "string",
              "sdl_trados": "string",
              "skype_id": "string",
              "smartcat": "string",
              "smartling": "string",
              "software": "string",
              "specialization": "string",
              "subtitle_edit": "string",
              "subtitle_workshop": "string",
              "translator_association": "string",
              "transsuite_2000": "string",
              "vendor_profile_lsp": "string",
              "wordbee": "string",
              "wordfast": "string",
              "work_type": "string",
              "work_with": "string",
              "working_as": "string",
              "working_timezone": "string",
              "xbench": "string",
              "xtm": "string"
            },
            "require_1099": true,
            "tags": [
              "string"
            ],
            "tms_user_name": "string",
            "vendor_type": "string"
          },
          "zip_code": "string"
        },
        "cm_id": 0,
        "completed_on": "1970-01-01T00:00:00Z",
        "continuous_project_type": "string",
        "created_at": 0,
        "custom": {},
        "delivery_at": 0,
        "errors": [
          {
            "code": "string",
            "help": "string",
            "http_code": 0,
            "message": "string"
          }
        ],
        "id": 0,
        "is_api_project": true,
        "is_certified": true,
        "is_continuous": true,
        "is_manual": true,
        "links": {
          "self": {
            "href": "string"
          },
          "documents": {
            "href": "string"
          },
          "glossaries": {
            "href": "string"
          },
          "payment": {
            "href": "string"
          },
          "quote-pdf": {
            "href": "string"
          },
          "styleguides": {
            "href": "string"
          }
        },
        "pairs": [
          {
            "currency": "usd",
            "is_proofreader": true,
            "proofreader": {
              "billing": {
                "city": "string",
                "country": "string",
                "phone": "string",
                "state": "string",
                "street": "string",
                "zip": "string",
                "name": ""
              },
              "birthday": "1970-01-01",
              "can_work_manual_files": true,
              "city": "string",
              "client": {
                "corporate": {
                  "email": "string",
                  "id": 0,
                  "logo": "string",
                  "name": "string",
                  "phone_number": "string"
                },
                "nps": 0,
                "subjects": {
                  "property1": 0,
                  "property2": 0
                }
              },
              "corporate_id": 0,
              "country": "string",
              "created_at": 0,
              "do_not_contact": true,
              "email": "string",
              "first_name": "string",
              "has_pwd": true,
              "id": 0,
              "is_client": true,
              "is_developer": true,
              "is_proofreader": true,
              "is_prospect": true,
              "is_sales_person": true,
              "is_vendor": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "last_name": "string",
              "last_seen_online_at": 0,
              "links": {
                "self": {
                  "href": "string"
                },
                "login_as": {
                  "href": "string"
                },
                "projects": {
                  "href": "string"
                },
                "responsivity": {
                  "href": "string"
                },
                "stats": {
                  "href": "string"
                }
              },
              "locale": "string",
              "mailing": {
                "city": "string",
                "country": "string",
                "phone": "string",
                "state": "string",
                "street": "string",
                "zip": "string"
              },
              "name": "string",
              "native_language": "string",
              "nps": 0,
              "phone_number": "string",
              "profile_picture_path": "string",
              "social_media": {
                "facebook_url": "string",
                "linkedIn_url": "string",
                "twitter_url": "string"
              },
              "state": "string",
              "status": "string",
              "street": "string",
              "timezone": "string",
              "tms_user_name": "string",
              "user_groups": [
                {
                  "corporate_id": 0,
                  "id": 0,
                  "name": "string",
                  "permissions": [
                    "string"
                  ]
                }
              ],
              "vendor": {
                "can_work_manual_files": true,
                "email_open_rate": 0,
                "is_frozen": true,
                "is_proofreader": true,
                "language_pairs": [
                  {
                    "source_language": "string",
                    "target_language": "string"
                  }
                ],
                "native_language": "string",
                "pam_tqs": 0,
                "paypal_email": "string",
                "profile_survey": {
                  "current_services": "string",
                  "daily_proofreading_capacity": "string",
                  "daily_translation_capacity": "string",
                  "dtp_software": "string",
                  "experience": "string",
                  "is_certified_translator": "string",
                  "is_sworn_translator": "string",
                  "memoq": "string",
                  "memsource": "string",
                  "omegat": "string",
                  "proofreader_experience": "string",
                  "provides_creative_writing_service": "string",
                  "provides_postedit_service": "string",
                  "reference": "string",
                  "sdl_trados": "string",
                  "skype_id": "string",
                  "smartcat": "string",
                  "smartling": "string",
                  "software": "string",
                  "specialization": "string",
                  "subtitle_edit": "string",
                  "subtitle_workshop": "string",
                  "translator_association": "string",
                  "transsuite_2000": "string",
                  "vendor_profile_lsp": "string",
                  "wordbee": "string",
                  "wordfast": "string",
                  "work_type": "string",
                  "work_with": "string",
                  "working_as": "string",
                  "working_timezone": "string",
                  "xbench": "string",
                  "xtm": "string"
                },
                "require_1099": true,
                "tags": [
                  "string"
                ],
                "tms_user_name": "string",
                "vendor_type": "string"
              },
              "zip_code": "string"
            },
            "proofreading_rate": 0,
            "source_language": "string",
            "target_language": "string",
            "translation_rate": 0
          }
        ],
        "pivoted_projects": [
          0
        ],
        "price": {
          "amount": 0,
          "base_amount": 0,
          "base_currency": "usd",
          "currency": "usd",
          "usd_amount": 0
        },
        "price_without_discount": {
          "amount": 0,
          "base_amount": 0,
          "base_currency": "usd",
          "currency": "usd",
          "usd_amount": 0
        },
        "role": "translator",
        "should_send_client_survey": true,
        "source": "api",
        "source_language": "string",
        "status": "pending",
        "subjects": [
          "string"
        ],
        "target_languages": [
          "string"
        ],
        "tms_name": "string",
        "valid_until": 0,
        "vendor_word_count": 0,
        "word_count": 0,
        "word_count_analysis": {
          "base": 0,
          "duplicate": 0,
          "exclusion": 0,
          "final": 0,
          "tm": 0
        }
      },
      "status": "completed"
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commissions|[[Commission](#schemacommission)]|false|none|none|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|

<h2 id="tocS_CommissionStats">CommissionStats</h2>
<!-- backwards compatibility -->
<a id="schemacommissionstats"></a>
<a id="schema_CommissionStats"></a>
<a id="tocScommissionstats"></a>
<a id="tocscommissionstats"></a>

```json
{
  "balance": {
    "amount": 0,
    "currency": "usd"
  },
  "paid": {
    "amount": 0,
    "currency": "usd"
  },
  "quote_total": {
    "amount": 0,
    "currency": "usd"
  },
  "total": {
    "amount": 0,
    "currency": "usd"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|[Monetary](#schemamonetary)|false|none|none|
|paid|[Monetary](#schemamonetary)|false|none|none|
|quote_total|[Monetary](#schemamonetary)|false|none|none|
|total|[Monetary](#schemamonetary)|false|none|none|

<h2 id="tocS_ContinuousProject">ContinuousProject</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousproject"></a>
<a id="schema_ContinuousProject"></a>
<a id="tocScontinuousproject"></a>
<a id="tocscontinuousproject"></a>

```json
{
  "analytics_enabled": true,
  "auto_start_postedit": true,
  "created_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "is_enabled": true,
  "last_activity_at": "1970-01-01T00:00:00Z",
  "links": {
    "self": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    }
  },
  "mt_enabled": true,
  "mt_engine": "string",
  "name": "string",
  "postedit_enabled": true,
  "source_language": "string",
  "status": "string",
  "subscription": {
    "downgrade": [
      "string"
    ],
    "payment_method": 0,
    "period_end": "1970-01-01T00:00:00Z",
    "plan_id": "string",
    "plan_name": "string",
    "price": "string",
    "products": [
      null
    ],
    "schedule_name": "string",
    "schedule_start": "1970-01-01T00:00:00Z",
    "subscription_id": "string",
    "upgrade": [
      "string"
    ],
    "withTrial": null
  },
  "target_languages": [
    "string"
  ],
  "type": "string",
  "word_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analytics_enabled|boolean|false|none|Should we collect analytics data from Active for this continuous project?|
|auto_start_postedit|boolean|false|none|Immediately start post-editing project for translation requests that are applied MT.|
|created_at|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|id|integer(int64)|false|none|none|
|is_enabled|boolean|false|none|none|
|last_activity_at|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|links|[ContinuousProjectLinks](#schemacontinuousprojectlinks)|false|none|none|
|mt_enabled|boolean|false|none|Immediately apply MT on translation requests if they are missing from TM.|
|mt_engine|string|false|none|One of "MOTAWORD", "GOOGLE", "AMAZON", "MS". Default is "MOTAWORD".|
|name|string|false|none|none|
|postedit_enabled|boolean|false|none|Get an instant quote for translation requests that are applied MT.|
|source_language|string|false|none|none|
|status|string|false|none|One of "a => ACTIVE", "i => INACTIVE", "d => DELETED", "c => SCHEDULED CANCELLATION", "p => SCHEDULED CHANGE"|
|subscription|[Subscription](#schemasubscription)|false|none|none|
|target_languages|[string]|false|none|none|
|type|string|false|none|Continuous project type. We currently have only 2 types, NULL and "active".|
|word_count|integer(int64)|false|none|none|

<h2 id="tocS_ContinuousProjectCache">ContinuousProjectCache</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectcache"></a>
<a id="schema_ContinuousProjectCache"></a>
<a id="tocScontinuousprojectcache"></a>
<a id="tocscontinuousprojectcache"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": {
    "property1": {
      "mt": {
        "property1": "string",
        "property2": "string"
      },
      "nonparsed": {
        "property1": "string",
        "property2": "string"
      },
      "tm": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "mt": {
        "property1": "string",
        "property2": "string"
      },
      "nonparsed": {
        "property1": "string",
        "property2": "string"
      },
      "tm": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

Continuous project cache for translations per target language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|translations|object|false|none|none|

<h2 id="tocS_ContinuousProjectCachedStrings">ContinuousProjectCachedStrings</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectcachedstrings"></a>
<a id="schema_ContinuousProjectCachedStrings"></a>
<a id="tocScontinuousprojectcachedstrings"></a>
<a id="tocscontinuousprojectcachedstrings"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

source > target map of strings for translations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_ContinuousProjectCosts">ContinuousProjectCosts</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectcosts"></a>
<a id="schema_ContinuousProjectCosts"></a>
<a id="tocScontinuousprojectcosts"></a>
<a id="tocscontinuousprojectcosts"></a>

```json
{
  "mt": {
    "amount": 0,
    "currency": "usd"
  },
  "post_edit": {
    "amount": 0,
    "currency": "usd"
  },
  "saved": {
    "amount": 0,
    "currency": "usd"
  },
  "total": {
    "amount": 0,
    "currency": "usd"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mt|[Monetary](#schemamonetary)|false|none|none|
|post_edit|[Monetary](#schemamonetary)|false|none|none|
|saved|[Monetary](#schemamonetary)|false|none|none|
|total|[Monetary](#schemamonetary)|false|none|none|

<h2 id="tocS_ContinuousProjectDocument">ContinuousProjectDocument</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectdocument"></a>
<a id="schema_ContinuousProjectDocument"></a>
<a id="tocScontinuousprojectdocument"></a>
<a id="tocscontinuousprojectdocument"></a>

```json
{
  "billed_word_count": 0,
  "id": "string",
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "post_edit_enabled": true,
  "project_id": "string",
  "source_language": "string",
  "target_languages": [
    "string"
  ],
  "word_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billed_word_count|integer(int64)|false|none|none|
|id|string|false|none|none|
|links|[DocumentLinks](#schemadocumentlinks)|false|none|none|
|name|string|false|none|none|
|post_edit_enabled|boolean|false|none|none|
|project_id|string|false|none|none|
|source_language|string|false|none|none|
|target_languages|[string]|false|none|none|
|word_count|integer(int64)|false|none|none|

<h2 id="tocS_ContinuousProjectDocumentList">ContinuousProjectDocumentList</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectdocumentlist"></a>
<a id="schema_ContinuousProjectDocumentList"></a>
<a id="tocScontinuousprojectdocumentlist"></a>
<a id="tocscontinuousprojectdocumentlist"></a>

```json
{
  "documents": [
    {
      "billed_word_count": 0,
      "id": "string",
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "name": "string",
      "post_edit_enabled": true,
      "project_id": "string",
      "source_language": "string",
      "target_languages": [
        "string"
      ],
      "word_count": 0
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[[ContinuousProjectDocument](#schemacontinuousprojectdocument)]|false|none|none|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|

<h2 id="tocS_ContinuousProjectDocumentProgressBody">ContinuousProjectDocumentProgressBody</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectdocumentprogressbody"></a>
<a id="schema_ContinuousProjectDocumentProgressBody"></a>
<a id="tocScontinuousprojectdocumentprogressbody"></a>
<a id="tocscontinuousprojectdocumentprogressbody"></a>

```json
{
  "documentName": "string",
  "filterByLanguage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentName|string|false|none|none|
|filterByLanguage|string|false|none|none|

<h2 id="tocS_ContinuousProjectDocumentStringsBody">ContinuousProjectDocumentStringsBody</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectdocumentstringsbody"></a>
<a id="schema_ContinuousProjectDocumentStringsBody"></a>
<a id="tocScontinuousprojectdocumentstringsbody"></a>
<a id="tocscontinuousprojectdocumentstringsbody"></a>

```json
{
  "documentName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentName|string|false|none|none|

<h2 id="tocS_ContinuousProjectInvoices">ContinuousProjectInvoices</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectinvoices"></a>
<a id="schema_ContinuousProjectInvoices"></a>
<a id="tocScontinuousprojectinvoices"></a>
<a id="tocscontinuousprojectinvoices"></a>

```json
{
  "invoices": [
    {
      "amount": 0,
      "base_amount": 0,
      "base_currency": "usd",
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "currency": "usd",
      "id": 0,
      "invoice_no": 0,
      "invoiced_at": "1970-01-01T00:00:00Z",
      "links": {
        "self": {
          "href": "string"
        },
        "corporate": {
          "href": "string"
        },
        "html": {
          "href": "string"
        },
        "json": {
          "href": "string"
        },
        "pdf": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "view": {
          "href": "string"
        }
      },
      "status": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoices|[[Invoice](#schemainvoice)]|false|none|none|

<h2 id="tocS_ContinuousProjectLanguage">ContinuousProjectLanguage</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectlanguage"></a>
<a id="schema_ContinuousProjectLanguage"></a>
<a id="tocScontinuousprojectlanguage"></a>
<a id="tocscontinuousprojectlanguage"></a>

```json
{
  "code": "string",
  "is_enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|is_enabled|boolean|false|none|none|

<h2 id="tocS_ContinuousProjectLanguageCache">ContinuousProjectLanguageCache</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectlanguagecache"></a>
<a id="schema_ContinuousProjectLanguageCache"></a>
<a id="tocScontinuousprojectlanguagecache"></a>
<a id="tocscontinuousprojectlanguagecache"></a>

```json
{
  "mt": {
    "property1": "string",
    "property2": "string"
  },
  "nonparsed": {
    "property1": "string",
    "property2": "string"
  },
  "tm": {
    "property1": "string",
    "property2": "string"
  }
}
```

TM, MT and Nonparsed cache list for translations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mt|[ContinuousProjectCachedStrings](#schemacontinuousprojectcachedstrings)|false|none|source > target map of strings for translations|
|nonparsed|[ContinuousProjectCachedStrings](#schemacontinuousprojectcachedstrings)|false|none|source > target map of strings for translations|
|tm|[ContinuousProjectCachedStrings](#schemacontinuousprojectcachedstrings)|false|none|source > target map of strings for translations|

<h2 id="tocS_ContinuousProjectLinks">ContinuousProjectLinks</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectlinks"></a>
<a id="schema_ContinuousProjectLinks"></a>
<a id="tocScontinuousprojectlinks"></a>
<a id="tocscontinuousprojectlinks"></a>

```json
{
  "self": {
    "href": "string"
  },
  "editors": {
    "property1": {
      "href": "string"
    },
    "property2": {
      "href": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|
|editors|object|false|none|none|

<h2 id="tocS_ContinuousProjectProgress">ContinuousProjectProgress</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectprogress"></a>
<a id="schema_ContinuousProjectProgress"></a>
<a id="tocScontinuousprojectprogress"></a>
<a id="tocscontinuousprojectprogress"></a>

```json
{
  "costs": {
    "mt": {
      "amount": 0,
      "currency": "usd"
    },
    "post_edit": {
      "amount": 0,
      "currency": "usd"
    },
    "saved": {
      "amount": 0,
      "currency": "usd"
    },
    "total": {
      "amount": 0,
      "currency": "usd"
    }
  },
  "progress": {
    "languages": {
      "property1": {
        "proofreading": 0,
        "total": 0,
        "translation": 0,
        "word_count": 0
      },
      "property2": {
        "proofreading": 0,
        "total": 0,
        "translation": 0,
        "word_count": 0
      }
    },
    "links": {
      "self": {
        "href": "string"
      },
      "project": {
        "href": "string"
      }
    },
    "project_status": "pending",
    "proofreading": 0,
    "total": 0,
    "translation": 0,
    "word_count": 0
  },
  "word_counts": {
    "mt": 0,
    "post_edit": 0,
    "total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costs|[ContinuousProjectCosts](#schemacontinuousprojectcosts)|false|none|none|
|progress|[Progress](#schemaprogress)|false|none|none|
|word_counts|[ContinuousProjectWordCounts](#schemacontinuousprojectwordcounts)|false|none|none|

<h2 id="tocS_ContinuousProjectUpdateContent">ContinuousProjectUpdateContent</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectupdatecontent"></a>
<a id="schema_ContinuousProjectUpdateContent"></a>
<a id="tocScontinuousprojectupdatecontent"></a>
<a id="tocscontinuousprojectupdatecontent"></a>

```json
{
  "analytics_enabled": true,
  "auto_start_postedit": true,
  "is_enabled": true,
  "languages": [
    {
      "code": "string",
      "is_enabled": true
    }
  ],
  "mt_enabled": true,
  "name": "string",
  "postedit_enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analytics_enabled|boolean|false|none|none|
|auto_start_postedit|boolean|false|none|none|
|is_enabled|boolean|false|none|none|
|languages|[[ContinuousProjectLanguage](#schemacontinuousprojectlanguage)]|false|none|none|
|mt_enabled|boolean|false|none|none|
|name|string|false|none|none|
|postedit_enabled|boolean|false|none|none|

<h2 id="tocS_ContinuousProjectWordCounts">ContinuousProjectWordCounts</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectwordcounts"></a>
<a id="schema_ContinuousProjectWordCounts"></a>
<a id="tocScontinuousprojectwordcounts"></a>
<a id="tocscontinuousprojectwordcounts"></a>

```json
{
  "mt": 0,
  "post_edit": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mt|integer(int64)|false|none|none|
|post_edit|integer(int64)|false|none|none|
|total|integer(int64)|false|none|none|

<h2 id="tocS_ContinuousProjectsList">ContinuousProjectsList</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousprojectslist"></a>
<a id="schema_ContinuousProjectsList"></a>
<a id="tocScontinuousprojectslist"></a>
<a id="tocscontinuousprojectslist"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "analytics_enabled": true,
      "auto_start_postedit": true,
      "created_at": "1970-01-01T00:00:00Z",
      "id": 0,
      "is_enabled": true,
      "last_activity_at": "1970-01-01T00:00:00Z",
      "links": {
        "self": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        }
      },
      "mt_enabled": true,
      "mt_engine": "string",
      "name": "string",
      "postedit_enabled": true,
      "source_language": "string",
      "status": "string",
      "subscription": {
        "downgrade": [
          "string"
        ],
        "payment_method": 0,
        "period_end": "1970-01-01T00:00:00Z",
        "plan_id": "string",
        "plan_name": "string",
        "price": "string",
        "products": [
          null
        ],
        "schedule_name": "string",
        "schedule_start": "1970-01-01T00:00:00Z",
        "subscription_id": "string",
        "upgrade": [
          "string"
        ],
        "withTrial": null
      },
      "target_languages": [
        "string"
      ],
      "type": "string",
      "word_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|projects|[[ContinuousProject](#schemacontinuousproject)]|false|none|none|

<h2 id="tocS_CorporateAccount">CorporateAccount</h2>
<!-- backwards compatibility -->
<a id="schemacorporateaccount"></a>
<a id="schema_CorporateAccount"></a>
<a id="tocScorporateaccount"></a>
<a id="tocscorporateaccount"></a>

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "domain": "string",
  "email": "string",
  "id": 0,
  "logo": "string",
  "name": "string",
  "web_site": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing|[BillingAddress](#schemabillingaddress)|false|none|none|
|domain|string|false|none|none|
|email|string|false|none|none|
|id|integer(int64)|false|none|none|
|logo|string|false|none|none|
|name|string|false|none|none|
|web_site|string|false|none|**Deprecated.** Deprecated, use `domain`.|

<h2 id="tocS_CreditCard">CreditCard</h2>
<!-- backwards compatibility -->
<a id="schemacreditcard"></a>
<a id="schema_CreditCard"></a>
<a id="tocScreditcard"></a>
<a id="tocscreditcard"></a>

```json
{
  "bin": "string",
  "id": 0,
  "is_default": true,
  "payment_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bin|string|false|none|none|
|id|integer(int64)|false|none|none|
|is_default|boolean|false|none|none|
|payment_code|string|false|none|none|

<h2 id="tocS_DeliveryPredictionInLanguage">DeliveryPredictionInLanguage</h2>
<!-- backwards compatibility -->
<a id="schemadeliverypredictioninlanguage"></a>
<a id="schema_DeliveryPredictionInLanguage"></a>
<a id="tocSdeliverypredictioninlanguage"></a>
<a id="tocsdeliverypredictioninlanguage"></a>

```json
{
  "language": "string",
  "late": true,
  "probability": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|none|
|late|boolean|false|none|true for late, false for on-time delivery|
|probability|number(float)|false|none|none|

<h2 id="tocS_DeliveryPredictionPayload">DeliveryPredictionPayload</h2>
<!-- backwards compatibility -->
<a id="schemadeliverypredictionpayload"></a>
<a id="schema_DeliveryPredictionPayload"></a>
<a id="tocSdeliverypredictionpayload"></a>
<a id="tocsdeliverypredictionpayload"></a>

```json
{
  "projectId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|integer(int64)|false|none|none|

<h2 id="tocS_DeliveryPredictionResponse">DeliveryPredictionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeliverypredictionresponse"></a>
<a id="schema_DeliveryPredictionResponse"></a>
<a id="tocSdeliverypredictionresponse"></a>
<a id="tocsdeliverypredictionresponse"></a>

```json
{
  "result": [
    {
      "language": "string",
      "late": true,
      "probability": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[DeliveryPredictionInLanguage](#schemadeliverypredictioninlanguage)]|false|none|none|

<h2 id="tocS_DeprecatedStringTranslationContent">DeprecatedStringTranslationContent</h2>
<!-- backwards compatibility -->
<a id="schemadeprecatedstringtranslationcontent"></a>
<a id="schema_DeprecatedStringTranslationContent"></a>
<a id="tocSdeprecatedstringtranslationcontent"></a>
<a id="tocsdeprecatedstringtranslationcontent"></a>

```json
{
  "contents": [
    "string"
  ],
  "source_language": "string",
  "target_languages": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|[string]|false|none|none|
|source_language|string|false|none|none|
|target_languages|[string]|false|none|none|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "file_type": "string",
  "has_custom_package": true,
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "manual_files": [
    {
      "driveFileId": 0,
      "isProofread": true,
      "isTranslated": true,
      "language": "string",
      "proofreadingFileId": 0,
      "translationFileId": 0
    }
  ],
  "name": "string",
  "project_id": 0,
  "review_in_manual_editor": true,
  "scheme": {},
  "search_score": 0,
  "source_language": "string",
  "subject": "string",
  "target_languages": [
    "string"
  ],
  "uploaded_at": 0,
  "word_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_type|string|false|none|Extension of the file|
|has_custom_package|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|links|[DocumentLinks](#schemadocumentlinks)|false|none|none|
|manual_files|[[ManualFile](#schemamanualfile)]|false|none|none|
|name|string|false|none|none|
|project_id|integer(int64)|false|none|none|
|review_in_manual_editor|boolean|false|none|none|
|scheme|object|false|none|none|
|search_score|number(float)|false|none|none|
|source_language|string|false|none|none|
|subject|string|false|none|none|
|target_languages|[string]|false|none|none|
|uploaded_at|integer(int64)|false|none|Unix epoch time|
|word_count|integer(int64)|false|none|none|

<h2 id="tocS_DocumentInSearch">DocumentInSearch</h2>
<!-- backwards compatibility -->
<a id="schemadocumentinsearch"></a>
<a id="schema_DocumentInSearch"></a>
<a id="tocSdocumentinsearch"></a>
<a id="tocsdocumentinsearch"></a>

```json
{
  "file_type": "string",
  "has_custom_package": true,
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "manual_files": [
    {
      "driveFileId": 0,
      "isProofread": true,
      "isTranslated": true,
      "language": "string",
      "proofreadingFileId": 0,
      "translationFileId": 0
    }
  ],
  "name": "string",
  "project_id": 0,
  "review_in_manual_editor": true,
  "scheme": {},
  "search_score": 0,
  "source_language": "string",
  "subject": "string",
  "target_languages": [
    "string"
  ],
  "uploaded_at": 0,
  "word_count": 0,
  "search_result_reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_type|string|false|none|Extension of the file|
|has_custom_package|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|links|[DocumentLinks](#schemadocumentlinks)|false|none|none|
|manual_files|[[ManualFile](#schemamanualfile)]|false|none|none|
|name|string|false|none|none|
|project_id|integer(int64)|false|none|none|
|review_in_manual_editor|boolean|false|none|none|
|scheme|object|false|none|none|
|search_score|number(float)|false|none|none|
|source_language|string|false|none|none|
|subject|string|false|none|none|
|target_languages|[string]|false|none|none|
|uploaded_at|integer(int64)|false|none|Unix epoch time|
|word_count|integer(int64)|false|none|none|
|search_result_reason|string|false|none|none|

<h2 id="tocS_DocumentLinks">DocumentLinks</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlinks"></a>
<a id="schema_DocumentLinks"></a>
<a id="tocSdocumentlinks"></a>
<a id="tocsdocumentlinks"></a>

```json
{
  "self": {
    "href": "string"
  },
  "admins": {
    "property1": {
      "href": "string"
    },
    "property2": {
      "href": "string"
    }
  },
  "download": {
    "href": "string"
  },
  "editors": {
    "property1": {
      "href": "string"
    },
    "property2": {
      "href": "string"
    }
  },
  "preview-box": {
    "href": "string"
  },
  "preview-pdf": {
    "href": "string"
  },
  "preview-pdf-viewer": {
    "href": "string"
  },
  "progress": {
    "href": "string"
  },
  "project": {
    "href": "string"
  },
  "strings": {
    "href": "string"
  },
  "thumbnail": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|
|admins|object|false|none|none|
|download|[Href](#schemahref)|false|none|none|
|editors|object|false|none|none|
|preview-box|[Href](#schemahref)|false|none|Box.com URL to preview this document. This URL is temporary. You need to re-fetch the file to refresh the Box.com preview URL. Available for documents and style guides.|
|preview-pdf|[Href](#schemahref)|false|none|This is our fallback preview URL, providing a PDF file. Use this file to embed in your PDF viewer. Available for documents and style guides.|
|preview-pdf-viewer|[Href](#schemahref)|false|none|This is another version of preview-pdf, this time pointing to a preview viewer page on front application. This page requires authentication and comes with its own PDF viewer.|
|progress|[Href](#schemahref)|false|none|Progress endpoint URL for this file|
|project|[Href](#schemahref)|false|none|none|
|strings|[Href](#schemahref)|false|none|Strings endpoint URL for this file|
|thumbnail|[Href](#schemahref)|false|none|Thumbnail preview URL of the document. If doc has a page structure, this is probably only the first page.|

<h2 id="tocS_DocumentList">DocumentList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlist"></a>
<a id="schema_DocumentList"></a>
<a id="tocSdocumentlist"></a>
<a id="tocsdocumentlist"></a>

```json
{
  "documents": [
    {
      "file_type": "string",
      "has_custom_package": true,
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "manual_files": [
        {
          "driveFileId": 0,
          "isProofread": true,
          "isTranslated": true,
          "language": "string",
          "proofreadingFileId": 0,
          "translationFileId": 0
        }
      ],
      "name": "string",
      "project_id": 0,
      "review_in_manual_editor": true,
      "scheme": {},
      "search_score": 0,
      "source_language": "string",
      "subject": "string",
      "target_languages": [
        "string"
      ],
      "uploaded_at": 0,
      "word_count": 0
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[[Document](#schemadocument)]|false|none|none|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|

<h2 id="tocS_DocumentSubjects">DocumentSubjects</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsubjects"></a>
<a id="schema_DocumentSubjects"></a>
<a id="tocSdocumentsubjects"></a>
<a id="tocsdocumentsubjects"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_DocumentUpdates">DocumentUpdates</h2>
<!-- backwards compatibility -->
<a id="schemadocumentupdates"></a>
<a id="schema_DocumentUpdates"></a>
<a id="tocSdocumentupdates"></a>
<a id="tocsdocumentupdates"></a>

```json
{
  "documents[]": [
    "string"
  ],
  "schemes[]": "string",
  "source-links[]": [
    {
      "name": "string",
      "size": 0,
      "source": "dropbox",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents[]|[string(binary)]|false|none|You can add as many files as you want in documents[] parameter.|
|schemes[]|string|false|none|JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.|
|source-links[]|[[LinkedSourceDocument](#schemalinkedsourcedocument)]|false|none|When provided, we will download the files from these URLs, in addition to files provded in `documents` parameter and then save as source documents|

<h2 id="tocS_DocumentUploadRequest">DocumentUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadrequest"></a>
<a id="schema_DocumentUploadRequest"></a>
<a id="tocSdocumentuploadrequest"></a>
<a id="tocsdocumentuploadrequest"></a>

```json
{
  "documents": "string",
  "schemes": "string",
  "source-link": {
    "name": "string",
    "size": 0,
    "source": "dropbox",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|string(binary)|false|none|Single file data. The name is plural to provide a consistent naming convention.|
|schemes|string|false|none|JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.|
|source-link|[LinkedSourceDocument](#schemalinkedsourcedocument)|false|none|none|

<h2 id="tocS_Earning">Earning</h2>
<!-- backwards compatibility -->
<a id="schemaearning"></a>
<a id="schema_Earning"></a>
<a id="tocSearning"></a>
<a id="tocsearning"></a>

```json
{
  "amount": 0,
  "currency": "usd",
  "due_date": "1970-01-01T00:00:00Z",
  "status": "paid",
  "words": 0,
  "words_approved": 0,
  "words_translated": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(float)|false|none|none|
|currency|string|false|none|none|
|due_date|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|status|string|false|none|none|
|words|integer(int64)|false|none|none|
|words_approved|integer(int64)|false|none|none|
|words_translated|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|paid|
|status|pending|
|status|failed|

<h2 id="tocS_EarningWithTQS">EarningWithTQS</h2>
<!-- backwards compatibility -->
<a id="schemaearningwithtqs"></a>
<a id="schema_EarningWithTQS"></a>
<a id="tocSearningwithtqs"></a>
<a id="tocsearningwithtqs"></a>

```json
{
  "amount": 0,
  "currency": "usd",
  "due_date": "1970-01-01T00:00:00Z",
  "status": "paid",
  "words": 0,
  "words_approved": 0,
  "words_translated": 0,
  "is_above_average": true,
  "score": 0,
  "strings_edited": 0,
  "strings_translated": 0,
  "project_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(float)|false|none|none|
|currency|string|false|none|none|
|due_date|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|status|string|false|none|none|
|words|integer(int64)|false|none|none|
|words_approved|integer(int64)|false|none|none|
|words_translated|integer(int64)|false|none|none|
|is_above_average|boolean|false|none|Is this score above or below the average among other vendors in the same project?|
|score|number(float)|false|none|none|
|strings_edited|integer(int64)|false|none|The number of translated strings by this translator which was edited by a proofreader.|
|strings_translated|integer(int64)|false|none|The number of translated strings by this translator.|
|project_id|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|paid|
|status|pending|
|status|failed|

<h2 id="tocS_Earnings">Earnings</h2>
<!-- backwards compatibility -->
<a id="schemaearnings"></a>
<a id="schema_Earnings"></a>
<a id="tocSearnings"></a>
<a id="tocsearnings"></a>

```json
{
  "completed": [
    {
      "amount": 0,
      "currency": "usd",
      "due_date": "1970-01-01T00:00:00Z",
      "status": "paid",
      "words": 0,
      "words_approved": 0,
      "words_translated": 0,
      "is_above_average": true,
      "score": 0,
      "strings_edited": 0,
      "strings_translated": 0,
      "project_id": 0
    }
  ],
  "ongoing": [
    {
      "amount": 0,
      "currency": "usd",
      "due_date": "1970-01-01T00:00:00Z",
      "status": "paid",
      "words": 0,
      "words_approved": 0,
      "words_translated": 0,
      "is_above_average": true,
      "score": 0,
      "strings_edited": 0,
      "strings_translated": 0,
      "project_id": 0
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed|[[EarningWithTQS](#schemaearningwithtqs)]|false|none|none|
|ongoing|[[EarningWithTQS](#schemaearningwithtqs)]|false|none|none|
|total|number(float)|false|none|none|

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
{
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|help|string|false|none|none|
|http_code|integer(int32)|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_FileAsData">FileAsData</h2>
<!-- backwards compatibility -->
<a id="schemafileasdata"></a>
<a id="schema_FileAsData"></a>
<a id="tocSfileasdata"></a>
<a id="tocsfileasdata"></a>

```json
{
  "data": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|Base64 encoded contents of your file.|
|name|string|false|none|Name of your file|

<h2 id="tocS_FileNeedsVendor">FileNeedsVendor</h2>
<!-- backwards compatibility -->
<a id="schemafileneedsvendor"></a>
<a id="schema_FileNeedsVendor"></a>
<a id="tocSfileneedsvendor"></a>
<a id="tocsfileneedsvendor"></a>

```json
{
  "fileId": 0,
  "guid": "string",
  "projectId": 0,
  "reason": "string",
  "targetLanguage": [
    "string"
  ],
  "taskType": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|integer(int64)|false|none|none|
|guid|string|false|none|none|
|projectId|integer(int64)|false|none|none|
|reason|string|false|none|none|
|targetLanguage|[string]|false|none|none|
|taskType|[string]|false|none|none|

<h2 id="tocS_FilterContents">FilterContents</h2>
<!-- backwards compatibility -->
<a id="schemafiltercontents"></a>
<a id="schema_FilterContents"></a>
<a id="tocSfiltercontents"></a>
<a id="tocsfiltercontents"></a>

```json
{
  "budget_codes": [
    "string"
  ],
  "categories": [
    "string"
  ],
  "clients": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "documents": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "projects": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "severities": [
    "string"
  ],
  "source_languages": [
    "string"
  ],
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "vendors": [
    {
      "id": 0,
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budget_codes|[string]|false|none|none|
|categories|[string]|false|none|none|
|clients|[[SimpleModel](#schemasimplemodel)]|false|none|none|
|documents|[[SimpleModel](#schemasimplemodel)]|false|none|none|
|projects|[[SimpleModel](#schemasimplemodel)]|false|none|none|
|severities|[string]|false|none|none|
|source_languages|[string]|false|none|none|
|subjects|[string]|false|none|none|
|target_languages|[string]|false|none|none|
|vendors|[[SimpleModel](#schemasimplemodel)]|false|none|none|

<h2 id="tocS_FilterDates">FilterDates</h2>
<!-- backwards compatibility -->
<a id="schemafilterdates"></a>
<a id="schema_FilterDates"></a>
<a id="tocSfilterdates"></a>
<a id="tocsfilterdates"></a>

```json
{
  "date_from": "1970-01-01T00:00:00Z",
  "date_to": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_from|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|date_to|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|

<h2 id="tocS_FilterVendorRequest">FilterVendorRequest</h2>
<!-- backwards compatibility -->
<a id="schemafiltervendorrequest"></a>
<a id="schema_FilterVendorRequest"></a>
<a id="tocSfiltervendorrequest"></a>
<a id="tocsfiltervendorrequest"></a>

```json
{
  "clients": [
    0
  ],
  "communication_channel": [
    "string"
  ],
  "corporate_ids_for_auth": [
    0
  ],
  "corporates": [
    0
  ],
  "country": [
    "string"
  ],
  "created_at": "string",
  "current_services": [
    "string"
  ],
  "daily_proofreading_capacity": 0,
  "daily_translation_capacity": 0,
  "destination_languages": [
    0
  ],
  "dtp_software": [
    "string"
  ],
  "email_address": "string",
  "experience": [
    "string"
  ],
  "first_name": "string",
  "id": [
    0
  ],
  "is_certified_translator": true,
  "is_sworn_translator": true,
  "language_pairs": [
    [
      0
    ]
  ],
  "last_name": "string",
  "last_online": "string",
  "last_worked": "string",
  "memoq": 0,
  "memsource": 0,
  "min_tqs": 0,
  "omegat": 0,
  "project_count": 0,
  "proofreader_experience": 0,
  "provides_creative_writing_service": true,
  "provides_postedit_service": true,
  "quote_file_subjects": [
    "string"
  ],
  "reference": "string",
  "sdl_trados": 0,
  "search": "string",
  "skype_id": "string",
  "smartcat": 0,
  "smartling": 0,
  "source_languages": [
    0
  ],
  "specialization": [
    "string"
  ],
  "status": [
    "string"
  ],
  "subtitle_edit": 0,
  "subtitle_workshop": 0,
  "translator_association": "string",
  "transsuite_2000": 0,
  "user_working_timezone": [
    "string"
  ],
  "vendor_profile_lsp": "string",
  "vendor_tags": [
    "string"
  ],
  "vendor_type": [
    "string"
  ],
  "vendor_working_timezone": [
    "string"
  ],
  "word_count": 0,
  "wordbee": 0,
  "wordfast": 0,
  "work_type": "string",
  "work_with": "string",
  "working_as": [
    "string"
  ],
  "xbench": 0,
  "xtm": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[integer]|false|none|none|
|communication_channel|[string]|false|none|none|
|corporate_ids_for_auth|[integer]|false|none|none|
|corporates|[integer]|false|none|none|
|country|[string]|false|none|none|
|created_at|string|false|none|none|
|current_services|[string]|false|none|none|
|daily_proofreading_capacity|integer|false|none|none|
|daily_translation_capacity|integer|false|none|none|
|destination_languages|[integer]|false|none|none|
|dtp_software|[string]|false|none|none|
|email_address|string|false|none|none|
|experience|[string]|false|none|none|
|first_name|string|false|none|none|
|id|[integer]|false|none|none|
|is_certified_translator|boolean|false|none|none|
|is_sworn_translator|boolean|false|none|none|
|language_pairs|[[integer]]|false|none|none|
|last_name|string|false|none|none|
|last_online|string|false|none|none|
|last_worked|string|false|none|none|
|memoq|integer|false|none|none|
|memsource|integer|false|none|none|
|min_tqs|number|false|none|none|
|omegat|integer|false|none|none|
|project_count|integer|false|none|none|
|proofreader_experience|integer|false|none|none|
|provides_creative_writing_service|boolean|false|none|none|
|provides_postedit_service|boolean|false|none|none|
|quote_file_subjects|[string]|false|none|none|
|reference|string|false|none|none|
|sdl_trados|integer|false|none|none|
|search|string|false|none|none|
|skype_id|string|false|none|none|
|smartcat|integer|false|none|none|
|smartling|integer|false|none|none|
|source_languages|[integer]|false|none|none|
|specialization|[string]|false|none|none|
|status|[string]|false|none|none|
|subtitle_edit|integer|false|none|none|
|subtitle_workshop|integer|false|none|none|
|translator_association|string|false|none|none|
|transsuite_2000|integer|false|none|none|
|user_working_timezone|[string]|false|none|none|
|vendor_profile_lsp|string|false|none|none|
|vendor_tags|[string]|false|none|none|
|vendor_type|[string]|false|none|none|
|vendor_working_timezone|[string]|false|none|none|
|word_count|integer|false|none|none|
|wordbee|integer|false|none|none|
|wordfast|integer|false|none|none|
|work_type|string|false|none|none|
|work_with|string|false|none|none|
|working_as|[string]|false|none|none|
|xbench|integer|false|none|none|
|xtm|integer|false|none|none|

<h2 id="tocS_Formats">Formats</h2>
<!-- backwards compatibility -->
<a id="schemaformats"></a>
<a id="schema_Formats"></a>
<a id="tocSformats"></a>
<a id="tocsformats"></a>

```json
{
  "documents": {
    "extensions": [
      "string"
    ],
    "mimes": [
      "string"
    ]
  },
  "glossaries": {
    "extensions": [
      "string"
    ]
  },
  "styleguides": {
    "extensions": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|object|false|none|none|
|glossaries|object|false|none|none|
|styleguides|object|false|none|none|

<h2 id="tocS_GetQuotesForDocumentsBody">GetQuotesForDocumentsBody</h2>
<!-- backwards compatibility -->
<a id="schemagetquotesfordocumentsbody"></a>
<a id="schema_GetQuotesForDocumentsBody"></a>
<a id="tocSgetquotesfordocumentsbody"></a>
<a id="tocsgetquotesfordocumentsbody"></a>

```json
{
  "files": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[integer(int64)]|false|none|none|

<h2 id="tocS_GetQuotesForLanguagesBody">GetQuotesForLanguagesBody</h2>
<!-- backwards compatibility -->
<a id="schemagetquotesforlanguagesbody"></a>
<a id="schema_GetQuotesForLanguagesBody"></a>
<a id="tocSgetquotesforlanguagesbody"></a>
<a id="tocsgetquotesforlanguagesbody"></a>

```json
{
  "languages": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languages|[string]|false|none|none|

<h2 id="tocS_Glossary">Glossary</h2>
<!-- backwards compatibility -->
<a id="schemaglossary"></a>
<a id="schema_Glossary"></a>
<a id="tocSglossary"></a>
<a id="tocsglossary"></a>

```json
{
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "uploaded_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|links|[DocumentLinks](#schemadocumentlinks)|false|none|none|
|name|string|false|none|none|
|uploaded_at|integer(int64)|false|none|Unix epoch time|

<h2 id="tocS_GlossaryList">GlossaryList</h2>
<!-- backwards compatibility -->
<a id="schemaglossarylist"></a>
<a id="schema_GlossaryList"></a>
<a id="tocSglossarylist"></a>
<a id="tocsglossarylist"></a>

```json
{
  "glossaries": [
    {
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "name": "string",
      "uploaded_at": 0
    }
  ],
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossaries|[[Glossary](#schemaglossary)]|false|none|none|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|

<h2 id="tocS_GlossaryUploadRequest">GlossaryUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaglossaryuploadrequest"></a>
<a id="schema_GlossaryUploadRequest"></a>
<a id="tocSglossaryuploadrequest"></a>
<a id="tocsglossaryuploadrequest"></a>

```json
{
  "glossaries": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossaries|string(binary)|true|none|You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.|

<h2 id="tocS_Href">Href</h2>
<!-- backwards compatibility -->
<a id="schemahref"></a>
<a id="schema_Href"></a>
<a id="tocShref"></a>
<a id="tocshref"></a>

```json
{
  "href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|

<h2 id="tocS_InstantContentsTranslationResult">InstantContentsTranslationResult</h2>
<!-- backwards compatibility -->
<a id="schemainstantcontentstranslationresult"></a>
<a id="schema_InstantContentsTranslationResult"></a>
<a id="tocSinstantcontentstranslationresult"></a>
<a id="tocsinstantcontentstranslationresult"></a>

```json
{
  "results": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|a map of source string > translated string.|

<h2 id="tocS_InstantFilesTranslationResult">InstantFilesTranslationResult</h2>
<!-- backwards compatibility -->
<a id="schemainstantfilestranslationresult"></a>
<a id="schema_InstantFilesTranslationResult"></a>
<a id="tocSinstantfilestranslationresult"></a>
<a id="tocsinstantfilestranslationresult"></a>

```json
{
  "results": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|a map of source file name > base64-encoded translated file.|

<h2 id="tocS_InstantTranslationFilter">InstantTranslationFilter</h2>
<!-- backwards compatibility -->
<a id="schemainstanttranslationfilter"></a>
<a id="schema_InstantTranslationFilter"></a>
<a id="tocSinstanttranslationfilter"></a>
<a id="tocsinstanttranslationfilter"></a>

```json
{
  "skipMt": [
    "string"
  ],
  "skipPostEdit": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|skipMt|[string]|false|none|none|
|skipPostEdit|[string]|false|none|none|

<h2 id="tocS_InstantTranslationRequest">InstantTranslationRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstanttranslationrequest"></a>
<a id="schema_InstantTranslationRequest"></a>
<a id="tocSinstanttranslationrequest"></a>
<a id="tocsinstanttranslationrequest"></a>

```json
{
  "contents": [
    "string"
  ],
  "documents": [
    {
      "data": "string",
      "name": "string"
    }
  ],
  "filters": {
    "skipMt": [
      "string"
    ],
    "skipPostEdit": [
      "string"
    ]
  },
  "meta": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|[string]|false|none|Simple list of strings to be translated. You can also choose to upload files instead of strings.|
|documents|[[FileAsData](#schemafileasdata)]|false|none|You can add as many files as you want in documents parameter.|
|filters|[InstantTranslationFilter](#schemainstanttranslationfilter)|false|none|none|
|meta|object|false|none|Free-form meta data to attach to your instant translation request. This can be used in statistics and analytical dashboards.|

<h2 id="tocS_InstantTranslationResult">InstantTranslationResult</h2>
<!-- backwards compatibility -->
<a id="schemainstanttranslationresult"></a>
<a id="schema_InstantTranslationResult"></a>
<a id="tocSinstanttranslationresult"></a>
<a id="tocsinstanttranslationresult"></a>

```json
{
  "results": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[InstantContentsTranslationResult](#schemainstantcontentstranslationresult)|false|none|none|
|*oneOf*|[InstantFilesTranslationResult](#schemainstantfilestranslationresult)|false|none|none|

<h2 id="tocS_IntegrationsToken">IntegrationsToken</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationstoken"></a>
<a id="schema_IntegrationsToken"></a>
<a id="tocSintegrationstoken"></a>
<a id="tocsintegrationstoken"></a>

```json
{
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|

<h2 id="tocS_InvitedVendor">InvitedVendor</h2>
<!-- backwards compatibility -->
<a id="schemainvitedvendor"></a>
<a id="schema_InvitedVendor"></a>
<a id="tocSinvitedvendor"></a>
<a id="tocsinvitedvendor"></a>

```json
{
  "action": "string",
  "email_open_rate": 0,
  "is_entered": true,
  "is_get_paid": true,
  "is_worked": true,
  "is_worked_in_any_project": true,
  "last_project_date": "1970-01-01",
  "project_status_when_interacted": 0,
  "registration_date": "1970-01-01",
  "responsiveness": 0,
  "user_id": 0,
  "vendor_id": 0,
  "vendor_name": "string",
  "vendor_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action to be taken|
|email_open_rate|number|false|none|Email opening rate of the vendor|
|is_entered|boolean|false|none|Did the vendor enter the given project|
|is_get_paid|boolean|false|none|Is vendor get ever paid?|
|is_worked|boolean|false|none|Did the vendor work on the given project|
|is_worked_in_any_project|boolean|false|none|Vendors working status in any project|
|last_project_date|string(date)|false|none|Last project date|
|project_status_when_interacted|number|false|none|Project translation percentage when interacted with the vendor|
|registration_date|string(date)|false|none|Registration date|
|responsiveness|number|false|none|Responsiveness of the vendor|
|user_id|number(int64)|false|none|Id in the Users|
|vendor_id|number(int64)|false|none|Id in the Vendors|
|vendor_name|string|false|none|The name of the vendor|
|vendor_type|string|false|none|Type of the vendor in the given project namely translator or proofreader|

<h2 id="tocS_InvitedVendorsByLanguage">InvitedVendorsByLanguage</h2>
<!-- backwards compatibility -->
<a id="schemainvitedvendorsbylanguage"></a>
<a id="schema_InvitedVendorsByLanguage"></a>
<a id="tocSinvitedvendorsbylanguage"></a>
<a id="tocsinvitedvendorsbylanguage"></a>

```json
{
  "invited_vendors": [
    {
      "action": "string",
      "email_open_rate": 0,
      "is_entered": true,
      "is_get_paid": true,
      "is_worked": true,
      "is_worked_in_any_project": true,
      "last_project_date": "1970-01-01",
      "project_status_when_interacted": 0,
      "registration_date": "1970-01-01",
      "responsiveness": 0,
      "user_id": 0,
      "vendor_id": 0,
      "vendor_name": "string",
      "vendor_type": "string"
    }
  ],
  "target_language": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invited_vendors|[[InvitedVendor](#schemainvitedvendor)]|false|none|Invited vendors for this target language|
|target_language|string|false|none|Target Language that the vendors invited for|

<h2 id="tocS_Invoice">Invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "amount": 0,
  "base_amount": 0,
  "base_currency": "usd",
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "currency": "usd",
  "id": 0,
  "invoice_no": 0,
  "invoiced_at": "1970-01-01T00:00:00Z",
  "links": {
    "self": {
      "href": "string"
    },
    "corporate": {
      "href": "string"
    },
    "html": {
      "href": "string"
    },
    "json": {
      "href": "string"
    },
    "pdf": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "view": {
      "href": "string"
    }
  },
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(float)|false|none|Monetary amount|
|base_amount|number(float)|false|none|Monetary amount|
|base_currency|string|false|none|none|
|billing|[BillingAddress](#schemabillingaddress)|false|none|none|
|currency|string|false|none|none|
|id|integer(int64)|false|none|none|
|invoice_no|integer(int64)|false|none|none|
|invoiced_at|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|links|[InvoiceLinks](#schemainvoicelinks)|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_InvoiceLinks">InvoiceLinks</h2>
<!-- backwards compatibility -->
<a id="schemainvoicelinks"></a>
<a id="schema_InvoiceLinks"></a>
<a id="tocSinvoicelinks"></a>
<a id="tocsinvoicelinks"></a>

```json
{
  "self": {
    "href": "string"
  },
  "corporate": {
    "href": "string"
  },
  "html": {
    "href": "string"
  },
  "json": {
    "href": "string"
  },
  "pdf": {
    "href": "string"
  },
  "project": {
    "href": "string"
  },
  "view": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|
|corporate|[Href](#schemahref)|false|none|none|
|html|[Href](#schemahref)|false|none|none|
|json|[Href](#schemahref)|false|none|none|
|pdf|[Href](#schemahref)|false|none|none|
|project|[Href](#schemahref)|false|none|none|
|view|[Href](#schemahref)|false|none|none|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_LanguagePair">LanguagePair</h2>
<!-- backwards compatibility -->
<a id="schemalanguagepair"></a>
<a id="schema_LanguagePair"></a>
<a id="tocSlanguagepair"></a>
<a id="tocslanguagepair"></a>

```json
{
  "source_language": "string",
  "target_language": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_language|string|false|none|none|
|target_language|string|false|none|none|

<h2 id="tocS_LanguagePairsReport">LanguagePairsReport</h2>
<!-- backwards compatibility -->
<a id="schemalanguagepairsreport"></a>
<a id="schema_LanguagePairsReport"></a>
<a id="tocSlanguagepairsreport"></a>
<a id="tocslanguagepairsreport"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "report": [
    {
      "language_pair": {
        "source_language": "string",
        "target_language": "string"
      },
      "spending": 0,
      "word_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|report|[object]|false|none|none|

<h2 id="tocS_LanguageScore">LanguageScore</h2>
<!-- backwards compatibility -->
<a id="schemalanguagescore"></a>
<a id="schema_LanguageScore"></a>
<a id="tocSlanguagescore"></a>
<a id="tocslanguagescore"></a>

```json
0
```

<h2 id="tocS_LanguageStringStat">LanguageStringStat</h2>
<!-- backwards compatibility -->
<a id="schemalanguagestringstat"></a>
<a id="schema_LanguageStringStat"></a>
<a id="tocSlanguagestringstat"></a>
<a id="tocslanguagestringstat"></a>

```json
{
  "project_string_count": 0,
  "source_language": "string",
  "tm_string_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_string_count|integer(int64)|false|none|none|
|source_language|string|false|none|none|
|tm_string_count|integer(int64)|false|none|none|

<h2 id="tocS_LinkedSourceDocument">LinkedSourceDocument</h2>
<!-- backwards compatibility -->
<a id="schemalinkedsourcedocument"></a>
<a id="schema_LinkedSourceDocument"></a>
<a id="tocSlinkedsourcedocument"></a>
<a id="tocslinkedsourcedocument"></a>

```json
{
  "name": "string",
  "size": 0,
  "source": "dropbox",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|size|integer(int64)|false|none|file size in bytes. optional.|
|source|string|false|none|Preferred source names are listed as enum. If you have a custom file type, simply enter that name.|
|url|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|dropbox|
|source|googledrive|
|source|icloud|

<h2 id="tocS_LinksMeta">LinksMeta</h2>
<!-- backwards compatibility -->
<a id="schemalinksmeta"></a>
<a id="schema_LinksMeta"></a>
<a id="tocSlinksmeta"></a>
<a id="tocslinksmeta"></a>

```json
{
  "self": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|

<h2 id="tocS_ListOrderType">ListOrderType</h2>
<!-- backwards compatibility -->
<a id="schemalistordertype"></a>
<a id="schema_ListOrderType"></a>
<a id="tocSlistordertype"></a>
<a id="tocslistordertype"></a>

```json
"asc"
```

<h2 id="tocS_LocationUpdateContent">LocationUpdateContent</h2>
<!-- backwards compatibility -->
<a id="schemalocationupdatecontent"></a>
<a id="schema_LocationUpdateContent"></a>
<a id="tocSlocationupdatecontent"></a>
<a id="tocslocationupdatecontent"></a>

```json
{
  "lat": 0,
  "lon": 0,
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number(float)|true|none|Latitude of location|
|lon|number(float)|true|none|Longitude of location|
|timestamp|integer|false|none|none|

<h2 id="tocS_MachineTranslatedStrings">MachineTranslatedStrings</h2>
<!-- backwards compatibility -->
<a id="schemamachinetranslatedstrings"></a>
<a id="schema_MachineTranslatedStrings"></a>
<a id="tocSmachinetranslatedstrings"></a>
<a id="tocsmachinetranslatedstrings"></a>

```json
{
  "cost": {
    "amount": 0,
    "currency": "usd"
  },
  "strings": [
    {
      "content": "string",
      "language": "string",
      "last_changed": "1970-01-01T00:00:00Z",
      "translations": [
        {
          "content": "string",
          "last_changed": "1970-01-01T00:00:00Z",
          "resource": "string",
          "resource_id": "string",
          "state": "Translated",
          "target_language": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|[Monetary](#schemamonetary)|false|none|none|
|strings|[[ClientStringWithTranslations](#schemaclientstringwithtranslations)]|false|none|none|

<h2 id="tocS_ManualFile">ManualFile</h2>
<!-- backwards compatibility -->
<a id="schemamanualfile"></a>
<a id="schema_ManualFile"></a>
<a id="tocSmanualfile"></a>
<a id="tocsmanualfile"></a>

```json
{
  "driveFileId": 0,
  "isProofread": true,
  "isTranslated": true,
  "language": "string",
  "proofreadingFileId": 0,
  "translationFileId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driveFileId|integer(int64)|false|none|none|
|isProofread|boolean|false|none|none|
|isTranslated|boolean|false|none|none|
|language|string|false|none|none|
|proofreadingFileId|integer(int64)|false|none|none|
|translationFileId|integer(int64)|false|none|none|

<h2 id="tocS_Monetary">Monetary</h2>
<!-- backwards compatibility -->
<a id="schemamonetary"></a>
<a id="schema_Monetary"></a>
<a id="tocSmonetary"></a>
<a id="tocsmonetary"></a>

```json
{
  "amount": 0,
  "currency": "usd"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(float)|false|none|none|
|currency|string|false|none|none|

<h2 id="tocS_NewProject">NewProject</h2>
<!-- backwards compatibility -->
<a id="schemanewproject"></a>
<a id="schema_NewProject"></a>
<a id="tocSnewproject"></a>
<a id="tocsnewproject"></a>

```json
{
  "callback_url": "string",
  "coupon_code": "string",
  "custom": [
    "string"
  ],
  "documents[]": "string",
  "glossaries[]": "string",
  "source_language": "string",
  "styleguides[]": "string",
  "target_languages[]": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string|false|none|Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.|
|coupon_code|string|false|none|Coupon code to redeem|
|custom|[string]|false|none|Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value.|
|documents[]|string(binary)|false|none|Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls.|
|glossaries[]|string(binary)|false|none|Optional. Only one glossary is supported at the moment.|
|source_language|string|false|none|none|
|styleguides[]|string(binary)|false|none|Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls.|
|target_languages[]|[string]|false|none|none|

<h2 id="tocS_NewSalesActivity">NewSalesActivity</h2>
<!-- backwards compatibility -->
<a id="schemanewsalesactivity"></a>
<a id="schema_NewSalesActivity"></a>
<a id="tocSnewsalesactivity"></a>
<a id="tocsnewsalesactivity"></a>

```json
{
  "subject": "string",
  "timestamp": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subject|string|false|none|none|
|timestamp|integer(int64)|false|none|none|
|type|string|false|none|Activity Type|

<h2 id="tocS_NotificationSubscription">NotificationSubscription</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsubscription"></a>
<a id="schema_NotificationSubscription"></a>
<a id="tocSnotificationsubscription"></a>
<a id="tocsnotificationsubscription"></a>

```json
{
  "device": "iOS",
  "endpoint": "string",
  "type": "OneSignal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|string|false|none|none|
|endpoint|string|false|none|OneSignal calls this "player ID".|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|device|iOS|
|device|Android|
|device|Chrome|
|device|Firefox|
|device|Safari|
|device|Edge|
|device|Amazon|
|device|WindowsPhone|
|device|Windows|
|device|MacOS|
|type|OneSignal|

<h2 id="tocS_OperationStatus">OperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatus"></a>
<a id="schema_OperationStatus"></a>
<a id="tocSoperationstatus"></a>
<a id="tocsoperationstatus"></a>

```json
{
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[OperationStatusEnum](#schemaoperationstatusenum)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_OperationStatusEnum">OperationStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatusenum"></a>
<a id="schema_OperationStatusEnum"></a>
<a id="tocSoperationstatusenum"></a>
<a id="tocsoperationstatusenum"></a>

```json
"success"
```

<h2 id="tocS_Package">Package</h2>
<!-- backwards compatibility -->
<a id="schemapackage"></a>
<a id="schema_Package"></a>
<a id="tocSpackage"></a>
<a id="tocspackage"></a>

```json
{
  "status": "started",
  "key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[PackageStatusEnum](#schemapackagestatusenum)|false|none|The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package.|
|key|string|false|none|This is the unique package tracking key. You can use this key to track the current progress of the translation packaging with /package/check call.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|started|
|status|packaging|
|status|completed|

<h2 id="tocS_PackageStatus">PackageStatus</h2>
<!-- backwards compatibility -->
<a id="schemapackagestatus"></a>
<a id="schema_PackageStatus"></a>
<a id="tocSpackagestatus"></a>
<a id="tocspackagestatus"></a>

```json
{
  "status": "started"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[PackageStatusEnum](#schemapackagestatusenum)|false|none|The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|started|
|status|packaging|
|status|completed|

<h2 id="tocS_PackageStatusEnum">PackageStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemapackagestatusenum"></a>
<a id="schema_PackageStatusEnum"></a>
<a id="tocSpackagestatusenum"></a>
<a id="tocspackagestatusenum"></a>

```json
"started"
```

The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package.

<h2 id="tocS_PagingLinksMeta">PagingLinksMeta</h2>
<!-- backwards compatibility -->
<a id="schemapaginglinksmeta"></a>
<a id="schema_PagingLinksMeta"></a>
<a id="tocSpaginglinksmeta"></a>
<a id="tocspaginglinksmeta"></a>

```json
{
  "self": {
    "href": "string"
  },
  "next": "string",
  "previous": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|
|next|string|false|none|none|
|previous|string|false|none|none|

<h2 id="tocS_PagingMeta">PagingMeta</h2>
<!-- backwards compatibility -->
<a id="schemapagingmeta"></a>
<a id="schema_PagingMeta"></a>
<a id="tocSpagingmeta"></a>
<a id="tocspagingmeta"></a>

```json
{
  "paging": {
    "count": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "next": "string",
      "previous": "string"
    },
    "page": 1,
    "per_page": 10,
    "total_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|object|false|none|none|

<h2 id="tocS_PamMessage">PamMessage</h2>
<!-- backwards compatibility -->
<a id="schemapammessage"></a>
<a id="schema_PamMessage"></a>
<a id="tocSpammessage"></a>
<a id="tocspammessage"></a>

```json
{
  "message": "string",
  "recipients": [
    "string"
  ],
  "slots": [
    "string"
  ],
  "thread_id": "string",
  "thread_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|the message to be sent|
|recipients|[string]|false|none|name of the recipients in the channel|
|slots|[string]|false|none|contexts for next message|
|thread_id|string|false|none|id of the thread|
|thread_key|string|false|none|the key for thread_id default is project|

<h2 id="tocS_PasswordUpdateContent">PasswordUpdateContent</h2>
<!-- backwards compatibility -->
<a id="schemapasswordupdatecontent"></a>
<a id="schema_PasswordUpdateContent"></a>
<a id="tocSpasswordupdatecontent"></a>
<a id="tocspasswordupdatecontent"></a>

```json
{
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|New Password|

<h2 id="tocS_PaymentInfo">PaymentInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinfo"></a>
<a id="schema_PaymentInfo"></a>
<a id="tocSpaymentinfo"></a>
<a id="tocspaymentinfo"></a>

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "card": {
    "bin": "string",
    "id": 0,
    "is_default": true,
    "payment_code": "string"
  },
  "cards": [
    {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    }
  ],
  "corporate": {
    "allow_api_invoicing": true,
    "allow_payment_code": true,
    "auto_charge": true,
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "card": {
      "bin": "string",
      "id": 0,
      "is_default": true,
      "payment_code": "string"
    },
    "contact_email_address": "string",
    "payment_code": "string"
  },
  "shared_card": {
    "bin": "string",
    "id": 0,
    "is_default": true,
    "payment_code": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing|[BillingAddress](#schemabillingaddress)|false|none|none|
|card|[CreditCard](#schemacreditcard)|false|none|none|
|cards|[[CreditCard](#schemacreditcard)]|false|none|none|
|corporate|object|false|none|none|
|shared_card|[CreditCard](#schemacreditcard)|false|none|none|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
"string"
```

<h2 id="tocS_PermissionList">PermissionList</h2>
<!-- backwards compatibility -->
<a id="schemapermissionlist"></a>
<a id="schema_PermissionList"></a>
<a id="tocSpermissionlist"></a>
<a id="tocspermissionlist"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "permissions": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|permissions|[[Permission](#schemapermission)]|false|none|none|

<h2 id="tocS_PopularLanguagePairs">PopularLanguagePairs</h2>
<!-- backwards compatibility -->
<a id="schemapopularlanguagepairs"></a>
<a id="schema_PopularLanguagePairs"></a>
<a id="tocSpopularlanguagepairs"></a>
<a id="tocspopularlanguagepairs"></a>

```json
{
  "pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pairs|[[LanguagePair](#schemalanguagepair)]|false|none|none|

<h2 id="tocS_ProfilePictureUpload">ProfilePictureUpload</h2>
<!-- backwards compatibility -->
<a id="schemaprofilepictureupload"></a>
<a id="schema_ProfilePictureUpload"></a>
<a id="tocSprofilepictureupload"></a>
<a id="tocsprofilepictureupload"></a>

```json
{
  "profile_picture": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile_picture|string(binary)|true|none|Profile picture file contents. Accepted extensions are png, jpg.|

<h2 id="tocS_ProfileSurvey">ProfileSurvey</h2>
<!-- backwards compatibility -->
<a id="schemaprofilesurvey"></a>
<a id="schema_ProfileSurvey"></a>
<a id="tocSprofilesurvey"></a>
<a id="tocsprofilesurvey"></a>

```json
{
  "current_services": "string",
  "daily_proofreading_capacity": "string",
  "daily_translation_capacity": "string",
  "dtp_software": "string",
  "experience": "string",
  "is_certified_translator": "string",
  "is_sworn_translator": "string",
  "memoq": "string",
  "memsource": "string",
  "omegat": "string",
  "proofreader_experience": "string",
  "provides_creative_writing_service": "string",
  "provides_postedit_service": "string",
  "reference": "string",
  "sdl_trados": "string",
  "skype_id": "string",
  "smartcat": "string",
  "smartling": "string",
  "software": "string",
  "specialization": "string",
  "subtitle_edit": "string",
  "subtitle_workshop": "string",
  "translator_association": "string",
  "transsuite_2000": "string",
  "vendor_profile_lsp": "string",
  "wordbee": "string",
  "wordfast": "string",
  "work_type": "string",
  "work_with": "string",
  "working_as": "string",
  "working_timezone": "string",
  "xbench": "string",
  "xtm": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_services|string|false|none|none|
|daily_proofreading_capacity|string|false|none|none|
|daily_translation_capacity|string|false|none|none|
|dtp_software|string|false|none|none|
|experience|string|false|none|none|
|is_certified_translator|string|false|none|none|
|is_sworn_translator|string|false|none|none|
|memoq|string|false|none|none|
|memsource|string|false|none|none|
|omegat|string|false|none|none|
|proofreader_experience|string|false|none|none|
|provides_creative_writing_service|string|false|none|none|
|provides_postedit_service|string|false|none|none|
|reference|string|false|none|none|
|sdl_trados|string|false|none|none|
|skype_id|string|false|none|none|
|smartcat|string|false|none|none|
|smartling|string|false|none|none|
|software|string|false|none|none|
|specialization|string|false|none|none|
|subtitle_edit|string|false|none|none|
|subtitle_workshop|string|false|none|none|
|translator_association|string|false|none|none|
|transsuite_2000|string|false|none|none|
|vendor_profile_lsp|string|false|none|none|
|wordbee|string|false|none|none|
|wordfast|string|false|none|none|
|work_type|string|false|none|none|
|work_with|string|false|none|none|
|working_as|string|false|none|none|
|working_timezone|string|false|none|none|
|xbench|string|false|none|none|
|xtm|string|false|none|none|

<h2 id="tocS_Progress">Progress</h2>
<!-- backwards compatibility -->
<a id="schemaprogress"></a>
<a id="schema_Progress"></a>
<a id="tocSprogress"></a>
<a id="tocsprogress"></a>

```json
{
  "languages": {
    "property1": {
      "proofreading": 0,
      "total": 0,
      "translation": 0,
      "word_count": 0
    },
    "property2": {
      "proofreading": 0,
      "total": 0,
      "translation": 0,
      "word_count": 0
    }
  },
  "links": {
    "self": {
      "href": "string"
    },
    "project": {
      "href": "string"
    }
  },
  "project_status": "pending",
  "proofreading": 0,
  "total": 0,
  "translation": 0,
  "word_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languages|object|false|none|none|
|links|[ProgressLink](#schemaprogresslink)|false|none|none|
|project_status|[ProjectStatus](#schemaprojectstatus)|false|none|none|
|proofreading|number(float)|false|none|none|
|total|number(float)|false|none|none|
|translation|number(float)|false|none|none|
|word_count|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|project_status|pending|
|project_status|started|
|project_status|completed|
|project_status|translated|
|project_status|proofread|

<h2 id="tocS_ProgressLink">ProgressLink</h2>
<!-- backwards compatibility -->
<a id="schemaprogresslink"></a>
<a id="schema_ProgressLink"></a>
<a id="tocSprogresslink"></a>
<a id="tocsprogresslink"></a>

```json
{
  "self": {
    "href": "string"
  },
  "project": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|
|project|[Href](#schemahref)|false|none|none|

<h2 id="tocS_ProgressSub">ProgressSub</h2>
<!-- backwards compatibility -->
<a id="schemaprogresssub"></a>
<a id="schema_ProgressSub"></a>
<a id="tocSprogresssub"></a>
<a id="tocsprogresssub"></a>

```json
{
  "proofreading": 0,
  "total": 0,
  "translation": 0,
  "word_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proofreading|number(float)|false|none|none|
|total|number(float)|false|none|none|
|translation|number(float)|false|none|none|
|word_count|integer(int64)|false|none|none|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "average_scores": {
    "property1": 0,
    "property2": 0
  },
  "budget_code": "string",
  "callback_url": "string",
  "can_pam_manage": true,
  "client": {
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "birthday": "1970-01-01",
    "can_work_manual_files": true,
    "city": "string",
    "client": {
      "corporate": {
        "email": "string",
        "id": 0,
        "logo": "string",
        "name": "string",
        "phone_number": "string"
      },
      "nps": 0,
      "subjects": {
        "property1": 0,
        "property2": 0
      }
    },
    "corporate_id": 0,
    "country": "string",
    "created_at": 0,
    "do_not_contact": true,
    "email": "string",
    "first_name": "string",
    "has_pwd": true,
    "id": 0,
    "is_client": true,
    "is_developer": true,
    "is_proofreader": true,
    "is_prospect": true,
    "is_sales_person": true,
    "is_vendor": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "last_name": "string",
    "last_seen_online_at": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "login_as": {
        "href": "string"
      },
      "projects": {
        "href": "string"
      },
      "responsivity": {
        "href": "string"
      },
      "stats": {
        "href": "string"
      }
    },
    "locale": "string",
    "mailing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string"
    },
    "name": "string",
    "native_language": "string",
    "nps": 0,
    "phone_number": "string",
    "profile_picture_path": "string",
    "social_media": {
      "facebook_url": "string",
      "linkedIn_url": "string",
      "twitter_url": "string"
    },
    "state": "string",
    "status": "string",
    "street": "string",
    "timezone": "string",
    "tms_user_name": "string",
    "user_groups": [
      {
        "corporate_id": 0,
        "id": 0,
        "name": "string",
        "permissions": [
          "string"
        ]
      }
    ],
    "vendor": {
      "can_work_manual_files": true,
      "email_open_rate": 0,
      "is_frozen": true,
      "is_proofreader": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "native_language": "string",
      "pam_tqs": 0,
      "paypal_email": "string",
      "profile_survey": {
        "current_services": "string",
        "daily_proofreading_capacity": "string",
        "daily_translation_capacity": "string",
        "dtp_software": "string",
        "experience": "string",
        "is_certified_translator": "string",
        "is_sworn_translator": "string",
        "memoq": "string",
        "memsource": "string",
        "omegat": "string",
        "proofreader_experience": "string",
        "provides_creative_writing_service": "string",
        "provides_postedit_service": "string",
        "reference": "string",
        "sdl_trados": "string",
        "skype_id": "string",
        "smartcat": "string",
        "smartling": "string",
        "software": "string",
        "specialization": "string",
        "subtitle_edit": "string",
        "subtitle_workshop": "string",
        "translator_association": "string",
        "transsuite_2000": "string",
        "vendor_profile_lsp": "string",
        "wordbee": "string",
        "wordfast": "string",
        "work_type": "string",
        "work_with": "string",
        "working_as": "string",
        "working_timezone": "string",
        "xbench": "string",
        "xtm": "string"
      },
      "require_1099": true,
      "tags": [
        "string"
      ],
      "tms_user_name": "string",
      "vendor_type": "string"
    },
    "zip_code": "string"
  },
  "cm_id": 0,
  "completed_on": "1970-01-01T00:00:00Z",
  "continuous_project_type": "string",
  "created_at": 0,
  "custom": {},
  "delivery_at": 0,
  "errors": [
    {
      "code": "string",
      "help": "string",
      "http_code": 0,
      "message": "string"
    }
  ],
  "id": 0,
  "is_api_project": true,
  "is_certified": true,
  "is_continuous": true,
  "is_manual": true,
  "links": {
    "self": {
      "href": "string"
    },
    "documents": {
      "href": "string"
    },
    "glossaries": {
      "href": "string"
    },
    "payment": {
      "href": "string"
    },
    "quote-pdf": {
      "href": "string"
    },
    "styleguides": {
      "href": "string"
    }
  },
  "pairs": [
    {
      "currency": "usd",
      "is_proofreader": true,
      "proofreader": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "proofreading_rate": 0,
      "source_language": "string",
      "target_language": "string",
      "translation_rate": 0
    }
  ],
  "pivoted_projects": [
    0
  ],
  "price": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "price_without_discount": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "role": "translator",
  "should_send_client_survey": true,
  "source": "api",
  "source_language": "string",
  "status": "pending",
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "tms_name": "string",
  "valid_until": 0,
  "vendor_word_count": 0,
  "word_count": 0,
  "word_count_analysis": {
    "base": 0,
    "duplicate": 0,
    "exclusion": 0,
    "final": 0,
    "tm": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average_scores|object|false|none|none|
|budget_code|string|false|none|none|
|callback_url|string|false|none|Callback URL to notify when project status changed.|
|can_pam_manage|boolean|false|none|none|
|client|[User](#schemauser)|false|none|User entity for Client. This is only given when project is requested with detailed=true|
|cm_id|integer(int64)|false|none|Assigned admin's id|
|completed_on|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|continuous_project_type|string|false|none|none|
|created_at|integer(int64)|false|none|Unix epoch time|
|custom|object|false|none|Custom data provided while creating a new project.|
|delivery_at|integer(int64)|false|none|Unix epoch time|
|errors|[[Error](#schemaerror)]|false|none|A list of errors. Visible when creating a project and uploading your documents at the same time, in case of multiple errors.|
|id|integer(int64)|false|none|none|
|is_api_project|boolean|false|none|none|
|is_certified|boolean|false|none|none|
|is_continuous|boolean|false|none|none|
|is_manual|boolean|false|none|none|
|links|[ProjectLinks](#schemaprojectlinks)|false|none|none|
|pairs|[[VendorProjectPair](#schemavendorprojectpair)]|false|none|Currently authed vendor's available working language pairs in this project. Includes rates per language pair. Includes complex pair logic such as bilingualism, project reverse pair enforcement etc.|
|pivoted_projects|[integer(int64)]|false|none|Quote IDs of pivots|
|price|object|false|none|none|
|price_without_discount|object|false|none|none|
|role|[VendorProjectRole](#schemavendorprojectrole)|false|none|Currently authed vendor's role in this project. If vendor has already joined, this contains the role they joined the project with. If not joined yet, this is the role that they can join the project with.|
|should_send_client_survey|boolean|false|none|none|
|source|[ProjectSource](#schemaprojectsource)|false|none|The source platform where this project was first created. Current options are "api", "web".|
|source_language|string|false|none|none|
|status|[ProjectStatus](#schemaprojectstatus)|false|none|none|
|subjects|[string]|false|none|none|
|target_languages|[string]|false|none|none|
|tms_name|string|false|none|TMS project name for this MW project. Requires privileged scope.|
|valid_until|integer(int64)|false|none|Unix epoch time. Available only if status is `pending`.|
|vendor_word_count|integer(int64)|false|none|none|
|word_count|integer(int64)|false|none|none|
|word_count_analysis|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|translator|
|role|proofreader|
|role|both|
|source|api|
|source|web|
|status|pending|
|status|started|
|status|completed|
|status|translated|
|status|proofread|

<h2 id="tocS_ProjectCompletionReport">ProjectCompletionReport</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcompletionreport"></a>
<a id="schema_ProjectCompletionReport"></a>
<a id="tocSprojectcompletionreport"></a>
<a id="tocsprojectcompletionreport"></a>

```json
{
  "admin_user_id": 0,
  "completion_report_data": [
    {
      "invited_vendors": [
        {
          "action": "string",
          "email_open_rate": 0,
          "is_entered": true,
          "is_get_paid": true,
          "is_worked": true,
          "is_worked_in_any_project": true,
          "last_project_date": "1970-01-01",
          "project_status_when_interacted": 0,
          "registration_date": "1970-01-01",
          "responsiveness": 0,
          "user_id": 0,
          "vendor_id": 0,
          "vendor_name": "string",
          "vendor_type": "string"
        }
      ],
      "target_language": "string"
    }
  ],
  "id": 0,
  "quote_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin_user_id|number(int64)|false|none|Assigned admin's user id|
|completion_report_data|[[InvitedVendorsByLanguage](#schemainvitedvendorsbylanguage)]|false|none|none|
|id|number(int64)|false|none|internal id of the project|
|quote_id|number(int64)|false|none|quote id of the project|

<h2 id="tocS_ProjectId">ProjectId</h2>
<!-- backwards compatibility -->
<a id="schemaprojectid"></a>
<a id="schema_ProjectId"></a>
<a id="tocSprojectid"></a>
<a id="tocsprojectid"></a>

```json
{
  "internal-id": 0,
  "public-id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|internal-id|integer(int64)|false|none|none|
|public-id|integer(int64)|false|none|none|

<h2 id="tocS_ProjectInSearch">ProjectInSearch</h2>
<!-- backwards compatibility -->
<a id="schemaprojectinsearch"></a>
<a id="schema_ProjectInSearch"></a>
<a id="tocSprojectinsearch"></a>
<a id="tocsprojectinsearch"></a>

```json
{
  "average_scores": {
    "property1": 0,
    "property2": 0
  },
  "budget_code": "string",
  "callback_url": "string",
  "can_pam_manage": true,
  "client": {
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "birthday": "1970-01-01",
    "can_work_manual_files": true,
    "city": "string",
    "client": {
      "corporate": {
        "email": "string",
        "id": 0,
        "logo": "string",
        "name": "string",
        "phone_number": "string"
      },
      "nps": 0,
      "subjects": {
        "property1": 0,
        "property2": 0
      }
    },
    "corporate_id": 0,
    "country": "string",
    "created_at": 0,
    "do_not_contact": true,
    "email": "string",
    "first_name": "string",
    "has_pwd": true,
    "id": 0,
    "is_client": true,
    "is_developer": true,
    "is_proofreader": true,
    "is_prospect": true,
    "is_sales_person": true,
    "is_vendor": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "last_name": "string",
    "last_seen_online_at": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "login_as": {
        "href": "string"
      },
      "projects": {
        "href": "string"
      },
      "responsivity": {
        "href": "string"
      },
      "stats": {
        "href": "string"
      }
    },
    "locale": "string",
    "mailing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string"
    },
    "name": "string",
    "native_language": "string",
    "nps": 0,
    "phone_number": "string",
    "profile_picture_path": "string",
    "social_media": {
      "facebook_url": "string",
      "linkedIn_url": "string",
      "twitter_url": "string"
    },
    "state": "string",
    "status": "string",
    "street": "string",
    "timezone": "string",
    "tms_user_name": "string",
    "user_groups": [
      {
        "corporate_id": 0,
        "id": 0,
        "name": "string",
        "permissions": [
          "string"
        ]
      }
    ],
    "vendor": {
      "can_work_manual_files": true,
      "email_open_rate": 0,
      "is_frozen": true,
      "is_proofreader": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "native_language": "string",
      "pam_tqs": 0,
      "paypal_email": "string",
      "profile_survey": {
        "current_services": "string",
        "daily_proofreading_capacity": "string",
        "daily_translation_capacity": "string",
        "dtp_software": "string",
        "experience": "string",
        "is_certified_translator": "string",
        "is_sworn_translator": "string",
        "memoq": "string",
        "memsource": "string",
        "omegat": "string",
        "proofreader_experience": "string",
        "provides_creative_writing_service": "string",
        "provides_postedit_service": "string",
        "reference": "string",
        "sdl_trados": "string",
        "skype_id": "string",
        "smartcat": "string",
        "smartling": "string",
        "software": "string",
        "specialization": "string",
        "subtitle_edit": "string",
        "subtitle_workshop": "string",
        "translator_association": "string",
        "transsuite_2000": "string",
        "vendor_profile_lsp": "string",
        "wordbee": "string",
        "wordfast": "string",
        "work_type": "string",
        "work_with": "string",
        "working_as": "string",
        "working_timezone": "string",
        "xbench": "string",
        "xtm": "string"
      },
      "require_1099": true,
      "tags": [
        "string"
      ],
      "tms_user_name": "string",
      "vendor_type": "string"
    },
    "zip_code": "string"
  },
  "cm_id": 0,
  "completed_on": "1970-01-01T00:00:00Z",
  "continuous_project_type": "string",
  "created_at": 0,
  "custom": {},
  "delivery_at": 0,
  "errors": [
    {
      "code": "string",
      "help": "string",
      "http_code": 0,
      "message": "string"
    }
  ],
  "id": 0,
  "is_api_project": true,
  "is_certified": true,
  "is_continuous": true,
  "is_manual": true,
  "links": {
    "self": {
      "href": "string"
    },
    "documents": {
      "href": "string"
    },
    "glossaries": {
      "href": "string"
    },
    "payment": {
      "href": "string"
    },
    "quote-pdf": {
      "href": "string"
    },
    "styleguides": {
      "href": "string"
    }
  },
  "pairs": [
    {
      "currency": "usd",
      "is_proofreader": true,
      "proofreader": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "proofreading_rate": 0,
      "source_language": "string",
      "target_language": "string",
      "translation_rate": 0
    }
  ],
  "pivoted_projects": [
    0
  ],
  "price": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "price_without_discount": {
    "amount": 0,
    "base_amount": 0,
    "base_currency": "usd",
    "currency": "usd",
    "usd_amount": 0
  },
  "role": "translator",
  "should_send_client_survey": true,
  "source": "api",
  "source_language": "string",
  "status": "pending",
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "tms_name": "string",
  "valid_until": 0,
  "vendor_word_count": 0,
  "word_count": 0,
  "word_count_analysis": {
    "base": 0,
    "duplicate": 0,
    "exclusion": 0,
    "final": 0,
    "tm": 0
  },
  "search_result_reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average_scores|object|false|none|none|
|budget_code|string|false|none|none|
|callback_url|string|false|none|Callback URL to notify when project status changed.|
|can_pam_manage|boolean|false|none|none|
|client|[User](#schemauser)|false|none|User entity for Client. This is only given when project is requested with detailed=true|
|cm_id|integer(int64)|false|none|Assigned admin's id|
|completed_on|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|continuous_project_type|string|false|none|none|
|created_at|integer(int64)|false|none|Unix epoch time|
|custom|object|false|none|Custom data provided while creating a new project.|
|delivery_at|integer(int64)|false|none|Unix epoch time|
|errors|[[Error](#schemaerror)]|false|none|A list of errors. Visible when creating a project and uploading your documents at the same time, in case of multiple errors.|
|id|integer(int64)|false|none|none|
|is_api_project|boolean|false|none|none|
|is_certified|boolean|false|none|none|
|is_continuous|boolean|false|none|none|
|is_manual|boolean|false|none|none|
|links|[ProjectLinks](#schemaprojectlinks)|false|none|none|
|pairs|[[VendorProjectPair](#schemavendorprojectpair)]|false|none|Currently authed vendor's available working language pairs in this project. Includes rates per language pair. Includes complex pair logic such as bilingualism, project reverse pair enforcement etc.|
|pivoted_projects|[integer(int64)]|false|none|Quote IDs of pivots|
|price|object|false|none|none|
|price_without_discount|object|false|none|none|
|role|[VendorProjectRole](#schemavendorprojectrole)|false|none|Currently authed vendor's role in this project. If vendor has already joined, this contains the role they joined the project with. If not joined yet, this is the role that they can join the project with.|
|should_send_client_survey|boolean|false|none|none|
|source|[ProjectSource](#schemaprojectsource)|false|none|The source platform where this project was first created. Current options are "api", "web".|
|source_language|string|false|none|none|
|status|[ProjectStatus](#schemaprojectstatus)|false|none|none|
|subjects|[string]|false|none|none|
|target_languages|[string]|false|none|none|
|tms_name|string|false|none|TMS project name for this MW project. Requires privileged scope.|
|valid_until|integer(int64)|false|none|Unix epoch time. Available only if status is `pending`.|
|vendor_word_count|integer(int64)|false|none|none|
|word_count|integer(int64)|false|none|none|
|word_count_analysis|object|false|none|none|
|search_result_reason|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|translator|
|role|proofreader|
|role|both|
|source|api|
|source|web|
|status|pending|
|status|started|
|status|completed|
|status|translated|
|status|proofread|

<h2 id="tocS_ProjectLaunchResponse">ProjectLaunchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectlaunchresponse"></a>
<a id="schema_ProjectLaunchResponse"></a>
<a id="tocSprojectlaunchresponse"></a>
<a id="tocsprojectlaunchresponse"></a>

```json
{
  "status": "started"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[ProjectLaunchResponseEnum](#schemaprojectlaunchresponseenum)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|started|

<h2 id="tocS_ProjectLaunchResponseEnum">ProjectLaunchResponseEnum</h2>
<!-- backwards compatibility -->
<a id="schemaprojectlaunchresponseenum"></a>
<a id="schema_ProjectLaunchResponseEnum"></a>
<a id="tocSprojectlaunchresponseenum"></a>
<a id="tocsprojectlaunchresponseenum"></a>

```json
"started"
```

<h2 id="tocS_ProjectLinks">ProjectLinks</h2>
<!-- backwards compatibility -->
<a id="schemaprojectlinks"></a>
<a id="schema_ProjectLinks"></a>
<a id="tocSprojectlinks"></a>
<a id="tocsprojectlinks"></a>

```json
{
  "self": {
    "href": "string"
  },
  "documents": {
    "href": "string"
  },
  "glossaries": {
    "href": "string"
  },
  "payment": {
    "href": "string"
  },
  "quote-pdf": {
    "href": "string"
  },
  "styleguides": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|
|documents|[Href](#schemahref)|false|none|none|
|glossaries|[Href](#schemahref)|false|none|none|
|payment|[Href](#schemahref)|false|none|none|
|quote-pdf|[Href](#schemahref)|false|none|none|
|styleguides|[Href](#schemahref)|false|none|none|

<h2 id="tocS_ProjectList">ProjectList</h2>
<!-- backwards compatibility -->
<a id="schemaprojectlist"></a>
<a id="schema_ProjectList"></a>
<a id="tocSprojectlist"></a>
<a id="tocsprojectlist"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "projects": [
    {
      "average_scores": {
        "property1": 0,
        "property2": 0
      },
      "budget_code": "string",
      "callback_url": "string",
      "can_pam_manage": true,
      "client": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "cm_id": 0,
      "completed_on": "1970-01-01T00:00:00Z",
      "continuous_project_type": "string",
      "created_at": 0,
      "custom": {},
      "delivery_at": 0,
      "errors": [
        {
          "code": "string",
          "help": "string",
          "http_code": 0,
          "message": "string"
        }
      ],
      "id": 0,
      "is_api_project": true,
      "is_certified": true,
      "is_continuous": true,
      "is_manual": true,
      "links": {
        "self": {
          "href": "string"
        },
        "documents": {
          "href": "string"
        },
        "glossaries": {
          "href": "string"
        },
        "payment": {
          "href": "string"
        },
        "quote-pdf": {
          "href": "string"
        },
        "styleguides": {
          "href": "string"
        }
      },
      "pairs": [
        {
          "currency": "usd",
          "is_proofreader": true,
          "proofreader": {
            "billing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string",
              "name": ""
            },
            "birthday": "1970-01-01",
            "can_work_manual_files": true,
            "city": "string",
            "client": {
              "corporate": {
                "email": "string",
                "id": 0,
                "logo": "string",
                "name": "string",
                "phone_number": "string"
              },
              "nps": 0,
              "subjects": {
                "property1": 0,
                "property2": 0
              }
            },
            "corporate_id": 0,
            "country": "string",
            "created_at": 0,
            "do_not_contact": true,
            "email": "string",
            "first_name": "string",
            "has_pwd": true,
            "id": 0,
            "is_client": true,
            "is_developer": true,
            "is_proofreader": true,
            "is_prospect": true,
            "is_sales_person": true,
            "is_vendor": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "last_name": "string",
            "last_seen_online_at": 0,
            "links": {
              "self": {
                "href": "string"
              },
              "login_as": {
                "href": "string"
              },
              "projects": {
                "href": "string"
              },
              "responsivity": {
                "href": "string"
              },
              "stats": {
                "href": "string"
              }
            },
            "locale": "string",
            "mailing": {
              "city": "string",
              "country": "string",
              "phone": "string",
              "state": "string",
              "street": "string",
              "zip": "string"
            },
            "name": "string",
            "native_language": "string",
            "nps": 0,
            "phone_number": "string",
            "profile_picture_path": "string",
            "social_media": {
              "facebook_url": "string",
              "linkedIn_url": "string",
              "twitter_url": "string"
            },
            "state": "string",
            "status": "string",
            "street": "string",
            "timezone": "string",
            "tms_user_name": "string",
            "user_groups": [
              {
                "corporate_id": 0,
                "id": 0,
                "name": "string",
                "permissions": [
                  "string"
                ]
              }
            ],
            "vendor": {
              "can_work_manual_files": true,
              "email_open_rate": 0,
              "is_frozen": true,
              "is_proofreader": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "native_language": "string",
              "pam_tqs": 0,
              "paypal_email": "string",
              "profile_survey": {
                "current_services": "string",
                "daily_proofreading_capacity": "string",
                "daily_translation_capacity": "string",
                "dtp_software": "string",
                "experience": "string",
                "is_certified_translator": "string",
                "is_sworn_translator": "string",
                "memoq": "string",
                "memsource": "string",
                "omegat": "string",
                "proofreader_experience": "string",
                "provides_creative_writing_service": "string",
                "provides_postedit_service": "string",
                "reference": "string",
                "sdl_trados": "string",
                "skype_id": "string",
                "smartcat": "string",
                "smartling": "string",
                "software": "string",
                "specialization": "string",
                "subtitle_edit": "string",
                "subtitle_workshop": "string",
                "translator_association": "string",
                "transsuite_2000": "string",
                "vendor_profile_lsp": "string",
                "wordbee": "string",
                "wordfast": "string",
                "work_type": "string",
                "work_with": "string",
                "working_as": "string",
                "working_timezone": "string",
                "xbench": "string",
                "xtm": "string"
              },
              "require_1099": true,
              "tags": [
                "string"
              ],
              "tms_user_name": "string",
              "vendor_type": "string"
            },
            "zip_code": "string"
          },
          "proofreading_rate": 0,
          "source_language": "string",
          "target_language": "string",
          "translation_rate": 0
        }
      ],
      "pivoted_projects": [
        0
      ],
      "price": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "price_without_discount": {
        "amount": 0,
        "base_amount": 0,
        "base_currency": "usd",
        "currency": "usd",
        "usd_amount": 0
      },
      "role": "translator",
      "should_send_client_survey": true,
      "source": "api",
      "source_language": "string",
      "status": "pending",
      "subjects": [
        "string"
      ],
      "target_languages": [
        "string"
      ],
      "tms_name": "string",
      "valid_until": 0,
      "vendor_word_count": 0,
      "word_count": 0,
      "word_count_analysis": {
        "base": 0,
        "duplicate": 0,
        "exclusion": 0,
        "final": 0,
        "tm": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|projects|[[Project](#schemaproject)]|false|none|none|

<h2 id="tocS_ProjectPayment">ProjectPayment</h2>
<!-- backwards compatibility -->
<a id="schemaprojectpayment"></a>
<a id="schema_ProjectPayment"></a>
<a id="tocSprojectpayment"></a>
<a id="tocsprojectpayment"></a>

```json
{
  "bin": "string",
  "budget_code": "string",
  "card_id": 0,
  "payment_code": "string",
  "payment_method": "corporate",
  "stripe_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bin|string|false|none|Last 4 digits of the credit card you are using one-time. This parameter is only required when stripe_token is provided.|
|budget_code|string|false|none|Optional with corporate accounts. Not available for others.|
|card_id|integer(int64)|false|none|Optional. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin.|
|payment_code|string|false|none|Optional. `corporate` payment method requires this.s|
|payment_method|string|false|none|Optional. Determines which method to use for payment. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin. `corporate` method follows corporate account policy automatically, either follows invoicing flow or automatically charges corporate's primary card.|
|stripe_token|string|false|none|This is required if you are using a one-time credit card. This is the token generted from frontend via Stripe SDK. If you are using a one-time card with `stripe_token`, you must also provide `bin`, last 4 digits of the card.|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_method|corporate|
|payment_method|client|
|payment_method|app|
|payment_method|credit|
|payment_method|corporate_card|

<h2 id="tocS_ProjectSource">ProjectSource</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsource"></a>
<a id="schema_ProjectSource"></a>
<a id="tocSprojectsource"></a>
<a id="tocsprojectsource"></a>

```json
"api"
```

<h2 id="tocS_ProjectStatus">ProjectStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprojectstatus"></a>
<a id="schema_ProjectStatus"></a>
<a id="tocSprojectstatus"></a>
<a id="tocsprojectstatus"></a>

```json
"pending"
```

<h2 id="tocS_ProjectTQS">ProjectTQS</h2>
<!-- backwards compatibility -->
<a id="schemaprojecttqs"></a>
<a id="schema_ProjectTQS"></a>
<a id="tocSprojecttqs"></a>
<a id="tocsprojecttqs"></a>

```json
{
  "is_above_average": true,
  "score": 0,
  "strings_edited": 0,
  "strings_translated": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_above_average|boolean|false|none|Is this score above or below the average among other vendors in the same project?|
|score|number(float)|false|none|none|
|strings_edited|integer(int64)|false|none|The number of translated strings by this translator which was edited by a proofreader.|
|strings_translated|integer(int64)|false|none|The number of translated strings by this translator.|

<h2 id="tocS_ProjectUpdate">ProjectUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaprojectupdate"></a>
<a id="schema_ProjectUpdate"></a>
<a id="tocSprojectupdate"></a>
<a id="tocsprojectupdate"></a>

```json
{
  "callback_url": "string",
  "coupon_code": "string",
  "custom": [
    "string"
  ],
  "source_language": "string",
  "target_languages[]": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string|false|none|Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.|
|coupon_code|string|false|none|Coupon code to redeem|
|custom|[string]|false|none|Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced.|
|source_language|string|false|none|none|
|target_languages[]|[string]|false|none|none|

<h2 id="tocS_ProofreaderWithLanguage">ProofreaderWithLanguage</h2>
<!-- backwards compatibility -->
<a id="schemaproofreaderwithlanguage"></a>
<a id="schema_ProofreaderWithLanguage"></a>
<a id="tocSproofreaderwithlanguage"></a>
<a id="tocsproofreaderwithlanguage"></a>

```json
{
  "full_name": "string",
  "id": 0,
  "language": "string",
  "vendor_link": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|full_name|string|false|none|full name of the proofreader|
|id|number(int64)|false|none|proofreader id|
|language|string|false|none|language code (i.e en-US)|
|vendor_link|string|false|none|link to the vendor that can be only used in motaword admin application|

<h2 id="tocS_QaEntry">QaEntry</h2>
<!-- backwards compatibility -->
<a id="schemaqaentry"></a>
<a id="schema_QaEntry"></a>
<a id="tocSqaentry"></a>
<a id="tocsqaentry"></a>

```json
{
  "category": "string",
  "comment": "string",
  "docId": "string",
  "editorLink": "string",
  "end": 0,
  "inSource": true,
  "isCurrent": true,
  "module": "string",
  "projectId": {
    "id": 0,
    "name": "string"
  },
  "severity": "string",
  "source": "string",
  "sourceLanguage": {
    "id": 0,
    "name": "string"
  },
  "start": 0,
  "state": "string",
  "targetLanguage": {
    "id": 0,
    "name": "string"
  },
  "translation": "string",
  "uniqueKey": "string",
  "vendor": {
    "id": 0,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|comment|string|false|none|none|
|docId|string|false|none|none|
|editorLink|string|false|none|none|
|end|integer(int64)|false|none|none|
|inSource|boolean|false|none|none|
|isCurrent|boolean|false|none|none|
|module|string|false|none|none|
|projectId|[SimpleModel](#schemasimplemodel)|false|none|none|
|severity|string|false|none|none|
|source|string|false|none|none|
|sourceLanguage|[SimpleModel](#schemasimplemodel)|false|none|none|
|start|integer(int64)|false|none|none|
|state|string|false|none|none|
|targetLanguage|[SimpleModel](#schemasimplemodel)|false|none|none|
|translation|string|false|none|none|
|uniqueKey|string|false|none|none|
|vendor|[SimpleModel](#schemasimplemodel)|false|none|none|

<h2 id="tocS_QaFilter">QaFilter</h2>
<!-- backwards compatibility -->
<a id="schemaqafilter"></a>
<a id="schema_QaFilter"></a>
<a id="tocSqafilter"></a>
<a id="tocsqafilter"></a>

```json
{
  "budget_codes": [
    "string"
  ],
  "categories": [
    "string"
  ],
  "clients": [
    0
  ],
  "date_from": "1970-01-01T00:00:00Z",
  "date_to": "1970-01-01T00:00:00Z",
  "documents": [
    0
  ],
  "projects": [
    0
  ],
  "severities": [
    "string"
  ],
  "source_languages": [
    "string"
  ],
  "subjects": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "vendors": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budget_codes|[string]|false|none|none|
|categories|[string]|false|none|none|
|clients|[number(int64)]|false|none|none|
|date_from|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|date_to|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|documents|[number(int64)]|false|none|none|
|projects|[number(int64)]|false|none|none|
|severities|[string]|false|none|none|
|source_languages|[string]|false|none|none|
|subjects|[string]|false|none|none|
|target_languages|[string]|false|none|none|
|vendors|[number(int64)]|false|none|none|

<h2 id="tocS_QaWarnings">QaWarnings</h2>
<!-- backwards compatibility -->
<a id="schemaqawarnings"></a>
<a id="schema_QaWarnings"></a>
<a id="tocSqawarnings"></a>
<a id="tocsqawarnings"></a>

```json
{
  "report": [
    {
      "category": "string",
      "comment": "string",
      "docId": "string",
      "editorLink": "string",
      "end": 0,
      "inSource": true,
      "isCurrent": true,
      "module": "string",
      "projectId": {
        "id": 0,
        "name": "string"
      },
      "severity": "string",
      "source": "string",
      "sourceLanguage": {
        "id": 0,
        "name": "string"
      },
      "start": 0,
      "state": "string",
      "targetLanguage": {
        "id": 0,
        "name": "string"
      },
      "translation": "string",
      "uniqueKey": "string",
      "vendor": {
        "id": 0,
        "name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|report|[[QaEntry](#schemaqaentry)]|false|none|none|

<h2 id="tocS_RegeneratePreviewResponse">RegeneratePreviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregeneratepreviewresponse"></a>
<a id="schema_RegeneratePreviewResponse"></a>
<a id="tocSregeneratepreviewresponse"></a>
<a id="tocsregeneratepreviewresponse"></a>

```json
{
  "link": {
    "href": "string"
  },
  "source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|[Href](#schemahref)|false|none|none|
|source|string|false|none|none|

<h2 id="tocS_ReportContent">ReportContent</h2>
<!-- backwards compatibility -->
<a id="schemareportcontent"></a>
<a id="schema_ReportContent"></a>
<a id="tocSreportcontent"></a>
<a id="tocsreportcontent"></a>

```json
{
  "activity_type": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_type|string|false|none|Activity Type|
|message|string|false|none|Report Message|

<h2 id="tocS_ReportFilter">ReportFilter</h2>
<!-- backwards compatibility -->
<a id="schemareportfilter"></a>
<a id="schema_ReportFilter"></a>
<a id="tocSreportfilter"></a>
<a id="tocsreportfilter"></a>

```json
{
  "budget_code": "string",
  "date_from": "1970-01-01T00:00:00Z",
  "date_to": "1970-01-01T00:00:00Z",
  "source_languages": [
    "string"
  ],
  "target_languages": [
    "string"
  ],
  "users": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budget_code|string|false|none|budget code filter. valid for corporate accounts only.|
|date_from|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|date_to|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|source_languages|[string]|false|none|List of source language codes.|
|target_languages|[string]|false|none|List of target language codes.|
|users|[integer(int64)]|false|none|List of corporate user IDs. Valid for corporate accounts only.|

<h2 id="tocS_Responsivity">Responsivity</h2>
<!-- backwards compatibility -->
<a id="schemaresponsivity"></a>
<a id="schema_Responsivity"></a>
<a id="tocSresponsivity"></a>
<a id="tocsresponsivity"></a>

```json
{
  "invited": 0,
  "month": "string",
  "notEntered": 0,
  "onlyEntered": 0,
  "score": 0,
  "week": "string",
  "worked": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invited|integer(int64)|false|none|none|
|month|string|false|none|none|
|notEntered|integer(int64)|false|none|none|
|onlyEntered|integer(int64)|false|none|none|
|score|number(float)|false|none|none|
|week|string|false|none|none|
|worked|integer(int64)|false|none|none|

<h2 id="tocS_ResponsivityList">ResponsivityList</h2>
<!-- backwards compatibility -->
<a id="schemaresponsivitylist"></a>
<a id="schema_ResponsivityList"></a>
<a id="tocSresponsivitylist"></a>
<a id="tocsresponsivitylist"></a>

```json
{
  "links": {
    "self": {
      "href": "string"
    }
  },
  "responsivity": [
    {
      "invited": 0,
      "month": "string",
      "notEntered": 0,
      "onlyEntered": 0,
      "score": 0,
      "week": "string",
      "worked": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|false|none|none|
|responsivity|[[Responsivity](#schemaresponsivity)]|false|none|none|

<h2 id="tocS_SalesActivities">SalesActivities</h2>
<!-- backwards compatibility -->
<a id="schemasalesactivities"></a>
<a id="schema_SalesActivities"></a>
<a id="tocSsalesactivities"></a>
<a id="tocssalesactivities"></a>

```json
{
  "activities": [
    {
      "body": "string",
      "created_at": 0,
      "created_by": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[SalesActivity](#schemasalesactivity)]|false|none|none|

<h2 id="tocS_SalesActivity">SalesActivity</h2>
<!-- backwards compatibility -->
<a id="schemasalesactivity"></a>
<a id="schema_SalesActivity"></a>
<a id="tocSsalesactivity"></a>
<a id="tocssalesactivity"></a>

```json
{
  "body": "string",
  "created_at": 0,
  "created_by": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|created_at|integer(int64)|false|none|timestamp|
|created_by|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_SalesActivityType">SalesActivityType</h2>
<!-- backwards compatibility -->
<a id="schemasalesactivitytype"></a>
<a id="schema_SalesActivityType"></a>
<a id="tocSsalesactivitytype"></a>
<a id="tocssalesactivitytype"></a>

```json
"EMAIL"
```

<h2 id="tocS_SearchEverywhereResult">SearchEverywhereResult</h2>
<!-- backwards compatibility -->
<a id="schemasearcheverywhereresult"></a>
<a id="schema_SearchEverywhereResult"></a>
<a id="tocSsearcheverywhereresult"></a>
<a id="tocssearcheverywhereresult"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "result": {
    "documents": [
      {
        "file_type": "string",
        "has_custom_package": true,
        "id": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "admins": {
            "property1": {
              "href": "string"
            },
            "property2": {
              "href": "string"
            }
          },
          "download": {
            "href": "string"
          },
          "editors": {
            "property1": {
              "href": "string"
            },
            "property2": {
              "href": "string"
            }
          },
          "preview-box": {
            "href": "string"
          },
          "preview-pdf": {
            "href": "string"
          },
          "preview-pdf-viewer": {
            "href": "string"
          },
          "progress": {
            "href": "string"
          },
          "project": {
            "href": "string"
          },
          "strings": {
            "href": "string"
          },
          "thumbnail": {
            "href": "string"
          }
        },
        "manual_files": [
          {
            "driveFileId": 0,
            "isProofread": true,
            "isTranslated": true,
            "language": "string",
            "proofreadingFileId": 0,
            "translationFileId": 0
          }
        ],
        "name": "string",
        "project_id": 0,
        "review_in_manual_editor": true,
        "scheme": {},
        "search_score": 0,
        "source_language": "string",
        "subject": "string",
        "target_languages": [
          "string"
        ],
        "uploaded_at": 0,
        "word_count": 0,
        "search_result_reason": "string"
      }
    ],
    "projects": [
      {
        "average_scores": {
          "property1": 0,
          "property2": 0
        },
        "budget_code": "string",
        "callback_url": "string",
        "can_pam_manage": true,
        "client": {
          "billing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string",
            "name": ""
          },
          "birthday": "1970-01-01",
          "can_work_manual_files": true,
          "city": "string",
          "client": {
            "corporate": {
              "email": "string",
              "id": 0,
              "logo": "string",
              "name": "string",
              "phone_number": "string"
            },
            "nps": 0,
            "subjects": {
              "property1": 0,
              "property2": 0
            }
          },
          "corporate_id": 0,
          "country": "string",
          "created_at": 0,
          "do_not_contact": true,
          "email": "string",
          "first_name": "string",
          "has_pwd": true,
          "id": 0,
          "is_client": true,
          "is_developer": true,
          "is_proofreader": true,
          "is_prospect": true,
          "is_sales_person": true,
          "is_vendor": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "last_name": "string",
          "last_seen_online_at": 0,
          "links": {
            "self": {
              "href": "string"
            },
            "login_as": {
              "href": "string"
            },
            "projects": {
              "href": "string"
            },
            "responsivity": {
              "href": "string"
            },
            "stats": {
              "href": "string"
            }
          },
          "locale": "string",
          "mailing": {
            "city": "string",
            "country": "string",
            "phone": "string",
            "state": "string",
            "street": "string",
            "zip": "string"
          },
          "name": "string",
          "native_language": "string",
          "nps": 0,
          "phone_number": "string",
          "profile_picture_path": "string",
          "social_media": {
            "facebook_url": "string",
            "linkedIn_url": "string",
            "twitter_url": "string"
          },
          "state": "string",
          "status": "string",
          "street": "string",
          "timezone": "string",
          "tms_user_name": "string",
          "user_groups": [
            {
              "corporate_id": 0,
              "id": 0,
              "name": "string",
              "permissions": [
                "string"
              ]
            }
          ],
          "vendor": {
            "can_work_manual_files": true,
            "email_open_rate": 0,
            "is_frozen": true,
            "is_proofreader": true,
            "language_pairs": [
              {
                "source_language": "string",
                "target_language": "string"
              }
            ],
            "native_language": "string",
            "pam_tqs": 0,
            "paypal_email": "string",
            "profile_survey": {
              "current_services": "string",
              "daily_proofreading_capacity": "string",
              "daily_translation_capacity": "string",
              "dtp_software": "string",
              "experience": "string",
              "is_certified_translator": "string",
              "is_sworn_translator": "string",
              "memoq": "string",
              "memsource": "string",
              "omegat": "string",
              "proofreader_experience": "string",
              "provides_creative_writing_service": "string",
              "provides_postedit_service": "string",
              "reference": "string",
              "sdl_trados": "string",
              "skype_id": "string",
              "smartcat": "string",
              "smartling": "string",
              "software": "string",
              "specialization": "string",
              "subtitle_edit": "string",
              "subtitle_workshop": "string",
              "translator_association": "string",
              "transsuite_2000": "string",
              "vendor_profile_lsp": "string",
              "wordbee": "string",
              "wordfast": "string",
              "work_type": "string",
              "work_with": "string",
              "working_as": "string",
              "working_timezone": "string",
              "xbench": "string",
              "xtm": "string"
            },
            "require_1099": true,
            "tags": [
              "string"
            ],
            "tms_user_name": "string",
            "vendor_type": "string"
          },
          "zip_code": "string"
        },
        "cm_id": 0,
        "completed_on": "1970-01-01T00:00:00Z",
        "continuous_project_type": "string",
        "created_at": 0,
        "custom": {},
        "delivery_at": 0,
        "errors": [
          {
            "code": "string",
            "help": "string",
            "http_code": 0,
            "message": "string"
          }
        ],
        "id": 0,
        "is_api_project": true,
        "is_certified": true,
        "is_continuous": true,
        "is_manual": true,
        "links": {
          "self": {
            "href": "string"
          },
          "documents": {
            "href": "string"
          },
          "glossaries": {
            "href": "string"
          },
          "payment": {
            "href": "string"
          },
          "quote-pdf": {
            "href": "string"
          },
          "styleguides": {
            "href": "string"
          }
        },
        "pairs": [
          {
            "currency": "usd",
            "is_proofreader": true,
            "proofreader": {
              "billing": {
                "city": "string",
                "country": "string",
                "phone": "string",
                "state": "string",
                "street": "string",
                "zip": "string",
                "name": ""
              },
              "birthday": "1970-01-01",
              "can_work_manual_files": true,
              "city": "string",
              "client": {
                "corporate": {
                  "email": "string",
                  "id": 0,
                  "logo": "string",
                  "name": "string",
                  "phone_number": "string"
                },
                "nps": 0,
                "subjects": {
                  "property1": 0,
                  "property2": 0
                }
              },
              "corporate_id": 0,
              "country": "string",
              "created_at": 0,
              "do_not_contact": true,
              "email": "string",
              "first_name": "string",
              "has_pwd": true,
              "id": 0,
              "is_client": true,
              "is_developer": true,
              "is_proofreader": true,
              "is_prospect": true,
              "is_sales_person": true,
              "is_vendor": true,
              "language_pairs": [
                {
                  "source_language": "string",
                  "target_language": "string"
                }
              ],
              "last_name": "string",
              "last_seen_online_at": 0,
              "links": {
                "self": {
                  "href": "string"
                },
                "login_as": {
                  "href": "string"
                },
                "projects": {
                  "href": "string"
                },
                "responsivity": {
                  "href": "string"
                },
                "stats": {
                  "href": "string"
                }
              },
              "locale": "string",
              "mailing": {
                "city": "string",
                "country": "string",
                "phone": "string",
                "state": "string",
                "street": "string",
                "zip": "string"
              },
              "name": "string",
              "native_language": "string",
              "nps": 0,
              "phone_number": "string",
              "profile_picture_path": "string",
              "social_media": {
                "facebook_url": "string",
                "linkedIn_url": "string",
                "twitter_url": "string"
              },
              "state": "string",
              "status": "string",
              "street": "string",
              "timezone": "string",
              "tms_user_name": "string",
              "user_groups": [
                {
                  "corporate_id": 0,
                  "id": 0,
                  "name": "string",
                  "permissions": [
                    "string"
                  ]
                }
              ],
              "vendor": {
                "can_work_manual_files": true,
                "email_open_rate": 0,
                "is_frozen": true,
                "is_proofreader": true,
                "language_pairs": [
                  {
                    "source_language": "string",
                    "target_language": "string"
                  }
                ],
                "native_language": "string",
                "pam_tqs": 0,
                "paypal_email": "string",
                "profile_survey": {
                  "current_services": "string",
                  "daily_proofreading_capacity": "string",
                  "daily_translation_capacity": "string",
                  "dtp_software": "string",
                  "experience": "string",
                  "is_certified_translator": "string",
                  "is_sworn_translator": "string",
                  "memoq": "string",
                  "memsource": "string",
                  "omegat": "string",
                  "proofreader_experience": "string",
                  "provides_creative_writing_service": "string",
                  "provides_postedit_service": "string",
                  "reference": "string",
                  "sdl_trados": "string",
                  "skype_id": "string",
                  "smartcat": "string",
                  "smartling": "string",
                  "software": "string",
                  "specialization": "string",
                  "subtitle_edit": "string",
                  "subtitle_workshop": "string",
                  "translator_association": "string",
                  "transsuite_2000": "string",
                  "vendor_profile_lsp": "string",
                  "wordbee": "string",
                  "wordfast": "string",
                  "work_type": "string",
                  "work_with": "string",
                  "working_as": "string",
                  "working_timezone": "string",
                  "xbench": "string",
                  "xtm": "string"
                },
                "require_1099": true,
                "tags": [
                  "string"
                ],
                "tms_user_name": "string",
                "vendor_type": "string"
              },
              "zip_code": "string"
            },
            "proofreading_rate": 0,
            "source_language": "string",
            "target_language": "string",
            "translation_rate": 0
          }
        ],
        "pivoted_projects": [
          0
        ],
        "price": {
          "amount": 0,
          "base_amount": 0,
          "base_currency": "usd",
          "currency": "usd",
          "usd_amount": 0
        },
        "price_without_discount": {
          "amount": 0,
          "base_amount": 0,
          "base_currency": "usd",
          "currency": "usd",
          "usd_amount": 0
        },
        "role": "translator",
        "should_send_client_survey": true,
        "source": "api",
        "source_language": "string",
        "status": "pending",
        "subjects": [
          "string"
        ],
        "target_languages": [
          "string"
        ],
        "tms_name": "string",
        "valid_until": 0,
        "vendor_word_count": 0,
        "word_count": 0,
        "word_count_analysis": {
          "base": 0,
          "duplicate": 0,
          "exclusion": 0,
          "final": 0,
          "tm": 0
        },
        "search_result_reason": "string"
      }
    ],
    "strings": [
      {
        "file_id": 0,
        "internal_project_id": 0,
        "last_updated": "1970-01-01T00:00:00Z",
        "project_id": 0,
        "search_score": 0,
        "source": "string",
        "status": "Approved",
        "string_id": 0,
        "target": "string",
        "targets": [
          "string"
        ],
        "tm_name": "string",
        "type": "LOCAL_PROJECT"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|result|object|false|none|none|

<h2 id="tocS_SimpleModel">SimpleModel</h2>
<!-- backwards compatibility -->
<a id="schemasimplemodel"></a>
<a id="schema_SimpleModel"></a>
<a id="tocSsimplemodel"></a>
<a id="tocssimplemodel"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_SingleString">SingleString</h2>
<!-- backwards compatibility -->
<a id="schemasinglestring"></a>
<a id="schema_SingleString"></a>
<a id="tocSsinglestring"></a>
<a id="tocssinglestring"></a>

```json
{
  "content": "string",
  "file_id": 0,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|source string content|
|file_id|integer(int64)|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_SocialMedia">SocialMedia</h2>
<!-- backwards compatibility -->
<a id="schemasocialmedia"></a>
<a id="schema_SocialMedia"></a>
<a id="tocSsocialmedia"></a>
<a id="tocssocialmedia"></a>

```json
{
  "facebook_url": "string",
  "linkedIn_url": "string",
  "twitter_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facebook_url|string|false|none|none|
|linkedIn_url|string|false|none|none|
|twitter_url|string|false|none|none|

<h2 id="tocS_Stats">Stats</h2>
<!-- backwards compatibility -->
<a id="schemastats"></a>
<a id="schema_Stats"></a>
<a id="tocSstats"></a>
<a id="tocsstats"></a>

```json
{
  "client": {
    "document_count": 0,
    "nps": 0,
    "started_project_count": 0,
    "total_discounted": {
      "amount": 0,
      "currency": "usd"
    },
    "total_project_count": 0,
    "total_spending": 0,
    "translator_count": 0
  },
  "vendor": {
    "earnings": {
      "total": 0
    },
    "projects": {
      "invited": 0,
      "total": 0,
      "worked": 0
    },
    "words": {
      "approved": 0,
      "translated": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|[ClientStats](#schemaclientstats)|false|none|none|
|vendor|[VendorStats](#schemavendorstats)|false|none|none|

<h2 id="tocS_StringInSearch">StringInSearch</h2>
<!-- backwards compatibility -->
<a id="schemastringinsearch"></a>
<a id="schema_StringInSearch"></a>
<a id="tocSstringinsearch"></a>
<a id="tocsstringinsearch"></a>

```json
{
  "file_id": 0,
  "internal_project_id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "project_id": 0,
  "search_score": 0,
  "source": "string",
  "status": "Approved",
  "string_id": 0,
  "target": "string",
  "targets": [
    "string"
  ],
  "tm_name": "string",
  "type": "LOCAL_PROJECT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|integer(int64)|false|none|none|
|internal_project_id|integer(int64)|false|none|none|
|last_updated|string(date-time)|false|none|the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z|
|project_id|integer(int64)|false|none|none|
|search_score|number(float)|false|none|none|
|source|string|false|none|none|
|status|[StringTranslationState](#schemastringtranslationstate)|false|none|none|
|string_id|integer(int64)|false|none|none|
|target|string|false|none|none|
|targets|[string]|false|none|none|
|tm_name|string|false|none|none|
|type|string|false|none|String search result typ from ZNT. Options are LOCAL_PROJECT, IMPORTED_TM. Imported TM results should probably not be visible to end users.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Approved|
|status|Translated|
|type|LOCAL_PROJECT|
|type|IMPORTED_TM|

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "translations": [
    {
      "content": "string",
      "file_id": 0,
      "id": "string",
      "translations": {
        "property1": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        },
        "property2": {
          "content": "string",
          "id": "string",
          "state": "Approved"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|translations|[[StringWithTranslations](#schemastringwithtranslations)]|false|none|none|

<h2 id="tocS_StringTranslation">StringTranslation</h2>
<!-- backwards compatibility -->
<a id="schemastringtranslation"></a>
<a id="schema_StringTranslation"></a>
<a id="tocSstringtranslation"></a>
<a id="tocsstringtranslation"></a>

```json
{
  "content": "string",
  "id": "string",
  "state": "Approved"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|source string content|
|id|string|false|none|none|
|state|[StringTranslationState](#schemastringtranslationstate)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|Approved|
|state|Translated|

<h2 id="tocS_StringTranslationState">StringTranslationState</h2>
<!-- backwards compatibility -->
<a id="schemastringtranslationstate"></a>
<a id="schema_StringTranslationState"></a>
<a id="tocSstringtranslationstate"></a>
<a id="tocsstringtranslationstate"></a>

```json
"Approved"
```

<h2 id="tocS_StringWithTranslations">StringWithTranslations</h2>
<!-- backwards compatibility -->
<a id="schemastringwithtranslations"></a>
<a id="schema_StringWithTranslations"></a>
<a id="tocSstringwithtranslations"></a>
<a id="tocsstringwithtranslations"></a>

```json
{
  "content": "string",
  "file_id": 0,
  "id": "string",
  "translations": {
    "property1": {
      "content": "string",
      "id": "string",
      "state": "Approved"
    },
    "property2": {
      "content": "string",
      "id": "string",
      "state": "Approved"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|source string content|
|file_id|integer(int64)|false|none|none|
|id|string|false|none|none|
|translations|object|false|none|none|

<h2 id="tocS_StyleGuide">StyleGuide</h2>
<!-- backwards compatibility -->
<a id="schemastyleguide"></a>
<a id="schema_StyleGuide"></a>
<a id="tocSstyleguide"></a>
<a id="tocsstyleguide"></a>

```json
{
  "id": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "admins": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "download": {
      "href": "string"
    },
    "editors": {
      "property1": {
        "href": "string"
      },
      "property2": {
        "href": "string"
      }
    },
    "preview-box": {
      "href": "string"
    },
    "preview-pdf": {
      "href": "string"
    },
    "preview-pdf-viewer": {
      "href": "string"
    },
    "progress": {
      "href": "string"
    },
    "project": {
      "href": "string"
    },
    "strings": {
      "href": "string"
    },
    "thumbnail": {
      "href": "string"
    }
  },
  "name": "string",
  "uploaded_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|links|[DocumentLinks](#schemadocumentlinks)|false|none|none|
|name|string|false|none|none|
|uploaded_at|integer(int64)|false|none|Unix epoch time|

<h2 id="tocS_StyleGuideList">StyleGuideList</h2>
<!-- backwards compatibility -->
<a id="schemastyleguidelist"></a>
<a id="schema_StyleGuideList"></a>
<a id="tocSstyleguidelist"></a>
<a id="tocsstyleguidelist"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "styleguides": [
    {
      "id": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "admins": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "download": {
          "href": "string"
        },
        "editors": {
          "property1": {
            "href": "string"
          },
          "property2": {
            "href": "string"
          }
        },
        "preview-box": {
          "href": "string"
        },
        "preview-pdf": {
          "href": "string"
        },
        "preview-pdf-viewer": {
          "href": "string"
        },
        "progress": {
          "href": "string"
        },
        "project": {
          "href": "string"
        },
        "strings": {
          "href": "string"
        },
        "thumbnail": {
          "href": "string"
        }
      },
      "name": "string",
      "uploaded_at": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|styleguides|[[StyleGuide](#schemastyleguide)]|false|none|none|

<h2 id="tocS_StyleGuideUploadRequest">StyleGuideUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemastyleguideuploadrequest"></a>
<a id="schema_StyleGuideUploadRequest"></a>
<a id="tocSstyleguideuploadrequest"></a>
<a id="tocsstyleguideuploadrequest"></a>

```json
{
  "styleguides": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|styleguides|string(binary)|true|none|You can only add one style guide, even though the name suggests multiple style guides. This may be updated in the future to support multiple style guides.|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "downgrade": [
    "string"
  ],
  "payment_method": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "plan_id": "string",
  "plan_name": "string",
  "price": "string",
  "products": [
    null
  ],
  "schedule_name": "string",
  "schedule_start": "1970-01-01T00:00:00Z",
  "subscription_id": "string",
  "upgrade": [
    "string"
  ],
  "withTrial": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downgrade|[string]|false|none|Stripe downgradable plan|
|payment_method|integer|false|none|Stripe subscription plan payment card internal id|
|period_end|string(date-time)|false|none|Stripe plan period end|
|plan_id|string|false|none|Stripe subscription plan id|
|plan_name|string|false|none|Stripe subscription plan name|
|price|string|false|none|Stripe plan price|
|products|[object]|false|none|none|
|schedule_name|string|false|none|Stripe Scheduled plan period end|
|schedule_start|string(date-time)|false|none|Stripe Scheduled start date|
|subscription_id|string|false|none|Stripe subscription id for this project|
|upgrade|[string]|false|none|Stripe upgradable plan|
|withTrial|object(boolean)|false|none|Stripe plan trial|

<h2 id="tocS_SurveyAnswer">SurveyAnswer</h2>
<!-- backwards compatibility -->
<a id="schemasurveyanswer"></a>
<a id="schema_SurveyAnswer"></a>
<a id="tocSsurveyanswer"></a>
<a id="tocssurveyanswer"></a>

```json
{
  "answer": "string",
  "project_id": 0,
  "question_answer_id": 0,
  "question_id": 0,
  "user_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|false|none|none|
|project_id|integer(int64)|false|none|none|
|question_answer_id|integer(int64)|false|none|none|
|question_id|integer(int64)|false|none|none|
|user_id|integer(int64)|false|none|none|

<h2 id="tocS_SurveyAnswers">SurveyAnswers</h2>
<!-- backwards compatibility -->
<a id="schemasurveyanswers"></a>
<a id="schema_SurveyAnswers"></a>
<a id="tocSsurveyanswers"></a>
<a id="tocssurveyanswers"></a>

```json
{
  "answers": [
    {
      "answer": "string",
      "project_id": 0,
      "question_answer_id": 0,
      "question_id": 0,
      "user_id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers|[[SurveyAnswer](#schemasurveyanswer)]|false|none|none|

<h2 id="tocS_SurveyQuestion">SurveyQuestion</h2>
<!-- backwards compatibility -->
<a id="schemasurveyquestion"></a>
<a id="schema_SurveyQuestion"></a>
<a id="tocSsurveyquestion"></a>
<a id="tocssurveyquestion"></a>

```json
{
  "answers": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "question": {
    "enabled": true,
    "format": "string",
    "id": 0,
    "question": "string",
    "text": "string"
  },
  "question_answers": [
    {
      "id": 0,
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers|[[SimpleModel](#schemasimplemodel)]|false|none|none|
|question|object|false|none|none|
|question_answers|[[SimpleModel](#schemasimplemodel)]|false|none|none|

<h2 id="tocS_SurveyQuestions">SurveyQuestions</h2>
<!-- backwards compatibility -->
<a id="schemasurveyquestions"></a>
<a id="schema_SurveyQuestions"></a>
<a id="tocSsurveyquestions"></a>
<a id="tocssurveyquestions"></a>

```json
[
  {
    "answers": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "question": {
      "enabled": true,
      "format": "string",
      "id": 0,
      "question": "string",
      "text": "string"
    },
    "question_answers": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  }
]
```

<h2 id="tocS_SuspendUserRequest">SuspendUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemasuspenduserrequest"></a>
<a id="schema_SuspendUserRequest"></a>
<a id="tocSsuspenduserrequest"></a>
<a id="tocssuspenduserrequest"></a>

```json
{
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Suspension reason for vendor|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
"string"
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "access_token": "string",
  "expires_in": 0,
  "refresh_token": "string",
  "scope": "string",
  "token_type": "string",
  "user_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|none|
|expires_in|integer(int64)|false|none|none|
|refresh_token|string|false|none|none|
|scope|string|false|none|none|
|token_type|string|false|none|none|
|user_id|integer(int64)|false|none|none|

<h2 id="tocS_TokenError">TokenError</h2>
<!-- backwards compatibility -->
<a id="schematokenerror"></a>
<a id="schema_TokenError"></a>
<a id="tocStokenerror"></a>
<a id="tocstokenerror"></a>

```json
{
  "code": "string",
  "help": "string",
  "http_code": 0,
  "message": "string",
  "account_status": "registered"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|help|string|false|none|none|
|http_code|integer(int32)|false|none|none|
|message|string|false|none|none|
|account_status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|account_status|registered|
|account_status|email_confirmed|
|account_status|deleted|
|account_status|suspended|
|account_status|rejected|
|account_status|approved|
|account_status|resume|
|account_status|webinar|
|account_status|course|

<h2 id="tocS_TokenRequest">TokenRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenrequest"></a>
<a id="schema_TokenRequest"></a>
<a id="tocStokenrequest"></a>
<a id="tocstokenrequest"></a>

```json
{
  "grant_type": "string",
  "password": "string",
  "refresh_token": "string",
  "scope": "string",
  "user_id": 0,
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|true|none|OAuth2 grant type. Supports 'client_credentials', 'password', 'refresh_token' or 'user_id'.|
|password|string|false|none|MW Account password (to be used in password grant type)|
|refresh_token|string|false|none|Refresh token value for refresh token flow.|
|scope|string|true|none|Authorization scope. Use 'privileged' for private endpoints.|
|user_id|integer(int64)|false|none|Value for user_id grant type flow.|
|username|string|false|none|MW Account email (to be used in password grant type)|

<h2 id="tocS_TranslationMemoryUnit">TranslationMemoryUnit</h2>
<!-- backwards compatibility -->
<a id="schematranslationmemoryunit"></a>
<a id="schema_TranslationMemoryUnit"></a>
<a id="tocStranslationmemoryunit"></a>
<a id="tocstranslationmemoryunit"></a>

```json
{
  "sourceLanguage": "string",
  "sourceText": "string",
  "targetLanguage": "string",
  "targetText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceLanguage|string|false|none|none|
|sourceText|string|false|none|none|
|targetLanguage|string|false|none|none|
|targetText|string|false|none|none|

<h2 id="tocS_UpdatePaymentInfo">UpdatePaymentInfo</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepaymentinfo"></a>
<a id="schema_UpdatePaymentInfo"></a>
<a id="tocSupdatepaymentinfo"></a>
<a id="tocsupdatepaymentinfo"></a>

```json
{
  "city": "string",
  "country": "string",
  "phone": "string",
  "state": "string",
  "street": "string",
  "zip": "string",
  "bin": "string",
  "save_as_corporate_primary": true,
  "share_with_corporate_users": true,
  "stripeToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|country|string|false|none|none|
|phone|string|false|none|none|
|state|string|false|none|none|
|street|string|false|none|none|
|zip|string|false|none|none|
|bin|string|false|none|none|
|save_as_corporate_primary|boolean|false|none|none|
|share_with_corporate_users|boolean|false|none|none|
|stripeToken|string|false|none|none|

<h2 id="tocS_UseAsDraftPayload">UseAsDraftPayload</h2>
<!-- backwards compatibility -->
<a id="schemauseasdraftpayload"></a>
<a id="schema_UseAsDraftPayload"></a>
<a id="tocSuseasdraftpayload"></a>
<a id="tocsuseasdraftpayload"></a>

```json
{
  "fromFileId": 0,
  "fromManualTranslationFileId": 0,
  "toManualTranslationFileId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromFileId|number|false|none|none|
|fromManualTranslationFileId|number|false|none|none|
|toManualTranslationFileId|number|false|none|none|

<h2 id="tocS_UseAsRegularPayload">UseAsRegularPayload</h2>
<!-- backwards compatibility -->
<a id="schemauseasregularpayload"></a>
<a id="schema_UseAsRegularPayload"></a>
<a id="tocSuseasregularpayload"></a>
<a id="tocsuseasregularpayload"></a>

```json
{
  "allowOriginalFilePreview": true,
  "allowReviewInManualEditor": true,
  "disableInvitations": true,
  "fromManualTranslationFileId": 0,
  "hideNumbers": true,
  "recreate": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowOriginalFilePreview|boolean|false|none|none|
|allowReviewInManualEditor|boolean|false|none|none|
|disableInvitations|boolean|false|none|none|
|fromManualTranslationFileId|number|false|none|none|
|hideNumbers|boolean|false|none|none|
|recreate|boolean|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "billing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string",
    "name": ""
  },
  "birthday": "1970-01-01",
  "can_work_manual_files": true,
  "city": "string",
  "client": {
    "corporate": {
      "email": "string",
      "id": 0,
      "logo": "string",
      "name": "string",
      "phone_number": "string"
    },
    "nps": 0,
    "subjects": {
      "property1": 0,
      "property2": 0
    }
  },
  "corporate_id": 0,
  "country": "string",
  "created_at": 0,
  "do_not_contact": true,
  "email": "string",
  "first_name": "string",
  "has_pwd": true,
  "id": 0,
  "is_client": true,
  "is_developer": true,
  "is_proofreader": true,
  "is_prospect": true,
  "is_sales_person": true,
  "is_vendor": true,
  "language_pairs": [
    {
      "source_language": "string",
      "target_language": "string"
    }
  ],
  "last_name": "string",
  "last_seen_online_at": 0,
  "links": {
    "self": {
      "href": "string"
    },
    "login_as": {
      "href": "string"
    },
    "projects": {
      "href": "string"
    },
    "responsivity": {
      "href": "string"
    },
    "stats": {
      "href": "string"
    }
  },
  "locale": "string",
  "mailing": {
    "city": "string",
    "country": "string",
    "phone": "string",
    "state": "string",
    "street": "string",
    "zip": "string"
  },
  "name": "string",
  "native_language": "string",
  "nps": 0,
  "phone_number": "string",
  "profile_picture_path": "string",
  "social_media": {
    "facebook_url": "string",
    "linkedIn_url": "string",
    "twitter_url": "string"
  },
  "state": "string",
  "status": "string",
  "street": "string",
  "timezone": "string",
  "tms_user_name": "string",
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ],
  "vendor": {
    "can_work_manual_files": true,
    "email_open_rate": 0,
    "is_frozen": true,
    "is_proofreader": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "native_language": "string",
    "pam_tqs": 0,
    "paypal_email": "string",
    "profile_survey": {
      "current_services": "string",
      "daily_proofreading_capacity": "string",
      "daily_translation_capacity": "string",
      "dtp_software": "string",
      "experience": "string",
      "is_certified_translator": "string",
      "is_sworn_translator": "string",
      "memoq": "string",
      "memsource": "string",
      "omegat": "string",
      "proofreader_experience": "string",
      "provides_creative_writing_service": "string",
      "provides_postedit_service": "string",
      "reference": "string",
      "sdl_trados": "string",
      "skype_id": "string",
      "smartcat": "string",
      "smartling": "string",
      "software": "string",
      "specialization": "string",
      "subtitle_edit": "string",
      "subtitle_workshop": "string",
      "translator_association": "string",
      "transsuite_2000": "string",
      "vendor_profile_lsp": "string",
      "wordbee": "string",
      "wordfast": "string",
      "work_type": "string",
      "work_with": "string",
      "working_as": "string",
      "working_timezone": "string",
      "xbench": "string",
      "xtm": "string"
    },
    "require_1099": true,
    "tags": [
      "string"
    ],
    "tms_user_name": "string",
    "vendor_type": "string"
  },
  "zip_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing|[BillingAddress](#schemabillingaddress)|false|none|none|
|birthday|string(date)|false|none|none|
|can_work_manual_files|boolean|false|none|**Deprecated.** \@deprecated. use `vendor` key|
|city|string|false|none|**Deprecated.** \@deprecated. use mailing or billing key.|
|client|object|false|none|none|
|corporate_id|integer(int64)|false|none|none|
|country|string|false|none|**Deprecated.** \@deprecated. use mailing or billing key.|
|created_at|integer(int64)|false|none|Unix epoch time|
|do_not_contact|boolean|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|has_pwd|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|is_client|boolean|false|none|none|
|is_developer|boolean|false|none|none|
|is_proofreader|boolean|false|none|**Deprecated.** \@deprecated. use `vendor` key|
|is_prospect|boolean|false|none|none|
|is_sales_person|boolean|false|none|none|
|is_vendor|boolean|false|none|none|
|language_pairs|[[LanguagePair](#schemalanguagepair)]|false|none|**Deprecated.** \@deprecated. use `vendor` key|
|last_name|string|false|none|none|
|last_seen_online_at|integer(int64)|false|none|Unix epoch time|
|links|[UserLinks](#schemauserlinks)|false|none|none|
|locale|string|false|none|User Locale|
|mailing|[Address](#schemaaddress)|false|none|none|
|name|string|false|none|none|
|native_language|string|false|none|**Deprecated.** \@deprecated. Native language of user|
|nps|number(float)|false|none|**Deprecated.** \@deprecated. use /stats endpoint for the current nps value.|
|phone_number|string|false|none|none|
|profile_picture_path|string|false|none|none|
|social_media|[SocialMedia](#schemasocialmedia)|false|none|none|
|state|string|false|none|**Deprecated.** \@deprecated. use mailing or billing key.|
|status|string|false|none|none|
|street|string|false|none|**Deprecated.** \@deprecated. use mailing or billing key.|
|timezone|string|false|none|none|
|tms_user_name|string|false|none|**Deprecated.** \@deprecated. use `vendor` key|
|user_groups|[[UserGroup](#schemausergroup)]|false|none|none|
|vendor|object|false|none|none|
|zip_code|string|false|none|**Deprecated.** \@deprecated. use mailing or billing key. new key name is "zip".|

<h2 id="tocS_UserGroup">UserGroup</h2>
<!-- backwards compatibility -->
<a id="schemausergroup"></a>
<a id="schema_UserGroup"></a>
<a id="tocSusergroup"></a>
<a id="tocsusergroup"></a>

```json
{
  "corporate_id": 0,
  "id": 0,
  "name": "string",
  "permissions": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corporate_id|integer(int64)|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|permissions|[string]|false|none|none|

<h2 id="tocS_UserGroupList">UserGroupList</h2>
<!-- backwards compatibility -->
<a id="schemausergrouplist"></a>
<a id="schema_UserGroupList"></a>
<a id="tocSusergrouplist"></a>
<a id="tocsusergrouplist"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "user_groups": [
    {
      "corporate_id": 0,
      "id": 0,
      "name": "string",
      "permissions": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|user_groups|[[UserGroup](#schemausergroup)]|false|none|none|

<h2 id="tocS_UserLinks">UserLinks</h2>
<!-- backwards compatibility -->
<a id="schemauserlinks"></a>
<a id="schema_UserLinks"></a>
<a id="tocSuserlinks"></a>
<a id="tocsuserlinks"></a>

```json
{
  "self": {
    "href": "string"
  },
  "login_as": {
    "href": "string"
  },
  "projects": {
    "href": "string"
  },
  "responsivity": {
    "href": "string"
  },
  "stats": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[Href](#schemahref)|false|none|none|
|login_as|[Href](#schemahref)|false|none|Exculusive users only|
|projects|[Href](#schemahref)|false|none|client users only|
|responsivity|[Href](#schemahref)|false|none|vendor users only|
|stats|[Href](#schemahref)|false|none|none|

<h2 id="tocS_UserList">UserList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_UserList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "users": [
    {
      "billing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string",
        "name": ""
      },
      "birthday": "1970-01-01",
      "can_work_manual_files": true,
      "city": "string",
      "client": {
        "corporate": {
          "email": "string",
          "id": 0,
          "logo": "string",
          "name": "string",
          "phone_number": "string"
        },
        "nps": 0,
        "subjects": {
          "property1": 0,
          "property2": 0
        }
      },
      "corporate_id": 0,
      "country": "string",
      "created_at": 0,
      "do_not_contact": true,
      "email": "string",
      "first_name": "string",
      "has_pwd": true,
      "id": 0,
      "is_client": true,
      "is_developer": true,
      "is_proofreader": true,
      "is_prospect": true,
      "is_sales_person": true,
      "is_vendor": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "last_name": "string",
      "last_seen_online_at": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "login_as": {
          "href": "string"
        },
        "projects": {
          "href": "string"
        },
        "responsivity": {
          "href": "string"
        },
        "stats": {
          "href": "string"
        }
      },
      "locale": "string",
      "mailing": {
        "city": "string",
        "country": "string",
        "phone": "string",
        "state": "string",
        "street": "string",
        "zip": "string"
      },
      "name": "string",
      "native_language": "string",
      "nps": 0,
      "phone_number": "string",
      "profile_picture_path": "string",
      "social_media": {
        "facebook_url": "string",
        "linkedIn_url": "string",
        "twitter_url": "string"
      },
      "state": "string",
      "status": "string",
      "street": "string",
      "timezone": "string",
      "tms_user_name": "string",
      "user_groups": [
        {
          "corporate_id": 0,
          "id": 0,
          "name": "string",
          "permissions": [
            "string"
          ]
        }
      ],
      "vendor": {
        "can_work_manual_files": true,
        "email_open_rate": 0,
        "is_frozen": true,
        "is_proofreader": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "native_language": "string",
        "pam_tqs": 0,
        "paypal_email": "string",
        "profile_survey": {
          "current_services": "string",
          "daily_proofreading_capacity": "string",
          "daily_translation_capacity": "string",
          "dtp_software": "string",
          "experience": "string",
          "is_certified_translator": "string",
          "is_sworn_translator": "string",
          "memoq": "string",
          "memsource": "string",
          "omegat": "string",
          "proofreader_experience": "string",
          "provides_creative_writing_service": "string",
          "provides_postedit_service": "string",
          "reference": "string",
          "sdl_trados": "string",
          "skype_id": "string",
          "smartcat": "string",
          "smartling": "string",
          "software": "string",
          "specialization": "string",
          "subtitle_edit": "string",
          "subtitle_workshop": "string",
          "translator_association": "string",
          "transsuite_2000": "string",
          "vendor_profile_lsp": "string",
          "wordbee": "string",
          "wordfast": "string",
          "work_type": "string",
          "work_with": "string",
          "working_as": "string",
          "working_timezone": "string",
          "xbench": "string",
          "xtm": "string"
        },
        "require_1099": true,
        "tags": [
          "string"
        ],
        "tms_user_name": "string",
        "vendor_type": "string"
      },
      "zip_code": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|users|[[User](#schemauser)]|false|none|none|

<h2 id="tocS_UserUpdateContent">UserUpdateContent</h2>
<!-- backwards compatibility -->
<a id="schemauserupdatecontent"></a>
<a id="schema_UserUpdateContent"></a>
<a id="tocSuserupdatecontent"></a>
<a id="tocsuserupdatecontent"></a>

```json
{
  "city": "string",
  "country": "string",
  "phone": "string",
  "state": "string",
  "street": "string",
  "zip": "string",
  "birthday": "1970-01-01",
  "email": "string",
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "notifications": {
    "phone_number": "string",
    "sms_enabled": true
  },
  "notify": true,
  "paypal_email": "string",
  "require_1099": true,
  "user_groups": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|country|string|false|none|none|
|phone|string|false|none|none|
|state|string|false|none|none|
|street|string|false|none|none|
|zip|string|false|none|none|
|birthday|string(date)|false|none|none|
|email|string|false|none|Optional. User e-mail.|
|first_name|string|false|none|Optional. User first name.|
|id|integer(int64)|false|none|Optional. ID of the user being updated.|
|last_name|string|false|none|Optional. User last name.|
|notifications|object|false|none|Notification settings|
|notify|boolean|false|none|Notify new user account creation with login information and MotaWord introduction.|
|paypal_email|string|false|none|Optional. Vendor paypal e-mail|
|require_1099|boolean|false|none|Optional. Whether this vendor requires 1099 form in US for their earnings.|
|user_groups|[integer(int64)]|false|none|A list of user group IDs|

<h2 id="tocS_UsersReport">UsersReport</h2>
<!-- backwards compatibility -->
<a id="schemausersreport"></a>
<a id="schema_UsersReport"></a>
<a id="tocSusersreport"></a>
<a id="tocsusersreport"></a>

```json
{
  "meta": {
    "paging": {
      "count": 0,
      "links": {
        "self": {
          "href": "string"
        },
        "next": "string",
        "previous": "string"
      },
      "page": 1,
      "per_page": 10,
      "total_count": 0
    }
  },
  "report": [
    {
      "currency": "string",
      "spending": 0,
      "user": {
        "billing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string",
          "name": ""
        },
        "birthday": "1970-01-01",
        "can_work_manual_files": true,
        "city": "string",
        "client": {
          "corporate": {
            "email": "string",
            "id": 0,
            "logo": "string",
            "name": "string",
            "phone_number": "string"
          },
          "nps": 0,
          "subjects": {
            "property1": 0,
            "property2": 0
          }
        },
        "corporate_id": 0,
        "country": "string",
        "created_at": 0,
        "do_not_contact": true,
        "email": "string",
        "first_name": "string",
        "has_pwd": true,
        "id": 0,
        "is_client": true,
        "is_developer": true,
        "is_proofreader": true,
        "is_prospect": true,
        "is_sales_person": true,
        "is_vendor": true,
        "language_pairs": [
          {
            "source_language": "string",
            "target_language": "string"
          }
        ],
        "last_name": "string",
        "last_seen_online_at": 0,
        "links": {
          "self": {
            "href": "string"
          },
          "login_as": {
            "href": "string"
          },
          "projects": {
            "href": "string"
          },
          "responsivity": {
            "href": "string"
          },
          "stats": {
            "href": "string"
          }
        },
        "locale": "string",
        "mailing": {
          "city": "string",
          "country": "string",
          "phone": "string",
          "state": "string",
          "street": "string",
          "zip": "string"
        },
        "name": "string",
        "native_language": "string",
        "nps": 0,
        "phone_number": "string",
        "profile_picture_path": "string",
        "social_media": {
          "facebook_url": "string",
          "linkedIn_url": "string",
          "twitter_url": "string"
        },
        "state": "string",
        "status": "string",
        "street": "string",
        "timezone": "string",
        "tms_user_name": "string",
        "user_groups": [
          {
            "corporate_id": 0,
            "id": 0,
            "name": "string",
            "permissions": [
              "string"
            ]
          }
        ],
        "vendor": {
          "can_work_manual_files": true,
          "email_open_rate": 0,
          "is_frozen": true,
          "is_proofreader": true,
          "language_pairs": [
            {
              "source_language": "string",
              "target_language": "string"
            }
          ],
          "native_language": "string",
          "pam_tqs": 0,
          "paypal_email": "string",
          "profile_survey": {
            "current_services": "string",
            "daily_proofreading_capacity": "string",
            "daily_translation_capacity": "string",
            "dtp_software": "string",
            "experience": "string",
            "is_certified_translator": "string",
            "is_sworn_translator": "string",
            "memoq": "string",
            "memsource": "string",
            "omegat": "string",
            "proofreader_experience": "string",
            "provides_creative_writing_service": "string",
            "provides_postedit_service": "string",
            "reference": "string",
            "sdl_trados": "string",
            "skype_id": "string",
            "smartcat": "string",
            "smartling": "string",
            "software": "string",
            "specialization": "string",
            "subtitle_edit": "string",
            "subtitle_workshop": "string",
            "translator_association": "string",
            "transsuite_2000": "string",
            "vendor_profile_lsp": "string",
            "wordbee": "string",
            "wordfast": "string",
            "work_type": "string",
            "work_with": "string",
            "working_as": "string",
            "working_timezone": "string",
            "xbench": "string",
            "xtm": "string"
          },
          "require_1099": true,
          "tags": [
            "string"
          ],
          "tms_user_name": "string",
          "vendor_type": "string"
        },
        "zip_code": "string"
      },
      "word_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|[PagingMeta](#schemapagingmeta)|false|none|none|
|report|[object]|false|none|none|

<h2 id="tocS_VendorEarningStats">VendorEarningStats</h2>
<!-- backwards compatibility -->
<a id="schemavendorearningstats"></a>
<a id="schema_VendorEarningStats"></a>
<a id="tocSvendorearningstats"></a>
<a id="tocsvendorearningstats"></a>

```json
{
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number(float)|false|none|total amount of USD that this user has earned in the platform so far.|

<h2 id="tocS_VendorInvitationList">VendorInvitationList</h2>
<!-- backwards compatibility -->
<a id="schemavendorinvitationlist"></a>
<a id="schema_VendorInvitationList"></a>
<a id="tocSvendorinvitationlist"></a>
<a id="tocsvendorinvitationlist"></a>

```json
{
  "vendors": [
    {
      "matchedNeeds": [
        {
          "fileId": 0,
          "guid": "string",
          "projectId": 0,
          "reason": "string",
          "targetLanguage": [
            "string"
          ],
          "taskType": [
            "string"
          ]
        }
      ],
      "userId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vendors|[[VendorWithNeeds](#schemavendorwithneeds)]|false|none|none|

<h2 id="tocS_VendorProjectPair">VendorProjectPair</h2>
<!-- backwards compatibility -->
<a id="schemavendorprojectpair"></a>
<a id="schema_VendorProjectPair"></a>
<a id="tocSvendorprojectpair"></a>
<a id="tocsvendorprojectpair"></a>

```json
{
  "currency": "usd",
  "is_proofreader": true,
  "proofreader": {
    "billing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string",
      "name": ""
    },
    "birthday": "1970-01-01",
    "can_work_manual_files": true,
    "city": "string",
    "client": {
      "corporate": {
        "email": "string",
        "id": 0,
        "logo": "string",
        "name": "string",
        "phone_number": "string"
      },
      "nps": 0,
      "subjects": {
        "property1": 0,
        "property2": 0
      }
    },
    "corporate_id": 0,
    "country": "string",
    "created_at": 0,
    "do_not_contact": true,
    "email": "string",
    "first_name": "string",
    "has_pwd": true,
    "id": 0,
    "is_client": true,
    "is_developer": true,
    "is_proofreader": true,
    "is_prospect": true,
    "is_sales_person": true,
    "is_vendor": true,
    "language_pairs": [
      {
        "source_language": "string",
        "target_language": "string"
      }
    ],
    "last_name": "string",
    "last_seen_online_at": 0,
    "links": {
      "self": {
        "href": "string"
      },
      "login_as": {
        "href": "string"
      },
      "projects": {
        "href": "string"
      },
      "responsivity": {
        "href": "string"
      },
      "stats": {
        "href": "string"
      }
    },
    "locale": "string",
    "mailing": {
      "city": "string",
      "country": "string",
      "phone": "string",
      "state": "string",
      "street": "string",
      "zip": "string"
    },
    "name": "string",
    "native_language": "string",
    "nps": 0,
    "phone_number": "string",
    "profile_picture_path": "string",
    "social_media": {
      "facebook_url": "string",
      "linkedIn_url": "string",
      "twitter_url": "string"
    },
    "state": "string",
    "status": "string",
    "street": "string",
    "timezone": "string",
    "tms_user_name": "string",
    "user_groups": [
      {
        "corporate_id": 0,
        "id": 0,
        "name": "string",
        "permissions": [
          "string"
        ]
      }
    ],
    "vendor": {
      "can_work_manual_files": true,
      "email_open_rate": 0,
      "is_frozen": true,
      "is_proofreader": true,
      "language_pairs": [
        {
          "source_language": "string",
          "target_language": "string"
        }
      ],
      "native_language": "string",
      "pam_tqs": 0,
      "paypal_email": "string",
      "profile_survey": {
        "current_services": "string",
        "daily_proofreading_capacity": "string",
        "daily_translation_capacity": "string",
        "dtp_software": "string",
        "experience": "string",
        "is_certified_translator": "string",
        "is_sworn_translator": "string",
        "memoq": "string",
        "memsource": "string",
        "omegat": "string",
        "proofreader_experience": "string",
        "provides_creative_writing_service": "string",
        "provides_postedit_service": "string",
        "reference": "string",
        "sdl_trados": "string",
        "skype_id": "string",
        "smartcat": "string",
        "smartling": "string",
        "software": "string",
        "specialization": "string",
        "subtitle_edit": "string",
        "subtitle_workshop": "string",
        "translator_association": "string",
        "transsuite_2000": "string",
        "vendor_profile_lsp": "string",
        "wordbee": "string",
        "wordfast": "string",
        "work_type": "string",
        "work_with": "string",
        "working_as": "string",
        "working_timezone": "string",
        "xbench": "string",
        "xtm": "string"
      },
      "require_1099": true,
      "tags": [
        "string"
      ],
      "tms_user_name": "string",
      "vendor_type": "string"
    },
    "zip_code": "string"
  },
  "proofreading_rate": 0,
  "source_language": "string",
  "target_language": "string",
  "translation_rate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|is_proofreader|boolean|false|none|Indicates if the vendor be able to proofred this pair|
|proofreader|[User](#schemauser)|false|none|none|
|proofreading_rate|number(float)|false|none|none|
|source_language|string|false|none|Source language code|
|target_language|string|false|none|Target language code|
|translation_rate|number(float)|false|none|none|

<h2 id="tocS_VendorProjectRole">VendorProjectRole</h2>
<!-- backwards compatibility -->
<a id="schemavendorprojectrole"></a>
<a id="schema_VendorProjectRole"></a>
<a id="tocSvendorprojectrole"></a>
<a id="tocsvendorprojectrole"></a>

```json
"translator"
```

Currently authed vendor's role in this project. If vendor has already joined, this contains the role they joined the project with. If not joined yet, this is the role that they can join the project with.

<h2 id="tocS_VendorProjectStats">VendorProjectStats</h2>
<!-- backwards compatibility -->
<a id="schemavendorprojectstats"></a>
<a id="schema_VendorProjectStats"></a>
<a id="tocSvendorprojectstats"></a>
<a id="tocsvendorprojectstats"></a>

```json
{
  "invited": 0,
  "total": 0,
  "worked": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invited|integer(int64)|false|none|total number of projects that this user was invited to. TODO this key is to replace "total" key due to naming ambiguity.|
|total|integer(int64)|false|none|total number of projects that this user was invited to.|
|worked|integer(int64)|false|none|total number of projects that this user actually worked on.|

<h2 id="tocS_VendorStats">VendorStats</h2>
<!-- backwards compatibility -->
<a id="schemavendorstats"></a>
<a id="schema_VendorStats"></a>
<a id="tocSvendorstats"></a>
<a id="tocsvendorstats"></a>

```json
{
  "earnings": {
    "total": 0
  },
  "projects": {
    "invited": 0,
    "total": 0,
    "worked": 0
  },
  "words": {
    "approved": 0,
    "translated": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|earnings|[VendorEarningStats](#schemavendorearningstats)|false|none|none|
|projects|[VendorProjectStats](#schemavendorprojectstats)|false|none|none|
|words|[VendorWordStats](#schemavendorwordstats)|false|none|none|

<h2 id="tocS_VendorTag">VendorTag</h2>
<!-- backwards compatibility -->
<a id="schemavendortag"></a>
<a id="schema_VendorTag"></a>
<a id="tocSvendortag"></a>
<a id="tocsvendortag"></a>

```json
{
  "color": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_VendorWithNeeds">VendorWithNeeds</h2>
<!-- backwards compatibility -->
<a id="schemavendorwithneeds"></a>
<a id="schema_VendorWithNeeds"></a>
<a id="tocSvendorwithneeds"></a>
<a id="tocsvendorwithneeds"></a>

```json
{
  "matchedNeeds": [
    {
      "fileId": 0,
      "guid": "string",
      "projectId": 0,
      "reason": "string",
      "targetLanguage": [
        "string"
      ],
      "taskType": [
        "string"
      ]
    }
  ],
  "userId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchedNeeds|[[FileNeedsVendor](#schemafileneedsvendor)]|false|none|none|
|userId|integer(int64)|false|none|none|

<h2 id="tocS_VendorWordStats">VendorWordStats</h2>
<!-- backwards compatibility -->
<a id="schemavendorwordstats"></a>
<a id="schema_VendorWordStats"></a>
<a id="tocSvendorwordstats"></a>
<a id="tocsvendorwordstats"></a>

```json
{
  "approved": 0,
  "translated": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|integer(int64)|false|none|total number of words that this user has approved so far.|
|translated|integer(int64)|false|none|total number of words that this user has translated so far.|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "callback_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string|false|none|Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.|
