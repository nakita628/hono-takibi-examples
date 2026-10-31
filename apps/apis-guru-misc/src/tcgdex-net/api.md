<h1 id="tcgdex-api">TCGdex API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A Multilanguage Pokémon TCG Database with Cards Pictures and most of the informations contained on the cards.
You can find out more about TCGdex at [https://www.tcgdex.net](https://www.tcgdex.net) or on [Discord](https://discord.gg/NehYTAhsZE).

Base URLs:

* <a href="https://api.tcgdex.net/v2/en">https://api.tcgdex.net/v2/en</a>

Email: <a href="mailto:contact@tcgdex.net">TCGdex</a> 
Web: <a href="https://github.com/tcgdex/cards-database">TCGdex</a> 
License: <a href="https://github.com/tcgdex/cards-database/blob/master/LICENSE">MIT License</a>

<a href="http://www.tcgdex.net/docs">Find out more about TCGdex</a>

<h1 id="tcgdex-api-cards">cards</h1>

Fetch cards globally

## fetch the list of cards

<a id="opIdcards"></a>

> Code samples

```bash
curl https://example.com/cards \
  -H 'Accept: application/json'
```

`GET /cards`

desc

> Example responses

> 200 Response

```json
[
  {
    "id": "base1-1",
    "image": "https://assets.tcgdex.net/en/base/base1/1",
    "localId": "1",
    "name": "Alakazam"
  }
]
```

<h3 id="fetch-the-list-of-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="fetch-the-list-of-cards-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CardResume](#schemacardresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Finds Card by Global ID

<a id="opIdfindPetsByTags"></a>

> Code samples

```bash
curl https://example.com/cards/string \
  -H 'Accept: application/json'
```

`GET /cards/{cardId}`

Find a defined card thatusing its global id

<h3 id="finds-card-by-global-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cardId|path|string|true|Tags to filter by|

> Example responses

> 200 Response

```json
{
  "abilities": [
    {
      "effect": "As often as you like...",
      "name": "Damage Swap",
      "type": "Poke-POWER"
    }
  ],
  "attacks": [
    {
      "cost": [
        ""
      ],
      "damage": 30,
      "effect": "Flip a coin. If heads, ...",
      "name": "Confuse Ray"
    }
  ],
  "category": "Pokemon",
  "description": "string",
  "dexId": [
    0
  ],
  "energyType": "string",
  "evolveFrom": "Kadabra",
  "hp": 80,
  "id": "base1-1",
  "illustrator": "Ken Sugimori",
  "image": "https://assets.tcgdex.net/en/base/base1/1",
  "item": {
    "effect": "string",
    "name": "string"
  },
  "legal": {
    "expanded": false,
    "standard": false
  },
  "level": 30,
  "localId": "1",
  "name": "Alakazam",
  "rarity": "Rare",
  "regulationMark": "D",
  "resistances": [
    [
      {
        "type": "Psychic",
        "value": "x2"
      }
    ]
  ],
  "retreat": 3,
  "set": {
    "cardCount": {
      "official": 100,
      "total": 101
    },
    "id": "base1",
    "logo": "https://assets.tcgdex.net/en/base/base1/logo",
    "name": "Base Set",
    "symbol": "https://assets.tcgdex.net/univ/base/base1/symbol"
  },
  "stage": "Stage2",
  "suffix": "string",
  "trainerType": "string",
  "types": [
    "Psychic"
  ],
  "variants": {
    "firstEdition": true,
    "holo": true,
    "normal": true,
    "reverse": true,
    "wPromo": true
  },
  "weaknesses": [
    [
      {
        "type": "Psychic",
        "value": "x2"
      }
    ]
  ]
}
```

<h3 id="finds-card-by-global-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Card](#schemacard)|
|404|Not Found|The Card doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/sets/{set}/{cardLocalId}

> Code samples

```bash
curl https://example.com/sets/string/string \
  -H 'Accept: application/json'
```

`GET /sets/{set}/{cardLocalId}`

<h3 id="getsetssetcardlocalid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|none|
|cardLocalId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "abilities": [
    {
      "effect": "As often as you like...",
      "name": "Damage Swap",
      "type": "Poke-POWER"
    }
  ],
  "attacks": [
    {
      "cost": [
        ""
      ],
      "damage": 30,
      "effect": "Flip a coin. If heads, ...",
      "name": "Confuse Ray"
    }
  ],
  "category": "Pokemon",
  "description": "string",
  "dexId": [
    0
  ],
  "energyType": "string",
  "evolveFrom": "Kadabra",
  "hp": 80,
  "id": "base1-1",
  "illustrator": "Ken Sugimori",
  "image": "https://assets.tcgdex.net/en/base/base1/1",
  "item": {
    "effect": "string",
    "name": "string"
  },
  "legal": {
    "expanded": false,
    "standard": false
  },
  "level": 30,
  "localId": "1",
  "name": "Alakazam",
  "rarity": "Rare",
  "regulationMark": "D",
  "resistances": [
    [
      {
        "type": "Psychic",
        "value": "x2"
      }
    ]
  ],
  "retreat": 3,
  "set": {
    "cardCount": {
      "official": 100,
      "total": 101
    },
    "id": "base1",
    "logo": "https://assets.tcgdex.net/en/base/base1/logo",
    "name": "Base Set",
    "symbol": "https://assets.tcgdex.net/univ/base/base1/symbol"
  },
  "stage": "Stage2",
  "suffix": "string",
  "trainerType": "string",
  "types": [
    "Psychic"
  ],
  "variants": {
    "firstEdition": true,
    "holo": true,
    "normal": true,
    "reverse": true,
    "wPromo": true
  },
  "weaknesses": [
    [
      {
        "type": "Psychic",
        "value": "x2"
      }
    ]
  ]
}
```

<h3 id="getsetssetcardlocalid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Card](#schemacard)|
|404|Not Found|the Set or cardLocalId are incorrect|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="tcgdex-api-filters">filters</h1>

differents requests to filter cards

## get/categories

> Code samples

```bash
curl https://example.com/categories \
  -H 'Accept: application/json'
