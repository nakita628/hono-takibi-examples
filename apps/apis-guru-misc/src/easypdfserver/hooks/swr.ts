import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMakePdfKey() {
  return ['make-pdf'] as const
}

export function getPostMakePdfKey() {
  return ['make-pdf', '/make-pdf', 'POST'] as const
}

export function usePostMakePdf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['make-pdf']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['make-pdf']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMakePdfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['make-pdf']['$post']> }) =>
        parseResponse(client['make-pdf'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
