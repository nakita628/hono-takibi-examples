<h1 id="pirates-api">Pirates API v1.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Ahoy matey! We help the landlubbers to get to know about the seamen way! You can generate pirate names, get some real pirate insults and pirate filler text. Oh you can translate to pirate lingo as well. [Click here to subscribe](http://fungenerators.com/api/pirate/)

Base URLs:

* <a href="http://api.fungenerators.com">http://api.fungenerators.com</a>

* <a href="https://api.fungenerators.com">https://api.fungenerators.com</a>

<a href="https://fungenerators.com/terms">Terms of service</a>
Web: <a href="http://fungenerators.com/api/pirate/">Fun Generators</a> 

# Authentication

* API Key (X-Fungenerators-Api-Secret)
    - Parameter Name: **X-Fungenerators-Api-Secret**, in: header.

<h1 id="pirates-api-generation">Generation</h1>

Generate names, insults, lorem ipsum etc

<a href="http://fungenerators.com/api/pirate/">Find out more</a>

## get/pirate/generate/insult

> Code samples

```bash
curl https://example.com/pirate/generate/insult \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /pirate/generate/insult`

Generate random pirate insults.

<h3 id="getpirategenerateinsult-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(integer)|false|No of insults to generate|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 5,\n    \"limit\": 5\n  },\n  \"contents\": {\n    \"taunts\": [\n      \"It's all great fun 'til somebody loses an eye! ye swashbucklin' deck-swabbing Orlop!\",\n      \"Go pose in front o' the mirror some more plait bearded dung munchin Duffle!\",\n      \"Kill my parrot will ye? I'm gonna knot yer legs together ye  loot-stealing narwhal-smelling bat-spit!\",\n      \"Welcome to PAIN TIME with a Pirate! Starring YOU! ye squiffy deck-swabbing bilge rat!\",\n      \"Blow it out yer bilge! ye rat-eating grog-drinking Jolly Roger!\"\n    ]\n  },\n  \"copyright\": \"https://fungenerators.com/\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getpirategenerateinsult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/pirate/generate/lorem-ipsum

> Code samples

```bash
curl https://example.com/pirate/generate/lorem-ipsum \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /pirate/generate/lorem-ipsum`

Generate pirate lorem ipsum.

<h3 id="getpirategeneratelorem-ipsum-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string(string)|false|Type of element to generate `paragraphs/sentences/words`.|
|limit|query|integer(integer)|false|No of elements to generate|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 4,\n    \"limit\": 4\n  },\n  \"contents\": {\n    \"lorem-ipsum\": \"[\\\"Wanna shiver me timbers? \\\\u201cI\\\\u2019ve got a jar of dirt! I\\\\u2019ve got a jar of dirt, and guess what\\\\u2019s inside it?\\\\u201d \\\\u201cWhy is the rum always gone?\\\\u201d \\\\u201cYes, I do heartily repent. I repent I had not done more mischief; and that we did not cut the throats of them that took us, and I am extremely sorry that you aren\\\\u2019t hanged as well as we. \\\\u201d It is when pirates count their booty that they become mere thieves. Arrrrrrrr Piracy \\\\u2013 Hostile take over.\\\",\\\"Avast, me proud beauty! Wanna know why my Roger is so Jolly?  Ya know, darlin\\\\u2019, I\\\\u2019m 97 percent chum free Wanna shiver me timbers? Give me freedom or give me the rope. For I shall not take the shackles that subjugate the poor to uphold the rich. \\\\u201cYes, I do heartily repent. I repent I had not done more mischief; and that we did not cut the throats of them that took us, and I am extremely sorry that you aren\\\\u2019t hanged as well as we. \\\\u201d But I am touched by y\\\\u2019loyalty mate. Piracy \\\\u2013 Hostile take over.\\\",\\\"How\\\\u2019d you like to scrape the barnacles off of me rudder? That\\\\u2019s the finest pirate booty I\\\\u2019ve ever laid eyes on. C\\\\u2019mon, lad, shiver me timbers! To err is human but to arr is pirate!!\\\",\\\"Yes, that is a hornpipe in my pocket and I am happy to see you. Aye, I guarantee ye, I\\\\u2019ve had a twenty percent decrease in me \\\\u201clice ratio!\\\\u201d Why is the rum gone? Drink up me hearties yoho \\\\u2026a pirates life for me Where there is a sea there are pirates. \\\\u201cYes, I do heartily repent. I repent I had not done more mischief; and that we did not cut the throats of them that took us, and I am extremely sorry that you aren\\\\u2019t hanged as well as we. \\\\u201d\\\"]\"\n  },\n  \"copyright\": \"https://fungenerators.com/\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getpirategeneratelorem-ipsum-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/pirate/generate/name

> Code samples

```bash
curl https://example.com/pirate/generate/name \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /pirate/generate/name`

Generate random pirate names.

<h3 id="getpirategeneratename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variation|query|string(string)|false|Variation to generate `male/female`.|
|limit|query|integer(integer)|false|No of names to generate|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 5,\n    \"start\": 0,\n    \"limit\": 5\n  },\n  \"contents\": {\n    \"variation\": \"male\",\n    \"names\": [\n      \"Mabry 'Devil's Smile' Hades\",\n      \"Rae 'The Wrath' Rakshasas\",\n      \"Thorndike 'Merry' Tyndall\",\n      \"Crofton 'The Lion' Dante\",\n      \"Southwell 'Squealer' Sweete\"\n    ]\n  },\n  \"copyright\": \"https://fungenerators.com/\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getpirategeneratename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

<h1 id="pirates-api-translation">Translation</h1>

Translate to pirate lingo

<a href="http://fungenerators.com/api/pirate/">Find out more</a>

## get/pirate/translate

> Code samples

```bash
curl 'https://example.com/pirate/translate?text=string' \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /pirate/translate`

Translate from English to pirate.

<h3 id="getpiratetranslate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string(string)|true|Text to translate to pirate lingo.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"translated\": \"Ahoy matey!  Splice the mainbrace! me dear ol' mum, bless her black soul goes with me t' th' briny deep.\",\n    \"text\": \"Hello sir! my mother goes with me to the ocean.\"\n  },\n  \"copyright\": \"https://fungenerators.com/\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}       "
```

<h3 id="getpiratetranslate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>
