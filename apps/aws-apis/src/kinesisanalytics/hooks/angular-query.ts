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

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption',
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOption<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput',
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814AddApplicationInput<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfiguration<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationOutputMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput',
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814AddApplicationOutputMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814AddApplicationOutput<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814AddApplicationOutputMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource',
    '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSource<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814CreateApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814CreateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814CreateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814CreateApplication<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814CreateApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814DeleteApplication<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOption<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfiguration<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationOutputMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationOutputMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814DeleteApplicationOutput<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationOutputMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSource<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814DescribeApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814DescribeApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814DescribeApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814DescribeApplication<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814DescribeApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814DiscoverInputSchemaMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema',
    '/#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814DiscoverInputSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814DiscoverInputSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814DiscoverInputSchema<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814DiscoverInputSchemaMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814ListApplicationsMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.ListApplications',
    '/#X-Amz-Target=KinesisAnalytics_20150814.ListApplications',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814ListApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814ListApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814ListApplications<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814ListApplicationsMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource',
    '/#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814ListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814StartApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.StartApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.StartApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814StartApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814StartApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814StartApplication<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814StartApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814StopApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.StopApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.StopApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814StopApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814StopApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814StopApplication<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814StopApplicationMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814TagResourceMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.TagResource',
    '/#X-Amz-Target=KinesisAnalytics_20150814.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.TagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814TagResource<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.TagResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetKinesisAnalytics20150814TagResourceMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.UntagResource',
    '/#X-Amz-Target=KinesisAnalytics_20150814.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814UntagResource<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetKinesisAnalytics20150814UntagResourceMutationOptions<
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

export function getPostXAmzTargetKinesisAnalytics20150814UpdateApplicationMutationKey() {
  return [
    '#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication',
    '/#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesisAnalytics20150814UpdateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesisAnalytics20150814UpdateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetKinesisAnalytics20150814UpdateApplication<
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
                  (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication']['$post']
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
      getPostXAmzTargetKinesisAnalytics20150814UpdateApplicationMutationOptions<
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
