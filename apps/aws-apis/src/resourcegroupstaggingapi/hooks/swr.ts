import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetResourceGroupsTaggingAPI_20170126DescribeReportCreationKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126GetComplianceSummaryKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126GetResourcesKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126GetTagKeysKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126GetTagValuesKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126StartReportCreationKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126TagResourcesKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126UntagResourcesKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources'] as const
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation',
    'POST',
  ] as const
}

export function usePostXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationKey()
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
            (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryKey()
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
            (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetResourceGroupsTaggingAPI20170126GetResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesKey()
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
            (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeys<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysKey()
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
            (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues',
    'POST',
  ] as const
}

export function usePostXAmzTargetResourceGroupsTaggingAPI20170126GetTagValues<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesKey()
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
            (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation',
    'POST',
  ] as const
}

export function usePostXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationKey()
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
            (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetResourceGroupsTaggingAPI20170126TagResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesKey()
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
            (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetResourceGroupsTaggingAPI20170126UntagResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesKey()
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
            (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
