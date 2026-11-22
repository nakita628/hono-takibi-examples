import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOauthAuthorize(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.$get(args, options))
}

export async function postOauthAuthorize(
  args: InferRequestType<typeof client.oauth.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.$post(args, options))
}

export async function getOauthAuthorizeContext(
  args: InferRequestType<typeof client.oauth.authorize.context.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.context.$get(args, options))
}

export async function getWellKnownOauthAuthorizationServer(options?: ClientRequestOptions) {
  return await parseResponse(
    client['.well-known']['oauth-authorization-server'].$get(undefined, options),
  )
}

export async function postOauthRegister(
  args: InferRequestType<typeof client.oauth.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.register.$post(args, options))
}

export async function postOauthRevoke(
  args: InferRequestType<typeof client.oauth.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.revoke.$post(args, options))
}

export async function postOauthToken(
  args: InferRequestType<typeof client.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.token.$post(args, options))
}

export async function postOpikAuthOauth(
  args: InferRequestType<(typeof client.opik)['auth-oauth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.opik['auth-oauth'].$post(args, options))
}

export async function postV1InternalAgentInsightsEnrollment(
  args: InferRequestType<(typeof client.v1.internal)['agent-insights']['enrollment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.internal['agent-insights'].enrollment.$post(args, options))
}

export async function postV1InternalAnalyticsQueriesProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.internal)['analytics-queries']['projects'][':projectId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.internal['analytics-queries'].projects[':projectId'].$post(args, options),
  )
}

export async function postV1InternalAnalyticsQueries(
  args: InferRequestType<(typeof client.v1.internal)['analytics-queries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.internal['analytics-queries'].$post(args, options))
}

export async function postV1InternalDashboardSavedQueries(
  args: InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.internal['dashboard-saved-queries'].$post(args, options))
}

export async function getV1InternalDashboardSavedQueriesId(
  args: InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.internal['dashboard-saved-queries'][':id'].$get(args, options),
  )
}

export async function postV1InternalUsageProjects(
  args: InferRequestType<typeof client.v1.internal.usage.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.internal.usage.projects.$post(args, options))
}

export async function getV1InternalUsageBiDatasets(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.internal.usage['bi-datasets'].$get(undefined, options))
}

export async function getV1InternalUsageBiExperiments(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.internal.usage['bi-experiments'].$get(undefined, options))
}

export async function getV1InternalUsageBiSpans(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.internal.usage['bi-spans'].$get(undefined, options))
}

export async function getV1InternalUsageWorkspaceSpanCountsBreakdown(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.internal.usage['workspace-span-counts-breakdown'].$get(undefined, options),
  )
}

export async function getV1InternalUsageWorkspaceSpanCounts(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.internal.usage['workspace-span-counts'].$get(undefined, options),
  )
}

export async function getV1InternalUsageBiTraces(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.internal.usage['bi-traces'].$get(undefined, options))
}

export async function getV1InternalUsageWorkspaceTraceCounts(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.internal.usage['workspace-trace-counts'].$get(undefined, options),
  )
}

export async function postV1PrivateAgentConfigsBlueprints(
  args: InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['agent-configs'].blueprints.$post(args, options))
}

export async function patchV1PrivateAgentConfigsBlueprints(
  args: InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['agent-configs'].blueprints.$patch(args, options))
}

export async function postV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['masks'][':mask_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints.projects[':project_id'].masks[':mask_id'].$post(
      args,
      options,
    ),
  )
}

export async function postV1PrivateAgentConfigsBlueprintsEnvironments(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['environments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints.environments.$post(args, options),
  )
}

export async function getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
      ':project_id'
    ].$get(args, options),
  )
}

export async function putV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
      ':project_id'
    ].$put(args, options),
  )
}

export async function deleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
      ':project_id'
    ].$delete(args, options),
  )
}

export async function getV1PrivateAgentConfigsBlueprintsBlueprintId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints[':blueprint_id'].$get(args, options),
  )
}

export async function getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesName(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints.projects[':project_id'].names[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints.history.projects[':project_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltas(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints[':blueprint_id'].deltas.$get(args, options),
  )
}

export async function getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints.latest.projects[':project_id'].$get(
      args,
      options,
    ),
  )
}

export async function postV1PrivateAgentConfigsBlueprintsRemoveKeys(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['remove-keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-configs'].blueprints['remove-keys'].$post(args, options),
  )
}

export async function getV1PrivateAgentInsightsJobsProjectId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-insights'].jobs[':projectId'].$get(args, options),
  )
}

export async function postV1PrivateAgentInsightsJobsProjectId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-insights'].jobs[':projectId'].$post(args, options),
  )
}

export async function patchV1PrivateAgentInsightsJobsProjectId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-insights'].jobs[':projectId'].$patch(args, options),
  )
}

export async function postV1PrivateAgentInsightsJobsProjectIdTrigger(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['trigger']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-insights'].jobs[':projectId'].trigger.$post(args, options),
  )
}

export async function putV1PrivateAgentInsightsJobsProjectIdGuidance(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['guidance']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-insights'].jobs[':projectId'].guidance.$put(args, options),
  )
}

export async function getV1PrivateAgentInsightsIssues(
  args: InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['agent-insights'].issues.$get(args, options))
}

export async function postV1PrivateAgentInsightsIssues(
  args: InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['agent-insights'].issues.$post(args, options))
}

export async function getV1PrivateAgentInsightsIssuesIssueId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-insights'].issues[':issue_id'].$get(args, options),
  )
}

export async function patchV1PrivateAgentInsightsIssuesIssueId(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['agent-insights'].issues[':issue_id'].$patch(args, options),
  )
}

export async function getV1PrivateAlerts(
  args: InferRequestType<typeof client.v1.private.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.alerts.$get(args, options))
}

export async function postV1PrivateAlerts(
  args: InferRequestType<typeof client.v1.private.alerts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.alerts.$post(args, options))
}

export async function postV1PrivateAlertsDelete(
  args: InferRequestType<typeof client.v1.private.alerts.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.alerts.delete.$post(args, options))
}

export async function getV1PrivateAlertsId(
  args: InferRequestType<(typeof client.v1.private.alerts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.alerts[':id'].$get(args, options))
}

export async function putV1PrivateAlertsId(
  args: InferRequestType<(typeof client.v1.private.alerts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.alerts[':id'].$put(args, options))
}

