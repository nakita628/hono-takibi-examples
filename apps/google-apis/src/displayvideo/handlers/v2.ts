import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute,
  deleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdRoute,
  deleteV2AdvertisersAdvertiserIdCreativesCreativeIdRoute,
  deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute,
  deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute,
  deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  deleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdRoute,
  deleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueRoute,
  deleteV2AdvertisersAdvertiserIdRoute,
  deleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  deleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdRoute,
  deleteV2InventorySourceGroupsInventorySourceGroupIdRoute,
  deleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdRoute,
  deleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  deleteV2UsersUserIdRoute,
  getV2AdvertisersAdvertiserIdAuditRoute,
  getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsRoute,
  getV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute,
  getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  getV2AdvertisersAdvertiserIdCampaignsRoute,
  getV2AdvertisersAdvertiserIdChannelsChannelIdSitesRoute,
  getV2AdvertisersAdvertiserIdChannelsRoute,
  getV2AdvertisersAdvertiserIdCreativesCreativeIdRoute,
  getV2AdvertisersAdvertiserIdCreativesRoute,
  getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsRoute,
  getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute,
  getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  getV2AdvertisersAdvertiserIdInsertionOrdersRoute,
  getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyRoute,
  getV2AdvertisersAdvertiserIdInvoicesRoute,
  getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsRoute,
  getV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute,
  getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  getV2AdvertisersAdvertiserIdLineItemsRoute,
  getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsRoute,
  getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsRoute,
  getV2AdvertisersAdvertiserIdLocationListsRoute,
  getV2AdvertisersAdvertiserIdManualTriggersRoute,
  getV2AdvertisersAdvertiserIdManualTriggersTriggerIdRoute,
  getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsRoute,
  getV2AdvertisersAdvertiserIdNegativeKeywordListsRoute,
  getV2AdvertisersAdvertiserIdRoute,
  getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsRoute,
  getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdRoute,
  getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRoute,
  getV2AdvertisersAdvertiserIdYoutubeAdGroupsRoute,
  getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdRoute,
  getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  getV2AdvertisersRoute,
  getV2CombinedAudiencesCombinedAudienceIdRoute,
  getV2CombinedAudiencesRoute,
  getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute,
  getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdRoute,
  getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute,
  getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptRoute,
  getV2CustomBiddingAlgorithmsRoute,
  getV2CustomListsCustomListIdRoute,
  getV2CustomListsRoute,
  getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute,
  getV2FirstAndThirdPartyAudiencesRoute,
  getV2FloodlightGroupsFloodlightGroupIdRoute,
  getV2GoogleAudiencesGoogleAudienceIdRoute,
  getV2GoogleAudiencesRoute,
  getV2GuaranteedOrdersGuaranteedOrderIdRoute,
  getV2GuaranteedOrdersRoute,
  getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute,
  getV2InventorySourceGroupsInventorySourceGroupIdRoute,
  getV2InventorySourceGroupsRoute,
  getV2InventorySourcesInventorySourceIdRoute,
  getV2InventorySourcesRoute,
  getV2NameRoute,
  getV2PartnersPartnerIdChannelsChannelIdSitesRoute,
  getV2PartnersPartnerIdChannelsRoute,
  getV2PartnersPartnerIdRoute,
  getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  getV2PartnersRoute,
  getV2TargetingTypesTargetingTypeTargetingOptionsRoute,
  getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdRoute,
  getV2UsersRoute,
  getV2UsersUserIdRoute,
  patchV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute,
  patchV2AdvertisersAdvertiserIdChannelsChannelIdRoute,
  patchV2AdvertisersAdvertiserIdCreativesCreativeIdRoute,
  patchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute,
  patchV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute,
  patchV2AdvertisersAdvertiserIdLocationListsLocationListIdRoute,
  patchV2AdvertisersAdvertiserIdManualTriggersTriggerIdRoute,
  patchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdRoute,
  patchV2AdvertisersAdvertiserIdRoute,
  patchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute,
  patchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute,
  patchV2GuaranteedOrdersGuaranteedOrderIdRoute,
  patchV2InventorySourcesInventorySourceIdRoute,
  patchV2PartnersPartnerIdChannelsChannelIdRoute,
  patchV2UsersUserIdRoute,
  postV2AdvertisersAdvertiserIdAssetsRoute,
  postV2AdvertisersAdvertiserIdCampaignsRoute,
  postV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditRoute,
  postV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceRoute,
  postV2AdvertisersAdvertiserIdChannelsRoute,
  postV2AdvertisersAdvertiserIdCreativesRoute,
  postV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsRoute,
  postV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  postV2AdvertisersAdvertiserIdInsertionOrdersRoute,
  postV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsRoute,
  postV2AdvertisersAdvertiserIdLineItemsBulkUpdateRoute,
  postV2AdvertisersAdvertiserIdLineItemsGenerateDefaultRoute,
  postV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateRoute,
  postV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  postV2AdvertisersAdvertiserIdLineItemsRoute,
  postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditRoute,
  postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsRoute,
  postV2AdvertisersAdvertiserIdLocationListsRoute,
  postV2AdvertisersAdvertiserIdManualTriggersRoute,
  postV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateRoute,
  postV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateRoute,
  postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditRoute,
  postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceRoute,
  postV2AdvertisersAdvertiserIdNegativeKeywordListsRoute,
  postV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  postV2AdvertisersRoute,
  postV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute,
  postV2CustomBiddingAlgorithmsRoute,
  postV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersRoute,
  postV2FirstAndThirdPartyAudiencesRoute,
  postV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsRoute,
  postV2GuaranteedOrdersRoute,
  postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditRoute,
  postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute,
  postV2InventorySourceGroupsRoute,
  postV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsRoute,
  postV2InventorySourcesRoute,
  postV2PartnersPartnerIdChannelsChannelIdSitesBulkEditRoute,
  postV2PartnersPartnerIdChannelsChannelIdSitesReplaceRoute,
  postV2PartnersPartnerIdChannelsRoute,
  postV2PartnersPartnerIdEditAssignedTargetingOptionsRoute,
  postV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  postV2SdfdownloadtasksRoute,
  postV2TargetingTypesTargetingTypeTargetingOptionsSearchRoute,
  postV2UsersRoute,
  postV2UsersUserIdBulkEditAssignedUserRolesRoute,
} from '../routes'

