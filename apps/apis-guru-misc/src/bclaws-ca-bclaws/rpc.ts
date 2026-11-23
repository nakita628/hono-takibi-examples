import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getContentAspectId(
  args: InferRequestType<(typeof client.content)[':aspectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content[':aspectId'].$get(args, options))
}

export async function getContentAspectIdCivixDocumentId(
  args: InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content[':aspectId'][':civixDocumentId'].$get(args, options))
}

export async function getDocumentIdAspectIdCivixIndexIdCivixDocumentId(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].$get(args, options),
  )
}

export async function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].search[
      ':searchString'
    ].$get(args, options),
  )
}

export async function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.$get(args, options),
  )
}

export async function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.search[
      ':searchString'
    ].$get(args, options),
  )
}

export async function getSearchAspectIdFullsearch(
  args: InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search[':aspectId'].fullsearch.$get(args, options))
}
