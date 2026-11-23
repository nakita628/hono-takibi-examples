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
} from './routes'
import {
  deleteApiV2ActivitiesActivityIDRouteHandler,
  deleteApiV2AgentsAgentIDRouteHandler,
  deleteApiV2AuthorizationCategoriesIdRouteHandler,
  deleteApiV2AuthorizationCategoriesIdUsersUserIDRouteHandler,
  deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRouteHandler,
  deleteApiV2AuthorizationCodeDefinitionsIdRouteHandler,
  deleteApiV2AuthorizationCodesIdRouteHandler,
  deleteApiV2BundlesIDRouteHandler,
  deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRouteHandler,
  deleteApiV2ContentDefinitionsContentDefinitionIDRouteHandler,
  deleteApiV2ContentReleasesContentReleaseIdRouteHandler,
  deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRouteHandler,
  deleteApiV2ContentSubmissionsContentSubmissionIDRouteHandler,
  deleteApiV2ContentSubmissionTypesIdRouteHandler,
  deleteApiV2FilesIDRouteHandler,
  deleteApiV2GlobalImagesIDRouteHandler,
  deleteApiV2JobRunsJobRunIDRouteHandler,
  deleteApiV2JobsJobIDRouteHandler,
  deleteApiV2LanguagesLocaleIDRouteHandler,
  deleteApiV2PackagesIDRouteHandler,
  deleteApiV2PackageTypesIDRouteHandler,
  deleteApiV2PackageTypesIdUsersUserIDRouteHandler,
  deleteApiV2PackageTypetoBundlesRouteHandler,
  deleteApiV2PermissionsIdRouteHandler,
  deleteApiV2PriorityPackagesIDRouteHandler,
  deleteApiV2ReleasesReleaseIdBundleBundleIdRouteHandler,
  deleteApiV2RolesIdRouteHandler,
  deleteApiV2TranslationSetAttributesIDRouteHandler,
  deleteApiV2UpdateGroupsIDRouteHandler,
  deleteApiV2UpdateGroupsIdUsersUserIDRouteHandler,
  deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRouteHandler,
  deleteApiV2UserContentDefinitionsUserContentDefinitionIDRouteHandler,
  deleteApiV2UsersIdRouteHandler,
  deleteApiV2VouchersVoucherCodeRouteHandler,
  getApiV2ActivitiesActivityIDRouteHandler,
  getApiV2ActivitiesRouteHandler,
  getApiV2ActivityRunsActivityRunIDRouteHandler,
  getApiV2ActivityRunsActivityRunIDStatusRouteHandler,
  getApiV2ActivityRunsRouteHandler,
  getApiV2AftermarketServicesCertificatesRouteHandler,
  getApiV2AftermarketServicesEnginesSerialNumberIQACodesRouteHandler,
  getApiV2AftermarketServicesEnginesSerialNumberProductionDataRouteHandler,
  getApiV2AftermarketServicesHelloRouteHandler,
  getApiV2AftermarketServicesUserStatusesRouteHandler,
  getApiV2AgentsAgentIDActivityRunRouteHandler,
  getApiV2AgentsAgentIDRouteHandler,
  getApiV2AgentsCurrentActivityRunRouteHandler,
  getApiV2AgentsCurrentRouteHandler,
  getApiV2AgentsRouteHandler,
  getApiV2AuthenticationIsAliveRouteHandler,
  getApiV2AuthorizationCategoriesRouteHandler,
  getApiV2AuthorizationCategoriesUsersRouteHandler,
  getApiV2AuthorizationCodeDefinitionsIdRouteHandler,
  getApiV2AuthorizationCodeDefinitionsRouteHandler,
  getApiV2AuthorizationCodesIdContactInformationRouteHandler,
  getApiV2AuthorizationCodesIdRouteHandler,
  getApiV2AuthorizationCodesIdValidateRouteHandler,
  getApiV2AuthorizationCodesRouteHandler,
  getApiV2AuthorizationContactInformationRouteHandler,
  getApiV2BrandsRouteHandler,
  getApiV2BundlesIDRouteHandler,
  getApiV2BundlesRouteHandler,
  getApiV2ClientsClientIDCachedFilesRouteHandler,
  getApiV2ClientsClientIDPackageReportsRouteHandler,
  getApiV2ClientsIDAvailableUpdateGroupSubscriptionsRouteHandler,
  getApiV2ClientsIDRouteHandler,
  getApiV2ClientsIDUpdateGroupSubscriptionsRouteHandler,
  getApiV2ClientsRouteHandler,
  getApiV2ContentDefinitionsContentDefinitionIDAttributesRouteHandler,
  getApiV2ContentDefinitionsContentDefinitionIDRouteHandler,
  getApiV2ContentDefinitionsRouteHandler,
  getApiV2ContentReleasesContentReleaseIdRouteHandler,
  getApiV2ContentReleasesRouteHandler,
  getApiV2ContentSubmissionsContentSubmissionIDAttributesRouteHandler,
  getApiV2ContentSubmissionsContentSubmissionIDRouteHandler,
  getApiV2ContentSubmissionsContentSubmissionIDStatusRouteHandler,
  getApiV2ContentSubmissionsRouteHandler,
  getApiV2ContentSubmissionTypesIdRouteHandler,
  getApiV2ContentSubmissionTypesRouteHandler,
  getApiV2DealerByCountryRouteHandler,
  getApiV2DealersDealerCodeRouteHandler,
  getApiV2DealersRouteHandler,
  getApiV2FilesIDFileContentsRouteHandler,
  getApiV2FilesIDRouteHandler,
  getApiV2FilesRouteHandler,
  getApiV2GlobalImageCategoriesIDRouteHandler,
  getApiV2GlobalImageCategoriesRouteHandler,
  getApiV2GlobalImagesIDImageContentsRouteHandler,
  getApiV2GlobalImagesIDRouteHandler,
  getApiV2GlobalImagesRouteHandler,
  getApiV2JobRunsJobRunIDRouteHandler,
  getApiV2JobRunsRouteHandler,
  getApiV2JobsJobIDRouteHandler,
  getApiV2JobsRouteHandler,
  getApiV2LanguagesLocaleIDRouteHandler,
  getApiV2LanguagesRouteHandler,
  getApiV2LicensesIDRouteHandler,
  getApiV2LicensesRouteHandler,
  getApiV2LogsIDRouteHandler,
  getApiV2LogsRouteHandler,
  getApiV2PackagesIDRouteHandler,
  getApiV2PackagesRouteHandler,
  getApiV2PackageTypesIDRouteHandler,
  getApiV2PackageTypesRouteHandler,
  getApiV2PackageTypetoBundlesRouteHandler,
  getApiV2PermissionsIdRouteHandler,
  getApiV2PermissionsRouteHandler,
  getApiV2PriorityPackagesIDRouteHandler,
  getApiV2PriorityPackagesRouteHandler,
  getApiV2ReleasesReleaseIdRouteHandler,
  getApiV2ReleasesRouteHandler,
  getApiV2ReportingBundlesInUpdateGroupRouteHandler,
  getApiV2ReportingBundleStatusSummaryRouteHandler,
  getApiV2ReportingClientInfoRouteHandler,
  getApiV2ReportingCurrentPackagesInUpdateGroupRouteHandler,
  getApiV2ReportingGetClientRouteHandler,
  getApiV2ReportingGetSubscriptionsRouteHandler,
  getApiV2ReportingPackageStatusSummaryRouteHandler,
  getApiV2ReportingRegisteredClientsRouteHandler,
  getApiV2ReportingUpdateGroupsRouteHandler,
  getApiV2ReportingUpdateMetricsRouteHandler,
  getApiV2RolesIdPermissionsRouteHandler,
  getApiV2RolesIdRouteHandler,
  getApiV2RolesIdUsersRouteHandler,
  getApiV2RolesRouteHandler,
  getApiV2StepsRouteHandler,
  getApiV2StepsStepIDRouteHandler,
  getApiV2StringDefinitionsIDRouteHandler,
  getApiV2StringDefinitionsRouteHandler,
  getApiV2StringTranslationsRouteHandler,
  getApiV2StringTranslationsStringIdLanguageIdRouteHandler,
  getApiV2TranslationKeysIDRouteHandler,
  getApiV2TranslationKeysRouteHandler,
  getApiV2TranslationRequestsIdRouteHandler,
  getApiV2TranslationRequestsRouteHandler,
  getApiV2TranslationSetsIDAttributesRouteHandler,
  getApiV2TranslationSetsIDRouteHandler,
  getApiV2TranslationSetsIDSourceStringsRouteHandler,
  getApiV2TranslationSetsIDStatisticsRouteHandler,
  getApiV2TranslationSetsIDStringsRouteHandler,
  getApiV2TranslationSetsRouteHandler,
  getApiV2UpdateGroupClientRelationshipsRelationshipIDRouteHandler,
  getApiV2UpdateGroupClientRelationshipsRouteHandler,
  getApiV2UpdateGroupsIDBundlesRouteHandler,
  getApiV2UpdateGroupsIDRouteHandler,
  getApiV2UpdateGroupsRouteHandler,
  getApiV2UpdateGroupSubscriptionsRouteHandler,
  getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRouteHandler,
  getApiV2UpdateSystemRouteHandler,
  getApiV2UserContentDefinitionsRouteHandler,
  getApiV2UserContentDefinitionsUserContentDefinitionIDRouteHandler,
  getApiV2UsersCurrentPermissionsRouteHandler,
  getApiV2UsersCurrentRolesRouteHandler,
  getApiV2UsersCurrentRouteHandler,
  getApiV2UsersIdPermissionsRouteHandler,
  getApiV2UsersIdRolesRouteHandler,
  getApiV2UsersIdRouteHandler,
  getApiV2UsersRouteHandler,
  getApiV2VoucherHistoryRouteHandler,
  getApiV2VouchersRouteHandler,
  getApiV2VouchersVoucherCodeRouteHandler,
  getApiV2VouchersVoucherCodeVoucherHistoryRouteHandler,
  postApiV2ActivitiesRouteHandler,
  postApiV2AgentsRouteHandler,
  postApiV2AuthenticationRequestPasswordResetRouteHandler,
  postApiV2AuthenticationResetPaswordRouteHandler,
  postApiV2AuthenticationRouteHandler,
  postApiV2AuthorizationCategoriesIdUsersUserIDRouteHandler,
  postApiV2AuthorizationCategoriesRouteHandler,
  postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRouteHandler,
  postApiV2AuthorizationCodeDefinitionsRouteHandler,
  postApiV2AuthorizationCodesRouteHandler,
  postApiV2AuthorizationContactInformationRouteHandler,
  postApiV2BundlesRouteHandler,
  postApiV2ContentDefinitionsContentDefinitionIDAttributesBatchRouteHandler,
  postApiV2ContentDefinitionsContentDefinitionIDAttributesRouteHandler,
  postApiV2ContentDefinitionsRouteHandler,
  postApiV2ContentReleasesRouteHandler,
  postApiV2ContentSubmissionsContentSubmissionIDAttributesBatchRouteHandler,
  postApiV2ContentSubmissionsContentSubmissionIDAttributesRouteHandler,
  postApiV2ContentSubmissionsRouteHandler,
  postApiV2ContentSubmissionTypesRouteHandler,
  postApiV2FilesRouteHandler,
  postApiV2GlobalImageCategoriesRouteHandler,
  postApiV2GlobalImagesRouteHandler,
  postApiV2JobRunsRouteHandler,
  postApiV2JobsRouteHandler,
  postApiV2LanguagesRouteHandler,
  postApiV2LicenseActivationsRegisterEDTLiteRouteHandler,
  postApiV2LicenseActivationsRouteHandler,
  postApiV2LogsRouteHandler,
  postApiV2NotificationsRouteHandler,
  postApiV2PackagesRouteHandler,
  postApiV2PackageTypesIdUsersUserIDRouteHandler,
  postApiV2PackageTypesRouteHandler,
  postApiV2PackageTypetoBundlesRouteHandler,
  postApiV2PermissionsRouteHandler,
  postApiV2PriorityPackagesRouteHandler,
  postApiV2ReleasesReleaseIdBundleBundleIdRouteHandler,
  postApiV2ReleasesRouteHandler,
  postApiV2RolesRouteHandler,
  postApiV2StepsRouteHandler,
  postApiV2StringDefinitionsBatchRouteHandler,
  postApiV2TranslationKeysRouteHandler,
  postApiV2TranslationRequestsRouteHandler,
  postApiV2TranslationSetsIDAttributesBatchRouteHandler,
  postApiV2TranslationSetsIDAttributesRouteHandler,
  postApiV2UpdateGroupClientRelationshipsRouteHandler,
  postApiV2UpdateGroupsIdUsersUserIDRouteHandler,
  postApiV2UpdateGroupsRouteHandler,
  postApiV2UpdateGroupSubscriptionsBatchRouteHandler,
  postApiV2UpdateGroupSubscriptionsRouteHandler,
  postApiV2UserContentDefinitionsRouteHandler,
  postApiV2UsersRouteHandler,
  postApiV2VouchersRouteHandler,
  putApiV2ActivitiesActivityIDRouteHandler,
  putApiV2ActivityRunsActivityRunIDRouteHandler,
  putApiV2ActivityRunsActivityRunIDStatusRouteHandler,
  putApiV2AftermarketServicesECUsSerialNumberRouteHandler,
  putApiV2AftermarketServicesEnginesSerialNumberIQACodesRouteHandler,
  putApiV2AftermarketServicesUserStatusesRouteHandler,
  putApiV2AgentsAgentIDActivityRunRouteHandler,
  putApiV2AgentsAgentIDRouteHandler,
  putApiV2AgentsAgentIDStatusRouteHandler,
  putApiV2AuthenticatedUsersUserIDTokensRouteHandler,
  putApiV2AuthorizationCategoriesIdRouteHandler,
  putApiV2AuthorizationCodeDefinitionsIdRouteHandler,
  putApiV2AuthorizationCodesIdRouteHandler,
  putApiV2BundlesIDRouteHandler,
  putApiV2ClientsClientIDPackageReportsBatchRouteHandler,
  putApiV2ClientsClientIDPackageReportsRouteHandler,
  putApiV2ClientsIDRouteHandler,
  putApiV2ContentDefinitionAttributesBatchRouteHandler,
  putApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRouteHandler,
  putApiV2ContentDefinitionsContentDefinitionIDRouteHandler,
  putApiV2ContentReleasesContentReleaseIdRouteHandler,
  putApiV2ContentSubmissionAttributesBatchRouteHandler,
  putApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRouteHandler,
  putApiV2ContentSubmissionsContentSubmissionIDRouteHandler,
  putApiV2ContentSubmissionTypesIdRouteHandler,
  putApiV2FilesIDFileContentsRouteHandler,
  putApiV2FilesIDRouteHandler,
  putApiV2GlobalImagesIDImageContentsRouteHandler,
  putApiV2GlobalImagesIDRouteHandler,
  putApiV2JobRunsJobRunIDRouteHandler,
  putApiV2JobsJobIDRouteHandler,
  putApiV2LanguagesLocaleIDRouteHandler,
  putApiV2LicenseActivationsIDConfirmRouteHandler,
  putApiV2LicenseActivationsIDRouteHandler,
  putApiV2PackagesIDRouteHandler,
  putApiV2PackageTypesIDRouteHandler,
  putApiV2PackageTypetoBundlesRouteHandler,
  putApiV2PermissionsIdRouteHandler,
  putApiV2ReleasesReleaseId2RouteHandler,
  putApiV2RolesIdPermissionsRouteHandler,
  putApiV2RolesIdRouteHandler,
  putApiV2RolesIdUsersRouteHandler,
  putApiV2StepsStepIDRouteHandler,
  putApiV2StringDefinitionsBatchRouteHandler,
  putApiV2StringTranslationsBatchRouteHandler,
  putApiV2StringTranslationsStringIdLanguageIdRouteHandler,
  putApiV2TranslationKeysIDRouteHandler,
  putApiV2TranslationRequestsIdRouteHandler,
  putApiV2TranslationRequestsIdStringsRouteHandler,
  putApiV2TranslationSetAttributesBatchRouteHandler,
  putApiV2TranslationSetAttributesIDRouteHandler,
  putApiV2TranslationSetsIDRouteHandler,
  putApiV2TranslationSetsIDStringsRouteHandler,
  putApiV2UpdateGroupClientRelationshipsRelationshipIDRouteHandler,
  putApiV2UpdateGroupClientRelationshipsRouteHandler,
  putApiV2UpdateGroupsIDRouteHandler,
  putApiV2UpdateGroupSubscriptionsBatchRouteHandler,
  putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRouteHandler,
  putApiV2UsersCurrentRouteHandler,
  putApiV2UsersIdRolesRouteHandler,
  putApiV2UsersIdRouteHandler,
  putApiV2VouchersVoucherCodeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getApiV2AftermarketServicesCertificatesRoute,
    getApiV2AftermarketServicesCertificatesRouteHandler,
  )
  .openapi(
    putApiV2AftermarketServicesECUsSerialNumberRoute,
    putApiV2AftermarketServicesECUsSerialNumberRouteHandler,
  )
  .openapi(
    getApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute,
    getApiV2AftermarketServicesEnginesSerialNumberIQACodesRouteHandler,
  )
  .openapi(
    putApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute,
    putApiV2AftermarketServicesEnginesSerialNumberIQACodesRouteHandler,
  )
  .openapi(
    getApiV2AftermarketServicesEnginesSerialNumberProductionDataRoute,
    getApiV2AftermarketServicesEnginesSerialNumberProductionDataRouteHandler,
  )
  .openapi(getApiV2AftermarketServicesHelloRoute, getApiV2AftermarketServicesHelloRouteHandler)
  .openapi(
    getApiV2AftermarketServicesUserStatusesRoute,
    getApiV2AftermarketServicesUserStatusesRouteHandler,
  )
  .openapi(
    putApiV2AftermarketServicesUserStatusesRoute,
    putApiV2AftermarketServicesUserStatusesRouteHandler,
  )
  .openapi(
    putApiV2AuthenticatedUsersUserIDTokensRoute,
    putApiV2AuthenticatedUsersUserIDTokensRouteHandler,
  )
  .openapi(postApiV2AuthenticationRoute, postApiV2AuthenticationRouteHandler)
  .openapi(getApiV2AuthenticationIsAliveRoute, getApiV2AuthenticationIsAliveRouteHandler)
  .openapi(
    postApiV2AuthenticationRequestPasswordResetRoute,
    postApiV2AuthenticationRequestPasswordResetRouteHandler,
  )
  .openapi(
    postApiV2AuthenticationResetPaswordRoute,
    postApiV2AuthenticationResetPaswordRouteHandler,
  )
  .openapi(getApiV2AuthorizationCategoriesRoute, getApiV2AuthorizationCategoriesRouteHandler)
  .openapi(postApiV2AuthorizationCategoriesRoute, postApiV2AuthorizationCategoriesRouteHandler)
  .openapi(
    getApiV2AuthorizationCategoriesUsersRoute,
    getApiV2AuthorizationCategoriesUsersRouteHandler,
  )
  .openapi(
    deleteApiV2AuthorizationCategoriesIdRoute,
    deleteApiV2AuthorizationCategoriesIdRouteHandler,
  )
  .openapi(putApiV2AuthorizationCategoriesIdRoute, putApiV2AuthorizationCategoriesIdRouteHandler)
  .openapi(
    deleteApiV2AuthorizationCategoriesIdUsersUserIDRoute,
    deleteApiV2AuthorizationCategoriesIdUsersUserIDRouteHandler,
  )
  .openapi(
    postApiV2AuthorizationCategoriesIdUsersUserIDRoute,
    postApiV2AuthorizationCategoriesIdUsersUserIDRouteHandler,
  )
  .openapi(
    getApiV2AuthorizationCodeDefinitionsRoute,
    getApiV2AuthorizationCodeDefinitionsRouteHandler,
  )
  .openapi(
    postApiV2AuthorizationCodeDefinitionsRoute,
    postApiV2AuthorizationCodeDefinitionsRouteHandler,
  )
  .openapi(
    deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute,
    deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRouteHandler,
  )
  .openapi(
    postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute,
    postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRouteHandler,
  )
  .openapi(
    deleteApiV2AuthorizationCodeDefinitionsIdRoute,
    deleteApiV2AuthorizationCodeDefinitionsIdRouteHandler,
  )
  .openapi(
    getApiV2AuthorizationCodeDefinitionsIdRoute,
    getApiV2AuthorizationCodeDefinitionsIdRouteHandler,
  )
  .openapi(
    putApiV2AuthorizationCodeDefinitionsIdRoute,
    putApiV2AuthorizationCodeDefinitionsIdRouteHandler,
  )
  .openapi(getApiV2AuthorizationCodesRoute, getApiV2AuthorizationCodesRouteHandler)
  .openapi(postApiV2AuthorizationCodesRoute, postApiV2AuthorizationCodesRouteHandler)
  .openapi(deleteApiV2AuthorizationCodesIdRoute, deleteApiV2AuthorizationCodesIdRouteHandler)
  .openapi(getApiV2AuthorizationCodesIdRoute, getApiV2AuthorizationCodesIdRouteHandler)
  .openapi(putApiV2AuthorizationCodesIdRoute, putApiV2AuthorizationCodesIdRouteHandler)
  .openapi(
    getApiV2AuthorizationCodesIdContactInformationRoute,
    getApiV2AuthorizationCodesIdContactInformationRouteHandler,
  )
  .openapi(
    getApiV2AuthorizationCodesIdValidateRoute,
    getApiV2AuthorizationCodesIdValidateRouteHandler,
  )
  .openapi(
    getApiV2AuthorizationContactInformationRoute,
    getApiV2AuthorizationContactInformationRouteHandler,
  )
  .openapi(
    postApiV2AuthorizationContactInformationRoute,
    postApiV2AuthorizationContactInformationRouteHandler,
  )
  .openapi(getApiV2BrandsRoute, getApiV2BrandsRouteHandler)
  .openapi(getApiV2BundlesRoute, getApiV2BundlesRouteHandler)
  .openapi(postApiV2BundlesRoute, postApiV2BundlesRouteHandler)
  .openapi(deleteApiV2BundlesIDRoute, deleteApiV2BundlesIDRouteHandler)
  .openapi(getApiV2BundlesIDRoute, getApiV2BundlesIDRouteHandler)
  .openapi(putApiV2BundlesIDRoute, putApiV2BundlesIDRouteHandler)
  .openapi(getApiV2ClientsRoute, getApiV2ClientsRouteHandler)
  .openapi(getApiV2ClientsClientIDCachedFilesRoute, getApiV2ClientsClientIDCachedFilesRouteHandler)
  .openapi(
    getApiV2ClientsClientIDPackageReportsRoute,
    getApiV2ClientsClientIDPackageReportsRouteHandler,
  )
  .openapi(
    putApiV2ClientsClientIDPackageReportsRoute,
    putApiV2ClientsClientIDPackageReportsRouteHandler,
  )
  .openapi(
    putApiV2ClientsClientIDPackageReportsBatchRoute,
    putApiV2ClientsClientIDPackageReportsBatchRouteHandler,
  )
  .openapi(getApiV2ClientsIDRoute, getApiV2ClientsIDRouteHandler)
  .openapi(putApiV2ClientsIDRoute, putApiV2ClientsIDRouteHandler)
  .openapi(
    getApiV2ClientsIDAvailableUpdateGroupSubscriptionsRoute,
    getApiV2ClientsIDAvailableUpdateGroupSubscriptionsRouteHandler,
  )
  .openapi(
    getApiV2ClientsIDUpdateGroupSubscriptionsRoute,
    getApiV2ClientsIDUpdateGroupSubscriptionsRouteHandler,
  )
  .openapi(
    putApiV2ContentDefinitionAttributesBatchRoute,
    putApiV2ContentDefinitionAttributesBatchRouteHandler,
  )
  .openapi(
    deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute,
    deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRouteHandler,
  )
  .openapi(
    putApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute,
    putApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRouteHandler,
  )
  .openapi(getApiV2ContentDefinitionsRoute, getApiV2ContentDefinitionsRouteHandler)
  .openapi(postApiV2ContentDefinitionsRoute, postApiV2ContentDefinitionsRouteHandler)
  .openapi(
    deleteApiV2ContentDefinitionsContentDefinitionIDRoute,
    deleteApiV2ContentDefinitionsContentDefinitionIDRouteHandler,
  )
  .openapi(
    getApiV2ContentDefinitionsContentDefinitionIDRoute,
    getApiV2ContentDefinitionsContentDefinitionIDRouteHandler,
  )
  .openapi(
    putApiV2ContentDefinitionsContentDefinitionIDRoute,
    putApiV2ContentDefinitionsContentDefinitionIDRouteHandler,
  )
  .openapi(
    getApiV2ContentDefinitionsContentDefinitionIDAttributesRoute,
    getApiV2ContentDefinitionsContentDefinitionIDAttributesRouteHandler,
  )
  .openapi(
    postApiV2ContentDefinitionsContentDefinitionIDAttributesRoute,
    postApiV2ContentDefinitionsContentDefinitionIDAttributesRouteHandler,
  )
  .openapi(
    postApiV2ContentDefinitionsContentDefinitionIDAttributesBatchRoute,
    postApiV2ContentDefinitionsContentDefinitionIDAttributesBatchRouteHandler,
  )
  .openapi(getApiV2ContentReleasesRoute, getApiV2ContentReleasesRouteHandler)
  .openapi(postApiV2ContentReleasesRoute, postApiV2ContentReleasesRouteHandler)
  .openapi(
    deleteApiV2ContentReleasesContentReleaseIdRoute,
    deleteApiV2ContentReleasesContentReleaseIdRouteHandler,
  )
  .openapi(
    getApiV2ContentReleasesContentReleaseIdRoute,
    getApiV2ContentReleasesContentReleaseIdRouteHandler,
  )
  .openapi(
    putApiV2ContentReleasesContentReleaseIdRoute,
    putApiV2ContentReleasesContentReleaseIdRouteHandler,
  )
  .openapi(
    putApiV2ContentSubmissionAttributesBatchRoute,
    putApiV2ContentSubmissionAttributesBatchRouteHandler,
  )
  .openapi(
    deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute,
    deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRouteHandler,
  )
  .openapi(
    putApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute,
    putApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRouteHandler,
  )
  .openapi(getApiV2ContentSubmissionTypesRoute, getApiV2ContentSubmissionTypesRouteHandler)
  .openapi(postApiV2ContentSubmissionTypesRoute, postApiV2ContentSubmissionTypesRouteHandler)
  .openapi(
    deleteApiV2ContentSubmissionTypesIdRoute,
    deleteApiV2ContentSubmissionTypesIdRouteHandler,
  )
  .openapi(getApiV2ContentSubmissionTypesIdRoute, getApiV2ContentSubmissionTypesIdRouteHandler)
  .openapi(putApiV2ContentSubmissionTypesIdRoute, putApiV2ContentSubmissionTypesIdRouteHandler)
  .openapi(getApiV2ContentSubmissionsRoute, getApiV2ContentSubmissionsRouteHandler)
  .openapi(postApiV2ContentSubmissionsRoute, postApiV2ContentSubmissionsRouteHandler)
  .openapi(
    deleteApiV2ContentSubmissionsContentSubmissionIDRoute,
    deleteApiV2ContentSubmissionsContentSubmissionIDRouteHandler,
  )
  .openapi(
    getApiV2ContentSubmissionsContentSubmissionIDRoute,
    getApiV2ContentSubmissionsContentSubmissionIDRouteHandler,
  )
  .openapi(
    putApiV2ContentSubmissionsContentSubmissionIDRoute,
    putApiV2ContentSubmissionsContentSubmissionIDRouteHandler,
  )
  .openapi(
    getApiV2ContentSubmissionsContentSubmissionIDAttributesRoute,
    getApiV2ContentSubmissionsContentSubmissionIDAttributesRouteHandler,
  )
  .openapi(
    postApiV2ContentSubmissionsContentSubmissionIDAttributesRoute,
    postApiV2ContentSubmissionsContentSubmissionIDAttributesRouteHandler,
  )
  .openapi(
    postApiV2ContentSubmissionsContentSubmissionIDAttributesBatchRoute,
    postApiV2ContentSubmissionsContentSubmissionIDAttributesBatchRouteHandler,
  )
  .openapi(
    getApiV2ContentSubmissionsContentSubmissionIDStatusRoute,
    getApiV2ContentSubmissionsContentSubmissionIDStatusRouteHandler,
  )
  .openapi(getApiV2DealerByCountryRoute, getApiV2DealerByCountryRouteHandler)
  .openapi(getApiV2DealersRoute, getApiV2DealersRouteHandler)
  .openapi(getApiV2DealersDealerCodeRoute, getApiV2DealersDealerCodeRouteHandler)
  .openapi(getApiV2FilesRoute, getApiV2FilesRouteHandler)
  .openapi(postApiV2FilesRoute, postApiV2FilesRouteHandler)
  .openapi(deleteApiV2FilesIDRoute, deleteApiV2FilesIDRouteHandler)
  .openapi(getApiV2FilesIDRoute, getApiV2FilesIDRouteHandler)
  .openapi(putApiV2FilesIDRoute, putApiV2FilesIDRouteHandler)
  .openapi(getApiV2FilesIDFileContentsRoute, getApiV2FilesIDFileContentsRouteHandler)
  .openapi(putApiV2FilesIDFileContentsRoute, putApiV2FilesIDFileContentsRouteHandler)
  .openapi(getApiV2GlobalImageCategoriesRoute, getApiV2GlobalImageCategoriesRouteHandler)
  .openapi(postApiV2GlobalImageCategoriesRoute, postApiV2GlobalImageCategoriesRouteHandler)
  .openapi(getApiV2GlobalImageCategoriesIDRoute, getApiV2GlobalImageCategoriesIDRouteHandler)
  .openapi(getApiV2GlobalImagesRoute, getApiV2GlobalImagesRouteHandler)
  .openapi(postApiV2GlobalImagesRoute, postApiV2GlobalImagesRouteHandler)
  .openapi(deleteApiV2GlobalImagesIDRoute, deleteApiV2GlobalImagesIDRouteHandler)
  .openapi(getApiV2GlobalImagesIDRoute, getApiV2GlobalImagesIDRouteHandler)
  .openapi(putApiV2GlobalImagesIDRoute, putApiV2GlobalImagesIDRouteHandler)
  .openapi(
    getApiV2GlobalImagesIDImageContentsRoute,
    getApiV2GlobalImagesIDImageContentsRouteHandler,
  )
  .openapi(
    putApiV2GlobalImagesIDImageContentsRoute,
    putApiV2GlobalImagesIDImageContentsRouteHandler,
  )
  .openapi(getApiV2LanguagesRoute, getApiV2LanguagesRouteHandler)
  .openapi(postApiV2LanguagesRoute, postApiV2LanguagesRouteHandler)
  .openapi(deleteApiV2LanguagesLocaleIDRoute, deleteApiV2LanguagesLocaleIDRouteHandler)
  .openapi(getApiV2LanguagesLocaleIDRoute, getApiV2LanguagesLocaleIDRouteHandler)
  .openapi(putApiV2LanguagesLocaleIDRoute, putApiV2LanguagesLocaleIDRouteHandler)
  .openapi(postApiV2LicenseActivationsRoute, postApiV2LicenseActivationsRouteHandler)
  .openapi(
    postApiV2LicenseActivationsRegisterEDTLiteRoute,
    postApiV2LicenseActivationsRegisterEDTLiteRouteHandler,
  )
  .openapi(putApiV2LicenseActivationsIDRoute, putApiV2LicenseActivationsIDRouteHandler)
  .openapi(
    putApiV2LicenseActivationsIDConfirmRoute,
    putApiV2LicenseActivationsIDConfirmRouteHandler,
  )
  .openapi(getApiV2LicensesRoute, getApiV2LicensesRouteHandler)
  .openapi(getApiV2LicensesIDRoute, getApiV2LicensesIDRouteHandler)
  .openapi(getApiV2LogsRoute, getApiV2LogsRouteHandler)
  .openapi(postApiV2LogsRoute, postApiV2LogsRouteHandler)
  .openapi(getApiV2LogsIDRoute, getApiV2LogsIDRouteHandler)
  .openapi(postApiV2NotificationsRoute, postApiV2NotificationsRouteHandler)
  .openapi(getApiV2PackageTypesRoute, getApiV2PackageTypesRouteHandler)
  .openapi(postApiV2PackageTypesRoute, postApiV2PackageTypesRouteHandler)
  .openapi(deleteApiV2PackageTypesIDRoute, deleteApiV2PackageTypesIDRouteHandler)
  .openapi(getApiV2PackageTypesIDRoute, getApiV2PackageTypesIDRouteHandler)
  .openapi(putApiV2PackageTypesIDRoute, putApiV2PackageTypesIDRouteHandler)
  .openapi(
    deleteApiV2PackageTypesIdUsersUserIDRoute,
    deleteApiV2PackageTypesIdUsersUserIDRouteHandler,
  )
  .openapi(postApiV2PackageTypesIdUsersUserIDRoute, postApiV2PackageTypesIdUsersUserIDRouteHandler)
  .openapi(deleteApiV2PackageTypetoBundlesRoute, deleteApiV2PackageTypetoBundlesRouteHandler)
  .openapi(getApiV2PackageTypetoBundlesRoute, getApiV2PackageTypetoBundlesRouteHandler)
  .openapi(postApiV2PackageTypetoBundlesRoute, postApiV2PackageTypetoBundlesRouteHandler)
  .openapi(putApiV2PackageTypetoBundlesRoute, putApiV2PackageTypetoBundlesRouteHandler)
  .openapi(getApiV2PackagesRoute, getApiV2PackagesRouteHandler)
  .openapi(postApiV2PackagesRoute, postApiV2PackagesRouteHandler)
  .openapi(deleteApiV2PackagesIDRoute, deleteApiV2PackagesIDRouteHandler)
  .openapi(getApiV2PackagesIDRoute, getApiV2PackagesIDRouteHandler)
  .openapi(putApiV2PackagesIDRoute, putApiV2PackagesIDRouteHandler)
  .openapi(getApiV2PermissionsRoute, getApiV2PermissionsRouteHandler)
  .openapi(postApiV2PermissionsRoute, postApiV2PermissionsRouteHandler)
  .openapi(deleteApiV2PermissionsIdRoute, deleteApiV2PermissionsIdRouteHandler)
  .openapi(getApiV2PermissionsIdRoute, getApiV2PermissionsIdRouteHandler)
  .openapi(putApiV2PermissionsIdRoute, putApiV2PermissionsIdRouteHandler)
  .openapi(getApiV2PriorityPackagesRoute, getApiV2PriorityPackagesRouteHandler)
  .openapi(postApiV2PriorityPackagesRoute, postApiV2PriorityPackagesRouteHandler)
  .openapi(deleteApiV2PriorityPackagesIDRoute, deleteApiV2PriorityPackagesIDRouteHandler)
  .openapi(getApiV2PriorityPackagesIDRoute, getApiV2PriorityPackagesIDRouteHandler)
  .openapi(getApiV2ReleasesRoute, getApiV2ReleasesRouteHandler)
  .openapi(postApiV2ReleasesRoute, postApiV2ReleasesRouteHandler)
  .openapi(getApiV2ReleasesReleaseIdRoute, getApiV2ReleasesReleaseIdRouteHandler)
  .openapi(
    deleteApiV2ReleasesReleaseIdBundleBundleIdRoute,
    deleteApiV2ReleasesReleaseIdBundleBundleIdRouteHandler,
  )
  .openapi(
    postApiV2ReleasesReleaseIdBundleBundleIdRoute,
    postApiV2ReleasesReleaseIdBundleBundleIdRouteHandler,
  )
  .openapi(putApiV2ReleasesReleaseId2Route, putApiV2ReleasesReleaseId2RouteHandler)
  .openapi(
    getApiV2ReportingBundleStatusSummaryRoute,
    getApiV2ReportingBundleStatusSummaryRouteHandler,
  )
  .openapi(
    getApiV2ReportingBundlesInUpdateGroupRoute,
    getApiV2ReportingBundlesInUpdateGroupRouteHandler,
  )
  .openapi(getApiV2ReportingClientInfoRoute, getApiV2ReportingClientInfoRouteHandler)
  .openapi(
    getApiV2ReportingCurrentPackagesInUpdateGroupRoute,
    getApiV2ReportingCurrentPackagesInUpdateGroupRouteHandler,
  )
  .openapi(getApiV2ReportingGetClientRoute, getApiV2ReportingGetClientRouteHandler)
  .openapi(getApiV2ReportingGetSubscriptionsRoute, getApiV2ReportingGetSubscriptionsRouteHandler)
  .openapi(
    getApiV2ReportingPackageStatusSummaryRoute,
    getApiV2ReportingPackageStatusSummaryRouteHandler,
  )
  .openapi(getApiV2ReportingRegisteredClientsRoute, getApiV2ReportingRegisteredClientsRouteHandler)
  .openapi(getApiV2ReportingUpdateGroupsRoute, getApiV2ReportingUpdateGroupsRouteHandler)
  .openapi(getApiV2ReportingUpdateMetricsRoute, getApiV2ReportingUpdateMetricsRouteHandler)
  .openapi(getApiV2RolesRoute, getApiV2RolesRouteHandler)
  .openapi(postApiV2RolesRoute, postApiV2RolesRouteHandler)
  .openapi(deleteApiV2RolesIdRoute, deleteApiV2RolesIdRouteHandler)
  .openapi(getApiV2RolesIdRoute, getApiV2RolesIdRouteHandler)
  .openapi(putApiV2RolesIdRoute, putApiV2RolesIdRouteHandler)
  .openapi(getApiV2RolesIdPermissionsRoute, getApiV2RolesIdPermissionsRouteHandler)
  .openapi(putApiV2RolesIdPermissionsRoute, putApiV2RolesIdPermissionsRouteHandler)
  .openapi(getApiV2RolesIdUsersRoute, getApiV2RolesIdUsersRouteHandler)
  .openapi(putApiV2RolesIdUsersRoute, putApiV2RolesIdUsersRouteHandler)
  .openapi(getApiV2StringDefinitionsRoute, getApiV2StringDefinitionsRouteHandler)
  .openapi(postApiV2StringDefinitionsBatchRoute, postApiV2StringDefinitionsBatchRouteHandler)
  .openapi(putApiV2StringDefinitionsBatchRoute, putApiV2StringDefinitionsBatchRouteHandler)
  .openapi(getApiV2StringDefinitionsIDRoute, getApiV2StringDefinitionsIDRouteHandler)
  .openapi(getApiV2StringTranslationsRoute, getApiV2StringTranslationsRouteHandler)
  .openapi(putApiV2StringTranslationsBatchRoute, putApiV2StringTranslationsBatchRouteHandler)
  .openapi(
    getApiV2StringTranslationsStringIdLanguageIdRoute,
    getApiV2StringTranslationsStringIdLanguageIdRouteHandler,
  )
  .openapi(
    putApiV2StringTranslationsStringIdLanguageIdRoute,
    putApiV2StringTranslationsStringIdLanguageIdRouteHandler,
  )
  .openapi(getApiV2TranslationKeysRoute, getApiV2TranslationKeysRouteHandler)
  .openapi(postApiV2TranslationKeysRoute, postApiV2TranslationKeysRouteHandler)
  .openapi(getApiV2TranslationKeysIDRoute, getApiV2TranslationKeysIDRouteHandler)
  .openapi(putApiV2TranslationKeysIDRoute, putApiV2TranslationKeysIDRouteHandler)
  .openapi(getApiV2TranslationRequestsRoute, getApiV2TranslationRequestsRouteHandler)
  .openapi(postApiV2TranslationRequestsRoute, postApiV2TranslationRequestsRouteHandler)
  .openapi(getApiV2TranslationRequestsIdRoute, getApiV2TranslationRequestsIdRouteHandler)
  .openapi(putApiV2TranslationRequestsIdRoute, putApiV2TranslationRequestsIdRouteHandler)
  .openapi(
    putApiV2TranslationRequestsIdStringsRoute,
    putApiV2TranslationRequestsIdStringsRouteHandler,
  )
  .openapi(
    putApiV2TranslationSetAttributesBatchRoute,
    putApiV2TranslationSetAttributesBatchRouteHandler,
  )
  .openapi(
    deleteApiV2TranslationSetAttributesIDRoute,
    deleteApiV2TranslationSetAttributesIDRouteHandler,
  )
  .openapi(putApiV2TranslationSetAttributesIDRoute, putApiV2TranslationSetAttributesIDRouteHandler)
  .openapi(getApiV2TranslationSetsRoute, getApiV2TranslationSetsRouteHandler)
  .openapi(getApiV2TranslationSetsIDRoute, getApiV2TranslationSetsIDRouteHandler)
  .openapi(putApiV2TranslationSetsIDRoute, putApiV2TranslationSetsIDRouteHandler)
  .openapi(
    getApiV2TranslationSetsIDAttributesRoute,
    getApiV2TranslationSetsIDAttributesRouteHandler,
  )
  .openapi(
    postApiV2TranslationSetsIDAttributesRoute,
    postApiV2TranslationSetsIDAttributesRouteHandler,
  )
  .openapi(
    postApiV2TranslationSetsIDAttributesBatchRoute,
    postApiV2TranslationSetsIDAttributesBatchRouteHandler,
  )
  .openapi(
    getApiV2TranslationSetsIDSourceStringsRoute,
    getApiV2TranslationSetsIDSourceStringsRouteHandler,
  )
  .openapi(
    getApiV2TranslationSetsIDStatisticsRoute,
    getApiV2TranslationSetsIDStatisticsRouteHandler,
  )
  .openapi(getApiV2TranslationSetsIDStringsRoute, getApiV2TranslationSetsIDStringsRouteHandler)
  .openapi(putApiV2TranslationSetsIDStringsRoute, putApiV2TranslationSetsIDStringsRouteHandler)
  .openapi(
    getApiV2UpdateGroupClientRelationshipsRoute,
    getApiV2UpdateGroupClientRelationshipsRouteHandler,
  )
  .openapi(
    postApiV2UpdateGroupClientRelationshipsRoute,
    postApiV2UpdateGroupClientRelationshipsRouteHandler,
  )
  .openapi(
    putApiV2UpdateGroupClientRelationshipsRoute,
    putApiV2UpdateGroupClientRelationshipsRouteHandler,
  )
  .openapi(
    getApiV2UpdateGroupClientRelationshipsRelationshipIDRoute,
    getApiV2UpdateGroupClientRelationshipsRelationshipIDRouteHandler,
  )
  .openapi(
    putApiV2UpdateGroupClientRelationshipsRelationshipIDRoute,
    putApiV2UpdateGroupClientRelationshipsRelationshipIDRouteHandler,
  )
  .openapi(getApiV2UpdateGroupSubscriptionsRoute, getApiV2UpdateGroupSubscriptionsRouteHandler)
  .openapi(postApiV2UpdateGroupSubscriptionsRoute, postApiV2UpdateGroupSubscriptionsRouteHandler)
  .openapi(
    postApiV2UpdateGroupSubscriptionsBatchRoute,
    postApiV2UpdateGroupSubscriptionsBatchRouteHandler,
  )
  .openapi(
    putApiV2UpdateGroupSubscriptionsBatchRoute,
    putApiV2UpdateGroupSubscriptionsBatchRouteHandler,
  )
  .openapi(
    deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute,
    deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRouteHandler,
  )
  .openapi(
    getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute,
    getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRouteHandler,
  )
  .openapi(
    putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute,
    putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRouteHandler,
  )
  .openapi(getApiV2UpdateGroupsRoute, getApiV2UpdateGroupsRouteHandler)
  .openapi(postApiV2UpdateGroupsRoute, postApiV2UpdateGroupsRouteHandler)
  .openapi(deleteApiV2UpdateGroupsIDRoute, deleteApiV2UpdateGroupsIDRouteHandler)
  .openapi(getApiV2UpdateGroupsIDRoute, getApiV2UpdateGroupsIDRouteHandler)
  .openapi(putApiV2UpdateGroupsIDRoute, putApiV2UpdateGroupsIDRouteHandler)
  .openapi(getApiV2UpdateGroupsIDBundlesRoute, getApiV2UpdateGroupsIDBundlesRouteHandler)
  .openapi(
    deleteApiV2UpdateGroupsIdUsersUserIDRoute,
    deleteApiV2UpdateGroupsIdUsersUserIDRouteHandler,
  )
  .openapi(postApiV2UpdateGroupsIdUsersUserIDRoute, postApiV2UpdateGroupsIdUsersUserIDRouteHandler)
  .openapi(getApiV2UpdateSystemRoute, getApiV2UpdateSystemRouteHandler)
  .openapi(getApiV2UserContentDefinitionsRoute, getApiV2UserContentDefinitionsRouteHandler)
  .openapi(postApiV2UserContentDefinitionsRoute, postApiV2UserContentDefinitionsRouteHandler)
  .openapi(
    deleteApiV2UserContentDefinitionsUserContentDefinitionIDRoute,
    deleteApiV2UserContentDefinitionsUserContentDefinitionIDRouteHandler,
  )
  .openapi(
    getApiV2UserContentDefinitionsUserContentDefinitionIDRoute,
    getApiV2UserContentDefinitionsUserContentDefinitionIDRouteHandler,
  )
  .openapi(getApiV2UsersRoute, getApiV2UsersRouteHandler)
  .openapi(postApiV2UsersRoute, postApiV2UsersRouteHandler)
  .openapi(getApiV2UsersCurrentRoute, getApiV2UsersCurrentRouteHandler)
  .openapi(putApiV2UsersCurrentRoute, putApiV2UsersCurrentRouteHandler)
  .openapi(getApiV2UsersCurrentPermissionsRoute, getApiV2UsersCurrentPermissionsRouteHandler)
  .openapi(getApiV2UsersCurrentRolesRoute, getApiV2UsersCurrentRolesRouteHandler)
  .openapi(deleteApiV2UsersIdRoute, deleteApiV2UsersIdRouteHandler)
  .openapi(getApiV2UsersIdRoute, getApiV2UsersIdRouteHandler)
  .openapi(putApiV2UsersIdRoute, putApiV2UsersIdRouteHandler)
  .openapi(getApiV2UsersIdPermissionsRoute, getApiV2UsersIdPermissionsRouteHandler)
  .openapi(getApiV2UsersIdRolesRoute, getApiV2UsersIdRolesRouteHandler)
  .openapi(putApiV2UsersIdRolesRoute, putApiV2UsersIdRolesRouteHandler)
  .openapi(getApiV2VoucherHistoryRoute, getApiV2VoucherHistoryRouteHandler)
  .openapi(getApiV2VouchersRoute, getApiV2VouchersRouteHandler)
  .openapi(postApiV2VouchersRoute, postApiV2VouchersRouteHandler)
  .openapi(deleteApiV2VouchersVoucherCodeRoute, deleteApiV2VouchersVoucherCodeRouteHandler)
  .openapi(getApiV2VouchersVoucherCodeRoute, getApiV2VouchersVoucherCodeRouteHandler)
  .openapi(putApiV2VouchersVoucherCodeRoute, putApiV2VouchersVoucherCodeRouteHandler)
  .openapi(
    getApiV2VouchersVoucherCodeVoucherHistoryRoute,
    getApiV2VouchersVoucherCodeVoucherHistoryRouteHandler,
  )
  .openapi(getApiV2ActivitiesRoute, getApiV2ActivitiesRouteHandler)
  .openapi(postApiV2ActivitiesRoute, postApiV2ActivitiesRouteHandler)
  .openapi(deleteApiV2ActivitiesActivityIDRoute, deleteApiV2ActivitiesActivityIDRouteHandler)
  .openapi(getApiV2ActivitiesActivityIDRoute, getApiV2ActivitiesActivityIDRouteHandler)
  .openapi(putApiV2ActivitiesActivityIDRoute, putApiV2ActivitiesActivityIDRouteHandler)
  .openapi(getApiV2ActivityRunsRoute, getApiV2ActivityRunsRouteHandler)
  .openapi(getApiV2ActivityRunsActivityRunIDRoute, getApiV2ActivityRunsActivityRunIDRouteHandler)
  .openapi(putApiV2ActivityRunsActivityRunIDRoute, putApiV2ActivityRunsActivityRunIDRouteHandler)
  .openapi(
    getApiV2ActivityRunsActivityRunIDStatusRoute,
    getApiV2ActivityRunsActivityRunIDStatusRouteHandler,
  )
  .openapi(
    putApiV2ActivityRunsActivityRunIDStatusRoute,
    putApiV2ActivityRunsActivityRunIDStatusRouteHandler,
  )
  .openapi(getApiV2AgentsRoute, getApiV2AgentsRouteHandler)
  .openapi(postApiV2AgentsRoute, postApiV2AgentsRouteHandler)
  .openapi(getApiV2AgentsCurrentRoute, getApiV2AgentsCurrentRouteHandler)
  .openapi(getApiV2AgentsCurrentActivityRunRoute, getApiV2AgentsCurrentActivityRunRouteHandler)
  .openapi(deleteApiV2AgentsAgentIDRoute, deleteApiV2AgentsAgentIDRouteHandler)
  .openapi(getApiV2AgentsAgentIDRoute, getApiV2AgentsAgentIDRouteHandler)
  .openapi(putApiV2AgentsAgentIDRoute, putApiV2AgentsAgentIDRouteHandler)
  .openapi(getApiV2AgentsAgentIDActivityRunRoute, getApiV2AgentsAgentIDActivityRunRouteHandler)
  .openapi(putApiV2AgentsAgentIDActivityRunRoute, putApiV2AgentsAgentIDActivityRunRouteHandler)
  .openapi(putApiV2AgentsAgentIDStatusRoute, putApiV2AgentsAgentIDStatusRouteHandler)
  .openapi(getApiV2JobRunsRoute, getApiV2JobRunsRouteHandler)
  .openapi(postApiV2JobRunsRoute, postApiV2JobRunsRouteHandler)
  .openapi(deleteApiV2JobRunsJobRunIDRoute, deleteApiV2JobRunsJobRunIDRouteHandler)
  .openapi(getApiV2JobRunsJobRunIDRoute, getApiV2JobRunsJobRunIDRouteHandler)
  .openapi(putApiV2JobRunsJobRunIDRoute, putApiV2JobRunsJobRunIDRouteHandler)
  .openapi(getApiV2JobsRoute, getApiV2JobsRouteHandler)
  .openapi(postApiV2JobsRoute, postApiV2JobsRouteHandler)
  .openapi(deleteApiV2JobsJobIDRoute, deleteApiV2JobsJobIDRouteHandler)
  .openapi(getApiV2JobsJobIDRoute, getApiV2JobsJobIDRouteHandler)
  .openapi(putApiV2JobsJobIDRoute, putApiV2JobsJobIDRouteHandler)
  .openapi(getApiV2StepsRoute, getApiV2StepsRouteHandler)
  .openapi(postApiV2StepsRoute, postApiV2StepsRouteHandler)
  .openapi(getApiV2StepsStepIDRoute, getApiV2StepsStepIDRouteHandler)
  .openapi(putApiV2StepsStepIDRoute, putApiV2StepsStepIDRouteHandler)

export default app
