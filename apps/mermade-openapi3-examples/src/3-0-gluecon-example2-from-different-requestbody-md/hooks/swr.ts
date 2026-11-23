import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOpinionsKey() {
  return ['opinions'] as const
}

export function getPostOpinionsKey() {
  return ['opinions', '/opinions', 'POST'] as const
}

export function usePostOpinions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.opinions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.opinions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOpinionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.opinions.$post> }) =>
        parseResponse(client.opinions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
