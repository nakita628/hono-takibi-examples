import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const patchV1AgeRatingDeclarationsIdRouteHandler: RouteHandler<
  typeof patchV1AgeRatingDeclarationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppCategoriesRouteHandler: RouteHandler<typeof getV1AppCategoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AppCategoriesIdRouteHandler: RouteHandler<
  typeof getV1AppCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppCategoriesIdParentRouteHandler: RouteHandler<
  typeof getV1AppCategoriesIdParentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppCategoriesIdSubcategoriesRouteHandler: RouteHandler<
  typeof getV1AppCategoriesIdSubcategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppEncryptionDeclarationsRouteHandler: RouteHandler<
  typeof getV1AppEncryptionDeclarationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppEncryptionDeclarationsIdRouteHandler: RouteHandler<
  typeof getV1AppEncryptionDeclarationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppEncryptionDeclarationsIdAppRouteHandler: RouteHandler<
  typeof getV1AppEncryptionDeclarationsIdAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppEncryptionDeclarationsIdRelationshipsBuildsRouteHandler: RouteHandler<
  typeof postV1AppEncryptionDeclarationsIdRelationshipsBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppInfoLocalizationsRouteHandler: RouteHandler<
  typeof postV1AppInfoLocalizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppInfoLocalizationsIdRouteHandler: RouteHandler<
  typeof deleteV1AppInfoLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppInfoLocalizationsIdRouteHandler: RouteHandler<
  typeof getV1AppInfoLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppInfoLocalizationsIdRouteHandler: RouteHandler<
  typeof patchV1AppInfoLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppInfosIdRouteHandler: RouteHandler<typeof getV1AppInfosIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppInfosIdRouteHandler: RouteHandler<typeof patchV1AppInfosIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AppInfosIdAgeRatingDeclarationRouteHandler: RouteHandler<
  typeof getV1AppInfosIdAgeRatingDeclarationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppInfosIdAppInfoLocalizationsRouteHandler: RouteHandler<
  typeof getV1AppInfosIdAppInfoLocalizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppInfosIdPrimaryCategoryRouteHandler: RouteHandler<
  typeof getV1AppInfosIdPrimaryCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppInfosIdPrimarySubcategoryOneRouteHandler: RouteHandler<
  typeof getV1AppInfosIdPrimarySubcategoryOneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppInfosIdPrimarySubcategoryTwoRouteHandler: RouteHandler<
  typeof getV1AppInfosIdPrimarySubcategoryTwoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppInfosIdSecondaryCategoryRouteHandler: RouteHandler<
  typeof getV1AppInfosIdSecondaryCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppInfosIdSecondarySubcategoryOneRouteHandler: RouteHandler<
  typeof getV1AppInfosIdSecondarySubcategoryOneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppInfosIdSecondarySubcategoryTwoRouteHandler: RouteHandler<
  typeof getV1AppInfosIdSecondarySubcategoryTwoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppPreOrdersRouteHandler: RouteHandler<typeof postV1AppPreOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1AppPreOrdersIdRouteHandler: RouteHandler<
  typeof deleteV1AppPreOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPreOrdersIdRouteHandler: RouteHandler<
  typeof getV1AppPreOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppPreOrdersIdRouteHandler: RouteHandler<
  typeof patchV1AppPreOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppPreviewSetsRouteHandler: RouteHandler<
  typeof postV1AppPreviewSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppPreviewSetsIdRouteHandler: RouteHandler<
  typeof deleteV1AppPreviewSetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPreviewSetsIdRouteHandler: RouteHandler<
  typeof getV1AppPreviewSetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPreviewSetsIdAppPreviewsRouteHandler: RouteHandler<
  typeof getV1AppPreviewSetsIdAppPreviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPreviewSetsIdRelationshipsAppPreviewsRouteHandler: RouteHandler<
  typeof getV1AppPreviewSetsIdRelationshipsAppPreviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppPreviewSetsIdRelationshipsAppPreviewsRouteHandler: RouteHandler<
  typeof patchV1AppPreviewSetsIdRelationshipsAppPreviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppPreviewsRouteHandler: RouteHandler<typeof postV1AppPreviewsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1AppPreviewsIdRouteHandler: RouteHandler<
  typeof deleteV1AppPreviewsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPreviewsIdRouteHandler: RouteHandler<typeof getV1AppPreviewsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchV1AppPreviewsIdRouteHandler: RouteHandler<
  typeof patchV1AppPreviewsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPricePointsRouteHandler: RouteHandler<
  typeof getV1AppPricePointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPricePointsIdRouteHandler: RouteHandler<
  typeof getV1AppPricePointsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPricePointsIdTerritoryRouteHandler: RouteHandler<
  typeof getV1AppPricePointsIdTerritoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPriceTiersRouteHandler: RouteHandler<typeof getV1AppPriceTiersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AppPriceTiersIdRouteHandler: RouteHandler<
  typeof getV1AppPriceTiersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPriceTiersIdPricePointsRouteHandler: RouteHandler<
  typeof getV1AppPriceTiersIdPricePointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppPricesIdRouteHandler: RouteHandler<typeof getV1AppPricesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AppScreenshotSetsRouteHandler: RouteHandler<
  typeof postV1AppScreenshotSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppScreenshotSetsIdRouteHandler: RouteHandler<
  typeof deleteV1AppScreenshotSetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppScreenshotSetsIdRouteHandler: RouteHandler<
  typeof getV1AppScreenshotSetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppScreenshotSetsIdAppScreenshotsRouteHandler: RouteHandler<
  typeof getV1AppScreenshotSetsIdAppScreenshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppScreenshotSetsIdRelationshipsAppScreenshotsRouteHandler: RouteHandler<
  typeof getV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppScreenshotSetsIdRelationshipsAppScreenshotsRouteHandler: RouteHandler<
  typeof patchV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppScreenshotsRouteHandler: RouteHandler<
  typeof postV1AppScreenshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppScreenshotsIdRouteHandler: RouteHandler<
  typeof deleteV1AppScreenshotsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppScreenshotsIdRouteHandler: RouteHandler<
  typeof getV1AppScreenshotsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppScreenshotsIdRouteHandler: RouteHandler<
  typeof patchV1AppScreenshotsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppStoreReviewAttachmentsRouteHandler: RouteHandler<
  typeof postV1AppStoreReviewAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppStoreReviewAttachmentsIdRouteHandler: RouteHandler<
  typeof deleteV1AppStoreReviewAttachmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreReviewAttachmentsIdRouteHandler: RouteHandler<
  typeof getV1AppStoreReviewAttachmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppStoreReviewAttachmentsIdRouteHandler: RouteHandler<
  typeof patchV1AppStoreReviewAttachmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppStoreReviewDetailsRouteHandler: RouteHandler<
  typeof postV1AppStoreReviewDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreReviewDetailsIdRouteHandler: RouteHandler<
  typeof getV1AppStoreReviewDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppStoreReviewDetailsIdRouteHandler: RouteHandler<
  typeof patchV1AppStoreReviewDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsRouteHandler: RouteHandler<
  typeof getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppStoreVersionLocalizationsRouteHandler: RouteHandler<
  typeof postV1AppStoreVersionLocalizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppStoreVersionLocalizationsIdRouteHandler: RouteHandler<
  typeof deleteV1AppStoreVersionLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionLocalizationsIdRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppStoreVersionLocalizationsIdRouteHandler: RouteHandler<
  typeof patchV1AppStoreVersionLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionLocalizationsIdAppPreviewSetsRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionLocalizationsIdAppPreviewSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionLocalizationsIdAppScreenshotSetsRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionLocalizationsIdAppScreenshotSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppStoreVersionPhasedReleasesRouteHandler: RouteHandler<
  typeof postV1AppStoreVersionPhasedReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppStoreVersionPhasedReleasesIdRouteHandler: RouteHandler<
  typeof deleteV1AppStoreVersionPhasedReleasesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppStoreVersionPhasedReleasesIdRouteHandler: RouteHandler<
  typeof patchV1AppStoreVersionPhasedReleasesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppStoreVersionSubmissionsRouteHandler: RouteHandler<
  typeof postV1AppStoreVersionSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppStoreVersionSubmissionsIdRouteHandler: RouteHandler<
  typeof deleteV1AppStoreVersionSubmissionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppStoreVersionsRouteHandler: RouteHandler<
  typeof postV1AppStoreVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppStoreVersionsIdRouteHandler: RouteHandler<
  typeof deleteV1AppStoreVersionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionsIdRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppStoreVersionsIdRouteHandler: RouteHandler<
  typeof patchV1AppStoreVersionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionsIdAgeRatingDeclarationRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionsIdAgeRatingDeclarationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionsIdAppStoreReviewDetailRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionsIdAppStoreReviewDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionsIdAppStoreVersionLocalizationsRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionsIdAppStoreVersionLocalizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionsIdAppStoreVersionSubmissionRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionsIdAppStoreVersionSubmissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionsIdBuildRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionsIdBuildRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionsIdIdfaDeclarationRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionsIdIdfaDeclarationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionsIdRelationshipsBuildRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionsIdRelationshipsBuildRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppStoreVersionsIdRelationshipsBuildRouteHandler: RouteHandler<
  typeof patchV1AppStoreVersionsIdRelationshipsBuildRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppStoreVersionsIdRoutingAppCoverageRouteHandler: RouteHandler<
  typeof getV1AppStoreVersionsIdRoutingAppCoverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsRouteHandler: RouteHandler<typeof getV1AppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdRouteHandler: RouteHandler<typeof getV1AppsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AppsIdRouteHandler: RouteHandler<typeof patchV1AppsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdAppInfosRouteHandler: RouteHandler<
  typeof getV1AppsIdAppInfosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdAppStoreVersionsRouteHandler: RouteHandler<
  typeof getV1AppsIdAppStoreVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdAvailableTerritoriesRouteHandler: RouteHandler<
  typeof getV1AppsIdAvailableTerritoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdBetaAppLocalizationsRouteHandler: RouteHandler<
  typeof getV1AppsIdBetaAppLocalizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdBetaAppReviewDetailRouteHandler: RouteHandler<
  typeof getV1AppsIdBetaAppReviewDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdBetaGroupsRouteHandler: RouteHandler<
  typeof getV1AppsIdBetaGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdBetaLicenseAgreementRouteHandler: RouteHandler<
  typeof getV1AppsIdBetaLicenseAgreementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdBuildsRouteHandler: RouteHandler<typeof getV1AppsIdBuildsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdEndUserLicenseAgreementRouteHandler: RouteHandler<
  typeof getV1AppsIdEndUserLicenseAgreementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdGameCenterEnabledVersionsRouteHandler: RouteHandler<
  typeof getV1AppsIdGameCenterEnabledVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdInAppPurchasesRouteHandler: RouteHandler<
  typeof getV1AppsIdInAppPurchasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdPerfPowerMetricsRouteHandler: RouteHandler<
  typeof getV1AppsIdPerfPowerMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdPreOrderRouteHandler: RouteHandler<
  typeof getV1AppsIdPreOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdPreReleaseVersionsRouteHandler: RouteHandler<
  typeof getV1AppsIdPreReleaseVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsIdPricesRouteHandler: RouteHandler<typeof getV1AppsIdPricesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsIdRelationshipsBetaTestersRouteHandler: RouteHandler<
  typeof deleteV1AppsIdRelationshipsBetaTestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaAppLocalizationsRouteHandler: RouteHandler<
  typeof getV1BetaAppLocalizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BetaAppLocalizationsRouteHandler: RouteHandler<
  typeof postV1BetaAppLocalizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BetaAppLocalizationsIdRouteHandler: RouteHandler<
  typeof deleteV1BetaAppLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaAppLocalizationsIdRouteHandler: RouteHandler<
  typeof getV1BetaAppLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1BetaAppLocalizationsIdRouteHandler: RouteHandler<
  typeof patchV1BetaAppLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaAppLocalizationsIdAppRouteHandler: RouteHandler<
  typeof getV1BetaAppLocalizationsIdAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaAppReviewDetailsRouteHandler: RouteHandler<
  typeof getV1BetaAppReviewDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaAppReviewDetailsIdRouteHandler: RouteHandler<
  typeof getV1BetaAppReviewDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1BetaAppReviewDetailsIdRouteHandler: RouteHandler<
  typeof patchV1BetaAppReviewDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaAppReviewDetailsIdAppRouteHandler: RouteHandler<
  typeof getV1BetaAppReviewDetailsIdAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaAppReviewSubmissionsRouteHandler: RouteHandler<
  typeof getV1BetaAppReviewSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BetaAppReviewSubmissionsRouteHandler: RouteHandler<
  typeof postV1BetaAppReviewSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaAppReviewSubmissionsIdRouteHandler: RouteHandler<
  typeof getV1BetaAppReviewSubmissionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaAppReviewSubmissionsIdBuildRouteHandler: RouteHandler<
  typeof getV1BetaAppReviewSubmissionsIdBuildRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaBuildLocalizationsRouteHandler: RouteHandler<
  typeof getV1BetaBuildLocalizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BetaBuildLocalizationsRouteHandler: RouteHandler<
  typeof postV1BetaBuildLocalizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BetaBuildLocalizationsIdRouteHandler: RouteHandler<
  typeof deleteV1BetaBuildLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaBuildLocalizationsIdRouteHandler: RouteHandler<
  typeof getV1BetaBuildLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1BetaBuildLocalizationsIdRouteHandler: RouteHandler<
  typeof patchV1BetaBuildLocalizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaBuildLocalizationsIdBuildRouteHandler: RouteHandler<
  typeof getV1BetaBuildLocalizationsIdBuildRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaGroupsRouteHandler: RouteHandler<typeof getV1BetaGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BetaGroupsRouteHandler: RouteHandler<typeof postV1BetaGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1BetaGroupsIdRouteHandler: RouteHandler<
  typeof deleteV1BetaGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaGroupsIdRouteHandler: RouteHandler<typeof getV1BetaGroupsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchV1BetaGroupsIdRouteHandler: RouteHandler<
  typeof patchV1BetaGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaGroupsIdAppRouteHandler: RouteHandler<
  typeof getV1BetaGroupsIdAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaGroupsIdBetaTestersRouteHandler: RouteHandler<
  typeof getV1BetaGroupsIdBetaTestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaGroupsIdBuildsRouteHandler: RouteHandler<
  typeof getV1BetaGroupsIdBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BetaGroupsIdRelationshipsBetaTestersRouteHandler: RouteHandler<
  typeof deleteV1BetaGroupsIdRelationshipsBetaTestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaGroupsIdRelationshipsBetaTestersRouteHandler: RouteHandler<
  typeof getV1BetaGroupsIdRelationshipsBetaTestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BetaGroupsIdRelationshipsBetaTestersRouteHandler: RouteHandler<
  typeof postV1BetaGroupsIdRelationshipsBetaTestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BetaGroupsIdRelationshipsBuildsRouteHandler: RouteHandler<
  typeof deleteV1BetaGroupsIdRelationshipsBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaGroupsIdRelationshipsBuildsRouteHandler: RouteHandler<
  typeof getV1BetaGroupsIdRelationshipsBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BetaGroupsIdRelationshipsBuildsRouteHandler: RouteHandler<
  typeof postV1BetaGroupsIdRelationshipsBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaLicenseAgreementsRouteHandler: RouteHandler<
  typeof getV1BetaLicenseAgreementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaLicenseAgreementsIdRouteHandler: RouteHandler<
  typeof getV1BetaLicenseAgreementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1BetaLicenseAgreementsIdRouteHandler: RouteHandler<
  typeof patchV1BetaLicenseAgreementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaLicenseAgreementsIdAppRouteHandler: RouteHandler<
  typeof getV1BetaLicenseAgreementsIdAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BetaTesterInvitationsRouteHandler: RouteHandler<
  typeof postV1BetaTesterInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaTestersRouteHandler: RouteHandler<typeof getV1BetaTestersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1BetaTestersRouteHandler: RouteHandler<typeof postV1BetaTestersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1BetaTestersIdRouteHandler: RouteHandler<
  typeof deleteV1BetaTestersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaTestersIdRouteHandler: RouteHandler<typeof getV1BetaTestersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1BetaTestersIdAppsRouteHandler: RouteHandler<
  typeof getV1BetaTestersIdAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaTestersIdBetaGroupsRouteHandler: RouteHandler<
  typeof getV1BetaTestersIdBetaGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaTestersIdBuildsRouteHandler: RouteHandler<
  typeof getV1BetaTestersIdBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BetaTestersIdRelationshipsAppsRouteHandler: RouteHandler<
  typeof deleteV1BetaTestersIdRelationshipsAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaTestersIdRelationshipsAppsRouteHandler: RouteHandler<
  typeof getV1BetaTestersIdRelationshipsAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BetaTestersIdRelationshipsBetaGroupsRouteHandler: RouteHandler<
  typeof deleteV1BetaTestersIdRelationshipsBetaGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaTestersIdRelationshipsBetaGroupsRouteHandler: RouteHandler<
  typeof getV1BetaTestersIdRelationshipsBetaGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BetaTestersIdRelationshipsBetaGroupsRouteHandler: RouteHandler<
  typeof postV1BetaTestersIdRelationshipsBetaGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BetaTestersIdRelationshipsBuildsRouteHandler: RouteHandler<
  typeof deleteV1BetaTestersIdRelationshipsBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BetaTestersIdRelationshipsBuildsRouteHandler: RouteHandler<
  typeof getV1BetaTestersIdRelationshipsBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BetaTestersIdRelationshipsBuildsRouteHandler: RouteHandler<
  typeof postV1BetaTestersIdRelationshipsBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildBetaDetailsRouteHandler: RouteHandler<
  typeof getV1BuildBetaDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildBetaDetailsIdRouteHandler: RouteHandler<
  typeof getV1BuildBetaDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1BuildBetaDetailsIdRouteHandler: RouteHandler<
  typeof patchV1BuildBetaDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildBetaDetailsIdBuildRouteHandler: RouteHandler<
  typeof getV1BuildBetaDetailsIdBuildRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BuildBetaNotificationsRouteHandler: RouteHandler<
  typeof postV1BuildBetaNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsRouteHandler: RouteHandler<typeof getV1BuildsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdRouteHandler: RouteHandler<typeof getV1BuildsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1BuildsIdRouteHandler: RouteHandler<typeof patchV1BuildsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdAppRouteHandler: RouteHandler<typeof getV1BuildsIdAppRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdAppEncryptionDeclarationRouteHandler: RouteHandler<
  typeof getV1BuildsIdAppEncryptionDeclarationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdAppStoreVersionRouteHandler: RouteHandler<
  typeof getV1BuildsIdAppStoreVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdBetaAppReviewSubmissionRouteHandler: RouteHandler<
  typeof getV1BuildsIdBetaAppReviewSubmissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdBetaBuildLocalizationsRouteHandler: RouteHandler<
  typeof getV1BuildsIdBetaBuildLocalizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdBuildBetaDetailRouteHandler: RouteHandler<
  typeof getV1BuildsIdBuildBetaDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdDiagnosticSignaturesRouteHandler: RouteHandler<
  typeof getV1BuildsIdDiagnosticSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdIconsRouteHandler: RouteHandler<typeof getV1BuildsIdIconsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdIndividualTestersRouteHandler: RouteHandler<
  typeof getV1BuildsIdIndividualTestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdPerfPowerMetricsRouteHandler: RouteHandler<
  typeof getV1BuildsIdPerfPowerMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdPreReleaseVersionRouteHandler: RouteHandler<
  typeof getV1BuildsIdPreReleaseVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdRelationshipsAppEncryptionDeclarationRouteHandler: RouteHandler<
  typeof getV1BuildsIdRelationshipsAppEncryptionDeclarationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1BuildsIdRelationshipsAppEncryptionDeclarationRouteHandler: RouteHandler<
  typeof patchV1BuildsIdRelationshipsAppEncryptionDeclarationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BuildsIdRelationshipsBetaGroupsRouteHandler: RouteHandler<
  typeof deleteV1BuildsIdRelationshipsBetaGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BuildsIdRelationshipsBetaGroupsRouteHandler: RouteHandler<
  typeof postV1BuildsIdRelationshipsBetaGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BuildsIdRelationshipsIndividualTestersRouteHandler: RouteHandler<
  typeof deleteV1BuildsIdRelationshipsIndividualTestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BuildsIdRelationshipsIndividualTestersRouteHandler: RouteHandler<
  typeof getV1BuildsIdRelationshipsIndividualTestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BuildsIdRelationshipsIndividualTestersRouteHandler: RouteHandler<
  typeof postV1BuildsIdRelationshipsIndividualTestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BundleIdCapabilitiesRouteHandler: RouteHandler<
  typeof postV1BundleIdCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BundleIdCapabilitiesIdRouteHandler: RouteHandler<
  typeof deleteV1BundleIdCapabilitiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1BundleIdCapabilitiesIdRouteHandler: RouteHandler<
  typeof patchV1BundleIdCapabilitiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BundleIdsRouteHandler: RouteHandler<typeof getV1BundleIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BundleIdsRouteHandler: RouteHandler<typeof postV1BundleIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BundleIdsIdRouteHandler: RouteHandler<
  typeof deleteV1BundleIdsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BundleIdsIdRouteHandler: RouteHandler<typeof getV1BundleIdsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchV1BundleIdsIdRouteHandler: RouteHandler<typeof patchV1BundleIdsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1BundleIdsIdAppRouteHandler: RouteHandler<
  typeof getV1BundleIdsIdAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BundleIdsIdBundleIdCapabilitiesRouteHandler: RouteHandler<
  typeof getV1BundleIdsIdBundleIdCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BundleIdsIdProfilesRouteHandler: RouteHandler<
  typeof getV1BundleIdsIdProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CertificatesRouteHandler: RouteHandler<typeof getV1CertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CertificatesRouteHandler: RouteHandler<typeof postV1CertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1CertificatesIdRouteHandler: RouteHandler<
  typeof deleteV1CertificatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CertificatesIdRouteHandler: RouteHandler<
  typeof getV1CertificatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DevicesRouteHandler: RouteHandler<typeof getV1DevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DevicesRouteHandler: RouteHandler<typeof postV1DevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DevicesIdRouteHandler: RouteHandler<typeof getV1DevicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DevicesIdRouteHandler: RouteHandler<typeof patchV1DevicesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DiagnosticSignaturesIdLogsRouteHandler: RouteHandler<
  typeof getV1DiagnosticSignaturesIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EndUserLicenseAgreementsRouteHandler: RouteHandler<
  typeof postV1EndUserLicenseAgreementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1EndUserLicenseAgreementsIdRouteHandler: RouteHandler<
  typeof deleteV1EndUserLicenseAgreementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EndUserLicenseAgreementsIdRouteHandler: RouteHandler<
  typeof getV1EndUserLicenseAgreementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1EndUserLicenseAgreementsIdRouteHandler: RouteHandler<
  typeof patchV1EndUserLicenseAgreementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EndUserLicenseAgreementsIdTerritoriesRouteHandler: RouteHandler<
  typeof getV1EndUserLicenseAgreementsIdTerritoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinanceReportsRouteHandler: RouteHandler<
  typeof getV1FinanceReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GameCenterEnabledVersionsIdCompatibleVersionsRouteHandler: RouteHandler<
  typeof getV1GameCenterEnabledVersionsIdCompatibleVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler: RouteHandler<
  typeof deleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler: RouteHandler<
  typeof getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler: RouteHandler<
  typeof patchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRouteHandler: RouteHandler<
  typeof postV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IdfaDeclarationsRouteHandler: RouteHandler<
  typeof postV1IdfaDeclarationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1IdfaDeclarationsIdRouteHandler: RouteHandler<
  typeof deleteV1IdfaDeclarationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1IdfaDeclarationsIdRouteHandler: RouteHandler<
  typeof patchV1IdfaDeclarationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InAppPurchasesIdRouteHandler: RouteHandler<
  typeof getV1InAppPurchasesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PreReleaseVersionsRouteHandler: RouteHandler<
  typeof getV1PreReleaseVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PreReleaseVersionsIdRouteHandler: RouteHandler<
  typeof getV1PreReleaseVersionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PreReleaseVersionsIdAppRouteHandler: RouteHandler<
  typeof getV1PreReleaseVersionsIdAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PreReleaseVersionsIdBuildsRouteHandler: RouteHandler<
  typeof getV1PreReleaseVersionsIdBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProfilesRouteHandler: RouteHandler<typeof getV1ProfilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProfilesRouteHandler: RouteHandler<typeof postV1ProfilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProfilesIdRouteHandler: RouteHandler<typeof deleteV1ProfilesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ProfilesIdRouteHandler: RouteHandler<typeof getV1ProfilesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProfilesIdBundleIdRouteHandler: RouteHandler<
  typeof getV1ProfilesIdBundleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProfilesIdCertificatesRouteHandler: RouteHandler<
  typeof getV1ProfilesIdCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProfilesIdDevicesRouteHandler: RouteHandler<
  typeof getV1ProfilesIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RoutingAppCoveragesRouteHandler: RouteHandler<
  typeof postV1RoutingAppCoveragesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RoutingAppCoveragesIdRouteHandler: RouteHandler<
  typeof deleteV1RoutingAppCoveragesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RoutingAppCoveragesIdRouteHandler: RouteHandler<
  typeof getV1RoutingAppCoveragesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1RoutingAppCoveragesIdRouteHandler: RouteHandler<
  typeof patchV1RoutingAppCoveragesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SalesReportsRouteHandler: RouteHandler<typeof getV1SalesReportsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TerritoriesRouteHandler: RouteHandler<typeof getV1TerritoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1UserInvitationsRouteHandler: RouteHandler<
  typeof getV1UserInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UserInvitationsRouteHandler: RouteHandler<
  typeof postV1UserInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UserInvitationsIdRouteHandler: RouteHandler<
  typeof deleteV1UserInvitationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UserInvitationsIdRouteHandler: RouteHandler<
  typeof getV1UserInvitationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UserInvitationsIdVisibleAppsRouteHandler: RouteHandler<
  typeof getV1UserInvitationsIdVisibleAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersRouteHandler: RouteHandler<typeof getV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersIdRouteHandler: RouteHandler<typeof deleteV1UsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersIdRouteHandler: RouteHandler<typeof getV1UsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1UsersIdRouteHandler: RouteHandler<typeof patchV1UsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersIdRelationshipsVisibleAppsRouteHandler: RouteHandler<
  typeof deleteV1UsersIdRelationshipsVisibleAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersIdRelationshipsVisibleAppsRouteHandler: RouteHandler<
  typeof getV1UsersIdRelationshipsVisibleAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1UsersIdRelationshipsVisibleAppsRouteHandler: RouteHandler<
  typeof patchV1UsersIdRelationshipsVisibleAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersIdRelationshipsVisibleAppsRouteHandler: RouteHandler<
  typeof postV1UsersIdRelationshipsVisibleAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersIdVisibleAppsRouteHandler: RouteHandler<
  typeof getV1UsersIdVisibleAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
