import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCheckSpellingKey() {
  return ['check_spelling'] as const
}

export function getPostCheckSpellingKey() {
  return ['check_spelling', '/check_spelling', 'POST'] as const
}

export function usePostCheckSpelling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_spelling.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.check_spelling.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckSpellingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.check_spelling.$post> }) =>
        parseResponse(client.check_spelling.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
