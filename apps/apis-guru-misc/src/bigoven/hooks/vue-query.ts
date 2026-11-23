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

export function getCollectionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collection)[':id']['$get']>>,
) {
  return ['collection', '/collection/:id', toValue(args)] as const
}

export function getCollectionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collection)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collection[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collection)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCollectionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collection[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionIdMetaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collection)[':id']['meta']['$get']>>,
) {
  return ['collection', '/collection/:id/meta', toValue(args)] as const
}

export function getCollectionIdMetaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collection)[':id']['meta']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionIdMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collection[':id'].meta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionIdMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collection)[':id']['meta']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCollectionIdMetaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionIdMetaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionIdMetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collection[':id'].meta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
) {
  return ['collections', '/collections', toValue(args)] as const
}

export function getCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          ReturnType<typeof getCollectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrocerylistQueryKey() {
  return ['grocerylist', '/grocerylist'] as const
}

export function getGrocerylistQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGrocerylistQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grocerylist.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGrocerylist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>
          >,
          ReturnType<typeof getGrocerylistQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGrocerylistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGrocerylistQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.grocerylist.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGrocerylistMutationKey() {
  return ['grocerylist', '/grocerylist', 'DELETE'] as const
}

export function getDeleteGrocerylistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteGrocerylistMutationKey(),
    async mutationFn() {
      return parseResponse(client.grocerylist.$delete(undefined, options))
    },
  })
}

export function useDeleteGrocerylist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$delete>>>>
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
  const mutationDefaults = getDeleteGrocerylistMutationOptions<TError, TOnMutateResult>(
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

export function getPostGrocerylistClearcheckedlinesMutationKey() {
  return ['grocerylist', '/grocerylist/clearcheckedlines', 'POST'] as const
}

export function getPostGrocerylistClearcheckedlinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.clearcheckedlines.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGrocerylistClearcheckedlinesMutationKey(),
    async mutationFn() {
      return parseResponse(client.grocerylist.clearcheckedlines.$post(undefined, options))
    },
  })
}

export function usePostGrocerylistClearcheckedlines<
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
                Awaited<ReturnType<typeof client.grocerylist.clearcheckedlines.$post>>
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
  const mutationDefaults = getPostGrocerylistClearcheckedlinesMutationOptions<
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

export function getPostGrocerylistDepartmentMutationKey() {
  return ['grocerylist', '/grocerylist/department', 'POST'] as const
}

export function getPostGrocerylistDepartmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.department.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.grocerylist.department.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGrocerylistDepartmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.grocerylist.department.$post>) {
      return parseResponse(client.grocerylist.department.$post(args, options))
    },
  })
}

export function usePostGrocerylistDepartment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.department.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.grocerylist.department.$post>,
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
  const mutationDefaults = getPostGrocerylistDepartmentMutationOptions<TError, TOnMutateResult>(
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

export function getPostGrocerylistItemMutationKey() {
  return ['grocerylist', '/grocerylist/item', 'POST'] as const
}

export function getPostGrocerylistItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.item.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.grocerylist.item.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGrocerylistItemMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.grocerylist.item.$post>) {
      return parseResponse(client.grocerylist.item.$post(args, options))
    },
  })
}

export function usePostGrocerylistItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.item.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.grocerylist.item.$post>,
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
  const mutationDefaults = getPostGrocerylistItemMutationOptions<TError, TOnMutateResult>(
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

export function getPutGrocerylistItemGuidMutationKey() {
  return ['grocerylist', '/grocerylist/item/:guid', 'PUT'] as const
}

export function getPutGrocerylistItemGuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.grocerylist.item)[':guid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.grocerylist.item)[':guid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGrocerylistItemGuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.grocerylist.item)[':guid']['$put']>) {
      return parseResponse(client.grocerylist.item[':guid'].$put(args, options))
    },
  })
}

export function usePutGrocerylistItemGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grocerylist.item)[':guid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.grocerylist.item)[':guid']['$put']>,
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
  const mutationDefaults = getPutGrocerylistItemGuidMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGrocerylistItemGuidMutationKey() {
  return ['grocerylist', '/grocerylist/item/:guid', 'DELETE'] as const
}

export function getDeleteGrocerylistItemGuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.grocerylist.item)[':guid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.grocerylist.item)[':guid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGrocerylistItemGuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.grocerylist.item)[':guid']['$delete']>) {
      return parseResponse(client.grocerylist.item[':guid'].$delete(args, options))
    },
  })
}

export function useDeleteGrocerylistItemGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grocerylist.item)[':guid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.grocerylist.item)[':guid']['$delete']>,
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
  const mutationDefaults = getDeleteGrocerylistItemGuidMutationOptions<TError, TOnMutateResult>(
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

export function getPostGrocerylistLineMutationKey() {
  return ['grocerylist', '/grocerylist/line', 'POST'] as const
}

export function getPostGrocerylistLineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.line.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.grocerylist.line.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGrocerylistLineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.grocerylist.line.$post>) {
      return parseResponse(client.grocerylist.line.$post(args, options))
    },
  })
}

export function usePostGrocerylistLine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.line.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.grocerylist.line.$post>,
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
  const mutationDefaults = getPostGrocerylistLineMutationOptions<TError, TOnMutateResult>(
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

export function getPostGrocerylistRecipeMutationKey() {
  return ['grocerylist', '/grocerylist/recipe', 'POST'] as const
}

export function getPostGrocerylistRecipeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.recipe.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.grocerylist.recipe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGrocerylistRecipeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.grocerylist.recipe.$post>) {
      return parseResponse(client.grocerylist.recipe.$post(args, options))
    },
  })
}

export function usePostGrocerylistRecipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.recipe.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.grocerylist.recipe.$post>,
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
  const mutationDefaults = getPostGrocerylistRecipeMutationOptions<TError, TOnMutateResult>(
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

export function getPostGrocerylistSyncMutationKey() {
  return ['grocerylist', '/grocerylist/sync', 'POST'] as const
}

export function getPostGrocerylistSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.grocerylist.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGrocerylistSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.grocerylist.sync.$post>) {
      return parseResponse(client.grocerylist.sync.$post(args, options))
    },
  })
}

export function usePostGrocerylistSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.grocerylist.sync.$post>,
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
  const mutationDefaults = getPostGrocerylistSyncMutationOptions<TError, TOnMutateResult>(
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

export function getPostImageAvatarMutationKey() {
  return ['image', '/image/avatar', 'POST'] as const
}

export function getPostImageAvatarMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.avatar.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostImageAvatarMutationKey(),
    async mutationFn() {
      return parseResponse(client.image.avatar.$post(undefined, options))
    },
  })
}

export function usePostImageAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.avatar.$post>>>>
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
  const mutationDefaults = getPostImageAvatarMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMeMutationKey() {
  return ['me', '/me', 'PUT'] as const
}

export function getPutMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$put>>>>>,
    TError,
    InferRequestType<typeof client.me.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.$put>) {
      return parseResponse(client.me.$put(args, options))
    },
  })
}

export function usePutMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$put>>>>>,
          TError,
          InferRequestType<typeof client.me.$put>,
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
  const mutationDefaults = getPutMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutMePersonalMutationKey() {
  return ['me', '/me/personal', 'PUT'] as const
}

export function getPutMePersonalMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.personal.$put>>>>>,
    TError,
    InferRequestType<typeof client.me.personal.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMePersonalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.personal.$put>) {
      return parseResponse(client.me.personal.$put(args, options))
    },
  })
}

export function usePutMePersonal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.personal.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.personal.$put>,
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
  const mutationDefaults = getPutMePersonalMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutMePreferencesMutationKey() {
  return ['me', '/me/preferences', 'PUT'] as const
}

export function getPutMePreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.me.preferences.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMePreferencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.preferences.$put>) {
      return parseResponse(client.me.preferences.$put(args, options))
    },
  })
}

export function usePutMePreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.preferences.$put>,
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
  const mutationDefaults = getPutMePreferencesMutationOptions<TError, TOnMutateResult>(
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

export function getMePreferencesOptionsQueryKey() {
  return ['me', '/me/preferences/options'] as const
}

export function getMePreferencesOptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMePreferencesOptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.preferences.options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMePreferencesOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>
            >
          >,
          ReturnType<typeof getMePreferencesOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePreferencesOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMePreferencesOptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.preferences.options.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMeProfileMutationKey() {
  return ['me', '/me/profile', 'PUT'] as const
}

export function getPutMeProfileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.profile.$put>>>>>,
    TError,
    InferRequestType<typeof client.me.profile.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMeProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.profile.$put>) {
      return parseResponse(client.me.profile.$put(args, options))
    },
  })
}

