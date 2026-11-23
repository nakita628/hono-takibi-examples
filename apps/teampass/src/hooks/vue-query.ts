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

export function getAuthKey() {
  return ['auth'] as const
}

export function getAuthorizeKey() {
  return ['authorize'] as const
}

export function getAuthorizeTokenKey() {
  return ['authorizeToken'] as const
}

export function getDevicePairingKey() {
  return ['devicePairing'] as const
}

export function getFolderKey() {
  return ['folder'] as const
}

export function getItemKey() {
  return ['item'] as const
}

export function getMiscKey() {
  return ['misc'] as const
}

export function getOpenapiJsonKey() {
  return ['openapi.json'] as const
}

export function getSecureSendKey() {
  return ['secureSend'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getWebauthnKey() {
  return ['webauthn'] as const
}

export function getPostAuthorizeMutationKey() {
  return ['authorize', '/authorize', 'POST'] as const
}

export function getPostAuthorizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>>,
    TError,
    InferRequestType<typeof client.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorize.$post>) {
      return parseResponse(client.authorize.$post(args, options))
    },
  })
}

export function usePostAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.authorize.$post>,
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
  const mutationDefaults = getPostAuthorizeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthorizeTokenMutationKey() {
  return ['authorizeToken', '/authorizeToken', 'POST'] as const
}

export function getPostAuthorizeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizeToken.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.authorizeToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizeTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorizeToken.$post>) {
      return parseResponse(client.authorizeToken.$post(args, options))
    },
  })
}

export function usePostAuthorizeToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorizeToken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authorizeToken.$post>,
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
  const mutationDefaults = getPostAuthorizeTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthLogoutMutationKey() {
  return ['auth', '/auth/logout', 'POST'] as const
}

export function getPostAuthLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.logout.$post(undefined, options))
    },
  })
}

export function usePostAuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAuthLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getItemGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.get.$get>>,
) {
  return ['item', '/item/get', toValue(args)] as const
}

export function getItemGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.get.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.item.get.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItemGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.get.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>
          >,
          ReturnType<typeof getItemGetQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.item.get.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemInFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.inFolders.$get>>,
) {
  return ['item', '/item/inFolders', toValue(args)] as const
}

export function getItemInFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.inFolders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemInFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.item.inFolders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemInFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.inFolders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
          >,
          ReturnType<typeof getItemInFoldersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemInFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemInFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.item.inFolders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemFindByUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.findByUrl.$get>>,
) {
  return ['item', '/item/findByUrl', toValue(args)] as const
}

export function getItemFindByUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.findByUrl.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemFindByUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.item.findByUrl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemFindByUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.findByUrl.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
          >,
          ReturnType<typeof getItemFindByUrlQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemFindByUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemFindByUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.item.findByUrl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemGetOtpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.getOtp.$get>>,
) {
  return ['item', '/item/getOtp', toValue(args)] as const
}

export function getItemGetOtpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.getOtp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemGetOtpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.item.getOtp.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItemGetOtp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.getOtp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>
          >,
          ReturnType<typeof getItemGetOtpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemGetOtpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemGetOtpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.item.getOtp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.changes.$get>>,
) {
  return ['item', '/item/changes', toValue(args)] as const
}

export function getItemChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.changes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.item.changes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItemChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item.changes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>
          >,
          ReturnType<typeof getItemChangesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.item.changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemAllTagsQueryKey() {
  return ['item', '/item/allTags'] as const
}

export function getItemAllTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getItemAllTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.item.allTags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItemAllTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>
          >,
          ReturnType<typeof getItemAllTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemAllTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getItemAllTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.item.allTags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItemCreateMutationKey() {
  return ['item', '/item/create', 'POST'] as const
}

export function getPostItemCreateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.create.$post>>>>>,
    TError,
    InferRequestType<typeof client.item.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.create.$post>) {
      return parseResponse(client.item.create.$post(args, options))
    },
  })
}

export function usePostItemCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.create.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.item.create.$post>,
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
  const mutationDefaults = getPostItemCreateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutItemUpdateMutationKey() {
  return ['item', '/item/update', 'PUT'] as const
}

export function getPutItemUpdateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.update.$put>>>>>,
    TError,
    InferRequestType<typeof client.item.update.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutItemUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.update.$put>) {
      return parseResponse(client.item.update.$put(args, options))
    },
  })
}

export function usePutItemUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.update.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.item.update.$put>,
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
  const mutationDefaults = getPutItemUpdateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteItemDeleteMutationKey() {
  return ['item', '/item/delete', 'DELETE'] as const
}

export function getDeleteItemDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.delete.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.item.delete.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.delete.$delete>) {
      return parseResponse(client.item.delete.$delete(args, options))
    },
  })
}

