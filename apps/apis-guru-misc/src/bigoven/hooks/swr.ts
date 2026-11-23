import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCollectionKey() {
  return ['collection'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getGrocerylistKey() {
  return ['grocerylist'] as const
}

export function getImageKey() {
  return ['image'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getRecipeKey() {
  return ['recipe'] as const
}

export function getRecipesKey() {
  return ['recipes'] as const
}

export function getGetCollectionIdKey(
  args: InferRequestType<(typeof client.collection)[':id']['$get']>,
) {
  return ['collection', '/collection/:id', args] as const
}

export function useGetCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.collection)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCollectionIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collection[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.collection)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCollectionIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collection[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionIdMetaKey(
  args: InferRequestType<(typeof client.collection)[':id']['meta']['$get']>,
) {
  return ['collection', '/collection/:id/meta', args] as const
}

export function useGetCollectionIdMeta<TError = unknown>(
  args: InferRequestType<(typeof client.collection)[':id']['meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>
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
        ? getGetCollectionIdMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collection[':id'].meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionIdMeta<TError = unknown>(
  args: InferRequestType<(typeof client.collection)[':id']['meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>
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
        ? getGetCollectionIdMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collection[':id'].meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsKey(args: InferRequestType<typeof client.collections.$get>) {
  return ['collections', '/collections', args] as const
}

export function useGetCollections<TError = unknown>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollections<TError = unknown>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrocerylistKey() {
  return ['grocerylist', '/grocerylist'] as const
}

export function useGetGrocerylist<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrocerylistKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grocerylist.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrocerylist<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrocerylistKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grocerylist.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGrocerylistKey() {
  return ['grocerylist', '/grocerylist', 'DELETE'] as const
}

export function useDeleteGrocerylist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGrocerylistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.grocerylist.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGrocerylistClearcheckedlinesKey() {
  return ['grocerylist', '/grocerylist/clearcheckedlines', 'POST'] as const
}

export function usePostGrocerylistClearcheckedlines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.clearcheckedlines.$post>>>
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
  const swrKey = customKey ?? getPostGrocerylistClearcheckedlinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.grocerylist.clearcheckedlines.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGrocerylistDepartmentKey() {
  return ['grocerylist', '/grocerylist/department', 'POST'] as const
}

export function usePostGrocerylistDepartment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.department.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.grocerylist.department.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGrocerylistDepartmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.grocerylist.department.$post> },
      ) => parseResponse(client.grocerylist.department.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGrocerylistItemKey() {
  return ['grocerylist', '/grocerylist/item', 'POST'] as const
}

export function usePostGrocerylistItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.item.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.grocerylist.item.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGrocerylistItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.grocerylist.item.$post> }) =>
        parseResponse(client.grocerylist.item.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutGrocerylistItemGuidKey() {
  return ['grocerylist', '/grocerylist/item/:guid', 'PUT'] as const
}

export function usePutGrocerylistItemGuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.grocerylist.item)[':guid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.grocerylist.item)[':guid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGrocerylistItemGuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.grocerylist.item)[':guid']['$put']> },
      ) => parseResponse(client.grocerylist.item[':guid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGrocerylistItemGuidKey() {
  return ['grocerylist', '/grocerylist/item/:guid', 'DELETE'] as const
}

export function useDeleteGrocerylistItemGuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.grocerylist.item)[':guid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.grocerylist.item)[':guid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGrocerylistItemGuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.grocerylist.item)[':guid']['$delete']> },
      ) => parseResponse(client.grocerylist.item[':guid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGrocerylistLineKey() {
  return ['grocerylist', '/grocerylist/line', 'POST'] as const
}

export function usePostGrocerylistLine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.line.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.grocerylist.line.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGrocerylistLineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.grocerylist.line.$post> }) =>
        parseResponse(client.grocerylist.line.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGrocerylistRecipeKey() {
  return ['grocerylist', '/grocerylist/recipe', 'POST'] as const
}

export function usePostGrocerylistRecipe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.recipe.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.grocerylist.recipe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGrocerylistRecipeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.grocerylist.recipe.$post> }) =>
        parseResponse(client.grocerylist.recipe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGrocerylistSyncKey() {
  return ['grocerylist', '/grocerylist/sync', 'POST'] as const
}

export function usePostGrocerylistSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.grocerylist.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGrocerylistSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.grocerylist.sync.$post> }) =>
        parseResponse(client.grocerylist.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImageAvatarKey() {
  return ['image', '/image/avatar', 'POST'] as const
}

export function usePostImageAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.avatar.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImageAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.image.avatar.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPutMeKey() {
  return ['me', '/me', 'PUT'] as const
}

export function usePutMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.$put> }) =>
        parseResponse(client.me.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMePersonalKey() {
  return ['me', '/me/personal', 'PUT'] as const
}

export function usePutMePersonal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.personal.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.personal.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePersonalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.personal.$put> }) =>
        parseResponse(client.me.personal.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMePreferencesKey() {
  return ['me', '/me/preferences', 'PUT'] as const
}

export function usePutMePreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.me.preferences.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.preferences.$put> }) =>
        parseResponse(client.me.preferences.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMePreferencesOptionsKey() {
  return ['me', '/me/preferences/options'] as const
}

export function useGetMePreferencesOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>
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
        ? getGetMePreferencesOptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.preferences.options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePreferencesOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>
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
        ? getGetMePreferencesOptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.preferences.options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeProfileKey() {
  return ['me', '/me/profile', 'PUT'] as const
}

export function usePutMeProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.profile.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.profile.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.profile.$put> }) =>
        parseResponse(client.me.profile.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeSkinnyKey() {
  return ['me', '/me/skinny'] as const
}

export function useGetMeSkinny<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeSkinnyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.skinny.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeSkinny<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeSkinnyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.skinny.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRecipeKey() {
  return ['recipe', '/recipe', 'PUT'] as const
}

export function usePutRecipe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.recipe.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecipeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recipe.$put> }) =>
        parseResponse(client.recipe.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipeKey() {
  return ['recipe', '/recipe', 'POST'] as const
}

export function usePostRecipe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.recipe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recipe.$post> }) =>
        parseResponse(client.recipe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeAutocompleteKey(
  args: InferRequestType<typeof client.recipe.autocomplete.$get>,
) {
  return ['recipe', '/recipe/autocomplete', args] as const
}

export function useGetRecipeAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.recipe.autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>
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
        ? getGetRecipeAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.recipe.autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>
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
        ? getGetRecipeAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeAutocompleteAllKey(
  args: InferRequestType<typeof client.recipe.autocomplete.all.$get>,
) {
  return ['recipe', '/recipe/autocomplete/all', args] as const
}

export function useGetRecipeAutocompleteAll<TError = unknown>(
  args: InferRequestType<typeof client.recipe.autocomplete.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
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
        ? getGetRecipeAutocompleteAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.autocomplete.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeAutocompleteAll<TError = unknown>(
  args: InferRequestType<typeof client.recipe.autocomplete.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
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
        ? getGetRecipeAutocompleteAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.autocomplete.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeAutocompleteMineKey(
  args: InferRequestType<typeof client.recipe.autocomplete.mine.$get>,
) {
  return ['recipe', '/recipe/autocomplete/mine', args] as const
}

export function useGetRecipeAutocompleteMine<TError = unknown>(
  args: InferRequestType<typeof client.recipe.autocomplete.mine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
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
        ? getGetRecipeAutocompleteMineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.autocomplete.mine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeAutocompleteMine<TError = unknown>(
  args: InferRequestType<typeof client.recipe.autocomplete.mine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
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
        ? getGetRecipeAutocompleteMineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.autocomplete.mine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeCategoriesKey() {
  return ['recipe', '/recipe/categories'] as const
}

export function useGetRecipeCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipeCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipeCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeGetActiveRecipeKey(
  args: InferRequestType<typeof client.recipe.get.active.recipe.$get>,
) {
  return ['recipe', '/recipe/get/active/recipe', args] as const
}

export function useGetRecipeGetActiveRecipe<TError = unknown>(
  args: InferRequestType<typeof client.recipe.get.active.recipe.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
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
        ? getGetRecipeGetActiveRecipeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.get.active.recipe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeGetActiveRecipe<TError = unknown>(
  args: InferRequestType<typeof client.recipe.get.active.recipe.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
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
        ? getGetRecipeGetActiveRecipeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.get.active.recipe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecipeGetSavedStepKey() {
  return ['recipe', '/recipe/get/saved/step', 'POST'] as const
}

export function usePostRecipeGetSavedStep<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.saved.step.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipe.get.saved.step.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeGetSavedStepKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipe.get.saved.step.$post> },
      ) => parseResponse(client.recipe.get.saved.step.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipeGetStepNumberKey() {
  return ['recipe', '/recipe/get/step/number', 'POST'] as const
}

export function usePostRecipeGetStepNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.step.number.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipe.get.step.number.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeGetStepNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipe.get.step.number.$post> },
      ) => parseResponse(client.recipe.get.step.number.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipePhotosPendingKey() {
  return ['recipe', '/recipe/photos/pending'] as const
}

export function useGetRecipePhotosPending<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>
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
        ? getGetRecipePhotosPendingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.photos.pending.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipePhotosPending<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>
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
        ? getGetRecipePhotosPendingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.photos.pending.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecipePostStepKey() {
  return ['recipe', '/recipe/post/step', 'POST'] as const
}

export function usePostRecipePostStep<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.post.step.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipe.post.step.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipePostStepKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recipe.post.step.$post> }) =>
        parseResponse(client.recipe.post.step.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRecipeReviewRepliesReplyIdKey() {
  return ['recipe', '/recipe/review/replies/:replyId', 'PUT'] as const
}

export function usePutRecipeReviewRepliesReplyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe.review.replies)[':replyId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecipeReviewRepliesReplyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$put']> },
      ) => parseResponse(client.recipe.review.replies[':replyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRecipeReviewRepliesReplyIdKey() {
  return ['recipe', '/recipe/review/replies/:replyId', 'DELETE'] as const
}

export function useDeleteRecipeReviewRepliesReplyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe.review.replies)[':replyId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRecipeReviewRepliesReplyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$delete']> },
      ) => parseResponse(client.recipe.review.replies[':replyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeReviewReviewIdKey(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['$get']>,
) {
  return ['recipe', '/recipe/review/:reviewId', args] as const
}

export function useGetRecipeReviewReviewId<TError = unknown>(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$get']>>
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
        ? getGetRecipeReviewReviewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.review[':reviewId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeReviewReviewId<TError = unknown>(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$get']>>
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
        ? getGetRecipeReviewReviewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.review[':reviewId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRecipeReviewReviewIdKey() {
  return ['recipe', '/recipe/review/:reviewId', 'PUT'] as const
}

export function usePutRecipeReviewReviewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe.review)[':reviewId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecipeReviewReviewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.recipe.review)[':reviewId']['$put']> },
      ) => parseResponse(client.recipe.review[':reviewId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeReviewReviewIdRepliesKey(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>,
) {
  return ['recipe', '/recipe/review/:reviewId/replies', args] as const
}

export function useGetRecipeReviewReviewIdReplies<TError = unknown>(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>>
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
        ? getGetRecipeReviewReviewIdRepliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipe.review[':reviewId'].replies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeReviewReviewIdReplies<TError = unknown>(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>>
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
        ? getGetRecipeReviewReviewIdRepliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipe.review[':reviewId'].replies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecipeReviewReviewIdRepliesKey() {
  return ['recipe', '/recipe/review/:reviewId/replies', 'POST'] as const
}

export function usePostRecipeReviewReviewIdReplies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeReviewReviewIdRepliesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$post']>
        },
      ) => parseResponse(client.recipe.review[':reviewId'].replies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipeScanKey() {
  return ['recipe', '/recipe/scan', 'POST'] as const
}

export function usePostRecipeScan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.scan.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.recipe.scan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeScanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recipe.scan.$post> }) =>
        parseResponse(client.recipe.scan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeStepsIdKey(
  args: InferRequestType<(typeof client.recipe.steps)[':id']['$get']>,
) {
  return ['recipe', '/recipe/steps/:id', args] as const
}

export function useGetRecipeStepsId<TError = unknown>(
  args: InferRequestType<(typeof client.recipe.steps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecipeStepsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.steps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeStepsId<TError = unknown>(
  args: InferRequestType<(typeof client.recipe.steps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecipeStepsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.steps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeIdKey(args: InferRequestType<(typeof client.recipe)[':id']['$get']>) {
  return ['recipe', '/recipe/:id', args] as const
}

export function useGetRecipeId<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeId<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRecipeIdKey() {
  return ['recipe', '/recipe/:id', 'DELETE'] as const
}

export function useDeleteRecipeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRecipeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.recipe)[':id']['$delete']> },
      ) => parseResponse(client.recipe[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeIdZapKey(
  args: InferRequestType<(typeof client.recipe)[':id']['zap']['$get']>,
) {
  return ['recipe', '/recipe/:id/zap', args] as const
}

export function useGetRecipeIdZap<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':id']['zap']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecipeIdZapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':id'].zap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeIdZap<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':id']['zap']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecipeIdZapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':id'].zap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecipeRecipeIdFeedbackKey() {
  return ['recipe', '/recipe/:recipeId/feedback', 'POST'] as const
}

export function usePostRecipeRecipeIdFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['feedback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe)[':recipeId']['feedback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeRecipeIdFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.recipe)[':recipeId']['feedback']['$post']> },
      ) => parseResponse(client.recipe[':recipeId'].feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipeRecipeIdImageKey() {
  return ['recipe', '/recipe/:recipeId/image', 'POST'] as const
}

export function usePostRecipeRecipeIdImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['image']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe)[':recipeId']['image']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeRecipeIdImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.recipe)[':recipeId']['image']['$post']> },
      ) => parseResponse(client.recipe[':recipeId'].image.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeRecipeIdImagesKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['images']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/images', args] as const
}

