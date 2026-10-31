<h1 id="oxford-dictionaries">Oxford Dictionaries v1.11.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://od-api-demo.oxforddictionaries.com:443/api/v1">https://od-api-demo.oxforddictionaries.com:443/api/v1</a>

<a href="http://helloreverb.com/terms/">Terms of service</a>
License: <a href="https://developer.oxforddictionaries.com/api-terms-and-conditions">API Terms And Conditions</a>

<h1 id="oxford-dictionaries-utility">Utility</h1>

## Lists available domains in a bilingual dataset

> Code samples

```bash
curl https://example.com/domains/en/es \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /domains/{source_domains_language}/{target_domains_language}`

Returns a list of the available [domains](documentation/glossary?term=domain) for a given bilingual language dataset.


<h3 id="lists-available-domains-in-a-bilingual-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_domains_language|path|string|true|IANA language code|
|target_domains_language|path|string|true|IANA language code|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_domains_language|en|
|source_domains_language|es|
|source_domains_language|nso|
|source_domains_language|zu|
|source_domains_language|ur|
|source_domains_language|de|
|source_domains_language|pt|
|target_domains_language|es|
|target_domains_language|nso|
|target_domains_language|zu|
|target_domains_language|ms|
|target_domains_language|id|
|target_domains_language|tn|
|target_domains_language|ro|
|target_domains_language|de|
|target_domains_language|pt|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": {
    "property1": {
      "en": "string"
    },
    "property2": {
      "en": "string"
    }
  }
}
```

<h3 id="lists-available-domains-in-a-bilingual-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[UtilityLabels](#schemautilitylabels)|
|400|Bad Request|source_language and target_language are same.|None|
|404|Not Found|Unknown source_language and/or target_language.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists available domains in a monolingual dataset

> Code samples

```bash
curl https://example.com/domains/en \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /domains/{source_language}`

Returns a list of the available [domains](documentation/glossary?term=domain) for a given monolingual language dataset.


<h3 id="lists-available-domains-in-a-monolingual-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_language|path|string|true|IANA language code|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_language|en|
|source_language|es|
|source_language|nso|
|source_language|zu|
|source_language|hi|
|source_language|sw|
|source_language|ur|
|source_language|de|
|source_language|pt|
|source_language|ta|
|source_language|gu|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": {
    "property1": {
      "en": "string"
    },
    "property2": {
      "en": "string"
    }
  }
}
```

<h3 id="lists-available-domains-in-a-monolingual-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[UtilityLabels](#schemautilitylabels)|
|404|Not Found|Unknown source_language.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists available filters

> Code samples

```bash
curl https://example.com/filters \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /filters`

Returns a list of all the valid filters to construct API calls.


<h3 id="lists-available-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": {
    "entries": [
      "string"
    ],
    "inflections": [
      "string"
    ],
    "translations": [
      "string"
    ],
    "wordlist": [
      "string"
    ]
  }
}
```

<h3 id="lists-available-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Filters](#schemafilters)|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists available filters for specific endpoint

> Code samples

```bash
curl https://example.com/filters/entries \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /filters/{endpoint}`

Returns a list of all the valid filters for a given endpoint to construct API calls.


<h3 id="lists-available-filters-for-specific-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpoint|path|string|true|Name of the endpoint.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|endpoint|entries|
|endpoint|inflections|
|endpoint|translations|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": {
    "entries": [
      "string"
    ],
    "inflections": [
      "string"
    ],
    "translations": [
      "string"
    ],
    "wordlist": [
      "string"
    ]
  }
}
```

<h3 id="lists-available-filters-for-specific-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Filters](#schemafilters)|
|404|Not Found|Unknown endpoint.|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists available grammatical features in a dataset

> Code samples

```bash
curl https://example.com/grammaticalFeatures/en \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /grammaticalFeatures/{source_language}`

Returns a list of the available [grammatical features](documentation/glossary?term=grammaticalfeatures) for a given language dataset.


<h3 id="lists-available-grammatical-features-in-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_language|path|string|true|IANA language code. If provided output will be filtered by sourceLanguage.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_language|en|
|source_language|es|
|source_language|lv|
|source_language|nso|
|source_language|zu|
|source_language|ms|
|source_language|tn|
|source_language|ur|
|source_language|hi|
|source_language|sw|
|source_language|de|
|source_language|pt|
|source_language|ta|
|source_language|gu|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": {
    "property1": {
      "en": "string"
    },
    "property2": {
      "en": "string"
    }
  }
}
```

<h3 id="lists-available-grammatical-features-in-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[UtilityLabels](#schemautilitylabels)|
|404|Not Found|Unknown source_language.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists available dictionaries

> Code samples

```bash
curl https://example.com/languages \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /languages`

Returns a list of monolingual and bilingual language datasets available in the API


<h3 id="lists-available-dictionaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceLanguage|query|string|false|IANA language code. If provided output will be filtered by sourceLanguage.|
|targetLanguage|query|string|false|IANA language code. If provided output will be filtered by sourceLanguage.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sourceLanguage|es|
|sourceLanguage|en|
|sourceLanguage|lv|
|sourceLanguage|nso|
|sourceLanguage|zu|
|sourceLanguage|ms|
|sourceLanguage|id|
|sourceLanguage|tn|
|sourceLanguage|ur|
|sourceLanguage|hi|
|sourceLanguage|sw|
|sourceLanguage|ro|
|sourceLanguage|de|
|sourceLanguage|pt|
|sourceLanguage|ta|
|sourceLanguage|gu|
|targetLanguage|es|
|targetLanguage|en|
|targetLanguage|lv|
|targetLanguage|nso|
|targetLanguage|zu|
|targetLanguage|ms|
|targetLanguage|id|
|targetLanguage|tn|
|targetLanguage|ur|
|targetLanguage|hi|
|targetLanguage|sw|
|targetLanguage|ro|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "region": "string",
      "source": "string",
      "sourceLanguage": {
        "id": "string",
        "language": "string"
      },
      "targetLanguage": {
        "id": "string",
        "language": "string"
      },
      "type": "monolingual"
    }
  ]
}
```

<h3 id="lists-available-dictionaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Languages](#schemalanguages)|
|404|Not Found|Unknown sourceLanguage and/or targetLanguage.|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists available lexical categories in a dataset

> Code samples

```bash
curl https://example.com/lexicalcategories/es \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /lexicalcategories/{language}`

Returns a list of available [lexical categories](documentation/glossary?term=lexicalcategory) for a given language dataset.


<h3 id="lists-available-lexical-categories-in-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|path|string|true|IANA language code|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|es|
|language|en|
|language|lv|
|language|nso|
|language|zu|
|language|ms|
|language|id|
|language|tn|
|language|ur|
|language|hi|
|language|sw|
|language|ro|
|language|de|
|language|pt|
|language|ta|
|language|gu|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": {
    "property1": {
      "en": "string"
    },
    "property2": {
      "en": "string"
    }
  }
}
```

<h3 id="lists-available-lexical-categories-in-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[UtilityLabels](#schemautilitylabels)|
|404|Not Found|Unknown language.|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists available regions in a monolingual dataset

> Code samples

```bash
curl https://example.com/regions/en \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /regions/{source_language}`

Returns a list of the available [regions](documentation/glossary?term=regions) for a given monolingual language dataset.


<h3 id="lists-available-regions-in-a-monolingual-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_language|path|string|true|IANA language code|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_language|en|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="lists-available-regions-in-a-monolingual-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Regions](#schemaregions)|
|404|Not Found|Unknown source_language.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists available registers in a monolingual dataset

> Code samples

```bash
curl https://example.com/registers/en \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /registers/{source_language}`

Returns a list of the available [registers](documentation/glossary?term=registers) for a given monolingual language dataset.


<h3 id="lists-available-registers-in-a-monolingual-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_language|path|string|true|IANA language code|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_language|en|
|source_language|es|
|source_language|hi|
|source_language|id|
|source_language|lv|
|source_language|ms|
|source_language|sw|
|source_language|ur|
|source_language|de|
|source_language|pt|
|source_language|ta|
|source_language|gu|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": {
    "property1": {
      "en": "string"
    },
    "property2": {
      "en": "string"
    }
  }
}
```

<h3 id="lists-available-registers-in-a-monolingual-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[UtilityLabels](#schemautilitylabels)|
|404|Not Found|Unknown source_language.|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists available registers in a bilingual dataset

> Code samples

```bash
curl https://example.com/registers/en/es \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /registers/{source_register_language}/{target_register_language}`

Returns a list of the available [registers](documentation/glossary?term=registers) for a given bilingual language dataset.


<h3 id="lists-available-registers-in-a-bilingual-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_register_language|path|string|true|IANA language code|
|target_register_language|path|string|true|IANA language code|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_register_language|en|
|source_register_language|es|
|source_register_language|ms|
|source_register_language|id|
|source_register_language|ur|
|source_register_language|de|
|source_register_language|pt|
|target_register_language|es|
|target_register_language|en|
|target_register_language|nso|
|target_register_language|zu|
|target_register_language|ms|
|target_register_language|id|
|target_register_language|tn|
|target_register_language|ro|
|target_register_language|de|
|target_register_language|pt|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": {
    "property1": {
      "en": "string"
    },
    "property2": {
      "en": "string"
    }
  }
}
```

<h3 id="lists-available-registers-in-a-bilingual-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[UtilityLabels](#schemautilitylabels)|
|400|Bad Request|source_language and target_language are same.|None|
|404|Not Found|Unknown source_language and/or target_language.|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="oxford-dictionaries-the-sentence-dictionary">The Sentence Dictionary</h1>

## Retrieve corpus sentences for a given word

> Code samples

```bash
curl https://example.com/entries/en/ace/sentences \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /entries/{source_language}/{word_id}/sentences`


Use this to retrieve sentences extracted from  corpora which show how a word is used in the language. This is available for English and Spanish. For English, the sentences are linked to the correct [sense](documentation/glossary?term=sense) of the word in the dictionary. In Spanish, they are linked at the [headword](documentation/glossary?term=headword) level.
  <div id="sentences"></div>


<a href="https://helloreverb.com/about">find more info here</a>

