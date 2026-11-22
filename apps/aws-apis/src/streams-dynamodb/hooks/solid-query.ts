import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostXAmzTargetDynamoDBStreams20120810DescribeStreamMutationKey() {
  return [
    '#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream',
    '/#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDBStreams20120810DescribeStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDBStreams20120810DescribeStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDBStreams20120810DescribeStream<
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
                    (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream']['$post']
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
    const mutationDefaults = getPostXAmzTargetDynamoDBStreams20120810DescribeStreamMutationOptions<
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

export function getPostXAmzTargetDynamoDBStreams20120810GetRecordsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDBStreams_20120810.GetRecords',
    '/#X-Amz-Target=DynamoDBStreams_20120810.GetRecords',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDBStreams20120810GetRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDBStreams20120810GetRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDBStreams20120810GetRecords<
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
                    (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetRecords']['$post']
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
    const mutationDefaults = getPostXAmzTargetDynamoDBStreams20120810GetRecordsMutationOptions<
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

export function getPostXAmzTargetDynamoDBStreams20120810GetShardIteratorMutationKey() {
  return [
    '#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator',
    '/#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDBStreams20120810GetShardIteratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDBStreams20120810GetShardIteratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDBStreams20120810GetShardIterator<
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
                    (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator']['$post']
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
      getPostXAmzTargetDynamoDBStreams20120810GetShardIteratorMutationOptions<
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

export function getPostXAmzTargetDynamoDBStreams20120810ListStreamsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDBStreams_20120810.ListStreams',
    '/#X-Amz-Target=DynamoDBStreams_20120810.ListStreams',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDBStreams20120810ListStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDBStreams20120810ListStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDBStreams20120810ListStreams<
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
                    (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDBStreams_20120810.ListStreams']['$post']
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
    const mutationDefaults = getPostXAmzTargetDynamoDBStreams20120810ListStreamsMutationOptions<
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
