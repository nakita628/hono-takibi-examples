<h1 id="getbible-json-api">getBible JSON API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Static JSON files of Bible translations built from the Crosswire modules

Every resource is a static file in a fixed tree: a translation (`{abbreviation}.json`), one of its books (`{abbreviation}/{book}.json`) or one of its chapters (`{abbreviation}/{book}/{chapter}.json`), and at every level an index of what is available (`translations`, `books`, `chapters`) with a checksum index (`checksum`), each as JSON (`.json`) and as tab-separated text (`.txt`). Every JSON file, the indexes and this document included, has a `.sha` file beside it holding its SHA-1 checksum. The files take no parameters. The checksums identify a build: a changed checksum means the file was rebuilt from an updated module.

Base URLs:

* <a href="https://api.getbible.net/v2">https://api.getbible.net/v2</a> - Root of the tree

Web: <a href="https://getbible.net">getBible</a> 

<h1 id="getbible-json-api-translations">translations</h1>

The translations in the tree and their complete text

## Index of the translations

<a id="opIdlistTranslations"></a>

> Code samples

```bash
curl https://api.getbible.net/translations.json \
  -H 'Accept: application/json'
```

`GET /translations.json`

Every translation in the tree with its details and checksum, keyed by abbreviation.

> Example responses

> 200 Response

```json
{
  "property1": {
    "translation": "string",
    "abbreviation": "string",
    "description": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "distribution_lcsh": "string",
    "distribution_version": "string",
    "distribution_version_date": "string",
    "distribution_abbreviation": "string",
    "distribution_about": "string",
    "distribution_license": "string",
    "distribution_sourcetype": "string",
    "distribution_source": "string",
    "distribution_versification": "string",
    "distribution_history": {
      "property1": "string",
      "property2": "string"
    },
    "url": "http://example.com",
    "sha": "string"
  },
  "property2": {
    "translation": "string",
    "abbreviation": "string",
    "description": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "distribution_lcsh": "string",
    "distribution_version": "string",
    "distribution_version_date": "string",
    "distribution_abbreviation": "string",
    "distribution_about": "string",
    "distribution_license": "string",
    "distribution_sourcetype": "string",
    "distribution_source": "string",
    "distribution_versification": "string",
    "distribution_history": {
      "property1": "string",
      "property2": "string"
    },
    "url": "http://example.com",
    "sha": "string"
  }
}
```

<h3 id="index-of-the-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index of the translations|[TranslationIndex](#schematranslationindex)|

<aside class="success">
This operation does not require authentication
</aside>

## Index of the translations as text

<a id="opIdlistTranslationsText"></a>

> Code samples

```bash
curl https://api.getbible.net/translations.txt
```

`GET /translations.txt`

Every translation in the tree, one per line, with the columns: #, language, translation, abbreviation, direction, filename, sha.

<h3 id="index-of-the-translations-as-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index of the translations as text|[TabSeparatedIndex](#schematabseparatedindex)|

<aside class="success">
This operation does not require authentication
</aside>

## A complete translation

<a id="opIdgetTranslation"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv.json \
  -H 'Accept: application/json'
