import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createPostItemDraftIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemDraftIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
