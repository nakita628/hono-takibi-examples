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

export function getXAmzTargetAWSMPEntitlementServiceGetEntitlementsKey() {
  return ['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements'] as const
}

export function getPostXAmzTargetAWSMPEntitlementServiceGetEntitlementsMutationKey() {
  return [
    '#X-Amz-Target=AWSMPEntitlementService.GetEntitlements',
    '/#X-Amz-Target=AWSMPEntitlementService.GetEntitlements',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMPEntitlementServiceGetEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMPEntitlementServiceGetEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSMPEntitlementServiceGetEntitlements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSMPEntitlementServiceGetEntitlementsMutationOptions<
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
