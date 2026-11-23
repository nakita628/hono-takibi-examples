import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getBucketKeyUploadIdQueryKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#uploadId', keyArgs] as const
}

export function getBucketKeyUploadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketKeyUploadIdQueryKey>
  >({
    queryKey: getBucketKeyUploadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket'][':Key#uploadId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketKeyUploadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketKeyUploadIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketKeyUploadIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBucketKeyUploadIdMutationKey() {
  return [':Bucket', '/:Bucket/:Key#uploadId', 'POST'] as const
}

export function getPostBucketKeyUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBucketKeyUploadIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$post']>) {
      return parseResponse(client[':Bucket'][':Key#uploadId'].$post(args, options))
    },
  })
}

export function createPostBucketKeyUploadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketKeyUploadIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketKeyUploadIdMutationKey() {
  return [':Bucket', '/:Bucket/:Key#uploadId', 'DELETE'] as const
}

export function getDeleteBucketKeyUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketKeyUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$delete']>,
    ) {
      return parseResponse(client[':Bucket'][':Key#uploadId'].$delete(args, options))
    },
  })
}

export function createDeleteBucketKeyUploadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploadId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketKeyUploadIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutBucketKeyXAmzCopySourceMutationKey() {
  return [':Bucket', '/:Bucket/:Key#x-amz-copy-source', 'PUT'] as const
}

export function getPutBucketKeyXAmzCopySourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#x-amz-copy-source']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#x-amz-copy-source']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketKeyXAmzCopySourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket'][':Key#x-amz-copy-source']['$put']>,
    ) {
      return parseResponse(client[':Bucket'][':Key#x-amz-copy-source'].$put(args, options))
    },
  })
}

export function createPutBucketKeyXAmzCopySource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#x-amz-copy-source']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#x-amz-copy-source']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketKeyXAmzCopySourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketQueryKey(args: InferRequestType<(typeof client)[':Bucket']['$get']>) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket', keyArgs] as const
}

export function getBucketQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':Bucket']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBucketQueryKey>
  >({
    queryKey: getBucketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucket<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBucketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketMutationKey() {
  return [':Bucket', '/:Bucket', 'PUT'] as const
}

export function getPutBucketMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket']['$put']>) {
      return parseResponse(client[':Bucket'].$put(args, options))
    },
  })
}

export function createPutBucket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketMutationKey() {
  return [':Bucket', '/:Bucket', 'DELETE'] as const
}

export function getDeleteBucketMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$delete']>>>>
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket']['$delete']>) {
      return parseResponse(client[':Bucket'].$delete(args, options))
    },
  })
}

export function createDeleteBucket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHeadBucketMutationKey() {
  return [':Bucket', '/:Bucket', 'HEAD'] as const
}

export function getHeadBucketMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$head']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadBucketMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket']['$head']>) {
      return parseResponse(client[':Bucket'].$head(args, options))
    },
  })
}

export function createHeadBucket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket']['$head']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadBucketMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBucketKeyUploadsMutationKey() {
  return [':Bucket', '/:Bucket/:Key#uploads', 'POST'] as const
}

export function getPostBucketKeyUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#uploads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBucketKeyUploadsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket'][':Key#uploads']['$post']>) {
      return parseResponse(client[':Bucket'][':Key#uploads'].$post(args, options))
    },
  })
}

export function createPostBucketKeyUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#uploads']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#uploads']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketKeyUploadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketAnalyticsIdQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#analytics&id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#analytics&id', '/:Bucket#analytics&id', keyArgs] as const
}

export function getBucketAnalyticsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#analytics&id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketAnalyticsIdQueryKey>
  >({
    queryKey: getBucketAnalyticsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#analytics&id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketAnalyticsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#analytics&id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketAnalyticsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketAnalyticsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketAnalyticsIdMutationKey() {
  return [':Bucket#analytics&id', '/:Bucket#analytics&id', 'PUT'] as const
}

export function getPutBucketAnalyticsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#analytics&id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketAnalyticsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#analytics&id']['$put']>) {
      return parseResponse(client[':Bucket#analytics&id'].$put(args, options))
    },
  })
}

export function createPutBucketAnalyticsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#analytics&id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketAnalyticsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketAnalyticsIdMutationKey() {
  return [':Bucket#analytics&id', '/:Bucket#analytics&id', 'DELETE'] as const
}

export function getDeleteBucketAnalyticsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#analytics&id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketAnalyticsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#analytics&id']['$delete']>) {
      return parseResponse(client[':Bucket#analytics&id'].$delete(args, options))
    },
  })
}

export function createDeleteBucketAnalyticsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#analytics&id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#analytics&id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketAnalyticsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketCorsQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#cors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#cors', '/:Bucket#cors', keyArgs] as const
}

