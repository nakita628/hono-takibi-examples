import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetQLDBSessionSendCommandKey() {
  return ['#X-Amz-Target=QLDBSession.SendCommand'] as const
}

export function getPostXAmzTargetQLDBSessionSendCommandKey() {
  return [
    '#X-Amz-Target=QLDBSession.SendCommand',
    '/#X-Amz-Target=QLDBSession.SendCommand',
    'POST',
  ] as const
}

export function usePostXAmzTargetQLDBSessionSendCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=QLDBSession.SendCommand']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=QLDBSession.SendCommand']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetQLDBSessionSendCommandKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=QLDBSession.SendCommand']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=QLDBSession.SendCommand'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
