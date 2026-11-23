import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdAccounts(
  args: InferRequestType<typeof client.ad_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts.$get(args, options))
}

export async function postAdAccounts(
  args: InferRequestType<typeof client.ad_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts.$post(args, options))
}

export async function getAdAccountsEntityHistory(
  args: InferRequestType<typeof client.ad_accounts.entity_history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts.entity_history.$get(args, options))
}

export async function getAdAccountsAdAccountId(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].$get(args, options))
}

export async function getAdAccountsAdAccountIdAbTests(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ab_tests.$get(args, options))
}

export async function postAdAccountsAdAccountIdAbTests(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ab_tests.$post(args, options))
}

export async function patchAdAccountsAdAccountIdAbTests(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ab_tests.$patch(args, options))
}

export async function getAdAccountsAdAccountIdAbTestsAbTestId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ab_tests[':ab_test_id'].$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdAdGroups(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ad_groups.$get(args, options))
}

export async function postAdAccountsAdAccountIdAdGroups(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ad_groups.$post(args, options))
}

export async function patchAdAccountsAdAccountIdAdGroups(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ad_groups.$patch(args, options))
}

export async function getAdAccountsAdAccountIdAdGroupsAnalytics(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ad_groups.analytics.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdAdGroupsAudienceSizing(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['audience_sizing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ad_groups.audience_sizing.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdAdGroupsTargetingAnalytics(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ad_groups.targeting_analytics.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdAdGroupsAdGroupId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitles(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.$post(
      args,
      options,
    ),
  )
}

export async function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsv(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.csv.$get(
      args,
      options,
    ),
  )
}

export async function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatus(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.status.$get(
      args,
      options,
    ),
  )
}

export async function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploads(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.uploads.$get(
      args,
      options,
    ),
  )
}

export async function getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklists(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].publisher_blocklists.$get(
      args,
      options,
    ),
  )
}

export async function patchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklists(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].publisher_blocklists.$patch(
      args,
      options,
    ),
  )
}

export async function postAdAccountsAdAccountIdAdPreviews(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_previews']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ad_previews.$post(args, options))
}

export async function getAdAccountsAdAccountIdAds(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ads.$get(args, options))
}

export async function postAdAccountsAdAccountIdAds(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ads.$post(args, options))
}

export async function patchAdAccountsAdAccountIdAds(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ads.$patch(args, options))
}

export async function getAdAccountsAdAccountIdAdsAnalytics(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ads.analytics.$get(args, options))
}

export async function getAdAccountsAdAccountIdAdsTargetingAnalytics(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ads.targeting_analytics.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdAdsAdId(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ads[':ad_id'].$get(args, options))
}

export async function getAdAccountsAdAccountIdAdsCreditDiscounts(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ads_credit.discounts.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdAdsCreditRedeem(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['redeem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ads_credit.redeem.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdAdvertiserDefinedEvents(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].advertiser_defined_events.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdAdvertiserDefinedEvents(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].advertiser_defined_events.$post(args, options),
  )
}

export async function deleteAdAccountsAdAccountIdAdvertiserDefinedEvents(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].advertiser_defined_events.$delete(args, options),
  )
}

export async function patchAdAccountsAdAccountIdAdvertiserDefinedEvents(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].advertiser_defined_events.$patch(args, options),
  )
}

export async function getAdAccountsAdAccountIdAllowedDomains(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].allowed_domains.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdAnalytics(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].analytics.$get(args, options))
}

export async function getAdAccountsAdAccountIdAudienceInsights(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].audience_insights.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdAudiences(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].audiences.$get(args, options))
}

export async function postAdAccountsAdAccountIdAudiences(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].audiences.$post(args, options))
}

export async function patchAdAccountsAdAccountIdAudiencesAdAccountsShared(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences']['ad_accounts']['shared']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].audiences.ad_accounts.shared.$patch(args, options),
  )
}

export async function patchAdAccountsAdAccountIdAudiencesBusinessesShared(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences']['businesses']['shared']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].audiences.businesses.shared.$patch(args, options),
  )
}

export async function getAdAccountsAdAccountIdAudiencesSharedAccounts(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].audiences.shared.accounts.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdAudiencesAudienceId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].audiences[':audience_id'].$get(args, options),
  )
}

export async function patchAdAccountsAdAccountIdAudiencesAudienceId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].audiences[':audience_id'].$patch(args, options),
  )
}

export async function postAdAccountsAdAccountIdBidFloor(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bid_floor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].bid_floor.$post(args, options))
}

export async function getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownload(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].billing_invoice[':billing_invoice_id'].download.$get(
      args,
      options,
    ),
  )
}

export async function getAdAccountsAdAccountIdBillingInvoices(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].billing_invoices.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdBillingProfiles(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].billing_profiles.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdBulkDownload(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['bulk']['download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].bulk.download.$post(args, options),
  )
}

