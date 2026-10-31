<h1 id="opendota-api">OpenDota API v31.1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction
The OpenDota API provides Dota 2 related data including advanced match data extracted from match replays.

You can find data that can be used to convert hero and ability IDs and other information provided by the API from the [dotaconstants](https://github.com/odota/dotaconstants) repository.

You can use the API without a key, but registering for a key allows increased rate limits and usage. Check out the [API page](https://www.opendota.com/api-keys) to learn more.

Base URLs:

* <a href="https://api.opendota.com/api">https://api.opendota.com/api</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **api_key**, in: query. Use an API key to remove monthly call limits and to receive higher rate limits. [Learn more and get your API key](https://www.opendota.com/api-keys).
        Usage example: https://api.opendota.com/api/matches/271145478?api_key=YOUR-API-KEY
        
        API key can also be sent using the authorization header "Authorization: Bearer YOUR-API-KEY"

<h1 id="opendota-api-matches">matches</h1>

## GET /matches/{match_id}

<a id="opIdget_matches_by_match_id"></a>

> Code samples

```bash
curl https://api.opendota.com/api/matches/0 \
  -H 'Accept: application/json'
```

`GET /matches/{match_id}`

Match data

<h3 id="get-matchesmatchid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|match_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "match_id": 3703866531,
  "barracks_status_dire": 0,
  "barracks_status_radiant": 0,
  "chat": [
    {
      "time": 0,
      "unit": "string",
      "key": "string",
      "slot": 0,
      "player_slot": 0
    }
  ],
  "cluster": 0,
  "cosmetics": {
    "property1": 0,
    "property2": 0
  },
  "dire_score": 0,
  "draft_timings": [
    {
      "order": 0,
      "pick": true,
      "active_team": 0,
      "hero_id": 0,
      "player_slot": 0,
      "extra_time": 0,
      "total_time_taken": 0
    }
  ],
  "duration": 0,
  "engine": 0,
  "first_blood_time": 0,
  "game_mode": 0,
  "human_players": 0,
  "leagueid": 0,
  "lobby_type": 0,
  "match_seq_num": 0,
  "negative_votes": 0,
  "objectives": [
    {}
  ],
  "picks_bans": [
    {
      "is_pick": true,
      "hero_id": 0,
      "team": 0,
      "order": 0
    }
  ],
  "positive_votes": 0,
  "radiant_gold_adv": [
    0
  ],
  "radiant_score": 0,
  "radiant_win": true,
  "radiant_xp_adv": [
    0
  ],
  "start_time": 0,
  "teamfights": [
    {}
  ],
  "tower_status_dire": 0,
  "tower_status_radiant": 0,
  "version": 0,
  "replay_salt": 0,
  "series_id": 0,
  "series_type": 0,
  "radiant_team": {},
  "dire_team": {},
  "league": {},
  "skill": 0,
  "players": [
    {
      "match_id": 3703866531,
      "player_slot": 0,
      "ability_upgrades_arr": [
        0
      ],
      "ability_uses": {},
      "ability_targets": {},
      "damage_targets": {},
      "account_id": 0,
      "actions": {},
      "additional_units": [
        {}
      ],
      "assists": 0,
      "backpack_0": 0,
      "backpack_1": 0,
      "backpack_2": 0,
      "buyback_log": [
        {
          "time": 0,
          "slot": 0,
          "player_slot": 0
        }
      ],
      "camps_stacked": 0,
      "camps_stacked_t": [
        0
      ],
      "connection_log": [
        {
          "time": 0,
          "event": "string",
          "player_slot": 0
        }
      ],
      "creeps_stacked": 0,
      "damage": {},
      "damage_inflictor": {},
      "damage_inflictor_received": {},
      "damage_taken": {},
      "deaths": 0,
      "denies": 0,
      "dn_t": [
        0
      ],
      "gold": 0,
      "gold_per_min": 0,
      "gold_reasons": {},
      "gold_spent": 0,
      "gold_t": [
        0
      ],
      "hero_damage": 0,
      "hero_damage_t": [
        0
      ],
      "hero_healing": 0,
      "hero_healing_t": [
        0
      ],
      "tower_damage_t": [
        0
      ],
      "hero_hits": {},
      "hero_id": 0,
      "item_0": 0,
      "item_1": 0,
      "item_2": 0,
      "item_3": 0,
      "item_4": 0,
      "item_5": 0,
      "item_uses": {},
      "kill_streaks": {},
      "killed": {},
      "killed_by": {},
      "kills": 0,
      "kills_log": [
        {
          "time": 0,
          "key": "string"
        }
      ],
      "deaths_log": [
        {
          "time": 0,
          "key": "string",
          "gold_lost": 0,
          "gold_fed": 0,
          "gold_fed_shared": true,
          "time_dead": 0
        }
      ],
      "lane_pos": {},
      "last_hits": 0,
      "leaver_status": 0,
      "level": 0,
      "lh_t": [
        0
      ],
      "life_state": {},
      "max_hero_hit": {},
      "multi_kills": {},
      "obs": {},
      "obs_left_log": [
        {}
      ],
      "obs_log": [
        {}
      ],
      "obs_placed": 0,
      "party_id": 0,
      "permanent_buffs": [
        {}
      ],
      "hero_variant": 0,
      "pings": 0,
      "purchase": {},
      "purchase_log": [
        {
          "time": 0,
          "key": "string",
          "charges": 0
        }
      ],
      "rune_pickups": 0,
      "runes": {
        "property1": 0,
        "property2": 0
      },
      "runes_log": [
        {
          "time": 0,
          "key": 0
        }
      ],
      "sen": {},
      "sen_left_log": [
        {}
      ],
      "sen_log": [
        {}
      ],
      "sen_placed": 0,
      "stuns": 0,
      "times": [
        0
      ],
      "tower_damage": 0,
      "xp_per_min": 0,
      "xp_reasons": {},
      "xp_t": [
        0
      ],
      "personaname": "420 booty wizard",
      "name": "string",
      "last_login": "1970-01-01T00:00:00Z",
      "radiant_win": true,
      "start_time": 0,
      "duration": 0,
      "cluster": 0,
      "lobby_type": 0,
      "game_mode": 0,
      "patch": 0,
      "region": 0,
      "isRadiant": true,
      "win": 0,
      "lose": 0,
      "total_gold": 0,
      "total_xp": 0,
      "kills_per_min": 0,
      "kda": 0,
      "abandons": 0,
      "neutral_kills": 0,
      "tower_kills": 0,
      "courier_kills": 0,
      "lane_kills": 0,
      "hero_kills": 0,
      "observer_kills": 0,
      "sentry_kills": 0,
      "roshan_kills": 0,
      "necronomicon_kills": 0,
      "ancient_kills": 0,
      "buyback_count": 0,
      "observer_uses": 0,
      "sentry_uses": 0,
      "lane_efficiency": 0,
      "lane_efficiency_pct": 0,
      "lane": 0,
      "lane_role": 0,
      "is_roaming": true,
      "position_est": 0,
      "purchase_time": {},
      "first_purchase_time": {},
      "item_win": {},
      "item_usage": {},
      "purchase_tpscroll": 0,
      "actions_per_min": 0,
      "life_state_dead": 0,
      "rank_tier": 0,
      "cosmetics": [
        {
          "item_id": 0,
          "name": "string",
          "prefab": "string",
          "creation_date": "1970-01-01T00:00:00Z",
          "image_inventory": "string",
          "image_path": "string",
          "item_description": "string",
          "item_name": "string",
          "item_rarity": "string",
          "item_type_name": "string",
          "used_by_heroes": "string"
        }
      ],
      "benchmarks": {},
      "neutral_tokens_log": [
        {
          "time": 0,
          "key": "string"
        }
      ],
      "neutral_item_history": [
        {
          "time": 0,
          "item_neutral": "string",
          "item_neutral_enhancement": "string"
        }
      ]
    }
  ],
  "patch": 0,
  "region": 0,
  "all_word_counts": {},
  "my_word_counts": {},
  "throw": 0,
  "comeback": 0,
  "loss": 0,
  "win": 0,
  "replay_url": "string",
  "pauses": [
    {
      "time": 0,
      "duration": 0
    }
  ]
}
```

<h3 id="get-matchesmatchid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MatchResponse](#schemamatchresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-players">players</h1>

## GET /players/{account_id}

<a id="opIdget_players_by_account_id"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0 \
  -H 'Accept: application/json'
```

`GET /players/{account_id}`

Player data

<h3 id="get-playersaccountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|

> Example responses

> 200 Response

```json
{
  "rank_tier": 0,
  "leaderboard_rank": 0,
  "computed_mmr": 0,
  "computed_mmr_turbo": 0,
  "aliases": [
    {
      "personaname": "string",
      "name_since": "string"
    }
  ],
  "profile": {
    "account_id": 0,
    "personaname": "420 booty wizard",
    "name": "string",
    "plus": true,
    "cheese": 0,
    "steamid": "string",
    "avatar": "string",
    "avatarmedium": "string",
    "avatarfull": "string",
    "profileurl": "string",
    "last_login": "string",
    "loccountrycode": "string",
    "is_contributor": false,
    "is_subscriber": false
  }
}
```

<h3 id="get-playersaccountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PlayersResponse](#schemaplayersresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/wl

<a id="opIdget_players_by_account_id_select_wl"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/wl \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/wl`

Win/Loss count

<h3 id="get-playersaccountidwl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|
|limit|query|integer|false|Number of matches to limit to|
|offset|query|integer|false|Number of matches to offset start by|
|win|query|integer|false|Whether the player won|
|patch|query|integer|false|Patch ID, from dotaconstants|
|game_mode|query|integer|false|Game Mode ID|
|lobby_type|query|integer|false|Lobby type ID|
|region|query|integer|false|Region ID|
|date|query|integer|false|Days previous|
|lane_role|query|integer|false|Lane Role ID|
|hero_id|query|integer|false|Hero ID|
|is_radiant|query|integer|false|Whether the player was radiant|
|included_account_id|query|integer|false|Account IDs in the match (array)|
|excluded_account_id|query|integer|false|Account IDs not in the match (array)|
|with_hero_id|query|integer|false|Hero IDs on the player's team (array)|
|against_hero_id|query|integer|false|Hero IDs against the player's team (array)|
|significant|query|integer|false|Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.|
|having|query|integer|false|The minimum number of games played, for filtering hero stats|
|sort|query|string|false|The field to return matches sorted by in descending order|

> Example responses

> 200 Response

```json
{
  "win": 0,
  "lose": 0
}
```

<h3 id="get-playersaccountidwl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PlayerWinLossResponse](#schemaplayerwinlossresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/recentMatches

<a id="opIdget_players_by_account_id_select_recent_matches"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/recentMatches \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/recentMatches`

Recent matches played (limited number of results)

<h3 id="get-playersaccountidrecentmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-playersaccountidrecentmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-playersaccountidrecentmatches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/matches

<a id="opIdget_players_by_account_id_select_matches"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/matches \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/matches`

Matches played (full history, and supports column selection)

<h3 id="get-playersaccountidmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|
|limit|query|integer|false|Number of matches to limit to|
|offset|query|integer|false|Number of matches to offset start by|
|win|query|integer|false|Whether the player won|
|patch|query|integer|false|Patch ID, from dotaconstants|
|game_mode|query|integer|false|Game Mode ID|
|lobby_type|query|integer|false|Lobby type ID|
|region|query|integer|false|Region ID|
|date|query|integer|false|Days previous|
|lane_role|query|integer|false|Lane Role ID|
|hero_id|query|integer|false|Hero ID|
|is_radiant|query|integer|false|Whether the player was radiant|
|included_account_id|query|integer|false|Account IDs in the match (array)|
|excluded_account_id|query|integer|false|Account IDs not in the match (array)|
|with_hero_id|query|integer|false|Hero IDs on the player's team (array)|
|against_hero_id|query|integer|false|Hero IDs against the player's team (array)|
|significant|query|integer|false|Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.|
|having|query|integer|false|The minimum number of games played, for filtering hero stats|
|sort|query|string|false|The field to return matches sorted by in descending order|
|project|query|string|false|Fields to project (array)|

> Example responses

> 200 Response

```json
[
  {
    "match_id": 3703866531,
    "player_slot": 0,
    "radiant_win": true,
    "duration": 0,
    "game_mode": 0,
    "lobby_type": 0,
    "hero_id": 0,
    "start_time": 0,
    "version": 0,
    "kills": 0,
    "deaths": 0,
    "assists": 0,
    "skill": 0,
    "average_rank": 0,
    "leaver_status": 0,
    "party_size": 0,
    "hero_variant": 0
  }
]
```

<h3 id="get-playersaccountidmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-playersaccountidmatches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerMatchesResponse](#schemaplayermatchesresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/heroes

<a id="opIdget_players_by_account_id_select_heroes"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/heroes \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/heroes`

Heroes played

<h3 id="get-playersaccountidheroes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|
|limit|query|integer|false|Number of matches to limit to|
|offset|query|integer|false|Number of matches to offset start by|
|win|query|integer|false|Whether the player won|
|patch|query|integer|false|Patch ID, from dotaconstants|
|game_mode|query|integer|false|Game Mode ID|
|lobby_type|query|integer|false|Lobby type ID|
|region|query|integer|false|Region ID|
|date|query|integer|false|Days previous|
|lane_role|query|integer|false|Lane Role ID|
|hero_id|query|integer|false|Hero ID|
|is_radiant|query|integer|false|Whether the player was radiant|
|included_account_id|query|integer|false|Account IDs in the match (array)|
|excluded_account_id|query|integer|false|Account IDs not in the match (array)|
|with_hero_id|query|integer|false|Hero IDs on the player's team (array)|
|against_hero_id|query|integer|false|Hero IDs against the player's team (array)|
|significant|query|integer|false|Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.|
|having|query|integer|false|The minimum number of games played, for filtering hero stats|
|sort|query|string|false|The field to return matches sorted by in descending order|

> Example responses

> 200 Response

```json
[
  {
    "hero_id": 0,
    "last_played": 0,
    "games": 0,
    "win": 0,
    "with_games": 0,
    "with_win": 0,
    "against_games": 0,
    "against_win": 0
  }
]
```

<h3 id="get-playersaccountidheroes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-playersaccountidheroes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerHeroesResponse](#schemaplayerheroesresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/peers

<a id="opIdget_players_by_account_id_select_peers"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/peers \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/peers`

Players played with

<h3 id="get-playersaccountidpeers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|
|limit|query|integer|false|Number of matches to limit to|
|offset|query|integer|false|Number of matches to offset start by|
|win|query|integer|false|Whether the player won|
|patch|query|integer|false|Patch ID, from dotaconstants|
|game_mode|query|integer|false|Game Mode ID|
|lobby_type|query|integer|false|Lobby type ID|
|region|query|integer|false|Region ID|
|date|query|integer|false|Days previous|
|lane_role|query|integer|false|Lane Role ID|
|hero_id|query|integer|false|Hero ID|
|is_radiant|query|integer|false|Whether the player was radiant|
|included_account_id|query|integer|false|Account IDs in the match (array)|
|excluded_account_id|query|integer|false|Account IDs not in the match (array)|
|with_hero_id|query|integer|false|Hero IDs on the player's team (array)|
|against_hero_id|query|integer|false|Hero IDs against the player's team (array)|
|significant|query|integer|false|Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.|
|having|query|integer|false|The minimum number of games played, for filtering hero stats|
|sort|query|string|false|The field to return matches sorted by in descending order|

> Example responses

> 200 Response

```json
[
  {
    "account_id": 0,
    "last_played": 0,
    "win": 0,
    "games": 0,
    "with_win": 0,
    "with_games": 0,
    "against_win": 0,
    "against_games": 0,
    "with_gpm_sum": 0,
    "with_xpm_sum": 0,
    "personaname": "420 booty wizard",
    "name": "string",
    "is_contributor": true,
    "is_subscriber": true,
    "last_login": "string",
    "avatar": "string",
    "avatarfull": "string"
  }
]
```

<h3 id="get-playersaccountidpeers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-playersaccountidpeers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerPeersResponse](#schemaplayerpeersresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/pros

<a id="opIdget_players_by_account_id_select_pros"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/pros \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/pros`

Pro players played with

<h3 id="get-playersaccountidpros-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|
|limit|query|integer|false|Number of matches to limit to|
|offset|query|integer|false|Number of matches to offset start by|
|win|query|integer|false|Whether the player won|
|patch|query|integer|false|Patch ID, from dotaconstants|
|game_mode|query|integer|false|Game Mode ID|
|lobby_type|query|integer|false|Lobby type ID|
|region|query|integer|false|Region ID|
|date|query|integer|false|Days previous|
|lane_role|query|integer|false|Lane Role ID|
|hero_id|query|integer|false|Hero ID|
|is_radiant|query|integer|false|Whether the player was radiant|
|included_account_id|query|integer|false|Account IDs in the match (array)|
|excluded_account_id|query|integer|false|Account IDs not in the match (array)|
|with_hero_id|query|integer|false|Hero IDs on the player's team (array)|
|against_hero_id|query|integer|false|Hero IDs against the player's team (array)|
|significant|query|integer|false|Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.|
|having|query|integer|false|The minimum number of games played, for filtering hero stats|
|sort|query|string|false|The field to return matches sorted by in descending order|

> Example responses

> 200 Response

```json
[
  {
    "account_id": 0,
    "name": "string",
    "country_code": "string",
    "fantasy_role": 0,
    "team_id": 0,
    "team_name": "Newbee",
    "team_tag": "string",
    "is_locked": true,
    "is_pro": true,
    "locked_until": 0,
    "steamid": "string",
    "avatar": "string",
    "avatarmedium": "string",
    "avatarfull": "string",
    "profileurl": "string",
    "last_login": "1970-01-01T00:00:00Z",
    "full_history_time": "1970-01-01T00:00:00Z",
    "cheese": 0,
    "fh_unavailable": true,
    "loccountrycode": "string",
    "last_played": 0,
    "win": 0,
    "games": 0,
    "with_win": 0,
    "with_games": 0,
    "against_win": 0,
    "against_games": 0,
    "with_gpm_sum": 0,
    "with_xpm_sum": 0
  }
]
```

<h3 id="get-playersaccountidpros-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-playersaccountidpros-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerProsResponse](#schemaplayerprosresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/totals

<a id="opIdget_players_by_account_id_select_totals"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/totals \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/totals`

Totals in stats

<h3 id="get-playersaccountidtotals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|
|limit|query|integer|false|Number of matches to limit to|
|offset|query|integer|false|Number of matches to offset start by|
|win|query|integer|false|Whether the player won|
|patch|query|integer|false|Patch ID, from dotaconstants|
|game_mode|query|integer|false|Game Mode ID|
|lobby_type|query|integer|false|Lobby type ID|
|region|query|integer|false|Region ID|
|date|query|integer|false|Days previous|
|lane_role|query|integer|false|Lane Role ID|
|hero_id|query|integer|false|Hero ID|
|is_radiant|query|integer|false|Whether the player was radiant|
|included_account_id|query|integer|false|Account IDs in the match (array)|
|excluded_account_id|query|integer|false|Account IDs not in the match (array)|
|with_hero_id|query|integer|false|Hero IDs on the player's team (array)|
|against_hero_id|query|integer|false|Hero IDs against the player's team (array)|
|significant|query|integer|false|Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.|
|having|query|integer|false|The minimum number of games played, for filtering hero stats|
|sort|query|string|false|The field to return matches sorted by in descending order|

> Example responses

> 200 Response

```json
[
  {
    "field": "string",
    "n": 0,
    "sum": 0
  }
]
```

<h3 id="get-playersaccountidtotals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-playersaccountidtotals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerTotalsResponse](#schemaplayertotalsresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/counts

<a id="opIdget_players_by_account_id_select_counts"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/counts \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/counts`

Counts in categories

<h3 id="get-playersaccountidcounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|
|limit|query|integer|false|Number of matches to limit to|
|offset|query|integer|false|Number of matches to offset start by|
|win|query|integer|false|Whether the player won|
|patch|query|integer|false|Patch ID, from dotaconstants|
|game_mode|query|integer|false|Game Mode ID|
|lobby_type|query|integer|false|Lobby type ID|
|region|query|integer|false|Region ID|
|date|query|integer|false|Days previous|
|lane_role|query|integer|false|Lane Role ID|
|hero_id|query|integer|false|Hero ID|
|is_radiant|query|integer|false|Whether the player was radiant|
|included_account_id|query|integer|false|Account IDs in the match (array)|
|excluded_account_id|query|integer|false|Account IDs not in the match (array)|
|with_hero_id|query|integer|false|Hero IDs on the player's team (array)|
|against_hero_id|query|integer|false|Hero IDs against the player's team (array)|
|significant|query|integer|false|Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.|
|having|query|integer|false|The minimum number of games played, for filtering hero stats|
|sort|query|string|false|The field to return matches sorted by in descending order|

> Example responses

> 200 Response

```json
{
  "leaver_status": {},
  "game_mode": {},
  "lobby_type": {},
  "lane_role": {},
  "region": {},
  "patch": {}
}
```

<h3 id="get-playersaccountidcounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PlayerCountsResponse](#schemaplayercountsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/histograms

<a id="opIdget_players_by_account_id_histograms_by_field"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/histograms/string \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/histograms/{field}`

Distribution of matches in a single stat

<h3 id="get-playersaccountidhistograms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|
|limit|query|integer|false|Number of matches to limit to|
|offset|query|integer|false|Number of matches to offset start by|
|win|query|integer|false|Whether the player won|
|patch|query|integer|false|Patch ID, from dotaconstants|
|game_mode|query|integer|false|Game Mode ID|
|lobby_type|query|integer|false|Lobby type ID|
|region|query|integer|false|Region ID|
|date|query|integer|false|Days previous|
|lane_role|query|integer|false|Lane Role ID|
|hero_id|query|integer|false|Hero ID|
|is_radiant|query|integer|false|Whether the player was radiant|
|included_account_id|query|integer|false|Account IDs in the match (array)|
|excluded_account_id|query|integer|false|Account IDs not in the match (array)|
|with_hero_id|query|integer|false|Hero IDs on the player's team (array)|
|against_hero_id|query|integer|false|Hero IDs against the player's team (array)|
|significant|query|integer|false|Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.|
|having|query|integer|false|The minimum number of games played, for filtering hero stats|
|sort|query|string|false|The field to return matches sorted by in descending order|
|field|path|string|true|Field to aggregate on|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-playersaccountidhistograms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-playersaccountidhistograms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/wardmap

<a id="opIdget_players_by_account_id_select_wardmap"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/wardmap \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/wardmap`

Wards placed in matches played

<h3 id="get-playersaccountidwardmap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|
|limit|query|integer|false|Number of matches to limit to|
|offset|query|integer|false|Number of matches to offset start by|
|win|query|integer|false|Whether the player won|
|patch|query|integer|false|Patch ID, from dotaconstants|
|game_mode|query|integer|false|Game Mode ID|
|lobby_type|query|integer|false|Lobby type ID|
|region|query|integer|false|Region ID|
|date|query|integer|false|Days previous|
|lane_role|query|integer|false|Lane Role ID|
|hero_id|query|integer|false|Hero ID|
|is_radiant|query|integer|false|Whether the player was radiant|
|included_account_id|query|integer|false|Account IDs in the match (array)|
|excluded_account_id|query|integer|false|Account IDs not in the match (array)|
|with_hero_id|query|integer|false|Hero IDs on the player's team (array)|
|against_hero_id|query|integer|false|Hero IDs against the player's team (array)|
|significant|query|integer|false|Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.|
|having|query|integer|false|The minimum number of games played, for filtering hero stats|
|sort|query|string|false|The field to return matches sorted by in descending order|

> Example responses

> 200 Response

```json
{
  "obs": {},
  "sen": {}
}
```

<h3 id="get-playersaccountidwardmap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PlayerWardMapResponse](#schemaplayerwardmapresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/wordcloud

<a id="opIdget_players_by_account_id_select_wordcloud"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/wordcloud \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/wordcloud`

Words said/read in matches played

<h3 id="get-playersaccountidwordcloud-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|
|limit|query|integer|false|Number of matches to limit to|
|offset|query|integer|false|Number of matches to offset start by|
|win|query|integer|false|Whether the player won|
|patch|query|integer|false|Patch ID, from dotaconstants|
|game_mode|query|integer|false|Game Mode ID|
|lobby_type|query|integer|false|Lobby type ID|
|region|query|integer|false|Region ID|
|date|query|integer|false|Days previous|
|lane_role|query|integer|false|Lane Role ID|
|hero_id|query|integer|false|Hero ID|
|is_radiant|query|integer|false|Whether the player was radiant|
|included_account_id|query|integer|false|Account IDs in the match (array)|
|excluded_account_id|query|integer|false|Account IDs not in the match (array)|
|with_hero_id|query|integer|false|Hero IDs on the player's team (array)|
|against_hero_id|query|integer|false|Hero IDs against the player's team (array)|
|significant|query|integer|false|Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.|
|having|query|integer|false|The minimum number of games played, for filtering hero stats|
|sort|query|string|false|The field to return matches sorted by in descending order|

> Example responses

> 200 Response

```json
{
  "my_word_counts": {},
  "all_word_counts": {}
}
```

<h3 id="get-playersaccountidwordcloud-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PlayerWordCloudResponse](#schemaplayerwordcloudresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/ratings

<a id="opIdget_players_by_account_id_select_ratings"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/ratings \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/ratings`

Returns a history of the player rank tier/medal changes (replaces MMR)

<h3 id="get-playersaccountidratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|

> Example responses

> 200 Response

```json
[
  {
    "account_id": 0,
    "match_id": 3703866531,
    "rank_tier": 0,
    "time": 0
  }
]
```

<h3 id="get-playersaccountidratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-playersaccountidratings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerRatingsResponse](#schemaplayerratingsresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /players/{account_id}/rankings

<a id="opIdget_players_by_account_id_select_rankings"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/rankings \
  -H 'Accept: application/json'
```

`GET /players/{account_id}/rankings`

Player hero rankings

<h3 id="get-playersaccountidrankings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|

> Example responses

> 200 Response

```json
[
  {
    "hero_id": 0,
    "score": 0,
    "percent_rank": 0,
    "card": 0
  }
]
```

<h3 id="get-playersaccountidrankings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-playersaccountidrankings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerRankingsResponse](#schemaplayerrankingsresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## POST /players/{account_id}/refresh

<a id="opIdpost_refresh"></a>

> Code samples

```bash
curl https://api.opendota.com/api/players/0/refresh \
  -X POST \
  -H 'Accept: application/json'
```

`POST /players/{account_id}/refresh`

Refresh player match history (up to 500), medal (rank), and profile name

<h3 id="post-playersaccountidrefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer|true|Steam32 account ID|

> Example responses

> 200 Response

```json
null
```

<h3 id="post-playersaccountidrefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-top-players">top players</h1>

## GET /topPlayers

<a id="opIdget_top_players"></a>

> Code samples

```bash
curl https://api.opendota.com/api/topPlayers \
  -H 'Accept: application/json'
```

`GET /topPlayers`

Get list of highly ranked players

<h3 id="get-topplayers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|turbo|query|integer|false|Get ratings based on turbo matches|

> Example responses

> 200 Response

```json
[
  {
    "account_id": 0,
    "steamid": "string",
    "avatar": "string",
    "avatarmedium": "string",
    "avatarfull": "string",
    "profileurl": "string",
    "personaname": "420 booty wizard",
    "last_login": "1970-01-01T00:00:00Z",
    "full_history_time": "1970-01-01T00:00:00Z",
    "cheese": 0,
    "fh_unavailable": true,
    "loccountrycode": "string",
    "name": "string",
    "country_code": "string",
    "fantasy_role": 0,
    "team_id": 0,
    "team_name": "Newbee",
    "team_tag": "string",
    "is_locked": true,
    "is_pro": true,
    "locked_until": 0,
    "computed_mmr": 0
  }
]
```

<h3 id="get-topplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-topplayers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerObjectResponse](#schemaplayerobjectresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-pro-players">pro players</h1>

## GET /proPlayers

<a id="opIdget_pro_players"></a>

> Code samples

```bash
curl https://api.opendota.com/api/proPlayers \
  -H 'Accept: application/json'
```

`GET /proPlayers`

Get list of pro players

> Example responses

> 200 Response

```json
[
  {
    "account_id": 0,
    "steamid": "string",
    "avatar": "string",
    "avatarmedium": "string",
    "avatarfull": "string",
    "profileurl": "string",
    "personaname": "420 booty wizard",
    "last_login": "1970-01-01T00:00:00Z",
    "full_history_time": "1970-01-01T00:00:00Z",
    "cheese": 0,
    "fh_unavailable": true,
    "loccountrycode": "string",
    "name": "string",
    "country_code": "string",
    "fantasy_role": 0,
    "team_id": 0,
    "team_name": "Newbee",
    "team_tag": "string",
    "is_locked": true,
    "is_pro": true,
    "locked_until": 0,
    "computed_mmr": 0
  }
]
```

<h3 id="get-proplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-proplayers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerObjectResponse](#schemaplayerobjectresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-pro-matches">pro matches</h1>

## GET /proMatches

<a id="opIdget_pro_matches"></a>

> Code samples

```bash
curl https://api.opendota.com/api/proMatches \
  -H 'Accept: application/json'
```

`GET /proMatches`

Get list of pro matches

<h3 id="get-promatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|less_than_match_id|query|integer|false|Get matches with a match ID lower than this value|

> Example responses

> 200 Response

```json
[
  {
    "match_id": 3703866531,
    "duration": 0,
    "start_time": 0,
    "radiant_team_id": 0,
    "radiant_name": "string",
    "dire_team_id": 0,
    "dire_name": "string",
    "leagueid": 0,
    "league_name": "string",
    "series_id": 0,
    "series_type": 0,
    "radiant_score": 0,
    "dire_score": 0,
    "radiant_win": true,
    "radiant": true
  }
]
```

<h3 id="get-promatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-promatches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MatchObjectResponse](#schemamatchobjectresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-public-matches">public matches</h1>

## GET /publicMatches

<a id="opIdget_public_matches"></a>

> Code samples

```bash
curl https://api.opendota.com/api/publicMatches \
  -H 'Accept: application/json'
```

`GET /publicMatches`

Get list of randomly sampled public matches

<h3 id="get-publicmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|less_than_match_id|query|integer|false|Get matches with a match ID lower than this value|
|min_rank|query|integer|false|Minimum rank for the matches. Ranks are represented by integers (10-15: Herald, 20-25: Guardian, 30-35: Crusader, 40-45: Archon, 50-55: Legend, 60-65: Ancient, 70-75: Divine, 80: Immortal). Each increment represents an additional star.|
|max_rank|query|integer|false|Maximum rank for the matches. Ranks are represented by integers (10-15: Herald, 20-25: Guardian, 30-35: Crusader, 40-45: Archon, 50-55: Legend, 60-65: Ancient, 70-75: Divine, 80: Immortal). Each increment represents an additional star.|

> Example responses

> 200 Response

```json
[
  {
    "match_id": 3703866531,
    "match_seq_num": 0,
    "radiant_win": true,
    "start_time": 0,
    "duration": 0,
    "lobby_type": 0,
    "game_mode": 0,
    "avg_rank_tier": 0,
    "num_rank_tier": 0,
    "cluster": 0,
    "radiant_team": [
      0
    ],
    "dire_team": [
      0
    ]
  }
]
```

<h3 id="get-publicmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-publicmatches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicMatchesResponse](#schemapublicmatchesresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-parsed-matches">parsed matches</h1>

## GET /parsedMatches

<a id="opIdget_parsed_matches"></a>

> Code samples

```bash
curl https://api.opendota.com/api/parsedMatches \
  -H 'Accept: application/json'
```

`GET /parsedMatches`

Get list of parsed match IDs

<h3 id="get-parsedmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|less_than_match_id|query|integer|false|Get matches with a match ID lower than this value|

> Example responses

> 200 Response

```json
[
  {
    "match_id": 3703866531
  }
]
```

<h3 id="get-parsedmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-parsedmatches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ParsedMatchesResponse](#schemaparsedmatchesresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-explorer">explorer</h1>

## GET /explorer

<a id="opIdget_explorer"></a>

> Code samples

```bash
curl https://api.opendota.com/api/explorer \
  -H 'Accept: application/json'
```

`GET /explorer`

Submit arbitrary SQL queries to the database

<h3 id="get-explorer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sql|query|string|false|The PostgreSQL query as percent-encoded string.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-explorer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-metadata">metadata</h1>

## GET /metadata

<a id="opIdget_metadata"></a>

> Code samples

```bash
curl https://api.opendota.com/api/metadata \
  -H 'Accept: application/json'
```

`GET /metadata`

Site metadata

> Example responses

> 200 Response

```json
{
  "banner": {}
}
```

<h3 id="get-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MetadataResponse](#schemametadataresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-distributions">distributions</h1>

## GET /distributions

<a id="opIdget_distributions"></a>

> Code samples

```bash
curl https://api.opendota.com/api/distributions \
  -H 'Accept: application/json'
```

`GET /distributions`

Distributions of MMR data by bracket and country

> Example responses

> 200 Response

```json
{
  "ranks": {
    "rows": [
      {
        "bin": 0,
        "bin_name": 0,
        "count": 0,
        "cumulative_sum": 0
      }
    ],
    "sum": {
      "count": 0
    }
  }
}
```

<h3 id="get-distributions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DistributionsResponse](#schemadistributionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-search">search</h1>

## GET /search

<a id="opIdget_search"></a>

> Code samples

```bash
curl 'https://api.opendota.com/api/search?q=string' \
  -H 'Accept: application/json'
```

`GET /search`

Search players by personaname.

<h3 id="get-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|Search string|

> Example responses

> 200 Response

```json
[
  {
    "account_id": 0,
    "avatarfull": "string",
    "personaname": "420 booty wizard",
    "last_match_time": "string",
    "similarity": 0
  }
]
```

<h3 id="get-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SearchResponse](#schemasearchresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-rankings">rankings</h1>

## GET /rankings

<a id="opIdget_rankings"></a>

> Code samples

```bash
curl 'https://api.opendota.com/api/rankings?hero_id=string' \
  -H 'Accept: application/json'
```

`GET /rankings`

Top players by hero

<h3 id="get-rankings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hero_id|query|string|true|Hero ID|

> Example responses

> 200 Response

```json
{
  "hero_id": 0,
  "rankings": [
    {
      "account_id": 0,
      "score": 0,
      "steamid": "string",
      "avatar": "string",
      "avatarmedium": "string",
      "avatarfull": "string",
      "profileurl": "string",
      "personaname": "420 booty wizard",
      "last_login": "1970-01-01T00:00:00Z",
      "full_history_time": "1970-01-01T00:00:00Z",
      "cheese": 0,
      "fh_unavailable": true,
      "loccountrycode": "string",
      "rank_tier": 0
    }
  ]
}
```

<h3 id="get-rankings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RankingsResponse](#schemarankingsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-benchmarks">benchmarks</h1>

## GET /benchmarks

<a id="opIdget_benchmarks"></a>

> Code samples

```bash
curl 'https://api.opendota.com/api/benchmarks?hero_id=string' \
  -H 'Accept: application/json'
```

`GET /benchmarks`

Benchmarks of average stat values for a hero

<h3 id="get-benchmarks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hero_id|query|string|true|Hero ID|
|bracket|query|integer|false|Rank bracket from 1 (Herald) to 8 (Immortal) to benchmark against. Omit for matches of all ranks|
|role|query|string|false|Benchmark against cores or supports only, estimated from farm within each team. Can be combined with bracket. Omit for all roles|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|core|
|role|support|

> Example responses

> 200 Response

```json
{
  "hero_id": 0,
  "result": {
    "gold_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "xp_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "kills_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "deaths_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "assists_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "last_hits_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "denies_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "hero_damage_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "hero_healing_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "tower_damage": [
      {
        "percentile": 0,
        "value": 0
      }
    ]
  }
}
```

<h3 id="get-benchmarks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BenchmarksResponse](#schemabenchmarksresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-health">health</h1>

## GET /health

<a id="opIdget_health"></a>

> Code samples

```bash
curl https://api.opendota.com/api/health \
  -H 'Accept: application/json'