export function getBucketCorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':Bucket#cors']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBucketCorsQueryKey>
  >({
    queryKey: getBucketCorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#cors'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketCors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#cors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketCorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketCorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketCorsMutationKey() {
  return [':Bucket#cors', '/:Bucket#cors', 'PUT'] as const
}

export function getPutBucketCorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#cors']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketCorsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#cors']['$put']>) {
      return parseResponse(client[':Bucket#cors'].$put(args, options))
    },
  })
}

export function createPutBucketCors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#cors']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketCorsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketCorsMutationKey() {
  return [':Bucket#cors', '/:Bucket#cors', 'DELETE'] as const
}

export function getDeleteBucketCorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#cors']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketCorsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#cors']['$delete']>) {
      return parseResponse(client[':Bucket#cors'].$delete(args, options))
    },
  })
}

export function createDeleteBucketCors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#cors']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#cors']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketCorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketEncryptionQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#encryption']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#encryption', '/:Bucket#encryption', keyArgs] as const
}

export function getBucketEncryptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#encryption']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketEncryptionQueryKey>
  >({
    queryKey: getBucketEncryptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#encryption'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketEncryption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#encryption']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketEncryptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketEncryptionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketEncryptionMutationKey() {
  return [':Bucket#encryption', '/:Bucket#encryption', 'PUT'] as const
}

export function getPutBucketEncryptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#encryption']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketEncryptionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#encryption']['$put']>) {
      return parseResponse(client[':Bucket#encryption'].$put(args, options))
    },
  })
}

export function createPutBucketEncryption<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#encryption']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketEncryptionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketEncryptionMutationKey() {
  return [':Bucket#encryption', '/:Bucket#encryption', 'DELETE'] as const
}

export function getDeleteBucketEncryptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#encryption']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketEncryptionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#encryption']['$delete']>) {
      return parseResponse(client[':Bucket#encryption'].$delete(args, options))
    },
  })
}

export function createDeleteBucketEncryption<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#encryption']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#encryption']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketEncryptionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketIntelligentTieringIdQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#intelligent-tiering&id', '/:Bucket#intelligent-tiering&id', keyArgs] as const
}

export function getBucketIntelligentTieringIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketIntelligentTieringIdQueryKey>
  >({
    queryKey: getBucketIntelligentTieringIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#intelligent-tiering&id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketIntelligentTieringId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketIntelligentTieringIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketIntelligentTieringIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBucketIntelligentTieringIdMutationKey() {
  return [':Bucket#intelligent-tiering&id', '/:Bucket#intelligent-tiering&id', 'PUT'] as const
}

export function getPutBucketIntelligentTieringIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketIntelligentTieringIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$put']>,
    ) {
      return parseResponse(client[':Bucket#intelligent-tiering&id'].$put(args, options))
    },
  })
}

export function createPutBucketIntelligentTieringId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketIntelligentTieringIdMutationOptions<
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

export function getDeleteBucketIntelligentTieringIdMutationKey() {
  return [':Bucket#intelligent-tiering&id', '/:Bucket#intelligent-tiering&id', 'DELETE'] as const
}

export function getDeleteBucketIntelligentTieringIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketIntelligentTieringIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$delete']>,
    ) {
      return parseResponse(client[':Bucket#intelligent-tiering&id'].$delete(args, options))
    },
  })
}

export function createDeleteBucketIntelligentTieringId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering&id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketIntelligentTieringIdMutationOptions<
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

export function getBucketInventoryIdQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#inventory&id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#inventory&id', '/:Bucket#inventory&id', keyArgs] as const
}

export function getBucketInventoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#inventory&id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketInventoryIdQueryKey>
  >({
    queryKey: getBucketInventoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#inventory&id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketInventoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#inventory&id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketInventoryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketInventoryIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketInventoryIdMutationKey() {
  return [':Bucket#inventory&id', '/:Bucket#inventory&id', 'PUT'] as const
}

export function getPutBucketInventoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#inventory&id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketInventoryIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#inventory&id']['$put']>) {
      return parseResponse(client[':Bucket#inventory&id'].$put(args, options))
    },
  })
}

export function createPutBucketInventoryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#inventory&id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketInventoryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketInventoryIdMutationKey() {
  return [':Bucket#inventory&id', '/:Bucket#inventory&id', 'DELETE'] as const
}

export function getDeleteBucketInventoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#inventory&id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketInventoryIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#inventory&id']['$delete']>) {
      return parseResponse(client[':Bucket#inventory&id'].$delete(args, options))
    },
  })
}