export async function postAdAccountsAdAccountIdBulkUpsert(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['bulk']['upsert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].bulk.upsert.$post(args, options))
}

export async function getAdAccountsAdAccountIdBulkBulkRequestId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].bulk[':bulk_request_id'].$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdCampaignAdPreview(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].campaign_ad_preview.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdCampaignAdPreview(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].campaign_ad_preview.$post(args, options),
  )
}

export async function deleteAdAccountsAdAccountIdCampaignAdPreview(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].campaign_ad_preview.$delete(args, options),
  )
}

export async function getAdAccountsAdAccountIdCampaigns(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].campaigns.$get(args, options))
}

export async function postAdAccountsAdAccountIdCampaigns(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].campaigns.$post(args, options))
}

export async function patchAdAccountsAdAccountIdCampaigns(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].campaigns.$patch(args, options))
}

export async function getAdAccountsAdAccountIdCampaignsAnalytics(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].campaigns.analytics.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdCampaignsDeliveryEstimates(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['delivery_estimates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].campaigns.delivery_estimates.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdCampaignsTargetingAnalytics(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].campaigns.targeting_analytics.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].campaigns[':campaign_id'].$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdConversionDeletionRequests(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_deletion_requests.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdConversionDeletionRequests(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_deletion_requests.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdConversionDeletionRequestsRequestId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_deletion_requests[':request_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAdAccountsAdAccountIdConversionDeletionRequestsRequestId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_deletion_requests[':request_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdAccountsAdAccountIdConversionEqs(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_eqs.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdConversionSegments(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_segments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_segments.$post(args, options),
  )
}

export async function deleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_segments[':conversion_segment_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchAdAccountsAdAccountIdConversionSegmentsConversionSegmentId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_segments'][':conversion_segment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_segments[':conversion_segment_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getAdAccountsAdAccountIdConversionTags(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_tags.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdConversionTags(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_tags.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdConversionTagsOcpmEligible(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_tags.ocpm_eligible.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdConversionTagsPageVisit(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_tags.page_visit.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdConversionTagsConversionTagId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].conversion_tags[':conversion_tag_id'].$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdCustomerLists(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].customer_lists.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdCustomerLists(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].customer_lists.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdCustomerListsCustomerListId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].$get(args, options),
  )
}

export async function patchAdAccountsAdAccountIdCustomerListsCustomerListId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].$patch(args, options),
  )
}

export async function postAdAccountsAdAccountIdCustomerListsCustomerListIdUploads(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads.$post(
      args,
      options,
    ),
  )
}

export async function getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads[
      ':customer_list_upload_id'
    ].$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRun(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['run']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads[
      ':customer_list_upload_id'
    ].run.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdCustomerSegments(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].customer_segments.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdCustomerSegments(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].customer_segments.$post(args, options),
  )
}

export async function patchAdAccountsAdAccountIdCustomerSegments(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].customer_segments.$patch(args, options),
  )
}

export async function postAdAccountsAdAccountIdEvents(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].events.$post(args, options))
}

export async function getAdAccountsAdAccountIdInsightsAudiences(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].insights.audiences.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdKeywords(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].keywords.$get(args, options))
}

export async function postAdAccountsAdAccountIdKeywords(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].keywords.$post(args, options))
}

export async function patchAdAccountsAdAccountIdKeywords(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].keywords.$patch(args, options))
}

export async function getAdAccountsAdAccountIdKeywordsMetrics(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].keywords.metrics.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdLabels(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].labels.$get(args, options))
}

export async function postAdAccountsAdAccountIdLabels(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].labels.$post(args, options))
}

export async function patchAdAccountsAdAccountIdLabels(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].labels.$patch(args, options))
}

export async function postAdAccountsAdAccountIdLabelsLabelIdApply(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['apply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].labels[':label_id'].apply.$post(args, options),
  )
}

export async function postAdAccountsAdAccountIdLabelsLabelIdRemove(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['labels'][':label_id']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].labels[':label_id'].remove.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdLeadForms(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].lead_forms.$get(args, options))
}

export async function postAdAccountsAdAccountIdLeadForms(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].lead_forms.$post(args, options))
}

export async function patchAdAccountsAdAccountIdLeadForms(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].lead_forms.$patch(args, options))
}

export async function getAdAccountsAdAccountIdLeadFormsLeadFormId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].lead_forms[':lead_form_id'].$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdLeadFormsLeadFormIdTest(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].lead_forms[':lead_form_id'].test.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdLeadsSubscriptions(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].leads.subscriptions.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdLeadsSubscriptions(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].leads.subscriptions.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].leads.subscriptions[':subscription_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].leads.subscriptions[':subscription_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postAdAccountsAdAccountIdLeadsExport(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['leads_export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].leads_export.$post(args, options))
}

export async function getAdAccountsAdAccountIdLeadsExportLeadsExportId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].leads_export[':leads_export_id'].$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdMmmReports(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].mmm_reports.$get(args, options))
}

export async function postAdAccountsAdAccountIdMmmReports(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].mmm_reports.$post(args, options))
}

export async function postAdAccountsAdAccountIdMsotEvents(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['msot']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].msot.events.$post(args, options))
}