export async function getV1PrivateAlertsWebhooksExamples(
  args: InferRequestType<typeof client.v1.private.alerts.webhooks.examples.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.alerts.webhooks.examples.$get(args, options))
}

export async function postV1PrivateAlertsWebhooksTests(
  args: InferRequestType<typeof client.v1.private.alerts.webhooks.tests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.alerts.webhooks.tests.$post(args, options))
}

export async function postV1PrivateAnnotationQueuesIdItemsAdd(
  args: InferRequestType<
    (typeof client.v1.private)['annotation-queues'][':id']['items']['add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['annotation-queues'][':id'].items.add.$post(args, options),
  )
}

export async function getV1PrivateAnnotationQueues(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['annotation-queues'].$get(args, options))
}

export async function postV1PrivateAnnotationQueues(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['annotation-queues'].$post(args, options))
}

export async function postV1PrivateAnnotationQueuesBatch(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['annotation-queues'].batch.$post(args, options))
}

export async function postV1PrivateAnnotationQueuesDelete(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['annotation-queues'].delete.$post(args, options))
}

export async function getV1PrivateAnnotationQueuesId(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['annotation-queues'][':id'].$get(args, options))
}

export async function patchV1PrivateAnnotationQueuesId(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['annotation-queues'][':id'].$patch(args, options))
}

export async function getV1PrivateAnnotationQueuesQueueIdLocks(
  args: InferRequestType<
    (typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['annotation-queues'][':queueId'].locks.$get(args, options),
  )
}

export async function putV1PrivateAnnotationQueuesQueueIdItemsItemIdLock(
  args: InferRequestType<
    (typeof client.v1.private)['annotation-queues'][':queueId']['items'][':itemId']['lock']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['annotation-queues'][':queueId'].items[':itemId'].lock.$put(args, options),
  )
}

export async function postV1PrivateAnnotationQueuesIdItemsDelete(
  args: InferRequestType<
    (typeof client.v1.private)['annotation-queues'][':id']['items']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['annotation-queues'][':id'].items.delete.$post(args, options),
  )
}

export async function postV1PrivateAnnotationQueuesIdItemsSearch(
  args: InferRequestType<
    (typeof client.v1.private)['annotation-queues'][':id']['items']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['annotation-queues'][':id'].items.search.$post(args, options),
  )
}

export async function putV1PrivateAssertionResults(
  args: InferRequestType<(typeof client.v1.private)['assertion-results']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['assertion-results'].$put(args, options))
}

export async function getV1PrivateAttachmentList(
  args: InferRequestType<typeof client.v1.private.attachment.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.attachment.list.$get(args, options))
}

export async function postV1PrivateAttachmentUploadComplete(
  args: InferRequestType<(typeof client.v1.private.attachment)['upload-complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.attachment['upload-complete'].$post(args, options))
}

export async function postV1PrivateAttachmentDelete(
  args: InferRequestType<typeof client.v1.private.attachment.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.attachment.delete.$post(args, options))
}

export async function getV1PrivateAttachmentDownload(
  args: InferRequestType<typeof client.v1.private.attachment.download.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.attachment.download.$get(args, options))
}

export async function postV1PrivateAttachmentUploadStart(
  args: InferRequestType<(typeof client.v1.private.attachment)['upload-start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.attachment['upload-start'].$post(args, options))
}

export async function putV1PrivateAttachmentUpload(
  args: InferRequestType<typeof client.v1.private.attachment.upload.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.attachment.upload.$put(args, options))
}

export async function postV1PrivateAuth(
  args: InferRequestType<typeof client.v1.private.auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.auth.$post(args, options))
}

export async function getV1PrivateAuthWorkspace(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private.auth.workspace.$get(undefined, options))
}

export async function getV1PrivateAutomationsEvaluators(
  args: InferRequestType<typeof client.v1.private.automations.evaluators.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.automations.evaluators.$get(args, options))
}

export async function postV1PrivateAutomationsEvaluators(
  args: InferRequestType<typeof client.v1.private.automations.evaluators.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.automations.evaluators.$post(args, options))
}

export async function postV1PrivateAutomationsEvaluatorsDelete(
  args: InferRequestType<typeof client.v1.private.automations.evaluators.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.automations.evaluators.delete.$post(args, options))
}

export async function getV1PrivateAutomationsEvaluatorsId(
  args: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.automations.evaluators[':id'].$get(args, options))
}

export async function patchV1PrivateAutomationsEvaluatorsId(
  args: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.automations.evaluators[':id'].$patch(args, options))
}

export async function getV1PrivateAutomationsEvaluatorsIdLogs(
  args: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.automations.evaluators[':id'].logs.$get(args, options),
  )
}

export async function postV1PrivateChatCompletions(
  args: InferRequestType<typeof client.v1.private.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.chat.completions.$post(args, options))
}

export async function getV1PrivateDashboards(
  args: InferRequestType<typeof client.v1.private.dashboards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.dashboards.$get(args, options))
}

export async function postV1PrivateDashboards(
  args: InferRequestType<typeof client.v1.private.dashboards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.dashboards.$post(args, options))
}

export async function getV1PrivateDashboardsDashboardId(
  args: InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.dashboards[':dashboardId'].$get(args, options))
}

export async function deleteV1PrivateDashboardsDashboardId(
  args: InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.dashboards[':dashboardId'].$delete(args, options))
}

export async function patchV1PrivateDashboardsDashboardId(
  args: InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.dashboards[':dashboardId'].$patch(args, options))
}

export async function postV1PrivateDashboardsDeleteBatch(
  args: InferRequestType<(typeof client.v1.private.dashboards)['delete-batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.dashboards['delete-batch'].$post(args, options))
}

export async function postV1PrivateDashboardsDashboardIdWidgetsWidgetIdQuery(
  args: InferRequestType<
    (typeof client.v1.private.dashboards)[':dashboardId']['widgets'][':widgetId']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.dashboards[':dashboardId'].widgets[':widgetId'].query.$post(args, options),
  )
}

export async function postV1PrivateDatasetsIdItemsChanges(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['changes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets[':id'].items.changes.$post(args, options))
}

export async function patchV1PrivateDatasetsItemsBatch(
  args: InferRequestType<typeof client.v1.private.datasets.items.batch.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.items.batch.$patch(args, options))
}

