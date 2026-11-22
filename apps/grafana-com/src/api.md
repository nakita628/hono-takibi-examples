<h1 id="gcom-api">GCOM API vpublic</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Grafana.com API (public).

Looking for GCOM API client packages? You can find them at [grafana-com-public-clients](https://github.com/grafana/grafana-com-public-clients) repository.

If you have any questions, please contact support in the Grafana Cloud UI.

This spec is in *Beta* stage, so use it with caution:
- Not all endpoint responses are properly typed for the time being.
- Some request parameter types may not be precise

Base URLs:

* <a href="https://raw.githubusercontent.com/api">https://raw.githubusercontent.com/api</a> - Main API server

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="gcom-api-instances">instances</h1>

Everything related to our Hosted Grafana Instances

## Get a list of instances

<a id="opIdgetInstances"></a>

> Code samples

```bash
curl https://grafana.com/api/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /instances`

<h3 id="get-a-list-of-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|query|string|false|none|
|clusterIdIn|query|[integer]|false|none|
|cursor|query|integer|false|none|
|direction|query|string|false|none|
|hosted|query|boolean|false|none|
|id|query|string|false|none|
|idIn|query|string|false|none|
|idMin|query|integer|false|none|
|includeLabels|query|boolean|false|none|
|includePromCurrentActiveSeries|query|boolean|false|none|
|labels|query|[string]|false|none|
|name|query|string|false|none|
|nameIn|query|string|false|none|
|orderBy|query|string|false|none|
|orgId|query|string|false|none|
|orgIdIn|query|string|false|none|
|orgSlug|query|string|false|none|
|orgSlugIn|query|string|false|none|
|page|query|integer|false|none|
|pageSize|query|integer|false|none|
|plan|query|string|false|none|
|planIn|query|string|false|none|
|planNot|query|string|false|none|
|region|query|string|false|none|
|regionIn|query|[string]|false|none|
|slug|query|string|false|none|
|slugIn|query|string|false|none|
|status|query|string|false|none|
|updatedOrCreatedAtMin|query|string(date-time)|false|none|
|url|query|string|false|none|
|version|query|string|false|none|
|versionIn|query|[string]|false|none|
|versionNot|query|string|false|none|
|versionNotIn|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|
|orderBy|id|
|orderBy|name|
|orderBy|version|
|orderBy|createdAt|
|orderBy|runningVersion|
|orderBy|billingActiveUsers|
|orderBy|billingGrafanaActiveUsers|
|orderBy|billingOnCallActiveUsers|
|orderBy|currentActiveUsers|
|orderBy|currentActiveAdminUsers|
|orderBy|currentActiveEditorUsers|
|orderBy|currentActiveViewerUsers|

> Example responses

> 200 Response

```json
{
  "total": 4.078845849666752,
  "pages": 0.2025324113236393,
  "orderBy": "orderBy",
  "pageSize": 6.628464275087742,
  "page": 4.258773108174356,
  "items": [
    {
      "hmInstancePromName": "hmInstancePromName",
      "hmInstanceGraphiteType": "hmInstanceGraphiteType",
      "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
      "regionSigilUrl": "regionSigilUrl",
      "versionIssueLink": "versionIssueLink",
      "deleteProtection": true,
      "customAuth": true,
      "planName": "planName",
      "hmInstanceGraphiteStatus": "active",
      "type": "grafana",
      "currentActiveEditorUsers": 2.027123023002322,
      "ssl": true,
      "userQuota": 3.0576100241049344,
      "id": 6,
      "stackType": "stackType",
      "plan": "advanced",
      "hlInstanceBillingUsage": 5.025004791520295,
      "agentManagementInstanceStatus": "active",
      "htInstanceClusterId": 5,
      "alertCnt": 0.8008281904610115,
      "datasourceCnts": "{}",
      "hmInstanceGraphiteBillingUsage": 8.762042012749001,
      "version": "version",
      "billingStartDate": "billingStartDate",
      "hmInstancePromClusterId": 6,
      "hlInstanceStatus": "active",
      "labels": "{}",
      "orgCreatedAt": "orgCreatedAt",
      "amInstanceStatus": "active",
      "clusterSlug": "clusterSlug",
      "htInstanceUrl": "htInstanceUrl",
      "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
      "hmInstancePromId": 2,
      "status": "active",
      "htInstanceCurrentUsage": 6.704019297950036,
      "orgId": 8,
      "hmInstanceGraphiteId": 9,
      "clusterName": "clusterName",
      "k6OrgId": 3,
      "currentActiveUsers": 4.145608029883936,
      "hpInstanceUrl": "hpInstanceUrl",
      "dailyAdminCnt": 1.2315135367772556,
      "url": "url",
      "billingOnCallActiveUsers": 7.061401241503109,
      "hmInstancePromUrl": "hmInstancePromUrl",
      "machineLearningLogsToken": "machineLearningLogsToken",
      "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
      "regionStackStateServiceUrl": "regionStackStateServiceUrl",
      "hmInstanceGraphiteClusterId": 6,
      "hpInstanceId": 3,
      "config": "{}",
      "usageStatsId": "usageStatsId",
      "orgSlug": "orgSlug",
      "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
      "regionLLMGatewayUrl": "regionLLMGatewayUrl",
      "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
      "hlInstanceCurrentUsage": 4.965218492984954,
      "dailyViewerCnt": 6.84685269835264,
      "statusUpdatedAt": "statusUpdatedAt",
      "hlInstanceId": 9,
      "agentManagementInstanceUrl": "agentManagementInstanceUrl",
      "agentManagementInstanceName": "agentManagementInstanceName",
      "regionAssistantUrl": "regionAssistantUrl",
      "trial": 3.0205796992916243,
      "createdAt": "createdAt",
      "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
      "runningVersion": "runningVersion",
      "amInstanceId": 1,
      "links": [
        {
          "rel": "rel",
          "href": "href"
        },
        {
          "rel": "rel",
          "href": "href"
        }
      ],
      "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
      "hpInstanceStatus": "active",
      "slug": "slug",
      "updatedAt": "updatedAt",
      "htInstanceBillingUsage": 3.353193347011243,
      "agentManagementInstanceId": 7,
      "orgName": "orgName",
      "updatedBy": "updatedBy",
      "htInstanceName": "htInstanceName",
      "trialExpiresAt": "trialExpiresAt",
      "amInstanceUrl": "amInstanceUrl",
      "billingActiveUsers": 5.637376656633329,
      "billingGrafanaActiveUsers": 2.3021358869347655,
      "hmInstancePromStatus": "active",
      "regionInsightsApiUrl": "regionInsightsApiUrl",
      "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
      "customDomain": true,
      "dailyUserCnt": 1.4894159098541704,
      "amInstanceName": "amInstanceName",
      "dashboardQuota": 1.1730742509559433,
      "regionPublicName": "regionPublicName",
      "billingEndDate": "billingEndDate",
      "name": "name",
      "hlInstanceUrl": "hlInstanceUrl",
      "hlInstanceClusterId": 9,
      "support": true,
      "hpInstanceBillingUsage": 7.058770351582356,
      "description": "description",
      "clusterId": 9,
      "dailyEditorCnt": 1.0246457001441578,
      "alertQuota": 6.027456183070403,
      "machineLearning": 4.652396432933246,
      "currentActiveViewerUsers": 7.386281948385884,
      "hlInstanceName": "hlInstanceName",
      "hmInstanceGraphiteName": "hmInstanceGraphiteName",
      "hpInstanceName": "hpInstanceName",
      "provider": "provider",
      "hmInstancePromBillingUsage": 1.284659006116532,
      "currentActiveAdminUsers": 3.616076749251911,
      "regionAgentO11YUrl": "regionAgentO11YUrl",
      "htInstanceId": 6,
      "regionSlug": "regionSlug",
      "dashboardCnt": 7.457744773683766,
      "htInstanceStatus": "active",
      "agentManagementInstanceClusterId": 5,
      "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
      "hpInstanceCurrentUsage": 0.8851374739011653,
      "providerRegion": "providerRegion",
      "createdBy": "createdBy",
      "regionId": 7,
      "hpInstanceClusterId": 7,
      "amInstanceClusterId": 5,
      "hmInstancePromCurrentUsage": 6.965117697638846,
      "incident": 0.10263654006109402,
      "gateway": "gateway"
    },
    {
      "hmInstancePromName": "hmInstancePromName",
      "hmInstanceGraphiteType": "hmInstanceGraphiteType",
      "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
      "regionSigilUrl": "regionSigilUrl",
      "versionIssueLink": "versionIssueLink",
      "deleteProtection": true,
      "customAuth": true,
      "planName": "planName",
      "hmInstanceGraphiteStatus": "active",
      "type": "grafana",
      "currentActiveEditorUsers": 2.027123023002322,
      "ssl": true,
      "userQuota": 3.0576100241049344,
      "id": 6,
      "stackType": "stackType",
      "plan": "advanced",
      "hlInstanceBillingUsage": 5.025004791520295,
      "agentManagementInstanceStatus": "active",
      "htInstanceClusterId": 5,
      "alertCnt": 0.8008281904610115,
      "datasourceCnts": "{}",
      "hmInstanceGraphiteBillingUsage": 8.762042012749001,
      "version": "version",
      "billingStartDate": "billingStartDate",
      "hmInstancePromClusterId": 6,
      "hlInstanceStatus": "active",
      "labels": "{}",
      "orgCreatedAt": "orgCreatedAt",
      "amInstanceStatus": "active",
      "clusterSlug": "clusterSlug",
      "htInstanceUrl": "htInstanceUrl",
      "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
      "hmInstancePromId": 2,
      "status": "active",
      "htInstanceCurrentUsage": 6.704019297950036,
      "orgId": 8,
      "hmInstanceGraphiteId": 9,
      "clusterName": "clusterName",
      "k6OrgId": 3,
      "currentActiveUsers": 4.145608029883936,
      "hpInstanceUrl": "hpInstanceUrl",
      "dailyAdminCnt": 1.2315135367772556,
      "url": "url",
      "billingOnCallActiveUsers": 7.061401241503109,
      "hmInstancePromUrl": "hmInstancePromUrl",
      "machineLearningLogsToken": "machineLearningLogsToken",
      "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
      "regionStackStateServiceUrl": "regionStackStateServiceUrl",
      "hmInstanceGraphiteClusterId": 6,
      "hpInstanceId": 3,
      "config": "{}",
      "usageStatsId": "usageStatsId",
      "orgSlug": "orgSlug",
      "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
      "regionLLMGatewayUrl": "regionLLMGatewayUrl",
      "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
      "hlInstanceCurrentUsage": 4.965218492984954,
      "dailyViewerCnt": 6.84685269835264,
      "statusUpdatedAt": "statusUpdatedAt",
      "hlInstanceId": 9,
      "agentManagementInstanceUrl": "agentManagementInstanceUrl",
      "agentManagementInstanceName": "agentManagementInstanceName",
      "regionAssistantUrl": "regionAssistantUrl",
      "trial": 3.0205796992916243,
      "createdAt": "createdAt",
      "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
      "runningVersion": "runningVersion",
      "amInstanceId": 1,
      "links": [
        {
          "rel": "rel",
          "href": "href"
        },
        {
          "rel": "rel",
          "href": "href"
        }
      ],
      "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
      "hpInstanceStatus": "active",
      "slug": "slug",
      "updatedAt": "updatedAt",
      "htInstanceBillingUsage": 3.353193347011243,
      "agentManagementInstanceId": 7,
      "orgName": "orgName",
      "updatedBy": "updatedBy",
      "htInstanceName": "htInstanceName",
      "trialExpiresAt": "trialExpiresAt",
      "amInstanceUrl": "amInstanceUrl",
      "billingActiveUsers": 5.637376656633329,
      "billingGrafanaActiveUsers": 2.3021358869347655,
      "hmInstancePromStatus": "active",
      "regionInsightsApiUrl": "regionInsightsApiUrl",
      "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
      "customDomain": true,
      "dailyUserCnt": 1.4894159098541704,
      "amInstanceName": "amInstanceName",
      "dashboardQuota": 1.1730742509559433,
      "regionPublicName": "regionPublicName",
      "billingEndDate": "billingEndDate",
      "name": "name",
      "hlInstanceUrl": "hlInstanceUrl",
      "hlInstanceClusterId": 9,
      "support": true,
      "hpInstanceBillingUsage": 7.058770351582356,
      "description": "description",
      "clusterId": 9,
      "dailyEditorCnt": 1.0246457001441578,
      "alertQuota": 6.027456183070403,
      "machineLearning": 4.652396432933246,
      "currentActiveViewerUsers": 7.386281948385884,
      "hlInstanceName": "hlInstanceName",
      "hmInstanceGraphiteName": "hmInstanceGraphiteName",
      "hpInstanceName": "hpInstanceName",
      "provider": "provider",
      "hmInstancePromBillingUsage": 1.284659006116532,
      "currentActiveAdminUsers": 3.616076749251911,
      "regionAgentO11YUrl": "regionAgentO11YUrl",
      "htInstanceId": 6,
      "regionSlug": "regionSlug",
      "dashboardCnt": 7.457744773683766,
      "htInstanceStatus": "active",
      "agentManagementInstanceClusterId": 5,
      "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
      "hpInstanceCurrentUsage": 0.8851374739011653,
      "providerRegion": "providerRegion",
      "createdBy": "createdBy",
      "regionId": 7,
      "hpInstanceClusterId": 7,
      "amInstanceClusterId": 5,
      "hmInstancePromCurrentUsage": 6.965117697638846,
      "incident": 0.10263654006109402,
      "gateway": "gateway"
    }
  ],
  "direction": "asc"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="get-a-list-of-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[getInstances_200_response](#schemagetinstances_200_response)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create a new instance

<a id="opIdpostInstances"></a>

> Code samples

```bash
curl https://grafana.com/api/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "adminUserInstance": true,
    "alerts": true,
    "cluster": "string",
    "deleteProtection": false,
    "description": "string",
    "graphite": true,
    "hlInstanceId": 0,
    "hosted": true,
    "issueLink": "string",
    "k6OrgId": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "logs": true,
    "name": "string",
    "org": "string",
    "plan": "free",
    "plugins": [
      "string"
    ],
    "prometheus": true,
    "publicInstance": true,
    "reasonType": "bug",
    "region": "string",
    "slug": "string",
    "stackType": "cloud",
    "url": "string",
    "usernameOrEmail": "string",
    "version": "string",
    "waitForReadiness": true
  }'
```

`POST /instances`

> Body parameter

```json
{
  "adminUserInstance": true,
  "alerts": true,
  "cluster": "string",
  "deleteProtection": false,
  "description": "string",
  "graphite": true,
  "hlInstanceId": 0,
  "hosted": true,
  "issueLink": "string",
  "k6OrgId": 0,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logs": true,
  "name": "string",
  "org": "string",
  "plan": "free",
  "plugins": [
    "string"
  ],
  "prometheus": true,
  "publicInstance": true,
  "reasonType": "bug",
  "region": "string",
  "slug": "string",
  "stackType": "cloud",
  "url": "string",
  "usernameOrEmail": "string",
  "version": "string",
  "waitForReadiness": true
}
```

<h3 id="create-a-new-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-request-id|header|string|true|none|
|body|body|[postInstances_request](#schemapostinstances_request)|true|none|
|» adminUserInstance|body|boolean|false|none|
|» alerts|body|boolean|false|none|
|» cluster|body|string|false|none|
|» deleteProtection|body|boolean|false|none|
|» description|body|string|false|none|
|» graphite|body|boolean|false|none|
|» hlInstanceId|body|integer|false|none|
|» hosted|body|boolean|false|none|
|» issueLink|body|string|false|none|
|» k6OrgId|body|integer|false|none|
|» labels|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» logs|body|boolean|false|none|
|» name|body|string|true|none|
|» org|body|string|false|none|
|» plan|body|string|false|none|
|» plugins|body|[string]|false|none|
|» prometheus|body|boolean|false|none|
|» publicInstance|body|boolean|false|none|
|» reasonType|body|string|false|none|
|» region|body|string|false|none|
|» slug|body|string|false|none|
|» stackType|body|string|false|none|
|» url|body|string|false|none|
|» usernameOrEmail|body|string|false|none|
|» version|body|string|false|none|
|» waitForReadiness|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» plan|free|
|» plan|free-trial|
|» plan|gcloud|
|» plan|enterprise|
|» plan|advanced|
|» plan|payg|
|» plan|fedramp|
|» plan|trial|
|» plan|logsdemo|
|» plan|starter|
|» plan|starter-prom|
|» plan|basic|
|» plan|basic-prom|
|» plan|bundled|
|» plan|fog|
|» reasonType|bug|
|» reasonType|securityVulnerability|
|» reasonType|customerUpgradeShy|
|» reasonType|customerBreaksUseCase|
|» reasonType|customerRequest|
|» reasonType|other|

> Example responses

> 200 Response

```json
{
  "hmInstancePromName": "hmInstancePromName",
  "hmInstanceGraphiteType": "hmInstanceGraphiteType",
  "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
  "regionSigilUrl": "regionSigilUrl",
  "versionIssueLink": "versionIssueLink",
  "deleteProtection": true,
  "customAuth": true,
  "planName": "planName",
  "hmInstanceGraphiteStatus": "active",
  "type": "grafana",
  "currentActiveEditorUsers": 2.027123023002322,
  "ssl": true,
  "userQuota": 3.0576100241049344,
  "id": 6,
  "stackType": "stackType",
  "plan": "advanced",
  "hlInstanceBillingUsage": 5.025004791520295,
  "agentManagementInstanceStatus": "active",
  "htInstanceClusterId": 5,
  "alertCnt": 0.8008281904610115,
  "datasourceCnts": "{}",
  "hmInstanceGraphiteBillingUsage": 8.762042012749001,
  "version": "version",
  "billingStartDate": "billingStartDate",
  "hmInstancePromClusterId": 6,
  "hlInstanceStatus": "active",
  "labels": "{}",
  "orgCreatedAt": "orgCreatedAt",
  "amInstanceStatus": "active",
  "clusterSlug": "clusterSlug",
  "htInstanceUrl": "htInstanceUrl",
  "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
  "hmInstancePromId": 2,
  "status": "active",
  "htInstanceCurrentUsage": 6.704019297950036,
  "orgId": 8,
  "hmInstanceGraphiteId": 9,
  "clusterName": "clusterName",
  "k6OrgId": 3,
  "currentActiveUsers": 4.145608029883936,
  "hpInstanceUrl": "hpInstanceUrl",
  "dailyAdminCnt": 1.2315135367772556,
  "url": "url",
  "billingOnCallActiveUsers": 7.061401241503109,
  "hmInstancePromUrl": "hmInstancePromUrl",
  "machineLearningLogsToken": "machineLearningLogsToken",
  "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
  "regionStackStateServiceUrl": "regionStackStateServiceUrl",
  "hmInstanceGraphiteClusterId": 6,
  "hpInstanceId": 3,
  "config": "{}",
  "usageStatsId": "usageStatsId",
  "orgSlug": "orgSlug",
  "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
  "regionLLMGatewayUrl": "regionLLMGatewayUrl",
  "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
  "hlInstanceCurrentUsage": 4.965218492984954,
  "dailyViewerCnt": 6.84685269835264,
  "statusUpdatedAt": "statusUpdatedAt",
  "hlInstanceId": 9,
  "agentManagementInstanceUrl": "agentManagementInstanceUrl",
  "agentManagementInstanceName": "agentManagementInstanceName",
  "regionAssistantUrl": "regionAssistantUrl",
  "trial": 3.0205796992916243,
  "createdAt": "createdAt",
  "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
  "runningVersion": "runningVersion",
  "amInstanceId": 1,
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
  "hpInstanceStatus": "active",
  "slug": "slug",
  "updatedAt": "updatedAt",
  "htInstanceBillingUsage": 3.353193347011243,
  "agentManagementInstanceId": 7,
  "orgName": "orgName",
  "updatedBy": "updatedBy",
  "htInstanceName": "htInstanceName",
  "trialExpiresAt": "trialExpiresAt",
  "amInstanceUrl": "amInstanceUrl",
  "billingActiveUsers": 5.637376656633329,
  "billingGrafanaActiveUsers": 2.3021358869347655,
  "hmInstancePromStatus": "active",
  "regionInsightsApiUrl": "regionInsightsApiUrl",
  "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
  "customDomain": true,
  "dailyUserCnt": 1.4894159098541704,
  "amInstanceName": "amInstanceName",
  "dashboardQuota": 1.1730742509559433,
  "regionPublicName": "regionPublicName",
  "billingEndDate": "billingEndDate",
  "name": "name",
  "hlInstanceUrl": "hlInstanceUrl",
  "hlInstanceClusterId": 9,
  "support": true,
  "hpInstanceBillingUsage": 7.058770351582356,
  "description": "description",
  "clusterId": 9,
  "dailyEditorCnt": 1.0246457001441578,
  "alertQuota": 6.027456183070403,
  "machineLearning": 4.652396432933246,
  "currentActiveViewerUsers": 7.386281948385884,
  "hlInstanceName": "hlInstanceName",
  "hmInstanceGraphiteName": "hmInstanceGraphiteName",
  "hpInstanceName": "hpInstanceName",
  "provider": "provider",
  "hmInstancePromBillingUsage": 1.284659006116532,
  "currentActiveAdminUsers": 3.616076749251911,
  "regionAgentO11YUrl": "regionAgentO11YUrl",
  "htInstanceId": 6,
  "regionSlug": "regionSlug",
  "dashboardCnt": 7.457744773683766,
  "htInstanceStatus": "active",
  "agentManagementInstanceClusterId": 5,
  "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
  "hpInstanceCurrentUsage": 0.8851374739011653,
  "providerRegion": "providerRegion",
  "createdBy": "createdBy",
  "regionId": 7,
  "hpInstanceClusterId": 7,
  "amInstanceClusterId": 5,
  "hmInstancePromCurrentUsage": 6.965117697638846,
  "incident": 0.10263654006109402,
  "gateway": "gateway"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="create-a-new-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiInstance](#schemaformattedapiinstance)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Gets an instance

<a id="opIdgetInstance"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /instances/{instanceId}`

<h3 id="gets-an-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|config|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "hmInstancePromName": "hmInstancePromName",
  "hmInstanceGraphiteType": "hmInstanceGraphiteType",
  "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
  "regionSigilUrl": "regionSigilUrl",
  "versionIssueLink": "versionIssueLink",
  "deleteProtection": true,
  "customAuth": true,
  "planName": "planName",
  "hmInstanceGraphiteStatus": "active",
  "type": "grafana",
  "currentActiveEditorUsers": 2.027123023002322,
  "ssl": true,
  "userQuota": 3.0576100241049344,
  "id": 6,
  "stackType": "stackType",
  "plan": "advanced",
  "hlInstanceBillingUsage": 5.025004791520295,
  "agentManagementInstanceStatus": "active",
  "htInstanceClusterId": 5,
  "alertCnt": 0.8008281904610115,
  "datasourceCnts": "{}",
  "hmInstanceGraphiteBillingUsage": 8.762042012749001,
  "version": "version",
  "billingStartDate": "billingStartDate",
  "hmInstancePromClusterId": 6,
  "hlInstanceStatus": "active",
  "labels": "{}",
  "orgCreatedAt": "orgCreatedAt",
  "amInstanceStatus": "active",
  "clusterSlug": "clusterSlug",
  "htInstanceUrl": "htInstanceUrl",
  "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
  "hmInstancePromId": 2,
  "status": "active",
  "htInstanceCurrentUsage": 6.704019297950036,
  "orgId": 8,
  "hmInstanceGraphiteId": 9,
  "clusterName": "clusterName",
  "k6OrgId": 3,
  "currentActiveUsers": 4.145608029883936,
  "hpInstanceUrl": "hpInstanceUrl",
  "dailyAdminCnt": 1.2315135367772556,
  "url": "url",
  "billingOnCallActiveUsers": 7.061401241503109,
  "hmInstancePromUrl": "hmInstancePromUrl",
  "machineLearningLogsToken": "machineLearningLogsToken",
  "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
  "regionStackStateServiceUrl": "regionStackStateServiceUrl",
  "hmInstanceGraphiteClusterId": 6,
  "hpInstanceId": 3,
  "config": "{}",
  "usageStatsId": "usageStatsId",
  "orgSlug": "orgSlug",
  "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
  "regionLLMGatewayUrl": "regionLLMGatewayUrl",
  "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
  "hlInstanceCurrentUsage": 4.965218492984954,
  "dailyViewerCnt": 6.84685269835264,
  "statusUpdatedAt": "statusUpdatedAt",
  "hlInstanceId": 9,
  "agentManagementInstanceUrl": "agentManagementInstanceUrl",
  "agentManagementInstanceName": "agentManagementInstanceName",
  "regionAssistantUrl": "regionAssistantUrl",
  "trial": 3.0205796992916243,
  "createdAt": "createdAt",
  "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
  "runningVersion": "runningVersion",
  "amInstanceId": 1,
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
  "hpInstanceStatus": "active",
  "slug": "slug",
  "updatedAt": "updatedAt",
  "htInstanceBillingUsage": 3.353193347011243,
  "agentManagementInstanceId": 7,
  "orgName": "orgName",
  "updatedBy": "updatedBy",
  "htInstanceName": "htInstanceName",
  "trialExpiresAt": "trialExpiresAt",
  "amInstanceUrl": "amInstanceUrl",
  "billingActiveUsers": 5.637376656633329,
  "billingGrafanaActiveUsers": 2.3021358869347655,
  "hmInstancePromStatus": "active",
  "regionInsightsApiUrl": "regionInsightsApiUrl",
  "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
  "customDomain": true,
  "dailyUserCnt": 1.4894159098541704,
  "amInstanceName": "amInstanceName",
  "dashboardQuota": 1.1730742509559433,
  "regionPublicName": "regionPublicName",
  "billingEndDate": "billingEndDate",
  "name": "name",
  "hlInstanceUrl": "hlInstanceUrl",
  "hlInstanceClusterId": 9,
  "support": true,
  "hpInstanceBillingUsage": 7.058770351582356,
  "description": "description",
  "clusterId": 9,
  "dailyEditorCnt": 1.0246457001441578,
  "alertQuota": 6.027456183070403,
  "machineLearning": 4.652396432933246,
  "currentActiveViewerUsers": 7.386281948385884,
  "hlInstanceName": "hlInstanceName",
  "hmInstanceGraphiteName": "hmInstanceGraphiteName",
  "hpInstanceName": "hpInstanceName",
  "provider": "provider",
  "hmInstancePromBillingUsage": 1.284659006116532,
  "currentActiveAdminUsers": 3.616076749251911,
  "regionAgentO11YUrl": "regionAgentO11YUrl",
  "htInstanceId": 6,
  "regionSlug": "regionSlug",
  "dashboardCnt": 7.457744773683766,
  "htInstanceStatus": "active",
  "agentManagementInstanceClusterId": 5,
  "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
  "hpInstanceCurrentUsage": 0.8851374739011653,
  "providerRegion": "providerRegion",
  "createdBy": "createdBy",
  "regionId": 7,
  "hpInstanceClusterId": 7,
  "amInstanceClusterId": 5,
  "hmInstancePromCurrentUsage": 6.965117697638846,
  "incident": 0.10263654006109402,
  "gateway": "gateway"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="gets-an-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiInstance](#schemaformattedapiinstance)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Updates an instance

<a id="opIdpostInstance"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "alerts": true,
    "deleteProtection": true,
    "description": "string",
    "graphite": true,
    "hlInstanceId": 0,
    "issueLink": "string",
    "k6OrgId": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "logs": true,
    "name": "string",
    "plan": "free",
    "prometheus": true,
    "reasonType": "bug",
    "slug": "string",
    "url": "string",
    "version": "string",
    "waitForReadiness": true
  }'
```

`POST /instances/{instanceId}`

> Body parameter

```json
{
  "alerts": true,
  "deleteProtection": true,
  "description": "string",
  "graphite": true,
  "hlInstanceId": 0,
  "issueLink": "string",
  "k6OrgId": 0,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logs": true,
  "name": "string",
  "plan": "free",
  "prometheus": true,
  "reasonType": "bug",
  "slug": "string",
  "url": "string",
  "version": "string",
  "waitForReadiness": true
}
```

<h3 id="updates-an-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|x-request-id|header|string|true|none|
|body|body|[postInstance_request](#schemapostinstance_request)|true|none|
|» alerts|body|boolean|false|none|
|» deleteProtection|body|boolean|false|none|
|» description|body|string|false|none|
|» graphite|body|boolean|false|none|
|» hlInstanceId|body|integer|false|none|
|» issueLink|body|string|false|none|
|» k6OrgId|body|integer \| null|false|none|
|» labels|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» logs|body|boolean|false|none|
|» name|body|string|false|none|
|» plan|body|string|false|none|
|» prometheus|body|boolean|false|none|
|» reasonType|body|string|false|none|
|» slug|body|string|false|none|
|» url|body|string|false|none|
|» version|body|string|false|none|
|» waitForReadiness|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» plan|free|
|» plan|free-trial|
|» plan|gcloud|
|» plan|enterprise|
|» plan|advanced|
|» plan|payg|
|» plan|fedramp|
|» plan|trial|
|» plan|logsdemo|
|» plan|starter|
|» plan|starter-prom|
|» plan|basic|
|» plan|basic-prom|
|» plan|bundled|
|» plan|fog|
|» reasonType|bug|
|» reasonType|securityVulnerability|
|» reasonType|customerUpgradeShy|
|» reasonType|customerBreaksUseCase|
|» reasonType|customerRequest|
|» reasonType|other|

> Example responses

> 200 Response

```json
{
  "hmInstancePromName": "hmInstancePromName",
  "hmInstanceGraphiteType": "hmInstanceGraphiteType",
  "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
  "regionSigilUrl": "regionSigilUrl",
  "versionIssueLink": "versionIssueLink",
  "deleteProtection": true,
  "customAuth": true,
  "planName": "planName",
  "hmInstanceGraphiteStatus": "active",
  "type": "grafana",
  "currentActiveEditorUsers": 2.027123023002322,
  "ssl": true,
  "userQuota": 3.0576100241049344,
  "id": 6,
  "stackType": "stackType",
  "plan": "advanced",
  "hlInstanceBillingUsage": 5.025004791520295,
  "agentManagementInstanceStatus": "active",
  "htInstanceClusterId": 5,
  "alertCnt": 0.8008281904610115,
  "datasourceCnts": "{}",
  "hmInstanceGraphiteBillingUsage": 8.762042012749001,
  "version": "version",
  "billingStartDate": "billingStartDate",
  "hmInstancePromClusterId": 6,
  "hlInstanceStatus": "active",
  "labels": "{}",
  "orgCreatedAt": "orgCreatedAt",
  "amInstanceStatus": "active",
  "clusterSlug": "clusterSlug",
  "htInstanceUrl": "htInstanceUrl",
  "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
  "hmInstancePromId": 2,
  "status": "active",
  "htInstanceCurrentUsage": 6.704019297950036,
  "orgId": 8,
  "hmInstanceGraphiteId": 9,
  "clusterName": "clusterName",
  "k6OrgId": 3,
  "currentActiveUsers": 4.145608029883936,
  "hpInstanceUrl": "hpInstanceUrl",
  "dailyAdminCnt": 1.2315135367772556,
  "url": "url",
  "billingOnCallActiveUsers": 7.061401241503109,
  "hmInstancePromUrl": "hmInstancePromUrl",
  "machineLearningLogsToken": "machineLearningLogsToken",
  "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
  "regionStackStateServiceUrl": "regionStackStateServiceUrl",
  "hmInstanceGraphiteClusterId": 6,
  "hpInstanceId": 3,
  "config": "{}",
  "usageStatsId": "usageStatsId",
  "orgSlug": "orgSlug",
  "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
  "regionLLMGatewayUrl": "regionLLMGatewayUrl",
  "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
  "hlInstanceCurrentUsage": 4.965218492984954,
  "dailyViewerCnt": 6.84685269835264,
  "statusUpdatedAt": "statusUpdatedAt",
  "hlInstanceId": 9,
  "agentManagementInstanceUrl": "agentManagementInstanceUrl",
  "agentManagementInstanceName": "agentManagementInstanceName",
  "regionAssistantUrl": "regionAssistantUrl",
  "trial": 3.0205796992916243,
  "createdAt": "createdAt",
  "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
  "runningVersion": "runningVersion",
  "amInstanceId": 1,
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
  "hpInstanceStatus": "active",
  "slug": "slug",
  "updatedAt": "updatedAt",
  "htInstanceBillingUsage": 3.353193347011243,
  "agentManagementInstanceId": 7,
  "orgName": "orgName",
  "updatedBy": "updatedBy",
  "htInstanceName": "htInstanceName",
  "trialExpiresAt": "trialExpiresAt",
  "amInstanceUrl": "amInstanceUrl",
  "billingActiveUsers": 5.637376656633329,
  "billingGrafanaActiveUsers": 2.3021358869347655,
  "hmInstancePromStatus": "active",
  "regionInsightsApiUrl": "regionInsightsApiUrl",
  "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
  "customDomain": true,
  "dailyUserCnt": 1.4894159098541704,
  "amInstanceName": "amInstanceName",
  "dashboardQuota": 1.1730742509559433,
  "regionPublicName": "regionPublicName",
  "billingEndDate": "billingEndDate",
  "name": "name",
  "hlInstanceUrl": "hlInstanceUrl",
  "hlInstanceClusterId": 9,
  "support": true,
  "hpInstanceBillingUsage": 7.058770351582356,
  "description": "description",
  "clusterId": 9,
  "dailyEditorCnt": 1.0246457001441578,
  "alertQuota": 6.027456183070403,
  "machineLearning": 4.652396432933246,
  "currentActiveViewerUsers": 7.386281948385884,
  "hlInstanceName": "hlInstanceName",
  "hmInstanceGraphiteName": "hmInstanceGraphiteName",
  "hpInstanceName": "hpInstanceName",
  "provider": "provider",
  "hmInstancePromBillingUsage": 1.284659006116532,
  "currentActiveAdminUsers": 3.616076749251911,
  "regionAgentO11YUrl": "regionAgentO11YUrl",
  "htInstanceId": 6,
  "regionSlug": "regionSlug",
  "dashboardCnt": 7.457744773683766,
  "htInstanceStatus": "active",
  "agentManagementInstanceClusterId": 5,
  "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
  "hpInstanceCurrentUsage": 0.8851374739011653,
  "providerRegion": "providerRegion",
  "createdBy": "createdBy",
  "regionId": 7,
  "hpInstanceClusterId": 7,
  "amInstanceClusterId": 5,
  "hmInstancePromCurrentUsage": 6.965117697638846,
  "incident": 0.10263654006109402,
  "gateway": "gateway"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="updates-an-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiInstance](#schemaformattedapiinstance)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Deletes an instance

<a id="opIddeleteInstance"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string'
```

`DELETE /instances/{instanceId}`

<h3 id="deletes-an-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|x-request-id|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "hmInstancePromName": "hmInstancePromName",
  "hmInstanceGraphiteType": "hmInstanceGraphiteType",
  "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
  "regionSigilUrl": "regionSigilUrl",
  "versionIssueLink": "versionIssueLink",
  "deleteProtection": true,
  "customAuth": true,
  "planName": "planName",
  "hmInstanceGraphiteStatus": "active",
  "type": "grafana",
  "currentActiveEditorUsers": 2.027123023002322,
  "ssl": true,
  "userQuota": 3.0576100241049344,
  "id": 6,
  "stackType": "stackType",
  "plan": "advanced",
  "hlInstanceBillingUsage": 5.025004791520295,
  "agentManagementInstanceStatus": "active",
  "htInstanceClusterId": 5,
  "alertCnt": 0.8008281904610115,
  "datasourceCnts": "{}",
  "hmInstanceGraphiteBillingUsage": 8.762042012749001,
  "version": "version",
  "billingStartDate": "billingStartDate",
  "hmInstancePromClusterId": 6,
  "hlInstanceStatus": "active",
  "labels": "{}",
  "orgCreatedAt": "orgCreatedAt",
  "amInstanceStatus": "active",
  "clusterSlug": "clusterSlug",
  "htInstanceUrl": "htInstanceUrl",
  "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
  "hmInstancePromId": 2,
  "status": "active",
  "htInstanceCurrentUsage": 6.704019297950036,
  "orgId": 8,
  "hmInstanceGraphiteId": 9,
  "clusterName": "clusterName",
  "k6OrgId": 3,
  "currentActiveUsers": 4.145608029883936,
  "hpInstanceUrl": "hpInstanceUrl",
  "dailyAdminCnt": 1.2315135367772556,
  "url": "url",
  "billingOnCallActiveUsers": 7.061401241503109,
  "hmInstancePromUrl": "hmInstancePromUrl",
  "machineLearningLogsToken": "machineLearningLogsToken",
  "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
  "regionStackStateServiceUrl": "regionStackStateServiceUrl",
  "hmInstanceGraphiteClusterId": 6,
  "hpInstanceId": 3,
  "config": "{}",
  "usageStatsId": "usageStatsId",
  "orgSlug": "orgSlug",
  "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
  "regionLLMGatewayUrl": "regionLLMGatewayUrl",
  "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
  "hlInstanceCurrentUsage": 4.965218492984954,
  "dailyViewerCnt": 6.84685269835264,
  "statusUpdatedAt": "statusUpdatedAt",
  "hlInstanceId": 9,
  "agentManagementInstanceUrl": "agentManagementInstanceUrl",
  "agentManagementInstanceName": "agentManagementInstanceName",
  "regionAssistantUrl": "regionAssistantUrl",
  "trial": 3.0205796992916243,
  "createdAt": "createdAt",
  "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
  "runningVersion": "runningVersion",
  "amInstanceId": 1,
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
  "hpInstanceStatus": "active",
  "slug": "slug",
  "updatedAt": "updatedAt",
  "htInstanceBillingUsage": 3.353193347011243,
  "agentManagementInstanceId": 7,
  "orgName": "orgName",
  "updatedBy": "updatedBy",
  "htInstanceName": "htInstanceName",
  "trialExpiresAt": "trialExpiresAt",
  "amInstanceUrl": "amInstanceUrl",
  "billingActiveUsers": 5.637376656633329,
  "billingGrafanaActiveUsers": 2.3021358869347655,
  "hmInstancePromStatus": "active",
  "regionInsightsApiUrl": "regionInsightsApiUrl",
  "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
  "customDomain": true,
  "dailyUserCnt": 1.4894159098541704,
  "amInstanceName": "amInstanceName",
  "dashboardQuota": 1.1730742509559433,
  "regionPublicName": "regionPublicName",
  "billingEndDate": "billingEndDate",
  "name": "name",
  "hlInstanceUrl": "hlInstanceUrl",
  "hlInstanceClusterId": 9,
  "support": true,
  "hpInstanceBillingUsage": 7.058770351582356,
  "description": "description",
  "clusterId": 9,
  "dailyEditorCnt": 1.0246457001441578,
  "alertQuota": 6.027456183070403,
  "machineLearning": 4.652396432933246,
  "currentActiveViewerUsers": 7.386281948385884,
  "hlInstanceName": "hlInstanceName",
  "hmInstanceGraphiteName": "hmInstanceGraphiteName",
  "hpInstanceName": "hpInstanceName",
  "provider": "provider",
  "hmInstancePromBillingUsage": 1.284659006116532,
  "currentActiveAdminUsers": 3.616076749251911,
  "regionAgentO11YUrl": "regionAgentO11YUrl",
  "htInstanceId": 6,
  "regionSlug": "regionSlug",
  "dashboardCnt": 7.457744773683766,
  "htInstanceStatus": "active",
  "agentManagementInstanceClusterId": 5,
  "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
  "hpInstanceCurrentUsage": 0.8851374739011653,
  "providerRegion": "providerRegion",
  "createdBy": "createdBy",
  "regionId": 7,
  "hpInstanceClusterId": 7,
  "amInstanceClusterId": 5,
  "hmInstancePromCurrentUsage": 6.965117697638846,
  "incident": 0.10263654006109402,
  "gateway": "gateway"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="deletes-an-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiInstance](#schemaformattedapiinstance)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Creates a service account on a Grafana instance

<a id="opIdpostInstanceServiceAccounts"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/api/serviceaccounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "isDisabled": true,
    "name": "string",
    "role": "string"
  }'
```

`POST /instances/{instanceId}/api/serviceaccounts`

> Body parameter

```json
{
  "isDisabled": true,
  "name": "string",
  "role": "string"
}
```

<h3 id="creates-a-service-account-on-a-grafana-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|x-request-id|header|string|true|none|
|body|body|[postInstanceServiceAccounts_request](#schemapostinstanceserviceaccounts_request)|true|none|
|» isDisabled|body|boolean|false|none|
|» name|body|string|true|none|
|» role|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "accessControl": {
    "serviceaccounts:delete": true,
    "serviceaccounts:read": true,
    "serviceaccounts:write": true
  },
  "role": "Viewer",
  "isExternal": false,
  "avatarUrl": "/avatar/85ec38023d90823d3e5b43ef35646af9",
  "name": "grafana",
  "tokens": 0,
  "id": 0,
  "isDisabled": false,
  "login": "sa-grafana",
  "orgId": 1
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="creates-a-service-account-on-a-grafana-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GrafanaServiceAccountDTO](#schemagrafanaserviceaccountdto)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Search service accounts on a Grafana instance with paging

<a id="opIdgetInstanceServiceAccountsSearch"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/api/serviceaccounts/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /instances/{instanceId}/api/serviceaccounts/search`

<h3 id="search-service-accounts-on-a-grafana-instance-with-paging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|page|query|integer|false|none|
|perpage|query|integer|false|none|
|query|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "serviceAccounts": [
    {
      "name": "name",
      "id": 6
    },
    {
      "name": "name",
      "id": 6
    }
  ],
  "perPage": 5.962133916683182,
  "page": 1.4658129805029452,
  "totalCount": 0.8008281904610115
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="search-service-accounts-on-a-grafana-instance-with-paging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ServiceAccountSearchResponse](#schemaserviceaccountsearchresponse)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Gets a service account on a Grafana instance

<a id="opIdgetInstanceServiceAccount"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/api/serviceaccounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /instances/{instanceId}/api/serviceaccounts/{serviceAccountId}`

<h3 id="gets-a-service-account-on-a-grafana-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|serviceAccountId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "accessControl": {
    "serviceaccounts:delete": true,
    "serviceaccounts:read": true,
    "serviceaccounts:write": true
  },
  "role": "Viewer",
  "isExternal": false,
  "avatarUrl": "/avatar/85ec38023d90823d3e5b43ef35646af9",
  "name": "grafana",
  "tokens": 0,
  "id": 0,
  "isDisabled": false,
  "login": "sa-grafana",
  "orgId": 1
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="gets-a-service-account-on-a-grafana-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GrafanaServiceAccountDTO](#schemagrafanaserviceaccountdto)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete a service account on a Grafana instance

<a id="opIddeleteInstanceServiceAccount"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/api/serviceaccounts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string'
```

`DELETE /instances/{instanceId}/api/serviceaccounts/{serviceAccountId}`

<h3 id="delete-a-service-account-on-a-grafana-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|serviceAccountId|path|string|true|none|
|x-request-id|header|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="delete-a-service-account-on-a-grafana-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a service account's tokens on a Grafana instance

<a id="opIdgetInstanceServiceAccountTokens"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/api/serviceaccounts/string/tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /instances/{instanceId}/api/serviceaccounts/{serviceAccountId}/tokens`

<h3 id="get-a-service-accounts-tokens-on-a-grafana-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|serviceAccountId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "isRevoked": false,
    "hasExpired": false,
    "lastUsedAt": "2022-03-23T10:31:02Z",
    "created": "2022-03-23T10:31:02Z",
    "name": "grafana",
    "secondsUntilExpiration": 0,
    "expiration": "2022-03-23T10:31:02Z",
    "id": 1
  }
]
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="get-a-service-accounts-tokens-on-a-grafana-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<h3 id="get-a-service-accounts-tokens-on-a-grafana-instance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GrafanaTokenDTO](#schemagrafanatokendto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Creates a service account token on a Grafana instance

<a id="opIdpostInstanceServiceAccountTokens"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/api/serviceaccounts/string/tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "name": "string",
    "secondsToLive": 0
  }'
```

`POST /instances/{instanceId}/api/serviceaccounts/{serviceAccountId}/tokens`

> Body parameter

```json
{
  "name": "string",
  "secondsToLive": 0
}
```

<h3 id="creates-a-service-account-token-on-a-grafana-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|serviceAccountId|path|string|true|none|
|x-request-id|header|string|true|none|
|body|body|[postInstanceServiceAccountTokens_request](#schemapostinstanceserviceaccounttokens_request)|true|none|
|» name|body|string|true|none|
|» secondsToLive|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "name": "grafana",
  "id": 1,
  "key": "glsa_yscW25imSKJIuav8zF37RZmnbiDvB05G_fcaaf58a"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="creates-a-service-account-token-on-a-grafana-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GrafanaNewApiKeyResult](#schemagrafananewapikeyresult)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete a service account token on a Grafana instance

<a id="opIddeleteInstanceServiceAccountToken"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/api/serviceaccounts/string/tokens/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string'
```

`DELETE /instances/{instanceId}/api/serviceaccounts/{serviceAccountId}/tokens/{tokenId}`

<h3 id="delete-a-service-account-token-on-a-grafana-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|serviceAccountId|path|string|true|none|
|tokenId|path|string|true|none|
|x-request-id|header|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="delete-a-service-account-token-on-a-grafana-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## getInstancePlugins

<a id="opIdgetInstancePlugins"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/plugins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /instances/{instanceId}/plugins`

<h3 id="getinstanceplugins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|direction|query|string|false|none|
|orderBy|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|
|orderBy|instanceId|
|orderBy|pluginId|
|orderBy|pluginSlug|
|orderBy|pluginName|

> Example responses

> 200 Response

```json
{
  "total": 5.962133916683182,
  "pages": 5.637376656633329,
  "orderBy": "orderBy",
  "pageSize": 2.3021358869347655,
  "page": 7.061401241503109,
  "items": [
    {
      "createdAt": "createdAt",
      "instanceId": 6.027456183070403,
      "pluginSlug": "pluginSlug",
      "pluginName": "pluginName",
      "latestVersion": "latestVersion",
      "pluginId": 1.4658129805029452,
      "instanceSlug": "instanceSlug",
      "links": [
        {
          "rel": "self",
          "href": "href"
        },
        {
          "rel": "self",
          "href": "href"
        }
      ],
      "id": 0.8008281904610115,
      "version": "version",
      "instanceUrl": "instanceUrl",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    },
    {
      "createdAt": "createdAt",
      "instanceId": 6.027456183070403,
      "pluginSlug": "pluginSlug",
      "pluginName": "pluginName",
      "latestVersion": "latestVersion",
      "pluginId": 1.4658129805029452,
      "instanceSlug": "instanceSlug",
      "links": [
        {
          "rel": "self",
          "href": "href"
        },
        {
          "rel": "self",
          "href": "href"
        }
      ],
      "id": 0.8008281904610115,
      "version": "version",
      "instanceUrl": "instanceUrl",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    }
  ],
  "direction": "asc"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="getinstanceplugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[getInstancePlugins_200_response](#schemagetinstanceplugins_200_response)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## postInstancePlugins

<a id="opIdpostInstancePlugins"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/plugins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "noRestart": true,
    "plugin": "string",
    "version": "string"
  }'
```

`POST /instances/{instanceId}/plugins`

> Body parameter

```json
{
  "noRestart": true,
  "plugin": "string",
  "version": "string"
}
```

<h3 id="postinstanceplugins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|x-request-id|header|string|true|none|
|body|body|[postInstancePlugins_request](#schemapostinstanceplugins_request)|true|none|
|» noRestart|body|boolean|false|none|
|» plugin|body|string|true|none|
|» version|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "createdAt",
  "instanceId": 6.027456183070403,
  "pluginSlug": "pluginSlug",
  "pluginName": "pluginName",
  "latestVersion": "latestVersion",
  "pluginId": 1.4658129805029452,
  "instanceSlug": "instanceSlug",
  "links": [
    {
      "rel": "self",
      "href": "href"
    },
    {
      "rel": "self",
      "href": "href"
    }
  ],
  "id": 0.8008281904610115,
  "version": "version",
  "instanceUrl": "instanceUrl",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="postinstanceplugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiInstancePlugin](#schemaformattedapiinstanceplugin)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## getInstancePlugin

<a id="opIdgetInstancePlugin"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/plugins/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /instances/{instanceId}/plugins/{pluginSlugOrId}`

<h3 id="getinstanceplugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|pluginSlugOrId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "createdAt",
  "instanceId": 6.027456183070403,
  "pluginSlug": "pluginSlug",
  "pluginName": "pluginName",
  "latestVersion": "latestVersion",
  "pluginId": 1.4658129805029452,
  "instanceSlug": "instanceSlug",
  "links": [
    {
      "rel": "self",
      "href": "href"
    },
    {
      "rel": "self",
      "href": "href"
    }
  ],
  "id": 0.8008281904610115,
  "version": "version",
  "instanceUrl": "instanceUrl",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="getinstanceplugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiInstancePlugin](#schemaformattedapiinstanceplugin)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## postInstancePlugin

<a id="opIdpostInstancePlugin"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/plugins/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "noRestart": true,
    "version": "string"
  }'
```

`POST /instances/{instanceId}/plugins/{pluginSlugOrId}`

> Body parameter

```json
{
  "noRestart": true,
  "version": "string"
}
```

<h3 id="postinstanceplugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|pluginSlugOrId|path|string|true|none|
|x-request-id|header|string|true|none|
|body|body|[postInstancePlugin_request](#schemapostinstanceplugin_request)|true|none|
|» noRestart|body|boolean|false|none|
|» version|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "createdAt",
  "instanceId": 6.027456183070403,
  "pluginSlug": "pluginSlug",
  "pluginName": "pluginName",
  "latestVersion": "latestVersion",
  "pluginId": 1.4658129805029452,
  "instanceSlug": "instanceSlug",
  "links": [
    {
      "rel": "self",
      "href": "href"
    },
    {
      "rel": "self",
      "href": "href"
    }
  ],
  "id": 0.8008281904610115,
  "version": "version",
  "instanceUrl": "instanceUrl",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="postinstanceplugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiInstancePlugin](#schemaformattedapiinstanceplugin)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## deleteInstancePlugin

<a id="opIddeleteInstancePlugin"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/plugins/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string'
```

`DELETE /instances/{instanceId}/plugins/{pluginSlugOrId}`

<h3 id="deleteinstanceplugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|pluginSlugOrId|path|string|true|none|
|noRestart|query|boolean|false|none|
|x-request-id|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "createdAt",
  "instanceId": 6.027456183070403,
  "pluginSlug": "pluginSlug",
  "pluginName": "pluginName",
  "latestVersion": "latestVersion",
  "pluginId": 1.4658129805029452,
  "instanceSlug": "instanceSlug",
  "links": [
    {
      "rel": "self",
      "href": "href"
    },
    {
      "rel": "self",
      "href": "href"
    }
  ],
  "id": 0.8008281904610115,
  "version": "version",
  "instanceUrl": "instanceUrl",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="deleteinstanceplugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiInstancePlugin](#schemaformattedapiinstanceplugin)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Gets an instance's readiness status

<a id="opIdgetInstanceReadiness"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/readiness \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /instances/{instanceId}/readiness`

<h3 id="gets-an-instances-readiness-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ready": true
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="gets-an-instances-readiness-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiInstanceReadiness](#schemaformattedapiinstancereadiness)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Gets instance active users

<a id="opIdgetInstanceUsers"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /instances/{instanceId}/users`

<h3 id="gets-instance-active-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|id or slug of the instance|
|active|query|string|false|only return users seen in the last month, ignored when activeSince is set|
|activeSince|query|string|false|only return users seen since this timestamp|
|includeInternal|query|string|false|include Grafana Labs internal users|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "lastSeenAt": "lastSeenAt",
      "createdAt": "createdAt",
      "role": "role",
      "name": "name",
      "id": 0,
      "login": "login",
      "email": "email",
      "isServiceAccount": true,
      "updatedAt": "updatedAt"
    },
    {
      "lastSeenAt": "lastSeenAt",
      "createdAt": "createdAt",
      "role": "role",
      "name": "name",
      "id": 0,
      "login": "login",
      "email": "email",
      "isServiceAccount": true,
      "updatedAt": "updatedAt"
    }
  ]
}
```

> default Response

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

<h3 id="gets-instance-active-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InstanceUsersResponse](#schemainstanceusersresponse)|
|default|Default|Error|[ErrorPayload](#schemaerrorpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="gcom-api-org-stack-regions">org-stack-regions</h1>

## getOrgStackRegions

<a id="opIdgetOrgStackRegions"></a>

> Code samples

```bash
curl https://grafana.com/api/org-stack-regions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org-stack-regions`

<h3 id="getorgstackregions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|query|integer|false|none|
|regionSlugOrId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 5.962133916683182,
  "pages": 5.637376656633329,
  "orderBy": "orderBy",
  "pageSize": 2.3021358869347655,
  "page": 7.061401241503109,
  "items": [
    {
      "createdAt": "createdAt",
      "id": 0.8008281904610115,
      "orgId": 1.4658129805029452,
      "stackRegionId": 6.027456183070403,
      "updatedAt": "updatedAt"
    },
    {
      "createdAt": "createdAt",
      "id": 0.8008281904610115,
      "orgId": 1.4658129805029452,
      "stackRegionId": 6.027456183070403,
      "updatedAt": "updatedAt"
    }
  ],
  "direction": "asc"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="getorgstackregions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[getOrgStackRegions_200_response](#schemagetorgstackregions_200_response)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="gcom-api-orgs">orgs</h1>

## Retrieve an org's billed usage for a specific month

<a id="opIdgetOrgBilledUsage"></a>

> Code samples

```bash
curl 'https://grafana.com/api/orgs/string/billed-usage?month=0&year=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orgs/{orgSlugOrId}/billed-usage`

<h3 id="retrieve-an-orgs-billed-usage-for-a-specific-month-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgSlugOrId|path|string|true|none|
|month|query|integer|true|none|
|year|query|integer|true|none|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|csv|

> Example responses

> 200 Response

```json
{
  "total": 6.683562403749608,
  "pages": 8.762042012749001,
  "orderBy": "orderBy",
  "pageSize": 9.018348186070783,
  "page": 6.438423552598547,
  "items": [
    {
      "notes": "notes",
      "description": "description",
      "dimensionName": "dimensionName",
      "amountDue": 1.4658129805029452,
      "orgRates": "",
      "unit": "unit",
      "dimensionId": "agent-generations",
      "totalUsage": 5.637376656633329,
      "id": 0.8008281904610115,
      "usages": [
        {
          "dpm": 1.2315135367772556,
          "ingestUsage": 7.457744773683766,
          "onCallUsage": 1.1730742509559433,
          "stackId": 9.965781217890562,
          "stackName": "stackName",
          "activeUsers": 7.061401241503109,
          "protocolUsage": 4.965218492984954,
          "anonymousUsers": 9.301444243932576,
          "attributedUsage": 2.027123023002322,
          "grafanaUsage": 1.0246457001441578,
          "browserUsage": 4.145608029883936,
          "stackLabels": "{}",
          "attributedCost": 3.616076749251911,
          "credits": [
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            },
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            }
          ],
          "queryUsage": 5.025004791520295,
          "incidentUsage": 6.84685269835264,
          "totalUsage": 9.369310271410669,
          "id": 1.4894159098541704,
          "activeSeries": 2.3021358869347655,
          "periodStart": "periodStart",
          "isProrated": true,
          "periodEnd": "periodEnd"
        },
        {
          "dpm": 1.2315135367772556,
          "ingestUsage": 7.457744773683766,
          "onCallUsage": 1.1730742509559433,
          "stackId": 9.965781217890562,
          "stackName": "stackName",
          "activeUsers": 7.061401241503109,
          "protocolUsage": 4.965218492984954,
          "anonymousUsers": 9.301444243932576,
          "attributedUsage": 2.027123023002322,
          "grafanaUsage": 1.0246457001441578,
          "browserUsage": 4.145608029883936,
          "stackLabels": "{}",
          "attributedCost": 3.616076749251911,
          "credits": [
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            },
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            }
          ],
          "queryUsage": 5.025004791520295,
          "incidentUsage": 6.84685269835264,
          "totalUsage": 9.369310271410669,
          "id": 1.4894159098541704,
          "activeSeries": 2.3021358869347655,
          "periodStart": "periodStart",
          "isProrated": true,
          "periodEnd": "periodEnd"
        }
      ],
      "includedUsage": 5.962133916683182,
      "periodStart": "periodStart",
      "overage": 6.027456183070403,
      "periodEnd": "periodEnd"
    },
    {
      "notes": "notes",
      "description": "description",
      "dimensionName": "dimensionName",
      "amountDue": 1.4658129805029452,
      "orgRates": "",
      "unit": "unit",
      "dimensionId": "agent-generations",
      "totalUsage": 5.637376656633329,
      "id": 0.8008281904610115,
      "usages": [
        {
          "dpm": 1.2315135367772556,
          "ingestUsage": 7.457744773683766,
          "onCallUsage": 1.1730742509559433,
          "stackId": 9.965781217890562,
          "stackName": "stackName",
          "activeUsers": 7.061401241503109,
          "protocolUsage": 4.965218492984954,
          "anonymousUsers": 9.301444243932576,
          "attributedUsage": 2.027123023002322,
          "grafanaUsage": 1.0246457001441578,
          "browserUsage": 4.145608029883936,
          "stackLabels": "{}",
          "attributedCost": 3.616076749251911,
          "credits": [
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            },
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            }
          ],
          "queryUsage": 5.025004791520295,
          "incidentUsage": 6.84685269835264,
          "totalUsage": 9.369310271410669,
          "id": 1.4894159098541704,
          "activeSeries": 2.3021358869347655,
          "periodStart": "periodStart",
          "isProrated": true,
          "periodEnd": "periodEnd"
        },
        {
          "dpm": 1.2315135367772556,
          "ingestUsage": 7.457744773683766,
          "onCallUsage": 1.1730742509559433,
          "stackId": 9.965781217890562,
          "stackName": "stackName",
          "activeUsers": 7.061401241503109,
          "protocolUsage": 4.965218492984954,
          "anonymousUsers": 9.301444243932576,
          "attributedUsage": 2.027123023002322,
          "grafanaUsage": 1.0246457001441578,
          "browserUsage": 4.145608029883936,
          "stackLabels": "{}",
          "attributedCost": 3.616076749251911,
          "credits": [
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            },
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            }
          ],
          "queryUsage": 5.025004791520295,
          "incidentUsage": 6.84685269835264,
          "totalUsage": 9.369310271410669,
          "id": 1.4894159098541704,
          "activeSeries": 2.3021358869347655,
          "periodStart": "periodStart",
          "isProrated": true,
          "periodEnd": "periodEnd"
        }
      ],
      "includedUsage": 5.962133916683182,
      "periodStart": "periodStart",
      "overage": 6.027456183070403,
      "periodEnd": "periodEnd"
    }
  ],
  "direction": "asc"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="retrieve-an-orgs-billed-usage-for-a-specific-month-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[getOrgBilledUsage_200_response](#schemagetorgbilledusage_200_response)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Retrieve an org's billed usage items for the last 12 months

<a id="opIdgetOrgBilledUsageHistory"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string/billed-usage-history \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orgs/{orgSlugOrId}/billed-usage-history`

<h3 id="retrieve-an-orgs-billed-usage-items-for-the-last-12-months-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgSlugOrId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "$schema": "$schema",
  "items": [
    {
      "month": 0.8008281904610115,
      "year": 6.027456183070403
    },
    {
      "month": 0.8008281904610115,
      "year": 6.027456183070403
    }
  ]
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="retrieve-an-orgs-billed-usage-items-for-the-last-12-months-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrgBilledUsageHistory](#schemaorgbilledusagehistory)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get the list of instances belonging to the org

<a id="opIdgetOrgInstances"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orgs/{orgSlug}/instances`

<h3 id="get-the-list-of-instances-belonging-to-the-org-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgSlug|path|string|true|none|
|cluster|query|string|false|none|
|direction|query|string|false|none|
|id|query|integer|false|none|
|idIn|query|[integer]|false|none|
|name|query|string|false|none|
|nameIn|query|[string]|false|none|
|orderBy|query|string|false|none|
|plan|query|string|false|none|
|planIn|query|[string]|false|none|
|planNot|query|string|false|none|
|slug|query|string|false|none|
|slugIn|query|[string]|false|none|
|url|query|string|false|none|
|urlIn|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|
|orderBy|id|
|orderBy|name|
|orderBy|version|
|orderBy|createdAt|
|orderBy|runningVersion|
|orderBy|billingActiveUsers|
|orderBy|billingGrafanaActiveUsers|
|orderBy|billingOnCallActiveUsers|
|orderBy|currentActiveUsers|
|orderBy|currentActiveAdminUsers|
|orderBy|currentActiveEditorUsers|
|orderBy|currentActiveViewerUsers|
|plan|free|
|plan|free-trial|
|plan|gcloud|
|plan|enterprise|
|plan|advanced|
|plan|payg|
|plan|fedramp|
|plan|trial|
|plan|logsdemo|
|plan|starter|
|plan|starter-prom|
|plan|basic|
|plan|basic-prom|
|plan|bundled|
|plan|fog|
|planIn|free|
|planIn|free-trial|
|planIn|gcloud|
|planIn|enterprise|
|planIn|advanced|
|planIn|payg|
|planIn|fedramp|
|planIn|trial|
|planIn|logsdemo|
|planIn|starter|
|planIn|starter-prom|
|planIn|basic|
|planIn|basic-prom|
|planIn|bundled|
|planIn|fog|

> Example responses

> 200 Response

```json
{
  "total": 4.078845849666752,
  "pages": 0.2025324113236393,
  "orderBy": "orderBy",
  "pageSize": 6.628464275087742,
  "page": 4.258773108174356,
  "items": [
    {
      "hmInstancePromName": "hmInstancePromName",
      "hmInstanceGraphiteType": "hmInstanceGraphiteType",
      "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
      "regionSigilUrl": "regionSigilUrl",
      "versionIssueLink": "versionIssueLink",
      "deleteProtection": true,
      "customAuth": true,
      "planName": "planName",
      "hmInstanceGraphiteStatus": "active",
      "type": "grafana",
      "currentActiveEditorUsers": 2.027123023002322,
      "ssl": true,
      "userQuota": 3.0576100241049344,
      "id": 6,
      "stackType": "stackType",
      "plan": "advanced",
      "hlInstanceBillingUsage": 5.025004791520295,
      "agentManagementInstanceStatus": "active",
      "htInstanceClusterId": 5,
      "alertCnt": 0.8008281904610115,
      "datasourceCnts": "{}",
      "hmInstanceGraphiteBillingUsage": 8.762042012749001,
      "version": "version",
      "billingStartDate": "billingStartDate",
      "hmInstancePromClusterId": 6,
      "hlInstanceStatus": "active",
      "labels": "{}",
      "orgCreatedAt": "orgCreatedAt",
      "amInstanceStatus": "active",
      "clusterSlug": "clusterSlug",
      "htInstanceUrl": "htInstanceUrl",
      "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
      "hmInstancePromId": 2,
      "status": "active",
      "htInstanceCurrentUsage": 6.704019297950036,
      "orgId": 8,
      "hmInstanceGraphiteId": 9,
      "clusterName": "clusterName",
      "k6OrgId": 3,
      "currentActiveUsers": 4.145608029883936,
      "hpInstanceUrl": "hpInstanceUrl",
      "dailyAdminCnt": 1.2315135367772556,
      "url": "url",
      "billingOnCallActiveUsers": 7.061401241503109,
      "hmInstancePromUrl": "hmInstancePromUrl",
      "machineLearningLogsToken": "machineLearningLogsToken",
      "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
      "regionStackStateServiceUrl": "regionStackStateServiceUrl",
      "hmInstanceGraphiteClusterId": 6,
      "hpInstanceId": 3,
      "config": "{}",
      "usageStatsId": "usageStatsId",
      "orgSlug": "orgSlug",
      "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
      "regionLLMGatewayUrl": "regionLLMGatewayUrl",
      "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
      "hlInstanceCurrentUsage": 4.965218492984954,
      "dailyViewerCnt": 6.84685269835264,
      "statusUpdatedAt": "statusUpdatedAt",
      "hlInstanceId": 9,
      "agentManagementInstanceUrl": "agentManagementInstanceUrl",
      "agentManagementInstanceName": "agentManagementInstanceName",
      "regionAssistantUrl": "regionAssistantUrl",
      "trial": 3.0205796992916243,
      "createdAt": "createdAt",
      "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
      "runningVersion": "runningVersion",
      "amInstanceId": 1,
      "links": [
        {
          "rel": "rel",
          "href": "href"
        },
        {
          "rel": "rel",
          "href": "href"
        }
      ],
      "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
      "hpInstanceStatus": "active",
      "slug": "slug",
      "updatedAt": "updatedAt",
      "htInstanceBillingUsage": 3.353193347011243,
      "agentManagementInstanceId": 7,
      "orgName": "orgName",
      "updatedBy": "updatedBy",
      "htInstanceName": "htInstanceName",
      "trialExpiresAt": "trialExpiresAt",
      "amInstanceUrl": "amInstanceUrl",
      "billingActiveUsers": 5.637376656633329,
      "billingGrafanaActiveUsers": 2.3021358869347655,
      "hmInstancePromStatus": "active",
      "regionInsightsApiUrl": "regionInsightsApiUrl",
      "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
      "customDomain": true,
      "dailyUserCnt": 1.4894159098541704,
      "amInstanceName": "amInstanceName",
      "dashboardQuota": 1.1730742509559433,
      "regionPublicName": "regionPublicName",
      "billingEndDate": "billingEndDate",
      "name": "name",
      "hlInstanceUrl": "hlInstanceUrl",
      "hlInstanceClusterId": 9,
      "support": true,
      "hpInstanceBillingUsage": 7.058770351582356,
      "description": "description",
      "clusterId": 9,
      "dailyEditorCnt": 1.0246457001441578,
      "alertQuota": 6.027456183070403,
      "machineLearning": 4.652396432933246,
      "currentActiveViewerUsers": 7.386281948385884,
      "hlInstanceName": "hlInstanceName",
      "hmInstanceGraphiteName": "hmInstanceGraphiteName",
      "hpInstanceName": "hpInstanceName",
      "provider": "provider",
      "hmInstancePromBillingUsage": 1.284659006116532,
      "currentActiveAdminUsers": 3.616076749251911,
      "regionAgentO11YUrl": "regionAgentO11YUrl",
      "htInstanceId": 6,
      "regionSlug": "regionSlug",
      "dashboardCnt": 7.457744773683766,
      "htInstanceStatus": "active",
      "agentManagementInstanceClusterId": 5,
      "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
      "hpInstanceCurrentUsage": 0.8851374739011653,
      "providerRegion": "providerRegion",
      "createdBy": "createdBy",
      "regionId": 7,
      "hpInstanceClusterId": 7,
      "amInstanceClusterId": 5,
      "hmInstancePromCurrentUsage": 6.965117697638846,
      "incident": 0.10263654006109402,
      "gateway": "gateway"
    },
    {
      "hmInstancePromName": "hmInstancePromName",
      "hmInstanceGraphiteType": "hmInstanceGraphiteType",
      "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
      "regionSigilUrl": "regionSigilUrl",
      "versionIssueLink": "versionIssueLink",
      "deleteProtection": true,
      "customAuth": true,
      "planName": "planName",
      "hmInstanceGraphiteStatus": "active",
      "type": "grafana",
      "currentActiveEditorUsers": 2.027123023002322,
      "ssl": true,
      "userQuota": 3.0576100241049344,
      "id": 6,
      "stackType": "stackType",
      "plan": "advanced",
      "hlInstanceBillingUsage": 5.025004791520295,
      "agentManagementInstanceStatus": "active",
      "htInstanceClusterId": 5,
      "alertCnt": 0.8008281904610115,
      "datasourceCnts": "{}",
      "hmInstanceGraphiteBillingUsage": 8.762042012749001,
      "version": "version",
      "billingStartDate": "billingStartDate",
      "hmInstancePromClusterId": 6,
      "hlInstanceStatus": "active",
      "labels": "{}",
      "orgCreatedAt": "orgCreatedAt",
      "amInstanceStatus": "active",
      "clusterSlug": "clusterSlug",
      "htInstanceUrl": "htInstanceUrl",
      "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
      "hmInstancePromId": 2,
      "status": "active",
      "htInstanceCurrentUsage": 6.704019297950036,
      "orgId": 8,
      "hmInstanceGraphiteId": 9,
      "clusterName": "clusterName",
      "k6OrgId": 3,
      "currentActiveUsers": 4.145608029883936,
      "hpInstanceUrl": "hpInstanceUrl",
      "dailyAdminCnt": 1.2315135367772556,
      "url": "url",
      "billingOnCallActiveUsers": 7.061401241503109,
      "hmInstancePromUrl": "hmInstancePromUrl",
      "machineLearningLogsToken": "machineLearningLogsToken",
      "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
      "regionStackStateServiceUrl": "regionStackStateServiceUrl",
      "hmInstanceGraphiteClusterId": 6,
      "hpInstanceId": 3,
      "config": "{}",
      "usageStatsId": "usageStatsId",
      "orgSlug": "orgSlug",
      "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
      "regionLLMGatewayUrl": "regionLLMGatewayUrl",
      "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
      "hlInstanceCurrentUsage": 4.965218492984954,
      "dailyViewerCnt": 6.84685269835264,
      "statusUpdatedAt": "statusUpdatedAt",
      "hlInstanceId": 9,
      "agentManagementInstanceUrl": "agentManagementInstanceUrl",
      "agentManagementInstanceName": "agentManagementInstanceName",
      "regionAssistantUrl": "regionAssistantUrl",
      "trial": 3.0205796992916243,
      "createdAt": "createdAt",
      "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
      "runningVersion": "runningVersion",
      "amInstanceId": 1,
      "links": [
        {
          "rel": "rel",
          "href": "href"
        },
        {
          "rel": "rel",
          "href": "href"
        }
      ],
      "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
      "hpInstanceStatus": "active",
      "slug": "slug",
      "updatedAt": "updatedAt",
      "htInstanceBillingUsage": 3.353193347011243,
      "agentManagementInstanceId": 7,
      "orgName": "orgName",
      "updatedBy": "updatedBy",
      "htInstanceName": "htInstanceName",
      "trialExpiresAt": "trialExpiresAt",
      "amInstanceUrl": "amInstanceUrl",
      "billingActiveUsers": 5.637376656633329,
      "billingGrafanaActiveUsers": 2.3021358869347655,
      "hmInstancePromStatus": "active",
      "regionInsightsApiUrl": "regionInsightsApiUrl",
      "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
      "customDomain": true,
      "dailyUserCnt": 1.4894159098541704,
      "amInstanceName": "amInstanceName",
      "dashboardQuota": 1.1730742509559433,
      "regionPublicName": "regionPublicName",
      "billingEndDate": "billingEndDate",
      "name": "name",
      "hlInstanceUrl": "hlInstanceUrl",
      "hlInstanceClusterId": 9,
      "support": true,
      "hpInstanceBillingUsage": 7.058770351582356,
      "description": "description",
      "clusterId": 9,
      "dailyEditorCnt": 1.0246457001441578,
      "alertQuota": 6.027456183070403,
      "machineLearning": 4.652396432933246,
      "currentActiveViewerUsers": 7.386281948385884,
      "hlInstanceName": "hlInstanceName",
      "hmInstanceGraphiteName": "hmInstanceGraphiteName",
      "hpInstanceName": "hpInstanceName",
      "provider": "provider",
      "hmInstancePromBillingUsage": 1.284659006116532,
      "currentActiveAdminUsers": 3.616076749251911,
      "regionAgentO11YUrl": "regionAgentO11YUrl",
      "htInstanceId": 6,
      "regionSlug": "regionSlug",
      "dashboardCnt": 7.457744773683766,
      "htInstanceStatus": "active",
      "agentManagementInstanceClusterId": 5,
      "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
      "hpInstanceCurrentUsage": 0.8851374739011653,
      "providerRegion": "providerRegion",
      "createdBy": "createdBy",
      "regionId": 7,
      "hpInstanceClusterId": 7,
      "amInstanceClusterId": 5,
      "hmInstancePromCurrentUsage": 6.965117697638846,
      "incident": 0.10263654006109402,
      "gateway": "gateway"
    }
  ],
  "direction": "asc"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="get-the-list-of-instances-belonging-to-the-org-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[getInstances_200_response](#schemagetinstances_200_response)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## getOrg

<a id="opIdgetOrg"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orgs/{slugOrId}`

<h3 id="getorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slugOrId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "grafanaCloud": 3.616076749251911,
  "infraO11YContainersUsage": 2.8841621266687802,
  "subscriptions": {
    "next": "",
    "current": {
      "product": "",
      "endDate": "",
      "payload": "{}",
      "publicName": "",
      "planBillingCycle": "",
      "enterprisePluginsAdded": true,
      "isTrial": true,
      "plan": "",
      "startDate": ""
    }
  },
  "contractType": "contractType",
  "k6IPUsage": 9.018348186070783,
  "trialNoticeDate": "trialNoticeDate",
  "hgCurrentActiveUsers": 1.2315135367772556,
  "createdAt": "createdAt",
  "msaSignedBy": "msaSignedBy",
  "pluginSignatureType": "pluginSignatureType",
  "userQuota": 2.3021358869347655,
  "kapaDeflectorEnabled": true,
  "hmInstanceLimit": 5.962133916683182,
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "id": 0,
  "gcloudMonthlyCost": 4.145608029883936,
  "slug": "slug",
  "updatedAt": "updatedAt",
  "updatedBy": "updatedBy",
  "isStaff": true,
  "resellerName": "resellerName",
  "hgOnCallUsage": 1.4894159098541704,
  "geUsersUsage": 6.778324963048013,
  "trialLengthDays": 3.353193347011243,
  "htUsage": 9.965781217890562,
  "osource": "osource",
  "resellerId": 2.027123023002322,
  "hgGrafanaUsage": 1.0246457001441578,
  "disableTokenExpirationEmails": true,
  "msaSignedAt": "msaSignedAt",
  "smUsage": 6.965117697638846,
  "name": "name",
  "k6VuhUsage": 8.762042012749001,
  "isource": "isource",
  "allowGCloudTrial": true,
  "supportPlan": "supportPlan",
  "appO11YUsage": 3.5571952270680973,
  "geInstancesUsage": 6.878052220127876,
  "wpPlan": "wpPlan",
  "mfaAdminRecoveryOnly": true,
  "privacy": "privacy",
  "checksPerMonth": 6.027456183070403,
  "hlUsage": 4.965218492984954,
  "hgUsage": 7.386281948385884,
  "smBrowserUsage": 5.944895607614016,
  "liveChatEnabled": true,
  "maxTokenExpirationDays": 0.8851374739011653,
  "licenseProducts": [
    "licenseProducts",
    "licenseProducts"
  ],
  "irmUsage": 6.683562403749608,
  "hlInstanceLimit": 5.637376656633329,
  "emergencySupport": true,
  "mfaRequired": true,
  "infraO11YHostsUsage": 1.284659006116532,
  "cancellationDate": "cancellationDate",
  "awsMarketplaceSupport": 6.704019297950036,
  "hgInstanceLimit": 1.4658129805029452,
  "hmCurrentUsage": 7.457744773683766,
  "trialStartDate": "trialStartDate",
  "enterprisePlugins": 9.301444243932576,
  "hlRetentionUsage": 5.025004791520295,
  "reseller": "reseller",
  "avatar": "avatar",
  "retainedStackId": 3,
  "url": "url",
  "contractTypeId": 7.143538047012306,
  "hpUsage": 9.369310271410669,
  "trialEndDate": "trialEndDate",
  "createdBy": "createdBy",
  "hmGraphiteUsage": 1.1730742509559433,
  "hmUsage": 6.84685269835264,
  "creditApproved": 7.061401241503109,
  "feO11YUsage": 6.438423552598547
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="getorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiOrgPublic](#schemaformattedapiorgpublic)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## checkOrgVisibility

<a id="opIdcheckOrgVisibility"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string/check-visibility \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orgs/{slugOrId}/check-visibility`

Check visibility of the org

<h3 id="checkorgvisibility-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slugOrId|path|string|true|none|

> Example responses

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="checkorgvisibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## getOrgMembers

<a id="opIdgetOrgMembers"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orgs/{slugOrId}/members`

<h3 id="getorgmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slugOrId|path|string|true|none|
|billing|query|string|false|none|
|direction|query|string|false|none|
|orderBy|query|string|false|none|
|privacy|query|string|false|none|
|privacyIn|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "cursor": 2.3021358869347655,
  "nextCursor": 7.061401241503109,
  "total": 0.8008281904610115,
  "pages": 6.027456183070403,
  "perPage": 5.962133916683182,
  "orderBy": "orderBy",
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "page": 1.4658129805029452,
  "totalCount": 5.637376656633329,
  "items": [
    {
      "grafanaCloud": 6.84685269835264,
      "orgSlug": "orgSlug",
      "subscriptions": {
        "next": "",
        "current": {
          "product": "",
          "endDate": "",
          "payload": "{}",
          "publicName": "",
          "planBillingCycle": "",
          "enterprisePluginsAdded": true,
          "isTrial": true,
          "plan": "",
          "startDate": ""
        }
      },
      "role": "Admin",
      "userStatus": "active",
      "hmCurrentPrometheusUsage": 9.965781217890562,
      "privacy": 1.2315135367772556,
      "grafanaStaffAccess": {
        "publicReason": "publicReason",
        "accessExpiresAt": "2000-01-23T04:56:07.000+00:00",
        "ticketId": 9.369310271410669
      },
      "hlUsage": 4.965218492984954,
      "orgUrl": "orgUrl",
      "orgId": 3,
      "billing": 1.0246457001441578,
      "defaultOrg": 7.386281948385884,
      "createdAt": "createdAt",
      "security": 1.4894159098541704,
      "hgDatasourceCnts": "hgDatasourceCnts",
      "userLastName": "userLastName",
      "userEmail": "userEmail",
      "mfaEnabled": true,
      "id": 9,
      "extraPermissions": [
        "accesspolicies:write",
        "accesspolicies:write"
      ],
      "updatedAt": "updatedAt",
      "userUsername": "userUsername",
      "updatedBy": "updatedBy",
      "orgName": "orgName",
      "userFirstName": "userFirstName",
      "userName": "userName",
      "userId": 2,
      "contractTypeId": 1.1730742509559433,
      "resellerId": 7.457744773683766,
      "hmCurrentGraphiteUsage": 5.025004791520295,
      "createdBy": "createdBy",
      "allowGCloudTrial": true,
      "marketplaceSubscription": {
        "isLegacy": true,
        "provider": "aws"
      },
      "status": 4.145608029883936
    },
    {
      "grafanaCloud": 6.84685269835264,
      "orgSlug": "orgSlug",
      "subscriptions": {
        "next": "",
        "current": {
          "product": "",
          "endDate": "",
          "payload": "{}",
          "publicName": "",
          "planBillingCycle": "",
          "enterprisePluginsAdded": true,
          "isTrial": true,
          "plan": "",
          "startDate": ""
        }
      },
      "role": "Admin",
      "userStatus": "active",
      "hmCurrentPrometheusUsage": 9.965781217890562,
      "privacy": 1.2315135367772556,
      "grafanaStaffAccess": {
        "publicReason": "publicReason",
        "accessExpiresAt": "2000-01-23T04:56:07.000+00:00",
        "ticketId": 9.369310271410669
      },
      "hlUsage": 4.965218492984954,
      "orgUrl": "orgUrl",
      "orgId": 3,
      "billing": 1.0246457001441578,
      "defaultOrg": 7.386281948385884,
      "createdAt": "createdAt",
      "security": 1.4894159098541704,
      "hgDatasourceCnts": "hgDatasourceCnts",
      "userLastName": "userLastName",
      "userEmail": "userEmail",
      "mfaEnabled": true,
      "id": 9,
      "extraPermissions": [
        "accesspolicies:write",
        "accesspolicies:write"
      ],
      "updatedAt": "updatedAt",
      "userUsername": "userUsername",
      "updatedBy": "updatedBy",
      "orgName": "orgName",
      "userFirstName": "userFirstName",
      "userName": "userName",
      "userId": 2,
      "contractTypeId": 1.1730742509559433,
      "resellerId": 7.457744773683766,
      "hmCurrentGraphiteUsage": 5.025004791520295,
      "createdBy": "createdBy",
      "allowGCloudTrial": true,
      "marketplaceSubscription": {
        "isLegacy": true,
        "provider": "aws"
      },
      "status": 4.145608029883936
    }
  ],
  "direction": "direction"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="getorgmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrgMemberListResponse](#schemaorgmemberlistresponse)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## postOrgMembers

<a id="opIdpostOrgMembers"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "billing": 0,
    "privacy": "string",
    "role": "string",
    "security": 0,
    "username": "string"
  }'
```

`POST /orgs/{slugOrId}/members`

> Body parameter

```json
{
  "billing": 0,
  "privacy": "string",
  "role": "string",
  "security": 0,
  "username": "string"
}
```

<h3 id="postorgmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slugOrId|path|string|true|none|
|x-request-id|header|string|true|none|
|body|body|[postOrgMembers_request](#schemapostorgmembers_request)|true|none|
|» billing|body|integer|false|none|
|» privacy|body|string|false|none|
|» role|body|string|false|none|
|» security|body|integer|false|none|
|» username|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "grafanaCloud": 3.616076749251911,
  "orgSlug": "orgSlug",
  "subscriptions": {
    "next": "",
    "current": {
      "product": "",
      "endDate": "",
      "payload": "{}",
      "publicName": "",
      "planBillingCycle": "",
      "enterprisePluginsAdded": true,
      "isTrial": true,
      "plan": "",
      "startDate": ""
    }
  },
  "role": "Admin",
  "userStatus": "active",
  "hmCurrentPrometheusUsage": 1.0246457001441578,
  "privacy": 2.3021358869347655,
  "grafanaStaffAccess": {
    "publicReason": "publicReason",
    "accessExpiresAt": "2000-01-23T04:56:07.000+00:00",
    "ticketId": 9.369310271410669
  },
  "hlUsage": 7.386281948385884,
  "orgUrl": "orgUrl",
  "orgId": 6,
  "billing": 7.061401241503109,
  "defaultOrg": 5.637376656633329,
  "createdAt": "createdAt",
  "security": 9.301444243932576,
  "hgDatasourceCnts": "hgDatasourceCnts",
  "userLastName": "userLastName",
  "userEmail": "userEmail",
  "mfaEnabled": true,
  "id": 0,
  "extraPermissions": [
    "accesspolicies:write",
    "accesspolicies:write"
  ],
  "updatedAt": "updatedAt",
  "userUsername": "userUsername",
  "updatedBy": "updatedBy",
  "orgName": "orgName",
  "userFirstName": "userFirstName",
  "userName": "userName",
  "userId": 1,
  "contractTypeId": 4.145608029883936,
  "resellerId": 2.027123023002322,
  "hmCurrentGraphiteUsage": 1.2315135367772556,
  "createdBy": "createdBy",
  "allowGCloudTrial": true,
  "marketplaceSubscription": {
    "isLegacy": true,
    "provider": "aws"
  },
  "status": 5.962133916683182
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="postorgmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedOrgMembership](#schemaformattedorgmembership)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## getOrgMember

<a id="opIdgetOrgMember"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string/members/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orgs/{slugOrId}/members/{usernameOrId}`

<h3 id="getorgmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slugOrId|path|string|true|none|
|usernameOrId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "grafanaCloud": 3.616076749251911,
  "orgSlug": "orgSlug",
  "subscriptions": {
    "next": "",
    "current": {
      "product": "",
      "endDate": "",
      "payload": "{}",
      "publicName": "",
      "planBillingCycle": "",
      "enterprisePluginsAdded": true,
      "isTrial": true,
      "plan": "",
      "startDate": ""
    }
  },
  "role": "Admin",
  "userStatus": "active",
  "hmCurrentPrometheusUsage": 1.0246457001441578,
  "privacy": 2.3021358869347655,
  "grafanaStaffAccess": {
    "publicReason": "publicReason",
    "accessExpiresAt": "2000-01-23T04:56:07.000+00:00",
    "ticketId": 9.369310271410669
  },
  "hlUsage": 7.386281948385884,
  "orgUrl": "orgUrl",
  "orgId": 6,
  "billing": 7.061401241503109,
  "defaultOrg": 5.637376656633329,
  "createdAt": "createdAt",
  "security": 9.301444243932576,
  "hgDatasourceCnts": "hgDatasourceCnts",
  "userLastName": "userLastName",
  "userEmail": "userEmail",
  "mfaEnabled": true,
  "id": 0,
  "extraPermissions": [
    "accesspolicies:write",
    "accesspolicies:write"
  ],
  "updatedAt": "updatedAt",
  "userUsername": "userUsername",
  "updatedBy": "updatedBy",
  "orgName": "orgName",
  "userFirstName": "userFirstName",
  "userName": "userName",
  "userId": 1,
  "contractTypeId": 4.145608029883936,
  "resellerId": 2.027123023002322,
  "hmCurrentGraphiteUsage": 1.2315135367772556,
  "createdBy": "createdBy",
  "allowGCloudTrial": true,
  "marketplaceSubscription": {
    "isLegacy": true,
    "provider": "aws"
  },
  "status": 5.962133916683182
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="getorgmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedOrgMembership](#schemaformattedorgmembership)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## postOrgMember

<a id="opIdpostOrgMember"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string/members/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "billing": 0,
    "defaultOrg": "string",
    "privacy": "string",
    "role": "string",
    "security": 0
  }'
```

`POST /orgs/{slugOrId}/members/{usernameOrId}`

> Body parameter

```json
{
  "billing": 0,
  "defaultOrg": "string",
  "privacy": "string",
  "role": "string",
  "security": 0
}
```

<h3 id="postorgmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slugOrId|path|string|true|none|
|usernameOrId|path|string|true|none|
|x-request-id|header|string|true|none|
|body|body|[postOrgMember_request](#schemapostorgmember_request)|true|none|
|» billing|body|integer|false|none|
|» defaultOrg|body|string|false|none|
|» privacy|body|string|false|none|
|» role|body|string|false|none|
|» security|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "grafanaCloud": 3.616076749251911,
  "orgSlug": "orgSlug",
  "subscriptions": {
    "next": "",
    "current": {
      "product": "",
      "endDate": "",
      "payload": "{}",
      "publicName": "",
      "planBillingCycle": "",
      "enterprisePluginsAdded": true,
      "isTrial": true,
      "plan": "",
      "startDate": ""
    }
  },
  "role": "Admin",
  "userStatus": "active",
  "hmCurrentPrometheusUsage": 1.0246457001441578,
  "privacy": 2.3021358869347655,
  "grafanaStaffAccess": {
    "publicReason": "publicReason",
    "accessExpiresAt": "2000-01-23T04:56:07.000+00:00",
    "ticketId": 9.369310271410669
  },
  "hlUsage": 7.386281948385884,
  "orgUrl": "orgUrl",
  "orgId": 6,
  "billing": 7.061401241503109,
  "defaultOrg": 5.637376656633329,
  "createdAt": "createdAt",
  "security": 9.301444243932576,
  "hgDatasourceCnts": "hgDatasourceCnts",
  "userLastName": "userLastName",
  "userEmail": "userEmail",
  "mfaEnabled": true,
  "id": 0,
  "extraPermissions": [
    "accesspolicies:write",
    "accesspolicies:write"
  ],
  "updatedAt": "updatedAt",
  "userUsername": "userUsername",
  "updatedBy": "updatedBy",
  "orgName": "orgName",
  "userFirstName": "userFirstName",
  "userName": "userName",
  "userId": 1,
  "contractTypeId": 4.145608029883936,
  "resellerId": 2.027123023002322,
  "hmCurrentGraphiteUsage": 1.2315135367772556,
  "createdBy": "createdBy",
  "allowGCloudTrial": true,
  "marketplaceSubscription": {
    "isLegacy": true,
    "provider": "aws"
  },
  "status": 5.962133916683182
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="postorgmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedOrgMembership](#schemaformattedorgmembership)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## deleteOrgMember

<a id="opIddeleteOrgMember"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string/members/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string'
```

`DELETE /orgs/{slugOrId}/members/{usernameOrId}`

<h3 id="deleteorgmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slugOrId|path|string|true|none|
|usernameOrId|path|string|true|none|
|x-request-id|header|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="deleteorgmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get org settings

<a id="opIdgetOrgSettings"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orgs/{slugOrId}/settings`

<h3 id="get-org-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slugOrId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "aiDataSharingOptOut": true,
  "mfaAdminRecoveryOnly": true,
  "allowedInviteDomains": [
    "allowedInviteDomains",
    "allowedInviteDomains"
  ],
  "maxTokenExpirationDays": 0.8008281904610115,
  "disableTokenExpirationEmails": true,
  "mfaRequired": true
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="get-org-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiOrgSettings](#schemaformattedapiorgsettings)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update org settings

<a id="opIdupdateOrgSettings"></a>

> Code samples

```bash
curl https://grafana.com/api/orgs/string/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "aiDataSharingOptOut": true,
    "allowedInviteDomains": "string",
    "disableTokenExpirationEmails": true,
    "maxTokenExpirationDays": 0,
    "mfaAdminRecoveryOnly": true,
    "mfaRequired": true
  }'
```

`POST /orgs/{slugOrId}/settings`

> Body parameter

```json
{
  "aiDataSharingOptOut": true,
  "allowedInviteDomains": "string",
  "disableTokenExpirationEmails": true,
  "maxTokenExpirationDays": 0,
  "mfaAdminRecoveryOnly": true,
  "mfaRequired": true
}
```

<h3 id="update-org-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slugOrId|path|string|true|none|
|x-request-id|header|string|true|none|
|body|body|[updateOrgSettings_request](#schemaupdateorgsettings_request)|true|none|
|» aiDataSharingOptOut|body|boolean \| null|false|none|
|» allowedInviteDomains|body|string \| null|false|none|
|» disableTokenExpirationEmails|body|boolean \| null|false|none|
|» maxTokenExpirationDays|body|integer \| null|false|none|
|» mfaAdminRecoveryOnly|body|boolean \| null|false|none|
|» mfaRequired|body|boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "aiDataSharingOptOut": true,
  "mfaAdminRecoveryOnly": true,
  "allowedInviteDomains": [
    "allowedInviteDomains",
    "allowedInviteDomains"
  ],
  "maxTokenExpirationDays": 0.8008281904610115,
  "disableTokenExpirationEmails": true,
  "mfaRequired": true
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="update-org-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiOrgSettings](#schemaformattedapiorgsettings)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="gcom-api-plugins-marketplace">plugins-marketplace</h1>

## Renew a marketplace license token.

<a id="opIdrenewMarketplaceLicense"></a>

> Code samples

```bash
curl https://grafana.com/api/plugins-marketplace/licenses/renew \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-request-id: string' \
  -d '{
    "token": "string"
  }'
```

`POST /plugins-marketplace/licenses/renew`

> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="renew-a-marketplace-license-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-request-id|header|string|true|none|
|body|body|[renewMarketplaceLicense_request](#schemarenewmarketplacelicense_request)|true|none|
|» token|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "token": "token"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="renew-a-marketplace-license-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MarketplaceLicenseRenewalResponse](#schemamarketplacelicenserenewalresponse)|
|404|Not Found|Marketplace license token not found.|None|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="gcom-api-plugins">plugins</h1>

## Fetches a plugin by slug or id

<a id="opIdgetPlugin"></a>

> Code samples

```bash
curl https://grafana.com/api/plugins/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /plugins/{slug}`

<h3 id="fetches-a-plugin-by-slug-or-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|
|version|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "orgSlug": "orgSlug",
  "licenseUrl": "licenseUrl",
  "documentationUrl": "documentationUrl",
  "featured": 9.301444243932576,
  "internal": true,
  "hasDocumentation": true,
  "datasourceQueryCount": 2.027123023002322,
  "typeName": "typeName",
  "description": "description",
  "versionSignedByOrgName": "versionSignedByOrgName",
  "downloadSlug": "downloadSlug",
  "orgUrl": "orgUrl",
  "versionStatus": "versionStatus",
  "orgId": 5.962133916683182,
  "versionSignedByOrg": "versionSignedByOrg",
  "createdAt": "createdAt",
  "downloads": 7.061401241503109,
  "managed": {
    "strategy": "strategy",
    "enabled": true
  },
  "popularity": 3.616076749251911,
  "json": {
    "$schema": "$schema",
    "hideFromList": true,
    "builtIn": true,
    "enterpriseFeatures": {
      "healthDiagnosticsErrors": true
    },
    "roles": [
      {
        "grants": [
          "grants",
          "grants"
        ],
        "role": {
          "permissions": [
            {
              "scope": "scope",
              "action": "action"
            },
            {
              "scope": "scope",
              "action": "action"
            }
          ],
          "name": "name",
          "description": "description"
        }
      },
      {
        "grants": [
          "grants",
          "grants"
        ],
        "role": {
          "permissions": [
            {
              "scope": "scope",
              "action": "action"
            },
            {
              "scope": "scope",
              "action": "action"
            }
          ],
          "name": "name",
          "description": "description"
        }
      }
    ],
    "annotations": true,
    "buildMode": "buildMode",
    "mixed": true,
    "pascalName": "pascalName",
    "type": "app",
    "preload": true,
    "alerting": true,
    "routes": [
      {
        "reqAction": "reqAction",
        "path": "path",
        "headers": [
          "",
          ""
        ],
        "method": "method",
        "tokenAuth": {
          "scopes": [
            "scopes",
            "scopes"
          ],
          "params": {
            "grant_type": "grant_type",
            "resource": "resource",
            "client_secret": "client_secret",
            "client_id": "client_id"
          },
          "url": "url"
        },
        "jwtTokenAuth": {
          "scopes": [
            "scopes",
            "scopes"
          ],
          "params": {
            "token_uri": "token_uri",
            "client_email": "client_email",
            "private_key": "private_key"
          },
          "url": "url"
        },
        "urlParams": [
          {
            "name": "name",
            "content": "content"
          },
          {
            "name": "name",
            "content": "content"
          }
        ],
        "reqSignedIn": true,
        "reqRole": "reqRole",
        "body": {
          "key": ""
        },
        "url": "url"
      },
      {
        "reqAction": "reqAction",
        "path": "path",
        "headers": [
          "",
          ""
        ],
        "method": "method",
        "tokenAuth": {
          "scopes": [
            "scopes",
            "scopes"
          ],
          "params": {
            "grant_type": "grant_type",
            "resource": "resource",
            "client_secret": "client_secret",
            "client_id": "client_id"
          },
          "url": "url"
        },
        "jwtTokenAuth": {
          "scopes": [
            "scopes",
            "scopes"
          ],
          "params": {
            "token_uri": "token_uri",
            "client_email": "client_email",
            "private_key": "private_key"
          },
          "url": "url"
        },
        "urlParams": [
          {
            "name": "name",
            "content": "content"
          },
          {
            "name": "name",
            "content": "content"
          }
        ],
        "reqSignedIn": true,
        "reqRole": "reqRole",
        "body": {
          "key": ""
        },
        "url": "url"
      }
    ],
    "streaming": true,
    "iam": {
      "permissions": [
        {
          "scope": "scope",
          "action": "action"
        },
        {
          "scope": "scope",
          "action": "action"
        }
      ]
    },
    "backend": true,
    "id": "id",
    "state": "alpha",
    "logs": true,
    "info": {
      "keywords": [
        "keywords",
        "keywords"
      ],
      "build": {
        "number": 7.386281948385884,
        "pr": 1.2315135367772556,
        "build": 1.0246457001441578,
        "repo": "repo",
        "time": 4.145608029883936,
        "branch": "branch",
        "hash": "hash"
      },
      "author": {
        "name": "name",
        "email": "email",
        "url": "url"
      },
      "description": "description",
      "links": [
        {
          "name": "name",
          "url": "url",
          "target": "_blank"
        },
        {
          "name": "name",
          "url": "url",
          "target": "_blank"
        }
      ],
      "logos": {
        "small": "small",
        "large": "large"
      },
      "updated": "updated",
      "version": "version",
      "screenshots": [
        {
          "path": "path",
          "name": "name"
        },
        {
          "path": "path",
          "name": "name"
        }
      ]
    },
    "tracing": true,
    "languages": [
      "languages",
      "languages"
    ],
    "queryOptions": {
      "maxDataPoints": true,
      "cacheTimeout": true,
      "minInterval": true
    },
    "includes": [
      {
        "uid": "uid",
        "path": "path",
        "defaultNav": true,
        "component": "component",
        "role": "Admin",
        "name": "name",
        "icon": "icon",
        "action": "action",
        "type": "dashboard",
        "addToNav": true
      },
      {
        "uid": "uid",
        "path": "path",
        "defaultNav": true,
        "component": "component",
        "role": "Admin",
        "name": "name",
        "icon": "icon",
        "action": "action",
        "type": "dashboard",
        "addToNav": true
      }
    ],
    "executable": "executable",
    "dependencies": {
      "extensions": {
        "exposedComponents": [
          "exposedComponents",
          "exposedComponents"
        ]
      },
      "plugins": [
        {
          "name": "name",
          "id": "id",
          "type": "app"
        },
        {
          "name": "name",
          "id": "id",
          "type": "app"
        }
      ],
      "grafanaVersion": "grafanaVersion",
      "grafanaDependency": "grafanaDependency"
    },
    "skipDataQuery": true,
    "extensions": {
      "addedComponents": [
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        },
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        }
      ],
      "addedFunctions": [
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        },
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        }
      ],
      "extensionPoints": [
        {
          "description": "description",
          "id": "id",
          "title": "title"
        },
        {
          "description": "description",
          "id": "id",
          "title": "title"
        }
      ],
      "addedLinks": [
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        },
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        }
      ],
      "exposedComponents": [
        {
          "description": "description",
          "id": "id",
          "title": "title"
        },
        {
          "description": "description",
          "id": "id",
          "title": "title"
        }
      ]
    },
    "docsPath": "docsPath",
    "autoEnabled": true,
    "multiValueFilterOperators": true,
    "name": "name",
    "suggestions": true,
    "metrics": true,
    "category": "category"
  },
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "id": 0.8008281904610115,
  "prices": "{}",
  "slug": "slug",
  "updatedAt": "updatedAt",
  "orgName": "orgName",
  "releaseCountLastYear": 5.637376656633329,
  "versionDistributionType": "versionDistributionType",
  "verified": true,
  "signatureType": "signatureType",
  "packages": "{}",
  "version": "version",
  "userId": 1.4658129805029452,
  "versionSignatureType": "versionSignatureType",
  "url": "url",
  "activeInstances": 2.3021358869347655,
  "typeCode": "typeCode",
  "angularDetected": true,
  "name": "name",
  "typeId": 6.027456183070403,
  "category": "category",
  "status": "status"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="fetches-a-plugin-by-slug-or-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiPlugin](#schemaformattedapiplugin)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="gcom-api-stack-regions">stack-regions</h1>

## getStackRegions

<a id="opIdgetStackRegions"></a>

> Code samples

```bash
curl https://grafana.com/api/stack-regions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stack-regions`

<h3 id="getstackregions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryCode|query|string|false|none|
|direction|query|string|false|none|
|id|query|integer|false|none|
|idIn|query|[integer]|false|none|
|labels|query|[string]|false|none|
|orderBy|query|string|false|none|
|orgId|query|integer|false|none|
|provider|query|string|false|none|
|providerRegion|query|string|false|none|
|slug|query|string|false|none|
|slugIn|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|
|orderBy|id|
|orderBy|createdAt|
|orderBy|updatedAt|
|orderBy|sortOrder|
|provider|aws|
|provider|gcp|
|provider|azure|
|provider|fedramp-palantir|

> Example responses

> 200 Response

```json
{
  "total": 1.4658129805029452,
  "pages": 5.962133916683182,
  "orderBy": "orderBy",
  "pageSize": 5.637376656633329,
  "page": 2.3021358869347655,
  "items": [
    {
      "createdAt": "createdAt",
      "visibility": "visibility",
      "publicName": "publicName",
      "provider": "aws",
      "sortOrder": 6.027456183070403,
      "name": "name",
      "description": "description",
      "id": 0.8008281904610115,
      "slug": "slug",
      "status": "status",
      "updatedAt": "updatedAt"
    },
    {
      "createdAt": "createdAt",
      "visibility": "visibility",
      "publicName": "publicName",
      "provider": "aws",
      "sortOrder": 6.027456183070403,
      "name": "name",
      "description": "description",
      "id": 0.8008281904610115,
      "slug": "slug",
      "status": "status",
      "updatedAt": "updatedAt"
    }
  ],
  "direction": "asc"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="getstackregions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[getStackRegions_200_response](#schemagetstackregions_200_response)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## getClosestStackRegion

<a id="opIdgetClosestStackRegion"></a>

> Code samples

```bash
curl https://grafana.com/api/stack-regions/closest \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stack-regions/closest`

<h3 id="getcloseststackregion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|query|integer|false|none|
|provider|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|aws|
|provider|gcp|
|provider|azure|
|provider|fedramp-palantir|

> Example responses

> 200 Response

```json
{
  "createdAt": "createdAt",
  "visibility": "visibility",
  "publicName": "publicName",
  "provider": "aws",
  "sortOrder": 6.027456183070403,
  "name": "name",
  "description": "description",
  "id": 0.8008281904610115,
  "slug": "slug",
  "status": "status",
  "updatedAt": "updatedAt"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="getcloseststackregion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiStackRegion](#schemaformattedapistackregion)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="gcom-api-accesspolicies">accesspolicies</h1>

## Get a list of access policies

<a id="opIdgetAccessPolicies"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/accesspolicies?region=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accesspolicies`

<h3 id="get-a-list-of-access-policies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|region|query|string|true|none|
|name|query|string|false|none|
|orgId|query|integer|false|none|
|pageCursor|query|string|false|none|
|pageSize|query|integer|false|none|
|realmIdentifier|query|string|false|none|
|realmType|query|string|false|none|
|status|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "realms": [
        {
          "identifier": "123",
          "labelPolicies": [
            {
              "selector": "{env != \"dev\"}"
            },
            {
              "selector": "{env != \"dev\"}"
            }
          ],
          "type": "stack"
        },
        {
          "identifier": "123",
          "labelPolicies": [
            {
              "selector": "{env != \"dev\"}"
            },
            {
              "selector": "{env != \"dev\"}"
            }
          ],
          "type": "stack"
        }
      ],
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "displayName": "Stack Readers",
      "name": "stack-readers",
      "attributes": {
        "pdcConfiguration": {
          "limitedHosts": [
            "mysql.example.com:3306",
            "mysql.example.com:3306"
          ]
        },
        "lokiQueryPolicy": {
          "queryTimeout": "10s",
          "maxQueryLookback": "30d",
          "maxQueryLength": "7d",
          "maxEntriesLimitPerQuery": 20
        },
        "allowedAudiences": [
          "allowedAudiences",
          "allowedAudiences"
        ],
        "allowedScopes": [
          "metrics:read",
          "logs:read",
          "traces:read",
          "alerts:read"
        ]
      },
      "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
      "source": "user",
      "scopes": [
        "metrics:read",
        "logs:read",
        "traces:read",
        "alerts:read"
      ],
      "conditions": {
        "allowedSubnets": [
          "AuthAccessPolicy_conditions_allowedSubnets_inner",
          "AuthAccessPolicy_conditions_allowedSubnets_inner"
        ]
      },
      "orgId": "1",
      "updatedAt": "2000-01-23T04:56:07.000+00:00",
      "status": "active"
    },
    {
      "realms": [
        {
          "identifier": "123",
          "labelPolicies": [
            {
              "selector": "{env != \"dev\"}"
            },
            {
              "selector": "{env != \"dev\"}"
            }
          ],
          "type": "stack"
        },
        {
          "identifier": "123",
          "labelPolicies": [
            {
              "selector": "{env != \"dev\"}"
            },
            {
              "selector": "{env != \"dev\"}"
            }
          ],
          "type": "stack"
        }
      ],
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "displayName": "Stack Readers",
      "name": "stack-readers",
      "attributes": {
        "pdcConfiguration": {
          "limitedHosts": [
            "mysql.example.com:3306",
            "mysql.example.com:3306"
          ]
        },
        "lokiQueryPolicy": {
          "queryTimeout": "10s",
          "maxQueryLookback": "30d",
          "maxQueryLength": "7d",
          "maxEntriesLimitPerQuery": 20
        },
        "allowedAudiences": [
          "allowedAudiences",
          "allowedAudiences"
        ],
        "allowedScopes": [
          "metrics:read",
          "logs:read",
          "traces:read",
          "alerts:read"
        ]
      },
      "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
      "source": "user",
      "scopes": [
        "metrics:read",
        "logs:read",
        "traces:read",
        "alerts:read"
      ],
      "conditions": {
        "allowedSubnets": [
          "AuthAccessPolicy_conditions_allowedSubnets_inner",
          "AuthAccessPolicy_conditions_allowedSubnets_inner"
        ]
      },
      "orgId": "1",
      "updatedAt": "2000-01-23T04:56:07.000+00:00",
      "status": "active"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="get-a-list-of-access-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[getAccessPolicies_200_response](#schemagetaccesspolicies_200_response)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create a new access policy

<a id="opIdpostAccessPolicies"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/accesspolicies?region=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "attributes": {
      "lokiQueryPolicy": {
        "maxEntriesLimitPerQuery": 0,
        "maxQueryBytesRead": "string",
        "maxQueryInterval": "string",
        "maxQueryLength": "string",
        "maxQueryLookback": "string",
        "maxQueryTime": "string",
        "minimumLabelsNumber": 0,
        "requiredLabels": [
          "string"
        ]
      },
      "pdcConfiguration": {
        "limitedHosts": [
          "string"
        ]
      }
    },
    "conditions": {
      "allowedSubnets": [
        "string"
      ]
    },
    "displayName": "string",
    "name": "string",
    "realms": [
      {
        "identifier": "string",
        "labelPolicies": [
          {
            "selector": "string"
          }
        ],
        "type": "stack"
      }
    ],
    "scopes": [
      "string"
    ]
  }'
```

`POST /v1/accesspolicies`

> Body parameter

```json
{
  "attributes": {
    "lokiQueryPolicy": {
      "maxEntriesLimitPerQuery": 0,
      "maxQueryBytesRead": "string",
      "maxQueryInterval": "string",
      "maxQueryLength": "string",
      "maxQueryLookback": "string",
      "maxQueryTime": "string",
      "minimumLabelsNumber": 0,
      "requiredLabels": [
        "string"
      ]
    },
    "pdcConfiguration": {
      "limitedHosts": [
        "string"
      ]
    }
  },
  "conditions": {
    "allowedSubnets": [
      "string"
    ]
  },
  "displayName": "string",
  "name": "string",
  "realms": [
    {
      "identifier": "string",
      "labelPolicies": [
        {
          "selector": "string"
        }
      ],
      "type": "stack"
    }
  ],
  "scopes": [
    "string"
  ]
}
```

<h3 id="create-a-new-access-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|region|query|string|true|none|
|orgId|query|integer|false|none|
|x-request-id|header|string|true|none|
|body|body|[postAccessPolicies_request](#schemapostaccesspolicies_request)|true|none|
|» attributes|body|[postAccessPolicies_request_attributes](#schemapostaccesspolicies_request_attributes)|false|none|
|» conditions|body|[postAccessPolicies_request_conditions](#schemapostaccesspolicies_request_conditions)|false|none|
|» displayName|body|string|false|none|
|» name|body|string|true|none|
|» realms|body|[[postAccessPolicies_request_realms_inner](#schemapostaccesspolicies_request_realms_inner)]|true|none|
|» scopes|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "realms": [
    {
      "identifier": "123",
      "labelPolicies": [
        {
          "selector": "{env != \"dev\"}"
        },
        {
          "selector": "{env != \"dev\"}"
        }
      ],
      "type": "stack"
    },
    {
      "identifier": "123",
      "labelPolicies": [
        {
          "selector": "{env != \"dev\"}"
        },
        {
          "selector": "{env != \"dev\"}"
        }
      ],
      "type": "stack"
    }
  ],
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "displayName": "Stack Readers",
  "name": "stack-readers",
  "attributes": {
    "pdcConfiguration": {
      "limitedHosts": [
        "mysql.example.com:3306",
        "mysql.example.com:3306"
      ]
    },
    "lokiQueryPolicy": {
      "queryTimeout": "10s",
      "maxQueryLookback": "30d",
      "maxQueryLength": "7d",
      "maxEntriesLimitPerQuery": 20
    },
    "allowedAudiences": [
      "allowedAudiences",
      "allowedAudiences"
    ],
    "allowedScopes": [
      "metrics:read",
      "logs:read",
      "traces:read",
      "alerts:read"
    ]
  },
  "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "source": "user",
  "scopes": [
    "metrics:read",
    "logs:read",
    "traces:read",
    "alerts:read"
  ],
  "conditions": {
    "allowedSubnets": [
      "AuthAccessPolicy_conditions_allowedSubnets_inner",
      "AuthAccessPolicy_conditions_allowedSubnets_inner"
    ]
  },
  "orgId": "1",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "status": "active"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="create-a-new-access-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthAccessPolicy](#schemaauthaccesspolicy)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get details about the Cloud Access Policy API

<a id="opIdgetConfig"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/accesspolicies/config?region=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accesspolicies/config`

<h3 id="get-details-about-the-cloud-access-policy-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|region|query|string|true|none|
|includeOrgMetadata|query|boolean|false|none|
|orgId|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "realms": [
    {
      "identifier": "identifier",
      "type": "org"
    },
    {
      "identifier": "identifier",
      "type": "org"
    }
  ],
  "sets": [
    {
      "name": "name",
      "scopes": [
        "scopes",
        "scopes"
      ]
    },
    {
      "name": "name",
      "scopes": [
        "scopes",
        "scopes"
      ]
    }
  ],
  "scopes": [
    {
      "requiresRealmType": "requiresRealmType",
      "name": "name",
      "description": "description"
    },
    {
      "requiresRealmType": "requiresRealmType",
      "name": "name",
      "description": "description"
    }
  ]
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="get-details-about-the-cloud-access-policy-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AccessPoliciesConfig](#schemaaccesspoliciesconfig)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get an access policy

<a id="opIdgetAccessPolicy"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/accesspolicies/string?region=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accesspolicies/{id}`

<h3 id="get-an-access-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|region|query|string|true|none|
|orgId|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "realms": [
    {
      "identifier": "123",
      "labelPolicies": [
        {
          "selector": "{env != \"dev\"}"
        },
        {
          "selector": "{env != \"dev\"}"
        }
      ],
      "type": "stack"
    },
    {
      "identifier": "123",
      "labelPolicies": [
        {
          "selector": "{env != \"dev\"}"
        },
        {
          "selector": "{env != \"dev\"}"
        }
      ],
      "type": "stack"
    }
  ],
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "displayName": "Stack Readers",
  "name": "stack-readers",
  "attributes": {
    "pdcConfiguration": {
      "limitedHosts": [
        "mysql.example.com:3306",
        "mysql.example.com:3306"
      ]
    },
    "lokiQueryPolicy": {
      "queryTimeout": "10s",
      "maxQueryLookback": "30d",
      "maxQueryLength": "7d",
      "maxEntriesLimitPerQuery": 20
    },
    "allowedAudiences": [
      "allowedAudiences",
      "allowedAudiences"
    ],
    "allowedScopes": [
      "metrics:read",
      "logs:read",
      "traces:read",
      "alerts:read"
    ]
  },
  "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "source": "user",
  "scopes": [
    "metrics:read",
    "logs:read",
    "traces:read",
    "alerts:read"
  ],
  "conditions": {
    "allowedSubnets": [
      "AuthAccessPolicy_conditions_allowedSubnets_inner",
      "AuthAccessPolicy_conditions_allowedSubnets_inner"
    ]
  },
  "orgId": "1",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "status": "active"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="get-an-access-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthAccessPolicy](#schemaauthaccesspolicy)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update an access policy

<a id="opIdpostAccessPolicy"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/accesspolicies/string?region=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "attributes": {
      "lokiQueryPolicy": {
        "maxEntriesLimitPerQuery": 0,
        "maxQueryBytesRead": "string",
        "maxQueryInterval": "string",
        "maxQueryLength": "string",
        "maxQueryLookback": "string",
        "maxQueryTime": "string",
        "minimumLabelsNumber": 0,
        "requiredLabels": [
          "string"
        ]
      },
      "pdcConfiguration": {
        "limitedHosts": [
          "string"
        ]
      }
    },
    "conditions": {
      "allowedSubnets": [
        "string"
      ]
    },
    "displayName": "string",
    "realms": [
      {
        "identifier": "string",
        "labelPolicies": [
          {
            "selector": "string"
          }
        ],
        "type": "stack"
      }
    ],
    "scopes": [
      "string"
    ],
    "status": "string"
  }'
```

`POST /v1/accesspolicies/{id}`

> Body parameter

```json
{
  "attributes": {
    "lokiQueryPolicy": {
      "maxEntriesLimitPerQuery": 0,
      "maxQueryBytesRead": "string",
      "maxQueryInterval": "string",
      "maxQueryLength": "string",
      "maxQueryLookback": "string",
      "maxQueryTime": "string",
      "minimumLabelsNumber": 0,
      "requiredLabels": [
        "string"
      ]
    },
    "pdcConfiguration": {
      "limitedHosts": [
        "string"
      ]
    }
  },
  "conditions": {
    "allowedSubnets": [
      "string"
    ]
  },
  "displayName": "string",
  "realms": [
    {
      "identifier": "string",
      "labelPolicies": [
        {
          "selector": "string"
        }
      ],
      "type": "stack"
    }
  ],
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

<h3 id="update-an-access-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|region|query|string|true|none|
|orgId|query|integer|false|none|
|x-request-id|header|string|true|none|
|body|body|[postAccessPolicy_request](#schemapostaccesspolicy_request)|true|none|
|» attributes|body|[postAccessPolicies_request_attributes](#schemapostaccesspolicies_request_attributes)|false|none|
|» conditions|body|[postAccessPolicies_request_conditions](#schemapostaccesspolicies_request_conditions)|false|none|
|» displayName|body|string|false|none|
|» realms|body|[[postAccessPolicies_request_realms_inner](#schemapostaccesspolicies_request_realms_inner)]|false|none|
|» scopes|body|[string]|false|none|
|» status|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "realms": [
    {
      "identifier": "123",
      "labelPolicies": [
        {
          "selector": "{env != \"dev\"}"
        },
        {
          "selector": "{env != \"dev\"}"
        }
      ],
      "type": "stack"
    },
    {
      "identifier": "123",
      "labelPolicies": [
        {
          "selector": "{env != \"dev\"}"
        },
        {
          "selector": "{env != \"dev\"}"
        }
      ],
      "type": "stack"
    }
  ],
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "displayName": "Stack Readers",
  "name": "stack-readers",
  "attributes": {
    "pdcConfiguration": {
      "limitedHosts": [
        "mysql.example.com:3306",
        "mysql.example.com:3306"
      ]
    },
    "lokiQueryPolicy": {
      "queryTimeout": "10s",
      "maxQueryLookback": "30d",
      "maxQueryLength": "7d",
      "maxEntriesLimitPerQuery": 20
    },
    "allowedAudiences": [
      "allowedAudiences",
      "allowedAudiences"
    ],
    "allowedScopes": [
      "metrics:read",
      "logs:read",
      "traces:read",
      "alerts:read"
    ]
  },
  "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "source": "user",
  "scopes": [
    "metrics:read",
    "logs:read",
    "traces:read",
    "alerts:read"
  ],
  "conditions": {
    "allowedSubnets": [
      "AuthAccessPolicy_conditions_allowedSubnets_inner",
      "AuthAccessPolicy_conditions_allowedSubnets_inner"
    ]
  },
  "orgId": "1",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "status": "active"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="update-an-access-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthAccessPolicy](#schemaauthaccesspolicy)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete an access policy

<a id="opIddeleteAccessPolicy"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/accesspolicies/string?region=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string'
```

`DELETE /v1/accesspolicies/{id}`

<h3 id="delete-an-access-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|region|query|string|true|none|
|orgId|query|integer|false|none|
|x-request-id|header|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="delete-an-access-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="gcom-api-tokens">tokens</h1>

## Get a list of tokens

<a id="opIdgetTokens"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/tokens?region=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tokens`

<h3 id="get-a-list-of-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|region|query|string|true|none|
|accessPolicyId|query|string|false|none|
|accessPolicyIds|query|string|false|none|
|accessPolicyName|query|string|false|none|
|accessPolicyRealmIdentifier|query|string|false|none|
|accessPolicyRealmType|query|string|false|none|
|accessPolicyStatus|query|string|false|none|
|expiresAfter|query|string|false|none|
|expiresBefore|query|string|false|none|
|includeExpired|query|boolean|false|none|
|name|query|string|false|none|
|orgId|query|integer|false|none|
|pageCursor|query|string|false|none|
|pageSize|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "pagination": {
      "nextPage": "nextPage",
      "pageSize": 0.8008281904610115,
      "pageCursor": "pageCursor"
    }
  },
  "items": [
    "{}",
    "{}"
  ]
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="get-a-list-of-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AccessPolicyListResponse](#schemaaccesspolicylistresponse)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create a new token

<a id="opIdpostTokens"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/tokens?region=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "accessPolicyId": "string",
    "displayName": "string",
    "expiresAt": "1970-01-01T00:00:00Z",
    "name": "string"
  }'
```

`POST /v1/tokens`

> Body parameter

```json
{
  "accessPolicyId": "string",
  "displayName": "string",
  "expiresAt": "1970-01-01T00:00:00Z",
  "name": "string"
}
```

<h3 id="create-a-new-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|region|query|string|true|none|
|orgId|query|integer|false|none|
|x-request-id|header|string|true|none|
|body|body|[postTokens_request](#schemaposttokens_request)|true|none|
|» accessPolicyId|body|string|true|none|
|» displayName|body|string|false|none|
|» expiresAt|body|string(date-time)|false|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "accessPolicyId": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "firstUsedAt": "2000-01-23T04:56:07.000+00:00",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
  "displayName": "My Token",
  "name": "mytoken",
  "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "expiresAt": "2000-01-23T04:56:07.000+00:00",
  "orgId": "1",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "token": "glc_eyJrIjoiZjI0YzZkNGEwZDBmZmZjMmUzNTU2ODcxMmY0ZWZlNTQ1NTljMDFjOCIsIm4iOiJteXRva2VuIiwiaWQiOjF9"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="create-a-new-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthTokenWithSecret](#schemaauthtokenwithsecret)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get info for a specific token

<a id="opIdgetToken"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/tokens/string?region=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tokens/{id}`

<h3 id="get-info-for-a-specific-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|region|query|string|true|none|
|orgId|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "accessPolicyId": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "firstUsedAt": "2000-01-23T04:56:07.000+00:00",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
  "displayName": "My Token",
  "name": "mytoken",
  "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "expiresAt": "2000-01-23T04:56:07.000+00:00",
  "orgId": "1",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

<h3 id="get-info-for-a-specific-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthToken](#schemaauthtoken)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update a token

<a id="opIdpostToken"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/tokens/string?region=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string' \
  -d '{
    "displayName": "string",
    "expiresAt": "1970-01-01T00:00:00Z"
  }'
```

`POST /v1/tokens/{id}`

> Body parameter

```json
{
  "displayName": "string",
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|region|query|string|true|none|
|orgId|query|integer|false|none|
|x-request-id|header|string|true|none|
|body|body|[postToken_request](#schemaposttoken_request)|true|none|
|» displayName|body|string|false|none|
|» expiresAt|body|string(date-time) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "accessPolicyId": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "firstUsedAt": "2000-01-23T04:56:07.000+00:00",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
  "displayName": "My Token",
  "name": "mytoken",
  "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "expiresAt": "2000-01-23T04:56:07.000+00:00",
  "orgId": "1",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="update-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthToken](#schemaauthtoken)|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete a token

<a id="opIddeleteToken"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/tokens/string?region=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'x-request-id: string'
```

`DELETE /v1/tokens/{id}`

<h3 id="delete-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|region|query|string|true|none|
|orgId|query|integer|false|none|
|x-request-id|header|string|true|none|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

> 403 Response

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

> 409 Response

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

> 503 Response

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

<h3 id="delete-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Login Required or invalid credentials|[ErrorInvalidCredentials](#schemaerrorinvalidcredentials)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Element not found|[ErrorNotFound](#schemaerrornotfound)|
|409|Conflict|Invalid arguments: wrong or missing parameters|[ErrorConflict](#schemaerrorconflict)|
|503|Service Unavailable|Service is currently unavailable|[ErrorServiceUnavailable](#schemaerrorserviceunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="gcom-api-stacks">stacks</h1>

## Gets an instance's connectivity information (InfluxDB, OTEL, AWS private link, etc.)

<a id="opIdgetConnections"></a>

> Code samples

```bash
curl https://grafana.com/api/instances/string/connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /instances/{instanceId}/connections`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="gets-an-instances-connectivity-information-influxdb-otel-aws-private-link-etc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|id or slug of the instance|

> Example responses

> 200 Response

```json
{
  "otlpHttpUrl": "otlpHttpUrl",
  "influxUrl": "influxUrl",
  "oncallApiUrl": "oncallApiUrl",
  "appPlatform": {
    "url": "url",
    "caData": "caData"
  },
  "syntheticMonitoringApiUrl": "syntheticMonitoringApiUrl",
  "otlpMultiAZ": true,
  "privateConnectivityInfo": {
    "tenants": [
      {
        "ipAllowListCNAME": "ipAllowListCNAME",
        "id": 0,
        "type": "type",
        "allowlistUrl": "allowlistUrl",
        "info": {
          "availabilityZoneIds": [
            "availabilityZoneIds",
            "availabilityZoneIds"
          ],
          "regions": [
            "regions",
            "regions"
          ],
          "serviceAttachment": "serviceAttachment",
          "alias": "alias",
          "endpointName": "endpointName",
          "availabilityZones": [
            "availabilityZones",
            "availabilityZones"
          ],
          "domainNames": [
            "domainNames",
            "domainNames"
          ],
          "privateDNS": "privateDNS",
          "serviceName": "serviceName"
        }
      },
      {
        "ipAllowListCNAME": "ipAllowListCNAME",
        "id": 0,
        "type": "type",
        "allowlistUrl": "allowlistUrl",
        "info": {
          "availabilityZoneIds": [
            "availabilityZoneIds",
            "availabilityZoneIds"
          ],
          "regions": [
            "regions",
            "regions"
          ],
          "serviceAttachment": "serviceAttachment",
          "alias": "alias",
          "endpointName": "endpointName",
          "availabilityZones": [
            "availabilityZones",
            "availabilityZones"
          ],
          "domainNames": [
            "domainNames",
            "domainNames"
          ],
          "privateDNS": "privateDNS",
          "serviceName": "serviceName"
        }
      }
    ],
    "otlp": {
      "availabilityZoneIds": [
        "availabilityZoneIds",
        "availabilityZoneIds"
      ],
      "regions": [
        "regions",
        "regions"
      ],
      "serviceAttachment": "serviceAttachment",
      "alias": "alias",
      "endpointName": "endpointName",
      "availabilityZones": [
        "availabilityZones",
        "availabilityZones"
      ],
      "domainNames": [
        "domainNames",
        "domainNames"
      ],
      "privateDNS": "privateDNS",
      "serviceName": "serviceName"
    },
    "pdc": {
      "api": {
        "availabilityZoneIds": [
          "availabilityZoneIds",
          "availabilityZoneIds"
        ],
        "regions": [
          "regions",
          "regions"
        ],
        "serviceAttachment": "serviceAttachment",
        "alias": "alias",
        "endpointName": "endpointName",
        "availabilityZones": [
          "availabilityZones",
          "availabilityZones"
        ],
        "domainNames": [
          "domainNames",
          "domainNames"
        ],
        "privateDNS": "privateDNS",
        "serviceName": "serviceName"
      },
      "gateway": {
        "availabilityZoneIds": [
          "availabilityZoneIds",
          "availabilityZoneIds"
        ],
        "regions": [
          "regions",
          "regions"
        ],
        "serviceAttachment": "serviceAttachment",
        "alias": "alias",
        "endpointName": "endpointName",
        "availabilityZones": [
          "availabilityZones",
          "availabilityZones"
        ],
        "domainNames": [
          "domainNames",
          "domainNames"
        ],
        "privateDNS": "privateDNS",
        "serviceName": "serviceName"
      }
    }
  }
}
```

> default Response

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

<h3 id="gets-an-instances-connectivity-information-influxdb-otel-aws-private-link-etc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FormattedApiInstanceConnections](#schemaformattedapiinstanceconnections)|
|default|Default|Error|[ErrorPayload](#schemaerrorpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## listStacksV1

<a id="opIdlistStacksV1"></a>

> Code samples

```bash
curl 'https://grafana.com/api/v1/stacks?org=string&page=1&pageSize=10' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/stacks`

<h3 id="liststacksv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org|query|string|true|slug of the org to restrict the search to|
|page|query|integer(int64)|true|page to retrieve|
|pageSize|query|integer(int64)|true|page size to retrieve|

> Example responses

> 200 Response

```json
{
  "total": 2,
  "pages": 5,
  "pageSize": 5,
  "page": 1,
  "items": [
    {
      "orgSlug": "orgSlug",
      "deleteProtection": true,
      "name": "name",
      "description": "description",
      "id": 0,
      "region": "region",
      "orgId": 6,
      "slug": "slug",
      "url": "url",
      "labels": {
        "key": "labels"
      }
    },
    {
      "orgSlug": "orgSlug",
      "deleteProtection": true,
      "name": "name",
      "description": "description",
      "id": 0,
      "region": "region",
      "orgId": 6,
      "slug": "slug",
      "url": "url",
      "labels": {
        "key": "labels"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

<h3 id="liststacksv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseStackV1](#schemapaginatedresponsestackv1)|
|default|Default|Error|[ErrorPayload](#schemaerrorpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## createStackV1

<a id="opIdcreateStackV1"></a>

> Code samples

```bash
curl https://grafana.com/api/v1/stacks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "org": "org",
    "plugins": [
      "plugins",
      "plugins"
    ],
    "deleteProtection": true,
    "name": "name",
    "description": "description",
    "region": "region",
    "stackType": "cloud",
    "slug": "slug",
    "url": "url",
    "labels": {
      "key": "labels"
    }
  }'
```

`POST /v1/stacks`

> Body parameter

```json
{
  "org": "org",
  "plugins": [
    "plugins",
    "plugins"
  ],
  "deleteProtection": true,
  "name": "name",
  "description": "description",
  "region": "region",
  "stackType": "cloud",
  "slug": "slug",
  "url": "url",
  "labels": {
    "key": "labels"
  }
}
```

<h3 id="createstackv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StackCreateRequestV1](#schemastackcreaterequestv1)|true|none|
|» deleteProtection|body|boolean \| null|false|protection active or not for the stack|
|» description|body|string \| null|false|description of the stack|
|» labels|body|object|false|labels to add to the stack|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|true|of the stack|
|» org|body|string|true|org owning the stack|
|» plugins|body|[string]|false|plugins to install to the stack|
|» region|body|string|true|region of the stack|
|» slug|body|string|true|slug of the stack|
|» stackType|body|string|false|type of the stack|
|» url|body|string \| null|false|url for the stack|

> Example responses

> 200 Response

```json
{
  "orgSlug": "orgSlug",
  "deleteProtection": true,
  "name": "name",
  "description": "description",
  "id": 0,
  "region": "region",
  "orgId": 6,
  "slug": "slug",
  "url": "url",
  "labels": {
    "key": "labels"
  }
}
```

> default Response

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

<h3 id="createstackv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StackV1](#schemastackv1)|
|default|Default|Error|[ErrorPayload](#schemaerrorpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## checkStackSlugV1

<a id="opIdcheckStackSlugV1"></a>

> Code samples

```bash
curl https://grafana.com/api/v1/stacks/checkUrl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "org": "org",
    "url": "url"
  }'
```

`POST /v1/stacks/checkUrl`

> Body parameter

```json
{
  "org": "org",
  "url": "url"
}
```

<h3 id="checkstackslugv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StackCheckRequestV1](#schemastackcheckrequestv1)|true|none|
|» org|body|string|false|org owning the stack|
|» url|body|string|true|url for the stack|

> Example responses

> 200 Response

```json
{
  "slug": "slug",
  "url": "url"
}
```

> default Response

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

<h3 id="checkstackslugv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StackCheckV1](#schemastackcheckv1)|
|default|Default|Error|[ErrorPayload](#schemaerrorpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## getStackV1

<a id="opIdgetStackV1"></a>

> Code samples

```bash
curl https://grafana.com/api/v1/stacks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/stacks/{idOrSlug}`

<h3 id="getstackv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrSlug|path|string|true|id of the stack to get|

> Example responses

> 200 Response

```json
{
  "orgSlug": "orgSlug",
  "deleteProtection": true,
  "name": "name",
  "description": "description",
  "id": 0,
  "region": "region",
  "orgId": 6,
  "slug": "slug",
  "url": "url",
  "labels": {
    "key": "labels"
  }
}
```

> default Response

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

<h3 id="getstackv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StackV1](#schemastackv1)|
|default|Default|Error|[ErrorPayload](#schemaerrorpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## updateStackV1

<a id="opIdupdateStackV1"></a>

> Code samples

```bash
curl https://grafana.com/api/v1/stacks/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deleteProtection": true,
    "name": "name",
    "description": "description",
    "slug": "slug",
    "url": "url",
    "labels": {
      "key": "labels"
    }
  }'
```

`POST /v1/stacks/{idOrSlug}`

> Body parameter

```json
{
  "deleteProtection": true,
  "name": "name",
  "description": "description",
  "slug": "slug",
  "url": "url",
  "labels": {
    "key": "labels"
  }
}
```

<h3 id="updatestackv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrSlug|path|string|true|id of the stack to update|
|body|body|[StackUpdateRequestV1](#schemastackupdaterequestv1)|true|none|
|» deleteProtection|body|boolean \| null|false|protection active or not for the stack|
|» description|body|string \| null|false|description of the stack|
|» labels|body|object|false|labels to add to the stack|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string \| null|false|of the stack|
|» slug|body|string \| null|false|slug of the stack|
|» url|body|string \| null|false|url for the stack|

> Example responses

> 200 Response

```json
{
  "orgSlug": "orgSlug",
  "deleteProtection": true,
  "name": "name",
  "description": "description",
  "id": 0,
  "region": "region",
  "orgId": 6,
  "slug": "slug",
  "url": "url",
  "labels": {
    "key": "labels"
  }
}
```

> default Response

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

<h3 id="updatestackv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StackV1](#schemastackv1)|
|default|Default|Error|[ErrorPayload](#schemaerrorpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## deleteStackV1

<a id="opIddeleteStackV1"></a>

> Code samples

```bash
curl https://grafana.com/api/v1/stacks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/stacks/{idOrSlug}`

<h3 id="deletestackv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrSlug|path|string|true|id of the stack to delete|

> Example responses

> 200 Response

```json
{
  "orgSlug": "orgSlug",
  "deleteProtection": true,
  "name": "name",
  "description": "description",
  "id": 0,
  "region": "region",
  "orgId": 6,
  "slug": "slug",
  "url": "url",
  "labels": {
    "key": "labels"
  }
}
```

> default Response

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

<h3 id="deletestackv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StackV1](#schemastackv1)|
|default|Default|Error|[ErrorPayload](#schemaerrorpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## getStackConnectionsV1

<a id="opIdgetStackConnectionsV1"></a>

> Code samples

```bash
curl https://grafana.com/api/v1/stacks/string/connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/stacks/{idOrSlug}/connections`

<h3 id="getstackconnectionsv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrSlug|path|string|true|id or slug of the stack|

> Example responses

> 200 Response

```json
{
  "tenants": [
    {
      "id": 0,
      "privateConnectivityInfo": {
        "availabilityZoneIds": [
          "availabilityZoneIds",
          "availabilityZoneIds"
        ],
        "regions": [
          "regions",
          "regions"
        ],
        "serviceAttachment": "serviceAttachment",
        "alias": "alias",
        "endpointName": "endpointName",
        "availabilityZones": [
          "availabilityZones",
          "availabilityZones"
        ],
        "domainNames": [
          "domainNames",
          "domainNames"
        ],
        "privateDNS": "privateDNS",
        "serviceName": "serviceName"
      },
      "type": "type",
      "url": "url",
      "allowlistUrl": "allowlistUrl"
    },
    {
      "id": 0,
      "privateConnectivityInfo": {
        "availabilityZoneIds": [
          "availabilityZoneIds",
          "availabilityZoneIds"
        ],
        "regions": [
          "regions",
          "regions"
        ],
        "serviceAttachment": "serviceAttachment",
        "alias": "alias",
        "endpointName": "endpointName",
        "availabilityZones": [
          "availabilityZones",
          "availabilityZones"
        ],
        "domainNames": [
          "domainNames",
          "domainNames"
        ],
        "privateDNS": "privateDNS",
        "serviceName": "serviceName"
      },
      "type": "type",
      "url": "url",
      "allowlistUrl": "allowlistUrl"
    }
  ],
  "appPlatform": {
    "url": "url",
    "caData": "caData"
  },
  "services": {
    "influxUrl": "influxUrl",
    "oncallApiUrl": "oncallApiUrl",
    "syntheticMonitoringApiUrl": "syntheticMonitoringApiUrl"
  },
  "otlp": {
    "multiAZ": true,
    "privateConnectivityInfo": {
      "availabilityZoneIds": [
        "availabilityZoneIds",
        "availabilityZoneIds"
      ],
      "regions": [
        "regions",
        "regions"
      ],
      "serviceAttachment": "serviceAttachment",
      "alias": "alias",
      "endpointName": "endpointName",
      "availabilityZones": [
        "availabilityZones",
        "availabilityZones"
      ],
      "domainNames": [
        "domainNames",
        "domainNames"
      ],
      "privateDNS": "privateDNS",
      "serviceName": "serviceName"
    },
    "url": "url"
  },
  "pdc": {
    "api": {
      "availabilityZoneIds": [
        "availabilityZoneIds",
        "availabilityZoneIds"
      ],
      "regions": [
        "regions",
        "regions"
      ],
      "serviceAttachment": "serviceAttachment",
      "alias": "alias",
      "endpointName": "endpointName",
      "availabilityZones": [
        "availabilityZones",
        "availabilityZones"
      ],
      "domainNames": [
        "domainNames",
        "domainNames"
      ],
      "privateDNS": "privateDNS",
      "serviceName": "serviceName"
    },
    "gateway": {
      "availabilityZoneIds": [
        "availabilityZoneIds",
        "availabilityZoneIds"
      ],
      "regions": [
        "regions",
        "regions"
      ],
      "serviceAttachment": "serviceAttachment",
      "alias": "alias",
      "endpointName": "endpointName",
      "availabilityZones": [
        "availabilityZones",
        "availabilityZones"
      ],
      "domainNames": [
        "domainNames",
        "domainNames"
      ],
      "privateDNS": "privateDNS",
      "serviceName": "serviceName"
    }
  }
}
```

> default Response

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

<h3 id="getstackconnectionsv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StackConnectionsV1](#schemastackconnectionsv1)|
|default|Default|Error|[ErrorPayload](#schemaerrorpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## checkStackReadinessV1

<a id="opIdcheckStackReadinessV1"></a>

> Code samples

```bash
curl https://grafana.com/api/v1/stacks/string/readiness \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/stacks/{idOrSlug}/readiness`

<h3 id="checkstackreadinessv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrSlug|path|string|true|id of the stack to check readiness|

> Example responses

> 200 Response

```json
{
  "ready": true
}
```

> default Response

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

<h3 id="checkstackreadinessv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StackCheckReadinessV1](#schemastackcheckreadinessv1)|
|default|Default|Error|[ErrorPayload](#schemaerrorpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_AccessPoliciesConfig">AccessPoliciesConfig</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspoliciesconfig"></a>
<a id="schema_AccessPoliciesConfig"></a>
<a id="tocSaccesspoliciesconfig"></a>
<a id="tocsaccesspoliciesconfig"></a>

```json
{
  "realms": [
    {
      "identifier": "identifier",
      "type": "org"
    },
    {
      "identifier": "identifier",
      "type": "org"
    }
  ],
  "sets": [
    {
      "name": "name",
      "scopes": [
        "scopes",
        "scopes"
      ]
    },
    {
      "name": "name",
      "scopes": [
        "scopes",
        "scopes"
      ]
    }
  ],
  "scopes": [
    {
      "requiresRealmType": "requiresRealmType",
      "name": "name",
      "description": "description"
    },
    {
      "requiresRealmType": "requiresRealmType",
      "name": "name",
      "description": "description"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|realms|[[realms_inner](#schemarealms_inner)]|true|none|none|
|scopes|[[scopes_inner](#schemascopes_inner)]|true|none|none|
|sets|[[sets_inner](#schemasets_inner)]|true|none|none|

<h2 id="tocS_AccessPolicyListResponse">AccessPolicyListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspolicylistresponse"></a>
<a id="schema_AccessPolicyListResponse"></a>
<a id="tocSaccesspolicylistresponse"></a>
<a id="tocsaccesspolicylistresponse"></a>

```json
{
  "metadata": {
    "pagination": {
      "nextPage": "nextPage",
      "pageSize": 0.8008281904610115,
      "pageCursor": "pageCursor"
    }
  },
  "items": [
    "{}",
    "{}"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|metadata|[metadata](#schemametadata)|true|none|none|

<h2 id="tocS_AuthAccessPolicy">AuthAccessPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccesspolicy"></a>
<a id="schema_AuthAccessPolicy"></a>
<a id="tocSauthaccesspolicy"></a>
<a id="tocsauthaccesspolicy"></a>

```json
{
  "realms": [
    {
      "identifier": "123",
      "labelPolicies": [
        {
          "selector": "{env != \"dev\"}"
        },
        {
          "selector": "{env != \"dev\"}"
        }
      ],
      "type": "stack"
    },
    {
      "identifier": "123",
      "labelPolicies": [
        {
          "selector": "{env != \"dev\"}"
        },
        {
          "selector": "{env != \"dev\"}"
        }
      ],
      "type": "stack"
    }
  ],
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "displayName": "Stack Readers",
  "name": "stack-readers",
  "attributes": {
    "pdcConfiguration": {
      "limitedHosts": [
        "mysql.example.com:3306",
        "mysql.example.com:3306"
      ]
    },
    "lokiQueryPolicy": {
      "queryTimeout": "10s",
      "maxQueryLookback": "30d",
      "maxQueryLength": "7d",
      "maxEntriesLimitPerQuery": 20
    },
    "allowedAudiences": [
      "allowedAudiences",
      "allowedAudiences"
    ],
    "allowedScopes": [
      "metrics:read",
      "logs:read",
      "traces:read",
      "alerts:read"
    ]
  },
  "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "source": "user",
  "scopes": [
    "metrics:read",
    "logs:read",
    "traces:read",
    "alerts:read"
  ],
  "conditions": {
    "allowedSubnets": [
      "AuthAccessPolicy_conditions_allowedSubnets_inner",
      "AuthAccessPolicy_conditions_allowedSubnets_inner"
    ]
  },
  "orgId": "1",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|none|
|orgId|string|false|read-only|none|
|name|string|true|none|none|
|displayName|string|false|none|Will be set to `name` if not provided.|
|source|string|false|none|Source of the Access Policy (requires system token).|
|scopes|[string]|true|none|none|
|realms|[[AuthAccessPolicy_realms_inner](#schemaauthaccesspolicy_realms_inner)]|true|none|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|conditions|[AuthAccessPolicy_conditions](#schemaauthaccesspolicy_conditions)|false|none|A set of criteria that is used to restrict access of the Access Policy and Tokens. Providing an empty object ("{}") results in the complete removal of the `conditions` object.<br>|
|attributes|[AuthAccessPolicy_attributes](#schemaauthaccesspolicy_attributes)|false|none|A set of criteria that can be to the backend service via headers through the gateway, or used to make authentication decisions.<br>|
|status|string|false|none|The status of the access policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|user|
|source|cloud|
|scopes|accesspolicies:read|
|scopes|accesspolicies:write|
|scopes|accesspolicies:delete|
|scopes|billing-metrics:read|
|scopes|metrics:read|
|scopes|metrics:write|
|scopes|metrics:delete|
|scopes|metrics:import|
|scopes|logs:read|
|scopes|logs:write|
|scopes|logs:delete|
|scopes|traces:read|
|scopes|traces:write|
|scopes|traces:delete|
|scopes|alerts:read|
|scopes|alerts:write|
|scopes|rules:read|
|scopes|rules:write|
|status|active|
|status|inactive|

<h2 id="tocS_AuthToken">AuthToken</h2>
<!-- backwards compatibility -->
<a id="schemaauthtoken"></a>
<a id="schema_AuthToken"></a>
<a id="tocSauthtoken"></a>
<a id="tocsauthtoken"></a>

```json
{
  "accessPolicyId": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "firstUsedAt": "2000-01-23T04:56:07.000+00:00",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
  "displayName": "My Token",
  "name": "mytoken",
  "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "expiresAt": "2000-01-23T04:56:07.000+00:00",
  "orgId": "1",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(string)|false|read-only|none|
|accessPolicyId|string(string)|true|none|none|
|name|string|true|none|none|
|displayName|string|false|none|Will be set to `name` if not provided.|
|expiresAt|string(date-time)|false|none|Token does not expire if not provided.|
|firstUsedAt|string(date-time)|false|read-only|none|
|lastUsedAt|string(date-time)|false|read-only|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|orgId|string|false|read-only|none|

<h2 id="tocS_AuthTokenWithSecret">AuthTokenWithSecret</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenwithsecret"></a>
<a id="schema_AuthTokenWithSecret"></a>
<a id="tocSauthtokenwithsecret"></a>
<a id="tocsauthtokenwithsecret"></a>

```json
{
  "accessPolicyId": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "firstUsedAt": "2000-01-23T04:56:07.000+00:00",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
  "displayName": "My Token",
  "name": "mytoken",
  "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
  "expiresAt": "2000-01-23T04:56:07.000+00:00",
  "orgId": "1",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "token": "glc_eyJrIjoiZjI0YzZkNGEwZDBmZmZjMmUzNTU2ODcxMmY0ZWZlNTQ1NTljMDFjOCIsIm4iOiJteXRva2VuIiwiaWQiOjF9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(string)|false|read-only|none|
|accessPolicyId|string(string)|true|none|none|
|name|string|true|none|none|
|displayName|string|false|none|Will be set to `name` if not provided.|
|expiresAt|string(date-time)|false|none|Token does not expire if not provided.|
|firstUsedAt|string(date-time)|false|read-only|none|
|lastUsedAt|string(date-time)|false|read-only|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|orgId|string|false|read-only|none|
|token|string(password)|false|none|This token is auto generated and will be shown only once.|

<h2 id="tocS_BilledUsage">BilledUsage</h2>
<!-- backwards compatibility -->
<a id="schemabilledusage"></a>
<a id="schema_BilledUsage"></a>
<a id="tocSbilledusage"></a>
<a id="tocsbilledusage"></a>

```json
{
  "notes": "notes",
  "description": "description",
  "dimensionName": "dimensionName",
  "amountDue": 1.4658129805029452,
  "orgRates": "",
  "unit": "unit",
  "dimensionId": "agent-generations",
  "totalUsage": 5.637376656633329,
  "id": 0.8008281904610115,
  "usages": [
    {
      "dpm": 1.2315135367772556,
      "ingestUsage": 7.457744773683766,
      "onCallUsage": 1.1730742509559433,
      "stackId": 9.965781217890562,
      "stackName": "stackName",
      "activeUsers": 7.061401241503109,
      "protocolUsage": 4.965218492984954,
      "anonymousUsers": 9.301444243932576,
      "attributedUsage": 2.027123023002322,
      "grafanaUsage": 1.0246457001441578,
      "browserUsage": 4.145608029883936,
      "stackLabels": "{}",
      "attributedCost": 3.616076749251911,
      "credits": [
        {
          "amount": 7.386281948385884,
          "dimensionId": "dimensionId",
          "dimensionName": "dimensionName"
        },
        {
          "amount": 7.386281948385884,
          "dimensionId": "dimensionId",
          "dimensionName": "dimensionName"
        }
      ],
      "queryUsage": 5.025004791520295,
      "incidentUsage": 6.84685269835264,
      "totalUsage": 9.369310271410669,
      "id": 1.4894159098541704,
      "activeSeries": 2.3021358869347655,
      "periodStart": "periodStart",
      "isProrated": true,
      "periodEnd": "periodEnd"
    },
    {
      "dpm": 1.2315135367772556,
      "ingestUsage": 7.457744773683766,
      "onCallUsage": 1.1730742509559433,
      "stackId": 9.965781217890562,
      "stackName": "stackName",
      "activeUsers": 7.061401241503109,
      "protocolUsage": 4.965218492984954,
      "anonymousUsers": 9.301444243932576,
      "attributedUsage": 2.027123023002322,
      "grafanaUsage": 1.0246457001441578,
      "browserUsage": 4.145608029883936,
      "stackLabels": "{}",
      "attributedCost": 3.616076749251911,
      "credits": [
        {
          "amount": 7.386281948385884,
          "dimensionId": "dimensionId",
          "dimensionName": "dimensionName"
        },
        {
          "amount": 7.386281948385884,
          "dimensionId": "dimensionId",
          "dimensionName": "dimensionName"
        }
      ],
      "queryUsage": 5.025004791520295,
      "incidentUsage": 6.84685269835264,
      "totalUsage": 9.369310271410669,
      "id": 1.4894159098541704,
      "activeSeries": 2.3021358869347655,
      "periodStart": "periodStart",
      "isProrated": true,
      "periodEnd": "periodEnd"
    }
  ],
  "includedUsage": 5.962133916683182,
  "periodStart": "periodStart",
  "overage": 6.027456183070403,
  "periodEnd": "periodEnd"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|overage|number|true|none|none|
|description|string|true|none|none|
|notes|string|true|none|none|
|dimensionId|string|true|none|none|
|orgRates|object|true|none|none|
|amountDue|number|true|none|none|
|dimensionName|string|true|none|none|
|includedUsage|number|true|none|none|
|periodEnd|string|true|none|none|
|periodStart|string|true|none|none|
|totalUsage|number|true|none|none|
|unit|string|true|none|none|
|usages|[[usages_inner](#schemausages_inner)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|dimensionId|agent-generations|
|dimensionId|ai-tokens|
|dimensionId|app-o11y|
|dimensionId|assistant|
|dimensionId|db-o11y-hosts|
|dimensionId|fe-o11y|
|dimensionId|ge-instances|
|dimensionId|ge-users|
|dimensionId|hg|
|dimensionId|hg-plugin-users|
|dimensionId|hl|
|dimensionId|hl-process|
|dimensionId|hl-query|
|dimensionId|hl-retention|
|dimensionId|hm|
|dimensionId|hm-graphite|
|dimensionId|hm-query|
|dimensionId|hp|
|dimensionId|hp-process|
|dimensionId|hp-retention|
|dimensionId|ht|
|dimensionId|ht-process|
|dimensionId|ht-retention|
|dimensionId|infra-o11y-containers|
|dimensionId|infra-o11y-hosts|
|dimensionId|irm|
|dimensionId|k6-ip|
|dimensionId|k6-vuh|
|dimensionId|marketplace-plugin-users|
|dimensionId|sm|
|dimensionId|sm-browser|

<h2 id="tocS_ErrorConflict">ErrorConflict</h2>
<!-- backwards compatibility -->
<a id="schemaerrorconflict"></a>
<a id="schema_ErrorConflict"></a>
<a id="tocSerrorconflict"></a>
<a id="tocserrorconflict"></a>

```json
{
  "code": "Conflict",
  "message": "Invalid arguments: wrong or missing parameters"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|code|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|Conflict|

<h2 id="tocS_ErrorForbidden">ErrorForbidden</h2>
<!-- backwards compatibility -->
<a id="schemaerrorforbidden"></a>
<a id="schema_ErrorForbidden"></a>
<a id="tocSerrorforbidden"></a>
<a id="tocserrorforbidden"></a>

```json
{
  "code": "Forbidden",
  "message": "Forbidden"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|code|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|Forbidden|

<h2 id="tocS_ErrorInvalidCredentials">ErrorInvalidCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaerrorinvalidcredentials"></a>
<a id="schema_ErrorInvalidCredentials"></a>
<a id="tocSerrorinvalidcredentials"></a>
<a id="tocserrorinvalidcredentials"></a>

```json
{
  "code": "InvalidCredentials",
  "message": "Login Required or invalid credentials"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|code|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|InvalidCredentials|

<h2 id="tocS_ErrorNotFound">ErrorNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaerrornotfound"></a>
<a id="schema_ErrorNotFound"></a>
<a id="tocSerrornotfound"></a>
<a id="tocserrornotfound"></a>

```json
{
  "code": "NotFound",
  "message": "Element not found"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|code|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|NotFound|

<h2 id="tocS_ErrorServiceUnavailable">ErrorServiceUnavailable</h2>
<!-- backwards compatibility -->
<a id="schemaerrorserviceunavailable"></a>
<a id="schema_ErrorServiceUnavailable"></a>
<a id="tocSerrorserviceunavailable"></a>
<a id="tocserrorserviceunavailable"></a>

```json
{
  "code": "ServiceUnavailable",
  "message": "Service is currently unavailable"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|code|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|ServiceUnavailable|

<h2 id="tocS_FormattedApiInstance">FormattedApiInstance</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiinstance"></a>
<a id="schema_FormattedApiInstance"></a>
<a id="tocSformattedapiinstance"></a>
<a id="tocsformattedapiinstance"></a>

```json
{
  "hmInstancePromName": "hmInstancePromName",
  "hmInstanceGraphiteType": "hmInstanceGraphiteType",
  "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
  "regionSigilUrl": "regionSigilUrl",
  "versionIssueLink": "versionIssueLink",
  "deleteProtection": true,
  "customAuth": true,
  "planName": "planName",
  "hmInstanceGraphiteStatus": "active",
  "type": "grafana",
  "currentActiveEditorUsers": 2.027123023002322,
  "ssl": true,
  "userQuota": 3.0576100241049344,
  "id": 6,
  "stackType": "stackType",
  "plan": "advanced",
  "hlInstanceBillingUsage": 5.025004791520295,
  "agentManagementInstanceStatus": "active",
  "htInstanceClusterId": 5,
  "alertCnt": 0.8008281904610115,
  "datasourceCnts": "{}",
  "hmInstanceGraphiteBillingUsage": 8.762042012749001,
  "version": "version",
  "billingStartDate": "billingStartDate",
  "hmInstancePromClusterId": 6,
  "hlInstanceStatus": "active",
  "labels": "{}",
  "orgCreatedAt": "orgCreatedAt",
  "amInstanceStatus": "active",
  "clusterSlug": "clusterSlug",
  "htInstanceUrl": "htInstanceUrl",
  "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
  "hmInstancePromId": 2,
  "status": "active",
  "htInstanceCurrentUsage": 6.704019297950036,
  "orgId": 8,
  "hmInstanceGraphiteId": 9,
  "clusterName": "clusterName",
  "k6OrgId": 3,
  "currentActiveUsers": 4.145608029883936,
  "hpInstanceUrl": "hpInstanceUrl",
  "dailyAdminCnt": 1.2315135367772556,
  "url": "url",
  "billingOnCallActiveUsers": 7.061401241503109,
  "hmInstancePromUrl": "hmInstancePromUrl",
  "machineLearningLogsToken": "machineLearningLogsToken",
  "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
  "regionStackStateServiceUrl": "regionStackStateServiceUrl",
  "hmInstanceGraphiteClusterId": 6,
  "hpInstanceId": 3,
  "config": "{}",
  "usageStatsId": "usageStatsId",
  "orgSlug": "orgSlug",
  "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
  "regionLLMGatewayUrl": "regionLLMGatewayUrl",
  "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
  "hlInstanceCurrentUsage": 4.965218492984954,
  "dailyViewerCnt": 6.84685269835264,
  "statusUpdatedAt": "statusUpdatedAt",
  "hlInstanceId": 9,
  "agentManagementInstanceUrl": "agentManagementInstanceUrl",
  "agentManagementInstanceName": "agentManagementInstanceName",
  "regionAssistantUrl": "regionAssistantUrl",
  "trial": 3.0205796992916243,
  "createdAt": "createdAt",
  "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
  "runningVersion": "runningVersion",
  "amInstanceId": 1,
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
  "hpInstanceStatus": "active",
  "slug": "slug",
  "updatedAt": "updatedAt",
  "htInstanceBillingUsage": 3.353193347011243,
  "agentManagementInstanceId": 7,
  "orgName": "orgName",
  "updatedBy": "updatedBy",
  "htInstanceName": "htInstanceName",
  "trialExpiresAt": "trialExpiresAt",
  "amInstanceUrl": "amInstanceUrl",
  "billingActiveUsers": 5.637376656633329,
  "billingGrafanaActiveUsers": 2.3021358869347655,
  "hmInstancePromStatus": "active",
  "regionInsightsApiUrl": "regionInsightsApiUrl",
  "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
  "customDomain": true,
  "dailyUserCnt": 1.4894159098541704,
  "amInstanceName": "amInstanceName",
  "dashboardQuota": 1.1730742509559433,
  "regionPublicName": "regionPublicName",
  "billingEndDate": "billingEndDate",
  "name": "name",
  "hlInstanceUrl": "hlInstanceUrl",
  "hlInstanceClusterId": 9,
  "support": true,
  "hpInstanceBillingUsage": 7.058770351582356,
  "description": "description",
  "clusterId": 9,
  "dailyEditorCnt": 1.0246457001441578,
  "alertQuota": 6.027456183070403,
  "machineLearning": 4.652396432933246,
  "currentActiveViewerUsers": 7.386281948385884,
  "hlInstanceName": "hlInstanceName",
  "hmInstanceGraphiteName": "hmInstanceGraphiteName",
  "hpInstanceName": "hpInstanceName",
  "provider": "provider",
  "hmInstancePromBillingUsage": 1.284659006116532,
  "currentActiveAdminUsers": 3.616076749251911,
  "regionAgentO11YUrl": "regionAgentO11YUrl",
  "htInstanceId": 6,
  "regionSlug": "regionSlug",
  "dashboardCnt": 7.457744773683766,
  "htInstanceStatus": "active",
  "agentManagementInstanceClusterId": 5,
  "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
  "hpInstanceCurrentUsage": 0.8851374739011653,
  "providerRegion": "providerRegion",
  "createdBy": "createdBy",
  "regionId": 7,
  "hpInstanceClusterId": 7,
  "amInstanceClusterId": 5,
  "hmInstancePromCurrentUsage": 6.965117697638846,
  "incident": 0.10263654006109402,
  "gateway": "gateway"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertCnt|number|true|none|none|
|alertQuota|number|true|none|none|
|amInstanceGeneratorUrl|string|true|none|none|
|amInstanceGeneratorUrlDatasource|string|true|none|none|
|amInstanceId|integer|true|none|none|
|amInstanceName|string|true|none|none|
|amInstanceStatus|string|true|none|none|
|amInstanceUrl|string|true|none|none|
|amInstanceClusterId|integer|true|none|none|
|billingActiveUsers|number|true|none|none|
|billingEndDate|string \| null|true|none|none|
|billingGrafanaActiveUsers|number|true|none|none|
|billingOnCallActiveUsers|number|true|none|none|
|billingStartDate|string|true|none|none|
|clusterId|integer|true|none|none|
|clusterName|string|true|none|none|
|clusterSlug|string|true|none|none|
|createdAt|string|true|none|none|
|createdBy|string|true|none|none|
|currentActiveAdminUsers|number|true|none|none|
|currentActiveEditorUsers|number|true|none|none|
|currentActiveUsers|number|true|none|none|
|currentActiveViewerUsers|number|true|none|none|
|customAuth|boolean|true|none|none|
|customDomain|boolean|true|none|none|
|dailyAdminCnt|number|true|none|none|
|dailyEditorCnt|number|true|none|none|
|dailyUserCnt|number|true|none|none|
|dailyViewerCnt|number|true|none|none|
|dashboardCnt|number|true|none|none|
|dashboardQuota|number|true|none|none|
|datasourceCnts|object|true|none|none|
|description|string|true|none|none|
|gateway|string|true|none|none|
|hlInstanceCurrentUsage|number|true|none|none|
|hlInstanceBillingUsage|number|true|none|none|
|hlInstanceId|integer|true|none|none|
|hlInstanceName|string|true|none|none|
|hlInstanceStatus|string|true|none|none|
|hlInstanceUrl|string|true|none|none|
|hlInstanceClusterId|integer|true|none|none|
|hmInstanceGraphiteCurrentUsage|number|true|none|none|
|hmInstanceGraphiteBillingUsage|number|true|none|none|
|hmInstanceGraphiteId|integer|true|none|none|
|hmInstanceGraphiteName|string|true|none|none|
|hmInstanceGraphiteStatus|string|true|none|none|
|hmInstanceGraphiteType|string|true|none|none|
|hmInstanceGraphiteUrl|string|true|none|none|
|hmInstancePromClusterId|integer|true|none|none|
|hmInstancePromCurrentActiveSeries|number \| null|true|none|none|
|hmInstancePromCurrentUsage|number|true|none|none|
|hmInstancePromBillingUsage|number|true|none|none|
|hmInstancePromId|integer|true|none|none|
|hmInstancePromName|string|true|none|none|
|hmInstancePromStatus|string|true|none|none|
|hmInstancePromUrl|string|true|none|none|
|hmInstanceGraphiteClusterId|integer|true|none|none|
|htInstanceId|integer|true|none|none|
|htInstanceName|string|true|none|none|
|htInstanceStatus|string|true|none|none|
|htInstanceUrl|string|true|none|none|
|htInstanceClusterId|integer|true|none|none|
|htInstanceCurrentUsage|number|true|none|none|
|htInstanceBillingUsage|number|true|none|none|
|hpInstanceId|integer|true|none|none|
|hpInstanceName|string|true|none|none|
|hpInstanceStatus|string|true|none|none|
|hpInstanceUrl|string|true|none|none|
|hpInstanceClusterId|integer|true|none|none|
|hpInstanceCurrentUsage|number|true|none|none|
|hpInstanceBillingUsage|number|true|none|none|
|id|integer|true|none|none|
|incident|number|true|none|none|
|labels|object|false|none|none|
|machineLearning|number|true|none|none|
|name|string|true|none|none|
|orgId|integer|true|none|none|
|orgName|string|true|none|none|
|orgSlug|string|true|none|none|
|orgCreatedAt|string|true|none|none|
|plan|string|true|none|none|
|planName|string|true|none|none|
|regionId|integer|true|none|none|
|regionSlug|string|true|none|none|
|regionPublicName|string|true|none|none|
|provider|string|true|none|none|
|providerRegion|string|true|none|none|
|runningVersion|string|true|none|none|
|slug|string|true|none|none|
|ssl|boolean|true|none|none|
|status|string|true|none|none|
|support|boolean|true|none|none|
|trial|number|true|none|none|
|trialExpiresAt|string \| null|true|none|none|
|updatedAt|string \| null|true|none|none|
|updatedBy|string \| null|true|none|none|
|statusUpdatedAt|string \| null|false|none|none|
|url|string|true|none|none|
|userQuota|number|true|none|none|
|version|string|true|none|none|
|versionIssueLink|string|false|none|none|
|agentManagementInstanceId|integer|true|none|none|
|agentManagementInstanceUrl|string|true|none|none|
|agentManagementInstanceName|string|true|none|none|
|agentManagementInstanceStatus|string|true|none|none|
|agentManagementInstanceClusterId|integer|true|none|none|
|config|object|false|none|none|
|type|string|true|none|none|
|stackType|string|true|none|none|
|k6OrgId|integer \| null|true|none|none|
|machineLearningLogsToken|string|true|none|none|
|usageStatsId|string|true|none|none|
|regionStackStateServiceUrl|string|true|none|none|
|regionSyntheticMonitoringApiUrl|string|true|none|none|
|regionInsightsApiUrl|string|true|none|none|
|regionIntegrationsApiUrl|string|true|none|none|
|regionHostedExportersApiUrl|string|true|none|none|
|regionMachineLearningApiUrl|string|true|none|none|
|regionLLMGatewayUrl|string|true|none|none|
|regionAssistantUrl|string|true|none|none|
|regionSigilUrl|string|true|none|none|
|regionAgentO11YUrl|string|true|none|none|
|links|[[links_inner](#schemalinks_inner)]|true|none|none|
|deleteProtection|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|amInstanceStatus|active|
|amInstanceStatus|deleted|
|amInstanceStatus|suspended|
|amInstanceStatus|unknown|
|hlInstanceStatus|active|
|hlInstanceStatus|deleted|
|hlInstanceStatus|suspended|
|hlInstanceStatus|unknown|
|hmInstanceGraphiteStatus|active|
|hmInstanceGraphiteStatus|deleted|
|hmInstanceGraphiteStatus|suspended|
|hmInstanceGraphiteStatus|unknown|
|hmInstancePromStatus|active|
|hmInstancePromStatus|deleted|
|hmInstancePromStatus|suspended|
|hmInstancePromStatus|unknown|
|htInstanceStatus|active|
|htInstanceStatus|deleted|
|htInstanceStatus|suspended|
|htInstanceStatus|unknown|
|hpInstanceStatus|active|
|hpInstanceStatus|deleted|
|hpInstanceStatus|suspended|
|hpInstanceStatus|unknown|
|plan|advanced|
|plan|basic|
|plan|basic-prom|
|plan|bundled|
|plan|enterprise|
|plan|fedramp|
|plan|fog|
|plan|free|
|plan|free-trial|
|plan|gcloud|
|plan|logsdemo|
|plan|payg|
|plan|starter|
|plan|starter-prom|
|plan|trial|
|status|active|
|status|archived|
|status|archiving|
|status|deleted|
|status|deleting|
|status|migrated|
|status|migrating|
|status|paused|
|status|pending|
|status|restoring|
|status|starting|
|status|suspended|
|status|suspending|
|status|unknown|
|agentManagementInstanceStatus|active|
|agentManagementInstanceStatus|deleted|
|agentManagementInstanceStatus|suspended|
|agentManagementInstanceStatus|unknown|
|type|grafana|

<h2 id="tocS_FormattedApiInstancePlugin">FormattedApiInstancePlugin</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiinstanceplugin"></a>
<a id="schema_FormattedApiInstancePlugin"></a>
<a id="tocSformattedapiinstanceplugin"></a>
<a id="tocsformattedapiinstanceplugin"></a>

```json
{
  "createdAt": "createdAt",
  "instanceId": 6.027456183070403,
  "pluginSlug": "pluginSlug",
  "pluginName": "pluginName",
  "latestVersion": "latestVersion",
  "pluginId": 1.4658129805029452,
  "instanceSlug": "instanceSlug",
  "links": [
    {
      "rel": "self",
      "href": "href"
    },
    {
      "rel": "self",
      "href": "href"
    }
  ],
  "id": 0.8008281904610115,
  "version": "version",
  "instanceUrl": "instanceUrl",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|instanceId|number|true|none|none|
|instanceUrl|string|true|none|none|
|instanceSlug|string|true|none|none|
|pluginId|number|true|none|none|
|pluginSlug|string|true|none|none|
|pluginName|string|true|none|none|
|version|string|true|none|none|
|latestVersion|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string(date-time)|false|none|none|
|links|[[links_inner_1](#schemalinks_inner_1)]|true|none|none|

<h2 id="tocS_FormattedApiInstanceReadiness">FormattedApiInstanceReadiness</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiinstancereadiness"></a>
<a id="schema_FormattedApiInstanceReadiness"></a>
<a id="tocSformattedapiinstancereadiness"></a>
<a id="tocsformattedapiinstancereadiness"></a>

```json
{
  "ready": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ready|boolean|true|none|none|

<h2 id="tocS_FormattedApiOrgPublic">FormattedApiOrgPublic</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiorgpublic"></a>
<a id="schema_FormattedApiOrgPublic"></a>
<a id="tocSformattedapiorgpublic"></a>
<a id="tocsformattedapiorgpublic"></a>

```json
{
  "grafanaCloud": 3.616076749251911,
  "infraO11YContainersUsage": 2.8841621266687802,
  "subscriptions": {
    "next": "",
    "current": {
      "product": "",
      "endDate": "",
      "payload": "{}",
      "publicName": "",
      "planBillingCycle": "",
      "enterprisePluginsAdded": true,
      "isTrial": true,
      "plan": "",
      "startDate": ""
    }
  },
  "contractType": "contractType",
  "k6IPUsage": 9.018348186070783,
  "trialNoticeDate": "trialNoticeDate",
  "hgCurrentActiveUsers": 1.2315135367772556,
  "createdAt": "createdAt",
  "msaSignedBy": "msaSignedBy",
  "pluginSignatureType": "pluginSignatureType",
  "userQuota": 2.3021358869347655,
  "kapaDeflectorEnabled": true,
  "hmInstanceLimit": 5.962133916683182,
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "id": 0,
  "gcloudMonthlyCost": 4.145608029883936,
  "slug": "slug",
  "updatedAt": "updatedAt",
  "updatedBy": "updatedBy",
  "isStaff": true,
  "resellerName": "resellerName",
  "hgOnCallUsage": 1.4894159098541704,
  "geUsersUsage": 6.778324963048013,
  "trialLengthDays": 3.353193347011243,
  "htUsage": 9.965781217890562,
  "osource": "osource",
  "resellerId": 2.027123023002322,
  "hgGrafanaUsage": 1.0246457001441578,
  "disableTokenExpirationEmails": true,
  "msaSignedAt": "msaSignedAt",
  "smUsage": 6.965117697638846,
  "name": "name",
  "k6VuhUsage": 8.762042012749001,
  "isource": "isource",
  "allowGCloudTrial": true,
  "supportPlan": "supportPlan",
  "appO11YUsage": 3.5571952270680973,
  "geInstancesUsage": 6.878052220127876,
  "wpPlan": "wpPlan",
  "mfaAdminRecoveryOnly": true,
  "privacy": "privacy",
  "checksPerMonth": 6.027456183070403,
  "hlUsage": 4.965218492984954,
  "hgUsage": 7.386281948385884,
  "smBrowserUsage": 5.944895607614016,
  "liveChatEnabled": true,
  "maxTokenExpirationDays": 0.8851374739011653,
  "licenseProducts": [
    "licenseProducts",
    "licenseProducts"
  ],
  "irmUsage": 6.683562403749608,
  "hlInstanceLimit": 5.637376656633329,
  "emergencySupport": true,
  "mfaRequired": true,
  "infraO11YHostsUsage": 1.284659006116532,
  "cancellationDate": "cancellationDate",
  "awsMarketplaceSupport": 6.704019297950036,
  "hgInstanceLimit": 1.4658129805029452,
  "hmCurrentUsage": 7.457744773683766,
  "trialStartDate": "trialStartDate",
  "enterprisePlugins": 9.301444243932576,
  "hlRetentionUsage": 5.025004791520295,
  "reseller": "reseller",
  "avatar": "avatar",
  "retainedStackId": 3,
  "url": "url",
  "contractTypeId": 7.143538047012306,
  "hpUsage": 9.369310271410669,
  "trialEndDate": "trialEndDate",
  "createdBy": "createdBy",
  "hmGraphiteUsage": 1.1730742509559433,
  "hmUsage": 6.84685269835264,
  "creditApproved": 7.061401241503109,
  "feO11YUsage": 6.438423552598547
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|slug|string|true|none|none|
|name|string|true|none|none|
|url|string|true|none|none|
|createdAt|string|true|none|none|
|createdBy|string \| null|true|none|none|
|updatedAt|string \| null|true|none|none|
|updatedBy|string \| null|true|none|none|
|avatar|string \| null|true|none|none|
|isource|string \| null|true|none|none|
|osource|string \| null|true|none|none|
|isStaff|boolean|true|none|none|
|checksPerMonth|number|true|none|none|
|wpPlan|string|true|none|none|
|hgInstanceLimit|number|true|none|none|
|hmInstanceLimit|number|true|none|none|
|hlInstanceLimit|number|true|none|none|
|userQuota|number|true|none|none|
|supportPlan|string|true|none|none|
|creditApproved|number|true|none|none|
|msaSignedAt|string \| null|true|none|none|
|msaSignedBy|string \| null|true|none|none|
|enterprisePlugins|number|true|none|none|
|licenseProducts|[string]|true|none|none|
|grafanaCloud|number|true|none|none|
|privacy|string|true|none|none|
|reseller|string|true|none|none|
|resellerId|number \| null|true|none|none|
|resellerName|string \| null|true|none|none|
|emergencySupport|boolean|true|none|none|
|gcloudMonthlyCost|number|true|none|none|
|hgUsage|number|true|none|none|
|hgCurrentActiveUsers|number|true|none|none|
|hgGrafanaUsage|number|true|none|none|
|hgOnCallUsage|number|true|none|none|
|hmUsage|number|true|none|none|
|hmCurrentUsage|number|true|none|none|
|hmGraphiteUsage|number|true|none|none|
|hlUsage|number|true|none|none|
|hlRetentionUsage|number|true|none|none|
|htUsage|number|true|none|none|
|hpUsage|number|true|none|none|
|irmUsage|number|true|none|none|
|k6VuhUsage|number|true|none|none|
|k6IPUsage|number|true|none|none|
|feO11YUsage|number|true|none|none|
|appO11YUsage|number|true|none|none|
|smUsage|number|true|none|none|
|infraO11YHostsUsage|number|true|none|none|
|infraO11YContainersUsage|number|true|none|none|
|geUsersUsage|number|true|none|none|
|geInstancesUsage|number|true|none|none|
|smBrowserUsage|number|true|none|none|
|awsMarketplaceSupport|number|true|none|none|
|trialStartDate|string \| null|true|none|none|
|trialEndDate|string \| null|true|none|none|
|trialLengthDays|number \| null|true|none|none|
|trialNoticeDate|string \| null|true|none|none|
|cancellationDate|string \| null|true|none|none|
|retainedStackId|integer|true|none|none|
|allowGCloudTrial|[FormattedApiOrgPublic_allowGCloudTrial](#schemaformattedapiorgpublic_allowgcloudtrial)|true|none|none|
|pluginSignatureType|string|true|none|none|
|contractType|string|true|none|none|
|contractTypeId|number|true|none|none|
|liveChatEnabled|boolean|true|none|none|
|kapaDeflectorEnabled|boolean|true|none|none|
|disableTokenExpirationEmails|boolean|true|none|none|
|maxTokenExpirationDays|number|true|none|none|
|mfaRequired|boolean|false|none|none|
|mfaAdminRecoveryOnly|boolean|false|none|none|
|links|[[links_inner](#schemalinks_inner)]|true|none|none|
|subscriptions|[subscriptions](#schemasubscriptions)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|grafanaCloud|0|
|grafanaCloud|1|
|grafanaCloud|11|
|grafanaCloud|2|
|grafanaCloud|31|
|grafanaCloud|4|
|grafanaCloud|41|
|grafanaCloud|6|
|grafanaCloud|9|
|contractTypeId|0|
|contractTypeId|1|
|contractTypeId|2|

<h2 id="tocS_FormattedApiOrgSettings">FormattedApiOrgSettings</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiorgsettings"></a>
<a id="schema_FormattedApiOrgSettings"></a>
<a id="tocSformattedapiorgsettings"></a>
<a id="tocsformattedapiorgsettings"></a>

```json
{
  "aiDataSharingOptOut": true,
  "mfaAdminRecoveryOnly": true,
  "allowedInviteDomains": [
    "allowedInviteDomains",
    "allowedInviteDomains"
  ],
  "maxTokenExpirationDays": 0.8008281904610115,
  "disableTokenExpirationEmails": true,
  "mfaRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aiDataSharingOptOut|boolean \| null|false|none|none|
|disableTokenExpirationEmails|boolean \| null|false|none|none|
|maxTokenExpirationDays|number \| null|false|none|none|
|mfaAdminRecoveryOnly|boolean \| null|false|none|none|
|mfaRequired|boolean \| null|false|none|none|
|allowedInviteDomains|[string]|false|none|none|

<h2 id="tocS_FormattedApiOrgStackRegion">FormattedApiOrgStackRegion</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiorgstackregion"></a>
<a id="schema_FormattedApiOrgStackRegion"></a>
<a id="tocSformattedapiorgstackregion"></a>
<a id="tocsformattedapiorgstackregion"></a>

```json
{
  "createdAt": "createdAt",
  "id": 0.8008281904610115,
  "orgId": 1.4658129805029452,
  "stackRegionId": 6.027456183070403,
  "updatedAt": "updatedAt"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|stackRegionId|number|true|none|none|
|orgId|number|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string \| null|true|none|none|

<h2 id="tocS_FormattedApiPlugin">FormattedApiPlugin</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiplugin"></a>
<a id="schema_FormattedApiPlugin"></a>
<a id="tocSformattedapiplugin"></a>
<a id="tocsformattedapiplugin"></a>

```json
{
  "orgSlug": "orgSlug",
  "licenseUrl": "licenseUrl",
  "documentationUrl": "documentationUrl",
  "featured": 9.301444243932576,
  "internal": true,
  "hasDocumentation": true,
  "datasourceQueryCount": 2.027123023002322,
  "typeName": "typeName",
  "description": "description",
  "versionSignedByOrgName": "versionSignedByOrgName",
  "downloadSlug": "downloadSlug",
  "orgUrl": "orgUrl",
  "versionStatus": "versionStatus",
  "orgId": 5.962133916683182,
  "versionSignedByOrg": "versionSignedByOrg",
  "createdAt": "createdAt",
  "downloads": 7.061401241503109,
  "managed": {
    "strategy": "strategy",
    "enabled": true
  },
  "popularity": 3.616076749251911,
  "json": {
    "$schema": "$schema",
    "hideFromList": true,
    "builtIn": true,
    "enterpriseFeatures": {
      "healthDiagnosticsErrors": true
    },
    "roles": [
      {
        "grants": [
          "grants",
          "grants"
        ],
        "role": {
          "permissions": [
            {
              "scope": "scope",
              "action": "action"
            },
            {
              "scope": "scope",
              "action": "action"
            }
          ],
          "name": "name",
          "description": "description"
        }
      },
      {
        "grants": [
          "grants",
          "grants"
        ],
        "role": {
          "permissions": [
            {
              "scope": "scope",
              "action": "action"
            },
            {
              "scope": "scope",
              "action": "action"
            }
          ],
          "name": "name",
          "description": "description"
        }
      }
    ],
    "annotations": true,
    "buildMode": "buildMode",
    "mixed": true,
    "pascalName": "pascalName",
    "type": "app",
    "preload": true,
    "alerting": true,
    "routes": [
      {
        "reqAction": "reqAction",
        "path": "path",
        "headers": [
          "",
          ""
        ],
        "method": "method",
        "tokenAuth": {
          "scopes": [
            "scopes",
            "scopes"
          ],
          "params": {
            "grant_type": "grant_type",
            "resource": "resource",
            "client_secret": "client_secret",
            "client_id": "client_id"
          },
          "url": "url"
        },
        "jwtTokenAuth": {
          "scopes": [
            "scopes",
            "scopes"
          ],
          "params": {
            "token_uri": "token_uri",
            "client_email": "client_email",
            "private_key": "private_key"
          },
          "url": "url"
        },
        "urlParams": [
          {
            "name": "name",
            "content": "content"
          },
          {
            "name": "name",
            "content": "content"
          }
        ],
        "reqSignedIn": true,
        "reqRole": "reqRole",
        "body": {
          "key": ""
        },
        "url": "url"
      },
      {
        "reqAction": "reqAction",
        "path": "path",
        "headers": [
          "",
          ""
        ],
        "method": "method",
        "tokenAuth": {
          "scopes": [
            "scopes",
            "scopes"
          ],
          "params": {
            "grant_type": "grant_type",
            "resource": "resource",
            "client_secret": "client_secret",
            "client_id": "client_id"
          },
          "url": "url"
        },
        "jwtTokenAuth": {
          "scopes": [
            "scopes",
            "scopes"
          ],
          "params": {
            "token_uri": "token_uri",
            "client_email": "client_email",
            "private_key": "private_key"
          },
          "url": "url"
        },
        "urlParams": [
          {
            "name": "name",
            "content": "content"
          },
          {
            "name": "name",
            "content": "content"
          }
        ],
        "reqSignedIn": true,
        "reqRole": "reqRole",
        "body": {
          "key": ""
        },
        "url": "url"
      }
    ],
    "streaming": true,
    "iam": {
      "permissions": [
        {
          "scope": "scope",
          "action": "action"
        },
        {
          "scope": "scope",
          "action": "action"
        }
      ]
    },
    "backend": true,
    "id": "id",
    "state": "alpha",
    "logs": true,
    "info": {
      "keywords": [
        "keywords",
        "keywords"
      ],
      "build": {
        "number": 7.386281948385884,
        "pr": 1.2315135367772556,
        "build": 1.0246457001441578,
        "repo": "repo",
        "time": 4.145608029883936,
        "branch": "branch",
        "hash": "hash"
      },
      "author": {
        "name": "name",
        "email": "email",
        "url": "url"
      },
      "description": "description",
      "links": [
        {
          "name": "name",
          "url": "url",
          "target": "_blank"
        },
        {
          "name": "name",
          "url": "url",
          "target": "_blank"
        }
      ],
      "logos": {
        "small": "small",
        "large": "large"
      },
      "updated": "updated",
      "version": "version",
      "screenshots": [
        {
          "path": "path",
          "name": "name"
        },
        {
          "path": "path",
          "name": "name"
        }
      ]
    },
    "tracing": true,
    "languages": [
      "languages",
      "languages"
    ],
    "queryOptions": {
      "maxDataPoints": true,
      "cacheTimeout": true,
      "minInterval": true
    },
    "includes": [
      {
        "uid": "uid",
        "path": "path",
        "defaultNav": true,
        "component": "component",
        "role": "Admin",
        "name": "name",
        "icon": "icon",
        "action": "action",
        "type": "dashboard",
        "addToNav": true
      },
      {
        "uid": "uid",
        "path": "path",
        "defaultNav": true,
        "component": "component",
        "role": "Admin",
        "name": "name",
        "icon": "icon",
        "action": "action",
        "type": "dashboard",
        "addToNav": true
      }
    ],
    "executable": "executable",
    "dependencies": {
      "extensions": {
        "exposedComponents": [
          "exposedComponents",
          "exposedComponents"
        ]
      },
      "plugins": [
        {
          "name": "name",
          "id": "id",
          "type": "app"
        },
        {
          "name": "name",
          "id": "id",
          "type": "app"
        }
      ],
      "grafanaVersion": "grafanaVersion",
      "grafanaDependency": "grafanaDependency"
    },
    "skipDataQuery": true,
    "extensions": {
      "addedComponents": [
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        },
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        }
      ],
      "addedFunctions": [
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        },
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        }
      ],
      "extensionPoints": [
        {
          "description": "description",
          "id": "id",
          "title": "title"
        },
        {
          "description": "description",
          "id": "id",
          "title": "title"
        }
      ],
      "addedLinks": [
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        },
        {
          "description": "description",
          "title": "title",
          "targets": [
            "targets",
            "targets"
          ]
        }
      ],
      "exposedComponents": [
        {
          "description": "description",
          "id": "id",
          "title": "title"
        },
        {
          "description": "description",
          "id": "id",
          "title": "title"
        }
      ]
    },
    "docsPath": "docsPath",
    "autoEnabled": true,
    "multiValueFilterOperators": true,
    "name": "name",
    "suggestions": true,
    "metrics": true,
    "category": "category"
  },
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "id": 0.8008281904610115,
  "prices": "{}",
  "slug": "slug",
  "updatedAt": "updatedAt",
  "orgName": "orgName",
  "releaseCountLastYear": 5.637376656633329,
  "versionDistributionType": "versionDistributionType",
  "verified": true,
  "signatureType": "signatureType",
  "packages": "{}",
  "version": "version",
  "userId": 1.4658129805029452,
  "versionSignatureType": "versionSignatureType",
  "url": "url",
  "activeInstances": 2.3021358869347655,
  "typeCode": "typeCode",
  "angularDetected": true,
  "name": "name",
  "typeId": 6.027456183070403,
  "category": "category",
  "status": "status"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|id|number|true|none|none|
|typeId|number|true|none|none|
|typeName|string|true|none|none|
|typeCode|string|true|none|none|
|slug|string|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|version|string|true|none|none|
|versionStatus|string|true|none|none|
|versionSignatureType|string|true|none|none|
|versionDistributionType|string|true|none|none|
|versionSignedByOrg|string|true|none|none|
|versionSignedByOrgName|string|true|none|none|
|userId|number|true|none|none|
|orgId|number|true|none|none|
|orgName|string|true|none|none|
|orgSlug|string|true|none|none|
|orgUrl|string|true|none|none|
|url|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|
|releaseCountLastYear|number|false|none|none|
|activeInstances|number \| null|false|none|none|
|downloads|number|true|none|none|
|verified|boolean|true|none|none|
|featured|number|true|none|none|
|internal|boolean|true|none|none|
|downloadSlug|string|true|none|none|
|popularity|number|true|none|none|
|datasourceQueryCount|number \| null|false|none|none|
|signatureType|string|true|none|none|
|packages|object|true|none|none|
|links|[[links_inner](#schemalinks_inner)]|true|none|none|
|angularDetected|boolean|true|none|none|
|licenseUrl|string|false|none|none|
|documentationUrl|string|false|none|none|
|json|[json](#schemajson)|false|none|The `plugin.json` file is required for all plugins. When Grafana starts, it scans the plugin folders and mounts every folder that contains a `plugin.json` file unless the folder contains a subfolder named `dist`. In that case, Grafana mounts the `dist` folder instead.|
|category|string|false|none|none|
|managed|[managed](#schemamanaged)|false|none|none|
|hasDocumentation|boolean|false|none|none|
|prices|object|false|none|none|

<h2 id="tocS_FormattedApiStackRegion">FormattedApiStackRegion</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapistackregion"></a>
<a id="schema_FormattedApiStackRegion"></a>
<a id="tocSformattedapistackregion"></a>
<a id="tocsformattedapistackregion"></a>

```json
{
  "createdAt": "createdAt",
  "visibility": "visibility",
  "publicName": "publicName",
  "provider": "aws",
  "sortOrder": 6.027456183070403,
  "name": "name",
  "description": "description",
  "id": 0.8008281904610115,
  "slug": "slug",
  "status": "status",
  "updatedAt": "updatedAt"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[FormattedApiStackRegion_anyOf](#schemaformattedapistackregion_anyof)|false|none|none|
|*anyOf*|[FormattedApiStackRegion_anyOf_1](#schemaformattedapistackregion_anyof_1)|false|none|none|

<h2 id="tocS_FormattedOrgMembership">FormattedOrgMembership</h2>
<!-- backwards compatibility -->
<a id="schemaformattedorgmembership"></a>
<a id="schema_FormattedOrgMembership"></a>
<a id="tocSformattedorgmembership"></a>
<a id="tocsformattedorgmembership"></a>

```json
{
  "grafanaCloud": 3.616076749251911,
  "orgSlug": "orgSlug",
  "subscriptions": {
    "next": "",
    "current": {
      "product": "",
      "endDate": "",
      "payload": "{}",
      "publicName": "",
      "planBillingCycle": "",
      "enterprisePluginsAdded": true,
      "isTrial": true,
      "plan": "",
      "startDate": ""
    }
  },
  "role": "Admin",
  "userStatus": "active",
  "hmCurrentPrometheusUsage": 1.0246457001441578,
  "privacy": 2.3021358869347655,
  "grafanaStaffAccess": {
    "publicReason": "publicReason",
    "accessExpiresAt": "2000-01-23T04:56:07.000+00:00",
    "ticketId": 9.369310271410669
  },
  "hlUsage": 7.386281948385884,
  "orgUrl": "orgUrl",
  "orgId": 6,
  "billing": 7.061401241503109,
  "defaultOrg": 5.637376656633329,
  "createdAt": "createdAt",
  "security": 9.301444243932576,
  "hgDatasourceCnts": "hgDatasourceCnts",
  "userLastName": "userLastName",
  "userEmail": "userEmail",
  "mfaEnabled": true,
  "id": 0,
  "extraPermissions": [
    "accesspolicies:write",
    "accesspolicies:write"
  ],
  "updatedAt": "updatedAt",
  "userUsername": "userUsername",
  "updatedBy": "updatedBy",
  "orgName": "orgName",
  "userFirstName": "userFirstName",
  "userName": "userName",
  "userId": 1,
  "contractTypeId": 4.145608029883936,
  "resellerId": 2.027123023002322,
  "hmCurrentGraphiteUsage": 1.2315135367772556,
  "createdBy": "createdBy",
  "allowGCloudTrial": true,
  "marketplaceSubscription": {
    "isLegacy": true,
    "provider": "aws"
  },
  "status": 5.962133916683182
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|orgId|integer|true|none|none|
|userId|integer|true|none|none|
|status|number|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string \| null|true|none|none|
|defaultOrg|number|true|none|none|
|role|string|true|none|none|
|privacy|number|true|none|none|
|billing|number|true|none|none|
|security|number|true|none|none|
|createdBy|string|true|none|none|
|updatedBy|string|true|none|none|
|orgName|string|true|none|none|
|orgSlug|string|true|none|none|
|orgUrl|string|true|none|none|
|grafanaCloud|number|true|none|none|
|resellerId|number \| null|true|none|none|
|contractTypeId|number|true|none|none|
|allowGCloudTrial|[FormattedApiOrgPublic_allowGCloudTrial](#schemaformattedapiorgpublic_allowgcloudtrial)|true|none|none|
|hlUsage|number|true|none|none|
|hmCurrentGraphiteUsage|number|true|none|none|
|hmCurrentPrometheusUsage|number|true|none|none|
|hgDatasourceCnts|string|true|none|none|
|userFirstName|string|true|none|none|
|userLastName|string|true|none|none|
|userUsername|string|true|none|none|
|userStatus|string|false|none|none|
|userEmail|string|true|none|none|
|userName|string|true|none|none|
|subscriptions|[subscriptions](#schemasubscriptions)|true|none|none|
|marketplaceSubscription|[FormattedOrgMembership_marketplaceSubscription](#schemaformattedorgmembership_marketplacesubscription)|true|none|none|
|mfaEnabled|boolean|false|none|none|
|extraPermissions|[string]|false|none|none|
|grafanaStaffAccess|[FormattedOrgMembership_grafanaStaffAccess](#schemaformattedorgmembership_grafanastaffaccess)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|Admin|
|role|Editor|
|role|None|
|role|SSO Access|
|role|Viewer|
|grafanaCloud|0|
|grafanaCloud|1|
|grafanaCloud|11|
|grafanaCloud|2|
|grafanaCloud|31|
|grafanaCloud|4|
|grafanaCloud|41|
|grafanaCloud|6|
|grafanaCloud|9|
|contractTypeId|0|
|contractTypeId|1|
|contractTypeId|2|
|userStatus|active|
|userStatus|deleted|
|userStatus|pending|
|userStatus|unknown|
|extraPermissions|accesspolicies:write|
|extraPermissions|orgs:read|
|extraPermissions|support-ticket-comments:write|
|extraPermissions|support-tickets:read|
|extraPermissions|support-tickets:write|

<h2 id="tocS_GrafanaNewApiKeyResult">GrafanaNewApiKeyResult</h2>
<!-- backwards compatibility -->
<a id="schemagrafananewapikeyresult"></a>
<a id="schema_GrafanaNewApiKeyResult"></a>
<a id="tocSgrafananewapikeyresult"></a>
<a id="tocsgrafananewapikeyresult"></a>

```json
{
  "name": "grafana",
  "id": 1,
  "key": "glsa_yscW25imSKJIuav8zF37RZmnbiDvB05G_fcaaf58a"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|key|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_GrafanaServiceAccountDTO">GrafanaServiceAccountDTO</h2>
<!-- backwards compatibility -->
<a id="schemagrafanaserviceaccountdto"></a>
<a id="schema_GrafanaServiceAccountDTO"></a>
<a id="tocSgrafanaserviceaccountdto"></a>
<a id="tocsgrafanaserviceaccountdto"></a>

```json
{
  "accessControl": {
    "serviceaccounts:delete": true,
    "serviceaccounts:read": true,
    "serviceaccounts:write": true
  },
  "role": "Viewer",
  "isExternal": false,
  "avatarUrl": "/avatar/85ec38023d90823d3e5b43ef35646af9",
  "name": "grafana",
  "tokens": 0,
  "id": 0,
  "isDisabled": false,
  "login": "sa-grafana",
  "orgId": 1
}
```

swagger: model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessControl|object|false|none|none|
|avatarUrl|string|false|none|none|
|id|integer(int64)|false|none|none|
|isDisabled|boolean|false|none|none|
|isExternal|boolean|false|none|none|
|login|string|false|none|none|
|name|string|false|none|none|
|orgId|integer(int64)|false|none|none|
|role|string|false|none|none|
|tokens|integer(int64)|false|none|none|

<h2 id="tocS_GrafanaTokenDTO">GrafanaTokenDTO</h2>
<!-- backwards compatibility -->
<a id="schemagrafanatokendto"></a>
<a id="schema_GrafanaTokenDTO"></a>
<a id="tocSgrafanatokendto"></a>
<a id="tocsgrafanatokendto"></a>

```json
{
  "isRevoked": false,
  "hasExpired": false,
  "lastUsedAt": "2022-03-23T10:31:02Z",
  "created": "2022-03-23T10:31:02Z",
  "name": "grafana",
  "secondsUntilExpiration": 0,
  "expiration": "2022-03-23T10:31:02Z",
  "id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|expiration|string(date-time)|false|none|none|
|hasExpired|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|isRevoked|boolean|false|none|none|
|lastUsedAt|string(date-time)|false|none|none|
|name|string|false|none|none|
|secondsUntilExpiration|number(double)|false|none|none|

<h2 id="tocS_MarketplaceLicenseRenewalResponse">MarketplaceLicenseRenewalResponse</h2>
<!-- backwards compatibility -->
<a id="schemamarketplacelicenserenewalresponse"></a>
<a id="schema_MarketplaceLicenseRenewalResponse"></a>
<a id="tocSmarketplacelicenserenewalresponse"></a>
<a id="tocsmarketplacelicenserenewalresponse"></a>

```json
{
  "token": "token"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|

<h2 id="tocS_OrgBilledUsageHistory">OrgBilledUsageHistory</h2>
<!-- backwards compatibility -->
<a id="schemaorgbilledusagehistory"></a>
<a id="schema_OrgBilledUsageHistory"></a>
<a id="tocSorgbilledusagehistory"></a>
<a id="tocsorgbilledusagehistory"></a>

```json
{
  "$schema": "$schema",
  "items": [
    {
      "month": 0.8008281904610115,
      "year": 6.027456183070403
    },
    {
      "month": 0.8008281904610115,
      "year": 6.027456183070403
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$schema|string|false|none|A URL to the JSON Schema for this object.|
|items|[[items_inner](#schemaitems_inner)]|true|none|none|

<h2 id="tocS_OrgMemberListResponse">OrgMemberListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorgmemberlistresponse"></a>
<a id="schema_OrgMemberListResponse"></a>
<a id="tocSorgmemberlistresponse"></a>
<a id="tocsorgmemberlistresponse"></a>

```json
{
  "cursor": 2.3021358869347655,
  "nextCursor": 7.061401241503109,
  "total": 0.8008281904610115,
  "pages": 6.027456183070403,
  "perPage": 5.962133916683182,
  "orderBy": "orderBy",
  "links": [
    {
      "rel": "rel",
      "href": "href"
    },
    {
      "rel": "rel",
      "href": "href"
    }
  ],
  "page": 1.4658129805029452,
  "totalCount": 5.637376656633329,
  "items": [
    {
      "grafanaCloud": 6.84685269835264,
      "orgSlug": "orgSlug",
      "subscriptions": {
        "next": "",
        "current": {
          "product": "",
          "endDate": "",
          "payload": "{}",
          "publicName": "",
          "planBillingCycle": "",
          "enterprisePluginsAdded": true,
          "isTrial": true,
          "plan": "",
          "startDate": ""
        }
      },
      "role": "Admin",
      "userStatus": "active",
      "hmCurrentPrometheusUsage": 9.965781217890562,
      "privacy": 1.2315135367772556,
      "grafanaStaffAccess": {
        "publicReason": "publicReason",
        "accessExpiresAt": "2000-01-23T04:56:07.000+00:00",
        "ticketId": 9.369310271410669
      },
      "hlUsage": 4.965218492984954,
      "orgUrl": "orgUrl",
      "orgId": 3,
      "billing": 1.0246457001441578,
      "defaultOrg": 7.386281948385884,
      "createdAt": "createdAt",
      "security": 1.4894159098541704,
      "hgDatasourceCnts": "hgDatasourceCnts",
      "userLastName": "userLastName",
      "userEmail": "userEmail",
      "mfaEnabled": true,
      "id": 9,
      "extraPermissions": [
        "accesspolicies:write",
        "accesspolicies:write"
      ],
      "updatedAt": "updatedAt",
      "userUsername": "userUsername",
      "updatedBy": "updatedBy",
      "orgName": "orgName",
      "userFirstName": "userFirstName",
      "userName": "userName",
      "userId": 2,
      "contractTypeId": 1.1730742509559433,
      "resellerId": 7.457744773683766,
      "hmCurrentGraphiteUsage": 5.025004791520295,
      "createdBy": "createdBy",
      "allowGCloudTrial": true,
      "marketplaceSubscription": {
        "isLegacy": true,
        "provider": "aws"
      },
      "status": 4.145608029883936
    },
    {
      "grafanaCloud": 6.84685269835264,
      "orgSlug": "orgSlug",
      "subscriptions": {
        "next": "",
        "current": {
          "product": "",
          "endDate": "",
          "payload": "{}",
          "publicName": "",
          "planBillingCycle": "",
          "enterprisePluginsAdded": true,
          "isTrial": true,
          "plan": "",
          "startDate": ""
        }
      },
      "role": "Admin",
      "userStatus": "active",
      "hmCurrentPrometheusUsage": 9.965781217890562,
      "privacy": 1.2315135367772556,
      "grafanaStaffAccess": {
        "publicReason": "publicReason",
        "accessExpiresAt": "2000-01-23T04:56:07.000+00:00",
        "ticketId": 9.369310271410669
      },
      "hlUsage": 4.965218492984954,
      "orgUrl": "orgUrl",
      "orgId": 3,
      "billing": 1.0246457001441578,
      "defaultOrg": 7.386281948385884,
      "createdAt": "createdAt",
      "security": 1.4894159098541704,
      "hgDatasourceCnts": "hgDatasourceCnts",
      "userLastName": "userLastName",
      "userEmail": "userEmail",
      "mfaEnabled": true,
      "id": 9,
      "extraPermissions": [
        "accesspolicies:write",
        "accesspolicies:write"
      ],
      "updatedAt": "updatedAt",
      "userUsername": "userUsername",
      "updatedBy": "updatedBy",
      "orgName": "orgName",
      "userFirstName": "userFirstName",
      "userName": "userName",
      "userId": 2,
      "contractTypeId": 1.1730742509559433,
      "resellerId": 7.457744773683766,
      "hmCurrentGraphiteUsage": 5.025004791520295,
      "createdBy": "createdBy",
      "allowGCloudTrial": true,
      "marketplaceSubscription": {
        "isLegacy": true,
        "provider": "aws"
      },
      "status": 4.145608029883936
    }
  ],
  "direction": "direction"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|none|
|pages|number|false|none|none|
|page|number|false|none|none|
|perPage|number|false|none|none|
|totalCount|number|false|none|none|
|orderBy|string|false|none|none|
|direction|string|false|none|none|
|cursor|number|false|none|none|
|nextCursor|number|false|none|none|
|items|[[items_inner_1](#schemaitems_inner_1)]|true|none|none|
|links|[[links_inner](#schemalinks_inner)]|true|none|none|

<h2 id="tocS_ServiceAccountSearchResponse">ServiceAccountSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccountsearchresponse"></a>
<a id="schema_ServiceAccountSearchResponse"></a>
<a id="tocSserviceaccountsearchresponse"></a>
<a id="tocsserviceaccountsearchresponse"></a>

```json
{
  "serviceAccounts": [
    {
      "name": "name",
      "id": 6
    },
    {
      "name": "name",
      "id": 6
    }
  ],
  "perPage": 5.962133916683182,
  "page": 1.4658129805029452,
  "totalCount": 0.8008281904610115
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalCount|number|true|none|none|
|serviceAccounts|[[serviceAccounts_inner](#schemaserviceaccounts_inner)]|true|none|none|
|page|number|true|none|none|
|perPage|number|true|none|none|

<h2 id="tocS_APIListResponseStackRegionV1">APIListResponseStackRegionV1</h2>
<!-- backwards compatibility -->
<a id="schemaapilistresponsestackregionv1"></a>
<a id="schema_APIListResponseStackRegionV1"></a>
<a id="tocSapilistresponsestackregionv1"></a>
<a id="tocsapilistresponsestackregionv1"></a>

```json
{
  "items": [
    {
      "description": "string",
      "id": 0,
      "name": "string",
      "provider": "string",
      "publicName": "string",
      "slug": "string",
      "visibility": "public"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[StackRegionV1](#schemastackregionv1)]|true|none|none|

<h2 id="tocS_BasicPrivateConnectivityInfo">BasicPrivateConnectivityInfo</h2>
<!-- backwards compatibility -->
<a id="schemabasicprivateconnectivityinfo"></a>
<a id="schema_BasicPrivateConnectivityInfo"></a>
<a id="tocSbasicprivateconnectivityinfo"></a>
<a id="tocsbasicprivateconnectivityinfo"></a>

```json
{
  "availabilityZoneIds": [
    "availabilityZoneIds",
    "availabilityZoneIds"
  ],
  "regions": [
    "regions",
    "regions"
  ],
  "serviceAttachment": "serviceAttachment",
  "alias": "alias",
  "endpointName": "endpointName",
  "availabilityZones": [
    "availabilityZones",
    "availabilityZones"
  ],
  "domainNames": [
    "domainNames",
    "domainNames"
  ],
  "privateDNS": "privateDNS",
  "serviceName": "serviceName"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|none|
|availabilityZoneIds|[string]|false|none|none|
|availabilityZones|[string]|false|none|none|
|domainNames|[string]|false|none|none|
|endpointName|string|false|none|none|
|privateDNS|string|false|none|none|
|regions|[string]|false|none|none|
|serviceAttachment|string|false|none|none|
|serviceName|string|false|none|none|

<h2 id="tocS_ErrorPayload">ErrorPayload</h2>
<!-- backwards compatibility -->
<a id="schemaerrorpayload"></a>
<a id="schema_ErrorPayload"></a>
<a id="tocSerrorpayload"></a>
<a id="tocserrorpayload"></a>

```json
{
  "code": "code",
  "requestId": "requestId",
  "message": "message",
  "statusCode": 6
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|requestId|string|true|none|none|
|statusCode|integer(int64)|true|none|none|

<h2 id="tocS_FormattedApiInstanceConnections">FormattedApiInstanceConnections</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiinstanceconnections"></a>
<a id="schema_FormattedApiInstanceConnections"></a>
<a id="tocSformattedapiinstanceconnections"></a>
<a id="tocsformattedapiinstanceconnections"></a>

```json
{
  "otlpHttpUrl": "otlpHttpUrl",
  "influxUrl": "influxUrl",
  "oncallApiUrl": "oncallApiUrl",
  "appPlatform": {
    "url": "url",
    "caData": "caData"
  },
  "syntheticMonitoringApiUrl": "syntheticMonitoringApiUrl",
  "otlpMultiAZ": true,
  "privateConnectivityInfo": {
    "tenants": [
      {
        "ipAllowListCNAME": "ipAllowListCNAME",
        "id": 0,
        "type": "type",
        "allowlistUrl": "allowlistUrl",
        "info": {
          "availabilityZoneIds": [
            "availabilityZoneIds",
            "availabilityZoneIds"
          ],
          "regions": [
            "regions",
            "regions"
          ],
          "serviceAttachment": "serviceAttachment",
          "alias": "alias",
          "endpointName": "endpointName",
          "availabilityZones": [
            "availabilityZones",
            "availabilityZones"
          ],
          "domainNames": [
            "domainNames",
            "domainNames"
          ],
          "privateDNS": "privateDNS",
          "serviceName": "serviceName"
        }
      },
      {
        "ipAllowListCNAME": "ipAllowListCNAME",
        "id": 0,
        "type": "type",
        "allowlistUrl": "allowlistUrl",
        "info": {
          "availabilityZoneIds": [
            "availabilityZoneIds",
            "availabilityZoneIds"
          ],
          "regions": [
            "regions",
            "regions"
          ],
          "serviceAttachment": "serviceAttachment",
          "alias": "alias",
          "endpointName": "endpointName",
          "availabilityZones": [
            "availabilityZones",
            "availabilityZones"
          ],
          "domainNames": [
            "domainNames",
            "domainNames"
          ],
          "privateDNS": "privateDNS",
          "serviceName": "serviceName"
        }
      }
    ],
    "otlp": {
      "availabilityZoneIds": [
        "availabilityZoneIds",
        "availabilityZoneIds"
      ],
      "regions": [
        "regions",
        "regions"
      ],
      "serviceAttachment": "serviceAttachment",
      "alias": "alias",
      "endpointName": "endpointName",
      "availabilityZones": [
        "availabilityZones",
        "availabilityZones"
      ],
      "domainNames": [
        "domainNames",
        "domainNames"
      ],
      "privateDNS": "privateDNS",
      "serviceName": "serviceName"
    },
    "pdc": {
      "api": {
        "availabilityZoneIds": [
          "availabilityZoneIds",
          "availabilityZoneIds"
        ],
        "regions": [
          "regions",
          "regions"
        ],
        "serviceAttachment": "serviceAttachment",
        "alias": "alias",
        "endpointName": "endpointName",
        "availabilityZones": [
          "availabilityZones",
          "availabilityZones"
        ],
        "domainNames": [
          "domainNames",
          "domainNames"
        ],
        "privateDNS": "privateDNS",
        "serviceName": "serviceName"
      },
      "gateway": {
        "availabilityZoneIds": [
          "availabilityZoneIds",
          "availabilityZoneIds"
        ],
        "regions": [
          "regions",
          "regions"
        ],
        "serviceAttachment": "serviceAttachment",
        "alias": "alias",
        "endpointName": "endpointName",
        "availabilityZones": [
          "availabilityZones",
          "availabilityZones"
        ],
        "domainNames": [
          "domainNames",
          "domainNames"
        ],
        "privateDNS": "privateDNS",
        "serviceName": "serviceName"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appPlatform|[StackConnectionAppPlatformV1](#schemastackconnectionappplatformv1)|false|none|none|
|influxUrl|string|false|none|none|
|oncallApiUrl|string|false|none|none|
|otlpHttpUrl|string \| null|true|none|none|
|otlpMultiAZ|boolean|true|none|none|
|privateConnectivityInfo|[FormattedApiInstancePrivateConnectivityInfo](#schemaformattedapiinstanceprivateconnectivityinfo)|true|none|none|
|syntheticMonitoringApiUrl|string|false|none|none|

<h2 id="tocS_FormattedApiInstancePrivateConnectivityInfo">FormattedApiInstancePrivateConnectivityInfo</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiinstanceprivateconnectivityinfo"></a>
<a id="schema_FormattedApiInstancePrivateConnectivityInfo"></a>
<a id="tocSformattedapiinstanceprivateconnectivityinfo"></a>
<a id="tocsformattedapiinstanceprivateconnectivityinfo"></a>

```json
{
  "tenants": [
    {
      "ipAllowListCNAME": "ipAllowListCNAME",
      "id": 0,
      "type": "type",
      "allowlistUrl": "allowlistUrl",
      "info": {
        "availabilityZoneIds": [
          "availabilityZoneIds",
          "availabilityZoneIds"
        ],
        "regions": [
          "regions",
          "regions"
        ],
        "serviceAttachment": "serviceAttachment",
        "alias": "alias",
        "endpointName": "endpointName",
        "availabilityZones": [
          "availabilityZones",
          "availabilityZones"
        ],
        "domainNames": [
          "domainNames",
          "domainNames"
        ],
        "privateDNS": "privateDNS",
        "serviceName": "serviceName"
      }
    },
    {
      "ipAllowListCNAME": "ipAllowListCNAME",
      "id": 0,
      "type": "type",
      "allowlistUrl": "allowlistUrl",
      "info": {
        "availabilityZoneIds": [
          "availabilityZoneIds",
          "availabilityZoneIds"
        ],
        "regions": [
          "regions",
          "regions"
        ],
        "serviceAttachment": "serviceAttachment",
        "alias": "alias",
        "endpointName": "endpointName",
        "availabilityZones": [
          "availabilityZones",
          "availabilityZones"
        ],
        "domainNames": [
          "domainNames",
          "domainNames"
        ],
        "privateDNS": "privateDNS",
        "serviceName": "serviceName"
      }
    }
  ],
  "otlp": {
    "availabilityZoneIds": [
      "availabilityZoneIds",
      "availabilityZoneIds"
    ],
    "regions": [
      "regions",
      "regions"
    ],
    "serviceAttachment": "serviceAttachment",
    "alias": "alias",
    "endpointName": "endpointName",
    "availabilityZones": [
      "availabilityZones",
      "availabilityZones"
    ],
    "domainNames": [
      "domainNames",
      "domainNames"
    ],
    "privateDNS": "privateDNS",
    "serviceName": "serviceName"
  },
  "pdc": {
    "api": {
      "availabilityZoneIds": [
        "availabilityZoneIds",
        "availabilityZoneIds"
      ],
      "regions": [
        "regions",
        "regions"
      ],
      "serviceAttachment": "serviceAttachment",
      "alias": "alias",
      "endpointName": "endpointName",
      "availabilityZones": [
        "availabilityZones",
        "availabilityZones"
      ],
      "domainNames": [
        "domainNames",
        "domainNames"
      ],
      "privateDNS": "privateDNS",
      "serviceName": "serviceName"
    },
    "gateway": {
      "availabilityZoneIds": [
        "availabilityZoneIds",
        "availabilityZoneIds"
      ],
      "regions": [
        "regions",
        "regions"
      ],
      "serviceAttachment": "serviceAttachment",
      "alias": "alias",
      "endpointName": "endpointName",
      "availabilityZones": [
        "availabilityZones",
        "availabilityZones"
      ],
      "domainNames": [
        "domainNames",
        "domainNames"
      ],
      "privateDNS": "privateDNS",
      "serviceName": "serviceName"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otlp|[BasicPrivateConnectivityInfo](#schemabasicprivateconnectivityinfo)|false|none|none|
|pdc|[StackConnectionPdcV1](#schemastackconnectionpdcv1)|false|none|none|
|tenants|[[InstanceConnectionTenant](#schemainstanceconnectiontenant)]|true|none|none|

<h2 id="tocS_InstanceConnectionTenant">InstanceConnectionTenant</h2>
<!-- backwards compatibility -->
<a id="schemainstanceconnectiontenant"></a>
<a id="schema_InstanceConnectionTenant"></a>
<a id="tocSinstanceconnectiontenant"></a>
<a id="tocsinstanceconnectiontenant"></a>

```json
{
  "ipAllowListCNAME": "ipAllowListCNAME",
  "id": 0,
  "type": "type",
  "allowlistUrl": "allowlistUrl",
  "info": {
    "availabilityZoneIds": [
      "availabilityZoneIds",
      "availabilityZoneIds"
    ],
    "regions": [
      "regions",
      "regions"
    ],
    "serviceAttachment": "serviceAttachment",
    "alias": "alias",
    "endpointName": "endpointName",
    "availabilityZones": [
      "availabilityZones",
      "availabilityZones"
    ],
    "domainNames": [
      "domainNames",
      "domainNames"
    ],
    "privateDNS": "privateDNS",
    "serviceName": "serviceName"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowlistUrl|string|false|none|Allowlist API endpoint|
|id|integer(int64)|true|none|tenant id|
|info|[BasicPrivateConnectivityInfo](#schemabasicprivateconnectivityinfo)|false|none|none|
|ipAllowListCNAME|string \| null|true|none|IP allow list CNAME|
|type|string|true|none|tenant type|

<h2 id="tocS_InstanceUser">InstanceUser</h2>
<!-- backwards compatibility -->
<a id="schemainstanceuser"></a>
<a id="schema_InstanceUser"></a>
<a id="tocSinstanceuser"></a>
<a id="tocsinstanceuser"></a>

```json
{
  "lastSeenAt": "lastSeenAt",
  "createdAt": "createdAt",
  "role": "role",
  "name": "name",
  "id": 0,
  "login": "login",
  "email": "email",
  "isServiceAccount": true,
  "updatedAt": "updatedAt"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string|true|none|when the user was created|
|email|string|true|none|email of the user|
|id|integer(int64)|true|none|id of the user|
|isServiceAccount|boolean|true|none|whether the user is a service account|
|lastSeenAt|string \| null|true|none|when the user was last seen, null if never|
|login|string|true|none|login/username of the user|
|name|string|true|none|full name of the user|
|role|string|true|none|role of the user on the instance|
|updatedAt|string|true|none|when the user was last updated|

<h2 id="tocS_InstanceUsersResponse">InstanceUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemainstanceusersresponse"></a>
<a id="schema_InstanceUsersResponse"></a>
<a id="tocSinstanceusersresponse"></a>
<a id="tocsinstanceusersresponse"></a>

```json
{
  "items": [
    {
      "lastSeenAt": "lastSeenAt",
      "createdAt": "createdAt",
      "role": "role",
      "name": "name",
      "id": 0,
      "login": "login",
      "email": "email",
      "isServiceAccount": true,
      "updatedAt": "updatedAt"
    },
    {
      "lastSeenAt": "lastSeenAt",
      "createdAt": "createdAt",
      "role": "role",
      "name": "name",
      "id": 0,
      "login": "login",
      "email": "email",
      "isServiceAccount": true,
      "updatedAt": "updatedAt"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[InstanceUser](#schemainstanceuser)]|true|none|the instance's users|

<h2 id="tocS_PaginatedResponseStackV1">PaginatedResponseStackV1</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponsestackv1"></a>
<a id="schema_PaginatedResponseStackV1"></a>
<a id="tocSpaginatedresponsestackv1"></a>
<a id="tocspaginatedresponsestackv1"></a>

```json
{
  "total": 2,
  "pages": 5,
  "pageSize": 5,
  "page": 1,
  "items": [
    {
      "orgSlug": "orgSlug",
      "deleteProtection": true,
      "name": "name",
      "description": "description",
      "id": 0,
      "region": "region",
      "orgId": 6,
      "slug": "slug",
      "url": "url",
      "labels": {
        "key": "labels"
      }
    },
    {
      "orgSlug": "orgSlug",
      "deleteProtection": true,
      "name": "name",
      "description": "description",
      "id": 0,
      "region": "region",
      "orgId": 6,
      "slug": "slug",
      "url": "url",
      "labels": {
        "key": "labels"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[StackV1](#schemastackv1)]|true|none|items requested for the current page|
|page|integer(int64)|true|none|index of the current page (starting on 1)|
|pageSize|integer(int64)|true|none|applied page size|
|pages|integer(int64)|true|none|number of pages|
|total|integer(int64)|true|none|total of amount of items matching the request|

<h2 id="tocS_StackCheckReadinessV1">StackCheckReadinessV1</h2>
<!-- backwards compatibility -->
<a id="schemastackcheckreadinessv1"></a>
<a id="schema_StackCheckReadinessV1"></a>
<a id="tocSstackcheckreadinessv1"></a>
<a id="tocsstackcheckreadinessv1"></a>

```json
{
  "ready": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ready|boolean|true|none|true if the stack can be used already, false otherwise|

<h2 id="tocS_StackCheckRequestV1">StackCheckRequestV1</h2>
<!-- backwards compatibility -->
<a id="schemastackcheckrequestv1"></a>
<a id="schema_StackCheckRequestV1"></a>
<a id="tocSstackcheckrequestv1"></a>
<a id="tocsstackcheckrequestv1"></a>

```json
{
  "org": "org",
  "url": "url"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org|string|false|none|org owning the stack|
|url|string|true|none|url for the stack|

<h2 id="tocS_StackCheckV1">StackCheckV1</h2>
<!-- backwards compatibility -->
<a id="schemastackcheckv1"></a>
<a id="schema_StackCheckV1"></a>
<a id="tocSstackcheckv1"></a>
<a id="tocsstackcheckv1"></a>

```json
{
  "slug": "slug",
  "url": "url"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|slug of the stack|
|url|string|true|none|url for the stack|

<h2 id="tocS_StackConnectionAppPlatformV1">StackConnectionAppPlatformV1</h2>
<!-- backwards compatibility -->
<a id="schemastackconnectionappplatformv1"></a>
<a id="schema_StackConnectionAppPlatformV1"></a>
<a id="tocSstackconnectionappplatformv1"></a>
<a id="tocsstackconnectionappplatformv1"></a>

```json
{
  "url": "url",
  "caData": "caData"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caData|string|false|none|none|
|url|string|true|none|none|

<h2 id="tocS_StackConnectionOtlpV1">StackConnectionOtlpV1</h2>
<!-- backwards compatibility -->
<a id="schemastackconnectionotlpv1"></a>
<a id="schema_StackConnectionOtlpV1"></a>
<a id="tocSstackconnectionotlpv1"></a>
<a id="tocsstackconnectionotlpv1"></a>

```json
{
  "multiAZ": true,
  "privateConnectivityInfo": {
    "availabilityZoneIds": [
      "availabilityZoneIds",
      "availabilityZoneIds"
    ],
    "regions": [
      "regions",
      "regions"
    ],
    "serviceAttachment": "serviceAttachment",
    "alias": "alias",
    "endpointName": "endpointName",
    "availabilityZones": [
      "availabilityZones",
      "availabilityZones"
    ],
    "domainNames": [
      "domainNames",
      "domainNames"
    ],
    "privateDNS": "privateDNS",
    "serviceName": "serviceName"
  },
  "url": "url"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|multiAZ|boolean|true|none|whether OTLP is multi-AZ|
|privateConnectivityInfo|[BasicPrivateConnectivityInfo](#schemabasicprivateconnectivityinfo)|false|none|none|
|url|string|false|none|OTLP HTTP endpoint URL|

<h2 id="tocS_StackConnectionPdcV1">StackConnectionPdcV1</h2>
<!-- backwards compatibility -->
<a id="schemastackconnectionpdcv1"></a>
<a id="schema_StackConnectionPdcV1"></a>
<a id="tocSstackconnectionpdcv1"></a>
<a id="tocsstackconnectionpdcv1"></a>

```json
{
  "api": {
    "availabilityZoneIds": [
      "availabilityZoneIds",
      "availabilityZoneIds"
    ],
    "regions": [
      "regions",
      "regions"
    ],
    "serviceAttachment": "serviceAttachment",
    "alias": "alias",
    "endpointName": "endpointName",
    "availabilityZones": [
      "availabilityZones",
      "availabilityZones"
    ],
    "domainNames": [
      "domainNames",
      "domainNames"
    ],
    "privateDNS": "privateDNS",
    "serviceName": "serviceName"
  },
  "gateway": {
    "availabilityZoneIds": [
      "availabilityZoneIds",
      "availabilityZoneIds"
    ],
    "regions": [
      "regions",
      "regions"
    ],
    "serviceAttachment": "serviceAttachment",
    "alias": "alias",
    "endpointName": "endpointName",
    "availabilityZones": [
      "availabilityZones",
      "availabilityZones"
    ],
    "domainNames": [
      "domainNames",
      "domainNames"
    ],
    "privateDNS": "privateDNS",
    "serviceName": "serviceName"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|[BasicPrivateConnectivityInfo](#schemabasicprivateconnectivityinfo)|true|none|none|
|gateway|[BasicPrivateConnectivityInfo](#schemabasicprivateconnectivityinfo)|true|none|none|

<h2 id="tocS_StackConnectionServicesV1">StackConnectionServicesV1</h2>
<!-- backwards compatibility -->
<a id="schemastackconnectionservicesv1"></a>
<a id="schema_StackConnectionServicesV1"></a>
<a id="tocSstackconnectionservicesv1"></a>
<a id="tocsstackconnectionservicesv1"></a>

```json
{
  "influxUrl": "influxUrl",
  "oncallApiUrl": "oncallApiUrl",
  "syntheticMonitoringApiUrl": "syntheticMonitoringApiUrl"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|influxUrl|string|false|none|none|
|oncallApiUrl|string|false|none|none|
|syntheticMonitoringApiUrl|string|false|none|none|

<h2 id="tocS_StackConnectionTenantV1">StackConnectionTenantV1</h2>
<!-- backwards compatibility -->
<a id="schemastackconnectiontenantv1"></a>
<a id="schema_StackConnectionTenantV1"></a>
<a id="tocSstackconnectiontenantv1"></a>
<a id="tocsstackconnectiontenantv1"></a>

```json
{
  "id": 0,
  "privateConnectivityInfo": {
    "availabilityZoneIds": [
      "availabilityZoneIds",
      "availabilityZoneIds"
    ],
    "regions": [
      "regions",
      "regions"
    ],
    "serviceAttachment": "serviceAttachment",
    "alias": "alias",
    "endpointName": "endpointName",
    "availabilityZones": [
      "availabilityZones",
      "availabilityZones"
    ],
    "domainNames": [
      "domainNames",
      "domainNames"
    ],
    "privateDNS": "privateDNS",
    "serviceName": "serviceName"
  },
  "type": "type",
  "url": "url",
  "allowlistUrl": "allowlistUrl"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowlistUrl|string|false|none|Allowlist API endpoint|
|id|integer(int64)|true|none|tenant id|
|privateConnectivityInfo|[BasicPrivateConnectivityInfo](#schemabasicprivateconnectivityinfo)|false|none|none|
|type|string|true|none|tenant type|
|url|string|false|none|URL for the tenant|

<h2 id="tocS_StackConnectionsV1">StackConnectionsV1</h2>
<!-- backwards compatibility -->
<a id="schemastackconnectionsv1"></a>
<a id="schema_StackConnectionsV1"></a>
<a id="tocSstackconnectionsv1"></a>
<a id="tocsstackconnectionsv1"></a>

```json
{
  "tenants": [
    {
      "id": 0,
      "privateConnectivityInfo": {
        "availabilityZoneIds": [
          "availabilityZoneIds",
          "availabilityZoneIds"
        ],
        "regions": [
          "regions",
          "regions"
        ],
        "serviceAttachment": "serviceAttachment",
        "alias": "alias",
        "endpointName": "endpointName",
        "availabilityZones": [
          "availabilityZones",
          "availabilityZones"
        ],
        "domainNames": [
          "domainNames",
          "domainNames"
        ],
        "privateDNS": "privateDNS",
        "serviceName": "serviceName"
      },
      "type": "type",
      "url": "url",
      "allowlistUrl": "allowlistUrl"
    },
    {
      "id": 0,
      "privateConnectivityInfo": {
        "availabilityZoneIds": [
          "availabilityZoneIds",
          "availabilityZoneIds"
        ],
        "regions": [
          "regions",
          "regions"
        ],
        "serviceAttachment": "serviceAttachment",
        "alias": "alias",
        "endpointName": "endpointName",
        "availabilityZones": [
          "availabilityZones",
          "availabilityZones"
        ],
        "domainNames": [
          "domainNames",
          "domainNames"
        ],
        "privateDNS": "privateDNS",
        "serviceName": "serviceName"
      },
      "type": "type",
      "url": "url",
      "allowlistUrl": "allowlistUrl"
    }
  ],
  "appPlatform": {
    "url": "url",
    "caData": "caData"
  },
  "services": {
    "influxUrl": "influxUrl",
    "oncallApiUrl": "oncallApiUrl",
    "syntheticMonitoringApiUrl": "syntheticMonitoringApiUrl"
  },
  "otlp": {
    "multiAZ": true,
    "privateConnectivityInfo": {
      "availabilityZoneIds": [
        "availabilityZoneIds",
        "availabilityZoneIds"
      ],
      "regions": [
        "regions",
        "regions"
      ],
      "serviceAttachment": "serviceAttachment",
      "alias": "alias",
      "endpointName": "endpointName",
      "availabilityZones": [
        "availabilityZones",
        "availabilityZones"
      ],
      "domainNames": [
        "domainNames",
        "domainNames"
      ],
      "privateDNS": "privateDNS",
      "serviceName": "serviceName"
    },
    "url": "url"
  },
  "pdc": {
    "api": {
      "availabilityZoneIds": [
        "availabilityZoneIds",
        "availabilityZoneIds"
      ],
      "regions": [
        "regions",
        "regions"
      ],
      "serviceAttachment": "serviceAttachment",
      "alias": "alias",
      "endpointName": "endpointName",
      "availabilityZones": [
        "availabilityZones",
        "availabilityZones"
      ],
      "domainNames": [
        "domainNames",
        "domainNames"
      ],
      "privateDNS": "privateDNS",
      "serviceName": "serviceName"
    },
    "gateway": {
      "availabilityZoneIds": [
        "availabilityZoneIds",
        "availabilityZoneIds"
      ],
      "regions": [
        "regions",
        "regions"
      ],
      "serviceAttachment": "serviceAttachment",
      "alias": "alias",
      "endpointName": "endpointName",
      "availabilityZones": [
        "availabilityZones",
        "availabilityZones"
      ],
      "domainNames": [
        "domainNames",
        "domainNames"
      ],
      "privateDNS": "privateDNS",
      "serviceName": "serviceName"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appPlatform|[StackConnectionAppPlatformV1](#schemastackconnectionappplatformv1)|false|none|none|
|otlp|[StackConnectionOtlpV1](#schemastackconnectionotlpv1)|false|none|none|
|pdc|[StackConnectionPdcV1](#schemastackconnectionpdcv1)|false|none|none|
|services|[StackConnectionServicesV1](#schemastackconnectionservicesv1)|false|none|none|
|tenants|[[StackConnectionTenantV1](#schemastackconnectiontenantv1)]|true|none|none|

<h2 id="tocS_StackCreateRequestV1">StackCreateRequestV1</h2>
<!-- backwards compatibility -->
<a id="schemastackcreaterequestv1"></a>
<a id="schema_StackCreateRequestV1"></a>
<a id="tocSstackcreaterequestv1"></a>
<a id="tocsstackcreaterequestv1"></a>

```json
{
  "org": "org",
  "plugins": [
    "plugins",
    "plugins"
  ],
  "deleteProtection": true,
  "name": "name",
  "description": "description",
  "region": "region",
  "stackType": "cloud",
  "slug": "slug",
  "url": "url",
  "labels": {
    "key": "labels"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteProtection|boolean \| null|false|none|protection active or not for the stack|
|description|string \| null|false|none|description of the stack|
|labels|object|false|none|labels to add to the stack|
|name|string|true|none|of the stack|
|org|string|true|none|org owning the stack|
|plugins|[string]|false|none|plugins to install to the stack|
|region|string|true|none|region of the stack|
|slug|string|true|none|slug of the stack|
|stackType|string|false|none|type of the stack|
|url|string \| null|false|none|url for the stack|

<h2 id="tocS_StackRegionV1">StackRegionV1</h2>
<!-- backwards compatibility -->
<a id="schemastackregionv1"></a>
<a id="schema_StackRegionV1"></a>
<a id="tocSstackregionv1"></a>
<a id="tocsstackregionv1"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "provider": "string",
  "publicName": "string",
  "slug": "string",
  "visibility": "public"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|true|none|none|
|id|integer(int64)|true|none|id of the region|
|name|string|true|none|none|
|provider|string|true|none|none|
|publicName|string \| null|true|none|none|
|slug|string|true|none|slug of the region|
|visibility|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|public|
|visibility|private|
|visibility|customer-restricted|

<h2 id="tocS_StackUpdateRequestV1">StackUpdateRequestV1</h2>
<!-- backwards compatibility -->
<a id="schemastackupdaterequestv1"></a>
<a id="schema_StackUpdateRequestV1"></a>
<a id="tocSstackupdaterequestv1"></a>
<a id="tocsstackupdaterequestv1"></a>

```json
{
  "deleteProtection": true,
  "name": "name",
  "description": "description",
  "slug": "slug",
  "url": "url",
  "labels": {
    "key": "labels"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteProtection|boolean \| null|false|none|protection active or not for the stack|
|description|string \| null|false|none|description of the stack|
|labels|object|false|none|labels to add to the stack|
|name|string \| null|false|none|of the stack|
|slug|string \| null|false|none|slug of the stack|
|url|string \| null|false|none|url for the stack|

<h2 id="tocS_StackV1">StackV1</h2>
<!-- backwards compatibility -->
<a id="schemastackv1"></a>
<a id="schema_StackV1"></a>
<a id="tocSstackv1"></a>
<a id="tocsstackv1"></a>

```json
{
  "orgSlug": "orgSlug",
  "deleteProtection": true,
  "name": "name",
  "description": "description",
  "id": 0,
  "region": "region",
  "orgId": 6,
  "slug": "slug",
  "url": "url",
  "labels": {
    "key": "labels"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteProtection|boolean|true|none|protection active or not for the stack|
|description|string \| null|true|none|description of the stack|
|id|integer(int64)|true|none|id of the stack|
|labels|object|true|none|labels to add to the stack|
|name|string|true|none|of the stack|
|orgId|integer(int64)|true|none|id of the org|
|orgSlug|string|true|none|org owning the stack|
|region|string|true|none|region of the stack|
|slug|string|true|none|slug of the stack|
|url|string|true|none|url for the stack|

<h2 id="tocS_FormattedApiApiKey">FormattedApiApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiapikey"></a>
<a id="schema_FormattedApiApiKey"></a>
<a id="tocSformattedapiapikey"></a>
<a id="tocsformattedapiapikey"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[FormattedApiApiKey_id](#schemaformattedapiapikey_id)|false|none|none|

<h2 id="tocS_FormattedApiApiKeyListResponse">FormattedApiApiKeyListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiapikeylistresponse"></a>
<a id="schema_FormattedApiApiKeyListResponse"></a>
<a id="tocSformattedapiapikeylistresponse"></a>
<a id="tocsformattedapiapikeylistresponse"></a>

```json
{
  "items": [
    {
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[FormattedApiApiKeyListResponse_items_inner](#schemaformattedapiapikeylistresponse_items_inner)]|false|none|none|

<h2 id="tocS_getInstances_200_response">getInstances_200_response</h2>
<!-- backwards compatibility -->
<a id="schemagetinstances_200_response"></a>
<a id="schema_getInstances_200_response"></a>
<a id="tocSgetinstances_200_response"></a>
<a id="tocsgetinstances_200_response"></a>

```json
{
  "total": 4.078845849666752,
  "pages": 0.2025324113236393,
  "orderBy": "orderBy",
  "pageSize": 6.628464275087742,
  "page": 4.258773108174356,
  "items": [
    {
      "hmInstancePromName": "hmInstancePromName",
      "hmInstanceGraphiteType": "hmInstanceGraphiteType",
      "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
      "regionSigilUrl": "regionSigilUrl",
      "versionIssueLink": "versionIssueLink",
      "deleteProtection": true,
      "customAuth": true,
      "planName": "planName",
      "hmInstanceGraphiteStatus": "active",
      "type": "grafana",
      "currentActiveEditorUsers": 2.027123023002322,
      "ssl": true,
      "userQuota": 3.0576100241049344,
      "id": 6,
      "stackType": "stackType",
      "plan": "advanced",
      "hlInstanceBillingUsage": 5.025004791520295,
      "agentManagementInstanceStatus": "active",
      "htInstanceClusterId": 5,
      "alertCnt": 0.8008281904610115,
      "datasourceCnts": "{}",
      "hmInstanceGraphiteBillingUsage": 8.762042012749001,
      "version": "version",
      "billingStartDate": "billingStartDate",
      "hmInstancePromClusterId": 6,
      "hlInstanceStatus": "active",
      "labels": "{}",
      "orgCreatedAt": "orgCreatedAt",
      "amInstanceStatus": "active",
      "clusterSlug": "clusterSlug",
      "htInstanceUrl": "htInstanceUrl",
      "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
      "hmInstancePromId": 2,
      "status": "active",
      "htInstanceCurrentUsage": 6.704019297950036,
      "orgId": 8,
      "hmInstanceGraphiteId": 9,
      "clusterName": "clusterName",
      "k6OrgId": 3,
      "currentActiveUsers": 4.145608029883936,
      "hpInstanceUrl": "hpInstanceUrl",
      "dailyAdminCnt": 1.2315135367772556,
      "url": "url",
      "billingOnCallActiveUsers": 7.061401241503109,
      "hmInstancePromUrl": "hmInstancePromUrl",
      "machineLearningLogsToken": "machineLearningLogsToken",
      "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
      "regionStackStateServiceUrl": "regionStackStateServiceUrl",
      "hmInstanceGraphiteClusterId": 6,
      "hpInstanceId": 3,
      "config": "{}",
      "usageStatsId": "usageStatsId",
      "orgSlug": "orgSlug",
      "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
      "regionLLMGatewayUrl": "regionLLMGatewayUrl",
      "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
      "hlInstanceCurrentUsage": 4.965218492984954,
      "dailyViewerCnt": 6.84685269835264,
      "statusUpdatedAt": "statusUpdatedAt",
      "hlInstanceId": 9,
      "agentManagementInstanceUrl": "agentManagementInstanceUrl",
      "agentManagementInstanceName": "agentManagementInstanceName",
      "regionAssistantUrl": "regionAssistantUrl",
      "trial": 3.0205796992916243,
      "createdAt": "createdAt",
      "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
      "runningVersion": "runningVersion",
      "amInstanceId": 1,
      "links": [
        {
          "rel": "rel",
          "href": "href"
        },
        {
          "rel": "rel",
          "href": "href"
        }
      ],
      "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
      "hpInstanceStatus": "active",
      "slug": "slug",
      "updatedAt": "updatedAt",
      "htInstanceBillingUsage": 3.353193347011243,
      "agentManagementInstanceId": 7,
      "orgName": "orgName",
      "updatedBy": "updatedBy",
      "htInstanceName": "htInstanceName",
      "trialExpiresAt": "trialExpiresAt",
      "amInstanceUrl": "amInstanceUrl",
      "billingActiveUsers": 5.637376656633329,
      "billingGrafanaActiveUsers": 2.3021358869347655,
      "hmInstancePromStatus": "active",
      "regionInsightsApiUrl": "regionInsightsApiUrl",
      "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
      "customDomain": true,
      "dailyUserCnt": 1.4894159098541704,
      "amInstanceName": "amInstanceName",
      "dashboardQuota": 1.1730742509559433,
      "regionPublicName": "regionPublicName",
      "billingEndDate": "billingEndDate",
      "name": "name",
      "hlInstanceUrl": "hlInstanceUrl",
      "hlInstanceClusterId": 9,
      "support": true,
      "hpInstanceBillingUsage": 7.058770351582356,
      "description": "description",
      "clusterId": 9,
      "dailyEditorCnt": 1.0246457001441578,
      "alertQuota": 6.027456183070403,
      "machineLearning": 4.652396432933246,
      "currentActiveViewerUsers": 7.386281948385884,
      "hlInstanceName": "hlInstanceName",
      "hmInstanceGraphiteName": "hmInstanceGraphiteName",
      "hpInstanceName": "hpInstanceName",
      "provider": "provider",
      "hmInstancePromBillingUsage": 1.284659006116532,
      "currentActiveAdminUsers": 3.616076749251911,
      "regionAgentO11YUrl": "regionAgentO11YUrl",
      "htInstanceId": 6,
      "regionSlug": "regionSlug",
      "dashboardCnt": 7.457744773683766,
      "htInstanceStatus": "active",
      "agentManagementInstanceClusterId": 5,
      "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
      "hpInstanceCurrentUsage": 0.8851374739011653,
      "providerRegion": "providerRegion",
      "createdBy": "createdBy",
      "regionId": 7,
      "hpInstanceClusterId": 7,
      "amInstanceClusterId": 5,
      "hmInstancePromCurrentUsage": 6.965117697638846,
      "incident": 0.10263654006109402,
      "gateway": "gateway"
    },
    {
      "hmInstancePromName": "hmInstancePromName",
      "hmInstanceGraphiteType": "hmInstanceGraphiteType",
      "regionMachineLearningApiUrl": "regionMachineLearningApiUrl",
      "regionSigilUrl": "regionSigilUrl",
      "versionIssueLink": "versionIssueLink",
      "deleteProtection": true,
      "customAuth": true,
      "planName": "planName",
      "hmInstanceGraphiteStatus": "active",
      "type": "grafana",
      "currentActiveEditorUsers": 2.027123023002322,
      "ssl": true,
      "userQuota": 3.0576100241049344,
      "id": 6,
      "stackType": "stackType",
      "plan": "advanced",
      "hlInstanceBillingUsage": 5.025004791520295,
      "agentManagementInstanceStatus": "active",
      "htInstanceClusterId": 5,
      "alertCnt": 0.8008281904610115,
      "datasourceCnts": "{}",
      "hmInstanceGraphiteBillingUsage": 8.762042012749001,
      "version": "version",
      "billingStartDate": "billingStartDate",
      "hmInstancePromClusterId": 6,
      "hlInstanceStatus": "active",
      "labels": "{}",
      "orgCreatedAt": "orgCreatedAt",
      "amInstanceStatus": "active",
      "clusterSlug": "clusterSlug",
      "htInstanceUrl": "htInstanceUrl",
      "regionIntegrationsApiUrl": "regionIntegrationsApiUrl",
      "hmInstancePromId": 2,
      "status": "active",
      "htInstanceCurrentUsage": 6.704019297950036,
      "orgId": 8,
      "hmInstanceGraphiteId": 9,
      "clusterName": "clusterName",
      "k6OrgId": 3,
      "currentActiveUsers": 4.145608029883936,
      "hpInstanceUrl": "hpInstanceUrl",
      "dailyAdminCnt": 1.2315135367772556,
      "url": "url",
      "billingOnCallActiveUsers": 7.061401241503109,
      "hmInstancePromUrl": "hmInstancePromUrl",
      "machineLearningLogsToken": "machineLearningLogsToken",
      "regionSyntheticMonitoringApiUrl": "regionSyntheticMonitoringApiUrl",
      "regionStackStateServiceUrl": "regionStackStateServiceUrl",
      "hmInstanceGraphiteClusterId": 6,
      "hpInstanceId": 3,
      "config": "{}",
      "usageStatsId": "usageStatsId",
      "orgSlug": "orgSlug",
      "amInstanceGeneratorUrlDatasource": "amInstanceGeneratorUrlDatasource",
      "regionLLMGatewayUrl": "regionLLMGatewayUrl",
      "hmInstanceGraphiteCurrentUsage": 6.683562403749608,
      "hlInstanceCurrentUsage": 4.965218492984954,
      "dailyViewerCnt": 6.84685269835264,
      "statusUpdatedAt": "statusUpdatedAt",
      "hlInstanceId": 9,
      "agentManagementInstanceUrl": "agentManagementInstanceUrl",
      "agentManagementInstanceName": "agentManagementInstanceName",
      "regionAssistantUrl": "regionAssistantUrl",
      "trial": 3.0205796992916243,
      "createdAt": "createdAt",
      "hmInstancePromCurrentActiveSeries": 3.5571952270680973,
      "runningVersion": "runningVersion",
      "amInstanceId": 1,
      "links": [
        {
          "rel": "rel",
          "href": "href"
        },
        {
          "rel": "rel",
          "href": "href"
        }
      ],
      "amInstanceGeneratorUrl": "amInstanceGeneratorUrl",
      "hpInstanceStatus": "active",
      "slug": "slug",
      "updatedAt": "updatedAt",
      "htInstanceBillingUsage": 3.353193347011243,
      "agentManagementInstanceId": 7,
      "orgName": "orgName",
      "updatedBy": "updatedBy",
      "htInstanceName": "htInstanceName",
      "trialExpiresAt": "trialExpiresAt",
      "amInstanceUrl": "amInstanceUrl",
      "billingActiveUsers": 5.637376656633329,
      "billingGrafanaActiveUsers": 2.3021358869347655,
      "hmInstancePromStatus": "active",
      "regionInsightsApiUrl": "regionInsightsApiUrl",
      "regionHostedExportersApiUrl": "regionHostedExportersApiUrl",
      "customDomain": true,
      "dailyUserCnt": 1.4894159098541704,
      "amInstanceName": "amInstanceName",
      "dashboardQuota": 1.1730742509559433,
      "regionPublicName": "regionPublicName",
      "billingEndDate": "billingEndDate",
      "name": "name",
      "hlInstanceUrl": "hlInstanceUrl",
      "hlInstanceClusterId": 9,
      "support": true,
      "hpInstanceBillingUsage": 7.058770351582356,
      "description": "description",
      "clusterId": 9,
      "dailyEditorCnt": 1.0246457001441578,
      "alertQuota": 6.027456183070403,
      "machineLearning": 4.652396432933246,
      "currentActiveViewerUsers": 7.386281948385884,
      "hlInstanceName": "hlInstanceName",
      "hmInstanceGraphiteName": "hmInstanceGraphiteName",
      "hpInstanceName": "hpInstanceName",
      "provider": "provider",
      "hmInstancePromBillingUsage": 1.284659006116532,
      "currentActiveAdminUsers": 3.616076749251911,
      "regionAgentO11YUrl": "regionAgentO11YUrl",
      "htInstanceId": 6,
      "regionSlug": "regionSlug",
      "dashboardCnt": 7.457744773683766,
      "htInstanceStatus": "active",
      "agentManagementInstanceClusterId": 5,
      "hmInstanceGraphiteUrl": "hmInstanceGraphiteUrl",
      "hpInstanceCurrentUsage": 0.8851374739011653,
      "providerRegion": "providerRegion",
      "createdBy": "createdBy",
      "regionId": 7,
      "hpInstanceClusterId": 7,
      "amInstanceClusterId": 5,
      "hmInstancePromCurrentUsage": 6.965117697638846,
      "incident": 0.10263654006109402,
      "gateway": "gateway"
    }
  ],
  "direction": "asc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[FormattedApiInstance](#schemaformattedapiinstance)]|true|none|none|
|orderBy|string|true|none|none|
|direction|string|true|none|none|
|total|number|true|none|none|
|pages|number|true|none|none|
|pageSize|number|true|none|none|
|page|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|asc|
|direction|desc|

<h2 id="tocS_postInstances_request">postInstances_request</h2>
<!-- backwards compatibility -->
<a id="schemapostinstances_request"></a>
<a id="schema_postInstances_request"></a>
<a id="tocSpostinstances_request"></a>
<a id="tocspostinstances_request"></a>

```json
{
  "adminUserInstance": true,
  "alerts": true,
  "cluster": "string",
  "deleteProtection": false,
  "description": "string",
  "graphite": true,
  "hlInstanceId": 0,
  "hosted": true,
  "issueLink": "string",
  "k6OrgId": 0,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logs": true,
  "name": "string",
  "org": "string",
  "plan": "free",
  "plugins": [
    "string"
  ],
  "prometheus": true,
  "publicInstance": true,
  "reasonType": "bug",
  "region": "string",
  "slug": "string",
  "stackType": "cloud",
  "url": "string",
  "usernameOrEmail": "string",
  "version": "string",
  "waitForReadiness": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminUserInstance|boolean|false|none|none|
|alerts|boolean|false|none|none|
|cluster|string|false|none|none|
|deleteProtection|boolean|false|none|none|
|description|string|false|none|none|
|graphite|boolean|false|none|none|
|hlInstanceId|integer|false|none|none|
|hosted|boolean|false|none|none|
|issueLink|string|false|none|none|
|k6OrgId|integer|false|none|none|
|labels|object|false|none|none|
|logs|boolean|false|none|none|
|name|string|true|none|none|
|org|string|false|none|none|
|plan|string|false|none|none|
|plugins|[string]|false|none|none|
|prometheus|boolean|false|none|none|
|publicInstance|boolean|false|none|none|
|reasonType|string|false|none|none|
|region|string|false|none|none|
|slug|string|false|none|none|
|stackType|string|false|none|none|
|url|string|false|none|none|
|usernameOrEmail|string|false|none|none|
|version|string|false|none|none|
|waitForReadiness|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|plan|free|
|plan|free-trial|
|plan|gcloud|
|plan|enterprise|
|plan|advanced|
|plan|payg|
|plan|fedramp|
|plan|trial|
|plan|logsdemo|
|plan|starter|
|plan|starter-prom|
|plan|basic|
|plan|basic-prom|
|plan|bundled|
|plan|fog|
|reasonType|bug|
|reasonType|securityVulnerability|
|reasonType|customerUpgradeShy|
|reasonType|customerBreaksUseCase|
|reasonType|customerRequest|
|reasonType|other|

<h2 id="tocS_postInstance_request">postInstance_request</h2>
<!-- backwards compatibility -->
<a id="schemapostinstance_request"></a>
<a id="schema_postInstance_request"></a>
<a id="tocSpostinstance_request"></a>
<a id="tocspostinstance_request"></a>

```json
{
  "alerts": true,
  "deleteProtection": true,
  "description": "string",
  "graphite": true,
  "hlInstanceId": 0,
  "issueLink": "string",
  "k6OrgId": 0,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logs": true,
  "name": "string",
  "plan": "free",
  "prometheus": true,
  "reasonType": "bug",
  "slug": "string",
  "url": "string",
  "version": "string",
  "waitForReadiness": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|boolean|false|none|none|
|deleteProtection|boolean|false|none|none|
|description|string|false|none|none|
|graphite|boolean|false|none|none|
|hlInstanceId|integer|false|none|none|
|issueLink|string|false|none|none|
|k6OrgId|integer \| null|false|none|none|
|labels|object|false|none|none|
|logs|boolean|false|none|none|
|name|string|false|none|none|
|plan|string|false|none|none|
|prometheus|boolean|false|none|none|
|reasonType|string|false|none|none|
|slug|string|false|none|none|
|url|string|false|none|none|
|version|string|false|none|none|
|waitForReadiness|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|plan|free|
|plan|free-trial|
|plan|gcloud|
|plan|enterprise|
|plan|advanced|
|plan|payg|
|plan|fedramp|
|plan|trial|
|plan|logsdemo|
|plan|starter|
|plan|starter-prom|
|plan|basic|
|plan|basic-prom|
|plan|bundled|
|plan|fog|
|reasonType|bug|
|reasonType|securityVulnerability|
|reasonType|customerUpgradeShy|
|reasonType|customerBreaksUseCase|
|reasonType|customerRequest|
|reasonType|other|

<h2 id="tocS_postInstanceServiceAccounts_request">postInstanceServiceAccounts_request</h2>
<!-- backwards compatibility -->
<a id="schemapostinstanceserviceaccounts_request"></a>
<a id="schema_postInstanceServiceAccounts_request"></a>
<a id="tocSpostinstanceserviceaccounts_request"></a>
<a id="tocspostinstanceserviceaccounts_request"></a>

```json
{
  "isDisabled": true,
  "name": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isDisabled|boolean|false|none|none|
|name|string|true|none|none|
|role|string|true|none|none|

<h2 id="tocS_postInstanceServiceAccountTokens_request">postInstanceServiceAccountTokens_request</h2>
<!-- backwards compatibility -->
<a id="schemapostinstanceserviceaccounttokens_request"></a>
<a id="schema_postInstanceServiceAccountTokens_request"></a>
<a id="tocSpostinstanceserviceaccounttokens_request"></a>
<a id="tocspostinstanceserviceaccounttokens_request"></a>

```json
{
  "name": "string",
  "secondsToLive": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|secondsToLive|integer|false|none|none|

<h2 id="tocS_getInstancePlugins_200_response">getInstancePlugins_200_response</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceplugins_200_response"></a>
<a id="schema_getInstancePlugins_200_response"></a>
<a id="tocSgetinstanceplugins_200_response"></a>
<a id="tocsgetinstanceplugins_200_response"></a>

```json
{
  "total": 5.962133916683182,
  "pages": 5.637376656633329,
  "orderBy": "orderBy",
  "pageSize": 2.3021358869347655,
  "page": 7.061401241503109,
  "items": [
    {
      "createdAt": "createdAt",
      "instanceId": 6.027456183070403,
      "pluginSlug": "pluginSlug",
      "pluginName": "pluginName",
      "latestVersion": "latestVersion",
      "pluginId": 1.4658129805029452,
      "instanceSlug": "instanceSlug",
      "links": [
        {
          "rel": "self",
          "href": "href"
        },
        {
          "rel": "self",
          "href": "href"
        }
      ],
      "id": 0.8008281904610115,
      "version": "version",
      "instanceUrl": "instanceUrl",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    },
    {
      "createdAt": "createdAt",
      "instanceId": 6.027456183070403,
      "pluginSlug": "pluginSlug",
      "pluginName": "pluginName",
      "latestVersion": "latestVersion",
      "pluginId": 1.4658129805029452,
      "instanceSlug": "instanceSlug",
      "links": [
        {
          "rel": "self",
          "href": "href"
        },
        {
          "rel": "self",
          "href": "href"
        }
      ],
      "id": 0.8008281904610115,
      "version": "version",
      "instanceUrl": "instanceUrl",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    }
  ],
  "direction": "asc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[FormattedApiInstancePlugin](#schemaformattedapiinstanceplugin)]|true|none|none|
|orderBy|string|true|none|none|
|direction|string|true|none|none|
|total|number|true|none|none|
|pages|number|true|none|none|
|pageSize|number|true|none|none|
|page|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|asc|
|direction|desc|

<h2 id="tocS_postInstancePlugins_request">postInstancePlugins_request</h2>
<!-- backwards compatibility -->
<a id="schemapostinstanceplugins_request"></a>
<a id="schema_postInstancePlugins_request"></a>
<a id="tocSpostinstanceplugins_request"></a>
<a id="tocspostinstanceplugins_request"></a>

```json
{
  "noRestart": true,
  "plugin": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|noRestart|boolean|false|none|none|
|plugin|string|true|none|none|
|version|string|false|none|none|

<h2 id="tocS_postInstancePlugin_request">postInstancePlugin_request</h2>
<!-- backwards compatibility -->
<a id="schemapostinstanceplugin_request"></a>
<a id="schema_postInstancePlugin_request"></a>
<a id="tocSpostinstanceplugin_request"></a>
<a id="tocspostinstanceplugin_request"></a>

```json
{
  "noRestart": true,
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|noRestart|boolean|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_getOrgStackRegions_200_response">getOrgStackRegions_200_response</h2>
<!-- backwards compatibility -->
<a id="schemagetorgstackregions_200_response"></a>
<a id="schema_getOrgStackRegions_200_response"></a>
<a id="tocSgetorgstackregions_200_response"></a>
<a id="tocsgetorgstackregions_200_response"></a>

```json
{
  "total": 5.962133916683182,
  "pages": 5.637376656633329,
  "orderBy": "orderBy",
  "pageSize": 2.3021358869347655,
  "page": 7.061401241503109,
  "items": [
    {
      "createdAt": "createdAt",
      "id": 0.8008281904610115,
      "orgId": 1.4658129805029452,
      "stackRegionId": 6.027456183070403,
      "updatedAt": "updatedAt"
    },
    {
      "createdAt": "createdAt",
      "id": 0.8008281904610115,
      "orgId": 1.4658129805029452,
      "stackRegionId": 6.027456183070403,
      "updatedAt": "updatedAt"
    }
  ],
  "direction": "asc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[FormattedApiOrgStackRegion](#schemaformattedapiorgstackregion)]|true|none|none|
|orderBy|string|true|none|none|
|direction|string|true|none|none|
|total|number|true|none|none|
|pages|number|true|none|none|
|pageSize|number|true|none|none|
|page|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|asc|
|direction|desc|

<h2 id="tocS_getOrgBilledUsage_200_response">getOrgBilledUsage_200_response</h2>
<!-- backwards compatibility -->
<a id="schemagetorgbilledusage_200_response"></a>
<a id="schema_getOrgBilledUsage_200_response"></a>
<a id="tocSgetorgbilledusage_200_response"></a>
<a id="tocsgetorgbilledusage_200_response"></a>

```json
{
  "total": 6.683562403749608,
  "pages": 8.762042012749001,
  "orderBy": "orderBy",
  "pageSize": 9.018348186070783,
  "page": 6.438423552598547,
  "items": [
    {
      "notes": "notes",
      "description": "description",
      "dimensionName": "dimensionName",
      "amountDue": 1.4658129805029452,
      "orgRates": "",
      "unit": "unit",
      "dimensionId": "agent-generations",
      "totalUsage": 5.637376656633329,
      "id": 0.8008281904610115,
      "usages": [
        {
          "dpm": 1.2315135367772556,
          "ingestUsage": 7.457744773683766,
          "onCallUsage": 1.1730742509559433,
          "stackId": 9.965781217890562,
          "stackName": "stackName",
          "activeUsers": 7.061401241503109,
          "protocolUsage": 4.965218492984954,
          "anonymousUsers": 9.301444243932576,
          "attributedUsage": 2.027123023002322,
          "grafanaUsage": 1.0246457001441578,
          "browserUsage": 4.145608029883936,
          "stackLabels": "{}",
          "attributedCost": 3.616076749251911,
          "credits": [
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            },
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            }
          ],
          "queryUsage": 5.025004791520295,
          "incidentUsage": 6.84685269835264,
          "totalUsage": 9.369310271410669,
          "id": 1.4894159098541704,
          "activeSeries": 2.3021358869347655,
          "periodStart": "periodStart",
          "isProrated": true,
          "periodEnd": "periodEnd"
        },
        {
          "dpm": 1.2315135367772556,
          "ingestUsage": 7.457744773683766,
          "onCallUsage": 1.1730742509559433,
          "stackId": 9.965781217890562,
          "stackName": "stackName",
          "activeUsers": 7.061401241503109,
          "protocolUsage": 4.965218492984954,
          "anonymousUsers": 9.301444243932576,
          "attributedUsage": 2.027123023002322,
          "grafanaUsage": 1.0246457001441578,
          "browserUsage": 4.145608029883936,
          "stackLabels": "{}",
          "attributedCost": 3.616076749251911,
          "credits": [
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            },
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            }
          ],
          "queryUsage": 5.025004791520295,
          "incidentUsage": 6.84685269835264,
          "totalUsage": 9.369310271410669,
          "id": 1.4894159098541704,
          "activeSeries": 2.3021358869347655,
          "periodStart": "periodStart",
          "isProrated": true,
          "periodEnd": "periodEnd"
        }
      ],
      "includedUsage": 5.962133916683182,
      "periodStart": "periodStart",
      "overage": 6.027456183070403,
      "periodEnd": "periodEnd"
    },
    {
      "notes": "notes",
      "description": "description",
      "dimensionName": "dimensionName",
      "amountDue": 1.4658129805029452,
      "orgRates": "",
      "unit": "unit",
      "dimensionId": "agent-generations",
      "totalUsage": 5.637376656633329,
      "id": 0.8008281904610115,
      "usages": [
        {
          "dpm": 1.2315135367772556,
          "ingestUsage": 7.457744773683766,
          "onCallUsage": 1.1730742509559433,
          "stackId": 9.965781217890562,
          "stackName": "stackName",
          "activeUsers": 7.061401241503109,
          "protocolUsage": 4.965218492984954,
          "anonymousUsers": 9.301444243932576,
          "attributedUsage": 2.027123023002322,
          "grafanaUsage": 1.0246457001441578,
          "browserUsage": 4.145608029883936,
          "stackLabels": "{}",
          "attributedCost": 3.616076749251911,
          "credits": [
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            },
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            }
          ],
          "queryUsage": 5.025004791520295,
          "incidentUsage": 6.84685269835264,
          "totalUsage": 9.369310271410669,
          "id": 1.4894159098541704,
          "activeSeries": 2.3021358869347655,
          "periodStart": "periodStart",
          "isProrated": true,
          "periodEnd": "periodEnd"
        },
        {
          "dpm": 1.2315135367772556,
          "ingestUsage": 7.457744773683766,
          "onCallUsage": 1.1730742509559433,
          "stackId": 9.965781217890562,
          "stackName": "stackName",
          "activeUsers": 7.061401241503109,
          "protocolUsage": 4.965218492984954,
          "anonymousUsers": 9.301444243932576,
          "attributedUsage": 2.027123023002322,
          "grafanaUsage": 1.0246457001441578,
          "browserUsage": 4.145608029883936,
          "stackLabels": "{}",
          "attributedCost": 3.616076749251911,
          "credits": [
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            },
            {
              "amount": 7.386281948385884,
              "dimensionId": "dimensionId",
              "dimensionName": "dimensionName"
            }
          ],
          "queryUsage": 5.025004791520295,
          "incidentUsage": 6.84685269835264,
          "totalUsage": 9.369310271410669,
          "id": 1.4894159098541704,
          "activeSeries": 2.3021358869347655,
          "periodStart": "periodStart",
          "isProrated": true,
          "periodEnd": "periodEnd"
        }
      ],
      "includedUsage": 5.962133916683182,
      "periodStart": "periodStart",
      "overage": 6.027456183070403,
      "periodEnd": "periodEnd"
    }
  ],
  "direction": "asc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[BilledUsage](#schemabilledusage)]|true|none|none|
|orderBy|string|true|none|none|
|direction|string|true|none|none|
|total|number|true|none|none|
|pages|number|true|none|none|
|pageSize|number|true|none|none|
|page|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|asc|
|direction|desc|

<h2 id="tocS_postOrgMembers_request">postOrgMembers_request</h2>
<!-- backwards compatibility -->
<a id="schemapostorgmembers_request"></a>
<a id="schema_postOrgMembers_request"></a>
<a id="tocSpostorgmembers_request"></a>
<a id="tocspostorgmembers_request"></a>

```json
{
  "billing": 0,
  "privacy": "string",
  "role": "string",
  "security": 0,
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing|integer|false|none|none|
|privacy|string|false|none|none|
|role|string|false|none|none|
|security|integer|false|none|none|
|username|string|true|none|none|

<h2 id="tocS_postOrgMember_request">postOrgMember_request</h2>
<!-- backwards compatibility -->
<a id="schemapostorgmember_request"></a>
<a id="schema_postOrgMember_request"></a>
<a id="tocSpostorgmember_request"></a>
<a id="tocspostorgmember_request"></a>

```json
{
  "billing": 0,
  "defaultOrg": "string",
  "privacy": "string",
  "role": "string",
  "security": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing|integer|false|none|none|
|defaultOrg|string|false|none|none|
|privacy|string|false|none|none|
|role|string|false|none|none|
|security|integer|false|none|none|

<h2 id="tocS_updateOrgSettings_request">updateOrgSettings_request</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorgsettings_request"></a>
<a id="schema_updateOrgSettings_request"></a>
<a id="tocSupdateorgsettings_request"></a>
<a id="tocsupdateorgsettings_request"></a>

```json
{
  "aiDataSharingOptOut": true,
  "allowedInviteDomains": "string",
  "disableTokenExpirationEmails": true,
  "maxTokenExpirationDays": 0,
  "mfaAdminRecoveryOnly": true,
  "mfaRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aiDataSharingOptOut|boolean \| null|false|none|none|
|allowedInviteDomains|string \| null|false|none|none|
|disableTokenExpirationEmails|boolean \| null|false|none|none|
|maxTokenExpirationDays|integer \| null|false|none|none|
|mfaAdminRecoveryOnly|boolean \| null|false|none|none|
|mfaRequired|boolean \| null|false|none|none|

<h2 id="tocS_renewMarketplaceLicense_request">renewMarketplaceLicense_request</h2>
<!-- backwards compatibility -->
<a id="schemarenewmarketplacelicense_request"></a>
<a id="schema_renewMarketplaceLicense_request"></a>
<a id="tocSrenewmarketplacelicense_request"></a>
<a id="tocsrenewmarketplacelicense_request"></a>

```json
{
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|

<h2 id="tocS_getStackRegions_200_response">getStackRegions_200_response</h2>
<!-- backwards compatibility -->
<a id="schemagetstackregions_200_response"></a>
<a id="schema_getStackRegions_200_response"></a>
<a id="tocSgetstackregions_200_response"></a>
<a id="tocsgetstackregions_200_response"></a>

```json
{
  "total": 1.4658129805029452,
  "pages": 5.962133916683182,
  "orderBy": "orderBy",
  "pageSize": 5.637376656633329,
  "page": 2.3021358869347655,
  "items": [
    {
      "createdAt": "createdAt",
      "visibility": "visibility",
      "publicName": "publicName",
      "provider": "aws",
      "sortOrder": 6.027456183070403,
      "name": "name",
      "description": "description",
      "id": 0.8008281904610115,
      "slug": "slug",
      "status": "status",
      "updatedAt": "updatedAt"
    },
    {
      "createdAt": "createdAt",
      "visibility": "visibility",
      "publicName": "publicName",
      "provider": "aws",
      "sortOrder": 6.027456183070403,
      "name": "name",
      "description": "description",
      "id": 0.8008281904610115,
      "slug": "slug",
      "status": "status",
      "updatedAt": "updatedAt"
    }
  ],
  "direction": "asc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[FormattedApiStackRegion](#schemaformattedapistackregion)]|true|none|none|
|orderBy|string|true|none|none|
|direction|string|true|none|none|
|total|number|true|none|none|
|pages|number|true|none|none|
|pageSize|number|true|none|none|
|page|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|asc|
|direction|desc|

<h2 id="tocS_getAccessPolicies_200_response">getAccessPolicies_200_response</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspolicies_200_response"></a>
<a id="schema_getAccessPolicies_200_response"></a>
<a id="tocSgetaccesspolicies_200_response"></a>
<a id="tocsgetaccesspolicies_200_response"></a>

```json
{
  "items": [
    {
      "realms": [
        {
          "identifier": "123",
          "labelPolicies": [
            {
              "selector": "{env != \"dev\"}"
            },
            {
              "selector": "{env != \"dev\"}"
            }
          ],
          "type": "stack"
        },
        {
          "identifier": "123",
          "labelPolicies": [
            {
              "selector": "{env != \"dev\"}"
            },
            {
              "selector": "{env != \"dev\"}"
            }
          ],
          "type": "stack"
        }
      ],
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "displayName": "Stack Readers",
      "name": "stack-readers",
      "attributes": {
        "pdcConfiguration": {
          "limitedHosts": [
            "mysql.example.com:3306",
            "mysql.example.com:3306"
          ]
        },
        "lokiQueryPolicy": {
          "queryTimeout": "10s",
          "maxQueryLookback": "30d",
          "maxQueryLength": "7d",
          "maxEntriesLimitPerQuery": 20
        },
        "allowedAudiences": [
          "allowedAudiences",
          "allowedAudiences"
        ],
        "allowedScopes": [
          "metrics:read",
          "logs:read",
          "traces:read",
          "alerts:read"
        ]
      },
      "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
      "source": "user",
      "scopes": [
        "metrics:read",
        "logs:read",
        "traces:read",
        "alerts:read"
      ],
      "conditions": {
        "allowedSubnets": [
          "AuthAccessPolicy_conditions_allowedSubnets_inner",
          "AuthAccessPolicy_conditions_allowedSubnets_inner"
        ]
      },
      "orgId": "1",
      "updatedAt": "2000-01-23T04:56:07.000+00:00",
      "status": "active"
    },
    {
      "realms": [
        {
          "identifier": "123",
          "labelPolicies": [
            {
              "selector": "{env != \"dev\"}"
            },
            {
              "selector": "{env != \"dev\"}"
            }
          ],
          "type": "stack"
        },
        {
          "identifier": "123",
          "labelPolicies": [
            {
              "selector": "{env != \"dev\"}"
            },
            {
              "selector": "{env != \"dev\"}"
            }
          ],
          "type": "stack"
        }
      ],
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "displayName": "Stack Readers",
      "name": "stack-readers",
      "attributes": {
        "pdcConfiguration": {
          "limitedHosts": [
            "mysql.example.com:3306",
            "mysql.example.com:3306"
          ]
        },
        "lokiQueryPolicy": {
          "queryTimeout": "10s",
          "maxQueryLookback": "30d",
          "maxQueryLength": "7d",
          "maxEntriesLimitPerQuery": 20
        },
        "allowedAudiences": [
          "allowedAudiences",
          "allowedAudiences"
        ],
        "allowedScopes": [
          "metrics:read",
          "logs:read",
          "traces:read",
          "alerts:read"
        ]
      },
      "id": "c45485b6-8321-4cf2-bcec-12006df755ff",
      "source": "user",
      "scopes": [
        "metrics:read",
        "logs:read",
        "traces:read",
        "alerts:read"
      ],
      "conditions": {
        "allowedSubnets": [
          "AuthAccessPolicy_conditions_allowedSubnets_inner",
          "AuthAccessPolicy_conditions_allowedSubnets_inner"
        ]
      },
      "orgId": "1",
      "updatedAt": "2000-01-23T04:56:07.000+00:00",
      "status": "active"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[AuthAccessPolicy](#schemaauthaccesspolicy)]|false|none|none|

<h2 id="tocS_postAccessPolicies_request_attributes_lokiQueryPolicy">postAccessPolicies_request_attributes_lokiQueryPolicy</h2>
<!-- backwards compatibility -->
<a id="schemapostaccesspolicies_request_attributes_lokiquerypolicy"></a>
<a id="schema_postAccessPolicies_request_attributes_lokiQueryPolicy"></a>
<a id="tocSpostaccesspolicies_request_attributes_lokiquerypolicy"></a>
<a id="tocspostaccesspolicies_request_attributes_lokiquerypolicy"></a>

```json
{
  "maxEntriesLimitPerQuery": 0,
  "maxQueryBytesRead": "string",
  "maxQueryInterval": "string",
  "maxQueryLength": "string",
  "maxQueryLookback": "string",
  "maxQueryTime": "string",
  "minimumLabelsNumber": 0,
  "requiredLabels": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxEntriesLimitPerQuery|integer \| null|false|none|none|
|maxQueryBytesRead|string \| null|false|none|none|
|maxQueryInterval|string \| null|false|none|none|
|maxQueryLength|string \| null|false|none|none|
|maxQueryLookback|string \| null|false|none|none|
|maxQueryTime|string \| null|false|none|none|
|minimumLabelsNumber|integer \| null|false|none|none|
|requiredLabels|[string]|false|none|none|

<h2 id="tocS_postAccessPolicies_request_attributes_pdcConfiguration">postAccessPolicies_request_attributes_pdcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapostaccesspolicies_request_attributes_pdcconfiguration"></a>
<a id="schema_postAccessPolicies_request_attributes_pdcConfiguration"></a>
<a id="tocSpostaccesspolicies_request_attributes_pdcconfiguration"></a>
<a id="tocspostaccesspolicies_request_attributes_pdcconfiguration"></a>

```json
{
  "limitedHosts": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limitedHosts|[string]|false|none|none|

<h2 id="tocS_postAccessPolicies_request_attributes">postAccessPolicies_request_attributes</h2>
<!-- backwards compatibility -->
<a id="schemapostaccesspolicies_request_attributes"></a>
<a id="schema_postAccessPolicies_request_attributes"></a>
<a id="tocSpostaccesspolicies_request_attributes"></a>
<a id="tocspostaccesspolicies_request_attributes"></a>

```json
{
  "lokiQueryPolicy": {
    "maxEntriesLimitPerQuery": 0,
    "maxQueryBytesRead": "string",
    "maxQueryInterval": "string",
    "maxQueryLength": "string",
    "maxQueryLookback": "string",
    "maxQueryTime": "string",
    "minimumLabelsNumber": 0,
    "requiredLabels": [
      "string"
    ]
  },
  "pdcConfiguration": {
    "limitedHosts": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lokiQueryPolicy|[postAccessPolicies_request_attributes_lokiQueryPolicy](#schemapostaccesspolicies_request_attributes_lokiquerypolicy)|false|none|none|
|pdcConfiguration|[postAccessPolicies_request_attributes_pdcConfiguration](#schemapostaccesspolicies_request_attributes_pdcconfiguration)|false|none|none|

<h2 id="tocS_postAccessPolicies_request_conditions">postAccessPolicies_request_conditions</h2>
<!-- backwards compatibility -->
<a id="schemapostaccesspolicies_request_conditions"></a>
<a id="schema_postAccessPolicies_request_conditions"></a>
<a id="tocSpostaccesspolicies_request_conditions"></a>
<a id="tocspostaccesspolicies_request_conditions"></a>

```json
{
  "allowedSubnets": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedSubnets|[string]|false|none|none|

<h2 id="tocS_postAccessPolicies_request_realms_inner_labelPolicies_inner">postAccessPolicies_request_realms_inner_labelPolicies_inner</h2>
<!-- backwards compatibility -->
<a id="schemapostaccesspolicies_request_realms_inner_labelpolicies_inner"></a>
<a id="schema_postAccessPolicies_request_realms_inner_labelPolicies_inner"></a>
<a id="tocSpostaccesspolicies_request_realms_inner_labelpolicies_inner"></a>
<a id="tocspostaccesspolicies_request_realms_inner_labelpolicies_inner"></a>

```json
{
  "selector": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selector|string|true|none|none|

<h2 id="tocS_postAccessPolicies_request_realms_inner">postAccessPolicies_request_realms_inner</h2>
<!-- backwards compatibility -->
<a id="schemapostaccesspolicies_request_realms_inner"></a>
<a id="schema_postAccessPolicies_request_realms_inner"></a>
<a id="tocSpostaccesspolicies_request_realms_inner"></a>
<a id="tocspostaccesspolicies_request_realms_inner"></a>

```json
{
  "identifier": "string",
  "labelPolicies": [
    {
      "selector": "string"
    }
  ],
  "type": "stack"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|true|none|none|
|labelPolicies|[[postAccessPolicies_request_realms_inner_labelPolicies_inner](#schemapostaccesspolicies_request_realms_inner_labelpolicies_inner)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|stack|
|type|org|

<h2 id="tocS_postAccessPolicies_request">postAccessPolicies_request</h2>
<!-- backwards compatibility -->
<a id="schemapostaccesspolicies_request"></a>
<a id="schema_postAccessPolicies_request"></a>
<a id="tocSpostaccesspolicies_request"></a>
<a id="tocspostaccesspolicies_request"></a>

```json
{
  "attributes": {
    "lokiQueryPolicy": {
      "maxEntriesLimitPerQuery": 0,
      "maxQueryBytesRead": "string",
      "maxQueryInterval": "string",
      "maxQueryLength": "string",
      "maxQueryLookback": "string",
      "maxQueryTime": "string",
      "minimumLabelsNumber": 0,
      "requiredLabels": [
        "string"
      ]
    },
    "pdcConfiguration": {
      "limitedHosts": [
        "string"
      ]
    }
  },
  "conditions": {
    "allowedSubnets": [
      "string"
    ]
  },
  "displayName": "string",
  "name": "string",
  "realms": [
    {
      "identifier": "string",
      "labelPolicies": [
        {
          "selector": "string"
        }
      ],
      "type": "stack"
    }
  ],
  "scopes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[postAccessPolicies_request_attributes](#schemapostaccesspolicies_request_attributes)|false|none|none|
|conditions|[postAccessPolicies_request_conditions](#schemapostaccesspolicies_request_conditions)|false|none|none|
|displayName|string|false|none|none|
|name|string|true|none|none|
|realms|[[postAccessPolicies_request_realms_inner](#schemapostaccesspolicies_request_realms_inner)]|true|none|none|
|scopes|[string]|true|none|none|

<h2 id="tocS_postAccessPolicy_request">postAccessPolicy_request</h2>
<!-- backwards compatibility -->
<a id="schemapostaccesspolicy_request"></a>
<a id="schema_postAccessPolicy_request"></a>
<a id="tocSpostaccesspolicy_request"></a>
<a id="tocspostaccesspolicy_request"></a>

```json
{
  "attributes": {
    "lokiQueryPolicy": {
      "maxEntriesLimitPerQuery": 0,
      "maxQueryBytesRead": "string",
      "maxQueryInterval": "string",
      "maxQueryLength": "string",
      "maxQueryLookback": "string",
      "maxQueryTime": "string",
      "minimumLabelsNumber": 0,
      "requiredLabels": [
        "string"
      ]
    },
    "pdcConfiguration": {
      "limitedHosts": [
        "string"
      ]
    }
  },
  "conditions": {
    "allowedSubnets": [
      "string"
    ]
  },
  "displayName": "string",
  "realms": [
    {
      "identifier": "string",
      "labelPolicies": [
        {
          "selector": "string"
        }
      ],
      "type": "stack"
    }
  ],
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[postAccessPolicies_request_attributes](#schemapostaccesspolicies_request_attributes)|false|none|none|
|conditions|[postAccessPolicies_request_conditions](#schemapostaccesspolicies_request_conditions)|false|none|none|
|displayName|string|false|none|none|
|realms|[[postAccessPolicies_request_realms_inner](#schemapostaccesspolicies_request_realms_inner)]|false|none|none|
|scopes|[string]|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_postTokens_request">postTokens_request</h2>
<!-- backwards compatibility -->
<a id="schemaposttokens_request"></a>
<a id="schema_postTokens_request"></a>
<a id="tocSposttokens_request"></a>
<a id="tocsposttokens_request"></a>

```json
{
  "accessPolicyId": "string",
  "displayName": "string",
  "expiresAt": "1970-01-01T00:00:00Z",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPolicyId|string|true|none|none|
|displayName|string|false|none|none|
|expiresAt|string(date-time)|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_postToken_request">postToken_request</h2>
<!-- backwards compatibility -->
<a id="schemaposttoken_request"></a>
<a id="schema_postToken_request"></a>
<a id="tocSposttoken_request"></a>
<a id="tocsposttoken_request"></a>

```json
{
  "displayName": "string",
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|none|
|expiresAt|string(date-time) \| null|false|none|none|

<h2 id="tocS_realms_inner_anyOf">realms_inner_anyOf</h2>
<!-- backwards compatibility -->
<a id="schemarealms_inner_anyof"></a>
<a id="schema_realms_inner_anyOf"></a>
<a id="tocSrealms_inner_anyof"></a>
<a id="tocsrealms_inner_anyof"></a>

```json
{
  "identifier": "identifier",
  "type": "org"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|identifier|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|org|

<h2 id="tocS_realms_inner_anyOf_1">realms_inner_anyOf_1</h2>
<!-- backwards compatibility -->
<a id="schemarealms_inner_anyof_1"></a>
<a id="schema_realms_inner_anyOf_1"></a>
<a id="tocSrealms_inner_anyof_1"></a>
<a id="tocsrealms_inner_anyof_1"></a>

```json
{
  "type": "stack",
  "identifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|identifier|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|stack|

<h2 id="tocS_realms_inner">realms_inner</h2>
<!-- backwards compatibility -->
<a id="schemarealms_inner"></a>
<a id="schema_realms_inner"></a>
<a id="tocSrealms_inner"></a>
<a id="tocsrealms_inner"></a>

```json
{
  "identifier": "identifier",
  "type": "org"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[realms_inner_anyOf](#schemarealms_inner_anyof)|false|none|none|
|*anyOf*|[realms_inner_anyOf_1](#schemarealms_inner_anyof_1)|false|none|none|

<h2 id="tocS_scopes_inner">scopes_inner</h2>
<!-- backwards compatibility -->
<a id="schemascopes_inner"></a>
<a id="schema_scopes_inner"></a>
<a id="tocSscopes_inner"></a>
<a id="tocsscopes_inner"></a>

```json
{
  "requiresRealmType": "requiresRealmType",
  "name": "name",
  "description": "description"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|true|none|none|
|requiresRealmType|string|false|none|none|

<h2 id="tocS_sets_inner">sets_inner</h2>
<!-- backwards compatibility -->
<a id="schemasets_inner"></a>
<a id="schema_sets_inner"></a>
<a id="tocSsets_inner"></a>
<a id="tocssets_inner"></a>

```json
{
  "name": "name",
  "scopes": [
    "scopes",
    "scopes"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|scopes|[string]|false|none|none|

<h2 id="tocS_pagination">pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "nextPage": "nextPage",
  "pageSize": 0.8008281904610115,
  "pageCursor": "pageCursor"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageCursor|string \| null|false|none|none|
|nextPage|string \| null|false|none|none|
|pageSize|number|true|none|none|

<h2 id="tocS_metadata">metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "pagination": {
    "nextPage": "nextPage",
    "pageSize": 0.8008281904610115,
    "pageCursor": "pageCursor"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[pagination](#schemapagination)|true|none|none|

<h2 id="tocS_AuthAccessPolicy_realms_inner_labelPolicies_inner">AuthAccessPolicy_realms_inner_labelPolicies_inner</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccesspolicy_realms_inner_labelpolicies_inner"></a>
<a id="schema_AuthAccessPolicy_realms_inner_labelPolicies_inner"></a>
<a id="tocSauthaccesspolicy_realms_inner_labelpolicies_inner"></a>
<a id="tocsauthaccesspolicy_realms_inner_labelpolicies_inner"></a>

```json
{
  "selector": "{env != \"dev\"}"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selector|string(string)|false|none|Label selector|

<h2 id="tocS_AuthAccessPolicy_realms_inner">AuthAccessPolicy_realms_inner</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccesspolicy_realms_inner"></a>
<a id="schema_AuthAccessPolicy_realms_inner"></a>
<a id="tocSauthaccesspolicy_realms_inner"></a>
<a id="tocsauthaccesspolicy_realms_inner"></a>

```json
{
  "identifier": "123",
  "labelPolicies": [
    {
      "selector": "{env != \"dev\"}"
    },
    {
      "selector": "{env != \"dev\"}"
    }
  ],
  "type": "stack"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of the realm|
|identifier|string(string)|false|none|The unique identifier of a realm (org or stack).|
|labelPolicies|[[AuthAccessPolicy_realms_inner_labelPolicies_inner](#schemaauthaccesspolicy_realms_inner_labelpolicies_inner)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|org|
|type|stack|
|type|system|

<h2 id="tocS_AuthAccessPolicy_conditions_allowedSubnets_inner">AuthAccessPolicy_conditions_allowedSubnets_inner</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccesspolicy_conditions_allowedsubnets_inner"></a>
<a id="schema_AuthAccessPolicy_conditions_allowedSubnets_inner"></a>
<a id="tocSauthaccesspolicy_conditions_allowedsubnets_inner"></a>
<a id="tocsauthaccesspolicy_conditions_allowedsubnets_inner"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string(ipv4-cidr)|false|none|none|
|*oneOf*|string(ipv6-cidr)|false|none|none|

<h2 id="tocS_AuthAccessPolicy_conditions">AuthAccessPolicy_conditions</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccesspolicy_conditions"></a>
<a id="schema_AuthAccessPolicy_conditions"></a>
<a id="tocSauthaccesspolicy_conditions"></a>
<a id="tocsauthaccesspolicy_conditions"></a>

```json
{
  "allowedSubnets": [
    "AuthAccessPolicy_conditions_allowedSubnets_inner",
    "AuthAccessPolicy_conditions_allowedSubnets_inner"
  ]
}
```

A set of criteria that is used to restrict access of the Access Policy and Tokens. Providing an empty object ("{}") results in the complete removal of the `conditions` object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedSubnets|[[AuthAccessPolicy_conditions_allowedSubnets_inner](#schemaauthaccesspolicy_conditions_allowedsubnets_inner)]|false|none|An array of IP addresses with subnet masks in CIDR notation (both IPv4 or IPv6 are supported) that is used to restrict access to only hosts that are part of at least one of the subnets. Providing an empty array is equivalent to providing an empty `conditions` object, and results in the removal of the `conditions` object from the Access Policy.<br>Note that an IP address is not valid CIDR notation. For specifying a single IP address use a subnet mask of `/32` for IPv4 and `/128` for IPv6.<br>Examples: 192.168.0.10/32 2001:db0:82a3:0:0:8a2e:370:1234/128<br>|

<h2 id="tocS_AuthAccessPolicy_attributes_lokiQueryPolicy">AuthAccessPolicy_attributes_lokiQueryPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccesspolicy_attributes_lokiquerypolicy"></a>
<a id="schema_AuthAccessPolicy_attributes_lokiQueryPolicy"></a>
<a id="tocSauthaccesspolicy_attributes_lokiquerypolicy"></a>
<a id="tocsauthaccesspolicy_attributes_lokiquerypolicy"></a>

```json
{
  "queryTimeout": "10s",
  "maxQueryLookback": "30d",
  "maxQueryLength": "7d",
  "maxEntriesLimitPerQuery": 20
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryTimeout|string(string)|false|none|String which represents a duration. For example "10s", "2w", "5h".|
|maxEntriesLimitPerQuery|integer(integer)|false|none|Ordinary integer.|
|maxQueryLookback|string(string)|false|none|String which represents a duration. For example "10s", "2w", "5h".|
|maxQueryLength|string(string)|false|none|String which represents a duration. For example "10s", "2w", "5h".|

<h2 id="tocS_AuthAccessPolicy_attributes_pdcConfiguration">AuthAccessPolicy_attributes_pdcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccesspolicy_attributes_pdcconfiguration"></a>
<a id="schema_AuthAccessPolicy_attributes_pdcConfiguration"></a>
<a id="tocSauthaccesspolicy_attributes_pdcconfiguration"></a>
<a id="tocsauthaccesspolicy_attributes_pdcconfiguration"></a>

```json
{
  "limitedHosts": [
    "mysql.example.com:3306",
    "mysql.example.com:3306"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limitedHosts|[string(string)]|false|none|List of hosts that Grafana is able to access through a PDC. All hosts are allowed if not provided.|

<h2 id="tocS_AuthAccessPolicy_attributes">AuthAccessPolicy_attributes</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccesspolicy_attributes"></a>
<a id="schema_AuthAccessPolicy_attributes"></a>
<a id="tocSauthaccesspolicy_attributes"></a>
<a id="tocsauthaccesspolicy_attributes"></a>

```json
{
  "pdcConfiguration": {
    "limitedHosts": [
      "mysql.example.com:3306",
      "mysql.example.com:3306"
    ]
  },
  "lokiQueryPolicy": {
    "queryTimeout": "10s",
    "maxQueryLookback": "30d",
    "maxQueryLength": "7d",
    "maxEntriesLimitPerQuery": 20
  },
  "allowedAudiences": [
    "allowedAudiences",
    "allowedAudiences"
  ],
  "allowedScopes": [
    "metrics:read",
    "logs:read",
    "traces:read",
    "alerts:read"
  ]
}
```

A set of criteria that can be to the backend service via headers through the gateway, or used to make authentication decisions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lokiQueryPolicy|[AuthAccessPolicy_attributes_lokiQueryPolicy](#schemaauthaccesspolicy_attributes_lokiquerypolicy)|false|none|none|
|allowedScopes|[string]|false|none|List of scopes allowed to be signed by an access policy (required if the access policy contains `grafana-id-token:sign`).<br>|
|pdcConfiguration|[AuthAccessPolicy_attributes_pdcConfiguration](#schemaauthaccesspolicy_attributes_pdcconfiguration)|false|none|none|
|allowedAudiences|[string]|false|none|List of audience claims allowed to be included when signing access tokens.<br>|

<h2 id="tocS_credits_inner">credits_inner</h2>
<!-- backwards compatibility -->
<a id="schemacredits_inner"></a>
<a id="schema_credits_inner"></a>
<a id="tocScredits_inner"></a>
<a id="tocscredits_inner"></a>

```json
{
  "amount": 7.386281948385884,
  "dimensionId": "dimensionId",
  "dimensionName": "dimensionName"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|dimensionId|string|true|none|none|
|dimensionName|string|true|none|none|

<h2 id="tocS_usages_inner">usages_inner</h2>
<!-- backwards compatibility -->
<a id="schemausages_inner"></a>
<a id="schema_usages_inner"></a>
<a id="tocSusages_inner"></a>
<a id="tocsusages_inner"></a>

```json
{
  "dpm": 1.2315135367772556,
  "ingestUsage": 7.457744773683766,
  "onCallUsage": 1.1730742509559433,
  "stackId": 9.965781217890562,
  "stackName": "stackName",
  "activeUsers": 7.061401241503109,
  "protocolUsage": 4.965218492984954,
  "anonymousUsers": 9.301444243932576,
  "attributedUsage": 2.027123023002322,
  "grafanaUsage": 1.0246457001441578,
  "browserUsage": 4.145608029883936,
  "stackLabels": "{}",
  "attributedCost": 3.616076749251911,
  "credits": [
    {
      "amount": 7.386281948385884,
      "dimensionId": "dimensionId",
      "dimensionName": "dimensionName"
    },
    {
      "amount": 7.386281948385884,
      "dimensionId": "dimensionId",
      "dimensionName": "dimensionName"
    }
  ],
  "queryUsage": 5.025004791520295,
  "incidentUsage": 6.84685269835264,
  "totalUsage": 9.369310271410669,
  "id": 1.4894159098541704,
  "activeSeries": 2.3021358869347655,
  "periodStart": "periodStart",
  "isProrated": true,
  "periodEnd": "periodEnd"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeSeries|number|false|none|none|
|activeUsers|number|false|none|none|
|anonymousUsers|number|false|none|none|
|attributedCost|number|false|none|none|
|attributedUsage|number|false|none|none|
|browserUsage|number|false|none|none|
|credits|[[credits_inner](#schemacredits_inner)]|false|none|none|
|dpm|number|false|none|none|
|grafanaUsage|number|false|none|none|
|id|number|true|none|none|
|incidentUsage|number|false|none|none|
|ingestUsage|number|false|none|none|
|isProrated|boolean|true|none|none|
|onCallUsage|number|false|none|none|
|periodEnd|string|true|none|none|
|periodStart|string|true|none|none|
|protocolUsage|number|false|none|none|
|queryUsage|number|false|none|none|
|stackId|number|true|none|none|
|totalUsage|number|true|none|none|
|stackName|string|true|none|none|
|stackLabels|object|true|none|none|

<h2 id="tocS_links_inner">links_inner</h2>
<!-- backwards compatibility -->
<a id="schemalinks_inner"></a>
<a id="schema_links_inner"></a>
<a id="tocSlinks_inner"></a>
<a id="tocslinks_inner"></a>

```json
{
  "rel": "rel",
  "href": "href"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rel|string|true|none|none|
|href|string|true|none|none|

<h2 id="tocS_links_inner_1">links_inner_1</h2>
<!-- backwards compatibility -->
<a id="schemalinks_inner_1"></a>
<a id="schema_links_inner_1"></a>
<a id="tocSlinks_inner_1"></a>
<a id="tocslinks_inner_1"></a>

```json
{
  "rel": "self",
  "href": "href"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rel|string|true|none|none|
|href|string|true|none|none|

<h2 id="tocS_FormattedApiOrgPublic_allowGCloudTrial">FormattedApiOrgPublic_allowGCloudTrial</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiorgpublic_allowgcloudtrial"></a>
<a id="schema_FormattedApiOrgPublic_allowGCloudTrial"></a>
<a id="tocSformattedapiorgpublic_allowgcloudtrial"></a>
<a id="tocsformattedapiorgpublic_allowgcloudtrial"></a>

```json
true
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|boolean|false|none|none|
|*anyOf*|number|false|none|none|

<h2 id="tocS_current">current</h2>
<!-- backwards compatibility -->
<a id="schemacurrent"></a>
<a id="schema_current"></a>
<a id="tocScurrent"></a>
<a id="tocscurrent"></a>

```json
{
  "product": "",
  "endDate": "",
  "payload": "{}",
  "publicName": "",
  "planBillingCycle": "",
  "enterprisePluginsAdded": true,
  "isTrial": true,
  "plan": "",
  "startDate": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|object \| null|true|none|none|
|isTrial|boolean|true|none|none|
|startDate|object \| null|true|none|none|
|endDate|object \| null|true|none|none|
|payload|object|true|none|none|
|plan|object \| null|true|none|none|
|publicName|object \| null|true|none|none|
|enterprisePluginsAdded|boolean|true|none|none|
|planBillingCycle|object \| null|true|none|none|

<h2 id="tocS_subscriptions_anyOf">subscriptions_anyOf</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions_anyof"></a>
<a id="schema_subscriptions_anyOf"></a>
<a id="tocSsubscriptions_anyof"></a>
<a id="tocssubscriptions_anyof"></a>

```json
{
  "next": "",
  "current": {
    "product": "",
    "endDate": "",
    "payload": "{}",
    "publicName": "",
    "planBillingCycle": "",
    "enterprisePluginsAdded": true,
    "isTrial": true,
    "plan": "",
    "startDate": ""
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|[current](#schemacurrent)|true|none|none|
|next|object \| null|true|none|none|

<h2 id="tocS_payload">payload</h2>
<!-- backwards compatibility -->
<a id="schemapayload"></a>
<a id="schema_payload"></a>
<a id="tocSpayload"></a>
<a id="tocspayload"></a>

```json
{
  "withAddons": [
    "string"
  ],
  "licenseAllPlugins": true,
  "caseId": "string",
  "property1": null,
  "property2": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|withAddons|[string]|false|none|none|
|licenseAllPlugins|boolean|false|none|none|
|caseId|string|false|none|none|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_current_1">current_1</h2>
<!-- backwards compatibility -->
<a id="schemacurrent_1"></a>
<a id="schema_current_1"></a>
<a id="tocScurrent_1"></a>
<a id="tocscurrent_1"></a>

```json
{
  "product": "grafana-cloud-advanced",
  "isTrial": true,
  "startDate": "1970-01-01T00:00:00Z",
  "endDate": "1970-01-01T00:00:00Z",
  "payload": {
    "withAddons": [
      "string"
    ],
    "licenseAllPlugins": true,
    "caseId": "string",
    "property1": null,
    "property2": null
  },
  "plan": "string",
  "publicName": "string",
  "enterprisePluginsAdded": true,
  "planBillingCycle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|true|none|none|
|isTrial|boolean|true|none|none|
|startDate|string(date-time)|true|none|none|
|endDate|string(date-time)|true|none|none|
|payload|[payload](#schemapayload)|true|none|none|
|plan|string \| null|true|none|none|
|publicName|string \| null|true|none|none|
|enterprisePluginsAdded|boolean|true|none|none|
|planBillingCycle|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|product|grafana-cloud-advanced|
|product|grafana-cloud-fedramp|
|product|grafana-cloud-free|
|product|grafana-cloud-pro|
|product|grafana-cloud-ss-advanced|

<h2 id="tocS_next">next</h2>
<!-- backwards compatibility -->
<a id="schemanext"></a>
<a id="schema_next"></a>
<a id="tocSnext"></a>
<a id="tocsnext"></a>

```json
{
  "product": "grafana-cloud-advanced",
  "payload": {
    "withAddons": [
      "string"
    ],
    "licenseAllPlugins": true,
    "caseId": "string",
    "property1": null,
    "property2": null
  },
  "plan": "string",
  "publicName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|true|none|none|
|payload|[payload](#schemapayload)|true|none|none|
|plan|string \| null|true|none|none|
|publicName|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|product|grafana-cloud-advanced|
|product|grafana-cloud-fedramp|
|product|grafana-cloud-free|
|product|grafana-cloud-pro|
|product|grafana-cloud-ss-advanced|

<h2 id="tocS_subscriptions_anyOf_1">subscriptions_anyOf_1</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions_anyof_1"></a>
<a id="schema_subscriptions_anyOf_1"></a>
<a id="tocSsubscriptions_anyof_1"></a>
<a id="tocssubscriptions_anyof_1"></a>

```json
{
  "current": {
    "product": "grafana-cloud-advanced",
    "isTrial": true,
    "startDate": "1970-01-01T00:00:00Z",
    "endDate": "1970-01-01T00:00:00Z",
    "payload": {
      "withAddons": [
        "string"
      ],
      "licenseAllPlugins": true,
      "caseId": "string",
      "property1": null,
      "property2": null
    },
    "plan": "string",
    "publicName": "string",
    "enterprisePluginsAdded": true,
    "planBillingCycle": "string"
  },
  "next": {
    "product": "grafana-cloud-advanced",
    "payload": {
      "withAddons": [
        "string"
      ],
      "licenseAllPlugins": true,
      "caseId": "string",
      "property1": null,
      "property2": null
    },
    "plan": "string",
    "publicName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|[current_1](#schemacurrent_1)|true|none|none|
|next|[next](#schemanext)|true|none|none|

<h2 id="tocS_current_2">current_2</h2>
<!-- backwards compatibility -->
<a id="schemacurrent_2"></a>
<a id="schema_current_2"></a>
<a id="tocScurrent_2"></a>
<a id="tocscurrent_2"></a>

```json
{
  "product": "grafana-cloud-advanced",
  "isTrial": true,
  "startDate": "1970-01-01T00:00:00Z",
  "endDate": null,
  "payload": {
    "withAddons": [
      "string"
    ],
    "licenseAllPlugins": true,
    "caseId": "string",
    "property1": null,
    "property2": null
  },
  "plan": "string",
  "publicName": "string",
  "enterprisePluginsAdded": true,
  "planBillingCycle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|true|none|none|
|isTrial|boolean|true|none|none|
|startDate|string(date-time)|true|none|none|
|endDate|object \| null|true|none|none|
|payload|[payload](#schemapayload)|true|none|none|
|plan|string \| null|true|none|none|
|publicName|string \| null|true|none|none|
|enterprisePluginsAdded|boolean|true|none|none|
|planBillingCycle|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|product|grafana-cloud-advanced|
|product|grafana-cloud-fedramp|
|product|grafana-cloud-free|
|product|grafana-cloud-pro|
|product|grafana-cloud-ss-advanced|

<h2 id="tocS_subscriptions_anyOf_2">subscriptions_anyOf_2</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions_anyof_2"></a>
<a id="schema_subscriptions_anyOf_2"></a>
<a id="tocSsubscriptions_anyof_2"></a>
<a id="tocssubscriptions_anyof_2"></a>

```json
{
  "current": {
    "product": "grafana-cloud-advanced",
    "isTrial": true,
    "startDate": "1970-01-01T00:00:00Z",
    "endDate": null,
    "payload": {
      "withAddons": [
        "string"
      ],
      "licenseAllPlugins": true,
      "caseId": "string",
      "property1": null,
      "property2": null
    },
    "plan": "string",
    "publicName": "string",
    "enterprisePluginsAdded": true,
    "planBillingCycle": "string"
  },
  "next": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|[current_2](#schemacurrent_2)|true|none|none|
|next|object \| null|true|none|none|

<h2 id="tocS_subscriptions">subscriptions</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions"></a>
<a id="schema_subscriptions"></a>
<a id="tocSsubscriptions"></a>
<a id="tocssubscriptions"></a>

```json
{
  "next": "",
  "current": {
    "product": "",
    "endDate": "",
    "payload": "{}",
    "publicName": "",
    "planBillingCycle": "",
    "enterprisePluginsAdded": true,
    "isTrial": true,
    "plan": "",
    "startDate": ""
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[subscriptions_anyOf](#schemasubscriptions_anyof)|false|none|none|
|*anyOf*|[subscriptions_anyOf_1](#schemasubscriptions_anyof_1)|false|none|none|
|*anyOf*|[subscriptions_anyOf_2](#schemasubscriptions_anyof_2)|false|none|none|

<h2 id="tocS_author">author</h2>
<!-- backwards compatibility -->
<a id="schemaauthor"></a>
<a id="schema_author"></a>
<a id="tocSauthor"></a>
<a id="tocsauthor"></a>

```json
{
  "name": "name",
  "email": "email",
  "url": "url"
}
```

Information about the plugin author.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Author's name.|
|email|string|false|none|Author's name.|
|url|string|false|none|Link to author's website.|

<h2 id="tocS_build">build</h2>
<!-- backwards compatibility -->
<a id="schemabuild"></a>
<a id="schema_build"></a>
<a id="tocSbuild"></a>
<a id="tocsbuild"></a>

```json
{
  "number": 7.386281948385884,
  "pr": 1.2315135367772556,
  "build": 1.0246457001441578,
  "repo": "repo",
  "time": 4.145608029883936,
  "branch": "branch",
  "hash": "hash"
}
```

Build information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|number|false|none|Time when the plugin was built, as a Unix timestamp.|
|repo|string|false|none|none|
|branch|string|false|none|Git branch the plugin was built from.|
|hash|string|false|none|Git hash of the commit the plugin was built from|
|number|number|false|none|none|
|pr|number|false|none|GitHub pull request the plugin was built from|
|build|number|false|none|Build job number used to build this plugin.|

<h2 id="tocS_links_inner_2">links_inner_2</h2>
<!-- backwards compatibility -->
<a id="schemalinks_inner_2"></a>
<a id="schema_links_inner_2"></a>
<a id="tocSlinks_inner_2"></a>
<a id="tocslinks_inner_2"></a>

```json
{
  "name": "name",
  "url": "url",
  "target": "_blank"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Display name of the link. Special names with predefined behavior: <br/>• `documentation` - sets Documentation link on plugins detail page<br/>• `repository` - used to determine and link to repository of the plugin<br/>• `license` - sets License link on plugins detail page<br/>• `raise issue` - sets `Raise an Issue` link on plugins detail page<br/>• `sponsorship` - sets `Sponsor this developer` link on plugins detail page to direct users to how they can support your work|
|url|string|false|none|URL value to use for this specific link.|
|target|string|false|none|A string that indicates where to display the linked resource|

#### Enumerated Values

|Property|Value|
|---|---|
|target|_blank|
|target|_parent|
|target|_self|
|target|_top|

<h2 id="tocS_logos">logos</h2>
<!-- backwards compatibility -->
<a id="schemalogos"></a>
<a id="schema_logos"></a>
<a id="tocSlogos"></a>
<a id="tocslogos"></a>

```json
{
  "small": "small",
  "large": "large"
}
```

SVG images that are used as plugin icons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|small|string|true|none|Link to the "small" version of the plugin logo, which must be an SVG image. "Large" and "small" logos can be the same image.|
|large|string|true|none|Link to the "large" version of the plugin logo, which must be an SVG image. "Large" and "small" logos can be the same image.|

<h2 id="tocS_screenshots_inner">screenshots_inner</h2>
<!-- backwards compatibility -->
<a id="schemascreenshots_inner"></a>
<a id="schema_screenshots_inner"></a>
<a id="tocSscreenshots_inner"></a>
<a id="tocsscreenshots_inner"></a>

```json
{
  "path": "path",
  "name": "name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_info">info</h2>
<!-- backwards compatibility -->
<a id="schemainfo"></a>
<a id="schema_info"></a>
<a id="tocSinfo"></a>
<a id="tocsinfo"></a>

```json
{
  "keywords": [
    "keywords",
    "keywords"
  ],
  "build": {
    "number": 7.386281948385884,
    "pr": 1.2315135367772556,
    "build": 1.0246457001441578,
    "repo": "repo",
    "time": 4.145608029883936,
    "branch": "branch",
    "hash": "hash"
  },
  "author": {
    "name": "name",
    "email": "email",
    "url": "url"
  },
  "description": "description",
  "links": [
    {
      "name": "name",
      "url": "url",
      "target": "_blank"
    },
    {
      "name": "name",
      "url": "url",
      "target": "_blank"
    }
  ],
  "logos": {
    "small": "small",
    "large": "large"
  },
  "updated": "updated",
  "version": "version",
  "screenshots": [
    {
      "path": "path",
      "name": "name"
    },
    {
      "path": "path",
      "name": "name"
    }
  ]
}
```

Metadata for the plugin. Some fields are used on the plugins page in Grafana and others on grafana.com if the plugin is published.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[author](#schemaauthor)|false|none|Information about the plugin author.|
|build|[build](#schemabuild)|false|none|Build information|
|description|string|false|none|Description of plugin. Used on the plugins page in Grafana and for search on grafana.com.|
|keywords|[string]|true|none|Array of plugin keywords. Used for search on grafana.com.|
|links|[[links_inner_2](#schemalinks_inner_2)]|false|none|An array of link objects to be displayed on this plugin's project page in the form `{name: 'foo', url: 'http://example.com'}`|
|logos|[logos](#schemalogos)|true|none|SVG images that are used as plugin icons.|
|screenshots|[[screenshots_inner](#schemascreenshots_inner)]|false|none|An array of screenshot objects in the form `{name: 'bar', path: 'img/screenshot.png'}`|
|updated|string|true|none|Date when this plugin was built.|
|version|string|true|none|[SemVer](https://semver.org/) version of this commit, e.g. `6.7.1`.|

<h2 id="tocS_plugins_inner">plugins_inner</h2>
<!-- backwards compatibility -->
<a id="schemaplugins_inner"></a>
<a id="schema_plugins_inner"></a>
<a id="tocSplugins_inner"></a>
<a id="tocsplugins_inner"></a>

```json
{
  "name": "name",
  "id": "id",
  "type": "app"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|type|string|true|none|none|
|name|string|true|none|none|
|**additionalProperties**|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|app|
|type|datasource|
|type|panel|

<h2 id="tocS_extensions">extensions</h2>
<!-- backwards compatibility -->
<a id="schemaextensions"></a>
<a id="schema_extensions"></a>
<a id="tocSextensions"></a>
<a id="tocsextensions"></a>

```json
{
  "exposedComponents": [
    "exposedComponents",
    "exposedComponents"
  ]
}
```

Plugin extensions that this plugin depends on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exposedComponents|[string]|false|none|An array of exposed component ids that this plugin depends on.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_dependencies">dependencies</h2>
<!-- backwards compatibility -->
<a id="schemadependencies"></a>
<a id="schema_dependencies"></a>
<a id="tocSdependencies"></a>
<a id="tocsdependencies"></a>

```json
{
  "extensions": {
    "exposedComponents": [
      "exposedComponents",
      "exposedComponents"
    ]
  },
  "plugins": [
    {
      "name": "name",
      "id": "id",
      "type": "app"
    },
    {
      "name": "name",
      "id": "id",
      "type": "app"
    }
  ],
  "grafanaVersion": "grafanaVersion",
  "grafanaDependency": "grafanaDependency"
}
```

Dependency information related to Grafana and other plugins.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grafanaVersion|string|false|none|(Deprecated) Required Grafana version for this plugin, e.g. `6.x.x 7.x.x` to denote plugin requires Grafana v6.x.x or v7.x.x.|
|grafanaDependency|string|true|none|Required Grafana version for this plugin. Validated using https://github.com/npm/node-semver.|
|plugins|[[plugins_inner](#schemaplugins_inner)]|false|none|An array of required plugins on which this plugin depends. Only non-core (that is, external plugins) have to be specified in this list.|
|extensions|[extensions](#schemaextensions)|false|none|Plugin extensions that this plugin depends on.|

<h2 id="tocS_enterpriseFeatures">enterpriseFeatures</h2>
<!-- backwards compatibility -->
<a id="schemaenterprisefeatures"></a>
<a id="schema_enterpriseFeatures"></a>
<a id="tocSenterprisefeatures"></a>
<a id="tocsenterprisefeatures"></a>

```json
{
  "healthDiagnosticsErrors": true
}
```

Grafana Enterprise specific features

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthDiagnosticsErrors|boolean|false|none|Enable/Disable health diagnostics errors. Requires Grafana >=7.5.5.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_includes_inner">includes_inner</h2>
<!-- backwards compatibility -->
<a id="schemaincludes_inner"></a>
<a id="schema_includes_inner"></a>
<a id="tocSincludes_inner"></a>
<a id="tocsincludes_inner"></a>

```json
{
  "uid": "uid",
  "path": "path",
  "defaultNav": true,
  "component": "component",
  "role": "Admin",
  "name": "name",
  "icon": "icon",
  "action": "action",
  "type": "dashboard",
  "addToNav": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Unique identifier of the included resource|
|type|string|true|none|none|
|name|string|false|none|none|
|component|string|false|none|(Legacy) The Angular component to use for a page.|
|role|string|false|none|The minimum role a user must have to see this page in the navigation menu.|
|action|string|false|none|The RBAC action a user must have to see this page in the navigation menu. **Warning**: unless the action targets the plugin, only the action is verified, not what it applies to.|
|path|string|false|none|Used for app plugins.|
|addToNav|boolean|false|none|Add the include to the navigation menu.|
|defaultNav|boolean|false|none|Page or dashboard when user clicks the icon in the side menu.|
|icon|string|false|none|Icon to use in the side menu. For information on available icon, refer to [Icons Overview](https://developers.grafana.com/ui/latest/index.html?path=/story/docs-overview-icon--icons-overview).|
|**additionalProperties**|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dashboard|
|type|datasource|
|type|page|
|type|panel|
|role|Admin|
|role|Editor|
|role|Viewer|

<h2 id="tocS_queryOptions">queryOptions</h2>
<!-- backwards compatibility -->
<a id="schemaqueryoptions"></a>
<a id="schema_queryOptions"></a>
<a id="tocSqueryoptions"></a>
<a id="tocsqueryoptions"></a>

```json
{
  "maxDataPoints": true,
  "cacheTimeout": true,
  "minInterval": true
}
```

For data source plugins. There is a query options section in the plugin's query editor and these options can be turned on if needed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxDataPoints|boolean|false|none|For data source plugins. If the `max data points` option should be shown in the query options section in the query editor.|
|minInterval|boolean|false|none|For data source plugins. If the `min interval` option should be shown in the query options section in the query editor.|
|cacheTimeout|boolean|false|none|For data source plugins. If the `cache timeout` option should be shown in the query options section in the query editor.|

<h2 id="tocS_params">params</h2>
<!-- backwards compatibility -->
<a id="schemaparams"></a>
<a id="schema_params"></a>
<a id="tocSparams"></a>
<a id="tocsparams"></a>

```json
{
  "grant_type": "grant_type",
  "resource": "resource",
  "client_secret": "client_secret",
  "client_id": "client_id"
}
```

Parameters for the token authentication request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|false|none|OAuth grant type|
|client_id|string|false|none|OAuth client ID|
|client_secret|string|false|none|OAuth client secret. Usually populated by decrypting the secret from the SecureJson blob.|
|resource|string|false|none|OAuth resource|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_tokenAuth">tokenAuth</h2>
<!-- backwards compatibility -->
<a id="schematokenauth"></a>
<a id="schema_tokenAuth"></a>
<a id="tocStokenauth"></a>
<a id="tocstokenauth"></a>

```json
{
  "scopes": [
    "scopes",
    "scopes"
  ],
  "params": {
    "grant_type": "grant_type",
    "resource": "resource",
    "client_secret": "client_secret",
    "client_id": "client_id"
  },
  "url": "url"
}
```

For data source plugins. Token authentication section used with an OAuth API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|URL to fetch the authentication token.|
|scopes|[string]|false|none|The list of scopes that your application should be granted access to.|
|params|[params](#schemaparams)|false|none|Parameters for the token authentication request.|

<h2 id="tocS_params_1">params_1</h2>
<!-- backwards compatibility -->
<a id="schemaparams_1"></a>
<a id="schema_params_1"></a>
<a id="tocSparams_1"></a>
<a id="tocsparams_1"></a>

```json
{
  "token_uri": "token_uri",
  "client_email": "client_email",
  "private_key": "private_key"
}
```

Parameters for the JWT token authentication request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token_uri|string|false|none|none|
|client_email|string|false|none|none|
|private_key|string|false|none|none|

<h2 id="tocS_jwtTokenAuth">jwtTokenAuth</h2>
<!-- backwards compatibility -->
<a id="schemajwttokenauth"></a>
<a id="schema_jwtTokenAuth"></a>
<a id="tocSjwttokenauth"></a>
<a id="tocsjwttokenauth"></a>

```json
{
  "scopes": [
    "scopes",
    "scopes"
  ],
  "params": {
    "token_uri": "token_uri",
    "client_email": "client_email",
    "private_key": "private_key"
  },
  "url": "url"
}
```

For data source plugins. Token authentication section used with an JWT OAuth API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|URL to fetch the JWT token.|
|scopes|[string]|false|none|The list of scopes that your application should be granted access to.|
|params|[params_1](#schemaparams_1)|false|none|Parameters for the JWT token authentication request.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_urlParams_inner">urlParams_inner</h2>
<!-- backwards compatibility -->
<a id="schemaurlparams_inner"></a>
<a id="schema_urlParams_inner"></a>
<a id="tocSurlparams_inner"></a>
<a id="tocsurlparams_inner"></a>

```json
{
  "name": "name",
  "content": "content"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the URL parameter|
|content|string|false|none|Value of the URL parameter|

<h2 id="tocS_routes_inner">routes_inner</h2>
<!-- backwards compatibility -->
<a id="schemaroutes_inner"></a>
<a id="schema_routes_inner"></a>
<a id="tocSroutes_inner"></a>
<a id="tocsroutes_inner"></a>

```json
{
  "reqAction": "reqAction",
  "path": "path",
  "headers": [
    "",
    ""
  ],
  "method": "method",
  "tokenAuth": {
    "scopes": [
      "scopes",
      "scopes"
    ],
    "params": {
      "grant_type": "grant_type",
      "resource": "resource",
      "client_secret": "client_secret",
      "client_id": "client_id"
    },
    "url": "url"
  },
  "jwtTokenAuth": {
    "scopes": [
      "scopes",
      "scopes"
    ],
    "params": {
      "token_uri": "token_uri",
      "client_email": "client_email",
      "private_key": "private_key"
    },
    "url": "url"
  },
  "urlParams": [
    {
      "name": "name",
      "content": "content"
    },
    {
      "name": "name",
      "content": "content"
    }
  ],
  "reqSignedIn": true,
  "reqRole": "reqRole",
  "body": {
    "key": ""
  },
  "url": "url"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|For data source plugins. The route path that is replaced by the route URL field when proxying the call. **Warning**: Don't use an empty string ("").|
|method|string|false|none|For data source plugins. Route method matches the HTTP verb like `GET` or `POST`. Multiple methods can be provided as a comma-separated list.|
|url|string|false|none|For data source plugins. Route URL is where the request is proxied to.|
|reqSignedIn|boolean|false|none|none|
|reqRole|string|false|none|none|
|reqAction|string|false|none|The RBAC action a user must have to use this route. **Warning**: unless the action targets the plugin (or a nested datasource plugin), only the action is verified, not what it applies to.|
|headers|[object]|false|none|For data source plugins. Route headers adds HTTP headers to the proxied request.|
|body|object|false|none|For data source plugins. Route headers set the body content and length to the proxied request.|
|tokenAuth|[tokenAuth](#schematokenauth)|false|none|For data source plugins. Token authentication section used with an OAuth API.|
|jwtTokenAuth|[jwtTokenAuth](#schemajwttokenauth)|false|none|For data source plugins. Token authentication section used with an JWT OAuth API.|
|urlParams|[[urlParams_inner](#schemaurlparams_inner)]|false|none|Add URL parameters to a proxy route|

<h2 id="tocS_permissions_inner">permissions_inner</h2>
<!-- backwards compatibility -->
<a id="schemapermissions_inner"></a>
<a id="schema_permissions_inner"></a>
<a id="tocSpermissions_inner"></a>
<a id="tocspermissions_inner"></a>

```json
{
  "scope": "scope",
  "action": "action"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action, for example: `teams:read`.|
|scope|string|false|none|The scope that the plugin needs to access e.g: `teams:*`.|

<h2 id="tocS_iam">iam</h2>
<!-- backwards compatibility -->
<a id="schemaiam"></a>
<a id="schema_iam"></a>
<a id="tocSiam"></a>
<a id="tocsiam"></a>

```json
{
  "permissions": [
    {
      "scope": "scope",
      "action": "action"
    },
    {
      "scope": "scope",
      "action": "action"
    }
  ]
}
```

Grafana reads the Identity and Access Management section and initializes a service account for the plugin, with a tailored set of [Grafana RBAC permissions](https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/access-control/custom-role-actions-scopes/#rbac-permissions-actions-and-scopes). Grafana will share the service account's bearer token with the plugin backend using the `GF_PLUGIN_APP_CLIENT_SECRET` environment variable. Requires Grafana version 10.3.0 or later. Currently, this is behind the `externalServiceAccounts` feature toggle. To try this feature out, follow this [guide](https://grafana.com/developers/plugin-tools/how-to-guides/app-plugins/implement-rbac-in-app-plugins).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[[permissions_inner](#schemapermissions_inner)]|false|none|Permissions are the permissions that the plugin needs its associated service account to have to query Grafana.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_permissions_inner_1">permissions_inner_1</h2>
<!-- backwards compatibility -->
<a id="schemapermissions_inner_1"></a>
<a id="schema_permissions_inner_1"></a>
<a id="tocSpermissions_inner_1"></a>
<a id="tocspermissions_inner_1"></a>

```json
{
  "scope": "scope",
  "action": "action"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|scope|string|false|none|none|

<h2 id="tocS_role">role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "permissions": [
    {
      "scope": "scope",
      "action": "action"
    },
    {
      "scope": "scope",
      "action": "action"
    }
  ],
  "name": "name",
  "description": "description"
}
```

A role groups your plugin's related RBAC permissions (ex: `Projects Admin` would group permissions to create, read, write and delete projects). The RBAC actions defined in your role must start with your plugin `id` (ex: `grafana-test-app.projects:read`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Display name of the role.|
|description|string|false|none|Describes the aim of the role.|
|permissions|[[permissions_inner_1](#schemapermissions_inner_1)]|false|none|RBAC permission on the plugin.|

<h2 id="tocS_roles_inner">roles_inner</h2>
<!-- backwards compatibility -->
<a id="schemaroles_inner"></a>
<a id="schema_roles_inner"></a>
<a id="tocSroles_inner"></a>
<a id="tocsroles_inner"></a>

```json
{
  "grants": [
    "grants",
    "grants"
  ],
  "role": {
    "permissions": [
      {
        "scope": "scope",
        "action": "action"
      },
      {
        "scope": "scope",
        "action": "action"
      }
    ],
    "name": "name",
    "description": "description"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[role](#schemarole)|false|none|A role groups your plugin's related RBAC permissions (ex: `Projects Admin` would group permissions to create, read, write and delete projects). The RBAC actions defined in your role must start with your plugin `id` (ex: `grafana-test-app.projects:read`).|
|grants|[string]|false|none|Default assignments of the role to Grafana basic roles (`Viewer`, `Editor`, `Admin`, `Grafana Admin`).|

<h2 id="tocS_addedComponents_inner">addedComponents_inner</h2>
<!-- backwards compatibility -->
<a id="schemaaddedcomponents_inner"></a>
<a id="schema_addedComponents_inner"></a>
<a id="tocSaddedcomponents_inner"></a>
<a id="tocsaddedcomponents_inner"></a>

```json
{
  "description": "description",
  "title": "title",
  "targets": [
    "targets",
    "targets"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targets|[string]|true|none|The extension point ids your plugin registers the extension to, e.g. `["grafana/user/profile/tab"]`|
|title|string|true|none|The title of your component extension.|
|description|string|false|none|Additional information about your component extension.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_addedLinks_inner">addedLinks_inner</h2>
<!-- backwards compatibility -->
<a id="schemaaddedlinks_inner"></a>
<a id="schema_addedLinks_inner"></a>
<a id="tocSaddedlinks_inner"></a>
<a id="tocsaddedlinks_inner"></a>

```json
{
  "description": "description",
  "title": "title",
  "targets": [
    "targets",
    "targets"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targets|[string]|true|none|The extension point ids your plugin registers the extension to, e.g. `["grafana/dashboard/panel/menu"]`|
|title|string|true|none|The title of your link extension.|
|description|string|false|none|Additional information about your link extension.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_addedFunctions_inner">addedFunctions_inner</h2>
<!-- backwards compatibility -->
<a id="schemaaddedfunctions_inner"></a>
<a id="schema_addedFunctions_inner"></a>
<a id="tocSaddedfunctions_inner"></a>
<a id="tocsaddedfunctions_inner"></a>

```json
{
  "description": "description",
  "title": "title",
  "targets": [
    "targets",
    "targets"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targets|[string]|true|none|The extension point ids your plugin registers the extension to, e.g. `["grafana/dashboard/panel/menu"]`|
|title|string|true|none|The title of your function extension.|
|description|string|false|none|Additional information about your function extension.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_exposedComponents_inner">exposedComponents_inner</h2>
<!-- backwards compatibility -->
<a id="schemaexposedcomponents_inner"></a>
<a id="schema_exposedComponents_inner"></a>
<a id="tocSexposedcomponents_inner"></a>
<a id="tocsexposedcomponents_inner"></a>

```json
{
  "description": "description",
  "id": "id",
  "title": "title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique identifier for your exposed component. This is used to reference the component in other plugins. It must be in the following format: `{PLUGIN_ID}/name-of-component/v1`. It is recommended to add a version suffix to prevent future breaking changes. E.g.: `myorg-extensions-app/exposed-component/v1`.|
|title|string|false|none|The title of your exposed component.|
|description|string|false|none|Additional information about your exposed component.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_extensionPoints_inner">extensionPoints_inner</h2>
<!-- backwards compatibility -->
<a id="schemaextensionpoints_inner"></a>
<a id="schema_extensionPoints_inner"></a>
<a id="tocSextensionpoints_inner"></a>
<a id="tocsextensionpoints_inner"></a>

```json
{
  "description": "description",
  "id": "id",
  "title": "title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique identifier for your extension point. This is used to reference the extension point in other plugins. It must be in the following format: `{PLUGIN_ID}/name-of-my-extension-point/v1`. It is recommended to add a version suffix to prevent future breaking changes. E.g.: `myorg-extensions-app/extension-point/v1`.|
|title|string|false|none|The title of your extension point.|
|description|string|false|none|Additional information about your extension point.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_extensions_1">extensions_1</h2>
<!-- backwards compatibility -->
<a id="schemaextensions_1"></a>
<a id="schema_extensions_1"></a>
<a id="tocSextensions_1"></a>
<a id="tocsextensions_1"></a>

```json
{
  "addedComponents": [
    {
      "description": "description",
      "title": "title",
      "targets": [
        "targets",
        "targets"
      ]
    },
    {
      "description": "description",
      "title": "title",
      "targets": [
        "targets",
        "targets"
      ]
    }
  ],
  "addedFunctions": [
    {
      "description": "description",
      "title": "title",
      "targets": [
        "targets",
        "targets"
      ]
    },
    {
      "description": "description",
      "title": "title",
      "targets": [
        "targets",
        "targets"
      ]
    }
  ],
  "extensionPoints": [
    {
      "description": "description",
      "id": "id",
      "title": "title"
    },
    {
      "description": "description",
      "id": "id",
      "title": "title"
    }
  ],
  "addedLinks": [
    {
      "description": "description",
      "title": "title",
      "targets": [
        "targets",
        "targets"
      ]
    },
    {
      "description": "description",
      "title": "title",
      "targets": [
        "targets",
        "targets"
      ]
    }
  ],
  "exposedComponents": [
    {
      "description": "description",
      "id": "id",
      "title": "title"
    },
    {
      "description": "description",
      "id": "id",
      "title": "title"
    }
  ]
}
```

Plugin extensions are a way to extend either the UI of core Grafana or other plugins.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedComponents|[[addedComponents_inner](#schemaaddedcomponents_inner)]|false|none|This list must contain all component extensions that your plugin registers to other extension points using [`.addComponent()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#addcomponent). **Components that are not listed here won't work.**|
|addedLinks|[[addedLinks_inner](#schemaaddedlinks_inner)]|false|none|This list must contain all link extensions that your plugin registers to other extension points using [`.addLink()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#addlink). **Links that are not listed here won't work.**|
|addedFunctions|[[addedFunctions_inner](#schemaaddedfunctions_inner)]|false|none|This list must contain all function extensions that your plugin registers to other extension points using [`.addedFunctions()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#addfunction). **Functions that are not listed here won't work.**|
|exposedComponents|[[exposedComponents_inner](#schemaexposedcomponents_inner)]|false|none|This list must contain all components that your plugin exposes using [`.exposeComponent()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#exposecomponent). **Components that are not listed here won't work.**|
|extensionPoints|[[extensionPoints_inner](#schemaextensionpoints_inner)]|false|none|This list must contain all extension points that your plugin defines using [`usePluginLinks()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#usepluginlinks) or [`usePluginComponents()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#useplugincomponents). **Extension points that are not listed in here won't work.**|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_json">json</h2>
<!-- backwards compatibility -->
<a id="schemajson"></a>
<a id="schema_json"></a>
<a id="tocSjson"></a>
<a id="tocsjson"></a>

```json
{
  "$schema": "$schema",
  "hideFromList": true,
  "builtIn": true,
  "enterpriseFeatures": {
    "healthDiagnosticsErrors": true
  },
  "roles": [
    {
      "grants": [
        "grants",
        "grants"
      ],
      "role": {
        "permissions": [
          {
            "scope": "scope",
            "action": "action"
          },
          {
            "scope": "scope",
            "action": "action"
          }
        ],
        "name": "name",
        "description": "description"
      }
    },
    {
      "grants": [
        "grants",
        "grants"
      ],
      "role": {
        "permissions": [
          {
            "scope": "scope",
            "action": "action"
          },
          {
            "scope": "scope",
            "action": "action"
          }
        ],
        "name": "name",
        "description": "description"
      }
    }
  ],
  "annotations": true,
  "buildMode": "buildMode",
  "mixed": true,
  "pascalName": "pascalName",
  "type": "app",
  "preload": true,
  "alerting": true,
  "routes": [
    {
      "reqAction": "reqAction",
      "path": "path",
      "headers": [
        "",
        ""
      ],
      "method": "method",
      "tokenAuth": {
        "scopes": [
          "scopes",
          "scopes"
        ],
        "params": {
          "grant_type": "grant_type",
          "resource": "resource",
          "client_secret": "client_secret",
          "client_id": "client_id"
        },
        "url": "url"
      },
      "jwtTokenAuth": {
        "scopes": [
          "scopes",
          "scopes"
        ],
        "params": {
          "token_uri": "token_uri",
          "client_email": "client_email",
          "private_key": "private_key"
        },
        "url": "url"
      },
      "urlParams": [
        {
          "name": "name",
          "content": "content"
        },
        {
          "name": "name",
          "content": "content"
        }
      ],
      "reqSignedIn": true,
      "reqRole": "reqRole",
      "body": {
        "key": ""
      },
      "url": "url"
    },
    {
      "reqAction": "reqAction",
      "path": "path",
      "headers": [
        "",
        ""
      ],
      "method": "method",
      "tokenAuth": {
        "scopes": [
          "scopes",
          "scopes"
        ],
        "params": {
          "grant_type": "grant_type",
          "resource": "resource",
          "client_secret": "client_secret",
          "client_id": "client_id"
        },
        "url": "url"
      },
      "jwtTokenAuth": {
        "scopes": [
          "scopes",
          "scopes"
        ],
        "params": {
          "token_uri": "token_uri",
          "client_email": "client_email",
          "private_key": "private_key"
        },
        "url": "url"
      },
      "urlParams": [
        {
          "name": "name",
          "content": "content"
        },
        {
          "name": "name",
          "content": "content"
        }
      ],
      "reqSignedIn": true,
      "reqRole": "reqRole",
      "body": {
        "key": ""
      },
      "url": "url"
    }
  ],
  "streaming": true,
  "iam": {
    "permissions": [
      {
        "scope": "scope",
        "action": "action"
      },
      {
        "scope": "scope",
        "action": "action"
      }
    ]
  },
  "backend": true,
  "id": "id",
  "state": "alpha",
  "logs": true,
  "info": {
    "keywords": [
      "keywords",
      "keywords"
    ],
    "build": {
      "number": 7.386281948385884,
      "pr": 1.2315135367772556,
      "build": 1.0246457001441578,
      "repo": "repo",
      "time": 4.145608029883936,
      "branch": "branch",
      "hash": "hash"
    },
    "author": {
      "name": "name",
      "email": "email",
      "url": "url"
    },
    "description": "description",
    "links": [
      {
        "name": "name",
        "url": "url",
        "target": "_blank"
      },
      {
        "name": "name",
        "url": "url",
        "target": "_blank"
      }
    ],
    "logos": {
      "small": "small",
      "large": "large"
    },
    "updated": "updated",
    "version": "version",
    "screenshots": [
      {
        "path": "path",
        "name": "name"
      },
      {
        "path": "path",
        "name": "name"
      }
    ]
  },
  "tracing": true,
  "languages": [
    "languages",
    "languages"
  ],
  "queryOptions": {
    "maxDataPoints": true,
    "cacheTimeout": true,
    "minInterval": true
  },
  "includes": [
    {
      "uid": "uid",
      "path": "path",
      "defaultNav": true,
      "component": "component",
      "role": "Admin",
      "name": "name",
      "icon": "icon",
      "action": "action",
      "type": "dashboard",
      "addToNav": true
    },
    {
      "uid": "uid",
      "path": "path",
      "defaultNav": true,
      "component": "component",
      "role": "Admin",
      "name": "name",
      "icon": "icon",
      "action": "action",
      "type": "dashboard",
      "addToNav": true
    }
  ],
  "executable": "executable",
  "dependencies": {
    "extensions": {
      "exposedComponents": [
        "exposedComponents",
        "exposedComponents"
      ]
    },
    "plugins": [
      {
        "name": "name",
        "id": "id",
        "type": "app"
      },
      {
        "name": "name",
        "id": "id",
        "type": "app"
      }
    ],
    "grafanaVersion": "grafanaVersion",
    "grafanaDependency": "grafanaDependency"
  },
  "skipDataQuery": true,
  "extensions": {
    "addedComponents": [
      {
        "description": "description",
        "title": "title",
        "targets": [
          "targets",
          "targets"
        ]
      },
      {
        "description": "description",
        "title": "title",
        "targets": [
          "targets",
          "targets"
        ]
      }
    ],
    "addedFunctions": [
      {
        "description": "description",
        "title": "title",
        "targets": [
          "targets",
          "targets"
        ]
      },
      {
        "description": "description",
        "title": "title",
        "targets": [
          "targets",
          "targets"
        ]
      }
    ],
    "extensionPoints": [
      {
        "description": "description",
        "id": "id",
        "title": "title"
      },
      {
        "description": "description",
        "id": "id",
        "title": "title"
      }
    ],
    "addedLinks": [
      {
        "description": "description",
        "title": "title",
        "targets": [
          "targets",
          "targets"
        ]
      },
      {
        "description": "description",
        "title": "title",
        "targets": [
          "targets",
          "targets"
        ]
      }
    ],
    "exposedComponents": [
      {
        "description": "description",
        "id": "id",
        "title": "title"
      },
      {
        "description": "description",
        "id": "id",
        "title": "title"
      }
    ]
  },
  "docsPath": "docsPath",
  "autoEnabled": true,
  "multiValueFilterOperators": true,
  "name": "name",
  "suggestions": true,
  "metrics": true,
  "category": "category"
}
```

The `plugin.json` file is required for all plugins. When Grafana starts, it scans the plugin folders and mounts every folder that contains a `plugin.json` file unless the folder contains a subfolder named `dist`. In that case, Grafana mounts the `dist` folder instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique name of the plugin. If the plugin is published on grafana.com, then the plugin `id` has to follow the naming conventions.|
|type|string|true|none|Plugin type.|
|info|[info](#schemainfo)|true|none|Metadata for the plugin. Some fields are used on the plugins page in Grafana and others on grafana.com if the plugin is published.|
|name|string|true|none|Human-readable name of the plugin that is shown to the user in the UI.|
|dependencies|[dependencies](#schemadependencies)|true|none|Dependency information related to Grafana and other plugins.|
|$schema|string|false|none|Schema definition for the plugin.json file. Used primarily for schema validation.|
|alerting|boolean|false|none|For data source plugins, if the plugin supports alerting. Requires `backend` to be set to `true`.|
|annotations|boolean|false|none|For data source plugins, if the plugin supports annotation queries.|
|autoEnabled|boolean|false|none|Set to true for app plugins that should be enabled and pinned to the navigation bar in all orgs.|
|backend|boolean|false|none|If the plugin has a backend component.|
|buildMode|string|false|none|The build mode of the plugin. This field is set automatically at build time, so it should not be provided manually.|
|builtIn|boolean|false|none|[internal only] Indicates whether the plugin is developed and shipped as part of Grafana. Also known as a 'core plugin'.|
|category|string|false|none|Plugin category used on the Add new connection page. Can be one from the list: "tsdb", "logging", "cloud", "tracing", "profiling", "sql", "enterprise", "iot", "other", empty string or custom string|
|docsPath|string|false|none|Path to the directory containing plugin documentation.|
|enterpriseFeatures|[enterpriseFeatures](#schemaenterprisefeatures)|false|none|Grafana Enterprise specific features|
|executable|string|false|none|The first part of the file name of the backend component executable. There can be multiple executables built for different operating system and architecture. Grafana will check for executables named `<executable>_<$GOOS>_<lower case $GOARCH><.exe for Windows>`, e.g. `plugin_linux_amd64`. Combination of $GOOS and $GOARCH can be found here: https://golang.org/doc/install/source#environment.|
|hideFromList|boolean|false|none|[internal only] Excludes the plugin from listings in Grafana's UI. Only allowed for `builtIn` plugins.|
|includes|[[includes_inner](#schemaincludes_inner)]|false|none|Resources to include in plugin.|
|logs|boolean|false|none|For data source plugins, if the plugin supports logs. It may be used to filter logs only features.|
|metrics|boolean|false|none|For data source plugins, if the plugin supports metric queries. Used to enable the plugin in the panel editor.|
|mixed|boolean|false|none|[internal only] For data source plugins, marks the plugin as a 'mixed' data source — one whose queries each carry their own `datasource` reference and are delegated to other data sources. When `true`, Grafana preserves the per-query `datasource` field instead of overwriting it with the plugin's own ref. Used by the built-in `-- Mixed --` data source. Setting this on a regular data source plugin will break query routing.|
|multiValueFilterOperators|boolean|false|none|For data source plugins, if the plugin supports multi value operators in filters.|
|pascalName|string|false|none|[internal only] The PascalCase name for the plugin. Used for creating machine-friendly identifiers, typically in code generation. If not provided, defaults to name, but title-cased and sanitized (only alphabetical characters allowed).|
|preload|boolean|false|none|Initialize plugin on startup. By default, the plugin initializes on first use, but when preload is set to true the plugin loads when the Grafana web app loads the first time. Only applicable to app plugins. When setting to `true`, implement [frontend code splitting](https://grafana.com/developers/plugin-tools/get-started/best-practices#app-plugins) to minimise performance implications.|
|suggestions|boolean|false|none|For panel plugins. If set to true, the plugin's suggestions supplier will be invoked and any suggestions returned will be included in the Suggestions pane in the Panel Editor.|
|queryOptions|[queryOptions](#schemaqueryoptions)|false|none|For data source plugins. There is a query options section in the plugin's query editor and these options can be turned on if needed.|
|routes|[[routes_inner](#schemaroutes_inner)]|false|none|For data source plugins. Proxy routes used for plugin authentication and adding headers to HTTP requests made by the plugin. For more information, refer to [Authentication for data source plugins](https://grafana.com/developers/plugin-tools/how-to-guides/data-source-plugins/add-authentication-for-data-source-plugins).|
|skipDataQuery|boolean|false|none|For panel plugins. Hides the query editor.|
|state|string|false|none|Describes plugins life cycle status|
|streaming|boolean|false|none|For data source plugins, if the plugin supports streaming. Used in Explore to start live streaming.|
|tracing|boolean|false|none|For data source plugins, if the plugin supports tracing. Used for example to link logs (e.g. Loki logs) with tracing plugins.|
|iam|[iam](#schemaiam)|false|none|Grafana reads the Identity and Access Management section and initializes a service account for the plugin, with a tailored set of [Grafana RBAC permissions](https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/access-control/custom-role-actions-scopes/#rbac-permissions-actions-and-scopes). Grafana will share the service account's bearer token with the plugin backend using the `GF_PLUGIN_APP_CLIENT_SECRET` environment variable. Requires Grafana version 10.3.0 or later. Currently, this is behind the `externalServiceAccounts` feature toggle. To try this feature out, follow this [guide](https://grafana.com/developers/plugin-tools/how-to-guides/app-plugins/implement-rbac-in-app-plugins).|
|roles|[[roles_inner](#schemaroles_inner)]|false|none|List of RBAC roles defined by the plugin and their default assignments to basic roles (`Viewer`, `Editor`, `Admin`, `Grafana Admin`). Requires Grafana version 9.4.0 or later.|
|extensions|[extensions_1](#schemaextensions_1)|false|none|Plugin extensions are a way to extend either the UI of core Grafana or other plugins.|
|languages|[string]|false|none|The list of languages supported by the plugin. Each entry should be a locale identifier in the format `language-COUNTRY` (for example `en-US`, `es-ES`, `de-DE`).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|app|
|type|datasource|
|type|panel|
|type|renderer|
|state|alpha|
|state|beta|
|state|deprecated|
|state|stable|

<h2 id="tocS_managed">managed</h2>
<!-- backwards compatibility -->
<a id="schemamanaged"></a>
<a id="schema_managed"></a>
<a id="tocSmanaged"></a>
<a id="tocsmanaged"></a>

```json
{
  "strategy": "strategy",
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|
|strategy|string|false|none|none|

<h2 id="tocS_FormattedApiStackRegion_anyOf">FormattedApiStackRegion_anyOf</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapistackregion_anyof"></a>
<a id="schema_FormattedApiStackRegion_anyOf"></a>
<a id="tocSformattedapistackregion_anyof"></a>
<a id="tocsformattedapistackregion_anyof"></a>

```json
{
  "createdAt": "createdAt",
  "visibility": "visibility",
  "publicName": "publicName",
  "provider": "aws",
  "sortOrder": 6.027456183070403,
  "name": "name",
  "description": "description",
  "id": 0.8008281904610115,
  "slug": "slug",
  "status": "status",
  "updatedAt": "updatedAt"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|status|string|true|none|none|
|visibility|string|true|none|none|
|slug|string|true|none|none|
|name|string|true|none|none|
|publicName|string|true|none|none|
|description|string|true|none|none|
|provider|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string \| null|true|none|none|
|sortOrder|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|aws|
|provider|azure|
|provider|fedramp-palantir|
|provider|gcp|

<h2 id="tocS_pdcPrivateConnectivityInfo_anyOf">pdcPrivateConnectivityInfo_anyOf</h2>
<!-- backwards compatibility -->
<a id="schemapdcprivateconnectivityinfo_anyof"></a>
<a id="schema_pdcPrivateConnectivityInfo_anyOf"></a>
<a id="tocSpdcprivateconnectivityinfo_anyof"></a>
<a id="tocspdcprivateconnectivityinfo_anyof"></a>

```json
{
  "privateDNS": "string",
  "serviceName": "string",
  "regions": [
    "string"
  ],
  "endpointName": "string",
  "serviceId": "string",
  "availabilityZones": [
    "string"
  ],
  "availabilityZoneIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privateDNS|string|true|none|none|
|serviceName|string|true|none|none|
|regions|[string]|false|none|none|
|endpointName|string|false|none|none|
|serviceId|string|false|none|none|
|availabilityZones|[string]|false|none|none|
|availabilityZoneIds|[string]|false|none|none|

<h2 id="tocS_pdcPrivateConnectivityInfo_anyOf_1">pdcPrivateConnectivityInfo_anyOf_1</h2>
<!-- backwards compatibility -->
<a id="schemapdcprivateconnectivityinfo_anyof_1"></a>
<a id="schema_pdcPrivateConnectivityInfo_anyOf_1"></a>
<a id="tocSpdcprivateconnectivityinfo_anyof_1"></a>
<a id="tocspdcprivateconnectivityinfo_anyof_1"></a>

```json
{
  "serviceAttachment": "string",
  "domainNames": [
    "string"
  ],
  "endpointName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAttachment|string|true|none|none|
|domainNames|[string]|true|none|none|
|endpointName|string|true|none|none|

<h2 id="tocS_pdcPrivateConnectivityInfo_anyOf_2">pdcPrivateConnectivityInfo_anyOf_2</h2>
<!-- backwards compatibility -->
<a id="schemapdcprivateconnectivityinfo_anyof_2"></a>
<a id="schema_pdcPrivateConnectivityInfo_anyOf_2"></a>
<a id="tocSpdcprivateconnectivityinfo_anyof_2"></a>
<a id="tocspdcprivateconnectivityinfo_anyof_2"></a>

```json
{
  "alias": "string",
  "endpointName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|true|none|none|
|endpointName|string|false|none|none|

<h2 id="tocS_api_anyOf">api_anyOf</h2>
<!-- backwards compatibility -->
<a id="schemaapi_anyof"></a>
<a id="schema_api_anyOf"></a>
<a id="tocSapi_anyof"></a>
<a id="tocsapi_anyof"></a>

```json
{
  "privateDNS": "string",
  "serviceName": "string",
  "regions": [
    "string"
  ],
  "endpointName": "string",
  "serviceId": "string",
  "availabilityZones": [
    "string"
  ],
  "availabilityZoneIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privateDNS|string|true|none|none|
|serviceName|string|true|none|none|
|regions|[string]|false|none|none|
|endpointName|string|false|none|none|
|serviceId|string|false|none|none|
|availabilityZones|[string]|false|none|none|
|availabilityZoneIds|[string]|false|none|none|

<h2 id="tocS_api_anyOf_1">api_anyOf_1</h2>
<!-- backwards compatibility -->
<a id="schemaapi_anyof_1"></a>
<a id="schema_api_anyOf_1"></a>
<a id="tocSapi_anyof_1"></a>
<a id="tocsapi_anyof_1"></a>

```json
{
  "serviceAttachment": "string",
  "domainNames": [
    "string"
  ],
  "endpointName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAttachment|string|true|none|none|
|domainNames|[string]|true|none|none|
|endpointName|string|true|none|none|

<h2 id="tocS_api_anyOf_2">api_anyOf_2</h2>
<!-- backwards compatibility -->
<a id="schemaapi_anyof_2"></a>
<a id="schema_api_anyOf_2"></a>
<a id="tocSapi_anyof_2"></a>
<a id="tocsapi_anyof_2"></a>

```json
{
  "alias": "string",
  "endpointName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|true|none|none|
|endpointName|string|false|none|none|

<h2 id="tocS_api">api</h2>
<!-- backwards compatibility -->
<a id="schemaapi"></a>
<a id="schema_api"></a>
<a id="tocSapi"></a>
<a id="tocsapi"></a>

```json
{
  "privateDNS": "string",
  "serviceName": "string",
  "regions": [
    "string"
  ],
  "endpointName": "string",
  "serviceId": "string",
  "availabilityZones": [
    "string"
  ],
  "availabilityZoneIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[api_anyOf](#schemaapi_anyof)|false|none|none|
|*anyOf*|[api_anyOf_1](#schemaapi_anyof_1)|false|none|none|
|*anyOf*|[api_anyOf_2](#schemaapi_anyof_2)|false|none|none|

<h2 id="tocS_gateway">gateway</h2>
<!-- backwards compatibility -->
<a id="schemagateway"></a>
<a id="schema_gateway"></a>
<a id="tocSgateway"></a>
<a id="tocsgateway"></a>

```json
{
  "privateDNS": "string",
  "serviceName": "string",
  "regions": [
    "string"
  ],
  "endpointName": "string",
  "serviceId": "string",
  "availabilityZones": [
    "string"
  ],
  "availabilityZoneIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[api_anyOf](#schemaapi_anyof)|false|none|none|
|*anyOf*|[api_anyOf_1](#schemaapi_anyof_1)|false|none|none|
|*anyOf*|[api_anyOf_2](#schemaapi_anyof_2)|false|none|none|

<h2 id="tocS_pdcPrivateConnectivityInfo_anyOf_3">pdcPrivateConnectivityInfo_anyOf_3</h2>
<!-- backwards compatibility -->
<a id="schemapdcprivateconnectivityinfo_anyof_3"></a>
<a id="schema_pdcPrivateConnectivityInfo_anyOf_3"></a>
<a id="tocSpdcprivateconnectivityinfo_anyof_3"></a>
<a id="tocspdcprivateconnectivityinfo_anyof_3"></a>

```json
{
  "api": {
    "privateDNS": "string",
    "serviceName": "string",
    "regions": [
      "string"
    ],
    "endpointName": "string",
    "serviceId": "string",
    "availabilityZones": [
      "string"
    ],
    "availabilityZoneIds": [
      "string"
    ]
  },
  "gateway": {
    "privateDNS": "string",
    "serviceName": "string",
    "regions": [
      "string"
    ],
    "endpointName": "string",
    "serviceId": "string",
    "availabilityZones": [
      "string"
    ],
    "availabilityZoneIds": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|[api](#schemaapi)|true|none|none|
|gateway|[gateway](#schemagateway)|true|none|none|

<h2 id="tocS_mimir">mimir</h2>
<!-- backwards compatibility -->
<a id="schemamimir"></a>
<a id="schema_mimir"></a>
<a id="tocSmimir"></a>
<a id="tocsmimir"></a>

```json
{
  "privateDNS": "string",
  "serviceName": "string",
  "regions": [
    "string"
  ],
  "endpointName": "string",
  "serviceId": "string",
  "availabilityZones": [
    "string"
  ],
  "availabilityZoneIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[api_anyOf](#schemaapi_anyof)|false|none|none|
|*anyOf*|[api_anyOf_1](#schemaapi_anyof_1)|false|none|none|
|*anyOf*|[api_anyOf_2](#schemaapi_anyof_2)|false|none|none|

<h2 id="tocS_graphite">graphite</h2>
<!-- backwards compatibility -->
<a id="schemagraphite"></a>
<a id="schema_graphite"></a>
<a id="tocSgraphite"></a>
<a id="tocsgraphite"></a>

```json
{
  "privateDNS": "string",
  "serviceName": "string",
  "regions": [
    "string"
  ],
  "endpointName": "string",
  "serviceId": "string",
  "availabilityZones": [
    "string"
  ],
  "availabilityZoneIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[api_anyOf](#schemaapi_anyof)|false|none|none|
|*anyOf*|[api_anyOf_1](#schemaapi_anyof_1)|false|none|none|
|*anyOf*|[api_anyOf_2](#schemaapi_anyof_2)|false|none|none|

<h2 id="tocS_otlp">otlp</h2>
<!-- backwards compatibility -->
<a id="schemaotlp"></a>
<a id="schema_otlp"></a>
<a id="tocSotlp"></a>
<a id="tocsotlp"></a>

```json
{
  "privateDNS": "string",
  "serviceName": "string",
  "regions": [
    "string"
  ],
  "endpointName": "string",
  "serviceId": "string",
  "availabilityZones": [
    "string"
  ],
  "availabilityZoneIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf](#schemapdcprivateconnectivityinfo_anyof)|false|none|none|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf_1](#schemapdcprivateconnectivityinfo_anyof_1)|false|none|none|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf_2](#schemapdcprivateconnectivityinfo_anyof_2)|false|none|none|

<h2 id="tocS_pdcPrivateConnectivityInfo_anyOf_4">pdcPrivateConnectivityInfo_anyOf_4</h2>
<!-- backwards compatibility -->
<a id="schemapdcprivateconnectivityinfo_anyof_4"></a>
<a id="schema_pdcPrivateConnectivityInfo_anyOf_4"></a>
<a id="tocSpdcprivateconnectivityinfo_anyof_4"></a>
<a id="tocspdcprivateconnectivityinfo_anyof_4"></a>

```json
{
  "mimir": {
    "privateDNS": "string",
    "serviceName": "string",
    "regions": [
      "string"
    ],
    "endpointName": "string",
    "serviceId": "string",
    "availabilityZones": [
      "string"
    ],
    "availabilityZoneIds": [
      "string"
    ]
  },
  "graphite": {
    "privateDNS": "string",
    "serviceName": "string",
    "regions": [
      "string"
    ],
    "endpointName": "string",
    "serviceId": "string",
    "availabilityZones": [
      "string"
    ],
    "availabilityZoneIds": [
      "string"
    ]
  },
  "otlp": {
    "privateDNS": "string",
    "serviceName": "string",
    "regions": [
      "string"
    ],
    "endpointName": "string",
    "serviceId": "string",
    "availabilityZones": [
      "string"
    ],
    "availabilityZoneIds": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mimir|[mimir](#schemamimir)|true|none|none|
|graphite|[graphite](#schemagraphite)|false|none|none|
|otlp|[otlp](#schemaotlp)|false|none|none|

<h2 id="tocS_pdcPrivateConnectivityInfo">pdcPrivateConnectivityInfo</h2>
<!-- backwards compatibility -->
<a id="schemapdcprivateconnectivityinfo"></a>
<a id="schema_pdcPrivateConnectivityInfo"></a>
<a id="tocSpdcprivateconnectivityinfo"></a>
<a id="tocspdcprivateconnectivityinfo"></a>

```json
{
  "privateDNS": "string",
  "serviceName": "string",
  "regions": [
    "string"
  ],
  "endpointName": "string",
  "serviceId": "string",
  "availabilityZones": [
    "string"
  ],
  "availabilityZoneIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf](#schemapdcprivateconnectivityinfo_anyof)|false|none|none|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf_1](#schemapdcprivateconnectivityinfo_anyof_1)|false|none|none|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf_2](#schemapdcprivateconnectivityinfo_anyof_2)|false|none|none|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf_3](#schemapdcprivateconnectivityinfo_anyof_3)|false|none|none|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf_4](#schemapdcprivateconnectivityinfo_anyof_4)|false|none|none|

<h2 id="tocS_otlpPrivateConnectivityInfo">otlpPrivateConnectivityInfo</h2>
<!-- backwards compatibility -->
<a id="schemaotlpprivateconnectivityinfo"></a>
<a id="schema_otlpPrivateConnectivityInfo"></a>
<a id="tocSotlpprivateconnectivityinfo"></a>
<a id="tocsotlpprivateconnectivityinfo"></a>

```json
{
  "privateDNS": "string",
  "serviceName": "string",
  "regions": [
    "string"
  ],
  "endpointName": "string",
  "serviceId": "string",
  "availabilityZones": [
    "string"
  ],
  "availabilityZoneIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf](#schemapdcprivateconnectivityinfo_anyof)|false|none|none|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf_1](#schemapdcprivateconnectivityinfo_anyof_1)|false|none|none|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf_2](#schemapdcprivateconnectivityinfo_anyof_2)|false|none|none|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf_3](#schemapdcprivateconnectivityinfo_anyof_3)|false|none|none|
|*anyOf*|[pdcPrivateConnectivityInfo_anyOf_4](#schemapdcprivateconnectivityinfo_anyof_4)|false|none|none|

<h2 id="tocS_FormattedApiStackRegion_anyOf_1">FormattedApiStackRegion_anyOf_1</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapistackregion_anyof_1"></a>
<a id="schema_FormattedApiStackRegion_anyOf_1"></a>
<a id="tocSformattedapistackregion_anyof_1"></a>
<a id="tocsformattedapistackregion_anyof_1"></a>

```json
{
  "stackStateServiceUrl": "string",
  "syntheticMonitoringApiUrl": "string",
  "insightsApiUrl": "string",
  "integrationsApiUrl": "string",
  "hostedExportersApiUrl": "string",
  "machineLearningApiUrl": "string",
  "llmGatewayUrl": "string",
  "assistantUrl": "string",
  "sigilUrl": "string",
  "agentO11YUrl": "string",
  "workflowEngineUrl": "string",
  "mobileGatewayUrl": "string",
  "slackServiceUrl": "string",
  "sensitiveDataUrl": "string",
  "incidentApiUrl": "string",
  "oncallApiUrl": "string",
  "faroEndpointUrl": "string",
  "pdcClusterSlug": "string",
  "pdcHostname": "string",
  "pdcPrivateConnectivityInfo": {
    "privateDNS": "string",
    "serviceName": "string",
    "regions": [
      "string"
    ],
    "endpointName": "string",
    "serviceId": "string",
    "availabilityZones": [
      "string"
    ],
    "availabilityZoneIds": [
      "string"
    ]
  },
  "otlpHttpUrl": "string",
  "otlpPrivateConnectivityInfo": {
    "privateDNS": "string",
    "serviceName": "string",
    "regions": [
      "string"
    ],
    "endpointName": "string",
    "serviceId": "string",
    "availabilityZones": [
      "string"
    ],
    "availabilityZoneIds": [
      "string"
    ]
  },
  "authApiUrl": "string",
  "authApiTokenSet": true,
  "hgClusterId": 0,
  "hgClusterSlug": "string",
  "hgClusterName": "string",
  "hgClusterUrl": "string",
  "hmPromClusterId": 0,
  "hmPromClusterSlug": "string",
  "hmPromClusterName": "string",
  "hmPromClusterUrl": "string",
  "hmGraphiteClusterId": 0,
  "hmGraphiteClusterSlug": "string",
  "hmGraphiteClusterName": "string",
  "hmGraphiteClusterUrl": "string",
  "hlClusterId": 0,
  "hlClusterSlug": "string",
  "hlClusterName": "string",
  "hlClusterUrl": "string",
  "amClusterId": 0,
  "amClusterSlug": "string",
  "amClusterName": "string",
  "amClusterUrl": "string",
  "htClusterId": 0,
  "htClusterSlug": "string",
  "htClusterName": "string",
  "htClusterUrl": "string",
  "hpClusterId": 0,
  "hpClusterSlug": "string",
  "hpClusterName": "string",
  "hpClusterUrl": "string",
  "agmClusterId": 0,
  "agmClusterSlug": "string",
  "agmClusterName": "string",
  "agmClusterUrl": "string",
  "assertsGraphClusterId": 0,
  "assertsGraphClusterSlug": "string",
  "assertsGraphClusterName": "string",
  "assertsGraphClusterApiUrl": "string",
  "providerRegion": "string",
  "isStub": true,
  "geoLocation": [
    0
  ],
  "countryCode": "string",
  "complete": true,
  "readyForStacks": true,
  "labels": {},
  "id": 0,
  "status": "string",
  "visibility": "string",
  "slug": "string",
  "name": "string",
  "publicName": "string",
  "description": "string",
  "provider": "aws",
  "createdAt": "string",
  "updatedAt": "string",
  "sortOrder": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stackStateServiceUrl|string|true|none|none|
|syntheticMonitoringApiUrl|string|true|none|none|
|insightsApiUrl|string|true|none|none|
|integrationsApiUrl|string|true|none|none|
|hostedExportersApiUrl|string|true|none|none|
|machineLearningApiUrl|string|true|none|none|
|llmGatewayUrl|string|true|none|none|
|assistantUrl|string|true|none|none|
|sigilUrl|string|true|none|none|
|agentO11YUrl|string|true|none|none|
|workflowEngineUrl|string|true|none|none|
|mobileGatewayUrl|string|true|none|none|
|slackServiceUrl|string|true|none|none|
|sensitiveDataUrl|string|true|none|none|
|incidentApiUrl|string|true|none|none|
|oncallApiUrl|string|true|none|none|
|faroEndpointUrl|string|true|none|none|
|pdcClusterSlug|string|true|none|none|
|pdcHostname|string|true|none|none|
|pdcPrivateConnectivityInfo|[pdcPrivateConnectivityInfo](#schemapdcprivateconnectivityinfo)|true|none|none|
|otlpHttpUrl|string \| null|true|none|none|
|otlpPrivateConnectivityInfo|[otlpPrivateConnectivityInfo](#schemaotlpprivateconnectivityinfo)|true|none|none|
|authApiUrl|string|true|none|none|
|authApiTokenSet|boolean|true|none|none|
|hgClusterId|number|true|none|none|
|hgClusterSlug|string|true|none|none|
|hgClusterName|string|true|none|none|
|hgClusterUrl|string|true|none|none|
|hmPromClusterId|number|true|none|none|
|hmPromClusterSlug|string|true|none|none|
|hmPromClusterName|string|true|none|none|
|hmPromClusterUrl|string|true|none|none|
|hmGraphiteClusterId|number|true|none|none|
|hmGraphiteClusterSlug|string|true|none|none|
|hmGraphiteClusterName|string|true|none|none|
|hmGraphiteClusterUrl|string|true|none|none|
|hlClusterId|number|true|none|none|
|hlClusterSlug|string|true|none|none|
|hlClusterName|string|true|none|none|
|hlClusterUrl|string|true|none|none|
|amClusterId|number|true|none|none|
|amClusterSlug|string|true|none|none|
|amClusterName|string|true|none|none|
|amClusterUrl|string|true|none|none|
|htClusterId|number|true|none|none|
|htClusterSlug|string|true|none|none|
|htClusterName|string|true|none|none|
|htClusterUrl|string|true|none|none|
|hpClusterId|number|true|none|none|
|hpClusterSlug|string|true|none|none|
|hpClusterName|string|true|none|none|
|hpClusterUrl|string|true|none|none|
|agmClusterId|number|true|none|none|
|agmClusterSlug|string|true|none|none|
|agmClusterName|string|true|none|none|
|agmClusterUrl|string|true|none|none|
|assertsGraphClusterId|number|true|none|none|
|assertsGraphClusterSlug|string|true|none|none|
|assertsGraphClusterName|string|true|none|none|
|assertsGraphClusterApiUrl|string \| null|false|none|none|
|providerRegion|string|true|none|none|
|isStub|boolean|true|none|none|
|geoLocation|[number]|false|none|none|
|countryCode|string|false|none|none|
|complete|boolean|true|none|none|
|readyForStacks|boolean|true|none|none|
|labels|object|false|none|none|
|id|number|true|none|none|
|status|string|true|none|none|
|visibility|string|true|none|none|
|slug|string|true|none|none|
|name|string|true|none|none|
|publicName|string|true|none|none|
|description|string|true|none|none|
|provider|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string \| null|true|none|none|
|sortOrder|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|aws|
|provider|azure|
|provider|fedramp-palantir|
|provider|gcp|

<h2 id="tocS_FormattedOrgMembership_marketplaceSubscription">FormattedOrgMembership_marketplaceSubscription</h2>
<!-- backwards compatibility -->
<a id="schemaformattedorgmembership_marketplacesubscription"></a>
<a id="schema_FormattedOrgMembership_marketplaceSubscription"></a>
<a id="tocSformattedorgmembership_marketplacesubscription"></a>
<a id="tocsformattedorgmembership_marketplacesubscription"></a>

```json
{
  "isLegacy": true,
  "provider": "aws"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|string|true|none|none|
|isLegacy|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|aws|
|provider|azure|
|provider|gcp|

<h2 id="tocS_FormattedOrgMembership_grafanaStaffAccess">FormattedOrgMembership_grafanaStaffAccess</h2>
<!-- backwards compatibility -->
<a id="schemaformattedorgmembership_grafanastaffaccess"></a>
<a id="schema_FormattedOrgMembership_grafanaStaffAccess"></a>
<a id="tocSformattedorgmembership_grafanastaffaccess"></a>
<a id="tocsformattedorgmembership_grafanastaffaccess"></a>

```json
{
  "publicReason": "publicReason",
  "accessExpiresAt": "2000-01-23T04:56:07.000+00:00",
  "ticketId": 9.369310271410669
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessExpiresAt|string(date-time)|true|none|none|
|ticketId|number \| null|false|none|none|
|publicReason|string \| null|false|none|none|

<h2 id="tocS_items_inner">items_inner</h2>
<!-- backwards compatibility -->
<a id="schemaitems_inner"></a>
<a id="schema_items_inner"></a>
<a id="tocSitems_inner"></a>
<a id="tocsitems_inner"></a>

```json
{
  "month": 0.8008281904610115,
  "year": 6.027456183070403
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|number|true|none|none|
|year|number|true|none|none|

<h2 id="tocS_items_inner_1">items_inner_1</h2>
<!-- backwards compatibility -->
<a id="schemaitems_inner_1"></a>
<a id="schema_items_inner_1"></a>
<a id="tocSitems_inner_1"></a>
<a id="tocsitems_inner_1"></a>

```json
{
  "grafanaCloud": 6.84685269835264,
  "orgSlug": "orgSlug",
  "subscriptions": {
    "next": "",
    "current": {
      "product": "",
      "endDate": "",
      "payload": "{}",
      "publicName": "",
      "planBillingCycle": "",
      "enterprisePluginsAdded": true,
      "isTrial": true,
      "plan": "",
      "startDate": ""
    }
  },
  "role": "Admin",
  "userStatus": "active",
  "hmCurrentPrometheusUsage": 9.965781217890562,
  "privacy": 1.2315135367772556,
  "grafanaStaffAccess": {
    "publicReason": "publicReason",
    "accessExpiresAt": "2000-01-23T04:56:07.000+00:00",
    "ticketId": 9.369310271410669
  },
  "hlUsage": 4.965218492984954,
  "orgUrl": "orgUrl",
  "orgId": 3,
  "billing": 1.0246457001441578,
  "defaultOrg": 7.386281948385884,
  "createdAt": "createdAt",
  "security": 1.4894159098541704,
  "hgDatasourceCnts": "hgDatasourceCnts",
  "userLastName": "userLastName",
  "userEmail": "userEmail",
  "mfaEnabled": true,
  "id": 9,
  "extraPermissions": [
    "accesspolicies:write",
    "accesspolicies:write"
  ],
  "updatedAt": "updatedAt",
  "userUsername": "userUsername",
  "updatedBy": "updatedBy",
  "orgName": "orgName",
  "userFirstName": "userFirstName",
  "userName": "userName",
  "userId": 2,
  "contractTypeId": 1.1730742509559433,
  "resellerId": 7.457744773683766,
  "hmCurrentGraphiteUsage": 5.025004791520295,
  "createdBy": "createdBy",
  "allowGCloudTrial": true,
  "marketplaceSubscription": {
    "isLegacy": true,
    "provider": "aws"
  },
  "status": 4.145608029883936
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|orgId|integer|true|none|none|
|userId|integer|true|none|none|
|status|number|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string \| null|true|none|none|
|defaultOrg|number|true|none|none|
|role|string|true|none|none|
|privacy|number|true|none|none|
|billing|number|true|none|none|
|security|number|true|none|none|
|createdBy|string|true|none|none|
|updatedBy|string|true|none|none|
|orgName|string|true|none|none|
|orgSlug|string|true|none|none|
|orgUrl|string|true|none|none|
|grafanaCloud|number|true|none|none|
|resellerId|number \| null|true|none|none|
|contractTypeId|number|true|none|none|
|allowGCloudTrial|boolean|true|none|none|
|hlUsage|number|true|none|none|
|hmCurrentGraphiteUsage|number|true|none|none|
|hmCurrentPrometheusUsage|number|true|none|none|
|hgDatasourceCnts|string|true|none|none|
|userFirstName|string|true|none|none|
|userLastName|string|true|none|none|
|userUsername|string|true|none|none|
|userStatus|string|false|none|none|
|userEmail|string|true|none|none|
|userName|string|true|none|none|
|subscriptions|[subscriptions](#schemasubscriptions)|true|none|none|
|marketplaceSubscription|[FormattedOrgMembership_marketplaceSubscription](#schemaformattedorgmembership_marketplacesubscription)|true|none|none|
|mfaEnabled|boolean|false|none|none|
|extraPermissions|[string]|false|none|none|
|grafanaStaffAccess|[FormattedOrgMembership_grafanaStaffAccess](#schemaformattedorgmembership_grafanastaffaccess)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|Admin|
|role|Editor|
|role|None|
|role|SSO Access|
|role|Viewer|
|grafanaCloud|0|
|grafanaCloud|1|
|grafanaCloud|11|
|grafanaCloud|2|
|grafanaCloud|31|
|grafanaCloud|4|
|grafanaCloud|41|
|grafanaCloud|6|
|grafanaCloud|9|
|contractTypeId|0|
|contractTypeId|1|
|contractTypeId|2|
|userStatus|active|
|userStatus|deleted|
|userStatus|pending|
|userStatus|unknown|
|extraPermissions|accesspolicies:write|
|extraPermissions|orgs:read|
|extraPermissions|support-ticket-comments:write|
|extraPermissions|support-tickets:read|
|extraPermissions|support-tickets:write|

<h2 id="tocS_serviceAccounts_inner">serviceAccounts_inner</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccounts_inner"></a>
<a id="schema_serviceAccounts_inner"></a>
<a id="tocSserviceaccounts_inner"></a>
<a id="tocsserviceaccounts_inner"></a>

```json
{
  "name": "name",
  "id": 6
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_FormattedApiApiKey_id">FormattedApiApiKey_id</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiapikey_id"></a>
<a id="schema_FormattedApiApiKey_id"></a>
<a id="tocSformattedapiapikey_id"></a>
<a id="tocsformattedapiapikey_id"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|number|false|none|none|

<h2 id="tocS_FormattedApiApiKeyListResponse_items_inner">FormattedApiApiKeyListResponse_items_inner</h2>
<!-- backwards compatibility -->
<a id="schemaformattedapiapikeylistresponse_items_inner"></a>
<a id="schema_FormattedApiApiKeyListResponse_items_inner"></a>
<a id="tocSformattedapiapikeylistresponse_items_inner"></a>
<a id="tocsformattedapiapikeylistresponse_items_inner"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[FormattedApiApiKey_id](#schemaformattedapiapikey_id)|false|none|none|
