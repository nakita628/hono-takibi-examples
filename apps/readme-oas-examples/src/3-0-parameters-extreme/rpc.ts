import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAnythingAllParamTypesIdId2(
  args: InferRequestType<(typeof client.anything)['all-param-types'][':id'][':id2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['all-param-types'][':id'][':id2'].$post(args, options))
}