```

`GET /{abbreviation}.json`

The whole translation: every book with every chapter and verse, and the details of the source module.

<h3 id="a-complete-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

> Example responses

> 200 Response

```json
{
  "translation": "string",
  "abbreviation": "string",
  "description": "string",
  "lang": "string",
  "language": "string",
  "direction": "LTR",
  "encoding": "string",
  "books": [
    {
      "nr": 1,
      "name": "string",
      "chapters": [
        {
          "chapter": 1,
          "name": "string",
          "verses": [
            {
              "chapter": 1,
              "verse": 1,
              "name": "string",
              "text": "string"
            }
          ]
        }
      ]
    }
  ],
  "distribution_lcsh": "string",
  "distribution_version": "string",
  "distribution_version_date": "string",
  "distribution_abbreviation": "string",
  "distribution_about": "string",
  "distribution_license": "string",
  "distribution_sourcetype": "string",
  "distribution_source": "string",
  "distribution_versification": "string",
  "distribution_history": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="a-complete-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A complete translation|[Translation](#schematranslation)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="getbible-json-api-books">books</h1>

The books of a translation

## Index of the books of a translation

<a id="opIdlistBooks"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/books.json \
  -H 'Accept: application/json'
```

`GET /{abbreviation}/books.json`

Every book of the translation with its details and checksum, keyed by book number.

<h3 id="index-of-the-books-of-a-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

> Example responses

> 200 Response

```json
{
  "property1": {
    "translation": "string",
    "abbreviation": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "nr": 1,
    "name": "string",
    "url": "http://example.com",
    "sha": "string"
  },
  "property2": {
    "translation": "string",
    "abbreviation": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "nr": 1,
    "name": "string",
    "url": "http://example.com",
    "sha": "string"
  }
}
```

<h3 id="index-of-the-books-of-a-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index of the books of a translation|[BookIndex](#schemabookindex)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Index of the books of a translation as text

<a id="opIdlistBooksText"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/books.txt
```

`GET /{abbreviation}/books.txt`

Every book of the translation, one per line, with the columns: #, language, translation, abbreviation, direction, name, filename, sha.

<h3 id="index-of-the-books-of-a-translation-as-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="index-of-the-books-of-a-translation-as-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index of the books of a translation as text|[TabSeparatedIndex](#schematabseparatedindex)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## A complete book

<a id="opIdgetBook"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/1.json \
  -H 'Accept: application/json'
```

`GET /{abbreviation}/{book}.json`

One book of the translation with every chapter and verse.

<h3 id="a-complete-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|
|book|path|integer|true|Book number, as listed in the books.json of the translation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

> Example responses

> 200 Response

```json
{
  "translation": "string",
  "abbreviation": "string",
  "lang": "string",
  "language": "string",
  "direction": "LTR",
  "encoding": "string",
  "nr": 1,
  "name": "string",
  "chapters": [
    {
      "chapter": 1,
      "name": "string",
      "verses": [
        {
          "chapter": 1,
          "verse": 1,
          "name": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

<h3 id="a-complete-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A complete book|[Book](#schemabook)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="getbible-json-api-chapters">chapters</h1>

The chapters of a book

## Index of the chapters of a book

<a id="opIdlistChapters"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/1/chapters.json \
  -H 'Accept: application/json'
```

`GET /{abbreviation}/{book}/chapters.json`

Every chapter of the book with its details and checksum, keyed by chapter number.

<h3 id="index-of-the-chapters-of-a-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|
|book|path|integer|true|Book number, as listed in the books.json of the translation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

> Example responses

> 200 Response

```json
{
  "property1": {
    "translation": "string",
    "abbreviation": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "book_nr": 1,
    "book_name": "string",
    "chapter": 1,
    "name": "string",
    "url": "http://example.com",
    "sha": "string"
  },
  "property2": {
    "translation": "string",
    "abbreviation": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "book_nr": 1,
    "book_name": "string",
    "chapter": 1,
    "name": "string",
    "url": "http://example.com",
    "sha": "string"
  }
}
```

<h3 id="index-of-the-chapters-of-a-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index of the chapters of a book|[ChapterIndex](#schemachapterindex)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Index of the chapters of a book as text

<a id="opIdlistChaptersText"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/1/chapters.txt
```

`GET /{abbreviation}/{book}/chapters.txt`

Every chapter of the book, one per line, with the columns: #, language, translation, abbreviation, textdirection, book_nr, book_name, filename, sha.

<h3 id="index-of-the-chapters-of-a-book-as-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|
|book|path|integer|true|Book number, as listed in the books.json of the translation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="index-of-the-chapters-of-a-book-as-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index of the chapters of a book as text|[TabSeparatedIndex](#schematabseparatedindex)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## A complete chapter

<a id="opIdgetChapter"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/1/1.json \
  -H 'Accept: application/json'
```

`GET /{abbreviation}/{book}/{chapter}.json`

One chapter of a book with every verse.

<h3 id="a-complete-chapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|
|book|path|integer|true|Book number, as listed in the books.json of the translation|
|chapter|path|integer|true|Chapter number, as listed in the chapters.json of the book|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

> Example responses

> 200 Response

```json
{
  "translation": "string",
  "abbreviation": "string",
  "lang": "string",
  "language": "string",
  "direction": "LTR",
  "encoding": "string",
  "book_nr": 1,
  "book_name": "string",
  "chapter": 1,
  "name": "string",
  "verses": [
    {
      "chapter": 1,
      "verse": 1,
      "name": "string",
      "text": "string"
    }
  ]
}
```

<h3 id="a-complete-chapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A complete chapter|[Chapter](#schemachapter)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="getbible-json-api-checksums">checksums</h1>

SHA-1 checksums of the files, to detect changes between builds

## Checksum of the index of the translations

<a id="opIdgetTranslationIndexChecksum"></a>

> Code samples

```bash
curl https://api.getbible.net/translations.sha
```

`GET /translations.sha`

The SHA-1 checksum of translations.json.

<h3 id="checksum-of-the-index-of-the-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksum of the index of the translations|[Sha1File](#schemasha1file)|

<aside class="success">
This operation does not require authentication
</aside>

## Checksums of the translations

<a id="opIdlistTranslationChecksums"></a>

> Code samples

```bash
curl https://api.getbible.net/checksum.json \
  -H 'Accept: application/json'
```

`GET /checksum.json`

The SHA-1 checksum of every translation file, keyed by abbreviation.

> Example responses

> 200 Response

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="checksums-of-the-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksums of the translations|[ChecksumIndex](#schemachecksumindex)|

<aside class="success">
This operation does not require authentication
</aside>

## Checksums of the translations as text

<a id="opIdlistTranslationChecksumsText"></a>

> Code samples

```bash
curl https://api.getbible.net/checksum.txt
```

`GET /checksum.txt`

The SHA-1 checksum of every translation file, one per line, with the columns: #, filename, sha.

<h3 id="checksums-of-the-translations-as-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksums of the translations as text|[TabSeparatedIndex](#schematabseparatedindex)|

<aside class="success">
This operation does not require authentication
</aside>

## Checksum of the checksums of the translations

<a id="opIdgetTranslationChecksumIndexChecksum"></a>

> Code samples

```bash
curl https://api.getbible.net/checksum.sha
```

`GET /checksum.sha`

The SHA-1 checksum of checksum.json.

<h3 id="checksum-of-the-checksums-of-the-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksum of the checksums of the translations|[Sha1File](#schemasha1file)|

<aside class="success">
This operation does not require authentication
</aside>

## Checksum of a translation

<a id="opIdgetTranslationChecksum"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv.sha
```

`GET /{abbreviation}.sha`

The SHA-1 checksum of the translation file.

<h3 id="checksum-of-a-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="checksum-of-a-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksum of a translation|[Sha1File](#schemasha1file)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksum of the index of the books of a translation

<a id="opIdgetBookIndexChecksum"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/books.sha
```

`GET /{abbreviation}/books.sha`

The SHA-1 checksum of the books.json of the translation.

<h3 id="checksum-of-the-index-of-the-books-of-a-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="checksum-of-the-index-of-the-books-of-a-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksum of the index of the books of a translation|[Sha1File](#schemasha1file)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksums of the books of a translation

<a id="opIdlistBookChecksums"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/checksum.json \
  -H 'Accept: application/json'
```

`GET /{abbreviation}/checksum.json`

The SHA-1 checksum of every book file of the translation, keyed by book number.

<h3 id="checksums-of-the-books-of-a-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

> Example responses

> 200 Response

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="checksums-of-the-books-of-a-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksums of the books of a translation|[ChecksumIndex](#schemachecksumindex)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksums of the books of a translation as text

<a id="opIdlistBookChecksumsText"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/checksum.txt
```

`GET /{abbreviation}/checksum.txt`

The SHA-1 checksum of every book file of the translation, one per line, with the columns: #, filename, sha.

<h3 id="checksums-of-the-books-of-a-translation-as-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="checksums-of-the-books-of-a-translation-as-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksums of the books of a translation as text|[TabSeparatedIndex](#schematabseparatedindex)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksum of the checksums of the books of a translation

<a id="opIdgetBookChecksumIndexChecksum"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/checksum.sha
```

`GET /{abbreviation}/checksum.sha`

The SHA-1 checksum of the checksum.json of the translation.

<h3 id="checksum-of-the-checksums-of-the-books-of-a-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="checksum-of-the-checksums-of-the-books-of-a-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksum of the checksums of the books of a translation|[Sha1File](#schemasha1file)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksum of a book

<a id="opIdgetBookChecksum"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/1.sha
```

`GET /{abbreviation}/{book}.sha`

The SHA-1 checksum of the book file.

<h3 id="checksum-of-a-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|
|book|path|integer|true|Book number, as listed in the books.json of the translation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="checksum-of-a-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksum of a book|[Sha1File](#schemasha1file)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksum of the index of the chapters of a book

<a id="opIdgetChapterIndexChecksum"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/1/chapters.sha
```

`GET /{abbreviation}/{book}/chapters.sha`

The SHA-1 checksum of the chapters.json of the book.

<h3 id="checksum-of-the-index-of-the-chapters-of-a-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|
|book|path|integer|true|Book number, as listed in the books.json of the translation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="checksum-of-the-index-of-the-chapters-of-a-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksum of the index of the chapters of a book|[Sha1File](#schemasha1file)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksums of the chapters of a book

<a id="opIdlistChapterChecksums"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/1/checksum.json \
  -H 'Accept: application/json'
```

`GET /{abbreviation}/{book}/checksum.json`

The SHA-1 checksum of every chapter file of the book, keyed by chapter number.

<h3 id="checksums-of-the-chapters-of-a-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|
|book|path|integer|true|Book number, as listed in the books.json of the translation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

> Example responses

> 200 Response

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="checksums-of-the-chapters-of-a-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksums of the chapters of a book|[ChecksumIndex](#schemachecksumindex)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksums of the chapters of a book as text

<a id="opIdlistChapterChecksumsText"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/1/checksum.txt
```

`GET /{abbreviation}/{book}/checksum.txt`

The SHA-1 checksum of every chapter file of the book, one per line, with the columns: #, filename, sha.

<h3 id="checksums-of-the-chapters-of-a-book-as-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|
|book|path|integer|true|Book number, as listed in the books.json of the translation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="checksums-of-the-chapters-of-a-book-as-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksums of the chapters of a book as text|[TabSeparatedIndex](#schematabseparatedindex)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksum of the checksums of the chapters of a book

<a id="opIdgetChapterChecksumIndexChecksum"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/1/checksum.sha
```

`GET /{abbreviation}/{book}/checksum.sha`

The SHA-1 checksum of the checksum.json of the book.

<h3 id="checksum-of-the-checksums-of-the-chapters-of-a-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|
|book|path|integer|true|Book number, as listed in the books.json of the translation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="checksum-of-the-checksums-of-the-chapters-of-a-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksum of the checksums of the chapters of a book|[Sha1File](#schemasha1file)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksum of a chapter

<a id="opIdgetChapterChecksum"></a>

> Code samples

```bash
curl https://api.getbible.net/kjv/1/1.sha
```

`GET /{abbreviation}/{book}/{chapter}.sha`

The SHA-1 checksum of the chapter file.

<h3 id="checksum-of-a-chapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abbreviation|path|string|true|Abbreviation of the translation, as listed in translations.json|
|book|path|integer|true|Book number, as listed in the books.json of the translation|
|chapter|path|integer|true|Chapter number, as listed in the chapters.json of the book|

#### Enumerated Values

|Parameter|Value|
|---|---|
|abbreviation|akjv|
|abbreviation|alb|
|abbreviation|aleppo|
|abbreviation|almeida|
|abbreviation|aov|
|abbreviation|arabicsv|
|abbreviation|asv|
|abbreviation|basicenglish|
|abbreviation|basque|
|abbreviation|bibelselskap|
|abbreviation|bkr|
|abbreviation|breton|
|abbreviation|burcbcm|
|abbreviation|calo|
|abbreviation|canisius|
|abbreviation|cep|
|abbreviation|chamorro|
|abbreviation|che1860|
|abbreviation|chiunl|
|abbreviation|cns|
|abbreviation|cnt|
|abbreviation|codex|
|abbreviation|coptic|
|abbreviation|cornilescu|
|abbreviation|croatia|
|abbreviation|csielizabeth|
|abbreviation|cus|
|abbreviation|cut|
|abbreviation|danish|
|abbreviation|danish1819|
|abbreviation|danish1871|
|abbreviation|darby|
|abbreviation|dari|
|abbreviation|douayrheims|
|abbreviation|easternarmenian|
|abbreviation|elberfelder|
|abbreviation|elberfelder1905|
|abbreviation|esperanto|
|abbreviation|estonian|
|abbreviation|finnish1776|
|abbreviation|gaelic|
|abbreviation|giovanni|
|abbreviation|gothic|
|abbreviation|japbungo|
|abbreviation|japdenmo|
|abbreviation|japkougo|
|abbreviation|japraguet|
|abbreviation|judson|
|abbreviation|karoli|
|abbreviation|kjv|
|abbreviation|kjva|
|abbreviation|klv|
|abbreviation|korean|
|abbreviation|koreankjv|
|abbreviation|latvian|
|abbreviation|lithuanian|
|abbreviation|livre|
|abbreviation|livretr|
|abbreviation|ls1910|
|abbreviation|luther1545|
|abbreviation|lxx|
|abbreviation|mal1910|
|abbreviation|manxgaelic|
|abbreviation|maori|
|abbreviation|martin|
|abbreviation|mg1865|
|abbreviation|moderngreek|
|abbreviation|modernhebrew|
|abbreviation|monkjv|
|abbreviation|ndebele|
|abbreviation|norsmb|
|abbreviation|peshitta|
|abbreviation|pohnold|
|abbreviation|pohnpeian|
|abbreviation|polgdanska|
|abbreviation|polugdanska|
|abbreviation|potawatomi|
|abbreviation|pyharaamattu1933|
|abbreviation|pyharaamattu1992|
|abbreviation|riveduta|
|abbreviation|rv1858|
|abbreviation|sahidic|
|abbreviation|schlachter|
|abbreviation|shona|
|abbreviation|srkdekavski|
|abbreviation|srkdijekav|
|abbreviation|sse|
|abbreviation|statenvertaling|
|abbreviation|statenvertalinga|
|abbreviation|swahili|
|abbreviation|swedish|
|abbreviation|swekarlxii|
|abbreviation|swekarlxii1873|
|abbreviation|synodal|
|abbreviation|tagalog|
|abbreviation|tausug|
|abbreviation|textusreceptus|
|abbreviation|thai|
|abbreviation|tischendorf|
|abbreviation|tpikjpb|
|abbreviation|turhadi|
|abbreviation|turkish|
|abbreviation|tyndale|
|abbreviation|ukranian|
|abbreviation|ukrogienko|
|abbreviation|uma|
|abbreviation|valera|
|abbreviation|vietnamese|
|abbreviation|vulgate|
|abbreviation|wb|
|abbreviation|web|
|abbreviation|westcotthort|
|abbreviation|westernarmenian|
|abbreviation|weymouth|
|abbreviation|wycliffe|
|abbreviation|ylt|
|abbreviation|zhuromsky|

<h3 id="checksum-of-a-chapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksum of a chapter|[Sha1File](#schemasha1file)|
|404|Not Found|No such file: the translation, book or chapter is not part of this tree|None|

<aside class="success">
This operation does not require authentication
</aside>

## Checksum of this document

<a id="opIdgetOpenApiChecksum"></a>

> Code samples

```bash
curl https://api.getbible.net/openapi.sha
```

`GET /openapi.sha`

The SHA-1 checksum of openapi.json.

<h3 id="checksum-of-this-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Checksum of this document|[Sha1File](#schemasha1file)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="getbible-json-api-default">Default</h1>

## This document

<a id="opIdgetOpenApi"></a>

> Code samples

```bash
curl https://api.getbible.net/openapi.json \
  -H 'Accept: application/json'
```

`GET /openapi.json`

The OpenAPI description of this tree, written at the end of the build that produced it.

> Example responses

> 200 Response

```json
{}
```

<h3 id="this-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI 3.1 document|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Direction">Direction</h2>
<!-- backwards compatibility -->
<a id="schemadirection"></a>
<a id="schema_Direction"></a>
<a id="tocSdirection"></a>
<a id="tocsdirection"></a>

```json
"LTR"
```

Writing direction of the text

<h2 id="tocS_Sha1">Sha1</h2>
<!-- backwards compatibility -->
<a id="schemasha1"></a>
<a id="schema_Sha1"></a>
<a id="tocSsha1"></a>
<a id="tocssha1"></a>

```json
"string"
```

SHA-1 checksum of a JSON file, as 40 lowercase hexadecimal characters

<h2 id="tocS_Sha1File">Sha1File</h2>
<!-- backwards compatibility -->
<a id="schemasha1file"></a>
<a id="schema_Sha1File"></a>
<a id="tocSsha1file"></a>
<a id="tocssha1file"></a>

```json
"string"
```

The content of a .sha file: the SHA-1 checksum of the JSON file with the same name, as 40 lowercase hexadecimal characters followed by a newline

<h2 id="tocS_TabSeparatedIndex">TabSeparatedIndex</h2>
<!-- backwards compatibility -->
<a id="schematabseparatedindex"></a>
<a id="schema_TabSeparatedIndex"></a>
<a id="tocStabseparatedindex"></a>
<a id="tocstabseparatedindex"></a>

```json
"string"
```

The content of a .txt index file: a header line starting with # that names the columns, then one tab-separated line per file

<h2 id="tocS_Verse">Verse</h2>
<!-- backwards compatibility -->
<a id="schemaverse"></a>
<a id="schema_Verse"></a>
<a id="tocSverse"></a>
<a id="tocsverse"></a>

```json
{
  "chapter": 1,
  "verse": 1,
  "name": "string",
  "text": "string"
}
```

One verse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chapter|integer|true|none|Chapter number|
|verse|integer|true|none|Verse number|
|name|string|true|none|Name of the verse, as book name, chapter and verse|
|text|string|true|none|Text of the verse|

<h2 id="tocS_BookChapter">BookChapter</h2>
<!-- backwards compatibility -->
<a id="schemabookchapter"></a>
<a id="schema_BookChapter"></a>
<a id="tocSbookchapter"></a>
<a id="tocsbookchapter"></a>

```json
{
  "chapter": 1,
  "name": "string",
  "verses": [
    {
      "chapter": 1,
      "verse": 1,
      "name": "string",
      "text": "string"
    }
  ]
}
```

One chapter with its verses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chapter|integer|true|none|Chapter number|
|name|string|true|none|Name of the chapter, as book name and chapter|
|verses|[[Verse](#schemaverse)]|true|none|Verses of the chapter|

<h2 id="tocS_TranslationBook">TranslationBook</h2>
<!-- backwards compatibility -->
<a id="schematranslationbook"></a>
<a id="schema_TranslationBook"></a>
<a id="tocStranslationbook"></a>
<a id="tocstranslationbook"></a>

```json
{
  "nr": 1,
  "name": "string",
  "chapters": [
    {
      "chapter": 1,
      "name": "string",
      "verses": [
        {
          "chapter": 1,
          "verse": 1,
          "name": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

One book with its chapters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nr|integer|true|none|Book number|
|name|string|true|none|Name of the book in the translation|
|chapters|[[BookChapter](#schemabookchapter)]|true|none|Chapters of the book|

<h2 id="tocS_Translation">Translation</h2>
<!-- backwards compatibility -->
<a id="schematranslation"></a>
<a id="schema_Translation"></a>
<a id="tocStranslation"></a>
<a id="tocstranslation"></a>

```json
{
  "translation": "string",
  "abbreviation": "string",
  "description": "string",
  "lang": "string",
  "language": "string",
  "direction": "LTR",
  "encoding": "string",
  "books": [
    {
      "nr": 1,
      "name": "string",
      "chapters": [
        {
          "chapter": 1,
          "name": "string",
          "verses": [
            {
              "chapter": 1,
              "verse": 1,
              "name": "string",
              "text": "string"
            }
          ]
        }
      ]
    }
  ],
  "distribution_lcsh": "string",
  "distribution_version": "string",
  "distribution_version_date": "string",
  "distribution_abbreviation": "string",
  "distribution_about": "string",
  "distribution_license": "string",
  "distribution_sourcetype": "string",
  "distribution_source": "string",
  "distribution_versification": "string",
  "distribution_history": {
    "property1": "string",
    "property2": "string"
  }
}
```

A complete translation file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|string|true|none|Name of the translation|
|abbreviation|string|true|none|Abbreviation of the translation, used as its file and folder name|
|description|string|true|none|Description of the translation from the source module|
|lang|string|true|none|Language code of the translation|
|language|string|true|none|Name of the language in English|
|direction|[Direction](#schemadirection)|true|none|Writing direction of the text|
|encoding|string|true|none|Character encoding of the source module|
|books|[[TranslationBook](#schematranslationbook)]|true|none|Books of the translation|
|distribution_lcsh|string|true|none|Library of Congress subject heading of the source module|
|distribution_version|string|true|none|Version of the source module|
|distribution_version_date|string|true|none|Date of the source module version|
|distribution_abbreviation|string|true|none|Abbreviation of the source module|
|distribution_about|string|true|none|About text of the source module|
|distribution_license|string|true|none|Distribution license of the source module text|
|distribution_sourcetype|string|true|none|Markup type of the source module text|
|distribution_source|string|true|none|Origin of the source module text|
|distribution_versification|string|true|none|Versification of the source module|
|distribution_history|object|true|none|Change history of the source module, keyed by history entry|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|LTR|
|direction|RTL|

<h2 id="tocS_TranslationSummary">TranslationSummary</h2>
<!-- backwards compatibility -->
<a id="schematranslationsummary"></a>
<a id="schema_TranslationSummary"></a>
<a id="tocStranslationsummary"></a>
<a id="tocstranslationsummary"></a>

```json
{
  "translation": "string",
  "abbreviation": "string",
  "description": "string",
  "lang": "string",
  "language": "string",
  "direction": "LTR",
  "encoding": "string",
  "distribution_lcsh": "string",
  "distribution_version": "string",
  "distribution_version_date": "string",
  "distribution_abbreviation": "string",
  "distribution_about": "string",
  "distribution_license": "string",
  "distribution_sourcetype": "string",
  "distribution_source": "string",
  "distribution_versification": "string",
  "distribution_history": {
    "property1": "string",
    "property2": "string"
  },
  "url": "http://example.com",
  "sha": "string"
}
```

A translation as listed in translations.json (the translation file without its books)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|string|true|none|Name of the translation|
|abbreviation|string|true|none|Abbreviation of the translation, used as its file and folder name|
|description|string|true|none|Description of the translation from the source module|
|lang|string|true|none|Language code of the translation|
|language|string|true|none|Name of the language in English|
|direction|[Direction](#schemadirection)|true|none|Writing direction of the text|
|encoding|string|true|none|Character encoding of the source module|
|distribution_lcsh|string|true|none|Library of Congress subject heading of the source module|
|distribution_version|string|true|none|Version of the source module|
|distribution_version_date|string|true|none|Date of the source module version|
|distribution_abbreviation|string|true|none|Abbreviation of the source module|
|distribution_about|string|true|none|About text of the source module|
|distribution_license|string|true|none|Distribution license of the source module text|
|distribution_sourcetype|string|true|none|Markup type of the source module text|
|distribution_source|string|true|none|Origin of the source module text|
|distribution_versification|string|true|none|Versification of the source module|
|distribution_history|object|true|none|Change history of the source module, keyed by history entry|
|url|string(uri)|true|none|Address of the translation file|
|sha|[Sha1](#schemasha1)|true|none|SHA-1 checksum of the translation file|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|LTR|
|direction|RTL|

<h2 id="tocS_TranslationIndex">TranslationIndex</h2>
<!-- backwards compatibility -->
<a id="schematranslationindex"></a>
<a id="schema_TranslationIndex"></a>
<a id="tocStranslationindex"></a>
<a id="tocstranslationindex"></a>

```json
{
  "property1": {
    "translation": "string",
    "abbreviation": "string",
    "description": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "distribution_lcsh": "string",
    "distribution_version": "string",
    "distribution_version_date": "string",
    "distribution_abbreviation": "string",
    "distribution_about": "string",
    "distribution_license": "string",
    "distribution_sourcetype": "string",
    "distribution_source": "string",
    "distribution_versification": "string",
    "distribution_history": {
      "property1": "string",
      "property2": "string"
    },
    "url": "http://example.com",
    "sha": "string"
  },
  "property2": {
    "translation": "string",
    "abbreviation": "string",
    "description": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "distribution_lcsh": "string",
    "distribution_version": "string",
    "distribution_version_date": "string",
    "distribution_abbreviation": "string",
    "distribution_about": "string",
    "distribution_license": "string",
    "distribution_sourcetype": "string",
    "distribution_source": "string",
    "distribution_versification": "string",
    "distribution_history": {
      "property1": "string",
      "property2": "string"
    },
    "url": "http://example.com",
    "sha": "string"
  }
}
```

Every translation in the tree, keyed by abbreviation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TranslationSummary](#schematranslationsummary)|false|none|A translation as listed in translations.json (the translation file without its books)|

<h2 id="tocS_Book">Book</h2>
<!-- backwards compatibility -->
<a id="schemabook"></a>
<a id="schema_Book"></a>
<a id="tocSbook"></a>
<a id="tocsbook"></a>

```json
{
  "translation": "string",
  "abbreviation": "string",
  "lang": "string",
  "language": "string",
  "direction": "LTR",
  "encoding": "string",
  "nr": 1,
  "name": "string",
  "chapters": [
    {
      "chapter": 1,
      "name": "string",
      "verses": [
        {
          "chapter": 1,
          "verse": 1,
          "name": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

A complete book file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|string|true|none|Name of the translation|
|abbreviation|string|true|none|Abbreviation of the translation, used as its file and folder name|
|lang|string|true|none|Language code of the translation|
|language|string|true|none|Name of the language in English|
|direction|[Direction](#schemadirection)|true|none|Writing direction of the text|
|encoding|string|true|none|Character encoding of the source module|
|nr|integer|true|none|Book number|
|name|string|true|none|Name of the book in the translation|
|chapters|[[BookChapter](#schemabookchapter)]|true|none|Chapters of the book|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|LTR|
|direction|RTL|

<h2 id="tocS_BookSummary">BookSummary</h2>
<!-- backwards compatibility -->
<a id="schemabooksummary"></a>
<a id="schema_BookSummary"></a>
<a id="tocSbooksummary"></a>
<a id="tocsbooksummary"></a>

```json
{
  "translation": "string",
  "abbreviation": "string",
  "lang": "string",
  "language": "string",
  "direction": "LTR",
  "encoding": "string",
  "nr": 1,
  "name": "string",
  "url": "http://example.com",
  "sha": "string"
}
```

A book as listed in books.json (the book file without its chapters)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|string|true|none|Name of the translation|
|abbreviation|string|true|none|Abbreviation of the translation, used as its file and folder name|
|lang|string|true|none|Language code of the translation|
|language|string|true|none|Name of the language in English|
|direction|[Direction](#schemadirection)|true|none|Writing direction of the text|
|encoding|string|true|none|Character encoding of the source module|
|nr|integer|true|none|Book number|
|name|string|true|none|Name of the book in the translation|
|url|string(uri)|true|none|Address of the book file|
|sha|[Sha1](#schemasha1)|true|none|SHA-1 checksum of the book file|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|LTR|
|direction|RTL|

<h2 id="tocS_BookIndex">BookIndex</h2>
<!-- backwards compatibility -->
<a id="schemabookindex"></a>
<a id="schema_BookIndex"></a>
<a id="tocSbookindex"></a>
<a id="tocsbookindex"></a>

```json
{
  "property1": {
    "translation": "string",
    "abbreviation": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "nr": 1,
    "name": "string",
    "url": "http://example.com",
    "sha": "string"
  },
  "property2": {
    "translation": "string",
    "abbreviation": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "nr": 1,
    "name": "string",
    "url": "http://example.com",
    "sha": "string"
  }
}
```

Every book of a translation, keyed by book number

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[BookSummary](#schemabooksummary)|false|none|A book as listed in books.json (the book file without its chapters)|

<h2 id="tocS_Chapter">Chapter</h2>
<!-- backwards compatibility -->
<a id="schemachapter"></a>
<a id="schema_Chapter"></a>
<a id="tocSchapter"></a>
<a id="tocschapter"></a>

```json
{
  "translation": "string",
  "abbreviation": "string",
  "lang": "string",
  "language": "string",
  "direction": "LTR",
  "encoding": "string",
  "book_nr": 1,
  "book_name": "string",
  "chapter": 1,
  "name": "string",
  "verses": [
    {
      "chapter": 1,
      "verse": 1,
      "name": "string",
      "text": "string"
    }
  ]
}
```

A complete chapter file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|string|true|none|Name of the translation|
|abbreviation|string|true|none|Abbreviation of the translation, used as its file and folder name|
|lang|string|true|none|Language code of the translation|
|language|string|true|none|Name of the language in English|
|direction|[Direction](#schemadirection)|true|none|Writing direction of the text|
|encoding|string|true|none|Character encoding of the source module|
|book_nr|integer|true|none|Book number|
|book_name|string|true|none|Name of the book in the translation|
|chapter|integer|true|none|Chapter number|
|name|string|true|none|Name of the chapter, as book name and chapter|
|verses|[[Verse](#schemaverse)]|true|none|Verses of the chapter|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|LTR|
|direction|RTL|

<h2 id="tocS_ChapterSummary">ChapterSummary</h2>
<!-- backwards compatibility -->
<a id="schemachaptersummary"></a>
<a id="schema_ChapterSummary"></a>
<a id="tocSchaptersummary"></a>
<a id="tocschaptersummary"></a>

```json
{
  "translation": "string",
  "abbreviation": "string",
  "lang": "string",
  "language": "string",
  "direction": "LTR",
  "encoding": "string",
  "book_nr": 1,
  "book_name": "string",
  "chapter": 1,
  "name": "string",
  "url": "http://example.com",
  "sha": "string"
}
```

A chapter as listed in chapters.json (the chapter file without its verses)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation|string|true|none|Name of the translation|
|abbreviation|string|true|none|Abbreviation of the translation, used as its file and folder name|
|lang|string|true|none|Language code of the translation|
|language|string|true|none|Name of the language in English|
|direction|[Direction](#schemadirection)|true|none|Writing direction of the text|
|encoding|string|true|none|Character encoding of the source module|
|book_nr|integer|true|none|Book number|
|book_name|string|true|none|Name of the book in the translation|
|chapter|integer|true|none|Chapter number|
|name|string|true|none|Name of the chapter, as book name and chapter|
|url|string(uri)|true|none|Address of the chapter file|
|sha|[Sha1](#schemasha1)|true|none|SHA-1 checksum of the chapter file|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|LTR|
|direction|RTL|

<h2 id="tocS_ChapterIndex">ChapterIndex</h2>
<!-- backwards compatibility -->
<a id="schemachapterindex"></a>
<a id="schema_ChapterIndex"></a>
<a id="tocSchapterindex"></a>
<a id="tocschapterindex"></a>

```json
{
  "property1": {
    "translation": "string",
    "abbreviation": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "book_nr": 1,
    "book_name": "string",
    "chapter": 1,
    "name": "string",
    "url": "http://example.com",
    "sha": "string"
  },
  "property2": {
    "translation": "string",
    "abbreviation": "string",
    "lang": "string",
    "language": "string",
    "direction": "LTR",
    "encoding": "string",
    "book_nr": 1,
    "book_name": "string",
    "chapter": 1,
    "name": "string",
    "url": "http://example.com",
    "sha": "string"
  }
}
```

Every chapter of a book, keyed by chapter number

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ChapterSummary](#schemachaptersummary)|false|none|A chapter as listed in chapters.json (the chapter file without its verses)|

<h2 id="tocS_ChecksumIndex">ChecksumIndex</h2>
<!-- backwards compatibility -->
<a id="schemachecksumindex"></a>
<a id="schema_ChecksumIndex"></a>
<a id="tocSchecksumindex"></a>
<a id="tocschecksumindex"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

The SHA-1 checksum of every JSON file at this level, keyed by file name without extension

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Sha1](#schemasha1)|false|none|SHA-1 checksum of a JSON file, as 40 lowercase hexadecimal characters|
