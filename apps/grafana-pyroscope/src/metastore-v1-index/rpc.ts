import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMetastoreV1IndexServiceAddBlock(
  args: InferRequestType<(typeof client)['metastore.v1.IndexService']['AddBlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metastore.v1.IndexService'].AddBlock.$post(args, options))
}

export async function postMetastoreV1IndexServiceGetBlockMetadata(
  args: InferRequestType<(typeof client)['metastore.v1.IndexService']['GetBlockMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['metastore.v1.IndexService'].GetBlockMetadata.$post(args, options),
  )
}
