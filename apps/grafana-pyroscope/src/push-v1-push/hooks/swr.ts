import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPushV1PusherServiceKey() {
  return ['push.v1.PusherService'] as const
}

export function getPostPushV1PusherServicePushKey() {
  return ['push.v1.PusherService', '/push.v1.PusherService/Push', 'POST'] as const
}

export function usePostPushV1PusherServicePush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['push.v1.PusherService']['Push']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['push.v1.PusherService']['Push']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPushV1PusherServicePushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['push.v1.PusherService']['Push']['$post']> },
      ) => parseResponse(client['push.v1.PusherService'].Push.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
