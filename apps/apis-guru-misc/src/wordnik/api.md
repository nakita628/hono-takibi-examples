<h1 id="wordnik">Wordnik v4.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Wordnik is the worlds biggest online English dictionary, by number of words

Base URLs:

* <a href="https://api.wordnik.com/v4">https://api.wordnik.com/v4</a>

<a href="http://developer.wordnik.com/">External documentation</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **api_key**, in: query.

<h1 id="wordnik-word">word</h1>

## Fetches audio metadata for a word.

<a id="opIdgetAudio"></a>

> Code samples

```bash
curl https://example.com/word.json/string/audio
```

`GET /word.json/{word}/audio`

The metadata includes a time-expiring fileUrl which allows reading the audio file directly from the API.  Currently only audio pronunciations from the American Heritage Dictionary in mp3 format are supported.

<h3 id="fetches-audio-metadata-for-a-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to get audio for.|
|useCanonical|query|string|false|If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.|
|limit|query|integer(int32)|false|Maximum number of results to return|

#### Enumerated Values

|Parameter|Value|
|---|---|
|useCanonical|false|
|useCanonical|true|

<h3 id="fetches-audio-metadata-for-a-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|Inline|

<h3 id="fetches-audio-metadata-for-a-word-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AudioFile](#schemaaudiofile)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return definitions for a word

<a id="opIdgetDefinitions"></a>

> Code samples

```bash
curl https://example.com/word.json/string/definitions
```

`GET /word.json/{word}/definitions`

<h3 id="return-definitions-for-a-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to return definitions for|
|limit|query|integer(int32)|false|Maximum number of results to return|
|partOfSpeech|query|string|false|CSV list of part-of-speech types|
|includeRelated|query|string|false|Return related words with definitions|
|sourceDictionaries|query|[string]|false|Source dictionary to return definitions from.  If 'all' is received, results are returned from all sources. If multiple values are received (e.g. 'century,wiktionary'), results are returned from the first specified dictionary that has definitions. If left blank, results are returned from the first dictionary that has definitions. By default, dictionaries are searched in this order: ahd-5, wiktionary, webster, century, wordnet|
|useCanonical|query|string|false|If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.|
|includeTags|query|string|false|Return a closed set of XML tags in response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|partOfSpeech|noun|
|partOfSpeech|adjective|
|partOfSpeech|verb|
|partOfSpeech|adverb|
|partOfSpeech|interjection|
|partOfSpeech|pronoun|
|partOfSpeech|preposition|
|partOfSpeech|abbreviation|
|partOfSpeech|affix|
|partOfSpeech|article|
|partOfSpeech|auxiliary-verb|
|partOfSpeech|conjunction|
|partOfSpeech|definite-article|
|partOfSpeech|family-name|
|partOfSpeech|given-name|
|partOfSpeech|idiom|
|partOfSpeech|imperative|
|partOfSpeech|noun-plural|
|partOfSpeech|noun-posessive|
|partOfSpeech|past-participle|
|partOfSpeech|phrasal-prefix|
|partOfSpeech|proper-noun|
|partOfSpeech|proper-noun-plural|
|partOfSpeech|proper-noun-posessive|
|partOfSpeech|suffix|
|partOfSpeech|verb-intransitive|
|partOfSpeech|verb-transitive|
|sourceDictionaries|all|
|sourceDictionaries|ahd-5|
|sourceDictionaries|century|
|sourceDictionaries|wiktionary|
|sourceDictionaries|webster|
|sourceDictionaries|wordnet|
|useCanonical|false|
|useCanonical|true|
|includeTags|false|
|includeTags|true|

<h3 id="return-definitions-for-a-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|Inline|

<h3 id="return-definitions-for-a-word-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Definition](#schemadefinition)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Fetches etymology data

<a id="opIdgetEtymologies"></a>

> Code samples

```bash
curl https://example.com/word.json/string/etymologies
```

`GET /word.json/{word}/etymologies`

<h3 id="fetches-etymology-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to return|
|useCanonical|query|string|false|If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|useCanonical|false|
|useCanonical|true|

<h3 id="fetches-etymology-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|Inline|

<h3 id="fetches-etymology-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns examples for a word

<a id="opIdgetExamples"></a>

> Code samples

```bash
curl https://example.com/word.json/string/examples
```

`GET /word.json/{word}/examples`

