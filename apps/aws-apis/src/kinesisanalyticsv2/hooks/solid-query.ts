import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOption<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523AddApplicationInput<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfiguration<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationOutputMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523AddApplicationOutputMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523AddApplicationOutput<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523AddApplicationOutputMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSource<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfiguration<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523CreateApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523CreateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523CreateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523CreateApplication<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523CreateApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl',
    '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrl<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot',
    '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshot<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DeleteApplication<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOption<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfiguration<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationOutputMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationOutputMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DeleteApplicationOutput<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationOutputMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSource<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshot<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfiguration<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DescribeApplication<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshot<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationVersionMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DescribeApplicationVersion<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DescribeApplicationVersionMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523DiscoverInputSchemaMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema',
    '/#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523DiscoverInputSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523DiscoverInputSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523DiscoverInputSchema<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523DiscoverInputSchemaMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots',
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523ListApplicationSnapshots<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523ListApplicationVersionsMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions',
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523ListApplicationVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523ListApplicationVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523ListApplicationVersions<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523ListApplicationVersionsMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523ListApplicationsMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.ListApplications',
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplications',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523ListApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523ListApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523ListApplications<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523ListApplicationsMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource',
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523ListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523RollbackApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523RollbackApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523RollbackApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523RollbackApplication<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523RollbackApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523StartApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.StartApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.StartApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523StartApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523StartApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523StartApplication<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523StartApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523StopApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.StopApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.StopApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523StopApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523StopApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523StopApplication<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523StopApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523TagResourceMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.TagResource',
    '/#X-Amz-Target=KinesisAnalytics_20180523.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523TagResource<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.TagResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetKinesisAnalytics20180523TagResourceMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.UntagResource',
    '/#X-Amz-Target=KinesisAnalytics_20180523.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523UntagResource<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetKinesisAnalytics20180523UntagResourceMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication',
    '/#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523UpdateApplication<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfiguration<
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
                    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationMutationOptions<
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
