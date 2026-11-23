import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function usePostSvgconvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSvgconvertMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