export async function getV1PrivateDatasets(
  args: InferRequestType<typeof client.v1.private.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.$get(args, options))
}

export async function postV1PrivateDatasets(
  args: InferRequestType<typeof client.v1.private.datasets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.$post(args, options))
}

export async function putV1PrivateDatasetsItems(
  args: InferRequestType<typeof client.v1.private.datasets.items.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.items.$put(args, options))
}

export async function postV1PrivateDatasetsItemsFromCsv(
  args: InferRequestType<(typeof client.v1.private.datasets.items)['from-csv']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.items['from-csv'].$post(args, options))
}

export async function postV1PrivateDatasetsItemsFromJson(
  args: InferRequestType<(typeof client.v1.private.datasets.items)['from-json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.items['from-json'].$post(args, options))
}

export async function postV1PrivateDatasetsDatasetIdItemsFromSpans(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':dataset_id']['items']['from-spans']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':dataset_id'].items['from-spans'].$post(args, options),
  )
}

export async function postV1PrivateDatasetsDatasetIdItemsFromTraces(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':dataset_id']['items']['from-traces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':dataset_id'].items['from-traces'].$post(args, options),
  )
}

export async function getV1PrivateDatasetsId(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets[':id'].$get(args, options))
}

export async function putV1PrivateDatasetsId(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets[':id'].$put(args, options))
}

export async function deleteV1PrivateDatasetsId(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets[':id'].$delete(args, options))
}

export async function postV1PrivateDatasetsDelete(
  args: InferRequestType<typeof client.v1.private.datasets.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.delete.$post(args, options))
}

export async function postV1PrivateDatasetsItemsDelete(
  args: InferRequestType<typeof client.v1.private.datasets.items.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.items.delete.$post(args, options))
}

export async function postV1PrivateDatasetsDeleteBatch(
  args: InferRequestType<(typeof client.v1.private.datasets)['delete-batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets['delete-batch'].$post(args, options))
}

export async function getV1PrivateDatasetsExportJobsJobIdDownload(
  args: InferRequestType<
    (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets['export-jobs'][':jobId'].download.$get(args, options),
  )
}

export async function postV1PrivateDatasetsIdExpansions(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['expansions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets[':id'].expansions.$post(args, options))
}

export async function getV1PrivateDatasetsIdItemsExperimentsItems(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':id'].items.experiments.items.$get(args, options),
  )
}

export async function postV1PrivateDatasetsRetrieve(
  args: InferRequestType<typeof client.v1.private.datasets.retrieve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.retrieve.$post(args, options))
}

export async function getV1PrivateDatasetsIdItemsExperimentsItemsStats(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':id'].items.experiments.items.stats.$get(args, options),
  )
}

export async function getV1PrivateDatasetsExportJobsJobId(
  args: InferRequestType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets['export-jobs'][':jobId'].$get(args, options),
  )
}

export async function getV1PrivateDatasetsExportJobs(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private.datasets['export-jobs'].$get(undefined, options))
}

export async function getV1PrivateDatasetsItemsItemId(
  args: InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.items[':itemId'].$get(args, options))
}

export async function patchV1PrivateDatasetsItemsItemId(
  args: InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.items[':itemId'].$patch(args, options))
}

export async function getV1PrivateDatasetsIdItems(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets[':id'].items.$get(args, options))
}

export async function getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumns(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':id'].items.experiments.items.output.columns.$get(args, options),
  )
}

export async function putV1PrivateDatasetsExportJobsJobIdMarkViewed(
  args: InferRequestType<
    (typeof client.v1.private.datasets)['export-jobs'][':jobId']['mark-viewed']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets['export-jobs'][':jobId']['mark-viewed'].$put(args, options),
  )
}

export async function postV1PrivateDatasetsIdExport(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets[':id'].export.$post(args, options))
}

export async function postV1PrivateDatasetsItemsStream(
  args: InferRequestType<typeof client.v1.private.datasets.items.stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets.items.stream.$post(args, options))
}

export async function getV1PrivateDatasetsIdVersionsDiff(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets[':id'].versions.diff.$get(args, options))
}

export async function postV1PrivateDatasetsIdVersionsHashVersionHashTags(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['tags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':id'].versions.hash[':versionHash'].tags.$post(args, options),
  )
}

export async function deleteV1PrivateDatasetsIdVersionsVersionHashTagsTag(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['versions'][':versionHash']['tags'][':tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':id'].versions[':versionHash'].tags[':tag'].$delete(args, options),
  )
}

export async function getV1PrivateDatasetsIdVersionsHashVersionHash(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':id'].versions.hash[':versionHash'].$get(args, options),
  )
}

export async function patchV1PrivateDatasetsIdVersionsHashVersionHash(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':id'].versions.hash[':versionHash'].$patch(args, options),
  )
}

export async function getV1PrivateDatasetsIdVersions(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.datasets[':id'].versions.$get(args, options))
}

export async function postV1PrivateDatasetsIdVersionsRestore(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['versions']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':id'].versions.restore.$post(args, options),
  )
}

export async function postV1PrivateDatasetsIdVersionsRetrieve(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['versions']['retrieve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.datasets[':id'].versions.retrieve.$post(args, options),
  )
}

export async function getV1PrivateEnvironments(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private.environments.$get(undefined, options))
}

export async function postV1PrivateEnvironments(
  args: InferRequestType<typeof client.v1.private.environments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.environments.$post(args, options))
}

export async function postV1PrivateEnvironmentsDelete(
  args: InferRequestType<typeof client.v1.private.environments.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.environments.delete.$post(args, options))
}

export async function getV1PrivateEnvironmentsId(
  args: InferRequestType<(typeof client.v1.private.environments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.environments[':id'].$get(args, options))
}

export async function patchV1PrivateEnvironmentsId(
  args: InferRequestType<(typeof client.v1.private.environments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.environments[':id'].$patch(args, options))
}

export async function patchV1PrivateExperimentsBatch(
  args: InferRequestType<typeof client.v1.private.experiments.batch.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.batch.$patch(args, options))
}

export async function putV1PrivateExperimentsCancel(
  args: InferRequestType<typeof client.v1.private.experiments.cancel.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.cancel.$put(args, options))
}