export function useDeleteItemDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.delete.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.item.delete.$delete>,
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
  const mutationDefaults = getDeleteItemDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getFolderListFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folder.listFolders.$get>>,
) {
  return ['folder', '/folder/listFolders', toValue(args)] as const
}

export function getFolderListFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folder.listFolders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFolderListFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folder.listFolders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFolderListFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folder.listFolders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>
            >
          >,
          ReturnType<typeof getFolderListFoldersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFolderListFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFolderListFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folder.listFolders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFolderWritableFoldersQueryKey() {
  return ['folder', '/folder/writableFolders'] as const
}

export function getFolderWritableFoldersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFolderWritableFoldersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folder.writableFolders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFolderWritableFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>
            >
          >,
          ReturnType<typeof getFolderWritableFoldersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFolderWritableFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFolderWritableFoldersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.folder.writableFolders.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFolderCreateMutationKey() {
  return ['folder', '/folder/create', 'POST'] as const
}

export function getPostFolderCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.folder.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFolderCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.folder.create.$post>) {
      return parseResponse(client.folder.create.$post(args, options))
    },
  })
}

export function usePostFolderCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.create.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.folder.create.$post>,
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
  const mutationDefaults = getPostFolderCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPutFolderUpdateMutationKey() {
  return ['folder', '/folder/update', 'PUT'] as const
}

export function getPutFolderUpdateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.update.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.folder.update.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutFolderUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.folder.update.$put>) {
      return parseResponse(client.folder.update.$put(args, options))
    },
  })
}

export function usePutFolderUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.update.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.folder.update.$put>,
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
  const mutationDefaults = getPutFolderUpdateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFolderDeleteMutationKey() {
  return ['folder', '/folder/delete', 'DELETE'] as const
}

export function getDeleteFolderDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.delete.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.folder.delete.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFolderDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.folder.delete.$delete>) {
      return parseResponse(client.folder.delete.$delete(args, options))
    },
  })
}

export function useDeleteFolderDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.folder.delete.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.folder.delete.$delete>,
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
  const mutationDefaults = getDeleteFolderDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getUserListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.list.$get>>,
) {
  return ['user', '/user/list', toValue(args)] as const
}

export function getUserListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>
          >,
          ReturnType<typeof getUserListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMiscRefreshExtensionSettingsQueryKey() {
  return ['misc', '/misc/refreshExtensionSettings'] as const
}

export function getMiscRefreshExtensionSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMiscRefreshExtensionSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.misc.refreshExtensionSettings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMiscRefreshExtensionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>
              >
            >
          >,
          ReturnType<typeof getMiscRefreshExtensionSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMiscRefreshExtensionSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMiscRefreshExtensionSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.misc.refreshExtensionSettings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMiscRefreshExtensionSettingsMutationKey() {
  return ['misc', '/misc/refreshExtensionSettings', 'POST'] as const
}

export function getPostMiscRefreshExtensionSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMiscRefreshExtensionSettingsMutationKey(),
    async mutationFn() {
      return parseResponse(client.misc.refreshExtensionSettings.$post(undefined, options))
    },
  })
}

export function usePostMiscRefreshExtensionSettings<
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
                Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostMiscRefreshExtensionSettingsMutationOptions<
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

export function getPostWebauthnCreateMutationKey() {
  return ['webauthn', '/webauthn/create', 'POST'] as const
}

export function getPostWebauthnCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webauthn.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebauthnCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webauthn.create.$post>) {
      return parseResponse(client.webauthn.create.$post(args, options))
    },
  })
}

export function usePostWebauthnCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webauthn.create.$post>,
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
  const mutationDefaults = getPostWebauthnCreateMutationOptions<TError, TOnMutateResult>(
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

export function getWebauthnListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webauthn.list.$get>>,
) {
  return ['webauthn', '/webauthn/list', toValue(args)] as const
}

export function getWebauthnListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webauthn.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebauthnListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webauthn.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebauthnList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webauthn.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
          >,
          ReturnType<typeof getWebauthnListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebauthnListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebauthnListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webauthn.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebauthnAssertMutationKey() {
  return ['webauthn', '/webauthn/assert', 'POST'] as const
}

export function getPostWebauthnAssertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.assert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webauthn.assert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebauthnAssertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webauthn.assert.$post>) {
      return parseResponse(client.webauthn.assert.$post(args, options))
    },
  })
}

export function usePostWebauthnAssert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.assert.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webauthn.assert.$post>,
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
  const mutationDefaults = getPostWebauthnAssertMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebauthnDeleteMutationKey() {
  return ['webauthn', '/webauthn/delete', 'DELETE'] as const
}

export function getDeleteWebauthnDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.delete.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.webauthn.delete.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebauthnDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webauthn.delete.$delete>) {
      return parseResponse(client.webauthn.delete.$delete(args, options))
    },
  })
}