export function usePutMeProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.profile.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.profile.$put>,
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
  const mutationDefaults = getPutMeProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeSkinnyQueryKey() {
  return ['me', '/me/skinny'] as const
}

export function getMeSkinnyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeSkinnyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.skinny.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeSkinny<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>
          >,
          ReturnType<typeof getMeSkinnyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeSkinnyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeSkinnyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.skinny.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRecipeMutationKey() {
  return ['recipe', '/recipe', 'PUT'] as const
}

export function getPutRecipeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.$put>>>>>,
    TError,
    InferRequestType<typeof client.recipe.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipe.$put>) {
      return parseResponse(client.recipe.$put(args, options))
    },
  })
}

export function usePutRecipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.$put>>>>>,
          TError,
          InferRequestType<typeof client.recipe.$put>,
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
  const mutationDefaults = getPutRecipeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRecipeMutationKey() {
  return ['recipe', '/recipe', 'POST'] as const
}

export function getPostRecipeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.$post>>>>>,
    TError,
    InferRequestType<typeof client.recipe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipe.$post>) {
      return parseResponse(client.recipe.$post(args, options))
    },
  })
}

export function usePostRecipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.recipe.$post>,
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
  const mutationDefaults = getPostRecipeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRecipeAutocompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.autocomplete.$get>>,
) {
  return ['recipe', '/recipe/autocomplete', toValue(args)] as const
}

export function getRecipeAutocompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.autocomplete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.autocomplete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeAutocomplete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.autocomplete.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>
            >
          >,
          ReturnType<typeof getRecipeAutocompleteQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.autocomplete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeAutocompleteAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.autocomplete.all.$get>>,
) {
  return ['recipe', '/recipe/autocomplete/all', toValue(args)] as const
}

export function getRecipeAutocompleteAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.autocomplete.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeAutocompleteAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.autocomplete.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeAutocompleteAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.autocomplete.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
            >
          >,
          ReturnType<typeof getRecipeAutocompleteAllQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeAutocompleteAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeAutocompleteAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.autocomplete.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeAutocompleteMineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.autocomplete.mine.$get>>,
) {
  return ['recipe', '/recipe/autocomplete/mine', toValue(args)] as const
}

export function getRecipeAutocompleteMineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.autocomplete.mine.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeAutocompleteMineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.autocomplete.mine.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeAutocompleteMine<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.autocomplete.mine.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
            >
          >,
          ReturnType<typeof getRecipeAutocompleteMineQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeAutocompleteMineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeAutocompleteMineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.autocomplete.mine.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeCategoriesQueryKey() {
  return ['recipe', '/recipe/categories'] as const
}

export function getRecipeCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRecipeCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>
            >
          >,
          ReturnType<typeof getRecipeCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRecipeCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeGetActiveRecipeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.get.active.recipe.$get>>,
) {
  return ['recipe', '/recipe/get/active/recipe', toValue(args)] as const
}

export function getRecipeGetActiveRecipeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.get.active.recipe.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeGetActiveRecipeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.get.active.recipe.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeGetActiveRecipe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.get.active.recipe.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
            >
          >,
          ReturnType<typeof getRecipeGetActiveRecipeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeGetActiveRecipeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeGetActiveRecipeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.get.active.recipe.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRecipeGetSavedStepMutationKey() {
  return ['recipe', '/recipe/get/saved/step', 'POST'] as const
}

export function getPostRecipeGetSavedStepMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.saved.step.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipe.get.saved.step.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeGetSavedStepMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipe.get.saved.step.$post>) {
      return parseResponse(client.recipe.get.saved.step.$post(args, options))
    },
  })
}