export function createDeleteBucketInventoryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#inventory&id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#inventory&id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketInventoryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketLifecycleQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#lifecycle', '/:Bucket#lifecycle', keyArgs] as const
}

export function getBucketLifecycleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketLifecycleQueryKey>
  >({
    queryKey: getBucketLifecycleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#lifecycle'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketLifecycle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#lifecycle']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketLifecycleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketLifecycleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketLifecycleMutationKey() {
  return [':Bucket#lifecycle', '/:Bucket#lifecycle', 'PUT'] as const
}

export function getPutBucketLifecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#lifecycle']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketLifecycleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#lifecycle']['$put']>) {
      return parseResponse(client[':Bucket#lifecycle'].$put(args, options))
    },
  })
}

export function createPutBucketLifecycle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#lifecycle']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketLifecycleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketLifecycleMutationKey() {
  return [':Bucket#lifecycle', '/:Bucket#lifecycle', 'DELETE'] as const
}

export function getDeleteBucketLifecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#lifecycle']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketLifecycleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#lifecycle']['$delete']>) {
      return parseResponse(client[':Bucket#lifecycle'].$delete(args, options))
    },
  })
}

export function createDeleteBucketLifecycle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#lifecycle']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#lifecycle']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketLifecycleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketMetricsIdQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#metrics&id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#metrics&id', '/:Bucket#metrics&id', keyArgs] as const
}

export function getBucketMetricsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#metrics&id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketMetricsIdQueryKey>
  >({
    queryKey: getBucketMetricsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#metrics&id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketMetricsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#metrics&id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketMetricsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketMetricsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketMetricsIdMutationKey() {
  return [':Bucket#metrics&id', '/:Bucket#metrics&id', 'PUT'] as const
}

export function getPutBucketMetricsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#metrics&id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketMetricsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#metrics&id']['$put']>) {
      return parseResponse(client[':Bucket#metrics&id'].$put(args, options))
    },
  })
}

export function createPutBucketMetricsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#metrics&id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketMetricsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketMetricsIdMutationKey() {
  return [':Bucket#metrics&id', '/:Bucket#metrics&id', 'DELETE'] as const
}

export function getDeleteBucketMetricsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#metrics&id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketMetricsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#metrics&id']['$delete']>) {
      return parseResponse(client[':Bucket#metrics&id'].$delete(args, options))
    },
  })
}

export function createDeleteBucketMetricsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#metrics&id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#metrics&id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketMetricsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketOwnershipControlsQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#ownershipControls', '/:Bucket#ownershipControls', keyArgs] as const
}

export function getBucketOwnershipControlsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketOwnershipControlsQueryKey>
  >({
    queryKey: getBucketOwnershipControlsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#ownershipControls'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketOwnershipControls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#ownershipControls']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketOwnershipControlsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketOwnershipControlsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBucketOwnershipControlsMutationKey() {
  return [':Bucket#ownershipControls', '/:Bucket#ownershipControls', 'PUT'] as const
}

export function getPutBucketOwnershipControlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#ownershipControls']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketOwnershipControlsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$put']>) {
      return parseResponse(client[':Bucket#ownershipControls'].$put(args, options))
    },
  })
}

export function createPutBucketOwnershipControls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#ownershipControls']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketOwnershipControlsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketOwnershipControlsMutationKey() {
  return [':Bucket#ownershipControls', '/:Bucket#ownershipControls', 'DELETE'] as const
}

export function getDeleteBucketOwnershipControlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#ownershipControls']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketOwnershipControlsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$delete']>,
    ) {
      return parseResponse(client[':Bucket#ownershipControls'].$delete(args, options))
    },
  })
}

export function createDeleteBucketOwnershipControls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#ownershipControls']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#ownershipControls']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketOwnershipControlsMutationOptions<
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

export function getBucketPolicyQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#policy', '/:Bucket#policy', keyArgs] as const
}

export function getBucketPolicyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketPolicyQueryKey>
  >({
    queryKey: getBucketPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#policy'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#policy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketPolicyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketPolicyMutationKey() {
  return [':Bucket#policy', '/:Bucket#policy', 'PUT'] as const
}

export function getPutBucketPolicyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#policy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#policy']['$put']>) {
      return parseResponse(client[':Bucket#policy'].$put(args, options))
    },
  })
}

export function createPutBucketPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#policy']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketPolicyMutationKey() {
  return [':Bucket#policy', '/:Bucket#policy', 'DELETE'] as const
}

export function getDeleteBucketPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policy']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#policy']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#policy']['$delete']>) {
      return parseResponse(client[':Bucket#policy'].$delete(args, options))
    },
  })
}

export function createDeleteBucketPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#policy']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#policy']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketReplicationQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#replication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#replication', '/:Bucket#replication', keyArgs] as const
}

