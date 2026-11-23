import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createPostXAmzTargetQLDBSessionSendCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetQLDBSessionSendCommandMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