export async function getAdAccountsAdAccountIdOrderLines(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].order_lines.$get(args, options))
}

export async function getAdAccountsAdAccountIdOrderLinesOrderLineId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].order_lines[':order_line_id'].$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdPinsAnalytics(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].pins.analytics.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdProductGroupPromotions(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].product_group_promotions.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdProductGroupPromotions(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].product_group_promotions.$post(args, options),
  )
}

export async function patchAdAccountsAdAccountIdProductGroupPromotions(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].product_group_promotions.$patch(args, options),
  )
}

export async function getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].product_group_promotions[
      ':product_group_promotion_id'
    ].$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdProductGroupsAnalytics(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].product_groups.analytics.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdPromotionAppliedEntities(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].promotion_applied_entities.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdPromotions(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].promotions.$get(args, options))
}

export async function postAdAccountsAdAccountIdPromotions(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].promotions.$post(args, options))
}

export async function patchAdAccountsAdAccountIdPromotions(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].promotions.$patch(args, options))
}

export async function getAdAccountsAdAccountIdPromotionsPromotionId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].promotions[':promotion_id'].$get(args, options),
  )
}

export async function deleteAdAccountsAdAccountIdPromotionsPromotionId(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].promotions[':promotion_id'].$delete(args, options),
  )
}

export async function getAdAccountsAdAccountIdPublisherBlocklists(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].publisher_blocklists.$get(args, options),
  )
}

export async function patchAdAccountsAdAccountIdPublisherBlocklists(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].publisher_blocklists.$patch(args, options),
  )
}

export async function getAdAccountsAdAccountIdReports(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].reports.$get(args, options))
}

export async function postAdAccountsAdAccountIdReports(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].reports.$post(args, options))
}

export async function getAdAccountsAdAccountIdReportsBrandCategorySku(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].reports.brand_category_sku.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdReportsBrandCategorySku(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].reports.brand_category_sku.$post(args, options),
  )
}

export async function deleteAdAccountsAdAccountIdSandbox(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['sandbox']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].sandbox.$delete(args, options))
}

export async function getAdAccountsAdAccountIdSchedules(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].schedules.$get(args, options))
}

export async function postAdAccountsAdAccountIdSchedules(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].schedules.$post(args, options))
}

export async function patchAdAccountsAdAccountIdSchedules(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].schedules.$patch(args, options))
}

export async function getAdAccountsAdAccountIdSsioAccounts(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].ssio.accounts.$get(args, options))
}

export async function postAdAccountsAdAccountIdSsioInsertionOrders(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ssio.insertion_orders.$post(args, options),
  )
}

export async function patchAdAccountsAdAccountIdSsioInsertionOrders(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ssio.insertion_orders.$patch(args, options),
  )
}

export async function getAdAccountsAdAccountIdSsioInsertionOrdersStatus(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ssio.insertion_orders.status.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatus(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ssio.insertion_orders[':pin_order_id'].status.$get(
      args,
      options,
    ),
  )
}

export async function getAdAccountsAdAccountIdSsioOrderLines(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].ssio.order_lines.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdTargetingAnalytics(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].targeting_analytics.$get(args, options),
  )
}

export async function getAdAccountsAdAccountIdTargetingTemplates(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].targeting_templates.$get(args, options),
  )
}

export async function postAdAccountsAdAccountIdTargetingTemplates(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].targeting_templates.$post(args, options),
  )
}

export async function patchAdAccountsAdAccountIdTargetingTemplates(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].targeting_templates.$patch(args, options),
  )
}

export async function getAdAccountsAdAccountIdTemplates(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad_accounts[':ad_account_id'].templates.$get(args, options))
}

export async function postAdAccountsAdAccountIdTemplatesTemplateIdReports(
  args: InferRequestType<
    (typeof client.ad_accounts)[':ad_account_id']['templates'][':template_id']['reports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].templates[':template_id'].reports.$post(args, options),
  )
}

export async function getAdAccountsAdAccountIdTermsOfService(
  args: InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ad_accounts[':ad_account_id'].terms_of_service.$get(args, options),
  )
}

export async function postAdvancedAuctionItemsGet(
  args: InferRequestType<typeof client.advanced_auction.items.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced_auction.items.get.$post(args, options))
}

export async function postAdvancedAuctionItemsSubmit(
  args: InferRequestType<typeof client.advanced_auction.items.submit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced_auction.items.submit.$post(args, options))
}

export async function getBoards(
  args: InferRequestType<typeof client.boards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards.$get(args, options))
}

export async function postBoards(
  args: InferRequestType<typeof client.boards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards.$post(args, options))
}

