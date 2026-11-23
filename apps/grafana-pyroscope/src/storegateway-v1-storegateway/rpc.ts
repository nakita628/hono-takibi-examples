import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postStoregatewayV1StoreGatewayServiceBlockMetadata(
  args: InferRequestType<
    (typeof client)['storegateway.v1.StoreGatewayService']['BlockMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['storegateway.v1.StoreGatewayService'].BlockMetadata.$post(args, options),
  )
}

export async function postStoregatewayV1StoreGatewayServiceGetBlockStats(
  args: InferRequestType<
    (typeof client)['storegateway.v1.StoreGatewayService']['GetBlockStats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['storegateway.v1.StoreGatewayService'].GetBlockStats.$post(args, options),
  )
}

export async function postStoregatewayV1StoreGatewayServiceLabelNames(
  args: InferRequestType<
    (typeof client)['storegateway.v1.StoreGatewayService']['LabelNames']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['storegateway.v1.StoreGatewayService'].LabelNames.$post(args, options),
  )
}

export async function postStoregatewayV1StoreGatewayServiceLabelValues(
  args: InferRequestType<
    (typeof client)['storegateway.v1.StoreGatewayService']['LabelValues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['storegateway.v1.StoreGatewayService'].LabelValues.$post(args, options),
  )
}

export async function postStoregatewayV1StoreGatewayServiceProfileTypes(
  args: InferRequestType<
    (typeof client)['storegateway.v1.StoreGatewayService']['ProfileTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['storegateway.v1.StoreGatewayService'].ProfileTypes.$post(args, options),
  )
}

export async function postStoregatewayV1StoreGatewayServiceSeries(
  args: InferRequestType<(typeof client)['storegateway.v1.StoreGatewayService']['Series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['storegateway.v1.StoreGatewayService'].Series.$post(args, options),
  )
}