```

`GET /health`

Get service health data

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-request">request</h1>

## GET /request/{jobId}

<a id="opIdget_request_by_job_id"></a>

> Code samples

```bash
curl https://api.opendota.com/api/request/string \
  -H 'Accept: application/json'
```

`GET /request/{jobId}`

Get parse request state

<h3 id="get-requestjobid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The job ID to query.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-requestjobid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## POST /request/{match_id}

<a id="opIdpost_request_by_job_id"></a>

> Code samples

```bash
curl https://api.opendota.com/api/request/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /request/{match_id}`

Submit a new parse request. This call counts as 10 calls for rate limit (but not billing) purposes.

<h3 id="post-requestmatchid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|match_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="post-requestmatchid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-findmatches">findMatches</h1>

## GET /

<a id="opIdget_find_matches"></a>

> Code samples

```bash
curl https://api.opendota.com/api/findMatches \
  -H 'Accept: application/json'
```

`GET /findMatches`

Finds recent matches by heroes played

<h3 id="get--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamA|query|[integer]|false|Hero IDs on first team (array)|
|teamB|query|[integer]|false|Hero IDs on second team (array)|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get--responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-heroes">heroes</h1>

## GET /heroes

<a id="opIdget_heroes"></a>

> Code samples

```bash
curl https://api.opendota.com/api/heroes \
  -H 'Accept: application/json'
```

