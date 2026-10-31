<h1 id="balldontlie">balldontlie v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://balldontlie.io">https://balldontlie.io</a>

<h1 id="balldontlie-players">players</h1>

## all players (search)

<a id="opIdallPlayersSearch"></a>

> Code samples

```bash
curl https://example.com/api/v1/players
```

`GET /api/v1/players`

all players (search)

<h3 id="all-players-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|

<h3 id="all-players-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## specific player

<a id="opIdspecificPlayer"></a>

> Code samples

```bash
curl https://example.com/api/v1/players/237
```

`GET /api/v1/players/237`

specific player

<h3 id="specific-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="balldontlie-teams">teams</h1>

## all teams

<a id="opIdallTeams"></a>

> Code samples

```bash
curl https://example.com/api/v1/teams
```

`GET /api/v1/teams`

all teams

<h3 id="all-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## specific team

<a id="opIdspecificTeam"></a>

> Code samples

```bash
curl https://example.com/api/v1/teams/1
```

`GET /api/v1/teams/1`

specific team

<h3 id="specific-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="balldontlie-games">games</h1>

## all games (example parameters)

<a id="opIdallGamesExampleParameters"></a>

> Code samples

```bash
curl https://example.com/api/v1/games
```

`GET /api/v1/games`

all games (example parameters)

<h3 id="all-games-example-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seasons[]|query|string|false|none|
|team_ids[]|query|string|false|none|

<h3 id="all-games-example-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## specific game

<a id="opIdspecificGame"></a>

> Code samples

```bash
curl https://example.com/api/v1/games/32881
```

`GET /api/v1/games/32881`

specific game

<h3 id="specific-game-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="balldontlie-stats">stats</h1>

## all stats (example parameters)

<a id="opIdallStatsExampleParameters"></a>

> Code samples

```bash
curl https://example.com/api/v1/stats
```

`GET /api/v1/stats`

all stats (example parameters)

<h3 id="all-stats-example-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|season[]|query|string|false|none|
|player_ids[]|query|string|false|none|

<h3 id="all-stats-example-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