export function usePostRecipeGetSavedStep<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.saved.step.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.get.saved.step.$post>,
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
  const mutationDefaults = getPostRecipeGetSavedStepMutationOptions<TError, TOnMutateResult>(
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

export function getPostRecipeGetStepNumberMutationKey() {
  return ['recipe', '/recipe/get/step/number', 'POST'] as const
}

export function getPostRecipeGetStepNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.step.number.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipe.get.step.number.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeGetStepNumberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipe.get.step.number.$post>) {
      return parseResponse(client.recipe.get.step.number.$post(args, options))
    },
  })
}

export function usePostRecipeGetStepNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.step.number.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.get.step.number.$post>,
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
  const mutationDefaults = getPostRecipeGetStepNumberMutationOptions<TError, TOnMutateResult>(
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

export function getRecipePhotosPendingQueryKey() {
  return ['recipe', '/recipe/photos/pending'] as const
}

export function getRecipePhotosPendingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRecipePhotosPendingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.photos.pending.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipePhotosPending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>
            >
          >,
          ReturnType<typeof getRecipePhotosPendingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipePhotosPendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRecipePhotosPendingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.photos.pending.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRecipePostStepMutationKey() {
  return ['recipe', '/recipe/post/step', 'POST'] as const
}

export function getPostRecipePostStepMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.post.step.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.recipe.post.step.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipePostStepMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipe.post.step.$post>) {
      return parseResponse(client.recipe.post.step.$post(args, options))
    },
  })
}

export function usePostRecipePostStep<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.post.step.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.post.step.$post>,
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
  const mutationDefaults = getPostRecipePostStepMutationOptions<TError, TOnMutateResult>(
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

export function getPutRecipeReviewRepliesReplyIdMutationKey() {
  return ['recipe', '/recipe/review/replies/:replyId', 'PUT'] as const
}

export function getPutRecipeReviewRepliesReplyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe.review.replies)[':replyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipeReviewRepliesReplyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$put']>,
    ) {
      return parseResponse(client.recipe.review.replies[':replyId'].$put(args, options))
    },
  })
}

export function usePutRecipeReviewRepliesReplyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe.review.replies)[':replyId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$put']>,
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
  const mutationDefaults = getPutRecipeReviewRepliesReplyIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRecipeReviewRepliesReplyIdMutationKey() {
  return ['recipe', '/recipe/review/replies/:replyId', 'DELETE'] as const
}

export function getDeleteRecipeReviewRepliesReplyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe.review.replies)[':replyId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecipeReviewRepliesReplyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$delete']>,
    ) {
      return parseResponse(client.recipe.review.replies[':replyId'].$delete(args, options))
    },
  })
}

export function useDeleteRecipeReviewRepliesReplyId<
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
                Awaited<ReturnType<(typeof client.recipe.review.replies)[':replyId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe.review.replies)[':replyId']['$delete']>,
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
  const mutationDefaults = getDeleteRecipeReviewRepliesReplyIdMutationOptions<
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

export function getRecipeReviewReviewIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe.review)[':reviewId']['$get']>>,
) {
  return ['recipe', '/recipe/review/:reviewId', toValue(args)] as const
}

export function getRecipeReviewReviewIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe.review)[':reviewId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeReviewReviewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.review[':reviewId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeReviewReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe.review)[':reviewId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeReviewReviewIdQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeReviewReviewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeReviewReviewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.review[':reviewId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRecipeReviewReviewIdMutationKey() {
  return ['recipe', '/recipe/review/:reviewId', 'PUT'] as const
}

export function getPutRecipeReviewReviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe.review)[':reviewId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipeReviewReviewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.recipe.review)[':reviewId']['$put']>) {
      return parseResponse(client.recipe.review[':reviewId'].$put(args, options))
    },
  })
}

export function usePutRecipeReviewReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe.review)[':reviewId']['$put']>,
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
  const mutationDefaults = getPutRecipeReviewReviewIdMutationOptions<TError, TOnMutateResult>(
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

export function getRecipeReviewReviewIdRepliesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>
  >,
) {
  return ['recipe', '/recipe/review/:reviewId/replies', toValue(args)] as const
}

export function getRecipeReviewReviewIdRepliesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeReviewReviewIdRepliesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.review[':reviewId'].replies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeReviewReviewIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeReviewReviewIdRepliesQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeReviewReviewIdRepliesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeReviewReviewIdRepliesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.review[':reviewId'].replies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRecipeReviewReviewIdRepliesMutationKey() {
  return ['recipe', '/recipe/review/:reviewId/replies', 'POST'] as const
}

export function getPostRecipeReviewReviewIdRepliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeReviewReviewIdRepliesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$post']>,
    ) {
      return parseResponse(client.recipe.review[':reviewId'].replies.$post(args, options))
    },
  })
}

export function usePostRecipeReviewReviewIdReplies<
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
                Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$post']>,
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
  const mutationDefaults = getPostRecipeReviewReviewIdRepliesMutationOptions<
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

export function getPostRecipeScanMutationKey() {
  return ['recipe', '/recipe/scan', 'POST'] as const
}

export function getPostRecipeScanMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.scan.$post>>>>>,
    TError,
    InferRequestType<typeof client.recipe.scan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeScanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipe.scan.$post>) {
      return parseResponse(client.recipe.scan.$post(args, options))
    },
  })
}

export function usePostRecipeScan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.scan.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.recipe.scan.$post>,
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
  const mutationDefaults = getPostRecipeScanMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRecipeStepsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe.steps)[':id']['$get']>>,
) {
  return ['recipe', '/recipe/steps/:id', toValue(args)] as const
}

export function getRecipeStepsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe.steps)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeStepsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.steps[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeStepsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe.steps)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRecipeStepsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeStepsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeStepsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.steps[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':id']['$get']>>,
) {
  return ['recipe', '/recipe/:id', toValue(args)] as const
}

export function getRecipeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRecipeIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRecipeIdMutationKey() {
  return ['recipe', '/recipe/:id', 'DELETE'] as const
}

export function getDeleteRecipeIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecipeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.recipe)[':id']['$delete']>) {
      return parseResponse(client.recipe[':id'].$delete(args, options))
    },
  })
}

export function useDeleteRecipeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteRecipeIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRecipeIdZapQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':id']['zap']['$get']>>,
) {
  return ['recipe', '/recipe/:id/zap', toValue(args)] as const
}

export function getRecipeIdZapQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':id']['zap']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeIdZapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':id'].zap.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeIdZap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':id']['zap']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeIdZapQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeIdZapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeIdZapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':id'].zap.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRecipeRecipeIdFeedbackMutationKey() {
  return ['recipe', '/recipe/:recipeId/feedback', 'POST'] as const
}

export function getPostRecipeRecipeIdFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['feedback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe)[':recipeId']['feedback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeRecipeIdFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipe)[':recipeId']['feedback']['$post']>,
    ) {
      return parseResponse(client.recipe[':recipeId'].feedback.$post(args, options))
    },
  })
}

export function usePostRecipeRecipeIdFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['feedback']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe)[':recipeId']['feedback']['$post']>,
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
  const mutationDefaults = getPostRecipeRecipeIdFeedbackMutationOptions<TError, TOnMutateResult>(
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

export function getPostRecipeRecipeIdImageMutationKey() {
  return ['recipe', '/recipe/:recipeId/image', 'POST'] as const
}

export function getPostRecipeRecipeIdImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['image']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe)[':recipeId']['image']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeRecipeIdImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipe)[':recipeId']['image']['$post']>,
    ) {
      return parseResponse(client.recipe[':recipeId'].image.$post(args, options))
    },
  })
}

export function usePostRecipeRecipeIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['image']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe)[':recipeId']['image']['$post']>,
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
  const mutationDefaults = getPostRecipeRecipeIdImageMutationOptions<TError, TOnMutateResult>(
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

export function getRecipeRecipeIdImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['images']['$get']>>,
) {
  return ['recipe', '/recipe/:recipeId/images', toValue(args)] as const
}

export function getRecipeRecipeIdImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['images']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeRecipeIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':recipeId'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeRecipeIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['images']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['images']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeRecipeIdImagesQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeRecipeIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeRecipeIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':recipeId'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRecipeRecipeIdNoteMutationKey() {
  return ['recipe', '/recipe/:recipeId/note', 'POST'] as const
}

export function getPostRecipeRecipeIdNoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe)[':recipeId']['note']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeRecipeIdNoteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.recipe)[':recipeId']['note']['$post']>) {
      return parseResponse(client.recipe[':recipeId'].note.$post(args, options))
    },
  })
}