export async function getV1PrivateExperiments(
  args: InferRequestType<typeof client.v1.private.experiments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.$get(args, options))
}

export async function postV1PrivateExperiments(
  args: InferRequestType<typeof client.v1.private.experiments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.$post(args, options))
}

export async function postV1PrivateExperimentsItems(
  args: InferRequestType<typeof client.v1.private.experiments.items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.items.$post(args, options))
}

export async function postV1PrivateExperimentsItemsDelete(
  args: InferRequestType<typeof client.v1.private.experiments.items.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.items.delete.$post(args, options))
}

export async function postV1PrivateExperimentsDelete(
  args: InferRequestType<typeof client.v1.private.experiments.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.delete.$post(args, options))
}

export async function postV1PrivateExperimentsExecute(
  args: InferRequestType<typeof client.v1.private.experiments.execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.execute.$post(args, options))
}

export async function putV1PrivateExperimentsItemsBulk(
  args: InferRequestType<typeof client.v1.private.experiments.items.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.items.bulk.$put(args, options))
}

export async function getV1PrivateExperimentsFeedbackScoresNames(
  args: InferRequestType<
    (typeof client.v1.private.experiments)['feedback-scores']['names']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.experiments['feedback-scores'].names.$get(args, options),
  )
}

export async function getV1PrivateExperimentsGroups(
  args: InferRequestType<typeof client.v1.private.experiments.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.groups.$get(args, options))
}

export async function getV1PrivateExperimentsGroupsAggregations(
  args: InferRequestType<typeof client.v1.private.experiments.groups.aggregations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.groups.aggregations.$get(args, options))
}

export async function postV1PrivateExperimentsFinish(
  args: InferRequestType<typeof client.v1.private.experiments.finish.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.finish.$post(args, options))
}

export async function getV1PrivateExperimentsId(
  args: InferRequestType<(typeof client.v1.private.experiments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments[':id'].$get(args, options))
}

export async function patchV1PrivateExperimentsId(
  args: InferRequestType<(typeof client.v1.private.experiments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments[':id'].$patch(args, options))
}

export async function getV1PrivateExperimentsItemsId(
  args: InferRequestType<(typeof client.v1.private.experiments.items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.items[':id'].$get(args, options))
}

export async function postV1PrivateExperimentsItemsStream(
  args: InferRequestType<typeof client.v1.private.experiments.items.stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.items.stream.$post(args, options))
}

export async function postV1PrivateExperimentsStream(
  args: InferRequestType<typeof client.v1.private.experiments.stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.experiments.stream.$post(args, options))
}

export async function getV1PrivateFeedbackDefinitions(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['feedback-definitions'].$get(args, options))
}

export async function postV1PrivateFeedbackDefinitions(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['feedback-definitions'].$post(args, options))
}

export async function getV1PrivateFeedbackDefinitionsId(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['feedback-definitions'][':id'].$get(args, options))
}

export async function putV1PrivateFeedbackDefinitionsId(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['feedback-definitions'][':id'].$put(args, options))
}

export async function deleteV1PrivateFeedbackDefinitionsId(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['feedback-definitions'][':id'].$delete(args, options),
  )
}

export async function postV1PrivateFeedbackDefinitionsDelete(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['feedback-definitions'].delete.$post(args, options))
}

export async function getV1PrivateGuardrailsPolicies(
  args: InferRequestType<typeof client.v1.private.guardrails.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.guardrails.policies.$get(args, options))
}

export async function postV1PrivateGuardrailsPolicies(
  args: InferRequestType<typeof client.v1.private.guardrails.policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.guardrails.policies.$post(args, options))
}

export async function getV1PrivateGuardrailsPoliciesId(
  args: InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.guardrails.policies[':id'].$get(args, options))
}

export async function putV1PrivateGuardrailsPoliciesId(
  args: InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.guardrails.policies[':id'].$put(args, options))
}

export async function deleteV1PrivateGuardrailsPoliciesId(
  args: InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.guardrails.policies[':id'].$delete(args, options))
}

export async function postV1PrivateGuardrails(
  args: InferRequestType<typeof client.v1.private.guardrails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.guardrails.$post(args, options))
}

export async function postV1PrivateGuardrailsValidations(
  args: InferRequestType<typeof client.v1.private.guardrails.validations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.guardrails.validations.$post(args, options))
}

export async function getV1PrivateInsightsViews(
  args: InferRequestType<(typeof client.v1.private)['insights-views']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['insights-views'].$get(args, options))
}

export async function postV1PrivateInsightsViews(
  args: InferRequestType<(typeof client.v1.private)['insights-views']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['insights-views'].$post(args, options))
}

export async function getV1PrivateInsightsViewsInsightsViewId(
  args: InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['insights-views'][':insightsViewId'].$get(args, options),
  )
}

export async function deleteV1PrivateInsightsViewsInsightsViewId(
  args: InferRequestType<
    (typeof client.v1.private)['insights-views'][':insightsViewId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['insights-views'][':insightsViewId'].$delete(args, options),
  )
}

export async function patchV1PrivateInsightsViewsInsightsViewId(
  args: InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['insights-views'][':insightsViewId'].$patch(args, options),
  )
}

export async function postV1PrivateInsightsViewsDeleteBatch(
  args: InferRequestType<(typeof client.v1.private)['insights-views']['delete-batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['insights-views']['delete-batch'].$post(args, options),
  )
}

export async function postV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQuery(
  args: InferRequestType<
    (typeof client.v1.private)['insights-views'][':insightsViewId']['widgets'][':widgetId']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['insights-views'][':insightsViewId'].widgets[':widgetId'].query.$post(
      args,
      options,
    ),
  )
}

export async function getV1PrivateLlmModels(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private.llm.models.$get(undefined, options))
}

export async function getV1PrivateLlmModelsProfiles(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private.llm.models.profiles.$get(undefined, options))
}

export async function postV1PrivateLlmProviderKeyDelete(
  args: InferRequestType<(typeof client.v1.private)['llm-provider-key']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['llm-provider-key'].delete.$post(args, options))
}

export async function getV1PrivateLlmProviderKey(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private['llm-provider-key'].$get(undefined, options))
}

export async function postV1PrivateLlmProviderKey(
  args: InferRequestType<(typeof client.v1.private)['llm-provider-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['llm-provider-key'].$post(args, options))
}

export async function getV1PrivateLlmProviderKeyId(
  args: InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['llm-provider-key'][':id'].$get(args, options))
}

