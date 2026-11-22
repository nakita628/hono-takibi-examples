import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGenerateUpload(
  args: InferRequestType<typeof client.generate.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.generate.upload.$post(args, options))
}

export async function postGenerateUrl(
  args: InferRequestType<typeof client.generate.url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.generate.url.$post(args, options))
}

export async function postGenerateUser(
  args: InferRequestType<typeof client.generate.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.generate.user.$post(args, options))
}

export async function getGetDelay(
  args: InferRequestType<typeof client.get.delay.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get.delay.$get(args, options))
}

export async function getGetIdId(
  args: InferRequestType<(typeof client.get.id)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get.id[':id'].$get(args, options))
}

export async function getGetListPage(
  args: InferRequestType<(typeof client.get.list)[':page']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get.list[':page'].$get(args, options))
}

export async function getGetUuidUuid(
  args: InferRequestType<(typeof client.get.uuid)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get.uuid[':uuid'].$get(args, options))
}

export async function getValidateNameName(
  args: InferRequestType<(typeof client.validate.name)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validate.name[':name'].$get(args, options))
}

export async function getValidateUuidUuid(
  args: InferRequestType<(typeof client.validate.uuid)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validate.uuid[':uuid'].$get(args, options))
}
