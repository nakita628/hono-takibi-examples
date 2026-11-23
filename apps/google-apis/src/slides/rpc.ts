import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Presentations(
  args: InferRequestType<typeof client.v1.presentations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.presentations.$post(args, options))
}

export async function getV1PresentationsPresentationId(
  args: InferRequestType<(typeof client.v1.presentations)[':presentationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.presentations[':presentationId'].$get(args, options))
}

export async function getV1PresentationsPresentationIdPagesPageObjectId(
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.presentations[':presentationId'].pages[':pageObjectId'].$get(args, options),
  )
}

export async function getV1PresentationsPresentationIdPagesPageObjectIdThumbnail(
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.presentations[':presentationId'].pages[':pageObjectId'].thumbnail.$get(args, options),
  )
}

export async function postV1PresentationsPresentationIdBatchUpdate(
  args: InferRequestType<(typeof client.v1.presentations)[':presentationId:batchUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.presentations[':presentationId:batchUpdate'].$post(args, options),
  )
}
