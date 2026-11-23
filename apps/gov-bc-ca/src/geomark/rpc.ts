import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGeomarksCopy(
  args: InferRequestType<typeof client.geomarks.copy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geomarks.copy.$post(args, options))
}

export async function postGeomarksNew(
  args: InferRequestType<typeof client.geomarks.new.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geomarks.new.$post(args, options))
}

export async function getGeomarksGeomarkIdFileFormatExtension(
  args: InferRequestType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geomarks[':geomarkId.{fileFormatExtension}'].$get(args, options),
  )
}

export async function getGeomarksGeomarkIdBoundingBoxFileFormatExtension(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geomarks[':geomarkId']['boundingBox.{fileFormatExtension}'].$get(args, options),
  )
}

export async function getGeomarksGeomarkIdFeatureFileFormatExtension(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geomarks[':geomarkId']['feature.{fileFormatExtension}'].$get(args, options),
  )
}

export async function getGeomarksGeomarkIdPartsFileFormatExtension(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geomarks[':geomarkId']['parts.{fileFormatExtension}'].$get(args, options),
  )
}

export async function getGeomarksGeomarkIdPointFileFormatExtension(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geomarks[':geomarkId']['point.{fileFormatExtension}'].$get(args, options),
  )
}
