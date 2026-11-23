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

export function getSvgconvertKey() {
  return ['svgconvert'] as const
}

export function getPostSvgconvertMutationKey() {
  return ['svgconvert', '/svgconvert', 'POST'] as const
}

export function getPostSvgconvertMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.svgconvert.$post>>>>>,
    TError,
    InferRequestType<typeof client.svgconvert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSvgconvertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.svgconvert.$post>) {
      return parseResponse(client.svgconvert.$post(args, options))
    },
  })
}

export function injectPostSvgconvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.svgconvert.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.svgconvert.$post>,
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
    const mutationDefaults = getPostSvgconvertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