export function useGetRecipeRecipeIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['images']['$get']>>
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
        ? getGetRecipeRecipeIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeRecipeIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['images']['$get']>>
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
        ? getGetRecipeRecipeIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecipeRecipeIdNoteKey() {
  return ['recipe', '/recipe/:recipeId/note', 'POST'] as const
}

export function usePostRecipeRecipeIdNote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe)[':recipeId']['note']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeRecipeIdNoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.recipe)[':recipeId']['note']['$post']> },
      ) => parseResponse(client.recipe[':recipeId'].note.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeRecipeIdNoteNoteIdKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/note/:noteId', args] as const
}

export function useGetRecipeRecipeIdNoteNoteId<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>>
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
        ? getGetRecipeRecipeIdNoteNoteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipe[':recipeId'].note[':noteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeRecipeIdNoteNoteId<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>>
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
        ? getGetRecipeRecipeIdNoteNoteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipe[':recipeId'].note[':noteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRecipeRecipeIdNoteNoteIdKey() {
  return ['recipe', '/recipe/:recipeId/note/:noteId', 'PUT'] as const
}

export function usePutRecipeRecipeIdNoteNoteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecipeRecipeIdNoteNoteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$put']>
        },
      ) => parseResponse(client.recipe[':recipeId'].note[':noteId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRecipeRecipeIdNoteNoteIdKey() {
  return ['recipe', '/recipe/:recipeId/note/:noteId', 'DELETE'] as const
}

export function useDeleteRecipeRecipeIdNoteNoteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRecipeRecipeIdNoteNoteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$delete']>
        },
      ) => parseResponse(client.recipe[':recipeId'].note[':noteId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeRecipeIdNotesKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['notes']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/notes', args] as const
}