```

`GET /categories`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getcategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List cards categories|Inline|

<h3 id="getcategories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/categories/{category}

> Code samples

```bash
curl https://example.com/categories/string \
  -H 'Accept: application/json'
```

`GET /categories/{category}`

<h3 id="getcategoriescategory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "cards": [
    {
      "id": "base1-1",
      "image": "https://assets.tcgdex.net/en/base/base1/1",
      "localId": "1",
      "name": "Alakazam"
    }
  ],
  "name": "string"
}
```

<h3 id="getcategoriescategory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List cards with the category|[StringEndpoint](#schemastringendpoint)|
|404|Not Found|The Category doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/dex-ids

> Code samples

```bash
curl https://example.com/dex-ids \
  -H 'Accept: application/json'
```

`GET /dex-ids`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getdex-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List all possible Pokemon(s) Pokédex Ids that appeared in the TCG|Inline|

<h3 id="getdex-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/dex-ids/{dexId}

> Code samples

```bash
curl https://example.com/dex-ids/string \
  -H 'Accept: application/json'
```

`GET /dex-ids/{dexId}`

<h3 id="getdex-idsdexid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dexId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "base1-1",
    "image": "https://assets.tcgdex.net/en/base/base1/1",
    "localId": "1",
    "name": "Alakazam"
  }
]
```

<h3 id="getdex-idsdexid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the cards containing the specified dexId|Inline|
|404|Not Found|no cards contain the specified dexID|None|

<h3 id="getdex-idsdexid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CardResume](#schemacardresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/energy-types

> Code samples

```bash
curl https://example.com/energy-types \
  -H 'Accept: application/json'
```

`GET /energy-types`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getenergy-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list the different Energy types an Energy card can have|Inline|

<h3 id="getenergy-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/energy-types/{energy-type}

> Code samples

```bash
curl https://example.com/energy-types/string \
  -H 'Accept: application/json'
```

`GET /energy-types/{energy-type}`

<h3 id="getenergy-typesenergy-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|energy-type|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "base1-1",
    "image": "https://assets.tcgdex.net/en/base/base1/1",
    "localId": "1",
    "name": "Alakazam"
  }
]
```

<h3 id="getenergy-typesenergy-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the Energy cards containing the specified energy-type|Inline|
|404|Not Found|The specified energy-type doesn't exist|None|

<h3 id="getenergy-typesenergy-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CardResume](#schemacardresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/hp

> Code samples

```bash
curl https://example.com/hp \
  -H 'Accept: application/json'
```

