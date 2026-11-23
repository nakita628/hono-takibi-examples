import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBooksKey() {
  return ['books'] as const
}

export function getPostBooksV1CloudloadingAddBookMutationKey() {
  return ['books', '/books/v1/cloudloading/addBook', 'POST'] as const
}

export function getPostBooksV1CloudloadingAddBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.cloudloading.addBook.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.cloudloading.addBook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1CloudloadingAddBookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.books.v1.cloudloading.addBook.$post>) {
      return parseResponse(client.books.v1.cloudloading.addBook.$post(args, options))
    },
  })
}

export function usePostBooksV1CloudloadingAddBook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.cloudloading.addBook.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.cloudloading.addBook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1CloudloadingAddBookMutationOptions<
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

export function getPostBooksV1CloudloadingDeleteBookMutationKey() {
  return ['books', '/books/v1/cloudloading/deleteBook', 'POST'] as const
}

export function getPostBooksV1CloudloadingDeleteBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.cloudloading.deleteBook.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.cloudloading.deleteBook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1CloudloadingDeleteBookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.books.v1.cloudloading.deleteBook.$post>) {
      return parseResponse(client.books.v1.cloudloading.deleteBook.$post(args, options))
    },
  })
}

export function usePostBooksV1CloudloadingDeleteBook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.cloudloading.deleteBook.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.cloudloading.deleteBook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1CloudloadingDeleteBookMutationOptions<
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

export function getPostBooksV1CloudloadingUpdateBookMutationKey() {
  return ['books', '/books/v1/cloudloading/updateBook', 'POST'] as const
}

export function getPostBooksV1CloudloadingUpdateBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.cloudloading.updateBook.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.cloudloading.updateBook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1CloudloadingUpdateBookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.books.v1.cloudloading.updateBook.$post>) {
      return parseResponse(client.books.v1.cloudloading.updateBook.$post(args, options))
    },
  })
}

export function usePostBooksV1CloudloadingUpdateBook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.cloudloading.updateBook.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.cloudloading.updateBook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1CloudloadingUpdateBookMutationOptions<
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

export function getBooksV1DictionaryListOfflineMetadataQueryKey(
  args: InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>,
) {
  return ['books', '/books/v1/dictionary/listOfflineMetadata', args] as const
}

export function getBooksV1DictionaryListOfflineMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1DictionaryListOfflineMetadataQueryKey>
  >({
    queryKey: getBooksV1DictionaryListOfflineMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.dictionary.listOfflineMetadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1DictionaryListOfflineMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1DictionaryListOfflineMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1DictionaryListOfflineMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1DictionaryListOfflineMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1DictionaryListOfflineMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1DictionaryListOfflineMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1FamilysharingGetFamilyInfoQueryKey(
  args: InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>,
) {
  return ['books', '/books/v1/familysharing/getFamilyInfo', args] as const
}

export function getBooksV1FamilysharingGetFamilyInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1FamilysharingGetFamilyInfoQueryKey>
  >({
    queryKey: getBooksV1FamilysharingGetFamilyInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.familysharing.getFamilyInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1FamilysharingGetFamilyInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1FamilysharingGetFamilyInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1FamilysharingGetFamilyInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1FamilysharingGetFamilyInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1FamilysharingGetFamilyInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1FamilysharingGetFamilyInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBooksV1FamilysharingShareMutationKey() {
  return ['books', '/books/v1/familysharing/share', 'POST'] as const
}

export function getPostBooksV1FamilysharingShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.familysharing.share.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.familysharing.share.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1FamilysharingShareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.books.v1.familysharing.share.$post>) {
      return parseResponse(client.books.v1.familysharing.share.$post(args, options))
    },
  })
}

export function usePostBooksV1FamilysharingShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.familysharing.share.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.familysharing.share.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1FamilysharingShareMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBooksV1FamilysharingUnshareMutationKey() {
  return ['books', '/books/v1/familysharing/unshare', 'POST'] as const
}

export function getPostBooksV1FamilysharingUnshareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.familysharing.unshare.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.familysharing.unshare.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1FamilysharingUnshareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.books.v1.familysharing.unshare.$post>) {
      return parseResponse(client.books.v1.familysharing.unshare.$post(args, options))
    },
  })
}

