import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTransactionKey() {
  return ['transaction'] as const
}

export function getPostTransactionKey() {
  return ['transaction', '/transaction', 'POST'] as const
}

export function usePostTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.transaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transaction.$post> }) =>
        parseResponse(client.transaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