export async function getBoardsBoardId(
  args: InferRequestType<(typeof client.boards)[':board_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':board_id'].$get(args, options))
}

export async function deleteBoardsBoardId(
  args: InferRequestType<(typeof client.boards)[':board_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':board_id'].$delete(args, options))
}

export async function patchBoardsBoardId(
  args: InferRequestType<(typeof client.boards)[':board_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':board_id'].$patch(args, options))
}

export async function getBoardsBoardIdPins(
  args: InferRequestType<(typeof client.boards)[':board_id']['pins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':board_id'].pins.$get(args, options))
}

export async function getBoardsBoardIdSections(
  args: InferRequestType<(typeof client.boards)[':board_id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':board_id'].sections.$get(args, options))
}

export async function postBoardsBoardIdSections(
  args: InferRequestType<(typeof client.boards)[':board_id']['sections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':board_id'].sections.$post(args, options))
}

export async function deleteBoardsBoardIdSectionsSectionId(
  args: InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':board_id'].sections[':section_id'].$delete(args, options),
  )
}

export async function patchBoardsBoardIdSectionsSectionId(
  args: InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':board_id'].sections[':section_id'].$patch(args, options),
  )
}

export async function getBoardsBoardIdSectionsSectionIdPins(
  args: InferRequestType<
    (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':board_id'].sections[':section_id'].pins.$get(args, options),
  )
}

export async function postBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccounts(
  args: InferRequestType<
    (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_access.business_hierarchy[':business_hierarchy_id'].brand_accounts.$post(
      args,
      options,
    ),
  )
}

export async function patchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountId(
  args: InferRequestType<
    (typeof client.business_access.business_hierarchy)[':business_hierarchy_id']['brand_accounts'][':brand_account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_access.business_hierarchy[':business_hierarchy_id'].brand_accounts[
      ':brand_account_id'
    ].$patch(args, options),
  )
}

export async function postBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessAction(
  args: InferRequestType<
    (typeof client.business_access.business_rmn_invites)[':business_relationship_invite_id']['auth_process_action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_access.business_rmn_invites[
      ':business_relationship_invite_id'
    ].auth_process_action.$post(args, options),
  )
}

export async function getBusinessesEmployers(
  args: InferRequestType<typeof client.businesses.employers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses.employers.$get(args, options))
}

export async function patchBusinessesInvites(
  args: InferRequestType<typeof client.businesses.invites.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses.invites.$patch(args, options))
}

export async function getBusinessesBusinessIdAdAccountRequests(
  args: InferRequestType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].ad_account_requests.$get(args, options),
  )
}

export async function postBusinessesBusinessIdAdAccountRequestsAccept(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['ad_account_requests']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].ad_account_requests.accept.$post(args, options),
  )
}

export async function postBusinessesBusinessIdAdAccountRequestsReject(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['ad_account_requests']['reject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].ad_account_requests.reject.$post(args, options),
  )
}

export async function getBusinessesBusinessIdAnalytics(
  args: InferRequestType<(typeof client.businesses)[':business_id']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].analytics.$get(args, options))
}

export async function getBusinessesBusinessIdAnalyticsAggregatedTimeline(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].analytics.aggregated_timeline.$get(args, options),
  )
}

export async function postBusinessesBusinessIdAssetGroups(
  args: InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].asset_groups.$post(args, options))
}

export async function deleteBusinessesBusinessIdAssetGroups(
  args: InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].asset_groups.$delete(args, options))
}

export async function patchBusinessesBusinessIdAssetGroups(
  args: InferRequestType<(typeof client.businesses)[':business_id']['asset_groups']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].asset_groups.$patch(args, options))
}

export async function getBusinessesBusinessIdAssets(
  args: InferRequestType<(typeof client.businesses)[':business_id']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].assets.$get(args, options))
}

export async function getBusinessesBusinessIdAssetsAssetIdMembers(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].assets[':asset_id'].members.$get(args, options),
  )
}

export async function getBusinessesBusinessIdAssetsAssetIdPartners(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].assets[':asset_id'].partners.$get(args, options),
  )
}

export async function getBusinessesBusinessIdAudiences(
  args: InferRequestType<(typeof client.businesses)[':business_id']['audiences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].audiences.$get(args, options))
}

export async function patchBusinessesBusinessIdAudiencesAdAccountsShared(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['audiences']['ad_accounts']['shared']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].audiences.ad_accounts.shared.$patch(args, options),
  )
}

export async function patchBusinessesBusinessIdAudiencesBusinessesShared(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['audiences']['businesses']['shared']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].audiences.businesses.shared.$patch(args, options),
  )
}

export async function getBusinessesBusinessIdAudiencesSharedAccounts(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].audiences.shared.accounts.$get(args, options),
  )
}

export async function getBusinessesBusinessIdInvites(
  args: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].invites.$get(args, options))
}

export async function postBusinessesBusinessIdInvites(
  args: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].invites.$post(args, options))
}

export async function deleteBusinessesBusinessIdInvites(
  args: InferRequestType<(typeof client.businesses)[':business_id']['invites']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].invites.$delete(args, options))
}

export async function postBusinessesBusinessIdInvitesAssetsAccess(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['invites']['assets']['access']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].invites.assets.access.$post(args, options),
  )
}

export async function getBusinessesBusinessIdMembers(
  args: InferRequestType<(typeof client.businesses)[':business_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].members.$get(args, options))
}

export async function deleteBusinessesBusinessIdMembers(
  args: InferRequestType<(typeof client.businesses)[':business_id']['members']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].members.$delete(args, options))
}

