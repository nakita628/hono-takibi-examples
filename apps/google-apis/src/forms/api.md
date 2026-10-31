<h1 id="google-forms-api">Google Forms API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Reads and writes Google Forms and responses.

Base URLs:

* <a href="https://forms.googleapis.com/">https://forms.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/forms/api">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive|See, edit, create, and delete all of your Google Drive files|
|https://www.googleapis.com/auth/drive.file|See, edit, create, and delete only the specific Google Drive files you use with this app|
|https://www.googleapis.com/auth/drive.readonly|See and download all your Google Drive files|
|https://www.googleapis.com/auth/forms.body|See, edit, create, and delete all your Google Forms forms|
|https://www.googleapis.com/auth/forms.body.readonly|See all your Google Forms forms|
|https://www.googleapis.com/auth/forms.responses.readonly|See all responses to your Google Forms forms|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive|See, edit, create, and delete all of your Google Drive files|
|https://www.googleapis.com/auth/drive.file|See, edit, create, and delete only the specific Google Drive files you use with this app|
|https://www.googleapis.com/auth/drive.readonly|See and download all your Google Drive files|
|https://www.googleapis.com/auth/forms.body|See, edit, create, and delete all your Google Forms forms|
|https://www.googleapis.com/auth/forms.body.readonly|See all your Google Forms forms|
|https://www.googleapis.com/auth/forms.responses.readonly|See all responses to your Google Forms forms|

<h1 id="google-forms-api-forms">forms</h1>

## forms.forms.create

<a id="opIdforms.forms.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/forms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "info": {
      "description": "string",
      "title": "string"
    },
    "items": [
      {
        "description": "string",
        "imageItem": {
          "image": {
            "altText": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          }
        },
        "itemId": "string",
        "pageBreakItem": {},
        "questionGroupItem": {
          "grid": {
            "columns": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "shuffleQuestions": true
          },
          "image": {
            "altText": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          },
          "questions": [
            {
              "choiceQuestion": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "dateQuestion": {
                "includeTime": true,
                "includeYear": true
              },
              "fileUploadQuestion": {
                "folderId": "string",
                "maxFileSize": "string",
                "maxFiles": 0,
                "types": [
                  "FILE_TYPE_UNSPECIFIED"
                ]
              },
              "grading": {
                "correctAnswers": {
                  "answers": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "generalFeedback": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "pointValue": 0,
                "whenRight": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "whenWrong": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                }
              },
              "questionId": "string",
              "required": true,
              "rowQuestion": {
                "title": "string"
              },
              "scaleQuestion": {
                "high": 0,
                "highLabel": "string",
                "low": 0,
                "lowLabel": "string"
              },
              "textQuestion": {
                "paragraph": true
              },
              "timeQuestion": {
                "duration": true
              }
            }
          ]
        },
        "questionItem": {
          "image": {
            "altText": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          },
          "question": {
            "choiceQuestion": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "dateQuestion": {
              "includeTime": true,
              "includeYear": true
            },
            "fileUploadQuestion": {
              "folderId": "string",
              "maxFileSize": "string",
              "maxFiles": 0,
              "types": [
                "FILE_TYPE_UNSPECIFIED"
              ]
            },
            "grading": {
              "correctAnswers": {
                "answers": [
                  {
                    "value": "string"
                  }
                ]
              },
              "generalFeedback": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "pointValue": 0,
              "whenRight": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "whenWrong": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              }
            },
            "questionId": "string",
            "required": true,
            "rowQuestion": {
              "title": "string"
            },
            "scaleQuestion": {
              "high": 0,
              "highLabel": "string",
              "low": 0,
              "lowLabel": "string"
            },
            "textQuestion": {
              "paragraph": true
            },
            "timeQuestion": {
              "duration": true
            }
          }
        },
        "textItem": {},
        "title": "string",
        "videoItem": {
          "caption": "string",
          "video": {
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "youtubeUri": "string"
          }
        }
      }
    ],
    "settings": {
      "quizSettings": {
        "isQuiz": true
      }
    }
  }'
```

`POST /v1/forms`

Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.

> Body parameter

```json
{
  "info": {
    "description": "string",
    "title": "string"
  },
  "items": [
    {
      "description": "string",
      "imageItem": {
        "image": {
          "altText": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        }
      },
      "itemId": "string",
      "pageBreakItem": {},
      "questionGroupItem": {
        "grid": {
          "columns": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "shuffleQuestions": true
        },
        "image": {
          "altText": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "questions": [
          {
            "choiceQuestion": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "dateQuestion": {
              "includeTime": true,
              "includeYear": true
            },
            "fileUploadQuestion": {
              "folderId": "string",
              "maxFileSize": "string",
              "maxFiles": 0,
              "types": [
                "FILE_TYPE_UNSPECIFIED"
              ]
            },
            "grading": {
              "correctAnswers": {
                "answers": [
                  {
                    "value": "string"
                  }
                ]
              },
              "generalFeedback": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "pointValue": 0,
              "whenRight": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "whenWrong": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              }
            },
            "questionId": "string",
            "required": true,
            "rowQuestion": {
              "title": "string"
            },
            "scaleQuestion": {
              "high": 0,
              "highLabel": "string",
              "low": 0,
              "lowLabel": "string"
            },
            "textQuestion": {
              "paragraph": true
            },
            "timeQuestion": {
              "duration": true
            }
          }
        ]
      },
      "questionItem": {
        "image": {
          "altText": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "question": {
          "choiceQuestion": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "dateQuestion": {
            "includeTime": true,
            "includeYear": true
          },
          "fileUploadQuestion": {
            "folderId": "string",
            "maxFileSize": "string",
            "maxFiles": 0,
            "types": [
              "FILE_TYPE_UNSPECIFIED"
            ]
          },
          "grading": {
            "correctAnswers": {
              "answers": [
                {
                  "value": "string"
                }
              ]
            },
            "generalFeedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "pointValue": 0,
            "whenRight": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "whenWrong": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            }
          },
          "questionId": "string",
          "required": true,
          "rowQuestion": {
            "title": "string"
          },
          "scaleQuestion": {
            "high": 0,
            "highLabel": "string",
            "low": 0,
            "lowLabel": "string"
          },
          "textQuestion": {
            "paragraph": true
          },
          "timeQuestion": {
            "duration": true
          }
        }
      },
      "textItem": {},
      "title": "string",
      "videoItem": {
        "caption": "string",
        "video": {
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "youtubeUri": "string"
        }
      }
    }
  ],
  "settings": {
    "quizSettings": {
      "isQuiz": true
    }
  }
}
```

<h3 id="formsformscreate-parameters">Parameters</h3>

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
|body|body|[Form](#schemaform)|false|none|
|» info|body|[Info](#schemainfo)|false|Required. The title and description of the form.|
|» items|body|[[Item](#schemaitem)]|false|Required. A list of the form's items, which can include section headers, questions, embedded media, etc.|
|» settings|body|[FormSettings](#schemaformsettings)|false|The form's settings. This must be updated with UpdateSettingsRequest; it is ignored during `forms.create` and UpdateFormInfoRequest.|

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
  "formId": "string",
  "info": {
    "description": "string",
    "documentTitle": "string",
    "title": "string"
  },
  "items": [
    {
      "description": "string",
      "imageItem": {
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        }
      },
      "itemId": "string",
      "pageBreakItem": {},
      "questionGroupItem": {
        "grid": {
          "columns": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "shuffleQuestions": true
        },
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "questions": [
          {
            "choiceQuestion": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "contentUri": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "dateQuestion": {
              "includeTime": true,
              "includeYear": true
            },
            "fileUploadQuestion": {
              "folderId": "string",
              "maxFileSize": "string",
              "maxFiles": 0,
              "types": [
                "FILE_TYPE_UNSPECIFIED"
              ]
            },
            "grading": {
              "correctAnswers": {
                "answers": [
                  {
                    "value": "string"
                  }
                ]
              },
              "generalFeedback": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "pointValue": 0,
              "whenRight": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "whenWrong": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              }
            },
            "questionId": "string",
            "required": true,
            "rowQuestion": {
              "title": "string"
            },
            "scaleQuestion": {
              "high": 0,
              "highLabel": "string",
              "low": 0,
              "lowLabel": "string"
            },
            "textQuestion": {
              "paragraph": true
            },
            "timeQuestion": {
              "duration": true
            }
          }
        ]
      },
      "questionItem": {
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "question": {
          "choiceQuestion": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "dateQuestion": {
            "includeTime": true,
            "includeYear": true
          },
          "fileUploadQuestion": {
            "folderId": "string",
            "maxFileSize": "string",
            "maxFiles": 0,
            "types": [
              "FILE_TYPE_UNSPECIFIED"
            ]
          },
          "grading": {
            "correctAnswers": {
              "answers": [
                {
                  "value": "string"
                }
              ]
            },
            "generalFeedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "pointValue": 0,
            "whenRight": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "whenWrong": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            }
          },
          "questionId": "string",
          "required": true,
          "rowQuestion": {
            "title": "string"
          },
          "scaleQuestion": {
            "high": 0,
            "highLabel": "string",
            "low": 0,
            "lowLabel": "string"
          },
          "textQuestion": {
            "paragraph": true
          },
          "timeQuestion": {
            "duration": true
          }
        }
      },
      "textItem": {},
      "title": "string",
      "videoItem": {
        "caption": "string",
        "video": {
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "youtubeUri": "string"
        }
      }
    }
  ],
  "linkedSheetId": "string",
  "responderUri": "string",
  "revisionId": "string",
  "settings": {
    "quizSettings": {
      "isQuiz": true
    }
  }
}
```

<h3 id="formsformscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Form](#schemaform)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body )
</aside>

## forms.forms.get

<a id="opIdforms.forms.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/forms/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/forms/{formId}`

Get a form.

<h3 id="formsformsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formId|path|string|true|Required. The form ID.|
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
  "formId": "string",
  "info": {
    "description": "string",
    "documentTitle": "string",
    "title": "string"
  },
  "items": [
    {
      "description": "string",
      "imageItem": {
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        }
      },
      "itemId": "string",
      "pageBreakItem": {},
      "questionGroupItem": {
        "grid": {
          "columns": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "shuffleQuestions": true
        },
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "questions": [
          {
            "choiceQuestion": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "contentUri": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "dateQuestion": {
              "includeTime": true,
              "includeYear": true
            },
            "fileUploadQuestion": {
              "folderId": "string",
              "maxFileSize": "string",
              "maxFiles": 0,
              "types": [
                "FILE_TYPE_UNSPECIFIED"
              ]
            },
            "grading": {
              "correctAnswers": {
                "answers": [
                  {
                    "value": "string"
                  }
                ]
              },
              "generalFeedback": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "pointValue": 0,
              "whenRight": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "whenWrong": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              }
            },
            "questionId": "string",
            "required": true,
            "rowQuestion": {
              "title": "string"
            },
            "scaleQuestion": {
              "high": 0,
              "highLabel": "string",
              "low": 0,
              "lowLabel": "string"
            },
            "textQuestion": {
              "paragraph": true
            },
            "timeQuestion": {
              "duration": true
            }
          }
        ]
      },
      "questionItem": {
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "question": {
          "choiceQuestion": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "dateQuestion": {
            "includeTime": true,
            "includeYear": true
          },
          "fileUploadQuestion": {
            "folderId": "string",
            "maxFileSize": "string",
            "maxFiles": 0,
            "types": [
              "FILE_TYPE_UNSPECIFIED"
            ]
          },
          "grading": {
            "correctAnswers": {
              "answers": [
                {
                  "value": "string"
                }
              ]
            },
            "generalFeedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "pointValue": 0,
            "whenRight": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "whenWrong": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            }
          },
          "questionId": "string",
          "required": true,
          "rowQuestion": {
            "title": "string"
          },
          "scaleQuestion": {
            "high": 0,
            "highLabel": "string",
            "low": 0,
            "lowLabel": "string"
          },
          "textQuestion": {
            "paragraph": true
          },
          "timeQuestion": {
            "duration": true
          }
        }
      },
      "textItem": {},
      "title": "string",
      "videoItem": {
        "caption": "string",
        "video": {
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "youtubeUri": "string"
        }
      }
    }
  ],
  "linkedSheetId": "string",
  "responderUri": "string",
  "revisionId": "string",
  "settings": {
    "quizSettings": {
      "isQuiz": true
    }
  }
}
```

<h3 id="formsformsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Form](#schemaform)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body.readonly )
</aside>

## forms.forms.responses.list

<a id="opIdforms.forms.responses.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/forms/string/responses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/forms/{formId}/responses`

List a form's responses.

<h3 id="formsformsresponseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formId|path|string|true|Required. ID of the Form whose responses to list.|
|filter|query|string|false|Which form responses to return. Currently, the only supported filters are: * timestamp > *N* which means to get all form responses submitted after (but not at) timestamp *N*. * timestamp >= *N* which means to get all form responses submitted at and after timestamp *N*. For both supported filters, timestamp must be formatted in RFC3339 UTC "Zulu" format. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".|
|pageSize|query|integer|false|The maximum number of responses to return. The service may return fewer than this value. If unspecified or zero, at most 5000 responses are returned.|
|pageToken|query|string|false|A page token returned by a previous list response. If this field is set, the form and the values of the filter must be the same as for the original request.|
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
  "nextPageToken": "string",
  "responses": [
    {
      "answers": {
        "property1": {
          "fileUploadAnswers": {
            "answers": [
              {
                "fileId": "string",
                "fileName": "string",
                "mimeType": "string"
              }
            ]
          },
          "grade": {
            "correct": true,
            "feedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "score": 0
          },
          "questionId": "string",
          "textAnswers": {
            "answers": [
              {
                "value": "string"
              }
            ]
          }
        },
        "property2": {
          "fileUploadAnswers": {
            "answers": [
              {
                "fileId": "string",
                "fileName": "string",
                "mimeType": "string"
              }
            ]
          },
          "grade": {
            "correct": true,
            "feedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "score": 0
          },
          "questionId": "string",
          "textAnswers": {
            "answers": [
              {
                "value": "string"
              }
            ]
          }
        }
      },
      "createTime": "string",
      "formId": "string",
      "lastSubmittedTime": "string",
      "respondentEmail": "string",
      "responseId": "string",
      "totalScore": 0
    }
  ]
}
```

<h3 id="formsformsresponseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFormResponsesResponse](#schemalistformresponsesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly )
</aside>

## forms.forms.responses.get

<a id="opIdforms.forms.responses.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/forms/string/responses/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/forms/{formId}/responses/{responseId}`

Get one response from the form.

<h3 id="formsformsresponsesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formId|path|string|true|Required. The form ID.|
|responseId|path|string|true|Required. The response ID within the form.|
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
  "answers": {
    "property1": {
      "fileUploadAnswers": {
        "answers": [
          {
            "fileId": "string",
            "fileName": "string",
            "mimeType": "string"
          }
        ]
      },
      "grade": {
        "correct": true,
        "feedback": {
          "material": [
            {
              "link": {
                "displayText": "string",
                "uri": "string"
              },
              "video": {
                "displayText": "string",
                "youtubeUri": "string"
              }
            }
          ],
          "text": "string"
        },
        "score": 0
      },
      "questionId": "string",
      "textAnswers": {
        "answers": [
          {
            "value": "string"
          }
        ]
      }
    },
    "property2": {
      "fileUploadAnswers": {
        "answers": [
          {
            "fileId": "string",
            "fileName": "string",
            "mimeType": "string"
          }
        ]
      },
      "grade": {
        "correct": true,
        "feedback": {
          "material": [
            {
              "link": {
                "displayText": "string",
                "uri": "string"
              },
              "video": {
                "displayText": "string",
                "youtubeUri": "string"
              }
            }
          ],
          "text": "string"
        },
        "score": 0
      },
      "questionId": "string",
      "textAnswers": {
        "answers": [
          {
            "value": "string"
          }
        ]
      }
    }
  },
  "createTime": "string",
  "formId": "string",
  "lastSubmittedTime": "string",
  "respondentEmail": "string",
  "responseId": "string",
  "totalScore": 0
}
```

<h3 id="formsformsresponsesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FormResponse](#schemaformresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly )
</aside>

## forms.forms.watches.list

<a id="opIdforms.forms.watches.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/forms/string/watches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/forms/{formId}/watches`

Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.

