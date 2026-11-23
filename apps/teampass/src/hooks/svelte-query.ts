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

export function createPostAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.authorize.$post>,
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
    const mutationDefaults = getPostAuthorizeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthorizeToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizeToken.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.authorizeToken.$post>,
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
    const mutationDefaults = getPostAuthorizeTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostAuthLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItemGetQueryKey(args: InferRequestType<typeof client.item.get.$get>) {
  return ['item', '/item/get', args] as const
}

export function getItemGetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.item.get.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemGetQueryKey>
  >({
    queryKey: getItemGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.item.get.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.item.get.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getItemGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemGetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemInFoldersQueryKey(
  args: InferRequestType<typeof client.item.inFolders.$get>,
) {
  return ['item', '/item/inFolders', args] as const
}

export function getItemInFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.item.inFolders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemInFoldersQueryKey>
  >({
    queryKey: getItemInFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.item.inFolders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemInFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.item.inFolders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemInFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemInFoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemFindByUrlQueryKey(
  args: InferRequestType<typeof client.item.findByUrl.$get>,
) {
  return ['item', '/item/findByUrl', args] as const
}

export function getItemFindByUrlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.item.findByUrl.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemFindByUrlQueryKey>
  >({
    queryKey: getItemFindByUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.item.findByUrl.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemFindByUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.item.findByUrl.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemFindByUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemFindByUrlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemGetOtpQueryKey(args: InferRequestType<typeof client.item.getOtp.$get>) {
  return ['item', '/item/getOtp', args] as const
}

export function getItemGetOtpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.item.getOtp.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemGetOtpQueryKey>
  >({
    queryKey: getItemGetOtpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.item.getOtp.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemGetOtp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.item.getOtp.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemGetOtpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemGetOtpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemChangesQueryKey(args: InferRequestType<typeof client.item.changes.$get>) {
  return ['item', '/item/changes', args] as const
}

export function getItemChangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.item.changes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemChangesQueryKey>
  >({
    queryKey: getItemChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.item.changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.item.changes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemAllTagsQueryKey() {
  return ['item', '/item/allTags'] as const
}

export function getItemAllTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemAllTagsQueryKey>
  >({
    queryKey: getItemAllTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.item.allTags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemAllTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemAllTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemAllTagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostItemCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.item.create.$post>,
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
    const mutationDefaults = getPostItemCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutItemUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.update.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.item.update.$put>,
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
    const mutationDefaults = getPutItemUpdateMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteItemDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.delete.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.item.delete.$delete>,
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
    const mutationDefaults = getDeleteItemDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFolderListFoldersQueryKey(
  args: InferRequestType<typeof client.folder.listFolders.$get>,
) {
  return ['folder', '/folder/listFolders', args] as const
}

export function getFolderListFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.folder.listFolders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFolderListFoldersQueryKey>
  >({
    queryKey: getFolderListFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folder.listFolders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFolderListFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.folder.listFolders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFolderListFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFolderListFoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFolderWritableFoldersQueryKey() {
  return ['folder', '/folder/writableFolders'] as const
}

export function getFolderWritableFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFolderWritableFoldersQueryKey>
  >({
    queryKey: getFolderWritableFoldersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.folder.writableFolders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFolderWritableFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFolderWritableFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFolderWritableFoldersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostFolderCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.folder.create.$post>,
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
    const mutationDefaults = getPostFolderCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutFolderUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.update.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.folder.update.$put>,
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
    const mutationDefaults = getPutFolderUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteFolderDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.delete.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.folder.delete.$delete>,
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
    const mutationDefaults = getDeleteFolderDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserListQueryKey(args: InferRequestType<typeof client.user.list.$get>) {
  return ['user', '/user/list', args] as const
}

export function getUserListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserListQueryKey>
  >({
    queryKey: getUserListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMiscRefreshExtensionSettingsQueryKey() {
  return ['misc', '/misc/refreshExtensionSettings'] as const
}

export function getMiscRefreshExtensionSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMiscRefreshExtensionSettingsQueryKey>
  >({
    queryKey: getMiscRefreshExtensionSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.misc.refreshExtensionSettings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMiscRefreshExtensionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMiscRefreshExtensionSettingsQueryKey>
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
      ...getMiscRefreshExtensionSettingsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMiscRefreshExtensionSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMiscRefreshExtensionSettingsMutationOptions<
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

export function createPostWebauthnCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webauthn.create.$post>,
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
    const mutationDefaults = getPostWebauthnCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebauthnListQueryKey(args: InferRequestType<typeof client.webauthn.list.$get>) {
  return ['webauthn', '/webauthn/list', args] as const
}

export function getWebauthnListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webauthn.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebauthnListQueryKey>
  >({
    queryKey: getWebauthnListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webauthn.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWebauthnList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webauthn.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebauthnListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebauthnListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWebauthnAssert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.assert.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webauthn.assert.$post>,
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
    const mutationDefaults = getPostWebauthnAssertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteWebauthnDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.delete.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.webauthn.delete.$delete>,
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
    const mutationDefaults = getDeleteWebauthnDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSecureSendPolicyQueryKey() {
  return ['secureSend', '/secureSend/policy'] as const
}

export function getSecureSendPolicyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSecureSendPolicyQueryKey>
  >({
    queryKey: getSecureSendPolicyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.secureSend.policy.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSecureSendPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecureSendPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecureSendPolicyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostSecureSendCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.secureSend.create.$post>,
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
    const mutationDefaults = getPostSecureSendCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSecureSendListQueryKey(
  args: InferRequestType<typeof client.secureSend.list.$get>,
) {
  return ['secureSend', '/secureSend/list', args] as const
}

export function getSecureSendListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.secureSend.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSecureSendListQueryKey>
  >({
    queryKey: getSecureSendListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secureSend.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSecureSendList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.secureSend.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSecureSendListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecureSendListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteSecureSendRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.revoke.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.secureSend.revoke.$delete>,
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
    const mutationDefaults = getDeleteSecureSendRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOpenapiJsonQueryKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function getOpenapiJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >({
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDevicePairingCapabilitiesQueryKey() {
  return ['devicePairing', '/devicePairing/capabilities'] as const
}

export function getDevicePairingCapabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicePairingCapabilitiesQueryKey>
  >({
    queryKey: getDevicePairingCapabilitiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.devicePairing.capabilities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicePairingCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicePairingCapabilitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicePairingCapabilitiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDevicePairingCredentialStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDevicePairingCredentialStatusMutationOptions<
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

export function createPostDevicePairingClaim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.claim.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.devicePairing.claim.$post>,
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
    const mutationDefaults = getPostDevicePairingClaimMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDevicePairingStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.status.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.devicePairing.status.$post>,
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
    const mutationDefaults = getPostDevicePairingStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDevicePairingConsume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.consume.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.devicePairing.consume.$post>,
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
    const mutationDefaults = getPostDevicePairingConsumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
