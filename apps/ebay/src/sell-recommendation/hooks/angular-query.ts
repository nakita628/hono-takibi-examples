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

export function getFindKey() {
  return ['find'] as const
}

export function getPostFindMutationKey() {
  return ['find', '/find', 'POST'] as const
}

export function getPostFindMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.find.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.find.$post>) {
      return parseResponse(client.find.$post(args, options))
    },
  })
}

export function injectPostFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.find.$post>,
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
    const mutationDefaults = getPostFindMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
