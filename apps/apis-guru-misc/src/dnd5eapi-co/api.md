<h1 id="dd-5e-api">D&amp;D 5e API v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction

Welcome to the dnd5eapi, the Dungeons & Dragons 5th Edition API!
This documentation should help you familiarize yourself with the resources
available and how to consume them with HTTP requests. Read through the getting
started section before you dive in. Most of your problems should be solved
just by reading through it.

## Getting Started

Let's make our first API request to the D&D 5th Edition API!

Open up a terminal and use [curl](http://curl.haxx.se/) or [httpie](http://httpie.org/)
to make an API request for a resource. You can also scroll through the
definitions below and send requests directly from the endpoint documentation!

For example, if you paste and run this `curl` command:
```bash
curl -X GET "https://www.dnd5eapi.co/api/ability-scores/cha" -H "Accept: application/json"
```

We should see a result containing details about the Charisma ability score:
```bash
{
  "index": "cha",
  "name": "CHA",
  "full_name": "Charisma",
  "desc": [
    "Charisma measures your ability to interact effectively with others. It
      includes such factors as confidence and eloquence, and it can represent
      a charming or commanding personality.",
    "A Charisma check might arise when you try to influence or entertain
      others, when you try to make an impression or tell a convincing lie,
      or when you are navigating a tricky social situation. The Deception,
      Intimidation, Performance, and Persuasion skills reflect aptitude in
      certain kinds of Charisma checks."
  ],
  "skills": [
    {
      "name": "Deception",
      "index": "deception",
      "url": "/api/skills/deception"
    },
    {
      "name": "Intimidation",
      "index": "intimidation",
      "url": "/api/skills/intimidation"
    },
    {
      "name": "Performance",
      "index": "performance",
      "url": "/api/skills/performance"
    },
    {
      "name": "Persuasion",
      "index": "persuasion",
      "url": "/api/skills/persuasion"
    }
  ],
  "url": "/api/ability-scores/cha"
}
```

## Authentication

The dnd5eapi is a completely open API. No authentication is required to query
and get data. This also means that we've limited what you can do to just
`GET`-ing the data. If you find a mistake in the data, feel free to
[message us](https://discord.gg/TQuYTv7).

## GraphQL

This API supports [GraphQL](https://graphql.org/). The GraphQL URL for this API
is `https://www.dnd5eapi.co/graphql`. Most of your questions regarding the GraphQL schema can be answered
by querying the endpoint with the Apollo sandbox explorer.

## Schemas

Definitions of all schemas will be accessible in a future update. Two of the most common schemas are described here.

### `APIReference`
Represents a minimal representation of a resource. The detailed representation of the referenced resource can be retrieved by making a request to the referenced `URL`.
```
APIReference {
  index     string
  name      string
  url       string
}
```
<hr>

### `DC`
Represents a difficulty check.
```
DC {
  dc_type       APIReference
  dc_value      number
  success_type  "none" | "half" | "other"
}
```
<hr>

### `Damage`
Represents damage.
```
Damage {
  damage_type     APIReference
  damage_dice     string
}
```
<hr>

### `Choice`
Represents a choice made by a player. Commonly seen related to decisions made during character creation or combat (e.g.: the description of the cleric class, under **Proficiencies**, states "Skills: Choose two from	History, Insight, Medicine, Persuasion, and	Religion" [[SRD p15]](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=15))
```
Choice {
  desc      string
  choose    number
  type      string
  from      OptionSet
}
```
<hr>

### `OptionSet`
The OptionSet structure provides the options to be chosen from, or sufficient data to fetch and interpret the options. All OptionSets have an `option_set_type` attribute that indicates the structure of the object that contains the options. The possible values are `options_array`, `equipment_category`, and `reference_list`. Other attributes on the OptionSet depend on the value of this attribute.
- `options_array`
  - `options` (array): An array of Option objects. Each item in the array represents an option that can be chosen.
- `equipment_category`
  - `equipment_category` (APIReference): A reference to an EquipmentCategory. Each item in the EquipmentCategory's `equipment` array represents one option that can be chosen.
- `resource_list`
  - `resource_list_url` (string): A reference (by URL) to a collection in the database. The URL may include query parameters. Each item in the resulting ResourceList's `results` array represents one option that can be chosen.
<hr>

### `Option`
When the options are given in an `options_array`, each item in the array inherits from the Option structure. All Options have an `option_type` attribute that indicates the structure of the option. The value of this attribute indicates how the option should be handled, and each type has different attributes. The possible values and their corresponding attributes are listed below.
- `reference` - A terminal option. Contains a reference to a Document that can be added to the list of options chosen.
  - `item` (APIReference): A reference to the chosen item.
- `action` - A terminal option. Contains information describing an action, for use within Multiattack actions.
  - `action_name` (string): The name of the action, according to its `name` attribute.
  - `count` (number | string): The number of times this action can be repeated if this option is chosen.
  - `type` (string = `"melee" | "ranged" | "ability" | "magic"`, optional): For attack actions that can be either melee, ranged, abilities, or magic.
- `multiple` - When this option is chosen, all of its child options are chosen, and must be resolved the same way as a normal option.
  - `items` (array): An array of Option objects. All of them must be taken if the option is chosen.
- `choice` - A nested choice. If this option is chosen, the Choice structure contained within must be resolved like a normal Choice structure, and the results are the chosen options.
  - `choice` (Choice): The Choice to resolve.
- `string` - A terminal option. Contains a reference to a string.
  - `string` (string): The string.
- `ideal` - A terminal option. Contains information about an ideal.
  - `desc` (string): A description of the ideal.
  - `alignments` (ApiReference[]): A list of alignments of those who might follow the ideal.
- `counted_reference` - A terminal option. Contains a reference to something else in the API along with a count.
  - `count` (number): Count.
  - `of` (ApiReference): Thing being referenced.
- `score_prerequisite` - A terminal option. Contains a reference to an ability score and a minimum score.
  - `ability_score` (ApiReference): Ability score being referenced.
  - `minimum_score` (number): The minimum score required to satisfy the prerequisite.
- `ability_bonus` - A terminal option. Contains a reference to an ability score and a bonus
  - `ability_score` (ApiReference): Ability score being referenced
  - `bonus` (number): The bonus being applied to the ability score
- `breath` - A terminal option: Contains a reference to information about a breath attack.
  - `name` (string): Name of the breath.
  - `dc` (DC): Difficulty check of the breath attack.
  - `damage` ([Damage]): Damage dealt by the breath attack, if any.
- `damage` - A terminal option. Contains information about damage.
  - `damage_type` (ApiReference): Reference to type of damage.
  - `damage_dice` (string): Damage expressed in dice (e.g. "13d6").
  - `notes` (string): Information regarding the damage.

## FAQ

### What is the SRD?
The SRD, or Systems Reference Document, contains guidelines for publishing content under the OGL. This allows for some of the data for D&D 5e to be open source. The API only covers data that can be found in the SRD. [Here's a link to the full text of the SRD.](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf)

### What is the OGL?
The Open Game License (OGL) is a public copyright license by Wizards of the Coast that may be used by tabletop role-playing game developers to grant permission to modify, copy, and redistribute some of the content designed for their games, notably game mechanics. However, they must share-alike copies and derivative works. [More information about the OGL can be found here.](https://en.wikipedia.org/wiki/Open_Game_License)

### A monster, spell, subclass, etc. is missing from the API / Database. Can I add it?
Please check if the data is within the SRD. If it is, feel free to open an issue or PR to add it yourself. Otherwise, due to legal reasons, we cannot add it.

### Can this API be self hosted?
Yes it can! You can also host the data yourself if you don't want to use the API at all. You can also make changes and add extra data if you like. However, it is up to you to merge in new changes to the data and API.

#### Can I publish is on <insert platform>? Is this free use?
Yes, you can. The API itself is under the [MIT license](https://opensource.org/licenses/MIT), and the underlying data accessible via the API is supported under the SRD and OGL.

# Status Page

The status page for the API can be found here: https://5e-bits.github.io/dnd-uptime/

# Chat

Come hang out with us [on Discord](https://discord.gg/TQuYTv7)!

# Contribute

This API is built from two repositories.
  - The repo containing the data lives here: https://github.com/bagelbits/5e-database
  - The repo with the API implementation lives here: https://github.com/bagelbits/5e-srd-api

This is a evolving API and having fresh ideas are always welcome! You can
open an issue in either repo, open a PR for changes, or just discuss with
other users in this discord.

Base URLs:

* <a href="https://www.dnd5eapi.co">https://www.dnd5eapi.co</a> - Production

* <a href="http://localhost:3000">http://localhost:3000</a> - Local Development

Web: <a href="https://github.com/5e-bits">5eBits</a> 
License: <a href="https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md">MIT License</a>

<h1 id="dd-5e-api-common">Common</h1>

## Get all resource URLs.

> Code samples

```bash
curl https://example.com/api \
  -H 'Accept: application/json'
```

`GET /api`

Making a request to the API's base URL returns an object containing available endpoints.

> Example responses

> 200 Response

```json
{
  "ability-scores": "/api/ability-scores",
  "alignments": "/api/alignments",
  "backgrounds": "/api/backgrounds",
  "classes": "/api/classes",
  "conditions": "/api/conditions",
  "damage-types": "/api/damage-types",
  "equipment": "/api/equipment",
  "equipment-categories": "/api/equipment-categories",
  "feats": "/api/feats",
  "features": "/api/features",
  "languages": "/api/languages",
  "magic-items": "/api/magic-items",
  "magic-schools": "/api/magic-schools",
  "monsters": "/api/monsters",
  "proficiencies": "/api/proficiencies",
  "races": "/api/races",
  "rule-sections": "/api/rule-sections",
  "rules": "/api/rules",
  "skills": "/api/skills",
  "spells": "/api/spells",
  "subclasses": "/api/subclasses",
  "subraces": "/api/subraces",
  "traits": "/api/traits",
  "weapon-properties": "/api/weapon-properties"
}
```

<h3 id="get-all-resource-urls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-resource-urls-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of all available resources for an endpoint.

> Code samples

```bash
curl https://example.com/api/ability-scores \
  -H 'Accept: application/json'
```

`GET /api/{endpoint}`

Currently only the [`/spells`](#get-/api/spells) and [`/monsters`](#get-/api/monsters) endpoints support filtering with query parameters. Use of these query parameters is documented under the respective [Spells](#tag--Spells) and [Monsters](#tag--Monsters) sections.


<h3 id="get-list-of-all-available-resources-for-an-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpoint|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|endpoint|ability-scores|
|endpoint|alignments|
|endpoint|backgrounds|
|endpoint|classes|
|endpoint|conditions|
|endpoint|damage-types|
|endpoint|equipment|
|endpoint|equipment-categories|
|endpoint|feats|
|endpoint|features|
|endpoint|languages|
|endpoint|magic-items|
|endpoint|magic-schools|
|endpoint|monsters|
|endpoint|proficiencies|
|endpoint|races|
|endpoint|rule-sections|
|endpoint|rules|
|endpoint|skills|
|endpoint|spells|
|endpoint|subclasses|
|endpoint|subraces|
|endpoint|traits|
|endpoint|weapon-properties|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-list-of-all-available-resources-for-an-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-character-data">Character Data</h1>

## Get an ability score by index.

> Code samples

```bash
curl https://example.com/api/ability-scores/cha \
  -H 'Accept: application/json'
```

`GET /api/ability-scores/{index}`

# Ability Score

Represents one of the six abilities that describes a creature's physical and mental characteristics. The three main rolls of the game - the ability check, the saving throw, and the attack roll - rely on the ability scores. [[SRD p76](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=76)]


<h3 id="get-an-ability-score-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the ability score to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|cha|
|index|con|
|index|dex|
|index|int|
|index|str|
|index|wis|

> Example responses

> 200 Response

```json
{
  "desc": [
    "Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.",
    "A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks."
  ],
  "full_name": "Charisma",
  "index": "cha",
  "name": "CHA",
  "skills": [
    {
      "index": "deception",
      "name": "Deception",
      "url": "/api/skills/deception"
    },
    {
      "index": "intimidation",
      "name": "Intimidation",
      "url": "/api/skills/intimidation"
    },
    {
      "index": "performance",
      "name": "Performance",
      "url": "/api/skills/performance"
    },
    {
      "index": "persuasion",
      "name": "Persuasion",
      "url": "/api/skills/persuasion"
    }
  ],
  "url": "/api/ability-scores/cha"
}
```

<h3 id="get-an-ability-score-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AbilityScore](#schemaabilityscore)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an alignment by index.

> Code samples

```bash
curl https://example.com/api/alignments/chaotic-neutral \
  -H 'Accept: application/json'
```

`GET /api/alignments/{index}`

# Alignment

A typical creature in the game world has an alignment, which broadly describes its moral and personal attitudes. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward society and order (lawful, chaotic, or neutral). Thus, nine distinct alignments define the possible combinations.[[SRD p58](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=58)]


<h3 id="get-an-alignment-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the alignment to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|chaotic-neutral|
|index|chaotic-evil|
|index|chaotic-good|
|index|lawful-neutral|
|index|lawful-evil|
|index|lawful-good|
|index|neutral|
|index|neutral-evil|
|index|neutral-good|

> Example responses

> 200 Response

```json
{
  "abbreviation": "CN",
  "desc": "Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.",
  "index": "chaotic-neutral",
  "name": "Chaotic Neutral",
  "url": "/api/alignments/chaotic-neutral"
}
```

<h3 id="get-an-alignment-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Alignment](#schemaalignment)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a background by index.

> Code samples

```bash
curl https://example.com/api/backgrounds/acolyte \
  -H 'Accept: application/json'
```

`GET /api/backgrounds/{index}`

# Background

Every story has a beginning. Your character's background reveals where you came from, how you became an adventurer, and your place in the world. Choosing a background provides you with important story cues about your character's identity. [[SRD p60](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=60)]

_Note:_ acolyte is the only background included in the SRD.


<h3 id="get-a-background-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the background to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|acolyte|

> Example responses

> 200 Response

```json
{
  "bonds": {
    "choose": 1,
    "from": {
      "option_set_type": "options_array",
      "options": [
        {
          "option_type": "string",
          "string": "I would die to recover an ancient relic of my faith that was lost long ago."
        },
        {
          "option_type": "string",
          "string": "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic."
        },
        {
          "option_type": "string",
          "string": "I owe my life to the priest who took me in when my parents died."
        },
        {
          "option_type": "string",
          "string": "Everything I do is for the common people."
        },
        {
          "option_type": "string",
          "string": "I will do anything to protect the temple where I served."
        },
        {
          "option_type": "string",
          "string": "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
        }
      ]
    },
    "type": "bonds"
  },
  "feature": {
    "desc": [
      "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.",
      "You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple."
    ],
    "name": "Shelter of the Faithful"
  },
  "flaws": {
    "choose": 1,
    "from": {
      "option_set_type": "options_array",
      "options": [
        {
          "option_type": "string",
          "string": "I judge others harshly, and myself even more severely."
        },
        {
          "option_type": "string",
          "string": "I put too much trust in those who wield power within my temple's hierarchy."
        },
        {
          "option_type": "string",
          "string": "My piety sometimes leads me to blindly trust those that profess faith in my god."
        },
        {
          "option_type": "string",
          "string": "I am inflexible in my thinking."
        },
        {
          "option_type": "string",
          "string": "I am suspicious of strangers and expect the worst of them."
        },
        {
          "option_type": "string",
          "string": "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
        }
      ]
    },
    "type": "flaws"
  },
  "ideals": {
    "choose": 1,
    "from": {
      "option_set_type": "options_array",
      "options": [
        {
          "alignments": [
            {
              "index": "lawful-good",
              "name": "Lawful Good",
              "url": "/api/alignments/lawful-good"
            },
            {
              "index": "lawful-neutral",
              "name": "Lawful Neutral",
              "url": "/api/alignments/lawful-neutral"
            },
            {
              "index": "lawful-evil",
              "name": "Lawful Evil",
              "url": "/api/alignments/lawful-evil"
            }
          ],
          "desc": "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld.",
          "option_type": "ideal"
        },
        {
          "alignments": [
            {
              "index": "lawful-good",
              "name": "Lawful Good",
              "url": "/api/alignments/lawful-good"
            },
            {
              "index": "neutral-good",
              "name": "Neutral Good",
              "url": "/api/alignments/neutral-good"
            },
            {
              "index": "chaotic-good",
              "name": "Chaotic Good",
              "url": "/api/alignments/chaotic-good"
            }
          ],
          "desc": "Charity. I always try to help those in need, no matter what the personal cost.",
          "option_type": "ideal"
        },
        {
          "alignments": [
            {
              "index": "chaotic-good",
              "name": "Chaotic Good",
              "url": "/api/alignments/chaotic-good"
            },
            {
              "index": "chaotic-neutral",
              "name": "Chaotic Neutral",
              "url": "/api/alignments/chaotic-neutral"
            },
            {
              "index": "chaotic-evil",
              "name": "Chaotic Evil",
              "url": "/api/alignments/chaotic-evil"
            }
          ],
          "desc": "Change. We must help bring about the changes the gods are constantly working in the world.",
          "option_type": "ideal"
        },
        {
          "alignments": [
            {
              "index": "lawful-good",
              "name": "Lawful Good",
              "url": "/api/alignments/lawful-good"
            },
            {
              "index": "lawful-neutral",
              "name": "Lawful Neutral",
              "url": "/api/alignments/lawful-neutral"
            },
            {
              "index": "lawful-evil",
              "name": "Lawful Evil",
              "url": "/api/alignments/lawful-evil"
            }
          ],
          "desc": "Power. I hope to one day rise to the top of my faith's religious hierarchy.",
          "option_type": "ideal"
        },
        {
          "alignments": [
            {
              "index": "lawful-good",
              "name": "Lawful Good",
              "url": "/api/alignments/lawful-good"
            },
            {
              "index": "lawful-neutral",
              "name": "Lawful Neutral",
              "url": "/api/alignments/lawful-neutral"
            },
            {
              "index": "lawful-evil",
              "name": "Lawful Evil",
              "url": "/api/alignments/lawful-evil"
            }
          ],
          "desc": "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well.",
          "option_type": "ideal"
        },
        {
          "alignments": [
            {
              "index": "lawful-good",
              "name": "Lawful Good",
              "url": "/api/alignments/lawful-good"
            },
            {
              "index": "neutral-good",
              "name": "Neutral Good",
              "url": "/api/alignments/neutral-good"
            },
            {
              "index": "chaotic-good",
              "name": "Chaotic Good",
              "url": "/api/alignments/chaotic-good"
            },
            {
              "index": "lawful-neutral",
              "name": "Lawful Neutral",
              "url": "/api/alignments/lawful-neutral"
            },
            {
              "index": "neutral",
              "name": "Neutral",
              "url": "/api/alignments/neutral"
            },
            {
              "index": "chaotic-neutral",
              "name": "Chaotic Neutral",
              "url": "/api/alignments/chaotic-neutral"
            },
            {
              "index": "lawful-evil",
              "name": "Lawful Evil",
              "url": "/api/alignments/lawful-evil"
            },
            {
              "index": "neutral-evil",
              "name": "Neutral Evil",
              "url": "/api/alignments/neutral-evil"
            },
            {
              "index": "chaotic-evil",
              "name": "Chaotic Evil",
              "url": "/api/alignments/chaotic-evil"
            }
          ],
          "desc": "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings.",
          "option_type": "ideal"
        }
      ]
    },
    "type": "ideals"
  },
  "index": "acolyte",
  "language_options": {
    "choose": 2,
    "from": {
      "option_set_type": "resource_list",
      "resource_list_url": "/api/languages"
    },
    "type": "languages"
  },
  "name": "Acolyte",
  "personality_traits": {
    "choose": 2,
    "from": {
      "option_set_type": "options_array",
      "options": [
        {
          "option_type": "string",
          "string": "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example."
        },
        {
          "option_type": "string",
          "string": "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace."
        },
        {
          "option_type": "string",
          "string": "I see omens in every event and action. The gods try to speak to us, we just need to listen."
        },
        {
          "option_type": "string",
          "string": "Nothing can shake my optimistic attitude."
        },
        {
          "option_type": "string",
          "string": "I quote (or misquote) sacred texts and proverbs in almost every situation."
        },
        {
          "option_type": "string",
          "string": "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods."
        },
        {
          "option_type": "string",
          "string": "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me."
        },
        {
          "option_type": "string",
          "string": "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
        }
      ]
    },
    "type": "personality_traits"
  },
  "starting_equipment": [
    {
      "equipment": {
        "index": "clothes-common",
        "name": "Clothes, common",
        "url": "/api/equipment/clothes-common"
      },
      "quantity": 1
    },
    {
      "equipment": {
        "index": "pouch",
        "name": "Pouch",
        "url": "/api/equipment/pouch"
      },
      "quantity": 1
    }
  ],
  "starting_equipment_options": [
    {
      "choose": 1,
      "from": {
        "equipment_category": {
          "index": "holy-symbols",
          "name": "Holy Symbols",
          "url": "/api/equipment-categories/holy-symbols"
        },
        "option_set_type": "equipment_category"
      },
      "type": "equipment"
    }
  ],
  "starting_proficiencies": [
    {
      "index": "skill-insight",
      "name": "Skill: Insight",
      "url": "/api/proficiencies/skill-insight"
    },
    {
      "index": "skill-religion",
      "name": "Skill: Religion",
      "url": "/api/proficiencies/skill-religion"
    }
  ],
  "url": "/api/backgrounds/acolyte"
}
```

<h3 id="get-a-background-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Background](#schemabackground)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a language by index.

> Code samples

```bash
curl https://example.com/api/languages/abyssal \
  -H 'Accept: application/json'
```

`GET /api/languages/{index}`

# Language

Your race indicates the languages your character can speak by default, and your background might give you access to one or more additional languages of your choice. [[SRD p59](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=59)]


<h3 id="get-a-language-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the language to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|abyssal|
|index|celestial|
|index|common|
|index|deep-speech|
|index|draconic|
|index|dwarvish|
|index|elvish|
|index|giant|
|index|gnomish|
|index|goblin|
|index|halfling|
|index|infernal|
|index|orc|
|index|primordial|
|index|sylvan|
|index|undercommon|

> Example responses

> 200 Response

```json
{
  "desc": "Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
  "index": "elvish",
  "name": "Elvish",
  "script": "Elvish",
  "type": "Standard",
  "typical_speakers": [
    "Elves"
  ],
  "url": "/api/languages/elvish"
}
```

<h3 id="get-a-language-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Language](#schemalanguage)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a proficiency by index.

> Code samples

```bash
curl https://example.com/api/proficiencies/medium-armor \
  -H 'Accept: application/json'
```

`GET /api/proficiencies/{index}`

# Proficiency 

By virtue of race, class, and background a character is proficient at using certain skills, weapons, and equipment. Characters can also gain additional proficiencies at higher levels or by multiclassing. A characters starting proficiencies are determined during character creation.


<h3 id="get-a-proficiency-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the proficiency to get.<br><br>Available values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `proficiencies`.<br>|

> Example responses

> 200 Response

```json
{
  "classes": [
    {
      "index": "barbarian",
      "name": "Barbarian",
      "url": "/api/classes/barbarian"
    },
    {
      "index": "cleric",
      "name": "Cleric",
      "url": "/api/classes/cleric"
    },
    {
      "index": "druid",
      "name": "Druid",
      "url": "/api/classes/druid"
    },
    {
      "index": "ranger",
      "name": "Ranger",
      "url": "/api/classes/ranger"
    }
  ],
  "index": "medium-armor",
  "name": "Medium Armor",
  "races": [],
  "reference": {
    "index": "medium-armor",
    "name": "Medium Armor",
    "url": "/api/equipment-categories/medium-armor"
  },
  "type": "Armor",
  "url": "/api/proficiencies/medium-armor"
}
```

<h3 id="get-a-proficiency-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Proficiency](#schemaproficiency)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a skill by index.

> Code samples

```bash
curl https://example.com/api/skills/nature \
  -H 'Accept: application/json'
```

`GET /api/skills/{index}`

# Skill

Each ability covers a broad range of capabilities, including skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual's proficiency in a skill demonstrates a focus on that aspect. [[SRD p77](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=77)]


<h3 id="get-a-skill-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the skill to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|acrobatics|
|index|animal-handling|
|index|arcana|
|index|athletics|
|index|deception|
|index|history|
|index|insight|
|index|intimidation|
|index|investigation|
|index|medicine|
|index|nature|
|index|perception|
|index|performance|
|index|persuasion|
|index|religion|
|index|sleight-of-hand|
|index|stealth|
|index|survival|

> Example responses

> 200 Response

```json
{
  "ability_score": {
    "index": "dex",
    "name": "DEX",
    "url": "/api/ability-scores/dex"
  },
  "desc": [
    "Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips."
  ],
  "index": "acrobatics",
  "name": "Acrobatics",
  "url": "/api/skills/acrobatics"
}
```

<h3 id="get-a-skill-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Skill](#schemaskill)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-class">Class</h1>

## Get a class by index.

> Code samples

```bash
curl https://example.com/api/classes/paladin \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}`

# Class

A character class is a fundamental part of the identity and nature of
characters in the Dungeons & Dragons role-playing game. A character's
capabilities, strengths, and weaknesses are largely defined by its class.
A character's class affects a character's available skills and abilities. [[SRD p8-55](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=8)]


<h3 id="get-a-class-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
{
  "class_levels": "/api/classes/barbarian/levels",
  "hit_die": 12,
  "index": "barbarian",
  "multi_classing": {
    "prerequisites": [
      {
        "ability_score": {
          "index": "str",
          "name": "STR",
          "url": "/api/ability-scores/str"
        },
        "minimum_score": 13
      }
    ],
    "proficiencies": [
      {
        "index": "shields",
        "name": "Shields",
        "url": "/api/proficiencies/shields"
      },
      {
        "index": "simple-weapons",
        "name": "Simple Weapons",
        "url": "/api/proficiencies/simple-weapons"
      },
      {
        "index": "martial-weapons",
        "name": "Martial Weapons",
        "url": "/api/proficiencies/martial-weapons"
      }
    ],
    "proficiency_choices": []
  },
  "name": "Barbarian",
  "proficiencies": [
    {
      "index": "light-armor",
      "name": "Light Armor",
      "url": "/api/proficiencies/light-armor"
    },
    {
      "index": "medium-armor",
      "name": "Medium Armor",
      "url": "/api/proficiencies/medium-armor"
    },
    {
      "index": "shields",
      "name": "Shields",
      "url": "/api/proficiencies/shields"
    },
    {
      "index": "simple-weapons",
      "name": "Simple Weapons",
      "url": "/api/proficiencies/simple-weapons"
    },
    {
      "index": "martial-weapons",
      "name": "Martial Weapons",
      "url": "/api/proficiencies/martial-weapons"
    }
  ],
  "proficiency_choices": [
    {
      "choose": 2,
      "desc": "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
      "from": {
        "option_set_type": "options_array",
        "options": [
          {
            "item": {
              "index": "skill-animal-handling",
              "name": "Skill: Animal Handling",
              "url": "/api/proficiencies/skill-animal-handling"
            },
            "option_type": "reference"
          },
          {
            "item": {
              "index": "skill-athletics",
              "name": "Skill: Athletics",
              "url": "/api/proficiencies/skill-athletics"
            },
            "option_type": "reference"
          },
          {
            "item": {
              "index": "skill-intimidation",
              "name": "Skill: Intimidation",
              "url": "/api/proficiencies/skill-intimidation"
            },
            "option_type": "reference"
          },
          {
            "item": {
              "index": "skill-nature",
              "name": "Skill: Nature",
              "url": "/api/proficiencies/skill-nature"
            },
            "option_type": "reference"
          },
          {
            "item": {
              "index": "skill-perception",
              "name": "Skill: Perception",
              "url": "/api/proficiencies/skill-perception"
            },
            "option_type": "reference"
          },
          {
            "item": {
              "index": "skill-survival",
              "name": "Skill: Survival",
              "url": "/api/proficiencies/skill-survival"
            },
            "option_type": "reference"
          }
        ]
      },
      "type": "proficiencies"
    }
  ],
  "saving_throws": [
    {
      "index": "str",
      "name": "STR",
      "url": "/api/ability-scores/str"
    },
    {
      "index": "con",
      "name": "CON",
      "url": "/api/ability-scores/con"
    }
  ],
  "starting_equipment": [
    {
      "equipment": {
        "index": "explorers-pack",
        "name": "Explorer's Pack",
        "url": "/api/equipment/explorers-pack"
      },
      "quantity": 1
    },
    {
      "equipment": {
        "index": "javelin",
        "name": "Javelin",
        "url": "/api/equipment/javelin"
      },
      "quantity": 4
    }
  ],
  "starting_equipment_options": [
    {
      "choose": 1,
      "desc": "(a) a greataxe or (b) any martial melee weapon",
      "from": {
        "option_set_type": "options_array",
        "options": [
          {
            "count": 1,
            "of": {
              "index": "greataxe",
              "name": "Greataxe",
              "url": "/api/equipment/greataxe"
            },
            "option_type": "counted_reference"
          },
          {
            "choice": {
              "choose": 1,
              "desc": "any martial melee weapon",
              "from": {
                "equipment_category": {
                  "index": "martial-melee-weapons",
                  "name": "Martial Melee Weapons",
                  "url": "/api/equipment-categories/martial-melee-weapons"
                },
                "option_set_type": "equipment_category"
              },
              "type": "equipment"
            },
            "option_type": "choice"
          }
        ]
      },
      "type": "equipment"
    },
    {
      "choose": 1,
      "desc": "(a) two handaxes or (b) any simple weapon",
      "from": {
        "option_set_type": "options_array",
        "options": [
          {
            "count": 2,
            "of": {
              "index": "handaxe",
              "name": "Handaxe",
              "url": "/api/equipment/handaxe"
            },
            "option_type": "counted_reference"
          },
          {
            "choice": {
              "choose": 1,
              "desc": "any simple weapon",
              "from": {
                "equipment_category": {
                  "index": "simple-weapons",
                  "name": "Simple Weapons",
                  "url": "/api/equipment-categories/simple-weapons"
                },
                "option_set_type": "equipment_category"
              },
              "type": "equipment"
            },
            "option_type": "choice"
          }
        ]
      },
      "type": "equipment"
    }
  ],
  "subclasses": [
    {
      "index": "berserker",
      "name": "Berserker",
      "url": "/api/subclasses/berserker"
    }
  ],
  "url": "/api/classes/barbarian"
}
```

<h3 id="get-a-class-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Class](#schemaclass)|

<aside class="success">
This operation does not require authentication
</aside>

## Get multiclassing resource for a class.

> Code samples

```bash
curl https://example.com/api/classes/paladin/multi-classing \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}/multi-classing`

<h3 id="get-multiclassing-resource-for-a-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
{
  "prerequisites": [
    {
      "ability_score": {
        "index": "str",
        "name": "STR",
        "url": "/api/ability-scores/str"
      },
      "minimum_score": 13
    }
  ],
  "proficiencies": [
    {
      "index": "shields",
      "name": "Shields",
      "url": "/api/proficiencies/shields"
    },
    {
      "index": "simple-weapons",
      "name": "Simple Weapons",
      "url": "/api/proficiencies/simple-weapons"
    },
    {
      "index": "martial-weapons",
      "name": "Martial Weapons",
      "url": "/api/proficiencies/martial-weapons"
    }
  ],
  "proficiency_choices": []
}
```

<h3 id="get-multiclassing-resource-for-a-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Multiclassing](#schemamulticlassing)|

<aside class="success">
This operation does not require authentication
</aside>

## Get spellcasting info for a class.

> Code samples

```bash
curl https://example.com/api/classes/paladin/spellcasting \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}/spellcasting`

<h3 id="get-spellcasting-info-for-a-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
{
  "info": [
    {
      "desc": [
        "You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table."
      ],
      "name": "Cantrips"
    },
    {
      "desc": [
        "The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
        "For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot."
      ],
      "name": "Spell Slots"
    },
    {
      "desc": [
        "You know four 1st-level spells of your choice from the bard spell list.",
        "The Spells Known column of the Bard table shows when you learn more bard spells of your choice.",
        "Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
        "Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots."
      ],
      "name": "Spells Known of 1st Level and Higher"
    },
    {
      "desc": [
        "Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.",
        "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
        "Spell attack modifier = your proficiency bonus + your Charisma modifier."
      ],
      "name": "Spellcasting Ability"
    },
    {
      "desc": [
        "You can cast any bard spell you know as a ritual if that spell has the ritual tag."
      ],
      "name": "Ritual Casting"
    },
    {
      "desc": [
        "You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells."
      ],
      "name": "Spellcasting Focus"
    }
  ],
  "level": 1,
  "spellcasting_ability": {
    "index": "cha",
    "name": "CHA",
    "url": "/api/ability-scores/cha"
  }
}
```

> 404 Response

```json
{
  "error": "Not found"
}
```

<h3 id="get-spellcasting-info-for-a-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Spellcasting](#schemaspellcasting)|
|404|Not Found|Not found.|[error-response](#schemaerror-response)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-class-resource-lists">Class Resource Lists</h1>

## Get features available for a class.

> Code samples

```bash
curl https://example.com/api/classes/paladin/features \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}/features`

<h3 id="get-features-available-for-a-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-features-available-for-a-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of features for the class.|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get proficiencies available for a class.

> Code samples

```bash
curl https://example.com/api/classes/paladin/proficiencies \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}/proficiencies`

<h3 id="get-proficiencies-available-for-a-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-proficiencies-available-for-a-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of proficiencies for the class.|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get spells available for a class.

> Code samples

```bash
curl https://example.com/api/classes/paladin/spells \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}/spells`

<h3 id="get-spells-available-for-a-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "results": [
    {
      "index": "power-word-kill",
      "name": "Power Word Kill",
      "url": "/api/spells/power-word-kill"
    },
    {
      "index": "true-polymorph",
      "name": "True Polymorph",
      "url": "/api/spells/true-polymorph"
    }
  ]
}
```

<h3 id="get-spells-available-for-a-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get subclasses available for a class.

> Code samples

```bash
curl https://example.com/api/classes/paladin/subclasses \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}/subclasses`

<h3 id="get-subclasses-available-for-a-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "results": [
    {
      "index": "berserker",
      "name": "Berserker",
      "url": "/api/subclasses/berserker"
    }
  ]
}
```

<h3 id="get-subclasses-available-for-a-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-class-levels">Class Levels</h1>

## Get all level resources for a class.

> Code samples

```bash
curl https://example.com/api/classes/paladin/levels \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}/levels`

<h3 id="get-all-level-resources-for-a-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|
|subclass|query|string|false|Adds subclasses for class to the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
[
  {
    "ability_score_bonuses": 0,
    "class_specific": {
      "brutal_critical_dice": 0,
      "rage_count": 0,
      "rage_damage_bonus": 0
    },
    "features": [
      {
        "index": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "index": "string",
    "level": 0,
    "prof_bonus": 0,
    "spellcasting": {
      "cantrips_known": 0,
      "spell_slots_level_1": 0,
      "spell_slots_level_2": 0,
      "spell_slots_level_3": 0,
      "spell_slots_level_4": 0,
      "spell_slots_level_5": 0,
      "spell_slots_level_6": 0,
      "spell_slots_level_7": 0,
      "spell_slots_level_8": 0,
      "spell_slots_level_9": 0,
      "spells_known": 0
    },
    "url": "string"
  }
]
```

<h3 id="get-all-level-resources-for-a-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-level-resources-for-a-class-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClassLevel](#schemaclasslevel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get level resource for a class and level.

> Code samples

```bash
curl https://example.com/api/classes/paladin/levels/3 \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}/levels/{class_level}`

<h3 id="get-level-resource-for-a-class-and-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|
|class_level|path|number|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
{
  "ability_score_bonuses": 0,
  "class": {
    "index": "barbarian",
    "name": "Barbarian",
    "url": "/api/classes/barbarian"
  },
  "class_specific": {
    "brutal_critical_dice": 0,
    "rage_count": 2,
    "rage_damage_bonus": 2
  },
  "features": [
    {
      "index": "rage",
      "name": "Rage",
      "url": "/api/features/rage"
    },
    {
      "index": "barbarian-unarmored-defense",
      "name": "Unarmored Defense",
      "url": "/api/features/barbarian-unarmored-defense"
    }
  ],
  "index": "barbarian-1",
  "level": 1,
  "prof_bonus": 2,
  "url": "/api/classes/barbarian/levels/1"
}
```

<h3 id="get-level-resource-for-a-class-and-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ClassLevel](#schemaclasslevel)|

<aside class="success">
This operation does not require authentication
</aside>

## Get features available to a class at the requested level.

> Code samples

```bash
curl https://example.com/api/classes/paladin/levels/3/features \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}/levels/{class_level}/features`

<h3 id="get-features-available-to-a-class-at-the-requested-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|
|class_level|path|number|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "results": [
    {
      "index": "barbarian-unarmored-defense",
      "name": "Unarmored Defense",
      "url": "/api/features/barbarian-unarmored-defense"
    },
    {
      "index": "rage",
      "name": "Rage",
      "url": "/api/features/rage"
    }
  ]
}
```

<h3 id="get-features-available-to-a-class-at-the-requested-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get spells of the requested level available to the class.

> Code samples

```bash
curl https://example.com/api/classes/paladin/levels/4/spells \
  -H 'Accept: application/json'
```

`GET /api/classes/{index}/levels/{spell_level}/spells`

<h3 id="get-spells-of-the-requested-level-available-to-the-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the class to get.<br>|
|spell_level|path|number|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|barbarian|
|index|bard|
|index|cleric|
|index|druid|
|index|fighter|
|index|monk|
|index|paladin|
|index|ranger|
|index|rogue|
|index|sorcerer|
|index|warlock|
|index|wizard|

> Example responses

> 200 Response

```json
{
  "count": 5,
  "results": [
    {
      "index": "dominate-monster",
      "name": "Dominate Monster",
      "url": "/api/spells/dominate-monster"
    },
    {
      "index": "earthquake",
      "name": "Earthquake",
      "url": "/api/spells/earthquake"
    },
    {
      "index": "incendiary-cloud",
      "name": "Incendiary Cloud",
      "url": "/api/spells/incendiary-cloud"
    },
    {
      "index": "power-word-stun",
      "name": "Power Word Stun",
      "url": "/api/spells/power-word-stun"
    },
    {
      "index": "sunburst",
      "name": "Sunburst",
      "url": "/api/spells/sunburst"
    }
  ]
}
```

<h3 id="get-spells-of-the-requested-level-available-to-the-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-game-mechanics">Game Mechanics</h1>

## Get a condition by index.

> Code samples

```bash
curl https://example.com/api/conditions/blinded \
  -H 'Accept: application/json'
```

`GET /api/conditions/{index}`

# Condition

A condition alters a creature’s capabilities in a variety of ways and can 
arise as a result of a spell, a class feature, a monster’s attack, or other 
effect. Most conditions, such as blinded, are impairments, but a few, such 
as invisible, can be advantageous.


<h3 id="get-a-condition-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the condition to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|blinded|
|index|charmed|
|index|deafened|
|index|exhaustion|
|index|frightened|
|index|grappled|
|index|incapacitated|
|index|invisible|
|index|paralyzed|
|index|petrified|
|index|poisoned|
|index|prone|
|index|restrained|
|index|stunned|
|index|unconscious|

> Example responses

> 200 Response

```json
{
  "desc": [
    "- A blinded creature can't see and automatically fails any ability check that requires sight.",
    "- Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage."
  ],
  "index": "blinded",
  "name": "Blinded",
  "url": "/api/conditions/blinded"
}
```

<h3 id="get-a-condition-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Condition](#schemacondition)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a damage type by index.

> Code samples

```bash
curl https://example.com/api/damage-types/acid \
  -H 'Accept: application/json'
```

`GET /api/damage-types/{index}`

# Damage type

Different attacks, damaging spells, and other harmful effects deal different 
types of damage. Damage types have no rules of their own, but other rules, 
such as damage resistance, rely on the types.


<h3 id="get-a-damage-type-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the damage type to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|acid|
|index|bludgeoning|
|index|cold|
|index|fire|
|index|force|
|index|lightning|
|index|necrotic|
|index|piercing|
|index|poison|
|index|psychic|
|index|radiant|
|index|slashing|
|index|thunder|

> Example responses

> 200 Response

```json
{
  "desc": [
    "The corrosive spray of a black dragon's breath and the dissolving enzymes secreted by a black pudding deal acid damage."
  ],
  "index": "acid",
  "name": "Acid",
  "url": "/api/damage-types/acid"
}
```

<h3 id="get-a-damage-type-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DamageType](#schemadamagetype)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a magic school by index.

> Code samples

```bash
curl https://example.com/api/magic-schools/abjuration \
  -H 'Accept: application/json'
```

`GET /api/magic-schools/{index}`

# Magic School

Academies of magic group spells into eight categories called schools of 
magic. Scholars, particularly wizards, apply these categories to all spells, 
believing that all magic functions in essentially the same way, whether it 
derives from rigorous study or is bestowed by a deity.


<h3 id="get-a-magic-school-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the magic school to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|abjuration|
|index|conjuration|
|index|divination|
|index|enchantment|
|index|evocation|
|index|illusion|
|index|necromancy|
|index|transmutation|

> Example responses

> 200 Response

```json
{
  "desc": "Conjuration spells involve the transportation of objects and creatures from one location to another. Some spells summon creatures or objects to the caster's side, whereas others allow the caster to teleport to another location. Some conjurations create objects or effects out of nothing.",
  "index": "conjuration",
  "name": "Conjuration",
  "url": "/api/magic-schools/conjuration"
}
```

<h3 id="get-a-magic-school-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MagicSchool](#schemamagicschool)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-equipment">Equipment</h1>

## Get an equipment category by index.

> Code samples

```bash
curl https://example.com/api/equipment-categories/waterborne-vehicles \
  -H 'Accept: application/json'
```

`GET /api/equipment-categories/{index}`

These are the categories that various equipment fall under.

<h3 id="get-an-equipment-category-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the equipment category score to get.<br><br>Available values can be found in the resource list for this endpoint.<br>|

> Example responses

> 200 Response

```json
{
  "equipment": [
    {
      "index": "galley",
      "name": "Galley",
      "url": "/api/equipment/galley"
    },
    {
      "index": "keelboat",
      "name": "Keelboat",
      "url": "/api/equipment/keelboat"
    },
    {
      "index": "longship",
      "name": "Longship",
      "url": "/api/equipment/longship"
    },
    {
      "index": "rowboat",
      "name": "Rowboat",
      "url": "/api/equipment/rowboat"
    },
    {
      "index": "sailing-ship",
      "name": "Sailing ship",
      "url": "/api/equipment/sailing-ship"
    },
    {
      "index": "warship",
      "name": "Warship",
      "url": "/api/equipment/warship"
    }
  ],
  "index": "waterborne-vehicles",
  "name": "Waterborne Vehicles",
  "url": "/api/equipment-categories/waterborne-vehicles"
}
```

<h3 id="get-an-equipment-category-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EquipmentCategory](#schemaequipmentcategory)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an equipment item by index.

> Code samples

```bash
curl https://example.com/api/equipment/club \
  -H 'Accept: application/json'
```

`GET /api/equipment/{index}`

# Equipment

Opportunities abound to find treasure, equipment, weapons, armor, and more 
in the dungeons you explore. Normally, you can sell your treasures and 
trinkets when you return to a town or other settlement, provided that you 
can find buyers and merchants interested in your loot.


<h3 id="get-an-equipment-item-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the equipment to get.<br><br>Available values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `equipment`.<br>|

> Example responses

> 200 Response

```json
{
  "category_range": "Simple Melee",
  "contents": [],
  "cost": {
    "quantity": 1,
    "unit": "sp"
  },
  "damage": {
    "damage_dice": "1d4",
    "damage_type": {
      "index": "bludgeoning",
      "name": "Bludgeoning",
      "url": "/api/damage-types/bludgeoning"
    }
  },
  "desc": [],
  "equipment_category": {
    "index": "weapon",
    "name": "Weapon",
    "url": "/api/equipment-categories/weapon"
  },
  "index": "club",
  "name": "Club",
  "properties": [
    {
      "index": "light",
      "name": "Light",
      "url": "/api/weapon-properties/light"
    },
    {
      "index": "monk",
      "name": "Monk",
      "url": "/api/weapon-properties/monk"
    }
  ],
  "range": {
    "long": null,
    "normal": 5
  },
  "special": [],
  "url": "/api/equipment/club",
  "weapon_category": "Simple",
  "weapon_range": "Melee",
  "weight": 2
}
```

<h3 id="get-an-equipment-item-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Equipment](#schemaequipment)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a magic item by index.

> Code samples

```bash
curl https://example.com/api/magic-items/adamantine-armor \
  -H 'Accept: application/json'
```

`GET /api/magic-items/{index}`

These are the various magic items you can find in the game.

<h3 id="get-a-magic-item-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the magic item to get.<br><br>Available values can be found in the resource list for this endpoint.<br>|

> Example responses

> 200 Response

```json
{
  "desc": [
    "Armor (medium or heavy, but not hide), uncommon",
    "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit."
  ],
  "equipment_category": {
    "index": "armor",
    "name": "Armor",
    "url": "/api/equipment-categories/armor"
  },
  "index": "adamantine-armor",
  "name": "Adamantine Armor",
  "rarity": {
    "name": "Uncommon"
  },
  "url": "/api/magic-items/adamantine-armor",
  "variant": false,
  "variants": []
}
```

<h3 id="get-a-magic-item-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MagicItem](#schemamagicitem)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a weapon property by index.

> Code samples

```bash
curl https://example.com/api/weapon-properties/ammunition \
  -H 'Accept: application/json'
```

`GET /api/weapon-properties/{index}`

<h3 id="get-a-weapon-property-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the weapon property to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|ammunition|
|index|finesse|
|index|heavy|
|index|light|
|index|loading|
|index|monk|
|index|reach|
|index|special|
|index|thrown|
|index|two-handed|
|index|versatile|

> Example responses

> 200 Response

```json
{
  "desc": [
    "You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon).",
    "At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield. If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon (see \"Improvised Weapons\" later in the section). A sling must be loaded to deal any damage when used in this way."
  ],
  "index": "ammunition",
  "name": "Ammunition",
  "url": "/api/weapon-properties/ammunition"
}
```

<h3 id="get-a-weapon-property-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WeaponProperty](#schemaweaponproperty)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-feats">Feats</h1>

## Get a feat by index.

> Code samples

```bash
curl https://example.com/api/feats/grappler \
  -H 'Accept: application/json'
```

`GET /api/feats/{index}`

# Feat 

A feat is a boon a character can receive at level up instead of an ability score increase.


<h3 id="get-a-feat-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the feat to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|grappler|

> Example responses

> 200 Response

```json
{
  "desc": [
    "You’ve developed the Skills necessary to hold your own in close--quarters Grappling. You gain the following benefits:",
    "- You have advantage on Attack Rolls against a creature you are Grappling.",
    "- You can use your action to try to pin a creature Grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both Restrained until the grapple ends."
  ],
  "index": "grappler",
  "name": "Grappler",
  "prerequisites": [
    {
      "ability_score": {
        "index": "str",
        "name": "STR",
        "url": "/api/ability-scores/str"
      },
      "minimum_score": 13
    }
  ],
  "url": "/api/feats/grappler"
}
```

<h3 id="get-a-feat-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Feat](#schemafeat)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-features">Features</h1>

## Get a feature by index.

> Code samples

```bash
curl https://example.com/api/features/action-surge-1-use \
  -H 'Accept: application/json'
```

`GET /api/features/{index}`

# Feature 

When you gain a new level in a class, you get its features for that level. 
You don’t, however, receive the class’s starting Equipment, and a few 
features have additional rules when you’re multiclassing: Channel Divinity, 
Extra Attack, Unarmored Defense, and Spellcasting.


<h3 id="get-a-feature-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the feature to get.<br><br>Available values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `features`.<br>|

> Example responses

> 200 Response

```json
{
  "class": {
    "index": "fighter",
    "name": "Fighter",
    "url": "/api/classes/fighter"
  },
  "desc": [
    "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
    "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
  ],
  "index": "action-surge-1-use",
  "level": 2,
  "name": "Action Surge (1 use)",
  "prerequisites": [],
  "url": "/api/features/action-surge-1-use"
}
```

<h3 id="get-a-feature-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Feature](#schemafeature)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-monsters">Monsters</h1>

## Get list of monsters with optional filtering

> Code samples

```bash
curl https://example.com/api/monsters \
  -H 'Accept: application/json'
```

`GET /api/monsters`

<h3 id="get-list-of-monsters-with-optional-filtering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|challenge_rating|query|[number]|false|The challenge rating or ratings to filter on.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-list-of-monsters-with-optional-filtering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get monster by index.

> Code samples

```bash
curl https://example.com/api/monsters/aboleth \
  -H 'Accept: application/json'
```

`GET /api/monsters/{index}`

<h3 id="get-monster-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the `Monster` to get.<br>|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "actions": [
        {
          "action_name": "Tentacle",
          "count": 3,
          "type": "melee"
        }
      ],
      "attacks": [],
      "damage": [],
      "desc": "The aboleth makes three tentacle attacks.",
      "multiattack_type": "actions",
      "name": "Multiattack"
    },
    {
      "attack_bonus": 9,
      "attacks": [],
      "damage": [
        {
          "damage_dice": "2d6+5",
          "damage_type": {
            "index": "bludgeoning",
            "name": "Bludgeoning",
            "url": "/api/damage-types/bludgeoning"
          }
        },
        {
          "damage_dice": "1d12",
          "damage_type": {
            "index": "acid",
            "name": "Acid",
            "url": "/api/damage-types/acid"
          }
        }
      ],
      "dc": {
        "dc_type": {
          "index": "con",
          "name": "CON",
          "url": "/api/ability-scores/con"
        },
        "dc_value": 14,
        "success_type": "none"
      },
      "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
      "name": "Tentacle"
    },
    {
      "attack_bonus": 9,
      "attacks": [],
      "damage": [
        {
          "damage_dice": "3d6+5",
          "damage_type": {
            "index": "bludgeoning",
            "name": "Bludgeoning",
            "url": "/api/damage-types/bludgeoning"
          }
        }
      ],
      "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
      "name": "Tail"
    },
    {
      "attacks": [],
      "damage": [],
      "dc": {
        "dc_type": {
          "index": "wis",
          "name": "WIS",
          "url": "/api/ability-scores/wis"
        },
        "dc_value": 14,
        "success_type": "none"
      },
      "desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
      "name": "Enslave",
      "usage": {
        "times": 3,
        "type": "per day"
      }
    }
  ],
  "alignment": "lawful evil",
  "armor_class": [
    {
      "type": "natural",
      "value": 17
    }
  ],
  "challenge_rating": 10,
  "charisma": 18,
  "condition_immunities": [],
  "constitution": 15,
  "damage_immunities": [],
  "damage_resistances": [],
  "damage_vulnerabilities": [],
  "dexterity": 9,
  "forms": [],
  "hit_dice": "18d10",
  "hit_points": 135,
  "hit_points_roll": "18d10+36",
  "index": "aboleth",
  "intelligence": 18,
  "languages": "Deep Speech, telepathy 120 ft.",
  "legendary_actions": [
    {
      "damage": [],
      "desc": "The aboleth makes a Wisdom (Perception) check.",
      "name": "Detect"
    },
    {
      "damage": [],
      "desc": "The aboleth makes one tail attack.",
      "name": "Tail Swipe"
    },
    {
      "attack_bonus": 0,
      "damage": [
        {
          "damage_dice": "3d6",
          "damage_type": {
            "index": "psychic",
            "name": "Psychic",
            "url": "/api/damage-types/psychic"
          }
        }
      ],
      "desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
      "name": "Psychic Drain (Costs 2 Actions)"
    }
  ],
  "name": "Aboleth",
  "proficiencies": [
    {
      "proficiency": {
        "index": "saving-throw-con",
        "name": "Saving Throw: CON",
        "url": "/api/proficiencies/saving-throw-con"
      },
      "value": 6
    },
    {
      "proficiency": {
        "index": "saving-throw-int",
        "name": "Saving Throw: INT",
        "url": "/api/proficiencies/saving-throw-int"
      },
      "value": 8
    },
    {
      "proficiency": {
        "index": "saving-throw-wis",
        "name": "Saving Throw: WIS",
        "url": "/api/proficiencies/saving-throw-wis"
      },
      "value": 6
    },
    {
      "proficiency": {
        "index": "skill-history",
        "name": "Skill: History",
        "url": "/api/proficiencies/skill-history"
      },
      "value": 12
    },
    {
      "proficiency": {
        "index": "skill-perception",
        "name": "Skill: Perception",
        "url": "/api/proficiencies/skill-perception"
      },
      "value": 10
    }
  ],
  "reactions": [],
  "senses": {
    "darkvision": "120 ft.",
    "passive_perception": 20
  },
  "size": "Large",
  "special_abilities": [
    {
      "damage": [],
      "desc": "The aboleth can breathe air and water.",
      "name": "Amphibious"
    },
    {
      "damage": [],
      "dc": {
        "dc_type": {
          "index": "con",
          "name": "CON",
          "url": "/api/ability-scores/con"
        },
        "dc_value": 14,
        "success_type": "none"
      },
      "desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
      "name": "Mucous Cloud"
    },
    {
      "damage": [],
      "desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
      "name": "Probing Telepathy"
    }
  ],
  "speed": {
    "swim": "40 ft.",
    "walk": "10 ft."
  },
  "strength": 21,
  "subtype": null,
  "type": "aberration",
  "url": "/api/monsters/aboleth",
  "wisdom": 15,
  "xp": 5900
}
```

<h3 id="get-monster-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Monster](#schemamonster)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-races">Races</h1>

## Get a race by index.

> Code samples

```bash
curl https://example.com/api/races/elf \
  -H 'Accept: application/json'
```

`GET /api/races/{index}`

Each race grants your character ability and skill bonuses as well as racial traits.

<h3 id="get-a-race-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the race to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|dragonborn|
|index|dwarf|
|index|elf|
|index|gnome|
|index|half-elf|
|index|half-orc|
|index|halfling|
|index|human|
|index|tiefling|

> Example responses

> 200 Response

```json
{
  "ability_bonuses": [
    {
      "ability_score": {
        "index": "dex",
        "name": "DEX",
        "url": "/api/ability-scores/dex"
      },
      "bonus": 2
    }
  ],
  "age": "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
  "alignment": "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.",
  "index": "elf",
  "language_desc": "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
  "languages": [
    {
      "index": "common",
      "name": "Common",
      "url": "/api/languages/common"
    },
    {
      "index": "elvish",
      "name": "Elvish",
      "url": "/api/languages/elvish"
    }
  ],
  "name": "Elf",
  "size": "Medium",
  "size_description": "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
  "speed": 30,
  "starting_proficiencies": [
    {
      "index": "skill-perception",
      "name": "Skill: Perception",
      "url": "/api/proficiencies/skill-perception"
    }
  ],
  "subraces": [
    {
      "index": "high-elf",
      "name": "High Elf",
      "url": "/api/subraces/high-elf"
    }
  ],
  "traits": [
    {
      "index": "darkvision",
      "name": "Darkvision",
      "url": "/api/traits/darkvision"
    },
    {
      "index": "fey-ancestry",
      "name": "Fey Ancestry",
      "url": "/api/traits/fey-ancestry"
    },
    {
      "index": "trance",
      "name": "Trance",
      "url": "/api/traits/trance"
    }
  ],
  "url": "/api/races/elf"
}
```

<h3 id="get-a-race-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Race](#schemarace)|

<aside class="success">
This operation does not require authentication
</aside>

## Get proficiencies available for a race.

> Code samples

```bash
curl https://example.com/api/races/elf/proficiencies \
  -H 'Accept: application/json'
```

`GET /api/races/{index}/proficiencies`

<h3 id="get-proficiencies-available-for-a-race-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the race to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|dragonborn|
|index|dwarf|
|index|elf|
|index|gnome|
|index|half-elf|
|index|half-orc|
|index|halfling|
|index|human|
|index|tiefling|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-proficiencies-available-for-a-race-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of proficiencies for the race.|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get subraces available for a race.

> Code samples

```bash
curl https://example.com/api/races/elf/subraces \
  -H 'Accept: application/json'
```

`GET /api/races/{index}/subraces`

<h3 id="get-subraces-available-for-a-race-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the race to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|dragonborn|
|index|dwarf|
|index|elf|
|index|gnome|
|index|half-elf|
|index|half-orc|
|index|halfling|
|index|human|
|index|tiefling|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-subraces-available-for-a-race-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of subraces for the race.|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get traits available for a race.

> Code samples

```bash
curl https://example.com/api/races/elf/traits \
  -H 'Accept: application/json'
```

`GET /api/races/{index}/traits`

<h3 id="get-traits-available-for-a-race-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the race to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|dragonborn|
|index|dwarf|
|index|elf|
|index|gnome|
|index|half-elf|
|index|half-orc|
|index|halfling|
|index|human|
|index|tiefling|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-traits-available-for-a-race-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of traits for the race.|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-rules">Rules</h1>

## Get a rule section by index.

> Code samples

```bash
curl https://example.com/api/rule-sections/traps \
  -H 'Accept: application/json'
```

`GET /api/rule-sections/{index}`

Rule sections represent a sub-heading and text that can be found underneath a rule heading in the SRD.

<h3 id="get-a-rule-section-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the rule section to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|ability-checks|
|index|ability-scores-and-modifiers|
|index|actions-in-combat|
|index|advantage-and-disadvantage|
|index|between-adventures|
|index|casting-a-spell|
|index|cover|
|index|damage-and-healing|
|index|diseases|
|index|fantasy-historical-pantheons|
|index|madness|
|index|making-an-attack|
|index|mounted-combat|
|index|movement|
|index|movement-and-position|
|index|objects|
|index|poisons|
|index|proficiency-bonus|
|index|resting|
|index|saving-throws|
|index|sentient-magic-items|
|index|standard-exchange-rates|
|index|the-environment|
|index|the-order-of-combat|
|index|the-planes-of-existence|
|index|time|
|index|traps|
|index|underwater-combat|
|index|using-each-ability|
|index|what-is-a-spell|

> Example responses

> 200 Response

```json
{
  "desc": "## Time\n\nIn situations where keeping track of the passage of time is important, the GM determines the time a task requires. The GM might use a different time scale depending on the context of the situation at hand. In a dungeon environment, the adventurers' movement happens on a scale of **minutes**. It takes them about a minute to creep down a long hallway, another minute to check for traps on the door at the end of the hall, and a good ten minutes to search the chamber beyond for anything interesting or valuable.\n\nIn a city or wilderness, a scale of **hours** is often more appropriate. Adventurers eager to reach the lonely tower at the heart of the forest hurry across those fifteen miles in just under four hours' time.\n\nFor long journeys, a scale of **days** works best.\n\nFollowing the road from Baldur's Gate to Waterdeep, the adventurers spend four uneventful days before a goblin ambush interrupts their journey.\n\nIn combat and other fast-paced situations, the game relies on **rounds**, a 6-second span of time.\n",
  "index": "time",
  "name": "Time",
  "url": "/api/rule-sections/time"
}
```

<h3 id="get-a-rule-section-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RuleSection](#schemarulesection)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a rule by index.

> Code samples

```bash
curl https://example.com/api/rules/adventuring \
  -H 'Accept: application/json'
```

`GET /api/rules/{index}`

# Rule 

Rules are pages in the SRD that document the mechanics of Dungeons and Dragons. 
Rules have descriptions which is the text directly underneath the rule heading 
in the SRD. Rules also have subsections for each heading underneath the rule in the SRD.


<h3 id="get-a-rule-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the rule to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|adventuring|
|index|appendix|
|index|combat|
|index|equipment|
|index|spellcasting|
|index|using-ability-scores|

> Example responses

> 200 Response

```json
{
  "desc": "# Using Ability Scores\n\nSix abilities provide a quick description of every creature's physical and mental characteristics:\n- **Strength**, measuring physical power\n- **Dexterity**, measuring agility\n- **Constitution**, measuring endurance\n- **Intelligence**, measuring reasoning and memory\n- **Wisdom**, measuring perception and insight\n- **Charisma**, measuring force of personality\n\nIs a character muscle-bound and insightful? Brilliant and charming? Nimble and hardy? Ability scores define these qualities-a creature's assets as well as weaknesses.\n\nThe three main rolls of the game-the ability check, the saving throw, and the attack roll-rely on the six ability scores. The book's introduction describes the basic rule behind these rolls: roll a d20, add an ability modifier derived from one of the six ability scores, and compare the total to a target number.\n\n**Ability Scores and Modifiers** Each of a creature's abilities has a score, a number that defines the magnitude of that ability. An ability score is not just a measure of innate capabilities, but also encompasses a creature's training and competence in activities related to that ability.\n\nA score of 10 or 11 is the normal human average, but adventurers and many monsters are a cut above average in most abilities. A score of 18 is the highest that a person usually reaches. Adventurers can have scores as high as 20, and monsters and divine beings can have scores as high as 30.\n\nEach ability also has a modifier, derived from the score and ranging from -5 (for an ability score of 1) to +10 (for a score of 30). The Ability Scores and Modifiers table notes the ability modifiers for the range of possible ability scores, from 1 to 30.\n",
  "index": "using-ability-scores",
  "name": "Using Ability Scores",
  "subsections": [
    {
      "index": "ability-scores-and-modifiers",
      "name": "Ability Scores and Modifiers",
      "url": "/api/rule-sections/ability-scores-and-modifiers"
    },
    {
      "index": "advantage-and-disadvantage",
      "name": "Advantage and Disadvantage",
      "url": "/api/rule-sections/advantage-and-disadvantage"
    },
    {
      "index": "proficiency-bonus",
      "name": "Proficiency Bonus",
      "url": "/api/rule-sections/proficiency-bonus"
    },
    {
      "index": "ability-checks",
      "name": "Ability Checks",
      "url": "/api/rule-sections/ability-checks"
    },
    {
      "index": "using-each-ability",
      "name": "Using Each Ability",
      "url": "/api/rule-sections/using-each-ability"
    },
    {
      "index": "saving-throws",
      "name": "Saving Throws",
      "url": "/api/rule-sections/saving-throws"
    }
  ],
  "url": "/api/rules/using-ability-scores"
}
```

<h3 id="get-a-rule-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Rule](#schemarule)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-spells">Spells</h1>

## Get list of spells with optional filtering.

> Code samples

```bash
curl https://example.com/api/spells \
  -H 'Accept: application/json'
```

`GET /api/spells`

<h3 id="get-list-of-spells-with-optional-filtering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|level|query|[integer]|false|The level or levels to filter on.|
|school|query|[string]|false|The magic school or schools to filter on.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-list-of-spells-with-optional-filtering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a spell by index.

> Code samples

```bash
curl https://example.com/api/spells/sacred-flame \
  -H 'Accept: application/json'
```

`GET /api/spells/{index}`

<h3 id="get-a-spell-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the `Spell` to get.<br><br>Available values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `spells`.<br>|

> Example responses

> 200 Response

```json
{
  "attack_type": "ranged",
  "casting_time": "1 action",
  "classes": [
    {
      "index": "cleric",
      "name": "Cleric",
      "url": "/api/classes/cleric"
    }
  ],
  "components": [
    "V",
    "S"
  ],
  "concentration": false,
  "damage": {
    "damage_at_character_level": {
      "1": "1d8",
      "5": "2d8",
      "11": "3d8",
      "17": "4d8"
    },
    "damage_type": {
      "index": "radiant",
      "name": "Radiant",
      "url": "/api/damage-types/radiant"
    }
  },
  "dc": {
    "dc_success": "none",
    "dc_type": {
      "index": "dex",
      "name": "DEX",
      "url": "/api/ability-scores/dex"
    }
  },
  "desc": [
    "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
    "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  ],
  "duration": "Instantaneous",
  "higher_level": [],
  "index": "sacred-flame",
  "level": 0,
  "name": "Sacred Flame",
  "range": "60 feet",
  "ritual": false,
  "school": {
    "index": "evocation",
    "name": "Evocation",
    "url": "/api/magic-schools/evocation"
  },
  "subclasses": [
    {
      "index": "lore",
      "name": "Lore",
      "url": "/api/subclasses/lore"
    }
  ],
  "url": "/api/spells/sacred-flame"
}
```

<h3 id="get-a-spell-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Spell](#schemaspell)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-subclasses">Subclasses</h1>

## Get a subclass by index.

> Code samples

```bash
curl https://example.com/api/subclasses/fiend \
  -H 'Accept: application/json'
```

`GET /api/subclasses/{index}`

Subclasses reflect the different paths a class may take as levels are gained.

<h3 id="get-a-subclass-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the subclass to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|berserker|
|index|champion|
|index|devotion|
|index|draconic|
|index|evocation|
|index|fiend|
|index|hunter|
|index|land|
|index|life|
|index|lore|
|index|open-hand|
|index|thief|

> Example responses

> 200 Response

```json
{
  "class": {
    "index": "warlock",
    "name": "Warlock",
    "url": "/api/classes/warlock"
  },
  "desc": [
    "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths."
  ],
  "index": "fiend",
  "name": "Fiend",
  "spells": [
    {
      "prerequisites": [
        {
          "index": "warlock-1",
          "name": "Warlock 1",
          "type": "level",
          "url": "/api/classes/warlock/levels/1"
        }
      ],
      "spell": {
        "index": "burning-hands",
        "name": "Burning Hands",
        "url": "/api/spells/burning-hands"
      }
    },
    {
      "prerequisites": [
        {
          "index": "warlock-1",
          "name": "Warlock 1",
          "type": "level",
          "url": "/api/classes/warlock/levels/1"
        }
      ],
      "spell": {
        "index": "command",
        "name": "Command",
        "url": "/api/spells/command"
      }
    },
    {
      "prerequisites": [
        {
          "index": "warlock-3",
          "name": "Warlock 3",
          "type": "level",
          "url": "/api/classes/warlock/levels/3"
        }
      ],
      "spell": {
        "index": "blindness-deafness",
        "name": "Blindness/Deafness",
        "url": "/api/spells/blindness-deafness"
      }
    },
    {
      "prerequisites": [
        {
          "index": "warlock-3",
          "name": "Warlock 3",
          "type": "level",
          "url": "/api/classes/warlock/levels/3"
        }
      ],
      "spell": {
        "index": "scorching-ray",
        "name": "Scorching Ray",
        "url": "/api/spells/scorching-ray"
      }
    },
    {
      "prerequisites": [
        {
          "index": "warlock-5",
          "name": "Warlock 5",
          "type": "level",
          "url": "/api/classes/warlock/levels/5"
        }
      ],
      "spell": {
        "index": "fireball",
        "name": "Fireball",
        "url": "/api/spells/fireball"
      }
    },
    {
      "prerequisites": [
        {
          "index": "warlock-5",
          "name": "Warlock 5",
          "type": "level",
          "url": "/api/classes/warlock/levels/5"
        }
      ],
      "spell": {
        "index": "stinking-cloud",
        "name": "Stinking Cloud",
        "url": "/api/spells/stinking-cloud"
      }
    },
    {
      "prerequisites": [
        {
          "index": "warlock-7",
          "name": "Warlock 7",
          "type": "level",
          "url": "/api/classes/warlock/levels/7"
        }
      ],
      "spell": {
        "index": "fire-shield",
        "name": "Fire Shield",
        "url": "/api/spells/fire-shield"
      }
    },
    {
      "prerequisites": [
        {
          "index": "warlock-7",
          "name": "Warlock 7",
          "type": "level",
          "url": "/api/classes/warlock/levels/7"
        }
      ],
      "spell": {
        "index": "wall-of-fire",
        "name": "Wall of Fire",
        "url": "/api/spells/wall-of-fire"
      }
    },
    {
      "prerequisites": [
        {
          "index": "warlock-9",
          "name": "Warlock 9",
          "type": "level",
          "url": "/api/classes/warlock/levels/9"
        }
      ],
      "spell": {
        "index": "flame-strike",
        "name": "Flame Strike",
        "url": "/api/spells/flame-strike"
      }
    },
    {
      "prerequisites": [
        {
          "index": "warlock-9",
          "name": "Warlock 9",
          "type": "level",
          "url": "/api/classes/warlock/levels/9"
        }
      ],
      "spell": {
        "index": "hallow",
        "name": "Hallow",
        "url": "/api/spells/hallow"
      }
    }
  ],
  "subclass_flavor": "Otherworldly Patron",
  "subclass_levels": "/api/subclasses/fiend/levels",
  "url": "/api/subclasses/fiend"
}
```

<h3 id="get-a-subclass-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Subclass](#schemasubclass)|

<aside class="success">
This operation does not require authentication
</aside>

## Get features available for a subclass.

> Code samples

```bash
curl https://example.com/api/subclasses/fiend/features \
  -H 'Accept: application/json'
```

`GET /api/subclasses/{index}/features`

<h3 id="get-features-available-for-a-subclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the subclass to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|berserker|
|index|champion|
|index|devotion|
|index|draconic|
|index|evocation|
|index|fiend|
|index|hunter|
|index|land|
|index|life|
|index|lore|
|index|open-hand|
|index|thief|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-features-available-for-a-subclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of features for the subclass.|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all level resources for a subclass.

> Code samples

```bash
curl https://example.com/api/subclasses/fiend/levels \
  -H 'Accept: application/json'
```

`GET /api/subclasses/{index}/levels`

<h3 id="get-all-level-resources-for-a-subclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the subclass to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|berserker|
|index|champion|
|index|devotion|
|index|draconic|
|index|evocation|
|index|fiend|
|index|hunter|
|index|land|
|index|life|
|index|lore|
|index|open-hand|
|index|thief|

> Example responses

> 200 Response

```json
[
  {
    "class": {
      "index": "string",
      "name": "string",
      "url": "string"
    },
    "features": [
      {
        "index": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "index": "string",
    "level": 0,
    "subclass": {
      "index": "string",
      "name": "string",
      "url": "string"
    },
    "url": "string"
  }
]
```

<h3 id="get-all-level-resources-for-a-subclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of level resource for the subclass.|Inline|

<h3 id="get-all-level-resources-for-a-subclass-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubclassLevelResource](#schemasubclasslevelresource)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get level resources for a subclass and level.

> Code samples

```bash
curl https://example.com/api/subclasses/fiend/levels/6 \
  -H 'Accept: application/json'
```

`GET /api/subclasses/{index}/levels/{subclass_level}`

<h3 id="get-level-resources-for-a-subclass-and-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the subclass to get.<br>|
|subclass_level|path|integer|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|berserker|
|index|champion|
|index|devotion|
|index|draconic|
|index|evocation|
|index|fiend|
|index|hunter|
|index|land|
|index|life|
|index|lore|
|index|open-hand|
|index|thief|

> Example responses

> 200 Response

```json
{
  "class": {
    "index": "paladin",
    "name": "Paladin",
    "url": "/api/classes/paladin"
  },
  "features": [
    {
      "index": "channel-divinity",
      "name": "Channel Divinity",
      "url": "/api/features/channel-divinity"
    }
  ],
  "index": "devotion-3",
  "level": 3,
  "subclass": {
    "index": "devotion",
    "name": "Devotion",
    "url": "/api/subclasses/devotion"
  },
  "url": "/api/subclasses/devotion/levels/3"
}
```

<h3 id="get-level-resources-for-a-subclass-and-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Level resource for the subclass and level.|[SubclassLevel](#schemasubclasslevel)|

<aside class="success">
This operation does not require authentication
</aside>

## Get features of the requested spell level available to the class.

> Code samples

```bash
curl https://example.com/api/subclasses/fiend/levels/6/features \
  -H 'Accept: application/json'
```

`GET /api/subclasses/{index}/levels/{subclass_level}/features`

<h3 id="get-features-of-the-requested-spell-level-available-to-the-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the subclass to get.<br>|
|subclass_level|path|integer|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|berserker|
|index|champion|
|index|devotion|
|index|draconic|
|index|evocation|
|index|fiend|
|index|hunter|
|index|land|
|index|life|
|index|lore|
|index|open-hand|
|index|thief|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-features-of-the-requested-spell-level-available-to-the-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of features for the subclass and level.|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-subraces">Subraces</h1>

## Get a subrace by index.

> Code samples

```bash
curl https://example.com/api/subraces/hill-dwarf \
  -H 'Accept: application/json'
```

`GET /api/subraces/{index}`

Subraces reflect the different varieties of a certain parent race.

<h3 id="get-a-subrace-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the subrace to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|high-elf|
|index|hill-dwarf|
|index|lightfoot-halfling|
|index|rock-gnome|

> Example responses

> 200 Response

```json
{
  "ability_bonuses": [
    {
      "ability_score": {
        "index": "wis",
        "name": "WIS",
        "url": "/api/ability-scores/wis"
      },
      "bonus": 1
    }
  ],
  "desc": "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",
  "index": "hill-dwarf",
  "languages": [],
  "name": "Hill Dwarf",
  "race": {
    "index": "dwarf",
    "name": "Dwarf",
    "url": "/api/races/dwarf"
  },
  "racial_traits": [
    {
      "index": "dwarven-toughness",
      "name": "Dwarven Toughness",
      "url": "/api/traits/dwarven-toughness"
    }
  ],
  "starting_proficiencies": [],
  "url": "/api/subraces/hill-dwarf"
}
```

<h3 id="get-a-subrace-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Subrace](#schemasubrace)|

<aside class="success">
This operation does not require authentication
</aside>

## Get proficiences available for a subrace.

> Code samples

```bash
curl https://example.com/api/subraces/hill-dwarf/proficiencies \
  -H 'Accept: application/json'
```

`GET /api/subraces/{index}/proficiencies`

<h3 id="get-proficiences-available-for-a-subrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the subrace to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|high-elf|
|index|hill-dwarf|
|index|lightfoot-halfling|
|index|rock-gnome|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-proficiences-available-for-a-subrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of proficiences for the subrace.|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get traits available for a subrace.

> Code samples

```bash
curl https://example.com/api/subraces/hill-dwarf/traits \
  -H 'Accept: application/json'
```

`GET /api/subraces/{index}/traits`

<h3 id="get-traits-available-for-a-subrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the subrace to get.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|high-elf|
|index|hill-dwarf|
|index|lightfoot-halfling|
|index|rock-gnome|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="get-traits-available-for-a-subrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of traits for the subrace.|[APIReferenceList](#schemaapireferencelist)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dd-5e-api-traits">Traits</h1>

## Get a trait by index.

> Code samples

```bash
curl https://example.com/api/traits/trance \
  -H 'Accept: application/json'
```

`GET /api/traits/{index}`

<h3 id="get-a-trait-by-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|The `index` of the `Trait` to get.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|index|artificers-lore|
|index|brave|
|index|breath-weapon|
|index|damage-resistance|
|index|darkvision|
|index|draconic-ancestry|
|index|draconic-ancestry-black|
|index|draconic-ancestry-blue|
|index|draconic-ancestry-brass|
|index|draconic-ancestry-bronze|
|index|draconic-ancestry-copper|
|index|draconic-ancestry-gold|
|index|draconic-ancestry-green|
|index|draconic-ancestry-red|
|index|draconic-ancestry-silver|
|index|draconic-ancestry-white|
|index|dwarven-combat-training|
|index|dwarven-resilience|
|index|dwarven-toughness|
|index|elf-weapon-training|
|index|extra-language|
|index|fey-ancestry|
|index|gnome-cunning|
|index|halfling-nimbleness|
|index|hellish-resistance|
|index|high-elf-cantrip|
|index|infernal-legacy|
|index|keen-senses|
|index|lucky|
|index|menacing|
|index|naturally-stealthy|
|index|relentless-endurance|
|index|savage-attacks|
|index|skill-versatility|
|index|stonecunning|
|index|tinker|
|index|tool-proficiency|
|index|trance|

> Example responses

> 200 Response

```json
{
  "desc": [
    "Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep."
  ],
  "index": "trance",
  "name": "Trance",
  "proficiencies": [],
  "races": [
    {
      "index": "elf",
      "name": "Elf",
      "url": "/api/races/elf"
    }
  ],
  "subraces": [],
  "url": "/api/traits/trance"
}
```

<h3 id="get-a-trait-by-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Trait](#schematrait)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_APIReference">APIReference</h2>
<!-- backwards compatibility -->
<a id="schemaapireference"></a>
<a id="schema_APIReference"></a>
<a id="tocSapireference"></a>
<a id="tocsapireference"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string"
}
```

`APIReference`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|

<h2 id="tocS_APIReferenceList">APIReferenceList</h2>
<!-- backwards compatibility -->
<a id="schemaapireferencelist"></a>
<a id="schema_APIReferenceList"></a>
<a id="tocSapireferencelist"></a>
<a id="tocsapireferencelist"></a>

```json
{
  "count": 0,
  "results": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

`APIReferenceList`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|Total number of resources available.|
|results|[[APIReference](#schemaapireference)]|false|none|none|

<h2 id="tocS_AbilityBonus">AbilityBonus</h2>
<!-- backwards compatibility -->
<a id="schemaabilitybonus"></a>
<a id="schema_AbilityBonus"></a>
<a id="tocSabilitybonus"></a>
<a id="tocsabilitybonus"></a>

```json
{
  "ability_score": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "bonus": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ability_score|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|bonus|number|false|none|Bonus amount for this ability score.|

<h2 id="tocS_AbilityScore">AbilityScore</h2>
<!-- backwards compatibility -->
<a id="schemaabilityscore"></a>
<a id="schema_AbilityScore"></a>
<a id="tocSabilityscore"></a>
<a id="tocsabilityscore"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "full_name": "string",
  "skills": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

`AbilityScore`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|full_name|string|false|none|Full name of the ability score.|
|skills|[[APIReference](#schemaapireference)]|false|none|List of skills that use this ability score.|

<h2 id="tocS_Alignment">Alignment</h2>
<!-- backwards compatibility -->
<a id="schemaalignment"></a>
<a id="schema_Alignment"></a>
<a id="tocSalignment"></a>
<a id="tocsalignment"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "abbreviation": "string",
  "desc": "string"
}
```

`Alignment`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|abbreviation|string|false|none|Abbreviation/initials/acronym for the alignment.|
|desc|string|false|none|Brief description of the resource.|

<h2 id="tocS_AreaOfEffect">AreaOfEffect</h2>
<!-- backwards compatibility -->
<a id="schemaareaofeffect"></a>
<a id="schema_AreaOfEffect"></a>
<a id="tocSareaofeffect"></a>
<a id="tocsareaofeffect"></a>

```json
{
  "size": 0,
  "type": "sphere"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|number|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sphere|
|type|cone|
|type|cylinder|
|type|line|
|type|cube|

<h2 id="tocS_Armor">Armor</h2>
<!-- backwards compatibility -->
<a id="schemaarmor"></a>
<a id="schema_Armor"></a>
<a id="tocSarmor"></a>
<a id="tocsarmor"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "armor_category": "string",
  "armor_class": {
    "property1": "string",
    "property2": "string"
  },
  "cost": {
    "quantity": 0,
    "unit": "string"
  },
  "equipment_category": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "stealth_disadvantage": true,
  "str_minimum": 0,
  "weight": 0
}
```

`Armor`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|armor_category|string|false|none|The category of armor this falls into.|
|armor_class|object|false|none|Details on how to calculate armor class.|
|cost|[Cost](#schemacost)|false|none|`Cost`<br>|
|equipment_category|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|stealth_disadvantage|boolean|false|none|Whether the armor gives disadvantage for Stealth.|
|str_minimum|number|false|none|Minimum STR required to use this armor.|
|weight|number|false|none|How much the equipment weighs.|

<h2 id="tocS_Background">Background</h2>
<!-- backwards compatibility -->
<a id="schemabackground"></a>
<a id="schema_Background"></a>
<a id="tocSbackground"></a>
<a id="tocsbackground"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "bonds": {
    "choose": 0,
    "desc": "string",
    "from": {},
    "type": "string"
  },
  "feature": {
    "desc": [
      "string"
    ],
    "name": "string"
  },
  "flaws": {
    "choose": 0,
    "desc": "string",
    "from": {},
    "type": "string"
  },
  "ideals": {
    "choose": 0,
    "desc": "string",
    "from": {},
    "type": "string"
  },
  "language_options": {
    "choose": 0,
    "desc": "string",
    "from": {},
    "type": "string"
  },
  "personality_traits": {},
  "starting_equipment": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "starting_equipment_options": {
    "choose": 0,
    "desc": "string",
    "from": {},
    "type": "string"
  },
  "starting_proficiencies": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

`Background`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|bonds|[Choice](#schemachoice)|false|none|`Choice`<br>|
|feature|object|false|none|Special feature granted to new characters of this background.|
|flaws|[Choice](#schemachoice)|false|none|`Choice`<br>|
|ideals|[Choice](#schemachoice)|false|none|`Choice`<br>|
|language_options|[Choice](#schemachoice)|false|none|`Choice`<br>|
|personality_traits|object|false|none|Choice of personality traits for this background.|
|starting_equipment|[[APIReference](#schemaapireference)]|false|none|Starting equipment for all new characters of this background.|
|starting_equipment_options|[Choice](#schemachoice)|false|none|`Choice`<br>|
|starting_proficiencies|[[APIReference](#schemaapireference)]|false|none|Starting proficiencies for all new characters of this background.|

<h2 id="tocS_Choice">Choice</h2>
<!-- backwards compatibility -->
<a id="schemachoice"></a>
<a id="schema_Choice"></a>
<a id="tocSchoice"></a>
<a id="tocschoice"></a>

```json
{
  "choose": 0,
  "desc": "string",
  "from": {
    "option_set_type": "string",
    "options_array": [
      {}
    ]
  },
  "type": "string"
}
```

`Choice`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choose|number|false|none|Number of items to pick from the list.|
|desc|string|false|none|Description of the choice to be made.|
|from|[OptionSet](#schemaoptionset)|false|none|`Option Set`<br>|
|type|string|false|none|Type of the resources to choose from.|

<h2 id="tocS_Class">Class</h2>
<!-- backwards compatibility -->
<a id="schemaclass"></a>
<a id="schema_Class"></a>
<a id="tocSclass"></a>
<a id="tocsclass"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "class_levels": "string",
  "hit_die": 0,
  "multi_classing": {
    "prerequisite_options": [
      {
        "choose": 0,
        "desc": "string",
        "from": {},
        "type": "string"
      }
    ],
    "prerequisites": [
      {
        "ability_score": {
          "index": "string",
          "name": "string",
          "url": "string"
        },
        "minimum_score": 0
      }
    ],
    "proficiencies": [
      {
        "index": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "proficiency_choices": [
      {
        "choose": 0,
        "desc": "string",
        "from": {},
        "type": "string"
      }
    ]
  },
  "proficiencies": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "proficiency_choices": [
    {
      "choose": 0,
      "desc": "string",
      "from": {},
      "type": "string"
    }
  ],
  "saving_throws": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "spellcasting": {
    "info": [
      {
        "desc": [
          "string"
        ],
        "name": "string"
      }
    ],
    "level": 0,
    "spellcasting_ability": {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  },
  "spells": "string",
  "starting_equipment": [
    {
      "equipment": {
        "index": "string",
        "name": "string",
        "url": "string"
      },
      "quantity": 0
    }
  ],
  "starting_equipment_options": [
    {
      "choose": 0,
      "desc": "string",
      "from": {},
      "type": "string"
    }
  ],
  "subclasses": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

`Class`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|class_levels|string|false|none|URL of the level resource for the class.|
|hit_die|number|false|none|Hit die of the class. (ex: 12 == 1d12).|
|multi_classing|[Multiclassing](#schemamulticlassing)|false|none|`Multiclassing`<br>|
|proficiencies|[[APIReference](#schemaapireference)]|false|none|List of starting proficiencies for all new characters of this class.|
|proficiency_choices|[[Choice](#schemachoice)]|false|none|List of choices of starting proficiencies.|
|saving_throws|[[APIReference](#schemaapireference)]|false|none|Saving throws the class is proficient in.|
|spellcasting|[Spellcasting](#schemaspellcasting)|false|none|`Spellcasting`<br>|
|spells|string|false|none|URL of the spell resource list for the class.|
|starting_equipment|[object]|false|none|List of equipment and their quantities all players of the class start with.|
|starting_equipment_options|[[Choice](#schemachoice)]|false|none|List of choices of starting equipment.|
|subclasses|[[APIReference](#schemaapireference)]|false|none|List of all possible subclasses this class can specialize in.|

<h2 id="tocS_ClassLevel">ClassLevel</h2>
<!-- backwards compatibility -->
<a id="schemaclasslevel"></a>
<a id="schema_ClassLevel"></a>
<a id="tocSclasslevel"></a>
<a id="tocsclasslevel"></a>

```json
{
  "ability_score_bonuses": 0,
  "class_specific": {
    "brutal_critical_dice": 0,
    "rage_count": 0,
    "rage_damage_bonus": 0
  },
  "features": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "index": "string",
  "level": 0,
  "prof_bonus": 0,
  "spellcasting": {
    "cantrips_known": 0,
    "spell_slots_level_1": 0,
    "spell_slots_level_2": 0,
    "spell_slots_level_3": 0,
    "spell_slots_level_4": 0,
    "spell_slots_level_5": 0,
    "spell_slots_level_6": 0,
    "spell_slots_level_7": 0,
    "spell_slots_level_8": 0,
    "spell_slots_level_9": 0,
    "spells_known": 0
  },
  "url": "string"
}
```

`ClassLevel`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ability_score_bonuses|number|false|none|Total number of ability score bonuses gained, added from previous levels.|
|class_specific|object|false|none|Class specific information such as dice values for bard songs and number of warlock invocations.|
|features|[[APIReference](#schemaapireference)]|false|none|Features automatically gained at this level.|
|index|string|false|none|Resource index for shorthand searching.|
|level|number|false|none|The number value for the current level object.|
|prof_bonus|number|false|none|Proficiency bonus for this class at the specified level.|
|spellcasting|object|false|none|Summary of spells known at this level.|
|url|string|false|none|URL of the referenced resource.|

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ]
}
```

`Condition`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|

<h2 id="tocS_Cost">Cost</h2>
<!-- backwards compatibility -->
<a id="schemacost"></a>
<a id="schema_Cost"></a>
<a id="tocScost"></a>
<a id="tocscost"></a>

```json
{
  "quantity": 0,
  "unit": "string"
}
```

`Cost`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity|number|false|none|Numerical amount of coins.|
|unit|string|false|none|Unit of coinage.|

<h2 id="tocS_DC">DC</h2>
<!-- backwards compatibility -->
<a id="schemadc"></a>
<a id="schema_DC"></a>
<a id="tocSdc"></a>
<a id="tocsdc"></a>

```json
{
  "dc_type": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "dc_value": 0,
  "success_type": "string"
}
```

`DC`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dc_type|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|dc_value|number|false|none|Value to beat|
|success_type|string|false|none|Result of a successful save. Can be \"none\", \"half\", or \"other\"|

<h2 id="tocS_Damage">Damage</h2>
<!-- backwards compatibility -->
<a id="schemadamage"></a>
<a id="schema_Damage"></a>
<a id="tocSdamage"></a>
<a id="tocsdamage"></a>

```json
{
  "damage_dice": "string",
  "damage_type": {
    "index": "string",
    "name": "string",
    "url": "string"
  }
}
```

`Damage`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|damage_dice|string|false|none|none|
|damage_type|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|

<h2 id="tocS_DamageAtCharacterLevel">DamageAtCharacterLevel</h2>
<!-- backwards compatibility -->
<a id="schemadamageatcharacterlevel"></a>
<a id="schema_DamageAtCharacterLevel"></a>
<a id="tocSdamageatcharacterlevel"></a>
<a id="tocsdamageatcharacterlevel"></a>

```json
{
  "damage_at_character_level": {},
  "damage_type": {
    "index": "string",
    "name": "string",
    "url": "string"
  }
}
```

'Spell Damage'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|damage_at_character_level|object|false|none|none|
|damage_type|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|

<h2 id="tocS_DamageAtSlotLevel">DamageAtSlotLevel</h2>
<!-- backwards compatibility -->
<a id="schemadamageatslotlevel"></a>
<a id="schema_DamageAtSlotLevel"></a>
<a id="tocSdamageatslotlevel"></a>
<a id="tocsdamageatslotlevel"></a>

```json
{
  "damage_at_slot_level": {},
  "damage_type": {
    "index": "string",
    "name": "string",
    "url": "string"
  }
}
```

'Spell Damage'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|damage_at_slot_level|object|false|none|none|
|damage_type|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|

<h2 id="tocS_DamageType">DamageType</h2>
<!-- backwards compatibility -->
<a id="schemadamagetype"></a>
<a id="schema_DamageType"></a>
<a id="tocSdamagetype"></a>
<a id="tocsdamagetype"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ]
}
```

`DamageType`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|

<h2 id="tocS_Equipment">Equipment</h2>
<!-- backwards compatibility -->
<a id="schemaequipment"></a>
<a id="schema_Equipment"></a>
<a id="tocSequipment"></a>
<a id="tocsequipment"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "category_range": "string",
  "cost": {
    "quantity": 0,
    "unit": "string"
  },
  "damage": {
    "damage_dice": "string",
    "damage_type": {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  },
  "equipment_category": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "properties": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "range": {
    "long": 0,
    "normal": 0
  },
  "two_handed_damage": {
    "damage_dice": "string",
    "damage_type": {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  },
  "weapon_category": "string",
  "weapon_range": "string",
  "weight": 0
}
```

`Equipment`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[Weapon](#schemaweapon)|false|none|`Weapon`<br>|
|*anyOf*|[Armor](#schemaarmor)|false|none|`Armor`<br>|
|*anyOf*|[Gear](#schemagear)|false|none|`Gear`<br>|
|*anyOf*|[EquipmentPack](#schemaequipmentpack)|false|none|`EquipmentPack`<br>|

<h2 id="tocS_EquipmentCategory">EquipmentCategory</h2>
<!-- backwards compatibility -->
<a id="schemaequipmentcategory"></a>
<a id="schema_EquipmentCategory"></a>
<a id="tocSequipmentcategory"></a>
<a id="tocsequipmentcategory"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "equipment": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

`EquipmentCategory`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|equipment|[[APIReference](#schemaapireference)]|false|none|A list of the equipment that falls into this category.|

<h2 id="tocS_EquipmentPack">EquipmentPack</h2>
<!-- backwards compatibility -->
<a id="schemaequipmentpack"></a>
<a id="schema_EquipmentPack"></a>
<a id="tocSequipmentpack"></a>
<a id="tocsequipmentpack"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "contents": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "cost": {
    "quantity": 0,
    "unit": "string"
  },
  "equipment_category": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "gear_category": {
    "index": "string",
    "name": "string",
    "url": "string"
  }
}
```

`EquipmentPack`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|contents|[[APIReference](#schemaapireference)]|false|none|The list of adventuring gear in the pack.|
|cost|[Cost](#schemacost)|false|none|`Cost`<br>|
|equipment_category|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|gear_category|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|

<h2 id="tocS_Feat">Feat</h2>
<!-- backwards compatibility -->
<a id="schemafeat"></a>
<a id="schema_Feat"></a>
<a id="tocSfeat"></a>
<a id="tocsfeat"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "prerequisites": [
    {
      "ability_score": {
        "index": "string",
        "name": "string",
        "url": "string"
      },
      "minimum_score": 0
    }
  ]
}
```

`Feat`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|prerequisites|[[Prerequisite](#schemaprerequisite)]|false|none|An object of APIReferences to ability scores and minimum scores.|

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "class": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "feature_specific": null,
  "level": 0,
  "parent": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "prerequisites": [
    {
      "level": 3,
      "type": "level"
    },
    {
      "feature": "martial-archetype",
      "type": "feature"
    },
    {
      "spell": "shield",
      "type": "spell"
    }
  ],
  "subclass": {
    "index": "string",
    "name": "string",
    "url": "string"
  }
}
```

`Feature`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|class|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|feature_specific|object|false|none|Information specific to this feature.|
|level|number|false|none|The level this feature is gained.|
|parent|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|prerequisites|[object]|false|none|The prerequisites for this feature.|
|subclass|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|

<h2 id="tocS_Gear">Gear</h2>
<!-- backwards compatibility -->
<a id="schemagear"></a>
<a id="schema_Gear"></a>
<a id="tocSgear"></a>
<a id="tocsgear"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "cost": {
    "quantity": 0,
    "unit": "string"
  },
  "equipment_category": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "gear_category": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "weight": 0
}
```

`Gear`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|cost|[Cost](#schemacost)|false|none|`Cost`<br>|
|equipment_category|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|gear_category|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|weight|number|false|none|How much the equipment weighs.|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": "string",
  "script": "string",
  "type": "Standard",
  "typical_speakers": [
    "string"
  ]
}
```

`Language`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|string|false|none|Brief description of the language.|
|script|string|false|none|Script used for writing in the language.|
|type|string|false|none|none|
|typical_speakers|[string]|false|none|List of races that tend to speak the language.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Standard|
|type|Exotic|

<h2 id="tocS_MagicItem">MagicItem</h2>
<!-- backwards compatibility -->
<a id="schemamagicitem"></a>
<a id="schema_MagicItem"></a>
<a id="tocSmagicitem"></a>
<a id="tocsmagicitem"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "equipment_category": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "rarity": {
    "name": "Varies"
  },
  "variant": true,
  "variants": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

`MagicItem`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|equipment_category|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|rarity|object|false|none|none|
|variant|boolean|false|none|Whether this is a variant or not|
|variants|[[APIReference](#schemaapireference)]|false|none|none|

<h2 id="tocS_MagicSchool">MagicSchool</h2>
<!-- backwards compatibility -->
<a id="schemamagicschool"></a>
<a id="schema_MagicSchool"></a>
<a id="tocSmagicschool"></a>
<a id="tocsmagicschool"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": "string"
}
```

`MagicSchool`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|string|false|none|Brief description of the resource.|

<h2 id="tocS_Monster">Monster</h2>
<!-- backwards compatibility -->
<a id="schemamonster"></a>
<a id="schema_Monster"></a>
<a id="tocSmonster"></a>
<a id="tocsmonster"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "charisma": 0,
  "constitution": 0,
  "dexterity": 0,
  "intelligence": 0,
  "strength": 0,
  "wisdom": 0,
  "actions": [
    {
      "action_options": {
        "choose": 0,
        "desc": "string",
        "from": {},
        "type": "string"
      },
      "actions": [
        {
          "action_name": "string",
          "count": 0,
          "type": "melee"
        }
      ],
      "attack_bonus": 0,
      "attacks": [
        {
          "damage": null,
          "dc": {
            "dc_type": {
              "index": "string",
              "name": "string",
              "url": "string"
            },
            "dc_value": 0,
            "success_type": "string"
          },
          "name": "string"
        }
      ],
      "damage": [
        {
          "damage_dice": "2d6+5",
          "damage_type": {
            "index": "string",
            "name": "string",
            "url": "string"
          }
        }
      ],
      "dc": {
        "dc_type": {
          "index": "string",
          "name": "string",
          "url": "string"
        },
        "dc_value": 0,
        "success_type": "string"
      },
      "desc": "string",
      "multiattack_type": "string",
      "name": "string",
      "options": {
        "choose": 0,
        "desc": "string",
        "from": {},
        "type": "string"
      }
    }
  ],
  "alignments": "chaotic neutral",
  "armor_class": [
    {
      "desc": "string",
      "type": "dex",
      "value": 0
    }
  ],
  "challenge_rating": 0,
  "condition_immunities": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "damage_immunities": [
    "string"
  ],
  "damage_resistances": [
    "string"
  ],
  "damage_vulnerabilities": [
    "string"
  ],
  "forms": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "hit_dice": "string",
  "hit_points": 0,
  "hit_points_roll": "string",
  "image": "string",
  "languages": "string",
  "legendary_actions": [
    {
      "action_options": {
        "choose": 0,
        "desc": "string",
        "from": {},
        "type": "string"
      },
      "actions": [
        {
          "action_name": "string",
          "count": 0,
          "type": "melee"
        }
      ],
      "attack_bonus": 0,
      "attacks": [
        {
          "damage": null,
          "dc": {
            "dc_type": {
              "index": "string",
              "name": "string",
              "url": "string"
            },
            "dc_value": 0,
            "success_type": "string"
          },
          "name": "string"
        }
      ],
      "damage": [
        {
          "damage_dice": "2d6+5",
          "damage_type": {
            "index": "string",
            "name": "string",
            "url": "string"
          }
        }
      ],
      "dc": {
        "dc_type": {
          "index": "string",
          "name": "string",
          "url": "string"
        },
        "dc_value": 0,
        "success_type": "string"
      },
      "desc": "string",
      "multiattack_type": "string",
      "name": "string",
      "options": {
        "choose": 0,
        "desc": "string",
        "from": {},
        "type": "string"
      }
    }
  ],
  "proficiencies": [
    {
      "proficiency": {
        "index": "string",
        "name": "string",
        "url": "string"
      },
      "value": 0
    }
  ],
  "reactions": [
    {
      "action_options": {
        "choose": 0,
        "desc": "string",
        "from": {},
        "type": "string"
      },
      "actions": [
        {
          "action_name": "string",
          "count": 0,
          "type": "melee"
        }
      ],
      "attack_bonus": 0,
      "attacks": [
        {
          "damage": null,
          "dc": {
            "dc_type": {
              "index": "string",
              "name": "string",
              "url": "string"
            },
            "dc_value": 0,
            "success_type": "string"
          },
          "name": "string"
        }
      ],
      "damage": [
        {
          "damage_dice": "2d6+5",
          "damage_type": {
            "index": "string",
            "name": "string",
            "url": "string"
          }
        }
      ],
      "dc": {
        "dc_type": {
          "index": "string",
          "name": "string",
          "url": "string"
        },
        "dc_value": 0,
        "success_type": "string"
      },
      "desc": "string",
      "multiattack_type": "string",
      "name": "string",
      "options": {
        "choose": 0,
        "desc": "string",
        "from": {},
        "type": "string"
      }
    }
  ],
  "senses": {
    "blindsight": "string",
    "darkvision": "string",
    "passive_perception": 0,
    "tremorsense": "string",
    "truesight": "string"
  },
  "size": "Tiny",
  "special_abilities": [
    {
      "attack_bonus": 0,
      "damage": [
        null
      ],
      "dc": {
        "dc_type": {
          "index": "string",
          "name": "string",
          "url": "string"
        },
        "dc_value": 0,
        "success_type": "string"
      },
      "desc": "string",
      "name": "string",
      "spellcasting": {
        "ability": {
          "index": "string",
          "name": "string",
          "url": "string"
        },
        "components_required": [
          "string"
        ],
        "dc": 0,
        "modifier": 0,
        "school": "string",
        "slots": {
          "property1": 0,
          "property2": 0
        },
        "spells": [
          {
            "level": 0,
            "name": "string",
            "url": "string",
            "usage": null
          }
        ]
      },
      "usage": {
        "rest_types": [
          "string"
        ],
        "times": 0,
        "type": "at will"
      }
    }
  ],
  "speed": {
    "burrow": "string",
    "climb": "string",
    "fly": "string",
    "swim": "string",
    "walk": "string"
  },
  "subtype": "string",
  "type": "string",
  "xp": 0
}
```

`Monster`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|charisma|number|false|none|A monster's ability to charm or intimidate a player.|
|constitution|number|false|none|How sturdy a monster is."|
|dexterity|number|false|none|The monster's ability for swift movement or stealth|
|intelligence|number|false|none|The monster's ability to outsmart a player.|
|strength|number|false|none|How hard a monster can hit a player.|
|wisdom|number|false|none|A monster's ability to ascertain the player's plan.|
|actions|[object]|false|none|A list of actions that are available to the monster to take during combat.|
|alignments|string|false|none|A creature's general moral and personal attitudes.|
|armor_class|[object]|false|none|The difficulty for a player to successfully deal damage to a monster.|
|challenge_rating|number|false|none|A monster's challenge rating is a guideline number that says when a monster becomes an appropriate challenge against the party's average level. For example. A group of 4 players with an average level of 4 would have an appropriate combat challenge against a monster with a challenge rating of 4 but a monster with a challenge rating of 8 against the same group of players would pose a significant threat.|
|condition_immunities|[[APIReference](#schemaapireference)]|false|none|A list of conditions that a monster is immune to.|
|damage_immunities|[string]|false|none|A list of damage types that a monster will take double damage from.|
|damage_resistances|[string]|false|none|A list of damage types that a monster will take half damage from.|
|damage_vulnerabilities|[string]|false|none|A list of damage types that a monster will take double damage from.|
|forms|[[APIReference](#schemaapireference)]|false|none|List of other related monster entries that are of the same form. Only applicable to Lycanthropes that have multiple forms.|
|hit_dice|string|false|none|The hit die of a monster can be used to make a version of the same monster whose hit points are determined by the roll of the die. For example: A monster with 2d6 would have its hit points determine by rolling a 6 sided die twice.|
|hit_points|number|false|none|The hit points of a monster determine how much damage it is able to take before it can be defeated.|
|hit_points_roll|string|false|none|The roll for determining a monster's hit points, which consists of the hit dice (e.g. 18d10) and the modifier determined by its Constitution (e.g. +36). For example, 18d10+36|
|image|string|false|none|The image url of the monster.|
|languages|string|false|none|The languages a monster is able to speak.|
|legendary_actions|[object]|false|none|A list of legendary actions that are available to the monster to take during combat.|
|proficiencies|[object]|false|none|A list of proficiencies of a monster.|
|reactions|[object]|false|none|A list of reactions that is available to the monster to take during combat.|
|senses|object|false|none|Monsters typically have a passive perception but they might also have other senses to detect players.|
|size|string|false|none|The size of the monster ranging from Tiny to Gargantuan."|
|special_abilities|[object]|false|none|A list of the monster's special abilities.|
|speed|object|false|none|Speed for a monster determines how fast it can move per turn.|
|subtype|string|false|none|The sub-category of a monster used for classification of monsters."|
|type|string|false|none|The type of monster.|
|xp|number|false|none|The number of experience points (XP) a monster is worth is based on its challenge rating.|

#### Enumerated Values

|Property|Value|
|---|---|
|alignments|chaotic neutral|
|alignments|chaotic evil|
|alignments|chaotic good|
|alignments|lawful neutral|
|alignments|lawful evil|
|alignments|lawful good|
|alignments|neutral|
|alignments|neutral evil|
|alignments|neutral good|
|alignments|any alignment|
|alignments|unaligned|
|size|Tiny|
|size|Small|
|size|Medium|
|size|Large|
|size|Huge|
|size|Gargantuan|

<h2 id="tocS_Multiclassing">Multiclassing</h2>
<!-- backwards compatibility -->
<a id="schemamulticlassing"></a>
<a id="schema_Multiclassing"></a>
<a id="tocSmulticlassing"></a>
<a id="tocsmulticlassing"></a>

```json
{
  "prerequisite_options": [
    {
      "choose": 0,
      "desc": "string",
      "from": {},
      "type": "string"
    }
  ],
  "prerequisites": [
    {
      "ability_score": {
        "index": "string",
        "name": "string",
        "url": "string"
      },
      "minimum_score": 0
    }
  ],
  "proficiencies": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "proficiency_choices": [
    {
      "choose": 0,
      "desc": "string",
      "from": {},
      "type": "string"
    }
  ]
}
```

`Multiclassing`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prerequisite_options|[[Choice](#schemachoice)]|false|none|List of choices of prerequisites to meet for.|
|prerequisites|[[Prerequisite](#schemaprerequisite)]|false|none|List of prerequisites that must be met.|
|proficiencies|[[APIReference](#schemaapireference)]|false|none|List of proficiencies available when multiclassing.|
|proficiency_choices|[[Choice](#schemachoice)]|false|none|List of choices of proficiencies that are given when multiclassing.|

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
{
  "item": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "option_type": "string"
}
```

`Option`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|item|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|option_type|string|false|none|Type of option; determines other attributes.|
|*oneOf*|object|false|none|none|
|action_name|string|false|none|The name of the action.|
|count|number|false|none|The number of times this action can be repeated if chosen.|
|option_type|string|false|none|Type of option; determines other attributes.|
|type|string|false|none|For attack options that can be melee, ranged, abilities, or thrown.|
|*oneOf*|object|false|none|none|
|items|[[Option](#schemaoption)]|false|none|none|
|option_type|string|false|none|Type of option; determines other attributes.|
|*oneOf*|object|false|none|none|
|choice|[Choice](#schemachoice)|false|none|`Choice`<br>|
|option_type|string|false|none|Type of option; determines other attributes.|
|*oneOf*|object|false|none|none|
|option_type|string|false|none|Type of option; determines other attributes.|
|string|string|false|none|The string.|
|*oneOf*|object|false|none|none|
|alignments|[[APIReference](#schemaapireference)]|false|none|A list of alignments of those who might follow the ideal.|
|desc|string|false|none|A description of the ideal.|
|option_type|string|false|none|Type of option; determines other attributes.|
|*oneOf*|object|false|none|none|
|count|number|false|none|Count|
|of|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|option_type|string|false|none|Type of option; determines other attributes.|
|*oneOf*|object|false|none|none|
|ability_score|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|minimum_score|number|false|none|The minimum score required to satisfy the prerequisite.|
|option_type|string|false|none|Type of option; determines other attributes.|
|*oneOf*|object|false|none|none|
|ability_score|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|bonus|number|false|none|The bonus being applied to the ability score|
|option_type|string|false|none|Type of option; determines other attributes.|
|*oneOf*|object|false|none|none|
|damage|[[Damage](#schemadamage)]|false|none|Damage dealt by the breath attack, if any.|
|dc|[DC](#schemadc)|false|none|`DC`<br>|
|name|string|false|none|Name of the breath|
|option_type|string|false|none|Type of option; determines other attributes.|
|*oneOf*|object|false|none|none|
|damage_dice|string|false|none|Damage expressed in dice (e.g. "13d6").|
|damage_type|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|notes|string|false|none|Information regarding the damage.|
|option_type|string|false|none|Type of option; determines other attributes.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|melee|
|type|ranged|
|type|ability|
|type|magic|

<h2 id="tocS_OptionSet">OptionSet</h2>
<!-- backwards compatibility -->
<a id="schemaoptionset"></a>
<a id="schema_OptionSet"></a>
<a id="tocSoptionset"></a>
<a id="tocsoptionset"></a>

```json
{
  "option_set_type": "string",
  "options_array": [
    {
      "item": {
        "index": "string",
        "name": "string",
        "url": "string"
      },
      "option_type": "string"
    }
  ]
}
```

`Option Set`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|option_set_type|string|false|none|Type of option set; determines other attributes.|
|options_array|[[Option](#schemaoption)]|false|none|Array of options to choose from.|
|*oneOf*|object|false|none|none|
|equipment_category|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|option_set_type|string|false|none|Type of option set; determines other attributes.|
|*oneOf*|object|false|none|none|
|option_set_type|string|false|none|Type of option set; determines other attributes.|
|resource_list|string|false|none|A reference (by URL) to a collection in the database.|

<h2 id="tocS_Prerequisite">Prerequisite</h2>
<!-- backwards compatibility -->
<a id="schemaprerequisite"></a>
<a id="schema_Prerequisite"></a>
<a id="tocSprerequisite"></a>
<a id="tocsprerequisite"></a>

```json
{
  "ability_score": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "minimum_score": 0
}
```

`Prerequisite`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ability_score|object|false|none|none|
|minimum_score|number|false|none|Minimum score to meet the prerequisite.|

<h2 id="tocS_Proficiency">Proficiency</h2>
<!-- backwards compatibility -->
<a id="schemaproficiency"></a>
<a id="schema_Proficiency"></a>
<a id="tocSproficiency"></a>
<a id="tocsproficiency"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "classes": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "races": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "reference": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "type": "string"
}
```

`Proficiency`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|classes|[[APIReference](#schemaapireference)]|false|none|Classes that start with this proficiency.|
|races|[[APIReference](#schemaapireference)]|false|none|Races that start with this proficiency.|
|reference|object|false|none|`APIReference` to the full description of the related resource.<br>|
|type|string|false|none|The general category of the proficiency.|

<h2 id="tocS_Race">Race</h2>
<!-- backwards compatibility -->
<a id="schemarace"></a>
<a id="schema_Race"></a>
<a id="tocSrace"></a>
<a id="tocsrace"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "ability_bonuses": [
    {
      "ability_score": {
        "index": "string",
        "name": "string",
        "url": "string"
      },
      "bonus": 0
    }
  ],
  "age": "string",
  "alignment": "string",
  "language_desc": "string",
  "languages": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "size": "string",
  "size_description": "string",
  "speed": 0,
  "starting_proficiencies": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "starting_proficiency_options": {
    "choose": 0,
    "desc": "string",
    "from": {},
    "type": "string"
  },
  "subraces": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "traits": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

`Race`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|ability_bonuses|[[AbilityBonus](#schemaabilitybonus)]|false|none|Racial bonuses to ability scores.|
|age|string|false|none|Flavor description of possible ages for this race.|
|alignment|string|false|none|Flavor description of likely alignments this race takes.|
|language_desc|string|false|none|Flavor description of the languages this race knows.|
|languages|[[APIReference](#schemaapireference)]|false|none|Starting languages for all new characters of this race.|
|size|string|false|none|Size class of this race.|
|size_description|string|false|none|Flavor description of height and weight for this race.|
|speed|number|false|none|Base move speed for this race (in feet per round).|
|starting_proficiencies|[[APIReference](#schemaapireference)]|false|none|Starting proficiencies for all new characters of this race.|
|starting_proficiency_options|[Choice](#schemachoice)|false|none|Starting proficiency options for all new characters of this race.|
|subraces|[[APIReference](#schemaapireference)]|false|none|All possible subraces that this race includes.|
|traits|[[APIReference](#schemaapireference)]|false|none|Racial traits that provide benefits to its members.|

<h2 id="tocS_ResourceDescription">ResourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedescription"></a>
<a id="schema_ResourceDescription"></a>
<a id="tocSresourcedescription"></a>
<a id="tocsresourcedescription"></a>

```json
{
  "desc": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desc|[string]|false|none|Description of the resource.|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": "string",
  "subsections": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

`Rule`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|string|false|none|Description of the rule.|
|subsections|[[APIReference](#schemaapireference)]|false|none|List of sections for each subheading underneath the rule in the SRD.|

<h2 id="tocS_RuleSection">RuleSection</h2>
<!-- backwards compatibility -->
<a id="schemarulesection"></a>
<a id="schema_RuleSection"></a>
<a id="tocSrulesection"></a>
<a id="tocsrulesection"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": "string"
}
```

`RuleSection`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|string|false|none|Description of the rule.|

<h2 id="tocS_Skill">Skill</h2>
<!-- backwards compatibility -->
<a id="schemaskill"></a>
<a id="schema_Skill"></a>
<a id="tocSskill"></a>
<a id="tocsskill"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "ability_score": {
    "index": "string",
    "name": "string",
    "url": "string"
  }
}
```

`Skill`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|ability_score|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|

<h2 id="tocS_Spell">Spell</h2>
<!-- backwards compatibility -->
<a id="schemaspell"></a>
<a id="schema_Spell"></a>
<a id="tocSspell"></a>
<a id="tocsspell"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "area_of_effect": {
    "size": 0,
    "type": "sphere"
  },
  "attack_type": "string",
  "casting_time": "string",
  "classes": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "components": [
    "V"
  ],
  "concentration": true,
  "damage": {
    "damage_at_character_level": {},
    "damage_type": {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  },
  "duration": "string",
  "higher_level": [
    "string"
  ],
  "level": 0,
  "material": "string",
  "range": "string",
  "ritual": true,
  "school": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "subclasses": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

`Spell`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|area_of_effect|[AreaOfEffect](#schemaareaofeffect)|false|none|none|
|attack_type|string|false|none|Attack type of the spell.|
|casting_time|string|false|none|How long it takes for the spell to activate.|
|classes|[[APIReference](#schemaapireference)]|false|none|List of classes that are able to learn the spell.|
|components|[string]|false|none|List of shorthand for required components of the spell.<br>V: verbal<br>S: somatic<br>M: material<br>|
|concentration|boolean|false|none|Determines if a spell needs concentration to persist.|
|damage|[DamageAtCharacterLevel](#schemadamageatcharacterlevel) \| [DamageAtSlotLevel](#schemadamageatslotlevel)|false|none|none|
|duration|string|false|none|How long the spell effect lasts.|
|higher_level|[string]|false|none|List of descriptions for casting the spell at higher levels.|
|level|number|false|none|Level of the spell.|
|material|string|false|none|Material component for the spell to be cast.|
|range|string|false|none|Range of the spell, usually expressed in feet.|
|ritual|boolean|false|none|Determines if a spell can be cast in a 10-min(in-game) ritual.|
|school|[APIReference](#schemaapireference)|false|none|Magic school this spell belongs to.|
|subclasses|[[APIReference](#schemaapireference)]|false|none|List of subclasses that have access to the spell.|

#### Enumerated Values

|Property|Value|
|---|---|
|components|V|
|components|S|
|components|M|

<h2 id="tocS_SpellPrerequisite">SpellPrerequisite</h2>
<!-- backwards compatibility -->
<a id="schemaspellprerequisite"></a>
<a id="schema_SpellPrerequisite"></a>
<a id="tocSspellprerequisite"></a>
<a id="tocsspellprerequisite"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "type": "string"
}
```

`SpellPrerequisite`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|type|string|false|none|The type of prerequisite.|

<h2 id="tocS_Spellcasting">Spellcasting</h2>
<!-- backwards compatibility -->
<a id="schemaspellcasting"></a>
<a id="schema_Spellcasting"></a>
<a id="tocSspellcasting"></a>
<a id="tocsspellcasting"></a>

```json
{
  "info": [
    {
      "desc": [
        "string"
      ],
      "name": "string"
    }
  ],
  "level": 0,
  "spellcasting_ability": {
    "index": "string",
    "name": "string",
    "url": "string"
  }
}
```

`Spellcasting`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|[object]|false|none|Descriptions of the class' ability to cast spells.|
|level|number|false|none|Level at which the class can start using its spellcasting abilities.|
|spellcasting_ability|object|false|none|Reference to the `AbilityScore` used for spellcasting by the class.|

<h2 id="tocS_Subclass">Subclass</h2>
<!-- backwards compatibility -->
<a id="schemasubclass"></a>
<a id="schema_Subclass"></a>
<a id="tocSsubclass"></a>
<a id="tocssubclass"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "class": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "spells": [
    {
      "prerequisites": [
        {
          "index": "string",
          "name": "string",
          "url": "string",
          "type": "string"
        }
      ],
      "spell": {
        "index": "string",
        "name": "string",
        "url": "string"
      }
    }
  ],
  "subclass_flavor": "string",
  "subclass_levels": "string"
}
```

`Subclass`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|class|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|spells|[object]|false|none|none|
|subclass_flavor|string|false|none|Lore-friendly flavor text for a classes respective subclass.|
|subclass_levels|string|false|none|Resource url that shows the subclass level progression.|

<h2 id="tocS_SubclassLevel">SubclassLevel</h2>
<!-- backwards compatibility -->
<a id="schemasubclasslevel"></a>
<a id="schema_SubclassLevel"></a>
<a id="tocSsubclasslevel"></a>
<a id="tocssubclasslevel"></a>

```json
{
  "ability_score_bonuses": 0,
  "classspecific": {
    "property1": null,
    "property2": null
  },
  "features": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "index": "string",
  "level": 0,
  "prof_bonus": 0,
  "spellcasting": {
    "cantrips_known": 0,
    "spell_slots_level_1": 0,
    "spell_slots_level_2": 0,
    "spell_slots_level_3": 0,
    "spell_slots_level_4": 0,
    "spell_slots_level_5": 0,
    "spell_slots_level_6": 0,
    "spell_slots_level_7": 0,
    "spell_slots_level_8": 0,
    "spell_slots_level_9": 0,
    "spells_known": 0
  },
  "url": "string"
}
```

`SubclassLevel`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ability_score_bonuses|number|false|none|Total number of ability score bonuses gained, added from previous levels.|
|classspecific|object|false|none|Class specific information such as dice values for bard songs and number of warlock invocations.|
|features|[[APIReference](#schemaapireference)]|false|none|List of features gained at this level.|
|index|string|false|none|Resource index for shorthand searching.|
|level|number|false|none|Number value for the current level object.|
|prof_bonus|number|false|none|Proficiency bonus for this class at the specified level.|
|spellcasting|object|false|none|Summary of spells known at this level.|
|url|string|false|none|URL of the referenced resource.|

<h2 id="tocS_SubclassLevelResource">SubclassLevelResource</h2>
<!-- backwards compatibility -->
<a id="schemasubclasslevelresource"></a>
<a id="schema_SubclassLevelResource"></a>
<a id="tocSsubclasslevelresource"></a>
<a id="tocssubclasslevelresource"></a>

```json
{
  "class": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "features": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "index": "string",
  "level": 0,
  "subclass": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|features|[[APIReference](#schemaapireference)]|false|none|none|
|index|string|false|none|none|
|level|number|false|none|none|
|subclass|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|url|string|false|none|none|

<h2 id="tocS_Subrace">Subrace</h2>
<!-- backwards compatibility -->
<a id="schemasubrace"></a>
<a id="schema_Subrace"></a>
<a id="tocSsubrace"></a>
<a id="tocssubrace"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "ability_bonuses": [
    {
      "ability_score": {
        "index": "string",
        "name": "string",
        "url": "string"
      },
      "bonus": 0
    }
  ],
  "desc": "string",
  "language_options": {
    "choose": 0,
    "desc": "string",
    "from": {},
    "type": "string"
  },
  "languages": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "race": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "racial_traits": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "starting_proficiencies": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

`Subrace`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|ability_bonuses|[[AbilityBonus](#schemaabilitybonus)]|false|none|Additional ability bonuses for the subrace.|
|desc|string|false|none|Description of the subrace.|
|language_options|[Choice](#schemachoice)|false|none|Starting languages to choose from for the subrace.|
|languages|[[APIReference](#schemaapireference)]|false|none|Starting languages for all new characters of the subrace.|
|race|object|false|none|Parent race for the subrace.|
|racial_traits|[[APIReference](#schemaapireference)]|false|none|List of traits that for the subrace.|
|starting_proficiencies|[[APIReference](#schemaapireference)]|false|none|Starting proficiencies for all new characters of the subrace.|

<h2 id="tocS_Trait">Trait</h2>
<!-- backwards compatibility -->
<a id="schematrait"></a>
<a id="schema_Trait"></a>
<a id="tocStrait"></a>
<a id="tocstrait"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "language_options": {
    "choose": 0,
    "desc": "string",
    "from": {},
    "type": "string"
  },
  "proficiencies": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "proficiency_choices": {
    "choose": 0,
    "desc": "string",
    "from": {},
    "type": "string"
  },
  "races": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "subraces": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "trait_specific": {
    "choose": 0,
    "desc": "string",
    "from": {},
    "type": "string"
  }
}
```

`Trait`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|language_options|[Choice](#schemachoice)|false|none|`Choice`<br>|
|proficiencies|[[APIReference](#schemaapireference)]|false|none|List of `Proficiencies` this trait grants.|
|proficiency_choices|[Choice](#schemachoice)|false|none|`Choice`<br>|
|races|[[APIReference](#schemaapireference)]|false|none|List of `Races` that have access to the trait.|
|subraces|[[APIReference](#schemaapireference)]|false|none|List of `Subraces` that have access to the trait.|
|trait_specific|[Choice](#schemachoice) \| object|false|none|Information specific to this trait|

<h2 id="tocS_Weapon">Weapon</h2>
<!-- backwards compatibility -->
<a id="schemaweapon"></a>
<a id="schema_Weapon"></a>
<a id="tocSweapon"></a>
<a id="tocsweapon"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ],
  "category_range": "string",
  "cost": {
    "quantity": 0,
    "unit": "string"
  },
  "damage": {
    "damage_dice": "string",
    "damage_type": {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  },
  "equipment_category": {
    "index": "string",
    "name": "string",
    "url": "string"
  },
  "properties": [
    {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "range": {
    "long": 0,
    "normal": 0
  },
  "two_handed_damage": {
    "damage_dice": "string",
    "damage_type": {
      "index": "string",
      "name": "string",
      "url": "string"
    }
  },
  "weapon_category": "string",
  "weapon_range": "string",
  "weight": 0
}
```

`Weapon`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|
|category_range|string|false|none|A combination of weapon_category and weapon_range.|
|cost|[Cost](#schemacost)|false|none|`Cost`<br>|
|damage|[Damage](#schemadamage)|false|none|`Damage`<br>|
|equipment_category|[APIReference](#schemaapireference)|false|none|`APIReference`<br>|
|properties|[[APIReference](#schemaapireference)]|false|none|A list of the properties this weapon has.|
|range|object|false|none|none|
|two_handed_damage|[Damage](#schemadamage)|false|none|`Damage`<br>|
|weapon_category|string|false|none|The category of weapon this falls into.|
|weapon_range|string|false|none|Whether this is a Melee or Ranged weapon.|
|weight|number|false|none|How much the equipment weighs.|

<h2 id="tocS_WeaponProperty">WeaponProperty</h2>
<!-- backwards compatibility -->
<a id="schemaweaponproperty"></a>
<a id="schema_WeaponProperty"></a>
<a id="tocSweaponproperty"></a>
<a id="tocsweaponproperty"></a>

```json
{
  "index": "string",
  "name": "string",
  "url": "string",
  "desc": [
    "string"
  ]
}
```

WeaponProperty

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Resource index for shorthand searching.|
|name|string|false|none|Name of the referenced resource.|
|url|string|false|none|URL of the referenced resource.|
|desc|[string]|false|none|Description of the resource.|

<h2 id="tocS_error-response">error-response</h2>
<!-- backwards compatibility -->
<a id="schemaerror-response"></a>
<a id="schema_error-response"></a>
<a id="tocSerror-response"></a>
<a id="tocserror-response"></a>

```json
{
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
