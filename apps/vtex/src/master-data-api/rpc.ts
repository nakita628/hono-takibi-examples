import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiDataentitiesAddressDocuments(
  args: InferRequestType<typeof client.api.dataentities.Address.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities.Address.documents.$post(args, options))
}

export async function deleteApiDataentitiesAddressDocumentsId(
  args: InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities.Address.documents[':id'].$delete(args, options),
  )
}

export async function patchApiDataentitiesAddressDocumentsId(
  args: InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities.Address.documents[':id'].$patch(args, options))
}

export async function postApiDataentitiesClientDocuments(
  args: InferRequestType<typeof client.api.dataentities.Client.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities.Client.documents.$post(args, options))
}

export async function deleteApiDataentitiesClientDocumentsId(
  args: InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities.Client.documents[':id'].$delete(args, options))
}

export async function patchApiDataentitiesClientDocumentsId(
  args: InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities.Client.documents[':id'].$patch(args, options))
}

export async function postApiDataentitiesDataEntityNameDocuments(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].documents.$post(args, options),
  )
}

export async function patchApiDataentitiesDataEntityNameDocuments(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].documents.$patch(args, options),
  )
}

export async function getApiDataentitiesDataEntityNameDocumentsId(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].documents[':id'].$get(args, options),
  )
}

export async function putApiDataentitiesDataEntityNameDocumentsId(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].documents[':id'].$put(args, options),
  )
}

export async function deleteApiDataentitiesDataEntityNameDocumentsId(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].documents[':id'].$delete(args, options),
  )
}

export async function patchApiDataentitiesDataEntityNameDocumentsId(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].documents[':id'].$patch(args, options),
  )
}

export async function postApiDataentitiesDataEntityNameDocumentsIdClusters(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].documents[':id'].clusters.$post(args, options),
  )
}

export async function getApiDataentitiesDataEntityNameDocumentsIdVersions(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].documents[':id'].versions.$get(args, options),
  )
}

export async function getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].documents[':id'].versions[':versionId'].$get(
      args,
      options,
    ),
  )
}

export async function putApiDataentitiesDataEntityNameDocumentsIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].documents[':id'].versions[':versionId'].$put(
      args,
      options,
    ),
  )
}

export async function getApiDataentitiesDataEntityNameIndices(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':dataEntityName'].indices.$get(args, options))
}

export async function putApiDataentitiesDataEntityNameIndices(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':dataEntityName'].indices.$put(args, options))
}

export async function getApiDataentitiesDataEntityNameIndicesIndexName(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].indices[':index_name'].$get(args, options),
  )
}

export async function deleteApiDataentitiesDataEntityNameIndicesIndexName(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].indices[':index_name'].$delete(args, options),
  )
}

export async function getApiDataentitiesDataEntityNameSchemas(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':dataEntityName'].schemas.$get(args, options))
}

export async function getApiDataentitiesDataEntityNameSchemasSchemaName(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$get(args, options),
  )
}

export async function putApiDataentitiesDataEntityNameSchemasSchemaName(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$put(args, options),
  )
}

export async function deleteApiDataentitiesDataEntityNameSchemasSchemaName(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$delete(args, options),
  )
}

export async function getApiDataentitiesDataEntityNameScroll(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':dataEntityName'].scroll.$get(args, options))
}

export async function getApiDataentitiesDataEntityNameSearch(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':dataEntityName'].search.$get(args, options))
}