<h3 id="formsformswatcheslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formId|path|string|true|Required. ID of the Form whose watches to list.|
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
  "watches": [
    {
      "createTime": "string",
      "errorType": "ERROR_TYPE_UNSPECIFIED",
      "eventType": "EVENT_TYPE_UNSPECIFIED",
      "expireTime": "string",
      "id": "string",
      "state": "STATE_UNSPECIFIED",
      "target": {
        "topic": {
          "topicName": "string"
        }
      }
    }
  ]
}
```

<h3 id="formsformswatcheslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWatchesResponse](#schemalistwatchesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly )
</aside>

## forms.forms.watches.create

<a id="opIdforms.forms.watches.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/forms/string/watches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "watch": {
      "eventType": "EVENT_TYPE_UNSPECIFIED",
      "target": {
        "topic": {
          "topicName": "string"
        }
      }
    },
    "watchId": "string"
  }'
```

`POST /v1/forms/{formId}/watches`

Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).

> Body parameter

```json
{
  "watch": {
    "eventType": "EVENT_TYPE_UNSPECIFIED",
    "target": {
      "topic": {
        "topicName": "string"
      }
    }
  },
  "watchId": "string"
}
```

<h3 id="formsformswatchescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formId|path|string|true|Required. ID of the Form to watch.|
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
|body|body|[CreateWatchRequest](#schemacreatewatchrequest)|false|none|
|» watch|body|[Watch](#schemawatch)|false|Required. The watch object. No ID should be set on this object; use `watch_id` instead.|
|» watchId|body|string|false|The ID to use for the watch. If specified, the ID must not already be in use. If not specified, an ID is generated. This value should be 4-63 characters, and valid characters are /a-z-/.|

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
  "createTime": "string",
  "errorType": "ERROR_TYPE_UNSPECIFIED",
  "eventType": "EVENT_TYPE_UNSPECIFIED",
  "expireTime": "string",
  "id": "string",
  "state": "STATE_UNSPECIFIED",
  "target": {
    "topic": {
      "topicName": "string"
    }
  }
}
```

<h3 id="formsformswatchescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Watch](#schemawatch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly )
</aside>

## forms.forms.watches.delete

<a id="opIdforms.forms.watches.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/forms/string/watches/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/forms/{formId}/watches/{watchId}`

Delete a watch.

<h3 id="formsformswatchesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formId|path|string|true|Required. The ID of the Form.|
|watchId|path|string|true|Required. The ID of the Watch to delete.|
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
{}
```

<h3 id="formsformswatchesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly )
</aside>

## forms.forms.watches.renew

<a id="opIdforms.forms.watches.renew"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/forms/string/watches/string:renew \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/forms/{formId}/watches/{watchId}:renew`

Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

> Body parameter

```json
{}
```

<h3 id="formsformswatchesrenew-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formId|path|string|true|Required. The ID of the Form.|
|watchId|path|string|true|Required. The ID of the Watch to renew.|
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
|body|body|[RenewWatchRequest](#schemarenewwatchrequest)|false|none|

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
  "createTime": "string",
  "errorType": "ERROR_TYPE_UNSPECIFIED",
  "eventType": "EVENT_TYPE_UNSPECIFIED",
  "expireTime": "string",
  "id": "string",
  "state": "STATE_UNSPECIFIED",
  "target": {
    "topic": {
      "topicName": "string"
    }
  }
}
```

<h3 id="formsformswatchesrenew-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Watch](#schemawatch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.responses.readonly )
</aside>

## forms.forms.batchUpdate

<a id="opIdforms.forms.batchUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/forms/string:batchUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "includeFormInResponse": true,
    "requests": [
      {
        "createItem": {
          "item": {
            "description": "string",
            "imageItem": {
              "image": {
                "altText": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              }
            },
            "itemId": "string",
            "pageBreakItem": {},
            "questionGroupItem": {
              "grid": {
                "columns": {
                  "options": [
                    {
                      "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                      "goToSectionId": "string",
                      "image": {
                        "altText": "string",
                        "properties": {
                          "alignment": "ALIGNMENT_UNSPECIFIED",
                          "width": 0
                        },
                        "sourceUri": "string"
                      },
                      "isOther": true,
                      "value": "string"
                    }
                  ],
                  "shuffle": true,
                  "type": "CHOICE_TYPE_UNSPECIFIED"
                },
                "shuffleQuestions": true
              },
              "image": {
                "altText": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              },
              "questions": [
                {
                  "choiceQuestion": {
                    "options": [
                      {
                        "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                        "goToSectionId": "string",
                        "image": {
                          "altText": "string",
                          "properties": {
                            "alignment": "ALIGNMENT_UNSPECIFIED",
                            "width": 0
                          },
                          "sourceUri": "string"
                        },
                        "isOther": true,
                        "value": "string"
                      }
                    ],
                    "shuffle": true,
                    "type": "CHOICE_TYPE_UNSPECIFIED"
                  },
                  "dateQuestion": {
                    "includeTime": true,
                    "includeYear": true
                  },
                  "fileUploadQuestion": {
                    "folderId": "string",
                    "maxFileSize": "string",
                    "maxFiles": 0,
                    "types": [
                      "FILE_TYPE_UNSPECIFIED"
                    ]
                  },
                  "grading": {
                    "correctAnswers": {
                      "answers": [
                        {
                          "value": "string"
                        }
                      ]
                    },
                    "generalFeedback": {
                      "material": [
                        {
                          "link": {
                            "displayText": "string",
                            "uri": "string"
                          },
                          "video": {
                            "displayText": "string",
                            "youtubeUri": "string"
                          }
                        }
                      ],
                      "text": "string"
                    },
                    "pointValue": 0,
                    "whenRight": {
                      "material": [
                        {
                          "link": {
                            "displayText": "string",
                            "uri": "string"
                          },
                          "video": {
                            "displayText": "string",
                            "youtubeUri": "string"
                          }
                        }
                      ],
                      "text": "string"
                    },
                    "whenWrong": {
                      "material": [
                        {
                          "link": {
                            "displayText": "string",
                            "uri": "string"
                          },
                          "video": {
                            "displayText": "string",
                            "youtubeUri": "string"
                          }
                        }
                      ],
                      "text": "string"
                    }
                  },
                  "questionId": "string",
                  "required": true,
                  "rowQuestion": {
                    "title": "string"
                  },
                  "scaleQuestion": {
                    "high": 0,
                    "highLabel": "string",
                    "low": 0,
                    "lowLabel": "string"
                  },
                  "textQuestion": {
                    "paragraph": true
                  },
                  "timeQuestion": {
                    "duration": true
                  }
                }
              ]
            },
            "questionItem": {
              "image": {
                "altText": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              },
              "question": {
                "choiceQuestion": {
                  "options": [
                    {
                      "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                      "goToSectionId": "string",
                      "image": {
                        "altText": "string",
                        "properties": {
                          "alignment": "ALIGNMENT_UNSPECIFIED",
                          "width": 0
                        },
                        "sourceUri": "string"
                      },
                      "isOther": true,
                      "value": "string"
                    }
                  ],
                  "shuffle": true,
                  "type": "CHOICE_TYPE_UNSPECIFIED"
                },
                "dateQuestion": {
                  "includeTime": true,
                  "includeYear": true
                },
                "fileUploadQuestion": {
                  "folderId": "string",
                  "maxFileSize": "string",
                  "maxFiles": 0,
                  "types": [
                    "FILE_TYPE_UNSPECIFIED"
                  ]
                },
                "grading": {
                  "correctAnswers": {
                    "answers": [
                      {
                        "value": "string"
                      }
                    ]
                  },
                  "generalFeedback": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "pointValue": 0,
                  "whenRight": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "whenWrong": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  }
                },
                "questionId": "string",
                "required": true,
                "rowQuestion": {
                  "title": "string"
                },
                "scaleQuestion": {
                  "high": 0,
                  "highLabel": "string",
                  "low": 0,
                  "lowLabel": "string"
                },
                "textQuestion": {
                  "paragraph": true
                },
                "timeQuestion": {
                  "duration": true
                }
              }
            },
            "textItem": {},
            "title": "string",
            "videoItem": {
              "caption": "string",
              "video": {
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "youtubeUri": "string"
              }
            }
          },
          "location": {
            "index": 0
          }
        },
        "deleteItem": {
          "location": {
            "index": 0
          }
        },
        "moveItem": {
          "newLocation": {
            "index": 0
          },
          "originalLocation": {
            "index": 0
          }
        },
        "updateFormInfo": {
          "info": {
            "description": "string",
            "title": "string"
          },
          "updateMask": "string"
        },
        "updateItem": {
          "item": {
            "description": "string",
            "imageItem": {
              "image": {
                "altText": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              }
            },
            "itemId": "string",
            "pageBreakItem": {},
            "questionGroupItem": {
              "grid": {
                "columns": {
                  "options": [
                    {
                      "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                      "goToSectionId": "string",
                      "image": {
                        "altText": "string",
                        "properties": {
                          "alignment": "ALIGNMENT_UNSPECIFIED",
                          "width": 0
                        },
                        "sourceUri": "string"
                      },
                      "isOther": true,
                      "value": "string"
                    }
                  ],
                  "shuffle": true,
                  "type": "CHOICE_TYPE_UNSPECIFIED"
                },
                "shuffleQuestions": true
              },
              "image": {
                "altText": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              },
              "questions": [
                {
                  "choiceQuestion": {
                    "options": [
                      {
                        "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                        "goToSectionId": "string",
                        "image": {
                          "altText": "string",
                          "properties": {
                            "alignment": "ALIGNMENT_UNSPECIFIED",
                            "width": 0
                          },
                          "sourceUri": "string"
                        },
                        "isOther": true,
                        "value": "string"
                      }
                    ],
                    "shuffle": true,
                    "type": "CHOICE_TYPE_UNSPECIFIED"
                  },
                  "dateQuestion": {
                    "includeTime": true,
                    "includeYear": true
                  },
                  "fileUploadQuestion": {
                    "folderId": "string",
                    "maxFileSize": "string",
                    "maxFiles": 0,
                    "types": [
                      "FILE_TYPE_UNSPECIFIED"
                    ]
                  },
                  "grading": {
                    "correctAnswers": {
                      "answers": [
                        {
                          "value": "string"
                        }
                      ]
                    },
                    "generalFeedback": {
                      "material": [
                        {
                          "link": {
                            "displayText": "string",
                            "uri": "string"
                          },
                          "video": {
                            "displayText": "string",
                            "youtubeUri": "string"
                          }
                        }
                      ],
                      "text": "string"
                    },
                    "pointValue": 0,
                    "whenRight": {
                      "material": [
                        {
                          "link": {
                            "displayText": "string",
                            "uri": "string"
                          },
                          "video": {
                            "displayText": "string",
                            "youtubeUri": "string"
                          }
                        }
                      ],
                      "text": "string"
                    },
                    "whenWrong": {
                      "material": [
                        {
                          "link": {
                            "displayText": "string",
                            "uri": "string"
                          },
                          "video": {
                            "displayText": "string",
                            "youtubeUri": "string"
                          }
                        }
                      ],
                      "text": "string"
                    }
                  },
                  "questionId": "string",
                  "required": true,
                  "rowQuestion": {
                    "title": "string"
                  },
                  "scaleQuestion": {
                    "high": 0,
                    "highLabel": "string",
                    "low": 0,
                    "lowLabel": "string"
                  },
                  "textQuestion": {
                    "paragraph": true
                  },
                  "timeQuestion": {
                    "duration": true
                  }
                }
              ]
            },
            "questionItem": {
              "image": {
                "altText": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              },
              "question": {
                "choiceQuestion": {
                  "options": [
                    {
                      "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                      "goToSectionId": "string",
                      "image": {
                        "altText": "string",
                        "properties": {
                          "alignment": "ALIGNMENT_UNSPECIFIED",
                          "width": 0
                        },
                        "sourceUri": "string"
                      },
                      "isOther": true,
                      "value": "string"
                    }
                  ],
                  "shuffle": true,
                  "type": "CHOICE_TYPE_UNSPECIFIED"
                },
                "dateQuestion": {
                  "includeTime": true,
                  "includeYear": true
                },
                "fileUploadQuestion": {
                  "folderId": "string",
                  "maxFileSize": "string",
                  "maxFiles": 0,
                  "types": [
                    "FILE_TYPE_UNSPECIFIED"
                  ]
                },
                "grading": {
                  "correctAnswers": {
                    "answers": [
                      {
                        "value": "string"
                      }
                    ]
                  },
                  "generalFeedback": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "pointValue": 0,
                  "whenRight": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "whenWrong": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  }
                },
                "questionId": "string",
                "required": true,
                "rowQuestion": {
                  "title": "string"
                },
                "scaleQuestion": {
                  "high": 0,
                  "highLabel": "string",
                  "low": 0,
                  "lowLabel": "string"
                },
                "textQuestion": {
                  "paragraph": true
                },
                "timeQuestion": {
                  "duration": true
                }
              }
            },
            "textItem": {},
            "title": "string",
            "videoItem": {
              "caption": "string",
              "video": {
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "youtubeUri": "string"
              }
            }
          },
          "location": {
            "index": 0
          },
          "updateMask": "string"
        },
        "updateSettings": {
          "settings": {
            "quizSettings": {
              "isQuiz": true
            }
          },
          "updateMask": "string"
        }
      }
    ],
    "writeControl": {
      "requiredRevisionId": "string",
      "targetRevisionId": "string"
    }
  }'
```

`POST /v1/forms/{formId}:batchUpdate`

Change the form with a batch of updates.

> Body parameter

```json
{
  "includeFormInResponse": true,
  "requests": [
    {
      "createItem": {
        "item": {
          "description": "string",
          "imageItem": {
            "image": {
              "altText": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            }
          },
          "itemId": "string",
          "pageBreakItem": {},
          "questionGroupItem": {
            "grid": {
              "columns": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "shuffleQuestions": true
            },
            "image": {
              "altText": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "questions": [
              {
                "choiceQuestion": {
                  "options": [
                    {
                      "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                      "goToSectionId": "string",
                      "image": {
                        "altText": "string",
                        "properties": {
                          "alignment": "ALIGNMENT_UNSPECIFIED",
                          "width": 0
                        },
                        "sourceUri": "string"
                      },
                      "isOther": true,
                      "value": "string"
                    }
                  ],
                  "shuffle": true,
                  "type": "CHOICE_TYPE_UNSPECIFIED"
                },
                "dateQuestion": {
                  "includeTime": true,
                  "includeYear": true
                },
                "fileUploadQuestion": {
                  "folderId": "string",
                  "maxFileSize": "string",
                  "maxFiles": 0,
                  "types": [
                    "FILE_TYPE_UNSPECIFIED"
                  ]
                },
                "grading": {
                  "correctAnswers": {
                    "answers": [
                      {
                        "value": "string"
                      }
                    ]
                  },
                  "generalFeedback": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "pointValue": 0,
                  "whenRight": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "whenWrong": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  }
                },
                "questionId": "string",
                "required": true,
                "rowQuestion": {
                  "title": "string"
                },
                "scaleQuestion": {
                  "high": 0,
                  "highLabel": "string",
                  "low": 0,
                  "lowLabel": "string"
                },
                "textQuestion": {
                  "paragraph": true
                },
                "timeQuestion": {
                  "duration": true
                }
              }
            ]
          },
          "questionItem": {
            "image": {
              "altText": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "question": {
              "choiceQuestion": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "dateQuestion": {
                "includeTime": true,
                "includeYear": true
              },
              "fileUploadQuestion": {
                "folderId": "string",
                "maxFileSize": "string",
                "maxFiles": 0,
                "types": [
                  "FILE_TYPE_UNSPECIFIED"
                ]
              },
              "grading": {
                "correctAnswers": {
                  "answers": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "generalFeedback": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "pointValue": 0,
                "whenRight": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "whenWrong": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                }
              },
              "questionId": "string",
              "required": true,
              "rowQuestion": {
                "title": "string"
              },
              "scaleQuestion": {
                "high": 0,
                "highLabel": "string",
                "low": 0,
                "lowLabel": "string"
              },
              "textQuestion": {
                "paragraph": true
              },
              "timeQuestion": {
                "duration": true
              }
            }
          },
          "textItem": {},
          "title": "string",
          "videoItem": {
            "caption": "string",
            "video": {
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "youtubeUri": "string"
            }
          }
        },
        "location": {
          "index": 0
        }
      },
      "deleteItem": {
        "location": {
          "index": 0
        }
      },
      "moveItem": {
        "newLocation": {
          "index": 0
        },
        "originalLocation": {
          "index": 0
        }
      },
      "updateFormInfo": {
        "info": {
          "description": "string",
          "title": "string"
        },
        "updateMask": "string"
      },
      "updateItem": {
        "item": {
          "description": "string",
          "imageItem": {
            "image": {
              "altText": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            }
          },
          "itemId": "string",
          "pageBreakItem": {},
          "questionGroupItem": {
            "grid": {
              "columns": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "shuffleQuestions": true
            },
            "image": {
              "altText": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "questions": [
              {
                "choiceQuestion": {
                  "options": [
                    {
                      "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                      "goToSectionId": "string",
                      "image": {
                        "altText": "string",
                        "properties": {
                          "alignment": "ALIGNMENT_UNSPECIFIED",
                          "width": 0
                        },
                        "sourceUri": "string"
                      },
                      "isOther": true,
                      "value": "string"
                    }
                  ],
                  "shuffle": true,
                  "type": "CHOICE_TYPE_UNSPECIFIED"
                },
                "dateQuestion": {
                  "includeTime": true,
                  "includeYear": true
                },
                "fileUploadQuestion": {
                  "folderId": "string",
                  "maxFileSize": "string",
                  "maxFiles": 0,
                  "types": [
                    "FILE_TYPE_UNSPECIFIED"
                  ]
                },
                "grading": {
                  "correctAnswers": {
                    "answers": [
                      {
                        "value": "string"
                      }
                    ]
                  },
                  "generalFeedback": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "pointValue": 0,
                  "whenRight": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "whenWrong": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  }
                },
                "questionId": "string",
                "required": true,
                "rowQuestion": {
                  "title": "string"
                },
                "scaleQuestion": {
                  "high": 0,
                  "highLabel": "string",
                  "low": 0,
                  "lowLabel": "string"
                },
                "textQuestion": {
                  "paragraph": true
                },
                "timeQuestion": {
                  "duration": true
                }
              }
            ]
          },
          "questionItem": {
            "image": {
              "altText": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "question": {
              "choiceQuestion": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "dateQuestion": {
                "includeTime": true,
                "includeYear": true
              },
              "fileUploadQuestion": {
                "folderId": "string",
                "maxFileSize": "string",
                "maxFiles": 0,
                "types": [
                  "FILE_TYPE_UNSPECIFIED"
                ]
              },
              "grading": {
                "correctAnswers": {
                  "answers": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "generalFeedback": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "pointValue": 0,
                "whenRight": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "whenWrong": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                }
              },
              "questionId": "string",
              "required": true,
              "rowQuestion": {
                "title": "string"
              },
              "scaleQuestion": {
                "high": 0,
                "highLabel": "string",
                "low": 0,
                "lowLabel": "string"
              },
              "textQuestion": {
                "paragraph": true
              },
              "timeQuestion": {
                "duration": true
              }
            }
          },
          "textItem": {},
          "title": "string",
          "videoItem": {
            "caption": "string",
            "video": {
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "youtubeUri": "string"
            }
          }
        },
        "location": {
          "index": 0
        },
        "updateMask": "string"
      },
      "updateSettings": {
        "settings": {
          "quizSettings": {
            "isQuiz": true
          }
        },
        "updateMask": "string"
      }
    }
  ],
  "writeControl": {
    "requiredRevisionId": "string",
    "targetRevisionId": "string"
  }
}
```

<h3 id="formsformsbatchupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formId|path|string|true|Required. The form ID.|
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
|body|body|[BatchUpdateFormRequest](#schemabatchupdateformrequest)|false|none|
|» includeFormInResponse|body|boolean|false|Whether to return an updated version of the model in the response.|
|» requests|body|[[Request](#schemarequest)]|false|Required. The update requests of this batch.|
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
  "form": {
    "formId": "string",
    "info": {
      "description": "string",
      "documentTitle": "string",
      "title": "string"
    },
    "items": [
      {
        "description": "string",
        "imageItem": {
          "image": {
            "altText": "string",
            "contentUri": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          }
        },
        "itemId": "string",
        "pageBreakItem": {},
        "questionGroupItem": {
          "grid": {
            "columns": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "contentUri": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "shuffleQuestions": true
          },
          "image": {
            "altText": "string",
            "contentUri": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          },
          "questions": [
            {
              "choiceQuestion": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "contentUri": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "dateQuestion": {
                "includeTime": true,
                "includeYear": true
              },
              "fileUploadQuestion": {
                "folderId": "string",
                "maxFileSize": "string",
                "maxFiles": 0,
                "types": [
                  "FILE_TYPE_UNSPECIFIED"
                ]
              },
              "grading": {
                "correctAnswers": {
                  "answers": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "generalFeedback": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "pointValue": 0,
                "whenRight": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "whenWrong": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                }
              },
              "questionId": "string",
              "required": true,
              "rowQuestion": {
                "title": "string"
              },
              "scaleQuestion": {
                "high": 0,
                "highLabel": "string",
                "low": 0,
                "lowLabel": "string"
              },
              "textQuestion": {
                "paragraph": true
              },
              "timeQuestion": {
                "duration": true
              }
            }
          ]
        },
        "questionItem": {
          "image": {
            "altText": "string",
            "contentUri": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          },
          "question": {
            "choiceQuestion": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "contentUri": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "dateQuestion": {
              "includeTime": true,
              "includeYear": true
            },
            "fileUploadQuestion": {
              "folderId": "string",
              "maxFileSize": "string",
              "maxFiles": 0,
              "types": [
                "FILE_TYPE_UNSPECIFIED"
              ]
            },
            "grading": {
              "correctAnswers": {
                "answers": [
                  {
                    "value": "string"
                  }
                ]
              },
              "generalFeedback": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "pointValue": 0,
              "whenRight": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "whenWrong": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              }
            },
            "questionId": "string",
            "required": true,
            "rowQuestion": {
              "title": "string"
            },
            "scaleQuestion": {
              "high": 0,
              "highLabel": "string",
              "low": 0,
              "lowLabel": "string"
            },
            "textQuestion": {
              "paragraph": true
            },
            "timeQuestion": {
              "duration": true
            }
          }
        },
        "textItem": {},
        "title": "string",
        "videoItem": {
          "caption": "string",
          "video": {
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "youtubeUri": "string"
          }
        }
      }
    ],
    "linkedSheetId": "string",
    "responderUri": "string",
    "revisionId": "string",
    "settings": {
      "quizSettings": {
        "isQuiz": true
      }
    }
  },
  "replies": [
    {
      "createItem": {
        "itemId": "string",
        "questionId": [
          "string"
        ]
      }
    }
  ],
  "writeControl": {
    "requiredRevisionId": "string",
    "targetRevisionId": "string"
  }
}
```

<h3 id="formsformsbatchupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchUpdateFormResponse](#schemabatchupdateformresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.body ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.body )
</aside>

# Schemas

<h2 id="tocS_Answer">Answer</h2>
<!-- backwards compatibility -->
<a id="schemaanswer"></a>
<a id="schema_Answer"></a>
<a id="tocSanswer"></a>
<a id="tocsanswer"></a>

```json
{
  "fileUploadAnswers": {
    "answers": [
      {
        "fileId": "string",
        "fileName": "string",
        "mimeType": "string"
      }
    ]
  },
  "grade": {
    "correct": true,
    "feedback": {
      "material": [
        {
          "link": {
            "displayText": "string",
            "uri": "string"
          },
          "video": {
            "displayText": "string",
            "youtubeUri": "string"
          }
        }
      ],
      "text": "string"
    },
    "score": 0
  },
  "questionId": "string",
  "textAnswers": {
    "answers": [
      {
        "value": "string"
      }
    ]
  }
}
```

The submitted answer for a question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileUploadAnswers|[FileUploadAnswers](#schemafileuploadanswers)|false|none|Output only. The answers to a file upload question.|
|grade|[Grade](#schemagrade)|false|none|Output only. The grade for the answer if the form was a quiz.|
|questionId|string|false|read-only|Output only. The question's ID. See also Question.question_id.|
|textAnswers|[TextAnswers](#schematextanswers)|false|none|Output only. The specific answers as text.|

<h2 id="tocS_BatchUpdateFormRequest">BatchUpdateFormRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateformrequest"></a>
<a id="schema_BatchUpdateFormRequest"></a>
<a id="tocSbatchupdateformrequest"></a>
<a id="tocsbatchupdateformrequest"></a>

```json
{
  "includeFormInResponse": true,
  "requests": [
    {
      "createItem": {
        "item": {
          "description": "string",
          "imageItem": {
            "image": {
              "altText": "string",
              "contentUri": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            }
          },
          "itemId": "string",
          "pageBreakItem": {},
          "questionGroupItem": {
            "grid": {
              "columns": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "contentUri": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "shuffleQuestions": true
            },
            "image": {
              "altText": "string",
              "contentUri": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "questions": [
              {
                "choiceQuestion": {
                  "options": [
                    {
                      "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                      "goToSectionId": "string",
                      "image": {
                        "altText": "string",
                        "contentUri": "string",
                        "properties": {
                          "alignment": "ALIGNMENT_UNSPECIFIED",
                          "width": 0
                        },
                        "sourceUri": "string"
                      },
                      "isOther": true,
                      "value": "string"
                    }
                  ],
                  "shuffle": true,
                  "type": "CHOICE_TYPE_UNSPECIFIED"
                },
                "dateQuestion": {
                  "includeTime": true,
                  "includeYear": true
                },
                "fileUploadQuestion": {
                  "folderId": "string",
                  "maxFileSize": "string",
                  "maxFiles": 0,
                  "types": [
                    "FILE_TYPE_UNSPECIFIED"
                  ]
                },
                "grading": {
                  "correctAnswers": {
                    "answers": [
                      {
                        "value": "string"
                      }
                    ]
                  },
                  "generalFeedback": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "pointValue": 0,
                  "whenRight": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "whenWrong": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  }
                },
                "questionId": "string",
                "required": true,
                "rowQuestion": {
                  "title": "string"
                },
                "scaleQuestion": {
                  "high": 0,
                  "highLabel": "string",
                  "low": 0,
                  "lowLabel": "string"
                },
                "textQuestion": {
                  "paragraph": true
                },
                "timeQuestion": {
                  "duration": true
                }
              }
            ]
          },
          "questionItem": {
            "image": {
              "altText": "string",
              "contentUri": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "question": {
              "choiceQuestion": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "contentUri": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "dateQuestion": {
                "includeTime": true,
                "includeYear": true
              },
              "fileUploadQuestion": {
                "folderId": "string",
                "maxFileSize": "string",
                "maxFiles": 0,
                "types": [
                  "FILE_TYPE_UNSPECIFIED"
                ]
              },
              "grading": {
                "correctAnswers": {
                  "answers": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "generalFeedback": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "pointValue": 0,
                "whenRight": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "whenWrong": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                }
              },
              "questionId": "string",
              "required": true,
              "rowQuestion": {
                "title": "string"
              },
              "scaleQuestion": {
                "high": 0,
                "highLabel": "string",
                "low": 0,
                "lowLabel": "string"
              },
              "textQuestion": {
                "paragraph": true
              },
              "timeQuestion": {
                "duration": true
              }
            }
          },
          "textItem": {},
          "title": "string",
          "videoItem": {
            "caption": "string",
            "video": {
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "youtubeUri": "string"
            }
          }
        },
        "location": {
          "index": 0
        }
      },
      "deleteItem": {
        "location": {
          "index": 0
        }
      },
      "moveItem": {
        "newLocation": {
          "index": 0
        },
        "originalLocation": {
          "index": 0
        }
      },
      "updateFormInfo": {
        "info": {
          "description": "string",
          "documentTitle": "string",
          "title": "string"
        },
        "updateMask": "string"
      },
      "updateItem": {
        "item": {
          "description": "string",
          "imageItem": {
            "image": {
              "altText": "string",
              "contentUri": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            }
          },
          "itemId": "string",
          "pageBreakItem": {},
          "questionGroupItem": {
            "grid": {
              "columns": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "contentUri": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "shuffleQuestions": true
            },
            "image": {
              "altText": "string",
              "contentUri": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "questions": [
              {
                "choiceQuestion": {
                  "options": [
                    {
                      "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                      "goToSectionId": "string",
                      "image": {
                        "altText": "string",
                        "contentUri": "string",
                        "properties": {
                          "alignment": "ALIGNMENT_UNSPECIFIED",
                          "width": 0
                        },
                        "sourceUri": "string"
                      },
                      "isOther": true,
                      "value": "string"
                    }
                  ],
                  "shuffle": true,
                  "type": "CHOICE_TYPE_UNSPECIFIED"
                },
                "dateQuestion": {
                  "includeTime": true,
                  "includeYear": true
                },
                "fileUploadQuestion": {
                  "folderId": "string",
                  "maxFileSize": "string",
                  "maxFiles": 0,
                  "types": [
                    "FILE_TYPE_UNSPECIFIED"
                  ]
                },
                "grading": {
                  "correctAnswers": {
                    "answers": [
                      {
                        "value": "string"
                      }
                    ]
                  },
                  "generalFeedback": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "pointValue": 0,
                  "whenRight": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  },
                  "whenWrong": {
                    "material": [
                      {
                        "link": {
                          "displayText": "string",
                          "uri": "string"
                        },
                        "video": {
                          "displayText": "string",
                          "youtubeUri": "string"
                        }
                      }
                    ],
                    "text": "string"
                  }
                },
                "questionId": "string",
                "required": true,
                "rowQuestion": {
                  "title": "string"
                },
                "scaleQuestion": {
                  "high": 0,
                  "highLabel": "string",
                  "low": 0,
                  "lowLabel": "string"
                },
                "textQuestion": {
                  "paragraph": true
                },
                "timeQuestion": {
                  "duration": true
                }
              }
            ]
          },
          "questionItem": {
            "image": {
              "altText": "string",
              "contentUri": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "question": {
              "choiceQuestion": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "contentUri": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "dateQuestion": {
                "includeTime": true,
                "includeYear": true
              },
              "fileUploadQuestion": {
                "folderId": "string",
                "maxFileSize": "string",
                "maxFiles": 0,
                "types": [
                  "FILE_TYPE_UNSPECIFIED"
                ]
              },
              "grading": {
                "correctAnswers": {
                  "answers": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "generalFeedback": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "pointValue": 0,
                "whenRight": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "whenWrong": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                }
              },
              "questionId": "string",
              "required": true,
              "rowQuestion": {
                "title": "string"
              },
              "scaleQuestion": {
                "high": 0,
                "highLabel": "string",
                "low": 0,
                "lowLabel": "string"
              },
              "textQuestion": {
                "paragraph": true
              },
              "timeQuestion": {
                "duration": true
              }
            }
          },
          "textItem": {},
          "title": "string",
          "videoItem": {
            "caption": "string",
            "video": {
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "youtubeUri": "string"
            }
          }
        },
        "location": {
          "index": 0
        },
        "updateMask": "string"
      },
      "updateSettings": {
        "settings": {
          "quizSettings": {
            "isQuiz": true
          }
        },
        "updateMask": "string"
      }
    }
  ],
  "writeControl": {
    "requiredRevisionId": "string",
    "targetRevisionId": "string"
  }
}
```

A batch of updates to perform on a form. All the specified updates are made or none of them are.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeFormInResponse|boolean|false|none|Whether to return an updated version of the model in the response.|
|requests|[[Request](#schemarequest)]|false|none|Required. The update requests of this batch.|
|writeControl|[WriteControl](#schemawritecontrol)|false|none|Provides control over how write requests are executed.|

<h2 id="tocS_BatchUpdateFormResponse">BatchUpdateFormResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateformresponse"></a>
<a id="schema_BatchUpdateFormResponse"></a>
<a id="tocSbatchupdateformresponse"></a>
<a id="tocsbatchupdateformresponse"></a>

```json
{
  "form": {
    "formId": "string",
    "info": {
      "description": "string",
      "documentTitle": "string",
      "title": "string"
    },
    "items": [
      {
        "description": "string",
        "imageItem": {
          "image": {
            "altText": "string",
            "contentUri": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          }
        },
        "itemId": "string",
        "pageBreakItem": {},
        "questionGroupItem": {
          "grid": {
            "columns": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "contentUri": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "shuffleQuestions": true
          },
          "image": {
            "altText": "string",
            "contentUri": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          },
          "questions": [
            {
              "choiceQuestion": {
                "options": [
                  {
                    "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                    "goToSectionId": "string",
                    "image": {
                      "altText": "string",
                      "contentUri": "string",
                      "properties": {
                        "alignment": "ALIGNMENT_UNSPECIFIED",
                        "width": 0
                      },
                      "sourceUri": "string"
                    },
                    "isOther": true,
                    "value": "string"
                  }
                ],
                "shuffle": true,
                "type": "CHOICE_TYPE_UNSPECIFIED"
              },
              "dateQuestion": {
                "includeTime": true,
                "includeYear": true
              },
              "fileUploadQuestion": {
                "folderId": "string",
                "maxFileSize": "string",
                "maxFiles": 0,
                "types": [
                  "FILE_TYPE_UNSPECIFIED"
                ]
              },
              "grading": {
                "correctAnswers": {
                  "answers": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "generalFeedback": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "pointValue": 0,
                "whenRight": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                },
                "whenWrong": {
                  "material": [
                    {
                      "link": {
                        "displayText": "string",
                        "uri": "string"
                      },
                      "video": {
                        "displayText": "string",
                        "youtubeUri": "string"
                      }
                    }
                  ],
                  "text": "string"
                }
              },
              "questionId": "string",
              "required": true,
              "rowQuestion": {
                "title": "string"
              },
              "scaleQuestion": {
                "high": 0,
                "highLabel": "string",
                "low": 0,
                "lowLabel": "string"
              },
              "textQuestion": {
                "paragraph": true
              },
              "timeQuestion": {
                "duration": true
              }
            }
          ]
        },
        "questionItem": {
          "image": {
            "altText": "string",
            "contentUri": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          },
          "question": {
            "choiceQuestion": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "contentUri": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "dateQuestion": {
              "includeTime": true,
              "includeYear": true
            },
            "fileUploadQuestion": {
              "folderId": "string",
              "maxFileSize": "string",
              "maxFiles": 0,
              "types": [
                "FILE_TYPE_UNSPECIFIED"
              ]
            },
            "grading": {
              "correctAnswers": {
                "answers": [
                  {
                    "value": "string"
                  }
                ]
              },
              "generalFeedback": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "pointValue": 0,
              "whenRight": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "whenWrong": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              }
            },
            "questionId": "string",
            "required": true,
            "rowQuestion": {
              "title": "string"
            },
            "scaleQuestion": {
              "high": 0,
              "highLabel": "string",
              "low": 0,
              "lowLabel": "string"
            },
            "textQuestion": {
              "paragraph": true
            },
            "timeQuestion": {
              "duration": true
            }
          }
        },
        "textItem": {},
        "title": "string",
        "videoItem": {
          "caption": "string",
          "video": {
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "youtubeUri": "string"
          }
        }
      }
    ],
    "linkedSheetId": "string",
    "responderUri": "string",
    "revisionId": "string",
    "settings": {
      "quizSettings": {
        "isQuiz": true
      }
    }
  },
  "replies": [
    {
      "createItem": {
        "itemId": "string",
        "questionId": [
          "string"
        ]
      }
    }
  ],
  "writeControl": {
    "requiredRevisionId": "string",
    "targetRevisionId": "string"
  }
}
```

Response to a BatchUpdateFormRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|form|[Form](#schemaform)|false|none|Based on the bool request field `include_form_in_response`, a form with all applied mutations/updates is returned or not. This may be later than the revision ID created by these changes.|
|replies|[[Response](#schemaresponse)]|false|none|The reply of the updates. This maps 1:1 with the update requests, although replies to some requests may be empty.|
|writeControl|[WriteControl](#schemawritecontrol)|false|none|The updated write control after applying the request.|

<h2 id="tocS_ChoiceQuestion">ChoiceQuestion</h2>
<!-- backwards compatibility -->
<a id="schemachoicequestion"></a>
<a id="schema_ChoiceQuestion"></a>
<a id="tocSchoicequestion"></a>
<a id="tocschoicequestion"></a>

```json
{
  "options": [
    {
      "goToAction": "GO_TO_ACTION_UNSPECIFIED",
      "goToSectionId": "string",
      "image": {
        "altText": "string",
        "contentUri": "string",
        "properties": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "width": 0
        },
        "sourceUri": "string"
      },
      "isOther": true,
      "value": "string"
    }
  ],
  "shuffle": true,
  "type": "CHOICE_TYPE_UNSPECIFIED"
}
```

A radio/checkbox/dropdown question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[[Option](#schemaoption)]|false|none|Required. List of options that a respondent must choose from.|
|shuffle|boolean|false|none|Whether the options should be displayed in random order for different instances of the quiz. This is often used to prevent cheating by respondents who might be looking at another respondent's screen, or to address bias in a survey that might be introduced by always putting the same options first or last.|
|type|string|false|none|Required. The type of choice question.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CHOICE_TYPE_UNSPECIFIED|
|type|RADIO|
|type|CHECKBOX|
|type|DROP_DOWN|

<h2 id="tocS_CloudPubsubTopic">CloudPubsubTopic</h2>
<!-- backwards compatibility -->
<a id="schemacloudpubsubtopic"></a>
<a id="schema_CloudPubsubTopic"></a>
<a id="tocScloudpubsubtopic"></a>
<a id="tocscloudpubsubtopic"></a>

```json
{
  "topicName": "string"
}
```

A Pub/Sub topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topicName|string|false|none|Required. A fully qualified Pub/Sub topic name to publish the events to. This topic must be owned by the calling project and already exist in Pub/Sub.|

<h2 id="tocS_CorrectAnswer">CorrectAnswer</h2>
<!-- backwards compatibility -->
<a id="schemacorrectanswer"></a>
<a id="schema_CorrectAnswer"></a>
<a id="tocScorrectanswer"></a>
<a id="tocscorrectanswer"></a>

```json
{
  "value": "string"
}
```

A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|Required. The correct answer value. See the documentation for TextAnswer.value for details on how various value types are formatted.|

<h2 id="tocS_CorrectAnswers">CorrectAnswers</h2>
<!-- backwards compatibility -->
<a id="schemacorrectanswers"></a>
<a id="schema_CorrectAnswers"></a>
<a id="tocScorrectanswers"></a>
<a id="tocscorrectanswers"></a>

```json
{
  "answers": [
    {
      "value": "string"
    }
  ]
}
```

The answer key for a question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers|[[CorrectAnswer](#schemacorrectanswer)]|false|none|A list of correct answers. A quiz response can be automatically graded based on these answers. For single-valued questions, a response is marked correct if it matches any value in this list (in other words, multiple correct answers are possible). For multiple-valued (`CHECKBOX`) questions, a response is marked correct if it contains exactly the values in this list.|

<h2 id="tocS_CreateItemRequest">CreateItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateitemrequest"></a>
<a id="schema_CreateItemRequest"></a>
<a id="tocScreateitemrequest"></a>
<a id="tocscreateitemrequest"></a>

```json
{
  "item": {
    "description": "string",
    "imageItem": {
      "image": {
        "altText": "string",
        "contentUri": "string",
        "properties": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "width": 0
        },
        "sourceUri": "string"
      }
    },
    "itemId": "string",
    "pageBreakItem": {},
    "questionGroupItem": {
      "grid": {
        "columns": {
          "options": [
            {
              "goToAction": "GO_TO_ACTION_UNSPECIFIED",
              "goToSectionId": "string",
              "image": {
                "altText": "string",
                "contentUri": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              },
              "isOther": true,
              "value": "string"
            }
          ],
          "shuffle": true,
          "type": "CHOICE_TYPE_UNSPECIFIED"
        },
        "shuffleQuestions": true
      },
      "image": {
        "altText": "string",
        "contentUri": "string",
        "properties": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "width": 0
        },
        "sourceUri": "string"
      },
      "questions": [
        {
          "choiceQuestion": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "dateQuestion": {
            "includeTime": true,
            "includeYear": true
          },
          "fileUploadQuestion": {
            "folderId": "string",
            "maxFileSize": "string",
            "maxFiles": 0,
            "types": [
              "FILE_TYPE_UNSPECIFIED"
            ]
          },
          "grading": {
            "correctAnswers": {
              "answers": [
                {
                  "value": "string"
                }
              ]
            },
            "generalFeedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "pointValue": 0,
            "whenRight": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "whenWrong": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            }
          },
          "questionId": "string",
          "required": true,
          "rowQuestion": {
            "title": "string"
          },
          "scaleQuestion": {
            "high": 0,
            "highLabel": "string",
            "low": 0,
            "lowLabel": "string"
          },
          "textQuestion": {
            "paragraph": true
          },
          "timeQuestion": {
            "duration": true
          }
        }
      ]
    },
    "questionItem": {
      "image": {
        "altText": "string",
        "contentUri": "string",
        "properties": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "width": 0
        },
        "sourceUri": "string"
      },
      "question": {
        "choiceQuestion": {
          "options": [
            {
              "goToAction": "GO_TO_ACTION_UNSPECIFIED",
              "goToSectionId": "string",
              "image": {
                "altText": "string",
                "contentUri": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              },
              "isOther": true,
              "value": "string"
            }
          ],
          "shuffle": true,
          "type": "CHOICE_TYPE_UNSPECIFIED"
        },
        "dateQuestion": {
          "includeTime": true,
          "includeYear": true
        },
        "fileUploadQuestion": {
          "folderId": "string",
          "maxFileSize": "string",
          "maxFiles": 0,
          "types": [
            "FILE_TYPE_UNSPECIFIED"
          ]
        },
        "grading": {
          "correctAnswers": {
            "answers": [
              {
                "value": "string"
              }
            ]
          },
          "generalFeedback": {
            "material": [
              {
                "link": {
                  "displayText": "string",
                  "uri": "string"
                },
                "video": {
                  "displayText": "string",
                  "youtubeUri": "string"
                }
              }
            ],
            "text": "string"
          },
          "pointValue": 0,
          "whenRight": {
            "material": [
              {
                "link": {
                  "displayText": "string",
                  "uri": "string"
                },
                "video": {
                  "displayText": "string",
                  "youtubeUri": "string"
                }
              }
            ],
            "text": "string"
          },
          "whenWrong": {
            "material": [
              {
                "link": {
                  "displayText": "string",
                  "uri": "string"
                },
                "video": {
                  "displayText": "string",
                  "youtubeUri": "string"
                }
              }
            ],
            "text": "string"
          }
        },
        "questionId": "string",
        "required": true,
        "rowQuestion": {
          "title": "string"
        },
        "scaleQuestion": {
          "high": 0,
          "highLabel": "string",
          "low": 0,
          "lowLabel": "string"
        },
        "textQuestion": {
          "paragraph": true
        },
        "timeQuestion": {
          "duration": true
        }
      }
    },
    "textItem": {},
    "title": "string",
    "videoItem": {
      "caption": "string",
      "video": {
        "properties": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "width": 0
        },
        "youtubeUri": "string"
      }
    }
  },
  "location": {
    "index": 0
  }
}
```

Create an item in a form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[Item](#schemaitem)|false|none|Required. The item to create.|
|location|[Location](#schemalocation)|false|none|Required. Where to place the new item.|

<h2 id="tocS_CreateItemResponse">CreateItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateitemresponse"></a>
<a id="schema_CreateItemResponse"></a>
<a id="tocScreateitemresponse"></a>
<a id="tocscreateitemresponse"></a>

```json
{
  "itemId": "string",
  "questionId": [
    "string"
  ]
}
```

The result of creating an item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemId|string|false|none|The ID of the created item.|
|questionId|[string]|false|none|The ID of the question created as part of this item, for a question group it lists IDs of all the questions created for this item.|

<h2 id="tocS_CreateWatchRequest">CreateWatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewatchrequest"></a>
<a id="schema_CreateWatchRequest"></a>
<a id="tocScreatewatchrequest"></a>
<a id="tocscreatewatchrequest"></a>

```json
{
  "watch": {
    "createTime": "string",
    "errorType": "ERROR_TYPE_UNSPECIFIED",
    "eventType": "EVENT_TYPE_UNSPECIFIED",
    "expireTime": "string",
    "id": "string",
    "state": "STATE_UNSPECIFIED",
    "target": {
      "topic": {
        "topicName": "string"
      }
    }
  },
  "watchId": "string"
}
```

Create a new watch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|watch|[Watch](#schemawatch)|false|none|Required. The watch object. No ID should be set on this object; use `watch_id` instead.|
|watchId|string|false|none|The ID to use for the watch. If specified, the ID must not already be in use. If not specified, an ID is generated. This value should be 4-63 characters, and valid characters are /a-z-/.|

<h2 id="tocS_DateQuestion">DateQuestion</h2>
<!-- backwards compatibility -->
<a id="schemadatequestion"></a>
<a id="schema_DateQuestion"></a>
<a id="tocSdatequestion"></a>
<a id="tocsdatequestion"></a>

```json
{
  "includeTime": true,
  "includeYear": true
}
```

A date question. Date questions default to just month + day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeTime|boolean|false|none|Whether to include the time as part of the question.|
|includeYear|boolean|false|none|Whether to include the year as part of the question.|

<h2 id="tocS_DeleteItemRequest">DeleteItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteitemrequest"></a>
<a id="schema_DeleteItemRequest"></a>
<a id="tocSdeleteitemrequest"></a>
<a id="tocsdeleteitemrequest"></a>

```json
{
  "location": {
    "index": 0
  }
}
```

Delete an item in a form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[Location](#schemalocation)|false|none|Required. The location of the item to delete.|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_ExtraMaterial">ExtraMaterial</h2>
<!-- backwards compatibility -->
<a id="schemaextramaterial"></a>
<a id="schema_ExtraMaterial"></a>
<a id="tocSextramaterial"></a>
<a id="tocsextramaterial"></a>

```json
{
  "link": {
    "displayText": "string",
    "uri": "string"
  },
  "video": {
    "displayText": "string",
    "youtubeUri": "string"
  }
}
```

Supplementary material to the feedback.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|[TextLink](#schematextlink)|false|none|Text feedback.|
|video|[VideoLink](#schemavideolink)|false|none|Video feedback.|

<h2 id="tocS_Feedback">Feedback</h2>
<!-- backwards compatibility -->
<a id="schemafeedback"></a>
<a id="schema_Feedback"></a>
<a id="tocSfeedback"></a>
<a id="tocsfeedback"></a>

```json
{
  "material": [
    {
      "link": {
        "displayText": "string",
        "uri": "string"
      },
      "video": {
        "displayText": "string",
        "youtubeUri": "string"
      }
    }
  ],
  "text": "string"
}
```

Feedback for a respondent about their response to a question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|material|[[ExtraMaterial](#schemaextramaterial)]|false|none|Additional information provided as part of the feedback, often used to point the respondent to more reading and resources.|
|text|string|false|none|Required. The main text of the feedback.|

<h2 id="tocS_FileUploadAnswer">FileUploadAnswer</h2>
<!-- backwards compatibility -->
<a id="schemafileuploadanswer"></a>
<a id="schema_FileUploadAnswer"></a>
<a id="tocSfileuploadanswer"></a>
<a id="tocsfileuploadanswer"></a>

```json
{
  "fileId": "string",
  "fileName": "string",
  "mimeType": "string"
}
```

Info for a single file submitted to a file upload question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|string|false|read-only|Output only. The ID of the Google Drive file.|
|fileName|string|false|read-only|Output only. The file name, as stored in Google Drive on upload.|
|mimeType|string|false|read-only|Output only. The MIME type of the file, as stored in Google Drive on upload.|

<h2 id="tocS_FileUploadAnswers">FileUploadAnswers</h2>
<!-- backwards compatibility -->
<a id="schemafileuploadanswers"></a>
<a id="schema_FileUploadAnswers"></a>
<a id="tocSfileuploadanswers"></a>
<a id="tocsfileuploadanswers"></a>

```json
{
  "answers": [
    {
      "fileId": "string",
      "fileName": "string",
      "mimeType": "string"
    }
  ]
}
```

All submitted files for a FileUpload question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers|[[FileUploadAnswer](#schemafileuploadanswer)]|false|read-only|Output only. All submitted files for a FileUpload question.|

<h2 id="tocS_FileUploadQuestion">FileUploadQuestion</h2>
<!-- backwards compatibility -->
<a id="schemafileuploadquestion"></a>
<a id="schema_FileUploadQuestion"></a>
<a id="tocSfileuploadquestion"></a>
<a id="tocsfileuploadquestion"></a>

```json
{
  "folderId": "string",
  "maxFileSize": "string",
  "maxFiles": 0,
  "types": [
    "FILE_TYPE_UNSPECIFIED"
  ]
}
```

A file upload question. The API currently does not support creating file upload questions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folderId|string|false|none|Required. The ID of the Drive folder where uploaded files are stored.|
|maxFileSize|string(int64)|false|none|Maximum number of bytes allowed for any single file uploaded to this question.|
|maxFiles|integer(int32)|false|none|Maximum number of files that can be uploaded for this question in a single response.|
|types|[string]|false|none|File types accepted by this question.|

#### Enumerated Values

|Property|Value|
|---|---|
|types|FILE_TYPE_UNSPECIFIED|
|types|ANY|
|types|DOCUMENT|
|types|PRESENTATION|
|types|SPREADSHEET|
|types|DRAWING|
|types|PDF|
|types|IMAGE|
|types|VIDEO|
|types|AUDIO|

<h2 id="tocS_Form">Form</h2>
<!-- backwards compatibility -->
<a id="schemaform"></a>
<a id="schema_Form"></a>
<a id="tocSform"></a>
<a id="tocsform"></a>

```json
{
  "formId": "string",
  "info": {
    "description": "string",
    "documentTitle": "string",
    "title": "string"
  },
  "items": [
    {
      "description": "string",
      "imageItem": {
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        }
      },
      "itemId": "string",
      "pageBreakItem": {},
      "questionGroupItem": {
        "grid": {
          "columns": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "shuffleQuestions": true
        },
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "questions": [
          {
            "choiceQuestion": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "contentUri": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "dateQuestion": {
              "includeTime": true,
              "includeYear": true
            },
            "fileUploadQuestion": {
              "folderId": "string",
              "maxFileSize": "string",
              "maxFiles": 0,
              "types": [
                "FILE_TYPE_UNSPECIFIED"
              ]
            },
            "grading": {
              "correctAnswers": {
                "answers": [
                  {
                    "value": "string"
                  }
                ]
              },
              "generalFeedback": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "pointValue": 0,
              "whenRight": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "whenWrong": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              }
            },
            "questionId": "string",
            "required": true,
            "rowQuestion": {
              "title": "string"
            },
            "scaleQuestion": {
              "high": 0,
              "highLabel": "string",
              "low": 0,
              "lowLabel": "string"
            },
            "textQuestion": {
              "paragraph": true
            },
            "timeQuestion": {
              "duration": true
            }
          }
        ]
      },
      "questionItem": {
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "question": {
          "choiceQuestion": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "dateQuestion": {
            "includeTime": true,
            "includeYear": true
          },
          "fileUploadQuestion": {
            "folderId": "string",
            "maxFileSize": "string",
            "maxFiles": 0,
            "types": [
              "FILE_TYPE_UNSPECIFIED"
            ]
          },
          "grading": {
            "correctAnswers": {
              "answers": [
                {
                  "value": "string"
                }
              ]
            },
            "generalFeedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "pointValue": 0,
            "whenRight": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "whenWrong": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            }
          },
          "questionId": "string",
          "required": true,
          "rowQuestion": {
            "title": "string"
          },
          "scaleQuestion": {
            "high": 0,
            "highLabel": "string",
            "low": 0,
            "lowLabel": "string"
          },
          "textQuestion": {
            "paragraph": true
          },
          "timeQuestion": {
            "duration": true
          }
        }
      },
      "textItem": {},
      "title": "string",
      "videoItem": {
        "caption": "string",
        "video": {
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "youtubeUri": "string"
        }
      }
    }
  ],
  "linkedSheetId": "string",
  "responderUri": "string",
  "revisionId": "string",
  "settings": {
    "quizSettings": {
      "isQuiz": true
    }
  }
}
```

A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formId|string|false|read-only|Output only. The form ID.|
|info|[Info](#schemainfo)|false|none|Required. The title and description of the form.|
|items|[[Item](#schemaitem)]|false|none|Required. A list of the form's items, which can include section headers, questions, embedded media, etc.|
|linkedSheetId|string|false|read-only|Output only. The ID of the linked Google Sheet which is accumulating responses from this Form (if such a Sheet exists).|
|responderUri|string|false|read-only|Output only. The form URI to share with responders. This opens a page that allows the user to submit responses but not edit the questions.|
|revisionId|string|false|read-only|Output only. The revision ID of the form. Used in the WriteControl in update requests to identify the revision on which the changes are based. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the form has not changed. Conversely, a changed ID (for the same form and user) usually means the form has been updated; however, a changed ID can also be due to internal factors such as ID format changes.|
|settings|[FormSettings](#schemaformsettings)|false|none|The form's settings. This must be updated with UpdateSettingsRequest; it is ignored during `forms.create` and UpdateFormInfoRequest.|

<h2 id="tocS_FormResponse">FormResponse</h2>
<!-- backwards compatibility -->
<a id="schemaformresponse"></a>
<a id="schema_FormResponse"></a>
<a id="tocSformresponse"></a>
<a id="tocsformresponse"></a>

```json
{
  "answers": {
    "property1": {
      "fileUploadAnswers": {
        "answers": [
          {
            "fileId": "string",
            "fileName": "string",
            "mimeType": "string"
          }
        ]
      },
      "grade": {
        "correct": true,
        "feedback": {
          "material": [
            {
              "link": {
                "displayText": "string",
                "uri": "string"
              },
              "video": {
                "displayText": "string",
                "youtubeUri": "string"
              }
            }
          ],
          "text": "string"
        },
        "score": 0
      },
      "questionId": "string",
      "textAnswers": {
        "answers": [
          {
            "value": "string"
          }
        ]
      }
    },
    "property2": {
      "fileUploadAnswers": {
        "answers": [
          {
            "fileId": "string",
            "fileName": "string",
            "mimeType": "string"
          }
        ]
      },
      "grade": {
        "correct": true,
        "feedback": {
          "material": [
            {
              "link": {
                "displayText": "string",
                "uri": "string"
              },
              "video": {
                "displayText": "string",
                "youtubeUri": "string"
              }
            }
          ],
          "text": "string"
        },
        "score": 0
      },
      "questionId": "string",
      "textAnswers": {
        "answers": [
          {
            "value": "string"
          }
        ]
      }
    }
  },
  "createTime": "string",
  "formId": "string",
  "lastSubmittedTime": "string",
  "respondentEmail": "string",
  "responseId": "string",
  "totalScore": 0
}
```

A form response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers|object|false|read-only|Output only. The actual answers to the questions, keyed by question_id.|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp for the first time the response was submitted.|
|formId|string|false|read-only|Output only. The form ID.|
|lastSubmittedTime|string(google-datetime)|false|read-only|Output only. Timestamp for the most recent time the response was submitted. Does not track changes to grades.|
|respondentEmail|string|false|read-only|Output only. The email address (if collected) for the respondent.|
|responseId|string|false|read-only|Output only. The response ID.|
|totalScore|number(double)|false|read-only|Output only. The total number of points the respondent received for their submission Only set if the form was a quiz and the response was graded. This includes points automatically awarded via autograding adjusted by any manual corrections entered by the form owner.|

<h2 id="tocS_FormSettings">FormSettings</h2>
<!-- backwards compatibility -->
<a id="schemaformsettings"></a>
<a id="schema_FormSettings"></a>
<a id="tocSformsettings"></a>
<a id="tocsformsettings"></a>

```json
{
  "quizSettings": {
    "isQuiz": true
  }
}
```

A form's settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quizSettings|[QuizSettings](#schemaquizsettings)|false|none|Settings related to quiz forms and grading.|

<h2 id="tocS_Grade">Grade</h2>
<!-- backwards compatibility -->
<a id="schemagrade"></a>
<a id="schema_Grade"></a>
<a id="tocSgrade"></a>
<a id="tocsgrade"></a>

```json
{
  "correct": true,
  "feedback": {
    "material": [
      {
        "link": {
          "displayText": "string",
          "uri": "string"
        },
        "video": {
          "displayText": "string",
          "youtubeUri": "string"
        }
      }
    ],
    "text": "string"
  },
  "score": 0
}
```

Grade information associated with a respondent's answer to a question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correct|boolean|false|read-only|Output only. Whether the question was answered correctly or not. A zero-point score is not enough to infer incorrectness, since a correctly answered question could be worth zero points.|
|feedback|[Feedback](#schemafeedback)|false|none|Output only. Additional feedback given for an answer.|
|score|number(double)|false|read-only|Output only. The numeric score awarded for the answer.|

<h2 id="tocS_Grading">Grading</h2>
<!-- backwards compatibility -->
<a id="schemagrading"></a>
<a id="schema_Grading"></a>
<a id="tocSgrading"></a>
<a id="tocsgrading"></a>

```json
{
  "correctAnswers": {
    "answers": [
      {
        "value": "string"
      }
    ]
  },
  "generalFeedback": {
    "material": [
      {
        "link": {
          "displayText": "string",
          "uri": "string"
        },
        "video": {
          "displayText": "string",
          "youtubeUri": "string"
        }
      }
    ],
    "text": "string"
  },
  "pointValue": 0,
  "whenRight": {
    "material": [
      {
        "link": {
          "displayText": "string",
          "uri": "string"
        },
        "video": {
          "displayText": "string",
          "youtubeUri": "string"
        }
      }
    ],
    "text": "string"
  },
  "whenWrong": {
    "material": [
      {
        "link": {
          "displayText": "string",
          "uri": "string"
        },
        "video": {
          "displayText": "string",
          "youtubeUri": "string"
        }
      }
    ],
    "text": "string"
  }
}
```

Grading for a single question

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correctAnswers|[CorrectAnswers](#schemacorrectanswers)|false|none|Required. The answer key for the question. Responses are automatically graded based on this field.|
|generalFeedback|[Feedback](#schemafeedback)|false|none|The feedback displayed for all answers. This is commonly used for short answer questions when a quiz owner wants to quickly give respondents some sense of whether they answered the question correctly before they've had a chance to officially grade the response. General feedback cannot be set for automatically graded multiple choice questions.|
|pointValue|integer(int32)|false|none|Required. The maximum number of points a respondent can automatically get for a correct answer. This must not be negative.|
|whenRight|[Feedback](#schemafeedback)|false|none|The feedback displayed for correct responses. This feedback can only be set for multiple choice questions that have correct answers provided.|
|whenWrong|[Feedback](#schemafeedback)|false|none|The feedback displayed for incorrect responses. This feedback can only be set for multiple choice questions that have correct answers provided.|

<h2 id="tocS_Grid">Grid</h2>
<!-- backwards compatibility -->
<a id="schemagrid"></a>
<a id="schema_Grid"></a>
<a id="tocSgrid"></a>
<a id="tocsgrid"></a>

```json
{
  "columns": {
    "options": [
      {
        "goToAction": "GO_TO_ACTION_UNSPECIFIED",
        "goToSectionId": "string",
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "isOther": true,
        "value": "string"
      }
    ],
    "shuffle": true,
    "type": "CHOICE_TYPE_UNSPECIFIED"
  },
  "shuffleQuestions": true
}
```

A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[ChoiceQuestion](#schemachoicequestion)|false|none|Required. The choices shared by each question in the grid. In other words, the values of the columns. Only `CHECK_BOX` and `RADIO` choices are allowed.|
|shuffleQuestions|boolean|false|none|If `true`, the questions are randomly ordered. In other words, the rows appear in a different order for every respondent.|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "altText": "string",
  "contentUri": "string",
  "properties": {
    "alignment": "ALIGNMENT_UNSPECIFIED",
    "width": 0
  },
  "sourceUri": "string"
}
```

