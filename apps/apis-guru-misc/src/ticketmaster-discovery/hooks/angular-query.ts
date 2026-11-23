import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDiscoveryKey() {
  return ['discovery'] as const
}

export function getDiscoveryV2AttractionsQueryKey(
  args: InferRequestType<typeof client.discovery.v2.attractions.$get>,
) {
  return ['discovery', '/discovery/v2/attractions', args] as const
}

export function getDiscoveryV2AttractionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.discovery.v2.attractions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2AttractionsQueryKey>
  >({
    queryKey: getDiscoveryV2AttractionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.attractions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryV2Attractions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discovery.v2.attractions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoveryV2AttractionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoveryV2AttractionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoveryV2AttractionsIdQueryKey(
  args: InferRequestType<(typeof client.discovery.v2.attractions)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/attractions/:id', args] as const
}

export function getDiscoveryV2AttractionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.attractions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discovery.v2.attractions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDiscoveryV2AttractionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.attractions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryV2AttractionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.attractions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discovery.v2.attractions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoveryV2AttractionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoveryV2ClassificationsQueryKey(
  args: InferRequestType<typeof client.discovery.v2.classifications.$get>,
) {
  return ['discovery', '/discovery/v2/classifications', args] as const
}

export function getDiscoveryV2ClassificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.discovery.v2.classifications.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2ClassificationsQueryKey>
  >({
    queryKey: getDiscoveryV2ClassificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.classifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryV2Classifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discovery.v2.classifications.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoveryV2ClassificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoveryV2ClassificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoveryV2ClassificationsGenresIdQueryKey(
  args: InferRequestType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/classifications/genres/:id', args] as const
}

export function getDiscoveryV2ClassificationsGenresIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDiscoveryV2ClassificationsGenresIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.classifications.genres[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryV2ClassificationsGenresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDiscoveryV2ClassificationsGenresIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoveryV2ClassificationsGenresIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoveryV2ClassificationsSegmentsIdQueryKey(
  args: InferRequestType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/classifications/segments/:id', args] as const
}

export function getDiscoveryV2ClassificationsSegmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDiscoveryV2ClassificationsSegmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.classifications.segments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryV2ClassificationsSegmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.discovery.v2.classifications.segments)[':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDiscoveryV2ClassificationsSegmentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoveryV2ClassificationsSegmentsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoveryV2ClassificationsSubgenresIdQueryKey(
  args: InferRequestType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/classifications/subgenres/:id', args] as const
}

export function getDiscoveryV2ClassificationsSubgenresIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDiscoveryV2ClassificationsSubgenresIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.classifications.subgenres[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryV2ClassificationsSubgenresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.discovery.v2.classifications.subgenres)[':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDiscoveryV2ClassificationsSubgenresIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoveryV2ClassificationsSubgenresIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoveryV2ClassificationsIdQueryKey(
  args: InferRequestType<(typeof client.discovery.v2.classifications)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/classifications/:id', args] as const
}

export function getDiscoveryV2ClassificationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discovery.v2.classifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDiscoveryV2ClassificationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.classifications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryV2ClassificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.classifications)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discovery.v2.classifications)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoveryV2ClassificationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoveryV2EventsQueryKey(
  args: InferRequestType<typeof client.discovery.v2.events.$get>,
) {
  return ['discovery', '/discovery/v2/events', args] as const
}

export function getDiscoveryV2EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.discovery.v2.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2EventsQueryKey>
  >({
    queryKey: getDiscoveryV2EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDiscoveryV2Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discovery.v2.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoveryV2EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoveryV2EventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDiscoveryV2EventsIdQueryKey(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/events/:id', args] as const
}

export function getDiscoveryV2EventsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDiscoveryV2EventsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.events[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryV2EventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discovery.v2.events)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoveryV2EventsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDiscoveryV2EventsIdImagesQueryKey(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['images']['$get']>,
) {
  return ['discovery', '/discovery/v2/events/:id/images', args] as const
}

export function getDiscoveryV2EventsIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDiscoveryV2EventsIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.events[':id'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryV2EventsIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discovery.v2.events)[':id']['images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoveryV2EventsIdImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoveryV2SuggestQueryKey(
  args: InferRequestType<typeof client.discovery.v2.suggest.$get>,
) {
  return ['discovery', '/discovery/v2/suggest', args] as const
}

export function getDiscoveryV2SuggestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.discovery.v2.suggest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2SuggestQueryKey>
  >({
    queryKey: getDiscoveryV2SuggestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.suggest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDiscoveryV2Suggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discovery.v2.suggest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoveryV2SuggestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoveryV2SuggestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDiscoveryV2VenuesQueryKey(
  args: InferRequestType<typeof client.discovery.v2.venues.$get>,
) {
  return ['discovery', '/discovery/v2/venues', args] as const
}

export function getDiscoveryV2VenuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.discovery.v2.venues.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoveryV2VenuesQueryKey>
  >({
    queryKey: getDiscoveryV2VenuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.venues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDiscoveryV2Venues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discovery.v2.venues.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoveryV2VenuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoveryV2VenuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDiscoveryV2VenuesIdQueryKey(
  args: InferRequestType<(typeof client.discovery.v2.venues)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/venues/:id', args] as const
}

export function getDiscoveryV2VenuesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.discovery.v2.venues)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discovery.v2.venues)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDiscoveryV2VenuesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discovery.v2.venues[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoveryV2VenuesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.discovery.v2.venues)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discovery.v2.venues)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoveryV2VenuesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
