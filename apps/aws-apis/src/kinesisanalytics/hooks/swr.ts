import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetKinesisAnalytics_20150814AddApplicationCloudWatchLoggingOptionKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814AddApplicationInputKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814AddApplicationInputProcessingConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration',
  ] as const
}

export function getXAmzTargetKinesisAnalytics_20150814AddApplicationOutputKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814AddApplicationReferenceDataSourceKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814CreateApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814DeleteApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814DeleteApplicationCloudWatchLoggingOptionKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption',
  ] as const
}

export function getXAmzTargetKinesisAnalytics_20150814DeleteApplicationInputProcessingConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration',
  ] as const
}

export function getXAmzTargetKinesisAnalytics_20150814DeleteApplicationOutputKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814DeleteApplicationReferenceDataSourceKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814DescribeApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814DiscoverInputSchemaKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814ListApplicationsKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814ListTagsForResourceKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814StartApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814StopApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814TagResourceKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.TagResource'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814UntagResourceKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource'] as const
}

export function getXAmzTargetKinesisAnalytics_20150814UpdateApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication'] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption',
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput',
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814AddApplicationInput<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationOutputKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput',
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814AddApplicationOutput<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814AddApplicationOutputKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource',
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814CreateApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814CreateApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814CreateApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814DeleteApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationOutputKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814DeleteApplicationOutput<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationOutputKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814DescribeApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814DescribeApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814DescribeApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814DiscoverInputSchemaKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814DiscoverInputSchema<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814DiscoverInputSchemaKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814ListApplicationsKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.ListApplications',
    '/#X-Amz-Target=KinesisAnalytics_20150814.ListApplications',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814ListApplications<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814ListApplicationsKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource',
    '/#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814StartApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.StartApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.StartApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814StartApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814StartApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814StopApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.StopApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.StopApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814StopApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814StopApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814TagResourceKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.TagResource',
    '/#X-Amz-Target=KinesisAnalytics_20150814.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814TagResourceKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814UntagResourceKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.UntagResource',
    '/#X-Amz-Target=KinesisAnalytics_20150814.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20150814UpdateApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20150814UpdateApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20150814UpdateApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
