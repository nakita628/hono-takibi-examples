import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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
  args: InferRequestType<(typeof client.collection)[':id']['$get']>,
) {
  return ['collection', '/collection/:id', args] as const
}

export function getCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collection)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionIdQueryKey>
  >({
    queryKey: getCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collection[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCollectionId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collection)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCollectionIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCollectionIdMetaQueryKey(
  args: InferRequestType<(typeof client.collection)[':id']['meta']['$get']>,
) {
  return ['collection', '/collection/:id/meta', args] as const
}

export function getCollectionIdMetaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collection)[':id']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionIdMetaQueryKey>
  >({
    queryKey: getCollectionIdMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collection[':id'].meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionIdMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collection)[':id']['meta']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collection)[':id']['meta']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCollectionIdMetaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionIdMetaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCollectionsQueryKey(args: InferRequestType<typeof client.collections.$get>) {
  return ['collections', '/collections', args] as const
}

export function getCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.collections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >({
    queryKey: getCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.collections.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCollectionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGrocerylistQueryKey() {
  return ['grocerylist', '/grocerylist'] as const
}

export function getGrocerylistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGrocerylistQueryKey>
  >({
    queryKey: getGrocerylistQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.grocerylist.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGrocerylist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGrocerylistQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGrocerylistQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createDeleteGrocerylist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.$delete>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGrocerylistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostGrocerylistClearcheckedlines<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGrocerylistClearcheckedlinesMutationOptions<
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

export function createPostGrocerylistDepartment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.department.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.grocerylist.department.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGrocerylistDepartmentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostGrocerylistItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.item.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.grocerylist.item.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGrocerylistItemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutGrocerylistItemGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGrocerylistItemGuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteGrocerylistItemGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGrocerylistItemGuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostGrocerylistLine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.line.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.grocerylist.line.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGrocerylistLineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostGrocerylistRecipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.recipe.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.grocerylist.recipe.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGrocerylistRecipeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostGrocerylistSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.grocerylist.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.grocerylist.sync.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGrocerylistSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostImageAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.avatar.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostImageAvatarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getMeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$put>>>>>,
          TError,
          InferRequestType<typeof client.me.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutMePersonal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.personal.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.personal.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMePersonalMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutMePreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.preferences.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMePreferencesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMePreferencesOptionsQueryKey() {
  return ['me', '/me/preferences/options'] as const
}

export function getMePreferencesOptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePreferencesOptionsQueryKey>
  >({
    queryKey: getMePreferencesOptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.preferences.options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMePreferencesOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.preferences.options.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMePreferencesOptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMePreferencesOptionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutMeProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.profile.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.profile.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMeProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMeSkinnyQueryKey() {
  return ['me', '/me/skinny'] as const
}

export function getMeSkinnyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeSkinnyQueryKey>
  >({
    queryKey: getMeSkinnyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.skinny.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeSkinny<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.skinny.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeSkinnyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeSkinnyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutRecipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.$put>>>>>,
          TError,
          InferRequestType<typeof client.recipe.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRecipeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRecipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.recipe.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRecipeAutocompleteQueryKey(
  args: InferRequestType<typeof client.recipe.autocomplete.$get>,
) {
  return ['recipe', '/recipe/autocomplete', args] as const
}

export function getRecipeAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipe.autocomplete.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeAutocompleteQueryKey>
  >({
    queryKey: getRecipeAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.autocomplete.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipeAutocomplete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipe.autocomplete.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipeAutocompleteQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipeAutocompleteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRecipeAutocompleteAllQueryKey(
  args: InferRequestType<typeof client.recipe.autocomplete.all.$get>,
) {
  return ['recipe', '/recipe/autocomplete/all', args] as const
}

export function getRecipeAutocompleteAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipe.autocomplete.all.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeAutocompleteAllQueryKey>
  >({
    queryKey: getRecipeAutocompleteAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.autocomplete.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeAutocompleteAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipe.autocomplete.all.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.all.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipeAutocompleteAllQueryKey>
        >
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
      ...getRecipeAutocompleteAllQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRecipeAutocompleteMineQueryKey(
  args: InferRequestType<typeof client.recipe.autocomplete.mine.$get>,
) {
  return ['recipe', '/recipe/autocomplete/mine', args] as const
}

export function getRecipeAutocompleteMineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipe.autocomplete.mine.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeAutocompleteMineQueryKey>
  >({
    queryKey: getRecipeAutocompleteMineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.autocomplete.mine.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeAutocompleteMine<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipe.autocomplete.mine.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.autocomplete.mine.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipeAutocompleteMineQueryKey>
        >
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
      ...getRecipeAutocompleteMineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRecipeCategoriesQueryKey() {
  return ['recipe', '/recipe/categories'] as const
}

export function getRecipeCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeCategoriesQueryKey>
  >({
    queryKey: getRecipeCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.categories.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipeCategoriesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipeCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRecipeGetActiveRecipeQueryKey(
  args: InferRequestType<typeof client.recipe.get.active.recipe.$get>,
) {
  return ['recipe', '/recipe/get/active/recipe', args] as const
}

export function getRecipeGetActiveRecipeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipe.get.active.recipe.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeGetActiveRecipeQueryKey>
  >({
    queryKey: getRecipeGetActiveRecipeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.get.active.recipe.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeGetActiveRecipe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipe.get.active.recipe.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.active.recipe.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipeGetActiveRecipeQueryKey>
        >
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
      ...getRecipeGetActiveRecipeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRecipeGetSavedStep<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.saved.step.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.get.saved.step.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeGetSavedStepMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRecipeGetStepNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.get.step.number.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.get.step.number.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeGetStepNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRecipePhotosPendingQueryKey() {
  return ['recipe', '/recipe/photos/pending'] as const
}

export function getRecipePhotosPendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipePhotosPendingQueryKey>
  >({
    queryKey: getRecipePhotosPendingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.photos.pending.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipePhotosPending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.photos.pending.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipePhotosPendingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipePhotosPendingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostRecipePostStep<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.post.step.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.post.step.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipePostStepMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutRecipeReviewRepliesReplyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRecipeReviewRepliesReplyIdMutationOptions<
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

export function createDeleteRecipeReviewRepliesReplyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRecipeReviewRepliesReplyIdMutationOptions<
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

export function getRecipeReviewReviewIdQueryKey(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['$get']>,
) {
  return ['recipe', '/recipe/review/:reviewId', args] as const
}

export function getRecipeReviewReviewIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeReviewReviewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.review[':reviewId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeReviewReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe.review)[':reviewId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getRecipeReviewReviewIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRecipeReviewReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRecipeReviewReviewIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRecipeReviewReviewIdRepliesQueryKey(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>,
) {
  return ['recipe', '/recipe/review/:reviewId/replies', args] as const
}

export function getRecipeReviewReviewIdRepliesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeReviewReviewIdRepliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.review[':reviewId'].replies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeReviewReviewIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe.review)[':reviewId']['replies']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getRecipeReviewReviewIdRepliesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRecipeReviewReviewIdReplies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeReviewReviewIdRepliesMutationOptions<
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

export function createPostRecipeScan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipe.scan.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.recipe.scan.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeScanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRecipeStepsIdQueryKey(
  args: InferRequestType<(typeof client.recipe.steps)[':id']['$get']>,
) {
  return ['recipe', '/recipe/steps/:id', args] as const
}

export function getRecipeStepsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe.steps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeStepsIdQueryKey>
  >({
    queryKey: getRecipeStepsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.steps[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipeStepsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe.steps)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipe.steps)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipeStepsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipeStepsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRecipeIdQueryKey(args: InferRequestType<(typeof client.recipe)[':id']['$get']>) {
  return ['recipe', '/recipe/:id', args] as const
}

export function getRecipeIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.recipe)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeIdQueryKey>
  >({
    queryKey: getRecipeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipeIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteRecipeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.recipe)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRecipeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRecipeIdZapQueryKey(
  args: InferRequestType<(typeof client.recipe)[':id']['zap']['$get']>,
) {
  return ['recipe', '/recipe/:id/zap', args] as const
}

export function getRecipeIdZapQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe)[':id']['zap']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeIdZapQueryKey>
  >({
    queryKey: getRecipeIdZapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':id'].zap.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipeIdZap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':id']['zap']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipe)[':id']['zap']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipeIdZapQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipeIdZapQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostRecipeRecipeIdFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeRecipeIdFeedbackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRecipeRecipeIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeRecipeIdImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRecipeRecipeIdImagesQueryKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['images']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/images', args] as const
}

export function getRecipeRecipeIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeRecipeIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':recipeId'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeRecipeIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':recipeId']['images']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getRecipeRecipeIdImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRecipeRecipeIdNote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeRecipeIdNoteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRecipeRecipeIdNoteNoteIdQueryKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/note/:noteId', args] as const
}

export function getRecipeRecipeIdNoteNoteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeRecipeIdNoteNoteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':recipeId'].note[':noteId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeRecipeIdNoteNoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':recipeId']['note'][':noteId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getRecipeRecipeIdNoteNoteIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRecipeRecipeIdNoteNoteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRecipeRecipeIdNoteNoteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteRecipeRecipeIdNoteNoteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRecipeRecipeIdNoteNoteIdMutationOptions<
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

export function getRecipeRecipeIdNotesQueryKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['notes']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/notes', args] as const
}

export function getRecipeRecipeIdNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeRecipeIdNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':recipeId'].notes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeRecipeIdNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':recipeId']['notes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipeRecipeIdNotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRecipeRecipeIdPhotosQueryKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['photos']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/photos', args] as const
}

export function getRecipeRecipeIdPhotosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['photos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['photos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeRecipeIdPhotosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':recipeId'].photos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeRecipeIdPhotos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['photos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':recipeId']['photos']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getRecipeRecipeIdPhotosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRecipeRecipeIdRelatedQueryKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['related']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/related', args] as const
}

export function getRecipeRecipeIdRelatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeRecipeIdRelatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':recipeId'].related.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeRecipeIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':recipeId']['related']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getRecipeRecipeIdRelatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRecipeRecipeIdReviewQueryKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/review', args] as const
}

export function getRecipeRecipeIdReviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeRecipeIdReviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':recipeId'].review.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeRecipeIdReview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':recipeId']['review']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getRecipeRecipeIdReviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRecipeRecipeIdReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeRecipeIdReviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRecipeRecipeIdReviewReviewIdQueryKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/review/:reviewId', args] as const
}

export function getRecipeRecipeIdReviewReviewIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeRecipeIdReviewReviewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':recipeId'].review[':reviewId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeRecipeIdReviewReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':recipeId']['review'][':reviewId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getRecipeRecipeIdReviewReviewIdQueryKey>
        >
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
      ...getRecipeRecipeIdReviewReviewIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRecipeRecipeIdReviewReviewId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRecipeRecipeIdReviewReviewIdMutationOptions<
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

export function createDeleteRecipeRecipeIdReviewReviewId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRecipeRecipeIdReviewReviewIdMutationOptions<
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

export function getRecipeRecipeIdReviewsQueryKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['reviews']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/reviews', args] as const
}

export function getRecipeRecipeIdReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeRecipeIdReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':recipeId'].reviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeRecipeIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':recipeId']['reviews']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getRecipeRecipeIdReviewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRecipeRecipeIdScansQueryKey(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['scans']['$get']>,
) {
  return ['recipe', '/recipe/:recipeId/scans', args] as const
}

export function getRecipeRecipeIdScansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['scans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipe)[':recipeId']['scans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeRecipeIdScansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe[':recipeId'].scans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecipeRecipeIdScans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipe)[':recipeId']['scans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipe)[':recipeId']['scans']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipeRecipeIdScansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRecipesQueryKey(args: InferRequestType<typeof client.recipes.$get>) {
  return ['recipes', '/recipes', args] as const
}

export function getRecipesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecipesQueryKey>
  >({
    queryKey: getRecipesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRecipesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRecipesRandomQueryKey() {
  return ['recipes', '/recipes/random'] as const
}

export function getRecipesRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesRandomQueryKey>
  >({
    queryKey: getRecipesRandomQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.random.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipesRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRecipesRandomQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipesRandomQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRecipesRavesQueryKey(args: InferRequestType<typeof client.recipes.raves.$get>) {
  return ['recipes', '/recipes/raves', args] as const
}

export function getRecipesRavesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipes.raves.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesRavesQueryKey>
  >({
    queryKey: getRecipesRavesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.raves.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipesRaves<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipes.raves.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.raves.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRecipesRavesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipesRavesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRecipesRecentviewsQueryKey(
  args: InferRequestType<typeof client.recipes.recentviews.$get>,
) {
  return ['recipes', '/recipes/recentviews', args] as const
}

export function getRecipesRecentviewsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipes.recentviews.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesRecentviewsQueryKey>
  >({
    queryKey: getRecipesRecentviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.recentviews.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipesRecentviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipes.recentviews.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.recentviews.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipesRecentviewsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipesRecentviewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRecipesTop25randomQueryKey(
  args: InferRequestType<typeof client.recipes.top25random.$get>,
) {
  return ['recipes', '/recipes/top25random', args] as const
}

export function getRecipesTop25randomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipes.top25random.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesTop25randomQueryKey>
  >({
    queryKey: getRecipesTop25randomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.top25random.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipesTop25random<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipes.top25random.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.top25random.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipesTop25randomQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipesTop25randomQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRecipesIdQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['$get']>,
) {
  return ['recipes', '/recipes/:id', args] as const
}

export function getRecipesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.recipes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdQueryKey>
  >({
    queryKey: getRecipesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecipesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