`GET /hp`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="gethp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List all different possibilities number of HP a card can have|Inline|

<h3 id="gethp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/hp/{hp}

> Code samples

```bash
curl https://example.com/hp/string \
  -H 'Accept: application/json'
```

`GET /hp/{hp}`

<h3 id="gethphp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hp|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "cards": [
    {
      "id": "base1-1",
      "image": "https://assets.tcgdex.net/en/base/base1/1",
      "localId": "1",
      "name": "Alakazam"
    }
  ],
  "name": "string"
}
```

<h3 id="gethphp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the Pokémon cards containing specified number of HP|[StringEndpoint](#schemastringendpoint)|
|404|Not Found|The HP count doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/illustrators

> Code samples

```bash
curl https://example.com/illustrators \
  -H 'Accept: application/json'
```

`GET /illustrators`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getillustrators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get all the Pokémon cards illustrators|Inline|

<h3 id="getillustrators-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/illustrators/{illustrator}

> Code samples

```bash
curl https://example.com/illustrators/string \
  -H 'Accept: application/json'
```

`GET /illustrators/{illustrator}`

<h3 id="getillustratorsillustrator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|illustrator|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "cards": [
    {
      "id": "base1-1",
      "image": "https://assets.tcgdex.net/en/base/base1/1",
      "localId": "1",
      "name": "Alakazam"
    }
  ],
  "name": "string"
}
```

<h3 id="getillustratorsillustrator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the cards containing the specified illustrator|[StringEndpoint](#schemastringendpoint)|
|404|Not Found|The Illustrator doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/rarities

> Code samples

```bash
curl https://example.com/rarities \
  -H 'Accept: application/json'
```

`GET /rarities`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getrarities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List cards rarities|Inline|

<h3 id="getrarities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/rarities/{rarity}

> Code samples

```bash
curl https://example.com/rarities/string \
  -H 'Accept: application/json'
```

`GET /rarities/{rarity}`

<h3 id="getraritiesrarity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rarity|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "cards": [
    {
      "id": "base1-1",
      "image": "https://assets.tcgdex.net/en/base/base1/1",
      "localId": "1",
      "name": "Alakazam"
    }
  ],
  "name": "string"
}
```

<h3 id="getraritiesrarity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the cards containing the specified rarity|[StringEndpoint](#schemastringendpoint)|
|404|Not Found|The Rarity doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/regulation-marks

> Code samples

```bash
curl https://example.com/regulation-marks \
  -H 'Accept: application/json'
```

`GET /regulation-marks`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getregulation-marks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List the current regulation marks|Inline|

<h3 id="getregulation-marks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/regulation-marks/{regulation-mark}

> Code samples

```bash
curl https://example.com/regulation-marks/string \
  -H 'Accept: application/json'
```

`GET /regulation-marks/{regulation-mark}`

<h3 id="getregulation-marksregulation-mark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regulation-mark|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "base1-1",
    "image": "https://assets.tcgdex.net/en/base/base1/1",
    "localId": "1",
    "name": "Alakazam"
  }
]
```

<h3 id="getregulation-marksregulation-mark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get every cards respecting the specified regulation-mark|Inline|
|404|Not Found|The regulation-mark doesn't exist|None|

<h3 id="getregulation-marksregulation-mark-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CardResume](#schemacardresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/retreats

> Code samples

```bash
curl https://example.com/retreats \
  -H 'Accept: application/json'
```

`GET /retreats`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getretreats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|return the different number of retreats count|Inline|

<h3 id="getretreats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/retreats/{retreat}

> Code samples

```bash
curl https://example.com/retreats/string \
  -H 'Accept: application/json'
```

`GET /retreats/{retreat}`

<h3 id="getretreatsretreat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|retreat|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "cards": [
    {
      "id": "base1-1",
      "image": "https://assets.tcgdex.net/en/base/base1/1",
      "localId": "1",
      "name": "Alakazam"
    }
  ],
  "name": "string"
}
```

<h3 id="getretreatsretreat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the cards containing the specified retreat count|[StringEndpoint](#schemastringendpoint)|
|404|Not Found|The Retreat count doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/series

> Code samples

```bash
curl https://example.com/series \
  -H 'Accept: application/json'
```

`GET /series`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "logo": "string",
    "name": "string"
  }
]
```

<h3 id="getseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|

