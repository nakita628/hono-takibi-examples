import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetKinesisAnalytics_20180523AddApplicationCloudWatchLoggingOptionKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523AddApplicationInputKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523AddApplicationInputProcessingConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration',
  ] as const
}

export function getXAmzTargetKinesisAnalytics_20180523AddApplicationOutputKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523AddApplicationReferenceDataSourceKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523AddApplicationVpcConfigurationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523CreateApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523CreateApplicationPresignedUrlKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523CreateApplicationSnapshotKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DeleteApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DeleteApplicationCloudWatchLoggingOptionKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption',
  ] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DeleteApplicationInputProcessingConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration',
  ] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DeleteApplicationOutputKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DeleteApplicationReferenceDataSourceKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DeleteApplicationSnapshotKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DeleteApplicationVpcConfigurationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DescribeApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DescribeApplicationSnapshotKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DescribeApplicationVersionKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523DiscoverInputSchemaKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523ListApplicationSnapshotsKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523ListApplicationVersionsKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523ListApplicationsKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523ListTagsForResourceKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523RollbackApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523StartApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523StopApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523TagResourceKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.TagResource'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523UntagResourceKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523UpdateApplicationKey() {
  return ['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication'] as const
}

export function getXAmzTargetKinesisAnalytics_20180523UpdateApplicationMaintenanceConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523AddApplicationInput<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationOutputKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523AddApplicationOutput<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523AddApplicationOutputKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523CreateApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523CreateApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523CreateApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl',
    '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot',
    '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DeleteApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationOutputKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DeleteApplicationOutput<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationOutputKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DescribeApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationVersionKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DescribeApplicationVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationVersionKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523DiscoverInputSchemaKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523DiscoverInputSchema<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523DiscoverInputSchemaKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots',
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523ListApplicationSnapshots<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523ListApplicationVersionsKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions',
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523ListApplicationVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523ListApplicationVersionsKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523ListApplicationsKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.ListApplications',
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplications',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523ListApplications<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523ListApplicationsKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource',
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523RollbackApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523RollbackApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523RollbackApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523StartApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.StartApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.StartApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523StartApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523StartApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523StopApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.StopApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.StopApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523StopApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523StopApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523TagResourceKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.TagResource',
    '/#X-Amz-Target=KinesisAnalytics_20180523.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523TagResourceKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523UntagResourceKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.UntagResource',
    '/#X-Amz-Target=KinesisAnalytics_20180523.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523UpdateApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationKey()
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
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
