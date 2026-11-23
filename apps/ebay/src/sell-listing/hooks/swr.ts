import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getItemDraftKey() {
  return ['item_draft'] as const
}

export function getPostItemDraftIndexKey() {
  return ['item_draft', '/item_draft/', 'POST'] as const
}

export function usePostItemDraftIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_draft.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.item_draft.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemDraftIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item_draft.index.$post> }) =>
        parseResponse(client.item_draft.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
