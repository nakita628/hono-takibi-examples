import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[':IngestionId'].$get(
      args,
      options,
    ),
  )
}

export async function putAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[':IngestionId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[':IngestionId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdCustomizations(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].customizations.$get(args, options))
}

export async function putAccountsAwsAccountIdCustomizations(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].customizations.$put(args, options))
}

export async function postAccountsAwsAccountIdCustomizations(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].customizations.$post(args, options))
}

export async function deleteAccountsAwsAccountIdCustomizations(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].customizations.$delete(args, options))
}

export async function getAccountAwsAccountId(
  args: InferRequestType<(typeof client.account)[':AwsAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':AwsAccountId'].$get(args, options))
}

export async function postAccountAwsAccountId(
  args: InferRequestType<(typeof client.account)[':AwsAccountId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':AwsAccountId'].$post(args, options))
}

export async function deleteAccountAwsAccountId(
  args: InferRequestType<(typeof client.account)[':AwsAccountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':AwsAccountId'].$delete(args, options))
}

export async function getAccountsAwsAccountIdAnalysesAnalysisId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$get(args, options),
  )
}

export async function putAccountsAwsAccountIdAnalysesAnalysisId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$put(args, options),
  )
}

export async function postAccountsAwsAccountIdAnalysesAnalysisId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$post(args, options),
  )
}

export async function deleteAccountsAwsAccountIdAnalysesAnalysisId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdDashboardsDashboardId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$get(args, options),
  )
}

export async function putAccountsAwsAccountIdDashboardsDashboardId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$put(args, options),
  )
}

export async function postAccountsAwsAccountIdDashboardsDashboardId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$post(args, options),
  )
}

export async function deleteAccountsAwsAccountIdDashboardsDashboardId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdDataSets(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId']['data-sets'].$get(args, options))
}

export async function postAccountsAwsAccountIdDataSets(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId']['data-sets'].$post(args, options))
}

export async function getAccountsAwsAccountIdDataSources(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId']['data-sources'].$get(args, options))
}

export async function postAccountsAwsAccountIdDataSources(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId']['data-sources'].$post(args, options))
}

export async function getAccountsAwsAccountIdFoldersFolderId(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].folders[':FolderId'].$get(args, options),
  )
}

export async function putAccountsAwsAccountIdFoldersFolderId(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].folders[':FolderId'].$put(args, options),
  )
}

export async function postAccountsAwsAccountIdFoldersFolderId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].folders[':FolderId'].$post(args, options),
  )
}

export async function deleteAccountsAwsAccountIdFoldersFolderId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].folders[':FolderId'].$delete(args, options),
  )
}

export async function putAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].folders[':FolderId'].members[':MemberType'][':MemberId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].folders[':FolderId'].members[':MemberType'][
      ':MemberId'
    ].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdNamespacesNamespaceGroups(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups.$get(args, options),
  )
}

export async function postAccountsAwsAccountIdNamespacesNamespaceGroups(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups.$post(args, options),
  )
}

export async function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
      ':MemberName'
    ].$get(args, options),
  )
}

export async function putAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
      ':MemberName'
    ].$put(args, options),
  )
}

export async function deleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
      ':MemberName'
    ].$delete(args, options),
  )
}

export async function postAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndex(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'].index.$post(
      args,
      options,
    ),
  )
}

export async function postAccountsAwsAccountId(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].$post(args, options))
}

export async function getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$get(
      args,
      options,
    ),
  )
}

export async function putAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$put(
      args,
      options,
    ),
  )
}

export async function postAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$post(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].$get(args, options),
  )
}

export async function putAccountsAwsAccountIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].$put(args, options),
  )
}

export async function postAccountsAwsAccountIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].$post(args, options),
  )
}

export async function deleteAccountsAwsAccountIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$get(
      args,
      options,
    ),
  )
}

export async function putAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$put(
      args,
      options,
    ),
  )
}

export async function postAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$post(
      args,
      options,
    ),
  )
}

export async function deleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$delete(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdThemesThemeId(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].$get(args, options),
  )
}

export async function putAccountsAwsAccountIdThemesThemeId(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].$put(args, options),
  )
}

export async function postAccountsAwsAccountIdThemesThemeId(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].$post(args, options),
  )
}

export async function deleteAccountsAwsAccountIdThemesThemeId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdThemesThemeIdAliasesAliasName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$get(args, options),
  )
}

export async function putAccountsAwsAccountIdThemesThemeIdAliasesAliasName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$put(args, options),
  )
}