export function usePostRecipeRecipeIdNote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe)[':recipeId']['note']['$post']>,
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
  const mutationDefaults = getPostRecipeRecipeIdNoteMutationOptions<TError, TOnMutateResult>(
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

export function getRecipeRecipeIdNoteNoteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>
  >,
) {
  return ['recipe', '/recipe/:recipeId/note/:noteId', toValue(args)] as const
}

export function getRecipeRecipeIdNoteNoteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeRecipeIdNoteNoteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':recipeId'].note[':noteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeRecipeIdNoteNoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeRecipeIdNoteNoteIdQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeRecipeIdNoteNoteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeRecipeIdNoteNoteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':recipeId'].note[':noteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRecipeRecipeIdNoteNoteIdMutationKey() {
  return ['recipe', '/recipe/:recipeId/note/:noteId', 'PUT'] as const
}

export function getPutRecipeRecipeIdNoteNoteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipeRecipeIdNoteNoteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$put']>,
    ) {
      return parseResponse(client.recipe[':recipeId'].note[':noteId'].$put(args, options))
    },
  })
}

export function usePutRecipeRecipeIdNoteNoteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$put']>,
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
  const mutationDefaults = getPutRecipeRecipeIdNoteNoteIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRecipeRecipeIdNoteNoteIdMutationKey() {
  return ['recipe', '/recipe/:recipeId/note/:noteId', 'DELETE'] as const
}

export function getDeleteRecipeRecipeIdNoteNoteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecipeRecipeIdNoteNoteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$delete']>,
    ) {
      return parseResponse(client.recipe[':recipeId'].note[':noteId'].$delete(args, options))
    },
  })
}

export function useDeleteRecipeRecipeIdNoteNoteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$delete']>,
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
  const mutationDefaults = getDeleteRecipeRecipeIdNoteNoteIdMutationOptions<
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

export function getRecipeRecipeIdNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['notes']['$get']>>,
) {
  return ['recipe', '/recipe/:recipeId/notes', toValue(args)] as const
}

export function getRecipeRecipeIdNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['notes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeRecipeIdNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':recipeId'].notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeRecipeIdNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['notes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['notes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['notes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeRecipeIdNotesQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeRecipeIdNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeRecipeIdNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':recipeId'].notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeRecipeIdPhotosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['photos']['$get']>>,
) {
  return ['recipe', '/recipe/:recipeId/photos', toValue(args)] as const
}

export function getRecipeRecipeIdPhotosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['photos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeRecipeIdPhotosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':recipeId'].photos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeRecipeIdPhotos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['photos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['photos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['photos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['photos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeRecipeIdPhotosQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['photos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeRecipeIdPhotosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeRecipeIdPhotosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':recipeId'].photos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeRecipeIdRelatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['related']['$get']>>,
) {
  return ['recipe', '/recipe/:recipeId/related', toValue(args)] as const
}

export function getRecipeRecipeIdRelatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['related']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeRecipeIdRelatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':recipeId'].related.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeRecipeIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['related']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['related']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['related']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeRecipeIdRelatedQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['related']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeRecipeIdRelatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeRecipeIdRelatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':recipeId'].related.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeRecipeIdReviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['review']['$get']>>,
) {
  return ['recipe', '/recipe/:recipeId/review', toValue(args)] as const
}

export function getRecipeRecipeIdReviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['review']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeRecipeIdReviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':recipeId'].review.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeRecipeIdReview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['review']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeRecipeIdReviewQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeRecipeIdReviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeRecipeIdReviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':recipeId'].review.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRecipeRecipeIdReviewMutationKey() {
  return ['recipe', '/recipe/:recipeId/review', 'POST'] as const
}

export function getPostRecipeRecipeIdReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe)[':recipeId']['review']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeRecipeIdReviewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipe)[':recipeId']['review']['$post']>,
    ) {
      return parseResponse(client.recipe[':recipeId'].review.$post(args, options))
    },
  })
}

export function usePostRecipeRecipeIdReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe)[':recipeId']['review']['$post']>,
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
  const mutationDefaults = getPostRecipeRecipeIdReviewMutationOptions<TError, TOnMutateResult>(
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

export function getRecipeRecipeIdReviewReviewIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>
  >,
) {
  return ['recipe', '/recipe/:recipeId/review/:reviewId', toValue(args)] as const
}

export function getRecipeRecipeIdReviewReviewIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeRecipeIdReviewReviewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':recipeId'].review[':reviewId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeRecipeIdReviewReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>
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
                  ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRecipeRecipeIdReviewReviewIdQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeRecipeIdReviewReviewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeRecipeIdReviewReviewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':recipeId'].review[':reviewId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRecipeRecipeIdReviewReviewIdMutationKey() {
  return ['recipe', '/recipe/:recipeId/review/:reviewId', 'PUT'] as const
}

export function getPutRecipeRecipeIdReviewReviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipeRecipeIdReviewReviewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$put']>,
    ) {
      return parseResponse(client.recipe[':recipeId'].review[':reviewId'].$put(args, options))
    },
  })
}

export function usePutRecipeRecipeIdReviewReviewId<
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
                  ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$put']>,
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
  const mutationDefaults = getPutRecipeRecipeIdReviewReviewIdMutationOptions<
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

export function getDeleteRecipeRecipeIdReviewReviewIdMutationKey() {
  return ['recipe', '/recipe/:recipeId/review/:reviewId', 'DELETE'] as const
}

export function getDeleteRecipeRecipeIdReviewReviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecipeRecipeIdReviewReviewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$delete']>,
    ) {
      return parseResponse(client.recipe[':recipeId'].review[':reviewId'].$delete(args, options))
    },
  })
}

export function useDeleteRecipeRecipeIdReviewReviewId<
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
                  ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$delete']>,
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
  const mutationDefaults = getDeleteRecipeRecipeIdReviewReviewIdMutationOptions<
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

export function getRecipeRecipeIdReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>,
) {
  return ['recipe', '/recipe/:recipeId/reviews', toValue(args)] as const
}

export function getRecipeRecipeIdReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeRecipeIdReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':recipeId'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeRecipeIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeRecipeIdReviewsQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeRecipeIdReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeRecipeIdReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':recipeId'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeRecipeIdScansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['scans']['$get']>>,
) {
  return ['recipe', '/recipe/:recipeId/scans', toValue(args)] as const
}

export function getRecipeRecipeIdScansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['scans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeRecipeIdScansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe[':recipeId'].scans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeRecipeIdScans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['scans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipe)[':recipeId']['scans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['scans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':recipeId']['scans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeRecipeIdScansQueryKey>
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
          Awaited<ReturnType<(typeof client.recipe)[':recipeId']['scans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeRecipeIdScansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeRecipeIdScansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe[':recipeId'].scans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.$get>>,
) {
  return ['recipes', '/recipes', toValue(args)] as const
}

export function getRecipesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRecipes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
          >,
          ReturnType<typeof getRecipesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecipesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesRandomQueryKey() {
  return ['recipes', '/recipes/random'] as const
}

export function getRecipesRandomQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRecipesRandomQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.random.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRecipesRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
          >,
          ReturnType<typeof getRecipesRandomQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesRandomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRecipesRandomQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.random.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesRavesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.raves.$get>>,
) {
  return ['recipes', '/recipes/raves', toValue(args)] as const
}

export function getRecipesRavesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.raves.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesRavesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.raves.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesRaves<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.raves.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
          >,
          ReturnType<typeof getRecipesRavesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesRavesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesRavesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.raves.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesRecentviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.recentviews.$get>>,
) {
  return ['recipes', '/recipes/recentviews', toValue(args)] as const
}

export function getRecipesRecentviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.recentviews.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesRecentviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.recentviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesRecentviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.recentviews.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>
            >
          >,
          ReturnType<typeof getRecipesRecentviewsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesRecentviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesRecentviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.recentviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesTop25randomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.top25random.$get>>,
) {
  return ['recipes', '/recipes/top25random', toValue(args)] as const
}

export function getRecipesTop25randomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.top25random.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesTop25randomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.top25random.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesTop25random<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.top25random.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>
            >
          >,
          ReturnType<typeof getRecipesTop25randomQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesTop25randomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesTop25randomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.top25random.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['$get']>>,
) {
  return ['recipes', '/recipes/:id', toValue(args)] as const
}

export function getRecipesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRecipesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
