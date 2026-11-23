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

export function injectPostXAmzTargetQLDBSessionSendCommand<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
}
