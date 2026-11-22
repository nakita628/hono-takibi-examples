import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDownloadResourceName(
  args: InferRequestType<(typeof client.download)[':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.download[':resourceName'].$get(args, options))
}

export async function postMediaResourceName(
  args: InferRequestType<(typeof client.media)[':resourceName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':resourceName'].$post(args, options))
}

export async function getV2Advertisers(
  args: InferRequestType<typeof client.v2.advertisers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers.$get(args, options))
}

export async function postV2Advertisers(
  args: InferRequestType<typeof client.v2.advertisers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers.$post(args, options))
}

export async function getV2AdvertisersAdvertiserId(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].$get(args, options))
}

export async function deleteV2AdvertisersAdvertiserId(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].$delete(args, options))
}

export async function patchV2AdvertisersAdvertiserId(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].$patch(args, options))
}

export async function postV2AdvertisersAdvertiserIdAssets(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].assets.$post(args, options))
}

export async function getV2AdvertisersAdvertiserIdCampaigns(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].campaigns.$get(args, options))
}

export async function postV2AdvertisersAdvertiserIdCampaigns(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].campaigns.$post(args, options))
}

export async function getV2AdvertisersAdvertiserIdCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$get(args, options),
  )
}

export async function deleteV2AdvertisersAdvertiserIdCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$delete(args, options),
  )
}

export async function patchV2AdvertisersAdvertiserIdCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$patch(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions.$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].campaigns[
      ':campaignId:listAssignedTargetingOptions'
    ].$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdChannels(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].channels.$get(args, options))
}

export async function postV2AdvertisersAdvertiserIdChannels(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].channels.$post(args, options))
}

export async function patchV2AdvertisersAdvertiserIdChannelsChannelId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].channels[':channelId'].$patch(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdChannelsChannelIdSites(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].channels[':channelId'].sites.$get(args, options),
  )
}

export async function deleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].channels[':channelId'].sites[':urlOrAppId'].$delete(
      args,
      options,
    ),
  )
}

export async function postV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEdit(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:bulkEdit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].channels[':channelId']['sites:bulkEdit'].$post(
      args,
      options,
    ),
  )
}

export async function postV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplace(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:replace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].channels[':channelId']['sites:replace'].$post(
      args,
      options,
    ),
  )
}

export async function getV2AdvertisersAdvertiserIdCreatives(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].creatives.$get(args, options))
}

export async function postV2AdvertisersAdvertiserIdCreatives(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].creatives.$post(args, options))
}

export async function getV2AdvertisersAdvertiserIdCreativesCreativeId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$get(args, options),
  )
}

export async function deleteV2AdvertisersAdvertiserIdCreativesCreativeId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$delete(args, options),
  )
}

export async function patchV2AdvertisersAdvertiserIdCreativesCreativeId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$patch(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdInsertionOrders(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].insertionOrders.$get(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdInsertionOrders(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].insertionOrders.$post(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$get(args, options),
  )
}

export async function deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$patch(
      args,
      options,
    ),
  )
}

export async function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions.$get(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions.$post(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, options),
  )
}

export async function deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions[':assignedTargetingOptionId'].$delete(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].insertionOrders[
      ':insertionOrderId:listAssignedTargetingOptions'
    ].$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdInvoices(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].invoices.$get(args, options))
}

export async function getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrency(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId']['invoices:lookupInvoiceCurrency'].$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdLineItems(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].lineItems.$get(args, options))
}

export async function postV2AdvertisersAdvertiserIdLineItems(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId'].lineItems.$post(args, options))
}

export async function getV2AdvertisersAdvertiserIdLineItemsLineItemId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$get(args, options),
  )
}

export async function deleteV2AdvertisersAdvertiserIdLineItemsLineItemId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$delete(args, options),
  )
}

export async function patchV2AdvertisersAdvertiserIdLineItemsLineItemId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$patch(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions.$get(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions.$post(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, options),
  )
}

export async function deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions[':assignedTargetingOptionId'].$delete(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicate(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId:duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].lineItems[':lineItemId:duplicate'].$post(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkEditAssignedTargetingOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId']['lineItems:bulkEditAssignedTargetingOptions'].$post(
      args,
      options,
    ),
  )
}