export async function postAccountsAwsAccountIdThemesThemeIdAliasesAliasName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$post(args, options),
  )
}

export async function deleteAccountsAwsAccountIdThemesThemeIdAliasesAliasName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$delete(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdDataSetsDataSetId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$get(args, options),
  )
}

export async function putAccountsAwsAccountIdDataSetsDataSetId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$put(args, options),
  )
}

export async function deleteAccountsAwsAccountIdDataSetsDataSetId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$get(
      args,
      options,
    ),
  )
}

export async function putAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$delete(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdDataSourcesDataSourceId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$get(args, options),
  )
}

export async function putAccountsAwsAccountIdDataSourcesDataSourceId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$put(args, options),
  )
}

export async function deleteAccountsAwsAccountIdDataSourcesDataSourceId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$get(
      args,
      options,
    ),
  )
}

export async function putAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespace'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespace[':Namespace']['iam-policy-assignments'][
      ':AssignmentName'
    ].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdNamespacesNamespace(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].$get(args, options),
  )
}

export async function deleteAccountsAwsAccountIdNamespacesNamespace(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][
      ':ScheduleId'
    ].$get(args, options),
  )
}

export async function deleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][
      ':ScheduleId'
    ].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdNamespacesNamespaceUsersUserName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$get(
      args,
      options,
    ),
  )
}

export async function putAccountsAwsAccountIdNamespacesNamespaceUsersUserName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAccountsAwsAccountIdNamespacesNamespaceUsersUserName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['user-principals'][':PrincipalId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace']['user-principals'][
      ':PrincipalId'
    ].$delete(args, options),
  )
}

export async function getAccountsAwsAccountIdSettings(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].settings.$get(args, options))
}

export async function putAccountsAwsAccountIdSettings(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].settings.$put(args, options))
}

export async function getAccountsAwsAccountIdAnalysesAnalysisIdDefinition(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].analyses[':AnalysisId'].definition.$get(args, options),
  )
}

export async function getAccountsAwsAccountIdAnalysesAnalysisIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].analyses[':AnalysisId'].permissions.$get(args, options),
  )
}

export async function putAccountsAwsAccountIdAnalysesAnalysisIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].analyses[':AnalysisId'].permissions.$put(args, options),
  )
}

export async function getAccountsAwsAccountIdDashboardsDashboardIdDefinition(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].dashboards[':DashboardId'].definition.$get(args, options),
  )
}

export async function getAccountsAwsAccountIdDashboardsDashboardIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].dashboards[':DashboardId'].permissions.$get(args, options),
  )
}

export async function putAccountsAwsAccountIdDashboardsDashboardIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].dashboards[':DashboardId'].permissions.$put(args, options),
  )
}

export async function getAccountsAwsAccountIdDataSetsDataSetIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].permissions.$get(args, options),
  )
}

export async function postAccountsAwsAccountIdDataSetsDataSetIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].permissions.$post(args, options),
  )
}

export async function getAccountsAwsAccountIdDataSourcesDataSourceIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].permissions.$get(
      args,
      options,
    ),
  )
}

export async function postAccountsAwsAccountIdDataSourcesDataSourceIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].permissions.$post(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdFoldersFolderIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].folders[':FolderId'].permissions.$get(args, options),
  )
}

export async function putAccountsAwsAccountIdFoldersFolderIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].folders[':FolderId'].permissions.$put(args, options),
  )
}

export async function getAccountsAwsAccountIdFoldersFolderIdResolvedPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].folders[':FolderId']['resolved-permissions'].$get(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'][
      ':AssignmentName'
    ].$get(args, options),
  )
}

export async function putAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentName(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'][
      ':AssignmentName'
    ].$put(args, options),
  )
}

export async function getAccountsAwsAccountIdIpRestriction(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId']['ip-restriction'].$get(args, options))
}

export async function postAccountsAwsAccountIdIpRestriction(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['ip-restriction'].$post(args, options),
  )
}

export async function getAccountsAwsAccountIdTemplatesTemplateIdDefinition(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].definition.$get(args, options),
  )
}

export async function getAccountsAwsAccountIdTemplatesTemplateIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].permissions.$get(args, options),
  )
}

export async function putAccountsAwsAccountIdTemplatesTemplateIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].permissions.$put(args, options),
  )
}

export async function getAccountsAwsAccountIdThemesThemeIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].permissions.$get(args, options),
  )
}

