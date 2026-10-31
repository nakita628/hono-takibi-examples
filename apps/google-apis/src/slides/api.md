<h1 id="google-slides-api">Google Slides API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Reads and writes Google Slides presentations.

Base URLs:

* <a href="https://slides.googleapis.com/">https://slides.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/slides/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive|See, edit, create, and delete all of your Google Drive files|
|https://www.googleapis.com/auth/drive.file|See, edit, create, and delete only the specific Google Drive files you use with this app|
|https://www.googleapis.com/auth/drive.readonly|See and download all your Google Drive files|
|https://www.googleapis.com/auth/presentations|See, edit, create, and delete all your Google Slides presentations|
|https://www.googleapis.com/auth/presentations.readonly|See all your Google Slides presentations|
|https://www.googleapis.com/auth/spreadsheets|See, edit, create, and delete all your Google Sheets spreadsheets|
|https://www.googleapis.com/auth/spreadsheets.readonly|See all your Google Sheets spreadsheets|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive|See, edit, create, and delete all of your Google Drive files|
|https://www.googleapis.com/auth/drive.file|See, edit, create, and delete only the specific Google Drive files you use with this app|
|https://www.googleapis.com/auth/drive.readonly|See and download all your Google Drive files|
|https://www.googleapis.com/auth/presentations|See, edit, create, and delete all your Google Slides presentations|
|https://www.googleapis.com/auth/presentations.readonly|See all your Google Slides presentations|
|https://www.googleapis.com/auth/spreadsheets|See, edit, create, and delete all your Google Sheets spreadsheets|
|https://www.googleapis.com/auth/spreadsheets.readonly|See all your Google Sheets spreadsheets|

<h1 id="google-slides-api-presentations">presentations</h1>

## slides.presentations.create

<a id="opIdslides.presentations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/presentations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "layouts": [
      {
        "layoutProperties": {
          "displayName": "string",
          "masterObjectId": "string",
          "name": "string"
        },
        "masterProperties": {
          "displayName": "string"
        },
        "notesProperties": {
          "speakerNotesObjectId": "string"
        },
        "objectId": "string",
        "pageElements": [
          {}
        ],
        "pageProperties": {
          "colorScheme": {
            "colors": [
              {
                "color": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "type": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            ]
          },
          "pageBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "stretchedPictureFill": {
              "contentUrl": "string",
              "size": {
                "height": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "width": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                }
              }
            }
          }
        },
        "pageType": "SLIDE",
        "revisionId": "string",
        "slideProperties": {}
      }
    ],
    "locale": "string",
    "masters": [
      {
        "layoutProperties": {
          "displayName": "string",
          "masterObjectId": "string",
          "name": "string"
        },
        "masterProperties": {
          "displayName": "string"
        },
        "notesProperties": {
          "speakerNotesObjectId": "string"
        },
        "objectId": "string",
        "pageElements": [
          {}
        ],
        "pageProperties": {
          "colorScheme": {
            "colors": [
              {
                "color": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "type": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            ]
          },
          "pageBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "stretchedPictureFill": {
              "contentUrl": "string",
              "size": {
                "height": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "width": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                }
              }
            }
          }
        },
        "pageType": "SLIDE",
        "revisionId": "string",
        "slideProperties": {}
      }
    ],
    "notesMaster": {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    },
    "pageSize": {
      "height": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "width": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "presentationId": "string",
    "revisionId": "string",
    "slides": [
      {
        "layoutProperties": {
          "displayName": "string",
          "masterObjectId": "string",
          "name": "string"
        },
        "masterProperties": {
          "displayName": "string"
        },
        "notesProperties": {
          "speakerNotesObjectId": "string"
        },
        "objectId": "string",
        "pageElements": [
          {}
        ],
        "pageProperties": {
          "colorScheme": {
            "colors": [
              {
                "color": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "type": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            ]
          },
          "pageBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "stretchedPictureFill": {
              "contentUrl": "string",
              "size": {
                "height": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "width": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                }
              }
            }
          }
        },
        "pageType": "SLIDE",
        "revisionId": "string",
        "slideProperties": {}
      }
    ],
    "title": "string"
  }'
