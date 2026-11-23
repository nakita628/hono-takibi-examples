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

export function getPerfectpdfKey() {
  return ['perfectpdf'] as const
}

export function getPostPerfectpdfApiMutationKey() {
  return ['perfectpdf', '/perfectpdf/api', 'POST'] as const
}

export function getPostPerfectpdfApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.perfectpdf.api.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.perfectpdf.api.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPerfectpdfApiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.perfectpdf.api.$post>) {
      return parseResponse(client.perfectpdf.api.$post(args, options))
    },
  })
}

export function injectPostPerfectpdfApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.perfectpdf.api.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.perfectpdf.api.$post>,
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
    const mutationDefaults = getPostPerfectpdfApiMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
