import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostXAmzTargetAWSMPMeteringServiceBatchMeterUsageMutationKey() {
  return [
    '#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage',
    '/#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMPMeteringServiceBatchMeterUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMPMeteringServiceBatchMeterUsageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSMPMeteringServiceBatchMeterUsage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSMPMeteringServiceBatchMeterUsageMutationOptions<
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

export function getPostXAmzTargetAWSMPMeteringServiceMeterUsageMutationKey() {
  return [
    '#X-Amz-Target=AWSMPMeteringService.MeterUsage',
    '/#X-Amz-Target=AWSMPMeteringService.MeterUsage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMPMeteringServiceMeterUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMPMeteringService.MeterUsage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMPMeteringServiceMeterUsageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMPMeteringService.MeterUsage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMPMeteringService.MeterUsage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSMPMeteringServiceMeterUsage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSMPMeteringService.MeterUsage']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSMPMeteringService.MeterUsage']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSMPMeteringServiceMeterUsageMutationOptions<
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

export function getPostXAmzTargetAWSMPMeteringServiceRegisterUsageMutationKey() {
  return [
    '#X-Amz-Target=AWSMPMeteringService.RegisterUsage',
    '/#X-Amz-Target=AWSMPMeteringService.RegisterUsage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMPMeteringServiceRegisterUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMPMeteringService.RegisterUsage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMPMeteringServiceRegisterUsageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMPMeteringService.RegisterUsage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMPMeteringService.RegisterUsage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSMPMeteringServiceRegisterUsage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSMPMeteringService.RegisterUsage']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSMPMeteringService.RegisterUsage']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSMPMeteringServiceRegisterUsageMutationOptions<
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

export function getPostXAmzTargetAWSMPMeteringServiceResolveCustomerMutationKey() {
  return [
    '#X-Amz-Target=AWSMPMeteringService.ResolveCustomer',
    '/#X-Amz-Target=AWSMPMeteringService.ResolveCustomer',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMPMeteringServiceResolveCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMPMeteringServiceResolveCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSMPMeteringServiceResolveCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSMPMeteringServiceResolveCustomerMutationOptions<
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
