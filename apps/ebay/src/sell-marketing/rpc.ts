import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdCampaign(
  args: InferRequestType<typeof client.ad_campaign.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign.$get(args, options))
}

export async function postAdCampaign(
  args: InferRequestType<typeof client.ad_campaign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign.$post(args, options))
}

export async function getAdCampaignFindCampaignByAdReference(
  args: InferRequestType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign.find_campaign_by_ad_reference.$get(args, options))
}

export async function getAdCampaignGetCampaignByName(
  args: InferRequestType<typeof client.ad_campaign.get_campaign_by_name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign.get_campaign_by_name.$get(args, options))
}

export async function getAdCampaignCampaignId(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].$get(args, options))
}

export async function deleteAdCampaignCampaignId(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].$delete(args, options))
}

export async function getAdCampaignCampaignIdAd(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].ad.$get(args, options))
}

export async function postAdCampaignCampaignIdAd(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].ad.$post(args, options))
}

export async function getAdCampaignCampaignIdAdAdId(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].ad[':ad_id'].$get(args, options))
}

export async function deleteAdCampaignCampaignIdAdAdId(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].ad[':ad_id'].$delete(args, options))
}

export async function postAdCampaignCampaignIdAdAdIdUpdateBid(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['update_bid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].ad[':ad_id'].update_bid.$post(args, options),
  )
}

export async function getAdCampaignCampaignIdAdGroup(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].ad_group.$get(args, options))
}

export async function postAdCampaignCampaignIdAdGroup(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].ad_group.$post(args, options))
}

export async function getAdCampaignCampaignIdAdGroupAdGroupId(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].$get(args, options),
  )
}

export async function putAdCampaignCampaignIdAdGroupAdGroupId(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].$put(args, options),
  )
}

export async function postAdCampaignCampaignIdAdGroupAdGroupIdSuggestBids(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_bids']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].suggest_bids.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywords(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_keywords']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].suggest_keywords.$post(
      args,
      options,
    ),
  )
}

export async function postAdCampaignCampaignIdBulkCreateAdsByInventoryReference(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_inventory_reference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].bulk_create_ads_by_inventory_reference.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdBulkCreateAdsByListingId(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_listing_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].bulk_create_ads_by_listing_id.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdBulkCreateKeyword(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['bulk_create_keyword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].bulk_create_keyword.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdBulkDeleteAdsByInventoryReference(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_inventory_reference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].bulk_delete_ads_by_inventory_reference.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdBulkDeleteAdsByListingId(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_listing_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].bulk_delete_ads_by_listing_id.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReference(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_inventory_reference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].bulk_update_ads_bid_by_inventory_reference.$post(
      args,
      options,
    ),
  )
}

export async function postAdCampaignCampaignIdBulkUpdateAdsBidByListingId(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_listing_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].bulk_update_ads_bid_by_listing_id.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdBulkUpdateAdsStatus(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].bulk_update_ads_status.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdBulkUpdateAdsStatusByListingId(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status_by_listing_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].bulk_update_ads_status_by_listing_id.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdBulkUpdateKeyword(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['bulk_update_keyword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].bulk_update_keyword.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdClone(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].clone.$post(args, options))
}

export async function postAdCampaignCampaignIdCreateAdsByInventoryReference(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['create_ads_by_inventory_reference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].create_ads_by_inventory_reference.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdDeleteAdsByInventoryReference(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['delete_ads_by_inventory_reference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].delete_ads_by_inventory_reference.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdEnd(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['end']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].end.$post(args, options))
}

export async function getAdCampaignCampaignIdGetAdsByInventoryReference(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].get_ads_by_inventory_reference.$get(args, options),
  )
}

export async function getAdCampaignCampaignIdKeyword(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].keyword.$get(args, options))
}

export async function postAdCampaignCampaignIdKeyword(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].keyword.$post(args, options))
}

export async function getAdCampaignCampaignIdKeywordKeywordId(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].keyword[':keyword_id'].$get(args, options),
  )
}

export async function putAdCampaignCampaignIdKeywordKeywordId(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].keyword[':keyword_id'].$put(args, options),
  )
}

export async function postAdCampaignCampaignIdPause(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].pause.$post(args, options))
}

export async function postAdCampaignCampaignIdResume(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].resume.$post(args, options))
}

