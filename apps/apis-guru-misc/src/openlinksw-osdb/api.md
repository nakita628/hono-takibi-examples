<h1 id="osdb-rest-api-v1">OSDB REST API v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An OpenAPI description of the OpenLink Smart Data Bot REST API v1

Base URLs:

* <a href="https://osdb.openlinksw.com/osdb">https://osdb.openlinksw.com/osdb</a> - OSDB demo server

Email: <a href="mailto:osdb@openlinksw.com">osdb@openlinksw.com</a> 
License: <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode">CC-BY-SA</a>

<h1 id="osdb-rest-api-v1-osdb">OSDB</h1>

## List actions

<a id="opIdlistActions"></a>

> Code samples

```bash
curl https://example.com/api/v1/actions/string \
  -H 'Accept: application/json'
```

`GET /api/v1/actions/{serviceId}`

Returns an array of action descriptions for the actions supported by the given service

<h3 id="list-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Service ID of the service for which actions are to be listed|

> Example responses

> 200 Response

```json
{
  "api": "/osdb/api/v1/actions/:service_id",
  "method": "list_actions",
  "response": [
    {
      "action_id": "read",
      "description": "List a container's details and contents",
      "entry_point": {
        "content_types": [
          "application/ld+json",
          "text/turtle"
        ],
        "description": "Retrieve a description of an LDP resource or container",
        "encoding_types": null,
        "http_method": "GET",
        "name": "LDP Read - Retrieve a resource description",
        "parameters": [
          {
            "description": "The URL of an LDPR or LDPC. LDPCs must be terminated by /",
            "display_name": "Resource URL",
            "parameter_name": "ldpResourceUri",
            "permitted_values": null,
            "required": 1,
            "type": "uri"
          }
        ],
        "url": null,
        "url_template": "(ldpResourceUri)"
      }
    },
    {
      "action_id": "update",
      "description": "Update an LDP RDF resource",
      "entry_point": {
        "content_types": [
          "text/html"
        ],
        "description": "Update an RDF resource (LDP-RS) including containers (LDPCs)",
        "encoding_types": [
          "text/turtle"
        ],
        "http_method": "PUT",
        "name": "LDP-RS Update - Update an RDF resource",
        "parameters": [
          {
            "description": "The URL of an LDPR or LDPC. LDPCs must be terminated by /",
            "display_name": "Resource URL",
            "parameter_name": "ldpResourceUri",
            "permitted_values": null,
            "required": 1,
            "type": "uri"
          }
        ],
        "url": null,
        "url_template": "(ldpResourceUri)"
      }
    },
    {
      "action_id": "delete",
      "description": "Delete an LDP resource",
      "entry_point": {
        "content_types": "",
        "description": "Deletes an LDP resource or container",
        "encoding_types": null,
        "http_method": "DELETE",
        "name": "LDP Delete - Delete an LDP resource",
        "parameters": [
          {
            "description": "The URL of an LDPR or LDPC. LDPCs must be terminated by /",
            "display_name": "Resource URL",
            "parameter_name": "ldpResourceUri",
            "permitted_values": null,
            "required": 1,
            "type": "uri"
          }
        ],
        "url": null,
        "url_template": "(ldpResourceUri)"
      }
    },
    {
      "action_id": "create",
      "description": "Create an LDP RDF resource",
      "entry_point": {
        "content_types": [
          "text/html"
        ],
        "description": "Create an RDF resource (LDP-RS) including containers (LDPCs)",
        "encoding_types": [
          "text/turtle"
        ],
        "http_method": "POST",
        "name": "LDP-RS Create - Create an RDF resource",
        "parameters": [
          {
            "description": "The suggested name (slug) for the new resource",
            "display_name": "Suggested name",
            "parameter_name": "Slug",
            "permitted_values": null,
            "required": 1,
            "type": "header"
          },
          {
            "description": "The URL of an LDPR or LDPC. LDPCs must be terminated by /",
            "display_name": "Resource URL",
            "parameter_name": "ldpResourceUri",
            "permitted_values": null,
            "required": 1,
            "type": "uri"
          }
        ],
        "url": null,
        "url_template": "(ldpResourceUri)"
      }
    }
  ],
  "status": "success"
}
```

> default Response

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