Data representing an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altText|string|false|none|A description of the image that is shown on hover and read by screenreaders.|
|contentUri|string|false|read-only|Output only. A URI from which you can download the image; this is valid only for a limited time.|
|properties|[MediaProperties](#schemamediaproperties)|false|none|Properties of an image.|
|sourceUri|string|false|none|Input only. The source URI is the URI used to insert the image. The source URI can be empty when fetched.|

<h2 id="tocS_ImageItem">ImageItem</h2>
<!-- backwards compatibility -->
<a id="schemaimageitem"></a>
<a id="schema_ImageItem"></a>
<a id="tocSimageitem"></a>
<a id="tocsimageitem"></a>

```json
{
  "image": {
    "altText": "string",
    "contentUri": "string",
    "properties": {
      "alignment": "ALIGNMENT_UNSPECIFIED",
      "width": 0
    },
    "sourceUri": "string"
  }
}
```

An item containing an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|[Image](#schemaimage)|false|none|Required. The image displayed in the item.|

<h2 id="tocS_Info">Info</h2>
<!-- backwards compatibility -->
<a id="schemainfo"></a>
<a id="schema_Info"></a>
<a id="tocSinfo"></a>
<a id="tocsinfo"></a>

```json
{
  "description": "string",
  "documentTitle": "string",
  "title": "string"
}
```

The general information for a form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the form.|
|documentTitle|string|false|read-only|Output only. The title of the document which is visible in Drive. If `Info.title` is empty, `document_title` may appear in its place in the Google Forms UI and be visible to responders. `document_title` can be set on create, but cannot be modified by a batchUpdate request. Please use the [Google Drive API](https://developers.google.com/drive/api/v3/reference/files/update) if you need to programmatically update `document_title`.|
|title|string|false|none|Required. The title of the form which is visible to responders.|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "description": "string",
  "imageItem": {
    "image": {
      "altText": "string",
      "contentUri": "string",
      "properties": {
        "alignment": "ALIGNMENT_UNSPECIFIED",
        "width": 0
      },
      "sourceUri": "string"
    }
  },
  "itemId": "string",
  "pageBreakItem": {},
  "questionGroupItem": {
    "grid": {
      "columns": {
        "options": [
          {
            "goToAction": "GO_TO_ACTION_UNSPECIFIED",
            "goToSectionId": "string",
            "image": {
              "altText": "string",
              "contentUri": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "isOther": true,
            "value": "string"
          }
        ],
        "shuffle": true,
        "type": "CHOICE_TYPE_UNSPECIFIED"
      },
      "shuffleQuestions": true
    },
    "image": {
      "altText": "string",
      "contentUri": "string",
      "properties": {
        "alignment": "ALIGNMENT_UNSPECIFIED",
        "width": 0
      },
      "sourceUri": "string"
    },
    "questions": [
      {
        "choiceQuestion": {
          "options": [
            {
              "goToAction": "GO_TO_ACTION_UNSPECIFIED",
              "goToSectionId": "string",
              "image": {
                "altText": "string",
                "contentUri": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              },
              "isOther": true,
              "value": "string"
            }
          ],
          "shuffle": true,
          "type": "CHOICE_TYPE_UNSPECIFIED"
        },
        "dateQuestion": {
          "includeTime": true,
          "includeYear": true
        },
        "fileUploadQuestion": {
          "folderId": "string",
          "maxFileSize": "string",
          "maxFiles": 0,
          "types": [
            "FILE_TYPE_UNSPECIFIED"
          ]
        },
        "grading": {
          "correctAnswers": {
            "answers": [
              {
                "value": "string"
              }
            ]
          },
          "generalFeedback": {
            "material": [
              {
                "link": {
                  "displayText": "string",
                  "uri": "string"
                },
                "video": {
                  "displayText": "string",
                  "youtubeUri": "string"
                }
              }
            ],
            "text": "string"
          },
          "pointValue": 0,
          "whenRight": {
            "material": [
              {
                "link": {
                  "displayText": "string",
                  "uri": "string"
                },
                "video": {
                  "displayText": "string",
                  "youtubeUri": "string"
                }
              }
            ],
            "text": "string"
          },
          "whenWrong": {
            "material": [
              {
                "link": {
                  "displayText": "string",
                  "uri": "string"
                },
                "video": {
                  "displayText": "string",
                  "youtubeUri": "string"
                }
              }
            ],
            "text": "string"
          }
        },
        "questionId": "string",
        "required": true,
        "rowQuestion": {
          "title": "string"
        },
        "scaleQuestion": {
          "high": 0,
          "highLabel": "string",
          "low": 0,
          "lowLabel": "string"
        },
        "textQuestion": {
          "paragraph": true
        },
        "timeQuestion": {
          "duration": true
        }
      }
    ]
  },
  "questionItem": {
    "image": {
      "altText": "string",
      "contentUri": "string",
      "properties": {
        "alignment": "ALIGNMENT_UNSPECIFIED",
        "width": 0
      },
      "sourceUri": "string"
    },
    "question": {
      "choiceQuestion": {
        "options": [
          {
            "goToAction": "GO_TO_ACTION_UNSPECIFIED",
            "goToSectionId": "string",
            "image": {
              "altText": "string",
              "contentUri": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "isOther": true,
            "value": "string"
          }
        ],
        "shuffle": true,
        "type": "CHOICE_TYPE_UNSPECIFIED"
      },
      "dateQuestion": {
        "includeTime": true,
        "includeYear": true
      },
      "fileUploadQuestion": {
        "folderId": "string",
        "maxFileSize": "string",
        "maxFiles": 0,
        "types": [
          "FILE_TYPE_UNSPECIFIED"
        ]
      },
      "grading": {
        "correctAnswers": {
          "answers": [
            {
              "value": "string"
            }
          ]
        },
        "generalFeedback": {
          "material": [
            {
              "link": {
                "displayText": "string",
                "uri": "string"
              },
              "video": {
                "displayText": "string",
                "youtubeUri": "string"
              }
            }
          ],
          "text": "string"
        },
        "pointValue": 0,
        "whenRight": {
          "material": [
            {
              "link": {
                "displayText": "string",
                "uri": "string"
              },
              "video": {
                "displayText": "string",
                "youtubeUri": "string"
              }
            }
          ],
          "text": "string"
        },
        "whenWrong": {
          "material": [
            {
              "link": {
                "displayText": "string",
                "uri": "string"
              },
              "video": {
                "displayText": "string",
                "youtubeUri": "string"
              }
            }
          ],
          "text": "string"
        }
      },
      "questionId": "string",
      "required": true,
      "rowQuestion": {
        "title": "string"
      },
      "scaleQuestion": {
        "high": 0,
        "highLabel": "string",
        "low": 0,
        "lowLabel": "string"
      },
      "textQuestion": {
        "paragraph": true
      },
      "timeQuestion": {
        "duration": true
      }
    }
  },
  "textItem": {},
  "title": "string",
  "videoItem": {
    "caption": "string",
    "video": {
      "properties": {
        "alignment": "ALIGNMENT_UNSPECIFIED",
        "width": 0
      },
      "youtubeUri": "string"
    }
  }
}
```

A single item of the form. `kind` defines which kind of item it is.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the item.|
|imageItem|[ImageItem](#schemaimageitem)|false|none|Displays an image on the page.|
|itemId|string|false|none|The item ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.|
|pageBreakItem|[PageBreakItem](#schemapagebreakitem)|false|none|Starts a new page with a title.|
|questionGroupItem|[QuestionGroupItem](#schemaquestiongroupitem)|false|none|Poses one or more questions to the user with a single major prompt.|
|questionItem|[QuestionItem](#schemaquestionitem)|false|none|Poses a question to the user.|
|textItem|[TextItem](#schematextitem)|false|none|Displays a title and description on the page.|
|title|string|false|none|The title of the item.|
|videoItem|[VideoItem](#schemavideoitem)|false|none|Displays a video on the page.|

<h2 id="tocS_ListFormResponsesResponse">ListFormResponsesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistformresponsesresponse"></a>
<a id="schema_ListFormResponsesResponse"></a>
<a id="tocSlistformresponsesresponse"></a>
<a id="tocslistformresponsesresponse"></a>

```json
{
  "nextPageToken": "string",
  "responses": [
    {
      "answers": {
        "property1": {
          "fileUploadAnswers": {
            "answers": [
              {
                "fileId": "string",
                "fileName": "string",
                "mimeType": "string"
              }
            ]
          },
          "grade": {
            "correct": true,
            "feedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "score": 0
          },
          "questionId": "string",
          "textAnswers": {
            "answers": [
              {
                "value": "string"
              }
            ]
          }
        },
        "property2": {
          "fileUploadAnswers": {
            "answers": [
              {
                "fileId": "string",
                "fileName": "string",
                "mimeType": "string"
              }
            ]
          },
          "grade": {
            "correct": true,
            "feedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "score": 0
          },
          "questionId": "string",
          "textAnswers": {
            "answers": [
              {
                "value": "string"
              }
            ]
          }
        }
      },
      "createTime": "string",
      "formId": "string",
      "lastSubmittedTime": "string",
      "respondentEmail": "string",
      "responseId": "string",
      "totalScore": 0
    }
  ]
}
```

Response to a ListFormResponsesRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If set, there are more responses. To get the next page of responses, provide this as `page_token` in a future request.|
|responses|[[FormResponse](#schemaformresponse)]|false|none|The returned form responses. Note: The `formId` field is not returned in the `FormResponse` object for list requests.|

<h2 id="tocS_ListWatchesResponse">ListWatchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwatchesresponse"></a>
<a id="schema_ListWatchesResponse"></a>
<a id="tocSlistwatchesresponse"></a>
<a id="tocslistwatchesresponse"></a>

```json
{
  "watches": [
    {
      "createTime": "string",
      "errorType": "ERROR_TYPE_UNSPECIFIED",
      "eventType": "EVENT_TYPE_UNSPECIFIED",
      "expireTime": "string",
      "id": "string",
      "state": "STATE_UNSPECIFIED",
      "target": {
        "topic": {
          "topicName": "string"
        }
      }
    }
  ]
}
```

The response of a ListWatchesRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|watches|[[Watch](#schemawatch)]|false|none|The returned watches.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "index": 0
}
```

A specific location in a form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|The index of an item in the form. This must be in the range [0..*N*), where *N* is the number of items in the form.|

<h2 id="tocS_MediaProperties">MediaProperties</h2>
<!-- backwards compatibility -->
<a id="schemamediaproperties"></a>
<a id="schema_MediaProperties"></a>
<a id="tocSmediaproperties"></a>
<a id="tocsmediaproperties"></a>

```json
{
  "alignment": "ALIGNMENT_UNSPECIFIED",
  "width": 0
}
```

Properties of the media.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alignment|string|false|none|Position of the media.|
|width|integer(int32)|false|none|The width of the media in pixels. When the media is displayed, it is scaled to the smaller of this value or the width of the displayed form. The original aspect ratio of the media is preserved. If a width is not specified when the media is added to the form, it is set to the width of the media source. Width must be between 0 and 740, inclusive. Setting width to 0 or unspecified is only permitted when updating the media source.|

#### Enumerated Values

|Property|Value|
|---|---|
|alignment|ALIGNMENT_UNSPECIFIED|
|alignment|LEFT|
|alignment|RIGHT|
|alignment|CENTER|

<h2 id="tocS_MoveItemRequest">MoveItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemamoveitemrequest"></a>
<a id="schema_MoveItemRequest"></a>
<a id="tocSmoveitemrequest"></a>
<a id="tocsmoveitemrequest"></a>

```json
{
  "newLocation": {
    "index": 0
  },
  "originalLocation": {
    "index": 0
  }
}
```

Move an item in a form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newLocation|[Location](#schemalocation)|false|none|Required. The new location for the item.|
|originalLocation|[Location](#schemalocation)|false|none|Required. The location of the item to move.|

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
{
  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
  "goToSectionId": "string",
  "image": {
    "altText": "string",
    "contentUri": "string",
    "properties": {
      "alignment": "ALIGNMENT_UNSPECIFIED",
      "width": 0
    },
    "sourceUri": "string"
  },
  "isOther": true,
  "value": "string"
}
```

An option for a Choice question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|goToAction|string|false|none|Section navigation type.|
|goToSectionId|string|false|none|Item ID of section header to go to.|
|image|[Image](#schemaimage)|false|none|Display image as an option.|
|isOther|boolean|false|none|Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types, but is not allowed in a QuestionGroupItem.|
|value|string|false|none|Required. The choice as presented to the user.|

#### Enumerated Values

|Property|Value|
|---|---|
|goToAction|GO_TO_ACTION_UNSPECIFIED|
|goToAction|NEXT_SECTION|
|goToAction|RESTART_FORM|
|goToAction|SUBMIT_FORM|

<h2 id="tocS_PageBreakItem">PageBreakItem</h2>
<!-- backwards compatibility -->
<a id="schemapagebreakitem"></a>
<a id="schema_PageBreakItem"></a>
<a id="tocSpagebreakitem"></a>
<a id="tocspagebreakitem"></a>

```json
{}
```

A page break. The title and description of this item are shown at the top of the new page.

<h2 id="tocS_Question">Question</h2>
<!-- backwards compatibility -->
<a id="schemaquestion"></a>
<a id="schema_Question"></a>
<a id="tocSquestion"></a>
<a id="tocsquestion"></a>

```json
{
  "choiceQuestion": {
    "options": [
      {
        "goToAction": "GO_TO_ACTION_UNSPECIFIED",
        "goToSectionId": "string",
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "isOther": true,
        "value": "string"
      }
    ],
    "shuffle": true,
    "type": "CHOICE_TYPE_UNSPECIFIED"
  },
  "dateQuestion": {
    "includeTime": true,
    "includeYear": true
  },
  "fileUploadQuestion": {
    "folderId": "string",
    "maxFileSize": "string",
    "maxFiles": 0,
    "types": [
      "FILE_TYPE_UNSPECIFIED"
    ]
  },
  "grading": {
    "correctAnswers": {
      "answers": [
        {
          "value": "string"
        }
      ]
    },
    "generalFeedback": {
      "material": [
        {
          "link": {
            "displayText": "string",
            "uri": "string"
          },
          "video": {
            "displayText": "string",
            "youtubeUri": "string"
          }
        }
      ],
      "text": "string"
    },
    "pointValue": 0,
    "whenRight": {
      "material": [
        {
          "link": {
            "displayText": "string",
            "uri": "string"
          },
          "video": {
            "displayText": "string",
            "youtubeUri": "string"
          }
        }
      ],
      "text": "string"
    },
    "whenWrong": {
      "material": [
        {
          "link": {
            "displayText": "string",
            "uri": "string"
          },
          "video": {
            "displayText": "string",
            "youtubeUri": "string"
          }
        }
      ],
      "text": "string"
    }
  },
  "questionId": "string",
  "required": true,
  "rowQuestion": {
    "title": "string"
  },
  "scaleQuestion": {
    "high": 0,
    "highLabel": "string",
    "low": 0,
    "lowLabel": "string"
  },
  "textQuestion": {
    "paragraph": true
  },
  "timeQuestion": {
    "duration": true
  }
}
```

Any question. The specific type of question is known by its `kind`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choiceQuestion|[ChoiceQuestion](#schemachoicequestion)|false|none|A respondent can choose from a pre-defined set of options.|
|dateQuestion|[DateQuestion](#schemadatequestion)|false|none|A respondent can enter a date.|
|fileUploadQuestion|[FileUploadQuestion](#schemafileuploadquestion)|false|none|A respondent can upload one or more files.|
|grading|[Grading](#schemagrading)|false|none|Grading setup for the question.|
|questionId|string|false|none|Read only. The question ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.|
|required|boolean|false|none|Whether the question must be answered in order for a respondent to submit their response.|
|rowQuestion|[RowQuestion](#schemarowquestion)|false|none|A row of a QuestionGroupItem.|
|scaleQuestion|[ScaleQuestion](#schemascalequestion)|false|none|A respondent can choose a number from a range.|
|textQuestion|[TextQuestion](#schematextquestion)|false|none|A respondent can enter a free text response.|
|timeQuestion|[TimeQuestion](#schematimequestion)|false|none|A respondent can enter a time.|

<h2 id="tocS_QuestionGroupItem">QuestionGroupItem</h2>
<!-- backwards compatibility -->
<a id="schemaquestiongroupitem"></a>
<a id="schema_QuestionGroupItem"></a>
<a id="tocSquestiongroupitem"></a>
<a id="tocsquestiongroupitem"></a>

```json
{
  "grid": {
    "columns": {
      "options": [
        {
          "goToAction": "GO_TO_ACTION_UNSPECIFIED",
          "goToSectionId": "string",
          "image": {
            "altText": "string",
            "contentUri": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          },
          "isOther": true,
          "value": "string"
        }
      ],
      "shuffle": true,
      "type": "CHOICE_TYPE_UNSPECIFIED"
    },
    "shuffleQuestions": true
  },
  "image": {
    "altText": "string",
    "contentUri": "string",
    "properties": {
      "alignment": "ALIGNMENT_UNSPECIFIED",
      "width": 0
    },
    "sourceUri": "string"
  },
  "questions": [
    {
      "choiceQuestion": {
        "options": [
          {
            "goToAction": "GO_TO_ACTION_UNSPECIFIED",
            "goToSectionId": "string",
            "image": {
              "altText": "string",
              "contentUri": "string",
              "properties": {
                "alignment": "ALIGNMENT_UNSPECIFIED",
                "width": 0
              },
              "sourceUri": "string"
            },
            "isOther": true,
            "value": "string"
          }
        ],
        "shuffle": true,
        "type": "CHOICE_TYPE_UNSPECIFIED"
      },
      "dateQuestion": {
        "includeTime": true,
        "includeYear": true
      },
      "fileUploadQuestion": {
        "folderId": "string",
        "maxFileSize": "string",
        "maxFiles": 0,
        "types": [
          "FILE_TYPE_UNSPECIFIED"
        ]
      },
      "grading": {
        "correctAnswers": {
          "answers": [
            {
              "value": "string"
            }
          ]
        },
        "generalFeedback": {
          "material": [
            {
              "link": {
                "displayText": "string",
                "uri": "string"
              },
              "video": {
                "displayText": "string",
                "youtubeUri": "string"
              }
            }
          ],
          "text": "string"
        },
        "pointValue": 0,
        "whenRight": {
          "material": [
            {
              "link": {
                "displayText": "string",
                "uri": "string"
              },
              "video": {
                "displayText": "string",
                "youtubeUri": "string"
              }
            }
          ],
          "text": "string"
        },
        "whenWrong": {
          "material": [
            {
              "link": {
                "displayText": "string",
                "uri": "string"
              },
              "video": {
                "displayText": "string",
                "youtubeUri": "string"
              }
            }
          ],
          "text": "string"
        }
      },
      "questionId": "string",
      "required": true,
      "rowQuestion": {
        "title": "string"
      },
      "scaleQuestion": {
        "high": 0,
        "highLabel": "string",
        "low": 0,
        "lowLabel": "string"
      },
      "textQuestion": {
        "paragraph": true
      },
      "timeQuestion": {
        "duration": true
      }
    }
  ]
}
```

Defines a question that comprises multiple questions grouped together.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grid|[Grid](#schemagrid)|false|none|The question group is a grid with rows of multiple choice questions that share the same options. When `grid` is set, all questions in the group must be of kind `row`.|
|image|[Image](#schemaimage)|false|none|The image displayed within the question group above the specific questions.|
|questions|[[Question](#schemaquestion)]|false|none|Required. A list of questions that belong in this question group. A question must only belong to one group. The `kind` of the group may affect what types of questions are allowed.|

<h2 id="tocS_QuestionItem">QuestionItem</h2>
<!-- backwards compatibility -->
<a id="schemaquestionitem"></a>
<a id="schema_QuestionItem"></a>
<a id="tocSquestionitem"></a>
<a id="tocsquestionitem"></a>

```json
{
  "image": {
    "altText": "string",
    "contentUri": "string",
    "properties": {
      "alignment": "ALIGNMENT_UNSPECIFIED",
      "width": 0
    },
    "sourceUri": "string"
  },
  "question": {
    "choiceQuestion": {
      "options": [
        {
          "goToAction": "GO_TO_ACTION_UNSPECIFIED",
          "goToSectionId": "string",
          "image": {
            "altText": "string",
            "contentUri": "string",
            "properties": {
              "alignment": "ALIGNMENT_UNSPECIFIED",
              "width": 0
            },
            "sourceUri": "string"
          },
          "isOther": true,
          "value": "string"
        }
      ],
      "shuffle": true,
      "type": "CHOICE_TYPE_UNSPECIFIED"
    },
    "dateQuestion": {
      "includeTime": true,
      "includeYear": true
    },
    "fileUploadQuestion": {
      "folderId": "string",
      "maxFileSize": "string",
      "maxFiles": 0,
      "types": [
        "FILE_TYPE_UNSPECIFIED"
      ]
    },
    "grading": {
      "correctAnswers": {
        "answers": [
          {
            "value": "string"
          }
        ]
      },
      "generalFeedback": {
        "material": [
          {
            "link": {
              "displayText": "string",
              "uri": "string"
            },
            "video": {
              "displayText": "string",
              "youtubeUri": "string"
            }
          }
        ],
        "text": "string"
      },
      "pointValue": 0,
      "whenRight": {
        "material": [
          {
            "link": {
              "displayText": "string",
              "uri": "string"
            },
            "video": {
              "displayText": "string",
              "youtubeUri": "string"
            }
          }
        ],
        "text": "string"
      },
      "whenWrong": {
        "material": [
          {
            "link": {
              "displayText": "string",
              "uri": "string"
            },
            "video": {
              "displayText": "string",
              "youtubeUri": "string"
            }
          }
        ],
        "text": "string"
      }
    },
    "questionId": "string",
    "required": true,
    "rowQuestion": {
      "title": "string"
    },
    "scaleQuestion": {
      "high": 0,
      "highLabel": "string",
      "low": 0,
      "lowLabel": "string"
    },
    "textQuestion": {
      "paragraph": true
    },
    "timeQuestion": {
      "duration": true
    }
  }
}
```

A form item containing a single question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|[Image](#schemaimage)|false|none|The image displayed within the question.|
|question|[Question](#schemaquestion)|false|none|Required. The displayed question.|

<h2 id="tocS_QuizSettings">QuizSettings</h2>
<!-- backwards compatibility -->
<a id="schemaquizsettings"></a>
<a id="schema_QuizSettings"></a>
<a id="tocSquizsettings"></a>
<a id="tocsquizsettings"></a>

```json
{
  "isQuiz": true
}
```

Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isQuiz|boolean|false|none|Whether this form is a quiz or not. When true, responses are graded based on question Grading. Upon setting to false, all question Grading is deleted.|

<h2 id="tocS_RenewWatchRequest">RenewWatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemarenewwatchrequest"></a>
<a id="schema_RenewWatchRequest"></a>
<a id="tocSrenewwatchrequest"></a>
<a id="tocsrenewwatchrequest"></a>

```json
{}
```

Renew an existing Watch for seven days.

<h2 id="tocS_Request">Request</h2>
<!-- backwards compatibility -->
<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "createItem": {
    "item": {
      "description": "string",
      "imageItem": {
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        }
      },
      "itemId": "string",
      "pageBreakItem": {},
      "questionGroupItem": {
        "grid": {
          "columns": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "shuffleQuestions": true
        },
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "questions": [
          {
            "choiceQuestion": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "contentUri": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "dateQuestion": {
              "includeTime": true,
              "includeYear": true
            },
            "fileUploadQuestion": {
              "folderId": "string",
              "maxFileSize": "string",
              "maxFiles": 0,
              "types": [
                "FILE_TYPE_UNSPECIFIED"
              ]
            },
            "grading": {
              "correctAnswers": {
                "answers": [
                  {
                    "value": "string"
                  }
                ]
              },
              "generalFeedback": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "pointValue": 0,
              "whenRight": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "whenWrong": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              }
            },
            "questionId": "string",
            "required": true,
            "rowQuestion": {
              "title": "string"
            },
            "scaleQuestion": {
              "high": 0,
              "highLabel": "string",
              "low": 0,
              "lowLabel": "string"
            },
            "textQuestion": {
              "paragraph": true
            },
            "timeQuestion": {
              "duration": true
            }
          }
        ]
      },
      "questionItem": {
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "question": {
          "choiceQuestion": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "dateQuestion": {
            "includeTime": true,
            "includeYear": true
          },
          "fileUploadQuestion": {
            "folderId": "string",
            "maxFileSize": "string",
            "maxFiles": 0,
            "types": [
              "FILE_TYPE_UNSPECIFIED"
            ]
          },
          "grading": {
            "correctAnswers": {
              "answers": [
                {
                  "value": "string"
                }
              ]
            },
            "generalFeedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "pointValue": 0,
            "whenRight": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "whenWrong": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            }
          },
          "questionId": "string",
          "required": true,
          "rowQuestion": {
            "title": "string"
          },
          "scaleQuestion": {
            "high": 0,
            "highLabel": "string",
            "low": 0,
            "lowLabel": "string"
          },
          "textQuestion": {
            "paragraph": true
          },
          "timeQuestion": {
            "duration": true
          }
        }
      },
      "textItem": {},
      "title": "string",
      "videoItem": {
        "caption": "string",
        "video": {
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "youtubeUri": "string"
        }
      }
    },
    "location": {
      "index": 0
    }
  },
  "deleteItem": {
    "location": {
      "index": 0
    }
  },
  "moveItem": {
    "newLocation": {
      "index": 0
    },
    "originalLocation": {
      "index": 0
    }
  },
  "updateFormInfo": {
    "info": {
      "description": "string",
      "documentTitle": "string",
      "title": "string"
    },
    "updateMask": "string"
  },
  "updateItem": {
    "item": {
      "description": "string",
      "imageItem": {
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        }
      },
      "itemId": "string",
      "pageBreakItem": {},
      "questionGroupItem": {
        "grid": {
          "columns": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "shuffleQuestions": true
        },
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "questions": [
          {
            "choiceQuestion": {
              "options": [
                {
                  "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                  "goToSectionId": "string",
                  "image": {
                    "altText": "string",
                    "contentUri": "string",
                    "properties": {
                      "alignment": "ALIGNMENT_UNSPECIFIED",
                      "width": 0
                    },
                    "sourceUri": "string"
                  },
                  "isOther": true,
                  "value": "string"
                }
              ],
              "shuffle": true,
              "type": "CHOICE_TYPE_UNSPECIFIED"
            },
            "dateQuestion": {
              "includeTime": true,
              "includeYear": true
            },
            "fileUploadQuestion": {
              "folderId": "string",
              "maxFileSize": "string",
              "maxFiles": 0,
              "types": [
                "FILE_TYPE_UNSPECIFIED"
              ]
            },
            "grading": {
              "correctAnswers": {
                "answers": [
                  {
                    "value": "string"
                  }
                ]
              },
              "generalFeedback": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "pointValue": 0,
              "whenRight": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              },
              "whenWrong": {
                "material": [
                  {
                    "link": {
                      "displayText": "string",
                      "uri": "string"
                    },
                    "video": {
                      "displayText": "string",
                      "youtubeUri": "string"
                    }
                  }
                ],
                "text": "string"
              }
            },
            "questionId": "string",
            "required": true,
            "rowQuestion": {
              "title": "string"
            },
            "scaleQuestion": {
              "high": 0,
              "highLabel": "string",
              "low": 0,
              "lowLabel": "string"
            },
            "textQuestion": {
              "paragraph": true
            },
            "timeQuestion": {
              "duration": true
            }
          }
        ]
      },
      "questionItem": {
        "image": {
          "altText": "string",
          "contentUri": "string",
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "sourceUri": "string"
        },
        "question": {
          "choiceQuestion": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "dateQuestion": {
            "includeTime": true,
            "includeYear": true
          },
          "fileUploadQuestion": {
            "folderId": "string",
            "maxFileSize": "string",
            "maxFiles": 0,
            "types": [
              "FILE_TYPE_UNSPECIFIED"
            ]
          },
          "grading": {
            "correctAnswers": {
              "answers": [
                {
                  "value": "string"
                }
              ]
            },
            "generalFeedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "pointValue": 0,
            "whenRight": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "whenWrong": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            }
          },
          "questionId": "string",
          "required": true,
          "rowQuestion": {
            "title": "string"
          },
          "scaleQuestion": {
            "high": 0,
            "highLabel": "string",
            "low": 0,
            "lowLabel": "string"
          },
          "textQuestion": {
            "paragraph": true
          },
          "timeQuestion": {
            "duration": true
          }
        }
      },
      "textItem": {},
      "title": "string",
      "videoItem": {
        "caption": "string",
        "video": {
          "properties": {
            "alignment": "ALIGNMENT_UNSPECIFIED",
            "width": 0
          },
          "youtubeUri": "string"
        }
      }
    },
    "location": {
      "index": 0
    },
    "updateMask": "string"
  },
  "updateSettings": {
    "settings": {
      "quizSettings": {
        "isQuiz": true
      }
    },
    "updateMask": "string"
  }
}
```

The kinds of update requests that can be made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createItem|[CreateItemRequest](#schemacreateitemrequest)|false|none|Create a new item.|
|deleteItem|[DeleteItemRequest](#schemadeleteitemrequest)|false|none|Delete an item.|
|moveItem|[MoveItemRequest](#schemamoveitemrequest)|false|none|Move an item to a specified location.|
|updateFormInfo|[UpdateFormInfoRequest](#schemaupdateforminforequest)|false|none|Update Form's Info.|
|updateItem|[UpdateItemRequest](#schemaupdateitemrequest)|false|none|Update an item.|
|updateSettings|[UpdateSettingsRequest](#schemaupdatesettingsrequest)|false|none|Updates the Form's settings.|

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "createItem": {
    "itemId": "string",
    "questionId": [
      "string"
    ]
  }
}
```

A single response from an update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createItem|[CreateItemResponse](#schemacreateitemresponse)|false|none|The result of creating an item.|

<h2 id="tocS_RowQuestion">RowQuestion</h2>
<!-- backwards compatibility -->
<a id="schemarowquestion"></a>
<a id="schema_RowQuestion"></a>
<a id="tocSrowquestion"></a>
<a id="tocsrowquestion"></a>

```json
{
  "title": "string"
}
```

Configuration for a question that is part of a question group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Required. The title for the single row in the QuestionGroupItem.|

<h2 id="tocS_ScaleQuestion">ScaleQuestion</h2>
<!-- backwards compatibility -->
<a id="schemascalequestion"></a>
<a id="schema_ScaleQuestion"></a>
<a id="tocSscalequestion"></a>
<a id="tocsscalequestion"></a>

```json
{
  "high": 0,
  "highLabel": "string",
  "low": 0,
  "lowLabel": "string"
}
```

A scale question. The user has a range of numeric values to choose from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high|integer(int32)|false|none|Required. The highest possible value for the scale.|
|highLabel|string|false|none|The label to display describing the highest point on the scale.|
|low|integer(int32)|false|none|Required. The lowest possible value for the scale.|
|lowLabel|string|false|none|The label to display describing the lowest point on the scale.|

<h2 id="tocS_TextAnswer">TextAnswer</h2>
<!-- backwards compatibility -->
<a id="schematextanswer"></a>
<a id="schema_TextAnswer"></a>
<a id="tocStextanswer"></a>
<a id="tocstextanswer"></a>

```json
{
  "value": "string"
}
```

An answer to a question represented as text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|read-only|Output only. The answer value. Formatting used for different kinds of question: * ChoiceQuestion * `RADIO` or `DROP_DOWN`: A single string corresponding to the option that was selected. * `CHECKBOX`: Multiple strings corresponding to each option that was selected. * TextQuestion: The text that the user entered. * ScaleQuestion: A string containing the number that was selected. * DateQuestion * Without time or year: MM-DD e.g. "05-19" * With year: YYYY-MM-DD e.g. "1986-05-19" * With time: MM-DD HH:MM e.g. "05-19 14:51" * With year and time: YYYY-MM-DD HH:MM e.g. "1986-05-19 14:51" * TimeQuestion: String with time or duration in HH:MM format e.g. "14:51" * RowQuestion within QuestionGroupItem: The answer for each row of a QuestionGroupItem is represented as a separate Answer. Each will contain one string for `RADIO`-type choices or multiple strings for `CHECKBOX` choices.|

<h2 id="tocS_TextAnswers">TextAnswers</h2>
<!-- backwards compatibility -->
<a id="schematextanswers"></a>
<a id="schema_TextAnswers"></a>
<a id="tocStextanswers"></a>
<a id="tocstextanswers"></a>

```json
{
  "answers": [
    {
      "value": "string"
    }
  ]
}
```

A question's answers as text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers|[[TextAnswer](#schematextanswer)]|false|read-only|Output only. Answers to a question. For multiple-value ChoiceQuestions, each answer is a separate value.|

<h2 id="tocS_TextItem">TextItem</h2>
<!-- backwards compatibility -->
<a id="schematextitem"></a>
<a id="schema_TextItem"></a>
<a id="tocStextitem"></a>
<a id="tocstextitem"></a>

```json
{}
```

A text item.

<h2 id="tocS_TextLink">TextLink</h2>
<!-- backwards compatibility -->
<a id="schematextlink"></a>
<a id="schema_TextLink"></a>
<a id="tocStextlink"></a>
<a id="tocstextlink"></a>

```json
{
  "displayText": "string",
  "uri": "string"
}
```

Link for text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayText|string|false|none|Required. Display text for the URI.|
|uri|string|false|none|Required. The URI.|

<h2 id="tocS_TextQuestion">TextQuestion</h2>
<!-- backwards compatibility -->
<a id="schematextquestion"></a>
<a id="schema_TextQuestion"></a>
<a id="tocStextquestion"></a>
<a id="tocstextquestion"></a>

```json
{
  "paragraph": true
}
```

A text-based question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paragraph|boolean|false|none|Whether the question is a paragraph question or not. If not, the question is a short text question.|

<h2 id="tocS_TimeQuestion">TimeQuestion</h2>
<!-- backwards compatibility -->
<a id="schematimequestion"></a>
<a id="schema_TimeQuestion"></a>
<a id="tocStimequestion"></a>
<a id="tocstimequestion"></a>

```json
{
  "duration": true
}
```

A time question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|boolean|false|none|`true` if the question is about an elapsed time. Otherwise it is about a time of day.|

<h2 id="tocS_UpdateFormInfoRequest">UpdateFormInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateforminforequest"></a>
<a id="schema_UpdateFormInfoRequest"></a>
<a id="tocSupdateforminforequest"></a>
<a id="tocsupdateforminforequest"></a>

```json
{
  "info": {
    "description": "string",
    "documentTitle": "string",
    "title": "string"
  },
  "updateMask": "string"
}
```

Update Form's Info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|[Info](#schemainfo)|false|none|The info to update.|
|updateMask|string(google-fieldmask)|false|none|Required. Only values named in this mask are changed. At least one field must be specified. The root `info` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field.|

<h2 id="tocS_UpdateItemRequest">UpdateItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateitemrequest"></a>
<a id="schema_UpdateItemRequest"></a>
<a id="tocSupdateitemrequest"></a>
<a id="tocsupdateitemrequest"></a>

```json
{
  "item": {
    "description": "string",
    "imageItem": {
      "image": {
        "altText": "string",
        "contentUri": "string",
        "properties": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "width": 0
        },
        "sourceUri": "string"
      }
    },
    "itemId": "string",
    "pageBreakItem": {},
    "questionGroupItem": {
      "grid": {
        "columns": {
          "options": [
            {
              "goToAction": "GO_TO_ACTION_UNSPECIFIED",
              "goToSectionId": "string",
              "image": {
                "altText": "string",
                "contentUri": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              },
              "isOther": true,
              "value": "string"
            }
          ],
          "shuffle": true,
          "type": "CHOICE_TYPE_UNSPECIFIED"
        },
        "shuffleQuestions": true
      },
      "image": {
        "altText": "string",
        "contentUri": "string",
        "properties": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "width": 0
        },
        "sourceUri": "string"
      },
      "questions": [
        {
          "choiceQuestion": {
            "options": [
              {
                "goToAction": "GO_TO_ACTION_UNSPECIFIED",
                "goToSectionId": "string",
                "image": {
                  "altText": "string",
                  "contentUri": "string",
                  "properties": {
                    "alignment": "ALIGNMENT_UNSPECIFIED",
                    "width": 0
                  },
                  "sourceUri": "string"
                },
                "isOther": true,
                "value": "string"
              }
            ],
            "shuffle": true,
            "type": "CHOICE_TYPE_UNSPECIFIED"
          },
          "dateQuestion": {
            "includeTime": true,
            "includeYear": true
          },
          "fileUploadQuestion": {
            "folderId": "string",
            "maxFileSize": "string",
            "maxFiles": 0,
            "types": [
              "FILE_TYPE_UNSPECIFIED"
            ]
          },
          "grading": {
            "correctAnswers": {
              "answers": [
                {
                  "value": "string"
                }
              ]
            },
            "generalFeedback": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "pointValue": 0,
            "whenRight": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            },
            "whenWrong": {
              "material": [
                {
                  "link": {
                    "displayText": "string",
                    "uri": "string"
                  },
                  "video": {
                    "displayText": "string",
                    "youtubeUri": "string"
                  }
                }
              ],
              "text": "string"
            }
          },
          "questionId": "string",
          "required": true,
          "rowQuestion": {
            "title": "string"
          },
          "scaleQuestion": {
            "high": 0,
            "highLabel": "string",
            "low": 0,
            "lowLabel": "string"
          },
          "textQuestion": {
            "paragraph": true
          },
          "timeQuestion": {
            "duration": true
          }
        }
      ]
    },
    "questionItem": {
      "image": {
        "altText": "string",
        "contentUri": "string",
        "properties": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "width": 0
        },
        "sourceUri": "string"
      },
      "question": {
        "choiceQuestion": {
          "options": [
            {
              "goToAction": "GO_TO_ACTION_UNSPECIFIED",
              "goToSectionId": "string",
              "image": {
                "altText": "string",
                "contentUri": "string",
                "properties": {
                  "alignment": "ALIGNMENT_UNSPECIFIED",
                  "width": 0
                },
                "sourceUri": "string"
              },
              "isOther": true,
              "value": "string"
            }
          ],
          "shuffle": true,
          "type": "CHOICE_TYPE_UNSPECIFIED"
        },
        "dateQuestion": {
          "includeTime": true,
          "includeYear": true
        },
        "fileUploadQuestion": {
          "folderId": "string",
          "maxFileSize": "string",
          "maxFiles": 0,
          "types": [
            "FILE_TYPE_UNSPECIFIED"
          ]
        },
        "grading": {
          "correctAnswers": {
            "answers": [
              {
                "value": "string"
              }
            ]
          },
          "generalFeedback": {
            "material": [
              {
                "link": {
                  "displayText": "string",
                  "uri": "string"
                },
                "video": {
                  "displayText": "string",
                  "youtubeUri": "string"
                }
              }
            ],
            "text": "string"
          },
          "pointValue": 0,
          "whenRight": {
            "material": [
              {
                "link": {
                  "displayText": "string",
                  "uri": "string"
                },
                "video": {
                  "displayText": "string",
                  "youtubeUri": "string"
                }
              }
            ],
            "text": "string"
          },
          "whenWrong": {
            "material": [
              {
                "link": {
                  "displayText": "string",
                  "uri": "string"
                },
                "video": {
                  "displayText": "string",
                  "youtubeUri": "string"
                }
              }
            ],
            "text": "string"
          }
        },
        "questionId": "string",
        "required": true,
        "rowQuestion": {
          "title": "string"
        },
        "scaleQuestion": {
          "high": 0,
          "highLabel": "string",
          "low": 0,
          "lowLabel": "string"
        },
        "textQuestion": {
          "paragraph": true
        },
        "timeQuestion": {
          "duration": true
        }
      }
    },
    "textItem": {},
    "title": "string",
    "videoItem": {
      "caption": "string",
      "video": {
        "properties": {
          "alignment": "ALIGNMENT_UNSPECIFIED",
          "width": 0
        },
        "youtubeUri": "string"
      }
    }
  },
  "location": {
    "index": 0
  },
  "updateMask": "string"
}
```

Update an item in a form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[Item](#schemaitem)|false|none|Required. New values for the item. Note that item and question IDs are used if they are provided (and are in the field mask). If an ID is blank (and in the field mask) a new ID is generated. This means you can modify an item by getting the form via forms.get, modifying your local copy of that item to be how you want it, and using UpdateItemRequest to write it back, with the IDs being the same (or not in the field mask).|
|location|[Location](#schemalocation)|false|none|Required. The location identifying the item to update.|
|updateMask|string(google-fieldmask)|false|none|Required. Only values named in this mask are changed.|

<h2 id="tocS_UpdateSettingsRequest">UpdateSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsrequest"></a>
<a id="schema_UpdateSettingsRequest"></a>
<a id="tocSupdatesettingsrequest"></a>
<a id="tocsupdatesettingsrequest"></a>

```json
{
  "settings": {
    "quizSettings": {
      "isQuiz": true
    }
  },
  "updateMask": "string"
}
```

Update Form's FormSettings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|[FormSettings](#schemaformsettings)|false|none|Required. The settings to update with.|
|updateMask|string(google-fieldmask)|false|none|Required. Only values named in this mask are changed. At least one field must be specified. The root `settings` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field.|

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "properties": {
    "alignment": "ALIGNMENT_UNSPECIFIED",
    "width": 0
  },
  "youtubeUri": "string"
}
```

Data representing a video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[MediaProperties](#schemamediaproperties)|false|none|Properties of a video.|
|youtubeUri|string|false|none|Required. A YouTube URI.|

<h2 id="tocS_VideoItem">VideoItem</h2>
<!-- backwards compatibility -->
<a id="schemavideoitem"></a>
<a id="schema_VideoItem"></a>
<a id="tocSvideoitem"></a>
<a id="tocsvideoitem"></a>

```json
{
  "caption": "string",
  "video": {
    "properties": {
      "alignment": "ALIGNMENT_UNSPECIFIED",
      "width": 0
    },
    "youtubeUri": "string"
  }
}
```

An item containing a video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|The text displayed below the video.|
|video|[Video](#schemavideo)|false|none|Required. The video displayed in the item.|

<h2 id="tocS_VideoLink">VideoLink</h2>
<!-- backwards compatibility -->
<a id="schemavideolink"></a>
<a id="schema_VideoLink"></a>
<a id="tocSvideolink"></a>
<a id="tocsvideolink"></a>

```json
{
  "displayText": "string",
  "youtubeUri": "string"
}
```

Link to a video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayText|string|false|none|Required. The display text for the link.|
|youtubeUri|string|false|none|The URI of a YouTube video.|

<h2 id="tocS_Watch">Watch</h2>
<!-- backwards compatibility -->
<a id="schemawatch"></a>
<a id="schema_Watch"></a>
<a id="tocSwatch"></a>
<a id="tocswatch"></a>

```json
{
  "createTime": "string",
  "errorType": "ERROR_TYPE_UNSPECIFIED",
  "eventType": "EVENT_TYPE_UNSPECIFIED",
  "expireTime": "string",
  "id": "string",
  "state": "STATE_UNSPECIFIED",
  "target": {
    "topic": {
      "topicName": "string"
    }
  }
}
```

A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp of when this was created.|
|errorType|string|false|read-only|Output only. The most recent error type for an attempted delivery. To begin watching the form again a call can be made to watches.renew which also clears this error information.|
|eventType|string|false|none|Required. Which event type to watch for.|
|expireTime|string(google-datetime)|false|read-only|Output only. Timestamp for when this will expire. Each watches.renew call resets this to seven days in the future.|
|id|string|false|read-only|Output only. The ID of this watch. See notes on CreateWatchRequest.watch_id.|
|state|string|false|read-only|Output only. The current state of the watch. Additional details about suspended watches can be found by checking the `error_type`.|
|target|[WatchTarget](#schemawatchtarget)|false|none|Required. Where to send the notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorType|ERROR_TYPE_UNSPECIFIED|
|errorType|PROJECT_NOT_AUTHORIZED|
|errorType|NO_USER_ACCESS|
|errorType|OTHER_ERRORS|
|eventType|EVENT_TYPE_UNSPECIFIED|
|eventType|SCHEMA|
|eventType|RESPONSES|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|SUSPENDED|

<h2 id="tocS_WatchTarget">WatchTarget</h2>
<!-- backwards compatibility -->
<a id="schemawatchtarget"></a>
<a id="schema_WatchTarget"></a>
<a id="tocSwatchtarget"></a>
<a id="tocswatchtarget"></a>

```json
{
  "topic": {
    "topicName": "string"
  }
}
```

The target for notification delivery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|[CloudPubsubTopic](#schemacloudpubsubtopic)|false|none|A Pub/Sub topic. To receive notifications, the topic must grant publish privileges to the Forms service account `serviceAccount:forms-notifications@system.gserviceaccount.com`. Only the project that owns a topic may create a watch with it. Pub/Sub delivery guarantees should be considered.|

<h2 id="tocS_WriteControl">WriteControl</h2>
<!-- backwards compatibility -->
<a id="schemawritecontrol"></a>
<a id="schema_WriteControl"></a>
<a id="tocSwritecontrol"></a>
<a id="tocswritecontrol"></a>

```json
{
  "requiredRevisionId": "string",
  "targetRevisionId": "string"
}
```

Provides control over how write requests are executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requiredRevisionId|string|false|none|The revision ID of the form that the write request is applied to. If this is not the latest revision of the form, the request is not processed and returns a 400 bad request error.|
|targetRevisionId|string|false|none|The target revision ID of the form that the write request is applied to. If changes have occurred after this revision, the changes in this update request are transformed against those changes. This results in a new revision of the form that incorporates both the changes in the request and the intervening changes, with the server resolving conflicting changes. The target revision ID may only be used to write to recent versions of a form. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 (Bad Request Error). The request may be retried after reading the latest version of the form. In most cases a target revision ID remains valid for several minutes after it is read, but for frequently-edited forms this window may be shorter.|
