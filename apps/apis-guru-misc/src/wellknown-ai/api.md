<h1 id="wellknown">Wellknown v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A registry of AI Plugins.

Base URLs:

* <a href="https://wellknown.ai/api">https://wellknown.ai/api</a>

Email: <a href="mailto:cfortuner@gmail.com">Wellknown</a> 
Web: <a href="https://wellknown.ai">Wellknown</a> 

<h1 id="wellknown-default">Default</h1>

## get/api/plugins

> Code samples

```bash
curl https://example.com/api/plugins
```

`GET /api/plugins`

Returns a list of Wellknown ai-plugins json objects from the Wellknown ai-plugins registry.

<h3 id="getapiplugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Wellknown ai-plugins json objects.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wellknown-plugins">Plugins</h1>

## List all the Wellknown AI Plugins.

<a id="opIdgetProvider"></a>

> Code samples

```bash
curl https://example.com/plugins
```

`GET /plugins`

List all the Wellknown AI Plugins. Returns ai-plugin.json objects in an array

<h3 id="list-all-the-wellknown-ai-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
