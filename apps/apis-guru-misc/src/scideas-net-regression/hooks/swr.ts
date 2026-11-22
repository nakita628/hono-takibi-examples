import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRegressionKey() {
  return ['regression'] as const
}

export function getPostRegressionApiKey() {
  return ['regression', '/regression/api', 'POST'] as const
}

export function usePostRegressionApi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regression.api.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.regression.api.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegressionApiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.regression.api.$post> }) =>
        parseResponse(client.regression.api.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
