<h1 id="patchman-engine-api">Patchman-engine API v1.15.3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API of the Patch application on [cloud.redhat.com](cloud.redhat.com)

Syntax of the `filter[name]` query parameters is described in  [Filters documentation](https://github.com/RedHatInsights/patchman-engine/wiki/API-custom-filters)

Base URLs:

* <a href="http://redhat.local">http://redhat.local</a>

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

License: <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPLv3</a>

# Authentication

* API Key (RhIdentity)
    - Parameter Name: **x-rh-identity**, in: header.

<h1 id="patchman-engine-api-default">Default</h1>

## Show me all applicable advisories for all my systems

<a id="opIdlistAdvisories"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/advisories \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/advisories`

Show me all applicable advisories for all my systems

<h3 id="show-me-all-applicable-advisories-for-all-my-systems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit for paging, set -1 to return all|
|offset|query|integer|false|Offset for paging|
|sort|query|string|false|Sort field|
|search|query|string|false|Find matching text|
|filter[id]|query|string|false|Filter |
|filter[description]|query|string|false|Filter|
|filter[public_date]|query|string|false|Filter|
|filter[synopsis]|query|string|false|Filter|
|filter[advisory_type]|query|string|false|Filter|
|filter[severity]|query|string|false|Filter|
|filter[applicable_systems]|query|string|false|Filter|
|tags|query|[string]|false|Tag filter|
|filter[system_profile][sap_system]|query|string|false|Filter only SAP systems|
|filter[system_profile][sap_sids][in]|query|[string]|false|Filter systems by their SAP SIDs|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|name|
|sort|advisory_type|
|sort|synopsis|
|sort|public_date|
|sort|applicable_systems|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "advisory_type": 0,
        "applicable_systems": 0,
        "cve_count": 0,
        "description": "string",
        "public_date": "string",
        "severity": 0,
        "synopsis": "string"
      },
      "id": "string",
      "type": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

<h3 id="show-me-all-applicable-advisories-for-all-my-systems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.AdvisoriesResponse](#schemacontrollers.advisoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me details an advisory by given advisory name

<a id="opIddetailAdvisory"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/advisories/string \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/advisories/{advisory_id}`

Show me details an advisory by given advisory name

<h3 id="show-me-details-an-advisory-by-given-advisory-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|advisory_id|path|string|true|Advisory ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "cves": [
        "string"
      ],
      "description": "string",
      "fixes": "string",
      "modified_date": "string",
      "packages": {
        "property1": "string",
        "property2": "string"
      },
      "public_date": "string",
      "references": [
        "string"
      ],
      "severity": 0,
      "solution": "string",
      "synopsis": "string",
      "topic": "string"
    },
    "id": "string",
    "type": "string"
  }
}
```

<h3 id="show-me-details-an-advisory-by-given-advisory-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.AdvisoryDetailResponse](#schemacontrollers.advisorydetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me systems on which the given advisory is applicable

<a id="opIdlistAdvisorySystems"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/advisories/string/systems \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/advisories/{advisory_id}/systems`

Show me systems on which the given advisory is applicable

<h3 id="show-me-systems-on-which-the-given-advisory-is-applicable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|advisory_id|path|string|true|Advisory ID|
|limit|query|integer|false|Limit for paging, set -1 to return all|
|offset|query|integer|false|Offset for paging|
|sort|query|string|false|Sort field|
|search|query|string|false|Find matching text|
|filter[id]|query|string|false|Filter|
|filter[insights_id]|query|string|false|Filter|
|filter[display_name]|query|string|false|Filter|
|filter[last_evaluation]|query|string|false|Filter|
|filter[last_upload]|query|string|false|Filter|
|filter[rhsa_count]|query|string|false|Filter|
|filter[rhba_count]|query|string|false|Filter|
|filter[rhea_count]|query|string|false|Filter|
|filter[other_count]|query|string|false|Filter|
|filter[stale]|query|string|false|Filter|
|filter[stale_timestamp]|query|string|false|Filter|
|filter[stale_warning_timestamp]|query|string|false|Filter|
|filter[culled_timestamp]|query|string|false|Filter|
|filter[created]|query|string|false|Filter|
|tags|query|[string]|false|Tag filter|
|filter[system_profile][sap_system]|query|string|false|Filter only SAP systems|
|filter[system_profile][sap_sids][in]|query|[string]|false|Filter systems by their SAP SIDs|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|display_name|
|sort|last_evaluation|
|sort|last_upload|
|sort|rhsa_count|
|sort|rhba_count|
|sort|rhea_count|
|sort|other_count|
|sort|stale|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "created": "string",
        "culled_timestamp": "string",
        "display_name": "string",
        "insights_id": "string",
        "last_evaluation": "string",
        "last_upload": "string",
        "os_major": "string",
        "os_minor": "string",
        "os_name": "string",
        "other_count": 0,
        "packages_installed": 0,
        "packages_updatable": 0,
        "rhba_count": 0,
        "rhea_count": 0,
        "rhsa_count": 0,
        "rhsm": "string",
        "stale": true,
        "stale_timestamp": "string",
        "stale_warning_timestamp": "string",
        "third_party": true
      },
      "id": "string",
      "type": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

<h3 id="show-me-systems-on-which-the-given-advisory-is-applicable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.AdvisorySystemsResponse](#schemacontrollers.advisorysystemsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Export applicable advisories for all my systems

<a id="opIdexportAdvisories"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/export/advisories \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/export/advisories`

Export applicable advisories for all my systems

<h3 id="export-applicable-advisories-for-all-my-systems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Find matching text|
|filter[id]|query|string|false|Filter|
|filter[description]|query|string|false|Filter|
|filter[public_date]|query|string|false|Filter|
|filter[synopsis]|query|string|false|Filter|
|filter[advisory_type]|query|string|false|Filter|
|filter[severity]|query|string|false|Filter|
|filter[applicable_systems]|query|string|false|Filter|

> Example responses

> 200 Response

```json
[
  {
    "advisory_type": 0,
    "applicable_systems": 0,
    "cve_count": 0,
    "description": "string",
    "id": "string",
    "public_date": "string",
    "severity": 0,
    "synopsis": "string"
  }
]
```

<h3 id="export-applicable-advisories-for-all-my-systems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="export-applicable-advisories-for-all-my-systems-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.AdvisoryInlineItem](#schemacontrollers.advisoryinlineitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Export systems for my account

<a id="opIdexportAdvisorySystems"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/export/advisories/string/systems \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/export/advisories/{advisory_id}/systems`