`GET /heroes`

Get hero data

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "npc_dota_hero_antimage",
    "localized_name": "Anti-Mage",
    "primary_attr": "string",
    "attack_type": "string",
    "roles": [
      "string"
    ]
  }
]
```

<h3 id="get-heroes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-heroes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HeroObjectResponse](#schemaheroobjectresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /heroes/{hero_id}/matches

<a id="opIdget_heroes_by_hero_id_select_matches"></a>

> Code samples

```bash
curl https://api.opendota.com/api/heroes/0/matches \
  -H 'Accept: application/json'
```

`GET /heroes/{hero_id}/matches`

Get recent matches with a hero

<h3 id="get-heroesheroidmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hero_id|path|integer|true|Hero ID|

> Example responses

> 200 Response

```json
[
  {
    "match_id": 3703866531,
    "duration": 0,
    "start_time": 0,
    "radiant_team_id": 0,
    "radiant_name": "string",
    "dire_team_id": 0,
    "dire_name": "string",
    "leagueid": 0,
    "league_name": "string",
    "series_id": 0,
    "series_type": 0,
    "radiant_score": 0,
    "dire_score": 0,
    "radiant_win": true,
    "radiant": true
  }
]
```

<h3 id="get-heroesheroidmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-heroesheroidmatches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MatchObjectResponse](#schemamatchobjectresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /heroes/{hero_id}/matchups

<a id="opIdget_heroes_by_hero_id_select_matchups"></a>

> Code samples

```bash
curl https://api.opendota.com/api/heroes/0/matchups \
  -H 'Accept: application/json'