export async function getAdCampaignCampaignIdSuggestItems(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_campaign[':campaign_id'].suggest_items.$get(args, options))
}

export async function postAdCampaignCampaignIdUpdateAdRateStrategy(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['update_ad_rate_strategy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].update_ad_rate_strategy.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdUpdateCampaignBudget(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['update_campaign_budget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].update_campaign_budget.$post(args, options),
  )
}

export async function postAdCampaignCampaignIdUpdateCampaignIdentification(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['update_campaign_identification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_campaign[':campaign_id'].update_campaign_identification.$post(args, options),
  )
}

export async function getAdReportReportId(
  args: InferRequestType<(typeof client.ad_report)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_report[':report_id'].$get(args, options))
}

export async function getAdReportMetadata(options?: ClientRequestOptions) {
  return await parseResponse(client.ad_report_metadata.$get(undefined, options))
}

export async function getAdReportMetadataReportType(
  args: InferRequestType<(typeof client.ad_report_metadata)[':report_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_report_metadata[':report_type'].$get(args, options))
}

export async function getAdReportTask(
  args: InferRequestType<typeof client.ad_report_task.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_report_task.$get(args, options))
}

export async function postAdReportTask(
  args: InferRequestType<typeof client.ad_report_task.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_report_task.$post(args, options))
}

export async function getAdReportTaskReportTaskId(
  args: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_report_task[':report_task_id'].$get(args, options))
}

export async function deleteAdReportTaskReportTaskId(
  args: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_report_task[':report_task_id'].$delete(args, options))
}

export async function postBulkCreateNegativeKeyword(
  args: InferRequestType<typeof client.bulk_create_negative_keyword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk_create_negative_keyword.$post(args, options))
}

export async function postBulkUpdateNegativeKeyword(
  args: InferRequestType<typeof client.bulk_update_negative_keyword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk_update_negative_keyword.$post(args, options))
}

export async function postItemPriceMarkdown(
  args: InferRequestType<typeof client.item_price_markdown.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_price_markdown.$post(args, options))
}

export async function getItemPriceMarkdownPromotionId(
  args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_price_markdown[':promotion_id'].$get(args, options))
}

export async function putItemPriceMarkdownPromotionId(
  args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_price_markdown[':promotion_id'].$put(args, options))
}

export async function deleteItemPriceMarkdownPromotionId(
  args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_price_markdown[':promotion_id'].$delete(args, options))
}

export async function postItemPromotion(
  args: InferRequestType<typeof client.item_promotion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_promotion.$post(args, options))
}

export async function getItemPromotionPromotionId(
  args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_promotion[':promotion_id'].$get(args, options))
}

export async function putItemPromotionPromotionId(
  args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_promotion[':promotion_id'].$put(args, options))
}

export async function deleteItemPromotionPromotionId(
  args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_promotion[':promotion_id'].$delete(args, options))
}

export async function getNegativeKeyword(
  args: InferRequestType<typeof client.negative_keyword.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.negative_keyword.$get(args, options))
}

export async function postNegativeKeyword(
  args: InferRequestType<typeof client.negative_keyword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.negative_keyword.$post(args, options))
}

export async function getNegativeKeywordNegativeKeywordId(
  args: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.negative_keyword[':negative_keyword_id'].$get(args, options))
}

export async function putNegativeKeywordNegativeKeywordId(
  args: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.negative_keyword[':negative_keyword_id'].$put(args, options))
}

export async function getPromotion(
  args: InferRequestType<typeof client.promotion.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotion.$get(args, options))
}

export async function getPromotionPromotionIdGetListingSet(
  args: InferRequestType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotion[':promotion_id'].get_listing_set.$get(args, options))
}

export async function postPromotionPromotionIdPause(
  args: InferRequestType<(typeof client.promotion)[':promotion_id']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotion[':promotion_id'].pause.$post(args, options))
}

export async function postPromotionPromotionIdResume(
  args: InferRequestType<(typeof client.promotion)[':promotion_id']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotion[':promotion_id'].resume.$post(args, options))
}

export async function getPromotionReport(
  args: InferRequestType<typeof client.promotion_report.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotion_report.$get(args, options))
}

export async function getPromotionSummaryReport(
  args: InferRequestType<typeof client.promotion_summary_report.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotion_summary_report.$get(args, options))
}
