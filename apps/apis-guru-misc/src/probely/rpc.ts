import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.account.index.$get(undefined, options))
}

export async function postAuthObtainIndex(
  args: InferRequestType<typeof client.auth.obtain.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.obtain.index.$post(args, options))
}

export async function postAuthRefreshIndex(
  args: InferRequestType<typeof client.auth.refresh.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.refresh.index.$post(args, options))
}

export async function postAuthRevokeIndex(
  args: InferRequestType<typeof client.auth.revoke.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.revoke.index.$post(args, options))
}

export async function postAuthVerifyIndex(
  args: InferRequestType<typeof client.auth.verify.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.verify.index.$post(args, options))
}

export async function getBillingIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.billing.index.$get(undefined, options))
}

export async function putBillingIndex(
  args: InferRequestType<typeof client.billing.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.index.$put(args, options))
}

export async function patchBillingIndex(
  args: InferRequestType<typeof client.billing.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.index.$patch(args, options))
}

export async function postBillingActionsIndex(
  args: InferRequestType<typeof client.billing.actions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.actions.index.$post(args, options))
}

export async function postBillingEstimateIndex(
  args: InferRequestType<typeof client.billing.estimate.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.estimate.index.$post(args, options))
}

export async function postBillingSubscribeIndex(
  args: InferRequestType<typeof client.billing.subscribe.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.subscribe.index.$post(args, options))
}

export async function postCheckIndex(
  args: InferRequestType<typeof client.check.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check.index.$post(args, options))
}

export async function postEnterpriseAuthObtainIndex(
  args: InferRequestType<typeof client.enterprise.auth.obtain.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.auth.obtain.index.$post(args, options))
}

export async function postEnterpriseAuthRefreshIndex(
  args: InferRequestType<typeof client.enterprise.auth.refresh.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.auth.refresh.index.$post(args, options))
}

export async function postEnterpriseAuthRevokeIndex(
  args: InferRequestType<typeof client.enterprise.auth.revoke.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.auth.revoke.index.$post(args, options))
}

export async function postEnterpriseAuthVerifyIndex(
  args: InferRequestType<typeof client.enterprise.auth.verify.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise.auth.verify.index.$post(args, options))
}

export async function getEventsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.events.index.$get(undefined, options))
}

export async function getEventsIdIndex(
  args: InferRequestType<(typeof client.events)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].index.$get(args, options))
}

export async function getFrameworksIndex(
  args: InferRequestType<typeof client.frameworks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.frameworks.index.$get(args, options))
}

export async function getFrameworksIdIndex(
  args: InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.frameworks[':id'].index.$get(args, options))
}

export async function getIntegrationsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.index.$get(undefined, options))
}

export async function getIntegrationsJiraCloudProjectsIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.integrations['jira-cloud'].projects.index.$get(undefined, options),
  )
}

export async function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndex(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations['jira-cloud'].projects[':project_id'].issue_types.index.$get(args, options),
  )
}

export async function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations['jira-cloud'].projects[':project_id'].issue_types[
      ':issue_type_id'
    ].priorities.index.$get(args, options),
  )
}

export async function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndex(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations['jira-cloud'].projects[':project_id'].issue_types[
      ':issue_type_id'
    ].status.index.$get(args, options),
  )
}

export async function getIntegrationsJiraServerProjectsIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.integrations['jira-server'].projects.index.$get(undefined, options),
  )
}

export async function getIntegrationsJiraServerProjectsProjectIdIssueTypesIndex(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations['jira-server'].projects[':project_id'].issue_types.index.$get(
      args,
      options,
    ),
  )
}

export async function getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations['jira-server'].projects[':project_id'].issue_types[
      ':issue_type_id'
    ].priorities.index.$get(args, options),
  )
}

export async function getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndex(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations['jira-server'].projects[':project_id'].issue_types[
      ':issue_type_id'
    ].status.index.$get(args, options),
  )
}

export async function getKeysIndex(
  args: InferRequestType<typeof client.keys.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys.index.$get(args, options))
}

export async function postKeysIndex(
  args: InferRequestType<typeof client.keys.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys.index.$post(args, options))
}

export async function getKeysIdIndex(
  args: InferRequestType<(typeof client.keys)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':id'].index.$get(args, options))
}

