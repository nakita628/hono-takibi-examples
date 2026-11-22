import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlKey() {
  return ['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl'] as const
}

export function getXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsKey() {
  return ['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'] as const
}

export function getXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionKey() {
  return ['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion'] as const
}

export function getPostXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl',
    '/#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls',
    '/#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion',
    '/#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionMutationOptions<
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