export async function getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId']['lineItems:bulkListAssignedTargetingOptions'].$get(
      args,
      options,
    ),
  )
}

export async function postV2AdvertisersAdvertiserIdLineItemsBulkUpdate(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkUpdate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId']['lineItems:bulkUpdate'].$post(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdLineItemsGenerateDefault(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems:generateDefault']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId']['lineItems:generateDefault'].$post(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdLocationLists(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].locationLists.$get(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdLocationLists(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].locationLists.$post(args, options),
  )
}

export async function patchV2AdvertisersAdvertiserIdLocationListsLocationListId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].locationLists[':locationListId'].$patch(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocations(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].locationLists[':locationListId'].assignedLocations.$get(
      args,
      options,
    ),
  )
}

export async function postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocations(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].locationLists[':locationListId'].assignedLocations.$post(
      args,
      options,
    ),
  )
}

export async function deleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations'][':assignedLocationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].locationLists[':locationListId'].assignedLocations[
      ':assignedLocationId'
    ].$delete(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEdit(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations:bulkEdit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].locationLists[':locationListId'][
      'assignedLocations:bulkEdit'
    ].$post(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdManualTriggers(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].manualTriggers.$get(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdManualTriggers(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].manualTriggers.$post(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdManualTriggersTriggerId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId'].$get(args, options),
  )
}

export async function patchV2AdvertisersAdvertiserIdManualTriggersTriggerId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId'].$patch(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivate(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId:activate'].$post(
      args,
      options,
    ),
  )
}

export async function postV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivate(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId:deactivate'].$post(
      args,
      options,
    ),
  )
}

export async function getV2AdvertisersAdvertiserIdNegativeKeywordLists(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].negativeKeywordLists.$get(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdNegativeKeywordLists(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].negativeKeywordLists.$post(args, options),
  )
}

export async function patchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].negativeKeywordLists[':negativeKeywordListId'].$patch(
      args,
      options,
    ),
  )
}

export async function getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywords(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].negativeKeywordLists[
      ':negativeKeywordListId'
    ].negativeKeywords.$get(args, options),
  )
}

export async function deleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValue(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords'][':keywordValue']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].negativeKeywordLists[
      ':negativeKeywordListId'
    ].negativeKeywords[':keywordValue'].$delete(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEdit(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:bulkEdit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].negativeKeywordLists[':negativeKeywordListId'][
      'negativeKeywords:bulkEdit'
    ].$post(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplace(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:replace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].negativeKeywordLists[':negativeKeywordListId'][
      'negativeKeywords:replace'
    ].$post(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions.$get(args, options),
  )
}

export async function postV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions.$post(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, options),
  )
}

export async function deleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions[':assignedTargetingOptionId'].$delete(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdYoutubeAdGroupAds(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].youtubeAdGroupAds.$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].youtubeAdGroupAds[':youtubeAdGroupAdId'].$get(
      args,
      options,
    ),
  )
}

export async function getV2AdvertisersAdvertiserIdYoutubeAdGroups(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].youtubeAdGroups.$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions.$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId'][
      'youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions'
    ].$get(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdAudit(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.advertisers[':advertiserId:audit'].$get(args, options))
}

export async function postV2AdvertisersAdvertiserIdEditAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId:editAssignedTargetingOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId:editAssignedTargetingOptions'].$post(args, options),
  )
}

export async function getV2AdvertisersAdvertiserIdListAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.advertisers[':advertiserId:listAssignedTargetingOptions'].$get(args, options),
  )
}

export async function getV2CombinedAudiences(
  args: InferRequestType<typeof client.v2.combinedAudiences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.combinedAudiences.$get(args, options))
}

export async function getV2CombinedAudiencesCombinedAudienceId(
  args: InferRequestType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.combinedAudiences[':combinedAudienceId'].$get(args, options))
}

export async function getV2CustomBiddingAlgorithms(
  args: InferRequestType<typeof client.v2.customBiddingAlgorithms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customBiddingAlgorithms.$get(args, options))
}

export async function postV2CustomBiddingAlgorithms(
  args: InferRequestType<typeof client.v2.customBiddingAlgorithms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customBiddingAlgorithms.$post(args, options))
}

export async function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmId(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].$get(args, options),
  )
}

