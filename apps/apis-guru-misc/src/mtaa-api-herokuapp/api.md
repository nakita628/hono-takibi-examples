<h1 id="mtaa-api-documentation">Mtaa API Documentation v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Mtaa A simple REST API to access Tanzania's location information,With mtaa API you can easily query and integrate all the location in tanzania from region level to streets from your programming language of your your choice

Base URLs:

* <a href="https://mtaa-api.herokuapp.com/api">https://mtaa-api.herokuapp.com/api</a> - Production Server

Email: <a href="mailto:isaackeinstein@gmail.com">Mtaa API</a> 
Web: <a href="https://github.com/HackEAC/mtaaAPI">Mtaa API</a> 
License: <a href="https://github.com/HackEAC/mtaaAPI/blob/main/LICENSE">MIT License</a>

<h1 id="mtaa-api-documentation-tanzania-regions">Tanzania regions</h1>

## Returns all regions present in Tanzania

<a id="opIdTanzania-regions"></a>

> Code samples

```bash
curl https://example.com/string
```

`GET /{country}`

Fetches all regions present in Tanzania and then return a response as json

<h3 id="returns-all-regions-present-in-tanzania-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string|true|Country name in lowercase eg (Tanzania)|

<h3 id="returns-all-regions-present-in-tanzania-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mtaa-api-documentation-districts-in-region">Districts in region</h1>

## Returns all districts in region

<a id="opIdDistricts-in-a-region"></a>

> Code samples

```bash
curl https://example.com/string/string
```

`GET /{country}/{region}`

Returns a post code and all districts in a specified region

<h3 id="returns-all-districts-in-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string|true|Country name in lowercase eg( tanzania)|
|region|path|string|true|Name of the region eg (Mbeya)|

<h3 id="returns-all-districts-in-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|
|404|Not Found|Resource not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mtaa-api-documentation-wards-in-a-district">Wards in a district</h1>

## Returns all wards in a district

<a id="opIdWards-in-a-district"></a>

> Code samples

```bash
curl https://example.com/string/string/string
```

`GET /{country}/{region}/{district}`

Returns all wards in a  specified district and district postcode

<h3 id="returns-all-wards-in-a-district-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string|true|Country name in lowercase eg( tanzania)|
|region|path|string|true|Name of the region eg (Mbeya)|
|district|path|string|true|Name of the District eg (Rungwe)|

<h3 id="returns-all-wards-in-a-district-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|
|404|Not Found|Resource not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mtaa-api-documentation-streets-in-a-ward">Streets in a ward</h1>

## Returns all streets in a ward

<a id="opIdstreets-in-a-ward"></a>

> Code samples

```bash
curl https://example.com/string/string/string/string
```

`GET /{country}/{region}/{district}/{ward}`

Returns all streets in a specified ward and ward postcode

<h3 id="returns-all-streets-in-a-ward-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string|true|Country name in lowercase eg( tanzania)|
|region|path|string|true|Name of the region eg (Mbeya)|
|district|path|string|true|Name of the District eg (Rungwe)|
|ward|path|string|true|Name of the Ward eg (Kiwira)|

<h3 id="returns-all-streets-in-a-ward-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|
|404|Not Found|Resource not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mtaa-api-documentation-neighborhood-in-a-street">neighborhood in a street</h1>

## Returns all neighborhood in a street

<a id="opIdneighborhood-in-a-street-"></a>

> Code samples

```bash
curl https://example.com/string/string/string/string/string
```

`GET /{country}/{region}/{district}/{ward}/{street}`

Returns all neighborhood in a specified street

<h3 id="returns-all-neighborhood-in-a-street-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string|true|Country name in lowercase eg( tanzania)|
|region|path|string|true|Name of the region eg (Mbeya)|
|district|path|string|true|Name of the District eg (Rungwe)|
|ward|path|string|true|Name of the Ward eg (Kiwira)|
|street|path|string|true|Name of the Street eg (Ilundo)|

<h3 id="returns-all-neighborhood-in-a-street-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|
|404|Not Found|Resource not Found|None|

<aside class="success">
This operation does not require authentication
</aside>
