import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiDataentities(
  args: InferRequestType<typeof client.api.dataentities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities.$get(args, options))
}

export async function getApiDataentitiesAcronym(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':acronym'].$get(args, options))
}

export async function putApiDataentitiesAcronymDocuments(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':acronym'].documents.$put(args, options))
}

export async function postApiDataentitiesAcronymDocuments(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':acronym'].documents.$post(args, options))
}

export async function patchApiDataentitiesAcronymDocuments(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':acronym'].documents.$patch(args, options))
}

export async function getApiDataentitiesAcronymDocumentsId(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].$get(args, options),
  )
}

export async function putApiDataentitiesAcronymDocumentsId(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].$put(args, options),
  )
}

export async function deleteApiDataentitiesAcronymDocumentsId(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].$delete(args, options),
  )
}

export async function patchApiDataentitiesAcronymDocumentsId(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].$patch(args, options),
  )
}

export async function postApiDataentitiesAcronymDocumentsIdClusters(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].clusters.$post(args, options),
  )
}

export async function putApiDataentitiesAcronymDocumentsIdScore(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].score.$put(args, options),
  )
}

export async function putApiDataentitiesAcronymDocumentsIdScoreFieldName(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].score[':field-name'].$put(args, options),
  )
}

export async function deleteApiDataentitiesAcronymDocumentsIdScoreFieldName(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].score[':field-name'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiDataentitiesAcronymDocumentsIdVersions(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].versions.$get(args, options),
  )
}

export async function getApiDataentitiesAcronymDocumentsIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].versions[':versionId'].$get(args, options),
  )
}

export async function putApiDataentitiesAcronymDocumentsIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'].versions[':versionId'].$put(args, options),
  )
}

export async function postApiDataentitiesAcronymDocumentsIdFieldAttachments(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'][':field'].attachments.$post(args, options),
  )
}

export async function getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileName(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dataentities[':acronym'].documents[':id'][':field'].attachments[':file-name'].$get(
      args,
      options,
    ),
  )
}

export async function getApiDataentitiesAcronymScroll(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':acronym'].scroll.$get(args, options))
}

export async function getApiDataentitiesAcronymSearch(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dataentities[':acronym'].search.$get(args, options))
}
