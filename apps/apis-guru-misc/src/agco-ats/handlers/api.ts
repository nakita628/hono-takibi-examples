import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV2AftermarketServicesCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AftermarketServicesECUsSerialNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AftermarketServicesEnginesSerialNumberProductionDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AftermarketServicesHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AftermarketServicesUserStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AftermarketServicesUserStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AuthenticatedUsersUserIDTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthenticationIsAliveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthenticationRequestPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthenticationResetPaswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCategoriesUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthorizationCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AuthorizationCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthorizationCategoriesIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationCategoriesIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCodeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationCodeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthorizationCodeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCodeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AuthorizationCodeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthorizationCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AuthorizationCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCodesIdContactInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCodesIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationContactInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationContactInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BundlesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BundlesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BundlesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClientsClientIDCachedFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClientsClientIDPackageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ClientsClientIDPackageReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ClientsClientIDPackageReportsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClientsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ClientsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClientsIDAvailableUpdateGroupSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClientsIDUpdateGroupSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentDefinitionAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentDefinitionsContentDefinitionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentDefinitionsContentDefinitionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentDefinitionsContentDefinitionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentDefinitionsContentDefinitionIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentDefinitionsContentDefinitionIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentDefinitionsContentDefinitionIDAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentReleasesContentReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentReleasesContentReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentReleasesContentReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentSubmissionAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentSubmissionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentSubmissionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentSubmissionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentSubmissionsContentSubmissionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionsContentSubmissionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentSubmissionsContentSubmissionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionsContentSubmissionIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentSubmissionsContentSubmissionIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentSubmissionsContentSubmissionIDAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionsContentSubmissionIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DealerByCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DealersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DealersDealerCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FilesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FilesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2FilesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FilesIDFileContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2FilesIDFileContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GlobalImageCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GlobalImageCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GlobalImageCategoriesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GlobalImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GlobalImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GlobalImagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GlobalImagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GlobalImagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GlobalImagesIDImageContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GlobalImagesIDImageContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LanguagesLocaleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LanguagesLocaleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LanguagesLocaleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LicenseActivationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LicenseActivationsRegisterEDTLiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LicenseActivationsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LicenseActivationsIDConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LicensesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2NotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PackageTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PackageTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PackageTypesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PackageTypesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2PackageTypesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PackageTypesIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PackageTypesIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PackageTypetoBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PackageTypetoBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PackageTypetoBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2PackageTypetoBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PackagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PackagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2PackagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2PermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PriorityPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PriorityPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PriorityPackagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PriorityPackagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReleasesReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ReleasesReleaseIdBundleBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ReleasesReleaseIdBundleBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ReleasesReleaseId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingBundleStatusSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingBundlesInUpdateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingClientInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingCurrentPackagesInUpdateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingGetClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingGetSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingPackageStatusSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingRegisteredClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingUpdateGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingUpdateMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RolesIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RolesIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StringDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StringDefinitionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StringDefinitionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StringDefinitionsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StringTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StringTranslationsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StringTranslationsStringIdLanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StringTranslationsStringIdLanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TranslationKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationKeysIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationKeysIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TranslationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationRequestsIdStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationSetAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TranslationSetAttributesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationSetAttributesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationSetsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TranslationSetsIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TranslationSetsIDAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsIDSourceStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsIDStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TranslationSetsIDStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TranslationSetsIDStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupClientRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UpdateGroupClientRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UpdateGroupClientRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupClientRelationshipsRelationshipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UpdateGroupClientRelationshipsRelationshipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UpdateGroupSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UpdateGroupSubscriptionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UpdateGroupSubscriptionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UpdateGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UpdateGroupsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UpdateGroupsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupsIDBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UpdateGroupsIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UpdateGroupsIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserContentDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UserContentDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UserContentDefinitionsUserContentDefinitionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserContentDefinitionsUserContentDefinitionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersCurrentPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersCurrentRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VoucherHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VouchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2VouchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2VouchersVoucherCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VouchersVoucherCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2VouchersVoucherCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VouchersVoucherCodeVoucherHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ActivitiesActivityIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivitiesActivityIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ActivitiesActivityIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivityRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivityRunsActivityRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ActivityRunsActivityRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivityRunsActivityRunIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ActivityRunsActivityRunIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentsCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentsCurrentActivityRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AgentsAgentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentsAgentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AgentsAgentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentsAgentIDActivityRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AgentsAgentIDActivityRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AgentsAgentIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2JobRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2JobRunsJobRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobRunsJobRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2JobRunsJobRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2JobsJobIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobsJobIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2JobsJobIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StepsStepIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StepsStepIDRoute, (c) => {
    throw new Error('Not implemented')
  })