export async function patchBusinessesBusinessIdMembers(
  args: InferRequestType<(typeof client.businesses)[':business_id']['members']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].members.$patch(args, options))
}

export async function deleteBusinessesBusinessIdMembersAssetsAccess(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['members']['assets']['access']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].members.assets.access.$delete(args, options),
  )
}

export async function patchBusinessesBusinessIdMembersAssetsAccess(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['members']['assets']['access']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].members.assets.access.$patch(args, options),
  )
}

export async function getBusinessesBusinessIdMembersMemberIdAssets(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].members[':member_id'].assets.$get(args, options),
  )
}

export async function getBusinessesBusinessIdPartners(
  args: InferRequestType<(typeof client.businesses)[':business_id']['partners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].partners.$get(args, options))
}

export async function deleteBusinessesBusinessIdPartners(
  args: InferRequestType<(typeof client.businesses)[':business_id']['partners']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':business_id'].partners.$delete(args, options))
}

export async function deleteBusinessesBusinessIdPartnersAssets(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners']['assets']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].partners.assets.$delete(args, options),
  )
}

export async function patchBusinessesBusinessIdPartnersAssets(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners']['assets']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].partners.assets.$patch(args, options),
  )
}

export async function postBusinessesBusinessIdPartnersPartnerIdAdAccountRequest(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].partners[':partner_id'].ad_account_request.$post(
      args,
      options,
    ),
  )
}

export async function deleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestId(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].partners[':partner_id'].ad_account_requests[
      ':agency_owned_ad_account_request_id'
    ].$delete(args, options),
  )
}

export async function patchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestId(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners'][':partner_id']['ad_account_requests'][':agency_owned_ad_account_request_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].partners[':partner_id'].ad_account_requests[
      ':agency_owned_ad_account_request_id'
    ].$patch(args, options),
  )
}

export async function getBusinessesBusinessIdPartnersPartnerIdAssets(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].partners[':partner_id'].assets.$get(args, options),
  )
}

export async function postBusinessesBusinessIdRequestsAssetsAccess(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['requests']['assets']['access']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].requests.assets.access.$post(args, options),
  )
}

export async function getBusinessesBusinessIdRmnContractsContractId(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].rmn.contracts[':contract_id'].$get(args, options),
  )
}

export async function patchBusinessesBusinessIdRmnContractsContractIdProcess(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['process']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].rmn.contracts[':contract_id'].process.$patch(args, options),
  )
}

export async function getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomains(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].rmn.partners[':partner_id'].allowed_domains.$get(
      args,
      options,
    ),
  )
}

export async function getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistory(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].rmn.partners[':partner_id'].contracts.history.$get(
      args,
      options,
    ),
  )
}

export async function postBusinessesBusinessIdRmnPartnersPartnerIdInvite(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['invite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].rmn.partners[':partner_id'].invite.$post(args, options),
  )
}

export async function patchBusinessesBusinessIdSystemUsersSystemUserId(
  args: InferRequestType<
    (typeof client.businesses)[':business_id']['system_users'][':system_user_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.businesses[':business_id'].system_users[':system_user_id'].$patch(args, options),
  )
}

export async function getCatalogs(
  args: InferRequestType<typeof client.catalogs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.$get(args, options))
}

export async function postCatalogs(
  args: InferRequestType<typeof client.catalogs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.$post(args, options))
}

export async function getCatalogsAvailableFilterValues(
  args: InferRequestType<typeof client.catalogs.available_filter_values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.available_filter_values.$get(args, options))
}

export async function getCatalogsFeeds(
  args: InferRequestType<typeof client.catalogs.feeds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.feeds.$get(args, options))
}

export async function postCatalogsFeeds(
  args: InferRequestType<typeof client.catalogs.feeds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.feeds.$post(args, options))
}

export async function getCatalogsFeedsFeedId(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.feeds[':feed_id'].$get(args, options))
}

export async function deleteCatalogsFeedsFeedId(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.feeds[':feed_id'].$delete(args, options))
}

export async function patchCatalogsFeedsFeedId(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.feeds[':feed_id'].$patch(args, options))
}

export async function postCatalogsFeedsFeedIdIngest(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['ingest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.feeds[':feed_id'].ingest.$post(args, options))
}

export async function getCatalogsFeedsFeedIdProcessingResults(
  args: InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs.feeds[':feed_id'].processing_results.$get(args, options),
  )
}

export async function postCatalogsItems(
  args: InferRequestType<typeof client.catalogs.items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.items.$post(args, options))
}

export async function postCatalogsItemsBatch(
  args: InferRequestType<typeof client.catalogs.items.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.items.batch.$post(args, options))
}

export async function getCatalogsItemsBatchBatchId(
  args: InferRequestType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.items.batch[':batch_id'].$get(args, options))
}

export async function getCatalogsProcessingResultsProcessingResultIdItemIssues(
  args: InferRequestType<
    (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs.processing_results[':processing_result_id'].item_issues.$get(args, options),
  )
}

