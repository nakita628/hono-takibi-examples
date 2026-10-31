<h1 id="pokéapi">PokéAPI v2.10.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

All the Pokémon data you'll ever need in one place, easily accessible through a modern free open-source RESTful API.

## What is this?

This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.

We've covered everything from Pokémon to Berry Flavors.

## Where do I start?

We have awesome [documentation](https://pokeapi.co/docs/v2) on how to use this API. It takes minutes to get started.

This API will always be publicly available and will never require any extensive setup process to consume.

Created by [**Paul Hallett**](https://github.com/phalt) and other [**PokéAPI contributors**](https://github.com/PokeAPI/pokeapi#contributing) around the world. Pokémon and Pokémon character names are trademarks of Nintendo.

Base URLs:

* <a href="https://pokeapi.co">https://pokeapi.co</a>

<a href="https://pokeapi.co/docs/v2">External documentation</a>

<h1 id="pokéapi-pokemon">pokemon</h1>

Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.

<a href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon">Find more info here</a>

## List abilities

<a id="opIdability_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/ability/ \
  -H 'Accept: application/json'
```

`GET /api/v2/ability/`

Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.

<h3 id="list-abilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-abilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedAbilitySummaryList](#schemapaginatedabilitysummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get ability

<a id="opIdability_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/ability/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/ability/{id}/`

Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.

<h3 id="get-ability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "is_main_series": true,
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "effect_entries": [
    {
      "effect": "string",
      "short_effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "effect_changes": [
    {
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      },
      "effect_entries": [
        {
          "effect": "string",
          "language": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon": [
    {
      "is_hidden": true,
      "slot": -2147483648,
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-ability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AbilityDetail](#schemaabilitydetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List characteristics

<a id="opIdcharacteristic_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/characteristic/ \
  -H 'Accept: application/json'
```

`GET /api/v2/characteristic/`

Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.

<h3 id="list-characteristics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-characteristics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedCharacteristicSummaryList](#schemapaginatedcharacteristicsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get characteristic

<a id="opIdcharacteristic_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/characteristic/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/characteristic/{id}/`

Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.

<h3 id="get-characteristic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "gene_modulo": 0,
  "possible_values": [
    0
  ],
  "highest_stat": {
    "name": "string",
    "url": "http://example.com"
  },
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-characteristic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CharacteristicDetail](#schemacharacteristicdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List egg groups

<a id="opIdegg_group_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/egg-group/ \
  -H 'Accept: application/json'
```

`GET /api/v2/egg-group/`

Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.

<h3 id="list-egg-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-egg-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedEggGroupSummaryList](#schemapaginatedegggroupsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get egg group

<a id="opIdegg_group_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/egg-group/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/egg-group/{id}/`

Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.

<h3 id="get-egg-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-egg-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EggGroupDetail](#schemaegggroupdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List genders

<a id="opIdgender_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/gender/ \
  -H 'Accept: application/json'
```

`GET /api/v2/gender/`

Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.

<h3 id="list-genders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-genders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedGenderSummaryList](#schemapaginatedgendersummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get gender

<a id="opIdgender_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/gender/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/gender/{id}/`

Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.

<h3 id="get-gender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "pokemon_species_details": [
    {
      "rate": 0,
      "pokemon_species": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "required_for_evolution": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-gender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GenderDetail](#schemagenderdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List growth rates

<a id="opIdgrowth_rate_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/growth-rate/ \
  -H 'Accept: application/json'
```

`GET /api/v2/growth-rate/`

Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.

<h3 id="list-growth-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-growth-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedGrowthRateSummaryList](#schemapaginatedgrowthratesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get growth rate

<a id="opIdgrowth_rate_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/growth-rate/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/growth-rate/{id}/`

Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.

<h3 id="get-growth-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "formula": "string",
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "levels": [
    {
      "level": -2147483648,
      "experience": -2147483648
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-growth-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GrowthRateDetail](#schemagrowthratedetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List move damage classes

<a id="opIdmove_damage_class_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-damage-class/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-damage-class/`

Damage classes moves can have, e.g. physical, special, or non-damaging.

<h3 id="list-move-damage-classes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-move-damage-classes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedMoveDamageClassSummaryList](#schemapaginatedmovedamageclasssummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get move damage class

<a id="opIdmove_damage_class_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-damage-class/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-damage-class/{id}/`

Damage classes moves can have, e.g. physical, special, or non-damaging.

<h3 id="get-move-damage-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-move-damage-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MoveDamageClassDetail](#schemamovedamageclassdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List natures

<a id="opIdnature_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/nature/ \
  -H 'Accept: application/json'
```

`GET /api/v2/nature/`

Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.

<h3 id="list-natures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-natures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedNatureSummaryList](#schemapaginatednaturesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get nature

<a id="opIdnature_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/nature/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/nature/{id}/`

Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.

<h3 id="get-nature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "decreased_stat": {
    "name": "string",
    "url": "http://example.com"
  },
  "increased_stat": {
    "name": "string",
    "url": "http://example.com"
  },
  "likes_flavor": {
    "name": "string",
    "url": "http://example.com"
  },
  "hates_flavor": {
    "name": "string",
    "url": "http://example.com"
  },
  "berries": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "pokeathlon_stat_changes": [
    {
      "max_change": -2147483648,
      "pokeathlon_stat": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "move_battle_style_preferences": [
    {
      "low_hp_preference": -2147483648,
      "high_hp_preference": -2147483648,
      "move_battle_style": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-nature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[NatureDetail](#schemanaturedetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List pokemon

<a id="opIdpokemon_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon/`

Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.

<h3 id="list-pokemon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-pokemon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedPokemonSummaryList](#schemapaginatedpokemonsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pokemon

<a id="opIdpokemon_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon/{id}/`

Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.

<h3 id="get-pokemon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "base_experience": -2147483648,
  "height": -2147483648,
  "is_default": true,
  "order": -2147483648,
  "weight": -2147483648,
  "abilities": [
    {
      "is_hidden": true,
      "slot": -2147483648,
      "ability": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "past_abilities": [
    {
      "abilities": [
        {
          "is_hidden": true,
          "slot": -2147483648,
          "ability": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ],
      "generation": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "forms": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "game_indices": [
    {
      "game_index": -2147483648,
      "version": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "held_items": [
    {
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_details": [
        {
          "rarity": 0,
          "version": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "location_area_encounters": "string",
  "moves": [
    {
      "move": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "string",
            "url": "http://example.com"
          },
          "version_group": {
            "name": "string",
            "url": "http://example.com"
          },
          "order": 0
        }
      ]
    }
  ],
  "species": {
    "name": "string",
    "url": "http://example.com"
  },
  "sprites": {
    "front_default": "string"
  },
  "cries": {
    "latest": "string",
    "legacy": "string"
  },
  "stats": [
    {
      "base_stat": -2147483648,
      "effort": -2147483648,
      "stat": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "past_stats": [
    {
      "generation": {
        "name": "string",
        "url": "http://example.com"
      },
      "stats": [
        {
          "base_stat": -2147483648,
          "effort": -2147483648,
          "stat": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "types": [
    {
      "slot": -2147483648,
      "type": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "past_types": [
    {
      "generation": {
        "name": "string",
        "url": "http://example.com"
      },
      "types": [
        {
          "slot": -2147483648,
          "pokemon": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ]
}
```

<h3 id="get-pokemon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PokemonDetail](#schemapokemondetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List pokemon colors

<a id="opIdpokemon_color_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon-color/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon-color/`

Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.

<h3 id="list-pokemon-colors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-pokemon-colors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedPokemonColorSummaryList](#schemapaginatedpokemoncolorsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pokemon color

<a id="opIdpokemon_color_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon-color/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon-color/{id}/`

Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.

<h3 id="get-pokemon-color-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-pokemon-color-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PokemonColorDetail](#schemapokemoncolordetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List pokemon forms

<a id="opIdpokemon_form_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon-form/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon-form/`

Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.

<h3 id="list-pokemon-forms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-pokemon-forms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedPokemonFormSummaryList](#schemapaginatedpokemonformsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pokemon form

<a id="opIdpokemon_form_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon-form/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon-form/{id}/`

Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.

<h3 id="get-pokemon-form-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "order": -2147483648,
  "form_order": -2147483648,
  "is_default": true,
  "is_battle_only": true,
  "is_mega": true,
  "form_name": "string",
  "pokemon": {
    "name": "string",
    "url": "http://example.com"
  },
  "sprites": {
    "sprites": null
  },
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "form_names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "types": [
    {
      "slot": -2147483648,
      "type": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "trigger_conditions": [
    {
      "trigger": "string",
      "base_form": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      },
      "version": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-pokemon-form-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PokemonFormDetail](#schemapokemonformdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List pokemom habitas

<a id="opIdpokemon_habitat_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon-habitat/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon-habitat/`

Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.

<h3 id="list-pokemom-habitas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-pokemom-habitas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedPokemonHabitatSummaryList](#schemapaginatedpokemonhabitatsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pokemom habita

<a id="opIdpokemon_habitat_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon-habitat/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon-habitat/{id}/`

Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.

<h3 id="get-pokemom-habita-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-pokemom-habita-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PokemonHabitatDetail](#schemapokemonhabitatdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List pokemon shapes

<a id="opIdpokemon_shape_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon-shape/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon-shape/`

Shapes used for sorting Pokémon in a Pokédex.

<h3 id="list-pokemon-shapes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-pokemon-shapes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedPokemonShapeSummaryList](#schemapaginatedpokemonshapesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pokemon shape

<a id="opIdpokemon_shape_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon-shape/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon-shape/{id}/`

Shapes used for sorting Pokémon in a Pokédex.

<h3 id="get-pokemon-shape-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "awesome_names": [
    {
      "awesome_name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-pokemon-shape-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PokemonShapeDetail](#schemapokemonshapedetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List pokemon species

<a id="opIdpokemon_species_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon-species/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon-species/`

A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.

<h3 id="list-pokemon-species-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-pokemon-species-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedPokemonSpeciesSummaryList](#schemapaginatedpokemonspeciessummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pokemon species

<a id="opIdpokemon_species_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon-species/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon-species/{id}/`

A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.

<h3 id="get-pokemon-species-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "order": -2147483648,
  "gender_rate": -2147483648,
  "capture_rate": -2147483648,
  "base_happiness": -2147483648,
  "is_baby": true,
  "is_legendary": true,
  "is_mythical": true,
  "hatch_counter": -2147483648,
  "has_gender_differences": true,
  "forms_switchable": true,
  "growth_rate": {
    "name": "string",
    "url": "http://example.com"
  },
  "pokedex_numbers": [
    {
      "entry_number": 0,
      "pokedex": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "egg_groups": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "color": {
    "name": "string",
    "url": "http://example.com"
  },
  "shape": {
    "name": "string",
    "url": "http://example.com"
  },
  "evolves_from_species": {
    "name": "string",
    "url": "http://example.com"
  },
  "evolution_chain": {
    "url": "http://example.com"
  },
  "habitat": {
    "name": "string",
    "url": "http://example.com"
  },
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pal_park_encounters": [
    {
      "base_score": -2147483648,
      "rate": -2147483648,
      "area": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "form_descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      },
      "version": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "genera": [
    {
      "genus": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "varieties": [
    {
      "is_default": true,
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-pokemon-species-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PokemonSpeciesDetail](#schemapokemonspeciesdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List pokeathlon stats

<a id="opIdpokeathlon_stat_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokeathlon-stat/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokeathlon-stat/`

Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.

<h3 id="list-pokeathlon-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-pokeathlon-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedPokeathlonStatSummaryList](#schemapaginatedpokeathlonstatsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pokeathlon stat

<a id="opIdpokeathlon_stat_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokeathlon-stat/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokeathlon-stat/{id}/`

Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.

<h3 id="get-pokeathlon-stat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "affecting_natures": {
    "increase": [
      {
        "max_change": -2147483648,
        "nature": {
          "name": "string",
          "url": "http://example.com"
        }
      }
    ],
    "decrease": [
      {
        "max_change": -2147483648,
        "nature": {
          "name": "string",
          "url": "http://example.com"
        }
      }
    ]
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-pokeathlon-stat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PokeathlonStatDetail](#schemapokeathlonstatdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List stats

<a id="opIdstat_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/stat/ \
  -H 'Accept: application/json'
```

`GET /api/v2/stat/`

Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.

<h3 id="list-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedStatSummaryList](#schemapaginatedstatsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get stat

<a id="opIdstat_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/stat/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/stat/{id}/`

Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.

<h3 id="get-stat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "game_index": -2147483648,
  "is_battle_only": true,
  "affecting_moves": {
    "increase": [
      {
        "change": -2147483648,
        "move": {
          "name": "string",
          "url": "http://example.com"
        }
      }
    ],
    "decrease": [
      {
        "change": -2147483648,
        "move": {
          "name": "string",
          "url": "http://example.com"
        }
      }
    ]
  },
  "affecting_natures": {
    "increase": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "decrease": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ]
  },
  "affecting_items": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "characteristics": [
    {
      "url": "http://example.com"
    }
  ],
  "move_damage_class": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-stat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[StatDetail](#schemastatdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List types

<a id="opIdtype_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/type/ \
  -H 'Accept: application/json'
```

`GET /api/v2/type/`

Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.

<h3 id="list-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedTypeSummaryList](#schemapaginatedtypesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get types

<a id="opIdtype_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/type/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/type/{id}/`

Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.

<h3 id="get-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "damage_relations": {
    "no_damage_to": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "half_damage_to": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "double_damage_to": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "no_damage_from": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "half_damage_from": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "double_damage_from": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ]
  },
  "past_damage_relations": [
    {
      "generation": {
        "name": "string",
        "url": "http://example.com"
      },
      "damage_relations": {
        "no_damage_to": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "half_damage_to": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "double_damage_to": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "no_damage_from": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "half_damage_from": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "double_damage_from": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ]
      }
    }
  ],
  "game_indices": [
    {
      "game_index": -2147483648,
      "generation": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "move_damage_class": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon": [
    {
      "slot": -2147483648,
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "sprites": {
    "sprites": null
  }
}
```

<h3 id="get-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TypeDetail](#schematypedetail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="pokéapi-evolution">evolution</h1>

Evolution is a process in which a Pokémon changes into a different species of Pokémon.

<a href="https://bulbapedia.bulbagarden.net/wiki/Evolution">Find more info here</a>

## List evolution chains

<a id="opIdevolution_chain_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/evolution-chain/ \
  -H 'Accept: application/json'
```

`GET /api/v2/evolution-chain/`

Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.

<h3 id="list-evolution-chains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-evolution-chains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedEvolutionChainSummaryList](#schemapaginatedevolutionchainsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get evolution chain

<a id="opIdevolution_chain_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/evolution-chain/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/evolution-chain/{id}/`

Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.

<h3 id="get-evolution-chain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "baby_trigger_item": {
    "name": "string",
    "url": "http://example.com"
  },
  "chain": {
    "is_baby": true,
    "species": {
      "name": "string",
      "url": "http://example.com"
    },
    "evolution_details": [
      {
        "version_group": {
          "name": "string",
          "url": "http://example.com"
        },
        "is_default": true,
        "item": {
          "name": "string",
          "url": "http://example.com"
        },
        "trigger": {
          "name": "string",
          "url": "http://example.com"
        },
        "gender": 0,
        "held_item": {
          "name": "string",
          "url": "http://example.com"
        },
        "known_move": {
          "name": "string",
          "url": "http://example.com"
        },
        "known_move_type": {
          "name": "string",
          "url": "http://example.com"
        },
        "location": {
          "name": "string",
          "url": "http://example.com"
        },
        "min_level": -2147483648,
        "min_happiness": -2147483648,
        "min_beauty": -2147483648,
        "min_affection": -2147483648,
        "near_special_rock": true,
        "needs_multiplayer": true,
        "needs_overworld_rain": true,
        "party_species": {
          "name": "string",
          "url": "http://example.com"
        },
        "party_type": {
          "name": "string",
          "url": "http://example.com"
        },
        "relative_physical_stats": -2147483648,
        "time_of_day": "string",
        "trade_species": {
          "name": "string",
          "url": "http://example.com"
        },
        "turn_upside_down": true,
        "region": {
          "name": "string",
          "url": "http://example.com"
        },
        "required_pokemon_form": {
          "name": "string",
          "url": "http://example.com"
        },
        "evolved_pokemon_form": {
          "name": "string",
          "url": "http://example.com"
        },
        "used_move": {
          "name": "string",
          "url": "http://example.com"
        },
        "min_move_count": -2147483648,
        "min_steps": -2147483648,
        "min_damage_taken": -2147483648,
        "allowed_natures": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "condition_expression": {
          "expression": "string",
          "percentage_chance": 0,
          "variables": [
            {
              "name": "string",
              "url": "http://example.com"
            }
          ]
        }
      }
    ],
    "evolves_to": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }
}
```

<h3 id="get-evolution-chain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EvolutionChainDetail](#schemaevolutionchaindetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List evolution triggers

<a id="opIdevolution_trigger_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/evolution-trigger/ \
  -H 'Accept: application/json'
```

`GET /api/v2/evolution-trigger/`

Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.

<h3 id="list-evolution-triggers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-evolution-triggers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedEvolutionTriggerSummaryList](#schemapaginatedevolutiontriggersummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get evolution trigger

<a id="opIdevolution_trigger_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/evolution-trigger/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/evolution-trigger/{id}/`

Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.

<h3 id="get-evolution-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-evolution-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EvolutionTriggerDetail](#schemaevolutiontriggerdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List evolution variables

<a id="opIdevolution_variable_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/evolution-variable/ \
  -H 'Accept: application/json'
```

`GET /api/v2/evolution-variable/`

Evolution variables represent parameters (such as Encryption Constant and Personality Value) used in boolean expressions for form-branching evolutions. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Personality_value) for greater detail.

<h3 id="list-evolution-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-evolution-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedEvolutionVariableSummaryList](#schemapaginatedevolutionvariablesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get evolution variable

<a id="opIdevolution_variable_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/evolution-variable/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/evolution-variable/{id}/`

Evolution variables represent parameters (such as Encryption Constant and Personality Value) used in boolean expressions for form-branching evolutions. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Personality_value) for greater detail.

<h3 id="get-evolution-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "symbol": "string",
  "data_type": "string",
  "source": "string",
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-evolution-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EvolutionVariableDetail](#schemaevolutionvariabledetail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="pokéapi-berries">berries</h1>

Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.

<a href="https://bulbapedia.bulbagarden.net/wiki/Berry">Find more info here</a>

## List berries

<a id="opIdberry_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/berry/ \
  -H 'Accept: application/json'
```

`GET /api/v2/berry/`

Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.

<h3 id="list-berries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-berries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedBerrySummaryList](#schemapaginatedberrysummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a berry

<a id="opIdberry_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/berry/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/berry/{id}/`

Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.

<h3 id="get-a-berry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "growth_time": -2147483648,
  "max_harvest": -2147483648,
  "natural_gift_power": -2147483648,
  "size": -2147483648,
  "smoothness": -2147483648,
  "soil_dryness": -2147483648,
  "firmness": {
    "name": "string",
    "url": "http://example.com"
  },
  "flavors": [
    {
      "potency": -2147483648,
      "flavor": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "item": {
    "name": "string",
    "url": "http://example.com"
  },
  "natural_gift_type": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="get-a-berry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BerryDetail](#schemaberrydetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List berry firmness

<a id="opIdberry_firmness_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/berry-firmness/ \
  -H 'Accept: application/json'
```

`GET /api/v2/berry-firmness/`

Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.

<h3 id="list-berry-firmness-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-berry-firmness-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedBerryFirmnessSummaryList](#schemapaginatedberryfirmnesssummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get berry by firmness

<a id="opIdberry_firmness_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/berry-firmness/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/berry-firmness/{id}/`

Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.

<h3 id="get-berry-by-firmness-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "berries": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-berry-by-firmness-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BerryFirmnessDetail](#schemaberryfirmnessdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List berry flavors

<a id="opIdberry_flavor_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/berry-flavor/ \
  -H 'Accept: application/json'
```

`GET /api/v2/berry-flavor/`

Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.

<h3 id="list-berry-flavors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-berry-flavors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedBerryFlavorSummaryList](#schemapaginatedberryflavorsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get berries by flavor

<a id="opIdberry_flavor_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/berry-flavor/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/berry-flavor/{id}/`

Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.

<h3 id="get-berries-by-flavor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "berries": [
    {
      "potency": -2147483648,
      "berry": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "contest_type": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-berries-by-flavor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BerryFlavorDetail](#schemaberryflavordetail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="pokéapi-items">items</h1>

An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.

<a href="https://bulbapedia.bulbagarden.net/wiki/Item">Find more info here</a>

## List items

<a id="opIditem_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/item/ \
  -H 'Accept: application/json'
```

`GET /api/v2/item/`

An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.

<h3 id="list-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedItemSummaryList](#schemapaginateditemsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get item

<a id="opIditem_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/item/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/item/{id}/`

An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.

<h3 id="get-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fling_power": -2147483648,
  "fling_effect": {
    "name": "string",
    "url": "http://example.com"
  },
  "attributes": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "category": {
    "name": "string",
    "url": "http://example.com"
  },
  "effect_entries": [
    {
      "effect": "string",
      "short_effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "text": "string",
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      },
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "game_indices": [
    {
      "game_index": -2147483648,
      "generation": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "prices": [
    {
      "purchase_price": -2147483648,
      "sell_price": -2147483648,
      "currency": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "held_by_pokemon": [
    {
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_details": [
        {
          "rarity": 0,
          "version": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "sprites": {
    "default": "string"
  },
  "baby_trigger_for": {
    "url": "http://example.com"
  },
  "machines": [
    {
      "machine": {
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ItemDetail](#schemaitemdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List item categories

<a id="opIditem_category_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/item-category/ \
  -H 'Accept: application/json'
```

`GET /api/v2/item-category/`

Item categories determine where items will be placed in the players bag.

<h3 id="list-item-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-item-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedItemCategorySummaryList](#schemapaginateditemcategorysummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get item category

<a id="opIditem_category_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/item-category/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/item-category/{id}/`

Item categories determine where items will be placed in the players bag.

<h3 id="get-item-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "items": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pocket": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="get-item-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ItemCategoryDetail](#schemaitemcategorydetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List item attributes

<a id="opIditem_attribute_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/item-attribute/ \
  -H 'Accept: application/json'
```

`GET /api/v2/item-attribute/`

Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".

<h3 id="list-item-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-item-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedItemAttributeSummaryList](#schemapaginateditemattributesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get item attribute

<a id="opIditem_attribute_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/item-attribute/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/item-attribute/{id}/`

Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".

<h3 id="get-item-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "items": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-item-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ItemAttributeDetail](#schemaitemattributedetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List item fling effects

<a id="opIditem_fling_effect_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/item-fling-effect/ \
  -H 'Accept: application/json'
```

`GET /api/v2/item-fling-effect/`

The various effects of the move"Fling" when used with different items.

<h3 id="list-item-fling-effects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-item-fling-effects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedItemFlingEffectSummaryList](#schemapaginateditemflingeffectsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get item fling effect

<a id="opIditem_fling_effect_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/item-fling-effect/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/item-fling-effect/{id}/`

The various effects of the move"Fling" when used with different items.

<h3 id="get-item-fling-effect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "effect_entries": [
    {
      "effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "items": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-item-fling-effect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ItemFlingEffectDetail](#schemaitemflingeffectdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List item pockets

<a id="opIditem_pocket_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/item-pocket/ \
  -H 'Accept: application/json'
```

`GET /api/v2/item-pocket/`

Pockets within the players bag used for storing items by category.

<h3 id="list-item-pockets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-item-pockets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedItemPocketSummaryList](#schemapaginateditempocketsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get item pocket

<a id="opIditem_pocket_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/item-pocket/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/item-pocket/{id}/`

Pockets within the players bag used for storing items by category.

<h3 id="get-item-pocket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "categories": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-item-pocket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ItemPocketDetail](#schemaitempocketdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List currencies

<a id="opIdcurrency_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/currency/ \
  -H 'Accept: application/json'
```

`GET /api/v2/currency/`

Currencies used to buy items.

<h3 id="list-currencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-currencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedCurrencySummaryList](#schemapaginatedcurrencysummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get currency

<a id="opIdcurrency_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/currency/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/currency/{id}/`

Currencies used to buy items.

<h3 id="get-currency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-currency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CurrencyDetail](#schemacurrencydetail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="pokéapi-machines">machines</h1>

Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.

<a href="https://bulbapedia.bulbagarden.net/wiki/TM">Find more info here</a>

## List machines

<a id="opIdmachine_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/machine/ \
  -H 'Accept: application/json'
```

`GET /api/v2/machine/`

Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.

<h3 id="list-machines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-machines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedMachineSummaryList](#schemapaginatedmachinesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get machine

<a id="opIdmachine_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/machine/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/machine/{id}/`

Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.

<h3 id="get-machine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "item": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "move": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="get-machine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MachineDetail](#schemamachinedetail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="pokéapi-location">location</h1>

Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.

<a href="https://bulbapedia.bulbagarden.net/wiki/List_of_locations_by_index_number">Find more info here</a>

## List locations

<a id="opIdlocation_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/location/ \
  -H 'Accept: application/json'
```

`GET /api/v2/location/`

Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.

<h3 id="list-locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedLocationSummaryList](#schemapaginatedlocationsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get location

<a id="opIdlocation_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/location/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/location/{id}/`

Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.

<h3 id="get-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "region": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "game_indices": [
    {
      "game_index": -2147483648,
      "generation": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "areas": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LocationDetail](#schemalocationdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List location areas

<a id="opIdlocation_area_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/location-area/ \
  -H 'Accept: application/json'
```

`GET /api/v2/location-area/`

Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.

<h3 id="list-location-areas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-location-areas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedLocationAreaSummaryList](#schemapaginatedlocationareasummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get location area

<a id="opIdlocation_area_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/location-area/0/ \
  -H 'Accept: application/json'
```

`GET /api/v2/location-area/{id}/`

Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.

<h3 id="get-location-area-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this location area.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "game_index": -2147483648,
  "encounter_method_rates": [
    {
      "encounter_method": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_details": [
        {
          "rate": 0,
          "version": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "location": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_encounters": [
    {
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_details": [
        {
          "version": {
            "name": "string",
            "url": "http://example.com"
          },
          "max_chance": 0,
          "encounter_details": [
            {
              "min_level": 0,
              "max_level": 0,
              "chance": 0,
              "method": {
                "name": "string",
                "url": "http://example.com"
              },
              "condition_values": [
                {
                  "name": "string",
                  "url": "http://example.com"
                }
              ],
              "pokemon_details": {
                "min_perfect_ivs": -2147483648,
                "always_shiny": true,
                "never_shiny": true,
                "is_alpha": true
              }
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="get-location-area-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LocationAreaDetail](#schemalocationareadetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List pal park areas

<a id="opIdpal_park_area_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pal-park-area/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pal-park-area/`

Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.

<h3 id="list-pal-park-areas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-pal-park-areas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedPalParkAreaSummaryList](#schemapaginatedpalparkareasummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pal park area

<a id="opIdpal_park_area_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pal-park-area/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pal-park-area/{id}/`

Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.

<h3 id="get-pal-park-area-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_encounters": [
    {
      "base_score": -2147483648,
      "rate": -2147483648,
      "pokemon_species": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-pal-park-area-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PalParkAreaDetail](#schemapalparkareadetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List regions

<a id="opIdregion_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/region/ \
  -H 'Accept: application/json'
```

`GET /api/v2/region/`

A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.

<h3 id="list-regions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedRegionSummaryList](#schemapaginatedregionsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get region

<a id="opIdregion_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/region/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/region/{id}/`

A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.

<h3 id="get-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "locations": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "main_generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokedexes": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "version_groups": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RegionDetail](#schemaregiondetail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="pokéapi-moves">moves</h1>

Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.

<a href="https://bulbapedia.bulbagarden.net/wiki/List_of_locations_by_name">Find more info here</a>

## List moves

<a id="opIdmove_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move/`

Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.

<h3 id="list-moves-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-moves-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedMoveSummaryList](#schemapaginatedmovesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get move

<a id="opIdmove_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move/{id}/`

Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.

<h3 id="get-move-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "accuracy": -2147483648,
  "effect_chance": 0,
  "pp": -2147483648,
  "priority": -2147483648,
  "power": -2147483648,
  "contest_combos": {
    "normal": {
      "use_before": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "use_after": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ]
    },
    "super": {
      "use_before": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "use_after": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ]
    }
  },
  "contest_type": {
    "name": "string",
    "url": "http://example.com"
  },
  "contest_effect": {
    "url": "http://example.com"
  },
  "damage_class": {
    "name": "string",
    "url": "http://example.com"
  },
  "effect_entries": [
    {
      "effect": "string",
      "short_effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "effect_changes": [
    {
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      },
      "effect_entries": [
        {
          "effect": "string",
          "language": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "meta": {
    "ailment": {
      "name": "string",
      "url": "http://example.com"
    },
    "category": {
      "name": "string",
      "url": "http://example.com"
    },
    "min_hits": -2147483648,
    "max_hits": -2147483648,
    "min_turns": -2147483648,
    "max_turns": -2147483648,
    "drain": -2147483648,
    "healing": -2147483648,
    "crit_rate": -2147483648,
    "ailment_chance": -2147483648,
    "flinch_chance": -2147483648,
    "stat_chance": -2147483648
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "past_values": [
    {
      "accuracy": -2147483648,
      "power": -2147483648,
      "pp": -2147483648,
      "effect_chance": 0,
      "effect_entries": [
        {
          "effect": "string",
          "short_effect": "string",
          "language": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ],
      "type": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "stat_changes": [
    {
      "change": -2147483648,
      "stat": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "super_contest_effect": {
    "url": "http://example.com"
  },
  "target": {
    "name": "string",
    "url": "http://example.com"
  },
  "type": {
    "name": "string",
    "url": "http://example.com"
  },
  "machines": [
    {
      "machine": {
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "learned_by_pokemon": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-move-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MoveDetail](#schemamovedetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List move meta ailments

<a id="opIdmove_ailment_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-ailment/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-ailment/`

Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.

<h3 id="list-move-meta-ailments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-move-meta-ailments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedMoveMetaAilmentSummaryList](#schemapaginatedmovemetaailmentsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get move meta ailment

<a id="opIdmove_ailment_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-ailment/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-ailment/{id}/`

Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.

<h3 id="get-move-meta-ailment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-move-meta-ailment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MoveMetaAilmentDetail](#schemamovemetaailmentdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List move battle styles

<a id="opIdmove_battle_style_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-battle-style/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-battle-style/`

Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.

<h3 id="list-move-battle-styles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-move-battle-styles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedMoveBattleStyleSummaryList](#schemapaginatedmovebattlestylesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get move battle style

<a id="opIdmove_battle_style_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-battle-style/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-battle-style/{id}/`

Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.

<h3 id="get-move-battle-style-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-move-battle-style-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MoveBattleStyleDetail](#schemamovebattlestyledetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List move meta categories

<a id="opIdmove_category_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-category/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-category/`

Very general categories that loosely group move effects.

<h3 id="list-move-meta-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-move-meta-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedMoveMetaCategorySummaryList](#schemapaginatedmovemetacategorysummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get move meta category

<a id="opIdmove_category_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-category/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-category/{id}/`

Very general categories that loosely group move effects.

<h3 id="get-move-meta-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-move-meta-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MoveMetaCategoryDetail](#schemamovemetacategorydetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List move learn methods

<a id="opIdmove_learn_method_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-learn-method/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-learn-method/`

Methods by which Pokémon can learn moves.

<h3 id="list-move-learn-methods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-move-learn-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedMoveLearnMethodSummaryList](#schemapaginatedmovelearnmethodsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get move learn method

<a id="opIdmove_learn_method_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-learn-method/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-learn-method/{id}/`

Methods by which Pokémon can learn moves.

<h3 id="get-move-learn-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "version_groups": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-move-learn-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MoveLearnMethodDetail](#schemamovelearnmethoddetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List move targets

<a id="opIdmove_target_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-target/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-target/`

Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.

<h3 id="list-move-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-move-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedMoveTargetSummaryList](#schemapaginatedmovetargetsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get move target

<a id="opIdmove_target_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/move-target/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/move-target/{id}/`

Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.

<h3 id="get-move-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-move-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MoveTargetDetail](#schemamovetargetdetail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="pokéapi-encounters">encounters</h1>

## List encounter methods

<a id="opIdencounter_method_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/encounter-method/ \
  -H 'Accept: application/json'
```

`GET /api/v2/encounter-method/`

Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.

<h3 id="list-encounter-methods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-encounter-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedEncounterMethodSummaryList](#schemapaginatedencountermethodsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get encounter method

<a id="opIdencounter_method_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/encounter-method/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/encounter-method/{id}/`

Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.

<h3 id="get-encounter-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "order": -2147483648,
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-encounter-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EncounterMethodDetail](#schemaencountermethoddetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List encounter conditions

<a id="opIdencounter_condition_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/encounter-condition/ \
  -H 'Accept: application/json'
```

`GET /api/v2/encounter-condition/`

Conditions which affect what pokemon might appear in the wild, e.g., day or night.

<h3 id="list-encounter-conditions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-encounter-conditions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedEncounterConditionSummaryList](#schemapaginatedencounterconditionsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get encounter condition

<a id="opIdencounter_condition_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/encounter-condition/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/encounter-condition/{id}/`

Conditions which affect what pokemon might appear in the wild, e.g., day or night.

<h3 id="get-encounter-condition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "values": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-encounter-condition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EncounterConditionDetail](#schemaencounterconditiondetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List encounter condition values

<a id="opIdencounter_condition_value_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/encounter-condition-value/ \
  -H 'Accept: application/json'
```

`GET /api/v2/encounter-condition-value/`

Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.

<h3 id="list-encounter-condition-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-encounter-condition-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedEncounterConditionValueSummaryList](#schemapaginatedencounterconditionvaluesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get encounter condition value

<a id="opIdencounter_condition_value_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/encounter-condition-value/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/encounter-condition-value/{id}/`

Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.

<h3 id="get-encounter-condition-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "condition": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-encounter-condition-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EncounterConditionValueDetail](#schemaencounterconditionvaluedetail)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pokemon encounter

<a id="opIdpokemon_encounters_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokemon/string/encounters \
  -H 'Accept: application/json'
```

`GET /api/v2/pokemon/{pokemon_id}/encounters`

Handles Pokemon Encounters as a sub-resource.

<h3 id="get-pokemon-encounter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pokemon_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "location_area": {
      "name": "string",
      "url": "http://example.com"
    },
    "version_details": [
      {
        "version": {
          "name": "string",
          "url": "http://example.com"
        },
        "max_chance": 0,
        "encounter_details": [
          {
            "chance": 0,
            "condition_values": [
              {
                "name": "string",
                "url": "http://example.com"
              }
            ],
            "max_level": 0,
            "method": {
              "name": "string",
              "url": "http://example.com"
            },
            "min_level": 0
          }
        ]
      }
    ]
  }
]
```

<h3 id="get-pokemon-encounter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-pokemon-encounter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PokemonEncounterResponse](#schemapokemonencounterresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="pokéapi-games">games</h1>

The Pokémon games are all video games in the Pokémon franchise.

<a href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_games">Find more info here</a>

## List genrations

<a id="opIdgeneration_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/generation/ \
  -H 'Accept: application/json'
```

`GET /api/v2/generation/`

A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.

<h3 id="list-genrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-genrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedGenerationSummaryList](#schemapaginatedgenerationsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get genration

<a id="opIdgeneration_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/generation/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/generation/{id}/`

A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.

<h3 id="get-genration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "abilities": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "main_region": {
    "name": "string",
    "url": "http://example.com"
  },
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "types": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "version_groups": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-genration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GenerationDetail](#schemagenerationdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List pokedex

<a id="opIdpokedex_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokedex/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokedex/`

A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.

<h3 id="list-pokedex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-pokedex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedPokedexSummaryList](#schemapaginatedpokedexsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pokedex

<a id="opIdpokedex_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/pokedex/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/pokedex/{id}/`

A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.

<h3 id="get-pokedex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "is_main_series": true,
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_entries": [
    {
      "entry_number": 0,
      "pokemon_species": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "region": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_groups": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-pokedex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PokedexDetail](#schemapokedexdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List versions

<a id="opIdversion_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/version/ \
  -H 'Accept: application/json'
```

`GET /api/v2/version/`

Versions of the games, e.g., Red, Blue or Yellow.

<h3 id="list-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedVersionSummaryList](#schemapaginatedversionsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get version

<a id="opIdversion_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/version/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/version/{id}/`

Versions of the games, e.g., Red, Blue or Yellow.

<h3 id="get-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="get-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VersionDetail](#schemaversiondetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List version groups

<a id="opIdversion_group_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/version-group/ \
  -H 'Accept: application/json'
```

`GET /api/v2/version-group/`

Version groups categorize highly similar versions of the games.

<h3 id="list-version-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-version-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedVersionGroupSummaryList](#schemapaginatedversiongroupsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get version group

<a id="opIdversion_group_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/version-group/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/version-group/{id}/`

Version groups categorize highly similar versions of the games.

<h3 id="get-version-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "order": -2147483648,
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "move_learn_methods": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "pokedexes": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "regions": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "versions": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-version-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VersionGroupDetail](#schemaversiongroupdetail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="pokéapi-utility">utility</h1>

## Get API metadata

<a id="opIdmeta_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/meta/ \
  -H 'Accept: application/json'
```

`GET /api/v2/meta/`

Returns metadata about the current deployed version of the API, including the git commit hash, deploy date, and tag (if any).

> Example responses

> 200 Response

```json
{
  "deploy_date": "string",
  "hash": "string",
  "tag": "string"
}
```

<h3 id="get-api-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PokeapiMetaResponse](#schemapokeapimetaresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List languages

<a id="opIdlanguage_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/language/ \
  -H 'Accept: application/json'
```

`GET /api/v2/language/`

Languages for translations of API resource information.

<h3 id="list-languages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedLanguageSummaryList](#schemapaginatedlanguagesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get language

<a id="opIdlanguage_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/language/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/language/{id}/`

Languages for translations of API resource information.

<h3 id="get-language-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "official": true,
  "iso639": "string",
  "iso3166": "st",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LanguageDetail](#schemalanguagedetail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="pokéapi-contests">contests</h1>

## List contest types

<a id="opIdcontest_type_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/contest-type/ \
  -H 'Accept: application/json'
```

`GET /api/v2/contest-type/`

Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.

<h3 id="list-contest-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-contest-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedContestTypeSummaryList](#schemapaginatedcontesttypesummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get contest type

<a id="opIdcontest_type_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/contest-type/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/contest-type/{id}/`

Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.

<h3 id="get-contest-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "berry_flavor": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "color": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-contest-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ContestTypeDetail](#schemacontesttypedetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List contest effects

<a id="opIdcontest_effect_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/contest-effect/ \
  -H 'Accept: application/json'
```

`GET /api/v2/contest-effect/`

Contest effects refer to the effects of moves when used in contests.

<h3 id="list-contest-effects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-contest-effects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedContestEffectSummaryList](#schemapaginatedcontesteffectsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get contest effect

<a id="opIdcontest_effect_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/contest-effect/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/contest-effect/{id}/`

Contest effects refer to the effects of moves when used in contests.

<h3 id="get-contest-effect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "appeal": -2147483648,
  "jam": -2147483648,
  "effect_entries": [
    {
      "effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="get-contest-effect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ContestEffectDetail](#schemacontesteffectdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## List super contest effects

<a id="opIdsuper_contest_effect_list"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/super-contest-effect/ \
  -H 'Accept: application/json'
```

`GET /api/v2/super-contest-effect/`

Super contest effects refer to the effects of moves when used in super contests.

<h3 id="list-super-contest-effects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|q|query|string|false|> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)<br>Case-insensitive query applied on the `name` property. |

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="list-super-contest-effects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedSuperContestEffectSummaryList](#schemapaginatedsupercontesteffectsummarylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get super contest effect

<a id="opIdsuper_contest_effect_retrieve"></a>

> Code samples

```bash
curl https://pokeapi.co/api/v2/super-contest-effect/string/ \
  -H 'Accept: application/json'
```

`GET /api/v2/super-contest-effect/{id}/`

Super contest effects refer to the effects of moves when used in super contests.

<h3 id="get-super-contest-effect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|This parameter can be a string or an integer.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "appeal": -2147483648,
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-super-contest-effect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SuperContestEffectDetail](#schemasupercontesteffectdetail)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AbilityChange">AbilityChange</h2>
<!-- backwards compatibility -->
<a id="schemaabilitychange"></a>
<a id="schema_AbilityChange"></a>
<a id="tocSabilitychange"></a>
<a id="tocsabilitychange"></a>

```json
{
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "effect_entries": [
    {
      "effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|
|effect_entries|[[AbilityChangeEffectText](#schemaabilitychangeeffecttext)]|true|read-only|none|

<h2 id="tocS_AbilityChangeEffectText">AbilityChangeEffectText</h2>
<!-- backwards compatibility -->
<a id="schemaabilitychangeeffecttext"></a>
<a id="schema_AbilityChangeEffectText"></a>
<a id="tocSabilitychangeeffecttext"></a>
<a id="tocsabilitychangeeffecttext"></a>

```json
{
  "effect": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effect|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_AbilityDetail">AbilityDetail</h2>
<!-- backwards compatibility -->
<a id="schemaabilitydetail"></a>
<a id="schema_AbilityDetail"></a>
<a id="tocSabilitydetail"></a>
<a id="tocsabilitydetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "is_main_series": true,
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "effect_entries": [
    {
      "effect": "string",
      "short_effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "effect_changes": [
    {
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      },
      "effect_entries": [
        {
          "effect": "string",
          "language": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon": [
    {
      "is_hidden": true,
      "slot": -2147483648,
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|is_main_series|boolean|false|none|none|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|
|names|[[AbilityName](#schemaabilityname)]|true|read-only|none|
|effect_entries|[[AbilityEffectText](#schemaabilityeffecttext)]|true|read-only|none|
|effect_changes|[[AbilityChange](#schemaabilitychange)]|true|read-only|none|
|flavor_text_entries|[[AbilityFlavorText](#schemaabilityflavortext)]|true|read-only|none|
|pokemon|[[AbilityPokemonDetail](#schemaabilitypokemondetail)]|true|read-only|none|

<h2 id="tocS_AbilityEffectText">AbilityEffectText</h2>
<!-- backwards compatibility -->
<a id="schemaabilityeffecttext"></a>
<a id="schema_AbilityEffectText"></a>
<a id="tocSabilityeffecttext"></a>
<a id="tocsabilityeffecttext"></a>

```json
{
  "effect": "string",
  "short_effect": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effect|string|true|none|none|
|short_effect|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_AbilityFlavorText">AbilityFlavorText</h2>
<!-- backwards compatibility -->
<a id="schemaabilityflavortext"></a>
<a id="schema_AbilityFlavorText"></a>
<a id="tocSabilityflavortext"></a>
<a id="tocsabilityflavortext"></a>

```json
{
  "flavor_text": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flavor_text|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|

<h2 id="tocS_AbilityName">AbilityName</h2>
<!-- backwards compatibility -->
<a id="schemaabilityname"></a>
<a id="schema_AbilityName"></a>
<a id="tocSabilityname"></a>
<a id="tocsabilityname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_AbilityPokemonDetail">AbilityPokemonDetail</h2>
<!-- backwards compatibility -->
<a id="schemaabilitypokemondetail"></a>
<a id="schema_AbilityPokemonDetail"></a>
<a id="tocSabilitypokemondetail"></a>
<a id="tocsabilitypokemondetail"></a>

```json
{
  "is_hidden": true,
  "slot": -2147483648,
  "pokemon": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_hidden|boolean|false|none|none|
|slot|integer|true|none|none|
|pokemon|[PokemonSummary](#schemapokemonsummary)|true|none|none|

<h2 id="tocS_AbilitySummary">AbilitySummary</h2>
<!-- backwards compatibility -->
<a id="schemaabilitysummary"></a>
<a id="schema_AbilitySummary"></a>
<a id="tocSabilitysummary"></a>
<a id="tocsabilitysummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_BerryDetail">BerryDetail</h2>
<!-- backwards compatibility -->
<a id="schemaberrydetail"></a>
<a id="schema_BerryDetail"></a>
<a id="tocSberrydetail"></a>
<a id="tocsberrydetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "growth_time": -2147483648,
  "max_harvest": -2147483648,
  "natural_gift_power": -2147483648,
  "size": -2147483648,
  "smoothness": -2147483648,
  "soil_dryness": -2147483648,
  "firmness": {
    "name": "string",
    "url": "http://example.com"
  },
  "flavors": [
    {
      "potency": -2147483648,
      "flavor": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "item": {
    "name": "string",
    "url": "http://example.com"
  },
  "natural_gift_type": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|growth_time|integer \| null|false|none|none|
|max_harvest|integer \| null|false|none|none|
|natural_gift_power|integer \| null|false|none|none|
|size|integer \| null|false|none|none|
|smoothness|integer \| null|false|none|none|
|soil_dryness|integer \| null|false|none|none|
|firmness|[BerryFirmnessSummary](#schemaberryfirmnesssummary)|true|none|none|
|flavors|[[BerryFlavorMap](#schemaberryflavormap)]|true|read-only|none|
|item|[ItemSummary](#schemaitemsummary)|true|none|none|
|natural_gift_type|[TypeSummary](#schematypesummary)|true|none|none|

<h2 id="tocS_BerryFirmnessDetail">BerryFirmnessDetail</h2>
<!-- backwards compatibility -->
<a id="schemaberryfirmnessdetail"></a>
<a id="schema_BerryFirmnessDetail"></a>
<a id="tocSberryfirmnessdetail"></a>
<a id="tocsberryfirmnessdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "berries": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|berries|[[BerrySummary](#schemaberrysummary)]|true|read-only|none|
|names|[[BerryFirmnessName](#schemaberryfirmnessname)]|true|read-only|none|

<h2 id="tocS_BerryFirmnessName">BerryFirmnessName</h2>
<!-- backwards compatibility -->
<a id="schemaberryfirmnessname"></a>
<a id="schema_BerryFirmnessName"></a>
<a id="tocSberryfirmnessname"></a>
<a id="tocsberryfirmnessname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_BerryFirmnessSummary">BerryFirmnessSummary</h2>
<!-- backwards compatibility -->
<a id="schemaberryfirmnesssummary"></a>
<a id="schema_BerryFirmnessSummary"></a>
<a id="tocSberryfirmnesssummary"></a>
<a id="tocsberryfirmnesssummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_BerryFlavorBerryMap">BerryFlavorBerryMap</h2>
<!-- backwards compatibility -->
<a id="schemaberryflavorberrymap"></a>
<a id="schema_BerryFlavorBerryMap"></a>
<a id="tocSberryflavorberrymap"></a>
<a id="tocsberryflavorberrymap"></a>

```json
{
  "potency": -2147483648,
  "berry": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|potency|integer|true|none|none|
|berry|[BerrySummary](#schemaberrysummary)|true|none|none|

<h2 id="tocS_BerryFlavorDetail">BerryFlavorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaberryflavordetail"></a>
<a id="schema_BerryFlavorDetail"></a>
<a id="tocSberryflavordetail"></a>
<a id="tocsberryflavordetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "berries": [
    {
      "potency": -2147483648,
      "berry": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "contest_type": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|berries|[[BerryFlavorBerryMap](#schemaberryflavorberrymap)]|true|read-only|none|
|contest_type|[ContestTypeSummary](#schemacontesttypesummary)|true|none|none|
|names|[[BerryFlavorName](#schemaberryflavorname)]|true|read-only|none|

<h2 id="tocS_BerryFlavorMap">BerryFlavorMap</h2>
<!-- backwards compatibility -->
<a id="schemaberryflavormap"></a>
<a id="schema_BerryFlavorMap"></a>
<a id="tocSberryflavormap"></a>
<a id="tocsberryflavormap"></a>

```json
{
  "potency": -2147483648,
  "flavor": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|potency|integer|true|none|none|
|flavor|[BerryFlavorSummary](#schemaberryflavorsummary)|true|none|none|

<h2 id="tocS_BerryFlavorName">BerryFlavorName</h2>
<!-- backwards compatibility -->
<a id="schemaberryflavorname"></a>
<a id="schema_BerryFlavorName"></a>
<a id="tocSberryflavorname"></a>
<a id="tocsberryflavorname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_BerryFlavorSummary">BerryFlavorSummary</h2>
<!-- backwards compatibility -->
<a id="schemaberryflavorsummary"></a>
<a id="schema_BerryFlavorSummary"></a>
<a id="tocSberryflavorsummary"></a>
<a id="tocsberryflavorsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_BerrySummary">BerrySummary</h2>
<!-- backwards compatibility -->
<a id="schemaberrysummary"></a>
<a id="schema_BerrySummary"></a>
<a id="tocSberrysummary"></a>
<a id="tocsberrysummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_CharacteristicDescription">CharacteristicDescription</h2>
<!-- backwards compatibility -->
<a id="schemacharacteristicdescription"></a>
<a id="schema_CharacteristicDescription"></a>
<a id="tocScharacteristicdescription"></a>
<a id="tocscharacteristicdescription"></a>

```json
{
  "description": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_CharacteristicDetail">CharacteristicDetail</h2>
<!-- backwards compatibility -->
<a id="schemacharacteristicdetail"></a>
<a id="schema_CharacteristicDetail"></a>
<a id="tocScharacteristicdetail"></a>
<a id="tocscharacteristicdetail"></a>

```json
{
  "id": 0,
  "gene_modulo": 0,
  "possible_values": [
    0
  ],
  "highest_stat": {
    "name": "string",
    "url": "http://example.com"
  },
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|gene_modulo|integer|true|none|none|
|possible_values|[integer]|true|read-only|none|
|highest_stat|[StatSummary](#schemastatsummary)|true|none|none|
|descriptions|[[CharacteristicDescription](#schemacharacteristicdescription)]|true|read-only|none|

<h2 id="tocS_CharacteristicSummary">CharacteristicSummary</h2>
<!-- backwards compatibility -->
<a id="schemacharacteristicsummary"></a>
<a id="schema_CharacteristicSummary"></a>
<a id="tocScharacteristicsummary"></a>
<a id="tocscharacteristicsummary"></a>

```json
{
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_ContestEffectDetail">ContestEffectDetail</h2>
<!-- backwards compatibility -->
<a id="schemacontesteffectdetail"></a>
<a id="schema_ContestEffectDetail"></a>
<a id="tocScontesteffectdetail"></a>
<a id="tocscontesteffectdetail"></a>

```json
{
  "id": 0,
  "appeal": -2147483648,
  "jam": -2147483648,
  "effect_entries": [
    {
      "effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|appeal|integer|true|none|none|
|jam|integer|true|none|none|
|effect_entries|[[ContestEffectEffectText](#schemacontesteffecteffecttext)]|true|read-only|none|
|flavor_text_entries|[[ContestEffectFlavorText](#schemacontesteffectflavortext)]|true|read-only|none|

<h2 id="tocS_ContestEffectEffectText">ContestEffectEffectText</h2>
<!-- backwards compatibility -->
<a id="schemacontesteffecteffecttext"></a>
<a id="schema_ContestEffectEffectText"></a>
<a id="tocScontesteffecteffecttext"></a>
<a id="tocscontesteffecteffecttext"></a>

```json
{
  "effect": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effect|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ContestEffectFlavorText">ContestEffectFlavorText</h2>
<!-- backwards compatibility -->
<a id="schemacontesteffectflavortext"></a>
<a id="schema_ContestEffectFlavorText"></a>
<a id="tocScontesteffectflavortext"></a>
<a id="tocscontesteffectflavortext"></a>

```json
{
  "flavor_text": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flavor_text|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ContestEffectSummary">ContestEffectSummary</h2>
<!-- backwards compatibility -->
<a id="schemacontesteffectsummary"></a>
<a id="schema_ContestEffectSummary"></a>
<a id="tocScontesteffectsummary"></a>
<a id="tocscontesteffectsummary"></a>

```json
{
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_ContestTypeDetail">ContestTypeDetail</h2>
<!-- backwards compatibility -->
<a id="schemacontesttypedetail"></a>
<a id="schema_ContestTypeDetail"></a>
<a id="tocScontesttypedetail"></a>
<a id="tocscontesttypedetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "berry_flavor": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "color": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|berry_flavor|object|true|read-only|none|
|names|[[ContestTypeName](#schemacontesttypename)]|true|read-only|none|

<h2 id="tocS_ContestTypeName">ContestTypeName</h2>
<!-- backwards compatibility -->
<a id="schemacontesttypename"></a>
<a id="schema_ContestTypeName"></a>
<a id="tocScontesttypename"></a>
<a id="tocscontesttypename"></a>

```json
{
  "name": "string",
  "color": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|color|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ContestTypeSummary">ContestTypeSummary</h2>
<!-- backwards compatibility -->
<a id="schemacontesttypesummary"></a>
<a id="schema_ContestTypeSummary"></a>
<a id="tocScontesttypesummary"></a>
<a id="tocscontesttypesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_CurrencyDetail">CurrencyDetail</h2>
<!-- backwards compatibility -->
<a id="schemacurrencydetail"></a>
<a id="schema_CurrencyDetail"></a>
<a id="tocScurrencydetail"></a>
<a id="tocscurrencydetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|names|[[CurrencyName](#schemacurrencyname)]|true|read-only|none|

<h2 id="tocS_CurrencyName">CurrencyName</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyname"></a>
<a id="schema_CurrencyName"></a>
<a id="tocScurrencyname"></a>
<a id="tocscurrencyname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_CurrencySummary">CurrencySummary</h2>
<!-- backwards compatibility -->
<a id="schemacurrencysummary"></a>
<a id="schema_CurrencySummary"></a>
<a id="tocScurrencysummary"></a>
<a id="tocscurrencysummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_EggGroupDetail">EggGroupDetail</h2>
<!-- backwards compatibility -->
<a id="schemaegggroupdetail"></a>
<a id="schema_EggGroupDetail"></a>
<a id="tocSegggroupdetail"></a>
<a id="tocsegggroupdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|names|[[EggGroupName](#schemaegggroupname)]|true|read-only|none|
|pokemon_species|[[PokemonSpeciesSummary](#schemapokemonspeciessummary)]|true|read-only|none|

<h2 id="tocS_EggGroupName">EggGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaegggroupname"></a>
<a id="schema_EggGroupName"></a>
<a id="tocSegggroupname"></a>
<a id="tocsegggroupname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_EggGroupSummary">EggGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemaegggroupsummary"></a>
<a id="schema_EggGroupSummary"></a>
<a id="tocSegggroupsummary"></a>
<a id="tocsegggroupsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_EncounterConditionDetail">EncounterConditionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaencounterconditiondetail"></a>
<a id="schema_EncounterConditionDetail"></a>
<a id="tocSencounterconditiondetail"></a>
<a id="tocsencounterconditiondetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "values": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|values|[[EncounterConditionValueSummary](#schemaencounterconditionvaluesummary)]|true|read-only|none|
|names|[[EncounterConditionName](#schemaencounterconditionname)]|true|read-only|none|

<h2 id="tocS_EncounterConditionName">EncounterConditionName</h2>
<!-- backwards compatibility -->
<a id="schemaencounterconditionname"></a>
<a id="schema_EncounterConditionName"></a>
<a id="tocSencounterconditionname"></a>
<a id="tocsencounterconditionname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_EncounterConditionSummary">EncounterConditionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaencounterconditionsummary"></a>
<a id="schema_EncounterConditionSummary"></a>
<a id="tocSencounterconditionsummary"></a>
<a id="tocsencounterconditionsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_EncounterConditionValueDetail">EncounterConditionValueDetail</h2>
<!-- backwards compatibility -->
<a id="schemaencounterconditionvaluedetail"></a>
<a id="schema_EncounterConditionValueDetail"></a>
<a id="tocSencounterconditionvaluedetail"></a>
<a id="tocsencounterconditionvaluedetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "condition": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|condition|[EncounterConditionSummary](#schemaencounterconditionsummary)|true|none|none|
|names|[[EncounterConditionValueName](#schemaencounterconditionvaluename)]|true|read-only|none|

<h2 id="tocS_EncounterConditionValueName">EncounterConditionValueName</h2>
<!-- backwards compatibility -->
<a id="schemaencounterconditionvaluename"></a>
<a id="schema_EncounterConditionValueName"></a>
<a id="tocSencounterconditionvaluename"></a>
<a id="tocsencounterconditionvaluename"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_EncounterConditionValueSummary">EncounterConditionValueSummary</h2>
<!-- backwards compatibility -->
<a id="schemaencounterconditionvaluesummary"></a>
<a id="schema_EncounterConditionValueSummary"></a>
<a id="tocSencounterconditionvaluesummary"></a>
<a id="tocsencounterconditionvaluesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_EncounterMethodDetail">EncounterMethodDetail</h2>
<!-- backwards compatibility -->
<a id="schemaencountermethoddetail"></a>
<a id="schema_EncounterMethodDetail"></a>
<a id="tocSencountermethoddetail"></a>
<a id="tocsencountermethoddetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "order": -2147483648,
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|order|integer \| null|false|none|none|
|names|[[EncounterMethodName](#schemaencountermethodname)]|true|read-only|none|

<h2 id="tocS_EncounterMethodName">EncounterMethodName</h2>
<!-- backwards compatibility -->
<a id="schemaencountermethodname"></a>
<a id="schema_EncounterMethodName"></a>
<a id="tocSencountermethodname"></a>
<a id="tocsencountermethodname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_EncounterMethodSummary">EncounterMethodSummary</h2>
<!-- backwards compatibility -->
<a id="schemaencountermethodsummary"></a>
<a id="schema_EncounterMethodSummary"></a>
<a id="tocSencountermethodsummary"></a>
<a id="tocsencountermethodsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_EncounterPokemonDetail">EncounterPokemonDetail</h2>
<!-- backwards compatibility -->
<a id="schemaencounterpokemondetail"></a>
<a id="schema_EncounterPokemonDetail"></a>
<a id="tocSencounterpokemondetail"></a>
<a id="tocsencounterpokemondetail"></a>

```json
{
  "min_perfect_ivs": -2147483648,
  "always_shiny": true,
  "never_shiny": true,
  "is_alpha": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min_perfect_ivs|integer \| null|false|none|none|
|always_shiny|boolean|false|none|none|
|never_shiny|boolean|false|none|none|
|is_alpha|boolean|false|none|none|

<h2 id="tocS_EvolutionChainDetail">EvolutionChainDetail</h2>
<!-- backwards compatibility -->
<a id="schemaevolutionchaindetail"></a>
<a id="schema_EvolutionChainDetail"></a>
<a id="tocSevolutionchaindetail"></a>
<a id="tocsevolutionchaindetail"></a>

```json
{
  "id": 0,
  "baby_trigger_item": {
    "name": "string",
    "url": "http://example.com"
  },
  "chain": {
    "is_baby": true,
    "species": {
      "name": "string",
      "url": "http://example.com"
    },
    "evolution_details": [
      {
        "version_group": {
          "name": "string",
          "url": "http://example.com"
        },
        "is_default": true,
        "item": {
          "name": "string",
          "url": "http://example.com"
        },
        "trigger": {
          "name": "string",
          "url": "http://example.com"
        },
        "gender": 0,
        "held_item": {
          "name": "string",
          "url": "http://example.com"
        },
        "known_move": {
          "name": "string",
          "url": "http://example.com"
        },
        "known_move_type": {
          "name": "string",
          "url": "http://example.com"
        },
        "location": {
          "name": "string",
          "url": "http://example.com"
        },
        "min_level": -2147483648,
        "min_happiness": -2147483648,
        "min_beauty": -2147483648,
        "min_affection": -2147483648,
        "near_special_rock": true,
        "needs_multiplayer": true,
        "needs_overworld_rain": true,
        "party_species": {
          "name": "string",
          "url": "http://example.com"
        },
        "party_type": {
          "name": "string",
          "url": "http://example.com"
        },
        "relative_physical_stats": -2147483648,
        "time_of_day": "string",
        "trade_species": {
          "name": "string",
          "url": "http://example.com"
        },
        "turn_upside_down": true,
        "region": {
          "name": "string",
          "url": "http://example.com"
        },
        "required_pokemon_form": {
          "name": "string",
          "url": "http://example.com"
        },
        "evolved_pokemon_form": {
          "name": "string",
          "url": "http://example.com"
        },
        "used_move": {
          "name": "string",
          "url": "http://example.com"
        },
        "min_move_count": -2147483648,
        "min_steps": -2147483648,
        "min_damage_taken": -2147483648,
        "allowed_natures": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "condition_expression": {
          "expression": "string",
          "percentage_chance": 0,
          "variables": [
            {
              "name": "string",
              "url": "http://example.com"
            }
          ]
        }
      }
    ],
    "evolves_to": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|baby_trigger_item|[ItemSummary](#schemaitemsummary)|true|none|none|
|chain|object|true|read-only|none|

<h2 id="tocS_EvolutionChainLink">EvolutionChainLink</h2>
<!-- backwards compatibility -->
<a id="schemaevolutionchainlink"></a>
<a id="schema_EvolutionChainLink"></a>
<a id="tocSevolutionchainlink"></a>
<a id="tocsevolutionchainlink"></a>

```json
{
  "is_baby": true,
  "species": {
    "name": "string",
    "url": "http://example.com"
  },
  "evolution_details": [
    {
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      },
      "is_default": true,
      "item": {
        "name": "string",
        "url": "http://example.com"
      },
      "trigger": {
        "name": "string",
        "url": "http://example.com"
      },
      "gender": 0,
      "held_item": {
        "name": "string",
        "url": "http://example.com"
      },
      "known_move": {
        "name": "string",
        "url": "http://example.com"
      },
      "known_move_type": {
        "name": "string",
        "url": "http://example.com"
      },
      "location": {
        "name": "string",
        "url": "http://example.com"
      },
      "min_level": -2147483648,
      "min_happiness": -2147483648,
      "min_beauty": -2147483648,
      "min_affection": -2147483648,
      "near_special_rock": true,
      "needs_multiplayer": true,
      "needs_overworld_rain": true,
      "party_species": {
        "name": "string",
        "url": "http://example.com"
      },
      "party_type": {
        "name": "string",
        "url": "http://example.com"
      },
      "relative_physical_stats": -2147483648,
      "time_of_day": "string",
      "trade_species": {
        "name": "string",
        "url": "http://example.com"
      },
      "turn_upside_down": true,
      "region": {
        "name": "string",
        "url": "http://example.com"
      },
      "required_pokemon_form": {
        "name": "string",
        "url": "http://example.com"
      },
      "evolved_pokemon_form": {
        "name": "string",
        "url": "http://example.com"
      },
      "used_move": {
        "name": "string",
        "url": "http://example.com"
      },
      "min_move_count": -2147483648,
      "min_steps": -2147483648,
      "min_damage_taken": -2147483648,
      "allowed_natures": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "condition_expression": {
        "expression": "string",
        "percentage_chance": 0,
        "variables": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ]
      }
    }
  ],
  "evolves_to": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_baby|boolean|true|none|none|
|species|[PokemonSpeciesSummary](#schemapokemonspeciessummary)|true|none|none|
|evolution_details|[[PokemonEvolution](#schemapokemonevolution)]|true|none|none|
|evolves_to|[object]|true|none|none|

<h2 id="tocS_EvolutionChainSummary">EvolutionChainSummary</h2>
<!-- backwards compatibility -->
<a id="schemaevolutionchainsummary"></a>
<a id="schema_EvolutionChainSummary"></a>
<a id="tocSevolutionchainsummary"></a>
<a id="tocsevolutionchainsummary"></a>

```json
{
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_EvolutionConditionExpression">EvolutionConditionExpression</h2>
<!-- backwards compatibility -->
<a id="schemaevolutionconditionexpression"></a>
<a id="schema_EvolutionConditionExpression"></a>
<a id="tocSevolutionconditionexpression"></a>
<a id="tocsevolutionconditionexpression"></a>

```json
{
  "expression": "string",
  "percentage_chance": 0,
  "variables": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|string|true|none|Evaluatable RPN condition expression using evolution variables (e.g. 'EC 100 % 0 ==')|
|percentage_chance|number \| null(double)|true|none|Percentage chance of evolution under this condition (0-100)|
|variables|[[EvolutionVariableSummary](#schemaevolutionvariablesummary)]|true|none|Evolution variables referenced in the expression|

<h2 id="tocS_EvolutionTriggerDetail">EvolutionTriggerDetail</h2>
<!-- backwards compatibility -->
<a id="schemaevolutiontriggerdetail"></a>
<a id="schema_EvolutionTriggerDetail"></a>
<a id="tocSevolutiontriggerdetail"></a>
<a id="tocsevolutiontriggerdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|names|[[EvolutionTriggerName](#schemaevolutiontriggername)]|true|read-only|none|
|pokemon_species|[[PokemonSpeciesSummary](#schemapokemonspeciessummary)]|true|read-only|none|

<h2 id="tocS_EvolutionTriggerName">EvolutionTriggerName</h2>
<!-- backwards compatibility -->
<a id="schemaevolutiontriggername"></a>
<a id="schema_EvolutionTriggerName"></a>
<a id="tocSevolutiontriggername"></a>
<a id="tocsevolutiontriggername"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_EvolutionTriggerSummary">EvolutionTriggerSummary</h2>
<!-- backwards compatibility -->
<a id="schemaevolutiontriggersummary"></a>
<a id="schema_EvolutionTriggerSummary"></a>
<a id="tocSevolutiontriggersummary"></a>
<a id="tocsevolutiontriggersummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_EvolutionVariableDescription">EvolutionVariableDescription</h2>
<!-- backwards compatibility -->
<a id="schemaevolutionvariabledescription"></a>
<a id="schema_EvolutionVariableDescription"></a>
<a id="tocSevolutionvariabledescription"></a>
<a id="tocsevolutionvariabledescription"></a>

```json
{
  "description": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_EvolutionVariableDetail">EvolutionVariableDetail</h2>
<!-- backwards compatibility -->
<a id="schemaevolutionvariabledetail"></a>
<a id="schema_EvolutionVariableDetail"></a>
<a id="tocSevolutionvariabledetail"></a>
<a id="tocsevolutionvariabledetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "symbol": "string",
  "data_type": "string",
  "source": "string",
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|symbol|string|true|none|none|
|data_type|string|false|none|none|
|source|string|false|none|Where the value comes from: 'pokemon' for data stored on the Pokemon (e.g. EC, PID), 'player-input' for an action taken by the player while evolving (e.g. SPIN_DIR, SPIN_SEC)|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|
|names|[[EvolutionVariableName](#schemaevolutionvariablename)]|true|read-only|none|
|descriptions|[[EvolutionVariableDescription](#schemaevolutionvariabledescription)]|true|read-only|none|

<h2 id="tocS_EvolutionVariableName">EvolutionVariableName</h2>
<!-- backwards compatibility -->
<a id="schemaevolutionvariablename"></a>
<a id="schema_EvolutionVariableName"></a>
<a id="tocSevolutionvariablename"></a>
<a id="tocsevolutionvariablename"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_EvolutionVariableSummary">EvolutionVariableSummary</h2>
<!-- backwards compatibility -->
<a id="schemaevolutionvariablesummary"></a>
<a id="schema_EvolutionVariableSummary"></a>
<a id="tocSevolutionvariablesummary"></a>
<a id="tocsevolutionvariablesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_Experience">Experience</h2>
<!-- backwards compatibility -->
<a id="schemaexperience"></a>
<a id="schema_Experience"></a>
<a id="tocSexperience"></a>
<a id="tocsexperience"></a>

```json
{
  "level": -2147483648,
  "experience": -2147483648
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|integer|true|none|none|
|experience|integer|true|none|none|

<h2 id="tocS_GenderDetail">GenderDetail</h2>
<!-- backwards compatibility -->
<a id="schemagenderdetail"></a>
<a id="schema_GenderDetail"></a>
<a id="tocSgenderdetail"></a>
<a id="tocsgenderdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "pokemon_species_details": [
    {
      "rate": 0,
      "pokemon_species": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "required_for_evolution": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|pokemon_species_details|[[GenderPokemonSpecies](#schemagenderpokemonspecies)]|true|read-only|none|
|required_for_evolution|[[PokemonSpeciesSummary](#schemapokemonspeciessummary)]|true|read-only|none|

<h2 id="tocS_GenderPokemonSpecies">GenderPokemonSpecies</h2>
<!-- backwards compatibility -->
<a id="schemagenderpokemonspecies"></a>
<a id="schema_GenderPokemonSpecies"></a>
<a id="tocSgenderpokemonspecies"></a>
<a id="tocsgenderpokemonspecies"></a>

```json
{
  "rate": 0,
  "pokemon_species": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|integer|true|none|none|
|pokemon_species|[PokemonSpeciesSummary](#schemapokemonspeciessummary)|true|none|none|

<h2 id="tocS_GenderSummary">GenderSummary</h2>
<!-- backwards compatibility -->
<a id="schemagendersummary"></a>
<a id="schema_GenderSummary"></a>
<a id="tocSgendersummary"></a>
<a id="tocsgendersummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_GenerationDetail">GenerationDetail</h2>
<!-- backwards compatibility -->
<a id="schemagenerationdetail"></a>
<a id="schema_GenerationDetail"></a>
<a id="tocSgenerationdetail"></a>
<a id="tocsgenerationdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "abilities": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "main_region": {
    "name": "string",
    "url": "http://example.com"
  },
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "types": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "version_groups": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|abilities|[[AbilitySummary](#schemaabilitysummary)]|true|read-only|none|
|main_region|[RegionSummary](#schemaregionsummary)|true|none|none|
|moves|[[MoveSummary](#schemamovesummary)]|true|read-only|none|
|names|[[GenerationName](#schemagenerationname)]|true|read-only|none|
|pokemon_species|[[PokemonSpeciesSummary](#schemapokemonspeciessummary)]|true|read-only|none|
|types|[[TypeSummary](#schematypesummary)]|true|read-only|none|
|version_groups|[[VersionGroupSummary](#schemaversiongroupsummary)]|true|read-only|none|

<h2 id="tocS_GenerationName">GenerationName</h2>
<!-- backwards compatibility -->
<a id="schemagenerationname"></a>
<a id="schema_GenerationName"></a>
<a id="tocSgenerationname"></a>
<a id="tocsgenerationname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_GenerationSummary">GenerationSummary</h2>
<!-- backwards compatibility -->
<a id="schemagenerationsummary"></a>
<a id="schema_GenerationSummary"></a>
<a id="tocSgenerationsummary"></a>
<a id="tocsgenerationsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_GrowthRateDescription">GrowthRateDescription</h2>
<!-- backwards compatibility -->
<a id="schemagrowthratedescription"></a>
<a id="schema_GrowthRateDescription"></a>
<a id="tocSgrowthratedescription"></a>
<a id="tocsgrowthratedescription"></a>

```json
{
  "description": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_GrowthRateDetail">GrowthRateDetail</h2>
<!-- backwards compatibility -->
<a id="schemagrowthratedetail"></a>
<a id="schema_GrowthRateDetail"></a>
<a id="tocSgrowthratedetail"></a>
<a id="tocsgrowthratedetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "formula": "string",
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "levels": [
    {
      "level": -2147483648,
      "experience": -2147483648
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|formula|string|true|none|none|
|descriptions|[[GrowthRateDescription](#schemagrowthratedescription)]|true|read-only|none|
|levels|[[Experience](#schemaexperience)]|true|read-only|none|
|pokemon_species|[[PokemonSpeciesSummary](#schemapokemonspeciessummary)]|true|read-only|none|

<h2 id="tocS_GrowthRateSummary">GrowthRateSummary</h2>
<!-- backwards compatibility -->
<a id="schemagrowthratesummary"></a>
<a id="schema_GrowthRateSummary"></a>
<a id="tocSgrowthratesummary"></a>
<a id="tocsgrowthratesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_ItemAttributeDescription">ItemAttributeDescription</h2>
<!-- backwards compatibility -->
<a id="schemaitemattributedescription"></a>
<a id="schema_ItemAttributeDescription"></a>
<a id="tocSitemattributedescription"></a>
<a id="tocsitemattributedescription"></a>

```json
{
  "description": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ItemAttributeDetail">ItemAttributeDetail</h2>
<!-- backwards compatibility -->
<a id="schemaitemattributedetail"></a>
<a id="schema_ItemAttributeDetail"></a>
<a id="tocSitemattributedetail"></a>
<a id="tocsitemattributedetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "items": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|descriptions|[[ItemAttributeDescription](#schemaitemattributedescription)]|true|read-only|none|
|items|[[ItemSummary](#schemaitemsummary)]|true|read-only|none|
|names|[[ItemAttributeName](#schemaitemattributename)]|true|read-only|none|

<h2 id="tocS_ItemAttributeName">ItemAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaitemattributename"></a>
<a id="schema_ItemAttributeName"></a>
<a id="tocSitemattributename"></a>
<a id="tocsitemattributename"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ItemAttributeSummary">ItemAttributeSummary</h2>
<!-- backwards compatibility -->
<a id="schemaitemattributesummary"></a>
<a id="schema_ItemAttributeSummary"></a>
<a id="tocSitemattributesummary"></a>
<a id="tocsitemattributesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_ItemCategoryDetail">ItemCategoryDetail</h2>
<!-- backwards compatibility -->
<a id="schemaitemcategorydetail"></a>
<a id="schema_ItemCategoryDetail"></a>
<a id="tocSitemcategorydetail"></a>
<a id="tocsitemcategorydetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "items": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pocket": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|items|[[ItemSummary](#schemaitemsummary)]|true|read-only|none|
|names|[[ItemCategoryName](#schemaitemcategoryname)]|true|read-only|none|
|pocket|[ItemPocketSummary](#schemaitempocketsummary)|true|none|none|

<h2 id="tocS_ItemCategoryName">ItemCategoryName</h2>
<!-- backwards compatibility -->
<a id="schemaitemcategoryname"></a>
<a id="schema_ItemCategoryName"></a>
<a id="tocSitemcategoryname"></a>
<a id="tocsitemcategoryname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ItemCategorySummary">ItemCategorySummary</h2>
<!-- backwards compatibility -->
<a id="schemaitemcategorysummary"></a>
<a id="schema_ItemCategorySummary"></a>
<a id="tocSitemcategorysummary"></a>
<a id="tocsitemcategorysummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_ItemDetail">ItemDetail</h2>
<!-- backwards compatibility -->
<a id="schemaitemdetail"></a>
<a id="schema_ItemDetail"></a>
<a id="tocSitemdetail"></a>
<a id="tocsitemdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "fling_power": -2147483648,
  "fling_effect": {
    "name": "string",
    "url": "http://example.com"
  },
  "attributes": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "category": {
    "name": "string",
    "url": "http://example.com"
  },
  "effect_entries": [
    {
      "effect": "string",
      "short_effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "text": "string",
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      },
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "game_indices": [
    {
      "game_index": -2147483648,
      "generation": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "prices": [
    {
      "purchase_price": -2147483648,
      "sell_price": -2147483648,
      "currency": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "held_by_pokemon": [
    {
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_details": [
        {
          "rarity": 0,
          "version": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "sprites": {
    "default": "string"
  },
  "baby_trigger_for": {
    "url": "http://example.com"
  },
  "machines": [
    {
      "machine": {
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|fling_power|integer \| null|false|none|none|
|fling_effect|[ItemFlingEffectSummary](#schemaitemflingeffectsummary)|true|none|none|
|attributes|[[ItemAttributeSummary](#schemaitemattributesummary)]|true|read-only|none|
|category|[ItemCategorySummary](#schemaitemcategorysummary)|true|none|none|
|effect_entries|[[ItemEffectText](#schemaitemeffecttext)]|true|read-only|none|
|flavor_text_entries|[[ItemFlavorText](#schemaitemflavortext)]|true|read-only|none|
|game_indices|[[ItemGameIndex](#schemaitemgameindex)]|true|read-only|none|
|prices|[[ItemPrice](#schemaitemprice)]|true|read-only|none|
|names|[[ItemName](#schemaitemname)]|true|read-only|none|
|held_by_pokemon|[[PokemonHeldItem](#schemapokemonhelditem)]|true|read-only|none|
|sprites|object|true|read-only|none|
|baby_trigger_for|[EvolutionChainSummary](#schemaevolutionchainsummary) \| null|true|read-only|none|
|machines|[[ItemMachine](#schemaitemmachine)]|true|read-only|none|

<h2 id="tocS_ItemEffectText">ItemEffectText</h2>
<!-- backwards compatibility -->
<a id="schemaitemeffecttext"></a>
<a id="schema_ItemEffectText"></a>
<a id="tocSitemeffecttext"></a>
<a id="tocsitemeffecttext"></a>

```json
{
  "effect": "string",
  "short_effect": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effect|string|true|none|none|
|short_effect|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ItemFlavorText">ItemFlavorText</h2>
<!-- backwards compatibility -->
<a id="schemaitemflavortext"></a>
<a id="schema_ItemFlavorText"></a>
<a id="tocSitemflavortext"></a>
<a id="tocsitemflavortext"></a>

```json
{
  "text": "string",
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|none|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ItemFlingEffectDetail">ItemFlingEffectDetail</h2>
<!-- backwards compatibility -->
<a id="schemaitemflingeffectdetail"></a>
<a id="schema_ItemFlingEffectDetail"></a>
<a id="tocSitemflingeffectdetail"></a>
<a id="tocsitemflingeffectdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "effect_entries": [
    {
      "effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "items": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|effect_entries|[[ItemFlingEffectEffectText](#schemaitemflingeffecteffecttext)]|true|read-only|none|
|items|[[ItemSummary](#schemaitemsummary)]|true|read-only|none|

<h2 id="tocS_ItemFlingEffectEffectText">ItemFlingEffectEffectText</h2>
<!-- backwards compatibility -->
<a id="schemaitemflingeffecteffecttext"></a>
<a id="schema_ItemFlingEffectEffectText"></a>
<a id="tocSitemflingeffecteffecttext"></a>
<a id="tocsitemflingeffecteffecttext"></a>

```json
{
  "effect": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effect|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ItemFlingEffectSummary">ItemFlingEffectSummary</h2>
<!-- backwards compatibility -->
<a id="schemaitemflingeffectsummary"></a>
<a id="schema_ItemFlingEffectSummary"></a>
<a id="tocSitemflingeffectsummary"></a>
<a id="tocsitemflingeffectsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_ItemGameIndex">ItemGameIndex</h2>
<!-- backwards compatibility -->
<a id="schemaitemgameindex"></a>
<a id="schema_ItemGameIndex"></a>
<a id="tocSitemgameindex"></a>
<a id="tocsitemgameindex"></a>

```json
{
  "game_index": -2147483648,
  "generation": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|game_index|integer|true|none|none|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|

<h2 id="tocS_ItemMachine">ItemMachine</h2>
<!-- backwards compatibility -->
<a id="schemaitemmachine"></a>
<a id="schema_ItemMachine"></a>
<a id="tocSitemmachine"></a>
<a id="tocsitemmachine"></a>

```json
{
  "machine": {
    "url": "http://example.com"
  },
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|machine|[MachineSummary](#schemamachinesummary)|true|none|none|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|

<h2 id="tocS_ItemName">ItemName</h2>
<!-- backwards compatibility -->
<a id="schemaitemname"></a>
<a id="schema_ItemName"></a>
<a id="tocSitemname"></a>
<a id="tocsitemname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ItemPocketDetail">ItemPocketDetail</h2>
<!-- backwards compatibility -->
<a id="schemaitempocketdetail"></a>
<a id="schema_ItemPocketDetail"></a>
<a id="tocSitempocketdetail"></a>
<a id="tocsitempocketdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "categories": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|categories|[[ItemCategorySummary](#schemaitemcategorysummary)]|true|read-only|none|
|names|[[ItemPocketName](#schemaitempocketname)]|true|read-only|none|

<h2 id="tocS_ItemPocketName">ItemPocketName</h2>
<!-- backwards compatibility -->
<a id="schemaitempocketname"></a>
<a id="schema_ItemPocketName"></a>
<a id="tocSitempocketname"></a>
<a id="tocsitempocketname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_ItemPocketSummary">ItemPocketSummary</h2>
<!-- backwards compatibility -->
<a id="schemaitempocketsummary"></a>
<a id="schema_ItemPocketSummary"></a>
<a id="tocSitempocketsummary"></a>
<a id="tocsitempocketsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_ItemPrice">ItemPrice</h2>
<!-- backwards compatibility -->
<a id="schemaitemprice"></a>
<a id="schema_ItemPrice"></a>
<a id="tocSitemprice"></a>
<a id="tocsitemprice"></a>

```json
{
  "purchase_price": -2147483648,
  "sell_price": -2147483648,
  "currency": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchase_price|integer \| null|false|none|none|
|sell_price|integer \| null|false|none|none|
|currency|[CurrencySummary](#schemacurrencysummary)|true|none|none|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|

<h2 id="tocS_ItemSprites">ItemSprites</h2>
<!-- backwards compatibility -->
<a id="schemaitemsprites"></a>
<a id="schema_ItemSprites"></a>
<a id="tocSitemsprites"></a>
<a id="tocsitemsprites"></a>

```json
{
  "default": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|string \| null|true|none|none|

<h2 id="tocS_ItemSummary">ItemSummary</h2>
<!-- backwards compatibility -->
<a id="schemaitemsummary"></a>
<a id="schema_ItemSummary"></a>
<a id="tocSitemsummary"></a>
<a id="tocsitemsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_LanguageDetail">LanguageDetail</h2>
<!-- backwards compatibility -->
<a id="schemalanguagedetail"></a>
<a id="schema_LanguageDetail"></a>
<a id="tocSlanguagedetail"></a>
<a id="tocslanguagedetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "official": true,
  "iso639": "string",
  "iso3166": "st",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|official|boolean|false|none|none|
|iso639|string|true|none|none|
|iso3166|string|true|none|none|
|names|[[LanguageName](#schemalanguagename)]|true|read-only|none|

<h2 id="tocS_LanguageName">LanguageName</h2>
<!-- backwards compatibility -->
<a id="schemalanguagename"></a>
<a id="schema_LanguageName"></a>
<a id="tocSlanguagename"></a>
<a id="tocslanguagename"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_LanguageSummary">LanguageSummary</h2>
<!-- backwards compatibility -->
<a id="schemalanguagesummary"></a>
<a id="schema_LanguageSummary"></a>
<a id="tocSlanguagesummary"></a>
<a id="tocslanguagesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_LocationAreaDetail">LocationAreaDetail</h2>
<!-- backwards compatibility -->
<a id="schemalocationareadetail"></a>
<a id="schema_LocationAreaDetail"></a>
<a id="tocSlocationareadetail"></a>
<a id="tocslocationareadetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "game_index": -2147483648,
  "encounter_method_rates": [
    {
      "encounter_method": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_details": [
        {
          "rate": 0,
          "version": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "location": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_encounters": [
    {
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_details": [
        {
          "version": {
            "name": "string",
            "url": "http://example.com"
          },
          "max_chance": 0,
          "encounter_details": [
            {
              "min_level": 0,
              "max_level": 0,
              "chance": 0,
              "method": {
                "name": "string",
                "url": "http://example.com"
              },
              "condition_values": [
                {
                  "name": "string",
                  "url": "http://example.com"
                }
              ],
              "pokemon_details": {
                "min_perfect_ivs": -2147483648,
                "always_shiny": true,
                "never_shiny": true,
                "is_alpha": true
              }
            }
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|game_index|integer|true|none|none|
|encounter_method_rates|[[LocationAreaEncounterRate](#schemalocationareaencounterrate)]|true|read-only|none|
|location|[LocationSummary](#schemalocationsummary)|true|none|none|
|names|[[LocationAreaName](#schemalocationareaname)]|true|read-only|none|
|pokemon_encounters|[[LocationAreaPokemonEncounter](#schemalocationareapokemonencounter)]|true|read-only|none|

<h2 id="tocS_LocationAreaEncounterDetail">LocationAreaEncounterDetail</h2>
<!-- backwards compatibility -->
<a id="schemalocationareaencounterdetail"></a>
<a id="schema_LocationAreaEncounterDetail"></a>
<a id="tocSlocationareaencounterdetail"></a>
<a id="tocslocationareaencounterdetail"></a>

```json
{
  "min_level": 0,
  "max_level": 0,
  "chance": 0,
  "method": {
    "name": "string",
    "url": "http://example.com"
  },
  "condition_values": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "pokemon_details": {
    "min_perfect_ivs": -2147483648,
    "always_shiny": true,
    "never_shiny": true,
    "is_alpha": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min_level|integer|true|none|none|
|max_level|integer|true|none|none|
|chance|integer|false|none|none|
|method|[EncounterMethodSummary](#schemaencountermethodsummary)|false|none|none|
|condition_values|[[EncounterConditionValueSummary](#schemaencounterconditionvaluesummary)]|true|read-only|none|
|pokemon_details|[EncounterPokemonDetail](#schemaencounterpokemondetail) \| null|true|read-only|none|

<h2 id="tocS_LocationAreaEncounterRate">LocationAreaEncounterRate</h2>
<!-- backwards compatibility -->
<a id="schemalocationareaencounterrate"></a>
<a id="schema_LocationAreaEncounterRate"></a>
<a id="tocSlocationareaencounterrate"></a>
<a id="tocslocationareaencounterrate"></a>

```json
{
  "encounter_method": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_details": [
    {
      "rate": 0,
      "version": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encounter_method|[EncounterMethodSummary](#schemaencountermethodsummary)|true|none|none|
|version_details|[[LocationAreaEncounterVersionDetail](#schemalocationareaencounterversiondetail)]|true|none|none|

<h2 id="tocS_LocationAreaEncounterVersionDetail">LocationAreaEncounterVersionDetail</h2>
<!-- backwards compatibility -->
<a id="schemalocationareaencounterversiondetail"></a>
<a id="schema_LocationAreaEncounterVersionDetail"></a>
<a id="tocSlocationareaencounterversiondetail"></a>
<a id="tocslocationareaencounterversiondetail"></a>

```json
{
  "rate": 0,
  "version": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|integer|true|none|none|
|version|[VersionSummary](#schemaversionsummary)|true|none|none|

<h2 id="tocS_LocationAreaName">LocationAreaName</h2>
<!-- backwards compatibility -->
<a id="schemalocationareaname"></a>
<a id="schema_LocationAreaName"></a>
<a id="tocSlocationareaname"></a>
<a id="tocslocationareaname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_LocationAreaPokemonEncounter">LocationAreaPokemonEncounter</h2>
<!-- backwards compatibility -->
<a id="schemalocationareapokemonencounter"></a>
<a id="schema_LocationAreaPokemonEncounter"></a>
<a id="tocSlocationareapokemonencounter"></a>
<a id="tocslocationareapokemonencounter"></a>

```json
{
  "pokemon": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_details": [
    {
      "version": {
        "name": "string",
        "url": "http://example.com"
      },
      "max_chance": 0,
      "encounter_details": [
        {
          "min_level": 0,
          "max_level": 0,
          "chance": 0,
          "method": {
            "name": "string",
            "url": "http://example.com"
          },
          "condition_values": [
            {
              "name": "string",
              "url": "http://example.com"
            }
          ],
          "pokemon_details": {
            "min_perfect_ivs": -2147483648,
            "always_shiny": true,
            "never_shiny": true,
            "is_alpha": true
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pokemon|[PokemonSummary](#schemapokemonsummary)|true|none|none|
|version_details|[[LocationAreaPokemonEncounterVersion](#schemalocationareapokemonencounterversion)]|true|none|none|

<h2 id="tocS_LocationAreaPokemonEncounterVersion">LocationAreaPokemonEncounterVersion</h2>
<!-- backwards compatibility -->
<a id="schemalocationareapokemonencounterversion"></a>
<a id="schema_LocationAreaPokemonEncounterVersion"></a>
<a id="tocSlocationareapokemonencounterversion"></a>
<a id="tocslocationareapokemonencounterversion"></a>

```json
{
  "version": {
    "name": "string",
    "url": "http://example.com"
  },
  "max_chance": 0,
  "encounter_details": [
    {
      "min_level": 0,
      "max_level": 0,
      "chance": 0,
      "method": {
        "name": "string",
        "url": "http://example.com"
      },
      "condition_values": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "pokemon_details": {
        "min_perfect_ivs": -2147483648,
        "always_shiny": true,
        "never_shiny": true,
        "is_alpha": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|[VersionSummary](#schemaversionsummary)|true|none|none|
|max_chance|integer|true|none|none|
|encounter_details|[[LocationAreaEncounterDetail](#schemalocationareaencounterdetail)]|true|none|none|

<h2 id="tocS_LocationAreaSummary">LocationAreaSummary</h2>
<!-- backwards compatibility -->
<a id="schemalocationareasummary"></a>
<a id="schema_LocationAreaSummary"></a>
<a id="tocSlocationareasummary"></a>
<a id="tocslocationareasummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_LocationDetail">LocationDetail</h2>
<!-- backwards compatibility -->
<a id="schemalocationdetail"></a>
<a id="schema_LocationDetail"></a>
<a id="tocSlocationdetail"></a>
<a id="tocslocationdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "region": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "game_indices": [
    {
      "game_index": -2147483648,
      "generation": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "areas": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|region|[RegionSummary](#schemaregionsummary) \| null|true|none|none|
|names|[[LocationName](#schemalocationname)]|true|read-only|none|
|game_indices|[[LocationGameIndex](#schemalocationgameindex)]|true|read-only|none|
|areas|[[LocationAreaSummary](#schemalocationareasummary)]|true|read-only|none|

<h2 id="tocS_LocationGameIndex">LocationGameIndex</h2>
<!-- backwards compatibility -->
<a id="schemalocationgameindex"></a>
<a id="schema_LocationGameIndex"></a>
<a id="tocSlocationgameindex"></a>
<a id="tocslocationgameindex"></a>

```json
{
  "game_index": -2147483648,
  "generation": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|game_index|integer|true|none|none|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|

<h2 id="tocS_LocationName">LocationName</h2>
<!-- backwards compatibility -->
<a id="schemalocationname"></a>
<a id="schema_LocationName"></a>
<a id="tocSlocationname"></a>
<a id="tocslocationname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_LocationSummary">LocationSummary</h2>
<!-- backwards compatibility -->
<a id="schemalocationsummary"></a>
<a id="schema_LocationSummary"></a>
<a id="tocSlocationsummary"></a>
<a id="tocslocationsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_MachineDetail">MachineDetail</h2>
<!-- backwards compatibility -->
<a id="schemamachinedetail"></a>
<a id="schema_MachineDetail"></a>
<a id="tocSmachinedetail"></a>
<a id="tocsmachinedetail"></a>

```json
{
  "id": 0,
  "item": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "move": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|item|[ItemSummary](#schemaitemsummary)|true|none|none|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|
|move|[MoveSummary](#schemamovesummary)|true|none|none|

<h2 id="tocS_MachineSummary">MachineSummary</h2>
<!-- backwards compatibility -->
<a id="schemamachinesummary"></a>
<a id="schema_MachineSummary"></a>
<a id="tocSmachinesummary"></a>
<a id="tocsmachinesummary"></a>

```json
{
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_MoveBattleStyleDetail">MoveBattleStyleDetail</h2>
<!-- backwards compatibility -->
<a id="schemamovebattlestyledetail"></a>
<a id="schema_MoveBattleStyleDetail"></a>
<a id="tocSmovebattlestyledetail"></a>
<a id="tocsmovebattlestyledetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|names|[[MoveBattleStyleName](#schemamovebattlestylename)]|true|read-only|none|

<h2 id="tocS_MoveBattleStyleName">MoveBattleStyleName</h2>
<!-- backwards compatibility -->
<a id="schemamovebattlestylename"></a>
<a id="schema_MoveBattleStyleName"></a>
<a id="tocSmovebattlestylename"></a>
<a id="tocsmovebattlestylename"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveBattleStyleSummary">MoveBattleStyleSummary</h2>
<!-- backwards compatibility -->
<a id="schemamovebattlestylesummary"></a>
<a id="schema_MoveBattleStyleSummary"></a>
<a id="tocSmovebattlestylesummary"></a>
<a id="tocsmovebattlestylesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_MoveChange">MoveChange</h2>
<!-- backwards compatibility -->
<a id="schemamovechange"></a>
<a id="schema_MoveChange"></a>
<a id="tocSmovechange"></a>
<a id="tocsmovechange"></a>

```json
{
  "accuracy": -2147483648,
  "power": -2147483648,
  "pp": -2147483648,
  "effect_chance": 0,
  "effect_entries": [
    {
      "effect": "string",
      "short_effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "type": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accuracy|integer \| null|false|none|none|
|power|integer \| null|false|none|none|
|pp|integer \| null|false|none|none|
|effect_chance|integer|true|none|none|
|effect_entries|[[MoveEffectEffectText](#schemamoveeffecteffecttext)]|true|read-only|none|
|type|[TypeSummary](#schematypesummary)|true|none|none|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|

<h2 id="tocS_MoveComboUsage">MoveComboUsage</h2>
<!-- backwards compatibility -->
<a id="schemamovecombousage"></a>
<a id="schema_MoveComboUsage"></a>
<a id="tocSmovecombousage"></a>
<a id="tocsmovecombousage"></a>

```json
{
  "use_before": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "use_after": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|use_before|[[MoveSummary](#schemamovesummary)]|true|none|none|
|use_after|[[MoveSummary](#schemamovesummary)]|true|none|none|

<h2 id="tocS_MoveCombos">MoveCombos</h2>
<!-- backwards compatibility -->
<a id="schemamovecombos"></a>
<a id="schema_MoveCombos"></a>
<a id="tocSmovecombos"></a>
<a id="tocsmovecombos"></a>

```json
{
  "normal": {
    "use_before": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "use_after": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ]
  },
  "super": {
    "use_before": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "use_after": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normal|[MoveComboUsage](#schemamovecombousage)|true|none|none|
|super|[MoveComboUsage](#schemamovecombousage)|true|none|none|

<h2 id="tocS_MoveDamageClassDescription">MoveDamageClassDescription</h2>
<!-- backwards compatibility -->
<a id="schemamovedamageclassdescription"></a>
<a id="schema_MoveDamageClassDescription"></a>
<a id="tocSmovedamageclassdescription"></a>
<a id="tocsmovedamageclassdescription"></a>

```json
{
  "description": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveDamageClassDetail">MoveDamageClassDetail</h2>
<!-- backwards compatibility -->
<a id="schemamovedamageclassdetail"></a>
<a id="schema_MoveDamageClassDetail"></a>
<a id="tocSmovedamageclassdetail"></a>
<a id="tocsmovedamageclassdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|descriptions|[[MoveDamageClassDescription](#schemamovedamageclassdescription)]|true|read-only|none|
|moves|[[MoveSummary](#schemamovesummary)]|true|read-only|none|
|names|[[MoveDamageClassName](#schemamovedamageclassname)]|true|read-only|none|

<h2 id="tocS_MoveDamageClassName">MoveDamageClassName</h2>
<!-- backwards compatibility -->
<a id="schemamovedamageclassname"></a>
<a id="schema_MoveDamageClassName"></a>
<a id="tocSmovedamageclassname"></a>
<a id="tocsmovedamageclassname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveDamageClassSummary">MoveDamageClassSummary</h2>
<!-- backwards compatibility -->
<a id="schemamovedamageclasssummary"></a>
<a id="schema_MoveDamageClassSummary"></a>
<a id="tocSmovedamageclasssummary"></a>
<a id="tocsmovedamageclasssummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_MoveDetail">MoveDetail</h2>
<!-- backwards compatibility -->
<a id="schemamovedetail"></a>
<a id="schema_MoveDetail"></a>
<a id="tocSmovedetail"></a>
<a id="tocsmovedetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "accuracy": -2147483648,
  "effect_chance": 0,
  "pp": -2147483648,
  "priority": -2147483648,
  "power": -2147483648,
  "contest_combos": {
    "normal": {
      "use_before": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "use_after": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ]
    },
    "super": {
      "use_before": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "use_after": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ]
    }
  },
  "contest_type": {
    "name": "string",
    "url": "http://example.com"
  },
  "contest_effect": {
    "url": "http://example.com"
  },
  "damage_class": {
    "name": "string",
    "url": "http://example.com"
  },
  "effect_entries": [
    {
      "effect": "string",
      "short_effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "effect_changes": [
    {
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      },
      "effect_entries": [
        {
          "effect": "string",
          "language": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "meta": {
    "ailment": {
      "name": "string",
      "url": "http://example.com"
    },
    "category": {
      "name": "string",
      "url": "http://example.com"
    },
    "min_hits": -2147483648,
    "max_hits": -2147483648,
    "min_turns": -2147483648,
    "max_turns": -2147483648,
    "drain": -2147483648,
    "healing": -2147483648,
    "crit_rate": -2147483648,
    "ailment_chance": -2147483648,
    "flinch_chance": -2147483648,
    "stat_chance": -2147483648
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "past_values": [
    {
      "accuracy": -2147483648,
      "power": -2147483648,
      "pp": -2147483648,
      "effect_chance": 0,
      "effect_entries": [
        {
          "effect": "string",
          "short_effect": "string",
          "language": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ],
      "type": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "stat_changes": [
    {
      "change": -2147483648,
      "stat": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "super_contest_effect": {
    "url": "http://example.com"
  },
  "target": {
    "name": "string",
    "url": "http://example.com"
  },
  "type": {
    "name": "string",
    "url": "http://example.com"
  },
  "machines": [
    {
      "machine": {
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "learned_by_pokemon": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|accuracy|integer \| null|false|none|none|
|effect_chance|integer|true|none|none|
|pp|integer \| null|false|none|none|
|priority|integer \| null|false|none|none|
|power|integer \| null|false|none|none|
|contest_combos|[MoveCombos](#schemamovecombos) \| null|true|read-only|none|
|contest_type|[ContestTypeSummary](#schemacontesttypesummary)|true|none|none|
|contest_effect|[ContestEffectSummary](#schemacontesteffectsummary)|true|none|none|
|damage_class|[MoveDamageClassSummary](#schemamovedamageclasssummary)|true|none|none|
|effect_entries|[[MoveEffectEffectText](#schemamoveeffecteffecttext)]|true|read-only|none|
|effect_changes|[[MoveEffectChange](#schemamoveeffectchange)]|true|read-only|none|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|
|meta|object|true|read-only|none|
|names|[[MoveName](#schemamovename)]|true|read-only|none|
|past_values|[[MoveChange](#schemamovechange)]|true|read-only|none|
|stat_changes|[[MoveMetaStatChange](#schemamovemetastatchange)]|true|read-only|none|
|super_contest_effect|[SuperContestEffectSummary](#schemasupercontesteffectsummary)|true|none|none|
|target|[MoveTargetSummary](#schemamovetargetsummary)|true|none|none|
|type|[TypeSummary](#schematypesummary)|true|none|none|
|machines|[[ItemMachine](#schemaitemmachine)]|true|read-only|none|
|flavor_text_entries|[[MoveFlavorText](#schemamoveflavortext)]|true|read-only|none|
|learned_by_pokemon|[[PokemonSummary](#schemapokemonsummary)]|true|read-only|none|

<h2 id="tocS_MoveEffectChange">MoveEffectChange</h2>
<!-- backwards compatibility -->
<a id="schemamoveeffectchange"></a>
<a id="schema_MoveEffectChange"></a>
<a id="tocSmoveeffectchange"></a>
<a id="tocsmoveeffectchange"></a>

```json
{
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "effect_entries": [
    {
      "effect": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|
|effect_entries|[[MoveEffectChangeEffectText](#schemamoveeffectchangeeffecttext)]|true|read-only|none|

<h2 id="tocS_MoveEffectChangeEffectText">MoveEffectChangeEffectText</h2>
<!-- backwards compatibility -->
<a id="schemamoveeffectchangeeffecttext"></a>
<a id="schema_MoveEffectChangeEffectText"></a>
<a id="tocSmoveeffectchangeeffecttext"></a>
<a id="tocsmoveeffectchangeeffecttext"></a>

```json
{
  "effect": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effect|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveEffectEffectText">MoveEffectEffectText</h2>
<!-- backwards compatibility -->
<a id="schemamoveeffecteffecttext"></a>
<a id="schema_MoveEffectEffectText"></a>
<a id="tocSmoveeffecteffecttext"></a>
<a id="tocsmoveeffecteffecttext"></a>

```json
{
  "effect": "string",
  "short_effect": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effect|string|true|none|none|
|short_effect|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveFlavorText">MoveFlavorText</h2>
<!-- backwards compatibility -->
<a id="schemamoveflavortext"></a>
<a id="schema_MoveFlavorText"></a>
<a id="tocSmoveflavortext"></a>
<a id="tocsmoveflavortext"></a>

```json
{
  "flavor_text": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flavor_text|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|

<h2 id="tocS_MoveLearnMethodDescription">MoveLearnMethodDescription</h2>
<!-- backwards compatibility -->
<a id="schemamovelearnmethoddescription"></a>
<a id="schema_MoveLearnMethodDescription"></a>
<a id="tocSmovelearnmethoddescription"></a>
<a id="tocsmovelearnmethoddescription"></a>

```json
{
  "description": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveLearnMethodDetail">MoveLearnMethodDetail</h2>
<!-- backwards compatibility -->
<a id="schemamovelearnmethoddetail"></a>
<a id="schema_MoveLearnMethodDetail"></a>
<a id="tocSmovelearnmethoddetail"></a>
<a id="tocsmovelearnmethoddetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "version_groups": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|names|[[MoveLearnMethodName](#schemamovelearnmethodname)]|true|read-only|none|
|descriptions|[[MoveLearnMethodDescription](#schemamovelearnmethoddescription)]|true|read-only|none|
|version_groups|[[VersionGroupSummary](#schemaversiongroupsummary)]|true|read-only|none|

<h2 id="tocS_MoveLearnMethodName">MoveLearnMethodName</h2>
<!-- backwards compatibility -->
<a id="schemamovelearnmethodname"></a>
<a id="schema_MoveLearnMethodName"></a>
<a id="tocSmovelearnmethodname"></a>
<a id="tocsmovelearnmethodname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveLearnMethodSummary">MoveLearnMethodSummary</h2>
<!-- backwards compatibility -->
<a id="schemamovelearnmethodsummary"></a>
<a id="schema_MoveLearnMethodSummary"></a>
<a id="tocSmovelearnmethodsummary"></a>
<a id="tocsmovelearnmethodsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_MoveMeta">MoveMeta</h2>
<!-- backwards compatibility -->
<a id="schemamovemeta"></a>
<a id="schema_MoveMeta"></a>
<a id="tocSmovemeta"></a>
<a id="tocsmovemeta"></a>

```json
{
  "ailment": {
    "name": "string",
    "url": "http://example.com"
  },
  "category": {
    "name": "string",
    "url": "http://example.com"
  },
  "min_hits": -2147483648,
  "max_hits": -2147483648,
  "min_turns": -2147483648,
  "max_turns": -2147483648,
  "drain": -2147483648,
  "healing": -2147483648,
  "crit_rate": -2147483648,
  "ailment_chance": -2147483648,
  "flinch_chance": -2147483648,
  "stat_chance": -2147483648
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ailment|[MoveMetaAilmentSummary](#schemamovemetaailmentsummary)|true|none|none|
|category|[MoveMetaCategorySummary](#schemamovemetacategorysummary)|true|none|none|
|min_hits|integer \| null|false|none|none|
|max_hits|integer \| null|false|none|none|
|min_turns|integer \| null|false|none|none|
|max_turns|integer \| null|false|none|none|
|drain|integer \| null|false|none|none|
|healing|integer \| null|false|none|none|
|crit_rate|integer \| null|false|none|none|
|ailment_chance|integer \| null|false|none|none|
|flinch_chance|integer \| null|false|none|none|
|stat_chance|integer \| null|false|none|none|

<h2 id="tocS_MoveMetaAilmentDetail">MoveMetaAilmentDetail</h2>
<!-- backwards compatibility -->
<a id="schemamovemetaailmentdetail"></a>
<a id="schema_MoveMetaAilmentDetail"></a>
<a id="tocSmovemetaailmentdetail"></a>
<a id="tocsmovemetaailmentdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|moves|[[MoveSummary](#schemamovesummary)]|true|read-only|none|
|names|[[MoveMetaAilmentName](#schemamovemetaailmentname)]|true|read-only|none|

<h2 id="tocS_MoveMetaAilmentName">MoveMetaAilmentName</h2>
<!-- backwards compatibility -->
<a id="schemamovemetaailmentname"></a>
<a id="schema_MoveMetaAilmentName"></a>
<a id="tocSmovemetaailmentname"></a>
<a id="tocsmovemetaailmentname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveMetaAilmentSummary">MoveMetaAilmentSummary</h2>
<!-- backwards compatibility -->
<a id="schemamovemetaailmentsummary"></a>
<a id="schema_MoveMetaAilmentSummary"></a>
<a id="tocSmovemetaailmentsummary"></a>
<a id="tocsmovemetaailmentsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_MoveMetaCategoryDescription">MoveMetaCategoryDescription</h2>
<!-- backwards compatibility -->
<a id="schemamovemetacategorydescription"></a>
<a id="schema_MoveMetaCategoryDescription"></a>
<a id="tocSmovemetacategorydescription"></a>
<a id="tocsmovemetacategorydescription"></a>

```json
{
  "description": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveMetaCategoryDetail">MoveMetaCategoryDetail</h2>
<!-- backwards compatibility -->
<a id="schemamovemetacategorydetail"></a>
<a id="schema_MoveMetaCategoryDetail"></a>
<a id="tocSmovemetacategorydetail"></a>
<a id="tocsmovemetacategorydetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|descriptions|[[MoveMetaCategoryDescription](#schemamovemetacategorydescription)]|true|read-only|none|
|moves|[[MoveSummary](#schemamovesummary)]|true|read-only|none|

<h2 id="tocS_MoveMetaCategorySummary">MoveMetaCategorySummary</h2>
<!-- backwards compatibility -->
<a id="schemamovemetacategorysummary"></a>
<a id="schema_MoveMetaCategorySummary"></a>
<a id="tocSmovemetacategorysummary"></a>
<a id="tocsmovemetacategorysummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_MoveMetaStatChange">MoveMetaStatChange</h2>
<!-- backwards compatibility -->
<a id="schemamovemetastatchange"></a>
<a id="schema_MoveMetaStatChange"></a>
<a id="tocSmovemetastatchange"></a>
<a id="tocsmovemetastatchange"></a>

```json
{
  "change": -2147483648,
  "stat": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|change|integer|true|none|none|
|stat|[StatSummary](#schemastatsummary)|true|none|none|

<h2 id="tocS_MoveName">MoveName</h2>
<!-- backwards compatibility -->
<a id="schemamovename"></a>
<a id="schema_MoveName"></a>
<a id="tocSmovename"></a>
<a id="tocsmovename"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveStatChange">MoveStatChange</h2>
<!-- backwards compatibility -->
<a id="schemamovestatchange"></a>
<a id="schema_MoveStatChange"></a>
<a id="tocSmovestatchange"></a>
<a id="tocsmovestatchange"></a>

```json
{
  "change": -2147483648,
  "move": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|change|integer|true|none|none|
|move|[MoveSummary](#schemamovesummary)|true|none|none|

<h2 id="tocS_MoveSummary">MoveSummary</h2>
<!-- backwards compatibility -->
<a id="schemamovesummary"></a>
<a id="schema_MoveSummary"></a>
<a id="tocSmovesummary"></a>
<a id="tocsmovesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_MoveTargetDescription">MoveTargetDescription</h2>
<!-- backwards compatibility -->
<a id="schemamovetargetdescription"></a>
<a id="schema_MoveTargetDescription"></a>
<a id="tocSmovetargetdescription"></a>
<a id="tocsmovetargetdescription"></a>

```json
{
  "description": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveTargetDetail">MoveTargetDetail</h2>
<!-- backwards compatibility -->
<a id="schemamovetargetdetail"></a>
<a id="schema_MoveTargetDetail"></a>
<a id="tocSmovetargetdetail"></a>
<a id="tocsmovetargetdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|descriptions|[[MoveTargetDescription](#schemamovetargetdescription)]|true|read-only|none|
|moves|[[MoveSummary](#schemamovesummary)]|true|read-only|none|
|names|[[MoveTargetName](#schemamovetargetname)]|true|read-only|none|

<h2 id="tocS_MoveTargetName">MoveTargetName</h2>
<!-- backwards compatibility -->
<a id="schemamovetargetname"></a>
<a id="schema_MoveTargetName"></a>
<a id="tocSmovetargetname"></a>
<a id="tocsmovetargetname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_MoveTargetSummary">MoveTargetSummary</h2>
<!-- backwards compatibility -->
<a id="schemamovetargetsummary"></a>
<a id="schema_MoveTargetSummary"></a>
<a id="tocSmovetargetsummary"></a>
<a id="tocsmovetargetsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_NatureBattleStylePreference">NatureBattleStylePreference</h2>
<!-- backwards compatibility -->
<a id="schemanaturebattlestylepreference"></a>
<a id="schema_NatureBattleStylePreference"></a>
<a id="tocSnaturebattlestylepreference"></a>
<a id="tocsnaturebattlestylepreference"></a>

```json
{
  "low_hp_preference": -2147483648,
  "high_hp_preference": -2147483648,
  "move_battle_style": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|low_hp_preference|integer|true|none|none|
|high_hp_preference|integer|true|none|none|
|move_battle_style|[MoveBattleStyleSummary](#schemamovebattlestylesummary)|true|none|none|

<h2 id="tocS_NatureDetail">NatureDetail</h2>
<!-- backwards compatibility -->
<a id="schemanaturedetail"></a>
<a id="schema_NatureDetail"></a>
<a id="tocSnaturedetail"></a>
<a id="tocsnaturedetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "decreased_stat": {
    "name": "string",
    "url": "http://example.com"
  },
  "increased_stat": {
    "name": "string",
    "url": "http://example.com"
  },
  "likes_flavor": {
    "name": "string",
    "url": "http://example.com"
  },
  "hates_flavor": {
    "name": "string",
    "url": "http://example.com"
  },
  "berries": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "pokeathlon_stat_changes": [
    {
      "max_change": -2147483648,
      "pokeathlon_stat": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "move_battle_style_preferences": [
    {
      "low_hp_preference": -2147483648,
      "high_hp_preference": -2147483648,
      "move_battle_style": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|decreased_stat|[StatSummary](#schemastatsummary)|true|none|none|
|increased_stat|[StatSummary](#schemastatsummary)|true|none|none|
|likes_flavor|[BerryFlavorSummary](#schemaberryflavorsummary)|true|none|none|
|hates_flavor|[BerryFlavorSummary](#schemaberryflavorsummary)|true|none|none|
|berries|[[BerrySummary](#schemaberrysummary)]|true|read-only|none|
|pokeathlon_stat_changes|[[NaturePokeathlonStat](#schemanaturepokeathlonstat)]|true|read-only|none|
|move_battle_style_preferences|[[NatureBattleStylePreference](#schemanaturebattlestylepreference)]|true|read-only|none|
|names|[[NatureName](#schemanaturename)]|true|read-only|none|

<h2 id="tocS_NatureName">NatureName</h2>
<!-- backwards compatibility -->
<a id="schemanaturename"></a>
<a id="schema_NatureName"></a>
<a id="tocSnaturename"></a>
<a id="tocsnaturename"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_NaturePokeathlonStat">NaturePokeathlonStat</h2>
<!-- backwards compatibility -->
<a id="schemanaturepokeathlonstat"></a>
<a id="schema_NaturePokeathlonStat"></a>
<a id="tocSnaturepokeathlonstat"></a>
<a id="tocsnaturepokeathlonstat"></a>

```json
{
  "max_change": -2147483648,
  "pokeathlon_stat": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_change|integer|true|none|none|
|pokeathlon_stat|[PokeathlonStatSummary](#schemapokeathlonstatsummary)|true|none|none|

<h2 id="tocS_NatureSummary">NatureSummary</h2>
<!-- backwards compatibility -->
<a id="schemanaturesummary"></a>
<a id="schema_NatureSummary"></a>
<a id="tocSnaturesummary"></a>
<a id="tocsnaturesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_PaginatedAbilitySummaryList">PaginatedAbilitySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedabilitysummarylist"></a>
<a id="schema_PaginatedAbilitySummaryList"></a>
<a id="tocSpaginatedabilitysummarylist"></a>
<a id="tocspaginatedabilitysummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[AbilitySummary](#schemaabilitysummary)]|true|none|none|

<h2 id="tocS_PaginatedBerryFirmnessSummaryList">PaginatedBerryFirmnessSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedberryfirmnesssummarylist"></a>
<a id="schema_PaginatedBerryFirmnessSummaryList"></a>
<a id="tocSpaginatedberryfirmnesssummarylist"></a>
<a id="tocspaginatedberryfirmnesssummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[BerryFirmnessSummary](#schemaberryfirmnesssummary)]|true|none|none|

<h2 id="tocS_PaginatedBerryFlavorSummaryList">PaginatedBerryFlavorSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedberryflavorsummarylist"></a>
<a id="schema_PaginatedBerryFlavorSummaryList"></a>
<a id="tocSpaginatedberryflavorsummarylist"></a>
<a id="tocspaginatedberryflavorsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[BerryFlavorSummary](#schemaberryflavorsummary)]|true|none|none|

<h2 id="tocS_PaginatedBerrySummaryList">PaginatedBerrySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedberrysummarylist"></a>
<a id="schema_PaginatedBerrySummaryList"></a>
<a id="tocSpaginatedberrysummarylist"></a>
<a id="tocspaginatedberrysummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[BerrySummary](#schemaberrysummary)]|true|none|none|

<h2 id="tocS_PaginatedCharacteristicSummaryList">PaginatedCharacteristicSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedcharacteristicsummarylist"></a>
<a id="schema_PaginatedCharacteristicSummaryList"></a>
<a id="tocSpaginatedcharacteristicsummarylist"></a>
<a id="tocspaginatedcharacteristicsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[CharacteristicSummary](#schemacharacteristicsummary)]|true|none|none|

<h2 id="tocS_PaginatedContestEffectSummaryList">PaginatedContestEffectSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedcontesteffectsummarylist"></a>
<a id="schema_PaginatedContestEffectSummaryList"></a>
<a id="tocSpaginatedcontesteffectsummarylist"></a>
<a id="tocspaginatedcontesteffectsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ContestEffectSummary](#schemacontesteffectsummary)]|true|none|none|

<h2 id="tocS_PaginatedContestTypeSummaryList">PaginatedContestTypeSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedcontesttypesummarylist"></a>
<a id="schema_PaginatedContestTypeSummaryList"></a>
<a id="tocSpaginatedcontesttypesummarylist"></a>
<a id="tocspaginatedcontesttypesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ContestTypeSummary](#schemacontesttypesummary)]|true|none|none|

<h2 id="tocS_PaginatedCurrencySummaryList">PaginatedCurrencySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedcurrencysummarylist"></a>
<a id="schema_PaginatedCurrencySummaryList"></a>
<a id="tocSpaginatedcurrencysummarylist"></a>
<a id="tocspaginatedcurrencysummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[CurrencySummary](#schemacurrencysummary)]|true|none|none|

<h2 id="tocS_PaginatedEggGroupSummaryList">PaginatedEggGroupSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedegggroupsummarylist"></a>
<a id="schema_PaginatedEggGroupSummaryList"></a>
<a id="tocSpaginatedegggroupsummarylist"></a>
<a id="tocspaginatedegggroupsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[EggGroupSummary](#schemaegggroupsummary)]|true|none|none|

<h2 id="tocS_PaginatedEncounterConditionSummaryList">PaginatedEncounterConditionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedencounterconditionsummarylist"></a>
<a id="schema_PaginatedEncounterConditionSummaryList"></a>
<a id="tocSpaginatedencounterconditionsummarylist"></a>
<a id="tocspaginatedencounterconditionsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[EncounterConditionSummary](#schemaencounterconditionsummary)]|true|none|none|

<h2 id="tocS_PaginatedEncounterConditionValueSummaryList">PaginatedEncounterConditionValueSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedencounterconditionvaluesummarylist"></a>
<a id="schema_PaginatedEncounterConditionValueSummaryList"></a>
<a id="tocSpaginatedencounterconditionvaluesummarylist"></a>
<a id="tocspaginatedencounterconditionvaluesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[EncounterConditionValueSummary](#schemaencounterconditionvaluesummary)]|true|none|none|

<h2 id="tocS_PaginatedEncounterMethodSummaryList">PaginatedEncounterMethodSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedencountermethodsummarylist"></a>
<a id="schema_PaginatedEncounterMethodSummaryList"></a>
<a id="tocSpaginatedencountermethodsummarylist"></a>
<a id="tocspaginatedencountermethodsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[EncounterMethodSummary](#schemaencountermethodsummary)]|true|none|none|

<h2 id="tocS_PaginatedEvolutionChainSummaryList">PaginatedEvolutionChainSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedevolutionchainsummarylist"></a>
<a id="schema_PaginatedEvolutionChainSummaryList"></a>
<a id="tocSpaginatedevolutionchainsummarylist"></a>
<a id="tocspaginatedevolutionchainsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[EvolutionChainSummary](#schemaevolutionchainsummary)]|true|none|none|

<h2 id="tocS_PaginatedEvolutionTriggerSummaryList">PaginatedEvolutionTriggerSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedevolutiontriggersummarylist"></a>
<a id="schema_PaginatedEvolutionTriggerSummaryList"></a>
<a id="tocSpaginatedevolutiontriggersummarylist"></a>
<a id="tocspaginatedevolutiontriggersummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[EvolutionTriggerSummary](#schemaevolutiontriggersummary)]|true|none|none|

<h2 id="tocS_PaginatedEvolutionVariableSummaryList">PaginatedEvolutionVariableSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedevolutionvariablesummarylist"></a>
<a id="schema_PaginatedEvolutionVariableSummaryList"></a>
<a id="tocSpaginatedevolutionvariablesummarylist"></a>
<a id="tocspaginatedevolutionvariablesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[EvolutionVariableSummary](#schemaevolutionvariablesummary)]|true|none|none|

<h2 id="tocS_PaginatedGenderSummaryList">PaginatedGenderSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedgendersummarylist"></a>
<a id="schema_PaginatedGenderSummaryList"></a>
<a id="tocSpaginatedgendersummarylist"></a>
<a id="tocspaginatedgendersummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[GenderSummary](#schemagendersummary)]|true|none|none|

<h2 id="tocS_PaginatedGenerationSummaryList">PaginatedGenerationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedgenerationsummarylist"></a>
<a id="schema_PaginatedGenerationSummaryList"></a>
<a id="tocSpaginatedgenerationsummarylist"></a>
<a id="tocspaginatedgenerationsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[GenerationSummary](#schemagenerationsummary)]|true|none|none|

<h2 id="tocS_PaginatedGrowthRateSummaryList">PaginatedGrowthRateSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedgrowthratesummarylist"></a>
<a id="schema_PaginatedGrowthRateSummaryList"></a>
<a id="tocSpaginatedgrowthratesummarylist"></a>
<a id="tocspaginatedgrowthratesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[GrowthRateSummary](#schemagrowthratesummary)]|true|none|none|

<h2 id="tocS_PaginatedItemAttributeSummaryList">PaginatedItemAttributeSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginateditemattributesummarylist"></a>
<a id="schema_PaginatedItemAttributeSummaryList"></a>
<a id="tocSpaginateditemattributesummarylist"></a>
<a id="tocspaginateditemattributesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ItemAttributeSummary](#schemaitemattributesummary)]|true|none|none|

<h2 id="tocS_PaginatedItemCategorySummaryList">PaginatedItemCategorySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginateditemcategorysummarylist"></a>
<a id="schema_PaginatedItemCategorySummaryList"></a>
<a id="tocSpaginateditemcategorysummarylist"></a>
<a id="tocspaginateditemcategorysummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ItemCategorySummary](#schemaitemcategorysummary)]|true|none|none|

<h2 id="tocS_PaginatedItemFlingEffectSummaryList">PaginatedItemFlingEffectSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginateditemflingeffectsummarylist"></a>
<a id="schema_PaginatedItemFlingEffectSummaryList"></a>
<a id="tocSpaginateditemflingeffectsummarylist"></a>
<a id="tocspaginateditemflingeffectsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ItemFlingEffectSummary](#schemaitemflingeffectsummary)]|true|none|none|

<h2 id="tocS_PaginatedItemPocketSummaryList">PaginatedItemPocketSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginateditempocketsummarylist"></a>
<a id="schema_PaginatedItemPocketSummaryList"></a>
<a id="tocSpaginateditempocketsummarylist"></a>
<a id="tocspaginateditempocketsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ItemPocketSummary](#schemaitempocketsummary)]|true|none|none|

<h2 id="tocS_PaginatedItemSummaryList">PaginatedItemSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginateditemsummarylist"></a>
<a id="schema_PaginatedItemSummaryList"></a>
<a id="tocSpaginateditemsummarylist"></a>
<a id="tocspaginateditemsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ItemSummary](#schemaitemsummary)]|true|none|none|

<h2 id="tocS_PaginatedLanguageSummaryList">PaginatedLanguageSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedlanguagesummarylist"></a>
<a id="schema_PaginatedLanguageSummaryList"></a>
<a id="tocSpaginatedlanguagesummarylist"></a>
<a id="tocspaginatedlanguagesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[LanguageSummary](#schemalanguagesummary)]|true|none|none|

<h2 id="tocS_PaginatedLocationAreaSummaryList">PaginatedLocationAreaSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedlocationareasummarylist"></a>
<a id="schema_PaginatedLocationAreaSummaryList"></a>
<a id="tocSpaginatedlocationareasummarylist"></a>
<a id="tocspaginatedlocationareasummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[LocationAreaSummary](#schemalocationareasummary)]|true|none|none|

<h2 id="tocS_PaginatedLocationSummaryList">PaginatedLocationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedlocationsummarylist"></a>
<a id="schema_PaginatedLocationSummaryList"></a>
<a id="tocSpaginatedlocationsummarylist"></a>
<a id="tocspaginatedlocationsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[LocationSummary](#schemalocationsummary)]|true|none|none|

<h2 id="tocS_PaginatedMachineSummaryList">PaginatedMachineSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmachinesummarylist"></a>
<a id="schema_PaginatedMachineSummaryList"></a>
<a id="tocSpaginatedmachinesummarylist"></a>
<a id="tocspaginatedmachinesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[MachineSummary](#schemamachinesummary)]|true|none|none|

<h2 id="tocS_PaginatedMoveBattleStyleSummaryList">PaginatedMoveBattleStyleSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmovebattlestylesummarylist"></a>
<a id="schema_PaginatedMoveBattleStyleSummaryList"></a>
<a id="tocSpaginatedmovebattlestylesummarylist"></a>
<a id="tocspaginatedmovebattlestylesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[MoveBattleStyleSummary](#schemamovebattlestylesummary)]|true|none|none|

<h2 id="tocS_PaginatedMoveDamageClassSummaryList">PaginatedMoveDamageClassSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmovedamageclasssummarylist"></a>
<a id="schema_PaginatedMoveDamageClassSummaryList"></a>
<a id="tocSpaginatedmovedamageclasssummarylist"></a>
<a id="tocspaginatedmovedamageclasssummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[MoveDamageClassSummary](#schemamovedamageclasssummary)]|true|none|none|

<h2 id="tocS_PaginatedMoveLearnMethodSummaryList">PaginatedMoveLearnMethodSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmovelearnmethodsummarylist"></a>
<a id="schema_PaginatedMoveLearnMethodSummaryList"></a>
<a id="tocSpaginatedmovelearnmethodsummarylist"></a>
<a id="tocspaginatedmovelearnmethodsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[MoveLearnMethodSummary](#schemamovelearnmethodsummary)]|true|none|none|

<h2 id="tocS_PaginatedMoveMetaAilmentSummaryList">PaginatedMoveMetaAilmentSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmovemetaailmentsummarylist"></a>
<a id="schema_PaginatedMoveMetaAilmentSummaryList"></a>
<a id="tocSpaginatedmovemetaailmentsummarylist"></a>
<a id="tocspaginatedmovemetaailmentsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[MoveMetaAilmentSummary](#schemamovemetaailmentsummary)]|true|none|none|

<h2 id="tocS_PaginatedMoveMetaCategorySummaryList">PaginatedMoveMetaCategorySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmovemetacategorysummarylist"></a>
<a id="schema_PaginatedMoveMetaCategorySummaryList"></a>
<a id="tocSpaginatedmovemetacategorysummarylist"></a>
<a id="tocspaginatedmovemetacategorysummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[MoveMetaCategorySummary](#schemamovemetacategorysummary)]|true|none|none|

<h2 id="tocS_PaginatedMoveSummaryList">PaginatedMoveSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmovesummarylist"></a>
<a id="schema_PaginatedMoveSummaryList"></a>
<a id="tocSpaginatedmovesummarylist"></a>
<a id="tocspaginatedmovesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[MoveSummary](#schemamovesummary)]|true|none|none|

<h2 id="tocS_PaginatedMoveTargetSummaryList">PaginatedMoveTargetSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmovetargetsummarylist"></a>
<a id="schema_PaginatedMoveTargetSummaryList"></a>
<a id="tocSpaginatedmovetargetsummarylist"></a>
<a id="tocspaginatedmovetargetsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[MoveTargetSummary](#schemamovetargetsummary)]|true|none|none|

<h2 id="tocS_PaginatedNatureSummaryList">PaginatedNatureSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatednaturesummarylist"></a>
<a id="schema_PaginatedNatureSummaryList"></a>
<a id="tocSpaginatednaturesummarylist"></a>
<a id="tocspaginatednaturesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[NatureSummary](#schemanaturesummary)]|true|none|none|

<h2 id="tocS_PaginatedPalParkAreaSummaryList">PaginatedPalParkAreaSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpalparkareasummarylist"></a>
<a id="schema_PaginatedPalParkAreaSummaryList"></a>
<a id="tocSpaginatedpalparkareasummarylist"></a>
<a id="tocspaginatedpalparkareasummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PalParkAreaSummary](#schemapalparkareasummary)]|true|none|none|

<h2 id="tocS_PaginatedPokeathlonStatSummaryList">PaginatedPokeathlonStatSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpokeathlonstatsummarylist"></a>
<a id="schema_PaginatedPokeathlonStatSummaryList"></a>
<a id="tocSpaginatedpokeathlonstatsummarylist"></a>
<a id="tocspaginatedpokeathlonstatsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PokeathlonStatSummary](#schemapokeathlonstatsummary)]|true|none|none|

<h2 id="tocS_PaginatedPokedexSummaryList">PaginatedPokedexSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpokedexsummarylist"></a>
<a id="schema_PaginatedPokedexSummaryList"></a>
<a id="tocSpaginatedpokedexsummarylist"></a>
<a id="tocspaginatedpokedexsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PokedexSummary](#schemapokedexsummary)]|true|none|none|

<h2 id="tocS_PaginatedPokemonColorSummaryList">PaginatedPokemonColorSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpokemoncolorsummarylist"></a>
<a id="schema_PaginatedPokemonColorSummaryList"></a>
<a id="tocSpaginatedpokemoncolorsummarylist"></a>
<a id="tocspaginatedpokemoncolorsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PokemonColorSummary](#schemapokemoncolorsummary)]|true|none|none|

<h2 id="tocS_PaginatedPokemonFormSummaryList">PaginatedPokemonFormSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpokemonformsummarylist"></a>
<a id="schema_PaginatedPokemonFormSummaryList"></a>
<a id="tocSpaginatedpokemonformsummarylist"></a>
<a id="tocspaginatedpokemonformsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PokemonFormSummary](#schemapokemonformsummary)]|true|none|none|

<h2 id="tocS_PaginatedPokemonHabitatSummaryList">PaginatedPokemonHabitatSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpokemonhabitatsummarylist"></a>
<a id="schema_PaginatedPokemonHabitatSummaryList"></a>
<a id="tocSpaginatedpokemonhabitatsummarylist"></a>
<a id="tocspaginatedpokemonhabitatsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PokemonHabitatSummary](#schemapokemonhabitatsummary)]|true|none|none|

<h2 id="tocS_PaginatedPokemonShapeSummaryList">PaginatedPokemonShapeSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpokemonshapesummarylist"></a>
<a id="schema_PaginatedPokemonShapeSummaryList"></a>
<a id="tocSpaginatedpokemonshapesummarylist"></a>
<a id="tocspaginatedpokemonshapesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PokemonShapeSummary](#schemapokemonshapesummary)]|true|none|none|

<h2 id="tocS_PaginatedPokemonSpeciesSummaryList">PaginatedPokemonSpeciesSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpokemonspeciessummarylist"></a>
<a id="schema_PaginatedPokemonSpeciesSummaryList"></a>
<a id="tocSpaginatedpokemonspeciessummarylist"></a>
<a id="tocspaginatedpokemonspeciessummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PokemonSpeciesSummary](#schemapokemonspeciessummary)]|true|none|none|

<h2 id="tocS_PaginatedPokemonSummaryList">PaginatedPokemonSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpokemonsummarylist"></a>
<a id="schema_PaginatedPokemonSummaryList"></a>
<a id="tocSpaginatedpokemonsummarylist"></a>
<a id="tocspaginatedpokemonsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PokemonSummary](#schemapokemonsummary)]|true|none|none|

<h2 id="tocS_PaginatedRegionSummaryList">PaginatedRegionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedregionsummarylist"></a>
<a id="schema_PaginatedRegionSummaryList"></a>
<a id="tocSpaginatedregionsummarylist"></a>
<a id="tocspaginatedregionsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[RegionSummary](#schemaregionsummary)]|true|none|none|

<h2 id="tocS_PaginatedStatSummaryList">PaginatedStatSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedstatsummarylist"></a>
<a id="schema_PaginatedStatSummaryList"></a>
<a id="tocSpaginatedstatsummarylist"></a>
<a id="tocspaginatedstatsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[StatSummary](#schemastatsummary)]|true|none|none|

<h2 id="tocS_PaginatedSuperContestEffectSummaryList">PaginatedSuperContestEffectSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedsupercontesteffectsummarylist"></a>
<a id="schema_PaginatedSuperContestEffectSummaryList"></a>
<a id="tocSpaginatedsupercontesteffectsummarylist"></a>
<a id="tocspaginatedsupercontesteffectsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[SuperContestEffectSummary](#schemasupercontesteffectsummary)]|true|none|none|

<h2 id="tocS_PaginatedTypeSummaryList">PaginatedTypeSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedtypesummarylist"></a>
<a id="schema_PaginatedTypeSummaryList"></a>
<a id="tocSpaginatedtypesummarylist"></a>
<a id="tocspaginatedtypesummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[TypeSummary](#schematypesummary)]|true|none|none|

<h2 id="tocS_PaginatedVersionGroupSummaryList">PaginatedVersionGroupSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedversiongroupsummarylist"></a>
<a id="schema_PaginatedVersionGroupSummaryList"></a>
<a id="tocSpaginatedversiongroupsummarylist"></a>
<a id="tocspaginatedversiongroupsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[VersionGroupSummary](#schemaversiongroupsummary)]|true|none|none|

<h2 id="tocS_PaginatedVersionSummaryList">PaginatedVersionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedversionsummarylist"></a>
<a id="schema_PaginatedVersionSummaryList"></a>
<a id="tocSpaginatedversionsummarylist"></a>
<a id="tocspaginatedversionsummarylist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[VersionSummary](#schemaversionsummary)]|true|none|none|

<h2 id="tocS_PalParkAreaDetail">PalParkAreaDetail</h2>
<!-- backwards compatibility -->
<a id="schemapalparkareadetail"></a>
<a id="schema_PalParkAreaDetail"></a>
<a id="tocSpalparkareadetail"></a>
<a id="tocspalparkareadetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_encounters": [
    {
      "base_score": -2147483648,
      "rate": -2147483648,
      "pokemon_species": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|names|[[PalParkAreaName](#schemapalparkareaname)]|true|read-only|none|
|pokemon_encounters|[[PalParkEncounter](#schemapalparkencounter)]|true|read-only|none|

<h2 id="tocS_PalParkAreaName">PalParkAreaName</h2>
<!-- backwards compatibility -->
<a id="schemapalparkareaname"></a>
<a id="schema_PalParkAreaName"></a>
<a id="tocSpalparkareaname"></a>
<a id="tocspalparkareaname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PalParkAreaSummary">PalParkAreaSummary</h2>
<!-- backwards compatibility -->
<a id="schemapalparkareasummary"></a>
<a id="schema_PalParkAreaSummary"></a>
<a id="tocSpalparkareasummary"></a>
<a id="tocspalparkareasummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_PalParkEncounter">PalParkEncounter</h2>
<!-- backwards compatibility -->
<a id="schemapalparkencounter"></a>
<a id="schema_PalParkEncounter"></a>
<a id="tocSpalparkencounter"></a>
<a id="tocspalparkencounter"></a>

```json
{
  "base_score": -2147483648,
  "rate": -2147483648,
  "pokemon_species": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_score|integer \| null|false|none|none|
|rate|integer|true|none|none|
|pokemon_species|[PokemonSpeciesSummary](#schemapokemonspeciessummary)|true|none|none|

<h2 id="tocS_PokeapiMetaResponse">PokeapiMetaResponse</h2>
<!-- backwards compatibility -->
<a id="schemapokeapimetaresponse"></a>
<a id="schema_PokeapiMetaResponse"></a>
<a id="tocSpokeapimetaresponse"></a>
<a id="tocspokeapimetaresponse"></a>

```json
{
  "deploy_date": "string",
  "hash": "string",
  "tag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploy_date|string \| null|true|none|none|
|hash|string \| null|true|none|none|
|tag|string \| null|true|none|none|

<h2 id="tocS_PokeathlonStatAffectingNature">PokeathlonStatAffectingNature</h2>
<!-- backwards compatibility -->
<a id="schemapokeathlonstataffectingnature"></a>
<a id="schema_PokeathlonStatAffectingNature"></a>
<a id="tocSpokeathlonstataffectingnature"></a>
<a id="tocspokeathlonstataffectingnature"></a>

```json
{
  "max_change": -2147483648,
  "nature": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_change|integer|true|none|none|
|nature|[NatureSummary](#schemanaturesummary)|true|none|none|

<h2 id="tocS_PokeathlonStatAffectingNatures">PokeathlonStatAffectingNatures</h2>
<!-- backwards compatibility -->
<a id="schemapokeathlonstataffectingnatures"></a>
<a id="schema_PokeathlonStatAffectingNatures"></a>
<a id="tocSpokeathlonstataffectingnatures"></a>
<a id="tocspokeathlonstataffectingnatures"></a>

```json
{
  "increase": [
    {
      "max_change": -2147483648,
      "nature": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "decrease": [
    {
      "max_change": -2147483648,
      "nature": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|increase|[[PokeathlonStatAffectingNature](#schemapokeathlonstataffectingnature)]|true|none|none|
|decrease|[[PokeathlonStatAffectingNature](#schemapokeathlonstataffectingnature)]|true|none|none|

<h2 id="tocS_PokeathlonStatDetail">PokeathlonStatDetail</h2>
<!-- backwards compatibility -->
<a id="schemapokeathlonstatdetail"></a>
<a id="schema_PokeathlonStatDetail"></a>
<a id="tocSpokeathlonstatdetail"></a>
<a id="tocspokeathlonstatdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "affecting_natures": {
    "increase": [
      {
        "max_change": -2147483648,
        "nature": {
          "name": "string",
          "url": "http://example.com"
        }
      }
    ],
    "decrease": [
      {
        "max_change": -2147483648,
        "nature": {
          "name": "string",
          "url": "http://example.com"
        }
      }
    ]
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|affecting_natures|object|true|read-only|none|
|names|[[PokeathlonStatName](#schemapokeathlonstatname)]|true|read-only|none|

<h2 id="tocS_PokeathlonStatName">PokeathlonStatName</h2>
<!-- backwards compatibility -->
<a id="schemapokeathlonstatname"></a>
<a id="schema_PokeathlonStatName"></a>
<a id="tocSpokeathlonstatname"></a>
<a id="tocspokeathlonstatname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokeathlonStatSummary">PokeathlonStatSummary</h2>
<!-- backwards compatibility -->
<a id="schemapokeathlonstatsummary"></a>
<a id="schema_PokeathlonStatSummary"></a>
<a id="tocSpokeathlonstatsummary"></a>
<a id="tocspokeathlonstatsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_PokedexDescription">PokedexDescription</h2>
<!-- backwards compatibility -->
<a id="schemapokedexdescription"></a>
<a id="schema_PokedexDescription"></a>
<a id="tocSpokedexdescription"></a>
<a id="tocspokedexdescription"></a>

```json
{
  "description": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokedexDetail">PokedexDetail</h2>
<!-- backwards compatibility -->
<a id="schemapokedexdetail"></a>
<a id="schema_PokedexDetail"></a>
<a id="tocSpokedexdetail"></a>
<a id="tocspokedexdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "is_main_series": true,
  "descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_entries": [
    {
      "entry_number": 0,
      "pokemon_species": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "region": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_groups": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|is_main_series|boolean|false|none|none|
|descriptions|[[PokedexDescription](#schemapokedexdescription)]|true|read-only|none|
|names|[[PokedexName](#schemapokedexname)]|true|read-only|none|
|pokemon_entries|[[PokemonDexNumber](#schemapokemondexnumber)]|true|read-only|none|
|region|[RegionSummary](#schemaregionsummary)|true|none|none|
|version_groups|[[VersionGroupSummary](#schemaversiongroupsummary)]|true|read-only|none|

<h2 id="tocS_PokedexName">PokedexName</h2>
<!-- backwards compatibility -->
<a id="schemapokedexname"></a>
<a id="schema_PokedexName"></a>
<a id="tocSpokedexname"></a>
<a id="tocspokedexname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokedexSummary">PokedexSummary</h2>
<!-- backwards compatibility -->
<a id="schemapokedexsummary"></a>
<a id="schema_PokedexSummary"></a>
<a id="tocSpokedexsummary"></a>
<a id="tocspokedexsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_PokemonAbility">PokemonAbility</h2>
<!-- backwards compatibility -->
<a id="schemapokemonability"></a>
<a id="schema_PokemonAbility"></a>
<a id="tocSpokemonability"></a>
<a id="tocspokemonability"></a>

```json
{
  "is_hidden": true,
  "slot": -2147483648,
  "ability": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_hidden|boolean|false|none|none|
|slot|integer|true|none|none|
|ability|[AbilitySummary](#schemaabilitysummary)|true|none|none|

<h2 id="tocS_PokemonAbilityPast">PokemonAbilityPast</h2>
<!-- backwards compatibility -->
<a id="schemapokemonabilitypast"></a>
<a id="schema_PokemonAbilityPast"></a>
<a id="tocSpokemonabilitypast"></a>
<a id="tocspokemonabilitypast"></a>

```json
{
  "is_hidden": true,
  "slot": -2147483648,
  "ability": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_hidden|boolean|false|none|none|
|slot|integer|true|none|none|
|ability|[AbilitySummary](#schemaabilitysummary)|true|none|none|

<h2 id="tocS_PokemonColorDetail">PokemonColorDetail</h2>
<!-- backwards compatibility -->
<a id="schemapokemoncolordetail"></a>
<a id="schema_PokemonColorDetail"></a>
<a id="tocSpokemoncolordetail"></a>
<a id="tocspokemoncolordetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|names|[[PokemonColorName](#schemapokemoncolorname)]|true|read-only|none|
|pokemon_species|[[PokemonSpeciesSummary](#schemapokemonspeciessummary)]|true|read-only|none|

<h2 id="tocS_PokemonColorName">PokemonColorName</h2>
<!-- backwards compatibility -->
<a id="schemapokemoncolorname"></a>
<a id="schema_PokemonColorName"></a>
<a id="tocSpokemoncolorname"></a>
<a id="tocspokemoncolorname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokemonColorSummary">PokemonColorSummary</h2>
<!-- backwards compatibility -->
<a id="schemapokemoncolorsummary"></a>
<a id="schema_PokemonColorSummary"></a>
<a id="tocSpokemoncolorsummary"></a>
<a id="tocspokemoncolorsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_PokemonCries">PokemonCries</h2>
<!-- backwards compatibility -->
<a id="schemapokemoncries"></a>
<a id="schema_PokemonCries"></a>
<a id="tocSpokemoncries"></a>
<a id="tocspokemoncries"></a>

```json
{
  "latest": "string",
  "legacy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latest|string \| null|true|none|none|
|legacy|string \| null|true|none|none|

<h2 id="tocS_PokemonDetail">PokemonDetail</h2>
<!-- backwards compatibility -->
<a id="schemapokemondetail"></a>
<a id="schema_PokemonDetail"></a>
<a id="tocSpokemondetail"></a>
<a id="tocspokemondetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "base_experience": -2147483648,
  "height": -2147483648,
  "is_default": true,
  "order": -2147483648,
  "weight": -2147483648,
  "abilities": [
    {
      "is_hidden": true,
      "slot": -2147483648,
      "ability": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "past_abilities": [
    {
      "abilities": [
        {
          "is_hidden": true,
          "slot": -2147483648,
          "ability": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ],
      "generation": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "forms": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "game_indices": [
    {
      "game_index": -2147483648,
      "version": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "held_items": [
    {
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_details": [
        {
          "rarity": 0,
          "version": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "location_area_encounters": "string",
  "moves": [
    {
      "move": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "string",
            "url": "http://example.com"
          },
          "version_group": {
            "name": "string",
            "url": "http://example.com"
          },
          "order": 0
        }
      ]
    }
  ],
  "species": {
    "name": "string",
    "url": "http://example.com"
  },
  "sprites": {
    "front_default": "string"
  },
  "cries": {
    "latest": "string",
    "legacy": "string"
  },
  "stats": [
    {
      "base_stat": -2147483648,
      "effort": -2147483648,
      "stat": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "past_stats": [
    {
      "generation": {
        "name": "string",
        "url": "http://example.com"
      },
      "stats": [
        {
          "base_stat": -2147483648,
          "effort": -2147483648,
          "stat": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ],
  "types": [
    {
      "slot": -2147483648,
      "type": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "past_types": [
    {
      "generation": {
        "name": "string",
        "url": "http://example.com"
      },
      "types": [
        {
          "slot": -2147483648,
          "pokemon": {
            "name": "string",
            "url": "http://example.com"
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|base_experience|integer \| null|false|none|none|
|height|integer \| null|false|none|none|
|is_default|boolean|false|none|none|
|order|integer \| null|false|none|none|
|weight|integer \| null|false|none|none|
|abilities|[[PokemonAbility](#schemapokemonability)]|true|read-only|none|
|past_abilities|[[PokemonPastAbility](#schemapokemonpastability)]|true|read-only|none|
|forms|[[PokemonFormSummary](#schemapokemonformsummary)]|true|read-only|none|
|game_indices|[[PokemonGameIndex](#schemapokemongameindex)]|true|read-only|none|
|held_items|[[PokemonHeldItem](#schemapokemonhelditem)]|true|read-only|none|
|location_area_encounters|string|true|read-only|none|
|moves|[[PokemonMove](#schemapokemonmove)]|true|read-only|none|
|species|[PokemonSpeciesSummary](#schemapokemonspeciessummary)|true|none|none|
|sprites|object|true|read-only|none|
|cries|object|true|read-only|none|
|stats|[[PokemonStat](#schemapokemonstat)]|true|read-only|none|
|past_stats|[[PokemonPastStat](#schemapokemonpaststat)]|true|read-only|none|
|types|[[PokemonType](#schemapokemontype)]|true|read-only|none|
|past_types|[[PokemonPastType](#schemapokemonpasttype)]|true|read-only|none|

<h2 id="tocS_PokemonDexEntry">PokemonDexEntry</h2>
<!-- backwards compatibility -->
<a id="schemapokemondexentry"></a>
<a id="schema_PokemonDexEntry"></a>
<a id="tocSpokemondexentry"></a>
<a id="tocspokemondexentry"></a>

```json
{
  "entry_number": 0,
  "pokedex": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entry_number|integer|true|none|none|
|pokedex|[PokedexSummary](#schemapokedexsummary)|true|none|none|

<h2 id="tocS_PokemonDexNumber">PokemonDexNumber</h2>
<!-- backwards compatibility -->
<a id="schemapokemondexnumber"></a>
<a id="schema_PokemonDexNumber"></a>
<a id="tocSpokemondexnumber"></a>
<a id="tocspokemondexnumber"></a>

```json
{
  "entry_number": 0,
  "pokemon_species": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entry_number|integer|true|none|none|
|pokemon_species|[PokemonSpeciesSummary](#schemapokemonspeciessummary)|true|none|none|

<h2 id="tocS_PokemonEncounterDetailResponse">PokemonEncounterDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemapokemonencounterdetailresponse"></a>
<a id="schema_PokemonEncounterDetailResponse"></a>
<a id="tocSpokemonencounterdetailresponse"></a>
<a id="tocspokemonencounterdetailresponse"></a>

```json
{
  "chance": 0,
  "condition_values": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "max_level": 0,
  "method": {
    "name": "string",
    "url": "http://example.com"
  },
  "min_level": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chance|integer|true|none|none|
|condition_values|[[EncounterConditionValueSummary](#schemaencounterconditionvaluesummary)]|true|none|none|
|max_level|integer|true|none|none|
|method|[EncounterMethodSummary](#schemaencountermethodsummary)|true|none|none|
|min_level|integer|true|none|none|

<h2 id="tocS_PokemonEncounterResponse">PokemonEncounterResponse</h2>
<!-- backwards compatibility -->
<a id="schemapokemonencounterresponse"></a>
<a id="schema_PokemonEncounterResponse"></a>
<a id="tocSpokemonencounterresponse"></a>
<a id="tocspokemonencounterresponse"></a>

```json
{
  "location_area": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_details": [
    {
      "version": {
        "name": "string",
        "url": "http://example.com"
      },
      "max_chance": 0,
      "encounter_details": [
        {
          "chance": 0,
          "condition_values": [
            {
              "name": "string",
              "url": "http://example.com"
            }
          ],
          "max_level": 0,
          "method": {
            "name": "string",
            "url": "http://example.com"
          },
          "min_level": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location_area|[LocationAreaSummary](#schemalocationareasummary)|true|none|none|
|version_details|[[PokemonEncounterVersionDetailResponse](#schemapokemonencounterversiondetailresponse)]|true|none|none|

<h2 id="tocS_PokemonEncounterVersionDetailResponse">PokemonEncounterVersionDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemapokemonencounterversiondetailresponse"></a>
<a id="schema_PokemonEncounterVersionDetailResponse"></a>
<a id="tocSpokemonencounterversiondetailresponse"></a>
<a id="tocspokemonencounterversiondetailresponse"></a>

```json
{
  "version": {
    "name": "string",
    "url": "http://example.com"
  },
  "max_chance": 0,
  "encounter_details": [
    {
      "chance": 0,
      "condition_values": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "max_level": 0,
      "method": {
        "name": "string",
        "url": "http://example.com"
      },
      "min_level": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|[VersionSummary](#schemaversionsummary)|true|none|none|
|max_chance|integer|true|none|none|
|encounter_details|[[PokemonEncounterDetailResponse](#schemapokemonencounterdetailresponse)]|true|none|none|

<h2 id="tocS_PokemonEvolution">PokemonEvolution</h2>
<!-- backwards compatibility -->
<a id="schemapokemonevolution"></a>
<a id="schema_PokemonEvolution"></a>
<a id="tocSpokemonevolution"></a>
<a id="tocspokemonevolution"></a>

```json
{
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "is_default": true,
  "item": {
    "name": "string",
    "url": "http://example.com"
  },
  "trigger": {
    "name": "string",
    "url": "http://example.com"
  },
  "gender": 0,
  "held_item": {
    "name": "string",
    "url": "http://example.com"
  },
  "known_move": {
    "name": "string",
    "url": "http://example.com"
  },
  "known_move_type": {
    "name": "string",
    "url": "http://example.com"
  },
  "location": {
    "name": "string",
    "url": "http://example.com"
  },
  "min_level": -2147483648,
  "min_happiness": -2147483648,
  "min_beauty": -2147483648,
  "min_affection": -2147483648,
  "near_special_rock": true,
  "needs_multiplayer": true,
  "needs_overworld_rain": true,
  "party_species": {
    "name": "string",
    "url": "http://example.com"
  },
  "party_type": {
    "name": "string",
    "url": "http://example.com"
  },
  "relative_physical_stats": -2147483648,
  "time_of_day": "string",
  "trade_species": {
    "name": "string",
    "url": "http://example.com"
  },
  "turn_upside_down": true,
  "region": {
    "name": "string",
    "url": "http://example.com"
  },
  "required_pokemon_form": {
    "name": "string",
    "url": "http://example.com"
  },
  "evolved_pokemon_form": {
    "name": "string",
    "url": "http://example.com"
  },
  "used_move": {
    "name": "string",
    "url": "http://example.com"
  },
  "min_move_count": -2147483648,
  "min_steps": -2147483648,
  "min_damage_taken": -2147483648,
  "allowed_natures": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "condition_expression": {
    "expression": "string",
    "percentage_chance": 0,
    "variables": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|
|is_default|boolean|false|none|none|
|item|[ItemSummary](#schemaitemsummary)|true|none|none|
|trigger|[EvolutionTriggerSummary](#schemaevolutiontriggersummary)|true|none|none|
|gender|integer \| null|false|none|none|
|held_item|[ItemSummary](#schemaitemsummary)|true|none|none|
|known_move|[MoveSummary](#schemamovesummary)|true|none|none|
|known_move_type|[TypeSummary](#schematypesummary)|true|none|none|
|location|[LocationSummary](#schemalocationsummary)|true|none|none|
|min_level|integer \| null|false|none|none|
|min_happiness|integer \| null|false|none|none|
|min_beauty|integer \| null|false|none|none|
|min_affection|integer \| null|false|none|none|
|near_special_rock|boolean|false|none|none|
|needs_multiplayer|boolean|false|none|none|
|needs_overworld_rain|boolean|false|none|none|
|party_species|[PokemonSpeciesSummary](#schemapokemonspeciessummary)|true|none|none|
|party_type|[TypeSummary](#schematypesummary)|true|none|none|
|relative_physical_stats|integer \| null|false|none|none|
|time_of_day|string|false|none|none|
|trade_species|[PokemonSpeciesSummary](#schemapokemonspeciessummary)|true|none|none|
|turn_upside_down|boolean|false|none|none|
|region|[RegionSummary](#schemaregionsummary)|true|none|none|
|required_pokemon_form|[PokemonFormSummary](#schemapokemonformsummary)|true|none|none|
|evolved_pokemon_form|[PokemonFormSummary](#schemapokemonformsummary)|true|none|none|
|used_move|[MoveSummary](#schemamovesummary)|true|none|none|
|min_move_count|integer \| null|false|none|none|
|min_steps|integer \| null|false|none|none|
|min_damage_taken|integer \| null|false|none|none|
|allowed_natures|[[NatureSummary](#schemanaturesummary)]|true|read-only|none|
|condition_expression|[EvolutionConditionExpression](#schemaevolutionconditionexpression) \| null|true|read-only|none|

<h2 id="tocS_PokemonFormDetail">PokemonFormDetail</h2>
<!-- backwards compatibility -->
<a id="schemapokemonformdetail"></a>
<a id="schema_PokemonFormDetail"></a>
<a id="tocSpokemonformdetail"></a>
<a id="tocspokemonformdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "order": -2147483648,
  "form_order": -2147483648,
  "is_default": true,
  "is_battle_only": true,
  "is_mega": true,
  "form_name": "string",
  "pokemon": {
    "name": "string",
    "url": "http://example.com"
  },
  "sprites": {
    "sprites": null
  },
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "form_names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "types": [
    {
      "slot": -2147483648,
      "type": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "trigger_conditions": [
    {
      "trigger": "string",
      "base_form": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      },
      "version": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|order|integer \| null|false|none|none|
|form_order|integer \| null|false|none|none|
|is_default|boolean|false|none|none|
|is_battle_only|boolean|false|none|none|
|is_mega|boolean|false|none|none|
|form_name|string|true|none|none|
|pokemon|[PokemonSummary](#schemapokemonsummary)|true|none|none|
|sprites|object|true|read-only|none|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|
|form_names|[[PokemonFormName](#schemapokemonformname)]|true|read-only|none|
|names|[[PokemonFormName](#schemapokemonformname)]|true|read-only|none|
|types|[[PokemonFormType](#schemapokemonformtype)]|true|read-only|none|
|trigger_conditions|[[PokemonFormTriggerCondition](#schemapokemonformtriggercondition)]|true|read-only|none|
|flavor_text_entries|[[PokemonFormFlavorText](#schemapokemonformflavortext)]|true|read-only|none|

<h2 id="tocS_PokemonFormFlavorText">PokemonFormFlavorText</h2>
<!-- backwards compatibility -->
<a id="schemapokemonformflavortext"></a>
<a id="schema_PokemonFormFlavorText"></a>
<a id="tocSpokemonformflavortext"></a>
<a id="tocspokemonformflavortext"></a>

```json
{
  "flavor_text": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  },
  "version": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flavor_text|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|
|version|[VersionSummary](#schemaversionsummary)|true|none|none|

<h2 id="tocS_PokemonFormName">PokemonFormName</h2>
<!-- backwards compatibility -->
<a id="schemapokemonformname"></a>
<a id="schema_PokemonFormName"></a>
<a id="tocSpokemonformname"></a>
<a id="tocspokemonformname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokemonFormSprites">PokemonFormSprites</h2>
<!-- backwards compatibility -->
<a id="schemapokemonformsprites"></a>
<a id="schema_PokemonFormSprites"></a>
<a id="tocSpokemonformsprites"></a>
<a id="tocspokemonformsprites"></a>

```json
{
  "sprites": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sprites|object|true|none|none|

<h2 id="tocS_PokemonFormSummary">PokemonFormSummary</h2>
<!-- backwards compatibility -->
<a id="schemapokemonformsummary"></a>
<a id="schema_PokemonFormSummary"></a>
<a id="tocSpokemonformsummary"></a>
<a id="tocspokemonformsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_PokemonFormTriggerCondition">PokemonFormTriggerCondition</h2>
<!-- backwards compatibility -->
<a id="schemapokemonformtriggercondition"></a>
<a id="schema_PokemonFormTriggerCondition"></a>
<a id="tocSpokemonformtriggercondition"></a>
<a id="tocspokemonformtriggercondition"></a>

```json
{
  "trigger": "string",
  "base_form": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trigger|string|true|none|none|
|base_form|[PokemonFormSummary](#schemapokemonformsummary)|true|none|none|

<h2 id="tocS_PokemonFormType">PokemonFormType</h2>
<!-- backwards compatibility -->
<a id="schemapokemonformtype"></a>
<a id="schema_PokemonFormType"></a>
<a id="tocSpokemonformtype"></a>
<a id="tocspokemonformtype"></a>

```json
{
  "slot": -2147483648,
  "type": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slot|integer|true|none|none|
|type|[TypeSummary](#schematypesummary)|true|none|none|

<h2 id="tocS_PokemonGameIndex">PokemonGameIndex</h2>
<!-- backwards compatibility -->
<a id="schemapokemongameindex"></a>
<a id="schema_PokemonGameIndex"></a>
<a id="tocSpokemongameindex"></a>
<a id="tocspokemongameindex"></a>

```json
{
  "game_index": -2147483648,
  "version": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|game_index|integer|true|none|none|
|version|[VersionSummary](#schemaversionsummary)|true|none|none|

<h2 id="tocS_PokemonHabitatDetail">PokemonHabitatDetail</h2>
<!-- backwards compatibility -->
<a id="schemapokemonhabitatdetail"></a>
<a id="schema_PokemonHabitatDetail"></a>
<a id="tocSpokemonhabitatdetail"></a>
<a id="tocspokemonhabitatdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|names|[[PokemonHabitatName](#schemapokemonhabitatname)]|true|read-only|none|
|pokemon_species|[[PokemonSpeciesSummary](#schemapokemonspeciessummary)]|true|read-only|none|

<h2 id="tocS_PokemonHabitatName">PokemonHabitatName</h2>
<!-- backwards compatibility -->
<a id="schemapokemonhabitatname"></a>
<a id="schema_PokemonHabitatName"></a>
<a id="tocSpokemonhabitatname"></a>
<a id="tocspokemonhabitatname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokemonHabitatSummary">PokemonHabitatSummary</h2>
<!-- backwards compatibility -->
<a id="schemapokemonhabitatsummary"></a>
<a id="schema_PokemonHabitatSummary"></a>
<a id="tocSpokemonhabitatsummary"></a>
<a id="tocspokemonhabitatsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_PokemonHeldItem">PokemonHeldItem</h2>
<!-- backwards compatibility -->
<a id="schemapokemonhelditem"></a>
<a id="schema_PokemonHeldItem"></a>
<a id="tocSpokemonhelditem"></a>
<a id="tocspokemonhelditem"></a>

```json
{
  "pokemon": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_details": [
    {
      "rarity": 0,
      "version": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pokemon|[PokemonSummary](#schemapokemonsummary)|true|none|none|
|version_details|[[PokemonHeldItemVersion](#schemapokemonhelditemversion)]|true|none|none|

<h2 id="tocS_PokemonHeldItemVersion">PokemonHeldItemVersion</h2>
<!-- backwards compatibility -->
<a id="schemapokemonhelditemversion"></a>
<a id="schema_PokemonHeldItemVersion"></a>
<a id="tocSpokemonhelditemversion"></a>
<a id="tocspokemonhelditemversion"></a>

```json
{
  "rarity": 0,
  "version": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rarity|integer|true|none|none|
|version|[VersionSummary](#schemaversionsummary)|true|none|none|

<h2 id="tocS_PokemonMove">PokemonMove</h2>
<!-- backwards compatibility -->
<a id="schemapokemonmove"></a>
<a id="schema_PokemonMove"></a>
<a id="tocSpokemonmove"></a>
<a id="tocspokemonmove"></a>

```json
{
  "move": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_group_details": [
    {
      "level_learned_at": 0,
      "move_learn_method": {
        "name": "string",
        "url": "http://example.com"
      },
      "version_group": {
        "name": "string",
        "url": "http://example.com"
      },
      "order": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|move|[MoveSummary](#schemamovesummary)|true|none|none|
|version_group_details|[[PokemonMoveVersionGroup](#schemapokemonmoveversiongroup)]|true|none|none|

<h2 id="tocS_PokemonMoveVersionGroup">PokemonMoveVersionGroup</h2>
<!-- backwards compatibility -->
<a id="schemapokemonmoveversiongroup"></a>
<a id="schema_PokemonMoveVersionGroup"></a>
<a id="tocSpokemonmoveversiongroup"></a>
<a id="tocspokemonmoveversiongroup"></a>

```json
{
  "level_learned_at": 0,
  "move_learn_method": {
    "name": "string",
    "url": "http://example.com"
  },
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  },
  "order": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level_learned_at|integer|true|none|none|
|move_learn_method|[MoveLearnMethodSummary](#schemamovelearnmethodsummary)|true|none|none|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|
|order|integer|false|none|none|

<h2 id="tocS_PokemonPastAbility">PokemonPastAbility</h2>
<!-- backwards compatibility -->
<a id="schemapokemonpastability"></a>
<a id="schema_PokemonPastAbility"></a>
<a id="tocSpokemonpastability"></a>
<a id="tocspokemonpastability"></a>

```json
{
  "abilities": [
    {
      "is_hidden": true,
      "slot": -2147483648,
      "ability": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "generation": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abilities|[[PokemonAbilityPast](#schemapokemonabilitypast)]|true|none|none|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|

<h2 id="tocS_PokemonPastStat">PokemonPastStat</h2>
<!-- backwards compatibility -->
<a id="schemapokemonpaststat"></a>
<a id="schema_PokemonPastStat"></a>
<a id="tocSpokemonpaststat"></a>
<a id="tocspokemonpaststat"></a>

```json
{
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "stats": [
    {
      "base_stat": -2147483648,
      "effort": -2147483648,
      "stat": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|
|stats|[[PokemonStat](#schemapokemonstat)]|true|none|none|

<h2 id="tocS_PokemonPastType">PokemonPastType</h2>
<!-- backwards compatibility -->
<a id="schemapokemonpasttype"></a>
<a id="schema_PokemonPastType"></a>
<a id="tocSpokemonpasttype"></a>
<a id="tocspokemonpasttype"></a>

```json
{
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "types": [
    {
      "slot": -2147483648,
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|
|types|[[TypePokemon](#schematypepokemon)]|true|none|none|

<h2 id="tocS_PokemonShapeAwesomeName">PokemonShapeAwesomeName</h2>
<!-- backwards compatibility -->
<a id="schemapokemonshapeawesomename"></a>
<a id="schema_PokemonShapeAwesomeName"></a>
<a id="tocSpokemonshapeawesomename"></a>
<a id="tocspokemonshapeawesomename"></a>

```json
{
  "awesome_name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awesome_name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokemonShapeDetail">PokemonShapeDetail</h2>
<!-- backwards compatibility -->
<a id="schemapokemonshapedetail"></a>
<a id="schema_PokemonShapeDetail"></a>
<a id="tocSpokemonshapedetail"></a>
<a id="tocspokemonshapedetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "awesome_names": [
    {
      "awesome_name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|awesome_names|[[PokemonShapeAwesomeName](#schemapokemonshapeawesomename)]|true|read-only|none|
|names|[[PokemonShapeName](#schemapokemonshapename)]|true|read-only|none|
|pokemon_species|[[PokemonSpeciesSummary](#schemapokemonspeciessummary)]|true|read-only|none|

<h2 id="tocS_PokemonShapeName">PokemonShapeName</h2>
<!-- backwards compatibility -->
<a id="schemapokemonshapename"></a>
<a id="schema_PokemonShapeName"></a>
<a id="tocSpokemonshapename"></a>
<a id="tocspokemonshapename"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokemonShapeSummary">PokemonShapeSummary</h2>
<!-- backwards compatibility -->
<a id="schemapokemonshapesummary"></a>
<a id="schema_PokemonShapeSummary"></a>
<a id="tocSpokemonshapesummary"></a>
<a id="tocspokemonshapesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_PokemonSpeciesDescription">PokemonSpeciesDescription</h2>
<!-- backwards compatibility -->
<a id="schemapokemonspeciesdescription"></a>
<a id="schema_PokemonSpeciesDescription"></a>
<a id="tocSpokemonspeciesdescription"></a>
<a id="tocspokemonspeciesdescription"></a>

```json
{
  "description": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokemonSpeciesDetail">PokemonSpeciesDetail</h2>
<!-- backwards compatibility -->
<a id="schemapokemonspeciesdetail"></a>
<a id="schema_PokemonSpeciesDetail"></a>
<a id="tocSpokemonspeciesdetail"></a>
<a id="tocspokemonspeciesdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "order": -2147483648,
  "gender_rate": -2147483648,
  "capture_rate": -2147483648,
  "base_happiness": -2147483648,
  "is_baby": true,
  "is_legendary": true,
  "is_mythical": true,
  "hatch_counter": -2147483648,
  "has_gender_differences": true,
  "forms_switchable": true,
  "growth_rate": {
    "name": "string",
    "url": "http://example.com"
  },
  "pokedex_numbers": [
    {
      "entry_number": 0,
      "pokedex": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "egg_groups": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "color": {
    "name": "string",
    "url": "http://example.com"
  },
  "shape": {
    "name": "string",
    "url": "http://example.com"
  },
  "evolves_from_species": {
    "name": "string",
    "url": "http://example.com"
  },
  "evolution_chain": {
    "url": "http://example.com"
  },
  "habitat": {
    "name": "string",
    "url": "http://example.com"
  },
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pal_park_encounters": [
    {
      "base_score": -2147483648,
      "rate": -2147483648,
      "area": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "form_descriptions": [
    {
      "description": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      },
      "version": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "genera": [
    {
      "genus": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "varieties": [
    {
      "is_default": true,
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|order|integer \| null|false|none|none|
|gender_rate|integer \| null|false|none|none|
|capture_rate|integer \| null|false|none|none|
|base_happiness|integer \| null|false|none|none|
|is_baby|boolean|false|none|none|
|is_legendary|boolean|false|none|none|
|is_mythical|boolean|false|none|none|
|hatch_counter|integer \| null|false|none|none|
|has_gender_differences|boolean|false|none|none|
|forms_switchable|boolean|false|none|none|
|growth_rate|[GrowthRateSummary](#schemagrowthratesummary)|true|none|none|
|pokedex_numbers|[[PokemonDexEntry](#schemapokemondexentry)]|true|read-only|none|
|egg_groups|[[EggGroupSummary](#schemaegggroupsummary)]|true|read-only|none|
|color|[PokemonColorSummary](#schemapokemoncolorsummary)|true|none|none|
|shape|[PokemonShapeSummary](#schemapokemonshapesummary)|true|none|none|
|evolves_from_species|[PokemonSpeciesSummary](#schemapokemonspeciessummary)|true|none|none|
|evolution_chain|[EvolutionChainSummary](#schemaevolutionchainsummary)|true|none|none|
|habitat|[PokemonHabitatSummary](#schemapokemonhabitatsummary)|true|none|none|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|
|names|[[PokemonSpeciesName](#schemapokemonspeciesname)]|true|read-only|none|
|pal_park_encounters|[[PokemonSpeciesPalParkEncounter](#schemapokemonspeciespalparkencounter)]|true|read-only|none|
|form_descriptions|[[PokemonSpeciesDescription](#schemapokemonspeciesdescription)]|true|read-only|none|
|flavor_text_entries|[[PokemonSpeciesFlavorText](#schemapokemonspeciesflavortext)]|true|read-only|none|
|genera|[[PokemonSpeciesGenus](#schemapokemonspeciesgenus)]|true|read-only|none|
|varieties|[[PokemonSpeciesVariety](#schemapokemonspeciesvariety)]|true|read-only|none|

<h2 id="tocS_PokemonSpeciesFlavorText">PokemonSpeciesFlavorText</h2>
<!-- backwards compatibility -->
<a id="schemapokemonspeciesflavortext"></a>
<a id="schema_PokemonSpeciesFlavorText"></a>
<a id="tocSpokemonspeciesflavortext"></a>
<a id="tocspokemonspeciesflavortext"></a>

```json
{
  "flavor_text": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  },
  "version": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flavor_text|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|
|version|[VersionSummary](#schemaversionsummary)|true|none|none|

<h2 id="tocS_PokemonSpeciesGenus">PokemonSpeciesGenus</h2>
<!-- backwards compatibility -->
<a id="schemapokemonspeciesgenus"></a>
<a id="schema_PokemonSpeciesGenus"></a>
<a id="tocSpokemonspeciesgenus"></a>
<a id="tocspokemonspeciesgenus"></a>

```json
{
  "genus": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genus|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokemonSpeciesName">PokemonSpeciesName</h2>
<!-- backwards compatibility -->
<a id="schemapokemonspeciesname"></a>
<a id="schema_PokemonSpeciesName"></a>
<a id="tocSpokemonspeciesname"></a>
<a id="tocspokemonspeciesname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_PokemonSpeciesPalParkEncounter">PokemonSpeciesPalParkEncounter</h2>
<!-- backwards compatibility -->
<a id="schemapokemonspeciespalparkencounter"></a>
<a id="schema_PokemonSpeciesPalParkEncounter"></a>
<a id="tocSpokemonspeciespalparkencounter"></a>
<a id="tocspokemonspeciespalparkencounter"></a>

```json
{
  "base_score": -2147483648,
  "rate": -2147483648,
  "area": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_score|integer \| null|false|none|none|
|rate|integer|true|none|none|
|area|[PalParkAreaSummary](#schemapalparkareasummary)|true|none|none|

<h2 id="tocS_PokemonSpeciesSummary">PokemonSpeciesSummary</h2>
<!-- backwards compatibility -->
<a id="schemapokemonspeciessummary"></a>
<a id="schema_PokemonSpeciesSummary"></a>
<a id="tocSpokemonspeciessummary"></a>
<a id="tocspokemonspeciessummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_PokemonSpeciesVariety">PokemonSpeciesVariety</h2>
<!-- backwards compatibility -->
<a id="schemapokemonspeciesvariety"></a>
<a id="schema_PokemonSpeciesVariety"></a>
<a id="tocSpokemonspeciesvariety"></a>
<a id="tocspokemonspeciesvariety"></a>

```json
{
  "is_default": true,
  "pokemon": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_default|boolean|true|none|none|
|pokemon|[PokemonSummary](#schemapokemonsummary)|true|none|none|

<h2 id="tocS_PokemonSprites">PokemonSprites</h2>
<!-- backwards compatibility -->
<a id="schemapokemonsprites"></a>
<a id="schema_PokemonSprites"></a>
<a id="tocSpokemonsprites"></a>
<a id="tocspokemonsprites"></a>

```json
{
  "front_default": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|front_default|string \| null|true|none|none|

<h2 id="tocS_PokemonStat">PokemonStat</h2>
<!-- backwards compatibility -->
<a id="schemapokemonstat"></a>
<a id="schema_PokemonStat"></a>
<a id="tocSpokemonstat"></a>
<a id="tocspokemonstat"></a>

```json
{
  "base_stat": -2147483648,
  "effort": -2147483648,
  "stat": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_stat|integer|true|none|none|
|effort|integer|true|none|none|
|stat|[StatSummary](#schemastatsummary)|true|none|none|

<h2 id="tocS_PokemonSummary">PokemonSummary</h2>
<!-- backwards compatibility -->
<a id="schemapokemonsummary"></a>
<a id="schema_PokemonSummary"></a>
<a id="tocSpokemonsummary"></a>
<a id="tocspokemonsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_PokemonType">PokemonType</h2>
<!-- backwards compatibility -->
<a id="schemapokemontype"></a>
<a id="schema_PokemonType"></a>
<a id="tocSpokemontype"></a>
<a id="tocspokemontype"></a>

```json
{
  "slot": -2147483648,
  "type": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slot|integer|true|none|none|
|type|[TypeSummary](#schematypesummary)|true|none|none|

<h2 id="tocS_RegionDetail">RegionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaregiondetail"></a>
<a id="schema_RegionDetail"></a>
<a id="tocSregiondetail"></a>
<a id="tocsregiondetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "locations": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "main_generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokedexes": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "version_groups": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|locations|[[LocationSummary](#schemalocationsummary)]|true|read-only|none|
|main_generation|[GenerationSummary](#schemagenerationsummary) \| null|true|read-only|none|
|names|[[RegionName](#schemaregionname)]|true|read-only|none|
|pokedexes|[[PokedexSummary](#schemapokedexsummary)]|true|read-only|none|
|version_groups|[[VersionGroupSummary](#schemaversiongroupsummary)]|true|read-only|none|

<h2 id="tocS_RegionName">RegionName</h2>
<!-- backwards compatibility -->
<a id="schemaregionname"></a>
<a id="schema_RegionName"></a>
<a id="tocSregionname"></a>
<a id="tocsregionname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_RegionSummary">RegionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaregionsummary"></a>
<a id="schema_RegionSummary"></a>
<a id="tocSregionsummary"></a>
<a id="tocsregionsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_StatAffectingMoves">StatAffectingMoves</h2>
<!-- backwards compatibility -->
<a id="schemastataffectingmoves"></a>
<a id="schema_StatAffectingMoves"></a>
<a id="tocSstataffectingmoves"></a>
<a id="tocsstataffectingmoves"></a>

```json
{
  "increase": [
    {
      "change": -2147483648,
      "move": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "decrease": [
    {
      "change": -2147483648,
      "move": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|increase|[[MoveStatChange](#schemamovestatchange)]|true|none|none|
|decrease|[[MoveStatChange](#schemamovestatchange)]|true|none|none|

<h2 id="tocS_StatAffectingNatures">StatAffectingNatures</h2>
<!-- backwards compatibility -->
<a id="schemastataffectingnatures"></a>
<a id="schema_StatAffectingNatures"></a>
<a id="tocSstataffectingnatures"></a>
<a id="tocsstataffectingnatures"></a>

```json
{
  "increase": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "decrease": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|increase|[[NatureSummary](#schemanaturesummary)]|true|none|none|
|decrease|[[NatureSummary](#schemanaturesummary)]|true|none|none|

<h2 id="tocS_StatDetail">StatDetail</h2>
<!-- backwards compatibility -->
<a id="schemastatdetail"></a>
<a id="schema_StatDetail"></a>
<a id="tocSstatdetail"></a>
<a id="tocsstatdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "game_index": -2147483648,
  "is_battle_only": true,
  "affecting_moves": {
    "increase": [
      {
        "change": -2147483648,
        "move": {
          "name": "string",
          "url": "http://example.com"
        }
      }
    ],
    "decrease": [
      {
        "change": -2147483648,
        "move": {
          "name": "string",
          "url": "http://example.com"
        }
      }
    ]
  },
  "affecting_natures": {
    "increase": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "decrease": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ]
  },
  "affecting_items": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "characteristics": [
    {
      "url": "http://example.com"
    }
  ],
  "move_damage_class": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|game_index|integer|true|none|none|
|is_battle_only|boolean|false|none|none|
|affecting_moves|object|true|read-only|none|
|affecting_natures|object|true|read-only|none|
|affecting_items|[[ItemSummary](#schemaitemsummary)]|true|read-only|none|
|characteristics|[[CharacteristicSummary](#schemacharacteristicsummary)]|true|read-only|none|
|move_damage_class|[MoveDamageClassSummary](#schemamovedamageclasssummary)|true|none|none|
|names|[[StatName](#schemastatname)]|true|read-only|none|

<h2 id="tocS_StatName">StatName</h2>
<!-- backwards compatibility -->
<a id="schemastatname"></a>
<a id="schema_StatName"></a>
<a id="tocSstatname"></a>
<a id="tocsstatname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_StatSummary">StatSummary</h2>
<!-- backwards compatibility -->
<a id="schemastatsummary"></a>
<a id="schema_StatSummary"></a>
<a id="tocSstatsummary"></a>
<a id="tocsstatsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_SuperContestEffectDetail">SuperContestEffectDetail</h2>
<!-- backwards compatibility -->
<a id="schemasupercontesteffectdetail"></a>
<a id="schema_SuperContestEffectDetail"></a>
<a id="tocSsupercontesteffectdetail"></a>
<a id="tocssupercontesteffectdetail"></a>

```json
{
  "id": 0,
  "appeal": -2147483648,
  "flavor_text_entries": [
    {
      "flavor_text": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|appeal|integer|true|none|none|
|flavor_text_entries|[[SuperContestEffectFlavorText](#schemasupercontesteffectflavortext)]|true|read-only|none|
|moves|[[MoveSummary](#schemamovesummary)]|true|read-only|none|

<h2 id="tocS_SuperContestEffectFlavorText">SuperContestEffectFlavorText</h2>
<!-- backwards compatibility -->
<a id="schemasupercontesteffectflavortext"></a>
<a id="schema_SuperContestEffectFlavorText"></a>
<a id="tocSsupercontesteffectflavortext"></a>
<a id="tocssupercontesteffectflavortext"></a>

```json
{
  "flavor_text": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flavor_text|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_SuperContestEffectSummary">SuperContestEffectSummary</h2>
<!-- backwards compatibility -->
<a id="schemasupercontesteffectsummary"></a>
<a id="schema_SuperContestEffectSummary"></a>
<a id="tocSsupercontesteffectsummary"></a>
<a id="tocssupercontesteffectsummary"></a>

```json
{
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_TypeDetail">TypeDetail</h2>
<!-- backwards compatibility -->
<a id="schematypedetail"></a>
<a id="schema_TypeDetail"></a>
<a id="tocStypedetail"></a>
<a id="tocstypedetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "damage_relations": {
    "no_damage_to": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "half_damage_to": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "double_damage_to": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "no_damage_from": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "half_damage_from": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "double_damage_from": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ]
  },
  "past_damage_relations": [
    {
      "generation": {
        "name": "string",
        "url": "http://example.com"
      },
      "damage_relations": {
        "no_damage_to": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "half_damage_to": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "double_damage_to": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "no_damage_from": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "half_damage_from": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ],
        "double_damage_from": [
          {
            "name": "string",
            "url": "http://example.com"
          }
        ]
      }
    }
  ],
  "game_indices": [
    {
      "game_index": -2147483648,
      "generation": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "move_damage_class": {
    "name": "string",
    "url": "http://example.com"
  },
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "pokemon": [
    {
      "slot": -2147483648,
      "pokemon": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "moves": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "sprites": {
    "sprites": null
  }
}
```

Serializer for the Type resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|damage_relations|object|true|read-only|none|
|past_damage_relations|[[TypePastRelationships](#schematypepastrelationships)]|true|read-only|none|
|game_indices|[[TypeGameIndex](#schematypegameindex)]|true|read-only|none|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|
|move_damage_class|[MoveDamageClassSummary](#schemamovedamageclasssummary)|true|none|none|
|names|[[TypeName](#schematypename)]|true|read-only|none|
|pokemon|[[TypePokemon](#schematypepokemon)]|true|read-only|none|
|moves|[[MoveSummary](#schemamovesummary)]|true|read-only|none|
|sprites|object|true|read-only|none|

<h2 id="tocS_TypeGameIndex">TypeGameIndex</h2>
<!-- backwards compatibility -->
<a id="schematypegameindex"></a>
<a id="schema_TypeGameIndex"></a>
<a id="tocStypegameindex"></a>
<a id="tocstypegameindex"></a>

```json
{
  "game_index": -2147483648,
  "generation": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|game_index|integer|true|none|none|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|

<h2 id="tocS_TypeName">TypeName</h2>
<!-- backwards compatibility -->
<a id="schematypename"></a>
<a id="schema_TypeName"></a>
<a id="tocStypename"></a>
<a id="tocstypename"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_TypePastRelationships">TypePastRelationships</h2>
<!-- backwards compatibility -->
<a id="schematypepastrelationships"></a>
<a id="schema_TypePastRelationships"></a>
<a id="tocStypepastrelationships"></a>
<a id="tocstypepastrelationships"></a>

```json
{
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "damage_relations": {
    "no_damage_to": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "half_damage_to": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "double_damage_to": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "no_damage_from": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "half_damage_from": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "double_damage_from": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|
|damage_relations|[TypeRelationships](#schematyperelationships)|true|none|none|

<h2 id="tocS_TypePokemon">TypePokemon</h2>
<!-- backwards compatibility -->
<a id="schematypepokemon"></a>
<a id="schema_TypePokemon"></a>
<a id="tocStypepokemon"></a>
<a id="tocstypepokemon"></a>

```json
{
  "slot": -2147483648,
  "pokemon": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slot|integer|true|none|none|
|pokemon|[PokemonSummary](#schemapokemonsummary)|true|none|none|

<h2 id="tocS_TypeRelationships">TypeRelationships</h2>
<!-- backwards compatibility -->
<a id="schematyperelationships"></a>
<a id="schema_TypeRelationships"></a>
<a id="tocStyperelationships"></a>
<a id="tocstyperelationships"></a>

```json
{
  "no_damage_to": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "half_damage_to": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "double_damage_to": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "no_damage_from": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "half_damage_from": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "double_damage_from": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|no_damage_to|[[TypeSummary](#schematypesummary)]|true|none|none|
|half_damage_to|[[TypeSummary](#schematypesummary)]|true|none|none|
|double_damage_to|[[TypeSummary](#schematypesummary)]|true|none|none|
|no_damage_from|[[TypeSummary](#schematypesummary)]|true|none|none|
|half_damage_from|[[TypeSummary](#schematypesummary)]|true|none|none|
|double_damage_from|[[TypeSummary](#schematypesummary)]|true|none|none|

<h2 id="tocS_TypeSprite">TypeSprite</h2>
<!-- backwards compatibility -->
<a id="schematypesprite"></a>
<a id="schema_TypeSprite"></a>
<a id="tocStypesprite"></a>
<a id="tocstypesprite"></a>

```json
{
  "sprites": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sprites|object|true|none|none|

<h2 id="tocS_TypeSummary">TypeSummary</h2>
<!-- backwards compatibility -->
<a id="schematypesummary"></a>
<a id="schema_TypeSummary"></a>
<a id="tocStypesummary"></a>
<a id="tocstypesummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_VersionDetail">VersionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaversiondetail"></a>
<a id="schema_VersionDetail"></a>
<a id="tocSversiondetail"></a>
<a id="tocsversiondetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "names": [
    {
      "name": "string",
      "language": {
        "name": "string",
        "url": "http://example.com"
      }
    }
  ],
  "version_group": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

Should have a link to Version Group info but the Circular
dependency and compilation order fight eachother and I'm
not sure how to add anything other than a hyperlink

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|names|[[VersionName](#schemaversionname)]|true|read-only|none|
|version_group|[VersionGroupSummary](#schemaversiongroupsummary)|true|none|none|

<h2 id="tocS_VersionGroupDetail">VersionGroupDetail</h2>
<!-- backwards compatibility -->
<a id="schemaversiongroupdetail"></a>
<a id="schema_VersionGroupDetail"></a>
<a id="tocSversiongroupdetail"></a>
<a id="tocsversiongroupdetail"></a>

```json
{
  "id": 0,
  "name": "string",
  "order": -2147483648,
  "generation": {
    "name": "string",
    "url": "http://example.com"
  },
  "move_learn_methods": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "pokedexes": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "regions": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "versions": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|
|order|integer \| null|false|none|none|
|generation|[GenerationSummary](#schemagenerationsummary)|true|none|none|
|move_learn_methods|[[MoveLearnMethodSummary](#schemamovelearnmethodsummary)]|true|read-only|none|
|pokedexes|[[PokedexSummary](#schemapokedexsummary)]|true|read-only|none|
|regions|[[RegionSummary](#schemaregionsummary)]|true|read-only|none|
|versions|[[VersionSummary](#schemaversionsummary)]|true|read-only|none|

<h2 id="tocS_VersionGroupSummary">VersionGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemaversiongroupsummary"></a>
<a id="schema_VersionGroupSummary"></a>
<a id="tocSversiongroupsummary"></a>
<a id="tocsversiongroupsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|

<h2 id="tocS_VersionName">VersionName</h2>
<!-- backwards compatibility -->
<a id="schemaversionname"></a>
<a id="schema_VersionName"></a>
<a id="tocSversionname"></a>
<a id="tocsversionname"></a>

```json
{
  "name": "string",
  "language": {
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|language|[LanguageSummary](#schemalanguagesummary)|true|none|none|

<h2 id="tocS_VersionSummary">VersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaversionsummary"></a>
<a id="schema_VersionSummary"></a>
<a id="tocSversionsummary"></a>
<a id="tocsversionsummary"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|read-only|none|
