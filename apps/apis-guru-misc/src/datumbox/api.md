<h1 id="apidatumboxcom">api.datumbox.com v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Datumbox offers a Machine Learning platform composed of 14 classifiers and Natural Language processing functions. Functions include sentiment analysis, topic classification, readability assessment, language detection, and much more.

Base URLs:

* <a href="http://api.datumbox.com/">http://api.datumbox.com/</a>

<h1 id="apidatumboxcom-document-classification">Document-Classification</h1>

Document Classification Functions

## Classifies the Document as adult or noadult

<a id="opIdAdultContentDetection"></a>

> Code samples

```bash
curl https://example.com/1.0/AdultContentDetection.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/AdultContentDetection.json`

The Adult Content Detection function classifies the documents as adult or noadult based on their context. It can be used to detect whether a document contains content unsuitable for minors.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="classifies-the-document-as-adult-or-noadult-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="classifies-the-document-as-adult-or-noadult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Classifies the Document as commercial or nocommercial

<a id="opIdCommercialDetection"></a>

> Code samples

```bash
curl https://example.com/1.0/CommercialDetection.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/CommercialDetection.json`

The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="classifies-the-document-as-commercial-or-nocommercial-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="classifies-the-document-as-commercial-or-nocommercial-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Classifies the Document as educational or noeducational

<a id="opIdEducationalDetection"></a>

> Code samples

```bash
curl https://example.com/1.0/EducationalDetection.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/EducationalDetection.json`

The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="classifies-the-document-as-educational-or-noeducational-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="classifies-the-document-as-educational-or-noeducational-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gender Detection Service

<a id="opIdGenderDetection"></a>

> Code samples

```bash
curl https://example.com/1.0/GenderDetection.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/GenderDetection.json`

The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="gender-detection-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="gender-detection-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Identifies the Language of the Document

<a id="opIdLanguageDetection"></a>

> Code samples

```bash
curl https://example.com/1.0/LanguageDetection.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/LanguageDetection.json`

The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="identifies-the-language-of-the-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="identifies-the-language-of-the-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Evaluates the Readability of the Document

<a id="opIdReadabilityAssessment"></a>

> Code samples

```bash
curl https://example.com/1.0/ReadabilityAssessment.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/ReadabilityAssessment.json`

The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="evaluates-the-readability-of-the-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="evaluates-the-readability-of-the-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Identifies the Sentiment of the Document

<a id="opIdSentimentAnalysis"></a>

> Code samples

```bash
curl https://example.com/1.0/SentimentAnalysis.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/SentimentAnalysis.json`

The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="identifies-the-sentiment-of-the-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="identifies-the-sentiment-of-the-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Classifies the Document as spam or nospam

<a id="opIdSpamDetection"></a>

> Code samples

```bash
curl https://example.com/1.0/SpamDetection.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/SpamDetection.json`

The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="classifies-the-document-as-spam-or-nospam-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="classifies-the-document-as-spam-or-nospam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Classifies Document as Subjective or Objective

<a id="opIdSubjectivityAnalysis"></a>

> Code samples

```bash
curl https://example.com/1.0/SubjectivityAnalysis.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/SubjectivityAnalysis.json`

The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="classifies-document-as-subjective-or-objective-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="classifies-document-as-subjective-or-objective-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Identifies the Topic of the Document

<a id="opIdTopicClassification"></a>

> Code samples

```bash
curl https://example.com/1.0/TopicClassification.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/TopicClassification.json`

The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="identifies-the-topic-of-the-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="identifies-the-topic-of-the-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Identifies the Sentiment of Twitter Messages

<a id="opIdTwitterSentimentAnalysis"></a>

> Code samples

```bash
curl https://example.com/1.0/TwitterSentimentAnalysis.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/TwitterSentimentAnalysis.json`

The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="identifies-the-sentiment-of-twitter-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The text of the tweet that we evaluate.|

<h3 id="identifies-the-sentiment-of-twitter-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apidatumboxcom-information-retrieval">Information-Retrieval</h1>

Information Retrieval Functions

## Extracts the Keywords of the Document

<a id="opIdKeywordExtraction"></a>

> Code samples

```bash
curl https://example.com/1.0/KeywordExtraction.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&n=1&text=string'
```

`POST /1.0/KeywordExtraction.json`

The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.

> Body parameter

```yaml
api_key: string
n: 1
text: string
```

<h3 id="extracts-the-keywords-of-the-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» n|body|integer|false|The number of keyword combinations (n-grams) that you wish to extract.|
|» text|body|string|false|The text that you want to analyze. It should not contain HTML tags.|

<h3 id="extracts-the-keywords-of-the-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Extracts the clear text from Webpage

<a id="opIdTextExtraction"></a>

> Code samples

```bash
curl https://example.com/1.0/TextExtraction.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&text=string'
```

`POST /1.0/TextExtraction.json`

The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.

> Body parameter

```yaml
api_key: string
text: string
```

<h3 id="extracts-the-clear-text-from-webpage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» text|body|string|false|The HTML source of the webpage.|

<h3 id="extracts-the-clear-text-from-webpage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apidatumboxcom-metrics">Metrics</h1>

Metrics

## Estimates the similarity between 2 Documents

<a id="opIdDocumentSimilarity"></a>

> Code samples

```bash
curl https://example.com/1.0/DocumentSimilarity.json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'api_key=string&copy=string&original=string'
```

`POST /1.0/DocumentSimilarity.json`

The Document Similarity function estimates the degree of similarity between two documents. It can be used to detect duplicate webpages or detect plagiarism.

> Body parameter

```yaml
api_key: string
copy: string
original: string
```

<h3 id="estimates-the-similarity-between-2-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» api_key|body|string|true|Your API Key|
|» copy|body|string|false|The second text. It should not contain HTML tags.|
|» original|body|string|false|The first text. It should not contain HTML tags.|

<h3 id="estimates-the-similarity-between-2-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>
