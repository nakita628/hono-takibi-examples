import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2AdvertisersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AdvertisersAdvertiserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AdvertisersAdvertiserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2AdvertisersAdvertiserIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AdvertisersAdvertiserIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdChannelsChannelIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AdvertisersAdvertiserIdCreativesCreativeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdCreativesCreativeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AdvertisersAdvertiserIdCreativesCreativeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdInsertionOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdInsertionOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2AdvertisersAdvertiserIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdLineItemsBulkUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdLineItemsGenerateDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdLocationListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdLocationListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AdvertisersAdvertiserIdLocationListsLocationListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2AdvertisersAdvertiserIdManualTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdManualTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdManualTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AdvertisersAdvertiserIdManualTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdNegativeKeywordListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdNegativeKeywordListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdYoutubeAdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2AdvertisersAdvertiserIdAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CombinedAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CombinedAudiencesCombinedAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomBiddingAlgorithmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomBiddingAlgorithmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomListsCustomListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FirstAndThirdPartyAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FirstAndThirdPartyAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2FloodlightGroupsFloodlightGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GoogleAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GoogleAudiencesGoogleAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GuaranteedOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GuaranteedOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GuaranteedOrdersGuaranteedOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2GuaranteedOrdersGuaranteedOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventorySourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventorySourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2InventorySourceGroupsInventorySourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventorySourceGroupsInventorySourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2InventorySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventorySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventorySourcesInventorySourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2InventorySourcesInventorySourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2PartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PartnersPartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PartnersPartnerIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PartnersPartnerIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2PartnersPartnerIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PartnersPartnerIdChannelsChannelIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PartnersPartnerIdChannelsChannelIdSitesBulkEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PartnersPartnerIdChannelsChannelIdSitesReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2PartnersPartnerIdEditAssignedTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SdfdownloadtasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TargetingTypesTargetingTypeTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TargetingTypesTargetingTypeTargetingOptionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdBulkEditAssignedUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
