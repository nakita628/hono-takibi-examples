<h1 id="healthcare">Healthcare v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://www.healthcare.gov">https://www.healthcare.gov</a>

<a href="https://www.healthcare.gov/developers/">External documentation</a>

<h1 id="healthcare-default">Default</h1>

## get/api/articles{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/api/articles.json
```

`GET /api/articles{mediaTypeExtension}`

Returns pages content.

<h3 id="getapiarticlesmediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getapiarticlesmediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[articlesList](#schemaarticleslist)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/blog{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/api/blog.json
```

`GET /api/blog{mediaTypeExtension}`

Returns pages content.

<h3 id="getapiblogmediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getapiblogmediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[blogList](#schemabloglist)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/glossary{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/api/glossary.json
```

`GET /api/glossary{mediaTypeExtension}`

Returns pages content.

<h3 id="getapiglossarymediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getapiglossarymediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[glossaryList](#schemaglossarylist)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/questions{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/api/questions.json
```

`GET /api/questions{mediaTypeExtension}`

Returns pages content.

<h3 id="getapiquestionsmediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getapiquestionsmediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questionsList](#schemaquestionslist)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/states{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/api/states.json
```

`GET /api/states{mediaTypeExtension}`

Returns pages content.

<h3 id="getapistatesmediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getapistatesmediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[statesList](#schemastateslist)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/topics{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/api/topics.json
```

`GET /api/topics{mediaTypeExtension}`

Returns pages content.

<h3 id="getapitopicsmediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getapitopicsmediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[topicsList](#schematopicslist)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/blog/{pageName}{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/blog/string.json
```

`GET /blog/{pageName}{mediaTypeExtension}`

Returns pages content.

<h3 id="getblogpagenamemediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|
|pageName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getblogpagenamemediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[blogPage](#schemablogpage)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/es/blog/{pageName}{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/es/blog/string.json
```

`GET /es/blog/{pageName}{mediaTypeExtension}`

Returns pages content.