export async function getCatalogsProductGroups(
  args: InferRequestType<typeof client.catalogs.product_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.product_groups.$get(args, options))
}

export async function postCatalogsProductGroups(
  args: InferRequestType<typeof client.catalogs.product_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.product_groups.$post(args, options))
}

export async function postCatalogsProductGroupsMultiple(
  args: InferRequestType<typeof client.catalogs.product_groups.multiple.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.product_groups.multiple.$post(args, options))
}

export async function deleteCatalogsProductGroupsMultiple(
  args: InferRequestType<typeof client.catalogs.product_groups.multiple.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.product_groups.multiple.$delete(args, options))
}

export async function getCatalogsProductGroupsProductGroupId(
  args: InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs.product_groups[':product_group_id'].$get(args, options),
  )
}

export async function deleteCatalogsProductGroupsProductGroupId(
  args: InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs.product_groups[':product_group_id'].$delete(args, options),
  )
}

export async function patchCatalogsProductGroupsProductGroupId(
  args: InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs.product_groups[':product_group_id'].$patch(args, options),
  )
}

export async function getCatalogsProductGroupsProductGroupIdProductCounts(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs.product_groups[':product_group_id'].product_counts.$get(args, options),
  )
}

export async function getCatalogsProductGroupsProductGroupIdProducts(
  args: InferRequestType<
    (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs.product_groups[':product_group_id'].products.$get(args, options),
  )
}

export async function postCatalogsProductsGetByProductGroupFilters(
  args: InferRequestType<typeof client.catalogs.products.get_by_product_group_filters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs.products.get_by_product_group_filters.$post(args, options),
  )
}

export async function getCatalogsReports(
  args: InferRequestType<typeof client.catalogs.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.reports.$get(args, options))
}

export async function postCatalogsReports(
  args: InferRequestType<typeof client.catalogs.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.reports.$post(args, options))
}

export async function getCatalogsReportsStats(
  args: InferRequestType<typeof client.catalogs.reports.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.reports.stats.$get(args, options))
}

export async function getCatalogsSupplementalFeeds(
  args: InferRequestType<typeof client.catalogs.supplemental_feeds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.supplemental_feeds.$get(args, options))
}

export async function postCatalogsSupplementalFeeds(
  args: InferRequestType<typeof client.catalogs.supplemental_feeds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.supplemental_feeds.$post(args, options))
}

export async function getCatalogsSupplementalFeedsFeedId(
  args: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.supplemental_feeds[':feed_id'].$get(args, options))
}

export async function deleteCatalogsSupplementalFeedsFeedId(
  args: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.supplemental_feeds[':feed_id'].$delete(args, options))
}

export async function patchCatalogsSupplementalFeedsFeedId(
  args: InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.supplemental_feeds[':feed_id'].$patch(args, options))
}

export async function patchCatalogsCatalogId(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':catalog_id'].$patch(args, options))
}

export async function postCatalogsCatalogIdAutoLocalizationConfigs(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].auto_localization_configs.$post(args, options),
  )
}

export async function getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigId(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].auto_localization_configs[':auto_localization_config_id'].$get(
      args,
      options,
    ),
  )
}

export async function putCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigId(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].auto_localization_configs[':auto_localization_config_id'].$put(
      args,
      options,
    ),
  )
}

export async function getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslations(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].auto_localization_configs[
      ':auto_localization_config_id'
    ].translations.$get(args, options),
  )
}

export async function postCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReview(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].auto_localization_configs[
      ':auto_localization_config_id'
    ].translations.review.$post(args, options),
  )
}

export async function getCatalogsCatalogIdCountryLocaleMapping(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].country_locale_mapping.$get(args, options),
  )
}

export async function putCatalogsCatalogIdCountryLocaleMapping(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].country_locale_mapping.$put(args, options),
  )
}

export async function deleteCatalogsCatalogIdCountryLocaleMapping(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].country_locale_mapping.$delete(args, options),
  )
}

export async function postCatalogsCatalogIdLocalInventoryItemsBatch(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['local_inventory_items']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].local_inventory_items.batch.$post(args, options),
  )
}

export async function postCatalogsCatalogIdLocalInventoryItemsQuery(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['local_inventory_items']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].local_inventory_items.query.$post(args, options),
  )
}

export async function getCatalogsCatalogIdLocalStores(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':catalog_id'].local_stores.$get(args, options))
}

export async function postCatalogsCatalogIdLocalStores(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':catalog_id'].local_stores.$post(args, options))
}

export async function deleteCatalogsCatalogIdLocalStores(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':catalog_id'].local_stores.$delete(args, options))
}

export async function patchCatalogsCatalogIdLocalStores(
  args: InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':catalog_id'].local_stores.$patch(args, options))
}

export async function getCatalogsCatalogIdSupplementalItemsBatchBatchId(
  args: InferRequestType<
    (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalog_id'].supplemental_items.batch[':batch_id'].$get(args, options),
  )
}

