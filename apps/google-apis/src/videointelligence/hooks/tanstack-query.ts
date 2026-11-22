import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1p3beta1Key() {
  return ['v1p3beta1'] as const
}

export function getPostV1p3beta1VideosAnnotateMutationKey() {
  return ['v1p3beta1', '/v1p3beta1/videos:annotate', 'POST'] as const
}

export function getPostV1p3beta1VideosAnnotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p3beta1)['videos:annotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1p3beta1)['videos:annotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1p3beta1VideosAnnotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1p3beta1)['videos:annotate']['$post']>,
    ) {
      return parseResponse(client.v1p3beta1['videos:annotate'].$post(args, options))
    },
  })
}

export function usePostV1p3beta1VideosAnnotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1p3beta1)['videos:annotate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1p3beta1)['videos:annotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1p3beta1VideosAnnotateMutationOptions<TError, TOnMutateResult>(
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
