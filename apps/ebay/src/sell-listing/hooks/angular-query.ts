import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostItemDraftIndex<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemDraftIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
