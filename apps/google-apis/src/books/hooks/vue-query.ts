import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>
  >,
) {
  return ['books', '/books/v1/dictionary/listOfflineMetadata', toValue(args)] as const
}

export function getBooksV1DictionaryListOfflineMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1DictionaryListOfflineMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.dictionary.listOfflineMetadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1DictionaryListOfflineMetadataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1DictionaryListOfflineMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.dictionary.listOfflineMetadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1FamilysharingGetFamilyInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>,
) {
  return ['books', '/books/v1/familysharing/getFamilyInfo', toValue(args)] as const
}

export function getBooksV1FamilysharingGetFamilyInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1FamilysharingGetFamilyInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.familysharing.getFamilyInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.familysharing.getFamilyInfo.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1FamilysharingGetFamilyInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1FamilysharingGetFamilyInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.familysharing.getFamilyInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>>,
) {
  return ['books', '/books/v1/myconfig/getUserSettings', toValue(args)] as const
}

export function getBooksV1MyconfigGetUserSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1MyconfigGetUserSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.myconfig.getUserSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.myconfig.getUserSettings.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1MyconfigGetUserSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1MyconfigGetUserSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.myconfig.getUserSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>>,
) {
  return ['books', '/books/v1/mylibrary/annotations', toValue(args)] as const
}

export function getBooksV1MylibraryAnnotationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1MylibraryAnnotationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.mylibrary.annotations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1MylibraryAnnotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1MylibraryAnnotationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.annotations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1MylibraryAnnotationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1MylibraryAnnotationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.mylibrary.annotations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.books.v1.mylibrary.annotations)[':annotationId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.books.v1.mylibrary.annotations)[':annotationId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>>,
) {
  return ['books', '/books/v1/mylibrary/bookshelves', toValue(args)] as const
}

export function getBooksV1MylibraryBookshelvesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1MylibraryBookshelvesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.mylibrary.bookshelves.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1MylibraryBookshelves<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1MylibraryBookshelvesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.mylibrary.bookshelves.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1MylibraryBookshelvesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1MylibraryBookshelvesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.mylibrary.bookshelves.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1MylibraryBookshelvesShelfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>
  >,
) {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf', toValue(args)] as const
}

export function getBooksV1MylibraryBookshelvesShelfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1MylibraryBookshelvesShelfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.mylibrary.bookshelves[':shelf'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBooksV1MylibraryBookshelvesShelfQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1MylibraryBookshelvesShelfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.mylibrary.bookshelves[':shelf'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']>
  >,
) {
  return ['books', '/books/v1/mylibrary/bookshelves/:shelf/volumes', toValue(args)] as const
}

export function getBooksV1MylibraryBookshelvesShelfVolumesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1MylibraryBookshelvesShelfVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.mylibrary.bookshelves[':shelf'].volumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBooksV1MylibraryBookshelvesShelfVolumesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1MylibraryBookshelvesShelfVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.mylibrary.bookshelves[':shelf'].volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1MylibraryReadingpositionsVolumeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
  >,
) {
  return ['books', '/books/v1/mylibrary/readingpositions/:volumeId', toValue(args)] as const
}

export function getBooksV1MylibraryReadingpositionsVolumeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1MylibraryReadingpositionsVolumeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.mylibrary.readingpositions[':volumeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBooksV1MylibraryReadingpositionsVolumeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1MylibraryReadingpositionsVolumeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.mylibrary.readingpositions[':volumeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.notification.get.$get>>,
) {
  return ['books', '/books/v1/notification/get', toValue(args)] as const
}

export function getBooksV1NotificationGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.notification.get.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1NotificationGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.notification.get.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1NotificationGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.notification.get.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1NotificationGetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.notification.get.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1NotificationGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1NotificationGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.notification.get.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1OnboardingListCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>>,
) {
  return ['books', '/books/v1/onboarding/listCategories', toValue(args)] as const
}

