import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV2ActivitiesActivityIDRoute,
  deleteApiV2AgentsAgentIDRoute,
  deleteApiV2AuthorizationCategoriesIdRoute,
  deleteApiV2AuthorizationCategoriesIdUsersUserIDRoute,
  deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute,
  deleteApiV2AuthorizationCodeDefinitionsIdRoute,
  deleteApiV2AuthorizationCodesIdRoute,
  deleteApiV2BundlesIDRoute,
  deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute,
  deleteApiV2ContentDefinitionsContentDefinitionIDRoute,
  deleteApiV2ContentReleasesContentReleaseIdRoute,
  deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute,
  deleteApiV2ContentSubmissionsContentSubmissionIDRoute,
  deleteApiV2ContentSubmissionTypesIdRoute,
  deleteApiV2FilesIDRoute,
  deleteApiV2GlobalImagesIDRoute,
  deleteApiV2JobRunsJobRunIDRoute,
  deleteApiV2JobsJobIDRoute,
  deleteApiV2LanguagesLocaleIDRoute,
  deleteApiV2PackagesIDRoute,
  deleteApiV2PackageTypesIDRoute,
  deleteApiV2PackageTypesIdUsersUserIDRoute,
  deleteApiV2PackageTypetoBundlesRoute,
  deleteApiV2PermissionsIdRoute,
  deleteApiV2PriorityPackagesIDRoute,
  deleteApiV2ReleasesReleaseIdBundleBundleIdRoute,
  deleteApiV2RolesIdRoute,
  deleteApiV2TranslationSetAttributesIDRoute,
  deleteApiV2UpdateGroupsIDRoute,
  deleteApiV2UpdateGroupsIdUsersUserIDRoute,
  deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute,
  deleteApiV2UserContentDefinitionsUserContentDefinitionIDRoute,
  deleteApiV2UsersIdRoute,
  deleteApiV2VouchersVoucherCodeRoute,
  getApiV2ActivitiesActivityIDRoute,
  getApiV2ActivitiesRoute,
  getApiV2ActivityRunsActivityRunIDRoute,
  getApiV2ActivityRunsActivityRunIDStatusRoute,
  getApiV2ActivityRunsRoute,
  getApiV2AftermarketServicesCertificatesRoute,
  getApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute,
  getApiV2AftermarketServicesEnginesSerialNumberProductionDataRoute,
  getApiV2AftermarketServicesHelloRoute,
  getApiV2AftermarketServicesUserStatusesRoute,
  getApiV2AgentsAgentIDActivityRunRoute,
  getApiV2AgentsAgentIDRoute,
  getApiV2AgentsCurrentActivityRunRoute,
  getApiV2AgentsCurrentRoute,
  getApiV2AgentsRoute,
  getApiV2AuthenticationIsAliveRoute,
  getApiV2AuthorizationCategoriesRoute,
  getApiV2AuthorizationCategoriesUsersRoute,
  getApiV2AuthorizationCodeDefinitionsIdRoute,
  getApiV2AuthorizationCodeDefinitionsRoute,
  getApiV2AuthorizationCodesIdContactInformationRoute,
  getApiV2AuthorizationCodesIdRoute,
  getApiV2AuthorizationCodesIdValidateRoute,
  getApiV2AuthorizationCodesRoute,
  getApiV2AuthorizationContactInformationRoute,
  getApiV2BrandsRoute,
  getApiV2BundlesIDRoute,
  getApiV2BundlesRoute,
  getApiV2ClientsClientIDCachedFilesRoute,
  getApiV2ClientsClientIDPackageReportsRoute,
  getApiV2ClientsIDAvailableUpdateGroupSubscriptionsRoute,
  getApiV2ClientsIDRoute,
  getApiV2ClientsIDUpdateGroupSubscriptionsRoute,
  getApiV2ClientsRoute,
  getApiV2ContentDefinitionsContentDefinitionIDAttributesRoute,
  getApiV2ContentDefinitionsContentDefinitionIDRoute,
  getApiV2ContentDefinitionsRoute,
  getApiV2ContentReleasesContentReleaseIdRoute,
  getApiV2ContentReleasesRoute,
  getApiV2ContentSubmissionsContentSubmissionIDAttributesRoute,
  getApiV2ContentSubmissionsContentSubmissionIDRoute,
  getApiV2ContentSubmissionsContentSubmissionIDStatusRoute,
  getApiV2ContentSubmissionsRoute,
  getApiV2ContentSubmissionTypesIdRoute,
  getApiV2ContentSubmissionTypesRoute,
  getApiV2DealerByCountryRoute,
  getApiV2DealersDealerCodeRoute,
  getApiV2DealersRoute,
  getApiV2FilesIDFileContentsRoute,
  getApiV2FilesIDRoute,
  getApiV2FilesRoute,
  getApiV2GlobalImageCategoriesIDRoute,
  getApiV2GlobalImageCategoriesRoute,
  getApiV2GlobalImagesIDImageContentsRoute,
  getApiV2GlobalImagesIDRoute,
  getApiV2GlobalImagesRoute,
  getApiV2JobRunsJobRunIDRoute,
  getApiV2JobRunsRoute,
  getApiV2JobsJobIDRoute,
  getApiV2JobsRoute,
  getApiV2LanguagesLocaleIDRoute,
  getApiV2LanguagesRoute,
  getApiV2LicensesIDRoute,
  getApiV2LicensesRoute,
  getApiV2LogsIDRoute,
  getApiV2LogsRoute,
  getApiV2PackagesIDRoute,
  getApiV2PackagesRoute,
  getApiV2PackageTypesIDRoute,
  getApiV2PackageTypesRoute,
  getApiV2PackageTypetoBundlesRoute,
  getApiV2PermissionsIdRoute,
  getApiV2PermissionsRoute,
  getApiV2PriorityPackagesIDRoute,
  getApiV2PriorityPackagesRoute,
  getApiV2ReleasesReleaseIdRoute,
  getApiV2ReleasesRoute,
  getApiV2ReportingBundlesInUpdateGroupRoute,
  getApiV2ReportingBundleStatusSummaryRoute,
  getApiV2ReportingClientInfoRoute,
  getApiV2ReportingCurrentPackagesInUpdateGroupRoute,
  getApiV2ReportingGetClientRoute,
  getApiV2ReportingGetSubscriptionsRoute,
  getApiV2ReportingPackageStatusSummaryRoute,
  getApiV2ReportingRegisteredClientsRoute,
  getApiV2ReportingUpdateGroupsRoute,
  getApiV2ReportingUpdateMetricsRoute,
  getApiV2RolesIdPermissionsRoute,
  getApiV2RolesIdRoute,
  getApiV2RolesIdUsersRoute,
  getApiV2RolesRoute,
  getApiV2StepsRoute,
  getApiV2StepsStepIDRoute,
  getApiV2StringDefinitionsIDRoute,
  getApiV2StringDefinitionsRoute,
  getApiV2StringTranslationsRoute,
  getApiV2StringTranslationsStringIdLanguageIdRoute,
  getApiV2TranslationKeysIDRoute,
  getApiV2TranslationKeysRoute,
  getApiV2TranslationRequestsIdRoute,
  getApiV2TranslationRequestsRoute,
  getApiV2TranslationSetsIDAttributesRoute,
  getApiV2TranslationSetsIDRoute,
  getApiV2TranslationSetsIDSourceStringsRoute,
  getApiV2TranslationSetsIDStatisticsRoute,
  getApiV2TranslationSetsIDStringsRoute,
  getApiV2TranslationSetsRoute,
  getApiV2UpdateGroupClientRelationshipsRelationshipIDRoute,
  getApiV2UpdateGroupClientRelationshipsRoute,
  getApiV2UpdateGroupsIDBundlesRoute,
  getApiV2UpdateGroupsIDRoute,
  getApiV2UpdateGroupsRoute,
  getApiV2UpdateGroupSubscriptionsRoute,
  getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute,
  getApiV2UpdateSystemRoute,
  getApiV2UserContentDefinitionsRoute,
  getApiV2UserContentDefinitionsUserContentDefinitionIDRoute,
  getApiV2UsersCurrentPermissionsRoute,
  getApiV2UsersCurrentRolesRoute,
  getApiV2UsersCurrentRoute,
  getApiV2UsersIdPermissionsRoute,
  getApiV2UsersIdRolesRoute,
  getApiV2UsersIdRoute,
  getApiV2UsersRoute,
  getApiV2VoucherHistoryRoute,
  getApiV2VouchersRoute,
  getApiV2VouchersVoucherCodeRoute,
  getApiV2VouchersVoucherCodeVoucherHistoryRoute,
  postApiV2ActivitiesRoute,
  postApiV2AgentsRoute,
  postApiV2AuthenticationRequestPasswordResetRoute,
  postApiV2AuthenticationResetPaswordRoute,
  postApiV2AuthenticationRoute,
  postApiV2AuthorizationCategoriesIdUsersUserIDRoute,
  postApiV2AuthorizationCategoriesRoute,
  postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute,
  postApiV2AuthorizationCodeDefinitionsRoute,
  postApiV2AuthorizationCodesRoute,
  postApiV2AuthorizationContactInformationRoute,
  postApiV2BundlesRoute,
  postApiV2ContentDefinitionsContentDefinitionIDAttributesBatchRoute,
  postApiV2ContentDefinitionsContentDefinitionIDAttributesRoute,
  postApiV2ContentDefinitionsRoute,
  postApiV2ContentReleasesRoute,
  postApiV2ContentSubmissionsContentSubmissionIDAttributesBatchRoute,
  postApiV2ContentSubmissionsContentSubmissionIDAttributesRoute,
  postApiV2ContentSubmissionsRoute,
  postApiV2ContentSubmissionTypesRoute,
  postApiV2FilesRoute,
  postApiV2GlobalImageCategoriesRoute,
  postApiV2GlobalImagesRoute,
  postApiV2JobRunsRoute,
  postApiV2JobsRoute,
  postApiV2LanguagesRoute,
  postApiV2LicenseActivationsRegisterEDTLiteRoute,
  postApiV2LicenseActivationsRoute,
  postApiV2LogsRoute,
  postApiV2NotificationsRoute,
  postApiV2PackagesRoute,
  postApiV2PackageTypesIdUsersUserIDRoute,
  postApiV2PackageTypesRoute,
  postApiV2PackageTypetoBundlesRoute,
  postApiV2PermissionsRoute,
  postApiV2PriorityPackagesRoute,
  postApiV2ReleasesReleaseIdBundleBundleIdRoute,
  postApiV2ReleasesRoute,
  postApiV2RolesRoute,
  postApiV2StepsRoute,
  postApiV2StringDefinitionsBatchRoute,
  postApiV2TranslationKeysRoute,
  postApiV2TranslationRequestsRoute,
  postApiV2TranslationSetsIDAttributesBatchRoute,
  postApiV2TranslationSetsIDAttributesRoute,
  postApiV2UpdateGroupClientRelationshipsRoute,
  postApiV2UpdateGroupsIdUsersUserIDRoute,
  postApiV2UpdateGroupsRoute,
  postApiV2UpdateGroupSubscriptionsBatchRoute,
  postApiV2UpdateGroupSubscriptionsRoute,
  postApiV2UserContentDefinitionsRoute,
  postApiV2UsersRoute,
  postApiV2VouchersRoute,
  putApiV2ActivitiesActivityIDRoute,
  putApiV2ActivityRunsActivityRunIDRoute,
  putApiV2ActivityRunsActivityRunIDStatusRoute,
  putApiV2AftermarketServicesECUsSerialNumberRoute,
  putApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute,
  putApiV2AftermarketServicesUserStatusesRoute,
  putApiV2AgentsAgentIDActivityRunRoute,
  putApiV2AgentsAgentIDRoute,
  putApiV2AgentsAgentIDStatusRoute,
  putApiV2AuthenticatedUsersUserIDTokensRoute,
  putApiV2AuthorizationCategoriesIdRoute,
  putApiV2AuthorizationCodeDefinitionsIdRoute,
  putApiV2AuthorizationCodesIdRoute,
  putApiV2BundlesIDRoute,
  putApiV2ClientsClientIDPackageReportsBatchRoute,
  putApiV2ClientsClientIDPackageReportsRoute,
  putApiV2ClientsIDRoute,
  putApiV2ContentDefinitionAttributesBatchRoute,
  putApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute,
  putApiV2ContentDefinitionsContentDefinitionIDRoute,
  putApiV2ContentReleasesContentReleaseIdRoute,
  putApiV2ContentSubmissionAttributesBatchRoute,
  putApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute,
  putApiV2ContentSubmissionsContentSubmissionIDRoute,
  putApiV2ContentSubmissionTypesIdRoute,
  putApiV2FilesIDFileContentsRoute,
  putApiV2FilesIDRoute,
  putApiV2GlobalImagesIDImageContentsRoute,
  putApiV2GlobalImagesIDRoute,
  putApiV2JobRunsJobRunIDRoute,
  putApiV2JobsJobIDRoute,
  putApiV2LanguagesLocaleIDRoute,
  putApiV2LicenseActivationsIDConfirmRoute,
  putApiV2LicenseActivationsIDRoute,
  putApiV2PackagesIDRoute,
  putApiV2PackageTypesIDRoute,
  putApiV2PackageTypetoBundlesRoute,
  putApiV2PermissionsIdRoute,
  putApiV2ReleasesReleaseId2Route,
  putApiV2RolesIdPermissionsRoute,
  putApiV2RolesIdRoute,
  putApiV2RolesIdUsersRoute,
  putApiV2StepsStepIDRoute,
  putApiV2StringDefinitionsBatchRoute,
  putApiV2StringTranslationsBatchRoute,
  putApiV2StringTranslationsStringIdLanguageIdRoute,
  putApiV2TranslationKeysIDRoute,
  putApiV2TranslationRequestsIdRoute,
  putApiV2TranslationRequestsIdStringsRoute,
  putApiV2TranslationSetAttributesBatchRoute,
  putApiV2TranslationSetAttributesIDRoute,
  putApiV2TranslationSetsIDRoute,
  putApiV2TranslationSetsIDStringsRoute,
  putApiV2UpdateGroupClientRelationshipsRelationshipIDRoute,
  putApiV2UpdateGroupClientRelationshipsRoute,
  putApiV2UpdateGroupsIDRoute,
  putApiV2UpdateGroupSubscriptionsBatchRoute,
  putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute,
  putApiV2UsersCurrentRoute,
  putApiV2UsersIdRolesRoute,
  putApiV2UsersIdRoute,
  putApiV2VouchersVoucherCodeRoute,
} from '../routes'

