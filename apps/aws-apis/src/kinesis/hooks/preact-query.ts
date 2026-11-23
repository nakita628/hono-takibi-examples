import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetKinesis_20131202AddTagsToStreamKey() {
  return ['#X-Amz-Target=Kinesis_20131202.AddTagsToStream'] as const
}

export function getXAmzTargetKinesis_20131202CreateStreamKey() {
  return ['#X-Amz-Target=Kinesis_20131202.CreateStream'] as const
}

export function getXAmzTargetKinesis_20131202DecreaseStreamRetentionPeriodKey() {
  return ['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod'] as const
}

export function getXAmzTargetKinesis_20131202DeleteStreamKey() {
  return ['#X-Amz-Target=Kinesis_20131202.DeleteStream'] as const
}

export function getXAmzTargetKinesis_20131202DeregisterStreamConsumerKey() {
  return ['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer'] as const
}

export function getXAmzTargetKinesis_20131202DescribeLimitsKey() {
  return ['#X-Amz-Target=Kinesis_20131202.DescribeLimits'] as const
}

export function getXAmzTargetKinesis_20131202DescribeStreamKey() {
  return ['#X-Amz-Target=Kinesis_20131202.DescribeStream'] as const
}

export function getXAmzTargetKinesis_20131202DescribeStreamConsumerKey() {
  return ['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer'] as const
}

export function getXAmzTargetKinesis_20131202DescribeStreamSummaryKey() {
  return ['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary'] as const
}

export function getXAmzTargetKinesis_20131202DisableEnhancedMonitoringKey() {
  return ['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring'] as const
}

export function getXAmzTargetKinesis_20131202EnableEnhancedMonitoringKey() {
  return ['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring'] as const
}

export function getXAmzTargetKinesis_20131202GetRecordsKey() {
  return ['#X-Amz-Target=Kinesis_20131202.GetRecords'] as const
}

export function getXAmzTargetKinesis_20131202GetShardIteratorKey() {
  return ['#X-Amz-Target=Kinesis_20131202.GetShardIterator'] as const
}

export function getXAmzTargetKinesis_20131202IncreaseStreamRetentionPeriodKey() {
  return ['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod'] as const
}

export function getXAmzTargetKinesis_20131202ListShardsKey() {
  return ['#X-Amz-Target=Kinesis_20131202.ListShards'] as const
}

export function getXAmzTargetKinesis_20131202ListStreamConsumersKey() {
  return ['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers'] as const
}

export function getXAmzTargetKinesis_20131202ListStreamsKey() {
  return ['#X-Amz-Target=Kinesis_20131202.ListStreams'] as const
}

export function getXAmzTargetKinesis_20131202ListTagsForStreamKey() {
  return ['#X-Amz-Target=Kinesis_20131202.ListTagsForStream'] as const
}

export function getXAmzTargetKinesis_20131202MergeShardsKey() {
  return ['#X-Amz-Target=Kinesis_20131202.MergeShards'] as const
}

export function getXAmzTargetKinesis_20131202PutRecordKey() {
  return ['#X-Amz-Target=Kinesis_20131202.PutRecord'] as const
}

export function getXAmzTargetKinesis_20131202PutRecordsKey() {
  return ['#X-Amz-Target=Kinesis_20131202.PutRecords'] as const
}

export function getXAmzTargetKinesis_20131202RegisterStreamConsumerKey() {
  return ['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer'] as const
}

export function getXAmzTargetKinesis_20131202RemoveTagsFromStreamKey() {
  return ['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream'] as const
}

export function getXAmzTargetKinesis_20131202SplitShardKey() {
  return ['#X-Amz-Target=Kinesis_20131202.SplitShard'] as const
}

export function getXAmzTargetKinesis_20131202StartStreamEncryptionKey() {
  return ['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption'] as const
}

export function getXAmzTargetKinesis_20131202StopStreamEncryptionKey() {
  return ['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption'] as const
}

export function getXAmzTargetKinesis_20131202UpdateShardCountKey() {
  return ['#X-Amz-Target=Kinesis_20131202.UpdateShardCount'] as const
}

export function getXAmzTargetKinesis_20131202UpdateStreamModeKey() {
  return ['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode'] as const
}

export function getPostXAmzTargetKinesis20131202AddTagsToStreamMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.AddTagsToStream',
    '/#X-Amz-Target=Kinesis_20131202.AddTagsToStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202AddTagsToStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.AddTagsToStream']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.AddTagsToStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202AddTagsToStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.AddTagsToStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.AddTagsToStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202AddTagsToStream<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.AddTagsToStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.AddTagsToStream']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202AddTagsToStreamMutationOptions<
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

