import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get20130101SearchFormatSdkPrettyTrueQ(
  args: InferRequestType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-01-01']['search#format=sdk&pretty=true&q'].$get(args, options),
  )
}

export async function get20130101SuggestFormatSdkPrettyTrueQSuggester(
  args: InferRequestType<
    (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester'].$get(args, options),
  )
}

export async function post20130101DocumentsBatchFormatSdkContentType(
  args: InferRequestType<
    (typeof client)['2013-01-01']['documents']['batch#format=sdk&Content-Type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-01-01'].documents['batch#format=sdk&Content-Type'].$post(args, options),
  )
}