export function usePostBooksV1FamilysharingUnshare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.familysharing.unshare.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.familysharing.unshare.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1FamilysharingUnshareMutationOptions<
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

export function getBooksV1MyconfigGetUserSettingsQueryKey(
  args: InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>,
) {
  return ['books', '/books/v1/myconfig/getUserSettings', args] as const
}

export function getBooksV1MyconfigGetUserSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1MyconfigGetUserSettingsQueryKey>
  >({
    queryKey: getBooksV1MyconfigGetUserSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.myconfig.getUserSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1MyconfigGetUserSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1MyconfigGetUserSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1MyconfigGetUserSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1MyconfigGetUserSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1MyconfigGetUserSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1MyconfigGetUserSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBooksV1MyconfigReleaseDownloadAccessMutationKey() {
  return ['books', '/books/v1/myconfig/releaseDownloadAccess', 'POST'] as const
}

export function getPostBooksV1MyconfigReleaseDownloadAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.myconfig.releaseDownloadAccess.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.myconfig.releaseDownloadAccess.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MyconfigReleaseDownloadAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.books.v1.myconfig.releaseDownloadAccess.$post>,
    ) {
      return parseResponse(client.books.v1.myconfig.releaseDownloadAccess.$post(args, options))
    },
  })
}

export function usePostBooksV1MyconfigReleaseDownloadAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.myconfig.releaseDownloadAccess.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.myconfig.releaseDownloadAccess.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1MyconfigReleaseDownloadAccessMutationOptions<
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

export function getPostBooksV1MyconfigRequestAccessMutationKey() {
  return ['books', '/books/v1/myconfig/requestAccess', 'POST'] as const
}

export function getPostBooksV1MyconfigRequestAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.myconfig.requestAccess.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.myconfig.requestAccess.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MyconfigRequestAccessMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.books.v1.myconfig.requestAccess.$post>) {
      return parseResponse(client.books.v1.myconfig.requestAccess.$post(args, options))
    },
  })
}

export function usePostBooksV1MyconfigRequestAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.myconfig.requestAccess.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.myconfig.requestAccess.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1MyconfigRequestAccessMutationOptions<
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

export function getPostBooksV1MyconfigSyncVolumeLicensesMutationKey() {
  return ['books', '/books/v1/myconfig/syncVolumeLicenses', 'POST'] as const
}

export function getPostBooksV1MyconfigSyncVolumeLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.myconfig.syncVolumeLicenses.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.myconfig.syncVolumeLicenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MyconfigSyncVolumeLicensesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.books.v1.myconfig.syncVolumeLicenses.$post>,
    ) {
      return parseResponse(client.books.v1.myconfig.syncVolumeLicenses.$post(args, options))
    },
  })
}

export function usePostBooksV1MyconfigSyncVolumeLicenses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.myconfig.syncVolumeLicenses.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.myconfig.syncVolumeLicenses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1MyconfigSyncVolumeLicensesMutationOptions<
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

export function getPostBooksV1MyconfigUpdateUserSettingsMutationKey() {
  return ['books', '/books/v1/myconfig/updateUserSettings', 'POST'] as const
}

export function getPostBooksV1MyconfigUpdateUserSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.myconfig.updateUserSettings.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.myconfig.updateUserSettings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MyconfigUpdateUserSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.books.v1.myconfig.updateUserSettings.$post>,
    ) {
      return parseResponse(client.books.v1.myconfig.updateUserSettings.$post(args, options))
    },
  })
}

export function usePostBooksV1MyconfigUpdateUserSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.myconfig.updateUserSettings.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.myconfig.updateUserSettings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1MyconfigUpdateUserSettingsMutationOptions<
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

export function getBooksV1MylibraryAnnotationsQueryKey(
  args: InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>,
) {
  return ['books', '/books/v1/mylibrary/annotations', args] as const
}

export function getBooksV1MylibraryAnnotationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1MylibraryAnnotationsQueryKey>
  >({
    queryKey: getBooksV1MylibraryAnnotationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.mylibrary.annotations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1MylibraryAnnotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1MylibraryAnnotationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1MylibraryAnnotationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1MylibraryAnnotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1MylibraryAnnotationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1MylibraryAnnotationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBooksV1MylibraryAnnotationsMutationKey() {
  return ['books', '/books/v1/mylibrary/annotations', 'POST'] as const
}

export function getPostBooksV1MylibraryAnnotationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.mylibrary.annotations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MylibraryAnnotationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.books.v1.mylibrary.annotations.$post>) {
      return parseResponse(client.books.v1.mylibrary.annotations.$post(args, options))
    },
  })
}