export function getBucketReplicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#replication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#replication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#replication']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketReplicationQueryKey>
  >({
    queryKey: getBucketReplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#replication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketReplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#replication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#replication']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#replication']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketReplicationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketReplicationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketReplicationMutationKey() {
  return [':Bucket#replication', '/:Bucket#replication', 'PUT'] as const
}

export function getPutBucketReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#replication']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#replication']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketReplicationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#replication']['$put']>) {
      return parseResponse(client[':Bucket#replication'].$put(args, options))
    },
  })
}

export function createPutBucketReplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#replication']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#replication']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketReplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketReplicationMutationKey() {
  return [':Bucket#replication', '/:Bucket#replication', 'DELETE'] as const
}

export function getDeleteBucketReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#replication']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#replication']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketReplicationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#replication']['$delete']>) {
      return parseResponse(client[':Bucket#replication'].$delete(args, options))
    },
  })
}

export function createDeleteBucketReplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#replication']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#replication']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketReplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketTaggingQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#tagging']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#tagging', '/:Bucket#tagging', keyArgs] as const
}

export function getBucketTaggingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#tagging']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketTaggingQueryKey>
  >({
    queryKey: getBucketTaggingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#tagging'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketTagging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#tagging']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketTaggingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketTaggingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketTaggingMutationKey() {
  return [':Bucket#tagging', '/:Bucket#tagging', 'PUT'] as const
}

export function getPutBucketTaggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#tagging']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketTaggingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#tagging']['$put']>) {
      return parseResponse(client[':Bucket#tagging'].$put(args, options))
    },
  })
}

export function createPutBucketTagging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#tagging']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketTaggingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketTaggingMutationKey() {
  return [':Bucket#tagging', '/:Bucket#tagging', 'DELETE'] as const
}

export function getDeleteBucketTaggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#tagging']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketTaggingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#tagging']['$delete']>) {
      return parseResponse(client[':Bucket#tagging'].$delete(args, options))
    },
  })
}

export function createDeleteBucketTagging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#tagging']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#tagging']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketTaggingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketWebsiteQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#website']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#website', '/:Bucket#website', keyArgs] as const
}

export function getBucketWebsiteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#website']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketWebsiteQueryKey>
  >({
    queryKey: getBucketWebsiteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#website'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketWebsite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#website']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketWebsiteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketWebsiteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketWebsiteMutationKey() {
  return [':Bucket#website', '/:Bucket#website', 'PUT'] as const
}

export function getPutBucketWebsiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#website']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketWebsiteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#website']['$put']>) {
      return parseResponse(client[':Bucket#website'].$put(args, options))
    },
  })
}

export function createPutBucketWebsite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#website']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketWebsiteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketWebsiteMutationKey() {
  return [':Bucket#website', '/:Bucket#website', 'DELETE'] as const
}

export function getDeleteBucketWebsiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#website']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#website']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketWebsiteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#website']['$delete']>) {
      return parseResponse(client[':Bucket#website'].$delete(args, options))
    },
  })
}

export function createDeleteBucketWebsite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#website']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#website']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketWebsiteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketKeyQueryKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key', keyArgs] as const
}

export function getBucketKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketKeyQueryKey>
  >({
    queryKey: getBucketKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket'][':Key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket'][':Key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketKeyMutationKey() {
  return [':Bucket', '/:Bucket/:Key', 'PUT'] as const
}

export function getPutBucketKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket'][':Key']['$put']>) {
      return parseResponse(client[':Bucket'][':Key'].$put(args, options))
    },
  })
}

export function createPutBucketKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketKeyMutationKey() {
  return [':Bucket', '/:Bucket/:Key', 'DELETE'] as const
}

export function getDeleteBucketKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket'][':Key']['$delete']>) {
      return parseResponse(client[':Bucket'][':Key'].$delete(args, options))
    },
  })
}

export function createDeleteBucketKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHeadBucketKeyMutationKey() {
  return [':Bucket', '/:Bucket/:Key', 'HEAD'] as const
}

export function getHeadBucketKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$head']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadBucketKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket'][':Key']['$head']>) {
      return parseResponse(client[':Bucket'][':Key'].$head(args, options))
    },
  })
}

export function createHeadBucketKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key']['$head']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadBucketKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketKeyTaggingQueryKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#tagging', keyArgs] as const
}

export function getBucketKeyTaggingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketKeyTaggingQueryKey>
  >({
    queryKey: getBucketKeyTaggingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket'][':Key#tagging'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketKeyTagging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketKeyTaggingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketKeyTaggingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketKeyTaggingMutationKey() {
  return [':Bucket', '/:Bucket/:Key#tagging', 'PUT'] as const
}

export function getPutBucketKeyTaggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketKeyTaggingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$put']>) {
      return parseResponse(client[':Bucket'][':Key#tagging'].$put(args, options))
    },
  })
}