export async function postCollaborativeCatalogs(
  args: InferRequestType<typeof client.collaborative_catalogs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaborative_catalogs.$post(args, options))
}

export async function getIntegrations(
  args: InferRequestType<typeof client.integrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.$get(args, options))
}

export async function postIntegrationsCommerce(
  args: InferRequestType<typeof client.integrations.commerce.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.commerce.$post(args, options))
}

export async function getIntegrationsCommerceExternalBusinessId(
  args: InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations.commerce[':external_business_id'].$get(args, options),
  )
}

export async function deleteIntegrationsCommerceExternalBusinessId(
  args: InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations.commerce[':external_business_id'].$delete(args, options),
  )
}

export async function patchIntegrationsCommerceExternalBusinessId(
  args: InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations.commerce[':external_business_id'].$patch(args, options),
  )
}

export async function postIntegrationsLogs(
  args: InferRequestType<typeof client.integrations.logs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.logs.$post(args, options))
}

export async function getIntegrationsId(
  args: InferRequestType<(typeof client.integrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':id'].$get(args, options))
}

export async function getMedia(
  args: InferRequestType<typeof client.media.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media.$get(args, options))
}

export async function postMedia(
  args: InferRequestType<typeof client.media.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media.$post(args, options))
}

export async function getMediaMediaId(
  args: InferRequestType<(typeof client.media)[':media_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':media_id'].$get(args, options))
}

export async function getMediaLibraryBusinessesBusinessIdAssets(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.media_library.businesses[':business_id'].assets.$get(args, options),
  )
}

export async function postMediaLibraryBusinessesBusinessIdAssets(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.media_library.businesses[':business_id'].assets.$post(args, options),
  )
}

export async function deleteMediaLibraryBusinessesBusinessIdAssets(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.media_library.businesses[':business_id'].assets.$delete(args, options),
  )
}

export async function patchMediaLibraryBusinessesBusinessIdAssets(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.media_library.businesses[':business_id'].assets.$patch(args, options),
  )
}

export async function getMediaLibraryBusinessesBusinessIdAssetsAssetId(
  args: InferRequestType<
    (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.media_library.businesses[':business_id'].assets[':asset_id'].$get(args, options),
  )
}

export async function getMerchantMerchantIdStatus(
  args: InferRequestType<(typeof client.merchant)[':merchant_id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchant[':merchant_id'].status.$get(args, options))
}

export async function postNotifications(
  args: InferRequestType<typeof client.notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$post(args, options))
}

export async function postOauthConversionToken(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth.conversion_token.$post(undefined, options))
}

export async function postOauthToken(
  args: InferRequestType<typeof client.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.token.$post(args, options))
}

export async function postOauthTokenRevoke(
  args: InferRequestType<typeof client.oauth.token.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.token.revoke.$post(args, options))
}

export async function getOverlayAssignmentRules(options?: ClientRequestOptions) {
  return await parseResponse(client.overlay_assignment_rules.$get(undefined, options))
}

export async function postOverlayAssignmentRules(
  args: InferRequestType<typeof client.overlay_assignment_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.overlay_assignment_rules.$post(args, options))
}

export async function getOverlayAssignmentRulesId(
  args: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.overlay_assignment_rules[':id'].$get(args, options))
}

export async function deleteOverlayAssignmentRulesId(
  args: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.overlay_assignment_rules[':id'].$delete(args, options))
}

export async function patchOverlayAssignmentRulesId(
  args: InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.overlay_assignment_rules[':id'].$patch(args, options))
}

export async function getOverlays(
  args: InferRequestType<typeof client.overlays.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.overlays.$get(args, options))
}

export async function postOverlays(
  args: InferRequestType<typeof client.overlays.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.overlays.$post(args, options))
}

export async function getOverlaysId(
  args: InferRequestType<(typeof client.overlays)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.overlays[':id'].$get(args, options))
}

export async function deleteOverlaysId(
  args: InferRequestType<(typeof client.overlays)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.overlays[':id'].$delete(args, options))
}

export async function patchOverlaysId(
  args: InferRequestType<(typeof client.overlays)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.overlays[':id'].$patch(args, options))
}

export async function getPins(
  args: InferRequestType<typeof client.pins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins.$get(args, options))
}

export async function postPins(
  args: InferRequestType<typeof client.pins.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins.$post(args, options))
}

export async function getPinsAnalytics(
  args: InferRequestType<typeof client.pins.analytics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins.analytics.$get(args, options))
}

export async function getPinsPinId(
  args: InferRequestType<(typeof client.pins)[':pin_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins[':pin_id'].$get(args, options))
}

export async function deletePinsPinId(
  args: InferRequestType<(typeof client.pins)[':pin_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins[':pin_id'].$delete(args, options))
}

export async function patchPinsPinId(
  args: InferRequestType<(typeof client.pins)[':pin_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins[':pin_id'].$patch(args, options))
}

export async function getPinsPinIdAnalytics(
  args: InferRequestType<(typeof client.pins)[':pin_id']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins[':pin_id'].analytics.$get(args, options))
}

export async function getPinsPinIdProductTags(
  args: InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins[':pin_id'].product_tags.$get(args, options))
}

export async function postPinsPinIdProductTags(
  args: InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins[':pin_id'].product_tags.$post(args, options))
}