export async function patchV1PrivateLlmProviderKeyId(
  args: InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['llm-provider-key'][':id'].$patch(args, options))
}

export async function postV1PrivateLlmProviderKeyAuthConfigTest(
  args: InferRequestType<
    (typeof client.v1.private)['llm-provider-key']['auth-config']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['llm-provider-key']['auth-config'].test.$post(args, options),
  )
}

export async function getV1PrivateLocalRunnersJobsJobIdLogs(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'].jobs[':jobId'].logs.$get(args, options),
  )
}

export async function postV1PrivateLocalRunnersJobsJobIdLogs(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'].jobs[':jobId'].logs.$post(args, options),
  )
}

export async function postV1PrivateLocalRunnersJobsJobIdCancel(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners']['jobs'][':jobId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'].jobs[':jobId'].cancel.$post(args, options),
  )
}

export async function postV1PrivateLocalRunnersRunnerIdBridgeCommands(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'][':runnerId'].bridge.commands.$post(args, options),
  )
}

export async function postV1PrivateLocalRunnersJobs(
  args: InferRequestType<(typeof client.v1.private)['local-runners']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['local-runners'].jobs.$post(args, options))
}

export async function getV1PrivateLocalRunnersRunnerId(
  args: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['local-runners'][':runnerId'].$get(args, options))
}

export async function deleteV1PrivateLocalRunnersRunnerId(
  args: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['local-runners'][':runnerId'].$delete(args, options))
}

export async function getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandId(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'][':runnerId'].bridge.commands[':commandId'].$get(
      args,
      options,
    ),
  )
}

export async function getV1PrivateLocalRunnersJobsJobId(
  args: InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['local-runners'].jobs[':jobId'].$get(args, options))
}

export async function postV1PrivateLocalRunnersRunnerIdHeartbeats(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['heartbeats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'][':runnerId'].heartbeats.$post(args, options),
  )
}

export async function getV1PrivateLocalRunnersRunnerIdJobs(
  args: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'][':runnerId'].jobs.$get(args, options),
  )
}

export async function getV1PrivateLocalRunners(
  args: InferRequestType<(typeof client.v1.private)['local-runners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['local-runners'].$get(args, options))
}

export async function postV1PrivateLocalRunnersRunnerIdBridgeCommandsNext(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['next']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'][':runnerId'].bridge.commands.next.$post(args, options),
  )
}

export async function postV1PrivateLocalRunnersRunnerIdJobsNext(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['jobs']['next']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'][':runnerId'].jobs.next.$post(args, options),
  )
}

export async function patchV1PrivateLocalRunnersRunnerIdChecklist(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['checklist']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'][':runnerId'].checklist.$patch(args, options),
  )
}

export async function putV1PrivateLocalRunnersRunnerIdAgents(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['agents']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'][':runnerId'].agents.$put(args, options),
  )
}

export async function postV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResults(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['results']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'][':runnerId'].bridge.commands[':commandId'].results.$post(
      args,
      options,
    ),
  )
}

export async function postV1PrivateLocalRunnersJobsJobIdResults(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners']['jobs'][':jobId']['results']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private['local-runners'].jobs[':jobId'].results.$post(args, options),
  )
}

export async function postV1PrivateManualEvaluationSpans(
  args: InferRequestType<(typeof client.v1.private)['manual-evaluation']['spans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['manual-evaluation'].spans.$post(args, options))
}

export async function postV1PrivateManualEvaluationThreads(
  args: InferRequestType<(typeof client.v1.private)['manual-evaluation']['threads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['manual-evaluation'].threads.$post(args, options))
}

export async function postV1PrivateManualEvaluationTraces(
  args: InferRequestType<(typeof client.v1.private)['manual-evaluation']['traces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['manual-evaluation'].traces.$post(args, options))
}

export async function postV1PrivateOllamaModels(
  args: InferRequestType<typeof client.v1.private.ollama.models.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.ollama.models.$post(args, options))
}

export async function postV1PrivateOllamaTestConnection(
  args: InferRequestType<(typeof client.v1.private.ollama)['test-connection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.ollama['test-connection'].$post(args, options))
}

export async function getV1PrivateOllieState(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private.ollie.state.$get(undefined, options))
}

export async function putV1PrivateOllieState(
  args: InferRequestType<typeof client.v1.private.ollie.state.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.ollie.state.$put(args, options))
}

export async function deleteV1PrivateOllieState(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private.ollie.state.$delete(undefined, options))
}

export async function postV1PrivateOtelV1Traces(
  args: InferRequestType<typeof client.v1.private.otel.v1.traces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.otel.v1.traces.$post(args, options))
}

export async function getV1PrivateOptimizations(
  args: InferRequestType<typeof client.v1.private.optimizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.optimizations.$get(args, options))
}

export async function putV1PrivateOptimizations(
  args: InferRequestType<typeof client.v1.private.optimizations.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.optimizations.$put(args, options))
}

export async function postV1PrivateOptimizations(
  args: InferRequestType<typeof client.v1.private.optimizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.optimizations.$post(args, options))
}

export async function postV1PrivateOptimizationsDelete(
  args: InferRequestType<typeof client.v1.private.optimizations.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.optimizations.delete.$post(args, options))
}

export async function getV1PrivateOptimizationsId(
  args: InferRequestType<(typeof client.v1.private.optimizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.optimizations[':id'].$get(args, options))
}

export async function putV1PrivateOptimizationsId(
  args: InferRequestType<(typeof client.v1.private.optimizations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.optimizations[':id'].$put(args, options))
}

export async function getV1PrivateOptimizationsStudioIdLogs(
  args: InferRequestType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.optimizations.studio[':id'].logs.$get(args, options))
}

export async function postV1PrivatePairingSessionsSessionIdActivate(
  args: InferRequestType<
    (typeof client.v1.private.pairing.sessions)[':sessionId']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.pairing.sessions[':sessionId'].activate.$post(args, options),
  )
}

export async function postV1PrivatePairingSessions(
  args: InferRequestType<typeof client.v1.private.pairing.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.pairing.sessions.$post(args, options))
}

export async function getV1PrivateProjectsProjectIdAlerts(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects[':projectId'].alerts.$get(args, options))
}

