import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetQLDBSessionSendCommandKey() {
  return ['#X-Amz-Target=QLDBSession.SendCommand'] as const
}

export function getPostXAmzTargetQLDBSessionSendCommandMutationKey() {
  return [
    '#X-Amz-Target=QLDBSession.SendCommand',
    '/#X-Amz-Target=QLDBSession.SendCommand',
    'POST',
  ] as const
}

export function getPostXAmzTargetQLDBSessionSendCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=QLDBSession.SendCommand']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=QLDBSession.SendCommand']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetQLDBSessionSendCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=QLDBSession.SendCommand']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=QLDBSession.SendCommand'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetQLDBSessionSendCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=QLDBSession.SendCommand']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=QLDBSession.SendCommand']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetQLDBSessionSendCommandMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
