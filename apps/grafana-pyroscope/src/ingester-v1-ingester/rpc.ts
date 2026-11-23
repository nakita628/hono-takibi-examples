import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postIngesterV1IngesterServiceBlockMetadata(
  args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['BlockMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['ingester.v1.IngesterService'].BlockMetadata.$post(args, options),
  )
}

export async function postIngesterV1IngesterServiceFlush(
  args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['Flush']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ingester.v1.IngesterService'].Flush.$post(args, options))
}

export async function postIngesterV1IngesterServiceGetBlockStats(
  args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['GetBlockStats']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['ingester.v1.IngesterService'].GetBlockStats.$post(args, options),
  )
}

export async function postIngesterV1IngesterServiceGetProfileStats(
  args: InferRequestType<
    (typeof client)['ingester.v1.IngesterService']['GetProfileStats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['ingester.v1.IngesterService'].GetProfileStats.$post(args, options),
  )
}

export async function postIngesterV1IngesterServiceLabelNames(
  args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['LabelNames']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ingester.v1.IngesterService'].LabelNames.$post(args, options))
}

export async function postIngesterV1IngesterServiceLabelValues(
  args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['LabelValues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ingester.v1.IngesterService'].LabelValues.$post(args, options))
}

export async function postIngesterV1IngesterServiceProfileTypes(
  args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['ProfileTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['ingester.v1.IngesterService'].ProfileTypes.$post(args, options),
  )
}

export async function postIngesterV1IngesterServicePush(
  args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['Push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ingester.v1.IngesterService'].Push.$post(args, options))
}

export async function postIngesterV1IngesterServiceSeries(
  args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['Series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ingester.v1.IngesterService'].Series.$post(args, options))
}