export async function getV1PrivateProjectsProjectIdDashboards(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.projects[':projectId'].dashboards.$get(args, options),
  )
}

export async function getV1PrivateProjectsProjectIdDatasets(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects[':projectId'].datasets.$get(args, options))
}

export async function getV1PrivateProjectsProjectIdExperiments(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.projects[':projectId'].experiments.$get(args, options),
  )
}

export async function getV1PrivateProjectsProjectIdOptimizations(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['optimizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.projects[':projectId'].optimizations.$get(args, options),
  )
}

export async function getV1PrivateProjectsProjectIdPrompts(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects[':projectId'].prompts.$get(args, options))
}

export async function getV1PrivateProjects(
  args: InferRequestType<typeof client.v1.private.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects.$get(args, options))
}

export async function postV1PrivateProjects(
  args: InferRequestType<typeof client.v1.private.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects.$post(args, options))
}

export async function getV1PrivateProjectsId(
  args: InferRequestType<(typeof client.v1.private.projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects[':id'].$get(args, options))
}

export async function deleteV1PrivateProjectsId(
  args: InferRequestType<(typeof client.v1.private.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects[':id'].$delete(args, options))
}

export async function patchV1PrivateProjectsId(
  args: InferRequestType<(typeof client.v1.private.projects)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects[':id'].$patch(args, options))
}

export async function postV1PrivateProjectsDelete(
  args: InferRequestType<typeof client.v1.private.projects.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects.delete.$post(args, options))
}

export async function getV1PrivateProjectsFeedbackScoresNames(
  args: InferRequestType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.projects['feedback-scores'].names.$get(args, options),
  )
}

export async function getV1PrivateProjectsIdTokenUsageNames(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.projects[':id']['token-usage'].names.$get(args, options),
  )
}

export async function postV1PrivateProjectsIdKpiCards(
  args: InferRequestType<(typeof client.v1.private.projects)[':id']['kpi-cards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects[':id']['kpi-cards'].$post(args, options))
}

export async function postV1PrivateProjectsIdMetrics(
  args: InferRequestType<(typeof client.v1.private.projects)[':id']['metrics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects[':id'].metrics.$post(args, options))
}

export async function getV1PrivateProjectsStats(
  args: InferRequestType<typeof client.v1.private.projects.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects.stats.$get(args, options))
}

export async function postV1PrivateProjectsRetrieve(
  args: InferRequestType<typeof client.v1.private.projects.retrieve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects.retrieve.$post(args, options))
}

export async function getV1PrivatePrompts(
  args: InferRequestType<typeof client.v1.private.prompts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts.$get(args, options))
}

export async function postV1PrivatePrompts(
  args: InferRequestType<typeof client.v1.private.prompts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts.$post(args, options))
}

export async function postV1PrivatePromptsVersions(
  args: InferRequestType<typeof client.v1.private.prompts.versions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts.versions.$post(args, options))
}

export async function patchV1PrivatePromptsVersions(
  args: InferRequestType<typeof client.v1.private.prompts.versions.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts.versions.$patch(args, options))
}

export async function getV1PrivatePromptsId(
  args: InferRequestType<(typeof client.v1.private.prompts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts[':id'].$get(args, options))
}

export async function putV1PrivatePromptsId(
  args: InferRequestType<(typeof client.v1.private.prompts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts[':id'].$put(args, options))
}

export async function deleteV1PrivatePromptsId(
  args: InferRequestType<(typeof client.v1.private.prompts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts[':id'].$delete(args, options))
}

export async function postV1PrivatePromptsDelete(
  args: InferRequestType<typeof client.v1.private.prompts.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts.delete.$post(args, options))
}

export async function getV1PrivatePromptsByCommitCommit(
  args: InferRequestType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts['by-commit'][':commit'].$get(args, options))
}

export async function getV1PrivatePromptsVersionsVersionId(
  args: InferRequestType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts.versions[':versionId'].$get(args, options))
}

export async function getV1PrivatePromptsPromptIdVersionsByNumberVersionNumber(
  args: InferRequestType<
    (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.prompts[':promptId'].versions['by-number'][':versionNumber'].$get(
      args,
      options,
    ),
  )
}

export async function getV1PrivatePromptsIdVersions(
  args: InferRequestType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts[':id'].versions.$get(args, options))
}

export async function postV1PrivatePromptsRetrieveByCommits(
  args: InferRequestType<(typeof client.v1.private.prompts)['retrieve-by-commits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts['retrieve-by-commits'].$post(args, options))
}

export async function postV1PrivatePromptsPromptIdVersionsVersionIdRestore(
  args: InferRequestType<
    (typeof client.v1.private.prompts)[':promptId']['versions'][':versionId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.prompts[':promptId'].versions[':versionId'].restore.$post(args, options),
  )
}

export async function postV1PrivatePromptsVersionsRetrieve(
  args: InferRequestType<typeof client.v1.private.prompts.versions.retrieve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.prompts.versions.retrieve.$post(args, options))
}

export async function postV1PrivatePromptsVersionsRetrieveByIds(
  args: InferRequestType<(typeof client.v1.private.prompts.versions)['retrieve-by-ids']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.prompts.versions['retrieve-by-ids'].$post(args, options),
  )
}

export async function patchV1PrivatePromptsVersionsVersionIdEnvironments(
  args: InferRequestType<
    (typeof client.v1.private.prompts.versions)[':versionId']['environments']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.prompts.versions[':versionId'].environments.$patch(args, options),
  )
}

export async function getV1PrivateProjectsProjectIdActivities(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.projects[':projectId'].activities.$get(args, options),
  )
}

export async function getV1PrivateReportFailures(
  args: InferRequestType<(typeof client.v1.private)['report-failures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['report-failures'].$get(args, options))
}

export async function postV1PrivateReportFailures(
  args: InferRequestType<(typeof client.v1.private)['report-failures']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['report-failures'].$post(args, options))
}

export async function postV1PrivateProjectsProjectIdReportsReportIdComplete(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['reports'][':reportId']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.projects[':projectId'].reports[':reportId'].complete.$post(args, options),
  )
}

export async function postV1PrivateProjectsProjectIdReportsGenerate(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['reports']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.projects[':projectId'].reports.generate.$post(args, options),
  )
}