export function createPutBucketKeyTagging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketKeyTaggingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketKeyTaggingMutationKey() {
  return [':Bucket', '/:Bucket/:Key#tagging', 'DELETE'] as const
}

export function getDeleteBucketKeyTaggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketKeyTaggingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$delete']>,
    ) {
      return parseResponse(client[':Bucket'][':Key#tagging'].$delete(args, options))
    },
  })
}

export function createDeleteBucketKeyTagging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket'][':Key#tagging']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketKeyTaggingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBucketDeleteMutationKey() {
  return [':Bucket#delete', '/:Bucket#delete', 'POST'] as const
}

export function getPostBucketDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBucketDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#delete']['$post']>) {
      return parseResponse(client[':Bucket#delete'].$post(args, options))
    },
  })
}

export function createPostBucketDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketPublicAccessBlockQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#publicAccessBlock', '/:Bucket#publicAccessBlock', keyArgs] as const
}

export function getBucketPublicAccessBlockQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketPublicAccessBlockQueryKey>
  >({
    queryKey: getBucketPublicAccessBlockQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#publicAccessBlock'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketPublicAccessBlock<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketPublicAccessBlockQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketPublicAccessBlockQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBucketPublicAccessBlockMutationKey() {
  return [':Bucket#publicAccessBlock', '/:Bucket#publicAccessBlock', 'PUT'] as const
}

export function getPutBucketPublicAccessBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketPublicAccessBlockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$put']>) {
      return parseResponse(client[':Bucket#publicAccessBlock'].$put(args, options))
    },
  })
}

export function createPutBucketPublicAccessBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketPublicAccessBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBucketPublicAccessBlockMutationKey() {
  return [':Bucket#publicAccessBlock', '/:Bucket#publicAccessBlock', 'DELETE'] as const
}

export function getDeleteBucketPublicAccessBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketPublicAccessBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$delete']>,
    ) {
      return parseResponse(client[':Bucket#publicAccessBlock'].$delete(args, options))
    },
  })
}

export function createDeleteBucketPublicAccessBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':Bucket#publicAccessBlock']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketPublicAccessBlockMutationOptions<
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

export function getBucketAccelerateQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#accelerate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#accelerate', '/:Bucket#accelerate', keyArgs] as const
}

export function getBucketAccelerateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#accelerate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketAccelerateQueryKey>
  >({
    queryKey: getBucketAccelerateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#accelerate'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketAccelerate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#accelerate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketAccelerateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketAccelerateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketAccelerateMutationKey() {
  return [':Bucket#accelerate', '/:Bucket#accelerate', 'PUT'] as const
}

export function getPutBucketAccelerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#accelerate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketAccelerateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#accelerate']['$put']>) {
      return parseResponse(client[':Bucket#accelerate'].$put(args, options))
    },
  })
}

export function createPutBucketAccelerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#accelerate']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#accelerate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketAccelerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketAclQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#acl']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#acl', '/:Bucket#acl', keyArgs] as const
}

export function getBucketAclQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':Bucket#acl']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBucketAclQueryKey>
  >({
    queryKey: getBucketAclQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#acl'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketAcl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#acl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketAclQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketAclQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketAclMutationKey() {
  return [':Bucket#acl', '/:Bucket#acl', 'PUT'] as const
}

export function getPutBucketAclMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#acl']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketAclMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#acl']['$put']>) {
      return parseResponse(client[':Bucket#acl'].$put(args, options))
    },
  })
}

export function createPutBucketAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#acl']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#acl']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketAclMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketLifecycleDeprecatedQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#lifecycle&deprecated!', '/:Bucket#lifecycle&deprecated!', keyArgs] as const
}

export function getBucketLifecycleDeprecatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketLifecycleDeprecatedQueryKey>
  >({
    queryKey: getBucketLifecycleDeprecatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#lifecycle&deprecated!'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketLifecycleDeprecated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketLifecycleDeprecatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketLifecycleDeprecatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBucketLifecycleDeprecatedMutationKey() {
  return [':Bucket#lifecycle&deprecated!', '/:Bucket#lifecycle&deprecated!', 'PUT'] as const
}

export function getPutBucketLifecycleDeprecatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketLifecycleDeprecatedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$put']>,
    ) {
      return parseResponse(client[':Bucket#lifecycle&deprecated!'].$put(args, options))
    },
  })
}

export function createPutBucketLifecycleDeprecated<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#lifecycle&deprecated!']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketLifecycleDeprecatedMutationOptions<
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