<h3 id="list-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of action descriptions for the actions supported by the given service.|[ListActionsResponse](#schemalistactionsresponse)|
|default|Default|Error response|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Describe action

<a id="opIddescribeAction"></a>

> Code samples

```bash
curl https://example.com/api/v1/actions/string/string \
  -H 'Accept: application/json'
```

`GET /api/v1/actions/{serviceId}/{actionId}`

Returns a description of a given service action.

<h3 id="describe-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Service ID of the service supporting the action.|
|actionId|path|string|true|Action ID of the action to describe.|

> Example responses

> 200 Response

```json
{
  "api": "/osdb/api/v1/actions/:service_id/:action_id",
  "method": "describe_action",
  "response": {
    "action_id": "products",
    "description": "Returns information about the Uber products offered at a given location",
    "entry_point": {
      "content_types": [
        "application/json",
        "text/turtle",
        "application/rdf+xml",
        "application/ld+json"
      ],
      "description": "The Products endpoint returns information about the Uber products offered at a given location. \n    The response includes the display name and other details about each product.\n    \n    This endpoint does not reflect real-time availability of the products. Please use the Time \n    Estimates endpoint to determine real-time availability and ETAs of products.\n\n    In some markets, the list of products returned from this endpoint may vary by the time of \n    day due to time restrictions on when that product may be utilized.\n   ",
      "encoding_types": null,
      "http_method": "GET",
      "name": "Products — Uber products at a given location",
      "parameters": [
        {
          "description": "Longitude component of location",
          "display_name": "Longitude",
          "parameter_name": "longitude",
          "permitted_values": null,
          "required": 1,
          "type": "query"
        },
        {
          "description": "Latitude component of location",
          "display_name": "Latitude",
          "parameter_name": "latitude",
          "permitted_values": null,
          "required": 1,
          "type": "query"
        }
      ],
      "url": "https://sandbox-api.uber.com/v1/products",
      "url_template": "https://sandbox-api.uber.com/v1/products(?latitude,longitude)"
    }
  },
  "status": "success"
}
```

> default Response

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

<h3 id="describe-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single action description|[DescribeActionResponse](#schemadescribeactionresponse)|
|default|Default|Error response|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Execute action

<a id="opIdexecuteAction"></a>

> Code samples

```bash
curl https://example.com/api/v1/actions/string/string/exec \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "latitude": "37.7759792",
    "longitude": "-122.41823"
  }'
```

`POST /api/v1/actions/{serviceId}/{actionId}/exec`

Executes a registered service action and returns any output from the action.
The data returned in the POST response body may be: 
* the raw action output, 
* a URL encapsulating the action request which executes the action when dereferenced  (only for actions using GET), 
* RDF generated from the action output,
* a URL to an RDF viewer's display of the generated RDF.

Any parameters required by the action are supplied as a JSON object in the POST body. The parameter types supported are: "query", "header", "uri", "path" and "body".  The parameter type determines where a supplied parameter value is inserted into the HTTP request constructed by OSDB to invoke the target service action. In addition to native parameters required by the service action, 'Execute action' accepts some OSDB-specific parameters.<br/><br/>

**Examples**
* ```curl -ik -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```  
* ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"generate_rdf", "osdb:response_format":"application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
* ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"display_rdf" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
* ```curl -ik -X POST -d '{ "q":"skiing", "osdb:response_format": "application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
* ```curl -ik -X POST -d '{ "q":"skiing", "osdb:output_type": "url_only" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
* ```curl -ik -X POST -d '{ "Content-Location": "http://demo.openlinksw.co.uk/pubs", "osdb:body_data_src_url": "http://ods-qa.openlinksw.com/DAV/home/osdb/pubs.csv", "extractor": "csv", "osdb:response_format": "application/rdf+xml", "osdb:body_data_encoding": "text/csv" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/csv_transformer/transform/exec```

> Body parameter

```json
{
  "latitude": "37.7759792",
  "longitude": "-122.41823"
}
```

