import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConnectorApis(
  args: InferRequestType<typeof client.connector.apis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connector.apis.$get(args, options))
}

export async function getConnectorApisId(
  args: InferRequestType<(typeof client.connector.apis)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connector.apis[':id'].$get(args, options))
}

export async function getConnectorApisIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connector.apis[':id'].resources[':resource_id'].$get(args, options),
  )
}

export async function getConnectorApisIdResourcesResourceIdCoverage(
  args: InferRequestType<
    (typeof client.connector.apis)[':id']['resources'][':resource_id']['coverage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connector.apis[':id'].resources[':resource_id'].coverage.$get(args, options),
  )
}

export async function getConnectorConnectors(
  args: InferRequestType<typeof client.connector.connectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connector.connectors.$get(args, options))
}

export async function getConnectorConnectorsId(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connector.connectors[':id'].$get(args, options))
}

export async function getConnectorConnectorsIdDocsDocId(
  args: InferRequestType<(typeof client.connector.connectors)[':id']['docs'][':doc_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connector.connectors[':id'].docs[':doc_id'].$get(args, options))
}

export async function getConnectorConnectorsIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.connector.connectors)[':id']['resources'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connector.connectors[':id'].resources[':resource_id'].$get(args, options),
  )
}
