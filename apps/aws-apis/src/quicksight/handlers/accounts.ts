import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountsAwsAccountIdAnalysesAnalysisIdRoute,
  deleteAccountsAwsAccountIdCustomizationsRoute,
  deleteAccountsAwsAccountIdDashboardsDashboardIdRoute,
  deleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRoute,
  deleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRoute,
  deleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdRoute,
  deleteAccountsAwsAccountIdDataSetsDataSetIdRoute,
  deleteAccountsAwsAccountIdDataSourcesDataSourceIdRoute,
  deleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdRoute,
  deleteAccountsAwsAccountIdFoldersFolderIdRoute,
  deleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameRoute,
  deleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRoute,
  deleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRoute,
  deleteAccountsAwsAccountIdNamespacesNamespaceRoute,
  deleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdRoute,
  deleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRoute,
  deleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute,
  deleteAccountsAwsAccountIdTemplatesTemplateIdRoute,
  deleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute,
  deleteAccountsAwsAccountIdThemesThemeIdRoute,
  getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionRoute,
  getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsRoute,
  getAccountsAwsAccountIdAnalysesAnalysisIdRoute,
  getAccountsAwsAccountIdAnalysesRoute,
  getAccountsAwsAccountIdCustomizationsRoute,
  getAccountsAwsAccountIdDashboardsDashboardIdDefinitionRoute,
  getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeRoute,
  getAccountsAwsAccountIdDashboardsDashboardIdPermissionsRoute,
  getAccountsAwsAccountIdDashboardsDashboardIdRoute,
  getAccountsAwsAccountIdDashboardsDashboardIdVersionsRoute,
  getAccountsAwsAccountIdDashboardsRoute,
  getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRoute,
  getAccountsAwsAccountIdDataSetsDataSetIdIngestionsRoute,
  getAccountsAwsAccountIdDataSetsDataSetIdPermissionsRoute,
  getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRoute,
  getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRoute,
  getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdRoute,
  getAccountsAwsAccountIdDataSetsDataSetIdRoute,
  getAccountsAwsAccountIdDataSetsRoute,
  getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsRoute,
  getAccountsAwsAccountIdDataSourcesDataSourceIdRoute,
  getAccountsAwsAccountIdDataSourcesRoute,
  getAccountsAwsAccountIdFoldersFolderIdMembersRoute,
  getAccountsAwsAccountIdFoldersFolderIdPermissionsRoute,
  getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsRoute,
  getAccountsAwsAccountIdFoldersFolderIdRoute,
  getAccountsAwsAccountIdFoldersRoute,
  getAccountsAwsAccountIdIpRestrictionRoute,
  getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRoute,
  getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersRoute,
  getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRoute,
  getAccountsAwsAccountIdNamespacesNamespaceGroupsRoute,
  getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameRoute,
  getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsRoute,
  getAccountsAwsAccountIdNamespacesNamespaceRoute,
  getAccountsAwsAccountIdNamespacesNamespaceUsersRoute,
  getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsRoute,
  getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsRoute,
  getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRoute,
  getAccountsAwsAccountIdNamespacesRoute,
  getAccountsAwsAccountIdSessionEmbedUrlRoute,
  getAccountsAwsAccountIdSettingsRoute,
  getAccountsAwsAccountIdTemplatesRoute,
  getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute,
  getAccountsAwsAccountIdTemplatesTemplateIdAliasesRoute,
  getAccountsAwsAccountIdTemplatesTemplateIdDefinitionRoute,
  getAccountsAwsAccountIdTemplatesTemplateIdPermissionsRoute,
  getAccountsAwsAccountIdTemplatesTemplateIdRoute,
  getAccountsAwsAccountIdTemplatesTemplateIdVersionsRoute,
  getAccountsAwsAccountIdThemesRoute,
  getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute,
  getAccountsAwsAccountIdThemesThemeIdAliasesRoute,
  getAccountsAwsAccountIdThemesThemeIdPermissionsRoute,
  getAccountsAwsAccountIdThemesThemeIdRoute,
  getAccountsAwsAccountIdThemesThemeIdVersionsRoute,
  postAccountsAwsAccountIdAnalysesAnalysisIdRoute,
  postAccountsAwsAccountIdCustomizationsRoute,
  postAccountsAwsAccountIdDashboardsDashboardIdRoute,
  postAccountsAwsAccountIdDataSetsDataSetIdPermissionsRoute,
  postAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRoute,
  postAccountsAwsAccountIdDataSetsRoute,
  postAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsRoute,
  postAccountsAwsAccountIdDataSourcesRoute,
  postAccountsAwsAccountIdEmbedUrlAnonymousUserRoute,
  postAccountsAwsAccountIdEmbedUrlRegisteredUserRoute,
  postAccountsAwsAccountIdFoldersFolderIdRoute,
  postAccountsAwsAccountIdIpRestrictionRoute,
  postAccountsAwsAccountIdNamespacesNamespaceGroupsRoute,
  postAccountsAwsAccountIdNamespacesNamespaceGroupsSearchRoute,
  postAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexRoute,
  postAccountsAwsAccountIdNamespacesNamespaceUsersRoute,
  postAccountsAwsAccountIdRestoreAnalysesAnalysisIdRoute,
  postAccountsAwsAccountIdRoute,
  postAccountsAwsAccountIdSearchAnalysesRoute,
  postAccountsAwsAccountIdSearchDashboardsRoute,
  postAccountsAwsAccountIdSearchDataSetsRoute,
  postAccountsAwsAccountIdSearchDataSourcesRoute,
  postAccountsAwsAccountIdSearchFoldersRoute,
  postAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute,
  postAccountsAwsAccountIdTemplatesTemplateIdRoute,
  postAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute,
  postAccountsAwsAccountIdThemesThemeIdRoute,
  putAccountsAwsAccountIdAnalysesAnalysisIdPermissionsRoute,
  putAccountsAwsAccountIdAnalysesAnalysisIdRoute,
  putAccountsAwsAccountIdCustomizationsRoute,
  putAccountsAwsAccountIdDashboardsDashboardIdPermissionsRoute,
  putAccountsAwsAccountIdDashboardsDashboardIdRoute,
  putAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberRoute,
  putAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRoute,
  putAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRoute,
  putAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRoute,
  putAccountsAwsAccountIdDataSetsDataSetIdRoute,
  putAccountsAwsAccountIdDataSourcesDataSourceIdRoute,
  putAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdRoute,
  putAccountsAwsAccountIdFoldersFolderIdPermissionsRoute,
  putAccountsAwsAccountIdFoldersFolderIdRoute,
  putAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRoute,
  putAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRoute,
  putAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameRoute,
  putAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRoute,
  putAccountsAwsAccountIdPublicSharingSettingsRoute,
  putAccountsAwsAccountIdSettingsRoute,
  putAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute,
  putAccountsAwsAccountIdTemplatesTemplateIdPermissionsRoute,
  putAccountsAwsAccountIdTemplatesTemplateIdRoute,
  putAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute,
  putAccountsAwsAccountIdThemesThemeIdPermissionsRoute,
  putAccountsAwsAccountIdThemesThemeIdRoute,
} from '../routes'