export function getBucketLocationQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#location']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#location', '/:Bucket#location', keyArgs] as const
}

export function getBucketLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#location']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#location']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#location']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketLocationQueryKey>
  >({
    queryKey: getBucketLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#location'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#location']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#location']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#location']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketLocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketLocationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBucketLoggingQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#logging']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#logging', '/:Bucket#logging', keyArgs] as const
}

export function getBucketLoggingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#logging']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketLoggingQueryKey>
  >({
    queryKey: getBucketLoggingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#logging'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketLogging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#logging']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketLoggingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketLoggingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketLoggingMutationKey() {
  return [':Bucket#logging', '/:Bucket#logging', 'PUT'] as const
}

export function getPutBucketLoggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#logging']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketLoggingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#logging']['$put']>) {
      return parseResponse(client[':Bucket#logging'].$put(args, options))
    },
  })
}

export function createPutBucketLogging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#logging']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#logging']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketLoggingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketNotificationQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#notification']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#notification', '/:Bucket#notification', keyArgs] as const
}

export function getBucketNotificationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#notification']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#notification']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#notification']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketNotificationQueryKey>
  >({
    queryKey: getBucketNotificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#notification'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketNotification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#notification']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#notification']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#notification']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketNotificationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketNotificationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketNotificationMutationKey() {
  return [':Bucket#notification', '/:Bucket#notification', 'PUT'] as const
}

export function getPutBucketNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#notification']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#notification']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketNotificationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#notification']['$put']>) {
      return parseResponse(client[':Bucket#notification'].$put(args, options))
    },
  })
}

export function createPutBucketNotification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#notification']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#notification']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketNotificationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketNotificationDeprecatedQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#notification&deprecated!', '/:Bucket#notification&deprecated!', keyArgs] as const
}

export function getBucketNotificationDeprecatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketNotificationDeprecatedQueryKey>
  >({
    queryKey: getBucketNotificationDeprecatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#notification&deprecated!'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketNotificationDeprecated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketNotificationDeprecatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketNotificationDeprecatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBucketNotificationDeprecatedMutationKey() {
  return [':Bucket#notification&deprecated!', '/:Bucket#notification&deprecated!', 'PUT'] as const
}

export function getPutBucketNotificationDeprecatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketNotificationDeprecatedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$put']>,
    ) {
      return parseResponse(client[':Bucket#notification&deprecated!'].$put(args, options))
    },
  })
}

export function createPutBucketNotificationDeprecated<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#notification&deprecated!']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketNotificationDeprecatedMutationOptions<
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

export function getBucketPolicyStatusQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#policyStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#policyStatus', '/:Bucket#policyStatus', keyArgs] as const
}

export function getBucketPolicyStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policyStatus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#policyStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policyStatus']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketPolicyStatusQueryKey>
  >({
    queryKey: getBucketPolicyStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#policyStatus'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketPolicyStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#policyStatus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#policyStatus']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#policyStatus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketPolicyStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketPolicyStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBucketRequestPaymentQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#requestPayment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#requestPayment', '/:Bucket#requestPayment', keyArgs] as const
}

export function getBucketRequestPaymentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#requestPayment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketRequestPaymentQueryKey>
  >({
    queryKey: getBucketRequestPaymentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#requestPayment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketRequestPayment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#requestPayment']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketRequestPaymentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketRequestPaymentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBucketRequestPaymentMutationKey() {
  return [':Bucket#requestPayment', '/:Bucket#requestPayment', 'PUT'] as const
}

export function getPutBucketRequestPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#requestPayment']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketRequestPaymentMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#requestPayment']['$put']>) {
      return parseResponse(client[':Bucket#requestPayment'].$put(args, options))
    },
  })
}

export function createPutBucketRequestPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#requestPayment']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#requestPayment']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketRequestPaymentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketVersioningQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#versioning']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#versioning', '/:Bucket#versioning', keyArgs] as const
}

export function getBucketVersioningQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#versioning']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketVersioningQueryKey>
  >({
    queryKey: getBucketVersioningQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#versioning'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketVersioning<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#versioning']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketVersioningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketVersioningQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketVersioningMutationKey() {
  return [':Bucket#versioning', '/:Bucket#versioning', 'PUT'] as const
}

export function getPutBucketVersioningMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#versioning']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketVersioningMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#versioning']['$put']>) {
      return parseResponse(client[':Bucket#versioning'].$put(args, options))
    },
  })
}

export function createPutBucketVersioning<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versioning']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#versioning']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketVersioningMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketKeyAclQueryKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#acl', keyArgs] as const
}

