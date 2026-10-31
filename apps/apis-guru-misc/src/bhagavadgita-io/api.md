<h1 id="bhagavad-gita-api">Bhagavad Gita API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="bhagavad-gita-api-chapter">chapter</h1>

## Get all the 18 Chapters of the Bhagavad Gita.

> Code samples

```bash
curl 'https://example.com/api/v1/chapters?access_token=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/chapters`

Get a list of all the 18 Chapters of the Bhagavad Gita.<br/>

<h3 id="get-all-the-18-chapters-of-the-bhagavad-gita-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access_token|query|string|true|Your app's access token.|
|language|query|string|false|Language to query. Leave blank for english.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|hi|

> Example responses

> 200 Response

```json
"{\n  \"chapters\": [\n    {\n      \"chapter_number\": 1, \n      \"name\": \"u'अर्जुनविषादयोग'\", \n      \"name_english\": \"u'Arjuna Dilemma'\", \n      \"name_transliterated\": \"u'Arjun Viṣhād Yog'\", \n      \"name_transliterated_simple\": \"u'Arjuna Visada Yoga'\", \n      \"verses_count\": 47\n    }, \n    {\n      \"chapter_number\": 2, \n      \"name\": \"u'सांख्ययोग'\", \n      \"name_english\": \"u'Transcendental Knowledge'\", \n      \"name_transliterated\": \"u'Sānkhya Yog'\", \n      \"name_transliterated_simple\": \"u'Sankhya Yoga'\", \n      \"verses_count\": 72\n    }\n  ]\n}"
```

<h3 id="get-all-the-18-chapters-of-the-bhagavad-gita-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success: Everything worked as expected.|[ChapterSchema](#schemachapterschema)|
|400|Bad Request|Bad Request: The request was unacceptable due to wrong parameter(s).|None|
|401|Unauthorized|Unauthorized: Invalid access_token used.|None|
|402|Payment Required|Request Failed.|None|
|500|Internal Server Error|Server Error: Something went wrong on our end.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific chapter from the Bhagavad Gita.

> Code samples

```bash
curl 'https://example.com/api/v1/chapters/1?access_token=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/chapters/{chapter_number}`

Get information about a specific chapter from the Bhagavad Gita.<br/>

<h3 id="get-a-specific-chapter-from-the-bhagavad-gita-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access_token|query|string|true|Your app's access token.|
|chapter_number|path|integer|true|Which Chapter Number to filter?|
|language|query|string|false|Language to query. Leave blank for english.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chapter_number|1|
|chapter_number|2|
|chapter_number|3|
|language|hi|

> Example responses

> 200 Response

```json
"{\n  \"chapter_number\": 1, \n  \"name\": \"u'अर्जुनविषादयोग'\", \n  \"name_english\": \"u'Arjuna Dilemma'\", \n  \"name_transliterated\": \"u'Arjun Viṣhād Yog'\", \n  \"name_transliterated_simple\": \"u'Arjuna Visada Yoga'\", \n  \"verses_count\": 47\n}"
```

<h3 id="get-a-specific-chapter-from-the-bhagavad-gita-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success: Everything worked as expected.|[ChapterSchema](#schemachapterschema)|
|400|Bad Request|Bad Request: The request was unacceptable due to wrong parameter(s).|None|
|401|Unauthorized|Unauthorized: Invalid access_token used.|None|
|402|Payment Required|Request Failed.|None|
|404|Not Found|Not Found: The chapter number you are looking for could not be found.|None|
|500|Internal Server Error|Server Error: Something went wrong on our end.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bhagavad-gita-api-verse">verse</h1>

## Get all the Verses from a Chapter.

> Code samples

```bash
curl 'https://example.com/api/v1/chapters/1/verses?access_token=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/chapters/{chapter_number}/verses`

Get a list of all Verses from a particular Chapter.<br/>