```

`POST /v1/presentations`

Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.

> Body parameter

```json
{
  "layouts": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "locale": "string",
  "masters": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "notesMaster": {
    "layoutProperties": {
      "displayName": "string",
      "masterObjectId": "string",
      "name": "string"
    },
    "masterProperties": {
      "displayName": "string"
    },
    "notesProperties": {
      "speakerNotesObjectId": "string"
    },
    "objectId": "string",
    "pageElements": [
      {}
    ],
    "pageProperties": {
      "colorScheme": {
        "colors": [
          {
            "color": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "type": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        ]
      },
      "pageBackgroundFill": {
        "propertyState": "RENDERED",
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "stretchedPictureFill": {
          "contentUrl": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        }
      }
    },
    "pageType": "SLIDE",
    "revisionId": "string",
    "slideProperties": {}
  },
  "pageSize": {
    "height": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "width": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "presentationId": "string",
  "revisionId": "string",
  "slides": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "title": "string"
}
```

<h3 id="slidespresentationscreate-parameters">Parameters</h3>

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
|body|body|[Presentation](#schemapresentation)|false|none|
|» layouts|body|[[Page](#schemapage)]|false|The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides that inherit from that layout.|
|» locale|body|string|false|The locale of the presentation, as an IETF BCP 47 language tag.|
|» masters|body|[[Page](#schemapage)]|false|The slide masters in the presentation. A slide master contains all common page elements and the common properties for a set of layouts. They serve three purposes: - Placeholder shapes on a master contain the default text styles and shape properties of all placeholder shapes on pages that use that master. - The master page properties define the common page properties inherited by its layouts. - Any other shapes on the master slide appear on all slides using that master, regardless of their layout.|
|» notesMaster|body|[Page](#schemapage)|false|The notes master in the presentation. It serves three purposes: - Placeholder shapes on a notes master contain the default text styles and shape properties of all placeholder shapes on notes pages. Specifically, a `SLIDE_IMAGE` placeholder shape contains the slide thumbnail, and a `BODY` placeholder shape contains the speaker notes. - The notes master page properties define the common page properties inherited by all notes pages. - Any other shapes on the notes master appear on all notes pages. The notes master is read-only.|
|» pageSize|body|[Size](#schemasize)|false|The size of pages in the presentation.|
|» presentationId|body|string|false|The ID of the presentation.|
|» revisionId|body|string|false|Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but a nebulous string. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.|
|» slides|body|[[Page](#schemapage)]|false|The slides in the presentation. A slide inherits properties from a slide layout.|
|» title|body|string|false|The title of the presentation.|

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
  "layouts": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "locale": "string",
  "masters": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "notesMaster": {
    "layoutProperties": {
      "displayName": "string",
      "masterObjectId": "string",
      "name": "string"
    },
    "masterProperties": {
      "displayName": "string"
    },
    "notesProperties": {
      "speakerNotesObjectId": "string"
    },
    "objectId": "string",
    "pageElements": [
      {}
    ],
    "pageProperties": {
      "colorScheme": {
        "colors": [
          {
            "color": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "type": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        ]
      },
      "pageBackgroundFill": {
        "propertyState": "RENDERED",
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "stretchedPictureFill": {
          "contentUrl": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        }
      }
    },
    "pageType": "SLIDE",
    "revisionId": "string",
    "slideProperties": {}
  },
  "pageSize": {
    "height": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "width": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "presentationId": "string",
  "revisionId": "string",
  "slides": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "title": "string"
}
```

<h3 id="slidespresentationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Presentation](#schemapresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/presentations ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/presentations )
</aside>

## slides.presentations.get

<a id="opIdslides.presentations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/presentations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/presentations/{presentationId}`

Gets the latest version of the specified presentation.

<h3 id="slidespresentationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|presentationId|path|string|true|The ID of the presentation to retrieve.|
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
  "layouts": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "locale": "string",
  "masters": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "notesMaster": {
    "layoutProperties": {
      "displayName": "string",
      "masterObjectId": "string",
      "name": "string"
    },
    "masterProperties": {
      "displayName": "string"
    },
    "notesProperties": {
      "speakerNotesObjectId": "string"
    },
    "objectId": "string",
    "pageElements": [
      {}
    ],
    "pageProperties": {
      "colorScheme": {
        "colors": [
          {
            "color": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "type": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        ]
      },
      "pageBackgroundFill": {
        "propertyState": "RENDERED",
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "stretchedPictureFill": {
          "contentUrl": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        }
      }
    },
    "pageType": "SLIDE",
    "revisionId": "string",
    "slideProperties": {}
  },
  "pageSize": {
    "height": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "width": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "presentationId": "string",
  "revisionId": "string",
  "slides": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "title": "string"
}
```

<h3 id="slidespresentationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Presentation](#schemapresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/presentations ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/presentations ), Oauth2 ( Scopes: https://www.googleapis.com/auth/presentations.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/presentations.readonly )
</aside>

## slides.presentations.pages.get

<a id="opIdslides.presentations.pages.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/presentations/string/pages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/presentations/{presentationId}/pages/{pageObjectId}`

Gets the latest version of the specified page in the presentation.

<h3 id="slidespresentationspagesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|presentationId|path|string|true|The ID of the presentation to retrieve.|
|pageObjectId|path|string|true|The object ID of the page to retrieve.|
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
  "layoutProperties": {
    "displayName": "string",
    "masterObjectId": "string",
    "name": "string"
  },
  "masterProperties": {
    "displayName": "string"
  },
  "notesProperties": {
    "speakerNotesObjectId": "string"
  },
  "objectId": "string",
  "pageElements": [
    {}
  ],
  "pageProperties": {
    "colorScheme": {
      "colors": [
        {
          "color": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "type": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      ]
    },
    "pageBackgroundFill": {
      "propertyState": "RENDERED",
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "stretchedPictureFill": {
        "contentUrl": "string",
        "size": {
          "height": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "width": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        }
      }
    }
  },
  "pageType": "SLIDE",
  "revisionId": "string",
  "slideProperties": {}
}
```

<h3 id="slidespresentationspagesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Page](#schemapage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/presentations ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/presentations ), Oauth2 ( Scopes: https://www.googleapis.com/auth/presentations.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/presentations.readonly )
</aside>

## slides.presentations.pages.getThumbnail

<a id="opIdslides.presentations.pages.getThumbnail"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/presentations/string/pages/string/thumbnail \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail`

Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.

<h3 id="slidespresentationspagesgetthumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|presentationId|path|string|true|The ID of the presentation to retrieve.|
|pageObjectId|path|string|true|The object ID of the page whose thumbnail to retrieve.|
|thumbnailProperties.mimeType|query|string|false|The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG.|
|thumbnailProperties.thumbnailSize|query|string|false|The optional thumbnail image size. If you don't specify the size, the server chooses a default size of the image.|
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
|thumbnailProperties.mimeType|PNG|
|thumbnailProperties.thumbnailSize|THUMBNAIL_SIZE_UNSPECIFIED|
|thumbnailProperties.thumbnailSize|LARGE|
|thumbnailProperties.thumbnailSize|MEDIUM|
|thumbnailProperties.thumbnailSize|SMALL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "contentUrl": "string",
  "height": 0,
  "width": 0
}
```

<h3 id="slidespresentationspagesgetthumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Thumbnail](#schemathumbnail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/presentations ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/presentations ), Oauth2 ( Scopes: https://www.googleapis.com/auth/presentations.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/presentations.readonly )
</aside>

## slides.presentations.batchUpdate

<a id="opIdslides.presentations.batchUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/presentations/string:batchUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "createImage": {
          "elementProperties": {
            "pageObjectId": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "objectId": "string",
          "url": "string"
        },
        "createLine": {
          "category": "LINE_CATEGORY_UNSPECIFIED",
          "elementProperties": {
            "pageObjectId": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "lineCategory": "STRAIGHT",
          "objectId": "string"
        },
        "createParagraphBullets": {
          "bulletPreset": "BULLET_DISC_CIRCLE_SQUARE",
          "cellLocation": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "objectId": "string",
          "textRange": {
            "endIndex": 0,
            "startIndex": 0,
            "type": "RANGE_TYPE_UNSPECIFIED"
          }
        },
        "createShape": {
          "elementProperties": {
            "pageObjectId": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "objectId": "string",
          "shapeType": "TYPE_UNSPECIFIED"
        },
        "createSheetsChart": {
          "chartId": 0,
          "elementProperties": {
            "pageObjectId": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "linkingMode": "NOT_LINKED_IMAGE",
          "objectId": "string",
          "spreadsheetId": "string"
        },
        "createSlide": {
          "insertionIndex": 0,
          "objectId": "string",
          "placeholderIdMappings": [
            {
              "layoutPlaceholder": {
                "index": 0,
                "parentObjectId": "string",
                "type": "NONE"
              },
              "layoutPlaceholderObjectId": "string",
              "objectId": "string"
            }
          ],
          "slideLayoutReference": {
            "layoutId": "string",
            "predefinedLayout": "PREDEFINED_LAYOUT_UNSPECIFIED"
          }
        },
        "createTable": {
          "columns": 0,
          "elementProperties": {
            "pageObjectId": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "objectId": "string",
          "rows": 0
        },
        "createVideo": {
          "elementProperties": {
            "pageObjectId": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "id": "string",
          "objectId": "string",
          "source": "SOURCE_UNSPECIFIED"
        },
        "deleteObject": {
          "objectId": "string"
        },
        "deleteParagraphBullets": {
          "cellLocation": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "objectId": "string",
          "textRange": {
            "endIndex": 0,
            "startIndex": 0,
            "type": "RANGE_TYPE_UNSPECIFIED"
          }
        },
        "deleteTableColumn": {
          "cellLocation": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "tableObjectId": "string"
        },
        "deleteTableRow": {
          "cellLocation": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "tableObjectId": "string"
        },
        "deleteText": {
          "cellLocation": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "objectId": "string",
          "textRange": {
            "endIndex": 0,
            "startIndex": 0,
            "type": "RANGE_TYPE_UNSPECIFIED"
          }
        },
        "duplicateObject": {
          "objectId": "string",
          "objectIds": {
            "property1": "string",
            "property2": "string"
          }
        },
        "groupObjects": {
          "childrenObjectIds": [
            "string"
          ],
          "groupObjectId": "string"
        },
        "insertTableColumns": {
          "cellLocation": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "insertRight": true,
          "number": 0,
          "tableObjectId": "string"
        },
        "insertTableRows": {
          "cellLocation": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "insertBelow": true,
          "number": 0,
          "tableObjectId": "string"
        },
        "insertText": {
          "cellLocation": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "insertionIndex": 0,
          "objectId": "string",
          "text": "string"
        },
        "mergeTableCells": {
          "objectId": "string",
          "tableRange": {
            "columnSpan": 0,
            "location": {
              "columnIndex": 0,
              "rowIndex": 0
            },
            "rowSpan": 0
          }
        },
        "refreshSheetsChart": {
          "objectId": "string"
        },
        "replaceAllShapesWithImage": {
          "containsText": {
            "matchCase": true,
            "text": "string"
          },
          "imageReplaceMethod": "IMAGE_REPLACE_METHOD_UNSPECIFIED",
          "imageUrl": "string",
          "pageObjectIds": [
            "string"
          ],
          "replaceMethod": "CENTER_INSIDE"
        },
        "replaceAllShapesWithSheetsChart": {
          "chartId": 0,
          "containsText": {
            "matchCase": true,
            "text": "string"
          },
          "linkingMode": "NOT_LINKED_IMAGE",
          "pageObjectIds": [
            "string"
          ],
          "spreadsheetId": "string"
        },
        "replaceAllText": {
          "containsText": {
            "matchCase": true,
            "text": "string"
          },
          "pageObjectIds": [
            "string"
          ],
          "replaceText": "string"
        },
        "replaceImage": {
          "imageObjectId": "string",
          "imageReplaceMethod": "IMAGE_REPLACE_METHOD_UNSPECIFIED",
          "url": "string"
        },
        "rerouteLine": {
          "objectId": "string"
        },
        "ungroupObjects": {
          "objectIds": [
            "string"
          ]
        },
        "unmergeTableCells": {
          "objectId": "string",
          "tableRange": {
            "columnSpan": 0,
            "location": {
              "columnIndex": 0,
              "rowIndex": 0
            },
            "rowSpan": 0
          }
        },
        "updateImageProperties": {
          "fields": "string",
          "imageProperties": {
            "brightness": 0,
            "contrast": 0,
            "cropProperties": {
              "angle": 0,
              "bottomOffset": 0,
              "leftOffset": 0,
              "rightOffset": 0,
              "topOffset": 0
            },
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "outline": {
              "dashStyle": "DASH_STYLE_UNSPECIFIED",
              "outlineFill": {
                "solidFill": {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                }
              },
              "propertyState": "RENDERED",
              "weight": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "recolor": {
              "name": "NONE",
              "recolorStops": [
                {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  },
                  "position": 0
                }
              ]
            },
            "shadow": {
              "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
              "alpha": 0,
              "blurRadius": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              },
              "propertyState": "RENDERED",
              "rotateWithShape": true,
              "transform": {
                "scaleX": 0,
                "scaleY": 0,
                "shearX": 0,
                "shearY": 0,
                "translateX": 0,
                "translateY": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "type": "SHADOW_TYPE_UNSPECIFIED"
            },
            "transparency": 0
          },
          "objectId": "string"
        },
        "updateLineCategory": {
          "lineCategory": "LINE_CATEGORY_UNSPECIFIED",
          "objectId": "string"
        },
        "updateLineProperties": {
          "fields": "string",
          "lineProperties": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "endArrow": "ARROW_STYLE_UNSPECIFIED",
            "endConnection": {
              "connectedObjectId": "string",
              "connectionSiteIndex": 0
            },
            "lineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "startArrow": "ARROW_STYLE_UNSPECIFIED",
            "startConnection": {
              "connectedObjectId": "string",
              "connectionSiteIndex": 0
            },
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "objectId": "string"
        },
        "updatePageElementAltText": {
          "description": "string",
          "objectId": "string",
          "title": "string"
        },
        "updatePageElementTransform": {
          "applyMode": "APPLY_MODE_UNSPECIFIED",
          "objectId": "string",
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "updatePageElementsZOrder": {
          "operation": "Z_ORDER_OPERATION_UNSPECIFIED",
          "pageElementObjectIds": [
            "string"
          ]
        },
        "updatePageProperties": {
          "fields": "string",
          "objectId": "string",
          "pageProperties": {
            "colorScheme": {
              "colors": [
                {
                  "color": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "type": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              ]
            },
            "pageBackgroundFill": {
              "propertyState": "RENDERED",
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "stretchedPictureFill": {
                "contentUrl": "string",
                "size": {
                  "height": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "width": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  }
                }
              }
            }
          }
        },
        "updateParagraphStyle": {
          "cellLocation": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "fields": "string",
          "objectId": "string",
          "style": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "direction": "TEXT_DIRECTION_UNSPECIFIED",
            "indentEnd": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "indentFirstLine": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "indentStart": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "lineSpacing": 0,
            "spaceAbove": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "spaceBelow": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "spacingMode": "SPACING_MODE_UNSPECIFIED"
          },
          "textRange": {
            "endIndex": 0,
            "startIndex": 0,
            "type": "RANGE_TYPE_UNSPECIFIED"
          }
        },
        "updateShapeProperties": {
          "fields": "string",
          "objectId": "string",
          "shapeProperties": {
            "autofit": {
              "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
              "fontScale": 0,
              "lineSpacingReduction": 0
            },
            "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "outline": {
              "dashStyle": "DASH_STYLE_UNSPECIFIED",
              "outlineFill": {
                "solidFill": {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                }
              },
              "propertyState": "RENDERED",
              "weight": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "shadow": {
              "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
              "alpha": 0,
              "blurRadius": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              },
              "propertyState": "RENDERED",
              "rotateWithShape": true,
              "transform": {
                "scaleX": 0,
                "scaleY": 0,
                "shearX": 0,
                "shearY": 0,
                "translateX": 0,
                "translateY": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "type": "SHADOW_TYPE_UNSPECIFIED"
            },
            "shapeBackgroundFill": {
              "propertyState": "RENDERED",
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            }
          }
        },
        "updateSlideProperties": {
          "fields": "string",
          "objectId": "string",
          "slideProperties": {
            "isSkipped": true,
            "layoutObjectId": "string",
            "masterObjectId": "string",
            "notesPage": {}
          }
        },
        "updateSlidesPosition": {
          "insertionIndex": 0,
          "slideObjectIds": [
            "string"
          ]
        },
        "updateTableBorderProperties": {
          "borderPosition": "ALL",
          "fields": "string",
          "objectId": "string",
          "tableBorderProperties": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "tableBorderFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "tableRange": {
            "columnSpan": 0,
            "location": {
              "columnIndex": 0,
              "rowIndex": 0
            },
            "rowSpan": 0
          }
        },
        "updateTableCellProperties": {
          "fields": "string",
          "objectId": "string",
          "tableCellProperties": {
            "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
            "tableCellBackgroundFill": {
              "propertyState": "RENDERED",
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            }
          },
          "tableRange": {
            "columnSpan": 0,
            "location": {
              "columnIndex": 0,
              "rowIndex": 0
            },
            "rowSpan": 0
          }
        },
        "updateTableColumnProperties": {
          "columnIndices": [
            0
          ],
          "fields": "string",
          "objectId": "string",
          "tableColumnProperties": {
            "columnWidth": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        },
        "updateTableRowProperties": {
          "fields": "string",
          "objectId": "string",
          "rowIndices": [
            0
          ],
          "tableRowProperties": {
            "minRowHeight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        },
        "updateTextStyle": {
          "cellLocation": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "fields": "string",
          "objectId": "string",
          "style": {
            "backgroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
            "bold": true,
            "fontFamily": "string",
            "fontSize": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "foregroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "italic": true,
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "smallCaps": true,
            "strikethrough": true,
            "underline": true,
            "weightedFontFamily": {
              "fontFamily": "string",
              "weight": 0
            }
          },
          "textRange": {
            "endIndex": 0,
            "startIndex": 0,
            "type": "RANGE_TYPE_UNSPECIFIED"
          }
        },
        "updateVideoProperties": {
          "fields": "string",
          "objectId": "string",
          "videoProperties": {
            "autoPlay": true,
            "end": 0,
            "mute": true,
            "outline": {
              "dashStyle": "DASH_STYLE_UNSPECIFIED",
              "outlineFill": {
                "solidFill": {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                }
              },
              "propertyState": "RENDERED",
              "weight": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "start": 0
          }
        }
      }
    ],
    "writeControl": {
      "requiredRevisionId": "string"
    }
  }'
```

`POST /v1/presentations/{presentationId}:batchUpdate`

Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.

> Body parameter

```json
{
  "requests": [
    {
      "createImage": {
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "objectId": "string",
        "url": "string"
      },
      "createLine": {
        "category": "LINE_CATEGORY_UNSPECIFIED",
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "lineCategory": "STRAIGHT",
        "objectId": "string"
      },
      "createParagraphBullets": {
        "bulletPreset": "BULLET_DISC_CIRCLE_SQUARE",
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "objectId": "string",
        "textRange": {
          "endIndex": 0,
          "startIndex": 0,
          "type": "RANGE_TYPE_UNSPECIFIED"
        }
      },
      "createShape": {
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "objectId": "string",
        "shapeType": "TYPE_UNSPECIFIED"
      },
      "createSheetsChart": {
        "chartId": 0,
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "linkingMode": "NOT_LINKED_IMAGE",
        "objectId": "string",
        "spreadsheetId": "string"
      },
      "createSlide": {
        "insertionIndex": 0,
        "objectId": "string",
        "placeholderIdMappings": [
          {
            "layoutPlaceholder": {
              "index": 0,
              "parentObjectId": "string",
              "type": "NONE"
            },
            "layoutPlaceholderObjectId": "string",
            "objectId": "string"
          }
        ],
        "slideLayoutReference": {
          "layoutId": "string",
          "predefinedLayout": "PREDEFINED_LAYOUT_UNSPECIFIED"
        }
      },
      "createTable": {
        "columns": 0,
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "objectId": "string",
        "rows": 0
      },
      "createVideo": {
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "id": "string",
        "objectId": "string",
        "source": "SOURCE_UNSPECIFIED"
      },
      "deleteObject": {
        "objectId": "string"
      },
      "deleteParagraphBullets": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "objectId": "string",
        "textRange": {
          "endIndex": 0,
          "startIndex": 0,
          "type": "RANGE_TYPE_UNSPECIFIED"
        }
      },
      "deleteTableColumn": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "tableObjectId": "string"
      },
      "deleteTableRow": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "tableObjectId": "string"
      },
      "deleteText": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "objectId": "string",
        "textRange": {
          "endIndex": 0,
          "startIndex": 0,
          "type": "RANGE_TYPE_UNSPECIFIED"
        }
      },
      "duplicateObject": {
        "objectId": "string",
        "objectIds": {
          "property1": "string",
          "property2": "string"
        }
      },
      "groupObjects": {
        "childrenObjectIds": [
          "string"
        ],
        "groupObjectId": "string"
      },
      "insertTableColumns": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "insertRight": true,
        "number": 0,
        "tableObjectId": "string"
      },
      "insertTableRows": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "insertBelow": true,
        "number": 0,
        "tableObjectId": "string"
      },
      "insertText": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "insertionIndex": 0,
        "objectId": "string",
        "text": "string"
      },
      "mergeTableCells": {
        "objectId": "string",
        "tableRange": {
          "columnSpan": 0,
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "rowSpan": 0
        }
      },
      "refreshSheetsChart": {
        "objectId": "string"
      },
      "replaceAllShapesWithImage": {
        "containsText": {
          "matchCase": true,
          "text": "string"
        },
        "imageReplaceMethod": "IMAGE_REPLACE_METHOD_UNSPECIFIED",
        "imageUrl": "string",
        "pageObjectIds": [
          "string"
        ],
        "replaceMethod": "CENTER_INSIDE"
      },
      "replaceAllShapesWithSheetsChart": {
        "chartId": 0,
        "containsText": {
          "matchCase": true,
          "text": "string"
        },
        "linkingMode": "NOT_LINKED_IMAGE",
        "pageObjectIds": [
          "string"
        ],
        "spreadsheetId": "string"
      },
      "replaceAllText": {
        "containsText": {
          "matchCase": true,
          "text": "string"
        },
        "pageObjectIds": [
          "string"
        ],
        "replaceText": "string"
      },
      "replaceImage": {
        "imageObjectId": "string",
        "imageReplaceMethod": "IMAGE_REPLACE_METHOD_UNSPECIFIED",
        "url": "string"
      },
      "rerouteLine": {
        "objectId": "string"
      },
      "ungroupObjects": {
        "objectIds": [
          "string"
        ]
      },
      "unmergeTableCells": {
        "objectId": "string",
        "tableRange": {
          "columnSpan": 0,
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "rowSpan": 0
        }
      },
      "updateImageProperties": {
        "fields": "string",
        "imageProperties": {
          "brightness": 0,
          "contrast": 0,
          "cropProperties": {
            "angle": 0,
            "bottomOffset": 0,
            "leftOffset": 0,
            "rightOffset": 0,
            "topOffset": 0
          },
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "recolor": {
            "name": "NONE",
            "recolorStops": [
              {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                },
                "position": 0
              }
            ]
          },
          "shadow": {
            "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
            "alpha": 0,
            "blurRadius": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "propertyState": "RENDERED",
            "rotateWithShape": true,
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "type": "SHADOW_TYPE_UNSPECIFIED"
          },
          "transparency": 0
        },
        "objectId": "string"
      },
      "updateLineCategory": {
        "lineCategory": "LINE_CATEGORY_UNSPECIFIED",
        "objectId": "string"
      },
      "updateLineProperties": {
        "fields": "string",
        "lineProperties": {
          "dashStyle": "DASH_STYLE_UNSPECIFIED",
          "endArrow": "ARROW_STYLE_UNSPECIFIED",
          "endConnection": {
            "connectedObjectId": "string",
            "connectionSiteIndex": 0
          },
          "lineFill": {
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          },
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "startArrow": "ARROW_STYLE_UNSPECIFIED",
          "startConnection": {
            "connectedObjectId": "string",
            "connectionSiteIndex": 0
          },
          "weight": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "objectId": "string"
      },
      "updatePageElementAltText": {
        "description": "string",
        "objectId": "string",
        "title": "string"
      },
      "updatePageElementTransform": {
        "applyMode": "APPLY_MODE_UNSPECIFIED",
        "objectId": "string",
        "transform": {
          "scaleX": 0,
          "scaleY": 0,
          "shearX": 0,
          "shearY": 0,
          "translateX": 0,
          "translateY": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "updatePageElementsZOrder": {
        "operation": "Z_ORDER_OPERATION_UNSPECIFIED",
        "pageElementObjectIds": [
          "string"
        ]
      },
      "updatePageProperties": {
        "fields": "string",
        "objectId": "string",
        "pageProperties": {
          "colorScheme": {
            "colors": [
              {
                "color": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "type": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            ]
          },
          "pageBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "stretchedPictureFill": {
              "contentUrl": "string",
              "size": {
                "height": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "width": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                }
              }
            }
          }
        }
      },
      "updateParagraphStyle": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "fields": "string",
        "objectId": "string",
        "style": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "direction": "TEXT_DIRECTION_UNSPECIFIED",
          "indentEnd": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "indentFirstLine": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "indentStart": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "lineSpacing": 0,
          "spaceAbove": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "spaceBelow": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "spacingMode": "SPACING_MODE_UNSPECIFIED"
        },
        "textRange": {
          "endIndex": 0,
          "startIndex": 0,
          "type": "RANGE_TYPE_UNSPECIFIED"
        }
      },
      "updateShapeProperties": {
        "fields": "string",
        "objectId": "string",
        "shapeProperties": {
          "autofit": {
            "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
            "fontScale": 0,
            "lineSpacingReduction": 0
          },
          "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "shadow": {
            "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
            "alpha": 0,
            "blurRadius": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "propertyState": "RENDERED",
            "rotateWithShape": true,
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "type": "SHADOW_TYPE_UNSPECIFIED"
          },
          "shapeBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          }
        }
      },
      "updateSlideProperties": {
        "fields": "string",
        "objectId": "string",
        "slideProperties": {
          "isSkipped": true,
          "layoutObjectId": "string",
          "masterObjectId": "string",
          "notesPage": {}
        }
      },
      "updateSlidesPosition": {
        "insertionIndex": 0,
        "slideObjectIds": [
          "string"
        ]
      },
      "updateTableBorderProperties": {
        "borderPosition": "ALL",
        "fields": "string",
        "objectId": "string",
        "tableBorderProperties": {
          "dashStyle": "DASH_STYLE_UNSPECIFIED",
          "tableBorderFill": {
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          },
          "weight": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "tableRange": {
          "columnSpan": 0,
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "rowSpan": 0
        }
      },
      "updateTableCellProperties": {
        "fields": "string",
        "objectId": "string",
        "tableCellProperties": {
          "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
          "tableCellBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          }
        },
        "tableRange": {
          "columnSpan": 0,
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "rowSpan": 0
        }
      },
      "updateTableColumnProperties": {
        "columnIndices": [
          0
        ],
        "fields": "string",
        "objectId": "string",
        "tableColumnProperties": {
          "columnWidth": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        }
      },
      "updateTableRowProperties": {
        "fields": "string",
        "objectId": "string",
        "rowIndices": [
          0
        ],
        "tableRowProperties": {
          "minRowHeight": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        }
      },
      "updateTextStyle": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "fields": "string",
        "objectId": "string",
        "style": {
          "backgroundColor": {
            "opaqueColor": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
          "bold": true,
          "fontFamily": "string",
          "fontSize": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "foregroundColor": {
            "opaqueColor": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "italic": true,
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "smallCaps": true,
          "strikethrough": true,
          "underline": true,
          "weightedFontFamily": {
            "fontFamily": "string",
            "weight": 0
          }
        },
        "textRange": {
          "endIndex": 0,
          "startIndex": 0,
          "type": "RANGE_TYPE_UNSPECIFIED"
        }
      },
      "updateVideoProperties": {
        "fields": "string",
        "objectId": "string",
        "videoProperties": {
          "autoPlay": true,
          "end": 0,
          "mute": true,
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "start": 0
        }
      }
    }
  ],
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

<h3 id="slidespresentationsbatchupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|presentationId|path|string|true|The presentation to apply the updates to.|
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
|body|body|[BatchUpdatePresentationRequest](#schemabatchupdatepresentationrequest)|false|none|
|» requests|body|[[Request](#schemarequest)]|false|A list of updates to apply to the presentation.|
|» writeControl|body|[WriteControl](#schemawritecontrol)|false|Provides control over how write requests are executed.|

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
  "presentationId": "string",
  "replies": [
    {
      "createImage": {
        "objectId": "string"
      },
      "createLine": {
        "objectId": "string"
      },
      "createShape": {
        "objectId": "string"
      },
      "createSheetsChart": {
        "objectId": "string"
      },
      "createSlide": {
        "objectId": "string"
      },
      "createTable": {
        "objectId": "string"
      },
      "createVideo": {
        "objectId": "string"
      },
      "duplicateObject": {
        "objectId": "string"
      },
      "groupObjects": {
        "objectId": "string"
      },
      "replaceAllShapesWithImage": {
        "occurrencesChanged": 0
      },
      "replaceAllShapesWithSheetsChart": {
        "occurrencesChanged": 0
      },
      "replaceAllText": {
        "occurrencesChanged": 0
      }
    }
  ],
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

<h3 id="slidespresentationsbatchupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchUpdatePresentationResponse](#schemabatchupdatepresentationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/presentations ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/presentations ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets.readonly )
</aside>

# Schemas

<h2 id="tocS_AffineTransform">AffineTransform</h2>
<!-- backwards compatibility -->
<a id="schemaaffinetransform"></a>
<a id="schema_AffineTransform"></a>
<a id="tocSaffinetransform"></a>
<a id="tocsaffinetransform"></a>

```json
{
  "scaleX": 0,
  "scaleY": 0,
  "shearX": 0,
  "shearY": 0,
  "translateX": 0,
  "translateY": 0,
  "unit": "UNIT_UNSPECIFIED"
}
```

AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scaleX|number(double)|false|none|The X coordinate scaling element.|
|scaleY|number(double)|false|none|The Y coordinate scaling element.|
|shearX|number(double)|false|none|The X coordinate shearing element.|
|shearY|number(double)|false|none|The Y coordinate shearing element.|
|translateX|number(double)|false|none|The X coordinate translation element.|
|translateY|number(double)|false|none|The Y coordinate translation element.|
|unit|string|false|none|The units for translate elements.|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|UNIT_UNSPECIFIED|
|unit|EMU|
|unit|PT|

<h2 id="tocS_AutoText">AutoText</h2>
<!-- backwards compatibility -->
<a id="schemaautotext"></a>
<a id="schema_AutoText"></a>
<a id="tocSautotext"></a>
<a id="tocsautotext"></a>

```json
{
  "content": "string",
  "style": {
    "backgroundColor": {
      "opaqueColor": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
    "bold": true,
    "fontFamily": "string",
    "fontSize": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "foregroundColor": {
      "opaqueColor": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "italic": true,
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "smallCaps": true,
    "strikethrough": true,
    "underline": true,
    "weightedFontFamily": {
      "fontFamily": "string",
      "weight": 0
    }
  },
  "type": "TYPE_UNSPECIFIED"
}
```

A TextElement kind that represents auto text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|The rendered content of this auto text, if available.|
|style|[TextStyle](#schematextstyle)|false|none|The styling applied to this auto text.|
|type|string|false|none|The type of this auto text.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|SLIDE_NUMBER|

<h2 id="tocS_Autofit">Autofit</h2>
<!-- backwards compatibility -->
<a id="schemaautofit"></a>
<a id="schema_Autofit"></a>
<a id="tocSautofit"></a>
<a id="tocsautofit"></a>

```json
{
  "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
  "fontScale": 0,
  "lineSpacingReduction": 0
}
```

The autofit properties of a Shape.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autofitType|string|false|none|The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values.|
|fontScale|number(float)|false|none|The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size gives the font size that is rendered in the editor. This property is read-only.|
|lineSpacingReduction|number(float)|false|none|The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing gives the line spacing that is rendered in the editor. This property is read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|autofitType|AUTOFIT_TYPE_UNSPECIFIED|
|autofitType|NONE|
|autofitType|TEXT_AUTOFIT|
|autofitType|SHAPE_AUTOFIT|

<h2 id="tocS_BatchUpdatePresentationRequest">BatchUpdatePresentationRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatepresentationrequest"></a>
<a id="schema_BatchUpdatePresentationRequest"></a>
<a id="tocSbatchupdatepresentationrequest"></a>
<a id="tocsbatchupdatepresentationrequest"></a>

```json
{
  "requests": [
    {
      "createImage": {
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "objectId": "string",
        "url": "string"
      },
      "createLine": {
        "category": "LINE_CATEGORY_UNSPECIFIED",
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "lineCategory": "STRAIGHT",
        "objectId": "string"
      },
      "createParagraphBullets": {
        "bulletPreset": "BULLET_DISC_CIRCLE_SQUARE",
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "objectId": "string",
        "textRange": {
          "endIndex": 0,
          "startIndex": 0,
          "type": "RANGE_TYPE_UNSPECIFIED"
        }
      },
      "createShape": {
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "objectId": "string",
        "shapeType": "TYPE_UNSPECIFIED"
      },
      "createSheetsChart": {
        "chartId": 0,
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "linkingMode": "NOT_LINKED_IMAGE",
        "objectId": "string",
        "spreadsheetId": "string"
      },
      "createSlide": {
        "insertionIndex": 0,
        "objectId": "string",
        "placeholderIdMappings": [
          {
            "layoutPlaceholder": {
              "index": 0,
              "parentObjectId": "string",
              "type": "NONE"
            },
            "layoutPlaceholderObjectId": "string",
            "objectId": "string"
          }
        ],
        "slideLayoutReference": {
          "layoutId": "string",
          "predefinedLayout": "PREDEFINED_LAYOUT_UNSPECIFIED"
        }
      },
      "createTable": {
        "columns": 0,
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "objectId": "string",
        "rows": 0
      },
      "createVideo": {
        "elementProperties": {
          "pageObjectId": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "id": "string",
        "objectId": "string",
        "source": "SOURCE_UNSPECIFIED"
      },
      "deleteObject": {
        "objectId": "string"
      },
      "deleteParagraphBullets": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "objectId": "string",
        "textRange": {
          "endIndex": 0,
          "startIndex": 0,
          "type": "RANGE_TYPE_UNSPECIFIED"
        }
      },
      "deleteTableColumn": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "tableObjectId": "string"
      },
      "deleteTableRow": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "tableObjectId": "string"
      },
      "deleteText": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "objectId": "string",
        "textRange": {
          "endIndex": 0,
          "startIndex": 0,
          "type": "RANGE_TYPE_UNSPECIFIED"
        }
      },
      "duplicateObject": {
        "objectId": "string",
        "objectIds": {
          "property1": "string",
          "property2": "string"
        }
      },
      "groupObjects": {
        "childrenObjectIds": [
          "string"
        ],
        "groupObjectId": "string"
      },
      "insertTableColumns": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "insertRight": true,
        "number": 0,
        "tableObjectId": "string"
      },
      "insertTableRows": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "insertBelow": true,
        "number": 0,
        "tableObjectId": "string"
      },
      "insertText": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "insertionIndex": 0,
        "objectId": "string",
        "text": "string"
      },
      "mergeTableCells": {
        "objectId": "string",
        "tableRange": {
          "columnSpan": 0,
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "rowSpan": 0
        }
      },
      "refreshSheetsChart": {
        "objectId": "string"
      },
      "replaceAllShapesWithImage": {
        "containsText": {
          "matchCase": true,
          "text": "string"
        },
        "imageReplaceMethod": "IMAGE_REPLACE_METHOD_UNSPECIFIED",
        "imageUrl": "string",
        "pageObjectIds": [
          "string"
        ],
        "replaceMethod": "CENTER_INSIDE"
      },
      "replaceAllShapesWithSheetsChart": {
        "chartId": 0,
        "containsText": {
          "matchCase": true,
          "text": "string"
        },
        "linkingMode": "NOT_LINKED_IMAGE",
        "pageObjectIds": [
          "string"
        ],
        "spreadsheetId": "string"
      },
      "replaceAllText": {
        "containsText": {
          "matchCase": true,
          "text": "string"
        },
        "pageObjectIds": [
          "string"
        ],
        "replaceText": "string"
      },
      "replaceImage": {
        "imageObjectId": "string",
        "imageReplaceMethod": "IMAGE_REPLACE_METHOD_UNSPECIFIED",
        "url": "string"
      },
      "rerouteLine": {
        "objectId": "string"
      },
      "ungroupObjects": {
        "objectIds": [
          "string"
        ]
      },
      "unmergeTableCells": {
        "objectId": "string",
        "tableRange": {
          "columnSpan": 0,
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "rowSpan": 0
        }
      },
      "updateImageProperties": {
        "fields": "string",
        "imageProperties": {
          "brightness": 0,
          "contrast": 0,
          "cropProperties": {
            "angle": 0,
            "bottomOffset": 0,
            "leftOffset": 0,
            "rightOffset": 0,
            "topOffset": 0
          },
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "recolor": {
            "name": "NONE",
            "recolorStops": [
              {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                },
                "position": 0
              }
            ]
          },
          "shadow": {
            "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
            "alpha": 0,
            "blurRadius": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "propertyState": "RENDERED",
            "rotateWithShape": true,
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "type": "SHADOW_TYPE_UNSPECIFIED"
          },
          "transparency": 0
        },
        "objectId": "string"
      },
      "updateLineCategory": {
        "lineCategory": "LINE_CATEGORY_UNSPECIFIED",
        "objectId": "string"
      },
      "updateLineProperties": {
        "fields": "string",
        "lineProperties": {
          "dashStyle": "DASH_STYLE_UNSPECIFIED",
          "endArrow": "ARROW_STYLE_UNSPECIFIED",
          "endConnection": {
            "connectedObjectId": "string",
            "connectionSiteIndex": 0
          },
          "lineFill": {
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          },
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "startArrow": "ARROW_STYLE_UNSPECIFIED",
          "startConnection": {
            "connectedObjectId": "string",
            "connectionSiteIndex": 0
          },
          "weight": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "objectId": "string"
      },
      "updatePageElementAltText": {
        "description": "string",
        "objectId": "string",
        "title": "string"
      },
      "updatePageElementTransform": {
        "applyMode": "APPLY_MODE_UNSPECIFIED",
        "objectId": "string",
        "transform": {
          "scaleX": 0,
          "scaleY": 0,
          "shearX": 0,
          "shearY": 0,
          "translateX": 0,
          "translateY": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "updatePageElementsZOrder": {
        "operation": "Z_ORDER_OPERATION_UNSPECIFIED",
        "pageElementObjectIds": [
          "string"
        ]
      },
      "updatePageProperties": {
        "fields": "string",
        "objectId": "string",
        "pageProperties": {
          "colorScheme": {
            "colors": [
              {
                "color": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "type": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            ]
          },
          "pageBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "stretchedPictureFill": {
              "contentUrl": "string",
              "size": {
                "height": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "width": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                }
              }
            }
          }
        }
      },
      "updateParagraphStyle": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "fields": "string",
        "objectId": "string",
        "style": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "direction": "TEXT_DIRECTION_UNSPECIFIED",
          "indentEnd": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "indentFirstLine": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "indentStart": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "lineSpacing": 0,
          "spaceAbove": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "spaceBelow": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "spacingMode": "SPACING_MODE_UNSPECIFIED"
        },
        "textRange": {
          "endIndex": 0,
          "startIndex": 0,
          "type": "RANGE_TYPE_UNSPECIFIED"
        }
      },
      "updateShapeProperties": {
        "fields": "string",
        "objectId": "string",
        "shapeProperties": {
          "autofit": {
            "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
            "fontScale": 0,
            "lineSpacingReduction": 0
          },
          "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "shadow": {
            "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
            "alpha": 0,
            "blurRadius": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "propertyState": "RENDERED",
            "rotateWithShape": true,
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "type": "SHADOW_TYPE_UNSPECIFIED"
          },
          "shapeBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          }
        }
      },
      "updateSlideProperties": {
        "fields": "string",
        "objectId": "string",
        "slideProperties": {
          "isSkipped": true,
          "layoutObjectId": "string",
          "masterObjectId": "string",
          "notesPage": {}
        }
      },
      "updateSlidesPosition": {
        "insertionIndex": 0,
        "slideObjectIds": [
          "string"
        ]
      },
      "updateTableBorderProperties": {
        "borderPosition": "ALL",
        "fields": "string",
        "objectId": "string",
        "tableBorderProperties": {
          "dashStyle": "DASH_STYLE_UNSPECIFIED",
          "tableBorderFill": {
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          },
          "weight": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "tableRange": {
          "columnSpan": 0,
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "rowSpan": 0
        }
      },
      "updateTableCellProperties": {
        "fields": "string",
        "objectId": "string",
        "tableCellProperties": {
          "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
          "tableCellBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          }
        },
        "tableRange": {
          "columnSpan": 0,
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "rowSpan": 0
        }
      },
      "updateTableColumnProperties": {
        "columnIndices": [
          0
        ],
        "fields": "string",
        "objectId": "string",
        "tableColumnProperties": {
          "columnWidth": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        }
      },
      "updateTableRowProperties": {
        "fields": "string",
        "objectId": "string",
        "rowIndices": [
          0
        ],
        "tableRowProperties": {
          "minRowHeight": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        }
      },
      "updateTextStyle": {
        "cellLocation": {
          "columnIndex": 0,
          "rowIndex": 0
        },
        "fields": "string",
        "objectId": "string",
        "style": {
          "backgroundColor": {
            "opaqueColor": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
          "bold": true,
          "fontFamily": "string",
          "fontSize": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "foregroundColor": {
            "opaqueColor": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "italic": true,
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "smallCaps": true,
          "strikethrough": true,
          "underline": true,
          "weightedFontFamily": {
            "fontFamily": "string",
            "weight": 0
          }
        },
        "textRange": {
          "endIndex": 0,
          "startIndex": 0,
          "type": "RANGE_TYPE_UNSPECIFIED"
        }
      },
      "updateVideoProperties": {
        "fields": "string",
        "objectId": "string",
        "videoProperties": {
          "autoPlay": true,
          "end": 0,
          "mute": true,
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "start": 0
        }
      }
    }
  ],
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

Request message for PresentationsService.BatchUpdatePresentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[Request](#schemarequest)]|false|none|A list of updates to apply to the presentation.|
|writeControl|[WriteControl](#schemawritecontrol)|false|none|Provides control over how write requests are executed.|

<h2 id="tocS_BatchUpdatePresentationResponse">BatchUpdatePresentationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatepresentationresponse"></a>
<a id="schema_BatchUpdatePresentationResponse"></a>
<a id="tocSbatchupdatepresentationresponse"></a>
<a id="tocsbatchupdatepresentationresponse"></a>

```json
{
  "presentationId": "string",
  "replies": [
    {
      "createImage": {
        "objectId": "string"
      },
      "createLine": {
        "objectId": "string"
      },
      "createShape": {
        "objectId": "string"
      },
      "createSheetsChart": {
        "objectId": "string"
      },
      "createSlide": {
        "objectId": "string"
      },
      "createTable": {
        "objectId": "string"
      },
      "createVideo": {
        "objectId": "string"
      },
      "duplicateObject": {
        "objectId": "string"
      },
      "groupObjects": {
        "objectId": "string"
      },
      "replaceAllShapesWithImage": {
        "occurrencesChanged": 0
      },
      "replaceAllShapesWithSheetsChart": {
        "occurrencesChanged": 0
      },
      "replaceAllText": {
        "occurrencesChanged": 0
      }
    }
  ],
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

Response message from a batch update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|presentationId|string|false|none|The presentation the updates were applied to.|
|replies|[[Response](#schemaresponse)]|false|none|The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.|
|writeControl|[WriteControl](#schemawritecontrol)|false|none|The updated write control after applying the request.|

<h2 id="tocS_Bullet">Bullet</h2>
<!-- backwards compatibility -->
<a id="schemabullet"></a>
<a id="schema_Bullet"></a>
<a id="tocSbullet"></a>
<a id="tocsbullet"></a>

```json
{
  "bulletStyle": {
    "backgroundColor": {
      "opaqueColor": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
    "bold": true,
    "fontFamily": "string",
    "fontSize": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "foregroundColor": {
      "opaqueColor": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "italic": true,
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "smallCaps": true,
    "strikethrough": true,
    "underline": true,
    "weightedFontFamily": {
      "fontFamily": "string",
      "weight": 0
    }
  },
  "glyph": "string",
  "listId": "string",
  "nestingLevel": 0
}
```

Describes the bullet of a paragraph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulletStyle|[TextStyle](#schematextstyle)|false|none|The paragraph specific text style applied to this bullet.|
|glyph|string|false|none|The rendered bullet glyph for this paragraph.|
|listId|string|false|none|The ID of the list this paragraph belongs to.|
|nestingLevel|integer(int32)|false|none|The nesting level of this paragraph in the list.|

<h2 id="tocS_ColorScheme">ColorScheme</h2>
<!-- backwards compatibility -->
<a id="schemacolorscheme"></a>
<a id="schema_ColorScheme"></a>
<a id="tocScolorscheme"></a>
<a id="tocscolorscheme"></a>

```json
{
  "colors": [
    {
      "color": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "type": "THEME_COLOR_TYPE_UNSPECIFIED"
    }
  ]
}
```

The palette of predefined colors for a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[ThemeColorPair](#schemathemecolorpair)]|false|none|The ThemeColorType and corresponding concrete color pairs.|

<h2 id="tocS_ColorStop">ColorStop</h2>
<!-- backwards compatibility -->
<a id="schemacolorstop"></a>
<a id="schema_ColorStop"></a>
<a id="tocScolorstop"></a>
<a id="tocscolorstop"></a>

```json
{
  "alpha": 0,
  "color": {
    "rgbColor": {
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
  },
  "position": 0
}
```

A color and position in a gradient band.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpha|number(float)|false|none|The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.|
|color|[OpaqueColor](#schemaopaquecolor)|false|none|The color of the gradient stop.|
|position|number(float)|false|none|The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].|

<h2 id="tocS_CreateImageRequest">CreateImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagerequest"></a>
<a id="schema_CreateImageRequest"></a>
<a id="tocScreateimagerequest"></a>
<a id="tocscreateimagerequest"></a>

```json
{
  "elementProperties": {
    "pageObjectId": "string",
    "size": {
      "height": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "width": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "transform": {
      "scaleX": 0,
      "scaleY": 0,
      "shearX": 0,
      "shearY": 0,
      "translateX": 0,
      "translateY": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "objectId": "string",
  "url": "string"
}
```

Creates an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elementProperties|[PageElementProperties](#schemapageelementproperties)|false|none|The element properties for the image. When the aspect ratio of the provided size does not match the image aspect ratio, the image is scaled and centered with respect to the size in order to maintain the aspect ratio. The provided transform is applied after this operation. The PageElementProperties.size property is optional. If you don't specify the size, the default size of the image is used. The PageElementProperties.transform property is optional. If you don't specify a transform, the image will be placed at the top-left corner of the page.|
|objectId|string|false|none|A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.|
|url|string|false|none|The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50 MB in size, can't exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF formats. The provided URL must be publicly accessible and up to 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field.|

<h2 id="tocS_CreateImageResponse">CreateImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimageresponse"></a>
<a id="schema_CreateImageResponse"></a>
<a id="tocScreateimageresponse"></a>
<a id="tocscreateimageresponse"></a>

```json
{
  "objectId": "string"
}
```

The result of creating an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the created image.|

<h2 id="tocS_CreateLineRequest">CreateLineRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelinerequest"></a>
<a id="schema_CreateLineRequest"></a>
<a id="tocScreatelinerequest"></a>
<a id="tocscreatelinerequest"></a>

```json
{
  "category": "LINE_CATEGORY_UNSPECIFIED",
  "elementProperties": {
    "pageObjectId": "string",
    "size": {
      "height": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "width": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "transform": {
      "scaleX": 0,
      "scaleY": 0,
      "shearX": 0,
      "shearY": 0,
      "translateX": 0,
      "translateY": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "lineCategory": "STRAIGHT",
  "objectId": "string"
}
```

Creates a line.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The category of the line to be created. The exact line type created is determined based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes precedence. If you do not specify a value for `category`, but specify a value for `line_category`, then the specified `line_category` value is used. If you do not specify either, then STRAIGHT is used.|
|elementProperties|[PageElementProperties](#schemapageelementproperties)|false|none|The element properties for the line.|
|lineCategory|string|false|none|**Deprecated.** The category of the line to be created. *Deprecated*: use `category` instead. The exact line type created is determined based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes precedence.|
|objectId|string|false|none|A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|LINE_CATEGORY_UNSPECIFIED|
|category|STRAIGHT|
|category|BENT|
|category|CURVED|
|lineCategory|STRAIGHT|
|lineCategory|BENT|
|lineCategory|CURVED|

<h2 id="tocS_CreateLineResponse">CreateLineResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelineresponse"></a>
<a id="schema_CreateLineResponse"></a>
<a id="tocScreatelineresponse"></a>
<a id="tocscreatelineresponse"></a>

```json
{
  "objectId": "string"
}
```

The result of creating a line.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the created line.|

<h2 id="tocS_CreateParagraphBulletsRequest">CreateParagraphBulletsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateparagraphbulletsrequest"></a>
<a id="schema_CreateParagraphBulletsRequest"></a>
<a id="tocScreateparagraphbulletsrequest"></a>
<a id="tocscreateparagraphbulletsrequest"></a>

```json
{
  "bulletPreset": "BULLET_DISC_CIRCLE_SQUARE",
  "cellLocation": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "objectId": "string",
  "textRange": {
    "endIndex": 0,
    "startIndex": 0,
    "type": "RANGE_TYPE_UNSPECIFIED"
  }
}
```

Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulletPreset|string|false|none|The kinds of bullet glyphs to be used. Defaults to the `BULLET_DISC_CIRCLE_SQUARE` preset.|
|cellLocation|[TableCellLocation](#schematablecelllocation)|false|none|The optional table cell location if the text to be modified is in a table cell. If present, the object_id must refer to a table.|
|objectId|string|false|none|The object ID of the shape or table containing the text to add bullets to.|
|textRange|[Range](#schemarange)|false|none|The range of text to apply the bullet presets to, based on TextElement indexes.|

#### Enumerated Values

|Property|Value|
|---|---|
|bulletPreset|BULLET_DISC_CIRCLE_SQUARE|
|bulletPreset|BULLET_DIAMONDX_ARROW3D_SQUARE|
|bulletPreset|BULLET_CHECKBOX|
|bulletPreset|BULLET_ARROW_DIAMOND_DISC|
|bulletPreset|BULLET_STAR_CIRCLE_SQUARE|
|bulletPreset|BULLET_ARROW3D_CIRCLE_SQUARE|
|bulletPreset|BULLET_LEFTTRIANGLE_DIAMOND_DISC|
|bulletPreset|BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE|
|bulletPreset|BULLET_DIAMOND_CIRCLE_SQUARE|
|bulletPreset|NUMBERED_DIGIT_ALPHA_ROMAN|
|bulletPreset|NUMBERED_DIGIT_ALPHA_ROMAN_PARENS|
|bulletPreset|NUMBERED_DIGIT_NESTED|
|bulletPreset|NUMBERED_UPPERALPHA_ALPHA_ROMAN|
|bulletPreset|NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT|
|bulletPreset|NUMBERED_ZERODIGIT_ALPHA_ROMAN|

<h2 id="tocS_CreateShapeRequest">CreateShapeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateshaperequest"></a>
<a id="schema_CreateShapeRequest"></a>
<a id="tocScreateshaperequest"></a>
<a id="tocscreateshaperequest"></a>

```json
{
  "elementProperties": {
    "pageObjectId": "string",
    "size": {
      "height": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "width": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "transform": {
      "scaleX": 0,
      "scaleY": 0,
      "shearX": 0,
      "shearY": 0,
      "translateX": 0,
      "translateY": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "objectId": "string",
  "shapeType": "TYPE_UNSPECIFIED"
}
```

Creates a new shape.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elementProperties|[PageElementProperties](#schemapageelementproperties)|false|none|The element properties for the shape.|
|objectId|string|false|none|A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If empty, a unique identifier will be generated.|
|shapeType|string|false|none|The shape type.|

#### Enumerated Values

|Property|Value|
|---|---|
|shapeType|TYPE_UNSPECIFIED|
|shapeType|TEXT_BOX|
|shapeType|RECTANGLE|
|shapeType|ROUND_RECTANGLE|
|shapeType|ELLIPSE|
|shapeType|ARC|
|shapeType|BENT_ARROW|
|shapeType|BENT_UP_ARROW|
|shapeType|BEVEL|
|shapeType|BLOCK_ARC|
|shapeType|BRACE_PAIR|
|shapeType|BRACKET_PAIR|
|shapeType|CAN|
|shapeType|CHEVRON|
|shapeType|CHORD|
|shapeType|CLOUD|
|shapeType|CORNER|
|shapeType|CUBE|
|shapeType|CURVED_DOWN_ARROW|
|shapeType|CURVED_LEFT_ARROW|
|shapeType|CURVED_RIGHT_ARROW|
|shapeType|CURVED_UP_ARROW|
|shapeType|DECAGON|
|shapeType|DIAGONAL_STRIPE|
|shapeType|DIAMOND|
|shapeType|DODECAGON|
|shapeType|DONUT|
|shapeType|DOUBLE_WAVE|
|shapeType|DOWN_ARROW|
|shapeType|DOWN_ARROW_CALLOUT|
|shapeType|FOLDED_CORNER|
|shapeType|FRAME|
|shapeType|HALF_FRAME|
|shapeType|HEART|
|shapeType|HEPTAGON|
|shapeType|HEXAGON|
|shapeType|HOME_PLATE|
|shapeType|HORIZONTAL_SCROLL|
|shapeType|IRREGULAR_SEAL_1|
|shapeType|IRREGULAR_SEAL_2|
|shapeType|LEFT_ARROW|
|shapeType|LEFT_ARROW_CALLOUT|
|shapeType|LEFT_BRACE|
|shapeType|LEFT_BRACKET|
|shapeType|LEFT_RIGHT_ARROW|
|shapeType|LEFT_RIGHT_ARROW_CALLOUT|
|shapeType|LEFT_RIGHT_UP_ARROW|
|shapeType|LEFT_UP_ARROW|
|shapeType|LIGHTNING_BOLT|
|shapeType|MATH_DIVIDE|
|shapeType|MATH_EQUAL|
|shapeType|MATH_MINUS|
|shapeType|MATH_MULTIPLY|
|shapeType|MATH_NOT_EQUAL|
|shapeType|MATH_PLUS|
|shapeType|MOON|
|shapeType|NO_SMOKING|
|shapeType|NOTCHED_RIGHT_ARROW|
|shapeType|OCTAGON|
|shapeType|PARALLELOGRAM|
|shapeType|PENTAGON|
|shapeType|PIE|
|shapeType|PLAQUE|
|shapeType|PLUS|
|shapeType|QUAD_ARROW|
|shapeType|QUAD_ARROW_CALLOUT|
|shapeType|RIBBON|
|shapeType|RIBBON_2|
|shapeType|RIGHT_ARROW|
|shapeType|RIGHT_ARROW_CALLOUT|
|shapeType|RIGHT_BRACE|
|shapeType|RIGHT_BRACKET|
|shapeType|ROUND_1_RECTANGLE|
|shapeType|ROUND_2_DIAGONAL_RECTANGLE|
|shapeType|ROUND_2_SAME_RECTANGLE|
|shapeType|RIGHT_TRIANGLE|
|shapeType|SMILEY_FACE|
|shapeType|SNIP_1_RECTANGLE|
|shapeType|SNIP_2_DIAGONAL_RECTANGLE|
|shapeType|SNIP_2_SAME_RECTANGLE|
|shapeType|SNIP_ROUND_RECTANGLE|
|shapeType|STAR_10|
|shapeType|STAR_12|
|shapeType|STAR_16|
|shapeType|STAR_24|
|shapeType|STAR_32|
|shapeType|STAR_4|
|shapeType|STAR_5|
|shapeType|STAR_6|
|shapeType|STAR_7|
|shapeType|STAR_8|
|shapeType|STRIPED_RIGHT_ARROW|
|shapeType|SUN|
|shapeType|TRAPEZOID|
|shapeType|TRIANGLE|
|shapeType|UP_ARROW|
|shapeType|UP_ARROW_CALLOUT|
|shapeType|UP_DOWN_ARROW|
|shapeType|UTURN_ARROW|
|shapeType|VERTICAL_SCROLL|
|shapeType|WAVE|
|shapeType|WEDGE_ELLIPSE_CALLOUT|
|shapeType|WEDGE_RECTANGLE_CALLOUT|
|shapeType|WEDGE_ROUND_RECTANGLE_CALLOUT|
|shapeType|FLOW_CHART_ALTERNATE_PROCESS|
|shapeType|FLOW_CHART_COLLATE|
|shapeType|FLOW_CHART_CONNECTOR|
|shapeType|FLOW_CHART_DECISION|
|shapeType|FLOW_CHART_DELAY|
|shapeType|FLOW_CHART_DISPLAY|
|shapeType|FLOW_CHART_DOCUMENT|
|shapeType|FLOW_CHART_EXTRACT|
|shapeType|FLOW_CHART_INPUT_OUTPUT|
|shapeType|FLOW_CHART_INTERNAL_STORAGE|
|shapeType|FLOW_CHART_MAGNETIC_DISK|
|shapeType|FLOW_CHART_MAGNETIC_DRUM|
|shapeType|FLOW_CHART_MAGNETIC_TAPE|
|shapeType|FLOW_CHART_MANUAL_INPUT|
|shapeType|FLOW_CHART_MANUAL_OPERATION|
|shapeType|FLOW_CHART_MERGE|
|shapeType|FLOW_CHART_MULTIDOCUMENT|
|shapeType|FLOW_CHART_OFFLINE_STORAGE|
|shapeType|FLOW_CHART_OFFPAGE_CONNECTOR|
|shapeType|FLOW_CHART_ONLINE_STORAGE|
|shapeType|FLOW_CHART_OR|
|shapeType|FLOW_CHART_PREDEFINED_PROCESS|
|shapeType|FLOW_CHART_PREPARATION|
|shapeType|FLOW_CHART_PROCESS|
|shapeType|FLOW_CHART_PUNCHED_CARD|
|shapeType|FLOW_CHART_PUNCHED_TAPE|
|shapeType|FLOW_CHART_SORT|
|shapeType|FLOW_CHART_SUMMING_JUNCTION|
|shapeType|FLOW_CHART_TERMINATOR|
|shapeType|ARROW_EAST|
|shapeType|ARROW_NORTH_EAST|
|shapeType|ARROW_NORTH|
|shapeType|SPEECH|
|shapeType|STARBURST|
|shapeType|TEARDROP|
|shapeType|ELLIPSE_RIBBON|
|shapeType|ELLIPSE_RIBBON_2|
|shapeType|CLOUD_CALLOUT|
|shapeType|CUSTOM|

<h2 id="tocS_CreateShapeResponse">CreateShapeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateshaperesponse"></a>
<a id="schema_CreateShapeResponse"></a>
<a id="tocScreateshaperesponse"></a>
<a id="tocscreateshaperesponse"></a>

```json
{
  "objectId": "string"
}
```

The result of creating a shape.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the created shape.|

<h2 id="tocS_CreateSheetsChartRequest">CreateSheetsChartRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesheetschartrequest"></a>
<a id="schema_CreateSheetsChartRequest"></a>
<a id="tocScreatesheetschartrequest"></a>
<a id="tocscreatesheetschartrequest"></a>

```json
{
  "chartId": 0,
  "elementProperties": {
    "pageObjectId": "string",
    "size": {
      "height": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "width": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "transform": {
      "scaleX": 0,
      "scaleY": 0,
      "shearX": 0,
      "shearY": 0,
      "translateX": 0,
      "translateY": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "linkingMode": "NOT_LINKED_IMAGE",
  "objectId": "string",
  "spreadsheetId": "string"
}
```

Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartId|integer(int32)|false|none|The ID of the specific chart in the Google Sheets spreadsheet.|
|elementProperties|[PageElementProperties](#schemapageelementproperties)|false|none|The element properties for the chart. When the aspect ratio of the provided size does not match the chart aspect ratio, the chart is scaled and centered with respect to the size in order to maintain aspect ratio. The provided transform is applied after this operation.|
|linkingMode|string|false|none|The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.|
|objectId|string|false|none|A user-supplied object ID. If specified, the ID must be unique among all pages and page elements in the presentation. The ID should start with a word character [a-zA-Z0-9_] and then followed by any number of the following characters [a-zA-Z0-9_-:]. The length of the ID should not be less than 5 or greater than 50. If empty, a unique identifier will be generated.|
|spreadsheetId|string|false|none|The ID of the Google Sheets spreadsheet that contains the chart. You might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys).|

#### Enumerated Values

|Property|Value|
|---|---|
|linkingMode|NOT_LINKED_IMAGE|
|linkingMode|LINKED|

<h2 id="tocS_CreateSheetsChartResponse">CreateSheetsChartResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesheetschartresponse"></a>
<a id="schema_CreateSheetsChartResponse"></a>
<a id="tocScreatesheetschartresponse"></a>
<a id="tocscreatesheetschartresponse"></a>

```json
{
  "objectId": "string"
}
```

The result of creating an embedded Google Sheets chart.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the created chart.|

<h2 id="tocS_CreateSlideRequest">CreateSlideRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesliderequest"></a>
<a id="schema_CreateSlideRequest"></a>
<a id="tocScreatesliderequest"></a>
<a id="tocscreatesliderequest"></a>

```json
{
  "insertionIndex": 0,
  "objectId": "string",
  "placeholderIdMappings": [
    {
      "layoutPlaceholder": {
        "index": 0,
        "parentObjectId": "string",
        "type": "NONE"
      },
      "layoutPlaceholderObjectId": "string",
      "objectId": "string"
    }
  ],
  "slideLayoutReference": {
    "layoutId": "string",
    "predefinedLayout": "PREDEFINED_LAYOUT_UNSPECIFIED"
  }
}
```

Creates a slide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insertionIndex|integer(int32)|false|none|The optional zero-based index indicating where to insert the slides. If you don't specify an index, the slide is created at the end.|
|objectId|string|false|none|A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The ID length must be between 5 and 50 characters, inclusive. If you don't specify an ID, a unique one is generated.|
|placeholderIdMappings|[[LayoutPlaceholderIdMapping](#schemalayoutplaceholderidmapping)]|false|none|An optional list of object ID mappings from the placeholder(s) on the layout to the placeholders that are created on the slide from the specified layout. Can only be used when `slide_layout_reference` is specified.|
|slideLayoutReference|[LayoutReference](#schemalayoutreference)|false|none|Layout reference of the slide to be inserted, based on the *current master*, which is one of the following: - The master of the previous slide index. - The master of the first slide, if the insertion_index is zero. - The first master in the presentation, if there are no slides. If the LayoutReference is not found in the current master, a 400 bad request error is returned. If you don't specify a layout reference, the slide uses the predefined `BLANK` layout.|

<h2 id="tocS_CreateSlideResponse">CreateSlideResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateslideresponse"></a>
<a id="schema_CreateSlideResponse"></a>
<a id="tocScreateslideresponse"></a>
<a id="tocscreateslideresponse"></a>

```json
{
  "objectId": "string"
}
```

The result of creating a slide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the created slide.|

<h2 id="tocS_CreateTableRequest">CreateTableRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetablerequest"></a>
<a id="schema_CreateTableRequest"></a>
<a id="tocScreatetablerequest"></a>
<a id="tocscreatetablerequest"></a>

```json
{
  "columns": 0,
  "elementProperties": {
    "pageObjectId": "string",
    "size": {
      "height": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "width": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "transform": {
      "scaleX": 0,
      "scaleY": 0,
      "shearX": 0,
      "shearY": 0,
      "translateX": 0,
      "translateY": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "objectId": "string",
  "rows": 0
}
```

Creates a new table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|integer(int32)|false|none|Number of columns in the table.|
|elementProperties|[PageElementProperties](#schemapageelementproperties)|false|none|The element properties for the table. The table will be created at the provided size, subject to a minimum size. If no size is provided, the table will be automatically sized. Table transforms must have a scale of 1 and no shear components. If no transform is provided, the table will be centered on the page.|
|objectId|string|false|none|A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.|
|rows|integer(int32)|false|none|Number of rows in the table.|

<h2 id="tocS_CreateTableResponse">CreateTableResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetableresponse"></a>
<a id="schema_CreateTableResponse"></a>
<a id="tocScreatetableresponse"></a>
<a id="tocscreatetableresponse"></a>

```json
{
  "objectId": "string"
}
```

The result of creating a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the created table.|

<h2 id="tocS_CreateVideoRequest">CreateVideoRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevideorequest"></a>
<a id="schema_CreateVideoRequest"></a>
<a id="tocScreatevideorequest"></a>
<a id="tocscreatevideorequest"></a>

```json
{
  "elementProperties": {
    "pageObjectId": "string",
    "size": {
      "height": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "width": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "transform": {
      "scaleX": 0,
      "scaleY": 0,
      "shearX": 0,
      "shearY": 0,
      "translateX": 0,
      "translateY": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "id": "string",
  "objectId": "string",
  "source": "SOURCE_UNSPECIFIED"
}
```

Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elementProperties|[PageElementProperties](#schemapageelementproperties)|false|none|The element properties for the video. The PageElementProperties.size property is optional. If you don't specify a size, a default size is chosen by the server. The PageElementProperties.transform property is optional. The transform must not have shear components. If you don't specify a transform, the video will be placed at the top left corner of the page.|
|id|string|false|none|The video source's unique identifier for this video. e.g. For YouTube video https://www.youtube.com/watch?v=7U3axjORYZ0, the ID is 7U3axjORYZ0. For a Google Drive video https://drive.google.com/file/d/1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q the ID is 1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q. To access a Google Drive video file, you might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys).|
|objectId|string|false|none|A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.|
|source|string|false|none|The video source.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|SOURCE_UNSPECIFIED|
|source|YOUTUBE|
|source|DRIVE|

<h2 id="tocS_CreateVideoResponse">CreateVideoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevideoresponse"></a>
<a id="schema_CreateVideoResponse"></a>
<a id="tocScreatevideoresponse"></a>
<a id="tocscreatevideoresponse"></a>

```json
{
  "objectId": "string"
}
```

The result of creating a video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the created video.|

<h2 id="tocS_CropProperties">CropProperties</h2>
<!-- backwards compatibility -->
<a id="schemacropproperties"></a>
<a id="schema_CropProperties"></a>
<a id="tocScropproperties"></a>
<a id="tocscropproperties"></a>

```json
{
  "angle": 0,
  "bottomOffset": 0,
  "leftOffset": 0,
  "rightOffset": 0,
  "topOffset": 0
}
```

The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped. After cropping, the content in the crop rectangle will be stretched to fit its container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|number(float)|false|none|The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.|
|bottomOffset|number(float)|false|none|The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.|
|leftOffset|number(float)|false|none|The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.|
|rightOffset|number(float)|false|none|The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.|
|topOffset|number(float)|false|none|The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.|

<h2 id="tocS_DeleteObjectRequest">DeleteObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectrequest"></a>
<a id="schema_DeleteObjectRequest"></a>
<a id="tocSdeleteobjectrequest"></a>
<a id="tocsdeleteobjectrequest"></a>

```json
{
  "objectId": "string"
}
```

Deletes an object, either pages or page elements, from the presentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the page or page element to delete. If after a delete operation a group contains only 1 or no page elements, the group is also deleted. If a placeholder is deleted on a layout, any empty inheriting placeholders are also deleted.|

<h2 id="tocS_DeleteParagraphBulletsRequest">DeleteParagraphBulletsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteparagraphbulletsrequest"></a>
<a id="schema_DeleteParagraphBulletsRequest"></a>
<a id="tocSdeleteparagraphbulletsrequest"></a>
<a id="tocsdeleteparagraphbulletsrequest"></a>

```json
{
  "cellLocation": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "objectId": "string",
  "textRange": {
    "endIndex": 0,
    "startIndex": 0,
    "type": "RANGE_TYPE_UNSPECIFIED"
  }
}
```

Deletes bullets from all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellLocation|[TableCellLocation](#schematablecelllocation)|false|none|The optional table cell location if the text to be modified is in a table cell. If present, the object_id must refer to a table.|
|objectId|string|false|none|The object ID of the shape or table containing the text to delete bullets from.|
|textRange|[Range](#schemarange)|false|none|The range of text to delete bullets from, based on TextElement indexes.|

<h2 id="tocS_DeleteTableColumnRequest">DeleteTableColumnRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetablecolumnrequest"></a>
<a id="schema_DeleteTableColumnRequest"></a>
<a id="tocSdeletetablecolumnrequest"></a>
<a id="tocsdeletetablecolumnrequest"></a>

```json
{
  "cellLocation": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "tableObjectId": "string"
}
```

Deletes a column from a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellLocation|[TableCellLocation](#schematablecelllocation)|false|none|The reference table cell location from which a column will be deleted. The column this cell spans will be deleted. If this is a merged cell, multiple columns will be deleted. If no columns remain in the table after this deletion, the whole table is deleted.|
|tableObjectId|string|false|none|The table to delete columns from.|

<h2 id="tocS_DeleteTableRowRequest">DeleteTableRowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetablerowrequest"></a>
<a id="schema_DeleteTableRowRequest"></a>
<a id="tocSdeletetablerowrequest"></a>
<a id="tocsdeletetablerowrequest"></a>

```json
{
  "cellLocation": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "tableObjectId": "string"
}
```

Deletes a row from a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellLocation|[TableCellLocation](#schematablecelllocation)|false|none|The reference table cell location from which a row will be deleted. The row this cell spans will be deleted. If this is a merged cell, multiple rows will be deleted. If no rows remain in the table after this deletion, the whole table is deleted.|
|tableObjectId|string|false|none|The table to delete rows from.|

<h2 id="tocS_DeleteTextRequest">DeleteTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetextrequest"></a>
<a id="schema_DeleteTextRequest"></a>
<a id="tocSdeletetextrequest"></a>
<a id="tocsdeletetextrequest"></a>

```json
{
  "cellLocation": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "objectId": "string",
  "textRange": {
    "endIndex": 0,
    "startIndex": 0,
    "type": "RANGE_TYPE_UNSPECIFIED"
  }
}
```

Deletes text from a shape or a table cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellLocation|[TableCellLocation](#schematablecelllocation)|false|none|The optional table cell location if the text is to be deleted from a table cell. If present, the object_id must refer to a table.|
|objectId|string|false|none|The object ID of the shape or table from which the text will be deleted.|
|textRange|[Range](#schemarange)|false|none|The range of text to delete, based on TextElement indexes. There is always an implicit newline character at the end of a shape's or table cell's text that cannot be deleted. `Range.Type.ALL` will use the correct bounds, but care must be taken when specifying explicit bounds for range types `FROM_START_INDEX` and `FIXED_RANGE`. For example, if the text is "ABC", followed by an implicit newline, then the maximum value is 2 for `text_range.start_index` and 3 for `text_range.end_index`. Deleting text that crosses a paragraph boundary may result in changes to paragraph styles and lists as the two paragraphs are merged. Ranges that include only one code unit of a surrogate pair are expanded to include both code units.|

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "magnitude": 0,
  "unit": "UNIT_UNSPECIFIED"
}
```

A magnitude in a single direction in the specified units.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|magnitude|number(double)|false|none|The magnitude.|
|unit|string|false|none|The units for magnitude.|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|UNIT_UNSPECIFIED|
|unit|EMU|
|unit|PT|

<h2 id="tocS_DuplicateObjectRequest">DuplicateObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateobjectrequest"></a>
<a id="schema_DuplicateObjectRequest"></a>
<a id="tocSduplicateobjectrequest"></a>
<a id="tocsduplicateobjectrequest"></a>

```json
{
  "objectId": "string",
  "objectIds": {
    "property1": "string",
    "property2": "string"
  }
}
```

Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The ID of the object to duplicate.|
|objectIds|object|false|none|The object being duplicated may contain other objects, for example when duplicating a slide or a group page element. This map defines how the IDs of duplicated objects are generated: the keys are the IDs of the original objects and its values are the IDs that will be assigned to the corresponding duplicate object. The ID of the source object's duplicate may be specified in this map as well, using the same value of the `object_id` field as a key and the newly desired ID as the value. All keys must correspond to existing IDs in the presentation. All values must be unique in the presentation and must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or greater than 50. If any IDs of source objects are omitted from the map, a new random ID will be assigned. If the map is empty or unset, all duplicate objects will receive a new random ID.|

<h2 id="tocS_DuplicateObjectResponse">DuplicateObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateobjectresponse"></a>
<a id="schema_DuplicateObjectResponse"></a>
<a id="tocSduplicateobjectresponse"></a>
<a id="tocsduplicateobjectresponse"></a>

```json
{
  "objectId": "string"
}
```

The response of duplicating an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The ID of the new duplicate object.|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "children": [
    {
      "description": "string",
      "elementGroup": {},
      "image": {
        "contentUrl": "string",
        "imageProperties": {
          "brightness": 0,
          "contrast": 0,
          "cropProperties": {
            "angle": 0,
            "bottomOffset": 0,
            "leftOffset": 0,
            "rightOffset": 0,
            "topOffset": 0
          },
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "recolor": {
            "name": "NONE",
            "recolorStops": [
              {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                },
                "position": 0
              }
            ]
          },
          "shadow": {
            "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
            "alpha": 0,
            "blurRadius": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "propertyState": "RENDERED",
            "rotateWithShape": true,
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "type": "SHADOW_TYPE_UNSPECIFIED"
          },
          "transparency": 0
        },
        "placeholder": {
          "index": 0,
          "parentObjectId": "string",
          "type": "NONE"
        },
        "sourceUrl": "string"
      },
      "line": {
        "lineCategory": "LINE_CATEGORY_UNSPECIFIED",
        "lineProperties": {
          "dashStyle": "DASH_STYLE_UNSPECIFIED",
          "endArrow": "ARROW_STYLE_UNSPECIFIED",
          "endConnection": {
            "connectedObjectId": "string",
            "connectionSiteIndex": 0
          },
          "lineFill": {
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          },
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "startArrow": "ARROW_STYLE_UNSPECIFIED",
          "startConnection": {
            "connectedObjectId": "string",
            "connectionSiteIndex": 0
          },
          "weight": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "lineType": "TYPE_UNSPECIFIED"
      },
      "objectId": "string",
      "shape": {
        "placeholder": {
          "index": 0,
          "parentObjectId": "string",
          "type": "NONE"
        },
        "shapeProperties": {
          "autofit": {
            "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
            "fontScale": 0,
            "lineSpacingReduction": 0
          },
          "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "shadow": {
            "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
            "alpha": 0,
            "blurRadius": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "propertyState": "RENDERED",
            "rotateWithShape": true,
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "type": "SHADOW_TYPE_UNSPECIFIED"
          },
          "shapeBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          }
        },
        "shapeType": "TYPE_UNSPECIFIED",
        "text": {
          "lists": {
            "property1": {
              "listId": "string",
              "nestingLevel": {
                "property1": {
                  "bulletStyle": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  }
                },
                "property2": {
                  "bulletStyle": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  }
                }
              }
            },
            "property2": {
              "listId": "string",
              "nestingLevel": {
                "property1": {
                  "bulletStyle": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  }
                },
                "property2": {
                  "bulletStyle": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  }
                }
              }
            }
          },
          "textElements": [
            {
              "autoText": {
                "content": "string",
                "style": {
                  "backgroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                  "bold": true,
                  "fontFamily": "string",
                  "fontSize": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "foregroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "italic": true,
                  "link": {
                    "pageObjectId": "string",
                    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                    "slideIndex": 0,
                    "url": "string"
                  },
                  "smallCaps": true,
                  "strikethrough": true,
                  "underline": true,
                  "weightedFontFamily": {
                    "fontFamily": "string",
                    "weight": 0
                  }
                },
                "type": "TYPE_UNSPECIFIED"
              },
              "endIndex": 0,
              "paragraphMarker": {
                "bullet": {
                  "bulletStyle": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  },
                  "glyph": "string",
                  "listId": "string",
                  "nestingLevel": 0
                },
                "style": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "direction": "TEXT_DIRECTION_UNSPECIFIED",
                  "indentEnd": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "indentFirstLine": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "indentStart": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "lineSpacing": 0,
                  "spaceAbove": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "spaceBelow": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "spacingMode": "SPACING_MODE_UNSPECIFIED"
                }
              },
              "startIndex": 0,
              "textRun": {
                "content": "string",
                "style": {
                  "backgroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                  "bold": true,
                  "fontFamily": "string",
                  "fontSize": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "foregroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "italic": true,
                  "link": {
                    "pageObjectId": "string",
                    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                    "slideIndex": 0,
                    "url": "string"
                  },
                  "smallCaps": true,
                  "strikethrough": true,
                  "underline": true,
                  "weightedFontFamily": {
                    "fontFamily": "string",
                    "weight": 0
                  }
                }
              }
            }
          ]
        }
      },
      "sheetsChart": {
        "chartId": 0,
        "contentUrl": "string",
        "sheetsChartProperties": {
          "chartImageProperties": {
            "brightness": 0,
            "contrast": 0,
            "cropProperties": {
              "angle": 0,
              "bottomOffset": 0,
              "leftOffset": 0,
              "rightOffset": 0,
              "topOffset": 0
            },
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "outline": {
              "dashStyle": "DASH_STYLE_UNSPECIFIED",
              "outlineFill": {
                "solidFill": {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                }
              },
              "propertyState": "RENDERED",
              "weight": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "recolor": {
              "name": "NONE",
              "recolorStops": [
                {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  },
                  "position": 0
                }
              ]
            },
            "shadow": {
              "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
              "alpha": 0,
              "blurRadius": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              },
              "propertyState": "RENDERED",
              "rotateWithShape": true,
              "transform": {
                "scaleX": 0,
                "scaleY": 0,
                "shearX": 0,
                "shearY": 0,
                "translateX": 0,
                "translateY": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "type": "SHADOW_TYPE_UNSPECIFIED"
            },
            "transparency": 0
          }
        },
        "spreadsheetId": "string"
      },
      "size": {
        "height": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "width": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "table": {
        "columns": 0,
        "horizontalBorderRows": [
          {
            "tableBorderCells": [
              {
                "location": {
                  "columnIndex": 0,
                  "rowIndex": 0
                },
                "tableBorderProperties": {
                  "dashStyle": "DASH_STYLE_UNSPECIFIED",
                  "tableBorderFill": {
                    "solidFill": {
                      "alpha": 0,
                      "color": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    }
                  },
                  "weight": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  }
                }
              }
            ]
          }
        ],
        "rows": 0,
        "tableColumns": [
          {
            "columnWidth": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        ],
        "tableRows": [
          {
            "rowHeight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "tableCells": [
              {
                "columnSpan": 0,
                "location": {
                  "columnIndex": 0,
                  "rowIndex": 0
                },
                "rowSpan": 0,
                "tableCellProperties": {
                  "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
                  "tableCellBackgroundFill": {
                    "propertyState": "RENDERED",
                    "solidFill": {
                      "alpha": 0,
                      "color": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    }
                  }
                },
                "text": {
                  "lists": {
                    "property1": {
                      "listId": "string",
                      "nestingLevel": {
                        "property1": {
                          "bulletStyle": {
                            "backgroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                            "bold": true,
                            "fontFamily": "string",
                            "fontSize": {
                              "magnitude": 0,
                              "unit": "UNIT_UNSPECIFIED"
                            },
                            "foregroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "italic": true,
                            "link": {
                              "pageObjectId": "string",
                              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                              "slideIndex": 0,
                              "url": "string"
                            },
                            "smallCaps": true,
                            "strikethrough": true,
                            "underline": true,
                            "weightedFontFamily": {
                              "fontFamily": "string",
                              "weight": 0
                            }
                          }
                        },
                        "property2": {
                          "bulletStyle": {
                            "backgroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                            "bold": true,
                            "fontFamily": "string",
                            "fontSize": {
                              "magnitude": 0,
                              "unit": "UNIT_UNSPECIFIED"
                            },
                            "foregroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "italic": true,
                            "link": {
                              "pageObjectId": "string",
                              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                              "slideIndex": 0,
                              "url": "string"
                            },
                            "smallCaps": true,
                            "strikethrough": true,
                            "underline": true,
                            "weightedFontFamily": {
                              "fontFamily": "string",
                              "weight": 0
                            }
                          }
                        }
                      }
                    },
                    "property2": {
                      "listId": "string",
                      "nestingLevel": {
                        "property1": {
                          "bulletStyle": {
                            "backgroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                            "bold": true,
                            "fontFamily": "string",
                            "fontSize": {
                              "magnitude": 0,
                              "unit": "UNIT_UNSPECIFIED"
                            },
                            "foregroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "italic": true,
                            "link": {
                              "pageObjectId": "string",
                              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                              "slideIndex": 0,
                              "url": "string"
                            },
                            "smallCaps": true,
                            "strikethrough": true,
                            "underline": true,
                            "weightedFontFamily": {
                              "fontFamily": "string",
                              "weight": 0
                            }
                          }
                        },
                        "property2": {
                          "bulletStyle": {
                            "backgroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                            "bold": true,
                            "fontFamily": "string",
                            "fontSize": {
                              "magnitude": 0,
                              "unit": "UNIT_UNSPECIFIED"
                            },
                            "foregroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "italic": true,
                            "link": {
                              "pageObjectId": "string",
                              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                              "slideIndex": 0,
                              "url": "string"
                            },
                            "smallCaps": true,
                            "strikethrough": true,
                            "underline": true,
                            "weightedFontFamily": {
                              "fontFamily": "string",
                              "weight": 0
                            }
                          }
                        }
                      }
                    }
                  },
                  "textElements": [
                    {
                      "autoText": {
                        "content": "string",
                        "style": {
                          "backgroundColor": {
                            "opaqueColor": {
                              "rgbColor": {
                                "blue": 0,
                                "green": 0,
                                "red": 0
                              },
                              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                            }
                          },
                          "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                          "bold": true,
                          "fontFamily": "string",
                          "fontSize": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "foregroundColor": {
                            "opaqueColor": {
                              "rgbColor": {
                                "blue": 0,
                                "green": 0,
                                "red": 0
                              },
                              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                            }
                          },
                          "italic": true,
                          "link": {
                            "pageObjectId": "string",
                            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                            "slideIndex": 0,
                            "url": "string"
                          },
                          "smallCaps": true,
                          "strikethrough": true,
                          "underline": true,
                          "weightedFontFamily": {
                            "fontFamily": "string",
                            "weight": 0
                          }
                        },
                        "type": "TYPE_UNSPECIFIED"
                      },
                      "endIndex": 0,
                      "paragraphMarker": {
                        "bullet": {
                          "bulletStyle": {
                            "backgroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                            "bold": true,
                            "fontFamily": "string",
                            "fontSize": {
                              "magnitude": 0,
                              "unit": "UNIT_UNSPECIFIED"
                            },
                            "foregroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "italic": true,
                            "link": {
                              "pageObjectId": "string",
                              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                              "slideIndex": 0,
                              "url": "string"
                            },
                            "smallCaps": true,
                            "strikethrough": true,
                            "underline": true,
                            "weightedFontFamily": {
                              "fontFamily": "string",
                              "weight": 0
                            }
                          },
                          "glyph": "string",
                          "listId": "string",
                          "nestingLevel": 0
                        },
                        "style": {
                          "alignment": "ALIGNMENT_UNSPECIFIED",
                          "direction": "TEXT_DIRECTION_UNSPECIFIED",
                          "indentEnd": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "indentFirstLine": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "indentStart": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "lineSpacing": 0,
                          "spaceAbove": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "spaceBelow": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "spacingMode": "SPACING_MODE_UNSPECIFIED"
                        }
                      },
                      "startIndex": 0,
                      "textRun": {
                        "content": "string",
                        "style": {
                          "backgroundColor": {
                            "opaqueColor": {
                              "rgbColor": {
                                "blue": 0,
                                "green": 0,
                                "red": 0
                              },
                              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                            }
                          },
                          "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                          "bold": true,
                          "fontFamily": "string",
                          "fontSize": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "foregroundColor": {
                            "opaqueColor": {
                              "rgbColor": {
                                "blue": 0,
                                "green": 0,
                                "red": 0
                              },
                              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                            }
                          },
                          "italic": true,
                          "link": {
                            "pageObjectId": "string",
                            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                            "slideIndex": 0,
                            "url": "string"
                          },
                          "smallCaps": true,
                          "strikethrough": true,
                          "underline": true,
                          "weightedFontFamily": {
                            "fontFamily": "string",
                            "weight": 0
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "tableRowProperties": {
              "minRowHeight": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        ],
        "verticalBorderRows": [
          {
            "tableBorderCells": [
              {
                "location": {
                  "columnIndex": 0,
                  "rowIndex": 0
                },
                "tableBorderProperties": {
                  "dashStyle": "DASH_STYLE_UNSPECIFIED",
                  "tableBorderFill": {
                    "solidFill": {
                      "alpha": 0,
                      "color": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    }
                  },
                  "weight": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  }
                }
              }
            ]
          }
        ]
      },
      "title": "string",
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "video": {
        "id": "string",
        "source": "SOURCE_UNSPECIFIED",
        "url": "string",
        "videoProperties": {
          "autoPlay": true,
          "end": 0,
          "mute": true,
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "start": 0
        }
      },
      "wordArt": {
        "renderedText": "string"
      }
    }
  ]
}
```

A PageElement kind representing a joined collection of PageElements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[[PageElement](#schemapageelement)]|false|none|The collection of elements in the group. The minimum size of a group is 2.|

<h2 id="tocS_GroupObjectsRequest">GroupObjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagroupobjectsrequest"></a>
<a id="schema_GroupObjectsRequest"></a>
<a id="tocSgroupobjectsrequest"></a>
<a id="tocsgroupobjectsrequest"></a>

```json
{
  "childrenObjectIds": [
    "string"
  ],
  "groupObjectId": "string"
}
```

Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childrenObjectIds|[string]|false|none|The object IDs of the objects to group. Only page elements can be grouped. There should be at least two page elements on the same page that are not already in another group. Some page elements, such as videos, tables and placeholders cannot be grouped.|
|groupObjectId|string|false|none|A user-supplied object ID for the group to be created. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.|

<h2 id="tocS_GroupObjectsResponse">GroupObjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagroupobjectsresponse"></a>
<a id="schema_GroupObjectsResponse"></a>
<a id="tocSgroupobjectsresponse"></a>
<a id="tocsgroupobjectsresponse"></a>

```json
{
  "objectId": "string"
}
```

The result of grouping objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the created group.|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "contentUrl": "string",
  "imageProperties": {
    "brightness": 0,
    "contrast": 0,
    "cropProperties": {
      "angle": 0,
      "bottomOffset": 0,
      "leftOffset": 0,
      "rightOffset": 0,
      "topOffset": 0
    },
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "outline": {
      "dashStyle": "DASH_STYLE_UNSPECIFIED",
      "outlineFill": {
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      },
      "propertyState": "RENDERED",
      "weight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "recolor": {
      "name": "NONE",
      "recolorStops": [
        {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          },
          "position": 0
        }
      ]
    },
    "shadow": {
      "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
      "alpha": 0,
      "blurRadius": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      },
      "propertyState": "RENDERED",
      "rotateWithShape": true,
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "type": "SHADOW_TYPE_UNSPECIFIED"
    },
    "transparency": 0
  },
  "placeholder": {
    "index": 0,
    "parentObjectId": "string",
    "type": "NONE"
  },
  "sourceUrl": "string"
}
```

A PageElement kind representing an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentUrl|string|false|none|An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.|
|imageProperties|[ImageProperties](#schemaimageproperties)|false|none|The properties of the image.|
|placeholder|[Placeholder](#schemaplaceholder)|false|none|Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the image is a placeholder image and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.|
|sourceUrl|string|false|none|The source URL is the URL used to insert the image. The source URL can be empty.|

<h2 id="tocS_ImageProperties">ImageProperties</h2>
<!-- backwards compatibility -->
<a id="schemaimageproperties"></a>
<a id="schema_ImageProperties"></a>
<a id="tocSimageproperties"></a>
<a id="tocsimageproperties"></a>

```json
{
  "brightness": 0,
  "contrast": 0,
  "cropProperties": {
    "angle": 0,
    "bottomOffset": 0,
    "leftOffset": 0,
    "rightOffset": 0,
    "topOffset": 0
  },
  "link": {
    "pageObjectId": "string",
    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
    "slideIndex": 0,
    "url": "string"
  },
  "outline": {
    "dashStyle": "DASH_STYLE_UNSPECIFIED",
    "outlineFill": {
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    },
    "propertyState": "RENDERED",
    "weight": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "recolor": {
    "name": "NONE",
    "recolorStops": [
      {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        },
        "position": 0
      }
    ]
  },
  "shadow": {
    "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
    "alpha": 0,
    "blurRadius": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "color": {
      "rgbColor": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
    },
    "propertyState": "RENDERED",
    "rotateWithShape": true,
    "transform": {
      "scaleX": 0,
      "scaleY": 0,
      "shearX": 0,
      "shearY": 0,
      "translateX": 0,
      "translateY": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "type": "SHADOW_TYPE_UNSPECIFIED"
  },
  "transparency": 0
}
```

The properties of the Image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brightness|number(float)|false|none|The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.|
|contrast|number(float)|false|none|The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.|
|cropProperties|[CropProperties](#schemacropproperties)|false|none|The crop properties of the image. If not set, the image is not cropped. This property is read-only.|
|link|[Link](#schemalink)|false|none|The hyperlink destination of the image. If unset, there is no link.|
|outline|[Outline](#schemaoutline)|false|none|The outline of the image. If not set, the image has no outline.|
|recolor|[Recolor](#schemarecolor)|false|none|The recolor effect of the image. If not set, the image is not recolored. This property is read-only.|
|shadow|[Shadow](#schemashadow)|false|none|The shadow of the image. If not set, the image has no shadow. This property is read-only.|
|transparency|number(float)|false|none|The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.|

<h2 id="tocS_InsertTableColumnsRequest">InsertTableColumnsRequest</h2>
<!-- backwards compatibility -->
<a id="schemainserttablecolumnsrequest"></a>
<a id="schema_InsertTableColumnsRequest"></a>
<a id="tocSinserttablecolumnsrequest"></a>
<a id="tocsinserttablecolumnsrequest"></a>

```json
{
  "cellLocation": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "insertRight": true,
  "number": 0,
  "tableObjectId": "string"
}
```

Inserts columns into a table. Other columns in the table will be resized to fit the new column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellLocation|[TableCellLocation](#schematablecelllocation)|false|none|The reference table cell location from which columns will be inserted. A new column will be inserted to the left (or right) of the column where the reference cell is. If the reference cell is a merged cell, a new column will be inserted to the left (or right) of the merged cell.|
|insertRight|boolean|false|none|Whether to insert new columns to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left.|
|number|integer(int32)|false|none|The number of columns to be inserted. Maximum 20 per request.|
|tableObjectId|string|false|none|The table to insert columns into.|

<h2 id="tocS_InsertTableRowsRequest">InsertTableRowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemainserttablerowsrequest"></a>
<a id="schema_InsertTableRowsRequest"></a>
<a id="tocSinserttablerowsrequest"></a>
<a id="tocsinserttablerowsrequest"></a>

```json
{
  "cellLocation": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "insertBelow": true,
  "number": 0,
  "tableObjectId": "string"
}
```

Inserts rows into a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellLocation|[TableCellLocation](#schematablecelllocation)|false|none|The reference table cell location from which rows will be inserted. A new row will be inserted above (or below) the row where the reference cell is. If the reference cell is a merged cell, a new row will be inserted above (or below) the merged cell.|
|insertBelow|boolean|false|none|Whether to insert new rows below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell.|
|number|integer(int32)|false|none|The number of rows to be inserted. Maximum 20 per request.|
|tableObjectId|string|false|none|The table to insert rows into.|

<h2 id="tocS_InsertTextRequest">InsertTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemainserttextrequest"></a>
<a id="schema_InsertTextRequest"></a>
<a id="tocSinserttextrequest"></a>
<a id="tocsinserttextrequest"></a>

```json
{
  "cellLocation": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "insertionIndex": 0,
  "objectId": "string",
  "text": "string"
}
```

Inserts text into a shape or a table cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellLocation|[TableCellLocation](#schematablecelllocation)|false|none|The optional table cell location if the text is to be inserted into a table cell. If present, the object_id must refer to a table.|
|insertionIndex|integer(int32)|false|none|The index where the text will be inserted, in Unicode code units, based on TextElement indexes. The index is zero-based and is computed from the start of the string. The index may be adjusted to prevent insertions inside Unicode grapheme clusters. In these cases, the text will be inserted immediately after the grapheme cluster.|
|objectId|string|false|none|The object ID of the shape or table where the text will be inserted.|
|text|string|false|none|The text to be inserted. Inserting a newline character will implicitly create a new ParagraphMarker at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text will be added to the TextRun that exists at the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.|

<h2 id="tocS_LayoutPlaceholderIdMapping">LayoutPlaceholderIdMapping</h2>
<!-- backwards compatibility -->
<a id="schemalayoutplaceholderidmapping"></a>
<a id="schema_LayoutPlaceholderIdMapping"></a>
<a id="tocSlayoutplaceholderidmapping"></a>
<a id="tocslayoutplaceholderidmapping"></a>

```json
{
  "layoutPlaceholder": {
    "index": 0,
    "parentObjectId": "string",
    "type": "NONE"
  },
  "layoutPlaceholderObjectId": "string",
  "objectId": "string"
}
```

The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|layoutPlaceholder|[Placeholder](#schemaplaceholder)|false|none|The placeholder on a layout that will be applied to a slide. Only type and index are needed. For example, a predefined `TITLE_AND_BODY` layout may usually have a TITLE placeholder with index 0 and a BODY placeholder with index 0.|
|layoutPlaceholderObjectId|string|false|none|The object ID of the placeholder on a layout that will be applied to a slide.|
|objectId|string|false|none|A user-supplied object ID for the placeholder identified above that to be created onto a slide. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.|

<h2 id="tocS_LayoutProperties">LayoutProperties</h2>
<!-- backwards compatibility -->
<a id="schemalayoutproperties"></a>
<a id="schema_LayoutProperties"></a>
<a id="tocSlayoutproperties"></a>
<a id="tocslayoutproperties"></a>

```json
{
  "displayName": "string",
  "masterObjectId": "string",
  "name": "string"
}
```

The properties of Page are only relevant for pages with page_type LAYOUT.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human-readable name of the layout.|
|masterObjectId|string|false|none|The object ID of the master that this layout is based on.|
|name|string|false|none|The name of the layout.|

<h2 id="tocS_LayoutReference">LayoutReference</h2>
<!-- backwards compatibility -->
<a id="schemalayoutreference"></a>
<a id="schema_LayoutReference"></a>
<a id="tocSlayoutreference"></a>
<a id="tocslayoutreference"></a>

```json
{
  "layoutId": "string",
  "predefinedLayout": "PREDEFINED_LAYOUT_UNSPECIFIED"
}
```

Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|layoutId|string|false|none|Layout ID: the object ID of one of the layouts in the presentation.|
|predefinedLayout|string|false|none|Predefined layout.|

#### Enumerated Values

|Property|Value|
|---|---|
|predefinedLayout|PREDEFINED_LAYOUT_UNSPECIFIED|
|predefinedLayout|BLANK|
|predefinedLayout|CAPTION_ONLY|
|predefinedLayout|TITLE|
|predefinedLayout|TITLE_AND_BODY|
|predefinedLayout|TITLE_AND_TWO_COLUMNS|
|predefinedLayout|TITLE_ONLY|
|predefinedLayout|SECTION_HEADER|
|predefinedLayout|SECTION_TITLE_AND_DESCRIPTION|
|predefinedLayout|ONE_COLUMN_TEXT|
|predefinedLayout|MAIN_POINT|
|predefinedLayout|BIG_NUMBER|

<h2 id="tocS_Line">Line</h2>
<!-- backwards compatibility -->
<a id="schemaline"></a>
<a id="schema_Line"></a>
<a id="tocSline"></a>
<a id="tocsline"></a>

```json
{
  "lineCategory": "LINE_CATEGORY_UNSPECIFIED",
  "lineProperties": {
    "dashStyle": "DASH_STYLE_UNSPECIFIED",
    "endArrow": "ARROW_STYLE_UNSPECIFIED",
    "endConnection": {
      "connectedObjectId": "string",
      "connectionSiteIndex": 0
    },
    "lineFill": {
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    },
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "startArrow": "ARROW_STYLE_UNSPECIFIED",
    "startConnection": {
      "connectedObjectId": "string",
      "connectionSiteIndex": 0
    },
    "weight": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "lineType": "TYPE_UNSPECIFIED"
}
```

A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineCategory|string|false|none|The category of the line. It matches the `category` specified in CreateLineRequest, and can be updated with UpdateLineCategoryRequest.|
|lineProperties|[LineProperties](#schemalineproperties)|false|none|The properties of the line.|
|lineType|string|false|none|The type of the line.|

#### Enumerated Values

|Property|Value|
|---|---|
|lineCategory|LINE_CATEGORY_UNSPECIFIED|
|lineCategory|STRAIGHT|
|lineCategory|BENT|
|lineCategory|CURVED|
|lineType|TYPE_UNSPECIFIED|
|lineType|STRAIGHT_CONNECTOR_1|
|lineType|BENT_CONNECTOR_2|
|lineType|BENT_CONNECTOR_3|
|lineType|BENT_CONNECTOR_4|
|lineType|BENT_CONNECTOR_5|
|lineType|CURVED_CONNECTOR_2|
|lineType|CURVED_CONNECTOR_3|
|lineType|CURVED_CONNECTOR_4|
|lineType|CURVED_CONNECTOR_5|
|lineType|STRAIGHT_LINE|

<h2 id="tocS_LineConnection">LineConnection</h2>
<!-- backwards compatibility -->
<a id="schemalineconnection"></a>
<a id="schema_LineConnection"></a>
<a id="tocSlineconnection"></a>
<a id="tocslineconnection"></a>

```json
{
  "connectedObjectId": "string",
  "connectionSiteIndex": 0
}
```

The properties for one end of a Line connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectedObjectId|string|false|none|The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.|
|connectionSiteIndex|integer(int32)|false|none|The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in the description of the "cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats-Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition] (http://www.ecma-international.org/publications/standards/Ecma-376.htm). The position of each connection site can also be viewed from Slides editor.|

<h2 id="tocS_LineFill">LineFill</h2>
<!-- backwards compatibility -->
<a id="schemalinefill"></a>
<a id="schema_LineFill"></a>
<a id="tocSlinefill"></a>
<a id="tocslinefill"></a>

```json
{
  "solidFill": {
    "alpha": 0,
    "color": {
      "rgbColor": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
    }
  }
}
```

The fill of the line.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solidFill|[SolidFill](#schemasolidfill)|false|none|Solid color fill.|

<h2 id="tocS_LineProperties">LineProperties</h2>
<!-- backwards compatibility -->
<a id="schemalineproperties"></a>
<a id="schema_LineProperties"></a>
<a id="tocSlineproperties"></a>
<a id="tocslineproperties"></a>

```json
{
  "dashStyle": "DASH_STYLE_UNSPECIFIED",
  "endArrow": "ARROW_STYLE_UNSPECIFIED",
  "endConnection": {
    "connectedObjectId": "string",
    "connectionSiteIndex": 0
  },
  "lineFill": {
    "solidFill": {
      "alpha": 0,
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    }
  },
  "link": {
    "pageObjectId": "string",
    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
    "slideIndex": 0,
    "url": "string"
  },
  "startArrow": "ARROW_STYLE_UNSPECIFIED",
  "startConnection": {
    "connectedObjectId": "string",
    "connectionSiteIndex": 0
  },
  "weight": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  }
}
```

The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashStyle|string|false|none|The dash style of the line.|
|endArrow|string|false|none|The style of the arrow at the end of the line.|
|endConnection|[LineConnection](#schemalineconnection)|false|none|The connection at the end of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have an `end_connection`.|
|lineFill|[LineFill](#schemalinefill)|false|none|The fill of the line. The default line fill matches the defaults for new lines created in the Slides editor.|
|link|[Link](#schemalink)|false|none|The hyperlink destination of the line. If unset, there is no link.|
|startArrow|string|false|none|The style of the arrow at the beginning of the line.|
|startConnection|[LineConnection](#schemalineconnection)|false|none|The connection at the beginning of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have a `start_connection`.|
|weight|[Dimension](#schemadimension)|false|none|The thickness of the line.|

#### Enumerated Values

|Property|Value|
|---|---|
|dashStyle|DASH_STYLE_UNSPECIFIED|
|dashStyle|SOLID|
|dashStyle|DOT|
|dashStyle|DASH|
|dashStyle|DASH_DOT|
|dashStyle|LONG_DASH|
|dashStyle|LONG_DASH_DOT|
|endArrow|ARROW_STYLE_UNSPECIFIED|
|endArrow|NONE|
|endArrow|STEALTH_ARROW|
|endArrow|FILL_ARROW|
|endArrow|FILL_CIRCLE|
|endArrow|FILL_SQUARE|
|endArrow|FILL_DIAMOND|
|endArrow|OPEN_ARROW|
|endArrow|OPEN_CIRCLE|
|endArrow|OPEN_SQUARE|
|endArrow|OPEN_DIAMOND|
|startArrow|ARROW_STYLE_UNSPECIFIED|
|startArrow|NONE|
|startArrow|STEALTH_ARROW|
|startArrow|FILL_ARROW|
|startArrow|FILL_CIRCLE|
|startArrow|FILL_SQUARE|
|startArrow|FILL_DIAMOND|
|startArrow|OPEN_ARROW|
|startArrow|OPEN_CIRCLE|
|startArrow|OPEN_SQUARE|
|startArrow|OPEN_DIAMOND|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "pageObjectId": "string",
  "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
  "slideIndex": 0,
  "url": "string"
}
```

A hypertext link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageObjectId|string|false|none|If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.|
|relativeLink|string|false|none|If set, indicates this is a link to a slide in this presentation, addressed by its position.|
|slideIndex|integer(int32)|false|none|If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.|
|url|string|false|none|If set, indicates this is a link to the external web page at this URL.|

#### Enumerated Values

|Property|Value|
|---|---|
|relativeLink|RELATIVE_SLIDE_LINK_UNSPECIFIED|
|relativeLink|NEXT_SLIDE|
|relativeLink|PREVIOUS_SLIDE|
|relativeLink|FIRST_SLIDE|
|relativeLink|LAST_SLIDE|

<h2 id="tocS_List">List</h2>
<!-- backwards compatibility -->
<a id="schemalist"></a>
<a id="schema_List"></a>
<a id="tocSlist"></a>
<a id="tocslist"></a>

```json
{
  "listId": "string",
  "nestingLevel": {
    "property1": {
      "bulletStyle": {
        "backgroundColor": {
          "opaqueColor": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
        "bold": true,
        "fontFamily": "string",
        "fontSize": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "foregroundColor": {
          "opaqueColor": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "italic": true,
        "link": {
          "pageObjectId": "string",
          "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
          "slideIndex": 0,
          "url": "string"
        },
        "smallCaps": true,
        "strikethrough": true,
        "underline": true,
        "weightedFontFamily": {
          "fontFamily": "string",
          "weight": 0
        }
      }
    },
    "property2": {
      "bulletStyle": {
        "backgroundColor": {
          "opaqueColor": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
        "bold": true,
        "fontFamily": "string",
        "fontSize": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "foregroundColor": {
          "opaqueColor": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "italic": true,
        "link": {
          "pageObjectId": "string",
          "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
          "slideIndex": 0,
          "url": "string"
        },
        "smallCaps": true,
        "strikethrough": true,
        "underline": true,
        "weightedFontFamily": {
          "fontFamily": "string",
          "weight": 0
        }
      }
    }
  }
}
```

A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listId|string|false|none|The ID of the list.|
|nestingLevel|object|false|none|A map of nesting levels to the properties of bullets at the associated level. A list has at most nine levels of nesting, so the possible values for the keys of this map are 0 through 8, inclusive.|

<h2 id="tocS_MasterProperties">MasterProperties</h2>
<!-- backwards compatibility -->
<a id="schemamasterproperties"></a>
<a id="schema_MasterProperties"></a>
<a id="tocSmasterproperties"></a>
<a id="tocsmasterproperties"></a>

```json
{
  "displayName": "string"
}
```

The properties of Page that are only relevant for pages with page_type MASTER.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human-readable name of the master.|

<h2 id="tocS_MergeTableCellsRequest">MergeTableCellsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamergetablecellsrequest"></a>
<a id="schema_MergeTableCellsRequest"></a>
<a id="tocSmergetablecellsrequest"></a>
<a id="tocsmergetablecellsrequest"></a>

```json
{
  "objectId": "string",
  "tableRange": {
    "columnSpan": 0,
    "location": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "rowSpan": 0
  }
}
```

Merges cells in a Table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the table.|
|tableRange|[TableRange](#schematablerange)|false|none|The table range specifying which cells of the table to merge. Any text in the cells being merged will be concatenated and stored in the upper-left ("head") cell of the range. If the range is non-rectangular (which can occur in some cases where the range covers cells that are already merged), a 400 bad request error is returned.|

<h2 id="tocS_NestingLevel">NestingLevel</h2>
<!-- backwards compatibility -->
<a id="schemanestinglevel"></a>
<a id="schema_NestingLevel"></a>
<a id="tocSnestinglevel"></a>
<a id="tocsnestinglevel"></a>

```json
{
  "bulletStyle": {
    "backgroundColor": {
      "opaqueColor": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
    "bold": true,
    "fontFamily": "string",
    "fontSize": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "foregroundColor": {
      "opaqueColor": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "italic": true,
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "smallCaps": true,
    "strikethrough": true,
    "underline": true,
    "weightedFontFamily": {
      "fontFamily": "string",
      "weight": 0
    }
  }
}
```

Contains properties describing the look and feel of a list bullet at a given level of nesting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulletStyle|[TextStyle](#schematextstyle)|false|none|The style of a bullet at this level of nesting.|

<h2 id="tocS_NotesProperties">NotesProperties</h2>
<!-- backwards compatibility -->
<a id="schemanotesproperties"></a>
<a id="schema_NotesProperties"></a>
<a id="tocSnotesproperties"></a>
<a id="tocsnotesproperties"></a>

```json
{
  "speakerNotesObjectId": "string"
}
```

The properties of Page that are only relevant for pages with page_type NOTES.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|speakerNotesObjectId|string|false|none|The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.|

<h2 id="tocS_OpaqueColor">OpaqueColor</h2>
<!-- backwards compatibility -->
<a id="schemaopaquecolor"></a>
<a id="schema_OpaqueColor"></a>
<a id="tocSopaquecolor"></a>
<a id="tocsopaquecolor"></a>

```json
{
  "rgbColor": {
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
}
```

A themeable solid color value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rgbColor|[RgbColor](#schemargbcolor)|false|none|An opaque RGB color.|
|themeColor|string|false|none|An opaque theme color.|

#### Enumerated Values

|Property|Value|
|---|---|
|themeColor|THEME_COLOR_TYPE_UNSPECIFIED|
|themeColor|DARK1|
|themeColor|LIGHT1|
|themeColor|DARK2|
|themeColor|LIGHT2|
|themeColor|ACCENT1|
|themeColor|ACCENT2|
|themeColor|ACCENT3|
|themeColor|ACCENT4|
|themeColor|ACCENT5|
|themeColor|ACCENT6|
|themeColor|HYPERLINK|
|themeColor|FOLLOWED_HYPERLINK|
|themeColor|TEXT1|
|themeColor|BACKGROUND1|
|themeColor|TEXT2|
|themeColor|BACKGROUND2|

<h2 id="tocS_OptionalColor">OptionalColor</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalcolor"></a>
<a id="schema_OptionalColor"></a>
<a id="tocSoptionalcolor"></a>
<a id="tocsoptionalcolor"></a>

```json
{
  "opaqueColor": {
    "rgbColor": {
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
  }
}
```

A color that can either be fully opaque or fully transparent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|opaqueColor|[OpaqueColor](#schemaopaquecolor)|false|none|If set, this will be used as an opaque color. If unset, this represents a transparent color.|

<h2 id="tocS_Outline">Outline</h2>
<!-- backwards compatibility -->
<a id="schemaoutline"></a>
<a id="schema_Outline"></a>
<a id="tocSoutline"></a>
<a id="tocsoutline"></a>

```json
{
  "dashStyle": "DASH_STYLE_UNSPECIFIED",
  "outlineFill": {
    "solidFill": {
      "alpha": 0,
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    }
  },
  "propertyState": "RENDERED",
  "weight": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  }
}
```

The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashStyle|string|false|none|The dash style of the outline.|
|outlineFill|[OutlineFill](#schemaoutlinefill)|false|none|The fill of the outline.|
|propertyState|string|false|none|The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.|
|weight|[Dimension](#schemadimension)|false|none|The thickness of the outline.|

#### Enumerated Values

|Property|Value|
|---|---|
|dashStyle|DASH_STYLE_UNSPECIFIED|
|dashStyle|SOLID|
|dashStyle|DOT|
|dashStyle|DASH|
|dashStyle|DASH_DOT|
|dashStyle|LONG_DASH|
|dashStyle|LONG_DASH_DOT|
|propertyState|RENDERED|
|propertyState|NOT_RENDERED|
|propertyState|INHERIT|

<h2 id="tocS_OutlineFill">OutlineFill</h2>
<!-- backwards compatibility -->
<a id="schemaoutlinefill"></a>
<a id="schema_OutlineFill"></a>
<a id="tocSoutlinefill"></a>
<a id="tocsoutlinefill"></a>

```json
{
  "solidFill": {
    "alpha": 0,
    "color": {
      "rgbColor": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
    }
  }
}
```

The fill of the outline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solidFill|[SolidFill](#schemasolidfill)|false|none|Solid color fill.|

<h2 id="tocS_Page">Page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "layoutProperties": {
    "displayName": "string",
    "masterObjectId": "string",
    "name": "string"
  },
  "masterProperties": {
    "displayName": "string"
  },
  "notesProperties": {
    "speakerNotesObjectId": "string"
  },
  "objectId": "string",
  "pageElements": [
    {
      "description": "string",
      "elementGroup": {},
      "image": {
        "contentUrl": "string",
        "imageProperties": {
          "brightness": 0,
          "contrast": 0,
          "cropProperties": {
            "angle": 0,
            "bottomOffset": 0,
            "leftOffset": 0,
            "rightOffset": 0,
            "topOffset": 0
          },
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "recolor": {
            "name": "NONE",
            "recolorStops": [
              {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                },
                "position": 0
              }
            ]
          },
          "shadow": {
            "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
            "alpha": 0,
            "blurRadius": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "propertyState": "RENDERED",
            "rotateWithShape": true,
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "type": "SHADOW_TYPE_UNSPECIFIED"
          },
          "transparency": 0
        },
        "placeholder": {
          "index": 0,
          "parentObjectId": "string",
          "type": "NONE"
        },
        "sourceUrl": "string"
      },
      "line": {
        "lineCategory": "LINE_CATEGORY_UNSPECIFIED",
        "lineProperties": {
          "dashStyle": "DASH_STYLE_UNSPECIFIED",
          "endArrow": "ARROW_STYLE_UNSPECIFIED",
          "endConnection": {
            "connectedObjectId": "string",
            "connectionSiteIndex": 0
          },
          "lineFill": {
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          },
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "startArrow": "ARROW_STYLE_UNSPECIFIED",
          "startConnection": {
            "connectedObjectId": "string",
            "connectionSiteIndex": 0
          },
          "weight": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "lineType": "TYPE_UNSPECIFIED"
      },
      "objectId": "string",
      "shape": {
        "placeholder": {
          "index": 0,
          "parentObjectId": "string",
          "type": "NONE"
        },
        "shapeProperties": {
          "autofit": {
            "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
            "fontScale": 0,
            "lineSpacingReduction": 0
          },
          "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "shadow": {
            "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
            "alpha": 0,
            "blurRadius": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "propertyState": "RENDERED",
            "rotateWithShape": true,
            "transform": {
              "scaleX": 0,
              "scaleY": 0,
              "shearX": 0,
              "shearY": 0,
              "translateX": 0,
              "translateY": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "type": "SHADOW_TYPE_UNSPECIFIED"
          },
          "shapeBackgroundFill": {
            "propertyState": "RENDERED",
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          }
        },
        "shapeType": "TYPE_UNSPECIFIED",
        "text": {
          "lists": {
            "property1": {
              "listId": "string",
              "nestingLevel": {
                "property1": {
                  "bulletStyle": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  }
                },
                "property2": {
                  "bulletStyle": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  }
                }
              }
            },
            "property2": {
              "listId": "string",
              "nestingLevel": {
                "property1": {
                  "bulletStyle": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  }
                },
                "property2": {
                  "bulletStyle": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  }
                }
              }
            }
          },
          "textElements": [
            {
              "autoText": {
                "content": "string",
                "style": {
                  "backgroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                  "bold": true,
                  "fontFamily": "string",
                  "fontSize": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "foregroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "italic": true,
                  "link": {
                    "pageObjectId": "string",
                    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                    "slideIndex": 0,
                    "url": "string"
                  },
                  "smallCaps": true,
                  "strikethrough": true,
                  "underline": true,
                  "weightedFontFamily": {
                    "fontFamily": "string",
                    "weight": 0
                  }
                },
                "type": "TYPE_UNSPECIFIED"
              },
              "endIndex": 0,
              "paragraphMarker": {
                "bullet": {
                  "bulletStyle": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  },
                  "glyph": "string",
                  "listId": "string",
                  "nestingLevel": 0
                },
                "style": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "direction": "TEXT_DIRECTION_UNSPECIFIED",
                  "indentEnd": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "indentFirstLine": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "indentStart": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "lineSpacing": 0,
                  "spaceAbove": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "spaceBelow": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "spacingMode": "SPACING_MODE_UNSPECIFIED"
                }
              },
              "startIndex": 0,
              "textRun": {
                "content": "string",
                "style": {
                  "backgroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                  "bold": true,
                  "fontFamily": "string",
                  "fontSize": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "foregroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "italic": true,
                  "link": {
                    "pageObjectId": "string",
                    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                    "slideIndex": 0,
                    "url": "string"
                  },
                  "smallCaps": true,
                  "strikethrough": true,
                  "underline": true,
                  "weightedFontFamily": {
                    "fontFamily": "string",
                    "weight": 0
                  }
                }
              }
            }
          ]
        }
      },
      "sheetsChart": {
        "chartId": 0,
        "contentUrl": "string",
        "sheetsChartProperties": {
          "chartImageProperties": {
            "brightness": 0,
            "contrast": 0,
            "cropProperties": {
              "angle": 0,
              "bottomOffset": 0,
              "leftOffset": 0,
              "rightOffset": 0,
              "topOffset": 0
            },
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "outline": {
              "dashStyle": "DASH_STYLE_UNSPECIFIED",
              "outlineFill": {
                "solidFill": {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                }
              },
              "propertyState": "RENDERED",
              "weight": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            },
            "recolor": {
              "name": "NONE",
              "recolorStops": [
                {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  },
                  "position": 0
                }
              ]
            },
            "shadow": {
              "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
              "alpha": 0,
              "blurRadius": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              },
              "propertyState": "RENDERED",
              "rotateWithShape": true,
              "transform": {
                "scaleX": 0,
                "scaleY": 0,
                "shearX": 0,
                "shearY": 0,
                "translateX": 0,
                "translateY": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "type": "SHADOW_TYPE_UNSPECIFIED"
            },
            "transparency": 0
          }
        },
        "spreadsheetId": "string"
      },
      "size": {
        "height": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "width": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "table": {
        "columns": 0,
        "horizontalBorderRows": [
          {
            "tableBorderCells": [
              {
                "location": {
                  "columnIndex": 0,
                  "rowIndex": 0
                },
                "tableBorderProperties": {
                  "dashStyle": "DASH_STYLE_UNSPECIFIED",
                  "tableBorderFill": {
                    "solidFill": {
                      "alpha": 0,
                      "color": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    }
                  },
                  "weight": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  }
                }
              }
            ]
          }
        ],
        "rows": 0,
        "tableColumns": [
          {
            "columnWidth": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        ],
        "tableRows": [
          {
            "rowHeight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "tableCells": [
              {
                "columnSpan": 0,
                "location": {
                  "columnIndex": 0,
                  "rowIndex": 0
                },
                "rowSpan": 0,
                "tableCellProperties": {
                  "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
                  "tableCellBackgroundFill": {
                    "propertyState": "RENDERED",
                    "solidFill": {
                      "alpha": 0,
                      "color": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    }
                  }
                },
                "text": {
                  "lists": {
                    "property1": {
                      "listId": "string",
                      "nestingLevel": {
                        "property1": {
                          "bulletStyle": {
                            "backgroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                            "bold": true,
                            "fontFamily": "string",
                            "fontSize": {
                              "magnitude": 0,
                              "unit": "UNIT_UNSPECIFIED"
                            },
                            "foregroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "italic": true,
                            "link": {
                              "pageObjectId": "string",
                              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                              "slideIndex": 0,
                              "url": "string"
                            },
                            "smallCaps": true,
                            "strikethrough": true,
                            "underline": true,
                            "weightedFontFamily": {
                              "fontFamily": "string",
                              "weight": 0
                            }
                          }
                        },
                        "property2": {
                          "bulletStyle": {
                            "backgroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                            "bold": true,
                            "fontFamily": "string",
                            "fontSize": {
                              "magnitude": 0,
                              "unit": "UNIT_UNSPECIFIED"
                            },
                            "foregroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "italic": true,
                            "link": {
                              "pageObjectId": "string",
                              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                              "slideIndex": 0,
                              "url": "string"
                            },
                            "smallCaps": true,
                            "strikethrough": true,
                            "underline": true,
                            "weightedFontFamily": {
                              "fontFamily": "string",
                              "weight": 0
                            }
                          }
                        }
                      }
                    },
                    "property2": {
                      "listId": "string",
                      "nestingLevel": {
                        "property1": {
                          "bulletStyle": {
                            "backgroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                            "bold": true,
                            "fontFamily": "string",
                            "fontSize": {
                              "magnitude": 0,
                              "unit": "UNIT_UNSPECIFIED"
                            },
                            "foregroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "italic": true,
                            "link": {
                              "pageObjectId": "string",
                              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                              "slideIndex": 0,
                              "url": "string"
                            },
                            "smallCaps": true,
                            "strikethrough": true,
                            "underline": true,
                            "weightedFontFamily": {
                              "fontFamily": "string",
                              "weight": 0
                            }
                          }
                        },
                        "property2": {
                          "bulletStyle": {
                            "backgroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                            "bold": true,
                            "fontFamily": "string",
                            "fontSize": {
                              "magnitude": 0,
                              "unit": "UNIT_UNSPECIFIED"
                            },
                            "foregroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "italic": true,
                            "link": {
                              "pageObjectId": "string",
                              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                              "slideIndex": 0,
                              "url": "string"
                            },
                            "smallCaps": true,
                            "strikethrough": true,
                            "underline": true,
                            "weightedFontFamily": {
                              "fontFamily": "string",
                              "weight": 0
                            }
                          }
                        }
                      }
                    }
                  },
                  "textElements": [
                    {
                      "autoText": {
                        "content": "string",
                        "style": {
                          "backgroundColor": {
                            "opaqueColor": {
                              "rgbColor": {
                                "blue": 0,
                                "green": 0,
                                "red": 0
                              },
                              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                            }
                          },
                          "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                          "bold": true,
                          "fontFamily": "string",
                          "fontSize": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "foregroundColor": {
                            "opaqueColor": {
                              "rgbColor": {
                                "blue": 0,
                                "green": 0,
                                "red": 0
                              },
                              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                            }
                          },
                          "italic": true,
                          "link": {
                            "pageObjectId": "string",
                            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                            "slideIndex": 0,
                            "url": "string"
                          },
                          "smallCaps": true,
                          "strikethrough": true,
                          "underline": true,
                          "weightedFontFamily": {
                            "fontFamily": "string",
                            "weight": 0
                          }
                        },
                        "type": "TYPE_UNSPECIFIED"
                      },
                      "endIndex": 0,
                      "paragraphMarker": {
                        "bullet": {
                          "bulletStyle": {
                            "backgroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                            "bold": true,
                            "fontFamily": "string",
                            "fontSize": {
                              "magnitude": 0,
                              "unit": "UNIT_UNSPECIFIED"
                            },
                            "foregroundColor": {
                              "opaqueColor": {
                                "rgbColor": {
                                  "blue": 0,
                                  "green": 0,
                                  "red": 0
                                },
                                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                              }
                            },
                            "italic": true,
                            "link": {
                              "pageObjectId": "string",
                              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                              "slideIndex": 0,
                              "url": "string"
                            },
                            "smallCaps": true,
                            "strikethrough": true,
                            "underline": true,
                            "weightedFontFamily": {
                              "fontFamily": "string",
                              "weight": 0
                            }
                          },
                          "glyph": "string",
                          "listId": "string",
                          "nestingLevel": 0
                        },
                        "style": {
                          "alignment": "ALIGNMENT_UNSPECIFIED",
                          "direction": "TEXT_DIRECTION_UNSPECIFIED",
                          "indentEnd": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "indentFirstLine": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "indentStart": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "lineSpacing": 0,
                          "spaceAbove": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "spaceBelow": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "spacingMode": "SPACING_MODE_UNSPECIFIED"
                        }
                      },
                      "startIndex": 0,
                      "textRun": {
                        "content": "string",
                        "style": {
                          "backgroundColor": {
                            "opaqueColor": {
                              "rgbColor": {
                                "blue": 0,
                                "green": 0,
                                "red": 0
                              },
                              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                            }
                          },
                          "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                          "bold": true,
                          "fontFamily": "string",
                          "fontSize": {
                            "magnitude": 0,
                            "unit": "UNIT_UNSPECIFIED"
                          },
                          "foregroundColor": {
                            "opaqueColor": {
                              "rgbColor": {
                                "blue": 0,
                                "green": 0,
                                "red": 0
                              },
                              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                            }
                          },
                          "italic": true,
                          "link": {
                            "pageObjectId": "string",
                            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                            "slideIndex": 0,
                            "url": "string"
                          },
                          "smallCaps": true,
                          "strikethrough": true,
                          "underline": true,
                          "weightedFontFamily": {
                            "fontFamily": "string",
                            "weight": 0
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "tableRowProperties": {
              "minRowHeight": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        ],
        "verticalBorderRows": [
          {
            "tableBorderCells": [
              {
                "location": {
                  "columnIndex": 0,
                  "rowIndex": 0
                },
                "tableBorderProperties": {
                  "dashStyle": "DASH_STYLE_UNSPECIFIED",
                  "tableBorderFill": {
                    "solidFill": {
                      "alpha": 0,
                      "color": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    }
                  },
                  "weight": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  }
                }
              }
            ]
          }
        ]
      },
      "title": "string",
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "video": {
        "id": "string",
        "source": "SOURCE_UNSPECIFIED",
        "url": "string",
        "videoProperties": {
          "autoPlay": true,
          "end": 0,
          "mute": true,
          "outline": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "outlineFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "propertyState": "RENDERED",
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          },
          "start": 0
        }
      },
      "wordArt": {
        "renderedText": "string"
      }
    }
  ],
  "pageProperties": {
    "colorScheme": {
      "colors": [
        {
          "color": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "type": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      ]
    },
    "pageBackgroundFill": {
      "propertyState": "RENDERED",
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "stretchedPictureFill": {
        "contentUrl": "string",
        "size": {
          "height": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "width": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        }
      }
    }
  },
  "pageType": "SLIDE",
  "revisionId": "string",
  "slideProperties": {
    "isSkipped": true,
    "layoutObjectId": "string",
    "masterObjectId": "string",
    "notesPage": {}
  }
}
```

A page in a presentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|layoutProperties|[LayoutProperties](#schemalayoutproperties)|false|none|Layout specific properties. Only set if page_type = LAYOUT.|
|masterProperties|[MasterProperties](#schemamasterproperties)|false|none|Master specific properties. Only set if page_type = MASTER.|
|notesProperties|[NotesProperties](#schemanotesproperties)|false|none|Notes specific properties. Only set if page_type = NOTES.|
|objectId|string|false|none|The object ID for this page. Object IDs used by Page and PageElement share the same namespace.|
|pageElements|[[PageElement](#schemapageelement)]|false|none|The page elements rendered on the page.|
|pageProperties|[PageProperties](#schemapageproperties)|false|none|The properties of the page.|
|pageType|string|false|none|The type of the page.|
|revisionId|string|false|none|Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.|
|slideProperties|[SlideProperties](#schemaslideproperties)|false|none|Slide specific properties. Only set if page_type = SLIDE.|

#### Enumerated Values

|Property|Value|
|---|---|
|pageType|SLIDE|
|pageType|MASTER|
|pageType|LAYOUT|
|pageType|NOTES|
|pageType|NOTES_MASTER|

<h2 id="tocS_PageBackgroundFill">PageBackgroundFill</h2>
<!-- backwards compatibility -->
<a id="schemapagebackgroundfill"></a>
<a id="schema_PageBackgroundFill"></a>
<a id="tocSpagebackgroundfill"></a>
<a id="tocspagebackgroundfill"></a>

```json
{
  "propertyState": "RENDERED",
  "solidFill": {
    "alpha": 0,
    "color": {
      "rgbColor": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
    }
  },
  "stretchedPictureFill": {
    "contentUrl": "string",
    "size": {
      "height": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "width": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    }
  }
}
```

The page background fill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyState|string|false|none|The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.|
|solidFill|[SolidFill](#schemasolidfill)|false|none|Solid color fill.|
|stretchedPictureFill|[StretchedPictureFill](#schemastretchedpicturefill)|false|none|Stretched picture fill.|

#### Enumerated Values

|Property|Value|
|---|---|
|propertyState|RENDERED|
|propertyState|NOT_RENDERED|
|propertyState|INHERIT|

<h2 id="tocS_PageElement">PageElement</h2>
<!-- backwards compatibility -->
<a id="schemapageelement"></a>
<a id="schema_PageElement"></a>
<a id="tocSpageelement"></a>
<a id="tocspageelement"></a>

```json
{
  "description": "string",
  "elementGroup": {
    "children": [
      {}
    ]
  },
  "image": {
    "contentUrl": "string",
    "imageProperties": {
      "brightness": 0,
      "contrast": 0,
      "cropProperties": {
        "angle": 0,
        "bottomOffset": 0,
        "leftOffset": 0,
        "rightOffset": 0,
        "topOffset": 0
      },
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "outline": {
        "dashStyle": "DASH_STYLE_UNSPECIFIED",
        "outlineFill": {
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          }
        },
        "propertyState": "RENDERED",
        "weight": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "recolor": {
        "name": "NONE",
        "recolorStops": [
          {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "position": 0
          }
        ]
      },
      "shadow": {
        "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
        "alpha": 0,
        "blurRadius": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        },
        "propertyState": "RENDERED",
        "rotateWithShape": true,
        "transform": {
          "scaleX": 0,
          "scaleY": 0,
          "shearX": 0,
          "shearY": 0,
          "translateX": 0,
          "translateY": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "type": "SHADOW_TYPE_UNSPECIFIED"
      },
      "transparency": 0
    },
    "placeholder": {
      "index": 0,
      "parentObjectId": "string",
      "type": "NONE"
    },
    "sourceUrl": "string"
  },
  "line": {
    "lineCategory": "LINE_CATEGORY_UNSPECIFIED",
    "lineProperties": {
      "dashStyle": "DASH_STYLE_UNSPECIFIED",
      "endArrow": "ARROW_STYLE_UNSPECIFIED",
      "endConnection": {
        "connectedObjectId": "string",
        "connectionSiteIndex": 0
      },
      "lineFill": {
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      },
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "startArrow": "ARROW_STYLE_UNSPECIFIED",
      "startConnection": {
        "connectedObjectId": "string",
        "connectionSiteIndex": 0
      },
      "weight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "lineType": "TYPE_UNSPECIFIED"
  },
  "objectId": "string",
  "shape": {
    "placeholder": {
      "index": 0,
      "parentObjectId": "string",
      "type": "NONE"
    },
    "shapeProperties": {
      "autofit": {
        "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
        "fontScale": 0,
        "lineSpacingReduction": 0
      },
      "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "outline": {
        "dashStyle": "DASH_STYLE_UNSPECIFIED",
        "outlineFill": {
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          }
        },
        "propertyState": "RENDERED",
        "weight": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "shadow": {
        "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
        "alpha": 0,
        "blurRadius": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        },
        "propertyState": "RENDERED",
        "rotateWithShape": true,
        "transform": {
          "scaleX": 0,
          "scaleY": 0,
          "shearX": 0,
          "shearY": 0,
          "translateX": 0,
          "translateY": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "type": "SHADOW_TYPE_UNSPECIFIED"
      },
      "shapeBackgroundFill": {
        "propertyState": "RENDERED",
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      }
    },
    "shapeType": "TYPE_UNSPECIFIED",
    "text": {
      "lists": {
        "property1": {
          "listId": "string",
          "nestingLevel": {
            "property1": {
              "bulletStyle": {
                "backgroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                "bold": true,
                "fontFamily": "string",
                "fontSize": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "foregroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "italic": true,
                "link": {
                  "pageObjectId": "string",
                  "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                  "slideIndex": 0,
                  "url": "string"
                },
                "smallCaps": true,
                "strikethrough": true,
                "underline": true,
                "weightedFontFamily": {
                  "fontFamily": "string",
                  "weight": 0
                }
              }
            },
            "property2": {
              "bulletStyle": {
                "backgroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                "bold": true,
                "fontFamily": "string",
                "fontSize": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "foregroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "italic": true,
                "link": {
                  "pageObjectId": "string",
                  "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                  "slideIndex": 0,
                  "url": "string"
                },
                "smallCaps": true,
                "strikethrough": true,
                "underline": true,
                "weightedFontFamily": {
                  "fontFamily": "string",
                  "weight": 0
                }
              }
            }
          }
        },
        "property2": {
          "listId": "string",
          "nestingLevel": {
            "property1": {
              "bulletStyle": {
                "backgroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                "bold": true,
                "fontFamily": "string",
                "fontSize": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "foregroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "italic": true,
                "link": {
                  "pageObjectId": "string",
                  "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                  "slideIndex": 0,
                  "url": "string"
                },
                "smallCaps": true,
                "strikethrough": true,
                "underline": true,
                "weightedFontFamily": {
                  "fontFamily": "string",
                  "weight": 0
                }
              }
            },
            "property2": {
              "bulletStyle": {
                "backgroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                "bold": true,
                "fontFamily": "string",
                "fontSize": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "foregroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "italic": true,
                "link": {
                  "pageObjectId": "string",
                  "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                  "slideIndex": 0,
                  "url": "string"
                },
                "smallCaps": true,
                "strikethrough": true,
                "underline": true,
                "weightedFontFamily": {
                  "fontFamily": "string",
                  "weight": 0
                }
              }
            }
          }
        }
      },
      "textElements": [
        {
          "autoText": {
            "content": "string",
            "style": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "endIndex": 0,
          "paragraphMarker": {
            "bullet": {
              "bulletStyle": {
                "backgroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                "bold": true,
                "fontFamily": "string",
                "fontSize": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "foregroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "italic": true,
                "link": {
                  "pageObjectId": "string",
                  "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                  "slideIndex": 0,
                  "url": "string"
                },
                "smallCaps": true,
                "strikethrough": true,
                "underline": true,
                "weightedFontFamily": {
                  "fontFamily": "string",
                  "weight": 0
                }
              },
              "glyph": "string",
              "listId": "string",
              "nestingLevel": 0
            },
            "style": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "direction": "TEXT_DIRECTION_UNSPECIFIED",
              "indentEnd": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "indentFirstLine": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "indentStart": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "lineSpacing": 0,
              "spaceAbove": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "spaceBelow": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "spacingMode": "SPACING_MODE_UNSPECIFIED"
            }
          },
          "startIndex": 0,
          "textRun": {
            "content": "string",
            "style": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            }
          }
        }
      ]
    }
  },
  "sheetsChart": {
    "chartId": 0,
    "contentUrl": "string",
    "sheetsChartProperties": {
      "chartImageProperties": {
        "brightness": 0,
        "contrast": 0,
        "cropProperties": {
          "angle": 0,
          "bottomOffset": 0,
          "leftOffset": 0,
          "rightOffset": 0,
          "topOffset": 0
        },
        "link": {
          "pageObjectId": "string",
          "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
          "slideIndex": 0,
          "url": "string"
        },
        "outline": {
          "dashStyle": "DASH_STYLE_UNSPECIFIED",
          "outlineFill": {
            "solidFill": {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            }
          },
          "propertyState": "RENDERED",
          "weight": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        },
        "recolor": {
          "name": "NONE",
          "recolorStops": [
            {
              "alpha": 0,
              "color": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              },
              "position": 0
            }
          ]
        },
        "shadow": {
          "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
          "alpha": 0,
          "blurRadius": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          },
          "propertyState": "RENDERED",
          "rotateWithShape": true,
          "transform": {
            "scaleX": 0,
            "scaleY": 0,
            "shearX": 0,
            "shearY": 0,
            "translateX": 0,
            "translateY": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "type": "SHADOW_TYPE_UNSPECIFIED"
        },
        "transparency": 0
      }
    },
    "spreadsheetId": "string"
  },
  "size": {
    "height": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "width": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "table": {
    "columns": 0,
    "horizontalBorderRows": [
      {
        "tableBorderCells": [
          {
            "location": {
              "columnIndex": 0,
              "rowIndex": 0
            },
            "tableBorderProperties": {
              "dashStyle": "DASH_STYLE_UNSPECIFIED",
              "tableBorderFill": {
                "solidFill": {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                }
              },
              "weight": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        ]
      }
    ],
    "rows": 0,
    "tableColumns": [
      {
        "columnWidth": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      }
    ],
    "tableRows": [
      {
        "rowHeight": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "tableCells": [
          {
            "columnSpan": 0,
            "location": {
              "columnIndex": 0,
              "rowIndex": 0
            },
            "rowSpan": 0,
            "tableCellProperties": {
              "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
              "tableCellBackgroundFill": {
                "propertyState": "RENDERED",
                "solidFill": {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                }
              }
            },
            "text": {
              "lists": {
                "property1": {
                  "listId": "string",
                  "nestingLevel": {
                    "property1": {
                      "bulletStyle": {
                        "backgroundColor": {
                          "opaqueColor": {
                            "rgbColor": {
                              "blue": 0,
                              "green": 0,
                              "red": 0
                            },
                            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                          }
                        },
                        "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                        "bold": true,
                        "fontFamily": "string",
                        "fontSize": {
                          "magnitude": 0,
                          "unit": "UNIT_UNSPECIFIED"
                        },
                        "foregroundColor": {
                          "opaqueColor": {
                            "rgbColor": {
                              "blue": 0,
                              "green": 0,
                              "red": 0
                            },
                            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                          }
                        },
                        "italic": true,
                        "link": {
                          "pageObjectId": "string",
                          "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                          "slideIndex": 0,
                          "url": "string"
                        },
                        "smallCaps": true,
                        "strikethrough": true,
                        "underline": true,
                        "weightedFontFamily": {
                          "fontFamily": "string",
                          "weight": 0
                        }
                      }
                    },
                    "property2": {
                      "bulletStyle": {
                        "backgroundColor": {
                          "opaqueColor": {
                            "rgbColor": {
                              "blue": 0,
                              "green": 0,
                              "red": 0
                            },
                            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                          }
                        },
                        "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                        "bold": true,
                        "fontFamily": "string",
                        "fontSize": {
                          "magnitude": 0,
                          "unit": "UNIT_UNSPECIFIED"
                        },
                        "foregroundColor": {
                          "opaqueColor": {
                            "rgbColor": {
                              "blue": 0,
                              "green": 0,
                              "red": 0
                            },
                            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                          }
                        },
                        "italic": true,
                        "link": {
                          "pageObjectId": "string",
                          "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                          "slideIndex": 0,
                          "url": "string"
                        },
                        "smallCaps": true,
                        "strikethrough": true,
                        "underline": true,
                        "weightedFontFamily": {
                          "fontFamily": "string",
                          "weight": 0
                        }
                      }
                    }
                  }
                },
                "property2": {
                  "listId": "string",
                  "nestingLevel": {
                    "property1": {
                      "bulletStyle": {
                        "backgroundColor": {
                          "opaqueColor": {
                            "rgbColor": {
                              "blue": 0,
                              "green": 0,
                              "red": 0
                            },
                            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                          }
                        },
                        "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                        "bold": true,
                        "fontFamily": "string",
                        "fontSize": {
                          "magnitude": 0,
                          "unit": "UNIT_UNSPECIFIED"
                        },
                        "foregroundColor": {
                          "opaqueColor": {
                            "rgbColor": {
                              "blue": 0,
                              "green": 0,
                              "red": 0
                            },
                            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                          }
                        },
                        "italic": true,
                        "link": {
                          "pageObjectId": "string",
                          "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                          "slideIndex": 0,
                          "url": "string"
                        },
                        "smallCaps": true,
                        "strikethrough": true,
                        "underline": true,
                        "weightedFontFamily": {
                          "fontFamily": "string",
                          "weight": 0
                        }
                      }
                    },
                    "property2": {
                      "bulletStyle": {
                        "backgroundColor": {
                          "opaqueColor": {
                            "rgbColor": {
                              "blue": 0,
                              "green": 0,
                              "red": 0
                            },
                            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                          }
                        },
                        "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                        "bold": true,
                        "fontFamily": "string",
                        "fontSize": {
                          "magnitude": 0,
                          "unit": "UNIT_UNSPECIFIED"
                        },
                        "foregroundColor": {
                          "opaqueColor": {
                            "rgbColor": {
                              "blue": 0,
                              "green": 0,
                              "red": 0
                            },
                            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                          }
                        },
                        "italic": true,
                        "link": {
                          "pageObjectId": "string",
                          "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                          "slideIndex": 0,
                          "url": "string"
                        },
                        "smallCaps": true,
                        "strikethrough": true,
                        "underline": true,
                        "weightedFontFamily": {
                          "fontFamily": "string",
                          "weight": 0
                        }
                      }
                    }
                  }
                }
              },
              "textElements": [
                {
                  "autoText": {
                    "content": "string",
                    "style": {
                      "backgroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                      "bold": true,
                      "fontFamily": "string",
                      "fontSize": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "foregroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "italic": true,
                      "link": {
                        "pageObjectId": "string",
                        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                        "slideIndex": 0,
                        "url": "string"
                      },
                      "smallCaps": true,
                      "strikethrough": true,
                      "underline": true,
                      "weightedFontFamily": {
                        "fontFamily": "string",
                        "weight": 0
                      }
                    },
                    "type": "TYPE_UNSPECIFIED"
                  },
                  "endIndex": 0,
                  "paragraphMarker": {
                    "bullet": {
                      "bulletStyle": {
                        "backgroundColor": {
                          "opaqueColor": {
                            "rgbColor": {
                              "blue": 0,
                              "green": 0,
                              "red": 0
                            },
                            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                          }
                        },
                        "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                        "bold": true,
                        "fontFamily": "string",
                        "fontSize": {
                          "magnitude": 0,
                          "unit": "UNIT_UNSPECIFIED"
                        },
                        "foregroundColor": {
                          "opaqueColor": {
                            "rgbColor": {
                              "blue": 0,
                              "green": 0,
                              "red": 0
                            },
                            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                          }
                        },
                        "italic": true,
                        "link": {
                          "pageObjectId": "string",
                          "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                          "slideIndex": 0,
                          "url": "string"
                        },
                        "smallCaps": true,
                        "strikethrough": true,
                        "underline": true,
                        "weightedFontFamily": {
                          "fontFamily": "string",
                          "weight": 0
                        }
                      },
                      "glyph": "string",
                      "listId": "string",
                      "nestingLevel": 0
                    },
                    "style": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "direction": "TEXT_DIRECTION_UNSPECIFIED",
                      "indentEnd": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "indentFirstLine": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "indentStart": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "lineSpacing": 0,
                      "spaceAbove": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "spaceBelow": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "spacingMode": "SPACING_MODE_UNSPECIFIED"
                    }
                  },
                  "startIndex": 0,
                  "textRun": {
                    "content": "string",
                    "style": {
                      "backgroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                      "bold": true,
                      "fontFamily": "string",
                      "fontSize": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "foregroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "italic": true,
                      "link": {
                        "pageObjectId": "string",
                        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                        "slideIndex": 0,
                        "url": "string"
                      },
                      "smallCaps": true,
                      "strikethrough": true,
                      "underline": true,
                      "weightedFontFamily": {
                        "fontFamily": "string",
                        "weight": 0
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "tableRowProperties": {
          "minRowHeight": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        }
      }
    ],
    "verticalBorderRows": [
      {
        "tableBorderCells": [
          {
            "location": {
              "columnIndex": 0,
              "rowIndex": 0
            },
            "tableBorderProperties": {
              "dashStyle": "DASH_STYLE_UNSPECIFIED",
              "tableBorderFill": {
                "solidFill": {
                  "alpha": 0,
                  "color": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                }
              },
              "weight": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        ]
      }
    ]
  },
  "title": "string",
  "transform": {
    "scaleX": 0,
    "scaleY": 0,
    "shearX": 0,
    "shearY": 0,
    "translateX": 0,
    "translateY": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "video": {
    "id": "string",
    "source": "SOURCE_UNSPECIFIED",
    "url": "string",
    "videoProperties": {
      "autoPlay": true,
      "end": 0,
      "mute": true,
      "outline": {
        "dashStyle": "DASH_STYLE_UNSPECIFIED",
        "outlineFill": {
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          }
        },
        "propertyState": "RENDERED",
        "weight": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "start": 0
    }
  },
  "wordArt": {
    "renderedText": "string"
  }
}
```

A visual element rendered on a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.|
|elementGroup|[Group](#schemagroup)|false|none|A collection of page elements joined as a single unit.|
|image|[Image](#schemaimage)|false|none|An image page element.|
|line|[Line](#schemaline)|false|none|A line page element.|
|objectId|string|false|none|The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.|
|shape|[Shape](#schemashape)|false|none|A generic shape.|
|sheetsChart|[SheetsChart](#schemasheetschart)|false|none|A linked chart embedded from Google Sheets. Unlinked charts are represented as images.|
|size|[Size](#schemasize)|false|none|The size of the page element.|
|table|[Table](#schematable)|false|none|A table page element.|
|title|string|false|none|The title of the page element. Combined with description to display alt text. The field is not supported for Group elements.|
|transform|[AffineTransform](#schemaaffinetransform)|false|none|The transform of the page element. The visual appearance of the page element is determined by its absolute transform. To compute the absolute transform, preconcatenate a page element's transform with the transforms of all of its parent groups. If the page element is not in a group, its absolute transform is the same as the value in this field. The initial transform for the newly created Group is always the identity transform.|
|video|[Video](#schemavideo)|false|none|A video page element.|
|wordArt|[WordArt](#schemawordart)|false|none|A word art page element.|

<h2 id="tocS_PageElementProperties">PageElementProperties</h2>
<!-- backwards compatibility -->
<a id="schemapageelementproperties"></a>
<a id="schema_PageElementProperties"></a>
<a id="tocSpageelementproperties"></a>
<a id="tocspageelementproperties"></a>

```json
{
  "pageObjectId": "string",
  "size": {
    "height": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "width": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "transform": {
    "scaleX": 0,
    "scaleY": 0,
    "shearX": 0,
    "shearY": 0,
    "translateX": 0,
    "translateY": 0,
    "unit": "UNIT_UNSPECIFIED"
  }
}
```

Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageObjectId|string|false|none|The object ID of the page where the element is located.|
|size|[Size](#schemasize)|false|none|The size of the element.|
|transform|[AffineTransform](#schemaaffinetransform)|false|none|The transform for the element.|

<h2 id="tocS_PageProperties">PageProperties</h2>
<!-- backwards compatibility -->
<a id="schemapageproperties"></a>
<a id="schema_PageProperties"></a>
<a id="tocSpageproperties"></a>
<a id="tocspageproperties"></a>

```json
{
  "colorScheme": {
    "colors": [
      {
        "color": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "type": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    ]
  },
  "pageBackgroundFill": {
    "propertyState": "RENDERED",
    "solidFill": {
      "alpha": 0,
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "stretchedPictureFill": {
      "contentUrl": "string",
      "size": {
        "height": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "width": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      }
    }
  }
}
```

The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorScheme|[ColorScheme](#schemacolorscheme)|false|none|The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.|
|pageBackgroundFill|[PageBackgroundFill](#schemapagebackgroundfill)|false|none|The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.|

<h2 id="tocS_ParagraphMarker">ParagraphMarker</h2>
<!-- backwards compatibility -->
<a id="schemaparagraphmarker"></a>
<a id="schema_ParagraphMarker"></a>
<a id="tocSparagraphmarker"></a>
<a id="tocsparagraphmarker"></a>

```json
{
  "bullet": {
    "bulletStyle": {
      "backgroundColor": {
        "opaqueColor": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
      "bold": true,
      "fontFamily": "string",
      "fontSize": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "foregroundColor": {
        "opaqueColor": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "italic": true,
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "smallCaps": true,
      "strikethrough": true,
      "underline": true,
      "weightedFontFamily": {
        "fontFamily": "string",
        "weight": 0
      }
    },
    "glyph": "string",
    "listId": "string",
    "nestingLevel": 0
  },
  "style": {
    "alignment": "ALIGNMENT_UNSPECIFIED",
    "direction": "TEXT_DIRECTION_UNSPECIFIED",
    "indentEnd": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "indentFirstLine": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "indentStart": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "lineSpacing": 0,
    "spaceAbove": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "spaceBelow": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "spacingMode": "SPACING_MODE_UNSPECIFIED"
  }
}
```

A TextElement kind that represents the beginning of a new paragraph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bullet|[Bullet](#schemabullet)|false|none|The bullet for this paragraph. If not present, the paragraph does not belong to a list.|
|style|[ParagraphStyle](#schemaparagraphstyle)|false|none|The paragraph's style|

<h2 id="tocS_ParagraphStyle">ParagraphStyle</h2>
<!-- backwards compatibility -->
<a id="schemaparagraphstyle"></a>
<a id="schema_ParagraphStyle"></a>
<a id="tocSparagraphstyle"></a>
<a id="tocsparagraphstyle"></a>

```json
{
  "alignment": "ALIGNMENT_UNSPECIFIED",
  "direction": "TEXT_DIRECTION_UNSPECIFIED",
  "indentEnd": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "indentFirstLine": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "indentStart": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "lineSpacing": 0,
  "spaceAbove": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "spaceBelow": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "spacingMode": "SPACING_MODE_UNSPECIFIED"
}
```

Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alignment|string|false|none|The text alignment for this paragraph.|
|direction|string|false|none|The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.|
|indentEnd|[Dimension](#schemadimension)|false|none|The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.|
|indentFirstLine|[Dimension](#schemadimension)|false|none|The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.|
|indentStart|[Dimension](#schemadimension)|false|none|The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.|
|lineSpacing|number(float)|false|none|The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.|
|spaceAbove|[Dimension](#schemadimension)|false|none|The amount of extra space above the paragraph. If unset, the value is inherited from the parent.|
|spaceBelow|[Dimension](#schemadimension)|false|none|The amount of extra space below the paragraph. If unset, the value is inherited from the parent.|
|spacingMode|string|false|none|The spacing mode for the paragraph.|

#### Enumerated Values

|Property|Value|
|---|---|
|alignment|ALIGNMENT_UNSPECIFIED|
|alignment|START|
|alignment|CENTER|
|alignment|END|
|alignment|JUSTIFIED|
|direction|TEXT_DIRECTION_UNSPECIFIED|
|direction|LEFT_TO_RIGHT|
|direction|RIGHT_TO_LEFT|
|spacingMode|SPACING_MODE_UNSPECIFIED|
|spacingMode|NEVER_COLLAPSE|
|spacingMode|COLLAPSE_LISTS|

<h2 id="tocS_Placeholder">Placeholder</h2>
<!-- backwards compatibility -->
<a id="schemaplaceholder"></a>
<a id="schema_Placeholder"></a>
<a id="tocSplaceholder"></a>
<a id="tocsplaceholder"></a>

```json
{
  "index": 0,
  "parentObjectId": "string",
  "type": "NONE"
}
```

The placeholder information that uniquely identifies a placeholder shape.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.|
|parentObjectId|string|false|none|The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.|
|type|string|false|none|The type of the placeholder.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NONE|
|type|BODY|
|type|CHART|
|type|CLIP_ART|
|type|CENTERED_TITLE|
|type|DIAGRAM|
|type|DATE_AND_TIME|
|type|FOOTER|
|type|HEADER|
|type|MEDIA|
|type|OBJECT|
|type|PICTURE|
|type|SLIDE_NUMBER|
|type|SUBTITLE|
|type|TABLE|
|type|TITLE|
|type|SLIDE_IMAGE|

<h2 id="tocS_Presentation">Presentation</h2>
<!-- backwards compatibility -->
<a id="schemapresentation"></a>
<a id="schema_Presentation"></a>
<a id="tocSpresentation"></a>
<a id="tocspresentation"></a>

```json
{
  "layouts": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "locale": "string",
  "masters": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "notesMaster": {
    "layoutProperties": {
      "displayName": "string",
      "masterObjectId": "string",
      "name": "string"
    },
    "masterProperties": {
      "displayName": "string"
    },
    "notesProperties": {
      "speakerNotesObjectId": "string"
    },
    "objectId": "string",
    "pageElements": [
      {}
    ],
    "pageProperties": {
      "colorScheme": {
        "colors": [
          {
            "color": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "type": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        ]
      },
      "pageBackgroundFill": {
        "propertyState": "RENDERED",
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "stretchedPictureFill": {
          "contentUrl": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        }
      }
    },
    "pageType": "SLIDE",
    "revisionId": "string",
    "slideProperties": {}
  },
  "pageSize": {
    "height": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "width": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "presentationId": "string",
  "revisionId": "string",
  "slides": [
    {
      "layoutProperties": {
        "displayName": "string",
        "masterObjectId": "string",
        "name": "string"
      },
      "masterProperties": {
        "displayName": "string"
      },
      "notesProperties": {
        "speakerNotesObjectId": "string"
      },
      "objectId": "string",
      "pageElements": [
        {}
      ],
      "pageProperties": {
        "colorScheme": {
          "colors": [
            {
              "color": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "type": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          ]
        },
        "pageBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "stretchedPictureFill": {
            "contentUrl": "string",
            "size": {
              "height": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "width": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              }
            }
          }
        }
      },
      "pageType": "SLIDE",
      "revisionId": "string",
      "slideProperties": {}
    }
  ],
  "title": "string"
}
```

A Google Slides presentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|layouts|[[Page](#schemapage)]|false|none|The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides that inherit from that layout.|
|locale|string|false|none|The locale of the presentation, as an IETF BCP 47 language tag.|
|masters|[[Page](#schemapage)]|false|none|The slide masters in the presentation. A slide master contains all common page elements and the common properties for a set of layouts. They serve three purposes: - Placeholder shapes on a master contain the default text styles and shape properties of all placeholder shapes on pages that use that master. - The master page properties define the common page properties inherited by its layouts. - Any other shapes on the master slide appear on all slides using that master, regardless of their layout.|
|notesMaster|[Page](#schemapage)|false|none|The notes master in the presentation. It serves three purposes: - Placeholder shapes on a notes master contain the default text styles and shape properties of all placeholder shapes on notes pages. Specifically, a `SLIDE_IMAGE` placeholder shape contains the slide thumbnail, and a `BODY` placeholder shape contains the speaker notes. - The notes master page properties define the common page properties inherited by all notes pages. - Any other shapes on the notes master appear on all notes pages. The notes master is read-only.|
|pageSize|[Size](#schemasize)|false|none|The size of pages in the presentation.|
|presentationId|string|false|none|The ID of the presentation.|
|revisionId|string|false|none|Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but a nebulous string. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.|
|slides|[[Page](#schemapage)]|false|none|The slides in the presentation. A slide inherits properties from a slide layout.|
|title|string|false|none|The title of the presentation.|

<h2 id="tocS_Range">Range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_Range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
{
  "endIndex": 0,
  "startIndex": 0,
  "type": "RANGE_TYPE_UNSPECIFIED"
}
```

Specifies a contiguous range of an indexed collection, such as characters in text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endIndex|integer(int32)|false|none|The optional zero-based index of the end of the collection. Required for `FIXED_RANGE` ranges.|
|startIndex|integer(int32)|false|none|The optional zero-based index of the beginning of the collection. Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.|
|type|string|false|none|The type of range.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|RANGE_TYPE_UNSPECIFIED|
|type|FIXED_RANGE|
|type|FROM_START_INDEX|
|type|ALL|

<h2 id="tocS_Recolor">Recolor</h2>
<!-- backwards compatibility -->
<a id="schemarecolor"></a>
<a id="schema_Recolor"></a>
<a id="tocSrecolor"></a>
<a id="tocsrecolor"></a>

```json
{
  "name": "NONE",
  "recolorStops": [
    {
      "alpha": 0,
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      },
      "position": 0
    }
  ]
}
```

A recolor effect applied on an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.|
|recolorStops|[[ColorStop](#schemacolorstop)]|false|none|The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NONE|
|name|LIGHT1|
|name|LIGHT2|
|name|LIGHT3|
|name|LIGHT4|
|name|LIGHT5|
|name|LIGHT6|
|name|LIGHT7|
|name|LIGHT8|
|name|LIGHT9|
|name|LIGHT10|
|name|DARK1|
|name|DARK2|
|name|DARK3|
|name|DARK4|
|name|DARK5|
|name|DARK6|
|name|DARK7|
|name|DARK8|
|name|DARK9|
|name|DARK10|
|name|GRAYSCALE|
|name|NEGATIVE|
|name|SEPIA|
|name|CUSTOM|

<h2 id="tocS_RefreshSheetsChartRequest">RefreshSheetsChartRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefreshsheetschartrequest"></a>
<a id="schema_RefreshSheetsChartRequest"></a>
<a id="tocSrefreshsheetschartrequest"></a>
<a id="tocsrefreshsheetschartrequest"></a>

```json
{
  "objectId": "string"
}
```

Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the chart to refresh.|

<h2 id="tocS_ReplaceAllShapesWithImageRequest">ReplaceAllShapesWithImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplaceallshapeswithimagerequest"></a>
<a id="schema_ReplaceAllShapesWithImageRequest"></a>
<a id="tocSreplaceallshapeswithimagerequest"></a>
<a id="tocsreplaceallshapeswithimagerequest"></a>

```json
{
  "containsText": {
    "matchCase": true,
    "text": "string"
  },
  "imageReplaceMethod": "IMAGE_REPLACE_METHOD_UNSPECIFIED",
  "imageUrl": "string",
  "pageObjectIds": [
    "string"
  ],
  "replaceMethod": "CENTER_INSIDE"
}
```

Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containsText|[SubstringMatchCriteria](#schemasubstringmatchcriteria)|false|none|If set, this request will replace all of the shapes that contain the given text.|
|imageReplaceMethod|string|false|none|The image replace method. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence. If you do not specify a value for `image_replace_method`, but specify a value for `replace_method`, then the specified `replace_method` value is used. If you do not specify either, then CENTER_INSIDE is used.|
|imageUrl|string|false|none|The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url field.|
|pageObjectIds|[string]|false|none|If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.|
|replaceMethod|string|false|none|**Deprecated.** The replace method. *Deprecated*: use `image_replace_method` instead. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence.|

#### Enumerated Values

|Property|Value|
|---|---|
|imageReplaceMethod|IMAGE_REPLACE_METHOD_UNSPECIFIED|
|imageReplaceMethod|CENTER_INSIDE|
|imageReplaceMethod|CENTER_CROP|
|replaceMethod|CENTER_INSIDE|
|replaceMethod|CENTER_CROP|

<h2 id="tocS_ReplaceAllShapesWithImageResponse">ReplaceAllShapesWithImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplaceallshapeswithimageresponse"></a>
<a id="schema_ReplaceAllShapesWithImageResponse"></a>
<a id="tocSreplaceallshapeswithimageresponse"></a>
<a id="tocsreplaceallshapeswithimageresponse"></a>

```json
{
  "occurrencesChanged": 0
}
```

The result of replacing shapes with an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|occurrencesChanged|integer(int32)|false|none|The number of shapes replaced with images.|

<h2 id="tocS_ReplaceAllShapesWithSheetsChartRequest">ReplaceAllShapesWithSheetsChartRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplaceallshapeswithsheetschartrequest"></a>
<a id="schema_ReplaceAllShapesWithSheetsChartRequest"></a>
<a id="tocSreplaceallshapeswithsheetschartrequest"></a>
<a id="tocsreplaceallshapeswithsheetschartrequest"></a>

```json
{
  "chartId": 0,
  "containsText": {
    "matchCase": true,
    "text": "string"
  },
  "linkingMode": "NOT_LINKED_IMAGE",
  "pageObjectIds": [
    "string"
  ],
  "spreadsheetId": "string"
}
```

Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartId|integer(int32)|false|none|The ID of the specific chart in the Google Sheets spreadsheet.|
|containsText|[SubstringMatchCriteria](#schemasubstringmatchcriteria)|false|none|The criteria that the shapes must match in order to be replaced. The request will replace all of the shapes that contain the given text.|
|linkingMode|string|false|none|The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.|
|pageObjectIds|[string]|false|none|If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.|
|spreadsheetId|string|false|none|The ID of the Google Sheets spreadsheet that contains the chart.|

#### Enumerated Values

|Property|Value|
|---|---|
|linkingMode|NOT_LINKED_IMAGE|
|linkingMode|LINKED|

<h2 id="tocS_ReplaceAllShapesWithSheetsChartResponse">ReplaceAllShapesWithSheetsChartResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplaceallshapeswithsheetschartresponse"></a>
<a id="schema_ReplaceAllShapesWithSheetsChartResponse"></a>
<a id="tocSreplaceallshapeswithsheetschartresponse"></a>
<a id="tocsreplaceallshapeswithsheetschartresponse"></a>

```json
{
  "occurrencesChanged": 0
}
```

The result of replacing shapes with a Google Sheets chart.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|occurrencesChanged|integer(int32)|false|none|The number of shapes replaced with charts.|

<h2 id="tocS_ReplaceAllTextRequest">ReplaceAllTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplacealltextrequest"></a>
<a id="schema_ReplaceAllTextRequest"></a>
<a id="tocSreplacealltextrequest"></a>
<a id="tocsreplacealltextrequest"></a>

```json
{
  "containsText": {
    "matchCase": true,
    "text": "string"
  },
  "pageObjectIds": [
    "string"
  ],
  "replaceText": "string"
}
```

Replaces all instances of text matching a criteria with replace text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containsText|[SubstringMatchCriteria](#schemasubstringmatchcriteria)|false|none|Finds text in a shape matching this substring.|
|pageObjectIds|[string]|false|none|If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes master, or if a page with that object ID doesn't exist in the presentation.|
|replaceText|string|false|none|The text that will replace the matched text.|

<h2 id="tocS_ReplaceAllTextResponse">ReplaceAllTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplacealltextresponse"></a>
<a id="schema_ReplaceAllTextResponse"></a>
<a id="tocSreplacealltextresponse"></a>
<a id="tocsreplacealltextresponse"></a>

```json
{
  "occurrencesChanged": 0
}
```

The result of replacing text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|occurrencesChanged|integer(int32)|false|none|The number of occurrences changed by replacing all text.|

<h2 id="tocS_ReplaceImageRequest">ReplaceImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplaceimagerequest"></a>
<a id="schema_ReplaceImageRequest"></a>
<a id="tocSreplaceimagerequest"></a>
<a id="tocsreplaceimagerequest"></a>

```json
{
  "imageObjectId": "string",
  "imageReplaceMethod": "IMAGE_REPLACE_METHOD_UNSPECIFIED",
  "url": "string"
}
```

Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageObjectId|string|false|none|The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.|
|imageReplaceMethod|string|false|none|The replacement method.|
|url|string|false|none|The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URL can't surpass 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field.|

#### Enumerated Values

|Property|Value|
|---|---|
|imageReplaceMethod|IMAGE_REPLACE_METHOD_UNSPECIFIED|
|imageReplaceMethod|CENTER_INSIDE|
|imageReplaceMethod|CENTER_CROP|

<h2 id="tocS_Request">Request</h2>
<!-- backwards compatibility -->
<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "createImage": {
    "elementProperties": {
      "pageObjectId": "string",
      "size": {
        "height": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "width": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "objectId": "string",
    "url": "string"
  },
  "createLine": {
    "category": "LINE_CATEGORY_UNSPECIFIED",
    "elementProperties": {
      "pageObjectId": "string",
      "size": {
        "height": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "width": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "lineCategory": "STRAIGHT",
    "objectId": "string"
  },
  "createParagraphBullets": {
    "bulletPreset": "BULLET_DISC_CIRCLE_SQUARE",
    "cellLocation": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "objectId": "string",
    "textRange": {
      "endIndex": 0,
      "startIndex": 0,
      "type": "RANGE_TYPE_UNSPECIFIED"
    }
  },
  "createShape": {
    "elementProperties": {
      "pageObjectId": "string",
      "size": {
        "height": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "width": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "objectId": "string",
    "shapeType": "TYPE_UNSPECIFIED"
  },
  "createSheetsChart": {
    "chartId": 0,
    "elementProperties": {
      "pageObjectId": "string",
      "size": {
        "height": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "width": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "linkingMode": "NOT_LINKED_IMAGE",
    "objectId": "string",
    "spreadsheetId": "string"
  },
  "createSlide": {
    "insertionIndex": 0,
    "objectId": "string",
    "placeholderIdMappings": [
      {
        "layoutPlaceholder": {
          "index": 0,
          "parentObjectId": "string",
          "type": "NONE"
        },
        "layoutPlaceholderObjectId": "string",
        "objectId": "string"
      }
    ],
    "slideLayoutReference": {
      "layoutId": "string",
      "predefinedLayout": "PREDEFINED_LAYOUT_UNSPECIFIED"
    }
  },
  "createTable": {
    "columns": 0,
    "elementProperties": {
      "pageObjectId": "string",
      "size": {
        "height": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "width": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "objectId": "string",
    "rows": 0
  },
  "createVideo": {
    "elementProperties": {
      "pageObjectId": "string",
      "size": {
        "height": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "width": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "id": "string",
    "objectId": "string",
    "source": "SOURCE_UNSPECIFIED"
  },
  "deleteObject": {
    "objectId": "string"
  },
  "deleteParagraphBullets": {
    "cellLocation": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "objectId": "string",
    "textRange": {
      "endIndex": 0,
      "startIndex": 0,
      "type": "RANGE_TYPE_UNSPECIFIED"
    }
  },
  "deleteTableColumn": {
    "cellLocation": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "tableObjectId": "string"
  },
  "deleteTableRow": {
    "cellLocation": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "tableObjectId": "string"
  },
  "deleteText": {
    "cellLocation": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "objectId": "string",
    "textRange": {
      "endIndex": 0,
      "startIndex": 0,
      "type": "RANGE_TYPE_UNSPECIFIED"
    }
  },
  "duplicateObject": {
    "objectId": "string",
    "objectIds": {
      "property1": "string",
      "property2": "string"
    }
  },
  "groupObjects": {
    "childrenObjectIds": [
      "string"
    ],
    "groupObjectId": "string"
  },
  "insertTableColumns": {
    "cellLocation": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "insertRight": true,
    "number": 0,
    "tableObjectId": "string"
  },
  "insertTableRows": {
    "cellLocation": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "insertBelow": true,
    "number": 0,
    "tableObjectId": "string"
  },
  "insertText": {
    "cellLocation": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "insertionIndex": 0,
    "objectId": "string",
    "text": "string"
  },
  "mergeTableCells": {
    "objectId": "string",
    "tableRange": {
      "columnSpan": 0,
      "location": {
        "columnIndex": 0,
        "rowIndex": 0
      },
      "rowSpan": 0
    }
  },
  "refreshSheetsChart": {
    "objectId": "string"
  },
  "replaceAllShapesWithImage": {
    "containsText": {
      "matchCase": true,
      "text": "string"
    },
    "imageReplaceMethod": "IMAGE_REPLACE_METHOD_UNSPECIFIED",
    "imageUrl": "string",
    "pageObjectIds": [
      "string"
    ],
    "replaceMethod": "CENTER_INSIDE"
  },
  "replaceAllShapesWithSheetsChart": {
    "chartId": 0,
    "containsText": {
      "matchCase": true,
      "text": "string"
    },
    "linkingMode": "NOT_LINKED_IMAGE",
    "pageObjectIds": [
      "string"
    ],
    "spreadsheetId": "string"
  },
  "replaceAllText": {
    "containsText": {
      "matchCase": true,
      "text": "string"
    },
    "pageObjectIds": [
      "string"
    ],
    "replaceText": "string"
  },
  "replaceImage": {
    "imageObjectId": "string",
    "imageReplaceMethod": "IMAGE_REPLACE_METHOD_UNSPECIFIED",
    "url": "string"
  },
  "rerouteLine": {
    "objectId": "string"
  },
  "ungroupObjects": {
    "objectIds": [
      "string"
    ]
  },
  "unmergeTableCells": {
    "objectId": "string",
    "tableRange": {
      "columnSpan": 0,
      "location": {
        "columnIndex": 0,
        "rowIndex": 0
      },
      "rowSpan": 0
    }
  },
  "updateImageProperties": {
    "fields": "string",
    "imageProperties": {
      "brightness": 0,
      "contrast": 0,
      "cropProperties": {
        "angle": 0,
        "bottomOffset": 0,
        "leftOffset": 0,
        "rightOffset": 0,
        "topOffset": 0
      },
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "outline": {
        "dashStyle": "DASH_STYLE_UNSPECIFIED",
        "outlineFill": {
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          }
        },
        "propertyState": "RENDERED",
        "weight": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "recolor": {
        "name": "NONE",
        "recolorStops": [
          {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "position": 0
          }
        ]
      },
      "shadow": {
        "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
        "alpha": 0,
        "blurRadius": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        },
        "propertyState": "RENDERED",
        "rotateWithShape": true,
        "transform": {
          "scaleX": 0,
          "scaleY": 0,
          "shearX": 0,
          "shearY": 0,
          "translateX": 0,
          "translateY": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "type": "SHADOW_TYPE_UNSPECIFIED"
      },
      "transparency": 0
    },
    "objectId": "string"
  },
  "updateLineCategory": {
    "lineCategory": "LINE_CATEGORY_UNSPECIFIED",
    "objectId": "string"
  },
  "updateLineProperties": {
    "fields": "string",
    "lineProperties": {
      "dashStyle": "DASH_STYLE_UNSPECIFIED",
      "endArrow": "ARROW_STYLE_UNSPECIFIED",
      "endConnection": {
        "connectedObjectId": "string",
        "connectionSiteIndex": 0
      },
      "lineFill": {
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      },
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "startArrow": "ARROW_STYLE_UNSPECIFIED",
      "startConnection": {
        "connectedObjectId": "string",
        "connectionSiteIndex": 0
      },
      "weight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "objectId": "string"
  },
  "updatePageElementAltText": {
    "description": "string",
    "objectId": "string",
    "title": "string"
  },
  "updatePageElementTransform": {
    "applyMode": "APPLY_MODE_UNSPECIFIED",
    "objectId": "string",
    "transform": {
      "scaleX": 0,
      "scaleY": 0,
      "shearX": 0,
      "shearY": 0,
      "translateX": 0,
      "translateY": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "updatePageElementsZOrder": {
    "operation": "Z_ORDER_OPERATION_UNSPECIFIED",
    "pageElementObjectIds": [
      "string"
    ]
  },
  "updatePageProperties": {
    "fields": "string",
    "objectId": "string",
    "pageProperties": {
      "colorScheme": {
        "colors": [
          {
            "color": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "type": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        ]
      },
      "pageBackgroundFill": {
        "propertyState": "RENDERED",
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "stretchedPictureFill": {
          "contentUrl": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        }
      }
    }
  },
  "updateParagraphStyle": {
    "cellLocation": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "fields": "string",
    "objectId": "string",
    "style": {
      "alignment": "ALIGNMENT_UNSPECIFIED",
      "direction": "TEXT_DIRECTION_UNSPECIFIED",
      "indentEnd": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "indentFirstLine": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "indentStart": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "lineSpacing": 0,
      "spaceAbove": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "spaceBelow": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "spacingMode": "SPACING_MODE_UNSPECIFIED"
    },
    "textRange": {
      "endIndex": 0,
      "startIndex": 0,
      "type": "RANGE_TYPE_UNSPECIFIED"
    }
  },
  "updateShapeProperties": {
    "fields": "string",
    "objectId": "string",
    "shapeProperties": {
      "autofit": {
        "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
        "fontScale": 0,
        "lineSpacingReduction": 0
      },
      "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "outline": {
        "dashStyle": "DASH_STYLE_UNSPECIFIED",
        "outlineFill": {
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          }
        },
        "propertyState": "RENDERED",
        "weight": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "shadow": {
        "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
        "alpha": 0,
        "blurRadius": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        },
        "propertyState": "RENDERED",
        "rotateWithShape": true,
        "transform": {
          "scaleX": 0,
          "scaleY": 0,
          "shearX": 0,
          "shearY": 0,
          "translateX": 0,
          "translateY": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "type": "SHADOW_TYPE_UNSPECIFIED"
      },
      "shapeBackgroundFill": {
        "propertyState": "RENDERED",
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      }
    }
  },
  "updateSlideProperties": {
    "fields": "string",
    "objectId": "string",
    "slideProperties": {
      "isSkipped": true,
      "layoutObjectId": "string",
      "masterObjectId": "string",
      "notesPage": {}
    }
  },
  "updateSlidesPosition": {
    "insertionIndex": 0,
    "slideObjectIds": [
      "string"
    ]
  },
  "updateTableBorderProperties": {
    "borderPosition": "ALL",
    "fields": "string",
    "objectId": "string",
    "tableBorderProperties": {
      "dashStyle": "DASH_STYLE_UNSPECIFIED",
      "tableBorderFill": {
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      },
      "weight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "tableRange": {
      "columnSpan": 0,
      "location": {
        "columnIndex": 0,
        "rowIndex": 0
      },
      "rowSpan": 0
    }
  },
  "updateTableCellProperties": {
    "fields": "string",
    "objectId": "string",
    "tableCellProperties": {
      "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
      "tableCellBackgroundFill": {
        "propertyState": "RENDERED",
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      }
    },
    "tableRange": {
      "columnSpan": 0,
      "location": {
        "columnIndex": 0,
        "rowIndex": 0
      },
      "rowSpan": 0
    }
  },
  "updateTableColumnProperties": {
    "columnIndices": [
      0
    ],
    "fields": "string",
    "objectId": "string",
    "tableColumnProperties": {
      "columnWidth": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    }
  },
  "updateTableRowProperties": {
    "fields": "string",
    "objectId": "string",
    "rowIndices": [
      0
    ],
    "tableRowProperties": {
      "minRowHeight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    }
  },
  "updateTextStyle": {
    "cellLocation": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "fields": "string",
    "objectId": "string",
    "style": {
      "backgroundColor": {
        "opaqueColor": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
      "bold": true,
      "fontFamily": "string",
      "fontSize": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "foregroundColor": {
        "opaqueColor": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "italic": true,
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "smallCaps": true,
      "strikethrough": true,
      "underline": true,
      "weightedFontFamily": {
        "fontFamily": "string",
        "weight": 0
      }
    },
    "textRange": {
      "endIndex": 0,
      "startIndex": 0,
      "type": "RANGE_TYPE_UNSPECIFIED"
    }
  },
  "updateVideoProperties": {
    "fields": "string",
    "objectId": "string",
    "videoProperties": {
      "autoPlay": true,
      "end": 0,
      "mute": true,
      "outline": {
        "dashStyle": "DASH_STYLE_UNSPECIFIED",
        "outlineFill": {
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          }
        },
        "propertyState": "RENDERED",
        "weight": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "start": 0
    }
  }
}
```

A single kind of update to apply to a presentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createImage|[CreateImageRequest](#schemacreateimagerequest)|false|none|Creates an image.|
|createLine|[CreateLineRequest](#schemacreatelinerequest)|false|none|Creates a line.|
|createParagraphBullets|[CreateParagraphBulletsRequest](#schemacreateparagraphbulletsrequest)|false|none|Creates bullets for paragraphs.|
|createShape|[CreateShapeRequest](#schemacreateshaperequest)|false|none|Creates a new shape.|
|createSheetsChart|[CreateSheetsChartRequest](#schemacreatesheetschartrequest)|false|none|Creates an embedded Google Sheets chart.|
|createSlide|[CreateSlideRequest](#schemacreatesliderequest)|false|none|Creates a new slide.|
|createTable|[CreateTableRequest](#schemacreatetablerequest)|false|none|Creates a new table.|
|createVideo|[CreateVideoRequest](#schemacreatevideorequest)|false|none|Creates a video.|
|deleteObject|[DeleteObjectRequest](#schemadeleteobjectrequest)|false|none|Deletes a page or page element from the presentation.|
|deleteParagraphBullets|[DeleteParagraphBulletsRequest](#schemadeleteparagraphbulletsrequest)|false|none|Deletes bullets from paragraphs.|
|deleteTableColumn|[DeleteTableColumnRequest](#schemadeletetablecolumnrequest)|false|none|Deletes a column from a table.|
|deleteTableRow|[DeleteTableRowRequest](#schemadeletetablerowrequest)|false|none|Deletes a row from a table.|
|deleteText|[DeleteTextRequest](#schemadeletetextrequest)|false|none|Deletes text from a shape or a table cell.|
|duplicateObject|[DuplicateObjectRequest](#schemaduplicateobjectrequest)|false|none|Duplicates a slide or page element.|
|groupObjects|[GroupObjectsRequest](#schemagroupobjectsrequest)|false|none|Groups objects, such as page elements.|
|insertTableColumns|[InsertTableColumnsRequest](#schemainserttablecolumnsrequest)|false|none|Inserts columns into a table.|
|insertTableRows|[InsertTableRowsRequest](#schemainserttablerowsrequest)|false|none|Inserts rows into a table.|
|insertText|[InsertTextRequest](#schemainserttextrequest)|false|none|Inserts text into a shape or table cell.|
|mergeTableCells|[MergeTableCellsRequest](#schemamergetablecellsrequest)|false|none|Merges cells in a Table.|
|refreshSheetsChart|[RefreshSheetsChartRequest](#schemarefreshsheetschartrequest)|false|none|Refreshes a Google Sheets chart.|
|replaceAllShapesWithImage|[ReplaceAllShapesWithImageRequest](#schemareplaceallshapeswithimagerequest)|false|none|Replaces all shapes matching some criteria with an image.|
|replaceAllShapesWithSheetsChart|[ReplaceAllShapesWithSheetsChartRequest](#schemareplaceallshapeswithsheetschartrequest)|false|none|Replaces all shapes matching some criteria with a Google Sheets chart.|
|replaceAllText|[ReplaceAllTextRequest](#schemareplacealltextrequest)|false|none|Replaces all instances of specified text.|
|replaceImage|[ReplaceImageRequest](#schemareplaceimagerequest)|false|none|Replaces an existing image with a new image.|
|rerouteLine|[RerouteLineRequest](#schemareroutelinerequest)|false|none|Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.|
|ungroupObjects|[UngroupObjectsRequest](#schemaungroupobjectsrequest)|false|none|Ungroups objects, such as groups.|
|unmergeTableCells|[UnmergeTableCellsRequest](#schemaunmergetablecellsrequest)|false|none|Unmerges cells in a Table.|
|updateImageProperties|[UpdateImagePropertiesRequest](#schemaupdateimagepropertiesrequest)|false|none|Updates the properties of an Image.|
|updateLineCategory|[UpdateLineCategoryRequest](#schemaupdatelinecategoryrequest)|false|none|Updates the category of a line.|
|updateLineProperties|[UpdateLinePropertiesRequest](#schemaupdatelinepropertiesrequest)|false|none|Updates the properties of a Line.|
|updatePageElementAltText|[UpdatePageElementAltTextRequest](#schemaupdatepageelementalttextrequest)|false|none|Updates the alt text title and/or description of a page element.|
|updatePageElementTransform|[UpdatePageElementTransformRequest](#schemaupdatepageelementtransformrequest)|false|none|Updates the transform of a page element.|
|updatePageElementsZOrder|[UpdatePageElementsZOrderRequest](#schemaupdatepageelementszorderrequest)|false|none|Updates the Z-order of page elements.|
|updatePageProperties|[UpdatePagePropertiesRequest](#schemaupdatepagepropertiesrequest)|false|none|Updates the properties of a Page.|
|updateParagraphStyle|[UpdateParagraphStyleRequest](#schemaupdateparagraphstylerequest)|false|none|Updates the styling of paragraphs within a Shape or Table.|
|updateShapeProperties|[UpdateShapePropertiesRequest](#schemaupdateshapepropertiesrequest)|false|none|Updates the properties of a Shape.|
|updateSlideProperties|[UpdateSlidePropertiesRequest](#schemaupdateslidepropertiesrequest)|false|none|Updates the properties of a Slide|
|updateSlidesPosition|[UpdateSlidesPositionRequest](#schemaupdateslidespositionrequest)|false|none|Updates the position of a set of slides in the presentation.|
|updateTableBorderProperties|[UpdateTableBorderPropertiesRequest](#schemaupdatetableborderpropertiesrequest)|false|none|Updates the properties of the table borders in a Table.|
|updateTableCellProperties|[UpdateTableCellPropertiesRequest](#schemaupdatetablecellpropertiesrequest)|false|none|Updates the properties of a TableCell.|
|updateTableColumnProperties|[UpdateTableColumnPropertiesRequest](#schemaupdatetablecolumnpropertiesrequest)|false|none|Updates the properties of a Table column.|
|updateTableRowProperties|[UpdateTableRowPropertiesRequest](#schemaupdatetablerowpropertiesrequest)|false|none|Updates the properties of a Table row.|
|updateTextStyle|[UpdateTextStyleRequest](#schemaupdatetextstylerequest)|false|none|Updates the styling of text within a Shape or Table.|
|updateVideoProperties|[UpdateVideoPropertiesRequest](#schemaupdatevideopropertiesrequest)|false|none|Updates the properties of a Video.|

<h2 id="tocS_RerouteLineRequest">RerouteLineRequest</h2>
<!-- backwards compatibility -->
<a id="schemareroutelinerequest"></a>
<a id="schema_RerouteLineRequest"></a>
<a id="tocSreroutelinerequest"></a>
<a id="tocsreroutelinerequest"></a>

```json
{
  "objectId": "string"
}
```

Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the line to reroute. Only a line with a category indicating it is a "connector" can be rerouted. The start and end connections of the line must be on different page elements.|

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "createImage": {
    "objectId": "string"
  },
  "createLine": {
    "objectId": "string"
  },
  "createShape": {
    "objectId": "string"
  },
  "createSheetsChart": {
    "objectId": "string"
  },
  "createSlide": {
    "objectId": "string"
  },
  "createTable": {
    "objectId": "string"
  },
  "createVideo": {
    "objectId": "string"
  },
  "duplicateObject": {
    "objectId": "string"
  },
  "groupObjects": {
    "objectId": "string"
  },
  "replaceAllShapesWithImage": {
    "occurrencesChanged": 0
  },
  "replaceAllShapesWithSheetsChart": {
    "occurrencesChanged": 0
  },
  "replaceAllText": {
    "occurrencesChanged": 0
  }
}
```

A single response from an update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createImage|[CreateImageResponse](#schemacreateimageresponse)|false|none|The result of creating an image.|
|createLine|[CreateLineResponse](#schemacreatelineresponse)|false|none|The result of creating a line.|
|createShape|[CreateShapeResponse](#schemacreateshaperesponse)|false|none|The result of creating a shape.|
|createSheetsChart|[CreateSheetsChartResponse](#schemacreatesheetschartresponse)|false|none|The result of creating a Google Sheets chart.|
|createSlide|[CreateSlideResponse](#schemacreateslideresponse)|false|none|The result of creating a slide.|
|createTable|[CreateTableResponse](#schemacreatetableresponse)|false|none|The result of creating a table.|
|createVideo|[CreateVideoResponse](#schemacreatevideoresponse)|false|none|The result of creating a video.|
|duplicateObject|[DuplicateObjectResponse](#schemaduplicateobjectresponse)|false|none|The result of duplicating an object.|
|groupObjects|[GroupObjectsResponse](#schemagroupobjectsresponse)|false|none|The result of grouping objects.|
|replaceAllShapesWithImage|[ReplaceAllShapesWithImageResponse](#schemareplaceallshapeswithimageresponse)|false|none|The result of replacing all shapes matching some criteria with an image.|
|replaceAllShapesWithSheetsChart|[ReplaceAllShapesWithSheetsChartResponse](#schemareplaceallshapeswithsheetschartresponse)|false|none|The result of replacing all shapes matching some criteria with a Google Sheets chart.|
|replaceAllText|[ReplaceAllTextResponse](#schemareplacealltextresponse)|false|none|The result of replacing text.|

<h2 id="tocS_RgbColor">RgbColor</h2>
<!-- backwards compatibility -->
<a id="schemargbcolor"></a>
<a id="schema_RgbColor"></a>
<a id="tocSrgbcolor"></a>
<a id="tocsrgbcolor"></a>

```json
{
  "blue": 0,
  "green": 0,
  "red": 0
}
```

An RGB color.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blue|number(float)|false|none|The blue component of the color, from 0.0 to 1.0.|
|green|number(float)|false|none|The green component of the color, from 0.0 to 1.0.|
|red|number(float)|false|none|The red component of the color, from 0.0 to 1.0.|

<h2 id="tocS_Shadow">Shadow</h2>
<!-- backwards compatibility -->
<a id="schemashadow"></a>
<a id="schema_Shadow"></a>
<a id="tocSshadow"></a>
<a id="tocsshadow"></a>

```json
{
  "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
  "alpha": 0,
  "blurRadius": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "color": {
    "rgbColor": {
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
  },
  "propertyState": "RENDERED",
  "rotateWithShape": true,
  "transform": {
    "scaleX": 0,
    "scaleY": 0,
    "shearX": 0,
    "shearY": 0,
    "translateX": 0,
    "translateY": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "type": "SHADOW_TYPE_UNSPECIFIED"
}
```

The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alignment|string|false|none|The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.|
|alpha|number(float)|false|none|The alpha of the shadow's color, from 0.0 to 1.0.|
|blurRadius|[Dimension](#schemadimension)|false|none|The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.|
|color|[OpaqueColor](#schemaopaquecolor)|false|none|The shadow color value.|
|propertyState|string|false|none|The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.|
|rotateWithShape|boolean|false|none|Whether the shadow should rotate with the shape. This property is read-only.|
|transform|[AffineTransform](#schemaaffinetransform)|false|none|Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.|
|type|string|false|none|The type of the shadow. This property is read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|alignment|RECTANGLE_POSITION_UNSPECIFIED|
|alignment|TOP_LEFT|
|alignment|TOP_CENTER|
|alignment|TOP_RIGHT|
|alignment|LEFT_CENTER|
|alignment|CENTER|
|alignment|RIGHT_CENTER|
|alignment|BOTTOM_LEFT|
|alignment|BOTTOM_CENTER|
|alignment|BOTTOM_RIGHT|
|propertyState|RENDERED|
|propertyState|NOT_RENDERED|
|propertyState|INHERIT|
|type|SHADOW_TYPE_UNSPECIFIED|
|type|OUTER|

<h2 id="tocS_Shape">Shape</h2>
<!-- backwards compatibility -->
<a id="schemashape"></a>
<a id="schema_Shape"></a>
<a id="tocSshape"></a>
<a id="tocsshape"></a>

```json
{
  "placeholder": {
    "index": 0,
    "parentObjectId": "string",
    "type": "NONE"
  },
  "shapeProperties": {
    "autofit": {
      "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
      "fontScale": 0,
      "lineSpacingReduction": 0
    },
    "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "outline": {
      "dashStyle": "DASH_STYLE_UNSPECIFIED",
      "outlineFill": {
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      },
      "propertyState": "RENDERED",
      "weight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "shadow": {
      "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
      "alpha": 0,
      "blurRadius": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      },
      "propertyState": "RENDERED",
      "rotateWithShape": true,
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "type": "SHADOW_TYPE_UNSPECIFIED"
    },
    "shapeBackgroundFill": {
      "propertyState": "RENDERED",
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    }
  },
  "shapeType": "TYPE_UNSPECIFIED",
  "text": {
    "lists": {
      "property1": {
        "listId": "string",
        "nestingLevel": {
          "property1": {
            "bulletStyle": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            }
          },
          "property2": {
            "bulletStyle": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            }
          }
        }
      },
      "property2": {
        "listId": "string",
        "nestingLevel": {
          "property1": {
            "bulletStyle": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            }
          },
          "property2": {
            "bulletStyle": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            }
          }
        }
      }
    },
    "textElements": [
      {
        "autoText": {
          "content": "string",
          "style": {
            "backgroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
            "bold": true,
            "fontFamily": "string",
            "fontSize": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "foregroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "italic": true,
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "smallCaps": true,
            "strikethrough": true,
            "underline": true,
            "weightedFontFamily": {
              "fontFamily": "string",
              "weight": 0
            }
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "endIndex": 0,
        "paragraphMarker": {
          "bullet": {
            "bulletStyle": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            },
            "glyph": "string",
            "listId": "string",
            "nestingLevel": 0
          },
          "style": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "direction": "TEXT_DIRECTION_UNSPECIFIED",
            "indentEnd": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "indentFirstLine": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "indentStart": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "lineSpacing": 0,
            "spaceAbove": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "spaceBelow": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "spacingMode": "SPACING_MODE_UNSPECIFIED"
          }
        },
        "startIndex": 0,
        "textRun": {
          "content": "string",
          "style": {
            "backgroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
            "bold": true,
            "fontFamily": "string",
            "fontSize": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "foregroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "italic": true,
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "smallCaps": true,
            "strikethrough": true,
            "underline": true,
            "weightedFontFamily": {
              "fontFamily": "string",
              "weight": 0
            }
          }
        }
      }
    ]
  }
}
```

A PageElement kind representing a generic shape that does not have a more specific classification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placeholder|[Placeholder](#schemaplaceholder)|false|none|Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the shape is a placeholder shape and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.|
|shapeProperties|[ShapeProperties](#schemashapeproperties)|false|none|The properties of the shape.|
|shapeType|string|false|none|The type of the shape.|
|text|[TextContent](#schematextcontent)|false|none|The text content of the shape.|

#### Enumerated Values

|Property|Value|
|---|---|
|shapeType|TYPE_UNSPECIFIED|
|shapeType|TEXT_BOX|
|shapeType|RECTANGLE|
|shapeType|ROUND_RECTANGLE|
|shapeType|ELLIPSE|
|shapeType|ARC|
|shapeType|BENT_ARROW|
|shapeType|BENT_UP_ARROW|
|shapeType|BEVEL|
|shapeType|BLOCK_ARC|
|shapeType|BRACE_PAIR|
|shapeType|BRACKET_PAIR|
|shapeType|CAN|
|shapeType|CHEVRON|
|shapeType|CHORD|
|shapeType|CLOUD|
|shapeType|CORNER|
|shapeType|CUBE|
|shapeType|CURVED_DOWN_ARROW|
|shapeType|CURVED_LEFT_ARROW|
|shapeType|CURVED_RIGHT_ARROW|
|shapeType|CURVED_UP_ARROW|
|shapeType|DECAGON|
|shapeType|DIAGONAL_STRIPE|
|shapeType|DIAMOND|
|shapeType|DODECAGON|
|shapeType|DONUT|
|shapeType|DOUBLE_WAVE|
|shapeType|DOWN_ARROW|
|shapeType|DOWN_ARROW_CALLOUT|
|shapeType|FOLDED_CORNER|
|shapeType|FRAME|
|shapeType|HALF_FRAME|
|shapeType|HEART|
|shapeType|HEPTAGON|
|shapeType|HEXAGON|
|shapeType|HOME_PLATE|
|shapeType|HORIZONTAL_SCROLL|
|shapeType|IRREGULAR_SEAL_1|
|shapeType|IRREGULAR_SEAL_2|
|shapeType|LEFT_ARROW|
|shapeType|LEFT_ARROW_CALLOUT|
|shapeType|LEFT_BRACE|
|shapeType|LEFT_BRACKET|
|shapeType|LEFT_RIGHT_ARROW|
|shapeType|LEFT_RIGHT_ARROW_CALLOUT|
|shapeType|LEFT_RIGHT_UP_ARROW|
|shapeType|LEFT_UP_ARROW|
|shapeType|LIGHTNING_BOLT|
|shapeType|MATH_DIVIDE|
|shapeType|MATH_EQUAL|
|shapeType|MATH_MINUS|
|shapeType|MATH_MULTIPLY|
|shapeType|MATH_NOT_EQUAL|
|shapeType|MATH_PLUS|
|shapeType|MOON|
|shapeType|NO_SMOKING|
|shapeType|NOTCHED_RIGHT_ARROW|
|shapeType|OCTAGON|
|shapeType|PARALLELOGRAM|
|shapeType|PENTAGON|
|shapeType|PIE|
|shapeType|PLAQUE|
|shapeType|PLUS|
|shapeType|QUAD_ARROW|
|shapeType|QUAD_ARROW_CALLOUT|
|shapeType|RIBBON|
|shapeType|RIBBON_2|
|shapeType|RIGHT_ARROW|
|shapeType|RIGHT_ARROW_CALLOUT|
|shapeType|RIGHT_BRACE|
|shapeType|RIGHT_BRACKET|
|shapeType|ROUND_1_RECTANGLE|
|shapeType|ROUND_2_DIAGONAL_RECTANGLE|
|shapeType|ROUND_2_SAME_RECTANGLE|
|shapeType|RIGHT_TRIANGLE|
|shapeType|SMILEY_FACE|
|shapeType|SNIP_1_RECTANGLE|
|shapeType|SNIP_2_DIAGONAL_RECTANGLE|
|shapeType|SNIP_2_SAME_RECTANGLE|
|shapeType|SNIP_ROUND_RECTANGLE|
|shapeType|STAR_10|
|shapeType|STAR_12|
|shapeType|STAR_16|
|shapeType|STAR_24|
|shapeType|STAR_32|
|shapeType|STAR_4|
|shapeType|STAR_5|
|shapeType|STAR_6|
|shapeType|STAR_7|
|shapeType|STAR_8|
|shapeType|STRIPED_RIGHT_ARROW|
|shapeType|SUN|
|shapeType|TRAPEZOID|
|shapeType|TRIANGLE|
|shapeType|UP_ARROW|
|shapeType|UP_ARROW_CALLOUT|
|shapeType|UP_DOWN_ARROW|
|shapeType|UTURN_ARROW|
|shapeType|VERTICAL_SCROLL|
|shapeType|WAVE|
|shapeType|WEDGE_ELLIPSE_CALLOUT|
|shapeType|WEDGE_RECTANGLE_CALLOUT|
|shapeType|WEDGE_ROUND_RECTANGLE_CALLOUT|
|shapeType|FLOW_CHART_ALTERNATE_PROCESS|
|shapeType|FLOW_CHART_COLLATE|
|shapeType|FLOW_CHART_CONNECTOR|
|shapeType|FLOW_CHART_DECISION|
|shapeType|FLOW_CHART_DELAY|
|shapeType|FLOW_CHART_DISPLAY|
|shapeType|FLOW_CHART_DOCUMENT|
|shapeType|FLOW_CHART_EXTRACT|
|shapeType|FLOW_CHART_INPUT_OUTPUT|
|shapeType|FLOW_CHART_INTERNAL_STORAGE|
|shapeType|FLOW_CHART_MAGNETIC_DISK|
|shapeType|FLOW_CHART_MAGNETIC_DRUM|
|shapeType|FLOW_CHART_MAGNETIC_TAPE|
|shapeType|FLOW_CHART_MANUAL_INPUT|
|shapeType|FLOW_CHART_MANUAL_OPERATION|
|shapeType|FLOW_CHART_MERGE|
|shapeType|FLOW_CHART_MULTIDOCUMENT|
|shapeType|FLOW_CHART_OFFLINE_STORAGE|
|shapeType|FLOW_CHART_OFFPAGE_CONNECTOR|
|shapeType|FLOW_CHART_ONLINE_STORAGE|
|shapeType|FLOW_CHART_OR|
|shapeType|FLOW_CHART_PREDEFINED_PROCESS|
|shapeType|FLOW_CHART_PREPARATION|
|shapeType|FLOW_CHART_PROCESS|
|shapeType|FLOW_CHART_PUNCHED_CARD|
|shapeType|FLOW_CHART_PUNCHED_TAPE|
|shapeType|FLOW_CHART_SORT|
|shapeType|FLOW_CHART_SUMMING_JUNCTION|
|shapeType|FLOW_CHART_TERMINATOR|
|shapeType|ARROW_EAST|
|shapeType|ARROW_NORTH_EAST|
|shapeType|ARROW_NORTH|
|shapeType|SPEECH|
|shapeType|STARBURST|
|shapeType|TEARDROP|
|shapeType|ELLIPSE_RIBBON|
|shapeType|ELLIPSE_RIBBON_2|
|shapeType|CLOUD_CALLOUT|
|shapeType|CUSTOM|

<h2 id="tocS_ShapeBackgroundFill">ShapeBackgroundFill</h2>
<!-- backwards compatibility -->
<a id="schemashapebackgroundfill"></a>
<a id="schema_ShapeBackgroundFill"></a>
<a id="tocSshapebackgroundfill"></a>
<a id="tocsshapebackgroundfill"></a>

```json
{
  "propertyState": "RENDERED",
  "solidFill": {
    "alpha": 0,
    "color": {
      "rgbColor": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
    }
  }
}
```

The shape background fill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyState|string|false|none|The background fill property state. Updating the fill on a shape will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a shape, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.|
|solidFill|[SolidFill](#schemasolidfill)|false|none|Solid color fill.|

#### Enumerated Values

|Property|Value|
|---|---|
|propertyState|RENDERED|
|propertyState|NOT_RENDERED|
|propertyState|INHERIT|

<h2 id="tocS_ShapeProperties">ShapeProperties</h2>
<!-- backwards compatibility -->
<a id="schemashapeproperties"></a>
<a id="schema_ShapeProperties"></a>
<a id="tocSshapeproperties"></a>
<a id="tocsshapeproperties"></a>

```json
{
  "autofit": {
    "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
    "fontScale": 0,
    "lineSpacingReduction": 0
  },
  "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
  "link": {
    "pageObjectId": "string",
    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
    "slideIndex": 0,
    "url": "string"
  },
  "outline": {
    "dashStyle": "DASH_STYLE_UNSPECIFIED",
    "outlineFill": {
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    },
    "propertyState": "RENDERED",
    "weight": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "shadow": {
    "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
    "alpha": 0,
    "blurRadius": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "color": {
      "rgbColor": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
    },
    "propertyState": "RENDERED",
    "rotateWithShape": true,
    "transform": {
      "scaleX": 0,
      "scaleY": 0,
      "shearX": 0,
      "shearY": 0,
      "translateX": 0,
      "translateY": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "type": "SHADOW_TYPE_UNSPECIFIED"
  },
  "shapeBackgroundFill": {
    "propertyState": "RENDERED",
    "solidFill": {
      "alpha": 0,
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    }
  }
}
```

The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autofit|[Autofit](#schemaautofit)|false|none|The autofit properties of the shape. This property is only set for shapes that allow text.|
|contentAlignment|string|false|none|The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor.|
|link|[Link](#schemalink)|false|none|The hyperlink destination of the shape. If unset, there is no link. Links are not inherited from parent placeholders.|
|outline|[Outline](#schemaoutline)|false|none|The outline of the shape. If unset, the outline is inherited from a parent placeholder if it exists. If the shape has no parent, then the default outline depends on the shape type, matching the defaults for new shapes created in the Slides editor.|
|shadow|[Shadow](#schemashadow)|false|none|The shadow properties of the shape. If unset, the shadow is inherited from a parent placeholder if it exists. If the shape has no parent, then the default shadow matches the defaults for new shapes created in the Slides editor. This property is read-only.|
|shapeBackgroundFill|[ShapeBackgroundFill](#schemashapebackgroundfill)|false|none|The background fill of the shape. If unset, the background fill is inherited from a parent placeholder if it exists. If the shape has no parent, then the default background fill depends on the shape type, matching the defaults for new shapes created in the Slides editor.|

#### Enumerated Values

|Property|Value|
|---|---|
|contentAlignment|CONTENT_ALIGNMENT_UNSPECIFIED|
|contentAlignment|CONTENT_ALIGNMENT_UNSUPPORTED|
|contentAlignment|TOP|
|contentAlignment|MIDDLE|
|contentAlignment|BOTTOM|

<h2 id="tocS_SheetsChart">SheetsChart</h2>
<!-- backwards compatibility -->
<a id="schemasheetschart"></a>
<a id="schema_SheetsChart"></a>
<a id="tocSsheetschart"></a>
<a id="tocssheetschart"></a>

```json
{
  "chartId": 0,
  "contentUrl": "string",
  "sheetsChartProperties": {
    "chartImageProperties": {
      "brightness": 0,
      "contrast": 0,
      "cropProperties": {
        "angle": 0,
        "bottomOffset": 0,
        "leftOffset": 0,
        "rightOffset": 0,
        "topOffset": 0
      },
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "outline": {
        "dashStyle": "DASH_STYLE_UNSPECIFIED",
        "outlineFill": {
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          }
        },
        "propertyState": "RENDERED",
        "weight": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      },
      "recolor": {
        "name": "NONE",
        "recolorStops": [
          {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            },
            "position": 0
          }
        ]
      },
      "shadow": {
        "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
        "alpha": 0,
        "blurRadius": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        },
        "propertyState": "RENDERED",
        "rotateWithShape": true,
        "transform": {
          "scaleX": 0,
          "scaleY": 0,
          "shearX": 0,
          "shearY": 0,
          "translateX": 0,
          "translateY": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "type": "SHADOW_TYPE_UNSPECIFIED"
      },
      "transparency": 0
    }
  },
  "spreadsheetId": "string"
}
```

A PageElement kind representing a linked chart embedded from Google Sheets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartId|integer(int32)|false|none|The ID of the specific chart in the Google Sheets spreadsheet that is embedded.|
|contentUrl|string|false|none|The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.|
|sheetsChartProperties|[SheetsChartProperties](#schemasheetschartproperties)|false|none|The properties of the Sheets chart.|
|spreadsheetId|string|false|none|The ID of the Google Sheets spreadsheet that contains the source chart.|

<h2 id="tocS_SheetsChartProperties">SheetsChartProperties</h2>
<!-- backwards compatibility -->
<a id="schemasheetschartproperties"></a>
<a id="schema_SheetsChartProperties"></a>
<a id="tocSsheetschartproperties"></a>
<a id="tocssheetschartproperties"></a>

```json
{
  "chartImageProperties": {
    "brightness": 0,
    "contrast": 0,
    "cropProperties": {
      "angle": 0,
      "bottomOffset": 0,
      "leftOffset": 0,
      "rightOffset": 0,
      "topOffset": 0
    },
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "outline": {
      "dashStyle": "DASH_STYLE_UNSPECIFIED",
      "outlineFill": {
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      },
      "propertyState": "RENDERED",
      "weight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "recolor": {
      "name": "NONE",
      "recolorStops": [
        {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          },
          "position": 0
        }
      ]
    },
    "shadow": {
      "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
      "alpha": 0,
      "blurRadius": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      },
      "propertyState": "RENDERED",
      "rotateWithShape": true,
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "type": "SHADOW_TYPE_UNSPECIFIED"
    },
    "transparency": 0
  }
}
```

The properties of the SheetsChart.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartImageProperties|[ImageProperties](#schemaimageproperties)|false|none|The properties of the embedded chart image.|

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
{
  "height": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "width": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  }
}
```

A width and height.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|[Dimension](#schemadimension)|false|none|The height of the object.|
|width|[Dimension](#schemadimension)|false|none|The width of the object.|

<h2 id="tocS_SlideProperties">SlideProperties</h2>
<!-- backwards compatibility -->
<a id="schemaslideproperties"></a>
<a id="schema_SlideProperties"></a>
<a id="tocSslideproperties"></a>
<a id="tocsslideproperties"></a>

```json
{
  "isSkipped": true,
  "layoutObjectId": "string",
  "masterObjectId": "string",
  "notesPage": {
    "layoutProperties": {
      "displayName": "string",
      "masterObjectId": "string",
      "name": "string"
    },
    "masterProperties": {
      "displayName": "string"
    },
    "notesProperties": {
      "speakerNotesObjectId": "string"
    },
    "objectId": "string",
    "pageElements": [
      {}
    ],
    "pageProperties": {
      "colorScheme": {
        "colors": [
          {
            "color": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "type": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        ]
      },
      "pageBackgroundFill": {
        "propertyState": "RENDERED",
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "stretchedPictureFill": {
          "contentUrl": "string",
          "size": {
            "height": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "width": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        }
      }
    },
    "pageType": "SLIDE",
    "revisionId": "string",
    "slideProperties": {}
  }
}
```

The properties of Page that are only relevant for pages with page_type SLIDE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isSkipped|boolean|false|none|Whether the slide is skipped in the presentation mode. Defaults to false.|
|layoutObjectId|string|false|none|The object ID of the layout that this slide is based on. This property is read-only.|
|masterObjectId|string|false|none|The object ID of the master that this slide is based on. This property is read-only.|
|notesPage|[Page](#schemapage)|false|none|The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.|

<h2 id="tocS_SolidFill">SolidFill</h2>
<!-- backwards compatibility -->
<a id="schemasolidfill"></a>
<a id="schema_SolidFill"></a>
<a id="tocSsolidfill"></a>
<a id="tocssolidfill"></a>

```json
{
  "alpha": 0,
  "color": {
    "rgbColor": {
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
  }
}
```

A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpha|number(float)|false|none|The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.|
|color|[OpaqueColor](#schemaopaquecolor)|false|none|The color value of the solid fill.|

<h2 id="tocS_StretchedPictureFill">StretchedPictureFill</h2>
<!-- backwards compatibility -->
<a id="schemastretchedpicturefill"></a>
<a id="schema_StretchedPictureFill"></a>
<a id="tocSstretchedpicturefill"></a>
<a id="tocsstretchedpicturefill"></a>

```json
{
  "contentUrl": "string",
  "size": {
    "height": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "width": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  }
}
```

The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentUrl|string|false|none|Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.|
|size|[Size](#schemasize)|false|none|The original size of the picture fill. This field is read-only.|

<h2 id="tocS_SubstringMatchCriteria">SubstringMatchCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasubstringmatchcriteria"></a>
<a id="schema_SubstringMatchCriteria"></a>
<a id="tocSsubstringmatchcriteria"></a>
<a id="tocssubstringmatchcriteria"></a>

```json
{
  "matchCase": true,
  "text": "string"
}
```

A criteria that matches a specific string of text in a shape or table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchCase|boolean|false|none|Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.|
|text|string|false|none|The text to search for in the shape or table.|

<h2 id="tocS_Table">Table</h2>
<!-- backwards compatibility -->
<a id="schematable"></a>
<a id="schema_Table"></a>
<a id="tocStable"></a>
<a id="tocstable"></a>

```json
{
  "columns": 0,
  "horizontalBorderRows": [
    {
      "tableBorderCells": [
        {
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "tableBorderProperties": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "tableBorderFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        }
      ]
    }
  ],
  "rows": 0,
  "tableColumns": [
    {
      "columnWidth": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    }
  ],
  "tableRows": [
    {
      "rowHeight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "tableCells": [
        {
          "columnSpan": 0,
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "rowSpan": 0,
          "tableCellProperties": {
            "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
            "tableCellBackgroundFill": {
              "propertyState": "RENDERED",
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            }
          },
          "text": {
            "lists": {
              "property1": {
                "listId": "string",
                "nestingLevel": {
                  "property1": {
                    "bulletStyle": {
                      "backgroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                      "bold": true,
                      "fontFamily": "string",
                      "fontSize": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "foregroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "italic": true,
                      "link": {
                        "pageObjectId": "string",
                        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                        "slideIndex": 0,
                        "url": "string"
                      },
                      "smallCaps": true,
                      "strikethrough": true,
                      "underline": true,
                      "weightedFontFamily": {
                        "fontFamily": "string",
                        "weight": 0
                      }
                    }
                  },
                  "property2": {
                    "bulletStyle": {
                      "backgroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                      "bold": true,
                      "fontFamily": "string",
                      "fontSize": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "foregroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "italic": true,
                      "link": {
                        "pageObjectId": "string",
                        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                        "slideIndex": 0,
                        "url": "string"
                      },
                      "smallCaps": true,
                      "strikethrough": true,
                      "underline": true,
                      "weightedFontFamily": {
                        "fontFamily": "string",
                        "weight": 0
                      }
                    }
                  }
                }
              },
              "property2": {
                "listId": "string",
                "nestingLevel": {
                  "property1": {
                    "bulletStyle": {
                      "backgroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                      "bold": true,
                      "fontFamily": "string",
                      "fontSize": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "foregroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "italic": true,
                      "link": {
                        "pageObjectId": "string",
                        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                        "slideIndex": 0,
                        "url": "string"
                      },
                      "smallCaps": true,
                      "strikethrough": true,
                      "underline": true,
                      "weightedFontFamily": {
                        "fontFamily": "string",
                        "weight": 0
                      }
                    }
                  },
                  "property2": {
                    "bulletStyle": {
                      "backgroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                      "bold": true,
                      "fontFamily": "string",
                      "fontSize": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "foregroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "italic": true,
                      "link": {
                        "pageObjectId": "string",
                        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                        "slideIndex": 0,
                        "url": "string"
                      },
                      "smallCaps": true,
                      "strikethrough": true,
                      "underline": true,
                      "weightedFontFamily": {
                        "fontFamily": "string",
                        "weight": 0
                      }
                    }
                  }
                }
              }
            },
            "textElements": [
              {
                "autoText": {
                  "content": "string",
                  "style": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  },
                  "type": "TYPE_UNSPECIFIED"
                },
                "endIndex": 0,
                "paragraphMarker": {
                  "bullet": {
                    "bulletStyle": {
                      "backgroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                      "bold": true,
                      "fontFamily": "string",
                      "fontSize": {
                        "magnitude": 0,
                        "unit": "UNIT_UNSPECIFIED"
                      },
                      "foregroundColor": {
                        "opaqueColor": {
                          "rgbColor": {
                            "blue": 0,
                            "green": 0,
                            "red": 0
                          },
                          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                        }
                      },
                      "italic": true,
                      "link": {
                        "pageObjectId": "string",
                        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                        "slideIndex": 0,
                        "url": "string"
                      },
                      "smallCaps": true,
                      "strikethrough": true,
                      "underline": true,
                      "weightedFontFamily": {
                        "fontFamily": "string",
                        "weight": 0
                      }
                    },
                    "glyph": "string",
                    "listId": "string",
                    "nestingLevel": 0
                  },
                  "style": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "direction": "TEXT_DIRECTION_UNSPECIFIED",
                    "indentEnd": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "indentFirstLine": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "indentStart": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "lineSpacing": 0,
                    "spaceAbove": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "spaceBelow": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "spacingMode": "SPACING_MODE_UNSPECIFIED"
                  }
                },
                "startIndex": 0,
                "textRun": {
                  "content": "string",
                  "style": {
                    "backgroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                    "bold": true,
                    "fontFamily": "string",
                    "fontSize": {
                      "magnitude": 0,
                      "unit": "UNIT_UNSPECIFIED"
                    },
                    "foregroundColor": {
                      "opaqueColor": {
                        "rgbColor": {
                          "blue": 0,
                          "green": 0,
                          "red": 0
                        },
                        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                      }
                    },
                    "italic": true,
                    "link": {
                      "pageObjectId": "string",
                      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                      "slideIndex": 0,
                      "url": "string"
                    },
                    "smallCaps": true,
                    "strikethrough": true,
                    "underline": true,
                    "weightedFontFamily": {
                      "fontFamily": "string",
                      "weight": 0
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "tableRowProperties": {
        "minRowHeight": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      }
    }
  ],
  "verticalBorderRows": [
    {
      "tableBorderCells": [
        {
          "location": {
            "columnIndex": 0,
            "rowIndex": 0
          },
          "tableBorderProperties": {
            "dashStyle": "DASH_STYLE_UNSPECIFIED",
            "tableBorderFill": {
              "solidFill": {
                "alpha": 0,
                "color": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              }
            },
            "weight": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            }
          }
        }
      ]
    }
  ]
}
```

A PageElement kind representing a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|integer(int32)|false|none|Number of columns in the table.|
|horizontalBorderRows|[[TableBorderRow](#schematableborderrow)]|false|none|Properties of horizontal cell borders. A table's horizontal cell borders are represented as a grid. The grid has one more row than the number of rows in the table and the same number of columns as the table. For example, if the table is 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns.|
|rows|integer(int32)|false|none|Number of rows in the table.|
|tableColumns|[[TableColumnProperties](#schematablecolumnproperties)]|false|none|Properties of each column.|
|tableRows|[[TableRow](#schematablerow)]|false|none|Properties and contents of each row. Cells that span multiple rows are contained in only one of these rows and have a row_span greater than 1.|
|verticalBorderRows|[[TableBorderRow](#schematableborderrow)]|false|none|Properties of vertical cell borders. A table's vertical cell borders are represented as a grid. The grid has the same number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3 x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns.|

<h2 id="tocS_TableBorderCell">TableBorderCell</h2>
<!-- backwards compatibility -->
<a id="schematablebordercell"></a>
<a id="schema_TableBorderCell"></a>
<a id="tocStablebordercell"></a>
<a id="tocstablebordercell"></a>

```json
{
  "location": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "tableBorderProperties": {
    "dashStyle": "DASH_STYLE_UNSPECIFIED",
    "tableBorderFill": {
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    },
    "weight": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  }
}
```

The properties of each border cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[TableCellLocation](#schematablecelllocation)|false|none|The location of the border within the border table.|
|tableBorderProperties|[TableBorderProperties](#schematableborderproperties)|false|none|The border properties.|

<h2 id="tocS_TableBorderFill">TableBorderFill</h2>
<!-- backwards compatibility -->
<a id="schematableborderfill"></a>
<a id="schema_TableBorderFill"></a>
<a id="tocStableborderfill"></a>
<a id="tocstableborderfill"></a>

```json
{
  "solidFill": {
    "alpha": 0,
    "color": {
      "rgbColor": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
    }
  }
}
```

The fill of the border.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solidFill|[SolidFill](#schemasolidfill)|false|none|Solid fill.|

<h2 id="tocS_TableBorderProperties">TableBorderProperties</h2>
<!-- backwards compatibility -->
<a id="schematableborderproperties"></a>
<a id="schema_TableBorderProperties"></a>
<a id="tocStableborderproperties"></a>
<a id="tocstableborderproperties"></a>

```json
{
  "dashStyle": "DASH_STYLE_UNSPECIFIED",
  "tableBorderFill": {
    "solidFill": {
      "alpha": 0,
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    }
  },
  "weight": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  }
}
```

The border styling properties of the TableBorderCell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashStyle|string|false|none|The dash style of the border.|
|tableBorderFill|[TableBorderFill](#schematableborderfill)|false|none|The fill of the table border.|
|weight|[Dimension](#schemadimension)|false|none|The thickness of the border.|

#### Enumerated Values

|Property|Value|
|---|---|
|dashStyle|DASH_STYLE_UNSPECIFIED|
|dashStyle|SOLID|
|dashStyle|DOT|
|dashStyle|DASH|
|dashStyle|DASH_DOT|
|dashStyle|LONG_DASH|
|dashStyle|LONG_DASH_DOT|

<h2 id="tocS_TableBorderRow">TableBorderRow</h2>
<!-- backwards compatibility -->
<a id="schematableborderrow"></a>
<a id="schema_TableBorderRow"></a>
<a id="tocStableborderrow"></a>
<a id="tocstableborderrow"></a>

```json
{
  "tableBorderCells": [
    {
      "location": {
        "columnIndex": 0,
        "rowIndex": 0
      },
      "tableBorderProperties": {
        "dashStyle": "DASH_STYLE_UNSPECIFIED",
        "tableBorderFill": {
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          }
        },
        "weight": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        }
      }
    }
  ]
}
```

Contents of each border row in a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableBorderCells|[[TableBorderCell](#schematablebordercell)]|false|none|Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.|

<h2 id="tocS_TableCell">TableCell</h2>
<!-- backwards compatibility -->
<a id="schematablecell"></a>
<a id="schema_TableCell"></a>
<a id="tocStablecell"></a>
<a id="tocstablecell"></a>

```json
{
  "columnSpan": 0,
  "location": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "rowSpan": 0,
  "tableCellProperties": {
    "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
    "tableCellBackgroundFill": {
      "propertyState": "RENDERED",
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    }
  },
  "text": {
    "lists": {
      "property1": {
        "listId": "string",
        "nestingLevel": {
          "property1": {
            "bulletStyle": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            }
          },
          "property2": {
            "bulletStyle": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            }
          }
        }
      },
      "property2": {
        "listId": "string",
        "nestingLevel": {
          "property1": {
            "bulletStyle": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            }
          },
          "property2": {
            "bulletStyle": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            }
          }
        }
      }
    },
    "textElements": [
      {
        "autoText": {
          "content": "string",
          "style": {
            "backgroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
            "bold": true,
            "fontFamily": "string",
            "fontSize": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "foregroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "italic": true,
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "smallCaps": true,
            "strikethrough": true,
            "underline": true,
            "weightedFontFamily": {
              "fontFamily": "string",
              "weight": 0
            }
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "endIndex": 0,
        "paragraphMarker": {
          "bullet": {
            "bulletStyle": {
              "backgroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
              "bold": true,
              "fontFamily": "string",
              "fontSize": {
                "magnitude": 0,
                "unit": "UNIT_UNSPECIFIED"
              },
              "foregroundColor": {
                "opaqueColor": {
                  "rgbColor": {
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                }
              },
              "italic": true,
              "link": {
                "pageObjectId": "string",
                "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                "slideIndex": 0,
                "url": "string"
              },
              "smallCaps": true,
              "strikethrough": true,
              "underline": true,
              "weightedFontFamily": {
                "fontFamily": "string",
                "weight": 0
              }
            },
            "glyph": "string",
            "listId": "string",
            "nestingLevel": 0
          },
          "style": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "direction": "TEXT_DIRECTION_UNSPECIFIED",
            "indentEnd": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "indentFirstLine": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "indentStart": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "lineSpacing": 0,
            "spaceAbove": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "spaceBelow": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "spacingMode": "SPACING_MODE_UNSPECIFIED"
          }
        },
        "startIndex": 0,
        "textRun": {
          "content": "string",
          "style": {
            "backgroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
            "bold": true,
            "fontFamily": "string",
            "fontSize": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "foregroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "italic": true,
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "smallCaps": true,
            "strikethrough": true,
            "underline": true,
            "weightedFontFamily": {
              "fontFamily": "string",
              "weight": 0
            }
          }
        }
      }
    ]
  }
}
```

Properties and contents of each table cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnSpan|integer(int32)|false|none|Column span of the cell.|
|location|[TableCellLocation](#schematablecelllocation)|false|none|The location of the cell within the table.|
|rowSpan|integer(int32)|false|none|Row span of the cell.|
|tableCellProperties|[TableCellProperties](#schematablecellproperties)|false|none|The properties of the table cell.|
|text|[TextContent](#schematextcontent)|false|none|The text content of the cell.|

<h2 id="tocS_TableCellBackgroundFill">TableCellBackgroundFill</h2>
<!-- backwards compatibility -->
<a id="schematablecellbackgroundfill"></a>
<a id="schema_TableCellBackgroundFill"></a>
<a id="tocStablecellbackgroundfill"></a>
<a id="tocstablecellbackgroundfill"></a>

```json
{
  "propertyState": "RENDERED",
  "solidFill": {
    "alpha": 0,
    "color": {
      "rgbColor": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
    }
  }
}
```

The table cell background fill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyState|string|false|none|The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.|
|solidFill|[SolidFill](#schemasolidfill)|false|none|Solid color fill.|

#### Enumerated Values

|Property|Value|
|---|---|
|propertyState|RENDERED|
|propertyState|NOT_RENDERED|
|propertyState|INHERIT|

<h2 id="tocS_TableCellLocation">TableCellLocation</h2>
<!-- backwards compatibility -->
<a id="schematablecelllocation"></a>
<a id="schema_TableCellLocation"></a>
<a id="tocStablecelllocation"></a>
<a id="tocstablecelllocation"></a>

```json
{
  "columnIndex": 0,
  "rowIndex": 0
}
```

A location of a single table cell within a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnIndex|integer(int32)|false|none|The 0-based column index.|
|rowIndex|integer(int32)|false|none|The 0-based row index.|

<h2 id="tocS_TableCellProperties">TableCellProperties</h2>
<!-- backwards compatibility -->
<a id="schematablecellproperties"></a>
<a id="schema_TableCellProperties"></a>
<a id="tocStablecellproperties"></a>
<a id="tocstablecellproperties"></a>

```json
{
  "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
  "tableCellBackgroundFill": {
    "propertyState": "RENDERED",
    "solidFill": {
      "alpha": 0,
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    }
  }
}
```

The properties of the TableCell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentAlignment|string|false|none|The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor.|
|tableCellBackgroundFill|[TableCellBackgroundFill](#schematablecellbackgroundfill)|false|none|The background fill of the table cell. The default fill matches the fill for newly created table cells in the Slides editor.|

#### Enumerated Values

|Property|Value|
|---|---|
|contentAlignment|CONTENT_ALIGNMENT_UNSPECIFIED|
|contentAlignment|CONTENT_ALIGNMENT_UNSUPPORTED|
|contentAlignment|TOP|
|contentAlignment|MIDDLE|
|contentAlignment|BOTTOM|

<h2 id="tocS_TableColumnProperties">TableColumnProperties</h2>
<!-- backwards compatibility -->
<a id="schematablecolumnproperties"></a>
<a id="schema_TableColumnProperties"></a>
<a id="tocStablecolumnproperties"></a>
<a id="tocstablecolumnproperties"></a>

```json
{
  "columnWidth": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  }
}
```

Properties of each column in a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnWidth|[Dimension](#schemadimension)|false|none|Width of a column.|

<h2 id="tocS_TableRange">TableRange</h2>
<!-- backwards compatibility -->
<a id="schematablerange"></a>
<a id="schema_TableRange"></a>
<a id="tocStablerange"></a>
<a id="tocstablerange"></a>

```json
{
  "columnSpan": 0,
  "location": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "rowSpan": 0
}
```

A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnSpan|integer(int32)|false|none|The column span of the table range.|
|location|[TableCellLocation](#schematablecelllocation)|false|none|The starting location of the table range.|
|rowSpan|integer(int32)|false|none|The row span of the table range.|

<h2 id="tocS_TableRow">TableRow</h2>
<!-- backwards compatibility -->
<a id="schematablerow"></a>
<a id="schema_TableRow"></a>
<a id="tocStablerow"></a>
<a id="tocstablerow"></a>

```json
{
  "rowHeight": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "tableCells": [
    {
      "columnSpan": 0,
      "location": {
        "columnIndex": 0,
        "rowIndex": 0
      },
      "rowSpan": 0,
      "tableCellProperties": {
        "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
        "tableCellBackgroundFill": {
          "propertyState": "RENDERED",
          "solidFill": {
            "alpha": 0,
            "color": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          }
        }
      },
      "text": {
        "lists": {
          "property1": {
            "listId": "string",
            "nestingLevel": {
              "property1": {
                "bulletStyle": {
                  "backgroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                  "bold": true,
                  "fontFamily": "string",
                  "fontSize": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "foregroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "italic": true,
                  "link": {
                    "pageObjectId": "string",
                    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                    "slideIndex": 0,
                    "url": "string"
                  },
                  "smallCaps": true,
                  "strikethrough": true,
                  "underline": true,
                  "weightedFontFamily": {
                    "fontFamily": "string",
                    "weight": 0
                  }
                }
              },
              "property2": {
                "bulletStyle": {
                  "backgroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                  "bold": true,
                  "fontFamily": "string",
                  "fontSize": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "foregroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "italic": true,
                  "link": {
                    "pageObjectId": "string",
                    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                    "slideIndex": 0,
                    "url": "string"
                  },
                  "smallCaps": true,
                  "strikethrough": true,
                  "underline": true,
                  "weightedFontFamily": {
                    "fontFamily": "string",
                    "weight": 0
                  }
                }
              }
            }
          },
          "property2": {
            "listId": "string",
            "nestingLevel": {
              "property1": {
                "bulletStyle": {
                  "backgroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                  "bold": true,
                  "fontFamily": "string",
                  "fontSize": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "foregroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "italic": true,
                  "link": {
                    "pageObjectId": "string",
                    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                    "slideIndex": 0,
                    "url": "string"
                  },
                  "smallCaps": true,
                  "strikethrough": true,
                  "underline": true,
                  "weightedFontFamily": {
                    "fontFamily": "string",
                    "weight": 0
                  }
                }
              },
              "property2": {
                "bulletStyle": {
                  "backgroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                  "bold": true,
                  "fontFamily": "string",
                  "fontSize": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "foregroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "italic": true,
                  "link": {
                    "pageObjectId": "string",
                    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                    "slideIndex": 0,
                    "url": "string"
                  },
                  "smallCaps": true,
                  "strikethrough": true,
                  "underline": true,
                  "weightedFontFamily": {
                    "fontFamily": "string",
                    "weight": 0
                  }
                }
              }
            }
          }
        },
        "textElements": [
          {
            "autoText": {
              "content": "string",
              "style": {
                "backgroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                "bold": true,
                "fontFamily": "string",
                "fontSize": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "foregroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "italic": true,
                "link": {
                  "pageObjectId": "string",
                  "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                  "slideIndex": 0,
                  "url": "string"
                },
                "smallCaps": true,
                "strikethrough": true,
                "underline": true,
                "weightedFontFamily": {
                  "fontFamily": "string",
                  "weight": 0
                }
              },
              "type": "TYPE_UNSPECIFIED"
            },
            "endIndex": 0,
            "paragraphMarker": {
              "bullet": {
                "bulletStyle": {
                  "backgroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                  "bold": true,
                  "fontFamily": "string",
                  "fontSize": {
                    "magnitude": 0,
                    "unit": "UNIT_UNSPECIFIED"
                  },
                  "foregroundColor": {
                    "opaqueColor": {
                      "rgbColor": {
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                    }
                  },
                  "italic": true,
                  "link": {
                    "pageObjectId": "string",
                    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                    "slideIndex": 0,
                    "url": "string"
                  },
                  "smallCaps": true,
                  "strikethrough": true,
                  "underline": true,
                  "weightedFontFamily": {
                    "fontFamily": "string",
                    "weight": 0
                  }
                },
                "glyph": "string",
                "listId": "string",
                "nestingLevel": 0
              },
              "style": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "direction": "TEXT_DIRECTION_UNSPECIFIED",
                "indentEnd": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "indentFirstLine": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "indentStart": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "lineSpacing": 0,
                "spaceAbove": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "spaceBelow": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "spacingMode": "SPACING_MODE_UNSPECIFIED"
              }
            },
            "startIndex": 0,
            "textRun": {
              "content": "string",
              "style": {
                "backgroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
                "bold": true,
                "fontFamily": "string",
                "fontSize": {
                  "magnitude": 0,
                  "unit": "UNIT_UNSPECIFIED"
                },
                "foregroundColor": {
                  "opaqueColor": {
                    "rgbColor": {
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
                  }
                },
                "italic": true,
                "link": {
                  "pageObjectId": "string",
                  "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                  "slideIndex": 0,
                  "url": "string"
                },
                "smallCaps": true,
                "strikethrough": true,
                "underline": true,
                "weightedFontFamily": {
                  "fontFamily": "string",
                  "weight": 0
                }
              }
            }
          }
        ]
      }
    }
  ],
  "tableRowProperties": {
    "minRowHeight": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  }
}
```

Properties and contents of each row in a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowHeight|[Dimension](#schemadimension)|false|none|Height of a row.|
|tableCells|[[TableCell](#schematablecell)]|false|none|Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table.|
|tableRowProperties|[TableRowProperties](#schematablerowproperties)|false|none|Properties of the row.|

<h2 id="tocS_TableRowProperties">TableRowProperties</h2>
<!-- backwards compatibility -->
<a id="schematablerowproperties"></a>
<a id="schema_TableRowProperties"></a>
<a id="tocStablerowproperties"></a>
<a id="tocstablerowproperties"></a>

```json
{
  "minRowHeight": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  }
}
```

Properties of each row in a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minRowHeight|[Dimension](#schemadimension)|false|none|Minimum height of the row. The row will be rendered in the Slides editor at a height equal to or greater than this value in order to show all the text in the row's cell(s).|

<h2 id="tocS_TextContent">TextContent</h2>
<!-- backwards compatibility -->
<a id="schematextcontent"></a>
<a id="schema_TextContent"></a>
<a id="tocStextcontent"></a>
<a id="tocstextcontent"></a>

```json
{
  "lists": {
    "property1": {
      "listId": "string",
      "nestingLevel": {
        "property1": {
          "bulletStyle": {
            "backgroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
            "bold": true,
            "fontFamily": "string",
            "fontSize": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "foregroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "italic": true,
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "smallCaps": true,
            "strikethrough": true,
            "underline": true,
            "weightedFontFamily": {
              "fontFamily": "string",
              "weight": 0
            }
          }
        },
        "property2": {
          "bulletStyle": {
            "backgroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
            "bold": true,
            "fontFamily": "string",
            "fontSize": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "foregroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "italic": true,
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "smallCaps": true,
            "strikethrough": true,
            "underline": true,
            "weightedFontFamily": {
              "fontFamily": "string",
              "weight": 0
            }
          }
        }
      }
    },
    "property2": {
      "listId": "string",
      "nestingLevel": {
        "property1": {
          "bulletStyle": {
            "backgroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
            "bold": true,
            "fontFamily": "string",
            "fontSize": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "foregroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "italic": true,
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "smallCaps": true,
            "strikethrough": true,
            "underline": true,
            "weightedFontFamily": {
              "fontFamily": "string",
              "weight": 0
            }
          }
        },
        "property2": {
          "bulletStyle": {
            "backgroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
            "bold": true,
            "fontFamily": "string",
            "fontSize": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "foregroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "italic": true,
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "smallCaps": true,
            "strikethrough": true,
            "underline": true,
            "weightedFontFamily": {
              "fontFamily": "string",
              "weight": 0
            }
          }
        }
      }
    }
  },
  "textElements": [
    {
      "autoText": {
        "content": "string",
        "style": {
          "backgroundColor": {
            "opaqueColor": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
          "bold": true,
          "fontFamily": "string",
          "fontSize": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "foregroundColor": {
            "opaqueColor": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "italic": true,
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "smallCaps": true,
          "strikethrough": true,
          "underline": true,
          "weightedFontFamily": {
            "fontFamily": "string",
            "weight": 0
          }
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "endIndex": 0,
      "paragraphMarker": {
        "bullet": {
          "bulletStyle": {
            "backgroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
            "bold": true,
            "fontFamily": "string",
            "fontSize": {
              "magnitude": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "foregroundColor": {
              "opaqueColor": {
                "rgbColor": {
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
              }
            },
            "italic": true,
            "link": {
              "pageObjectId": "string",
              "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              "slideIndex": 0,
              "url": "string"
            },
            "smallCaps": true,
            "strikethrough": true,
            "underline": true,
            "weightedFontFamily": {
              "fontFamily": "string",
              "weight": 0
            }
          },
          "glyph": "string",
          "listId": "string",
          "nestingLevel": 0
        },
        "style": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "direction": "TEXT_DIRECTION_UNSPECIFIED",
          "indentEnd": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "indentFirstLine": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "indentStart": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "lineSpacing": 0,
          "spaceAbove": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "spaceBelow": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "spacingMode": "SPACING_MODE_UNSPECIFIED"
        }
      },
      "startIndex": 0,
      "textRun": {
        "content": "string",
        "style": {
          "backgroundColor": {
            "opaqueColor": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
          "bold": true,
          "fontFamily": "string",
          "fontSize": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "foregroundColor": {
            "opaqueColor": {
              "rgbColor": {
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
            }
          },
          "italic": true,
          "link": {
            "pageObjectId": "string",
            "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
            "slideIndex": 0,
            "url": "string"
          },
          "smallCaps": true,
          "strikethrough": true,
          "underline": true,
          "weightedFontFamily": {
            "fontFamily": "string",
            "weight": 0
          }
        }
      }
    }
  ]
}
```

The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|object|false|none|The bulleted lists contained in this text, keyed by list ID.|
|textElements|[[TextElement](#schematextelement)]|false|none|The text contents broken down into its component parts, including styling information. This property is read-only.|

<h2 id="tocS_TextElement">TextElement</h2>
<!-- backwards compatibility -->
<a id="schematextelement"></a>
<a id="schema_TextElement"></a>
<a id="tocStextelement"></a>
<a id="tocstextelement"></a>

```json
{
  "autoText": {
    "content": "string",
    "style": {
      "backgroundColor": {
        "opaqueColor": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
      "bold": true,
      "fontFamily": "string",
      "fontSize": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "foregroundColor": {
        "opaqueColor": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "italic": true,
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "smallCaps": true,
      "strikethrough": true,
      "underline": true,
      "weightedFontFamily": {
        "fontFamily": "string",
        "weight": 0
      }
    },
    "type": "TYPE_UNSPECIFIED"
  },
  "endIndex": 0,
  "paragraphMarker": {
    "bullet": {
      "bulletStyle": {
        "backgroundColor": {
          "opaqueColor": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
        "bold": true,
        "fontFamily": "string",
        "fontSize": {
          "magnitude": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "foregroundColor": {
          "opaqueColor": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        },
        "italic": true,
        "link": {
          "pageObjectId": "string",
          "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
          "slideIndex": 0,
          "url": "string"
        },
        "smallCaps": true,
        "strikethrough": true,
        "underline": true,
        "weightedFontFamily": {
          "fontFamily": "string",
          "weight": 0
        }
      },
      "glyph": "string",
      "listId": "string",
      "nestingLevel": 0
    },
    "style": {
      "alignment": "ALIGNMENT_UNSPECIFIED",
      "direction": "TEXT_DIRECTION_UNSPECIFIED",
      "indentEnd": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "indentFirstLine": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "indentStart": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "lineSpacing": 0,
      "spaceAbove": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "spaceBelow": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "spacingMode": "SPACING_MODE_UNSPECIFIED"
    }
  },
  "startIndex": 0,
  "textRun": {
    "content": "string",
    "style": {
      "backgroundColor": {
        "opaqueColor": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
      "bold": true,
      "fontFamily": "string",
      "fontSize": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "foregroundColor": {
        "opaqueColor": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "italic": true,
      "link": {
        "pageObjectId": "string",
        "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
        "slideIndex": 0,
        "url": "string"
      },
      "smallCaps": true,
      "strikethrough": true,
      "underline": true,
      "weightedFontFamily": {
        "fontFamily": "string",
        "weight": 0
      }
    }
  }
}
```

A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoText|[AutoText](#schemaautotext)|false|none|A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.|
|endIndex|integer(int32)|false|none|The zero-based end index of this text element, exclusive, in Unicode code units.|
|paragraphMarker|[ParagraphMarker](#schemaparagraphmarker)|false|none|A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.|
|startIndex|integer(int32)|false|none|The zero-based start index of this text element, in Unicode code units.|
|textRun|[TextRun](#schematextrun)|false|none|A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.|

<h2 id="tocS_TextRun">TextRun</h2>
<!-- backwards compatibility -->
<a id="schematextrun"></a>
<a id="schema_TextRun"></a>
<a id="tocStextrun"></a>
<a id="tocstextrun"></a>

```json
{
  "content": "string",
  "style": {
    "backgroundColor": {
      "opaqueColor": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
    "bold": true,
    "fontFamily": "string",
    "fontSize": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "foregroundColor": {
      "opaqueColor": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "italic": true,
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "smallCaps": true,
    "strikethrough": true,
    "underline": true,
    "weightedFontFamily": {
      "fontFamily": "string",
      "weight": 0
    }
  }
}
```

A TextElement kind that represents a run of text that all has the same styling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|The text of this run.|
|style|[TextStyle](#schematextstyle)|false|none|The styling applied to this run.|

<h2 id="tocS_TextStyle">TextStyle</h2>
<!-- backwards compatibility -->
<a id="schematextstyle"></a>
<a id="schema_TextStyle"></a>
<a id="tocStextstyle"></a>
<a id="tocstextstyle"></a>

```json
{
  "backgroundColor": {
    "opaqueColor": {
      "rgbColor": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
    }
  },
  "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
  "bold": true,
  "fontFamily": "string",
  "fontSize": {
    "magnitude": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "foregroundColor": {
    "opaqueColor": {
      "rgbColor": {
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
    }
  },
  "italic": true,
  "link": {
    "pageObjectId": "string",
    "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
    "slideIndex": 0,
    "url": "string"
  },
  "smallCaps": true,
  "strikethrough": true,
  "underline": true,
  "weightedFontFamily": {
    "fontFamily": "string",
    "weight": 0
  }
}
```

Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|[OptionalColor](#schemaoptionalcolor)|false|none|The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.|
|baselineOffset|string|false|none|The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.|
|bold|boolean|false|none|Whether or not the text is rendered as bold.|
|fontFamily|string|false|none|The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.|
|fontSize|[Dimension](#schemadimension)|false|none|The size of the text's font. When read, the `font_size` will specified in points.|
|foregroundColor|[OptionalColor](#schemaoptionalcolor)|false|none|The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.|
|italic|boolean|false|none|Whether or not the text is italicized.|
|link|[Link](#schemalink)|false|none|The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.|
|smallCaps|boolean|false|none|Whether or not the text is in small capital letters.|
|strikethrough|boolean|false|none|Whether or not the text is struck through.|
|underline|boolean|false|none|Whether or not the text is underlined.|
|weightedFontFamily|[WeightedFontFamily](#schemaweightedfontfamily)|false|none|The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.|

#### Enumerated Values

|Property|Value|
|---|---|
|baselineOffset|BASELINE_OFFSET_UNSPECIFIED|
|baselineOffset|NONE|
|baselineOffset|SUPERSCRIPT|
|baselineOffset|SUBSCRIPT|

<h2 id="tocS_ThemeColorPair">ThemeColorPair</h2>
<!-- backwards compatibility -->
<a id="schemathemecolorpair"></a>
<a id="schema_ThemeColorPair"></a>
<a id="tocSthemecolorpair"></a>
<a id="tocsthemecolorpair"></a>

```json
{
  "color": {
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "type": "THEME_COLOR_TYPE_UNSPECIFIED"
}
```

A pair mapping a theme color type to the concrete color it represents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|[RgbColor](#schemargbcolor)|false|none|The concrete color corresponding to the theme color type above.|
|type|string|false|none|The type of the theme color.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|THEME_COLOR_TYPE_UNSPECIFIED|
|type|DARK1|
|type|LIGHT1|
|type|DARK2|
|type|LIGHT2|
|type|ACCENT1|
|type|ACCENT2|
|type|ACCENT3|
|type|ACCENT4|
|type|ACCENT5|
|type|ACCENT6|
|type|HYPERLINK|
|type|FOLLOWED_HYPERLINK|
|type|TEXT1|
|type|BACKGROUND1|
|type|TEXT2|
|type|BACKGROUND2|

<h2 id="tocS_Thumbnail">Thumbnail</h2>
<!-- backwards compatibility -->
<a id="schemathumbnail"></a>
<a id="schema_Thumbnail"></a>
<a id="tocSthumbnail"></a>
<a id="tocsthumbnail"></a>

```json
{
  "contentUrl": "string",
  "height": 0,
  "width": 0
}
```

The thumbnail of a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentUrl|string|false|none|The content URL of the thumbnail image. The URL to the image has a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. The mime type of the thumbnail image is the same as specified in the `GetPageThumbnailRequest`.|
|height|integer(int32)|false|none|The positive height in pixels of the thumbnail image.|
|width|integer(int32)|false|none|The positive width in pixels of the thumbnail image.|

<h2 id="tocS_UngroupObjectsRequest">UngroupObjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaungroupobjectsrequest"></a>
<a id="schema_UngroupObjectsRequest"></a>
<a id="tocSungroupobjectsrequest"></a>
<a id="tocsungroupobjectsrequest"></a>

```json
{
  "objectIds": [
    "string"
  ]
}
```

Ungroups objects, such as groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectIds|[string]|false|none|The object IDs of the objects to ungroup. Only groups that are not inside other groups can be ungrouped. All the groups should be on the same page. The group itself is deleted. The visual sizes and positions of all the children are preserved.|

<h2 id="tocS_UnmergeTableCellsRequest">UnmergeTableCellsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunmergetablecellsrequest"></a>
<a id="schema_UnmergeTableCellsRequest"></a>
<a id="tocSunmergetablecellsrequest"></a>
<a id="tocsunmergetablecellsrequest"></a>

```json
{
  "objectId": "string",
  "tableRange": {
    "columnSpan": 0,
    "location": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "rowSpan": 0
  }
}
```

Unmerges cells in a Table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|false|none|The object ID of the table.|
|tableRange|[TableRange](#schematablerange)|false|none|The table range specifying which cells of the table to unmerge. All merged cells in this range will be unmerged, and cells that are already unmerged will not be affected. If the range has no merged cells, the request will do nothing. If there is text in any of the merged cells, the text will remain in the upper-left ("head") cell of the resulting block of unmerged cells.|

<h2 id="tocS_UpdateImagePropertiesRequest">UpdateImagePropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateimagepropertiesrequest"></a>
<a id="schema_UpdateImagePropertiesRequest"></a>
<a id="tocSupdateimagepropertiesrequest"></a>
<a id="tocsupdateimagepropertiesrequest"></a>

```json
{
  "fields": "string",
  "imageProperties": {
    "brightness": 0,
    "contrast": 0,
    "cropProperties": {
      "angle": 0,
      "bottomOffset": 0,
      "leftOffset": 0,
      "rightOffset": 0,
      "topOffset": 0
    },
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "outline": {
      "dashStyle": "DASH_STYLE_UNSPECIFIED",
      "outlineFill": {
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      },
      "propertyState": "RENDERED",
      "weight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "recolor": {
      "name": "NONE",
      "recolorStops": [
        {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          },
          "position": 0
        }
      ]
    },
    "shadow": {
      "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
      "alpha": 0,
      "blurRadius": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      },
      "propertyState": "RENDERED",
      "rotateWithShape": true,
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "type": "SHADOW_TYPE_UNSPECIFIED"
    },
    "transparency": 0
  },
  "objectId": "string"
}
```

Update the properties of an Image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `imageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the image outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.|
|imageProperties|[ImageProperties](#schemaimageproperties)|false|none|The image properties to update.|
|objectId|string|false|none|The object ID of the image the updates are applied to.|

<h2 id="tocS_UpdateLineCategoryRequest">UpdateLineCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelinecategoryrequest"></a>
<a id="schema_UpdateLineCategoryRequest"></a>
<a id="tocSupdatelinecategoryrequest"></a>
<a id="tocsupdatelinecategoryrequest"></a>

```json
{
  "lineCategory": "LINE_CATEGORY_UNSPECIFIED",
  "objectId": "string"
}
```

Updates the category of a line.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineCategory|string|false|none|The line category to update to. The exact line type is determined based on the category to update to and how it's routed to connect to other page elements.|
|objectId|string|false|none|The object ID of the line the update is applied to. Only a line with a category indicating it is a "connector" can be updated. The line may be rerouted after updating its category.|

#### Enumerated Values

|Property|Value|
|---|---|
|lineCategory|LINE_CATEGORY_UNSPECIFIED|
|lineCategory|STRAIGHT|
|lineCategory|BENT|
|lineCategory|CURVED|

<h2 id="tocS_UpdateLinePropertiesRequest">UpdateLinePropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelinepropertiesrequest"></a>
<a id="schema_UpdateLinePropertiesRequest"></a>
<a id="tocSupdatelinepropertiesrequest"></a>
<a id="tocsupdatelinepropertiesrequest"></a>

```json
{
  "fields": "string",
  "lineProperties": {
    "dashStyle": "DASH_STYLE_UNSPECIFIED",
    "endArrow": "ARROW_STYLE_UNSPECIFIED",
    "endConnection": {
      "connectedObjectId": "string",
      "connectionSiteIndex": 0
    },
    "lineFill": {
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    },
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "startArrow": "ARROW_STYLE_UNSPECIFIED",
    "startConnection": {
      "connectedObjectId": "string",
      "connectionSiteIndex": 0
    },
    "weight": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "objectId": "string"
}
```

Updates the properties of a Line.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `lineProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the line solid fill color, set `fields` to `"lineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.|
|lineProperties|[LineProperties](#schemalineproperties)|false|none|The line properties to update.|
|objectId|string|false|none|The object ID of the line the update is applied to.|

<h2 id="tocS_UpdatePageElementAltTextRequest">UpdatePageElementAltTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepageelementalttextrequest"></a>
<a id="schema_UpdatePageElementAltTextRequest"></a>
<a id="tocSupdatepageelementalttextrequest"></a>
<a id="tocsupdatepageelementalttextrequest"></a>

```json
{
  "description": "string",
  "objectId": "string",
  "title": "string"
}
```

Updates the alt text title and/or description of a page element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The updated alt text description of the page element. If unset the existing value will be maintained. The description is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element.|
|objectId|string|false|none|The object ID of the page element the updates are applied to.|
|title|string|false|none|The updated alt text title of the page element. If unset the existing value will be maintained. The title is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element.|

<h2 id="tocS_UpdatePageElementTransformRequest">UpdatePageElementTransformRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepageelementtransformrequest"></a>
<a id="schema_UpdatePageElementTransformRequest"></a>
<a id="tocSupdatepageelementtransformrequest"></a>
<a id="tocsupdatepageelementtransformrequest"></a>

```json
{
  "applyMode": "APPLY_MODE_UNSPECIFIED",
  "objectId": "string",
  "transform": {
    "scaleX": 0,
    "scaleY": 0,
    "shearX": 0,
    "shearY": 0,
    "translateX": 0,
    "translateY": 0,
    "unit": "UNIT_UNSPECIFIED"
  }
}
```

Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applyMode|string|false|none|The apply mode of the transform update.|
|objectId|string|false|none|The object ID of the page element to update.|
|transform|[AffineTransform](#schemaaffinetransform)|false|none|The input transform matrix used to update the page element.|

#### Enumerated Values

|Property|Value|
|---|---|
|applyMode|APPLY_MODE_UNSPECIFIED|
|applyMode|RELATIVE|
|applyMode|ABSOLUTE|

<h2 id="tocS_UpdatePageElementsZOrderRequest">UpdatePageElementsZOrderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepageelementszorderrequest"></a>
<a id="schema_UpdatePageElementsZOrderRequest"></a>
<a id="tocSupdatepageelementszorderrequest"></a>
<a id="tocsupdatepageelementszorderrequest"></a>

```json
{
  "operation": "Z_ORDER_OPERATION_UNSPECIFIED",
  "pageElementObjectIds": [
    "string"
  ]
}
```

Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|false|none|The Z-order operation to apply on the page elements. When applying the operation on multiple page elements, the relative Z-orders within these page elements before the operation is maintained.|
|pageElementObjectIds|[string]|false|none|The object IDs of the page elements to update. All the page elements must be on the same page and must not be grouped.|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|Z_ORDER_OPERATION_UNSPECIFIED|
|operation|BRING_TO_FRONT|
|operation|BRING_FORWARD|
|operation|SEND_BACKWARD|
|operation|SEND_TO_BACK|

<h2 id="tocS_UpdatePagePropertiesRequest">UpdatePagePropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepagepropertiesrequest"></a>
<a id="schema_UpdatePagePropertiesRequest"></a>
<a id="tocSupdatepagepropertiesrequest"></a>
<a id="tocsupdatepagepropertiesrequest"></a>

```json
{
  "fields": "string",
  "objectId": "string",
  "pageProperties": {
    "colorScheme": {
      "colors": [
        {
          "color": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "type": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      ]
    },
    "pageBackgroundFill": {
      "propertyState": "RENDERED",
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      },
      "stretchedPictureFill": {
        "contentUrl": "string",
        "size": {
          "height": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "width": {
            "magnitude": 0,
            "unit": "UNIT_UNSPECIFIED"
          }
        }
      }
    }
  }
}
```

Updates the properties of a Page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `pageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the page background solid fill color, set `fields` to `"pageBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.|
|objectId|string|false|none|The object ID of the page the update is applied to.|
|pageProperties|[PageProperties](#schemapageproperties)|false|none|The page properties to update.|

<h2 id="tocS_UpdateParagraphStyleRequest">UpdateParagraphStyleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparagraphstylerequest"></a>
<a id="schema_UpdateParagraphStyleRequest"></a>
<a id="tocSupdateparagraphstylerequest"></a>
<a id="tocsupdateparagraphstylerequest"></a>

```json
{
  "cellLocation": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "fields": "string",
  "objectId": "string",
  "style": {
    "alignment": "ALIGNMENT_UNSPECIFIED",
    "direction": "TEXT_DIRECTION_UNSPECIFIED",
    "indentEnd": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "indentFirstLine": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "indentStart": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "lineSpacing": 0,
    "spaceAbove": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "spaceBelow": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "spacingMode": "SPACING_MODE_UNSPECIFIED"
  },
  "textRange": {
    "endIndex": 0,
    "startIndex": 0,
    "type": "RANGE_TYPE_UNSPECIFIED"
  }
}
```

Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellLocation|[TableCellLocation](#schematablecelllocation)|false|none|The location of the cell in the table containing the paragraph(s) to style. If `object_id` refers to a table, `cell_location` must have a value. Otherwise, it must not.|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the paragraph alignment, set `fields` to `"alignment"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.|
|objectId|string|false|none|The object ID of the shape or table with the text to be styled.|
|style|[ParagraphStyle](#schemaparagraphstyle)|false|none|The paragraph's style.|
|textRange|[Range](#schemarange)|false|none|The range of text containing the paragraph(s) to style.|

<h2 id="tocS_UpdateShapePropertiesRequest">UpdateShapePropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateshapepropertiesrequest"></a>
<a id="schema_UpdateShapePropertiesRequest"></a>
<a id="tocSupdateshapepropertiesrequest"></a>
<a id="tocsupdateshapepropertiesrequest"></a>

```json
{
  "fields": "string",
  "objectId": "string",
  "shapeProperties": {
    "autofit": {
      "autofitType": "AUTOFIT_TYPE_UNSPECIFIED",
      "fontScale": 0,
      "lineSpacingReduction": 0
    },
    "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "outline": {
      "dashStyle": "DASH_STYLE_UNSPECIFIED",
      "outlineFill": {
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      },
      "propertyState": "RENDERED",
      "weight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "shadow": {
      "alignment": "RECTANGLE_POSITION_UNSPECIFIED",
      "alpha": 0,
      "blurRadius": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "color": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      },
      "propertyState": "RENDERED",
      "rotateWithShape": true,
      "transform": {
        "scaleX": 0,
        "scaleY": 0,
        "shearX": 0,
        "shearY": 0,
        "translateX": 0,
        "translateY": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "type": "SHADOW_TYPE_UNSPECIFIED"
    },
    "shapeBackgroundFill": {
      "propertyState": "RENDERED",
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    }
  }
}
```

Update the properties of a Shape.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `shapeProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the shape background solid fill color, set `fields` to `"shapeBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.|
|objectId|string|false|none|The object ID of the shape the updates are applied to.|
|shapeProperties|[ShapeProperties](#schemashapeproperties)|false|none|The shape properties to update.|

<h2 id="tocS_UpdateSlidePropertiesRequest">UpdateSlidePropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateslidepropertiesrequest"></a>
<a id="schema_UpdateSlidePropertiesRequest"></a>
<a id="tocSupdateslidepropertiesrequest"></a>
<a id="tocsupdateslidepropertiesrequest"></a>

```json
{
  "fields": "string",
  "objectId": "string",
  "slideProperties": {
    "isSkipped": true,
    "layoutObjectId": "string",
    "masterObjectId": "string",
    "notesPage": {}
  }
}
```

Updates the properties of a Slide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root 'slideProperties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update whether a slide is skipped, set `fields` to `"isSkipped"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.|
|objectId|string|false|none|The object ID of the slide the update is applied to.|
|slideProperties|[SlideProperties](#schemaslideproperties)|false|none|The slide properties to update.|

<h2 id="tocS_UpdateSlidesPositionRequest">UpdateSlidesPositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateslidespositionrequest"></a>
<a id="schema_UpdateSlidesPositionRequest"></a>
<a id="tocSupdateslidespositionrequest"></a>
<a id="tocsupdateslidespositionrequest"></a>

```json
{
  "insertionIndex": 0,
  "slideObjectIds": [
    "string"
  ]
}
```

Updates the position of slides in the presentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insertionIndex|integer(int32)|false|none|The index where the slides should be inserted, based on the slide arrangement before the move takes place. Must be between zero and the number of slides in the presentation, inclusive.|
|slideObjectIds|[string]|false|none|The IDs of the slides in the presentation that should be moved. The slides in this list must be in existing presentation order, without duplicates.|

<h2 id="tocS_UpdateTableBorderPropertiesRequest">UpdateTableBorderPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetableborderpropertiesrequest"></a>
<a id="schema_UpdateTableBorderPropertiesRequest"></a>
<a id="tocSupdatetableborderpropertiesrequest"></a>
<a id="tocsupdatetableborderpropertiesrequest"></a>

```json
{
  "borderPosition": "ALL",
  "fields": "string",
  "objectId": "string",
  "tableBorderProperties": {
    "dashStyle": "DASH_STYLE_UNSPECIFIED",
    "tableBorderFill": {
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    },
    "weight": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "tableRange": {
    "columnSpan": 0,
    "location": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "rowSpan": 0
  }
}
```

Updates the properties of the table borders in a Table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|borderPosition|string|false|none|The border position in the table range the updates should apply to. If a border position is not specified, the updates will apply to all borders in the table range.|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `tableBorderProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table border solid fill color, set `fields` to `"tableBorderFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.|
|objectId|string|false|none|The object ID of the table.|
|tableBorderProperties|[TableBorderProperties](#schematableborderproperties)|false|none|The table border properties to update.|
|tableRange|[TableRange](#schematablerange)|false|none|The table range representing the subset of the table to which the updates are applied. If a table range is not specified, the updates will apply to the entire table.|

#### Enumerated Values

|Property|Value|
|---|---|
|borderPosition|ALL|
|borderPosition|BOTTOM|
|borderPosition|INNER|
|borderPosition|INNER_HORIZONTAL|
|borderPosition|INNER_VERTICAL|
|borderPosition|LEFT|
|borderPosition|OUTER|
|borderPosition|RIGHT|
|borderPosition|TOP|

<h2 id="tocS_UpdateTableCellPropertiesRequest">UpdateTableCellPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetablecellpropertiesrequest"></a>
<a id="schema_UpdateTableCellPropertiesRequest"></a>
<a id="tocSupdatetablecellpropertiesrequest"></a>
<a id="tocsupdatetablecellpropertiesrequest"></a>

```json
{
  "fields": "string",
  "objectId": "string",
  "tableCellProperties": {
    "contentAlignment": "CONTENT_ALIGNMENT_UNSPECIFIED",
    "tableCellBackgroundFill": {
      "propertyState": "RENDERED",
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    }
  },
  "tableRange": {
    "columnSpan": 0,
    "location": {
      "columnIndex": 0,
      "rowIndex": 0
    },
    "rowSpan": 0
  }
}
```

Update the properties of a TableCell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `tableCellProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table cell background solid fill color, set `fields` to `"tableCellBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.|
|objectId|string|false|none|The object ID of the table.|
|tableCellProperties|[TableCellProperties](#schematablecellproperties)|false|none|The table cell properties to update.|
|tableRange|[TableRange](#schematablerange)|false|none|The table range representing the subset of the table to which the updates are applied. If a table range is not specified, the updates will apply to the entire table.|

<h2 id="tocS_UpdateTableColumnPropertiesRequest">UpdateTableColumnPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetablecolumnpropertiesrequest"></a>
<a id="schema_UpdateTableColumnPropertiesRequest"></a>
<a id="tocSupdatetablecolumnpropertiesrequest"></a>
<a id="tocsupdatetablecolumnpropertiesrequest"></a>

```json
{
  "columnIndices": [
    0
  ],
  "fields": "string",
  "objectId": "string",
  "tableColumnProperties": {
    "columnWidth": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  }
}
```

Updates the properties of a Table column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnIndices|[integer(int32)]|false|none|The list of zero-based indices specifying which columns to update. If no indices are provided, all columns in the table will be updated.|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"column_width"`. If '"column_width"' is included in the field mask but the property is left unset, the column width will default to 406,400 EMU (32 points).|
|objectId|string|false|none|The object ID of the table.|
|tableColumnProperties|[TableColumnProperties](#schematablecolumnproperties)|false|none|The table column properties to update. If the value of `table_column_properties#column_width` in the request is less than 406,400 EMU (32 points), a 400 bad request error is returned.|

<h2 id="tocS_UpdateTableRowPropertiesRequest">UpdateTableRowPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetablerowpropertiesrequest"></a>
<a id="schema_UpdateTableRowPropertiesRequest"></a>
<a id="tocSupdatetablerowpropertiesrequest"></a>
<a id="tocsupdatetablerowpropertiesrequest"></a>

```json
{
  "fields": "string",
  "objectId": "string",
  "rowIndices": [
    0
  ],
  "tableRowProperties": {
    "minRowHeight": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  }
}
```

Updates the properties of a Table row.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `tableRowProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`. If '"min_row_height"' is included in the field mask but the property is left unset, the minimum row height will default to 0.|
|objectId|string|false|none|The object ID of the table.|
|rowIndices|[integer(int32)]|false|none|The list of zero-based indices specifying which rows to update. If no indices are provided, all rows in the table will be updated.|
|tableRowProperties|[TableRowProperties](#schematablerowproperties)|false|none|The table row properties to update.|

<h2 id="tocS_UpdateTextStyleRequest">UpdateTextStyleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetextstylerequest"></a>
<a id="schema_UpdateTextStyleRequest"></a>
<a id="tocSupdatetextstylerequest"></a>
<a id="tocsupdatetextstylerequest"></a>

```json
{
  "cellLocation": {
    "columnIndex": 0,
    "rowIndex": 0
  },
  "fields": "string",
  "objectId": "string",
  "style": {
    "backgroundColor": {
      "opaqueColor": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "baselineOffset": "BASELINE_OFFSET_UNSPECIFIED",
    "bold": true,
    "fontFamily": "string",
    "fontSize": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "foregroundColor": {
      "opaqueColor": {
        "rgbColor": {
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
      }
    },
    "italic": true,
    "link": {
      "pageObjectId": "string",
      "relativeLink": "RELATIVE_SLIDE_LINK_UNSPECIFIED",
      "slideIndex": 0,
      "url": "string"
    },
    "smallCaps": true,
    "strikethrough": true,
    "underline": true,
    "weightedFontFamily": {
      "fontFamily": "string",
      "weight": 0
    }
  },
  "textRange": {
    "endIndex": 0,
    "startIndex": 0,
    "type": "RANGE_TYPE_UNSPECIFIED"
  }
}
```

Update the styling of text in a Shape or Table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellLocation|[TableCellLocation](#schematablecelllocation)|false|none|The location of the cell in the table containing the text to style. If `object_id` refers to a table, `cell_location` must have a value. Otherwise, it must not.|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.|
|objectId|string|false|none|The object ID of the shape or table with the text to be styled.|
|style|[TextStyle](#schematextstyle)|false|none|The style(s) to set on the text. If the value for a particular style matches that of the parent, that style will be set to inherit. Certain text style changes may cause other changes meant to mirror the behavior of the Slides editor. See the documentation of TextStyle for more information.|
|textRange|[Range](#schemarange)|false|none|The range of text to style. The range may be extended to include adjacent newlines. If the range fully contains a paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style.|

<h2 id="tocS_UpdateVideoPropertiesRequest">UpdateVideoPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevideopropertiesrequest"></a>
<a id="schema_UpdateVideoPropertiesRequest"></a>
<a id="tocSupdatevideopropertiesrequest"></a>
<a id="tocsupdatevideopropertiesrequest"></a>

```json
{
  "fields": "string",
  "objectId": "string",
  "videoProperties": {
    "autoPlay": true,
    "end": 0,
    "mute": true,
    "outline": {
      "dashStyle": "DASH_STYLE_UNSPECIFIED",
      "outlineFill": {
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      },
      "propertyState": "RENDERED",
      "weight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "start": 0
  }
}
```

Update the properties of a Video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `videoProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the video outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.|
|objectId|string|false|none|The object ID of the video the updates are applied to.|
|videoProperties|[VideoProperties](#schemavideoproperties)|false|none|The video properties to update.|

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "id": "string",
  "source": "SOURCE_UNSPECIFIED",
  "url": "string",
  "videoProperties": {
    "autoPlay": true,
    "end": 0,
    "mute": true,
    "outline": {
      "dashStyle": "DASH_STYLE_UNSPECIFIED",
      "outlineFill": {
        "solidFill": {
          "alpha": 0,
          "color": {
            "rgbColor": {
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
          }
        }
      },
      "propertyState": "RENDERED",
      "weight": {
        "magnitude": 0,
        "unit": "UNIT_UNSPECIFIED"
      }
    },
    "start": 0
  }
}
```

A PageElement kind representing a video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The video source's unique identifier for this video.|
|source|string|false|none|The video source.|
|url|string|false|none|An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change.|
|videoProperties|[VideoProperties](#schemavideoproperties)|false|none|The properties of the video.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|SOURCE_UNSPECIFIED|
|source|YOUTUBE|
|source|DRIVE|

<h2 id="tocS_VideoProperties">VideoProperties</h2>
<!-- backwards compatibility -->
<a id="schemavideoproperties"></a>
<a id="schema_VideoProperties"></a>
<a id="tocSvideoproperties"></a>
<a id="tocsvideoproperties"></a>

```json
{
  "autoPlay": true,
  "end": 0,
  "mute": true,
  "outline": {
    "dashStyle": "DASH_STYLE_UNSPECIFIED",
    "outlineFill": {
      "solidFill": {
        "alpha": 0,
        "color": {
          "rgbColor": {
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "themeColor": "THEME_COLOR_TYPE_UNSPECIFIED"
        }
      }
    },
    "propertyState": "RENDERED",
    "weight": {
      "magnitude": 0,
      "unit": "UNIT_UNSPECIFIED"
    }
  },
  "start": 0
}
```

The properties of the Video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoPlay|boolean|false|none|Whether to enable video autoplay when the page is displayed in present mode. Defaults to false.|
|end|integer(uint32)|false|none|The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played until its end.|
|mute|boolean|false|none|Whether to mute the audio during video playback. Defaults to false.|
|outline|[Outline](#schemaoutline)|false|none|The outline of the video. The default outline matches the defaults for new videos created in the Slides editor.|
|start|integer(uint32)|false|none|The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning.|

<h2 id="tocS_WeightedFontFamily">WeightedFontFamily</h2>
<!-- backwards compatibility -->
<a id="schemaweightedfontfamily"></a>
<a id="schema_WeightedFontFamily"></a>
<a id="tocSweightedfontfamily"></a>
<a id="tocsweightedfontfamily"></a>

```json
{
  "fontFamily": "string",
  "weight": 0
}
```

Represents a font family and weight used to style a TextRun.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fontFamily|string|false|none|The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.|
|weight|integer(int32)|false|none|The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").|

<h2 id="tocS_WordArt">WordArt</h2>
<!-- backwards compatibility -->
<a id="schemawordart"></a>
<a id="schema_WordArt"></a>
<a id="tocSwordart"></a>
<a id="tocswordart"></a>

```json
{
  "renderedText": "string"
}
```

A PageElement kind representing word art.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|renderedText|string|false|none|The text rendered as word art.|

<h2 id="tocS_WriteControl">WriteControl</h2>
<!-- backwards compatibility -->
<a id="schemawritecontrol"></a>
<a id="schema_WriteControl"></a>
<a id="tocSwritecontrol"></a>
<a id="tocswritecontrol"></a>

```json
{
  "requiredRevisionId": "string"
}
```

Provides control over how write requests are executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requiredRevisionId|string|false|none|The revision ID of the presentation required for the write request. If specified and the required revision ID doesn't match the presentation's current revision ID, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied.|