```

`GET /heroes/{hero_id}/matchups`

Get results against other heroes for a hero

<h3 id="get-heroesheroidmatchups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hero_id|path|integer|true|Hero ID|

> Example responses

> 200 Response

```json
[
  {
    "hero_id": 0,
    "games_played": 0,
    "wins": 0
  }
]
```

<h3 id="get-heroesheroidmatchups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-heroesheroidmatchups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HeroMatchupsResponse](#schemaheromatchupsresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /heroes/{hero_id}/durations

<a id="opIdget_heroes_by_hero_id_select_durations"></a>

> Code samples

```bash
curl https://api.opendota.com/api/heroes/0/durations \
  -H 'Accept: application/json'
```

`GET /heroes/{hero_id}/durations`

Get hero performance over a range of match durations

<h3 id="get-heroesheroiddurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hero_id|path|integer|true|Hero ID|

> Example responses

> 200 Response

```json
[
  {
    "duration_bin": "string",
    "games_played": 0,
    "wins": 0
  }
]
```

<h3 id="get-heroesheroiddurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-heroesheroiddurations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HeroDurationsResponse](#schemaherodurationsresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /heroes/{hero_id}/players

<a id="opIdget_heroes_by_hero_id_select_players"></a>

> Code samples

```bash
curl https://api.opendota.com/api/heroes/0/players \
  -H 'Accept: application/json'
```

`GET /heroes/{hero_id}/players`

Get players who have played this hero

<h3 id="get-heroesheroidplayers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hero_id|path|integer|true|Hero ID|

> Example responses

> 200 Response

```json
[
  [
    {
      "account_id": 0,
      "steamid": "string",
      "avatar": "string",
      "avatarmedium": "string",
      "avatarfull": "string",
      "profileurl": "string",
      "personaname": "420 booty wizard",
      "last_login": "1970-01-01T00:00:00Z",
      "full_history_time": "1970-01-01T00:00:00Z",
      "cheese": 0,
      "fh_unavailable": true,
      "loccountrycode": "string",
      "name": "string",
      "country_code": "string",
      "fantasy_role": 0,
      "team_id": 0,
      "team_name": "Newbee",
      "team_tag": "string",
      "is_locked": true,
      "is_pro": true,
      "locked_until": 0,
      "computed_mmr": 0
    }
  ]
]
```

<h3 id="get-heroesheroidplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-heroesheroidplayers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[[PlayerObjectResponse](#schemaplayerobjectresponse)]]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /heroes/{hero_id}/itemPopularity

<a id="opIdget_heroes_by_hero_id_select_item_popularity"></a>

> Code samples

```bash
curl https://api.opendota.com/api/heroes/0/itemPopularity \
  -H 'Accept: application/json'
```

`GET /heroes/{hero_id}/itemPopularity`

Get item popularity of hero categoried by start, early, mid and late game, analyzed from professional games

<h3 id="get-heroesheroiditempopularity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hero_id|path|integer|true|Hero ID|

> Example responses

> 200 Response

```json
{
  "start_game_items": {
    "item": 0
  },
  "early_game_items": {
    "item": 0
  },
  "mid_game_items": {
    "item": 0
  },
  "late_game_items": {
    "item": 0
  }
}
```

<h3 id="get-heroesheroiditempopularity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[HeroItemPopularityResponse](#schemaheroitempopularityresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-hero-stats">hero stats</h1>

## GET /heroStats

<a id="opIdget_hero_stats"></a>

> Code samples

```bash
curl https://api.opendota.com/api/heroStats \
  -H 'Accept: application/json'
```

`GET /heroStats`

Get stats about hero performance in recent matches

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "npc_dota_hero_antimage",
    "localized_name": "Anti-Mage",
    "primary_attr": "string",
    "attack_type": "string",
    "roles": [
      "string"
    ],
    "img": "string",
    "icon": "string",
    "base_health": 0,
    "base_health_regen": 0,
    "base_mana": 0,
    "base_mana_regen": 0,
    "base_armor": 0,
    "base_mr": 0,
    "base_attack_min": 0,
    "base_attack_max": 0,
    "base_str": 0,
    "base_agi": 0,
    "base_int": 0,
    "str_gain": 0,
    "agi_gain": 0,
    "int_gain": 0,
    "attack_range": 0,
    "projectile_speed": 0,
    "attack_rate": 0,
    "base_attack_time": 0,
    "attack_point": 0,
    "move_speed": 0,
    "turn_rate": 0,
    "cm_enabled": true,
    "legs": 0,
    "day_vision": 0,
    "night_vision": 0,
    "hero_id": 0,
    "turbo_picks": 0,
    "turbo_wins": 0,
    "pro_ban": 0,
    "pro_win": 0,
    "pro_pick": 0,
    "1_pick": 0,
    "1_win": 0,
    "2_pick": 0,
    "2_win": 0,
    "3_pick": 0,
    "3_win": 0,
    "4_pick": 0,
    "4_win": 0,
    "5_pick": 0,
    "5_win": 0,
    "6_pick": 0,
    "6_win": 0,
    "7_pick": 0,
    "7_win": 0,
    "8_pick": 0,
    "8_win": 0
  }
]
```

<h3 id="get-herostats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-herostats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HeroStatsResponse](#schemaherostatsresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-leagues">leagues</h1>

## GET /leagues

<a id="opIdget_leagues"></a>

> Code samples

```bash
curl https://api.opendota.com/api/leagues \
  -H 'Accept: application/json'
```

`GET /leagues`

Get league data

> Example responses

> 200 Response

```json
[
  {
    "leagueid": 0,
    "ticket": "string",
    "banner": "string",
    "tier": "string",
    "name": "ASUS ROG DreamLeague Season 4"
  }
]
```

<h3 id="get-leagues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-leagues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LeagueObjectResponse](#schemaleagueobjectresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /leagues/{league_id}

<a id="opIdget_leagues_by_league_id"></a>

> Code samples

```bash
curl https://api.opendota.com/api/leagues/0 \
  -H 'Accept: application/json'
```

`GET /leagues/{league_id}`

Get data for a league

<h3 id="get-leaguesleagueid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|league_id|path|integer|true|League ID|

> Example responses

> 200 Response

```json
[
  {
    "leagueid": 0,
    "ticket": "string",
    "banner": "string",
    "tier": "string",
    "name": "ASUS ROG DreamLeague Season 4"
  }
]
```

<h3 id="get-leaguesleagueid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-leaguesleagueid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LeagueObjectResponse](#schemaleagueobjectresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /leagues/{league_id}/matches

<a id="opIdget_leagues_by_league_id_select_matches"></a>

> Code samples

```bash
curl https://api.opendota.com/api/leagues/0/matches \
  -H 'Accept: application/json'
```

`GET /leagues/{league_id}/matches`

Get matches for a league (excluding amateur leagues)

<h3 id="get-leaguesleagueidmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|league_id|path|integer|true|League ID|

> Example responses

> 200 Response

```json
{
  "match_id": 3703866531,
  "duration": 0,
  "start_time": 0,
  "radiant_team_id": 0,
  "radiant_name": "string",
  "dire_team_id": 0,
  "dire_name": "string",
  "leagueid": 0,
  "league_name": "string",
  "series_id": 0,
  "series_type": 0,
  "radiant_score": 0,
  "dire_score": 0,
  "radiant_win": true,
  "radiant": true
}
```

<h3 id="get-leaguesleagueidmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MatchObjectResponse](#schemamatchobjectresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## GET /leagues/{league_id}/matchIds

<a id="opIdget_leagues_by_league_id_select_match_ids"></a>

> Code samples

```bash
curl https://api.opendota.com/api/leagues/0/matchIds \
  -H 'Accept: application/json'
```

`GET /leagues/{league_id}/matchIds`

Get match IDs for a league (including amateur leagues)

<h3 id="get-leaguesleagueidmatchids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|league_id|path|integer|true|League ID|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-leaguesleagueidmatchids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-leaguesleagueidmatchids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /leagues/{league_id}/teams

<a id="opIdget_leagues_by_league_id_select_teams"></a>

> Code samples

```bash
curl https://api.opendota.com/api/leagues/0/teams \
  -H 'Accept: application/json'
```

`GET /leagues/{league_id}/teams`

Get teams for a league

<h3 id="get-leaguesleagueidteams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|league_id|path|integer|true|League ID|

> Example responses

> 200 Response

```json
{
  "team_id": 0,
  "rating": 0,
  "wins": 0,
  "losses": 0,
  "last_match_time": 0,
  "name": "Newbee",
  "tag": "string"
}
```

<h3 id="get-leaguesleagueidteams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TeamObjectResponse](#schemateamobjectresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-teams">teams</h1>

## GET /teams

<a id="opIdget_teams"></a>

> Code samples

```bash
curl https://api.opendota.com/api/teams \
  -H 'Accept: application/json'
```

`GET /teams`

Get team data

<h3 id="get-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number, zero indexed. Each page returns up to 1000 entries.|

> Example responses

> 200 Response

```json
[
  {
    "team_id": 0,
    "rating": 0,
    "wins": 0,
    "losses": 0,
    "last_match_time": 0,
    "name": "Newbee",
    "tag": "string"
  }
]
```

<h3 id="get-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamObjectResponse](#schemateamobjectresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /teams/{team_id}

<a id="opIdget_teams_by_team_id"></a>

> Code samples

```bash
curl https://api.opendota.com/api/teams/0 \
  -H 'Accept: application/json'
```

`GET /teams/{team_id}`

Get data for a team

<h3 id="get-teamsteamid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_id|path|integer|true|Team ID|

> Example responses

> 200 Response

```json
{
  "team_id": 0,
  "rating": 0,
  "wins": 0,
  "losses": 0,
  "last_match_time": 0,
  "name": "Newbee",
  "tag": "string"
}
```

<h3 id="get-teamsteamid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TeamObjectResponse](#schemateamobjectresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## GET /teams/{team_id}/matches

<a id="opIdget_teams_by_team_id_select_matches"></a>

> Code samples

```bash
curl https://api.opendota.com/api/teams/0/matches \
  -H 'Accept: application/json'
```

`GET /teams/{team_id}/matches`

Get matches for a team

<h3 id="get-teamsteamidmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_id|path|integer|true|Team ID|

> Example responses

> 200 Response

```json
{
  "match_id": 3703866531,
  "radiant": true,
  "radiant_win": true,
  "radiant_score": 0,
  "dire_score": 0,
  "duration": 0,
  "start_time": 0,
  "leagueid": 0,
  "league_name": "string",
  "cluster": 0,
  "opposing_team_id": 0,
  "opposing_team_name": "string",
  "opposing_team_logo": "string"
}
```

<h3 id="get-teamsteamidmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TeamMatchObjectResponse](#schemateammatchobjectresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## GET /teams/{team_id}/players

<a id="opIdget_teams_by_team_id_select_players"></a>

> Code samples

```bash
curl https://api.opendota.com/api/teams/0/players \
  -H 'Accept: application/json'
```

`GET /teams/{team_id}/players`

Get players who have played for a team

<h3 id="get-teamsteamidplayers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_id|path|integer|true|Team ID|

> Example responses

> 200 Response

```json
{
  "account_id": 0,
  "name": "string",
  "games_played": 0,
  "wins": 0,
  "is_current_team_member": true
}
```

<h3 id="get-teamsteamidplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TeamPlayersResponse](#schemateamplayersresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## GET /teams/{team_id}/heroes

<a id="opIdget_teams_by_team_id_select_heroes"></a>

> Code samples

```bash
curl https://api.opendota.com/api/teams/0/heroes \
  -H 'Accept: application/json'
```

`GET /teams/{team_id}/heroes`

Get heroes for a team

<h3 id="get-teamsteamidheroes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_id|path|integer|true|Team ID|

> Example responses

> 200 Response

```json
{
  "hero_id": 0,
  "name": "Anti-Mage",
  "games_played": 0,
  "wins": 0
}
```

<h3 id="get-teamsteamidheroes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TeamHeroesResponse](#schemateamheroesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-records">records</h1>

## GET /records/{field}

<a id="opIdget_records_by_field"></a>

> Code samples

```bash
curl https://api.opendota.com/api/records/string \
  -H 'Accept: application/json'
```

`GET /records/{field}`

Get top performances in a stat

<h3 id="get-recordsfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|field|path|string|true|Field name to query|

> Example responses

> 200 Response

```json
[
  {
    "match_id": 3703866531,
    "start_time": 0,
    "hero_id": 0,
    "score": 0
  }
]
```

<h3 id="get-recordsfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-recordsfield-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RecordsResponse](#schemarecordsresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-live">live</h1>

## GET /live

<a id="opIdget_live"></a>

> Code samples

```bash
curl https://api.opendota.com/api/live \
  -H 'Accept: application/json'
```

`GET /live`

Get top currently ongoing live games

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-live-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-live-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-scenarios">scenarios</h1>

