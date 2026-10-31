<h1 id="sharebymail">sharebymail v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Share provider which allows you to share files by mail

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

# Schemas

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "files_sharing": {
    "sharebymail": {
      "enabled": true,
      "send_password_by_mail": true,
      "upload_files_drop": {
        "enabled": true
      },
      "password": {
        "enabled": true,
        "enforced": true
      },
      "expire_date": {
        "enabled": true,
        "enforced": true
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files_sharing|object|false|none|none|
