import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenKey() {
  return ['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token'] as const
}

export function getBucketKey() {
  return ['{Bucket}'] as const
}

export function getBucketAccelerateKey() {
  return ['{Bucket}#accelerate'] as const
}

export function getBucketAclKey() {
  return ['{Bucket}#acl'] as const
}

export function getBucketAnalyticsKey() {
  return ['{Bucket}#analytics'] as const
}

export function getBucketAnalyticsIdKey() {
  return ['{Bucket}#analytics&id'] as const
}

export function getBucketCorsKey() {
  return ['{Bucket}#cors'] as const
}

export function getBucketDeleteKey() {
  return ['{Bucket}#delete'] as const
}

export function getBucketEncryptionKey() {
  return ['{Bucket}#encryption'] as const
}

export function getBucketIntelligentTieringKey() {
  return ['{Bucket}#intelligent-tiering'] as const
}

export function getBucketIntelligentTieringIdKey() {
  return ['{Bucket}#intelligent-tiering&id'] as const
}

export function getBucketInventoryKey() {
  return ['{Bucket}#inventory'] as const
}

export function getBucketInventoryIdKey() {
  return ['{Bucket}#inventory&id'] as const
}

export function getBucketLifecycleKey() {
  return ['{Bucket}#lifecycle'] as const
}

export function getBucketLifecycleDeprecatedKey() {
  return ['{Bucket}#lifecycle&deprecated!'] as const
}

export function getBucketListType_2Key() {
  return ['{Bucket}#list-type=2'] as const
}

export function getBucketLocationKey() {
  return ['{Bucket}#location'] as const
}

export function getBucketLoggingKey() {
  return ['{Bucket}#logging'] as const
}

export function getBucketMetricsKey() {
  return ['{Bucket}#metrics'] as const
}

export function getBucketMetricsIdKey() {
  return ['{Bucket}#metrics&id'] as const
}

export function getBucketNotificationKey() {
  return ['{Bucket}#notification'] as const
}

export function getBucketNotificationDeprecatedKey() {
  return ['{Bucket}#notification&deprecated!'] as const
}

export function getBucketObjectLockKey() {
  return ['{Bucket}#object-lock'] as const
}

export function getBucketOwnershipControlsKey() {
  return ['{Bucket}#ownershipControls'] as const
}

export function getBucketPolicyKey() {
  return ['{Bucket}#policy'] as const
}

export function getBucketPolicyStatusKey() {
  return ['{Bucket}#policyStatus'] as const
}

export function getBucketPublicAccessBlockKey() {
  return ['{Bucket}#publicAccessBlock'] as const
}

export function getBucketReplicationKey() {
  return ['{Bucket}#replication'] as const
}

export function getBucketRequestPaymentKey() {
  return ['{Bucket}#requestPayment'] as const
}

export function getBucketTaggingKey() {
  return ['{Bucket}#tagging'] as const
}

export function getBucketUploadsKey() {
  return ['{Bucket}#uploads'] as const
}

export function getBucketVersioningKey() {
  return ['{Bucket}#versioning'] as const
}

export function getBucketVersionsKey() {
  return ['{Bucket}#versions'] as const
}

export function getBucketWebsiteKey() {
  return ['{Bucket}#website'] as const
}

export function getGetBucketKeyUploadIdKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#uploadId', keyArgs] as const
}

export function useGetBucketKeyUploadId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyUploadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#uploadId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketKeyUploadId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyUploadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#uploadId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBucketKeyUploadIdKey() {
  return [':Bucket', '/:Bucket/:Key#uploadId', 'POST'] as const
}

