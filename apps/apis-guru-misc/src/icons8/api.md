<h1 id="use-a-new-versionhttpsicons8githubioicons8-docs-instead">Use a [New Version](https://icons8.github.io/icons8-docs/) Instead v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Icons8 API

Icons8 API allows us to search and obtain [our icons](https://icons8.com/web-app).

You're welcome to use our icons to extend the functionality of your web and mobile applications, website templates, and even tattoos.

![Tattoos](https://cdn.rawgit.com/icons8/api-docs/cff6fdf0/tattoos.svg)

## Usage Examples

Some examples of what you can do with our icons:

* **Template customization.** This way, [Canva](https://www.canva.com/) uses our icons to customize their layouts.

* **Graphics and text editors.** [Gravit](https://gravit.io/) allows to insert our icons into the mockups.

* **Any application with customization.** [TimeTune](http://timetune.center/) uses our icons to customize the activities.

## Getting Started

To get started, please [contact us](https://icons8.com/contact) to obtain an API key.

## Pricing

Our API license starts at $100/month.

Base URLs:

* <a href="https://api.icons8.com">https://api.icons8.com</a>

<h1 id="use-a-new-versionhttpsicons8githubioicons8-docs-instead-default">Default</h1>

## Categories

<a id="opIdCategories"></a>

> Code samples

```bash
curl 'https://example.com/api/iconsets/v3/categories?platform=ios7&language=en-US' \
  -H 'Accept: application/json'
```

`GET /api/iconsets/v3/categories?platform={platform}&language={language}`

The operation will not return the categories that have less than 10 icons.
We need it to test the categories without showing garbage on the production website.

<h3 id="categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|platform|path|string|true|the platform that we are searching icons for|
|language|path|string|true|the language code to get localized result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|platform|ios7|
|platform|win8|
|platform|win10|
|platform|android|
|platform|androidL|
|platform|color|
|platform|office|
|language|en-US|
|language|fr-FR|
|language|de-DE|
|language|it-IT|
|language|pt-BR|
|language|pl-PL|
|language|ru-RU|
|language|es-ES|

> Example responses

> 200 Response

```json
{
  "parameters": {
    "language": "",
    "platform": ""
  },
  "result": {
    "categories": [
      {
        "category_code": "",
        "category_name": "",
        "subcategory": [
          {
            "icons": [
              {
                "common_icon_id": 0,
                "created": "",
                "features": {
                  "bitmap": 0,
                  "nolink": 0,
                  "vector": 0
                },
                "id": 0,
                "name": "",
                "platform_code": "",
                "svg": "",
                "url": ""
              }
            ],
            "subcategory_code": "",
            "subcategory_name": ""
          }
        ]
      },
      {
        "api_code": "Alphabet",
        "category_code": "",
        "category_name": "",
        "name": "Alphabet",
        "subcategory": [
          {
            "icons": [
              {
                "common_icon_id": 0,
                "created": "",
                "features": {
                  "bitmap": 0,
                  "nolink": 0,
                  "vector": 0
                },
                "id": 0,
                "name": "",
                "platform_code": "",
                "svg": "",
                "url": ""
              }
            ],
            "subcategory_code": "",
            "subcategory_name": ""
          }
        ]
      },
      {
        "api_code": "Very_Basic",
        "category_code": "",
        "category_name": "",
        "name": "Very Basic",
        "subcategory": [
          {
            "icons": [
              {
                "common_icon_id": 0,
                "created": "",
                "features": {
                  "bitmap": 0,
                  "nolink": 0,
                  "vector": 0
                },
                "id": 0,
                "name": "",
                "platform_code": "",
                "svg": "",
                "url": ""
              }
            ],
            "subcategory_code": "",
            "subcategory_name": ""
          }
        ]
      },
      {
        "api_code": "Photo_Video",
        "category_code": "",
        "category_name": "",
        "name": "Photo and Video",
        "subcategory": [
          {
            "icons": [
              {
                "common_icon_id": 0,
                "created": "",
                "features": {
                  "bitmap": 0,
                  "nolink": 0,
                  "vector": 0
                },
                "id": 0,
                "name": "",
                "platform_code": "",
                "svg": "",
                "url": ""
              }
            ],
            "subcategory_code": "",
            "subcategory_name": ""
          }
        ]
      }
    ]
  }
}
```

<h3 id="categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|copy of the input parameters from the request|
|» language|string|false|none|none|
|» platform|string|false|none|none|
|result|object|false|none|the result of operation|
|» categories|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## By Category

<a id="opIdBy Category"></a>

> Code samples

```bash
curl 'https://example.com/api/iconsets/v3/category?category=free_icons&subcategory=home_appliances&amount=25&offset=0&platform=ios7&language=en-US' \
  -H 'Accept: application/json'
```

`GET /api/iconsets/v3/category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}`

<h3 id="by-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|the code of category|
|subcategory|path|string|true|the code of subcategory|
|amount|path|number|true|the maximum number of icons which you'd like to receive|
|offset|path|number|true|the offset from the first received result|
|platform|path|string|true|the style of the icons|
|language|path|string|true|the language code to get localized result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|platform|ios7|
|platform|win8|
|platform|win10|
|platform|android|
|platform|androidL|
|platform|color|
|platform|office|
|language|en-US|
|language|fr-FR|
|language|de-DE|
|language|it-IT|
|language|pt-BR|
|language|pl-PL|
|language|ru-RU|
|language|es-ES|

> Example responses

> 200 Response

```json
{
  "parameters": {
    "amount": 0,
    "category": "",
    "language": "",
    "offset": "",
    "platform": "",
    "subcategory": ""
  },
  "result": {
    "category": [
      {
        "category_code": "",
        "category_name": "",
        "subcategory": [
          {
            "icons": [
              {
                "common_icon_id": 0,
                "created": "",
                "features": {
                  "bitmap": 0,
                  "nolink": 0,
                  "vector": 0
                },
                "id": 0,
                "name": "",
                "platform_code": "",
                "svg": "",
                "url": ""
              }
            ],
            "subcategory_code": "",
            "subcategory_name": ""
          }
        ]
      },
      {
        "category": "Very Basic",
        "common_icon_id": "72",
        "created": "2015-05-21T05:28:59+00:00",
        "features": {
          "bitmap": "1",
          "nolink": "1",
          "vector": "1"
        },
        "id": "12229",
        "name": "Home",
        "platform_code": "color",
        "share": {
          "png": [
            {
              "link": "https://maxcdn.icons8.com/Share/google/h/home.png"
            },
            {
              "link": "https://maxcdn.icons8.com/Share/twitter/h/home.png",
              "type": "twitter"
            },
            {
              "link": "https://maxcdn.icons8.com/Share/social/h/home.png",
              "type": "social"
            }
          ],
          "url": "http://ic8.link/12229"
        },
        "subcategory": {
          "api_code": "website_sections",
          "name": "Website Sections"
        },
        "svg": "/* Plain SVG content here */",
        "url": "/web-app/12229/home",
        "vector": {
          "eps": "absolute/private/url/to/home.eps",
          "pdf": "absolute/private/url/to/home.pdf",
          "svg-editable": "absolute/private/url/to/original/home.svg",
          "svg-simplified": "absolute/private/url/to/simplified/home.svg"
        }
      }
    ]
  }
}
```

<h3 id="by-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="by-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|copy of the input parameters from the request|
|» amount|number|false|none|none|
|» category|string|false|none|none|
|» language|string|false|none|none|
|» offset|string|false|none|none|
|» platform|string|false|none|none|
|» subcategory|string|false|none|none|
|result|object|false|none|the result of operation|
|» category|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Latest

<a id="opIdLatest"></a>

> Code samples

```bash
curl 'https://example.com/api/iconsets/v3/latest?term={term}&amount=25&offset=0&platform=ios7&language=en-US' \
  -H 'Accept: application/json'
```

`GET /api/iconsets/v3/latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}`

<h3 id="latest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|path|number|true|the maximum number of icons which you'd like to receive|
|offset|path|number|true|the offset from the first received result|
|platform|path|string|true|the style of the icons|
|language|path|string|true|the language code to get localized result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|platform|ios7|
|platform|win8|
|platform|win10|
|platform|android|
|platform|androidL|
|platform|color|
|platform|office|
|language|en-US|
|language|fr-FR|
|language|de-DE|
|language|it-IT|
|language|pt-BR|
|language|pl-PL|
|language|ru-RU|
|language|es-ES|

> Example responses

> 200 Response

```json
{
  "parameters": {
    "amount": 0,
    "language": "",
    "offset": "",
    "platform": "",
    "term": ""
  },
  "result": {
    "latest": [
      {
        "common_icon_id": 0,
        "created": "color",
        "features": {
          "bitmap": 0,
          "nolink": 0,
          "vector": 0
        },
        "id": 0,
        "name": "",
        "platform_code": "",
        "share": {
          "png": [
            {
              "link": ""
            }
          ],
          "url": ""
        },
        "subcategory": {
          "api_code": "",
          "name": ""
        },
        "svg": "",
        "vector": {
          "eps": "",
          "pdf": "",
          "svg-simplified": ""
        }
      },
      {
        "common_icon_id": "72",
        "created": "2015-05-21T05:28:59+00:00",
        "features": {
          "bitmap": "1",
          "nolink": "1",
          "vector": "1"
        },
        "id": "12229",
        "name": "Home",
        "platform_code": "color",
        "share": {
          "png": [
            {
              "link": "https://maxcdn.icons8.com/Share/google/h/home.png"
            },
            {
              "link": "https://maxcdn.icons8.com/Share/twitter/h/home.png",
              "type": "twitter"
            },
            {
              "link": "https://maxcdn.icons8.com/Share/social/h/home.png",
              "type": "social"
            }
          ],
          "url": "http://ic8.link/12229"
        },
        "subcategory": {
          "api_code": "",
          "name": ""
        },
        "svg": "",
        "url": "/web-app/12229/home",
        "vector": {
          "eps": "",
          "pdf": "",
          "svg-simplified": ""
        }
      }
    ]
  }
}
```

<h3 id="latest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="latest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|copy of the input parameters from the request|
|» amount|number|false|none|none|
|» language|string|false|none|none|
|» offset|string|false|none|none|
|» platform|string|false|none|none|
|» term|string|false|none|none|
|result|object|false|none|the result of operation|
|» latest|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## By Keyword v3

<a id="opIdBy Keyword v3"></a>

> Code samples

```bash
curl 'https://example.com/api/iconsets/v3/search?term=home&amount=25&offset=0&platform=ios7&language=en-US&exact_amount=true' \
  -H 'Accept: application/json'
```

`GET /api/iconsets/v3/search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}`

<h3 id="by-keyword-v3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|path|string|true|the name or tag of the icon or any other phrase.<br>e.g. use "@home" to find icons with the tag "home" and "=home" to find icons with the name "home"<br>|
|amount|path|number|true|the maximum number of icons which you'd like to receive (will be multiplied by platforms count, if you didn't specify the platform and didn't set the 'exact_amount' parameter)|
|exact_amount|path|boolean|true|set it to 'true' if you'd like to receive the exact amount of icons, not multiplied by platforms count|
|offset|path|number|true|the offset from the first received result|
|platform|path|string|true|the style of the icons|
|language|path|string|true|the language code to get localized result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|platform|ios7|
|platform|win8|
|platform|win10|
|platform|android|
|platform|androidL|
|platform|color|
|platform|office|
|language|en-US|
|language|fr-FR|
|language|de-DE|
|language|it-IT|
|language|pt-BR|
|language|pl-PL|
|language|ru-RU|
|language|es-ES|

> Example responses

> 200 Response

```json
{
  "parameters": {
    "amount": 0,
    "language": "",
    "offset": "",
    "platform": "",
    "term": ""
  },
  "result": {
    "search": [
      {
        "common_icon_id": 0,
        "created": "color",
        "features": {
          "bitmap": 0,
          "nolink": 0,
          "vector": 0
        },
        "id": 0,
        "name": "",
        "platform_code": "",
        "share": {
          "png": [
            {
              "link": ""
            }
          ],
          "url": ""
        },
        "subcategory": {
          "api_code": "",
          "name": ""
        },
        "svg": "",
        "vector": {
          "eps": "",
          "pdf": "",
          "svg-simplified": ""
        }
      },
      {
        "category": "Very Basic",
        "common_icon_id": "72",
        "created": "2015-05-21T05:28:59+00:00",
        "features": {
          "bitmap": "1",
          "nolink": "1",
          "vector": "1"
        },
        "id": "12229",
        "name": "Home",
        "platform_code": "color",
        "share": {
          "png": [
            {
              "link": "https://maxcdn.icons8.com/Share/google/h/home.png"
            },
            {
              "link": "https://maxcdn.icons8.com/Share/twitter/h/home.png",
              "type": "twitter"
            },
            {
              "link": "https://maxcdn.icons8.com/Share/social/h/home.png",
              "type": "social"
            }
          ],
          "url": "http://ic8.link/12229"
        },
        "subcategory": {
          "api_code": "website_sections",
          "name": "Website Sections"
        },
        "svg": "/* Plain SVG content here */",
        "url": "/web-app/12229/home",
        "vector": {
          "eps": "absolute/private/url/to/home.eps",
          "pdf": "absolute/private/url/to/home.pdf",
          "svg-editable": "absolute/private/url/to/original/home.svg",
          "svg-simplified": "absolute/private/url/to/simplified/home.svg"
        }
      }
    ]
  }
}
```

<h3 id="by-keyword-v3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="by-keyword-v3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|copy of the input parameters from the request|
|» amount|number|false|none|none|
|» language|string|false|none|none|
|» offset|string|false|none|none|
|» platform|string|false|none|none|
|» term|string|false|none|none|
|result|object|false|none|the result of operation|
|» search|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Totals

<a id="opIdTotals"></a>

> Code samples

```bash
curl 'https://example.com/api/iconsets/v3/total?since=2014-12-31' \
  -H 'Accept: application/json'
```

`GET /api/iconsets/v3/total?since={since}`

<h3 id="totals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|path|string|true|the optional date to calculate the total number of icons that were created after it.<br>It should be in format "four year digits - dash - two month number digits - dash - two day number digits. For example 2014-12-31 means "31th of December, 2014".<br>|

> Example responses

> 200 Response

```json
{
  "parameters": {
    "since": ""
  },
  "result": {
    "total": [
      {
        "api_code": "ios7",
        "name": "",
        "total": 0
      },
      {
        "api_code": "win8",
        "name": "Windows 8/Metro",
        "total": "802"
      },
      {
        "api_code": "ios7",
        "name": "iPhone/iOS 7",
        "total": "7379"
      }
    ]
  }
}
```

<h3 id="totals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="totals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|copy of the input parameters from the request|
|» since|string|false|none|none|
|result|object|false|none|the result of operation|
|» total|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## By Keyword v4

<a id="opIdBy Keyword v4"></a>

> Code samples

```bash
curl 'https://example.com/api/iconsets/v4/search?term=home&amount=50&offset=0&platform=all&language=en-US&exact_amount={exact_amount}' \
  -H 'Accept: application/json'
```

`GET /api/iconsets/v4/search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}`

<h3 id="by-keyword-v4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|path|string|true|the name or tag of the icon or any other phrase.<br>e.g. use "@home" to find icons with the tag "home" and "=home" to find icons with the name "home"<br>|
|amount|path|number|true|the maximum number of icons which you'd like to receive (will be multiplied by platforms count, if you didn't specify the platform and didn't set the 'exact_amount' parameter)|
|offset|path|number|true|the offset from the first received result|
|platform|path|string|true|the style of the icons|
|language|path|string|true|the language code to get localized result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|platform|all|
|platform|ios7|
|platform|ios11|
|platform|win8|
|platform|win10|
|platform|android|
|platform|androidL|
|platform|color|
|platform|office|
|platform|ultraviolet|
|platform|nolan|
|platform|p1em|
|platform|dotty|
|platform|dusk|
|platform|Dusk_Wired|
|platform|cotton|
|platform|doodle|
|platform|flat_round|
|language|en-US|
|language|fr-FR|
|language|de-DE|
|language|it-IT|
|language|pt-BR|
|language|pl-PL|
|language|ru-RU|
|language|es-ES|
|language|zh-CN|
|language|ja-JP|

> Example responses

> 200 Response

```json
{
  "icons": [
    {
      "category": "Travel",
      "commonId": "3022",
      "commonName": "sea-waves",
      "id": "23756",
      "name": "Sea Waves",
      "platform": "win10",
      "timestamp": "1461024690"
    },
    {
      "category": "Animals",
      "commonId": "3035",
      "commonName": "starfish",
      "id": "19995",
      "name": "Sea Star",
      "platform": "win10",
      "timestamp": "1450119085"
    }
  ],
  "parameters": {
    "amount `50`": "",
    "language": "en-US",
    "offset": "0",
    "platform": "win10",
    "term": "sea"
  }
}
```

<h3 id="by-keyword-v4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="by-keyword-v4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icons|[object]|false|none|the result of operation|
|parameters|object|false|none|copy of the input parameters from the request|
|» amount `50`|string|false|none|none|
|» language|string|false|none|none|
|» offset|string|false|none|none|
|» platform|string|false|none|none|
|» term|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## From a Collection

<a id="opIdFrom a Collection"></a>

> Code samples

```bash
curl https://example.com/api/task/web-font/collection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "auth": {
      "hash": "api-demo-user"
    },
    "task": {
      "arguments": {
        "collection": "bef787ce-41ad-4424-8e0e-19ce78e104c3",
        "css_prefix": "icons8",
        "css_rules_case": "lowercase",
        "css_selector": ".icons8-{{glyph}}",
        "font_name": "Material Very Basic"
      }
    }
  }'
```

`POST /api/task/web-font/collection`

> Body parameter

```json
{
  "auth": {
    "hash": "api-demo-user"
  },
  "task": {
    "arguments": {
      "collection": "bef787ce-41ad-4424-8e0e-19ce78e104c3",
      "css_prefix": "icons8",
      "css_rules_case": "lowercase",
      "css_selector": ".icons8-{{glyph}}",
      "font_name": "Material Very Basic"
    }
  }
}
```

<h3 id="from-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» auth|body|object|false|none|
|» » hash|body|string|true|Authorization hash|
|» task|body|object|false|none|
|» » arguments|body|object|false|none|
|» » » collection|body|string|true|collection identifier|
|» » » css_prefix|body|string|false|prefix for CSS rules, used to generate LESS/SCSS|
|» » » css_rules_case|body|string|false|glyph names conversion rule|
|» » » css_selector|body|string|false|template for glyph selector; placeholder {{glyph}} will be replaced with glyph names|
|» » » font_name|body|string|true|name of iconic webfont|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » css_rules_case|lowercase|
|» » » css_rules_case|as_is|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "code": "paid_feature",
      "description": "Icons \"dog\", \"cat\" and 5 more were excluded"
    },
    {
      "code": "not_possible",
      "description": "Icons \"dog-color\" and \"cat-color\" were excluded"
    }
  ],
  "result": {
    "description": "",
    "id": "abc-def",
    "results": {
      "zip": "https://st.icons8.com/zip/abc-def/icons8-font.zip"
    },
    "status": "complete",
    "type": "create_web_font"
  }
}
```

<h3 id="from-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="from-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|result|object|false|none|none|
|» description|string|false|none|human readable description|
|» id|string|true|none|task identifier|
|» results|object|false|none|none|
|» » zip|string|false|none|none|
|» status|string|true|none|task status|
|» type|string|true|none|task type|

<aside class="success">
This operation does not require authentication
</aside>

## From Separate Icons

<a id="opIdFrom Separate Icons"></a>

> Code samples

```bash
curl https://example.com/api/task/web-font/icons \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "auth": {
      "hash": "api-demo-user"
    },
    "task": {
      "arguments": {
        "collection": "bef787ce-41ad-4424-8e0e-19ce78e104c3",
        "css_prefix": "icons8",
        "css_rules_case": "lowercase",
        "css_selector": ".icons8-{{glyph}}",
        "font_name": "Material Very Basic"
      }
    }
  }'
```

`POST /api/task/web-font/icons`

> Body parameter

```json
{
  "auth": {
    "hash": "api-demo-user"
  },
  "task": {
    "arguments": {
      "collection": "bef787ce-41ad-4424-8e0e-19ce78e104c3",
      "css_prefix": "icons8",
      "css_rules_case": "lowercase",
      "css_selector": ".icons8-{{glyph}}",
      "font_name": "Material Very Basic"
    }
  }
}
```

<h3 id="from-separate-icons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» auth|body|object|false|none|
|» » hash|body|string|true|Authorization hash|
|» task|body|object|false|none|
|» » arguments|body|object|false|none|
|» » » collection|body|string|true|collection identifier|
|» » » css_prefix|body|string|false|prefix for CSS rules, used to generate LESS/SCSS|
|» » » css_rules_case|body|string|false|glyph names conversion rule|
|» » » css_selector|body|string|false|template for glyph selector; placeholder {{glyph}} will be replaced with glyph names|
|» » » font_name|body|string|true|name of iconic webfont|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » css_rules_case|lowercase|
|» » » css_rules_case|as_is|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "code": "paid_feature",
      "description": "Icons \"dog\", \"cat\" and 5 more were excluded"
    },
    {
      "code": "not_possible",
      "description": "Icons \"dog-color\" and \"cat-color\" were excluded"
    }
  ],
  "result": {
    "description": "",
    "id": "abc-def",
    "results": {
      "zip": "https://st.icons8.com/zip/abc-def/icons8-font.zip"
    },
    "status": "complete",
    "type": "create_web_font"
  }
}
```

<h3 id="from-separate-icons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="from-separate-icons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|result|object|false|none|none|
|» description|string|false|none|human readable description|
|» id|string|true|none|task identifier|
|» results|object|false|none|none|
|» » zip|string|false|none|none|
|» status|string|true|none|task status|
|» type|string|true|none|task type|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AuthArgument">AuthArgument</h2>
<!-- backwards compatibility -->
<a id="schemaauthargument"></a>
<a id="schema_AuthArgument"></a>
<a id="tocSauthargument"></a>
<a id="tocsauthargument"></a>

```json
{
  "hash": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|true|none|Authorization hash|

<h2 id="tocS_CategoryV3Item">CategoryV3Item</h2>
<!-- backwards compatibility -->
<a id="schemacategoryv3item"></a>
<a id="schema_CategoryV3Item"></a>
<a id="tocScategoryv3item"></a>
<a id="tocscategoryv3item"></a>

```json
{
  "category_code": "string",
  "category_name": "string",
  "subcategory": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category_code|string|false|none|none|
|category_name|string|false|none|none|
|subcategory|[object]|false|none|none|

<h2 id="tocS_CollectionWebFontTaskArguments">CollectionWebFontTaskArguments</h2>
<!-- backwards compatibility -->
<a id="schemacollectionwebfonttaskarguments"></a>
<a id="schema_CollectionWebFontTaskArguments"></a>
<a id="tocScollectionwebfonttaskarguments"></a>
<a id="tocscollectionwebfonttaskarguments"></a>

```json
{
  "arguments": {
    "collection": "string",
    "css_prefix": "string",
    "css_rules_case": "lowercase",
    "css_selector": "string",
    "font_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|object|false|none|none|

<h2 id="tocS_CompactCategoryV3Item">CompactCategoryV3Item</h2>
<!-- backwards compatibility -->
<a id="schemacompactcategoryv3item"></a>
<a id="schema_CompactCategoryV3Item"></a>
<a id="tocScompactcategoryv3item"></a>
<a id="tocscompactcategoryv3item"></a>

```json
{
  "api_code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_code|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_CompactIconV3Item">CompactIconV3Item</h2>
<!-- backwards compatibility -->
<a id="schemacompacticonv3item"></a>
<a id="schema_CompactIconV3Item"></a>
<a id="tocScompacticonv3item"></a>
<a id="tocscompacticonv3item"></a>

```json
{
  "category": "string",
  "common_icon_id": 0,
  "created": "string",
  "features": {
    "bitmap": 0,
    "nolink": 0,
    "vector": 0
  },
  "id": 0,
  "name": "string",
  "platform_code": "string",
  "share": {
    "png": [
      null
    ],
    "url": "string"
  },
  "subcategory": {
    "api_code": "string",
    "name": "string"
  },
  "svg": "string",
  "url": "string",
  "vector": {
    "eps": "string",
    "pdf": "string",
    "svg-editable": "string",
    "svg-simplified": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|common_icon_id|number|true|none|identifier for group of the same icons in different styles; i.e. id of all "home" icons|
|created|string|true|none|date (ISO8601 format) of icon was published|
|features|object|true|none|internal service attribute; internal information about icon features; private; depend on the rights of the current user|
|id|number|true|none|unique icon identifier|
|name|string|true|none|icon name|
|platform_code|string|true|none|icon style|
|share|object|false|none|internal service attribute; some links to spread the world|
|subcategory|object|false|none|none|
|svg|string|true|none|plain SVG content of icon|
|url|string|false|none|internal service attribute; the meaning of this attribute is "Identifier of thread at Disquss"|
|vector|object|false|none|URLs to icon sources in different vector formats; private; depend on the current user and could be opened in user's browser only|

<h2 id="tocS_IconV3Item">IconV3Item</h2>
<!-- backwards compatibility -->
<a id="schemaiconv3item"></a>
<a id="schema_IconV3Item"></a>
<a id="tocSiconv3item"></a>
<a id="tocsiconv3item"></a>

```json
{
  "category": "string",
  "common_icon_id": 0,
  "created": "string",
  "features": {
    "bitmap": 0,
    "nolink": 0,
    "vector": 0
  },
  "id": 0,
  "name": "string",
  "platform_code": "string",
  "share": {
    "png": [
      null
    ],
    "url": "string"
  },
  "subcategory": {
    "api_code": "string",
    "name": "string"
  },
  "svg": "string",
  "url": "string",
  "vector": {
    "eps": "string",
    "pdf": "string",
    "svg-editable": "string",
    "svg-simplified": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|common_icon_id|number|true|none|identifier for group of the same icons in different styles; i.e. id of all "home" icons|
|created|string|true|none|date (ISO8601 format) of icon was published|
|features|object|true|none|internal service attribute; internal information about icon features; private; depend on the rights of the current user|
|id|number|true|none|unique icon identifier|
|name|string|true|none|icon name|
|platform_code|string|true|none|icon style|
|share|object|false|none|internal service attribute; some links to spread the world|
|subcategory|object|false|none|none|
|svg|string|true|none|plain SVG content of icon|
|url|string|false|none|internal service attribute; the meaning of this attribute is "Identifier of thread at Disquss"|
|vector|object|false|none|URLs to icon sources in different vector formats; private; depend on the current user and could be opened in user's browser only|
|category|string|false|none|none|
|common_icon_id|number|true|none|identifier for group of the same icons in different styles; i.e. id of all "home" icons|
|created|string|true|none|date (ISO8601 format) of icon was published|
|features|object|true|none|internal service attribute; internal information about icon features; private; depend on the rights of the current user|
|id|number|true|none|unique icon identifier|
|name|string|true|none|icon name|
|platform_code|string|true|none|icon style|
|share|object|false|none|internal service attribute; some links to spread the world|
|subcategory|object|false|none|none|
|svg|string|true|none|plain SVG content of icon|
|url|string|false|none|internal service attribute; the meaning of this attribute is "Identifier of thread at Disquss"|
|vector|object|false|none|URLs to icon sources in different vector formats; private; depend on the current user and could be opened in user's browser only|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
null
```

<h2 id="tocS_Search">Search</h2>
<!-- backwards compatibility -->
<a id="schemasearch"></a>
<a id="schema_Search"></a>
<a id="tocSsearch"></a>
<a id="tocssearch"></a>

```json
null
```

<h2 id="tocS_TaskError">TaskError</h2>
<!-- backwards compatibility -->
<a id="schemataskerror"></a>
<a id="schema_TaskError"></a>
<a id="tocStaskerror"></a>
<a id="tocstaskerror"></a>

```json
{
  "code": "json_not_valid",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|error code|
|description|string|true|none|human readable error message|

#### Enumerated Values

|Property|Value|
|---|---|
|code|json_not_valid|
|code|auth_required|
|code|auth_failed|
|code|access_denied|
|code|io_fail|
|code|database_fail|
|code|argument_is_missed|
|code|argument_is_wrong|
|code|paid_feature|
|code|not_possible|

<h2 id="tocS_TaskResult">TaskResult</h2>
<!-- backwards compatibility -->
<a id="schemataskresult"></a>
<a id="schema_TaskResult"></a>
<a id="tocStaskresult"></a>
<a id="tocstaskresult"></a>

```json
{
  "description": "string",
  "id": "string",
  "results": {
    "zip": "string"
  },
  "status": "`preparing+",
  "type": "create_web_font"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|human readable description|
|id|string|true|none|task identifier|
|results|object|false|none|none|
|status|string|true|none|task status|
|type|string|true|none|task type|

#### Enumerated Values

|Property|Value|
|---|---|
|status|`preparing+|
|status|idle|
|status|in_progress|
|status|timeout|
|status|complete|
|status|failed|
|type|create_web_font|
|type|create_svg_set|

<h2 id="tocS_TotalV3Item">TotalV3Item</h2>
<!-- backwards compatibility -->
<a id="schematotalv3item"></a>
<a id="schema_TotalV3Item"></a>
<a id="tocStotalv3item"></a>
<a id="tocstotalv3item"></a>

```json
{
  "api_code": "ios7",
  "name": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_code|string|true|none|icons style code; in other places it named `plarform` or `platform_api_code`|
|name|string|true|none|none|
|total|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|api_code|ios7|
|api_code|win8|
|api_code|win10|
|api_code|android|
|api_code|androidL|
|api_code|color|
|api_code|office|

<h2 id="tocS_Web_Fonts">Web_Fonts</h2>
<!-- backwards compatibility -->
<a id="schemaweb_fonts"></a>
<a id="schema_Web_Fonts"></a>
<a id="tocSweb_fonts"></a>
<a id="tocsweb_fonts"></a>

```json
null
```
