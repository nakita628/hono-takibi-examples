import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGroupGroupIdAudit(
  args: InferRequestType<(typeof client.group)[':groupId']['audit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupId'].audit.$post(args, options))
}

export async function getGroupGroupIdMembers(
  args: InferRequestType<(typeof client.group)[':groupId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupId'].members.$get(args, options))
}

export async function postGroupGroupIdOrgOrgIdMembers(
  args: InferRequestType<(typeof client.group)[':groupId']['org'][':orgId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupId'].org[':orgId'].members.$post(args, options))
}

export async function getGroupGroupIdOrgs(
  args: InferRequestType<(typeof client.group)[':groupId']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupId'].orgs.$get(args, options))
}

export async function getGroupGroupIdRoles(
  args: InferRequestType<(typeof client.group)[':groupId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupId'].roles.$get(args, options))
}

export async function getGroupGroupIdSettings(
  args: InferRequestType<(typeof client.group)[':groupId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupId'].settings.$get(args, options))
}

export async function putGroupGroupIdSettings(
  args: InferRequestType<(typeof client.group)[':groupId']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupId'].settings.$put(args, options))
}

export async function getGroupGroupIdTags(
  args: InferRequestType<(typeof client.group)[':groupId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupId'].tags.$get(args, options))
}

export async function postGroupGroupIdTagsDelete(
  args: InferRequestType<(typeof client.group)[':groupId']['tags']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupId'].tags.delete.$post(args, options))
}

export async function postMonitorDepGraph(
  args: InferRequestType<(typeof client.monitor)['dep-graph']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitor['dep-graph'].$post(args, options))
}

export async function postOrg(
  args: InferRequestType<typeof client.org.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.$post(args, options))
}

export async function deleteOrgOrgId(
  args: InferRequestType<(typeof client.org)[':orgId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].$delete(args, options))
}

export async function postOrgOrgIdAudit(
  args: InferRequestType<(typeof client.org)[':orgId']['audit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].audit.$post(args, options))
}

export async function postOrgOrgIdDependencies(
  args: InferRequestType<(typeof client.org)[':orgId']['dependencies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].dependencies.$post(args, options))
}

export async function getOrgOrgIdEntitlementEntitlementKey(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].entitlement[':entitlementKey'].$get(args, options),
  )
}

export async function getOrgOrgIdEntitlements(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].entitlements.$get(args, options))
}

export async function getOrgOrgIdIntegrations(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].integrations.$get(args, options))
}

export async function postOrgOrgIdIntegrations(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].integrations.$post(args, options))
}

export async function putOrgOrgIdIntegrationsIntegrationId(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations'][':integrationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].integrations[':integrationId'].$put(args, options),
  )
}

export async function deleteOrgOrgIdIntegrationsIntegrationIdAuthentication(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].integrations[':integrationId'].authentication.$delete(args, options),
  )
}

export async function postOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionToken(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['provision-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].integrations[':integrationId'].authentication['provision-token'].$post(
      args,
      options,
    ),
  )
}

export async function postOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchToken(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['switch-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].integrations[':integrationId'].authentication['switch-token'].$post(
      args,
      options,
    ),
  )
}

export async function postOrgOrgIdIntegrationsIntegrationIdClone(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].integrations[':integrationId'].clone.$post(args, options),
  )
}

export async function postOrgOrgIdIntegrationsIntegrationIdImport(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].integrations[':integrationId'].import.$post(args, options),
  )
}

export async function getOrgOrgIdIntegrationsIntegrationIdImportJobId(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].integrations[':integrationId'].import[':jobId'].$get(args, options),
  )
}

export async function getOrgOrgIdIntegrationsIntegrationIdSettings(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].integrations[':integrationId'].settings.$get(args, options),
  )
}

export async function putOrgOrgIdIntegrationsIntegrationIdSettings(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].integrations[':integrationId'].settings.$put(args, options),
  )
}

export async function getOrgOrgIdIntegrationsType(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].integrations[':type'].$get(args, options))
}

export async function postOrgOrgIdInvite(
  args: InferRequestType<(typeof client.org)[':orgId']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].invite.$post(args, options))
}

export async function postOrgOrgIdLicenses(
  args: InferRequestType<(typeof client.org)[':orgId']['licenses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].licenses.$post(args, options))
}

export async function getOrgOrgIdMembers(
  args: InferRequestType<(typeof client.org)[':orgId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].members.$get(args, options))
}

export async function putOrgOrgIdMembersUpdateUserId(
  args: InferRequestType<(typeof client.org)[':orgId']['members']['update'][':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].members.update[':userId'].$put(args, options))
}

export async function putOrgOrgIdMembersUserId(
  args: InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].members[':userId'].$put(args, options))
}

export async function deleteOrgOrgIdMembersUserId(
  args: InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].members[':userId'].$delete(args, options))
}

