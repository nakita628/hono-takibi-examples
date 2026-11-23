import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetMediaKey() {
  return ['getMedia'] as const
}

export function getPostGetMediaKey() {
  return ['getMedia', '/getMedia', 'POST'] as const
}

export function usePostGetMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMedia.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getMedia.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getMedia.$post> }) =>
        parseResponse(client.getMedia.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
