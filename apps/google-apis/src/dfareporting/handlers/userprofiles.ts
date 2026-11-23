import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const userprofilesHandler = app
  .openapi(getUserprofilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountPermissionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountPermissionGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountPermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountUserProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAccountUserProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdAccountUserProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAccountUserProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountUserProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdvertiserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAdvertiserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdAdvertiserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAdvertiserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdAdvertiserGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdvertiserGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdvertiserLandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAdvertiserLandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdAdvertiserLandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAdvertiserLandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdvertiserLandingPagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdvertisersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAdvertisersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdAdvertisersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAdvertisersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdvertisersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdBrowsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdChangeLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdChangeLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdConnectionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdConnectionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdContentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdContentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdContentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdContentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdContentCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdContentCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdConversionsBatchinsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdConversionsBatchupdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCountriesDartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCreativeFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdCreativeFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCreativeFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdCreativeFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdCreativeFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCreativeFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCreativeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdCreativeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCreativeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdCreativeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCreativeGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCreativesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCustomEventsBatchinsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdDimensionvaluesQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdDirectorySitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdDirectorySitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdDirectorySitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdDynamicTargetingKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdDynamicTargetingKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdDynamicTargetingKeysObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdEventTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdEventTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdEventTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdEventTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdEventTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdEventTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFloodlightActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdFloodlightActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdFloodlightActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdFloodlightActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdFloodlightActivitiesGeneratetagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdFloodlightActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFloodlightActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFloodlightActivityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdFloodlightActivityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdFloodlightActivityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdFloodlightActivityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFloodlightActivityGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFloodlightConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdFloodlightConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdFloodlightConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFloodlightConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdMetrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdMobileAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdMobileAppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdMobileCarriersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdMobileCarriersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdOperatingSystemVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdOperatingSystemVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdOperatingSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdOperatingSystemsDartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlacementGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlacementStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdPlacementStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdPlacementStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdPlacementStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdPlacementStrategiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlacementStrategiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdPlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdPlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdPlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdPlacementsGeneratetagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlacementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlatformTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlatformTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPostalCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPostalCodesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsProjectIdInventoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsProjectIdOrderDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsProjectIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsProjectIdOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdRemarketingListSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdRemarketingListSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdRemarketingListSharesRemarketingListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdRemarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdRemarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdRemarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdRemarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdRemarketingListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdReportsCompatiblefieldsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdReportsReportIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdReportsReportIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdReportsReportIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdSizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdSizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdSizesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdSubaccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdTargetableRemarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdTargetableRemarketingListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdTargetingTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdUserRolePermissionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdUserRolePermissionGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdUserRolePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdUserRolePermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdUserRolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdUserRolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdVideoFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdVideoFormatsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