<h3 id="returns-examples-for-a-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to return examples for|
|includeDuplicates|query|string|false|Show duplicate examples from different sources|
|useCanonical|query|string|false|If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.|
|skip|query|integer(int32)|false|Results to skip|
|limit|query|integer(int32)|false|Maximum number of results to return|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeDuplicates|false|
|includeDuplicates|true|
|useCanonical|false|
|useCanonical|true|

<h3 id="returns-examples-for-a-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|[ExampleSearchResults](#schemaexamplesearchresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns word usage over time

<a id="opIdgetWordFrequency"></a>

> Code samples

```bash
curl https://example.com/word.json/string/frequency
```

`GET /word.json/{word}/frequency`

<h3 id="returns-word-usage-over-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to return|
|useCanonical|query|string|false|If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.|
|startYear|query|integer(int32)|false|Starting Year|
|endYear|query|integer(int32)|false|Ending Year|

#### Enumerated Values

|Parameter|Value|
|---|---|
|useCanonical|false|
|useCanonical|true|

<h3 id="returns-word-usage-over-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|[FrequencySummary](#schemafrequencysummary)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns syllable information for a word

<a id="opIdgetHyphenation"></a>

> Code samples

```bash
curl https://example.com/word.json/string/hyphenation
```

`GET /word.json/{word}/hyphenation`

<h3 id="returns-syllable-information-for-a-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to get syllables for|
|useCanonical|query|string|false|If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.|
|sourceDictionary|query|string|false|Get from a single dictionary. Valid options: ahd-5, century, wiktionary, webster, and wordnet.|
|limit|query|integer(int32)|false|Maximum number of results to return|

#### Enumerated Values

|Parameter|Value|
|---|---|
|useCanonical|false|
|useCanonical|true|
|sourceDictionary|ahd-5|
|sourceDictionary|century|
|sourceDictionary|wiktionary|
|sourceDictionary|webster|
|sourceDictionary|wordnet|

<h3 id="returns-syllable-information-for-a-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|Inline|

<h3 id="returns-syllable-information-for-a-word-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Syllable](#schemasyllable)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Fetches bi-gram phrases for a word

<a id="opIdgetPhrases"></a>

> Code samples

```bash
curl https://example.com/word.json/string/phrases
```

`GET /word.json/{word}/phrases`

<h3 id="fetches-bi-gram-phrases-for-a-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to fetch phrases for|
|limit|query|integer(int32)|false|Maximum number of results to return|
|wlmi|query|integer(int32)|false|Minimum WLMI for the phrase|
|useCanonical|query|string|false|If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|useCanonical|false|
|useCanonical|true|

<h3 id="fetches-bi-gram-phrases-for-a-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|Inline|

<h3 id="fetches-bi-gram-phrases-for-a-word-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Bigram](#schemabigram)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns text pronunciations for a given word

<a id="opIdgetTextPronunciations"></a>

> Code samples

```bash
curl https://example.com/word.json/string/pronunciations
```

`GET /word.json/{word}/pronunciations`

<h3 id="returns-text-pronunciations-for-a-given-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to get pronunciations for|
|useCanonical|query|string|false|If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.|
|sourceDictionary|query|string|false|Get from a single dictionary|
|typeFormat|query|string|false|Text pronunciation type|
|limit|query|integer(int32)|false|Maximum number of results to return|

#### Enumerated Values

|Parameter|Value|
|---|---|
|useCanonical|false|
|useCanonical|true|
|sourceDictionary|ahd-5|
|sourceDictionary|century|
|sourceDictionary|cmu|
|sourceDictionary|macmillan|
|sourceDictionary|wiktionary|
|sourceDictionary|webster|
|sourceDictionary|wordnet|
|typeFormat|ahd-5|
|typeFormat|arpabet|
|typeFormat|gcide-diacritical|
|typeFormat|IPA|

<h3 id="returns-text-pronunciations-for-a-given-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|Inline|

<h3 id="returns-text-pronunciations-for-a-given-word-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TextPron](#schematextpron)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Given a word as a string, returns relationships from the Word Graph

<a id="opIdgetRelatedWords"></a>

> Code samples

```bash
curl https://example.com/word.json/string/relatedWords
```

`GET /word.json/{word}/relatedWords`

<h3 id="given-a-word-as-a-string-returns-relationships-from-the-word-graph-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to fetch relationships for|
|useCanonical|query|string|false|If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.|
|relationshipTypes|query|string|false|Limits the total results per type of relationship type|
|limitPerRelationshipType|query|integer(int32)|false|Restrict to the supplied relationship types|

#### Enumerated Values