export function getPostXAmzTargetKinesis20131202CreateStreamMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.CreateStream',
    '/#X-Amz-Target=Kinesis_20131202.CreateStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202CreateStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.CreateStream']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.CreateStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202CreateStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.CreateStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.CreateStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202CreateStream<
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
                ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.CreateStream']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.CreateStream']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202CreateStreamMutationOptions<
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

export function getPostXAmzTargetKinesis20131202DecreaseStreamRetentionPeriodMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod',
    '/#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202DecreaseStreamRetentionPeriodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202DecreaseStreamRetentionPeriodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202DecreaseStreamRetentionPeriod<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod']['$post']
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
    getPostXAmzTargetKinesis20131202DecreaseStreamRetentionPeriodMutationOptions<
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

export function getPostXAmzTargetKinesis20131202DeleteStreamMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DeleteStream',
    '/#X-Amz-Target=Kinesis_20131202.DeleteStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202DeleteStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DeleteStream']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DeleteStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202DeleteStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.DeleteStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.DeleteStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202DeleteStream<
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
                ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DeleteStream']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DeleteStream']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202DeleteStreamMutationOptions<
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

export function getPostXAmzTargetKinesis20131202DeregisterStreamConsumerMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer',
    '/#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202DeregisterStreamConsumerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202DeregisterStreamConsumerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202DeregisterStreamConsumer<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202DeregisterStreamConsumerMutationOptions<
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

export function getPostXAmzTargetKinesis20131202DescribeLimitsMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DescribeLimits',
    '/#X-Amz-Target=Kinesis_20131202.DescribeLimits',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202DescribeLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeLimits']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeLimits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202DescribeLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeLimits']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.DescribeLimits'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202DescribeLimits<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeLimits']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeLimits']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202DescribeLimitsMutationOptions<
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

export function getPostXAmzTargetKinesis20131202DescribeStreamMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DescribeStream',
    '/#X-Amz-Target=Kinesis_20131202.DescribeStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202DescribeStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStream']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202DescribeStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.DescribeStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202DescribeStream<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStream']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202DescribeStreamMutationOptions<
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

export function getPostXAmzTargetKinesis20131202DescribeStreamConsumerMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer',
    '/#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202DescribeStreamConsumerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202DescribeStreamConsumerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202DescribeStreamConsumer<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202DescribeStreamConsumerMutationOptions<
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

export function getPostXAmzTargetKinesis20131202DescribeStreamSummaryMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary',
    '/#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202DescribeStreamSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202DescribeStreamSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202DescribeStreamSummary<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202DescribeStreamSummaryMutationOptions<
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

export function getPostXAmzTargetKinesis20131202DisableEnhancedMonitoringMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring',
    '/#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202DisableEnhancedMonitoringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202DisableEnhancedMonitoringMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202DisableEnhancedMonitoring<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202DisableEnhancedMonitoringMutationOptions<
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

export function getPostXAmzTargetKinesis20131202EnableEnhancedMonitoringMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring',
    '/#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202EnableEnhancedMonitoringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202EnableEnhancedMonitoringMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202EnableEnhancedMonitoring<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202EnableEnhancedMonitoringMutationOptions<
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

export function getPostXAmzTargetKinesis20131202GetRecordsMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.GetRecords',
    '/#X-Amz-Target=Kinesis_20131202.GetRecords',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202GetRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetRecords']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetRecords']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202GetRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetRecords']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Kinesis_20131202.GetRecords'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetKinesis20131202GetRecords<
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
                ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetRecords']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetRecords']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202GetRecordsMutationOptions<
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

export function getPostXAmzTargetKinesis20131202GetShardIteratorMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.GetShardIterator',
    '/#X-Amz-Target=Kinesis_20131202.GetShardIterator',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202GetShardIteratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetShardIterator']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetShardIterator']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202GetShardIteratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.GetShardIterator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.GetShardIterator'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202GetShardIterator<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.GetShardIterator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.GetShardIterator']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202GetShardIteratorMutationOptions<
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

export function getPostXAmzTargetKinesis20131202IncreaseStreamRetentionPeriodMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod',
    '/#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202IncreaseStreamRetentionPeriodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202IncreaseStreamRetentionPeriodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202IncreaseStreamRetentionPeriod<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod']['$post']
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
    getPostXAmzTargetKinesis20131202IncreaseStreamRetentionPeriodMutationOptions<
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

export function getPostXAmzTargetKinesis20131202ListShardsMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.ListShards',
    '/#X-Amz-Target=Kinesis_20131202.ListShards',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202ListShardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListShards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListShards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202ListShardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListShards']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Kinesis_20131202.ListShards'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetKinesis20131202ListShards<
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
                ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListShards']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListShards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202ListShardsMutationOptions<
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

