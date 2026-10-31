<h1 id="pagespeed-insights-api">PageSpeed Insights API v5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The PageSpeed Insights API lets you analyze the performance of your website with a simple API. It offers tailored suggestions for how you can optimize your site, and lets you easily integrate PageSpeed Insights analysis into your development tools and workflow.

Base URLs:

* <a href="https://pagespeedonline.googleapis.com/">https://pagespeedonline.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/speed/docs/insights/v5/about">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|openid|Associate you with your personal info on Google|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|openid|Associate you with your personal info on Google|

<h1 id="pagespeed-insights-api-pagespeedapi">pagespeedapi</h1>

## pagespeedonline.pagespeedapi.runpagespeed

<a id="opIdpagespeedonline.pagespeedapi.runpagespeed"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /pagespeedonline/v5/runPagespeed`

Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

<h3 id="pagespeedonlinepagespeedapirunpagespeed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|Required. The URL to fetch and analyze|
|captchaToken|query|string|false|The captcha token passed when filling out a captcha.|
|category|query|[string]|false|A Lighthouse category to run; if none are given, only Performance category will be run|
|locale|query|string|false|The locale used to localize formatted results|
|strategy|query|string|false|The analysis strategy (desktop or mobile) to use, and desktop is the default|
|utm_campaign|query|string|false|Campaign name for analytics.|
|utm_source|query|string|false|Campaign source for analytics.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|category|CATEGORY_UNSPECIFIED|
|category|ACCESSIBILITY|
|category|BEST_PRACTICES|
|category|PERFORMANCE|
|category|PWA|
|category|SEO|
|strategy|STRATEGY_UNSPECIFIED|
|strategy|DESKTOP|
|strategy|MOBILE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "analysisUTCTimestamp": "string",
  "captchaResult": "string",
  "id": "string",
  "kind": "string",
  "lighthouseResult": {
    "audits": {
      "property1": {
        "description": "string",
        "details": {
          "property1": null,
          "property2": null
        },
        "displayValue": "string",
        "errorMessage": "string",
        "explanation": "string",
        "id": "string",
        "numericUnit": "string",
        "numericValue": 0,
        "score": null,
        "scoreDisplayMode": "string",
        "title": "string",
        "warnings": null
      },
      "property2": {
        "description": "string",
        "details": {
          "property1": null,
          "property2": null
        },
        "displayValue": "string",
        "errorMessage": "string",
        "explanation": "string",
        "id": "string",
        "numericUnit": "string",
        "numericValue": 0,
        "score": null,
        "scoreDisplayMode": "string",
        "title": "string",
        "warnings": null
      }
    },
    "categories": {
      "accessibility": {
        "auditRefs": [
          {
            "acronym": "string",
            "group": "string",
            "id": "string",
            "relevantAudits": [
              "string"
            ],
            "weight": 0
          }
        ],
        "description": "string",
        "id": "string",
        "manualDescription": "string",
        "score": null,
        "title": "string"
      },
      "best-practices": {
        "auditRefs": [
          {
            "acronym": "string",
            "group": "string",
            "id": "string",
            "relevantAudits": [
              "string"
            ],
            "weight": 0
          }
        ],
        "description": "string",
        "id": "string",
        "manualDescription": "string",
        "score": null,
        "title": "string"
      },
      "performance": {
        "auditRefs": [
          {
            "acronym": "string",
            "group": "string",
            "id": "string",
            "relevantAudits": [
              "string"
            ],
            "weight": 0
          }
        ],
        "description": "string",
        "id": "string",
        "manualDescription": "string",
        "score": null,
        "title": "string"
      },
      "pwa": {
        "auditRefs": [
          {
            "acronym": "string",
            "group": "string",
            "id": "string",
            "relevantAudits": [
              "string"
            ],
            "weight": 0
          }
        ],
        "description": "string",
        "id": "string",
        "manualDescription": "string",
        "score": null,
        "title": "string"
      },
      "seo": {
        "auditRefs": [
          {
            "acronym": "string",
            "group": "string",
            "id": "string",
            "relevantAudits": [
              "string"
            ],
            "weight": 0
          }
        ],
        "description": "string",
        "id": "string",
        "manualDescription": "string",
        "score": null,
        "title": "string"
      }
    },
    "categoryGroups": {
      "property1": {
        "description": "string",
        "title": "string"
      },
      "property2": {
        "description": "string",
        "title": "string"
      }
    },
    "configSettings": {
      "channel": "string",
      "emulatedFormFactor": "string",
      "formFactor": "string",
      "locale": "string",
      "onlyCategories": null
    },
    "entities": [
      {
        "category": "string",
        "homepage": "string",
        "isFirstParty": true,
        "isUnrecognized": true,
        "name": "string",
        "origins": [
          "string"
        ]
      }
    ],
    "environment": {
      "benchmarkIndex": 0,
      "credits": {
        "property1": "string",
        "property2": "string"
      },
      "hostUserAgent": "string",
      "networkUserAgent": "string"
    },
    "fetchTime": "string",
    "finalDisplayedUrl": "string",
    "finalUrl": "string",
    "fullPageScreenshot": null,
    "i18n": {
      "rendererFormattedStrings": {
        "auditGroupExpandTooltip": "string",
        "calculatorLink": "string",
        "crcInitialNavigation": "string",
        "crcLongestDurationLabel": "string",
        "dropdownCopyJSON": "string",
        "dropdownDarkTheme": "string",
        "dropdownPrintExpanded": "string",
        "dropdownPrintSummary": "string",
        "dropdownSaveGist": "string",
        "dropdownSaveHTML": "string",
        "dropdownSaveJSON": "string",
        "dropdownViewer": "string",
        "errorLabel": "string",
        "errorMissingAuditInfo": "string",
        "footerIssue": "string",
        "labDataTitle": "string",
        "lsPerformanceCategoryDescription": "string",
        "manualAuditsGroupTitle": "string",
        "notApplicableAuditsGroupTitle": "string",
        "opportunityResourceColumnLabel": "string",
        "opportunitySavingsColumnLabel": "string",
        "passedAuditsGroupTitle": "string",
        "runtimeDesktopEmulation": "string",
        "runtimeMobileEmulation": "string",
        "runtimeNoEmulation": "string",
        "runtimeSettingsAxeVersion": "string",
        "runtimeSettingsBenchmark": "string",
        "runtimeSettingsCPUThrottling": "string",
        "runtimeSettingsChannel": "string",
        "runtimeSettingsDevice": "string",
        "runtimeSettingsFetchTime": "string",
        "runtimeSettingsNetworkThrottling": "string",
        "runtimeSettingsTitle": "string",
        "runtimeSettingsUA": "string",
        "runtimeSettingsUANetwork": "string",
        "runtimeSettingsUrl": "string",
        "runtimeUnknown": "string",
        "scorescaleLabel": "string",
        "showRelevantAudits": "string",
        "snippetCollapseButtonLabel": "string",
        "snippetExpandButtonLabel": "string",
        "thirdPartyResourcesLabel": "string",
        "throttlingProvided": "string",
        "toplevelWarningsMessage": "string",
        "varianceDisclaimer": "string",
        "viewTreemapLabel": "string",
        "warningAuditsGroupTitle": "string",
        "warningHeader": "string"
      }
    },
    "lighthouseVersion": "string",
    "mainDocumentUrl": "string",
    "requestedUrl": "string",
    "runWarnings": [
      null
    ],
    "runtimeError": {
      "code": "string",
      "message": "string"
    },
    "stackPacks": [
      {
        "descriptions": {
          "property1": "string",
          "property2": "string"
        },
        "iconDataURL": "string",
        "id": "string",
        "title": "string"
      }
    ],
    "timing": {
      "total": 0
    },
    "userAgent": "string"
  },
  "loadingExperience": {
    "id": "string",
    "initial_url": "string",
    "metrics": {
      "property1": {
        "category": "string",
        "distributions": [
          {
            "max": 0,
            "min": 0,
            "proportion": 0
          }
        ],
        "formFactor": "string",
        "median": 0,
        "metricId": "string",
        "percentile": 0
      },
      "property2": {
        "category": "string",
        "distributions": [
          {
            "max": 0,
            "min": 0,
            "proportion": 0
          }
        ],
        "formFactor": "string",
        "median": 0,
        "metricId": "string",
        "percentile": 0
      }
    },
    "origin_fallback": true,
    "overall_category": "string"
  },
  "originLoadingExperience": {
    "id": "string",
    "initial_url": "string",
    "metrics": {
      "property1": {
        "category": "string",
        "distributions": [
          {
            "max": 0,
            "min": 0,
            "proportion": 0
          }
        ],
        "formFactor": "string",
        "median": 0,
        "metricId": "string",
        "percentile": 0
      },
      "property2": {
        "category": "string",
        "distributions": [
          {
            "max": 0,
            "min": 0,
            "proportion": 0
          }
        ],
        "formFactor": "string",
        "median": 0,
        "metricId": "string",
        "percentile": 0
      }
    },
    "origin_fallback": true,
    "overall_category": "string"
  },
  "version": {
    "major": "string",
    "minor": "string"
  }
}
```

