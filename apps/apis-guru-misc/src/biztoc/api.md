<h1 id="biztoc">BizToc v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Get the latest business news articles.

Base URLs:

* <a href="https://ai.biztoc.com">https://ai.biztoc.com</a>

<h1 id="biztoc-default">Default</h1>

## Retrieves the latest news whose content contains the query string.

<a id="opIdgetNews"></a>

> Code samples

```bash
curl https://example.com/ai/news
```

`GET /ai/news`

<h3 id="retrieves-the-latest-news-whose-content-contains-the-query-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Used to query news articles on their title and body. For example, ?query=apple will return news stories that have 'apple' in their title or body.|

<h3 id="retrieves-the-latest-news-whose-content-contains-the-query-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