export async function getOrgOrgIdNotificationSettings(
  args: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId']['notification-settings'].$get(args, options))
}

export async function putOrgOrgIdNotificationSettings(
  args: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId']['notification-settings'].$put(args, options))
}

export async function getOrgOrgIdProjectProjectId(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].project[':projectId'].$get(args, options))
}

export async function putOrgOrgIdProjectProjectId(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].project[':projectId'].$put(args, options))
}

export async function deleteOrgOrgIdProjectProjectId(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].project[':projectId'].$delete(args, options))
}

export async function postOrgOrgIdProjectProjectIdActivate(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].activate.$post(args, options),
  )
}

export async function postOrgOrgIdProjectProjectIdAggregatedIssues(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['aggregated-issues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId']['aggregated-issues'].$post(args, options),
  )
}

export async function postOrgOrgIdProjectProjectIdAttributes(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['attributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].attributes.$post(args, options),
  )
}

export async function postOrgOrgIdProjectProjectIdDeactivate(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].deactivate.$post(args, options),
  )
}

export async function getOrgOrgIdProjectProjectIdDepGraph(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId']['dep-graph'].$get(args, options),
  )
}

export async function postOrgOrgIdProjectProjectIdHistory(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['history']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].history.$post(args, options),
  )
}

export async function postOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssues(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['aggregated-issues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].history[':snapshotId']['aggregated-issues'].$post(
      args,
      options,
    ),
  )
}

export async function getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPaths(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].history[':snapshotId'].issue[':issueId'].paths.$get(
      args,
      options,
    ),
  )
}

export async function getOrgOrgIdProjectProjectIdIgnoreIssueId(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].ignore[':issueId'].$get(args, options),
  )
}

export async function putOrgOrgIdProjectProjectIdIgnoreIssueId(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].ignore[':issueId'].$put(args, options),
  )
}

export async function postOrgOrgIdProjectProjectIdIgnoreIssueId(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].ignore[':issueId'].$post(args, options),
  )
}

export async function deleteOrgOrgIdProjectProjectIdIgnoreIssueId(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].ignore[':issueId'].$delete(args, options),
  )
}

export async function getOrgOrgIdProjectProjectIdIgnores(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].project[':projectId'].ignores.$get(args, options))
}

export async function postOrgOrgIdProjectProjectIdIssueIssueIdJiraIssue(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['jira-issue']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].issue[':issueId']['jira-issue'].$post(args, options),
  )
}

export async function getOrgOrgIdProjectProjectIdIssueIssueIdPaths(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].issue[':issueId'].paths.$get(args, options),
  )
}

export async function getOrgOrgIdProjectProjectIdJiraIssues(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId']['jira-issues'].$get(args, options),
  )
}

export async function putOrgOrgIdProjectProjectIdMove(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['move']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].project[':projectId'].move.$put(args, options))
}

export async function getOrgOrgIdProjectProjectIdSettings(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].settings.$get(args, options),
  )
}

export async function putOrgOrgIdProjectProjectIdSettings(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].settings.$put(args, options),
  )
}

export async function deleteOrgOrgIdProjectProjectIdSettings(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].settings.$delete(args, options),
  )
}

export async function postOrgOrgIdProjectProjectIdTags(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].project[':projectId'].tags.$post(args, options))
}

export async function postOrgOrgIdProjectProjectIdTagsRemove(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['tags']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgId'].project[':projectId'].tags.remove.$post(args, options),
  )
}

export async function postOrgOrgIdProjects(
  args: InferRequestType<(typeof client.org)[':orgId']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].projects.$post(args, options))
}

export async function getOrgOrgIdProvision(
  args: InferRequestType<(typeof client.org)[':orgId']['provision']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].provision.$get(args, options))
}

export async function postOrgOrgIdProvision(
  args: InferRequestType<(typeof client.org)[':orgId']['provision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].provision.$post(args, options))
}

export async function deleteOrgOrgIdProvision(
  args: InferRequestType<(typeof client.org)[':orgId']['provision']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].provision.$delete(args, options))
}

export async function getOrgOrgIdSettings(
  args: InferRequestType<(typeof client.org)[':orgId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].settings.$get(args, options))
}

export async function putOrgOrgIdSettings(
  args: InferRequestType<(typeof client.org)[':orgId']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].settings.$put(args, options))
}

export async function getOrgOrgIdWebhooks(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].webhooks.$get(args, options))
}

export async function postOrgOrgIdWebhooks(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].webhooks.$post(args, options))
}

export async function getOrgOrgIdWebhooksWebhookId(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].webhooks[':webhookId'].$get(args, options))
}