Export systems for my account

<h3 id="export-systems-for-my-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|advisory_id|path|string|true|Advisory ID|
|search|query|string|false|Find matching text|
|filter[id]|query|string|false|Filter|
|filter[display_name]|query|string|false|Filter|
|filter[last_evaluation]|query|string|false|Filter|
|filter[last_upload]|query|string|false|Filter|
|filter[rhsa_count]|query|string|false|Filter|
|filter[rhba_count]|query|string|false|Filter|
|filter[rhea_count]|query|string|false|Filter|
|filter[other_count]|query|string|false|Filter|
|filter[stale]|query|string|false|Filter|
|filter[packages_installed]|query|string|false|Filter|
|filter[packages_updatable]|query|string|false|Filter|
|filter[system_profile][sap_system]|query|string|false|Filter only SAP systems|
|filter[system_profile][sap_sids][in]|query|[string]|false|Filter systems by their SAP SIDs|
|tags|query|[string]|false|Tag filter|

> Example responses

> 200 Response

```json
[
  {
    "created": "string",
    "culled_timestamp": "string",
    "display_name": "string",
    "id": "string",
    "insights_id": "string",
    "last_evaluation": "string",
    "last_upload": "string",
    "os_major": "string",
    "os_minor": "string",
    "os_name": "string",
    "other_count": 0,
    "packages_installed": 0,
    "packages_updatable": 0,
    "rhba_count": 0,
    "rhea_count": 0,
    "rhsa_count": 0,
    "rhsm": "string",
    "stale": true,
    "stale_timestamp": "string",
    "stale_warning_timestamp": "string",
    "third_party": true
  }
]
```

<h3 id="export-systems-for-my-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="export-systems-for-my-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.SystemInlineItem](#schemacontrollers.systeminlineitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me all installed packages across my systems

<a id="opIdexportPackages"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/export/packages \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/export/packages`

Show me all installed packages across my systems

<h3 id="show-me-all-installed-packages-across-my-systems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Sort field|
|search|query|string|false|Find matching text|
|filter[name]|query|string|false|Filter|
|filter[systems_installed]|query|string|false|Filter|
|filter[systems_updatable]|query|string|false|Filter|
|filter[summary]|query|string|false|Filter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|name|
|sort|systems_installed|
|sort|systems_updatable|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "summary": "string",
    "systems_installed": 0,
    "systems_updatable": 0
  }
]
```

<h3 id="show-me-all-installed-packages-across-my-systems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="show-me-all-installed-packages-across-my-systems-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.PackageItem](#schemacontrollers.packageitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me all my systems which have a package installed

<a id="opIdexportPackageSystems"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/export/packages/string/systems \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/export/packages/{package_name}/systems`

Show me all my systems which have a package installed

<h3 id="show-me-all-my-systems-which-have-a-package-installed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|package_name|path|string|true|Package name|
|filter[system_profile][sap_system]|query|string|false|Filter only SAP systems|
|filter[system_profile][sap_sids][in]|query|[string]|false|Filter systems by their SAP SIDs|
|tags|query|[string]|false|Tag filter|

> Example responses

> 200 Response

```json
[
  {
    "available_evra": "string",
    "display_name": "string",
    "id": "string",
    "installed_evra": "string",
    "updatable": true
  }
]
```

<h3 id="show-me-all-my-systems-which-have-a-package-installed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="show-me-all-my-systems-which-have-a-package-installed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.PackageSystemItem](#schemacontrollers.packagesystemitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Export systems for my account

<a id="opIdexportSystems"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/export/systems \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/export/systems`

Export systems for my account

<h3 id="export-systems-for-my-account-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Find matching text|
|filter[id]|query|string|false|Filter|
|filter[display_name]|query|string|false|Filter|
|filter[last_evaluation]|query|string|false|Filter|
|filter[last_upload]|query|string|false|Filter|
|filter[rhsa_count]|query|string|false|Filter|
|filter[rhba_count]|query|string|false|Filter|
|filter[rhea_count]|query|string|false|Filter|
|filter[other_count]|query|string|false|Filter|
|filter[stale]|query|string|false|Filter|
|filter[packages_installed]|query|string|false|Filter|
|filter[packages_updatable]|query|string|false|Filter|
|filter[system_profile][sap_system]|query|string|false|Filter only SAP systems|
|filter[system_profile][sap_sids][in]|query|[string]|false|Filter systems by their SAP SIDs|
|tags|query|[string]|false|Tag filter|

> Example responses

> 200 Response

```json
[
  {
    "created": "string",
    "culled_timestamp": "string",
    "display_name": "string",
    "id": "string",
    "insights_id": "string",
    "last_evaluation": "string",
    "last_upload": "string",
    "os_major": "string",
    "os_minor": "string",
    "os_name": "string",
    "other_count": 0,
    "packages_installed": 0,
    "packages_updatable": 0,
    "rhba_count": 0,
    "rhea_count": 0,
    "rhsa_count": 0,
    "rhsm": "string",
    "stale": true,
    "stale_timestamp": "string",
    "stale_warning_timestamp": "string",
    "third_party": true
  }
]
```

<h3 id="export-systems-for-my-account-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="export-systems-for-my-account-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.SystemInlineItem](#schemacontrollers.systeminlineitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Export applicable advisories for all my systems

<a id="opIdexportSystemAdvisories"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/export/systems/string/advisories \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/export/systems/{inventory_id}/advisories`

Export applicable advisories for all my systems

<h3 id="export-applicable-advisories-for-all-my-systems-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inventory_id|path|string|true|Inventory ID|
|search|query|string|false|Find matching text|
|filter[id]|query|string|false|Filter|
|filter[description]|query|string|false|Filter|
|filter[public_date]|query|string|false|Filter|
|filter[synopsis]|query|string|false|Filter|
|filter[advisory_type]|query|string|false|Filter|
|filter[severity]|query|string|false|Filter|

> Example responses

> 200 Response

```json
[
  {
    "advisory_type": 0,
    "cve_count": 0,
    "description": "string",
    "id": "string",
    "public_date": "string",
    "severity": 0,
    "synopsis": "string"
  }
]
```

<h3 id="export-applicable-advisories-for-all-my-systems-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="export-applicable-advisories-for-all-my-systems-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.SystemAdvisoriesDBLookup](#schemacontrollers.systemadvisoriesdblookup)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me details about a system packages by given inventory id

<a id="opIdexportSystemPackages"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/export/systems/string/packages \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/export/systems/{inventory_id}/packages`

Show me details about a system packages by given inventory id

<h3 id="show-me-details-about-a-system-packages-by-given-inventory-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inventory_id|path|string|true|Inventory ID|
|search|query|string|false|Find matching text|
|filter[name]|query|string|false|Filter|
|filter[description]|query|string|false|Filter|
|filter[evra]|query|string|false|Filter|
|filter[summary]|query|string|false|Filter|
|filter[updatable]|query|boolean|false|Filter|

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "evra": "string",
    "latest_evra": "string",
    "name": "string",
    "summary": "string",
    "updatable": true
  }
]
```

<h3 id="show-me-details-about-a-system-packages-by-given-inventory-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="show-me-details-about-a-system-packages-by-given-inventory-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.SystemPackageInline](#schemacontrollers.systempackageinline)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me all installed packages across my systems

<a id="opIdlistPackages"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/packages/ \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/packages/`