export function getBucketKeyAclQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketKeyAclQueryKey>
  >({
    queryKey: getBucketKeyAclQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket'][':Key#acl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketKeyAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketKeyAclQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketKeyAclQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketKeyAclMutationKey() {
  return [':Bucket', '/:Bucket/:Key#acl', 'PUT'] as const
}

export function getPutBucketKeyAclMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketKeyAclMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$put']>) {
      return parseResponse(client[':Bucket'][':Key#acl'].$put(args, options))
    },
  })
}

export function createPutBucketKeyAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#acl']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketKeyAclMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketKeyAttributesXAmzObjectAttributesQueryKey(
  args: InferRequestType<
    (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#attributes&x-amz-object-attributes', keyArgs] as const
}

export function getBucketKeyAttributesXAmzObjectAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBucketKeyAttributesXAmzObjectAttributesQueryKey>
  >({
    queryKey: getBucketKeyAttributesXAmzObjectAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket'][':Key#attributes&x-amz-object-attributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketKeyAttributesXAmzObjectAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBucketKeyAttributesXAmzObjectAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketKeyAttributesXAmzObjectAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getBucketKeyLegalHoldQueryKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#legal-hold', keyArgs] as const
}

export function getBucketKeyLegalHoldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketKeyLegalHoldQueryKey>
  >({
    queryKey: getBucketKeyLegalHoldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket'][':Key#legal-hold'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketKeyLegalHold<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketKeyLegalHoldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketKeyLegalHoldQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketKeyLegalHoldMutationKey() {
  return [':Bucket', '/:Bucket/:Key#legal-hold', 'PUT'] as const
}

export function getPutBucketKeyLegalHoldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketKeyLegalHoldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$put']>,
    ) {
      return parseResponse(client[':Bucket'][':Key#legal-hold'].$put(args, options))
    },
  })
}

export function createPutBucketKeyLegalHold<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#legal-hold']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketKeyLegalHoldMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketObjectLockQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#object-lock']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#object-lock', '/:Bucket#object-lock', keyArgs] as const
}

export function getBucketObjectLockQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#object-lock']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketObjectLockQueryKey>
  >({
    queryKey: getBucketObjectLockQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#object-lock'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketObjectLock<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#object-lock']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketObjectLockQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketObjectLockQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketObjectLockMutationKey() {
  return [':Bucket#object-lock', '/:Bucket#object-lock', 'PUT'] as const
}

export function getPutBucketObjectLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket#object-lock']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketObjectLockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket#object-lock']['$put']>) {
      return parseResponse(client[':Bucket#object-lock'].$put(args, options))
    },
  })
}

export function createPutBucketObjectLock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#object-lock']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket#object-lock']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketObjectLockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketKeyRetentionQueryKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#retention', keyArgs] as const
}

export function getBucketKeyRetentionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketKeyRetentionQueryKey>
  >({
    queryKey: getBucketKeyRetentionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket'][':Key#retention'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketKeyRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketKeyRetentionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketKeyRetentionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBucketKeyRetentionMutationKey() {
  return [':Bucket', '/:Bucket/:Key#retention', 'PUT'] as const
}

export function getPutBucketKeyRetentionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketKeyRetentionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$put']>) {
      return parseResponse(client[':Bucket'][':Key#retention'].$put(args, options))
    },
  })
}

export function createPutBucketKeyRetention<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#retention']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketKeyRetentionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBucketKeyTorrentQueryKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#torrent']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket', '/:Bucket/:Key#torrent', keyArgs] as const
}