export async function deleteOrgOrgIdWebhooksWebhookId(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].webhooks[':webhookId'].$delete(args, options))
}

export async function postOrgOrgIdWebhooksWebhookIdPing(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['ping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgId'].webhooks[':webhookId'].ping.$post(args, options))
}

export async function getOrgs(options?: ClientRequestOptions) {
  return await parseResponse(client.orgs.$get(undefined, options))
}

export async function postReportingCountsIssues(
  args: InferRequestType<typeof client.reporting.counts.issues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.counts.issues.$post(args, options))
}

export async function postReportingCountsIssuesLatest(
  args: InferRequestType<typeof client.reporting.counts.issues.latest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.counts.issues.latest.$post(args, options))
}

export async function postReportingCountsProjects(
  args: InferRequestType<typeof client.reporting.counts.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.counts.projects.$post(args, options))
}

export async function postReportingCountsProjectsLatest(
  args: InferRequestType<typeof client.reporting.counts.projects.latest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.counts.projects.latest.$post(args, options))
}

export async function postReportingCountsTests(
  args: InferRequestType<typeof client.reporting.counts.tests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.counts.tests.$post(args, options))
}

export async function postReportingIssuesIndex(
  args: InferRequestType<typeof client.reporting.issues.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.issues.index.$post(args, options))
}

export async function postReportingIssuesLatest(
  args: InferRequestType<typeof client.reporting.issues.latest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.issues.latest.$post(args, options))
}

export async function postTestComposer(
  args: InferRequestType<typeof client.test.composer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.composer.$post(args, options))
}

export async function postTestDepGraph(
  args: InferRequestType<(typeof client.test)['dep-graph']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test['dep-graph'].$post(args, options))
}

export async function postTestGolangdep(
  args: InferRequestType<typeof client.test.golangdep.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.golangdep.$post(args, options))
}

export async function postTestGovendor(
  args: InferRequestType<typeof client.test.govendor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.govendor.$post(args, options))
}

export async function postTestGradle(
  args: InferRequestType<typeof client.test.gradle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.gradle.$post(args, options))
}

export async function getTestGradleGroupNameVersion(
  args: InferRequestType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.gradle[':group'][':name'][':version'].$get(args, options))
}

export async function postTestMaven(
  args: InferRequestType<typeof client.test.maven.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.maven.$post(args, options))
}

export async function getTestMavenGroupIdArtifactIdVersion(
  args: InferRequestType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.test.maven[':groupId'][':artifactId'][':version'].$get(args, options),
  )
}

export async function postTestNpm(
  args: InferRequestType<typeof client.test.npm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.npm.$post(args, options))
}

export async function getTestNpmPackageNameVersion(
  args: InferRequestType<(typeof client.test.npm)[':packageName'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.npm[':packageName'][':version'].$get(args, options))
}

export async function postTestPip(
  args: InferRequestType<typeof client.test.pip.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.pip.$post(args, options))
}

export async function getTestPipPackageNameVersion(
  args: InferRequestType<(typeof client.test.pip)[':packageName'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.pip[':packageName'][':version'].$get(args, options))
}

export async function postTestRubygems(
  args: InferRequestType<typeof client.test.rubygems.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.rubygems.$post(args, options))
}

export async function getTestRubygemsGemNameVersion(
  args: InferRequestType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.rubygems[':gemName'][':version'].$get(args, options))
}

export async function postTestSbt(
  args: InferRequestType<typeof client.test.sbt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.sbt.$post(args, options))
}

export async function getTestSbtGroupIdArtifactIdVersion(
  args: InferRequestType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.test.sbt[':groupId'][':artifactId'][':version'].$get(args, options),
  )
}

export async function postTestYarn(
  args: InferRequestType<typeof client.test.yarn.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test.yarn.$post(args, options))
}

export async function getUserMe(options?: ClientRequestOptions) {
  return await parseResponse(client.user.me.$get(undefined, options))
}

export async function getUserMeNotificationSettingsOrgOrgId(
  args: InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.me['notification-settings'].org[':orgId'].$get(args, options),
  )
}

export async function putUserMeNotificationSettingsOrgOrgId(
  args: InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.me['notification-settings'].org[':orgId'].$put(args, options),
  )
}

export async function getUserMeNotificationSettingsOrgOrgIdProjectProjectId(
  args: InferRequestType<
    (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.me['notification-settings'].org[':orgId'].project[':projectId'].$get(args, options),
  )
}

export async function putUserMeNotificationSettingsOrgOrgIdProjectProjectId(
  args: InferRequestType<
    (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.me['notification-settings'].org[':orgId'].project[':projectId'].$put(args, options),
  )
}

export async function getUserUserId(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].$get(args, options))
}