Show me all installed packages across my systems

<h3 id="show-me-all-installed-packages-across-my-systems-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit for paging, set -1 to return all|
|offset|query|integer|false|Offset for paging|
|sort|query|string|false|Sort field|
|search|query|string|false|Find matching text|
|filter[name]|query|string|false|Filter|
|filter[systems_installed]|query|string|false|Filter|
|filter[systems_updatable]|query|string|false|Filter|
|filter[summary]|query|string|false|Filter|
|tags|query|[string]|false|Tag filter|
|filter[system_profile][sap_system]|query|string|false|Filter only SAP systems|
|filter[system_profile][sap_sids][in]|query|[string]|false|Filter systems by their SAP SIDs|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|name|
|sort|systems_installed|
|sort|systems_updatable|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "summary": "string",
      "systems_installed": 0,
      "systems_updatable": 0
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

<h3 id="show-me-all-installed-packages-across-my-systems-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.PackagesResponse](#schemacontrollers.packagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me metadata of selected package

<a id="opIdLatestPackage"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/packages/string \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/packages/{package_name}`

Show me metadata of selected package

<h3 id="show-me-metadata-of-selected-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|package_name|path|string|true|package_name - latest, nevra - exact version|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "advisory_id": "string",
      "description": "string",
      "name": "string",
      "summary": "string",
      "version": "string"
    },
    "id": "string",
    "type": "string"
  }
}
```

<h3 id="show-me-metadata-of-selected-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.PackageDetailResponse](#schemacontrollers.packagedetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me all my systems which have a package installed

<a id="opIdpackageSystems"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/packages/string/systems \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/packages/{package_name}/systems`

Show me all my systems which have a package installed

<h3 id="show-me-all-my-systems-which-have-a-package-installed-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit for paging, set -1 to return all|
|offset|query|integer|false|Offset for paging|
|package_name|path|string|true|Package name|
|tags|query|[string]|false|Tag filter|
|filter[system_profile][sap_system]|query|string|false|Filter only SAP systems|
|filter[system_profile][sap_sids][in]|query|[string]|false|Filter systems by their SAP SIDs|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "available_evra": "string",
      "display_name": "string",
      "id": "string",
      "installed_evra": "string",
      "updatable": true
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

<h3 id="show-me-all-my-systems-which-have-a-package-installed-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.PackageSystemsResponse](#schemacontrollers.packagesystemsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me all package versions installed on some system

<a id="opIdpackageVersions"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/packages/string/versions \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/packages/{package_name}/versions`

Show me all package versions installed on some system

<h3 id="show-me-all-package-versions-installed-on-some-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit for paging, set -1 to return all|
|offset|query|integer|false|Offset for paging|
|package_name|path|string|true|Package name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "evra": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

<h3 id="show-me-all-package-versions-installed-on-some-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.PackageVersionsResponse](#schemacontrollers.packageversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me all my systems

<a id="opIdlistSystems"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/systems \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/systems`

Show me all my systems

<h3 id="show-me-all-my-systems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit for paging, set -1 to return all|
|offset|query|integer|false|Offset for paging|
|sort|query|string|false|Sort field|
|search|query|string|false|Find matching text|
|filter[insights_id]|query|string|false|Filter|
|filter[id]|query|string|false|Filter|
|filter[display_name]|query|string|false|Filter|
|filter[last_evaluation]|query|string|false|Filter|
|filter[last_upload]|query|string|false|Filter|
|filter[rhsa_count]|query|string|false|Filter|
|filter[rhba_count]|query|string|false|Filter|
|filter[rhea_count]|query|string|false|Filter|
|filter[other_count]|query|string|false|Filter|
|filter[stale]|query|string|false|Filter|
|filter[packages_installed]|query|string|false|Filter|
|filter[packages_updatable]|query|string|false|Filter|
|filter[stale_timestamp]|query|string|false|Filter|
|filter[stale_warning_timestamp]|query|string|false|Filter|
|filter[culled_timestamp]|query|string|false|Filter|
|filter[created]|query|string|false|Filter|
|tags|query|[string]|false|Tag filter|
|filter[system_profile][sap_system]|query|string|false|Filter only SAP systems|
|filter[system_profile][sap_sids][in]|query|[string]|false|Filter systems by their SAP SIDs|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|display_name|
|sort|last_evaluation|
|sort|last_upload|
|sort|rhsa_count|
|sort|rhba_count|
|sort|rhea_count|
|sort|other_count|
|sort|stale|
|sort|packages_installed|
|sort|packages_updatable|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "created": "string",
        "culled_timestamp": "string",
        "display_name": "string",
        "insights_id": "string",
        "last_evaluation": "string",
        "last_upload": "string",
        "os_major": "string",
        "os_minor": "string",
        "os_name": "string",
        "other_count": 0,
        "packages_installed": 0,
        "packages_updatable": 0,
        "rhba_count": 0,
        "rhea_count": 0,
        "rhsa_count": 0,
        "rhsm": "string",
        "stale": true,
        "stale_timestamp": "string",
        "stale_warning_timestamp": "string",
        "third_party": true
      },
      "id": "string",
      "type": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

<h3 id="show-me-all-my-systems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.SystemsResponse](#schemacontrollers.systemsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me details about a system by given inventory id

<a id="opIddetailSystem"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/systems/string \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/systems/{inventory_id}`

Show me details about a system by given inventory id

