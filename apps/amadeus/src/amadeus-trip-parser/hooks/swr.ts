import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTravelKey() {
  return ['travel'] as const
}

export function getPostTravelTripParserKey() {
  return ['travel', '/travel/trip-parser', 'POST'] as const
}

export function usePostTravelTripParser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.travel)['trip-parser']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.travel)['trip-parser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTravelTripParserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.travel)['trip-parser']['$post']> },
      ) => parseResponse(client.travel['trip-parser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