export const getApiV2AftermarketServicesCertificatesRouteHandler: RouteHandler<
  typeof getApiV2AftermarketServicesCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AftermarketServicesECUsSerialNumberRouteHandler: RouteHandler<
  typeof putApiV2AftermarketServicesECUsSerialNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AftermarketServicesEnginesSerialNumberIQACodesRouteHandler: RouteHandler<
  typeof getApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AftermarketServicesEnginesSerialNumberIQACodesRouteHandler: RouteHandler<
  typeof putApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AftermarketServicesEnginesSerialNumberProductionDataRouteHandler: RouteHandler<
  typeof getApiV2AftermarketServicesEnginesSerialNumberProductionDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AftermarketServicesHelloRouteHandler: RouteHandler<
  typeof getApiV2AftermarketServicesHelloRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AftermarketServicesUserStatusesRouteHandler: RouteHandler<
  typeof getApiV2AftermarketServicesUserStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AftermarketServicesUserStatusesRouteHandler: RouteHandler<
  typeof putApiV2AftermarketServicesUserStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AuthenticatedUsersUserIDTokensRouteHandler: RouteHandler<
  typeof putApiV2AuthenticatedUsersUserIDTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AuthenticationRouteHandler: RouteHandler<
  typeof postApiV2AuthenticationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthenticationIsAliveRouteHandler: RouteHandler<
  typeof getApiV2AuthenticationIsAliveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AuthenticationRequestPasswordResetRouteHandler: RouteHandler<
  typeof postApiV2AuthenticationRequestPasswordResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AuthenticationResetPaswordRouteHandler: RouteHandler<
  typeof postApiV2AuthenticationResetPaswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorizationCategoriesRouteHandler: RouteHandler<
  typeof getApiV2AuthorizationCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AuthorizationCategoriesRouteHandler: RouteHandler<
  typeof postApiV2AuthorizationCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorizationCategoriesUsersRouteHandler: RouteHandler<
  typeof getApiV2AuthorizationCategoriesUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AuthorizationCategoriesIdRouteHandler: RouteHandler<
  typeof deleteApiV2AuthorizationCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AuthorizationCategoriesIdRouteHandler: RouteHandler<
  typeof putApiV2AuthorizationCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AuthorizationCategoriesIdUsersUserIDRouteHandler: RouteHandler<
  typeof deleteApiV2AuthorizationCategoriesIdUsersUserIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AuthorizationCategoriesIdUsersUserIDRouteHandler: RouteHandler<
  typeof postApiV2AuthorizationCategoriesIdUsersUserIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorizationCodeDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2AuthorizationCodeDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AuthorizationCodeDefinitionsRouteHandler: RouteHandler<
  typeof postApiV2AuthorizationCodeDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRouteHandler: RouteHandler<
  typeof deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRouteHandler: RouteHandler<
  typeof postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AuthorizationCodeDefinitionsIdRouteHandler: RouteHandler<
  typeof deleteApiV2AuthorizationCodeDefinitionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorizationCodeDefinitionsIdRouteHandler: RouteHandler<
  typeof getApiV2AuthorizationCodeDefinitionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AuthorizationCodeDefinitionsIdRouteHandler: RouteHandler<
  typeof putApiV2AuthorizationCodeDefinitionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorizationCodesRouteHandler: RouteHandler<
  typeof getApiV2AuthorizationCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AuthorizationCodesRouteHandler: RouteHandler<
  typeof postApiV2AuthorizationCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AuthorizationCodesIdRouteHandler: RouteHandler<
  typeof deleteApiV2AuthorizationCodesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorizationCodesIdRouteHandler: RouteHandler<
  typeof getApiV2AuthorizationCodesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AuthorizationCodesIdRouteHandler: RouteHandler<
  typeof putApiV2AuthorizationCodesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorizationCodesIdContactInformationRouteHandler: RouteHandler<
  typeof getApiV2AuthorizationCodesIdContactInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorizationCodesIdValidateRouteHandler: RouteHandler<
  typeof getApiV2AuthorizationCodesIdValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorizationContactInformationRouteHandler: RouteHandler<
  typeof getApiV2AuthorizationContactInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AuthorizationContactInformationRouteHandler: RouteHandler<
  typeof postApiV2AuthorizationContactInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BrandsRouteHandler: RouteHandler<typeof getApiV2BrandsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BundlesRouteHandler: RouteHandler<typeof getApiV2BundlesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2BundlesRouteHandler: RouteHandler<typeof postApiV2BundlesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV2BundlesIDRouteHandler: RouteHandler<
  typeof deleteApiV2BundlesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BundlesIDRouteHandler: RouteHandler<typeof getApiV2BundlesIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV2BundlesIDRouteHandler: RouteHandler<typeof putApiV2BundlesIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2ClientsRouteHandler: RouteHandler<typeof getApiV2ClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ClientsClientIDCachedFilesRouteHandler: RouteHandler<
  typeof getApiV2ClientsClientIDCachedFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ClientsClientIDPackageReportsRouteHandler: RouteHandler<
  typeof getApiV2ClientsClientIDPackageReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ClientsClientIDPackageReportsRouteHandler: RouteHandler<
  typeof putApiV2ClientsClientIDPackageReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ClientsClientIDPackageReportsBatchRouteHandler: RouteHandler<
  typeof putApiV2ClientsClientIDPackageReportsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ClientsIDRouteHandler: RouteHandler<typeof getApiV2ClientsIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV2ClientsIDRouteHandler: RouteHandler<typeof putApiV2ClientsIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2ClientsIDAvailableUpdateGroupSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV2ClientsIDAvailableUpdateGroupSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ClientsIDUpdateGroupSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV2ClientsIDUpdateGroupSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ContentDefinitionAttributesBatchRouteHandler: RouteHandler<
  typeof putApiV2ContentDefinitionAttributesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRouteHandler: RouteHandler<
  typeof deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRouteHandler: RouteHandler<
  typeof putApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2ContentDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ContentDefinitionsRouteHandler: RouteHandler<
  typeof postApiV2ContentDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ContentDefinitionsContentDefinitionIDRouteHandler: RouteHandler<
  typeof deleteApiV2ContentDefinitionsContentDefinitionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentDefinitionsContentDefinitionIDRouteHandler: RouteHandler<
  typeof getApiV2ContentDefinitionsContentDefinitionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ContentDefinitionsContentDefinitionIDRouteHandler: RouteHandler<
  typeof putApiV2ContentDefinitionsContentDefinitionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentDefinitionsContentDefinitionIDAttributesRouteHandler: RouteHandler<
  typeof getApiV2ContentDefinitionsContentDefinitionIDAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ContentDefinitionsContentDefinitionIDAttributesRouteHandler: RouteHandler<
  typeof postApiV2ContentDefinitionsContentDefinitionIDAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ContentDefinitionsContentDefinitionIDAttributesBatchRouteHandler: RouteHandler<
  typeof postApiV2ContentDefinitionsContentDefinitionIDAttributesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentReleasesRouteHandler: RouteHandler<
  typeof getApiV2ContentReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ContentReleasesRouteHandler: RouteHandler<
  typeof postApiV2ContentReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ContentReleasesContentReleaseIdRouteHandler: RouteHandler<
  typeof deleteApiV2ContentReleasesContentReleaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentReleasesContentReleaseIdRouteHandler: RouteHandler<
  typeof getApiV2ContentReleasesContentReleaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ContentReleasesContentReleaseIdRouteHandler: RouteHandler<
  typeof putApiV2ContentReleasesContentReleaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ContentSubmissionAttributesBatchRouteHandler: RouteHandler<
  typeof putApiV2ContentSubmissionAttributesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRouteHandler: RouteHandler<
  typeof deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRouteHandler: RouteHandler<
  typeof putApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentSubmissionTypesRouteHandler: RouteHandler<
  typeof getApiV2ContentSubmissionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ContentSubmissionTypesRouteHandler: RouteHandler<
  typeof postApiV2ContentSubmissionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ContentSubmissionTypesIdRouteHandler: RouteHandler<
  typeof deleteApiV2ContentSubmissionTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentSubmissionTypesIdRouteHandler: RouteHandler<
  typeof getApiV2ContentSubmissionTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ContentSubmissionTypesIdRouteHandler: RouteHandler<
  typeof putApiV2ContentSubmissionTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentSubmissionsRouteHandler: RouteHandler<
  typeof getApiV2ContentSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ContentSubmissionsRouteHandler: RouteHandler<
  typeof postApiV2ContentSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ContentSubmissionsContentSubmissionIDRouteHandler: RouteHandler<
  typeof deleteApiV2ContentSubmissionsContentSubmissionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentSubmissionsContentSubmissionIDRouteHandler: RouteHandler<
  typeof getApiV2ContentSubmissionsContentSubmissionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ContentSubmissionsContentSubmissionIDRouteHandler: RouteHandler<
  typeof putApiV2ContentSubmissionsContentSubmissionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentSubmissionsContentSubmissionIDAttributesRouteHandler: RouteHandler<
  typeof getApiV2ContentSubmissionsContentSubmissionIDAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ContentSubmissionsContentSubmissionIDAttributesRouteHandler: RouteHandler<
  typeof postApiV2ContentSubmissionsContentSubmissionIDAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ContentSubmissionsContentSubmissionIDAttributesBatchRouteHandler: RouteHandler<
  typeof postApiV2ContentSubmissionsContentSubmissionIDAttributesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ContentSubmissionsContentSubmissionIDStatusRouteHandler: RouteHandler<
  typeof getApiV2ContentSubmissionsContentSubmissionIDStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DealerByCountryRouteHandler: RouteHandler<
  typeof getApiV2DealerByCountryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DealersRouteHandler: RouteHandler<typeof getApiV2DealersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DealersDealerCodeRouteHandler: RouteHandler<
  typeof getApiV2DealersDealerCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FilesRouteHandler: RouteHandler<typeof getApiV2FilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2FilesRouteHandler: RouteHandler<typeof postApiV2FilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2FilesIDRouteHandler: RouteHandler<typeof deleteApiV2FilesIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2FilesIDRouteHandler: RouteHandler<typeof getApiV2FilesIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2FilesIDRouteHandler: RouteHandler<typeof putApiV2FilesIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FilesIDFileContentsRouteHandler: RouteHandler<
  typeof getApiV2FilesIDFileContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2FilesIDFileContentsRouteHandler: RouteHandler<
  typeof putApiV2FilesIDFileContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GlobalImageCategoriesRouteHandler: RouteHandler<
  typeof getApiV2GlobalImageCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2GlobalImageCategoriesRouteHandler: RouteHandler<
  typeof postApiV2GlobalImageCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GlobalImageCategoriesIDRouteHandler: RouteHandler<
  typeof getApiV2GlobalImageCategoriesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GlobalImagesRouteHandler: RouteHandler<
  typeof getApiV2GlobalImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2GlobalImagesRouteHandler: RouteHandler<
  typeof postApiV2GlobalImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2GlobalImagesIDRouteHandler: RouteHandler<
  typeof deleteApiV2GlobalImagesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GlobalImagesIDRouteHandler: RouteHandler<
  typeof getApiV2GlobalImagesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2GlobalImagesIDRouteHandler: RouteHandler<
  typeof putApiV2GlobalImagesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GlobalImagesIDImageContentsRouteHandler: RouteHandler<
  typeof getApiV2GlobalImagesIDImageContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2GlobalImagesIDImageContentsRouteHandler: RouteHandler<
  typeof putApiV2GlobalImagesIDImageContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LanguagesRouteHandler: RouteHandler<typeof getApiV2LanguagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2LanguagesRouteHandler: RouteHandler<typeof postApiV2LanguagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV2LanguagesLocaleIDRouteHandler: RouteHandler<
  typeof deleteApiV2LanguagesLocaleIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LanguagesLocaleIDRouteHandler: RouteHandler<
  typeof getApiV2LanguagesLocaleIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2LanguagesLocaleIDRouteHandler: RouteHandler<
  typeof putApiV2LanguagesLocaleIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2LicenseActivationsRouteHandler: RouteHandler<
  typeof postApiV2LicenseActivationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2LicenseActivationsRegisterEDTLiteRouteHandler: RouteHandler<
  typeof postApiV2LicenseActivationsRegisterEDTLiteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2LicenseActivationsIDRouteHandler: RouteHandler<
  typeof putApiV2LicenseActivationsIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2LicenseActivationsIDConfirmRouteHandler: RouteHandler<
  typeof putApiV2LicenseActivationsIDConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LicensesRouteHandler: RouteHandler<typeof getApiV2LicensesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2LicensesIDRouteHandler: RouteHandler<typeof getApiV2LicensesIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2LogsRouteHandler: RouteHandler<typeof getApiV2LogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2LogsRouteHandler: RouteHandler<typeof postApiV2LogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LogsIDRouteHandler: RouteHandler<typeof getApiV2LogsIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2NotificationsRouteHandler: RouteHandler<
  typeof postApiV2NotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PackageTypesRouteHandler: RouteHandler<
  typeof getApiV2PackageTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PackageTypesRouteHandler: RouteHandler<
  typeof postApiV2PackageTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2PackageTypesIDRouteHandler: RouteHandler<
  typeof deleteApiV2PackageTypesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PackageTypesIDRouteHandler: RouteHandler<
  typeof getApiV2PackageTypesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2PackageTypesIDRouteHandler: RouteHandler<
  typeof putApiV2PackageTypesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2PackageTypesIdUsersUserIDRouteHandler: RouteHandler<
  typeof deleteApiV2PackageTypesIdUsersUserIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PackageTypesIdUsersUserIDRouteHandler: RouteHandler<
  typeof postApiV2PackageTypesIdUsersUserIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2PackageTypetoBundlesRouteHandler: RouteHandler<
  typeof deleteApiV2PackageTypetoBundlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PackageTypetoBundlesRouteHandler: RouteHandler<
  typeof getApiV2PackageTypetoBundlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PackageTypetoBundlesRouteHandler: RouteHandler<
  typeof postApiV2PackageTypetoBundlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2PackageTypetoBundlesRouteHandler: RouteHandler<
  typeof putApiV2PackageTypetoBundlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PackagesRouteHandler: RouteHandler<typeof getApiV2PackagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2PackagesRouteHandler: RouteHandler<typeof postApiV2PackagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV2PackagesIDRouteHandler: RouteHandler<
  typeof deleteApiV2PackagesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PackagesIDRouteHandler: RouteHandler<typeof getApiV2PackagesIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV2PackagesIDRouteHandler: RouteHandler<typeof putApiV2PackagesIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2PermissionsRouteHandler: RouteHandler<
  typeof getApiV2PermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PermissionsRouteHandler: RouteHandler<
  typeof postApiV2PermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2PermissionsIdRouteHandler: RouteHandler<
  typeof deleteApiV2PermissionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PermissionsIdRouteHandler: RouteHandler<
  typeof getApiV2PermissionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2PermissionsIdRouteHandler: RouteHandler<
  typeof putApiV2PermissionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PriorityPackagesRouteHandler: RouteHandler<
  typeof getApiV2PriorityPackagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PriorityPackagesRouteHandler: RouteHandler<
  typeof postApiV2PriorityPackagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2PriorityPackagesIDRouteHandler: RouteHandler<
  typeof deleteApiV2PriorityPackagesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PriorityPackagesIDRouteHandler: RouteHandler<
  typeof getApiV2PriorityPackagesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReleasesRouteHandler: RouteHandler<typeof getApiV2ReleasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2ReleasesRouteHandler: RouteHandler<typeof postApiV2ReleasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2ReleasesReleaseIdRouteHandler: RouteHandler<
  typeof getApiV2ReleasesReleaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ReleasesReleaseIdBundleBundleIdRouteHandler: RouteHandler<
  typeof deleteApiV2ReleasesReleaseIdBundleBundleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ReleasesReleaseIdBundleBundleIdRouteHandler: RouteHandler<
  typeof postApiV2ReleasesReleaseIdBundleBundleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ReleasesReleaseId2RouteHandler: RouteHandler<
  typeof putApiV2ReleasesReleaseId2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReportingBundleStatusSummaryRouteHandler: RouteHandler<
  typeof getApiV2ReportingBundleStatusSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReportingBundlesInUpdateGroupRouteHandler: RouteHandler<
  typeof getApiV2ReportingBundlesInUpdateGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReportingClientInfoRouteHandler: RouteHandler<
  typeof getApiV2ReportingClientInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReportingCurrentPackagesInUpdateGroupRouteHandler: RouteHandler<
  typeof getApiV2ReportingCurrentPackagesInUpdateGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReportingGetClientRouteHandler: RouteHandler<
  typeof getApiV2ReportingGetClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReportingGetSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV2ReportingGetSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReportingPackageStatusSummaryRouteHandler: RouteHandler<
  typeof getApiV2ReportingPackageStatusSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReportingRegisteredClientsRouteHandler: RouteHandler<
  typeof getApiV2ReportingRegisteredClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReportingUpdateGroupsRouteHandler: RouteHandler<
  typeof getApiV2ReportingUpdateGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ReportingUpdateMetricsRouteHandler: RouteHandler<
  typeof getApiV2ReportingUpdateMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RolesRouteHandler: RouteHandler<typeof getApiV2RolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2RolesRouteHandler: RouteHandler<typeof postApiV2RolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2RolesIdRouteHandler: RouteHandler<typeof deleteApiV2RolesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2RolesIdRouteHandler: RouteHandler<typeof getApiV2RolesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2RolesIdRouteHandler: RouteHandler<typeof putApiV2RolesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RolesIdPermissionsRouteHandler: RouteHandler<
  typeof getApiV2RolesIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2RolesIdPermissionsRouteHandler: RouteHandler<
  typeof putApiV2RolesIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RolesIdUsersRouteHandler: RouteHandler<
  typeof getApiV2RolesIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2RolesIdUsersRouteHandler: RouteHandler<
  typeof putApiV2RolesIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2StringDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2StringDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2StringDefinitionsBatchRouteHandler: RouteHandler<
  typeof postApiV2StringDefinitionsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2StringDefinitionsBatchRouteHandler: RouteHandler<
  typeof putApiV2StringDefinitionsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2StringDefinitionsIDRouteHandler: RouteHandler<
  typeof getApiV2StringDefinitionsIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2StringTranslationsRouteHandler: RouteHandler<
  typeof getApiV2StringTranslationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2StringTranslationsBatchRouteHandler: RouteHandler<
  typeof putApiV2StringTranslationsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2StringTranslationsStringIdLanguageIdRouteHandler: RouteHandler<
  typeof getApiV2StringTranslationsStringIdLanguageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2StringTranslationsStringIdLanguageIdRouteHandler: RouteHandler<
  typeof putApiV2StringTranslationsStringIdLanguageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TranslationKeysRouteHandler: RouteHandler<
  typeof getApiV2TranslationKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TranslationKeysRouteHandler: RouteHandler<
  typeof postApiV2TranslationKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TranslationKeysIDRouteHandler: RouteHandler<
  typeof getApiV2TranslationKeysIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TranslationKeysIDRouteHandler: RouteHandler<
  typeof putApiV2TranslationKeysIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TranslationRequestsRouteHandler: RouteHandler<
  typeof getApiV2TranslationRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TranslationRequestsRouteHandler: RouteHandler<
  typeof postApiV2TranslationRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TranslationRequestsIdRouteHandler: RouteHandler<
  typeof getApiV2TranslationRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TranslationRequestsIdRouteHandler: RouteHandler<
  typeof putApiV2TranslationRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TranslationRequestsIdStringsRouteHandler: RouteHandler<
  typeof putApiV2TranslationRequestsIdStringsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TranslationSetAttributesBatchRouteHandler: RouteHandler<
  typeof putApiV2TranslationSetAttributesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TranslationSetAttributesIDRouteHandler: RouteHandler<
  typeof deleteApiV2TranslationSetAttributesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TranslationSetAttributesIDRouteHandler: RouteHandler<
  typeof putApiV2TranslationSetAttributesIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TranslationSetsRouteHandler: RouteHandler<
  typeof getApiV2TranslationSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TranslationSetsIDRouteHandler: RouteHandler<
  typeof getApiV2TranslationSetsIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TranslationSetsIDRouteHandler: RouteHandler<
  typeof putApiV2TranslationSetsIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TranslationSetsIDAttributesRouteHandler: RouteHandler<
  typeof getApiV2TranslationSetsIDAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TranslationSetsIDAttributesRouteHandler: RouteHandler<
  typeof postApiV2TranslationSetsIDAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TranslationSetsIDAttributesBatchRouteHandler: RouteHandler<
  typeof postApiV2TranslationSetsIDAttributesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TranslationSetsIDSourceStringsRouteHandler: RouteHandler<
  typeof getApiV2TranslationSetsIDSourceStringsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TranslationSetsIDStatisticsRouteHandler: RouteHandler<
  typeof getApiV2TranslationSetsIDStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TranslationSetsIDStringsRouteHandler: RouteHandler<
  typeof getApiV2TranslationSetsIDStringsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TranslationSetsIDStringsRouteHandler: RouteHandler<
  typeof putApiV2TranslationSetsIDStringsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UpdateGroupClientRelationshipsRouteHandler: RouteHandler<
  typeof getApiV2UpdateGroupClientRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UpdateGroupClientRelationshipsRouteHandler: RouteHandler<
  typeof postApiV2UpdateGroupClientRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UpdateGroupClientRelationshipsRouteHandler: RouteHandler<
  typeof putApiV2UpdateGroupClientRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UpdateGroupClientRelationshipsRelationshipIDRouteHandler: RouteHandler<
  typeof getApiV2UpdateGroupClientRelationshipsRelationshipIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UpdateGroupClientRelationshipsRelationshipIDRouteHandler: RouteHandler<
  typeof putApiV2UpdateGroupClientRelationshipsRelationshipIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UpdateGroupSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV2UpdateGroupSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UpdateGroupSubscriptionsRouteHandler: RouteHandler<
  typeof postApiV2UpdateGroupSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UpdateGroupSubscriptionsBatchRouteHandler: RouteHandler<
  typeof postApiV2UpdateGroupSubscriptionsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UpdateGroupSubscriptionsBatchRouteHandler: RouteHandler<
  typeof putApiV2UpdateGroupSubscriptionsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRouteHandler: RouteHandler<
  typeof deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRouteHandler: RouteHandler<
  typeof getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRouteHandler: RouteHandler<
  typeof putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UpdateGroupsRouteHandler: RouteHandler<
  typeof getApiV2UpdateGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UpdateGroupsRouteHandler: RouteHandler<
  typeof postApiV2UpdateGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UpdateGroupsIDRouteHandler: RouteHandler<
  typeof deleteApiV2UpdateGroupsIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UpdateGroupsIDRouteHandler: RouteHandler<
  typeof getApiV2UpdateGroupsIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UpdateGroupsIDRouteHandler: RouteHandler<
  typeof putApiV2UpdateGroupsIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UpdateGroupsIDBundlesRouteHandler: RouteHandler<
  typeof getApiV2UpdateGroupsIDBundlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UpdateGroupsIdUsersUserIDRouteHandler: RouteHandler<
  typeof deleteApiV2UpdateGroupsIdUsersUserIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UpdateGroupsIdUsersUserIDRouteHandler: RouteHandler<
  typeof postApiV2UpdateGroupsIdUsersUserIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UpdateSystemRouteHandler: RouteHandler<
  typeof getApiV2UpdateSystemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UserContentDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2UserContentDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UserContentDefinitionsRouteHandler: RouteHandler<
  typeof postApiV2UserContentDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UserContentDefinitionsUserContentDefinitionIDRouteHandler: RouteHandler<
  typeof deleteApiV2UserContentDefinitionsUserContentDefinitionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UserContentDefinitionsUserContentDefinitionIDRouteHandler: RouteHandler<
  typeof getApiV2UserContentDefinitionsUserContentDefinitionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersRouteHandler: RouteHandler<typeof getApiV2UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersRouteHandler: RouteHandler<typeof postApiV2UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersCurrentRouteHandler: RouteHandler<
  typeof getApiV2UsersCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersCurrentRouteHandler: RouteHandler<
  typeof putApiV2UsersCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersCurrentPermissionsRouteHandler: RouteHandler<
  typeof getApiV2UsersCurrentPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersCurrentRolesRouteHandler: RouteHandler<
  typeof getApiV2UsersCurrentRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersIdRouteHandler: RouteHandler<typeof deleteApiV2UsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersIdRouteHandler: RouteHandler<typeof getApiV2UsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersIdRouteHandler: RouteHandler<typeof putApiV2UsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersIdPermissionsRouteHandler: RouteHandler<
  typeof getApiV2UsersIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersIdRolesRouteHandler: RouteHandler<
  typeof getApiV2UsersIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersIdRolesRouteHandler: RouteHandler<
  typeof putApiV2UsersIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2VoucherHistoryRouteHandler: RouteHandler<
  typeof getApiV2VoucherHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2VouchersRouteHandler: RouteHandler<typeof getApiV2VouchersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2VouchersRouteHandler: RouteHandler<typeof postApiV2VouchersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV2VouchersVoucherCodeRouteHandler: RouteHandler<
  typeof deleteApiV2VouchersVoucherCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2VouchersVoucherCodeRouteHandler: RouteHandler<
  typeof getApiV2VouchersVoucherCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2VouchersVoucherCodeRouteHandler: RouteHandler<
  typeof putApiV2VouchersVoucherCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2VouchersVoucherCodeVoucherHistoryRouteHandler: RouteHandler<
  typeof getApiV2VouchersVoucherCodeVoucherHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ActivitiesRouteHandler: RouteHandler<typeof getApiV2ActivitiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2ActivitiesRouteHandler: RouteHandler<
  typeof postApiV2ActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ActivitiesActivityIDRouteHandler: RouteHandler<
  typeof deleteApiV2ActivitiesActivityIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ActivitiesActivityIDRouteHandler: RouteHandler<
  typeof getApiV2ActivitiesActivityIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ActivitiesActivityIDRouteHandler: RouteHandler<
  typeof putApiV2ActivitiesActivityIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ActivityRunsRouteHandler: RouteHandler<
  typeof getApiV2ActivityRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ActivityRunsActivityRunIDRouteHandler: RouteHandler<
  typeof getApiV2ActivityRunsActivityRunIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ActivityRunsActivityRunIDRouteHandler: RouteHandler<
  typeof putApiV2ActivityRunsActivityRunIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ActivityRunsActivityRunIDStatusRouteHandler: RouteHandler<
  typeof getApiV2ActivityRunsActivityRunIDStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ActivityRunsActivityRunIDStatusRouteHandler: RouteHandler<
  typeof putApiV2ActivityRunsActivityRunIDStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AgentsRouteHandler: RouteHandler<typeof getApiV2AgentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AgentsRouteHandler: RouteHandler<typeof postApiV2AgentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AgentsCurrentRouteHandler: RouteHandler<
  typeof getApiV2AgentsCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AgentsCurrentActivityRunRouteHandler: RouteHandler<
  typeof getApiV2AgentsCurrentActivityRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AgentsAgentIDRouteHandler: RouteHandler<
  typeof deleteApiV2AgentsAgentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AgentsAgentIDRouteHandler: RouteHandler<
  typeof getApiV2AgentsAgentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AgentsAgentIDRouteHandler: RouteHandler<
  typeof putApiV2AgentsAgentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AgentsAgentIDActivityRunRouteHandler: RouteHandler<
  typeof getApiV2AgentsAgentIDActivityRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AgentsAgentIDActivityRunRouteHandler: RouteHandler<
  typeof putApiV2AgentsAgentIDActivityRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AgentsAgentIDStatusRouteHandler: RouteHandler<
  typeof putApiV2AgentsAgentIDStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2JobRunsRouteHandler: RouteHandler<typeof getApiV2JobRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2JobRunsRouteHandler: RouteHandler<typeof postApiV2JobRunsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV2JobRunsJobRunIDRouteHandler: RouteHandler<
  typeof deleteApiV2JobRunsJobRunIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2JobRunsJobRunIDRouteHandler: RouteHandler<
  typeof getApiV2JobRunsJobRunIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2JobRunsJobRunIDRouteHandler: RouteHandler<
  typeof putApiV2JobRunsJobRunIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2JobsRouteHandler: RouteHandler<typeof getApiV2JobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2JobsRouteHandler: RouteHandler<typeof postApiV2JobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2JobsJobIDRouteHandler: RouteHandler<
  typeof deleteApiV2JobsJobIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2JobsJobIDRouteHandler: RouteHandler<typeof getApiV2JobsJobIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV2JobsJobIDRouteHandler: RouteHandler<typeof putApiV2JobsJobIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2StepsRouteHandler: RouteHandler<typeof getApiV2StepsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2StepsRouteHandler: RouteHandler<typeof postApiV2StepsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2StepsStepIDRouteHandler: RouteHandler<
  typeof getApiV2StepsStepIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2StepsStepIDRouteHandler: RouteHandler<
  typeof putApiV2StepsStepIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
