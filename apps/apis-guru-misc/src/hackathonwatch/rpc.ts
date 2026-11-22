import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHackathonsComingJson(
  args: InferRequestType<(typeof client.hackathons)['coming.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hackathons['coming.json'].$get(args, options))
}

export async function getHackathonsIdJson(
  args: InferRequestType<(typeof client.hackathons)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hackathons[':id.json'].$get(args, options))
}

export async function getSwaggerDocJson(options?: ClientRequestOptions) {
  return await parseResponse(client['swagger_doc.json'].$get(undefined, options))
}

export async function getSwaggerDocNameJson(
  args: InferRequestType<(typeof client.swagger_doc)[':name.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.swagger_doc[':name.json'].$get(args, options))
}