export function getPostXAmzTargetKinesis20131202ListStreamConsumersMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.ListStreamConsumers',
    '/#X-Amz-Target=Kinesis_20131202.ListStreamConsumers',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202ListStreamConsumersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202ListStreamConsumersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202ListStreamConsumers<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202ListStreamConsumersMutationOptions<
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

export function getPostXAmzTargetKinesis20131202ListStreamsMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.ListStreams',
    '/#X-Amz-Target=Kinesis_20131202.ListStreams',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202ListStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreams']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202ListStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreams']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.ListStreams'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202ListStreams<
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
                ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreams']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreams']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202ListStreamsMutationOptions<
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

export function getPostXAmzTargetKinesis20131202ListTagsForStreamMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.ListTagsForStream',
    '/#X-Amz-Target=Kinesis_20131202.ListTagsForStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202ListTagsForStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListTagsForStream']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListTagsForStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202ListTagsForStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.ListTagsForStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.ListTagsForStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202ListTagsForStream<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.ListTagsForStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.ListTagsForStream']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202ListTagsForStreamMutationOptions<
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

export function getPostXAmzTargetKinesis20131202MergeShardsMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.MergeShards',
    '/#X-Amz-Target=Kinesis_20131202.MergeShards',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202MergeShardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.MergeShards']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.MergeShards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202MergeShardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.MergeShards']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.MergeShards'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202MergeShards<
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
                ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.MergeShards']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.MergeShards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202MergeShardsMutationOptions<
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

export function getPostXAmzTargetKinesis20131202PutRecordMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.PutRecord',
    '/#X-Amz-Target=Kinesis_20131202.PutRecord',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202PutRecordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecord']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecord']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202PutRecordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecord']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Kinesis_20131202.PutRecord'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetKinesis20131202PutRecord<
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
                ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecord']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecord']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202PutRecordMutationOptions<
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

export function getPostXAmzTargetKinesis20131202PutRecordsMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.PutRecords',
    '/#X-Amz-Target=Kinesis_20131202.PutRecords',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202PutRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecords']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecords']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202PutRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecords']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Kinesis_20131202.PutRecords'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetKinesis20131202PutRecords<
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
                ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecords']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecords']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202PutRecordsMutationOptions<
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

export function getPostXAmzTargetKinesis20131202RegisterStreamConsumerMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer',
    '/#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202RegisterStreamConsumerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202RegisterStreamConsumerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202RegisterStreamConsumer<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202RegisterStreamConsumerMutationOptions<
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

export function getPostXAmzTargetKinesis20131202RemoveTagsFromStreamMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream',
    '/#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202RemoveTagsFromStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202RemoveTagsFromStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202RemoveTagsFromStream<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202RemoveTagsFromStreamMutationOptions<
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

export function getPostXAmzTargetKinesis20131202SplitShardMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.SplitShard',
    '/#X-Amz-Target=Kinesis_20131202.SplitShard',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202SplitShardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.SplitShard']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.SplitShard']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202SplitShardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.SplitShard']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Kinesis_20131202.SplitShard'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetKinesis20131202SplitShard<
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
                ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.SplitShard']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.SplitShard']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetKinesis20131202SplitShardMutationOptions<
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

export function getPostXAmzTargetKinesis20131202StartStreamEncryptionMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.StartStreamEncryption',
    '/#X-Amz-Target=Kinesis_20131202.StartStreamEncryption',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202StartStreamEncryptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202StartStreamEncryptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202StartStreamEncryption<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202StartStreamEncryptionMutationOptions<
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

export function getPostXAmzTargetKinesis20131202StopStreamEncryptionMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.StopStreamEncryption',
    '/#X-Amz-Target=Kinesis_20131202.StopStreamEncryption',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202StopStreamEncryptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202StopStreamEncryptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202StopStreamEncryption<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202StopStreamEncryptionMutationOptions<
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

export function getPostXAmzTargetKinesis20131202UpdateShardCountMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.UpdateShardCount',
    '/#X-Amz-Target=Kinesis_20131202.UpdateShardCount',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202UpdateShardCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateShardCount']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateShardCount']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202UpdateShardCountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateShardCount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.UpdateShardCount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202UpdateShardCount<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateShardCount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateShardCount']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202UpdateShardCountMutationOptions<
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

export function getPostXAmzTargetKinesis20131202UpdateStreamModeMutationKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.UpdateStreamMode',
    '/#X-Amz-Target=Kinesis_20131202.UpdateStreamMode',
    'POST',
  ] as const
}

export function getPostXAmzTargetKinesis20131202UpdateStreamModeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetKinesis20131202UpdateStreamModeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetKinesis20131202UpdateStreamMode<
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
                  (typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode']['$post']
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
  const mutationDefaults = getPostXAmzTargetKinesis20131202UpdateStreamModeMutationOptions<
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