## GET /scenarios/itemTimings

<a id="opIdget_scenarios_item_timings"></a>

> Code samples

```bash
curl https://api.opendota.com/api/scenarios/itemTimings \
  -H 'Accept: application/json'
```

`GET /scenarios/itemTimings`

Win rates for certain item timings on a hero for items that cost at least 1400 gold

<h3 id="get-scenariositemtimings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|item|query|string|false|Filter by item name e.g. "spirit_vessel"|
|hero_id|query|integer|false|Hero ID|

> Example responses

> 200 Response

```json
[
  {
    "hero_id": 0,
    "item": "string",
    "time": 0,
    "games": "string",
    "wins": "string"
  }
]
```

<h3 id="get-scenariositemtimings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-scenariositemtimings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScenarioItemTimingsResponse](#schemascenarioitemtimingsresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /scenarios/laneRoles

<a id="opIdget_scenarios_lane_roles"></a>

> Code samples

```bash
curl https://api.opendota.com/api/scenarios/laneRoles \
  -H 'Accept: application/json'
```

`GET /scenarios/laneRoles`

Win rates for heroes in certain lane roles

<h3 id="get-scenarioslaneroles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lane_role|query|string|false|Filter by lane role 1-4 (Safe, Mid, Off, Jungle)|
|hero_id|query|integer|false|Hero ID|

> Example responses

> 200 Response

```json
[
  {
    "hero_id": 0,
    "lane_role": 0,
    "time": 0,
    "games": "string",
    "wins": "string"
  }
]
```

<h3 id="get-scenarioslaneroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-scenarioslaneroles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScenarioLaneRolesResponse](#schemascenariolanerolesresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET /scenarios/misc

<a id="opIdget_scenarios_misc"></a>

> Code samples

```bash
curl https://api.opendota.com/api/scenarios/misc \
  -H 'Accept: application/json'
```

`GET /scenarios/misc`

Miscellaneous team scenarios

<h3 id="get-scenariosmisc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scenario|query|string|false|Name of the scenario (see teamScenariosQueryParams)|

> Example responses

> 200 Response

```json
[
  {
    "scenario": "string",
    "is_radiant": true,
    "region": 0,
    "games": "string",
    "wins": "string"
  }
]
```

<h3 id="get-scenariosmisc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-scenariosmisc-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScenarioMiscResponse](#schemascenariomiscresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-schema">schema</h1>

## GET /schema

<a id="opIdget_schema"></a>

> Code samples

```bash
curl https://api.opendota.com/api/schema \
  -H 'Accept: application/json'
```

`GET /schema`

Get database schema

> Example responses

> 200 Response

```json
[
  {
    "table_name": "string",
    "column_name": "string",
    "data_type": "string"
  }
]
```

<h3 id="get-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SchemaResponse](#schemaschemaresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="opendota-api-constants">constants</h1>

## GET /constants

<a id="opIdget_constants_by_resource"></a>

> Code samples

```bash
curl https://api.opendota.com/api/constants/string \
  -H 'Accept: application/json'
```

`GET /constants/{resource}`

Get static game data mirrored from the dotaconstants repository.

<h3 id="get-constants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|Resource name e.g. `heroes`. [List of resources](https://github.com/odota/dotaconstants/tree/master/build)|

> Example responses

> 200 Response

```json
{
  "property1": null,
  "property2": null
}
```

<h3 id="get-constants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-constants-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|**additionalProperties**|object|false|none|none|
|*oneOf*|[object \| integer]|false|none|none|
|*anonymous*|[object \| integer]|false|none|none|
|» *oneOf*|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» *oneOf*|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_BenchmarksResponse">BenchmarksResponse</h2>
<!-- backwards compatibility -->
<a id="schemabenchmarksresponse"></a>
<a id="schema_BenchmarksResponse"></a>
<a id="tocSbenchmarksresponse"></a>
<a id="tocsbenchmarksresponse"></a>

