import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV3AccountHotelsSetLiveOnGoogle(
  args: InferRequestType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':account']['hotels:setLiveOnGoogle'].$post(args, options))
}

export async function getV3Name(
  args: InferRequestType<(typeof client.v3)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].$get(args, options))
}

export async function deleteV3Name(
  args: InferRequestType<(typeof client.v3)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].$delete(args, options))
}

export async function patchV3Name(
  args: InferRequestType<(typeof client.v3)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].$patch(args, options))
}

export async function getV3NameFreeBookingLinksReportViewsQuery(
  args: InferRequestType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3[':name']['freeBookingLinksReportViews:query'].$get(args, options),
  )
}

export async function getV3NameParticipationReportViewsQuery(
  args: InferRequestType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3[':name']['participationReportViews:query'].$get(args, options),
  )
}

export async function getV3NamePropertyPerformanceReportViewsQuery(
  args: InferRequestType<
    (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3[':name']['propertyPerformanceReportViews:query'].$get(args, options),
  )
}

export async function getV3ParentAccountLinks(
  args: InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].accountLinks.$get(args, options))
}

export async function postV3ParentAccountLinks(
  args: InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].accountLinks.$post(args, options))
}

export async function getV3ParentBrands(
  args: InferRequestType<(typeof client.v3)[':parent']['brands']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].brands.$get(args, options))
}

export async function postV3ParentBrands(
  args: InferRequestType<(typeof client.v3)[':parent']['brands']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].brands.$post(args, options))
}

export async function getV3ParentHotelViews(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].hotelViews.$get(args, options))
}

export async function getV3ParentHotelViewsSummarize(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent']['hotelViews:summarize'].$get(args, options))
}

export async function getV3ParentIcons(
  args: InferRequestType<(typeof client.v3)[':parent']['icons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].icons.$get(args, options))
}

export async function postV3ParentIcons(
  args: InferRequestType<(typeof client.v3)[':parent']['icons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].icons.$post(args, options))
}

export async function postV3ParentListingsVerify(
  args: InferRequestType<(typeof client.v3)[':parent']['listings:verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent']['listings:verify'].$post(args, options))
}

export async function getV3ParentPriceAccuracyViews(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].priceAccuracyViews.$get(args, options))
}

export async function getV3ParentPriceAccuracyViewsSummarize(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3[':parent']['priceAccuracyViews:summarize'].$get(args, options),
  )
}

export async function getV3ParentPriceCoverageViews(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].priceCoverageViews.$get(args, options))
}

export async function getV3ParentPriceCoverageViewsLatest(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent']['priceCoverageViews:latest'].$get(args, options))
}

export async function getV3ParentReconciliationReports(
  args: InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].reconciliationReports.$get(args, options))
}

export async function postV3ParentReconciliationReports(
  args: InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].reconciliationReports.$post(args, options))
}

export async function postV3ParentReconciliationReportsValidate(
  args: InferRequestType<(typeof client.v3)[':parent']['reconciliationReports:validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3[':parent']['reconciliationReports:validate'].$post(args, options),
  )
}
