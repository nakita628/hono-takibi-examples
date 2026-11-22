import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDataStudioDataSource202609(
  args: InferRequestType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-studio']['data-source']['2026-09'].$post(args, options))
}

export async function getDataStudioDataSource202609DatasourceId(
  args: InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-studio']['data-source']['2026-09'][':datasourceId'].$get(args, options),
  )
}

export async function putDataStudioDataSource202609DatasourceId(
  args: InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-studio']['data-source']['2026-09'][':datasourceId'].$put(args, options),
  )
}

export async function deleteDataStudioDataSource202609DatasourceId(
  args: InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-studio']['data-source']['2026-09'][':datasourceId'].$delete(args, options),
  )
}