<h3 id="pagespeedonlinepagespeedapirunpagespeed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PagespeedApiPagespeedResponseV5](#schemapagespeedapipagespeedresponsev5)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: openid ) & Oauth2c ( Scopes: openid )
</aside>

# Schemas

<h2 id="tocS_AuditRefs">AuditRefs</h2>
<!-- backwards compatibility -->
<a id="schemaauditrefs"></a>
<a id="schema_AuditRefs"></a>
<a id="tocSauditrefs"></a>
<a id="tocsauditrefs"></a>

```json
{
  "acronym": "string",
  "group": "string",
  "id": "string",
  "relevantAudits": [
    "string"
  ],
  "weight": 0
}
```

A light reference to an audit by id, used to group and weight audits in a given category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acronym|string|false|none|The conventional acronym for the audit/metric.|
|group|string|false|none|The category group that the audit belongs to (optional).|
|id|string|false|none|The audit ref id.|
|relevantAudits|[string]|false|none|Any audit IDs closely relevant to this one.|
|weight|number(double)|false|none|The weight this audit's score has on the overall category score.|

<h2 id="tocS_Bucket">Bucket</h2>
<!-- backwards compatibility -->
<a id="schemabucket"></a>
<a id="schema_Bucket"></a>
<a id="tocSbucket"></a>
<a id="tocsbucket"></a>

```json
{
  "max": 0,
  "min": 0,
  "proportion": 0
}
```

A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max|integer(int32)|false|none|Upper bound for a bucket's range.|
|min|integer(int32)|false|none|Lower bound for a bucket's range.|
|proportion|number(double)|false|none|The proportion of data in this bucket.|

<h2 id="tocS_Categories">Categories</h2>
<!-- backwards compatibility -->
<a id="schemacategories"></a>
<a id="schema_Categories"></a>
<a id="tocScategories"></a>
<a id="tocscategories"></a>

```json
{
  "accessibility": {
    "auditRefs": [
      {
        "acronym": "string",
        "group": "string",
        "id": "string",
        "relevantAudits": [
          "string"
        ],
        "weight": 0
      }
    ],
    "description": "string",
    "id": "string",
    "manualDescription": "string",
    "score": null,
    "title": "string"
  },
  "best-practices": {
    "auditRefs": [
      {
        "acronym": "string",
        "group": "string",
        "id": "string",
        "relevantAudits": [
          "string"
        ],
        "weight": 0
      }
    ],
    "description": "string",
    "id": "string",
    "manualDescription": "string",
    "score": null,
    "title": "string"
  },
  "performance": {
    "auditRefs": [
      {
        "acronym": "string",
        "group": "string",
        "id": "string",
        "relevantAudits": [
          "string"
        ],
        "weight": 0
      }
    ],
    "description": "string",
    "id": "string",
    "manualDescription": "string",
    "score": null,
    "title": "string"
  },
  "pwa": {
    "auditRefs": [
      {
        "acronym": "string",
        "group": "string",
        "id": "string",
        "relevantAudits": [
          "string"
        ],
        "weight": 0
      }
    ],
    "description": "string",
    "id": "string",
    "manualDescription": "string",
    "score": null,
    "title": "string"
  },
  "seo": {
    "auditRefs": [
      {
        "acronym": "string",
        "group": "string",
        "id": "string",
        "relevantAudits": [
          "string"
        ],
        "weight": 0
      }
    ],
    "description": "string",
    "id": "string",
    "manualDescription": "string",
    "score": null,
    "title": "string"
  }
}
```