export function getBooksV1OnboardingListCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1OnboardingListCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.onboarding.listCategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.onboarding.listCategories.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1OnboardingListCategoriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1OnboardingListCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.onboarding.listCategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1OnboardingListCategoryVolumesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>
  >,
) {
  return ['books', '/books/v1/onboarding/listCategoryVolumes', toValue(args)] as const
}

export function getBooksV1OnboardingListCategoryVolumesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1OnboardingListCategoryVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.onboarding.listCategoryVolumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1OnboardingListCategoryVolumesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1OnboardingListCategoryVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.onboarding.listCategoryVolumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1PersonalizedstreamGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.personalizedstream.get.$get>>,
) {
  return ['books', '/books/v1/personalizedstream/get', toValue(args)] as const
}

export function getBooksV1PersonalizedstreamGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.personalizedstream.get.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1PersonalizedstreamGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.personalizedstream.get.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1PersonalizedstreamGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.personalizedstream.get.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.personalizedstream.get.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1PersonalizedstreamGetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1PersonalizedstreamGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.personalizedstream.get.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.promooffer.get.$get>>,
) {
  return ['books', '/books/v1/promooffer/get', toValue(args)] as const
}

export function getBooksV1PromoofferGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.promooffer.get.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1PromoofferGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.promooffer.get.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1PromoofferGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.promooffer.get.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
            >
          >,
          ReturnType<typeof getBooksV1PromoofferGetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.promooffer.get.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1PromoofferGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1PromoofferGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.promooffer.get.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1SeriesGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.series.get.$get>>,
) {
  return ['books', '/books/v1/series/get', toValue(args)] as const
}

export function getBooksV1SeriesGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.series.get.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1SeriesGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.series.get.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1SeriesGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.series.get.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>
            >
          >,
          ReturnType<typeof getBooksV1SeriesGetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.get.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1SeriesGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1SeriesGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.series.get.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1SeriesMembershipGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.series.membership.get.$get>>,
) {
  return ['books', '/books/v1/series/membership/get', toValue(args)] as const
}

export function getBooksV1SeriesMembershipGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.series.membership.get.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1SeriesMembershipGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.series.membership.get.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1SeriesMembershipGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.series.membership.get.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1SeriesMembershipGetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.series.membership.get.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1SeriesMembershipGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1SeriesMembershipGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.series.membership.get.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1UsersUserIdBookshelvesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>
  >,
) {
  return ['books', '/books/v1/users/:userId/bookshelves', toValue(args)] as const
}

export function getBooksV1UsersUserIdBookshelvesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1UsersUserIdBookshelvesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.users[':userId'].bookshelves.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBooksV1UsersUserIdBookshelvesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1UsersUserIdBookshelvesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.users[':userId'].bookshelves.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1UsersUserIdBookshelvesShelfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
  >,
) {
  return ['books', '/books/v1/users/:userId/bookshelves/:shelf', toValue(args)] as const
}

export function getBooksV1UsersUserIdBookshelvesShelfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1UsersUserIdBookshelvesShelfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.users[':userId'].bookshelves[':shelf'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBooksV1UsersUserIdBookshelvesShelfQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1UsersUserIdBookshelvesShelfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.users[':userId'].bookshelves[':shelf'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1UsersUserIdBookshelvesShelfVolumesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
    >
  >,
) {
  return ['books', '/books/v1/users/:userId/bookshelves/:shelf/volumes', toValue(args)] as const
}

export function getBooksV1UsersUserIdBookshelvesShelfVolumesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1UsersUserIdBookshelvesShelfVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.users[':userId'].bookshelves[':shelf'].volumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBooksV1UsersUserIdBookshelvesShelfVolumesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1UsersUserIdBookshelvesShelfVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.users[':userId'].bookshelves[':shelf'].volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.$get>>,
) {
  return ['books', '/books/v1/volumes', toValue(args)] as const
}

