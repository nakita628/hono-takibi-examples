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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(patchV1AgeRatingDeclarationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppCategoriesIdParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppCategoriesIdSubcategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppEncryptionDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppEncryptionDeclarationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppEncryptionDeclarationsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppEncryptionDeclarationsIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppInfoLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppInfoLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfoLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppInfoLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppInfosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdAgeRatingDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdAppInfoLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdPrimaryCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdPrimarySubcategoryOneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdPrimarySubcategoryTwoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdSecondaryCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdSecondarySubcategoryOneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdSecondarySubcategoryTwoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppPreOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppPreOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPreOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppPreOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppPreviewSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppPreviewSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPreviewSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPreviewSetsIdAppPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPreviewSetsIdRelationshipsAppPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppPreviewSetsIdRelationshipsAppPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppPreviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPreviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppPreviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPricePointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPricePointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPricePointsIdTerritoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPriceTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPriceTiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPriceTiersIdPricePointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPricesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppScreenshotSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppScreenshotSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppScreenshotSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppScreenshotSetsIdAppScreenshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppScreenshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppScreenshotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppScreenshotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppScreenshotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppStoreReviewAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppStoreReviewAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreReviewAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreReviewAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppStoreReviewDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreReviewDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreReviewDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppStoreVersionLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppStoreVersionLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreVersionLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionLocalizationsIdAppPreviewSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionLocalizationsIdAppScreenshotSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppStoreVersionPhasedReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppStoreVersionPhasedReleasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreVersionPhasedReleasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppStoreVersionSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppStoreVersionSubmissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppStoreVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppStoreVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdAgeRatingDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdAppStoreReviewDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdAppStoreVersionLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdAppStoreVersionSubmissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdIdfaDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdRelationshipsBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreVersionsIdRelationshipsBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdRoutingAppCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdAppInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdAppStoreVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdAvailableTerritoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdBetaAppLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdBetaAppReviewDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdBetaLicenseAgreementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdEndUserLicenseAgreementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdGameCenterEnabledVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdInAppPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdPerfPowerMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdPreOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdPreReleaseVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsIdRelationshipsBetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaAppLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaAppLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BetaAppLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppLocalizationsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppReviewDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppReviewDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BetaAppReviewDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppReviewDetailsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppReviewSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaAppReviewSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppReviewSubmissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppReviewSubmissionsIdBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaBuildLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaBuildLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaBuildLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaBuildLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BetaBuildLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaBuildLocalizationsIdBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BetaGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdBetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaGroupsIdRelationshipsBetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdRelationshipsBetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaGroupsIdRelationshipsBetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaGroupsIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaGroupsIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaLicenseAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaLicenseAgreementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BetaLicenseAgreementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaLicenseAgreementsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaTesterInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaTestersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaTestersIdRelationshipsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdRelationshipsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaTestersIdRelationshipsBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdRelationshipsBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaTestersIdRelationshipsBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaTestersIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaTestersIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildBetaDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildBetaDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BuildBetaDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildBetaDetailsIdBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BuildBetaNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BuildsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdAppEncryptionDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdAppStoreVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdBetaAppReviewSubmissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdBetaBuildLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdBuildBetaDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdDiagnosticSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdIconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdIndividualTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdPerfPowerMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdPreReleaseVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdRelationshipsAppEncryptionDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BuildsIdRelationshipsAppEncryptionDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BuildsIdRelationshipsBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BuildsIdRelationshipsBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BuildsIdRelationshipsIndividualTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdRelationshipsIndividualTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BuildsIdRelationshipsIndividualTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BundleIdCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BundleIdCapabilitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BundleIdCapabilitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BundleIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BundleIdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleIdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BundleIdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleIdsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleIdsIdBundleIdCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleIdsIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DiagnosticSignaturesIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EndUserLicenseAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EndUserLicenseAgreementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EndUserLicenseAgreementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EndUserLicenseAgreementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EndUserLicenseAgreementsIdTerritoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GameCenterEnabledVersionsIdCompatibleVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IdfaDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IdfaDeclarationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1IdfaDeclarationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InAppPurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PreReleaseVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PreReleaseVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PreReleaseVersionsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PreReleaseVersionsIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProfilesIdBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProfilesIdCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProfilesIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RoutingAppCoveragesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RoutingAppCoveragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RoutingAppCoveragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1RoutingAppCoveragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TerritoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UserInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserInvitationsIdVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersIdRelationshipsVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersIdRelationshipsVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1UsersIdRelationshipsVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersIdRelationshipsVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersIdVisibleAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
