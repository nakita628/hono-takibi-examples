import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetKinesis20131202AddTagsToStreamKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.AddTagsToStream',
    '/#X-Amz-Target=Kinesis_20131202.AddTagsToStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202AddTagsToStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.AddTagsToStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202AddTagsToStreamKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.AddTagsToStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.AddTagsToStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202CreateStreamKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.CreateStream',
    '/#X-Amz-Target=Kinesis_20131202.CreateStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202CreateStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.CreateStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202CreateStreamKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.CreateStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.CreateStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202DecreaseStreamRetentionPeriodKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod',
    '/#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202DecreaseStreamRetentionPeriod<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202DecreaseStreamRetentionPeriodKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202DeleteStreamKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DeleteStream',
    '/#X-Amz-Target=Kinesis_20131202.DeleteStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202DeleteStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DeleteStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202DeleteStreamKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.DeleteStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.DeleteStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202DeregisterStreamConsumerKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer',
    '/#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202DeregisterStreamConsumer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202DeregisterStreamConsumerKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202DescribeLimitsKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DescribeLimits',
    '/#X-Amz-Target=Kinesis_20131202.DescribeLimits',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202DescribeLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeLimits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202DescribeLimitsKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeLimits']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.DescribeLimits'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202DescribeStreamKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DescribeStream',
    '/#X-Amz-Target=Kinesis_20131202.DescribeStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202DescribeStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202DescribeStreamKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.DescribeStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202DescribeStreamConsumerKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer',
    '/#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202DescribeStreamConsumer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202DescribeStreamConsumerKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202DescribeStreamSummaryKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary',
    '/#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202DescribeStreamSummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202DescribeStreamSummaryKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202DisableEnhancedMonitoringKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring',
    '/#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202DisableEnhancedMonitoring<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202DisableEnhancedMonitoringKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202EnableEnhancedMonitoringKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring',
    '/#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202EnableEnhancedMonitoring<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202EnableEnhancedMonitoringKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202GetRecordsKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.GetRecords',
    '/#X-Amz-Target=Kinesis_20131202.GetRecords',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202GetRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetRecords']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetRecords']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202GetRecordsKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.GetRecords']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.GetRecords'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202GetShardIteratorKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.GetShardIterator',
    '/#X-Amz-Target=Kinesis_20131202.GetShardIterator',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202GetShardIterator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.GetShardIterator']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202GetShardIteratorKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.GetShardIterator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.GetShardIterator'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202IncreaseStreamRetentionPeriodKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod',
    '/#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202IncreaseStreamRetentionPeriod<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202IncreaseStreamRetentionPeriodKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202ListShardsKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.ListShards',
    '/#X-Amz-Target=Kinesis_20131202.ListShards',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202ListShards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListShards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListShards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202ListShardsKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.ListShards']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.ListShards'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202ListStreamConsumersKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.ListStreamConsumers',
    '/#X-Amz-Target=Kinesis_20131202.ListStreamConsumers',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202ListStreamConsumers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202ListStreamConsumersKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.ListStreamConsumers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202ListStreamsKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.ListStreams',
    '/#X-Amz-Target=Kinesis_20131202.ListStreams',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202ListStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202ListStreamsKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.ListStreams']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.ListStreams'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202ListTagsForStreamKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.ListTagsForStream',
    '/#X-Amz-Target=Kinesis_20131202.ListTagsForStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202ListTagsForStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.ListTagsForStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202ListTagsForStreamKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.ListTagsForStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.ListTagsForStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202MergeShardsKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.MergeShards',
    '/#X-Amz-Target=Kinesis_20131202.MergeShards',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202MergeShards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.MergeShards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202MergeShardsKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.MergeShards']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.MergeShards'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202PutRecordKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.PutRecord',
    '/#X-Amz-Target=Kinesis_20131202.PutRecord',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202PutRecord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecord']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecord']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202PutRecordKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecord']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Kinesis_20131202.PutRecord'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202PutRecordsKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.PutRecords',
    '/#X-Amz-Target=Kinesis_20131202.PutRecords',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202PutRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecords']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecords']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202PutRecordsKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.PutRecords']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.PutRecords'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202RegisterStreamConsumerKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer',
    '/#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202RegisterStreamConsumer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202RegisterStreamConsumerKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202RemoveTagsFromStreamKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream',
    '/#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202RemoveTagsFromStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202RemoveTagsFromStreamKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202SplitShardKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.SplitShard',
    '/#X-Amz-Target=Kinesis_20131202.SplitShard',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202SplitShard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Kinesis_20131202.SplitShard']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.SplitShard']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202SplitShardKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.SplitShard']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.SplitShard'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202StartStreamEncryptionKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.StartStreamEncryption',
    '/#X-Amz-Target=Kinesis_20131202.StartStreamEncryption',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202StartStreamEncryption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202StartStreamEncryptionKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.StartStreamEncryption'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202StopStreamEncryptionKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.StopStreamEncryption',
    '/#X-Amz-Target=Kinesis_20131202.StopStreamEncryption',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202StopStreamEncryption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202StopStreamEncryptionKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.StopStreamEncryption'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202UpdateShardCountKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.UpdateShardCount',
    '/#X-Amz-Target=Kinesis_20131202.UpdateShardCount',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202UpdateShardCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateShardCount']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202UpdateShardCountKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateShardCount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.UpdateShardCount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetKinesis20131202UpdateStreamModeKey() {
  return [
    '#X-Amz-Target=Kinesis_20131202.UpdateStreamMode',
    '/#X-Amz-Target=Kinesis_20131202.UpdateStreamMode',
    'POST',
  ] as const
}

export function usePostXAmzTargetKinesis20131202UpdateStreamMode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetKinesis20131202UpdateStreamModeKey()
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
            (typeof client)['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Kinesis_20131202.UpdateStreamMode'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
