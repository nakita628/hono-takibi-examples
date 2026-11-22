import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPushV1PusherServiceKey() {
  return ['push.v1.PusherService'] as const
}

export function getPostPushV1PusherServicePushMutationKey() {
  return ['push.v1.PusherService', '/push.v1.PusherService/Push', 'POST'] as const
}

export function getPostPushV1PusherServicePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['push.v1.PusherService']['Push']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['push.v1.PusherService']['Push']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPushV1PusherServicePushMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['push.v1.PusherService']['Push']['$post']>,
    ) {
      return parseResponse(client['push.v1.PusherService'].Push.$post(args, options))
    },
  })
}

export function usePostPushV1PusherServicePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['push.v1.PusherService']['Push']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['push.v1.PusherService']['Push']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPushV1PusherServicePushMutationOptions<TError, TOnMutateResult>(
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
