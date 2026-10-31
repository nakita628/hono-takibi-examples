<h1 id="tafqit">Tafqit v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Convert numbers to their Arabic text representation

Base URLs:

* <a href="https://api.apis.guru/">https://api.apis.guru/</a> - Base URL

Email: <a href="mailto:info@tafqit.com">Sami Morcos</a> 
Web: <a href="https://tafqit.com">Sami Morcos</a> 

<h1 id="tafqit-default">Default</h1>

## convert

<a id="opIdconvert"></a>

> Code samples

```bash
curl https://example.com/convert \
  -X POST \
  -F 'hundreds_form=مائة' \
  -F 'the_number=2519.50' \
  -F 'unit= ريال سعودي'
```

`POST /convert`

Convert the number into its Arabic text representation
حول العدد إلى ما يقابله كتابة

> Body parameter

```yaml
hundreds_form: "مائة"
the_number: "2519.50"
unit: " ريال سعودي"
```

<h3 id="convert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» hundreds_form|body|string(string)|false|Some use مائة others use مئة , both works in Arabic. If left empty the default is مائة |
|» the_number|body|string(string)|false|Put the number here. Decimal is supported by most units.|
|» unit|body|string(string)|false|The counted subject, be it a currency like درهم إماراتي  or a size unit like متر مربع<br>If the unit does not appear in the text result, it may not be supported. Please contact us to add it.|

<h3 id="convert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|number converted to text successfully, تمت عملية التفقيط بنجاح|None|

<aside class="success">
This operation does not require authentication
</aside>