<h3 id="getseries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SerieResume](#schemaserieresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/series/{serie}

> Code samples

```bash
curl https://example.com/series/string \
  -H 'Accept: application/json'
```

`GET /series/{serie}`

<h3 id="getseriesserie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serie|path|string|true|the serie ID or name|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "logo": "string",
  "name": "string",
  "sets": [
    {
      "cardCount": {
        "official": 100,
        "total": 101
      },
      "id": "base1",
      "logo": "https://assets.tcgdex.net/en/base/base1/logo",
      "name": "Base Set",
      "symbol": "https://assets.tcgdex.net/univ/base/base1/symbol"
    }
  ]
}
```

<h3 id="getseriesserie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Serie](#schemaserie)|
|404|Not Found|The Serie doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/sets

> Code samples

```bash
curl https://example.com/sets \
  -H 'Accept: application/json'
```

`GET /sets`

> Example responses

> 200 Response

```json
[
  {
    "cardCount": {
      "official": 100,
      "total": 101
    },
    "id": "base1",
    "logo": "https://assets.tcgdex.net/en/base/base1/logo",
    "name": "Base Set",
    "symbol": "https://assets.tcgdex.net/univ/base/base1/symbol"
  }
]
```

<h3 id="getsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|

<h3 id="getsets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SetResume](#schemasetresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/sets/{set}

> Code samples

```bash
curl https://example.com/sets/string \
  -H 'Accept: application/json'
```

`GET /sets/{set}`

<h3 id="getsetsset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|the set ID or the set name|

> Example responses

> 200 Response

```json
{
  "cardCount": {
    "firstEd": 0,
    "holo": 0,
    "normal": 0,
    "official": 100,
    "reverse": 0,
    "total": 101
  },
  "cards": [
    {
      "id": "base1-1",
      "image": "https://assets.tcgdex.net/en/base/base1/1",
      "localId": "1",
      "name": "Alakazam"
    }
  ],
  "id": "base1",
  "logo": "https://assets.tcgdex.net/en/base/base1/logo",
  "name": "Base Set",
  "symbol": "https://assets.tcgdex.net/univ/base/base1/symbol"
}
```

<h3 id="getsetsset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Set](#schemaset)|
|404|Not Found|The Set doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/stages

> Code samples

```bash
curl https://example.com/stages \
  -H 'Accept: application/json'
```

`GET /stages`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getstages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get all the possible stages a Pokémon card can have|Inline|

<h3 id="getstages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/stages/{stage}

> Code samples

```bash
curl https://example.com/stages/string \
  -H 'Accept: application/json'
```

`GET /stages/{stage}`

<h3 id="getstagesstage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stage|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "base1-1",
    "image": "https://assets.tcgdex.net/en/base/base1/1",
    "localId": "1",
    "name": "Alakazam"
  }
]
```

<h3 id="getstagesstage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get all the cards having the specified stage|Inline|
|404|Not Found|The stage doesn't exist|None|

<h3 id="getstagesstage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CardResume](#schemacardresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/suffixes

> Code samples

```bash
curl https://example.com/suffixes \
  -H 'Accept: application/json'
```

`GET /suffixes`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getsuffixes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get all the cards having the specified suffix|Inline|

<h3 id="getsuffixes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/suffixes/{suffix}

> Code samples

```bash
curl https://example.com/suffixes/string \
  -H 'Accept: application/json'
```

`GET /suffixes/{suffix}`

<h3 id="getsuffixessuffix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suffix|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "base1-1",
    "image": "https://assets.tcgdex.net/en/base/base1/1",
    "localId": "1",
    "name": "Alakazam"
  }
]
```

<h3 id="getsuffixessuffix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get all the cards having the specified stage suffix|Inline|
|404|Not Found|The suffix doesn't exist|None|

<h3 id="getsuffixessuffix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CardResume](#schemacardresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/trainer-types

> Code samples

```bash
curl https://example.com/trainer-types \
  -H 'Accept: application/json'
```

`GET /trainer-types`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="gettrainer-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the different trainer-types|Inline|

<h3 id="gettrainer-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/trainer-types/{trainer-type}

> Code samples

```bash
curl https://example.com/trainer-types/string \
  -H 'Accept: application/json'