<h3 id="get-all-the-verses-from-a-chapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access_token|query|string|true|Your app's access token.|
|chapter_number|path|integer|true|Which Chapter Number to filter?|
|language|query|string|false|Language to query. Leave blank for english.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chapter_number|1|
|chapter_number|2|
|chapter_number|3|
|language|hi|

> Example responses

> 200 Response

```json
"{\n  \"verses\": [\n    {\n      \"chapter_number\": 1,\n      \"meaning\": \"Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?\",\n      \"text\": \"धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |||1||\",\n      \"transliteration\": \"dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya\",\n      \"verse_number\": 1,\n      \"word_meanings\": \"dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay\"\n    },\n    {\n      \"chapter_number\": 1,\n      \"meaning\": \"Sanjay said: On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words.\",\n      \"text\": \"सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् | ||2||\",\n      \"transliteration\": \"sañjaya uvācha dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā āchāryamupasaṅgamya rājā vachanamabravīt\",\n      \"verse_number\": 2,\n      \"word_meanings\": \"sanjayaḥ uvācha—Sanjay said; dṛiṣhṭvā—on observing; tu—but; pāṇḍava-anīkam—the Pandava army; vyūḍham—standing in a military formation; duryodhanaḥ—King Duryodhan; tadā—then; āchāryam—teacher; upasaṅgamya—approached; rājā—the king; vachanam—words; abravīt—spoke\"\n    }\n  ]\n}"
```

<h3 id="get-all-the-verses-from-a-chapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success: Everything worked as expected.|[VerseSchema](#schemaverseschema)|
|400|Bad Request|Bad Request: The request was unacceptable due to wrong parameter(s).|None|
|401|Unauthorized|Unauthorized: Invalid access_token used.|None|
|402|Payment Required|Request Failed.|None|
|404|Not Found|Not Found: The chapter number you are looking for could not be found.|None|
|500|Internal Server Error|Server Error: Something went wrong on our end.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a particular verse from a chapter.

> Code samples

```bash
curl 'https://example.com/api/v1/chapters/1/verses/1?access_token=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/chapters/{chapter_number}/verses/{verse_number}`

Get a specific verse from a specific chapter.<br/>

<h3 id="get-a-particular-verse-from-a-chapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access_token|query|string|true|Your app's access token.|
|chapter_number|path|integer|true|Which Chapter Number to filter?|
|verse_number|path|string|true|Which Verse Number to filter?|
|language|query|string|false|Language to query. Leave blank for english.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chapter_number|1|
|chapter_number|2|
|chapter_number|3|
|verse_number|1|
|verse_number|2|
|verse_number|3|
|language|hi|

> Example responses

> 200 Response

```json
"{\n  \"chapter_number\": 1,\n  \"meaning\": \"Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?\",\n  \"text\": \"धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |||1||\",\n  \"transliteration\": \"dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya\",\n  \"verse_number\": 1,\n  \"word_meanings\": \"dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay\"\n}"
```

<h3 id="get-a-particular-verse-from-a-chapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success: Everything worked as expected.|[VerseSchema](#schemaverseschema)|
|400|Bad Request|Bad Request: The request was unacceptable due to wrong parameter(s).|None|
|401|Unauthorized|Unauthorized: Invalid access_token used.|None|
|402|Payment Required|Request Failed.|None|
|404|Not Found|Not Found: The chapter/verse number you are looking for could not be found.|None|
|500|Internal Server Error|Server Error: Something went wrong on our end.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all the Verses.

> Code samples

```bash
curl 'https://example.com/api/v1/verses?access_token=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/verses`

Get a list of all Verses.<br/>

<h3 id="get-all-the-verses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access_token|query|string|true|Your app's access token.|
|language|query|string|false|Language to query. Leave blank for english.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|hi|

> Example responses

> 200 Response