export async function patchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmId(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].$patch(args, options),
  )
}

export async function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScripts(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts.$get(args, options),
  )
}

export async function postV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScripts(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts.$post(args, options),
  )
}

export async function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptId(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts[
      ':customBiddingScriptId'
    ].$get(args, options),
  )
}

export async function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScript(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId:uploadScript'].$get(args, options),
  )
}

export async function getV2CustomLists(
  args: InferRequestType<typeof client.v2.customLists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customLists.$get(args, options))
}

export async function getV2CustomListsCustomListId(
  args: InferRequestType<(typeof client.v2.customLists)[':customListId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customLists[':customListId'].$get(args, options))
}

export async function getV2FirstAndThirdPartyAudiences(
  args: InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firstAndThirdPartyAudiences.$get(args, options))
}

export async function postV2FirstAndThirdPartyAudiences(
  args: InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firstAndThirdPartyAudiences.$post(args, options))
}

export async function getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceId(
  args: InferRequestType<
    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.firstAndThirdPartyAudiences[':firstAndThirdPartyAudienceId'].$get(args, options),
  )
}

export async function patchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceId(
  args: InferRequestType<
    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.firstAndThirdPartyAudiences[':firstAndThirdPartyAudienceId'].$patch(args, options),
  )
}

export async function postV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembers(
  args: InferRequestType<
    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId:editCustomerMatchMembers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.firstAndThirdPartyAudiences[
      ':firstAndThirdPartyAudienceId:editCustomerMatchMembers'
    ].$post(args, options),
  )
}

export async function getV2FloodlightGroupsFloodlightGroupId(
  args: InferRequestType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floodlightGroups[':floodlightGroupId'].$get(args, options))
}

export async function getV2GoogleAudiences(
  args: InferRequestType<typeof client.v2.googleAudiences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.googleAudiences.$get(args, options))
}

export async function getV2GoogleAudiencesGoogleAudienceId(
  args: InferRequestType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.googleAudiences[':googleAudienceId'].$get(args, options))
}

export async function getV2GuaranteedOrders(
  args: InferRequestType<typeof client.v2.guaranteedOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.guaranteedOrders.$get(args, options))
}

export async function postV2GuaranteedOrders(
  args: InferRequestType<typeof client.v2.guaranteedOrders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.guaranteedOrders.$post(args, options))
}

export async function getV2GuaranteedOrdersGuaranteedOrderId(
  args: InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.guaranteedOrders[':guaranteedOrderId'].$get(args, options))
}

export async function patchV2GuaranteedOrdersGuaranteedOrderId(
  args: InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.guaranteedOrders[':guaranteedOrderId'].$patch(args, options))
}

export async function postV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessors(
  args: InferRequestType<
    (typeof client.v2.guaranteedOrders)[':guaranteedOrderId:editGuaranteedOrderReadAccessors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.guaranteedOrders[':guaranteedOrderId:editGuaranteedOrderReadAccessors'].$post(
      args,
      options,
    ),
  )
}

export async function getV2InventorySourceGroups(
  args: InferRequestType<typeof client.v2.inventorySourceGroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventorySourceGroups.$get(args, options))
}

export async function postV2InventorySourceGroups(
  args: InferRequestType<typeof client.v2.inventorySourceGroups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventorySourceGroups.$post(args, options))
}

export async function getV2InventorySourceGroupsInventorySourceGroupId(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.inventorySourceGroups[':inventorySourceGroupId'].$get(args, options),
  )
}

export async function deleteV2InventorySourceGroupsInventorySourceGroupId(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.inventorySourceGroups[':inventorySourceGroupId'].$delete(args, options),
  )
}

export async function getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySources(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources.$get(
      args,
      options,
    ),
  )
}

export async function postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySources(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources.$post(
      args,
      options,
    ),
  )
}

export async function deleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceId(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources'][':assignedInventorySourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources[
      ':assignedInventorySourceId'
    ].$delete(args, options),
  )
}

export async function postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEdit(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources:bulkEdit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.inventorySourceGroups[':inventorySourceGroupId'][
      'assignedInventorySources:bulkEdit'
    ].$post(args, options),
  )
}

export async function getV2InventorySources(
  args: InferRequestType<typeof client.v2.inventorySources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventorySources.$get(args, options))
}

