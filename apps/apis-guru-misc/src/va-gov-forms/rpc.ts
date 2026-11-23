import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getForms(
  args: InferRequestType<typeof client.forms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forms.$get(args, options))
}

export async function getFormsFormName(
  args: InferRequestType<(typeof client.forms)[':form_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forms[':form_name'].$get(args, options))
}
