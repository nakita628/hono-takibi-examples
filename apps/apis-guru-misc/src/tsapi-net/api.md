<h1 id="tsapi">TSAPI v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (basic)
    - Parameter Name: **Authorization**, in: header. Basic Authorization header using the Bearer scheme.

<h1 id="tsapi-surveys">Surveys</h1>

## Returns a list of available Surveys

> Code samples

```bash
curl https://example.com/Surveys \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /Surveys`

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "title": "string"
  }
]
```

<h3 id="returns-a-list-of-available-surveys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-a-list-of-available-surveys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SurveyDetail](#schemasurveydetail)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Fetches some interview records for a specific survey

> Code samples

```bash
curl https://example.com/Surveys/497f6eca-6276-4993-bfeb-53cbbbba6f08/Interviews \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /Surveys/{surveyId}/Interviews`

<h3 id="fetches-some-interview-records-for-a-specific-survey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|surveyId|path|string(uuid)|true|none|
|start|query|integer(int32)|false|none|
|maxLength|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "dataItems": [
      {
        "ident": "string",
        "parentIdent": {
          "parentValueIdent": "string",
          "parentVariableIdent": "string"
        },
        "values": [
          "string"
        ]
      }
    ],
    "hierarchicalInterviews": [
      {
        "dataItems": [
          {
            "ident": "string",
            "parentIdent": {
              "parentValueIdent": "string",
              "parentVariableIdent": "string"
            },
            "values": [
              "string"
            ]
          }
        ],
        "hierarchicalInterviews": [
          {}
        ],
        "ident": "string",
        "level": {
          "ident": "string"
        }
      }
    ],
    "ident": "string"
  }
]
```

<h3 id="fetches-some-interview-records-for-a-specific-survey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="fetches-some-interview-records-for-a-specific-survey-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Interview](#schemainterview)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Fetches the metadata for a specific survey

> Code samples

```bash
curl https://example.com/Surveys/497f6eca-6276-4993-bfeb-53cbbbba6f08/Metadata \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /Surveys/{surveyId}/Metadata`

