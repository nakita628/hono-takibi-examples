import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1RenderSyncMutationKey() {
  return ['v1', '/v1/render/sync', 'POST'] as const
}

export function getPostV1RenderSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.render.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.render.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RenderSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.render.sync.$post>) {
      return parseResponse(client.v1.render.sync.$post(args, options))
    },
  })
}

export function usePostV1RenderSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.render.sync.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.render.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1RenderSyncMutationOptions<TError, TOnMutateResult>(
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