|Parameter|Value|
|---|---|
|useCanonical|false|
|useCanonical|true|
|relationshipTypes|synonym|
|relationshipTypes|antonym|
|relationshipTypes|variant|
|relationshipTypes|equivalent|
|relationshipTypes|cross-reference|
|relationshipTypes|related-word|
|relationshipTypes|rhyme|
|relationshipTypes|form|
|relationshipTypes|etymologically-related-term|
|relationshipTypes|hypernym|
|relationshipTypes|hyponym|
|relationshipTypes|inflected-form|
|relationshipTypes|primary|
|relationshipTypes|same-context|
|relationshipTypes|verb-form|
|relationshipTypes|verb-stem|
|relationshipTypes|has_topic|

<h3 id="given-a-word-as-a-string-returns-relationships-from-the-word-graph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|Inline|

<h3 id="given-a-word-as-a-string-returns-relationships-from-the-word-graph-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Related](#schemarelated)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the Scrabble score for a word

<a id="opIdgetScrabbleScore"></a>

> Code samples

```bash
curl https://example.com/word.json/string/scrabbleScore
```

`GET /word.json/{word}/scrabbleScore`

<h3 id="returns-the-scrabble-score-for-a-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to get scrabble score for.|

<h3 id="returns-the-scrabble-score-for-a-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a top example for a word

<a id="opIdgetTopExample"></a>

> Code samples

```bash
curl https://example.com/word.json/string/topExample
```

`GET /word.json/{word}/topExample`

<h3 id="returns-a-top-example-for-a-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word|path|string|true|Word to fetch examples for|
|useCanonical|query|string|false|If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|useCanonical|false|
|useCanonical|true|

<h3 id="returns-a-top-example-for-a-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|[Example](#schemaexample)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wordnik-words">words</h1>

## Returns a single random WordObject

<a id="opIdgetRandomWord"></a>

> Code samples

```bash
curl https://example.com/words.json/randomWord
```

`GET /words.json/randomWord`

<h3 id="returns-a-single-random-wordobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hasDictionaryDef|query|string|false|Only return words with dictionary definitions|
|includePartOfSpeech|query|string|false|CSV part-of-speech values to include (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)|
|excludePartOfSpeech|query|string|false|CSV part-of-speech values to exclude (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)|
|minCorpusCount|query|integer(int32)|false|Minimum corpus frequency for terms|
|maxCorpusCount|query|integer(int32)|false|Maximum corpus frequency for terms|
|minDictionaryCount|query|integer(int32)|false|Minimum dictionary count|
|maxDictionaryCount|query|integer(int32)|false|Maximum dictionary count|
|minLength|query|integer(int32)|false|Minimum word length|
|maxLength|query|integer(int32)|false|Maximum word length|

<h3 id="returns-a-single-random-wordobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|[WordObject](#schemawordobject)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns an array of random WordObjects

<a id="opIdgetRandomWords"></a>

> Code samples

```bash
curl https://example.com/words.json/randomWords
```

`GET /words.json/randomWords`

<h3 id="returns-an-array-of-random-wordobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hasDictionaryDef|query|string|false|Only return words with dictionary definitions|
|includePartOfSpeech|query|string|false|CSV part-of-speech values to include (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)|
|excludePartOfSpeech|query|string|false|CSV part-of-speech values to exclude (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)|
|minCorpusCount|query|integer(int32)|false|Minimum corpus frequency for terms|
|maxCorpusCount|query|integer(int32)|false|Maximum corpus frequency for terms|
|minDictionaryCount|query|integer(int32)|false|Minimum dictionary count|
|maxDictionaryCount|query|integer(int32)|false|Maximum dictionary count|
|minLength|query|integer(int32)|false|Minimum word length|
|maxLength|query|integer(int32)|false|Maximum word length|
|sortBy|query|string|false|Attribute to sort by|
|sortOrder|query|string|false|Sort direction|
|limit|query|integer(int32)|false|Maximum number of results to return|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|alpha|
|sortBy|count|
|sortOrder|asc|
|sortOrder|desc|

<h3 id="returns-an-array-of-random-wordobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|Inline|

<h3 id="returns-an-array-of-random-wordobjects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WordObject](#schemawordobject)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Reverse dictionary search

<a id="opIdreverseDictionary"></a>

> Code samples

```bash
curl 'https://example.com/words.json/reverseDictionary?query=string'
```

`GET /words.json/reverseDictionary`