export function getBooksV1VolumesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1VolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1Volumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>
            >
          >,
          ReturnType<typeof getBooksV1VolumesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1VolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesMybooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.mybooks.$get>>,
) {
  return ['books', '/books/v1/volumes/mybooks', toValue(args)] as const
}

export function getBooksV1VolumesMybooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.mybooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1VolumesMybooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes.mybooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1VolumesMybooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.mybooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
            >
          >,
          ReturnType<typeof getBooksV1VolumesMybooksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.mybooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesMybooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1VolumesMybooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes.mybooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesRecommendedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.recommended.$get>>,
) {
  return ['books', '/books/v1/volumes/recommended', toValue(args)] as const
}

export function getBooksV1VolumesRecommendedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.recommended.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1VolumesRecommendedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes.recommended.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1VolumesRecommended<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.recommended.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1VolumesRecommendedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.recommended.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesRecommendedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1VolumesRecommendedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes.recommended.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>>,
) {
  return ['books', '/books/v1/volumes/useruploaded', toValue(args)] as const
}

export function getBooksV1VolumesUseruploadedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1VolumesUseruploadedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes.useruploaded.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBooksV1VolumesUseruploaded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>
              >
            >
          >,
          ReturnType<typeof getBooksV1VolumesUseruploadedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.books.v1.volumes.useruploaded.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBooksV1VolumesUseruploadedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1VolumesUseruploadedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes.useruploaded.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>,
) {
  return ['books', '/books/v1/volumes/:volumeId', toValue(args)] as const
}

export function getBooksV1VolumesVolumeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1VolumesVolumeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.books.v1.volumes)[':volumeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBooksV1VolumesVolumeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1VolumesVolumeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes[':volumeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdAssociatedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/associated', toValue(args)] as const
}

export function getBooksV1VolumesVolumeIdAssociatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1VolumesVolumeIdAssociatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].associated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBooksV1VolumesVolumeIdAssociatedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1VolumesVolumeIdAssociatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes[':volumeId'].associated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersLayerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']>
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/layers/:layerId', toValue(args)] as const
}

export function getBooksV1VolumesVolumeIdLayersLayerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1VolumesVolumeIdLayersLayerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layers[':layerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1VolumesVolumeIdLayersLayerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes[':volumeId'].layers[':layerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
    >
  >,
) {
  return [
    'books',
    '/books/v1/volumes/:volumeId/layers/:layerId/annotations/:annotationId',
    toValue(args),
  ] as const
}

export function getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layers[':layerId'].annotations[':annotationId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes[':volumeId'].layers[':layerId'].annotations[':annotationId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersLayerIdDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
    >
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/layers/:layerId/data', toValue(args)] as const
}

export function getBooksV1VolumesVolumeIdLayersLayerIdDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1VolumesVolumeIdLayersLayerIdDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layers[':layerId'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdDataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1VolumesVolumeIdLayersLayerIdDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes[':volumeId'].layers[':layerId'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
    >
  >,
) {
  return [
    'books',
    '/books/v1/volumes/:volumeId/layers/:layerId/data/:annotationDataId',
    toValue(args),
  ] as const
}

export function getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layers[':layerId'].data[':annotationDataId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes[':volumeId'].layers[':layerId'].data[':annotationDataId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/layersummary', toValue(args)] as const
}

export function getBooksV1VolumesVolumeIdLayersummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1VolumesVolumeIdLayersummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layersummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBooksV1VolumesVolumeIdLayersummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1VolumesVolumeIdLayersummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes[':volumeId'].layersummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
    >
  >,
) {
  return ['books', '/books/v1/volumes/:volumeId/layersummary/:summaryId', toValue(args)] as const
}

export function getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.books.v1.volumes[':volumeId'].layersummary[':summaryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBooksV1VolumesVolumeIdLayersummarySummaryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.books.v1.volumes[':volumeId'].layersummary[':summaryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
