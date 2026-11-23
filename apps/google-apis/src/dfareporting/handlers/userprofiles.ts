import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserprofilesProfileIdAdvertiserGroupsIdRoute,
  deleteUserprofilesProfileIdContentCategoriesIdRoute,
  deleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute,
  deleteUserprofilesProfileIdCreativeFieldsIdRoute,
  deleteUserprofilesProfileIdDynamicTargetingKeysObjectIdRoute,
  deleteUserprofilesProfileIdEventTagsIdRoute,
  deleteUserprofilesProfileIdFloodlightActivitiesIdRoute,
  deleteUserprofilesProfileIdPlacementStrategiesIdRoute,
  deleteUserprofilesProfileIdReportsReportIdRoute,
  deleteUserprofilesProfileIdUserRolesIdRoute,
  getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdRoute,
  getUserprofilesProfileIdAccountPermissionGroupsIdRoute,
  getUserprofilesProfileIdAccountPermissionGroupsRoute,
  getUserprofilesProfileIdAccountPermissionsIdRoute,
  getUserprofilesProfileIdAccountPermissionsRoute,
  getUserprofilesProfileIdAccountsIdRoute,
  getUserprofilesProfileIdAccountsRoute,
  getUserprofilesProfileIdAccountUserProfilesIdRoute,
  getUserprofilesProfileIdAccountUserProfilesRoute,
  getUserprofilesProfileIdAdsIdRoute,
  getUserprofilesProfileIdAdsRoute,
  getUserprofilesProfileIdAdvertiserGroupsIdRoute,
  getUserprofilesProfileIdAdvertiserGroupsRoute,
  getUserprofilesProfileIdAdvertiserLandingPagesIdRoute,
  getUserprofilesProfileIdAdvertiserLandingPagesRoute,
  getUserprofilesProfileIdAdvertisersIdRoute,
  getUserprofilesProfileIdAdvertisersRoute,
  getUserprofilesProfileIdBrowsersRoute,
  getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute,
  getUserprofilesProfileIdCampaignsIdRoute,
  getUserprofilesProfileIdCampaignsRoute,
  getUserprofilesProfileIdChangeLogsIdRoute,
  getUserprofilesProfileIdChangeLogsRoute,
  getUserprofilesProfileIdCitiesRoute,
  getUserprofilesProfileIdConnectionTypesIdRoute,
  getUserprofilesProfileIdConnectionTypesRoute,
  getUserprofilesProfileIdContentCategoriesIdRoute,
  getUserprofilesProfileIdContentCategoriesRoute,
  getUserprofilesProfileIdCountriesDartIdRoute,
  getUserprofilesProfileIdCountriesRoute,
  getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute,
  getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute,
  getUserprofilesProfileIdCreativeFieldsIdRoute,
  getUserprofilesProfileIdCreativeFieldsRoute,
  getUserprofilesProfileIdCreativeGroupsIdRoute,
  getUserprofilesProfileIdCreativeGroupsRoute,
  getUserprofilesProfileIdCreativesIdRoute,
  getUserprofilesProfileIdCreativesRoute,
  getUserprofilesProfileIdDirectorySitesIdRoute,
  getUserprofilesProfileIdDirectorySitesRoute,
  getUserprofilesProfileIdDynamicTargetingKeysRoute,
  getUserprofilesProfileIdEventTagsIdRoute,
  getUserprofilesProfileIdEventTagsRoute,
  getUserprofilesProfileIdFilesRoute,
  getUserprofilesProfileIdFloodlightActivitiesIdRoute,
  getUserprofilesProfileIdFloodlightActivitiesRoute,
  getUserprofilesProfileIdFloodlightActivityGroupsIdRoute,
  getUserprofilesProfileIdFloodlightActivityGroupsRoute,
  getUserprofilesProfileIdFloodlightConfigurationsIdRoute,
  getUserprofilesProfileIdFloodlightConfigurationsRoute,
  getUserprofilesProfileIdLanguagesRoute,
  getUserprofilesProfileIdMetrosRoute,
  getUserprofilesProfileIdMobileAppsIdRoute,
  getUserprofilesProfileIdMobileAppsRoute,
  getUserprofilesProfileIdMobileCarriersIdRoute,
  getUserprofilesProfileIdMobileCarriersRoute,
  getUserprofilesProfileIdOperatingSystemsDartIdRoute,
  getUserprofilesProfileIdOperatingSystemsRoute,
  getUserprofilesProfileIdOperatingSystemVersionsIdRoute,
  getUserprofilesProfileIdOperatingSystemVersionsRoute,
  getUserprofilesProfileIdPlacementGroupsIdRoute,
  getUserprofilesProfileIdPlacementGroupsRoute,
  getUserprofilesProfileIdPlacementsIdRoute,
  getUserprofilesProfileIdPlacementsRoute,
  getUserprofilesProfileIdPlacementStrategiesIdRoute,
  getUserprofilesProfileIdPlacementStrategiesRoute,
  getUserprofilesProfileIdPlatformTypesIdRoute,
  getUserprofilesProfileIdPlatformTypesRoute,
  getUserprofilesProfileIdPostalCodesCodeRoute,
  getUserprofilesProfileIdPostalCodesRoute,
  getUserprofilesProfileIdProjectsIdRoute,
  getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdRoute,
  getUserprofilesProfileIdProjectsProjectIdInventoryItemsRoute,
  getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdRoute,
  getUserprofilesProfileIdProjectsProjectIdOrderDocumentsRoute,
  getUserprofilesProfileIdProjectsProjectIdOrdersIdRoute,
  getUserprofilesProfileIdProjectsProjectIdOrdersRoute,
  getUserprofilesProfileIdProjectsRoute,
  getUserprofilesProfileIdRegionsRoute,
  getUserprofilesProfileIdRemarketingListSharesRemarketingListIdRoute,
  getUserprofilesProfileIdRemarketingListsIdRoute,
  getUserprofilesProfileIdRemarketingListsRoute,
  getUserprofilesProfileIdReportsReportIdFilesFileIdRoute,
  getUserprofilesProfileIdReportsReportIdFilesRoute,
  getUserprofilesProfileIdReportsReportIdRoute,
  getUserprofilesProfileIdReportsRoute,
  getUserprofilesProfileIdRoute,
  getUserprofilesProfileIdSitesIdRoute,
  getUserprofilesProfileIdSitesRoute,
  getUserprofilesProfileIdSizesIdRoute,
  getUserprofilesProfileIdSizesRoute,
  getUserprofilesProfileIdSubaccountsIdRoute,
  getUserprofilesProfileIdSubaccountsRoute,
  getUserprofilesProfileIdTargetableRemarketingListsIdRoute,
  getUserprofilesProfileIdTargetableRemarketingListsRoute,
  getUserprofilesProfileIdTargetingTemplatesIdRoute,
  getUserprofilesProfileIdTargetingTemplatesRoute,
  getUserprofilesProfileIdUserRolePermissionGroupsIdRoute,
  getUserprofilesProfileIdUserRolePermissionGroupsRoute,
  getUserprofilesProfileIdUserRolePermissionsIdRoute,
  getUserprofilesProfileIdUserRolePermissionsRoute,
  getUserprofilesProfileIdUserRolesIdRoute,
  getUserprofilesProfileIdUserRolesRoute,
  getUserprofilesProfileIdVideoFormatsIdRoute,
  getUserprofilesProfileIdVideoFormatsRoute,
  getUserprofilesRoute,
  patchUserprofilesProfileIdAccountsRoute,
  patchUserprofilesProfileIdAccountUserProfilesRoute,
  patchUserprofilesProfileIdAdsRoute,
  patchUserprofilesProfileIdAdvertiserGroupsRoute,
  patchUserprofilesProfileIdAdvertiserLandingPagesRoute,
  patchUserprofilesProfileIdAdvertisersRoute,
  patchUserprofilesProfileIdCampaignsRoute,
  patchUserprofilesProfileIdContentCategoriesRoute,
  patchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute,
  patchUserprofilesProfileIdCreativeFieldsRoute,
  patchUserprofilesProfileIdCreativeGroupsRoute,
  patchUserprofilesProfileIdCreativesRoute,
  patchUserprofilesProfileIdEventTagsRoute,
  patchUserprofilesProfileIdFloodlightActivitiesRoute,
  patchUserprofilesProfileIdFloodlightActivityGroupsRoute,
  patchUserprofilesProfileIdFloodlightConfigurationsRoute,
  patchUserprofilesProfileIdPlacementGroupsRoute,
  patchUserprofilesProfileIdPlacementsRoute,
  patchUserprofilesProfileIdPlacementStrategiesRoute,
  patchUserprofilesProfileIdRemarketingListSharesRoute,
  patchUserprofilesProfileIdRemarketingListsRoute,
  patchUserprofilesProfileIdReportsReportIdRoute,
  patchUserprofilesProfileIdSitesRoute,
  patchUserprofilesProfileIdSubaccountsRoute,
  patchUserprofilesProfileIdTargetingTemplatesRoute,
  patchUserprofilesProfileIdUserRolesRoute,
  postUserprofilesProfileIdAccountUserProfilesRoute,
  postUserprofilesProfileIdAdsRoute,
  postUserprofilesProfileIdAdvertiserGroupsRoute,
  postUserprofilesProfileIdAdvertiserLandingPagesRoute,
  postUserprofilesProfileIdAdvertisersRoute,
  postUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute,
  postUserprofilesProfileIdCampaignsRoute,
  postUserprofilesProfileIdContentCategoriesRoute,
  postUserprofilesProfileIdConversionsBatchinsertRoute,
  postUserprofilesProfileIdConversionsBatchupdateRoute,
  postUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsRoute,
  postUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute,
  postUserprofilesProfileIdCreativeFieldsRoute,
  postUserprofilesProfileIdCreativeGroupsRoute,
  postUserprofilesProfileIdCreativesRoute,
  postUserprofilesProfileIdCustomEventsBatchinsertRoute,
  postUserprofilesProfileIdDimensionvaluesQueryRoute,
  postUserprofilesProfileIdDirectorySitesRoute,
  postUserprofilesProfileIdDynamicTargetingKeysRoute,
  postUserprofilesProfileIdEventTagsRoute,
  postUserprofilesProfileIdFloodlightActivitiesGeneratetagRoute,
  postUserprofilesProfileIdFloodlightActivitiesRoute,
  postUserprofilesProfileIdFloodlightActivityGroupsRoute,
  postUserprofilesProfileIdPlacementGroupsRoute,
  postUserprofilesProfileIdPlacementsGeneratetagsRoute,
  postUserprofilesProfileIdPlacementsRoute,
  postUserprofilesProfileIdPlacementStrategiesRoute,
  postUserprofilesProfileIdRemarketingListsRoute,
  postUserprofilesProfileIdReportsCompatiblefieldsQueryRoute,
  postUserprofilesProfileIdReportsReportIdRunRoute,
  postUserprofilesProfileIdReportsRoute,
  postUserprofilesProfileIdSitesRoute,
  postUserprofilesProfileIdSizesRoute,
  postUserprofilesProfileIdSubaccountsRoute,
  postUserprofilesProfileIdTargetingTemplatesRoute,
  postUserprofilesProfileIdUserRolesRoute,
  putUserprofilesProfileIdAccountsRoute,
  putUserprofilesProfileIdAccountUserProfilesRoute,
  putUserprofilesProfileIdAdsRoute,
  putUserprofilesProfileIdAdvertiserGroupsRoute,
  putUserprofilesProfileIdAdvertiserLandingPagesRoute,
  putUserprofilesProfileIdAdvertisersRoute,
  putUserprofilesProfileIdCampaignsRoute,
  putUserprofilesProfileIdContentCategoriesRoute,
  putUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute,
  putUserprofilesProfileIdCreativeFieldsRoute,
  putUserprofilesProfileIdCreativeGroupsRoute,
  putUserprofilesProfileIdCreativesRoute,
  putUserprofilesProfileIdEventTagsRoute,
  putUserprofilesProfileIdFloodlightActivitiesRoute,
  putUserprofilesProfileIdFloodlightActivityGroupsRoute,
  putUserprofilesProfileIdFloodlightConfigurationsRoute,
  putUserprofilesProfileIdPlacementGroupsRoute,
  putUserprofilesProfileIdPlacementsRoute,
  putUserprofilesProfileIdPlacementStrategiesRoute,
  putUserprofilesProfileIdRemarketingListSharesRoute,
  putUserprofilesProfileIdRemarketingListsRoute,
  putUserprofilesProfileIdReportsReportIdRoute,
  putUserprofilesProfileIdSitesRoute,
  putUserprofilesProfileIdSubaccountsRoute,
  putUserprofilesProfileIdTargetingTemplatesRoute,
  putUserprofilesProfileIdUserRolesRoute,
} from '../routes'

