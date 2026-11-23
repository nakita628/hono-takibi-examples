import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlKey() {
  return [
    '#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl',
    '/#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsKey() {
  return [
    '#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls',
    '/#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControls<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionKey() {
  return [
    '#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion',
    '/#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
