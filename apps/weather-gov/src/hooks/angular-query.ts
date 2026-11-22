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

export function getAlertsQueryKey(args: InferRequestType<typeof client.alerts.$get>) {
  return ['alerts', '/alerts', args] as const
}

export function getAlertsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.alerts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlertsQueryKey>
  >({
    queryKey: getAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAlerts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.alerts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlertsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAlertsActiveQueryKey(args: InferRequestType<typeof client.alerts.active.$get>) {
  return ['alerts', '/alerts/active', args] as const
}

export function getAlertsActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.alerts.active.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsActiveQueryKey>
  >({
    queryKey: getAlertsActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.active.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAlertsActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.alerts.active.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAlertsActiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlertsActiveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAlertsActiveCountQueryKey() {
  return ['alerts', '/alerts/active/count'] as const
}

export function getAlertsActiveCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsActiveCountQueryKey>
  >({
    queryKey: getAlertsActiveCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.active.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAlertsActiveCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.alerts.active.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlertsActiveCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlertsActiveCountQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAlertsActiveZoneZoneIdQueryKey(
  args: InferRequestType<(typeof client.alerts.active.zone)[':zoneId']['$get']>,
) {
  return ['alerts', '/alerts/active/zone/:zoneId', args] as const
}

export function getAlertsActiveZoneZoneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alerts.active.zone)[':zoneId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlertsActiveZoneZoneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.active.zone[':zoneId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAlertsActiveZoneZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts.active.zone)[':zoneId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alerts.active.zone)[':zoneId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAlertsActiveZoneZoneIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAlertsActiveAreaAreaQueryKey(
  args: InferRequestType<(typeof client.alerts.active.area)[':area']['$get']>,
) {
  return ['alerts', '/alerts/active/area/:area', args] as const
}

export function getAlertsActiveAreaAreaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alerts.active.area)[':area']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alerts.active.area)[':area']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlertsActiveAreaAreaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.active.area[':area'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAlertsActiveAreaArea<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alerts.active.area)[':area']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alerts.active.area)[':area']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAlertsActiveAreaAreaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAlertsActiveRegionRegionQueryKey(
  args: InferRequestType<(typeof client.alerts.active.region)[':region']['$get']>,
) {
  return ['alerts', '/alerts/active/region/:region', args] as const
}

export function getAlertsActiveRegionRegionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts.active.region)[':region']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alerts.active.region)[':region']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlertsActiveRegionRegionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.active.region[':region'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAlertsActiveRegionRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts.active.region)[':region']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alerts.active.region)[':region']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAlertsActiveRegionRegionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAlertsTypesQueryKey() {
  return ['alerts', '/alerts/types'] as const
}