export const deleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdCustomizationsRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdCustomizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdCustomizationsRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdCustomizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdCustomizationsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdCustomizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdCustomizationsRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdCustomizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdAnalysesAnalysisIdRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdAnalysesAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdAnalysesAnalysisIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdAnalysesAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdAnalysesAnalysisIdRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdAnalysesAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdAnalysesAnalysisIdRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdAnalysesAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdDataSetsRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdDataSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSetsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdDataSourcesRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSourcesRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdNamespacesNamespaceGroupsRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdNamespacesNamespaceGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceGroupsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdThemesThemeIdRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdThemesThemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdThemesThemeIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdThemesThemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdThemesThemeIdRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdThemesThemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdThemesThemeIdRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdThemesThemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdDataSetsDataSetIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdDataSetsDataSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSetsDataSetIdRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSetsDataSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdDataSetsDataSetIdRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdDataSetsDataSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdDataSourcesDataSourceIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdDataSourcesDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSourcesDataSourceIdRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSourcesDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdDataSourcesDataSourceIdRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdDataSourcesDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdNamespacesNamespaceRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdNamespacesNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdRouteHandler: RouteHandler<
  typeof deleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdSettingsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdSettingsRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdAnalysesAnalysisIdPermissionsRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdAnalysesAnalysisIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDashboardsDashboardIdDefinitionRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDashboardsDashboardIdDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDashboardsDashboardIdPermissionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDashboardsDashboardIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdDashboardsDashboardIdPermissionsRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdDashboardsDashboardIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSetsDataSetIdPermissionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSetsDataSetIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdDataSetsDataSetIdPermissionsRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdDataSetsDataSetIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdFoldersFolderIdPermissionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdFoldersFolderIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdFoldersFolderIdPermissionsRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdFoldersFolderIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdIpRestrictionRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdIpRestrictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdIpRestrictionRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdIpRestrictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdTemplatesTemplateIdDefinitionRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdTemplatesTemplateIdDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdTemplatesTemplateIdPermissionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdTemplatesTemplateIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdTemplatesTemplateIdPermissionsRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdTemplatesTemplateIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdThemesThemeIdPermissionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdThemesThemeIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdThemesThemeIdPermissionsRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdThemesThemeIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdEmbedUrlAnonymousUserRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdEmbedUrlAnonymousUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdEmbedUrlRegisteredUserRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdEmbedUrlRegisteredUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdSessionEmbedUrlRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdSessionEmbedUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdAnalysesRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdAnalysesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDashboardsDashboardIdVersionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDashboardsDashboardIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDashboardsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdFoldersFolderIdMembersRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdFoldersFolderIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdFoldersRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdDataSetsDataSetIdIngestionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdDataSetsDataSetIdIngestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdTemplatesTemplateIdAliasesRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdTemplatesTemplateIdAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdTemplatesTemplateIdVersionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdTemplatesTemplateIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdTemplatesRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdThemesThemeIdAliasesRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdThemesThemeIdAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdThemesThemeIdVersionsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdThemesThemeIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdThemesRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdThemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAwsAccountIdNamespacesNamespaceUsersRouteHandler: RouteHandler<
  typeof getAccountsAwsAccountIdNamespacesNamespaceUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdNamespacesNamespaceUsersRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdNamespacesNamespaceUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdRestoreAnalysesAnalysisIdRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdRestoreAnalysesAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdSearchAnalysesRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdSearchAnalysesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdSearchDashboardsRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdSearchDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdSearchDataSetsRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdSearchDataSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdSearchDataSourcesRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdSearchDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdSearchFoldersRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdSearchFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAwsAccountIdNamespacesNamespaceGroupsSearchRouteHandler: RouteHandler<
  typeof postAccountsAwsAccountIdNamespacesNamespaceGroupsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAwsAccountIdPublicSharingSettingsRouteHandler: RouteHandler<
  typeof putAccountsAwsAccountIdPublicSharingSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
