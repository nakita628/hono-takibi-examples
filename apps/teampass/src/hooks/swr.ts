import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAuthorizeKey() {
  return ['authorize', '/authorize', 'POST'] as const
}

export function usePostAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authorize.$post> }) =>
        parseResponse(client.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizeTokenKey() {
  return ['authorizeToken', '/authorizeToken', 'POST'] as const
}

export function usePostAuthorizeToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizeToken.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorizeToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizeTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authorizeToken.$post> }) =>
        parseResponse(client.authorizeToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthLogoutKey() {
  return ['auth', '/auth/logout', 'POST'] as const
}

export function usePostAuthLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemGetKey(args: InferRequestType<typeof client.item.get.$get>) {
  return ['item', '/item/get', args] as const
}

export function useGetItemGet<TError = unknown>(
  args: InferRequestType<typeof client.item.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.item.get.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetItemGet<TError = unknown>(
  args: InferRequestType<typeof client.item.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.item.get.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetItemInFoldersKey(args: InferRequestType<typeof client.item.inFolders.$get>) {
  return ['item', '/item/inFolders', args] as const
}

export function useGetItemInFolders<TError = unknown>(
  args: InferRequestType<typeof client.item.inFolders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemInFoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item.inFolders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemInFolders<TError = unknown>(
  args: InferRequestType<typeof client.item.inFolders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemInFoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.inFolders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item.inFolders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemFindByUrlKey(args: InferRequestType<typeof client.item.findByUrl.$get>) {
  return ['item', '/item/findByUrl', args] as const
}

export function useGetItemFindByUrl<TError = unknown>(
  args: InferRequestType<typeof client.item.findByUrl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemFindByUrlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item.findByUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemFindByUrl<TError = unknown>(
  args: InferRequestType<typeof client.item.findByUrl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemFindByUrlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.findByUrl.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item.findByUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemGetOtpKey(args: InferRequestType<typeof client.item.getOtp.$get>) {
  return ['item', '/item/getOtp', args] as const
}

export function useGetItemGetOtp<TError = unknown>(
  args: InferRequestType<typeof client.item.getOtp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemGetOtpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item.getOtp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemGetOtp<TError = unknown>(
  args: InferRequestType<typeof client.item.getOtp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemGetOtpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.getOtp.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item.getOtp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemChangesKey(args: InferRequestType<typeof client.item.changes.$get>) {
  return ['item', '/item/changes', args] as const
}

export function useGetItemChanges<TError = unknown>(
  args: InferRequestType<typeof client.item.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemChanges<TError = unknown>(
  args: InferRequestType<typeof client.item.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.changes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemAllTagsKey() {
  return ['item', '/item/allTags'] as const
}

export function useGetItemAllTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemAllTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item.allTags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemAllTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemAllTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.allTags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item.allTags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemCreateKey() {
  return ['item', '/item/create', 'POST'] as const
}

export function usePostItemCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.create.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.item.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item.create.$post> }) =>
        parseResponse(client.item.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutItemUpdateKey() {
  return ['item', '/item/update', 'PUT'] as const
}

export function usePutItemUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.update.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.item.update.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutItemUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item.update.$put> }) =>
        parseResponse(client.item.update.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteItemDeleteKey() {
  return ['item', '/item/delete', 'DELETE'] as const
}

export function useDeleteItemDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.delete.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.item.delete.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteItemDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item.delete.$delete> }) =>
        parseResponse(client.item.delete.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFolderListFoldersKey(
  args: InferRequestType<typeof client.folder.listFolders.$get>,
) {
  return ['folder', '/folder/listFolders', args] as const
}

export function useGetFolderListFolders<TError = unknown>(
  args: InferRequestType<typeof client.folder.listFolders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>>
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
        ? getGetFolderListFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folder.listFolders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFolderListFolders<TError = unknown>(
  args: InferRequestType<typeof client.folder.listFolders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>>
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
        ? getGetFolderListFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.listFolders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folder.listFolders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFolderWritableFoldersKey() {
  return ['folder', '/folder/writableFolders'] as const
}

export function useGetFolderWritableFolders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFolderWritableFoldersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folder.writableFolders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFolderWritableFolders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFolderWritableFoldersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.folder.writableFolders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folder.writableFolders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFolderCreateKey() {
  return ['folder', '/folder/create', 'POST'] as const
}

export function usePostFolderCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.folder.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFolderCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.folder.create.$post> }) =>
        parseResponse(client.folder.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFolderUpdateKey() {
  return ['folder', '/folder/update', 'PUT'] as const
}

export function usePutFolderUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.update.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.folder.update.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFolderUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.folder.update.$put> }) =>
        parseResponse(client.folder.update.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFolderDeleteKey() {
  return ['folder', '/folder/delete', 'DELETE'] as const
}

export function useDeleteFolderDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder.delete.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.folder.delete.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFolderDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.folder.delete.$delete> }) =>
        parseResponse(client.folder.delete.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserListKey(args: InferRequestType<typeof client.user.list.$get>) {
  return ['user', '/user/list', args] as const
}

export function useGetUserList<TError = unknown>(
  args: InferRequestType<typeof client.user.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserList<TError = unknown>(
  args: InferRequestType<typeof client.user.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMiscRefreshExtensionSettingsKey() {
  return ['misc', '/misc/refreshExtensionSettings'] as const
}

export function useGetMiscRefreshExtensionSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMiscRefreshExtensionSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.misc.refreshExtensionSettings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMiscRefreshExtensionSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMiscRefreshExtensionSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.misc.refreshExtensionSettings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMiscRefreshExtensionSettingsKey() {
  return ['misc', '/misc/refreshExtensionSettings', 'POST'] as const
}

export function usePostMiscRefreshExtensionSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.misc.refreshExtensionSettings.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMiscRefreshExtensionSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.misc.refreshExtensionSettings.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebauthnCreateKey() {
  return ['webauthn', '/webauthn/create', 'POST'] as const
}

export function usePostWebauthnCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webauthn.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebauthnCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webauthn.create.$post> }) =>
        parseResponse(client.webauthn.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebauthnListKey(args: InferRequestType<typeof client.webauthn.list.$get>) {
  return ['webauthn', '/webauthn/list', args] as const
}

export function useGetWebauthnList<TError = unknown>(
  args: InferRequestType<typeof client.webauthn.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebauthnListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webauthn.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebauthnList<TError = unknown>(
  args: InferRequestType<typeof client.webauthn.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebauthnListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webauthn.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebauthnAssertKey() {
  return ['webauthn', '/webauthn/assert', 'POST'] as const
}

export function usePostWebauthnAssert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.assert.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webauthn.assert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebauthnAssertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webauthn.assert.$post> }) =>
        parseResponse(client.webauthn.assert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebauthnDeleteKey() {
  return ['webauthn', '/webauthn/delete', 'DELETE'] as const
}

export function useDeleteWebauthnDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauthn.delete.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webauthn.delete.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebauthnDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webauthn.delete.$delete> }) =>
        parseResponse(client.webauthn.delete.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecureSendPolicyKey() {
  return ['secureSend', '/secureSend/policy'] as const
}

export function useGetSecureSendPolicy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecureSendPolicyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secureSend.policy.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecureSendPolicy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecureSendPolicyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secureSend.policy.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSecureSendCreateKey() {
  return ['secureSend', '/secureSend/create', 'POST'] as const
}

export function usePostSecureSendCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.secureSend.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecureSendCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.secureSend.create.$post> }) =>
        parseResponse(client.secureSend.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecureSendListKey(
  args: InferRequestType<typeof client.secureSend.list.$get>,
) {
  return ['secureSend', '/secureSend/list', args] as const
}

export function useGetSecureSendList<TError = unknown>(
  args: InferRequestType<typeof client.secureSend.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecureSendListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secureSend.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecureSendList<TError = unknown>(
  args: InferRequestType<typeof client.secureSend.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecureSendListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secureSend.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSecureSendRevokeKey() {
  return ['secureSend', '/secureSend/revoke', 'DELETE'] as const
}

export function useDeleteSecureSendRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secureSend.revoke.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.secureSend.revoke.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecureSendRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.secureSend.revoke.$delete> }) =>
        parseResponse(client.secureSend.revoke.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOpenapiJsonKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function useGetOpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDevicePairingCapabilitiesKey() {
  return ['devicePairing', '/devicePairing/capabilities'] as const
}

export function useGetDevicePairingCapabilities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicePairingCapabilitiesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devicePairing.capabilities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicePairingCapabilities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicePairingCapabilitiesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.capabilities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devicePairing.capabilities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDevicePairingCredentialStatusKey() {
  return ['devicePairing', '/devicePairing/credentialStatus', 'POST'] as const
}

export function usePostDevicePairingCredentialStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.devicePairing.credentialStatus.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.devicePairing.credentialStatus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDevicePairingCredentialStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.devicePairing.credentialStatus.$post> },
      ) => parseResponse(client.devicePairing.credentialStatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDevicePairingClaimKey() {
  return ['devicePairing', '/devicePairing/claim', 'POST'] as const
}

export function usePostDevicePairingClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.claim.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.devicePairing.claim.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDevicePairingClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.devicePairing.claim.$post> }) =>
        parseResponse(client.devicePairing.claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDevicePairingStatusKey() {
  return ['devicePairing', '/devicePairing/status', 'POST'] as const
}

export function usePostDevicePairingStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.status.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.devicePairing.status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDevicePairingStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.devicePairing.status.$post> },
      ) => parseResponse(client.devicePairing.status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDevicePairingConsumeKey() {
  return ['devicePairing', '/devicePairing/consume', 'POST'] as const
}

export function usePostDevicePairingConsume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.devicePairing.consume.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.devicePairing.consume.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDevicePairingConsumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.devicePairing.consume.$post> },
      ) => parseResponse(client.devicePairing.consume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