export function useGetRecipeRecipeIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['notes']['$get']>>
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
        ? getGetRecipeRecipeIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeRecipeIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['notes']['$get']>>
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
        ? getGetRecipeRecipeIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeRecipeIdPhotosKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['photos']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/photos', args] as const
}

export function useGetRecipeRecipeIdPhotos<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['photos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['photos']['$get']>>
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
        ? getGetRecipeRecipeIdPhotosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['photos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].photos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeRecipeIdPhotos<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['photos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['photos']['$get']>>
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
        ? getGetRecipeRecipeIdPhotosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['photos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].photos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeRecipeIdRelatedKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['related']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/related', args] as const
}

export function useGetRecipeRecipeIdRelated<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['related']['$get']>>
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
        ? getGetRecipeRecipeIdRelatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['related']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeRecipeIdRelated<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['related']['$get']>>
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
        ? getGetRecipeRecipeIdRelatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['related']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeRecipeIdReviewKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/review', args] as const
}

export function useGetRecipeRecipeIdReview<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$get']>>
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
        ? getGetRecipeRecipeIdReviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].review.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeRecipeIdReview<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$get']>>
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
        ? getGetRecipeRecipeIdReviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].review.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecipeRecipeIdReviewKey() {
  return ['recipe', '/recipe/:recipeId/review', 'POST'] as const
}

export function usePostRecipeRecipeIdReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe)[':recipeId']['review']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeRecipeIdReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.recipe)[':recipeId']['review']['$post']> },
      ) => parseResponse(client.recipe[':recipeId'].review.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeRecipeIdReviewReviewIdKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/review/:reviewId', args] as const
}

export function useGetRecipeRecipeIdReviewReviewId<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>>
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
        ? getGetRecipeRecipeIdReviewReviewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipe[':recipeId'].review[':reviewId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeRecipeIdReviewReviewId<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>>
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
        ? getGetRecipeRecipeIdReviewReviewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipe[':recipeId'].review[':reviewId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRecipeRecipeIdReviewReviewIdKey() {
  return ['recipe', '/recipe/:recipeId/review/:reviewId', 'PUT'] as const
}

export function usePutRecipeRecipeIdReviewReviewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecipeRecipeIdReviewReviewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$put']>
        },
      ) => parseResponse(client.recipe[':recipeId'].review[':reviewId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRecipeRecipeIdReviewReviewIdKey() {
  return ['recipe', '/recipe/:recipeId/review/:reviewId', 'DELETE'] as const
}

export function useDeleteRecipeRecipeIdReviewReviewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRecipeRecipeIdReviewReviewIdKey()
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
            (typeof client.recipe)[':recipeId']['review'][':reviewId']['$delete']
          >
        },
      ) =>
        parseResponse(client.recipe[':recipeId'].review[':reviewId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeRecipeIdReviewsKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['reviews']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/reviews', args] as const
}