export async function postV2InventorySources(
  args: InferRequestType<typeof client.v2.inventorySources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventorySources.$post(args, options))
}

export async function getV2InventorySourcesInventorySourceId(
  args: InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventorySources[':inventorySourceId'].$get(args, options))
}

export async function patchV2InventorySourcesInventorySourceId(
  args: InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventorySources[':inventorySourceId'].$patch(args, options))
}

export async function postV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessors(
  args: InferRequestType<
    (typeof client.v2.inventorySources)[':inventorySourceId:editInventorySourceReadWriteAccessors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.inventorySources[':inventorySourceId:editInventorySourceReadWriteAccessors'].$post(
      args,
      options,
    ),
  )
}

export async function getV2Partners(
  args: InferRequestType<typeof client.v2.partners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.partners.$get(args, options))
}

export async function getV2PartnersPartnerId(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.partners[':partnerId'].$get(args, options))
}

export async function getV2PartnersPartnerIdChannels(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.partners[':partnerId'].channels.$get(args, options))
}

export async function postV2PartnersPartnerIdChannels(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.partners[':partnerId'].channels.$post(args, options))
}

export async function patchV2PartnersPartnerIdChannelsChannelId(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partners[':partnerId'].channels[':channelId'].$patch(args, options),
  )
}

export async function getV2PartnersPartnerIdChannelsChannelIdSites(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partners[':partnerId'].channels[':channelId'].sites.$get(args, options),
  )
}

export async function deleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppId(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partners[':partnerId'].channels[':channelId'].sites[':urlOrAppId'].$delete(
      args,
      options,
    ),
  )
}

export async function postV2PartnersPartnerIdChannelsChannelIdSitesBulkEdit(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:bulkEdit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partners[':partnerId'].channels[':channelId']['sites:bulkEdit'].$post(args, options),
  )
}

export async function postV2PartnersPartnerIdChannelsChannelIdSitesReplace(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:replace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partners[':partnerId'].channels[':channelId']['sites:replace'].$post(args, options),
  )
}

export async function getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partners[':partnerId'].targetingTypes[':targetingType'].assignedTargetingOptions.$get(
      args,
      options,
    ),
  )
}

export async function postV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partners[':partnerId'].targetingTypes[
      ':targetingType'
    ].assignedTargetingOptions.$post(args, options),
  )
}

export async function getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partners[':partnerId'].targetingTypes[':targetingType'].assignedTargetingOptions[
      ':assignedTargetingOptionId'
    ].$get(args, options),
  )
}

export async function deleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partners[':partnerId'].targetingTypes[':targetingType'].assignedTargetingOptions[
      ':assignedTargetingOptionId'
    ].$delete(args, options),
  )
}

export async function postV2PartnersPartnerIdEditAssignedTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId:editAssignedTargetingOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partners[':partnerId:editAssignedTargetingOptions'].$post(args, options),
  )
}

export async function postV2Sdfdownloadtasks(
  args: InferRequestType<typeof client.v2.sdfdownloadtasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sdfdownloadtasks.$post(args, options))
}

export async function getV2TargetingTypesTargetingTypeTargetingOptions(
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.targetingTypes[':targetingType'].targetingOptions.$get(args, options),
  )
}

export async function getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionId(
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.targetingTypes[':targetingType'].targetingOptions[':targetingOptionId'].$get(
      args,
      options,
    ),
  )
}

export async function postV2TargetingTypesTargetingTypeTargetingOptionsSearch(
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions:search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.targetingTypes[':targetingType']['targetingOptions:search'].$post(args, options),
  )
}

export async function getV2Users(
  args: InferRequestType<typeof client.v2.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.$get(args, options))
}

export async function postV2Users(
  args: InferRequestType<typeof client.v2.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.$post(args, options))
}

export async function getV2UsersUserId(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].$get(args, options))
}

export async function deleteV2UsersUserId(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].$delete(args, options))
}

export async function patchV2UsersUserId(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].$patch(args, options))
}

export async function postV2UsersUserIdBulkEditAssignedUserRoles(
  args: InferRequestType<(typeof client.v2.users)[':userId:bulkEditAssignedUserRoles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.users[':userId:bulkEditAssignedUserRoles'].$post(args, options),
  )
}

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}