export async function putAccountsAwsAccountIdThemesThemeIdPermissions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].permissions.$put(args, options),
  )
}

export async function postAccountsAwsAccountIdEmbedUrlAnonymousUser(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['embed-url']['anonymous-user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['embed-url']['anonymous-user'].$post(args, options),
  )
}

export async function postAccountsAwsAccountIdEmbedUrlRegisteredUser(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['embed-url']['registered-user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['embed-url']['registered-user'].$post(args, options),
  )
}

export async function getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsType(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].dashboards[':DashboardId']['embed-url#creds-type'].$get(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdSessionEmbedUrl(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['session-embed-url'].$get(args, options),
  )
}

export async function getAccountsAwsAccountIdAnalyses(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].analyses.$get(args, options))
}

export async function getAccountsAwsAccountIdDashboardsDashboardIdVersions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].dashboards[':DashboardId'].versions.$get(args, options),
  )
}

export async function getAccountsAwsAccountIdDashboards(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].dashboards.$get(args, options))
}

export async function getAccountsAwsAccountIdFoldersFolderIdMembers(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].folders[':FolderId'].members.$get(args, options),
  )
}

export async function getAccountsAwsAccountIdFolders(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].folders.$get(args, options))
}

export async function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembers(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members.$get(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignments(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'].$get(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignments(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'][
      'iam-policy-assignments'
    ].$get(args, options),
  )
}

export async function getAccountsAwsAccountIdDataSetsDataSetIdIngestions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions.$get(args, options),
  )
}

export async function getAccountsAwsAccountIdNamespaces(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].namespaces.$get(args, options))
}

export async function getResourcesResourceArnTags(
  args: InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':ResourceArn'].tags.$get(args, options))
}

export async function postResourcesResourceArnTags(
  args: InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':ResourceArn'].tags.$post(args, options))
}

export async function getAccountsAwsAccountIdTemplatesTemplateIdAliases(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases.$get(args, options),
  )
}

export async function getAccountsAwsAccountIdTemplatesTemplateIdVersions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].templates[':TemplateId'].versions.$get(args, options),
  )
}

export async function getAccountsAwsAccountIdTemplates(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].templates.$get(args, options))
}

export async function getAccountsAwsAccountIdThemesThemeIdAliases(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases.$get(args, options),
  )
}

export async function getAccountsAwsAccountIdThemesThemeIdVersions(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].themes[':ThemeId'].versions.$get(args, options),
  )
}

export async function getAccountsAwsAccountIdThemes(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].themes.$get(args, options))
}

export async function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroups(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].groups.$get(
      args,
      options,
    ),
  )
}

export async function getAccountsAwsAccountIdNamespacesNamespaceUsers(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].users.$get(args, options),
  )
}

export async function postAccountsAwsAccountIdNamespacesNamespaceUsers(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace'].users.$post(args, options),
  )
}

export async function postAccountsAwsAccountIdRestoreAnalysesAnalysisId(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['restore']['analyses'][':AnalysisId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].restore.analyses[':AnalysisId'].$post(args, options),
  )
}

export async function postAccountsAwsAccountIdSearchAnalyses(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['analyses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].search.analyses.$post(args, options))
}

export async function postAccountsAwsAccountIdSearchDashboards(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['search']['dashboards']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].search.dashboards.$post(args, options),
  )
}

export async function postAccountsAwsAccountIdSearchDataSets(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['data-sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].search['data-sets'].$post(args, options),
  )
}

export async function postAccountsAwsAccountIdSearchDataSources(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['search']['data-sources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].search['data-sources'].$post(args, options),
  )
}

export async function postAccountsAwsAccountIdSearchFolders(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['folders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':AwsAccountId'].search.folders.$post(args, options))
}

export async function postAccountsAwsAccountIdNamespacesNamespaceGroupsSearch(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups-search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].namespaces[':Namespace']['groups-search'].$post(args, options),
  )
}

export async function deleteResourcesResourceArnTagsKeys(
  args: InferRequestType<(typeof client.resources)[':ResourceArn']['tags#keys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':ResourceArn']['tags#keys'].$delete(args, options))
}

export async function putAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumber(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions'][':VersionNumber']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId'].dashboards[':DashboardId'].versions[':VersionNumber'].$put(
      args,
      options,
    ),
  )
}

export async function putAccountsAwsAccountIdPublicSharingSettings(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['public-sharing-settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':AwsAccountId']['public-sharing-settings'].$put(args, options),
  )
}
