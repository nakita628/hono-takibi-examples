import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppInfoLocalizationsIdRoute,
  deleteV1AppPreOrdersIdRoute,
  deleteV1AppPreviewSetsIdRoute,
  deleteV1AppPreviewsIdRoute,
  deleteV1AppScreenshotSetsIdRoute,
  deleteV1AppScreenshotsIdRoute,
  deleteV1AppsIdRelationshipsBetaTestersRoute,
  deleteV1AppStoreReviewAttachmentsIdRoute,
  deleteV1AppStoreVersionLocalizationsIdRoute,
  deleteV1AppStoreVersionPhasedReleasesIdRoute,
  deleteV1AppStoreVersionsIdRoute,
  deleteV1AppStoreVersionSubmissionsIdRoute,
  deleteV1BetaAppLocalizationsIdRoute,
  deleteV1BetaBuildLocalizationsIdRoute,
  deleteV1BetaGroupsIdRelationshipsBetaTestersRoute,
  deleteV1BetaGroupsIdRelationshipsBuildsRoute,
  deleteV1BetaGroupsIdRoute,
  deleteV1BetaTestersIdRelationshipsAppsRoute,
  deleteV1BetaTestersIdRelationshipsBetaGroupsRoute,
  deleteV1BetaTestersIdRelationshipsBuildsRoute,
  deleteV1BetaTestersIdRoute,
  deleteV1BuildsIdRelationshipsBetaGroupsRoute,
  deleteV1BuildsIdRelationshipsIndividualTestersRoute,
  deleteV1BundleIdCapabilitiesIdRoute,
  deleteV1BundleIdsIdRoute,
  deleteV1CertificatesIdRoute,
  deleteV1EndUserLicenseAgreementsIdRoute,
  deleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
  deleteV1IdfaDeclarationsIdRoute,
  deleteV1ProfilesIdRoute,
  deleteV1RoutingAppCoveragesIdRoute,
  deleteV1UserInvitationsIdRoute,
  deleteV1UsersIdRelationshipsVisibleAppsRoute,
  deleteV1UsersIdRoute,
  getV1AppCategoriesIdParentRoute,
  getV1AppCategoriesIdRoute,
  getV1AppCategoriesIdSubcategoriesRoute,
  getV1AppCategoriesRoute,
  getV1AppEncryptionDeclarationsIdAppRoute,
  getV1AppEncryptionDeclarationsIdRoute,
  getV1AppEncryptionDeclarationsRoute,
  getV1AppInfoLocalizationsIdRoute,
  getV1AppInfosIdAgeRatingDeclarationRoute,
  getV1AppInfosIdAppInfoLocalizationsRoute,
  getV1AppInfosIdPrimaryCategoryRoute,
  getV1AppInfosIdPrimarySubcategoryOneRoute,
  getV1AppInfosIdPrimarySubcategoryTwoRoute,
  getV1AppInfosIdRoute,
  getV1AppInfosIdSecondaryCategoryRoute,
  getV1AppInfosIdSecondarySubcategoryOneRoute,
  getV1AppInfosIdSecondarySubcategoryTwoRoute,
  getV1AppPreOrdersIdRoute,
  getV1AppPreviewSetsIdAppPreviewsRoute,
  getV1AppPreviewSetsIdRelationshipsAppPreviewsRoute,
  getV1AppPreviewSetsIdRoute,
  getV1AppPreviewsIdRoute,
  getV1AppPricePointsIdRoute,
  getV1AppPricePointsIdTerritoryRoute,
  getV1AppPricePointsRoute,
  getV1AppPricesIdRoute,
  getV1AppPriceTiersIdPricePointsRoute,
  getV1AppPriceTiersIdRoute,
  getV1AppPriceTiersRoute,
  getV1AppScreenshotSetsIdAppScreenshotsRoute,
  getV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute,
  getV1AppScreenshotSetsIdRoute,
  getV1AppScreenshotsIdRoute,
  getV1AppsIdAppInfosRoute,
  getV1AppsIdAppStoreVersionsRoute,
  getV1AppsIdAvailableTerritoriesRoute,
  getV1AppsIdBetaAppLocalizationsRoute,
  getV1AppsIdBetaAppReviewDetailRoute,
  getV1AppsIdBetaGroupsRoute,
  getV1AppsIdBetaLicenseAgreementRoute,
  getV1AppsIdBuildsRoute,
  getV1AppsIdEndUserLicenseAgreementRoute,
  getV1AppsIdGameCenterEnabledVersionsRoute,
  getV1AppsIdInAppPurchasesRoute,
  getV1AppsIdPerfPowerMetricsRoute,
  getV1AppsIdPreOrderRoute,
  getV1AppsIdPreReleaseVersionsRoute,
  getV1AppsIdPricesRoute,
  getV1AppsIdRoute,
  getV1AppsRoute,
  getV1AppStoreReviewAttachmentsIdRoute,
  getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsRoute,
  getV1AppStoreReviewDetailsIdRoute,
  getV1AppStoreVersionLocalizationsIdAppPreviewSetsRoute,
  getV1AppStoreVersionLocalizationsIdAppScreenshotSetsRoute,
  getV1AppStoreVersionLocalizationsIdRoute,
  getV1AppStoreVersionsIdAgeRatingDeclarationRoute,
  getV1AppStoreVersionsIdAppStoreReviewDetailRoute,
  getV1AppStoreVersionsIdAppStoreVersionLocalizationsRoute,
  getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseRoute,
  getV1AppStoreVersionsIdAppStoreVersionSubmissionRoute,
  getV1AppStoreVersionsIdBuildRoute,
  getV1AppStoreVersionsIdIdfaDeclarationRoute,
  getV1AppStoreVersionsIdRelationshipsBuildRoute,
  getV1AppStoreVersionsIdRoute,
  getV1AppStoreVersionsIdRoutingAppCoverageRoute,
  getV1BetaAppLocalizationsIdAppRoute,
  getV1BetaAppLocalizationsIdRoute,
  getV1BetaAppLocalizationsRoute,
  getV1BetaAppReviewDetailsIdAppRoute,
  getV1BetaAppReviewDetailsIdRoute,
  getV1BetaAppReviewDetailsRoute,
  getV1BetaAppReviewSubmissionsIdBuildRoute,
  getV1BetaAppReviewSubmissionsIdRoute,
  getV1BetaAppReviewSubmissionsRoute,
  getV1BetaBuildLocalizationsIdBuildRoute,
  getV1BetaBuildLocalizationsIdRoute,
  getV1BetaBuildLocalizationsRoute,
  getV1BetaGroupsIdAppRoute,
  getV1BetaGroupsIdBetaTestersRoute,
  getV1BetaGroupsIdBuildsRoute,
  getV1BetaGroupsIdRelationshipsBetaTestersRoute,
  getV1BetaGroupsIdRelationshipsBuildsRoute,
  getV1BetaGroupsIdRoute,
  getV1BetaGroupsRoute,
  getV1BetaLicenseAgreementsIdAppRoute,
  getV1BetaLicenseAgreementsIdRoute,
  getV1BetaLicenseAgreementsRoute,
  getV1BetaTestersIdAppsRoute,
  getV1BetaTestersIdBetaGroupsRoute,
  getV1BetaTestersIdBuildsRoute,
  getV1BetaTestersIdRelationshipsAppsRoute,
  getV1BetaTestersIdRelationshipsBetaGroupsRoute,
  getV1BetaTestersIdRelationshipsBuildsRoute,
  getV1BetaTestersIdRoute,
  getV1BetaTestersRoute,
  getV1BuildBetaDetailsIdBuildRoute,
  getV1BuildBetaDetailsIdRoute,
  getV1BuildBetaDetailsRoute,
  getV1BuildsIdAppEncryptionDeclarationRoute,
  getV1BuildsIdAppRoute,
  getV1BuildsIdAppStoreVersionRoute,
  getV1BuildsIdBetaAppReviewSubmissionRoute,
  getV1BuildsIdBetaBuildLocalizationsRoute,
  getV1BuildsIdBuildBetaDetailRoute,
  getV1BuildsIdDiagnosticSignaturesRoute,
  getV1BuildsIdIconsRoute,
  getV1BuildsIdIndividualTestersRoute,
  getV1BuildsIdPerfPowerMetricsRoute,
  getV1BuildsIdPreReleaseVersionRoute,
  getV1BuildsIdRelationshipsAppEncryptionDeclarationRoute,
  getV1BuildsIdRelationshipsIndividualTestersRoute,
  getV1BuildsIdRoute,
  getV1BuildsRoute,
  getV1BundleIdsIdAppRoute,
  getV1BundleIdsIdBundleIdCapabilitiesRoute,
  getV1BundleIdsIdProfilesRoute,
  getV1BundleIdsIdRoute,
  getV1BundleIdsRoute,
  getV1CertificatesIdRoute,
  getV1CertificatesRoute,
  getV1DevicesIdRoute,
  getV1DevicesRoute,
  getV1DiagnosticSignaturesIdLogsRoute,
  getV1EndUserLicenseAgreementsIdRoute,
  getV1EndUserLicenseAgreementsIdTerritoriesRoute,
  getV1FinanceReportsRoute,
  getV1GameCenterEnabledVersionsIdCompatibleVersionsRoute,
  getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
  getV1InAppPurchasesIdRoute,
  getV1PreReleaseVersionsIdAppRoute,
  getV1PreReleaseVersionsIdBuildsRoute,
  getV1PreReleaseVersionsIdRoute,
  getV1PreReleaseVersionsRoute,
  getV1ProfilesIdBundleIdRoute,
  getV1ProfilesIdCertificatesRoute,
  getV1ProfilesIdDevicesRoute,
  getV1ProfilesIdRoute,
  getV1ProfilesRoute,
  getV1RoutingAppCoveragesIdRoute,
  getV1SalesReportsRoute,
  getV1TerritoriesRoute,
  getV1UserInvitationsIdRoute,
  getV1UserInvitationsIdVisibleAppsRoute,
  getV1UserInvitationsRoute,
  getV1UsersIdRelationshipsVisibleAppsRoute,
  getV1UsersIdRoute,
  getV1UsersIdVisibleAppsRoute,
  getV1UsersRoute,
  patchV1AgeRatingDeclarationsIdRoute,
  patchV1AppInfoLocalizationsIdRoute,
  patchV1AppInfosIdRoute,
  patchV1AppPreOrdersIdRoute,
  patchV1AppPreviewSetsIdRelationshipsAppPreviewsRoute,
  patchV1AppPreviewsIdRoute,
  patchV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute,
  patchV1AppScreenshotsIdRoute,
  patchV1AppsIdRoute,
  patchV1AppStoreReviewAttachmentsIdRoute,
  patchV1AppStoreReviewDetailsIdRoute,
  patchV1AppStoreVersionLocalizationsIdRoute,
  patchV1AppStoreVersionPhasedReleasesIdRoute,
  patchV1AppStoreVersionsIdRelationshipsBuildRoute,
  patchV1AppStoreVersionsIdRoute,
  patchV1BetaAppLocalizationsIdRoute,
  patchV1BetaAppReviewDetailsIdRoute,
  patchV1BetaBuildLocalizationsIdRoute,
  patchV1BetaGroupsIdRoute,
  patchV1BetaLicenseAgreementsIdRoute,
  patchV1BuildBetaDetailsIdRoute,
  patchV1BuildsIdRelationshipsAppEncryptionDeclarationRoute,
  patchV1BuildsIdRoute,
  patchV1BundleIdCapabilitiesIdRoute,
  patchV1BundleIdsIdRoute,
  patchV1DevicesIdRoute,
  patchV1EndUserLicenseAgreementsIdRoute,
  patchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
  patchV1IdfaDeclarationsIdRoute,
  patchV1RoutingAppCoveragesIdRoute,
  patchV1UsersIdRelationshipsVisibleAppsRoute,
  patchV1UsersIdRoute,
  postV1AppEncryptionDeclarationsIdRelationshipsBuildsRoute,
  postV1AppInfoLocalizationsRoute,
  postV1AppPreOrdersRoute,
  postV1AppPreviewSetsRoute,
  postV1AppPreviewsRoute,
  postV1AppScreenshotSetsRoute,
  postV1AppScreenshotsRoute,
  postV1AppStoreReviewAttachmentsRoute,
  postV1AppStoreReviewDetailsRoute,
  postV1AppStoreVersionLocalizationsRoute,
  postV1AppStoreVersionPhasedReleasesRoute,
  postV1AppStoreVersionsRoute,
  postV1AppStoreVersionSubmissionsRoute,
  postV1BetaAppLocalizationsRoute,
  postV1BetaAppReviewSubmissionsRoute,
  postV1BetaBuildLocalizationsRoute,
  postV1BetaGroupsIdRelationshipsBetaTestersRoute,
  postV1BetaGroupsIdRelationshipsBuildsRoute,
  postV1BetaGroupsRoute,
  postV1BetaTesterInvitationsRoute,
  postV1BetaTestersIdRelationshipsBetaGroupsRoute,
  postV1BetaTestersIdRelationshipsBuildsRoute,
  postV1BetaTestersRoute,
  postV1BuildBetaNotificationsRoute,
  postV1BuildsIdRelationshipsBetaGroupsRoute,
  postV1BuildsIdRelationshipsIndividualTestersRoute,
  postV1BundleIdCapabilitiesRoute,
  postV1BundleIdsRoute,
  postV1CertificatesRoute,
  postV1DevicesRoute,
  postV1EndUserLicenseAgreementsRoute,
  postV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
  postV1IdfaDeclarationsRoute,
  postV1ProfilesRoute,
  postV1RoutingAppCoveragesRoute,
  postV1UserInvitationsRoute,
  postV1UsersIdRelationshipsVisibleAppsRoute,
} from './routes'
import {
  deleteV1AppInfoLocalizationsIdRouteHandler,
  deleteV1AppPreOrdersIdRouteHandler,
  deleteV1AppPreviewSetsIdRouteHandler,
  deleteV1AppPreviewsIdRouteHandler,
  deleteV1AppScreenshotSetsIdRouteHandler,
  deleteV1AppScreenshotsIdRouteHandler,
  deleteV1AppsIdRelationshipsBetaTestersRouteHandler,
  deleteV1AppStoreReviewAttachmentsIdRouteHandler,
  deleteV1AppStoreVersionLocalizationsIdRouteHandler,
  deleteV1AppStoreVersionPhasedReleasesIdRouteHandler,
  deleteV1AppStoreVersionsIdRouteHandler,
  deleteV1AppStoreVersionSubmissionsIdRouteHandler,
  deleteV1BetaAppLocalizationsIdRouteHandler,
  deleteV1BetaBuildLocalizationsIdRouteHandler,
  deleteV1BetaGroupsIdRelationshipsBetaTestersRouteHandler,
  deleteV1BetaGroupsIdRelationshipsBuildsRouteHandler,
  deleteV1BetaGroupsIdRouteHandler,
  deleteV1BetaTestersIdRelationshipsAppsRouteHandler,
  deleteV1BetaTestersIdRelationshipsBetaGroupsRouteHandler,
  deleteV1BetaTestersIdRelationshipsBuildsRouteHandler,
  deleteV1BetaTestersIdRouteHandler,
  deleteV1BuildsIdRelationshipsBetaGroupsRouteHandler,
  deleteV1BuildsIdRelationshipsIndividualTestersRouteHandler,
  deleteV1BundleIdCapabilitiesIdRouteHandler,
  deleteV1BundleIdsIdRouteHandler,
  deleteV1CertificatesIdRouteHandler,
  deleteV1EndUserLicenseAgreementsIdRouteHandler,
  deleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler,
  deleteV1IdfaDeclarationsIdRouteHandler,
  deleteV1ProfilesIdRouteHandler,
  deleteV1RoutingAppCoveragesIdRouteHandler,
  deleteV1UserInvitationsIdRouteHandler,
  deleteV1UsersIdRelationshipsVisibleAppsRouteHandler,
  deleteV1UsersIdRouteHandler,
  getV1AppCategoriesIdParentRouteHandler,
  getV1AppCategoriesIdRouteHandler,
  getV1AppCategoriesIdSubcategoriesRouteHandler,
  getV1AppCategoriesRouteHandler,
  getV1AppEncryptionDeclarationsIdAppRouteHandler,
  getV1AppEncryptionDeclarationsIdRouteHandler,
  getV1AppEncryptionDeclarationsRouteHandler,
  getV1AppInfoLocalizationsIdRouteHandler,
  getV1AppInfosIdAgeRatingDeclarationRouteHandler,
  getV1AppInfosIdAppInfoLocalizationsRouteHandler,
  getV1AppInfosIdPrimaryCategoryRouteHandler,
  getV1AppInfosIdPrimarySubcategoryOneRouteHandler,
  getV1AppInfosIdPrimarySubcategoryTwoRouteHandler,
  getV1AppInfosIdRouteHandler,
  getV1AppInfosIdSecondaryCategoryRouteHandler,
  getV1AppInfosIdSecondarySubcategoryOneRouteHandler,
  getV1AppInfosIdSecondarySubcategoryTwoRouteHandler,
  getV1AppPreOrdersIdRouteHandler,
  getV1AppPreviewSetsIdAppPreviewsRouteHandler,
  getV1AppPreviewSetsIdRelationshipsAppPreviewsRouteHandler,
  getV1AppPreviewSetsIdRouteHandler,
  getV1AppPreviewsIdRouteHandler,
  getV1AppPricePointsIdRouteHandler,
  getV1AppPricePointsIdTerritoryRouteHandler,
  getV1AppPricePointsRouteHandler,
  getV1AppPricesIdRouteHandler,
  getV1AppPriceTiersIdPricePointsRouteHandler,
  getV1AppPriceTiersIdRouteHandler,
  getV1AppPriceTiersRouteHandler,
  getV1AppScreenshotSetsIdAppScreenshotsRouteHandler,
  getV1AppScreenshotSetsIdRelationshipsAppScreenshotsRouteHandler,
  getV1AppScreenshotSetsIdRouteHandler,
  getV1AppScreenshotsIdRouteHandler,
  getV1AppsIdAppInfosRouteHandler,
  getV1AppsIdAppStoreVersionsRouteHandler,
  getV1AppsIdAvailableTerritoriesRouteHandler,
  getV1AppsIdBetaAppLocalizationsRouteHandler,
  getV1AppsIdBetaAppReviewDetailRouteHandler,
  getV1AppsIdBetaGroupsRouteHandler,
  getV1AppsIdBetaLicenseAgreementRouteHandler,
  getV1AppsIdBuildsRouteHandler,
  getV1AppsIdEndUserLicenseAgreementRouteHandler,
  getV1AppsIdGameCenterEnabledVersionsRouteHandler,
  getV1AppsIdInAppPurchasesRouteHandler,
  getV1AppsIdPerfPowerMetricsRouteHandler,
  getV1AppsIdPreOrderRouteHandler,
  getV1AppsIdPreReleaseVersionsRouteHandler,
  getV1AppsIdPricesRouteHandler,
  getV1AppsIdRouteHandler,
  getV1AppsRouteHandler,
  getV1AppStoreReviewAttachmentsIdRouteHandler,
  getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsRouteHandler,
  getV1AppStoreReviewDetailsIdRouteHandler,
  getV1AppStoreVersionLocalizationsIdAppPreviewSetsRouteHandler,
  getV1AppStoreVersionLocalizationsIdAppScreenshotSetsRouteHandler,
  getV1AppStoreVersionLocalizationsIdRouteHandler,
  getV1AppStoreVersionsIdAgeRatingDeclarationRouteHandler,
  getV1AppStoreVersionsIdAppStoreReviewDetailRouteHandler,
  getV1AppStoreVersionsIdAppStoreVersionLocalizationsRouteHandler,
  getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseRouteHandler,
  getV1AppStoreVersionsIdAppStoreVersionSubmissionRouteHandler,
  getV1AppStoreVersionsIdBuildRouteHandler,
  getV1AppStoreVersionsIdIdfaDeclarationRouteHandler,
  getV1AppStoreVersionsIdRelationshipsBuildRouteHandler,
  getV1AppStoreVersionsIdRouteHandler,
  getV1AppStoreVersionsIdRoutingAppCoverageRouteHandler,
  getV1BetaAppLocalizationsIdAppRouteHandler,
  getV1BetaAppLocalizationsIdRouteHandler,
  getV1BetaAppLocalizationsRouteHandler,
  getV1BetaAppReviewDetailsIdAppRouteHandler,
  getV1BetaAppReviewDetailsIdRouteHandler,
  getV1BetaAppReviewDetailsRouteHandler,
  getV1BetaAppReviewSubmissionsIdBuildRouteHandler,
  getV1BetaAppReviewSubmissionsIdRouteHandler,
  getV1BetaAppReviewSubmissionsRouteHandler,
  getV1BetaBuildLocalizationsIdBuildRouteHandler,
  getV1BetaBuildLocalizationsIdRouteHandler,
  getV1BetaBuildLocalizationsRouteHandler,
  getV1BetaGroupsIdAppRouteHandler,
  getV1BetaGroupsIdBetaTestersRouteHandler,
  getV1BetaGroupsIdBuildsRouteHandler,
  getV1BetaGroupsIdRelationshipsBetaTestersRouteHandler,
  getV1BetaGroupsIdRelationshipsBuildsRouteHandler,
  getV1BetaGroupsIdRouteHandler,
  getV1BetaGroupsRouteHandler,
  getV1BetaLicenseAgreementsIdAppRouteHandler,
  getV1BetaLicenseAgreementsIdRouteHandler,
  getV1BetaLicenseAgreementsRouteHandler,
  getV1BetaTestersIdAppsRouteHandler,
  getV1BetaTestersIdBetaGroupsRouteHandler,
  getV1BetaTestersIdBuildsRouteHandler,
  getV1BetaTestersIdRelationshipsAppsRouteHandler,
  getV1BetaTestersIdRelationshipsBetaGroupsRouteHandler,
  getV1BetaTestersIdRelationshipsBuildsRouteHandler,
  getV1BetaTestersIdRouteHandler,
  getV1BetaTestersRouteHandler,
  getV1BuildBetaDetailsIdBuildRouteHandler,
  getV1BuildBetaDetailsIdRouteHandler,
  getV1BuildBetaDetailsRouteHandler,
  getV1BuildsIdAppEncryptionDeclarationRouteHandler,
  getV1BuildsIdAppRouteHandler,
  getV1BuildsIdAppStoreVersionRouteHandler,
  getV1BuildsIdBetaAppReviewSubmissionRouteHandler,
  getV1BuildsIdBetaBuildLocalizationsRouteHandler,
  getV1BuildsIdBuildBetaDetailRouteHandler,
  getV1BuildsIdDiagnosticSignaturesRouteHandler,
  getV1BuildsIdIconsRouteHandler,
  getV1BuildsIdIndividualTestersRouteHandler,
  getV1BuildsIdPerfPowerMetricsRouteHandler,
  getV1BuildsIdPreReleaseVersionRouteHandler,
  getV1BuildsIdRelationshipsAppEncryptionDeclarationRouteHandler,
  getV1BuildsIdRelationshipsIndividualTestersRouteHandler,
  getV1BuildsIdRouteHandler,
  getV1BuildsRouteHandler,
  getV1BundleIdsIdAppRouteHandler,
  getV1BundleIdsIdBundleIdCapabilitiesRouteHandler,
  getV1BundleIdsIdProfilesRouteHandler,
  getV1BundleIdsIdRouteHandler,
  getV1BundleIdsRouteHandler,
  getV1CertificatesIdRouteHandler,
  getV1CertificatesRouteHandler,
  getV1DevicesIdRouteHandler,
  getV1DevicesRouteHandler,
  getV1DiagnosticSignaturesIdLogsRouteHandler,
  getV1EndUserLicenseAgreementsIdRouteHandler,
  getV1EndUserLicenseAgreementsIdTerritoriesRouteHandler,
  getV1FinanceReportsRouteHandler,
  getV1GameCenterEnabledVersionsIdCompatibleVersionsRouteHandler,
  getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler,
  getV1InAppPurchasesIdRouteHandler,
  getV1PreReleaseVersionsIdAppRouteHandler,
  getV1PreReleaseVersionsIdBuildsRouteHandler,
  getV1PreReleaseVersionsIdRouteHandler,
  getV1PreReleaseVersionsRouteHandler,
  getV1ProfilesIdBundleIdRouteHandler,
  getV1ProfilesIdCertificatesRouteHandler,
  getV1ProfilesIdDevicesRouteHandler,
  getV1ProfilesIdRouteHandler,
  getV1ProfilesRouteHandler,
  getV1RoutingAppCoveragesIdRouteHandler,
  getV1SalesReportsRouteHandler,
  getV1TerritoriesRouteHandler,
  getV1UserInvitationsIdRouteHandler,
  getV1UserInvitationsIdVisibleAppsRouteHandler,
  getV1UserInvitationsRouteHandler,
  getV1UsersIdRelationshipsVisibleAppsRouteHandler,
  getV1UsersIdRouteHandler,
  getV1UsersIdVisibleAppsRouteHandler,
  getV1UsersRouteHandler,
  patchV1AgeRatingDeclarationsIdRouteHandler,
  patchV1AppInfoLocalizationsIdRouteHandler,
  patchV1AppInfosIdRouteHandler,
  patchV1AppPreOrdersIdRouteHandler,
  patchV1AppPreviewSetsIdRelationshipsAppPreviewsRouteHandler,
  patchV1AppPreviewsIdRouteHandler,
  patchV1AppScreenshotSetsIdRelationshipsAppScreenshotsRouteHandler,
  patchV1AppScreenshotsIdRouteHandler,
  patchV1AppsIdRouteHandler,
  patchV1AppStoreReviewAttachmentsIdRouteHandler,
  patchV1AppStoreReviewDetailsIdRouteHandler,
  patchV1AppStoreVersionLocalizationsIdRouteHandler,
  patchV1AppStoreVersionPhasedReleasesIdRouteHandler,
  patchV1AppStoreVersionsIdRelationshipsBuildRouteHandler,
  patchV1AppStoreVersionsIdRouteHandler,
  patchV1BetaAppLocalizationsIdRouteHandler,
  patchV1BetaAppReviewDetailsIdRouteHandler,
  patchV1BetaBuildLocalizationsIdRouteHandler,
  patchV1BetaGroupsIdRouteHandler,
  patchV1BetaLicenseAgreementsIdRouteHandler,
  patchV1BuildBetaDetailsIdRouteHandler,
  patchV1BuildsIdRelationshipsAppEncryptionDeclarationRouteHandler,
  patchV1BuildsIdRouteHandler,
  patchV1BundleIdCapabilitiesIdRouteHandler,
  patchV1BundleIdsIdRouteHandler,
  patchV1DevicesIdRouteHandler,
  patchV1EndUserLicenseAgreementsIdRouteHandler,
  patchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler,
  patchV1IdfaDeclarationsIdRouteHandler,
  patchV1RoutingAppCoveragesIdRouteHandler,
  patchV1UsersIdRelationshipsVisibleAppsRouteHandler,
  patchV1UsersIdRouteHandler,
  postV1AppEncryptionDeclarationsIdRelationshipsBuildsRouteHandler,
  postV1AppInfoLocalizationsRouteHandler,
  postV1AppPreOrdersRouteHandler,
  postV1AppPreviewSetsRouteHandler,
  postV1AppPreviewsRouteHandler,
  postV1AppScreenshotSetsRouteHandler,
  postV1AppScreenshotsRouteHandler,
  postV1AppStoreReviewAttachmentsRouteHandler,
  postV1AppStoreReviewDetailsRouteHandler,
  postV1AppStoreVersionLocalizationsRouteHandler,
  postV1AppStoreVersionPhasedReleasesRouteHandler,
  postV1AppStoreVersionsRouteHandler,
  postV1AppStoreVersionSubmissionsRouteHandler,
  postV1BetaAppLocalizationsRouteHandler,
  postV1BetaAppReviewSubmissionsRouteHandler,
  postV1BetaBuildLocalizationsRouteHandler,
  postV1BetaGroupsIdRelationshipsBetaTestersRouteHandler,
  postV1BetaGroupsIdRelationshipsBuildsRouteHandler,
  postV1BetaGroupsRouteHandler,
  postV1BetaTesterInvitationsRouteHandler,
  postV1BetaTestersIdRelationshipsBetaGroupsRouteHandler,
  postV1BetaTestersIdRelationshipsBuildsRouteHandler,
  postV1BetaTestersRouteHandler,
  postV1BuildBetaNotificationsRouteHandler,
  postV1BuildsIdRelationshipsBetaGroupsRouteHandler,
  postV1BuildsIdRelationshipsIndividualTestersRouteHandler,
  postV1BundleIdCapabilitiesRouteHandler,
  postV1BundleIdsRouteHandler,
  postV1CertificatesRouteHandler,
  postV1DevicesRouteHandler,
  postV1EndUserLicenseAgreementsRouteHandler,
  postV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler,
  postV1IdfaDeclarationsRouteHandler,
  postV1ProfilesRouteHandler,
  postV1RoutingAppCoveragesRouteHandler,
  postV1UserInvitationsRouteHandler,
  postV1UsersIdRelationshipsVisibleAppsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(patchV1AgeRatingDeclarationsIdRoute, patchV1AgeRatingDeclarationsIdRouteHandler)
  .openapi(getV1AppCategoriesRoute, getV1AppCategoriesRouteHandler)
  .openapi(getV1AppCategoriesIdRoute, getV1AppCategoriesIdRouteHandler)
  .openapi(getV1AppCategoriesIdParentRoute, getV1AppCategoriesIdParentRouteHandler)
  .openapi(getV1AppCategoriesIdSubcategoriesRoute, getV1AppCategoriesIdSubcategoriesRouteHandler)
  .openapi(getV1AppEncryptionDeclarationsRoute, getV1AppEncryptionDeclarationsRouteHandler)
  .openapi(getV1AppEncryptionDeclarationsIdRoute, getV1AppEncryptionDeclarationsIdRouteHandler)
  .openapi(
    getV1AppEncryptionDeclarationsIdAppRoute,
    getV1AppEncryptionDeclarationsIdAppRouteHandler,
  )
  .openapi(
    postV1AppEncryptionDeclarationsIdRelationshipsBuildsRoute,
    postV1AppEncryptionDeclarationsIdRelationshipsBuildsRouteHandler,
  )
  .openapi(postV1AppInfoLocalizationsRoute, postV1AppInfoLocalizationsRouteHandler)
  .openapi(deleteV1AppInfoLocalizationsIdRoute, deleteV1AppInfoLocalizationsIdRouteHandler)
  .openapi(getV1AppInfoLocalizationsIdRoute, getV1AppInfoLocalizationsIdRouteHandler)
  .openapi(patchV1AppInfoLocalizationsIdRoute, patchV1AppInfoLocalizationsIdRouteHandler)
  .openapi(getV1AppInfosIdRoute, getV1AppInfosIdRouteHandler)
  .openapi(patchV1AppInfosIdRoute, patchV1AppInfosIdRouteHandler)
  .openapi(
    getV1AppInfosIdAgeRatingDeclarationRoute,
    getV1AppInfosIdAgeRatingDeclarationRouteHandler,
  )
  .openapi(
    getV1AppInfosIdAppInfoLocalizationsRoute,
    getV1AppInfosIdAppInfoLocalizationsRouteHandler,
  )
  .openapi(getV1AppInfosIdPrimaryCategoryRoute, getV1AppInfosIdPrimaryCategoryRouteHandler)
  .openapi(
    getV1AppInfosIdPrimarySubcategoryOneRoute,
    getV1AppInfosIdPrimarySubcategoryOneRouteHandler,
  )
  .openapi(
    getV1AppInfosIdPrimarySubcategoryTwoRoute,
    getV1AppInfosIdPrimarySubcategoryTwoRouteHandler,
  )
  .openapi(getV1AppInfosIdSecondaryCategoryRoute, getV1AppInfosIdSecondaryCategoryRouteHandler)
  .openapi(
    getV1AppInfosIdSecondarySubcategoryOneRoute,
    getV1AppInfosIdSecondarySubcategoryOneRouteHandler,
  )
  .openapi(
    getV1AppInfosIdSecondarySubcategoryTwoRoute,
    getV1AppInfosIdSecondarySubcategoryTwoRouteHandler,
  )
  .openapi(postV1AppPreOrdersRoute, postV1AppPreOrdersRouteHandler)
  .openapi(deleteV1AppPreOrdersIdRoute, deleteV1AppPreOrdersIdRouteHandler)
  .openapi(getV1AppPreOrdersIdRoute, getV1AppPreOrdersIdRouteHandler)
  .openapi(patchV1AppPreOrdersIdRoute, patchV1AppPreOrdersIdRouteHandler)
  .openapi(postV1AppPreviewSetsRoute, postV1AppPreviewSetsRouteHandler)
  .openapi(deleteV1AppPreviewSetsIdRoute, deleteV1AppPreviewSetsIdRouteHandler)
  .openapi(getV1AppPreviewSetsIdRoute, getV1AppPreviewSetsIdRouteHandler)
  .openapi(getV1AppPreviewSetsIdAppPreviewsRoute, getV1AppPreviewSetsIdAppPreviewsRouteHandler)
  .openapi(
    getV1AppPreviewSetsIdRelationshipsAppPreviewsRoute,
    getV1AppPreviewSetsIdRelationshipsAppPreviewsRouteHandler,
  )
  .openapi(
    patchV1AppPreviewSetsIdRelationshipsAppPreviewsRoute,
    patchV1AppPreviewSetsIdRelationshipsAppPreviewsRouteHandler,
  )
  .openapi(postV1AppPreviewsRoute, postV1AppPreviewsRouteHandler)
  .openapi(deleteV1AppPreviewsIdRoute, deleteV1AppPreviewsIdRouteHandler)
  .openapi(getV1AppPreviewsIdRoute, getV1AppPreviewsIdRouteHandler)
  .openapi(patchV1AppPreviewsIdRoute, patchV1AppPreviewsIdRouteHandler)
  .openapi(getV1AppPricePointsRoute, getV1AppPricePointsRouteHandler)
  .openapi(getV1AppPricePointsIdRoute, getV1AppPricePointsIdRouteHandler)
  .openapi(getV1AppPricePointsIdTerritoryRoute, getV1AppPricePointsIdTerritoryRouteHandler)
  .openapi(getV1AppPriceTiersRoute, getV1AppPriceTiersRouteHandler)
  .openapi(getV1AppPriceTiersIdRoute, getV1AppPriceTiersIdRouteHandler)
  .openapi(getV1AppPriceTiersIdPricePointsRoute, getV1AppPriceTiersIdPricePointsRouteHandler)
  .openapi(getV1AppPricesIdRoute, getV1AppPricesIdRouteHandler)
  .openapi(postV1AppScreenshotSetsRoute, postV1AppScreenshotSetsRouteHandler)
  .openapi(deleteV1AppScreenshotSetsIdRoute, deleteV1AppScreenshotSetsIdRouteHandler)
  .openapi(getV1AppScreenshotSetsIdRoute, getV1AppScreenshotSetsIdRouteHandler)
  .openapi(
    getV1AppScreenshotSetsIdAppScreenshotsRoute,
    getV1AppScreenshotSetsIdAppScreenshotsRouteHandler,
  )
  .openapi(
    getV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute,
    getV1AppScreenshotSetsIdRelationshipsAppScreenshotsRouteHandler,
  )
  .openapi(
    patchV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute,
    patchV1AppScreenshotSetsIdRelationshipsAppScreenshotsRouteHandler,
  )
  .openapi(postV1AppScreenshotsRoute, postV1AppScreenshotsRouteHandler)
  .openapi(deleteV1AppScreenshotsIdRoute, deleteV1AppScreenshotsIdRouteHandler)
  .openapi(getV1AppScreenshotsIdRoute, getV1AppScreenshotsIdRouteHandler)
  .openapi(patchV1AppScreenshotsIdRoute, patchV1AppScreenshotsIdRouteHandler)
  .openapi(postV1AppStoreReviewAttachmentsRoute, postV1AppStoreReviewAttachmentsRouteHandler)
  .openapi(
    deleteV1AppStoreReviewAttachmentsIdRoute,
    deleteV1AppStoreReviewAttachmentsIdRouteHandler,
  )
  .openapi(getV1AppStoreReviewAttachmentsIdRoute, getV1AppStoreReviewAttachmentsIdRouteHandler)
  .openapi(patchV1AppStoreReviewAttachmentsIdRoute, patchV1AppStoreReviewAttachmentsIdRouteHandler)
  .openapi(postV1AppStoreReviewDetailsRoute, postV1AppStoreReviewDetailsRouteHandler)
  .openapi(getV1AppStoreReviewDetailsIdRoute, getV1AppStoreReviewDetailsIdRouteHandler)
  .openapi(patchV1AppStoreReviewDetailsIdRoute, patchV1AppStoreReviewDetailsIdRouteHandler)
  .openapi(
    getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsRoute,
    getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsRouteHandler,
  )
  .openapi(postV1AppStoreVersionLocalizationsRoute, postV1AppStoreVersionLocalizationsRouteHandler)
  .openapi(
    deleteV1AppStoreVersionLocalizationsIdRoute,
    deleteV1AppStoreVersionLocalizationsIdRouteHandler,
  )
  .openapi(
    getV1AppStoreVersionLocalizationsIdRoute,
    getV1AppStoreVersionLocalizationsIdRouteHandler,
  )
  .openapi(
    patchV1AppStoreVersionLocalizationsIdRoute,
    patchV1AppStoreVersionLocalizationsIdRouteHandler,
  )
  .openapi(
    getV1AppStoreVersionLocalizationsIdAppPreviewSetsRoute,
    getV1AppStoreVersionLocalizationsIdAppPreviewSetsRouteHandler,
  )
  .openapi(
    getV1AppStoreVersionLocalizationsIdAppScreenshotSetsRoute,
    getV1AppStoreVersionLocalizationsIdAppScreenshotSetsRouteHandler,
  )
  .openapi(
    postV1AppStoreVersionPhasedReleasesRoute,
    postV1AppStoreVersionPhasedReleasesRouteHandler,
  )
  .openapi(
    deleteV1AppStoreVersionPhasedReleasesIdRoute,
    deleteV1AppStoreVersionPhasedReleasesIdRouteHandler,
  )
  .openapi(
    patchV1AppStoreVersionPhasedReleasesIdRoute,
    patchV1AppStoreVersionPhasedReleasesIdRouteHandler,
  )
  .openapi(postV1AppStoreVersionSubmissionsRoute, postV1AppStoreVersionSubmissionsRouteHandler)
  .openapi(
    deleteV1AppStoreVersionSubmissionsIdRoute,
    deleteV1AppStoreVersionSubmissionsIdRouteHandler,
  )
  .openapi(postV1AppStoreVersionsRoute, postV1AppStoreVersionsRouteHandler)
  .openapi(deleteV1AppStoreVersionsIdRoute, deleteV1AppStoreVersionsIdRouteHandler)
  .openapi(getV1AppStoreVersionsIdRoute, getV1AppStoreVersionsIdRouteHandler)
  .openapi(patchV1AppStoreVersionsIdRoute, patchV1AppStoreVersionsIdRouteHandler)
  .openapi(
    getV1AppStoreVersionsIdAgeRatingDeclarationRoute,
    getV1AppStoreVersionsIdAgeRatingDeclarationRouteHandler,
  )
  .openapi(
    getV1AppStoreVersionsIdAppStoreReviewDetailRoute,
    getV1AppStoreVersionsIdAppStoreReviewDetailRouteHandler,
  )
  .openapi(
    getV1AppStoreVersionsIdAppStoreVersionLocalizationsRoute,
    getV1AppStoreVersionsIdAppStoreVersionLocalizationsRouteHandler,
  )
  .openapi(
    getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseRoute,
    getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseRouteHandler,
  )
  .openapi(
    getV1AppStoreVersionsIdAppStoreVersionSubmissionRoute,
    getV1AppStoreVersionsIdAppStoreVersionSubmissionRouteHandler,
  )
  .openapi(getV1AppStoreVersionsIdBuildRoute, getV1AppStoreVersionsIdBuildRouteHandler)
  .openapi(
    getV1AppStoreVersionsIdIdfaDeclarationRoute,
    getV1AppStoreVersionsIdIdfaDeclarationRouteHandler,
  )
  .openapi(
    getV1AppStoreVersionsIdRelationshipsBuildRoute,
    getV1AppStoreVersionsIdRelationshipsBuildRouteHandler,
  )
  .openapi(
    patchV1AppStoreVersionsIdRelationshipsBuildRoute,
    patchV1AppStoreVersionsIdRelationshipsBuildRouteHandler,
  )
  .openapi(
    getV1AppStoreVersionsIdRoutingAppCoverageRoute,
    getV1AppStoreVersionsIdRoutingAppCoverageRouteHandler,
  )
  .openapi(getV1AppsRoute, getV1AppsRouteHandler)
  .openapi(getV1AppsIdRoute, getV1AppsIdRouteHandler)
  .openapi(patchV1AppsIdRoute, patchV1AppsIdRouteHandler)
  .openapi(getV1AppsIdAppInfosRoute, getV1AppsIdAppInfosRouteHandler)
  .openapi(getV1AppsIdAppStoreVersionsRoute, getV1AppsIdAppStoreVersionsRouteHandler)
  .openapi(getV1AppsIdAvailableTerritoriesRoute, getV1AppsIdAvailableTerritoriesRouteHandler)
  .openapi(getV1AppsIdBetaAppLocalizationsRoute, getV1AppsIdBetaAppLocalizationsRouteHandler)
  .openapi(getV1AppsIdBetaAppReviewDetailRoute, getV1AppsIdBetaAppReviewDetailRouteHandler)
  .openapi(getV1AppsIdBetaGroupsRoute, getV1AppsIdBetaGroupsRouteHandler)
  .openapi(getV1AppsIdBetaLicenseAgreementRoute, getV1AppsIdBetaLicenseAgreementRouteHandler)
  .openapi(getV1AppsIdBuildsRoute, getV1AppsIdBuildsRouteHandler)
  .openapi(getV1AppsIdEndUserLicenseAgreementRoute, getV1AppsIdEndUserLicenseAgreementRouteHandler)
  .openapi(
    getV1AppsIdGameCenterEnabledVersionsRoute,
    getV1AppsIdGameCenterEnabledVersionsRouteHandler,
  )
  .openapi(getV1AppsIdInAppPurchasesRoute, getV1AppsIdInAppPurchasesRouteHandler)
  .openapi(getV1AppsIdPerfPowerMetricsRoute, getV1AppsIdPerfPowerMetricsRouteHandler)
  .openapi(getV1AppsIdPreOrderRoute, getV1AppsIdPreOrderRouteHandler)
  .openapi(getV1AppsIdPreReleaseVersionsRoute, getV1AppsIdPreReleaseVersionsRouteHandler)
  .openapi(getV1AppsIdPricesRoute, getV1AppsIdPricesRouteHandler)
  .openapi(
    deleteV1AppsIdRelationshipsBetaTestersRoute,
    deleteV1AppsIdRelationshipsBetaTestersRouteHandler,
  )
  .openapi(getV1BetaAppLocalizationsRoute, getV1BetaAppLocalizationsRouteHandler)
  .openapi(postV1BetaAppLocalizationsRoute, postV1BetaAppLocalizationsRouteHandler)
  .openapi(deleteV1BetaAppLocalizationsIdRoute, deleteV1BetaAppLocalizationsIdRouteHandler)
  .openapi(getV1BetaAppLocalizationsIdRoute, getV1BetaAppLocalizationsIdRouteHandler)
  .openapi(patchV1BetaAppLocalizationsIdRoute, patchV1BetaAppLocalizationsIdRouteHandler)
  .openapi(getV1BetaAppLocalizationsIdAppRoute, getV1BetaAppLocalizationsIdAppRouteHandler)
  .openapi(getV1BetaAppReviewDetailsRoute, getV1BetaAppReviewDetailsRouteHandler)
  .openapi(getV1BetaAppReviewDetailsIdRoute, getV1BetaAppReviewDetailsIdRouteHandler)
  .openapi(patchV1BetaAppReviewDetailsIdRoute, patchV1BetaAppReviewDetailsIdRouteHandler)
  .openapi(getV1BetaAppReviewDetailsIdAppRoute, getV1BetaAppReviewDetailsIdAppRouteHandler)
  .openapi(getV1BetaAppReviewSubmissionsRoute, getV1BetaAppReviewSubmissionsRouteHandler)
  .openapi(postV1BetaAppReviewSubmissionsRoute, postV1BetaAppReviewSubmissionsRouteHandler)
  .openapi(getV1BetaAppReviewSubmissionsIdRoute, getV1BetaAppReviewSubmissionsIdRouteHandler)
  .openapi(
    getV1BetaAppReviewSubmissionsIdBuildRoute,
    getV1BetaAppReviewSubmissionsIdBuildRouteHandler,
  )
  .openapi(getV1BetaBuildLocalizationsRoute, getV1BetaBuildLocalizationsRouteHandler)
  .openapi(postV1BetaBuildLocalizationsRoute, postV1BetaBuildLocalizationsRouteHandler)
  .openapi(deleteV1BetaBuildLocalizationsIdRoute, deleteV1BetaBuildLocalizationsIdRouteHandler)
  .openapi(getV1BetaBuildLocalizationsIdRoute, getV1BetaBuildLocalizationsIdRouteHandler)
  .openapi(patchV1BetaBuildLocalizationsIdRoute, patchV1BetaBuildLocalizationsIdRouteHandler)
  .openapi(getV1BetaBuildLocalizationsIdBuildRoute, getV1BetaBuildLocalizationsIdBuildRouteHandler)
  .openapi(getV1BetaGroupsRoute, getV1BetaGroupsRouteHandler)
  .openapi(postV1BetaGroupsRoute, postV1BetaGroupsRouteHandler)
  .openapi(deleteV1BetaGroupsIdRoute, deleteV1BetaGroupsIdRouteHandler)
  .openapi(getV1BetaGroupsIdRoute, getV1BetaGroupsIdRouteHandler)
  .openapi(patchV1BetaGroupsIdRoute, patchV1BetaGroupsIdRouteHandler)
  .openapi(getV1BetaGroupsIdAppRoute, getV1BetaGroupsIdAppRouteHandler)
  .openapi(getV1BetaGroupsIdBetaTestersRoute, getV1BetaGroupsIdBetaTestersRouteHandler)
  .openapi(getV1BetaGroupsIdBuildsRoute, getV1BetaGroupsIdBuildsRouteHandler)
  .openapi(
    deleteV1BetaGroupsIdRelationshipsBetaTestersRoute,
    deleteV1BetaGroupsIdRelationshipsBetaTestersRouteHandler,
  )
  .openapi(
    getV1BetaGroupsIdRelationshipsBetaTestersRoute,
    getV1BetaGroupsIdRelationshipsBetaTestersRouteHandler,
  )
  .openapi(
    postV1BetaGroupsIdRelationshipsBetaTestersRoute,
    postV1BetaGroupsIdRelationshipsBetaTestersRouteHandler,
  )
  .openapi(
    deleteV1BetaGroupsIdRelationshipsBuildsRoute,
    deleteV1BetaGroupsIdRelationshipsBuildsRouteHandler,
  )
  .openapi(
    getV1BetaGroupsIdRelationshipsBuildsRoute,
    getV1BetaGroupsIdRelationshipsBuildsRouteHandler,
  )
  .openapi(
    postV1BetaGroupsIdRelationshipsBuildsRoute,
    postV1BetaGroupsIdRelationshipsBuildsRouteHandler,
  )
  .openapi(getV1BetaLicenseAgreementsRoute, getV1BetaLicenseAgreementsRouteHandler)
  .openapi(getV1BetaLicenseAgreementsIdRoute, getV1BetaLicenseAgreementsIdRouteHandler)
  .openapi(patchV1BetaLicenseAgreementsIdRoute, patchV1BetaLicenseAgreementsIdRouteHandler)
  .openapi(getV1BetaLicenseAgreementsIdAppRoute, getV1BetaLicenseAgreementsIdAppRouteHandler)
  .openapi(postV1BetaTesterInvitationsRoute, postV1BetaTesterInvitationsRouteHandler)
  .openapi(getV1BetaTestersRoute, getV1BetaTestersRouteHandler)
  .openapi(postV1BetaTestersRoute, postV1BetaTestersRouteHandler)
  .openapi(deleteV1BetaTestersIdRoute, deleteV1BetaTestersIdRouteHandler)
  .openapi(getV1BetaTestersIdRoute, getV1BetaTestersIdRouteHandler)
  .openapi(getV1BetaTestersIdAppsRoute, getV1BetaTestersIdAppsRouteHandler)
  .openapi(getV1BetaTestersIdBetaGroupsRoute, getV1BetaTestersIdBetaGroupsRouteHandler)
  .openapi(getV1BetaTestersIdBuildsRoute, getV1BetaTestersIdBuildsRouteHandler)
  .openapi(
    deleteV1BetaTestersIdRelationshipsAppsRoute,
    deleteV1BetaTestersIdRelationshipsAppsRouteHandler,
  )
  .openapi(
    getV1BetaTestersIdRelationshipsAppsRoute,
    getV1BetaTestersIdRelationshipsAppsRouteHandler,
  )
  .openapi(
    deleteV1BetaTestersIdRelationshipsBetaGroupsRoute,
    deleteV1BetaTestersIdRelationshipsBetaGroupsRouteHandler,
  )
  .openapi(
    getV1BetaTestersIdRelationshipsBetaGroupsRoute,
    getV1BetaTestersIdRelationshipsBetaGroupsRouteHandler,
  )
  .openapi(
    postV1BetaTestersIdRelationshipsBetaGroupsRoute,
    postV1BetaTestersIdRelationshipsBetaGroupsRouteHandler,
  )
  .openapi(
    deleteV1BetaTestersIdRelationshipsBuildsRoute,
    deleteV1BetaTestersIdRelationshipsBuildsRouteHandler,
  )
  .openapi(
    getV1BetaTestersIdRelationshipsBuildsRoute,
    getV1BetaTestersIdRelationshipsBuildsRouteHandler,
  )
  .openapi(
    postV1BetaTestersIdRelationshipsBuildsRoute,
    postV1BetaTestersIdRelationshipsBuildsRouteHandler,
  )
  .openapi(getV1BuildBetaDetailsRoute, getV1BuildBetaDetailsRouteHandler)
  .openapi(getV1BuildBetaDetailsIdRoute, getV1BuildBetaDetailsIdRouteHandler)
  .openapi(patchV1BuildBetaDetailsIdRoute, patchV1BuildBetaDetailsIdRouteHandler)
  .openapi(getV1BuildBetaDetailsIdBuildRoute, getV1BuildBetaDetailsIdBuildRouteHandler)
  .openapi(postV1BuildBetaNotificationsRoute, postV1BuildBetaNotificationsRouteHandler)
  .openapi(getV1BuildsRoute, getV1BuildsRouteHandler)
  .openapi(getV1BuildsIdRoute, getV1BuildsIdRouteHandler)
  .openapi(patchV1BuildsIdRoute, patchV1BuildsIdRouteHandler)
  .openapi(getV1BuildsIdAppRoute, getV1BuildsIdAppRouteHandler)
  .openapi(
    getV1BuildsIdAppEncryptionDeclarationRoute,
    getV1BuildsIdAppEncryptionDeclarationRouteHandler,
  )
  .openapi(getV1BuildsIdAppStoreVersionRoute, getV1BuildsIdAppStoreVersionRouteHandler)
  .openapi(
    getV1BuildsIdBetaAppReviewSubmissionRoute,
    getV1BuildsIdBetaAppReviewSubmissionRouteHandler,
  )
  .openapi(
    getV1BuildsIdBetaBuildLocalizationsRoute,
    getV1BuildsIdBetaBuildLocalizationsRouteHandler,
  )
  .openapi(getV1BuildsIdBuildBetaDetailRoute, getV1BuildsIdBuildBetaDetailRouteHandler)
  .openapi(getV1BuildsIdDiagnosticSignaturesRoute, getV1BuildsIdDiagnosticSignaturesRouteHandler)
  .openapi(getV1BuildsIdIconsRoute, getV1BuildsIdIconsRouteHandler)
  .openapi(getV1BuildsIdIndividualTestersRoute, getV1BuildsIdIndividualTestersRouteHandler)
  .openapi(getV1BuildsIdPerfPowerMetricsRoute, getV1BuildsIdPerfPowerMetricsRouteHandler)
  .openapi(getV1BuildsIdPreReleaseVersionRoute, getV1BuildsIdPreReleaseVersionRouteHandler)
  .openapi(
    getV1BuildsIdRelationshipsAppEncryptionDeclarationRoute,
    getV1BuildsIdRelationshipsAppEncryptionDeclarationRouteHandler,
  )
  .openapi(
    patchV1BuildsIdRelationshipsAppEncryptionDeclarationRoute,
    patchV1BuildsIdRelationshipsAppEncryptionDeclarationRouteHandler,
  )
  .openapi(
    deleteV1BuildsIdRelationshipsBetaGroupsRoute,
    deleteV1BuildsIdRelationshipsBetaGroupsRouteHandler,
  )
  .openapi(
    postV1BuildsIdRelationshipsBetaGroupsRoute,
    postV1BuildsIdRelationshipsBetaGroupsRouteHandler,
  )
  .openapi(
    deleteV1BuildsIdRelationshipsIndividualTestersRoute,
    deleteV1BuildsIdRelationshipsIndividualTestersRouteHandler,
  )
  .openapi(
    getV1BuildsIdRelationshipsIndividualTestersRoute,
    getV1BuildsIdRelationshipsIndividualTestersRouteHandler,
  )
  .openapi(
    postV1BuildsIdRelationshipsIndividualTestersRoute,
    postV1BuildsIdRelationshipsIndividualTestersRouteHandler,
  )
  .openapi(postV1BundleIdCapabilitiesRoute, postV1BundleIdCapabilitiesRouteHandler)
  .openapi(deleteV1BundleIdCapabilitiesIdRoute, deleteV1BundleIdCapabilitiesIdRouteHandler)
  .openapi(patchV1BundleIdCapabilitiesIdRoute, patchV1BundleIdCapabilitiesIdRouteHandler)
  .openapi(getV1BundleIdsRoute, getV1BundleIdsRouteHandler)
  .openapi(postV1BundleIdsRoute, postV1BundleIdsRouteHandler)
  .openapi(deleteV1BundleIdsIdRoute, deleteV1BundleIdsIdRouteHandler)
  .openapi(getV1BundleIdsIdRoute, getV1BundleIdsIdRouteHandler)
  .openapi(patchV1BundleIdsIdRoute, patchV1BundleIdsIdRouteHandler)
  .openapi(getV1BundleIdsIdAppRoute, getV1BundleIdsIdAppRouteHandler)
  .openapi(
    getV1BundleIdsIdBundleIdCapabilitiesRoute,
    getV1BundleIdsIdBundleIdCapabilitiesRouteHandler,
  )
  .openapi(getV1BundleIdsIdProfilesRoute, getV1BundleIdsIdProfilesRouteHandler)
  .openapi(getV1CertificatesRoute, getV1CertificatesRouteHandler)
  .openapi(postV1CertificatesRoute, postV1CertificatesRouteHandler)
  .openapi(deleteV1CertificatesIdRoute, deleteV1CertificatesIdRouteHandler)
  .openapi(getV1CertificatesIdRoute, getV1CertificatesIdRouteHandler)
  .openapi(getV1DevicesRoute, getV1DevicesRouteHandler)
  .openapi(postV1DevicesRoute, postV1DevicesRouteHandler)
  .openapi(getV1DevicesIdRoute, getV1DevicesIdRouteHandler)
  .openapi(patchV1DevicesIdRoute, patchV1DevicesIdRouteHandler)
  .openapi(getV1DiagnosticSignaturesIdLogsRoute, getV1DiagnosticSignaturesIdLogsRouteHandler)
  .openapi(postV1EndUserLicenseAgreementsRoute, postV1EndUserLicenseAgreementsRouteHandler)
  .openapi(deleteV1EndUserLicenseAgreementsIdRoute, deleteV1EndUserLicenseAgreementsIdRouteHandler)
  .openapi(getV1EndUserLicenseAgreementsIdRoute, getV1EndUserLicenseAgreementsIdRouteHandler)
  .openapi(patchV1EndUserLicenseAgreementsIdRoute, patchV1EndUserLicenseAgreementsIdRouteHandler)
  .openapi(
    getV1EndUserLicenseAgreementsIdTerritoriesRoute,
    getV1EndUserLicenseAgreementsIdTerritoriesRouteHandler,
  )
  .openapi(getV1FinanceReportsRoute, getV1FinanceReportsRouteHandler)
  .openapi(
    getV1GameCenterEnabledVersionsIdCompatibleVersionsRoute,
    getV1GameCenterEnabledVersionsIdCompatibleVersionsRouteHandler,
  )
  .openapi(
    deleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
    deleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler,
  )
  .openapi(
    getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
    getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler,
  )
  .openapi(
    patchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
    patchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler,
  )
  .openapi(
    postV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
    postV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler,
  )
  .openapi(postV1IdfaDeclarationsRoute, postV1IdfaDeclarationsRouteHandler)
  .openapi(deleteV1IdfaDeclarationsIdRoute, deleteV1IdfaDeclarationsIdRouteHandler)
  .openapi(patchV1IdfaDeclarationsIdRoute, patchV1IdfaDeclarationsIdRouteHandler)
  .openapi(getV1InAppPurchasesIdRoute, getV1InAppPurchasesIdRouteHandler)
  .openapi(getV1PreReleaseVersionsRoute, getV1PreReleaseVersionsRouteHandler)
  .openapi(getV1PreReleaseVersionsIdRoute, getV1PreReleaseVersionsIdRouteHandler)
  .openapi(getV1PreReleaseVersionsIdAppRoute, getV1PreReleaseVersionsIdAppRouteHandler)
  .openapi(getV1PreReleaseVersionsIdBuildsRoute, getV1PreReleaseVersionsIdBuildsRouteHandler)
  .openapi(getV1ProfilesRoute, getV1ProfilesRouteHandler)
  .openapi(postV1ProfilesRoute, postV1ProfilesRouteHandler)
  .openapi(deleteV1ProfilesIdRoute, deleteV1ProfilesIdRouteHandler)
  .openapi(getV1ProfilesIdRoute, getV1ProfilesIdRouteHandler)
  .openapi(getV1ProfilesIdBundleIdRoute, getV1ProfilesIdBundleIdRouteHandler)
  .openapi(getV1ProfilesIdCertificatesRoute, getV1ProfilesIdCertificatesRouteHandler)
  .openapi(getV1ProfilesIdDevicesRoute, getV1ProfilesIdDevicesRouteHandler)
  .openapi(postV1RoutingAppCoveragesRoute, postV1RoutingAppCoveragesRouteHandler)
  .openapi(deleteV1RoutingAppCoveragesIdRoute, deleteV1RoutingAppCoveragesIdRouteHandler)
  .openapi(getV1RoutingAppCoveragesIdRoute, getV1RoutingAppCoveragesIdRouteHandler)
  .openapi(patchV1RoutingAppCoveragesIdRoute, patchV1RoutingAppCoveragesIdRouteHandler)
  .openapi(getV1SalesReportsRoute, getV1SalesReportsRouteHandler)
  .openapi(getV1TerritoriesRoute, getV1TerritoriesRouteHandler)
  .openapi(getV1UserInvitationsRoute, getV1UserInvitationsRouteHandler)
  .openapi(postV1UserInvitationsRoute, postV1UserInvitationsRouteHandler)
  .openapi(deleteV1UserInvitationsIdRoute, deleteV1UserInvitationsIdRouteHandler)
  .openapi(getV1UserInvitationsIdRoute, getV1UserInvitationsIdRouteHandler)
  .openapi(getV1UserInvitationsIdVisibleAppsRoute, getV1UserInvitationsIdVisibleAppsRouteHandler)
  .openapi(getV1UsersRoute, getV1UsersRouteHandler)
  .openapi(deleteV1UsersIdRoute, deleteV1UsersIdRouteHandler)
  .openapi(getV1UsersIdRoute, getV1UsersIdRouteHandler)
  .openapi(patchV1UsersIdRoute, patchV1UsersIdRouteHandler)
  .openapi(
    deleteV1UsersIdRelationshipsVisibleAppsRoute,
    deleteV1UsersIdRelationshipsVisibleAppsRouteHandler,
  )
  .openapi(
    getV1UsersIdRelationshipsVisibleAppsRoute,
    getV1UsersIdRelationshipsVisibleAppsRouteHandler,
  )
  .openapi(
    patchV1UsersIdRelationshipsVisibleAppsRoute,
    patchV1UsersIdRelationshipsVisibleAppsRouteHandler,
  )
  .openapi(
    postV1UsersIdRelationshipsVisibleAppsRoute,
    postV1UsersIdRelationshipsVisibleAppsRouteHandler,
  )
  .openapi(getV1UsersIdVisibleAppsRoute, getV1UsersIdVisibleAppsRouteHandler)

export default app