export async function postPinsPinIdProductTagsBulkDelete(
  args: InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['bulk-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pins[':pin_id'].product_tags['bulk-delete'].$post(args, options),
  )
}

export async function postPinsPinIdSave(
  args: InferRequestType<(typeof client.pins)[':pin_id']['save']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pins[':pin_id'].save.$post(args, options))
}

export async function getResourcesAdAccountCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.resources.ad_account_countries.$get(undefined, options))
}

export async function getResourcesDeliveryMetrics(
  args: InferRequestType<typeof client.resources.delivery_metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.delivery_metrics.$get(args, options))
}

export async function getResourcesLeadFormQuestions(options?: ClientRequestOptions) {
  return await parseResponse(client.resources.lead_form_questions.$get(undefined, options))
}

export async function getResourcesMetricsReadyState(
  args: InferRequestType<typeof client.resources.metrics_ready_state.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.metrics_ready_state.$get(args, options))
}

export async function getResourcesTargetingInterestsInterestId(
  args: InferRequestType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.resources.targeting.interests[':interest_id'].$get(args, options),
  )
}

export async function getResourcesTargetingTargetingType(
  args: InferRequestType<(typeof client.resources.targeting)[':targeting_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.targeting[':targeting_type'].$get(args, options))
}

export async function getSearchBoards(
  args: InferRequestType<typeof client.search.boards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.boards.$get(args, options))
}

export async function getSearchPartnerPins(
  args: InferRequestType<typeof client.search.partner.pins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.partner.pins.$get(args, options))
}

export async function getSearchPins(
  args: InferRequestType<typeof client.search.pins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.pins.$get(args, options))
}

export async function getTermsRelated(
  args: InferRequestType<typeof client.terms.related.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms.related.$get(args, options))
}

export async function getTermsSuggested(
  args: InferRequestType<typeof client.terms.suggested.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms.suggested.$get(args, options))
}

export async function getTrendsEditorialArticles(
  args: InferRequestType<typeof client.trends.editorial_articles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trends.editorial_articles.$get(args, options))
}

export async function getTrendsKeywordsRegionTopTrendType(
  args: InferRequestType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.trends.keywords[':region'].top[':trend_type'].$get(args, options),
  )
}

export async function getTrendsProductCategoriesDetails(
  args: InferRequestType<typeof client.trends.product_categories.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trends.product_categories.details.$get(args, options))
}

export async function getTrendsProductCategoriesTrending(
  args: InferRequestType<typeof client.trends.product_categories.trending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trends.product_categories.trending.$get(args, options))
}

export async function getTrendsTopicsFeatured(
  args: InferRequestType<typeof client.trends.topics.featured.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trends.topics.featured.$get(args, options))
}

export async function getUserAccount(
  args: InferRequestType<typeof client.user_account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.$get(args, options))
}

export async function getUserAccountAnalytics(
  args: InferRequestType<typeof client.user_account.analytics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.analytics.$get(args, options))
}

export async function getUserAccountAnalyticsTopPins(
  args: InferRequestType<typeof client.user_account.analytics.top_pins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.analytics.top_pins.$get(args, options))
}

export async function getUserAccountAnalyticsTopVideoPins(
  args: InferRequestType<typeof client.user_account.analytics.top_video_pins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.analytics.top_video_pins.$get(args, options))
}

export async function getUserAccountBusinesses(options?: ClientRequestOptions) {
  return await parseResponse(client.user_account.businesses.$get(undefined, options))
}

export async function getUserAccountFollowers(
  args: InferRequestType<typeof client.user_account.followers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.followers.$get(args, options))
}

export async function getUserAccountFollowing(
  args: InferRequestType<typeof client.user_account.following.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.following.$get(args, options))
}

export async function getUserAccountFollowingBoards(
  args: InferRequestType<typeof client.user_account.following.boards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.following.boards.$get(args, options))
}

export async function postUserAccountFollowingUsername(
  args: InferRequestType<(typeof client.user_account.following)[':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.following[':username'].$post(args, options))
}

export async function getUserAccountWebsites(
  args: InferRequestType<typeof client.user_account.websites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.websites.$get(args, options))
}

export async function postUserAccountWebsites(
  args: InferRequestType<typeof client.user_account.websites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.websites.$post(args, options))
}

export async function deleteUserAccountWebsites(
  args: InferRequestType<typeof client.user_account.websites.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.websites.$delete(args, options))
}

export async function getUserAccountWebsitesVerification(
  args: InferRequestType<typeof client.user_account.websites.verification.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_account.websites.verification.$get(args, options))
}

export async function getUsersUsernameInterestsFollow(
  args: InferRequestType<(typeof client.users)[':username']['interests']['follow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].interests.follow.$get(args, options))
}