<h3 id="execute-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Service ID of the service supporting the action.|
|actionId|path|string|true|Action ID of the action to execute.|
|body|body|[ExecBody](#schemaexecbody)|false|Any parameters required by the action are supplied as a JSON object in the request body. The properties of this object depend on the service action being invoked.|
|» action_specific_property1|body|string|false|An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value.|
|» action_specific_property2|body|string|false|An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value.|
|» osdb:body_data_encoding|body|string|false|The media type of the data associated with osdb:body_data_raw or osdb:body_data_src_url. In the case of osdb:body_data_raw, this is the media type before base64 encoding.|
|» osdb:body_data_raw|body|string(byte)|false|Input data for the action (e.g. CSV data). The data must be base64 encoded by the client. Alternatively, clients can use osdb:body_data_src_url to supply the input data via a web-accessible document.|
|» osdb:body_data_src_url|body|string(uri)|false|URL of a resource containing input data for the action (e.g. CSV data). Clients can instead use osdb:body_data_raw to supply the input data directly.|
|» osdb:output_type|body|string|false|An OSDB-specific parameter controlling the action output type. If omitted, the native action output is returned.|
|» osdb:response_format|body|string|false|Preferred response MIME type. This must be an output MIME type supported natively by the action or, if 'osdb:output_type' is set to 'generate_rdf', a Virtuoso Sponger output format. i.e. 'application/ld+json', 'text/turtle' or 'application/rdf+xml'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» osdb:output_type|url_only|
|» osdb:output_type|generate_rdf|
|» osdb:output_type|display_rdf|

> Example responses

> 2XX Response

```json
{
  "description": "The response from an action varies depending on the target service invoked by the action."
}
```

> default Response

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

<h3 id="execute-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Response from an OSDB action invocation.|None|
|default|Default|Error response|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Action help

<a id="opIdactionHelp"></a>

> Code samples

```bash
curl https://example.com/api/v1/actions/string/string/help \
  -H 'Accept: application/json'
```

`GET /api/v1/actions/{serviceId}/{actionId}/help`

Returns the help text for a given service action

<h3 id="action-help-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Service ID of the service supporting the action.|
|actionId|path|string|true|Action ID of the action for which help text is being requested.|

> Example responses

> 200 Response

```json
{
  "api": "/osdb/api/v1/actions/:service_id/:action_id/help",
  "method": "action_help",
  "response": {
    "action_id": "search",
    "help_text": "\nAction options:\n\n-s, --same_as [same_as]\n\tEnables owl:sameAs inferencing for facet search\n\tRequired: no\n\tPermitted values: yes\n-v, --view_type [view_type]\n\tSets the default view orientation\n\tRequired: no\n\tPermitted values: entity-types, attribute-names\n-l, --limit [limit]\n\tLimits the number of result set entities returned\n\tRequired: no\n-o, --offset [offset]\n\tSets the result set page size for scrolling\n\tRequired: no\n-q, --q <q>\n\tA word or phrase to be used for the Facet free text search. Multiple words should be delimited by '+'\n\tRequired: yes\n-u, --url_only [url_only]\n\tReturn only the action URL, not the action results\n\tRequired: no\n-r, --response_format [response_format]\n\tSets the response media type through an Accept header.\n\tRequired: no\n\tPermitted values: application/json, application/rdf+xml, text/html, text/turtle\n-t, --quality_values [quality_values]\n\tQuality value string. e.g. application/json;q=1.0,text/turtle;q=0.8,*/*;q=0.5. \n\t--response_format takes precedence.\n\tRequired: no\n",
    "service_id": "facet"
  },
  "status": "success"
}
```

> default Response

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

<h3 id="action-help-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Action help text|[ActionHelpResponse](#schemaactionhelpresponse)|
|default|Default|Error response|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Login

<a id="opIdlogin"></a>

> Code samples

```bash
curl https://example.com/api/v1/login \
  -H 'Accept: application/json'
```

`GET /api/v1/login`

Logs a user into the OSDB server, authenticating them by their WebID and returning an OSDB session ID in cookie osdb.sid

> Example responses

> 200 Response

```json
{
  "api": "/osdb/api/v1/login",
  "method": "login",
  "response": {
    "user": "http://ods-qa.openlinksw.com:8896/DAV/home/nobody/cmsb_ex_webid_170223.ttl#identity"
  },
  "status": "success"
}
```

> default Response

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

<h3 id="login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Confirmation of a successful OSDB login.|[LoginResponse](#schemaloginresponse)|
|default|Default|Error response|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Logout

<a id="opIdlogout"></a>

> Code samples

```bash
curl https://example.com/api/v1/logout \
  -H 'Accept: application/json'
```

`GET /api/v1/logout`

Logs a user out of the OSDB server, ending their OSDB session

> Example responses

> 200 Response

```json
{
  "api": "/osdb/api/v1/logout",
  "method": "logout",
  "response": {
    "user": "http://ods-qa.openlinksw.com:8896/DAV/home/nobody/cmsb_ex_webid_170223.ttl#identity"
  },
  "status": "success"
}
```

> default Response

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Confirmation of a successful OSDB logout.|[LogoutResponse](#schemalogoutresponse)|
|default|Default|Error response|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## List services

<a id="opIdlistServices"></a>

> Code samples

```bash
curl https://example.com/api/v1/services \
  -H 'Accept: application/json'
```

`GET /api/v1/services`

Returns descriptions of all services registered with the OSDB server.

> Example responses

> 200 Response

```json
{
  "api": "/osdb/api/v1/services",
  "method": "list_services",
  "response": [
    {
      "description": "Host-independent Linked Data Platform service",
      "import_source_uri": "http://ods-qa.openlinksw.com:8896/DAV/home/nobody/ldp_svc.host_independent.ttl",
      "service_id": "ldp_generic",
      "service_name": "LDP generic"
    },
    {
      "description": null,
      "import_source_uri": "http://ods-qa.openlinksw.com:8896/DAV/home/nobody/fct_svc.ki.170103.cmsb.ttl",
      "service_id": "anonymous_facet",
      "service_name": "anonymous_facet"
    }
  ],
  "status": "success"
}
```

> default Response

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

<h3 id="list-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of service descriptions for all services registered with the OSDB server|[ListServicesResponse](#schemalistservicesresponse)|
|default|Default|Error response|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Load service

<a id="opIdloadService"></a>

> Code samples

```bash
curl https://example.com/api/v1/services \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "service_description_url": "http://ods-qa.openlinksw.com:8896/DAV/home/nobody/csv_extractor_svc.ods-qa.170109.ttl",
    "service_moniker": "csv_extractor"
  }'
```

`POST /api/v1/services`

Loads a service description into the OSDB Service Registry

> Body parameter

```json
{
  "service_description_url": "http://ods-qa.openlinksw.com:8896/DAV/home/nobody/csv_extractor_svc.ods-qa.170109.ttl",
  "service_moniker": "csv_extractor"
}
```

<h3 id="load-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Service to register with OSDB|
|» service_description_url|body|string|true|The URL of the resource containing the service description to load.|
|» service_moniker|body|string|false|Service ID to be used to uniquely identify the service. (Optional: Required for anonymous services or to override the service name in the service description.)|

> Example responses

> 200 Response

```json
{
  "api": "/osdb/api/v1/services",
  "method": "load_service",
  "response": "Loaded service description",
  "status": "success"
}
```

> default Response

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

<h3 id="load-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|loadService response|Inline|
|default|Default|Error response|[ErrorModel](#schemaerrormodel)|

<h3 id="load-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|string|true|none|The path of the REST API method|
|method|string|true|none|The name of the REST API method|
|response|string|true|none|Confirmation message|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|

<aside class="success">
This operation does not require authentication
</aside>

## Describe service

<a id="opIddescribeService"></a>

> Code samples

```bash
curl https://example.com/api/v1/services/string \
  -H 'Accept: application/json'
```

`GET /api/v1/services/{serviceId}`

Returns a description of a given service

<h3 id="describe-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Service ID of the service to describe.|

> Example responses

> 200 Response

```json
{
  "api": "/osdb/api/v1/services/:service_id",
  "method": "describe_service",
  "response": {
    "description": "Host-independent Linked Data Platform service",
    "import_source_uri": "http://ods-qa.openlinksw.com:8896/DAV/home/nobody/ldp_svc.host_independent.ttl",
    "service_id": "ldp_generic",
    "service_name": "LDP generic"
  },
  "status": "success"
}
```

> default Response

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

<h3 id="describe-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single service description|[DescribeServiceResponse](#schemadescribeserviceresponse)|
|default|Default|Error response|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Unload service

<a id="opIdunloadService"></a>

> Code samples

```bash
curl https://example.com/api/v1/services/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/v1/services/{serviceId}`

Removes a service description from the OSDB Service Registry

<h3 id="unload-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Service ID of the service to be unloaded|

> Example responses

> 200 Response

```json
{
  "api": "/osdb/api/v1/services",
  "method": "unload_service",
  "response": "Unloaded service csv_transformer from the Service Registry",
  "status": "success"
}
```

> default Response

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

<h3 id="unload-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|unloadService response|Inline|
|default|Default|Error response|[ErrorModel](#schemaerrormodel)|

<h3 id="unload-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|string|true|none|The path of the REST API method|
|method|string|true|none|The name of the REST API method|
|response|string|true|none|Confirmation message|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ActionDescription">ActionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaactiondescription"></a>
<a id="schema_ActionDescription"></a>
<a id="tocSactiondescription"></a>
<a id="tocsactiondescription"></a>

```json
{
  "action_id": "string",
  "description": "string",
  "entry_point": {
    "content_types": [
      "string"
    ],
    "description": "string",
    "encoding_types": [
      "string"
    ],
    "http_method": "GET",
    "name": "string",
    "parameters": [
      {
        "description": "string",
        "display_name": "string",
        "parameter_name": "string",
        "permitted_values": [
          "string"
        ],
        "required": 0,
        "type": "query"
      }
    ],
    "url": "http://example.com",
    "url_template": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_id|string|true|none|A unique one word identifier for the action.|
|description|string|false|none|A short description of the action.|
|entry_point|[EntryPoint](#schemaentrypoint)|true|none|none|

<h2 id="tocS_ActionHelp">ActionHelp</h2>
<!-- backwards compatibility -->
<a id="schemaactionhelp"></a>
<a id="schema_ActionHelp"></a>
<a id="tocSactionhelp"></a>
<a id="tocsactionhelp"></a>

```json
{
  "action_id": "string",
  "help_text": "string",
  "service_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_id|string|true|none|A unique one word identifier for the action.|
|help_text|string|true|none|The help text for the action.|
|service_id|string|true|none|A unique one word identifier for the service.|

<h2 id="tocS_ActionHelpResponse">ActionHelpResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactionhelpresponse"></a>
<a id="schema_ActionHelpResponse"></a>
<a id="tocSactionhelpresponse"></a>
<a id="tocsactionhelpresponse"></a>

```json
{
  "api": "string",
  "method": "string",
  "response": {
    "action_id": "string",
    "help_text": "string",
    "service_id": "string"
  },
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|string|true|none|The path of the REST API method|
|method|string|true|none|The name of the REST API method|
|response|[ActionHelp](#schemaactionhelp)|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|

<h2 id="tocS_DescribeActionResponse">DescribeActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactionresponse"></a>
<a id="schema_DescribeActionResponse"></a>
<a id="tocSdescribeactionresponse"></a>
<a id="tocsdescribeactionresponse"></a>

```json
{
  "api": "string",
  "method": "string",
  "response": {
    "action_id": "string",
    "description": "string",
    "entry_point": {
      "content_types": [
        "string"
      ],
      "description": "string",
      "encoding_types": [
        "string"
      ],
      "http_method": "GET",
      "name": "string",
      "parameters": [
        {
          "description": "string",
          "display_name": "string",
          "parameter_name": "string",
          "permitted_values": [
            "string"
          ],
          "required": 0,
          "type": "query"
        }
      ],
      "url": "http://example.com",
      "url_template": "string"
    }
  },
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|string|true|none|The path of the REST API method|
|method|string|true|none|The name of the REST API method|
|response|[ActionDescription](#schemaactiondescription)|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|

<h2 id="tocS_DescribeServiceResponse">DescribeServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceresponse"></a>
<a id="schema_DescribeServiceResponse"></a>
<a id="tocSdescribeserviceresponse"></a>
<a id="tocsdescribeserviceresponse"></a>

```json
{
  "api": "string",
  "method": "string",
  "response": {
    "description": "string",
    "import_source_uri": "http://example.com",
    "service_id": "string",
    "service_name": "string"
  },
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|string|true|none|The path of the REST API method|
|method|string|true|none|The name of the REST API method|
|response|[ServiceDescription](#schemaservicedescription)|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|

<h2 id="tocS_EntryPoint">EntryPoint</h2>
<!-- backwards compatibility -->
<a id="schemaentrypoint"></a>
<a id="schema_EntryPoint"></a>
<a id="tocSentrypoint"></a>
<a id="tocsentrypoint"></a>

```json
{
  "content_types": [
    "string"
  ],
  "description": "string",
  "encoding_types": [
    "string"
  ],
  "http_method": "GET",
  "name": "string",
  "parameters": [
    {
      "description": "string",
      "display_name": "string",
      "parameter_name": "string",
      "permitted_values": [
        "string"
      ],
      "required": 0,
      "type": "query"
    }
  ],
  "url": "http://example.com",
  "url_template": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_types|[string]|true|none|The supported MIME type(s) for an EntryPoint response.|
|description|string|true|none|A short description of the action. Optional - may be null.|
|encoding_types|[string]|true|none|The supported MIME type(s) for an EntryPoint request. Null if not applicable.|
|http_method|string|true|none|The HTTP method used by the EntryPoint.|
|name|string|true|none|A word or short phrase to be used as the action's display name. Optional - may be null.|
|parameters|[[EntryPointParameter](#schemaentrypointparameter)]|true|none|Descriptions of the EntryPoint parameters. Null if not applicable.|
|url|string(uri)|true|none|The EntryPoint URL. It will be non-null if url_template is null.|
|url_template|string(uri-template)|true|none|The EntryPoint's URL template. Only required if the entry point URL is parameterized. Property 'url' will be null if url_template is non-null.|

#### Enumerated Values

|Property|Value|
|---|---|
|http_method|GET|
|http_method|PUT|
|http_method|POST|
|http_method|DELETE|

<h2 id="tocS_EntryPointParameter">EntryPointParameter</h2>
<!-- backwards compatibility -->
<a id="schemaentrypointparameter"></a>
<a id="schema_EntryPointParameter"></a>
<a id="tocSentrypointparameter"></a>
<a id="tocsentrypointparameter"></a>

```json
{
  "description": "string",
  "display_name": "string",
  "parameter_name": "string",
  "permitted_values": [
    "string"
  ],
  "required": 0,
  "type": "query"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A short description of the parameter for use in the OSDB Action Console. Optional - may be null.|
|display_name|string|true|none|The parameter's display name in the OSDB Action Console. Optional - may be null.|
|parameter_name|string|true|none|The parameter name as present in the HTTP request. e.g. the key name in a query string key-value pair.|
|permitted_values|[string]|true|none|If the parameter accepts only a limited set of values, the allowed set of values. Null if not applicable.|
|required|integer(int32)|true|none|A flag indicating if the parameter is optional.|
|type|string|true|none|The type of the parameter, indicating its location in the HTTP request.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|query|
|type|header|
|type|uri|
|type|path|
|type|body|

<h2 id="tocS_ErrorModel">ErrorModel</h2>
<!-- backwards compatibility -->
<a id="schemaerrormodel"></a>
<a id="schema_ErrorModel"></a>
<a id="tocSerrormodel"></a>
<a id="tocserrormodel"></a>

```json
{
  "api": "string",
  "method": "string",
  "response": "string",
  "status": "error"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|string|false|none|The path of the REST API method reporting the error|
|method|string|false|none|The name of the REST API method reporting the error|
|response|string|false|none|A message describing the error|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|error|

<h2 id="tocS_ExecBody">ExecBody</h2>
<!-- backwards compatibility -->
<a id="schemaexecbody"></a>
<a id="schema_ExecBody"></a>
<a id="tocSexecbody"></a>
<a id="tocsexecbody"></a>

```json
{
  "action_specific_property1": "string",
  "action_specific_property2": "string",
  "osdb:body_data_encoding": "string",
  "osdb:body_data_raw": "string",
  "osdb:body_data_src_url": "http://example.com",
  "osdb:output_type": "url_only",
  "osdb:response_format": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_specific_property1|string|false|none|An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value.|
|action_specific_property2|string|false|none|An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value.|
|osdb:body_data_encoding|string|false|none|The media type of the data associated with osdb:body_data_raw or osdb:body_data_src_url. In the case of osdb:body_data_raw, this is the media type before base64 encoding.|
|osdb:body_data_raw|string(byte)|false|none|Input data for the action (e.g. CSV data). The data must be base64 encoded by the client. Alternatively, clients can use osdb:body_data_src_url to supply the input data via a web-accessible document.|
|osdb:body_data_src_url|string(uri)|false|none|URL of a resource containing input data for the action (e.g. CSV data). Clients can instead use osdb:body_data_raw to supply the input data directly.|
|osdb:output_type|string|false|none|An OSDB-specific parameter controlling the action output type. If omitted, the native action output is returned.|
|osdb:response_format|string|false|none|Preferred response MIME type. This must be an output MIME type supported natively by the action or, if 'osdb:output_type' is set to 'generate_rdf', a Virtuoso Sponger output format. i.e. 'application/ld+json', 'text/turtle' or 'application/rdf+xml'.|

#### Enumerated Values

|Property|Value|
|---|---|
|osdb:output_type|url_only|
|osdb:output_type|generate_rdf|
|osdb:output_type|display_rdf|

<h2 id="tocS_ListActionsResponse">ListActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistactionsresponse"></a>
<a id="schema_ListActionsResponse"></a>
<a id="tocSlistactionsresponse"></a>
<a id="tocslistactionsresponse"></a>

```json
{
  "api": "string",
  "method": "string",
  "response": [
    {
      "action_id": "string",
      "description": "string",
      "entry_point": {
        "content_types": [
          "string"
        ],
        "description": "string",
        "encoding_types": [
          "string"
        ],
        "http_method": "GET",
        "name": "string",
        "parameters": [
          {
            "description": "string",
            "display_name": "string",
            "parameter_name": "string",
            "permitted_values": [
              "string"
            ],
            "required": 0,
            "type": "query"
          }
        ],
        "url": "http://example.com",
        "url_template": "string"
      }
    }
  ],
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|string|true|none|The path of the REST API method|
|method|string|true|none|The name of the REST API method|
|response|[[ActionDescription](#schemaactiondescription)]|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|

<h2 id="tocS_ListServicesResponse">ListServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesresponse"></a>
<a id="schema_ListServicesResponse"></a>
<a id="tocSlistservicesresponse"></a>
<a id="tocslistservicesresponse"></a>

```json
{
  "api": "string",
  "method": "string",
  "response": [
    {
      "description": "string",
      "import_source_uri": "http://example.com",
      "service_id": "string",
      "service_name": "string"
    }
  ],
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|string|true|none|The path of the REST API method|
|method|string|true|none|The name of the REST API method|
|response|[[ServiceDescription](#schemaservicedescription)]|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|

<h2 id="tocS_LoginResponse">LoginResponse</h2>
<!-- backwards compatibility -->
<a id="schemaloginresponse"></a>
<a id="schema_LoginResponse"></a>
<a id="tocSloginresponse"></a>
<a id="tocsloginresponse"></a>

```json
{
  "api": "string",
  "method": "string",
  "response": {
    "user": "string"
  },
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|string|true|none|The path of the REST API method|
|method|string|true|none|The name of the REST API method|
|response|object|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|

<h2 id="tocS_LogoutResponse">LogoutResponse</h2>
<!-- backwards compatibility -->
<a id="schemalogoutresponse"></a>
<a id="schema_LogoutResponse"></a>
<a id="tocSlogoutresponse"></a>
<a id="tocslogoutresponse"></a>

```json
{
  "api": "string",
  "method": "string",
  "response": {
    "user": "string"
  },
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|string|true|none|The path of the REST API method|
|method|string|true|none|The name of the REST API method|
|response|object|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|

<h2 id="tocS_ServiceDescription">ServiceDescription</h2>
<!-- backwards compatibility -->
<a id="schemaservicedescription"></a>
<a id="schema_ServiceDescription"></a>
<a id="tocSservicedescription"></a>
<a id="tocsservicedescription"></a>

```json
{
  "description": "string",
  "import_source_uri": "http://example.com",
  "service_id": "string",
  "service_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A short description of the service.|
|import_source_uri|string(uri)|true|none|The URI of the source service description document used to load the service into OSDB.|
|service_id|string|true|none|A unique one word identifier for the service.|
|service_name|string|true|none|A word or phrase naming the service.|
