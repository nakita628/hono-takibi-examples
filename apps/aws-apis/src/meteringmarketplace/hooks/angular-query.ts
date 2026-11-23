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

export function injectPostXAmzTargetAWSMPMeteringServiceBatchMeterUsage<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostXAmzTargetAWSMPMeteringServiceMeterUsage<
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
                  (typeof client)['#X-Amz-Target=AWSMPMeteringService.MeterUsage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSMPMeteringService.MeterUsage']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSMPMeteringServiceMeterUsageMutationOptions<
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

export function injectPostXAmzTargetAWSMPMeteringServiceRegisterUsage<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostXAmzTargetAWSMPMeteringServiceResolveCustomer<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
}
