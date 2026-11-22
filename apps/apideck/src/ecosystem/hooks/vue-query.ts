import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEcosystemsKey() {
  return ['ecosystems'] as const
}

export function getEcosystemsEcosystemIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id', toValue(args)] as const
}

export function getEcosystemsEcosystemIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/categories', toValue(args)] as const
}

export function getEcosystemsEcosystemIdCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>
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
                  ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdCategoriesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/categories/:id', toValue(args)] as const
}

export function getEcosystemsEcosystemIdCategoriesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdCategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].categories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdCategoriesId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
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
                    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']
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
                    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdCategoriesIdQueryKey>
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
            ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdCategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].categories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdCategoriesIdListingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
    >
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/categories/:id/listings', toValue(args)] as const
}

export function getEcosystemsEcosystemIdCategoriesIdListingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdCategoriesIdListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].categories[':id'].listings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdCategoriesIdListings<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
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
                    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
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
                    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdCategoriesIdListingsQueryKey>
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
              (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCategoriesIdListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdCategoriesIdListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].categories[':id'].listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/collections', toValue(args)] as const
}

export function getEcosystemsEcosystemIdCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdCollectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdCollectionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/collections/:id', toValue(args)] as const
}

export function getEcosystemsEcosystemIdCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].collections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdCollectionsId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
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
                    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']
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
                    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdCollectionsIdQueryKey>
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
            ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].collections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdCollectionsIdListingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
    >
  >,
) {
  return [
    'ecosystems',
    '/ecosystems/:ecosystem_id/collections/:id/listings',
    toValue(args),
  ] as const
}

export function getEcosystemsEcosystemIdCollectionsIdListingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdCollectionsIdListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].collections[':id'].listings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdCollectionsIdListings<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
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
                    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
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
                    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdCollectionsIdListingsQueryKey>
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
              (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdCollectionsIdListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdCollectionsIdListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].collections[':id'].listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdListingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/listings', toValue(args)] as const
}

export function getEcosystemsEcosystemIdListingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].listings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdListingsQueryKey>
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
          Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdListingsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/listings/:id', toValue(args)] as const
}

export function getEcosystemsEcosystemIdListingsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdListingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].listings[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdListingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdListingsIdQueryKey>
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
            ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdListingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdListingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].listings[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdProductsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/products', toValue(args)] as const
}

export function getEcosystemsEcosystemIdProductsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdProductsQueryKey>
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
          Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdProductsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/products/:id', toValue(args)] as const
}

export function getEcosystemsEcosystemIdProductsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdProductsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].products[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdProductsIdQueryKey>
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
            ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdProductsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdProductsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].products[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcosystemsEcosystemIdProductsIdListingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
    >
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/products/:id/listings', toValue(args)] as const
}

export function getEcosystemsEcosystemIdProductsIdListingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcosystemsEcosystemIdProductsIdListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecosystems[':ecosystem_id'].products[':id'].listings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcosystemsEcosystemIdProductsIdListings<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
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
                    (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
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
                    (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEcosystemsEcosystemIdProductsIdListingsQueryKey>
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
              (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcosystemsEcosystemIdProductsIdListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcosystemsEcosystemIdProductsIdListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecosystems[':ecosystem_id'].products[':id'].listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
