<h1 id="employees-and-managers">Employees and Managers v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="employees-and-managers-default">Default</h1>

## getEmployeeById

<a id="opIdgetEmployeeById"></a>

> Code samples

```bash
curl https://example.com/employees/string \
  -H 'Accept: application/json'
```

`GET /employees/{id}`

<h3 id="getemployeebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "username": "string",
  "managerId": "string"
}
```

<h3 id="getemployeebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A representation of an employee|Inline|

<h3 id="getemployeebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|username|string|false|none|none|
|managerId|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