export async function getV1PrivateProjectsProjectIdReportsPreferences(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.projects[':projectId'].reports.preferences.$get(args, options),
  )
}

export async function putV1PrivateProjectsProjectIdReportsPreferences(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.projects[':projectId'].reports.preferences.$put(args, options),
  )
}

export async function getV1PrivateProjectsProjectIdReports(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.projects[':projectId'].reports.$get(args, options))
}

export async function getV1PrivateRetentionRules(
  args: InferRequestType<typeof client.v1.private.retention.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.retention.rules.$get(args, options))
}

export async function postV1PrivateRetentionRules(
  args: InferRequestType<typeof client.v1.private.retention.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.retention.rules.$post(args, options))
}

export async function getV1PrivateRetentionRulesRuleId(
  args: InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.retention.rules[':ruleId'].$get(args, options))
}

export async function deleteV1PrivateRetentionRulesRuleId(
  args: InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.retention.rules[':ruleId'].$delete(args, options))
}

export async function getV1PrivateToggles(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private.toggles.$get(undefined, options))
}

export async function postV1PrivateSpansIdComments(
  args: InferRequestType<(typeof client.v1.private.spans)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans[':id'].comments.$post(args, options))
}

export async function putV1PrivateSpansIdFeedbackScores(
  args: InferRequestType<(typeof client.v1.private.spans)[':id']['feedback-scores']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans[':id']['feedback-scores'].$put(args, options))
}

export async function postV1PrivateSpansBatch(
  args: InferRequestType<typeof client.v1.private.spans.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans.batch.$post(args, options))
}

export async function patchV1PrivateSpansBatch(
  args: InferRequestType<typeof client.v1.private.spans.batch.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans.batch.$patch(args, options))
}

export async function getV1PrivateSpans(
  args: InferRequestType<typeof client.v1.private.spans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans.$get(args, options))
}

export async function postV1PrivateSpans(
  args: InferRequestType<typeof client.v1.private.spans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans.$post(args, options))
}

export async function getV1PrivateSpansId(
  args: InferRequestType<(typeof client.v1.private.spans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans[':id'].$get(args, options))
}

export async function deleteV1PrivateSpansId(
  args: InferRequestType<(typeof client.v1.private.spans)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans[':id'].$delete(args, options))
}

export async function patchV1PrivateSpansId(
  args: InferRequestType<(typeof client.v1.private.spans)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans[':id'].$patch(args, options))
}

export async function postV1PrivateSpansCommentsDelete(
  args: InferRequestType<typeof client.v1.private.spans.comments.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans.comments.delete.$post(args, options))
}

export async function postV1PrivateSpansIdFeedbackScoresDelete(
  args: InferRequestType<
    (typeof client.v1.private.spans)[':id']['feedback-scores']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.spans[':id']['feedback-scores'].delete.$post(args, options),
  )
}

export async function getV1PrivateSpansFeedbackScoresNames(
  args: InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans['feedback-scores'].names.$get(args, options))
}

export async function getV1PrivateSpansSpanIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.spans[':spanId'].comments[':commentId'].$get(args, options),
  )
}

export async function getV1PrivateSpansStats(
  args: InferRequestType<typeof client.v1.private.spans.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans.stats.$get(args, options))
}

export async function putV1PrivateSpansFeedbackScores(
  args: InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans['feedback-scores'].$put(args, options))
}

export async function postV1PrivateSpansSearch(
  args: InferRequestType<typeof client.v1.private.spans.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans.search.$post(args, options))
}

export async function getV1PrivateSpansExists(
  args: InferRequestType<typeof client.v1.private.spans.exists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans.exists.$get(args, options))
}

export async function patchV1PrivateSpansCommentsCommentId(
  args: InferRequestType<(typeof client.v1.private.spans.comments)[':commentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.spans.comments[':commentId'].$patch(args, options))
}

export async function postV1PrivateTracesThreadsIdComments(
  args: InferRequestType<(typeof client.v1.private.traces.threads)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.threads[':id'].comments.$post(args, options))
}

export async function postV1PrivateTracesIdComments(
  args: InferRequestType<(typeof client.v1.private.traces)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces[':id'].comments.$post(args, options))
}

export async function putV1PrivateTracesIdFeedbackScores(
  args: InferRequestType<(typeof client.v1.private.traces)[':id']['feedback-scores']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces[':id']['feedback-scores'].$put(args, options))
}

export async function postV1PrivateTracesBatch(
  args: InferRequestType<typeof client.v1.private.traces.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.batch.$post(args, options))
}

export async function patchV1PrivateTracesBatch(
  args: InferRequestType<typeof client.v1.private.traces.batch.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.batch.$patch(args, options))
}

export async function patchV1PrivateTracesThreadsBatch(
  args: InferRequestType<typeof client.v1.private.traces.threads.batch.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.threads.batch.$patch(args, options))
}

export async function putV1PrivateTracesThreadsClose(
  args: InferRequestType<typeof client.v1.private.traces.threads.close.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.threads.close.$put(args, options))
}

export async function getV1PrivateTraces(
  args: InferRequestType<typeof client.v1.private.traces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.$get(args, options))
}

export async function postV1PrivateTraces(
  args: InferRequestType<typeof client.v1.private.traces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.$post(args, options))
}

export async function getV1PrivateTracesId(
  args: InferRequestType<(typeof client.v1.private.traces)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces[':id'].$get(args, options))
}

export async function deleteV1PrivateTracesId(
  args: InferRequestType<(typeof client.v1.private.traces)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces[':id'].$delete(args, options))
}

export async function patchV1PrivateTracesId(
  args: InferRequestType<(typeof client.v1.private.traces)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces[':id'].$patch(args, options))
}

export async function postV1PrivateTracesThreadsCommentsDelete(
  args: InferRequestType<typeof client.v1.private.traces.threads.comments.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.threads.comments.delete.$post(args, options))
}

export async function postV1PrivateTracesThreadsFeedbackScoresDelete(
  args: InferRequestType<
    (typeof client.v1.private.traces.threads)['feedback-scores']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.traces.threads['feedback-scores'].delete.$post(args, options),
  )
}

export async function postV1PrivateTracesCommentsDelete(
  args: InferRequestType<typeof client.v1.private.traces.comments.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.comments.delete.$post(args, options))
}