```json
{
  "hero_id": 0,
  "result": {
    "gold_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "xp_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "kills_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "deaths_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "assists_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "last_hits_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "denies_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "hero_damage_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "hero_healing_per_min": [
      {
        "percentile": 0,
        "value": 0
      }
    ],
    "tower_damage": [
      {
        "percentile": 0,
        "value": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hero_id|integer|false|none|The ID value of the hero played|
|result|object|false|none|result|

<h2 id="tocS_DistributionsResponse">DistributionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadistributionsresponse"></a>
<a id="schema_DistributionsResponse"></a>
<a id="tocSdistributionsresponse"></a>
<a id="tocsdistributionsresponse"></a>

```json
{
  "ranks": {
    "rows": [
      {
        "bin": 0,
        "bin_name": 0,
        "count": 0,
        "cumulative_sum": 0
      }
    ],
    "sum": {
      "count": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ranks|object|false|none|ranks|

<h2 id="tocS_HeroDurationsResponse">HeroDurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaherodurationsresponse"></a>
<a id="schema_HeroDurationsResponse"></a>
<a id="tocSherodurationsresponse"></a>
<a id="tocsherodurationsresponse"></a>

```json
{
  "duration_bin": "string",
  "games_played": 0,
  "wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration_bin|string|false|none|Lower bound of number of seconds the match lasted|
|games_played|integer|false|none|Number of games played|
|wins|integer|false|none|Number of wins|

<h2 id="tocS_HeroItemPopularityResponse">HeroItemPopularityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaheroitempopularityresponse"></a>
<a id="schema_HeroItemPopularityResponse"></a>
<a id="tocSheroitempopularityresponse"></a>
<a id="tocsheroitempopularityresponse"></a>

```json
{
  "start_game_items": {
    "item": 0
  },
  "early_game_items": {
    "item": 0
  },
  "mid_game_items": {
    "item": 0
  },
  "late_game_items": {
    "item": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_game_items|object|false|none|Items bought before game started|
|early_game_items|object|false|none|Items bought in the first 10 min of the game, with cost at least 700|
|mid_game_items|object|false|none|Items bought between 10 and 25 min of the game, with cost at least 2000|
|late_game_items|object|false|none|Items bought at least 25 min after game started, with cost at least 4000|

<h2 id="tocS_HeroMatchupsResponse">HeroMatchupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaheromatchupsresponse"></a>
<a id="schema_HeroMatchupsResponse"></a>
<a id="tocSheromatchupsresponse"></a>
<a id="tocsheromatchupsresponse"></a>

```json
{
  "hero_id": 0,
  "games_played": 0,
  "wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hero_id|integer|false|none|The ID value of the hero played|
|games_played|integer|false|none|Number of games played|
|wins|integer|false|none|Number of games won|

<h2 id="tocS_HeroObjectResponse">HeroObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaheroobjectresponse"></a>
<a id="schema_HeroObjectResponse"></a>
<a id="tocSheroobjectresponse"></a>
<a id="tocsheroobjectresponse"></a>

```json
{
  "id": 0,
  "name": "npc_dota_hero_antimage",
  "localized_name": "Anti-Mage",
  "primary_attr": "string",
  "attack_type": "string",
  "roles": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|The ID value of the hero played|
|name|string|false|none|Dota hero command name|
|localized_name|string|false|none|Hero name|
|primary_attr|string|false|none|Hero primary shorthand attribute name, e.g. 'agi'|
|attack_type|string|false|none|Hero attack type, either 'Melee' or 'Ranged'|
|roles|[string]|false|none|none|

<h2 id="tocS_HeroStatsResponse">HeroStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaherostatsresponse"></a>
<a id="schema_HeroStatsResponse"></a>
<a id="tocSherostatsresponse"></a>
<a id="tocsherostatsresponse"></a>

```json
{
  "id": 0,
  "name": "npc_dota_hero_antimage",
  "localized_name": "Anti-Mage",
  "primary_attr": "string",
  "attack_type": "string",
  "roles": [
    "string"
  ],
  "img": "string",
  "icon": "string",
  "base_health": 0,
  "base_health_regen": 0,
  "base_mana": 0,
  "base_mana_regen": 0,
  "base_armor": 0,
  "base_mr": 0,
  "base_attack_min": 0,
  "base_attack_max": 0,
  "base_str": 0,
  "base_agi": 0,
  "base_int": 0,
  "str_gain": 0,
  "agi_gain": 0,
  "int_gain": 0,
  "attack_range": 0,
  "projectile_speed": 0,
  "attack_rate": 0,
  "base_attack_time": 0,
  "attack_point": 0,
  "move_speed": 0,
  "turn_rate": 0,
  "cm_enabled": true,
  "legs": 0,
  "day_vision": 0,
  "night_vision": 0,
  "hero_id": 0,
  "turbo_picks": 0,
  "turbo_wins": 0,
  "pro_ban": 0,
  "pro_win": 0,
  "pro_pick": 0,
  "1_pick": 0,
  "1_win": 0,
  "2_pick": 0,
  "2_win": 0,
  "3_pick": 0,
  "3_win": 0,
  "4_pick": 0,
  "4_win": 0,
  "5_pick": 0,
  "5_win": 0,
  "6_pick": 0,
  "6_win": 0,
  "7_pick": 0,
  "7_win": 0,
  "8_pick": 0,
  "8_win": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|The ID value of the hero played|
|name|string|false|none|Dota hero command name|
|localized_name|string|false|none|Hero name|
|primary_attr|string|false|none|primary_attr|
|attack_type|string|false|none|attack_type|
|roles|[string]|false|none|roles|
|img|string|false|none|img|
|icon|string|false|none|icon|
|base_health|integer|false|none|base_health|
|base_health_regen|number|false|none|base_health_regen|
|base_mana|integer|false|none|base_mana|
|base_mana_regen|integer|false|none|base_mana_regen|
|base_armor|integer|false|none|base_armor|
|base_mr|integer|false|none|base_mr|
|base_attack_min|integer|false|none|base_attack_min|
|base_attack_max|integer|false|none|base_attack_max|
|base_str|integer|false|none|base_str|
|base_agi|integer|false|none|base_agi|
|base_int|integer|false|none|base_int|
|str_gain|number|false|none|str_gain|
|agi_gain|number|false|none|agi_gain|
|int_gain|number|false|none|int_gain|
|attack_range|integer|false|none|attack_range|
|projectile_speed|integer|false|none|projectile_speed|
|attack_rate|number|false|none|attack_rate|
|base_attack_time|integer|false|none|base_attack_time|
|attack_point|number|false|none|attack_point|
|move_speed|integer|false|none|move_speed|
|turn_rate|number|false|none|turn_rate|
|cm_enabled|boolean|false|none|cm_enabled|
|legs|integer|false|none|legs|
|day_vision|integer|false|none|day_vision|
|night_vision|integer|false|none|night_vision|
|hero_id|integer|false|none|The ID value of the hero played|
|turbo_picks|integer|false|none|Picks in Turbo mode this month|
|turbo_wins|integer|false|none|Wins in Turbo mode this month|
|pro_ban|integer|false|none|pro_ban|
|pro_win|integer|false|none|pro_win|
|pro_pick|integer|false|none|pro_pick|
|1_pick|integer|false|none|Herald picks|
|1_win|integer|false|none|Herald wins|
|2_pick|integer|false|none|Guardian picks|
|2_win|integer|false|none|Guardian wins|
|3_pick|integer|false|none|Crusader picks|
|3_win|integer|false|none|Crusader wins|
|4_pick|integer|false|none|Archon picks|
|4_win|integer|false|none|Archon wins|
|5_pick|integer|false|none|Legend picks|
|5_win|integer|false|none|Legend wins|
|6_pick|integer|false|none|Ancient picks|
|6_win|integer|false|none|Ancient wins|
|7_pick|integer|false|none|Divine picks|
|7_win|integer|false|none|Divine wins|
|8_pick|integer|false|none|Immortal picks|
|8_win|integer|false|none|Immortal wins|

<h2 id="tocS_LeagueObjectResponse">LeagueObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaleagueobjectresponse"></a>
<a id="schema_LeagueObjectResponse"></a>
<a id="tocSleagueobjectresponse"></a>
<a id="tocsleagueobjectresponse"></a>

```json
{
  "leagueid": 0,
  "ticket": "string",
  "banner": "string",
  "tier": "string",
  "name": "ASUS ROG DreamLeague Season 4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leagueid|integer|false|none|leagueid|
|ticket|string|false|none|ticket|
|banner|string|false|none|banner|
|tier|string|false|none|tier|
|name|string|false|none|League name|

<h2 id="tocS_MatchObjectResponse">MatchObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemamatchobjectresponse"></a>
<a id="schema_MatchObjectResponse"></a>
<a id="tocSmatchobjectresponse"></a>
<a id="tocsmatchobjectresponse"></a>

```json
{
  "match_id": 3703866531,
  "duration": 0,
  "start_time": 0,
  "radiant_team_id": 0,
  "radiant_name": "string",
  "dire_team_id": 0,
  "dire_name": "string",
  "leagueid": 0,
  "league_name": "string",
  "series_id": 0,
  "series_type": 0,
  "radiant_score": 0,
  "dire_score": 0,
  "radiant_win": true,
  "radiant": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match_id|integer|false|none|The ID number of the match assigned by Valve|
|duration|integer|false|none|Duration of the game in seconds|
|start_time|integer|false|none|The Unix timestamp at which the game started|
|radiant_team_id|integer|false|none|The Radiant's team_id|
|radiant_name|string|false|none|The Radiant's team name|
|dire_team_id|integer|false|none|The Dire's team_id|
|dire_name|string|false|none|The Dire's team name|
|leagueid|integer|false|none|Identifier for the league the match took place in|
|league_name|string|false|none|Name of league the match took place in|
|series_id|integer|false|none|Identifier for the series of the match|
|series_type|integer|false|none|Type of series the match was|
|radiant_score|integer|false|none|Number of kills the Radiant team had when the match ended|
|dire_score|integer|false|none|Number of kills the Dire team had when the match ended|
|radiant_win|boolean \| null|false|none|Boolean indicating whether Radiant won the match|
|radiant|boolean|false|none|Whether the team/player/hero was on Radiant|

<h2 id="tocS_MatchResponse">MatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemamatchresponse"></a>
<a id="schema_MatchResponse"></a>
<a id="tocSmatchresponse"></a>
<a id="tocsmatchresponse"></a>

```json
{
  "match_id": 3703866531,
  "barracks_status_dire": 0,
  "barracks_status_radiant": 0,
  "chat": [
    {
      "time": 0,
      "unit": "string",
      "key": "string",
      "slot": 0,
      "player_slot": 0
    }
  ],
  "cluster": 0,
  "cosmetics": {
    "property1": 0,
    "property2": 0
  },
  "dire_score": 0,
  "draft_timings": [
    {
      "order": 0,
      "pick": true,
      "active_team": 0,
      "hero_id": 0,
      "player_slot": 0,
      "extra_time": 0,
      "total_time_taken": 0
    }
  ],
  "duration": 0,
  "engine": 0,
  "first_blood_time": 0,
  "game_mode": 0,
  "human_players": 0,
  "leagueid": 0,
  "lobby_type": 0,
  "match_seq_num": 0,
  "negative_votes": 0,
  "objectives": [
    {}
  ],
  "picks_bans": [
    {
      "is_pick": true,
      "hero_id": 0,
      "team": 0,
      "order": 0
    }
  ],
  "positive_votes": 0,
  "radiant_gold_adv": [
    0
  ],
  "radiant_score": 0,
  "radiant_win": true,
  "radiant_xp_adv": [
    0
  ],
  "start_time": 0,
  "teamfights": [
    {}
  ],
  "tower_status_dire": 0,
  "tower_status_radiant": 0,
  "version": 0,
  "replay_salt": 0,
  "series_id": 0,
  "series_type": 0,
  "radiant_team": {},
  "dire_team": {},
  "league": {},
  "skill": 0,
  "players": [
    {
      "match_id": 3703866531,
      "player_slot": 0,
      "ability_upgrades_arr": [
        0
      ],
      "ability_uses": {},
      "ability_targets": {},
      "damage_targets": {},
      "account_id": 0,
      "actions": {},
      "additional_units": [
        {}
      ],
      "assists": 0,
      "backpack_0": 0,
      "backpack_1": 0,
      "backpack_2": 0,
      "buyback_log": [
        {
          "time": 0,
          "slot": 0,
          "player_slot": 0
        }
      ],
      "camps_stacked": 0,
      "camps_stacked_t": [
        0
      ],
      "connection_log": [
        {
          "time": 0,
          "event": "string",
          "player_slot": 0
        }
      ],
      "creeps_stacked": 0,
      "damage": {},
      "damage_inflictor": {},
      "damage_inflictor_received": {},
      "damage_taken": {},
      "deaths": 0,
      "denies": 0,
      "dn_t": [
        0
      ],
      "gold": 0,
      "gold_per_min": 0,
      "gold_reasons": {},
      "gold_spent": 0,
      "gold_t": [
        0
      ],
      "hero_damage": 0,
      "hero_damage_t": [
        0
      ],
      "hero_healing": 0,
      "hero_healing_t": [
        0
      ],
      "tower_damage_t": [
        0
      ],
      "hero_hits": {},
      "hero_id": 0,
      "item_0": 0,
      "item_1": 0,
      "item_2": 0,
      "item_3": 0,
      "item_4": 0,
      "item_5": 0,
      "item_uses": {},
      "kill_streaks": {},
      "killed": {},
      "killed_by": {},
      "kills": 0,
      "kills_log": [
        {
          "time": 0,
          "key": "string"
        }
      ],
      "deaths_log": [
        {
          "time": 0,
          "key": "string",
          "gold_lost": 0,
          "gold_fed": 0,
          "gold_fed_shared": true,
          "time_dead": 0
        }
      ],
      "lane_pos": {},
      "last_hits": 0,
      "leaver_status": 0,
      "level": 0,
      "lh_t": [
        0
      ],
      "life_state": {},
      "max_hero_hit": {},
      "multi_kills": {},
      "obs": {},
      "obs_left_log": [
        {}
      ],
      "obs_log": [
        {}
      ],
      "obs_placed": 0,
      "party_id": 0,
      "permanent_buffs": [
        {}
      ],
      "hero_variant": 0,
      "pings": 0,
      "purchase": {},
      "purchase_log": [
        {
          "time": 0,
          "key": "string",
          "charges": 0
        }
      ],
      "rune_pickups": 0,
      "runes": {
        "property1": 0,
        "property2": 0
      },
      "runes_log": [
        {
          "time": 0,
          "key": 0
        }
      ],
      "sen": {},
      "sen_left_log": [
        {}
      ],
      "sen_log": [
        {}
      ],
      "sen_placed": 0,
      "stuns": 0,
      "times": [
        0
      ],
      "tower_damage": 0,
      "xp_per_min": 0,
      "xp_reasons": {},
      "xp_t": [
        0
      ],
      "personaname": "420 booty wizard",
      "name": "string",
      "last_login": "1970-01-01T00:00:00Z",
      "radiant_win": true,
      "start_time": 0,
      "duration": 0,
      "cluster": 0,
      "lobby_type": 0,
      "game_mode": 0,
      "patch": 0,
      "region": 0,
      "isRadiant": true,
      "win": 0,
      "lose": 0,
      "total_gold": 0,
      "total_xp": 0,
      "kills_per_min": 0,
      "kda": 0,
      "abandons": 0,
      "neutral_kills": 0,
      "tower_kills": 0,
      "courier_kills": 0,
      "lane_kills": 0,
      "hero_kills": 0,
      "observer_kills": 0,
      "sentry_kills": 0,
      "roshan_kills": 0,
      "necronomicon_kills": 0,
      "ancient_kills": 0,
      "buyback_count": 0,
      "observer_uses": 0,
      "sentry_uses": 0,
      "lane_efficiency": 0,
      "lane_efficiency_pct": 0,
      "lane": 0,
      "lane_role": 0,
      "is_roaming": true,
      "position_est": 0,
      "purchase_time": {},
      "first_purchase_time": {},
      "item_win": {},
      "item_usage": {},
      "purchase_tpscroll": 0,
      "actions_per_min": 0,
      "life_state_dead": 0,
      "rank_tier": 0,
      "cosmetics": [
        {
          "item_id": 0,
          "name": "string",
          "prefab": "string",
          "creation_date": "1970-01-01T00:00:00Z",
          "image_inventory": "string",
          "image_path": "string",
          "item_description": "string",
          "item_name": "string",
          "item_rarity": "string",
          "item_type_name": "string",
          "used_by_heroes": "string"
        }
      ],
      "benchmarks": {},
      "neutral_tokens_log": [
        {
          "time": 0,
          "key": "string"
        }
      ],
      "neutral_item_history": [
        {
          "time": 0,
          "item_neutral": "string",
          "item_neutral_enhancement": "string"
        }
      ]
    }
  ],
  "patch": 0,
  "region": 0,
  "all_word_counts": {},
  "my_word_counts": {},
  "throw": 0,
  "comeback": 0,
  "loss": 0,
  "win": 0,
  "replay_url": "string",
  "pauses": [
    {
      "time": 0,
      "duration": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match_id|integer|false|none|The ID number of the match assigned by Valve|
|barracks_status_dire|integer|false|none|Bitmask. An integer that represents a binary of which barracks are still standing. 63 would mean all barracks still stand at the end of the game.|
|barracks_status_radiant|integer|false|none|Bitmask. An integer that represents a binary of which barracks are still standing. 63 would mean all barracks still stand at the end of the game.|
|chat|[object]|false|none|Array containing information on the chat of the game|
|cluster|integer|false|none|cluster|
|cosmetics|object|false|none|cosmetics|
|dire_score|integer|false|none|Number of kills the Dire team had when the match ended|
|draft_timings|[object]|false|none|draft_timings|
|duration|integer|false|none|Duration of the game in seconds|
|engine|integer|false|none|engine|
|first_blood_time|integer|false|none|Time in seconds at which first blood occurred|
|game_mode|integer|false|none|Integer corresponding to game mode played. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/game_mode.json|
|human_players|integer|false|none|Number of human players in the game|
|leagueid|integer|false|none|leagueid|
|lobby_type|integer|false|none|Integer corresponding to lobby type of match. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/lobby_type.json|
|match_seq_num|integer|false|none|match_seq_num|
|negative_votes|integer|false|none|Number of negative votes the replay received in the in-game client|
|objectives|[object]|false|none|objectives|
|picks_bans|[object]|false|none|Array containing information on the draft. Each item contains a boolean relating to whether the choice is a pick or a ban, the hero ID, the team the picked or banned it, and the order.|
|positive_votes|integer|false|none|Number of positive votes the replay received in the in-game client|
|radiant_gold_adv|[number]|false|none|Array of the Radiant gold advantage at each minute in the game. A negative number means that Radiant is behind, and thus it is their gold disadvantage. |
|radiant_score|integer|false|none|Number of kills the Radiant team had when the match ended|
|radiant_win|boolean \| null|false|none|Boolean indicating whether Radiant won the match|
|radiant_xp_adv|[number]|false|none|Array of the Radiant experience advantage at each minute in the game. A negative number means that Radiant is behind, and thus it is their experience disadvantage. |
|start_time|integer|false|none|The Unix timestamp at which the game started|
|teamfights|[object]|false|none|teamfights|
|tower_status_dire|integer|false|none|Bitmask. An integer that represents a binary of which Dire towers are still standing.|
|tower_status_radiant|integer|false|none|Bitmask. An integer that represents a binary of which Radiant towers are still standing.|
|version|integer|false|none|Parse version, used internally by OpenDota|
|replay_salt|integer|false|none|replay_salt|
|series_id|integer|false|none|series_id|
|series_type|integer|false|none|series_type|
|radiant_team|object|false|none|radiant_team|
|dire_team|object|false|none|dire_team|
|league|object|false|none|league|
|skill|integer \| null|false|none|Skill bracket assigned by Valve (Normal, High, Very High)|
|players|[object]|false|none|Array of information on individual players|
|patch|integer|false|none|Patch ID, from dotaconstants|
|region|integer|false|none|Integer corresponding to the region the game was played on|
|all_word_counts|object|false|none|Word counts of the all chat messages in the player's games|
|my_word_counts|object|false|none|Word counts of the player's all chat messages|
|throw|integer|false|none|Maximum gold advantage of the player's team if they lost the match|
|comeback|integer|false|none|Maximum gold disadvantage of the player's team if they won the match|
|loss|integer|false|none|Maximum gold disadvantage of the player's team if they lost the match|
|win|integer|false|none|Maximum gold advantage of the player's team if they won the match|
|replay_url|string|false|none|replay_url|
|pauses|[object]|false|none|Array containing information about pauses during the game. Each item contains the time and duration of the pause.|

<h2 id="tocS_MetadataResponse">MetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemametadataresponse"></a>
<a id="schema_MetadataResponse"></a>
<a id="tocSmetadataresponse"></a>
<a id="tocsmetadataresponse"></a>

```json
{
  "banner": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banner|object \| null|false|none|banner|

<h2 id="tocS_ParsedMatchesResponse">ParsedMatchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaparsedmatchesresponse"></a>
<a id="schema_ParsedMatchesResponse"></a>
<a id="tocSparsedmatchesresponse"></a>
<a id="tocsparsedmatchesresponse"></a>

```json
{
  "match_id": 3703866531
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match_id|integer|false|none|The ID number of the match assigned by Valve|

<h2 id="tocS_PlayerCountsResponse">PlayerCountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayercountsresponse"></a>
<a id="schema_PlayerCountsResponse"></a>
<a id="tocSplayercountsresponse"></a>
<a id="tocsplayercountsresponse"></a>

```json
{
  "leaver_status": {},
  "game_mode": {},
  "lobby_type": {},
  "lane_role": {},
  "region": {},
  "patch": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leaver_status|object|false|none|Integer describing whether or not the player left the game. 0: didn't leave. 1: left safely. 2+: Abandoned|
|game_mode|object|false|none|Integer corresponding to game mode played. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/game_mode.json|
|lobby_type|object|false|none|Integer corresponding to lobby type of match. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/lobby_type.json|
|lane_role|object|false|none|lane_role|
|region|object|false|none|Integer corresponding to the region the game was played on|
|patch|object|false|none|Patch ID, from dotaconstants|

<h2 id="tocS_PlayerHeroesResponse">PlayerHeroesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerheroesresponse"></a>
<a id="schema_PlayerHeroesResponse"></a>
<a id="tocSplayerheroesresponse"></a>
<a id="tocsplayerheroesresponse"></a>

```json
{
  "hero_id": 0,
  "last_played": 0,
  "games": 0,
  "win": 0,
  "with_games": 0,
  "with_win": 0,
  "against_games": 0,
  "against_win": 0
}
```

hero

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hero_id|integer|false|none|The ID value of the hero played|
|last_played|integer|false|none|last_played|
|games|integer|false|none|games|
|win|integer|false|none|win|
|with_games|integer|false|none|with_games|
|with_win|integer|false|none|with_win|
|against_games|integer|false|none|against_games|
|against_win|integer|false|none|against_win|

<h2 id="tocS_PlayerMatchesResponse">PlayerMatchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayermatchesresponse"></a>
<a id="schema_PlayerMatchesResponse"></a>
<a id="tocSplayermatchesresponse"></a>
<a id="tocsplayermatchesresponse"></a>

```json
{
  "match_id": 3703866531,
  "player_slot": 0,
  "radiant_win": true,
  "duration": 0,
  "game_mode": 0,
  "lobby_type": 0,
  "hero_id": 0,
  "start_time": 0,
  "version": 0,
  "kills": 0,
  "deaths": 0,
  "assists": 0,
  "skill": 0,
  "average_rank": 0,
  "leaver_status": 0,
  "party_size": 0,
  "hero_variant": 0
}
```

Object containing information on the match

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match_id|integer|false|none|The ID number of the match assigned by Valve|
|player_slot|integer \| null|false|none|Which slot the player is in. 0-127 are Radiant, 128-255 are Dire|
|radiant_win|boolean \| null|false|none|Boolean indicating whether Radiant won the match|
|duration|integer|false|none|Duration of the game in seconds|
|game_mode|integer|false|none|Integer corresponding to game mode played. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/game_mode.json|
|lobby_type|integer|false|none|Integer corresponding to lobby type of match. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/lobby_type.json|
|hero_id|integer|false|none|The ID value of the hero played|
|start_time|integer|false|none|The Unix timestamp at which the game started|
|version|integer \| null|false|none|version|
|kills|integer|false|none|Total kills the player had at the end of the game|
|deaths|integer|false|none|Total deaths the player had at the end of the game|
|assists|integer|false|none|Total assists the player had at the end of the game|
|skill|integer \| null|false|none|Skill bracket assigned by Valve (Normal, High, Very High)|
|average_rank|integer \| null|false|none|Average rank of players with public match data|
|leaver_status|integer|false|none|Integer describing whether or not the player left the game. 0: didn't leave. 1: left safely. 2+: Abandoned|
|party_size|integer \| null|false|none|Size of the player's party|
|hero_variant|integer|false|none|1-indexed facet, see https://github.com/odota/dotaconstants/blob/master/build/hero_abilities.json|

<h2 id="tocS_PlayerObjectResponse">PlayerObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerobjectresponse"></a>
<a id="schema_PlayerObjectResponse"></a>
<a id="tocSplayerobjectresponse"></a>
<a id="tocsplayerobjectresponse"></a>

```json
{
  "account_id": 0,
  "steamid": "string",
  "avatar": "string",
  "avatarmedium": "string",
  "avatarfull": "string",
  "profileurl": "string",
  "personaname": "420 booty wizard",
  "last_login": "1970-01-01T00:00:00Z",
  "full_history_time": "1970-01-01T00:00:00Z",
  "cheese": 0,
  "fh_unavailable": true,
  "loccountrycode": "string",
  "name": "string",
  "country_code": "string",
  "fantasy_role": 0,
  "team_id": 0,
  "team_name": "Newbee",
  "team_tag": "string",
  "is_locked": true,
  "is_pro": true,
  "locked_until": 0,
  "computed_mmr": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer|false|none|The player account ID|
|steamid|string|false|none|Player's steam identifier|
|avatar|string|false|none|Steam picture URL (small picture)|
|avatarmedium|string|false|none|Steam picture URL (medium picture)|
|avatarfull|string|false|none|Steam picture URL (full picture)|
|profileurl|string|false|none|Steam profile URL|
|personaname|string \| null|false|none|Player's Steam name|
|last_login|string(date-time)|false|none|Date and time of last login to OpenDota|
|full_history_time|string(date-time)|false|none|Date and time of last request to refresh player's match history|
|cheese|integer|false|none|Amount of dollars the player has donated to OpenDota|
|fh_unavailable|boolean|false|none|Whether the refresh of player' match history failed|
|loccountrycode|string|false|none|Player's country identifier, e.g. US|
|name|string|false|none|Verified player name, e.g. 'Miracle-'|
|country_code|string|false|none|Player's country code|
|fantasy_role|integer|false|none|Player's ingame role (core: 1 or support: 2)|
|team_id|integer|false|none|Player's team identifier|
|team_name|string \| null|false|none|Team name|
|team_tag|string|false|none|Player's team shorthand tag, e.g. 'EG'|
|is_locked|boolean|false|none|Whether the roster lock is active|
|is_pro|boolean|false|none|Whether the player is professional or not|
|locked_until|integer|false|none|When the roster lock will end|
|computed_mmr|integer \| null|false|none|Rating estimate based on ranked matches|

<h2 id="tocS_PlayerPeersResponse">PlayerPeersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerpeersresponse"></a>
<a id="schema_PlayerPeersResponse"></a>
<a id="tocSplayerpeersresponse"></a>
<a id="tocsplayerpeersresponse"></a>

```json
{
  "account_id": 0,
  "last_played": 0,
  "win": 0,
  "games": 0,
  "with_win": 0,
  "with_games": 0,
  "against_win": 0,
  "against_games": 0,
  "with_gpm_sum": 0,
  "with_xpm_sum": 0,
  "personaname": "420 booty wizard",
  "name": "string",
  "is_contributor": true,
  "is_subscriber": true,
  "last_login": "string",
  "avatar": "string",
  "avatarfull": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer|false|none|The player account ID|
|last_played|integer|false|none|last_played|
|win|integer|false|none|win|
|games|integer|false|none|games|
|with_win|integer|false|none|with_win|
|with_games|integer|false|none|with_games|
|against_win|integer|false|none|against_win|
|against_games|integer|false|none|against_games|
|with_gpm_sum|integer|false|none|with_gpm_sum|
|with_xpm_sum|integer|false|none|with_xpm_sum|
|personaname|string \| null|false|none|Player's Steam name|
|name|string \| null|false|none|name|
|is_contributor|boolean|false|none|is_contributor|
|is_subscriber|boolean|false|none|is_subscriber|
|last_login|string \| null|false|none|last_login|
|avatar|string \| null|false|none|avatar|
|avatarfull|string \| null|false|none|avatarfull|

<h2 id="tocS_PlayerProsResponse">PlayerProsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerprosresponse"></a>
<a id="schema_PlayerProsResponse"></a>
<a id="tocSplayerprosresponse"></a>
<a id="tocsplayerprosresponse"></a>

```json
{
  "account_id": 0,
  "name": "string",
  "country_code": "string",
  "fantasy_role": 0,
  "team_id": 0,
  "team_name": "Newbee",
  "team_tag": "string",
  "is_locked": true,
  "is_pro": true,
  "locked_until": 0,
  "steamid": "string",
  "avatar": "string",
  "avatarmedium": "string",
  "avatarfull": "string",
  "profileurl": "string",
  "last_login": "1970-01-01T00:00:00Z",
  "full_history_time": "1970-01-01T00:00:00Z",
  "cheese": 0,
  "fh_unavailable": true,
  "loccountrycode": "string",
  "last_played": 0,
  "win": 0,
  "games": 0,
  "with_win": 0,
  "with_games": 0,
  "against_win": 0,
  "against_games": 0,
  "with_gpm_sum": 0,
  "with_xpm_sum": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer|false|none|The player account ID|
|name|string \| null|false|none|name|
|country_code|string|false|none|country_code|
|fantasy_role|integer|false|none|fantasy_role|
|team_id|integer|false|none|team_id|
|team_name|string \| null|false|none|Team name|
|team_tag|string \| null|false|none|team_tag|
|is_locked|boolean|false|none|is_locked|
|is_pro|boolean|false|none|is_pro|
|locked_until|integer \| null|false|none|locked_until|
|steamid|string \| null|false|none|steamid|
|avatar|string \| null|false|none|avatar|
|avatarmedium|string \| null|false|none|avatarmedium|
|avatarfull|string \| null|false|none|avatarfull|
|profileurl|string \| null|false|none|profileurl|
|last_login|string(date-time) \| null|false|none|last_login|
|full_history_time|string(date-time) \| null|false|none|full_history_time|
|cheese|integer \| null|false|none|cheese|
|fh_unavailable|boolean \| null|false|none|fh_unavailable|
|loccountrycode|string \| null|false|none|loccountrycode|
|last_played|integer \| null|false|none|last_played|
|win|integer|false|none|win|
|games|integer|false|none|games|
|with_win|integer|false|none|with_win|
|with_games|integer|false|none|with_games|
|against_win|integer|false|none|against_win|
|against_games|integer|false|none|against_games|
|with_gpm_sum|integer \| null|false|none|with_gpm_sum|
|with_xpm_sum|integer \| null|false|none|with_xpm_sum|

<h2 id="tocS_PlayerRankingsResponse">PlayerRankingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerrankingsresponse"></a>
<a id="schema_PlayerRankingsResponse"></a>
<a id="tocSplayerrankingsresponse"></a>
<a id="tocsplayerrankingsresponse"></a>

```json
{
  "hero_id": 0,
  "score": 0,
  "percent_rank": 0,
  "card": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hero_id|integer|false|none|The ID value of the hero played|
|score|number|false|none|Hero score|
|percent_rank|number|false|none|percent_rank|
|card|integer|false|none|numeric_rank|

<h2 id="tocS_PlayerRatingsResponse">PlayerRatingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerratingsresponse"></a>
<a id="schema_PlayerRatingsResponse"></a>
<a id="tocSplayerratingsresponse"></a>
<a id="tocsplayerratingsresponse"></a>

```json
{
  "account_id": 0,
  "match_id": 3703866531,
  "rank_tier": 0,
  "time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer|false|none|The player account ID|
|match_id|integer|false|none|The ID number of the match assigned by Valve|
|rank_tier|integer|false|none|Rank tier/medal of the player|
|time|integer|false|none|time|

<h2 id="tocS_PlayerRecentMatchesResponse">PlayerRecentMatchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerrecentmatchesresponse"></a>
<a id="schema_PlayerRecentMatchesResponse"></a>
<a id="tocSplayerrecentmatchesresponse"></a>
<a id="tocsplayerrecentmatchesresponse"></a>

```json
{
  "match_id": 3703866531,
  "player_slot": 0,
  "radiant_win": true,
  "duration": 0,
  "game_mode": 0,
  "lobby_type": 0,
  "hero_id": 0,
  "start_time": 0,
  "version": 0,
  "kills": 0,
  "deaths": 0,
  "assists": 0,
  "skill": 0,
  "average_rank": 0,
  "xp_per_min": 0,
  "gold_per_min": 0,
  "hero_damage": 0,
  "hero_healing": 0,
  "last_hits": 0,
  "lane": 0,
  "lane_role": 0,
  "is_roaming": true,
  "cluster": 0,
  "leaver_status": 0,
  "party_size": 0,
  "hero_variant": 0
}
```

match

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match_id|integer|false|none|The ID number of the match assigned by Valve|
|player_slot|integer \| null|false|none|Which slot the player is in. 0-127 are Radiant, 128-255 are Dire|
|radiant_win|boolean \| null|false|none|Boolean indicating whether Radiant won the match|
|duration|integer|false|none|Duration of the game in seconds|
|game_mode|integer|false|none|Integer corresponding to game mode played. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/game_mode.json|
|lobby_type|integer|false|none|Integer corresponding to lobby type of match. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/lobby_type.json|
|hero_id|integer|false|none|The ID value of the hero played|
|start_time|integer|false|none|The Unix timestamp at which the game started|
|version|integer \| null|false|none|version|
|kills|integer|false|none|Total kills the player had at the end of the match|
|deaths|integer|false|none|Total deaths the player had at the end of the match|
|assists|integer|false|none|Total assists the player had at the end of the match|
|skill|integer \| null|false|none|Skill bracket assigned by Valve (Normal, High, Very High). If the skill is unknown, will return null.|
|average_rank|integer \| null|false|none|Average rank of players with public match data|
|xp_per_min|integer|false|none|Experience Per Minute obtained by the player|
|gold_per_min|integer|false|none|Average gold per minute of the player|
|hero_damage|integer|false|none|Total hero damage to enemy heroes|
|hero_healing|integer|false|none|Total healing of ally heroes|
|last_hits|integer|false|none|Total last hits the player had at the end of the match|
|lane|integer \| null|false|none|Integer corresponding to which lane the player laned in for the match|
|lane_role|integer \| null|false|none|lane_role|
|is_roaming|boolean \| null|false|none|Boolean describing whether or not the player roamed|
|cluster|integer|false|none|cluster|
|leaver_status|integer|false|none|Integer describing whether or not the player left the game. 0: didn't leave. 1: left safely. 2+: Abandoned|
|party_size|integer \| null|false|none|Size of the players party. If not in a party, will return 1.|
|hero_variant|integer|false|none|1-indexed facet, see https://github.com/odota/dotaconstants/blob/master/build/hero_abilities.json|

<h2 id="tocS_PlayersResponse">PlayersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayersresponse"></a>
<a id="schema_PlayersResponse"></a>
<a id="tocSplayersresponse"></a>
<a id="tocsplayersresponse"></a>

```json
{
  "rank_tier": 0,
  "leaderboard_rank": 0,
  "computed_mmr": 0,
  "computed_mmr_turbo": 0,
  "aliases": [
    {
      "personaname": "string",
      "name_since": "string"
    }
  ],
  "profile": {
    "account_id": 0,
    "personaname": "420 booty wizard",
    "name": "string",
    "plus": true,
    "cheese": 0,
    "steamid": "string",
    "avatar": "string",
    "avatarmedium": "string",
    "avatarfull": "string",
    "profileurl": "string",
    "last_login": "string",
    "loccountrycode": "string",
    "is_contributor": false,
    "is_subscriber": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rank_tier|number \| null|false|none|The player's Dota medal/rank|
|leaderboard_rank|number \| null|false|none|The player's rank on the Dota leaderboard (if Immortal)|
|computed_mmr|number \| null|false|none|Rating estimate based on ranked matches|
|computed_mmr_turbo|integer \| null|false|none|Rating estimate based on turbo matches|
|aliases|[object]|false|none|List of names the player has used on Steam|
|profile|object|false|none|profile|

<h2 id="tocS_PlayerTotalsResponse">PlayerTotalsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayertotalsresponse"></a>
<a id="schema_PlayerTotalsResponse"></a>
<a id="tocSplayertotalsresponse"></a>
<a id="tocsplayertotalsresponse"></a>

```json
{
  "field": "string",
  "n": 0,
  "sum": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|field|
|n|integer|false|none|number|
|sum|number|false|none|sum|

<h2 id="tocS_PlayerWardMapResponse">PlayerWardMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerwardmapresponse"></a>
<a id="schema_PlayerWardMapResponse"></a>
<a id="tocSplayerwardmapresponse"></a>
<a id="tocsplayerwardmapresponse"></a>

```json
{
  "obs": {},
  "sen": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|obs|object|false|none|obs|
|sen|object|false|none|sen|

<h2 id="tocS_PlayerWinLossResponse">PlayerWinLossResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerwinlossresponse"></a>
<a id="schema_PlayerWinLossResponse"></a>
<a id="tocSplayerwinlossresponse"></a>
<a id="tocsplayerwinlossresponse"></a>

```json
{
  "win": 0,
  "lose": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|win|integer|false|none|Number of wins|
|lose|integer|false|none|Number of loses|

<h2 id="tocS_PlayerWordCloudResponse">PlayerWordCloudResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerwordcloudresponse"></a>
<a id="schema_PlayerWordCloudResponse"></a>
<a id="tocSplayerwordcloudresponse"></a>
<a id="tocsplayerwordcloudresponse"></a>

```json
{
  "my_word_counts": {},
  "all_word_counts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|my_word_counts|object|false|none|my_word_counts|
|all_word_counts|object|false|none|all_word_counts|

<h2 id="tocS_PublicMatchesResponse">PublicMatchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicmatchesresponse"></a>
<a id="schema_PublicMatchesResponse"></a>
<a id="tocSpublicmatchesresponse"></a>
<a id="tocspublicmatchesresponse"></a>

```json
{
  "match_id": 3703866531,
  "match_seq_num": 0,
  "radiant_win": true,
  "start_time": 0,
  "duration": 0,
  "lobby_type": 0,
  "game_mode": 0,
  "avg_rank_tier": 0,
  "num_rank_tier": 0,
  "cluster": 0,
  "radiant_team": [
    0
  ],
  "dire_team": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match_id|integer|false|none|The ID number of the match assigned by Valve|
|match_seq_num|integer|false|none|match_seq_num|
|radiant_win|boolean \| null|false|none|Boolean indicating whether Radiant won the match|
|start_time|integer|false|none|The Unix timestamp at which the game started|
|duration|integer|false|none|Duration of the game in seconds|
|lobby_type|integer|false|none|none|
|game_mode|integer|false|none|none|
|avg_rank_tier|integer|false|none|none|
|num_rank_tier|integer|false|none|none|
|cluster|integer|false|none|none|
|radiant_team|[integer]|false|none|radiant_team|
|dire_team|[integer]|false|none|dire_team|

<h2 id="tocS_RankingsResponse">RankingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemarankingsresponse"></a>
<a id="schema_RankingsResponse"></a>
<a id="tocSrankingsresponse"></a>
<a id="tocsrankingsresponse"></a>

```json
{
  "hero_id": 0,
  "rankings": [
    {
      "account_id": 0,
      "score": 0,
      "steamid": "string",
      "avatar": "string",
      "avatarmedium": "string",
      "avatarfull": "string",
      "profileurl": "string",
      "personaname": "420 booty wizard",
      "last_login": "1970-01-01T00:00:00Z",
      "full_history_time": "1970-01-01T00:00:00Z",
      "cheese": 0,
      "fh_unavailable": true,
      "loccountrycode": "string",
      "rank_tier": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hero_id|integer|false|none|The ID value of the hero played|
|rankings|[object]|false|none|rankings|

<h2 id="tocS_RecordsResponse">RecordsResponse</h2>
<!-- backwards compatibility -->
<a id="schemarecordsresponse"></a>
<a id="schema_RecordsResponse"></a>
<a id="tocSrecordsresponse"></a>
<a id="tocsrecordsresponse"></a>

```json
{
  "match_id": 3703866531,
  "start_time": 0,
  "hero_id": 0,
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match_id|integer|false|none|The ID number of the match assigned by Valve|
|start_time|integer|false|none|The Unix timestamp at which the game started|
|hero_id|integer|false|none|The ID value of the hero played|
|score|integer|false|none|Record score|

<h2 id="tocS_ScenarioItemTimingsResponse">ScenarioItemTimingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemascenarioitemtimingsresponse"></a>
<a id="schema_ScenarioItemTimingsResponse"></a>
<a id="tocSscenarioitemtimingsresponse"></a>
<a id="tocsscenarioitemtimingsresponse"></a>

```json
{
  "hero_id": 0,
  "item": "string",
  "time": 0,
  "games": "string",
  "wins": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hero_id|integer|false|none|The ID value of the hero played|
|item|string|false|none|Purchased item|
|time|integer|false|none|Ingame time in seconds before the item was purchased|
|games|string|false|none|The number of games where the hero bought this item before this time|
|wins|string|false|none|The number of games won where the hero bought this item before this time|

<h2 id="tocS_ScenarioLaneRolesResponse">ScenarioLaneRolesResponse</h2>
<!-- backwards compatibility -->
<a id="schemascenariolanerolesresponse"></a>
<a id="schema_ScenarioLaneRolesResponse"></a>
<a id="tocSscenariolanerolesresponse"></a>
<a id="tocsscenariolanerolesresponse"></a>

```json
{
  "hero_id": 0,
  "lane_role": 0,
  "time": 0,
  "games": "string",
  "wins": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hero_id|integer|false|none|The ID value of the hero played|
|lane_role|integer|false|none|The hero's lane role|
|time|integer|false|none|Maximum game length in seconds|
|games|string|false|none|The number of games where the hero played in this lane role|
|wins|string|false|none|The number of games won where the hero played in this lane role|

<h2 id="tocS_ScenarioMiscResponse">ScenarioMiscResponse</h2>
<!-- backwards compatibility -->
<a id="schemascenariomiscresponse"></a>
<a id="schema_ScenarioMiscResponse"></a>
<a id="tocSscenariomiscresponse"></a>
<a id="tocsscenariomiscresponse"></a>

```json
{
  "scenario": "string",
  "is_radiant": true,
  "region": 0,
  "games": "string",
  "wins": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scenario|string|false|none|The scenario's name or description|
|is_radiant|boolean|false|none|Boolean indicating whether Radiant executed this scenario|
|region|integer|false|none|Region the game was played in|
|games|string|false|none|The number of games where this scenario occurred|
|wins|string|false|none|The number of games won where this scenario occured|

<h2 id="tocS_SchemaResponse">SchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschemaresponse"></a>
<a id="schema_SchemaResponse"></a>
<a id="tocSschemaresponse"></a>
<a id="tocsschemaresponse"></a>

```json
{
  "table_name": "string",
  "column_name": "string",
  "data_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table_name|string|false|none|table_name|
|column_name|string|false|none|column_name|
|data_type|string|false|none|data_type|

<h2 id="tocS_SearchResponse">SearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_SearchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "account_id": 0,
  "avatarfull": "string",
  "personaname": "420 booty wizard",
  "last_match_time": "string",
  "similarity": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer|false|none|The player account ID|
|avatarfull|string \| null|false|none|avatarfull|
|personaname|string \| null|false|none|Player's Steam name|
|last_match_time|string|false|none|last_match_time. May not be present or null.|
|similarity|number|false|none|similarity|

<h2 id="tocS_TeamHeroesResponse">TeamHeroesResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamheroesresponse"></a>
<a id="schema_TeamHeroesResponse"></a>
<a id="tocSteamheroesresponse"></a>
<a id="tocsteamheroesresponse"></a>

```json
{
  "hero_id": 0,
  "name": "Anti-Mage",
  "games_played": 0,
  "wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hero_id|integer|false|none|The ID value of the hero played|
|name|string|false|none|Hero name|
|games_played|integer|false|none|Number of games played|
|wins|integer|false|none|Number of wins|

<h2 id="tocS_TeamMatchObjectResponse">TeamMatchObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemateammatchobjectresponse"></a>
<a id="schema_TeamMatchObjectResponse"></a>
<a id="tocSteammatchobjectresponse"></a>
<a id="tocsteammatchobjectresponse"></a>

```json
{
  "match_id": 3703866531,
  "radiant": true,
  "radiant_win": true,
  "radiant_score": 0,
  "dire_score": 0,
  "duration": 0,
  "start_time": 0,
  "leagueid": 0,
  "league_name": "string",
  "cluster": 0,
  "opposing_team_id": 0,
  "opposing_team_name": "string",
  "opposing_team_logo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match_id|integer|false|none|The ID number of the match assigned by Valve|
|radiant|boolean|false|none|Whether the team/player/hero was on Radiant|
|radiant_win|boolean \| null|false|none|Boolean indicating whether Radiant won the match|
|radiant_score|integer|false|none|Number of kills the Radiant team had when the match ended|
|dire_score|integer|false|none|Number of kills the Dire team had when the match ended|
|duration|integer|false|none|Duration of the game in seconds|
|start_time|integer|false|none|The Unix timestamp at which the game started|
|leagueid|integer|false|none|Identifier for the league the match took place in|
|league_name|string|false|none|Name of league the match took place in|
|cluster|integer|false|none|cluster|
|opposing_team_id|integer|false|none|Opposing team identifier|
|opposing_team_name|string \| null|false|none|Opposing team name, e.g. 'Evil Geniuses'|
|opposing_team_logo|string|false|none|Opposing team logo url|

<h2 id="tocS_TeamObjectResponse">TeamObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamobjectresponse"></a>
<a id="schema_TeamObjectResponse"></a>
<a id="tocSteamobjectresponse"></a>
<a id="tocsteamobjectresponse"></a>

```json
{
  "team_id": 0,
  "rating": 0,
  "wins": 0,
  "losses": 0,
  "last_match_time": 0,
  "name": "Newbee",
  "tag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team_id|integer|false|none|Team's identifier|
|rating|number|false|none|The Elo rating of the team|
|wins|integer|false|none|The number of games won by this team|
|losses|integer|false|none|The number of losses by this team|
|last_match_time|integer|false|none|The Unix timestamp of the last match played by this team|
|name|string \| null|false|none|Team name|
|tag|string|false|none|The team tag/abbreviation|

<h2 id="tocS_TeamPlayersResponse">TeamPlayersResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamplayersresponse"></a>
<a id="schema_TeamPlayersResponse"></a>
<a id="tocSteamplayersresponse"></a>
<a id="tocsteamplayersresponse"></a>

```json
{
  "account_id": 0,
  "name": "string",
  "games_played": 0,
  "wins": 0,
  "is_current_team_member": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer|false|none|The player account ID|
|name|string \| null|false|none|name|
|games_played|integer|false|none|Number of games played|
|wins|integer|false|none|Number of wins|
|is_current_team_member|boolean|false|none|If this player is on the current roster|