<h3 id="retrieve-corpus-sentences-for-a-given-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_language|path|string|true|IANA language code|
|word_id|path|string|true|An Entry identifier. Case-sensitive.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_language|en|
|source_language|es|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "sentences": [
            {
              "definitions": [
                "string"
              ],
              "domains": [
                "string"
              ],
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "senseIds": [
                "string"
              ],
              "text": "string",
              "translations": [
                {
                  "domains": [
                    "string"
                  ],
                  "grammaticalFeatures": [
                    {
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "language": "string",
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "text": "string"
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="retrieve-corpus-sentences-for-a-given-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[SentencesResults](#schemasentencesresults)|
|404|Not Found|No entry is found matching supplied id and source_language<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="oxford-dictionaries-dictionary-entries">Dictionary entries</h1>

## Retrieve dictionary information for a given word

> Code samples

```bash
curl https://example.com/entries/en/ace \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /entries/{source_lang}/{word_id}`


Use this to retrieve definitions, [pronunciations](documentation/glossary?term=pronunciation), example sentences, [grammatical information](documentation/glossary?term=grammaticalfeatures) and [word origins](documentation/glossary?term=etymology). It only works for dictionary [headwords](documentation/glossary?term=headword), so you may need to use the [Lemmatron](documentation/glossary?term=lemma) first if your input is likely to be an [inflected](documentation/glossary?term=inflection) form (e.g., 'swimming'). This would return the linked [headword](documentation/glossary?term=headword) (e.g., 'swim') which you can then use in the Entries endpoint. Unless specified using a region filter, the default lookup will be the Oxford Dictionary of English (GB). 
  <div id="dictionary_entries"></div>


<a href="https://helloreverb.com/about">find more info here</a>

<h3 id="retrieve-dictionary-information-for-a-given-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|word_id|path|string|true|An Entry identifier. Case-sensitive.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|en|
|source_lang|es|
|source_lang|lv|
|source_lang|hi|
|source_lang|sw|
|source_lang|ta|
|source_lang|gu|
|source_lang|fr|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "derivativeOf": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "derivatives": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "entries": [
            {
              "etymologies": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "homographNumber": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "pronunciations": [
                {
                  "audioFile": "string",
                  "dialects": [
                    "string"
                  ],
                  "phoneticNotation": "string",
                  "phoneticSpelling": "string",
                  "regions": [
                    "string"
                  ]
                }
              ],
              "senses": [
                {
                  "crossReferenceMarkers": [
                    "string"
                  ],
                  "crossReferences": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "definitions": [
                    "string"
                  ],
                  "domains": [
                    "string"
                  ],
                  "examples": [
                    {
                      "definitions": [
                        "string"
                      ],
                      "domains": [
                        "string"
                      ],
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "senseIds": [
                        "string"
                      ],
                      "text": "string",
                      "translations": [
                        {
                          "domains": [
                            "string"
                          ],
                          "grammaticalFeatures": [
                            {
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "language": "string",
                          "notes": [
                            {
                              "id": "string",
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "regions": [
                            "string"
                          ],
                          "registers": [
                            "string"
                          ],
                          "text": "string"
                        }
                      ]
                    }
                  ],
                  "id": "string",
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "pronunciations": [
                    {
                      "audioFile": "string",
                      "dialects": [
                        "string"
                      ],
                      "phoneticNotation": "string",
                      "phoneticSpelling": "string",
                      "regions": [
                        "string"
                      ]
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "short_definitions": [
                    "string"
                  ],
                  "subsenses": [
                    {}
                  ],
                  "thesaurusLinks": [
                    {
                      "entry_id": "string",
                      "sense_id": "string"
                    }
                  ],
                  "translations": [
                    {
                      "domains": [
                        "string"
                      ],
                      "grammaticalFeatures": [
                        {
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "language": "string",
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ],
                  "variantForms": [
                    {
                      "regions": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "variantForms": [
                {
                  "regions": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "pronunciations": [
            {
              "audioFile": "string",
              "dialects": [
                "string"
              ],
              "phoneticNotation": "string",
              "phoneticSpelling": "string",
              "regions": [
                "string"
              ]
            }
          ],
          "text": "string",
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "pronunciations": [
        {
          "audioFile": "string",
          "dialects": [
            "string"
          ],
          "phoneticNotation": "string",
          "phoneticSpelling": "string",
          "regions": [
            "string"
          ]
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="retrieve-dictionary-information-for-a-given-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[RetrieveEntry](#schemaretrieveentry)|
|404|Not Found|No entry is found matching supplied id and source_lang or filters are not recognized<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## Specify GB or US dictionary for English entry search

> Code samples

```bash
curl https://example.com/entries/en/ace/regions=gb \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /entries/{source_lang}/{word_id}/regions={region}`


USe this filter to restrict the lookup to either our Oxford Dictionary of English (GB) or New Oxford American Dictionary (US).


<a href="https://helloreverb.com/about">find more info here</a>

<h3 id="specify-gb-or-us-dictionary-for-english-entry-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|word_id|path|string|true|An Entry identifier. Case-sensitive.|
|region|path|string|true|Region filter parameter. gb = Oxford Dictionary of English. us = New Oxford American Dictionary.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|en|
|region|gb|
|region|us|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "derivativeOf": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "derivatives": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "entries": [
            {
              "etymologies": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "homographNumber": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "pronunciations": [
                {
                  "audioFile": "string",
                  "dialects": [
                    "string"
                  ],
                  "phoneticNotation": "string",
                  "phoneticSpelling": "string",
                  "regions": [
                    "string"
                  ]
                }
              ],
              "senses": [
                {
                  "crossReferenceMarkers": [
                    "string"
                  ],
                  "crossReferences": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "definitions": [
                    "string"
                  ],
                  "domains": [
                    "string"
                  ],
                  "examples": [
                    {
                      "definitions": [
                        "string"
                      ],
                      "domains": [
                        "string"
                      ],
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "senseIds": [
                        "string"
                      ],
                      "text": "string",
                      "translations": [
                        {
                          "domains": [
                            "string"
                          ],
                          "grammaticalFeatures": [
                            {
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "language": "string",
                          "notes": [
                            {
                              "id": "string",
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "regions": [
                            "string"
                          ],
                          "registers": [
                            "string"
                          ],
                          "text": "string"
                        }
                      ]
                    }
                  ],
                  "id": "string",
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "pronunciations": [
                    {
                      "audioFile": "string",
                      "dialects": [
                        "string"
                      ],
                      "phoneticNotation": "string",
                      "phoneticSpelling": "string",
                      "regions": [
                        "string"
                      ]
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "short_definitions": [
                    "string"
                  ],
                  "subsenses": [
                    {}
                  ],
                  "thesaurusLinks": [
                    {
                      "entry_id": "string",
                      "sense_id": "string"
                    }
                  ],
                  "translations": [
                    {
                      "domains": [
                        "string"
                      ],
                      "grammaticalFeatures": [
                        {
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "language": "string",
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ],
                  "variantForms": [
                    {
                      "regions": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "variantForms": [
                {
                  "regions": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "pronunciations": [
            {
              "audioFile": "string",
              "dialects": [
                "string"
              ],
              "phoneticNotation": "string",
              "phoneticSpelling": "string",
              "regions": [
                "string"
              ]
            }
          ],
          "text": "string",
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "pronunciations": [
        {
          "audioFile": "string",
          "dialects": [
            "string"
          ],
          "phoneticNotation": "string",
          "phoneticSpelling": "string",
          "regions": [
            "string"
          ]
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="specify-gb-or-us-dictionary-for-english-entry-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[RetrieveEntry](#schemaretrieveentry)|
|404|Not Found|no entry is found matching supplied source_lang and id<br>and/or that entry has no senses with translations in the target language. <br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## Apply filters to response

> Code samples

```bash
curl https://example.com/entries/en/ace/grammaticalFeatures%3Dsingular%2Cpast%3BlexicalCategory%3Dnoun \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /entries/{source_lang}/{word_id}/{filters}`


Use filters to limit the [entry](documentation/glossary?term=entry) information that is returned. For example, you may only require definitions and not everything else, or just [pronunciations](documentation/glossary?term=pronunciation). The full list of filters can be retrieved from the filters Utility endpoint. You can also specify values within the filter using '='. For example 'grammaticalFeatures=singular'. Filters can also be combined using a semicolon.

  <div id="dictionary_entries_filters"></div>


<h3 id="apply-filters-to-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|word_id|path|string|true|An Entry identifier. Case-sensitive.|
|filters|path|string|true|Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|en|
|source_lang|es|
|source_lang|lv|
|source_lang|hi|
|source_lang|sw|
|source_lang|ta|
|source_lang|gu|
|source_lang|fr|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "derivativeOf": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "derivatives": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "entries": [
            {
              "etymologies": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "homographNumber": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "pronunciations": [
                {
                  "audioFile": "string",
                  "dialects": [
                    "string"
                  ],
                  "phoneticNotation": "string",
                  "phoneticSpelling": "string",
                  "regions": [
                    "string"
                  ]
                }
              ],
              "senses": [
                {
                  "crossReferenceMarkers": [
                    "string"
                  ],
                  "crossReferences": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "definitions": [
                    "string"
                  ],
                  "domains": [
                    "string"
                  ],
                  "examples": [
                    {
                      "definitions": [
                        "string"
                      ],
                      "domains": [
                        "string"
                      ],
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "senseIds": [
                        "string"
                      ],
                      "text": "string",
                      "translations": [
                        {
                          "domains": [
                            "string"
                          ],
                          "grammaticalFeatures": [
                            {
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "language": "string",
                          "notes": [
                            {
                              "id": "string",
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "regions": [
                            "string"
                          ],
                          "registers": [
                            "string"
                          ],
                          "text": "string"
                        }
                      ]
                    }
                  ],
                  "id": "string",
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "pronunciations": [
                    {
                      "audioFile": "string",
                      "dialects": [
                        "string"
                      ],
                      "phoneticNotation": "string",
                      "phoneticSpelling": "string",
                      "regions": [
                        "string"
                      ]
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "short_definitions": [
                    "string"
                  ],
                  "subsenses": [
                    {}
                  ],
                  "thesaurusLinks": [
                    {
                      "entry_id": "string",
                      "sense_id": "string"
                    }
                  ],
                  "translations": [
                    {
                      "domains": [
                        "string"
                      ],
                      "grammaticalFeatures": [
                        {
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "language": "string",
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ],
                  "variantForms": [
                    {
                      "regions": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "variantForms": [
                {
                  "regions": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "pronunciations": [
            {
              "audioFile": "string",
              "dialects": [
                "string"
              ],
              "phoneticNotation": "string",
              "phoneticSpelling": "string",
              "regions": [
                "string"
              ]
            }
          ],
          "text": "string",
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "pronunciations": [
        {
          "audioFile": "string",
          "dialects": [
            "string"
          ],
          "phoneticNotation": "string",
          "phoneticSpelling": "string",
          "regions": [
            "string"
          ]
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="apply-filters-to-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[RetrieveEntry](#schemaretrieveentry)|
|404|Not Found|no entry is found matching supplied source_lang and id<br>and/or that entry has no senses with translations in the target language. <br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="oxford-dictionaries-thesaurus">Thesaurus</h1>

## Retrieve words that mean the opposite

> Code samples

```bash
curl https://example.com/entries/en/ace/antonyms \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /entries/{source_lang}/{word_id}/antonyms`


Retrieve words that are opposite in meaning to the input word ([antonym](documentation/glossary?term=thesaurus)).

  <div id="antonyms"></div>


<a href="https://helloreverb.com/about">find more info here</a>

<h3 id="retrieve-words-that-mean-the-opposite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|word_id|path|string|true|An Entry identifier. Case-sensitive.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|en|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "entries": [
            {
              "homographNumber": "string",
              "senses": [
                {
                  "antonyms": [
                    {
                      "domains": [
                        "string"
                      ],
                      "id": "string",
                      "language": "string",
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ],
                  "domains": [
                    "string"
                  ],
                  "examples": [
                    {
                      "definitions": [
                        "string"
                      ],
                      "domains": [
                        "string"
                      ],
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "senseIds": [
                        "string"
                      ],
                      "text": "string",
                      "translations": [
                        {
                          "domains": [
                            "string"
                          ],
                          "grammaticalFeatures": [
                            {
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "language": "string",
                          "notes": [
                            {
                              "id": "string",
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "regions": [
                            "string"
                          ],
                          "registers": [
                            "string"
                          ],
                          "text": "string"
                        }
                      ]
                    }
                  ],
                  "id": "string",
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "subsenses": [
                    {}
                  ],
                  "synonyms": [
                    {
                      "domains": [
                        "string"
                      ],
                      "id": "string",
                      "language": "string",
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "variantForms": [
                {
                  "regions": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "text": "string",
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="retrieve-words-that-mean-the-opposite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Thesaurus](#schemathesaurus)|
|404|Not Found|No entry is found matching supplied id and source_lang or filters are not recognized<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve words that are similar

> Code samples

```bash
curl https://example.com/entries/en/ace/synonyms \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /entries/{source_lang}/{word_id}/synonyms`


Use this to retrieve words that are similar in meaning to the input word ([synonym](documentation/glossary?term=synonym)).

  <div id="synonyms"></div>


<a href="https://helloreverb.com/about">find more info here</a>

<h3 id="retrieve-words-that-are-similar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|word_id|path|string|true|An Entry identifier. Case-sensitive.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|en|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "entries": [
            {
              "homographNumber": "string",
              "senses": [
                {
                  "antonyms": [
                    {
                      "domains": [
                        "string"
                      ],
                      "id": "string",
                      "language": "string",
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ],
                  "domains": [
                    "string"
                  ],
                  "examples": [
                    {
                      "definitions": [
                        "string"
                      ],
                      "domains": [
                        "string"
                      ],
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "senseIds": [
                        "string"
                      ],
                      "text": "string",
                      "translations": [
                        {
                          "domains": [
                            "string"
                          ],
                          "grammaticalFeatures": [
                            {
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "language": "string",
                          "notes": [
                            {
                              "id": "string",
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "regions": [
                            "string"
                          ],
                          "registers": [
                            "string"
                          ],
                          "text": "string"
                        }
                      ]
                    }
                  ],
                  "id": "string",
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "subsenses": [
                    {}
                  ],
                  "synonyms": [
                    {
                      "domains": [
                        "string"
                      ],
                      "id": "string",
                      "language": "string",
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "variantForms": [
                {
                  "regions": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "text": "string",
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="retrieve-words-that-are-similar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Thesaurus](#schemathesaurus)|
|404|Not Found|No entry is found matching supplied id and source_lang or filters are not recognized<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve synonyms and antonyms for a given word

> Code samples

```bash
curl 'https://example.com/entries/en/ace/synonyms;antonyms' \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /entries/{source_lang}/{word_id}/synonyms;antonyms`


Retrieve available [synonyms](documentation/glossary?term=thesaurus) and [antonyms](documentation/glossary?term=thesaurus) for a given word and language. 

  <div id="synonyms_and_antonyms"></div>


<a href="https://helloreverb.com/about">find more info here</a>

<h3 id="retrieve-synonyms-and-antonyms-for-a-given-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|word_id|path|string|true|An Entry identifier. Case-sensitive.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|en|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "entries": [
            {
              "homographNumber": "string",
              "senses": [
                {
                  "antonyms": [
                    {
                      "domains": [
                        "string"
                      ],
                      "id": "string",
                      "language": "string",
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ],
                  "domains": [
                    "string"
                  ],
                  "examples": [
                    {
                      "definitions": [
                        "string"
                      ],
                      "domains": [
                        "string"
                      ],
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "senseIds": [
                        "string"
                      ],
                      "text": "string",
                      "translations": [
                        {
                          "domains": [
                            "string"
                          ],
                          "grammaticalFeatures": [
                            {
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "language": "string",
                          "notes": [
                            {
                              "id": "string",
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "regions": [
                            "string"
                          ],
                          "registers": [
                            "string"
                          ],
                          "text": "string"
                        }
                      ]
                    }
                  ],
                  "id": "string",
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "subsenses": [
                    {}
                  ],
                  "synonyms": [
                    {
                      "domains": [
                        "string"
                      ],
                      "id": "string",
                      "language": "string",
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "variantForms": [
                {
                  "regions": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "text": "string",
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="retrieve-synonyms-and-antonyms-for-a-given-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Thesaurus](#schemathesaurus)|
|404|Not Found|No entry is found matching supplied id and source_lang or filters are not recognized<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="oxford-dictionaries-translation">Translation</h1>

## Retrieve translation for a given word

> Code samples

```bash
curl https://example.com/entries/en/change/translations=es \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /entries/{source_translation_language}/{word_id}/translations={target_translation_language}`


Use this to return translations for a given word. In the event that a word in the dataset does not have a direct translation, the response will be a [definition](documentation/glossary?term=entry) in the target language.

  <div id="translation"></div>


<h3 id="retrieve-translation-for-a-given-word-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_translation_language|path|string|true|IANA language code|
|word_id|path|string|true|The source word|
|target_translation_language|path|string|true|IANA language code|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_translation_language|en|
|source_translation_language|es|
|source_translation_language|nso|
|source_translation_language|zu|
|source_translation_language|ms|
|source_translation_language|id|
|source_translation_language|tn|
|source_translation_language|ur|
|source_translation_language|de|
|source_translation_language|pt|
|target_translation_language|es|
|target_translation_language|nso|
|target_translation_language|zu|
|target_translation_language|ms|
|target_translation_language|id|
|target_translation_language|tn|
|target_translation_language|ro|
|target_translation_language|de|
|target_translation_language|pt|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "derivativeOf": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "derivatives": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "entries": [
            {
              "etymologies": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "homographNumber": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "pronunciations": [
                {
                  "audioFile": "string",
                  "dialects": [
                    "string"
                  ],
                  "phoneticNotation": "string",
                  "phoneticSpelling": "string",
                  "regions": [
                    "string"
                  ]
                }
              ],
              "senses": [
                {
                  "crossReferenceMarkers": [
                    "string"
                  ],
                  "crossReferences": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "definitions": [
                    "string"
                  ],
                  "domains": [
                    "string"
                  ],
                  "examples": [
                    {
                      "definitions": [
                        "string"
                      ],
                      "domains": [
                        "string"
                      ],
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "senseIds": [
                        "string"
                      ],
                      "text": "string",
                      "translations": [
                        {
                          "domains": [
                            "string"
                          ],
                          "grammaticalFeatures": [
                            {
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "language": "string",
                          "notes": [
                            {
                              "id": "string",
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "regions": [
                            "string"
                          ],
                          "registers": [
                            "string"
                          ],
                          "text": "string"
                        }
                      ]
                    }
                  ],
                  "id": "string",
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "pronunciations": [
                    {
                      "audioFile": "string",
                      "dialects": [
                        "string"
                      ],
                      "phoneticNotation": "string",
                      "phoneticSpelling": "string",
                      "regions": [
                        "string"
                      ]
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "short_definitions": [
                    "string"
                  ],
                  "subsenses": [
                    {}
                  ],
                  "thesaurusLinks": [
                    {
                      "entry_id": "string",
                      "sense_id": "string"
                    }
                  ],
                  "translations": [
                    {
                      "domains": [
                        "string"
                      ],
                      "grammaticalFeatures": [
                        {
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "language": "string",
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ],
                  "variantForms": [
                    {
                      "regions": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "variantForms": [
                {
                  "regions": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "pronunciations": [
            {
              "audioFile": "string",
              "dialects": [
                "string"
              ],
              "phoneticNotation": "string",
              "phoneticSpelling": "string",
              "regions": [
                "string"
              ]
            }
          ],
          "text": "string",
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "pronunciations": [
        {
          "audioFile": "string",
          "dialects": [
            "string"
          ],
          "phoneticNotation": "string",
          "phoneticSpelling": "string",
          "regions": [
            "string"
          ]
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="retrieve-translation-for-a-given-word-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response. In case word doesn't have a direct translation a response would be definitions.|[RetrieveEntry](#schemaretrieveentry)|
|400|Bad Request|any of target languages is unknown|None|
|404|Not Found|no entry is found matching supplied source_lang and id<br>and/or that entry has no senses with translations in the target language(s). <br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="oxford-dictionaries-lemmatron">Lemmatron</h1>

## Check a word exists in the dictionary and retrieve its root form

> Code samples

```bash
curl https://example.com/inflections/en/swimming/grammaticalFeatures%3Dsingular%2Cpast%3BlexicalCategory%3Dnoun \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /inflections/{source_lang}/{word_id}/{filters}`


Use this to check if a word exists in the dictionary, or what 'root' form it links to (e.g., swimming > swim). The response tells you the possible [lemmas](documentation/glossary?term=lemma) for a given [inflected](documentation/glossary?term=inflection) word. This can then be combined with other endpoints to retrieve more information.

  <div id="lemmatron"></div>


<h3 id="check-a-word-exists-in-the-dictionary-and-retrieve-its-root-form-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|filters|path|string|true|Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.|
|word_id|path|string|true|The input word|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|en|
|source_lang|es|
|source_lang|hi|
|source_lang|nso|
|source_lang|tn|
|source_lang|zu|
|source_lang|de|
|source_lang|pt|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "inflectionOf": [
            {
              "id": "string",
              "text": "string"
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "text": "string"
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="check-a-word-exists-in-the-dictionary-and-retrieve-its-root-form-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Lemmatron](#schemalemmatron)|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="oxford-dictionaries-search">Search</h1>

## Retrieve possible matches to input

> Code samples

```bash
curl https://example.com/search/en \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /search/{source_lang}`


Use this to retrieve possible [headword](documentation/glossary?term=headword) matches for a given string of text. The results are culculated using headword matching, fuzzy matching, and [lemmatization](documentation/glossary?term=lemma) 

  <div id="search"></div>


<a href="https://helloreverb.com/about">find more info here</a>

<h3 id="retrieve-possible-matches-to-input-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|q|query|string|false|Search string|
|prefix|query|boolean|false|Set prefix to true if you'd like to get results only starting with search string.|
|regions|query|string|false|If searching in English, filter words with specific region(s) either 'us' or 'gb'.|
|limit|query|string|false|Limit the number of results per response. Default and maximum limit is 5000.|
|offset|query|string|false|Offset the start number of the result.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|en|
|source_lang|es|
|source_lang|hi|
|source_lang|lv|
|source_lang|sw|
|source_lang|ta|
|source_lang|gu|
|prefix|false|
|prefix|true|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "matchString": "string",
      "matchType": "string",
      "region": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="retrieve-possible-matches-to-input-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Wordlist](#schemawordlist)|
|404|Not Found|No entry is found matching supplied id and source_lang or filters are not recognized<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve possible translation matches to input

> Code samples

```bash
curl https://example.com/search/en/translations=es \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /search/{source_search_language}/translations={target_search_language}`


Use this to find matches in our translation dictionaries.

  <div id="search_translation"></div>


<a href="https://helloreverb.com/about">find more info here</a>

<h3 id="retrieve-possible-translation-matches-to-input-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_search_language|path|string|true|IANA language code|
|target_search_language|path|string|true|IANA language code|
|q|query|string|false|Search string.|
|prefix|query|boolean|false|Set prefix to true if you'd like to get results only starting with search string.|
|regions|query|string|false|Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language.|
|limit|query|string|false|Limit the number of results per response. Default and maximum limit is 5000.|
|offset|query|string|false|Offset the start number of the result.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_search_language|en|
|source_search_language|es|
|source_search_language|nso|
|source_search_language|zu|
|source_search_language|ms|
|source_search_language|id|
|source_search_language|tn|
|source_search_language|ur|
|source_search_language|de|
|source_search_language|pt|
|target_search_language|es|
|target_search_language|nso|
|target_search_language|zu|
|target_search_language|ms|
|target_search_language|id|
|target_search_language|tn|
|target_search_language|ro|
|target_search_language|de|
|target_search_language|pt|
|prefix|false|
|prefix|true|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "matchString": "string",
      "matchType": "string",
      "region": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="retrieve-possible-translation-matches-to-input-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Wordlist](#schemawordlist)|
|404|Not Found|No entry is found matching supplied id and source_lang or filters are not recognized<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="oxford-dictionaries-lexistats">LexiStats</h1>

## Retrieve the frequency of ngrams (1-4) derived from a corpus

> Code samples

```bash
curl https://example.com/stats/frequency/ngrams/en/nmc/2/ \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /stats/frequency/ngrams/{source_lang}/{corpus}/{ngram-size}/`

This endpoint returns frequencies of ngrams of size 1-4. That is the number of times a word (ngram size = 1) or words (ngram size > 1) appear in the corpus. Ngrams are case sensitive ("I AM" and "I am" will have different frequency) and frequencies are calculated per word (true case) so "the book" and "the books" are two different ngrams. The results can be filtered based on query parameters. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overridden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). <br> <br> Example for bigrams (ngram of size 2):
* PATH: /tokens=a word,another word
* GET: /?tokens=a word&tokens=another word
* POST (json):

  ```javascript
    {
        "tokens": ["a word", "another word"]
    }
  ```

Either "tokens" or "contains" has to be provided. <br> <br> Some queries with "contains" or "sort" can exceed the 30s timeout, in which case the API will return an error message with status code 503. You mitigate this by providing additional restrictions such as "minFrequency" and "maxFrequency". <br> <br> You can use the parameters "offset" and "limit" to paginate through large result sets. For convenience, the HTTP header "Link" is set on the response to provide links to "first", "self", "next", "prev" and "last" pages of results (depending on the context). For example, if the result set contains 50 results and the parameter "limit" is set to 25, the Links header will contain an URL for the first 25 results and the next 25 results. <br> <br> Some libraries such as python's `requests` can parse the header automatically and offer a convenient way of iterating through the results. For example:
```python def get_all_results(url):
    while url:
        r = requests.get(url)
        r.raise_for_status()
        for item in r.json()['results']:
          yield item
        url = r.links.get('next', {}).get('url')
```


<h3 id="retrieve-the-frequency-of-ngrams-1-4-derived-from-a-corpus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|corpus|path|string|true|For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com|
|ngram-size|path|string|true|the size of ngrams requested (1-4)|
|tokens|query|string|false|List of tokens to filter. The tokens are separated by spaces, the list items are separated by comma (e.g., for bigrams (n=2) tokens=this is,this was, this will)|
|contains|query|string|false|Find ngrams containing the given token(s). Use comma or space as token separators; the order of tokens is irrelevant.|
|punctuation|query|string|false|Flag specifying whether to lookup ngrams that include punctuation or not (possible values are "true" and "false"; default is "false")|
|format|query|string|false|Option specifying whether tokens should be returned as a single string (option "google") or as a list of strings (option "oup")|
|minFrequency|query|integer(int64)|false|Restrict the query to entries with frequency of at least `minFrequency`|
|maxFrequency|query|integer(int64)|false|Restrict the query to entries with frequency of at most `maxFrequency`|
|minDocumentFrequency|query|integer(int64)|false|Restrict the query to entries that appear in at least `minDocumentFrequency` documents|
|maxDocumentFrequency|query|integer(int64)|false|Restrict the query to entries that appera in at most `maxDocumentFrequency` documents|
|collate|query|string|false|collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory).|
|sort|query|string|false|sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)|
|offset|query|integer(int64)|false|pagination - results offset|
|limit|query|integer(int64)|false|pagination - results limit|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "frequency": 0,
      "tokens": [
        "string"
      ]
    }
  ]
}
```

<h3 id="retrieve-the-frequency-of-ngrams-1-4-derived-from-a-corpus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[NgramsResult](#schemangramsresult)|
|400|Bad Request|Invalid option name...<br>|None|
|404|Not Found|language is not in...<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the frequency of a word derived from a corpus.

> Code samples

```bash
curl https://example.com/stats/frequency/word/en/ \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /stats/frequency/word/{source_lang}/`

This endpoint provides the frequency of a given word. When multiple database records match the query parameters, the returned frequency is the sum of the individual frequencies. For example, if the query parameters are lemma=test, the returned frequency will include the verb "test", the noun "test" and the adjective "test" in all forms (Test, tested, testing, etc.) <br> <br> If you are interested in the frequency of the word "test" but want to exclude other forms (e.g., tested) use the option trueCase=test. Normally, the word "test" will be spelt with a capital letter at the beginning of a sentence. The option trueCase will ignore this and it will count "Test" and "test" as the same token. If you are interested in frequencies of "Test" and "test", use the option wordform=test or wordform=Test. Note that trueCase is not just a lower case of the word as some words are genuinely spelt with a capital letter such as the word "press" in Oxford University Press. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overriden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). Examples:
* PATH: /lemma=test;lexicalCategory=noun
* GET: /?lemma=test&lexicalCategory=noun
* POST (json):

  ```javascript
    {
      "lemma": "test",
      "lexicalCategory": "noun"
    }
  ```

<br> One of the options wordform/trueCase/lemma/lexicalCategory has to be provided.


<h3 id="retrieve-the-frequency-of-a-word-derived-from-a-corpus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|corpus|query|string|false|For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com|
|wordform|query|string|false|The written form of the word to look up (preserving case e.g., Books vs books)|
|trueCase|query|string|false|The written form of the word to look up with normalised case (Books --> books)|
|lemma|query|string|false|The lemma of the word to look up (e.g., Book, booked, books all have the lemma "book")|
|lexicalCategory|query|string|false|The lexical category of the word(s) to look up (e.g., noun or verb)|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "result": {
    "frequency": 0,
    "lemma": "string",
    "lexicalCategory": "string",
    "matchCount": 0,
    "normalizedFrequency": 0,
    "trueCase": "string",
    "wordform": "string"
  }
}
```

<h3 id="retrieve-the-frequency-of-a-word-derived-from-a-corpus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[StatsWordResult](#schemastatswordresult)|
|400|Bad Request|You need to specify at least one option. Try one of 'wordform, lemma, trueCase, lexicalCategory'.<br>|None|
|404|Not Found|language is not in...<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a list of frequencies of a word/words derived from a corpus.

> Code samples

```bash
curl https://example.com/stats/frequency/words/en/ \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /stats/frequency/words/{source_lang}/`

This endpoint provides a list of frequencies for a given word or words. Unlike the /word/ endpoint, the results are split into the smallest units. <br> <br> To exclude a specific value, prepend it with the minus sign ('-'). For example, to get frequencies of the lemma 'happy' but exclude superlative forms (i.e., happiest) you could use options 'lemma=happy;grammaticalFeatures=-degreeType:superlative'. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overridden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). <br> <br> The parameters wordform/trueCase/lemma/lexicalCategory also exist in a plural form, taking a lists of items. Examples:
* PATH: /wordforms=happy,happier,happiest
* GET: /?wordforms=happy&wordforms=happier&wordforms=happiest
* POST (json):
```javascript
  {
    "wordforms": ["happy", "happier", "happiest"]
  }
```
A mor complex example of retrieving frequencies of multiple lemmas:
```
  {
      "lemmas": ["happy", "content", "cheerful", "cheery", "merry", "joyful", "ecstatic"],
      "grammaticalFeatures": {
          "adjectiveFunctionType": "predicative"
      },
      "lexicalCategory": "adjective",
      "sort": ["lemma", "-frequency"]
  }
```
Some queries with "collate" or "sort" can exceed the 30s timeout, in which case the API will return an error message with status code 503. You mitigate this by providing additional restrictions such as "minFrequency" and "maxFrequency". <br> <br> You can use the parameters "offset" and "limit" to paginate through large result sets. For convenience, the HTTP header "Link" is set on the response to provide links to "first", "self", "next", "prev" and "last" pages of results (depending on the context). For example, if the result set contains 50 results and the parameter "limit" is set to 25, the Links header will contain an URL for the first 25 results and the next 25 results. <br> <br> Some libraries such as python's `requests` can parse the header automatically and offer a convenient way of iterating through the results. For example:
```python def get_all_results(url):
    while url:
        r = requests.get(url)
        r.raise_for_status()
        for item in r.json()['results']:
          yield item
        url = r.links.get('next', {}).get('url')
```


<h3 id="retrieve-a-list-of-frequencies-of-a-wordwords-derived-from-a-corpus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|corpus|query|string|false|For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com|
|wordform|query|string|false|The written form of the word to look up (preserving case e.g., Book vs book)|
|trueCase|query|string|false|The written form of the word to look up with normalised case (Books --> books)|
|lemma|query|string|false|The lemma of the word to look up (e.g., Book, booked, books all have the lemma "book")|
|lexicalCategory|query|string|false|The lexical category of the word(s) to look up (e.g., adjective or noun)|
|grammaticalFeatures|query|string|false|The grammatical features of the word(s) to look up entered as a list of k:v (e.g., degree_type:comparative)|
|sort|query|string|false|sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)|
|collate|query|string|false|collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory).|
|minFrequency|query|integer(int64)|false|Restrict the query to entries with frequency of at least `minFrequency`|
|maxFrequency|query|integer(int64)|false|Restrict the query to entries with frequency of at most `maxFrequency`|
|minNormalizedFrequency|query|number(float)|false|Restrict the query to entries with frequency of at least `minNormalizedFrequency`|
|maxNormalizedFrequency|query|number(float)|false|Restrict the query to entries with frequency of at most `maxNormalizedFrequency`|
|offset|query|integer(int64)|false|pagination - results offset|
|limit|query|integer(int64)|false|pagination - results limit|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "frequency": 0,
      "lemma": "string",
      "lexicalCategory": "string",
      "normalizedFrequency": 0,
      "trueCase": "string",
      "wordform": "string"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-frequencies-of-a-wordwords-derived-from-a-corpus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[StatsWordResultList](#schemastatswordresultlist)|
|400|Bad Request|Invalid option name...; Option ... must have a value.; The option 'minFrequency' has to have an non-negative integer parameter.; The option 'maxFrequency' has to have an non-negative integer parameter.; The option 'limit' has to have an non-negative integer parameter.; The option 'offset' has to have an non-negative integer parameter.|None|
|404|Not Found|language is not in...<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="oxford-dictionaries-wordlist">Wordlist</h1>

## Retrieve list of words for category with advanced options

> Code samples

```bash
curl https://example.com/wordlist/en/lexicalCategory%3DNoun%3Bdomains%3Dsport \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /wordlist/{source_lang}/{filters_advanced}`

Use this to apply more complex filters to the [list of words](documentation/glossary?term=wordlist). For example, you may only want to filter out words for which all [senses](documentation/glossary?term=sense) match the filter, or only its 'prime sense'. You can also filter by word length or match by substring (prefix). 

  <div id="wordlist_advanced"></div>


<h3 id="retrieve-list-of-words-for-category-with-advanced-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|filters_advanced|path|string|true|Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.|
|exclude|query|string|false|Semicolon separated list of parameters-value pairs (same as filters). Excludes headwords that have any senses in specified exclusion attributes (lexical categories, domains, etc.) from results.|
|exclude_senses|query|string|false|Semicolon separated list of parameters-value pairs (same as filters). Excludes only those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses.|
|exclude_prime_senses|query|string|false|Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only).|
|word_length|query|string|false|Parameter to speficy the minimum (>), exact or maximum (<) length of the words required. E.g., >5 - more than 5 chars; <4 - less than 4 chars; >5<10 - from 5 to 10 chars; 3 - exactly 3 chars.|
|prefix|query|string|false|Filter words that start with prefix parameter|
|exact|query|boolean|false|If exact=true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string.|
|limit|query|string|false|Limit the number of results per response. Default and maximum limit is 5000.|
|offset|query|string|false|Offset the start number of the result.|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|en|
|source_lang|es|
|source_lang|hi|
|source_lang|lv|
|source_lang|sw|
|source_lang|ta|
|source_lang|gu|
|exact|false|
|exact|true|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "matchString": "string",
      "matchType": "string",
      "region": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="retrieve-list-of-words-for-category-with-advanced-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Wordlist](#schemawordlist)|
|400|Bad Request|disjoint sets of word_length values (eg <3>10); filter has no values; total number of filters > 20; filters and excludes values can not be the same; source_lang and translations can not be same; word_length conflicts with prefix length.|None|
|404|Not Found|No entries is found matching supplied filters or lang or filters is not recognized.<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a list of words in a category

> Code samples

```bash
curl https://example.com/wordlist/en/registers%3DRare%3Bdomains%3DArt \
  -H 'Accept: application/json' \
  -H 'app_id: 5037d509' \
  -H 'app_key: 4dc1aebaa63721f0f8e79a55e2514bc7'
```

`GET /wordlist/{source_lang}/{filters_basic}`


Use this to retrieve a [list of words](documentation/glossary?term=wordlist) for particular [domain](documentation/glossary?term=domain), [lexical category](documentation/glossary?term=lexicalcategory), [register](documentation/glossary?term=registers) and/or [region](documentation/glossary?term=regions). View the full list of possible filters using the filters Utility endpoint.  The response only includes [headwords](documentation/glossary?term=headword), not all their possible [inflections](documentation/glossary?term=inflection). If you require a full [wordlist](documentation/glossary?term=wordlist) including [inflected forms](documentation/glossary?term=inflection), contact us and we can help.

  <div id="wordlist"></div>


<h3 id="retrieve-a-list-of-words-in-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_lang|path|string|true|IANA language code|
|filters_basic|path|string|true|Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.|
|limit|query|string|false|Limit the number of results per response. Default and maximum limit is 5000.|
|offset|query|string|false|Offset the start number of the result|
|app_id|header|string|true|App ID Authentication Parameter|
|app_key|header|string|true|App Key Authentication Parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|en|
|source_lang|es|
|source_lang|hi|
|source_lang|lv|
|source_lang|sw|
|source_lang|ta|
|source_lang|gu|

> Example responses

> 200 Response

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "matchString": "string",
      "matchType": "string",
      "region": "string",
      "word": "string"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-words-in-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[Wordlist](#schemawordlist)|
|400|Bad Request|filter has no values; total number of filters > 20.|None|
|404|Not Found|No entries is found matching supplied filters or lang or filters is not recognized.<br>|None|
|500|Internal Server Error|Internal Error. An error occurred while processing the data.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ArrayOfRelatedEntries">ArrayOfRelatedEntries</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofrelatedentries"></a>
<a id="schema_ArrayOfRelatedEntries"></a>
<a id="tocSarrayofrelatedentries"></a>
<a id="tocsarrayofrelatedentries"></a>

```json
[
  {
    "domains": [
      "string"
    ],
    "id": "string",
    "language": "string",
    "regions": [
      "string"
    ],
    "registers": [
      "string"
    ],
    "text": "string"
  }
]
```

A list of written or spoken words

<h2 id="tocS_CategorizedTextList">CategorizedTextList</h2>
<!-- backwards compatibility -->
<a id="schemacategorizedtextlist"></a>
<a id="schema_CategorizedTextList"></a>
<a id="tocScategorizedtextlist"></a>
<a id="tocscategorizedtextlist"></a>

```json
[
  {
    "id": "string",
    "text": "string",
    "type": "string"
  }
]
```

various types of notes that appear

<h2 id="tocS_CrossReferencesList">CrossReferencesList</h2>
<!-- backwards compatibility -->
<a id="schemacrossreferenceslist"></a>
<a id="schema_CrossReferencesList"></a>
<a id="tocScrossreferenceslist"></a>
<a id="tocscrossreferenceslist"></a>

```json
[
  {
    "id": "string",
    "text": "string",
    "type": "string"
  }
]
```

A reference to another word that is closely related, might provide additional information about the subject, has a variant spelling or is an abbreviated form of it.

<h2 id="tocS_Entry">Entry</h2>
<!-- backwards compatibility -->
<a id="schemaentry"></a>
<a id="schema_Entry"></a>
<a id="tocSentry"></a>
<a id="tocsentry"></a>

```json
{
  "etymologies": [
    "string"
  ],
  "grammaticalFeatures": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "homographNumber": "string",
  "notes": [
    {
      "id": "string",
      "text": "string",
      "type": "string"
    }
  ],
  "pronunciations": [
    {
      "audioFile": "string",
      "dialects": [
        "string"
      ],
      "phoneticNotation": "string",
      "phoneticSpelling": "string",
      "regions": [
        "string"
      ]
    }
  ],
  "senses": [
    {
      "crossReferenceMarkers": [
        "string"
      ],
      "crossReferences": [
        {
          "id": "string",
          "text": "string",
          "type": "string"
        }
      ],
      "definitions": [
        "string"
      ],
      "domains": [
        "string"
      ],
      "examples": [
        {
          "definitions": [
            "string"
          ],
          "domains": [
            "string"
          ],
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "senseIds": [
            "string"
          ],
          "text": "string",
          "translations": [
            {
              "domains": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "language": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "id": "string",
      "notes": [
        {
          "id": "string",
          "text": "string",
          "type": "string"
        }
      ],
      "pronunciations": [
        {
          "audioFile": "string",
          "dialects": [
            "string"
          ],
          "phoneticNotation": "string",
          "phoneticSpelling": "string",
          "regions": [
            "string"
          ]
        }
      ],
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "short_definitions": [
        "string"
      ],
      "subsenses": [
        {}
      ],
      "thesaurusLinks": [
        {
          "entry_id": "string",
          "sense_id": "string"
        }
      ],
      "translations": [
        {
          "domains": [
            "string"
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ],
      "variantForms": [
        {
          "regions": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "variantForms": [
    {
      "regions": [
        "string"
      ],
      "text": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etymologies|[arrayofstrings](#schemaarrayofstrings)|false|none|none|
|grammaticalFeatures|[GrammaticalFeaturesList](#schemagrammaticalfeatureslist)|false|none|The different forms are correlated with meanings or functions which we text as 'features'|
|homographNumber|string|false|none|Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number.|
|notes|[CategorizedTextList](#schemacategorizedtextlist)|false|none|various types of notes that appear|
|pronunciations|[PronunciationsList](#schemapronunciationslist)|false|none|A list of possible pronunciations of a word|
|senses|[[Sense](#schemasense)]|false|none|Complete list of senses|
|variantForms|[VariantFormsList](#schemavariantformslist)|false|none|Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'|

<h2 id="tocS_ExamplesList">ExamplesList</h2>
<!-- backwards compatibility -->
<a id="schemaexampleslist"></a>
<a id="schema_ExamplesList"></a>
<a id="tocSexampleslist"></a>
<a id="tocsexampleslist"></a>

```json
[
  {
    "definitions": [
      "string"
    ],
    "domains": [
      "string"
    ],
    "notes": [
      {
        "id": "string",
        "text": "string",
        "type": "string"
      }
    ],
    "regions": [
      "string"
    ],
    "registers": [
      "string"
    ],
    "senseIds": [
      "string"
    ],
    "text": "string",
    "translations": [
      {
        "domains": [
          "string"
        ],
        "grammaticalFeatures": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "language": "string",
        "notes": [
          {
            "id": "string",
            "text": "string",
            "type": "string"
          }
        ],
        "regions": [
          "string"
        ],
        "registers": [
          "string"
        ],
        "text": "string"
      }
    ]
  }
]
```

A list of written or spoken rendering of examples of use of a word or text

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
{
  "metadata": {},
  "results": {
    "entries": [
      "string"
    ],
    "inflections": [
      "string"
    ],
    "translations": [
      "string"
    ],
    "wordlist": [
      "string"
    ]
  }
}
```

Schema for the Filters endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|object|false|none|A mapping of filters available per endpoints.|

<h2 id="tocS_GrammaticalFeaturesList">GrammaticalFeaturesList</h2>
<!-- backwards compatibility -->
<a id="schemagrammaticalfeatureslist"></a>
<a id="schema_GrammaticalFeaturesList"></a>
<a id="tocSgrammaticalfeatureslist"></a>
<a id="tocsgrammaticalfeatureslist"></a>

```json
[
  {
    "text": "string",
    "type": "string"
  }
]
```

The different forms are correlated with meanings or functions which we text as 'features'

<h2 id="tocS_HeadwordEntry">HeadwordEntry</h2>
<!-- backwards compatibility -->
<a id="schemaheadwordentry"></a>
<a id="schema_HeadwordEntry"></a>
<a id="tocSheadwordentry"></a>
<a id="tocsheadwordentry"></a>

```json
{
  "id": "string",
  "language": "string",
  "lexicalEntries": [
    {
      "derivativeOf": [
        {
          "domains": [
            "string"
          ],
          "id": "string",
          "language": "string",
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ],
      "derivatives": [
        {
          "domains": [
            "string"
          ],
          "id": "string",
          "language": "string",
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ],
      "entries": [
        {
          "etymologies": [
            "string"
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "homographNumber": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "pronunciations": [
            {
              "audioFile": "string",
              "dialects": [
                "string"
              ],
              "phoneticNotation": "string",
              "phoneticSpelling": "string",
              "regions": [
                "string"
              ]
            }
          ],
          "senses": [
            {
              "crossReferenceMarkers": [
                "string"
              ],
              "crossReferences": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "definitions": [
                "string"
              ],
              "domains": [
                "string"
              ],
              "examples": [
                {
                  "definitions": [
                    "string"
                  ],
                  "domains": [
                    "string"
                  ],
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "senseIds": [
                    "string"
                  ],
                  "text": "string",
                  "translations": [
                    {
                      "domains": [
                        "string"
                      ],
                      "grammaticalFeatures": [
                        {
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "language": "string",
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "id": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "pronunciations": [
                {
                  "audioFile": "string",
                  "dialects": [
                    "string"
                  ],
                  "phoneticNotation": "string",
                  "phoneticSpelling": "string",
                  "regions": [
                    "string"
                  ]
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "short_definitions": [
                "string"
              ],
              "subsenses": [
                {}
              ],
              "thesaurusLinks": [
                {
                  "entry_id": "string",
                  "sense_id": "string"
                }
              ],
              "translations": [
                {
                  "domains": [
                    "string"
                  ],
                  "grammaticalFeatures": [
                    {
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "language": "string",
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "text": "string"
                }
              ],
              "variantForms": [
                {
                  "regions": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "grammaticalFeatures": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "language": "string",
      "lexicalCategory": "string",
      "notes": [
        {
          "id": "string",
          "text": "string",
          "type": "string"
        }
      ],
      "pronunciations": [
        {
          "audioFile": "string",
          "dialects": [
            "string"
          ],
          "phoneticNotation": "string",
          "phoneticSpelling": "string",
          "regions": [
            "string"
          ]
        }
      ],
      "text": "string",
      "variantForms": [
        {
          "regions": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "pronunciations": [
    {
      "audioFile": "string",
      "dialects": [
        "string"
      ],
      "phoneticNotation": "string",
      "phoneticSpelling": "string",
      "regions": [
        "string"
      ]
    }
  ],
  "type": "string",
  "word": "string"
}
```

Description of a word

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The identifier of a word|
|language|string|true|none|IANA language code|
|lexicalEntries|[[lexicalEntry](#schemalexicalentry)]|true|none|A grouping of various senses in a specific language, and a lexical category that relates to a word|
|pronunciations|[PronunciationsList](#schemapronunciationslist)|false|none|A list of possible pronunciations of a word|
|type|string|false|none|The json object type. Could be 'headword', 'inflection' or 'phrase'|
|word|string|true|none|A given written or spoken realisation of a an entry, lowercased.|

<h2 id="tocS_HeadwordLemmatron">HeadwordLemmatron</h2>
<!-- backwards compatibility -->
<a id="schemaheadwordlemmatron"></a>
<a id="schema_HeadwordLemmatron"></a>
<a id="tocSheadwordlemmatron"></a>
<a id="tocsheadwordlemmatron"></a>

```json
{
  "id": "string",
  "language": "string",
  "lexicalEntries": [
    {
      "grammaticalFeatures": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "inflectionOf": [
        {
          "id": "string",
          "text": "string"
        }
      ],
      "language": "string",
      "lexicalCategory": "string",
      "text": "string"
    }
  ],
  "type": "string",
  "word": "string"
}
```

Description of an inflected form of a word

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The identifier of a word|
|language|string|true|none|IANA language code|
|lexicalEntries|[[LemmatronLexicalEntry](#schemalemmatronlexicalentry)]|true|none|A grouping of various senses in a specific language, and a lexical category that relates to a word|
|type|string|false|none|The json object type. Could be 'headword', 'inflection' or 'phrase'|
|word|string|true|none|A given written or spoken realisation of a an entry, lowercased.|

<h2 id="tocS_HeadwordThesaurus">HeadwordThesaurus</h2>
<!-- backwards compatibility -->
<a id="schemaheadwordthesaurus"></a>
<a id="schema_HeadwordThesaurus"></a>
<a id="tocSheadwordthesaurus"></a>
<a id="tocsheadwordthesaurus"></a>

```json
{
  "id": "string",
  "language": "string",
  "lexicalEntries": [
    {
      "entries": [
        {
          "homographNumber": "string",
          "senses": [
            {
              "antonyms": [
                {
                  "domains": [
                    "string"
                  ],
                  "id": "string",
                  "language": "string",
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "text": "string"
                }
              ],
              "domains": [
                "string"
              ],
              "examples": [
                {
                  "definitions": [
                    "string"
                  ],
                  "domains": [
                    "string"
                  ],
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "senseIds": [
                    "string"
                  ],
                  "text": "string",
                  "translations": [
                    {
                      "domains": [
                        "string"
                      ],
                      "grammaticalFeatures": [
                        {
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "language": "string",
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "id": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "subsenses": [
                {}
              ],
              "synonyms": [
                {
                  "domains": [
                    "string"
                  ],
                  "id": "string",
                  "language": "string",
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "language": "string",
      "lexicalCategory": "string",
      "text": "string",
      "variantForms": [
        {
          "regions": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "type": "string",
  "word": "string"
}
```

description of thesaurus information of a word

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The identifier of a word|
|language|string|true|none|IANA language code|
|lexicalEntries|[[ThesaurusLexicalEntry](#schemathesauruslexicalentry)]|true|none|A grouping of various senses in a specific language, and a lexical category that relates to a word|
|type|string|false|none|The json object type. Could be 'headword', 'inflection' or 'phrase'|
|word|string|true|none|A given written or spoken realisation of a an entry, lowercased.|

<h2 id="tocS_InflectionsList">InflectionsList</h2>
<!-- backwards compatibility -->
<a id="schemainflectionslist"></a>
<a id="schema_InflectionsList"></a>
<a id="tocSinflectionslist"></a>
<a id="tocsinflectionslist"></a>

```json
[
  {
    "id": "string",
    "text": "string"
  }
]
```

A grouping of the modifications of a word to express different grammatical categories

<h2 id="tocS_Languages">Languages</h2>
<!-- backwards compatibility -->
<a id="schemalanguages"></a>
<a id="schema_Languages"></a>
<a id="tocSlanguages"></a>
<a id="tocslanguages"></a>

```json
{
  "metadata": {},
  "results": [
    {
      "region": "string",
      "source": "string",
      "sourceLanguage": {
        "id": "string",
        "language": "string"
      },
      "targetLanguage": {
        "id": "string",
        "language": "string"
      },
      "type": "monolingual"
    }
  ]
}
```

Schema for the languages endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|[object]|false|none|A list of languages available.|

<h2 id="tocS_Lemmatron">Lemmatron</h2>
<!-- backwards compatibility -->
<a id="schemalemmatron"></a>
<a id="schema_Lemmatron"></a>
<a id="tocSlemmatron"></a>
<a id="tocslemmatron"></a>

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "inflectionOf": [
            {
              "id": "string",
              "text": "string"
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "text": "string"
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

Schema for the inflections endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|[[HeadwordLemmatron](#schemaheadwordlemmatron)]|false|none|A list of inflections matching a given word|

<h2 id="tocS_LemmatronLexicalEntry">LemmatronLexicalEntry</h2>
<!-- backwards compatibility -->
<a id="schemalemmatronlexicalentry"></a>
<a id="schema_LemmatronLexicalEntry"></a>
<a id="tocSlemmatronlexicalentry"></a>
<a id="tocslemmatronlexicalentry"></a>

```json
{
  "grammaticalFeatures": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "inflectionOf": [
    {
      "id": "string",
      "text": "string"
    }
  ],
  "language": "string",
  "lexicalCategory": "string",
  "text": "string"
}
```

Description of an entry for a particular part of speech and grammatical features

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grammaticalFeatures|[GrammaticalFeaturesList](#schemagrammaticalfeatureslist)|false|none|The different forms are correlated with meanings or functions which we text as 'features'|
|inflectionOf|[InflectionsList](#schemainflectionslist)|true|none|A grouping of the modifications of a word to express different grammatical categories|
|language|string|true|none|IANA language code|
|lexicalCategory|string|true|none|A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb|
|text|string|true|none|A given written or spoken realisation of a an entry.|

<h2 id="tocS_NgramsResult">NgramsResult</h2>
<!-- backwards compatibility -->
<a id="schemangramsresult"></a>
<a id="schema_NgramsResult"></a>
<a id="tocSngramsresult"></a>
<a id="tocsngramsresult"></a>

```json
{
  "metadata": {},
  "results": [
    {
      "frequency": 0,
      "tokens": [
        "string"
      ]
    }
  ]
}
```

Schema for corpus ngrams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|[object]|false|none|A list of found ngrams along with their frequencies|

<h2 id="tocS_PronunciationsList">PronunciationsList</h2>
<!-- backwards compatibility -->
<a id="schemapronunciationslist"></a>
<a id="schema_PronunciationsList"></a>
<a id="tocSpronunciationslist"></a>
<a id="tocspronunciationslist"></a>

```json
[
  {
    "audioFile": "string",
    "dialects": [
      "string"
    ],
    "phoneticNotation": "string",
    "phoneticSpelling": "string",
    "regions": [
      "string"
    ]
  }
]
```

A list of possible pronunciations of a word

<h2 id="tocS_Regions">Regions</h2>
<!-- backwards compatibility -->
<a id="schemaregions"></a>
<a id="schema_Regions"></a>
<a id="tocSregions"></a>
<a id="tocsregions"></a>

```json
{
  "metadata": {},
  "results": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

Schema for region endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|object|false|none|A mapping of regions available.|

<h2 id="tocS_RetrieveEntry">RetrieveEntry</h2>
<!-- backwards compatibility -->
<a id="schemaretrieveentry"></a>
<a id="schema_RetrieveEntry"></a>
<a id="tocSretrieveentry"></a>
<a id="tocsretrieveentry"></a>

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "derivativeOf": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "derivatives": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "entries": [
            {
              "etymologies": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "homographNumber": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "pronunciations": [
                {
                  "audioFile": "string",
                  "dialects": [
                    "string"
                  ],
                  "phoneticNotation": "string",
                  "phoneticSpelling": "string",
                  "regions": [
                    "string"
                  ]
                }
              ],
              "senses": [
                {
                  "crossReferenceMarkers": [
                    "string"
                  ],
                  "crossReferences": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "definitions": [
                    "string"
                  ],
                  "domains": [
                    "string"
                  ],
                  "examples": [
                    {
                      "definitions": [
                        "string"
                      ],
                      "domains": [
                        "string"
                      ],
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "senseIds": [
                        "string"
                      ],
                      "text": "string",
                      "translations": [
                        {
                          "domains": [
                            "string"
                          ],
                          "grammaticalFeatures": [
                            {
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "language": "string",
                          "notes": [
                            {
                              "id": "string",
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "regions": [
                            "string"
                          ],
                          "registers": [
                            "string"
                          ],
                          "text": "string"
                        }
                      ]
                    }
                  ],
                  "id": "string",
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "pronunciations": [
                    {
                      "audioFile": "string",
                      "dialects": [
                        "string"
                      ],
                      "phoneticNotation": "string",
                      "phoneticSpelling": "string",
                      "regions": [
                        "string"
                      ]
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "short_definitions": [
                    "string"
                  ],
                  "subsenses": [
                    {}
                  ],
                  "thesaurusLinks": [
                    {
                      "entry_id": "string",
                      "sense_id": "string"
                    }
                  ],
                  "translations": [
                    {
                      "domains": [
                        "string"
                      ],
                      "grammaticalFeatures": [
                        {
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "language": "string",
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ],
                  "variantForms": [
                    {
                      "regions": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "variantForms": [
                {
                  "regions": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "pronunciations": [
            {
              "audioFile": "string",
              "dialects": [
                "string"
              ],
              "phoneticNotation": "string",
              "phoneticSpelling": "string",
              "regions": [
                "string"
              ]
            }
          ],
          "text": "string",
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "pronunciations": [
        {
          "audioFile": "string",
          "dialects": [
            "string"
          ],
          "phoneticNotation": "string",
          "phoneticSpelling": "string",
          "regions": [
            "string"
          ]
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

Schema for the 'entries' endpoints

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|[[HeadwordEntry](#schemaheadwordentry)]|false|none|A list of entries and all the data related to them|

<h2 id="tocS_Sense">Sense</h2>
<!-- backwards compatibility -->
<a id="schemasense"></a>
<a id="schema_Sense"></a>
<a id="tocSsense"></a>
<a id="tocssense"></a>

```json
{
  "crossReferenceMarkers": [
    "string"
  ],
  "crossReferences": [
    {
      "id": "string",
      "text": "string",
      "type": "string"
    }
  ],
  "definitions": [
    "string"
  ],
  "domains": [
    "string"
  ],
  "examples": [
    {
      "definitions": [
        "string"
      ],
      "domains": [
        "string"
      ],
      "notes": [
        {
          "id": "string",
          "text": "string",
          "type": "string"
        }
      ],
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "senseIds": [
        "string"
      ],
      "text": "string",
      "translations": [
        {
          "domains": [
            "string"
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "id": "string",
  "notes": [
    {
      "id": "string",
      "text": "string",
      "type": "string"
    }
  ],
  "pronunciations": [
    {
      "audioFile": "string",
      "dialects": [
        "string"
      ],
      "phoneticNotation": "string",
      "phoneticSpelling": "string",
      "regions": [
        "string"
      ]
    }
  ],
  "regions": [
    "string"
  ],
  "registers": [
    "string"
  ],
  "short_definitions": [
    "string"
  ],
  "subsenses": [
    {
      "crossReferenceMarkers": [
        "string"
      ],
      "crossReferences": [
        {
          "id": "string",
          "text": "string",
          "type": "string"
        }
      ],
      "definitions": [
        "string"
      ],
      "domains": [
        "string"
      ],
      "examples": [
        {
          "definitions": [
            "string"
          ],
          "domains": [
            "string"
          ],
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "senseIds": [
            "string"
          ],
          "text": "string",
          "translations": [
            {
              "domains": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "language": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "id": "string",
      "notes": [
        {
          "id": "string",
          "text": "string",
          "type": "string"
        }
      ],
      "pronunciations": [
        {
          "audioFile": "string",
          "dialects": [
            "string"
          ],
          "phoneticNotation": "string",
          "phoneticSpelling": "string",
          "regions": [
            "string"
          ]
        }
      ],
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "short_definitions": [
        "string"
      ],
      "subsenses": [
        {}
      ],
      "thesaurusLinks": [
        {
          "entry_id": "string",
          "sense_id": "string"
        }
      ],
      "translations": [
        {
          "domains": [
            "string"
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ],
      "variantForms": [
        {
          "regions": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "thesaurusLinks": [
    {
      "entry_id": "string",
      "sense_id": "string"
    }
  ],
  "translations": [
    {
      "domains": [
        "string"
      ],
      "grammaticalFeatures": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "language": "string",
      "notes": [
        {
          "id": "string",
          "text": "string",
          "type": "string"
        }
      ],
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "text": "string"
    }
  ],
  "variantForms": [
    {
      "regions": [
        "string"
      ],
      "text": "string"
    }
  ]
}
```

A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crossReferenceMarkers|[arrayofstrings](#schemaarrayofstrings)|false|none|none|
|crossReferences|[CrossReferencesList](#schemacrossreferenceslist)|false|none|A reference to another word that is closely related, might provide additional information about the subject, has a variant spelling or is an abbreviated form of it.|
|definitions|[arrayofstrings](#schemaarrayofstrings)|false|none|none|
|domains|[arrayofstrings](#schemaarrayofstrings)|false|none|none|
|examples|[ExamplesList](#schemaexampleslist)|false|none|A list of written or spoken rendering of examples of use of a word or text|
|id|string|false|none|The id of the sense that is required for the delete procedure|
|notes|[CategorizedTextList](#schemacategorizedtextlist)|false|none|various types of notes that appear|
|pronunciations|[PronunciationsList](#schemapronunciationslist)|false|none|A list of possible pronunciations of a word|
|regions|[arrayofstrings](#schemaarrayofstrings)|false|none|none|
|registers|[arrayofstrings](#schemaarrayofstrings)|false|none|none|
|short_definitions|[arrayofstrings](#schemaarrayofstrings)|false|none|none|
|subsenses|[[Sense](#schemasense)]|false|none|Ordered list of subsenses of a sense|
|thesaurusLinks|[[thesaurusLink](#schemathesauruslink)]|false|none|Ordered list of links to the Thesaurus Dictionary|
|translations|[TranslationsList](#schematranslationslist)|false|none|A list of written or spoken rendering of the meaning of a word or text in another language(s)|
|variantForms|[VariantFormsList](#schemavariantformslist)|false|none|Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'|

<h2 id="tocS_SentencesEntry">SentencesEntry</h2>
<!-- backwards compatibility -->
<a id="schemasentencesentry"></a>
<a id="schema_SentencesEntry"></a>
<a id="tocSsentencesentry"></a>
<a id="tocssentencesentry"></a>

```json
{
  "id": "string",
  "language": "string",
  "lexicalEntries": [
    {
      "grammaticalFeatures": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "language": "string",
      "lexicalCategory": "string",
      "sentences": [
        {
          "definitions": [
            "string"
          ],
          "domains": [
            "string"
          ],
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "senseIds": [
            "string"
          ],
          "text": "string",
          "translations": [
            {
              "domains": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "language": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "text": "string"
    }
  ],
  "type": "string",
  "word": "string"
}
```

Description of a word

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The identifier of a word|
|language|string|true|none|IANA language code|
|lexicalEntries|[[SentencesLexicalEntry](#schemasentenceslexicalentry)]|true|none|A grouping of various senses in a specific language, and a lexical category that relates to a word|
|type|string|false|none|The json object type. Could be 'headword', 'inflection' or 'phrase'|
|word|string|true|none|A given written or spoken realisation of a an entry, lowercased.|

<h2 id="tocS_SentencesLexicalEntry">SentencesLexicalEntry</h2>
<!-- backwards compatibility -->
<a id="schemasentenceslexicalentry"></a>
<a id="schema_SentencesLexicalEntry"></a>
<a id="tocSsentenceslexicalentry"></a>
<a id="tocssentenceslexicalentry"></a>

```json
{
  "grammaticalFeatures": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "language": "string",
  "lexicalCategory": "string",
  "sentences": [
    {
      "definitions": [
        "string"
      ],
      "domains": [
        "string"
      ],
      "notes": [
        {
          "id": "string",
          "text": "string",
          "type": "string"
        }
      ],
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "senseIds": [
        "string"
      ],
      "text": "string",
      "translations": [
        {
          "domains": [
            "string"
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "text": "string"
}
```

Description of an entry for a particular part of speech

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grammaticalFeatures|[GrammaticalFeaturesList](#schemagrammaticalfeatureslist)|false|none|The different forms are correlated with meanings or functions which we text as 'features'|
|language|string|true|none|IANA language code|
|lexicalCategory|string|false|none|A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb|
|sentences|[ExamplesList](#schemaexampleslist)|true|none|A list of written or spoken rendering of examples of use of a word or text|
|text|string|true|none|A given written or spoken realisation of a an entry.|

<h2 id="tocS_SentencesResults">SentencesResults</h2>
<!-- backwards compatibility -->
<a id="schemasentencesresults"></a>
<a id="schema_SentencesResults"></a>
<a id="tocSsentencesresults"></a>
<a id="tocssentencesresults"></a>

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "sentences": [
            {
              "definitions": [
                "string"
              ],
              "domains": [
                "string"
              ],
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "senseIds": [
                "string"
              ],
              "text": "string",
              "translations": [
                {
                  "domains": [
                    "string"
                  ],
                  "grammaticalFeatures": [
                    {
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "language": "string",
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "text": "string"
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

Schema for the 'sentences' endpoint

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|[[SentencesEntry](#schemasentencesentry)]|false|none|A list of entries and all the data related to them|

<h2 id="tocS_StatsWordResult">StatsWordResult</h2>
<!-- backwards compatibility -->
<a id="schemastatswordresult"></a>
<a id="schema_StatsWordResult"></a>
<a id="tocSstatswordresult"></a>
<a id="tocsstatswordresult"></a>

```json
{
  "metadata": {},
  "result": {
    "frequency": 0,
    "lemma": "string",
    "lexicalCategory": "string",
    "matchCount": 0,
    "normalizedFrequency": 0,
    "trueCase": "string",
    "wordform": "string"
  }
}
```

Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a frequency

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|result|object|false|none|Frequency information for a given entity|

<h2 id="tocS_StatsWordResultList">StatsWordResultList</h2>
<!-- backwards compatibility -->
<a id="schemastatswordresultlist"></a>
<a id="schema_StatsWordResultList"></a>
<a id="tocSstatswordresultlist"></a>
<a id="tocsstatswordresultlist"></a>

```json
{
  "metadata": {},
  "results": [
    {
      "frequency": 0,
      "lemma": "string",
      "lexicalCategory": "string",
      "normalizedFrequency": 0,
      "trueCase": "string",
      "wordform": "string"
    }
  ]
}
```

Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a list of frequencies per wordform-trueCase-lemma-lexicalCategory entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|[object]|false|none|A list of found words along with their frequencies|

<h2 id="tocS_SynonymsAntonyms">SynonymsAntonyms</h2>
<!-- backwards compatibility -->
<a id="schemasynonymsantonyms"></a>
<a id="schema_SynonymsAntonyms"></a>
<a id="tocSsynonymsantonyms"></a>
<a id="tocssynonymsantonyms"></a>

```json
[
  {
    "domains": [
      "string"
    ],
    "id": "string",
    "language": "string",
    "regions": [
      "string"
    ],
    "registers": [
      "string"
    ],
    "text": "string"
  }
]
```

<h2 id="tocS_Thesaurus">Thesaurus</h2>
<!-- backwards compatibility -->
<a id="schemathesaurus"></a>
<a id="schema_Thesaurus"></a>
<a id="tocSthesaurus"></a>
<a id="tocsthesaurus"></a>

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "language": "string",
      "lexicalEntries": [
        {
          "entries": [
            {
              "homographNumber": "string",
              "senses": [
                {
                  "antonyms": [
                    {
                      "domains": [
                        "string"
                      ],
                      "id": "string",
                      "language": "string",
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ],
                  "domains": [
                    "string"
                  ],
                  "examples": [
                    {
                      "definitions": [
                        "string"
                      ],
                      "domains": [
                        "string"
                      ],
                      "notes": [
                        {
                          "id": "string",
                          "text": "string",
                          "type": "string"
                        }
                      ],
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "senseIds": [
                        "string"
                      ],
                      "text": "string",
                      "translations": [
                        {
                          "domains": [
                            "string"
                          ],
                          "grammaticalFeatures": [
                            {
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "language": "string",
                          "notes": [
                            {
                              "id": "string",
                              "text": "string",
                              "type": "string"
                            }
                          ],
                          "regions": [
                            "string"
                          ],
                          "registers": [
                            "string"
                          ],
                          "text": "string"
                        }
                      ]
                    }
                  ],
                  "id": "string",
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "subsenses": [
                    {}
                  ],
                  "synonyms": [
                    {
                      "domains": [
                        "string"
                      ],
                      "id": "string",
                      "language": "string",
                      "regions": [
                        "string"
                      ],
                      "registers": [
                        "string"
                      ],
                      "text": "string"
                    }
                  ]
                }
              ],
              "variantForms": [
                {
                  "regions": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "language": "string",
          "lexicalCategory": "string",
          "text": "string",
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "type": "string",
      "word": "string"
    }
  ]
}
```

Schema for thesaurus endpoint

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|[[HeadwordThesaurus](#schemaheadwordthesaurus)]|false|none|A list of found synonyms or antonyms|

<h2 id="tocS_ThesaurusEntry">ThesaurusEntry</h2>
<!-- backwards compatibility -->
<a id="schemathesaurusentry"></a>
<a id="schema_ThesaurusEntry"></a>
<a id="tocSthesaurusentry"></a>
<a id="tocsthesaurusentry"></a>

```json
{
  "homographNumber": "string",
  "senses": [
    {
      "antonyms": [
        {
          "domains": [
            "string"
          ],
          "id": "string",
          "language": "string",
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ],
      "domains": [
        "string"
      ],
      "examples": [
        {
          "definitions": [
            "string"
          ],
          "domains": [
            "string"
          ],
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "senseIds": [
            "string"
          ],
          "text": "string",
          "translations": [
            {
              "domains": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "language": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "id": "string",
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "subsenses": [
        {}
      ],
      "synonyms": [
        {
          "domains": [
            "string"
          ],
          "id": "string",
          "language": "string",
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "variantForms": [
    {
      "regions": [
        "string"
      ],
      "text": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|homographNumber|string|false|none|Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number.|
|senses|[[ThesaurusSense](#schemathesaurussense)]|false|none|Complete list of senses|
|variantForms|[VariantFormsList](#schemavariantformslist)|false|none|Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'|

<h2 id="tocS_ThesaurusLexicalEntry">ThesaurusLexicalEntry</h2>
<!-- backwards compatibility -->
<a id="schemathesauruslexicalentry"></a>
<a id="schema_ThesaurusLexicalEntry"></a>
<a id="tocSthesauruslexicalentry"></a>
<a id="tocsthesauruslexicalentry"></a>

```json
{
  "entries": [
    {
      "homographNumber": "string",
      "senses": [
        {
          "antonyms": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "domains": [
            "string"
          ],
          "examples": [
            {
              "definitions": [
                "string"
              ],
              "domains": [
                "string"
              ],
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "senseIds": [
                "string"
              ],
              "text": "string",
              "translations": [
                {
                  "domains": [
                    "string"
                  ],
                  "grammaticalFeatures": [
                    {
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "language": "string",
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "id": "string",
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "subsenses": [
            {}
          ],
          "synonyms": [
            {
              "domains": [
                "string"
              ],
              "id": "string",
              "language": "string",
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "variantForms": [
        {
          "regions": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "language": "string",
  "lexicalCategory": "string",
  "text": "string",
  "variantForms": [
    {
      "regions": [
        "string"
      ],
      "text": "string"
    }
  ]
}
```

Description of an entry for a particular part of speech

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ThesaurusEntry](#schemathesaurusentry)]|false|none|none|
|language|string|true|none|IANA language code|
|lexicalCategory|string|true|none|A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb|
|text|string|true|none|A given written or spoken realisation of a an entry.|
|variantForms|[VariantFormsList](#schemavariantformslist)|false|none|Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'|

<h2 id="tocS_ThesaurusSense">ThesaurusSense</h2>
<!-- backwards compatibility -->
<a id="schemathesaurussense"></a>
<a id="schema_ThesaurusSense"></a>
<a id="tocSthesaurussense"></a>
<a id="tocsthesaurussense"></a>

```json
{
  "antonyms": [
    {
      "domains": [
        "string"
      ],
      "id": "string",
      "language": "string",
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "text": "string"
    }
  ],
  "domains": [
    "string"
  ],
  "examples": [
    {
      "definitions": [
        "string"
      ],
      "domains": [
        "string"
      ],
      "notes": [
        {
          "id": "string",
          "text": "string",
          "type": "string"
        }
      ],
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "senseIds": [
        "string"
      ],
      "text": "string",
      "translations": [
        {
          "domains": [
            "string"
          ],
          "grammaticalFeatures": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "language": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "id": "string",
  "regions": [
    "string"
  ],
  "registers": [
    "string"
  ],
  "subsenses": [
    {
      "antonyms": [
        {
          "domains": [
            "string"
          ],
          "id": "string",
          "language": "string",
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ],
      "domains": [
        "string"
      ],
      "examples": [
        {
          "definitions": [
            "string"
          ],
          "domains": [
            "string"
          ],
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "senseIds": [
            "string"
          ],
          "text": "string",
          "translations": [
            {
              "domains": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "language": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "id": "string",
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "subsenses": [
        {}
      ],
      "synonyms": [
        {
          "domains": [
            "string"
          ],
          "id": "string",
          "language": "string",
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "synonyms": [
    {
      "domains": [
        "string"
      ],
      "id": "string",
      "language": "string",
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "text": "string"
    }
  ]
}
```

A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antonyms|[SynonymsAntonyms](#schemasynonymsantonyms)|false|none|none|
|domains|[arrayofstrings](#schemaarrayofstrings)|false|none|none|
|examples|[ExamplesList](#schemaexampleslist)|false|none|A list of written or spoken rendering of examples of use of a word or text|
|id|string|false|none|The id of the sense that is required for the delete procedure|
|regions|[arrayofstrings](#schemaarrayofstrings)|false|none|none|
|registers|[arrayofstrings](#schemaarrayofstrings)|false|none|none|
|subsenses|[[ThesaurusSense](#schemathesaurussense)]|false|none|subsenses of word|
|synonyms|[SynonymsAntonyms](#schemasynonymsantonyms)|false|none|none|

<h2 id="tocS_TranslationsList">TranslationsList</h2>
<!-- backwards compatibility -->
<a id="schematranslationslist"></a>
<a id="schema_TranslationsList"></a>
<a id="tocStranslationslist"></a>
<a id="tocstranslationslist"></a>

```json
[
  {
    "domains": [
      "string"
    ],
    "grammaticalFeatures": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "language": "string",
    "notes": [
      {
        "id": "string",
        "text": "string",
        "type": "string"
      }
    ],
    "regions": [
      "string"
    ],
    "registers": [
      "string"
    ],
    "text": "string"
  }
]
```

A list of written or spoken rendering of the meaning of a word or text in another language(s)

<h2 id="tocS_UtilityLabels">UtilityLabels</h2>
<!-- backwards compatibility -->
<a id="schemautilitylabels"></a>
<a id="schema_UtilityLabels"></a>
<a id="tocSutilitylabels"></a>
<a id="tocsutilitylabels"></a>

```json
{
  "metadata": {},
  "results": {
    "property1": {
      "en": "string"
    },
    "property2": {
      "en": "string"
    }
  }
}
```

Schema for lexicalcategories, registers utility endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|object|false|none|Mapping of labels available.|

<h2 id="tocS_VariantFormsList">VariantFormsList</h2>
<!-- backwards compatibility -->
<a id="schemavariantformslist"></a>
<a id="schema_VariantFormsList"></a>
<a id="tocSvariantformslist"></a>
<a id="tocsvariantformslist"></a>

```json
[
  {
    "regions": [
      "string"
    ],
    "text": "string"
  }
]
```

Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'

<h2 id="tocS_Wordlist">Wordlist</h2>
<!-- backwards compatibility -->
<a id="schemawordlist"></a>
<a id="schema_Wordlist"></a>
<a id="tocSwordlist"></a>
<a id="tocswordlist"></a>

```json
{
  "metadata": {},
  "results": [
    {
      "id": "string",
      "matchString": "string",
      "matchType": "string",
      "region": "string",
      "word": "string"
    }
  ]
}
```

Schema for wordlist endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional Information provided by OUP|
|results|[object]|false|none|A list of found words|

<h2 id="tocS_arrayofstrings">arrayofstrings</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofstrings"></a>
<a id="schema_arrayofstrings"></a>
<a id="tocSarrayofstrings"></a>
<a id="tocsarrayofstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_lexicalEntry">lexicalEntry</h2>
<!-- backwards compatibility -->
<a id="schemalexicalentry"></a>
<a id="schema_lexicalEntry"></a>
<a id="tocSlexicalentry"></a>
<a id="tocslexicalentry"></a>

```json
{
  "derivativeOf": [
    {
      "domains": [
        "string"
      ],
      "id": "string",
      "language": "string",
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "text": "string"
    }
  ],
  "derivatives": [
    {
      "domains": [
        "string"
      ],
      "id": "string",
      "language": "string",
      "regions": [
        "string"
      ],
      "registers": [
        "string"
      ],
      "text": "string"
    }
  ],
  "entries": [
    {
      "etymologies": [
        "string"
      ],
      "grammaticalFeatures": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "homographNumber": "string",
      "notes": [
        {
          "id": "string",
          "text": "string",
          "type": "string"
        }
      ],
      "pronunciations": [
        {
          "audioFile": "string",
          "dialects": [
            "string"
          ],
          "phoneticNotation": "string",
          "phoneticSpelling": "string",
          "regions": [
            "string"
          ]
        }
      ],
      "senses": [
        {
          "crossReferenceMarkers": [
            "string"
          ],
          "crossReferences": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "definitions": [
            "string"
          ],
          "domains": [
            "string"
          ],
          "examples": [
            {
              "definitions": [
                "string"
              ],
              "domains": [
                "string"
              ],
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "senseIds": [
                "string"
              ],
              "text": "string",
              "translations": [
                {
                  "domains": [
                    "string"
                  ],
                  "grammaticalFeatures": [
                    {
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "language": "string",
                  "notes": [
                    {
                      "id": "string",
                      "text": "string",
                      "type": "string"
                    }
                  ],
                  "regions": [
                    "string"
                  ],
                  "registers": [
                    "string"
                  ],
                  "text": "string"
                }
              ]
            }
          ],
          "id": "string",
          "notes": [
            {
              "id": "string",
              "text": "string",
              "type": "string"
            }
          ],
          "pronunciations": [
            {
              "audioFile": "string",
              "dialects": [
                "string"
              ],
              "phoneticNotation": "string",
              "phoneticSpelling": "string",
              "regions": [
                "string"
              ]
            }
          ],
          "regions": [
            "string"
          ],
          "registers": [
            "string"
          ],
          "short_definitions": [
            "string"
          ],
          "subsenses": [
            {}
          ],
          "thesaurusLinks": [
            {
              "entry_id": "string",
              "sense_id": "string"
            }
          ],
          "translations": [
            {
              "domains": [
                "string"
              ],
              "grammaticalFeatures": [
                {
                  "text": "string",
                  "type": "string"
                }
              ],
              "language": "string",
              "notes": [
                {
                  "id": "string",
                  "text": "string",
                  "type": "string"
                }
              ],
              "regions": [
                "string"
              ],
              "registers": [
                "string"
              ],
              "text": "string"
            }
          ],
          "variantForms": [
            {
              "regions": [
                "string"
              ],
              "text": "string"
            }
          ]
        }
      ],
      "variantForms": [
        {
          "regions": [
            "string"
          ],
          "text": "string"
        }
      ]
    }
  ],
  "grammaticalFeatures": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "language": "string",
  "lexicalCategory": "string",
  "notes": [
    {
      "id": "string",
      "text": "string",
      "type": "string"
    }
  ],
  "pronunciations": [
    {
      "audioFile": "string",
      "dialects": [
        "string"
      ],
      "phoneticNotation": "string",
      "phoneticSpelling": "string",
      "regions": [
        "string"
      ]
    }
  ],
  "text": "string",
  "variantForms": [
    {
      "regions": [
        "string"
      ],
      "text": "string"
    }
  ]
}
```

Description of an entry for a particular part of speech

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|derivativeOf|[ArrayOfRelatedEntries](#schemaarrayofrelatedentries)|false|none|A list of written or spoken words|
|derivatives|[ArrayOfRelatedEntries](#schemaarrayofrelatedentries)|false|none|A list of written or spoken words|
|entries|[[Entry](#schemaentry)]|false|none|none|
|grammaticalFeatures|[GrammaticalFeaturesList](#schemagrammaticalfeatureslist)|false|none|The different forms are correlated with meanings or functions which we text as 'features'|
|language|string|true|none|IANA language code|
|lexicalCategory|string|true|none|A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb|
|notes|[CategorizedTextList](#schemacategorizedtextlist)|false|none|various types of notes that appear|
|pronunciations|[PronunciationsList](#schemapronunciationslist)|false|none|A list of possible pronunciations of a word|
|text|string|true|none|A given written or spoken realisation of a an entry.|
|variantForms|[VariantFormsList](#schemavariantformslist)|false|none|Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'|

<h2 id="tocS_thesaurusLink">thesaurusLink</h2>
<!-- backwards compatibility -->
<a id="schemathesauruslink"></a>
<a id="schema_thesaurusLink"></a>
<a id="tocSthesauruslink"></a>
<a id="tocsthesauruslink"></a>

```json
{
  "entry_id": "string",
  "sense_id": "string"
}
```

Link to a sense of a specific entry in the thesaurus Dictionary

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entry_id|string|true|none|identifier of a word|
|sense_id|string|true|none|identifier of a sense|