export function usePostBooksV1MylibraryAnnotations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.mylibrary.annotations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1MylibraryAnnotationsMutationOptions<
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

export function getPostBooksV1MylibraryAnnotationsSummaryMutationKey() {
  return ['books', '/books/v1/mylibrary/annotations/summary', 'POST'] as const
}

export function getPostBooksV1MylibraryAnnotationsSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.summary.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.mylibrary.annotations.summary.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MylibraryAnnotationsSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.books.v1.mylibrary.annotations.summary.$post>,
    ) {
      return parseResponse(client.books.v1.mylibrary.annotations.summary.$post(args, options))
    },
  })
}

export function usePostBooksV1MylibraryAnnotationsSummary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.summary.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.mylibrary.annotations.summary.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1MylibraryAnnotationsSummaryMutationOptions<
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

export function getPutBooksV1MylibraryAnnotationsAnnotationIdMutationKey() {
  return ['books', '/books/v1/mylibrary/annotations/:annotationId', 'PUT'] as const
}

export function getPutBooksV1MylibraryAnnotationsAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.books.v1.mylibrary.annotations)[':annotationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBooksV1MylibraryAnnotationsAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.books.v1.mylibrary.annotations)[':annotationId']['$put']
      >,
    ) {
      return parseResponse(
        client.books.v1.mylibrary.annotations[':annotationId'].$put(args, options),
      )
    },
  })
}

export function usePutBooksV1MylibraryAnnotationsAnnotationId<
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
                ReturnType<(typeof client.books.v1.mylibrary.annotations)[':annotationId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.books.v1.mylibrary.annotations)[':annotationId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBooksV1MylibraryAnnotationsAnnotationIdMutationOptions<
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

export function getDeleteBooksV1MylibraryAnnotationsAnnotationIdMutationKey() {
  return ['books', '/books/v1/mylibrary/annotations/:annotationId', 'DELETE'] as const
}

export function getDeleteBooksV1MylibraryAnnotationsAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.books.v1.mylibrary.annotations)[':annotationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBooksV1MylibraryAnnotationsAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.books.v1.mylibrary.annotations)[':annotationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.books.v1.mylibrary.annotations[':annotationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBooksV1MylibraryAnnotationsAnnotationId<
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
                  (typeof client.books.v1.mylibrary.annotations)[':annotationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.books.v1.mylibrary.annotations)[':annotationId']['$delete']
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
  const mutationDefaults = getDeleteBooksV1MylibraryAnnotationsAnnotationIdMutationOptions<
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

export function getBooksV1MylibraryBookshelvesQueryKey(
  args: InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>,
) {
  return ['books', '/books/v1/mylibrary/bookshelves', args] as const
}

export function getBooksV1MylibraryBookshelvesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1MylibraryBookshelvesQueryKey>
  >({
    queryKey: getBooksV1MylibraryBookshelvesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.mylibrary.bookshelves.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1MylibraryBookshelves<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1MylibraryBookshelvesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1MylibraryBookshelvesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1MylibraryBookshelves<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1MylibraryBookshelvesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1MylibraryBookshelvesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1MylibraryBookshelvesShelfQueryKey(
  args: InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>,
) {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf', args] as const
}

export function getBooksV1MylibraryBookshelvesShelfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1MylibraryBookshelvesShelfQueryKey>
  >({
    queryKey: getBooksV1MylibraryBookshelvesShelfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.mylibrary.bookshelves[':shelf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1MylibraryBookshelvesShelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1MylibraryBookshelvesShelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1MylibraryBookshelvesShelfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1MylibraryBookshelvesShelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1MylibraryBookshelvesShelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1MylibraryBookshelvesShelfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBooksV1MylibraryBookshelvesShelfAddVolumeMutationKey() {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/addVolume', 'POST'] as const
}

export function getPostBooksV1MylibraryBookshelvesShelfAddVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['addVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MylibraryBookshelvesShelfAddVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['addVolume']['$post']
      >,
    ) {
      return parseResponse(
        client.books.v1.mylibrary.bookshelves[':shelf'].addVolume.$post(args, options),
      )
    },
  })
}

export function usePostBooksV1MylibraryBookshelvesShelfAddVolume<
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
                  (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['addVolume']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['addVolume']['$post']
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
  const mutationDefaults = getPostBooksV1MylibraryBookshelvesShelfAddVolumeMutationOptions<
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

export function getPostBooksV1MylibraryBookshelvesShelfClearVolumesMutationKey() {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/clearVolumes', 'POST'] as const
}

export function getPostBooksV1MylibraryBookshelvesShelfClearVolumesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['clearVolumes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MylibraryBookshelvesShelfClearVolumesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['clearVolumes']['$post']
      >,
    ) {
      return parseResponse(
        client.books.v1.mylibrary.bookshelves[':shelf'].clearVolumes.$post(args, options),
      )
    },
  })
}

export function usePostBooksV1MylibraryBookshelvesShelfClearVolumes<
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
                  (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['clearVolumes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['clearVolumes']['$post']
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
  const mutationDefaults = getPostBooksV1MylibraryBookshelvesShelfClearVolumesMutationOptions<
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

export function getPostBooksV1MylibraryBookshelvesShelfMoveVolumeMutationKey() {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/moveVolume', 'POST'] as const
}

export function getPostBooksV1MylibraryBookshelvesShelfMoveVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['moveVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MylibraryBookshelvesShelfMoveVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['moveVolume']['$post']
      >,
    ) {
      return parseResponse(
        client.books.v1.mylibrary.bookshelves[':shelf'].moveVolume.$post(args, options),
      )
    },
  })
}

