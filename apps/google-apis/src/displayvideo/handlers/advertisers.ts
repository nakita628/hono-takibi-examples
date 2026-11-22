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
  patchV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute,
  patchV2AdvertisersAdvertiserIdChannelsChannelIdRoute,
  patchV2AdvertisersAdvertiserIdCreativesCreativeIdRoute,
  patchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute,
  patchV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute,
  patchV2AdvertisersAdvertiserIdLocationListsLocationListIdRoute,
  patchV2AdvertisersAdvertiserIdManualTriggersTriggerIdRoute,
  patchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdRoute,
  patchV2AdvertisersAdvertiserIdRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const advertisersHandler = app
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
