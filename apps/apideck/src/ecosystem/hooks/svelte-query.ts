import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEcosystemsKey() {
  return ['ecosystems'] as const
}

export function getEcosystemsEcosystemIdQueryKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id', args] as const
}

export function getEcosystemsEcosystemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdQueryKey>
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
      ...getEcosystemsEcosystemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdCategoriesQueryKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/categories', args] as const
}

export function getEcosystemsEcosystemIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCategoriesQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdCategoriesQueryKey>
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
      ...getEcosystemsEcosystemIdCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdCategoriesIdQueryKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/categories/:id', args] as const
}

export function getEcosystemsEcosystemIdCategoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCategoriesIdQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdCategoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].categories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdCategoriesIdQueryKey>
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
      ...getEcosystemsEcosystemIdCategoriesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdCategoriesIdListingsQueryKey(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/categories/:id/listings', args] as const
}

export function getEcosystemsEcosystemIdCategoriesIdListingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCategoriesIdListingsQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdCategoriesIdListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].categories[':id'].listings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdCategoriesIdListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdCategoriesIdListingsQueryKey>
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
      ...getEcosystemsEcosystemIdCategoriesIdListingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdCollectionsQueryKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/collections', args] as const
}

export function getEcosystemsEcosystemIdCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCollectionsQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdCollectionsQueryKey>
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
      ...getEcosystemsEcosystemIdCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdCollectionsIdQueryKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/collections/:id', args] as const
}

export function getEcosystemsEcosystemIdCollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCollectionsIdQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].collections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdCollectionsIdQueryKey>
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
      ...getEcosystemsEcosystemIdCollectionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdCollectionsIdListingsQueryKey(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/collections/:id/listings', args] as const
}

export function getEcosystemsEcosystemIdCollectionsIdListingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCollectionsIdListingsQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdCollectionsIdListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].collections[':id'].listings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdCollectionsIdListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdCollectionsIdListingsQueryKey>
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
      ...getEcosystemsEcosystemIdCollectionsIdListingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdListingsQueryKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/listings', args] as const
}

export function getEcosystemsEcosystemIdListingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdListingsQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].listings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdListingsQueryKey>
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
      ...getEcosystemsEcosystemIdListingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdListingsIdQueryKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/listings/:id', args] as const
}

export function getEcosystemsEcosystemIdListingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdListingsIdQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdListingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].listings[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdListingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdListingsIdQueryKey>
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
      ...getEcosystemsEcosystemIdListingsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdProductsQueryKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/products', args] as const
}

export function getEcosystemsEcosystemIdProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdProductsQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdProductsQueryKey>
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
      ...getEcosystemsEcosystemIdProductsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdProductsIdQueryKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/products/:id', args] as const
}

export function getEcosystemsEcosystemIdProductsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdProductsIdQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdProductsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].products[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdProductsIdQueryKey>
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
      ...getEcosystemsEcosystemIdProductsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEcosystemsEcosystemIdProductsIdListingsQueryKey(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/products/:id/listings', args] as const
}

export function getEcosystemsEcosystemIdProductsIdListingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdProductsIdListingsQueryKey>
  >({
    queryKey: getEcosystemsEcosystemIdProductsIdListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].products[':id'].listings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEcosystemsEcosystemIdProductsIdListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcosystemsEcosystemIdProductsIdListingsQueryKey>
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
      ...getEcosystemsEcosystemIdProductsIdListingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