export function usePostBooksV1MylibraryBookshelvesShelfMoveVolume<
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
                  (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['moveVolume']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['moveVolume']['$post']
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
  const mutationDefaults = getPostBooksV1MylibraryBookshelvesShelfMoveVolumeMutationOptions<
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

export function getPostBooksV1MylibraryBookshelvesShelfRemoveVolumeMutationKey() {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/removeVolume', 'POST'] as const
}

export function getPostBooksV1MylibraryBookshelvesShelfRemoveVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['removeVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MylibraryBookshelvesShelfRemoveVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['removeVolume']['$post']
      >,
    ) {
      return parseResponse(
        client.books.v1.mylibrary.bookshelves[':shelf'].removeVolume.$post(args, options),
      )
    },
  })
}

export function usePostBooksV1MylibraryBookshelvesShelfRemoveVolume<
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
                  (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['removeVolume']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['removeVolume']['$post']
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
  const mutationDefaults = getPostBooksV1MylibraryBookshelvesShelfRemoveVolumeMutationOptions<
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

export function getBooksV1MylibraryBookshelvesShelfVolumesQueryKey(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
  >,
) {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/volumes', args] as const
}

export function getBooksV1MylibraryBookshelvesShelfVolumesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1MylibraryBookshelvesShelfVolumesQueryKey>
  >({
    queryKey: getBooksV1MylibraryBookshelvesShelfVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.mylibrary.bookshelves[':shelf'].volumes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1MylibraryBookshelvesShelfVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1MylibraryBookshelvesShelfVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1MylibraryBookshelvesShelfVolumesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1MylibraryBookshelvesShelfVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1MylibraryBookshelvesShelfVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1MylibraryBookshelvesShelfVolumesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1MylibraryReadingpositionsVolumeIdQueryKey(
  args: InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>,
) {
  return ['books', '/books/v1/mylibrary/readingpositions/:volumeId', args] as const
}

export function getBooksV1MylibraryReadingpositionsVolumeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1MylibraryReadingpositionsVolumeIdQueryKey>
  >({
    queryKey: getBooksV1MylibraryReadingpositionsVolumeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.mylibrary.readingpositions[':volumeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1MylibraryReadingpositionsVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1MylibraryReadingpositionsVolumeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1MylibraryReadingpositionsVolumeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1MylibraryReadingpositionsVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1MylibraryReadingpositionsVolumeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1MylibraryReadingpositionsVolumeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBooksV1MylibraryReadingpositionsVolumeIdSetPositionMutationKey() {
  return ['books', '/books/v1/mylibrary/readingpositions/:volumeId/setPosition', 'POST'] as const
}

export function getPostBooksV1MylibraryReadingpositionsVolumeIdSetPositionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['setPosition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1MylibraryReadingpositionsVolumeIdSetPositionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['setPosition']['$post']
      >,
    ) {
      return parseResponse(
        client.books.v1.mylibrary.readingpositions[':volumeId'].setPosition.$post(args, options),
      )
    },
  })
}

export function usePostBooksV1MylibraryReadingpositionsVolumeIdSetPosition<
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
                  (typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['setPosition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['setPosition']['$post']
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
    getPostBooksV1MylibraryReadingpositionsVolumeIdSetPositionMutationOptions<
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

export function getBooksV1NotificationGetQueryKey(
  args: InferRequestType<typeof client.books.v1.notification.get.$get>,
) {
  return ['books', '/books/v1/notification/get', args] as const
}

export function getBooksV1NotificationGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.notification.get.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1NotificationGetQueryKey>
  >({
    queryKey: getBooksV1NotificationGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.notification.get.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1NotificationGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.notification.get.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1NotificationGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1NotificationGetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1NotificationGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.notification.get.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1NotificationGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1NotificationGetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1OnboardingListCategoriesQueryKey(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>,
) {
  return ['books', '/books/v1/onboarding/listCategories', args] as const
}

export function getBooksV1OnboardingListCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1OnboardingListCategoriesQueryKey>
  >({
    queryKey: getBooksV1OnboardingListCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.onboarding.listCategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1OnboardingListCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1OnboardingListCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1OnboardingListCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1OnboardingListCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1OnboardingListCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1OnboardingListCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1OnboardingListCategoryVolumesQueryKey(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>,
) {
  return ['books', '/books/v1/onboarding/listCategoryVolumes', args] as const
}

export function getBooksV1OnboardingListCategoryVolumesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1OnboardingListCategoryVolumesQueryKey>
  >({
    queryKey: getBooksV1OnboardingListCategoryVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.onboarding.listCategoryVolumes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1OnboardingListCategoryVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1OnboardingListCategoryVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1OnboardingListCategoryVolumesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1OnboardingListCategoryVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1OnboardingListCategoryVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1OnboardingListCategoryVolumesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1PersonalizedstreamGetQueryKey(
  args: InferRequestType<typeof client.books.v1.personalizedstream.get.$get>,
) {
  return ['books', '/books/v1/personalizedstream/get', args] as const
}

export function getBooksV1PersonalizedstreamGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.personalizedstream.get.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1PersonalizedstreamGetQueryKey>
  >({
    queryKey: getBooksV1PersonalizedstreamGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.personalizedstream.get.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1PersonalizedstreamGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.personalizedstream.get.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1PersonalizedstreamGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1PersonalizedstreamGetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1PersonalizedstreamGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.personalizedstream.get.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1PersonalizedstreamGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1PersonalizedstreamGetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBooksV1PromoofferAcceptMutationKey() {
  return ['books', '/books/v1/promooffer/accept', 'POST'] as const
}

export function getPostBooksV1PromoofferAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.accept.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.promooffer.accept.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1PromoofferAcceptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.books.v1.promooffer.accept.$post>) {
      return parseResponse(client.books.v1.promooffer.accept.$post(args, options))
    },
  })
}

export function usePostBooksV1PromoofferAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.promooffer.accept.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.promooffer.accept.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1PromoofferAcceptMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBooksV1PromoofferDismissMutationKey() {
  return ['books', '/books/v1/promooffer/dismiss', 'POST'] as const
}

export function getPostBooksV1PromoofferDismissMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.dismiss.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.promooffer.dismiss.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1PromoofferDismissMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.books.v1.promooffer.dismiss.$post>) {
      return parseResponse(client.books.v1.promooffer.dismiss.$post(args, options))
    },
  })
}

export function usePostBooksV1PromoofferDismiss<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.promooffer.dismiss.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.promooffer.dismiss.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1PromoofferDismissMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBooksV1PromoofferGetQueryKey(
  args: InferRequestType<typeof client.books.v1.promooffer.get.$get>,
) {
  return ['books', '/books/v1/promooffer/get', args] as const
}

export function getBooksV1PromoofferGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.promooffer.get.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1PromoofferGetQueryKey>
  >({
    queryKey: getBooksV1PromoofferGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.promooffer.get.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1PromoofferGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.promooffer.get.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1PromoofferGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBooksV1PromoofferGetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBooksV1PromoofferGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.promooffer.get.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1PromoofferGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBooksV1PromoofferGetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBooksV1SeriesGetQueryKey(
  args: InferRequestType<typeof client.books.v1.series.get.$get>,
) {
  return ['books', '/books/v1/series/get', args] as const
}

export function getBooksV1SeriesGetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.books.v1.series.get.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1SeriesGetQueryKey>
  >({
    queryKey: getBooksV1SeriesGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.series.get.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBooksV1SeriesGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.series.get.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1SeriesGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBooksV1SeriesGetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBooksV1SeriesGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.series.get.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1SeriesGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBooksV1SeriesGetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBooksV1SeriesMembershipGetQueryKey(
  args: InferRequestType<typeof client.books.v1.series.membership.get.$get>,
) {
  return ['books', '/books/v1/series/membership/get', args] as const
}

export function getBooksV1SeriesMembershipGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.series.membership.get.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1SeriesMembershipGetQueryKey>
  >({
    queryKey: getBooksV1SeriesMembershipGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.series.membership.get.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1SeriesMembershipGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.series.membership.get.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1SeriesMembershipGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1SeriesMembershipGetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1SeriesMembershipGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.series.membership.get.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1SeriesMembershipGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1SeriesMembershipGetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1UsersUserIdBookshelvesQueryKey(
  args: InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>,
) {
  return ['books', '/books/v1/users/:userId/bookshelves', args] as const
}

export function getBooksV1UsersUserIdBookshelvesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1UsersUserIdBookshelvesQueryKey>
  >({
    queryKey: getBooksV1UsersUserIdBookshelvesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.users[':userId'].bookshelves.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1UsersUserIdBookshelves<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1UsersUserIdBookshelvesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1UsersUserIdBookshelvesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1UsersUserIdBookshelves<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1UsersUserIdBookshelvesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1UsersUserIdBookshelvesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1UsersUserIdBookshelvesShelfQueryKey(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']
  >,
) {
  return ['books', '/books/v1/users/:userId/bookshelves/:shelf', args] as const
}

export function getBooksV1UsersUserIdBookshelvesShelfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1UsersUserIdBookshelvesShelfQueryKey>
  >({
    queryKey: getBooksV1UsersUserIdBookshelvesShelfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.users[':userId'].bookshelves[':shelf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1UsersUserIdBookshelvesShelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1UsersUserIdBookshelvesShelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1UsersUserIdBookshelvesShelfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1UsersUserIdBookshelvesShelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1UsersUserIdBookshelvesShelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1UsersUserIdBookshelvesShelfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1UsersUserIdBookshelvesShelfVolumesQueryKey(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
  >,
) {
  return ['books', '/books/v1/users/:userId/bookshelves/:shelf/volumes', args] as const
}

export function getBooksV1UsersUserIdBookshelvesShelfVolumesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBooksV1UsersUserIdBookshelvesShelfVolumesQueryKey>
  >({
    queryKey: getBooksV1UsersUserIdBookshelvesShelfVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.users[':userId'].bookshelves[':shelf'].volumes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1UsersUserIdBookshelvesShelfVolumes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1UsersUserIdBookshelvesShelfVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1UsersUserIdBookshelvesShelfVolumesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1UsersUserIdBookshelvesShelfVolumes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1UsersUserIdBookshelvesShelfVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1UsersUserIdBookshelvesShelfVolumesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1VolumesQueryKey(
  args: InferRequestType<typeof client.books.v1.volumes.$get>,
) {
  return ['books', '/books/v1/volumes', args] as const
}

export function getBooksV1VolumesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.books.v1.volumes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesQueryKey>
  >({
    queryKey: getBooksV1VolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBooksV1Volumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBooksV1VolumesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBooksV1Volumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBooksV1VolumesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBooksV1VolumesMybooksQueryKey(
  args: InferRequestType<typeof client.books.v1.volumes.mybooks.$get>,
) {
  return ['books', '/books/v1/volumes/mybooks', args] as const
}

export function getBooksV1VolumesMybooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.mybooks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesMybooksQueryKey>
  >({
    queryKey: getBooksV1VolumesMybooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes.mybooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1VolumesMybooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.mybooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesMybooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesMybooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesMybooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.mybooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesMybooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesMybooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1VolumesRecommendedQueryKey(
  args: InferRequestType<typeof client.books.v1.volumes.recommended.$get>,
) {
  return ['books', '/books/v1/volumes/recommended', args] as const
}

export function getBooksV1VolumesRecommendedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.recommended.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesRecommendedQueryKey>
  >({
    queryKey: getBooksV1VolumesRecommendedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes.recommended.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1VolumesRecommended<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.recommended.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesRecommendedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesRecommendedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesRecommended<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.recommended.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesRecommendedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesRecommendedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBooksV1VolumesRecommendedRateMutationKey() {
  return ['books', '/books/v1/volumes/recommended/rate', 'POST'] as const
}

export function getPostBooksV1VolumesRecommendedRateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.books.v1.volumes.recommended.rate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.books.v1.volumes.recommended.rate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBooksV1VolumesRecommendedRateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.books.v1.volumes.recommended.rate.$post>,
    ) {
      return parseResponse(client.books.v1.volumes.recommended.rate.$post(args, options))
    },
  })
}

export function usePostBooksV1VolumesRecommendedRate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.volumes.recommended.rate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.books.v1.volumes.recommended.rate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBooksV1VolumesRecommendedRateMutationOptions<
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

export function getBooksV1VolumesUseruploadedQueryKey(
  args: InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>,
) {
  return ['books', '/books/v1/volumes/useruploaded', args] as const
}

export function getBooksV1VolumesUseruploadedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesUseruploadedQueryKey>
  >({
    queryKey: getBooksV1VolumesUseruploadedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes.useruploaded.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1VolumesUseruploaded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesUseruploadedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesUseruploadedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesUseruploaded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesUseruploadedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesUseruploadedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdQueryKey(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>,
) {
  return ['books', '/books/v1/volumes/:volumeId', args] as const
}

export function getBooksV1VolumesVolumeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesVolumeIdQueryKey>
  >({
    queryKey: getBooksV1VolumesVolumeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1VolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesVolumeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesVolumeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdAssociatedQueryKey(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>,
) {
  return ['books', '/books/v1/volumes/:volumeId/associated', args] as const
}

export function getBooksV1VolumesVolumeIdAssociatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesVolumeIdAssociatedQueryKey>
  >({
    queryKey: getBooksV1VolumesVolumeIdAssociatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].associated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1VolumesVolumeIdAssociated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdAssociatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesVolumeIdAssociatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesVolumeIdAssociated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdAssociatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesVolumeIdAssociatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersLayerIdQueryKey(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/layers/:layerId', args] as const
}

export function getBooksV1VolumesVolumeIdLayersLayerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdQueryKey>
  >({
    queryKey: getBooksV1VolumesVolumeIdLayersLayerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layers[':layerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1VolumesVolumeIdLayersLayerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersLayerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesVolumeIdLayersLayerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersLayerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryKey(
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

export function getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryKey>
  >({
    queryKey: getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layers[':layerId'].annotations[':annotationId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersLayerIdDataQueryKey(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/layers/:layerId/data', args] as const
}

export function getBooksV1VolumesVolumeIdLayersLayerIdDataQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdDataQueryKey>
  >({
    queryKey: getBooksV1VolumesVolumeIdLayersLayerIdDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layers[':layerId'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1VolumesVolumeIdLayersLayerIdData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersLayerIdDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesVolumeIdLayersLayerIdData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersLayerIdDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryKey(
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

export function getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryKey>
  >({
    queryKey: getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layers[':layerId'].data[':annotationDataId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersummaryQueryKey(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>,
) {
  return ['books', '/books/v1/volumes/:volumeId/layersummary', args] as const
}

export function getBooksV1VolumesVolumeIdLayersummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesVolumeIdLayersummaryQueryKey>
  >({
    queryKey: getBooksV1VolumesVolumeIdLayersummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layersummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1VolumesVolumeIdLayersummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesVolumeIdLayersummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryKey(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/layersummary/:summaryId', args] as const
}

export function getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryKey>
  >({
    queryKey: getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layersummary[':summaryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBooksV1VolumesVolumeIdLayersummarySummaryId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBooksV1VolumesVolumeIdLayersummarySummaryId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