export function usePostBucketKeyUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBucketKeyUploadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$post']> },
      ) => parseResponse(client[':Bucket'][':Key#uploadId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketKeyUploadIdKey() {
  return [':Bucket', '/:Bucket/:Key#uploadId', 'DELETE'] as const
}

export function useDeleteBucketKeyUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketKeyUploadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$delete']> },
      ) => parseResponse(client[':Bucket'][':Key#uploadId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBucketKeyXAmzCopySourceKey() {
  return [':Bucket', '/:Bucket/:Key#x-amz-copy-source', 'PUT'] as const
}

export function usePutBucketKeyXAmzCopySource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#x-amz-copy-source']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#x-amz-copy-source']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketKeyXAmzCopySourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key#x-amz-copy-source']['$put']> },
      ) => parseResponse(client[':Bucket'][':Key#x-amz-copy-source'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketKey(args: InferRequestType<(typeof client)[':Bucket']['$get']>) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket', keyArgs] as const
}

export function useGetBucket<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucket<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketKey() {
  return [':Bucket', '/:Bucket', 'PUT'] as const
}

export function usePutBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':Bucket']['$put']> }) =>
        parseResponse(client[':Bucket'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketKey() {
  return [':Bucket', '/:Bucket', 'DELETE'] as const
}

export function useDeleteBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$delete']>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':Bucket']['$delete']> }) =>
        parseResponse(client[':Bucket'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadBucketKey() {
  return [':Bucket', '/:Bucket', 'HEAD'] as const
}

export function useHeadBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$head']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadBucketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':Bucket']['$head']> }) =>
        parseResponse(client[':Bucket'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBucketKeyUploadsKey() {
  return [':Bucket', '/:Bucket/:Key#uploads', 'POST'] as const
}

export function usePostBucketKeyUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#uploads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBucketKeyUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key#uploads']['$post']> },
      ) => parseResponse(client[':Bucket'][':Key#uploads'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketAnalyticsIdKey(
  args: InferRequestType<(typeof client)[':Bucket#analytics&id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#analytics&id', '/:Bucket#analytics&id', keyArgs] as const
}

export function useGetBucketAnalyticsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#analytics&id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketAnalyticsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#analytics&id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketAnalyticsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#analytics&id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketAnalyticsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#analytics&id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketAnalyticsIdKey() {
  return [':Bucket#analytics&id', '/:Bucket#analytics&id', 'PUT'] as const
}

export function usePutBucketAnalyticsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#analytics&id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketAnalyticsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#analytics&id']['$put']> },
      ) => parseResponse(client[':Bucket#analytics&id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketAnalyticsIdKey() {
  return [':Bucket#analytics&id', '/:Bucket#analytics&id', 'DELETE'] as const
}

export function useDeleteBucketAnalyticsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#analytics&id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketAnalyticsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#analytics&id']['$delete']> },
      ) => parseResponse(client[':Bucket#analytics&id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketCorsKey(
  args: InferRequestType<(typeof client)[':Bucket#cors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#cors', '/:Bucket#cors', keyArgs] as const
}

export function useGetBucketCors<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#cors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketCorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#cors'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketCors<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#cors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketCorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#cors'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketCorsKey() {
  return [':Bucket#cors', '/:Bucket#cors', 'PUT'] as const
}

export function usePutBucketCors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#cors']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketCorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':Bucket#cors']['$put']> }) =>
        parseResponse(client[':Bucket#cors'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketCorsKey() {
  return [':Bucket#cors', '/:Bucket#cors', 'DELETE'] as const
}

export function useDeleteBucketCors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#cors']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketCorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#cors']['$delete']> },
      ) => parseResponse(client[':Bucket#cors'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketEncryptionKey(
  args: InferRequestType<(typeof client)[':Bucket#encryption']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#encryption', '/:Bucket#encryption', keyArgs] as const
}

export function useGetBucketEncryption<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#encryption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketEncryptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#encryption'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketEncryption<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#encryption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketEncryptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#encryption'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketEncryptionKey() {
  return [':Bucket#encryption', '/:Bucket#encryption', 'PUT'] as const
}

export function usePutBucketEncryption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#encryption']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketEncryptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#encryption']['$put']> },
      ) => parseResponse(client[':Bucket#encryption'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketEncryptionKey() {
  return [':Bucket#encryption', '/:Bucket#encryption', 'DELETE'] as const
}

export function useDeleteBucketEncryption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#encryption']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketEncryptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#encryption']['$delete']> },
      ) => parseResponse(client[':Bucket#encryption'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketIntelligentTieringIdKey(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#intelligent-tiering&id', '/:Bucket#intelligent-tiering&id', keyArgs] as const
}

export function useGetBucketIntelligentTieringId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketIntelligentTieringIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#intelligent-tiering&id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketIntelligentTieringId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketIntelligentTieringIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#intelligent-tiering&id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketIntelligentTieringIdKey() {
  return [':Bucket#intelligent-tiering&id', '/:Bucket#intelligent-tiering&id', 'PUT'] as const
}

export function usePutBucketIntelligentTieringId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketIntelligentTieringIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$put']> },
      ) => parseResponse(client[':Bucket#intelligent-tiering&id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketIntelligentTieringIdKey() {
  return [':Bucket#intelligent-tiering&id', '/:Bucket#intelligent-tiering&id', 'DELETE'] as const
}

export function useDeleteBucketIntelligentTieringId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketIntelligentTieringIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$delete']> },
      ) => parseResponse(client[':Bucket#intelligent-tiering&id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketInventoryIdKey(
  args: InferRequestType<(typeof client)[':Bucket#inventory&id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#inventory&id', '/:Bucket#inventory&id', keyArgs] as const
}

export function useGetBucketInventoryId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#inventory&id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketInventoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#inventory&id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketInventoryId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#inventory&id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketInventoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#inventory&id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketInventoryIdKey() {
  return [':Bucket#inventory&id', '/:Bucket#inventory&id', 'PUT'] as const
}

export function usePutBucketInventoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#inventory&id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketInventoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#inventory&id']['$put']> },
      ) => parseResponse(client[':Bucket#inventory&id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketInventoryIdKey() {
  return [':Bucket#inventory&id', '/:Bucket#inventory&id', 'DELETE'] as const
}

export function useDeleteBucketInventoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#inventory&id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketInventoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#inventory&id']['$delete']> },
      ) => parseResponse(client[':Bucket#inventory&id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketLifecycleKey(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#lifecycle', '/:Bucket#lifecycle', keyArgs] as const
}

export function useGetBucketLifecycle<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketLifecycleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#lifecycle'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketLifecycle<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketLifecycleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#lifecycle'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketLifecycleKey() {
  return [':Bucket#lifecycle', '/:Bucket#lifecycle', 'PUT'] as const
}

export function usePutBucketLifecycle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#lifecycle']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketLifecycleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#lifecycle']['$put']> },
      ) => parseResponse(client[':Bucket#lifecycle'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketLifecycleKey() {
  return [':Bucket#lifecycle', '/:Bucket#lifecycle', 'DELETE'] as const
}

export function useDeleteBucketLifecycle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#lifecycle']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketLifecycleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#lifecycle']['$delete']> },
      ) => parseResponse(client[':Bucket#lifecycle'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketMetricsIdKey(
  args: InferRequestType<(typeof client)[':Bucket#metrics&id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#metrics&id', '/:Bucket#metrics&id', keyArgs] as const
}

export function useGetBucketMetricsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#metrics&id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketMetricsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#metrics&id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketMetricsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#metrics&id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketMetricsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#metrics&id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketMetricsIdKey() {
  return [':Bucket#metrics&id', '/:Bucket#metrics&id', 'PUT'] as const
}

export function usePutBucketMetricsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#metrics&id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketMetricsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#metrics&id']['$put']> },
      ) => parseResponse(client[':Bucket#metrics&id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketMetricsIdKey() {
  return [':Bucket#metrics&id', '/:Bucket#metrics&id', 'DELETE'] as const
}

export function useDeleteBucketMetricsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#metrics&id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketMetricsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#metrics&id']['$delete']> },
      ) => parseResponse(client[':Bucket#metrics&id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketOwnershipControlsKey(
  args: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#ownershipControls', '/:Bucket#ownershipControls', keyArgs] as const
}

export function useGetBucketOwnershipControls<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketOwnershipControlsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#ownershipControls'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketOwnershipControls<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketOwnershipControlsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#ownershipControls'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketOwnershipControlsKey() {
  return [':Bucket#ownershipControls', '/:Bucket#ownershipControls', 'PUT'] as const
}

export function usePutBucketOwnershipControls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#ownershipControls']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketOwnershipControlsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$put']> },
      ) => parseResponse(client[':Bucket#ownershipControls'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketOwnershipControlsKey() {
  return [':Bucket#ownershipControls', '/:Bucket#ownershipControls', 'DELETE'] as const
}

export function useDeleteBucketOwnershipControls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#ownershipControls']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketOwnershipControlsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$delete']> },
      ) => parseResponse(client[':Bucket#ownershipControls'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketPolicyKey(
  args: InferRequestType<(typeof client)[':Bucket#policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#policy', '/:Bucket#policy', keyArgs] as const
}

export function useGetBucketPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketPolicyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketPolicyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketPolicyKey() {
  return [':Bucket#policy', '/:Bucket#policy', 'PUT'] as const
}

export function usePutBucketPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#policy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#policy']['$put']> },
      ) => parseResponse(client[':Bucket#policy'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketPolicyKey() {
  return [':Bucket#policy', '/:Bucket#policy', 'DELETE'] as const
}

export function useDeleteBucketPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#policy']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#policy']['$delete']> },
      ) => parseResponse(client[':Bucket#policy'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketReplicationKey(
  args: InferRequestType<(typeof client)[':Bucket#replication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#replication', '/:Bucket#replication', keyArgs] as const
}

export function useGetBucketReplication<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#replication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#replication']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketReplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#replication']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#replication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketReplication<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#replication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#replication']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketReplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#replication']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#replication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketReplicationKey() {
  return [':Bucket#replication', '/:Bucket#replication', 'PUT'] as const
}

export function usePutBucketReplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#replication']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#replication']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketReplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#replication']['$put']> },
      ) => parseResponse(client[':Bucket#replication'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketReplicationKey() {
  return [':Bucket#replication', '/:Bucket#replication', 'DELETE'] as const
}

export function useDeleteBucketReplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#replication']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#replication']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketReplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#replication']['$delete']> },
      ) => parseResponse(client[':Bucket#replication'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketTaggingKey(
  args: InferRequestType<(typeof client)[':Bucket#tagging']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#tagging', '/:Bucket#tagging', keyArgs] as const
}

export function useGetBucketTagging<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#tagging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketTaggingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#tagging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketTagging<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#tagging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketTaggingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#tagging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketTaggingKey() {
  return [':Bucket#tagging', '/:Bucket#tagging', 'PUT'] as const
}

export function usePutBucketTagging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#tagging']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketTaggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#tagging']['$put']> },
      ) => parseResponse(client[':Bucket#tagging'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketTaggingKey() {
  return [':Bucket#tagging', '/:Bucket#tagging', 'DELETE'] as const
}

export function useDeleteBucketTagging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#tagging']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketTaggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#tagging']['$delete']> },
      ) => parseResponse(client[':Bucket#tagging'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketWebsiteKey(
  args: InferRequestType<(typeof client)[':Bucket#website']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#website', '/:Bucket#website', keyArgs] as const
}

export function useGetBucketWebsite<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#website']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketWebsiteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#website'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketWebsite<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#website']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketWebsiteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#website'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketWebsiteKey() {
  return [':Bucket#website', '/:Bucket#website', 'PUT'] as const
}

export function usePutBucketWebsite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#website']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketWebsiteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#website']['$put']> },
      ) => parseResponse(client[':Bucket#website'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketWebsiteKey() {
  return [':Bucket#website', '/:Bucket#website', 'DELETE'] as const
}

export function useDeleteBucketWebsite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#website']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketWebsiteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#website']['$delete']> },
      ) => parseResponse(client[':Bucket#website'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketKeyKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key', keyArgs] as const
}

export function useGetBucketKey<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketKey<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketKeyKey() {
  return [':Bucket', '/:Bucket/:Key', 'PUT'] as const
}

export function usePutBucketKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key']['$put']> },
      ) => parseResponse(client[':Bucket'][':Key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketKeyKey() {
  return [':Bucket', '/:Bucket/:Key', 'DELETE'] as const
}

export function useDeleteBucketKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key']['$delete']> },
      ) => parseResponse(client[':Bucket'][':Key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadBucketKeyKey() {
  return [':Bucket', '/:Bucket/:Key', 'HEAD'] as const
}

export function useHeadBucketKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$head']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadBucketKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key']['$head']> },
      ) => parseResponse(client[':Bucket'][':Key'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketKeyTaggingKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#tagging', keyArgs] as const
}

export function useGetBucketKeyTagging<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyTaggingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#tagging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketKeyTagging<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyTaggingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#tagging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketKeyTaggingKey() {
  return [':Bucket', '/:Bucket/:Key#tagging', 'PUT'] as const
}

export function usePutBucketKeyTagging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketKeyTaggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$put']> },
      ) => parseResponse(client[':Bucket'][':Key#tagging'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketKeyTaggingKey() {
  return [':Bucket', '/:Bucket/:Key#tagging', 'DELETE'] as const
}

export function useDeleteBucketKeyTagging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketKeyTaggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$delete']> },
      ) => parseResponse(client[':Bucket'][':Key#tagging'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBucketDeleteKey() {
  return [':Bucket#delete', '/:Bucket#delete', 'POST'] as const
}

export function usePostBucketDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBucketDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#delete']['$post']> },
      ) => parseResponse(client[':Bucket#delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketPublicAccessBlockKey(
  args: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#publicAccessBlock', '/:Bucket#publicAccessBlock', keyArgs] as const
}

export function useGetBucketPublicAccessBlock<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketPublicAccessBlockKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#publicAccessBlock'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketPublicAccessBlock<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketPublicAccessBlockKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#publicAccessBlock'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketPublicAccessBlockKey() {
  return [':Bucket#publicAccessBlock', '/:Bucket#publicAccessBlock', 'PUT'] as const
}

export function usePutBucketPublicAccessBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketPublicAccessBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$put']> },
      ) => parseResponse(client[':Bucket#publicAccessBlock'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketPublicAccessBlockKey() {
  return [':Bucket#publicAccessBlock', '/:Bucket#publicAccessBlock', 'DELETE'] as const
}

export function useDeleteBucketPublicAccessBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketPublicAccessBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$delete']> },
      ) => parseResponse(client[':Bucket#publicAccessBlock'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketAccelerateKey(
  args: InferRequestType<(typeof client)[':Bucket#accelerate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#accelerate', '/:Bucket#accelerate', keyArgs] as const
}

export function useGetBucketAccelerate<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#accelerate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketAccelerateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#accelerate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketAccelerate<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#accelerate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketAccelerateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#accelerate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketAccelerateKey() {
  return [':Bucket#accelerate', '/:Bucket#accelerate', 'PUT'] as const
}

export function usePutBucketAccelerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#accelerate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketAccelerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#accelerate']['$put']> },
      ) => parseResponse(client[':Bucket#accelerate'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketAclKey(args: InferRequestType<(typeof client)[':Bucket#acl']['$get']>) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#acl', '/:Bucket#acl', keyArgs] as const
}

export function useGetBucketAcl<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketAclKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#acl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketAcl<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketAclKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#acl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketAclKey() {
  return [':Bucket#acl', '/:Bucket#acl', 'PUT'] as const
}

export function usePutBucketAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#acl']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketAclKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':Bucket#acl']['$put']> }) =>
        parseResponse(client[':Bucket#acl'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketLifecycleDeprecatedKey(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#lifecycle&deprecated!', '/:Bucket#lifecycle&deprecated!', keyArgs] as const
}

export function useGetBucketLifecycleDeprecated<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketLifecycleDeprecatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#lifecycle&deprecated!'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketLifecycleDeprecated<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketLifecycleDeprecatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#lifecycle&deprecated!'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketLifecycleDeprecatedKey() {
  return [':Bucket#lifecycle&deprecated!', '/:Bucket#lifecycle&deprecated!', 'PUT'] as const
}

export function usePutBucketLifecycleDeprecated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketLifecycleDeprecatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$put']> },
      ) => parseResponse(client[':Bucket#lifecycle&deprecated!'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketLocationKey(
  args: InferRequestType<(typeof client)[':Bucket#location']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#location', '/:Bucket#location', keyArgs] as const
}

export function useGetBucketLocation<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#location']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketLocationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#location']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#location'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketLocation<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#location']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketLocationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#location']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#location'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBucketLoggingKey(
  args: InferRequestType<(typeof client)[':Bucket#logging']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#logging', '/:Bucket#logging', keyArgs] as const
}

export function useGetBucketLogging<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#logging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketLoggingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#logging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketLogging<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#logging']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketLoggingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#logging'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketLoggingKey() {
  return [':Bucket#logging', '/:Bucket#logging', 'PUT'] as const
}

export function usePutBucketLogging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#logging']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketLoggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#logging']['$put']> },
      ) => parseResponse(client[':Bucket#logging'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketNotificationKey(
  args: InferRequestType<(typeof client)[':Bucket#notification']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#notification', '/:Bucket#notification', keyArgs] as const
}

export function useGetBucketNotification<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#notification']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#notification']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketNotificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#notification']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#notification'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketNotification<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#notification']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#notification']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketNotificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#notification']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#notification'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketNotificationKey() {
  return [':Bucket#notification', '/:Bucket#notification', 'PUT'] as const
}

export function usePutBucketNotification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#notification']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#notification']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#notification']['$put']> },
      ) => parseResponse(client[':Bucket#notification'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketNotificationDeprecatedKey(
  args: InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#notification&deprecated!', '/:Bucket#notification&deprecated!', keyArgs] as const
}

export function useGetBucketNotificationDeprecated<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketNotificationDeprecatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Bucket#notification&deprecated!'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketNotificationDeprecated<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketNotificationDeprecatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Bucket#notification&deprecated!'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketNotificationDeprecatedKey() {
  return [':Bucket#notification&deprecated!', '/:Bucket#notification&deprecated!', 'PUT'] as const
}

export function usePutBucketNotificationDeprecated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketNotificationDeprecatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$put']> },
      ) => parseResponse(client[':Bucket#notification&deprecated!'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketPolicyStatusKey(
  args: InferRequestType<(typeof client)[':Bucket#policyStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#policyStatus', '/:Bucket#policyStatus', keyArgs] as const
}

export function useGetBucketPolicyStatus<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#policyStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policyStatus']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketPolicyStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policyStatus']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#policyStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketPolicyStatus<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#policyStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policyStatus']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketPolicyStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policyStatus']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#policyStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBucketRequestPaymentKey(
  args: InferRequestType<(typeof client)[':Bucket#requestPayment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#requestPayment', '/:Bucket#requestPayment', keyArgs] as const
}

export function useGetBucketRequestPayment<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#requestPayment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketRequestPaymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#requestPayment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketRequestPayment<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#requestPayment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketRequestPaymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#requestPayment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketRequestPaymentKey() {
  return [':Bucket#requestPayment', '/:Bucket#requestPayment', 'PUT'] as const
}

export function usePutBucketRequestPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#requestPayment']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketRequestPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#requestPayment']['$put']> },
      ) => parseResponse(client[':Bucket#requestPayment'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketVersioningKey(
  args: InferRequestType<(typeof client)[':Bucket#versioning']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#versioning', '/:Bucket#versioning', keyArgs] as const
}

export function useGetBucketVersioning<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#versioning']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketVersioningKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#versioning'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketVersioning<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#versioning']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketVersioningKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#versioning'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketVersioningKey() {
  return [':Bucket#versioning', '/:Bucket#versioning', 'PUT'] as const
}

export function usePutBucketVersioning<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#versioning']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketVersioningKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#versioning']['$put']> },
      ) => parseResponse(client[':Bucket#versioning'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketKeyAclKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#acl', keyArgs] as const
}

export function useGetBucketKeyAcl<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketKeyAclKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#acl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketKeyAcl<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketKeyAclKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#acl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketKeyAclKey() {
  return [':Bucket', '/:Bucket/:Key#acl', 'PUT'] as const
}

export function usePutBucketKeyAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketKeyAclKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$put']> },
      ) => parseResponse(client[':Bucket'][':Key#acl'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketKeyAttributesXAmzObjectAttributesKey(
  args: InferRequestType<
    (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#attributes&x-amz-object-attributes', keyArgs] as const
}

export function useGetBucketKeyAttributesXAmzObjectAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyAttributesXAmzObjectAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Bucket'][':Key#attributes&x-amz-object-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketKeyAttributesXAmzObjectAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyAttributesXAmzObjectAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Bucket'][':Key#attributes&x-amz-object-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBucketKeyLegalHoldKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#legal-hold', keyArgs] as const
}

export function useGetBucketKeyLegalHold<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyLegalHoldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#legal-hold'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketKeyLegalHold<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyLegalHoldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#legal-hold'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketKeyLegalHoldKey() {
  return [':Bucket', '/:Bucket/:Key#legal-hold', 'PUT'] as const
}

export function usePutBucketKeyLegalHold<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketKeyLegalHoldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$put']> },
      ) => parseResponse(client[':Bucket'][':Key#legal-hold'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketObjectLockKey(
  args: InferRequestType<(typeof client)[':Bucket#object-lock']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#object-lock', '/:Bucket#object-lock', keyArgs] as const
}

export function useGetBucketObjectLock<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#object-lock']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketObjectLockKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#object-lock'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketObjectLock<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#object-lock']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketObjectLockKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#object-lock'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketObjectLockKey() {
  return [':Bucket#object-lock', '/:Bucket#object-lock', 'PUT'] as const
}

export function usePutBucketObjectLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket#object-lock']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketObjectLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket#object-lock']['$put']> },
      ) => parseResponse(client[':Bucket#object-lock'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketKeyRetentionKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#retention', keyArgs] as const
}

export function useGetBucketKeyRetention<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyRetentionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#retention'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketKeyRetention<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyRetentionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#retention'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBucketKeyRetentionKey() {
  return [':Bucket', '/:Bucket/:Key#retention', 'PUT'] as const
}

export function usePutBucketKeyRetention<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketKeyRetentionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$put']> },
      ) => parseResponse(client[':Bucket'][':Key#retention'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketKeyTorrentKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#torrent']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#torrent', keyArgs] as const
}

export function useGetBucketKeyTorrent<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#torrent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#torrent']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyTorrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#torrent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#torrent'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketKeyTorrent<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#torrent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#torrent']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketKeyTorrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#torrent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket'][':Key#torrent'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBucketAnalyticsKey(
  args: InferRequestType<(typeof client)[':Bucket#analytics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#analytics', '/:Bucket#analytics', keyArgs] as const
}

export function useGetBucketAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#analytics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#analytics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBucketIntelligentTieringKey(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#intelligent-tiering', '/:Bucket#intelligent-tiering', keyArgs] as const
}

export function useGetBucketIntelligentTiering<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketIntelligentTieringKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#intelligent-tiering'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketIntelligentTiering<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketIntelligentTieringKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#intelligent-tiering'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBucketInventoryKey(
  args: InferRequestType<(typeof client)[':Bucket#inventory']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#inventory', '/:Bucket#inventory', keyArgs] as const
}

export function useGetBucketInventory<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#inventory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketInventoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#inventory'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketInventory<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#inventory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketInventoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#inventory'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBucketMetricsKey(
  args: InferRequestType<(typeof client)[':Bucket#metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#metrics', '/:Bucket#metrics', keyArgs] as const
}

export function useGetBucketMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKey(args: InferRequestType<typeof client.index.$get>) {
  const { header: _, ...keyArgs } = args
  return ['', '/', keyArgs] as const
}

export function useGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBucketUploadsKey(
  args: InferRequestType<(typeof client)[':Bucket#uploads']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#uploads', '/:Bucket#uploads', keyArgs] as const
}

export function useGetBucketUploads<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#uploads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#uploads']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketUploadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#uploads']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#uploads'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketUploads<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#uploads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#uploads']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketUploadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#uploads']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#uploads'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBucketVersionsKey(
  args: InferRequestType<(typeof client)[':Bucket#versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#versions', '/:Bucket#versions', keyArgs] as const
}

export function useGetBucketVersions<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versions']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketVersionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#versions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketVersions<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versions']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketVersionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#versions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBucketListType2Key(
  args: InferRequestType<(typeof client)[':Bucket#list-type=2']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#list-type=2', '/:Bucket#list-type=2', keyArgs] as const
}