The categories in a Lighthouse run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibility|[LighthouseCategoryV5](#schemalighthousecategoryv5)|false|none|The accessibility category, containing all accessibility related audits.|
|best-practices|[LighthouseCategoryV5](#schemalighthousecategoryv5)|false|none|The best practices category, containing all best practices related audits.|
|performance|[LighthouseCategoryV5](#schemalighthousecategoryv5)|false|none|The performance category, containing all performance related audits.|
|pwa|[LighthouseCategoryV5](#schemalighthousecategoryv5)|false|none|The Progressive-Web-App (PWA) category, containing all pwa related audits.|
|seo|[LighthouseCategoryV5](#schemalighthousecategoryv5)|false|none|The Search-Engine-Optimization (SEO) category, containing all seo related audits.|

<h2 id="tocS_CategoryGroupV5">CategoryGroupV5</h2>
<!-- backwards compatibility -->
<a id="schemacategorygroupv5"></a>
<a id="schema_CategoryGroupV5"></a>
<a id="tocScategorygroupv5"></a>
<a id="tocscategorygroupv5"></a>

```json
{
  "description": "string",
  "title": "string"
}
```

Message containing a category

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of what the category is grouping|
|title|string|false|none|The human readable title of the group|

<h2 id="tocS_ConfigSettings">ConfigSettings</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsettings"></a>
<a id="schema_ConfigSettings"></a>
<a id="tocSconfigsettings"></a>
<a id="tocsconfigsettings"></a>

```json
{
  "channel": "string",
  "emulatedFormFactor": "string",
  "formFactor": "string",
  "locale": "string",
  "onlyCategories": null
}
```

Message containing the configuration settings for the Lighthouse run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|How Lighthouse was run, e.g. from the Chrome extension or from the npm module.|
|emulatedFormFactor|string|false|none|The form factor the emulation should use. This field is deprecated, form_factor should be used instead.|
|formFactor|string|false|none|How Lighthouse should interpret this run in regards to scoring performance metrics and skipping mobile-only tests in desktop.|
|locale|string|false|none|The locale setting.|
|onlyCategories|object|false|none|List of categories of audits the run should conduct.|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "benchmarkIndex": 0,
  "credits": {
    "property1": "string",
    "property2": "string"
  },
  "hostUserAgent": "string",
  "networkUserAgent": "string"
}
```

Message containing environment configuration for a Lighthouse run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benchmarkIndex|number(double)|false|none|The benchmark index number that indicates rough device class.|
|credits|object|false|none|The version of libraries with which these results were generated. Ex: axe-core.|
|hostUserAgent|string|false|none|The user agent string of the version of Chrome used.|
|networkUserAgent|string|false|none|The user agent string that was sent over the network.|

<h2 id="tocS_I18n">I18n</h2>
<!-- backwards compatibility -->
<a id="schemai18n"></a>
<a id="schema_I18n"></a>
<a id="tocSi18n"></a>
<a id="tocsi18n"></a>

```json
{
  "rendererFormattedStrings": {
    "auditGroupExpandTooltip": "string",
    "calculatorLink": "string",
    "crcInitialNavigation": "string",
    "crcLongestDurationLabel": "string",
    "dropdownCopyJSON": "string",
    "dropdownDarkTheme": "string",
    "dropdownPrintExpanded": "string",
    "dropdownPrintSummary": "string",
    "dropdownSaveGist": "string",
    "dropdownSaveHTML": "string",
    "dropdownSaveJSON": "string",
    "dropdownViewer": "string",
    "errorLabel": "string",
    "errorMissingAuditInfo": "string",
    "footerIssue": "string",
    "labDataTitle": "string",
    "lsPerformanceCategoryDescription": "string",
    "manualAuditsGroupTitle": "string",
    "notApplicableAuditsGroupTitle": "string",
    "opportunityResourceColumnLabel": "string",
    "opportunitySavingsColumnLabel": "string",
    "passedAuditsGroupTitle": "string",
    "runtimeDesktopEmulation": "string",
    "runtimeMobileEmulation": "string",
    "runtimeNoEmulation": "string",
    "runtimeSettingsAxeVersion": "string",
    "runtimeSettingsBenchmark": "string",
    "runtimeSettingsCPUThrottling": "string",
    "runtimeSettingsChannel": "string",
    "runtimeSettingsDevice": "string",
    "runtimeSettingsFetchTime": "string",
    "runtimeSettingsNetworkThrottling": "string",
    "runtimeSettingsTitle": "string",
    "runtimeSettingsUA": "string",
    "runtimeSettingsUANetwork": "string",
    "runtimeSettingsUrl": "string",
    "runtimeUnknown": "string",
    "scorescaleLabel": "string",
    "showRelevantAudits": "string",
    "snippetCollapseButtonLabel": "string",
    "snippetExpandButtonLabel": "string",
    "thirdPartyResourcesLabel": "string",
    "throttlingProvided": "string",
    "toplevelWarningsMessage": "string",
    "varianceDisclaimer": "string",
    "viewTreemapLabel": "string",
    "warningAuditsGroupTitle": "string",
    "warningHeader": "string"
  }
}
```

Message containing the i18n data for the LHR - Version 1.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rendererFormattedStrings|[RendererFormattedStrings](#schemarendererformattedstrings)|false|none|Internationalized strings that are formatted to the locale in configSettings.|

<h2 id="tocS_LhrEntity">LhrEntity</h2>
<!-- backwards compatibility -->
<a id="schemalhrentity"></a>
<a id="schema_LhrEntity"></a>
<a id="tocSlhrentity"></a>
<a id="tocslhrentity"></a>

```json
{
  "category": "string",
  "homepage": "string",
  "isFirstParty": true,
  "isUnrecognized": true,
  "name": "string",
  "origins": [
    "string"
  ]
}
```

Message containing an Entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Optional. An optional category name for the entity.|
|homepage|string|false|none|Optional. An optional homepage URL of the entity.|
|isFirstParty|boolean|false|none|Optional. An optional flag indicating if the entity is the first party.|
|isUnrecognized|boolean|false|none|Optional. An optional flag indicating if the entity is not recognized.|
|name|string|false|none|Required. Name of the entity.|
|origins|[string]|false|none|Required. A list of URL origin strings that belong to this entity.|

<h2 id="tocS_LighthouseAuditResultV5">LighthouseAuditResultV5</h2>
<!-- backwards compatibility -->
<a id="schemalighthouseauditresultv5"></a>
<a id="schema_LighthouseAuditResultV5"></a>
<a id="tocSlighthouseauditresultv5"></a>
<a id="tocslighthouseauditresultv5"></a>

```json
{
  "description": "string",
  "details": {
    "property1": null,
    "property2": null
  },
  "displayValue": "string",
  "errorMessage": "string",
  "explanation": "string",
  "id": "string",
  "numericUnit": "string",
  "numericValue": 0,
  "score": null,
  "scoreDisplayMode": "string",
  "title": "string",
  "warnings": null
}
```

An audit's result object in a Lighthouse result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the audit.|
|details|object|false|none|Freeform details section of the audit.|
|displayValue|string|false|none|The value that should be displayed on the UI for this audit.|
|errorMessage|string|false|none|An error message from a thrown error inside the audit.|
|explanation|string|false|none|An explanation of the errors in the audit.|
|id|string|false|none|The audit's id.|
|numericUnit|string|false|none|The unit of the numeric_value field. Used to format the numeric value for display.|
|numericValue|number(double)|false|none|A numeric value that has a meaning specific to the audit, e.g. the number of nodes in the DOM or the timestamp of a specific load event. More information can be found in the audit details, if present.|
|score|object|false|none|The score of the audit, can be null.|
|scoreDisplayMode|string|false|none|The enumerated score display mode.|
|title|string|false|none|The human readable title.|
|warnings|object|false|none|Possible warnings that occurred in the audit, can be null.|

<h2 id="tocS_LighthouseCategoryV5">LighthouseCategoryV5</h2>
<!-- backwards compatibility -->
<a id="schemalighthousecategoryv5"></a>
<a id="schema_LighthouseCategoryV5"></a>
<a id="tocSlighthousecategoryv5"></a>
<a id="tocslighthousecategoryv5"></a>

```json
{
  "auditRefs": [
    {
      "acronym": "string",
      "group": "string",
      "id": "string",
      "relevantAudits": [
        "string"
      ],
      "weight": 0
    }
  ],
  "description": "string",
  "id": "string",
  "manualDescription": "string",
  "score": null,
  "title": "string"
}
```

A Lighthouse category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditRefs|[[AuditRefs](#schemaauditrefs)]|false|none|An array of references to all the audit members of this category.|
|description|string|false|none|A more detailed description of the category and its importance.|
|id|string|false|none|The string identifier of the category.|
|manualDescription|string|false|none|A description for the manual audits in the category.|
|score|object|false|none|The overall score of the category, the weighted average of all its audits. (The category's score, can be null.)|
|title|string|false|none|The human-friendly name of the category.|

<h2 id="tocS_LighthouseResultV5">LighthouseResultV5</h2>
<!-- backwards compatibility -->
<a id="schemalighthouseresultv5"></a>
<a id="schema_LighthouseResultV5"></a>
<a id="tocSlighthouseresultv5"></a>
<a id="tocslighthouseresultv5"></a>

```json
{
  "audits": {
    "property1": {
      "description": "string",
      "details": {
        "property1": null,
        "property2": null
      },
      "displayValue": "string",
      "errorMessage": "string",
      "explanation": "string",
      "id": "string",
      "numericUnit": "string",
      "numericValue": 0,
      "score": null,
      "scoreDisplayMode": "string",
      "title": "string",
      "warnings": null
    },
    "property2": {
      "description": "string",
      "details": {
        "property1": null,
        "property2": null
      },
      "displayValue": "string",
      "errorMessage": "string",
      "explanation": "string",
      "id": "string",
      "numericUnit": "string",
      "numericValue": 0,
      "score": null,
      "scoreDisplayMode": "string",
      "title": "string",
      "warnings": null
    }
  },
  "categories": {
    "accessibility": {
      "auditRefs": [
        {
          "acronym": "string",
          "group": "string",
          "id": "string",
          "relevantAudits": [
            "string"
          ],
          "weight": 0
        }
      ],
      "description": "string",
      "id": "string",
      "manualDescription": "string",
      "score": null,
      "title": "string"
    },
    "best-practices": {
      "auditRefs": [
        {
          "acronym": "string",
          "group": "string",
          "id": "string",
          "relevantAudits": [
            "string"
          ],
          "weight": 0
        }
      ],
      "description": "string",
      "id": "string",
      "manualDescription": "string",
      "score": null,
      "title": "string"
    },
    "performance": {
      "auditRefs": [
        {
          "acronym": "string",
          "group": "string",
          "id": "string",
          "relevantAudits": [
            "string"
          ],
          "weight": 0
        }
      ],
      "description": "string",
      "id": "string",
      "manualDescription": "string",
      "score": null,
      "title": "string"
    },
    "pwa": {
      "auditRefs": [
        {
          "acronym": "string",
          "group": "string",
          "id": "string",
          "relevantAudits": [
            "string"
          ],
          "weight": 0
        }
      ],
      "description": "string",
      "id": "string",
      "manualDescription": "string",
      "score": null,
      "title": "string"
    },
    "seo": {
      "auditRefs": [
        {
          "acronym": "string",
          "group": "string",
          "id": "string",
          "relevantAudits": [
            "string"
          ],
          "weight": 0
        }
      ],
      "description": "string",
      "id": "string",
      "manualDescription": "string",
      "score": null,
      "title": "string"
    }
  },
  "categoryGroups": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "configSettings": {
    "channel": "string",
    "emulatedFormFactor": "string",
    "formFactor": "string",
    "locale": "string",
    "onlyCategories": null
  },
  "entities": [
    {
      "category": "string",
      "homepage": "string",
      "isFirstParty": true,
      "isUnrecognized": true,
      "name": "string",
      "origins": [
        "string"
      ]
    }
  ],
  "environment": {
    "benchmarkIndex": 0,
    "credits": {
      "property1": "string",
      "property2": "string"
    },
    "hostUserAgent": "string",
    "networkUserAgent": "string"
  },
  "fetchTime": "string",
  "finalDisplayedUrl": "string",
  "finalUrl": "string",
  "fullPageScreenshot": null,
  "i18n": {
    "rendererFormattedStrings": {
      "auditGroupExpandTooltip": "string",
      "calculatorLink": "string",
      "crcInitialNavigation": "string",
      "crcLongestDurationLabel": "string",
      "dropdownCopyJSON": "string",
      "dropdownDarkTheme": "string",
      "dropdownPrintExpanded": "string",
      "dropdownPrintSummary": "string",
      "dropdownSaveGist": "string",
      "dropdownSaveHTML": "string",
      "dropdownSaveJSON": "string",
      "dropdownViewer": "string",
      "errorLabel": "string",
      "errorMissingAuditInfo": "string",
      "footerIssue": "string",
      "labDataTitle": "string",
      "lsPerformanceCategoryDescription": "string",
      "manualAuditsGroupTitle": "string",
      "notApplicableAuditsGroupTitle": "string",
      "opportunityResourceColumnLabel": "string",
      "opportunitySavingsColumnLabel": "string",
      "passedAuditsGroupTitle": "string",
      "runtimeDesktopEmulation": "string",
      "runtimeMobileEmulation": "string",
      "runtimeNoEmulation": "string",
      "runtimeSettingsAxeVersion": "string",
      "runtimeSettingsBenchmark": "string",
      "runtimeSettingsCPUThrottling": "string",
      "runtimeSettingsChannel": "string",
      "runtimeSettingsDevice": "string",
      "runtimeSettingsFetchTime": "string",
      "runtimeSettingsNetworkThrottling": "string",
      "runtimeSettingsTitle": "string",
      "runtimeSettingsUA": "string",
      "runtimeSettingsUANetwork": "string",
      "runtimeSettingsUrl": "string",
      "runtimeUnknown": "string",
      "scorescaleLabel": "string",
      "showRelevantAudits": "string",
      "snippetCollapseButtonLabel": "string",
      "snippetExpandButtonLabel": "string",
      "thirdPartyResourcesLabel": "string",
      "throttlingProvided": "string",
      "toplevelWarningsMessage": "string",
      "varianceDisclaimer": "string",
      "viewTreemapLabel": "string",
      "warningAuditsGroupTitle": "string",
      "warningHeader": "string"
    }
  },
  "lighthouseVersion": "string",
  "mainDocumentUrl": "string",
  "requestedUrl": "string",
  "runWarnings": [
    null
  ],
  "runtimeError": {
    "code": "string",
    "message": "string"
  },
  "stackPacks": [
    {
      "descriptions": {
        "property1": "string",
        "property2": "string"
      },
      "iconDataURL": "string",
      "id": "string",
      "title": "string"
    }
  ],
  "timing": {
    "total": 0
  },
  "userAgent": "string"
}
```

The Lighthouse result object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audits|object|false|none|Map of audits in the LHR.|
|categories|[Categories](#schemacategories)|false|none|Map of categories in the LHR.|
|categoryGroups|object|false|none|Map of category groups in the LHR.|
|configSettings|[ConfigSettings](#schemaconfigsettings)|false|none|The configuration settings for this LHR.|
|entities|[[LhrEntity](#schemalhrentity)]|false|none|Entity classification data.|
|environment|[Environment](#schemaenvironment)|false|none|Environment settings that were used when making this LHR.|
|fetchTime|string|false|none|The time that this run was fetched.|
|finalDisplayedUrl|string|false|none|URL displayed on the page after Lighthouse finishes.|
|finalUrl|string|false|none|The final resolved url that was audited.|
|fullPageScreenshot|object|false|none|Screenshot data of the full page, along with node rects relevant to the audit results.|
|i18n|[I18n](#schemai18n)|false|none|The internationalization strings that are required to render the LHR.|
|lighthouseVersion|string|false|none|The lighthouse version that was used to generate this LHR.|
|mainDocumentUrl|string|false|none|URL of the main document request of the final navigation.|
|requestedUrl|string|false|none|The original requested url.|
|runWarnings|[object]|false|none|List of all run warnings in the LHR. Will always output to at least `[]`.|
|runtimeError|[RuntimeError](#schemaruntimeerror)|false|none|A top-level error message that, if present, indicates a serious enough problem that this Lighthouse result may need to be discarded.|
|stackPacks|[[StackPack](#schemastackpack)]|false|none|The Stack Pack advice strings.|
|timing|[Timing](#schematiming)|false|none|Timing information for this LHR.|
|userAgent|string|false|none|The user agent that was used to run this LHR.|

<h2 id="tocS_PagespeedApiLoadingExperienceV5">PagespeedApiLoadingExperienceV5</h2>
<!-- backwards compatibility -->
<a id="schemapagespeedapiloadingexperiencev5"></a>
<a id="schema_PagespeedApiLoadingExperienceV5"></a>
<a id="tocSpagespeedapiloadingexperiencev5"></a>
<a id="tocspagespeedapiloadingexperiencev5"></a>

```json
{
  "id": "string",
  "initial_url": "string",
  "metrics": {
    "property1": {
      "category": "string",
      "distributions": [
        {
          "max": 0,
          "min": 0,
          "proportion": 0
        }
      ],
      "formFactor": "string",
      "median": 0,
      "metricId": "string",
      "percentile": 0
    },
    "property2": {
      "category": "string",
      "distributions": [
        {
          "max": 0,
          "min": 0,
          "proportion": 0
        }
      ],
      "formFactor": "string",
      "median": 0,
      "metricId": "string",
      "percentile": 0
    }
  },
  "origin_fallback": true,
  "overall_category": "string"
}
```

The CrUX loading experience object that contains CrUX data breakdowns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The url, pattern or origin which the metrics are on.|
|initial_url|string|false|none|The requested URL, which may differ from the resolved "id".|
|metrics|object|false|none|The map of .|
|origin_fallback|boolean|false|none|True if the result is an origin fallback from a page, false otherwise.|
|overall_category|string|false|none|The human readable speed "category" of the id.|

<h2 id="tocS_PagespeedApiPagespeedResponseV5">PagespeedApiPagespeedResponseV5</h2>
<!-- backwards compatibility -->
<a id="schemapagespeedapipagespeedresponsev5"></a>
<a id="schema_PagespeedApiPagespeedResponseV5"></a>
<a id="tocSpagespeedapipagespeedresponsev5"></a>
<a id="tocspagespeedapipagespeedresponsev5"></a>

```json
{
  "analysisUTCTimestamp": "string",
  "captchaResult": "string",
  "id": "string",
  "kind": "string",
  "lighthouseResult": {
    "audits": {
      "property1": {
        "description": "string",
        "details": {
          "property1": null,
          "property2": null
        },
        "displayValue": "string",
        "errorMessage": "string",
        "explanation": "string",
        "id": "string",
        "numericUnit": "string",
        "numericValue": 0,
        "score": null,
        "scoreDisplayMode": "string",
        "title": "string",
        "warnings": null
      },
      "property2": {
        "description": "string",
        "details": {
          "property1": null,
          "property2": null
        },
        "displayValue": "string",
        "errorMessage": "string",
        "explanation": "string",
        "id": "string",
        "numericUnit": "string",
        "numericValue": 0,
        "score": null,
        "scoreDisplayMode": "string",
        "title": "string",
        "warnings": null
      }
    },
    "categories": {
      "accessibility": {
        "auditRefs": [
          {
            "acronym": "string",
            "group": "string",
            "id": "string",
            "relevantAudits": [
              "string"
            ],
            "weight": 0
          }
        ],
        "description": "string",
        "id": "string",
        "manualDescription": "string",
        "score": null,
        "title": "string"
      },
      "best-practices": {
        "auditRefs": [
          {
            "acronym": "string",
            "group": "string",
            "id": "string",
            "relevantAudits": [
              "string"
            ],
            "weight": 0
          }
        ],
        "description": "string",
        "id": "string",
        "manualDescription": "string",
        "score": null,
        "title": "string"
      },
      "performance": {
        "auditRefs": [
          {
            "acronym": "string",
            "group": "string",
            "id": "string",
            "relevantAudits": [
              "string"
            ],
            "weight": 0
          }
        ],
        "description": "string",
        "id": "string",
        "manualDescription": "string",
        "score": null,
        "title": "string"
      },
      "pwa": {
        "auditRefs": [
          {
            "acronym": "string",
            "group": "string",
            "id": "string",
            "relevantAudits": [
              "string"
            ],
            "weight": 0
          }
        ],
        "description": "string",
        "id": "string",
        "manualDescription": "string",
        "score": null,
        "title": "string"
      },
      "seo": {
        "auditRefs": [
          {
            "acronym": "string",
            "group": "string",
            "id": "string",
            "relevantAudits": [
              "string"
            ],
            "weight": 0
          }
        ],
        "description": "string",
        "id": "string",
        "manualDescription": "string",
        "score": null,
        "title": "string"
      }
    },
    "categoryGroups": {
      "property1": {
        "description": "string",
        "title": "string"
      },
      "property2": {
        "description": "string",
        "title": "string"
      }
    },
    "configSettings": {
      "channel": "string",
      "emulatedFormFactor": "string",
      "formFactor": "string",
      "locale": "string",
      "onlyCategories": null
    },
    "entities": [
      {
        "category": "string",
        "homepage": "string",
        "isFirstParty": true,
        "isUnrecognized": true,
        "name": "string",
        "origins": [
          "string"
        ]
      }
    ],
    "environment": {
      "benchmarkIndex": 0,
      "credits": {
        "property1": "string",
        "property2": "string"
      },
      "hostUserAgent": "string",
      "networkUserAgent": "string"
    },
    "fetchTime": "string",
    "finalDisplayedUrl": "string",
    "finalUrl": "string",
    "fullPageScreenshot": null,
    "i18n": {
      "rendererFormattedStrings": {
        "auditGroupExpandTooltip": "string",
        "calculatorLink": "string",
        "crcInitialNavigation": "string",
        "crcLongestDurationLabel": "string",
        "dropdownCopyJSON": "string",
        "dropdownDarkTheme": "string",
        "dropdownPrintExpanded": "string",
        "dropdownPrintSummary": "string",
        "dropdownSaveGist": "string",
        "dropdownSaveHTML": "string",
        "dropdownSaveJSON": "string",
        "dropdownViewer": "string",
        "errorLabel": "string",
        "errorMissingAuditInfo": "string",
        "footerIssue": "string",
        "labDataTitle": "string",
        "lsPerformanceCategoryDescription": "string",
        "manualAuditsGroupTitle": "string",
        "notApplicableAuditsGroupTitle": "string",
        "opportunityResourceColumnLabel": "string",
        "opportunitySavingsColumnLabel": "string",
        "passedAuditsGroupTitle": "string",
        "runtimeDesktopEmulation": "string",
        "runtimeMobileEmulation": "string",
        "runtimeNoEmulation": "string",
        "runtimeSettingsAxeVersion": "string",
        "runtimeSettingsBenchmark": "string",
        "runtimeSettingsCPUThrottling": "string",
        "runtimeSettingsChannel": "string",
        "runtimeSettingsDevice": "string",
        "runtimeSettingsFetchTime": "string",
        "runtimeSettingsNetworkThrottling": "string",
        "runtimeSettingsTitle": "string",
        "runtimeSettingsUA": "string",
        "runtimeSettingsUANetwork": "string",
        "runtimeSettingsUrl": "string",
        "runtimeUnknown": "string",
        "scorescaleLabel": "string",
        "showRelevantAudits": "string",
        "snippetCollapseButtonLabel": "string",
        "snippetExpandButtonLabel": "string",
        "thirdPartyResourcesLabel": "string",
        "throttlingProvided": "string",
        "toplevelWarningsMessage": "string",
        "varianceDisclaimer": "string",
        "viewTreemapLabel": "string",
        "warningAuditsGroupTitle": "string",
        "warningHeader": "string"
      }
    },
    "lighthouseVersion": "string",
    "mainDocumentUrl": "string",
    "requestedUrl": "string",
    "runWarnings": [
      null
    ],
    "runtimeError": {
      "code": "string",
      "message": "string"
    },
    "stackPacks": [
      {
        "descriptions": {
          "property1": "string",
          "property2": "string"
        },
        "iconDataURL": "string",
        "id": "string",
        "title": "string"
      }
    ],
    "timing": {
      "total": 0
    },
    "userAgent": "string"
  },
  "loadingExperience": {
    "id": "string",
    "initial_url": "string",
    "metrics": {
      "property1": {
        "category": "string",
        "distributions": [
          {
            "max": 0,
            "min": 0,
            "proportion": 0
          }
        ],
        "formFactor": "string",
        "median": 0,
        "metricId": "string",
        "percentile": 0
      },
      "property2": {
        "category": "string",
        "distributions": [
          {
            "max": 0,
            "min": 0,
            "proportion": 0
          }
        ],
        "formFactor": "string",
        "median": 0,
        "metricId": "string",
        "percentile": 0
      }
    },
    "origin_fallback": true,
    "overall_category": "string"
  },
  "originLoadingExperience": {
    "id": "string",
    "initial_url": "string",
    "metrics": {
      "property1": {
        "category": "string",
        "distributions": [
          {
            "max": 0,
            "min": 0,
            "proportion": 0
          }
        ],
        "formFactor": "string",
        "median": 0,
        "metricId": "string",
        "percentile": 0
      },
      "property2": {
        "category": "string",
        "distributions": [
          {
            "max": 0,
            "min": 0,
            "proportion": 0
          }
        ],
        "formFactor": "string",
        "median": 0,
        "metricId": "string",
        "percentile": 0
      }
    },
    "origin_fallback": true,
    "overall_category": "string"
  },
  "version": {
    "major": "string",
    "minor": "string"
  }
}
```

The Pagespeed API response object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisUTCTimestamp|string|false|none|The UTC timestamp of this analysis.|
|captchaResult|string|false|none|The captcha verify result|
|id|string|false|none|Canonicalized and final URL for the document, after following page redirects (if any).|
|kind|string|false|none|Kind of result.|
|lighthouseResult|[LighthouseResultV5](#schemalighthouseresultv5)|false|none|Lighthouse response for the audit url as an object.|
|loadingExperience|[PagespeedApiLoadingExperienceV5](#schemapagespeedapiloadingexperiencev5)|false|none|Metrics of end users' page loading experience.|
|originLoadingExperience|[PagespeedApiLoadingExperienceV5](#schemapagespeedapiloadingexperiencev5)|false|none|Metrics of the aggregated page loading experience of the origin|
|version|[PagespeedVersion](#schemapagespeedversion)|false|none|The version of PageSpeed used to generate these results.|

<h2 id="tocS_PagespeedVersion">PagespeedVersion</h2>
<!-- backwards compatibility -->
<a id="schemapagespeedversion"></a>
<a id="schema_PagespeedVersion"></a>
<a id="tocSpagespeedversion"></a>
<a id="tocspagespeedversion"></a>

```json
{
  "major": "string",
  "minor": "string"
}
```

The Pagespeed Version object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|major|string|false|none|The major version number of PageSpeed used to generate these results.|
|minor|string|false|none|The minor version number of PageSpeed used to generate these results.|

<h2 id="tocS_RendererFormattedStrings">RendererFormattedStrings</h2>
<!-- backwards compatibility -->
<a id="schemarendererformattedstrings"></a>
<a id="schema_RendererFormattedStrings"></a>
<a id="tocSrendererformattedstrings"></a>
<a id="tocsrendererformattedstrings"></a>

```json
{
  "auditGroupExpandTooltip": "string",
  "calculatorLink": "string",
  "crcInitialNavigation": "string",
  "crcLongestDurationLabel": "string",
  "dropdownCopyJSON": "string",
  "dropdownDarkTheme": "string",
  "dropdownPrintExpanded": "string",
  "dropdownPrintSummary": "string",
  "dropdownSaveGist": "string",
  "dropdownSaveHTML": "string",
  "dropdownSaveJSON": "string",
  "dropdownViewer": "string",
  "errorLabel": "string",
  "errorMissingAuditInfo": "string",
  "footerIssue": "string",
  "labDataTitle": "string",
  "lsPerformanceCategoryDescription": "string",
  "manualAuditsGroupTitle": "string",
  "notApplicableAuditsGroupTitle": "string",
  "opportunityResourceColumnLabel": "string",
  "opportunitySavingsColumnLabel": "string",
  "passedAuditsGroupTitle": "string",
  "runtimeDesktopEmulation": "string",
  "runtimeMobileEmulation": "string",
  "runtimeNoEmulation": "string",
  "runtimeSettingsAxeVersion": "string",
  "runtimeSettingsBenchmark": "string",
  "runtimeSettingsCPUThrottling": "string",
  "runtimeSettingsChannel": "string",
  "runtimeSettingsDevice": "string",
  "runtimeSettingsFetchTime": "string",
  "runtimeSettingsNetworkThrottling": "string",
  "runtimeSettingsTitle": "string",
  "runtimeSettingsUA": "string",
  "runtimeSettingsUANetwork": "string",
  "runtimeSettingsUrl": "string",
  "runtimeUnknown": "string",
  "scorescaleLabel": "string",
  "showRelevantAudits": "string",
  "snippetCollapseButtonLabel": "string",
  "snippetExpandButtonLabel": "string",
  "thirdPartyResourcesLabel": "string",
  "throttlingProvided": "string",
  "toplevelWarningsMessage": "string",
  "varianceDisclaimer": "string",
  "viewTreemapLabel": "string",
  "warningAuditsGroupTitle": "string",
  "warningHeader": "string"
}
```

Message holding the formatted strings used in the renderer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditGroupExpandTooltip|string|false|none|The tooltip text on an expandable chevron icon.|
|calculatorLink|string|false|none|Text link pointing to the Lighthouse scoring calculator. This link immediately follows a sentence stating the performance score is calculated from the perf metrics.|
|crcInitialNavigation|string|false|none|The label for the initial request in a critical request chain.|
|crcLongestDurationLabel|string|false|none|The label for values shown in the summary of critical request chains.|
|dropdownCopyJSON|string|false|none|Option in a dropdown menu that copies the Lighthouse JSON object to the system clipboard.|
|dropdownDarkTheme|string|false|none|Option in a dropdown menu that toggles the themeing of the report between Light(default) and Dark themes.|
|dropdownPrintExpanded|string|false|none|Option in a dropdown menu that opens a full Lighthouse report in a print dialog.|
|dropdownPrintSummary|string|false|none|Option in a dropdown menu that opens a small, summary report in a print dialog.|
|dropdownSaveGist|string|false|none|Option in a dropdown menu that saves the current report as a new GitHub Gist.|
|dropdownSaveHTML|string|false|none|Option in a dropdown menu that saves the Lighthouse report HTML locally to the system as a '.html' file.|
|dropdownSaveJSON|string|false|none|Option in a dropdown menu that saves the Lighthouse JSON object to the local system as a '.json' file.|
|dropdownViewer|string|false|none|Option in a dropdown menu that opens the current report in the Lighthouse Viewer Application.|
|errorLabel|string|false|none|The label shown next to an audit or metric that has had an error.|
|errorMissingAuditInfo|string|false|none|The error string shown next to an erroring audit.|
|footerIssue|string|false|none|Label for button to create an issue against the Lighthouse GitHub project.|
|labDataTitle|string|false|none|The title of the lab data performance category.|
|lsPerformanceCategoryDescription|string|false|none|The disclaimer shown under performance explaining that the network can vary.|
|manualAuditsGroupTitle|string|false|none|The heading shown above a list of audits that were not computerd in the run.|
|notApplicableAuditsGroupTitle|string|false|none|The heading shown above a list of audits that do not apply to a page.|
|opportunityResourceColumnLabel|string|false|none|The heading for the estimated page load savings opportunity of an audit.|
|opportunitySavingsColumnLabel|string|false|none|The heading for the estimated page load savings of opportunity audits.|
|passedAuditsGroupTitle|string|false|none|The heading that is shown above a list of audits that are passing.|
|runtimeDesktopEmulation|string|false|none|Descriptive explanation for emulation setting when emulating a generic desktop form factor, as opposed to a mobile-device like form factor.|
|runtimeMobileEmulation|string|false|none|Descriptive explanation for emulation setting when emulating a Nexus 5X mobile device.|
|runtimeNoEmulation|string|false|none|Descriptive explanation for emulation setting when no device emulation is set.|
|runtimeSettingsAxeVersion|string|false|none|Label for a row in a table that shows the version of the Axe library used|
|runtimeSettingsBenchmark|string|false|none|Label for a row in a table that shows the estimated CPU power of the machine running Lighthouse. Example row values: 532, 1492, 783.|
|runtimeSettingsCPUThrottling|string|false|none|Label for a row in a table that describes the CPU throttling conditions that were used during a Lighthouse run, if any.|
|runtimeSettingsChannel|string|false|none|Label for a row in a table that shows in what tool Lighthouse is being run (e.g. The lighthouse CLI, Chrome DevTools, Lightrider, WebPageTest, etc).|
|runtimeSettingsDevice|string|false|none|Label for a row in a table that describes the kind of device that was emulated for the Lighthouse run. Example values for row elements: 'No Emulation', 'Emulated Desktop', etc.|
|runtimeSettingsFetchTime|string|false|none|Label for a row in a table that shows the time at which a Lighthouse run was conducted; formatted as a timestamp, e.g. Jan 1, 1970 12:00 AM UTC.|
|runtimeSettingsNetworkThrottling|string|false|none|Label for a row in a table that describes the network throttling conditions that were used during a Lighthouse run, if any.|
|runtimeSettingsTitle|string|false|none|Title of the Runtime settings table in a Lighthouse report. Runtime settings are the environment configurations that a specific report used at auditing time.|
|runtimeSettingsUA|string|false|none|Label for a row in a table that shows the User Agent that was detected on the Host machine that ran Lighthouse.|
|runtimeSettingsUANetwork|string|false|none|Label for a row in a table that shows the User Agent that was used to send out all network requests during the Lighthouse run.|
|runtimeSettingsUrl|string|false|none|Label for a row in a table that shows the URL that was audited during a Lighthouse run.|
|runtimeUnknown|string|false|none|Descriptive explanation for a runtime setting that is set to an unknown value.|
|scorescaleLabel|string|false|none|The label that explains the score gauges scale (0-49, 50-89, 90-100).|
|showRelevantAudits|string|false|none|Label preceding a radio control for filtering the list of audits. The radio choices are various performance metrics (FCP, LCP, TBT), and if chosen, the audits in the report are hidden if they are not relevant to the selected metric.|
|snippetCollapseButtonLabel|string|false|none|The label for the button to show only a few lines of a snippet|
|snippetExpandButtonLabel|string|false|none|The label for the button to show all lines of a snippet|
|thirdPartyResourcesLabel|string|false|none|This label is for a filter checkbox above a table of items|
|throttlingProvided|string|false|none|Descriptive explanation for environment throttling that was provided by the runtime environment instead of provided by Lighthouse throttling.|
|toplevelWarningsMessage|string|false|none|The label shown preceding important warnings that may have invalidated an entire report.|
|varianceDisclaimer|string|false|none|The disclaimer shown below a performance metric value.|
|viewTreemapLabel|string|false|none|Label for a button that opens the Treemap App|
|warningAuditsGroupTitle|string|false|none|The heading that is shown above a list of audits that have warnings|
|warningHeader|string|false|none|The label shown above a bulleted list of warnings.|

<h2 id="tocS_RuntimeError">RuntimeError</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeerror"></a>
<a id="schema_RuntimeError"></a>
<a id="tocSruntimeerror"></a>
<a id="tocsruntimeerror"></a>

```json
{
  "code": "string",
  "message": "string"
}
```

Message containing a runtime error config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The enumerated Lighthouse Error code.|
|message|string|false|none|A human readable message explaining the error code.|

<h2 id="tocS_StackPack">StackPack</h2>
<!-- backwards compatibility -->
<a id="schemastackpack"></a>
<a id="schema_StackPack"></a>
<a id="tocSstackpack"></a>
<a id="tocsstackpack"></a>

```json
{
  "descriptions": {
    "property1": "string",
    "property2": "string"
  },
  "iconDataURL": "string",
  "id": "string",
  "title": "string"
}
```

Message containing Stack Pack information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptions|object|false|none|The stack pack advice strings.|
|iconDataURL|string|false|none|The stack pack icon data uri.|
|id|string|false|none|The stack pack id.|
|title|string|false|none|The stack pack title.|

<h2 id="tocS_Timing">Timing</h2>
<!-- backwards compatibility -->
<a id="schematiming"></a>
<a id="schema_Timing"></a>
<a id="tocStiming"></a>
<a id="tocstiming"></a>

```json
{
  "total": 0
}
```

Message containing the performance timing data for the Lighthouse run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number(double)|false|none|The total duration of Lighthouse's run.|

<h2 id="tocS_UserPageLoadMetricV5">UserPageLoadMetricV5</h2>
<!-- backwards compatibility -->
<a id="schemauserpageloadmetricv5"></a>
<a id="schema_UserPageLoadMetricV5"></a>
<a id="tocSuserpageloadmetricv5"></a>
<a id="tocsuserpageloadmetricv5"></a>

```json
{
  "category": "string",
  "distributions": [
    {
      "max": 0,
      "min": 0,
      "proportion": 0
    }
  ],
  "formFactor": "string",
  "median": 0,
  "metricId": "string",
  "percentile": 0
}
```

A CrUX metric object for a single metric and form factor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The category of the specific time metric.|
|distributions|[[Bucket](#schemabucket)]|false|none|Metric distributions. Proportions should sum up to 1.|
|formFactor|string|false|none|Identifies the form factor of the metric being collected.|
|median|integer(int32)|false|none|The median number of the metric, in millisecond.|
|metricId|string|false|none|Identifies the type of the metric.|
|percentile|integer(int32)|false|none|We use this field to store certain percentile value for this metric. For v4, this field contains pc50. For v5, this field contains pc90.|
