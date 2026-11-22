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

export function getAlertsKey() {
  return ['alerts'] as const
}

export function getAviationKey() {
  return ['aviation'] as const
}

export function getGlossaryKey() {
  return ['glossary'] as const
}

export function getGridpointsKey() {
  return ['gridpoints'] as const
}

export function getIconsKey() {
  return ['icons'] as const
}

export function getOfficesKey() {
  return ['offices'] as const
}

export function getPointsKey() {
  return ['points'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getRadarKey() {
  return ['radar'] as const
}

export function getRadioKey() {
  return ['radio'] as const
}

export function getStationsKey() {
  return ['stations'] as const
}

export function getThumbnailsKey() {
  return ['thumbnails'] as const
}

export function getZonesKey() {
  return ['zones'] as const
}

export function getAlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.$get>>,
) {
  return ['alerts', '/alerts', toValue(args)] as const
}

export function getAlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAlerts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
          ReturnType<typeof getAlertsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsActiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.active.$get>>,
) {
  return ['alerts', '/alerts/active', toValue(args)] as const
}

export function getAlertsActiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.active.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.active.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
          >,
          ReturnType<typeof getAlertsActiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsActiveCountQueryKey() {
  return ['alerts', '/alerts/active/count'] as const
}

export function getAlertsActiveCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAlertsActiveCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.active.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsActiveCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>
            >
          >,
          ReturnType<typeof getAlertsActiveCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsActiveCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAlertsActiveCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.active.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsActiveZoneZoneIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>,
) {
  return ['alerts', '/alerts/active/zone/:zoneId', toValue(args)] as const
}

export function getAlertsActiveZoneZoneIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsActiveZoneZoneIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.active.zone[':zoneId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsActiveZoneZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlertsActiveZoneZoneIdQueryKey>
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
          Awaited<ReturnType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsActiveZoneZoneIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsActiveZoneZoneIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.active.zone[':zoneId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsActiveAreaAreaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts.active.area)[':area']['$get']>>,
) {
  return ['alerts', '/alerts/active/area/:area', toValue(args)] as const
}

export function getAlertsActiveAreaAreaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts.active.area)[':area']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsActiveAreaAreaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.active.area[':area'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsActiveAreaArea<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alerts.active.area)[':area']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts.active.area)[':area']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts.active.area)[':area']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts.active.area)[':area']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlertsActiveAreaAreaQueryKey>
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
          Awaited<ReturnType<(typeof client.alerts.active.area)[':area']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsActiveAreaAreaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsActiveAreaAreaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.active.area[':area'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsActiveRegionRegionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts.active.region)[':region']['$get']>>,
) {
  return ['alerts', '/alerts/active/region/:region', toValue(args)] as const
}

export function getAlertsActiveRegionRegionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts.active.region)[':region']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsActiveRegionRegionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.active.region[':region'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsActiveRegionRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts.active.region)[':region']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts.active.region)[':region']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts.active.region)[':region']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts.active.region)[':region']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlertsActiveRegionRegionQueryKey>
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
          Awaited<ReturnType<(typeof client.alerts.active.region)[':region']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsActiveRegionRegionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsActiveRegionRegionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.active.region[':region'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsTypesQueryKey() {
  return ['alerts', '/alerts/types'] as const
}

export function getAlertsTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAlertsTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAlertsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>
          >,
          ReturnType<typeof getAlertsTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlertsTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAlertsTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':id']['$get']>>,
) {
  return ['alerts', '/alerts/:id', toValue(args)] as const
}

export function getAlertsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAlertsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAviationCwsusCwsuIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>,
) {
  return ['aviation', '/aviation/cwsus/:cwsuId', toValue(args)] as const
}

export function getAviationCwsusCwsuIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAviationCwsusCwsuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aviation.cwsus[':cwsuId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAviationCwsusCwsuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAviationCwsusCwsuIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAviationCwsusCwsuIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAviationCwsusCwsuIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aviation.cwsus[':cwsuId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAviationCwsusCwsuIdCwasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>
  >,
) {
  return ['aviation', '/aviation/cwsus/:cwsuId/cwas', toValue(args)] as const
}

export function getAviationCwsusCwsuIdCwasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAviationCwsusCwsuIdCwasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aviation.cwsus[':cwsuId'].cwas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAviationCwsusCwsuIdCwas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAviationCwsusCwsuIdCwasQueryKey>
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
          Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAviationCwsusCwsuIdCwasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAviationCwsusCwsuIdCwasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aviation.cwsus[':cwsuId'].cwas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAviationCwsusCwsuIdCwasDateSequenceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
    >
  >,
) {
  return ['aviation', '/aviation/cwsus/:cwsuId/cwas/:date/:sequence', toValue(args)] as const
}

export function getAviationCwsusCwsuIdCwasDateSequenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAviationCwsusCwsuIdCwasDateSequenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aviation.cwsus[':cwsuId'].cwas[':date'][':sequence'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAviationCwsusCwsuIdCwasDateSequence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
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
                    (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
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
                    (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAviationCwsusCwsuIdCwasDateSequenceQueryKey>
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
              (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAviationCwsusCwsuIdCwasDateSequenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAviationCwsusCwsuIdCwasDateSequenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aviation.cwsus[':cwsuId'].cwas[':date'][':sequence'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAviationSigmetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aviation.sigmets.$get>>,
) {
  return ['aviation', '/aviation/sigmets', toValue(args)] as const
}

export function getAviationSigmetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aviation.sigmets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAviationSigmetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aviation.sigmets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAviationSigmets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aviation.sigmets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>
            >
          >,
          ReturnType<typeof getAviationSigmetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAviationSigmetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAviationSigmetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aviation.sigmets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAviationSigmetsAtsuQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aviation.sigmets)[':atsu']['$get']>>,
) {
  return ['aviation', '/aviation/sigmets/:atsu', toValue(args)] as const
}

export function getAviationSigmetsAtsuQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aviation.sigmets)[':atsu']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAviationSigmetsAtsuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aviation.sigmets[':atsu'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAviationSigmetsAtsu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aviation.sigmets)[':atsu']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAviationSigmetsAtsuQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAviationSigmetsAtsuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAviationSigmetsAtsuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aviation.sigmets[':atsu'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAviationSigmetsAtsuDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>
  >,
) {
  return ['aviation', '/aviation/sigmets/:atsu/:date', toValue(args)] as const
}

export function getAviationSigmetsAtsuDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAviationSigmetsAtsuDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aviation.sigmets[':atsu'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAviationSigmetsAtsuDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAviationSigmetsAtsuDateQueryKey>
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
          Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAviationSigmetsAtsuDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAviationSigmetsAtsuDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aviation.sigmets[':atsu'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAviationSigmetsAtsuDateTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>
  >,
) {
  return ['aviation', '/aviation/sigmets/:atsu/:date/:time', toValue(args)] as const
}

export function getAviationSigmetsAtsuDateTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAviationSigmetsAtsuDateTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aviation.sigmets[':atsu'][':date'][':time'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAviationSigmetsAtsuDateTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>
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
                  ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAviationSigmetsAtsuDateTimeQueryKey>
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
          Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAviationSigmetsAtsuDateTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAviationSigmetsAtsuDateTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aviation.sigmets[':atsu'][':date'][':time'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGlossaryQueryKey() {
  return ['glossary', '/glossary'] as const
}

export function getGlossaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGlossaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.glossary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGlossary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>
          >,
          ReturnType<typeof getGlossaryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGlossaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGlossaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.glossary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGridpointsWfoXYQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>>,
) {
  return ['gridpoints', '/gridpoints/:wfo/:x,:y', toValue(args)] as const
}

export function getGridpointsWfoXYQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGridpointsWfoXYQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gridpoints[':wfo'][':x,:y'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGridpointsWfoXY<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGridpointsWfoXYQueryKey>
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
          Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGridpointsWfoXYQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGridpointsWfoXYQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gridpoints[':wfo'][':x,:y'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGridpointsWfoXYForecastQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['gridpoints', '/gridpoints/:wfo/:x,:y/forecast', keyArgs] as const
}

export function getGridpointsWfoXYForecastQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGridpointsWfoXYForecastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gridpoints[':wfo'][':x,:y'].forecast.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGridpointsWfoXYForecast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGridpointsWfoXYForecastQueryKey>
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
          Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGridpointsWfoXYForecastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGridpointsWfoXYForecastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gridpoints[':wfo'][':x,:y'].forecast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGridpointsWfoXYForecastHourlyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['hourly']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['gridpoints', '/gridpoints/:wfo/:x,:y/forecast/hourly', keyArgs] as const
}

export function getGridpointsWfoXYForecastHourlyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['hourly']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGridpointsWfoXYForecastHourlyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gridpoints[':wfo'][':x,:y'].forecast.hourly.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGridpointsWfoXYForecastHourly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['hourly']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['hourly']['$get']>
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
                    (typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['hourly']['$get']
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
                    (typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['hourly']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGridpointsWfoXYForecastHourlyQueryKey>
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
            ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['hourly']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGridpointsWfoXYForecastHourlyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGridpointsWfoXYForecastHourlyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gridpoints[':wfo'][':x,:y'].forecast.hourly.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGridpointsWfoXYStationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>
  >,
) {
  return ['gridpoints', '/gridpoints/:wfo/:x,:y/stations', toValue(args)] as const
}

export function getGridpointsWfoXYStationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGridpointsWfoXYStationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gridpoints[':wfo'][':x,:y'].stations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGridpointsWfoXYStations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGridpointsWfoXYStationsQueryKey>
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
          Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGridpointsWfoXYStationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGridpointsWfoXYStationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gridpoints[':wfo'][':x,:y'].stations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIconsSetTimeOfDayFirstQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>
  >,
) {
  return ['icons', '/icons/:set/:timeOfDay/:first', toValue(args)] as const
}

export function getIconsSetTimeOfDayFirstQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIconsSetTimeOfDayFirstQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.icons[':set'][':timeOfDay'][':first'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIconsSetTimeOfDayFirst<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIconsSetTimeOfDayFirstQueryKey>
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
          Awaited<ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIconsSetTimeOfDayFirstQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIconsSetTimeOfDayFirstQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.icons[':set'][':timeOfDay'][':first'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIconsSetTimeOfDayFirstSecondQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>
  >,
) {
  return ['icons', '/icons/:set/:timeOfDay/:first/:second', toValue(args)] as const
}

export function getIconsSetTimeOfDayFirstSecondQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIconsSetTimeOfDayFirstSecondQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.icons[':set'][':timeOfDay'][':first'][':second'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIconsSetTimeOfDayFirstSecond<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>
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
                    (typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']
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
                    (typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIconsSetTimeOfDayFirstSecondQueryKey>
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
            ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIconsSetTimeOfDayFirstSecondQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIconsSetTimeOfDayFirstSecondQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.icons[':set'][':timeOfDay'][':first'][':second'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIconsQueryKey() {
  return ['icons', '/icons'] as const
}

export function getIconsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIconsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.icons.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIcons<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
          ReturnType<typeof getIconsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIconsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIconsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.icons.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThumbnailsSatelliteAreaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.thumbnails.satellite)[':area']['$get']>>,
) {
  return ['thumbnails', '/thumbnails/satellite/:area', toValue(args)] as const
}

export function getThumbnailsSatelliteAreaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.thumbnails.satellite)[':area']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThumbnailsSatelliteAreaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.thumbnails.satellite[':area'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThumbnailsSatelliteArea<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.thumbnails.satellite)[':area']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.thumbnails.satellite)[':area']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.thumbnails.satellite)[':area']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.thumbnails.satellite)[':area']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThumbnailsSatelliteAreaQueryKey>
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
          Awaited<ReturnType<(typeof client.thumbnails.satellite)[':area']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThumbnailsSatelliteAreaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThumbnailsSatelliteAreaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.thumbnails.satellite[':area'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStationsStationIdObservationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['observations']['$get']>
  >,
) {
  return ['stations', '/stations/:stationId/observations', toValue(args)] as const
}

export function getStationsStationIdObservationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['observations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStationsStationIdObservationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stations[':stationId'].observations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStationsStationIdObservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stations)[':stationId']['observations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['observations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stations)[':stationId']['observations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stations)[':stationId']['observations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStationsStationIdObservationsQueryKey>
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
          Awaited<ReturnType<(typeof client.stations)[':stationId']['observations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStationsStationIdObservationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStationsStationIdObservationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stations[':stationId'].observations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStationsStationIdObservationsLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>
  >,
) {
  return ['stations', '/stations/:stationId/observations/latest', toValue(args)] as const
}

export function getStationsStationIdObservationsLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStationsStationIdObservationsLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stations[':stationId'].observations.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStationsStationIdObservationsLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>
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
                    (typeof client.stations)[':stationId']['observations']['latest']['$get']
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
                    (typeof client.stations)[':stationId']['observations']['latest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStationsStationIdObservationsLatestQueryKey>
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
            ReturnType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStationsStationIdObservationsLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStationsStationIdObservationsLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stations[':stationId'].observations.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStationsStationIdObservationsTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>
  >,
) {
  return ['stations', '/stations/:stationId/observations/:time', toValue(args)] as const
}

export function getStationsStationIdObservationsTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStationsStationIdObservationsTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stations[':stationId'].observations[':time'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStationsStationIdObservationsTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>
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
                    (typeof client.stations)[':stationId']['observations'][':time']['$get']
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
                    (typeof client.stations)[':stationId']['observations'][':time']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStationsStationIdObservationsTimeQueryKey>
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
            ReturnType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStationsStationIdObservationsTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStationsStationIdObservationsTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stations[':stationId'].observations[':time'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStationsStationIdTafsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stations)[':stationId']['tafs']['$get']>>,
) {
  return ['stations', '/stations/:stationId/tafs', toValue(args)] as const
}

export function getStationsStationIdTafsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stations)[':stationId']['tafs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStationsStationIdTafsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stations[':stationId'].tafs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStationsStationIdTafs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stations)[':stationId']['tafs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stations)[':stationId']['tafs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stations)[':stationId']['tafs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stations)[':stationId']['tafs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStationsStationIdTafsQueryKey>
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
          Awaited<ReturnType<(typeof client.stations)[':stationId']['tafs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStationsStationIdTafsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStationsStationIdTafsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stations[':stationId'].tafs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStationsStationIdTafsDateTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>
  >,
) {
  return ['stations', '/stations/:stationId/tafs/:date/:time', toValue(args)] as const
}

export function getStationsStationIdTafsDateTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStationsStationIdTafsDateTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stations[':stationId'].tafs[':date'][':time'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStationsStationIdTafsDateTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>
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
                    (typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']
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
                    (typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStationsStationIdTafsDateTimeQueryKey>
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
            ReturnType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStationsStationIdTafsDateTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStationsStationIdTafsDateTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stations[':stationId'].tafs[':date'][':time'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stations.$get>>,
) {
  return ['stations', '/stations', toValue(args)] as const
}

export function getStationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>
          >,
          ReturnType<typeof getStationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStationsStationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stations)[':stationId']['$get']>>,
) {
  return ['stations', '/stations/:stationId', toValue(args)] as const
}

export function getStationsStationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stations)[':stationId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStationsStationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stations[':stationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStationsStationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stations)[':stationId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStationsStationIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStationsStationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStationsStationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stations[':stationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfficesOfficeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offices)[':officeId']['$get']>>,
) {
  return ['offices', '/offices/:officeId', toValue(args)] as const
}

export function getOfficesOfficeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offices)[':officeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfficesOfficeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offices[':officeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfficesOfficeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offices)[':officeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfficesOfficeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficesOfficeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfficesOfficeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offices[':officeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfficesOfficeIdBriefingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['briefing']['$get']>
  >,
) {
  return ['offices', '/offices/:officeId/briefing', toValue(args)] as const
}

export function getOfficesOfficeIdBriefingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['briefing']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfficesOfficeIdBriefingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offices[':officeId'].briefing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfficesOfficeIdBriefing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offices)[':officeId']['briefing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['briefing']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offices)[':officeId']['briefing']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offices)[':officeId']['briefing']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfficesOfficeIdBriefingQueryKey>
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
          Awaited<ReturnType<(typeof client.offices)[':officeId']['briefing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficesOfficeIdBriefingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfficesOfficeIdBriefingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offices[':officeId'].briefing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfficesOfficeIdBriefingDownloadLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']>
  >,
) {
  return ['offices', '/offices/:officeId/briefing/download/latest', toValue(args)] as const
}

export function getOfficesOfficeIdBriefingDownloadLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfficesOfficeIdBriefingDownloadLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offices[':officeId'].briefing.download.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfficesOfficeIdBriefingDownloadLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']>
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
                    (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
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
                    (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOfficesOfficeIdBriefingDownloadLatestQueryKey>
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
              (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficesOfficeIdBriefingDownloadLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfficesOfficeIdBriefingDownloadLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offices[':officeId'].briefing.download.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfficesOfficeIdBriefingDownloadBriefingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
    >
  >,
) {
  return ['offices', '/offices/:officeId/briefing/download/:briefingId', toValue(args)] as const
}

export function getOfficesOfficeIdBriefingDownloadBriefingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfficesOfficeIdBriefingDownloadBriefingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offices[':officeId'].briefing.download[':briefingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfficesOfficeIdBriefingDownloadBriefingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
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
                    (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
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
                    (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOfficesOfficeIdBriefingDownloadBriefingIdQueryKey>
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
              (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficesOfficeIdBriefingDownloadBriefingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfficesOfficeIdBriefingDownloadBriefingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offices[':officeId'].briefing.download[':briefingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfficesOfficeIdHeadlinesHeadlineIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>
  >,
) {
  return ['offices', '/offices/:officeId/headlines/:headlineId', toValue(args)] as const
}

export function getOfficesOfficeIdHeadlinesHeadlineIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfficesOfficeIdHeadlinesHeadlineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offices[':officeId'].headlines[':headlineId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfficesOfficeIdHeadlinesHeadlineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>
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
                    (typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']
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
                    (typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOfficesOfficeIdHeadlinesHeadlineIdQueryKey>
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
            ReturnType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficesOfficeIdHeadlinesHeadlineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfficesOfficeIdHeadlinesHeadlineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offices[':officeId'].headlines[':headlineId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfficesOfficeIdHeadlinesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['headlines']['$get']>
  >,
) {
  return ['offices', '/offices/:officeId/headlines', toValue(args)] as const
}

export function getOfficesOfficeIdHeadlinesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['headlines']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfficesOfficeIdHeadlinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offices[':officeId'].headlines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfficesOfficeIdHeadlines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offices)[':officeId']['headlines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['headlines']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offices)[':officeId']['headlines']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offices)[':officeId']['headlines']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfficesOfficeIdHeadlinesQueryKey>
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
          Awaited<ReturnType<(typeof client.offices)[':officeId']['headlines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficesOfficeIdHeadlinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfficesOfficeIdHeadlinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offices[':officeId'].headlines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfficesOfficeIdWeatherstoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['weatherstories']['$get']>
  >,
) {
  return ['offices', '/offices/:officeId/weatherstories', toValue(args)] as const
}

export function getOfficesOfficeIdWeatherstoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['weatherstories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfficesOfficeIdWeatherstoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offices[':officeId'].weatherstories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfficesOfficeIdWeatherstories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offices)[':officeId']['weatherstories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offices)[':officeId']['weatherstories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offices)[':officeId']['weatherstories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offices)[':officeId']['weatherstories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfficesOfficeIdWeatherstoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.offices)[':officeId']['weatherstories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficesOfficeIdWeatherstoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfficesOfficeIdWeatherstoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offices[':officeId'].weatherstories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfficesOfficeIdWeatherstoriesDownloadImageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
    >
  >,
) {
  return ['offices', '/offices/:officeId/weatherstories/download/:imageId', toValue(args)] as const
}

export function getOfficesOfficeIdWeatherstoriesDownloadImageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfficesOfficeIdWeatherstoriesDownloadImageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offices[':officeId'].weatherstories.download[':imageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfficesOfficeIdWeatherstoriesDownloadImageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
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
                    (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
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
                    (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOfficesOfficeIdWeatherstoriesDownloadImageIdQueryKey>
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
              (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficesOfficeIdWeatherstoriesDownloadImageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfficesOfficeIdWeatherstoriesDownloadImageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offices[':officeId'].weatherstories.download[':imageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPointsLatitudeLongitudeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.points)[':latitude,:longitude']['$get']>>,
) {
  return ['points', '/points/:latitude,:longitude', toValue(args)] as const
}

export function getPointsLatitudeLongitudeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.points)[':latitude,:longitude']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPointsLatitudeLongitudeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.points[':latitude,:longitude'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePointsLatitudeLongitude<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.points)[':latitude,:longitude']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPointsLatitudeLongitudeQueryKey>
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
          Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPointsLatitudeLongitudeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPointsLatitudeLongitudeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.points[':latitude,:longitude'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPointsLatitudeLongitudeRadioQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>
  >,
) {
  return ['points', '/points/:latitude,:longitude/radio', toValue(args)] as const
}

export function getPointsLatitudeLongitudeRadioQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPointsLatitudeLongitudeRadioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.points[':latitude,:longitude'].radio.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePointsLatitudeLongitudeRadio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPointsLatitudeLongitudeRadioQueryKey>
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
          Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPointsLatitudeLongitudeRadioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPointsLatitudeLongitudeRadioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.points[':latitude,:longitude'].radio.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPointsLatitudeLongitudeStationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>
  >,
) {
  return ['points', '/points/:latitude,:longitude/stations', toValue(args)] as const
}

export function getPointsLatitudeLongitudeStationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPointsLatitudeLongitudeStationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.points[':latitude,:longitude'].stations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePointsLatitudeLongitudeStations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>
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
                  ReturnType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPointsLatitudeLongitudeStationsQueryKey>
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
          Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPointsLatitudeLongitudeStationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPointsLatitudeLongitudeStationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.points[':latitude,:longitude'].stations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadarServersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radar.servers.$get>>,
) {
  return ['radar', '/radar/servers', toValue(args)] as const
}

export function getRadarServersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radar.servers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadarServersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radar.servers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRadarServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radar.servers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
          >,
          ReturnType<typeof getRadarServersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRadarServersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadarServersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radar.servers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadarServersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.servers)[':id']['$get']>>,
) {
  return ['radar', '/radar/servers/:id', toValue(args)] as const
}

export function getRadarServersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.servers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadarServersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radar.servers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRadarServersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.servers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRadarServersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadarServersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadarServersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radar.servers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadarSpgdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radar.spgds.$get>>,
) {
  return ['radar', '/radar/spgds', toValue(args)] as const
}

export function getRadarSpgdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radar.spgds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadarSpgdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radar.spgds.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRadarSpgds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radar.spgds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>
          >,
          ReturnType<typeof getRadarSpgdsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRadarSpgdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadarSpgdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radar.spgds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadarStationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radar.stations.$get>>,
) {
  return ['radar', '/radar/stations', toValue(args)] as const
}

export function getRadarStationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radar.stations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadarStationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radar.stations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRadarStations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radar.stations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
          >,
          ReturnType<typeof getRadarStationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRadarStationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadarStationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radar.stations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadarStationsStationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.stations)[':stationId']['$get']>>,
) {
  return ['radar', '/radar/stations/:stationId', toValue(args)] as const
}

export function getRadarStationsStationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.stations)[':stationId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadarStationsStationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radar.stations[':stationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRadarStationsStationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.stations)[':stationId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRadarStationsStationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadarStationsStationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadarStationsStationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radar.stations[':stationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadarStationsStationIdAlarmsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>
  >,
) {
  return ['radar', '/radar/stations/:stationId/alarms', toValue(args)] as const
}

export function getRadarStationsStationIdAlarmsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadarStationsStationIdAlarmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radar.stations[':stationId'].alarms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRadarStationsStationIdAlarms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRadarStationsStationIdAlarmsQueryKey>
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
          Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadarStationsStationIdAlarmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadarStationsStationIdAlarmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radar.stations[':stationId'].alarms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadarQueuesHostQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.queues)[':host']['$get']>>,
) {
  return ['radar', '/radar/queues/:host', toValue(args)] as const
}

export function getRadarQueuesHostQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.queues)[':host']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadarQueuesHostQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radar.queues[':host'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRadarQueuesHost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.queues)[':host']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRadarQueuesHostQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadarQueuesHostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadarQueuesHostQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radar.queues[':host'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadarProfilersStationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.profilers)[':stationId']['$get']>>,
) {
  return ['radar', '/radar/profilers/:stationId', toValue(args)] as const
}

