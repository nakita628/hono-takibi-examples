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

export function getCreateTestCardRangesKey() {
  return ['createTestCardRanges'] as const
}

export function getPostCreateTestCardRangesMutationKey() {
  return ['createTestCardRanges', '/createTestCardRanges', 'POST'] as const
}

export function getPostCreateTestCardRangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createTestCardRanges.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createTestCardRanges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateTestCardRangesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createTestCardRanges.$post>) {
      return parseResponse(client.createTestCardRanges.$post(args, options))
    },
  })
}

export function injectPostCreateTestCardRanges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createTestCardRanges.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createTestCardRanges.$post>,
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
    const mutationDefaults = getPostCreateTestCardRangesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
