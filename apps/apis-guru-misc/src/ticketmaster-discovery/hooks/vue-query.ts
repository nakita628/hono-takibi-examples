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

export function getDiscoveryKey() {
  return ['discovery'] as const
}

export function getDiscoveryV2AttractionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.attractions.$get>>,
) {
  return ['discovery', '/discovery/v2/attractions', toValue(args)] as const
}

export function getDiscoveryV2AttractionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.attractions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2AttractionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.attractions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2Attractions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.attractions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
            >
          >,
          ReturnType<typeof getDiscoveryV2AttractionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2AttractionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2AttractionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.attractions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2AttractionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discovery.v2.attractions)[':id']['$get']>>,
) {
  return ['discovery', '/discovery/v2/attractions/:id', toValue(args)] as const
}

export function getDiscoveryV2AttractionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discovery.v2.attractions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2AttractionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.attractions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2AttractionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.attractions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discovery.v2.attractions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discovery.v2.attractions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discovery.v2.attractions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoveryV2AttractionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discovery.v2.attractions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2AttractionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2AttractionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.attractions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2ClassificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.classifications.$get>>,
) {
  return ['discovery', '/discovery/v2/classifications', toValue(args)] as const
}

export function getDiscoveryV2ClassificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.classifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2ClassificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.classifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2Classifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.classifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>
              >
            >
          >,
          ReturnType<typeof getDiscoveryV2ClassificationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2ClassificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2ClassificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.classifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2ClassificationsGenresIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>
  >,
) {
  return ['discovery', '/discovery/v2/classifications/genres/:id', toValue(args)] as const
}

export function getDiscoveryV2ClassificationsGenresIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2ClassificationsGenresIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.classifications.genres[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2ClassificationsGenresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>
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
                  ReturnType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDiscoveryV2ClassificationsGenresIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2ClassificationsGenresIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2ClassificationsGenresIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.classifications.genres[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2ClassificationsSegmentsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>
  >,
) {
  return ['discovery', '/discovery/v2/classifications/segments/:id', toValue(args)] as const
}

export function getDiscoveryV2ClassificationsSegmentsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2ClassificationsSegmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.classifications.segments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2ClassificationsSegmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>
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
                  ReturnType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDiscoveryV2ClassificationsSegmentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2ClassificationsSegmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2ClassificationsSegmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.classifications.segments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2ClassificationsSubgenresIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>
  >,
) {
  return ['discovery', '/discovery/v2/classifications/subgenres/:id', toValue(args)] as const
}

export function getDiscoveryV2ClassificationsSubgenresIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2ClassificationsSubgenresIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.classifications.subgenres[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2ClassificationsSubgenresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>
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
                  ReturnType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDiscoveryV2ClassificationsSubgenresIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2ClassificationsSubgenresIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2ClassificationsSubgenresIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.classifications.subgenres[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2ClassificationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications)[':id']['$get']>
  >,
) {
  return ['discovery', '/discovery/v2/classifications/:id', toValue(args)] as const
}

export function getDiscoveryV2ClassificationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2ClassificationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.classifications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2ClassificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.classifications)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discovery.v2.classifications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discovery.v2.classifications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoveryV2ClassificationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discovery.v2.classifications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2ClassificationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2ClassificationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.classifications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2EventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.events.$get>>,
) {
  return ['discovery', '/discovery/v2/events', toValue(args)] as const
}

export function getDiscoveryV2EventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>
            >
          >,
          ReturnType<typeof getDiscoveryV2EventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2EventsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discovery.v2.events)[':id']['$get']>>,
) {
  return ['discovery', '/discovery/v2/events/:id', toValue(args)] as const
}

export function getDiscoveryV2EventsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discovery.v2.events)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2EventsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.events[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2EventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discovery.v2.events)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoveryV2EventsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2EventsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2EventsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.events[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2EventsIdImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.events)[':id']['images']['$get']>
  >,
) {
  return ['discovery', '/discovery/v2/events/:id/images', toValue(args)] as const
}

export function getDiscoveryV2EventsIdImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.events)[':id']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2EventsIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.events[':id'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2EventsIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discovery.v2.events)[':id']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['images']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoveryV2EventsIdImagesQueryKey>
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
          Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2EventsIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2EventsIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.events[':id'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2SuggestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.suggest.$get>>,
) {
  return ['discovery', '/discovery/v2/suggest', toValue(args)] as const
}

export function getDiscoveryV2SuggestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.suggest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2SuggestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.suggest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2Suggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.suggest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>
            >
          >,
          ReturnType<typeof getDiscoveryV2SuggestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2SuggestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2SuggestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.suggest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2VenuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.venues.$get>>,
) {
  return ['discovery', '/discovery/v2/venues', toValue(args)] as const
}

export function getDiscoveryV2VenuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.venues.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2VenuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.venues.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2Venues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discovery.v2.venues.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>
            >
          >,
          ReturnType<typeof getDiscoveryV2VenuesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2VenuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2VenuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.venues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoveryV2VenuesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discovery.v2.venues)[':id']['$get']>>,
) {
  return ['discovery', '/discovery/v2/venues/:id', toValue(args)] as const
}

export function getDiscoveryV2VenuesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discovery.v2.venues)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoveryV2VenuesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discovery.v2.venues[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoveryV2VenuesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.discovery.v2.venues)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discovery.v2.venues)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discovery.v2.venues)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discovery.v2.venues)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoveryV2VenuesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discovery.v2.venues)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2VenuesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoveryV2VenuesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discovery.v2.venues[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
