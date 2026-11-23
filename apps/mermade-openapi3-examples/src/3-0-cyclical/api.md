<h1 id="api">API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Schemas

<h2 id="tocS_top">top</h2>
<!-- backwards compatibility -->
<a id="schematop"></a>
<a id="schema_top"></a>
<a id="tocStop"></a>
<a id="tocstop"></a>

```json
{
  "cat": {
    "subcategories": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cat|[topCat](#schematopcat)|false|none|none|

<h2 id="tocS_topCat">topCat</h2>
<!-- backwards compatibility -->
<a id="schematopcat"></a>
<a id="schema_topCat"></a>
<a id="tocStopcat"></a>
<a id="tocstopcat"></a>

```json
{
  "subcategories": [
    {
      "subcategories": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subcategories|[[topCat](#schematopcat)]|false|none|none|
