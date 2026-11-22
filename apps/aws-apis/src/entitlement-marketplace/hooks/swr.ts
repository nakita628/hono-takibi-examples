import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSMPEntitlementServiceGetEntitlementsKey() {
  return ['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements'] as const
}

export function getPostXAmzTargetAWSMPEntitlementServiceGetEntitlementsKey() {
  return [
    '#X-Amz-Target=AWSMPEntitlementService.GetEntitlements',
    '/#X-Amz-Target=AWSMPEntitlementService.GetEntitlements',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMPEntitlementServiceGetEntitlements<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMPEntitlementServiceGetEntitlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
