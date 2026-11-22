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

export function injectPostV1p3beta1VideosAnnotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1p3beta1VideosAnnotateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