<h3 id="reverse-dictionary-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Search term|
|findSenseForWord|query|string|false|Restricts words and finds closest sense|
|includeSourceDictionaries|query|string|false|Only include these comma-delimited source dictionaries|
|excludeSourceDictionaries|query|string|false|Exclude these comma-delimited source dictionaries|
|includePartOfSpeech|query|string|false|Only include these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)|
|excludePartOfSpeech|query|string|false|Exclude these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)|
|minCorpusCount|query|integer(int32)|false|Minimum corpus frequency for terms|
|maxCorpusCount|query|integer(int32)|false|Maximum corpus frequency for terms|
|minLength|query|integer(int32)|false|Minimum word length|
|maxLength|query|integer(int32)|false|Maximum word length|
|expandTerms|query|string|false|Expand terms|
|includeTags|query|string|false|Return a closed set of XML tags in response|
|sortBy|query|string|false|Attribute to sort by|
|sortOrder|query|string|false|Sort direction|
|skip|query|string|false|Results to skip|
|limit|query|integer(int32)|false|Maximum number of results to return|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeSourceDictionaries|ahd-5|
|includeSourceDictionaries|century|
|includeSourceDictionaries|cmu|
|includeSourceDictionaries|macmillan|
|includeSourceDictionaries|wiktionary|
|includeSourceDictionaries|webster|
|includeSourceDictionaries|wordnet|
|excludeSourceDictionaries|ahd-5|
|excludeSourceDictionaries|century|
|excludeSourceDictionaries|cmu|
|excludeSourceDictionaries|macmillan|
|excludeSourceDictionaries|wiktionary|
|excludeSourceDictionaries|webster|
|excludeSourceDictionaries|wordnet|
|includeTags|false|
|includeTags|true|
|sortBy|alpha|
|sortBy|count|
|sortOrder|asc|
|sortOrder|desc|

<h3 id="reverse-dictionary-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|[DefinitionSearchResults](#schemadefinitionsearchresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Searches words

<a id="opIdsearchWords"></a>

> Code samples

```bash
curl https://example.com/words.json/search/string
```

`GET /words.json/search/{query}`

<h3 id="searches-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowRegex|query|string|false|Search term is a Regular Expression|
|query|path|string|true|Search query|
|caseSensitive|query|string|false|Search case sensitive|
|includePartOfSpeech|query|string|false|Only include these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)|
|excludePartOfSpeech|query|string|false|Exclude these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)|
|minCorpusCount|query|integer(int32)|false|Minimum corpus frequency for terms|
|maxCorpusCount|query|integer(int32)|false|Maximum corpus frequency for terms|
|minDictionaryCount|query|integer(int32)|false|Minimum number of dictionary entries for words returned|
|maxDictionaryCount|query|integer(int32)|false|Maximum dictionary definition count|
|minLength|query|integer(int32)|false|Minimum word length|
|maxLength|query|integer(int32)|false|Maximum word length|
|skip|query|integer(int32)|false|Results to skip|
|limit|query|integer(int32)|false|Maximum number of results to return|

<h3 id="searches-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|[WordSearchResults](#schemawordsearchresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a specific WordOfTheDay

<a id="opIdgetWordOfTheDay"></a>

> Code samples

```bash
curl https://example.com/words.json/wordOfTheDay
```

`GET /words.json/wordOfTheDay`

<h3 id="returns-a-specific-wordoftheday-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|Fetches by date in yyyy-MM-dd|

<h3 id="returns-a-specific-wordoftheday-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|[WordOfTheDay](#schemawordoftheday)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiTokenStatus">ApiTokenStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapitokenstatus"></a>
<a id="schema_ApiTokenStatus"></a>
<a id="tocSapitokenstatus"></a>
<a id="tocsapitokenstatus"></a>

