import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMetastoreV1MetadataQueryServiceQueryMetadata(
  args: InferRequestType<
    (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['metastore.v1.MetadataQueryService'].QueryMetadata.$post(args, options),
  )
}

export async function postMetastoreV1MetadataQueryServiceQueryMetadataLabels(
  args: InferRequestType<
    (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadataLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['metastore.v1.MetadataQueryService'].QueryMetadataLabels.$post(args, options),
  )
}