```json
"{\n  \"verses\": [\n    {\n      \"chapter_number\": 1,\n      \"meaning\": \"Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?\",\n      \"text\": \"धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |||1||\",\n      \"transliteration\": \"dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya\",\n      \"verse_number\": 1,\n      \"word_meanings\": \"dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay\"\n    },\n    {\n      \"chapter_number\": 1,\n      \"meaning\": \"Sanjay said: On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words.\",\n      \"text\": \"सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् | ||2||\",\n      \"transliteration\": \"sañjaya uvācha dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā āchāryamupasaṅgamya rājā vachanamabravīt\",\n      \"verse_number\": 2,\n      \"word_meanings\": \"sanjayaḥ uvācha—Sanjay said; dṛiṣhṭvā—on observing; tu—but; pāṇḍava-anīkam—the Pandava army; vyūḍham—standing in a military formation; duryodhanaḥ—King Duryodhan; tadā—then; āchāryam—teacher; upasaṅgamya—approached; rājā—the king; vachanam—words; abravīt—spoke\"\n    }\n  ]\n}"
```

<h3 id="get-all-the-verses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success: Everything worked as expected.|[VerseSchema](#schemaverseschema)|
|400|Bad Request|Bad Request: The request was unacceptable due to wrong parameter(s).|None|
|401|Unauthorized|Unauthorized: Inavlid access_token used.|None|
|402|Payment Required|Request Failed.|None|
|500|Internal Server Error|Server Error: Something went wrong on our end.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bhagavad-gita-api-auth">auth</h1>

## Send client credentials and get an access token.

> Code samples

```bash
curl https://example.com/auth/oauth/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'client_id=string&client_secret=string&grant_type=client_credentials&scope=verse%20chapter'
```

`POST /auth/oauth/token`

> Body parameter

```yaml
client_id: string
client_secret: string
grant_type: client_credentials
scope: verse chapter
```

<h3 id="send-client-credentials-and-get-an-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» client_id|body|string|true|Your app's client_id. Get from API dashboard.|
|» client_secret|body|string|true|Your app's client_secret. Get from API dashboard.|
|» grant_type|body|string|true|Grant Type.|
|» scope|body|string|true|The resources that you would like to access.|

> Example responses

> 200 Response

```json
"{\n  access_token: \"cN31b7gClnImuQg8OeMGsUWYGsA0we\"\n  token_type: \"Bearer\"\n  scope: \"email\"\n}"
```

<h3 id="send-client-credentials-and-get-an-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success: Everything worked as expected.|None|
|400|Bad Request|Bad Request: The request was unacceptable due to wrong parameter(s).|None|
|401|Unauthorized|Unauthorized: Invalid access_token used.|None|
|402|Payment Required|Request Failed.|None|
|500|Internal Server Error|Server Error: Something went wrong on our end.|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ChapterSchema">ChapterSchema</h2>
<!-- backwards compatibility -->
<a id="schemachapterschema"></a>
<a id="schema_ChapterSchema"></a>
<a id="tocSchapterschema"></a>
<a id="tocschapterschema"></a>

```json
{
  "chapter_number": 0,
  "chapter_summary": "string",
  "name": "string",
  "name_meaning": "string",
  "name_translation": "string",
  "name_transliterated": "string",
  "verses_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chapter_number|integer(int32) \| null|false|none|none|
|chapter_summary|string \| null|false|none|none|
|name|string \| null|false|none|none|
|name_meaning|string \| null|false|none|none|
|name_translation|string \| null|false|none|none|
|name_transliterated|string \| null|false|none|none|
|verses_count|integer(int32) \| null|false|none|none|

<h2 id="tocS_VerseSchema">VerseSchema</h2>
<!-- backwards compatibility -->
<a id="schemaverseschema"></a>
<a id="schema_VerseSchema"></a>
<a id="tocSverseschema"></a>
<a id="tocsverseschema"></a>

```json
{
  "meaning": "string",
  "text": "string",
  "transliteration": "string",
  "verse_number": "string",
  "word_meanings": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meaning|string \| null|false|none|none|
|text|string \| null|false|none|none|
|transliteration|string \| null|false|none|none|
|verse_number|string \| null|false|none|none|
|word_meanings|string \| null|false|none|none|