export function useGetRecipeRecipeIdReviews<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>
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
        ? getGetRecipeRecipeIdReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeRecipeIdReviews<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>
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
        ? getGetRecipeRecipeIdReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeRecipeIdScansKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['scans']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/scans', args] as const
}

export function useGetRecipeRecipeIdScans<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['scans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['scans']['$get']>>
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
        ? getGetRecipeRecipeIdScansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['scans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].scans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeRecipeIdScans<TError = unknown>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['scans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['scans']['$get']>>
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
        ? getGetRecipeRecipeIdScansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipe)[':recipeId']['scans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe[':recipeId'].scans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesKey(args: InferRequestType<typeof client.recipes.$get>) {
  return ['recipes', '/recipes', args] as const
}

export function useGetRecipes<TError = unknown>(
  args: InferRequestType<typeof client.recipes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.recipes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRecipes<TError = unknown>(
  args: InferRequestType<typeof client.recipes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.recipes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRecipesRandomKey() {
  return ['recipes', '/recipes/random'] as const
}

export function useGetRecipesRandom<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesRandomKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.random.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesRandom<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesRandomKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.random.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesRavesKey(args: InferRequestType<typeof client.recipes.raves.$get>) {
  return ['recipes', '/recipes/raves', args] as const
}

export function useGetRecipesRaves<TError = unknown>(
  args: InferRequestType<typeof client.recipes.raves.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesRavesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.raves.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesRaves<TError = unknown>(
  args: InferRequestType<typeof client.recipes.raves.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesRavesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.raves.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesRecentviewsKey(
  args: InferRequestType<typeof client.recipes.recentviews.$get>,
) {
  return ['recipes', '/recipes/recentviews', args] as const
}

export function useGetRecipesRecentviews<TError = unknown>(
  args: InferRequestType<typeof client.recipes.recentviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>
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
        ? getGetRecipesRecentviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.recentviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesRecentviews<TError = unknown>(
  args: InferRequestType<typeof client.recipes.recentviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>
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
        ? getGetRecipesRecentviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.recentviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesTop25randomKey(
  args: InferRequestType<typeof client.recipes.top25random.$get>,
) {
  return ['recipes', '/recipes/top25random', args] as const
}

export function useGetRecipesTop25random<TError = unknown>(
  args: InferRequestType<typeof client.recipes.top25random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>
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
        ? getGetRecipesTop25randomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.top25random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesTop25random<TError = unknown>(
  args: InferRequestType<typeof client.recipes.top25random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>
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
        ? getGetRecipesTop25randomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.top25random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdKey(args: InferRequestType<(typeof client.recipes)[':id']['$get']>) {
  return ['recipes', '/recipes/:id', args] as const
}

export function useGetRecipesId<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecipesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesId<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecipesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