```

`GET /trainer-types/{trainer-type}`

<h3 id="gettrainer-typestrainer-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trainer-type|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "base1-1",
    "image": "https://assets.tcgdex.net/en/base/base1/1",
    "localId": "1",
    "name": "Alakazam"
  }
]
```

<h3 id="gettrainer-typestrainer-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the cards containing with the specified trainer-type|Inline|
|404|Not Found|The trainer-type doesn't exist|None|

<h3 id="gettrainer-typestrainer-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CardResume](#schemacardresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/types

> Code samples

```bash
curl https://example.com/types \
  -H 'Accept: application/json'
```

`GET /types`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="gettypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List all possible cards types|Inline|

<h3 id="gettypes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/types/{type}

> Code samples

```bash
curl https://example.com/types/string \
  -H 'Accept: application/json'
```

`GET /types/{type}`

<h3 id="gettypestype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "base1-1",
    "image": "https://assets.tcgdex.net/en/base/base1/1",
    "localId": "1",
    "name": "Alakazam"
  }
]
```

<h3 id="gettypestype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the cards containing the specified type|Inline|
|404|Not Found|The Type doesn't exist|None|

<h3 id="gettypestype-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CardResume](#schemacardresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/variants

> Code samples

```bash
curl https://example.com/variants \
  -H 'Accept: application/json'
```

`GET /variants`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getvariants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the different variants available|Inline|

<h3 id="getvariants-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/variants/{variant}

> Code samples

```bash
curl https://example.com/variants/string \
  -H 'Accept: application/json'
```

`GET /variants/{variant}`

<h3 id="getvariantsvariant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variant|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "base1-1",
    "image": "https://assets.tcgdex.net/en/base/base1/1",
    "localId": "1",
    "name": "Alakazam"
  }
]
```

<h3 id="getvariantsvariant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the cards available in the specified variant|Inline|
|404|Not Found|The variant doesn't exist|None|

