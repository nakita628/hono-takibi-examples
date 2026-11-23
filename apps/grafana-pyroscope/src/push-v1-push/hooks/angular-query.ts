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

export function injectPostPushV1PusherServicePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPushV1PusherServicePushMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
