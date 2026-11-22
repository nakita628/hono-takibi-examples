import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetDynamoDBStreams_20120810DescribeStreamKey() {
  return ['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream'] as const
}

export function getXAmzTargetDynamoDBStreams_20120810GetRecordsKey() {
  return ['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords'] as const
}

export function getXAmzTargetDynamoDBStreams_20120810GetShardIteratorKey() {
  return ['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator'] as const
}

export function getXAmzTargetDynamoDBStreams_20120810ListStreamsKey() {
  return ['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams'] as const
}

export function getPostXAmzTargetDynamoDBStreams20120810DescribeStreamKey() {
  return [
    '#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream',
    '/#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDBStreams20120810DescribeStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDBStreams20120810DescribeStreamKey()
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
            (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDBStreams20120810GetRecordsKey() {
  return [
    '#X-Amz-Target=DynamoDBStreams_20120810.GetRecords',
    '/#X-Amz-Target=DynamoDBStreams_20120810.GetRecords',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDBStreams20120810GetRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDBStreams20120810GetRecordsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDBStreams20120810GetShardIteratorKey() {
  return [
    '#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator',
    '/#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDBStreams20120810GetShardIterator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDBStreams20120810GetShardIteratorKey()
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
            (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDBStreams20120810ListStreamsKey() {
  return [
    '#X-Amz-Target=DynamoDBStreams_20120810.ListStreams',
    '/#X-Amz-Target=DynamoDBStreams_20120810.ListStreams',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDBStreams20120810ListStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDBStreams20120810ListStreamsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