<h3 id="show-me-details-about-a-system-by-given-inventory-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inventory_id|path|string|true|Inventory ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created": "string",
      "culled_timestamp": "string",
      "display_name": "string",
      "insights_id": "string",
      "last_evaluation": "string",
      "last_upload": "string",
      "os_major": "string",
      "os_minor": "string",
      "os_name": "string",
      "other_count": 0,
      "packages_installed": 0,
      "packages_updatable": 0,
      "rhba_count": 0,
      "rhea_count": 0,
      "rhsa_count": 0,
      "rhsm": "string",
      "stale": true,
      "stale_timestamp": "string",
      "stale_warning_timestamp": "string",
      "third_party": true
    },
    "id": "string",
    "type": "string"
  }
}
```

<h3 id="show-me-details-about-a-system-by-given-inventory-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.SystemDetailResponse](#schemacontrollers.systemdetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Delete system by inventory id

<a id="opIddeletesystem"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/systems/string \
  -X DELETE \
  -H "x-rh-identity: ${API_KEY}"
```

`DELETE /api/patch/v1/systems/{inventory_id}`

Delete system by inventory id

<h3 id="delete-system-by-inventory-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inventory_id|path|string|true|Inventory ID|

<h3 id="delete-system-by-inventory-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me advisories for a system by given inventory id

<a id="opIdlistSystemAdvisories"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/systems/string/advisories \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/systems/{inventory_id}/advisories`

Show me advisories for a system by given inventory id

<h3 id="show-me-advisories-for-a-system-by-given-inventory-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inventory_id|path|string|true|Inventory ID|
|limit|query|integer|false|Limit for paging, set -1 to return all|
|offset|query|integer|false|Offset for paging|
|sort|query|string|false|Sort field|
|search|query|string|false|Find matching text|
|filter[id]|query|string|false|Filter|
|filter[description]|query|string|false|Filter|
|filter[public_date]|query|string|false|Filter|
|filter[synopsis]|query|string|false|Filter|
|filter[advisory_type]|query|string|false|Filter|
|filter[severity]|query|string|false|Filter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|name|
|sort|type|
|sort|synopsis|
|sort|public_date|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "advisory_type": 0,
        "cve_count": 0,
        "description": "string",
        "public_date": "string",
        "severity": 0,
        "synopsis": "string"
      },
      "id": "string",
      "type": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

<h3 id="show-me-advisories-for-a-system-by-given-inventory-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.SystemAdvisoriesResponse](#schemacontrollers.systemadvisoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## Show me details about a system packages by given inventory id

<a id="opIdsystemPackages"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/systems/string/packages \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}"
```

`GET /api/patch/v1/systems/{inventory_id}/packages`

Show me details about a system packages by given inventory id

<h3 id="show-me-details-about-a-system-packages-by-given-inventory-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inventory_id|path|string|true|Inventory ID|
|limit|query|integer|false|Limit for paging, set -1 to return all|
|offset|query|integer|false|Offset for paging|
|search|query|string|false|Find matching text|
|filter[name]|query|string|false|Filter|
|filter[description]|query|string|false|Filter|
|filter[evra]|query|string|false|Filter|
|filter[summary]|query|string|false|Filter|
|filter[updatable]|query|boolean|false|Filter|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "description": "string",
      "evra": "string",
      "name": "string",
      "summary": "string",
      "updatable": true,
      "updates": [
        {
          "advisory": "string",
          "evra": "string"
        }
      ]
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

<h3 id="show-me-details-about-a-system-packages-by-given-inventory-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.SystemPackageResponse](#schemacontrollers.systempackageresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## View advisory-system pairs for selected systems and advisories

<a id="opIdviewAdvisoriesSystems"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/views/advisories/systems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}" \
  -d '{
    "advisories": [
      "string"
    ],
    "systems": [
      "string"
    ]
  }'
```

`POST /api/patch/v1/views/advisories/systems`

View advisory-system pairs for selected systems and advisories

> Body parameter

```json
{
  "advisories": [
    "string"
  ],
  "systems": [
    "string"
  ]
}
```

<h3 id="view-advisory-system-pairs-for-selected-systems-and-advisories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[controllers.SystemsAdvisoriesRequest](#schemacontrollers.systemsadvisoriesrequest)|true|Request body|
|» advisories|body|[string]|false|none|
|» systems|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="view-advisory-system-pairs-for-selected-systems-and-advisories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.AdvisoriesSystemsResponse](#schemacontrollers.advisoriessystemsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

## View system-advisory pairs for selected systems and advisories

<a id="opIdviewSystemsAdvisories"></a>

> Code samples

```bash
curl https://example.com/api/patch/v1/views/systems/advisories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-rh-identity: ${API_KEY}" \
  -d '{
    "advisories": [
      "string"
    ],
    "systems": [
      "string"
    ]
  }'