<h3 id="fetches-the-metadata-for-a-specific-survey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|surveyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "hierarchies": [
    {
      "ident": "string",
      "metadata": {
        "interviewCount": 0,
        "languages": [
          {
            "ident": "string",
            "name": "string",
            "subLanguages": [
              {}
            ]
          }
        ],
        "name": "string",
        "title": "string",
        "variables": [
          {
            "ident": "string",
            "label": {
              "altLabels": [
                {
                  "langIdent": "string",
                  "mode": {},
                  "text": "string"
                }
              ],
              "text": "string"
            },
            "maxResponses": 0,
            "name": "string",
            "parentType": {},
            "questions": [
              {}
            ],
            "type": {},
            "use": {},
            "variableValues": {
              "range": {
                "from": "string",
                "to": "string"
              },
              "values": [
                {
                  "code": "string",
                  "ident": "string",
                  "label": {
                    "altLabels": [
                      {
                        "langIdent": "string",
                        "mode": {},
                        "text": "string"
                      }
                    ],
                    "text": "string"
                  },
                  "score": 0
                }
              ]
            }
          }
        ]
      },
      "parent": {
        "level": "string",
        "linkVar": "string",
        "ordered": true
      }
    }
  ],
  "interviewCount": 0,
  "languages": [
    {
      "ident": "string",
      "name": "string",
      "subLanguages": [
        {}
      ]
    }
  ],
  "name": "string",
  "title": "string",
  "variables": [
    {
      "ident": "string",
      "label": {
        "altLabels": [
          {
            "langIdent": "string",
            "mode": {},
            "text": "string"
          }
        ],
        "text": "string"
      },
      "maxResponses": 0,
      "name": "string",
      "parentType": {},
      "questions": [
        {}
      ],
      "type": {},
      "use": {},
      "variableValues": {
        "range": {
          "from": "string",
          "to": "string"
        },
        "values": [
          {
            "code": "string",
            "ident": "string",
            "label": {
              "altLabels": [
                {
                  "langIdent": "string",
                  "mode": {},
                  "text": "string"
                }
              ],
              "text": "string"
            },
            "score": 0
          }
        ]
      }
    }
  ]
}
```

<h3 id="fetches-the-metadata-for-a-specific-survey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SurveyMetadata](#schemasurveymetadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

# Schemas

<h2 id="tocS_AltLabel">AltLabel</h2>
<!-- backwards compatibility -->
<a id="schemaaltlabel"></a>
<a id="schema_AltLabel"></a>
<a id="tocSaltlabel"></a>
<a id="tocsaltlabel"></a>

```json
{
  "langIdent": "string",
  "mode": {},
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|langIdent|string \| null|false|none|none|
|mode|object|false|none|none|
|text|string \| null|false|none|none|

<h2 id="tocS_AltLabelMode">AltLabelMode</h2>
<!-- backwards compatibility -->
<a id="schemaaltlabelmode"></a>
<a id="schema_AltLabelMode"></a>
<a id="tocSaltlabelmode"></a>
<a id="tocsaltlabelmode"></a>

```json
1
```

<h2 id="tocS_DataItem">DataItem</h2>
<!-- backwards compatibility -->
<a id="schemadataitem"></a>
<a id="schema_DataItem"></a>
<a id="tocSdataitem"></a>
<a id="tocsdataitem"></a>

```json
{
  "ident": "string",
  "parentIdent": {
    "parentValueIdent": "string",
    "parentVariableIdent": "string"
  },
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ident|string \| null|false|none|none|
|parentIdent|object \| null|false|none|none|
|values|[string]|false|none|none|

<h2 id="tocS_HierarchicalInterview">HierarchicalInterview</h2>
<!-- backwards compatibility -->
<a id="schemahierarchicalinterview"></a>
<a id="schema_HierarchicalInterview"></a>
<a id="tocShierarchicalinterview"></a>
<a id="tocshierarchicalinterview"></a>

```json
{
  "dataItems": [
    {
      "ident": "string",
      "parentIdent": {
        "parentValueIdent": "string",
        "parentVariableIdent": "string"
      },
      "values": [
        "string"
      ]
    }
  ],
  "hierarchicalInterviews": [
    {
      "dataItems": [
        {
          "ident": "string",
          "parentIdent": {
            "parentValueIdent": "string",
            "parentVariableIdent": "string"
          },
          "values": [
            "string"
          ]
        }
      ],
      "hierarchicalInterviews": [
        {}
      ],
      "ident": "string",
      "level": {
        "ident": "string"
      }
    }
  ],
  "ident": "string",
  "level": {
    "ident": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataItems|[[DataItem](#schemadataitem)]|false|none|none|
|hierarchicalInterviews|[[HierarchicalInterview](#schemahierarchicalinterview)]|false|none|none|
|ident|string \| null|false|none|none|
|level|object \| null|false|none|none|

<h2 id="tocS_Hierarchy">Hierarchy</h2>
<!-- backwards compatibility -->
<a id="schemahierarchy"></a>
<a id="schema_Hierarchy"></a>
<a id="tocShierarchy"></a>
<a id="tocshierarchy"></a>

```json
{
  "ident": "string",
  "metadata": {
    "interviewCount": 0,
    "languages": [
      {
        "ident": "string",
        "name": "string",
        "subLanguages": [
          {}
        ]
      }
    ],
    "name": "string",
    "title": "string",
    "variables": [
      {
        "ident": "string",
        "label": {
          "altLabels": [
            {
              "langIdent": "string",
              "mode": {},
              "text": "string"
            }
          ],
          "text": "string"
        },
        "maxResponses": 0,
        "name": "string",
        "parentType": {},
        "questions": [
          {}
        ],
        "type": {},
        "use": {},
        "variableValues": {
          "range": {
            "from": "string",
            "to": "string"
          },
          "values": [
            {
              "code": "string",
              "ident": "string",
              "label": {
                "altLabels": [
                  {
                    "langIdent": "string",
                    "mode": {},
                    "text": "string"
                  }
                ],
                "text": "string"
              },
              "score": 0
            }
          ]
        }
      }
    ]
  },
  "parent": {
    "level": "string",
    "linkVar": "string",
    "ordered": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ident|string \| null|false|none|none|
|metadata|object \| null|false|none|none|
|parent|object \| null|false|none|none|

<h2 id="tocS_Interview">Interview</h2>
<!-- backwards compatibility -->
<a id="schemainterview"></a>
<a id="schema_Interview"></a>
<a id="tocSinterview"></a>
<a id="tocsinterview"></a>

```json
{
  "dataItems": [
    {
      "ident": "string",
      "parentIdent": {
        "parentValueIdent": "string",
        "parentVariableIdent": "string"
      },
      "values": [
        "string"
      ]
    }
  ],
  "hierarchicalInterviews": [
    {
      "dataItems": [
        {
          "ident": "string",
          "parentIdent": {
            "parentValueIdent": "string",
            "parentVariableIdent": "string"
          },
          "values": [
            "string"
          ]
        }
      ],
      "hierarchicalInterviews": [
        {}
      ],
      "ident": "string",
      "level": {
        "ident": "string"
      }
    }
  ],
  "ident": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataItems|[[DataItem](#schemadataitem)]|false|none|none|
|hierarchicalInterviews|[[HierarchicalInterview](#schemahierarchicalinterview)]|false|none|none|
|ident|string \| null|false|none|none|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "altLabels": [
    {
      "langIdent": "string",
      "mode": {},
      "text": "string"
    }
  ],
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altLabels|[[AltLabel](#schemaaltlabel)]|false|none|none|
|text|string \| null|false|none|none|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "ident": "string",
  "name": "string",
  "subLanguages": [
    {
      "ident": "string",
      "name": "string",
      "subLanguages": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ident|string \| null|false|none|none|
|name|string \| null|false|none|none|
|subLanguages|[[Language](#schemalanguage)]|false|none|none|

<h2 id="tocS_Level">Level</h2>
<!-- backwards compatibility -->
<a id="schemalevel"></a>
<a id="schema_Level"></a>
<a id="tocSlevel"></a>
<a id="tocslevel"></a>

```json
{
  "ident": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ident|string \| null|false|none|none|

<h2 id="tocS_ParentDetails">ParentDetails</h2>
<!-- backwards compatibility -->
<a id="schemaparentdetails"></a>
<a id="schema_ParentDetails"></a>
<a id="tocSparentdetails"></a>
<a id="tocsparentdetails"></a>

```json
{
  "level": "string",
  "linkVar": "string",
  "ordered": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|string \| null|false|none|none|
|linkVar|string \| null|false|none|none|
|ordered|boolean|false|none|none|

<h2 id="tocS_ParentRef">ParentRef</h2>
<!-- backwards compatibility -->
<a id="schemaparentref"></a>
<a id="schema_ParentRef"></a>
<a id="tocSparentref"></a>
<a id="tocsparentref"></a>

```json
{
  "parentValueIdent": "string",
  "parentVariableIdent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parentValueIdent|string \| null|false|none|none|
|parentVariableIdent|string \| null|false|none|none|

<h2 id="tocS_ParentType">ParentType</h2>
<!-- backwards compatibility -->
<a id="schemaparenttype"></a>
<a id="schema_ParentType"></a>
<a id="tocSparenttype"></a>
<a id="tocsparenttype"></a>

```json
1
```

<h2 id="tocS_SurveyDetail">SurveyDetail</h2>
<!-- backwards compatibility -->
<a id="schemasurveydetail"></a>
<a id="schema_SurveyDetail"></a>
<a id="tocSsurveydetail"></a>
<a id="tocssurveydetail"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_SurveyMetadata">SurveyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasurveymetadata"></a>
<a id="schema_SurveyMetadata"></a>
<a id="tocSsurveymetadata"></a>
<a id="tocssurveymetadata"></a>

```json
{
  "hierarchies": [
    {
      "ident": "string",
      "metadata": {
        "interviewCount": 0,
        "languages": [
          {
            "ident": "string",
            "name": "string",
            "subLanguages": [
              {}
            ]
          }
        ],
        "name": "string",
        "title": "string",
        "variables": [
          {
            "ident": "string",
            "label": {
              "altLabels": [
                {
                  "langIdent": "string",
                  "mode": {},
                  "text": "string"
                }
              ],
              "text": "string"
            },
            "maxResponses": 0,
            "name": "string",
            "parentType": {},
            "questions": [
              {}
            ],
            "type": {},
            "use": {},
            "variableValues": {
              "range": {
                "from": "string",
                "to": "string"
              },
              "values": [
                {
                  "code": "string",
                  "ident": "string",
                  "label": {
                    "altLabels": [
                      {
                        "langIdent": "string",
                        "mode": {},
                        "text": "string"
                      }
                    ],
                    "text": "string"
                  },
                  "score": 0
                }
              ]
            }
          }
        ]
      },
      "parent": {
        "level": "string",
        "linkVar": "string",
        "ordered": true
      }
    }
  ],
  "interviewCount": 0,
  "languages": [
    {
      "ident": "string",
      "name": "string",
      "subLanguages": [
        {}
      ]
    }
  ],
  "name": "string",
  "title": "string",
  "variables": [
    {
      "ident": "string",
      "label": {
        "altLabels": [
          {
            "langIdent": "string",
            "mode": {},
            "text": "string"
          }
        ],
        "text": "string"
      },
      "maxResponses": 0,
      "name": "string",
      "parentType": {},
      "questions": [
        {}
      ],
      "type": {},
      "use": {},
      "variableValues": {
        "range": {
          "from": "string",
          "to": "string"
        },
        "values": [
          {
            "code": "string",
            "ident": "string",
            "label": {
              "altLabels": [
                {
                  "langIdent": "string",
                  "mode": {},
                  "text": "string"
                }
              ],
              "text": "string"
            },
            "score": 0
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hierarchies|[[Hierarchy](#schemahierarchy)]|false|none|none|
|interviewCount|integer(int32)|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|name|string \| null|false|none|none|
|title|string \| null|false|none|none|
|variables|[[Variable](#schemavariable)]|false|none|none|

<h2 id="tocS_SurveyMetadataBase">SurveyMetadataBase</h2>
<!-- backwards compatibility -->
<a id="schemasurveymetadatabase"></a>
<a id="schema_SurveyMetadataBase"></a>
<a id="tocSsurveymetadatabase"></a>
<a id="tocssurveymetadatabase"></a>

```json
{
  "interviewCount": 0,
  "languages": [
    {
      "ident": "string",
      "name": "string",
      "subLanguages": [
        {}
      ]
    }
  ],
  "name": "string",
  "title": "string",
  "variables": [
    {
      "ident": "string",
      "label": {
        "altLabels": [
          {
            "langIdent": "string",
            "mode": {},
            "text": "string"
          }
        ],
        "text": "string"
      },
      "maxResponses": 0,
      "name": "string",
      "parentType": {},
      "questions": [
        {}
      ],
      "type": {},
      "use": {},
      "variableValues": {
        "range": {
          "from": "string",
          "to": "string"
        },
        "values": [
          {
            "code": "string",
            "ident": "string",
            "label": {
              "altLabels": [
                {
                  "langIdent": "string",
                  "mode": {},
                  "text": "string"
                }
              ],
              "text": "string"
            },
            "score": 0
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interviewCount|integer(int32)|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|name|string \| null|false|none|none|
|title|string \| null|false|none|none|
|variables|[[Variable](#schemavariable)]|false|none|none|

<h2 id="tocS_UseType">UseType</h2>
<!-- backwards compatibility -->
<a id="schemausetype"></a>
<a id="schema_UseType"></a>
<a id="tocSusetype"></a>
<a id="tocsusetype"></a>

```json
1
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
{
  "code": "string",
  "ident": "string",
  "label": {
    "altLabels": [
      {
        "langIdent": "string",
        "mode": {},
        "text": "string"
      }
    ],
    "text": "string"
  },
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|none|
|ident|string \| null|false|none|none|
|label|object \| null|false|none|none|
|score|integer(int32) \| null|false|none|none|

<h2 id="tocS_ValueRange">ValueRange</h2>
<!-- backwards compatibility -->
<a id="schemavaluerange"></a>
<a id="schema_ValueRange"></a>
<a id="tocSvaluerange"></a>
<a id="tocsvaluerange"></a>

```json
{
  "from": "string",
  "to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string \| null|false|none|none|
|to|string \| null|false|none|none|

<h2 id="tocS_Variable">Variable</h2>
<!-- backwards compatibility -->
<a id="schemavariable"></a>
<a id="schema_Variable"></a>
<a id="tocSvariable"></a>
<a id="tocsvariable"></a>

```json
{
  "ident": "string",
  "label": {
    "altLabels": [
      {
        "langIdent": "string",
        "mode": {},
        "text": "string"
      }
    ],
    "text": "string"
  },
  "maxResponses": 0,
  "name": "string",
  "parentType": {},
  "questions": [
    {
      "ident": "string",
      "label": {
        "altLabels": [
          {
            "langIdent": "string",
            "mode": {},
            "text": "string"
          }
        ],
        "text": "string"
      },
      "maxResponses": 0,
      "name": "string",
      "parentType": {},
      "questions": [
        {}
      ],
      "type": {},
      "use": {},
      "variableValues": {
        "range": {
          "from": "string",
          "to": "string"
        },
        "values": [
          {
            "code": "string",
            "ident": "string",
            "label": {
              "altLabels": [
                {
                  "langIdent": "string",
                  "mode": {},
                  "text": "string"
                }
              ],
              "text": "string"
            },
            "score": 0
          }
        ]
      }
    }
  ],
  "type": {},
  "use": {},
  "variableValues": {
    "range": {
      "from": "string",
      "to": "string"
    },
    "values": [
      {
        "code": "string",
        "ident": "string",
        "label": {
          "altLabels": [
            {
              "langIdent": "string",
              "mode": {},
              "text": "string"
            }
          ],
          "text": "string"
        },
        "score": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ident|string \| null|false|none|none|
|label|object \| null|false|none|none|
|maxResponses|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|parentType|object|false|none|none|
|questions|[[Variable](#schemavariable)]|false|none|none|
|type|object|false|none|none|
|use|object|false|none|none|
|variableValues|object \| null|false|none|none|

<h2 id="tocS_VariableType">VariableType</h2>
<!-- backwards compatibility -->
<a id="schemavariabletype"></a>
<a id="schema_VariableType"></a>
<a id="tocSvariabletype"></a>
<a id="tocsvariabletype"></a>

```json
1
```

<h2 id="tocS_VariableValues">VariableValues</h2>
<!-- backwards compatibility -->
<a id="schemavariablevalues"></a>
<a id="schema_VariableValues"></a>
<a id="tocSvariablevalues"></a>
<a id="tocsvariablevalues"></a>

```json
{
  "range": {
    "from": "string",
    "to": "string"
  },
  "values": [
    {
      "code": "string",
      "ident": "string",
      "label": {
        "altLabels": [
          {
            "langIdent": "string",
            "mode": {},
            "text": "string"
          }
        ],
        "text": "string"
      },
      "score": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|range|object \| null|false|none|none|
|values|[[Value](#schemavalue)]|false|none|none|