```json
{
  "expiresInMillis": 0,
  "remainingCalls": 0,
  "resetsInMillis": 0,
  "token": "string",
  "totalRequests": 0,
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiresInMillis|integer(int64)|false|none|none|
|remainingCalls|integer(int64)|false|none|none|
|resetsInMillis|integer(int64)|false|none|none|
|token|string|false|none|none|
|totalRequests|integer(int64)|false|none|none|
|valid|boolean|false|none|none|

<h2 id="tocS_AudioFile">AudioFile</h2>
<!-- backwards compatibility -->
<a id="schemaaudiofile"></a>
<a id="schema_AudioFile"></a>
<a id="tocSaudiofile"></a>
<a id="tocsaudiofile"></a>

```json
{
  "attributionText": "string",
  "attributionUrl": "string",
  "audioType": "string",
  "commentCount": 0,
  "createdAt": "1970-01-01",
  "createdBy": "string",
  "description": "string",
  "duration": 0,
  "fileUrl": "string",
  "id": 0,
  "voteAverage": 0,
  "voteCount": 0,
  "voteWeightedAverage": 0,
  "word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributionText|string|false|none|none|
|attributionUrl|string|false|none|none|
|audioType|string|false|none|none|
|commentCount|integer(int32)|false|none|none|
|createdAt|string(date)|false|none|none|
|createdBy|string|false|none|none|
|description|string|false|none|none|
|duration|number(double)|false|none|none|
|fileUrl|string|false|none|none|
|id|integer(int64)|true|none|none|
|voteAverage|number(float)|false|none|none|
|voteCount|integer|false|none|none|
|voteWeightedAverage|number(float)|false|none|none|
|word|string|false|none|none|

<h2 id="tocS_AudioType">AudioType</h2>
<!-- backwards compatibility -->
<a id="schemaaudiotype"></a>
<a id="schema_AudioType"></a>
<a id="tocSaudiotype"></a>
<a id="tocsaudiotype"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_AuthenticationToken">AuthenticationToken</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationtoken"></a>
<a id="schema_AuthenticationToken"></a>
<a id="tocSauthenticationtoken"></a>
<a id="tocsauthenticationtoken"></a>

```json
{
  "token": "string",
  "userId": 0,
  "userSignature": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|
|userId|integer(int64)|false|none|none|
|userSignature|string|false|none|none|

<h2 id="tocS_Bigram">Bigram</h2>
<!-- backwards compatibility -->
<a id="schemabigram"></a>
<a id="schema_Bigram"></a>
<a id="tocSbigram"></a>
<a id="tocsbigram"></a>

```json
{
  "count": 0,
  "gram1": "string",
  "gram2": "string",
  "mi": 0,
  "wlmi": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|
|gram1|string|false|none|none|
|gram2|string|false|none|none|
|mi|number(double)|false|none|none|
|wlmi|number(double)|false|none|none|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|name|string|false|none|none|

<h2 id="tocS_Citation">Citation</h2>
<!-- backwards compatibility -->
<a id="schemacitation"></a>
<a id="schema_Citation"></a>
<a id="tocScitation"></a>
<a id="tocscitation"></a>

```json
{
  "cite": "string",
  "source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cite|string|false|none|none|
|source|string|false|none|none|

<h2 id="tocS_ContentProvider">ContentProvider</h2>
<!-- backwards compatibility -->
<a id="schemacontentprovider"></a>
<a id="schema_ContentProvider"></a>
<a id="tocScontentprovider"></a>
<a id="tocscontentprovider"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Definition">Definition</h2>
<!-- backwards compatibility -->
<a id="schemadefinition"></a>
<a id="schema_Definition"></a>
<a id="tocSdefinition"></a>
<a id="tocsdefinition"></a>

```json
{
  "attributionText": "string",
  "attributionUrl": "string",
  "citations": [
    null
  ],
  "exampleUses": [
    null
  ],
  "extendedText": "string",
  "labels": [
    null
  ],
  "notes": [
    null
  ],
  "partOfSpeech": "string",
  "relatedWords": [
    null
  ],
  "score": 0,
  "seqString": "string",
  "sequence": "string",
  "sourceDictionary": "string",
  "text": "string",
  "textProns": [
    null
  ],
  "word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributionText|string|false|none|none|
|attributionUrl|string|false|none|none|
|citations|[object]|false|none|none|
|exampleUses|[object]|false|none|none|
|extendedText|string|false|none|none|
|labels|[object]|false|none|none|
|notes|[object]|false|none|none|
|partOfSpeech|string|false|none|none|
|relatedWords|[object]|false|none|none|
|score|number(float)|false|none|none|
|seqString|string|false|none|none|
|sequence|string|false|none|none|
|sourceDictionary|string|false|none|none|
|text|string|false|none|none|
|textProns|[object]|false|none|none|
|word|string|false|none|none|

<h2 id="tocS_DefinitionSearchResults">DefinitionSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemadefinitionsearchresults"></a>
<a id="schema_DefinitionSearchResults"></a>
<a id="tocSdefinitionsearchresults"></a>
<a id="tocsdefinitionsearchresults"></a>

```json
{
  "results": [
    null
  ],
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_Example">Example</h2>
<!-- backwards compatibility -->
<a id="schemaexample"></a>
<a id="schema_Example"></a>
<a id="tocSexample"></a>
<a id="tocsexample"></a>

```json
{
  "documentId": 0,
  "exampleId": 0,
  "id": 0,
  "provider": {
    "id": 0,
    "name": "string"
  },
  "rating": 0,
  "score": {
    "baseWordScore": 0,
    "docTermCount": 0,
    "id": 0,
    "lemma": "string",
    "partOfSpeech": "string",
    "position": 0,
    "score": 0,
    "sentenceId": 0,
    "stopword": true,
    "word": "string",
    "wordType": "string"
  },
  "sentence": {
    "display": "string",
    "documentMetadataId": 0,
    "hasScoredWords": true,
    "id": 0,
    "rating": 0,
    "scoredWords": [
      null
    ]
  },
  "text": "string",
  "title": "string",
  "url": "string",
  "word": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentId|integer(int64)|false|none|none|
|exampleId|integer(int64)|false|none|none|
|id|integer(int64)|false|none|none|
|provider|[ContentProvider](#schemacontentprovider)|false|none|none|
|rating|number(float)|false|none|none|
|score|[ScoredWord](#schemascoredword)|false|none|none|
|sentence|[Sentence](#schemasentence)|false|none|none|
|text|string|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|
|word|string|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_ExampleSearchResults">ExampleSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaexamplesearchresults"></a>
<a id="schema_ExampleSearchResults"></a>
<a id="tocSexamplesearchresults"></a>
<a id="tocsexamplesearchresults"></a>

```json
{
  "examples": [
    null
  ],
  "facets": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|examples|[object]|false|none|none|
|facets|[object]|false|none|none|

<h2 id="tocS_ExampleUsage">ExampleUsage</h2>
<!-- backwards compatibility -->
<a id="schemaexampleusage"></a>
<a id="schema_ExampleUsage"></a>
<a id="tocSexampleusage"></a>
<a id="tocsexampleusage"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|

<h2 id="tocS_Facet">Facet</h2>
<!-- backwards compatibility -->
<a id="schemafacet"></a>
<a id="schema_Facet"></a>
<a id="tocSfacet"></a>
<a id="tocsfacet"></a>

```json
{
  "facetValues": [
    null
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facetValues|[object]|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_FacetValue">FacetValue</h2>
<!-- backwards compatibility -->
<a id="schemafacetvalue"></a>
<a id="schema_FacetValue"></a>
<a id="tocSfacetvalue"></a>
<a id="tocsfacetvalue"></a>

```json
{
  "count": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Frequency">Frequency</h2>
<!-- backwards compatibility -->
<a id="schemafrequency"></a>
<a id="schema_Frequency"></a>
<a id="tocSfrequency"></a>
<a id="tocsfrequency"></a>

```json
{
  "count": 0,
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|
|year|integer(int32)|false|none|none|

<h2 id="tocS_FrequencySummary">FrequencySummary</h2>
<!-- backwards compatibility -->
<a id="schemafrequencysummary"></a>
<a id="schema_FrequencySummary"></a>
<a id="tocSfrequencysummary"></a>
<a id="tocsfrequencysummary"></a>

```json
{
  "frequency": [
    null
  ],
  "frequencyString": "string",
  "totalCount": 0,
  "unknownYearCount": 0,
  "word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|[object]|false|none|none|
|frequencyString|string|false|none|none|
|totalCount|integer(int64)|false|none|none|
|unknownYearCount|integer(int32)|false|none|none|
|word|string|false|none|none|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "text": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
{
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int64)|false|none|none|

<h2 id="tocS_Note">Note</h2>
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

```json
{
  "appliesTo": [
    "string"
  ],
  "noteType": "string",
  "pos": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appliesTo|[string]|false|none|none|
|noteType|string|false|none|none|
|pos|integer(int32)|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_PartOfSpeech">PartOfSpeech</h2>
<!-- backwards compatibility -->
<a id="schemapartofspeech"></a>
<a id="schema_PartOfSpeech"></a>
<a id="tocSpartofspeech"></a>
<a id="tocspartofspeech"></a>

```json
{
  "allCategories": [
    null
  ],
  "roots": [
    null
  ],
  "storageAbbr": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allCategories|[object]|false|none|none|
|roots|[object]|false|none|none|
|storageAbbr|[string]|false|none|none|

<h2 id="tocS_Related">Related</h2>
<!-- backwards compatibility -->
<a id="schemarelated"></a>
<a id="schema_Related"></a>
<a id="tocSrelated"></a>
<a id="tocsrelated"></a>

```json
{
  "gram": "string",
  "label1": "string",
  "label2": "string",
  "label3": "string",
  "label4": "string",
  "relationshipType": "string",
  "words": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gram|string|false|none|none|
|label1|string|false|none|none|
|label2|string|false|none|none|
|label3|string|false|none|none|
|label4|string|false|none|none|
|relationshipType|string|false|none|none|
|words|[string]|false|none|none|

<h2 id="tocS_Root">Root</h2>
<!-- backwards compatibility -->
<a id="schemaroot"></a>
<a id="schema_Root"></a>
<a id="tocSroot"></a>
<a id="tocsroot"></a>

```json
{
  "categories": [
    null
  ],
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[object]|false|none|none|
|id|integer(int64)|true|none|none|
|name|string|false|none|none|

<h2 id="tocS_ScoredWord">ScoredWord</h2>
<!-- backwards compatibility -->
<a id="schemascoredword"></a>
<a id="schema_ScoredWord"></a>
<a id="tocSscoredword"></a>
<a id="tocsscoredword"></a>

```json
{
  "baseWordScore": 0,
  "docTermCount": 0,
  "id": 0,
  "lemma": "string",
  "partOfSpeech": "string",
  "position": 0,
  "score": 0,
  "sentenceId": 0,
  "stopword": true,
  "word": "string",
  "wordType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseWordScore|number(double)|false|none|none|
|docTermCount|integer(int32)|false|none|none|
|id|integer(int64)|false|none|none|
|lemma|string|false|none|none|
|partOfSpeech|string|false|none|none|
|position|integer(int32)|false|none|none|
|score|number(float)|false|none|none|
|sentenceId|integer(int64)|false|none|none|
|stopword|boolean|false|none|none|
|word|string|false|none|none|
|wordType|string|false|none|none|

<h2 id="tocS_Sentence">Sentence</h2>
<!-- backwards compatibility -->
<a id="schemasentence"></a>
<a id="schema_Sentence"></a>
<a id="tocSsentence"></a>
<a id="tocssentence"></a>

```json
{
  "display": "string",
  "documentMetadataId": 0,
  "hasScoredWords": true,
  "id": 0,
  "rating": 0,
  "scoredWords": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display|string|false|none|none|
|documentMetadataId|integer(int64)|false|none|none|
|hasScoredWords|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|rating|integer(int32)|false|none|none|
|scoredWords|[object]|false|none|none|

<h2 id="tocS_SimpleDefinition">SimpleDefinition</h2>
<!-- backwards compatibility -->
<a id="schemasimpledefinition"></a>
<a id="schema_SimpleDefinition"></a>
<a id="tocSsimpledefinition"></a>
<a id="tocssimpledefinition"></a>

```json
{
  "note": "string",
  "partOfSpeech": "string",
  "source": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|false|none|none|
|partOfSpeech|string|false|none|none|
|source|string|false|none|none|
|text|string|false|none|none|

<h2 id="tocS_SimpleExample">SimpleExample</h2>
<!-- backwards compatibility -->
<a id="schemasimpleexample"></a>
<a id="schema_SimpleExample"></a>
<a id="tocSsimpleexample"></a>
<a id="tocssimpleexample"></a>

```json
{
  "id": 0,
  "text": "string",
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|text|string|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_StringValue">StringValue</h2>
<!-- backwards compatibility -->
<a id="schemastringvalue"></a>
<a id="schema_StringValue"></a>
<a id="tocSstringvalue"></a>
<a id="tocsstringvalue"></a>

```json
{
  "word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|word|string|false|none|none|

<h2 id="tocS_Syllable">Syllable</h2>
<!-- backwards compatibility -->
<a id="schemasyllable"></a>
<a id="schema_Syllable"></a>
<a id="tocSsyllable"></a>
<a id="tocssyllable"></a>

```json
{
  "seq": 0,
  "text": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seq|integer(int32)|false|none|none|
|text|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_TextPron">TextPron</h2>
<!-- backwards compatibility -->
<a id="schematextpron"></a>
<a id="schema_TextPron"></a>
<a id="tocStextpron"></a>
<a id="tocstextpron"></a>

```json
{
  "raw": "string",
  "rawType": "string",
  "seq": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|raw|string|false|none|none|
|rawType|string|false|none|none|
|seq|integer(int32)|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "displayName": "string",
  "email": "string",
  "faceBookId": "string",
  "id": 0,
  "password": "string",
  "status": 0,
  "userName": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|none|
|email|string|false|none|none|
|faceBookId|string|false|none|none|
|id|integer(int64)|false|none|none|
|password|string|false|none|none|
|status|integer(int32)|false|none|none|
|userName|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_WordList">WordList</h2>
<!-- backwards compatibility -->
<a id="schemawordlist"></a>
<a id="schema_WordList"></a>
<a id="tocSwordlist"></a>
<a id="tocswordlist"></a>

```json
{
  "createdAt": "1970-01-01",
  "description": "string",
  "id": 0,
  "lastActivityAt": "1970-01-01",
  "name": "string",
  "numberWordsInList": 0,
  "permalink": "string",
  "type": "string",
  "updatedAt": "1970-01-01",
  "userId": 0,
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|true|none|none|
|lastActivityAt|string(date)|false|none|none|
|name|string|false|none|none|
|numberWordsInList|integer(int64)|false|none|none|
|permalink|string|false|none|none|
|type|string|false|none|none|
|updatedAt|string(date)|false|none|none|
|userId|integer(int64)|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_WordListWord">WordListWord</h2>
<!-- backwards compatibility -->
<a id="schemawordlistword"></a>
<a id="schema_WordListWord"></a>
<a id="tocSwordlistword"></a>
<a id="tocswordlistword"></a>

```json
{
  "createdAt": "1970-01-01",
  "id": 0,
  "numberCommentsOnWord": 0,
  "numberLists": 0,
  "userId": 0,
  "username": "string",
  "word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date)|false|none|none|
|id|integer(int64)|true|none|none|
|numberCommentsOnWord|integer(int64)|false|none|none|
|numberLists|integer(int64)|false|none|none|
|userId|integer(int64)|false|none|none|
|username|string|false|none|none|
|word|string|false|none|none|

<h2 id="tocS_WordObject">WordObject</h2>
<!-- backwards compatibility -->
<a id="schemawordobject"></a>
<a id="schema_WordObject"></a>
<a id="tocSwordobject"></a>
<a id="tocswordobject"></a>

```json
{
  "canonicalForm": "string",
  "id": 0,
  "originalWord": "string",
  "suggestions": [
    "string"
  ],
  "vulgar": "string",
  "word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonicalForm|string|false|none|none|
|id|integer(int64)|true|none|none|
|originalWord|string|false|none|none|
|suggestions|[string]|false|none|none|
|vulgar|string|false|none|none|
|word|string|false|none|none|

<h2 id="tocS_WordOfTheDay">WordOfTheDay</h2>
<!-- backwards compatibility -->
<a id="schemawordoftheday"></a>
<a id="schema_WordOfTheDay"></a>
<a id="tocSwordoftheday"></a>
<a id="tocswordoftheday"></a>

```json
{
  "category": "string",
  "contentProvider": {
    "id": 0,
    "name": "string"
  },
  "createdAt": "1970-01-01",
  "createdBy": "string",
  "definitions": [
    null
  ],
  "examples": [
    null
  ],
  "htmlExtra": "string",
  "id": 0,
  "note": "string",
  "parentId": "string",
  "publishDate": "1970-01-01",
  "word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|contentProvider|[ContentProvider](#schemacontentprovider)|false|none|none|
|createdAt|string(date)|false|none|none|
|createdBy|string|false|none|none|
|definitions|[object]|false|none|none|
|examples|[object]|false|none|none|
|htmlExtra|string|false|none|none|
|id|integer(int64)|true|none|none|
|note|string|false|none|none|
|parentId|string|false|none|none|
|publishDate|string(date)|false|none|none|
|word|string|false|none|none|

<h2 id="tocS_WordSearchResult">WordSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemawordsearchresult"></a>
<a id="schema_WordSearchResult"></a>
<a id="tocSwordsearchresult"></a>
<a id="tocswordsearchresult"></a>

```json
{
  "count": 0,
  "lexicality": 0,
  "word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|
|lexicality|number(double)|false|none|none|
|word|string|false|none|none|

<h2 id="tocS_WordSearchResults">WordSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemawordsearchresults"></a>
<a id="schema_WordSearchResults"></a>
<a id="tocSwordsearchresults"></a>
<a id="tocswordsearchresults"></a>

```json
{
  "searchResults": [
    null
  ],
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchResults|[object]|false|none|none|
|totalResults|integer(int32)|false|none|none|
