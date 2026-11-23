import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1PhotoKey() {
  return ['v1', '/v1/photo', 'POST'] as const
}

export function usePostV1Photo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photo.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.photo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PhotoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.photo.$post> }) =>
        parseResponse(client.v1.photo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PhotoIdKey() {
  return ['v1', '/v1/photo/:id', 'PUT'] as const
}

export function usePutV1PhotoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.photo)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PhotoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v1.photo)[':id']['$put']> }) =>
        parseResponse(client.v1.photo[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PhotoPhotoIdKey(
  args: InferRequestType<(typeof client.v1.photo)[':photoId']['$get']>,
) {
  return ['v1', '/v1/photo/:photoId', args] as const
}

export function useGetV1PhotoPhotoId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.photo)[':photoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1PhotoPhotoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.photo[':photoId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PhotoPhotoId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.photo)[':photoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1PhotoPhotoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.photo[':photoId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PhotoPhotoIdKey() {
  return ['v1', '/v1/photo/:photoId', 'DELETE'] as const
}

export function useDeleteV1PhotoPhotoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.photo)[':photoId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.photo)[':photoId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PhotoPhotoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.photo)[':photoId']['$delete']> },
      ) => parseResponse(client.v1.photo[':photoId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PhotoStartUploadKey() {
  return ['v1', '/v1/photo:startUpload', 'POST'] as const
}

export function usePostV1PhotoStartUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photo:startUpload']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['photo:startUpload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PhotoStartUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['photo:startUpload']['$post']> },
      ) => parseResponse(client.v1['photo:startUpload'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PhotoSequenceKey() {
  return ['v1', '/v1/photoSequence', 'POST'] as const
}

export function usePostV1PhotoSequence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequence.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.photoSequence.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PhotoSequenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.photoSequence.$post> }) =>
        parseResponse(client.v1.photoSequence.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PhotoSequenceSequenceIdKey(
  args: InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>,
) {
  return ['v1', '/v1/photoSequence/:sequenceId', args] as const
}

export function useGetV1PhotoSequenceSequenceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>>
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
        ? getGetV1PhotoSequenceSequenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.photoSequence[':sequenceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PhotoSequenceSequenceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>>
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
        ? getGetV1PhotoSequenceSequenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.photoSequence[':sequenceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PhotoSequenceSequenceIdKey() {
  return ['v1', '/v1/photoSequence/:sequenceId', 'DELETE'] as const
}

export function useDeleteV1PhotoSequenceSequenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.photoSequence)[':sequenceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PhotoSequenceSequenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$delete']> },
      ) => parseResponse(client.v1.photoSequence[':sequenceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PhotoSequenceStartUploadKey() {
  return ['v1', '/v1/photoSequence:startUpload', 'POST'] as const
}

export function usePostV1PhotoSequenceStartUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['photoSequence:startUpload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['photoSequence:startUpload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PhotoSequenceStartUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['photoSequence:startUpload']['$post']> },
      ) => parseResponse(client.v1['photoSequence:startUpload'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PhotoSequencesKey(
  args: InferRequestType<typeof client.v1.photoSequences.$get>,
) {
  return ['v1', '/v1/photoSequences', args] as const
}

export function useGetV1PhotoSequences<TError = unknown>(
  args: InferRequestType<typeof client.v1.photoSequences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequences.$get>>>>
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
        ? getGetV1PhotoSequencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.photoSequences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PhotoSequences<TError = unknown>(
  args: InferRequestType<typeof client.v1.photoSequences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequences.$get>>>>
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
        ? getGetV1PhotoSequencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photoSequences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.photoSequences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PhotosKey(args: InferRequestType<typeof client.v1.photos.$get>) {
  return ['v1', '/v1/photos', args] as const
}

export function useGetV1Photos<TError = unknown>(
  args: InferRequestType<typeof client.v1.photos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PhotosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.photos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Photos<TError = unknown>(
  args: InferRequestType<typeof client.v1.photos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PhotosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.photos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.photos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PhotosBatchDeleteKey() {
  return ['v1', '/v1/photos:batchDelete', 'POST'] as const
}

export function usePostV1PhotosBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchDelete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['photos:batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PhotosBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['photos:batchDelete']['$post']> },
      ) => parseResponse(client.v1['photos:batchDelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PhotosBatchGetKey(
  args: InferRequestType<(typeof client.v1)['photos:batchGet']['$get']>,
) {
  return ['v1', '/v1/photos:batchGet', args] as const
}

export function useGetV1PhotosBatchGet<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['photos:batchGet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchGet']['$get']>>>
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
        ? getGetV1PhotosBatchGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchGet']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['photos:batchGet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PhotosBatchGet<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['photos:batchGet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchGet']['$get']>>>
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
        ? getGetV1PhotosBatchGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchGet']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['photos:batchGet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PhotosBatchUpdateKey() {
  return ['v1', '/v1/photos:batchUpdate', 'POST'] as const
}

export function usePostV1PhotosBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['photos:batchUpdate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['photos:batchUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PhotosBatchUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['photos:batchUpdate']['$post']> },
      ) => parseResponse(client.v1['photos:batchUpdate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