export async function deleteKeysIdIndex(
  args: InferRequestType<(typeof client.keys)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':id'].index.$delete(args, options))
}

export async function getLabelsIndex(
  args: InferRequestType<typeof client.labels.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.index.$get(args, options))
}

export async function postLabelsIndex(
  args: InferRequestType<typeof client.labels.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.index.$post(args, options))
}

export async function getLabelsIdIndex(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':id'].index.$get(args, options))
}

export async function putLabelsIdIndex(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':id'].index.$put(args, options))
}

export async function deleteLabelsIdIndex(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':id'].index.$delete(args, options))
}

export async function patchLabelsIdIndex(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':id'].index.$patch(args, options))
}

export async function getPlansIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.plans.index.$get(undefined, options))
}

export async function getProfileIndex(
  args: InferRequestType<typeof client.profile.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.index.$get(args, options))
}

export async function postProfileChangePasswordIndex(
  args: InferRequestType<typeof client.profile.change_password.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.change_password.index.$post(args, options))
}

export async function postResetIndex(
  args: InferRequestType<typeof client.reset.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reset.index.$post(args, options))
}

export async function postSetpasswordIndex(
  args: InferRequestType<typeof client.setpassword.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setpassword.index.$post(args, options))
}

export async function postTargetActionsIndex(
  args: InferRequestType<(typeof client)['target-actions']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['target-actions'].index.$post(args, options))
}

export async function getTargetsIndex(
  args: InferRequestType<typeof client.targets.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets.index.$get(args, options))
}

export async function postTargetsIndex(
  args: InferRequestType<typeof client.targets.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets.index.$post(args, options))
}

export async function postTargetsActivateIndex(
  args: InferRequestType<typeof client.targets.activate.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets.activate.index.$post(args, options))
}

export async function getTargetsAllAverageFixTimeIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.targets.all.average_fix_time.index.$get(undefined, options))
}

export async function getTargetsAllNeedsAttentionPieIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.targets.all.needs_attention_pie.index.$get(undefined, options))
}

export async function getTargetsAllNeedsAttentionTopIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.targets.all.needs_attention_top.index.$get(undefined, options))
}

export async function getTargetsAllRiskTrendIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.targets.all.risk_trend.index.$get(undefined, options))
}

export async function getTargetsAllScansIndex(
  args: InferRequestType<typeof client.targets.all.scans.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets.all.scans.index.$get(args, options))
}

export async function getTargetsAllScheduledscansExpandedIndex(
  args: InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets.all.scheduledscans.expanded.index.$get(args, options))
}

export async function getTargetsAllSeverityTrendIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.targets.all.severity_trend.index.$get(undefined, options))
}

export async function getTargetsAllTopVulnsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.targets.all.top_vulns.index.$get(undefined, options))
}

export async function postTargetsArchiveIndex(
  args: InferRequestType<typeof client.targets.archive.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets.archive.index.$post(args, options))
}

export async function postTargetsArchivedIndex(
  args: InferRequestType<typeof client.targets.archived.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets.archived.index.$post(args, options))
}

export async function getTargetsIdIndex(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':id'].index.$get(args, options))
}

export async function putTargetsIdIndex(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':id'].index.$put(args, options))
}

export async function deleteTargetsIdIndex(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':id'].index.$delete(args, options))
}

export async function patchTargetsIdIndex(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':id'].index.$patch(args, options))
}

export async function getTargetsTargetIdAssetsIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].assets.index.$get(args, options))
}

export async function postTargetsTargetIdAssetsIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].assets.index.$post(args, options))
}

export async function getTargetsTargetIdAssetsIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].assets[':id'].index.$get(args, options))
}

export async function putTargetsTargetIdAssetsIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].assets[':id'].index.$put(args, options))
}

export async function deleteTargetsTargetIdAssetsIdIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['assets'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].assets[':id'].index.$delete(args, options),
  )
}

export async function patchTargetsTargetIdAssetsIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].assets[':id'].index.$patch(args, options))
}

export async function postTargetsTargetIdAssetsIdVerifyIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['assets'][':id']['verify']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].assets[':id'].verify.index.$post(args, options),
  )
}

export async function getTargetsTargetIdAverageFixTimeIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].average_fix_time.index.$get(args, options),
  )
}

export async function getTargetsTargetIdEventsIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].events.index.$get(args, options))
}

export async function getTargetsTargetIdEventsIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].events[':id'].index.$get(args, options))
}

export async function getTargetsTargetIdFindingsIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].findings.index.$get(args, options))
}

export async function postTargetsTargetIdFindingsBulkReportIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['bulk']['report']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings.bulk.report.index.$post(args, options),
  )
}

export async function postTargetsTargetIdFindingsBulkRetestIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['bulk']['retest']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings.bulk.retest.index.$post(args, options),
  )
}

export async function patchTargetsTargetIdFindingsBulkUpdateIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['bulk']['update']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings.bulk.update.index.$patch(args, options),
  )
}

export async function getTargetsTargetIdFindingsReportIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].findings.report.index.$get(args, options))
}

export async function getTargetsTargetIdFindingsIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].findings[':id'].index.$get(args, options))
}

export async function putTargetsTargetIdFindingsIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].findings[':id'].index.$put(args, options))
}

export async function patchTargetsTargetIdFindingsIdIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings[':id'].index.$patch(args, options),
  )
}

export async function getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$get(
      args,
      options,
    ),
  )
}

export async function putTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$put(
      args,
      options,
    ),
  )
}

export async function patchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$patch(
      args,
      options,
    ),
  )
}

export async function getTargetsTargetIdFindingsIdIntegrationsJiraServerIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$get(
      args,
      options,
    ),
  )
}

export async function putTargetsTargetIdFindingsIdIntegrationsJiraServerIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$put(
      args,
      options,
    ),
  )
}

export async function patchTargetsTargetIdFindingsIdIntegrationsJiraServerIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$patch(
      args,
      options,
    ),
  )
}

export async function getTargetsTargetIdFindingsIdLogIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings[':id'].log.index.$get(args, options),
  )
}

export async function postTargetsTargetIdFindingsIdRetestIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['retest']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].findings[':id'].retest.index.$post(args, options),
  )
}

export async function getTargetsTargetIdIntegrationsIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].integrations.index.$get(args, options))
}

export async function getTargetsTargetIdIntegrationsJiraCloudIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].integrations['jira-cloud'].index.$get(args, options),
  )
}

export async function putTargetsTargetIdIntegrationsJiraCloudIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].integrations['jira-cloud'].index.$put(args, options),
  )
}

export async function patchTargetsTargetIdIntegrationsJiraCloudIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].integrations['jira-cloud'].index.$patch(args, options),
  )
}

export async function getTargetsTargetIdIntegrationsJiraServerIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].integrations['jira-server'].index.$get(args, options),
  )
}

export async function putTargetsTargetIdIntegrationsJiraServerIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].integrations['jira-server'].index.$put(args, options),
  )
}

export async function patchTargetsTargetIdIntegrationsJiraServerIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].integrations['jira-server'].index.$patch(args, options),
  )
}

export async function getTargetsTargetIdIntegrationsSlackIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].integrations.slack.index.$get(args, options),
  )
}

export async function putTargetsTargetIdIntegrationsSlackIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].integrations.slack.index.$put(args, options),
  )
}

export async function patchTargetsTargetIdIntegrationsSlackIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].integrations.slack.index.$patch(args, options),
  )
}

export async function getTargetsTargetIdKeysIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].keys.index.$get(args, options))
}

export async function postTargetsTargetIdKeysIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].keys.index.$post(args, options))
}

export async function getTargetsTargetIdKeysIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].keys[':id'].index.$get(args, options))
}

export async function deleteTargetsTargetIdKeysIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].keys[':id'].index.$delete(args, options))
}

export async function getTargetsTargetIdRiskTrendIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].risk_trend.index.$get(args, options))
}

export async function postTargetsTargetIdScanNowIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['scan_now']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].scan_now.index.$post(args, options))
}

export async function getTargetsTargetIdScansIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].scans.index.$get(args, options))
}

export async function getTargetsTargetIdScansDatesIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].scans.dates.index.$get(args, options))
}

export async function getTargetsTargetIdScansRetrievePageIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scans.retrieve_page.index.$get(args, options),
  )
}

export async function getTargetsTargetIdScansIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].scans[':id'].index.$get(args, options))
}

export async function postTargetsTargetIdScansIdCancelIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['cancel']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scans[':id'].cancel.index.$post(args, options),
  )
}

export async function getTargetsTargetIdScansIdEndpointsIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scans[':id'].endpoints.index.$get(args, options),
  )
}

export async function getTargetsTargetIdScansIdReportIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scans[':id'].report.index.$get(args, options),
  )
}

export async function getTargetsTargetIdScansIdReportDefaultIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scans[':id'].report.default.index.$get(args, options),
  )
}

export async function getTargetsTargetIdScansIdReportOwaspIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scans[':id'].report.owasp.index.$get(args, options),
  )
}

export async function getTargetsTargetIdScansIdReportPciIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scans[':id'].report.pci.index.$get(args, options),
  )
}

export async function getTargetsTargetIdScheduledscansIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].scheduledscans.index.$get(args, options))
}

export async function postTargetsTargetIdScheduledscansIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].scheduledscans.index.$post(args, options))
}

export async function getTargetsTargetIdScheduledscansExpandedIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scheduledscans.expanded.index.$get(args, options),
  )
}

export async function getTargetsTargetIdScheduledscansIdIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scheduledscans[':id'].index.$get(args, options),
  )
}

export async function putTargetsTargetIdScheduledscansIdIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scheduledscans[':id'].index.$put(args, options),
  )
}

export async function deleteTargetsTargetIdScheduledscansIdIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scheduledscans[':id'].index.$delete(args, options),
  )
}

export async function patchTargetsTargetIdScheduledscansIdIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].scheduledscans[':id'].index.$patch(args, options),
  )
}

export async function getTargetsTargetIdSeverityTrendIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].severity_trend.index.$get(args, options))
}

export async function getTargetsTargetIdSiteIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].site.index.$get(args, options))
}

export async function putTargetsTargetIdSiteIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].site.index.$put(args, options))
}

export async function patchTargetsTargetIdSiteIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].site.index.$patch(args, options))
}

export async function postTargetsTargetIdSiteVerifyIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['verify']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].site.verify.index.$post(args, options))
}

export async function getTargetsTargetIdTopVulnsIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].top_vulns.index.$get(args, options))
}

export async function getTargetsTargetIdWebhooksIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].webhooks.index.$get(args, options))
}

export async function postTargetsTargetIdWebhooksIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].webhooks.index.$post(args, options))
}

export async function getTargetsTargetIdWebhooksIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].webhooks[':id'].index.$get(args, options))
}

export async function putTargetsTargetIdWebhooksIdIndex(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets[':target_id'].webhooks[':id'].index.$put(args, options))
}

export async function deleteTargetsTargetIdWebhooksIdIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].webhooks[':id'].index.$delete(args, options),
  )
}

export async function patchTargetsTargetIdWebhooksIdIndex(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.targets[':target_id'].webhooks[':id'].index.$patch(args, options),
  )
}

export async function getUsersIndex(
  args: InferRequestType<typeof client.users.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.index.$get(args, options))
}

export async function postUsersIndex(
  args: InferRequestType<typeof client.users.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.index.$post(args, options))
}

export async function getUsersIdIndex(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].index.$get(args, options))
}

export async function putUsersIdIndex(
  args: InferRequestType<(typeof client.users)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].index.$put(args, options))
}

export async function deleteUsersIdIndex(
  args: InferRequestType<(typeof client.users)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].index.$delete(args, options))
}

export async function patchUsersIdIndex(
  args: InferRequestType<(typeof client.users)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].index.$patch(args, options))
}

export async function getVulnerabilityDefinitionsIndex(
  args: InferRequestType<typeof client.vulnerability_definitions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vulnerability_definitions.index.$get(args, options))
}

export async function getVulnerabilityDefinitionsIdIndex(
  args: InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vulnerability_definitions[':id'].index.$get(args, options))
}

export async function getWebhooksIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.index.$get(undefined, options))
}

export async function postWebhooksIndex(
  args: InferRequestType<typeof client.webhooks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.index.$post(args, options))
}

export async function getWebhooksIdIndex(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].index.$get(args, options))
}

export async function putWebhooksIdIndex(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].index.$put(args, options))
}

export async function deleteWebhooksIdIndex(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].index.$delete(args, options))
}

export async function patchWebhooksIdIndex(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].index.$patch(args, options))
}
