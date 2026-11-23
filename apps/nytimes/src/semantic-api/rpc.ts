import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getNameConceptTypeSpecificConceptJson(
  args: InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.name[':concept-type'][':specific-concept.json'].$get(args, options),
  )
}

export async function getSearchJson(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['search.json'].$get(args, options))
}
