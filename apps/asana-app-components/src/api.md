<h1 id="app-components">App Components v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the interface for handling requests for [app components](https://developers.asana.com/docs/overview-of-app-components). This reference is generated from an [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/app_components_oas.yaml).

Base URLs:

* <a href="{siteUrl}">{siteUrl}</a> - Main endpoint.

<a href="https://asana.com/terms">Terms of service</a>
Web: <a href="https://asana.com/support">Asana Support</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>

<h1 id="app-components-modal-forms">Modal forms</h1>

The modal form is displayed when the user starts the flow to create a resource. Asana will make a signed request to the specified `form_metadata_url` in the configuration, and expect a response with the metadata needed to create the form. This process is also used for forms within rule actions.

## Get form metadata

<a id="opIdgetFormMetadata"></a>

> Code samples

```bash
curl 'https://example.com/form_metadata_url_path_placeholder?workspace=string&task=string&user=string&expires_at=string' \
  -H 'Accept: application/json'
```

`GET /form_metadata_url_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

Get the metadata from the app server to render a form. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/65a45303b5fb79a69a322593627e3b9521c68ba1/ac-form-metadata.png">
  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/65a45303b5fb79a69a322593627e3b9521c68ba1/ac-form-metadata.png" alt="App components form metadata request flow"/>
</a>

<h3 id="get-form-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|query|string|true|The workspace GID this hook is coming from.|
|task|query|string|true|The task GID this hook is coming from.|
|user|query|string|true|The user GID this hook is coming from.|
|expires_at|query|string|true|The time (in ISO 8601 date format) when the request should expire.|

> Example responses

> 200 Response

```json
{
  "template": "form_metadata_v0",
  "metadata": {
    "title": "Create New Issue",
    "fields": [],
    "on_submit_callback": "https://www.example.com/on_submit",
    "on_change_callback": "https://www.example.com/on_change"
  }
}
```

> 400 Response

```json
{
  "error": "Illegal or malformed request."
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="get-form-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the metadata for a single form.|[FormMetadataResponse](#schemaformmetadataresponse)|
|400|Bad Request|Bad request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get modal form typeahead results

<a id="opIdgetModalFormTypeaheadResults"></a>

> Code samples

```bash
curl https://example.com/modal_form_typeahead_url_path_placeholder \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expires_at": "2019-04-15T01:01:46.055Z",
    "user": "54321",
    "workspace": "12345",
    "query": "Messages",
    "task": "67890"
  }'
```

`GET /modal_form_typeahead_url_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

If a modal form field is of type `typehead`, this operation gets typeahead results to render as a dropdown list.

When the user types into a modal form form field, Asana will send a request containing the entered string to the application's `typeahead_url`. The list of [TypeaheadItem](/reference/lookups#typeaheaditem)s in the response will then be rendered in a dropdown list. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/9ddc32f45cb458d111912b8fe8353bf8f682d6b9/ac-form-typeahead.png">
  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/9ddc32f45cb458d111912b8fe8353bf8f682d6b9/ac-form-typeahead.png" alt="App components form typeahead request flow"/>
</a>

> Body parameter

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "query": "Messages",
  "task": "67890"
}
```

<h3 id="get-modal-form-typeahead-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TypeaheadListRequest](#schematypeaheadlistrequest)|true|Request to retrieve typeahead results in a modal form typeahead form field.|
|» expires_at|body|string|false|The time (in ISO 8601 date format) when the request should expire.|
|» user|body|string|false|The user GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» query|body|string|false|The user's input in the typeahead text input.|
|» task|body|string|false|*Conditional*. The task GID this hook is coming from. `task` is only present in the [modal form](/docs/modal-form) (as there is a "context task"), but not in the [rule action](/docs/rule-action) (as rules are associated with a _project_).|
|» user|body|string|false|The user GID this hook is coming from.|
|» expires_at|body|string|false|The time (in ISO 8601 format) when the request should expire.|

> Example responses

> 200 Response

```json
{
  "header": "List of messages",
  "items": [
    {
      "title": "OTP Team PF",
      "subtitle": "OTP",
      "value": "OTP",
      "icon_url": "https://example-icon.png"
    }
  ]
}
```

> 400 Response

```json
{
  "error": "Illegal or malformed request."
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="get-modal-form-typeahead-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved typeahead results.|[TypeaheadListResponse](#schematypeaheadlistresponse)|
|400|Bad Request|Bad request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## On change callback

<a id="opIdonFormChange"></a>

> Code samples

```bash
curl https://example.com/on_change_callback_path_placeholder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expires_at": "2019-04-15T01:01:46.055Z",
    "user": "54321",
    "workspace": "12345",
    "values": {
      "checkbox_field_1": [
        "opt-in"
      ],
      "date_field_1": "2021-12-31T08:00:00.000Z",
      "datetime_field_1": "2023-01-01T00:00:00.000Z",
      "dropdown_field_1": "red",
      "multi_line_text_field_1": "Multiline Text",
      "radio_button_field_1": "blue",
      "rich_text_field_1": "<BODY>Rich Text</BODY>",
      "single_line_text_field_1": "Single Line Text",
      "static_text_field_1": "Static Text",
      "typeahead_field_1": {
        "icon_url": "https://example.com/icon.png",
        "subtitle": "Subtitle",
        "title": "Title",
        "value": "Typeahead"
      }
    },
    "changed_field": "checkbox_field_1",
    "task": "67890"
  }'
```

`POST /on_change_callback_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

The callback request made to an app server when a watched field's value changes within a form. The request is subject to a 10-second timeout if no response is received from the app server. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/5b013ab17e2c82e44ede3bc8f1cdfcf48b79fa6d/ac-form-on-change.png">
  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/5b013ab17e2c82e44ede3bc8f1cdfcf48b79fa6d/ac-form-on-change.png" alt="App components form on change request flow"/>
</a>

> Body parameter

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  },
  "changed_field": "checkbox_field_1",
  "task": "67890"
}
```

<h3 id="on-change-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FormOnChangeRequest](#schemaformonchangerequest)|true|Request to notify of an on change event.|
|» expires_at|body|string|false|The time (in ISO 8601 date format) when the request should expire.|
|» user|body|string|false|The user GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» values|body|object|false|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|
|» changed_field|body|string|false|The name of the changed FormField.|
|» task|body|string|false|The task GID this hook is coming from.|

> Example responses

> 200 Response

```json
{
  "template": "form_metadata_v0",
  "metadata": {
    "title": "Create New Issue",
    "fields": [],
    "on_submit_callback": "https://www.example.com/on_submit",
    "on_change_callback": "https://www.example.com/on_change"
  }
}
```

> 400 Response

```json
{
  "template": "form_metadata_v0",
  "metadata": {
    "title": "Create New Issue",
    "fields": [],
    "on_submit_callback": "https://www.example.com/on_submit",
    "on_change_callback": "https://www.example.com/on_change"
  }
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="on-change-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the new state of the form.|[FormMetadataResponse](#schemaformmetadataresponse)|
|400|Bad Request|Something was wrong with the form data.|[FormMetadataResponse](#schemaformmetadataresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## On submit callback

<a id="opIdonFormSubmit"></a>

> Code samples

```bash
curl https://example.com/on_submit_callback_path_placeholder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expires_at": "2019-04-15T01:01:46.055Z",
    "user": "54321",
    "workspace": "12345",
    "values": {
      "checkbox_field_1": [
        "opt-in"
      ],
      "date_field_1": "2021-12-31T08:00:00.000Z",
      "datetime_field_1": "2023-01-01T00:00:00.000Z",
      "dropdown_field_1": "red",
      "multi_line_text_field_1": "Multiline Text",
      "radio_button_field_1": "blue",
      "rich_text_field_1": "<BODY>Rich Text</BODY>",
      "single_line_text_field_1": "Single Line Text",
      "static_text_field_1": "Static Text",
      "typeahead_field_1": {
        "icon_url": "https://example.com/icon.png",
        "subtitle": "Subtitle",
        "title": "Title",
        "value": "Typeahead"
      }
    },
    "task": "67890",
    "attachment": "12345"
  }'
```

`POST /on_submit_callback_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

The callback request made to an app server when a form is submitted. The request is subject to a 10-second timeout if no response is received from the app server. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/a58c2641ab72105505ea9d63cf27098d79e56c71/ac-form-on-submit.png">
  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/a58c2641ab72105505ea9d63cf27098d79e56c71/ac-form-on-submit.png" alt="App components form on submit request flow"/>
</a>

> Body parameter

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  },
  "task": "67890",
  "attachment": "12345"
}
```

<h3 id="on-submit-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OnSubmitCallbackRequest](#schemaonsubmitcallbackrequest)|true|Request to notify of a form submission.|
|» expires_at|body|string|false|The time (in ISO 8601 date format) when the request should expire.|
|» user|body|string|false|The user GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» values|body|object|false|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|
|» task|body|string|false|The task GID this hook is coming from.|
|» attachment|body|string|false|The GID of the attachment created from the form submission.|

> Example responses

> 200 Response

```json
{
  "resource_name": "Build the Thing",
  "resource_url": "https://example.atlassian.net/browse/CP-1",
  "error": "No resource matched that input"
}
```

> 400 Response

```json
{
  "template": "form_metadata_v0",
  "metadata": {
    "title": "Create New Issue",
    "fields": [],
    "on_submit_callback": "https://www.example.com/on_submit",
    "on_change_callback": "https://www.example.com/on_change"
  }
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="on-submit-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully attached the resource created by the form.|[AttachedResourceResponse](#schemaattachedresourceresponse)|
|400|Bad Request|Something was wrong with the form data.|[FormMetadataResponse](#schemaformmetadataresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="app-components-rule-actions">Rule actions</h1>

When a rule containing a rule action is triggered, the [rules](https://asana.com/guide/help/premium/rules) engine will make a request to the app to inform the app to run the configured rule action. The resulting status code will indicate to the rules engine whether the action was successfully completed and, if not, specify a cause for the error.

_Note: An app server must be hosted in order for rule actions to function. For a brief list of popular hosting options, see [hosting](/docs/hosting)._

## Get rule action typeahead results

<a id="opIdgetRuleActionTypeaheadResults"></a>

> Code samples

```bash
curl https://example.com/rule_action_typeahead_url_path_placeholder \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expires_at": "2019-04-15T01:01:46.055Z",
    "user": "54321",
    "workspace": "12345",
    "query": "Messages",
    "task": "67890"
  }'
```

`GET /rule_action_typeahead_url_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

In a rule action typeahead form field, this operation gets typeahead results to render as a dropdown list. Typeahead results are limited to 50 items.

When the user types into a rule action form field, Asana will send a request containing the entered string to the application's `typeahead_url`. The list of [TypeaheadItem](/reference/lookups#typeaheaditem)s in the response will then be rendered in a dropdown list. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/9f4a9e93ba7e91e44c4ab09eeecf440992a5d789/ac-rule-typeahead.png">
  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/9f4a9e93ba7e91e44c4ab09eeecf440992a5d789/ac-rule-typeahead.png" alt="App components rule typeahead request flow"/>
</a>

> Body parameter

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "query": "Messages",
  "task": "67890"
}
```

<h3 id="get-rule-action-typeahead-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TypeaheadListRequest](#schematypeaheadlistrequest)|true|Request to retrieve typeahead results in a rule action typeahead form field.|
|» expires_at|body|string|false|The time (in ISO 8601 date format) when the request should expire.|
|» user|body|string|false|The user GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» query|body|string|false|The user's input in the typeahead text input.|
|» task|body|string|false|*Conditional*. The task GID this hook is coming from. `task` is only present in the [modal form](/docs/modal-form) (as there is a "context task"), but not in the [rule action](/docs/rule-action) (as rules are associated with a _project_).|
|» user|body|string|false|The user GID this hook is coming from.|
|» expires_at|body|string|false|The time (in ISO 8601 format) when the request should expire.|

> Example responses

> 200 Response

```json
{
  "header": "List of messages",
  "items": [
    {
      "title": "OTP Team PF",
      "subtitle": "OTP",
      "value": "OTP",
      "icon_url": "https://example-icon.png"
    }
  ]
}
```

> 400 Response

```json
{
  "error": "Illegal or malformed request."
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="get-rule-action-typeahead-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved typeahead results.|[TypeaheadListResponse](#schematypeaheadlistresponse)|
|400|Bad Request|Bad request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Run action

<a id="opIdrunAction"></a>

> Code samples

```bash
curl https://example.com/run_action_url_path_placeholder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expires_at": "2019-04-15T01:01:46.055Z",
    "user": "54321",
    "workspace": "12345",
    "project": "12345",
    "target_object": "string",
    "action": "string",
    "action_type": "string",
    "idempotency_key": "string"
  }'
```

`POST /run_action_url_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

The request made when an action is triggered. Rule actions in rules containing a "Task added to this project" trigger have a 2 minute delay for newly created tasks in that project. This is to provide time for the creating user to fill out task details (name, description, etc.) before the rule action is triggered.

An app server must be hosted in order for rule actions to function. For a brief list of popular hosting options, see [hosting](/docs/hosting). <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/89ac88743dd7446b7ae94ba88937349cdc50f70f/ac-rule-run-action.png">
  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/89ac88743dd7446b7ae94ba88937349cdc50f70f/ac-rule-run-action.png" alt="App components rule run action request flow"/>
</a>

> Body parameter

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "project": "12345",
  "target_object": "string",
  "action": "string",
  "action_type": "string",
  "idempotency_key": "string"
}
```

<h3 id="run-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RunActionRequest](#schemarunactionrequest)|true|Request to notify of an action running.|
|» expires_at|body|string|false|The time (in ISO 8601 date format) when the request should expire.|
|» user|body|string|false|The user GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» project|body|string|false|The project GID this hook is coming from.|
|» target_object|body|string|false|The ID of the target object that the rule action is acting on. Currently, this value is always a task GID.|
|» action|body|string|false|The action ID generated from rule creation.|
|» action_type|body|string|false|The ID from the configuration used to create the rule action.|
|» idempotency_key|body|string|true|A unique key associated with the "run action" request. App servers should use this key to implement idempotency.|

> Example responses

> 200 Response

```json
{
  "error": "That resource no longer exists",
  "action_result": "ok",
  "resources_created": [
    {
      "resource_name": "Build the Thing",
      "resource_url": "https://example.atlassian.net/browse/CP-1",
      "error": "No resource matched that input"
    }
  ]
}
```

> 400 Response

```json
{
  "error": "Illegal or malformed request."
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="run-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully attached the resource created by the form.|[RanActionResponse](#schemaranactionresponse)|
|400|Bad Request|Bad request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|410|Gone|Gone|None|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get action metadata

<a id="opIdgetActionMetadata"></a>

> Code samples

```bash
curl 'https://example.com/action.metadata_url_path_placeholder?action_type=string&project=string&workspace=string&user=string&expires_at=string' \
  -H 'Accept: application/json'
```

`GET /action.metadata_url_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

When a user has navigated to the [custom rule builder](https://asana.com/guide/help/premium/rules#gl-create-rule) UI and selected a rule action (either through the sidebar or via a rule preset), Asana will make a request to the app to get the configuration form definition for the chosen rule action. This will initiate the flow to configure a new rule action or edit the configuration of an existing rule action. This is the endpoint and schema for updating rule actions; app triggers (V2) will be analogous. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/54149144bfbdb0897a8720f8411586d4ab86b545/ac-rule-metadata.png">
  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/54149144bfbdb0897a8720f8411586d4ab86b545/ac-rule-metadata.png" alt="App components rule metadata request flow"/>
</a>

<h3 id="get-action-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|false|The ID of an existing rule action that is being edited. Should be omitted when configuring a new rule action.|
|action_type|query|string|true|The ID of the configuration used to create the rule action.|
|project|query|string|true|The project GID this hook is coming from.|
|workspace|query|string|true|The workspace GID this hook is coming from.|
|user|query|string|true|The user GID this hook is coming from.|
|expires_at|query|string|true|The time (in ISO 8601 date format) when the request should expire.|

> Example responses

> 200 Response

```json
{
  "template": "form_metadata_v0",
  "metadata": {
    "title": "Create New Issue",
    "fields": [],
    "on_submit_callback": "https://www.example.com/on_submit",
    "on_change_callback": "https://www.example.com/on_change"
  }
}
```

> 400 Response

```json
{
  "error": "Illegal or malformed request."
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="get-action-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the metadata for a single action.|[FormMetadataResponse](#schemaformmetadataresponse)|
|400|Bad Request|Bad request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## On action change callback

<a id="opIdonActionFormChange"></a>

> Code samples

```bash
curl https://example.com/action.on_change_callback_path_placeholder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expires_at": "2019-04-15T01:01:46.055Z",
    "user": "54321",
    "workspace": "12345",
    "values": {
      "checkbox_field_1": [
        "opt-in"
      ],
      "date_field_1": "2021-12-31T08:00:00.000Z",
      "datetime_field_1": "2023-01-01T00:00:00.000Z",
      "dropdown_field_1": "red",
      "multi_line_text_field_1": "Multiline Text",
      "radio_button_field_1": "blue",
      "rich_text_field_1": "<BODY>Rich Text</BODY>",
      "single_line_text_field_1": "Single Line Text",
      "static_text_field_1": "Static Text",
      "typeahead_field_1": {
        "icon_url": "https://example.com/icon.png",
        "subtitle": "Subtitle",
        "title": "Title",
        "value": "Typeahead"
      }
    },
    "changed_field": "checkbox_field_1",
    "action": "12345",
    "action_type": "45678",
    "project": "12345"
  }'
```

`POST /action.on_change_callback_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

The callback request made to an app server when a watched field's value changes within an action form. The request is subject to a 10-second timeout if no response is received from the app server. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/e17aad6e1b091b6fa410679d417d4c48643339ea/ac-rule-on-change.png">
  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/e17aad6e1b091b6fa410679d417d4c48643339ea/ac-rule-on-change.png" alt="App components rule on change request flow"/>
</a>

> Body parameter

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  },
  "changed_field": "checkbox_field_1",
  "action": "12345",
  "action_type": "45678",
  "project": "12345"
}
```

<h3 id="on-action-change-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ActionFormOnChangeRequest](#schemaactionformonchangerequest)|true|Request to notify of an on change event.|
|» expires_at|body|string|false|The time (in ISO 8601 date format) when the request should expire.|
|» user|body|string|false|The user GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» values|body|object|false|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|
|» changed_field|body|string|false|The name of the changed FormField.|
|» action|body|string|false|The ID of an existing rule action that is being edited.|
|» action_type|body|string|false|The ID of the configuration used to create the rule action.|
|» project|body|string|false|The project GID this hook is coming from.|

> Example responses

> 200 Response

```json
{
  "template": "form_metadata_v0",
  "metadata": {
    "title": "Create New Issue",
    "fields": [],
    "on_submit_callback": "https://www.example.com/on_submit",
    "on_change_callback": "https://www.example.com/on_change"
  }
}
```

> 400 Response

```json
{
  "template": "form_metadata_v0",
  "metadata": {
    "title": "Create New Issue",
    "fields": [],
    "on_submit_callback": "https://www.example.com/on_submit",
    "on_change_callback": "https://www.example.com/on_change"
  }
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="on-action-change-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the new state of the form.|[FormMetadataResponse](#schemaformmetadataresponse)|
|400|Bad Request|Something was wrong with the form data.|[FormMetadataResponse](#schemaformmetadataresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## On action submit callback

<a id="opIdonActionFormSubmit"></a>

> Code samples

```bash
curl https://example.com/action.on_submit_callback_path_placeholder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expires_at": "2019-04-15T01:01:46.055Z",
    "user": "54321",
    "workspace": "12345",
    "values": {
      "checkbox_field_1": [
        "opt-in"
      ],
      "date_field_1": "2021-12-31T08:00:00.000Z",
      "datetime_field_1": "2023-01-01T00:00:00.000Z",
      "dropdown_field_1": "red",
      "multi_line_text_field_1": "Multiline Text",
      "radio_button_field_1": "blue",
      "rich_text_field_1": "<BODY>Rich Text</BODY>",
      "single_line_text_field_1": "Single Line Text",
      "static_text_field_1": "Static Text",
      "typeahead_field_1": {
        "icon_url": "https://example.com/icon.png",
        "subtitle": "Subtitle",
        "title": "Title",
        "value": "Typeahead"
      }
    },
    "task": "67890",
    "rule_name": "rule name",
    "action": "12345",
    "action_type": "45678",
    "project": "12345"
  }'
```

`POST /action.on_submit_callback_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

The form is submitted when the user chooses to create their rule. Asana will create the rule action data model object and make a signed request to the `on_submit_callback` specified in the form metadata returned from the fetch/update rule action form endpoints. Information about the created rule action should be included in the response if it was successfully created. This is the endpoint and schema for updating rule actions; app triggers (V2) will be analogous.

The request is subject to a 10-second timeout if no response is received from the app server. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6d4527451c4c506efec463438b506fb8a2e6d73f/ac-rule-on-submit.png">
  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6d4527451c4c506efec463438b506fb8a2e6d73f/ac-rule-on-submit.png" alt="App components rule on submit request flow"/>
</a>

> Body parameter

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  },
  "task": "67890",
  "rule_name": "rule name",
  "action": "12345",
  "action_type": "45678",
  "project": "12345"
}
```

<h3 id="on-action-submit-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ActionFormSubmissionRequest](#schemaactionformsubmissionrequest)|true|Request to submit an action form.|
|» expires_at|body|string|false|The time (in ISO 8601 date format) when the request should expire.|
|» user|body|string|false|The user GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» values|body|object|false|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|
|» task|body|string|false|The task GID this hook is coming from.|
|» rule_name|body|string|false|The name of the rule being created|
|» action|body|string|false|The ID of an existing rule action that is being edited|
|» action_type|body|string|false|The ID of the configuration used to create the rule action.|
|» project|body|string|false|The project GID this hook is coming from.|

> Example responses

> 400 Response

```json
{
  "template": "form_metadata_v0",
  "metadata": {
    "title": "Create New Issue",
    "fields": [],
    "on_submit_callback": "https://www.example.com/on_submit",
    "on_change_callback": "https://www.example.com/on_change"
  }
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="on-action-submit-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully handled form submission.|None|
|400|Bad Request|Something was wrong with the form data.|[FormMetadataResponse](#schemaformmetadataresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="app-components-lookups">Lookups</h1>

If the app defined a resource attach URL, tasks without a widget offer the lookup functionality. This appears as a text input to the user. When the user submits the text, the app responds with either a resource attachment or with an error.

## Attach resource

<a id="opIdattachResource"></a>

> Code samples

```bash
curl https://example.com/resource_attach_url_path_placeholder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expires_at": "2019-04-15T01:01:46.055Z",
    "user": "54321",
    "workspace": "12345",
    "task": "string",
    "attachment": "string",
    "query": "string"
  }'
```

`POST /resource_attach_url_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

When the user attaches a resource URL to a task, Asana will make a signed request to the specified `resource_attach_url` in the app configuration. Information about the attached resource should be included in the response.

> Body parameter

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "task": "string",
  "attachment": "string",
  "query": "string"
}
```

<h3 id="attach-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AttachResourceRequest](#schemaattachresourcerequest)|true|Request to attach a resource.|
|» expires_at|body|string|false|The time (in ISO 8601 date format) when the request should expire.|
|» user|body|string|false|The user GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» task|body|string|false|The task GID this hook is coming from.|
|» attachment|body|string|false|The attachment ID of the URL attachment|
|» query|body|string|false|The user’s input in the lookup text input. This is often a resource URL or resource key, such as `"CP-1"` or `"https://abcde.atlassian.net/browse/CP-1"`|

> Example responses

> 200 Response

```json
{
  "resource_name": "Build the Thing",
  "resource_url": "https://example.atlassian.net/browse/CP-1",
  "error": "No resource matched that input"
}
```

> 400 Response

```json
{
  "error": "Illegal or malformed request."
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="attach-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully attached the resource to the given object.|[AttachedResourceResponse](#schemaattachedresourceresponse)|
|400|Bad Request|Bad request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get lookup typeahead results

<a id="opIdgetTypeaheadResults"></a>

> Code samples

```bash
curl https://example.com/resource_typeahead_url_path_placeholder \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expires_at": "2019-04-15T01:01:46.055Z",
    "user": "54321",
    "workspace": "12345",
    "query": "Messages",
    "task": "67890"
  }'
```

`GET /resource_typeahead_url_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

Gets typeahead results to render as a dropdown list in the resource lookup input field.

When the user types into the lookup input field, Asana will send a request containing the entered string to the application's `typeahead_url`. The list of [TypeaheadItem](/reference/lookups#typeaheaditem)s in the response will then be rendered in a dropdown list. When the user selects an item from the list, Asana will send a [resource attach](/reference/attachresource) request to the app server, then process the response and render the attached resource in the widget.

> Body parameter

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "query": "Messages",
  "task": "67890"
}
```

<h3 id="get-lookup-typeahead-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TypeaheadListRequest](#schematypeaheadlistrequest)|true|Request to retrieve typeahead results for a resource lookup query.|
|» expires_at|body|string|false|The time (in ISO 8601 date format) when the request should expire.|
|» user|body|string|false|The user GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» workspace|body|string|false|The workspace GID this hook is coming from.|
|» query|body|string|false|The user's input in the typeahead text input.|
|» task|body|string|false|*Conditional*. The task GID this hook is coming from. `task` is only present in the [modal form](/docs/modal-form) (as there is a "context task"), but not in the [rule action](/docs/rule-action) (as rules are associated with a _project_).|
|» user|body|string|false|The user GID this hook is coming from.|
|» expires_at|body|string|false|The time (in ISO 8601 format) when the request should expire.|

> Example responses

> 200 Response

```json
{
  "header": "List of messages",
  "items": [
    {
      "title": "OTP Team PF",
      "subtitle": "OTP",
      "value": "OTP",
      "icon_url": "https://example-icon.png"
    }
  ]
}
```

> 400 Response

```json
{
  "error": "Illegal or malformed request."
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="get-lookup-typeahead-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved typeahead results.|[TypeaheadListResponse](#schematypeaheadlistresponse)|
|400|Bad Request|Bad request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="app-components-widgets">Widgets</h1>

The widget is displayed when the user views a task with an attachment with a resource URL matching your capability’s `match_resource_url_pattern`. When this happens, Asana will make a signed request to your `widget_metadata_url`, and expect a response with information to render in the widget.

## Get widget metadata

<a id="opIdgetWidgetMetadata"></a>

> Code samples

```bash
curl 'https://example.com/widget_metadata_url_path_placeholder?resource_url=string&workspace=string&task=string&user=string&attachment=string&expires_at=string' \
  -H 'Accept: application/json'
```

`GET /widget_metadata_url_path_placeholder`

_Note: The path is a placeholder. The actual path is determined by the configuration of the app component._

Get the metadata from the app server to render a widget. <br> <br> <a href="https://d3ki9tyy5l5ruj.cloudfront.net/obj/92841480867031372af8983f2906d26fbff6a2cc/ac-widget-metadata.png">
  <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/92841480867031372af8983f2906d26fbff6a2cc/ac-widget-metadata.png" alt="App components widget metadata request flow"/>
</a>

<h3 id="get-widget-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_url|query|string|true|The URL of the URL attachment on the task (i.e., Jira issue, GitHub pull request)|
|workspace|query|string|true|The workspace GID this hook is coming from.|
|task|query|string|true|The task GID this hook is coming from.|
|user|query|string|true|The user GID this hook is coming from.|
|attachment|query|string|true|The attachment ID of the URL attachment.|
|expires_at|query|string|true|The time (in ISO 8601 date format) when the request should expire.|

> Example responses

> 200 Response

```json
{
  "template": "summary_with_details_v0",
  "metadata": {
    "title": "Status",
    "fields": [],
    "subtitle": "Custom App Story · Open in Custom App",
    "subicon_url": "https://example-icon.png",
    "footer": {},
    "num_comments": 2
  }
}
```

> 400 Response

```json
{
  "error": "Illegal or malformed request."
}
```

> 401 Response

```json
{
  "error": "Authorization required."
}
```

> 403 Response

```json
{
  "error": "Access forbidden."
}
```

> 404 Response

```json
{
  "error": "Not found."
}
```

> 418 Response

```json
{
  "error": "Authorization required."
}
```

> 500 Response

```json
{
  "error": "Internal server error."
}
```

<h3 id="get-widget-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the metadata for a single widget.|[WidgetMetadataResponse](#schemawidgetmetadataresponse)|
|400|Bad Request|Bad request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|403|Forbidden|Forbidden|[ForbiddenResponse](#schemaforbiddenresponse)|
|404|Not Found|Not found|[NotFoundResponse](#schemanotfoundresponse)|
|418|I'm a Teapot|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|500|Internal Server Error|Server error|[InternalServerErrorResponse](#schemainternalservererrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_RootUIComponentRequest">RootUIComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemarootuicomponentrequest"></a>
<a id="schema_RootUIComponentRequest"></a>
<a id="tocSrootuicomponentrequest"></a>
<a id="tocsrootuicomponentrequest"></a>

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345"
}
```

The building block of all app component requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string|false|none|The time (in ISO 8601 date format) when the request should expire.|
|user|string|false|none|The user GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|

<h2 id="tocS_AttachResourceRequest">AttachResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachresourcerequest"></a>
<a id="schema_AttachResourceRequest"></a>
<a id="tocSattachresourcerequest"></a>
<a id="tocsattachresourcerequest"></a>

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "task": "string",
  "attachment": "string",
  "query": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string|false|none|The time (in ISO 8601 date format) when the request should expire.|
|user|string|false|none|The user GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|
|task|string|false|none|The task GID this hook is coming from.|
|attachment|string|false|none|The attachment ID of the URL attachment|
|query|string|false|none|The user’s input in the lookup text input. This is often a resource URL or resource key, such as `"CP-1"` or `"https://abcde.atlassian.net/browse/CP-1"`|

<h2 id="tocS_AttachedResourceResponse">AttachedResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachedresourceresponse"></a>
<a id="schema_AttachedResourceResponse"></a>
<a id="tocSattachedresourceresponse"></a>
<a id="tocsattachedresourceresponse"></a>

```json
{
  "resource_name": "Build the Thing",
  "resource_url": "https://example.atlassian.net/browse/CP-1",
  "error": "No resource matched that input"
}
```

The response to a successful lookup request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource_name|string|true|none|The name of the attached resource|
|resource_url|string|true|none|The URL of the attached resource|
|error|string|false|none|The error that should be displayed to the user|

<h2 id="tocS_BadRequestResponse">BadRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestresponse"></a>
<a id="schema_BadRequestResponse"></a>
<a id="tocSbadrequestresponse"></a>
<a id="tocsbadrequestresponse"></a>

```json
{
  "error": "Illegal or malformed request."
}
```

An error response object indicating a bad request (i.e., a status code of `400`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error to display.|

<h2 id="tocS_CheckboxOption">CheckboxOption</h2>
<!-- backwards compatibility -->
<a id="schemacheckboxoption"></a>
<a id="schema_CheckboxOption"></a>
<a id="tocScheckboxoption"></a>
<a id="tocscheckboxoption"></a>

```json
{
  "id": "opt-in",
  "label": "Opt in"
}
```

An option for a checkbox field (i.e., an object in the field's `options` array).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the option.|
|label|string|true|none|The label of the option. Limit 80 characters.|

<h2 id="tocS_DropdownOption">DropdownOption</h2>
<!-- backwards compatibility -->
<a id="schemadropdownoption"></a>
<a id="schema_DropdownOption"></a>
<a id="tocSdropdownoption"></a>
<a id="tocsdropdownoption"></a>

```json
{
  "id": "red",
  "label": "Red",
  "icon_url": "https://example.com/red.png"
}
```

An option for a dropdown field (i.e., an object in the field's `options` array).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the option.|
|label|string|true|none|The label of the option. Limit 80 characters.|
|icon_url|string|false|none|*Optional*. The URL for the icon beside the label. If not present, no icon will be displayed.|

<h2 id="tocS_ForbiddenResponse">ForbiddenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenresponse"></a>
<a id="schema_ForbiddenResponse"></a>
<a id="tocSforbiddenresponse"></a>
<a id="tocsforbiddenresponse"></a>

```json
{
  "error": "Access forbidden."
}
```

An error response object indicating a forbidden request (i.e., a status code of `403`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error to display.|

<h2 id="tocS_InternalServerErrorResponse">InternalServerErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorresponse"></a>
<a id="schema_InternalServerErrorResponse"></a>
<a id="tocSinternalservererrorresponse"></a>
<a id="tocsinternalservererrorresponse"></a>

```json
{
  "error": "Internal server error."
}
```

An error response object indicating a request that could not be found (i.e., a status code of `500`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error to display.|

<h2 id="tocS_FormField-StaticText">FormField-StaticText</h2>
<!-- backwards compatibility -->
<a id="schemaformfield-statictext"></a>
<a id="schema_FormField-StaticText"></a>
<a id="tocSformfield-statictext"></a>
<a id="tocsformfield-statictext"></a>

```json
{
  "type": "static_text",
  "id": "static_text_field_1",
  "name": "Please enter the following details:",
  "style": "default"
}
```

A modal form "field" that displays static text. Fields of this type do not collect user input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of modal form field.|
|id|string|true|none|The ID of the field, which is used to reference the field. These should be unique across the entire form.|
|name|string|true|none|The text (i.e., label) for the field. Limit 50 characters.|
|style|string|false|none|*Optional*. The style of the field. If not provided, the default value will be `"default"`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|static_text|
|style|default|
|style|header|

<h2 id="tocS_FormField-SingleLineText">FormField-SingleLineText</h2>
<!-- backwards compatibility -->
<a id="schemaformfield-singlelinetext"></a>
<a id="schema_FormField-SingleLineText"></a>
<a id="tocSformfield-singlelinetext"></a>
<a id="tocsformfield-singlelinetext"></a>

```json
{
  "type": "single_line_text",
  "id": "single_line_text_field_1",
  "name": "Resource name",
  "is_required": true,
  "is_watched": true,
  "error": "Please review and change your input",
  "placeholder": "Enter the full title of the resource here",
  "width": "full",
  "value": "Annual Kick-Off Meeting"
}
```

A modal form field that accepts single-line text input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of modal form field.|
|id|string|true|none|The ID of the field, which is used to reference the field. These should be unique across the entire form.|
|name|string|false|none|The text (i.e., label) to show in the title of the field. Limit 50 characters.|
|is_required|boolean|false|none|*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.|
|is_watched|boolean|false|none|*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.|
|error|string|false|none|*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.|
|placeholder|string|false|none|The placeholder for the input, which is shown if the field has no value. If not provided, there will be no placeholder.|
|width|string|false|none|*Optional*. The width of the form field. If not provided, the default value will be `"full"`.|
|value|string|false|none|The value of the field. If not provided, the field will be empty and the form cannot be submitted if it is required. Limit 200 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|single_line_text|
|width|full|
|width|half|

<h2 id="tocS_FormField-MultiLineText">FormField-MultiLineText</h2>
<!-- backwards compatibility -->
<a id="schemaformfield-multilinetext"></a>
<a id="schema_FormField-MultiLineText"></a>
<a id="tocSformfield-multilinetext"></a>
<a id="tocsformfield-multilinetext"></a>

```json
{
  "type": "multi_line_text",
  "id": "multi_line_text_field_1",
  "name": "Resource name",
  "is_required": true,
  "is_watched": true,
  "error": "Please review and change your input",
  "placeholder": "Enter the full title of the resource here",
  "value": "Annual Kick-Off Meeting"
}
```

A modal form field that accepts multi-line text input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of modal form field.|
|id|string|true|none|The ID of the field, which is used to reference the field. These should be unique across the entire form.|
|name|string|false|none|The text (i.e., label) to show in the title of the field. Limit 50 characters.|
|is_required|boolean|false|none|*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.|
|is_watched|boolean|false|none|*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.|
|error|string|false|none|*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.|
|placeholder|string|false|none|The placeholder for the input, which is shown if the field has no value. If not provided, there will be no placeholder.|
|value|string|false|none|The value of the field. If not provided, the field will be empty and the form cannot be submitted if it is required. Limit 3000 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|multi_line_text|

<h2 id="tocS_FormField-RichText">FormField-RichText</h2>
<!-- backwards compatibility -->
<a id="schemaformfield-richtext"></a>
<a id="schema_FormField-RichText"></a>
<a id="tocSformfield-richtext"></a>
<a id="tocsformfield-richtext"></a>

```json
{
  "type": "rich_text",
  "id": "rich_text_field_1",
  "name": "Resource name",
  "is_required": true,
  "is_watched": true,
  "error": "Please review and change your input",
  "placeholder": "Enter the full title of the resource here",
  "value": "Annual Kick-Off Meeting"
}
```

A modal form field that accepts rich text input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of modal form field.|
|id|string|true|none|The ID of the field, which is used to reference the field. These should be unique across the entire form.|
|name|string|false|none|The text (i.e., label) to show in the title of the field. Limit 50 characters.|
|is_required|boolean|false|none|*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.|
|is_watched|boolean|false|none|*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.|
|error|string|false|none|*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.|
|placeholder|string|false|none|The placeholder for the input, which is shown if the field has no value. If not provided, there will be no placeholder.|
|value|string|false|none|The value of the field. If not provided, the field will be empty and the form cannot be submitted if it is required. Limit 3000 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|rich_text|

<h2 id="tocS_FormField-Dropdown">FormField-Dropdown</h2>
<!-- backwards compatibility -->
<a id="schemaformfield-dropdown"></a>
<a id="schema_FormField-Dropdown"></a>
<a id="tocSformfield-dropdown"></a>
<a id="tocsformfield-dropdown"></a>

```json
{
  "type": "dropdown",
  "id": "dropdown_field_1",
  "name": "Resource name",
  "is_required": true,
  "is_watched": true,
  "error": "Please review and change your input",
  "width": "full",
  "value": "dropdown_option_1",
  "options": [
    {
      "id": "red",
      "label": "Red",
      "icon_url": "https://example.com/red.png"
    }
  ]
}
```

A modal form field that accepts input via a dropdown list. Limit 50 options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of modal form field.|
|id|string|true|none|The ID of the field, which is used to reference the field. These should be unique across the entire form.|
|name|string|false|none|The text (i.e., label) to show in the title of the field. Limit 50 characters.|
|is_required|boolean|false|none|*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.|
|is_watched|boolean|false|none|*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.|
|error|string|false|none|*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.|
|width|string|false|none|*Optional*. The width of the form field. If not provided, the default value will be `"full"`.|
|value|string|false|none|*Optional*. The value for the form field, which is the ID of the chosen DropdownOption object.|
|options|[[DropdownOption](#schemadropdownoption)]|true|none|An array (minimum length: 1) of DropdownOption objects.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dropdown|
|width|full|
|width|half|

<h2 id="tocS_FormField-RadioButton">FormField-RadioButton</h2>
<!-- backwards compatibility -->
<a id="schemaformfield-radiobutton"></a>
<a id="schema_FormField-RadioButton"></a>
<a id="tocSformfield-radiobutton"></a>
<a id="tocsformfield-radiobutton"></a>

```json
{
  "type": "radio_button",
  "id": "radio_button_field_1",
  "name": "Resource name",
  "is_required": true,
  "is_watched": true,
  "error": "Please review and change your input",
  "value": "radio_option_1",
  "options": [
    {
      "id": "radio_option_1",
      "label": "Radio Option 1",
      "sub_label": "#0000FF"
    }
  ]
}
```

A modal form field that accepts radio button input. Limit 5 options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of modal form field.|
|id|string|true|none|The ID of the field, which is used to reference the field. These should be unique across the entire form.|
|name|string|false|none|The text (i.e., label) to show in the title of the field. Limit 50 characters.|
|is_required|boolean|false|none|*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.|
|is_watched|boolean|false|none|*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.|
|error|string|false|none|*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.|
|value|string|false|none|*Optional*. The value for the form field, which is the ID of the chosen RadioOption object.|
|options|[[RadioOption](#schemaradiooption)]|true|none|An array (minimum length: 1) of RadioOption objects.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|radio_button|

<h2 id="tocS_FormField-Checkbox">FormField-Checkbox</h2>
<!-- backwards compatibility -->
<a id="schemaformfield-checkbox"></a>
<a id="schema_FormField-Checkbox"></a>
<a id="tocSformfield-checkbox"></a>
<a id="tocsformfield-checkbox"></a>

```json
{
  "type": "checkbox",
  "id": "checkbox_field_1",
  "name": "Resource name",
  "is_required": true,
  "is_watched": true,
  "error": "Please review and change your input",
  "value": [
    "opt-in"
  ],
  "options": [
    {
      "id": "opt-in",
      "label": "Opt in"
    }
  ]
}
```

A modal form field that accepts checkbox input. Limit 10 options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of modal form field.|
|id|string|true|none|The ID of the field, which is used to reference the field. These should be unique across the entire form.|
|name|string|false|none|The text (i.e., label) to show in the title of the field. Limit 50 characters.|
|is_required|boolean|false|none|*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.|
|is_watched|boolean|false|none|*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.|
|error|string|false|none|*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.|
|value|[string]|false|none|*Optional*. The values for the form field, which are the IDs of the chosen CheckboxOption objects.|
|options|[[CheckboxOption](#schemacheckboxoption)]|true|none|An array (minimum length: 1) of CheckboxOption objects.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|checkbox|

<h2 id="tocS_FormField-Date">FormField-Date</h2>
<!-- backwards compatibility -->
<a id="schemaformfield-date"></a>
<a id="schema_FormField-Date"></a>
<a id="tocSformfield-date"></a>
<a id="tocsformfield-date"></a>

```json
{
  "type": "date",
  "id": "date_field_1",
  "name": "Date",
  "is_required": true,
  "is_watched": true,
  "error": "Please review and change your input",
  "placeholder": "2022-02-01",
  "value": "2022-02-01"
}
```

A modal form field that accepts date input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of modal form field.|
|id|string|true|none|The ID of the field, which is used to reference the field. These should be unique across the entire form.|
|name|string|false|none|The text (i.e., label) to show in the title of the field. Limit 50 characters.|
|is_required|boolean|false|none|*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.|
|is_watched|boolean|false|none|*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.|
|error|string|false|none|*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.|
|placeholder|string|false|none|The placeholder for the input, which is shown if the field has no value. If not provided, there will be no placeholder.|
|value|string(date) \| null|false|none|The value of the field. This takes a date with format YYYY-MM-DD or ISO 8601 date string in UTC.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|date|

<h2 id="tocS_FormField-Datetime">FormField-Datetime</h2>
<!-- backwards compatibility -->
<a id="schemaformfield-datetime"></a>
<a id="schema_FormField-Datetime"></a>
<a id="tocSformfield-datetime"></a>
<a id="tocsformfield-datetime"></a>

```json
{
  "type": "datetime",
  "id": "datetime_field_1",
  "name": "Datetime",
  "is_required": true,
  "is_watched": true,
  "error": "Please review and change your input",
  "placeholder": "2022-02-01T14:48:00.000Z",
  "value": "2022-02-01T14:48:00.000Z"
}
```

A modal form field that accepts datetime input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of modal form field.|
|id|string|true|none|The ID of the field, which is used to reference the field. These should be unique across the entire form.|
|name|string|false|none|The text (i.e., label) to show in the title of the field. Limit 50 characters.|
|is_required|boolean|false|none|*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.|
|is_watched|boolean|false|none|*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.|
|error|string|false|none|*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.|
|placeholder|string|false|none|The placeholder for the input, which is shown if the field has no value. If not provided, there will be no placeholder.|
|value|string(date-time) \| null|false|none|The value of the field. This value takes the form of an ISO 8601 date string in UTC.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|datetime|

<h2 id="tocS_FormField-Typeahead">FormField-Typeahead</h2>
<!-- backwards compatibility -->
<a id="schemaformfield-typeahead"></a>
<a id="schema_FormField-Typeahead"></a>
<a id="tocSformfield-typeahead"></a>
<a id="tocsformfield-typeahead"></a>

```json
{
  "type": "typeahead",
  "id": "typeahead_field_1",
  "name": "Statuses",
  "is_required": true,
  "is_watched": true,
  "error": "Please review and change your input",
  "width": "full",
  "typeahead_url": "https://www.app-server.com/app/typeahead",
  "value": {
    "title": "OTP Team PF",
    "subtitle": "OTP",
    "value": "OTP",
    "icon_url": "https://example-icon.png"
  }
}
```

A modal form field that accepts typeahead input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of modal form field.|
|id|string|true|none|The ID of the field, which is used to reference the field. These should be unique across the entire form.|
|name|string|false|none|The text (i.e., label) to show in the title of the field. Limit 50 characters.|
|is_required|boolean|false|none|*Optional*. Indicates whether the field is required to submit the form. If this property is not specified, the value is assumed `false`.|
|is_watched|boolean|false|none|*Optional*. Indicates whether the field should be watched. Fields that are watched send requests to the `on_change` URL specified in the form metadata to get updated form information. If this property is not specified, the value is assumed `false`.|
|error|string|false|none|*Optional*. The developer-specified error message displayed to the user if there is an error with the chosen value.|
|width|string|false|none|*Optional*. The width of the form field. If not provided, the default value will be `"full"`.|
|typeahead_url|string|true|none|The URL that Asana uses to request typehead results from the application server.|
|value|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|typeahead|
|width|full|
|width|half|

<h2 id="tocS_FormMetadataResponse">FormMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaformmetadataresponse"></a>
<a id="schema_FormMetadataResponse"></a>
<a id="tocSformmetadataresponse"></a>
<a id="tocsformmetadataresponse"></a>

```json
{
  "template": "form_metadata_v0",
  "metadata": {
    "title": "Create New Issue",
    "fields": [],
    "on_submit_callback": "https://www.example.com/on_submit",
    "on_change_callback": "https://www.example.com/on_change"
  }
}
```

Contains the metadata that describes how to display and manage a form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|string|true|none|The interface name and version of a distinct form UI layout. A `template` is directly associated with a particular `metadata` schema.|
|metadata|object|true|none|The metadata (i.e., underlying definition) of a form. `metadata` must exist alongside a `template`, and its schema must be specific to the value of that `template`.|

#### Enumerated Values

|Property|Value|
|---|---|
|template|form_metadata_v0|

<h2 id="tocS_FormOnChangeFormSubmissionRequest">FormOnChangeFormSubmissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaformonchangeformsubmissionrequest"></a>
<a id="schema_FormOnChangeFormSubmissionRequest"></a>
<a id="tocSformonchangeformsubmissionrequest"></a>
<a id="tocsformonchangeformsubmissionrequest"></a>

```json
{
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  }
}
```

Common properties between app component on change and on submit requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|object|false|none|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|

<h2 id="tocS_FormSubmissionRequest">FormSubmissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaformsubmissionrequest"></a>
<a id="schema_FormSubmissionRequest"></a>
<a id="tocSformsubmissionrequest"></a>
<a id="tocsformsubmissionrequest"></a>

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  },
  "task": "67890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string|false|none|The time (in ISO 8601 date format) when the request should expire.|
|user|string|false|none|The user GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|
|values|object|false|none|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|
|task|string|false|none|The task GID this hook is coming from.|

<h2 id="tocS_OnSubmitCallbackRequest">OnSubmitCallbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaonsubmitcallbackrequest"></a>
<a id="schema_OnSubmitCallbackRequest"></a>
<a id="tocSonsubmitcallbackrequest"></a>
<a id="tocsonsubmitcallbackrequest"></a>

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  },
  "task": "67890",
  "attachment": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string|false|none|The time (in ISO 8601 date format) when the request should expire.|
|user|string|false|none|The user GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|
|values|object|false|none|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|
|task|string|false|none|The task GID this hook is coming from.|
|attachment|string|false|none|The GID of the attachment created from the form submission.|

<h2 id="tocS_ActionFormSubmissionRequest">ActionFormSubmissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactionformsubmissionrequest"></a>
<a id="schema_ActionFormSubmissionRequest"></a>
<a id="tocSactionformsubmissionrequest"></a>
<a id="tocsactionformsubmissionrequest"></a>

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  },
  "task": "67890",
  "rule_name": "rule name",
  "action": "12345",
  "action_type": "45678",
  "project": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string|false|none|The time (in ISO 8601 date format) when the request should expire.|
|user|string|false|none|The user GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|
|values|object|false|none|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|
|task|string|false|none|The task GID this hook is coming from.|
|rule_name|string|false|none|The name of the rule being created|
|action|string|false|none|The ID of an existing rule action that is being edited|
|action_type|string|false|none|The ID of the configuration used to create the rule action.|
|project|string|false|none|The project GID this hook is coming from.|

<h2 id="tocS_WidgetFooter-Created">WidgetFooter-Created</h2>
<!-- backwards compatibility -->
<a id="schemawidgetfooter-created"></a>
<a id="schema_WidgetFooter-Created"></a>
<a id="tocSwidgetfooter-created"></a>
<a id="tocswidgetfooter-created"></a>

```json
{
  "footer_type": "created",
  "created_at": "2012-02-22T02:06:58.147Z"
}
```

A widget footer that displays the timestamp of the resource's creation time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|footer_type|string|true|none|The type of widget footer.|
|created_at|string|true|none|The time (in ISO 8601 date format) to show in the footer.|

#### Enumerated Values

|Property|Value|
|---|---|
|footer_type|created|

<h2 id="tocS_WidgetFooter-CustomText">WidgetFooter-CustomText</h2>
<!-- backwards compatibility -->
<a id="schemawidgetfooter-customtext"></a>
<a id="schema_WidgetFooter-CustomText"></a>
<a id="tocSwidgetfooter-customtext"></a>
<a id="tocswidgetfooter-customtext"></a>

```json
{
  "footer_type": "custom_text",
  "text": "This is a custom footer message",
  "icon_url": "https://example-icon.png"
}
```

A widget footer that displays custom text and an optional icon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|footer_type|string|true|none|The text to show in the footer.|
|text|string|true|none|The text to show in the footer.|
|icon_url|string|false|none|*Optional*. The icon to show in the footer next to the text. If not provided, no icon will be shown.|

#### Enumerated Values

|Property|Value|
|---|---|
|footer_type|custom_text|

<h2 id="tocS_FormOnChangeBaseRequest">FormOnChangeBaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaformonchangebaserequest"></a>
<a id="schema_FormOnChangeBaseRequest"></a>
<a id="tocSformonchangebaserequest"></a>
<a id="tocsformonchangebaserequest"></a>

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  },
  "changed_field": "checkbox_field_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string|false|none|The time (in ISO 8601 date format) when the request should expire.|
|user|string|false|none|The user GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|
|values|object|false|none|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|
|changed_field|string|false|none|The name of the changed FormField.|

<h2 id="tocS_FormOnChangeRequest">FormOnChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaformonchangerequest"></a>
<a id="schema_FormOnChangeRequest"></a>
<a id="tocSformonchangerequest"></a>
<a id="tocsformonchangerequest"></a>

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  },
  "changed_field": "checkbox_field_1",
  "task": "67890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string|false|none|The time (in ISO 8601 date format) when the request should expire.|
|user|string|false|none|The user GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|
|values|object|false|none|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|
|changed_field|string|false|none|The name of the changed FormField.|
|task|string|false|none|The task GID this hook is coming from.|

<h2 id="tocS_ActionFormOnChangeRequest">ActionFormOnChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactionformonchangerequest"></a>
<a id="schema_ActionFormOnChangeRequest"></a>
<a id="tocSactionformonchangerequest"></a>
<a id="tocsactionformonchangerequest"></a>

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "values": {
    "checkbox_field_1": [
      "opt-in"
    ],
    "date_field_1": "2021-12-31T08:00:00.000Z",
    "datetime_field_1": "2023-01-01T00:00:00.000Z",
    "dropdown_field_1": "red",
    "multi_line_text_field_1": "Multiline Text",
    "radio_button_field_1": "blue",
    "rich_text_field_1": "<BODY>Rich Text</BODY>",
    "single_line_text_field_1": "Single Line Text",
    "static_text_field_1": "Static Text",
    "typeahead_field_1": {
      "icon_url": "https://example.com/icon.png",
      "subtitle": "Subtitle",
      "title": "Title",
      "value": "Typeahead"
    }
  },
  "changed_field": "checkbox_field_1",
  "action": "12345",
  "action_type": "45678",
  "project": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string|false|none|The time (in ISO 8601 date format) when the request should expire.|
|user|string|false|none|The user GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|
|values|object|false|none|An object that maps each FormField’s GID to its value.<br>Refer to the `value` property on the FormField schema: [FormField-Checkbox](/reference/modal-forms#formfield-checkbox), [FormField-Date](/reference/modal-forms#formfield-date), [FormField-Datetime](/reference/modal-forms#formfield-datetime), [FormField-Dropdown](/reference/modal-forms#formfield-dropdown), [FormField-MultiLineText](/reference/modal-forms#formfield-multilinetext), [FormField-RadioButton](/reference/modal-forms#formfield-radiobutton), [FormField-RichText](/reference/modal-forms#formfield-richtext), [FormField-SingleLineText](/reference/modal-forms#formfield-singlelinetext), [FormField-StaticText](/reference/modal-forms#formfield-statictext), [FormField-Typeahead](/reference/modal-forms#formfield-typeahead)|
|changed_field|string|false|none|The name of the changed FormField.|
|action|string|false|none|The ID of an existing rule action that is being edited.|
|action_type|string|false|none|The ID of the configuration used to create the rule action.|
|project|string|false|none|The project GID this hook is coming from.|

<h2 id="tocS_NotFoundResponse">NotFoundResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundresponse"></a>
<a id="schema_NotFoundResponse"></a>
<a id="tocSnotfoundresponse"></a>
<a id="tocsnotfoundresponse"></a>

```json
{
  "error": "Not found."
}
```

An error response object indicating a request that could not be found (i.e., a status code of `404`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error to display.|

<h2 id="tocS_RunActionRequest">RunActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemarunactionrequest"></a>
<a id="schema_RunActionRequest"></a>
<a id="tocSrunactionrequest"></a>
<a id="tocsrunactionrequest"></a>

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "project": "12345",
  "target_object": "string",
  "action": "string",
  "action_type": "string",
  "idempotency_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string|false|none|The time (in ISO 8601 date format) when the request should expire.|
|user|string|false|none|The user GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|
|project|string|false|none|The project GID this hook is coming from.|
|target_object|string|false|none|The ID of the target object that the rule action is acting on. Currently, this value is always a task GID.|
|action|string|false|none|The action ID generated from rule creation.|
|action_type|string|false|none|The ID from the configuration used to create the rule action.|
|idempotency_key|string|true|none|A unique key associated with the "run action" request. App servers should use this key to implement idempotency.|

<h2 id="tocS_RanActionResponse">RanActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaranactionresponse"></a>
<a id="schema_RanActionResponse"></a>
<a id="tocSranactionresponse"></a>
<a id="tocsranactionresponse"></a>

```json
{
  "error": "That resource no longer exists",
  "action_result": "ok",
  "resources_created": [
    {
      "resource_name": "Build the Thing",
      "resource_url": "https://example.atlassian.net/browse/CP-1",
      "error": "No resource matched that input"
    }
  ]
}
```

The response to an action request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error that should be displayed to the user.|
|action_result|string|true|none|Specifies any additional information that the app wants to send to Asana on completion of the action. Can only be `resources_created` or `ok`.|
|resources_created|[[AttachedResourceResponse](#schemaattachedresourceresponse)]|false|none|A field with the data corresponding to the action_result value. Each `action_result` has its own data field shape that Asana expects. `resources_created` expects the name and URL of the resources that the action created.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_result|resources_created|
|action_result|ok|

<h2 id="tocS_RadioOption">RadioOption</h2>
<!-- backwards compatibility -->
<a id="schemaradiooption"></a>
<a id="schema_RadioOption"></a>
<a id="tocSradiooption"></a>
<a id="tocsradiooption"></a>

```json
{
  "id": "radio_option_1",
  "label": "Radio Option 1",
  "sub_label": "#0000FF"
}
```

An option for a radio button field (i.e., an object in the field's `options` array).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the option.|
|label|string|true|none|The label of the option. Limit 80 characters.|
|sub_label|string|false|none|*Optional*. The label to display as subtext for the `label`.|

<h2 id="tocS_TypeaheadItem">TypeaheadItem</h2>
<!-- backwards compatibility -->
<a id="schematypeaheaditem"></a>
<a id="schema_TypeaheadItem"></a>
<a id="tocStypeaheaditem"></a>
<a id="tocstypeaheaditem"></a>

```json
{
  "title": "OTP Team PF",
  "subtitle": "OTP",
  "value": "OTP",
  "icon_url": "https://example-icon.png"
}
```

An object describing a typeahead result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|The title of the typeahead item.|
|subtitle|string|false|none|The subtitle of the typeahead item.|
|value|string|true|none|The value of the typeahead item.|
|icon_url|string|false|none|The URL of the icon to display next to the title.|

<h2 id="tocS_TypeaheadListRequest">TypeaheadListRequest</h2>
<!-- backwards compatibility -->
<a id="schematypeaheadlistrequest"></a>
<a id="schema_TypeaheadListRequest"></a>
<a id="tocStypeaheadlistrequest"></a>
<a id="tocstypeaheadlistrequest"></a>

```json
{
  "expires_at": "2019-04-15T01:01:46.055Z",
  "user": "54321",
  "workspace": "12345",
  "query": "Messages",
  "task": "67890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string|false|none|The time (in ISO 8601 date format) when the request should expire.|
|user|string|false|none|The user GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|
|workspace|string|false|none|The workspace GID this hook is coming from.|
|query|string|false|none|The user's input in the typeahead text input.|
|task|string|false|none|*Conditional*. The task GID this hook is coming from. `task` is only present in the [modal form](/docs/modal-form) (as there is a "context task"), but not in the [rule action](/docs/rule-action) (as rules are associated with a _project_).|
|user|string|false|none|The user GID this hook is coming from.|
|expires_at|string|false|none|The time (in ISO 8601 format) when the request should expire.|

<h2 id="tocS_TypeaheadListResponse">TypeaheadListResponse</h2>
<!-- backwards compatibility -->
<a id="schematypeaheadlistresponse"></a>
<a id="schema_TypeaheadListResponse"></a>
<a id="tocStypeaheadlistresponse"></a>
<a id="tocstypeaheadlistresponse"></a>

```json
{
  "header": "List of messages",
  "items": [
    {
      "title": "OTP Team PF",
      "subtitle": "OTP",
      "value": "OTP",
      "icon_url": "https://example-icon.png"
    }
  ]
}
```

The response to a successful typeahead request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|string|false|none|*Optional*. Header text to display above the list of typeahead results. If no `header` is passed in or the value is an empty string, only the typeahead results with be rendered.|
|items|[[TypeaheadItem](#schematypeaheaditem)]|true|none|Array of [TypeaheadItem](/reference/lookups#typeaheaditem) objects that indicate typeahead results.|

<h2 id="tocS_UnauthorizedResponse">UnauthorizedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedresponse"></a>
<a id="schema_UnauthorizedResponse"></a>
<a id="tocSunauthorizedresponse"></a>
<a id="tocsunauthorizedresponse"></a>

```json
{
  "error": "Authorization required."
}
```

An error response object indicating a unauthorized request (i.e., a status code of `401`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error to display.|

<h2 id="tocS_WidgetFooter-Updated">WidgetFooter-Updated</h2>
<!-- backwards compatibility -->
<a id="schemawidgetfooter-updated"></a>
<a id="schema_WidgetFooter-Updated"></a>
<a id="tocSwidgetfooter-updated"></a>
<a id="tocswidgetfooter-updated"></a>

```json
{
  "footer_type": "updated",
  "last_updated_at": "2012-02-22T02:06:58.147Z"
}
```

A widget footer that displays the timestamp of the resource's last updated time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|footer_type|string|true|none|The type of widget footer.|
|last_updated_at|string|true|none|The time (in ISO 8601 date format) to show in the footer.|

#### Enumerated Values

|Property|Value|
|---|---|
|footer_type|updated|

<h2 id="tocS_WidgetField-DatetimeWithIcon">WidgetField-DatetimeWithIcon</h2>
<!-- backwards compatibility -->
<a id="schemawidgetfield-datetimewithicon"></a>
<a id="schema_WidgetField-DatetimeWithIcon"></a>
<a id="tocSwidgetfield-datetimewithicon"></a>
<a id="tocswidgetfield-datetimewithicon"></a>

```json
{
  "type": "datetime_with_icon",
  "name": "Status",
  "datetime": "2012-02-22T02:06:58.147Z",
  "icon_url": "https://example-icon.png"
}
```

A widget field that displays a timestamp and an optional icon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of widget field.|
|name|string|true|none|The text (i.e., label) to show in the title of the field. Limit 40 characters.|
|datetime|string|false|none|The time (in ISO 8601 date format) to display next to the icon.|
|icon_url|string|false|none|*Optional*. The URL of the icon to display next to the time.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|datetime_with_icon|

<h2 id="tocS_WidgetField-Pill">WidgetField-Pill</h2>
<!-- backwards compatibility -->
<a id="schemawidgetfield-pill"></a>
<a id="schema_WidgetField-Pill"></a>
<a id="tocSwidgetfield-pill"></a>
<a id="tocswidgetfield-pill"></a>

```json
{
  "type": "pill",
  "name": "Status",
  "text": "In Progress",
  "color": "cool-gray"
}
```

A widget field that displays custom text in a colored "pill" format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of widget field.|
|name|string|true|none|The text (i.e., label) to show in the title of the field. Limit 40 characters.|
|text|string|true|none|The text to show in the field. Limit 40 characters.|
|color|string|true|none|The color of the pill.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pill|
|color|none|
|color|red|
|color|orange|
|color|yellow-orange|
|color|yellow|
|color|yellow-green|
|color|green|
|color|blue-green|
|color|aqua|
|color|blue|
|color|indigo|
|color|purple|
|color|magenta|
|color|hot-pink|
|color|pink|
|color|cool-gray|

<h2 id="tocS_WidgetField-TextWithIcon">WidgetField-TextWithIcon</h2>
<!-- backwards compatibility -->
<a id="schemawidgetfield-textwithicon"></a>
<a id="schema_WidgetField-TextWithIcon"></a>
<a id="tocSwidgetfield-textwithicon"></a>
<a id="tocswidgetfield-textwithicon"></a>

```json
{
  "type": "text_with_icon",
  "name": "Status",
  "text": "In Progress",
  "icon_url": "https://example-icon.png"
}
```

A widget field that displays custom text with an optional icon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of widget field.|
|name|string|true|none|The text (i.e., label) to show in the title of the field. Limit 40 characters.|
|text|string|true|none|The text to show in the field. Limit 40 characters.|
|icon_url|string|false|none|*Optional*. The URL of the icon to display next to the text.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text_with_icon|

<h2 id="tocS_WidgetMetadataResponse">WidgetMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemawidgetmetadataresponse"></a>
<a id="schema_WidgetMetadataResponse"></a>
<a id="tocSwidgetmetadataresponse"></a>
<a id="tocswidgetmetadataresponse"></a>

```json
{
  "template": "summary_with_details_v0",
  "metadata": {
    "title": "Status",
    "fields": [],
    "subtitle": "Custom App Story · Open in Custom App",
    "subicon_url": "https://example-icon.png",
    "footer": {},
    "num_comments": 2
  }
}
```

An object containing information about the widget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|string|true|none|The interface name and version of a distinct widget UI layout. A `template` is directly associated with a particular `metadata` schema.|
|metadata|object|true|none|The metadata (i.e., underlying definition) of a widget. `metadata` must exist alongside a `template`, and its schema must be specific to the value of that `template`.|

#### Enumerated Values

|Property|Value|
|---|---|
|template|summary_with_details_v0|
