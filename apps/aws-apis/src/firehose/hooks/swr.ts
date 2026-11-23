import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetFirehose20150804CreateDeliveryStreamKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.CreateDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.CreateDeliveryStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804CreateDeliveryStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804CreateDeliveryStreamKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.CreateDeliveryStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804DeleteDeliveryStreamKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804DeleteDeliveryStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804DeleteDeliveryStreamKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804DescribeDeliveryStreamKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804DescribeDeliveryStream<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804DescribeDeliveryStreamKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804ListDeliveryStreamsKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.ListDeliveryStreams',
    '/#X-Amz-Target=Firehose_20150804.ListDeliveryStreams',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804ListDeliveryStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804ListDeliveryStreamsKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.ListDeliveryStreams'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804ListTagsForDeliveryStreamKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804ListTagsForDeliveryStream<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804ListTagsForDeliveryStreamKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804PutRecordKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.PutRecord',
    '/#X-Amz-Target=Firehose_20150804.PutRecord',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804PutRecord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecord']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecord']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804PutRecordKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.PutRecord']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.PutRecord'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804PutRecordBatchKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.PutRecordBatch',
    '/#X-Amz-Target=Firehose_20150804.PutRecordBatch',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804PutRecordBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.PutRecordBatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804PutRecordBatchKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.PutRecordBatch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.PutRecordBatch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804StartDeliveryStreamEncryptionKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption',
    '/#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804StartDeliveryStreamEncryption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804StartDeliveryStreamEncryptionKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804StopDeliveryStreamEncryptionKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption',
    '/#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804StopDeliveryStreamEncryption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804StopDeliveryStreamEncryptionKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804TagDeliveryStreamKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.TagDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.TagDeliveryStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804TagDeliveryStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.TagDeliveryStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804TagDeliveryStreamKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.TagDeliveryStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.TagDeliveryStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804UntagDeliveryStreamKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.UntagDeliveryStream',
    '/#X-Amz-Target=Firehose_20150804.UntagDeliveryStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804UntagDeliveryStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804UntagDeliveryStreamKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.UntagDeliveryStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFirehose20150804UpdateDestinationKey() {
  return [
    '#X-Amz-Target=Firehose_20150804.UpdateDestination',
    '/#X-Amz-Target=Firehose_20150804.UpdateDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetFirehose20150804UpdateDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Firehose_20150804.UpdateDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFirehose20150804UpdateDestinationKey()
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
            (typeof client)['#X-Amz-Target=Firehose_20150804.UpdateDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Firehose_20150804.UpdateDestination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
