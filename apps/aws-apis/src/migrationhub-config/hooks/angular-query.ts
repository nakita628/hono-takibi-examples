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

export function injectPostXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControl<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlMutationOptions<
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

export function injectPostXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControls<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsMutationOptions<
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

export function injectPostXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegion<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionMutationOptions<
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
