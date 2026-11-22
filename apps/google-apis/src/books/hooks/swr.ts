import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBooksKey() {
  return ['books'] as const
}

export function getPostBooksV1CloudloadingAddBookKey() {
  return ['books', '/books/v1/cloudloading/addBook', 'POST'] as const
}

export function usePostBooksV1CloudloadingAddBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.cloudloading.addBook.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.cloudloading.addBook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1CloudloadingAddBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.books.v1.cloudloading.addBook.$post> },
      ) => parseResponse(client.books.v1.cloudloading.addBook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1CloudloadingDeleteBookKey() {
  return ['books', '/books/v1/cloudloading/deleteBook', 'POST'] as const
}

export function usePostBooksV1CloudloadingDeleteBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.cloudloading.deleteBook.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.cloudloading.deleteBook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1CloudloadingDeleteBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.books.v1.cloudloading.deleteBook.$post> },
      ) => parseResponse(client.books.v1.cloudloading.deleteBook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1CloudloadingUpdateBookKey() {
  return ['books', '/books/v1/cloudloading/updateBook', 'POST'] as const
}

export function usePostBooksV1CloudloadingUpdateBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.cloudloading.updateBook.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.cloudloading.updateBook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1CloudloadingUpdateBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.books.v1.cloudloading.updateBook.$post> },
      ) => parseResponse(client.books.v1.cloudloading.updateBook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBooksV1DictionaryListOfflineMetadataKey(
  args: InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>,
) {
  return ['books', '/books/v1/dictionary/listOfflineMetadata', args] as const
}

export function useGetBooksV1DictionaryListOfflineMetadata<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
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
        ? getGetBooksV1DictionaryListOfflineMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.dictionary.listOfflineMetadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1DictionaryListOfflineMetadata<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
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
        ? getGetBooksV1DictionaryListOfflineMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.dictionary.listOfflineMetadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1FamilysharingGetFamilyInfoKey(
  args: InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>,
) {
  return ['books', '/books/v1/familysharing/getFamilyInfo', args] as const
}

export function useGetBooksV1FamilysharingGetFamilyInfo<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
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
        ? getGetBooksV1FamilysharingGetFamilyInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.familysharing.getFamilyInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1FamilysharingGetFamilyInfo<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
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
        ? getGetBooksV1FamilysharingGetFamilyInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.familysharing.getFamilyInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBooksV1FamilysharingShareKey() {
  return ['books', '/books/v1/familysharing/share', 'POST'] as const
}

export function usePostBooksV1FamilysharingShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.familysharing.share.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.familysharing.share.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1FamilysharingShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.books.v1.familysharing.share.$post> },
      ) => parseResponse(client.books.v1.familysharing.share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1FamilysharingUnshareKey() {
  return ['books', '/books/v1/familysharing/unshare', 'POST'] as const
}

export function usePostBooksV1FamilysharingUnshare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.familysharing.unshare.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.familysharing.unshare.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1FamilysharingUnshareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.books.v1.familysharing.unshare.$post> },
      ) => parseResponse(client.books.v1.familysharing.unshare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBooksV1MyconfigGetUserSettingsKey(
  args: InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>,
) {
  return ['books', '/books/v1/myconfig/getUserSettings', args] as const
}

export function useGetBooksV1MyconfigGetUserSettings<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
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
        ? getGetBooksV1MyconfigGetUserSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.myconfig.getUserSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1MyconfigGetUserSettings<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
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
        ? getGetBooksV1MyconfigGetUserSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.myconfig.getUserSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBooksV1MyconfigReleaseDownloadAccessKey() {
  return ['books', '/books/v1/myconfig/releaseDownloadAccess', 'POST'] as const
}

export function usePostBooksV1MyconfigReleaseDownloadAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.myconfig.releaseDownloadAccess.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.myconfig.releaseDownloadAccess.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MyconfigReleaseDownloadAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.books.v1.myconfig.releaseDownloadAccess.$post> },
      ) => parseResponse(client.books.v1.myconfig.releaseDownloadAccess.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1MyconfigRequestAccessKey() {
  return ['books', '/books/v1/myconfig/requestAccess', 'POST'] as const
}

export function usePostBooksV1MyconfigRequestAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.myconfig.requestAccess.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.myconfig.requestAccess.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MyconfigRequestAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.books.v1.myconfig.requestAccess.$post> },
      ) => parseResponse(client.books.v1.myconfig.requestAccess.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1MyconfigSyncVolumeLicensesKey() {
  return ['books', '/books/v1/myconfig/syncVolumeLicenses', 'POST'] as const
}

export function usePostBooksV1MyconfigSyncVolumeLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.myconfig.syncVolumeLicenses.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.myconfig.syncVolumeLicenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MyconfigSyncVolumeLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.books.v1.myconfig.syncVolumeLicenses.$post> },
      ) => parseResponse(client.books.v1.myconfig.syncVolumeLicenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1MyconfigUpdateUserSettingsKey() {
  return ['books', '/books/v1/myconfig/updateUserSettings', 'POST'] as const
}

export function usePostBooksV1MyconfigUpdateUserSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.myconfig.updateUserSettings.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.myconfig.updateUserSettings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MyconfigUpdateUserSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.books.v1.myconfig.updateUserSettings.$post> },
      ) => parseResponse(client.books.v1.myconfig.updateUserSettings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBooksV1MylibraryAnnotationsKey(
  args: InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>,
) {
  return ['books', '/books/v1/mylibrary/annotations', args] as const
}

export function useGetBooksV1MylibraryAnnotations<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>
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
        ? getGetBooksV1MylibraryAnnotationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.mylibrary.annotations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1MylibraryAnnotations<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>
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
        ? getGetBooksV1MylibraryAnnotationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.mylibrary.annotations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBooksV1MylibraryAnnotationsKey() {
  return ['books', '/books/v1/mylibrary/annotations', 'POST'] as const
}

export function usePostBooksV1MylibraryAnnotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.mylibrary.annotations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MylibraryAnnotationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.books.v1.mylibrary.annotations.$post> },
      ) => parseResponse(client.books.v1.mylibrary.annotations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1MylibraryAnnotationsSummaryKey() {
  return ['books', '/books/v1/mylibrary/annotations/summary', 'POST'] as const
}

export function usePostBooksV1MylibraryAnnotationsSummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.summary.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.mylibrary.annotations.summary.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MylibraryAnnotationsSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.books.v1.mylibrary.annotations.summary.$post> },
      ) => parseResponse(client.books.v1.mylibrary.annotations.summary.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBooksV1MylibraryAnnotationsAnnotationIdKey() {
  return ['books', '/books/v1/mylibrary/annotations/:annotationId', 'PUT'] as const
}

export function usePutBooksV1MylibraryAnnotationsAnnotationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.books.v1.mylibrary.annotations)[':annotationId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.books.v1.mylibrary.annotations)[':annotationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBooksV1MylibraryAnnotationsAnnotationIdKey()
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
            (typeof client.books.v1.mylibrary.annotations)[':annotationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.books.v1.mylibrary.annotations[':annotationId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBooksV1MylibraryAnnotationsAnnotationIdKey() {
  return ['books', '/books/v1/mylibrary/annotations/:annotationId', 'DELETE'] as const
}

export function useDeleteBooksV1MylibraryAnnotationsAnnotationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.books.v1.mylibrary.annotations)[':annotationId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.books.v1.mylibrary.annotations)[':annotationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBooksV1MylibraryAnnotationsAnnotationIdKey()
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
            (typeof client.books.v1.mylibrary.annotations)[':annotationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.books.v1.mylibrary.annotations[':annotationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBooksV1MylibraryBookshelvesKey(
  args: InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>,
) {
  return ['books', '/books/v1/mylibrary/bookshelves', args] as const
}

export function useGetBooksV1MylibraryBookshelves<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>
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
        ? getGetBooksV1MylibraryBookshelvesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.mylibrary.bookshelves.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1MylibraryBookshelves<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>
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
        ? getGetBooksV1MylibraryBookshelvesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.mylibrary.bookshelves.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1MylibraryBookshelvesShelfKey(
  args: InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>,
) {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf', args] as const
}

export function useGetBooksV1MylibraryBookshelvesShelf<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>>
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
        ? getGetBooksV1MylibraryBookshelvesShelfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.mylibrary.bookshelves[':shelf'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1MylibraryBookshelvesShelf<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>>
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
        ? getGetBooksV1MylibraryBookshelvesShelfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.mylibrary.bookshelves[':shelf'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBooksV1MylibraryBookshelvesShelfAddVolumeKey() {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/addVolume', 'POST'] as const
}

export function usePostBooksV1MylibraryBookshelvesShelfAddVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['addVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['addVolume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MylibraryBookshelvesShelfAddVolumeKey()
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
            (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['addVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.books.v1.mylibrary.bookshelves[':shelf'].addVolume.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1MylibraryBookshelvesShelfClearVolumesKey() {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/clearVolumes', 'POST'] as const
}

export function usePostBooksV1MylibraryBookshelvesShelfClearVolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['clearVolumes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['clearVolumes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MylibraryBookshelvesShelfClearVolumesKey()
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
            (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['clearVolumes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.books.v1.mylibrary.bookshelves[':shelf'].clearVolumes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1MylibraryBookshelvesShelfMoveVolumeKey() {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/moveVolume', 'POST'] as const
}

export function usePostBooksV1MylibraryBookshelvesShelfMoveVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['moveVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['moveVolume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MylibraryBookshelvesShelfMoveVolumeKey()
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
            (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['moveVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.books.v1.mylibrary.bookshelves[':shelf'].moveVolume.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1MylibraryBookshelvesShelfRemoveVolumeKey() {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/removeVolume', 'POST'] as const
}

export function usePostBooksV1MylibraryBookshelvesShelfRemoveVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['removeVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['removeVolume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MylibraryBookshelvesShelfRemoveVolumeKey()
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
            (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['removeVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.books.v1.mylibrary.bookshelves[':shelf'].removeVolume.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBooksV1MylibraryBookshelvesShelfVolumesKey(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
  >,
) {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/volumes', args] as const
}

export function useGetBooksV1MylibraryBookshelvesShelfVolumes<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
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
        ? getGetBooksV1MylibraryBookshelvesShelfVolumesKey(args)
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
                (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
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
          client.books.v1.mylibrary.bookshelves[':shelf'].volumes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1MylibraryBookshelvesShelfVolumes<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
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
        ? getGetBooksV1MylibraryBookshelvesShelfVolumesKey(args)
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
                (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
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
          client.books.v1.mylibrary.bookshelves[':shelf'].volumes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1MylibraryReadingpositionsVolumeIdKey(
  args: InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>,
) {
  return ['books', '/books/v1/mylibrary/readingpositions/:volumeId', args] as const
}

export function useGetBooksV1MylibraryReadingpositionsVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
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
        ? getGetBooksV1MylibraryReadingpositionsVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.books.v1.mylibrary.readingpositions[':volumeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1MylibraryReadingpositionsVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
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
        ? getGetBooksV1MylibraryReadingpositionsVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.books.v1.mylibrary.readingpositions[':volumeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBooksV1MylibraryReadingpositionsVolumeIdSetPositionKey() {
  return ['books', '/books/v1/mylibrary/readingpositions/:volumeId/setPosition', 'POST'] as const
}

export function usePostBooksV1MylibraryReadingpositionsVolumeIdSetPosition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['setPosition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['setPosition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1MylibraryReadingpositionsVolumeIdSetPositionKey()
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
            (typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['setPosition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.books.v1.mylibrary.readingpositions[':volumeId'].setPosition.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBooksV1NotificationGetKey(
  args: InferRequestType<typeof client.books.v1.notification.get.$get>,
) {
  return ['books', '/books/v1/notification/get', args] as const
}

export function useGetBooksV1NotificationGet<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.notification.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
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
        ? getGetBooksV1NotificationGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.notification.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1NotificationGet<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.notification.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
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
        ? getGetBooksV1NotificationGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.notification.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1OnboardingListCategoriesKey(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>,
) {
  return ['books', '/books/v1/onboarding/listCategories', args] as const
}

export function useGetBooksV1OnboardingListCategories<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
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
        ? getGetBooksV1OnboardingListCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.onboarding.listCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1OnboardingListCategories<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
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
        ? getGetBooksV1OnboardingListCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.onboarding.listCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1OnboardingListCategoryVolumesKey(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>,
) {
  return ['books', '/books/v1/onboarding/listCategoryVolumes', args] as const
}

export function useGetBooksV1OnboardingListCategoryVolumes<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
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
        ? getGetBooksV1OnboardingListCategoryVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.onboarding.listCategoryVolumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1OnboardingListCategoryVolumes<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
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
        ? getGetBooksV1OnboardingListCategoryVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.onboarding.listCategoryVolumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1PersonalizedstreamGetKey(
  args: InferRequestType<typeof client.books.v1.personalizedstream.get.$get>,
) {
  return ['books', '/books/v1/personalizedstream/get', args] as const
}

export function useGetBooksV1PersonalizedstreamGet<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.personalizedstream.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>
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
        ? getGetBooksV1PersonalizedstreamGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.personalizedstream.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1PersonalizedstreamGet<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.personalizedstream.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>
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
        ? getGetBooksV1PersonalizedstreamGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.personalizedstream.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBooksV1PromoofferAcceptKey() {
  return ['books', '/books/v1/promooffer/accept', 'POST'] as const
}

export function usePostBooksV1PromoofferAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.accept.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.promooffer.accept.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1PromoofferAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.books.v1.promooffer.accept.$post> },
      ) => parseResponse(client.books.v1.promooffer.accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBooksV1PromoofferDismissKey() {
  return ['books', '/books/v1/promooffer/dismiss', 'POST'] as const
}

export function usePostBooksV1PromoofferDismiss<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.dismiss.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.promooffer.dismiss.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1PromoofferDismissKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.books.v1.promooffer.dismiss.$post> },
      ) => parseResponse(client.books.v1.promooffer.dismiss.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBooksV1PromoofferGetKey(
  args: InferRequestType<typeof client.books.v1.promooffer.get.$get>,
) {
  return ['books', '/books/v1/promooffer/get', args] as const
}

export function useGetBooksV1PromoofferGet<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.promooffer.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
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
        ? getGetBooksV1PromoofferGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.promooffer.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1PromoofferGet<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.promooffer.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
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
        ? getGetBooksV1PromoofferGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.promooffer.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1SeriesGetKey(
  args: InferRequestType<typeof client.books.v1.series.get.$get>,
) {
  return ['books', '/books/v1/series/get', args] as const
}

export function useGetBooksV1SeriesGet<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.series.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>
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
        ? getGetBooksV1SeriesGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.series.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1SeriesGet<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.series.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>
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
        ? getGetBooksV1SeriesGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.series.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1SeriesMembershipGetKey(
  args: InferRequestType<typeof client.books.v1.series.membership.get.$get>,
) {
  return ['books', '/books/v1/series/membership/get', args] as const
}

export function useGetBooksV1SeriesMembershipGet<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.series.membership.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>
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
        ? getGetBooksV1SeriesMembershipGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.series.membership.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1SeriesMembershipGet<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.series.membership.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>
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
        ? getGetBooksV1SeriesMembershipGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.series.membership.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1UsersUserIdBookshelvesKey(
  args: InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>,
) {
  return ['books', '/books/v1/users/:userId/bookshelves', args] as const
}

export function useGetBooksV1UsersUserIdBookshelves<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>>
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
        ? getGetBooksV1UsersUserIdBookshelvesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.users[':userId'].bookshelves.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1UsersUserIdBookshelves<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>>
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
        ? getGetBooksV1UsersUserIdBookshelvesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.users[':userId'].bookshelves.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1UsersUserIdBookshelvesShelfKey(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']
  >,
) {
  return ['books', '/books/v1/users/:userId/bookshelves/:shelf', args] as const
}

export function useGetBooksV1UsersUserIdBookshelvesShelf<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
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
        ? getGetBooksV1UsersUserIdBookshelvesShelfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.books.v1.users[':userId'].bookshelves[':shelf'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1UsersUserIdBookshelvesShelf<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
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
        ? getGetBooksV1UsersUserIdBookshelvesShelfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.books.v1.users[':userId'].bookshelves[':shelf'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1UsersUserIdBookshelvesShelfVolumesKey(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
  >,
) {
  return ['books', '/books/v1/users/:userId/bookshelves/:shelf/volumes', args] as const
}

export function useGetBooksV1UsersUserIdBookshelvesShelfVolumes<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
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
        ? getGetBooksV1UsersUserIdBookshelvesShelfVolumesKey(args)
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
                (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
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
          client.books.v1.users[':userId'].bookshelves[':shelf'].volumes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1UsersUserIdBookshelvesShelfVolumes<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
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
        ? getGetBooksV1UsersUserIdBookshelvesShelfVolumesKey(args)
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
                (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
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
          client.books.v1.users[':userId'].bookshelves[':shelf'].volumes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesKey(
  args: InferRequestType<typeof client.books.v1.volumes.$get>,
) {
  return ['books', '/books/v1/volumes', args] as const
}

export function useGetBooksV1Volumes<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBooksV1VolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1Volumes<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBooksV1VolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesMybooksKey(
  args: InferRequestType<typeof client.books.v1.volumes.mybooks.$get>,
) {
  return ['books', '/books/v1/volumes/mybooks', args] as const
}

export function useGetBooksV1VolumesMybooks<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.volumes.mybooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
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
        ? getGetBooksV1VolumesMybooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.volumes.mybooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesMybooks<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.volumes.mybooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
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
        ? getGetBooksV1VolumesMybooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.volumes.mybooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesRecommendedKey(
  args: InferRequestType<typeof client.books.v1.volumes.recommended.$get>,
) {
  return ['books', '/books/v1/volumes/recommended', args] as const
}

export function useGetBooksV1VolumesRecommended<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.volumes.recommended.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>>
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
        ? getGetBooksV1VolumesRecommendedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.volumes.recommended.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesRecommended<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.volumes.recommended.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>>
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
        ? getGetBooksV1VolumesRecommendedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.volumes.recommended.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBooksV1VolumesRecommendedRateKey() {
  return ['books', '/books/v1/volumes/recommended/rate', 'POST'] as const
}

export function usePostBooksV1VolumesRecommendedRate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.volumes.recommended.rate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.books.v1.volumes.recommended.rate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBooksV1VolumesRecommendedRateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.books.v1.volumes.recommended.rate.$post> },
      ) => parseResponse(client.books.v1.volumes.recommended.rate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBooksV1VolumesUseruploadedKey(
  args: InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>,
) {
  return ['books', '/books/v1/volumes/useruploaded', args] as const
}

export function useGetBooksV1VolumesUseruploaded<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>
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
        ? getGetBooksV1VolumesUseruploadedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.volumes.useruploaded.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesUseruploaded<TError = unknown>(
  args: InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>
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
        ? getGetBooksV1VolumesUseruploadedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.volumes.useruploaded.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesVolumeIdKey(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>,
) {
  return ['books', '/books/v1/volumes/:volumeId', args] as const
}

export function useGetBooksV1VolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
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
        ? getGetBooksV1VolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.volumes[':volumeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
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
        ? getGetBooksV1VolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.books.v1.volumes[':volumeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesVolumeIdAssociatedKey(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>,
) {
  return ['books', '/books/v1/volumes/:volumeId/associated', args] as const
}

export function useGetBooksV1VolumesVolumeIdAssociated<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>>
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
        ? getGetBooksV1VolumesVolumeIdAssociatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.volumes[':volumeId'].associated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesVolumeIdAssociated<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>>
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
        ? getGetBooksV1VolumesVolumeIdAssociatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.volumes[':volumeId'].associated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesVolumeIdLayersLayerIdKey(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/layers/:layerId', args] as const
}

export function useGetBooksV1VolumesVolumeIdLayersLayerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
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
        ? getGetBooksV1VolumesVolumeIdLayersLayerIdKey(args)
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
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
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
          client.books.v1.volumes[':volumeId'].layers[':layerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesVolumeIdLayersLayerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
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
        ? getGetBooksV1VolumesVolumeIdLayersLayerIdKey(args)
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
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
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
          client.books.v1.volumes[':volumeId'].layers[':layerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdKey(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
  >,
) {
  return [
    'books',
    '/books/v1/volumes/:volumeId/layers/:layerId/annotations/:annotationId',
    args,
  ] as const
}

export function useGetBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
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
        ? getGetBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdKey(args)
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
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
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
          client.books.v1.volumes[':volumeId'].layers[':layerId'].annotations[':annotationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
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
        ? getGetBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdKey(args)
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
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
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
          client.books.v1.volumes[':volumeId'].layers[':layerId'].annotations[':annotationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesVolumeIdLayersLayerIdDataKey(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/layers/:layerId/data', args] as const
}

export function useGetBooksV1VolumesVolumeIdLayersLayerIdData<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
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
        ? getGetBooksV1VolumesVolumeIdLayersLayerIdDataKey(args)
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
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
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
          client.books.v1.volumes[':volumeId'].layers[':layerId'].data.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesVolumeIdLayersLayerIdData<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
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
        ? getGetBooksV1VolumesVolumeIdLayersLayerIdDataKey(args)
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
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
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
          client.books.v1.volumes[':volumeId'].layers[':layerId'].data.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdKey(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
  >,
) {
  return [
    'books',
    '/books/v1/volumes/:volumeId/layers/:layerId/data/:annotationDataId',
    args,
  ] as const
}

export function useGetBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataId<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
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
        ? getGetBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdKey(args)
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
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
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
          client.books.v1.volumes[':volumeId'].layers[':layerId'].data[':annotationDataId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
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
        ? getGetBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdKey(args)
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
                (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
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
          client.books.v1.volumes[':volumeId'].layers[':layerId'].data[':annotationDataId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesVolumeIdLayersummaryKey(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>,
) {
  return ['books', '/books/v1/volumes/:volumeId/layersummary', args] as const
}

export function useGetBooksV1VolumesVolumeIdLayersummary<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>
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
        ? getGetBooksV1VolumesVolumeIdLayersummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.volumes[':volumeId'].layersummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesVolumeIdLayersummary<TError = unknown>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>
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
        ? getGetBooksV1VolumesVolumeIdLayersummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.books.v1.volumes[':volumeId'].layersummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBooksV1VolumesVolumeIdLayersummarySummaryIdKey(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/layersummary/:summaryId', args] as const
}

export function useGetBooksV1VolumesVolumeIdLayersummarySummaryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
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
        ? getGetBooksV1VolumesVolumeIdLayersummarySummaryIdKey(args)
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
                (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
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
          client.books.v1.volumes[':volumeId'].layersummary[':summaryId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBooksV1VolumesVolumeIdLayersummarySummaryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
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
        ? getGetBooksV1VolumesVolumeIdLayersummarySummaryIdKey(args)
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
                (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
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
          client.books.v1.volumes[':volumeId'].layersummary[':summaryId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