export function getBucketKeyTorrentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#torrent']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#torrent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#torrent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketKeyTorrentQueryKey>
  >({
    queryKey: getBucketKeyTorrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket'][':Key#torrent'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketKeyTorrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket'][':Key#torrent']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket'][':Key#torrent']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#torrent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketKeyTorrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketKeyTorrentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBucketAnalyticsQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#analytics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#analytics', '/:Bucket#analytics', keyArgs] as const
}

export function getBucketAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketAnalyticsQueryKey>
  >({
    queryKey: getBucketAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#analytics'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#analytics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#analytics']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketAnalyticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBucketIntelligentTieringQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#intelligent-tiering', '/:Bucket#intelligent-tiering', keyArgs] as const
}

export function getBucketIntelligentTieringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketIntelligentTieringQueryKey>
  >({
    queryKey: getBucketIntelligentTieringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#intelligent-tiering'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketIntelligentTiering<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#intelligent-tiering']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#intelligent-tiering']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketIntelligentTieringQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketIntelligentTieringQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBucketInventoryQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#inventory']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#inventory', '/:Bucket#inventory', keyArgs] as const
}

export function getBucketInventoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#inventory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketInventoryQueryKey>
  >({
    queryKey: getBucketInventoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#inventory'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketInventory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#inventory']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#inventory']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketInventoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketInventoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBucketMetricsQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#metrics', '/:Bucket#metrics', keyArgs] as const
}

export function getBucketMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketMetricsQueryKey>
  >({
    queryKey: getBucketMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#metrics'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#metrics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#metrics']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  const { header: _, ...keyArgs } = args
  return ['', '/', keyArgs] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBucketUploadsQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#uploads']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#uploads', '/:Bucket#uploads', keyArgs] as const
}

export function getBucketUploadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#uploads']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#uploads']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#uploads']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketUploadsQueryKey>
  >({
    queryKey: getBucketUploadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#uploads'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketUploads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#uploads']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#uploads']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#uploads']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketUploadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketUploadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBucketVersionsQueryKey(
  args: InferRequestType<(typeof client)[':Bucket#versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#versions', '/:Bucket#versions', keyArgs] as const
}

export function getBucketVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketVersionsQueryKey>
  >({
    queryKey: getBucketVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#versions'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBucketVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#versions']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketVersionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBucketListType2QueryKey(
  args: InferRequestType<(typeof client)[':Bucket#list-type=2']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Bucket#list-type=2', '/:Bucket#list-type=2', keyArgs] as const
}

export function getBucketListType2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#list-type=2']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':Bucket#list-type=2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#list-type=2']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketListType2QueryKey>
  >({
    queryKey: getBucketListType2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Bucket#list-type=2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBucketListType2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':Bucket#list-type=2']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Bucket#list-type=2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket#list-type=2']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketListType2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketListType2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBucketKeyRestoreMutationKey() {
  return [':Bucket', '/:Bucket/:Key#restore', 'POST'] as const
}

export function getPostBucketKeyRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBucketKeyRestoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Bucket'][':Key#restore']['$post']>) {
      return parseResponse(client[':Bucket'][':Key#restore'].$post(args, options))
    },
  })
}

export function createPostBucketKeyRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#restore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketKeyRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBucketKeySelectSelectType2MutationKey() {
  return [':Bucket', '/:Bucket/:Key#select&select-type=2', 'POST'] as const
}

export function getPostBucketKeySelectSelectType2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#select&select-type=2']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#select&select-type=2']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBucketKeySelectSelectType2MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket'][':Key#select&select-type=2']['$post']>,
    ) {
      return parseResponse(client[':Bucket'][':Key#select&select-type=2'].$post(args, options))
    },
  })
}

export function createPostBucketKeySelectSelectType2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#select&select-type=2']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#select&select-type=2']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketKeySelectSelectType2MutationOptions<
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

export function getPutBucketKeyPartNumberUploadIdMutationKey() {
  return [':Bucket', '/:Bucket/:Key#partNumber&uploadId', 'PUT'] as const
}

export function getPutBucketKeyPartNumberUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Bucket'][':Key#partNumber&uploadId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':Bucket'][':Key#partNumber&uploadId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBucketKeyPartNumberUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':Bucket'][':Key#partNumber&uploadId']['$put']>,
    ) {
      return parseResponse(client[':Bucket'][':Key#partNumber&uploadId'].$put(args, options))
    },
  })
}

export function createPutBucketKeyPartNumberUploadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':Bucket'][':Key#partNumber&uploadId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':Bucket'][':Key#partNumber&uploadId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketKeyPartNumberUploadIdMutationOptions<
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

export function getPutBucketKeyXAmzCopySourcePartNumberUploadIdMutationKey() {
  return [':Bucket', '/:Bucket/:Key#x-amz-copy-source&partNumber&uploadId', 'PUT'] as const
}

export function getPutBucketKeyXAmzCopySourcePartNumberUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBucketKeyXAmzCopySourcePartNumberUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId']['$put']
      >,
    ) {
      return parseResponse(
        client[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId'].$put(args, options),
      )
    },
  })
}

export function createPutBucketKeyXAmzCopySourcePartNumberUploadId<
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
                  (typeof client)[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBucketKeyXAmzCopySourcePartNumberUploadIdMutationOptions<
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

export function getPostWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenMutationKey() {
  return [
    'WriteGetObjectResponse#x-amz-request-route&x-amz-request-token',
    '/WriteGetObjectResponse#x-amz-request-route&x-amz-request-token',
    'POST',
  ] as const
}

export function getPostWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token']['$post']
      >,
    ) {
      return parseResponse(
        client['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostWriteGetObjectResponseXAmzRequestRouteXAmzRequestToken<
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
                  (typeof client)['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token']['$post']
        >,
        TOnMutateResult
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
      getPostWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenMutationOptions<
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
