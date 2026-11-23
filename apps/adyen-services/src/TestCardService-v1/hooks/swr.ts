import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreateTestCardRangesKey() {
  return ['createTestCardRanges'] as const
}

export function getPostCreateTestCardRangesKey() {
  return ['createTestCardRanges', '/createTestCardRanges', 'POST'] as const
}

export function usePostCreateTestCardRanges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createTestCardRanges.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createTestCardRanges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateTestCardRangesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createTestCardRanges.$post> },
      ) => parseResponse(client.createTestCardRanges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