<h3 id="getvariantsvariant-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CardResume](#schemacardresume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "abilities": [
    {
      "effect": "As often as you like...",
      "name": "Damage Swap",
      "type": "Poke-POWER"
    }
  ],
  "attacks": [
    {
      "cost": [
        ""
      ],
      "damage": 30,
      "effect": "Flip a coin. If heads, ...",
      "name": "Confuse Ray"
    }
  ],
  "category": "Pokemon",
  "description": "string",
  "dexId": [
    0
  ],
  "energyType": "string",
  "evolveFrom": "Kadabra",
  "hp": 80,
  "id": "base1-1",
  "illustrator": "Ken Sugimori",
  "image": "https://assets.tcgdex.net/en/base/base1/1",
  "item": {
    "effect": "string",
    "name": "string"
  },
  "legal": {
    "expanded": false,
    "standard": false
  },
  "level": 30,
  "localId": "1",
  "name": "Alakazam",
  "rarity": "Rare",
  "regulationMark": "D",
  "resistances": [
    [
      {
        "type": "Psychic",
        "value": "x2"
      }
    ]
  ],
  "retreat": 3,
  "set": {
    "cardCount": {
      "official": 100,
      "total": 101
    },
    "id": "base1",
    "logo": "https://assets.tcgdex.net/en/base/base1/logo",
    "name": "Base Set",
    "symbol": "https://assets.tcgdex.net/univ/base/base1/symbol"
  },
  "stage": "Stage2",
  "suffix": "string",
  "trainerType": "string",
  "types": [
    "Psychic"
  ],
  "variants": {
    "firstEdition": true,
    "holo": true,
    "normal": true,
    "reverse": true,
    "wPromo": true
  },
  "weaknesses": [
    [
      {
        "type": "Psychic",
        "value": "x2"
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abilities|[object]|false|none|none|
|attacks|[object]|false|none|none|
|category|string|true|none|none|
|description|string|false|none|none|
|dexId|[number]|false|none|none|
|energyType|string|false|none|none|
|evolveFrom|string|false|none|none|
|hp|number|false|none|none|
|id|string|true|none|none|
|illustrator|string|false|none|none|
|image|string|false|none|none|
|item|object|false|none|none|
|legal|object|true|none|none|
|level|number|false|none|none|
|localId|string|true|none|none|
|name|string|true|none|none|
|rarity|string|true|none|none|
|regulationMark|string|false|none|none|
|resistances|[[WeakRes](#schemaweakres)]|false|none|none|
|retreat|number|false|none|none|
|set|[SetResume](#schemasetresume)|true|none|none|
|stage|string|false|none|none|
|suffix|string|false|none|none|
|trainerType|string|false|none|none|
|types|[string]|false|none|none|
|variants|object|false|none|none|
|weaknesses|[[WeakRes](#schemaweakres)]|false|none|none|

<h2 id="tocS_CardResume">CardResume</h2>
<!-- backwards compatibility -->
<a id="schemacardresume"></a>
<a id="schema_CardResume"></a>
<a id="tocScardresume"></a>
<a id="tocscardresume"></a>

```json
{
  "id": "base1-1",
  "image": "https://assets.tcgdex.net/en/base/base1/1",
  "localId": "1",
  "name": "Alakazam"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|image|string|false|none|none|
|localId|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_Serie">Serie</h2>
<!-- backwards compatibility -->
<a id="schemaserie"></a>
<a id="schema_Serie"></a>
<a id="tocSserie"></a>
<a id="tocsserie"></a>

```json
{
  "id": "string",
  "logo": "string",
  "name": "string",
  "sets": [
    {
      "cardCount": {
        "official": 100,
        "total": 101
      },
      "id": "base1",
      "logo": "https://assets.tcgdex.net/en/base/base1/logo",
      "name": "Base Set",
      "symbol": "https://assets.tcgdex.net/univ/base/base1/symbol"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|logo|string|false|none|none|
|name|string|true|none|none|
|sets|[[SetResume](#schemasetresume)]|true|none|none|

<h2 id="tocS_SerieResume">SerieResume</h2>
<!-- backwards compatibility -->
<a id="schemaserieresume"></a>
<a id="schema_SerieResume"></a>
<a id="tocSserieresume"></a>
<a id="tocsserieresume"></a>

```json
{
  "id": "string",
  "logo": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|logo|string|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_Set">Set</h2>
<!-- backwards compatibility -->
<a id="schemaset"></a>
<a id="schema_Set"></a>
<a id="tocSset"></a>
<a id="tocsset"></a>

```json
{
  "cardCount": {
    "firstEd": 0,
    "holo": 0,
    "normal": 0,
    "official": 100,
    "reverse": 0,
    "total": 101
  },
  "cards": [
    {
      "id": "base1-1",
      "image": "https://assets.tcgdex.net/en/base/base1/1",
      "localId": "1",
      "name": "Alakazam"
    }
  ],
  "id": "base1",
  "logo": "https://assets.tcgdex.net/en/base/base1/logo",
  "name": "Base Set",
  "symbol": "https://assets.tcgdex.net/univ/base/base1/symbol"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardCount|object|true|none|none|
|cards|[[CardResume](#schemacardresume)]|true|none|none|
|id|string|true|none|none|
|logo|string|false|none|none|
|name|string|true|none|none|
|symbol|string|false|none|none|

<h2 id="tocS_SetResume">SetResume</h2>
<!-- backwards compatibility -->
<a id="schemasetresume"></a>
<a id="schema_SetResume"></a>
<a id="tocSsetresume"></a>
<a id="tocssetresume"></a>

```json
{
  "cardCount": {
    "official": 100,
    "total": 101
  },
  "id": "base1",
  "logo": "https://assets.tcgdex.net/en/base/base1/logo",
  "name": "Base Set",
  "symbol": "https://assets.tcgdex.net/univ/base/base1/symbol"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardCount|object|true|none|none|
|id|string|true|none|none|
|logo|string|false|none|none|
|name|string|true|none|none|
|symbol|string|false|none|none|

<h2 id="tocS_StringEndpoint">StringEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemastringendpoint"></a>
<a id="schema_StringEndpoint"></a>
<a id="tocSstringendpoint"></a>
<a id="tocsstringendpoint"></a>

```json
{
  "cards": [
    {
      "id": "base1-1",
      "image": "https://assets.tcgdex.net/en/base/base1/1",
      "localId": "1",
      "name": "Alakazam"
    }
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cards|[[CardResume](#schemacardresume)]|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_WeakRes">WeakRes</h2>
<!-- backwards compatibility -->
<a id="schemaweakres"></a>
<a id="schema_WeakRes"></a>
<a id="tocSweakres"></a>
<a id="tocsweakres"></a>

```json
[
  {
    "type": "Psychic",
    "value": "x2"
  }
]
```
