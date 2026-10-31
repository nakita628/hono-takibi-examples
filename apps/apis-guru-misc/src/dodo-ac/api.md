<h1 id="nookipedia">Nookipedia v1.5.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Nookipedia API provides endpoints for retrieving *Animal Crossing* data pulled from the [Nookipedia wiki](https://nookipedia.com/wiki/Main_Page). A couple of the key benefits of using the Nookipedia API is access to data spanning the entire *Animal Crossing* series, as well as information that is constantly updated and expanding as editors work on the wiki.<br><br>Access to the Nookipedia API requires obtaining a key. This is so we can manage our scale and provide better support for our users. To request access to the API, please fill out [this form](https://forms.gle/wLwtXLerKhfDrRLY8).<br><br>This API is 'version 2' of our [original API](https://nookipedia.com/api/). While the previous API scraped information directly from the wiki, this new edition of the API pulls data from a structured and constrained database, resulting in higher-quality data, better searching, and support for filtering.

Base URLs:

* <a href="https://api.nookipedia.com/">https://api.nookipedia.com/</a>

<h1 id="nookipedia-default">Default</h1>

## All New Horizons artwork

> Code samples

```bash
curl https://example.com/nh/art \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/art`

Get a list of all artwork and their details in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-artwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|hasfake|query|string|false|When set to `true`, only artwork that has a fake will be returned. When set to `false`, only artwork without fakes will be returned.|
|excludedetails|query|string|false|When set to `true`, only artwork names are returned. Instead of an array of objects with all details, the return will be an array of strings.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.|

> Example responses

> 200 Response

```json
[
  {
    "art_name": "Vitruvian Man",
    "art_style": "Pen and ink on paper",
    "authenticity": "If there is a coffee stain in the top right corner, it is fake. If there is no stain, it is genuine. The forgery has a key taped to the back of the canvas.",
    "author": "Leonardo da Vinci",
    "availability": "Jolly Redd's Treasure Trawler",
    "buy": 4980,
    "description": "This drawing is based on the &quot;ideal&quot; human-body ratio, as stated in &quot;De architectura.&quot; &quot;De architectura&quot; was a treatise by Vitruvius, an architect from the early 1st century BCE.",
    "fake_image_url": "https://dodo.ac/np/images/1/13/Academic_Painting_%28Forgery%29_NH_Icon.png",
    "has_fake": true,
    "image_url": "https://dodo.ac/np/images/e/e8/Academic_Painting_NH_Icon.png",
    "length": 1,
    "name": "Academic Painting",
    "sell": 1245,
    "url": "https://nookipedia.com/wiki/Academic_Painting",
    "width": 1,
    "year": "circa 1487"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-artwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of artwork.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-artwork-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHArtwork](#schemanhartwork)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons artwork

> Code samples

```bash
curl https://example.com/nh/art/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/art/{artwork}`

Retrieve information about a specific artwork in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-artwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artwork|path|string|true|The name of the artwork you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "art_name": "Vitruvian Man",
  "art_style": "Pen and ink on paper",
  "authenticity": "If there is a coffee stain in the top right corner, it is fake. If there is no stain, it is genuine. The forgery has a key taped to the back of the canvas.",
  "author": "Leonardo da Vinci",
  "availability": "Jolly Redd's Treasure Trawler",
  "buy": 4980,
  "description": "This drawing is based on the &quot;ideal&quot; human-body ratio, as stated in &quot;De architectura.&quot; &quot;De architectura&quot; was a treatise by Vitruvius, an architect from the early 1st century BCE.",
  "fake_image_url": "https://dodo.ac/np/images/1/13/Academic_Painting_%28Forgery%29_NH_Icon.png",
  "has_fake": true,
  "image_url": "https://dodo.ac/np/images/e/e8/Academic_Painting_NH_Icon.png",
  "length": 1,
  "name": "Academic Painting",
  "sell": 1245,
  "url": "https://nookipedia.com/wiki/Academic_Painting",
  "width": 1,
  "year": "circa 1487"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-artwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the artwork.|[NHArtwork](#schemanhartwork)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons bugs

> Code samples

```bash
curl https://example.com/nh/bugs \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/bugs`

Get a list of all bugs and their details in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-bugs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|month|query|string|false|Retrive only the bug that are available in a specific month. Value may be the month's name (`jan`, `january`), the integer representing the month (`01`, `1`), or `current` for the current month. When `current` is specified, the return body will be an object with two arrays inside, one called `north` and the other `south` containing the bug available in each respective hemisphere. Note that the current month is calculated based off the API server's time, so it may be slightly off for you at the beginning or end of the month.|
|excludedetails|query|string|false|When set to `true`, only bug names are returned. Instead of an array of objects with all details, the return will be an array of strings. This is particularly useful when used with the `month` filter, for users who want just a list of bugs in a given month but not all their respective details.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.|

> Example responses

> 200 Response

```json
[
  {
    "catchphrases": [
      "I caught a grasshopper! They're a grass act!"
    ],
    "image_url": "https://dodo.ac/np/images/3/37/Grasshopper_NH_Icon.png",
    "location": "On the ground",
    "name": "Grasshopper",
    "north": {
      "availability_array": [
        {
          "months": "Jul – Sep",
          "time": "8 AM – 5 PM"
        }
      ],
      "months": "Jul – Sep",
      "months_array": [
        7,
        8,
        9
      ],
      "times_by_month": {
        "1": "NA",
        "2": "NA",
        "3": "NA",
        "4": "NA",
        "5": "NA",
        "6": "NA",
        "7": "8 AM – 5 PM",
        "8": "8 AM – 5 PM",
        "9": "8 AM – 5 PM",
        "10": "NA",
        "11": "NA",
        "12": "NA"
      }
    },
    "number": 19,
    "rarity": "Uncommon",
    "render_url": "https://dodo.ac/np/images/1/1d/Grasshopper_NH.png",
    "sell_flick": 240,
    "sell_nook": 160,
    "south": {
      "availability_array": [
        {
          "months": "Jan – Mar",
          "time": "8 AM – 5 PM"
        }
      ],
      "months": "Jan – Mar",
      "months_array": [
        1,
        2,
        3
      ],
      "times_by_month": {
        "1": "8 AM – 5 PM",
        "2": "8 AM – 5 PM",
        "3": "8 AM – 5 PM",
        "4": "NA",
        "5": "NA",
        "6": "NA",
        "7": "NA",
        "8": "NA",
        "9": "NA",
        "10": "NA",
        "11": "NA",
        "12": "NA"
      }
    },
    "tank_length": 1,
    "tank_width": 1,
    "total_catch": 0,
    "url": "https://nookipedia.com/wiki/Grasshopper"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-bugs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of bugs.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-bugs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHBug](#schemanhbug)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons bug

> Code samples

```bash
curl https://example.com/nh/bugs/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/bugs/{bug}`

Retrieve information about a specific bug in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-bug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bug|path|string|true|The name of the bug you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "catchphrases": [
    "I caught a grasshopper! They're a grass act!"
  ],
  "image_url": "https://dodo.ac/np/images/3/37/Grasshopper_NH_Icon.png",
  "location": "On the ground",
  "name": "Grasshopper",
  "north": {
    "availability_array": [
      {
        "months": "Jul – Sep",
        "time": "8 AM – 5 PM"
      }
    ],
    "months": "Jul – Sep",
    "months_array": [
      7,
      8,
      9
    ],
    "times_by_month": {
      "1": "NA",
      "2": "NA",
      "3": "NA",
      "4": "NA",
      "5": "NA",
      "6": "NA",
      "7": "8 AM – 5 PM",
      "8": "8 AM – 5 PM",
      "9": "8 AM – 5 PM",
      "10": "NA",
      "11": "NA",
      "12": "NA"
    }
  },
  "number": 19,
  "rarity": "Uncommon",
  "render_url": "https://dodo.ac/np/images/1/1d/Grasshopper_NH.png",
  "sell_flick": 240,
  "sell_nook": 160,
  "south": {
    "availability_array": [
      {
        "months": "Jan – Mar",
        "time": "8 AM – 5 PM"
      }
    ],
    "months": "Jan – Mar",
    "months_array": [
      1,
      2,
      3
    ],
    "times_by_month": {
      "1": "8 AM – 5 PM",
      "2": "8 AM – 5 PM",
      "3": "8 AM – 5 PM",
      "4": "NA",
      "5": "NA",
      "6": "NA",
      "7": "NA",
      "8": "NA",
      "9": "NA",
      "10": "NA",
      "11": "NA",
      "12": "NA"
    }
  },
  "tank_length": 1,
  "tank_width": 1,
  "total_catch": 0,
  "url": "https://nookipedia.com/wiki/Grasshopper"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 404 Response

```json
{
  "details": "MediaWiki Cargo request succeeded by nothing was returned for the parameters: {}",
  "title": "No data was found for the given query."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-bug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the bug.|[NHBug](#schemanhbug)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|404|Not Found|Could not find the specified bug.|[Error404](#schemaerror404)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons clothing

> Code samples

```bash
curl https://example.com/nh/clothing \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/clothing`

Get a list of all clothing items and their details in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-clothing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|category|query|string|false|Specify the category of clothing to return.|
|color|query|[string]|false|Return clothing that matches the provided colors (may specify one or two colors). Colors are used for gifting villagers.|
|style|query|[string]|false|Return clothing that matches the provided styles (may specify one or two styles). Styles are used for gifting villagers.|
|labeltheme|query|string|false|Return clothing that have the specified Label theme. This is used for completing the requested outfit theme for [Label](https://nookipedia.com/wiki/Label) when she visits the player's island.|
|excludedetails|query|string|false|When set to `true`, only clothing names are returned. Instead of an array of objects with all details, the return will be an array of strings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|category|Tops|
|category|Bottoms|
|category|Dress-up|
|category|Headwear|
|category|Accessories|
|category|Socks|
|category|Shoes|
|category|Bags|
|category|Umbrellas|
|color|Aqua|
|color|Beige|
|color|Black|
|color|Blue|
|color|Brown|
|color|Colorful|
|color|Gray|
|color|Green|
|color|Orange|
|color|Pink|
|color|Purple|
|color|Red|
|color|White|
|color|Yellow|
|style|Active|
|style|Cool|
|style|Cute|
|style|Elegant|
|style|Gorgeous|
|style|Simple|
|labeltheme|Comfy|
|labeltheme|Everyday|
|labeltheme|Fairy tale|
|labeltheme|Formal|
|labeltheme|Goth|
|labeltheme|Outdoorsy|
|labeltheme|Party|
|labeltheme|Sporty|
|labeltheme|Theatrical|
|labeltheme|Vacation|
|labeltheme|Work|

> Example responses

> 200 Response

```json
[
  {
    "availability": [
      {
        "from": "Able Sisters",
        "note": ""
      }
    ],
    "buy": [
      {
        "currency": "Bells",
        "price": 490
      }
    ],
    "category": "Accessories",
    "label_themes": [
      "Party"
    ],
    "name": "3D Glasses",
    "notes": "",
    "seasonality": "All year",
    "sell": 122,
    "styles": [
      "Active"
    ],
    "unlocked": true,
    "url": "https://nookipedia.com/wiki/Item:3D_Glasses_(New_Horizons)",
    "variation_total": 2,
    "variations": [
      {
        "colors": [
          "White",
          "Colorful"
        ],
        "image_url": "https://dodo.ac/np/images/1/15/3D_Glasses_%28White%29_NH_Icon.png",
        "variation": "White"
      },
      {
        "colors": [
          "Colorful",
          "Black"
        ],
        "image_url": "https://dodo.ac/np/images/2/28/3D_Glasses_%28Black%29_NH_Icon.png",
        "variation": "Black"
      }
    ],
    "version_added": "1.0.0",
    "vill_equip": true
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-clothing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of clothing.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-clothing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHClothing](#schemanhclothing)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons clothing

> Code samples

```bash
curl https://example.com/nh/clothing/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/clothing/{clothing}`

Retrieve information about a specific clothing item in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-clothing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clothing|path|string|true|The name of the clothing you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "availability": [
    {
      "from": "Able Sisters",
      "note": ""
    }
  ],
  "buy": [
    {
      "currency": "Bells",
      "price": 490
    }
  ],
  "category": "Accessories",
  "label_themes": [
    "Party"
  ],
  "name": "3D Glasses",
  "notes": "",
  "seasonality": "All year",
  "sell": 122,
  "styles": [
    "Active"
  ],
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:3D_Glasses_(New_Horizons)",
  "variation_total": 2,
  "variations": [
    {
      "colors": [
        "White",
        "Colorful"
      ],
      "image_url": "https://dodo.ac/np/images/1/15/3D_Glasses_%28White%29_NH_Icon.png",
      "variation": "White"
    },
    {
      "colors": [
        "Colorful",
        "Black"
      ],
      "image_url": "https://dodo.ac/np/images/2/28/3D_Glasses_%28Black%29_NH_Icon.png",
      "variation": "Black"
    }
  ],
  "version_added": "1.0.0",
  "vill_equip": true
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-clothing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the clothing.|[NHClothing](#schemanhclothing)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons events

> Code samples

```bash
curl https://example.com/nh/events \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/events`

Get a list of events and dates in *Animal Crossing: New Horizons*, filterable to specific years, months, or days. Data is available for the current and next year.

<h3 id="all-new-horizons-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|date|query|string|false|Specify a specific date (in the current or next year) to retrieve events for. Accepts many date formats, such as `YYYY-MM-DD` or `Month Day, Year`, as well as `today` to retrieve the current day's events (UTC time).|
|year|query|string|false|Specify the year to retrieve events for. Must be the current or next year.|
|month|query|string|false|Specify the month to retrieve events for (accepts multiple formats, such as `Oct`, `October`, or `10`). Most likely want to use alongside `year`, otherwise events in both the current and next year are returned.|
|day|query|integer|false|Specify the day of the month to retrieve events for.|

> Example responses

> 200 Response

```json
[
  {
    "date": "2021-05-01",
    "event": "May Day event begins",
    "type": "Event",
    "url": "https://nookipedia.com/wiki/May_Day"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of events.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHEvent](#schemanhevent)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons fish

> Code samples

```bash
curl https://example.com/nh/fish \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/fish`

Get a list of all fish and their details in *New Horizons*.

<h3 id="all-new-horizons-fish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|month|query|string|false|Retrive only the fish that are available in a specific month. Value may be the month's name (`jan`, `january`), the integer representing the month (`01`, `1`), or `current` for the current month. When `current` is specified, the return body will be an object with two arrays inside, one called `north` and the other `south` containing the fish available in each respective hemisphere. Note that the current month is calculated based off the API server's time, so it may be slightly off for you at the beginning or end of the month.|
|excludedetails|query|string|false|When set to `true`, only fish names are returned. Instead of an array of objects with all details, the return will be an array of strings. This is particularly useful when used with the `month` filter, for users who want just a list of fish in a given month but not all their respective details.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.|

> Example responses

> 200 Response

```json
[
  {
    "catchphrases": [
      "I caught a cherry salmon! It's the perfect topper for a marlin sundae!"
    ],
    "image_url": "https://dodo.ac/np/images/d/db/Cherry_Salmon_NH_Icon.png",
    "location": "River (clifftop)",
    "name": "Cherry Salmon",
    "north": {
      "availability_array": [
        {
          "months": "Mar – Jun",
          "time": "4 PM – 9 AM"
        },
        {
          "months": "Sep – Nov",
          "time": "All day"
        }
      ],
      "months": "Mar – Jun; Sep – Nov",
      "months_array": [
        3,
        4,
        5,
        6,
        9,
        10,
        11
      ],
      "times_by_month": {
        "1": "NA",
        "2": "NA",
        "3": "4 PM – 9 AM",
        "4": "4 PM – 9 AM",
        "5": "4 PM – 9 AM",
        "6": "4 PM – 9 AM",
        "7": "NA",
        "8": "NA",
        "9": "All day",
        "10": "All day",
        "11": "All day",
        "12": "NA"
      }
    },
    "number": 27,
    "rarity": "Uncommon",
    "render_url": "https://dodo.ac/np/images/c/c0/Cherry_Salmon_NH.png",
    "sell_cj": 1500,
    "sell_nook": 1000,
    "shadow_size": "Small",
    "south": {
      "availability_array": [
        {
          "months": "Sep – Dec",
          "time": "4 PM – 9 AM"
        },
        {
          "months": "Mar – May",
          "time": "All day"
        }
      ],
      "months": "Mar – May; Sep – Dec",
      "months_array": [
        3,
        4,
        5,
        9,
        10,
        11,
        12
      ],
      "times_by_month": {
        "1": "NA",
        "2": "NA",
        "3": "4 PM – 9 AM",
        "4": "4 PM – 9 AM",
        "5": "4 PM – 9 AM",
        "6": "4 PM – 9 AM",
        "7": "NA",
        "8": "NA",
        "9": "All day",
        "10": "All day",
        "11": "All day",
        "12": "NA"
      }
    },
    "tank_length": 1,
    "tank_width": 1,
    "total_catch": 100,
    "url": "https://nookipedia.com/wiki/Cherry Salmon"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-fish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of fish.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-fish-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHFish](#schemanhfish)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons fish

> Code samples

```bash
curl https://example.com/nh/fish/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/fish/{fish}`

Retrieve information about a specific fish in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-fish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fish|path|string|true|The name of the fish you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "catchphrases": [
    "I caught a cherry salmon! It's the perfect topper for a marlin sundae!"
  ],
  "image_url": "https://dodo.ac/np/images/d/db/Cherry_Salmon_NH_Icon.png",
  "location": "River (clifftop)",
  "name": "Cherry Salmon",
  "north": {
    "availability_array": [
      {
        "months": "Mar – Jun",
        "time": "4 PM – 9 AM"
      },
      {
        "months": "Sep – Nov",
        "time": "All day"
      }
    ],
    "months": "Mar – Jun; Sep – Nov",
    "months_array": [
      3,
      4,
      5,
      6,
      9,
      10,
      11
    ],
    "times_by_month": {
      "1": "NA",
      "2": "NA",
      "3": "4 PM – 9 AM",
      "4": "4 PM – 9 AM",
      "5": "4 PM – 9 AM",
      "6": "4 PM – 9 AM",
      "7": "NA",
      "8": "NA",
      "9": "All day",
      "10": "All day",
      "11": "All day",
      "12": "NA"
    }
  },
  "number": 27,
  "rarity": "Uncommon",
  "render_url": "https://dodo.ac/np/images/c/c0/Cherry_Salmon_NH.png",
  "sell_cj": 1500,
  "sell_nook": 1000,
  "shadow_size": "Small",
  "south": {
    "availability_array": [
      {
        "months": "Sep – Dec",
        "time": "4 PM – 9 AM"
      },
      {
        "months": "Mar – May",
        "time": "All day"
      }
    ],
    "months": "Mar – May; Sep – Dec",
    "months_array": [
      3,
      4,
      5,
      9,
      10,
      11,
      12
    ],
    "times_by_month": {
      "1": "NA",
      "2": "NA",
      "3": "4 PM – 9 AM",
      "4": "4 PM – 9 AM",
      "5": "4 PM – 9 AM",
      "6": "4 PM – 9 AM",
      "7": "NA",
      "8": "NA",
      "9": "All day",
      "10": "All day",
      "11": "All day",
      "12": "NA"
    }
  },
  "tank_length": 1,
  "tank_width": 1,
  "total_catch": 100,
  "url": "https://nookipedia.com/wiki/Cherry Salmon"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 404 Response

```json
{
  "details": "MediaWiki Cargo request succeeded by nothing was returned for the parameters: {}",
  "title": "No data was found for the given query."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-fish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the fish.|[NHFish](#schemanhfish)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|404|Not Found|Could not find the specified fish.|[Error404](#schemaerror404)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons fossil groups or individual fossil

> Code samples

```bash
curl https://example.com/nh/fossils/all \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/fossils/all`

Get a list of all the fossil groups with their respective individual fossils in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-fossil-groups-or-individual-fossil-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
[
  {
    "description": "Ahem. Yes. The Spinosaurus was a very large, carnivorous dinosaur, roughly the size of a T. Rex. Unlike its more famous cousin, however, Spinosaurus seems to have spent a great deal of time in water. Similar to modern crocodiles, this creature lived on a diet of fish AND land-dwelling animals. Personally, I am simply relieved that it did not seek FLYING prey.",
    "fossils": [
      {
        "colors": [
          "Brown"
        ],
        "hha_base": 87,
        "image_url": "https://dodo.ac/np/images/7/7b/Spino_Skull_NH_Icon.png",
        "interactable": true,
        "length": 2,
        "name": "Spino Skull",
        "sell": 4000,
        "url": "https://nookipedia.com/wiki/Spinosaurus",
        "width": 2
      },
      {
        "colors": [
          "Brown"
        ],
        "hha_base": 87,
        "image_url": "https://dodo.ac/np/images/4/40/Spino_Tail_NH_Icon.png",
        "interactable": true,
        "length": 2,
        "name": "Spino Tail",
        "sell": 2500,
        "url": "https://nookipedia.com/wiki/Spinosaurus",
        "width": 2
      },
      {
        "colors": [
          "Brown"
        ],
        "hha_base": 87,
        "image_url": "https://dodo.ac/np/images/9/92/Spino_Torso_NH_Icon.png",
        "interactable": true,
        "length": 2,
        "name": "Spino Torso",
        "sell": 3000,
        "url": "https://nookipedia.com/wiki/Spinosaurus",
        "width": 2
      }
    ],
    "name": "Spinosaurus",
    "room": 2,
    "url": "https://nookipedia.com/wiki/Spinosaurus"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-fossil-groups-or-individual-fossil-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of fossil groups.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-fossil-groups-or-individual-fossil-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHFossilGroupWithIndividualFossilsNoMatched](#schemanhfossilgroupwithindividualfossilsnomatched)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons fossil group with individual fossils

> Code samples

```bash
curl https://example.com/nh/fossils/all/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/fossils/all/{fossil}`

Retrieve information about a specific fossil group with their respective individual fossils in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-fossil-group-with-individual-fossils-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fossil|path|string|true|The name of the fossil OR fossil group you wish to retrieve information about. If a fossil is provided, a fossil group that the specified fossil belongs to will be returned.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "description": "Ahem. Yes. The Spinosaurus was a very large, carnivorous dinosaur, roughly the size of a T. Rex. Unlike its more famous cousin, however, Spinosaurus seems to have spent a great deal of time in water. Similar to modern crocodiles, this creature lived on a diet of fish AND land-dwelling animals. Personally, I am simply relieved that it did not seek FLYING prey.",
  "fossils": [
    {
      "colors": [
        "Brown"
      ],
      "hha_base": 87,
      "image_url": "https://dodo.ac/np/images/7/7b/Spino_Skull_NH_Icon.png",
      "interactable": true,
      "length": 2,
      "name": "Spino Skull",
      "sell": 4000,
      "url": "https://nookipedia.com/wiki/Spinosaurus",
      "width": 2
    },
    {
      "colors": [
        "Brown"
      ],
      "hha_base": 87,
      "image_url": "https://dodo.ac/np/images/4/40/Spino_Tail_NH_Icon.png",
      "interactable": true,
      "length": 2,
      "name": "Spino Tail",
      "sell": 2500,
      "url": "https://nookipedia.com/wiki/Spinosaurus",
      "width": 2
    },
    {
      "colors": [
        "Brown"
      ],
      "hha_base": 87,
      "image_url": "https://dodo.ac/np/images/9/92/Spino_Torso_NH_Icon.png",
      "interactable": true,
      "length": 2,
      "name": "Spino Torso",
      "sell": 3000,
      "url": "https://nookipedia.com/wiki/Spinosaurus",
      "width": 2
    }
  ],
  "matched": {
    "name": "Spino Skull",
    "type": "individual"
  },
  "name": "Spinosaurus",
  "room": 2,
  "url": "https://nookipedia.com/wiki/Spinosaurus"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-fossil-group-with-individual-fossils-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the fossil group.|[NHFossilGroupWithIndividualFossils](#schemanhfossilgroupwithindividualfossils)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons fossil groups

> Code samples

```bash
curl https://example.com/nh/fossils/groups \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/fossils/groups`

Get a list of all the fossil groups in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-fossil-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
[
  {
    "description": "Ahem. Yes. The Spinosaurus was a very large, carnivorous dinosaur, roughly the size of a T. Rex. Unlike its more famous cousin, however, Spinosaurus seems to have spent a great deal of time in water. Similar to modern crocodiles, this creature lived on a diet of fish AND land-dwelling animals. Personally, I am simply relieved that it did not seek FLYING prey.",
    "name": "Spinosaurus",
    "room": 2,
    "url": "https://nookipedia.com/wiki/Spinosaurus"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-fossil-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of fossil groups.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-fossil-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHFossilGroup](#schemanhfossilgroup)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons fossil group

> Code samples

```bash
curl https://example.com/nh/fossils/groups/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/fossils/groups/{fossil_group}`

Retrieve information about a specific fossil group in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-fossil-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fossil_group|path|string|true|The name of the fossil group you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "description": "Ahem. Yes. The Spinosaurus was a very large, carnivorous dinosaur, roughly the size of a T. Rex. Unlike its more famous cousin, however, Spinosaurus seems to have spent a great deal of time in water. Similar to modern crocodiles, this creature lived on a diet of fish AND land-dwelling animals. Personally, I am simply relieved that it did not seek FLYING prey.",
  "name": "Spinosaurus",
  "room": 2,
  "url": "https://nookipedia.com/wiki/Spinosaurus"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-fossil-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the fossil group.|[NHFossilGroup](#schemanhfossilgroup)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons fossils

> Code samples

```bash
curl https://example.com/nh/fossils/individuals \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/fossils/individuals`

Get a list of all the individual fossils in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-fossils-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
[
  {
    "colors": [
      "Brown"
    ],
    "fossil_group": "Spinosaurus",
    "hha_base": 87,
    "image_url": "https://dodo.ac/np/images/7/7b/Spino_Skull_NH_Icon.png",
    "interactable": false,
    "length": 2,
    "name": "Spino Skull",
    "sell": 4000,
    "url": "https://nookipedia.com/wiki/Spinosaurus",
    "width": 2
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-fossils-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of individual fossils.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-fossils-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHIndividualFossil](#schemanhindividualfossil)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons fossil

> Code samples

```bash
curl https://example.com/nh/fossils/individuals/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/fossils/individuals/{fossil}`

Retrieve information about a specific individual fossil in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-fossil-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fossil|path|string|true|The name of the individual fossil you wish to retrieve fossil information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "colors": [
    "Brown"
  ],
  "fossil_group": "Spinosaurus",
  "hha_base": 87,
  "image_url": "https://dodo.ac/np/images/7/7b/Spino_Skull_NH_Icon.png",
  "interactable": false,
  "length": 2,
  "name": "Spino Skull",
  "sell": 4000,
  "url": "https://nookipedia.com/wiki/Spinosaurus",
  "width": 2
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-fossil-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the individual fossil.|[NHIndividualFossil](#schemanhindividualfossil)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons furniture

> Code samples

```bash
curl https://example.com/nh/furniture \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/furniture`

Get a list of all furniture and their details in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-furniture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|category|query|string|false|Specify the category of furniture to return (houswares, miscellaneous, or wall-mounted).|
|color|query|[string]|false|Return furniture that matches the provided colors (may specify one or two colors).|
|excludedetails|query|string|false|When set to `true`, only furniture names are returned. Instead of an array of objects with all details, the return will be an array of strings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|category|Housewares|
|category|Miscellaneous|
|category|Wall-mounted|
|color|Aqua|
|color|Beige|
|color|Black|
|color|Blue|
|color|Brown|
|color|Colorful|
|color|Gray|
|color|Green|
|color|Orange|
|color|Pink|
|color|Purple|
|color|Red|
|color|White|
|color|Yellow|

> Example responses

> 200 Response

```json
[
  {
    "availability": [
      {
        "from": "Nook's Cranny (Upgraded)",
        "note": ""
      }
    ],
    "buy": [
      {
        "currency": "Bells",
        "price": 31000
      }
    ],
    "category": "Housewares",
    "custom_body_part": "",
    "custom_kit_type": "",
    "custom_kits": 0,
    "custom_pattern_part": "",
    "customizable": false,
    "door_decor": false,
    "functions": [
      "Dresser"
    ],
    "grid_length": 1,
    "grid_width": 2,
    "height": 15.98677,
    "hha_base": 251,
    "hha_category": "Dresser",
    "item_series": "Antique",
    "item_set": "",
    "lucky": false,
    "lucky_season": "",
    "name": "Antique Vanity",
    "notes": "",
    "pattern_total": 0,
    "sell": 7750,
    "tag": "Dresser",
    "themes": [
      "Living Room",
      "Expensive"
    ],
    "unlocked": true,
    "url": "https://nookipedia.com/wiki/Item:Antique_Vanity_(New_Horizons)",
    "variation_total": 3,
    "variations": [
      {
        "colors": [
          "Aqua",
          "Brown"
        ],
        "image_url": "https://dodo.ac/np/images/9/9e/Antique_Vanity_%28Brown%29_NH_Icon.png",
        "pattern": "",
        "variation": "Brown"
      },
      {
        "colors": [
          "Aqua",
          "Beige"
        ],
        "image_url": "https://dodo.ac/np/images/a/ab/Antique_Vanity_%28Natural%29_NH_Icon.png",
        "pattern": "",
        "variation": "Natural"
      },
      {
        "colors": [
          "Aqua",
          "Black"
        ],
        "image_url": "https://dodo.ac/np/images/5/55/Antique_Vanity_%28Black%29_NH_Icon.png",
        "pattern": "",
        "variation": "Black"
      }
    ],
    "version_added": "1.0.0"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-furniture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of furniture.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-furniture-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHFurniture](#schemanhfurniture)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons furniture

> Code samples

```bash
curl https://example.com/nh/furniture/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/furniture/{furniture}`

Retrieve information about a specific furniture in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-furniture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|furniture|path|string|true|The name of the furniture you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "availability": [
    {
      "from": "Nook's Cranny (Upgraded)",
      "note": ""
    }
  ],
  "buy": [
    {
      "currency": "Bells",
      "price": 31000
    }
  ],
  "category": "Housewares",
  "custom_body_part": "",
  "custom_kit_type": "",
  "custom_kits": 0,
  "custom_pattern_part": "",
  "customizable": false,
  "door_decor": false,
  "functions": [
    "Dresser"
  ],
  "grid_length": 1,
  "grid_width": 2,
  "height": 15.98677,
  "hha_base": 251,
  "hha_category": "Dresser",
  "item_series": "Antique",
  "item_set": "",
  "lucky": false,
  "lucky_season": "",
  "name": "Antique Vanity",
  "notes": "",
  "pattern_total": 0,
  "sell": 7750,
  "tag": "Dresser",
  "themes": [
    "Living Room",
    "Expensive"
  ],
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:Antique_Vanity_(New_Horizons)",
  "variation_total": 3,
  "variations": [
    {
      "colors": [
        "Aqua",
        "Brown"
      ],
      "image_url": "https://dodo.ac/np/images/9/9e/Antique_Vanity_%28Brown%29_NH_Icon.png",
      "pattern": "",
      "variation": "Brown"
    },
    {
      "colors": [
        "Aqua",
        "Beige"
      ],
      "image_url": "https://dodo.ac/np/images/a/ab/Antique_Vanity_%28Natural%29_NH_Icon.png",
      "pattern": "",
      "variation": "Natural"
    },
    {
      "colors": [
        "Aqua",
        "Black"
      ],
      "image_url": "https://dodo.ac/np/images/5/55/Antique_Vanity_%28Black%29_NH_Icon.png",
      "pattern": "",
      "variation": "Black"
    }
  ],
  "version_added": "1.0.0"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-furniture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the furniture.|[NHFurniture](#schemanhfurniture)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons interior items

> Code samples

```bash
curl https://example.com/nh/interior \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/interior`

Get a list of all interior items (flooring, wallpaper, and rugs) and their details in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-interior-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|color|query|[string]|false|Return furniture that matches the provided colors (may specify one or two colors).|
|excludedetails|query|string|false|When set to `true`, only interior item names are returned. Instead of an array of objects with all details, the return will be an array of strings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|color|Aqua|
|color|Beige|
|color|Black|
|color|Blue|
|color|Brown|
|color|Colorful|
|color|Gray|
|color|Green|
|color|Orange|
|color|Pink|
|color|Purple|
|color|Red|
|color|White|
|color|Yellow|

> Example responses

> 200 Response

```json
[
  {
    "availability": [
      {
        "from": "Nook's",
        "note": ""
      }
    ],
    "buy": [
      {
        "currency": "Bells",
        "price": 1560
      }
    ],
    "category": "Wallpaper",
    "colors": [
      "White",
      "Colorful"
    ],
    "grid_length": 1,
    "grid_width": 2,
    "hha_base": 0,
    "hha_category": "Dresser",
    "image_url": "https://dodo.ac/np/images/2/2d/Abstract_Wall_NH_Icon.png",
    "item_series": "",
    "item_set": "",
    "name": "Abstract Wall",
    "notes": "",
    "sell": 200,
    "tag": "Dresser",
    "themes": [
      "Shop",
      "Facility"
    ],
    "unlocked": true,
    "url": "https://nookipedia.com/wiki/Item:Abstract_Wall_(New_Horizons)",
    "version_added": "1.0.0"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-interior-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of interior items.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-interior-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHInterior](#schemanhinterior)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons interior item

> Code samples

```bash
curl https://example.com/nh/interior/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/interior/{item}`

Retrieve information about a specific interior item in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-interior-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|item|path|string|true|The name of the interior item you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|color|query|[string]|false|Return furniture that matches the provided colors (may specify one or two colors).|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|color|Aqua|
|color|Beige|
|color|Black|
|color|Blue|
|color|Brown|
|color|Colorful|
|color|Gray|
|color|Green|
|color|Orange|
|color|Pink|
|color|Purple|
|color|Red|
|color|White|
|color|Yellow|

> Example responses

> 200 Response

```json
{
  "availability": [
    {
      "from": "Nook's",
      "note": ""
    }
  ],
  "buy": [
    {
      "currency": "Bells",
      "price": 1560
    }
  ],
  "category": "Wallpaper",
  "colors": [
    "White",
    "Colorful"
  ],
  "grid_length": 1,
  "grid_width": 2,
  "hha_base": 0,
  "hha_category": "Dresser",
  "image_url": "https://dodo.ac/np/images/2/2d/Abstract_Wall_NH_Icon.png",
  "item_series": "",
  "item_set": "",
  "name": "Abstract Wall",
  "notes": "",
  "sell": 200,
  "tag": "Dresser",
  "themes": [
    "Shop",
    "Facility"
  ],
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:Abstract_Wall_(New_Horizons)",
  "version_added": "1.0.0"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-interior-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the interior item.|[NHInterior](#schemanhinterior)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## Miscellaneous New Horizons items

> Code samples

```bash
curl https://example.com/nh/items \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/items`

Get a list of all miscellaneous items (such as materials, star fragments, fruits, fences, and plants) and their details in *Animal Crossing: New Horizons*.

<h3 id="miscellaneous-new-horizons-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|excludedetails|query|string|false|When set to `true`, only item names are returned. Instead of an array of objects with all details, the return will be an array of strings.|

> Example responses

> 200 Response

```json
[
  {
    "availability": [
      {
        "from": "Nook's",
        "note": ""
      }
    ],
    "buy": [
      {
        "currency": "Bells",
        "price": 280
      }
    ],
    "edible": false,
    "hha_base": 0,
    "image_url": "https://dodo.ac/np/images/9/9f/Acorn_NH_Icon.png",
    "is_fence": false,
    "material_name_sort": 0,
    "material_seasonality": "Autumn",
    "material_seasonality_sort": 3,
    "material_sort": 3,
    "material_type": "Tree",
    "name": "Acorn",
    "notes": "",
    "plant_type": "",
    "sell": 200,
    "stack": 30,
    "unlocked": true,
    "url": "https://nookipedia.com/wiki/Item:Acorn_(New_Horizons)",
    "version_added": "1.0.0"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="miscellaneous-new-horizons-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of items.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="miscellaneous-new-horizons-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHItem](#schemanhitem)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons miscellaneous item

> Code samples

```bash
curl https://example.com/nh/items/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/items/{item}`

Retrieve information about a miscellaneous item (such as materials, star fragments, fruits, fences, and plants) in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-miscellaneous-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|item|path|string|true|The name of the interior item you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "availability": [
    {
      "from": "Nook's",
      "note": ""
    }
  ],
  "buy": [
    {
      "currency": "Bells",
      "price": 280
    }
  ],
  "edible": false,
  "hha_base": 0,
  "image_url": "https://dodo.ac/np/images/9/9f/Acorn_NH_Icon.png",
  "is_fence": false,
  "material_name_sort": 0,
  "material_seasonality": "Autumn",
  "material_seasonality_sort": 3,
  "material_sort": 3,
  "material_type": "Tree",
  "name": "Acorn",
  "notes": "",
  "plant_type": "",
  "sell": 200,
  "stack": 30,
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:Acorn_(New_Horizons)",
  "version_added": "1.0.0"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-miscellaneous-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the item.|[NHItem](#schemanhitem)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons photos and posters

> Code samples

```bash
curl https://example.com/nh/photos \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/photos`

Get a list of all character photos+posters and their details in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-photos-and-posters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|excludedetails|query|string|false|When set to `true`, only item names are returned. Instead of an array of objects with all details, the return will be an array of strings.|

> Example responses

> 200 Response

```json
[
  {
    "availability": [
      {
        "from": "Friendship",
        "note": ""
      }
    ],
    "buy": [],
    "category": "Accessories",
    "custom_body_part": "Frame",
    "custom_kits": 1,
    "customizable": false,
    "grid_length": 1,
    "grid_width": 2,
    "interactable": true,
    "name": "Admiral's Photo",
    "sell": 10,
    "unlocked": true,
    "url": "https://nookipedia.com/wiki/Item:Admiral's_Photo_(New_Horizons)",
    "variations": [
      {
        "colors": [
          "Blue",
          "Green"
        ],
        "image_url": "https://dodo.ac/np/images/7/72/Admiral%27s_Photo_%28Natural_Wood%29_NH_Icon.png",
        "variation": "Natural Wood"
      },
      {
        "colors": [
          "Blue",
          "Green"
        ],
        "image_url": "https://dodo.ac/np/images/e/e5/Admiral%27s_Photo_%28Dark_Wood%29_NH_Icon.png",
        "variation": "Dark Wood"
      },
      {
        "colors": [
          "Blue",
          "Green"
        ],
        "image_url": "https://dodo.ac/np/images/9/9a/Admiral%27s_Photo_%28Pastel%29_NH_Icon.png",
        "variation": "Pastel"
      },
      {
        "colors": [
          "Blue",
          "Green"
        ],
        "image_url": "https://dodo.ac/np/images/1/16/Admiral%27s_Photo_%28White%29_NH_Icon.png",
        "variation": "White"
      },
      {
        "colors": [
          "Blue",
          "Green"
        ],
        "image_url": "https://dodo.ac/np/images/b/be/Admiral%27s_Photo_%28Pop%29_NH_Icon.png",
        "variation": "Pop"
      },
      {
        "colors": [
          "Blue",
          "Green"
        ],
        "image_url": "https://dodo.ac/np/images/5/51/Admiral%27s_Photo_%28Colorful%29_NH_Icon.png",
        "variation": "Colorful"
      },
      {
        "colors": [
          "Blue",
          "Green"
        ],
        "image_url": "https://dodo.ac/np/images/e/ed/Admiral%27s_Photo_%28Silver%29_NH_Icon.png",
        "variation": "Silver"
      },
      {
        "colors": [
          "Blue",
          "Green"
        ],
        "image_url": "https://dodo.ac/np/images/c/cf/Admiral%27s_Photo_%28Gold%29_NH_Icon.png",
        "variation": "Gold"
      }
    ],
    "version_added": "1.0.0"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-photos-and-posters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of photos and posters.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-photos-and-posters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHPhoto](#schemanhphoto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons photo or poster

> Code samples

```bash
curl https://example.com/nh/photos/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/photos/{item}`

Retrieve information about a character photo or poster in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-photo-or-poster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|item|path|string|true|The name of the photo or poster you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "availability": [
    {
      "from": "Friendship",
      "note": ""
    }
  ],
  "buy": [],
  "category": "Accessories",
  "custom_body_part": "Frame",
  "custom_kits": 1,
  "customizable": false,
  "grid_length": 1,
  "grid_width": 2,
  "interactable": true,
  "name": "Admiral's Photo",
  "sell": 10,
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:Admiral's_Photo_(New_Horizons)",
  "variations": [
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/7/72/Admiral%27s_Photo_%28Natural_Wood%29_NH_Icon.png",
      "variation": "Natural Wood"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/e/e5/Admiral%27s_Photo_%28Dark_Wood%29_NH_Icon.png",
      "variation": "Dark Wood"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/9/9a/Admiral%27s_Photo_%28Pastel%29_NH_Icon.png",
      "variation": "Pastel"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/1/16/Admiral%27s_Photo_%28White%29_NH_Icon.png",
      "variation": "White"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/b/be/Admiral%27s_Photo_%28Pop%29_NH_Icon.png",
      "variation": "Pop"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/5/51/Admiral%27s_Photo_%28Colorful%29_NH_Icon.png",
      "variation": "Colorful"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/e/ed/Admiral%27s_Photo_%28Silver%29_NH_Icon.png",
      "variation": "Silver"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/c/cf/Admiral%27s_Photo_%28Gold%29_NH_Icon.png",
      "variation": "Gold"
    }
  ],
  "version_added": "1.0.0"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-photo-or-poster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the photo or poster.|[NHPhoto](#schemanhphoto)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons recipes

> Code samples

```bash
curl https://example.com/nh/recipes \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/recipes`

Get a list of all recipes and their details in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-recipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|material|query|string|false|Specify a material to only get recipes that use that material. You can specify `material` up to six times (no recipe uses more than six materials).|
|excludedetails|query|string|false|When set to `true`, only recipe names are returned. Instead of an array of objects with all details, the return will be an array of strings.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.|

> Example responses

> 200 Response

```json
[
  {
    "availability": [
      {
        "from": "Tom Nook",
        "note": "Obtained through Tom Nook's DIY Workshop at the beginning of the game."
      },
      {
        "from": "Nook's Cranny",
        "note": ""
      }
    ],
    "buy": [
      {
        "currency": "Bells",
        "price": 280
      }
    ],
    "image_url": "https://dodo.ac/np/images/a/ac/Flimsy_Axe_NH_DIY_Icon.png",
    "materials": [
      {
        "count": 5,
        "name": "Tree Branch"
      },
      {
        "count": 1,
        "name": "Stone"
      }
    ],
    "name": "Flimsy Axe",
    "recipes_to_unlock": 0,
    "sell": 200,
    "serial_id": 100,
    "url": "https://nookipedia.com/wiki/Item:Flimsy_Axe_(New_Horizons)"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-recipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of recipes.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-recipes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHRecipe](#schemanhrecipe)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons recipe

> Code samples

```bash
curl https://example.com/nh/recipes/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/recipes/{item}`

Retrieve information about a specific recipe in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-recipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|item|path|string|true|The name of the item you wish to retrieve recipe information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "availability": [
    {
      "from": "Tom Nook",
      "note": "Obtained through Tom Nook's DIY Workshop at the beginning of the game."
    },
    {
      "from": "Nook's Cranny",
      "note": ""
    }
  ],
  "buy": [
    {
      "currency": "Bells",
      "price": 280
    }
  ],
  "image_url": "https://dodo.ac/np/images/a/ac/Flimsy_Axe_NH_DIY_Icon.png",
  "materials": [
    {
      "count": 5,
      "name": "Tree Branch"
    },
    {
      "count": 1,
      "name": "Stone"
    }
  ],
  "name": "Flimsy Axe",
  "recipes_to_unlock": 0,
  "sell": 200,
  "serial_id": 100,
  "url": "https://nookipedia.com/wiki/Item:Flimsy_Axe_(New_Horizons)"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the recipe.|[NHRecipe](#schemanhrecipe)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons sea creatures

> Code samples

```bash
curl https://example.com/nh/sea \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/sea`

Get a list of all sea creatures and their details in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-sea-creatures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|month|query|string|false|Retrive only the sea creature that are available in a specific month. Value may be the month's name (`jan`, `january`), the integer representing the month (`01`, `1`), or `current` for the current month. When `current` is specified, the return body will be an object with two arrays inside, one called `north` and the other `south` containing the sea creature available in each respective hemisphere. Note that the current month is calculated based off the API server's time, so it may be slightly off for you at the beginning or end of the month.|
|excludedetails|query|string|false|When set to `true`, only sea creature names are returned. Instead of an array of objects with all details, the return will be an array of strings. This is particularly useful when used with the `month` filter, for users who want just a list of sea creatures in a given month but not all their respective details.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.|

> Example responses

> 200 Response

```json
[
  {
    "catchphrases": [
      "I got an octopus! It can give four hugs at once!"
    ],
    "image_url": "https://dodo.ac/np/images/5/58/Octopus_NH_Icon.png",
    "name": "Octopus",
    "north": {
      "availability_array": [
        {
          "months": "All year",
          "time": "All day"
        }
      ],
      "months": "Jul – Sep",
      "months_array": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "times_by_month": {
        "1": "All day",
        "2": "All day",
        "3": "All day",
        "4": "All day",
        "5": "All day",
        "6": "All day",
        "7": "All day",
        "8": "All day",
        "9": "All day",
        "10": "All day",
        "11": "All day",
        "12": "All day"
      }
    },
    "number": 20,
    "rarity": "Uncommon",
    "render_url": "https://dodo.ac/np/images/2/27/Octopus_NH.png",
    "sell_nook": 160,
    "shadow_movement": "Slow",
    "shadow_size": "Medium",
    "south": {
      "availability_array": [
        {
          "months": "All year",
          "time": "All day"
        }
      ],
      "months": "Jan – Mar",
      "months_array": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "times_by_month": {
        "1": "All day",
        "2": "All day",
        "3": "All day",
        "4": "All day",
        "5": "All day",
        "6": "All day",
        "7": "All day",
        "8": "All day",
        "9": "All day",
        "10": "All day",
        "11": "All day",
        "12": "All day"
      }
    },
    "tank_length": 1,
    "tank_width": 1,
    "total_catch": 0,
    "url": "https://nookipedia.com/wiki/Octopus_(fish)"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-sea-creatures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of sea creatures.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-sea-creatures-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHSeaCreature](#schemanhseacreature)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons sea creature

> Code samples

```bash
curl https://example.com/nh/sea/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/sea/{sea_creature}`

Retrieve information about a specific sea creature in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-sea-creature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sea_creature|path|string|true|The name of the sea creature you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "catchphrases": [
    "I got an octopus! It can give four hugs at once!"
  ],
  "image_url": "https://dodo.ac/np/images/5/58/Octopus_NH_Icon.png",
  "name": "Octopus",
  "north": {
    "availability_array": [
      {
        "months": "All year",
        "time": "All day"
      }
    ],
    "months": "Jul – Sep",
    "months_array": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "times_by_month": {
      "1": "All day",
      "2": "All day",
      "3": "All day",
      "4": "All day",
      "5": "All day",
      "6": "All day",
      "7": "All day",
      "8": "All day",
      "9": "All day",
      "10": "All day",
      "11": "All day",
      "12": "All day"
    }
  },
  "number": 20,
  "rarity": "Uncommon",
  "render_url": "https://dodo.ac/np/images/2/27/Octopus_NH.png",
  "sell_nook": 160,
  "shadow_movement": "Slow",
  "shadow_size": "Medium",
  "south": {
    "availability_array": [
      {
        "months": "All year",
        "time": "All day"
      }
    ],
    "months": "Jan – Mar",
    "months_array": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "times_by_month": {
      "1": "All day",
      "2": "All day",
      "3": "All day",
      "4": "All day",
      "5": "All day",
      "6": "All day",
      "7": "All day",
      "8": "All day",
      "9": "All day",
      "10": "All day",
      "11": "All day",
      "12": "All day"
    }
  },
  "tank_length": 1,
  "tank_width": 1,
  "total_catch": 0,
  "url": "https://nookipedia.com/wiki/Octopus_(fish)"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 404 Response

```json
{
  "details": "MediaWiki Cargo request succeeded by nothing was returned for the parameters: {}",
  "title": "No data was found for the given query."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-sea-creature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the sea creature.|[NHSeaCreature](#schemanhseacreature)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|404|Not Found|Could not find the specified sea creature.|[Error404](#schemaerror404)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## All New Horizons tools

> Code samples

```bash
curl https://example.com/nh/tools \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/tools`

Get a list of all tools and their details in *Animal Crossing: New Horizons*.

<h3 id="all-new-horizons-tools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|excludedetails|query|string|false|When set to `true`, only tool names are returned. Instead of an array of objects with all details, the return will be an array of strings.|

> Example responses

> 200 Response

```json
[
  {
    "availability": [
      {
        "from": "Nook's Cranny",
        "note": ""
      },
      {
        "from": "Crafting",
        "note": ""
      }
    ],
    "buy": [
      {
        "price": 2550
      },
      {
        "currency": "Bells"
      }
    ],
    "custom_body_part": "",
    "custom_kits": 0,
    "customizable": false,
    "hha_base": 0,
    "name": "Axe",
    "notes": "",
    "sell": 625,
    "unlocked": true,
    "url": "https://nookipedia.com/wiki/Item:Axe_(New_Horizons)",
    "uses": 100,
    "variations": [
      {
        "image_url": "https://dodo.ac/np/images/f/fa/Axe_NH_Icon.png",
        "variation": ""
      }
    ],
    "version_added": "1.0.0"
  }
]
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="all-new-horizons-tools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of interior items.|Inline|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="all-new-horizons-tools-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NHTool](#schemanhtool)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Single New Horizons tool

> Code samples

```bash
curl https://example.com/nh/tools/string \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /nh/tools/{tool}`

Retrieve information about a specific tool in *Animal Crossing: New Horizons*.

<h3 id="single-new-horizons-tool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tool|path|string|true|The name of the interior item you wish to retrieve information about.|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.|

> Example responses

> 200 Response

```json
{
  "availability": [
    {
      "from": "Nook's Cranny",
      "note": ""
    },
    {
      "from": "Crafting",
      "note": ""
    }
  ],
  "buy": [
    {
      "price": 2550
    },
    {
      "currency": "Bells"
    }
  ],
  "custom_body_part": "",
  "custom_kits": 0,
  "customizable": false,
  "hha_base": 0,
  "name": "Axe",
  "notes": "",
  "sell": 625,
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:Axe_(New_Horizons)",
  "uses": 100,
  "variations": [
    {
      "image_url": "https://dodo.ac/np/images/f/fa/Axe_NH_Icon.png",
      "variation": ""
    }
  ],
  "version_added": "1.0.0"
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="single-new-horizons-tool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object describing the tool.|[NHTool](#schemanhtool)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<aside class="success">
This operation does not require authentication
</aside>

## Villagers

> Code samples

```bash
curl https://example.com/villagers \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: 497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept-Version: string'
```

`GET /villagers`

This endpoint retrieves villager information from the entire *Animal Crossing* series, with the option to filter by species, personality, game, and/or birthday. Filters use the AND operator (e.g. asking for villagers who have species `frog` and personality `smug` will return all smug frogs). Note that villagers only include the animals that act as residents. Special characters, such as Tom Nook and Isabelle, are not accessed through this endpoint.

<h3 id="villagers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string(uuid)|true|Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.|
|Accept-Version|header|string|true|The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.|
|name|query|string|false|Villager name. For most names you will get back an array with one object, but note that names are not a unique identifier across the series, as there are 3 names that are shared by multiple villagers (Lulu, Petunia, Carmen). For those 3 names you will get back an array with 2 objects. How you disambiguate between these villagers is up to you.|
|species|query|string|false|Retrieve villagers of a certain species.|
|personality|query|string|false|Retrieve villagers with a certain personality. For 'sisterly', note that the community often also calls it 'uchi' or 'big sister'.|
|game|query|[string]|false|Retrieve villagers that appear in all listed games. For example, if you want only villagers that appear in both *New Horizons* and *Pocket Camp*, you would send in `?game=nh&game=pc`.|
|birthmonth|query|string|false|Retrieve villagers born in a specific month. Value may be the month's name (`jan`, `january`) or the integer representing the month (`01`, `1`).|
|birthday|query|string|false|Use with `birthmonth` to get villager(s) born on a specific day. Value should be an int, 1 through 31.|
|nhdetails|query|string|false|When set to `true`, an `nh_details` object will be included that contains *New Horizons* details about the villager. If the villager does not appear in *New Horizons*, the returned `nh_details` field will be set to null.|
|excludedetails|query|string|false|When set to `true`, only villager names are returned. Instead of an array of objects with all details, the return will be an array of strings.|
|thumbsize|query|integer|false|Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|species|alligator|
|species|anteater|
|species|bear|
|species|bird|
|species|bull|
|species|cat|
|species|cub|
|species|chicken|
|species|cow|
|species|deer|
|species|dog|
|species|duck|
|species|eagle|
|species|elephant|
|species|frog|
|species|goat|
|species|gorilla|
|species|hamster|
|species|hippo|
|species|horse|
|species|koala|
|species|kangaroo|
|species|lion|
|species|monkey|
|species|mouse|
|species|octopus|
|species|ostrich|
|species|penguin|
|species|pig|
|species|rabbit|
|species|rhino|
|species|sheep|
|species|squirrel|
|species|tiger|
|species|wolf|
|personality|lazy|
|personality|jock|
|personality|cranky|
|personality|smug|
|personality|normal|
|personality|peppy|
|personality|snooty|
|personality|sisterly|
|game|DNM|
|game|AC|
|game|E_PLUS|
|game|WW|
|game|CF|
|game|NL|
|game|WA|
|game|NH|
|game|FILM|
|game|HHD|
|game|PC|

> Example responses

> 200 Response

```json
[
  {
    "alt_name": "",
    "appearances": [
      "DNM",
      "AC",
      "E_PLUS",
      "WW",
      "CF",
      "NL",
      "WA",
      "NH",
      "HHD",
      "PC"
    ],
    "birthday_day": "13",
    "birthday_month": "February",
    "clothing": "Simple Parka",
    "debut": "DNM",
    "gender": "Male",
    "id": "flg01",
    "image_url": "https://dodo.ac/np/images/9/94/Ribbot_NH.png",
    "islander": false,
    "name": "Ribbot",
    "nh_details": {
      "catchphrase": "zzrrbbit",
      "clothing": "Simple Parka",
      "clothing_variation": "Light Blue",
      "fav_colors": [
        "Blue",
        "Aqua"
      ],
      "fav_styles": [
        "Simple",
        "Active"
      ],
      "hobby": "Fitness",
      "house_exterior_url": "https://dodo.ac/np/images/4/42/House_of_Ribbot_NH_Model.png",
      "house_flooring": "Future-Tech Flooring",
      "house_interior_url": "https://dodo.ac/np/images/8/86/House_of_Ribbot_NH.png",
      "house_music": "K.K. Technopop",
      "house_music_note": "",
      "house_wallpaper": "Circuit-Board Wall",
      "icon_url": "https://dodo.ac/np/images/8/87/Ribbot_NH_Villager_Icon.png",
      "image_url": "https://dodo.ac/np/images/9/94/Ribbot_NH.png",
      "photo_url": "https://dodo.ac/np/images/0/03/RibbotPicACNH.png",
      "quote": "Never rest, never rust.",
      "sub-personality": "B"
    },
    "personality": "Jock",
    "phrase": "zzrrbbit",
    "prev_phrases": [
      "toady"
    ],
    "quote": "Never rest, never rust.",
    "sign": "Aquarius",
    "species": "Frog",
    "text_color": "5e5e5e",
    "title_color": "bfbfbf",
    "url": "https://nookipedia.com/wiki/Ribbot"
  }
]
```

> 400 Response

```json
{
  "details": "Provided month filter jonuary was not recognized as a valid month.",
  "title": "Failed to identify the provided month filter."
}
```

> 401 Response

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

> 500 Response

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

<h3 id="villagers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of villagers.|Inline|
|400|Bad Request|One of the inputs (usually query parameters) has an invalid value.|[Error400](#schemaerror400)|
|401|Unauthorized|Failed to authenticate user from `X-API-KEY`.|[Error401](#schemaerror401)|
|500|Internal Server Error|There was an error fetching the requested data.|[Error500](#schemaerror500)|

<h3 id="villagers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Villager](#schemavillager)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error400">Error400</h2>
<!-- backwards compatibility -->
<a id="schemaerror400"></a>
<a id="schema_Error400"></a>
<a id="tocSerror400"></a>
<a id="tocserror400"></a>

```json
{
  "details": "Provided month filter jonuary was not recognized as a valid month.",
  "title": "Failed to identify the provided month filter."
}
```

Bad request (often an invalid input).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|A more in-depth description of the issue, including parameters and/or error text when available.|
|title|string|false|none|A brief title describing the error.|

<h2 id="tocS_Error401">Error401</h2>
<!-- backwards compatibility -->
<a id="schemaerror401"></a>
<a id="schema_Error401"></a>
<a id="tocSerror401"></a>
<a id="tocserror401"></a>

```json
{
  "details": "UUID is either missing or invalid; or, unspecified server occured.",
  "title": "Failed to validate UUID."
}
```

Unauthorized.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|A more in-depth description of the issue, including parameters and/or error text when available.|
|title|string|false|none|A brief title describing the error.|

<h2 id="tocS_Error404">Error404</h2>
<!-- backwards compatibility -->
<a id="schemaerror404"></a>
<a id="schema_Error404"></a>
<a id="tocSerror404"></a>
<a id="tocserror404"></a>

```json
{
  "details": "MediaWiki Cargo request succeeded by nothing was returned for the parameters: {}",
  "title": "No data was found for the given query."
}
```

Not found.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|A more in-depth description of the issue, including parameters and/or error text when available.|
|title|string|false|none|A brief title describing the error.|

<h2 id="tocS_Error500">Error500</h2>
<!-- backwards compatibility -->
<a id="schemaerror500"></a>
<a id="schema_Error500"></a>
<a id="tocSerror500"></a>
<a id="tocserror500"></a>

```json
{
  "details": "Details unknown.",
  "title": "API experienced a fatal error."
}
```

Internal server error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|A more in-depth description of the issue, including parameters and/or error text when available.|
|title|string|false|none|A brief title describing the error.|

<h2 id="tocS_NHArtwork">NHArtwork</h2>
<!-- backwards compatibility -->
<a id="schemanhartwork"></a>
<a id="schema_NHArtwork"></a>
<a id="tocSnhartwork"></a>
<a id="tocsnhartwork"></a>

```json
{
  "art_name": "Vitruvian Man",
  "art_style": "Pen and ink on paper",
  "authenticity": "If there is a coffee stain in the top right corner, it is fake. If there is no stain, it is genuine. The forgery has a key taped to the back of the canvas.",
  "author": "Leonardo da Vinci",
  "availability": "Jolly Redd's Treasure Trawler",
  "buy": 4980,
  "description": "This drawing is based on the &quot;ideal&quot; human-body ratio, as stated in &quot;De architectura.&quot; &quot;De architectura&quot; was a treatise by Vitruvius, an architect from the early 1st century BCE.",
  "fake_image_url": "https://dodo.ac/np/images/1/13/Academic_Painting_%28Forgery%29_NH_Icon.png",
  "has_fake": true,
  "image_url": "https://dodo.ac/np/images/e/e8/Academic_Painting_NH_Icon.png",
  "length": 1,
  "name": "Academic Painting",
  "sell": 1245,
  "url": "https://nookipedia.com/wiki/Academic_Painting",
  "width": 1,
  "year": "circa 1487"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|art_name|string|false|none|The name of the real-life analog to the artwork.|
|art_style|string|false|none|The art style of the artwork.|
|authenticity|string|false|none|The description of the difference between real and fake, if there is one|
|author|string|false|none|The author of the real-life analog to the artwork.|
|availability|string|false|none|The availability of the artwork.|
|buy|integer|false|none|The number of Bells the artwork may be purchased for.|
|description|string|false|none|The description of the artwork.|
|fake_image_url|string|false|none|Image of the fake artwork, if it exists.|
|has_fake|boolean|false|none|Whether the artwork has a fake or not.|
|image_url|string|false|none|Image of the real artwork. dodo.ac is Nookipedia's CDN server.|
|length|number(float)|false|none|The length of the artwork.|
|name|string|false|none|Name of the artwork.|
|sell|integer|false|none|The number of Bells the artwork can be sold to Nook's store for, when it is genuine.|
|url|string|false|none|Link to the respective Nookipedia article.|
|width|number(float)|false|none|The width of the artwork.|
|year|string|false|none|The year that the real-life analog was made.|

<h2 id="tocS_NHBug">NHBug</h2>
<!-- backwards compatibility -->
<a id="schemanhbug"></a>
<a id="schema_NHBug"></a>
<a id="tocSnhbug"></a>
<a id="tocsnhbug"></a>

```json
{
  "catchphrases": [
    "I caught a grasshopper! They're a grass act!"
  ],
  "image_url": "https://dodo.ac/np/images/3/37/Grasshopper_NH_Icon.png",
  "location": "On the ground",
  "name": "Grasshopper",
  "north": {
    "availability_array": [
      {
        "months": "Jul – Sep",
        "time": "8 AM – 5 PM"
      }
    ],
    "months": "Jul – Sep",
    "months_array": [
      7,
      8,
      9
    ],
    "times_by_month": {
      "1": "NA",
      "2": "NA",
      "3": "NA",
      "4": "NA",
      "5": "NA",
      "6": "NA",
      "7": "8 AM – 5 PM",
      "8": "8 AM – 5 PM",
      "9": "8 AM – 5 PM",
      "10": "NA",
      "11": "NA",
      "12": "NA"
    }
  },
  "number": 19,
  "rarity": "Uncommon",
  "render_url": "https://dodo.ac/np/images/1/1d/Grasshopper_NH.png",
  "sell_flick": 240,
  "sell_nook": 160,
  "south": {
    "availability_array": [
      {
        "months": "Jan – Mar",
        "time": "8 AM – 5 PM"
      }
    ],
    "months": "Jan – Mar",
    "months_array": [
      1,
      2,
      3
    ],
    "times_by_month": {
      "1": "8 AM – 5 PM",
      "2": "8 AM – 5 PM",
      "3": "8 AM – 5 PM",
      "4": "NA",
      "5": "NA",
      "6": "NA",
      "7": "NA",
      "8": "NA",
      "9": "NA",
      "10": "NA",
      "11": "NA",
      "12": "NA"
    }
  },
  "tank_length": 1,
  "tank_width": 1,
  "total_catch": 0,
  "url": "https://nookipedia.com/wiki/Grasshopper"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catchphrases|[string]|false|none|An array of possible catchphrases the player says after catching the bug. Most critters have just one, but some can have multiple.|
|image_url|string|false|none|Image of the bug. dodo.ac is Nookipedia's CDN server.|
|location|string|false|none|Short descriptor of where the bug can be found.|
|name|string|false|none|Name of the bug.|
|north|object|false|none|When you can catch the bug in the Northern hemisphere.|
|number|integer|false|none|In-game bug number, marking position in the Critterpedia.|
|rarity|string|false|none|How rare the bug is. Note that this field is currently empty for most bugs as we do not yet know how exactly bug rarities are calculated in the game code.|
|render_url|string|false|none|Render of the bug. dodo.ac is Nookipedia's CDN server.|
|sell_flick|integer|false|none|The number of Bells the bug can be sold to Flick for. This value is always 1.5x that of `sell_nook`.|
|sell_nook|integer|false|none|The number of Bells the bug can be sold to Nook's store for.|
|south|object|false|none|When you can catch the bug in the Southern hemisphere.|
|tank_length|number(float)|false|none|The length of the tank when the bug is placed as a furniture item.|
|tank_width|number(float)|false|none|The width of the tank when the bug is placed as a furniture item.|
|total_catch|integer|false|none|The total number of bug the player has to have caught before this bug will start spawning.|
|url|string|false|none|Link to the respective Nookipedia article.|

<h2 id="tocS_NHClothing">NHClothing</h2>
<!-- backwards compatibility -->
<a id="schemanhclothing"></a>
<a id="schema_NHClothing"></a>
<a id="tocSnhclothing"></a>
<a id="tocsnhclothing"></a>

```json
{
  "availability": [
    {
      "from": "Able Sisters",
      "note": ""
    }
  ],
  "buy": [
    {
      "currency": "Bells",
      "price": 490
    }
  ],
  "category": "Accessories",
  "label_themes": [
    "Party"
  ],
  "name": "3D Glasses",
  "notes": "",
  "seasonality": "All year",
  "sell": 122,
  "styles": [
    "Active"
  ],
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:3D_Glasses_(New_Horizons)",
  "variation_total": 2,
  "variations": [
    {
      "colors": [
        "White",
        "Colorful"
      ],
      "image_url": "https://dodo.ac/np/images/1/15/3D_Glasses_%28White%29_NH_Icon.png",
      "variation": "White"
    },
    {
      "colors": [
        "Colorful",
        "Black"
      ],
      "image_url": "https://dodo.ac/np/images/2/28/3D_Glasses_%28Black%29_NH_Icon.png",
      "variation": "Black"
    }
  ],
  "version_added": "1.0.0",
  "vill_equip": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[object]|false|none|Where the clothing may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.|
|buy|[object]|false|none|An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..|
|category|string|false|none|The category of item as shown in the player's inventory.|
|label_themes|[string]|false|none|The clothing's Label theme(s). This is used for completing the requested outfit theme for [Label](https://nookipedia.com/wiki/Label) when she visits the player's island.|
|name|string|false|none|The name of the clothing.|
|notes|string|false|none|Any additional miscellaneous information about the clothing, such as a name change from a past update.|
|seasonality|string|false|none|The time of the year that the clothing is available.|
|sell|integer|false|none|The number of Bells the clothing can be sold to the store for.|
|styles|[string]|false|none|The clothing's style(s). Styles are used for gifting villagers.|
|unlocked|boolean|false|none|Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.|
|url|string|false|none|Link to the respective Nookipedia article.|
|variation_total|integer|false|none|The total number of variations the clothing has, between 0 and 8.|
|variations|[object]|false|none|An array of objects, each object representing a variation of the clothing. Clothing that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` field will be empty. Clothing with multiple variations will have the `variation` fields defined with the name of each variation.|
|version_added|string|false|none|The version of *New Horizons* that the item was added. Items that were included at the game's launch have version "1.0.0".|
|vill_equip|boolean|false|none|Whether villagers may equip this item.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|Tops|
|category|Bottoms|
|category|Dress-up|
|category|Headwear|
|category|Accessories|
|category|Socks|
|category|Shoes|
|category|Bags|
|category|Umbrellas|
|label_themes|Comfy|
|label_themes|Everyday|
|label_themes|Fairy tale|
|label_themes|Formal|
|label_themes|Goth|
|label_themes|Outdoorsy|
|label_themes|Party|
|label_themes|Sporty|
|label_themes|Theatrical|
|label_themes|Vacation|
|label_themes|Work|
|styles|Active|
|styles|Cool|
|styles|Cute|
|styles|Elegant|
|styles|Gorgeous|
|styles|Simple|
|variation_total|0|
|variation_total|1|
|variation_total|2|
|variation_total|3|
|variation_total|4|
|variation_total|5|
|variation_total|6|
|variation_total|7|
|variation_total|8|

<h2 id="tocS_NHEvent">NHEvent</h2>
<!-- backwards compatibility -->
<a id="schemanhevent"></a>
<a id="schema_NHEvent"></a>
<a id="tocSnhevent"></a>
<a id="tocsnhevent"></a>

```json
{
  "date": "2021-05-01",
  "event": "May Day event begins",
  "type": "Event",
  "url": "https://nookipedia.com/wiki/May_Day"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|The date of the event in YYYY-MM-DD format.|
|event|string|false|none|The description of the event.|
|type|string|false|none|The type of event. "Event" is a festivity the player can take part in. "Nook Shopping" refers to the [seasonal events](https://nookipedia.com/wiki/Nook_Shopping_seasonal_event) in which exclusive item(s) are available via []Nook Shopping](https://nookipedia.com/wiki/Nook_Shopping). "Recipes" refers to the start or end of certain recipes being available. "Birthday" refers to the birthday of a villager or special character.|
|url|string|false|none|Link to the respective Nookipedia article for the event.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Event|
|type|Nook Shopping|
|type|Recipes|
|type|Birthday|

<h2 id="tocS_NHFish">NHFish</h2>
<!-- backwards compatibility -->
<a id="schemanhfish"></a>
<a id="schema_NHFish"></a>
<a id="tocSnhfish"></a>
<a id="tocsnhfish"></a>

```json
{
  "catchphrases": [
    "I caught a cherry salmon! It's the perfect topper for a marlin sundae!"
  ],
  "image_url": "https://dodo.ac/np/images/d/db/Cherry_Salmon_NH_Icon.png",
  "location": "River (clifftop)",
  "name": "Cherry Salmon",
  "north": {
    "availability_array": [
      {
        "months": "Mar – Jun",
        "time": "4 PM – 9 AM"
      },
      {
        "months": "Sep – Nov",
        "time": "All day"
      }
    ],
    "months": "Mar – Jun; Sep – Nov",
    "months_array": [
      3,
      4,
      5,
      6,
      9,
      10,
      11
    ],
    "times_by_month": {
      "1": "NA",
      "2": "NA",
      "3": "4 PM – 9 AM",
      "4": "4 PM – 9 AM",
      "5": "4 PM – 9 AM",
      "6": "4 PM – 9 AM",
      "7": "NA",
      "8": "NA",
      "9": "All day",
      "10": "All day",
      "11": "All day",
      "12": "NA"
    }
  },
  "number": 27,
  "rarity": "Uncommon",
  "render_url": "https://dodo.ac/np/images/c/c0/Cherry_Salmon_NH.png",
  "sell_cj": 1500,
  "sell_nook": 1000,
  "shadow_size": "Small",
  "south": {
    "availability_array": [
      {
        "months": "Sep – Dec",
        "time": "4 PM – 9 AM"
      },
      {
        "months": "Mar – May",
        "time": "All day"
      }
    ],
    "months": "Mar – May; Sep – Dec",
    "months_array": [
      3,
      4,
      5,
      9,
      10,
      11,
      12
    ],
    "times_by_month": {
      "1": "NA",
      "2": "NA",
      "3": "4 PM – 9 AM",
      "4": "4 PM – 9 AM",
      "5": "4 PM – 9 AM",
      "6": "4 PM – 9 AM",
      "7": "NA",
      "8": "NA",
      "9": "All day",
      "10": "All day",
      "11": "All day",
      "12": "NA"
    }
  },
  "tank_length": 1,
  "tank_width": 1,
  "total_catch": 100,
  "url": "https://nookipedia.com/wiki/Cherry Salmon"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catchphrases|[string]|false|none|An array of possible catchphrases the player says after catching the fish. Most critters have just one, but some can have multiple.|
|image_url|string|false|none|Image of the fish. dodo.ac is Nookipedia's CDN server.|
|location|string|false|none|Short descriptor of where the fish can be found.|
|name|string|false|none|Name of the fish.|
|north|object|false|none|When you can catch the fish in the Northern hemisphere.|
|number|integer|false|none|In-game fish number, marking position in the Critterpedia.|
|rarity|string|false|none|How rare the fish is. Note that this field is currently empty for most fish as we do not yet know how exactly fish rarities are calculated in the game code.|
|render_url|string|false|none|Render of the fish. dodo.ac is Nookipedia's CDN server.|
|sell_cj|integer|false|none|The number of Bells the fish can be sold to C.J. for. This value is always 1.5x that of `sell_nook`.|
|sell_nook|integer|false|none|The number of Bells the fish can be sold to Nook's store for.|
|shadow_size|string|false|none|The size of the fish's shadow.|
|south|object|false|none|When you can catch the fish in the Southern hemisphere.|
|tank_length|number(float)|false|none|The length of the tank when the fish is placed as a furniture item.|
|tank_width|number(float)|false|none|The width of the tank when the fish is placed as a furniture item.|
|total_catch|integer|false|none|The total number of fish the player has to have caught before this fish will start spawning.|
|url|string|false|none|Link to the respective Nookipedia article.|

#### Enumerated Values

|Property|Value|
|---|---|
|shadow_size|X-Small|
|shadow_size|Small|
|shadow_size|Medium|
|shadow_size|Medium w/Fin|
|shadow_size|Large|
|shadow_size|Large w/Fin|
|shadow_size|X-Large|
|shadow_size|XX-Large|
|shadow_size|Long|

<h2 id="tocS_NHFossilGroup">NHFossilGroup</h2>
<!-- backwards compatibility -->
<a id="schemanhfossilgroup"></a>
<a id="schema_NHFossilGroup"></a>
<a id="tocSnhfossilgroup"></a>
<a id="tocsnhfossilgroup"></a>

```json
{
  "description": "Ahem. Yes. The Spinosaurus was a very large, carnivorous dinosaur, roughly the size of a T. Rex. Unlike its more famous cousin, however, Spinosaurus seems to have spent a great deal of time in water. Similar to modern crocodiles, this creature lived on a diet of fish AND land-dwelling animals. Personally, I am simply relieved that it did not seek FLYING prey.",
  "name": "Spinosaurus",
  "room": 2,
  "url": "https://nookipedia.com/wiki/Spinosaurus"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the fossil group.|
|name|string|false|none|The name of the fossil group.|
|room|integer|false|none|The room where the fossil group can be found in the museum's fossil section.|
|url|string|false|none|Link to the respective Nookipedia article.|

<h2 id="tocS_NHFossilGroupWithIndividualFossils">NHFossilGroupWithIndividualFossils</h2>
<!-- backwards compatibility -->
<a id="schemanhfossilgroupwithindividualfossils"></a>
<a id="schema_NHFossilGroupWithIndividualFossils"></a>
<a id="tocSnhfossilgroupwithindividualfossils"></a>
<a id="tocsnhfossilgroupwithindividualfossils"></a>

```json
{
  "description": "Ahem. Yes. The Spinosaurus was a very large, carnivorous dinosaur, roughly the size of a T. Rex. Unlike its more famous cousin, however, Spinosaurus seems to have spent a great deal of time in water. Similar to modern crocodiles, this creature lived on a diet of fish AND land-dwelling animals. Personally, I am simply relieved that it did not seek FLYING prey.",
  "fossils": [
    {
      "colors": [
        "Brown"
      ],
      "hha_base": 87,
      "image_url": "https://dodo.ac/np/images/7/7b/Spino_Skull_NH_Icon.png",
      "interactable": true,
      "length": 2,
      "name": "Spino Skull",
      "sell": 4000,
      "url": "https://nookipedia.com/wiki/Spinosaurus",
      "width": 2
    },
    {
      "colors": [
        "Brown"
      ],
      "hha_base": 87,
      "image_url": "https://dodo.ac/np/images/4/40/Spino_Tail_NH_Icon.png",
      "interactable": true,
      "length": 2,
      "name": "Spino Tail",
      "sell": 2500,
      "url": "https://nookipedia.com/wiki/Spinosaurus",
      "width": 2
    },
    {
      "colors": [
        "Brown"
      ],
      "hha_base": 87,
      "image_url": "https://dodo.ac/np/images/9/92/Spino_Torso_NH_Icon.png",
      "interactable": true,
      "length": 2,
      "name": "Spino Torso",
      "sell": 3000,
      "url": "https://nookipedia.com/wiki/Spinosaurus",
      "width": 2
    }
  ],
  "matched": {
    "name": "Spino Skull",
    "type": "individual"
  },
  "name": "Spinosaurus",
  "room": 2,
  "url": "https://nookipedia.com/wiki/Spinosaurus"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the fossil group.|
|fossils|[object]|false|none|An array of objects, each object representing a fossil that belongs to the given group.|
|matched|object|false|none|none|
|name|string|false|none|The name of the fossil group.|
|room|integer|false|none|The room where the fossil group can be found in the museum's fossil section.|
|url|string|false|none|Link to the respective Nookipedia article.|

<h2 id="tocS_NHFossilGroupWithIndividualFossilsNoMatched">NHFossilGroupWithIndividualFossilsNoMatched</h2>
<!-- backwards compatibility -->
<a id="schemanhfossilgroupwithindividualfossilsnomatched"></a>
<a id="schema_NHFossilGroupWithIndividualFossilsNoMatched"></a>
<a id="tocSnhfossilgroupwithindividualfossilsnomatched"></a>
<a id="tocsnhfossilgroupwithindividualfossilsnomatched"></a>

```json
{
  "description": "Ahem. Yes. The Spinosaurus was a very large, carnivorous dinosaur, roughly the size of a T. Rex. Unlike its more famous cousin, however, Spinosaurus seems to have spent a great deal of time in water. Similar to modern crocodiles, this creature lived on a diet of fish AND land-dwelling animals. Personally, I am simply relieved that it did not seek FLYING prey.",
  "fossils": [
    {
      "colors": [
        "Brown"
      ],
      "hha_base": 87,
      "image_url": "https://dodo.ac/np/images/7/7b/Spino_Skull_NH_Icon.png",
      "interactable": true,
      "length": 2,
      "name": "Spino Skull",
      "sell": 4000,
      "url": "https://nookipedia.com/wiki/Spinosaurus",
      "width": 2
    },
    {
      "colors": [
        "Brown"
      ],
      "hha_base": 87,
      "image_url": "https://dodo.ac/np/images/4/40/Spino_Tail_NH_Icon.png",
      "interactable": true,
      "length": 2,
      "name": "Spino Tail",
      "sell": 2500,
      "url": "https://nookipedia.com/wiki/Spinosaurus",
      "width": 2
    },
    {
      "colors": [
        "Brown"
      ],
      "hha_base": 87,
      "image_url": "https://dodo.ac/np/images/9/92/Spino_Torso_NH_Icon.png",
      "interactable": true,
      "length": 2,
      "name": "Spino Torso",
      "sell": 3000,
      "url": "https://nookipedia.com/wiki/Spinosaurus",
      "width": 2
    }
  ],
  "name": "Spinosaurus",
  "room": 2,
  "url": "https://nookipedia.com/wiki/Spinosaurus"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the fossil group.|
|fossils|[object]|false|none|An array of objects, each object representing a fossil that belongs to the given group.|
|name|string|false|none|The name of the fossil group.|
|room|integer|false|none|The room where the fossil group can be found in the museum's fossil section.|
|url|string|false|none|Link to the respective Nookipedia article.|

<h2 id="tocS_NHFurniture">NHFurniture</h2>
<!-- backwards compatibility -->
<a id="schemanhfurniture"></a>
<a id="schema_NHFurniture"></a>
<a id="tocSnhfurniture"></a>
<a id="tocsnhfurniture"></a>

```json
{
  "availability": [
    {
      "from": "Nook's Cranny (Upgraded)",
      "note": ""
    }
  ],
  "buy": [
    {
      "currency": "Bells",
      "price": 31000
    }
  ],
  "category": "Housewares",
  "custom_body_part": "",
  "custom_kit_type": "",
  "custom_kits": 0,
  "custom_pattern_part": "",
  "customizable": false,
  "door_decor": false,
  "functions": [
    "Dresser"
  ],
  "grid_length": 1,
  "grid_width": 2,
  "height": 15.98677,
  "hha_base": 251,
  "hha_category": "Dresser",
  "item_series": "Antique",
  "item_set": "",
  "lucky": false,
  "lucky_season": "",
  "name": "Antique Vanity",
  "notes": "",
  "pattern_total": 0,
  "sell": 7750,
  "tag": "Dresser",
  "themes": [
    "Living Room",
    "Expensive"
  ],
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:Antique_Vanity_(New_Horizons)",
  "variation_total": 3,
  "variations": [
    {
      "colors": [
        "Aqua",
        "Brown"
      ],
      "image_url": "https://dodo.ac/np/images/9/9e/Antique_Vanity_%28Brown%29_NH_Icon.png",
      "pattern": "",
      "variation": "Brown"
    },
    {
      "colors": [
        "Aqua",
        "Beige"
      ],
      "image_url": "https://dodo.ac/np/images/a/ab/Antique_Vanity_%28Natural%29_NH_Icon.png",
      "pattern": "",
      "variation": "Natural"
    },
    {
      "colors": [
        "Aqua",
        "Black"
      ],
      "image_url": "https://dodo.ac/np/images/5/55/Antique_Vanity_%28Black%29_NH_Icon.png",
      "pattern": "",
      "variation": "Black"
    }
  ],
  "version_added": "1.0.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[object]|false|none|Where the furniture may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.|
|buy|[object]|false|none|An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..|
|category|string|false|none|The category of item as shown in the player's inventory.|
|custom_body_part|string|false|none|If the item has variations, this is the name of the furniture part that changes. For example, for many bamboo items, the custom body part is "Bamboo" as the bamboo color is able to be customized.|
|custom_kit_type|string|false|none|The item that needs to be consumed to customize this item. The vast majority are "Customization Kit", but a small selection of items will require a different item, such as items in the Spooky Series requireing pumpkins.|
|custom_kits|integer|false|none|The number of `custom_kit_type`s (e.g. Customization Kits) that are needed to customize this item. Value is 0 if the item is not customizable.|
|custom_pattern_part|string|false|none|If the item's pattern can be customized, this is the name of the furniture part that can have a pattern applied to it. For example, for the Baby Chair, the custom pattern part is "Cushion" as the cushion on the chair may have a pattern applied.|
|customizable|boolean|false|none|Whether or not the item is customizable via a crafting table.|
|door_decor|boolean|false|none|Whether this item may be placed on the exterior door of the player's house.|
|functions|[string]|false|none|A list of functionalities (if any) that the item has. For example, furniture that items can be placed on topof will have "Table" as a function..|
|grid_length|number(float)|false|none|The number of lengthwise grid spaces this item takes up.|
|grid_width|number(float)|false|none|The number of widthwise grid spaces this item takes up.|
|height|number(float)|false|none|The height of the object. One in-game block is 10 units tall, while the player is 15.1324 units tall.|
|hha_base|integer|false|none|The base value that the item provides to a player's Happy Home Academy score when placed in their home.|
|hha_category|string|false|none|The HHA category the item is a part of, if any. If the item does not have an HHA category, this will be an empty string.|
|item_series|string|false|none|The [furniture series](https://nookipedia.com/wiki/Series_(furniture)) the item is a part of, if any. A series is a collection of furniture and interior items, all with the same theme. If the item is not part of a series, this will be an empty string.|
|item_set|string|false|none|The [furniture set](https://nookipedia.com/wiki/Set) the item is a part of, if any. A set is a smaller collection of related furniture items. If the item is not part of a set, this will be an empty string.|
|lucky|boolean|false|none|Whether or not the item is lucky. Lucky items give a 777-point HHA bonus. Some items are only counted as lucky in certain seasons, as indicated by the `lucky_season` field.|
|lucky_season|string|false|none|The season in which the item is lucky (or "All year" if lucky throughout the entire year). Items that are not lucky will have this field as an empty string.|
|name|string|false|none|The name of the furniture.|
|notes|string|false|none|Any additional miscellaneous information about the item, such as a name change from a past update.|
|pattern_total|integer|false|none|The number of default patterns available to customize the item with, between 0 and 8. For items with customizable patterns, the player may also customize with patterns of their own.|
|sell|integer|false|none|The number of Bells the item can be sold to Nook's store for.|
|tag|string|false|none|The tag of an item, if any, which denotes a specific use or relation to an event. Tags are determined by Nintendo. Examples include "Chair", "Musical Instrument", and "Mario". If the item does not have a tag, this will be an empty string.|
|themes|[string]|false|none|A list of [themes](https://nookipedia.com/wiki/Theme_(furniture)) (if any) that the item belongs to.|
|unlocked|boolean|false|none|Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.|
|url|string|false|none|Link to the respective Nookipedia article.|
|variation_total|integer|false|none|The number of variations, between 0 and 8.|
|variations|[object]|false|none|An array of objects, each object representing a variation of the furniture. Furniture that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` or `pattern` fields will be empty strings. Furniture with multiple variations will have the `variation` and/or `pattern` fields defined depending on whether the furniture varies by body variety, pattern, or both.|
|version_added|string|false|none|The version of *New Horizons* that the item was added. Items that were included at the game's launch have version "1.0.0".|

#### Enumerated Values

|Property|Value|
|---|---|
|category|Housewares|
|category|Miscellaneous|
|category|Wall-mounted|
|functions|Trash|
|functions|Toilet|
|functions|Table|
|functions|Storage|
|functions|Stereo|
|functions|Seating|
|functions|Lighting|
|functions|Instrument|
|functions|Dresser|
|functions|Bed|
|functions|Audio|
|lucky_season|""|
|lucky_season|All year|
|lucky_season|Spring|
|lucky_season|Summer|
|lucky_season|Autumn|
|lucky_season|Winter|
|pattern_total|0|
|pattern_total|1|
|pattern_total|2|
|pattern_total|3|
|pattern_total|4|
|pattern_total|5|
|pattern_total|6|
|pattern_total|7|
|pattern_total|8|
|variation_total|0|
|variation_total|1|
|variation_total|2|
|variation_total|3|
|variation_total|4|
|variation_total|5|
|variation_total|6|
|variation_total|7|
|variation_total|8|

<h2 id="tocS_NHIndividualFossil">NHIndividualFossil</h2>
<!-- backwards compatibility -->
<a id="schemanhindividualfossil"></a>
<a id="schema_NHIndividualFossil"></a>
<a id="tocSnhindividualfossil"></a>
<a id="tocsnhindividualfossil"></a>

```json
{
  "colors": [
    "Brown"
  ],
  "fossil_group": "Spinosaurus",
  "hha_base": 87,
  "image_url": "https://dodo.ac/np/images/7/7b/Spino_Skull_NH_Icon.png",
  "interactable": false,
  "length": 2,
  "name": "Spino Skull",
  "sell": 4000,
  "url": "https://nookipedia.com/wiki/Spinosaurus",
  "width": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[string]|false|none|none|
|fossil_group|string|false|none|The name of the group that the fossil belongs to.|
|hha_base|integer|false|none|The base value that the item provides to a player's Happy Home Academy score when placed in their home.|
|image_url|string|false|none|Image of the fossil's icon. dodo.ac is Nookipedia's CDN server.|
|interactable|boolean|false|none|Whether or not the item can be interacted with.|
|length|integer|false|none|The length of the fossil.|
|name|string|false|none|The name of the fossil.|
|sell|integer|false|none|The number of bells the item can be sold to Nook's store for.|
|url|string|false|none|Link to the respective Nookipedia article.|
|width|integer|false|none|The width of the fossil.|

#### Enumerated Values

|Property|Value|
|---|---|
|colors|Aqua|
|colors|Beige|
|colors|Black|
|colors|Blue|
|colors|Brown|
|colors|Colorful|
|colors|Gray|
|colors|Green|
|colors|Orange|
|colors|Pink|
|colors|Purple|
|colors|Red|
|colors|White|
|colors|Yellow|

<h2 id="tocS_NHInterior">NHInterior</h2>
<!-- backwards compatibility -->
<a id="schemanhinterior"></a>
<a id="schema_NHInterior"></a>
<a id="tocSnhinterior"></a>
<a id="tocsnhinterior"></a>

```json
{
  "availability": [
    {
      "from": "Nook's",
      "note": ""
    }
  ],
  "buy": [
    {
      "currency": "Bells",
      "price": 1560
    }
  ],
  "category": "Wallpaper",
  "colors": [
    "White",
    "Colorful"
  ],
  "grid_length": 1,
  "grid_width": 2,
  "hha_base": 0,
  "hha_category": "Dresser",
  "image_url": "https://dodo.ac/np/images/2/2d/Abstract_Wall_NH_Icon.png",
  "item_series": "",
  "item_set": "",
  "name": "Abstract Wall",
  "notes": "",
  "sell": 200,
  "tag": "Dresser",
  "themes": [
    "Shop",
    "Facility"
  ],
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:Abstract_Wall_(New_Horizons)",
  "version_added": "1.0.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[object]|false|none|Where the clothing may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.|
|buy|[object]|false|none|An array of prices, for when the interior may be purchased with Bells, Nook Miles, etc..|
|category|string|false|none|The category of item as shown in the player's inventory.|
|colors|string|false|none|(WIP)|
|grid_length|number(float)|false|none|The number of lengthwise grid spaces this item takes up.|
|grid_width|number(float)|false|none|The number of widthwise grid spaces this item takes up.|
|hha_base|integer|false|none|The base value that the item provides to a player's Happy Home Academy score when placed in their home.|
|hha_category|string|false|none|The HHA category the item is a part of, if any. If the item does not have an HHA category, this will be an empty string.|
|image_url|string|false|none|Image of the interior. dodo.ac is Nookipedia's CDN server.|
|item_series|string|false|none|The [furniture series](https://nookipedia.com/wiki/Series_(furniture)) the item is a part of, if any. A series is a collection of furniture and interior items, all with the same theme. If the item is not part of a series, this will be an empty string.|
|item_set|string|false|none|The [furniture set](https://nookipedia.com/wiki/Set) the item is a part of, if any. A set is a smaller collection of related furniture items. If the item is not part of a set, this will be an empty string.|
|name|string|false|none|The name of the interior.|
|notes|string|false|none|Any additional miscellaneous information about the item, such as a name change from a past update.|
|sell|integer|false|none|The number of Bells the interior can be sold to Nook's store for.|
|tag|string|false|none|The tag of an item, if any, which denotes a specific use or relation to an event. Tags are determined by Nintendo. Examples include "Chair", "Musical Instrument", and "Mario". If the item does not have a tag, this will be an empty string.|
|themes|[string]|false|none|A list of [themes](https://nookipedia.com/wiki/Theme_(furniture)) (if any) that the item belongs to.|
|unlocked|boolean|false|none|Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.|
|url|string|false|none|Link to the respective Nookipedia article.|
|version_added|string|false|none|The version of *New Horizons* that the item was added. Items that were included at the game's launch have version "1.0.0".|

#### Enumerated Values

|Property|Value|
|---|---|
|category|Floors|
|category|Wallpaper|
|category|Rugs|
|colors|Aqua|
|colors|Beige|
|colors|Black|
|colors|Blue|
|colors|Brown|
|colors|Colorful|
|colors|Gray|
|colors|Green|
|colors|Orange|
|colors|Pink|
|colors|Purple|
|colors|Red|
|colors|White|
|colors|Yellow|

<h2 id="tocS_NHItem">NHItem</h2>
<!-- backwards compatibility -->
<a id="schemanhitem"></a>
<a id="schema_NHItem"></a>
<a id="tocSnhitem"></a>
<a id="tocsnhitem"></a>

```json
{
  "availability": [
    {
      "from": "Nook's",
      "note": ""
    }
  ],
  "buy": [
    {
      "currency": "Bells",
      "price": 280
    }
  ],
  "edible": false,
  "hha_base": 0,
  "image_url": "https://dodo.ac/np/images/9/9f/Acorn_NH_Icon.png",
  "is_fence": false,
  "material_name_sort": 0,
  "material_seasonality": "Autumn",
  "material_seasonality_sort": 3,
  "material_sort": 3,
  "material_type": "Tree",
  "name": "Acorn",
  "notes": "",
  "plant_type": "",
  "sell": 200,
  "stack": 30,
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:Acorn_(New_Horizons)",
  "version_added": "1.0.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[object]|false|none|Where the clothing may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.|
|buy|[object]|false|none|An array of prices, for when the interior may be purchased with Bells, Nook Miles, etc..|
|edible|boolean|false|none|Whether the item is edible or not.|
|hha_base|integer|false|none|The base value that the item provides to a player's Happy Home Academy score when placed in their home.|
|image_url|string|false|none|Image of the interior. dodo.ac is Nookipedia's CDN server.|
|is_fence|boolean|false|none|Whether or not the item is a fence or not.|
|material_name_sort|integer|false|none|(WIP)|
|material_seasonality|string|false|none|(WIP)|
|material_seasonality_sort|integer|false|none|(WIP)|
|material_sort|integer|false|none|(WIP)|
|material_type|string|false|none|(WIP)|
|name|string|false|none|The name of the item.|
|notes|string|false|none|Any additional miscellaneous information about the item, such as a name change from a past update.|
|plant_type|string|false|none|(WIP)|
|sell|integer|false|none|The number of bells the item can be sold to Nook's store for.|
|stack|integer|false|none|How much the item can stack up to in a single inventory slot.|
|unlocked|boolean|false|none|Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.|
|url|string|false|none|Link to the respective Nookipedia article.|
|version_added|string|false|none|The version of *New Horizons* that the item was added. Items that were included at the game's launch have version "1.0.0".|

#### Enumerated Values

|Property|Value|
|---|---|
|material_type|""|
|material_type|Bamboo|
|material_type|Mushroom|
|material_type|Trash|
|material_type|Wood|
|material_type|Ore|
|material_type|Snowflake|
|material_type|Tree|
|material_type|Ornament|
|material_type|Fruit|
|material_type|Underwater|
|material_type|Other|
|material_type|Leaf|
|material_type|Shell|
|material_type|Flower|
|material_type|Star Fragment|
|material_type|Feather|
|material_type|Egg|
|material_type|Plant|
|plant_type|""|
|plant_type|Pumpkin|
|plant_type|Flower|
|plant_type|Bush|
|plant_type|Tree|

<h2 id="tocS_NHPhoto">NHPhoto</h2>
<!-- backwards compatibility -->
<a id="schemanhphoto"></a>
<a id="schema_NHPhoto"></a>
<a id="tocSnhphoto"></a>
<a id="tocsnhphoto"></a>

```json
{
  "availability": [
    {
      "from": "Friendship",
      "note": ""
    }
  ],
  "buy": [],
  "category": "Accessories",
  "custom_body_part": "Frame",
  "custom_kits": 1,
  "customizable": false,
  "grid_length": 1,
  "grid_width": 2,
  "interactable": true,
  "name": "Admiral's Photo",
  "sell": 10,
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:Admiral's_Photo_(New_Horizons)",
  "variations": [
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/7/72/Admiral%27s_Photo_%28Natural_Wood%29_NH_Icon.png",
      "variation": "Natural Wood"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/e/e5/Admiral%27s_Photo_%28Dark_Wood%29_NH_Icon.png",
      "variation": "Dark Wood"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/9/9a/Admiral%27s_Photo_%28Pastel%29_NH_Icon.png",
      "variation": "Pastel"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/1/16/Admiral%27s_Photo_%28White%29_NH_Icon.png",
      "variation": "White"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/b/be/Admiral%27s_Photo_%28Pop%29_NH_Icon.png",
      "variation": "Pop"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/5/51/Admiral%27s_Photo_%28Colorful%29_NH_Icon.png",
      "variation": "Colorful"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/e/ed/Admiral%27s_Photo_%28Silver%29_NH_Icon.png",
      "variation": "Silver"
    },
    {
      "colors": [
        "Blue",
        "Green"
      ],
      "image_url": "https://dodo.ac/np/images/c/cf/Admiral%27s_Photo_%28Gold%29_NH_Icon.png",
      "variation": "Gold"
    }
  ],
  "version_added": "1.0.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[object]|false|none|Where the photo may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.|
|buy|[object]|false|none|An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..|
|category|string|false|none|The category of item as shown in the player's inventory.|
|custom_body_part|string|false|none|If the item has variations, this is the name of the furniture part that changes. For example, for many bamboo items, the custom body part is "Bamboo" as the bamboo color is able to be customized.|
|custom_kits|integer|false|none|The number of `custom_kit_type`s (e.g. Customization Kits) that are needed to customize this item. Value is 0 if the item is not customizable.|
|customizable|boolean|false|none|Whether or not the item is customizable via a crafting table.|
|grid_length|number(float)|false|none|The number of lengthwise grid spaces this item takes up.|
|grid_width|number(float)|false|none|The number of widthwise grid spaces this item takes up.|
|interactable|boolean|false|none|Whether or not the item can be interacted with. This field is true for all photos and false for all posters.|
|name|string|false|none|The name of the photo.|
|sell|integer|false|none|The number of Bells the photo can be sold to the store for.|
|unlocked|boolean|false|none|Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.|
|url|string|false|none|Link to the respective Nookipedia article.|
|variations|[object]|false|none|An array of objects, each object representing a variation of the photo or poster. Items that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` field will be empty. Items with multiple variations will have the `variation` fields defined with the name of each variation.|
|version_added|string|false|none|The version of *New Horizons* that the item was added. Items that were included at the game's launch have version "1.0.0".|

#### Enumerated Values

|Property|Value|
|---|---|
|category|Photos|
|category|Posters|

<h2 id="tocS_NHRecipe">NHRecipe</h2>
<!-- backwards compatibility -->
<a id="schemanhrecipe"></a>
<a id="schema_NHRecipe"></a>
<a id="tocSnhrecipe"></a>
<a id="tocsnhrecipe"></a>

```json
{
  "availability": [
    {
      "from": "Tom Nook",
      "note": "Obtained through Tom Nook's DIY Workshop at the beginning of the game."
    },
    {
      "from": "Nook's Cranny",
      "note": ""
    }
  ],
  "buy": [
    {
      "currency": "Bells",
      "price": 280
    }
  ],
  "image_url": "https://dodo.ac/np/images/a/ac/Flimsy_Axe_NH_DIY_Icon.png",
  "materials": [
    {
      "count": 5,
      "name": "Tree Branch"
    },
    {
      "count": 1,
      "name": "Stone"
    }
  ],
  "name": "Flimsy Axe",
  "recipes_to_unlock": 0,
  "sell": 200,
  "serial_id": 100,
  "url": "https://nookipedia.com/wiki/Item:Flimsy_Axe_(New_Horizons)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[object]|false|none|Where the recipe may be obtained from. `from` is a brief description of the source; `note`, when provided, provides additional details.|
|buy|[object]|false|none|An array of prices, for when the recipe may be purchased with Bells, Nook Miles, etc. The majority of recipes cannot be bought (in which case this array will be empty).|
|image_url|string|false|none|Image of the item the recipe crafts. dodo.ac is Nookipedia's CDN server.|
|materials|[object]|false|none|The list of materials required to craft the item.|
|name|string|false|none|The name of the recipe.|
|recipes_to_unlock|integer|false|none|How many recipes the player has to have learned to unlock this one.|
|sell|integer|false|none|The number of Bells the sea creature can be sold to Nook's store for.|
|serial_id|integer|false|none|The unique in-game ID of the recipe.|
|url|string|false|none|Link to the respective Nookipedia article.|

<h2 id="tocS_NHSeaCreature">NHSeaCreature</h2>
<!-- backwards compatibility -->
<a id="schemanhseacreature"></a>
<a id="schema_NHSeaCreature"></a>
<a id="tocSnhseacreature"></a>
<a id="tocsnhseacreature"></a>

```json
{
  "catchphrases": [
    "I got an octopus! It can give four hugs at once!"
  ],
  "image_url": "https://dodo.ac/np/images/5/58/Octopus_NH_Icon.png",
  "name": "Octopus",
  "north": {
    "availability_array": [
      {
        "months": "All year",
        "time": "All day"
      }
    ],
    "months": "Jul – Sep",
    "months_array": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "times_by_month": {
      "1": "All day",
      "2": "All day",
      "3": "All day",
      "4": "All day",
      "5": "All day",
      "6": "All day",
      "7": "All day",
      "8": "All day",
      "9": "All day",
      "10": "All day",
      "11": "All day",
      "12": "All day"
    }
  },
  "number": 20,
  "rarity": "Uncommon",
  "render_url": "https://dodo.ac/np/images/2/27/Octopus_NH.png",
  "sell_nook": 160,
  "shadow_movement": "Slow",
  "shadow_size": "Medium",
  "south": {
    "availability_array": [
      {
        "months": "All year",
        "time": "All day"
      }
    ],
    "months": "Jan – Mar",
    "months_array": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "times_by_month": {
      "1": "All day",
      "2": "All day",
      "3": "All day",
      "4": "All day",
      "5": "All day",
      "6": "All day",
      "7": "All day",
      "8": "All day",
      "9": "All day",
      "10": "All day",
      "11": "All day",
      "12": "All day"
    }
  },
  "tank_length": 1,
  "tank_width": 1,
  "total_catch": 0,
  "url": "https://nookipedia.com/wiki/Octopus_(fish)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catchphrases|[string]|false|none|An array of possible catchphrases the player says after catching the sea creature. Most critters have just one, but some can have multiple.|
|image_url|string|false|none|Image of the sea creature. dodo.ac is Nookipedia's CDN server.|
|name|string|false|none|Name of the sea creature.|
|north|object|false|none|When you can catch the sea creature in the Northern hemisphere.|
|number|integer|false|none|In-game sea creature number, marking position in the Critterpedia.|
|rarity|string|false|none|How rare the sea creature is. Note that this field is currently empty for most sea creatures as we do not yet know how exactly sea creature rarities are calculated in the game code.|
|render_url|string|false|none|Render of the sea creature. dodo.ac is Nookipedia's CDN server.|
|sell_nook|integer|false|none|The number of Bells the sea creature can be sold to Nook's store for.|
|shadow_movement|string|false|none|Short descriptor of where the sea creature can be found.|
|shadow_size|string|false|none|Short descriptor of where the sea creature can be found.|
|south|object|false|none|When you can catch the sea creature in the Southern hemisphere.|
|tank_length|number(float)|false|none|The length of the tank when the sea creature is placed as a furniture item.|
|tank_width|number(float)|false|none|The width of the tank when the sea creature is placed as a furniture item.|
|total_catch|integer|false|none|The total number of sea creatures the player has to have caught before this sea creature will start spawning.|
|url|string|false|none|Link to the respective Nookipedia article.|

#### Enumerated Values

|Property|Value|
|---|---|
|shadow_movement|Stationary|
|shadow_movement|Very slow|
|shadow_movement|Slow|
|shadow_movement|Medium|
|shadow_movement|Fast|
|shadow_movement|Very fast|
|shadow_size|X-Small|
|shadow_size|Small|
|shadow_size|Medium|
|shadow_size|Large|
|shadow_size|X-Large|

<h2 id="tocS_NHTool">NHTool</h2>
<!-- backwards compatibility -->
<a id="schemanhtool"></a>
<a id="schema_NHTool"></a>
<a id="tocSnhtool"></a>
<a id="tocsnhtool"></a>

```json
{
  "availability": [
    {
      "from": "Nook's Cranny",
      "note": ""
    },
    {
      "from": "Crafting",
      "note": ""
    }
  ],
  "buy": [
    {
      "price": 2550
    },
    {
      "currency": "Bells"
    }
  ],
  "custom_body_part": "",
  "custom_kits": 0,
  "customizable": false,
  "hha_base": 0,
  "name": "Axe",
  "notes": "",
  "sell": 625,
  "unlocked": true,
  "url": "https://nookipedia.com/wiki/Item:Axe_(New_Horizons)",
  "uses": 100,
  "variations": [
    {
      "image_url": "https://dodo.ac/np/images/f/fa/Axe_NH_Icon.png",
      "variation": ""
    }
  ],
  "version_added": "1.0.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[object]|false|none|Where the tool may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.|
|buy|[object]|false|none|An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..|
|custom_body_part|string|false|none|If the item has variations, this is the name of the furniture part that changes. For example, for many bamboo items, the custom body part is "Bamboo" as the bamboo color is able to be customized.|
|custom_kits|integer|false|none|The number of `custom_kit_type`s (e.g. Customization Kits) that are needed to customize this item. Value is 0 if the item is not customizable.|
|customizable|boolean|false|none|Whether or not the item is customizable via a crafting table.|
|hha_base|integer|false|none|The base value that the item provides to a player's Happy Home Academy score when placed in their home.|
|name|string|false|none|The name of the tool.|
|notes|string|false|none|Any additional miscellaneous information about the item, such as a name change from a past update.|
|sell|integer|false|none|The number of bells the tool can be sold to the store for.|
|unlocked|boolean|false|none|Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.|
|url|string|false|none|Link the the respective Nookipedia article.|
|uses|integer|false|none|How many times the tool can be used before breaking.|
|variations|[object]|false|none|An array of objects, each object representing a variation of the tool. Tools that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` field will be empty. Tools with multiple variations will have the `variation` fields defined with the name of each variation.|
|version_added|string|false|none|The version of *New Horizons* that the item was added. Items that were included at the game's launch have version "1.0.0".|

<h2 id="tocS_Villager">Villager</h2>
<!-- backwards compatibility -->
<a id="schemavillager"></a>
<a id="schema_Villager"></a>
<a id="tocSvillager"></a>
<a id="tocsvillager"></a>

```json
{
  "alt_name": "",
  "appearances": [
    "DNM",
    "AC",
    "E_PLUS",
    "WW",
    "CF",
    "NL",
    "WA",
    "NH",
    "HHD",
    "PC"
  ],
  "birthday_day": "13",
  "birthday_month": "February",
  "clothing": "Simple Parka",
  "debut": "DNM",
  "gender": "Male",
  "id": "flg01",
  "image_url": "https://dodo.ac/np/images/9/94/Ribbot_NH.png",
  "islander": false,
  "name": "Ribbot",
  "nh_details": {
    "catchphrase": "zzrrbbit",
    "clothing": "Simple Parka",
    "clothing_variation": "Light Blue",
    "fav_colors": [
      "Blue",
      "Aqua"
    ],
    "fav_styles": [
      "Simple",
      "Active"
    ],
    "hobby": "Fitness",
    "house_exterior_url": "https://dodo.ac/np/images/4/42/House_of_Ribbot_NH_Model.png",
    "house_flooring": "Future-Tech Flooring",
    "house_interior_url": "https://dodo.ac/np/images/8/86/House_of_Ribbot_NH.png",
    "house_music": "K.K. Technopop",
    "house_music_note": "",
    "house_wallpaper": "Circuit-Board Wall",
    "icon_url": "https://dodo.ac/np/images/8/87/Ribbot_NH_Villager_Icon.png",
    "image_url": "https://dodo.ac/np/images/9/94/Ribbot_NH.png",
    "photo_url": "https://dodo.ac/np/images/0/03/RibbotPicACNH.png",
    "quote": "Never rest, never rust.",
    "sub-personality": "B"
  },
  "personality": "Jock",
  "phrase": "zzrrbbit",
  "prev_phrases": [
    "toady"
  ],
  "quote": "Never rest, never rust.",
  "sign": "Aquarius",
  "species": "Frog",
  "text_color": "5e5e5e",
  "title_color": "bfbfbf",
  "url": "https://nookipedia.com/wiki/Ribbot"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alt_name|string|false|none|A previous name for the villager. A very small number of villagers changed names between earlier games, such as Sally being known as Hazel in the original game.|
|appearances|[string]|false|none|List of official media the villager appeared in. `DNM` is *Doubutsu no Mori* for the Nintendo 64 (Japan-exclusive); `AC` is *Animal Crossing* for GameCube; `E_PLUS` is *Doubutsu no Mori e+* for GameCube (expanded port of AC, Japan-exclusive); `WW` is *Wild World* for the DS; `CF` is *City Folk* for Wii; `NL` is *New Leaf* for 3DS; `WA` is *Welcome amiibo*, the *New Leaf* expansion; `NH` is *New Horizons* for Switch; `FILM` is the *Doubutsu no Mori* Japan-exclusive film; `HHD` is *Happy Home Designer* for the Wii; and `PC` is *Pocket Camp* for mobile.|
|birthday_day|string|false|none|Birthday day of the villager. Note that villager birthdays were not introduced until *Wild World*. For villagers who didn't appear in *Wild World* or any later games, this field will be an empty string.|
|birthday_month|string|false|none|Birthday month of the villager. Note that villager birthdays were not introduced until *Wild World*. For villagers who didn't appear in *Wild World* or any later games, this field will be an empty string.|
|clothing|string|false|none|The villager's default clothing. This will be the clothing from the latest game (i.e. if the villager had varying phrases between *Wild World* and *New Horizons*, this will be the *New Horizons* clothing).|
|debut|string|false|none|The first *Animal Crossing* game the villager appeared in. `DNM` is *Doubutsu no Mori* for the Nintendo 64 (Japan-exclusive); `AC` is *Animal Crossing* for GameCube; `E_PLUS` is *Doubutsu no Mori e+* for GameCube (expanded port of AC, Japan-exclusive); `WW` is *Wild World* for the DS; `CF` is *City Folk* for Wii; `NL` is *New Leaf* for 3DS; `WA` is *Welcome amiibo*, the *New Leaf* expansion; `NH` is *New Horizons* for Switch; `FILM` is the *Doubutsu no Mori* Japan-exclusive film; `HHD` is *Happy Home Designer* for the Wii; and `PC` is *Pocket Camp* for mobile.|
|gender|string|false|none|Gender of the villager. In *Animal Crossing*, only male and female are used.|
|id|string|false|none|The game's internal identifier for the villager. Not all villagers have IDs; villagers who appeared in any game including or after *Wild World* have a consistent ID between games.|
|image_url|string|false|none|Image of the villager from the latest game the villager appeared in. dodo.ac is Nookipedia's CDN server.|
|islander|boolean|false|none|Whether the villager was an island in *Animal Crossing* for GameCube. Only a small number of villagers (36) were islanders.|
|name|string|false|none|Name of the villager.|
|nh_details|object|false|none|An object that holds villager data specific to *New Horizons*. If the villager does not appear in *New Horizons*, this field will be set to null.|
|personality|string|false|none|The villager's personality. Note that there are no official in-game personality names; these are names that are commonly used by the community. In the case of 'sisterly', other common names include 'big sis' and 'uchi'.|
|phrase|string|false|none|The villager's default phrase they use throughout conversation. This will be the phrase from the latest game (i.e. if the villager had varying phrases between *Wild World* and *New Horizons*, this will be the *New Horizons* quote).|
|prev_phrases|[string]|false|none|Any phrases used in previous *Animal Crossing* installations. May be empty.|
|quote|string|false|none|The villager's quote as it appears on the back of their in-game portrait item. This will be the quote from the latest game (i.e. if the villager had varying quotes between *Wild World* and *New Horizons*, this will be the *New Horizons* quote). For villagers from older games that do not have a quote, this field will be an empty string.|
|sign|string|false|none|The villager's astrological star sign.|
|species|string|false|none|The villager's species.|
|text_color|string|false|none|The HTML color code of the text of the villager's name badge that appears above their dialogue box when spoken to in-game. Note that to date, only *New Horizons* villagers have this field populated.|
|title_color|string|false|none|The HTML color code of the background of the villager's name badge that appears above their dialogue box when spoken to in-game. Note that to date, only *New Horizons* villagers have this field populated. This field may be useful for styling, such as the accent color for a Discord embed.|
|url|string|false|none|Link to the respective Nookipedia article.|

#### Enumerated Values

|Property|Value|
|---|---|
|appearances|DNM|
|appearances|AC|
|appearances|E_PLUS|
|appearances|WW|
|appearances|CF|
|appearances|NL|
|appearances|WA|
|appearances|NH|
|appearances|FILM|
|appearances|HHD|
|appearances|PC|
|debut|DNM|
|debut|AC|
|debut|E_PLUS|
|debut|WW|
|debut|CF|
|debut|NL|
|debut|WA|
|debut|NH|
|debut|FILM|
|debut|HHD|
|debut|PC|
|gender|Male|
|gender|Female|
|personality|Cranky|
|personality|Jock|
|personality|Lazy|
|personality|Normal|
|personality|Peppy|
|personality|Sisterly|
|personality|Smug|
|personality|Snooty|
|sign|Aries|
|sign|Taurus|
|sign|Gemini|
|sign|Cancer|
|sign|Leo|
|sign|Virgo|
|sign|Libra|
|sign|Scorpio|
|sign|Sagittarius|
|sign|Capricorn|
|sign|Aquarius|
|sign|Pisces|
|species|Alligator|
|species|Anteater|
|species|Bear|
|species|Bird|
|species|Bull|
|species|Cat|
|species|Cub|
|species|Chicken|
|species|Cow|
|species|Deer|
|species|Dog|
|species|Duck|
|species|Eagle|
|species|Elephant|
|species|Frog|
|species|Goat|
|species|Gorilla|
|species|Hamster|
|species|Hippo|
|species|Horse|
|species|Koala|
|species|Kangaroo|
|species|Lion|
|species|Monkey|
|species|Mouse|
|species|Octopus|
|species|Ostrich|
|species|Penguin|
|species|Pig|
|species|Rabbit|
|species|Rhino|
|species|Sheep|
|species|Squirrel|
|species|Tiger|
|species|Wolf|
