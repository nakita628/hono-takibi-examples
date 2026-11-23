import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(deleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdCustomizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdCustomizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdCustomizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdCustomizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdDataSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDataSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdNamespacesNamespaceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdNamespacesNamespaceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdThemesThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdThemesThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdThemesThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdThemesThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdThemesThemeIdAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdDataSetsDataSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDataSetsDataSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdDataSetsDataSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdDataSourcesDataSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDataSourcesDataSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdDataSourcesDataSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteAccountsAwsAccountIdNamespacesNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdNamespacesNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdNamespacesNamespaceUsersUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdAnalysesAnalysisIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDashboardsDashboardIdDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDashboardsDashboardIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdDashboardsDashboardIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDataSetsDataSetIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdDataSetsDataSetIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdFoldersFolderIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdFoldersFolderIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAwsAccountIdIpRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdIpRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdTemplatesTemplateIdDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdTemplatesTemplateIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdTemplatesTemplateIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdThemesThemeIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdThemesThemeIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdEmbedUrlAnonymousUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdEmbedUrlRegisteredUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdSessionEmbedUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDashboardsDashboardIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdFoldersFolderIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAwsAccountIdDataSetsDataSetIdIngestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdTemplatesTemplateIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdTemplatesTemplateIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdThemesThemeIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdThemesThemeIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAwsAccountIdNamespacesNamespaceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdNamespacesNamespaceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdRestoreAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdSearchAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdSearchDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdSearchDataSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdSearchDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdSearchFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAwsAccountIdNamespacesNamespaceGroupsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAwsAccountIdPublicSharingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