export function useGetBucketListType2<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#list-type=2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#list-type=2']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketListType2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#list-type=2']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#list-type=2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketListType2<TError = unknown>(
  args: InferRequestType<(typeof client)[':Bucket#list-type=2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#list-type=2']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketListType2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#list-type=2']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Bucket#list-type=2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBucketKeyRestoreKey() {
  return [':Bucket', '/:Bucket/:Key#restore', 'POST'] as const
}

export function usePostBucketKeyRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#restore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBucketKeyRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Bucket'][':Key#restore']['$post']> },
      ) => parseResponse(client[':Bucket'][':Key#restore'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBucketKeySelectSelectType2Key() {
  return [':Bucket', '/:Bucket/:Key#select&select-type=2', 'POST'] as const
}

export function usePostBucketKeySelectSelectType2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#select&select-type=2']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#select&select-type=2']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBucketKeySelectSelectType2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Bucket'][':Key#select&select-type=2']['$post']>
        },
      ) => parseResponse(client[':Bucket'][':Key#select&select-type=2'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBucketKeyPartNumberUploadIdKey() {
  return [':Bucket', '/:Bucket/:Key#partNumber&uploadId', 'PUT'] as const
}

export function usePutBucketKeyPartNumberUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#partNumber&uploadId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Bucket'][':Key#partNumber&uploadId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketKeyPartNumberUploadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Bucket'][':Key#partNumber&uploadId']['$put']>
        },
      ) => parseResponse(client[':Bucket'][':Key#partNumber&uploadId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBucketKeyXAmzCopySourcePartNumberUploadIdKey() {
  return [':Bucket', '/:Bucket/:Key#x-amz-copy-source&partNumber&uploadId', 'PUT'] as const
}

export function usePutBucketKeyXAmzCopySourcePartNumberUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBucketKeyXAmzCopySourcePartNumberUploadIdKey()
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
            (typeof client)[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenKey() {
  return [
    'WriteGetObjectResponse#x-amz-request-route&x-amz-request-token',
    '/WriteGetObjectResponse#x-amz-request-route&x-amz-request-token',
    'POST',
  ] as const
}

export function usePostWriteGetObjectResponseXAmzRequestRouteXAmzRequestToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenKey()
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
            (typeof client)['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token']['$post']
          >
        },
      ) =>
        parseResponse(
          client['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
