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

export function getGetMediaKey() {
  return ['getMedia'] as const
}

export function getPostGetMediaMutationKey() {
  return ['getMedia', '/getMedia', 'POST'] as const
}

export function getPostGetMediaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMedia.$post>>>>>,
    TError,
    InferRequestType<typeof client.getMedia.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getMedia.$post>) {
      return parseResponse(client.getMedia.$post(args, options))
    },
  })
}

export function injectPostGetMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMedia.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getMedia.$post>,
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
    const mutationDefaults = getPostGetMediaMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