export function getRadarProfilersStationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.profilers)[':stationId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadarProfilersStationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radar.profilers[':stationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRadarProfilersStationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radar.profilers)[':stationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radar.profilers)[':stationId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.profilers)[':stationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.profilers)[':stationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRadarProfilersStationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.radar.profilers)[':stationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadarProfilersStationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadarProfilersStationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radar.profilers[':stationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadioQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radio.$get>>,
) {
  return ['radio', '/radio', toValue(args)] as const
}

export function getRadioQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radio.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radio.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRadio<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.radio.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
          ReturnType<typeof getRadioQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRadioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radio.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadioCallSignQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radio)[':callSign']['$get']>>,
) {
  return ['radio', '/radio/:callSign', toValue(args)] as const
}

export function getRadioCallSignQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radio)[':callSign']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadioCallSignQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radio[':callSign'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRadioCallSign<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radio)[':callSign']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
            >
          >,
          ReturnType<typeof getRadioCallSignQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadioCallSignQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadioCallSignQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radio[':callSign'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadioCallSignBroadcastQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radio)[':callSign']['broadcast']['$get']>>,
) {
  return ['radio', '/radio/:callSign/broadcast', toValue(args)] as const
}

export function getRadioCallSignBroadcastQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radio)[':callSign']['broadcast']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadioCallSignBroadcastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.radio[':callSign'].broadcast.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRadioCallSignBroadcast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radio)[':callSign']['broadcast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.radio)[':callSign']['broadcast']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radio)[':callSign']['broadcast']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radio)[':callSign']['broadcast']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRadioCallSignBroadcastQueryKey>
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
          Awaited<ReturnType<(typeof client.radio)[':callSign']['broadcast']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadioCallSignBroadcastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadioCallSignBroadcastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.radio[':callSign'].broadcast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
) {
  return ['products', '/products', toValue(args)] as const
}

