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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1PhotoMutationKey() {
  return ['v1', '/v1/photo', 'POST'] as const
}

export function getPostV1PhotoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photo.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.photo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PhotoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.photo.$post>) {
      return parseResponse(client.v1.photo.$post(args, options))
    },
  })
}

export function createPostV1Photo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photo.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.photo.$post>,
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
    const mutationDefaults = getPostV1PhotoMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1PhotoIdMutationKey() {
  return ['v1', '/v1/photo/:id', 'PUT'] as const
}

export function getPutV1PhotoIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1.photo)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PhotoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.photo)[':id']['$put']>) {
      return parseResponse(client.v1.photo[':id'].$put(args, options))
    },
  })
}

export function createPutV1PhotoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.photo)[':id']['$put']>,
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
    const mutationDefaults = getPutV1PhotoIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PhotoPhotoIdQueryKey(
  args: InferRequestType<(typeof client.v1.photo)[':photoId']['$get']>,
) {
  return ['v1', '/v1/photo/:photoId', args] as const
}

export function getV1PhotoPhotoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.photo)[':photoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PhotoPhotoIdQueryKey>
  >({
    queryKey: getV1PhotoPhotoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.photo[':photoId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PhotoPhotoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.photo)[':photoId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PhotoPhotoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PhotoPhotoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1PhotoPhotoIdMutationKey() {
  return ['v1', '/v1/photo/:photoId', 'DELETE'] as const
}

export function getDeleteV1PhotoPhotoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.photo)[':photoId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PhotoPhotoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.photo)[':photoId']['$delete']>) {
      return parseResponse(client.v1.photo[':photoId'].$delete(args, options))
    },
  })
}

export function createDeleteV1PhotoPhotoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.photo)[':photoId']['$delete']>,
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
    const mutationDefaults = getDeleteV1PhotoPhotoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PhotoStartUploadMutationKey() {
  return ['v1', '/v1/photo:startUpload', 'POST'] as const
}

export function getPostV1PhotoStartUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photo:startUpload']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['photo:startUpload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PhotoStartUploadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['photo:startUpload']['$post']>) {
      return parseResponse(client.v1['photo:startUpload'].$post(args, options))
    },
  })
}

export function createPostV1PhotoStartUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['photo:startUpload']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['photo:startUpload']['$post']>,
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
    const mutationDefaults = getPostV1PhotoStartUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PhotoSequenceMutationKey() {
  return ['v1', '/v1/photoSequence', 'POST'] as const
}

export function getPostV1PhotoSequenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequence.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.photoSequence.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PhotoSequenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.photoSequence.$post>) {
      return parseResponse(client.v1.photoSequence.$post(args, options))
    },
  })
}

export function createPostV1PhotoSequence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequence.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.photoSequence.$post>,
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
    const mutationDefaults = getPostV1PhotoSequenceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PhotoSequenceSequenceIdQueryKey(
  args: InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>,
) {
  return ['v1', '/v1/photoSequence/:sequenceId', args] as const
}

export function getV1PhotoSequenceSequenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PhotoSequenceSequenceIdQueryKey>
  >({
    queryKey: getV1PhotoSequenceSequenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.photoSequence[':sequenceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PhotoSequenceSequenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PhotoSequenceSequenceIdQueryKey>
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
      ...getV1PhotoSequenceSequenceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1PhotoSequenceSequenceIdMutationKey() {
  return ['v1', '/v1/photoSequence/:sequenceId', 'DELETE'] as const
}

export function getDeleteV1PhotoSequenceSequenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PhotoSequenceSequenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$delete']>,
    ) {
      return parseResponse(client.v1.photoSequence[':sequenceId'].$delete(args, options))
    },
  })
}

export function createDeleteV1PhotoSequenceSequenceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$delete']>,
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
    const mutationDefaults = getDeleteV1PhotoSequenceSequenceIdMutationOptions<
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

export function getPostV1PhotoSequenceStartUploadMutationKey() {
  return ['v1', '/v1/photoSequence:startUpload', 'POST'] as const
}

export function getPostV1PhotoSequenceStartUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['photoSequence:startUpload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['photoSequence:startUpload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PhotoSequenceStartUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['photoSequence:startUpload']['$post']>,
    ) {
      return parseResponse(client.v1['photoSequence:startUpload'].$post(args, options))
    },
  })
}

export function createPostV1PhotoSequenceStartUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['photoSequence:startUpload']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['photoSequence:startUpload']['$post']>,
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
    const mutationDefaults = getPostV1PhotoSequenceStartUploadMutationOptions<
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

export function getV1PhotoSequencesQueryKey(
  args: InferRequestType<typeof client.v1.photoSequences.$get>,
) {
  return ['v1', '/v1/photoSequences', args] as const
}

export function getV1PhotoSequencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequences.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.photoSequences.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PhotoSequencesQueryKey>
  >({
    queryKey: getV1PhotoSequencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.photoSequences.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PhotoSequences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.photoSequences.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PhotoSequencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PhotoSequencesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1PhotosQueryKey(args: InferRequestType<typeof client.v1.photos.$get>) {
  return ['v1', '/v1/photos', args] as const
}

export function getV1PhotosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.photos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PhotosQueryKey>
  >({
    queryKey: getV1PhotosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.photos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Photos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.photos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PhotosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PhotosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1PhotosBatchDeleteMutationKey() {
  return ['v1', '/v1/photos:batchDelete', 'POST'] as const
}

export function getPostV1PhotosBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchDelete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['photos:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PhotosBatchDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['photos:batchDelete']['$post']>) {
      return parseResponse(client.v1['photos:batchDelete'].$post(args, options))
    },
  })
}

export function createPostV1PhotosBatchDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['photos:batchDelete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['photos:batchDelete']['$post']>,
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
    const mutationDefaults = getPostV1PhotosBatchDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PhotosBatchGetQueryKey(
  args: InferRequestType<(typeof client.v1)['photos:batchGet']['$get']>,
) {
  return ['v1', '/v1/photos:batchGet', args] as const
}

export function getV1PhotosBatchGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchGet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['photos:batchGet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchGet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PhotosBatchGetQueryKey>
  >({
    queryKey: getV1PhotosBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['photos:batchGet'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PhotosBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchGet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['photos:batchGet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchGet']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PhotosBatchGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PhotosBatchGetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1PhotosBatchUpdateMutationKey() {
  return ['v1', '/v1/photos:batchUpdate', 'POST'] as const
}

export function getPostV1PhotosBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchUpdate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['photos:batchUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PhotosBatchUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['photos:batchUpdate']['$post']>) {
      return parseResponse(client.v1['photos:batchUpdate'].$post(args, options))
    },
  })
}

export function createPostV1PhotosBatchUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['photos:batchUpdate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['photos:batchUpdate']['$post']>,
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
    const mutationDefaults = getPostV1PhotosBatchUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
