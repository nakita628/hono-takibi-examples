import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMarketingCampaigns202609(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.campaigns['2026-09'].$get(args, options))
}

export async function postMarketingCampaigns202609(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.campaigns['2026-09'].$post(args, options))
}

export async function getMarketingCampaigns202609AssetTypes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.marketing.campaigns['2026-09']['asset-types'].$get(undefined, options),
  )
}

export async function postMarketingCampaigns202609BatchArchive(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'].batch.archive.$post(args, options),
  )
}

export async function postMarketingCampaigns202609BatchCreate(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'].batch.create.$post(args, options),
  )
}

export async function postMarketingCampaigns202609BatchRead(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.campaigns['2026-09'].batch.read.$post(args, options))
}

export async function postMarketingCampaigns202609BatchUpdate(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'].batch.update.$post(args, options),
  )
}

export async function postMarketingCampaigns202609Clone(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.campaigns['2026-09'].clone.$post(args, options))
}

export async function getMarketingCampaigns202609CloneAssetTypes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'].clone['asset-types'].$get(undefined, options),
  )
}

export async function getMarketingCampaigns202609CloneCampaignGuidStatus(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'].clone[':campaignGuid'].status.$get(args, options),
  )
}

export async function getMarketingCampaigns202609CampaignGuid(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].$get(args, options),
  )
}

export async function deleteMarketingCampaigns202609CampaignGuid(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].$delete(args, options),
  )
}

export async function patchMarketingCampaigns202609CampaignGuid(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].$patch(args, options),
  )
}

export async function getMarketingCampaigns202609CampaignGuidAssetsAssetType(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'].$get(args, options),
  )
}

export async function putMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetId(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'][':assetId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetId(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'][':assetId'].$delete(
      args,
      options,
    ),
  )
}

export async function postMarketingCampaigns202609CampaignGuidBudget(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].budget.$post(args, options),
  )
}

export async function getMarketingCampaigns202609CampaignGuidBudgetTotals(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].budget.totals.$get(args, options),
  )
}

export async function getMarketingCampaigns202609CampaignGuidBudgetBudgetId(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$get(args, options),
  )
}

export async function putMarketingCampaigns202609CampaignGuidBudgetBudgetId(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$put(args, options),
  )
}

export async function deleteMarketingCampaigns202609CampaignGuidBudgetBudgetId(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$delete(
      args,
      options,
    ),
  )
}

export async function getMarketingCampaigns202609CampaignGuidReportsContactsContactType(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].reports.contacts[':contactType'].$get(
      args,
      options,
    ),
  )
}

export async function getMarketingCampaigns202609CampaignGuidReportsMetrics(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].reports.metrics.$get(args, options),
  )
}

export async function getMarketingCampaigns202609CampaignGuidReportsRevenue(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].reports.revenue.$get(args, options),
  )
}

export async function postMarketingCampaigns202609CampaignGuidSpend(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].spend.$post(args, options),
  )
}

export async function getMarketingCampaigns202609CampaignGuidSpendSpendId(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$get(args, options),
  )
}

export async function putMarketingCampaigns202609CampaignGuidSpendSpendId(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$put(args, options),
  )
}

export async function deleteMarketingCampaigns202609CampaignGuidSpendSpendId(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$delete(args, options),
  )
}