export const getV2AdvertisersRouteHandler: RouteHandler<typeof getV2AdvertisersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersRouteHandler: RouteHandler<typeof postV2AdvertisersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2AdvertisersAdvertiserIdRouteHandler: RouteHandler<
  typeof patchV2AdvertisersAdvertiserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdAssetsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdCampaignsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdCampaignsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2AdvertisersAdvertiserIdCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof patchV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdChannelsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdChannelsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2AdvertisersAdvertiserIdChannelsChannelIdRouteHandler: RouteHandler<
  typeof patchV2AdvertisersAdvertiserIdChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdChannelsChannelIdSitesRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdChannelsChannelIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdCreativesRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdCreativesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdCreativesRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdCreativesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdCreativesCreativeIdRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdCreativesCreativeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdCreativesCreativeIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdCreativesCreativeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2AdvertisersAdvertiserIdCreativesCreativeIdRouteHandler: RouteHandler<
  typeof patchV2AdvertisersAdvertiserIdCreativesCreativeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdInsertionOrdersRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdInsertionOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdInsertionOrdersRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdInsertionOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRouteHandler: RouteHandler<
  typeof patchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdInvoicesRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdLineItemsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdLineItemsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdLineItemsLineItemIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2AdvertisersAdvertiserIdLineItemsLineItemIdRouteHandler: RouteHandler<
  typeof patchV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdLineItemsBulkUpdateRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdLineItemsBulkUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdLineItemsGenerateDefaultRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdLineItemsGenerateDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdLocationListsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdLocationListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdLocationListsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdLocationListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2AdvertisersAdvertiserIdLocationListsLocationListIdRouteHandler: RouteHandler<
  typeof patchV2AdvertisersAdvertiserIdLocationListsLocationListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdManualTriggersRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdManualTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdManualTriggersRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdManualTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdManualTriggersTriggerIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdManualTriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2AdvertisersAdvertiserIdManualTriggersTriggerIdRouteHandler: RouteHandler<
  typeof patchV2AdvertisersAdvertiserIdManualTriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdNegativeKeywordListsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdNegativeKeywordListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdNegativeKeywordListsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdNegativeKeywordListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdRouteHandler: RouteHandler<
  typeof patchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRouteHandler: RouteHandler<
  typeof deleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdAuditRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdAuditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof postV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CombinedAudiencesRouteHandler: RouteHandler<
  typeof getV2CombinedAudiencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CombinedAudiencesCombinedAudienceIdRouteHandler: RouteHandler<
  typeof getV2CombinedAudiencesCombinedAudienceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomBiddingAlgorithmsRouteHandler: RouteHandler<
  typeof getV2CustomBiddingAlgorithmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomBiddingAlgorithmsRouteHandler: RouteHandler<
  typeof postV2CustomBiddingAlgorithmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRouteHandler: RouteHandler<
  typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRouteHandler: RouteHandler<
  typeof patchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRouteHandler: RouteHandler<
  typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRouteHandler: RouteHandler<
  typeof postV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdRouteHandler: RouteHandler<
  typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptRouteHandler: RouteHandler<
  typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomListsRouteHandler: RouteHandler<typeof getV2CustomListsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2CustomListsCustomListIdRouteHandler: RouteHandler<
  typeof getV2CustomListsCustomListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FirstAndThirdPartyAudiencesRouteHandler: RouteHandler<
  typeof getV2FirstAndThirdPartyAudiencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2FirstAndThirdPartyAudiencesRouteHandler: RouteHandler<
  typeof postV2FirstAndThirdPartyAudiencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRouteHandler: RouteHandler<
  typeof getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRouteHandler: RouteHandler<
  typeof patchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersRouteHandler: RouteHandler<
  typeof postV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FloodlightGroupsFloodlightGroupIdRouteHandler: RouteHandler<
  typeof getV2FloodlightGroupsFloodlightGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GoogleAudiencesRouteHandler: RouteHandler<
  typeof getV2GoogleAudiencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GoogleAudiencesGoogleAudienceIdRouteHandler: RouteHandler<
  typeof getV2GoogleAudiencesGoogleAudienceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GuaranteedOrdersRouteHandler: RouteHandler<
  typeof getV2GuaranteedOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GuaranteedOrdersRouteHandler: RouteHandler<
  typeof postV2GuaranteedOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GuaranteedOrdersGuaranteedOrderIdRouteHandler: RouteHandler<
  typeof getV2GuaranteedOrdersGuaranteedOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2GuaranteedOrdersGuaranteedOrderIdRouteHandler: RouteHandler<
  typeof patchV2GuaranteedOrdersGuaranteedOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsRouteHandler: RouteHandler<
  typeof postV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventorySourceGroupsRouteHandler: RouteHandler<
  typeof getV2InventorySourceGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventorySourceGroupsRouteHandler: RouteHandler<
  typeof postV2InventorySourceGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2InventorySourceGroupsInventorySourceGroupIdRouteHandler: RouteHandler<
  typeof deleteV2InventorySourceGroupsInventorySourceGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventorySourceGroupsInventorySourceGroupIdRouteHandler: RouteHandler<
  typeof getV2InventorySourceGroupsInventorySourceGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRouteHandler: RouteHandler<
  typeof getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRouteHandler: RouteHandler<
  typeof postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdRouteHandler: RouteHandler<
  typeof deleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditRouteHandler: RouteHandler<
  typeof postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventorySourcesRouteHandler: RouteHandler<
  typeof getV2InventorySourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventorySourcesRouteHandler: RouteHandler<
  typeof postV2InventorySourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2InventorySourcesInventorySourceIdRouteHandler: RouteHandler<
  typeof getV2InventorySourcesInventorySourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2InventorySourcesInventorySourceIdRouteHandler: RouteHandler<
  typeof patchV2InventorySourcesInventorySourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsRouteHandler: RouteHandler<
  typeof postV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PartnersRouteHandler: RouteHandler<typeof getV2PartnersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PartnersPartnerIdRouteHandler: RouteHandler<
  typeof getV2PartnersPartnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PartnersPartnerIdChannelsRouteHandler: RouteHandler<
  typeof getV2PartnersPartnerIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PartnersPartnerIdChannelsRouteHandler: RouteHandler<
  typeof postV2PartnersPartnerIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2PartnersPartnerIdChannelsChannelIdRouteHandler: RouteHandler<
  typeof patchV2PartnersPartnerIdChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PartnersPartnerIdChannelsChannelIdSitesRouteHandler: RouteHandler<
  typeof getV2PartnersPartnerIdChannelsChannelIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdRouteHandler: RouteHandler<
  typeof deleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PartnersPartnerIdChannelsChannelIdSitesBulkEditRouteHandler: RouteHandler<
  typeof postV2PartnersPartnerIdChannelsChannelIdSitesBulkEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PartnersPartnerIdChannelsChannelIdSitesReplaceRouteHandler: RouteHandler<
  typeof postV2PartnersPartnerIdChannelsChannelIdSitesReplaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof postV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRouteHandler: RouteHandler<
  typeof deleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRouteHandler: RouteHandler<
  typeof getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PartnersPartnerIdEditAssignedTargetingOptionsRouteHandler: RouteHandler<
  typeof postV2PartnersPartnerIdEditAssignedTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SdfdownloadtasksRouteHandler: RouteHandler<
  typeof postV2SdfdownloadtasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TargetingTypesTargetingTypeTargetingOptionsRouteHandler: RouteHandler<
  typeof getV2TargetingTypesTargetingTypeTargetingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdRouteHandler: RouteHandler<
  typeof getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TargetingTypesTargetingTypeTargetingOptionsSearchRouteHandler: RouteHandler<
  typeof postV2TargetingTypesTargetingTypeTargetingOptionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UsersRouteHandler: RouteHandler<typeof getV2UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UsersRouteHandler: RouteHandler<typeof postV2UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UsersUserIdRouteHandler: RouteHandler<
  typeof deleteV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UsersUserIdRouteHandler: RouteHandler<typeof getV2UsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchV2UsersUserIdRouteHandler: RouteHandler<typeof patchV2UsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2UsersUserIdBulkEditAssignedUserRolesRouteHandler: RouteHandler<
  typeof postV2UsersUserIdBulkEditAssignedUserRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2NameRouteHandler: RouteHandler<typeof getV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}
