import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport'].$post(
      args,
      options,
    ),
  )
}