export function useDeleteWebauthnDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.delete.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webauthn.delete.$delete>,
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
  const mutationDefaults = getDeleteWebauthnDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getSecureSendPolicyQueryKey() {
  return ['secureSend', '/secureSend/policy'] as const
}

export function getSecureSendPolicyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSecureSendPolicyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secureSend.policy.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecureSendPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>
            >
          >,
          ReturnType<typeof getSecureSendPolicyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSecureSendPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSecureSendPolicyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.secureSend.policy.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSecureSendCreateMutationKey() {
  return ['secureSend', '/secureSend/create', 'POST'] as const
}

export function getPostSecureSendCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.secureSend.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSecureSendCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.secureSend.create.$post>) {
      return parseResponse(client.secureSend.create.$post(args, options))
    },
  })
}

export function usePostSecureSendCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.secureSend.create.$post>,
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
  const mutationDefaults = getPostSecureSendCreateMutationOptions<TError, TOnMutateResult>(
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

export function getSecureSendListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secureSend.list.$get>>,
) {
  return ['secureSend', '/secureSend/list', toValue(args)] as const
}

export function getSecureSendListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secureSend.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecureSendListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secureSend.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecureSendList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secureSend.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>
            >
          >,
          ReturnType<typeof getSecureSendListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSecureSendListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecureSendListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secureSend.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSecureSendRevokeMutationKey() {
  return ['secureSend', '/secureSend/revoke', 'DELETE'] as const
}

export function getDeleteSecureSendRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.revoke.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.secureSend.revoke.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecureSendRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.secureSend.revoke.$delete>) {
      return parseResponse(client.secureSend.revoke.$delete(args, options))
    },
  })
}

export function useDeleteSecureSendRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.revoke.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.secureSend.revoke.$delete>,
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
  const mutationDefaults = getDeleteSecureSendRevokeMutationOptions<TError, TOnMutateResult>(
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

export function getOpenapiJsonQueryKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function getOpenapiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          ReturnType<typeof getOpenapiJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['openapi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicePairingCapabilitiesQueryKey() {
  return ['devicePairing', '/devicePairing/capabilities'] as const
}

export function getDevicePairingCapabilitiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDevicePairingCapabilitiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devicePairing.capabilities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicePairingCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>
              >
            >
          >,
          ReturnType<typeof getDevicePairingCapabilitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicePairingCapabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDevicePairingCapabilitiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.devicePairing.capabilities.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDevicePairingCredentialStatusMutationKey() {
  return ['devicePairing', '/devicePairing/credentialStatus', 'POST'] as const
}

export function getPostDevicePairingCredentialStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.devicePairing.credentialStatus.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.devicePairing.credentialStatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicePairingCredentialStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.devicePairing.credentialStatus.$post>) {
      return parseResponse(client.devicePairing.credentialStatus.$post(args, options))
    },
  })
}

export function usePostDevicePairingCredentialStatus<
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
                Awaited<ReturnType<typeof client.devicePairing.credentialStatus.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.devicePairing.credentialStatus.$post>,
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
  const mutationDefaults = getPostDevicePairingCredentialStatusMutationOptions<
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

export function getPostDevicePairingClaimMutationKey() {
  return ['devicePairing', '/devicePairing/claim', 'POST'] as const
}

export function getPostDevicePairingClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.claim.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.devicePairing.claim.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicePairingClaimMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.devicePairing.claim.$post>) {
      return parseResponse(client.devicePairing.claim.$post(args, options))
    },
  })
}

export function usePostDevicePairingClaim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.claim.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.devicePairing.claim.$post>,
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
  const mutationDefaults = getPostDevicePairingClaimMutationOptions<TError, TOnMutateResult>(
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

export function getPostDevicePairingStatusMutationKey() {
  return ['devicePairing', '/devicePairing/status', 'POST'] as const
}

export function getPostDevicePairingStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.status.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.devicePairing.status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicePairingStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.devicePairing.status.$post>) {
      return parseResponse(client.devicePairing.status.$post(args, options))
    },
  })
}

export function usePostDevicePairingStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.status.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.devicePairing.status.$post>,
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
  const mutationDefaults = getPostDevicePairingStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostDevicePairingConsumeMutationKey() {
  return ['devicePairing', '/devicePairing/consume', 'POST'] as const
}

export function getPostDevicePairingConsumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.consume.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.devicePairing.consume.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicePairingConsumeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.devicePairing.consume.$post>) {
      return parseResponse(client.devicePairing.consume.$post(args, options))
    },
  })
}

export function usePostDevicePairingConsume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.consume.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.devicePairing.consume.$post>,
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
  const mutationDefaults = getPostDevicePairingConsumeMutationOptions<TError, TOnMutateResult>(
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