```

`POST /api/patch/v1/views/systems/advisories`

View system-advisory pairs for selected systems and advisories

> Body parameter

```json
{
  "advisories": [
    "string"
  ],
  "systems": [
    "string"
  ]
}
```

<h3 id="view-system-advisory-pairs-for-selected-systems-and-advisories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[controllers.SystemsAdvisoriesRequest](#schemacontrollers.systemsadvisoriesrequest)|true|Request body|
|» advisories|body|[string]|false|none|
|» systems|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="view-system-advisory-pairs-for-selected-systems-and-advisories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[controllers.SystemsAdvisoriesResponse](#schemacontrollers.systemsadvisoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
RhIdentity
</aside>

# Schemas

<h2 id="tocS_controllers.AdvisoriesResponse">controllers.AdvisoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.advisoriesresponse"></a>
<a id="schema_controllers.AdvisoriesResponse"></a>
<a id="tocScontrollers.advisoriesresponse"></a>
<a id="tocscontrollers.advisoriesresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "advisory_type": 0,
        "applicable_systems": 0,
        "cve_count": 0,
        "description": "string",
        "public_date": "string",
        "severity": 0,
        "synopsis": "string"
      },
      "id": "string",
      "type": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[controllers.AdvisoryItem](#schemacontrollers.advisoryitem)]|false|none|none|
|links|[controllers.Links](#schemacontrollers.links)|false|none|none|
|meta|[controllers.ListMeta](#schemacontrollers.listmeta)|false|none|none|

<h2 id="tocS_controllers.AdvisoriesSystemsResponse">controllers.AdvisoriesSystemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.advisoriessystemsresponse"></a>
<a id="schema_controllers.AdvisoriesSystemsResponse"></a>
<a id="tocScontrollers.advisoriessystemsresponse"></a>
<a id="tocscontrollers.advisoriessystemsresponse"></a>

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_controllers.AdvisoryDetailAttributes">controllers.AdvisoryDetailAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.advisorydetailattributes"></a>
<a id="schema_controllers.AdvisoryDetailAttributes"></a>
<a id="tocScontrollers.advisorydetailattributes"></a>
<a id="tocscontrollers.advisorydetailattributes"></a>

```json
{
  "cves": [
    "string"
  ],
  "description": "string",
  "fixes": "string",
  "modified_date": "string",
  "packages": {
    "property1": "string",
    "property2": "string"
  },
  "public_date": "string",
  "references": [
    "string"
  ],
  "severity": 0,
  "solution": "string",
  "synopsis": "string",
  "topic": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cves|[string]|false|none|none|
|description|string|false|none|none|
|fixes|string|false|none|none|
|modified_date|string|false|none|none|
|packages|object|false|none|none|
|public_date|string|false|none|none|
|references|[string]|false|none|none|
|severity|integer|false|none|none|
|solution|string|false|none|none|
|synopsis|string|false|none|none|
|topic|string|false|none|none|

<h2 id="tocS_controllers.AdvisoryDetailItem">controllers.AdvisoryDetailItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.advisorydetailitem"></a>
<a id="schema_controllers.AdvisoryDetailItem"></a>
<a id="tocScontrollers.advisorydetailitem"></a>
<a id="tocscontrollers.advisorydetailitem"></a>

```json
{
  "attributes": {
    "cves": [
      "string"
    ],
    "description": "string",
    "fixes": "string",
    "modified_date": "string",
    "packages": {
      "property1": "string",
      "property2": "string"
    },
    "public_date": "string",
    "references": [
      "string"
    ],
    "severity": 0,
    "solution": "string",
    "synopsis": "string",
    "topic": "string"
  },
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[controllers.AdvisoryDetailAttributes](#schemacontrollers.advisorydetailattributes)|false|none|none|
|id|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_controllers.AdvisoryDetailResponse">controllers.AdvisoryDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.advisorydetailresponse"></a>
<a id="schema_controllers.AdvisoryDetailResponse"></a>
<a id="tocScontrollers.advisorydetailresponse"></a>
<a id="tocscontrollers.advisorydetailresponse"></a>

```json
{
  "data": {
    "attributes": {
      "cves": [
        "string"
      ],
      "description": "string",
      "fixes": "string",
      "modified_date": "string",
      "packages": {
        "property1": "string",
        "property2": "string"
      },
      "public_date": "string",
      "references": [
        "string"
      ],
      "severity": 0,
      "solution": "string",
      "synopsis": "string",
      "topic": "string"
    },
    "id": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[controllers.AdvisoryDetailItem](#schemacontrollers.advisorydetailitem)|false|none|none|

<h2 id="tocS_controllers.AdvisoryInlineItem">controllers.AdvisoryInlineItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.advisoryinlineitem"></a>
<a id="schema_controllers.AdvisoryInlineItem"></a>
<a id="tocScontrollers.advisoryinlineitem"></a>
<a id="tocscontrollers.advisoryinlineitem"></a>

```json
{
  "advisory_type": 0,
  "applicable_systems": 0,
  "cve_count": 0,
  "description": "string",
  "id": "string",
  "public_date": "string",
  "severity": 0,
  "synopsis": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advisory_type|integer|false|none|none|
|applicable_systems|integer|false|none|none|
|cve_count|integer|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|public_date|string|false|none|none|
|severity|integer|false|none|none|
|synopsis|string|false|none|none|

<h2 id="tocS_controllers.AdvisoryItem">controllers.AdvisoryItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.advisoryitem"></a>
<a id="schema_controllers.AdvisoryItem"></a>
<a id="tocScontrollers.advisoryitem"></a>
<a id="tocscontrollers.advisoryitem"></a>

```json
{
  "attributes": {
    "advisory_type": 0,
    "applicable_systems": 0,
    "cve_count": 0,
    "description": "string",
    "public_date": "string",
    "severity": 0,
    "synopsis": "string"
  },
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[controllers.AdvisoryItemAttributes](#schemacontrollers.advisoryitemattributes)|false|none|none|
|id|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_controllers.AdvisoryItemAttributes">controllers.AdvisoryItemAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.advisoryitemattributes"></a>
<a id="schema_controllers.AdvisoryItemAttributes"></a>
<a id="tocScontrollers.advisoryitemattributes"></a>
<a id="tocscontrollers.advisoryitemattributes"></a>

```json
{
  "advisory_type": 0,
  "applicable_systems": 0,
  "cve_count": 0,
  "description": "string",
  "public_date": "string",
  "severity": 0,
  "synopsis": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advisory_type|integer|false|none|none|
|applicable_systems|integer|false|none|none|
|cve_count|integer|false|none|none|
|description|string|false|none|none|
|public_date|string|false|none|none|
|severity|integer|false|none|none|
|synopsis|string|false|none|none|

<h2 id="tocS_controllers.AdvisorySystemsResponse">controllers.AdvisorySystemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.advisorysystemsresponse"></a>
<a id="schema_controllers.AdvisorySystemsResponse"></a>
<a id="tocScontrollers.advisorysystemsresponse"></a>
<a id="tocscontrollers.advisorysystemsresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "created": "string",
        "culled_timestamp": "string",
        "display_name": "string",
        "insights_id": "string",
        "last_evaluation": "string",
        "last_upload": "string",
        "os_major": "string",
        "os_minor": "string",
        "os_name": "string",
        "other_count": 0,
        "packages_installed": 0,
        "packages_updatable": 0,
        "rhba_count": 0,
        "rhea_count": 0,
        "rhsa_count": 0,
        "rhsm": "string",
        "stale": true,
        "stale_timestamp": "string",
        "stale_warning_timestamp": "string",
        "third_party": true
      },
      "id": "string",
      "type": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[controllers.SystemItem](#schemacontrollers.systemitem)]|false|none|none|
|links|[controllers.Links](#schemacontrollers.links)|false|none|none|
|meta|[controllers.ListMeta](#schemacontrollers.listmeta)|false|none|none|

<h2 id="tocS_controllers.FilterData">controllers.FilterData</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.filterdata"></a>
<a id="schema_controllers.FilterData"></a>
<a id="tocScontrollers.filterdata"></a>
<a id="tocscontrollers.filterdata"></a>

```json
{
  "op": "string",
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|op|string|false|none|none|
|values|[string]|false|none|none|

<h2 id="tocS_controllers.Links">controllers.Links</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.links"></a>
<a id="schema_controllers.Links"></a>
<a id="tocScontrollers.links"></a>
<a id="tocscontrollers.links"></a>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "previous": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string|false|none|none|
|last|string|false|none|none|
|next|string|false|none|none|
|previous|string|false|none|none|

<h2 id="tocS_controllers.ListMeta">controllers.ListMeta</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.listmeta"></a>
<a id="schema_controllers.ListMeta"></a>
<a id="tocScontrollers.listmeta"></a>
<a id="tocscontrollers.listmeta"></a>

```json
{
  "filter": {
    "property1": {
      "op": "string",
      "values": [
        "string"
      ]
    },
    "property2": {
      "op": "string",
      "values": [
        "string"
      ]
    }
  },
  "limit": 0,
  "offset": 0,
  "search": "string",
  "sort": [
    "string"
  ],
  "subtotals": {
    "property1": 0,
    "property2": 0
  },
  "total_items": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|false|none|none|
|limit|integer|false|none|none|
|offset|integer|false|none|none|
|search|string|false|none|none|
|sort|[string]|false|none|none|
|subtotals|object|false|none|none|
|total_items|integer|false|none|none|

<h2 id="tocS_controllers.PackageDetailAttributes">controllers.PackageDetailAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.packagedetailattributes"></a>
<a id="schema_controllers.PackageDetailAttributes"></a>
<a id="tocScontrollers.packagedetailattributes"></a>
<a id="tocscontrollers.packagedetailattributes"></a>

```json
{
  "advisory_id": "string",
  "description": "string",
  "name": "string",
  "summary": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advisory_id|string|false|none|none|
|description|string|false|none|none|
|name|string|false|none|none|
|summary|string|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_controllers.PackageDetailItem">controllers.PackageDetailItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.packagedetailitem"></a>
<a id="schema_controllers.PackageDetailItem"></a>
<a id="tocScontrollers.packagedetailitem"></a>
<a id="tocscontrollers.packagedetailitem"></a>

```json
{
  "attributes": {
    "advisory_id": "string",
    "description": "string",
    "name": "string",
    "summary": "string",
    "version": "string"
  },
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[controllers.PackageDetailAttributes](#schemacontrollers.packagedetailattributes)|false|none|none|
|id|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_controllers.PackageDetailResponse">controllers.PackageDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.packagedetailresponse"></a>
<a id="schema_controllers.PackageDetailResponse"></a>
<a id="tocScontrollers.packagedetailresponse"></a>
<a id="tocscontrollers.packagedetailresponse"></a>

```json
{
  "data": {
    "attributes": {
      "advisory_id": "string",
      "description": "string",
      "name": "string",
      "summary": "string",
      "version": "string"
    },
    "id": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[controllers.PackageDetailItem](#schemacontrollers.packagedetailitem)|false|none|none|

<h2 id="tocS_controllers.PackageItem">controllers.PackageItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.packageitem"></a>
<a id="schema_controllers.PackageItem"></a>
<a id="tocScontrollers.packageitem"></a>
<a id="tocscontrollers.packageitem"></a>

```json
{
  "name": "string",
  "summary": "string",
  "systems_installed": 0,
  "systems_updatable": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|summary|string|false|none|none|
|systems_installed|integer|false|none|none|
|systems_updatable|integer|false|none|none|

<h2 id="tocS_controllers.PackageSystemItem">controllers.PackageSystemItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.packagesystemitem"></a>
<a id="schema_controllers.PackageSystemItem"></a>
<a id="tocScontrollers.packagesystemitem"></a>
<a id="tocscontrollers.packagesystemitem"></a>

```json
{
  "available_evra": "string",
  "display_name": "string",
  "id": "string",
  "installed_evra": "string",
  "updatable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available_evra|string|false|none|none|
|display_name|string|false|none|none|
|id|string|false|none|none|
|installed_evra|string|false|none|none|
|updatable|boolean|false|none|none|

<h2 id="tocS_controllers.PackageSystemsResponse">controllers.PackageSystemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.packagesystemsresponse"></a>
<a id="schema_controllers.PackageSystemsResponse"></a>
<a id="tocScontrollers.packagesystemsresponse"></a>
<a id="tocscontrollers.packagesystemsresponse"></a>

```json
{
  "data": [
    {
      "available_evra": "string",
      "display_name": "string",
      "id": "string",
      "installed_evra": "string",
      "updatable": true
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[controllers.PackageSystemItem](#schemacontrollers.packagesystemitem)]|false|none|none|
|links|[controllers.Links](#schemacontrollers.links)|false|none|none|
|meta|[controllers.ListMeta](#schemacontrollers.listmeta)|false|none|none|

<h2 id="tocS_controllers.PackageVersionItem">controllers.PackageVersionItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.packageversionitem"></a>
<a id="schema_controllers.PackageVersionItem"></a>
<a id="tocScontrollers.packageversionitem"></a>
<a id="tocscontrollers.packageversionitem"></a>

```json
{
  "evra": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evra|string|false|none|none|

<h2 id="tocS_controllers.PackageVersionsResponse">controllers.PackageVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.packageversionsresponse"></a>
<a id="schema_controllers.PackageVersionsResponse"></a>
<a id="tocScontrollers.packageversionsresponse"></a>
<a id="tocscontrollers.packageversionsresponse"></a>

```json
{
  "data": [
    {
      "evra": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[controllers.PackageVersionItem](#schemacontrollers.packageversionitem)]|false|none|none|
|links|[controllers.Links](#schemacontrollers.links)|false|none|none|
|meta|[controllers.ListMeta](#schemacontrollers.listmeta)|false|none|none|

<h2 id="tocS_controllers.PackagesResponse">controllers.PackagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.packagesresponse"></a>
<a id="schema_controllers.PackagesResponse"></a>
<a id="tocScontrollers.packagesresponse"></a>
<a id="tocscontrollers.packagesresponse"></a>

```json
{
  "data": [
    {
      "name": "string",
      "summary": "string",
      "systems_installed": 0,
      "systems_updatable": 0
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[controllers.PackageItem](#schemacontrollers.packageitem)]|false|none|none|
|links|[controllers.Links](#schemacontrollers.links)|false|none|none|
|meta|[controllers.ListMeta](#schemacontrollers.listmeta)|false|none|none|

<h2 id="tocS_controllers.SystemAdvisoriesDBLookup">controllers.SystemAdvisoriesDBLookup</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systemadvisoriesdblookup"></a>
<a id="schema_controllers.SystemAdvisoriesDBLookup"></a>
<a id="tocScontrollers.systemadvisoriesdblookup"></a>
<a id="tocscontrollers.systemadvisoriesdblookup"></a>

```json
{
  "advisory_type": 0,
  "cve_count": 0,
  "description": "string",
  "id": "string",
  "public_date": "string",
  "severity": 0,
  "synopsis": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advisory_type|integer|false|none|none|
|cve_count|integer|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|public_date|string|false|none|none|
|severity|integer|false|none|none|
|synopsis|string|false|none|none|

<h2 id="tocS_controllers.SystemAdvisoriesResponse">controllers.SystemAdvisoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systemadvisoriesresponse"></a>
<a id="schema_controllers.SystemAdvisoriesResponse"></a>
<a id="tocScontrollers.systemadvisoriesresponse"></a>
<a id="tocscontrollers.systemadvisoriesresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "advisory_type": 0,
        "cve_count": 0,
        "description": "string",
        "public_date": "string",
        "severity": 0,
        "synopsis": "string"
      },
      "id": "string",
      "type": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[controllers.SystemAdvisoryItem](#schemacontrollers.systemadvisoryitem)]|false|none|advisories items|
|links|[controllers.Links](#schemacontrollers.links)|false|none|none|
|meta|[controllers.ListMeta](#schemacontrollers.listmeta)|false|none|none|

<h2 id="tocS_controllers.SystemAdvisoryItem">controllers.SystemAdvisoryItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systemadvisoryitem"></a>
<a id="schema_controllers.SystemAdvisoryItem"></a>
<a id="tocScontrollers.systemadvisoryitem"></a>
<a id="tocscontrollers.systemadvisoryitem"></a>

```json
{
  "attributes": {
    "advisory_type": 0,
    "cve_count": 0,
    "description": "string",
    "public_date": "string",
    "severity": 0,
    "synopsis": "string"
  },
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[controllers.SystemAdvisoryItemAttributes](#schemacontrollers.systemadvisoryitemattributes)|false|none|none|
|id|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_controllers.SystemAdvisoryItemAttributes">controllers.SystemAdvisoryItemAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systemadvisoryitemattributes"></a>
<a id="schema_controllers.SystemAdvisoryItemAttributes"></a>
<a id="tocScontrollers.systemadvisoryitemattributes"></a>
<a id="tocscontrollers.systemadvisoryitemattributes"></a>

```json
{
  "advisory_type": 0,
  "cve_count": 0,
  "description": "string",
  "public_date": "string",
  "severity": 0,
  "synopsis": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advisory_type|integer|false|none|none|
|cve_count|integer|false|none|none|
|description|string|false|none|none|
|public_date|string|false|none|none|
|severity|integer|false|none|none|
|synopsis|string|false|none|none|

<h2 id="tocS_controllers.SystemDetailResponse">controllers.SystemDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systemdetailresponse"></a>
<a id="schema_controllers.SystemDetailResponse"></a>
<a id="tocScontrollers.systemdetailresponse"></a>
<a id="tocscontrollers.systemdetailresponse"></a>

```json
{
  "data": {
    "attributes": {
      "created": "string",
      "culled_timestamp": "string",
      "display_name": "string",
      "insights_id": "string",
      "last_evaluation": "string",
      "last_upload": "string",
      "os_major": "string",
      "os_minor": "string",
      "os_name": "string",
      "other_count": 0,
      "packages_installed": 0,
      "packages_updatable": 0,
      "rhba_count": 0,
      "rhea_count": 0,
      "rhsa_count": 0,
      "rhsm": "string",
      "stale": true,
      "stale_timestamp": "string",
      "stale_warning_timestamp": "string",
      "third_party": true
    },
    "id": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[controllers.SystemItem](#schemacontrollers.systemitem)|false|none|none|

<h2 id="tocS_controllers.SystemInlineItem">controllers.SystemInlineItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systeminlineitem"></a>
<a id="schema_controllers.SystemInlineItem"></a>
<a id="tocScontrollers.systeminlineitem"></a>
<a id="tocscontrollers.systeminlineitem"></a>

```json
{
  "created": "string",
  "culled_timestamp": "string",
  "display_name": "string",
  "id": "string",
  "insights_id": "string",
  "last_evaluation": "string",
  "last_upload": "string",
  "os_major": "string",
  "os_minor": "string",
  "os_name": "string",
  "other_count": 0,
  "packages_installed": 0,
  "packages_updatable": 0,
  "rhba_count": 0,
  "rhea_count": 0,
  "rhsa_count": 0,
  "rhsm": "string",
  "stale": true,
  "stale_timestamp": "string",
  "stale_warning_timestamp": "string",
  "third_party": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string|false|none|none|
|culled_timestamp|string|false|none|none|
|display_name|string|false|none|none|
|id|string|false|none|none|
|insights_id|string|false|none|none|
|last_evaluation|string|false|none|none|
|last_upload|string|false|none|none|
|os_major|string|false|none|none|
|os_minor|string|false|none|none|
|os_name|string|false|none|none|
|other_count|integer|false|none|none|
|packages_installed|integer|false|none|none|
|packages_updatable|integer|false|none|none|
|rhba_count|integer|false|none|none|
|rhea_count|integer|false|none|none|
|rhsa_count|integer|false|none|none|
|rhsm|string|false|none|none|
|stale|boolean|false|none|none|
|stale_timestamp|string|false|none|none|
|stale_warning_timestamp|string|false|none|none|
|third_party|boolean|false|none|none|

<h2 id="tocS_controllers.SystemItem">controllers.SystemItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systemitem"></a>
<a id="schema_controllers.SystemItem"></a>
<a id="tocScontrollers.systemitem"></a>
<a id="tocscontrollers.systemitem"></a>

```json
{
  "attributes": {
    "created": "string",
    "culled_timestamp": "string",
    "display_name": "string",
    "insights_id": "string",
    "last_evaluation": "string",
    "last_upload": "string",
    "os_major": "string",
    "os_minor": "string",
    "os_name": "string",
    "other_count": 0,
    "packages_installed": 0,
    "packages_updatable": 0,
    "rhba_count": 0,
    "rhea_count": 0,
    "rhsa_count": 0,
    "rhsm": "string",
    "stale": true,
    "stale_timestamp": "string",
    "stale_warning_timestamp": "string",
    "third_party": true
  },
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[controllers.SystemItemAttributes](#schemacontrollers.systemitemattributes)|false|none|none|
|id|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_controllers.SystemItemAttributes">controllers.SystemItemAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systemitemattributes"></a>
<a id="schema_controllers.SystemItemAttributes"></a>
<a id="tocScontrollers.systemitemattributes"></a>
<a id="tocscontrollers.systemitemattributes"></a>

```json
{
  "created": "string",
  "culled_timestamp": "string",
  "display_name": "string",
  "insights_id": "string",
  "last_evaluation": "string",
  "last_upload": "string",
  "os_major": "string",
  "os_minor": "string",
  "os_name": "string",
  "other_count": 0,
  "packages_installed": 0,
  "packages_updatable": 0,
  "rhba_count": 0,
  "rhea_count": 0,
  "rhsa_count": 0,
  "rhsm": "string",
  "stale": true,
  "stale_timestamp": "string",
  "stale_warning_timestamp": "string",
  "third_party": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string|false|none|none|
|culled_timestamp|string|false|none|none|
|display_name|string|false|none|none|
|insights_id|string|false|none|none|
|last_evaluation|string|false|none|none|
|last_upload|string|false|none|none|
|os_major|string|false|none|none|
|os_minor|string|false|none|none|
|os_name|string|false|none|none|
|other_count|integer|false|none|none|
|packages_installed|integer|false|none|none|
|packages_updatable|integer|false|none|none|
|rhba_count|integer|false|none|none|
|rhea_count|integer|false|none|none|
|rhsa_count|integer|false|none|none|
|rhsm|string|false|none|none|
|stale|boolean|false|none|none|
|stale_timestamp|string|false|none|none|
|stale_warning_timestamp|string|false|none|none|
|third_party|boolean|false|none|none|

<h2 id="tocS_controllers.SystemPackageData">controllers.SystemPackageData</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systempackagedata"></a>
<a id="schema_controllers.SystemPackageData"></a>
<a id="tocScontrollers.systempackagedata"></a>
<a id="tocscontrollers.systempackagedata"></a>

```json
{
  "description": "string",
  "evra": "string",
  "name": "string",
  "summary": "string",
  "updatable": true,
  "updates": [
    {
      "advisory": "string",
      "evra": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|evra|string|false|none|none|
|name|string|false|none|none|
|summary|string|false|none|none|
|updatable|boolean|false|none|none|
|updates|[[models.PackageUpdate](#schemamodels.packageupdate)]|false|none|none|

<h2 id="tocS_controllers.SystemPackageInline">controllers.SystemPackageInline</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systempackageinline"></a>
<a id="schema_controllers.SystemPackageInline"></a>
<a id="tocScontrollers.systempackageinline"></a>
<a id="tocscontrollers.systempackageinline"></a>

```json
{
  "description": "string",
  "evra": "string",
  "latest_evra": "string",
  "name": "string",
  "summary": "string",
  "updatable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|evra|string|false|none|none|
|latest_evra|string|false|none|none|
|name|string|false|none|none|
|summary|string|false|none|none|
|updatable|boolean|false|none|none|

<h2 id="tocS_controllers.SystemPackageResponse">controllers.SystemPackageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systempackageresponse"></a>
<a id="schema_controllers.SystemPackageResponse"></a>
<a id="tocScontrollers.systempackageresponse"></a>
<a id="tocscontrollers.systempackageresponse"></a>

```json
{
  "data": [
    {
      "description": "string",
      "evra": "string",
      "name": "string",
      "summary": "string",
      "updatable": true,
      "updates": [
        {
          "advisory": "string",
          "evra": "string"
        }
      ]
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[controllers.SystemPackageData](#schemacontrollers.systempackagedata)]|false|none|none|
|links|[controllers.Links](#schemacontrollers.links)|false|none|none|
|meta|[controllers.ListMeta](#schemacontrollers.listmeta)|false|none|none|

<h2 id="tocS_controllers.SystemsAdvisoriesRequest">controllers.SystemsAdvisoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systemsadvisoriesrequest"></a>
<a id="schema_controllers.SystemsAdvisoriesRequest"></a>
<a id="tocScontrollers.systemsadvisoriesrequest"></a>
<a id="tocscontrollers.systemsadvisoriesrequest"></a>

```json
{
  "advisories": [
    "string"
  ],
  "systems": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advisories|[string]|false|none|none|
|systems|[string]|false|none|none|

<h2 id="tocS_controllers.SystemsAdvisoriesResponse">controllers.SystemsAdvisoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systemsadvisoriesresponse"></a>
<a id="schema_controllers.SystemsAdvisoriesResponse"></a>
<a id="tocScontrollers.systemsadvisoriesresponse"></a>
<a id="tocscontrollers.systemsadvisoriesresponse"></a>

```json
{
  "data": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_controllers.SystemsResponse">controllers.SystemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.systemsresponse"></a>
<a id="schema_controllers.SystemsResponse"></a>
<a id="tocScontrollers.systemsresponse"></a>
<a id="tocscontrollers.systemsresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "created": "string",
        "culled_timestamp": "string",
        "display_name": "string",
        "insights_id": "string",
        "last_evaluation": "string",
        "last_upload": "string",
        "os_major": "string",
        "os_minor": "string",
        "os_name": "string",
        "other_count": 0,
        "packages_installed": 0,
        "packages_updatable": 0,
        "rhba_count": 0,
        "rhea_count": 0,
        "rhsa_count": 0,
        "rhsm": "string",
        "stale": true,
        "stale_timestamp": "string",
        "stale_warning_timestamp": "string",
        "third_party": true
      },
      "id": "string",
      "type": "string"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string"
  },
  "meta": {
    "filter": {
      "property1": {
        "op": "string",
        "values": [
          "string"
        ]
      },
      "property2": {
        "op": "string",
        "values": [
          "string"
        ]
      }
    },
    "limit": 0,
    "offset": 0,
    "search": "string",
    "sort": [
      "string"
    ],
    "subtotals": {
      "property1": 0,
      "property2": 0
    },
    "total_items": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[controllers.SystemItem](#schemacontrollers.systemitem)]|false|none|none|
|links|[controllers.Links](#schemacontrollers.links)|false|none|none|
|meta|[controllers.ListMeta](#schemacontrollers.listmeta)|false|none|none|

<h2 id="tocS_models.PackageUpdate">models.PackageUpdate</h2>
<!-- backwards compatibility -->
<a id="schemamodels.packageupdate"></a>
<a id="schema_models.PackageUpdate"></a>
<a id="tocSmodels.packageupdate"></a>
<a id="tocsmodels.packageupdate"></a>

```json
{
  "advisory": "string",
  "evra": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advisory|string|false|none|none|
|evra|string|false|none|none|
