import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetFirehose_20150804CreateDeliveryStreamKey() {
  return ['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream'] as const
}

export function getXAmzTargetFirehose_20150804DeleteDeliveryStreamKey() {
  return ['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream'] as const
}

export function getXAmzTargetFirehose_20150804DescribeDeliveryStreamKey() {
  return ['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream'] as const
}

export function getXAmzTargetFirehose_20150804ListDeliveryStreamsKey() {
  return ['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams'] as const
}

export function getXAmzTargetFirehose_20150804ListTagsForDeliveryStreamKey() {
  return ['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream'] as const
}

export function getXAmzTargetFirehose_20150804PutRecordKey() {
  return ['#X-Amz-Target=Firehose_20150804.PutRecord'] as const
}

export function getXAmzTargetFirehose_20150804PutRecordBatchKey() {
  return ['#X-Amz-Target=Firehose_20150804.PutRecordBatch'] as const
}

export function getXAmzTargetFirehose_20150804StartDeliveryStreamEncryptionKey() {
  return ['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption'] as const
}

export function getXAmzTargetFirehose_20150804StopDeliveryStreamEncryptionKey() {
  return ['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption'] as const
}

export function getXAmzTargetFirehose_20150804TagDeliveryStreamKey() {
  return ['#X-Amz-Target=Firehose_20150804.TagDeliveryStream'] as const
}

export function getXAmzTargetFirehose_20150804UntagDeliveryStreamKey() {
  return ['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream'] as const
}

export function getXAmzTargetFirehose_20150804UpdateDestinationKey() {
  return ['#X-Amz-Target=Firehose_20150804.UpdateDestination'] as const
}

export function getPostXAmzTargetFirehose20150804CreateDeliveryStreamMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.CreateDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.CreateDeliveryStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804CreateDeliveryStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804CreateDeliveryStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804CreateDeliveryStream<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream']['$post']
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
  const mutationDefaults = getPostXAmzTargetFirehose20150804CreateDeliveryStreamMutationOptions<
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

export function getPostXAmzTargetFirehose20150804DeleteDeliveryStreamMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804DeleteDeliveryStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804DeleteDeliveryStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804DeleteDeliveryStream<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream']['$post']
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
  const mutationDefaults = getPostXAmzTargetFirehose20150804DeleteDeliveryStreamMutationOptions<
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

export function getPostXAmzTargetFirehose20150804DescribeDeliveryStreamMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804DescribeDeliveryStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804DescribeDeliveryStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804DescribeDeliveryStream<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream']['$post']
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
  const mutationDefaults = getPostXAmzTargetFirehose20150804DescribeDeliveryStreamMutationOptions<
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

export function getPostXAmzTargetFirehose20150804ListDeliveryStreamsMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.ListDeliveryStreams',
    '/#X-Amz-Target=Firehose_20150804.ListDeliveryStreams',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804ListDeliveryStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804ListDeliveryStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804ListDeliveryStreams<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams']['$post']
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
  const mutationDefaults = getPostXAmzTargetFirehose20150804ListDeliveryStreamsMutationOptions<
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

export function getPostXAmzTargetFirehose20150804ListTagsForDeliveryStreamMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804ListTagsForDeliveryStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804ListTagsForDeliveryStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804ListTagsForDeliveryStream<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream']['$post']
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
    getPostXAmzTargetFirehose20150804ListTagsForDeliveryStreamMutationOptions<
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

export function getPostXAmzTargetFirehose20150804PutRecordMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.PutRecord',
    '/#X-Amz-Target=Firehose_20150804.PutRecord',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804PutRecordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecord']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecord']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804PutRecordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecord']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Firehose_20150804.PutRecord'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFirehose20150804PutRecord<
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
                ReturnType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecord']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecord']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetFirehose20150804PutRecordMutationOptions<
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

export function getPostXAmzTargetFirehose20150804PutRecordBatchMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.PutRecordBatch',
    '/#X-Amz-Target=Firehose_20150804.PutRecordBatch',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804PutRecordBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecordBatch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecordBatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804PutRecordBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.PutRecordBatch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.PutRecordBatch'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804PutRecordBatch<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.PutRecordBatch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.PutRecordBatch']['$post']
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
  const mutationDefaults = getPostXAmzTargetFirehose20150804PutRecordBatchMutationOptions<
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

export function getPostXAmzTargetFirehose20150804StartDeliveryStreamEncryptionMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption',
    '/#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804StartDeliveryStreamEncryptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804StartDeliveryStreamEncryptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804StartDeliveryStreamEncryption<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption']['$post']
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
    getPostXAmzTargetFirehose20150804StartDeliveryStreamEncryptionMutationOptions<
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

export function getPostXAmzTargetFirehose20150804StopDeliveryStreamEncryptionMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption',
    '/#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804StopDeliveryStreamEncryptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804StopDeliveryStreamEncryptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804StopDeliveryStreamEncryption<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption']['$post']
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
    getPostXAmzTargetFirehose20150804StopDeliveryStreamEncryptionMutationOptions<
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

export function getPostXAmzTargetFirehose20150804TagDeliveryStreamMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.TagDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.TagDeliveryStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804TagDeliveryStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Firehose_20150804.TagDeliveryStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.TagDeliveryStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804TagDeliveryStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.TagDeliveryStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.TagDeliveryStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804TagDeliveryStream<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.TagDeliveryStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.TagDeliveryStream']['$post']
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
  const mutationDefaults = getPostXAmzTargetFirehose20150804TagDeliveryStreamMutationOptions<
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

export function getPostXAmzTargetFirehose20150804UntagDeliveryStreamMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.UntagDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.UntagDeliveryStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804UntagDeliveryStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804UntagDeliveryStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804UntagDeliveryStream<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream']['$post']
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
  const mutationDefaults = getPostXAmzTargetFirehose20150804UntagDeliveryStreamMutationOptions<
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

export function getPostXAmzTargetFirehose20150804UpdateDestinationMutationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.UpdateDestination',
    '/#X-Amz-Target=Firehose_20150804.UpdateDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetFirehose20150804UpdateDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Firehose_20150804.UpdateDestination']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.UpdateDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFirehose20150804UpdateDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Firehose_20150804.UpdateDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Firehose_20150804.UpdateDestination'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFirehose20150804UpdateDestination<
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
                  (typeof client)['#X-Amz-Target=Firehose_20150804.UpdateDestination']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Firehose_20150804.UpdateDestination']['$post']
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
  const mutationDefaults = getPostXAmzTargetFirehose20150804UpdateDestinationMutationOptions<
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
