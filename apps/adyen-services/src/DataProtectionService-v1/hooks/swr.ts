import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRequestSubjectErasureKey() {
  return ['requestSubjectErasure'] as const
}

export function getPostRequestSubjectErasureKey() {
  return ['requestSubjectErasure', '/requestSubjectErasure', 'POST'] as const
}

export function usePostRequestSubjectErasure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.requestSubjectErasure.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.requestSubjectErasure.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestSubjectErasureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.requestSubjectErasure.$post> },
      ) => parseResponse(client.requestSubjectErasure.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
