import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getItemDraftKey() {
  return ['item_draft'] as const
}

export function getPostItemDraftIndexMutationKey() {
  return ['item_draft', '/item_draft/', 'POST'] as const
}

export function getPostItemDraftIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_draft.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.item_draft.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemDraftIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item_draft.index.$post>) {
      return parseResponse(client.item_draft.index.$post(args, options))
    },
  })
}

export function usePostItemDraftIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.item_draft.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.item_draft.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemDraftIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
