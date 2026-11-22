import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2014_06_05Key() {
  return ['2014-06-05'] as const
}

export function getPost20140605EventsXAmzClientContextKey() {
  return ['2014-06-05', '/2014-06-05/events#x-amz-Client-Context', 'POST'] as const
}

export function usePost20140605EventsXAmzClientContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2014-06-05']['events#x-amz-Client-Context']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2014-06-05']['events#x-amz-Client-Context']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20140605EventsXAmzClientContextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2014-06-05']['events#x-amz-Client-Context']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2014-06-05']['events#x-amz-Client-Context'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
