import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function usePostXAmzTargetAWSMPEntitlementServiceGetEntitlements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSMPEntitlementServiceGetEntitlementsMutationOptions<
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
