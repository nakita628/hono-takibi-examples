import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSubscribeKey() {
  return ['subscribe'] as const
}

export function getPostSubscribeKey() {
  return ['subscribe', '/subscribe', 'POST'] as const
}

export function usePostSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribe.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.subscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subscribe.$post> }) =>
        parseResponse(client.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