export const getUserprofilesRouteHandler: RouteHandler<typeof getUserprofilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAccountPermissionGroupsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAccountPermissionGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAccountPermissionGroupsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAccountPermissionGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAccountPermissionsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAccountPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAccountPermissionsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAccountPermissionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAccountUserProfilesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAccountUserProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdAccountUserProfilesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdAccountUserProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdAccountUserProfilesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdAccountUserProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdAccountUserProfilesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdAccountUserProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAccountUserProfilesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAccountUserProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAccountsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdAccountsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdAccountsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAccountsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAdsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdAdsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdAdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdAdsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdAdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdAdsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdAdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAdsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAdsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAdvertiserGroupsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAdvertiserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdAdvertiserGroupsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdAdvertiserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdAdvertiserGroupsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdAdvertiserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdAdvertiserGroupsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdAdvertiserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserprofilesProfileIdAdvertiserGroupsIdRouteHandler: RouteHandler<
  typeof deleteUserprofilesProfileIdAdvertiserGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAdvertiserGroupsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAdvertiserGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAdvertiserLandingPagesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAdvertiserLandingPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdAdvertiserLandingPagesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdAdvertiserLandingPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdAdvertiserLandingPagesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdAdvertiserLandingPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdAdvertiserLandingPagesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdAdvertiserLandingPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAdvertiserLandingPagesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAdvertiserLandingPagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAdvertisersRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAdvertisersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdAdvertisersRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdAdvertisersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdAdvertisersRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdAdvertisersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdAdvertisersRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdAdvertisersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdAdvertisersIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdAdvertisersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdBrowsersRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdBrowsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCampaignsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdCampaignsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdCampaignsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdCampaignsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCampaignsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCampaignsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdChangeLogsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdChangeLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdChangeLogsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdChangeLogsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCitiesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdConnectionTypesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdConnectionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdConnectionTypesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdConnectionTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdContentCategoriesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdContentCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdContentCategoriesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdContentCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdContentCategoriesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdContentCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdContentCategoriesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdContentCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserprofilesProfileIdContentCategoriesIdRouteHandler: RouteHandler<
  typeof deleteUserprofilesProfileIdContentCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdContentCategoriesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdContentCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdConversionsBatchinsertRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdConversionsBatchinsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdConversionsBatchupdateRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdConversionsBatchupdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCountriesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCountriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCountriesDartIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCountriesDartIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCreativeFieldsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCreativeFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdCreativeFieldsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdCreativeFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdCreativeFieldsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdCreativeFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdCreativeFieldsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdCreativeFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRouteHandler: RouteHandler<
  typeof deleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserprofilesProfileIdCreativeFieldsIdRouteHandler: RouteHandler<
  typeof deleteUserprofilesProfileIdCreativeFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCreativeFieldsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCreativeFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCreativeGroupsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCreativeGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdCreativeGroupsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdCreativeGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdCreativeGroupsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdCreativeGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdCreativeGroupsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdCreativeGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCreativeGroupsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCreativeGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCreativesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCreativesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdCreativesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdCreativesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdCreativesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdCreativesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdCreativesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdCreativesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdCreativesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdCreativesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdCustomEventsBatchinsertRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdCustomEventsBatchinsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdDimensionvaluesQueryRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdDimensionvaluesQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdDirectorySitesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdDirectorySitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdDirectorySitesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdDirectorySitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdDirectorySitesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdDirectorySitesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdDynamicTargetingKeysRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdDynamicTargetingKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdDynamicTargetingKeysRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdDynamicTargetingKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserprofilesProfileIdDynamicTargetingKeysObjectIdRouteHandler: RouteHandler<
  typeof deleteUserprofilesProfileIdDynamicTargetingKeysObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdEventTagsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdEventTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdEventTagsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdEventTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdEventTagsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdEventTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdEventTagsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdEventTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserprofilesProfileIdEventTagsIdRouteHandler: RouteHandler<
  typeof deleteUserprofilesProfileIdEventTagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdEventTagsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdEventTagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdFilesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdFloodlightActivitiesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdFloodlightActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdFloodlightActivitiesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdFloodlightActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdFloodlightActivitiesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdFloodlightActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdFloodlightActivitiesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdFloodlightActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdFloodlightActivitiesGeneratetagRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdFloodlightActivitiesGeneratetagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserprofilesProfileIdFloodlightActivitiesIdRouteHandler: RouteHandler<
  typeof deleteUserprofilesProfileIdFloodlightActivitiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdFloodlightActivitiesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdFloodlightActivitiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdFloodlightActivityGroupsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdFloodlightActivityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdFloodlightActivityGroupsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdFloodlightActivityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdFloodlightActivityGroupsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdFloodlightActivityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdFloodlightActivityGroupsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdFloodlightActivityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdFloodlightActivityGroupsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdFloodlightActivityGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdFloodlightConfigurationsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdFloodlightConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdFloodlightConfigurationsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdFloodlightConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdFloodlightConfigurationsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdFloodlightConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdFloodlightConfigurationsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdFloodlightConfigurationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdLanguagesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdMetrosRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdMetrosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdMobileAppsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdMobileAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdMobileAppsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdMobileAppsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdMobileCarriersRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdMobileCarriersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdMobileCarriersIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdMobileCarriersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdOperatingSystemVersionsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdOperatingSystemVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdOperatingSystemVersionsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdOperatingSystemVersionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdOperatingSystemsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdOperatingSystemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdOperatingSystemsDartIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdOperatingSystemsDartIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdPlacementGroupsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdPlacementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdPlacementGroupsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdPlacementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdPlacementGroupsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdPlacementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdPlacementGroupsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdPlacementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdPlacementGroupsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdPlacementGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdPlacementStrategiesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdPlacementStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdPlacementStrategiesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdPlacementStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdPlacementStrategiesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdPlacementStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdPlacementStrategiesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdPlacementStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserprofilesProfileIdPlacementStrategiesIdRouteHandler: RouteHandler<
  typeof deleteUserprofilesProfileIdPlacementStrategiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdPlacementStrategiesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdPlacementStrategiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdPlacementsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdPlacementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdPlacementsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdPlacementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdPlacementsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdPlacementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdPlacementsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdPlacementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdPlacementsGeneratetagsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdPlacementsGeneratetagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdPlacementsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdPlacementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdPlatformTypesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdPlatformTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdPlatformTypesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdPlatformTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdPostalCodesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdPostalCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdPostalCodesCodeRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdPostalCodesCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdProjectsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdProjectsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdProjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdProjectsProjectIdInventoryItemsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdProjectsProjectIdInventoryItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdProjectsProjectIdOrderDocumentsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdProjectsProjectIdOrderDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdProjectsProjectIdOrdersRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdProjectsProjectIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdProjectsProjectIdOrdersIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdProjectsProjectIdOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdRegionsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdRemarketingListSharesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdRemarketingListSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdRemarketingListSharesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdRemarketingListSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdRemarketingListSharesRemarketingListIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdRemarketingListSharesRemarketingListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdRemarketingListsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdRemarketingListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdRemarketingListsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdRemarketingListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdRemarketingListsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdRemarketingListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdRemarketingListsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdRemarketingListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdRemarketingListsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdRemarketingListsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdReportsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdReportsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdReportsCompatiblefieldsQueryRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdReportsCompatiblefieldsQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserprofilesProfileIdReportsReportIdRouteHandler: RouteHandler<
  typeof deleteUserprofilesProfileIdReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdReportsReportIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdReportsReportIdRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdReportsReportIdRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdReportsReportIdFilesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdReportsReportIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdReportsReportIdFilesFileIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdReportsReportIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdReportsReportIdRunRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdReportsReportIdRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdSitesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdSitesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdSitesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdSitesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdSitesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdSitesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdSizesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdSizesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdSizesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdSizesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdSizesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdSizesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdSubaccountsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdSubaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdSubaccountsRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdSubaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdSubaccountsRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdSubaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdSubaccountsRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdSubaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdSubaccountsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdSubaccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdTargetableRemarketingListsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdTargetableRemarketingListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdTargetableRemarketingListsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdTargetableRemarketingListsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdTargetingTemplatesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdTargetingTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdTargetingTemplatesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdTargetingTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdTargetingTemplatesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdTargetingTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdTargetingTemplatesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdTargetingTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdTargetingTemplatesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdTargetingTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdUserRolePermissionGroupsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdUserRolePermissionGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdUserRolePermissionGroupsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdUserRolePermissionGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdUserRolePermissionsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdUserRolePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdUserRolePermissionsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdUserRolePermissionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdUserRolesRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdUserRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserprofilesProfileIdUserRolesRouteHandler: RouteHandler<
  typeof patchUserprofilesProfileIdUserRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserprofilesProfileIdUserRolesRouteHandler: RouteHandler<
  typeof postUserprofilesProfileIdUserRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserprofilesProfileIdUserRolesRouteHandler: RouteHandler<
  typeof putUserprofilesProfileIdUserRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserprofilesProfileIdUserRolesIdRouteHandler: RouteHandler<
  typeof deleteUserprofilesProfileIdUserRolesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdUserRolesIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdUserRolesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdVideoFormatsRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdVideoFormatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserprofilesProfileIdVideoFormatsIdRouteHandler: RouteHandler<
  typeof getUserprofilesProfileIdVideoFormatsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