<h3 id="getesblogpagenamemediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|
|pageName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getesblogpagenamemediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[blogPage](#schemablogpage)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/es/glossary/{pageName}{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/es/glossary/string.json
```

`GET /es/glossary/{pageName}{mediaTypeExtension}`

Returns pages content.

<h3 id="getesglossarypagenamemediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|
|pageName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getesglossarypagenamemediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[glossaryPage](#schemaglossarypage)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/es/question/{pageName}{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/es/question/string.json
```

`GET /es/question/{pageName}{mediaTypeExtension}`

Returns pages content.

<h3 id="getesquestionpagenamemediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|
|pageName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getesquestionpagenamemediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questionPage](#schemaquestionpage)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/es/{pageName}{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/es/string.json
```

`GET /es/{pageName}{mediaTypeExtension}`

Returns pages content.

<h3 id="getespagenamemediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|
|pageName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getespagenamemediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[page](#schemapage)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/es/{stateName}{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/es/string.json
```

`GET /es/{stateName}{mediaTypeExtension}`

Returns pages content.

<h3 id="getesstatenamemediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|
|stateName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getesstatenamemediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[statePage](#schemastatepage)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/glossary/{pageName}{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/glossary/string.json
```

`GET /glossary/{pageName}{mediaTypeExtension}`

Returns pages content.

<h3 id="getglossarypagenamemediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|
|pageName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getglossarypagenamemediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[glossaryPage](#schemaglossarypage)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/question/{pageName}{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/question/string.json
```

`GET /question/{pageName}{mediaTypeExtension}`

Returns pages content.

<h3 id="getquestionpagenamemediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|
|pageName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getquestionpagenamemediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questionPage](#schemaquestionpage)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/{pageName}{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/string.json
```

`GET /{pageName}{mediaTypeExtension}`

Returns pages content.

<h3 id="getpagenamemediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|
|pageName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getpagenamemediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[page](#schemapage)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/{stateName}{mediaTypeExtension}

> Code samples

```bash
curl https://example.com/string.json
```

`GET /{stateName}{mediaTypeExtension}`

Returns pages content.

<h3 id="getstatenamemediatypeextension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaTypeExtension|path|string|true|Omiting the param causes html to be returned.|
|stateName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaTypeExtension|.json|

<h3 id="getstatenamemediatypeextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[statePage](#schemastatepage)|
|404|Not Found|Resource not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_articlesList">articlesList</h2>
<!-- backwards compatibility -->
<a id="schemaarticleslist"></a>
<a id="schema_articlesList"></a>
<a id="tocSarticleslist"></a>
<a id="tocsarticleslist"></a>

```json
{
  "articles": [
    {
      "bite": "string",
      "categories": [
        [
          "string"
        ]
      ],
      "content": "string",
      "date": "string",
      "excerpt": "string",
      "featured": true,
      "id": "string",
      "lang": "string",
      "layout": "string",
      "meta-description": "string",
      "meta-title": "string",
      "path": "string",
      "published": true,
      "related": [
        [
          "string"
        ]
      ],
      "seo-keywords": "string",
      "sort": 0,
      "tags": [
        [
          null
        ]
      ],
      "title": "string",
      "title-short": "string",
      "topics": [
        [
          "string"
        ]
      ],
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articles|[object]|false|none|none|

<h2 id="tocS_blogList">blogList</h2>
<!-- backwards compatibility -->
<a id="schemabloglist"></a>
<a id="schema_blogList"></a>
<a id="tocSbloglist"></a>
<a id="tocsbloglist"></a>

```json
{
  "blog": [
    [
      {
        "categories": [
          [
            "string"
          ]
        ],
        "content": "string",
        "date": "string",
        "lang": "string",
        "layout": "string",
        "meta-description": "string",
        "meta-title": "string",
        "published": true,
        "seo-keywords": "string",
        "sort": 0,
        "tags": [
          [
            null
          ]
        ],
        "title": "string",
        "topics": [
          [
            "string"
          ]
        ],
        "url": "string"
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blog|[[object]]|false|none|none|

<h2 id="tocS_blogPage">blogPage</h2>
<!-- backwards compatibility -->
<a id="schemablogpage"></a>
<a id="schema_blogPage"></a>
<a id="tocSblogpage"></a>
<a id="tocsblogpage"></a>

```json
{
  "categories": [
    [
      "string"
    ]
  ],
  "content": "string",
  "date": "string",
  "excerpt": "string",
  "id": "string",
  "lang": "string",
  "layout": "string",
  "meta-description": "string",
  "meta-title": "string",
  "path": "string",
  "published": true,
  "seo-keywords": "string",
  "sort": 0,
  "tags": [
    [
      null
    ]
  ],
  "title": "string",
  "topics": [
    [
      "string"
    ]
  ],
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[string]]|false|none|none|
|content|string|false|none|none|
|date|string|false|none|none|
|excerpt|string|false|none|none|
|id|string|false|none|none|
|lang|string|false|none|none|
|layout|string|false|none|none|
|meta-description|string|false|none|none|
|meta-title|string|false|none|none|
|path|string|false|none|none|
|published|boolean|false|none|none|
|seo-keywords|string|false|none|none|
|sort|number|false|none|none|
|tags|[[object]]|false|none|none|
|title|string|false|none|none|
|topics|[[string]]|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_glossaryList">glossaryList</h2>
<!-- backwards compatibility -->
<a id="schemaglossarylist"></a>
<a id="schema_glossaryList"></a>
<a id="tocSglossarylist"></a>
<a id="tocsglossarylist"></a>

```json
{
  "glossary": [
    {
      "categories": [
        "string"
      ],
      "content": "string",
      "date": "string",
      "excerpt": "string",
      "id": "string",
      "lang": "string",
      "layout": "string",
      "path": "string",
      "published": true,
      "sort": 0,
      "tags": [
        "string"
      ],
      "title": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossary|[object]|false|none|none|

<h2 id="tocS_glossaryPage">glossaryPage</h2>
<!-- backwards compatibility -->
<a id="schemaglossarypage"></a>
<a id="schema_glossaryPage"></a>
<a id="tocSglossarypage"></a>
<a id="tocsglossarypage"></a>

```json
{
  "categories": [
    "string"
  ],
  "content": "string",
  "date": "string",
  "excerpt": "string",
  "id": "string",
  "lang": "string",
  "layout": "string",
  "path": "string",
  "published": true,
  "sort": 0,
  "tags": [
    "string"
  ],
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|none|
|content|string|false|none|none|
|date|string|false|none|none|
|excerpt|string|false|none|none|
|id|string|false|none|none|
|lang|string|false|none|none|
|layout|string|false|none|none|
|path|string|false|none|none|
|published|boolean|false|none|none|
|sort|number|false|none|none|
|tags|[string]|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_page">page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "categories": [
    [
      null
    ]
  ],
  "content": "string",
  "date": "string",
  "excerpt": "string",
  "experience": "string",
  "id": "string",
  "lang": "string",
  "layout": "string",
  "path": "string",
  "published": true,
  "sort": 0,
  "tags": [
    [
      null
    ]
  ],
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[object]]|false|none|none|
|content|string|false|none|none|
|date|string|false|none|none|
|excerpt|string|false|none|none|
|experience|string|false|none|none|
|id|string|false|none|none|
|lang|string|false|none|none|
|layout|string|false|none|none|
|path|string|false|none|none|
|published|boolean|false|none|none|
|sort|number|false|none|none|
|tags|[[object]]|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_questionPage">questionPage</h2>
<!-- backwards compatibility -->
<a id="schemaquestionpage"></a>
<a id="schema_questionPage"></a>
<a id="tocSquestionpage"></a>
<a id="tocsquestionpage"></a>

```json
{
  "categories": [
    "string"
  ],
  "content": "string",
  "date": "string",
  "excerpt": "string",
  "id": "string",
  "lang": "string",
  "path": "string",
  "published": true,
  "sort": 0,
  "tags": [
    "string"
  ],
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|none|
|content|string|false|none|none|
|date|string|false|none|none|
|excerpt|string|false|none|none|
|id|string|false|none|none|
|lang|string|false|none|none|
|path|string|false|none|none|
|published|boolean|false|none|none|
|sort|number|false|none|none|
|tags|[string]|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_questionsList">questionsList</h2>
<!-- backwards compatibility -->
<a id="schemaquestionslist"></a>
<a id="schema_questionsList"></a>
<a id="tocSquestionslist"></a>
<a id="tocsquestionslist"></a>

```json
{
  "questions": [
    {
      "categories": [
        "string"
      ],
      "content": "string",
      "date": "string",
      "excerpt": "string",
      "id": "string",
      "lang": "string",
      "path": "string",
      "published": true,
      "sort": 0,
      "tags": [
        "string"
      ],
      "title": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|questions|[object]|false|none|none|

<h2 id="tocS_statePage">statePage</h2>
<!-- backwards compatibility -->
<a id="schemastatepage"></a>
<a id="schema_statePage"></a>
<a id="tocSstatepage"></a>
<a id="tocsstatepage"></a>

```json
{
  "categories": [
    [
      null
    ]
  ],
  "content": "string",
  "date": "string",
  "excerpt": "string",
  "id": "string",
  "lang": "string",
  "path": "string",
  "sort": 0,
  "stateurl": "string",
  "tags": [
    [
      "string"
    ]
  ],
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[object]]|false|none|none|
|content|string|false|none|none|
|date|string|false|none|none|
|excerpt|string|false|none|none|
|id|string|false|none|none|
|lang|string|false|none|none|
|path|string|false|none|none|
|sort|number|false|none|none|
|stateurl|string|false|none|none|
|tags|[[string]]|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_statesList">statesList</h2>
<!-- backwards compatibility -->
<a id="schemastateslist"></a>
<a id="schema_statesList"></a>
<a id="tocSstateslist"></a>
<a id="tocsstateslist"></a>

```json
{
  "states": [
    [
      {
        "categories": [
          [
            null
          ]
        ],
        "content": "string",
        "date": "string",
        "excerpt": "string",
        "id": "string",
        "lang": "string",
        "path": "string",
        "sort": 0,
        "stateurl": "string",
        "tags": [
          [
            "string"
          ]
        ],
        "title": "string",
        "url": "string"
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|states|[[object]]|false|none|none|

<h2 id="tocS_topicsList">topicsList</h2>
<!-- backwards compatibility -->
<a id="schematopicslist"></a>
<a id="schema_topicsList"></a>
<a id="tocStopicslist"></a>
<a id="tocstopicslist"></a>

```json
{
  "topics": [
    {
      "articleorder": [
        [
          "string"
        ]
      ],
      "categories": [
        [
          null
        ]
      ],
      "content": "string",
      "date": "string",
      "excerpt": "string",
      "id": "string",
      "lang": "string",
      "layout": "string",
      "meta-description": "string",
      "meta-title": "string",
      "order": 0,
      "path": "string",
      "published": true,
      "sort": 0,
      "tags": [
        [
          "string"
        ]
      ],
      "title": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topics|[object]|false|none|none|