export function getAlertsTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlertsTypesQueryKey>
  >({
    queryKey: getAlertsTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAlertsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAlertsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlertsTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAlertsIdQueryKey(args: InferRequestType<(typeof client.alerts)[':id']['$get']>) {
  return ['alerts', '/alerts/:id', args] as const
}

export function getAlertsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.alerts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsIdQueryKey>
  >({
    queryKey: getAlertsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAlertsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alerts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlertsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlertsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAviationCwsusCwsuIdQueryKey(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>,
) {
  return ['aviation', '/aviation/cwsus/:cwsuId', args] as const
}

export function getAviationCwsusCwsuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAviationCwsusCwsuIdQueryKey>
  >({
    queryKey: getAviationCwsusCwsuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aviation.cwsus[':cwsuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAviationCwsusCwsuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAviationCwsusCwsuIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAviationCwsusCwsuIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAviationCwsusCwsuIdCwasQueryKey(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>,
) {
  return ['aviation', '/aviation/cwsus/:cwsuId/cwas', args] as const
}

export function getAviationCwsusCwsuIdCwasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAviationCwsusCwsuIdCwasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aviation.cwsus[':cwsuId'].cwas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAviationCwsusCwsuIdCwas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAviationCwsusCwsuIdCwasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAviationCwsusCwsuIdCwasDateSequenceQueryKey(
  args: InferRequestType<
    (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
  >,
) {
  return ['aviation', '/aviation/cwsus/:cwsuId/cwas/:date/:sequence', args] as const
}

export function getAviationCwsusCwsuIdCwasDateSequenceQueryOptions<
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
  args: InferRequestType<
    (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAviationCwsusCwsuIdCwasDateSequenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aviation.cwsus[':cwsuId'].cwas[':date'][':sequence'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAviationCwsusCwsuIdCwasDateSequence<
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
  args: () => InferRequestType<
    (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAviationCwsusCwsuIdCwasDateSequenceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAviationSigmetsQueryKey(
  args: InferRequestType<typeof client.aviation.sigmets.$get>,
) {
  return ['aviation', '/aviation/sigmets', args] as const
}

export function getAviationSigmetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aviation.sigmets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAviationSigmetsQueryKey>
  >({
    queryKey: getAviationSigmetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aviation.sigmets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAviationSigmets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aviation.sigmets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aviation.sigmets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAviationSigmetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAviationSigmetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAviationSigmetsAtsuQueryKey(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu']['$get']>,
) {
  return ['aviation', '/aviation/sigmets/:atsu', args] as const
}

export function getAviationSigmetsAtsuQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAviationSigmetsAtsuQueryKey>
  >({
    queryKey: getAviationSigmetsAtsuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aviation.sigmets[':atsu'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAviationSigmetsAtsu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.aviation.sigmets)[':atsu']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAviationSigmetsAtsuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAviationSigmetsAtsuQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAviationSigmetsAtsuDateQueryKey(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>,
) {
  return ['aviation', '/aviation/sigmets/:atsu/:date', args] as const
}

export function getAviationSigmetsAtsuDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAviationSigmetsAtsuDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aviation.sigmets[':atsu'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAviationSigmetsAtsuDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAviationSigmetsAtsuDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAviationSigmetsAtsuDateTimeQueryKey(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>,
) {
  return ['aviation', '/aviation/sigmets/:atsu/:date/:time', args] as const
}

export function getAviationSigmetsAtsuDateTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAviationSigmetsAtsuDateTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aviation.sigmets[':atsu'][':date'][':time'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAviationSigmetsAtsuDateTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAviationSigmetsAtsuDateTimeQueryKey>
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
      ...getAviationSigmetsAtsuDateTimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGlossaryQueryKey() {
  return ['glossary', '/glossary'] as const
}

export function getGlossaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGlossaryQueryKey>
  >({
    queryKey: getGlossaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.glossary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGlossary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGlossaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGlossaryQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getGridpointsWfoXYQueryKey(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>,
) {
  return ['gridpoints', '/gridpoints/:wfo/:x,:y', args] as const
}

export function getGridpointsWfoXYQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGridpointsWfoXYQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gridpoints[':wfo'][':x,:y'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGridpointsWfoXY<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGridpointsWfoXYQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGridpointsWfoXYForecastQueryKey(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gridpoints', '/gridpoints/:wfo/:x,:y/forecast', keyArgs] as const
}

export function getGridpointsWfoXYForecastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGridpointsWfoXYForecastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gridpoints[':wfo'][':x,:y'].forecast.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGridpointsWfoXYForecast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGridpointsWfoXYForecastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGridpointsWfoXYForecastHourlyQueryKey(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['hourly']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['gridpoints', '/gridpoints/:wfo/:x,:y/forecast/hourly', keyArgs] as const
}

export function getGridpointsWfoXYForecastHourlyQueryOptions<
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
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['hourly']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGridpointsWfoXYForecastHourlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gridpoints[':wfo'][':x,:y'].forecast.hourly.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGridpointsWfoXYForecastHourly<
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
  args: () => InferRequestType<
    (typeof client.gridpoints)[':wfo'][':x,:y']['forecast']['hourly']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getGridpointsWfoXYForecastHourlyQueryKey>
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
      ...getGridpointsWfoXYForecastHourlyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGridpointsWfoXYStationsQueryKey(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>,
) {
  return ['gridpoints', '/gridpoints/:wfo/:x,:y/stations', args] as const
}

export function getGridpointsWfoXYStationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGridpointsWfoXYStationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gridpoints[':wfo'][':x,:y'].stations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGridpointsWfoXYStations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gridpoints)[':wfo'][':x,:y']['stations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGridpointsWfoXYStationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getIconsSetTimeOfDayFirstQueryKey(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>,
) {
  return ['icons', '/icons/:set/:timeOfDay/:first', args] as const
}

export function getIconsSetTimeOfDayFirstQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIconsSetTimeOfDayFirstQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.icons[':set'][':timeOfDay'][':first'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIconsSetTimeOfDayFirst<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getIconsSetTimeOfDayFirstQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getIconsSetTimeOfDayFirstSecondQueryKey(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>,
) {
  return ['icons', '/icons/:set/:timeOfDay/:first/:second', args] as const
}

export function getIconsSetTimeOfDayFirstSecondQueryOptions<
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
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIconsSetTimeOfDayFirstSecondQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.icons[':set'][':timeOfDay'][':first'][':second'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIconsSetTimeOfDayFirstSecond<
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
  args: () => InferRequestType<
    (typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getIconsSetTimeOfDayFirstSecondQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getIconsQueryKey() {
  return ['icons', '/icons'] as const
}

export function getIconsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIconsQueryKey>
  >({
    queryKey: getIconsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.icons.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIcons<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.icons.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIconsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIconsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getThumbnailsSatelliteAreaQueryKey(
  args: InferRequestType<(typeof client.thumbnails.satellite)[':area']['$get']>,
) {
  return ['thumbnails', '/thumbnails/satellite/:area', args] as const
}

export function getThumbnailsSatelliteAreaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.thumbnails.satellite)[':area']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.thumbnails.satellite)[':area']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThumbnailsSatelliteAreaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.thumbnails.satellite[':area'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectThumbnailsSatelliteArea<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.thumbnails.satellite)[':area']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.thumbnails.satellite)[':area']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getThumbnailsSatelliteAreaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getStationsStationIdObservationsQueryKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['$get']>,
) {
  return ['stations', '/stations/:stationId/observations', args] as const
}

export function getStationsStationIdObservationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stations)[':stationId']['observations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStationsStationIdObservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stations[':stationId'].observations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectStationsStationIdObservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stations)[':stationId']['observations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stations)[':stationId']['observations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getStationsStationIdObservationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getStationsStationIdObservationsLatestQueryKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>,
) {
  return ['stations', '/stations/:stationId/observations/latest', args] as const
}

export function getStationsStationIdObservationsLatestQueryOptions<
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
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStationsStationIdObservationsLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stations[':stationId'].observations.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectStationsStationIdObservationsLatest<
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
  args: () => InferRequestType<
    (typeof client.stations)[':stationId']['observations']['latest']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getStationsStationIdObservationsLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getStationsStationIdObservationsTimeQueryKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>,
) {
  return ['stations', '/stations/:stationId/observations/:time', args] as const
}

export function getStationsStationIdObservationsTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStationsStationIdObservationsTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stations[':stationId'].observations[':time'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectStationsStationIdObservationsTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.stations)[':stationId']['observations'][':time']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getStationsStationIdObservationsTimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getStationsStationIdTafsQueryKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs']['$get']>,
) {
  return ['stations', '/stations/:stationId/tafs', args] as const
}

export function getStationsStationIdTafsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stations)[':stationId']['tafs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStationsStationIdTafsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stations[':stationId'].tafs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectStationsStationIdTafs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stations)[':stationId']['tafs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stations)[':stationId']['tafs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getStationsStationIdTafsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getStationsStationIdTafsDateTimeQueryKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>,
) {
  return ['stations', '/stations/:stationId/tafs/:date/:time', args] as const
}

export function getStationsStationIdTafsDateTimeQueryOptions<
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
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStationsStationIdTafsDateTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stations[':stationId'].tafs[':date'][':time'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectStationsStationIdTafsDateTime<
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
  args: () => InferRequestType<
    (typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getStationsStationIdTafsDateTimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getStationsQueryKey(args: InferRequestType<typeof client.stations.$get>) {
  return ['stations', '/stations', args] as const
}

export function getStationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStationsQueryKey>
  >({
    queryKey: getStationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stations.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStationsStationIdQueryKey(
  args: InferRequestType<(typeof client.stations)[':stationId']['$get']>,
) {
  return ['stations', '/stations/:stationId', args] as const
}

export function getStationsStationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stations)[':stationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStationsStationIdQueryKey>
  >({
    queryKey: getStationsStationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stations[':stationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectStationsStationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stations)[':stationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stations)[':stationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStationsStationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStationsStationIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOfficesOfficeIdQueryKey(
  args: InferRequestType<(typeof client.offices)[':officeId']['$get']>,
) {
  return ['offices', '/offices/:officeId', args] as const
}

export function getOfficesOfficeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offices)[':officeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfficesOfficeIdQueryKey>
  >({
    queryKey: getOfficesOfficeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offices[':officeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOfficesOfficeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offices)[':officeId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.offices)[':officeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfficesOfficeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOfficesOfficeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOfficesOfficeIdBriefingQueryKey(
  args: InferRequestType<(typeof client.offices)[':officeId']['briefing']['$get']>,
) {
  return ['offices', '/offices/:officeId/briefing', args] as const
}

export function getOfficesOfficeIdBriefingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offices)[':officeId']['briefing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offices)[':officeId']['briefing']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOfficesOfficeIdBriefingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offices[':officeId'].briefing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOfficesOfficeIdBriefing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offices)[':officeId']['briefing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offices)[':officeId']['briefing']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOfficesOfficeIdBriefingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOfficesOfficeIdBriefingDownloadLatestQueryKey(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
  >,
) {
  return ['offices', '/offices/:officeId/briefing/download/latest', args] as const
}

export function getOfficesOfficeIdBriefingDownloadLatestQueryOptions<
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
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOfficesOfficeIdBriefingDownloadLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offices[':officeId'].briefing.download.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOfficesOfficeIdBriefingDownloadLatest<
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
  args: () => InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOfficesOfficeIdBriefingDownloadLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOfficesOfficeIdBriefingDownloadBriefingIdQueryKey(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
  >,
) {
  return ['offices', '/offices/:officeId/briefing/download/:briefingId', args] as const
}

export function getOfficesOfficeIdBriefingDownloadBriefingIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOfficesOfficeIdBriefingDownloadBriefingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offices[':officeId'].briefing.download[':briefingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOfficesOfficeIdBriefingDownloadBriefingId<
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
  args: () => InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOfficesOfficeIdBriefingDownloadBriefingIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOfficesOfficeIdHeadlinesHeadlineIdQueryKey(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>,
) {
  return ['offices', '/offices/:officeId/headlines/:headlineId', args] as const
}

export function getOfficesOfficeIdHeadlinesHeadlineIdQueryOptions<
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
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOfficesOfficeIdHeadlinesHeadlineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offices[':officeId'].headlines[':headlineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOfficesOfficeIdHeadlinesHeadlineId<
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
  args: () => InferRequestType<
    (typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOfficesOfficeIdHeadlinesHeadlineIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOfficesOfficeIdHeadlinesQueryKey(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines']['$get']>,
) {
  return ['offices', '/offices/:officeId/headlines', args] as const
}

export function getOfficesOfficeIdHeadlinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offices)[':officeId']['headlines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOfficesOfficeIdHeadlinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offices[':officeId'].headlines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOfficesOfficeIdHeadlines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offices)[':officeId']['headlines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offices)[':officeId']['headlines']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOfficesOfficeIdHeadlinesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOfficesOfficeIdWeatherstoriesQueryKey(
  args: InferRequestType<(typeof client.offices)[':officeId']['weatherstories']['$get']>,
) {
  return ['offices', '/offices/:officeId/weatherstories', args] as const
}

export function getOfficesOfficeIdWeatherstoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offices)[':officeId']['weatherstories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offices)[':officeId']['weatherstories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOfficesOfficeIdWeatherstoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offices[':officeId'].weatherstories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOfficesOfficeIdWeatherstories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offices)[':officeId']['weatherstories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offices)[':officeId']['weatherstories']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOfficesOfficeIdWeatherstoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOfficesOfficeIdWeatherstoriesDownloadImageIdQueryKey(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
  >,
) {
  return ['offices', '/offices/:officeId/weatherstories/download/:imageId', args] as const
}

export function getOfficesOfficeIdWeatherstoriesDownloadImageIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOfficesOfficeIdWeatherstoriesDownloadImageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offices[':officeId'].weatherstories.download[':imageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOfficesOfficeIdWeatherstoriesDownloadImageId<
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
  args: () => InferRequestType<
    (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOfficesOfficeIdWeatherstoriesDownloadImageIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPointsLatitudeLongitudeQueryKey(
  args: InferRequestType<(typeof client.points)[':latitude,:longitude']['$get']>,
) {
  return ['points', '/points/:latitude,:longitude', args] as const
}

export function getPointsLatitudeLongitudeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.points)[':latitude,:longitude']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPointsLatitudeLongitudeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.points[':latitude,:longitude'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPointsLatitudeLongitude<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.points)[':latitude,:longitude']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPointsLatitudeLongitudeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPointsLatitudeLongitudeRadioQueryKey(
  args: InferRequestType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>,
) {
  return ['points', '/points/:latitude,:longitude/radio', args] as const
}

export function getPointsLatitudeLongitudeRadioQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPointsLatitudeLongitudeRadioQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.points[':latitude,:longitude'].radio.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPointsLatitudeLongitudeRadio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.points)[':latitude,:longitude']['radio']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPointsLatitudeLongitudeRadioQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPointsLatitudeLongitudeStationsQueryKey(
  args: InferRequestType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>,
) {
  return ['points', '/points/:latitude,:longitude/stations', args] as const
}

export function getPointsLatitudeLongitudeStationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPointsLatitudeLongitudeStationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.points[':latitude,:longitude'].stations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPointsLatitudeLongitudeStations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.points)[':latitude,:longitude']['stations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getPointsLatitudeLongitudeStationsQueryKey>
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
      ...getPointsLatitudeLongitudeStationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRadarServersQueryKey(args: InferRequestType<typeof client.radar.servers.$get>) {
  return ['radar', '/radar/servers', args] as const
}

export function getRadarServersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.radar.servers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRadarServersQueryKey>
  >({
    queryKey: getRadarServersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radar.servers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRadarServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.radar.servers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.servers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRadarServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRadarServersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRadarServersIdQueryKey(
  args: InferRequestType<(typeof client.radar.servers)[':id']['$get']>,
) {
  return ['radar', '/radar/servers/:id', args] as const
}

export function getRadarServersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.radar.servers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadarServersIdQueryKey>
  >({
    queryKey: getRadarServersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radar.servers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRadarServersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.radar.servers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.radar.servers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRadarServersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRadarServersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRadarSpgdsQueryKey(args: InferRequestType<typeof client.radar.spgds.$get>) {
  return ['radar', '/radar/spgds', args] as const
}

export function getRadarSpgdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.radar.spgds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRadarSpgdsQueryKey>
  >({
    queryKey: getRadarSpgdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radar.spgds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRadarSpgds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.radar.spgds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.spgds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRadarSpgdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRadarSpgdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRadarStationsQueryKey(
  args: InferRequestType<typeof client.radar.stations.$get>,
) {
  return ['radar', '/radar/stations', args] as const
}

export function getRadarStationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.radar.stations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRadarStationsQueryKey>
  >({
    queryKey: getRadarStationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radar.stations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRadarStations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.radar.stations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.stations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRadarStationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRadarStationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRadarStationsStationIdQueryKey(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['$get']>,
) {
  return ['radar', '/radar/stations/:stationId', args] as const
}

export function getRadarStationsStationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRadarStationsStationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radar.stations[':stationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRadarStationsStationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.radar.stations)[':stationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRadarStationsStationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRadarStationsStationIdAlarmsQueryKey(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>,
) {
  return ['radar', '/radar/stations/:stationId/alarms', args] as const
}

export function getRadarStationsStationIdAlarmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRadarStationsStationIdAlarmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radar.stations[':stationId'].alarms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRadarStationsStationIdAlarms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRadarStationsStationIdAlarmsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRadarQueuesHostQueryKey(
  args: InferRequestType<(typeof client.radar.queues)[':host']['$get']>,
) {
  return ['radar', '/radar/queues/:host', args] as const
}

export function getRadarQueuesHostQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.radar.queues)[':host']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadarQueuesHostQueryKey>
  >({
    queryKey: getRadarQueuesHostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radar.queues[':host'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRadarQueuesHost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.radar.queues)[':host']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.radar.queues)[':host']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRadarQueuesHostQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRadarQueuesHostQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRadarProfilersStationIdQueryKey(
  args: InferRequestType<(typeof client.radar.profilers)[':stationId']['$get']>,
) {
  return ['radar', '/radar/profilers/:stationId', args] as const
}

export function getRadarProfilersStationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radar.profilers)[':stationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.radar.profilers)[':stationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRadarProfilersStationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radar.profilers[':stationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRadarProfilersStationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radar.profilers)[':stationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.radar.profilers)[':stationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRadarProfilersStationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRadioQueryKey(args: InferRequestType<typeof client.radio.$get>) {
  return ['radio', '/radio', args] as const
}

export function getRadioQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.radio.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRadioQueryKey>
  >({
    queryKey: getRadioQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radio.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRadio<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.radio.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radio.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRadioQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRadioQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRadioCallSignQueryKey(
  args: InferRequestType<(typeof client.radio)[':callSign']['$get']>,
) {
  return ['radio', '/radio/:callSign', args] as const
}

export function getRadioCallSignQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.radio)[':callSign']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadioCallSignQueryKey>
  >({
    queryKey: getRadioCallSignQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radio[':callSign'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRadioCallSign<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.radio)[':callSign']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.radio)[':callSign']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRadioCallSignQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRadioCallSignQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRadioCallSignBroadcastQueryKey(
  args: InferRequestType<(typeof client.radio)[':callSign']['broadcast']['$get']>,
) {
  return ['radio', '/radio/:callSign/broadcast', args] as const
}

export function getRadioCallSignBroadcastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radio)[':callSign']['broadcast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.radio)[':callSign']['broadcast']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRadioCallSignBroadcastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.radio[':callSign'].broadcast.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRadioCallSignBroadcast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.radio)[':callSign']['broadcast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.radio)[':callSign']['broadcast']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRadioCallSignBroadcastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProductsQueryKey(args: InferRequestType<typeof client.products.$get>) {
  return ['products', '/products', args] as const
}

export function getProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >({
    queryKey: getProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProductsLocationsQueryKey() {
  return ['products', '/products/locations'] as const
}

export function getProductsLocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsLocationsQueryKey>
  >({
    queryKey: getProductsLocationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.locations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.locations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsLocationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getProductsTypesQueryKey() {
  return ['products', '/products/types'] as const
}

export function getProductsTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsTypesQueryKey>
  >({
    queryKey: getProductsTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProductsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProductsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getProductsProductIdQueryKey(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
) {
  return ['products', '/products/:productId', args] as const
}

export function getProductsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsProductIdQueryKey>
  >({
    queryKey: getProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products)[':productId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsProductIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsProductIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProductsTypesTypeIdQueryKey(
  args: InferRequestType<(typeof client.products.types)[':typeId']['$get']>,
) {
  return ['products', '/products/types/:typeId', args] as const
}

export function getProductsTypesTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.types)[':typeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsTypesTypeIdQueryKey>
  >({
    queryKey: getProductsTypesTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.types[':typeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsTypesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products.types)[':typeId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products.types)[':typeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsTypesTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsTypesTypeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProductsTypesTypeIdLocationsQueryKey(
  args: InferRequestType<(typeof client.products.types)[':typeId']['locations']['$get']>,
) {
  return ['products', '/products/types/:typeId/locations', args] as const
}

export function getProductsTypesTypeIdLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.types)[':typeId']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.types)[':typeId']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProductsTypesTypeIdLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.types[':typeId'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsTypesTypeIdLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.types)[':typeId']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products.types)[':typeId']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProductsTypesTypeIdLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProductsLocationsLocationIdTypesQueryKey(
  args: InferRequestType<(typeof client.products.locations)[':locationId']['types']['$get']>,
) {
  return ['products', '/products/locations/:locationId/types', args] as const
}

export function getProductsLocationsLocationIdTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.locations)[':locationId']['types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.locations)[':locationId']['types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProductsLocationsLocationIdTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.locations[':locationId'].types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsLocationsLocationIdTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.locations)[':locationId']['types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products.locations)[':locationId']['types']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getProductsLocationsLocationIdTypesQueryKey>
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
      ...getProductsLocationsLocationIdTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProductsTypesTypeIdLocationsLocationIdQueryKey(
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
  >,
) {
  return ['products', '/products/types/:typeId/locations/:locationId', args] as const
}

export function getProductsTypesTypeIdLocationsLocationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProductsTypesTypeIdLocationsLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.types[':typeId'].locations[':locationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsTypesTypeIdLocationsLocationId<
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
  args: () => InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProductsTypesTypeIdLocationsLocationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getProductsTypesTypeIdLocationsLocationIdLatestQueryKey(
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
  >,
) {
  return ['products', '/products/types/:typeId/locations/:locationId/latest', args] as const
}

export function getProductsTypesTypeIdLocationsLocationIdLatestQueryOptions<
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
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProductsTypesTypeIdLocationsLocationIdLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.types[':typeId'].locations[':locationId'].latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsTypesTypeIdLocationsLocationIdLatest<
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
  args: () => InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProductsTypesTypeIdLocationsLocationIdLatestQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getZonesQueryKey(args: InferRequestType<typeof client.zones.$get>) {
  return ['zones', '/zones', args] as const
}

export function getZonesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.zones.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getZonesQueryKey>
  >({
    queryKey: getZonesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.zones.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectZones<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.zones.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getZonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getZonesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getZonesTypeQueryKey(
  args: InferRequestType<(typeof client.zones)[':type']['$get']>,
) {
  return ['zones', '/zones/:type', args] as const
}

export function getZonesTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.zones)[':type']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getZonesTypeQueryKey>
  >({
    queryKey: getZonesTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.zones[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectZonesType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.zones)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getZonesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getZonesTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getZonesTypeZoneIdQueryKey(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['$get']>,
) {
  return ['zones', '/zones/:type/:zoneId', args] as const
}

export function getZonesTypeZoneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesTypeZoneIdQueryKey>
  >({
    queryKey: getZonesTypeZoneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.zones[':type'][':zoneId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectZonesTypeZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.zones)[':type'][':zoneId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getZonesTypeZoneIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getZonesTypeZoneIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getZonesTypeZoneIdForecastQueryKey(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>,
) {
  return ['zones', '/zones/:type/:zoneId/forecast', args] as const
}

export function getZonesTypeZoneIdForecastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getZonesTypeZoneIdForecastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.zones[':type'][':zoneId'].forecast.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectZonesTypeZoneIdForecast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getZonesTypeZoneIdForecastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getZonesTypeZoneIdRadioQueryKey(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>,
) {
  return ['zones', '/zones/:type/:zoneId/radio', args] as const
}

export function getZonesTypeZoneIdRadioQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getZonesTypeZoneIdRadioQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.zones[':type'][':zoneId'].radio.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectZonesTypeZoneIdRadio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getZonesTypeZoneIdRadioQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getZonesForecastZoneIdObservationsQueryKey(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>,
) {
  return ['zones', '/zones/forecast/:zoneId/observations', args] as const
}

export function getZonesForecastZoneIdObservationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getZonesForecastZoneIdObservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.zones.forecast[':zoneId'].observations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectZonesForecastZoneIdObservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getZonesForecastZoneIdObservationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getZonesForecastZoneIdStationsQueryKey(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>,
) {
  return ['zones', '/zones/forecast/:zoneId/stations', args] as const
}

export function getZonesForecastZoneIdStationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getZonesForecastZoneIdStationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.zones.forecast[':zoneId'].stations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectZonesForecastZoneIdStations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getZonesForecastZoneIdStationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