export function getProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          ReturnType<typeof getProductsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsLocationsQueryKey() {
  return ['products', '/products/locations'] as const
}

export function getProductsLocationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductsLocationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.locations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>
            >
          >,
          ReturnType<typeof getProductsLocationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductsLocationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.products.locations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsTypesQueryKey() {
  return ['products', '/products/types'] as const
}

export function getProductsTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductsTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProductsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
          >,
          ReturnType<typeof getProductsTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductsTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.products.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsProductIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':productId']['$get']>>,
) {
  return ['products', '/products/:productId', toValue(args)] as const
}

export function getProductsProductIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':productId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':productId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductsProductIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsTypesTypeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products.types)[':typeId']['$get']>>,
) {
  return ['products', '/products/types/:typeId', toValue(args)] as const
}

export function getProductsTypesTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products.types)[':typeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsTypesTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.types[':typeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsTypesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products.types)[':typeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductsTypesTypeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsTypesTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsTypesTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.types[':typeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsTypesTypeIdLocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.types)[':typeId']['locations']['$get']>
  >,
) {
  return ['products', '/products/types/:typeId/locations', toValue(args)] as const
}

export function getProductsTypesTypeIdLocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.types)[':typeId']['locations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsTypesTypeIdLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.types[':typeId'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsTypesTypeIdLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.types)[':typeId']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.types)[':typeId']['locations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.types)[':typeId']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.types)[':typeId']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductsTypesTypeIdLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.products.types)[':typeId']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsTypesTypeIdLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsTypesTypeIdLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.types[':typeId'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsLocationsLocationIdTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.locations)[':locationId']['types']['$get']>
  >,
) {
  return ['products', '/products/locations/:locationId/types', toValue(args)] as const
}

export function getProductsLocationsLocationIdTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.locations)[':locationId']['types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsLocationsLocationIdTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.locations[':locationId'].types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsLocationsLocationIdTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.locations)[':locationId']['types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.locations)[':locationId']['types']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.products.locations)[':locationId']['types']['$get']>
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
                  ReturnType<(typeof client.products.locations)[':locationId']['types']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProductsLocationsLocationIdTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.products.locations)[':locationId']['types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsLocationsLocationIdTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsLocationsLocationIdTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.locations[':locationId'].types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsTypesTypeIdLocationsLocationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.types)[':typeId']['locations'][':locationId']['$get']>
  >,
) {
  return ['products', '/products/types/:typeId/locations/:locationId', toValue(args)] as const
}

export function getProductsTypesTypeIdLocationsLocationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.types)[':typeId']['locations'][':locationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsTypesTypeIdLocationsLocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.types[':typeId'].locations[':locationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsTypesTypeIdLocationsLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.products.types)[':typeId']['locations'][':locationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.types)[':typeId']['locations'][':locationId']['$get']>
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
                    (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
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
                    (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProductsTypesTypeIdLocationsLocationIdQueryKey>
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
              (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsTypesTypeIdLocationsLocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsTypesTypeIdLocationsLocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.types[':typeId'].locations[':locationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsTypesTypeIdLocationsLocationIdLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
    >
  >,
) {
  return [
    'products',
    '/products/types/:typeId/locations/:locationId/latest',
    toValue(args),
  ] as const
}

export function getProductsTypesTypeIdLocationsLocationIdLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsTypesTypeIdLocationsLocationIdLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.types[':typeId'].locations[':locationId'].latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsTypesTypeIdLocationsLocationIdLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
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
                    (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
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
                    (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProductsTypesTypeIdLocationsLocationIdLatestQueryKey>
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
              (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsTypesTypeIdLocationsLocationIdLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsTypesTypeIdLocationsLocationIdLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.types[':typeId'].locations[':locationId'].latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zones.$get>>,
) {
  return ['zones', '/zones', toValue(args)] as const
}

export function getZonesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zones.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useZones<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zones.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
          ReturnType<typeof getZonesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getZonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':type']['$get']>>,
) {
  return ['zones', '/zones/:type', toValue(args)] as const
}

export function getZonesTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>
            >
          >,
          ReturnType<typeof getZonesTypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getZonesTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesTypeZoneIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':type'][':zoneId']['$get']>>,
) {
  return ['zones', '/zones/:type/:zoneId', toValue(args)] as const
}

export function getZonesTypeZoneIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':type'][':zoneId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesTypeZoneIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones[':type'][':zoneId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesTypeZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':type'][':zoneId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getZonesTypeZoneIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesTypeZoneIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesTypeZoneIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones[':type'][':zoneId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesTypeZoneIdForecastQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>
  >,
) {
  return ['zones', '/zones/:type/:zoneId/forecast', toValue(args)] as const
}

export function getZonesTypeZoneIdForecastQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesTypeZoneIdForecastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones[':type'][':zoneId'].forecast.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesTypeZoneIdForecast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>>
              >
            >
          >,
          ReturnType<typeof getZonesTypeZoneIdForecastQueryKey>
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
          Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesTypeZoneIdForecastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesTypeZoneIdForecastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones[':type'][':zoneId'].forecast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesTypeZoneIdRadioQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>
  >,
) {
  return ['zones', '/zones/:type/:zoneId/radio', toValue(args)] as const
}

export function getZonesTypeZoneIdRadioQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesTypeZoneIdRadioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones[':type'][':zoneId'].radio.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesTypeZoneIdRadio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>>
              >
            >
          >,
          ReturnType<typeof getZonesTypeZoneIdRadioQueryKey>
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
          Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesTypeZoneIdRadioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesTypeZoneIdRadioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones[':type'][':zoneId'].radio.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesForecastZoneIdObservationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>
  >,
) {
  return ['zones', '/zones/forecast/:zoneId/observations', toValue(args)] as const
}

export function getZonesForecastZoneIdObservationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesForecastZoneIdObservationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones.forecast[':zoneId'].observations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesForecastZoneIdObservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>
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
                  ReturnType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getZonesForecastZoneIdObservationsQueryKey>
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
          Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesForecastZoneIdObservationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesForecastZoneIdObservationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones.forecast[':zoneId'].observations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesForecastZoneIdStationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>
  >,
) {
  return ['zones', '/zones/forecast/:zoneId/stations', toValue(args)] as const
}

export function getZonesForecastZoneIdStationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesForecastZoneIdStationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones.forecast[':zoneId'].stations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesForecastZoneIdStations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getZonesForecastZoneIdStationsQueryKey>
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
          Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesForecastZoneIdStationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesForecastZoneIdStationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones.forecast[':zoneId'].stations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