export async function postV1PrivateTracesIdFeedbackScoresDelete(
  args: InferRequestType<
    (typeof client.v1.private.traces)[':id']['feedback-scores']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.traces[':id']['feedback-scores'].delete.$post(args, options),
  )
}

export async function postV1PrivateTracesThreadsDelete(
  args: InferRequestType<typeof client.v1.private.traces.threads.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.threads.delete.$post(args, options))
}

export async function postV1PrivateTracesDelete(
  args: InferRequestType<typeof client.v1.private.traces.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.delete.$post(args, options))
}

export async function getV1PrivateTracesFeedbackScoresNames(
  args: InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces['feedback-scores'].names.$get(args, options))
}

export async function getV1PrivateTracesThreadsFeedbackScoresNames(
  args: InferRequestType<
    (typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.traces.threads['feedback-scores'].names.$get(args, options),
  )
}

export async function getV1PrivateTracesStats(
  args: InferRequestType<typeof client.v1.private.traces.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.stats.$get(args, options))
}

export async function getV1PrivateTracesThreadsThreadIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.traces.threads[':threadId'].comments[':commentId'].$get(args, options),
  )
}

export async function getV1PrivateTracesThreadsStats(
  args: InferRequestType<typeof client.v1.private.traces.threads.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.threads.stats.$get(args, options))
}

export async function getV1PrivateTracesTraceIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.traces[':traceId'].comments[':commentId'].$get(args, options),
  )
}

export async function postV1PrivateTracesThreadsRetrieve(
  args: InferRequestType<typeof client.v1.private.traces.threads.retrieve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.threads.retrieve.$post(args, options))
}

export async function getV1PrivateTracesThreads(
  args: InferRequestType<typeof client.v1.private.traces.threads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.threads.$get(args, options))
}

export async function putV1PrivateTracesThreadsOpen(
  args: InferRequestType<typeof client.v1.private.traces.threads.open.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.threads.open.$put(args, options))
}

export async function putV1PrivateTracesThreadsFeedbackScores(
  args: InferRequestType<(typeof client.v1.private.traces.threads)['feedback-scores']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.traces.threads['feedback-scores'].$put(args, options),
  )
}

export async function putV1PrivateTracesFeedbackScores(
  args: InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces['feedback-scores'].$put(args, options))
}

export async function postV1PrivateTracesThreadsSearch(
  args: InferRequestType<typeof client.v1.private.traces.threads.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.threads.search.$post(args, options))
}

export async function postV1PrivateTracesSearch(
  args: InferRequestType<typeof client.v1.private.traces.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.search.$post(args, options))
}

export async function getV1PrivateTracesExists(
  args: InferRequestType<typeof client.v1.private.traces.exists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.exists.$get(args, options))
}

export async function patchV1PrivateTracesThreadsThreadModelId(
  args: InferRequestType<(typeof client.v1.private.traces.threads)[':threadModelId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.traces.threads[':threadModelId'].$patch(args, options),
  )
}

export async function patchV1PrivateTracesThreadsCommentsCommentId(
  args: InferRequestType<
    (typeof client.v1.private.traces.threads.comments)[':commentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.private.traces.threads.comments[':commentId'].$patch(args, options),
  )
}

export async function patchV1PrivateTracesCommentsCommentId(
  args: InferRequestType<(typeof client.v1.private.traces.comments)[':commentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.traces.comments[':commentId'].$patch(args, options))
}

export async function getV1PrivateWelcomeWizard(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private['welcome-wizard'].$get(undefined, options))
}

export async function postV1PrivateWelcomeWizard(
  args: InferRequestType<(typeof client.v1.private)['welcome-wizard']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private['welcome-wizard'].$post(args, options))
}

export async function getV1PrivateWorkspacePermissions(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private['workspace-permissions'].$get(undefined, options))
}

export async function postV1PrivateWorkspacesCostsSummaries(
  args: InferRequestType<typeof client.v1.private.workspaces.costs.summaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.workspaces.costs.summaries.$post(args, options))
}

export async function getV1PrivateWorkspacesConfigurations(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.private.workspaces.configurations.$get(undefined, options))
}

export async function putV1PrivateWorkspacesConfigurations(
  args: InferRequestType<typeof client.v1.private.workspaces.configurations.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.workspaces.configurations.$put(args, options))
}

export async function deleteV1PrivateWorkspacesConfigurations(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.private.workspaces.configurations.$delete(undefined, options),
  )
}

export async function postV1PrivateWorkspacesCosts(
  args: InferRequestType<typeof client.v1.private.workspaces.costs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.workspaces.costs.$post(args, options))
}

export async function postV1PrivateWorkspacesMetrics(
  args: InferRequestType<typeof client.v1.private.workspaces.metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.workspaces.metrics.$post(args, options))
}

export async function postV1PrivateWorkspacesMetricsSpans(
  args: InferRequestType<typeof client.v1.private.workspaces.metrics.spans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.workspaces.metrics.spans.$post(args, options))
}

export async function postV1PrivateWorkspacesTokenUsageNames(
  args: InferRequestType<(typeof client.v1.private.workspaces)['token-usage']['names']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.workspaces['token-usage'].names.$post(args, options))
}

export async function postV1PrivateWorkspacesMetricsSummaries(
  args: InferRequestType<typeof client.v1.private.workspaces.metrics.summaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private.workspaces.metrics.summaries.$post(args, options))
}

export async function getV1SessionRedirectDatasets(
  args: InferRequestType<typeof client.v1.session.redirect.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.session.redirect.datasets.$get(args, options))
}

export async function getV1SessionRedirectExperiments(
  args: InferRequestType<typeof client.v1.session.redirect.experiments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.session.redirect.experiments.$get(args, options))
}

export async function getV1SessionRedirectOptimizations(
  args: InferRequestType<typeof client.v1.session.redirect.optimizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.session.redirect.optimizations.$get(args, options))
}

export async function getV1SessionRedirectProjects(
  args: InferRequestType<typeof client.v1.session.redirect.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.session.redirect.projects.$get(args, options))
}

export async function getIsAlivePing(options?: ClientRequestOptions) {
  return await parseResponse(client['is-alive'].ping.$get(undefined, options))
}

export async function getIsAliveVer(options?: ClientRequestOptions) {
  return await parseResponse(client['is-alive'].ver.$get(undefined, options))
}
