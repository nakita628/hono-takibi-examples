import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSMPMeteringServiceBatchMeterUsageKey() {
  return ['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage'] as const
}

export function getXAmzTargetAWSMPMeteringServiceMeterUsageKey() {
  return ['#X-Amz-Target=AWSMPMeteringService.MeterUsage'] as const
}

export function getXAmzTargetAWSMPMeteringServiceRegisterUsageKey() {
  return ['#X-Amz-Target=AWSMPMeteringService.RegisterUsage'] as const
}

export function getXAmzTargetAWSMPMeteringServiceResolveCustomerKey() {
  return ['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer'] as const
}

export function getPostXAmzTargetAWSMPMeteringServiceBatchMeterUsageKey() {
  return [
    '#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage',
    '/#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMPMeteringServiceBatchMeterUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMPMeteringServiceBatchMeterUsageKey()
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
            (typeof client)['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMPMeteringServiceMeterUsageKey() {
  return [
    '#X-Amz-Target=AWSMPMeteringService.MeterUsage',
    '/#X-Amz-Target=AWSMPMeteringService.MeterUsage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMPMeteringServiceMeterUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSMPMeteringService.MeterUsage']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMPMeteringService.MeterUsage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMPMeteringServiceMeterUsageKey()
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
            (typeof client)['#X-Amz-Target=AWSMPMeteringService.MeterUsage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMPMeteringService.MeterUsage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMPMeteringServiceRegisterUsageKey() {
  return [
    '#X-Amz-Target=AWSMPMeteringService.RegisterUsage',
    '/#X-Amz-Target=AWSMPMeteringService.RegisterUsage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMPMeteringServiceRegisterUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSMPMeteringService.RegisterUsage']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMPMeteringService.RegisterUsage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMPMeteringServiceRegisterUsageKey()
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
            (typeof client)['#X-Amz-Target=AWSMPMeteringService.RegisterUsage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMPMeteringService.RegisterUsage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMPMeteringServiceResolveCustomerKey() {
  return [
    '#X-Amz-Target=AWSMPMeteringService.ResolveCustomer',
    '/#X-Amz-Target=AWSMPMeteringService.ResolveCustomer',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMPMeteringServiceResolveCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMPMeteringServiceResolveCustomerKey()
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
            (typeof client)['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
